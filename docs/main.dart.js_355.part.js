((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,N,P,A0,S,Aa,L,H,E,T,Ab,Q,Ac,U,Ad,Ae,A1,Af,Ag,R,M,A2,A3,Ah,A4,A5,A6,Ai,Aj,A7,Ak,Al,A8,Am,G,An,Ao,Ap,A9,Aq,V,O,Ar,As,W,At,X,Y,F,Au,K,I,Z,C={
bEP(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bEP=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vE(null,""),$async$bEP)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nh(b1)
s=A.bZ(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dt(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cU(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.L)(h),++d){a0=h[d]
f.push(A.H(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.X.aq(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.r8(t,a1,B.hS,"book",E.Gf),$async$bEP)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.QV(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.Lp(l)?y.k:y.y)
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cB
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=H.a2S(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEP,v)},
ahp(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ahp=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vE(null,""),$async$ahp)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nh(b6)
s=x.S
r=A.d5(c1,0,A.dC(4,"count",s),A.T(c1).c)
q=H.a2F(new A.N(r,new C.fJF(),r.$ti.k("N<ak.E,n>")).aG(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fJE(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.aq(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ahp)
case 6:l=c5
k=H.QV(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aoX(s,D.dAm,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.dt(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.L)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.H(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.X.aq(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ahp)
case 10:l=c5
k=l==null?null:H.QV(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.de(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.ld(a5,a2.k("ld<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gS(a5))
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
p=A.cH(new A.bd(h,s),new C.fJG(),s.k("M.E"),p)
p=H.a2F(A.pw(p,3,A.a7(p).k("M.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a2S(s,b9),$async$ahp)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aoX(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahp,v)},
hzA(d,e,f){return A.ck(null,B.w.j(0.65),!1,null,new C.fT7(e,f),d,null,!0,!0,x.g2)},
aoX:function aoX(d,e,f){this.a=d
this.b=e
this.c=f},
fJF:function fJF(){},
fJE:function fJE(d){this.a=d},
fJG:function fJG(){},
fT7:function fT7(d,e){this.a=d
this.b=e},
bCD(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bCD=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b3(b1,new C.fxB())){u=null
w=1
break}t=B.d.d0(b1,new C.fxC())
s=$.S()
r=new A.p2()
q=A.z8(r,D.aQl)
p=A.I()
p.r=B.c.gp(0)
q.aP(D.aQl,p)
o=A.I()
o.r=B.N.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.by
o.e=B.dQ
n=new C.fxH(t)
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
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
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
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aH(a3,o)}w=4
return A.b(r.nj().xd(520,160),$async$bCD)
case 4:w=3
return A.b(b3.hx(B.ha),$async$bCD)
case 3:b0=b3
u=b0==null?null:J.eS(B.dK.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCD,v)},
fHl(d){return C.idH(d)},
idH(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fHl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bhZ()
n=d.x!=null&&d.zg(null).length===0
if(d.x!=null)t=n?D.A1:D.Jo
else t=d.gUd()?D.Jo:D.aLg
w=3
return A.b(C.bCD(d.ax),$async$fHl)
case 3:s=f
p.a=null
if(s!=null)p.a=A.anD(s)
r=A.a4N(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aLg}else{p.c=C.x2(q,!0)
p.b=n?D.A1:D.Jo}r.a3I(A.h2x(new C.fHn(p,d,new C.fHo(),t,n,o),null,D.bDH,B.wR))
u=r.jB(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHl,v)},
fO_(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fO_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fHl(d),$async$fO_)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.ar(q,0,40)
u=Ag.H0(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fO_,v)},
fxB:function fxB(){},
fxC:function fxC(){},
fxH:function fxH(d){this.a=d},
fHo:function fHo(){},
fHn:function fHn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fHm:function fHm(){},
fTA(d,e){var w=0,v=A.j(x.H)
var $async$fTA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ck(null,B.w.j(0.55),!0,null,new C.fTE(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fTA)
case 2:return A.h(null,v)}})
return A.i($async$fTA,v)},
bFh(d,e,f,g){return C.ilh(d,e,f,g)},
ilh(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bFh=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gak(e.split(",")):e
r=B.cF.aO(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.U(D.ff8)
w=1
break}w=3
return A.b(A.ck(null,null,!0,null,new C.fTw(g,r,f),d,null,!0,!0,x.H),$async$bFh)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bFh,v)},
fTF(d,e){var w=0,v=A.j(x.H)
var $async$fTF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ck(null,null,!0,null,new C.fTI(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fTF)
case 2:return A.h(null,v)}})
return A.i($async$fTF,v)},
aZV:function aZV(d,e){this.c=d
this.a=e},
c6H:function c6H(){},
bc8:function bc8(d,e){this.b=d
this.a=e},
fTE:function fTE(d,e){this.a=d
this.b=e},
fTB:function fTB(d){this.a=d},
fTC:function fTC(d,e,f){this.a=d
this.b=e
this.c=f},
fTD:function fTD(d,e){this.a=d
this.b=e},
fTw:function fTw(d,e,f){this.a=d
this.b=e
this.c=f},
fTu:function fTu(d){this.a=d},
fTv:function fTv(d,e,f){this.a=d
this.b=e
this.c=f},
fTI:function fTI(d,e){this.a=d
this.b=e},
fTG:function fTG(d){this.a=d},
fTH:function fTH(d,e,f){this.a=d
this.b=e
this.c=f},
fBV(d,e){var w=0,v=A.j(x.y),u,t
var $async$fBV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2q(d),$async$fBV)
case 3:t=g
J.nG(t,new C.fBW(e))
u=A.ai3(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fBV,v)},
fBW:function fBW(d){this.a=d},
ap8:function ap8(d,e,f){this.c=d
this.d=e
this.a=f},
aDR:function aDR(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dMU:function dMU(d,e){this.a=d
this.b=e},
dMF:function dMF(d,e){this.a=d
this.b=e},
dMI:function dMI(d,e,f){this.a=d
this.b=e
this.c=f},
dMH:function dMH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dMG:function dMG(d,e){this.a=d
this.b=e},
dMJ:function dMJ(d,e){this.a=d
this.b=e},
dMD:function dMD(){},
dME:function dME(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dMC:function dMC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dMn:function dMn(d){this.a=d},
dMo:function dMo(d,e,f){this.a=d
this.b=e
this.c=f},
dMp:function dMp(d,e){this.a=d
this.b=e},
dMm:function dMm(d){this.a=d},
dMu:function dMu(d,e){this.a=d
this.b=e},
dMl:function dMl(d){this.a=d},
dMv:function dMv(d,e,f){this.a=d
this.b=e
this.c=f},
dMw:function dMw(d,e,f){this.a=d
this.b=e
this.c=f},
dMk:function dMk(d,e){this.a=d
this.b=e},
dMx:function dMx(d,e,f){this.a=d
this.b=e
this.c=f},
dMj:function dMj(d,e){this.a=d
this.b=e},
dMy:function dMy(d,e){this.a=d
this.b=e},
dMi:function dMi(d){this.a=d},
dMz:function dMz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dMg:function dMg(){},
dMa:function dMa(d){this.a=d},
dMb:function dMb(d){this.a=d},
dMh:function dMh(d,e){this.a=d
this.b=e},
dMA:function dMA(d,e){this.a=d
this.b=e},
dMf:function dMf(d){this.a=d},
dMB:function dMB(d){this.a=d},
dMe:function dMe(){},
dMq:function dMq(d,e){this.a=d
this.b=e},
dMd:function dMd(d){this.a=d},
dMr:function dMr(d,e,f){this.a=d
this.b=e
this.c=f},
dMc:function dMc(d,e){this.a=d
this.b=e},
dM9:function dM9(d,e){this.a=d
this.b=e},
dMs:function dMs(d){this.a=d},
dMt:function dMt(d,e,f){this.a=d
this.b=e
this.c=f},
dMX:function dMX(){},
dMY:function dMY(d,e){this.a=d
this.b=e},
dMV:function dMV(d){this.a=d},
dMW:function dMW(d){this.a=d},
dMR:function dMR(d,e){this.a=d
this.b=e},
dMS:function dMS(d){this.a=d},
dMK:function dMK(d,e,f){this.a=d
this.b=e
this.c=f},
dML:function dML(d,e,f){this.a=d
this.b=e
this.c=f},
dMM:function dMM(d,e,f){this.a=d
this.b=e
this.c=f},
dMN:function dMN(d,e,f){this.a=d
this.b=e
this.c=f},
dMO:function dMO(d,e,f){this.a=d
this.b=e
this.c=f},
dMP:function dMP(d,e,f){this.a=d
this.b=e
this.c=f},
dMQ:function dMQ(d,e,f){this.a=d
this.b=e
this.c=f},
dMZ:function dMZ(){},
dN_:function dN_(){},
dN0:function dN0(){},
dN1:function dN1(d){this.a=d},
dMT:function dMT(d,e){this.a=d
this.b=e},
hvB(d){return B.d.dN(D.a3R,new C.fCz(d),new C.fCA())},
uD:function uD(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fCz:function fCz(d){this.a=d},
fCA:function fCA(){},
ala:function ala(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aVG:function aVG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Tb:function Tb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfL:function bfL(){this.d=$
this.c=this.a=null},
dcG:function dcG(d,e){this.a=d
this.b=e},
dcE:function dcE(d,e){this.a=d
this.b=e},
dcF:function dcF(){},
dcH:function dcH(d,e){this.a=d
this.b=e},
hg7(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bk(J.k(u==null?"":u))
return new C.nq(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
Lb(d,e){return C.icj(d,e)},
icj(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
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
break}p=B.X.aM(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.de(p,x.f)
o=A.cH(o,new C.fEW(),o.$ti.k("M.E"),x.B)
n=A.a7(o).k("Z<M.E>")
o=A.C(new A.Z(o,new C.fEX(),n),n.k("M.E"))
B.d.aZ(o,new C.fEY())
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
r=J.b6(f,new C.fSd(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.au("String","ngmy_family_book_v1_"+s+"_"+e,B.X.aq(r,null)),$async$Ba)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ba,v)},
aRK(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aRK=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lb(d,e),$async$aRK)
case 2:u=h
t=J.cE(u)
s=t.bh(u,new C.h_z(f))
if(s===-1)t.c6(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Ba(d,e,u),$async$aRK)
case 3:return A.h(null,v)}})
return A.i($async$aRK,v)},
bD6(d,e,f){var w=0,v=A.j(x.H),u
var $async$bD6=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lb(d,e),$async$bD6)
case 2:u=h
J.nG(u,new C.fBN(f))
w=3
return A.b(C.Ba(d,e,u),$async$bD6)
case 3:return A.h(null,v)}})
return A.i($async$bD6,v)},
bDl(d,e){return C.ici(d,e)},
ici(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bDl=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bDl)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.r(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.O_
w=1
break}p=B.X.aM(0,q,null)
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
if(D.Dl.aj(0,o.h(0,"foil")))j=A.cQ(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.E(i==null?25:i,18,36)
h=B.d.t(D.a5v,o.h(0,"position"))?A.cQ(o.h(0,"position")):"middle"
g=B.d.t(D.a4S,o.h(0,"frame"))?A.cQ(o.h(0,"frame")):"double"
f=B.d.t(D.a4O,o.h(0,"texture"))?A.cQ(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.d2y,o.h(0,"header"))?A.cQ(o.h(0,"header")):"classic"
o=new C.HY(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.O_
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.O_
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bDl,v)},
S0(d,e,f){return C.ikO(d,e,f)},
ikO(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$S0=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$S0)
case 7:r=h
w=8
return A.b(r.au("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.X.aq(f.ah(),null)),$async$S0)
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
return A.i($async$S0,v)},
Rt(d,e){return C.ick(d,e)},
ick(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Rt=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Rt)
case 7:r=g
q=r.tC("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Lb(d,e),$async$Rt)
case 8:if(!j.cL(g)){n=B.a.i(d.toLowerCase())
m=J.lE(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Rt)
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
return A.i($async$Rt,v)},
agK(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$agK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rt(d,e),$async$agK)
case 3:s=g
r=J.a6(s)
if(r.gL(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gL(s):"main"
r.M(s,t)
w=5
return A.b(A.az(),$async$agK)
case 5:w=4
return A.b(g.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$agK)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agK,v)},
a33(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a33=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Rt(d,e),$async$a33)
case 2:s=h
J.hu(s,f)
w=3
return A.b(A.az(),$async$a33)
case 3:u=h
w=4
return A.b(u.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a33)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a33)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a33)
case 6:return A.h(null,v)}})
return A.i($async$a33,v)},
nq:function nq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEW:function fEW(){},
fEX:function fEX(){},
fEY:function fEY(){},
fSd:function fSd(){},
h_z:function h_z(d){this.a=d},
fBN:function fBN(d){this.a=d},
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
bQa:function bQa(d){this.a=d},
il6(d,e,f,g,h,i,j){return A.a5(d,!1).cc(A.eh(new C.fSM(j,i,f,e,h,g),!0,null,x.H))},
Rp(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Rp=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rt(h,g),$async$Rp)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.U(D.aSs)
u=!1
w=1
break}w=4
return A.b(C.hzA(d,f,e),$async$Rp)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.agK(h,g),$async$Rp)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nq(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.Ba(h,r,p),$async$Rp)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.S0(h,r,new C.HY("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Rp)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Rp,v)},
fSM:function fSM(d,e,f,g,h,i){var _=this
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
aAR:function aAR(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
ddl:function ddl(d){this.a=d},
ddk:function ddk(d,e){this.a=d
this.b=e},
dd9:function dd9(d,e){this.a=d
this.b=e},
dd6:function dd6(d,e){this.a=d
this.b=e},
dcI:function dcI(d){this.a=d},
dcJ:function dcJ(d,e){this.a=d
this.b=e},
dda:function dda(d){this.a=d},
dcR:function dcR(d){this.a=d},
dcP:function dcP(d){this.a=d},
dcQ:function dcQ(d){this.a=d},
dcS:function dcS(d){this.a=d},
dd7:function dd7(d){this.a=d},
dd8:function dd8(){},
dcN:function dcN(d){this.a=d},
dcO:function dcO(d,e){this.a=d
this.b=e},
dcT:function dcT(d){this.a=d},
dcU:function dcU(d,e){this.a=d
this.b=e},
ddj:function ddj(d){this.a=d},
ddi:function ddi(d,e){this.a=d
this.b=e},
ddh:function ddh(d){this.a=d},
dd3:function dd3(d){this.a=d},
dd2:function dd2(d){this.a=d},
dd4:function dd4(d){this.a=d},
dcK:function dcK(d,e){this.a=d
this.b=e},
dd5:function dd5(d,e){this.a=d
this.b=e},
dcX:function dcX(d){this.a=d},
dcY:function dcY(d){this.a=d},
dcW:function dcW(){},
dcZ:function dcZ(d){this.a=d},
dd_:function dd_(d){this.a=d},
dd0:function dd0(d,e){this.a=d
this.b=e},
dd1:function dd1(d,e,f){this.a=d
this.b=e
this.c=f},
dcV:function dcV(d,e){this.a=d
this.b=e},
ddc:function ddc(d){this.a=d},
ddb:function ddb(){},
ddd:function ddd(d){this.a=d},
dde:function dde(d){this.a=d},
ddf:function ddf(d){this.a=d},
ddg:function ddg(d,e){this.a=d
this.b=e},
dcL:function dcL(d){this.a=d},
dcM:function dcM(d){this.a=d},
ZR:function ZR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg9:function bg9(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
df6:function df6(d){this.a=d},
df7:function df7(d){this.a=d},
df5:function df5(d){this.a=d},
df8:function df8(d){this.a=d},
df4:function df4(d){this.a=d},
df9:function df9(d){this.a=d},
df3:function df3(d){this.a=d},
dfa:function dfa(d,e){this.a=d
this.b=e},
df2:function df2(d,e){this.a=d
this.b=e},
dfb:function dfb(d,e){this.a=d
this.b=e},
ZP:function ZP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
af6:function af6(d,e,f){this.a=d
this.b=e
this.c=f},
aAU:function aAU(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
ddA:function ddA(d,e){this.a=d
this.b=e},
ddz:function ddz(d,e){this.a=d
this.b=e},
ddE:function ddE(d){this.a=d},
ddD:function ddD(d,e){this.a=d
this.b=e},
ddB:function ddB(d){this.a=d},
ddC:function ddC(d){this.a=d},
ddF:function ddF(d){this.a=d},
ddG:function ddG(d){this.a=d},
ddy:function ddy(d,e){this.a=d
this.b=e},
ddx:function ddx(d,e){this.a=d
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
cLV:function cLV(d){this.a=d},
cLW:function cLW(){},
cLX:function cLX(d){this.a=d},
bdl:function bdl(d,e,f){this.b=d
this.c=e
this.a=f},
bdc:function bdc(d,e){this.b=d
this.a=e},
uE:function uE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zn:function Zn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdj:function bdj(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d4u:function d4u(d,e,f){this.a=d
this.b=e
this.c=f},
d4t:function d4t(d,e){this.a=d
this.b=e},
d4T:function d4T(d){this.a=d},
d4G:function d4G(){},
d4U:function d4U(d){this.a=d},
d4F:function d4F(){},
d4V:function d4V(d,e){this.a=d
this.b=e},
d4E:function d4E(d,e){this.a=d
this.b=e},
d4W:function d4W(d,e){this.a=d
this.b=e},
d4D:function d4D(d,e){this.a=d
this.b=e},
d4X:function d4X(d){this.a=d},
d4C:function d4C(){},
d4Y:function d4Y(d,e){this.a=d
this.b=e},
d4B:function d4B(d,e){this.a=d
this.b=e},
d4Z:function d4Z(d){this.a=d},
d4O:function d4O(d,e){this.a=d
this.b=e},
d5_:function d5_(d){this.a=d},
d50:function d50(d){this.a=d},
d52:function d52(d){this.a=d},
d53:function d53(d){this.a=d},
d4N:function d4N(d,e){this.a=d
this.b=e},
d54:function d54(d,e){this.a=d
this.b=e},
aHT:function aHT(d){this.a=d},
biI:function biI(d){this.a=d},
bbw:function bbw(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
alb:function alb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a14:function a14(d,e){this.a=d
this.b=e},
alc:function alc(d,e,f,g,h,i){var _=this
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
_.a8$=i
_.c=_.a=null},
bQk:function bQk(d){this.a=d},
bQe:function bQe(d){this.a=d},
bQd:function bQd(d,e){this.a=d
this.b=e},
bQn:function bQn(d){this.a=d},
bQf:function bQf(d){this.a=d},
bQg:function bQg(d){this.a=d},
bQj:function bQj(d){this.a=d},
bQi:function bQi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQl:function bQl(d,e){this.a=d
this.b=e},
bQm:function bQm(){},
bQh:function bQh(d){this.a=d},
bQb:function bQb(d,e){this.a=d
this.b=e},
bQc:function bQc(d){this.a=d},
bog:function bog(d,e){this.b=d
this.a=e},
aAS:function aAS(){},
iw(d,e){var w
$.S()
w=A.I()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.by
w.e=B.dQ
return w},
bCF(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.a
J.bl(j.save())
j.translate(e.a,e.b)
d.p9(0,a0?-f:f,f)
w=A.bK(B.ic,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.I()
t.r=v.gp(0)
d.dQ(w,t)
w=a1===D.Wt
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.bo(D.elB,new A.t(-4+v,-2),C.iw(q,5))
d.bo(D.ejb,new A.t(4-v,-2),C.iw(q,5))}else{t=A.bK(B.Je,14,40)
p=A.I()
p.r=v.gp(0)
d.dQ(t,p)}v=u.r
u=x.v
o=new A.aF(v,B.ag,k,k,A.a([],u))
t=-64-r
o.D(new A.aY(-11,t))
o.D(new A.c5(-15,-40,-14,a3?-12:-18))
o.D(new A.aq(14,a3?-12:-18))
o.D(new A.c5(15,-40,11,t))
o.D(new A.bt())
t=A.I()
t.r=w.gp(0)
d.aH(o,t)
u=new A.aF(v,B.ag,k,k,A.a([],u))
u.D(new A.aY(-12,-50-r))
v=-46-r
u.D(new A.aq(12,v))
u.D(new A.aq(12.5,-42-r))
u.D(new A.aq(-12.5,v))
u.D(new A.bt())
v=A.I()
v.r=h.c.gp(0)
d.aH(u,v)
A:{if(D.abV===a1){w=Math.sin(g*3.4)
break A}if(D.abW===a1){w=Math.sin(g*7.5)
break A}w=s
break A}if(a1===D.abV){n=-52+w*14
d.bo(new A.t(10,n-22),new A.t(10,n+44),C.iw(F.Fr,3.4))
d.bo(D.elS,new A.t(9,n),C.iw(q,4))
d.bo(D.ejB,new A.t(10,n),C.iw(q,4))}else if(a1===D.abW){d.bo(D.ekH,new A.t(-8,-26-Math.max(0,w)*6),C.iw(q,4))
d.bo(D.ehF,new A.t(8,-26-Math.max(0,-w)*6),C.iw(q,4))}else{w=s*3
v=-38-r
d.bo(D.ekL,new A.t(-12-w,v),C.iw(q,4))
d.bo(D.aKj,new A.t(12+w,v),C.iw(q,4))}w=A.I()
w.r=q.gp(0)
d.aP(D.f2y,w)
m=new A.t(0,-77-r)
w=A.bK(m,22,19)
v=A.I()
v.r=q.gp(0)
d.dQ(w,v)
w=h.y
if(w!=null){v=A.bK(m.a7(0,I.v8),15,24)
u=A.I()
u.r=w.gp(0)
d.dQ(v,u)
u=m.a7(0,D.ehA)
v=A.I()
v.r=w.gp(0)
d.ad(u,4,v)}else{w=A.bK(m.a7(0,B.t4),23,20)
v=h.d
u=A.I()
u.r=v.gp(0)
d.e4(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.bo(m.a7(0,D.elQ),m.a7(0,D.ekF),C.iw(v,2.2))
d.bo(m.a7(0,D.ejA),m.a7(0,D.ehx),C.iw(v,2.2))}if(w===4){w=m.a7(0,D.elU)
u=A.I()
u.r=v.gp(0)
d.ad(w,6,u)
u=m.a7(0,D.ejC)
w=A.I()
w.r=v.gp(0)
d.ad(u,6,w)}}w=m.a7(0,D.eks)
v=A.I()
v.r=B.i2.gp(0)
d.ad(w,0.9,v)
v=m.a7(0,D.ekg)
w=A.I()
w.r=B.i2.gp(0)
d.ad(v,0.9,w)
if(i){l=m.a7(0,I.a7q)
w=A.bK(l,21,22)
v=A.I()
v.r=D.lx.gp(0)
d.dQ(w,v)
v=A.bK(l.a7(0,I.aKg),5,12)
w=A.I()
w.r=D.bdI.gp(0)
d.dQ(v,w)
d.bo(l.a7(0,D.elM),l.a7(0,I.aKD),C.iw(B.cI,1.4))
d.bo(D.aKj,new A.t(15,-88-r),C.iw(q,3.6))}j.restore()},
hui(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.a
J.bl(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.bK(B.dC,18,96)
u=B.w.j(0.28)
$.S()
t=A.I()
t.r=u.gp(0)
d.dQ(v,t)
t=A.bK(B.dC,11,70)
v=B.w.j(0.2)
u=A.I()
u.r=v.gp(0)
d.dQ(t,u)
d.lq(D.aQp,A.I())
C.i0L(d,g,h,i,j)
s=(k==null?D.a7v:k).a-w>=0?1:-1
w=A.I()
w.a=B.Lp
w.sam(A.jx(new A.t(s*70,-60),new A.t(-s*70,-60),A.a([D.ahb.j(0.5),D.ahb.j(0.12),D.bkY.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aP(D.aQp,w)
r.restore()
r.restore()},
i0L(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.a,a1=A.ar(a0,B.w,0.28)
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
s=A.bs(D.f2z,B.t8)
p=$.S()
o=A.I()
o.r=u.gp(0)
a2.az(s,o)
o=A.bs(D.f2u,B.hF)
s=A.ar(v,B.w,0.18)
s.toString
n=A.I()
n.r=s.gp(0)
a2.az(o,n)
n=A.bs(D.f2I,B.hF)
o=A.ar(v,B.w,0.1)
o.toString
s=A.I()
s.r=o.gp(0)
a2.az(n,s)
s=A.I()
s.r=a0.gp(0)
a2.dQ(D.f2B,s)
s=A.I()
s.r=a0.gp(0)
a2.dQ(D.f1k,s)
s=a2.a
J.bl(s.save())
s.translate(a4.w,0)
J.bl(s.save())
a2.p9(0,q,q*(1+t*0.012))
o=a3.f
m=o&&!a3.r?25:28
n=x.v
l=new A.aF(p.r,B.ag,d,d,A.a([],n))
p=-m
k=p+2
l.D(new A.aY(k,-58))
l.D(new A.c5(p-3,-62,p,-52))
l.D(new A.aq(p+4,-14))
l.D(new A.aq(m-4,-14))
l.D(new A.aq(m,-52))
l.D(new A.c5(m+3,-62,m-2,-58))
l.D(new A.c5(0,-70,k,-58))
l.D(new A.bt())
k=A.I()
k.r=v.gp(0)
a2.aH(l,k)
J.bl(s.save())
a2.mK(0,l)
switch(a3.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.d9c[j]
i=new A.ao(B.O,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.by
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[-34+u,-64,14+u,-14,h])
h.delete()}break
case 2:for(k=a3.c,g=-56;g<-14;g+=11)for(f=-26+B.o.F(B.o.ao(g,11),2)*6;f<28;f+=12){i=k.j(0.85)
$.S()
e=new A.ao(B.O,B.M,B.S,B.T,B.R)
e.r=i.gp(0)
h=e.G()
s.drawCircle(f,g,3.6,h)
h.delete()
e=new A.ao(B.O,B.M,B.S,B.T,B.R)
e.r=u.gp(0)
h=e.G()
s.drawCircle(f,g,1.6,h)
h.delete()}break
case 3:for(u=a3.c,f=-28;f<30;f+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.by
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[f,-64,f,-14,h])
h.delete()}for(g=-60;g<-14;g+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.S,B.T,B.R)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.by
i.e=B.dQ
h=i.G()
s.drawLine.apply(s,[-30,g,30,g,h])
h.delete()}break
default:a2.bo(D.elg,D.eii,C.iw(a3.c.j(0.9),3))}a2.bo(D.elN,D.ekN,C.iw(B.w.j(0.18),1.6))
a2.bo(D.ehE,I.aKl,C.iw(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.I()
i.r=u.gp(0)
a2.aP(D.f1g,i)
s.restore()
i=A.I()
i.r=a1.gp(0)
a2.aP(D.f1u,i)
n=new A.aF(k.r,B.ag,d,d,A.a([],n))
n.D(new A.aY(-9,-66))
n.D(new A.c5(0,-57,9,-66))
n.D(new A.c5(0,-60,-9,-66))
k=A.I()
k.r=a0.gp(0)
a2.aH(n,k)
if(a3.e!==1)u=a3.r&&!o
else u=!0
if(u)a2.e4(D.f1D,0.1,2.941592653589793,!1,C.iw(a3.c,2.2))
s.restore()
u=-56*q
o=a4.Q
if(o==null)o=D.a7z
n=25*q
k=23*q
i=9*q
C.hqv(a2,new A.t(p*q+2,u),o,n,k,-1,v,a0,i)
o=a4.as
p=o==null?D.DO:o
C.hqv(a2,new A.t(m*q-2,u),p,n,k,1,v,a0,i)
if(a4.at){a2.bo(D.ej3,D.ej_,C.iw(D.ai6,4))
a2.bo(D.ej1,D.eiY,C.iw(D.FR.j(0.7),1.4))
u=A.I()
u.r=B.cI.gp(0)
a2.ad(D.ej0,5,u)}s.restore()
u=a4.w
p=a4.e
o=a4.r
J.bl(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a2.il(0,a4.f)
a2.bW(0,r)
C.i0I(a2,a3,a4,a5,a6,a0,a1,w)
s.restore()},
hqv(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aE(0,e),r=s.gcC(),q=r===0?B.ic:s.eV(0,r),p=B.k.E(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.t(o,w)
if(o*i<0)v=new A.t(-o,-w)
u=e.a7(0,q.aI(0,n)).a7(0,v.aI(0,m))
t=e.a7(0,q.aI(0,p))
d.bo(e,u,C.iw(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.bo(e,u,C.iw(o,l*0.35))
d.bo(u,t,C.iw(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.bo(u,t,C.iw(o,l*0.22))
$.S()
o=A.I()
o.r=j.gp(0)
d.ad(u,l*0.55,o)
o=A.bK(t,l*1.15,l)
w=A.I()
w.r=k.gp(0)
d.dQ(o,w)
w=-l
w=t.a7(0,new A.t(i*w*0.45,w*0.1))
o=A.I()
o.r=k.gp(0)
d.ad(w,l*0.28,o)},
i0I(c3,c4,c5,c6,c7,c8,c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1=c4.d,c2=c4.e
if(c2===3||c2===4){w=A.bK(B.v7,40,38)
$.S()
v=A.I()
v.r=c1.gp(0)
c3.dQ(w,v)}if(c2===4){$.S()
w=A.I()
w.r=c1.gp(0)
c3.ad(D.ekX,9.5,w)
w=A.I()
w.r=c1.gp(0)
c3.ad(D.ehT,9.5,w)}w=A.bK(D.em9,10,6)
v=$.S()
u=A.I()
u.r=c9.gp(0)
c3.dQ(w,u)
u=A.bK(D.ekp,10,6)
w=A.I()
w.r=c9.gp(0)
c3.dQ(u,w)
v=v.r
w=x.v
t=new A.aF(v,B.ag,c0,c0,A.a([],w))
t.D(new A.aY(0,-20))
t.D(new A.kN(13,-20,17,-9,16,2))
t.D(new A.kN(15,13,8,20,0,20))
t.D(new A.kN(-8,20,-15,13,-16,2))
t.D(new A.kN(-17,-9,-13,-20,0,-20))
t.D(new A.bt())
u=A.I()
u.sam(A.tt(D.elD,28,A.a([d0,c8,c9],x.O),A.a([0,0.55,1],x.n),B.x,c0,c0,0))
c3.aH(t,u)
u=c4.r
if(u){s=C.iw(c9.j(0.5),0.8)
c3.e4(D.f2K,3.455751918948773,2.5132741228718345,!1,s)
c3.e4(D.f1n,3.455751918948773,2.5132741228718345,!1,s)
c3.bo(D.ekU,D.ekI,s)
c3.bo(D.ehP,D.ehH,s)
c3.e4(D.f1C,2.2,1.4,!1,s)
c3.e4(D.f1l,-0.4,1.4,!1,s)}switch(c2){case 0:for(r=c3.a,q=0;q<16;++q){p=3.141592653589793*(1.02+0.96*q/15)
o=Math.cos(p)
n=Math.sin(p)
m=new A.ao(B.O,B.M,B.S,B.T,B.R)
m.r=c1.gp(0)
l=m.G()
r.drawCircle(o*14.5,-3+n*17.5,4.3,l)
l.delete()}r=A.I()
r.r=c1.gp(0)
c3.e4(D.f1Q,3.141592653589793,3.141592653589793,!0,r)
break
case 1:r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-15,-11))
r.D(new A.c5(0,-30,15,-11))
r.D(new A.aq(13,-6))
r.D(new A.c5(0,-12,-13,-6))
r.D(new A.bt())
o=A.I()
o.r=c4.c.gp(0)
c3.aH(r,o)
c3.bo(D.ekJ,D.ehI,C.iw(G.na,1.4))
o=A.I()
o.r=c1.gp(0)
c3.ad(D.el_,3,o)
o=A.I()
o.r=c1.gp(0)
c3.ad(D.ehU,3,o)
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(-13,6))
o.D(new A.c5(-12,22,0,26))
o.D(new A.c5(12,22,13,6))
o.D(new A.c5(8,13,0,12))
o.D(new A.c5(-8,13,-13,6))
o.D(new A.bt())
r=A.I()
r.r=B.iy.gp(0)
c3.aH(o,r)
r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-7,8))
r.D(new A.c5(0,6,7,8))
r.D(new A.c5(0,10.5,-7,8))
o=A.I()
o.r=B.bO.gp(0)
c3.aH(r,o)
break
case 2:k=c4.y
if(k==null)k=c4.b
r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aY(-17,-4))
r.D(new A.c5(-20,-27,0,-29))
r.D(new A.c5(20,-27,17,-4))
r.D(new A.c5(0,-14,-17,-4))
r.D(new A.bt())
o=A.I()
o.r=k.gp(0)
c3.aH(r,o)
o=A.ar(k,B.w,0.3)
o.toString
c3.e4(D.f1X,3.4,2.5,!1,C.iw(o,1.4))
o=A.ar(k,B.c,0.3)
o.toString
c3.e4(D.f1K,3.6,2.2,!1,C.iw(o,1.2))
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(11,-22))
o.D(new A.c5(27,-34,25,-19))
o.D(new A.c5(18,-18,11,-22))
r=A.ar(k,B.c,0.1)
r.toString
n=A.I()
n.r=r.gp(0)
c3.aH(o,n)
n=new A.aF(v,B.ag,c0,c0,A.a([],w))
n.D(new A.aY(11,-22))
n.D(new A.c5(24,-12,27,-26))
n.D(new A.c5(18,-22,11,-22))
o=A.ar(k,B.w,0.2)
o.toString
r=A.I()
r.r=o.gp(0)
c3.aH(n,r)
r=A.I()
r.r=c4.c.gp(0)
c3.ad(D.ehJ,3,r)
break
case 3:r=A.I()
r.r=c1.gp(0)
c3.e4(D.f1U,3.204424506661589,3.015928947446201,!0,r)
for(r=c3.a,q=-3;q<=3;++q){o=A.ar(c1,B.c,0.18)
o.toString
n=new A.ao(B.O,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=0.9
n.r=o.gp(0)
n.d=B.by
n.e=B.dQ
l=n.G()
r.drawLine.apply(r,[q*3.6,-19+Math.abs(q)*0.8,q*4.6,-4,l])
l.delete()}for(o=c4.c,j=0;j<2;++j){i=D.dna[j]
n=new A.ao(B.O,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=4.5
n.r=c1.gp(0)
n.d=B.by
n.e=B.dQ
l=n.G()
r.drawLine.apply(r,[i,0,i*1.12,22,l])
l.delete()
for(h=0;h<3;++h){n=new A.ao(B.O,B.M,B.S,B.T,B.R)
n.r=o.gp(0)
l=n.G()
r.drawCircle(i*(1+h*0.04),7+h*6.5,1.8,l)
l.delete()}}break
case 4:r=A.I()
r.r=c1.gp(0)
c3.e4(D.f1T,3.204424506661589,3.015928947446201,!0,r)
r=A.ar(c1,B.c,0.25)
r.toString
c3.bo(I.a7q,I.a7p,C.iw(r,1))
break
default:r=A.I()
r.r=c1.gp(0)
c3.e4(D.f1o,3.267256359733385,2.8902652413026098,!0,r)}g=B.k.E(c5.b,0,1)*0.4+0.1
r=A.bK(D.elW,5,8)
o=D.aew.j(g)
n=A.I()
n.r=o.gp(0)
c3.dQ(r,n)
n=A.bK(D.ekB,5,8)
r=D.aew.j(g)
o=A.I()
o.r=r.gp(0)
c3.dQ(n,o)
f=c5.e*2.4
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aY(f-0.6,-2))
o.D(new A.c5(f-3.4,6,f-2.6,7.4))
o.D(new A.c5(f,8.8,f+2.6,7.4))
c3.aH(o,C.iw(c9.j(0.75),1.1))
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
for(r=c3.a,o=d<0.15,n=c4.f,m=d>0.12,a0=2.5*d,a1=a0*2,a2=a0*2.2,j=0;j<2;++j){a3=F.hq[j]
a4=c5.e
a5=a3>0?0.7:1
a6=a3*6.4+a4*2*a5
if(m){a4=Math.max(0.6,a1)
a5=A.bK(new A.t(a6,-3),a4,7)
a7=new A.ao(B.O,B.M,B.S,B.T,B.R)
a7.r=B.c.j(0.96).gp(0)
l=a7.G()
r.drawOval(A.bG(a5),l)
l.delete()
a8=a6+c5.y*1.5
a9=-3+c5.z*0.7
J.bl(r.save())
a5=A.a([],w)
a7=new A.aF(v,B.ag,c0,c0,a5)
a5.push(new A.jL(A.bK(new A.t(a6,-3),a4,7)))
a4=a7.gbu().a.snapshot()
a4=a7.e=new A.cd(a4)
r.clipPath(a4.a,$.nF(),!0)
a4=new A.ao(B.O,B.M,B.S,B.T,B.R)
a4.r=D.bhr.gp(0)
l=a4.G()
r.drawCircle(a8,a9,2.1,l)
l.delete()
a4=new A.ao(B.O,B.M,B.S,B.T,B.R)
a4.r=B.w.gp(0)
l=a4.G()
r.drawCircle(a8,a9,1.05,l)
l.delete()
a4=new A.ao(B.O,B.M,B.S,B.T,B.R)
a4.r=B.c.gp(0)
l=a4.G()
r.drawCircle(a8-0.7,a9-0.7,0.55,l)
l.delete()
r.restore()}a4=n?D.Yn:c9.j(0.9)
a5=n?1.5:1.1
b0=new A.ao(B.O,B.M,B.S,B.T,B.R)
b0.b=B.a9
b0.c=a5
b0.r=a4.gp(0)
b0.d=B.by
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
if(u)b2=B.e2
else{b2=A.ar(c1,B.w,0.2)
b2.toString}b3=new A.ao(B.O,B.M,B.S,B.T,B.R)
b3.b=B.a9
b3.c=1.7
b3.r=b2.gp(0)
b3.d=B.by
b3.e=B.dQ
l=b3.G()
r.drawLine.apply(r,[a6-a5,b1-a7+0.4,a6+a5,b1-0.6-a4,l])
l.delete()}b4=B.k.E(c5.a,0,1)
if(n)b5=D.brc
else{u=A.ar(c9,D.bl_,0.6)
u.toString
b5=u}b6=c5.b
if(b4>0.06){b7=5+B.k.E(b6,0,1)*2.2
b8=1.2+b4*6.5
b9=new A.aF(v,B.ag,c0,c0,A.a([],w))
w=-b7
b9.D(new A.aY(w,11.5))
b9.D(new A.c5(0,11.5+b8*0.2-c5.b*1.5,b7,11.5))
b9.D(new A.c5(0,11.5+b8*1.5+c5.b*1.5,w,11.5))
b9.D(new A.bt())
v=A.I()
v.r=D.bkj.gp(0)
c3.aH(b9,v)
J.bl(r.save())
c3.mK(0,b9)
v=B.c.j(0.95)
u=A.I()
u.r=v.gp(0)
c3.aP(new A.a3(w,11,w+b7*2,13.2),u)
u=A.bK(new A.t(0,11.5+b8*1.1),b8*0.9,b7*1.4)
w=A.I()
w.r=D.brh.gp(0)
c3.dQ(u,w)
r.restore()
c3.aH(b9,C.iw(b5,1.1))}else{u=new A.aF(v,B.ag,c0,c0,A.a([],w))
r=11.5-b6*0.8
u.D(new A.aY(-5.2,r))
u.D(new A.c5(0,13.1+b6*2.8,5.2,r))
c3.aH(u,C.iw(b5,1.5))
if(b6>0.6){w=new A.aF(v,B.ag,c0,c0,A.a([],w))
w.D(new A.aY(-4.6,11.8))
w.D(new A.c5(0,15.1+b6*1.4,4.6,11.8))
w.D(new A.c5(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.I()
u.r=v.gp(0)
c3.aH(w,u)}}if(c5.b>0.2){c3.e4(D.f1B,-1.2,2.2,!1,C.iw(c9.j(0.5),0.8))
c3.e4(D.f1q,2.141592653589793,2.2,!1,C.iw(c9.j(0.5),0.8))}if(n&&c2!==2){c2=c4.c
w=A.I()
w.r=c2.gp(0)
c3.ad(D.eki,1.7,w)
w=A.I()
w.r=c2.gp(0)
c3.ad(D.eke,1.7,w)}},
i6b(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S(),e=new A.p2(),d=A.z8(e,g),a0=a4.a,a1=a4.b,a2=Math.min(a0/450,a1/900),a3=A.I()
a3.sam(A.jx(B.I,new A.t(0,a1*0.46),D.d62,D.cYH,B.x,g))
d.aP(new A.a3(0,0,0+a0,0+a1),a3)
a3=d.a
J.bl(a3.save())
a3.translate((a0-450*a2)/2,(a1-900*a2)/2)
d.bW(0,a2)
w=new A.e4()
w.cY(8)
for(v=0;v<120;++v){a0=w.ag()
a1=w.ag()
u=w.ag()
t=new A.ao(B.O,B.M,B.S,B.T,B.R)
t.r=B.c.j(0.2+w.ag()*0.5).gp(0)
s=t.G()
a3.drawCircle(a0*450*1.4-90,a1*330-40,0.5+u*0.9,s)
s.delete()}J.bl(a3.save())
a3.translate(200,120)
d.il(0,-0.5)
a0=A.I()
a1=x.O
a0.sam(A.tt(B.I,230,A.a([D.bgd,B.L],a1),g,B.x,g,g,0))
d.dQ(D.f26,a0)
a3.restore()
a0=A.I()
a0.sam(A.tt(D.a7y,58,A.a([D.bjn,B.L],a1),g,B.x,g,g,0))
d.ad(D.a7y,58,a0)
a0=A.I()
a0.r=D.beW.gp(0)
d.ad(D.a7y,24,a0)
a0=A.I()
a0.r=D.YK.gp(0)
d.ad(D.eiD,5,a0)
a0=A.I()
a0.r=D.YK.gp(0)
d.ad(D.eiH,3.4,a0)
a0=A.I()
a0.r=D.YK.gp(0)
d.ad(D.eiG,2.4,a0)
for(a0=x.v,r=0;r<3;++r,f=u){u=A.a([],a0)
q=new A.aF(f.r,B.ag,g,g,u)
u.push(new A.aY(-60,420))
for(f=372+r*12,t=60+r*20,p=r*2,o=14-r*3,n=-60;n<=510;n+=8){m=new A.aq(n,f+Math.sin(n/t+p)*o+Math.sin(n/23+r)*3)
u.push(m)
l=q.f
if(l!=null)m.bx(l)
m=q.e
if(m!=null)m.a.delete()
q.e=null}f=new A.aq(510,470)
u.push(f)
t=q.f
if(t!=null)f.bx(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.aq(-60,470)
u.push(f)
t=q.f
if(t!=null)f.bx(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.bt()
u.push(f)
u=q.f
if(u!=null)f.bx(u)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=[D.bdw,D.bfv,D.bli][r]
u=$.S()
t=new A.ao(B.O,B.M,B.S,B.T,B.R)
t.r=f.gp(0)
s=t.G()
f=q.e
a3.drawPath((f==null?q.e=new A.cd(q.gbu().a.snapshot()):f).a,s)
s.delete()}for(k=0;k<4;++k){n=D.csK[k]
j=384+B.o.F(n,11)
f=n-2
a0=j-24
u=new A.ao(B.O,B.M,B.S,B.T,B.R)
u.b=B.a9
u.c=2.4
u.r=D.Z_.gp(0)
u.d=B.by
u.e=B.dQ
s=u.G()
a3.drawLine.apply(a3,[n,j,f,a0,s])
s.delete()
f=A.bK(new A.t(f,j-27),11,46)
u=new A.ao(B.O,B.M,B.S,B.T,B.R)
u.r=D.Z_.gp(0)
s=u.G()
a3.drawOval(A.bG(f),s)
s.delete()
a0=A.bK(new A.t(n-12,a0),8,24)
f=new A.ao(B.O,B.M,B.S,B.T,B.R)
f.r=D.Z_.gp(0)
s=f.G()
a3.drawOval(A.bG(a0),s)
s.delete()}for(v=0;v<9;++v){f=B.o.F(v,3)
a0=B.o.F(v,4)
u=new A.ao(B.O,B.M,B.S,B.T,B.R)
u.r=D.beZ.j(0.8).gp(0)
s=u.G()
a3.drawCircle(20+v*52+f*7,400+a0*5,1.2,s)
s.delete()}f=A.I()
f.sam(A.jx(D.ehg,D.ehi,D.d_A,B.D7,B.x,g))
d.aP(new A.a3(-200,412,650,1300),f)
i=new A.e4()
i.cY(21)
for(v=0;v<260;++v){f=i.ag()
j=420+i.ag()*480
a0=i.ag()
u=j/900+0.4
u=A.bK(new A.t(f*450,j),1+i.ag()*2*u,1.5+a0*4*u)
f=i.h5()?B.c:B.w
a0=new A.ao(B.O,B.M,B.S,B.T,B.R)
a0.r=f.j(0.06+i.ag()*0.06).gp(0)
s=a0.G()
a3.drawOval(A.bG(u),s)
s.delete()}J.bl(a3.save())
a3.translate(225,590)
d.p9(0,1,0.34)
f=A.I()
f.sam(A.tt(B.I,250,A.a([D.bma,D.bfR,D.bo0],a1),A.a([0,0.8,1],x.n),B.x,g,g,0))
d.ad(B.I,250,f)
a3.restore()
for(v=0;v<40;++v){n=i.ag()*450
j=640+i.ag()*260
f=i.ag()
a0=A.ar(D.agS,D.bet,i.ag())
a0.toString
for(f=j-(6+f*10),h=-1;h<=1;++h){$.S()
a1=new A.ao(B.O,B.M,B.S,B.T,B.R)
a1.b=B.a9
a1.c=1.3
a1.r=a0.gp(0)
a1.d=B.by
a1.e=B.dQ
s=a1.G()
a3.drawLine.apply(a3,[n+h*2,j,n+h*5,f+Math.abs(h)*3,s])
s.delete()}}C.i_1(d)
for(k=0;k<3;++k)C.i2c(d,D.ayV[k])
C.i21(d,D.eix)
for(n=118;n<190;n+=11){f=B.o.F(n,3)
a0=B.o.F(n,4)
$.S()
a1=new A.ao(B.O,B.M,B.S,B.T,B.R)
a1.b=B.a9
a1.c=2.4
a1.r=D.YW.gp(0)
a1.d=B.by
a1.e=B.dQ
s=a1.G()
a3.drawLine.apply(a3,[n,452+f,n+1,436+a0,s])
s.delete()}d.bo(D.ehG,D.ehY,C.iw(D.bfc,1.6))
a3.restore()
return e.nj()},
i_1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S().r,e=x.v,d=new A.aF(f,B.ag,g,g,A.a([],e))
d.D(new A.aY(358,462))
d.D(new A.kN(354,422,370,382,374,332))
d.D(new A.aq(410,332))
d.D(new A.kN(416,382,432,422,428,462))
d.D(new A.bt())
w=A.I()
w.sam(A.jx(new A.t(354,0),new A.t(430,0),D.dtj,U.zt,B.x,g))
a0.aH(d,w)
v=new A.e4()
v.cY(4)
for(w=a0.a,u=0;u<30;++u){t=364+v.ag()*56
s=462-v.ag()*126
r=v.ag()
q=v.ag()
p=B.w.j(0.18)
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.b=B.a9
o.c=1.1
o.r=p.gp(0)
o.d=B.by
o.e=B.dQ
n=o.G()
w.drawLine.apply(w,[t,s,t+r*3-1.5,s+8+q*12,n])
n.delete()}for(m=0;m<6;++m){l=D.daz[m]
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
j.push(new A.c5(o,k,r,p))
q=new A.ao(B.O,B.M,B.S,B.T,B.R)
q.b=B.a9
q.c=8
q.r=D.afg.gp(0)
q.d=B.by
q.e=B.dQ
n=q.G()
q=i.gbu().a.snapshot()
w.drawPath((i.e=new A.cd(q)).a,n)
n.delete()
for(h=0;h<6;++h){q=v.ag()
o=v.ag()
k=v.ag()
j=new A.ao(B.O,B.M,B.S,B.T,B.R)
j.r=A.ar(D.bf4,D.blh,v.ag()).j(0.92).gp(0)
n=j.G()
w.drawCircle(r+(q*36-18),p+(o*18-14),8+k*7,n)
n.delete()}r+=0
q=new A.ao(B.O,B.M,B.S,B.T,B.R)
q.b=B.a9
q.c=1.2
q.r=D.YW.gp(0)
q.d=B.by
q.e=B.dQ
n=q.G()
w.drawLine.apply(w,[r,p+8,r,p+22,n])
n.delete()
p=A.bK(new A.t(r,p+28),13,7)
r=new A.ao(B.O,B.M,B.S,B.T,B.R)
r.r=D.bms.gp(0)
n=r.G()
w.drawOval(A.bG(p),n)
n.delete()}},
i2c(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b4.a,a5=b4.b,a6=b4.c,a7=b4.d,a8=a6*0.5,a9=A.bK(new A.t(a4,a5+2),a8,a6*2.8),b0=B.w.j(0.3),b1=$.S(),b2=A.I()
b2.r=b0.gp(0)
b3.dQ(a9,b2)
b1=b1.r
b2=x.v
w=new A.aF(b1,B.ag,a3,a3,A.a([],b2))
a9=a4-a6
b0=a5-a7
w.D(new A.aY(a9,b0))
w.D(new A.aq(a9,a5))
v=a4+a6
w.D(new A.c5(a4,a5+a6*0.22,v,a5))
w.D(new A.aq(v,b0))
w.D(new A.bt())
u=A.I()
u.sam(A.jx(new A.t(a9,0),new A.t(v,0),D.daF,U.zt,B.x,a3))
b3.aH(w,u)
t=new A.e4()
t.cY(B.o.V(a4*7))
v=b3.a
J.bl(v.save())
b3.mK(0,w)
for(s=0;s<40;++s){r=a9+t.ag()*a6*2
q=b0+t.ag()*a7
u=t.ag()
p=t.ag()
o=B.w.j(0.14)
n=new A.ao(B.O,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=1
n.r=o.gp(0)
n.d=B.by
n.e=B.dQ
m=n.G()
v.drawLine.apply(v,[r,q,r+4+u*5,q+p*2-1,m])
m.delete()}u=b0+5
p=a6*2
o=D.agO.j(0.75)
n=A.I()
n.r=o.gp(0)
b3.aP(new A.a3(a9,u,a9+p,u+7),n)
for(u=a6/5,o=b0+12,n=b0+20,l=a9+2,k=0;k<B.k.bf(u);++k){j=l+k*10
i=A.a([],b2)
h=new A.aF(b1,B.ag,a3,a3,i)
i.push(new A.aY(j,o))
i.push(new A.aq(j+5,n))
i.push(new A.aq(j+10,o))
i.push(new A.bt())
i=new A.ao(B.O,B.M,B.S,B.T,B.R)
i.r=D.lx.j(0.85).gp(0)
m=i.G()
i=h.gbu().a.snapshot()
v.drawPath((h.e=new A.cd(i)).a,m)
m.delete()}u=A.a([],b2)
g=new A.aF(b1,B.ag,a3,a3,u)
b1=a5-8
g.D(new A.aY(a9,b1))
for(p/=6,k=0;k<=B.k.bf(p);++k){o=(k&1)===0?0:-5
o=new A.aq(a9+k*6,b1+o)
u.push(o)
n=g.f
if(n!=null)o.bx(n)
o=g.e
if(o!=null)o.a.delete()
g.e=null}b3.aH(g,C.iw(D.agO.j(0.7),1.6))
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
b1.D(new A.c5(p,a5-a7*0.82,o,i))
b1.D(new A.aq(o,l))
b1.D(new A.bt())
l=A.I()
l.r=D.agZ.gp(0)
b3.aH(b1,l)
l=A.I()
l.r=D.agZ.gp(0)
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
f.D(new A.c5(a4-a8,n,a4,u))
f.D(new A.c5(a4+a8,n,p,i))
f.D(new A.c5(a4,b0+a6*0.34,o,i))
f.D(new A.bt())
b0=A.I()
n=a6*1.4
b0.sam(A.jx(new A.t(a4-n,0),new A.t(a4+n,0),D.de4,U.zt,B.x,a3))
b3.aH(f,b0)
J.bl(v.save())
b3.mK(0,f)
for(a8=p-o,s=0;s<70;++s){e=s/69
b0=Math.sin(e*3.141592653589793)
p=t.ag()
n=(t.h5()?B.w:D.beC).j(0.16)
h=new A.ao(B.O,B.M,B.S,B.T,B.R)
h.b=B.a9
h.c=0.9
h.r=n.gp(0)
h.d=B.by
h.e=B.dQ
m=h.G()
v.drawLine.apply(v,[a4+(p-0.5)*3,u,o+a8*e,i+b0*a6*0.3,m])
m.delete()}for(k=1;k<5;++k){d=u+l*k/4.6
a0=b1*k/4.6
b0=A.a([],b2)
p=new A.aF(a9,B.ag,a3,a3,b0)
n=d+2
b0.push(new A.aY(a4-a0,n))
b0.push(new A.c5(a4,d+7+k*1.5,a4+a0,n))
b0=B.w.j(0.22)
n=new A.ao(B.O,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=1.2
n.r=b0.gp(0)
n.d=B.by
n.e=B.dQ
m=n.G()
b0=p.gbu().a.snapshot()
v.drawPath((p.e=new A.cd(b0)).a,m)
m.delete()}v.restore()
for(s=0;s<46;++s){e=s/45
a1=o+a8*e
a2=i+Math.sin(e*3.141592653589793)*a6*0.3
b0=t.ag()
b1=t.ag()
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.b=B.a9
p.c=1.1
p.r=D.blE.gp(0)
p.d=B.by
p.e=B.dQ
m=p.G()
v.drawLine.apply(v,[a1,a2,a1+(b0-0.5)*2,a2+3+b1*4,m])
m.delete()}a8=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
a9=u+4
a8.D(new A.aY(a4-2.5,a9))
a8.D(new A.aq(a4,u-7))
a8.D(new A.aq(a4+2.5,a9))
a8.D(new A.bt())
a9=A.I()
a9.r=D.bhW.gp(0)
b3.aH(a8,a9)},
i21(d,e){var w,v,u,t,s,r,q,p,o
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=d.a,r=0;r<2;++r){q=w+D.dn7[r]
$.S()
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.b=B.a9
p.c=3
p.r=D.YW.gp(0)
p.d=B.by
p.e=B.dQ
o=p.G()
s.drawLine.apply(s,[q,u,q,t,o])
o.delete()}u=A.bK(e.a7(0,I.aKf),24,36)
t=$.S()
s=A.I()
s.r=D.bqt.gp(0)
d.dQ(u,s)
t=new A.aF(t.r,B.ag,null,null,A.a([],x.v))
s=w-24
u=v-30
t.D(new A.aY(s,u))
t.D(new A.aq(w,v-54))
t.D(new A.aq(w+24,u))
t.D(new A.c5(w,v-24,s,u))
t.D(new A.bt())
u=A.I()
u.r=D.afV.gp(0)
d.aH(t,u)},
i1m(d){switch(B.o.F(d,8)){case 0:return D.aZs
case 1:return D.aZq
case 2:return D.aZp
case 3:return D.aZo
case 4:return D.aZr
case 5:return D.aZt
case 6:return D.hol
default:return D.hok}},
RY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.boh()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a7z:j
w.as=k==null?D.DO:k
C.hui(d,e,p,C.i1m(m),w,s,m,l)},
hvG(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bRZ:function bRZ(){var _=this
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
t3:function t3(d,e,f,g,h,i,j,k,l,m){var _=this
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
boh:function boh(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
alu:function alu(){this.b=this.a=null},
aVL:function aVL(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bRR:function bRR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRS:function bRS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRT:function bRT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRU:function bRU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRV:function bRV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRW:function bRW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRX:function bRX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRY:function bRY(){},
bRQ:function bRQ(d){this.a=d},
aff:function aff(d,e){this.a=d
this.b=e},
add:function add(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Mv(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bQA(s)
s.bzM(d)
return s},
GA(d,e,f,g,h,i,j){var w,v=A.T(g).k("Z<1>")
v=A.df(new A.Z(g,new C.fqv(f),v),v.k("M.E"))
w=A.C(v,A.a7(v).k("cs.E"))
B.d.e_(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.d5(w,0,A.dC(3,"count",x.S),A.T(w).c))
B.d.e_(v,d)
return new C.ln(e,v,B.d.cp(v,f),h,i,"tree",j)},
imF(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.U(c0,x.cg),c2=new C.h_q(c1),c3=x.s,c4=A.a([],c3)
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
if(h===D.wb)g="father"
else g=h===D.oi?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Z(t,new C.h_s(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.GA(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Z(w,new C.h_t(i,m),p),o)
B.d.e_(d,c6)
c2.$2(b4,new C.ln("True or false: "+h+" is the "+g+" of "+l+".",D.azY,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.ln("True or false: "+B.a.i(B.d.gI(d).b)+" is the "+g+" of "+l+".",D.azY,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.FQ(m)
h=a0.length
if(h!==0){a1=a0[c6.ap(h)]
h=B.a.i(a1.b)
f=A.C(new A.Z(t,new C.h_u(l,a0,c5),v),s)
e=a1.c
if(e===D.wb)e="son"
else e=e===D.oi?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.GA(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eD([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mr(a5,a5.r,f.k("mr<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.GA(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gI(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("jd<1>"),a3=new A.jd(a0,1,b3,a2),a3.od(a0,1,b3,e.c),a3=new A.bT(a3,a3.gL(0),a2.k("bT<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.GA(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gI(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gI(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.aqz(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Z(t,new C.h_v(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.GA(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Z(t,new C.h_w(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wb
if(e)a2=b7
else a2=f===D.oi?b8:b9
if(e)f=b7
else f=f===D.oi?b8:b9
c2.$2("grand",C.GA(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aLU(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.ap(k)].b)
j=A.C(new A.Z(t,new C.h_x(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.GA(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cLl)
h=l+" was born in "+k
c2.$2("place",C.GA(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d0C)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.GA(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.L)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.GA(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jK(b1,b3,b3)
c2.$2("year",C.GA(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bDh(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Mv(d),l=new A.e4()
l.cY(f)
w=C.imF(m,l,g)
for(v=new A.du(w,w.r,w.e);v.C();)J.heg(v.d,l)
v=A.a7(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.e_(u,l)
t=A.a([],x.J)
s=A.aX(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.b3(u,new C.fD5(n,w))))break
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
if(v<e){v=A.C(D.axW,x.df)
B.d.e_(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.L)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hup(o,l))}}else if(!g&&v>3){o=C.hup(D.axW[l.ap(14)],l)
t[t.length-1-l.ap(3)]=o}return t},
hup(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e_(w,e)
return new C.ln(d.a,w,B.d.cp(w,v),d.d,d.e,d.f,d.r)},
hz8(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Mv(a2),a1=new A.e4()
a1.cY(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(a0.FQ(q).length>=2)u.push(q)}B.d.e_(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.L)(u),++r){n=u[r]
m=a0.FQ(n)
l=A.T(m)
k=new A.jd(m,0,5,l.k("jd<1>"))
k.od(m,0,5,l.c)
j=k.dm(0)
if(new A.N(j,new C.fRg(),A.T(j).k("N<1,G>")).fJ(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.L)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.L)(j),++i)g.push(C.aRv(a0,j[i]))
w.push(new C.att("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.U(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
J.cc(e.c3(0,a0.alY(q),new C.fRh()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.ff(d)
v=A.a([],v)
for(u=A.d5(d,0,A.dC(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bT(u,u.gL(0),t.k("bT<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cE(s)
m.e_(s,a1)
v.push(m.gI(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.L)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.L)(v),++r)s.push(C.aRv(a0,v[r]))
w.push(new C.att("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aPZ(d){return B.d.ann(D.aAr,new C.fzx(d))},
icQ(d){return A.p7(new A.Z(D.aAr,new C.fFR(d),x.av))},
bRo(d){return C.hIu(d)},
hIu(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bRo=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bRo)
case 7:r=f
q=B.a.i(d)
q=A.ev(J.r(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bRo,v)},
Bu(d,e){return C.hIr(d,e)},
hIr(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$Bu=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Bu)
case 7:r=g
p=B.a.i(d)
o=A.ev(J.r(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
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
bRn(d,e,f){return C.hIs(d,e,f)},
hIs(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bRn=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bRn)
case 7:r=h
q=B.a.i(d)
q=A.ev(J.r(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bRn,v)},
Bv(d,e,f,g){return C.hIt(d,e,f,g)},
hIt(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$Bv=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Bv)
case 7:r=i
p=B.a.i(d)
o=A.ev(J.r(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
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
bFy(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h1q(d,e,f,g){return new C.ak9(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hGA(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aW(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cv)
while(u.C())w.push(J.k(u.gS(u)))
u=x.N
w=A.d5(w,0,A.dC(4,"count",x.S),u).dm(0)
B.d.v(w,A.bZ(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.k.N(v)
v=B.o.E(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.k.N(u)
return C.h1q(w,v,B.o.E(u==null?20:u,5,60),t)},
hfk(d){var w,v,u,t,s,r,q=J.a6(d),p=q.h(d,"id")
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
if(u.b(r))v.push(C.hGA(A.a2(r,t,s)))}return new C.Mf(p,w,v)},
h9J(d){var w,v=A.a([],x.c)
for(w=J.aW(d.z);w.C();)v.push(C.hfk(w.gS(w)))
return v},
aRv(d,e){var w=e.c===D.oi
if(d.alY(e)===0&&d.FQ(e).length!==0)return w?0:1
if(d.FQ(e).length!==0||d.aqz(e)!=null)return w?2:3
return w?4:5},
hAe(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Mv(a4),a3=new A.e4()
a3.cY(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.e_(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.L)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.L)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.FQ(m)
g=a2.aqz(m)
f=a2.aLU(m)
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
if(k===D.wb)k="father"
else k=k===D.oi?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gI(h).b)+".")}if(j!=null){k=j.c
if(k===D.wb)k="father"
else k=k===D.oi?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e_(l,a3)
B.d.aZ(l,new C.h_Q())
d=B.a.i(m.b)
a0=A.C(new A.Z(s,new C.h_R(d),o),n)
B.d.e_(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.jd(a0,0,3,i.k("jd<1>"))
a1.od(a0,0,3,i.c)
B.d.v(k,a1)
B.d.e_(k,a3)
a1=C.aRv(a2,m)
i=new A.jd(l,0,4,p)
i.od(l,0,4,r)
w.push(new C.b9N(d,a1,i.dm(0),k))
if(w.length>=5)break}return w},
hrY(d){return B.a.t(d,"married to")||B.a.t(d," of ")||B.a.a0(d,"My ")?1:0},
hzk(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Mv(a4),a3=new A.e4()
a3.cY(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(a2.FQ(q).length>=2)u.push(q)}B.d.e_(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.L)(u),++r){l=u[r]
k=a2.FQ(l)
j=A.T(k)
i=new A.jd(k,0,4,j.k("jd<1>"))
i.od(k,0,4,j.c)
h=i.dm(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.L)(t),++g){q=t[g]
if(q.a!==j&&!B.d.b3(h,new C.fRM(q))&&q.d!==j)i.push(q)}B.d.e_(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.jd(i,0,k,m)
j.od(i,0,k,n)
f=j.dm(0)
j=B.a.i(l.b)
k=C.aRv(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.L)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.L)(h),++g)e.push(C.aRv(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.L)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.L)(f),++g)a0.push(C.aRv(a2,f[g]))
w.push(new C.a9l(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
ln:function ln(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bQA:function bQA(d){this.b=d
this.c=$},
bQB:function bQB(){},
bQC:function bQC(d){this.a=d},
fqv:function fqv(d){this.a=d},
h_q:function h_q(d){this.a=d},
h_r:function h_r(){},
h_s:function h_s(d){this.a=d},
h_t:function h_t(d,e){this.a=d
this.b=e},
h_u:function h_u(d,e,f){this.a=d
this.b=e
this.c=f},
h_p:function h_p(d,e){this.a=d
this.b=e},
h_v:function h_v(d){this.a=d},
h_w:function h_w(d){this.a=d},
h_x:function h_x(d,e,f){this.a=d
this.b=e
this.c=f},
h_o:function h_o(d,e){this.a=d
this.b=e},
fD5:function fD5(d,e){this.a=d
this.b=e},
att:function att(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fRg:function fRg(){},
fRh:function fRh(){},
zg:function zg(d,e,f){this.a=d
this.b=e
this.c=f},
fzx:function fzx(d){this.a=d},
fFR:function fFR(d){this.a=d},
ak9:function ak9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLA:function bLA(){},
Mf:function Mf(d,e,f){this.a=d
this.b=e
this.c=f},
b9N:function b9N(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h_Q:function h_Q(){},
h_R:function h_R(d){this.a=d},
a9l:function a9l(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fRM:function fRM(d){this.a=d},
bh0:function bh0(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
afd:function afd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ajo:function ajo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ajp:function ajp(d,e,f,g,h){var _=this
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
_.a8$=h
_.c=_.a=null},
bJN:function bJN(d){this.a=d},
bJI:function bJI(){},
bJO:function bJO(){},
bJG:function bJG(){},
bJH:function bJH(){},
bJM:function bJM(d){this.a=d},
bJJ:function bJJ(d,e){this.a=d
this.b=e},
bJL:function bJL(d,e){this.a=d
this.b=e},
bJK:function bJK(d,e){this.a=d
this.b=e},
bJF:function bJF(d){this.a=d},
bc9:function bc9(d,e){this.b=d
this.a=e},
Q8:function Q8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAQ:function aAQ(d,e,f){this.b=d
this.c=e
this.a=f},
azg:function azg(d,e,f){this.a=d
this.b=e
this.c=f},
au4:function au4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
au5:function au5(d,e,f){var _=this
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
cnC:function cnC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cnD:function cnD(d){this.a=d},
cnB:function cnB(d){this.a=d},
cnE:function cnE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cnF:function cnF(){},
cnG:function cnG(d,e){this.a=d
this.b=e},
cnH:function cnH(){},
cnI:function cnI(d){this.a=d},
cny:function cny(d){this.a=d},
cnz:function cnz(d,e){this.a=d
this.b=e},
cnA:function cnA(d,e,f){this.a=d
this.b=e
this.c=f},
cnt:function cnt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cnv:function cnv(d,e){this.a=d
this.b=e},
cnw:function cnw(d,e){this.a=d
this.b=e},
cnu:function cnu(d,e){this.a=d
this.b=e},
cns:function cns(){},
cnx:function cnx(){},
bbF:function bbF(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cMZ:function cMZ(){},
ay0:function ay0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ay1:function ay1(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cCw:function cCw(d){this.a=d},
cCv:function cCv(d){this.a=d},
cCE:function cCE(d,e){this.a=d
this.b=e},
cCF:function cCF(d,e){this.a=d
this.b=e},
cCG:function cCG(d){this.a=d},
cCD:function cCD(d){this.a=d},
cCH:function cCH(d){this.a=d},
cCI:function cCI(d,e){this.a=d
this.b=e},
cCJ:function cCJ(){},
cCK:function cCK(d){this.a=d},
cCy:function cCy(d){this.a=d},
cCz:function cCz(d,e){this.a=d
this.b=e},
cCx:function cCx(d,e){this.a=d
this.b=e},
cCA:function cCA(){},
cCB:function cCB(){},
cCC:function cCC(d,e){this.a=d
this.b=e},
az1:function az1(){},
aGg:function aGg(){},
h7B(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bqz((w-450*u)/2,(v-900*u)/2,u)},
af1:function af1(){},
f3e:function f3e(d){this.a=d},
aK4:function aK4(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fdk:function fdk(d){this.a=d},
alk:function alk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
all:function all(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.pZ$=f
_.LG$=g
_.amu$=h
_.bw$=i
_.a8$=j
_.c=_.a=null},
bRm:function bRm(d){this.a=d},
bRl:function bRl(){},
bRj:function bRj(d){this.a=d},
bRh:function bRh(){},
bRi:function bRi(d){this.a=d},
bRe:function bRe(d,e){this.a=d
this.b=e},
bRf:function bRf(){},
bRg:function bRg(d){this.a=d},
bRk:function bRk(d,e){this.a=d
this.b=e},
bRd:function bRd(d){this.a=d},
bsf:function bsf(d,e){this.b=d
this.a=e},
f3f:function f3f(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f3g:function f3g(d,e,f){this.a=d
this.b=e
this.c=f},
f3h:function f3h(d,e,f){this.a=d
this.b=e
this.c=f},
f3i:function f3i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3j:function f3j(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f3k:function f3k(){},
ali:function ali(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alj:function alj(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.pZ$=f
_.LG$=g
_.amu$=h
_.bw$=i
_.a8$=j
_.c=_.a=null},
bR_:function bR_(){},
bRa:function bRa(d,e){this.a=d
this.b=e},
bRb:function bRb(d){this.a=d},
bRc:function bRc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bR6:function bR6(){},
bR5:function bR5(d,e){this.a=d
this.b=e},
bR7:function bR7(d,e){this.a=d
this.b=e},
bR8:function bR8(){},
bR9:function bR9(d){this.a=d},
bR1:function bR1(d){this.a=d},
bR2:function bR2(d){this.a=d},
bR3:function bR3(d){this.a=d},
bR0:function bR0(d,e){this.a=d
this.b=e},
bR4:function bR4(d){this.a=d},
biQ:function biQ(d,e){this.b=d
this.a=e},
doh:function doh(){},
a1n:function a1n(d,e){this.a=d
this.b=e},
ale:function ale(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alf:function alf(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.pZ$=e
_.LG$=f
_.amu$=g
_.bw$=h
_.a8$=i
_.c=_.a=null},
bQM:function bQM(d){this.a=d},
bQL:function bQL(){},
bQK:function bQK(){},
bQE:function bQE(){},
bQF:function bQF(){},
bQJ:function bQJ(d,e,f){this.a=d
this.b=e
this.c=f},
bQI:function bQI(d){this.a=d},
bQG:function bQG(d,e){this.a=d
this.b=e},
bQH:function bQH(d){this.a=d},
bif:function bif(d,e){this.b=d
this.a=e},
aAT:function aAT(){},
bfN:function bfN(){},
aAV:function aAV(){},
bfO:function bfO(){},
aAW:function aAW(){},
bfP:function bfP(){},
ul(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j2,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ad],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.p(u,A.B(v,B.m,u,B.e,B.P,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.NJ,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a3)},
hg8(d,e,f,g,h,i,j){return new C.alg(i,h,d,j,e,f,g,null)},
a5S:function a5S(d,e){this.c=d
this.a=e},
bin:function bin(d){this.a=d},
tr:function tr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bQD:function bQD(d){this.a=d},
I_:function I_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Vy:function Vy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bl8:function bl8(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
dZ4:function dZ4(d,e){this.a=d
this.b=e},
dZ5:function dZ5(d){this.a=d},
dZ6:function dZ6(d,e){this.a=d
this.b=e},
dZ2:function dZ2(d){this.a=d},
dZ3:function dZ3(d){this.a=d},
dZ1:function dZ1(d){this.a=d},
dZ_:function dZ_(d){this.a=d},
dZ0:function dZ0(d){this.a=d},
dYZ:function dYZ(d,e){this.a=d
this.b=e},
dZ7:function dZ7(d){this.a=d},
dZ8:function dZ8(d,e){this.a=d
this.b=e},
dZ9:function dZ9(d,e){this.a=d
this.b=e},
dZa:function dZa(d,e){this.a=d
this.b=e},
dZd:function dZd(d,e){this.a=d
this.b=e},
dZe:function dZe(d,e){this.a=d
this.b=e},
dZf:function dZf(d,e){this.a=d
this.b=e},
dZg:function dZg(d,e){this.a=d
this.b=e},
dZh:function dZh(d,e){this.a=d
this.b=e},
dZi:function dZi(d,e,f){this.a=d
this.b=e
this.c=f},
dZj:function dZj(d,e){this.a=d
this.b=e},
dZk:function dZk(d,e){this.a=d
this.b=e},
dZb:function dZb(d){this.a=d},
dZc:function dZc(d){this.a=d},
a_e:function a_e(d,e){this.a=d
this.b=e},
alg:function alg(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
alh:function alh(d){var _=this
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
bQY:function bQY(d){this.a=d},
bQZ:function bQZ(d){this.a=d},
bQX:function bQX(d){this.a=d},
bQO:function bQO(d){this.a=d},
bQP:function bQP(d){this.a=d},
bQN:function bQN(d){this.a=d},
bQU:function bQU(d,e,f){this.a=d
this.b=e
this.c=f},
bQV:function bQV(d){this.a=d},
bQR:function bQR(d,e){this.a=d
this.b=e},
bQS:function bQS(d,e,f){this.a=d
this.b=e
this.c=f},
bQW:function bQW(){},
bQT:function bQT(d,e){this.a=d
this.b=e},
bQQ:function bQQ(d){this.a=d},
Tc:function Tc(d,e){this.c=d
this.a=e},
ald:function ald(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bQo:function bQo(d){this.a=d},
bQp:function bQp(d){this.a=d},
bQz:function bQz(){},
bQy:function bQy(d,e,f){this.a=d
this.b=e
this.c=f},
bQt:function bQt(d,e){this.a=d
this.b=e},
bQs:function bQs(d,e){this.a=d
this.b=e},
bQu:function bQu(d){this.a=d},
bQv:function bQv(d,e){this.a=d
this.b=e},
bQw:function bQw(d,e){this.a=d
this.b=e},
bQr:function bQr(d,e){this.a=d
this.b=e},
bQx:function bQx(d,e,f){this.a=d
this.b=e
this.c=f},
bQq:function bQq(d,e){this.a=d
this.b=e},
ibh(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aig(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fCD(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("Z<1>"),q=q.k("cO<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yG)m.push(l===D.wb?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.jK(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jK(h,a2,a2)-A.jK(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cO(new A.Z(a4,new C.fCB(u,f),p),new C.fCC(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ar(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ibi(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aig(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fCI(v,e)
q=new C.fCG(v)
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
for(l=B.d.gaf(e),k=new A.f2(l,new C.fCH(p,m));k.C();t=f){j=l.gS(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.aj(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hXt(d,e,f,g){var w,v,u=C.ibj(d,e)
if(u<=0||f.length<=u)return new A.aeF(!1,D.D8,f)
if(g.t(0,e.a))return new A.aeF(!1,D.D8,f)
w=A.T(f).c
v=A.d5(f,0,A.dC(u,"count",x.S),w).dm(0)
return new A.aeF(!0,A.d5(f,u,null,w).dm(0),v)},
hXu(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aig(d3),d2=d1.length
if(d2===0)return D.hlr
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.ddN(t))}s=new C.de3(v)
d2=x.dy
r=A.U(w,d2)
q=new C.ddW(r)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.ddV(r)
l=A.U(w,x.do)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cc(l.c3(0,k,new C.ddO()),o)}h=new C.ddU(s)
g=new C.ddT(l,r)
p=v.$ti.k("bd<2>")
o=p.k("Z<M.E>")
f=A.C(new A.Z(new A.bd(v,p),new C.ddP(h),o),o.k("M.E"))
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
a9=new C.de1(new C.ddY(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.du(v,v.r,v.e),j=a2.galq(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eD([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.M(0,i))break}if(h.$1(b0)&&a2.aj(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.p7(J.dI(i==null?B.Y:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.dO)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.ddM(a2,new C.de2(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.L)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.du(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
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
b4.n(0,b8,new C.G9(o,new A.t(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Kp(c5.a,new A.t(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cx<1>")
d2=A.C(new A.cx(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bQ(0,new C.ddQ(c6,b4))
for(d2=new A.cD(a4,a4.$ti.k("cD<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gS(j)
if(b6.aj(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.t(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.f2(j,new C.ddR(c8));i.C();)o.push(j.gS(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.ddS())
c6.push(new C.aK_(new A.t(c9,b4.h(0,c8).b.b+112),B.I,!1,o))}return new C.bfT(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hv4(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(d)
return w==null?null:w.b[1]},
hpd(d,e,f,g,h,i,j,k,l,m,n){return new C.a_r(k,f,j,e,l,n,m,d,g,h,i,null)},
aCS(d,e,f,g,h,i,j){return new C.bjG(i,d,e,f,j,h,g,null)},
aqh:function aqh(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEp:function aEp(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e_K:function e_K(d){this.a=d},
e_J:function e_J(d){this.a=d},
e_M:function e_M(d,e){this.a=d
this.b=e},
e_N:function e_N(d,e){this.a=d
this.b=e},
e_O:function e_O(d){this.a=d},
e_I:function e_I(d,e){this.a=d
this.b=e},
e_L:function e_L(d){this.a=d},
e_Q:function e_Q(d){this.a=d},
e_P:function e_P(d,e){this.a=d
this.b=e},
aqb:function aqb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEm:function aEm(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e_a:function e_a(d){this.a=d},
e_8:function e_8(d){this.a=d},
e_9:function e_9(d){this.a=d},
e_b:function e_b(d,e){this.a=d
this.b=e},
e_5:function e_5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZx:function dZx(d){this.a=d},
dZy:function dZy(d,e){this.a=d
this.b=e},
dZP:function dZP(d){this.a=d},
dZN:function dZN(d){this.a=d},
dZO:function dZO(d,e){this.a=d
this.b=e},
dZQ:function dZQ(d){this.a=d},
dZR:function dZR(d,e){this.a=d
this.b=e},
e_4:function e_4(d,e){this.a=d
this.b=e},
dZM:function dZM(d){this.a=d},
dZL:function dZL(d){this.a=d},
dZK:function dZK(d,e){this.a=d
this.b=e},
e_1:function e_1(){},
e_2:function e_2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e_0:function e_0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZV:function dZV(d){this.a=d},
dZW:function dZW(d,e,f){this.a=d
this.b=e
this.c=f},
dZU:function dZU(d,e){this.a=d
this.b=e},
dZX:function dZX(d,e){this.a=d
this.b=e},
dZS:function dZS(d,e){this.a=d
this.b=e},
dZT:function dZT(){},
dZY:function dZY(d,e){this.a=d
this.b=e},
dZZ:function dZZ(d){this.a=d},
e__:function e__(d,e){this.a=d
this.b=e},
e_3:function e_3(d,e){this.a=d
this.b=e},
dZl:function dZl(d,e){this.a=d
this.b=e},
dZm:function dZm(d,e){this.a=d
this.b=e},
e_d:function e_d(d,e,f){this.a=d
this.b=e
this.c=f},
e_7:function e_7(d,e,f){this.a=d
this.b=e
this.c=f},
e_6:function e_6(d){this.a=d},
dZn:function dZn(d){this.a=d},
dZo:function dZo(d){this.a=d},
dZp:function dZp(){},
dZq:function dZq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZu:function dZu(d,e){this.a=d
this.b=e},
dZt:function dZt(d,e){this.a=d
this.b=e},
dZs:function dZs(d){this.a=d},
dZv:function dZv(d,e){this.a=d
this.b=e},
dZr:function dZr(d){this.a=d},
e_c:function e_c(d){this.a=d},
dZH:function dZH(){},
dZI:function dZI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZG:function dZG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZC:function dZC(d,e,f){this.a=d
this.b=e
this.c=f},
dZB:function dZB(d,e,f){this.a=d
this.b=e
this.c=f},
dZz:function dZz(d,e){this.a=d
this.b=e},
dZD:function dZD(d){this.a=d},
dZE:function dZE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZA:function dZA(d,e){this.a=d
this.b=e},
dZF:function dZF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZJ:function dZJ(d,e){this.a=d
this.b=e},
e_k:function e_k(){},
e_l:function e_l(d,e){this.a=d
this.b=e},
e_m:function e_m(d){this.a=d},
e_n:function e_n(d,e){this.a=d
this.b=e},
e_g:function e_g(d){this.a=d},
e_e:function e_e(d,e){this.a=d
this.b=e},
e_h:function e_h(d,e){this.a=d
this.b=e},
e_i:function e_i(d,e){this.a=d
this.b=e},
e_j:function e_j(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e_o:function e_o(d){this.a=d},
e_f:function e_f(d){this.a=d},
dZw:function dZw(d){this.a=d},
bfR:function bfR(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ddK:function ddK(d){this.a=d},
ddJ:function ddJ(d,e){this.a=d
this.b=e},
ddL:function ddL(d){this.a=d},
ddI:function ddI(d,e){this.a=d
this.b=e},
fCD:function fCD(d,e){this.a=d
this.b=e},
fCE:function fCE(d){this.a=d},
fCF:function fCF(){},
fCB:function fCB(d,e){this.a=d
this.b=e},
fCC:function fCC(){},
fCI:function fCI(d,e){this.a=d
this.b=e},
fCJ:function fCJ(d){this.a=d},
fCK:function fCK(){},
fCG:function fCG(d){this.a=d},
fCH:function fCH(d,e){this.a=d
this.b=e},
Kp:function Kp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
G9:function G9(d,e){this.a=d
this.b=e},
bfT:function bfT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ddN:function ddN(d){this.a=d},
de3:function de3(d){this.a=d},
ddW:function ddW(d){this.a=d},
ddX:function ddX(){},
ddV:function ddV(d){this.a=d},
ddO:function ddO(){},
ddU:function ddU(d){this.a=d},
ddT:function ddT(d,e){this.a=d
this.b=e},
ddP:function ddP(d){this.a=d},
ddY:function ddY(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ddZ:function ddZ(d){this.a=d},
de_:function de_(d){this.a=d},
de0:function de0(){},
de1:function de1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
de2:function de2(){},
ddM:function ddM(d,e,f,g,h,i,j,k,l,m){var _=this
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
ddQ:function ddQ(d,e){this.a=d
this.b=e},
ddR:function ddR(d){this.a=d},
ddS:function ddS(){},
aK_:function aK_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bfU:function bfU(d,e){this.b=d
this.a=e},
de4:function de4(){},
de5:function de5(d){this.a=d},
de6:function de6(d){this.a=d},
de7:function de7(){},
bjH:function bjH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beW:function beW(d,e){this.b=d
this.a=e},
bxB:function bxB(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fj8:function fj8(d){this.a=d},
bn_:function bn_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eU2:function eU2(d){this.a=d},
eU1:function eU1(d,e){this.a=d
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
aCQ:function aCQ(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dtX:function dtX(d,e){this.a=d
this.b=e},
dtW:function dtW(d){this.a=d},
dtU:function dtU(d){this.a=d},
dtV:function dtV(d){this.a=d},
du5:function du5(d){this.a=d},
du6:function du6(d){this.a=d},
du4:function du4(d,e){this.a=d
this.b=e},
du7:function du7(){},
dua:function dua(d){this.a=d},
du3:function du3(d,e){this.a=d
this.b=e},
du9:function du9(){},
dub:function dub(d){this.a=d},
du2:function du2(d,e){this.a=d
this.b=e},
duc:function duc(d){this.a=d},
du1:function du1(d){this.a=d},
dud:function dud(d){this.a=d},
du0:function du0(d){this.a=d},
due:function due(d){this.a=d},
du_:function du_(d){this.a=d},
duf:function duf(d){this.a=d},
dtZ:function dtZ(d){this.a=d},
dug:function dug(d){this.a=d},
dtY:function dtY(d,e){this.a=d
this.b=e},
du8:function du8(d){this.a=d},
adz:function adz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjG:function bjG(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ady:function ady(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bjF:function bjF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
duh:function duh(d){this.a=d},
dui:function dui(d,e){this.a=d
this.b=e},
aCR:function aCR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJ1:function aJ1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
adA:function adA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dur:function dur(d){this.a=d},
G5:function G5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hk6(d){var w=d.T,v=x.N
return w.jk(w,new C.cde(),v,v)},
hOZ(d){var w=d.bD
if(w>=0)return w
return 5},
hk8(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hk6(d).h(0,v)
if(w==null||w.length===0)return null
return A.bk(w)},
hk7(d,e){var w=C.hk8(d,e)
if(w!=null&&w.ce(new A.V(Date.now(),0,!1)))return!0
return!1},
hP_(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hk6(d),w,w)
u=C.hk8(d,e)
t=u!=null&&u.ce(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dy(30,0,0,0,0,0).a).a9().ae())
d.T=v},
b0m(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b0m=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lu(t,B.J8),$async$b0m)
case 3:if(l){u=!0
w=1
break}u=A.l7(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.J8,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0m,v)},
cde:function cde(){},
hOX(){var w,v=$.oh(),u=J.e_(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"FT"+B.d.hm(u)},
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
a7A(d){return C.hOY(d)},
hOY(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a7A=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a7A)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hN("ngmy_family_tree_backup_codes_v1",A.H(["codes",d,"savedAt",new A.V(Date.now(),0,!1).a9().ae()],x.N,x.z),!1,!1,B.cG,null),$async$a7A)
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
return A.i($async$a7A,v)},
cdd(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cdd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.IT(),$async$cdd)
case 3:t=m.k0(f),t=t.gaf(t),s=x.f
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
return A.i($async$cdd,v)},
NQ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$NQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cdd(d),$async$NQ)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.IT(),$async$NQ)
case 6:s=f
r=J.a6(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dN(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).a9().ae())
r.n(s,t,o)
w=9
return A.b(C.a7A(s),$async$NQ)
case 9:case 8:u=t
w=1
break
case 5:n=C.hOX()
w=10
return A.b(C.IT(),$async$NQ)
case 10:s=f
J.aJ(s,n,A.H(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a9().ae(),"updatedAt",new A.V(Date.now(),0,!1).a9().ae()],x.N,x.K))
w=11
return A.b(C.a7A(s),$async$NQ)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$NQ,v)},
b0l(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b0l=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.IT(),$async$b0l)
case 3:t=f
for(s=J.dn(t),r=s.gdW(t),r=r.dm(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.r(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a7A(t),$async$b0l)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b0l,v)},
a7B(d,e,f){var w=0,v=A.j(x.H),u
var $async$a7B=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aqg(d,e),$async$a7B)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.NQ(d),$async$a7B)
case 7:w=4
break
case 5:w=8
return A.b(C.b0l(d),$async$a7B)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a7B,v)},
aqa(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aqa=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aqg(f,e),$async$aqa)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c8(),$async$aqa)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.IT(),$async$aqa)
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
return A.i($async$aqa,v)},
b0k(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b0k=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b0k)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.IT(),$async$b0k)
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
return A.i($async$b0k,v)},
hP0(){var w,v=$.oh(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"FT"+B.d.hm(u)},
aqd(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aqd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aqd)
case 3:if(!g){u=null
w=1
break}t=C.hP0()
w=4
return A.b(A.Vz(),$async$aqd)
case 4:s=g
r=B.dO.aO(B.X.aq(d.f_(),null))
r=B.cJ.gcu().aO(r)
q=e?999:2
J.aJ(s,t,A.H(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).a9().ae()],x.N,x.K))
w=5
return A.b(A.a7C(s),$async$aqd)
case 5:p=e?999:2
u=new A.a0D("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqd,v)},
aqc(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqc=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Vz(),$async$aqc)
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
return A.b(C.b0k(J.k(l==null?"":l),j),$async$aqc)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ch.cB(0,B.cF.aO(t))
s=C.hk9(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dN(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a9().ae())
o.n(p,g,l)}w=5
return A.b(A.a7C(p),$async$aqc)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqc,v)},
hk9(d){var w,v,u,t,s=null
try{w=B.X.aM(0,d,s)
if(!x.f.b(w))return s
u=J.r(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hP2(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h3B(d){var w=0,v=A.j(x.m),u,t,s
var $async$h3B=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aqc(t[1])
w=1
break}u=null
w=1
break}u=C.hk9(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h3B,v)},
hP2(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cH(u,new C.cdg(),u.$ti.k("M.E"),x.k)
t=A.a7(u).k("Z<M.E>")
s=A.C(new A.Z(u,new C.cdh(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bk(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.U(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.k0(p),t=t.gaf(t),o=x.B;t.C();){n=t.gS(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.de(l,u)
n=A.cH(n,new C.cdi(),n.$ti.k("M.E"),o)
k=A.a7(n).k("Z<M.E>")
j=A.C(new A.Z(n,new C.cdj(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aqe(h,w,s,r,q)},
aqg(d,e){var w=0,v=A.j(x.y),u,t
var $async$aqg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.NH(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.B_(d),$async$aqg)
case 3:u=t.cL(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqg,v)},
cdp(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cdp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.B_(d),$async$cdp)
case 3:t=s.b6(f,new C.cdq(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.cdr())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdp,v)},
VA(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$VA=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aqg(e,d),$async$VA)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.NQ(e),$async$VA)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.B_(e),$async$VA)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.cdn(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a6(r)
if(t.gan(r)){u=null
w=1
break}t=t.dH(r,new C.cdo(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Lb(e,o),$async$VA)
case 14:n=i
if(J.cL(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aqe(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$VA,v)},
b0p(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b0p=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.VA(d,e,f,g),$async$b0p)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.GQ(A.Kl(q.f_(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0p,v)},
b0o(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b0o=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.VA(d,e,f,g),$async$b0o)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aqd(r,f),$async$b0o)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aH1(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0o,v)},
VB(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$VB=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h3B(a0),$async$VB)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aqa(g.a,d,e,f,s,r),$async$VB)
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
return A.b(C.bCX(e,j),$async$VB)
case 12:case 11:w=13
return A.b(C.ai1(e,j,s),$async$VB)
case 13:h=n.h(0,i)
w=h!=null&&J.cL(h)?14:15
break
case 14:w=16
return A.b(C.Ba(e,i,h),$async$VB)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bqF(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$VB,v)},
aqe:function aqe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cdl:function cdl(){},
cdm:function cdm(){},
cdk:function cdk(){},
cdg:function cdg(){},
cdh:function cdh(){},
cdi:function cdi(){},
cdj:function cdj(){},
cdq:function cdq(){},
cdr:function cdr(){},
cdn:function cdn(d){this.a=d},
cdo:function cdo(d){this.a=d},
hcf(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hH(d,new C.aqf(w,e,g,i,f,h,null),!0,null,x.H)},
ddH(d,e,f,g,h,i,j,k){return new C.bfQ(i,e,k,j,g,f,h,d,null)},
aqf:function aqf(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEo:function aEo(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e_x:function e_x(d){this.a=d},
e_y:function e_y(d,e,f){this.a=d
this.b=e
this.c=f},
e_C:function e_C(d,e){this.a=d
this.b=e},
e_D:function e_D(d){this.a=d},
e_u:function e_u(d){this.a=d},
e_v:function e_v(d,e){this.a=d
this.b=e},
e_w:function e_w(d,e){this.a=d
this.b=e},
e_B:function e_B(d){this.a=d},
e_A:function e_A(d,e){this.a=d
this.b=e},
e_z:function e_z(){},
e_F:function e_F(d){this.a=d},
e_G:function e_G(d,e){this.a=d
this.b=e},
e_E:function e_E(d,e){this.a=d
this.b=e},
de8:function de8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bfS:function bfS(d,e,f){this.d=d
this.e=e
this.a=f},
acP:function acP(d,e,f){this.c=d
this.d=e
this.a=f},
bfQ:function bfQ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bfV:function bfV(d,e,f,g,h){var _=this
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
aEn:function aEn(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e_p:function e_p(d,e){this.a=d
this.b=e},
e_q:function e_q(d){this.a=d},
e_r:function e_r(d){this.a=d},
e_s:function e_s(d){this.a=d},
e_t:function e_t(d){this.a=d},
a_N:function a_N(d){this.a=d},
bl9:function bl9(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e_H:function e_H(d,e){this.a=d
this.b=e},
aZU(d,e){return new C.aZT(d,e,null)},
aZT:function aZT(d,e,f){this.c=d
this.d=e
this.a=f},
idM(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b5(d,11)},
ilg(d){return A.bV(B.L,null,new C.fTe(new C.u7(A.Q(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hm3(d,e){return new C.ath(e,d,null)},
aRp(d,e,f,g,h,i,j){var w=C.idM(i)
if(w!=null)return A.bx(e,new A.a4(j,f,new C.a6G(w,!0,null),null),B.ap)
return N.aQL(e,B.bX,f,g,h,i,j)},
lQ:function lQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6G:function a6G(d,e,f){this.c=d
this.d=e
this.a=f},
bkQ:function bkQ(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b7$=e
_.c=_.a=null},
dM1:function dM1(d){this.a=d},
dM2:function dM2(){},
dM3:function dM3(d,e){this.a=d
this.b=e},
bkP:function bkP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fTe:function fTe(d){this.a=d},
fTd:function fTd(d,e){this.a=d
this.b=e},
fTc:function fTc(d,e){this.a=d
this.b=e},
fTb:function fTb(d,e){this.a=d
this.b=e},
ath:function ath(d,e,f){this.c=d
this.d=e
this.a=f},
clU:function clU(d,e){this.a=d
this.b=e},
aMs:function aMs(){},
il1(d){var w=null
return A.ck(w,w,!0,w,new C.fSB(),d,w,!0,!0,x.e2)},
imc(d,e,f,g,h){var w=null
return A.ck(w,w,!0,w,new C.h_6(h,g,f,e),d,w,!0,!0,x.N)},
il3(d,e){var w=null
return A.ck(w,w,!0,w,new C.fSG(e),d,w,!0,!0,x.dY)},
il2(d){var w=null
return A.ck(w,w,!0,w,new C.fSF(),d,w,!0,!0,x.c5)},
aUq:function aUq(d,e){this.a=d
this.b=e},
aUp:function aUp(d){this.a=d},
aSn:function aSn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fSB:function fSB(){},
h_6:function h_6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fSG:function fSG(d){this.a=d},
fSF:function fSF(){},
Zp:function Zp(d,e){this.c=d
this.a=e},
azA:function azA(){var _=this
_.d=$
_.c=_.a=_.e=null},
d5g:function d5g(d){this.a=d},
d5h:function d5h(d){this.a=d},
d5f:function d5f(d,e){this.a=d
this.b=e},
d5i:function d5i(d){this.a=d},
d5j:function d5j(d){this.a=d},
Zo:function Zo(d){this.a=d},
azz:function azz(){this.d=$
this.c=this.a=null},
d5c:function d5c(d){this.a=d},
d5d:function d5d(d){this.a=d},
d5e:function d5e(d){this.a=d},
YW:function YW(d){this.a=d},
ayf:function ayf(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cDH:function cDH(){},
cDN:function cDN(d){this.a=d},
cDO:function cDO(d){this.a=d},
cDP:function cDP(d){this.a=d},
cDM:function cDM(){},
cDQ:function cDQ(d){this.a=d},
cDR:function cDR(d){this.a=d},
cDL:function cDL(){},
cDS:function cDS(d,e){this.a=d
this.b=e},
cDK:function cDK(d,e){this.a=d
this.b=e},
cDI:function cDI(d,e){this.a=d
this.b=e},
cDT:function cDT(d){this.a=d},
cDJ:function cDJ(){},
cDU:function cDU(d){this.a=d},
a1z:function a1z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxr:function bxr(){this.d=$
this.c=this.a=null},
fis:function fis(d,e){this.a=d
this.b=e},
fit:function fit(d){this.a=d},
fiu:function fiu(d,e){this.a=d
this.b=e},
abT:function abT(d,e){this.a=d
this.b=e},
FV:function FV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bxp:function bxp(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
fiq:function fiq(d,e){this.a=d
this.b=e},
ay8:function ay8(d,e){this.c=d
this.a=e},
bxq:function bxq(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
fir:function fir(d){this.a=d},
bxo:function bxo(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aOy:function aOy(){},
aOz:function aOz(){},
bEV(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bf(u),s=B.o.E(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oV(B.o.u(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fR3(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aX(B.o.u(s),2,"0")
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Yh(A.cS(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aR0(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aR0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hX().l2(85,1280,B.eL),$async$aR0)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fl(),$async$aR0)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hm2()
w=9
return A.b(C.clT(q,r),$async$aR0)
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
return A.i($async$aR0,v)},
aRn(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aRn=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.clQ(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gak(g.split(",")):g
p=B.cF.aO(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.S().LZ(p,!0,null,i).da(0,B.fY),$async$aRn)
case 9:n=a1
w=10
return A.b(n.lM(),$async$aRn)
case 10:m=a1
w=11
return A.b(J.a3g(m).hx(B.ha),$async$aRn)
case 11:l=a1
J.a3g(m).q()
if(l==null){w=8
break}i=J.eS(B.dK.gaS(l))
k="data:image/png;base64,"+B.cJ.gcu().aO(i)
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
return A.i($async$aRn,v)},
fR3:function fR3(){},
u7:function u7(d){this.a=d},
atg:function atg(d,e,f){this.c=d
this.d=e
this.a=f},
aFS:function aFS(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eRc:function eRc(d,e){this.a=d
this.b=e},
eR3:function eR3(d){this.a=d},
eR4:function eR4(d){this.a=d},
eRa:function eRa(d,e){this.a=d
this.b=e},
eR9:function eR9(d,e){this.a=d
this.b=e},
eR6:function eR6(d,e){this.a=d
this.b=e},
eR5:function eR5(d,e){this.a=d
this.b=e},
eR7:function eR7(d){this.a=d},
eR8:function eR8(d,e){this.a=d
this.b=e},
eRb:function eRb(d,e){this.a=d
this.b=e},
eQZ:function eQZ(d,e){this.a=d
this.b=e},
eR2:function eR2(d){this.a=d},
eR1:function eR1(d,e){this.a=d
this.b=e},
eR0:function eR0(d){this.a=d},
eRd:function eRd(d,e){this.a=d
this.b=e},
eRe:function eRe(d,e){this.a=d
this.b=e},
eR_:function eR_(d,e){this.a=d
this.b=e},
hyX(d,e,f){var w="thumbnailPath",v=e.ah()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.H(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).a9().ae(),"project",v],x.N,x.z)},
fR4(d,e,f){var w=0,v=A.j(x.N),u
var $async$fR4=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.aq(C.hyX(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fR4,v)},
bEX(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bEX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fR4(!0,d,e),$async$bEX)
case 4:w=3
return A.b(r.ate(g,d,e.a),$async$bEX)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dO.aO(B.X.aq(C.hyX(d,e,null),null))
u="NGMY_WS:"+B.kB.gcu().aO(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEX,v)},
hqB(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hbU(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d2(s,"NGMYWSSYNC2|"))return!0
if(J.d2(s,"NGMY_WS:"))return!0
if(J.f1(s,t))return!0
if(J.d2(s,"{"))try{w=B.X.aM(0,s,null)
if(x.f.b(w)){v=J.r(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iiU(d){var w,v,u,t=C.hqB(d)
if(t==null)return null
if(C.hbU(t))return t
w=B.a.cp(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b5(t,w))
if(C.hbU(v))return v}u=B.a.cp(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b5(t,u))
if(C.hbU(v))return v}return null},
hbT(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d2(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d2(q,"NGMY_WS:")){v=B.ch.cB(0,B.cF.aO(J.nk(q,8)))
w=t.a(B.X.aM(0,v,r))}else w=t.a(B.X.aM(0,q,r))
t=J.r(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.r(w,"project")
if(!x.f.b(u))return r
t=C.h6f(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bEW(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bEW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.atd(t[1]),$async$bEW)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hbT(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hbT(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEW,v)},
hbS(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.ly(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bEs(){var w=0,v=A.j(x.o),u,t
var $async$bEs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.H1(),$async$bEs)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hbT(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEs,v)},
hzY(d,e,f,g){return A.bV(B.L,null,new C.fZX(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fZX:function fZX(d,e,f){this.a=d
this.b=e
this.c=f},
adV:function adV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eRg:function eRg(d,e){this.a=d
this.b=e},
eRh:function eRh(d,e){this.a=d
this.b=e},
eRi:function eRi(d,e){this.a=d
this.b=e},
eRj:function eRj(d,e){this.a=d
this.b=e},
eRf:function eRf(d){this.a=d},
ata:function ata(d,e,f){this.c=d
this.d=e
this.a=f},
bmv:function bmv(){var _=this
_.c=_.a=_.e=_.d=null},
eQU:function eQU(d,e){this.a=d
this.b=e},
eQV:function eQV(d){this.a=d},
eQW:function eQW(d){this.a=d},
atf:function atf(d){this.a=d},
aFR:function aFR(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eQY:function eQY(d){this.a=d},
eQX:function eQX(d){this.a=d},
hSg(d,e,f,g,h){return new C.Ou(h,g,d,e,f,null)},
aKN:function aKN(d,e){this.a=d
this.b=e},
Ou:function Ou(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFT:function aFT(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eRG:function eRG(){},
eRC:function eRC(d,e){this.a=d
this.b=e},
eRD:function eRD(d){this.a=d},
eRn:function eRn(d){this.a=d},
eRl:function eRl(d){this.a=d},
eRm:function eRm(d){this.a=d},
eRw:function eRw(d,e){this.a=d
this.b=e},
eRt:function eRt(d,e){this.a=d
this.b=e},
eRu:function eRu(d,e){this.a=d
this.b=e},
eRv:function eRv(d,e,f){this.a=d
this.b=e
this.c=f},
eRr:function eRr(d,e,f){this.a=d
this.b=e
this.c=f},
eRp:function eRp(d){this.a=d},
eRq:function eRq(d){this.a=d},
eRs:function eRs(d){this.a=d},
eRJ:function eRJ(d){this.a=d},
eRI:function eRI(d){this.a=d},
eRK:function eRK(d){this.a=d},
eRH:function eRH(d){this.a=d},
eRk:function eRk(d){this.a=d},
eRo:function eRo(d,e){this.a=d
this.b=e},
eRF:function eRF(d,e){this.a=d
this.b=e},
eRE:function eRE(d,e){this.a=d
this.b=e},
eRz:function eRz(d){this.a=d},
eRA:function eRA(d){this.a=d},
eRB:function eRB(d,e){this.a=d
this.b=e},
eRy:function eRy(d,e){this.a=d
this.b=e},
eRx:function eRx(d,e,f){this.a=d
this.b=e
this.c=f},
bze:function bze(){},
AP(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ags(d,e,f){return C.i7b(d,e,f)},
i7b(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ags=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.au("String",e,f),$async$ags)
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
return A.i($async$ags,v)},
agr(d,e){return C.i7a(d,e)},
i7a(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$agr=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$agr)
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
return A.i($async$agr,v)},
i5W(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Td(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bBW(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bBW=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b3C(q),$async$bBW)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aRn(q,!1),$async$bBW)
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
return A.i($async$bBW,v)},
hFU(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rg(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rg(p,J.k(u==null?"":u),1,o,q)},
h6f(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cH(w,new C.cD3(),w.$ti.k("M.E"),x.Q)
v=A.a7(w).k("Z<M.E>")
r=A.C(new A.Z(w,new C.cD4(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bk(J.k(t==null?"":t))
return new C.ly(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ibd(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wb
case"female":case"f":return D.oi
default:return D.yG}},
hvC(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hg9(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ibd(v==null?j:J.k(v))
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
return new C.hW(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ibf(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.O0
case"viewer":return D.kM
default:return D.uk}},
ibg(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
GR(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aQ7(d,e){return B.a.i(e.toLowerCase())===C.GR(d,e)&&d.y!==D.kM},
um(d,e){var w,v=d.y
if(v===D.kM)return!1
w=B.a.i(e.toLowerCase())
if(w===C.GR(d,e))return!0
if(v===D.O0)return!0
v=d.e
return new A.N(v,A.hbZ(),A.T(v).k("N<1,n>")).t(0,w)},
iaG(d){return J.dI(d,new C.fBD()).gL(0)},
h_G(d){var w=0,v=A.j(x.y),u,t
var $async$h_G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.B_(d),$async$h_G)
case 3:u=t.rb(f,new C.h_H(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h_G,v)},
bCX(d,e){var w=0,v=A.j(x.H),u,t
var $async$bCX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.B_(d),$async$bCX)
case 3:t=g
if(J.rb(t,new C.fzw(e))){w=1
break}if(C.iaG(t)>=2)throw A.W(A.be("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bCX,v)},
aln(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cH(w,new C.bRp(),w.$ti.k("M.E"),x.P)
v=A.a7(w).k("Z<M.E>")
g=A.C(new A.Z(w,new C.bRq(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b6(u,new C.bRr(),x.N)
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
n=C.ibf(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aW(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cv)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gS(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kP(w,v,s,!r,t,g,q,p,o,n,m)},
hvM(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ar(v,0,8)},
Db(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$Db=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.RX(d),$async$Db)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Db)
case 4:t=f
w=5
return A.b(t.a6R(0),$async$Db)
case 5:w=6
return A.b(C.fq6(t,l),$async$Db)
case 6:s=f
if(J.cL(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hrb(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oU(l,n),$async$Db)
case 11:u=n
w=1
break
case 10:case 8:m=A.aT(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hrb(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oU(l,n),$async$Db)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Db,v)},
fq6(d,e){return C.i3l(d,e)},
i3l(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fq6=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aT(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AP(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.X.aM(0,a5,null)
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
l=B.X.aM(0,m,null)
if(!a0.b(l)){w=7
break}k=C.h6f(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AP(a9)+"_"+n))
i=C.i5W(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b3C(h),$async$fq6)
case 17:g=b1
if(g!=null){i=i.Td(g)
p=!0}case 16:J.cc(q,i)
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
case 8:J.S8(q,new C.fq7())
if(p&&J.ad(q)!==0)C.oU(a9,q)
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
return A.i($async$fq6,v)},
bDo(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bDo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.RX(d),$async$bDo)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Db(r),$async$bDo)
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
return A.i($async$bDo,v)},
hrb(d){var w,v,u,t
try{w=B.X.aM(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cH(v,new C.flX(),v.$ti.k("M.E"),x.fA)
u=A.a7(v).k("Z<M.E>")
v=A.C(new A.Z(v,new C.flY(),u),u.k("M.E"))
B.d.aZ(v,new C.flZ())
return v}catch(t){v=A.a([],x.D)
return v}},
oU(d,e){return C.ikS(d,e)},
ikS(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oU=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.RX(b2),$async$oU)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oU)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AP(a8)
p=A.aT(J.r(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.X.aM(0,p,null)),new C.fSs(),a2).fJ(0)
a2=J.b6(b3,new C.fSt(),a2).c_(0,new C.fSu())
n=A.df(a2,a2.$ti.k("M.E"))
a2=o,a2=A.en(a2,a2.r,A.a7(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f1(n,m)?17:18
break
case 17:a5=C.AP(a8)
l=A.aT(J.r(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8T(l),$async$oU)
case 19:t=21
a5=C.AP(a8)
k=A.aT(J.r(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.X.aM(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.r(j,"thumbnailPath")
w=28
return A.b(C.a8T(a5==null?null:J.k(a5)),$async$oU)
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
return A.b(C.agr(r,"ngmy_worksheet_item_v3_"+C.AP(a8)+"_"+m),$async$oU)
case 29:w=30
return A.b(C.agr(r,"ngmy_worksheet_thumb_v3_"+C.AP(a8)+"_"+m),$async$oU)
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
case 14:case 10:a2=J.cE(b3),a3=a2.gaf(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gS(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bBW(h),$async$oU)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ags(r,"ngmy_worksheet_thumb_v3_"+C.AP(a8)+"_"+a4,f),$async$oU)
case 40:g=i.Td(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.agr(r,"ngmy_worksheet_thumb_v3_"+C.AP(a8)+"_"+a4),$async$oU)
case 41:g=i.Td(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.agr(r,"ngmy_worksheet_thumb_v3_"+C.AP(a8)+"_"+a4),$async$oU)
case 42:case 34:a4=i.a
w=43
return A.b(C.ags(r,"ngmy_worksheet_item_v3_"+C.AP(a8)+"_"+a4,B.X.aq(g.ah(),null)),$async$oU)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.cc(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ags(r,"ngmy_worksheets_index_v3_"+C.AP(a8),B.X.aq(q,null)),$async$oU)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eN(b3,new C.fSv(q))
a4=a3.$ti.k("cO<1,a8<n,@>>")
a7=A.C(new A.cO(a3,new C.fSw(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ags(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.X.aq(a0,null)),$async$oU)
case 45:w=46
return A.b(J.hF_(r),$async$oU)
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
return A.i($async$oU,v)},
LB(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$LB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Db(d),$async$LB)
case 3:t=g
s=J.cE(t)
r=s.bh(t,new C.h_F(e))
if(r===-1)s.c6(t,0,e)
else s.n(t,r,e)
u=C.oU(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LB,v)},
bDa(d,e){var w=0,v=A.j(x.H),u
var $async$bDa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Db(d),$async$bDa)
case 2:u=g
J.nG(u,new C.fC6(e))
w=3
return A.b(C.oU(d,u),$async$bDa)
case 3:return A.h(null,v)}})
return A.i($async$bDa,v)},
GT(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$GT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$GT)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aT(J.r(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.X.aM(0,i,null)
if(x.j.b(t)){j=J.de(t,x.f)
j=A.cH(j,new C.fF1(),j.$ti.k("M.E"),x.k)
s=A.a7(j).k("Z<M.E>")
r=A.C(new A.Z(j,new C.fF2(),s),s.k("M.E"))
B.d.aZ(r,new C.fF3())
k=r}}catch(h){}w=4
return A.b(C.fmH(d),$async$GT)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.i3I(k,p,d)
j=A.T(o)
s=j.k("N<1,a8<n,@>>")
s=A.C(new A.N(o,new C.fF4(),s),s.k("ak.E"))
n=B.X.aq(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.R8(d,o),$async$GT)
case 7:case 6:j=j.k("Z<1>")
m=A.C(new A.Z(o,new C.fF5(d),j),j.k("M.E"))
if(m.length!==0)C.aPR(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$GT,v)},
fSe(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fSe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.R8(d,e),$async$fSe)
case 3:t=J.dI(e,new C.fSf(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aPR(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fSe,v)},
a39(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a39=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a39)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aT(J.r(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aM(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cH(m,new C.h_A(),m.$ti.k("M.E"),x.k)
t=A.a7(m).k("Z<M.E>")
s=A.C(new A.Z(m,new C.h_B(),t),t.k("M.E"))
o=s}}catch(k){}q=J.qy(o,new C.h_C(e))
if(B.a.i(e.x).length===0&&C.um(e,d)){m=B.a.i(d.toLowerCase())
p=e.aFa(e.y===D.kM?D.kM:D.uk,m)}else p=e
if(q===-1)J.pO(o,0,p)
else J.aJ(o,q,p)
w=3
return A.b(C.R8(d,o),$async$a39)
case 3:w=C.um(p,d)?4:5
break
case 4:w=6
return A.b(C.aPQ(C.GR(p,d),p),$async$a39)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a39,v)},
aQ3(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aQ3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.GT(d),$async$aQ3)
case 2:u=g
t=J.cE(u)
s=A.p7(t.eN(u,new C.fBO(e)))
t.bs(u,new C.fBP(e))
w=3
return A.b(C.R8(d,u),$async$aQ3)
case 3:w=s!=null&&C.aQ7(s,d)?4:5
break
case 4:w=6
return A.b(C.fm0(e),$async$aQ3)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aQ3,v)},
aig(d){var w=d.f,v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.h_L(),v),v.k("M.E"))
return w},
h9x(d,e){var w,v=d.f,u=A.p7(new A.Z(v,new C.fBi(e),A.T(v).k("Z<1>")))
v=C.aig(d)
w=A.T(v).k("Z<1>")
v=A.C(new A.Z(v,new C.fBj(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fBk())
return v},
ibj(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hA1(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bh(C.h9x(d,u),new C.h_7(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
icR(d,e){var w
if(e==null||e.length===0)return 1
w=C.h9x(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fFS(),A.T(w).k("N<1,G>")).f4(0,B.xD)+1},
ikL(d){var w,v=C.aig(d)
if(v.length===0)return null
w=new A.Z(v,new C.fS8(),A.T(v).k("Z<1>"))
if(!w.gan(0))return w.gI(0)
return B.d.gI(v)},
ibe(d){return A.H(["id",d.a,"name",d.b,"gender",C.hvC(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
icM(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
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
n=n!==D.yG?n:q.c
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
d=q.aF5(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cMV(a1,w,a3.d,a2.y,s,a0,v)},
B_(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$B_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$B_)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aT(J.r(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.X.aM(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.de(t,x.f)
p=A.cH(p,new C.fEZ(),p.$ti.k("M.E"),x.k)
s=A.a7(p).k("Z<M.E>")
p=A.C(new A.Z(p,new C.fF_(),s),s.k("M.E"))
B.d.aZ(p,new C.fF0())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$B_,v)},
ai1(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ai1=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uk:D.kM
a7=C.GR(b2,b3)
w=2
return A.b(C.B_(b1),$async$ai1)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bh(a8,new C.fS3(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bCX(b1,b2),$async$ai1)
case 5:case 4:if(b0===-1){u=b2.aFa(a6,a7)
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
i=i!==D.yG?i:l.c
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
s.n(0,m,l.aF5(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bd<2>")
s=A.C(new A.bd(s,k),k.k("M.E"))
k=a5?D.uk:D.kM
u=t.cMX(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.R8(b1,a8),$async$ai1)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aPQ(B.a.i(b3.toLowerCase()),u),$async$ai1)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ai1,v)},
hrA(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).a9().ae(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,a8<n,@>>"),k=A.C(new A.N(m,C.hz5(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.H(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.H(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a9().ae(),"updatedAt",o],r,x.K),"createdAt",s.a9().ae(),"updatedAt",o],r,x.z)},
hrB(d,e){var w=new A.V(Date.now(),0,!1).a9().ae(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,a8<n,@>>")
u=A.C(new A.N(u,C.hz5(),t),t.k("ak.E"))
return A.H(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a9().ae(),"updatedAt",w],x.N,x.z)},
i1c(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.aln(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hbZ(),A.T(j).k("N<1,n>")).c_(0,new C.fmu())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uk
else s=B.d.t(t,u)?D.O0:D.kM
return w.aFa(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.aln(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cH(h,new C.fmv(),h.$ti.k("M.E"),x.P)
p=A.a7(h).k("Z<M.E>")
o=A.C(new A.Z(h,new C.fmw(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fmx(),x.N).c_(0,new C.fmy())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uk
else s=B.d.t(t,u)?D.O0:D.kM
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
return new C.kP(h,r,p,!m,t,o,l,j,v,s,B.ca)},
fmH(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fmH=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fmL()
h=x.N
g=x.z
w=7
return A.b(A.iV(A.a([A.lD("family_trees","*",null,A.H(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bK),r.$2(A.lD("family_trees","*",A.H(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bK),"collaborator"),r.$2(A.lD("family_trees","*",null,A.H(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bK),"public")],x.cl),x.fO),$async$fmH)
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
if(J.ad(j)!==0)J.aJ(m,j,k)}l=m
h=A.a7(l).k("bd<2>")
h=A.cH(new A.bd(l,h),new C.fmI(a0),h.k("M.E"),x.k)
l=A.a7(h).k("Z<M.E>")
l=A.C(new A.Z(h,new C.fmJ(),l),l.k("M.E"))
B.d.aZ(l,new C.fmK())
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
return A.i($async$fmH,v)},
i3I(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gan(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dH(e,new C.fqO(),v).c_(0,new C.fqP())
t=A.df(u,u.$ti.k("M.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.GR(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kM){m=q.e
m=!new A.N(m,A.hbZ(),A.T(m).k("N<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gS(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.icM(l,v)
o=C.GR(k,w)
p=v.d
s.n(0,u,o===w?k.bdI(p,D.uk):k.bdI(p,v.y))}j=s.$ti.k("bd<2>")
j=A.C(new A.bd(s,j),j.k("M.E"))
B.d.aZ(j,new C.fqQ())
return j},
R8(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$R8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$R8)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.ftD(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.au("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.aq(s,null)),$async$R8)
case 3:return A.h(null,v)}})
return A.i($async$R8,v)},
aPQ(d,e){return C.i9_(d,e)},
i9_(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aPQ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m8("family_trees",A.a([C.hrA(e,d)],p),null,B.cG),$async$aPQ)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m8("family_trees",A.a([C.hrB(e,d)],p),null,B.cG),$async$aPQ)
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
return A.i($async$aPQ,v)},
aPR(d,e){return C.i90(d,e)},
i90(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aPR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,a8<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fyQ(d),n),m)
r=l
w=7
return A.b(A.m8("family_trees",r,null,B.cG),$async$aPR)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fyR(d),n),m)
p=k
w=8
return A.b(A.m8("family_trees",p,null,B.cG),$async$aPR)
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
return A.i($async$aPR,v)},
fm0(d){return C.i0v(d)},
i0v(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fm0=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Rx("family_trees",A.H(["id",d],x.N,x.z),null,B.cG),$async$fm0)
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
return A.i($async$fm0,v)},
rg:function rg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ly:function ly(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cD6:function cD6(){},
cD5:function cD5(){},
cD3:function cD3(){},
cD4:function cD4(){},
HZ:function HZ(d,e){this.a=d
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
alm:function alm(d,e){this.a=d
this.b=e},
fBD:function fBD(){},
h_H:function h_H(d){this.a=d},
fzw:function fzw(d){this.a=d},
kP:function kP(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bRt:function bRt(){},
bRs:function bRs(){},
bRp:function bRp(){},
bRq:function bRq(){},
bRr:function bRr(){},
fq7:function fq7(){},
flX:function flX(){},
flY:function flY(){},
flZ:function flZ(){},
fSs:function fSs(){},
fSt:function fSt(){},
fSu:function fSu(){},
fSv:function fSv(d){this.a=d},
fSw:function fSw(){},
h_F:function h_F(d){this.a=d},
fC6:function fC6(d){this.a=d},
fF1:function fF1(){},
fF2:function fF2(){},
fF3:function fF3(){},
fF4:function fF4(){},
fF5:function fF5(d){this.a=d},
fSf:function fSf(d){this.a=d},
h_A:function h_A(){},
h_B:function h_B(){},
h_C:function h_C(d){this.a=d},
fBO:function fBO(d){this.a=d},
fBP:function fBP(d){this.a=d},
h_L:function h_L(){},
fBi:function fBi(d){this.a=d},
fBj:function fBj(d,e){this.a=d
this.b=e},
fBk:function fBk(){},
h_7:function h_7(d){this.a=d},
fFS:function fFS(){},
fS8:function fS8(){},
fEZ:function fEZ(){},
fF_:function fF_(){},
fF0:function fF0(){},
fS3:function fS3(d){this.a=d},
fmu:function fmu(){},
fmv:function fmv(){},
fmw:function fmw(){},
fmx:function fmx(){},
fmy:function fmy(){},
fmL:function fmL(){},
fmM:function fmM(d){this.a=d},
fmI:function fmI(d){this.a=d},
fmJ:function fmJ(){},
fmK:function fmK(){},
fqO:function fqO(){},
fqP:function fqP(){},
fqQ:function fqQ(){},
ftD:function ftD(){},
fyQ:function fyQ(d){this.a=d},
fyR:function fyR(d){this.a=d},
cD7:function cD7(d,e){this.a=d
this.b=e},
cD8:function cD8(d,e){this.a=d
this.b=e},
aHY:function aHY(d,e,f){this.a=d
this.b=e
this.c=f},
ba_:function ba_(){this.b=this.a=0},
b9Z:function b9Z(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bxs:function bxs(){},
x2(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcg()+"/"+w.gcw()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.aX(B.o.u(w.gno()),2,"0")+":"+B.a.aX(B.o.u(w.gGv()),2,"0")},
hSd(){var w,v=$.oh(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"WS"+B.d.hm(u)},
atb(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$atb=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atb)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bK),$async$atb)
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
return A.i($async$atb,v)},
atc(d){return C.hSe(d)},
hSe(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$atc=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atc)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hN("ngmy_worksheet_project_qr_stashes_v1",A.H(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).a9().ae()],x.N,x.z),!1,!1,B.cG,null),$async$atc)
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
return A.i($async$atc,v)},
ate(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$ate=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$ate)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hSd()
w=4
return A.b(C.atb(),$async$ate)
case 4:r=h
q=B.a.i(e)
p=B.dO.aO(t)
J.aJ(r,s,A.H(["ownerEmail",q,"projectId",f,"payload",B.cJ.gcu().aO(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).a9().ae()],x.N,x.K))
w=5
return A.b(C.atc(r),$async$ate)
case 5:u=new A.a0D("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ate,v)},
atd(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$atd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c8(),$async$atd)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.atb(),$async$atd)
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
try{s=B.ch.cB(0,B.cF.aO(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dN(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a9().ae())
p.n(q,i,m)}w=5
return A.b(C.atc(q),$async$atd)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atd,v)},
hm2(){var w=new A.V(Date.now(),0,!1).a9()
return"wst_"+(1000*w.a+w.b)+"_"+B.cK.ap(999999)},
hSf(d){var w,v,u,t,s,r,q
try{w=A.agT(d)
if(w==null)return d
v=w
if(J.LG(v)>960||J.LF(v)>960){s=v
r=J.LG(v)>=J.LF(v)?960:null
v=A.agS(s,J.LF(v)>J.LG(v)?960:null,B.Pm,r)}s=v
u=A.amL(82).TA(s,B.zi)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cn(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
clT(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$clT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hSf(e)
$.clP.n(0,s,t)
u=C.bEZ(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$clT,v)},
b3C(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b3C=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d2(l,"data:image")){u=null
w=1
break}t=4
r=J.f1(l,",")?B.d.gak(J.lG(l,",")):l
q=B.cF.aO(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hm2()
w=7
return A.b(C.clT(p,q),$async$b3C)
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
return A.i($async$b3C,v)},
clQ(d){var w=0,v=A.j(x.T),u,t,s
var $async$clQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.clS(s),$async$clQ)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cJ.gcu().aO(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$clQ,v)},
a8T(d){var w=0,v=A.j(x.H),u,t
var $async$a8T=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hyY(d)
if(t==null){w=1
break}$.clP.W(0,t)
w=3
return A.b(C.bEY(t),$async$a8T)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8T,v)},
bEZ(d,e){return C.iiX(d,e)},
iiX(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bEZ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aOL
w=7
return A.b(n==null?$.aOL=N.h8u():n,$async$bEZ)
case 7:r=g
q=new Uint8Array(A.cn(e))
p=J.mX(r,"thumbs","readwrite")
B.j1.ms(J.mW(p,"thumbs"),q,l)
w=8
return A.b(J.pN(p),$async$bEZ)
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
return A.i($async$bEZ,v)},
bEY(d){return C.iiV(d)},
iiV(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bEY=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aOL
w=7
return A.b(o==null?$.aOL=N.h8u():o,$async$bEY)
case 7:r=f
q=J.mX(r,"thumbs","readwrite")
B.j1.G2(J.mW(q,"thumbs"),m)
w=8
return A.b(J.pN(q),$async$bEY)
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
return A.i($async$bEY,v)}},D,Av,Aw,A_,Ax,Ay
J=c[1]
A=c[0]
B=c[2]
N=c[61]
P=c[257]
A0=c[163]
S=c[60]
Aa=c[232]
L=c[212]
H=c[35]
E=c[222]
T=c[122]
Ab=c[235]
Q=c[106]
Ac=c[135]
U=c[228]
Ad=c[117]
Ae=c[198]
A1=c[119]
Af=c[231]
Ag=c[43]
R=c[230]
M=c[91]
A2=c[87]
A3=c[169]
Ah=c[130]
A4=c[172]
A5=c[251]
A6=c[199]
Ai=c[190]
Aj=c[202]
A7=c[197]
Ak=c[254]
Al=c[73]
A8=c[256]
Am=c[79]
G=c[255]
An=c[134]
Ao=c[259]
Ap=c[121]
A9=c[216]
Aq=c[34]
V=c[120]
O=c[192]
Ar=c[203]
As=c[126]
W=c[258]
At=c[155]
X=c[244]
Y=c[42]
F=c[97]
Au=c[33]
K=c[105]
I=c[139]
Z=c[77]
C=a.updateHolder(c[7],C)
D=c[250]
Av=c[78]
Aw=c[210]
A_=c[253]
Ax=c[252]
Ay=c[64]
C.aoX.prototype={}
C.aZV.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bhZ(),f=h.x!=null&&h.zg(i).length===0
if(h.x!=null)w=f?B.b1:B.bB
else w=h.gUd()?B.bB:B.dZ
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.J(D.bmt,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.f40,B.f,i,i,new A.o(B.b1.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h5,i,i,i),B.W,D.fzd,B.au,A.d(C.x2(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fuU,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,D.b4X,i,i,i,i,B.a_B,i,i,i)
q=A.m(16)
p=A.J(B.aN,B.r,1)
o=A.J(B.b1.j(0.28),B.r,1)
n=A.hax(h.d)
o=A.p(B.A,C.aZU(A.fIc(h.e,n),30),B.f,i,i,new A.o(B.m1,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fq_,B.K,i,i)
m=A.m(14)
l=A.J(B.aN,B.r,1)
q=A.p(i,A.x(A.a([o,B.Q,n,B.bF,D.fzw,B.ae,A.p(i,A.x(A.a([D.fPv,B.bF,A.d(A.B1(h.c),i,i,i,i,i,i,D.fkI,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.ff,i,i,1/0)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,O.akH,i,i,i)
p=A.m(16)
m=A.J(B.aN,B.r,1)
l=j.aRY("Original due",C.x2(h.r,!1))
n=j.aRY("Current due",C.x2(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.W,A.p(i,A.x(A.a([l,B.Q,n,B.W,A.p(i,A.d(h.gaM4(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.BP,i,i,1/0),B.W,j.ci_(),B.Q,j.c5d(g,f)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.J(B.aN,B.r,1)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fAu,B.au,A.d(q,i,i,i,i,i,i,D.fpd,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaGQ()){q=A.m(14)
o=A.J(B.cq,B.r,1.6)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fQQ,B.Q,A.bx(A.m(12),A.ec(new A.a4(1/0,88,A.b4(i,i,i,new A.Wl(h.ax,B.N,D.f8j,!0,3.5,i),B.aw),i),B.c,!0),B.ap)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Gn,i,i,i)],s))}p.push(B.aB)
p.push(D.fIK)
return A.p(i,A.x(A.a([r,new A.D(B.a_p,A.x(p,B.ak,i,B.e,B.i,0,B.p),i)],s),B.ak,i,B.e,B.P,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aRY(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.aak,w,w,w),1),A.d(e,w,w,w,w,w,w,D.flL,w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
ci_(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aa2(B.dZ,u,"Not paid yet")
w=t.zg(null).length
v=w===0?B.b1:B.bB
return this.aa2(v,u,C.x2(t.x,!0))},
c5d(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aa2(B.b1,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aa2(B.b1,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.aak,u,u,u)
v=A.T(d).k("N<1,h3>")
v=A.C(new A.N(d,new C.c6H(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bY(B.bG,v,B.br,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aa2(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.aak,w,w,w),1),new A.dr(1,B.cn,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dV,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bc8.prototype={
a3(d,e){new A.Wl(this.b,B.N,e,!0,3.5,null).a3(d,e)},
av(d){return d.b!==this.b}}
C.ap8.prototype={
R(){return new C.aDR(A.a([],x.bp))},
ge2(){return this.c}}
C.aDR.prototype={
Z(){this.a2()
this.J0()},
J0(){var w=0,v=A.j(x.H),u,t=this,s
var $async$J0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2q(t.a.c),$async$J0)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dMU(t,s))
case 1:return A.h(u,v)}})
return A.i($async$J0,v)},
aTV(d,e){var w,v=null,u=this.a.d.a,t=u?B.N:B.aP,s=A.l(v,v,u?B.bu:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bu:B.bn).j(0.22)
w=A.m(10)
return A.br(v,new A.b5(4,r,new A.ay(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b5(4,w,new A.ay((this.a.d.a?B.bu:B.bn).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b5(4,A.m(10),D.b2B),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aTU(d){return this.aTV(d,null)},
PO(d){return this.clC(d)},
clC(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PO=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.HF:B.eL
w=7
return A.b(new A.hX().Cj(72,900,900,n),$async$PO)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fl(),$async$PO)
case 8:p=f
n=B.cJ.gcu().aO(p)
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
return A.i($async$PO,v)},
b1S(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.N:B.aP,o=A.m(10),n=A.J((q?B.bu:B.bn).j(0.18),B.r,1)
if(d)q=B.cQ
else q=s.a.d.a?B.bu:B.bn
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cQ
else u=s.a.d.a?B.bu:B.bn
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fw(r,r,r,r,r,r,r,r,r,r,r,B.cQ,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cc)
q=A.a([q,B.ad,u,A.bN(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cx,s.a.d.a?B.bu:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cc))
return A.p(r,A.B(q,B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jy,D.bz9,r,r,r)},
Dk(d){return this.bBR(d)},
bBQ(){return this.Dk(null)},
bBR(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dk=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.au(new A.ba(a4,B.b4,B.aO),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jl(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ac(p,2)}o=new A.au(new A.ba(a4,B.b4,B.aO),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b4,B.aO),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c3(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)}else{a4=a5.f
m=A.c3(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bp(a4,!0,x.cT)
i=a3?null:A.hax(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wM?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i2(B.w.j(0.55),!0,"Dismiss",a4,new C.dMD(),new C.dME(a2,t,a5,r,new C.dMF(a2,t),o,n,j),B.eH,!0,x.y),$async$Dk)
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
break}if(f.length===0||e<=0){t.c.K(x.q).f.U(D.feP)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.U(D.fdu)
w=1
break}a1=A.fIc(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wM?"male":"female"
w=7
return A.b(A.aif(a3,A.hiK(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Dk)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wM?"male":"female"
a5.e=a1
a3=a5.ax
B.d.aa(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c3(a3.gck(),a3.gcg(),a3.gcw(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c3(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)))a5.cPc(a2.a)
w=8
return A.b(A.aif(t.a.c,a5),$async$Dk)
case 8:case 5:w=9
return A.b(t.J0(),$async$Dk)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Dk,v)},
aUy(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cQ.j(0.14)
else w=this.a.d.a?B.N:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cQ
else s=(this.a.d.a?B.bu:B.bn).j(0.2)
s=A.J(s,B.r,g?1.5:1)
r=C.aZU(d,18)
if(g)q=B.cQ
else q=this.a.d.a?B.aP:B.av
return A.aI(!1,B.a2,!0,v,A.aO(!1,u,!0,A.p(p,A.B(A.a([r,B.bm,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b9,B.i,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Sy(d){return this.cDq(d)},
cDq(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Sy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i2(B.w.j(0.55),!0,"Dismiss",s,new C.dMX(),new C.dMY(t,d),B.h4,!0,x.y),$async$Sy)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aif(t.a.c,d),$async$Sy)
case 7:w=8
return A.b(t.J0(),$async$Sy)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Sy,v)},
PN(d,e){return this.bMH(0,e)},
bMH(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.li(s,"Cancel","Delete",e.b+" \xb7 "+A.B1(e.c)+" will be removed from this device.","Delete this debt?"),$async$PN)
case 3:if(!g){w=1
break}w=4
return A.b(C.fBV(t.a.c,e.a),$async$PN)
case 4:w=5
return A.b(t.J0(),$async$PN)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PN,v)},
afL(d){return this.cfq(d)},
cfq(d){var w=0,v=A.j(x.H),u=this,t
var $async$afL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bV(B.L,null,new C.dMR(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$afL)
case 2:return A.h(null,v)}})
return A.i($async$afL,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.enM
w=J.dI(m.d,new C.dMZ())
v=A.C(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dN_())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cI(v,0,new C.dN0())
w=A.m(18)
s=m.a.d.a
r=s?D.cyg:D.aBr
q=A.J(s?B.cQ.j(0.35):B.cQ.j(0.18),B.r,1)
s=A.p(l,D.c_a,B.f,l,l,new A.o(B.cQ.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aI(!1,B.a2,!0,A.m(12),A.aO(!1,A.m(12),!0,D.en7,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dN1(m),l,l,l,l,l,l,l),B.f,B.cQ,0,l,l,l,l,l,B.ai)],p),B.m,l,B.e,B.i,0,l,l)
o=A.E(m.czz("Open",""+v.length),1)
n=v.length===0?"$0.00":A.B1(t)
r=A.a([A.p(l,A.x(A.a([s,B.ae,A.B(A.a([o,B.ad,A.E(m.b7Z(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.ay,B.aE,B.x,r,l,l),B.n),l,l,l,l,B.akE,l,l,l),B.aB],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.e4:B.c
q=A.m(18)
o=A.J((w?B.bu:B.bn).j(0.12),B.r,1)
n=A.p(l,D.bUZ,B.f,l,l,new A.o(B.cQ.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.ae,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.m,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bBK,l,l,1/0))}else{w=m.gckT()
s=A.C(new A.N(v,w,A.T(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bDq,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.T(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.ak,l,B.e,B.i,0,B.p)},
b7Z(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.J((v.a.d.a?B.bu:B.bn).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bu:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cQ
else w=v.a.d.a?B.aP:B.av
return A.p(u,A.x(A.a([q,B.bF,A.d(f,u,1,B.a1,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eB,u,u,u)},
czz(d,e){return this.b7Z(!1,d,e)},
ckU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zg(j).length,h=d.bhc()
if(d.x!=null){w=d.zg(j).length
v=w===0?B.cQ:B.bB}else if(d.gUd())v=B.bB
else{if(h)w=B.cQ
else w=k.a.d.a?B.bu:B.bn
v=w}if(d.x!=null){w=d.zg(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.x2(u,!1)}else{u.toString
t="Paid "+C.x2(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.x2(w,!1)+" \xb7 "+i+" missed":"Due "+C.x2(w,!1)}w=k.a.d.a?B.e4:B.c
u=A.m(18)
if(d.gUd()&&d.x==null)s=B.bB.j(0.35)
else s=(k.a.d.a?B.bu:B.bn).j(0.12)
s=A.J(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cH,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bo:B.m1
o=A.J(d.gUd()&&d.x==null?B.bB.j(0.45):B.cQ.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hax(d.d)
o=A.p(B.A,A.db(C.aZU(A.fIc(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.av
m=x.p
n=A.a([new A.dr(1,B.cn,A.d(p,j,1,B.a1,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaGQ())B.d.v(n,A.a([B.eg,A.X(B.Os,B.cQ.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.i,0,j,j),B.cS,A.d(t,j,1,B.a1,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.B1(d.c)
l=k.a.d.a?B.aP:B.av
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aI(!1,B.a2,!0,j,A.aO(!1,q,!0,new A.D(A5.akr,A.B(A.a([o,B.bc,p,B.ad,A.x(A.a([n,B.bF,A.X(B.eE,(k.a.d.a?B.bu:B.bn).j(0.5),j,j,j,18)],m),B.dI,j,B.e,B.i,0,B.p)],m),B.m,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dMT(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d1,j,j,j,j)}}
C.uD.prototype={}
C.ala.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bj
u=v?B.E:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.J(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cy,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.J(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.p(a0,A.X(B.cx,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a3))
m=v?B.a5:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iE,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.axC,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.GE,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eO(m,A.B(l,B.m,a0,B.e,B.P,0,a0,a0),B.f,B.e3)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.byk,A.d(v,a0,1,B.a1,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bp,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fC,A.x(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.f97)
a2=A.a([A.B(n,B.m,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.w2,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a5,B.a8,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lG,A.x(a2,B.m,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.J(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hl,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.ay,B.aE,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bzC,a0,a0,a0,a0)}}
C.aVG.prototype={
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
o=A.a([A.B(l,B.m,q,B.e,B.i,0,q,q),B.cS,n],m)
if(p.z)o.push(new A.D(B.ub,n,q))
return new A.D(B.d1,A.x(o,B.m,q,B.e,B.P,0,B.p),q)}}
C.Tb.prototype={
R(){return new C.bfL()}}
C.bfL.prototype={
gc07(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aG(d,n,x.w).w,l=x.p,k=A.a([D.enH,D.enN],l)
for(w=0;w<8;++w){v=D.a3R[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Hr:B.Cw
q=t===s
r=A.X(r,q?B.eG:B.bU,n,n,n,17)
q=q?B.c:B.ac
r=A.a([r,B.bm,new A.y(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ad,new A.by(1,B.ba,new A.y(v.c,n,B.Ao,n,n,n,n,B.a1,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ay(B.eG,2,B.r,-1)
s=new A.o(n,n,new A.bH(p,p,p,p),new A.bh(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eJ,A.x(A.a([new A.D(B.mK,new A.ca(B.aM,B.e,B.i,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.BE(!0,new C.ala(v,q.d,q.e,new C.dcF(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dcG(o,v),n,n,n,n,n,n,!1,B.a3))}k.push(new A.D(D.bzX,A.bI(D.fWm,n,new C.dcH(o,d),A.bo(B.b7,n,n,n,n,B.oK,n,n,new A.b8(A.m(16),B.a0),n,n,n)),n))
return A.bn(!0,new A.cT(new A.aZ(0,1/0,0,m.a.b*0.9),A.cl(k,n,n,D.bEi,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.nq.prototype={
ah(){var w=this
return A.H(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a9().ae()],x.N,x.z)},
bdU(d,e,f){return new C.nq(this.a,e,d,f)}}
C.HY.prototype={
wA(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.HY(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aEZ(d){var w=null
return this.wA(w,w,w,w,w,d,w,w,w,w,w,w)},
cKT(d){var w=null
return this.wA(w,w,w,w,d,w,w,w,w,w,w,w)},
bdS(d,e,f){var w=null
return this.wA(d,w,w,w,w,w,w,w,e,w,f,w)},
cLx(d){var w=null
return this.wA(w,w,w,w,w,w,d,w,w,w,w,w)},
cLG(d){var w=null
return this.wA(w,w,w,w,w,w,w,w,w,d,w,w)},
cKR(d){var w=null
return this.wA(w,w,w,d,w,w,w,w,w,w,w,w)},
cLI(d){var w=null
return this.wA(w,w,w,w,w,w,w,w,w,w,w,d)},
cKO(d){var w=null
return this.wA(w,w,d,w,w,w,w,w,w,w,w,w)},
cKJ(d){var w=null
return this.wA(w,d,w,w,w,w,w,w,w,w,w,w)},
FV(d){var w=null
return this.wA(w,w,w,w,w,w,w,d,w,w,w,w)},
cLQ(d,e,f,g,h,i,j,k,l,m,n){return this.wA(d,e,f,g,null,h,i,j,k,l,m,n)},
ah(){var w=this
return A.H(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cIq(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bQa(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cQ(d.h(0,n))).length!==0?B.a.i(A.cQ(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cQ(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Dl.gev(D.Dl))
s=i==null?o:B.k.E(i,18,36)
r=l.$2("position",D.a5v)
q=l.$2("frame",D.a4S)
l=l.$2("texture",D.a4O)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cQ(d.h(0,"author"))):o
return this.cLQ(p,u,t,q,r,A.r5(d.h(0,"ribbon"))?A.Gt(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.ZN.prototype={
R(){return new C.aAR(A.a([],x.I),D.O_)},
ge2(){return this.c}}
C.aAR.prototype={
Z(){var w,v=this
v.a2()
v.f=A.zV(0,1)
w=$.ax()
v.z=new A.au(B.at,w)
v.Q=new A.au(B.at,w)
v.la()
w=v.a
C.bDl(w.c,w.d).bK(new C.ddl(v),x.fL)},
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
break}t.m(new C.dd9(t,r))
t.awG()
case 1:return A.h(u,v)}})
return A.i($async$la,v)},
gatg(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.r(v.d,v.r)},
awG(){var w,v,u=this.gatg(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saY(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saY(0,w==null?"":w)},
cdR(d){this.m(new C.dd6(this,d))
this.awG()},
NK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nq(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aRK(r.c,r.d,s),$async$NK)
case 3:w=4
return A.b(t.la(),$async$NK)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.qy(t.d,new C.dcI(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dcJ(t,p))
t.awG()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Bg(p+1,B.cu,B.kJ),$async$NK)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NK,v)},
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
break}s=t.gatg()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aRK(o.c,o.d,new C.nq(s,r,q,new A.V(p,0,!1))),$async$AX)
case 3:w=4
return A.b(t.la(),$async$AX)
case 4:if(t.c==null){w=1
break}t.m(new C.dda(t))
case 1:return A.h(u,v)}})
return A.i($async$AX,v)},
Oo(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gatg()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dcR(r),s,null,!0,!0,x.y),$async$Oo)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bD6(s.c,s.d,r.a),$async$Oo)
case 4:t.m(new C.dcS(t))
w=5
return A.b(t.la(),$async$Oo)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Ug(B.o.E(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Oo,v)},
yE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AX(),$async$yE)
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
return A.b(C.Rp(s,r.r,o,p,q),$async$yE)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hzA(s,r.x,r.r),$async$yE)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Lb(s.c,s.d),$async$yE)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.M(l,new C.nq(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Ba(r.c,r.d,l),$async$yE)
case 11:w=12
return A.b(t.la(),$async$yE)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yE,v)},
a15(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a15=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AX(),$async$a15)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyC(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dN(D.zr,new C.dd7(t),new C.dd8())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mK("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gS(o)
p.push(new H.mK(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hcb(o,new H.rB(s,r,"",p,new H.uT(q.d,null,null,null,null,"","","")),null),$async$a15)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a15,v)},
O7(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$O7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AX(),$async$O7)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bV(D.afu,null,new C.dcN(t),s,!0,!0,!0,K.a8z,!1,!1,x.N),$async$O7)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cKT(r)
t.m(new C.dcO(t,q))
s=t.a
w=7
return A.b(C.S0(s.c,s.d,q),$async$O7)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O7,v)},
Xz(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(D.afu,null,new C.dcT(t),r,!0,!0,!0,K.a8z,!1,!1,x.e),$async$Xz)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dcU(t,s))
r=t.a
w=4
return A.b(C.S0(r.c,r.d,s),$async$Xz)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.Bg(0,B.dU,B.nq)
case 1:return A.h(u,v)}})
return A.i($async$Xz,v)},
bSf(d){var w=d.bU(),v=B.a.aX(B.o.u(w.gcg()),2,"0"),u=B.a.aX(B.o.u(w.gcw()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gyC(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c_l()
if(r.e)w=D.aeb
else if(J.ct(r.d)){w=r.y
v=r.gyC(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fk4,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a4(q,330,new A.D(X.alH,new C.Z4(w,v,0,q),q),q),B.bx,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kF.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.p(q,D.f3O,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dH.j(0.45),B.I,18)],x.V),E.wC,B.n),q,q,q,q,B.NJ,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcHt(),q,q,q,q,q,q,!1,B.a3))
w.push(B.W)
w.push(A.hs(D.bR8,D.fVO,r.gaNO(),q))
B.d.v(u,w)}w=A.as(A.ch(A.x(u,B.m,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.eu,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kF.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.U,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dS:B.AW
u=A.x(A.a([new A.D(D.bB0,w,q),A.E(A.Jj(v,new C.ddj(r),J.ad(r.d)+1,q,r.gcdQ(),u,B.aM),1),r.bEK()],x.p),B.m,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c6(q,D.Yn,new A.an(B.a_,q,B.b3,B.t,A.a([D.aOU,A.bn(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
c_l(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cL(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Kh(B.e5,"AI",h.gbCD(),!0))
if(h.a.f)f.push(new C.Kh(B.ma,"Cover",h.gbNg(),!1))
if(h.a.f)f.push(new C.Kh(B.wx,"Header",h.gbIg(),!1))
if(J.cL(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Kh(B.uC,"Print",h.gcmW(),!1))
if(h.a.f&&J.cL(h.d)&&h.r>=0){v=h.w
u=v?B.hA:B.iY
t=v?"Save":"Edit"
f.push(new C.Kh(u,t,v?h.gctc():new C.dd3(h),!1))}if(h.a.f)f.push(new C.Kh(B.hQ,"Add page",h.gaNO(),!1))
v=C.hvB(h.y.Q)
u=h.gyC(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dCU
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.ke.j(0.5),1,B.r,-1)
j=A.p(g,A.X(l.a,D.kF,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bH(i,i,i,i),new A.bh(k,k,k,k),g,new A.a9(B.a5,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kF.j(0.85)
p.push(new A.by(1,B.ba,A.aA(B.c6,A.x(A.a([k,B.bF,new A.y(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a3),g))}return new C.ala(v,u,t+" \xb7 "+s+" "+r,new C.dd4(h),A.B(p,B.m,g,B.e,B.i,0,g,g),g)},
zZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AX(),$async$zZ)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gS(r)
s.push(q.b+" "+q.c)}p=H.a2F(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.ck(null,null,!0,null,new C.dcK(t,p),s,null,!0,!0,x.N),$async$zZ)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yE(),$async$zZ)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DX(),$async$zZ)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fx("Swahili (Kiswahili)",!0),$async$zZ)
case 18:w=16
break
case 17:w=19
return A.b(t.cE1(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zZ)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zZ,v)},
Zt(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.J(E.ke.j(0.3),B.r,1),r=x.p
return new A.D(B.ct,A.aO(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.wC,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.Kg,w,w,w),A.d(g,w,w,w,w,w,w,B.Ap,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.m,w,B.e,B.i,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dd5(d,h),w,w,w,w,w,w,w),w)},
DX(){return this.bRK()},
bRK(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DX=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dcX(r),a7,null,!0,!0,x.ei),$async$DX)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eC("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.ck(null,null,!1,null,new C.dcY(o),a7,null,!0,!0,x.H).fp(new C.dcZ(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.cc(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ah()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zr[a1]
J.cc(j,i.a)}w=8
return A.b(C.ahp(a0,a7,new C.dd_(o),d,l,e,j),$async$DX)
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
if(l!=null&&a6.a)A.a5(l,!0).eM()
l=o
l.si7($.ax())
J.aSb(l,0)
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
a7=j.bdU(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.r(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Ba(j.c,j.d,l),$async$DX)
case 11:w=12
return A.b(r.la(),$async$DX)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zr[a1].a)
a5=l.cIq(j,12,a7)
l=r.a
w=15
return A.b(C.S0(l.c,l.d,a5),$async$DX)
case 15:if(r.c!=null)r.m(new C.dd0(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.Bg(0,B.dU,B.nq)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.cxj("Undo",new C.dd1(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.eq,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DX,v)},
Fx(d,e){return this.cE2(d,e)},
cE1(d){return this.Fx(d,!1)},
cE2(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fx=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eC("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.ck(null,null,!1,null,new C.ddc(a0),k,null,!0,!0,x.H).fp(new C.ddd(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.cc(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a2S(m,new C.dde(a0)),$async$Fx)
case 10:w=8
break
case 9:w=11
return A.b(C.bEP(new C.ddf(a0),m,a2),$async$Fx)
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
if(o!=null&&f.a)A.a5(o,!0).eM()
o=a0
o.si7($.ax())
J.aSb(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.U(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.r(d,g)
j=J.r(p,g)
o.push(k.bdU(J.r(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Ba(k.c,k.d,o),$async$Fx)
case 12:w=13
return A.b(r.la(),$async$Fx)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.cxj("Undo",new C.ddg(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fx,v)},
bEK(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dcL(v):u
r=A.aH(u,u,u,u,A.X(D.bMO,s?D.kF:B.aX,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cL(v.d)&&!v.w&&v.r>=0)s=A.hs(A.X(B.wg,B.G0,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.G0,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbMR(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kF.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dcM(v):u
return A.bn(!0,new A.D(D.bAP,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.eE,t<J.ad(v.d)?D.kF:B.aX,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.i,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.ZR.prototype={
R(){return new C.bg9(new A.au(B.at,$.ax()))}}
C.bg9.prototype={
ga2e(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.T$=$.ax()
w.P$=0
this.a1()},
gbQn(){var w,v=this.ga2e()
A:{if("cover"===v){w=D.d4w
break A}if("book"===v){w=D.d_U
break A}w=D.dvn
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.ke.j(0.5),n=x.p,m=A.B(A.a([D.dCV,B.as,D.bGq,A.aH(q,q,q,q,B.lh,q,q,q,new C.df6(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.i,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.ju(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.df7(r),r.ga2e()==="page",q,q,q,q))
if(r.a.d)l.push(A.ju(q,q,q,D.fQl,q,new C.df8(r),r.ga2e()==="book",q,q,q,q))
l.push(A.ju(q,q,q,D.fDa,q,new C.df9(r),r.ga2e()==="cover",q,q,q,q))
l=A.bY(B.bG,l,B.br,q,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.Y,!1,q,!0,B.t,q,A.aN(),r.d,q,q,q,q,q,2,A.br(q,new A.b5(4,A.m(16),B.a0),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kx,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.aa,q,q,q,q,q,q,q,q,q,q,q,B.df,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbQn(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mY(q,B.c.j(0.08),new A.y(s,q,B.Kd,q,q,q,q,q,q,q,q,q),B.hc,new C.dfa(r,s),q,q,q,q))}return A.eT(q,E.Br,A.ch(A.x(A.a([m,B.W,D.fTF,B.am,l,B.ae,k,B.Q,A.bY(B.bG,w,B.br,q,6,6),B.aB,A.di(D.bR5,D.fUs,new C.dfb(r,d),A.bo(B.b7,q,q,q,q,B.oK,q,q,new A.b8(A.m(16),B.a0),q,q,q)),B.au,D.fOA],n),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.fl,q,q,B.ah),q,q,q,D.alo,B.d8,q,new A.b8(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.ZP.prototype={
R(){return new C.aAU(A.a([],x.gA))},
ge2(){return this.c}}
C.af6.prototype={}
C.aAU.prototype={
Z(){this.a2()
this.la()},
la(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$la=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Rt(p.c,p.d),$async$la)
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
return A.b(C.bDl(r.c,q),$async$la)
case 6:j=e
i=J
w=7
return A.b(C.Lb(t.a.c,q),$async$la)
case 7:m.push(new l.af6(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.ddA(t,n))
case 1:return A.h(u,v)}})
return A.i($async$la,v)},
b9f(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Qy(d,e){return this.cfo(0,e)},
cfo(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).cc(A.eh(new C.ddz(u,e),!0,null,x.y)),$async$Qy)
case 2:t=g
w=3
return A.b(u.la(),$async$Qy)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.U(D.aSw)
return A.h(null,v)}})
return A.i($async$Qy,v)},
FA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.U(D.aSs)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.agK(s.c,s.d),$async$FA)
case 5:q=e
w=6
return A.b(t.la(),$async$FA)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Qy(0,B.d.fY(t.d,new C.ddE(q))),$async$FA)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Rp(p,s.f,r,n,o),$async$FA)
case 10:m=e
w=11
return A.b(t.la(),$async$FA)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.U(D.aSw)
case 1:return A.h(u,v)}})
return A.i($async$FA,v)},
Q0(d,e){return this.cqU(0,e)},
cqU(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Q0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.ddD(t,e),s,null,!0,!0,x.y),$async$Q0)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a33(s.c,s.d,e.a),$async$Q0)
case 4:w=5
return A.b(t.la(),$async$Q0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Q0,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bEN(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.J(E.ke.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fH(0.7142857142857143,A.p(n,A.x(A.a([D.dCW,B.ae,D.emJ,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kF.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b9,B.i,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcHp(),n,n,n,n,n,n,!1,B.a3))}w=A.m(22)
v=A.J(E.ke.j(0.85),B.r,1.6)
s=A.aA(n,A.p(n,D.bYY,B.f,n,n,new A.o(B.w.j(0.3),n,A.J(E.ke.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ddF(d),n,n,n,n,n,n,!1,B.a3)
r=A.m(14)
q=B.w.j(0.3)
p=A.J(E.ke.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.bc,D.bGO,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fj4,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h5,n,n,n)],l),B.m,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c3U,B.n),n,n,n,Ax.Nt,D.byP,n,n,n)
if(o.e)k=D.aeb
else k=k.length===0?D.ba7:A.cu(new C.ddG(k))
return A.c6(n,D.Yn,new A.an(B.a_,n,B.b3,B.t,A.a([D.aOU,A.bn(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bEN(d){var w,v,u=this,t=null,s=u.b9f(d),r=d.c,q=x.p,p=A.a([A.bS(0,A.eO(B.A,new A.a4(300,420,new C.Z4(d.b,s,r,t),t),B.f,B.dz),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.aA(t,A.p(t,D.bYh,B.f,t,t,new A.o(B.w.j(0.55),t,A.J(B.aX,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ddx(u,d),t,t,t,t,t,t,!1,B.a3),t,t,t,6,6,t))
w=A.d(s,t,1,B.a1,t,t,t,D.fiF,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fH(0.7142857142857143,new A.an(B.a_,t,B.ab,B.t,p,t),t),B.Q,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kF.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ddy(u,d),t,t,t,t,t,t,!1,B.a3)}}
C.Kh.prototype={}
C.Z4.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dN(D.zr,new C.cLV(m),new C.cLW()),j=m.c,i=D.Dl.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mh:B.b9
v=new C.cLX(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.ejr,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b4(l,l,l,new C.bdl(j.x,h,l),B.aw),0,0,0),A.ap(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cN(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bh(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.alI,8,0.85,2.2),v.$4(D.bDJ,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.alI,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bDF,A.b4(l,l,l,new C.bdc(h,l),B.aw),l),0,0,0))
r=A.X(D.aAp[B.o.E(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a1,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.axC,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ae,p,B.ae,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a1,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bE9,A.x(o,B.m,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b4(l,l,l,new C.aHT(l),D.f8c),l,l,l,46,0,l))
return A.p(l,A.bx(D.acN,new A.an(B.a_,l,B.ab,B.t,t,l),B.ap),B.f,l,l,new A.o(l,l,l,D.acN,i,new A.a9(B.ay,B.aE,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bdl.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.e4()
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
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.ag()
l=f.ag()
k=f.ag()
$.S()
j=new A.ao(B.O,B.M,B.S,B.T,B.R)
j.r=t.j(0.25+f.ag()*0.5).gp(0)
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
j.push(new A.bt())
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.G()
k=h.gbu().a.snapshot()
o.drawPath((h.e=new A.cd(k)).a,r)
r.delete()}break
default:$.S()
w=A.I()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.ag()
m=f.ag()
l=f.ag()
r=w.G()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.S()
g=A.I()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.ag()
m=f.ag()
l=f.ag()
r=g.G()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
av(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bdc.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.S(),k=A.I(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.a9
k.c=2.4
k.d=B.by
for(w=e.a,v=e.b,v=[D.eZm,new A.cy([w,0,-1,1]),new A.cy([0,v,1,-1]),new A.cy([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
s=n.gbu().a.snapshot()
w.drawPath((n.e=new A.cd(s)).a,m)
m.delete()
s=new A.ao(B.O,B.M,B.S,B.T,B.R)
s.r=j.j(0.9).gp(0)
m=s.G()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
av(d){return!d.b.A(0,this.b)}}
C.uE.prototype={}
C.Zn.prototype={
R(){return new C.bdj()}}
C.bdj.prototype={
gof(){var w=this.d
return w===$?this.d=this.a.c:w},
gyC(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b4,B.aO),$.ax())}return v},
gaC6(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b4,B.aO),$.ax())}return v},
garP(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b4,B.aO),$.ax())}return v},
q(){var w=this,v=w.gyC(0),u=v.T$=$.ax()
v.P$=0
v=w.gaC6()
v.T$=u
v.P$=0
v=w.garP()
v.T$=u
v.P$=0
w.a1()},
ass(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.ju(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.d4u(this,f,u),e===u,s,s,s,s))}return A.bY(B.bG,r,B.br,s,6,8)},
ay9(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b5(4,A.m(14),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.mp,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gof(),a0=f.gyC(0),a1=a0.a.a,a2=f.gaC6(),a3=a2.a.a,a4=f.garP(),a5=d.bdS(a4.a.a,a3,a1)
a1=x.w
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a4(190,260,A.eO(B.A,new A.a4(270,370,new C.Z4(a5,d,f.a.e,e),e),B.f,B.dz),e),e,e,e)
a0=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a0,e,e,e,e,e,2,f.ay9("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4T(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a2,e,e,e,e,e,2,f.ay9("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4U(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zr[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aX
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bH(o,o,o,o),e,e,new A.a9(B.ay,B.aE,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aC
v.push(A.aA(e,A.x(A.a([p,B.cS,new A.y(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d4V(f,t),e,e,e,e,e,e,!1,B.a3))}v=A.bY(B.bG,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b7.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eG:B.L,2,B.r,-1)
q.push(A.aA(e,A.p(e,A.X(D.aAp[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bH(o,o,o,o),new A.bh(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d4W(f,n),e,e,e,e,e,e,!1,B.a3))}q=A.bY(B.bG,q,B.br,e,8,8)
a4=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a4,e,e,e,e,e,2,f.ay9("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4X(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vq,e,e,e)
m=A.a([],w)
for(l=D.Dl.gdW(D.Dl),l=l.gaf(l);l.C();){k=l.gS(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eG:B.aX
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bH(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aC
m.push(A.aA(e,A.x(A.a([j,B.bF,new A.y(i,e,new A.F(!0,h,e,e,e,e,10,B.U,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d4Y(f,k),e,e,e,e,e,e,!1,B.a3))}m=A.bY(B.bG,m,B.br,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vq,e,e,e)
k=f.gof()
return new A.D(new A.P(0,0,0,a3.f.d),A.bn(!0,new A.cT(new A.aZ(0,1/0,0,a1.a.b*0.92),A.cl(A.a([D.fO2,B.ae,d,B.aQ,a0,B.W,a2,B.aB,D.fUe,B.Q,v,B.aB,D.fOb,B.Q,q,B.aB,a4,B.aB,p,B.Q,m,B.aB,l,A.kR(e,9,""+B.k.V(f.gof().f),36,18,new C.d4Z(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vq,e,e,e),B.am,f.ass(D.a5v,f.gof().r,new C.d5_(f),D.dyz),B.ae,A.d("BORDER",e,e,e,e,e,e,M.vq,e,e,e),B.am,f.ass(D.a4S,f.gof().w,new C.d50(f),D.dyF),B.ae,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vq,e,e,e),B.am,f.ass(D.a4O,f.gof().x,new C.d52(f),D.dA9),B.am,A.iM(e,B.b7,e,B.af,e,new C.d53(f),e,e,e,D.fIg,f.gof().z),B.bx,A.bI(D.fML,e,new C.d54(f,a6),A.bo(B.b7,e,e,e,e,B.oK,e,e,new A.b8(A.m(16),B.a0),e,e,e))],w),e,e,A_.ale,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aHT.prototype={
a3(d,e){var w,v,u,t=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
t.D(new A.aY(0,0))
w=e.a
t.D(new A.aq(w,0))
v=e.b
t.D(new A.aq(w,v))
t.D(new A.aq(w/2,v-12))
t.D(new A.aq(0,v))
t.D(new A.bt())
u=A.I()
u.sam(D.c4A.aA(0,new A.a3(0,0,0+w,0+v)))
d.aH(t,u)},
av(d){return!1}}
C.biI.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.S()
w=A.I()
w.sam(D.c3A.aA(0,new A.a3(0,0,a3,a4)))
a5.aP(new A.a3(0,0,a3,a4),w)
v=B.k.dd(a2/112)
u=new A.e4()
u.cY(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ag()*20
l=56+u.ag()*40
k=D.d4v[u.ap(9)]
j=u.ap(14)
J.bl(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a3(n,j,n+m,j+l)
h=A.bs(i,B.hr)
g=new A.ao(B.O,B.M,B.S,B.T,B.R)
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
e=new A.ao(B.O,B.M,B.S,B.T,B.R)
e.r=E.ke.j(0.55).gp(0)
d=e.G()
w.drawRect(A.bG(new A.a3(h,j,g,j+2)),d)
d.delete()
j=new A.ao(B.O,B.M,B.S,B.T,B.R)
j.r=E.ke.j(0.4).gp(0)
d=j.G()
w.drawRect(A.bG(new A.a3(h,q,g,p)),d)
d.delete()
w.restore()
j=u.ap(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.sam(D.c2W.aA(0,new A.a3(0,r,a3,q)))
d=p.G()
w.drawRect(A.bG(new A.a3(0,r,a3,q)),d)
d.delete()
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.r=B.w.j(0.5).gp(0)
p.z=B.kQ
d=p.G()
w.drawRect(A.bG(new A.a3(0,q,a3,q+14)),d)
d.delete()}w=A.I()
w.r=D.bdR.j(0.72).gp(0)
a5.aP(new A.a3(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.I()
a4.sam(new A.c_(B.A,0.5,B.x,a0,0,A.a([D.blZ.j(0.22),B.L],t),a0,a0).aA(0,A.bX(new A.t(w,a2),a1)))
a5.ad(new A.t(w,a2),a1,a4)},
av(d){return!1}}
C.bbw.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cN(14,w*2,v*2.2,v*2,o,o,new A.l1(new A.o(A.ar(D.kF,D.bqX,w/4),o,new A.bH(B.a0,new A.ay(B.w.j(0.12),1,B.r,-1),B.a0,B.a0),B.Lr,o,o,B.n),B.bh,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aKv,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.ke.j(0.6),o,o,new A.bh(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qG,B.i,0,B.p),B.f,o,o,new A.o(o,o,o,D.b2j,u,D.c4y,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.ds,18)],v)
t=A.ap(o,A.b4(o,o,o,new C.aHT(o),D.f87),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aVG(p.y,r,L.iS,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),p.r,o,o,o,o,o,2,A.br(o,B.eF,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iS.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,D.fxi,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iS.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.W,A.E(A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),p.w,o,o,o,o,o,2,A.br(o,B.eF,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iS.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,D.fnX,!0,B.a4,B.Ai,B.an,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fxa,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iS.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.Q,A.B(A.a([A.E(A.p(o,o,B.f,D.FK.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fC,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.FK.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.FK.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.i,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.iS.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Yh(A.cS(A.a([A.cS(o,o,o,o,o,o,o,o,o,D.fr9,B.a.ar(k,0,1)),A.cS(o,o,o,o,o,o,o,o,o,o,B.a.b5(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.iS.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ch(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.i4,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.iS.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bx(B.Lr,new A.an(B.a_,o,B.ab,B.t,A.a([t,new A.D(D.bDb,A.x(s,B.ak,o,B.e,B.i,0,B.p),o),A.ap(0,A.c4(o,new A.o(o,o,o,o,o,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bh),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.o(o,o,o,B.Lr,v,D.c55,B.n),o,o,o,o,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,o,o))
return new A.an(B.a_,o,B.ab,B.t,l,o)}}
C.alb.prototype={
R(){return new C.alc(new A.eC(0,$.ax()),new C.bRZ(),new C.alu(),D.hsy,null,null)},
gd_(){return this.d}}
C.a14.prototype={
a6(){return"_Step."+this.b}}
C.alc.prototype={
gC5(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDh(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gh9(d){var w,v=this,u=v.e
if(u===$){w=C.Mv(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gTz(){var w=this.gh9(0)
return w.gyW()==null?"Babu":B.a.i(w.gyW().b)},
Z(){var w,v=this
v.a2()
w=v.gh9(0).gyW()
w=w==null?null:w.c
v.r.b=w===D.oi
w=v.pS(new C.bQk(v))
w.h7(0)
v.x!==$&&A.aQ()
v.x=w
v.a2b("Come closer, my children. I am "+v.gTz()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bui()},
a2b(d){var w=this,v=w.y
if(v!=null)v.a4(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dh(D.ajR,new C.bQe(w))},
bqJ(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a4(0)
v.m(new C.bQn(v))},
adu(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bqC(){return this.b8N()},
b8N(){var w=this,v=w.gC5()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bQf(w))
w.a2b(u)
v=w.z
if(v!=null)v.a4(0)
w.z=A.cG(B.m3,new C.bQg(w))},
cIx(){var w=this
w.m(new C.bQj(w))
w.a2b(w.gC5()[w.as].a)},
KJ(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.abX)return
w=p.gC5()
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
q.cY(v*7+d)
p.m(new C.bQi(p,d,u,q))
p.a2b(u?D.djV[q.ap(4)]+" "+w[p.as].d:D.dgB[q.ap(3)]+" "+w[p.as].d)},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gC5()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bFy(t.at,t.ay,p)
t.m(new C.bQl(t,s))
t.a2b(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Bu(t.a.d,s),$async$kF)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.Bv(r.d,r.c.a,"fire",t.at*10),$async$kF)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bQm())
w=1
break
case 4:++t.as
t.b8N()
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c6(v,D.Xx,new A.an(B.a_,v,B.ab,B.t,A.a([A.bS(0,new A.er(A.b4(v,v,v,new C.aVL(u,w.r,w.w,u),B.aw),v),0,0,0),A.bn(!0,A.x(A.a([w.c9O(0),B.b2,w.bPz()],t),B.m,v,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],t),v),v,!1,!1,v,v)},
c9O(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.Pi,s,s,s,new C.bQh(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gC5().length;++w){v=t.as
if(w<v||t.Q===D.aZU)v=B.cI
else v=w===v?B.c:B.aX
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bh(u,u,u,u),s,s,B.n),s,7,s,D.byy,s,s,s,22))}p=A.E(A.x(A.a([D.fF2,A.B(p,B.m,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.m(14)
u=A.J(B.fr,B.r,1)
return new A.D(D.bEm,A.B(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.k.V(t.cy*100)+"%",s,s,s,s,s,s,B.iu,s,s,s),B.f,s,s,new A.o(B.aS,s,u,v,s,s,B.n),s,s,s,s,B.h5,s,s,s)],q),B.m,s,B.e,B.i,0,s,s),s)},
bPz(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gh9(0).gyW()
if(h==null)w=1
else w=h.c===D.oi?0:1
v=j.dx
u=j.db
t=D.q5.j(0.96)
s=A.m(22)
r=A.J(B.cI,B.r,3)
q=A.b4(i,i,i,new C.bog(w,i),B.aw)
p=A.d(j.Q===D.abX?j.gTz()+" asks":"Elder "+j.gTz(),i,i,i,i,i,i,D.aTI,i,i,i)
o=j.db
o=B.a.ar(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c6,A.B(A.a([new A.a4(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bF,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aTX,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbqI(),i,i,i,i,i,i,!1,B.a3)
switch(j.Q.a){case 0:v=A.as(j.a9C("Sit down by the fire",j.gbqB()),i,i,i)
break
case 1:v=A.as(j.a9C("Ask me, Elder",j.gcIw()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gC5()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ay(D.lx,2.5,B.r,-1)
v.push(A.aA(i,A.p(i,new A.y(u[m],i,D.aTT,i,B.K,i,i,i,i,i,i,i),B.f,i,D.adp,new A.o(D.aiO,i,new A.bH(l,l,l,l),new A.bh(q,q,q,q),i,i,B.n),i,i,i,i,V.w5,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bQb(j,m),i,i,i,i,i,i,!1,B.a3))}v=A.bY(B.bG,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kn:Ak.aoG
u=A.X(u,v?B.ej:D.lx,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.ej:D.lx,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gC5().length?"Finish":"Next story"
v=A.B(A.a([u,B.ad,q,j.a9C(v,j.gq9(j))],n),B.m,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gC5().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aUb,i,i,i)],n)
u=j.cx
if(u>0){u=C.aPZ(u)
q=C.aPZ(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.aam,i,i,i))}v.push(B.Q)
v.push(j.a9C("Back to the games",new C.bQc(j)))
v=A.x(v,B.m,i,B.e,B.i,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.W,v],n),B.E,i,B.e,B.P,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aBV,i,B.n),i,i,i,B.BQ,B.bg,i,i,i)},
a9C(d,e){var w=null,v=A.m(16),u=A.J(B.cI,B.r,2)
return A.aA(w,A.p(w,A.d(d,w,w,w,w,w,w,A2.Kg,w,w,w),B.f,w,w,new A.o(D.lx,w,u,v,w,w,B.n),w,w,w,w,D.bC4,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a3)}}
C.bog.prototype={
a3(d,e){Y.fRo(d,e.ej(B.I),e.gdD()*0.45,this.b,0,0.4)},
av(d){return d.b!==this.b}}
C.aAS.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.bRZ.prototype={}
C.t3.prototype={}
C.boh.prototype={}
C.alu.prototype={
Mh(d){var w,v=this
if(v.a==null||!J.A(v.b,d)){w=v.a
if(w!=null)w.q()
v.a=C.i6b(d)
v.b=d}w=v.a
w.toString
return w},
q(){var w=this.a
return w==null?null:w.q()}}
C.aVL.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.b.a,k=n.c,j=d.a,i=n.d.Mh(e).b
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
n.cyc(d,l)
n.bOa(d,l)
n.cGl(d,l,k)
u=0.8+0.2*Math.sin(l*8)*Math.sin(l*3.7)+k.w*0.4
J.bl(j.save())
j.translate(225,580)
d.p9(0,1,0.42)
t=240*(0.6+0.5*k.w)
$.S()
s=A.I()
r=x.O
q=x.n
s.sam(A.tt(B.I,t,A.a([D.bpN.j(0.55*u),F.MM.j(0.2*u),B.L],r),A.a([0,0.5,1],q),B.x,m,m,0))
d.ad(B.I,t,s)
j.restore()
p=A.a([new A.z(528,new C.bRR(n,d,l,k)),new A.z(540,new C.bRS(n,d,l,k)),new A.z(546,new C.bRT(n,d,l,k)),new A.z(574,new C.bRU(n,d,l,k)),new A.z(612,new C.bRV(n,d,l,k)),new A.z(650,new C.bRW(n,d,l,k)),new A.z(656,new C.bRX(n,d,l,k))],x.E)
B.d.aZ(p,new C.bRY())
for(o=0;o<7;++o)p[o].b.$0()
n.bF5(d,l,k)
n.bRI(d,l)
j.restore()
$.S()
j=A.I()
j.sam(A.tt(new A.t(i/2,w*0.6),e.ganw()*0.75,A.a([B.L,D.bdL],r),A.a([0.55,1],q),B.x,m,m,0))
d.aP(new A.a3(0,0,0+i,0+w),j)},
av(d){return d.c!==this.c||d.d!==this.d},
cyc(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e4()
g.cY(3)
for(w=d.a,v=0;v<36;++v){u=g.ag()
t=g.ag()
s=Math.sin(e*(1.5+g.ag()*2)+v)
r=g.ag()
s=B.c.j(0.25+0.7*(0.5+0.5*s))
$.S()
q=new A.ao(B.O,B.M,B.S,B.T,B.R)
q.r=s.gp(0)
p=q.G()
w.drawCircle(u*450,20+t*300,0.8+r*1.1,p)
p.delete()}o=B.k.F(e,17)/1.2
if(o<1){n=new A.t(60+o*220,70+o*90)
d.bo(n,n.aE(0,D.eiZ),C.iw(B.c.j((1-o)*0.9),1.6))}for(u=e*0.035,t=e*9,s=x.v,m=0;m<3;++m){l=B.k.F(u+m*0.05,1)
r=-20+l*500
q=120+Math.sin(l*9+m)*14+m*12
k=Math.sin(t+m*2)
j=$.S()
i=A.a([],s)
j=new A.aF(j.r,B.ag,null,null,i)
k=q+k*4
i.push(new A.aY(r-6,k))
h=q-3
i.push(new A.c5(r-2,h,r,q))
i.push(new A.c5(r+2,h,r+6,k))
r=new A.ao(B.O,B.M,B.S,B.T,B.R)
r.b=B.a9
r.c=1.6
r.r=D.bgt.gp(0)
r.d=B.by
r.e=B.dQ
p=r.G()
r=j.gbu().a.snapshot()
w.drawPath((j.e=new A.cd(r)).a,p)
p.delete()}},
bOa(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=0.75+0.25*Math.sin(a0*9)*Math.sin(a0*5.3)
for(w=a0*0.12,v=d.a,u=0.78*e,t=0.7*e,s=0;s<3;++s){r=D.ayV[s]
q=r.a
p=r.c
o=q+p*0.1
n=r.b
m=r.d
l=n-m*0.38
k=A.bK(new A.t(o,l),m*0.74,p*0.5)
j=Ac.FU.j(u)
$.S()
i=new A.ao(B.O,B.M,B.S,B.T,B.R)
i.r=j.gp(0)
h=i.G()
v.drawOval(A.bG(k),h)
h.delete()
p=A.bK(new A.t(o+0,l+m*0.1),m*0.4,p*0.28)
l=new A.ao(B.O,B.M,B.S,B.T,B.R)
l.r=Q.xM.j(t).gp(0)
h=l.G()
v.drawOval(A.bG(p),h)
h.delete()
for(p=q*0.01,m=n-m-r.e*0.9,g=0;g<5;++g){f=B.k.F(w+g/5+p,1)
o=Math.sin(f*6+g)
n=new A.ao(B.O,B.M,B.S,B.T,B.R)
n.r=D.age.j(0.16*(1-f)).gp(0)
h=n.G()
v.drawCircle(q+o*6+f*18,m-f*70,4+f*12,h)
h.delete()}}},
cGl(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
C.bCF(d,D.eiV,0.9,a0,D.hon,!1,!1,D.abV,1,!1)
w=$.S().r
v=x.v
u=new A.aF(w,B.ag,e,e,A.a([],v))
u.D(new A.aY(52,470))
u.D(new A.aq(50,486))
u.D(new A.aq(66,486))
u.D(new A.aq(64,470))
u.D(new A.bt())
t=A.I()
t.r=D.ai6.gp(0)
d.aH(u,t)
C.bCF(d,D.eiX,0.95,a0,D.hoi,!1,!1,D.abW,1,!0)
t=new A.aF(w,B.ag,e,e,A.a([],v))
t.D(new A.aY(417,510))
t.D(new A.c5(431,532,445,510))
t.D(new A.aq(441,548))
t.D(new A.c5(431,553,421,548))
t.D(new A.bt())
u=A.I()
u.r=F.Fr.gp(0)
d.aH(t,u)
u=A.bK(D.eiW,8,28)
t=A.I()
t.r=D.bs0.gp(0)
d.dQ(u,t)
C.bCF(d,new A.t(-30+B.k.F(a0/26,1)*510,492),0.82,a0,D.hoo,!0,!1,D.Wt,1,!1)
t=B.k.F(a0/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.dQ(A.bK(new A.t(s+q*16,r-6),16,11),C.iw(D.ahY,1.8))
u=q<0
C.bCF(d,new A.t(s-q*6,r),0.62,a0,D.hoq,!1,u,D.Wt,2.2,!1)
C.bCF(d,new A.t(s-q*32,r+4),0.58,a0+1,D.hom,!1,u,D.Wt,2.2,!1)
this.bUo(d,D.eiA,a0)
for(u=d.a,t=a0*0.5,p=a0*4,o=0;o<3;++o){n=88+o*17+Math.sin(t+o)*6
m=520+B.o.F(o,2)*6
l=Math.max(0,Math.sin(p+o*2))*4
k=A.bK(new A.t(n,m),8,11)
j=o===1
i=j?D.ahT:D.aiu
h=new A.ao(B.O,B.M,B.S,B.T,B.R)
h.r=i.gp(0)
g=h.G()
u.drawOval(A.bG(k),g)
g.delete()
k=j?D.ahT:D.aiu
j=new A.ao(B.O,B.M,B.S,B.T,B.R)
j.r=k.gp(0)
g=j.G()
u.drawCircle(n+5,m+(-3+l),2.6,g)
g.delete()
j=new A.ao(B.O,B.M,B.S,B.T,B.R)
j.b=B.a9
j.c=1
j.r=B.aA.gp(0)
j.d=B.by
j.e=B.dQ
g=j.G()
u.drawLine.apply(u,[n+7.5,m+(-2+l),n+10,m+(-1.5+l),g])
g.delete()
n+=-1
j=new A.ao(B.O,B.M,B.S,B.T,B.R)
j.b=B.a9
j.c=1
j.r=B.aA.gp(0)
j.d=B.by
j.e=B.dQ
g=j.G()
u.drawLine.apply(u,[n,m+4,n,m+8,g])
g.delete()}f=a0<a1.f
u=A.bK(D.a7t,15+Math.sin(a0*2)*0.8,40)
t=A.I()
t.r=D.agB.gp(0)
d.dQ(u,t)
u=A.bK(D.a7t.a7(0,new A.t(-14,f?-9:-2)),12,15)
t=A.I()
t.r=D.biw.gp(0)
d.dQ(u,t)
t=new A.aF(w,B.ag,e,e,A.a([],v))
t.D(new A.aY(130,592-(f?16:6)))
t.D(new A.aq(134,592-(f?22:9)))
t.D(new A.aq(138,592-(f?16:6)))
t.D(new A.bt())
u=A.I()
u.r=D.biG.gp(0)
d.aH(t,u)
u=D.a7t.a7(0,new A.t(-17,f?-9:-2))
t=A.I()
t.r=B.i2.gp(0)
d.ad(u,1.1,t)
v=new A.aF(w,B.ag,e,e,A.a([],v))
v.D(new A.aY(168,590))
w=Math.sin(a0*8)
v.D(new A.c5(180,588+w*(f?6:0),178,595))
d.aH(v,C.iw(D.agB,3.5))},
bUo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=Math.max(0,Math.sin(f*0.6))*9,j=e.a7(0,new A.t(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=j.a,u=j.b,t=u+3,s=f*2,r=u+16,q=d.a,p=0;p<4;++p){o=w[p]
n=Math.sin(s+o)
$.S()
m=new A.ao(B.O,B.M,B.S,B.T,B.R)
m.b=B.a9
m.c=2
m.r=D.XI.gp(0)
m.d=B.by
m.e=B.dQ
l=m.G()
q.drawLine.apply(q,[v+o,t,v+(o+n*1.5),r,l])
l.delete()}w=A.bK(j,17,32)
s=$.S()
r=A.I()
r.r=D.Fp.gp(0)
d.dQ(w,r)
r=A.bK(j.a7(0,D.ei0),7,26)
w=A.ar(D.Fp,B.w,0.12)
w.toString
q=A.I()
q.r=w.gp(0)
d.dQ(r,q)
s=new A.aF(s.r,B.ag,null,null,A.a([],x.v))
s.D(new A.aY(v+13,u-3))
s.D(new A.aq(v+22,u-8+k))
s.D(new A.aq(v+20,u+k-0.5))
s.D(new A.aq(v+12,t))
s.D(new A.bt())
t=A.I()
t.r=D.Fp.gp(0)
d.aH(s,t)
t=A.bK(j.a7(0,new A.t(24,-7+k)),9,12)
s=A.I()
s.r=D.Fp.gp(0)
d.dQ(t,s)
s=-11+k
d.bo(j.a7(0,new A.t(22,s)),j.a7(0,new A.t(21,-17+k)),C.iw(D.XI,1.6))
d.bo(j.a7(0,new A.t(26,s)),j.a7(0,new A.t(28,-16+k)),C.iw(D.XI,1.6))
s=j.a7(0,new A.t(26,-8+k))
t=A.I()
t.r=B.w.gp(0)
d.ad(s,0.9,t)
d.bo(j.a7(0,new A.t(26,-3+k)),j.a7(0,new A.t(26,1+k)),C.iw(D.bll,1.4))
d.bo(j.a7(0,D.ekY),j.a7(0,new A.t(-19,-7+Math.sin(f*7)*2)),C.iw(D.Fp,2.4))},
bRG(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=a5.a,v=0;v<14;++v){u=v*3.141592653589793*2/14
t=Math.cos(u)
s=Math.sin(u)
if(Math.sin(u)<0){t=A.bK(new A.t(225+t*36,574+(s*13+6)),8,11)
$.S()
s=new A.ao(B.O,B.M,B.S,B.T,B.R)
s.r=D.bqJ.gp(0)
r=s.G()
w.drawOval(A.bG(t),r)
r.delete()}}t=A.bK(D.a7v.a7(0,B.cy),17,52)
$.S()
s=A.I()
s.r=D.bdl.gp(0)
a5.dQ(t,s)
s=A.bK(D.a7v.a7(0,B.cy),12,44)
t=D.bgR.j(0.6+0.3*Math.sin(a6*6))
q=A.I()
q.r=t.gp(0)
a5.dQ(s,q)
for(p=0;p<3;++p){u=D.dg4[p]
t=225+Math.cos(u)*3
s=Math.cos(u)
q=Math.sin(u)
o=Math.cos(u)
n=Math.sin(u)
m=new A.ao(B.O,B.M,B.S,B.T,B.R)
m.b=B.a9
m.c=7
m.r=D.FD.gp(0)
m.d=B.by
m.e=B.dQ
r=m.G()
w.drawLine.apply(w,[t+s*24,579+q*4,t-o*24,579-n*4,r])
r.delete()
n=Math.cos(u)
o=Math.sin(u)
q=Math.cos(u)
s=Math.sin(u)
m=D.B9.j(0.6)
l=new A.ao(B.O,B.M,B.S,B.T,B.R)
l.b=B.a9
l.c=2
l.r=m.gp(0)
l.d=B.by
l.e=B.dQ
r=l.G()
w.drawLine.apply(w,[t+n*24,579+(o*4-2),t-q*24,579-(s*4+2),r])
r.delete()}k=46+80*a7.w
j=[D.eVQ,D.eWm,D.eXn,D.eXF,D.eXl]
for(t=a6*8,s=a6*15,q=a6*3.3,o=x.v,i=0;i<3;++i){h=[1,0.72,0.42][i]
g=[D.boa,D.bkI,D.bqb][i]
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
e.push(new A.kN(a1-a2*1.1,578-d*0.45,l-a2*0.2,578-d*0.7,a1+a0,578-d))
e.push(new A.kN(l+a2*0.3,578-d*0.65,a1+a2*1.15,578-d*0.4,a1+a2,578))
e.push(new A.bt())
l=new A.ao(B.O,B.M,B.S,B.T,B.R)
l.r=g.j(n?0.9:0.95).gp(0)
r=l.G()
l=a3.gbu().a.snapshot()
w.drawPath((a3.e=new A.cd(l)).a,r)
r.delete()}}for(t=a6*1.5,v=0;v<22;++v){a4=B.k.F(a6*(0.35+B.o.F(v,5)*0.06)+v/22,1)
s=Math.sin(v*1.9+t)
q=a7.w
o=B.o.F(v,3)
n=G.ais.j((1-a4)*0.9)
$.S()
m=new A.ao(B.O,B.M,B.S,B.T,B.R)
m.r=n.gp(0)
r=m.G()
w.drawCircle(225+s*(10+a4*26),564-a4*(110+80*q),1.2+o*0.6,r)
r.delete()}for(t=a6*0.1,s=574-k,v=0;v<6;++v){a4=B.k.F(t+v/6,1)
q=Math.sin(a4*5+v)
o=D.age.j(0.1*(1-a4))
$.S()
n=new A.ao(B.O,B.M,B.S,B.T,B.R)
n.r=o.gp(0)
r=n.G()
w.drawCircle(225+q*16+a4*12,s-a4*120,7+a4*20,r)
r.delete()}},
bRI(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=d.a,r=0;r<16;++r){q=B.k.F(r*83+Math.sin(w+r)*40+v,450)
p=420+B.o.F(r*37,300)+Math.sin(u+r*2)*26
o=Math.max(0,Math.sin(t+r*1.7))
n=D.bs8.j(0.18*o)
$.S()
m=new A.ao(B.O,B.M,B.S,B.T,B.R)
m.r=n.gp(0)
l=m.G()
s.drawCircle(q,p,5,l)
l.delete()
m=new A.ao(B.O,B.M,B.S,B.T,B.R)
m.r=D.bm3.j(0.9*o).gp(0)
l=m.G()
s.drawCircle(q,p,1.4,l)
l.delete()}},
c3n(d,e){switch(d){case 0:return e.b?D.hoj:D.aZs
case 1:return e.b?D.hop:D.aZq
case 2:return D.aZp
case 3:return D.aZo
case 4:return D.aZr
default:return D.aZt}},
aCk(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
QR(d,e,f,g){var w,v=this,u=D.a5_[e],t=v.c3n(e,g),s=new C.boh(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a5_[e],l=e===0
m=B.k.E(((l?D.aKo:D.aKt).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a7z
s.as=D.DO
if(l){s.a=o?v.aCk(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.t(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.t(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.DO
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.ei8
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.ejv
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
s.Q=D.elT
s.as=D.aKG}if(e===2&&g.x!=null&&f<g.y){s.a=v.aCk(f,5)
s.b=0.4
s.as=new A.t(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aCk(f,e*3)
s.b=0.5
s.c=0.4}}C.hui(d,u.a,u.b*1.2,t,s,f,e,null)},
bF5(d,e,f){var w=new C.bRQ(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gdc(d){return this.c}}
C.aff.prototype={
a6(){return"_Stand."+this.b}}
C.add.prototype={}
C.ln.prototype={}
C.bQA.prototype={
bzM(d){var w,v,u,t,s=A.U(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
FQ(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bQB())
return r},
aqz(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aLU(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.L)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
alY(d){var w,v,u=A.aX(x.N),t=d,s=0
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
gyW(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aZ(w,new C.bQC(this))
return B.d.gI(w)}}
C.att.prototype={}
C.zg.prototype={}
C.ak9.prototype={
gaEE(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Z(w,new C.bLA(),A.T(w).k("Z<1>")).gL(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ah(){var w=this
return A.H(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Mf.prototype={
gaoH(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
if(t.gaEE(0))s.push(t)}return s},
ah(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.L)(w),++s){r=w[s]
p.push(A.H(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.H(["id",this.a,"title",q,"qs",p],u,t)},
cZv(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaoH(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.L)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.ln(B.a.i(s.a),p,B.d.cp(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.b9N.prototype={}
C.a9l.prototype={}
C.bh0.prototype={}
C.afd.prototype={}
C.ajo.prototype={
R(){return new C.ajp(B.bC,A.a([],x.cC),A.a([],x.e4),null,null)},
gd_(){return this.d}}
C.ajp.prototype={
gMA(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDh(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gb98(){var w,v=this,u=v.e
if(u===$){w=v.pS(v.gc9Q())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Z(){this.a2()
this.gb98().h7(0)},
q(){this.gb98().q()
this.bud()},
h7(d){this.m(new C.bJN(this))},
c9R(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fw(0,v)
if(w.c!=null)w.m(new C.bJI())},
b7u(){var w,v,u,t=this,s=t.r
B.d.aa(s)
w=t.gMA()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bh0(u,(u+0.5)/v,w[t.x].b[u]))},
fw(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bs(w,new C.bJO())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c6c()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.L)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMA()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.k.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.as0(v,0.8,B.cI)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.as0(m.cy,0.8,G.na)
m.aYd("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.as0(q,0.88,D.lx)
p=m.gMA()[m.x]
n=p.c
if(u===n){m.aYd("The right gourd fell! It was "+p.b[n]+".")
return}}}},
as0(d,e,f){var w,v,u,t=new A.e4()
t.cY(B.k.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ag()*3.141592653589793*2
w.push(new C.afd(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aYd(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Q1()}},
c6c(){var w=this
if(w.x+1>=w.gMA().length){w.Q1()
return}++w.x
w.b7u()},
Q1(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Q1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMA().length
r=C.bFy(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bJG())
w=2
return A.b(C.Bu(u.a.d,r),$async$Q1)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.Bv(t.d,t.c.a,"catch",u.z),$async$Q1)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bJH())
return A.h(null,v)}})
return A.i($async$Q1,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.c9P()
else w=v.ch?v.c9S():A.as(new A.D(B.eu,A.x(A.a([D.aV6,B.Q,D.fGG,B.W,D.fMQ,B.dT,C.ul("Play",v.geX(v),B.cI,B.hn,D.fq)],x.p),B.m,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.tr("Calabash Catch",w,B.f0,u)},
c9S(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hB:B.Ha
p.push(A.X(u,v?B.ax:B.bU,r,r,r,22))}p.push(B.b2)
v=s.x
u=s.gMA()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aTG,r,r,r))
p.push(B.bc)
v=A.m(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.iu,r,r,r),B.f,r,r,new A.o(B.bz,r,r,v,r,r,B.n),r,r,r,r,B.Go,r,r,r))
p=A.B(p,B.m,r,B.e,B.i,0,r,r)
v=A.m(18)
t=A.J(B.cI,B.r,3)
return A.x(A.a([new A.D(D.bzS,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fr1,B.K,r,r),B.f,r,r,new A.o(D.q5,r,t,v,r,r,B.n),r,r,r,B.eY,B.bg,r,r,1/0),B.am,A.E(A.cu(new C.bJM(s)),1)],q),B.m,r,B.e,B.i,0,B.p)},
c9P(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pH,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gMA().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.UU,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cl(A.a([D.baQ,u,t,B.aQ,new C.I_(s,r,w.cx,v),B.aQ,A.as(C.ul("Back to the games",new C.bJF(w),B.cI,B.km,D.fq),v,v,v)],x.p),v,v,B.aa,v,v,B.ah,!1)}}
C.bc9.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a6.a,a1=a6.b,a2=0+a0,a3=$.S(),a4=A.I()
a4.sam(A.jx(B.I,new A.t(0,a1),D.cZx,G.azc,B.x,d))
a5.aP(new A.a3(0,0,a2,0+a1),a4)
a4=A.I()
a4.r=G.MQ.gp(0)
a5.ad(new A.t(a0*0.82,a1*0.16),22,a4)
a4=x.v
w=A.a([],a4)
v=new A.aF(a3.r,B.ag,d,d,w)
a3=a1*0.7
v.D(new A.aY(0,a3))
for(u=0;u<=a0;u+=6){t=new A.aq(u,a3+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.bx(s)
t=v.e
if(t!=null)t.a.delete()
v.e=null}v.D(new A.aq(a0,a1))
v.D(new A.aq(0,a1))
a3=$.S()
w=A.I()
w.r=D.bhL.gp(0)
a5.aH(v,w)
r=a0*0.12
a3=new A.aF(a3.r,B.ag,d,d,A.a([],a4))
w=a1*0.86
a3.D(new A.aY(r-26,w))
t=a1*0.5
s=a1*0.34
a3.D(new A.c5(r-14,t,r-10,s))
a3.D(new A.aq(r+10,s))
a3.D(new A.c5(r+14,t,r+26,w))
a3.D(new A.bt())
w=A.I()
w.r=D.afj.gp(0)
a5.aH(a3,w)
for(a3=a1*0.36,w=a1*0.24,t=a5.a,s=a1*0.22,q=0;q<4;++q){p=D.ckq[q]
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=D.afj.gp(0)
o.c=7
o.d=B.by
n=o.G()
t.drawLine.apply(t,[r,a3,r+p*46,w,n])
n.delete()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=D.aeD.gp(0)
n=o.G()
t.drawCircle(r+p*50,s,18,n)
n.delete()}a3=a1*0.88
w=A.I()
w.r=D.biE.gp(0)
a5.aP(new A.a3(0,a3,a2,a3+a1*0.12),w)
for(a2=a1*0.9,a3=a2-8,m=0;m<18;++m){w=a0*m/17
s=new A.ao(B.O,B.M,B.S,B.T,B.R)
s.r=D.agS.gp(0)
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
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=D.lx.j(0.6).gp(0)
n=k.G()
t.drawOval(A.bG(o),n)
n.delete()
continue}o=Math.sin(a2.dx*2+o)
J.bl(t.save())
t.translate(u,k*a1)
t.rotate(o*0.1*180/3.141592653589793,0,0)
$.S()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=D.afZ.gp(0)
n=o.G()
t.drawCircle(0,-34,14,n)
n.delete()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=D.bne.gp(0)
o.c=4
o.d=B.by
n=o.G()
t.drawLine.apply(t,[0,-46,2,-56,n])
n.delete()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.sam(A.tt(D.ekG,46,D.d6V,B.D5,B.x,d,d,0))
n=o.G()
t.drawCircle(0,0,34,n)
n.delete()
o=A.bK(D.ekM,8,12)
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.35).gp(0)
n=k.G()
t.drawOval(A.bG(o),n)
n.delete()
j=new A.iN(new A.eu(l.c,d,d,B.cN,d,d,d,d,d,d,D.foT),B.K,B.bY,new A.jr(1),d,d,3,d,B.bW,d)
j.o0(62)
o=j.b
k=Math.max(40,o.c+10)
o=o.a.c
i=A.bs(A.bK(B.cH,o.gbb(o)+8,k),B.fE)
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=D.q5.gp(0)
n=k.G()
t.drawRRect(A.e6(i),n)
n.delete()
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=D.lx.gp(0)
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
Y.AX(a5,new A.t(h,a1*0.93),a1*0.3,a3,!0,Math.abs(a2.db-a2.cy)*40*Math.abs(Math.sin(a2.dx*18)),2,B.dH,F.mF,!1,(w+1)/2)
g=A.bK(new A.t(h,a1*0.8),a1*0.07,a0*0.24)
a4=new A.aF($.S().r,B.ag,d,d,A.a([],a4))
w=g.a
a3=g.b
a4.D(new A.aY(w,a3))
s=g.c
a4.D(new A.aq(s,a3))
o=g.d
a4.D(new A.aq(s-8,o))
a4.D(new A.c5(g.gbL().a,o+8,w+8,o))
a4.D(new A.bt())
k=A.I()
k.r=D.Yt.gp(0)
a5.aH(a4,k)
for(a4=s-w,m=1;m<6;++m){s=w+a4*m/6
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=D.B9.gp(0)
k.c=1.4
n=k.G()
t.drawLine.apply(t,[s,a3,s+(m-3)*2,o,n])
n.delete()}s=a3+(o-a3)*0.35
o=A.I()
o.r=G.na.gp(0)
a5.aP(new A.a3(w,s,w+a4,s+5),o)
w-=2
a3-=4
o=A.I()
o.r=D.bhQ.gp(0)
a5.dQ(new A.a3(w,a3,w+(a4+4),a3+8),o)
for(a3=a2.w,a4=a3.length,q=0;q<a3.length;a3.length===a4||(0,A.L)(a3),++q){f=a3[q]
w=f.a
s=f.b
o=f.f
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=f.e.j(B.k.E(o,0,1)).gp(0)
n=k.G()
t.drawCircle(w*a0,s*a1,3*o+1,n)
n.delete()}e=a2.dx-a2.go
if(e>=0&&e<1.2){a3=a2.fy
j=A.fx(d,d,d,d,A.cS(d,d,d,d,d,d,d,d,d,A.l(d,d,B.cI.j(1-e/1.2),d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,K.D_,d,d),"+"+a3),B.a4,B.bY,d,B.dA,B.bW)
j.el()
j.a3(a5,new A.t(a2.id*a0-j.b.c/2,a1*0.72-e*60))}},
av(d){return!0}}
C.Q8.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aAQ(w.c,w.f,v),B.aw),s=A.m(10),r=A.J(B.bE,B.r,1.4)
return new A.a4(u+22,v,A.x(A.a([new A.a4(u,u,t,v),B.cS,A.p(v,A.d(w.d,v,1,B.a1,v,v,v,D.fhy,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.mL,v,v,v)],x.p),B.m,v,B.e,B.P,0,B.p),v)},
gY(d){return this.e}}
C.aAQ.prototype={
a3(d,e){var w=e.ej(B.I),v=e.gdD(),u=this.c?0.8:0
return Y.fRo(d,w,v*0.44,this.b,0,u)},
av(d){return d.b!==this.b||d.c!==this.c}}
C.azg.prototype={}
C.au4.prototype={
R(){return new C.au5(A.U(x.S,x.cq),null,null)},
gd_(){return this.d}}
C.au5.prototype={
gkL(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hzk(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaEr(){var w=this.z
return w===$?this.z=this.X2(0):w},
giX(){var w,v=this.Q
if(v===$){w=this.gkL()
w=w.length===0?0:w[0].c.length
v=this.Q=A.bZ(w,-1,!1,x.S)}return v},
X2(d){var w,v,u,t,s=this.gkL()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.azg(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.azg(v[t],u[t],-1))
v=new A.e4()
v.cY(this.a.e*31+d)
B.d.e_(s,v)
return s},
q(){var w,v,u
for(w=this.as,w=new A.du(w,w.r,w.e);w.C();){v=w.d
v.r.q()
v.r=null
u=v.eJ$
u.b=!1
B.d.aa(u.a)
u=u.gon()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dT$.a.aa(0)
v.qp()}this.buG()},
cOy(d,e){var w,v,u,t,s,r=this
if(d>=r.giX().length||r.giX()[d]!==-1||B.d.t(r.giX(),e))return
w=r.gaEr()[e]
v=r.gkL()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cnC(r,e,w,v))
A.cG(B.lD,new C.cnD(r))
return}++r.r
u=A.bm(null,B.hy,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.q()
t.n(0,d,u)
r.m(new C.cnE(r,d,e,w,v))
u.cq(0)},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkL()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cI(n,0,new C.cnF())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cnG(t,r))
w=5
return A.b(C.Bu(t.a.d,r),$async$kF)
case 5:t.x=f
o=t.a
w=6
return A.b(C.Bv(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kF)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cnH())
w=1
break
case 4:for(o=t.as,n=new A.du(o,o.r,o.e);n.C();){q=n.d
q.r.q()
q.r=null
p=q.eJ$
p.b=!1
B.d.aa(p.a)
p=p.gon()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dT$.a.aa(0)
q.qp()}o.aa(0)
t.m(new C.cnI(t))
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pH,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.UU,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tr(q,A.cl(A.a([D.ae9,w,v,B.aQ,new C.I_(u,t,r.ch,p),B.aQ,A.as(C.ul("Back to the games",new C.cny(d),B.cI,B.km,D.fq),p,p,p)],x.p),p,p,B.aa,p,p,B.ah,!1),B.f0,p)}w=r.gkL()
v=r.e
s=w[v]
return new C.tr(q,new A.D(B.ue,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aTB,B.K,p,p),A.E(A.cu(new C.cnz(r,s)),1)],x.p),B.m,p,B.e,B.i,0,B.p),p),B.f0,p)}}
C.bbF.prototype={
a3(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=y.B,b3=b0.d,b4=new A.Z(b3,new C.cMZ(),A.T(b3).k("Z<1>")).gL(0),b5=b0.b,b6=b5.a7(0,B.Jd)
$.S()
w=A.I()
w.r=D.ly.j(0.18+0.1*b4).gp(0)
b7.ad(b6,70+b4*10,w)
w=b8.a
b6=b8.b
v=b5.a7(0,D.ehf)
u=A.I()
u.r=B.ob.j(0.5).gp(0)
u.c=10
u.d=B.by
b7.bo(new A.t(w/2,b6*0.98),v,u)
for(v=b0.c,u=b5.a,b5=b5.b,t=b5+90,s=x.v,b5+=46,r=x.dc,q=x.U,p=b7.a,o=0;o<v.length;++o){n=v[o]
m=n.a+0
l=B.dU.aw(0,B.k.E(b3[o],0,1))
k=$.S().r
j=A.a([],s)
i=new A.aF(k,B.ag,b1,b1,j)
j.push(new A.aY(u,b5))
j.push(new A.c5((u+m)/2,t,m,n.b+-46))
if(l<1)for(n=new A.aF(k,B.ag,b1,b1,A.bp(j,!0,r)),m=A.a([],q),h=new A.rm(n,!1,m);h.C();){g=h.c
if(g===0||h.f)A.b9(A.jD(b2));--g
f=new A.Bs(h,g)
e=0
for(;;){h.ie()
d=m[g].b
d===$&&A.c()
if(!(e<d.a.length()))break
h.ie()
d=m[g].b
d===$&&A.c()
d=Math.min(d.a.length(),e+7)
d=new A.aF(k,n.b,b1,new A.cy([f,e,d,!0]),A.a([],s))
$.S()
a0=new A.ao(B.O,B.M,B.S,B.T,B.R)
a0.r=B.aX.gp(0)
a0.b=B.a9
a0.c=3
a1=a0.G()
a0=d.gbu().a.snapshot()
p.drawPath((d.e=new A.cd(a0)).a,a1)
a1.delete()
e+=14}}if(l>0)for(n=new A.aF(k,i.b,i.c,b1,A.bp(j,!0,r)),m=A.a([],q),j=new A.rm(n,!1,m),h=l>0.4,g=9-3*l,d=11*l,a0=6*l;j.C();){a2=j.c
if(a2===0||j.f)A.b9(A.jD(b2));--a2
j.ie()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
a3=new A.aF(k,n.b,b1,new A.cy([new A.Bs(j,a2),0,a3*l,!0]),A.a([],s))
$.S()
a4=new A.ao(B.O,B.M,B.S,B.T,B.R)
a4.r=D.FR.gp(0)
a4.b=B.a9
a4.c=g
a4.d=B.by
a1=a4.G()
a4=a3.gbu().a.snapshot()
p.drawPath((a3.e=new A.cd(a4)).a,a1)
a1.delete()
j.ie()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
j.ie()
a5=m[a2].Hc(a3*l)
if(h)for(a2=a5.a,a3=a2.a,a2=a2.b,a6=0;a6<4;++a6){a7=a6*1.6+o
a4=A.bK(new A.t(a3+Math.cos(a7)*14,a2+Math.sin(a7)*10),a0,d)
a8=new A.ao(B.O,B.M,B.S,B.T,B.R)
a8.r=B.be.gp(0)
a1=a8.G()
p.drawOval(A.bG(a4),a1)
a1.delete()}}}if(b0.e)for(b3=b6*0.3,o=0;o<6;++o){a9=new A.iN(D.fh1,B.a4,B.bY,new A.jr(1),b1,b1,b1,b1,B.bW,b1)
a9.el()
a9.a3(b7,new A.t(w*(0.15+o*0.14),b3-B.o.F(o,3)*14))}},
av(d){return!0}}
C.ay0.prototype={
R(){return new C.ay1(A.aX(x.S))},
gd_(){return this.d}}
C.ay1.prototype={
gkL(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hAe(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Z(){this.a2()
this.b7D()},
q(){var w=this.ch
if(w!=null)w.a4(0)
this.a1()},
b7D(){var w=this.ch
if(w!=null)w.a4(0)
this.ch=A.dh(B.rz,new C.cCw(this))},
boo(d){var w,v=this
if(v.as||v.z.t(0,d))return
w=v.gkL()[v.e]
if(w.e[d]===w.b)v.m(new C.cCE(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cCF(v,d))
A.cG(B.iW,new C.cCG(v))}},
cU1(){var w=this
if(!w.as&&w.f<w.gkL()[w.e].d.length)w.m(new C.cCH(w))},
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
t.m(new C.cCI(t,s))
w=5
return A.b(C.Bu(t.a.d,s),$async$kF)
case 5:t.y=f
q=t.a
w=6
return A.b(C.Bv(q.d,q.c.a,"who",t.r),$async$kF)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cCJ())
w=1
break
case 4:t.m(new C.cCK(t))
t.b7D()
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkL().length+" guessed",a2,a2,a2,a2,a2,a2,B.pH,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.UU,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tr(a1,A.cl(A.a([D.bb1,w,v,B.aQ,new C.I_(u,t,a0.ax,a2),B.aQ,A.as(C.ul("Back to the games",new C.cCy(a3),B.cI,B.km,D.fq),a2,a2,a2)],x.p),a2,a2,B.aa,a2,a2,B.ah,!1),B.f0,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkL()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.Kp,B.K,a2,a2),B.W,A.as(A.lx(new C.cCz(a0,r),a2,B.b5,B.hy,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ay(B.cI,2,B.r,-1)
k=o+1
w.push(new A.qX(new A.bq(0,1,u),new C.cCA(),A.p(a2,new A.ca(B.aM,B.e,B.i,B.m,a2,B.p,a2,0,A.a([new A.qz(new A.y(""+k,a2,B.nN,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.lx,a2,12,a2),B.as,new A.by(1,B.ba,new A.y(v[n].d[o],a2,D.ftB,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.q5,a2,new A.bH(l,l,l,l),new A.bh(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.ct,B.bg,a2,a2,a2),B.b5,B.iW,a2,new A.bR("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bN(!1,D.fUE,a2,a2,!0,a2,a2,a2,a0.gcU0(),a2,a2),a2,a2,a2))
w.push(B.Q)
if(a0.as){u=D.ly.j(0.2)
q=A.m(16)
p=A.J(D.ly,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fw,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.W,C.ul(v,a0.gq9(a0),B.cI,B.jA,D.fq)],t),B.m,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bD,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.t(0,o)?B.dr:B.cI.j(0.2)
g=new A.aP(16,16)
l=new A.ay(n.t(0,o)?B.fa:B.cI,2,B.r,-1)
f=v[a0.e].e[o]
e=n.t(0,o)?B.bU:B.c
d=n.t(0,o)?B.x_:a2
t.push(new A.qX(new A.bq(0,i,u),new C.cCB(),A.aA(a2,A.p(a2,new A.y(f,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),a2,B.K,a2,a2,a2,a2,a2,a2,a2),B.f,a2,D.adh,new A.o(h,a2,new A.bH(l,l,l,l),new A.bh(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jh,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cCC(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a3),B.b5,B.m5,a2,new A.bR("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bY(B.fI,t,B.br,a2,10,10))}return new C.tr(a1,A.cl(w,a2,a2,B.akQ,a2,a2,B.ah,!1),B.f0,a2)}}
C.az1.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.aGg.prototype={
aV(){this.b1()
this.b0()
this.dK()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdE())
w.b7$=null
w.a1()}}
C.af1.prototype={
aqb(d){},
aqD(){var w=this,v=w.pS(new C.f3e(w))
v.h7(0)
w.LG$!==$&&A.aQ()
w.LG$=v}}
C.aK4.prototype={
gbkQ(d){var w=this.c
return B.a.ar(w,0,Math.min(this.d,w.length))},
VB(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.c=d
w.d=0
w.b=A.dh(D.ajR,new C.fdk(w))},
bqH(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.d=w.c.length
w.a.$0()},
q(){var w=this.b
return w==null?null:w.a4(0)}}
C.alk.prototype={
R(){return new C.all(new C.alu(),A.a([],x.t),new A.eC(0,$.ax()),$,0,null,null)},
gd_(){return this.d}}
C.all.prototype={
gMy(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDh(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gh9(d){var w,v=this,u=v.e
if(u===$){w=C.Mv(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqg(){var w=this.r
return w===$?this.r=new C.aK4(new C.bRm(this)):w},
gaoZ(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMy()[v].c)u.push(1)
return u.length},
gbk8(){var w=this.gh9(0)
return w.gyW()==null?"Elder":B.a.i(w.gyW().b)},
Z(){this.a2()
this.aqD()},
q(){var w,v=this
v.gqg().q()
v.f.q()
w=v.LG$
w===$&&A.c()
w.q()
w=v.pZ$
w.T$=$.ax()
w.P$=0
v.bul()},
cIH(){var w=this
w.m(new C.bRj(w))
w.gqg().VB(w.gMy()[w.x].a)},
KJ(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqg()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.pZ$.a
v.ax=u
v.ay=u+1
v.m(new C.bRh())
A.cG(B.hy,new C.bRi(v))},
bok(){var w=this.gaoZ(0)/this.gMy().length*100
if(w>=90)return D.eSP
if(w>=75)return D.eQR
if(w>=60)return D.eHA
if(w>=45)return D.eKZ
return D.eC_},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.crn()
w=A.bS(0,new A.er(A.b4(m,m,m,new C.bsf(n,n.pZ$),B.aw),m),0,0,0)
if(!n.Q){v=D.q5.j(0.96)
u=A.m(20)
t=A.J(B.cI,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gbk8()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aUv,B.K,m,m),B.W,C.ul("Start the test",n.gBq(),B.cI,B.iY,D.fq)],x.p),B.m,m,B.e,B.P,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bD,m,m,m)
v=u}else{v=n.x
u=n.gMy()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aUx,m,m,m)
if(n.Q){t=n.gqg()
t=t.d<t.c.length}else t=!1
if(t)u=D.f9x
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ay(D.B9,4,B.r,-1)
s.push(A.aA(m,A.p(m,new A.y(q[r],m,D.fkL,m,B.K,m,m,m,m,m,m,m),B.f,m,D.adh,new A.o(D.bdQ,m,new A.bH(o,o,o,o),new A.bh(p,p,p,p),m,m,B.n),m,m,m,m,B.NA,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bRk(n,r),m,m,m,m,m,m,!1,B.a3))}u=A.bY(B.fI,s,B.br,new A.bR("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.p_(u,B.mG,A.qs(),B.b5,B.b5,A.L7())],x.p),B.m,m,B.e,B.P,0,B.p)
v=u}return new C.tr("Village School",new A.an(B.a_,m,B.ab,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f0,m)},
crn(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bok(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMy()[v].c)g.push(v)
u=A.m(22)
t=A.J(B.cI,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fpb,B.K,i,i)
r=A.d("Signed by Elder "+j.gbk8(),i,i,i,i,i,i,D.fnP,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fsX,i,i,i),D.etW],q)
o=A.d(h.b,i,i,i,i,i,i,D.fuO,i,i,i)
n=j.gaoZ(0)
m=j.gMy()
u=A.p(i,A.x(A.a([D.fFZ,B.au,s,r,B.W,new A.an(B.A,i,B.ab,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.aam,i,i,i),B.Q,D.arw],q),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(D.q5,i,t,u,i,i,B.n),i,i,i,i,B.fl,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.I_(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aQ,D.fVI,B.Q],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.L)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ay(B.bz,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([new A.y(p.a,i,B.fS,i,i,i,i,i,i,i,i,i),B.au,new A.y("You said: "+p.b[w[v]],i,D.fql,i,i,i,i,i,i,i,i,i),new A.y(p.d,i,D.fsz,i,i,i,i,i,i,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.dr,i,new A.bH(k,k,k,k),new A.bh(r,r,r,r),i,i,B.n),i,i,i,B.ct,B.bg,i,i,i))}B.d.v(s,u)}s.push(B.aB)
s.push(A.as(C.ul("Back to the games",new C.bRd(j),B.cI,B.km,D.fq),i,i,i))
return new C.tr("Village School",A.cl(s,i,i,B.bQ,i,i,B.ah,!1),B.f0,i)}}
C.bsf.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.pZ$.a,d=a1.a,a0=f.f.Mh(a2).b
a0===$&&A.c()
a0=a0.a
a0===$&&A.c()
a0=a0.a
a0.toString
d.drawPicture(a0)
w=C.h7B(a2)
J.bl(d.save())
d.translate(w.a,w.b)
a1.bW(0,w.c)
if(f.Q){a0=f.gqg()
v=a0.d<a0.c.length}else v=!1
for(u=0;u<2;++u){a0=D.cTR[u]-6
$.S()
t=new A.ao(B.O,B.M,B.S,B.T,B.R)
t.r=D.FD.gp(0)
s=t.G()
d.drawRect(A.bG(new A.a3(a0,340,a0+12,450)),s)
s.delete()}a0=A.bs(D.a8s.cr(10),B.hU)
$.S()
t=A.I()
t.r=D.B9.gp(0)
a1.az(a0,t)
t=A.bs(D.a8s,B.hH)
a0=A.I()
a0.sam(A.jx(new A.t(30,96),new A.t(420,346),D.dca,g,B.x,g))
a1.az(t,a0)
r=new A.e4()
r.cY(2)
for(q=0;q<18;++q){a0=r.ag()
t=r.ag()
p=r.ag()
p=A.bK(new A.t(30+a0*390,96+t*250),8+r.ag()*14,30+p*60)
t=new A.ao(B.O,B.M,B.S,B.T,B.R)
t.r=B.c.j(0.025).gp(0)
s=t.G()
d.drawOval(A.bG(p),s)
s.delete()}a0=A.I()
a0.r=K.ahF.gp(0)
a1.aP(new A.a3(30,354,420,362),a0)
a0=A.I()
a0.r=B.aP.gp(0)
a1.aP(D.f1p,a0)
a0=A.I()
a0.r=B.bL.gp(0)
a1.aP(D.f1t,a0)
a0=A.bs(D.f1j,B.hG)
t=A.I()
t.r=D.Yt.gp(0)
a1.az(a0,t)
o=B.k.E((e-f.ax)/0.7,0,1)
if(f.Q){a0=f.gqg().gbkQ(0)
n=A.fx(g,g,7,g,A.cS(g,g,g,g,g,g,g,g,g,D.fx2,a0+(v?"|":"")),B.a4,B.bY,g,B.dA,B.bW)
n.o0(346)
J.bl(d.save())
a0=A.bG(D.a8s)
t=$.my()
d.clipRect(a0,t[1],!0)
a0=o<1
if(a0&&f.w.length>f.x)d.clipRect(A.bG(new A.a3(30+390*o,96,420,346)),t[1],!0)
n.a3(a1,new A.t(52,118))
d.restore()
if(o>0&&a0){a0=30+390*o-20
t=126+40*Math.sin(o*9)
t=A.bs(new A.a3(a0,t,a0+40,t+90),B.fE)
a0=A.I()
a0.r=D.bsU.gp(0)
a1.az(t,a0)}}else{n=A.fx(g,g,g,g,D.fhh,B.K,B.bY,g,B.dA,B.bW)
n.o0(340)
n.a3(a1,new A.t(55,176))}if(v)for(a0=e*1.2,t=e*3,q=0;q<8;++q){m=B.k.F(a0+q/8,1)
p=B.o.F(f.gqg().d*9,310)
l=Math.sin(q+t)
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.7*(1-m)).gp(0)
s=k.G()
d.drawCircle(70+p+l*6,166+m*70,1.6,s)
s.delete()}a0=f.gh9(0).gyW()
j=(a0==null?g:a0.c)===D.oi?1:0
i=e<f.ay
h=A.a([new A.z(470,new C.f3f(e,a1,j,v,i,D.eik)),new A.z(520,new C.f3g(a1,e,v)),new A.z(575,new C.f3h(a1,e,v)),new A.z(585,new C.f3i(this,a1,e,v)),new A.z(615,new C.f3j(this,v,a1,e,i))],x.E)
B.d.aZ(h,new C.f3k())
for(u=0;u<5;++u)h[u].b.$0()
d.restore()},
c9T(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aF(p.r,B.ag,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aY(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.bx(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new A.bt())
return n},
av(d){return!1}}
C.ali.prototype={
R(){return new C.alj(new C.alu(),A.U(x.S,x.i),new A.eC(0,$.ax()),$,0,null,null)},
gd_(){return this.d}}
C.alj.prototype={
gkL(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hz8(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
giX(){var w=this.z
return w===$?this.z=this.Fn(0):w},
gaKw(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.Fn(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cp(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.Fn(0):r).length);++v}s.Q=w
r=w}return r},
Fn(d){var w,v,u,t,s=this.gkL()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e_(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e4()
u.cY(this.a.e+d*7)
B.d.e_(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f4(u,new C.bR_())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a2()
this.aqD()},
q(){var w,v=this
v.e.q()
w=v.LG$
w===$&&A.c()
w.q()
w=v.pZ$
w.T$=$.ax()
w.P$=0
v.buk()},
aqb(d){var w,v,u,t,s,r=this,q=r.giX().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cp(u===$?r.z=r.Fn(0):u,v)
s=r.gaKw()
s[v]=s[v]+(450*(t+0.5)/q-r.gaKw()[v])*Math.min(1,w)}},
cZb(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.giX().length)return
w=v.y
if(w===-1){v.m(new C.bRa(v,d))
return}if(w===d){v.m(new C.bRb(v))
return}v.m(new C.bRc(v,B.d.cp(v.giX(),v.y),d,B.d.cp(v.giX(),d)))},
cJm(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.Fn(0):u).length))break
t=s.gkL()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.Fn(0):u)[v]]===v);++v}s.m(new C.bR5(s,B.d.d0(w,new C.bR6())))},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkL().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bR7(t,s))
w=5
return A.b(C.Bu(t.a.d,s),$async$kF)
case 5:t.x=f
q=t.a
w=6
return A.b(C.Bv(q.d,q.c.a,"lineup",t.r*10),$async$kF)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bR8())
w=1
break
case 4:t.m(new C.bR9(t))
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkL().length+" lines right",k,k,k,k,k,k,B.pH,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tr("Line Up",A.cl(A.a([D.ae9,w,B.aQ,new C.I_(v,u,l.ch,k),B.aQ,A.as(C.ul("Back to the games",new C.bR1(d),B.cI,B.km,D.fq),k,k,k)],x.p),k,k,B.aa,k,k,B.ah,!1),B.f0,k)}w=A.a([],x.t)
for(t=0;v=l.gkL(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bR2(l))
u=A.bS(0,A.cu(new C.bR3(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aUx,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fpC,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.frO,B.K,k,k)],q),B.m,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.m(16)
n=l.ax
m=A.J(n?D.ly:G.na,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bR4(l),x.cM).aG(0,", then ")+".",k,k,k,k,k,k,D.ftY,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d1,B.bg,k,k,1/0))}if(!l.at)r.push(C.ul("That is my line!",l.gcJl(l),B.cI,B.hA,D.fq))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.ul(w,l.gq9(l),B.cI,B.jA,D.fq))}return new C.tr("Line Up",new A.an(B.a_,k,B.ab,B.t,A.a([u,s,A.ap(12,A.x(r,B.m,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.f0,k)}}
C.biQ.prototype={
a3(c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.pZ$.a,c6=c8.a,c7=c4.e.Mh(c9).b
c7===$&&A.c()
c7=c7.a
c7===$&&A.c()
c7=c7.a
c7.toString
c6.drawPicture(c7)
w=C.h7B(c9)
J.bl(c6.save())
c6.translate(w.a,w.b)
c8.bW(0,w.c)
v=c4.giX().length
c7=$.S().r
u=x.v
t=new A.aF(c7,B.ag,c3,c3,A.a([],u))
t.D(new A.aY(10,470))
t.D(new A.c5(225,500,440,470))
s=A.I()
s.r=D.Yt.gp(0)
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
n.push(new A.bt())
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=[B.cI,G.na,D.ly,B.aJ][B.o.F(r,4)].gp(0)
l=o.G()
o=m.gbu().a.snapshot()
c6.drawPath((m.e=new A.cd(o)).a,l)
l.delete()}this.b_Q(c8,"OLDEST",D.ejk,B.cI)
this.b_Q(c8,"YOUNGEST",D.eiM,B.be)
c7=A.bs(D.f1d,B.fE)
u=A.I()
u.r=D.FD.gp(0)
c8.az(c7,u)
u=A.bs(D.f1c,B.hH)
c7=A.I()
c7.r=D.B9.gp(0)
c8.az(u,c7)
k=c5<c4.CW
j=c5<c4.cx
i=v>=5?0.92:1.12
c7=A.a([],x.t)
for(h=0;h<v;++h)c7.push(h)
B.d.aZ(c7,new C.doh())
for(u=c7.length,s=440/v-8,o=c5*10,n=!k,m=c4.as,g=c5*9,f=c5*8,e=c5*12,d=0;d<c7.length;c7.length===u||(0,A.L)(c7),++d){h=c7[d]
a0=c4.z
a1=B.d.cp(a0===$?c4.z=c4.Fn(0):a0,h)
q=c4.gaKw()[h]
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
a8=new A.ao(B.O,B.M,B.S,B.T,B.R)
a8.r=B.cI.j(0.22+0.1*Math.sin(f)).gp(0)
l=a8.G()
c6.drawCircle(q,520,54,l)
l.delete()}a8=D.dfT[B.o.F(a9,6)]
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
else b8=a2?D.elq:c3
if(b0)b9=new A.t(3+b1*8,-56)
else if(j&&a6)b9=D.aKG
else b9=a2?new A.t(30,-104+Math.sin(f)*5):c3
C.RY(c8,new A.t(q,612),b7,b4,(225-q)/225*0.5,-0.3,b8,b9,D.Jf,a8,b3,0,i,b2,b5,c5,b6)
a7=a7[c4.f].d[h]
c0=new A.iN(new A.eu(a7,c3,c3,B.cN,c3,c3,c3,c3,c3,c3,D.fnl),B.a4,B.bY,new A.jr(1),"\u2026",c3,1,c3,B.bW,c3)
c0.o0(s)
c1=A.bs(A.bK(new A.t(q,650),24,c0.b.c+16),B.fE)
$.S()
a7=new A.ao(B.O,B.M,B.S,B.T,B.R)
if(a5)a8=B.io
else a8=a6?B.ru:D.q5
a7.r=a8.gp(0)
l=a7.G()
c6.drawRRect(A.e6(c1),l)
l.delete()
a7=new A.ao(B.O,B.M,B.S,B.T,B.R)
if(a5)a8=D.ly
else a8=a6?G.na:D.lx
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
c2=new A.iN(new A.eu(""+(a1+1),c3,c3,B.cN,c3,c3,c3,c3,c3,c3,D.fnE),B.a4,B.bY,new A.jr(1),c3,c3,c3,c3,B.bW,c3)
c2.el()
c2.a3(c8,new A.t(q-c2.b.c/2,668))}if(k)for(c4=c5*2,c7=c5*120,u=c5*4,r=0;r<26;++r){q=B.k.F(r*53+Math.sin(c4+r)*20,450)
s=B.k.F(c7+r*37,420)
J.bl(c6.save())
c6.translate(q,140+s)
c6.rotate((u+r)*180/3.141592653589793,0,0)
s=A.bK(B.I,4,8)
$.S()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=[B.cI,G.na,D.ly,B.aJ,B.c][B.o.F(r,5)].gp(0)
l=o.G()
c6.drawRect(A.bG(s),l)
l.delete()
c6.restore()}c6.restore()},
b_Q(d,e,f,g){var w,v,u=null,t=A.fx(u,u,u,u,A.cS(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,K.D_,u,u),e),B.a4,B.bY,u,B.dA,B.bW)
t.el()
w=t.b
v=w.c
w=w.a.c
t.a3(d,f.aE(0,new A.t(v/2,w.gbb(w)/2)))},
av(d){return!1}}
C.a1n.prototype={
a6(){return"_Trip."+this.b}}
C.ale.prototype={
R(){return new C.alf(D.Wy,new A.eC(0,$.ax()),$,0,null,null)},
gd_(){return this.d}}
C.alf.prototype={
gD6(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDh(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gh9(d){var w,v=this,u=v.e
if(u===$){w=C.Mv(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqg(){var w=this.f
return w===$?this.f=new C.aK4(new C.bQM(this)):w},
gTz(){var w=this.gh9(0)
return w.gyW()==null?"Grandma":B.a.i(w.gyW().b)},
Z(){this.a2()
this.aqD()},
q(){var w,v=this
v.gqg().q()
w=v.LG$
w===$&&A.c()
w.q()
w=v.pZ$
w.T$=$.ax()
w.P$=0
v.buj()},
aqb(d){var w,v,u,t=this
if(t.r!==D.ac6)return
w=B.dw.aw(0,B.k.E((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gD6()
if(v+1>=u.length){t.r=D.ac7
t.Wy()}else{++t.w
t.ay=!1
t.r=D.Wz
t.gqg().VB(u[t.w].a)}if(t.c!=null)t.m(new C.bQK())}},
Wy(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Wy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqg().VB("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gD6().length
r=C.bFy(t,u.z,s)
u.as=r
w=2
return A.b(C.Bu(u.a.d,r),$async$Wy)
case 2:u.at=e
s=u.a
w=3
return A.b(C.Bv(s.d,s.c.a,"journey",u.x*10),$async$Wy)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bQE())
return A.h(null,v)}})
return A.i($async$Wy,v)},
bpB(){this.aT4()},
aT4(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.ac6
if(w.c!=null)w.m(new C.bQF())},
KJ(d){var w,v,u,t,s=this
if(s.r!==D.Wz)return
w=s.gD6()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bQJ(s,d,v))
u=s.gqg()
t=s.w
u.VB(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cOx(){if(this.r!==D.AI)return
this.aT4()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.er(A.b4(s,s,s,new C.bif(t,t.pZ$),B.aw),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gD6().length;++w){v=t.w
if(w<v||t.r===D.ac7)v=B.cI
else v=w===v?B.c:B.aX
u=new A.aP(4,4)
p.push(new A.by(1,B.ba,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bh(u,u,u,u),s,s,B.n),s,7,s,B.yx,s,s,s,s),s))}p.push(B.bm)
p.push(D.fHz)
return new C.tr("Safari Journey",new A.an(B.a_,s,B.ab,B.t,A.a([r,A.ap(s,A.B(p,B.m,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ap(10,t.cj4(),s,s,10,10,s,s)],q),s),B.f0,s)},
cj4(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bQI(o),l=D.q5.j(0.96),k=A.m(22),j=A.J(B.cI,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTz()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aUv,B.K,n,n),B.W,C.ul("Start the journey",o.gbpA(),B.cI,D.bN5,D.fq)],x.p),B.m,n,B.e,B.P,0,B.p)
break
case 3:w=D.baA
break
case 1:w=o.w
v=o.gD6()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ay(D.lx,2.5,B.r,-1)
t.push(A.aA(n,A.p(n,new A.y(r[s],n,D.aTT,n,B.K,n,n,n,n,n,n,n),B.f,n,D.adp,new A.o(D.aiO,n,new A.bH(p,p,p,p),new A.bh(q,q,q,q),n,n,B.n),n,n,n,n,V.w5,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bQG(o,s),n,n,n,n,n,n,!1,B.a3))}w=A.x(A.a([w,B.Q,A.bY(B.bG,t,B.br,n,8,8)],u),B.E,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gD6().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.Q,new A.bM(B.a8,n,n,C.ul(v,o.gcOw(),B.cI,B.jA,D.fq),n)],x.p),B.E,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTz()),B.Q,A.d(""+o.x+" of "+o.gD6().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aUb,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aPZ(v)
u=C.aPZ(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.aam,n,n,n))}w.push(B.Q)
w.push(A.as(C.ul("Back to the games",new C.bQH(o),B.cI,B.km,D.fq),n,n,n))
w=A.x(w,B.E,n,B.e,B.P,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aBV,n,B.n),n,n,n,n,B.bg,n,n,n)}}
C.bif.prototype={
a3(d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=this.b,c7=c6.pZ$.a,c8=d6.a,c9=d6.b,d0=c6.CW,d1=c6.gD6(),d2=B.k.E(d0/(520*(d1.length+1)),0,1),d3=c6.r===D.ac6,d4=c9*0.5
d0=A.ar(D.bfi,D.bpu,d2)
d0.toString
w=A.ar(D.XK,G.agv,d2)
w.toString
v=A.ar(B.tO,D.bnX,d2)
v.toString
$.S()
u=A.I()
t=x.O
u.sam(A.jx(B.I,new A.t(0,d4),A.a([d0,w,v],t),G.a3u,B.x,c5))
d5.aP(new A.a3(0,0,0+c8,0+c9),u)
s=new A.t(c8*(0.15+0.7*d2),d4*(0.28+0.45*d2*d2))
u=A.I()
u.sam(A.tt(s,60,A.a([D.bok,B.L],t),c5,B.x,c5,c5,0))
d5.ad(s,60,u)
u=A.I()
u.r=B.XV.gp(0)
d5.ad(s,22,u)
for(d0=d5.a,w=c7*4,v=c8+240,u=c9*0.06,r=0;r<5;++r){q=B.k.F(r*190-c6.CW*0.06-w,v)-120
p=u+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.duZ[o]
$.S()
m=new A.ao(B.O,B.M,B.S,B.T,B.R)
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
if(a1!=null)a0.bx(a1)
a0=g.e
if(a0!=null)a0.a.delete()
g.e=null}i=new A.aq(c8,u)
h.push(i)
h=g.f
if(h!=null)i.bx(h)
i=g.e
if(i!=null)i.a.delete()
g.e=null
$.S()
i=new A.ao(B.O,B.M,B.S,B.T,B.R)
i.r=A.ar(j===0?D.bdS:D.bsm,D.biL,v).gp(0)
l=i.G()
i=g.e
d0.drawPath((i==null?g.e=new A.cd(g.gbu().a.snapshot()):i).a,l)
l.delete()}for(v=d4+2,r=0;r<8;++r)this.c9U(d5,new A.t(B.k.F(B.k.F(r*300-c6.CW*0.5,2400)+2400,2400)-150,v),(r&1)===0,d2)
$.S()
v=A.I()
u=A.ar(D.ahY,D.FR,d2)
u.toString
v.sam(A.jx(new A.t(0,d4),new A.t(0,c9),A.a([u,D.bom],t),c5,B.x,c5))
d5.aP(new A.a3(0,d4,c8,c9),v)
a2=c9*0.56
a3=c9*0.66
v=A.I()
v.r=D.bi3.gp(0)
d5.aP(new A.a3(0,a2,c8,a3),v)
v=A.I()
v.r=D.bs2.gp(0)
d5.aP(new A.a3(0,a2-3,c8,a2),v)
for(q=-B.k.F(c6.CW,70),v=(a2+a3)/2-2,u=v+4;q<c8;q+=70){t=new A.ao(B.O,B.M,B.S,B.T,B.R)
t.r=K.Mc.gp(0)
l=t.G()
d0.drawRect(A.bG(new A.a3(q,v,q+36,u)),l)
l.delete()}for(v=a2-6,u=v-36,t=u+36,m=v-34,i=c8*0.62,h=c8+160,f=c7*3,e=c7*6,d=v+40,a0=v-20,a1=a0+20,a4=v-56,a5=a4+56,a6=v-66,a7=a6+20,a8=v-72,r=0;a9=d1.length,r<=a9;r=b0){b0=r+1
q=i+b0*520-c6.CW
if(q<-160||q>h)continue
a9=r===a9
b1=q+40
b2=b1-26
b3=$.S()
b4=new A.ao(B.O,B.M,B.S,B.T,B.R)
b4.r=D.bdy.gp(0)
l=b4.G()
d0.drawRect(A.bG(new A.a3(b2,u,b2+52,t)),l)
l.delete()
b2=A.a([],k)
b3=new A.aF(b3.r,B.ag,c5,c5,b2)
b2.push(new A.aY(b1-36,m))
b2.push(new A.aq(b1,a8))
b2.push(new A.aq(b1+36,m))
b2.push(new A.bt())
b2=new A.ao(B.O,B.M,B.S,B.T,B.R)
b2.r=D.bqk.gp(0)
l=b2.G()
b2=b3.gbu().a.snapshot()
d0.drawPath((b3.e=new A.cd(b2)).a,l)
l.delete()
b2=b1-6
b3=new A.ao(B.O,B.M,B.S,B.T,B.R)
b3.r=D.fq.gp(0)
l=b3.G()
d0.drawRect(A.bG(new A.a3(b2,a0,b2+12,a1)),l)
l.delete()
b5=q-36
b2=b5-2
b3=new A.ao(B.O,B.M,B.S,B.T,B.R)
b3.r=D.FD.gp(0)
l=b3.G()
d0.drawRect(A.bG(new A.a3(b2,a4,b2+4,a5)),l)
l.delete()
b2=b5-30
b6=A.bs(new A.a3(b2,a6,b2+60,a7),B.id)
b2=new A.ao(B.O,B.M,B.S,B.T,B.R)
b2.r=D.btn.gp(0)
l=b2.G()
d0.drawRRect(A.e6(b6),l)
l.delete()
b2=new A.ao(B.O,B.M,B.S,B.T,B.R)
b2.r=D.B9.gp(0)
b2.b=B.a9
b2.c=2
l=b2.G()
d0.drawRRect(A.e6(b6),l)
l.delete()
b7=a9?"HOME":"STOP "+b0
b8=new A.iN(new A.eu(b7,c5,c5,B.cN,c5,c5,c5,c5,c5,c5,D.flQ),B.a4,B.bY,new A.jr(1),c5,c5,c5,c5,B.bW,c5)
b8.el()
b2=b8.b
b3=b2.c
b2=b2.a.c
b8.a3(d5,new A.t(b5-b3/2,a4-b2.gbb(b2)/2))
if(a9)b9=c6.r===D.ac7
else if(r===c6.w){b2=c6.r
b2=b2===D.Wz||b2===D.AI
b9=b2}else b9=!1
if(a9){b2=c6.gh9(0).gyW()
c0=(b2==null?c5:b2.c)===D.oi?1:0}else c0=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b2=c6.gqg()
c1=b2.d<b2.c.length&&b9
c2=b9&&c6.r===D.AI
b2=c1?C.hvG(c7,r):0
if(c2)b3=c6.ax?1:-0.3
else b3=a9&&b9?1:0.4
b4=b9&&c6.r===D.Wz?0.4:0
c3=c2&&c6.ax?0.5:0
if(a9&&b9)a9=new A.t(40,-110+Math.sin(e)*10)
else a9=c1?new A.t(44+Math.sin(f)*8,-66+Math.sin(w)*10):c5
C.RY(d5,new A.t(q+4,d),0,b4,-0.8,-0.2,c5,a9,new A.t(q-200,v),c0,b2,0,0.85,b3,c3,c7+r,-0.3)}d1=c8*0.28
this.bGt(d5,new A.t(d1,a3-6),c7,d3,d6)
if(d3)for(v=c7*1.6,u=d1-90,t=a3-10,r=0;r<7;++r){c4=B.k.F(v+r/7,1)
$.S()
m=new A.ao(B.O,B.M,B.S,B.T,B.R)
m.r=D.brz.j(0.5*(1-c4)).gp(0)
l=m.G()
d0.drawCircle(u-c4*70,t-c4*18,6+c4*16,l)
l.delete()}if(c6.ay&&c6.r!==D.Wy)for(v=c7*1.2,u=d1+62,t=a3-40,r=0;r<5;++r){c4=B.k.F(v+r/5,1)
m=Math.sin(r+w)
$.S()
k=new A.ao(B.O,B.M,B.S,B.T,B.R)
k.r=B.c.j(0.5*(1-c4)).gp(0)
l=k.G()
d0.drawCircle(u+m*5,t-c4*50,4+c4*10,l)
l.delete()}if(c6.r===D.AI&&c6.ax){b8=A.fx(c5,c5,c5,c5,A.cS(c5,c5,c5,c5,c5,c5,c5,c5,c5,A.l(c5,c5,B.cI,c5,c5,c5,c5,c5,c5,c5,c5,24,c5,c5,B.u,c5,c5,!0,c5,c5,c5,c5,c5,A8.Ib,c5,c5),"BEEP BEEP!"),B.a4,B.bY,c5,B.dA,B.bW)
b8.el()
b8.a3(d5,new A.t(d1-b8.b.c/2+40,a2-96-Math.abs(Math.sin(c7*9))*6))}},
c9U(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=A.ar(D.bnR,D.bhn,g)
m.toString
if(f){w=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
v=e.a
u=e.b
w.D(new A.aY(v-16,u))
t=u-36
s=u-56
w.D(new A.c5(v-9,t,v-7,s))
w.D(new A.aq(v+7,s))
w.D(new A.c5(v+9,t,v+16,u))
w.D(new A.bt())
t=A.I()
t.r=D.YT.gp(0)
d.aH(w,t)
for(w=v+0,t=u+-54,s=u+-72,r=d.a,u+=-76,q=0;q<4;++q){p=D.cXP[q]
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=D.YT.gp(0)
o.c=4
o.d=B.by
n=o.G()
r.drawLine.apply(r,[w,t,v+p*24,s,n])
n.delete()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=m.gp(0)
n=o.G()
r.drawCircle(v+p*26,u,10,n)
n.delete()}}else{w=e.a7(0,D.eln)
$.S()
v=A.I()
v.r=D.bdA.gp(0)
v.c=4
d.bo(e,w,v)
v=A.bK(e.a7(0,D.elo),16,60)
w=A.I()
w.r=m.gp(0)
d.dQ(v,w)}},
bGt(a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6?Math.sin(a5*22)*1.6:Math.sin(a5*2)*0.4,a0=this.b,a1=a0.ay&&a0.r!==D.Wy?0.045:0,a2=a3.a
J.bl(a2.save())
a2.translate(a4.a,a4.b+d)
a3.il(0,a1)
for(w=0;w<2;++w){v=D.dns[w]
u=a0.ay&&a0.r!==D.Wy&&v>0
J.bl(a2.save())
a2.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ao(B.O,B.M,B.S,B.T,B.R)
s.r=D.bse.gp(0)
r=s.G()
a2.drawCircle(0,0,t,r)
r.delete()
a2.rotate(a0.CW/18*180/3.141592653589793,0,0)
t=new A.ao(B.O,B.M,B.S,B.T,B.R)
t.r=D.bkO.gp(0)
r=t.G()
a2.drawCircle(0,0,9,r)
r.delete()
for(q=0;q<4;++q){t=q*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.r=B.bn.gp(0)
p.c=2
r=p.G()
a2.drawLine.apply(a2,[0,0,s*9,t*9,r])
r.delete()}a2.restore()}o=A.tQ(D.f1A,B.fE,B.fE,B.it,B.hF)
$.S()
t=A.I()
t.sam(A.jx(D.eht,B.a7o,D.ddv,G.a3u,B.x,e))
a3.az(o,t)
for(n=0;n<20;++n){t=-100+n*10
s=new A.ao(B.O,B.M,B.S,B.T,B.R)
s.r=D.d7F[B.o.F(n,4)].gp(0)
r=s.G()
a2.drawRect(A.bG(new A.a3(t,-26,t+10,-19)),r)
r.delete()}m=a0.r===D.AI&&a0.ax
l=[2,3,4,5]
for(t=a5*10,n=0;n<4;++n){s=-88+n*38
p=s+32
k=new A.a3(s,-66,p,-36)
J.bl(a2.save())
a2.clipRRect(A.e6(A.bs(k,B.mX)),$.nF(),!0)
j=new A.ao(B.O,B.M,B.S,B.T,B.R)
j.r=D.XK.gp(0)
r=j.G()
a2.drawRect(A.bG(k),r)
r.delete()
j=l[n]
i=m?1:0.35
h=m?0.5:0
g=a0.ay&&a0.r===D.AI?1:0
f=m?Math.max(0,Math.sin(t+n))*6:0
C.RY(a3,new A.t(s+(p-s)/2,-10),f,g,0.5,-0.2,e,e,D.aKx,j,h,0,0.4,i,0,a5,0)
a2.restore()
i=A.bs(k,B.mX)
h=new A.ao(B.O,B.M,B.S,B.T,B.R)
h.r=D.aiR.gp(0)
h.b=B.a9
h.c=2
r=h.G()
a2.drawRRect(A.e6(i),r)
r.delete()}a0=A.bs(D.TT,B.mX)
t=A.I()
t.r=D.XK.gp(0)
a3.az(a0,t)
J.bl(a2.save())
a2.clipRRect(A.e6(A.bs(D.TT,B.mX)),$.nF(),!0)
C.RY(a3,new A.t(D.TT.gbL().a,-10),0,0,0.7,-0.1,e,e,D.aKx,6,0,0,0.4,0.5,0,a5,0)
a2.restore()
t=A.bs(D.TT,B.mX)
a0=A.I()
a0.r=D.aiR.gp(0)
a0.b=B.a9
a0.c=2
a3.az(t,a0)
a0=A.I()
a0.r=An.FS.gp(0)
a3.ad(D.ejy,4,a0)
a0=A.I()
a0.r=D.FD.gp(0)
a3.aP(D.f2J,a0)
for(w=0;w<3;++w){v=D.dnu[w]
a0=A.bs(new A.a3(v,-96,v+28,-79),B.id)
t=new A.ao(B.O,B.M,B.S,B.T,B.R)
t.r=D.FR.gp(0)
r=t.G()
a2.drawRRect(A.e6(a0),r)
r.delete()}a2.restore()},
av(d){return!1}}
C.aAT.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.bfN.prototype={}
C.aAV.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.bfO.prototype={}
C.aAW.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.bfP.prototype={}
C.a5S.prototype={
B(d){var w=null
return new A.a4(1/0,this.c,A.b4(w,w,w,new C.bin(w),B.aw),w)}}
C.bin.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=d.a,s=e*0.15,r=f/2,q=e/2,p=f*0.8,o=e*0.85,n=x.v,f*=0.2,m=0,l=0;l<w;l+=e){k=D.dlo[B.o.F(m,6)]
j=$.S()
i=new A.ao(B.O,B.M,B.S,B.T,B.R)
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
i.push(new A.bt())
j=new A.ao(B.O,B.M,B.S,B.T,B.R)
j.r=B.c.j(0.85).gp(0)
h=j.G()
j=g.gbu().a.snapshot()
t.drawPath((g.e=new A.cd(j)).a,h)
h.delete()}++m}},
av(d){return!1}}
C.tr.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.Pi,w,w,w,new C.bQD(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a1,w,w,w,D.fj8,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c6(w,D.Xx,A.p(w,A.bn(!0,A.x(A.a([D.c1A,new A.D(D.bEq,A.B(u,B.m,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),B.f,w,w,D.b61,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.I_.prototype={
B(d){var w=null,v=this.d,u=C.aPZ(v),t=C.icQ(v),s=B.c.j(0.08),r=A.m(18),q=A.J(B.cI.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.flB,w,w,w)],x.p)
if(this.e)p.push(D.enP)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fS,w,w,w))
if(t!=null)p.push(new A.D(B.uc,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Ap,w,w,w),w))
return A.p(w,A.x(p,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bD,w,w,w)}}
C.Vy.prototype={
R(){return new C.bl8(A.U(x.N,x.S),B.o.F(Date.now(),1e5))},
cVp(d){return this.f.$1(d)},
ge2(){return this.d}}
C.bl8.prototype={
gSz(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a2()
this.Pf()},
Pf(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bRo(u.a.d),$async$Pf)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dbA[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bRn(p,(o===$?u.d=q.c:o).a,r),$async$Pf)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.dZ4(u,n))
return A.h(null,v)}})
return A.i($async$Pf,v)},
ud(d){return this.cm5(d)},
cm5(d){var w=0,v=A.j(x.H),u=this,t
var $async$ud=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a5(t,!1).cc(A.eh(new C.dZ5(d),!1,null,x.H)),$async$ud)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pf()
return A.h(null,v)}})
return A.i($async$ud,v)},
gb53(){var w,v,u,t=C.Mv(this.gSz()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)s.push(B.a.i(w[u].b))
return s},
a24(d){return this.cth(d)},
cth(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a24=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.L)(d),++s)r.push(d[s].ah())
w=2
return A.b(u.a.cVp(r),$async$a24)
case 2:if(u.c!=null)u.m(new C.dZ6(u,r))
return A.h(null,v)}})
return A.i($async$a24,v)},
Oy(d){return this.bP5(d)},
bP5(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Oy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.h9J(t.gSz())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Mf("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a5(s,!1).cc(A.eh(new C.dZ2(q),!1,null,r)),$async$Oy)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.L)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bh(j,new C.dZ3(p))
o=s.length
B.d.c6(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a24(A.d5(s,0,A.dC(2,"count",x.S),r).dm(0)),$async$Oy)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Oy,v)},
Xu(d,e){return this.bMI(0,e)},
bMI(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Xu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.ck(null,null,!0,null,new C.dZ1(e),o,null,!0,!0,x.y),$async$Xu)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.h9J(u.gSz()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.L)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a24(o),$async$Xu)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Xu,v)},
a9K(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.dYZ(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.J(B.aX,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cy,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.UP,p,p,p),B.b2],s)
q=A.m(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fk1,p,p,p),B.f,p,p,new A.o(B.hx,p,p,q,p,p,B.n),p,p,p,p,B.C1,p,p,p))
return A.aA(p,A.db(A.p(p,A.x(A.a([A.B(r,B.m,p,B.e,B.i,0,p,p),B.b2,A.d(e,p,2,p,p,p,p,D.frI,p,p,p),B.cS,A.d(f,p,3,B.a1,p,p,p,D.fkJ,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a9(B.ay,B.aE,B.x,w,p,p),B.n),p,p,p,p,B.yp,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a3)},
WY(d,e,f,g,h,i){return this.a9K(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Mv(s.gSz()),p=s.gSz(),o=C.aPZ(s.e),n=C.h9J(p),m=s.a.e&&J.ad(p.z)<2,l=new C.dZ7(s),k=C.hz8(p,1).length,j=C.hzk(p,1).length,i=C.hAe(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.J(B.cI.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,I.aab,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fpf,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.B(A.a([e,B.bc,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,I.aa7,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pH,r,r,r),D.fNP],a1),B.m,r,B.e,B.i,0,B.p)],a1),B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bD,r,r,r)
f=s.WY("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.dZ8(s,p),l.$1("kahoot"))
h=s.WY("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lx,new C.dZ9(s,p),l.$1("fire"))
a0=s.WY("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.By,new C.dZa(s,p),l.$1("catch"))
j=j!==0?new C.dZd(s,p):r
j=s.a9K("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hg,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.dZe(s,p):r
i=s.a9K("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.l2,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.WY("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eP,new C.dZf(s,p),l.$1("journey"))
k=k!==0?new C.dZg(s,p):r
k=A.a([g,B.aQ,D.fRN,B.Q,A.kQ(0.98,A.a([f,h,a0,j,i,e,s.a9K("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ej,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.WY("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d0,new C.dZh(s,p),l.$1("school"))],a1),2,12,12,r,B.dS,!0),B.d4,A.B(A.a([D.bG9,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fk5,r,r,r)],a1),B.m,r,B.e,B.i,0,r,r),B.Q],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.L)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ay(B.aX,1,B.r,-1)
g=B.a.i(v.b)
if(g.length===0)g="Untitled game"
g=A.a([D.fyD,B.bc,new A.by(1,B.ba,A.x(A.a([new A.y(g,r,B.ht,r,r,r,r,B.a1,r,1,r,r),new A.y(""+v.gaoH(0).length+" questions \xb7 Kahoot style",r,B.Ap,r,r,r,r,r,r,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gaoH(0).length>=2){f=D.ly.j(0.2)
t=new A.ay(D.ly,1,B.r,-1)
g.push(A.aA(r,A.p(r,A.X(B.hn,D.ly,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dZi(s,v,p),r,r,r,r,r,r,!1,B.a3))}if(s.a.e){f=B.cI.j(0.2)
t=new A.ay(B.cI,1,B.r,-1)
f=A.aA(r,A.p(r,A.X(B.iY,B.cI,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dZj(s,v),r,r,r,r,r,r,!1,B.a3)
e=B.fa.j(0.2)
t=new A.ay(B.fa,1,B.r,-1)
B.d.v(g,A.a([B.bm,f,B.bm,A.aA(r,A.p(r,A.X(B.eb,B.fa,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dZk(s,v),r,r,r,r,r,r,!1,B.a3)],a1))}k.push(A.p(r,new A.ca(B.aM,B.e,B.i,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bH(u,u,u,u),new A.bh(h,h,h,h),r,r,B.n),r,r,r,B.d1,B.bg,r,r,r))}if(s.a.e){j=m?new C.dZb(s):new C.dZc(a2)
i=A.m(18)
h=A.J(m?B.cI:B.aX,B.r,2)
g=m?B.cI.j(0.12):B.dr
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.p(r,A.as(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cI:B.aC,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.No,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a3))}else if(i===0)k.push(D.fSJ)
k.push(B.aB)
k.push(D.arw)
return new C.tr("Family Games \xb7 "+p.b,A.cl(k,r,r,D.bAr,r,r,B.ah,!1),B.f0,r)}}
C.a_e.prototype={
a6(){return"_KPhase."+this.b}}
C.alg.prototype={
R(){return new C.alh(D.aZj)},
gd_(){return this.e}}
C.alh.prototype={
q(){var w=this.at
if(w!=null)w.a4(0)
w=this.ax
if(w!=null)w.a4(0)
this.a1()},
h7(d){var w,v=this
v.m(new C.bQY(v))
w=v.at
if(w!=null)w.a4(0)
v.at=A.dh(B.fB,new C.bQZ(v))},
aOJ(){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new C.bQO(w))
v=w.at
if(v!=null)v.a4(0)
w.at=A.dh(B.ft,new C.bQP(w))},
KJ(d){var w
if(this.d!==D.abB)return
w=this.at
if(w!=null)w.a4(0)
this.b5_(d)},
b5_(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.k.V(500+500*B.k.E(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bQU(u,v,d))
u=v.ax
if(u!=null)u.a4(0)
v.ax=A.cG(B.rz,v.gkw(v))},
cI2(d){var w=this
if(w.d!==D.W6)return
if(w.e+1>=w.a.w.length)w.Ye()
else{w.m(new C.bQV(w))
w.aOJ()}},
Ye(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Ye=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a4(0)
p=u.x
t=u.a.w.length
s=C.bFy(p,u.w,t)
u.m(new C.bQR(u,s))
w=2
return A.b(C.Bu(u.a.e,s),$async$Ye)
case 2:r=e
t=u.a
w=3
return A.b(C.Bv(t.e,t.f,t.r,u.f),$async$Ye)
case 3:q=e
if(u.c!=null)u.m(new C.bQS(u,r,q))
return A.h(null,v)}})
return A.i($async$Ye,v)},
cIP(){var w,v,u,t,s=this,r=s.a,q=new A.e4()
q.cY(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b7("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e_(r,q)
for(r=A.d5(r,0,A.dC(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bT(r,r.gL(0),u.k("bT<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b7(t,B.k.V(w*(0.35+q.ag()*0.5)),!1))}B.d.aZ(v,new C.bQW())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.aZj===r){w=A.a([D.fOd,B.W,A.d(s,t,t,t,t,t,t,B.Ks,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fkd,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.x7,B.K,t,t))
w.push(B.dT)
w.push(C.ul("Play",u.geX(u),B.cI,B.hn,D.fq))
w=A.as(new A.D(B.eu,A.x(w,B.m,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.aZk===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fsd,t,t,t),t,t,t)
break A}if(D.abB===r||D.W6===r){w=u.coH()
break A}if(D.aZl===r){w=u.c9V()
break A}w=t}return new C.tr(s,w,B.f0,t)},
coH(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.W6,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aTG,j,j,j),B.b2],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.Kp,j,j,j))
g.push(B.as)
f=A.m(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iu,j,j,j),B.f,j,j,new A.o(B.bz,j,j,f,j,j,B.n),j,j,j,j,B.Go,j,j,j))
g=A.B(g,B.m,j,B.e,B.i,0,j,j)
f=A.m(6)
w=i?0:B.k.E(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.kj(B.bz,j,k.as<5?B.fa:B.cI,9,j,w,j),B.ap)
w=A.m(22)
v=A.J(B.cI,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.ly:G.na,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.Q,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fjh,B.K,j,j)],h),B.m,j,B.e,B.P,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.ful,B.K,j,j)
w=A.E(A.p(j,A.as(u,j,j,j),B.f,j,j,new A.o(D.q5,j,v,w,j,j,B.n),j,j,j,j,B.fl,j,j,1/0),3)
v=A.a([],h)
for(u=k.gkw(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bQT(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aBz[o]
m=new A.aP(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([new A.y(D.aBS[o],j,D.flc,j,j,j,j,j,j,j,j,j),B.as,new A.by(1,B.ba,new A.y(r[t],j,D.fka,j,j,j,j,B.a1,j,3,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.aq2)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bUt)
v.push(A.aA(j,new A.Sf(A.p(j,new A.ca(B.aM,B.e,B.i,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bH(l,l,l,l),new A.bh(m,m,m,m),W.aA_,j,B.n),j,j,j,j,B.eY,j,j,j),p,B.b5,B.a2,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a3))}h=A.a([g,B.am,f,B.ae,w,B.ae,A.E(A.kQ(1.45,v,2,10,10,j,B.dS,!1),4)],h)
if(i)h.push(D.en4)
return new A.D(B.a_p,A.x(h,B.m,j,B.e,B.i,0,B.p),j)},
c9V(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cIP(),m=x.p,l=A.a([D.b9S,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pH,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.UU,o,o,o),o,o,o),B.aQ],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cI.j(0.25):B.dr
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cI:B.bz,1,B.r,-1)
q=w<3?D.ddM[w]:""+(w+1)
s=s?B.u:B.U
l.push(A.p(o,new A.ca(B.aM,B.e,B.i,B.m,o,B.p,o,0,A.a([new A.a4(34,o,new A.y(q,o,B.n1,o,o,o,o,o,o,o,o,o),o),new A.by(1,B.ba,new A.y(t.a,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new A.y(""+t.b,o,B.iu,o,o,o,o,o,o,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bH(r,r,r,r),new A.bh(u,u,u,u),o,o,B.n),o,o,o,B.ct,B.eS,o,o,o))}l.push(B.W)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.I_(m,v,p.CW,o))
l.push(B.aQ)
l.push(A.as(C.ul("Back to the games",new C.bQQ(p),B.cI,B.km,D.fq),o,o,o))
return A.cl(l,o,o,B.fl,o,o,B.ah,!1)}}
C.Tc.prototype={
R(){return new C.ald(A.U(x.de,x.er))}}
C.ald.prototype={
gCK(){var w,v=this,u=v.d
if(u===$){w=C.hfk(v.a.c.ah())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gl3(d){var w,v,u=this,t=u.e
if(t===$){w=u.gCK().b
v=$.ax()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.ba(w,B.b4,B.aO),v)}return t},
ccy(d){return this.f.c3(0,d,new C.bQo(d))},
Z(){this.a2()
var w=this.gCK().c
if(w.length===0)w.push(C.h1q(null,0,20,""))},
q(){var w,v,u=this.gl3(0)
u.T$=$.ax()
u.P$=0
for(u=this.f,u=new A.du(u,u.r,u.e);u.C();)for(w=J.aW(u.d);w.C();){v=w.gS(w)
v.T$=$.ax()
v.P$=0}this.a1()},
cHT(){if(this.gCK().c.length>=12)return
this.m(new C.bQp(this))},
jB(d){var w,v,u=this,t=u.gCK()
t.b=B.a.i(u.gl3(0).a.a)
w=t.gaoH(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.U(D.fcf)
return}v=t.c
B.d.aa(v)
B.d.v(v,w)
v=u.c
v.toString
A.a5(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bQz(),r=x.p,q=A.a([A.bN(!1,D.fDy,t,t,!0,t,t,t,u.gbou(u),t,t)],r),p=A.a([D.fSk,B.ae,A.aM(t,B.Y,!1,t,!0,B.t,t,A.aN(),u.gl3(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.aj,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.aa,t,t,t,t,t,t,t,t,t,t,t,B.fS,!0,B.a4,t,B.an,t,t,t,t),B.aB],r)
for(w=0;v=u.gCK().c.length,w<v;++w)B.d.v(p,A.a([new A.ff(new C.bQy(u,w,s),t)],r))
if(v<12)p.push(A.as(C.ul("\uff0b Add a question",u.gcHS(),B.aX,t,B.c),t,t,t))
return new C.tr("Make your game",A.cl(p,t,t,D.bAo,t,t,B.ah,!1),q,t)}}
C.aqh.prototype={
R(){return new C.aEp(A.a([],x._))},
bv(){return this.r.$0()},
qa(){return this.w.$0()},
ge2(){return this.c}}
C.aEp.prototype={
Z(){var w,v
this.a2()
this.w8()
w=this.a
v=w.c
if(v.length!==0)C.a7B(v,w.e,w.d.w)},
vZ(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hcf(r,t.e,!1,s.w,new C.e_K(u),null,s),$async$vZ)
case 2:w=3
return A.b(u.w8(),$async$vZ)
case 3:return A.h(null,v)}})
return A.i($async$vZ,v)},
a0e(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0e=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hcf(r,t.e,!0,s.w,new C.e_J(u),null,s),$async$a0e)
case 2:w=3
return A.b(u.w8(),$async$a0e)
case 3:return A.h(null,v)}})
return A.i($async$a0e,v)},
w8(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$w8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.B_(q.a.c),$async$w8)
case 7:p=e
if(q.c!=null)n=q.e||J.cL(p)
else n=!1
if(n)q.m(new C.e_M(q,p))
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
return A.b(C.GT(q.a.c).da(0,B.qe),$async$w8)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e_N(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e_O(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$w8,v)},
OU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$OU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.U(D.fbQ)
w=3
return A.b(C.GT(t.a.c),$async$OU)
case 3:r=e
w=4
return A.b(C.fSe(t.a.c,r),$async$OU)
case 4:q=e
w=5
return A.b(C.GT(t.a.c),$async$OU)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e_I(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dE:B.cW,null,B.t,null,s,null,B.mI,null,null,null,null,null,null,null,null,null,null))
t.a.qa()
case 1:return A.h(u,v)}})
return A.i($async$OU,v)},
Ic(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ic=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.il2(l),$async$Ic)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hOZ(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b0m(q,p.e,l,"Each family tree costs $"+B.k.ac(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Ic)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hvM(r)
o=Date.now()
n=t.a.c
m=new C.kP(l,r.toUpperCase(),p,!0,B.Y,D.D8,new A.V(o,0,!1),0,n,D.uk,B.ca)
w=5
return A.b(C.a39(n,m),$async$Ic)
case 5:w=6
return A.b(t.w8(),$async$Ic)
case 6:t.a.bv()
t.a.qa()
if(t.c==null){w=1
break}t.EJ(m)
case 1:return A.h(u,v)}})
return A.i($async$Ic,v)},
EJ(d){return this.chr(d)},
chr(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$EJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.B_(u.a.c),$async$EJ)
case 2:n=l.p7(k.dI(f,new C.e_L(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hH(m,new C.aqb(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$EJ)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a39(u.a.c,o),$async$EJ)
case 6:case 5:w=7
return A.b(u.w8(),$async$EJ)
case 7:u.a.qa()
return A.h(null,v)}})
return A.i($async$EJ,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.J,o=new C.u7(p)
if(r.e)return A.as(A.n_(q,p?B.bu:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.e4:B.c
v=A.m(15)
u=A.aI(!1,B.a2,!0,q,A.aO(!1,q,!0,A.p(q,D.bS9,B.f,q,q,new A.o(B.aW.j(0.12),q,A.J(B.aW,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cO,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcgv(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.FV(A.p(q,A.x(A.a([u,B.aQ,t,B.Q,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.dT,A.bI(D.fVy,q,r.gaRU(),A.bo(B.bP,q,q,q,q,q,Aw.a_O,q,new A.b8(A.m(12),B.a0),q,q,q))],x.p),B.m,q,B.e,B.i,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bD7,q,q,1/0),15,B.af,1.05,D.abn,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b2],v)
if(J.cL(r.d))w.push(A.aH(q,q,q,q,A.X(B.za,B.aW,q,q,q,q),q,q,q,new C.e_Q(r),q,q,q,q,"Sync family trees with database",q))
if(J.cL(r.d))w.push(A.aH(q,q,q,q,A.X(B.z5,B.aW,q,q,q,q),q,q,q,r.gagq(),q,q,q,q,"Transfer / backup file",q))
w.push(A.di(E.aqX,D.fAV,r.gaRU(),A.bo(B.bP,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ae)
u.push(new C.FV(r.cE8(J.r(r.d,s),o),14,B.af,1,D.abn,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.m,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cE8(d,e){var w=null,v=e.a,u=v?B.e4:B.c,t=A.m(14),s=A.J((v?B.ea:B.bO).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.en,10)],x.V),q=A.m(14),p=A.p(w,D.bRd,B.f,w,w,new A.o(B.aW.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gapC(),m=d.d?"":" \xb7 Public",l=d.y===D.kM?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bF,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.p(w,A.aI(!1,B.a2,!0,w,A.aO(!1,q,!0,new A.D(B.bD,A.B(A.a([p,B.bc,l,A.X(B.Oc,v?B.bu:B.bn,w,w,w,w)],k),B.m,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e_P(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aqb.prototype={
R(){return new C.aEm(A.a([],x._),A.aX(x.N),A.b97())},
bv(){return this.r.$0()},
ge2(){return this.c}}
C.aEm.prototype={
Z(){var w,v,u=this
u.a2()
u.d=u.a.w
u.ada()
w=u.a
v=w.c
if(v.length!==0)C.a7B(v,w.e,w.d.w)},
q(){var w=this.w
w.T$=$.ax()
w.P$=0
this.a1()},
a3e(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3e=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.y5("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.e_a(r),s,null,!0,!0,x.y),$async$a3e)
case 3:if(e!==!0||t.c==null){w=1
break}t.JK()
t.m(new C.e_b(t,r))
w=4
return A.b(t.u8(),$async$a3e)
case 4:t.a.bv()
t.y5(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3e,v)},
ctT(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aV.x1$.push(new C.e_5(w,f,d,e))},
aU9(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.ds()
u.eg(w,v,0,1)
u.jX(q,q,1,1)
this.w.sp(0,u)},
bbz(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eL(new Float64Array(16))
q.e7(r)
w=q.CP()
v=B.k.E(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.ds()
t.eg(r,u,0,1)
t.jX(v,v,1,1)
t.eg(-r,-u,0,1)
t.iS(0,q)
s.sp(0,t)},
ada(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ada=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.B_(u.a.c),$async$ada)
case 2:t=s.p7(r.dI(e,new C.dZx(u)))
if(t!=null&&u.c!=null)u.m(new C.dZy(u,t))
return A.h(null,v)}})
return A.i($async$ada,v)},
y5(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
vZ(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hcf(o,t,!1,r,new C.dZP(u),q.a,s),$async$vZ)
case 2:n=A
m=J
w=3
return A.b(C.GT(u.a.c),$async$vZ)
case 3:p=n.p7(m.dI(e,new C.dZQ(u)))
if(p!=null&&u.c!=null)u.m(new C.dZR(u,p))
return A.h(null,v)}})
return A.i($async$vZ,v)},
JK(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cz(w,0)},
u8(){var w=0,v=A.j(x.H),u=this,t,s
var $async$u8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a39(t,s),$async$u8)
case 2:return A.h(null,v)}})
return A.i($async$u8,v)},
a1K(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1K=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.um(q,t.a.c)){t.y5("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.imc(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a1K)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.JK()
t.m(new C.e_4(t,r))
w=4
return A.b(t.u8(),$async$a1K)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1K,v)},
b1I(){var w=this.c
w.toString
A.a5(w,!1).cc(A.eh(new C.dZM(this),!1,null,x.H))},
a0s(){return this.cht()},
cht(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.um(m,t.a.c)){t.y5("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.Q(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Z(s,new C.e_1(),A.T(s).k("Z<1>")).gL(0)
s=A.eD([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("cs.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bV(B.L,null,new C.e_2(n,t,new C.u7(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0s)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.JK()
t.m(new C.e_3(t,o))
w=6
return A.b(t.u8(),$async$a0s)
case 6:case 5:if(o.a&&t.c!=null)t.b1I()
case 1:return A.h(u,v)}})
return A.i($async$a0s,v)},
Wl(d){return this.bBO(d)},
bBO(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.um(r,t.a.c)){t.y5("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dZl(t,d),r,null,!0,!0,x.P),$async$Wl)
case 3:s=f
if(s==null){w=1
break}t.JK()
t.m(new C.dZm(t,s))
w=4
return A.b(t.u8(),$async$Wl)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wl,v)},
a3A(d){return this.cGj(d)},
cGj(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3A=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.Q(s)
t=u.c
t.toString
w=2
return A.b(A.ck(null,null,!0,null,new C.e_d(u,d,new C.u7(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3A)
case 2:return A.h(null,v)}})
return A.i($async$a3A,v)},
cdL(d){var w=this,v=w.d
v===$&&A.c()
if(C.um(v,w.a.c))w.Oz(d)
else w.a3A(d)},
aiT(d,e){return this.cxR(d,e)},
cxR(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aiT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.Q(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ck(null,null,!0,null,new C.e_7(new C.u7(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$aiT)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aiT,v)},
Ih(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ih=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kM?3:5
break
case 3:w=6
return A.b(C.h_G(t.a.c),$async$Ih)
case 6:s=e
o=t.a
r=C.hk7(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aiT(!s,!r),$async$Ih)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQ7(o,t.a.c)){t.y5("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.li(o,"Cancel","Remove",q.y===D.kM?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Ih)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aQ3(t.a.c,t.d.a),$async$Ih)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.iX(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Ih,v)},
aaF(d){return this.bMZ(d)},
bMZ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aaF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.um(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b3(s,new C.dZn(p))){o=A.T(s)
p.a=A.p7(new A.cO(new A.Z(s,new C.dZo(d),o.k("Z<1>")),new C.dZp(),o.k("cO<1,n>")))}q=p.a
if(q==null)q=d.d
t.JK()
t.m(new C.dZq(t,s,d,q))
w=3
return A.b(t.u8(),$async$aaF)
case 3:t.y5(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aaF,v)},
Oz(d){return this.bP9(d)},
bP9(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.um(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3A(d),$async$Oz)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ck(null,null,!0,null,new C.dZu(t,d),r,null,!0,!0,x.P),$async$Oz)
case 6:s=f
if(s==null){w=1
break}t.JK()
t.m(new C.dZv(t,s))
w=7
return A.b(t.u8(),$async$Oz)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oz,v)},
cEy(){var w=this,v=w.d
v===$&&A.c()
if(!C.um(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e_c(w))
w.u8()},
Zf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQ7(n,t.a.c)){t.y5("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.Q(n)
s=$.ax()
r=new A.au(B.at,s)
q=t.d.e
p=A.bp(new A.N(q,t.gccd(),A.T(q).k("N<1,n>")).c_(0,new C.dZH()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dZI(t,new C.u7(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$Zf)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.JK()
t.m(new C.dZJ(t,p))
w=4
return A.b(t.u8(),$async$Zf)
case 4:t.y5("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Zf,v)},
cce(d){return B.a.i(d.toLowerCase())},
cgf(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.um(v,w)
t=r.d
s=C.ibi(t)
C.il6(q,t.b,u,C.ibh(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.J,m=new C.u7(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Z(l,new C.e_k(),A.T(l).k("Z<1>")).gL(0)
l=n?B.c2:B.iy
v=A.X(B.a1_,n?B.bu:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.D(B.BS,A.aO(!1,o,!0,new A.D(B.hz,A.B(A.a([v,B.bm,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e_l(p,d),o,o,o,o,o,o,o),o),new A.D(B.nu,p.c_m(m),o)],u)
if(p.d.y===D.kM){t=B.rX.j(0.15)
s=A.m(12)
r=A.J(B.rX.j(0.45),B.r,1)
q=C.GR(p.d,p.a.c)
v.push(new A.D(B.ys,A.p(o,A.B(A.a([D.bWA,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iq,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b2],u)
if(C.um(p.d,p.a.c)&&p.e.length!==0)u.push(new C.G5("Undo",B.pi,p.gcEx(),m,o,o))
u.push(new C.G5("Family Book",D.bLX,p.gcge(),m,B.tP,o))
u.push(new C.G5("Family games",B.oq,p.gcgq(),m,B.aD,o))
if(C.um(p.d,p.a.c))u.push(new C.G5("Display settings",B.CE,p.gchs(),m,B.b1,o))
u.push(new C.G5("Sync",B.z5,p.gagq(),m,o,o))
t=p.d
if(t.y===D.kM||C.aQ7(t,p.a.c)){t=p.d.y===D.kM?"Remove shared tree":"Delete tree"
u.push(new C.G5(t,B.eb,p.gbN8(),m,B.fa,o))}if(C.um(p.d,p.a.c))u.push(new C.G5("Add member",B.wr,new C.e_m(p),m,B.bP,o))
v.push(new A.D(A_.akR,A.B(u,B.m,o,B.e,B.i,0,o,o),o))
if(p.d.gapC()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cu(new C.e_n(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a13:A7.Od,o,o,o,o,o)
v.push(A.as(A.hs(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e_o(p),o),o,o,o))}return A.c6(o,l,A.bn(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
c_m(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fM.j(0.35),B.ds,18)],x.V)
u=A.m(22)
t=A.ap(-26,A.X(B.z0,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aI(!1,B.a2,!0,m,A.aO(!1,m,!0,A.p(m,D.bZI,B.f,m,m,new A.o(B.c.j(0.16),m,A.J(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cO,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagq(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.d(r.b,m,1,B.a1,m,m,m,D.fmd,m,m,m)
r=r.gapC()
p=n.d.gapC()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bF,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.um(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bWN,m,m,m,n.gcrc(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jB:B.mP
r=r?"Private":"Public"
r=A.E(n.aw3(q,"Privacy",r,n.a.d.w?n.gcDu():m),1)
q=A.E(n.aw3(B.z6,"Tree code",n.d.c,new C.dZw(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ae,A.B(A.a([r,B.ad,q,B.ad,A.E(n.aw3(D.bNC,"Collaborators",p,n.gc42()),1)],o),B.m,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kM){s=B.c.j(0.15)
B.d.v(p,A.a([B.Q,A.aI(!1,B.a2,!0,A.m(999),A.aO(!1,A.m(999),!0,new A.D(B.h6,A.B(A.a([A.X(B.pj,B.c,m,m,m,14),B.eg,A.d("View only",m,m,m,m,m,m,B.aTM,m,m,m)],o),B.m,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.bx(u,new A.an(B.a_,m,B.ab,B.t,A.a([t,new A.D(B.Gr,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.o(m,m,m,w,v,D.c31,B.n),m,m,m,m,m,m,m,1/0)},
aw3(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aI(!1,B.a2,!0,A.m(14),A.aO(!1,A.m(14),!0,new A.D(I.am0,A.x(A.a([A.X(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a1,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vk,A.d(f,w,1,B.a1,w,w,w,Ap.Am,w,w,w)],x.p),B.m,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bfR.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gan(r)&&s.c.length===0)return B.bJ
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bfU(s,t),new A.av(w,v))],x.p)
r=r.gdW(r)
B.d.v(u,r.dH(r,new C.ddK(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.ddL(this),A.T(r).k("N<1,v>")))
return new A.D(B.ug,new A.a4(w,v,new A.an(B.a_,t,B.ab,B.f,u,t),t),t)}}
C.Kp.prototype={}
C.G9.prototype={}
C.bfT.prototype={
gbjW(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aK_.prototype={}
C.bfU.prototype={
bON(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.I()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.by
d.bo(new A.t(n,w),new A.t(m,w),v)
u=(n+m)/2
t=new A.aF(q.r,B.ag,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.aY(u,q))
s=w-1.1
r=w-8.8
t.D(new A.kN(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.kN(u+4.95,r,u+9.9,s,u,q))
t.D(new A.bt())
q=A.I()
q.r=B.c.gp(0)
d.ad(new A.t(u,w),9,q)
q=A.I()
q.r=B.bE.gp(0)
d.aH(t,q)},
bOL(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.de4())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b3(a0,new C.de5(f))
t=new A.N(a0,new C.de6(f),A.T(a0).k("N<1,K>")).c_(0,new C.de7()).cI(0,1/0,B.vH)
w=f.a
d.bo(f,new A.t(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.G()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.mV(m)
i=Math.min(10,l/2)
l=$.S()
h=A.a([],q)
g=new A.aF(l.r,B.ag,null,null,h)
h.push(new A.aY(w,v-i))
l=j*i
h.push(new A.c5(w,v,w+l,v))
h.push(new A.aq(n-l,v))
h.push(new A.c5(n,v,n,v+i))
h.push(new A.aq(n,o.b))
k=e.G()
n=g.gbu().a.snapshot()
r.drawPath((g.e=new A.cd(n)).a,k)
k.delete()}},
a3(d,e){var w,v,u,t,s,r,q,p,o
$.S()
w=A.I()
w.r=B.bP.j(0.75).gp(0)
w.c=2.2
w.b=B.a9
w.d=B.by
w.e=B.dQ
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bOL(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.G()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bON(d,w,q.a,q.b)}},
av(d){return d.b!==this.b}}
C.bjH.prototype={
gc9X(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aC7
switch(w.c.a){case 0:return D.cWx
case 1:return D.d7z
case 2:return D.dpi}},
gca_(){var w=this.c,v=C.hv4(w.w),u=C.hv4(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.J,q=t.gc9X(),p=t.c,o=N.bE7(p.f),n=t.gca_(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gak(q).j(0.35),B.cH,10)],m),k=r?B.av:B.c,j=A.J(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tv(B.A,s,B.ci,B.bX,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gak(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gak(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a5,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hV(w,B.ap),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.ay,B.aE,B.x,q,s,s),B.a6),s,56,s,s,B.GH,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.J(r?B.av:B.c,B.r,1.5)
l.push(A.ap(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fwL,s,s,s),B.f,s,s,new A.o(B.cf,s,w,j,s,s,B.n),s,s,s,s,D.bF5,s,s,s),s,s,s,-6,-4,s))}k=r?B.cr:B.c
j=A.m(8)
w=A.J(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dC,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cr,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a4(84,112,A.x(A.a([new A.an(B.a_,s,B.ab,B.f,l,s),B.au,A.p(s,A.x(p,B.m,s,B.e,B.P,0,B.p),B.f,s,D.b4d,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bFg,s,s,s)],v),B.m,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a3)}}
C.beW.prototype={
a3(d,e){var w,v,u,t,s,r,q
$.S()
w=A.I()
v=this.b
u=v?B.c:D.bh0
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.G()
t.drawCircle(r,s,1,q)
q.delete()}},
av(d){return d.b!==this.b}}
C.bxB.prototype={
B(d){var w=this,v=null,u=new C.fj8(w),t=w.c,s=t?B.cr:B.c,r=A.m(12),q=u.$3(B.hQ,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bz:B.fi,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wt,"Zoom out",w.e)
return A.aI(!1,B.a2,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bz:B.fi,v,v,v,1,v,v,v,v,v,22),u.$3(B.aou,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dm,v,v,v,B.ai)}}
C.bn_.prototype={
B(d){var w=this,v=null,u=B.bP.j(0.15),t=A.J(B.bP,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.p(v,A.x(A.a([A.X(s?O.a13:A7.Od,B.bP,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fsT,v,v,v)],r),B.m,v,B.b9,B.i,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a3)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fqJ,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eU2(w),A.T(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a4(84,v,A.x(u,B.m,v,B.e,B.i,0,B.p),v)}}
C.a_r.prototype={
R(){return new C.aCQ()},
bv(){return this.Q.$0()},
ge2(){return this.w}}
C.aCQ.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a2()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
r.d!==$&&A.aQ()
r.d=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.au(new A.ba(t,B.b4,B.aO),s)
t=u?q:v.c
r.y=t==null?D.yG:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.icR(w.r,w.f)
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
Q2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Q2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hk7(p.y,p.w)
w=3
return A.b(A.lu(t.a.w,B.J8),$async$Q2)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b0m(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Q2)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hP_(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Ay.H2(78,800),$async$Q2)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dtX(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Q2,v)},
c9Z(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hW(B.o.u(1000*Date.now()),w,D.yG,null,null,null,"","","","","",1,!1,0)
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
s=v.aF5(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a5(k,!1).O(s)},
aag(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aag=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.dtW(r),s,null,!0,!0,x.y),$async$aag)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aag,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.J,i=new C.u7(j),h=l.a.e,g=A.T(h).k("Z<1>"),f=A.C(new A.Z(h,new C.du5(l),g),g.k("M.E"))
h=j?B.e4:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bDu,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.he(A.aO(!1,k,!0,new A.D(B.m8,A.X(B.eb,B.p6,k,k,k,17),k),B.cO,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbJL(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jM:B.jd
t=N.bE7(l.as)
if(l.as==null)s=A.X(B.pc,j?B.bu:B.bn,k,k,k,40)
else s=k
s=A.as(A.aA(k,new A.an(B.a_,k,B.ab,B.t,A.a([A.ha(u,t,s,k,42),A.ap(0,A.ha(B.bP,k,D.bQh,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc9W(),k,k,k,k,k,k,!1,B.a3),k,k,k)
t=l.d
t===$&&A.c()
t=C.aCS(t,"Full name",B.mM,1,1,i,B.mn)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.W,new C.bjF(i,u,new C.du6(l),k)],v),B.m,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bwS],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.du7(),A.T(o).k("N<1,eJ<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bwU],q)
B.d.v(q,new A.N(f,new C.du9(),A.T(f).k("N<1,eJ<n?>>")))
o=A.x(A.a([t,B.am,new C.ady(i,r,"Who is their parent?",p,new C.dua(l),k,o),B.aB,n,B.am,new C.ady(i,m,"Who is their spouse / partner?",q,new C.dub(l),k,o)],v),B.ak,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aCS(q,"Birth date",D.anx,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aCS(m,"Birth place",B.a1i,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aCS(n,"Date of death (if deceased)",D.apK,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aCS(p,"Occupation",B.a2t,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ab,B.t,w,k),B.aB,s,B.bx,new C.adz(i,"Identity",u,k),B.ae,new C.adz(i,"Family links",o,k),B.ae,new C.adz(i,"Life details",A.x(A.a([q,B.W,m,B.W,n,B.W,p,B.W,C.aCS(r,"Notes",B.lc,5,3,i,k)],v),B.m,k,B.e,B.i,0,B.p),k),B.ae,new C.aCR(i,"Child order",l.chH(l.at),new C.duc(l),new C.dud(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h9x(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.due(l):k
B.d.v(r,A.a([B.W,new C.aCR(i,"Visible in tree",u,w,new C.duf(l),k)],v))}r.push(B.W)
w=j?B.jM:B.jd
u=A.m(14)
t=A.J(j?B.ea:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iM(k,B.bP,k,B.af,k,new C.dug(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,O.akv,k,k,k))
r.push(B.bx)
w=j?B.aP:B.av
j=j?B.ea:B.bO
r.push(A.B(A.a([A.E(A.dT(B.nO,new C.du8(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.cm,k,new A.b8(A.m(14),B.a0),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bI(D.f3Y,k,l.gc9Y(),A.bo(B.aW,k,k,0,B.c,k,B.cm,k,new A.b8(A.m(14),B.a0),k,k,k)),2)],v),B.m,k,B.e,B.i,0,k,k))
r.push(B.au)
return A.ep(B.f0,k,B.af,h,new A.a4(420,k,A.ch(A.x(r,B.ak,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.alk,k,B.akI,new A.b8(g,B.a0),k,k)},
chH(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.adz.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jM:B.jd,s=A.m(16)
return A.x(A.a([new A.D(D.alL,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.J(v?B.ea:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bg,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bjG.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e4:B.c,r=A.m(12),q=A.J((t?B.ea:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.Y,!1,u,!0,B.t,u,A.aN(),v.d,u,u,u,u,u,2,A.br(u,B.eF,u,B.w3,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bu:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cA,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bP,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.aa,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.ady.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e4:B.c,s=A.m(12),r=A.J((u?B.ea:B.bO).j(0.85),B.r,1),q=A.X(B.rJ,u?B.bu:B.bn,v,v,v,v),p=A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e4:B.c
return A.p(v,new A.DX(A.a4P(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cA,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kk,v,v,v)}}
C.bjF.prototype={
B(d){var w=new C.duh(this)
return A.B(A.a([w.$3(D.wb,"Male",B.OV),B.ad,w.$3(D.oi,"Female",B.OH),B.ad,w.$3(D.yG,"Other",B.ny)],x.p),B.m,null,B.e,B.i,0,null,null)}}
C.aCR.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jM:B.jd,r=A.m(14),q=A.J(t?B.ea:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aJ1(u,B.wt,w.f,v),B.bm,new C.aJ1(u,B.hQ,w.r,v)],o),B.m,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eB,v,v,v)}}
C.aJ1.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bP.j(0.12)
else w=s.c.a?B.e4:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bP
else t=(s.c.a?B.bu:B.bn).j(0.4)
return A.aI(!1,B.a2,!0,v,A.aO(!1,u,!0,new A.a4(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.adA.prototype={
bSS(d){switch(d.a){case 0:return B.bP
case 1:return B.bE
case 2:return B.cY}},
bST(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aYC(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Ak(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e4:B.c
u=A.m(12)
t=A.J((w?B.ea:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bP,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,14,p,p,B.U,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.p(p,A.B(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.ct,B.yo,p,p,1/0)},
aeR(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jM:B.jd,s=A.m(16),r=A.J(v?B.ea:B.bO,B.r,1)
return A.x(A.a([new A.D(D.alL,u,w),A.p(w,A.x(e,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hA1(r,q),o=q.c,n=t.bSS(o),m=N.bE7(q.f),l=t.e.a,k=l?B.e4:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kM?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bu:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.J(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.I,12)],x.V)
u=n.j(0.12)
l=A.as(A.p(s,A.ha(u,m,m==null?A.X(B.pc,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ev,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.J(n.j(0.45),B.r,1)
v=A.as(A.p(s,A.d(t.bST(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mJ,s,s,s),s,s,s)
u=x.p
i=A.a([t.Ak("Full name",i,B.mM)],u)
if(p>0)i.push(t.Ak("Child order","#"+p,B.ON))
r=A.a([h,B.au,r,B.aQ,l,B.W,v,B.bx,t.aeR("Identity",i),B.ae,t.aeR("Life details",A.a([t.Ak("Birth date",q.w,D.anx),t.Ak("Birth place",q.x,B.a1i),t.Ak("Date of death",q.y,D.apK),t.Ak("Occupation",q.z,B.a2t)],u)),B.ae,t.aeR("Family links",A.a([t.Ak("1. Parent",t.aYC(q.d),B.GV),t.Ak("2. Spouse",t.aYC(q.e),B.Ha)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ae,t.aeR("Notes",A.a([t.Ak("Notes",q,B.lc)],u))],u))
r.push(B.bx)
r.push(A.bI(B.Ky,s,new C.dur(d),A.bo(B.aW,s,s,s,s,s,B.cm,s,new A.b8(A.m(14),B.a0),s,s,s)))
return A.eT(s,k,new A.cT(B.lV,A.ch(A.x(r,B.ak,s,B.e,B.P,0,B.p),B.t,s,B.y,s,B.w7,s,s,B.ah),s),s,s,s,B.Gu,B.d8,s,new A.b8(j,B.a0),s)}}
C.G5.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uj,A.he(A.aI(!1,B.a2,!0,A.m(8),A.aO(!1,A.m(8),!0,new A.a4(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.aqe.prototype={
f_(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a9().ae())
w=u.c
v=A.T(w).k("N<1,a8<n,@>>")
w=A.C(new A.N(w,new C.cdl(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jk(w,new C.cdm(),t,x.fO))
return s}}
C.aqf.prototype={
R(){return new C.aEo(A.a([],x.bF))},
gd_(){return this.c}}
C.aEo.prototype={
Z(){this.a2()
this.JR()},
JR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$JR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cdp(t.a.c),$async$JR)
case 3:r=e
w=4
return A.b(C.B_(t.a.c),$async$JR)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rb(q,new C.e_x(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e_y(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$JR,v)},
yD(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
KB(d,e){return this.cGZ(d,e)},
cGZ(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KB=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e_C(q,e))
t=3
w=6
return A.b(d.$0(),$async$KB)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e_D(q))
$.eX.my()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KB,v)},
Y2(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pn(r,s.c,s.e),$async$Y2)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KB(new C.e_u(t),"Preparing download\u2026"),$async$Y2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y2,v)},
Y6(d){return this.bQN(d)},
bQN(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pn(r,s.c,s.e),$async$Y6)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KB(new C.e_v(t,d),"Preparing file\u2026"),$async$Y6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y6,v)},
agN(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$agN=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xv.ca().Mt(B.RS,B.ul,!0),$async$agN)
case 7:r=e
o=r
q=o==null?null:J.ft(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gan(o)}else o=!1
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
case 6:u=A.H1()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agN,v)},
YJ(d){return this.c0h(d)},
c0h(d){var w=0,v=A.j(x.H),u=this
var $async$YJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KB(new C.e_w(u,d),"Restoring family trees\u2026"),$async$YJ)
case 2:return A.h(null,v)}})
return A.i($async$YJ,v)},
YI(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.agN(),$async$YI)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.YJ(s),$async$YI)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YI,v)},
a2C(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pn(r,s.c,s.e),$async$a2C)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KB(new C.e_B(t),"Creating QR code\u2026"),$async$a2C)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2C,v)},
a2d(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Dc()){t.yD("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).cc(A.eh(new C.e_z(),!0,null,x.N)),$async$a2d)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.YJ(r),$async$a2d)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2d,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===B.J,n=o?B.Bg:B.iy,m=o?D.aiX:B.aP,l=o?B.aK:B.bO,k=o?B.aP:B.av,j=new C.de8(n,m,l,k,o?B.bM:B.bn)
l=A.aH(p,p,p,p,A.X(B.eK,k,p,p,p,20),p,p,p,new C.e_F(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eI(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.ddH(!0,B.jD,B.aJ,B.aJ,q.r?p:q.gcxF(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gctO()
t.push(A.E(C.ddH(!s,B.ji,B.b7,B.bq,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.ddH(!1,B.hR,B.aW,B.bP,q.r?p:q.gbQG(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.ddH(!1,R.z7,B.aA,B.aT,q.r?p:q.gc0e(),j,s,"Upload backup file"),1))
l=A.a([new C.bfS(v,l,p),B.kV,new C.acP(j,"QR restore",p),B.W,t,B.d4,new C.acP(j,"Backup files",p),B.W,A.B(r,B.m,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kV,new C.acP(j,"One tree",p),B.W],u)
B.d.v(v,J.b6(q.d,new C.e_G(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cl(l,p,p,B.a_L,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.J(B.aW.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.ds,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bn(!0,A.p(p,A.B(A.a([O.aSc,B.bc,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.BY,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.an(B.a_,p,B.ab,B.t,l,p),p,!1,!1,p,p)}}
C.de8.prototype={}
C.bfS.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aW.j(0.32),B.kt,28)],x.V)
t=A.ap(p,A.X(B.uG,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.a_,p,B.ab,B.t,A.a([t,new A.D(B.aa,A.B(A.a([A.p(p,D.bZe,B.f,p,p,new A.o(s,p,A.J(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oL,A.E(A.x(A.a([D.fBU,B.Q,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c6g,B.n),p,p,p,p,p,p,p,p)}}
C.acP.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ad,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)}}
C.bfQ.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aJ.j(0.4):m.c
k=A.J(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aJ.j(0.1),B.cH,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.J(t.j(0.35),B.r,1)
return A.aI(!1,B.a2,!0,q,A.aO(!1,o,!0,A.eK(A.db(new A.D(E.a_n,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rG,q,q,q),B.ae,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bF,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cA,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bfV.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.J(s.c,B.r,1),q=B.aW.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aI(!1,B.a2,!0,v,A.aO(!1,u,!0,A.eK(new A.D(B.eS,A.B(A.a([A.p(v,D.bYt,B.f,v,v,new A.o(q,v,A.J(B.aW.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rG,v,v,v),B.bc,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hR,o,v,v,v,20)],n),B.m,v,B.e,B.i,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a_M.prototype={
R(){return new C.aEn()},
gd_(){return this.c}}
C.aEn.prototype={
Z(){this.a2()
this.a9O()},
a9O(){var w=0,v=A.j(x.H),u=this,t
var $async$a9O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b30(u.a.c,B.DL),$async$a9O)
case 2:t=e
if(u.c!=null)u.m(new C.e_p(u,t))
return A.h(null,v)}})
return A.i($async$a9O,v)},
aia(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aia=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e_q(q))
t=4
p=A.hlO(q.a.d,B.DL)
if(p==null){n=A.be("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.asy(n.e,m,l,B.DL,p,n.f),$async$aia)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e_r(q))
q.c.K(x.q).f.U(D.fd2)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.em(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e_s(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aia,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.J,o=p?B.ju:B.q6,n=p?B.ix:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eI(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fSe,q,q,q,1,q,!0)
w=A.m(24)
v=A.J(B.aW.j(0.35),B.r,1)
u=A.q3(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aW,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.Q,u,B.bx,t,B.Q,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.al,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.m,q,B.b9,B.i,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.aa,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ac:B.bs,q,q,q,q,q,q,q,q,q,q,q,B.U,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gctw()
if(u)u=B.K0
else u=A.X(r.e===!0?B.hA:B.anw,q,q,q,q,q)
w=A.a([w,B.ae,v,B.ae,new A.a4(1/0,q,A.ex(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aW,q,B.h0,q,q,q,new A.ay(B.aW.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i4,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aC:B.al,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.W)
w.push(new A.a4(1/0,q,A.bI(B.At,q,new C.e_t(d),A.bo(B.aW,q,q,q,q,B.h0,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.D(B.aa,A.x(w,B.m,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a_N.prototype={
R(){return new C.bl9(A.zz(B.yd,B.nU,B.uO))}}
C.bl9.prototype={
q(){this.d.q()
this.a1()},
B(d){var w=null
return A.c6(A.eI(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fK3,w,w,w,1,w,!0),B.w,A.zy(this.d,B.bX,new C.e_H(this,d)),w,!1,!1,w,w)}}
C.aZT.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Rl,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lQ.prototype={}
C.a6G.prototype={
R(){return new C.bkQ(null,null)}}
C.bkQ.prototype={
Z(){var w=this,v=null
w.a2()
w.d=A.bm(v,B.rz,v,1,v,w)
w.e=A.bm(v,B.qd,v,1,v,w)
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
this.bxa()},
B(d){var w,v,u=this,t=B.d.dN(D.a5l,new C.dM1(u),new C.dM2())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cA7(A.cb(new A.h8(A.a([w,v],x.dS)),new C.dM3(u,t),null),!0)}}
C.bkP.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b28(d,e)
break
case"house":p.m9(d,e,D.dcw)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdD()
$.S()
t=A.I()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ad(new A.t(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mf(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.B3(d,e,12)
p.yf(d,e,B.l4,5,14)
break
case"grocery":p.ciq(d,e)
break
case"calculator":p.ci7(d,e)
break
case"lumber":p.ciy(d,e)
break
case"kitchen":p.cit(d,e)
break
case"landscape":p.m9(d,e,D.dd6)
s=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.aY(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.c5(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.c5(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.aq(t,w))
s.D(new A.aq(0,w))
s.D(new A.bt())
w=A.I()
w.r=B.ej.j(0.85).gp(0)
d.aH(s,w)
p.B3(d,e,8)
p.yf(d,e,B.io,4,18)
break
case"plumbing":p.ciH(d,e)
break
case"electrical":p.m9(d,e,D.dow)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.I()
u.r=B.c.j(q*0.12).gp(0)
d.aP(new A.a3(0,0,0+e.a,0+e.b),u)
p.mf(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mf(d,e,B.m_.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.B3(d,e,10)
break
case"store":p.ciR(d,e)
break
case"paint_remodel":p.ciC(d,e)
break
case"roofing":p.ciJ(d,e)
break
case"warehouse":p.ciY(d,e)
break
case"vehicles":p.ciW(d,e)
break
case"farm":p.cik(d,e)
break
case"restaurant":p.ciI(d,e)
break
case"tools":p.ciU(d,e)
break
case"wallet":p.ciX(d,e)
break
case"concrete":p.cid(d,e)
break
case"blueprint":p.ci5(d,e)
break
default:p.b28(d,e)}},
m9(d,e,f){var w,v=new A.a3(0,0,0+e.a,0+e.b)
$.S()
w=A.I()
w.sam(new A.a9(B.ay,B.aE,B.x,f,null,null).aA(0,v))
d.aP(v,w)},
mf(d,e,f,g,h){var w,v,u,t,s,r,q=new A.t(e.a/2,e.b/2),p=e.gdD()/2-h
$.S()
w=A.I()
w.b=B.a9
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bX(q,p)
r=w.G()
v.drawArc.apply(v,[A.bG(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
yf(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdD()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.S()
q=new A.ao(B.O,B.M,B.S,B.T,B.R)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.G()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
B3(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.S()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.G()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b28(d,e){var w,v=this
v.m9(d,e,D.dmQ)
w=v.c
v.mf(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mf(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bOH(d,e,B.i_,w)
v.yf(d,e,B.c.j(0.7),6,8)},
bOH(d,e,f,g){var w,v,u,t,s,r,q,p
$.S()
w=A.I()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.G()
s.drawRect(A.bG(new A.a3(16,q,t,q+3)),p)
p.delete()}},
ciq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m9(d,e,D.crU)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.ao(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.S()
l=new A.ao(B.O,B.M,B.S,B.T,B.R)
l.r=D.daJ[B.o.F(s,4)].j(0.85).gp(0)
k=l.G()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.mf(d,e,B.c.j(0.35),w,16)
j.yf(d,e,B.io,5,12)},
ci7(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m9(d,e,D.cs1)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdD()
$.S()
q=A.I()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ad(new A.t(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fx(g,g,g,g,g,B.a4,B.bY,g,B.dA,B.bW)
for(o=0;o<6;++o){n=v+o*0.9
r=D.deQ[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saY(0,new A.eu(r,g,g,B.cN,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.el()
p.a3(d,new A.t(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cs3[o]
l=B.kD.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saY(0,new A.eu(m,g,g,B.cN,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.el()
p.a3(d,new A.t(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ao(o,3)*0.38)+Math.sin(n)*6))}h.mf(d,e,B.c.j(0.35),w*1.5,14)
h.mf(d,e,B.eG.j(0.55),-v*3.141592653589793*2,8)
h.mf(d,e,B.xX.j(0.4),r*2.8,22)
h.yf(d,e,B.pW,8,10)
h.B3(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.S()
r=new A.ao(B.O,B.M,B.S,B.T,B.R)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.G()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
ciy(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m9(d,e,W.azh)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bs(new A.a3(20,q,u,q+10),B.hG)
$.S()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=A.ar(B.fU,B.o_,(r+1)/2).gp(0)
n=o.G()
t.drawRRect(A.e6(p),n)
n.delete()}m.mf(d,e,B.fU.j(0.35),w,15)
m.B3(d,e,8)},
cit(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m9(d,e,D.dbd)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.S()
l=new A.ao(B.O,B.M,B.S,B.T,B.R)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.G()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.mf(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
j.yf(d,e,B.pT,4,14)},
ciH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m9(d,e,D.d_v)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.S()
n=new A.ao(B.O,B.M,B.S,B.T,B.R)
n.b=B.a9
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.G()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.yf(d,e,B.p4,6,12)
l.mf(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
ciR(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m9(d,e,D.cFF)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bs(new A.a3(q,14,q+u,22),B.id)
$.S()
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.r=A.ar(B.fd,B.bL,(r+1)/2).gp(0)
o=p.G()
t.drawRRect(A.e6(q),o)
o.delete()}n.mf(d,e,B.c.j(0.3),w,16)
n.B3(d,e,8)
n.yf(d,e,B.vO,5,13)},
ciC(d,e){var w,v,u,t,s,r,q,p,o
this.m9(d,e,D.d5O)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bs(new A.a3(q,p,q+8,p+(18+r*22)),B.hH)
$.S()
q=new A.ao(B.O,B.M,B.S,B.T,B.R)
q.r=[B.ik,B.du,B.bL,B.ep][s].j(0.85).gp(0)
o=q.G()
t.drawRRect(A.e6(p),o)
o.delete()}this.mf(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
ciJ(d,e){var w,v,u,t,s,r,q,p,o
this.m9(d,e,D.d3a)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.S()
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.G()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.yf(d,e,B.cq,7,11)},
ciY(d,e){var w,v,u,t,s,r,q,p,o,n
this.m9(d,e,D.cIo)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bs(new A.a3(p,o,p+(t-r*8),o+16),B.hG)
$.S()
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.r=A.ar(B.cq,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.G()
s.drawRRect(A.e6(o),n)
n.delete()}this.mf(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
ciW(d,e){var w,v,u,t,s,r,q,p,o
this.m9(d,e,D.dsE)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bs(new A.a3(r,q,r+28,q+8),B.hG)
$.S()
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.G()
t.drawRRect(A.e6(q),o)
o.delete()}this.B3(d,e,6)},
cik(d,e){var w,v,u,t,s,r,q,p,o,n
this.m9(d,e,D.d9M)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.I()
s.r=B.m_.j(0.75).gp(0)
d.ad(new A.t(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=B.hg.j(0.85).gp(0)
o.c=3
n=o.G()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.mf(d,e,B.m_.j(0.35),w,14)},
ciI(d,e){var w,v,u,t,s,r,q,p,o=this
o.m9(d,e,D.dcl)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.bK(new A.t(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.S()
q=new A.ao(B.O,B.M,B.S,B.T,B.R)
q.r=B.c.j(0.22).gp(0)
p=q.G()
t.drawOval(A.bG(r),p)
p.delete()}o.yf(d,e,B.pT,5,16)
o.B3(d,e,7)},
ciU(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m9(d,e,D.dq3)
w=m.c
v=w*3.141592653589793
m.mf(d,e,B.o_.j(0.55),v*3,10)
m.mf(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.S()
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=B.o_.j(0.8).gp(0)
n=o.G()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
ciX(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m9(d,e,D.dtk)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bs(new A.a3(p,o,p+36,o+22),B.id)
$.S()
p=new A.ao(B.O,B.M,B.S,B.T,B.R)
p.r=A.ar(B.io,B.m_,q).gp(0)
n=p.G()
s.drawRRect(A.e6(o),n)
n.delete()}m.B3(d,e,9)
m.mf(d,e,B.c.j(0.4),w*2.2,12)},
cid(d,e){var w,v,u,t,s,r,q,p,o,n
this.m9(d,e,D.dhI)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bX(new A.t(v,u),34)
$.S()
s=A.I()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.e4(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ao(B.O,B.M,B.S,B.T,B.R)
o.r=B.bO.j(0.85).gp(0)
n=o.G()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
ci5(d,e){var w,v,u,t,s,r,q,p
this.m9(d,e,D.ddr)
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
u.r=B.du.j(0.45).gp(0)
d.aP(new A.a3(0,p,0+v,p+6),u)
this.mf(d,e,B.l4.j(0.45),-t*3.141592653589793*2,11)},
av(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.ath.prototype={
a_Q(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aR0(),$async$a_Q)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8T(s),$async$a_Q)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_Q,v)},
agO(d){return this.cle(d)},
cle(d){var w=0,v=A.j(x.H),u=this,t
var $async$agO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ilg(d),$async$agO)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$agO,v)},
B(d){var w,v,u,t=null,s=A.Q(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jM:B.jd
w=x.p
v=A.a([C.aRp(!0,B.r9,1/0,B.qq,t,r,1/0)],w)
if(!q){u=A.a([B.L,B.w.j(0.35)],x.O)
v.push(A.c4(new A.bM(B.b0,t,t,new A.D(B.w_,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.U,t,t,!0,t,t,t,t,t,B.aAf,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b0,B.b6,B.x,u,t,t),B.n),B.bh))}v.push(A.ap(8,A.B(A.a([A.E(A.di(D.bS2,D.fy8,new C.clU(this,d),A.bo(B.aW,t,t,t,B.c,t,B.jU,t,t,t,t,B.cc)),1),B.ad,A.E(A.ex(D.c_u,D.fNd,this.gccb(),A.dj(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jU,t,t,D.b2L,t,t,t,B.cc)),1)],w),B.m,t,B.e,B.i,0,t,t),t,t,8,8,t,t))
return new A.fH(1.7777777777777777,A.aI(!1,B.a2,!0,B.r9,new A.an(B.a_,t,B.b3,B.t,v,t),B.ap,s,0,t,t,t,t,t,B.ai),t)}}
C.aMs.prototype={
aV(){this.b1()
this.b0()
this.dK()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdE())
w.b7$=null
w.a1()}}
C.aUq.prototype={}
C.aUp.prototype={}
C.aSn.prototype={}
C.Zp.prototype={
R(){return new C.azA()}}
C.azA.prototype={
Z(){var w,v,u=this
u.a2()
u.a.toString
w=new A.ba("",B.b4,B.aO)
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
Kr(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.U(D.fdx)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).O(new C.aUq(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.Q(d).ax.a===B.J,l=m?B.e4:B.c,k=A.m(20),j=A.p(n,D.c_9,B.f,n,n,new A.o(B.aW.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bF,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.B(A.a([j,B.bc,i,A.aH(n,n,n,n,A.X(B.cx,m?B.bu:B.bn,n,n,n,n),n,n,n,new C.d5g(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.U,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cA,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hm3(new C.d5h(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jM:B.jd
r=A.m(12)
q=A.m(12)
p=m?B.ea:B.bO
t=A.aM(n,B.Y,!0,n,!0,B.t,n,A.aN(),u,n,n,n,n,n,2,A.br(n,new A.b5(4,r,B.dk),n,n,n,n,n,n,!0,new A.b5(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d5i(o),n,!1,n,n,!1,n,!0,n,B.aa,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,A0.K7,n,n,n,n)
u=m?B.aP:B.av
m=m?B.ea:B.bO
return A.eT(n,l,new A.cT(B.lV,A.ch(A.x(A.a([j,B.aQ,i,B.au,w,B.Q,v,B.aQ,t,B.bx,A.B(A.a([A.E(A.dT(B.di,new C.d5j(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.cm,n,new A.b8(A.m(12),B.a0),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bI(D.fNs,n,o.ga2Y(),A.bo(B.aW,n,n,n,B.c,n,B.cm,n,new A.b8(A.m(12),B.a0),n,n,n)),1)],h),B.m,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.P,0,B.p),B.t,n,B.y,n,B.BZ,n,n,B.ah),n),n,n,n,A6.C_,B.d8,n,new A.b8(k,B.a0),n)}}
C.Zo.prototype={
R(){return new C.azz()}}
C.azz.prototype={
Z(){this.a2()
var w=$.ax()
this.d!==$&&A.aQ()
this.d=new A.au(B.at,w)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
Kr(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.U(D.fba)
return}v=this.c
v.toString
A.a5(v,!1).O(new C.aUp(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.Q(d).ax.a===B.J,o=p?B.e4:B.c,n=A.m(20),m=A.p(q,D.bWF,B.f,q,q,new A.o(B.bP.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bF,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.B(A.a([m,B.bc,l,A.aH(q,q,q,q,A.X(B.cx,p?B.bu:B.bn,q,q,q,q),q,q,q,new C.d5c(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.i,0,q,q)
l=B.aW.j(p?0.12:0.08)
w=A.m(12)
v=A.J(B.aW.j(0.25),B.r,1)
u=A.X(B.ani,B.aW.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.i,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bD,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jM:B.jd
t=A.m(12)
s=A.m(12)
r=p?B.ea:B.bO
v=A.aM(q,B.Y,!0,q,!0,B.t,q,A.aN(),w,q,q,q,q,q,2,A.br(q,new A.b5(4,t,B.dk),q,q,q,q,q,q,!0,new A.b5(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d5d(this),q,!1,q,q,!1,q,!0,q,B.aa,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kW,q,q,q,q)
w=p?B.aP:B.av
p=p?B.ea:B.bO
return A.eT(q,o,new A.cT(B.lV,A.ch(A.x(A.a([m,B.aQ,l,B.aB,v,B.bx,A.B(A.a([A.E(A.dT(B.di,new C.d5e(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.cm,q,new A.b8(A.m(12),B.a0),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bI(D.fUv,q,this.ga2Y(),A.bo(B.bP,q,q,q,B.c,q,B.cm,q,new A.b8(A.m(12),B.a0),q,q,q)),1)],k),B.m,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.BZ,q,q,B.ah),q),q,q,q,A6.C_,B.d8,q,new A.b8(n,B.a0),q)}}
C.YW.prototype={
R(){return new C.ayf()}}
C.ayf.prototype={
Z(){var w,v=this
v.a2()
w=$.ax()
v.d!==$&&A.aQ()
v.d=new A.au(B.at,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b4,B.aO),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.at,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.at,w)},
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
gajX(){var w=this.f
w===$&&A.c()
w=A.d4(B.a.i(w.a.a))
return w==null?0:w},
gb4V(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aPA(d){var w,v=B.k.E(this.gJM()+d,0.25,999999),u=B.k.jl(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ac(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.saY(0,u)
this.m(new C.cDH())},
ayK(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aW,w,w,w,20):w,u=d.a,t=u?B.jM:B.jd,s=A.m(14),r=A.m(14)
u=u?B.ea:B.bO
return A.br(w,new A.b5(4,s,B.dk),w,B.bD,w,w,w,w,!0,new A.b5(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b5(4,A.m(14),B.acT),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ccc(d,e,f){return this.ayK(d,e,f,null)},
Kr(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gajX()<=0){s.c.K(x.q).f.U(D.ffp)
return}r=s.c
r.toString
v=s.gJM()
u=s.gajX()
t=s.gb4V()
A.a5(r,!1).O(new C.aSn(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.J,m=new C.u7(n),l=n?B.e4:B.c,k=A.m(24),j=x.O,i=A.a([B.aW.j(0.22),B.bP.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bPY,B.f,o,o,new A.o(o,o,A.J(B.aW.j(0.35),B.r,1),h,o,new A.a9(B.a5,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bF,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cA,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.B(A.a([i,B.bc,h,A.aH(o,o,o,o,A.X(B.cx,n?B.bu:B.bn,o,o,o,o),o,o,o,new C.cDN(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Y,!0,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.ayK(m,"Item name (optional)","Lumber, paint, labor\u2026",B.OU),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,A0.K7,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jM:B.jd
t=A.m(14)
s=A.J(n?B.ea:B.bO,B.r,1)
r=A.aH(o,o,o,o,A.X(B.wt,n?B.aP:B.av,o,o,o,20),o,o,o,new C.cDO(p),o,o,o,o,o,B.cc)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),q,o,o,o,o,o,2,D.c13,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cDP(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a4(52,o,q,o),A.aH(o,o,o,o,A.X(B.hQ,n?B.aP:B.av,o,o,o,20),o,o,o,new C.cDQ(p),o,o,o,o,o,B.cc)],w),B.m,o,B.e,B.P,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.as,A.E(A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),t,o,o,o,o,o,2,p.ayK(m,"Amount","0.00",B.i5),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cDR(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.d6i,new C.cDS(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aB,h,B.Q,s,B.ae,A.bY(B.bG,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.W,A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.ccc(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cDT(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kW,o,o,o,o)],w))}i.push(B.aQ)
h=B.aW.j(n?0.18:0.1)
j=A.a([h,B.bP.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.J(B.aW.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.U,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJM()===B.k.jl(p.gJM())?B.k.N(p.gJM()):p.gJM()
s=p.gb4V()
r=A.B1(p.gajX())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.au,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bEV(p.gJM()*p.gajX(),B.b1,!1,B.u)],w),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a5,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jh,o,o,o))
i.push(B.bx)
j=A.m(14)
h=n?B.ea:B.bO
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.cm,o,new A.b8(j,B.a0),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cDU(d),h),1),B.as,A.E(A.di(D.aqP,D.fQo,p.ga2Y(),A.bo(B.aW,o,o,0,B.c,o,B.cm,o,new A.b8(A.m(14),B.a0),o,o,o)),2)],w),B.m,o,B.e,B.i,0,o,o))
return A.eT(o,l,new A.cT(A5.adi,A.ch(A.x(i,B.ak,o,B.e,B.P,0,B.p),B.t,o,B.y,o,Aj.rF,o,o,B.ah),o),o,o,o,B.ND,B.d8,o,new A.b8(k,B.a0),o)}}
C.a1z.prototype={
R(){return new C.bxr()}}
C.bxr.prototype={
Z(){var w,v,u=this
u.a2()
w=u.a.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b4,B.aO),v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.ax()
w.P$=0
this.a1()},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.J,q=r?B.e4:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jM:B.jd
v=A.aM(s,B.Y,!0,s,!0,B.t,s,A.aN(),w,s,s,s,s,s,2,A.br(s,new A.b5(4,A.m(12),B.dk),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fis(t,d),s,!1,s,s,!1,s,!0,s,B.aa,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dT(B.di,new C.fit(d),s),1)
r=A.bo(B.bP,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eT(s,q,new A.D(B.BZ,A.x(A.a([o,B.aB,v,B.aQ,A.B(A.a([u,B.as,A.E(A.bI(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fiu(t,d),r),1)],w),B.m,s,B.e,B.i,0,s,s)],w),B.m,s,B.e,B.P,0,B.p),s),s,s,s,s,B.d8,s,new A.b8(p,B.a0),s)}}
C.abT.prototype={
a6(){return"WorksheetFrameStyle."+this.b}}
C.FV.prototype={
R(){return new C.bxp(null,null)}}
C.bxp.prototype={
Z(){var w,v=this
v.a2()
w=A.bm(null,D.bxr,null,1,null,v)
w.cM(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bzt()},
gbAZ(){switch(this.a.r.a){case 1:return A.a([B.aW,B.bP,B.b1],x.O)
case 2:return A.a([B.bv,B.aW,B.b1],x.O)
case 3:return A.a([B.aJ,B.cf,B.kf],x.O)
case 4:return A.a([B.hh,B.bP,B.fh],x.O)
case 0:return A.a([B.aW,B.bP,B.b1],x.O)}},
B(d){var w=A.Q(d),v=this.d
v===$&&A.c()
return new A.er(A.cb(v,new C.fiq(this,new C.u7(w.ax.a===B.J)),null),null)}}
C.ay8.prototype={
R(){return new C.bxq(null,null)}}
C.bxq.prototype={
Z(){var w,v=this
v.a2()
w=A.bm(null,B.no,null,1,null,v)
w.cM(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bzu()},
B(d){var w=this.d
w===$&&A.c()
return A.cb(w,new C.fir(this),null)}}
C.bxo.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bs(new A.a3(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
u.D(new A.iT(v))
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
w=A.xt(u)
t=A.a([],x.U)
w=new A.rm(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b9(A.jD(y.B));--r
q=new A.Bs(w,r)
w.ie()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aT1(d,q,r,o,0,0.2,4.2,0.92)
p.aT1(d,q,r,s,0.52,0.11,3.2,0.58)}},
aT1(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hI7(e.a.a,e,t,t+f*i,!0),r=A.bDg(s.gbu().a.getBounds())
$.S()
w=A.I()
w.b=B.a9
w.c=j
w.d=B.by
w.f=!0
v=this.f
u=k*this.e
w.sam(new A.a9(B.a5,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.I7,null).aA(0,r))
d.aH(s,w)},
av(d){return d.b!==this.b||d.d!==this.d}}
C.aOy.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.aOz.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.u7.prototype={}
C.atg.prototype={
R(){return new C.aFS()},
ge2(){return this.c}}
C.aFS.prototype={
Z(){var w=this
w.a2()
w.d=w.a.d
w.ahE()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.LB(w,v)
this.a1()},
ahE(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ahE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bDo(t.c,t.d.a),$async$ahE)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eRc(u,s))
return A.h(null,v)}})
return A.i($async$ahE,v)},
Qt(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eR3(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.LB(t,s),$async$Qt)
case 2:if(u.c!=null)u.m(new C.eR4(u))
return A.h(null,v)}})
return A.i($async$Qt,v)},
R_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$R_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.Q(p)
s=t.c
s.toString
w=3
return A.b(A.ck(null,null,!0,null,new C.eRa(t,new C.u7(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$R_)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8T(q),$async$R_)
case 6:case 5:t.m(new C.eRb(t,r))
w=7
return A.b(t.Qt(),$async$R_)
case 7:case 1:return A.h(u,v)}})
return A.i($async$R_,v)},
Wf(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.il1(r),$async$Wf)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eQZ(t,new C.rg(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Qt(),$async$Wf)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wf,v)},
chh(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hzY(t,new C.eR2(u),w,v)},
abB(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bH(new A.ay(v,2.5,B.r,-1),B.a0,B.a0,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b2x,w,w,B.n),w,22,w,w,w,w,w,22)},
aaE(d){return this.bMW(d)},
bMW(d){var w=0,v=A.j(x.H),u=this
var $async$aaE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eR1(u,d))
w=2
return A.b(u.Qt(),$async$aaE)
case 2:return A.h(null,v)}})
return A.i($async$aaE,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.Q(a2).ax.a===B.J,e=f?B.c2:B.iy,d=A.m(8),a0=A.X(Z.a10,f?B.bu:B.bn,g,g,g,16),a1=x.p
a0=A.aO(!1,d,!0,new A.D(B.GB,A.B(A.a([a0,B.bm,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eRd(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a_,g,B.b3,B.t,A.a([A.bx(A.m(22),C.aRp(!0,A.m(22),1/0,B.qq,g,d,1/0),B.ap),A.ap(10,A.di(D.bUC,D.fSN,h.gb2R(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h7,g,new A.b8(A.m(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aW.j(f?0.5:0.38),B.eU,22),new A.ac(-4,B.G,B.bP.j(0.2),B.I,32)],w)
u=A.m(17)
t=A.J(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.I,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bx(s,new A.an(B.a_,g,B.b3,B.t,A.a([C.aRp(!0,A.m(16),1/0,B.Oo,g,r.c,1/0),A.c4(g,new A.o(g,g,g,g,g,new A.a9(B.b0,B.b6,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bh),A.ap(g,h.abB(!0),g,g,8,g,8,g),A.ap(g,A.cAS(h.abB(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cAS(h.abB(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cAS(h.abB(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.di(D.bQy,D.fM9,h.gb2R(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h7,g,new A.b8(A.m(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c2L,B.n),g,g,g,g,B.m8,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bdg,B.o3,B.h3],u):A.a([B.b1,B.aW,B.bP],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aW.j(f?0.45:0.35),B.eU,24)],t)
r=A.m(22)
p=A.ap(g,A.X(B.jX,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.J(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h5,g,g,g)],a1),B.m,g,B.e,B.i,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bEV(h.d.gxf(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.Q,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cA,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.J(B.hj.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aJ.j(0.28),B.cH,14)],t)
j=B.aJ.j(0.22)
i=A.m(10)
u=A.p(g,A.bx(r,new A.an(B.a_,g,B.ab,B.t,A.a([p,new A.D(D.bCf,A.B(A.a([o,B.as,A.aI(!1,B.a2,!0,g,A.aO(!1,n,!0,A.eK(new A.D(V.w5,A.x(A.a([A.p(g,D.aqp,B.f,g,g,new A.o(j,g,A.J(B.aJ.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ck,g,g,g),B.fG,D.fAY],a1),B.m,g,B.e,B.P,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gchg(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.m,g,B.e,B.i,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.ay,B.aE,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aQ,w,B.Q,u,B.bx,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b2,A.di(Av.a2R,D.fyO,h.gbBr(),A.bo(B.aW,g,g,g,B.c,g,B.iq,g,new A.b8(A.m(12),B.a0),g,g,g))],a1),B.m,g,B.e,B.i,0,g,g),B.ae],a1)
w=h.d.d
if(w.length===0){w=f?B.e4:B.c
v=A.m(14)
u=A.J(f?B.ea:B.bO,B.r,1)
t=A.X(B.a1l,f?B.bu:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,g,g,g,B.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.W,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.m,g,B.e,B.i,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.ql,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eRe(h,new C.u7(f)),A.T(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.BO,A.as(A.n_(g,f?B.bu:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bn(!0,A.x(A.a([new A.D(B.BS,a0,g),A.E(A.ch(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yv,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bF6(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e4:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cH,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.b5h,u,u,u,u,u,u,u,5),l=B.aW.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.i6:B.ho,B.b1,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bJ
else{k=x.p
t=A.a([A.d(t,u,2,B.a1,u,u,u,A.l(u,u,r?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcXt()
v=A.B1(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bu:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b9,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aW.j(0.14),B.bP.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bEV(d.c*d.d,B.b1,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a5,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h7,u,u,u)
w=x.p
return A.p(u,A.bx(n,new A.El(A.B(A.a([m,A.E(new A.D(B.ako,A.B(A.a([l,B.bc,t,B.ad,k,A.aH(u,u,u,u,A.X(B.cx,(r?B.bu:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eR_(this,d),u,u,u,u,u,B.cc)],w),B.m,u,B.e,B.i,0,u,u),u),1)],w),B.ak,u,B.e,B.i,0,u,u),u),B.ap),B.f,u,D.b49,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d1,u,u,u,u)}}
C.adV.prototype={
EE(d){return this.bOj(d)},
bOj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pn(d,o,!1),$async$EE)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
w=4
return A.b(A.bP(Ai.BM,null,x.H),$async$EE)
case 4:s=t.d
w=5
return A.b(C.fR4(!0,o,s),$async$EE)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.GQ(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EE)
case 6:p=f
w=7
return A.b(A.pm(o,!1),$async$EE)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EE,v)},
a_S(d){return this.cxG(d)},
cxG(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_S=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pn(d,s,!1),$async$a_S)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).O(null)
A.hH(d,new C.ata(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pm(s,!1),$async$a_S)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_S,v)},
Qu(d){return this.ctJ(d)},
ctJ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(A.hH(d,D.aJX,!0,"NgmyWorksheetProjectScan",x.N),$async$Qu)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bEW(s),$async$Qu)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.U(D.fex)
w=1
break}q=C.hbS(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dV(p,x.H),$async$Qu)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Qu,v)},
a_T(d){return this.cFQ(d)},
cFQ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_T=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).O(null)
w=3
return A.b(C.bEs(),$async$a_T)
case 3:s=f
if(s==null){w=1
break}r=C.hbS(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dV(q,x.H),$async$a_T)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_T,v)},
B(d){var w=this,v=null,u=A.Q(d).ax.a===B.J,t=new C.u7(u),s=w.d.d.length,r=u?B.e4:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kt,36)],x.V),o=x.p
return A.bn(!0,new A.D(B.w4,A.p(v,A.x(A.a([w.cwf(d,t,s),new A.D(D.bBE,A.x(A.a([w.b5R(t,"QR restore"),B.W,A.B(A.a([w.b0R(t,!0,B.jD,B.aJ,B.aJ,new C.eRg(w,d),"Show to scan","QR code"),B.as,w.ayL(t,B.ji,B.b7,B.bq,new C.eRh(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.i,0,v,v),B.d4,w.b5R(t,"Backup files"),B.W,A.B(A.a([w.ayL(t,B.hR,B.aW,B.bP,new C.eRi(w,d),"Full copy","Backup file"),B.as,w.ayL(t,R.z7,B.aA,B.aT,new C.eRj(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.m,v,B.e,B.P,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cwf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f7,B.cQ,B.fM],k):A.a([B.b1,B.aW,B.bP],k)
w=A.ap(l,A.X(B.uG,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kK,l,l,l,36),l,l,l)
u=A.m(14)
t=A.J(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cH,12)],x.V)
r=this.d
s=A.p(l,C.aRp(!0,A.m(13),64,D.bLQ,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a1,l,l,l,K.aai,l,l,l)
r=C.bEV(r.gxf(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.J(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a_,l,B.ab,B.t,A.a([w,new A.D(D.bC1,A.x(A.a([v,A.B(A.a([s,B.es,A.E(A.x(A.a([u,B.au,t,B.Q,A.B(A.a([r,B.ad,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fP,l,l,l)],m),B.m,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aH(l,l,l,l,A.X(B.cx,B.c.j(0.85),l,l,l,l),l,l,l,new C.eRf(d),l,l,l,A.nP(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aS0,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.m,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.ay,B.aE,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b5R(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ad,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bu:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
b0R(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.aiX:B.aP
if(e)w=B.aJ.j(o?0.45:0.35)
else{w=o?B.ea:B.bO
w=w.j(o?0.8:1)}w=A.J(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aJ.j(0.12),B.cH,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.J(h.j(0.35),B.r,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rG,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aI(!1,B.a2,!0,r,A.aO(!1,q,!0,A.eK(new A.D(E.a_n,A.x(A.a([t,B.ae,u,B.bF,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bu:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cA,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
ayL(d,e,f,g,h,i,j){return this.b0R(d,!1,e,f,g,h,i,j)}}
C.ata.prototype={
R(){return new C.bmv()}}
C.bmv.prototype={
Z(){this.a2()
this.afy()},
afy(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$afy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bEX(p.c,p.d),$async$afy)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eQU(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eQV(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afy,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(d).ax.a===B.J,f=g?B.Bg:B.iy,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eK,g?B.ac:B.al,h,h,h,18),h,h,h,new C.eQW(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.N,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.Ag],u),B.m,h,B.e,B.i,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.f7,B.cQ,B.fM],s):A.a([B.b1,B.aW,B.bP],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aW.j(g?0.4:0.3),B.eU,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.de,B.K,h,h)
p=C.bEV(p.gxf(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ad,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fP,h,h,h)],u),B.m,h,B.b9,B.i,0,h,h)],u),B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.ay,B.aE,B.x,s,h,h),B.n),h,h,h,h,E.a_K,h,h,1/0)
t=g?D.boe:B.c
q=A.m(24)
p=A.J(w?B.aJ.j(0.4):B.aW.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.ds,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.UN,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.en8)
else{m=A.m(20)
l=A.J(B.aN,B.r,1)
o.push(A.p(h,A.q3(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aQ)
n=w?B.aJ:B.aW
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.J((w?B.aJ:B.aW).j(0.35),B.r,1)
k=w?B.OC:B.P8
k=A.X(k,w?B.aJ:B.aW,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ac:B.al,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.i,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iq,h,h,h))
return A.c6(h,f,A.bn(!0,A.x(A.a([new A.D(Af.NP,e,h),A.E(A.ch(A.x(A.a([s,B.aQ,A.p(h,A.x(o,B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.ui,h,h,1/0)],u),B.m,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.alw,h,h,B.ah),1)],u),B.m,h,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.atf.prototype={
R(){return new C.aFR(A.zz(B.N6,B.nU,B.uO))}}
C.aFR.prototype={
q(){this.d.q()
this.a1()},
aNz(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iX(w,d)},
cd5(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.iiU(t)
if(s!=null){this.aNz(s)
return}r=C.hqB(t)
if(r!=null)q=A.cU(r,p,0)
else q=!1
if(q){this.aNz(B.a.i(B.a.b5(r,B.a.cp(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eI(A.a([A.aH(t,t,t,t,A.X(u.f?B.uu:Aa.OJ,t,t,t,t,t),t,t,t,new C.eQY(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Bg,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fM2,t,t,t,1,t,!0),q=A.zy(u.d,B.bX,u.gcd4()),p=A.m(28)
p=A.as(A.p(t,t,B.f,t,t,new A.o(t,t,A.J(B.aW,B.r,3),p,A.a([new A.ac(2,B.G,B.aW.j(0.35),B.I,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c6(r,B.w,new A.an(B.a_,t,B.b3,B.t,A.a([q,p,A.ap(32,A.p(t,D.fKO,B.f,t,t,new A.o(w,t,A.J(B.aW.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jh,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aKN.prototype={
a6(){return"_WorksheetTab."+this.b}}
C.Ou.prototype={
R(){return new C.aFT(D.aca,A.a([],x.D))},
bv(){return this.r.$0()},
ge2(){return this.c}}
C.aFT.prototype={
gcDG(){return J.bG4(this.e,0,new C.eRG())},
Z(){this.a2()
$.aV.bZ$.push(this)
this.vY()},
q(){$.aV.hS(this)
this.a1()},
jg(d){if(d===B.fK)this.vY()},
vY(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vY=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Db(q.a.c).da(0,B.jT),$async$vY)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eRC(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eRD(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vY,v)},
Ib(d){return this.bL3(d)},
bL2(){return this.Ib(null)},
bL3(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ib=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.il3(l,d),$async$Ib)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.ly(l,r,q,D.dhW,new A.V(Date.now(),0,!1))
w=4
return A.b(C.LB(t.a.c,p),$async$Ib)
case 4:o=f
w=5
return A.b(t.vY(),$async$Ib)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.U(D.fbE)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gS(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.U(D.fdr)
else n.K(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EI(m)
case 1:return A.h(u,v)}})
return A.i($async$Ib,v)},
EI(d){return this.ch2(d)},
ch2(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$EI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hH(s,new C.atg(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$EI)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.LB(u.a.c,t),$async$EI)
case 5:case 4:w=6
return A.b(u.vY(),$async$EI)
case 6:return A.h(null,v)}})
return A.i($async$EI,v)},
vL(d){return this.c0j(d)},
c0j(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bEs(),$async$vL)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hH(r,D.aJX,!0,"NgmyWorksheetProjectScan",x.N),$async$vL)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bEW(q),$async$vL)
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
break}p=C.hbS(s)
w=15
return A.b(C.LB(t.a.c,p),$async$vL)
case 15:o=f
w=16
return A.b(t.vY(),$async$vL)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.U(D.fdw)
w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EI(p)
case 1:return A.h(u,v)}})
return A.i($async$vL,v)},
Ob(d){return this.bJI(d)},
bJI(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ob=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ck(null,null,!0,null,new C.eRn(d),s,null,!0,!0,x.y),$async$Ob)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oU(t.a.c,A.a([],x.D)),$async$Ob)
case 6:w=7
return A.b(t.vY(),$async$Ob)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.fbJ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ob,v)},
chf(d){var w=this.c
w.toString
A.bV(B.L,null,new C.eRw(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b6s(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jM
else w=B.c
v=A.m(16)
u=A.J(p?B.ea:B.bO,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aI(!1,B.a2,!0,r,A.aO(!1,q,!0,A.p(r,A.x(A.a([s,B.ae,t,B.bF,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bu:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.w3,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a0n(d,e){return this.ch3(d,e)},
ch3(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0n=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(B.L,null,new C.eRr(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0n)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hzY(r,new C.eRs(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Od(d,e),$async$a0n)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0n,v)},
b3t(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.ax
else t=h.a?B.aP:B.av
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bu:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aI(!1,B.a2,!0,u,A.aO(!1,u,!0,new A.D(B.BY,A.B(A.a([s,B.bc,t,A.X(B.eE,w?B.bu:B.bn,u,u,u,u)],v),B.m,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
cnY(d,e,f,g,h,i){return this.b3t(!1,d,e,f,g,h,i)},
Od(d,e){return this.bJS(d,e)},
bJS(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Od=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.li(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Od)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bDa(t.a.c,d.a),$async$Od)
case 6:w=7
return A.b(t.vY(),$async$Od)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Od,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===B.J,n=new C.u7(o),m=o?B.c2:B.iy
if(q.f)o=D.bb4
else{w=q.bEe(n)
v=q.c_n(n)
u=q.gbBl()
if(o)t=B.jM
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ae,v,B.aQ,new C.FV(A.p(p,A.B(A.a([q.aCi(P.On,"Projects",n,D.aca),q.aCi(B.wi,"Cashier",n,D.b_h),q.aCi(B.GV,"Family Tree",n,D.huB)],r),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ev,0.95,u,p),B.bx],r)
w=q.d
if(w===D.aca){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.av,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b2,new C.ay8(q.gaRO(),p)],r),B.m,p,B.e,B.i,0,p,p),B.aB,q.co_(n)],r))}else{o=q.a
if(w===D.b_h)u.push(new C.ap8(o.c,n,p))
else{w=q.r
u.push(new C.aqh(o.c,o.d,o.e,o.f,new C.eRJ(q),new C.eRK(q),new A.bR(w,x.b4)))}}o=A.ch(A.x(u,B.E,p,B.e,B.i,0,B.p),B.t,p,B.y,p,Al.NI,p,p,B.ah)}return A.c6(p,m,A.bn(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bEe(d){var w=null,v=A.m(8),u=d.a,t=A.X(Z.a10,u?B.bu:B.bn,w,w,w,16)
return A.aO(!1,v,!0,new A.D(B.kL,A.B(A.a([t,B.bm,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bu:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eRk(this),w,w,w,w,w,w,w)},
gbBl(){switch(this.d.a){case 0:return D.abm
case 1:return D.hjy
case 2:return D.abn}},
c_n(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aW.j(0.35),B.cy,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bWv,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bc,D.bGw,A.aI(!1,B.a2,!0,w,A.aO(!1,A.m(12),!0,A.p(w,D.bTV,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eRo(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.E,w,B.e,B.i,0,w,w),r=B.b1.j(0.55),q=A.m(12)
return new C.FV(A.p(w,A.x(A.a([new A.D(E.a_t,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.B1(this.gcDG()),w,w,w,w,w,w,D.fv2,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.ue,B.jh,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(B.aW,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.hjx,w)},
aCi(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aW:B.L,q=A.m(12),p=t?A.J(B.c.j(0.55),B.r,2):A.J(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aW.j(0.42),B.cH,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bn
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bn
return A.E(A.aI(!1,B.a2,!0,u,A.aO(!1,s,!0,A.cY(u,A.B(A.a([w,B.eg,new A.dr(1,B.cn,A.d(e,u,1,B.a1,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b9,B.i,0,u,u),u,u,B.cu,new A.o(r,u,p,q,o,u,B.n),B.iC,u,u,u,u,B.GC,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eRF(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
co_(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.e4:B.c
u=A.m(15)
t=A.p(p,D.bU0,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aW.j(0.5),B.eU,28)],x.V),D.c5f,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.FV(A.p(p,A.x(A.a([t,B.d4,s,B.Q,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.dT,A.B(A.a([A.E(q.aTn(B.ji,"Scan QR",new C.eRz(q),d),1),B.as,A.E(q.aTn(R.z7,"Upload file",new C.eRA(q),d),1)],r),B.m,p,B.e,B.i,0,p,p),B.aB,A.bI(D.fWt,p,q.gaRO(),A.bo(B.aW,p,p,p,B.c,B.h0,p,p,new A.b8(A.m(12),B.a0),p,p,p))],r),B.m,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bD6,1.05,D.abm,p)}w=J.b6(q.e,new C.eRB(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.FV(A.x(w,B.m,p,B.e,B.i,0,B.p),16,B.bT,1,D.abm,p)},
aTn(d,e,f,g){var w=null,v=B.aW.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.J(B.aW.j(0.45),B.r,1)
return A.aI(!1,B.a2,!0,u,A.aO(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.b1,w,w,w,26),B.Q,A.d(e,w,w,w,w,w,w,D.ftk,B.K,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.akh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
cnZ(d,e){var w,v,u=null,t=e.a,s=t?B.e4:B.c,r=A.m(14),q=A.J(t?B.ea:B.bO,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.en,10)],x.V),o=A.m(14),n=t?B.bu:B.bn
n=A.bx(B.WQ,new A.fH(1.7777777777777777,C.aRp(!0,B.fL,1/0,P.On,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.B1(d.gxf()),u,u,u,u,u,u,D.fri,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.p(u,A.aI(!1,B.a2,!0,u,A.aO(!1,o,!0,A.x(A.a([n,new A.D(B.bD,A.B(A.a([v,A.aH(u,u,u,u,A.X(Am.a22,t?B.bu:B.bn,u,u,u,u),u,u,u,new C.eRx(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eRy(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.ed,u,u,u,1/0)}}
C.bze.prototype={}
C.rg.prototype={
ah(){var w=this,v=w.c,u=w.d
return A.H(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcXt(){var w,v,u,t,s=this.c
if(s===B.k.jl(s))w=B.o.u(B.k.N(s))
else{v=B.k.ac(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.ly.prototype={
gxf(){return B.d.cI(this.d,0,new C.cD6())},
ah(){var w=this,v=w.d,u=A.T(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.cD5(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ae()],x.N,x.z)},
bdJ(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.ly(w.a,w.b,v,u,w.e)},
bdr(d){return this.bdJ(d,null)},
Td(d){return this.bdJ(null,d)}}
C.HZ.prototype={
a6(){return"FamilyGender."+this.b}}
C.hW.prototype={
ah(){var w=this
return A.H(["id",w.a,"name",w.b,"gender",C.hvC(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aF5(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hW(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.alm.prototype={
a6(){return"FamilyTreeAccessRole."+this.b}}
C.kP.prototype={
gapC(){var w=this.f
return new A.Z(w,new C.bRt(),A.T(w).k("Z<1>")).gL(0)},
ah(){var w=this,v=w.f,u=A.T(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.bRs(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ae(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ibg(w.y),"games",w.z],x.N,x.z)},
wC(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kP(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bdI(d,e){var w=null
return this.wC(w,w,w,d,e,w,w,w,w)},
cMV(d,e,f,g,h,i,j){return this.wC(d,e,null,f,g,h,i,j,null)},
aFa(d,e){var w=null
return this.wC(w,w,w,w,d,w,w,e,w)},
cMX(d,e,f,g,h,i,j,k){return this.wC(d,e,null,f,g,h,i,j,k)},
cLp(d){var w=null
return this.wC(w,w,w,w,w,w,w,d,w)},
cLN(d){var w=null
return this.wC(w,w,w,w,w,w,w,w,d)},
bdl(d){var w=null
return this.wC(w,w,d,w,w,w,w,w,w)},
aEW(d){var w=null
return this.wC(w,w,w,w,w,d,w,w,w)},
cMr(d,e,f){var w=null
return this.wC(w,d,w,w,e,w,w,f,w)},
cLc(d){var w=null
return this.wC(w,w,w,d,w,w,w,w,w)},
cM_(d,e){var w=null
return this.wC(d,w,w,w,w,w,e,w,w)}}
C.cD7.prototype={
a6(){return"WrapAlignment."+this.b}}
C.cD8.prototype={
a6(){return"WrapCrossAlignment."+this.b}}
C.aHY.prototype={}
C.ba_.prototype={
bx(d){this.a=d.a
this.b=d.b},
cW(d){var w=new C.ba_()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b0(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b9Z.prototype={
gwu(){return!0},
gGg(){return this.z.b<this.b.length},
aV0(d){switch(0){case 0:return d.a.c}},
aUI(d){switch(0){case 0:return d.a.d}},
bTM(d,e){switch(0){case 0:return new A.hS(d,e)}},
bT9(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hc(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iK(0,0,B.o.E(0,b5.a,b5.b),B.o.E(0,b5.c,b5.d))
return}w=A.HK(b4)
switch(0){case 0:v=b5.b
u=new A.kL(0,v,0,1/0)
t=w===B.UE
break}s=A.a([],x.gZ)
r=A.U(x.gF,x.S)
for(b3=b1.z,q=B.d.fL(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.hc(b4,u,!0)
f=b1.aV0(g)
f.toString
e=b1.aUI(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHY(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHY(k,j,i))}d=s.length
switch(0){case 0:q=b5.cA(new A.hS(m,l))
a0=q.a
a1=q.b
b1.a=new A.iK(0,0,a0,a1)
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
a8=b1.aV0(g)
e=b1.aUI(g)
e.toString
a9=b1.bT9(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bTM(a6,a3+a9)
b0=g.a
g.a=new A.iK(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h6(d){var w,v,u,t,s,r=this
r.lt(d)
w=d.b
w.im()
v=A.ds()
u=r.a
v.eg(u.a,u.b,0,1)
w.pc(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].h6(d)
w.nt(0)},
GJ(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
im(){return this.z}}
C.bxs.prototype={}
var z=a.updateTypes(["aB<~>()","R(hW)","~()","R(kP)","R(nq)","a8<n,@>(kP)","G(kP,kP)","G(hW,hW)","n(hW)","kP(a8<@,@>)","R(ly)","nq(a8<@,@>)","a8<n,@>(nq)","R(uE)","uE()","G(hW)","ai<hW>()","R(zg)","a_r(Y)","n?(hW)","eJ<n?>(hW)","aB<~>(ly)","R(rg)","a8<n,@>(hW)","hW(a8<@,@>)","G(ly,ly)","R(afd)","~(bb)","v(ow)","G(G,a9l)","R(qB<G>)","~(qB<G>)","Tc(Y)","R(Mf)","R(uD)","~(hW)","n(n)","Vy(Y)","Tb(Y)","adA(Y)","Zn(Y)","hW(hW)","cN(bA<n,G9>)","cN(Kp)","ZR(Y)","G?(hW)","hW()","R(Kp)","D(hW)","~(HZ)","ZN(Y)","v(HZ,n,a0)","R(af6)","bA<n,ai<a8<n,@>>>(n,ai<nq>)","ZP(Y)","+count,id,name(G,n,n)(kP)","n(kP)","a_M(Y)","a_N(Y)","R(lQ)","lQ()","YW(Y)","a1z(Y)","Zp(Y)","Zo(Y)","~(G)","~(n,ln?)","v(rg)","adV(Y)","~(md)","aB<~>([n?])","K(K,ly)","v(ly)","K(K,rg)","a8<n,@>(rg)","rg(a8<@,@>)","ai<ln>()","uD()","n(V)","ly(a8<@,@>)","cv(HY)","n(ly)","a8<n,@>(ly)","G(nq,nq)","kP(a8<n,@>)","kP(kP)"])
C.fJF.prototype={
$1(d){return d.a+" "+d.b},
$S:128}
C.fJE.prototype={
bmS(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.r8(s,d,B.hS,"book",E.Gf),$async$$1)
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
$1(d){return this.bmS(d)},
$S:316}
C.fJG.prototype={
$1(d){return d.b},
$S:128}
C.fT7.prototype={
$1(d){var w=null
return A.eT(w,B.L,new H.PS(this.a,this.b,w),w,w,0,B.a_o,B.d8,w,w,w)},
$S:49}
C.fxB.prototype={
$1(d){return d!=null},
$S:221}
C.fxC.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:221}
C.fxH.prototype={
$1(d){if(this.a)return new A.t(d.a*520,d.b*160)
return d},
$S:168}
C.fHo.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fd(d,w,w,w,A.hd(w,B.t6,w,w,w,w,w,w,w,B.dx,w,w,10.5,w,B.ew,w,!0,w,w,w,w),w),u=f?B.ew:B.wc
return new A.o_(D.byv,A.aa9(A.a([new A.fX(130,w,v),new A.zf(1,B.GO,A.fd(e,w,w,w,A.hd(w,g==null?D.epx:g,w,w,w,w,w,w,w,B.dx,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.y9,B.lM))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1937}
C.fHn.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vN(999)
f=A.xk(A.lL(h,A.fd("Cashier",h,h,h,A.hd(h,D.A1,h,h,h,h,h,h,h,B.dx,h,h,10,h,B.ew,h,!0,h,h,h,h),h),h,new A.kM(D.epo,h,f,B.hV,h),h,h,D.bz0,h))
w=A.xk(A.fd("Debt receipt",h,h,h,A.hd(h,h,h,h,h,h,h,h,h,B.dx,h,h,22,h,B.ew,h,!0,h,h,h,h),h))
v=A.xk(A.fd(C.x2(new A.V(Date.now(),0,!1),!0),h,h,h,D.a9Q,h))
u=A.vN(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fd(s,h,h,h,A.hd(h,h,h,h,h,h,h,h,h,B.dx,h,h,14,h,B.ew,h,!0,h,h,h,h),h)
r=A.fd("Person who owes",h,h,h,D.a9Q,h)
q=A.vN(10)
p=x.Z
u=A.lL(h,A.z9(A.a([s,new A.fX(h,2,h),r,new A.fX(h,10,h),A.lL(h,A.z9(A.a([A.fd("Amount owed",h,h,h,D.a9Q,h),new A.fX(h,2,h),A.fd(A.B1(t.c),h,h,h,A.hd(h,D.A1,h,h,h,h,h,h,h,B.dx,h,h,20,h,B.ew,h,!0,h,h,h,h),h)],p),B.rw,B.lM),h,new A.kM(B.pv,h,q,B.hV,h),h,h,D.byb,1/0)],p),B.rw,B.lM),h,new A.kM(E.aLh,h,u,B.hV,h),h,h,D.bA7,1/0)
q=new A.nI(D.epr,0.9,B.l_)
r=A.vN(12)
s=i.c
o=s.$2("Original due",C.x2(t.r,!1))
n=s.$2("Current due",C.x2(t.f,!1))
m=i.d
l=new A.nI(m,1.1,B.l_)
k=A.vN(8)
j=i.a
k=A.a([o,n,new A.fX(h,6,h),A.lL(h,A.xk(A.fd(t.gaM4(),h,h,h,A.hd(h,m,h,h,h,h,h,h,h,B.dx,h,h,11,h,B.ew,h,!0,0.5,h,h,h),h)),h,new A.kM(h,new A.pQ(l,l,l,l),k,B.hV,h),h,h,D.bz8,1/0),new A.fX(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.A1))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.A1))
else{n=A.fd("Missed days ("+n+")",h,h,h,A.hd(h,B.t6,h,h,h,h,h,h,h,B.dx,h,h,10.5,h,B.ew,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,SM>")
o=A.C(new A.N(o,new C.fHm(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fX(h,4,h),n,new A.fX(h,6,h),new C.b9Z(5,5,new C.ba_(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fX(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fX(h,8,h),w,new A.fX(h,3,h),v,new A.fX(h,16,h),u,new A.fX(h,10,h),A.lL(h,A.z9(k,B.y9,B.lM),h,new A.kM(h,new A.pQ(q,q,q,q),r,B.hV,h),h,h,B.aks,1/0)],p)
w=j.a
if(w!=null){v=new A.nI(B.Jn,1,B.l_)
B.d.v(f,A.a([new A.fX(h,16,h),A.fd("Debtor signature",h,h,h,A.hd(h,B.t6,h,h,h,h,h,h,h,B.dx,h,h,10,h,B.ew,h,!0,h,h,h,h),h),new A.fX(h,6,h),A.lL(h,new A.Ig(w,B.X_,h,h),h,new A.kM(h,new A.pQ(v,v,v,v),A.vN(6),B.hV,h),82,h,B.NN,1/0)],p))}f.push(new A.fX(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fd(w,h,h,h,D.fjM,h))
f.push(new A.fX(h,18,h))
f.push(A.xk(A.fd("NGMY.ORG",h,h,h,A.hd(h,D.A1,h,h,h,h,h,h,h,B.dx,h,h,14,h,B.ew,h,!0,1.8,h,h,h),h)))
return f},
$S:425}
C.fHm.prototype={
$1(d){var w=null,v=new A.nI(D.Jo,0.7,B.l_),u=A.vN(999)
return A.lL(w,A.fd(C.x2(d,!1),w,w,w,A.hd(w,D.Jo,w,w,w,w,w,w,w,B.dx,w,w,9.5,w,B.ew,w,!0,w,w,w,w),w),w,new A.kM(w,new A.pQ(v,v,v,v),u,B.hV,w),w,w,D.bEx,w)},
$S:1938}
C.c6H.prototype={
$1(d){var w=null,v=B.bB.j(0.08),u=A.m(999),t=A.J(B.bB.j(0.28),B.r,1)
return A.p(w,A.d(C.x2(d,!1),w,w,w,w,w,w,D.fqN,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eJ,w,w,w)},
$S:1939}
C.fTE.prototype={
$1(d){var w=null,v=A.aG(d,B.bZ,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bXr,w,w,w,new C.fTB(d),w,w,w,w,w,B.cc),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eT(w,B.L,new A.cT(new A.aZ(0,380,0,v.a.b*0.9),A.aI(!1,B.a2,!0,u,new A.D(B.a_c,A.x(A.a([new A.bM(B.a8,w,w,t,w),new A.dr(1,B.cn,A.ch(A.x(A.a([new A.er(new C.aZV(r,w),s),B.W,A.B(A.a([A.E(A.ex(B.zf,D.fSI,new C.fTC(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.ff,w,new A.b8(A.m(14),B.a0),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ad,A.E(A.di(B.a2H,D.fP6,new C.fTD(r,d),A.bo(B.b1,w,w,w,B.c,w,B.ff,w,new A.b8(A.m(14),B.a0),w,w,w)),1)],p),B.m,w,B.e,B.i,0,w,w)],p),B.m,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.P,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.ai),w),w,w,0,Ar.a_C,B.d8,w,w,w)},
$S:49}
C.fTB.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fTC.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aV.al$.x.h(0,t.a)
m=m==null?null:m.gbd()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m6(2.5),$async$$0)
case 4:w=3
return A.b(e.hx(B.ha),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eS(B.dK.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.ar(o,0,32)
w=5
return A.b(A.tb(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fTD.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fO_(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fTw.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eT(w,B.av,A.x(A.a([new A.D(D.bzW,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.n3,w,w,w),1),A.aH(w,w,w,w,B.lh,w,w,w,new C.fTu(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),w),new A.dr(1,B.cn,new A.D(B.eY,A.bx(A.m(14),A.fT(t,B.A,w,w,B.ci,B.dz,!1,w,!1,w,w),B.ap),w),w),new A.D(B.Nr,new A.a4(1/0,w,A.di(B.ou,D.aVf,new C.fTv(t,this.c,d),A.bo(B.b1,w,w,w,B.c,w,w,w,new A.b8(A.m(14),B.a0),w,w,w)),w),w)],u),B.m,w,B.e,B.P,0,B.p),w,w,w,B.NE,B.d8,w,new A.b8(v,B.a0),w)},
$S:49}
C.fTu.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fTv.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.tb(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fTI.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eT(w,B.av,new A.D(D.bA3,A.x(A.a([A.B(A.a([D.bFB,A.aH(w,w,w,w,B.lh,w,w,w,new C.fTG(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),B.Q,new A.er(A.bx(A.m(14),A.p(w,A.b4(w,w,w,new C.bc8(s.ax,w),B.aw),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ae,new A.a4(1/0,w,A.di(B.ou,D.aVf,new C.fTH(t,s,d),A.bo(B.b1,w,w,w,B.c,w,w,w,new A.b8(A.m(14),B.a0),w,w,w)),w)],u),B.m,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d8,w,new A.b8(v,B.a0),w)},
$S:49}
C.fTG.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fTH.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aV.al$.x.h(0,t.a)
n=n==null?null:n.gbd()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m6(2.5),$async$$0)
case 4:w=3
return A.b(e.hx(B.ha),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.ar(p,0,32)
r=J.eS(B.dK.gaS(s))
w=5
return A.b(A.tb(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fBW.prototype={
$1(d){return d.a===this.a},
$S:249}
C.dMU.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dMF.prototype={
bm5(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e4:B.c
s=u.a
w=2
return A.b(A.bV(t,null,new C.dMI(s,q,e),p,!0,!0,!1,B.JF,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dMJ(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bm5(d,e)},
$S:1940}
C.dMI.prototype={
$1(d){var w,v=null,u=this.c===B.wM,t=u?D.doN:D.dkl
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bn(!0,new A.D(O.akZ,A.x(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bu:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae,A.io(!0,v,v,B.y,D.fak,new C.dMH(this.a,w,t,d),t.length,v,B.dS,B.ah,!0)],x.p),B.ak,v,B.e,B.P,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:27}
C.dMH.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cQ.j(0.14)
else w=t.b.a.d.a?B.N:B.aP
v=A.m(14)
if(q)u=B.cQ
else u=(t.b.a.d.a?B.bu:B.bn).j(0.16)
u=A.J(u,B.r,q?1.6:1)
return A.aO(!1,p,!0,A.p(B.A,C.aZU(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dMG(t.d,r),s,s,s,s,s,s,s)},
$S:197}
C.dMG.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.dMJ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dMD.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:91}
C.dME.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cK(B.cu,e,v)
return new A.d1(e,!1,A.iu(B.A,A.as(A.aI(!1,B.a2,!0,v,new A.e1(new C.dMC(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bg(t,new A.bq(0.96,1,u),u.k("bg<bO.T>"))),v)},
$S:33}
C.dMC.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.bZ,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e4:B.c,f=A.m(14),e=A.J((h?B.bu:B.bn).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aO(!1,v,!0,new A.D(B.ev,A.X(B.cx,i.a.d.a?B.bu:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dMn(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aTU("Name")
r=l.a
q=r.d==null?k:new C.dMo(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bo:B.m1
n=A.J(B.cQ.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Y,h,k,!0,B.t,k,A.aN(),w,k,k,k,k,k,2,s.bdB(new A.D(B.fu,A.aO(!1,p,!0,A.p(B.A,C.aZU(m==null?"\ud83d\udc64":A.fIc(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ck,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kW,k,B.a9F,k,k)
v=A.a([v,B.ae,t,B.Q,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aUy("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dMp(r,a0),r.d===B.wM),1),B.ad,A.E(i.aUy("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dMu(r,a0),r.d===B.a6u),1)],u),B.m,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.Q,new A.bM(B.a5,k,k,A.hs(D.bVK,D.fR_,new C.dMv(r,l.e,a0),A.fw(k,k,k,k,k,k,k,k,k,k,k,B.cQ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cc)),k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uH(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Y,!1,k,!0,B.t,k,A.aN(),l.f,k,k,k,k,k,2,i.aTV("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.e1,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.W)
t=i.a.d.a
s=t?B.N:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.J((t?B.bu:B.bn).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.x2(r.a,!1)
v.push(A.aI(!1,B.a2,!0,q,A.aO(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bF,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bSs],u),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dMw(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.v(v,A.a([B.Q,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Y,!1,k,!0,B.t,k,A.aN(),l.r,k,k,k,k,k,2,i.aTU("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ae)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b1S(r.b.length!==0,B.mM,new C.dMx(r,i,a0),new C.dMy(r,a0),"Upload from gallery","ID photo"))
v.push(i.b1S(r.c.length!==0,D.bLO,new C.dMz(r,i,d,a0),new C.dMA(r,a0),"Camera or gallery","Selfie"))
v.push(B.Q)
t=l.w
v.push(new Aq.a7Z("Signature (optional)",t,new C.dMB(a0),new C.dMq(a0,t),new C.dMr(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bn
s=(i?B.bu:B.bn).j(0.28)
s=A.E(A.dT(E.aV8,new C.dMs(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.rC,k,new A.b8(A.m(10),B.a0),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cQ,k,k,k,B.c,k,B.rC,k,new A.b8(A.m(10),B.a0),k,k,k)
v.push(A.B(A.a([s,B.ad,A.E(A.bI(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vn,k,k,k),k,new C.dMt(r,w,d),t),1)],u),B.m,k,B.e,B.i,0,k,k))
return A.p(k,A.ch(A.x(v,B.ak,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aZ(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.rE,B.jh,k,k,360)},
$S:164}
C.dMn.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dMo.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dMp.prototype={
$0(){return this.b.$1(new C.dMm(this.a))},
$S:0}
C.dMm.prototype={
$0(){var w=this.a
w.d=B.wM
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dMu.prototype={
$0(){return this.b.$1(new C.dMl(this.a))},
$S:0}
C.dMl.prototype={
$0(){var w=this.a
w.d=B.a6u
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dMv.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dMw.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.x6(null,u.b,A.c3(2020,1,1,0,0,0,0,0),null,s,A.c3(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dMk(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dMk.prototype={
$0(){var w=this.b
return this.a.a=A.c3(w.gck(),w.gcg(),w.gcw(),0,0,0,0,0)},
$S:0}
C.dMx.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.PO(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dMj(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dMj.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dMy.prototype={
$0(){return this.b.$1(new C.dMi(this.a))},
$S:0}
C.dMi.prototype={
$0(){return this.a.b=""},
$S:0}
C.dMz.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e4:B.c
w=3
return A.b(A.bV(q,null,new C.dMg(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.PO(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dMh(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dMg.prototype={
$1(d){var w=null
return A.bn(!0,A.x(A.a([A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.aqg,w,w,w,w,new C.dMa(d),!1,w,w,w,w,w,w,w,D.fH8,w,w,w),A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.aqe,w,w,w,w,new C.dMb(d),!1,w,w,w,w,w,w,w,D.fO8,w,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),!0,!1,B.af,!0,!0)},
$S:27}
C.dMa.prototype={
$0(){A.a5(this.a,!1).O("camera")
return null},
$S:0}
C.dMb.prototype={
$0(){A.a5(this.a,!1).O("gallery")
return null},
$S:0}
C.dMh.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dMA.prototype={
$0(){return this.b.$1(new C.dMf(this.a))},
$S:0}
C.dMf.prototype={
$0(){return this.a.c=""},
$S:0}
C.dMB.prototype={
$0(){return this.a.$1(new C.dMe())},
$S:0}
C.dMe.prototype={
$0(){},
$S:0}
C.dMq.prototype={
$0(){return this.a.$1(new C.dMd(this.b))},
$S:0}
C.dMd.prototype={
$0(){return B.d.aa(this.a)},
$S:0}
C.dMr.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ai8(u.a,null,null,new C.dMc(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dMc.prototype={
$4(d,e,f,g){this.a.$1(new C.dM9(this.b,d))},
$S:435}
C.dM9.prototype={
$0(){var w=this.a
B.d.aa(w)
B.d.v(w,this.b)},
$S:0}
C.dMs.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dMt.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.U(D.ffo)
return}if(w.a.d==null){w.c.K(x.q).f.U(D.fch)
return}A.a5(w.c,!1).O(!0)},
$S:0}
C.dMX.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:91}
C.dMY.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e4:B.c,n=A.m(14),m=A.J((p?B.bu:B.bn).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.B1(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bu:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zg(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zg(r).length>0?B.bB:B.cQ,r,r,r,r,r,r,r,r,12,r,r,B.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bn
t=(q?B.bu:B.bn).j(0.28)
s=x.p
return new A.d1(e,!1,A.as(A.aI(!1,B.a2,!0,r,A.p(r,A.x(A.a([p,B.Q,v,u,B.aB,A.B(A.a([A.E(A.dT(B.nO,new C.dMV(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.jU,r,new A.b8(A.m(10),B.a0),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ad,A.E(A.bI(D.fOy,r,new C.dMW(d),A.bo(B.cQ,r,r,r,B.c,r,B.jU,r,new A.b8(A.m(10),B.a0),r,r,r)),1)],s),B.m,r,B.e,B.i,0,r,r)],s),B.ak,r,B.e,B.P,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.C0,E.a_t,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:33}
C.dMV.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dMW.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dMR.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dMS(r),p=r.a.d.a,o=p?B.e4:B.c,n=A.m(14),m=A.J((p?B.bu:B.bn).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a1,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.B1(l.c),s,s,s,s,s,s,D.fsm,s,s,s)],p),B.m,s,B.e,B.i,0,s,s)
w=A.iH((r.a.d.a?B.bu:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a1l,"View receipt",new C.dMK(r,d,l))
u=l.x!=null
t=u?B.pi:B.qt
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bA0,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dML(r,d,l)),q.$3$icon$label$onTap(B.Cc,"Edit",new C.dMM(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mM,"View / download ID",new C.dMN(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bLN,"View / download selfie",new C.dMO(r,d,l)))
if(l.gaGQ())p.push(q.$3$icon$label$onTap(Ae.a2x,"View / download signature",new C.dMP(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bB,B.eb,"Delete",new C.dMQ(r,d,l)))
p.push(B.au)
return A.bn(!0,new A.D(B.ue,A.p(s,A.x(p,B.m,s,B.e,B.P,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:27}
C.dMS.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.av
else w=d
return A.aO(!1,v,!0,new A.D(B.eS,A.B(A.a([A.X(e,w,v,v,v,20),B.bc,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1941}
C.dMK.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fTA(w,this.c)},
$S:0}
C.dML.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.Sy(this.c)},
$S:0}
C.dMM.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.Dk(this.c)},
$S:0}
C.dMN.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bFh(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dMO.prototype={
$0(){var w,v,u
A.a5(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bFh(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dMP.prototype={
$0(){A.a5(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fTF(w,this.c)},
$S:0}
C.dMQ.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.PN(0,this.c)},
$S:0}
C.dMZ.prototype={
$1(d){return d.x==null},
$S:249}
C.dN_.prototype={
$1(d){return d.x!=null},
$S:249}
C.dN0.prototype={
$2(d,e){return d+e.c},
$S:1942}
C.dN1.prototype={
$0(){return this.a.bBQ()},
$S:0}
C.dMT.prototype={
$0(){return this.a.afL(this.b)},
$S:0}
C.fCz.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fCA.prototype={
$0(){return B.d.gI(D.a3R)},
$S:z+77}
C.dcG.prototype={
$0(){var w=this.a
return w.m(new C.dcE(w,this.b))},
$S:0}
C.dcE.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dcF.prototype={
$0(){},
$S:0}
C.dcH.prototype={
$0(){var w=this.a.gc07()
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.fEW.prototype={
$1(d){return C.hg7(A.a2(d,x.N,x.z))},
$S:z+11}
C.fEX.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fEY.prototype={
$2(d,e){var w=A.ce(d.a,null),v=A.ce(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+83}
C.fSd.prototype={
$1(d){return d.ah()},
$S:z+12}
C.h_z.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fBN.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bQa.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f1(e,v)?v:null},
$S:1943}
C.fSM.prototype={
$1(d){var w=this
return new C.ZP(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.ddl.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ddk(w,d))},
$S:z+80}
C.ddk.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dd9.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cL(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dd6.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dcI.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dcJ.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dda.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dcR.prototype={
$1(d){var w=null,v=A.Q(d).ax.a===B.J,u=v?B.e4:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ep(A.a([A.bN(!1,B.di,w,w,!0,w,w,w,new C.dcP(d),w,w),A.bI(B.x9,w,new C.dcQ(d),A.bo(B.nc,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.dcP.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dcQ.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dcS.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.E(w.r-1,-1,999)},
$S:0}
C.dd7.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dd8.prototype={
$0(){return B.d.gI(D.zr)},
$S:z+14}
C.dcN.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyC(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Tb(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dcO.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcT.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Zn(v,u,J.ad(w.d),null)},
$S:z+40}
C.dcU.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ddj.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aA(s,new C.Z4(r.y,r.gyC(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ddh(r),s,s,s,s,s,s,!1,B.a3)
else{w=e-1
v=J.r(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bbw(v,e,w,u,t,r.gbSe(),C.hvB(r.y.Q),r.gyC(0),s)
w=t}return A.cb(q,new C.ddi(r,e),new A.D(B.a_u,w,s))},
$S:1944}
C.ddi.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd3(t).ay){t=this.b
u=x.cy.a(B.d.gd3(u.f.f)).gv5(0)
w=t-(u==null?t:u)}else w=0
v=B.k.E(w,-1,0)
u=A.ds()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fI(v*3.141592653589793*0.5)
return A.fy(B.a5,A.db(e,B.k.E(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.ddh.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHX(B.qb,B.iV)},
$S:0}
C.dd3.prototype={
$0(){var w=this.a
return w.m(new C.dd2(w))},
$S:0}
C.dd2.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dd4.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).O(null)
return null},
$S:0}
C.dcK.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.ke.j(0.5),r=x.p,q=A.a([D.fFK,B.ae],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.Zt(d,B.e5,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Zt(d,I.ao9,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cL(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.ct,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kF.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.ct,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kF.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Zt(d,X.apf,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Zt(d,B.qA,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Zt(d,B.qA,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eT(u,E.Br,A.bn(!0,new A.D(Ad.yt,A.x(q,B.E,u,B.e,B.P,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.alo,B.d8,u,new A.b8(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:49}
C.dd5.prototype={
$0(){A.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.dcX.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cL(w.d)
return new C.ZR(v,J.cL(w.d),w.r+1,null)},
$S:z+44}
C.dcY.prototype={
$1(d){var w=null
return A.oC(!1,A.ep(w,w,w,E.Br,new A.jX(this.a,new C.dcW(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:327}
C.dcW.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a9k,B.oL,A.E(A.d(e,w,w,w,w,w,w,B.jo,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:746}
C.dcZ.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dd_.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:200}
C.dd0.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dd1.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Ba(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.S0(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dcV(s,t))
w=4
return A.b(s.la(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dcV.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ddc.prototype={
$1(d){var w=null
return A.oC(!1,A.ep(w,w,w,E.Br,new A.jX(this.a,new C.ddb(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:327}
C.ddb.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a9k,B.oL,A.E(A.d(e,w,w,w,w,w,w,B.jo,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:746}
C.ddd.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dde.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:200}
C.ddf.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:200}
C.ddg.prototype={
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
C.dcL.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bj5(B.qb,A4.Nf)},
$S:0}
C.dcM.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHX(B.qb,A4.Nf)},
$S:0}
C.df6.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.df7.prototype={
$1(d){var w=this.a
return w.m(new C.df5(w))},
$S:9}
C.df5.prototype={
$0(){return this.a.e="page"},
$S:0}
C.df8.prototype={
$1(d){var w=this.a
return w.m(new C.df4(w))},
$S:9}
C.df4.prototype={
$0(){return this.a.e="book"},
$S:0}
C.df9.prototype={
$1(d){var w=this.a
return w.m(new C.df3(w))},
$S:9}
C.df3.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dfa.prototype={
$0(){var w=this.a
return w.m(new C.df2(w,this.b))},
$S:0}
C.df2.prototype={
$0(){var w=this.b
this.a.d.saY(0,w)
return w},
$S:0}
C.dfb.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2e()
A.a5(this.b,!1).O(new A.bql(w,v))},
$S:0}
C.ddA.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.ddz.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.ZN(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.ddE.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.ddD.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b9f(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hc,v,v,v)
return A.ep(A.a([A.bN(!1,B.di,v,v,!0,v,v,v,new C.ddB(d),v,v),A.bI(B.x9,v,new C.ddC(d),A.bo(B.nc,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Br,w,v,v,v,v,D.fEv,v)},
$S:19}
C.ddB.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.ddC.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.ddF.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.ddG.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a4(s,t,w[u],t))
return A.ch(A.bY(B.bG,r,B.br,t,18,14),B.t,t,B.y,t,D.bAZ,t,t,B.ah)},
$S:287}
C.ddy.prototype={
$0(){return this.a.Qy(0,this.b)},
$S:0}
C.ddx.prototype={
$0(){return this.a.Q0(0,this.b)},
$S:0}
C.cLV.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cLW.prototype={
$0(){return B.d.gI(D.zr)},
$S:z+14}
C.cLX.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bS(0,new A.D(d,A.c4(w,new A.o(w,w,A.J(this.a.j(f),B.r,g),v,w,w,B.n),B.bh),w),0,0,0)},
$S:1946}
C.d4u.prototype={
$1(d){return this.a.m(new C.d4t(this.b,this.c))},
$S:9}
C.d4t.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d4T.prototype={
$1(d){return this.a.m(new C.d4G())},
$S:2}
C.d4G.prototype={
$0(){},
$S:0}
C.d4U.prototype={
$1(d){return this.a.m(new C.d4F())},
$S:2}
C.d4F.prototype={
$0(){},
$S:0}
C.d4V.prototype={
$0(){var w=this.a
return w.m(new C.d4E(w,this.b))},
$S:0}
C.d4E.prototype={
$0(){var w=this.a
return w.d=w.gof().FV(this.b.a)},
$S:0}
C.d4W.prototype={
$0(){var w=this.a
return w.m(new C.d4D(w,this.b))},
$S:0}
C.d4D.prototype={
$0(){var w=this.a
return w.d=w.gof().cKJ(this.b)},
$S:0}
C.d4X.prototype={
$1(d){return this.a.m(new C.d4C())},
$S:2}
C.d4C.prototype={
$0(){},
$S:0}
C.d4Y.prototype={
$0(){var w=this.a
return w.m(new C.d4B(w,this.b))},
$S:0}
C.d4B.prototype={
$0(){var w=this.a
return w.d=w.gof().cKO(this.b.a)},
$S:0}
C.d4Z.prototype={
$1(d){var w=this.a
return w.m(new C.d4O(w,d))},
$S:6}
C.d4O.prototype={
$0(){var w=this.a
return w.d=w.gof().cLI(this.b)},
$S:0}
C.d5_.prototype={
$1(d){var w=this.a
return w.d=w.gof().aEZ(d)},
$S:2}
C.d50.prototype={
$1(d){var w=this.a
return w.d=w.gof().cKR(d)},
$S:2}
C.d52.prototype={
$1(d){var w=this.a
return w.d=w.gof().cLG(d)},
$S:2}
C.d53.prototype={
$1(d){var w=this.a
return w.m(new C.d4N(w,d))},
$S:9}
C.d4N.prototype={
$0(){var w=this.a
return w.d=w.gof().cLx(this.b)},
$S:0}
C.d54.prototype={
$0(){var w=this.a,v=w.gof(),u=B.a.i(w.gyC(0).a.a),t=B.a.i(w.gaC6().a.a)
u=v.bdS(B.a.i(w.garP().a.a),t,u)
A.a5(this.b,!1).O(u)
return null},
$S:0}
C.bQk.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:8}
C.bQe.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bQd(w,d))},
$S:11}
C.bQd.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a4(0)}},
$S:0}
C.bQn.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bQf.prototype={
$0(){var w=this.a
w.Q=D.aZT
w.adu(1)
w.r.x=null},
$S:0}
C.bQg.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.aZT)return
w=new A.e4()
w.cY(u.as*13+u.a.e)
v=u.r
v.Q=3+w.ap(3)
v.z=D.d03[w.ap(6)]
v.as=u.f.a+2.6},
$S:0}
C.bQj.prototype={
$0(){var w=this.a
w.Q=D.abX
w.adu(2)
w.r.z=null},
$S:0}
C.bQi.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hsz
t.adu(3)
w=t.r
w.d=s
w.x="I say: "+t.gC5()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.ap(3)
w.z=s?D.d6t[v.ap(4)]:D.dre[v.ap(3)]
w.as=t.a+2.8},
$S:0}
C.bQl.prototype={
$0(){var w=this.a
w.Q=D.aZU
w.CW=this.b
w.cy=1
w.adu(4)
w.r.f=w.f.a+5},
$S:0}
C.bQm.prototype={
$0(){},
$S:0}
C.bQh.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).ik()},
$S:0}
C.bQb.prototype={
$0(){return this.a.KJ(this.b)},
$S:0}
C.bQc.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).ik()},
$S:0}
C.bRR.prototype={
$0(){var w=this
return w.a.QR(w.b,0,w.c,w.d)},
$S:0}
C.bRS.prototype={
$0(){var w=this
return w.a.QR(w.b,3,w.c,w.d)},
$S:0}
C.bRT.prototype={
$0(){var w=this
return w.a.QR(w.b,1,w.c,w.d)},
$S:0}
C.bRU.prototype={
$0(){var w=this
return w.a.bRG(w.b,w.c,w.d)},
$S:0}
C.bRV.prototype={
$0(){var w=this
return w.a.QR(w.b,4,w.c,w.d)},
$S:0}
C.bRW.prototype={
$0(){var w=this
return w.a.QR(w.b,2,w.c,w.d)},
$S:0}
C.bRX.prototype={
$0(){var w=this
return w.a.QR(w.b,5,w.c,w.d)},
$S:0}
C.bRY.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:747}
C.bRQ.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a5_[d],p=q.a.a7(0,new A.t(0,-q.b*1.2*124)),o=A.fx(r,r,3,r,A.cS(r,r,r,r,r,r,r,r,r,D.fjs,e),B.a4,B.bY,r,B.dA,B.bW)
o.o0(130)
w=o.b.a.c
w=p.aE(0,new A.t(0,w.gbb(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bs(A.bK(w,v.gbb(v)+12,u+18),B.hU)
u=this.a
v=t.eO(B.dC)
w=$.S()
s=A.I()
s.r=B.dm.gp(0)
u.az(v,s)
s=A.I()
s.r=D.q5.gp(0)
u.az(t,s)
w=new A.aF(w.r,B.ag,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.D(new A.aY(s-5,v))
w.D(new A.aq(s+1,p.b+1))
w.D(new A.aq(s+6,v))
w.D(new A.bt())
v=A.I()
v.r=D.q5.gp(0)
u.aH(w,v)
o.a3(u,new A.t(t.a+9,t.b+6))},
$S:748}
C.bQB.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.bQC.prototype={
$2(d,e){var w=this.a,v=B.o.aL(w.alY(d),w.alY(e))
if(v!==0)return v
return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.fqv.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h_q.prototype={
$2(d,e){if(e!=null)J.cc(this.a.c3(0,d,new C.h_r()),e)},
$S:z+66}
C.h_r.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h_s.prototype={
$1(d){return d!==this.a},
$S:3}
C.h_t.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h_u.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.h_p(this.c,d))},
$S:3}
C.h_p.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h_v.prototype={
$1(d){return d!==this.a},
$S:3}
C.h_w.prototype={
$1(d){return d!==this.a},
$S:3}
C.h_x.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.h_o(this.c,d))},
$S:3}
C.h_o.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fD5.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fRg.prototype={
$1(d){return d.Q},
$S:z+15}
C.fRh.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fzx.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fFR.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bLA.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h_Q.prototype={
$2(d,e){return B.o.aL(C.hrY(d),C.hrY(e))},
$S:210}
C.h_R.prototype={
$1(d){return d!==this.a},
$S:3}
C.fRM.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bJN.prototype={
$0(){var w=this.a
w.ch=!0
w.b7u()},
$S:0}
C.bJI.prototype={
$0(){},
$S:0}
C.bJO.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bJG.prototype={
$0(){},
$S:0}
C.bJH.prototype={
$0(){},
$S:0}
C.bJM.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b4(u,u,u,new C.bc9(t,u),B.aw),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.m(14)
s.push(A.ap(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fqZ,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bT,u,u,u),u,u,14,14,6,u))}return A.aA(B.c6,new A.an(B.a_,u,B.ab,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bJJ(t,e),u,u,u,u,u,u,u,new C.bJK(t,e),u,u,u,u,u,u,u,u,u,new C.bJL(t,e),u,u,u,u,!1,B.a3)},
$S:36}
C.bJJ.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:18}
C.bJL.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:22}
C.bJK.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:18}
C.bJF.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).ik()},
$S:0}
C.cnC.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cnD.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cnB(w))},
$S:0}
C.cnB.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cnE.prototype={
$0(){var w=this,v=w.a
v.giX()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cnF.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cnG.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cnH.prototype={
$0(){},
$S:0}
C.cnI.prototype={
$0(){var w=this.a
w.z=w.X2(++w.e)
w.Q=A.bZ(w.gkL()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cny.prototype={
$0(){return A.a5(this.a,!1).ik()},
$S:0}
C.cnz.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.giX().length,e=i/2,d=new C.cnA(i,f,h),a0=g.as,a1=A.a7(a0).k("bd<2>")
a0=A.C(new A.bd(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.cb(new A.h8(a0),new C.cnt(g,new A.t(e,56),f,d),j),0,0,0)
a1=this.b
w=g.giX().length!==0&&!B.d.t(g.giX(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.Q8(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cN(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.Mm(new C.cnu(g,u),new C.cnv(g,u),new C.cnw(g,u),j,j,new A.bR("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.t(a1,"not a child")?B.fa:B.be,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.giX().length!==0&&!B.d.t(g.giX(),-1)){a0=g.e+1>=g.gkL().length?"See my result":"Next family"
g=A.as(C.ul(a0,g.gq9(g),B.cI,B.jA,D.fq),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.X2(0):s).length))break
if(!B.d.t(g.giX(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.X2(0)
o=s}else o=s
n=s[u]
n=A.ee(B.A,new C.Q8(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.X2(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.qX(new A.bq(0,p,t),new C.cnx(),new S.DW(u,j,new C.Q8(l.b,k,62,!1,j),new A.kB(0.25,new C.Q8(m.b,k,62,!1,j),j),new A.k6(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a2,j,j),B.I,S.hvw(),!0,!0,j,j,j,j,j,j,!1,B.iF,j,new A.bR("chip-"+r,a0),w),B.b5,B.iW,j,new A.bR("t"+r+"-"+q,a0),v))}++u}g=A.bY(B.fI,a1,B.br,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a_,j,B.ab,B.t,e,j)},
$S:66}
C.cnA.prototype={
$1(d){return new A.t(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:735}
C.cnt.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.giX().length!==0&&!B.d.t(t.giX(),-1)
return A.b4(p,p,p,new C.bbF(q.b,o,v,w,p),B.aw)},
$S:59}
C.cnv.prototype={
$1(d){return this.a.giX()[this.b]===-1},
$S:z+30}
C.cnw.prototype={
$1(d){return this.a.cOy(this.b,d.a)},
$S:z+31}
C.cnu.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.giX()[t]!==-1,r=A.m(18),q=e.length!==0?B.cI.j(0.3):B.L
if(s)w=v
else w=A.J(e.length!==0?B.cI:B.jP,B.r,2)
u=s?A.lx(new C.cns(),A.as(new C.Q8(u.gaEr()[u.giX()[t]].b,u.gaEr()[u.giX()[t]].a,62,!1,v),v,v,v),B.lv,B.iW,v,v,new A.bq(0.3,1,x.X),x.i):D.b9H
return A.cY(v,u,v,v,B.b5,new A.o(q,v,w,r,v,v,B.n),B.a2,v,100,v,v,v,v,v,88)},
$S:1949}
C.cns.prototype={
$3(d,e,f){return A.ee(B.A,f,e,null,null)},
$S:112}
C.cnx.prototype={
$3(d,e,f){return A.dQ(f,new A.t(Math.sin(e*24)*8*(1-e),0))},
$S:112}
C.cMZ.prototype={
$1(d){return d>=1},
$S:120}
C.cCw.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkL()[w.e].d.length)w.m(new C.cCv(w))},
$S:11}
C.cCv.prototype={
$0(){return this.a.f++},
$S:0}
C.cCE.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cCF.prototype={
$0(){var w=this.a,v=this.b
w.z.M(0,v)
w.Q=v},
$S:0}
C.cCG.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cCD(w))},
$S:0}
C.cCD.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cCH.prototype={
$0(){return this.a.f++},
$S:0}
C.cCI.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cCJ.prototype={
$0(){},
$S:0}
C.cCK.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.aa(0)
w.as=!1
w.ay=0},
$S:0}
C.cCy.prototype={
$0(){return A.a5(this.a,!1).ik()},
$S:0}
C.cCz.prototype={
$3(d,e,f){var w=null
return A.lx(new C.cCx(this.a,e),w,B.b5,B.hy,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:1950}
C.cCx.prototype={
$3(d,e,f){var w,v,u=null,t=this.a,s=B.cI.j(t.as?0.6:0.15)
s=A.a([new A.ac(0,B.G,s,B.I,t.as?40:18)],x.V)
w=B.w.j(e)
v=this.b
v=A.TK(v,v,B.Vu)
return A.p(u,A.hV(new A.Bk(new A.xs(w,B.Lp,u,B.Xt),H.bW4(A.b4(u,u,u,new C.aAQ(t.gkL()[t.e].c,t.as,u),B.aw),v),u),B.ap),B.f,u,u,new A.o(u,u,u,u,s,u,B.a6),u,190,u,u,u,u,u,190)},
$S:1951}
C.cCA.prototype={
$3(d,e,f){return A.db(A.dQ(f,new A.t(0,14*(1-e))),e)},
$S:100}
C.cCB.prototype={
$3(d,e,f){return A.dQ(f,new A.t(Math.sin(e*22)*8*(1-e),0))},
$S:112}
C.cCC.prototype={
$0(){return this.a.boo(this.b)},
$S:0}
C.f3e.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.amu$)
v.amu$=w
v.pZ$.sp(0,w)
v.aqb(u)},
$S:8}
C.fdk.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a4(0)
w.a.$0()},
$S:11}
C.bRm.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bRl())},
$S:0}
C.bRl.prototype={
$0(){},
$S:0}
C.bRj.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bRh.prototype={
$0(){},
$S:0}
C.bRi.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMy()
w=s+1>=r.length?3:5
break
case 3:q=C.bFy(p.gaoZ(0),0,r.length)
p.m(new C.bRe(p,q))
o=p
w=6
return A.b(C.Bu(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.Bv(s.d,s.c.a,"school",p.gaoZ(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bRf())
w=4
break
case 5:p.m(new C.bRg(p))
p.gqg().VB(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bRe.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bRf.prototype={
$0(){},
$S:0}
C.bRg.prototype={
$0(){return this.a.x++},
$S:0}
C.bRk.prototype={
$0(){return this.a.KJ(this.b)},
$S:0}
C.bRd.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).ik()},
$S:0}
C.f3f.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.t(t,s),q=v.b,p=v.d,o=p?C.hvG(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.DO
C.RY(q,D.eiL,0,0.2,-0.6,-0.2,null,w,D.ehw,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a7(0,new A.t(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.I()
p.r=D.FR.gp(0)
p.c=3
p.d=B.by
q.bo(new A.t(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f3g.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.RY(this.a,D.ehQ,0,u,0.7,-0.5,null,null,D.Jf,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f3h.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.RY(this.a,D.ejx,0,0,0.8,-0.5,null,null,D.Jf,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f3i.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.RY(w.b,D.eiF,0,v,-0.8,-0.5,null,null,D.Jf,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f3j.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.t(34,-122+Math.sin(w*5)*5)
else v=v?D.eiJ:D.DO
C.RY(p,D.ei9,0,t,0,-0.6,null,v,D.Jf,3,0,s,1.3,u,0,w,0)
q=q.c9T(new A.t(222,455),9)
$.S()
w=A.I()
w.r=B.cI.gp(0)
p.aH(q,w)},
$S:0}
C.f3k.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:747}
C.bR_.prototype={
$2(d,e){return d+e},
$S:67}
C.bRa.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bRb.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bRc.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.giX()[u.b]=s
t.giX()[u.d]=t.y
w=t.as
v=t.pZ$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bR6.prototype={
$1(d){return d},
$S:117}
C.bR5.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.pZ$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bR7.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bR8.prototype={
$0(){},
$S:0}
C.bR9.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.Fn(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cp(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.aa(0)},
$S:0}
C.bR1.prototype={
$0(){return A.a5(this.a,!1).ik()},
$S:0}
C.bR2.prototype={
$2(d,e){var w=this.a
w=w.gkL()[w.f].e
return B.o.aL(w[d],w[e])},
$S:67}
C.bR3.prototype={
$2(d,e){var w=null,v=C.h7B(new A.av(A.aR(1/0,e.a,e.b),A.aR(1/0,e.c,e.d))),u=this.a
return A.aA(B.c6,new A.er(A.b4(w,w,w,new C.biQ(u,u.pZ$),B.aw),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bR0(u,v),w,w,w,w,!1,B.a3)},
$S:36}
C.bR0.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.giX().length
u=B.o.E(B.k.bf((t.a-s.a)/r/450*v),0,v-1)
w.cZb(w.giX()[u])}},
$S:22}
C.bR4.prototype={
$1(d){var w=this.a
return w.gkL()[w.f].d[d]},
$S:72}
C.doh.prototype={
$2(d,e){return 0},
$S:67}
C.bQM.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bQL())},
$S:0}
C.bQL.prototype={
$0(){},
$S:0}
C.bQK.prototype={
$0(){},
$S:0}
C.bQE.prototype={
$0(){},
$S:0}
C.bQF.prototype={
$0(){},
$S:0}
C.bQJ.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.AI},
$S:0}
C.bQI.prototype={
$1(d){var w=null,v=this.a.gqg(),u=A.d(d,w,w,w,w,w,w,D.aTI,w,w,w),t=v.gbkQ(0)
return A.aA(B.c6,A.x(A.a([u,B.bF,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aTX,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbqG(v),w,w,w,w,w,w,!1,B.a3)},
$S:136}
C.bQG.prototype={
$0(){return this.a.KJ(this.b)},
$S:0}
C.bQH.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).ik()},
$S:0}
C.bQD.prototype={
$0(){return A.a5(this.a,!1).ik()},
$S:0}
C.dZ4.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dZ5.prototype={
$1(d){return this.a},
$S:39}
C.dZ6.prototype={
$0(){var w=this.a
return w.d=w.gSz().bdl(this.b)},
$S:0}
C.dZ2.prototype={
$1(d){return new C.Tc(this.a,null)},
$S:z+32}
C.dZ3.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.dZ1.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hc,w,w,w)
return A.ep(A.a([A.bN(!1,E.aVi,w,w,!0,w,w,w,new C.dZ_(d),w,w),A.bN(!1,D.fM1,w,w,!0,w,w,w,new C.dZ0(d),w,w)],x.p),w,w,D.fq,v,w,w,w,w,D.fyH,w)},
$S:19}
C.dZ_.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dZ0.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.dYZ.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dZ7.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.dZ8.prototype={
$0(){var w=this.a,v=this.b,u=C.bDh(v,10,w.r,!1)
return w.ud(C.hg8(w.a.d,"kahoot",u,w.gb53(),v.b,"Family Kahoot",v.a))},
$S:0}
C.dZ9.prototype={
$0(){var w=this.a
return w.ud(new C.alb(this.b,w.a.d,w.r,null))},
$S:0}
C.dZa.prototype={
$0(){var w=this.a
return w.ud(new C.ajo(this.b,w.a.d,w.r,null))},
$S:0}
C.dZd.prototype={
$0(){var w=this.a
return w.ud(new C.au4(this.b,w.a.d,w.r,null))},
$S:0}
C.dZe.prototype={
$0(){var w=this.a
return w.ud(new C.ay0(this.b,w.a.d,w.r,null))},
$S:0}
C.dZf.prototype={
$0(){var w=this.a
return w.ud(new C.ale(this.b,w.a.d,w.r,null))},
$S:0}
C.dZg.prototype={
$0(){var w=this.a
return w.ud(new C.ali(this.b,w.a.d,w.r,null))},
$S:0}
C.dZh.prototype={
$0(){var w=this.a
return w.ud(new C.alk(this.b,w.a.d,w.r,null))},
$S:0}
C.dZi.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.cZv()
return v.ud(C.hg8(v.a.d,"creator_"+u.a,w,v.gb53(),"A game by the family",t,this.c.a))},
$S:0}
C.dZj.prototype={
$0(){return this.a.Oy(this.b)},
$S:0}
C.dZk.prototype={
$0(){return this.a.Xu(0,this.b)},
$S:0}
C.dZb.prototype={
$0(){return this.a.Oy(null)},
$S:0}
C.dZc.prototype={
$0(){return this.a.K(x.q).f.U(D.fcn)},
$S:0}
C.bQY.prototype={
$0(){var w=this.a
w.d=D.aZk
w.z=3},
$S:0}
C.bQZ.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a4(0)
w.aOJ()}else w.m(new C.bQX(w))},
$S:11}
C.bQX.prototype={
$0(){return this.a.z--},
$S:0}
C.bQO.prototype={
$0(){var w=this.a
w.d=D.abB
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bQP.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bQN(w))
if(w.as<=0){d.a4(0)
w.b5_(-1)}},
$S:11}
C.bQN.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bQU.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.W6},
$S:0}
C.bQV.prototype={
$0(){return this.a.e++},
$S:0}
C.bQR.prototype={
$0(){var w=this.a
w.d=D.aZl
w.ay=this.b},
$S:0}
C.bQS.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bQW.prototype={
$2(d,e){return B.o.aL(e.b,d.b)},
$S:1952}
C.bQT.prototype={
$0(){return this.a.KJ(this.b)},
$S:0}
C.bQQ.prototype={
$0(){var w=this.a.c
w.toString
return A.a5(w,!1).ik()},
$S:0}
C.bQo.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.au(new A.ba(s,B.b4,B.aO),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.L)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b4,B.aO),r))}return s},
$S:1953}
C.bQp.prototype={
$0(){return this.a.gCK().c.push(C.h1q(null,0,20,""))},
$S:0}
C.bQz.prototype={
$1(d){var w=null
return A.br(w,new A.b5(4,A.m(12),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dr,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.V2,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:250}
C.bQy.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gCK().c,m=this.b,l=n[m],k=o.ccy(l),j=B.c.j(0.06),i=A.m(18),h=A.J(B.aX,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.Kp,p,p,p),B.b2],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.aq1,p,p,p,new C.bQt(o,m),p,p,p,p,p,p))
n=J.a6(k)
m=this.c
f=A.a([A.B(f,B.m,p,B.e,B.i,0,p,p),A.aM(p,B.Y,!1,p,!0,B.t,p,A.aN(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bQu(l),p,p,p,!1,p,p,!1,p,!0,p,B.aa,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a4,p,B.an,p,p,p,p),B.Q],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aBS[v]
t=D.aBz[v]
s=v+1
f.push(new A.D(B.eI,new A.ca(B.aM,B.e,B.i,B.m,p,B.p,p,0,A.a([new A.y(u,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p),B.ad,new A.by(1,B.ba,A.aM(p,B.Y,!1,p,!0,B.t,p,A.aN(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bQv(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.aa,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a4,p,B.an,p,p,p,p),p),new Au.OQ(v,l.c,new C.bQw(o,l),p,!1,D.ly,p,p,p,p,p,!1,!1,p,K.aZJ,p,p,p,p,p,w)],g),p),p))}f.push(D.fEa)
f.push(B.am)
n=A.a([D.fxM,B.ad],g)
for(r=0;r<3;++r){q=D.cau[r]
n.push(new A.D(B.fu,A.ju(p,p,p,new A.y(""+q+"s",p,p,p,p,p,p,p,p,p,p,p),p,new C.bQx(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.B(n,B.m,p,B.e,B.i,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kK,B.bg,p,p,p)},
$S:149}
C.bQt.prototype={
$0(){var w=this.a
return w.m(new C.bQs(w,this.b))},
$S:0}
C.bQs.prototype={
$0(){return B.d.cz(this.a.gCK().c,this.b)},
$S:0}
C.bQu.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bQv.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bQw.prototype={
$1(d){return this.a.m(new C.bQr(this.b,d))},
$S:159}
C.bQr.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bQx.prototype={
$1(d){return this.a.m(new C.bQq(this.b,this.c))},
$S:9}
C.bQq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e_K.prototype={
$0(){var w=this.a
w.w8()
w.a.bv()
w.a.qa()},
$S:0}
C.e_J.prototype={
$0(){var w=this.a
w.w8()
w.a.bv()
w.a.qa()},
$S:0}
C.e_M.prototype={
$0(){var w=this,v=w.b
if(J.cL(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e_N.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e_O.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e_I.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e_L.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e_Q.prototype={
$0(){this.a.OU()
return null},
$S:0}
C.e_P.prototype={
$0(){return this.a.EJ(this.b)},
$S:0}
C.e_a.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bN(!1,B.di,w,w,!0,w,w,w,new C.e_8(d),w,w),r=A.bo(B.bP,w,w,w,w,w,w,w,w,w,w,w)
return A.ep(A.a([s,A.bI(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e_9(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.e_8.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.e_9.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.e_b.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cLc(this.b)},
$S:0}
C.e_5.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aU9(w.b,w.c,w.d)},
$S:8}
C.dZx.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.dZy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.GT(t.a.c),$async$$0)
case 2:s=r.p7(q.dI(e,new C.dZN(t)))
if(s!=null&&t.c!=null)t.m(new C.dZO(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dZN.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dZO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZQ.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dZR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e_4.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cM_(C.hvM(w),w)},
$S:0}
C.dZM.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Vy(u,w,C.aQ7(u,w),new C.dZL(v),null)},
$S:z+37}
C.dZL.prototype={
$1(d){return this.bmc(d)},
bmc(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.dZK(s,d))
w=3
return A.b(s.u8(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:491}
C.dZK.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bdl(this.b)},
$S:0}
C.e_1.prototype={
$1(d){return d.as},
$S:z+1}
C.e_2.prototype={
$1(d){var w=this
return new A.e1(new C.e_0(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.e_0.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e4:B.c,h=A.m(26),g=A.J(B.bP.j(0.5),B.r,1.5),f=A.p(k,D.bQE,B.f,k,k,new A.o(B.bP.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a1,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,12.5,k,k,B.U,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.B(A.a([f,B.bc,a0,A.aH(k,k,k,k,A.X(B.cx,j?B.bu:B.bn,k,k,k,k),k,k,k,new C.dZV(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.L)(v),++s){r=v[s]
q=t.a===r?B.bP:B.bP.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ay(B.bP,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bP
a0.push(A.aA(k,A.cY(k,new A.y(m,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k),k,k,B.b5,new A.o(q,k,new A.bH(n,n,n,n),new A.bh(p,p,p,p),k,k,B.n),B.h4,k,k,k,k,B.BU,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dZW(t,a2,r),k,k,k,k,k,k,!1,B.a3))}a0=A.bY(B.bG,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c1z,new A.D(D.bBn,f,k),new A.D(D.bBe,e,k),new A.D(B.rE,a0,k),new A.D(X.alp,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bn,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(A3.anT,j?B.bu:B.bn,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bBg,A.B(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b8i(k,B.bP,k,k,!1,B.y,k,k,k,k,k,k,new C.dZX(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.i,0,k,k),k))}f.push(B.aB)
j=A.m(20)
e=A.a([new A.ac(0,B.G,B.aD.j(0.35),B.j2,12)],x.V)
f.push(A.aA(k,A.p(k,A.B(A.a([D.fy7,B.bc,D.bFy,D.bRk],w),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c5i,B.n),k,k,k,B.hO,B.bD,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dZY(t,a1),k,k,k,k,k,k,!1,B.a3))
f.push(new A.D(B.w7,A.B(A.a([A.E(A.dT(B.di,new C.dZZ(a1),k),1),B.as,A.E(A.bI(M.aVI,k,new C.e__(t,a1),A.bo(B.bP,k,k,k,k,k,B.cm,k,k,k,k,k)),1)],w),B.m,k,B.e,B.i,0,k,k),k))
return A.bn(!0,A.p(k,A.ch(A.x(f,B.E,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.ap,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.BQ,k,k,k,k),!0,!1,B.af,!0,!0)},
$S:86}
C.dZV.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dZW.prototype={
$0(){return this.b.$1(new C.dZU(this.a,this.c))},
$S:0}
C.dZU.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.dZX.prototype={
$1(d){var w=this.a
w.m(new C.dZS(w,d))
this.b.$1(new C.dZT())},
$S:9}
C.dZS.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dZT.prototype={
$0(){},
$S:0}
C.dZY.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(new A.aGS(!0,w))
return null},
$S:0}
C.dZZ.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e__.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(new A.aGS(!1,w))
return null},
$S:0}
C.e_3.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cLN(this.b.b)
w.r.aa(0)},
$S:0}
C.dZl.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aig(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hpd(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.dZm.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aEW(w)},
$S:0}
C.e_d.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.adA(this.b,w,this.c,null)},
$S:z+39}
C.e_7.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e4:B.c,t=A.m(20),s=A.X(B.lJ,B.aW,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ae,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.m,w,B.e,B.P,0,B.p)
return A.ep(A.a([A.bI(D.fPK,w,new C.e_6(d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b8(t,B.a0),r,w)},
$S:19}
C.e_6.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.dZn.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dZo.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dZp.prototype={
$1(d){return d.a},
$S:z+8}
C.dZq.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hW(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aEW(w)},
$S:0}
C.dZu.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aig(q)
w=A.T(q).k("Z<1>")
q=A.C(new A.Z(q,new C.dZs(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hpd(v.e,null,r,v.f,v.r,new C.dZt(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.dZt.prototype={
$0(){return this.a.aaF(this.b)},
$S:0}
C.dZs.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dZv.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("N<1,hW>")
w=A.C(new A.N(w,new C.dZr(this.b),v),v.k("ak.E"))
u.d=t.aEW(w)},
$S:0}
C.dZr.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e_c.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dZH.prototype={
$1(d){return d.length!==0},
$S:3}
C.dZI.prototype={
$1(d){var w=this
return new A.e1(new C.dZG(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dZG.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e4:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.dZC(u,e,o),A.T(o).k("N<1,v>")))
p.push(B.Q)
u=w.d
p.push(A.aM(v,B.Y,!1,v,!0,B.t,v,A.aN(),u,v,v,v,v,v,2,A.br(v,new A.b5(4,A.m(12),B.dk),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.mo,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.x(p,B.ak,v,B.e,B.P,0,B.p)
t=w.a
return A.ep(A.a([A.bN(!1,B.di,v,v,!0,v,v,v,new C.dZD(d),v,v),A.bI(B.KA,v,new C.dZE(t,u,o,e),A.bo(B.bP,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fCy,v,new C.dZF(t,u,o,d),A.bo(B.aW,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a4(360,v,p,v),v,v,v,v,r,v)},
$S:177}
C.dZC.prototype={
$1(d){var w=null
return A.dG(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bZo,w,w,w,new C.dZB(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1954}
C.dZB.prototype={
$0(){return this.a.$1(new C.dZz(this.b,this.c))},
$S:0}
C.dZz.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dZD.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dZE.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dZA(w.c,u))
v.bP(0,B.cb)}},
$S:0}
C.dZA.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dZF.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).O(!0)},
$S:0}
C.dZJ.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cMr(this.b,D.uk,C.GR(v,w.a.c))},
$S:0}
C.e_k.prototype={
$1(d){return d.as},
$S:z+1}
C.e_l.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iX(this.b,w)},
$S:0}
C.e_m.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.ikL(v)
return w.Wl(v==null?null:v.a)},
$S:0}
C.e_n.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hXu(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aR(1/0,e.a,e.b)
s=A.aR(1/0,e.c,e.d)
l.ctT(new A.av(u,t),v.gbjW(),new A.av(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cYZ:D.cXb
q=A.J(s?B.dr:D.bhl,B.r,1)
p=A.m(22)
o=A.bS(0,A.b4(m,m,m,new C.beW(s,m),B.aw),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bx(p,new A.an(B.a_,m,B.ab,B.t,A.a([o,A.bS(0,A.uO(new A.P(n,n,n,n),new A.a4(u,t,new C.bfR(l.d,v,l.f,w,new C.e_g(l),l.gcdK(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.bxB(s,new C.e_h(l,e),new C.e_i(l,e),new C.e_j(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b0,B.b6,B.x,r,m,m),B.n),m,m,m,A_.akw,m,m,m,m)},
$S:229}
C.e_g.prototype={
$1(d){var w=this.a
w.m(new C.e_e(w,d))},
$S:2}
C.e_e.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.M(0,v)},
$S:0}
C.e_h.prototype={
$0(){var w=this.b
return this.a.bbz(1.25,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.e_i.prototype={
$0(){var w=this.b
return this.a.bbz(0.8,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.e_j.prototype={
$0(){var w=this,v=w.b
return w.a.aU9(new A.av(A.aR(1/0,v.a,v.b),A.aR(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbjW())},
$S:0}
C.e_o.prototype={
$0(){var w=this.a
return w.m(new C.e_f(w))},
$S:0}
C.e_f.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dZw.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fC(s.c)),$async$$0)
case 2:t.y5("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ddK.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bjH(u,C.hA1(v.c,u),new C.ddJ(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.ddJ.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.ddL.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bn_(d.d,d.c,u.f.t(0,d.a),new C.ddI(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.ddI.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fCD.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.p7(new A.cO(new A.Z(v,new C.fCE(d),w.k("Z<1>")),new C.fCF(),w.k("cO<1,n>")))},
$S:z+19}
C.fCE.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fCF.prototype={
$1(d){return d.a},
$S:z+8}
C.fCB.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fCC.prototype={
$1(d){return d.b},
$S:z+8}
C.fCI.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.p7(new A.cO(new A.Z(v,new C.fCJ(d),w.k("Z<1>")),new C.fCK(),w.k("cO<1,n>")))},
$S:z+19}
C.fCJ.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fCK.prototype={
$1(d){return d.a},
$S:z+8}
C.fCG.prototype={
$1(d){var w,v=A.eD([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.aj(0,w)&&v.M(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fCH.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.ddN.prototype={
$0(){return this.a},
$S:z+46}
C.de3.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.aj(0,d)},
$S:265}
C.ddW.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.ddX()),v=J.a6(w)
if(!v.t(w,e))v.M(w,e)},
$S:115}
C.ddX.prototype={
$0(){return A.a([],x.s)},
$S:749}
C.ddV.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f1(w,e)
return w===!0},
$S:331}
C.ddO.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.ddU.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.ddT.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.M(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.D8:v)
u=1
while(v.C())u+=s.$2(v.gS(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.Y:v)
while(v.C()){t=v.gS(v)
if(e.t(0,t))continue
e.M(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.D8:t)
while(t.C())u+=s.$2(t.gS(t).a,e)}return u},
$S:1956}
C.ddP.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.ddY.prototype={
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
t=J.aW(t==null?D.D8:t)
while(t.C()){r=t.gS(t)
if(r.a!==a9&&!B.d.b3(w,new C.ddZ(r)))w.push(r)}}B.d.bs(w,new C.de_(a8))
B.d.aZ(w,new C.de0())
q=C.hXt(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.ePw],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bq5(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1957}
C.ddZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.de_.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.de0.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.de1.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gL(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bd(v,A.a7(v).k("bd<2>")).cI(0,0,B.pO)+88-w.gI(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gL(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:677}
C.de2.prototype={
$1(d){return 16+d*156},
$S:236}
C.ddM.prototype={
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
t.n(0,d,new C.G9(r,new A.t(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.G9(s,new A.t(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.G9(s,new A.t(e,v)))}t=o.r.h(0,d)
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
C.ddQ.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aK_(new A.t(v.a,v.b+28),new A.t(w.a,w.b+28),!0,null))},
$S:115}
C.ddR.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.ddS.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:750}
C.de4.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:750}
C.de5.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:447}
C.de6.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:201}
C.de7.prototype={
$1(d){return d>=0.5},
$S:120}
C.fj8.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.he(A.aO(!1,v,!0,new A.a4(38,38,A.X(d,this.a.c?B.c:B.cr,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1959}
C.eU2.prototype={
$1(d){var w=null,v=A.m(8),u=B.bP.j(0.12),t=A.m(8)
return new A.D(B.nr,A.aO(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fnR,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.NM,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eU1(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eU1.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dtX.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dtW.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nL,B.K,w,w)
return A.ep(A.a([A.bN(!1,B.di,w,w,!0,w,w,w,new C.dtU(d),w,w),A.bN(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mA,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dtV(d),w,w)],x.p),B.b9,B.BR,w,u,D.bCh,w,D.bEe,new A.b8(v,B.a0),w,w)},
$S:19}
C.dtU.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.dtV.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.du5.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.du6.prototype={
$1(d){var w=this.a
return w.m(new C.du4(w,d))},
$S:z+49}
C.du4.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.du7.prototype={
$1(d){var w=null
return A.qC(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dua.prototype={
$1(d){var w=this.a
return w.m(new C.du3(w,d))},
$S:35}
C.du3.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.du9.prototype={
$1(d){var w=null
return A.qC(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dub.prototype={
$1(d){var w=this.a
return w.m(new C.du2(w,d))},
$S:35}
C.du2.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.duc.prototype={
$0(){var w=this.a
return w.m(new C.du1(w))},
$S:0}
C.du1.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dud.prototype={
$0(){var w=this.a
return w.m(new C.du0(w))},
$S:0}
C.du0.prototype={
$0(){return++this.a.at},
$S:0}
C.due.prototype={
$0(){var w=this.a
return w.m(new C.du_(w))},
$S:0}
C.du_.prototype={
$0(){return--this.a.ax},
$S:0}
C.duf.prototype={
$0(){var w=this.a
return w.m(new C.dtZ(w))},
$S:0}
C.dtZ.prototype={
$0(){return++this.a.ax},
$S:0}
C.dug.prototype={
$1(d){var w=this.a
return w.m(new C.dtY(w,d))},
$S:9}
C.dtY.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.du8.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.duh.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bP.j(0.18)
else w=q.c.a?B.e4:B.c
v=A.m(12)
if(p)u=B.bP
else u=(q.c.a?B.ea:B.bO).j(0.85)
u=A.J(u,B.r,p?1.5:1)
if(p)t=B.bP
else t=q.c.a?B.bu:B.bn
t=A.X(f,t,r,r,r,18)
if(p)s=B.bP
else s=q.c.a?B.bu:B.bn
return A.E(A.aI(!1,B.a2,!0,r,A.aO(!1,o,!0,A.cY(r,A.x(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.i,0,B.p),r,r,B.b5,new A.o(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.jU,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dui(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dui.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dur.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cde.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:96}
C.cdl.prototype={
$1(d){return d.ah()},
$S:z+5}
C.cdm.prototype={
$2(d,e){var w=J.b6(e,new C.cdk(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.cdk.prototype={
$1(d){return d.ah()},
$S:z+12}
C.cdg.prototype={
$1(d){return C.aln(A.a2(d,x.N,x.z))},
$S:z+9}
C.cdh.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cdi.prototype={
$1(d){return C.hg7(A.a2(d,x.N,x.z))},
$S:z+11}
C.cdj.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cdq.prototype={
$1(d){return new A.aH3(d.f.length,d.a,d.b)},
$S:z+55}
C.cdr.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:608}
C.cdn.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cdo.prototype={
$1(d){return d.cLp(C.GR(d,this.a))},
$S:z+85}
C.e_x.prototype={
$1(d){return C.um(d,this.a.a.c)},
$S:z+3}
C.e_y.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e_C.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e_D.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e_u.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0p(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yD("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pm(r.c,r.e),$async$$0)
case 4:s.yD(p)
w=5
return A.b(s.JR(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e_v.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0p(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yD("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pm(r.c,r.e),$async$$0)
case 4:s.yD(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e_w.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.VB(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yD("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yD("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yD("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.JR(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yD(B.a.em(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e_B.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0o(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yD("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).cc(A.eh(new C.e_A(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pm(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e_A.prototype={
$1(d){var w=this.b
return new C.a_M(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e_z.prototype={
$1(d){return D.hp3},
$S:z+58}
C.e_F.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e_G.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e_E(w,d)
return new A.D(B.d1,new C.bfV(this.b,d.c,d.a,w,null),null)},
$S:1960}
C.e_E.prototype={
$0(){return this.a.Y6(this.b.b)},
$S:0}
C.e_p.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e_q.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e_r.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e_s.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e_t.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.e_H.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cU(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a5(this.b,!1).O(s)
return}},
$S:178}
C.dM1.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dM2.prototype={
$0(){return B.d.gI(D.a5l)},
$S:z+60}
C.dM3.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.as(A.X(this.b.d,B.c.j(0.95),w,w,D.d4H,44),w,w,w),w,w,new C.bkP(u,t,v,w),B.aw)},
$S:59}
C.fTe.prototype={
$1(d){return A.p5(new C.fTd(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:135}
C.fTd.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e4:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.t5,24)],x.V),o=r?B.ea:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aW.j(0.25),B.bP.j(0.18)],x.O)
w=A.p(t,D.bTI,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a9(B.a5,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.W,o,new A.D(E.alu,A.B(A.a([w,B.bc,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bu:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.m,t,B.e,B.i,0,t,t),t),A.E(A.io(!0,t,e,B.y,D.fas,new C.fTc(this.b,s),20,B.al2,t,B.ah,!1),1)],u),B.m,t,B.e,B.i,0,B.p),B.f,t,t,new A.o(q,t,t,B.kZ,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:121}
C.fTc.prototype={
$2(d,e){var w=null,v=D.a5l[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.J(s?B.ea:B.bO,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.en,8)],x.V),p=A.m(15),o=A.E(new C.a6G(v.a,!0,w),1),n=s?B.jM:B.jd,m=A.d(v.b,w,1,B.a1,w,w,w,A.l(w,w,s?B.aP:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aI(!1,B.a2,!0,w,A.aO(!1,u,!0,A.eK(A.bx(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a1,w,w,w,A.l(w,w,s?B.bu:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.l9,w,w,w)],l),B.ak,w,B.e,B.i,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fTb(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:79}
C.fTb.prototype={
$0(){A.a5(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.clU.prototype={
$0(){return this.a.agO(this.b)},
$S:0}
C.fSB.prototype={
$1(d){return D.hjW},
$S:z+61}
C.h_6.prototype={
$1(d){var w=this
return new C.a1z(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fSG.prototype={
$1(d){return new C.Zp(this.a,null)},
$S:z+63}
C.fSF.prototype={
$1(d){return D.hkV},
$S:z+64}
C.d5g.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d5h.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d5f(w,d))},
$S:35}
C.d5f.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d5i.prototype={
$1(d){return this.a.Kr()},
$S:2}
C.d5j.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d5c.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.d5d.prototype={
$1(d){return this.a.Kr()},
$S:2}
C.d5e.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cDH.prototype={
$0(){},
$S:0}
C.cDN.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.cDO.prototype={
$0(){return this.a.aPA(-1)},
$S:0}
C.cDP.prototype={
$1(d){return this.a.m(new C.cDM())},
$S:2}
C.cDM.prototype={
$0(){},
$S:0}
C.cDQ.prototype={
$0(){return this.a.aPA(1)},
$S:0}
C.cDR.prototype={
$1(d){return this.a.m(new C.cDL())},
$S:2}
C.cDL.prototype={
$0(){},
$S:0}
C.cDS.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aW.j(0.2)
if(s)v=B.aW
else v=this.b.a?B.ea:B.bO
return A.uG(u,u,B.b1,r,u,new C.cDK(t,d),B.yx,s,w,u,new A.ay(v,1,B.r,-1),B.cc)},
$S:1961}
C.cDK.prototype={
$1(d){var w=this.a
return w.m(new C.cDI(w,this.b))},
$S:9}
C.cDI.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cDT.prototype={
$1(d){return this.a.m(new C.cDJ())},
$S:2}
C.cDJ.prototype={
$0(){},
$S:0}
C.cDU.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fis.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).O(w)},
$S:2}
C.fit.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.fiu.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).O(w)},
$S:0}
C.fiq.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbAZ()
w=w.e
s=A.m(B.o.E(v-1,0,v))
return A.b4(new A.D(D.bEd,new A.er(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bxo(p,v,this.b.a,u,t,r),r,r,B.aw)},
$S:59}
C.fir.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dw.aw(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ar(B.aW,B.bP,w)
s.toString
s=A.a([B.b1,s,B.aW],x.O)
return A.aI(!1,B.a2,!0,p,A.aO(!1,v,!0,A.eK(D.enm,r,new A.o(r,r,A.J(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:139}
C.fR3.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:74}
C.eRc.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eR3.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eR4.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eRa.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e1(new C.eR9(w,this.b),null)},
$S:21}
C.eR9.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e4:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eT(w,u,new A.D(B.alm,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ae,C.hm3(new C.eR6(r,e),r.a),B.aB,A.B(A.a([A.E(A.dT(B.di,new C.eR7(d),w),1),B.as,A.E(A.bI(B.Vn,w,new C.eR8(r,d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.i,0,w,w)],q),B.ak,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d8,w,new A.b8(t,B.a0),w)},
$S:99}
C.eR6.prototype={
$1(d){return this.b.$1(new C.eR5(this.a,d))},
$S:35}
C.eR5.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eR7.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eR8.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).O(w)
return null},
$S:0}
C.eRb.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Td(this.b)},
$S:0}
C.eQZ.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bdr(w)},
$S:0}
C.eR2.prototype={
$1(d){return this.bmz(d)},
bmz(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LB(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iX(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eR1.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.eR0(this.b),v),v.k("M.E"))
u.d=t.bdr(w)},
$S:0}
C.eR0.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eRd.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iX(this.b,w)},
$S:0}
C.eRe.prototype={
$1(d){return this.a.bF6(d,this.b)},
$S:z+67}
C.eR_.prototype={
$0(){return this.a.aaE(this.b)},
$S:0}
C.fZX.prototype={
$1(d){return new C.adV(this.a,this.b,this.c,null)},
$S:z+68}
C.eRg.prototype={
$0(){return this.a.a_S(this.b)},
$S:0}
C.eRh.prototype={
$0(){return this.a.Qu(this.b)},
$S:0}
C.eRi.prototype={
$0(){return this.a.EE(this.b)},
$S:0}
C.eRj.prototype={
$0(){return this.a.a_T(this.b)},
$S:0}
C.eRf.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eQU.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eQV.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eQW.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
C.eQY.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qf(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eQX(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eQX.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eRG.prototype={
$2(d,e){return d+e.gxf()},
$S:z+71}
C.eRC.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eRD.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eRn.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e4:B.c,s=A.m(24),r=A.p(v,D.bUa,B.f,v,v,new A.o(B.ax.j(u?0.18:0.08),v,A.J(B.ax.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aP:B.av
u=u?B.ea:B.bO
w=x.p
return A.eT(v,t,new A.D(B.yw,A.x(A.a([r,B.aQ,q,B.Q,p,B.d4,A.B(A.a([A.E(A.dT(B.nO,new C.eRl(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.ff,v,new A.b8(A.m(14),B.a0),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bI(D.fTC,v,new C.eRm(d),A.bo(B.ax,v,v,v,v,v,B.ff,v,new A.b8(A.m(14),B.a0),v,v,v)),1)],w),B.m,v,B.e,B.i,0,v,v)],w),B.m,v,B.e,B.P,0,B.p),v),v,v,v,v,B.d8,v,new A.b8(s,B.a0),v)},
$S:49}
C.eRl.prototype={
$0(){A.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eRm.prototype={
$0(){A.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eRw.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e4:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h_,28)],x.V),g=k?D.dbL:B.a4H,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.f41,B.au,new A.bM(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cA,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.i,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.ay,B.aE,B.x,g,m,m),B.n),m,m,m,m,E.alr,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b6s(B.b7,B.ji,new C.eRt(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b6s(B.cw,R.z7,new C.eRu(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ax.j(k?0.14:0.06)
q=A.m(16)
p=A.J(B.ax.j(0.28),B.r,1)
o=A.p(m,D.bTw,B.f,m,m,new A.o(B.ax.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bn(!0,new A.D(B.w4,A.p(m,A.x(A.a([g,new A.D(B.aln,A.x(A.a([w,B.W,u,B.bx,t,B.W,A.aI(!1,B.a2,!0,m,A.aO(!1,s,!0,A.p(m,A.B(A.a([o,B.bc,n,A.X(B.eE,k?B.bu:B.bn,m,m,m,m)],f),B.m,m,B.e,B.i,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bD,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eRv(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.m,m,B.e,B.P,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:27}
C.eRt.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vL("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eRu.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.vL("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eRv.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).O(null)
w=2
return A.b(u.a.Ob(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eRr.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e4:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eU,24)],x.V),k=o?B.ea:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bu:B.bn
u=A.bx(w,new A.a4(48,48,C.aRp(!0,A.m(12),48,P.On,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.a1,q,q,q,A.l(q,q,o?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.B1(v.gxf())
s=x.p
r=this.a
return A.bn(!0,new A.D(B.w4,A.p(q,A.x(A.a([B.W,k,new A.D(D.alk,A.B(A.a([u,B.bc,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bu:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.m,q,B.e,B.i,0,q,q),q),B.BH,r.cnY(B.uG,B.aW,new C.eRp(d),p,"QR code or backup file","Transfer project"),r.b3t(!0,B.eb,B.ax,new C.eRq(d),p,"Remove from this device","Delete project"),B.W],s),B.m,q,B.e,B.P,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:27}
C.eRp.prototype={
$0(){A.a5(this.a,!1).O("transfer")
return null},
$S:0}
C.eRq.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
C.eRs.prototype={
$1(d){return this.bmA(d)},
bmA(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.LB(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vY(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eRJ.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eRI(w))},
$S:0}
C.eRI.prototype={
$0(){return this.a.r++},
$S:0}
C.eRK.prototype={
$0(){var w=this.a
return w.m(new C.eRH(w))},
$S:0}
C.eRH.prototype={
$0(){return this.a.r++},
$S:0}
C.eRk.prototype={
$0(){var w=this.a.c
w.toString
return A.iX(w,null)},
$S:0}
C.eRo.prototype={
$0(){return this.a.chf(this.b)},
$S:0}
C.eRF.prototype={
$0(){var w=this.a
return w.m(new C.eRE(w,this.b))},
$S:0}
C.eRE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eRz.prototype={
$0(){return this.a.vL("scan")},
$S:0}
C.eRA.prototype={
$0(){return this.a.vL("file")},
$S:0}
C.eRB.prototype={
$1(d){return this.a.cnZ(d,this.b)},
$S:z+72}
C.eRy.prototype={
$0(){return this.a.EI(this.b)},
$S:0}
C.eRx.prototype={
$0(){return this.a.a0n(this.b,this.c)},
$S:0}
C.cD6.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cD5.prototype={
$1(d){return d.ah()},
$S:z+74}
C.cD3.prototype={
$1(d){return C.hFU(A.a2(d,x.N,x.z))},
$S:z+75}
C.cD4.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fBD.prototype={
$1(d){return d.y===D.kM},
$S:z+3}
C.h_H.prototype={
$1(d){return C.aQ7(d,this.a)},
$S:z+3}
C.fzw.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bRt.prototype={
$1(d){return!d.as},
$S:z+1}
C.bRs.prototype={
$1(d){return d.ah()},
$S:z+23}
C.bRp.prototype={
$1(d){return C.hg9(A.a2(d,x.N,x.z))},
$S:z+24}
C.bRq.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bRr.prototype={
$1(d){return J.k(d)},
$S:17}
C.fq7.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+25}
C.flX.prototype={
$1(d){return C.h6f(A.a2(d,x.N,x.z))},
$S:z+79}
C.flY.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.flZ.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+25}
C.fSs.prototype={
$1(d){return J.k(d)},
$S:17}
C.fSt.prototype={
$1(d){return d.a},
$S:z+81}
C.fSu.prototype={
$1(d){return d.length!==0},
$S:3}
C.fSv.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+10}
C.fSw.prototype={
$1(d){return d.Td(null).ah()},
$S:z+82}
C.h_F.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fC6.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fF1.prototype={
$1(d){return C.aln(A.a2(d,x.N,x.z))},
$S:z+9}
C.fF2.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fF3.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fF4.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fF5.prototype={
$1(d){return C.um(d,this.a)},
$S:z+3}
C.fSf.prototype={
$1(d){return C.um(d,this.a)},
$S:z+3}
C.h_A.prototype={
$1(d){return C.aln(A.a2(d,x.N,x.z))},
$S:z+9}
C.h_B.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h_C.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fBO.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fBP.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h_L.prototype={
$1(d){return!d.as},
$S:z+1}
C.fBi.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fBj.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fBk.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.h_7.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fFS.prototype={
$1(d){return d.Q},
$S:z+15}
C.fS8.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fEZ.prototype={
$1(d){return C.aln(A.a2(d,x.N,x.z))},
$S:z+9}
C.fF_.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fF0.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fS3.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fmu.prototype={
$1(d){return d.length!==0},
$S:3}
C.fmv.prototype={
$1(d){return C.hg9(A.a2(d,x.N,x.z))},
$S:z+24}
C.fmw.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fmx.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fmy.prototype={
$1(d){return d.length!==0},
$S:3}
C.fmL.prototype={
$2(d,e){return d.eR(new C.fmM(e))},
$S:1962}
C.fmM.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.ca},
$S:1963}
C.fmI.prototype={
$1(d){return C.i1c(d,this.a)},
$S:z+84}
C.fmJ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fmK.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fqO.prototype={
$1(d){return d.a},
$S:z+56}
C.fqP.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqQ.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.ftD.prototype={
$1(d){return d.ah()},
$S:z+5}
C.fyQ.prototype={
$1(d){return C.hrA(d,C.GR(d,this.a))},
$S:z+5}
C.fyR.prototype={
$1(d){return C.hrB(d,C.GR(d,this.a))},
$S:z+5};(function aliases(){var w=C.aAS.prototype
w.bui=w.q
w=C.az1.prototype
w.bud=w.q
w=C.aGg.prototype
w.buG=w.q
w=C.aAT.prototype
w.buj=w.q
w=C.aAV.prototype
w.buk=w.q
w=C.aAW.prototype
w.bul=w.q
w=C.aMs.prototype
w.bxa=w.q
w=C.aOy.prototype
w.bzt=w.q
w=C.aOz.prototype
w.bzu=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aDR.prototype,"gckT","ckU",28)
var r
w(r=C.aAR.prototype,"gcdQ","cdR",65)
v(r,"gaNO","NK",0)
v(r,"gctc","AX",0)
v(r,"gbMR","Oo",0)
v(r,"gcHt","yE",0)
v(r,"gcmW","a15",0)
v(r,"gbIg","O7",0)
v(r,"gbNg","Xz",0)
w(r,"gbSe","bSf",78)
v(r,"gbCD","zZ",0)
v(C.aAU.prototype,"gcHp","FA",0)
v(r=C.alc.prototype,"gbqI","bqJ",2)
v(r,"gbqB","bqC",2)
v(r,"gcIw","cIx",2)
u(r,"gq9","kF",0)
u(r=C.ajp.prototype,"geX","h7",2)
w(r,"gc9Q","c9R",27)
u(C.au5.prototype,"gq9","kF",0)
v(r=C.ay1.prototype,"gcU0","cU1",2)
u(r,"gq9","kF",0)
u(C.aK4.prototype,"gbqG","bqH",2)
v(C.all.prototype,"gBq","cIH",2)
u(r=C.alj.prototype,"gcJl","cJm",2)
u(r,"gq9","kF",0)
v(r=C.alf.prototype,"gbpA","bpB",2)
v(r,"gcOw","cOx",2)
u(r=C.alh.prototype,"geX","h7",2)
u(r,"gkw","cI2",2)
v(r=C.ald.prototype,"gcHS","cHT",2)
u(r,"gbou","jB",2)
v(r=C.aEp.prototype,"gagq","vZ",0)
v(r,"gcgv","a0e",0)
v(r,"gaRU","Ic",0)
v(r=C.aEm.prototype,"gcDu","a3e",0)
v(r,"gagq","vZ",0)
v(r,"gcrc","a1K",0)
v(r,"gcgq","b1I",2)
v(r,"gchs","a0s",0)
w(r,"gcdK","cdL",35)
v(r,"gbN8","Ih",0)
v(r,"gcEx","cEy",2)
v(r,"gc42","Zf",0)
w(r,"gccd","cce",36)
v(r,"gcge","cgf",2)
v(r=C.aCQ.prototype,"gc9W","Q2",0)
v(r,"gc9Y","c9Z",2)
v(r,"gbJL","aag",0)
v(r=C.aEo.prototype,"gbQG","Y2",0)
v(r,"gc0e","YI",0)
v(r,"gcxF","a2C",0)
v(r,"gctO","a2d",0)
v(C.aEn.prototype,"gctw","aia",0)
v(C.ath.prototype,"gccb","a_Q",0)
v(C.azA.prototype,"ga2Y","Kr",2)
v(C.azz.prototype,"ga2Y","Kr",2)
v(C.ayf.prototype,"ga2Y","Kr",2)
v(r=C.aFS.prototype,"gb2R","R_",0)
v(r,"gbBr","Wf",0)
v(r,"gchg","chh",2)
w(C.aFR.prototype,"gcd4","cd5",69)
t(C.aFT.prototype,"gaRO",0,0,null,["$1","$0"],["Ib","bL2"],70,0,0)
s(C,"hz5","ibe",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.aoX,C.uD,C.nq,C.HY,C.af6,C.Kh,C.uE,C.bRZ,C.t3,C.boh,C.alu,C.add,C.ln,C.bQA,C.att,C.zg,C.ak9,C.Mf,C.b9N,C.a9l,C.bh0,C.afd,C.azg,C.af1,C.aK4,C.Kp,C.G9,C.bfT,C.aK_,C.aqe,C.de8,C.lQ,C.aUq,C.aUp,C.aSn,C.u7,C.rg,C.ly,C.hW,C.kP,C.aHY])
u(A.hy,[C.fJF,C.fJE,C.fJG,C.fT7,C.fxB,C.fxC,C.fxH,C.fHo,C.fHn,C.fHm,C.c6H,C.fTE,C.fTw,C.fTI,C.fBW,C.dMI,C.dMD,C.dME,C.dMg,C.dMc,C.dMX,C.dMY,C.dMR,C.dMS,C.dMZ,C.dN_,C.fCz,C.fEW,C.fEX,C.fSd,C.h_z,C.fBN,C.fSM,C.ddl,C.dcI,C.dcR,C.dd7,C.dcN,C.dcT,C.dcK,C.dcX,C.dcY,C.dcW,C.ddc,C.ddb,C.df7,C.df8,C.df9,C.ddz,C.ddE,C.ddD,C.cLV,C.cLX,C.d4u,C.d4T,C.d4U,C.d4X,C.d4Z,C.d5_,C.d50,C.d52,C.d53,C.bQk,C.bQe,C.fqv,C.h_s,C.h_t,C.h_u,C.h_p,C.h_v,C.h_w,C.h_x,C.h_o,C.fD5,C.fRg,C.fzx,C.fFR,C.bLA,C.h_R,C.fRM,C.bJO,C.bJJ,C.bJL,C.bJK,C.cnA,C.cnv,C.cnw,C.cnu,C.cns,C.cnx,C.cMZ,C.cCw,C.cCz,C.cCx,C.cCA,C.cCB,C.f3e,C.fdk,C.bR6,C.bR0,C.bR4,C.bQI,C.dZ5,C.dZ2,C.dZ3,C.dZ1,C.dZ7,C.bQZ,C.bQP,C.bQz,C.bQy,C.bQu,C.bQv,C.bQw,C.bQx,C.e_L,C.e_a,C.e_5,C.dZx,C.dZN,C.dZQ,C.dZM,C.dZL,C.e_1,C.e_2,C.dZX,C.dZl,C.e_d,C.e_7,C.dZn,C.dZo,C.dZp,C.dZu,C.dZs,C.dZr,C.dZH,C.dZI,C.dZC,C.e_k,C.e_g,C.ddK,C.ddL,C.fCD,C.fCE,C.fCF,C.fCB,C.fCC,C.fCI,C.fCJ,C.fCK,C.fCG,C.fCH,C.de3,C.ddU,C.ddP,C.ddZ,C.de_,C.de2,C.ddR,C.de5,C.de6,C.de7,C.fj8,C.eU2,C.dtW,C.du5,C.du6,C.du7,C.dua,C.du9,C.dub,C.dug,C.duh,C.cdl,C.cdk,C.cdg,C.cdh,C.cdi,C.cdj,C.cdq,C.cdn,C.cdo,C.e_x,C.e_A,C.e_z,C.e_G,C.e_H,C.dM1,C.fTe,C.fSB,C.h_6,C.fSG,C.fSF,C.d5h,C.d5i,C.d5d,C.cDP,C.cDR,C.cDS,C.cDK,C.cDT,C.fis,C.fR3,C.eRa,C.eR6,C.eR2,C.eR0,C.eRe,C.fZX,C.eRn,C.eRw,C.eRr,C.eRs,C.eRB,C.cD5,C.cD3,C.cD4,C.fBD,C.h_H,C.fzw,C.bRt,C.bRs,C.bRp,C.bRq,C.bRr,C.flX,C.flY,C.fSs,C.fSt,C.fSu,C.fSv,C.fSw,C.h_F,C.fC6,C.fF1,C.fF2,C.fF4,C.fF5,C.fSf,C.h_A,C.h_B,C.h_C,C.fBO,C.fBP,C.h_L,C.fBi,C.fBj,C.h_7,C.fFS,C.fS8,C.fEZ,C.fF_,C.fS3,C.fmu,C.fmv,C.fmw,C.fmx,C.fmy,C.fmM,C.fmI,C.fmJ,C.fqO,C.fqP,C.ftD,C.fyQ,C.fyR])
u(A.aw,[C.aZV,C.ala,C.aVG,C.Z4,C.bbw,C.Q8,C.a5S,C.tr,C.I_,C.bfR,C.bjH,C.bxB,C.bn_,C.adz,C.bjG,C.ady,C.bjF,C.aCR,C.aJ1,C.adA,C.G5,C.bfS,C.acP,C.bfQ,C.bfV,C.aZT,C.ath,C.adV])
u(A.mf,[C.bc8,C.bdl,C.bdc,C.aHT,C.biI,C.bog,C.aVL,C.bc9,C.aAQ,C.bbF,C.bsf,C.biQ,C.bif,C.bin,C.bfU,C.beW,C.bkP,C.bxo])
u(A.iG,[C.fTB,C.fTC,C.fTD,C.fTu,C.fTv,C.fTG,C.fTH,C.dMU,C.dMG,C.dMJ,C.dMn,C.dMo,C.dMp,C.dMm,C.dMu,C.dMl,C.dMv,C.dMw,C.dMk,C.dMx,C.dMj,C.dMy,C.dMi,C.dMz,C.dMa,C.dMb,C.dMh,C.dMA,C.dMf,C.dMB,C.dMe,C.dMq,C.dMd,C.dMr,C.dM9,C.dMs,C.dMt,C.dMV,C.dMW,C.dMK,C.dML,C.dMM,C.dMN,C.dMO,C.dMP,C.dMQ,C.dN1,C.dMT,C.fCA,C.dcG,C.dcE,C.dcF,C.dcH,C.ddk,C.dd9,C.dd6,C.dcJ,C.dda,C.dcP,C.dcQ,C.dcS,C.dd8,C.dcO,C.dcU,C.ddh,C.dd3,C.dd2,C.dd4,C.dd5,C.dcZ,C.dd0,C.dd1,C.dcV,C.ddd,C.ddg,C.dcL,C.dcM,C.df6,C.df5,C.df4,C.df3,C.dfa,C.df2,C.dfb,C.ddA,C.ddB,C.ddC,C.ddF,C.ddy,C.ddx,C.cLW,C.d4t,C.d4G,C.d4F,C.d4V,C.d4E,C.d4W,C.d4D,C.d4C,C.d4Y,C.d4B,C.d4O,C.d4N,C.d54,C.bQd,C.bQn,C.bQf,C.bQg,C.bQj,C.bQi,C.bQl,C.bQm,C.bQh,C.bQb,C.bQc,C.bRR,C.bRS,C.bRT,C.bRU,C.bRV,C.bRW,C.bRX,C.h_r,C.fRh,C.bJN,C.bJI,C.bJG,C.bJH,C.bJF,C.cnC,C.cnD,C.cnB,C.cnE,C.cnG,C.cnH,C.cnI,C.cny,C.cCv,C.cCE,C.cCF,C.cCG,C.cCD,C.cCH,C.cCI,C.cCJ,C.cCK,C.cCy,C.cCC,C.bRm,C.bRl,C.bRj,C.bRh,C.bRi,C.bRe,C.bRf,C.bRg,C.bRk,C.bRd,C.f3f,C.f3g,C.f3h,C.f3i,C.f3j,C.bRa,C.bRb,C.bRc,C.bR5,C.bR7,C.bR8,C.bR9,C.bR1,C.bQM,C.bQL,C.bQK,C.bQE,C.bQF,C.bQJ,C.bQG,C.bQH,C.bQD,C.dZ4,C.dZ6,C.dZ_,C.dZ0,C.dYZ,C.dZ8,C.dZ9,C.dZa,C.dZd,C.dZe,C.dZf,C.dZg,C.dZh,C.dZi,C.dZj,C.dZk,C.dZb,C.dZc,C.bQY,C.bQX,C.bQO,C.bQN,C.bQU,C.bQV,C.bQR,C.bQS,C.bQT,C.bQQ,C.bQo,C.bQp,C.bQt,C.bQs,C.bQr,C.bQq,C.e_K,C.e_J,C.e_M,C.e_N,C.e_O,C.e_I,C.e_Q,C.e_P,C.e_8,C.e_9,C.e_b,C.dZy,C.dZP,C.dZO,C.dZR,C.e_4,C.dZK,C.dZV,C.dZW,C.dZU,C.dZS,C.dZT,C.dZY,C.dZZ,C.e__,C.e_3,C.dZm,C.e_6,C.dZq,C.dZt,C.dZv,C.e_c,C.dZB,C.dZz,C.dZD,C.dZE,C.dZA,C.dZF,C.dZJ,C.e_l,C.e_m,C.e_e,C.e_h,C.e_i,C.e_j,C.e_o,C.e_f,C.dZw,C.ddJ,C.ddI,C.ddN,C.ddX,C.ddO,C.eU1,C.dtX,C.dtU,C.dtV,C.du4,C.du3,C.du2,C.duc,C.du1,C.dud,C.du0,C.due,C.du_,C.duf,C.dtZ,C.dtY,C.du8,C.dui,C.dur,C.e_y,C.e_C,C.e_D,C.e_u,C.e_v,C.e_w,C.e_B,C.e_F,C.e_E,C.e_p,C.e_q,C.e_r,C.e_s,C.e_t,C.dM2,C.fTb,C.clU,C.d5g,C.d5f,C.d5j,C.d5c,C.d5e,C.cDH,C.cDN,C.cDO,C.cDM,C.cDQ,C.cDL,C.cDI,C.cDJ,C.cDU,C.fit,C.fiu,C.eRc,C.eR3,C.eR4,C.eR5,C.eR7,C.eR8,C.eRb,C.eQZ,C.eR1,C.eRd,C.eR_,C.eRg,C.eRh,C.eRi,C.eRj,C.eRf,C.eQU,C.eQV,C.eQW,C.eQY,C.eQX,C.eRC,C.eRD,C.eRl,C.eRm,C.eRt,C.eRu,C.eRv,C.eRp,C.eRq,C.eRJ,C.eRI,C.eRK,C.eRH,C.eRk,C.eRo,C.eRF,C.eRE,C.eRz,C.eRA,C.eRy,C.eRx])
u(A.af,[C.ap8,C.Tb,C.ZN,C.ZR,C.ZP,C.Zn,C.alb,C.ajo,C.au4,C.ay0,C.alk,C.ali,C.ale,C.Vy,C.alg,C.Tc,C.aqh,C.aqb,C.a_r,C.aqf,C.a_M,C.a_N,C.a6G,C.Zp,C.Zo,C.YW,C.a1z,C.FV,C.ay8,C.atg,C.ata,C.atf,C.Ou])
u(A.ah,[C.aDR,C.bfL,C.aAR,C.bg9,C.aAU,C.bdj,C.aAS,C.az1,C.aGg,C.ay1,C.aAW,C.aAV,C.aAT,C.bl8,C.alh,C.ald,C.aEp,C.aEm,C.aCQ,C.aEo,C.aEn,C.bl9,C.aMs,C.azA,C.azz,C.ayf,C.bxr,C.aOy,C.aOz,C.aFS,C.bmv,C.aFR,C.bze])
u(A.jv,[C.dMF,C.dMH,C.dMC,C.dN0,C.fEY,C.bQa,C.ddj,C.ddi,C.dd_,C.dde,C.ddf,C.ddG,C.bRY,C.bRQ,C.bQB,C.bQC,C.h_q,C.h_Q,C.bJM,C.cnF,C.cnz,C.cnt,C.f3k,C.bR_,C.bR2,C.bR3,C.doh,C.bQW,C.e_0,C.dZG,C.e_n,C.ddW,C.ddV,C.ddT,C.ddY,C.de0,C.de1,C.ddM,C.ddQ,C.ddS,C.de4,C.cde,C.cdm,C.cdr,C.dM3,C.fTd,C.fTc,C.fiq,C.fir,C.eR9,C.eRG,C.cD6,C.fq7,C.flZ,C.fF3,C.fBk,C.fF0,C.fmL,C.fmK,C.fqQ])
u(A.lA,[C.a14,C.aff,C.a1n,C.a_e,C.abT,C.aKN,C.HZ,C.alm,C.cD7,C.cD8])
t(C.alc,C.aAS)
t(C.ajp,C.az1)
t(C.au5,C.aGg)
t(C.bfP,C.aAW)
t(C.all,C.bfP)
t(C.bfO,C.aAV)
t(C.alj,C.bfO)
t(C.bfN,C.aAT)
t(C.alf,C.bfN)
t(C.bkQ,C.aMs)
t(C.bxp,C.aOy)
t(C.bxq,C.aOz)
t(C.aFT,C.bze)
t(C.ba_,A.b9O)
t(C.bxs,A.a6l)
t(C.b9Z,C.bxs)
w(C.aAS,A.cg)
w(C.az1,A.cg)
w(C.aGg,A.eQ)
w(C.aAT,A.cg)
v(C.bfN,C.af1)
w(C.aAV,A.cg)
v(C.bfO,C.af1)
w(C.aAW,A.cg)
v(C.bfP,C.af1)
w(C.aMs,A.eQ)
w(C.aOy,A.cg)
w(C.aOz,A.cg)
v(C.bze,A.eE)
v(C.bxs,A.jc)})()
A.j0(b.typeUniverse,JSON.parse('{"aZV":{"aw":[],"v":[]},"bc8":{"aC":[]},"ap8":{"af":[],"v":[]},"aDR":{"ah":["ap8"]},"Tb":{"af":[],"v":[]},"ala":{"aw":[],"v":[]},"aVG":{"aw":[],"v":[]},"bfL":{"ah":["Tb"]},"ZN":{"af":[],"v":[]},"ZR":{"af":[],"v":[]},"ZP":{"af":[],"v":[]},"Zn":{"af":[],"v":[]},"aAR":{"ah":["ZN"]},"bg9":{"ah":["ZR"]},"aAU":{"ah":["ZP"]},"Z4":{"aw":[],"v":[]},"bdl":{"aC":[]},"bdc":{"aC":[]},"bdj":{"ah":["Zn"]},"aHT":{"aC":[]},"biI":{"aC":[]},"bbw":{"aw":[],"v":[]},"alb":{"af":[],"v":[]},"alc":{"ah":["alb"]},"bog":{"aC":[]},"aVL":{"aC":[]},"ajo":{"af":[],"v":[]},"au4":{"af":[],"v":[]},"ay0":{"af":[],"v":[]},"ajp":{"ah":["ajo"]},"bc9":{"aC":[]},"Q8":{"aw":[],"v":[]},"aAQ":{"aC":[]},"au5":{"ah":["au4"]},"bbF":{"aC":[]},"ay1":{"ah":["ay0"]},"alk":{"af":[],"v":[]},"ali":{"af":[],"v":[]},"ale":{"af":[],"v":[]},"all":{"ah":["alk"]},"bsf":{"aC":[]},"alj":{"ah":["ali"]},"biQ":{"aC":[]},"alf":{"ah":["ale"]},"bif":{"aC":[]},"Vy":{"af":[],"v":[]},"alg":{"af":[],"v":[]},"Tc":{"af":[],"v":[]},"a5S":{"aw":[],"v":[]},"bin":{"aC":[]},"tr":{"aw":[],"v":[]},"I_":{"aw":[],"v":[]},"bl8":{"ah":["Vy"]},"alh":{"ah":["alg"]},"ald":{"ah":["Tc"]},"aqh":{"af":[],"v":[]},"aqb":{"af":[],"v":[]},"a_r":{"af":[],"v":[]},"adA":{"aw":[],"v":[]},"aEp":{"ah":["aqh"]},"aEm":{"ah":["aqb"]},"bfR":{"aw":[],"v":[]},"bfU":{"aC":[]},"bjH":{"aw":[],"v":[]},"beW":{"aC":[]},"bxB":{"aw":[],"v":[]},"bn_":{"aw":[],"v":[]},"aCQ":{"ah":["a_r"]},"adz":{"aw":[],"v":[]},"bjG":{"aw":[],"v":[]},"ady":{"aw":[],"v":[]},"bjF":{"aw":[],"v":[]},"aCR":{"aw":[],"v":[]},"aJ1":{"aw":[],"v":[]},"G5":{"aw":[],"v":[]},"aqf":{"af":[],"v":[]},"a_M":{"af":[],"v":[]},"a_N":{"af":[],"v":[]},"aEo":{"ah":["aqf"]},"bfS":{"aw":[],"v":[]},"acP":{"aw":[],"v":[]},"bfQ":{"aw":[],"v":[]},"bfV":{"aw":[],"v":[]},"aEn":{"ah":["a_M"]},"bl9":{"ah":["a_N"]},"aZT":{"aw":[],"v":[]},"a6G":{"af":[],"v":[]},"bkQ":{"ah":["a6G"]},"bkP":{"aC":[]},"ath":{"aw":[],"v":[]},"Zp":{"af":[],"v":[]},"Zo":{"af":[],"v":[]},"YW":{"af":[],"v":[]},"a1z":{"af":[],"v":[]},"azA":{"ah":["Zp"]},"azz":{"ah":["Zo"]},"ayf":{"ah":["YW"]},"bxr":{"ah":["a1z"]},"FV":{"af":[],"v":[]},"ay8":{"af":[],"v":[]},"bxp":{"ah":["FV"]},"bxq":{"ah":["ay8"]},"bxo":{"aC":[]},"atg":{"af":[],"v":[]},"aFS":{"ah":["atg"]},"adV":{"aw":[],"v":[]},"ata":{"af":[],"v":[]},"atf":{"af":[],"v":[]},"bmv":{"ah":["ata"]},"aFR":{"ah":["atf"]},"Ou":{"af":[],"v":[]},"aFT":{"ah":["Ou"],"eE":[]},"b9Z":{"jc":[],"fi":[]}}'))
A.CU(b.typeUniverse,JSON.parse('{"af1":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.at
return{e2:w("aSn"),cq:w("mb"),Q:w("rg"),r:w("bu<n,n>"),c5:w("aUp"),dY:w("aUq"),fH:w("Mf"),de:w("ak9"),dN:w("Mm<G>"),gc:w("DW<G>"),A:w("eJ<n?>"),e:w("HY"),B:w("nq"),P:w("hW"),df:w("ln"),k:w("kP"),x:w("aB<~>"),U:w("O<Sl>"),V:w("O<ac>"),C:w("O<rg>"),O:w("O<u>"),c:w("O<Mf>"),b:w("O<ak9>"),ac:w("O<eJ<n?>>"),I:w("O<nq>"),u:w("O<hW>"),J:w("O<ln>"),_:w("O<kP>"),cl:w("O<aB<ai<a8<n,@>>>>"),R:w("O<ns>"),eU:w("O<ai<+(K,K)>>"),ez:w("O<a8<n,aD>>"),gE:w("O<a8<n,n>>"),Y:w("O<a8<n,@>>"),fD:w("O<mK>"),bp:w("O<ow>"),g:w("O<t>"),ar:w("O<att>"),v:w("O<fV>"),gy:w("O<a9l>"),L:w("O<+(n,n)>"),G:w("O<+(K,K)>"),E:w("O<+(K,~())>"),bd:w("O<+(n,G,R)>"),bF:w("O<+count,id,name(G,n,n)>"),F:w("O<cW>"),s:w("O<n>"),cF:w("O<au>"),aS:w("O<j_>"),dT:w("O<b9N>"),p:w("O<v>"),Z:w("O<fi>"),D:w("O<ly>"),h:w("O<azg>"),cC:w("O<bh0>"),fp:w("O<Kh>"),M:w("O<Kp>"),gZ:w("O<aHY>"),gA:w("O<af6>"),e4:w("O<afd>"),dE:w("O<aK_>"),f7:w("O<R>"),n:w("O<K>"),t:w("O<G>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cw<ah<af>>"),d:w("ai<nq>"),do:w("ai<hW>"),cg:w("ai<ln>"),ax:w("ai<kP>"),fO:w("ai<a8<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(G,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<ly>"),j:w("ai<@>"),fK:w("bA<n,n>"),d2:w("bA<n,ai<a8<n,@>>>"),a:w("a8<n,@>"),f:w("a8<@,@>"),gv:w("N<n,I0>"),cM:w("N<G,n>"),w:w("iB"),g2:w("rB"),bV:w("aoX"),fL:w("cv"),K:w("aD"),dc:w("fV"),fo:w("OQ<G>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(R,G)"),d9:w("+dx,hidden(K,ai<hW>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),fT:w("jd<hW>"),ec:w("jd<n>"),gW:w("qX<K>"),X:w("bq<K>"),bW:w("dK"),W:w("bR<n>"),b4:w("bR<G>"),cI:w("jX<n>"),av:w("Z<zg>"),cc:w("Z<n>"),l:w("v"),gF:w("fi"),fA:w("ly"),dO:w("G9"),bw:w("ady<n?>"),cy:w("Kr"),q:w("mt"),y:w("R"),i:w("K"),z:w("@"),S:w("G"),eK:w("ai<kP>?"),m:w("aqe?"),cT:w("t?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),he:w("+qrPayload,token,usesRemaining(n,n,G)?"),gG:w("+members,trees,viewOnly(G,G,R)?"),az:w("qb?"),T:w("n?"),aD:w("dK?"),o:w("ly?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b2j=new A.bh(B.fE,B.bH,B.fE,B.bH)
D.acN=new A.bh(B.fE,B.it,B.fE,B.it)
D.b2x=new A.bh(B.id,B.bH,B.bH,B.bH)
D.b2B=new A.ay(B.cQ,1.4,B.r,-1)
D.b2L=new A.ay(B.ac,1,B.r,-1)
D.adh=new A.aZ(140,1/0,0,1/0)
D.b49=new A.aZ(0,1/0,64,1/0)
D.b4d=new A.aZ(0,84,0,1/0)
D.adp=new A.aZ(130,1/0,0,1/0)
D.aBr=w([B.m1,B.rt,B.c],x.O)
D.c4n=new A.a9(B.ay,B.aE,B.x,D.aBr,null,null)
D.b4X=new A.o(null,null,null,null,null,D.c4n,B.n)
D.dbc=w([B.aW,B.bP],x.O)
D.c6v=new A.a9(B.b0,B.b6,B.x,D.dbc,null,null)
D.b5h=new A.o(null,null,null,null,null,D.c6v,B.n)
D.Xx=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fq=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.df4=w([B.dv,D.Xx,D.fq],x.O)
D.c3z=new A.a9(B.b0,B.b6,B.x,D.df4,null,null)
D.b61=new A.o(null,null,null,null,null,D.c3z,B.n)
D.fl9=new A.F(!0,B.bU,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW7=new A.y("?",null,D.fl9,null,null,null,null,null,null,null,null,null)
D.b9H=new A.cf(B.A,null,null,D.fW7,null)
D.Vf=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEh=new A.y("\ud83c\udf33",null,D.Vf,null,null,null,null,null,null,null,null,null)
D.ae9=new A.cf(B.A,null,null,D.fEh,null)
D.fGT=new A.y("\ud83c\udfc6",null,At.Ke,null,null,null,null,null,null,null,null,null)
D.b9S=new A.cf(B.A,null,null,D.fGT,null)
D.bbJ=new A.fl(null,null,null,null,null,E.ke,null,null,null,null)
D.aeb=new A.cf(B.A,null,null,D.bbJ,null)
D.kF=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.flI=new A.F(!0,D.kF,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFY=new A.y("No books on the shelf yet.",null,D.flI,null,null,null,null,null,null,null,null,null)
D.enn=new A.D(B.nw,D.fFY,null)
D.ba7=new A.cf(B.A,null,null,D.enn,null)
D.fsF=new A.F(!0,D.fq,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fX2=new A.y("\ud83d\ude8c  On the road\u2026",null,D.fsF,null,null,null,null,null,null,null,null,null)
D.enY=new A.D(B.ck,D.fX2,null)
D.baA=new A.cf(B.A,null,null,D.enY,null)
D.aV6=new A.y("\ud83e\uddfa",null,D.Vf,null,null,null,null,null,null,null,null,null)
D.baQ=new A.cf(B.A,null,null,D.aV6,null)
D.fJl=new A.y("\ud83c\udfad",null,D.Vf,null,null,null,null,null,null,null,null,null)
D.bb1=new A.cf(B.A,null,null,D.fJl,null)
D.bb4=new A.cf(B.A,null,null,A9.Xn,null)
D.aew=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.aeD=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bdg=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bdl=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bdw=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bdy=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bdA=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bdI=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lx=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bdL=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bdQ=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bdR=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bdS=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.ly=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bet=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.B9=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.beC=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.beW=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.beZ=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bf4=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bfc=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.afg=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bfi=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.XI=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.afj=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bfv=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.XK=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bfR=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.afu=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bgd=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bgt=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bgR=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bh0=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.Fp=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bhl=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bhn=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bhr=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.afV=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bhL=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bhQ=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bhW=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.afZ=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bi3=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.biw=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.biE=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.biG=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.biL=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.age=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bjn=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.agB=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bkj=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.agO=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bkI=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.FD=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bkO=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bkY=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bl_=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.agS=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.blh=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bli=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bll=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.agZ=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Yn=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.blE=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.blZ=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bm3=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ahb=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bma=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Yt=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bms=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bmt=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.FK=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bne=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bnR=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bnX=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bo0=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.q5=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.boa=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.boe=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bok=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bom=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.ahT=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.ahY=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.FR=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.YK=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.ai6=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bpu=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bpN=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bqb=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bqk=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.aiu=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.YT=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bqt=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bqJ=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.YW=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bqX=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.brc=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.Z_=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.brh=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.aiO=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.aiR=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.brz=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.aiX=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bs0=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bs2=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bs8=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bse=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bsm=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bsU=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.btn=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fAc=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bwS=new A.eJ(null,D.fAc,B.f5,null,x.A)
D.fJc=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bwU=new A.eJ(null,D.fJc,B.f5,null,x.A)
D.ajR=new A.bb(3e4)
D.bxr=new A.bb(38e5)
D.byb=new A.ik(0,10,0,10)
D.byk=new A.P(0,1,0,0)
D.byv=new A.ik(0,4,0,4)
D.byy=new A.P(0,4,5,0)
D.byP=new A.P(10,10,14,10)
D.bz0=new A.ik(10,4,10,4)
D.bz8=new A.ik(10,8,10,8)
D.bz9=new A.P(10,8,8,8)
D.bzC=new A.P(12,6,12,2)
D.bzS=new A.P(14,0,14,6)
D.bzW=new A.P(14,10,6,6)
D.bzX=new A.P(14,12,14,0)
D.bA0=new A.P(14,12,14,8)
D.bA3=new A.P(14,12,8,14)
D.bA7=new A.ik(14,14,14,14)
D.bAo=new A.P(14,6,14,40)
D.bAr=new A.P(14,8,14,30)
D.bAP=new A.P(16,2,16,10)
D.bAZ=new A.P(16,6,16,30)
D.bB0=new A.P(16,6,16,8)
D.bBe=new A.P(18,10,18,4)
D.bBg=new A.P(18,12,18,0)
D.bBn=new A.P(18,14,12,4)
D.alk=new A.P(18,16,18,8)
D.bBE=new A.P(18,20,18,22)
D.alo=new A.P(18,24,18,24)
D.bBK=new A.P(18,30,18,30)
D.bC1=new A.P(20,10,12,20)
D.bC4=new A.P(20,11,20,11)
D.bCf=new A.P(20,18,16,18)
D.bCh=new A.P(20,18,20,6)
D.bD6=new A.P(24,32,24,28)
D.bD7=new A.P(24,36,24,32)
D.bDb=new A.P(26,26,24,14)
D.bDq=new A.P(2,4,2,8)
D.bDu=new A.P(30,0,30,0)
D.bDF=new A.P(38,22,22,22)
D.alI=new A.P(40,24,24,24)
D.bDH=new A.ik(40,40,40,40)
D.bDJ=new A.P(46,30,30,30)
D.alL=new A.P(4,0,0,8)
D.bE9=new A.P(56,40,40,40)
D.bEd=new A.P(1.25,1.25,1.25,1.25)
D.bEe=new A.P(60,0,60,0)
D.bEi=new A.P(6,14,6,16)
D.bEm=new A.P(6,4,12,0)
D.bEq=new A.P(6,6,10,2)
D.bEx=new A.ik(7,3,7,3)
D.bF5=new A.P(5,1.5,5,1.5)
D.bFg=new A.P(6,2.5,6,2.5)
D.fRi=new A.y("Family Games",null,B.k8,null,null,null,null,null,null,null,null,null)
D.fyP=new A.y("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,I.aa7,null,null,null,null,null,null,null,null,null)
D.cFn=w([D.fRi,D.fyP],x.p)
D.bup=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cFn,null)
D.bFy=new A.by(1,B.ba,D.bup,null)
D.fVE=new A.y("Signature",null,B.n3,null,null,null,null,null,null,null,null,null)
D.bFB=new A.by(1,B.ba,D.fVE,null)
D.fNU=new A.y("MADE BY THE ONE WHO PLANTED THE TREE",null,T.tm,null,null,null,null,null,null,null,null,null)
D.bG9=new A.by(1,B.ba,D.fNU,null)
D.fSL=new A.y("Tell the AI what to fix",null,B.de,null,null,null,null,null,null,null,null,null)
D.bGq=new A.by(1,B.ba,D.fSL,null)
D.ftr=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUJ=new A.y("Worksheets",null,D.ftr,null,null,null,null,null,null,null,null,null)
D.ftC=new A.F(!0,E.af_,null,null,null,null,13,B.cA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTA=new A.y("Track your project spending",null,D.ftC,null,null,null,null,null,null,null,null,null)
D.d2I=w([D.fUJ,B.au,D.fTA],x.p)
D.bu1=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.d2I,null)
D.bGw=new A.by(1,B.ba,D.bu1,null)
D.fos=new A.F(!0,E.ke,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzn=new A.y("FAMILY LIBRARY",null,D.fos,null,null,null,null,null,null,null,null,null)
D.bGO=new A.by(1,B.ba,D.fzn,null)
D.O_=new C.HY("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wb=new C.HZ(0,"male")
D.oi=new C.HZ(1,"female")
D.yG=new C.HZ(2,"unknown")
D.uk=new C.alm(0,"owner")
D.O0=new C.alm(1,"editor")
D.kM=new C.alm(2,"viewer")
D.anx=new A.a0(61199,"MaterialIcons",!1)
D.bLN=new A.a0(61504,"MaterialIcons",!1)
D.bLO=new A.a0(61505,"MaterialIcons",!1)
D.bLQ=new A.a0(61587,"MaterialIcons",!1)
D.bLX=new A.a0(61890,"MaterialIcons",!1)
D.bMO=new A.a0(63034,"MaterialIcons",!0)
D.bN5=new A.a0(63153,"MaterialIcons",!1)
D.bNC=new A.a0(63429,"MaterialIcons",!1)
D.apK=new A.a0(984520,"MaterialIcons",!1)
D.bMl=new A.a0(62776,"MaterialIcons",!1)
D.bPY=new A.ae(D.bMl,26,B.b1,null,null,null)
D.bKL=new A.a0(57648,"MaterialIcons",!1)
D.bQh=new A.ae(D.bKL,14,B.c,null,null,null)
D.bQy=new A.ae(B.GX,17,null,null,null,null)
D.bQE=new A.ae(B.a1r,null,B.bP,null,null,null)
D.bR5=new A.ae(E.a1x,null,null,null,null,null)
D.bR8=new A.ae(B.iY,18,E.ke,null,null,null)
D.a1h=new A.a0(62044,"MaterialIcons",!1)
D.bRd=new A.ae(D.a1h,null,B.aW,null,null,null)
D.bRk=new A.ae(B.yT,18,B.c,null,null,null)
D.bS2=new A.ae(B.e5,16,null,null,null,null)
D.bS9=new A.ae(D.a1h,32,B.aW,null,null,null)
D.bSs=new A.ae(E.any,18,B.cQ,null,null,null)
D.bTw=new A.ae(B.H8,22,B.ax,null,null,null)
D.bTI=new A.ae(B.e5,22,B.b1,null,null,null)
D.bTV=new A.ae(Z.a1m,22,B.c,null,null,null)
D.bU0=new A.ae(B.uv,52,B.c,null,null,null)
D.bUa=new A.ae(B.H8,30,B.ax,null,null,null)
D.bUt=new A.ae(B.a1C,null,B.c,null,null,null)
D.aqp=new A.ae(B.uG,22,B.c,null,null,null)
D.bUC=new A.ae(B.e5,17,null,null,null,null)
D.bUZ=new A.ae(B.wr,26,B.cQ,null,null,null)
D.bVK=new A.ae(B.a1K,16,null,null,null,null)
D.bWv=new A.ae(B.uv,24,B.c,null,null,null)
D.bWA=new A.ae(B.Ot,20,B.rX,null,null,null)
D.bWF=new A.ae(B.GV,null,B.bP,null,null,null)
D.bWN=new A.ae(B.iY,18,B.c,null,null,null)
D.bXr=new A.ae(B.cx,22,B.ac,null,null,null)
D.bYh=new A.ae(B.eb,16,B.ac,null,null,null)
D.bYt=new A.ae(D.a1h,20,B.aW,null,null,null)
D.aqP=new A.ae(B.hA,20,null,null,null,null)
D.bYY=new A.ae(B.cx,18,D.kF,null,null,null)
D.bZe=new A.ae(B.z0,28,B.c,null,null,null)
D.bZo=new A.ae(B.Oj,null,B.fa,null,null,null)
D.bZI=new A.ae(B.z0,24,B.c,null,null,null)
D.c_9=new A.ae(B.uv,null,B.aW,null,null,null)
D.c_a=new A.ae(B.jX,20,B.cQ,null,null,null)
D.c_u=new A.ae(B.GX,16,null,null,null,null)
D.c13=new A.e7(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jU,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eF,!0,null,null,null,null)
D.arw=new C.a5S(10,null)
D.c1z=new C.a5S(12,null)
D.c1A=new C.a5S(14,null)
D.dj3=w([B.bv,B.aW,B.fh,B.b1],x.O)
D.c2L=new A.a9(B.ay,B.aE,B.x,D.dj3,null,null)
D.bn0=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bt_=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d_f=w([D.bn0,D.bt_],x.O)
D.c2W=new A.a9(B.b0,B.b6,B.x,D.d_f,null,null)
D.dd9=w([B.f7,B.fM,B.fh],x.O)
D.c31=new A.a9(B.ay,B.aE,B.x,D.dd9,null,null)
D.ahI=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bdT=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d1q=w([D.ahI,D.bdT],x.O)
D.c3A=new A.a9(B.b0,B.b6,B.x,D.d1q,null,null)
D.bhA=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aAK=w([D.bhA,D.ahI],x.O)
D.c3U=new A.a9(B.ay,B.aE,B.x,D.aAK,null,null)
D.agw=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bka=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dcf=w([D.agw,D.bka],x.O)
D.c4y=new A.a9(B.a5,B.a8,B.x,D.dcf,null,null)
D.dq2=w([B.bB,B.nh],x.O)
D.c4A=new A.a9(B.b0,B.b6,B.x,D.dq2,null,null)
D.bmW=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dqZ=w([D.bmW,D.kF,D.kF,K.YJ],x.O)
D.dtu=w([0,0.07,0.9,1],x.n)
D.c55=new A.a9(B.a5,B.a8,B.x,D.dqZ,D.dtu,null)
D.c5f=new A.a9(B.ay,B.aE,B.x,B.S3,null,null)
D.cY5=w([B.aD,D.lx],x.O)
D.c5i=new A.a9(B.a5,B.a8,B.x,D.cY5,null,null)
D.dpC=w([B.b1,B.aW,B.bP],x.O)
D.c6g=new A.a9(B.ay,B.aE,B.x,D.dpC,null,null)
D.cau=w([10,20,30],x.t)
D.ckq=w([-1,-0.4,0.3,1],x.n)
D.crU=w([B.bv,B.b1,B.f7],x.O)
D.cs1=w([B.bq,B.aD,B.js],x.O)
D.cs3=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.csK=w([30,140,262,360],x.n)
D.blr=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cyg=w([D.blr,E.ahm],x.O)
D.ehZ=new A.t(1,2)
D.f6z=new A.cW(B.aS,D.ehZ,3)
D.axC=w([D.f6z],x.F)
D.cFF=w([B.hf,B.cf,B.fd],x.O)
D.cIo=w([B.bM,B.bs,B.bo],x.O)
D.bHm=new C.uD("classic","Classic leather","Gold-edged brown leather",D.aAK,E.ke,E.ke,"\u2766",B.K,!0,!1,!1,!1)
D.bd0=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.brR=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d4q=w([D.bd0,D.brR],x.O)
D.ahq=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bHh=new C.uD("ornate","Ornate gold","Double gold border and flourishes",D.d4q,D.ahq,D.ahq,"\u2726",B.K,!0,!0,!0,!1)
D.bh9=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bnM=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.cX_=w([D.bh9,D.bnM],x.O)
D.bHg=new C.uD("parchment","Parchment","Old paper with dark ink",D.cX_,D.FK,L.iS,"\u2767",B.K,!0,!1,!1,!0)
D.aeF=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bq7=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dnR=w([D.aeF,D.bq7],x.O)
D.bkV=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bpp=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bHj=new C.uD("minimal","Clean paper","Plain and elegant, like a printed book",D.dnR,D.bkV,D.bpp,"",B.K,!0,!0,!1,!0)
D.bHl=new C.uD("midnight","Midnight","Deep blue with silver stars",I.aB2,B.cq,B.bN,"\u2727",B.K,!0,!0,!1,!1)
D.bHf=new C.uD("emerald","Emerald library","Green cloth, title on the left",W.ay0,E.ke,B.fU,"\u25c6",B.bj,!0,!1,!1,!1)
D.bqB=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dlQ=w([B.ek,D.bqB],x.O)
D.bm9=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bnl=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bHk=new C.uD("rose","Rose vintage","Burgundy with rose-gold lettering",D.dlQ,D.bm9,D.bnl,"\u2740",B.K,!0,!1,!0,!1)
D.dqA=w([B.cr,F.ni],x.O)
D.bHi=new C.uD("modern","Modern","Dark, bold, left-aligned",D.dqA,B.aJ,B.c,"",B.bj,!1,!0,!1,!1)
D.a3R=w([D.bHm,D.bHh,D.bHg,D.bHj,D.bHl,D.bHf,D.bHk,D.bHi],A.at("O<uD>"))
D.cLl=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dqn=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bHx=new C.ln('What does "Ubuntu" mean?',D.dqn,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.cYL=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bHA=new C.ln("In Swahili, what do we call a grandmother?",D.cYL,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.cYC=w(["Babu","Mama","Baba","Dada"],x.s)
D.bHv=new C.ln("In Swahili, what do we call a grandfather?",D.cYC,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.cZR=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bHz=new C.ln("What is a sister called in Swahili?",D.cZR,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d3S=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bHw=new C.ln("What is a brother called in Swahili?",D.d3S,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.cYB=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bHH=new C.ln("Which word means father in Swahili?",D.cYB,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.drv=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bHG=new C.ln('"Umoja ni nguvu" means...',D.drv,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.doy=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bHI=new C.ln('"Haba na haba hujaza kibaba" teaches us...',D.doy,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d1y=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bHF=new C.ln('The African saying "It takes a village to raise a child" means...',D.d1y,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.drP=w(["The elders","The market","The river","The drum"],x.s)
D.bHB=new C.ln("Who is the traditional keeper of the family stories?",D.drP,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cPv=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bHy=new C.ln("Why do families sit round the fire at night?",D.cPv,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dqC=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bHD=new C.ln('What does "Harambee" mean?',D.dqC,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d6D=w(["An elder","A baby","A market","A cow"],x.s)
D.bHC=new C.ln('"Mzee" is a respectful word for...',D.d6D,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dlH=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bHE=new C.ln('What does "Shikamoo" show?',D.dlH,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.axW=w([D.bHx,D.bHA,D.bHv,D.bHz,D.bHw,D.bHH,D.bHG,D.bHI,D.bHF,D.bHB,D.bHy,D.bHD,D.bHC,D.bHE],x.J)
D.cTR=w([90,360],x.n)
D.cWx=w([B.bP,B.bl],x.O)
D.bmL=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.cXb=w([D.aeF,D.bmL],x.O)
D.cXP=w([-1,-0.3,0.4,1],x.n)
D.cYH=w([0,0.45,0.72,0.92,1],x.n)
D.bh5=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.cYZ=w([D.bh5,B.dd],x.O)
D.beR=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.aj6=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.cZx=w([B.dv,D.beR,D.aj6],x.O)
D.d_v=w([B.b8,B.ja,B.p_],x.O)
D.bhC=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bpg=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bex=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d_A=w([D.bhC,D.bpg,D.bex],x.O)
D.d_U=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d03=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hmc=new C.add(78,424,48,44,56)
D.hma=new C.add(214,396,34,34,42)
D.hmb=new C.add(442,452,56,50,64)
D.ayV=w([D.hmc,D.hma,D.hmb],A.at("O<add>"))
D.d0C=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bdN=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bjm=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dtq=w([D.agw,D.bdN,D.bjm],x.O)
D.bHn=new C.uE("leather","Leather",D.dtq,"vintage")
D.d7E=w([B.d7,B.Mi,Ab.XX],x.O)
D.bHu=new C.uE("midnight","Midnight",D.d7E,"starry")
D.d_w=w([B.ej,B.dY,B.l6],x.O)
D.bHt=new C.uE("forest","Forest",D.d_w,"story")
D.dvr=w([B.el,B.ek,B.jO],x.O)
D.bHq=new C.uE("burgundy","Burgundy",D.dvr,"royal")
D.cHX=w([B.aD,B.o9,B.nV],x.O)
D.bHr=new C.uE("royal","Royal",D.cHX,"royal")
D.d23=w([B.bs,B.cr,F.ni],x.O)
D.bHo=new C.uE("charcoal","Charcoal",D.d23,"geo")
D.dtz=w([B.cd,B.dH,B.xZ],x.O)
D.bHs=new C.uE("sunset","Sunset",D.dtz,"sunset")
D.dug=w([B.ja,B.FL,B.XZ],x.O)
D.bHp=new C.uE("ocean","Ocean",D.dug,"band")
D.zr=w([D.bHn,D.bHu,D.bHt,D.bHq,D.bHr,D.bHo,D.bHs,D.bHp],A.at("O<uE>"))
D.d2y=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d3a=w([B.al,B.aK,B.N],x.O)
D.d4v=w([B.ek,B.dY,B.d7,B.fV,B.y1,B.cQ,B.kh,B.e9,B.d0],x.O)
D.d4w=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.f6A=new A.cW(B.dm,B.dC,8)
D.d4H=w([D.f6A],x.F)
D.d5O=w([B.c_,B.dH,B.kd],x.O)
D.bfK=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bjE=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bnH=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d62=w([D.bfK,G.ahQ,D.bjE,D.bnH,D.aj6],x.O)
D.d6i=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d6t=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bdb=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bj0=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.d6V=w([D.bdb,D.afZ,D.bj0],x.O)
D.d7z=w([B.c_,B.hw],x.O)
D.d7F=w([G.na,B.i2,G.aeQ,B.cI],x.O)
D.d9c=w([B.cI,G.na,B.i2,D.ly,B.cI],x.O)
D.d9M=w([B.aT,B.vR,B.xN],x.O)
D.azY=w(["True","False"],x.s)
D.eF6=new A.z(-0.65,0.6)
D.eRI=new A.z(-0.2,0.95)
D.eSN=new A.z(0.25,0.95)
D.eIA=new A.z(0.7,0.6)
D.eTm=new A.z(1,0.1)
D.daz=w([As.TS,D.eF6,D.eRI,D.eSN,D.eIA,D.eTm],x.G)
D.blF=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.brJ=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bgI=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.daF=w([D.blF,D.brJ,D.bgI],x.O)
D.daJ=w([B.bL,B.c0,B.du,B.aT],x.O)
D.dbd=w([B.hZ,B.cd,B.tQ],x.O)
D.dbA=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dbL=w([B.f7,B.cQ],x.O)
D.bn4=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dca=w([D.bn4,D.aeD],x.O)
D.dcl=w([B.cL,B.fr,B.hN],x.O)
D.dcw=w([B.aJ,B.bl,B.d7],x.O)
D.dd6=w([B.ep,B.cT,B.dY],x.O)
D.ddr=w([B.dF,B.d7,B.Mi],x.O)
D.ddv=w([B.bt,B.lZ,B.d0],x.O)
D.ddM=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bmk=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bkE=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.de4=w([D.bmk,D.afV,D.bkE],x.O)
D.deQ=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dfT=w([1,0,7,6,3,2],x.t)
D.a4O=w(["leather","linen","plain","stars","rays"],x.s)
D.dg4=w([0.5,2,3.6],x.n)
D.dgB=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bPF=new A.a0(985219,"MaterialIcons",!1)
D.bPa=new A.a0(983781,"MaterialIcons",!1)
D.aAp=w([B.a1r,B.hB,B.lI,B.i7,D.bPF,B.Hj,B.qs,D.bPa,I.apy,B.Cv,B.qu,B.mN],A.at("O<a0>"))
D.a4S=w(["double","single","corners","none"],x.s)
D.bHc=new C.zg("Little Seed","\ud83c\udf31",0)
D.bHe=new C.zg("Young Listener","\ud83d\udc42",40)
D.bHd=new C.zg("Storyteller","\ud83e\ude98",120)
D.bHb=new C.zg("Village Pride","\ud83c\udfe1",300)
D.bH9=new C.zg("Keeper of Roots","\ud83c\udf33",700)
D.bHa=new C.zg("Elder of the Fire","\ud83d\udd25",1500)
D.aAr=w([D.bHc,D.bHe,D.bHd,D.bHb,D.bH9,D.bHa],A.at("O<zg>"))
D.dhI=w([B.dn,B.bn,B.e9],x.O)
D.dhW=w([],x.C)
D.D8=w([],x.u)
D.aKt=new A.t(225,528)
D.eGM=new A.z(D.aKt,1)
D.eiK=new A.t(350,548)
D.eN1=new A.z(D.eiK,0.95)
D.aKo=new A.t(158,656)
D.eMV=new A.z(D.aKo,1.12)
D.ejw=new A.t(92,544)
D.eCk=new A.z(D.ejw,0.93)
D.eiN=new A.t(398,614)
D.eIX=new A.z(D.eiN,1.04)
D.eiB=new A.t(318,662)
D.exO=new A.z(D.eiB,1.1)
D.a5_=w([D.eGM,D.eN1,D.eMV,D.eCk,D.eIX,D.exO],A.at("O<+(t,K)>"))
D.djV=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dkl=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dlo=w([B.cI,G.na,B.i2,D.ly,B.cI,B.i2],x.O)
D.dmQ=w([B.aA,B.fr,B.fV],x.O)
D.dn7=w([-12,12],x.n)
D.dna=w([-17,17],x.n)
D.dns=w([-70,58],x.n)
D.dnu=w([-70,-30,20],x.n)
D.dow=w([B.bt,B.lZ,B.YU],x.O)
D.doN=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dIv=new C.lQ("construction","Construction","Jobsite & builds",B.yV)
D.dIC=new C.lQ("house","Home Build","Houses & rooms",B.wm)
D.dIs=new C.lQ("grocery","Grocery","Store & pantry",B.a2j)
D.dIr=new C.lQ("calculator","Calculations","Math & estimates",B.OA)
D.dIA=new C.lQ("lumber","Materials","Lumber & supplies",B.OT)
D.dIo=new C.lQ("kitchen","Kitchen","Remodel & meals",A3.aoL)
D.bP8=new A.a0(983756,"MaterialIcons",!1)
D.dIt=new C.lQ("landscape","Landscaping","Yard & garden",D.bP8)
D.dIn=new C.lQ("plumbing","Plumbing","Pipes & water",B.pm)
D.dID=new C.lQ("electrical","Electrical","Wiring & power",B.hm)
D.dIl=new C.lQ("store","Retail Shop","Daily business",B.ld)
D.dIm=new C.lQ("paint_remodel","Paint & Remodel","Colors & walls",Ah.a1R)
D.bOz=new A.a0(983311,"MaterialIcons",!1)
D.dIz=new C.lQ("roofing","Roofing","Roofs & exteriors",D.bOz)
D.bPl=new A.a0(983986,"MaterialIcons",!1)
D.dIk=new C.lQ("warehouse","Warehouse","Storage & stock",D.bPl)
D.dIx=new C.lQ("vehicles","Vehicles","Fleet & transport",B.Hk)
D.bMn=new A.a0(62785,"MaterialIcons",!1)
D.dIq=new C.lQ("farm","Farm","Crops & livestock",D.bMn)
D.dIp=new C.lQ("restaurant","Restaurant","Food & catering",B.wv)
D.dIw=new C.lQ("tools","Tools","Workshop gear",B.Hf)
D.dIB=new C.lQ("wallet","Cash & Wallet","Quick spending",B.jX)
D.bNx=new A.a0(63395,"MaterialIcons",!1)
D.dIy=new C.lQ("concrete","Concrete","Foundation work",D.bNx)
D.dIu=new C.lQ("blueprint","Blueprint","Plans & design",Ao.ao2)
D.a5l=w([D.dIv,D.dIC,D.dIs,D.dIr,D.dIA,D.dIo,D.dIt,D.dIn,D.dID,D.dIl,D.dIm,D.dIz,D.dIk,D.dIx,D.dIq,D.dIp,D.dIw,D.dIB,D.dIy,D.dIu],A.at("O<lQ>"))
D.dpi=w([B.bu,B.bn],x.O)
D.dq3=w([B.iw,B.o2,B.dP],x.O)
D.agI=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ahE=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bkZ=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bcJ=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aBz=w([D.agI,D.ahE,D.bkZ,D.bcJ],x.O)
D.dre=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a5v=w(["top","middle","bottom"],x.s)
D.dsE=w([B.cp,B.bl,B.d7],x.O)
D.aBS=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b6u=new A.ac(0,B.G,B.aS,B.I,14)
D.aBV=w([D.b6u],x.V)
D.bjT=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dtj=w([D.afg,D.YT,D.bjT],x.O)
D.dtk=w([B.be,B.cT,B.dY],x.O)
D.eij=new A.t(24,-8)
D.ej2=new A.t(48,0)
D.eif=new A.t(24,6)
D.duZ=w([B.I,D.eij,D.ej2,D.eif],x.g)
D.dvn=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.ef1={top:0,middle:1,bottom:2}
D.dyz=new A.bu(D.ef1,["Top","Middle","Bottom"],x.r)
D.eeF={double:0,single:1,corners:2,none:3}
D.dyF=new A.bu(D.eeF,["Double line","One line","Corners","None"],x.r)
D.efL={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dA9=new A.bu(D.efL,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dAm=new A.bu(B.hT,[],A.at("bu<G,+(n,n)>"))
D.eeV={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Dl=new A.bu(D.eeV,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.at("bu<n,G>"))
D.dCU=new H.Nl(32,null)
D.dCV=new H.Nl(40,null)
D.dCW=new H.Nl(46,null)
D.aJX=new C.atf(null)
D.ehf=new A.t(0,40)
D.ehg=new A.t(0,412)
D.ehi=new A.t(0,900)
D.eht=new A.t(0,-74)
D.ehw=new A.t(100,300)
D.ehx=new A.t(10,14)
D.ehA=new A.t(10,-10)
D.ehE=new A.t(10,-46)
D.ehF=new A.t(10,-58)
D.ehG=new A.t(116,442)
D.ehH=new A.t(11,-1)
D.ehI=new A.t(11,-10)
D.ehJ=new A.t(11,-21)
D.aKj=new A.t(11,-60)
D.ehP=new A.t(14,-2)
D.ehQ=new A.t(150,520)
D.a7t=new A.t(150,592)
D.ehT=new A.t(15,-15)
D.ehU=new A.t(16,-1)
D.ehY=new A.t(190,444)
D.ei0=new A.t(1,5)
D.ei8=new A.t(21,-78)
D.ei9=new A.t(222,615)
D.Jf=new A.t(225,300)
D.a7v=new A.t(225,574)
D.eii=new A.t(24,-52)
D.eik=new A.t(250,210)
D.aKx=new A.t(300,0)
D.eix=new A.t(300,440)
D.eiA=new A.t(318,476)
D.eiD=new A.t(324,144)
D.a7y=new A.t(332,150)
D.eiF=new A.t(335,585)
D.eiG=new A.t(338,140)
D.eiH=new A.t(340,158)
D.eiJ=new A.t(34,-60)
D.DO=new A.t(36,-24)
D.eiL=new A.t(372,470)
D.eiM=new A.t(390,455)
D.eiV=new A.t(42,468)
D.eiW=new A.t(431,510)
D.eiX=new A.t(431,520)
D.eiY=new A.t(45,-92)
D.eiZ=new A.t(46,20)
D.ej_=new A.t(46,-92)
D.ej0=new A.t(46,-94)
D.ej1=new A.t(47,-4)
D.ej3=new A.t(48,-4)
D.ejb=new A.t(4,-26)
D.ejk=new A.t(60,455)
D.ejr=new A.t(8,14)
D.ejv=new A.t(8,-76)
D.ejx=new A.t(95,575)
D.ejy=new A.t(98,-24)
D.ejA=new A.t(9,-2)
D.ejB=new A.t(9,-58)
D.aKG=new A.t(9,-79)
D.ejC=new A.t(9,-9)
D.eke=new A.t(16.5,8)
D.ekg=new A.t(3.2,0)
D.eki=new A.t(-16.5,8)
D.ekp=new A.t(16.5,2)
D.eks=new A.t(-3.2,0)
D.ekB=new A.t(9.5,6)
D.ekF=new A.t(-10,14)
D.ekG=new A.t(-10,-12)
D.ekH=new A.t(-10,-58)
D.ekI=new A.t(-11,-1)
D.ekJ=new A.t(-11,-10)
D.ekL=new A.t(-11,-60)
D.ekM=new A.t(-12,-14)
D.ekN=new A.t(-12,-16)
D.ekU=new A.t(-14,-2)
D.ekX=new A.t(-15,-15)
D.ekY=new A.t(-15,-3)
D.el_=new A.t(-16,-1)
D.elg=new A.t(-24,-52)
D.eln=new A.t(-2,-34)
D.elo=new A.t(-2,-38)
D.elq=new A.t(-30,-100)
D.a7z=new A.t(-36,-24)
D.elB=new A.t(-4,-26)
D.elD=new A.t(-4,-6)
D.elM=new A.t(-8,-3)
D.elN=new A.t(-8,-48)
D.elQ=new A.t(-9,-2)
D.elS=new A.t(-9,-58)
D.elT=new A.t(-9,-79)
D.elU=new A.t(-9,-9)
D.elW=new A.t(-9.5,6)
D.em9=new A.t(-16.5,2)
D.fGA=new A.y("Write a new book",null,B.ht,null,B.K,null,null,null,null,null,null,null)
D.emJ=new A.D(B.kk,D.fGA,null)
D.fVc=new A.y("Tap to go on",null,B.vm,null,null,null,null,null,null,null,null,null)
D.en4=new A.D(B.l7,D.fVc,null)
D.apY=new A.ae(B.hQ,18,B.c,null,null,null)
D.fzJ=new A.y("Add",null,B.lq,null,null,null,null,null,null,null,null,null)
D.daX=w([D.apY,B.qU,D.fzJ],x.p)
D.f48=new A.ca(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.daX,null)
D.en7=new A.D(B.nt,D.f48,null)
D.en8=new A.D(E.akd,A9.Xn,null)
D.ftm=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCR=new A.y("New Project",null,D.ftm,null,null,null,null,null,null,null,null,null)
D.dfc=w([D.apY,B.ad,D.fCR],x.p)
D.f4b=new A.ca(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.dfc,null)
D.enm=new A.D(B.iq,D.f4b,null)
D.fFn=new A.y("Choose your header",null,A1.tj,null,null,null,null,null,null,null,null,null)
D.enH=new A.D(B.hO,D.fFn,null)
D.bbY=new A.fl(2.2,null,null,null,null,B.cQ,null,null,null,null)
D.f9r=new A.a4(22,22,D.bbY,null)
D.ba2=new A.cf(B.A,null,null,D.f9r,null)
D.enM=new A.D(B.a_8,D.ba2,null)
D.bAh=new A.P(14,2,14,6)
D.fTj=new A.y("The top of your book. Tap a design to see it.",null,Q.tk,null,null,null,null,null,null,null,null,null)
D.enN=new A.D(D.bAh,D.fTj,null)
D.fEw=new A.y("\ud83c\udfc6 A new record!",null,B.fS,null,null,null,null,null,null,null,null,null)
D.enP=new A.D(B.l7,D.fEw,null)
D.epo=new A.iY(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.epr=new A.iY(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aLg=new A.iY(1,0.9607843137254902,0.48627450980392156,0)
D.Jo=new A.iY(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.A1=new A.iY(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.epx=new A.iY(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hog=new C.biI(null)
D.bvb=new A.mA(D.hog,null,B.aw,null,null)
D.aOU=new A.cN(0,0,0,0,null,null,D.bvb,null)
D.fzL=new A.y("\ud83c\udfc5",null,B.a9L,null,null,null,null,null,null,null,null,null)
D.etW=new A.cN(null,0,-34,null,null,null,D.fzL,null)
D.eC_=new A.z("E","Sit by the fire again")
D.eHA=new A.z("C","Good Learner")
D.eKZ=new A.z("D","Still Growing")
D.ePw=new A.z(-42,42)
D.eQR=new A.z("B","Faithful Listener")
D.eSP=new A.z("A","Keeper of the Family")
D.eVQ=new A.b7(-17,0.7,0)
D.eWm=new A.b7(-8,0.95,1.3)
D.eXl=new A.b7(18,0.65,5.2)
D.eXn=new A.b7(0,1.15,2.6)
D.eXF=new A.b7(9,0.9,3.9)
D.eZm=new A.cy([0,0,1,1])
D.aQl=new A.a3(0,0,520,160)
D.f1c=new A.a3(10,612,440,618)
D.f1d=new A.a3(10,612,440,628)
D.f1g=new A.a3(14,-64,34,-12)
D.f1j=new A.a3(300,336,350,348)
D.a8s=new A.a3(30,96,420,346)
D.f1k=new A.a3(30,-9,46,1)
D.f1l=new A.a3(4,2,11,14)
D.f1n=new A.a3(-8,-12.5,8,-7)
D.f1o=new A.a3(-16.5,-21,16.5,1)
D.f1p=new A.a3(60,342,88,348)
D.TT=new A.a3(66,-66,94,-36)
D.f1q=new A.a3(6,8,10,14)
D.f1t=new A.a3(95,343,115,348)
D.f1u=new A.a3(-6.5,-74,6.5,-58)
D.f1A=new A.a3(-100,-74,100,-12)
D.f1B=new A.a3(-10,8,-6,14)
D.f1C=new A.a3(-11,2,-4,14)
D.f1D=new A.a3(-11,-70,11,-56)
D.f1K=new A.a3(-13,-24,13,-4)
D.f1Q=new A.a3(-15,-21,15,0)
D.f1T=new A.a3(-16,-21,16,1)
D.f1U=new A.a3(-16,-21,16,2)
D.f1X=new A.a3(-16,-26,16,-6)
D.f26=new A.a3(-230,-26,230,26)
D.f2u=new A.a3(-38,-26,12,-6)
D.f2y=new A.a3(-3,-70,3,-63)
D.f2z=new A.a3(-44,-22,44,0)
D.f2B=new A.a3(-46,-9,-30,1)
D.aQp=new A.a3(-80,-190,80,20)
D.f2I=new A.a3(-8,-26,40,-6)
D.f2J=new A.a3(-98,-80,92,-75)
D.f2K=new A.a3(-9,-15,9,-9)
D.fSS=new A.y("Let the AI write it from your tree",null,B.iu,null,B.K,null,null,null,null,null,null,null)
D.bIe=new A.dr(1,B.cn,D.fSS,null)
D.d7y=w([E.a2P,B.ad,D.bIe],x.p)
D.f3O=new A.ca(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.d7y,null)
D.fzo=new A.y("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.dnc=w([D.aqP,B.ad,D.fzo],x.p)
D.f3Y=new A.ca(B.aM,B.b9,B.i,B.m,null,B.p,null,0,D.dnc,null)
D.bTO=new A.ae(B.i6,14,B.b1,null,null,null)
D.fn0=new A.F(!0,B.b1,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDg=new A.y("Cashier",null,D.fn0,null,null,null,null,null,null,null,null,null)
D.dfJ=w([D.bTO,B.bm,D.fDg],x.p)
D.f40=new A.ca(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.dfJ,null)
D.fzp=new A.y("Transfer & settings",null,B.de,null,null,null,null,null,null,null,null,null)
D.bGg=new A.by(1,B.ba,D.fzp,null)
D.d__=w([D.aqp,B.as,D.bGg],x.p)
D.f41=new A.ca(B.aM,B.e,B.i,B.m,null,B.p,null,0,D.d__,null)
D.f87=new A.av(16,40)
D.f8c=new A.av(22,64)
D.f8j=new A.av(280,88)
D.f97=new A.a4(30,null,null,null)
D.fyv=new A.y("The teacher is writing\u2026",null,B.Al,null,null,null,null,null,null,null,null,null)
D.bbb=new A.cf(B.A,null,null,D.fyv,null)
D.hij=new A.bR("w",x.W)
D.f9x=new A.a4(null,56,D.bbb,D.hij)
D.fak=new A.hK(5,8,8,1,null)
D.fas=new A.hK(2,12,12,1.05,null)
D.fCX=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fba=new A.b2(D.fCX,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fDb=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aSs=new A.b2(D.fDb,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fLy=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fbE=new A.b2(D.fLy,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fWf=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fbJ=new A.b2(D.fWf,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fFl=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fbQ=new A.b2(D.fFl,null,null,null,null,null,null,null,null,null,null,null,null,B.fY,!1,null,null,null,B.t,null)
D.fTw=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aSw=new A.b2(D.fTw,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fFj=new A.y("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fcf=new A.b2(D.fFj,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fA1=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fch=new A.b2(D.fA1,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fJ0=new A.y("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fcn=new A.b2(D.fJ0,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fX_=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fd2=new A.b2(D.fX_,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fRM=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fdr=new A.b2(D.fRM,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fWj=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fdu=new A.b2(D.fWj,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fNc=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fdw=new A.b2(D.fNc,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fHc=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fdx=new A.b2(D.fHc,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fHd=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fex=new A.b2(D.fHd,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fCZ=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.feP=new A.b2(D.fCZ,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fEY=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.ff8=new A.b2(D.fEY,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fMF=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.ffo=new A.b2(D.fMF,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fI1=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.ffp=new A.b2(D.fI1,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fs3=new A.F(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh1=new A.eu("\u2665",null,null,B.cN,null,null,null,null,null,null,D.fs3)
D.fpi=new A.F(!0,B.aP,null,null,null,null,28,B.U,B.cD,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhh=new A.eu("Today: how well do you know the family?",null,null,B.cN,null,null,null,null,null,null,D.fpi)
D.fhy=new A.F(!0,B.pS,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiF=new A.F(!0,D.kF,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj4=new A.F(!0,D.kF,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj8=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjh=new A.F(!0,D.fq,null,null,null,null,15,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjs=new A.F(!0,D.fq,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjM=new A.rW(!0,B.t6,null,null,null,null,B.dx,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk1=new A.F(!0,B.cI,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk4=new A.F(!0,D.kF,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk5=new A.F(!0,B.cI,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fka=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkd=new A.F(!0,B.cI,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkI=new A.F(!0,B.b1,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkJ=new A.F(!0,B.ac,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkL=new A.F(!0,B.aP,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flc=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTG=new A.F(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTI=new A.F(!0,D.lx,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flB=new A.F(!0,B.cI,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9Q=new A.rW(!0,B.To,null,null,null,null,B.dx,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.UU=new A.F(!0,B.cI,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flL=new A.F(!0,B.N,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flQ=new A.F(!0,D.fq,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmd=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnl=new A.F(!0,D.fq,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTT=new A.F(!0,D.fq,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnE=new A.F(!0,B.ac,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnP=new A.F(!0,D.fq,null,null,null,null,null,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnR=new A.F(!0,null,null,null,null,null,8,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnX=new A.F(!0,L.iS,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTX=new A.F(!0,D.fq,null,null,null,null,14.5,B.U,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foT=new A.F(!0,D.fq,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpb=new A.F(!0,D.fq,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpd=new A.F(!0,B.N,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpf=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpC=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A8.Ib,null,null,null)
D.aUb=new A.F(!0,D.fq,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq_=new A.F(!0,B.N,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fql=new A.F(!0,B.fa,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqJ=new A.F(!0,B.bP,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqN=new A.F(!0,B.bB,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqZ=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr1=new A.F(!0,D.fq,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr9=new A.F(!0,D.FK,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fri=new A.F(!0,B.b1,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frI=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frO=new A.F(!0,B.ac,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.D_,null,null,null)
D.fsd=new A.F(!0,B.cI,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsm=new A.F(!0,B.cQ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsz=new A.F(!0,D.ly,null,null,null,null,13,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUv=new A.F(!0,D.fq,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Kp=new A.F(!0,B.cI,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUx=new A.F(!0,B.cI,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.D_,null,null,null)
D.fsT=new A.F(!0,B.bP,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsX=new A.F(!0,G.na,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftk=new A.F(!0,B.b1,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftB=new A.F(!0,D.fq,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftY=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ful=new A.F(!0,D.fq,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuO=new A.F(!0,D.fq,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuU=new A.F(!0,B.al,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv2=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aak=new A.F(!0,B.al,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aam=new A.F(!0,D.lx,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwL=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx2=new A.F(!0,B.aP,null,null,null,null,27,B.U,B.cD,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxa=new A.F(!0,L.iS,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxi=new A.F(!0,L.iS,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxM=new A.y("Time:",null,B.hc,null,null,null,null,null,null,null,null,null)
D.fy7=new A.y("\ud83c\udfae",null,I.aab,null,null,null,null,null,null,null,null,null)
D.fy8=new A.y("Themes",null,B.pB,null,null,null,null,null,null,null,null,null)
D.fyD=new A.y("\ud83c\udfb2",null,B.x5,null,null,null,null,null,null,null,null,null)
D.fyH=new A.y("Delete this game?",null,B.iu,null,null,null,null,null,null,null,null,null)
D.fyO=new A.y("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fnz=new A.F(!0,B.N,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzd=new A.y("Debt receipt",null,D.fnz,null,B.K,null,null,null,null,null,null,null)
D.aUL=new A.F(!0,B.al,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzw=new A.y("Person who owes",null,D.aUL,null,null,null,null,null,null,null,null,null)
D.fAu=new A.y("Notes",null,B.a9Z,null,null,null,null,null,null,null,null,null)
D.fAV=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fmu=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAY=new A.y("Share",null,D.fmu,null,null,null,null,null,null,null,null,null)
D.fBU=new A.y("Move your family trees",null,K.aai,null,null,null,null,null,null,null,null,null)
D.fCy=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fDa=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fDy=new A.y("SAVE",null,D.Kp,null,null,null,null,null,null,null,null,null)
D.fEa=new A.y("The round button is the right answer.",null,Q.El,null,null,null,null,null,null,null,null,null)
D.fEv=new A.y("Remove this book?",null,B.fS,null,null,null,null,null,null,null,null,null)
D.fth=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.D_,null,null,null)
D.fF2=new A.y("Fireside Stories",null,D.fth,null,null,null,null,null,null,null,null,null)
D.aVf=new A.y("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fFK=new A.y("What should the AI do?",null,B.de,null,null,null,null,null,null,null,null,null)
D.fm8=new A.F(!0,D.lx,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFZ=new A.y("REPORT CARD",null,D.fm8,null,null,null,null,null,null,null,null,null)
D.fGG=new A.y("Calabash Catch",null,B.Ks,null,null,null,null,null,null,null,null,null)
D.fH8=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fHz=new A.y("\ud83c\udfe1",null,B.Ek,null,null,null,null,null,null,null,null,null)
D.fIg=new A.y("Ribbon bookmark",null,B.jo,null,null,null,null,null,null,null,null,null)
D.fuN=new A.F(!0,B.b1,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIK=new A.y("NGMY.ORG",null,D.fuN,null,B.K,null,null,null,null,null,null,null)
D.fK3=new A.y("Scan family tree QR",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fr2=new A.F(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKO=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fr2,null,B.K,null,null,null,null,null,null,null)
D.fM1=new A.y("Delete",null,B.UN,null,null,null,null,null,null,null,null,null)
D.fM2=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fM9=new A.y("Thumbnail",null,B.pB,null,null,null,null,null,null,null,null,null)
D.fML=new A.y("Save the cover",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fMQ=new A.y("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.x7,null,B.K,null,null,null,null,null,null,null)
D.fNd=new A.y("Your photos",null,B.pB,null,null,null,null,null,null,null,null,null)
D.fNs=new A.y("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fNP=new A.y("\u2b50 stars",null,B.V0,null,null,null,null,null,null,null,null,null)
D.fO2=new A.y("Design your cover",null,A1.tj,null,null,null,null,null,null,null,null,null)
D.fO8=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fOb=new A.y("PICTURE",null,M.vq,null,null,null,null,null,null,null,null,null)
D.fOd=new A.y("\ud83c\udfaf",null,D.Vf,null,null,null,null,null,null,null,null,null)
D.fOy=new A.y("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fOA=new A.y("You can undo it right after.",null,Q.El,null,null,null,null,null,null,null,null,null)
D.fP6=new A.y("Print",null,B.vn,null,null,null,null,null,null,null,null,null)
D.fPv=new A.y("Amount owed",null,D.aUL,null,null,null,null,null,null,null,null,null)
D.fPK=new A.y("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fQl=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fQo=new A.y("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fQQ=new A.y("Debtor signature",null,B.a9Z,null,null,null,null,null,null,null,null,null)
D.fR_=new A.y("Change icon",null,B.a9Y,null,null,null,null,null,null,null,null,null)
D.fRN=new A.y("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.tm,null,null,null,null,null,null,null,null,null)
D.fSe=new A.y("Family tree QR",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fSk=new A.y("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Ve,null,null,null,null,null,null,null,null,null)
D.fSI=new A.y("Download",null,B.vn,null,null,null,null,null,null,null,null,null)
D.fSJ=new A.y("The person who planted this tree has not made a game yet.",null,B.x4,null,null,null,null,null,null,null,null,null)
D.fSN=new A.y("Change",null,B.pB,null,null,null,null,null,null,null,null,null)
D.fTC=new A.y("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fTF=new A.y("WHAT SHOULD IT CHANGE?",null,M.vq,null,null,null,null,null,null,null,null,null)
D.fUe=new A.y("COLOUR",null,M.vq,null,null,null,null,null,null,null,null,null)
D.fUs=new A.y("Do it",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fUv=new A.y("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fUE=new A.y("Give me another clue",null,D.Kp,null,null,null,null,null,null,null,null,null)
D.fVy=new A.y("Create Family Tree",null,B.f3,null,null,null,null,null,null,null,null,null)
D.fVI=new A.y("THE TEACHER EXPLAINS THESE",null,T.tm,null,null,null,null,null,null,null,null,null)
D.fhx=new A.F(!0,E.ke,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVO=new A.y("Write the first page myself",null,D.fhx,null,null,null,null,null,null,null,null,null)
D.fWm=new A.y("Use this header",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fWt=new A.y("Create Project",null,E.aUs,null,null,null,null,null,null,null,null,null)
D.hjx=new C.abT(1,"header")
D.abm=new C.abT(2,"projects")
D.hjy=new C.abT(3,"cashier")
D.abn=new C.abT(4,"familyTree")
D.hwX=new C.cD7(0,"start")
D.hwY=new C.cD8(0,"start")
D.hjW=new C.YW(null)
D.hkV=new C.Zo(null)
D.dAj=new A.bu(B.hT,[],A.at("bu<n,G9>"))
D.dij=w([],x.dE)
D.dik=w([],x.M)
D.hlr=new C.bfT(D.dAj,D.dij,D.dik,0,0,null,null)
D.aZj=new C.a_e(0,"intro")
D.aZk=new C.a_e(1,"countdown")
D.abB=new C.a_e(2,"ask")
D.W6=new C.a_e(3,"reveal")
D.aZl=new C.a_e(4,"end")
D.hoi=new C.t3(F.FV,D.ly,B.cI,F.lz,5,!1,!1,!1,0,null)
D.hoj=new C.t3(F.FV,B.el,B.cI,B.bO,2,!0,!0,!1,2,B.cI)
D.hok=new C.t3(B.ob,B.cQ,B.cI,F.lz,2,!0,!1,!1,2,B.aA)
D.hol=new C.t3(F.FV,B.dF,B.cI,F.lz,5,!1,!1,!1,1,null)
D.hom=new C.t3(F.Z5,D.ahE,B.cI,F.lz,4,!0,!1,!0,0,null)
D.aZo=new C.t3(F.Z5,B.dH,B.cI,F.lz,3,!0,!1,!0,2,null)
D.aZp=new C.t3(F.mF,D.ly,B.c,F.lz,0,!1,!1,!0,0,null)
D.aZq=new C.t3(B.ob,B.aD,B.cI,B.bO,2,!0,!0,!1,2,B.dH)
D.aZr=new C.t3(B.ob,G.na,B.i2,F.lz,5,!1,!1,!0,3,null)
D.hon=new C.t3(B.ob,B.dH,B.cI,F.lz,0,!0,!1,!1,0,B.aD)
D.aZs=new C.t3(F.FV,B.el,B.cI,B.bO,1,!1,!0,!1,1,null)
D.aZt=new C.t3(F.Fr,B.aA,B.aD,F.lz,4,!0,!1,!0,2,null)
D.hoo=new C.t3(F.mF,B.aA,B.el,F.lz,3,!0,!1,!1,0,null)
D.hop=new C.t3(B.ob,B.dF,B.cI,B.bO,1,!1,!0,!1,1,null)
D.hoq=new C.t3(F.Fr,D.agI,B.c,F.lz,5,!1,!1,!0,0,null)
D.hp3=new C.a_N(null)
D.hx5=new C.aff(0,"still")
D.Wt=new C.aff(1,"walk")
D.abV=new C.aff(2,"pound")
D.abW=new C.aff(3,"drum")
D.hsy=new C.a14(0,"greet")
D.aZT=new C.a14(1,"teach")
D.abX=new C.a14(2,"ask")
D.hsz=new C.a14(3,"feedback")
D.aZU=new C.a14(4,"end")
D.Wy=new C.a1n(0,"intro")
D.Wz=new C.a1n(1,"asking")
D.AI=new C.a1n(2,"reacting")
D.ac6=new C.a1n(3,"driving")
D.ac7=new C.a1n(4,"arrived")
D.aca=new C.aKN(0,"projects")
D.b_h=new C.aKN(1,"cashier")
D.huB=new C.aKN(2,"familyTree")})()};
(a=>{a["v0RlSZD0JF1XiC0eqNM9M5uhnR8="]=a.current})($__dart_deferred_initializers__);