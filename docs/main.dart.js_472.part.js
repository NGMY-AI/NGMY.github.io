((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A9,S,A_,Aa,P,A0,T,M,Ab,L,A1,U,H,E,Ac,V,Ad,A2,Ae,Af,Ag,Ah,Q,Ai,Aj,N,A3,Ak,A4,A5,A6,W,A7,Al,Am,An,G,Ao,Ap,Aq,A8,Ar,As,At,Au,X,O,F,Av,I,Y,K,Aw,Z,R,Ax,C={
bIK(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bIK=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.wk(null,""),$async$bIK)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.Y(y.z)
t=A.nI(b1)
s=A.c4(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dw(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.d_(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.V.au(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rD(t,a1,B.ii,"book",E.HF),$async$bIK)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.Sj(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.aa(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.Y(l!=null&&A.Mt(l)?y.k:y.y)
for(j=J.a1(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a0(r.a(j.h(a2,a7)),q,p):B.cD
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a4R(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bIK,v)},
ajp(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ajp=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.wk(null,""),$async$ajp)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.Y(y.z)
t=A.nI(b6)
s=x.S
r=A.cJ(c1,0,A.dx(4,"count",s),A.U(c1).c)
q=H.a4A(new A.O(r,new C.fZV(),r.$ti.k("O<aj.E,o>")).aL(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fZU(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.V.au(b7,null)+"\nAllowed values: style one of "+B.d.aL(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ajp)
case 6:l=c5
k=H.Sj(l==null?"":l)
if(k==null)throw A.Y("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.arg(s,D.dP7,r.b(k.h(0,"cover"))?A.a0(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.dw(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.V.au(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ajp)
case 10:l=c5
k=l==null?null:H.Sj(l)
if(k==null)throw A.Y(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.v(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.v(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.cL(a8,d),a5=J.aO(a2.a),a2=a2.$ti,a7=new A.jA(a5,a2.k("jA<1>")),a2=a2.c;a7.B();){a9=a2.a(a5.gP(a5))
b0=J.a1(a9)
b1=A.aK(b0.h(a9,"index"))
i=b1==null?null:B.h.M(b1)
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
case 9:if(h.a!==0){s=h.$ti.k("b9<2>")
p=A.ct(new A.b9(h,s),new C.fZW(),s.k("M.E"),p)
p=H.a4A(A.pj(p,3,A.a3(p).k("M.E")).aL(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cv<1>")
b4=A.B(new A.cv(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a4R(s,b9),$async$ajp)
case 13:b5=c5
for(s=J.a1(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.arg(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ajp,v)},
hTS(d,e,f){return A.cf(null,B.v.j(0.65),!1,null,new C.h9C(e,f),d,null,!0,!0,x.g2)},
arg:function arg(d,e,f){this.a=d
this.b=e
this.c=f},
fZV:function fZV(){},
fZU:function fZU(d){this.a=d},
fZW:function fZW(){},
h9C:function h9C(d,e){this.a=d
this.b=e},
bGq(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bGq=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aR(b1,new C.fMb())){u=null
w=1
break}t=B.d.cC(b1,new C.fMc())
s=$.T()
r=new A.p1(new A.oB())
q=A.v8(r,D.aUH)
p=A.L()
p.r=B.c.gp(0)
q.aE(D.aUH,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.ad
o.d=B.bG
o.e=B.dQ
n=new C.fMh(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.h.D(k-m,1,1e4)
d=B.h.D(j-l,1,1e4)
a0=B.h.D(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.T()
p=A.a([],x.v)
a3=new A.aI(s.r,B.ak,null,null,p)
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
a3=new A.aI(s.r,B.ak,null,null,p)
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
return A.b(r.n9().vW(520,160),$async$bGq)
case 4:w=3
return A.b(b3.hr(B.hq),$async$bGq)
case 3:b0=b3
u=b0==null?null:J.eX(B.dM.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGq,v)},
fXp(d){return C.izM(d)},
izM(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fXp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bmi()
n=d.x!=null&&d.Af(null).length===0
if(d.x!=null)t=n?D.Bd:D.KK
else t=d.gVB()?D.KK:D.aPx
w=3
return A.b(C.bGq(d.ax),$async$fXp)
case 3:s=f
p.a=null
if(s!=null)p.a=A.apU(s)
r=A.a6A(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aPx}else{p.c=C.xF(q,!0)
p.b=n?D.Bd:D.KK}r.a5A(A.hkr(new C.fXr(p,d,new C.fXs(),t,n,o),null,D.bLa,B.wc))
u=r.jC(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fXp,v)},
h3U(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$h3U=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fXp(d),$async$h3U)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aH(s,r,"_")
if(q.length>40)q=B.a.av(q,0,40)
u=Ah.HU(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h3U,v)},
fMb:function fMb(){},
fMc:function fMc(){},
fMh:function fMh(d){this.a=d},
fXs:function fXs(){},
fXr:function fXr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fXq:function fXq(){},
ha5(d,e){var w=0,v=A.j(x.H)
var $async$ha5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.v.j(0.55),!0,null,new C.ha9(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$ha5)
case 2:return A.h(null,v)}})
return A.i($async$ha5,v)},
bJc(d,e,f,g){return C.iHQ(d,e,f,g)},
iHQ(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bJc=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cL.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.T(D.fFz)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.ha1(g,r,f),d,null,!0,!0,x.H),$async$bJc)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bJc,v)},
haa(d,e){var w=0,v=A.j(x.H)
var $async$haa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.had(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$haa)
case 2:return A.h(null,v)}})
return A.i($async$haa,v)},
b1Y:function b1Y(d,e){this.c=d
this.a=e},
cbc:function cbc(){},
bfn:function bfn(d,e){this.b=d
this.a=e},
ha9:function ha9(d,e){this.a=d
this.b=e},
ha6:function ha6(d){this.a=d},
ha7:function ha7(d,e,f){this.a=d
this.b=e
this.c=f},
ha8:function ha8(d,e){this.a=d
this.b=e},
ha1:function ha1(d,e,f){this.a=d
this.b=e
this.c=f},
ha_:function ha_(d){this.a=d},
ha0:function ha0(d,e,f){this.a=d
this.b=e
this.c=f},
had:function had(d,e){this.a=d
this.b=e},
hab:function hab(d){this.a=d},
hac:function hac(d,e,f){this.a=d
this.b=e
this.c=f},
fR9(d,e){var w=0,v=A.j(x.y),u,t
var $async$fR9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a4k(d),$async$fR9)
case 3:t=g
J.mE(t,new C.fRa(e))
u=A.ak6(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fR9,v)},
fRa:function fRa(d){this.a=d},
art:function art(d,e,f){this.c=d
this.d=e
this.a=f},
aGn:function aGn(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dVG:function dVG(d,e){this.a=d
this.b=e},
dVr:function dVr(d,e){this.a=d
this.b=e},
dVu:function dVu(d,e,f){this.a=d
this.b=e
this.c=f},
dVt:function dVt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVs:function dVs(d,e){this.a=d
this.b=e},
dVv:function dVv(d,e){this.a=d
this.b=e},
dVp:function dVp(){},
dVq:function dVq(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dVo:function dVo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dV9:function dV9(d){this.a=d},
dVa:function dVa(d,e,f){this.a=d
this.b=e
this.c=f},
dVb:function dVb(d,e){this.a=d
this.b=e},
dV8:function dV8(d){this.a=d},
dVg:function dVg(d,e){this.a=d
this.b=e},
dV7:function dV7(d){this.a=d},
dVh:function dVh(d,e,f){this.a=d
this.b=e
this.c=f},
dVi:function dVi(d,e,f){this.a=d
this.b=e
this.c=f},
dV6:function dV6(d,e){this.a=d
this.b=e},
dVj:function dVj(d,e,f){this.a=d
this.b=e
this.c=f},
dV5:function dV5(d,e){this.a=d
this.b=e},
dVk:function dVk(d,e){this.a=d
this.b=e},
dV4:function dV4(d){this.a=d},
dVl:function dVl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dV2:function dV2(){},
dUX:function dUX(d){this.a=d},
dUY:function dUY(d){this.a=d},
dV3:function dV3(d,e){this.a=d
this.b=e},
dVm:function dVm(d,e){this.a=d
this.b=e},
dV1:function dV1(d){this.a=d},
dVn:function dVn(d){this.a=d},
dV0:function dV0(){},
dVc:function dVc(d,e){this.a=d
this.b=e},
dV_:function dV_(d){this.a=d},
dVd:function dVd(d,e,f){this.a=d
this.b=e
this.c=f},
dUZ:function dUZ(d,e){this.a=d
this.b=e},
dUW:function dUW(d,e){this.a=d
this.b=e},
dVe:function dVe(d){this.a=d},
dVf:function dVf(d,e,f){this.a=d
this.b=e
this.c=f},
dVJ:function dVJ(){},
dVK:function dVK(d,e){this.a=d
this.b=e},
dVH:function dVH(d){this.a=d},
dVI:function dVI(d){this.a=d},
dVD:function dVD(d,e){this.a=d
this.b=e},
dVE:function dVE(d){this.a=d},
dVw:function dVw(d,e,f){this.a=d
this.b=e
this.c=f},
dVx:function dVx(d,e,f){this.a=d
this.b=e
this.c=f},
dVy:function dVy(d,e,f){this.a=d
this.b=e
this.c=f},
dVz:function dVz(d,e,f){this.a=d
this.b=e
this.c=f},
dVA:function dVA(d,e,f){this.a=d
this.b=e
this.c=f},
dVB:function dVB(d,e,f){this.a=d
this.b=e
this.c=f},
dVC:function dVC(d,e,f){this.a=d
this.b=e
this.c=f},
dVL:function dVL(){},
dVM:function dVM(){},
dVN:function dVN(){},
dVO:function dVO(d){this.a=d},
dVF:function dVF(d,e){this.a=d
this.b=e},
hPf(d){return B.d.ds(D.a6B,new C.fRW(d),new C.fRX())},
vd:function vd(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fRW:function fRW(d){this.a=d},
fRX:function fRX(){},
ant:function ant(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aYD:function aYD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
UR:function UR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bj3:function bj3(){this.d=$
this.c=this.a=null},
dkD:function dkD(d,e){this.a=d
this.b=e},
dkB:function dkB(d,e){this.a=d
this.b=e},
dkC:function dkC(){},
dkE:function dkE(d,e){this.a=d
this.b=e},
hyR(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.be(J.k(u==null?"":u))
return new C.nQ(t,w,v,u==null?new A.W(Date.now(),0,!1):u)},
Me(d,e){return C.iyo(d,e)},
iyo(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Me=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$Me)
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
break}o=J.cL(p,x.f)
o=A.ct(o,new C.fUQ(),o.$ti.k("M.E"),x.B)
n=A.a3(o).k("X<M.E>")
o=A.B(new A.X(o,new C.fUR(),n),n.k("M.E"))
B.d.b_(o,new C.fUS())
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
return A.i($async$Me,v)},
BQ(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BQ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aB(),$async$BQ)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.h8E(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.aB("String","ngmy_family_book_v1_"+s+"_"+e,B.V.au(r,null)),$async$BQ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BQ,v)},
aUJ(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aUJ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Me(d,e),$async$aUJ)
case 2:u=h
t=J.cK(u)
s=t.bn(u,new C.hho(f))
if(s===-1)t.ck(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BQ(d,e,u),$async$aUJ)
case 3:return A.h(null,v)}})
return A.i($async$aUJ,v)},
bGV(d,e,f){var w=0,v=A.j(x.H),u
var $async$bGV=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Me(d,e),$async$bGV)
case 2:u=h
J.mE(u,new C.fR1(f))
w=3
return A.b(C.BQ(d,e,u),$async$bGV)
case 3:return A.h(null,v)}})
return A.i($async$bGV,v)},
bHa(d,e){return C.iyn(d,e)},
iyn(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bHa=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bHa)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.PY
w=1
break}p=B.V.aP(0,q,null)
if(x.f.b(p)){o=A.a0(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aK(o.h(0,"emblem"))
k=k==null?null:B.h.M(k)
if(k==null)k=0
if(D.EL.am(0,o.h(0,"foil")))j=A.cV(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.h.D(i==null?25:i,18,36)
h=B.d.q(D.a8k,o.h(0,"position"))?A.cV(o.h(0,"position")):"middle"
g=B.d.q(D.a7F,o.h(0,"frame"))?A.cV(o.h(0,"frame")):"double"
f=B.d.q(D.a7B,o.h(0,"texture"))?A.cV(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.ddI,o.h(0,"header"))?A.cV(o.h(0,"header")):"classic"
o=new C.IS(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.PY
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.PY
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bHa,v)},
Tv(d,e,f){return C.iHk(d,e,f)},
iHk(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Tv=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aB(),$async$Tv)
case 7:r=h
w=8
return A.b(r.aB("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.V.au(f.ak(),null)),$async$Tv)
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
return A.i($async$Tv,v)},
SV(d,e){return C.iyp(d,e)},
iyp(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$SV=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$SV)
case 7:r=g
q=r.nQ("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Me(d,e),$async$SV)
case 8:if(!j.cM(g)){n=B.a.i(d.toLowerCase())
m=J.lJ(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$SV)
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
return A.i($async$SV,v)},
aiK(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aiK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SV(d,e),$async$aiK)
case 3:s=g
r=J.a1(s)
if(r.gI(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gI(s):"main"
r.K(s,t)
w=5
return A.b(A.aB(),$async$aiK)
case 5:w=4
return A.b(g.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aiK)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aiK,v)},
a51(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a51=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.SV(d,e),$async$a51)
case 2:s=h
J.fO(s,f)
w=3
return A.b(A.aB(),$async$a51)
case 3:u=h
w=4
return A.b(u.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a51)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.X(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a51)
case 5:w=6
return A.b(u.X(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a51)
case 6:return A.h(null,v)}})
return A.i($async$a51,v)},
nQ:function nQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fUQ:function fUQ(){},
fUR:function fUR(){},
fUS:function fUS(){},
h8E:function h8E(){},
hho:function hho(d){this.a=d},
fR1:function fR1(d){this.a=d},
IS:function IS(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bUz:function bUz(d){this.a=d},
iHE(d,e,f,g,h,i,j){return A.a8(d,!1).c9(A.e4(new C.h9f(j,i,f,e,h,g),!0,null,x.H))},
SR(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$SR=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SV(h,g),$async$SR)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.aa(k)>=6){d.L(x.q).f.T(D.aX6)
u=!1
w=1
break}w=4
return A.b(C.hTS(d,f,e),$async$SR)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aiK(h,g),$async$SR)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nQ(""+(q+n),l,B.a.i(m.b),new A.W(Date.now(),0,!1)))}w=6
return A.b(C.BQ(h,r,p),$async$SR)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Tv(h,r,new C.IS("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$SR)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$SR,v)},
h9f:function h9f(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a0A:function a0A(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aDk:function aDk(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dli:function dli(d){this.a=d},
dlh:function dlh(d,e){this.a=d
this.b=e},
dl6:function dl6(d,e){this.a=d
this.b=e},
dl3:function dl3(d,e){this.a=d
this.b=e},
dkF:function dkF(d){this.a=d},
dkG:function dkG(d,e){this.a=d
this.b=e},
dl7:function dl7(d){this.a=d},
dkO:function dkO(d){this.a=d},
dkM:function dkM(d){this.a=d},
dkN:function dkN(d){this.a=d},
dkP:function dkP(d){this.a=d},
dl4:function dl4(d){this.a=d},
dl5:function dl5(){},
dkK:function dkK(d){this.a=d},
dkL:function dkL(d,e){this.a=d
this.b=e},
dkQ:function dkQ(d){this.a=d},
dkR:function dkR(d,e){this.a=d
this.b=e},
dlg:function dlg(d){this.a=d},
dlf:function dlf(d,e){this.a=d
this.b=e},
dle:function dle(d){this.a=d},
dl0:function dl0(d){this.a=d},
dl_:function dl_(d){this.a=d},
dl1:function dl1(d){this.a=d},
dkH:function dkH(d,e){this.a=d
this.b=e},
dl2:function dl2(d,e){this.a=d
this.b=e},
dkU:function dkU(d){this.a=d},
dkV:function dkV(d){this.a=d},
dkT:function dkT(){},
dkW:function dkW(d){this.a=d},
dkX:function dkX(d){this.a=d},
dkY:function dkY(d,e){this.a=d
this.b=e},
dkZ:function dkZ(d,e,f){this.a=d
this.b=e
this.c=f},
dkS:function dkS(d,e){this.a=d
this.b=e},
dl9:function dl9(d){this.a=d},
dl8:function dl8(){},
dla:function dla(d){this.a=d},
dlb:function dlb(d){this.a=d},
dlc:function dlc(d){this.a=d},
dld:function dld(d,e){this.a=d
this.b=e},
dkI:function dkI(d){this.a=d},
dkJ:function dkJ(d){this.a=d},
a0E:function a0E(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjs:function bjs(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dn4:function dn4(d){this.a=d},
dn5:function dn5(d){this.a=d},
dn3:function dn3(d){this.a=d},
dn6:function dn6(d){this.a=d},
dn2:function dn2(d){this.a=d},
dn7:function dn7(d){this.a=d},
dn1:function dn1(d){this.a=d},
dn8:function dn8(d,e){this.a=d
this.b=e},
dn0:function dn0(d,e){this.a=d
this.b=e},
dn9:function dn9(d,e){this.a=d
this.b=e},
a0C:function a0C(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ah9:function ah9(d,e,f){this.a=d
this.b=e
this.c=f},
aDn:function aDn(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dlx:function dlx(d,e){this.a=d
this.b=e},
dlw:function dlw(d,e){this.a=d
this.b=e},
dlB:function dlB(d){this.a=d},
dlA:function dlA(d,e){this.a=d
this.b=e},
dly:function dly(d){this.a=d},
dlz:function dlz(d){this.a=d},
dlC:function dlC(d){this.a=d},
dlD:function dlD(d){this.a=d},
dlv:function dlv(d,e){this.a=d
this.b=e},
dlu:function dlu(d,e){this.a=d
this.b=e},
Lf:function Lf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_O:function a_O(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cTd:function cTd(d){this.a=d},
cTe:function cTe(){},
cTf:function cTf(d){this.a=d},
bgC:function bgC(d,e,f){this.b=d
this.c=e
this.a=f},
bgt:function bgt(d,e){this.b=d
this.a=e},
ve:function ve(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a09:function a09(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgA:function bgA(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
dcg:function dcg(d,e,f){this.a=d
this.b=e
this.c=f},
dcf:function dcf(d,e){this.a=d
this.b=e},
dcF:function dcF(d){this.a=d},
dcs:function dcs(){},
dcG:function dcG(d){this.a=d},
dcr:function dcr(){},
dcH:function dcH(d,e){this.a=d
this.b=e},
dcq:function dcq(d,e){this.a=d
this.b=e},
dcI:function dcI(d,e){this.a=d
this.b=e},
dcp:function dcp(d,e){this.a=d
this.b=e},
dcJ:function dcJ(d){this.a=d},
dco:function dco(){},
dcK:function dcK(d,e){this.a=d
this.b=e},
dcn:function dcn(d,e){this.a=d
this.b=e},
dcL:function dcL(d){this.a=d},
dcA:function dcA(d,e){this.a=d
this.b=e},
dcM:function dcM(d){this.a=d},
dcN:function dcN(d){this.a=d},
dcP:function dcP(d){this.a=d},
dcQ:function dcQ(d){this.a=d},
dcz:function dcz(d,e){this.a=d
this.b=e},
dcR:function dcR(d,e){this.a=d
this.b=e},
aKy:function aKy(d){this.a=d},
bm0:function bm0(d){this.a=d},
beI:function beI(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
anu:function anu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a2T:function a2T(d,e){this.a=d
this.b=e},
anv:function anv(d,e,f,g,h,i){var _=this
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
bUJ:function bUJ(d){this.a=d},
bUD:function bUD(d){this.a=d},
bUC:function bUC(d,e){this.a=d
this.b=e},
bUM:function bUM(d){this.a=d},
bUE:function bUE(d){this.a=d},
bUF:function bUF(d){this.a=d},
bUI:function bUI(d){this.a=d},
bUH:function bUH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUK:function bUK(d,e){this.a=d
this.b=e},
bUL:function bUL(){},
bUG:function bUG(d){this.a=d},
bUA:function bUA(d,e){this.a=d
this.b=e},
bUB:function bUB(d){this.a=d},
brE:function brE(d,e){this.b=d
this.a=e},
aDl:function aDl(){},
iU(d,e){var w
$.T()
w=A.L()
w.b=B.ad
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dQ
return w},
bGs(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bs(j.save())
j.translate(e.a,e.b)
d.nT(0,a0?-f:f,f)
w=A.c_(B.hF,8,36)
v=B.v.j(0.3)
u=$.T()
t=A.L()
t.r=v.gp(0)
d.c2(w,t)
w=a1===D.YL
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.v,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eGu,new A.m(-4+v,-2),C.iU(q,5))
d.ah(D.eE4,new A.m(4-v,-2),C.iU(q,5))}else{t=A.c_(B.KC,14,40)
p=A.L()
p.r=v.gp(0)
d.c2(t,p)}v=u.r
u=x.v
o=new A.aI(v,B.ak,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.cm(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.cm(15,-40,11,t))
o.E(new A.bz())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aI(v,B.ak,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bz())
v=A.L()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b4t){n=-52+w*14
d.ah(new A.m(10,n-22),new A.m(10,n+44),C.iU(F.GR,3.4))
d.ah(D.eGL,new A.m(9,n),C.iU(q,4))
d.ah(D.eEv,new A.m(10,n),C.iU(q,4))}else if(a1===D.b4u){d.ah(D.eFB,new A.m(-8,-26-Math.max(0,w)*6),C.iU(q,4))
d.ah(D.eCx,new A.m(8,-26-Math.max(0,-w)*6),C.iU(q,4))}else{w=s*3
v=-38-r
d.ah(D.eFF,new A.m(-12-w,v),C.iU(q,4))
d.ah(D.aOu,new A.m(12+w,v),C.iU(q,4))}w=A.L()
w.r=q.gp(0)
d.aE(D.fsl,w)
m=new A.m(0,-77-r)
w=A.c_(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c2(w,v)
w=h.y
if(w!=null){v=A.c_(m.a6(0,K.wb),15,24)
u=A.L()
u.r=w.gp(0)
d.c2(v,u)
u=m.a6(0,D.eCr)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.c_(m.a6(0,B.ui),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cR(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a6(0,D.eGJ),m.a6(0,D.eFz),C.iU(v,2.2))
d.ah(m.a6(0,D.eEu),m.a6(0,D.eCo),C.iU(v,2.2))}if(w===4){w=m.a6(0,D.eGN)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a6(0,D.eEw)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a6(0,D.eFo)
v=A.L()
v.r=B.iu.gp(0)
d.O(w,0.9,v)
v=m.a6(0,D.eFd)
w=A.L()
w.r=B.iu.gp(0)
d.O(v,0.9,w)
if(i){l=m.a6(0,K.aau)
w=A.c_(l,21,22)
v=A.L()
v.r=D.lX.gp(0)
d.c2(w,v)
v=A.c_(l.a6(0,K.aOr),5,12)
w=A.L()
w.r=D.bjT.gp(0)
d.c2(v,w)
d.ah(l.a6(0,D.eGF),l.a6(0,K.aOP),C.iU(B.d_,1.4))
d.ah(D.aOu,new A.m(15,-88-r),C.iU(q,3.6))}j.restore()},
hNO(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bs(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.c_(B.dP,18,96)
u=B.v.j(0.28)
$.T()
t=A.L()
t.r=u.gp(0)
d.c2(v,t)
t=A.c_(B.dP,11,70)
v=B.v.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c2(t,u)
d.lF(D.aUL,A.L())
C.imu(d,g,h,i,j)
s=(k==null?D.aaz:k).a-w>=0?1:-1
w=A.L()
w.a=B.MZ
w.san(A.jS(new A.m(s*70,-60),new A.m(-s*70,-60),A.a([D.akC.j(0.5),D.akC.j(0.12),D.brB.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.w,null))
d.aE(D.aUL,w)
r.restore()
r.restore()},
imu(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.v,0.28)
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
s=A.bx(D.fsm,B.un)
p=$.T()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bx(D.fsh,B.hT)
s=A.ap(v,B.v,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bx(D.fsv,B.hT)
o=A.ap(v,B.v,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c2(D.fso,s)
s=A.L()
s.r=d.gp(0)
a1.c2(D.fr5,s)
s=a1.c
J.bs(s.save())
s.translate(a3.w,0)
J.bs(s.save())
a1.nT(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aI(p.r,B.ak,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.cm(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.cm(m+3,-62,m-2,-58))
l.E(new A.cm(0,-70,k,-58))
l.E(new A.bz())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.bs(s.save())
a1.mI(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dlf[j]
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.b=B.ad
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.m(-34+u,-64),new A.m(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.n.F(B.n.ao(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.T()
f=new A.ar(B.U,B.R,B.X,B.Y,B.W)
f.r=i.gp(0)
a1.O(new A.m(g,h),3.6,f)
f=new A.ar(B.U,B.R,B.X,B.Y,B.W)
f.r=u.gp(0)
a1.O(new A.m(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.b=B.ad
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.m(g,-64),new A.m(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.b=B.ad
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.m(-30,h),new A.m(30,h),i)}break
default:a1.ah(D.eG7,D.eDc,C.iU(a2.c.j(0.9),3))}a1.ah(D.eGG,D.eFH,C.iU(B.v.j(0.18),1.6))
a1.ah(D.eCw,K.aOw,C.iU(B.v.j(0.18),1.6))
u=B.v.j(0.12)
k=$.T()
i=A.L()
i.r=u.gp(0)
a1.aE(D.fr1,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aE(D.frf,i)
n=new A.aI(k.r,B.ak,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.cm(0,-57,9,-66))
n.E(new A.cm(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cR(D.frq,0.1,2.941592653589793,!1,C.iU(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.aaF
n=25*q
k=23*q
i=9*q
C.hJw(a1,new A.m(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.Fc:o
C.hJw(a1,new A.m(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eDX,D.eDT,C.iU(D.alB,4))
a1.ah(D.eDV,D.eDR,C.iU(D.Hh.j(0.7),1.4))
u=A.L()
u.r=B.d_.gp(0)
a1.O(D.eDU,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bs(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jy(0,a3.f)
a1.bW(0,r)
C.imq(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hJw(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aI(0,e),r=s.gcE(),q=r===0?B.hF:s.eE(0,r),p=B.h.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.m(o,w)
if(o*i<0)v=new A.m(-o,-w)
u=e.a6(0,q.aM(0,n)).a6(0,v.aM(0,m))
t=e.a6(0,q.aM(0,p))
d.ah(e,u,C.iU(j,l))
o=A.ap(j,B.v,0.2)
o.toString
d.ah(e,u,C.iU(o,l*0.35))
d.ah(u,t,C.iU(k,l*0.78))
o=A.ap(k,B.v,0.22)
o.toString
d.ah(u,t,C.iU(o,l*0.22))
$.T()
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.c_(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c2(o,w)
w=-l
w=t.a6(0,new A.m(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
imq(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.c_(B.wa,40,38)
$.T()
v=A.L()
v.r=c0.gp(0)
c2.c2(w,v)}if(c1===4){$.T()
w=A.L()
w.r=c0.gp(0)
c2.O(D.eFP,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.eCN,9.5,w)}w=A.c_(D.eH3,10,6)
v=$.T()
u=A.L()
u.r=c8.gp(0)
c2.c2(w,u)
u=A.c_(D.eFl,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c2(u,w)
v=v.r
w=x.v
t=new A.aI(v,B.ak,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.i6(13,-20,17,-9,16,2))
t.E(new A.i6(15,13,8,20,0,20))
t.E(new A.i6(-8,20,-15,13,-16,2))
t.E(new A.i6(-17,-9,-13,-20,0,-20))
t.E(new A.bz())
u=A.L()
u.san(A.wB(D.eGw,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.w,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iU(c8.j(0.5),0.8)
c2.cR(D.fsx,3.455751918948773,2.5132741228718345,!1,s)
c2.cR(D.fr8,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eFM,K.aP_,s)
c2.ah(D.eCJ,D.eCA,s)
c2.cR(D.frp,2.2,1.4,!1,s)
c2.cR(D.fr6,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.r=c0.gp(0)
c2.O(new A.m(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cR(D.frE,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aI(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.cm(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.cm(0,-12,-13,-6))
p.E(new A.bz())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.eFD,D.eCB,C.iU(G.nN,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.eFS,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.eCO,3,o)
o=new A.aI(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.cm(-12,22,0,26))
o.E(new A.cm(12,22,13,6))
o.E(new A.cm(8,13,0,12))
o.E(new A.cm(-8,13,-13,6))
o.E(new A.bz())
p=A.L()
p.r=B.hX.gp(0)
c2.af(o,p)
p=new A.aI(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.cm(0,6,7,8))
p.E(new A.cm(0,10.5,-7,8))
o=A.L()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aI(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.cm(-20,-27,0,-29))
p.E(new A.cm(20,-27,17,-4))
p.E(new A.cm(0,-14,-17,-4))
p.E(new A.bz())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.v,0.3)
o.toString
c2.cR(D.frL,3.4,2.5,!1,C.iU(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cR(D.frx,3.6,2.2,!1,C.iU(o,1.2))
o=new A.aI(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.cm(27,-34,25,-19))
o.E(new A.cm(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aI(v,B.ak,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.cm(24,-12,27,-26))
n.E(new A.cm(18,-22,11,-22))
o=A.ap(m,B.v,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.O(D.eCC,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cR(D.frI,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.b=B.ad
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dQ
c2.ah(new A.m(r*3.6,-19+Math.abs(r)*0.8),new A.m(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aFa[l]
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.b=B.ad
o.c=4.5
o.r=c0.gp(0)
o.d=B.bG
o.e=B.dQ
c2.ah(new A.m(k,0),new A.m(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.r=p.gp(0)
c2.O(new A.m(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cR(D.frH,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.aau,K.aat,C.iU(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cR(D.fr9,3.267256359733385,2.8902652413026098,!0,p)}i=B.h.D(c4.b,0,1)*0.4+0.1
p=A.c_(D.eGQ,5,8)
o=D.ahO.j(i)
n=A.L()
n.r=o.gp(0)
c2.c2(p,n)
n=A.c_(D.eFw,5,8)
p=D.ahO.j(i)
o=A.L()
o.r=p.gp(0)
c2.c2(n,o)
h=c4.e*2.4
o=new A.aI(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.cm(h-3.4,6,h-2.6,7.4))
o.E(new A.cm(h,8.8,h+2.6,7.4))
c2.af(o,C.iU(c8.j(0.75),1.1))
o=A.L()
o.r=c8.gp(0)
c2.O(new A.m(h-1.5,7.2),0.7,o)
o=A.L()
o.r=c8.gp(0)
c2.O(new A.m(h+1.5,7.2),0.7,o)
g=B.h.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.hr[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.c_(new A.m(a5,-3),a3,7)
a6=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a6.r=B.c.j(0.96).gp(0)
c2.c2(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bs(d.save())
a6=A.a([],w)
a4=new A.aI(v,B.ak,b9,b9,a6)
a6.push(new A.jM(A.c_(new A.m(a5,-3),a3,7)))
a4.ac()
a3=a4.e
if(a3==null)a3=a4.e=new A.EC(a4.gli().a.snapshot())
d.clipPath(a3.a,$.mZ(),!0)
a3=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a3.r=D.bnP.gp(0)
c2.O(new A.m(a7,a8),2.1,a3)
a3=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a3.r=B.v.gp(0)
c2.O(new A.m(a7,a8),1.05,a3)
a3=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a3.r=B.c.gp(0)
c2.O(new A.m(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a_X:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a9.b=B.ad
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bG
a9.e=B.dQ
a3=p?0.8:0
c2.cR(A.c_(new A.m(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dV
else{b1=A.ap(c0,B.v,0.2)
b1.toString}b2=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b2.b=B.ad
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bG
b2.e=B.dQ
c2.ah(new A.m(a5-a4,b0-a6+0.4),new A.m(a5+a4,b0-0.6-a3),b2)}b3=B.h.D(c4.a,0,1)
if(o)b4=D.byo
else{u=A.ap(c8,D.brD,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.h.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aI(v,B.ak,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.cm(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.cm(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bz())
v=A.L()
v.r=D.bqW.gp(0)
c2.af(b8,v)
J.bs(d.save())
c2.mI(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aE(new A.a4(w,11,w+b6*2,13.2),u)
u=A.c_(new A.m(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.byt.gp(0)
c2.c2(u,w)
d.restore()
c2.af(b8,C.iU(b4,1.1))}else{u=new A.aI(v,B.ak,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.cm(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iU(b4,1.5))
if(b5>0.6){w=new A.aI(v,B.ak,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.cm(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.cm(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cR(D.fro,-1.2,2.2,!1,C.iU(c8.j(0.5),0.8))
c2.cR(D.frb,2.141592653589793,2.2,!1,C.iU(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.eFe,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.eFb,1.7,w)}},
isc(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.T(),f=new A.p1(new A.oB()),e=A.v8(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jS(B.J,new A.m(0,a0*0.46),D.dhH,D.d8a,B.w,h))
e.aE(new A.a4(0,0,0+d,0+a0),a2)
a2=e.c
J.bs(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bW(0,a1)
w=new A.e6()
w.cW(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.m(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bs(a2.save())
a2.translate(200,120)
e.jy(0,-0.5)
d=A.L()
a0=x.O
d.san(A.wB(B.J,230,A.a([D.bms,B.L],a0),h,B.w,h,h,0))
e.c2(D.frT,d)
a2.restore()
d=A.L()
d.san(A.wB(D.aaC,58,A.a([D.bpW,B.L],a0),h,B.w,h,h,0))
e.O(D.aaC,58,d)
d=A.L()
d.r=D.bla.gp(0)
e.O(D.aaC,24,d)
d=A.L()
d.r=D.a0n.gp(0)
e.O(D.eDw,5,d)
d=A.L()
d.r=D.a0n.gp(0)
e.O(D.eDA,3.4,d)
d=A.L()
d.r=D.a0n.gp(0)
e.O(D.eDz,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aI(g.r,B.ak,h,h,u)
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
g=new A.bz()
u.push(g)
u=r.f
if(u!=null)g.aj(u)
r.ac()
g=[D.bjH,D.blJ,D.brX][s]
u=$.T()
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cC8[l]
k=384+B.n.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.b=B.ad
u.c=2.4
u.r=D.a0J.gp(0)
u.d=B.bG
u.e=B.dQ
e.ah(new A.m(o,k),new A.m(g,d),u)
g=A.c_(new A.m(g,k-27),11,46)
u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.r=D.a0J.gp(0)
e.c2(g,u)
d=A.c_(new A.m(o-12,d),8,24)
u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.r=D.a0J.gp(0)
e.c2(d,u)}for(v=0;v<9;++v){g=B.n.F(v,3)
d=B.n.F(v,4)
u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.r=D.bld.j(0.8).gp(0)
e.O(new A.m(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jS(D.eC5,D.eC8,D.dap,B.xO,B.w,h))
e.aE(new A.a4(-200,412,650,1300),g)
j=new A.e6()
j.cW(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.c_(new A.m(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.hc()?B.c:B.v
d=new A.ar(B.U,B.R,B.X,B.Y,B.W)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c2(u,d)}J.bs(a2.save())
a2.translate(225,590)
e.nT(0,1,0.34)
g=A.L()
g.san(A.wB(B.J,250,A.a([D.bsX,D.bm3,D.buU],a0),A.a([0,0.8,1],x.n),B.w,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.aki,D.bkI,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.T()
a0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a0.b=B.ad
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dQ
e.ah(new A.m(o+i*2,k),new A.m(o+i*5,g+Math.abs(i)*3),a0)}}C.ikB(e)
for(l=0;l<3;++l)C.io0(e,D.aCX[l])
C.inP(e,D.eDq)
for(o=118;o<190;o+=11){g=B.n.F(o,3)
d=B.n.F(o,4)
$.T()
a0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a0.b=B.ad
a0.c=2.4
a0.r=D.a0F.gp(0)
a0.d=B.bG
a0.e=B.dQ
e.ah(new A.m(o,452+g),new A.m(o+1,436+d),a0)}e.ah(D.eCy,D.eCR,C.iU(D.blr,1.6))
a2.restore()
return f.n9()},
ikB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.T().r,g=x.v,f=new A.aI(h,B.ak,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.i6(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.i6(416,382,432,422,428,462))
f.E(new A.bz())
w=A.L()
w.san(A.jS(new A.m(354,0),new A.m(430,0),D.dHv,B.mc,B.w,i))
d.af(f,w)
v=new A.e6()
v.cW(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.v.j(0.18)
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.b=B.ad
p.c=1.1
p.r=q.gp(0)
p.d=B.bG
p.e=B.dQ
d.ah(new A.m(t,s),new A.m(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dmN[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aI(h,B.ak,i,i,l)
l.push(new A.aZ(r,336))
k.ac()
r=new A.cm(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.aj(p)
k.ac()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.b=B.ad
r.c=8
r.r=D.aiA.gp(0)
r.d=B.bG
r.e=B.dQ
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=A.ap(D.blj,D.brV,v.ai()).j(0.92).gp(0)
d.O(new A.m(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.b=B.ad
r.c=1.2
r.r=D.a0F.gp(0)
r.d=B.bG
r.e=B.dQ
d.ah(new A.m(w,q+8),new A.m(w,q+22),r)
q=A.c_(new A.m(w,q+28),13,7)
w=new A.ar(B.U,B.R,B.X,B.Y,B.W)
w.r=D.btj.gp(0)
d.c2(q,w)}},
io0(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.c_(new A.m(a5,a6+2),a9,a7*2.8),b1=B.v.j(0.3),b2=$.T(),b3=A.L()
b3.r=b1.gp(0)
b4.c2(b0,b3)
b2=b2.r
b3=x.v
w=new A.aI(b2,B.ak,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.cm(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bz())
u=A.L()
u.san(A.jS(new A.m(b0,0),new A.m(v,0),D.dmU,B.mc,B.w,a4))
b4.af(w,u)
t=new A.e6()
t.cW(B.n.S(a5*7))
v=b4.c
J.bs(v.save())
b4.mI(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.v.j(0.14)
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.b=B.ad
n.c=1
n.r=o.gp(0)
n.d=B.bG
n.e=B.dQ
b4.ah(new A.m(r,q),new A.m(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ake.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aE(new A.a4(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.h.bd(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aI(b2,B.ak,a4,a4,j)
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
h=new A.bz()
j.push(h)
j=i.f
if(j!=null)h.aj(j)
i.ac()
j=new A.ar(B.U,B.R,B.X,B.Y,B.W)
j.r=D.lX.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aI(b2,B.ak,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.h.bd(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.aj(n)
f.ac()}b4.af(f,C.iU(D.ake.j(0.7),1.6))
v.restore()
b0=$.T().r
b2=new A.aI(b0,B.ak,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.aZ(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.cm(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bz())
m=A.L()
m.r=D.akq.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.akq.gp(0)
b4.O(new A.m(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aI(b0,B.ak,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.cm(a5-a9,n,a5,u))
e.E(new A.cm(a5+a9,n,p,j))
e.E(new A.cm(a5,b1+a7*0.34,o,j))
e.E(new A.bz())
b1=A.L()
n=a7*1.4
b1.san(A.jS(new A.m(a5-n,0),new A.m(a5+n,0),D.dqD,B.mc,B.w,a4))
b4.af(e,b1)
J.bs(v.save())
b4.mI(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.hc()?B.v:D.bkR).j(0.16)
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.b=B.ad
i.c=0.9
i.r=n.gp(0)
i.d=B.bG
i.e=B.dQ
b4.ah(new A.m(a5+(p-0.5)*3,u),new A.m(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aI(b0,B.ak,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ac()
n=new A.cm(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.aj(b1)
p.ac()
b1=B.v.j(0.22)
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.b=B.ad
n.c=1.2
n.r=b1.gp(0)
n.d=B.bG
n.e=B.dQ
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ar(B.U,B.R,B.X,B.Y,B.W)
v.b=B.ad
v.c=1.1
v.r=D.bso.gp(0)
v.d=B.bG
v.e=B.dQ
b4.ah(new A.m(a2,a3),new A.m(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aI(b0,B.ak,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bz())
b0=A.L()
b0.r=D.boj.gp(0)
b4.af(a9,b0)},
inP(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aF7[s]
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.b=B.ad
q.c=3
q.r=D.a0F.gp(0)
q.d=B.bG
q.e=B.dQ
d.ah(new A.m(r,u),new A.m(r,t),q)}u=A.c_(e.a6(0,K.aOq),24,36)
t=$.T()
r=A.L()
r.r=D.bxB.gp(0)
d.c2(u,r)
t=new A.aI(t.r,B.ak,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.cm(w,v-24,r,u))
t.E(new A.bz())
u=A.L()
u.r=D.aji.gp(0)
d.af(t,u)},
in9(d){switch(B.n.F(d,8)){case 0:return D.b3J
case 1:return D.b3H
case 2:return D.b3G
case 3:return D.b3F
case 4:return D.b3I
case 5:return D.b3K
case 6:return D.hTH
default:return D.hTG}},
Ts(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.brF()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.aaF:j
w.as=k==null?D.Fc:k
C.hNO(d,e,p,C.in9(m),w,s,m,l)},
hPl(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bWn:function bWn(){var _=this
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
ty:function ty(d,e,f,g,h,i,j,k,l,m){var _=this
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
brF:function brF(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
anN:function anN(){this.b=this.a=null},
aYI:function aYI(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bWf:function bWf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWg:function bWg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWh:function bWh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWi:function bWi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWj:function bWj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWk:function bWk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWl:function bWl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWm:function bWm(){},
bWe:function bWe(d){this.a=d},
ahi:function ahi(d,e){this.a=d
this.b=e},
afd:function afd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ND(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bUZ(s)
s.bEv(d)
return s},
Hx(d,e,f,g,h,i,j){var w,v=A.U(g).k("X<1>")
v=A.d8(new A.X(g,new C.fEN(f),v),v.k("M.E"))
w=A.B(v,A.a3(v).k("ck.E"))
B.d.e_(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cJ(w,0,A.dx(3,"count",x.S),A.U(w).c))
B.d.e_(v,d)
return new C.lP(e,v,B.d.ca(v,f),h,i,"tree",j)},
iJk(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.hhe(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jv(c4,c0)
t=A.B(c4,A.a3(c4).k("ck.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jv(c4,c0)
r=A.B(c4,A.a3(c4).k("ck.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jv(c4,c0)
q=A.B(c4,A.a3(c4).k("ck.E"))
for(c4=w.length,v=A.U(t).k("X<1>"),s=v.k("M.E"),p=A.U(w).k("X<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.d()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.xj)g="father"
else g=h===D.p_?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.X(t,new C.hhg(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Hx(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.X(w,new C.hhh(i,m),p),o)
B.d.e_(d,c6)
c2.$2(b4,new C.lP("True or false: "+h+" is the "+g+" of "+l+".",A6.TC,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lP("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",A6.TC,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.GS(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.B(new A.X(t,new C.hhi(l,a0,c5),v),s)
e=a1.c
if(e===D.xj)e="son"
else e=e===D.p_?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Hx(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eC([h+1,h+2,Math.max(0,h-1)],n)
a5.X(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mR(a5,a5.r,f.k("mR<1>")),e.c=a5.e,f=f.c;e.B();){a3=e.d
a4.push(A.v(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Hx(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("ia<1>"),a3=new A.ia(a0,1,b3,a2),a3.mw(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gI(0),a2.k("bQ<aj.E>")),a2=a2.k("aj.E");a3.B();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Hx(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.atb(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.X(t,new C.hhj(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.Hx(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.d()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.d()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.B(new A.X(t,new C.hhk(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.xj
if(e)a2=b7
else a2=f===D.p_?b8:b9
if(e)f=b7
else f=f===D.p_?b8:b9
c2.$2("grand",C.Hx(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aPb(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.B(new A.X(t,new C.hhl(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Hx(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cVa)
h=l+" was born in "+k
c2.$2("place",C.Hx(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.dbx)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Hx(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Hx(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cK(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jk(b1,b3,b3)
c2.$2("year",C.Hx(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bH6(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.ND(d),l=new A.e6()
l.cW(f)
w=C.iJk(m,l,g)
for(v=new A.du(w,w.r,w.e);v.B();)J.hwU(v.d,l)
v=A.a3(w).k("cv<1>")
u=A.B(new A.cv(w,v),v.k("M.E"))
B.d.e_(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aR(u,new C.fSz(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.I)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.aa(p)>n.a){p=w.h(0,q)
p.toString
p=s.K(0,J.t(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.t(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.B(D.aBZ,x.df)
B.d.e_(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hNV(o,l))}}else if(!g&&v>3){o=C.hNV(D.aBZ[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hNV(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.e_(w,e)
return new C.lP(d.a,w,B.d.ca(w,v),d.d,d.e,d.f,d.r)},
hTr(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.ND(a2),a1=new A.e6()
a1.cW(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.GS(q).length>=2)u.push(q)}B.d.e_(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.GS(n)
l=A.U(m)
k=new A.ia(m,0,5,l.k("ia<1>"))
k.mw(m,0,5,l.c)
j=k.de(0)
if(new A.O(j,new C.h7y(),A.U(j).k("O<1,F>")).fG(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aUt(a0,j[i]))
w.push(new C.avX("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.bZ(e.c0(0,a0.aoj(q),new C.h7z()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cv<1>")
d=A.B(new A.cv(e,t),t.k("M.E"))
B.d.ff(d)
v=A.a([],v)
for(u=A.cJ(d,0,A.dx(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bQ(u,u.gI(0),t.k("bQ<aj.E>")),t=t.k("aj.E");u.B();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cK(s)
m.e_(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aUt(a0,v[r]))
w.push(new C.avX("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aSU(d){return B.d.apM(D.aEt,new C.fOn(d))},
iyT(d){return A.nT(new A.X(D.aEt,new C.fVM(d),x.av))},
bVN(d){return C.i2l(d)},
i2l(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bVN=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bVN)
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
return A.i($async$bVN,v)},
Ca(d,e){return C.i2i(d,e)},
i2i(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$Ca=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$Ca)
case 7:r=g
p=B.a.i(d)
o=A.ev(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aB("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$Ca)
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
return A.i($async$Ca,v)},
bVM(d,e,f){return C.i2j(d,e,f)},
i2j(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bVM=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bVM)
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
return A.i($async$bVM,v)},
Cb(d,e,f,g){return C.i2k(d,e,f,g)},
i2k(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$Cb=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$Cb)
case 7:r=i
p=B.a.i(d)
o=A.ev(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aB("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$Cb)
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
return A.i($async$Cb,v)},
bJq(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
hjk(d,e,f,g){return new C.amk(g,d==null?A.a(["","","",""],x.s):d,e,f)},
i0m(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aO(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.bN)
while(u.B())w.push(J.k(u.gP(u)))
u=x.N
w=A.cJ(w,0,A.dx(4,"count",x.S),u).de(0)
B.d.u(w,A.c4(Math.max(0,4-(v.b(d.h(0,"a"))?J.aa(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.h.M(v)
v=B.n.D(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.h.M(u)
return C.hjk(w,v,B.n.D(u==null?20:u,5,60),t)},
hy4(d){var w,v,u,t,s,r,q=J.a1(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aO(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.bN)
u=x.f
t=x.N
s=x.z
while(q.B()){r=q.gP(q)
if(u.b(r))v.push(C.i0m(A.a0(r,t,s)))}return new C.Nl(p,w,v)},
hs5(d){var w,v=A.a([],x.c)
for(w=J.aO(d.z);w.B();)v.push(C.hy4(w.gP(w)))
return v},
aUt(d,e){var w=e.c===D.p_
if(d.aoj(e)===0&&d.GS(e).length!==0)return w?0:1
if(d.GS(e).length!==0||d.atb(e)!=null)return w?2:3
return w?4:5},
hUw(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.ND(a4),a3=new A.e6()
a3.cW(a5)
w=A.a([],x.dT)
v=a2.b
u=A.B(v,x.P)
B.d.e_(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.I)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.I)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.d()
j=i.h(0,k)}h=a2.GS(m)
g=a2.atb(m)
f=a2.aPb(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cK(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.xj)k="father"
else k=k===D.p_?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.xj)k="father"
else k=k===D.p_?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e_(l,a3)
B.d.b_(l,new C.hhF())
d=B.a.i(m.b)
a0=A.B(new A.X(s,new C.hhG(d),o),n)
B.d.e_(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.ia(a0,0,3,i.k("ia<1>"))
a1.mw(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e_(k,a3)
a1=C.aUt(a2,m)
i=new A.ia(l,0,4,p)
i.mw(l,0,4,r)
w.push(new C.bcS(d,a1,i.de(0),k))
if(w.length>=5)break}return w},
hL9(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.Y(d,"My ")?1:0},
hTC(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.ND(a4),a3=new A.e6()
a3.cW(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.GS(q).length>=2)u.push(q)}B.d.e_(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.GS(l)
j=A.U(k)
i=new A.ia(k,0,4,j.k("ia<1>"))
i.mw(k,0,4,j.c)
h=i.de(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aR(h,new C.h8a(q))&&q.d!==j)i.push(q)}B.d.e_(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.ia(i,0,k,m)
j.mw(i,0,k,n)
f=j.de(0)
j=B.a.i(l.b)
k=C.aUt(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aUt(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aUt(a2,f[g]))
w.push(new C.abf(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lP:function lP(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bUZ:function bUZ(d){this.b=d
this.c=$},
bV_:function bV_(){},
bV0:function bV0(d){this.a=d},
fEN:function fEN(d){this.a=d},
hhe:function hhe(d){this.a=d},
hhf:function hhf(){},
hhg:function hhg(d){this.a=d},
hhh:function hhh(d,e){this.a=d
this.b=e},
hhi:function hhi(d,e,f){this.a=d
this.b=e
this.c=f},
hhd:function hhd(d,e){this.a=d
this.b=e},
hhj:function hhj(d){this.a=d},
hhk:function hhk(d){this.a=d},
hhl:function hhl(d,e,f){this.a=d
this.b=e
this.c=f},
hhc:function hhc(d,e){this.a=d
this.b=e},
fSz:function fSz(d,e){this.a=d
this.b=e},
avX:function avX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h7y:function h7y(){},
h7z:function h7z(){},
zY:function zY(d,e,f){this.a=d
this.b=e
this.c=f},
fOn:function fOn(d){this.a=d},
fVM:function fVM(d){this.a=d},
amk:function amk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPL:function bPL(){},
Nl:function Nl(d,e,f){this.a=d
this.b=e
this.c=f},
bcS:function bcS(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
hhF:function hhF(){},
hhG:function hhG(d){this.a=d},
abf:function abf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h8a:function h8a(d){this.a=d},
bki:function bki(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
ahg:function ahg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
alC:function alC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alD:function alD(d,e,f,g,h){var _=this
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
bNT:function bNT(d){this.a=d},
bNO:function bNO(){},
bNU:function bNU(){},
bNM:function bNM(){},
bNN:function bNN(){},
bNS:function bNS(d){this.a=d},
bNP:function bNP(d,e){this.a=d
this.b=e},
bNR:function bNR(d,e){this.a=d
this.b=e},
bNQ:function bNQ(d,e){this.a=d
this.b=e},
bNL:function bNL(d){this.a=d},
bfp:function bfp(d,e){this.b=d
this.a=e},
Rv:function Rv(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDj:function aDj(d,e,f){this.b=d
this.c=e
this.a=f},
aBI:function aBI(d,e,f){this.a=d
this.b=e
this.c=f},
awx:function awx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
awy:function awy(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.dt$=e
_.bc$=f
_.c=_.a=null},
ctX:function ctX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctY:function ctY(d){this.a=d},
ctW:function ctW(d){this.a=d},
ctZ:function ctZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cu_:function cu_(){},
cu0:function cu0(d,e){this.a=d
this.b=e},
cu1:function cu1(){},
cu2:function cu2(d){this.a=d},
ctT:function ctT(d){this.a=d},
ctU:function ctU(d,e){this.a=d
this.b=e},
ctV:function ctV(d,e,f){this.a=d
this.b=e
this.c=f},
ctO:function ctO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctQ:function ctQ(d,e){this.a=d
this.b=e},
ctR:function ctR(d,e){this.a=d
this.b=e},
ctP:function ctP(d,e){this.a=d
this.b=e},
ctN:function ctN(){},
ctS:function ctS(){},
beR:function beR(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cUh:function cUh(){},
aAt:function aAt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAu:function aAu(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cIS:function cIS(d){this.a=d},
cIR:function cIR(d){this.a=d},
cJ_:function cJ_(d,e){this.a=d
this.b=e},
cJ0:function cJ0(d,e){this.a=d
this.b=e},
cJ1:function cJ1(d){this.a=d},
cIZ:function cIZ(d){this.a=d},
cJ2:function cJ2(d){this.a=d},
cJ3:function cJ3(d,e){this.a=d
this.b=e},
cJ4:function cJ4(){},
cJ5:function cJ5(d){this.a=d},
cIU:function cIU(d){this.a=d},
cIV:function cIV(d,e){this.a=d
this.b=e},
cIT:function cIT(d,e){this.a=d
this.b=e},
cIW:function cIW(){},
cIX:function cIX(){},
cIY:function cIY(d,e){this.a=d
this.b=e},
aBs:function aBs(){},
aIW:function aIW(){},
hpG(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bu2((w-450*u)/2,(v-900*u)/2,u)},
ah4:function ah4(){},
fgU:function fgU(d){this.a=d},
aMO:function aMO(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
frg:function frg(d){this.a=d},
anD:function anD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anE:function anE(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qp$=f
_.MR$=g
_.aoR$=h
_.bv$=i
_.ab$=j
_.c=_.a=null},
bVL:function bVL(d){this.a=d},
bVK:function bVK(){},
bVI:function bVI(d){this.a=d},
bVG:function bVG(){},
bVH:function bVH(d){this.a=d},
bVD:function bVD(d,e){this.a=d
this.b=e},
bVE:function bVE(){},
bVF:function bVF(d){this.a=d},
bVJ:function bVJ(d,e){this.a=d
this.b=e},
bVC:function bVC(d){this.a=d},
bvN:function bvN(d,e){this.b=d
this.a=e},
fgV:function fgV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fgW:function fgW(d,e,f){this.a=d
this.b=e
this.c=f},
fgX:function fgX(d,e,f){this.a=d
this.b=e
this.c=f},
fgY:function fgY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fgZ:function fgZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fh_:function fh_(){},
anB:function anB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anC:function anC(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qp$=f
_.MR$=g
_.aoR$=h
_.bv$=i
_.ab$=j
_.c=_.a=null},
bVo:function bVo(){},
bVz:function bVz(d,e){this.a=d
this.b=e},
bVA:function bVA(d){this.a=d},
bVB:function bVB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVv:function bVv(){},
bVu:function bVu(d,e){this.a=d
this.b=e},
bVw:function bVw(d,e){this.a=d
this.b=e},
bVx:function bVx(){},
bVy:function bVy(d){this.a=d},
bVq:function bVq(d){this.a=d},
bVr:function bVr(d){this.a=d},
bVs:function bVs(d){this.a=d},
bVp:function bVp(d,e){this.a=d
this.b=e},
bVt:function bVt(d){this.a=d},
bm8:function bm8(d,e){this.b=d
this.a=e},
dwy:function dwy(){},
a3b:function a3b(d,e){this.a=d
this.b=e},
anx:function anx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
any:function any(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qp$=e
_.MR$=f
_.aoR$=g
_.bv$=h
_.ab$=i
_.c=_.a=null},
bVa:function bVa(d){this.a=d},
bV9:function bV9(){},
bV8:function bV8(){},
bV2:function bV2(){},
bV3:function bV3(){},
bV7:function bV7(d,e,f){this.a=d
this.b=e
this.c=f},
bV6:function bV6(d){this.a=d},
bV4:function bV4(d,e){this.a=d
this.b=e},
bV5:function bV5(d){this.a=d},
bly:function bly(d,e){this.b=d
this.a=e},
aDm:function aDm(){},
bj5:function bj5(){},
aDo:function aDo(){},
bj6:function bj6(){},
aDp:function aDp(){},
bj7:function bj7(){},
uO(d,e,f,g,h){var w,v,u=null,t=A.n(18),s=A.a([],x.V)
s.push(new A.ac(0,B.H,f.j(0.4),B.hS,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.V(g,h,u,u,u,20),B.aa],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.q(u,A.A(v,B.l,u,B.e,B.P,0,u,u),B.f,u,u,new A.p(f,u,u,t,s,u,B.m),u,u,u,u,B.PC,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hyS(d,e,f,g,h,i,j){return new C.anz(i,h,d,j,e,f,g,null)},
a7H:function a7H(d,e){this.c=d
this.a=e},
blF:function blF(d){this.a=d},
tY:function tY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bV1:function bV1(d){this.a=d},
IU:function IU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Xc:function Xc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bot:function bot(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e7p:function e7p(d,e){this.a=d
this.b=e},
e7q:function e7q(d){this.a=d},
e7r:function e7r(d,e){this.a=d
this.b=e},
e7n:function e7n(d){this.a=d},
e7o:function e7o(d){this.a=d},
e7m:function e7m(d){this.a=d},
e7k:function e7k(d){this.a=d},
e7l:function e7l(d){this.a=d},
e7j:function e7j(d,e){this.a=d
this.b=e},
e7s:function e7s(d){this.a=d},
e7t:function e7t(d,e){this.a=d
this.b=e},
e7u:function e7u(d,e){this.a=d
this.b=e},
e7v:function e7v(d,e){this.a=d
this.b=e},
e7y:function e7y(d,e){this.a=d
this.b=e},
e7z:function e7z(d,e){this.a=d
this.b=e},
e7A:function e7A(d,e){this.a=d
this.b=e},
e7B:function e7B(d,e){this.a=d
this.b=e},
e7C:function e7C(d,e){this.a=d
this.b=e},
e7D:function e7D(d,e,f){this.a=d
this.b=e
this.c=f},
e7E:function e7E(d,e){this.a=d
this.b=e},
e7F:function e7F(d,e){this.a=d
this.b=e},
e7w:function e7w(d){this.a=d},
e7x:function e7x(d){this.a=d},
a11:function a11(d,e){this.a=d
this.b=e},
anz:function anz(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
anA:function anA(d){var _=this
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
bVm:function bVm(d){this.a=d},
bVn:function bVn(d){this.a=d},
bVl:function bVl(d){this.a=d},
bVc:function bVc(d){this.a=d},
bVd:function bVd(d){this.a=d},
bVb:function bVb(d){this.a=d},
bVi:function bVi(d,e,f){this.a=d
this.b=e
this.c=f},
bVj:function bVj(d){this.a=d},
bVf:function bVf(d,e){this.a=d
this.b=e},
bVg:function bVg(d,e,f){this.a=d
this.b=e
this.c=f},
bVk:function bVk(){},
bVh:function bVh(d,e){this.a=d
this.b=e},
bVe:function bVe(d){this.a=d},
US:function US(d,e){this.c=d
this.a=e},
anw:function anw(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bUN:function bUN(d){this.a=d},
bUO:function bUO(d){this.a=d},
bUY:function bUY(){},
bUX:function bUX(d,e,f){this.a=d
this.b=e
this.c=f},
bUS:function bUS(d,e){this.a=d
this.b=e},
bUR:function bUR(d,e){this.a=d
this.b=e},
bUT:function bUT(d){this.a=d},
bUU:function bUU(d,e){this.a=d
this.b=e},
bUV:function bUV(d,e){this.a=d
this.b=e},
bUQ:function bUQ(d,e){this.a=d
this.b=e},
bUW:function bUW(d,e,f){this.a=d
this.b=e
this.c=f},
bUP:function bUP(d,e){this.a=d
this.b=e},
ixl(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.akm(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.W(Date.now(),0,!1))
s=new C.fS_(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("X<1>"),q=q.k("cR<1,o>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zM)m.push(l===D.xj?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cK(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cK(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jk(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jk(h,a2,a2)-A.jk(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.B(new A.cR(new A.X(a4,new C.fRY(u,f),p),new C.fRZ(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aL(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aL(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.av(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ixm(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.akm(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fS4(v,e)
q=new C.fS2(v)
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
p.n(0,s.a,d)}}d=p.$ti.k("b9<2>")
d=A.d8(new A.b9(p,d),d.k("M.E"))
n=A.B(d,A.a3(d).k("ck.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eT(l,new C.fS3(p,m));k.B();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aL(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
ihR(d,e,f,g){var w,v,u=C.ixn(d,e)
if(u<=0||f.length<=u)return new A.agJ(!1,D.Ew,f)
if(g.q(0,e.a))return new A.agJ(!1,D.Ew,f)
w=A.U(f).c
v=A.cJ(f,0,A.dx(u,"count",x.S),w).de(0)
return new A.agJ(!0,A.cJ(f,u,null,w).de(0),v)},
ihS(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.akm(d3),d2=d1.length
if(d2===0)return D.hQH
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c0(0,t.a,new C.dlK(t))}s=new C.dm0(v)
d2=x.dy
r=A.S(w,d2)
q=new C.dlT(r)
for(p=new A.du(v,v.r,v.e);p.B();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dlS(r)
l=A.S(w,x.do)
for(p=new A.du(v,v.r,v.e);p.B();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.bZ(l.c0(0,k,new C.dlL()),o)}h=new C.dlR(s)
g=new C.dlQ(l,r)
p=v.$ti.k("b9<2>")
o=p.k("X<M.E>")
f=A.B(new A.X(new A.b9(v,p),new C.dlM(h),o),o.k("M.E"))
e=f.length===0?new A.b9(v,p).gH(0):B.d.gH(f)
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
a9=new C.dlZ(new C.dlV(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.du(v,v.r,v.e),j=a2.ganP(a2);o.B();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eC([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.K(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nT(J.dO(i==null?B.M:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.dO)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.dlJ(a2,new C.dm_(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.du(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.B();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cv<1>")
d2=A.B(new A.cv(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.H4(o,new A.m(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Lm(c5.a,new A.m(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cv<1>")
d2=A.B(new A.cv(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bQ(0,new C.dlN(c6,b4))
for(d2=new A.ch(a4,a4.$ti.k("ch<1,2>")).gae(0),w=x.g;d2.B();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aO(c7.b);j.B();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.m(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eT(j,new C.dlO(c8));i.B();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b_(o,new C.dlP())
c6.push(new C.aMI(new A.m(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bjb(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hOI(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cK(d)
return w==null?null:w.b[1]},
hIa(d,e,f,g,h,i,j,k,l,m,n){return new C.a1f(k,f,j,e,l,n,m,d,g,h,i,null)},
aFn(d,e,f,g,h,i,j){return new C.bmZ(i,d,e,f,j,h,g,null)},
asH:function asH(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGY:function aGY(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e94:function e94(d){this.a=d},
e93:function e93(d){this.a=d},
e96:function e96(d,e){this.a=d
this.b=e},
e97:function e97(d,e){this.a=d
this.b=e},
e98:function e98(d){this.a=d},
e92:function e92(d,e){this.a=d
this.b=e},
e95:function e95(d){this.a=d},
e9a:function e9a(d){this.a=d},
e99:function e99(d,e){this.a=d
this.b=e},
asB:function asB(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGV:function aGV(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e8v:function e8v(d){this.a=d},
e8t:function e8t(d){this.a=d},
e8u:function e8u(d){this.a=d},
e8w:function e8w(d,e){this.a=d
this.b=e},
e8q:function e8q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7S:function e7S(d){this.a=d},
e7T:function e7T(d,e){this.a=d
this.b=e},
e89:function e89(d){this.a=d},
e87:function e87(d){this.a=d},
e88:function e88(d,e){this.a=d
this.b=e},
e8a:function e8a(d){this.a=d},
e8b:function e8b(d,e){this.a=d
this.b=e},
e8p:function e8p(d,e){this.a=d
this.b=e},
e86:function e86(d){this.a=d},
e85:function e85(d){this.a=d},
e84:function e84(d,e){this.a=d
this.b=e},
e8m:function e8m(){},
e8n:function e8n(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e8l:function e8l(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e8f:function e8f(d){this.a=d},
e8g:function e8g(d,e,f){this.a=d
this.b=e
this.c=f},
e8e:function e8e(d,e){this.a=d
this.b=e},
e8h:function e8h(d,e){this.a=d
this.b=e},
e8c:function e8c(d,e){this.a=d
this.b=e},
e8d:function e8d(){},
e8i:function e8i(d,e){this.a=d
this.b=e},
e8j:function e8j(d){this.a=d},
e8k:function e8k(d,e){this.a=d
this.b=e},
e8o:function e8o(d,e){this.a=d
this.b=e},
e7G:function e7G(d,e){this.a=d
this.b=e},
e7H:function e7H(d,e){this.a=d
this.b=e},
e8y:function e8y(d,e,f){this.a=d
this.b=e
this.c=f},
e8s:function e8s(d,e,f){this.a=d
this.b=e
this.c=f},
e8r:function e8r(d){this.a=d},
e7I:function e7I(d){this.a=d},
e7J:function e7J(d){this.a=d},
e7K:function e7K(){},
e7L:function e7L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7P:function e7P(d,e){this.a=d
this.b=e},
e7O:function e7O(d,e){this.a=d
this.b=e},
e7N:function e7N(d){this.a=d},
e7Q:function e7Q(d,e){this.a=d
this.b=e},
e7M:function e7M(d){this.a=d},
e8x:function e8x(d){this.a=d},
e81:function e81(){},
e82:function e82(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e80:function e80(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7X:function e7X(d,e,f){this.a=d
this.b=e
this.c=f},
e7W:function e7W(d,e,f){this.a=d
this.b=e
this.c=f},
e7U:function e7U(d,e){this.a=d
this.b=e},
e7Y:function e7Y(d){this.a=d},
e7Z:function e7Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7V:function e7V(d,e){this.a=d
this.b=e},
e8_:function e8_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e83:function e83(d,e){this.a=d
this.b=e},
e8F:function e8F(){},
e8G:function e8G(d,e){this.a=d
this.b=e},
e8H:function e8H(d){this.a=d},
e8I:function e8I(d,e){this.a=d
this.b=e},
e8B:function e8B(d){this.a=d},
e8z:function e8z(d,e){this.a=d
this.b=e},
e8C:function e8C(d,e){this.a=d
this.b=e},
e8D:function e8D(d,e){this.a=d
this.b=e},
e8E:function e8E(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e8J:function e8J(d){this.a=d},
e8A:function e8A(d){this.a=d},
e7R:function e7R(d){this.a=d},
bj9:function bj9(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dlH:function dlH(d){this.a=d},
dlG:function dlG(d,e){this.a=d
this.b=e},
dlI:function dlI(d){this.a=d},
dlF:function dlF(d,e){this.a=d
this.b=e},
fS_:function fS_(d,e){this.a=d
this.b=e},
fS0:function fS0(d){this.a=d},
fS1:function fS1(){},
fRY:function fRY(d,e){this.a=d
this.b=e},
fRZ:function fRZ(){},
fS4:function fS4(d,e){this.a=d
this.b=e},
fS5:function fS5(d){this.a=d},
fS6:function fS6(){},
fS2:function fS2(d){this.a=d},
fS3:function fS3(d,e){this.a=d
this.b=e},
Lm:function Lm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
H4:function H4(d,e){this.a=d
this.b=e},
bjb:function bjb(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dlK:function dlK(d){this.a=d},
dm0:function dm0(d){this.a=d},
dlT:function dlT(d){this.a=d},
dlU:function dlU(){},
dlS:function dlS(d){this.a=d},
dlL:function dlL(){},
dlR:function dlR(d){this.a=d},
dlQ:function dlQ(d,e){this.a=d
this.b=e},
dlM:function dlM(d){this.a=d},
dlV:function dlV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dlW:function dlW(d){this.a=d},
dlX:function dlX(d){this.a=d},
dlY:function dlY(){},
dlZ:function dlZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dm_:function dm_(){},
dlJ:function dlJ(d,e,f,g,h,i,j,k,l,m){var _=this
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
dlN:function dlN(d,e){this.a=d
this.b=e},
dlO:function dlO(d){this.a=d},
dlP:function dlP(){},
aMI:function aMI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bjc:function bjc(d,e){this.b=d
this.a=e},
dm1:function dm1(){},
dm2:function dm2(d){this.a=d},
dm3:function dm3(d){this.a=d},
dm4:function dm4(){},
bn_:function bn_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bic:function bic(d,e){this.b=d
this.a=e},
bBb:function bBb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fwR:function fwR(d){this.a=d},
bqn:function bqn(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f6D:function f6D(d){this.a=d},
f6C:function f6C(d,e){this.a=d
this.b=e},
a1f:function a1f(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aFl:function aFl(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dCk:function dCk(d,e){this.a=d
this.b=e},
dCj:function dCj(d){this.a=d},
dCh:function dCh(d){this.a=d},
dCi:function dCi(d){this.a=d},
dCt:function dCt(d){this.a=d},
dCu:function dCu(d){this.a=d},
dCs:function dCs(d,e){this.a=d
this.b=e},
dCv:function dCv(){},
dCy:function dCy(d){this.a=d},
dCr:function dCr(d,e){this.a=d
this.b=e},
dCx:function dCx(){},
dCz:function dCz(d){this.a=d},
dCq:function dCq(d,e){this.a=d
this.b=e},
dCA:function dCA(d){this.a=d},
dCp:function dCp(d){this.a=d},
dCB:function dCB(d){this.a=d},
dCo:function dCo(d){this.a=d},
dCC:function dCC(d){this.a=d},
dCn:function dCn(d){this.a=d},
dCD:function dCD(d){this.a=d},
dCm:function dCm(d){this.a=d},
dCE:function dCE(d){this.a=d},
dCl:function dCl(d,e){this.a=d
this.b=e},
dCw:function dCw(d){this.a=d},
afA:function afA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmZ:function bmZ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
afz:function afz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bmY:function bmY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dCF:function dCF(d){this.a=d},
dCG:function dCG(d,e){this.a=d
this.b=e},
aFm:function aFm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aLK:function aLK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afB:function afB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dCP:function dCP(d){this.a=d},
H0:function H0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hCW(d){var w=d.cJ,v=x.N
return w.j2(w,new C.cig(),v,v)},
i92(d){var w=d.bF
if(w>=0)return w
return 5},
hCY(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hCW(d).h(0,v)
if(w==null||w.length===0)return null
return A.be(w)},
hCX(d,e){var w=C.hCY(d,e)
if(w!=null&&w.cb(new A.W(Date.now(),0,!1)))return!0
return!1},
i93(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a0(C.hCW(d),w,w)
u=C.hCY(d,e)
t=u!=null&&u.cb(new A.W(Date.now(),0,!1))?u:new A.W(Date.now(),0,!1)
v.n(0,s,t.bL(A.dw(30,0,0,0,0,0).a).aa().ag())
d.cJ=v},
b3q(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b3q=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lY(t,B.Kv),$async$b3q)
case 3:if(l){u=!0
w=1
break}u=A.ly(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Kv,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b3q,v)},
cig:function cig(){},
i90(){var w,v=$.og(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.ho(u)},
JQ(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$JQ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$JQ)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f9("ngmy_family_tree_backup_codes_v1",null,!1,B.bM),$async$JQ)
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
p=A.ad(m)
$.an.$1("[family tree sync codes] load: "+A.v(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JQ,v)},
a9q(d){return C.i91(d)},
i91(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a9q=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$a9q)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i1("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cZ,null),$async$a9q)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ad(p)
$.an.$1("[family tree sync codes] save: "+A.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a9q,v)},
cif(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cif=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.JQ(),$async$cif)
case 3:t=m.ij(f),t=t.gae(t),s=x.f
case 4:if(!t.B()){w=5
break}r=t.gP(t)
q=r.b
if(s.b(q)){p=J.a1(q)
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
return A.i($async$cif,v)},
OZ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$OZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cif(d),$async$OZ)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.JQ(),$async$OZ)
case 6:s=f
r=J.a1(s)
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
return A.b(C.a9q(s),$async$OZ)
case 9:case 8:u=t
w=1
break
case 5:n=C.i90()
w=10
return A.b(C.JQ(),$async$OZ)
case 10:s=f
J.aL(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a9q(s),$async$OZ)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$OZ,v)},
b3p(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b3p=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.JQ(),$async$b3p)
case 3:t=f
for(s=J.dy(t),r=s.gdW(t),r=r.de(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.X(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a9q(t),$async$b3p)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b3p,v)},
a9r(d,e,f){var w=0,v=A.j(x.H),u
var $async$a9r=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.asG(d,e),$async$a9r)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.OZ(d),$async$a9r)
case 7:w=4
break
case 5:w=8
return A.b(C.b3p(d),$async$a9r)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a9r,v)},
asA(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$asA=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.asG(f,e),$async$asA)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.ce(),$async$asA)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.JQ(),$async$asA)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a1(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asA,v)},
b3o(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b3o=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.ce(),$async$b3o)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.JQ(),$async$b3o)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a1(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b3o,v)},
i94(){var w,v=$.og(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.ho(u)},
asD(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$asD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$asD)
case 3:if(!g){u=null
w=1
break}t=C.i94()
w=4
return A.b(A.Xd(),$async$asD)
case 4:s=g
r=B.e3.aK(B.V.au(d.f6(),null))
r=B.cS.gcq().aK(r)
q=e?999:2
J.aL(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a9s(s),$async$asD)
case 5:p=e?999:2
u=new A.a2r("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asD,v)},
asC(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$asC=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Xd(),$async$asC)
case 3:p=a0
o=J.a1(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a1(n)
l=A.aK(m.h(n,"usesRemaining"))
k=l==null?null:B.h.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b3o(J.k(l==null?"":l),j),$async$asC)
case 4:if(!a0)$.an.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{r=B.cg.cH(0,B.cL.aK(t))
s=C.hCZ(r)}catch(f){q=A.ad(f)
$.an.$1("[family tree qr stash] decode: "+A.v(q))
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
return A.b(A.a9s(p),$async$asC)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asC,v)},
hCZ(d){var w,v,u,t,s=null
try{w=B.V.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.i96(A.a0(w,x.N,x.z))
return u}catch(t){v=A.ad(t)
$.an.$1("[family tree sync] parse: "+A.v(v))
return s}},
hls(d){var w=0,v=A.j(x.m),u,t,s
var $async$hls=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.Y(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.asC(t[1])
w=1
break}u=null
w=1
break}u=C.hCZ(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hls,v)},
i96(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.cL(v,x.f)
u=A.ct(u,new C.cii(),u.$ti.k("M.E"),x.k)
t=A.a3(u).k("X<M.E>")
s=A.B(new A.X(u,new C.cij(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.be(J.k(u==null?"":u))
if(r==null)r=new A.W(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.ij(p),t=t.gae(t),o=x.B;t.B();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.cL(l,u)
n=A.ct(n,new C.cik(),n.$ti.k("M.E"),o)
k=A.a3(n).k("X<M.E>")
j=A.B(new A.X(n,new C.cil(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.asE(h,w,s,r,q)},
asG(d,e){var w=0,v=A.j(x.y),u,t
var $async$asG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(R.OP(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.BG(d),$async$asG)
case 3:u=t.cM(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asG,v)},
cir(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cir=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.BG(d),$async$cir)
case 3:t=s.b8(f,new C.cis(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b_(t,new C.cit())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cir,v)},
Xe(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Xe=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.asG(e,d),$async$Xe)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.OZ(e),$async$Xe)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.BG(e),$async$Xe)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dO(r,new C.cip(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a1(r)
if(t.gar(r)){u=null
w=1
break}t=t.dS(r,new C.ciq(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Me(e,o),$async$Xe)
case 14:n=i
if(J.cM(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.asE(s,B.a.i(e.toLowerCase()),r,new A.W(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Xe,v)},
b3t(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b3t=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Xe(d,e,f,g),$async$b3t)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aH(t,s,"_")
r=q.a
u=A.HL(A.Li(q.f6(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b3t,v)},
b3s(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b3s=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Xe(d,e,f,g),$async$b3s)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.asD(r,f),$async$b3s)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aJH(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b3s,v)},
Xf(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Xf=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hls(a0),$async$Xf)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.Y(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.asA(g.a,d,e,f,s,r),$async$Xf)
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
return A.b(C.bGL(e,j),$async$Xf)
case 12:case 11:w=13
return A.b(C.ak4(e,j,s),$async$Xf)
case 13:h=n.h(0,i)
w=h!=null&&J.cM(h)?14:15
break
case 14:w=16
return A.b(C.BQ(e,i,h),$async$Xf)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bu8(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Xf,v)},
asE:function asE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cin:function cin(){},
cio:function cio(){},
cim:function cim(){},
cii:function cii(){},
cij:function cij(){},
cik:function cik(){},
cil:function cil(){},
cis:function cis(){},
cit:function cit(){},
cip:function cip(d){this.a=d},
ciq:function ciq(d){this.a=d},
huY(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fb(null,x.H)
return A.he(d,new C.asF(w,e,g,i,f,h,null),!0,null,x.H)},
dlE(d,e,f,g,h,i,j,k){return new C.bj8(i,e,k,j,g,f,h,d,null)},
asF:function asF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGX:function aGX(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e8S:function e8S(d){this.a=d},
e8T:function e8T(d,e,f){this.a=d
this.b=e
this.c=f},
e8X:function e8X(d,e){this.a=d
this.b=e},
e8Y:function e8Y(d){this.a=d},
e8P:function e8P(d){this.a=d},
e8Q:function e8Q(d,e){this.a=d
this.b=e},
e8R:function e8R(d,e){this.a=d
this.b=e},
e8W:function e8W(d){this.a=d},
e8V:function e8V(d,e){this.a=d
this.b=e},
e8U:function e8U(){},
e9_:function e9_(d){this.a=d},
e90:function e90(d,e){this.a=d
this.b=e},
e8Z:function e8Z(d,e){this.a=d
this.b=e},
dm5:function dm5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bja:function bja(d,e,f){this.d=d
this.e=e
this.a=f},
aeP:function aeP(d,e,f){this.c=d
this.d=e
this.a=f},
bj8:function bj8(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bjd:function bjd(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a1z:function a1z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGW:function aGW(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e8K:function e8K(d,e){this.a=d
this.b=e},
e8L:function e8L(d){this.a=d},
e8M:function e8M(d){this.a=d},
e8N:function e8N(d){this.a=d},
e8O:function e8O(d){this.a=d},
a1A:function a1A(d){this.a=d},
bou:function bou(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e91:function e91(d,e){this.a=d
this.b=e},
b1X(d,e){return new C.b1W(d,e,null)},
b1W:function b1W(d,e,f){this.c=d
this.d=e
this.a=f},
izR(d){if(!(d!=null&&B.a.Y(d,"ngmy:thumb:")))return null
return B.a.aV(d,11)},
iHP(d){return A.bV(B.L,null,new C.h9J(new C.uz(A.Q(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hF1(d,e){return new C.avL(e,d,null)},
aUn(d,e,f,g,h,i,j){var w=C.izR(i)
if(w!=null)return A.bv(e,new A.a5(j,f,new C.a8t(w,!0,null),null),B.ap)
return A.aTH(e,B.c0,f,g,h,i,j)},
ml:function ml(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a8t:function a8t(d,e,f){this.c=d
this.d=e
this.a=f},
bo8:function bo8(d,e){var _=this
_.e=_.d=$
_.dt$=d
_.bc$=e
_.c=_.a=null},
dUN:function dUN(d){this.a=d},
dUO:function dUO(){},
dUP:function dUP(d,e){this.a=d
this.b=e},
bo7:function bo7(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h9J:function h9J(d){this.a=d},
h9I:function h9I(d,e){this.a=d
this.b=e},
h9H:function h9H(d,e){this.a=d
this.b=e},
h9G:function h9G(d,e){this.a=d
this.b=e},
avL:function avL(d,e,f){this.c=d
this.d=e
this.a=f},
cse:function cse(d,e){this.a=d
this.b=e},
aPa:function aPa(){},
iHz(d){var w=null
return A.cf(w,w,!0,w,new C.h95(),d,w,!0,!0,x.e2)},
iIQ(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.hgX(h,g,f,e),d,w,!0,!0,x.N)},
iHB(d,e){var w=null
return A.cf(w,w,!0,w,new C.h99(e),d,w,!0,!0,x.dY)},
iHA(d){var w=null
return A.cf(w,w,!0,w,new C.h98(),d,w,!0,!0,x.c5)},
aXl:function aXl(d,e){this.a=d
this.b=e},
aXk:function aXk(d){this.a=d},
aVo:function aVo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h95:function h95(){},
hgX:function hgX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h99:function h99(d){this.a=d},
h98:function h98(){},
a0c:function a0c(d,e){this.c=d
this.a=e},
aC2:function aC2(){var _=this
_.d=$
_.c=_.a=_.e=null},
dd9:function dd9(d){this.a=d},
dda:function dda(d){this.a=d},
dd8:function dd8(d,e){this.a=d
this.b=e},
ddb:function ddb(d){this.a=d},
ddc:function ddc(d){this.a=d},
a0b:function a0b(d){this.a=d},
aC1:function aC1(){this.d=$
this.c=this.a=null},
dd5:function dd5(d){this.a=d},
dd6:function dd6(d){this.a=d},
dd7:function dd7(d){this.a=d},
a_E:function a_E(d){this.a=d},
aAG:function aAG(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cKx:function cKx(){},
cKD:function cKD(d){this.a=d},
cKE:function cKE(d){this.a=d},
cKF:function cKF(d){this.a=d},
cKC:function cKC(){},
cKG:function cKG(d){this.a=d},
cKH:function cKH(d){this.a=d},
cKB:function cKB(){},
cKI:function cKI(d,e){this.a=d
this.b=e},
cKA:function cKA(d,e){this.a=d
this.b=e},
cKy:function cKy(d,e){this.a=d
this.b=e},
cKJ:function cKJ(d){this.a=d},
cKz:function cKz(){},
cKK:function cKK(d){this.a=d},
a3n:function a3n(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bB3:function bB3(){this.d=$
this.c=this.a=null},
fwm:function fwm(d,e){this.a=d
this.b=e},
fwn:function fwn(d){this.a=d},
fwo:function fwo(d,e){this.a=d
this.b=e},
adQ:function adQ(d,e){this.a=d
this.b=e},
GQ:function GQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bB1:function bB1(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
fwk:function fwk(d,e){this.a=d
this.b=e},
aAz:function aAz(d,e){this.c=d
this.a=e},
bB2:function bB2(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
fwl:function fwl(d){this.a=d},
bB0:function bB0(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aRi:function aRi(){},
aRj:function aRj(){},
bIR(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.h.bd(u),s=B.n.D(B.h.S((u-t)*100),0,99),r=d<0?"-":"",q=A.oe(B.n.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.h7l(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aY(B.n.v(s),2,"0")
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.GH(A.cW(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aU_(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aU_=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.ie().lc(85,1280,B.f1),$async$aU_)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fB(),$async$aU_)
case 8:r=e
if(J.aa(r)===0){u=null
w=1
break}q=C.hF0()
w=9
return A.b(C.csd(q,r),$async$aU_)
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
o=A.ad(l)
$.an.$1("[worksheets] pick photo failed: "+A.v(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aU_,v)},
aUl(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aUl=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.Y(g,"ngmy:ws-thumb:")
if(i){u=C.csa(g)
w=1
break}if(!B.a.Y(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cL.aK(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.HM(p,!0,null,o).d8(0,B.fO),$async$aUl)
case 9:n=a1
w=10
return A.b(n.lg(),$async$aUl)
case 10:m=a1
w=11
return A.b(m.b.hr(B.hq),$async$aUl)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eX(B.dM.gaS(l))
k="data:image/png;base64,"+B.cS.gcq().aK(i)
if(J.aa(k)<=r){u=k
w=1
break}o=B.h.S(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.ad(f)
$.an.$1("[worksheets] thumbnail shrink failed: "+A.v(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aUl,v)},
h7l:function h7l(){},
uz:function uz(d){this.a=d},
avK:function avK(d,e,f){this.c=d
this.d=e
this.a=f},
aIw:function aIw(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
f3N:function f3N(d,e){this.a=d
this.b=e},
f3E:function f3E(d){this.a=d},
f3F:function f3F(d){this.a=d},
f3L:function f3L(d,e){this.a=d
this.b=e},
f3K:function f3K(d,e){this.a=d
this.b=e},
f3H:function f3H(d,e){this.a=d
this.b=e},
f3G:function f3G(d,e){this.a=d
this.b=e},
f3I:function f3I(d){this.a=d},
f3J:function f3J(d,e){this.a=d
this.b=e},
f3M:function f3M(d,e){this.a=d
this.b=e},
f3z:function f3z(d,e){this.a=d
this.b=e},
f3D:function f3D(d){this.a=d},
f3C:function f3C(d,e){this.a=d
this.b=e},
f3B:function f3B(d){this.a=d},
f3O:function f3O(d,e){this.a=d
this.b=e},
f3P:function f3P(d,e){this.a=d
this.b=e},
f3A:function f3A(d,e){this.a=d
this.b=e},
hT1(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.X(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.W(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
h7m(d,e,f){var w=0,v=A.j(x.N),u
var $async$h7m=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.V.au(C.hT1(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h7m,v)},
bIT(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bIT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.h7m(!0,d,e),$async$bIT)
case 4:w=3
return A.b(r.avI(g,d,e.a),$async$bIT)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.e3.aK(B.V.au(C.hT1(d,e,null),null))
u="NGMY_WS:"+B.l0.gcq().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bIT,v)},
hJC(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
huz(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.aa(s)===0)return!1
if(J.dc(s,"NGMYWSSYNC2|"))return!0
if(J.dc(s,"NGMY_WS:"))return!0
if(J.eG(s,t))return!0
if(J.dc(s,"{"))try{w=B.V.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iFu(d){var w,v,u,t=C.hJC(d)
if(t==null)return null
if(C.huz(t))return t
w=B.a.ca(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aV(t,w))
if(C.huz(v))return v}u=B.a.ca(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aV(t,u))
if(C.huz(v))return v}return null},
huy(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.aa(q)===0)return r
if(J.dc(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.dc(q,"NGMY_WS:")){v=B.cg.cH(0,B.cL.aK(J.nl(q,8)))
w=t.a(B.V.aP(0,v,r))}else w=t.a(B.V.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hod(A.a0(u,x.N,x.z))
return t}catch(s){return r}},
bIS(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bIS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.Y(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.avH(t[1]),$async$bIS)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.huy(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.huy(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bIS,v)},
hux(d){var w=B.n.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.m1(w,v,d.c,d.d,new A.W(Date.now(),0,!1))},
bIl(){var w=0,v=A.j(x.o),u,t
var $async$bIl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HV(),$async$bIl)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.huy(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bIl,v)},
hUf(d,e,f,g){return A.bV(B.L,null,new C.hgK(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
hgK:function hgK(d,e,f){this.a=d
this.b=e
this.c=f},
afW:function afW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f3R:function f3R(d,e){this.a=d
this.b=e},
f3S:function f3S(d,e){this.a=d
this.b=e},
f3T:function f3T(d,e){this.a=d
this.b=e},
f3U:function f3U(d,e){this.a=d
this.b=e},
f3Q:function f3Q(d){this.a=d},
avE:function avE(d,e,f){this.c=d
this.d=e
this.a=f},
bpT:function bpT(){var _=this
_.c=_.a=_.e=_.d=null},
f3u:function f3u(d,e){this.a=d
this.b=e},
f3v:function f3v(d){this.a=d},
f3w:function f3w(d){this.a=d},
avJ:function avJ(d){this.a=d},
aIv:function aIv(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
f3y:function f3y(d){this.a=d},
f3x:function f3x(d){this.a=d},
icw(d,e,f,g,h){return new C.PJ(h,g,d,e,f,null)},
aNv:function aNv(d,e){this.a=d
this.b=e},
PJ:function PJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIx:function aIx(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
f4g:function f4g(){},
f4c:function f4c(d,e){this.a=d
this.b=e},
f4d:function f4d(d){this.a=d},
f3Y:function f3Y(d){this.a=d},
f3W:function f3W(d){this.a=d},
f3X:function f3X(d){this.a=d},
f46:function f46(d,e){this.a=d
this.b=e},
f43:function f43(d,e){this.a=d
this.b=e},
f44:function f44(d,e){this.a=d
this.b=e},
f45:function f45(d,e,f){this.a=d
this.b=e
this.c=f},
f41:function f41(d,e,f){this.a=d
this.b=e
this.c=f},
f4_:function f4_(d){this.a=d},
f40:function f40(d){this.a=d},
f42:function f42(d){this.a=d},
f4j:function f4j(d){this.a=d},
f4i:function f4i(d){this.a=d},
f4k:function f4k(d){this.a=d},
f4h:function f4h(d){this.a=d},
f3V:function f3V(d){this.a=d},
f3Z:function f3Z(d,e){this.a=d
this.b=e},
f4f:function f4f(d,e){this.a=d
this.b=e},
f4e:function f4e(d,e){this.a=d
this.b=e},
f49:function f49(d){this.a=d},
f4a:function f4a(d){this.a=d},
f4b:function f4b(d,e){this.a=d
this.b=e},
f48:function f48(d,e){this.a=d
this.b=e},
f47:function f47(d,e,f){this.a=d
this.b=e
this.c=f},
bCQ:function bCQ(){},
Bt(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aH(v,w,"_")},
aiy(d,e,f){return C.it8(d,e,f)},
it8(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aiy=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aB("String",e,f),$async$aiy)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ad(o)
$.an.$1("[worksheets] setString failed for "+e+": "+A.v(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiy,v)},
aix(d,e){return C.it7(d,e)},
it7(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aix=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.X(0,e),$async$aix)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ad(q)
$.an.$1("[worksheets] remove failed for "+e+": "+A.v(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$aix,v)},
irX(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.UB(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bFE(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bFE=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b6J(q),$async$bFE)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aUl(q,!1),$async$bFE)
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
return A.i($async$bFE,v)},
i_C(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rN(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rN(p,J.k(u==null?"":u),1,o,q)},
hod(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.cL(s,x.f)
w=A.ct(w,new C.cJQ(),w.$ti.k("M.E"),x.Q)
v=A.a3(w).k("X<M.E>")
r=A.B(new A.X(w,new C.cJR(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.be(J.k(t==null?"":t))
return new C.m1(w,v,u,r,t==null?new A.W(Date.now(),0,!1):t)},
ixh(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.xj
case"female":case"f":return D.p_
default:return D.zM}},
hPg(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hyT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ixh(v==null?j:J.k(v))
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
m=m==null?j:B.h.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aK(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.h.M(k)
return new C.id(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ixj(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.PZ
case"viewer":return D.le
default:return D.vq}},
ixk(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
HN(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aSZ(d,e){return B.a.i(e.toLowerCase())===C.HN(d,e)&&d.y!==D.le},
uP(d,e){var w,v=d.y
if(v===D.le)return!1
w=B.a.i(e.toLowerCase())
if(w===C.HN(d,e))return!0
if(v===D.PZ)return!0
v=d.e
return new A.O(v,A.huF(),A.U(v).k("O<1,o>")).q(0,w)},
iwE(d){return J.dO(d,new C.fQS()).gI(0)},
hhv(d){var w=0,v=A.j(x.y),u,t
var $async$hhv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.BG(d),$async$hhv)
case 3:u=t.rI(f,new C.hhw(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hhv,v)},
bGL(d,e){var w=0,v=A.j(x.H),u,t
var $async$bGL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BG(d),$async$bGL)
case 3:t=g
if(J.rI(t,new C.fOm(e))){w=1
break}if(C.iwE(t)>=2)throw A.Y(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bGL,v)},
anG(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.cL(h,x.f)
w=A.ct(w,new C.bVO(),w.$ti.k("M.E"),x.P)
v=A.a3(w).k("X<M.E>")
g=A.B(new A.X(w,new C.bVP(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bVQ(),x.N)
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
p=A.aK(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.h.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ixj(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aO(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.bN)
l=x.f
k=x.N
j=x.z
while(f.B()){i=f.gP(f)
if(l.b(i))m.push(A.a0(i,k,j))}return new C.lg(w,v,s,!r,t,g,q,p,o,n,m)},
hPv(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aH(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.av(v,0,8)},
E1(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$E1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Tr(d),$async$E1)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aB(),$async$E1)
case 4:t=f
w=5
return A.b(t.a8K(0),$async$E1)
case 5:w=6
return A.b(C.fEj(t,l),$async$E1)
case 6:s=f
if(J.cM(s)){u=s
w=1
break}r=B.a.ga_(B.a.i(l.toLowerCase()))
q=t.a
p=J.a1(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hKf(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.py(l,n),$async$E1)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.ga_(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hKf(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.py(l,n),$async$E1)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$E1,v)},
fEj(d,e){return C.ipa(d,e)},
ipa(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fEj=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a1(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bt(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.V.aP(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aO(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.B()){w=8
break}o=f.gP(f)
n=B.a.i(J.k(o))
if(J.aa(n)===0){w=7
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bt(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.V.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hod(A.a0(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bt(a9)+"_"+n))
i=C.irX(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.Y(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b6J(h),$async$fEj)
case 17:g=b1
if(g!=null){i=i.UB(g)
p=!0}case 16:J.bZ(q,i)
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
case 8:J.TB(q,new C.fEk())
if(p&&J.aa(q)!==0)C.py(a9,q)
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
return A.i($async$fEj,v)},
bHe(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bHe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Tr(d),$async$bHe)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.E1(r),$async$bHe)
case 4:t=p.aO(g)
case 5:if(!t.B()){w=6
break}s=t.gP(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHe,v)},
hKf(d){var w,v,u,t
try{w=B.V.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.cL(w,x.f)
v=A.ct(v,new C.fzP(),v.$ti.k("M.E"),x.fA)
u=A.a3(v).k("X<M.E>")
v=A.B(new A.X(v,new C.fzQ(),u),u.k("M.E"))
B.d.b_(v,new C.fzR())
return v}catch(t){v=A.a([],x.D)
return v}},
py(d,e){return C.iHo(d,e)},
iHo(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$py=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Tr(b2),$async$py)
case 3:a8=b5
if(J.aa(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aB(),$async$py)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bt(a8)
p=A.aV(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.V.aP(0,p,null)),new C.h8U(),a2).fG(0)
a2=J.b8(b3,new C.h8V(),a2).c1(0,new C.h8W())
n=A.d8(a2,a2.$ti.k("M.E"))
a2=o,a2=A.e8(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.B()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eG(n,m)?17:18
break
case 17:a5=C.Bt(a8)
l=A.aV(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.aaO(l),$async$py)
case 19:t=21
a5=C.Bt(a8)
k=A.aV(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.V.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.aaO(a5==null?null:J.k(a5)),$async$py)
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
return A.b(C.aix(r,"ngmy_worksheet_item_v3_"+C.Bt(a8)+"_"+m),$async$py)
case 29:w=30
return A.b(C.aix(r,"ngmy_worksheet_thumb_v3_"+C.Bt(a8)+"_"+m),$async$py)
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
case 14:case 10:a2=J.cK(b3),a3=a2.gae(b3)
case 31:if(!a3.B()){w=32
break}i=a3.gP(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bFE(h),$async$py)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aiy(r,"ngmy_worksheet_thumb_v3_"+C.Bt(a8)+"_"+a4,f),$async$py)
case 40:g=i.UB(f)
w=38
break
case 39:$.an.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aix(r,"ngmy_worksheet_thumb_v3_"+C.Bt(a8)+"_"+a4),$async$py)
case 41:g=i.UB(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aix(r,"ngmy_worksheet_thumb_v3_"+C.Bt(a8)+"_"+a4),$async$py)
case 42:case 34:a4=i.a
w=43
return A.b(C.aiy(r,"ngmy_worksheet_item_v3_"+C.Bt(a8)+"_"+a4,B.V.au(g.ak(),null)),$async$py)
case 43:e=b5
if(!e){$.an.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.bZ(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aiy(r,"ngmy_worksheets_index_v3_"+C.Bt(a8),B.V.au(q,null)),$async$py)
case 44:d=b5
if(!d){$.an.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eW(b3,new C.h8X(q))
a4=a3.$ti.k("cR<1,a9<o,@>>")
a7=A.B(new A.cR(a3,new C.h8Y(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.aiy(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.ga_(B.a.i(a8.toLowerCase()))),B.V.au(a0,null)),$async$py)
case 45:w=46
return A.b(J.hZH(r),$async$py)
case 46:if(a2.gco(b3)&&J.aa(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.ad(b1)
$.an.$1("[worksheets] saveWorksheetProjects error: "+A.v(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$py,v)},
MJ(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$MJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.E1(d),$async$MJ)
case 3:t=g
s=J.cK(t)
r=s.bn(t,new C.hhu(e))
if(r===-1)s.ck(t,0,e)
else s.n(t,r,e)
u=C.py(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$MJ,v)},
bH0(d,e){var w=0,v=A.j(x.H),u
var $async$bH0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.E1(d),$async$bH0)
case 2:u=g
J.mE(u,new C.fRl(e))
w=3
return A.b(C.py(d,u),$async$bH0)
case 3:return A.h(null,v)}})
return A.i($async$bH0,v)},
HP(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$HP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$HP)
case 3:l=f
k=A.a([],x._)
j=B.a.ga_(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.V.aP(0,i,null)
if(x.j.b(t)){j=J.cL(t,x.f)
j=A.ct(j,new C.fUW(),j.$ti.k("M.E"),x.k)
s=A.a3(j).k("X<M.E>")
r=A.B(new A.X(j,new C.fUX(),s),s.k("M.E"))
B.d.b_(r,new C.fUY())
k=r}}catch(h){}w=4
return A.b(C.fAD(d),$async$HP)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.ipx(k,p,d)
j=A.U(o)
s=j.k("O<1,a9<o,@>>")
s=A.B(new A.O(o,new C.fUZ(),s),s.k("aj.E"))
n=B.V.au(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Sx(d,o),$async$HP)
case 7:case 6:j=j.k("X<1>")
m=A.B(new A.X(o,new C.fV_(d),j),j.k("M.E"))
if(m.length!==0)C.aSL(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$HP,v)},
h8F(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h8F=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sx(d,e),$async$h8F)
case 3:t=J.dO(e,new C.h8G(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aSL(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h8F,v)},
a55(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a55=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aB(),$async$a55)
case 2:n=g
m=B.a.ga_(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.V.aP(0,l,null)
if(x.j.b(u)){m=J.cL(u,x.f)
m=A.ct(m,new C.hhp(),m.$ti.k("M.E"),x.k)
t=A.a3(m).k("X<M.E>")
s=A.B(new A.X(m,new C.hhq(),t),t.k("M.E"))
o=s}}catch(k){}q=J.nL(o,new C.hhr(e))
if(B.a.i(e.x).length===0&&C.uP(e,d)){m=B.a.i(d.toLowerCase())
p=e.aIf(e.y===D.le?D.le:D.vq,m)}else p=e
if(q===-1)J.ls(o,0,p)
else J.aL(o,q,p)
w=3
return A.b(C.Sx(d,o),$async$a55)
case 3:w=C.uP(p,d)?4:5
break
case 4:w=6
return A.b(C.aSK(C.HN(p,d),p),$async$a55)
case 6:if(!g)$.an.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a55,v)},
aSX(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aSX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.HP(d),$async$aSX)
case 2:u=g
t=J.cK(u)
s=A.nT(t.eW(u,new C.fR2(e)))
t.br(u,new C.fR3(e))
w=3
return A.b(C.Sx(d,u),$async$aSX)
case 3:w=s!=null&&C.aSZ(s,d)?4:5
break
case 4:w=6
return A.b(C.fzT(e),$async$aSX)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aSX,v)},
akm(d){var w=d.f,v=A.U(w).k("X<1>")
w=A.B(new A.X(w,new C.hhA(),v),v.k("M.E"))
return w},
hrU(d,e){var w,v=d.f,u=A.nT(new A.X(v,new C.fQx(e),A.U(v).k("X<1>")))
v=C.akm(d)
w=A.U(v).k("X<1>")
v=A.B(new A.X(v,new C.fQy(e,u),w),w.k("M.E"))
B.d.b_(v,new C.fQz())
return v},
ixn(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hUj(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bn(C.hrU(d,u),new C.hgY(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
iyU(d,e){var w
if(e==null||e.length===0)return 1
w=C.hrU(d,e)
if(w.length===0)return 1
return new A.O(w,new C.fVN(),A.U(w).k("O<1,F>")).eL(0,B.yK)+1},
iHh(d){var w,v=C.akm(d)
if(v.length===0)return null
w=new A.X(v,new C.h8z(),A.U(v).k("X<1>"))
if(!w.gar(0))return w.gH(0)
return B.d.gH(v)},
ixi(d){return A.J(["id",d.a,"name",d.b,"gender",C.hPg(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
iyP(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aR(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.I)(a0),++u){q=a0[u]
p=q.a
r.K(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.zM?n:q.c
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
d=q.aIa(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cUA(a1,w,a3.d,a2.y,s,a0,v)},
BG(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$BG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$BG)
case 3:q=f
p=B.a.ga_(B.a.i(d.toLowerCase()))
o=A.aV(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.V.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.cL(t,x.f)
p=A.ct(p,new C.fUT(),p.$ti.k("M.E"),x.k)
s=A.a3(p).k("X<M.E>")
p=A.B(new A.X(p,new C.fUU(),s),s.k("M.E"))
B.d.b_(p,new C.fUV())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$BG,v)},
ak4(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ak4=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.vq:D.le
a7=C.HN(b2,b3)
w=2
return A.b(C.BG(b1),$async$ak4)
case 2:a8=b5
a9=J.cK(a8)
b0=a9.bn(a8,new C.h8u(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bGL(b1,b2),$async$ak4)
case 5:case 4:if(b0===-1){u=b2.aIf(a6,a7)
a9.ck(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.zM?i:l.c
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
s.n(0,m,l.aIa(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b9<2>")
s=A.B(new A.b9(s,k),k.k("M.E"))
k=a5?D.vq:D.le
u=t.cUC(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Sx(b1,a8),$async$ak4)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aSK(B.a.i(b3.toLowerCase()),u),$async$ak4)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ak4,v)},
hKJ(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.W(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("O<1,a9<o,@>>"),k=A.B(new A.O(m,C.hTo(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hKK(d,e){var w=new A.W(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("O<1,a9<o,@>>")
u=A.B(new A.O(u,C.hTo(),t),t.k("aj.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
imZ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a1(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.anG(A.a0(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.O(j,A.huF(),A.U(j).k("O<1,o>")).c1(0,new C.fAp())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.vq
else s=B.d.q(t,u)?D.PZ:D.le
return w.aIf(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.anG(A.a0(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.cL(q,h)
h=A.ct(h,new C.fAq(),h.$ti.k("M.E"),x.P)
p=A.a3(h).k("X<M.E>")
o=A.B(new A.X(h,new C.fAr(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fAs(),x.N).c1(0,new C.fAt())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.vq
else s=B.d.q(t,u)?D.PZ:D.le
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
j=A.aK(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.h.M(j)
if(j==null)j=0
return new C.lg(h,r,p,!m,t,o,l,j,v,s,B.co)},
fAD(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fAD=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.aa(a0)===0){u=null
w=1
break}t=4
r=new C.fAH()
h=x.N
g=x.z
w=7
return A.b(A.hc(A.a([A.m7("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bM),r.$2(A.m7("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bM),"collaborator"),r.$2(A.m7("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bM),"public")],x.cl),x.fO),$async$fAD)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.S(h,g)
h=A.B(p,g)
l=h
J.fV(l,o)
J.fV(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.aa(j)!==0)J.aL(m,j,k)}l=m
h=A.a3(l).k("b9<2>")
h=A.ct(new A.b9(l,h),new C.fAE(a0),h.k("M.E"),x.k)
l=A.a3(h).k("X<M.E>")
l=A.B(new A.X(h,new C.fAF(),l),l.k("M.E"))
B.d.b_(l,new C.fAG())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.ad(a1)
d=J.k(i)
l=B.a.q(d,"Could not find the table 'public.family_trees'")||B.a.q(d,'relation "public.family_trees" does not exist')
h=$.an
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
return A.i($async$fAD,v)},
ipx(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a1(e)
if(j.gar(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dS(e,new C.fF5(),v).c1(0,new C.fF6())
t=A.d8(u,u.$ti.k("M.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.HN(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.le){m=q.e
m=!new A.O(m,A.huF(),A.U(m).k("O<1,o>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.B();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.iyP(l,v)
o=C.HN(k,w)
p=v.d
s.n(0,u,o===w?k.bhV(p,D.vq):k.bhV(p,v.y))}j=s.$ti.k("b9<2>")
j=A.B(new A.b9(s,j),j.k("M.E"))
B.d.b_(j,new C.fF7())
return j},
Sx(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Sx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aB(),$async$Sx)
case 2:u=g
t=B.a.ga_(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fI7(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.V.au(s,null)),$async$Sx)
case 3:return A.h(null,v)}})
return A.i($async$Sx,v)},
aSK(d,e){return C.iv3(d,e)},
iv3(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aSK=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mB("family_trees",A.a([C.hKJ(e,d)],p),null,B.cZ),$async$aSK)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mB("family_trees",A.a([C.hKK(e,d)],p),null,B.cZ),$async$aSK)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.ad(n)
$.an.$1("[family_trees] upsert error: "+A.v(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aSK,v)},
aSL(d,e){return C.iv4(d,e)},
iv4(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aSL=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("O<1,a9<o,@>>")
m=n.k("aj.E")
l=A.B(new A.O(e,new C.fNA(d),n),m)
r=l
w=7
return A.b(A.mB("family_trees",r,null,B.cZ),$async$aSL)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.O(e,new C.fNB(d),n),m)
p=k
w=8
return A.b(A.mB("family_trees",p,null,B.cZ),$async$aSL)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.ad(i)
$.an.$1("[family_trees] bulk upsert error: "+A.v(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aSL,v)},
fzT(d){return C.im8(d)},
im8(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fzT=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.SZ("family_trees",A.J(["id",d],x.N,x.z),null,B.cZ),$async$fzT)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ad(p)
$.an.$1("[family_trees] delete error: "+A.v(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fzT,v)},
rN:function rN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
m1:function m1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cJT:function cJT(){},
cJS:function cJS(){},
cJQ:function cJQ(){},
cJR:function cJR(){},
IT:function IT(d,e){this.a=d
this.b=e},
id:function id(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
anF:function anF(d,e){this.a=d
this.b=e},
fQS:function fQS(){},
hhw:function hhw(d){this.a=d},
fOm:function fOm(d){this.a=d},
lg:function lg(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bVS:function bVS(){},
bVR:function bVR(){},
bVO:function bVO(){},
bVP:function bVP(){},
bVQ:function bVQ(){},
fEk:function fEk(){},
fzP:function fzP(){},
fzQ:function fzQ(){},
fzR:function fzR(){},
h8U:function h8U(){},
h8V:function h8V(){},
h8W:function h8W(){},
h8X:function h8X(d){this.a=d},
h8Y:function h8Y(){},
hhu:function hhu(d){this.a=d},
fRl:function fRl(d){this.a=d},
fUW:function fUW(){},
fUX:function fUX(){},
fUY:function fUY(){},
fUZ:function fUZ(){},
fV_:function fV_(d){this.a=d},
h8G:function h8G(d){this.a=d},
hhp:function hhp(){},
hhq:function hhq(){},
hhr:function hhr(d){this.a=d},
fR2:function fR2(d){this.a=d},
fR3:function fR3(d){this.a=d},
hhA:function hhA(){},
fQx:function fQx(d){this.a=d},
fQy:function fQy(d,e){this.a=d
this.b=e},
fQz:function fQz(){},
hgY:function hgY(d){this.a=d},
fVN:function fVN(){},
h8z:function h8z(){},
fUT:function fUT(){},
fUU:function fUU(){},
fUV:function fUV(){},
h8u:function h8u(d){this.a=d},
fAp:function fAp(){},
fAq:function fAq(){},
fAr:function fAr(){},
fAs:function fAs(){},
fAt:function fAt(){},
fAH:function fAH(){},
fAI:function fAI(d){this.a=d},
fAE:function fAE(d){this.a=d},
fAF:function fAF(){},
fAG:function fAG(){},
fF5:function fF5(){},
fF6:function fF6(){},
fF7:function fF7(){},
fI7:function fI7(){},
fNA:function fNA(d){this.a=d},
fNB:function fNB(d){this.a=d},
cJU:function cJU(d,e){this.a=d
this.b=e},
cJV:function cJV(d,e){this.a=d
this.b=e},
aKE:function aKE(d,e,f){this.a=d
this.b=e
this.c=f},
bd5:function bd5(){this.b=this.a=0},
bd4:function bd4(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bB4:function bB4(){},
xF(d,e){var w,v
if(d==null)return""
w=d.bV()
v=""+w.gci()+"/"+w.gcB()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.aY(B.n.v(w.gnG()),2,"0")+":"+B.a.aY(B.n.v(w.gHw()),2,"0")},
iwa(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.bs(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.c_(new A.m(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.v.j(0.22)
$.T()
u=A.L()
u.r=v.gp(0)
a5.c2(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=F.hr[l]*a7*0.075
j=k-w
j=A.bx(new A.a4(j,u,j+t,s),new A.aQ(r,r))
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.r=B.dl.gp(0)
a5.aq(j,i)
k-=q
k=A.bx(new A.a4(k,p,k+o,n),new A.aQ(m,m))
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bx(new A.a4(w,u,s,u+t),new A.aQ(q,q))
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bx(new A.a4(w,q,s,q+a7*0.045),new A.aQ(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.m(v*0.15,s)
f=new A.m(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a6(0,new A.m(s,a7*0.17)),O.aiw(F.tv,t))
s=g.a6(0,new A.m(s,a7*0.18))
q=A.L()
q.r=F.tv.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a6(0,new A.m(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,O.aiw(F.tv,t))
w=A.L()
w.r=F.tv.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.m(0,v)
a1=a7*0.22
if(b1===1){w=a0.a6(0,new A.m(0,-a1*0.12))
u=A.L()
u.r=F.mo.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=F.tv.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bY(a0,a1)
u=A.L()
u.r=F.mo.gp(0)
a5.cR(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bY(a0,a1)
u=A.L()
u.r=F.mo.gp(0)
a5.cR(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=F.hr[l]
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=F.mo.gp(0)
a5.O(new A.m(0+a2*a1*1.05,w),u,t)}}a3=B.h.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=F.hr[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.b=B.ad
k.c=1.6
k.r=B.bq.gp(0)
k.d=B.bG
a5.ah(new A.m(m+q,p),new A.m(m+o,p),k)}else{k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.r=B.c.gp(0)
a5.O(new A.m(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.U,B.R,B.X,B.Y,B.W)
j.r=B.v.gp(0)
a5.O(new A.m(m+k*a1*0.06,p),r,j)}m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=B.hZ.j(0.5).gp(0)
a5.O(new A.m(0+n*0.62,w),u,m)}a5.cR(A.c_(a0.a6(0,new A.m(0,a1*0.5)).aI(0,new A.m(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,O.aiw(B.bq,1.8))
a4.restore()},
ict(){var w,v=$.og(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.ho(u)},
avF(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$avF=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$avF)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f9("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bM),$async$avF)
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
p=A.ad(m)
$.an.$1("[worksheet qr stash] load: "+A.v(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$avF,v)},
avG(d){return C.icu(d)},
icu(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$avG=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$avG)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i1("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cZ,null),$async$avG)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ad(p)
$.an.$1("[worksheet qr stash] save: "+A.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$avG,v)},
avI(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$avI=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$avI)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.ict()
w=4
return A.b(C.avF(),$async$avI)
case 4:r=h
q=B.a.i(e)
p=B.e3.aK(t)
J.aL(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cS.gcq().aK(p),"usesRemaining",25,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.avG(r),$async$avI)
case 5:u=new A.a2r("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$avI,v)},
avH(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$avH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.ce(),$async$avH)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.avF(),$async$avH)
case 4:q=f
p=J.a1(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a1(o)
m=A.aK(n.h(o,"usesRemaining"))
l=m==null?null:B.h.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{s=B.cg.cH(0,B.cL.aK(t))}catch(h){r=A.ad(h)
$.an.$1("[worksheet qr stash] decode: "+A.v(r))
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
return A.b(C.avG(q),$async$avH)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$avH,v)},
hF0(){var w=new A.W(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cW.aw(999999)},
icv(d){var w,v,u,t,s,r,q
try{w=A.BE(d)
if(w==null)return d
v=w
if(J.MP(v)>960||J.MO(v)>960){s=v
r=J.MP(v)>=J.MO(v)?960:null
v=A.ST(s,J.MO(v)>J.MP(v)?960:null,B.J_,r)}s=v
u=A.Je(82).zW(s,B.rB)
if(J.aa(u)===0)return d
s=new Uint8Array(A.cd(u))
return s}catch(q){t=A.ad(q)
$.an.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
csd(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$csd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.icv(e)
$.cs9.n(0,s,t)
u=C.bIV(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$csd,v)},
b6J(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b6J=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.dc(l,"data:image")){u=null
w=1
break}t=4
r=J.eG(l,",")?B.d.gal(J.mb(l,",")):l
q=B.cL.aK(r)
if(J.aa(q)===0){u=null
w=1
break}p=C.hF0()
w=7
return A.b(C.csd(p,q),$async$b6J)
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
n=A.ad(k)
$.an.$1("[worksheet-thumb] persistDataUrl failed: "+A.v(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b6J,v)},
csa(d){var w=0,v=A.j(x.T),u,t,s
var $async$csa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.Y(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.csc(s),$async$csa)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcq().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$csa,v)},
aaO(d){var w=0,v=A.j(x.H),u,t
var $async$aaO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hT2(d)
if(t==null){w=1
break}$.cs9.X(0,t)
w=3
return A.b(C.bIU(t),$async$aaO)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aaO,v)},
bIV(d,e){return C.iFx(d,e)},
iFx(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bIV=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aRz
w=7
return A.b(n==null?$.aRz=A.hqG():n,$async$bIV)
case 7:r=g
q=new Uint8Array(A.cd(e))
p=J.mF(r,"thumbs","readwrite")
B.iV.mr(J.mD(p,"thumbs"),q,l)
w=8
return A.b(J.oX(p),$async$bIV)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ad(k)
$.an.$1("[worksheet-thumb idb put] "+A.v(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bIV,v)},
bIU(d){return C.iFv(d)},
iFv(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bIU=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aRz
w=7
return A.b(o==null?$.aRz=A.hqG():o,$async$bIU)
case 7:r=f
q=J.mF(r,"thumbs","readwrite")
B.iV.H5(J.mD(q,"thumbs"),m)
w=8
return A.b(J.oX(q),$async$bIU)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ad(l)
$.an.$1("[worksheet-thumb idb delete] "+A.v(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bIU,v)}},D
J=c[1]
A=c[0]
B=c[2]
A9=c[85]
S=c[293]
A_=c[112]
Aa=c[292]
P=c[297]
A0=c[203]
T=c[66]
M=c[69]
Ab=c[269]
L=c[241]
A1=c[119]
U=c[154]
H=c[41]
E=c[257]
Ac=c[272]
V=c[138]
Ad=c[167]
A2=c[115]
Ae=c[105]
Af=c[72]
Ag=c[268]
Ah=c[50]
Q=c[267]
Ai=c[291]
Aj=c[237]
N=c[97]
A3=c[93]
Ak=c[210]
A4=c[163]
A5=c[215]
A6=c[253]
W=c[298]
A7=c[296]
Al=c[159]
Am=c[294]
An=c[86]
G=c[295]
Ao=c[166]
Ap=c[299]
Aq=c[153]
A8=c[245]
Ar=c[40]
As=c[196]
At=c[114]
Au=c[233]
X=c[284]
O=c[49]
F=c[130]
Av=c[39]
I=c[137]
Y=c[107]
K=c[172]
Aw=c[120]
Z=c[83]
R=c[38]
Ax=c[117]
C=a.updateHolder(c[7],C)
D=c[290]
C.arg.prototype={}
C.b1Y.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bmi(),f=h.x!=null&&h.Af(i).length===0
if(h.x!=null)w=f?B.b6:B.bC
else w=h.gVB()?B.bC:B.ec
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.K(D.btk,B.r,1)
s=x.p
r=A.q(i,A.w(A.a([A.q(i,D.ftR,B.f,i,i,new A.p(B.b6.j(0.12),i,i,A.n(999),i,i,B.m),i,i,i,i,B.ho,i,i,i),B.S,D.h_j,B.at,A.c(C.xF(new A.W(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fVR,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,D.baT,i,i,i,i,B.Pz,i,i,i)
q=A.n(16)
p=A.K(B.bn,B.r,1)
o=A.K(B.b6.j(0.28),B.r,1)
n=A.ht2(h.d)
o=A.q(B.z,C.b1X(A.fYi(h.e,n),30),B.f,i,i,new A.p(B.mr,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fQL,B.K,i,i)
m=A.n(14)
l=A.K(B.bn,B.r,1)
q=A.q(i,A.w(A.a([o,B.N,n,B.bs,D.h_C,B.af,A.q(i,A.w(A.a([D.hg1,B.bs,A.c(A.BJ(h.c),i,i,i,i,i,i,D.fLc,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,l,m,i,i,B.m),i,i,i,i,B.fc,i,i,1/0)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aS,i,p,q,i,i,B.m),i,i,i,i,B.a2e,i,i,i)
p=A.n(16)
m=A.K(B.bn,B.r,1)
l=j.aVp("Original due",C.xF(h.r,!1))
n=j.aVp("Current due",C.xF(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.S,A.q(i,A.w(A.a([l,B.N,n,B.S,A.q(i,A.c(h.gaPm(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.p(o,i,i,k,i,i,B.m),i,i,i,i,B.x8,i,i,1/0),B.S,j.coJ(),B.N,j.caQ(g,f)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.K(B.bn,B.r,1)
B.d.u(p,A.a([B.S,A.q(i,A.w(A.a([D.h0C,B.at,A.c(q,i,i,i,i,i,i,D.fPU,i,i,i)],s),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aS,i,n,o,i,i,B.m),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaJU()){q=A.n(14)
o=A.K(B.cF,B.r,1.6)
B.d.u(p,A.a([B.S,A.q(i,A.w(A.a([D.hhm,B.N,A.bv(A.n(12),A.el(new A.a5(1/0,88,A.b4(i,i,i,new A.Y4(h.ax,B.a_,D.fyE,!0,3.5,i),B.aA),i),B.c,!0),B.ap)],s),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,o,q,i,i,B.m),i,i,i,i,B.Da,i,i,i)],s))}p.push(B.aB)
p.push(D.h97)
return A.q(i,A.w(A.a([r,new A.C(B.a2g,A.w(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.P,0,B.p),B.ap,i,i,new A.p(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aVp(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.adx,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fMg,w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
coJ(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.ac3(B.ec,u,"Not paid yet")
w=t.Af(null).length
v=w===0?B.b6:B.bC
return this.ac3(v,u,C.xF(t.x,!0))},
caQ(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.ac3(B.b6,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.ac3(B.b6,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.adx,u,u,u)
v=A.U(d).k("O<1,ht>")
v=A.B(new A.O(d,new C.cbc(),v),v.k("aj.E"))
return A.w(A.a([w,B.aj,A.c0(B.bI,v,B.br,u,6,6)],x.p),B.B,u,B.e,B.i,0,B.p)},
ac3(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.adx,w,w,w),1),new A.d1(1,B.c9,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dR,w,w),w)],x.p),B.B,w,B.e,B.i,0,w,w)}}
C.bfn.prototype={
a5(d,e){new A.Y4(this.b,B.a_,e,!0,3.5,null).a5(d,e)},
aD(d){return d.b!==this.b}}
C.art.prototype={
R(){return new C.aGn(A.a([],x.bp))},
geb(){return this.c}}
C.aGn.prototype={
Z(){this.a4()
this.K6()},
K6(){var w=0,v=A.j(x.H),u,t=this,s
var $async$K6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a4k(t.a.c),$async$K6)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dVG(t,s))
case 1:return A.h(u,v)}})
return A.i($async$K6,v)},
aXo(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bv:B.bl).j(0.22)
w=A.n(10)
return A.bC(v,new A.b6(4,r,new A.ax(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b6(4,w,new A.ax((this.a.d.a?B.bv:B.bl).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.n(10),D.b8y),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aXn(d){return this.aXo(d,null)},
R4(d){return this.csu(d)},
csu(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$R4=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.IZ:B.f1
w=7
return A.b(new A.ie().Dr(72,900,900,n),$async$R4)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fB(),$async$R4)
case 8:p=f
n=B.cS.gcq().aK(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.ad(l)
n=r.c
if(n!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("Could not pick photo: "+A.v(o),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$R4,v)},
b5N(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.n(10),n=A.K((q?B.bv:B.bl).j(0.18),B.r,1)
if(d)q=B.cY
else q=s.a.d.a?B.bv:B.bl
q=A.V(e,q,r,r,r,18)
w=A.c(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aS:B.ax,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bv:B.bl
t=x.p
u=A.E(A.w(A.a([w,A.c(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.B,r,B.e,B.i,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cp)
q=A.a([q,B.aa,u,A.bL(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aJ(r,r,r,r,A.V(B.cC,s.a.d.a?B.bv:B.bl,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cp))
return A.q(r,A.A(q,B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(p,r,n,o,r,r,B.m),r,r,r,B.jE,D.bGz,r,r,r)},
En(d){return this.bGF(d)},
bGE(){return this.En(null)},
bGF(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$En=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ay()
r=new A.au(new A.bb(a4,B.b9,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.h.bO(a4)
p=a5.c
a4=a4===q?B.n.v(B.h.M(p)):B.h.a1(p,2)}o=new A.au(new A.bb(a4,B.b9,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.bb(a4,B.b9,B.aP),s)
if(a3){a4=new A.W(Date.now(),0,!1).bL(6048e8)
m=A.c3(a4.gcl(),a4.gci(),a4.gcB(),0,0,0,0,0)}else{a4=a5.f
m=A.c3(a4.gcl(),a4.gci(),a4.gcB(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bt(a4,!0,x.cT)
i=a3?null:A.ht2(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xU?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i2(B.v.j(0.55),!0,"Dismiss",a4,new C.dVp(),new C.dVq(a2,t,a5,r,new C.dVr(a2,t),o,n,j),B.eK,!0,x.y),$async$En)
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
break}if(f.length===0||e<=0){t.c.L(x.q).f.T(D.fFf)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.T(D.fDU)
w=1
break}a1=A.fYi(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xU?"male":"female"
w=7
return A.b(A.akl(a3,A.hBz(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$En)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xU?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a7(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c3(a3.gcl(),a3.gci(),a3.gcB(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c3(a4.gcl(),a4.gci(),a4.gcB(),0,0,0,0,0)))a5.cWZ(a2.a)
w=8
return A.b(A.akl(t.a.c,a5),$async$En)
case 8:case 5:w=9
return A.b(t.K6(),$async$En)
case 9:case 1:return A.h(u,v)}})
return A.i($async$En,v)},
aY3(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bv:B.bl).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b1X(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aS:B.ax
return A.aE(!1,B.a3,!0,v,A.aM(!1,u,!0,A.q(p,A.A(A.a([r,B.b7,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.bb,B.i,0,p,p),B.f,p,p,new A.p(p,p,s,t,p,p,B.m),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
TU(d){return this.cKQ(d)},
cKQ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$TU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i2(B.v.j(0.55),!0,"Dismiss",s,new C.dVJ(),new C.dVK(t,d),B.hn,!0,x.y),$async$TU)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.W(s,0,!1)
case 4:w=7
return A.b(A.akl(t.a.c,d),$async$TU)
case 7:w=8
return A.b(t.K6(),$async$TU)
case 8:case 1:return A.h(u,v)}})
return A.i($async$TU,v)},
R3(d,e){return this.bRO(0,e)},
bRO(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$R3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lG(s,"Cancel","Delete",e.b+" \xb7 "+A.BJ(e.c)+" will be removed from this device.","Delete this debt?"),$async$R3)
case 3:if(!g){w=1
break}w=4
return A.b(C.fR9(t.a.c,e.a),$async$R3)
case 4:w=5
return A.b(t.K6(),$async$R3)
case 5:case 1:return A.h(u,v)}})
return A.i($async$R3,v)},
ai3(d){return this.cm_(d)},
cm_(d){var w=0,v=A.j(x.H),u=this,t
var $async$ai3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bV(B.L,null,new C.dVD(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ai3)
case 2:return A.h(null,v)}})
return A.i($async$ai3,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eIH
w=J.dO(m.d,new C.dVL())
v=A.B(w,w.$ti.k("M.E"))
w=J.dO(m.d,new C.dVM())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cF(v,0,new C.dVN())
w=A.n(18)
s=m.a.d.a
r=s?D.cHK:D.aFv
q=A.K(s?B.cY.j(0.35):B.cY.j(0.18),B.r,1)
s=A.q(l,D.c7Y,B.f,l,l,new A.p(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.ar,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.ax,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aE(!1,B.a3,!0,A.n(12),A.aM(!1,A.n(12),!0,D.eI1,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dVO(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.i,0,l,l)
o=A.E(m.cGP("Open",""+v.length),1)
n=v.length===0?"$0.00":A.BJ(t)
r=A.a([A.q(l,A.w(A.a([s,B.af,A.A(A.a([o,B.aa,A.E(m.bc2(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.B,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(l,l,q,w,l,new A.a6(B.aw,B.aD,B.w,r,l,l),B.m),l,l,l,l,B.aob,l,l,l),B.aB],p)
if(J.cj(m.d)){w=m.a.d.a
s=w?B.el:B.c
q=A.n(18)
o=A.K((w?B.bv:B.bl).j(0.12),B.r,1)
n=A.q(l,D.c2v,B.f,l,l,new A.p(B.cY.j(0.12),l,l,A.n(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.ax,l,l,l,l,l,l,l,l,15,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.q(l,A.w(A.a([n,B.af,w,B.at,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bl,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(s,l,o,q,l,l,B.m),l,l,l,l,D.bJf,l,l,1/0))}else{w=m.gcrH()
s=A.B(new A.O(v,w,A.U(v).k("O<1,x>")),x.l)
if(u.length!==0){q=A.a([B.aj,new A.C(D.bKU,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bl,l,l,l,l,l,l,l,l,12,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.O(u,w,A.U(u).k("O<1,x>")))
B.d.u(s,q)}B.d.u(r,s)}return A.w(r,B.al,l,B.e,B.i,0,B.p)},
bc2(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.v.j(0.22):B.c.j(0.85),s=A.n(14),r=A.K((v.a.d.a?B.bv:B.bl).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bv:B.bl,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aS:B.ax
return A.q(u,A.w(A.a([q,B.bs,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.B,u,B.e,B.i,0,B.p),B.f,u,u,new A.p(t,u,r,s,u,u,B.m),u,u,u,u,B.ep,u,u,u)},
cGP(d,e){return this.bc2(!1,d,e)},
crI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.Af(j).length,h=d.blx()
if(d.x!=null){w=d.Af(j).length
v=w===0?B.cY:B.bC}else if(d.gVB())v=B.bC
else{if(h)w=B.cY
else w=k.a.d.a?B.bv:B.bl
v=w}if(d.x!=null){w=d.Af(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xF(u,!1)}else{u.toString
t="Paid "+C.xF(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xF(w,!1)+" \xb7 "+i+" missed":"Due "+C.xF(w,!1)}w=k.a.d.a?B.el:B.c
u=A.n(18)
if(d.gVB()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bv:B.bl).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.H,B.v.j(0.04),B.cN,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bt:B.mr
o=A.K(d.gVB()&&d.x==null?B.bC.j(0.45):B.cY.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.ht2(d.d)
o=A.q(B.z,A.d3(C.b1X(A.fYi(d.e,m),24),n),B.f,j,j,new A.p(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.ax
m=x.p
n=A.a([new A.d1(1,B.c9,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaJU())B.d.u(n,A.a([B.dY,A.V(B.Qq,B.cY.j(0.8),j,j,j,14)],m))
p=A.E(A.w(A.a([A.A(n,B.l,j,B.e,B.i,0,j,j),B.cR,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.B,j,B.e,B.i,0,B.p),1)
n=A.BJ(d.c)
l=k.a.d.a?B.aS:B.ax
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.q(j,A.aE(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.C(Ai.anY,A.A(A.a([o,B.bc,p,B.aa,A.w(A.a([n,B.bs,A.V(B.eL,(k.a.d.a?B.bv:B.bl).j(0.5),j,j,j,18)],m),B.dr,j,B.e,B.i,0,B.p)],m),B.l,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dVF(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.p(w,j,s,u,r,j,B.m),j,j,j,B.d2,j,j,j,j)}}
C.vd.prototype={}
C.ant.prototype={
C(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.aY
u=v?B.B:B.l
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.H,B.v.j(0.45),B.cy,16)],x.V)
o=x.p
n=A.a([],o)
m=B.v.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.q(a0,A.V(B.cC,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.p(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.iv,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.c(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aBE,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.I0,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.d7(B.dn,m,B.f,A.A(l,B.l,a0,B.e,B.P,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(B.anH,A.c(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cQ:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.C(B.fD,A.w(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.fzs)
a2=A.a([A.A(n,B.l,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.C(B.vj,A.q(a0,a0,B.f,a0,a0,new A.p(a0,a0,a0,a0,a0,new A.a6(B.a5,B.a9,B.w,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.m),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.lF,A.w(a2,B.l,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hN,a0,a0,a0,a0)}return A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,q,s,p,new A.a6(B.aw,B.aD,B.w,a1.d,a0,a0),B.m),a0,a0,a0,D.bH3,a0,a0,a0,a0)}}
C.aYD.prototype={
C(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.q(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.aY?B.aY:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.c(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cQ,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.i,0,q,q),B.cR,n],m)
if(p.z)o.push(new A.C(B.tE,n,q))
return new A.C(B.d2,A.w(o,B.l,q,B.e,B.P,0,B.p),q)}}
C.UR.prototype={
R(){return new C.bj3()}}
C.bj3.prototype={
gc5l(){var w=this.d
return w===$?this.d=this.a.c:w},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aG(d,n,x.w).w,l=x.p,k=A.a([D.eIC,D.eII],l)
for(w=0;w<8;++w){v=D.a6B[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.IN:B.Ad
q=t===s
r=A.V(r,q?B.eJ:B.bX,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.b7,A.c(v.b,n,n,n,n,n,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aa,new A.bu(1,B.b8,A.c(v.c,n,1,B.a2,n,n,n,B.BA,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aQ(24,24)
p=new A.ax(B.eJ,2,B.r,-1)
s=new A.p(n,n,new A.bE(p,p,p,p),new A.bc(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.aA(n,new A.C(B.f0,A.w(A.a([new A.C(B.mz,new A.c1(B.aK,B.e,B.i,B.l,n,B.p,n,0,r,n),n),A.q(n,new A.dn(!0,new C.ant(v,q.d,q.e,new C.dkC(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.B,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dkD(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.C(D.bHr,A.bH(D.hn_,n,new C.dkE(o,d),A.bp(B.b0,n,n,n,n,B.pp,n,n,new A.ba(A.n(16),B.a1),n,n,n)),n))
return A.bn(!0,new A.cQ(new A.aY(0,1/0,0,m.a.b*0.9),A.co(k,n,n,D.bLO,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nQ.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bi6(d,e,f){return new C.nQ(this.a,e,d,f)}}
C.IS.prototype={
xo(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.IS(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aI2(d){var w=null
return this.xo(w,w,w,w,w,d,w,w,w,w,w,w)},
cSz(d){var w=null
return this.xo(w,w,w,w,d,w,w,w,w,w,w,w)},
bi4(d,e,f){var w=null
return this.xo(d,w,w,w,w,w,w,w,e,w,f,w)},
cTd(d){var w=null
return this.xo(w,w,w,w,w,w,d,w,w,w,w,w)},
cTm(d){var w=null
return this.xo(w,w,w,w,w,w,w,w,w,d,w,w)},
cSx(d){var w=null
return this.xo(w,w,w,d,w,w,w,w,w,w,w,w)},
cTo(d){var w=null
return this.xo(w,w,w,w,w,w,w,w,w,w,w,d)},
cSu(d){var w=null
return this.xo(w,w,d,w,w,w,w,w,w,w,w,w)},
cSp(d){var w=null
return this.xo(w,d,w,w,w,w,w,w,w,w,w,w)},
GX(d){var w=null
return this.xo(w,w,w,w,w,w,w,d,w,w,w,w)},
cTw(d,e,f,g,h,i,j,k,l,m,n){return this.xo(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cQ2(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bUz(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.h.M(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cV(d.h(0,n))).length!==0?B.a.i(A.cV(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cV(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.EL.geD(D.EL))
s=i==null?o:B.h.D(i,18,36)
r=l.$2("position",D.a8k)
q=l.$2("frame",D.a7F)
l=l.$2("texture",D.a7B)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cV(d.h(0,"author"))):o
return this.cTw(p,u,t,q,r,A.rB(d.h(0,"ribbon"))?A.Hq(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a0A.prototype={
R(){return new C.aDk(A.a([],x.I),D.PY)},
geb(){return this.c}}
C.aDk.prototype={
Z(){var w,v=this
v.a4()
v.f=A.AB(0,1)
w=$.ay()
v.z=new A.au(B.ay,w)
v.Q=new A.au(B.ay,w)
v.ll()
w=v.a
C.bHa(w.c,w.d).bD(new C.dli(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.d()
u.t()
u=v.z
u===$&&A.d()
w=$.ay()
u.V$=w
u.W$=0
u=v.Q
u===$&&A.d()
u.V$=w
u.W$=0
v.a3()},
ll(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ll=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Me(s.c,s.d),$async$ll)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.dl6(t,r))
t.azt()
case 1:return A.h(u,v)}})
return A.i($async$ll,v)},
gaw0(){var w,v=this
if(!J.cj(v.d)){w=v.r
w=w<0||w>=J.aa(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
azt(){var w,v,u=this.gaw0(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
ckj(d){this.l(new C.dl3(this,d))
this.azt()},
OU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nQ(B.n.v(1000*Date.now()),"Untitled page","",new A.W(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aUJ(r.c,r.d,s),$async$OU)
case 3:w=4
return A.b(t.ll(),$async$OU)
case 4:if(t.c==null||J.cj(t.d)){w=1
break}q=J.nL(t.d,new C.dkF(s))
p=q>=0?q:J.aa(t.d)-1
t.l(new C.dkG(t,p))
t.azt()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Cq(p+1,B.cn,B.la),$async$OU)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$OU,v)},
C2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$C2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.d()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.d()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaw0()
s=s==null?null:s.a
if(s==null)s=B.n.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aUJ(o.c,o.d,new C.nQ(s,r,q,new A.W(p,0,!1))),$async$C2)
case 3:w=4
return A.b(t.ll(),$async$C2)
case 4:if(t.c==null){w=1
break}t.l(new C.dl7(t))
case 1:return A.h(u,v)}})
return A.i($async$C2,v)},
PC(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$PC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaw0()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dkO(r),s,null,!0,!0,x.y),$async$PC)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bGV(s.c,s.d,r.a),$async$PC)
case 4:t.l(new C.dkP(t))
w=5
return A.b(t.ll(),$async$PC)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.VE(B.n.D(t.r+1,0,J.aa(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$PC,v)},
zD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.C2(),$async$zD)
case 5:case 4:if(t.c==null){w=1
break}w=J.cM(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.SR(s,r.r,o,p,q),$async$zD)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a8(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hTS(s,r.x,r.r),$async$zD)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Me(s.c,s.d),$async$zD)
case 10:l=e
for(s=n.d,r=J.cK(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.K(l,new C.nQ(""+(m+k),q,B.a.i(j.b),new A.W(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BQ(r.c,r.d,l),$async$zD)
case 11:w=12
return A.b(t.ll(),$async$zD)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zD,v)},
a2V(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a2V=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.C2(),$async$a2V)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzB(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.ds(D.AE,new C.dl4(t),new C.dl5())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.nb("Our Family",o,"",""))
for(o=J.aO(t.d);o.B();){n=o.gP(o)
p.push(new H.nb(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.huV(o,new H.t8(s,r,"",p,new H.vv(q.d,null,null,null,null,"","","")),null),$async$a2V)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a2V,v)},
Pj(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Pj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.C2(),$async$Pj)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bV(D.aiP,null,new C.dkK(t),s,!0,!0,!0,I.abF,!1,!1,x.N),$async$Pj)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cSz(r)
t.l(new C.dkL(t,q))
s=t.a
w=7
return A.b(C.Tv(s.c,s.d,q),$async$Pj)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Pj,v)},
YX(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(D.aiP,null,new C.dkQ(t),r,!0,!0,!0,I.abF,!1,!1,x.e),$async$YX)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.dkR(t,s))
r=t.a
w=4
return A.b(C.Tv(r.c,r.d,s),$async$YX)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.Cq(0,B.ed,B.nk)
case 1:return A.h(u,v)}})
return A.i($async$YX,v)},
bXv(d){var w=d.bV(),v=B.a.aY(B.n.v(w.gci()),2,"0"),u=B.a.aY(B.n.v(w.gcB()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gzB(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
C(d){var w,v,u,t,s,r=this,q=null,p=r.c4z()
if(r.e)w=D.ahu
else if(J.cj(r.d)){w=r.y
v=r.gzB(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fKx,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.C(X.app,new C.a_O(w,v,0,q),q),q),B.bx,t,B.aj,A.c(u,q,q,q,q,q,q,A.l(q,q,D.l5.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.q(q,D.ftC,B.f,q,q,new A.p(q,q,q,A.n(18),A.a([new A.ac(0,B.H,B.e0.j(0.45),B.J,18)],x.V),E.xK,B.m),q,q,q,q,B.PC,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcP5(),q,q,q,q,q,q,!1,B.a4))
w.push(B.S)
w.push(A.hy(D.bZt,D.hmr,r.gaR3(),q))
B.d.u(u,w)}w=A.at(A.cc(A.w(u,B.l,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.ew,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.aa(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.l5.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.e8:B.yJ
u=A.w(A.a([new A.C(D.bIw,w,q),A.E(A.Kg(v,new C.dlg(r),J.aa(r.d)+1,q,r.gcki(),u,B.aK),1),r.bJE()],x.p),B.l,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c6(q,D.a_X,new A.am(B.a0,q,B.b5,B.t,A.a([D.aTa,A.bn(!0,A.w(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c4z(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cM(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Lf(B.eh,"AI",h.gbHr(),!0))
if(h.a.f)f.push(new C.Lf(B.m8,"Cover",h.gbSn(),!1))
if(h.a.f)f.push(new C.Lf(B.xC,"Header",h.gbNg(),!1))
if(J.cM(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Lf(B.vG,"Print",h.gctS(),!1))
if(h.a.f&&J.cM(h.d)&&h.r>=0){v=h.w
u=v?B.h1:B.jm
t=v?"Save":"Edit"
f.push(new C.Lf(u,t,v?h.gcAh():new C.dl0(h),!1))}if(h.a.f)f.push(new C.Lf(B.ig,"Add page",h.gaR3(),!1))
v=C.hPf(h.y.Q)
u=h.gzB(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.aa(h.d)
r=J.aa(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dTr
else{k=new A.aQ(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(E.kI.j(0.5),1,B.r,-1)
j=A.q(g,A.V(l.a,D.l5,g,g,g,17),B.f,g,g,new A.p(g,g,new A.bE(i,i,i,i),new A.bc(k,k,k,k),g,new A.a6(B.a5,B.a9,B.w,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.l5.j(0.85)
p.push(new A.bu(1,B.b8,A.aA(B.bZ,A.w(A.a([k,B.bs,A.c(l.b,g,1,g,g,g,g,new A.G(!0,j,g,g,g,g,9.5,B.C,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.ant(v,u,t+" \xb7 "+s+" "+r,new C.dl1(h),A.A(p,B.l,g,B.e,B.i,0,g,g),g)},
AV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.C2(),$async$AV)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aO(t.d);r.B();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=H.a4A(B.d.aL(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dkH(t,p),s,null,!0,!0,x.N),$async$AV)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zD(),$async$AV)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.EX(),$async$AV)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.GA("Swahili (Kiswahili)",!0),$async$AV)
case 18:w=16
break
case 17:w=19
return A.b(t.cLv(o==="sw"?"Swahili (Kiswahili)":"English"),$async$AV)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$AV,v)},
a_X(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.K(E.kI.j(0.3),B.r,1),r=x.p
return new A.C(B.cB,A.aM(!1,v,!0,A.q(w,A.A(A.a([A.q(w,A.V(e,B.c,w,w,w,21),B.f,w,w,new A.p(w,w,w,w,w,E.xK,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.w(A.a([A.c(f,w,w,w,w,w,w,A3.LR,w,w,w),A.c(g,w,w,w,w,w,w,B.FH,w,w,w)],r),B.B,w,B.e,B.i,0,B.p),1)],r),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.p(u,w,s,t,w,w,B.m),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dl2(d,h),w,w,w,w,w,w,w),w)},
EX(){return this.bWZ()},
bWZ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$EX=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dkU(r),a7,null,!0,!0,x.ei),$async$EX)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eO("Working on it\u2026",$.ay())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.dkV(o),a7,null,!0,!0,x.H).fD(new C.dkW(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.bZ(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ak()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.AE[a1]
J.bZ(j,i.a)}w=8
return A.b(C.ajp(a0,a7,new C.dkX(o),d,l,e,j),$async$EX)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ad(a8)
n=A.v(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a8(l,!0).e6()
l=o
l.sir($.ay())
J.aVe(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.T(A.b2(null,null,null,null,null,B.t,null,A.c(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gco(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.aa(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bi6(m.b.h(0,a4).b,a7,new A.W(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BQ(j.c,j.d,l),$async$EX)
case 11:w=12
return A.b(r.ll(),$async$EX)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.AE[a1].a)
a5=l.cQ2(j,12,a7)
l=r.a
w=15
return A.b(C.Tv(l.c,l.d,a5),$async$EX)
case 15:if(r.c!=null)r.l(new C.dkY(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.Cq(0,B.ed,B.nk)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.cDJ("Undo",new C.dkZ(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.em,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EX,v)},
GA(d,e){return this.cLw(d,e)},
cLv(d){return this.GA(d,!1)},
cLw(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$GA=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eO("Starting\u2026",$.ay())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.dl9(a0),k,null,!0,!0,x.H).fD(new C.dla(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.bZ(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a4R(m,new C.dlb(a0)),$async$GA)
case 10:w=8
break
case 9:w=11
return A.b(C.bIK(new C.dlc(a0),m,a2),$async$GA)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ad(a1)
q=A.v(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a8(o,!0).e6()
o=a0
o.sir($.ay())
J.aVe(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.aa(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bi6(J.t(p,g).b,j.a,new A.W(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BQ(k.c,k.d,o),$async$GA)
case 12:w=13
return A.b(r.ll(),$async$GA)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.Y(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.cDJ("Undo",new C.dld(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$GA,v)},
bJE(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dkI(v):u
r=A.aJ(u,u,u,u,A.V(D.bUY,s?D.l5:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cM(v.d)&&!v.w&&v.r>=0)s=A.hy(A.V(B.xo,B.Hr,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.Hr,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbRY(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.l5.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.aa(v.d)?new C.dkJ(v):u
return A.bn(!0,new A.C(D.bIl,A.A(A.a([r,s,A.aJ(u,u,u,u,A.V(B.eL,t<J.aa(v.d)?D.l5:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a0E.prototype={
R(){return new C.bjs(new A.au(B.ay,$.ay()))}}
C.bjs.prototype={
ga44(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.ay()
w.W$=0
this.a3()},
gbVy(){switch(this.ga44()){case"cover":var w=D.dfX
break
case"book":w=D.daN
break
default:w=D.dJP
break}return w},
C(d){var w,v,u,t,s,r,q=this,p=null,o=A.n(26),n=E.kI.j(0.5),m=x.p,l=A.A(A.a([D.dTs,B.ar,D.bO1,A.aJ(p,p,p,p,B.lJ,p,p,p,new C.dn4(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jl(p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dn5(q),q.ga44()==="page",p,p,p,p))
if(q.a.d)k.push(A.jl(p,p,p,D.hgU,p,new C.dn6(q),q.ga44()==="book",p,p,p,p))
k.push(A.jl(p,p,p,D.h3r,p,new C.dn7(q),q.ga44()==="cover",p,p,p,p))
k=A.c0(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.M,!1,p,!0,B.t,p,A.aP(),q.d,p,p,p,p,p,2,A.bC(p,new A.b6(4,A.n(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kC,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbVy(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,Ae.LO,p,p,p)
w.push(A.mG(p,B.c.j(0.08),p,r,B.hH,new C.dn8(q,s),p,p,p,p))}return A.eB(p,E.CK,A.cc(A.w(A.a([l,B.S,D.hkg,B.aj,k,B.af,j,B.N,A.c0(B.bI,w,B.br,p,6,6),B.aB,A.df(D.bZq,p,D.hl3,new C.dn9(q,d),A.bp(B.b0,p,p,p,p,B.pp,p,p,new A.ba(A.n(16),B.a1),p,p,p)),B.at,D.hf3],m),B.B,p,B.e,B.P,0,B.p),B.t,p,B.y,p,p,B.f7,p,p,B.ah),p,p,p,B.PA,p,B.db,p,new A.ba(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a0C.prototype={
R(){return new C.aDn(A.a([],x.gA))},
geb(){return this.c}}
C.ah9.prototype={}
C.aDn.prototype={
Z(){this.a4()
this.ll()},
ll(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$ll=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.SV(p.c,p.d),$async$ll)
case 3:o=e
n=A.a([],x.gA)
p=J.aO(o)
case 4:if(!p.B()){w=5
break}s=p.gP(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bHa(r.c,q),$async$ll)
case 6:j=e
i=J
w=7
return A.b(C.Me(t.a.c,q),$async$ll)
case 7:m.push(new l.ah9(k,j,i.aa(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.dlx(t,n))
case 1:return A.h(u,v)}})
return A.i($async$ll,v)},
bdm(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
RW(d,e){return this.clX(0,e)},
clX(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$RW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a8(s,!1).c9(A.e4(new C.dlw(u,e),!0,null,x.y)),$async$RW)
case 2:t=g
w=3
return A.b(u.ll(),$async$RW)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.T(D.aXb)
return A.h(null,v)}})
return A.i($async$RW,v)},
GC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$GC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.T(D.aX6)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aiK(s.c,s.d),$async$GC)
case 5:q=e
w=6
return A.b(t.ll(),$async$GC)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.RW(0,B.d.fj(t.d,new C.dlB(q))),$async$GC)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.SR(p,s.f,r,n,o),$async$GC)
case 10:m=e
w=11
return A.b(t.ll(),$async$GC)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.T(D.aXb)
case 1:return A.h(u,v)}})
return A.i($async$GC,v)},
Rj(d,e){return this.cxW(0,e)},
cxW(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dlA(t,e),s,null,!0,!0,x.y),$async$Rj)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a51(s.c,s.d,e.a),$async$Rj)
case 4:w=5
return A.b(t.ll(),$async$Rj)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Rj,v)},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bJH(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.K(E.kI.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fK(0.7142857142857143,A.q(n,A.w(A.a([D.dTt,B.af,D.eHD,B.at,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.l5.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.bb,B.i,0,B.p),B.f,n,n,new A.p(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcP1(),n,n,n,n,n,n,!1,B.a4))}w=A.n(22)
v=A.K(E.kI.j(0.85),B.r,1.6)
s=A.aA(n,A.q(n,D.c6I,B.f,n,n,new A.p(B.v.j(0.3),n,A.K(E.kI.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dlC(d),n,n,n,n,n,n,!1,B.a4)
r=A.n(14)
q=B.v.j(0.3)
p=A.K(E.kI.j(0.5),B.r,1)
w=A.q(n,A.A(A.a([s,B.bc,D.bOq,A.q(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fJv,n,n,n),B.f,n,n,new A.p(q,n,p,r,n,n,B.m),n,n,n,n,B.ho,n,n,n)],l),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.p(n,n,v,w,n,D.ccM,B.m),n,n,n,Aa.Pn,D.bGe,n,n,n)
if(o.e)k=D.ahu
else k=k.length===0?D.bgf:A.cg(new C.dlD(k))
return A.c6(n,D.a_X,new A.am(B.a0,n,B.b5,B.t,A.a([D.aTa,A.bn(!0,A.w(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bJH(d){var w,v,u=this,t=null,s=u.bdm(d),r=d.c,q=x.p,p=A.a([A.bT(0,new A.d7(B.dE,B.z,B.f,new A.a5(300,420,new C.a_O(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aA(t,A.q(t,D.c5X,B.f,t,t,new A.p(B.v.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dlu(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fJ7,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.w(A.a([new A.fK(0.7142857142857143,new A.am(B.a0,t,B.ac,B.t,p,t),t),B.N,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.l5.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dlv(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.Lf.prototype={}
C.a_O.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.ds(D.AE,new C.cTd(m),new C.cTe()),j=m.c,i=D.EL.h(0,j.e),h=A.b_(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mM:B.bb
v=new C.cTf(h)
i=A.a([new A.ac(0,B.H,B.v.j(0.6),D.eEl,28)],x.V)
u=x.p
t=A.a([A.bT(0,A.b4(l,l,l,new C.bgC(j.x,h,l),B.aA),0,0,0),A.ao(0,A.q(l,l,B.f,l,l,new A.p(l,l,l,l,l,new A.a6(B.a5,B.a9,B.w,A.a([B.v.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aQ(3,3)
t.push(new A.cS(8,40+s*46,l,l,l,l,A.q(l,l,B.f,l,l,new A.p(h.j(0.7),l,l,new A.bc(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.apq,8,0.85,2.2),v.$4(D.bLc,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.apq,8,0.85,2.4))
else if(r==="corners")t.push(A.bT(0,new A.C(D.bL8,A.b4(l,l,l,new C.bgt(h,l),B.aA),l),0,0,0))
r=A.V(D.aEr[B.n.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.c(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aBE,l,l),B.K,l,l)
p=A.q(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.c(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cQ,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aN,A.c(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.C,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bT(0,new A.C(D.bLF,A.w(o,B.l,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aKy(l),D.fyx),l,l,l,46,0,l))
return A.q(l,A.bv(D.ag2,new A.am(B.a0,l,B.ac,B.t,t,l),B.ap),B.f,l,l,new A.p(l,l,l,D.ag2,i,new A.a6(B.aw,B.aD,B.w,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bgC.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e6()
g.cW(11)
switch(this.b){case"plain":return
case"linen":$.T()
w=A.L()
w.r=B.v.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.m(0,t),new A.m(u,t),w)
$.T()
s=A.L()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.m(r,0),new A.m(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.T()
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.O(new A.m(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.T()
l=A.a([],n)
j=new A.aI(m.r,B.ak,null,null,l)
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
m=new A.bz()
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
for(v=e.a,u=e.b,p=0;p<260;++p)d.O(new A.m(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.T()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.O(new A.m(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bgt.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.T(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.ad
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.fll,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aI(k,B.ak,null,null,s)
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
d.O(new A.m(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.A(0,this.b)}}
C.ve.prototype={}
C.a09.prototype={
R(){return new C.bgA()}}
C.bgA.prototype={
goM(){var w=this.d
return w===$?this.d=this.a.c:w},
gzB(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.bb(w.b,B.b9,B.aP),$.ay())}return v},
gaFb(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.bb(w.c,B.b9,B.aP),$.ay())}return v},
gaux(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.bb(w.y,B.b9,B.aP),$.ay())}return v},
t(){var w=this,v=w.gzB(0),u=v.V$=$.ay()
v.W$=0
v=w.gaFb()
v.V$=u
v.W$=0
v=w.gaux()
v.V$=u
v.W$=0
w.a3()},
ava(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jl(s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.dcg(this,f,u),e===u,s,s,s,s))}return A.c0(B.bI,r,B.br,s,6,8)},
aAZ(d){var w=null,v=B.c.j(0.07)
return A.bC(w,new A.b6(4,A.n(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.mg,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
C(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goM(),a0=f.gzB(0),a1=a0.a.a,a2=f.gaFb(),a3=a2.a.a,a4=f.gaux(),a5=d.bi4(a4.a.a,a3,a1)
a1=x.w
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a5(190,260,new A.d7(B.dE,B.z,B.f,new A.a5(270,370,new C.a_O(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.M,!1,e,!0,B.t,e,A.aP(),a0,e,e,e,e,e,2,f.aAZ("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dcF(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.M,!1,e,!0,B.t,e,A.aP(),a2,e,e,e,e,e,2,f.aAZ("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dcG(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.AE[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.q(e,e,B.f,e,e,new A.p(e,e,new A.bE(o,o,o,o),e,e,new A.a6(B.aw,B.aD,B.w,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aF
v.push(A.aA(e,A.w(A.a([p,B.cR,A.c(t.b,e,e,e,e,e,e,new A.G(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dcH(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.c0(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b0.j(0.35):B.c.j(0.07)
m=new A.aQ(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.eJ:B.L,2,B.r,-1)
q.push(A.aA(e,A.q(e,A.V(D.aEr[n],B.c,e,e,e,24),B.f,e,e,new A.p(p,e,new A.bE(o,o,o,o),new A.bc(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dcI(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.c0(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.M,!1,e,!0,B.t,e,A.aP(),a4,e,e,e,e,e,2,f.aAZ("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dcJ(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a7,e,B.ao,e,e,e,e)
p=A.c("LETTERING COLOUR",e,e,e,e,e,e,N.wp,e,e,e)
m=A.a([],w)
for(l=D.EL.gdW(D.EL),l=l.gae(l);l.B();){k=l.gP(l)
j=A.b_(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eJ:B.aT
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.q(e,e,B.f,e,e,new A.p(j,e,new A.bE(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aF
m.push(A.aA(e,A.w(A.a([j,B.bs,A.c(i,e,e,e,e,e,e,new A.G(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dcK(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.c0(B.bI,m,B.br,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,N.wp,e,e,e)
k=f.goM()
return new A.C(new A.R(0,0,0,a3.f.d),A.bn(!0,new A.cQ(new A.aY(0,1/0,0,a1.a.b*0.92),A.co(A.a([D.heu,B.af,d,B.aN,a0,B.S,a2,B.aB,D.hkP,B.N,v,B.aB,D.heD,B.N,q,B.aB,a4,B.aB,p,B.N,m,B.aB,l,A.li(e,9,""+B.h.S(f.goM().f),36,18,new C.dcL(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,N.wp,e,e,e),B.aj,f.ava(D.a8k,f.goM().r,new C.dcM(f),D.dNa),B.af,A.c("BORDER",e,e,e,e,e,e,N.wp,e,e,e),B.aj,f.ava(D.a7F,f.goM().w,new C.dcN(f),D.dNg),B.af,A.c("COVER MATERIAL",e,e,e,e,e,e,N.wp,e,e,e),B.aj,f.ava(D.a7B,f.goM().x,new C.dcP(f),D.dOW),B.aj,A.je(e,B.b0,e,B.ag,e,new C.dcQ(f),e,e,e,D.h8D,f.goM().z),B.bx,A.bH(D.hd9,e,new C.dcR(f,a6),A.bp(B.b0,e,e,e,e,B.pp,e,e,new A.ba(A.n(16),B.a1),e,e,e))],w),e,e,S.aoS,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aKy.prototype={
a5(d,e){var w,v,u,t=new A.aI($.T().r,B.ak,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bz())
u=A.L()
u.san(D.cdt.az(0,new A.a4(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.bm0.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.T()
w=A.L()
w.san(D.ccs.az(0,new A.a4(0,0,a2,a3)))
a4.aE(new A.a4(0,0,a2,a3),w)
v=B.h.cI(a1/112)
u=new A.e6()
u.cW(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.dfW[u.aw(9)]
j=u.aw(14)
J.bs(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a4(n,j,n+m,j+l)
h=A.bx(i,B.hG)
g=new A.ar(B.U,B.R,B.X,B.Y,B.W)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.v,0.45)
e.toString
g.san(new A.a6(B.a5,B.a9,B.w,A.a([f,k,e],w),d,d).az(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.U,B.R,B.X,B.Y,B.W)
e.r=E.kI.j(0.55).gp(0)
a4.aE(new A.a4(g,j,h,j+2),e)
e=new A.ar(B.U,B.R,B.X,B.Y,B.W)
e.r=E.kI.j(0.4).gp(0)
a4.aE(new A.a4(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.san(D.cbK.az(0,new A.a4(0,r,a2,q)))
a4.aE(new A.a4(0,r,a2,q),p)
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=B.v.j(0.5).gp(0)
p.y=B.ld
a4.aE(new A.a4(0,q,a2,q+14),p)}t=A.L()
t.r=D.bk3.j(0.72).gp(0)
a4.aE(new A.a4(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bU(B.z,0.5,B.w,d,0,A.a([D.bsL.j(0.22),B.L],w),d,d).az(0,A.bY(new A.m(t,a1),a0)))
a4.O(new A.m(t,a1),a0,a3)},
aD(d){return!1}}
C.beI.prototype={
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aH(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cS(14,w*2,v*2.2,v*2,o,o,new A.bP(new A.p(A.ap(D.l5,D.by7,w/4),o,new A.bE(B.a1,new A.ax(B.v.j(0.12),1,B.r,-1),B.a1,B.a1),B.N0,o,o,B.m),B.bm,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.H,B.v.j(0.35),B.aOH,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aQ(2,2)
t.push(A.q(o,o,B.f,o,o,new A.p(E.kI.j(0.6),o,o,new A.bc(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.q(o,A.w(t,B.l,o,B.rF,B.i,0,B.p),B.f,o,o,new A.p(o,o,o,D.b8f,u,D.cdr,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.H,B.v.j(0.4),B.dv,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aKy(o),D.fys),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aYD(p.y,r,L.ji,o))
r=n.d
q=p.x
if(p.f)n=A.w(A.a([A.aN(o,B.M,!1,o,!0,B.t,o,A.aP(),p.r,o,o,o,o,o,2,A.bC(o,B.eX,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.ji.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fYm,!0,B.a7,o,B.ao,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.ji.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aN(o,B.M,!1,o,!0,B.t,o,A.aP(),p.w,o,o,o,o,o,2,A.bC(o,B.eX,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.ji.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.am,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fOB,!0,B.a7,B.Bw,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.fYe,o,o,o),B.at,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.ji.j(0.5),o,o,o,o,o,o,o,o,11,B.cQ,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.A(A.a([A.E(A.q(o,o,B.f,D.Hb.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fD,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.Hb.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.q(o,o,B.f,D.Hb.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.i,0,o,o),B.aB],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.ji.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.GH(A.cW(A.a([A.cW(o,o,o,o,o,o,o,o,o,D.fRW,B.a.av(k,0,1)),A.cW(o,o,o,o,o,o,o,o,o,o,B.a.aV(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.ji.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cc(A.w(n,B.B,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.C(B.hz,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.ji.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.q(o,A.bv(B.N0,new A.am(B.a0,o,B.ac,B.t,A.a([t,new A.C(D.bKG,A.w(s,B.al,o,B.e,B.i,0,B.p),o),A.ao(0,new A.bP(new A.p(o,o,o,o,o,new A.a6(B.a5,B.a9,B.w,A.a([B.v.j(0.16),B.L],x.O),o,o),B.m),B.bm,o,o),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.p(o,o,o,B.N0,v,D.cdZ,B.m),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.am(B.a0,o,B.ac,B.t,l,o)}}
C.anu.prototype={
R(){return new C.anv(new A.eO(0,$.ay()),new C.bWn(),new C.anN(),D.i_7,null,null)},
gd7(){return this.d}}
C.a2T.prototype={
a9(){return"_Step."+this.b}}
C.anv.prototype={
gDe(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bH6(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghl(d){var w,v=this,u=v.e
if(u===$){w=C.ND(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gUW(){var w=this.ghl(0)
return w.gzU()==null?"Babu":B.a.i(w.gzU().b)},
Z(){var w,v=this
v.a4()
w=v.ghl(0).gzU()
w=w==null?null:w.c
v.r.b=w===D.p_
w=v.qi(new C.bUJ(v))
w.fU(0)
v.x!==$&&A.aT()
v.x=w
v.a40("Come closer, my children. I am "+v.gUW()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.d()
v.t()
v=w.y
if(v!=null)v.a2(0)
v=w.z
if(v!=null)v.a2(0)
w.w.t()
v=w.f
v.V$=$.ay()
v.W$=0
w.byX()},
a40(d){var w=this,v=w.y
if(v!=null)v.a2(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.d5(E.a1G,new C.bUD(w))},
bvi(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a2(0)
v.l(new C.bUM(v))},
afA(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bva(){return this.bcU()},
bcU(){var w=this,v=w.gDe()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bUE(w))
w.a40(u)
v=w.z
if(v!=null)v.a2(0)
w.z=A.cC(B.o0,new C.bUF(w))},
cQ9(){var w=this
w.l(new C.bUI(w))
w.a40(w.gDe()[w.as].a)},
M2(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.af8)return
w=p.gDe()
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
t.r=s.a+1.5}q=new A.e6()
q.cW(v*7+d)
p.l(new C.bUH(p,d,u,q))
p.a40(u?D.dxb[q.aw(4)]+" "+w[p.as].d:D.dtt[q.aw(3)]+" "+w[p.as].d)},
kR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gDe()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bJq(t.at,t.ay,p)
t.l(new C.bUK(t,s))
t.a40(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Ca(t.a.d,s),$async$kR)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.Cb(r.d,r.c.a,"fire",t.at*10),$async$kR)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bUL())
w=1
break
case 4:++t.as
t.bcU()
case 1:return A.h(u,v)}})
return A.i($async$kR,v)},
C(d){var w=this,v=null,u=w.f,t=x.p
return A.c6(v,D.ZY,new A.am(B.a0,v,B.ac,B.t,A.a([A.bT(0,new A.e9(A.b4(v,v,v,new C.aYI(u,w.r,w.w,u),B.aA),v),0,0,0),A.bn(!0,A.w(A.a([w.cfJ(0),B.aX,w.bUJ()],t),B.l,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cfJ(d){var w,v,u,t=this,s=null,r=A.aJ(s,s,s,s,B.Rv,s,s,s,new C.bUG(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gDe().length;++w){v=t.as
if(w<v||t.Q===D.b4w)v=B.d_
else v=w===v?B.c:B.aT
u=new A.aQ(4,4)
p.push(A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,D.bFZ,s,s,s,22))}p=A.E(A.w(A.a([D.h5k,A.A(p,B.l,s,B.e,B.i,0,s,s)],q),B.B,s,B.e,B.i,0,B.p),1)
v=A.n(14)
u=A.K(B.fM,B.r,1)
return new A.C(D.bLS,A.A(A.a([r,p,A.q(s,A.c("\ud83d\udd25 "+B.h.S(t.cy*100)+"%",s,s,s,s,s,s,B.iX,s,s,s),B.f,s,s,new A.p(B.ba,s,u,v,s,s,B.m),s,s,s,s,B.ho,s,s,s)],q),B.l,s,B.e,B.i,0,s,s),s)},
bUJ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghl(0).gzU()
if(h==null)w=1
else w=h.c===D.p_?0:1
v=j.dx
u=j.db
t=D.r_.j(0.96)
s=A.n(22)
r=A.K(B.d_,B.r,3)
q=A.b4(i,i,i,new C.brE(w,i),B.aA)
p=A.c(j.Q===D.af8?j.gUW()+" asks":"Elder "+j.gUW(),i,i,i,i,i,i,D.aYs,i,i,i)
o=j.db
o=B.a.av(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.bZ,A.A(A.a([new A.a5(62,62,q,i),B.ar,A.E(A.w(A.a([p,B.bs,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aYF,i,i,i)],n),B.B,i,B.e,B.i,0,B.p),1)],n),B.B,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbvh(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.abC("Sit down by the fire",j.gbv9()),i,i,i)
break
case 1:v=A.at(j.abC("Ask me, Elder",j.gcQ8()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gDe()[j.as].b,m<u.length;++m){q=new A.aQ(14,14)
l=new A.ax(D.lX,2.5,B.r,-1)
v.push(A.aA(i,A.q(i,A.c(u[m],i,i,i,i,i,i,D.aYB,B.K,i,i),B.f,i,D.agI,new A.p(D.aml,i,new A.bE(l,l,l,l),new A.bc(q,q,q,q),i,i,B.m),i,i,i,i,B.xb,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bUA(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.c0(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kn:Am.ass
u=A.V(u,v?B.et:D.lX,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.et:D.lX,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gDe().length?"Finish":"Next story"
v=A.A(A.a([u,B.aa,q,j.abC(v,j.gqC(j))],n),B.l,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gDe().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aYT,i,i,i)],n)
u=j.cx
if(u>0){u=C.aSU(u)
q=C.aSU(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.adA,i,i,i))}v.push(B.N)
v.push(j.abC("Back to the games",new C.bUB(j)))
v=A.w(v,B.l,i,B.e,B.i,0,B.p)
break
default:v=i}return A.q(i,A.w(A.a([o,B.S,v],n),B.B,i,B.e,B.P,0,B.p),B.f,i,i,new A.p(t,i,r,s,D.aG0,i,B.m),i,i,i,B.zr,B.bg,i,i,i)},
abC(d,e){var w=null,v=A.n(16),u=A.K(B.d_,B.r,2)
return A.aA(w,A.q(w,A.c(d,w,w,w,w,w,w,A3.LR,w,w,w),B.f,w,w,new A.p(D.lX,w,u,v,w,w,B.m),w,w,w,w,D.bJA,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.brE.prototype={
a5(d,e){O.huG(d,e.eq(B.J),e.gdm()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aDl.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bWn.prototype={}
C.ty.prototype={}
C.brF.prototype={}
C.anN.prototype={
Nr(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.isc(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aYI.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.CX(l.d.Nr(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bs(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bW(0,u)
l.cFr(d,j)
l.bTh(d,j)
l.cNV(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bs(t.save())
t.translate(225,580)
d.nT(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.T()
q=A.L()
p=x.O
o=x.n
q.san(A.wB(B.J,r,A.a([D.bwN.j(0.55*s),F.OD.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.w,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bWf(l,d,j,i)),new A.y(540,new C.bWg(l,d,j,i)),new A.y(546,new C.bWh(l,d,j,i)),new A.y(574,new C.bWi(l,d,j,i)),new A.y(612,new C.bWj(l,d,j,i)),new A.y(650,new C.bWk(l,d,j,i)),new A.y(656,new C.bWl(l,d,j,i))],x.E)
B.d.b_(n,new C.bWm())
for(m=0;m<7;++m)n[m].b.$0()
l.bK_(d,j,i)
l.bWX(d,j)
t.restore()
$.T()
t=A.L()
t.san(A.wB(new A.m(w/2,v*0.6),e.gapV()*0.75,A.a([B.L,D.bjX],p),A.a([0.55,1],o),B.w,k,k,0))
d.aE(new A.a4(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cFr(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e6()
h.cW(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.T()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=t.gp(0)
d.O(new A.m(v*450,20+u*300),0.8+s*1.1,r)}q=B.h.F(e,17)/1.2
if(q<1){p=new A.m(60+q*220,70+q*90)
d.ah(p,p.aI(0,D.eDS),C.iU(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.h.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.T()
k=A.a([],t)
l=new A.aI(l.r,B.ak,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ac()
j=r-3
r=new A.cm(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.aj(i)
l.ac()
s=new A.cm(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.aj(r)
l.ac()
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.b=B.ad
s.c=1.6
s.r=D.bmI.gp(0)
s.d=B.bG
s.e=B.dQ
d.af(l,s)}},
bTh(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aCX[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.c_(new A.m(p,m),n*0.74,q*0.5)
k=Ad.zd.j(v)
$.T()
j=new A.ar(B.U,B.R,B.X,B.Y,B.W)
j.r=k.gp(0)
d.c2(l,j)
q=A.c_(new A.m(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=B.wO.j(u).gp(0)
d.c2(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.h.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.r=D.ajD.j(0.16*(1-h)).gp(0)
d.O(new A.m(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cNV(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bGs(d,D.eDO,0.9,e,D.hTO,!1,!1,D.b4t,1,!1)
w=$.T().r
v=x.v
u=new A.aI(w,B.ak,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bz())
t=A.L()
t.r=D.alB.gp(0)
d.af(u,t)
C.bGs(d,D.eDQ,0.95,e,D.hTC,!1,!1,D.b4u,1,!0)
t=new A.aI(w,B.ak,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.cm(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.cm(431,553,421,548))
t.E(new A.bz())
u=A.L()
u.r=F.GR.gp(0)
d.af(t,u)
u=A.c_(D.eDP,8,28)
t=A.L()
t.r=D.bze.gp(0)
d.c2(u,t)
C.bGs(d,new A.m(-30+B.h.F(e/26,1)*510,492),0.82,e,D.hTQ,!0,!1,D.YL,1,!1)
t=B.h.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c2(A.c_(new A.m(s+q*16,r-6),16,11),C.iU(D.als,1.8))
u=q<0
C.bGs(d,new A.m(s-q*6,r),0.62,e,D.hTT,!1,u,D.YL,2.2,!1)
C.bGs(d,new A.m(s-q*32,r+4),0.58,e+1,D.hTK,!1,u,D.YL,2.2,!1)
this.bZH(d,D.eDt,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.n.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.c_(new A.m(o,n),8,11)
k=p===1
j=k?D.alo:D.am1
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.r=j.gp(0)
d.c2(l,i)
l=k?D.alo:D.am1
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.r=l.gp(0)
d.O(new A.m(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.b=B.ad
k.c=1
k.r=B.as.gp(0)
k.d=B.bG
k.e=B.dQ
d.ah(new A.m(o+7.5,n+(-2+m)),new A.m(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.b=B.ad
k.c=1
k.r=B.as.gp(0)
k.d=B.bG
k.e=B.dQ
d.ah(new A.m(o,n+4),new A.m(o,n+8),k)}h=e<f.f
u=A.c_(D.aax,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.ak1.gp(0)
d.c2(u,t)
u=A.c_(D.aax.a6(0,new A.m(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.boX.gp(0)
d.c2(u,t)
t=new A.aI(w,B.ak,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bz())
u=A.L()
u.r=D.bp9.gp(0)
d.af(t,u)
u=D.aax.a6(0,new A.m(-17,h?-9:-2))
t=A.L()
t.r=B.iu.gp(0)
d.O(u,1.1,t)
v=new A.aI(w,B.ak,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.cm(180,588+w*(h?6:0),178,595))
d.af(v,C.iU(D.ak1,3.5))},
bZH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a6(0,new A.m(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.b=B.ad
m.c=2
m.r=D.a_b.gp(0)
m.d=B.bG
m.e=B.dQ
d.ah(new A.m(u+o,s),new A.m(u+(o+n*1.5),q),m)}w=A.c_(k,17,32)
v=$.T()
r=A.L()
r.r=D.GP.gp(0)
d.c2(w,r)
r=A.c_(k.a6(0,D.eCU),7,26)
w=A.ap(D.GP,B.v,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c2(r,q)
v=new A.aI(v.r,B.ak,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bz())
s=A.L()
s.r=D.GP.gp(0)
d.af(v,s)
s=A.c_(k.a6(0,new A.m(24,-7+l)),9,12)
v=A.L()
v.r=D.GP.gp(0)
d.c2(s,v)
v=-11+l
d.ah(k.a6(0,new A.m(22,v)),k.a6(0,new A.m(21,-17+l)),C.iU(D.a_b,1.6))
d.ah(k.a6(0,new A.m(26,v)),k.a6(0,new A.m(28,-16+l)),C.iU(D.a_b,1.6))
v=k.a6(0,new A.m(26,-8+l))
s=A.L()
s.r=B.v.gp(0)
d.O(v,0.9,s)
d.ah(k.a6(0,new A.m(26,-3+l)),k.a6(0,new A.m(26,1+l)),C.iU(D.bs_,1.4))
d.ah(k.a6(0,D.eFQ),k.a6(0,new A.m(-19,-7+Math.sin(f*7)*2)),C.iU(D.GP,2.4))},
bWV(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.c_(new A.m(225+u*36,574+(t*13+6)),8,11)
$.T()
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=D.bxR.gp(0)
a6.c2(u,t)}}u=A.c_(D.aaz.a6(0,B.cy),17,52)
$.T()
t=A.L()
t.r=D.bjv.gp(0)
a6.c2(u,t)
t=A.c_(D.aaz.a6(0,B.cy),12,44)
u=D.bn8.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c2(t,s)
for(r=0;r<3;++r){v=D.dsU[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.b=B.ad
o.c=7
o.r=D.H2.gp(0)
o.d=B.bG
o.e=B.dQ
a6.ah(new A.m(u+t*24,579+s*4),new A.m(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Co.j(0.6)
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.b=B.ad
n.c=2
n.r=t.gp(0)
n.d=B.bG
n.e=B.dQ
a6.ah(new A.m(u+o*24,579+(p*4-2)),new A.m(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.fhh,D.fhS,D.fj1,D.fjm,D.fj_]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bv4,D.brk,D.bxg][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.T()
f=A.a([],q)
a2=new A.aI(g.r,B.ak,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ac()
g=a0+d*0.6
a3=new A.i6(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.aj(a4)
a2.ac()
g=new A.i6(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.aj(a3)
a2.ac()
g=new A.bz()
f.push(g)
f=a2.f
if(f!=null)g.aj(f)
a2.ac()
g=new A.ar(B.U,B.R,B.X,B.Y,B.W)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.h.F(a7*(0.35+B.n.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.n.F(w,3)
p=G.am_.j((1-a5)*0.9)
$.T()
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.r=p.gp(0)
a6.O(new A.m(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.h.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ajD.j(0.1*(1-a5))
$.T()
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=q.gp(0)
a6.O(new A.m(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bWX(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.h.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.n.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bzp.j(0.18*p)
$.T()
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.r=o.gp(0)
d.O(new A.m(r,q),5,n)
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.r=D.bsQ.j(0.9*p).gp(0)
d.O(new A.m(r,q),1.4,n)}},
c8X(d,e){switch(d){case 0:return e.b?D.hTE:D.b3J
case 1:return e.b?D.hTS:D.b3H
case 2:return D.b3G
case 3:return D.b3F
case 4:return D.b3I
default:return D.b3K}},
aFq(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Se(d,e,f,g){var w,v=this,u=D.a7N[e],t=v.c8X(e,g),s=new C.brF(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a7N[e],l=e===0
m=B.h.D(((l?D.aOz:D.aOF).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.aaF
s.as=D.Fc
if(l){s.a=o?v.aFq(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.m(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.m(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.Fc
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.m(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.m(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.m(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.m(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.eD1
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.eEp
if(e===4)s.as=new A.m(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.m(-3-m,p)
s.as=new A.m(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.eGM
s.as=D.aOS}if(e===2&&g.x!=null&&f<g.y){s.a=v.aFq(f,5)
s.b=0.4
s.as=new A.m(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aFq(f,e*3)
s.b=0.5
s.c=0.4}}C.hNO(d,u.a,u.b*1.2,t,s,f,e,null)},
bK_(d,e,f){var w=new C.bWe(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd5(d){return this.c}}
C.ahi.prototype={
a9(){return"_Stand."+this.b}}
C.afd.prototype={}
C.lP.prototype={}
C.bUZ.prototype={
bEv(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aT()
this.c=s},
GS(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bV_())
return r},
atb(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aPb(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
aoj(d){var w,v,u=A.aR(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.d()
v=v.h(0,w)!=null&&u.K(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.d()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gzU(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b_(w,new C.bV0(this))
return B.d.gH(w)}}
C.avX.prototype={}
C.zY.prototype={}
C.amk.prototype={
gCK(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.X(w,new C.bPL(),A.U(w).k("X<1>")).gI(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Nl.prototype={
garf(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCK(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d6G(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.garf(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lP(B.a.i(s.a),p,B.d.ca(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bcS.prototype={}
C.abf.prototype={}
C.bki.prototype={}
C.ahg.prototype={}
C.alC.prototype={
R(){return new C.alD(B.bH,A.a([],x.cC),A.a([],x.e4),null,null)},
gd7(){return this.d}}
C.alD.prototype={
gNJ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bH6(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbdf(){var w,v=this,u=v.e
if(u===$){w=v.qi(v.gcll())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Z(){this.a4()
this.gbdf().fU(0)},
t(){this.gbdf().t()
this.byS()},
fU(d){this.l(new C.bNT(this))},
clm(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fN(0,v)
if(w.c!=null)w.l(new C.bNO())},
bby(){var w,v,u,t=this,s=t.r
B.d.a7(s)
w=t.gNJ()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bki(u,(u+0.5)/v,w[t.x].b[u]))},
fN(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.br(w,new C.bNU())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.cbQ()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gNJ()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.h.S((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.auJ(v,0.8,B.d_)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.auJ(m.cy,0.8,G.nN)
m.b0M("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.auJ(q,0.88,D.lX)
p=m.gNJ()[m.x]
n=p.c
if(u===n){m.b0M("The right gourd fell! It was "+p.b[n]+".")
return}}}},
auJ(d,e,f){var w,v,u,t=new A.e6()
t.cW(B.h.S(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.ahg(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b0M(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Rk()}},
cbQ(){var w=this
if(w.x+1>=w.gNJ().length){w.Rk()
return}++w.x
w.bby()},
Rk(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Rk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gNJ().length
r=C.bJq(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bNM())
w=2
return A.b(C.Ca(u.a.d,r),$async$Rk)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.Cb(t.d,t.c.a,"catch",u.z),$async$Rk)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bNN())
return A.h(null,v)}})
return A.i($async$Rk,v)},
C(d){var w,v=this,u=null
if(v.CW)w=v.cfK()
else w=v.ch?v.cfL():A.at(new A.C(B.ew,A.w(A.a([D.aZU,B.N,D.h72,B.S,D.hde,B.eb,C.uO("Play",v.gf3(v),B.d_,B.fQ,D.fL)],x.p),B.l,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.tY("Calabash Catch",w,B.fh,u)},
cfL(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hQ:B.Ix
p.push(A.V(u,v?B.aC:B.bX,r,r,r,22))}p.push(B.aX)
v=s.x
u=s.gNJ()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aYr,r,r,r))
p.push(B.bc)
v=A.n(14)
p.push(A.q(r,A.c(""+s.z,r,r,r,r,r,r,B.iX,r,r,r),B.f,r,r,new A.p(B.by,r,r,v,r,r,B.m),r,r,r,r,A1.Db,r,r,r))
p=A.A(p,B.l,r,B.e,B.i,0,r,r)
v=A.n(18)
t=A.K(B.d_,B.r,3)
return A.w(A.a([new A.C(D.bHm,p,r),A.q(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fRO,B.K,r,r),B.f,r,r,new A.p(D.r_,r,t,v,r,r,B.m),r,r,r,B.eU,B.bg,r,r,1/0),B.aj,A.E(A.cg(new C.bNS(s)),1)],q),B.l,r,B.e,B.i,0,B.p)},
cfK(){var w=this,v=null,u=A.at(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qB,v,v,v),v,v,v),t=A.at(A.c(""+w.Q+" of "+w.gNJ().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.X5,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.co(A.a([D.bgX,u,t,B.aN,new C.IU(s,r,w.cx,v),B.aN,A.at(C.uO("Back to the games",new C.bNL(w),B.d_,B.km,D.fL),v,v,v)],x.p),v,v,B.ae,v,v,B.ah,!1)}}
C.bfp.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.T(),a3=A.L()
a3.san(A.jS(B.J,new A.m(0,a0),D.d9a,G.aDd,B.w,e))
a4.aE(new A.a4(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=G.OH.gp(0)
a4.O(new A.m(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aI(a2.r,B.ak,e,e,w)
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
w.r=D.bo6.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aI(a2.r,B.ak,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.cm(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.cm(r+14,t,r+26,w))
a2.E(new A.bz())
w=A.L()
w.r=D.aiD.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.ctH[q]
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=D.aiD.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.m(r,a2),new A.m(r+p*46,w),s)
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=D.ahV.gp(0)
a4.O(new A.m(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bp6.gp(0)
a4.aE(new A.a4(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=D.aki.gp(0)
t.c=2
a4.ah(new A.m(w,a1),new A.m(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.c_(new A.m(u,s),12,54)
$.T()
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=D.lX.j(0.6).gp(0)
a4.c2(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bs(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=D.ajm.gp(0)
a4.O(D.eCh,14,m)
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=D.bu8.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.eCi,D.eDp,m)
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.san(new A.ane(D.eFA,46,D.diL,B.vQ,B.w,e,e,0))
a4.O(B.J,34,m)
m=A.c_(D.eFG,8,12)
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=B.c.j(0.35).gp(0)
a4.c2(m,l)
k=new A.iS(new A.eE(n.c,e,e,B.cV,e,e,e,e,e,e,D.fPz),B.K,B.ca,new A.k2(1),e,e,3,e,B.cb,e,B.cJ)
k.nH(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bx(A.c_(B.cN,m.gb4(m)+8,l),B.h4)
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=D.r_.gp(0)
a4.aq(j,l)
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=D.lX.gp(0)
l.b=B.ad
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a5(a4,new A.m(-m/2,4-l.gb4(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.iwa(a4,new A.m(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.e0,(w+1)/2)
h=A.c_(new A.m(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aI($.T().r,B.ak,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.cm(h.gbE().a,s+8,w+8,s))
a3.E(new A.bz())
m=A.L()
m.r=D.a01.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=D.Co.gp(0)
m.c=1.4
a4.ah(new A.m(t,a2),new A.m(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.nN.gp(0)
a4.aE(new A.a4(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.boc.gp(0)
a4.c2(new A.a4(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=g.e.j(B.h.D(s,0,1)).gp(0)
a4.O(new A.m(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.h0(e,B.cJ,e,e,e,A.cW(e,e,e,e,e,e,e,e,e,A.l(e,e,B.d_.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Em,e,e),"+"+a2),B.a7,B.ca,e,B.e4,B.cb)
k.eJ()
k.a5(a4,new A.m(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.Rv.prototype={
C(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aDj(w.c,w.f,v),B.aA),s=A.n(10),r=A.K(B.bE,B.r,1.4)
return new A.a5(u+22,v,A.w(A.a([new A.a5(u,u,t,v),B.cR,A.q(v,A.c(w.d,v,1,B.a2,v,v,v,D.fHW,v,v,v),B.f,v,v,new A.p(B.c,v,r,s,v,v,B.m),v,v,v,v,B.nm,v,v,v)],x.p),B.l,v,B.e,B.P,0,B.p),v)},
ga0(d){return this.e}}
C.aDj.prototype={
a5(d,e){var w=e.eq(B.J),v=e.gdm(),u=this.c?0.8:0
return O.huG(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aBI.prototype={}
C.awx.prototype={
R(){return new C.awy(A.S(x.S,x.cq),null,null)},
gd7(){return this.d}}
C.awy.prototype={
gkW(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hTC(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaHu(){var w=this.z
return w===$?this.z=this.Yq(0):w},
gj7(){var w,v=this.Q
if(v===$){w=this.gkW()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c4(w,-1,!1,x.S)}return v},
Yq(d){var w,v,u,t,s=this.gkW()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aBI(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aBI(v[t],u[t],-1))
v=new A.e6()
v.cW(this.a.e*31+d)
B.d.e_(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.du(w,w.r,w.e);w.B();){v=w.d
v.r.t()
v.r=null
u=v.eU$
u.b=!1
B.d.a7(u.a)
u=u.goT()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.e2$.a.a7(0)
v.qT()}this.bzk()},
cWg(d,e){var w,v,u,t,s,r=this
if(d>=r.gj7().length||r.gj7()[d]!==-1||B.d.q(r.gj7(),e))return
w=r.gaHu()[e]
v=r.gkW()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.ctX(r,e,w,v))
A.cC(B.m3,new C.ctY(r))
return}++r.r
u=A.br(null,B.hy,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.ctZ(r,d,e,w,v))
u.ct(0)},
kR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkW()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cF(n,0,new C.cu_())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.cu0(t,r))
w=5
return A.b(C.Ca(t.a.d,r),$async$kR)
case 5:t.x=f
o=t.a
w=6
return A.b(C.Cb(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kR)
case 6:t.ch=f
if(t.c!=null)t.l(new C.cu1())
w=1
break
case 4:for(o=t.as,n=new A.du(o,o.r,o.e);n.B();){q=n.d
q.r.t()
q.r=null
p=q.eU$
p.b=!1
B.d.a7(p.a)
p=p.goT()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.e2$.a.a7(0)
q.qT()}o.a7(0)
t.l(new C.cu2(t))
case 1:return A.h(u,v)}})
return A.i($async$kR,v)},
C(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qB,p,p,p),p,p,p)
v=r.f
v=A.at(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.X5,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tY(q,A.co(A.a([D.aht,w,v,B.aN,new C.IU(u,t,r.ch,p),B.aN,A.at(C.uO("Back to the games",new C.ctT(d),B.d_,B.km,D.fL),p,p,p)],x.p),p,p,B.ae,p,p,B.ah,!1),B.fh,p)}w=r.gkW()
v=r.e
s=w[v]
return new C.tY(q,new A.C(B.tH,A.w(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aYm,B.K,p,p),A.E(A.cg(new C.ctU(r,s)),1)],x.p),B.l,p,B.e,B.i,0,B.p),p),B.fh,p)}}
C.beR.prototype={
a5(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.X(b2,new C.cUh(),A.U(b2).k("X<1>")).gI(0),b4=a9.b,b5=b4.a6(0,B.KA)
$.T()
w=A.L()
w.r=D.lY.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a6(0,D.eC4)
u=A.L()
u.r=B.r0.j(0.5).gp(0)
u.c=10
u.d=B.bG
b6.ah(new A.m(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.ed.aA(0,B.h.D(b2[p],0,1))
l=$.T().r
k=A.a([],s)
j=new A.aI(l,B.ak,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ac()
o=new A.cm((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.aj(n)
j.ac()
if(m<1)for(o=new A.aI(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),i=new A.vc(o,!1,n);i.B();){h=i.c
if(h===0||i.f)A.bi(A.jZ(b1));--h
g=new A.C7(i,h)
f=0
for(;;){i.jW()
e=n[h].b
e===$&&A.d()
if(!(f<e.a.length()))break
i.jW()
e=n[h].b
e===$&&A.d()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.T()
a1=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a1.r=B.aT.gp(0)
a1.b=B.ad
a1.c=3
b6.af(new A.aI(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aI(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),k=new A.vc(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.B();){a0=k.c
if(a0===0||k.f)A.bi(A.jZ(b1));--a0
k.jW()
a1=n[a0].b
a1===$&&A.d()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.T()
a4=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a4.r=D.Hh.gp(0)
a4.b=B.ad
a4.c=h
a4.d=B.bG
b6.af(new A.aI(l,a2,b0,new A.b7([new A.C7(k,a0),0,a1*m,!0]),a3),a4)
k.jW()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jW()
a5=n[a0].WR(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.c_(new A.m(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a3.r=B.bf.gp(0)
b6.c2(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iS(D.fHp,B.a7,B.ca,new A.k2(1),b0,b0,b0,b0,B.cb,b0,B.cJ)
a8.eJ()
a8.a5(b6,new A.m(w*(0.15+p*0.14),b2-B.n.F(p,3)*14))}},
aD(d){return!0}}
C.aAt.prototype={
R(){return new C.aAu(A.aR(x.S))},
gd7(){return this.d}}
C.aAu.prototype={
gkW(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hUw(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Z(){this.a4()
this.bbH()},
t(){var w=this.ch
if(w!=null)w.a2(0)
this.a3()},
bbH(){var w=this.ch
if(w!=null)w.a2(0)
this.ch=A.d5(B.tB,new C.cIS(this))},
bsU(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkW()[v.e]
if(w.e[d]===w.b)v.l(new C.cJ_(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cJ0(v,d))
A.cC(B.j5,new C.cJ1(v))}},
d0P(){var w=this
if(!w.as&&w.f<w.gkW()[w.e].d.length)w.l(new C.cJ2(w))},
kR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkW()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a2(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.l(new C.cJ3(t,s))
w=5
return A.b(C.Ca(t.a.d,s),$async$kR)
case 5:t.y=f
q=t.a
w=6
return A.b(C.Cb(q.d,q.c.a,"who",t.r),$async$kR)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cJ4())
w=1
break
case 4:t.l(new C.cJ5(t))
t.bbH()
case 1:return A.h(u,v)}})
return A.i($async$kR,v)},
C(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.c(""+a0.w+" of "+a0.gkW().length+" guessed",a2,a2,a2,a2,a2,a2,B.qB,a2,a2,a2),a2,a2,a2)
v=A.at(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.X5,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tY(a1,A.co(A.a([D.bh7,w,v,B.aN,new C.IU(u,t,a0.ax,a2),B.aN,A.at(C.uO("Back to the games",new C.cIU(a3),B.d_,B.km,D.fL),a2,a2,a2)],x.p),a2,a2,B.ae,a2,a2,B.ah,!1),B.fh,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkW()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.LX,B.K,a2,a2),B.S,A.at(A.l3(new C.cIV(a0,r),a2,B.b_,B.hy,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aQ(16,16)
l=new A.ax(B.d_,2,B.r,-1)
k=o+1
w.push(new A.rt(new A.bq(0,1,u),new C.cIW(),A.q(a2,new A.c1(B.aK,B.e,B.i,B.l,a2,B.p,a2,0,A.a([new A.qZ(A.c(""+k,a2,a2,a2,a2,a2,a2,B.ow,a2,a2,a2),D.lX,a2,12,a2),B.ar,new A.bu(1,B.b8,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fUr,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.p(D.r_,a2,new A.bE(l,l,l,l),new A.bc(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cB,B.bg,a2,a2,a2),B.b_,B.j5,a2,new A.bf("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bL(!1,D.hlh,a2,a2,!0,a2,a2,a2,a0.gd0O(),a2,a2),a2,a2,a2))
w.push(B.N)
if(a0.as){u=D.lY.j(0.2)
q=A.n(16)
p=A.K(D.lY,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fS,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.q(a2,A.w(A.a([m,B.S,C.uO(v,a0.gqC(a0),B.d_,B.jH,D.fL)],t),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.p(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bD,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dA:B.d_.j(0.2)
g=new A.aQ(16,16)
l=new A.ax(n.q(0,o)?B.fs:B.d_,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bX:B.c
d=n.q(0,o)?B.y7:a2
t.push(new A.rt(new A.bq(0,i,u),new C.cIX(),A.aA(a2,A.q(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.G(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.agB,new A.p(h,a2,new A.bE(l,l,l,l),new A.bc(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jF,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cIY(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b_,B.mw,a2,new A.bf("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.c0(B.fX,t,B.br,a2,10,10))}return new C.tY(a1,A.co(w,a2,a2,B.aon,a2,a2,B.ah,!1),B.fh,a2)}}
C.aBs.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.aIW.prototype={
b0(){this.b8()
this.b5()
this.dV()},
t(){var w=this,v=w.bc$
if(v!=null)v.a8(0,w.gdP())
w.bc$=null
w.a3()}}
C.ah4.prototype={
asL(d){},
atf(){var w=this,v=w.qi(new C.fgU(w))
v.fU(0)
w.MR$!==$&&A.aT()
w.MR$=v}}
C.aMO.prototype={
gbpf(d){var w=this.c
return B.a.av(w,0,Math.min(this.d,w.length))},
WZ(d){var w=this,v=w.b
if(v!=null)v.a2(0)
w.c=d
w.d=0
w.b=A.d5(E.a1G,new C.frg(w))},
bvg(d){var w=this,v=w.b
if(v!=null)v.a2(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a2(0)}}
C.anD.prototype={
R(){return new C.anE(new C.anN(),A.a([],x.t),new A.eO(0,$.ay()),$,0,null,null)},
gd7(){return this.d}}
C.anE.prototype={
gNH(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bH6(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghl(d){var w,v=this,u=v.e
if(u===$){w=C.ND(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqK(){var w=this.r
return w===$?this.r=new C.aMO(new C.bVL(this)):w},
garB(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gNH()[v].c)u.push(1)
return u.length},
gbov(){var w=this.ghl(0)
return w.gzU()==null?"Elder":B.a.i(w.gzU().b)},
Z(){this.a4()
this.atf()},
t(){var w,v=this
v.gqK().t()
v.f.t()
w=v.MR$
w===$&&A.d()
w.t()
w=v.qp$
w.V$=$.ay()
w.W$=0
v.bz_()},
cQl(){var w=this
w.l(new C.bVI(w))
w.gqK().WZ(w.gNH()[w.x].a)},
M2(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqK()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qp$.a
v.ax=u
v.ay=u+1
v.l(new C.bVG())
A.cC(B.hy,new C.bVH(v))},
bsQ(){var w=this.garB(0)/this.gNH().length*100
if(w>=90)return D.fe2
if(w>=75)return D.fbV
if(w>=60)return D.f26
if(w>=45)return D.f5H
return D.eXl},
C(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cyp()
w=A.bT(0,new A.e9(A.b4(m,m,m,new C.bvN(n,n.qp$),B.aA),m),0,0,0)
if(!n.Q){v=D.r_.j(0.96)
u=A.n(20)
t=A.K(B.d_,B.r,3)
u=A.q(m,A.w(A.a([A.c("Elder "+n.gbov()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aZh,B.K,m,m),B.S,C.uO("Start the test",n.gCA(),B.d_,B.jm,D.fL)],x.p),B.l,m,B.e,B.P,0,B.p),B.f,m,m,new A.p(v,m,t,u,m,m,B.m),m,m,m,m,B.bD,m,m,m)
v=u}else{v=n.x
u=n.gNH()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aZj,m,m,m)
if(n.Q){t=n.gqK()
t=t.d<t.c.length}else t=!1
if(t)u=D.fzR
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aQ(10,10)
o=new A.ax(D.Co,4,B.r,-1)
s.push(A.aA(m,A.q(m,A.c(q[r],m,m,m,m,m,m,D.fLf,B.K,m,m),B.f,m,D.agB,new A.p(D.bk1,m,new A.bE(o,o,o,o),new A.bc(p,p,p,p),m,m,B.m),m,m,m,m,B.Pt,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bVJ(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.c0(B.fX,s,B.br,new A.bf("o"+t,x.W),8,8)}u=A.w(A.a([v,B.aj,A.p_(u,B.nj,A.qc(),B.b_,B.b_,A.Mb())],x.p),B.l,m,B.e,B.P,0,B.p)
v=u}return new C.tY("Village School",new A.am(B.a0,m,B.ac,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fh,m)},
cyp(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bsQ(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gNH()[v].c)g.push(v)
u=A.n(22)
t=A.K(B.d_,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fPS,B.K,i,i)
r=A.c("Signed by Elder "+j.gbov(),i,i,i,i,i,i,D.fOs,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fTN,i,i,i),D.eOU],q)
o=A.c(h.b,i,i,i,i,i,i,D.fVM,i,i,i)
n=j.garB(0)
m=j.gNH()
u=A.q(i,A.w(A.a([D.h6f,B.at,s,r,B.S,new A.am(B.z,i,B.ac,B.t,p,i),o,B.aj,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.adA,i,i,i),B.N,D.avt],q),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(D.r_,i,t,u,i,i,B.m),i,i,i,i,B.f7,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.IU(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aN,D.hml,B.N],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aQ(14,14)
k=new A.ax(B.by,1,B.r,-1)
p=m[v]
u.push(A.q(i,A.w(A.a([A.c(p.a,i,i,i,i,i,i,B.hi,i,i,i),B.at,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fR6,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fTo,i,i,i)],q),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.dA,i,new A.bE(k,k,k,k),new A.bc(r,r,r,r),i,i,B.m),i,i,i,B.cB,B.bg,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.at(C.uO("Back to the games",new C.bVC(j),B.d_,B.km,D.fL),i,i,i))
return new C.tY("Village School",A.co(s,i,i,B.bR,i,i,B.ah,!1),B.fh,i)}}
C.bvN.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qp$.a
a0.CX(e.f.Nr(a1))
w=C.hpG(a1)
v=a0.c
J.bs(v.save())
v.translate(w.a,w.b)
a0.bW(0,w.c)
if(e.Q){u=e.gqK()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d2Y[s]-6
$.T()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=D.H2.gp(0)
a0.aE(new A.a4(u,340,u+12,450),r)}u=A.bx(D.aby.cu(10),B.il)
$.T()
r=A.L()
r.r=D.Co.gp(0)
a0.aq(u,r)
r=A.bx(D.aby,B.iE)
u=A.L()
u.san(A.jS(new A.m(30,96),new A.m(420,346),D.doC,f,B.w,f))
a0.aq(r,u)
q=new A.e6()
q.cW(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.c_(new A.m(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=B.c.j(0.025).gp(0)
a0.c2(o,r)}u=A.L()
u.r=I.al8.gp(0)
a0.aE(new A.a4(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aE(D.fra,u)
u=A.L()
u.r=B.bO.gp(0)
a0.aE(D.fre,u)
u=A.bx(D.fr4,B.hs)
r=A.L()
r.r=D.a01.gp(0)
a0.aq(u,r)
n=B.h.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqK().gbpf(0)
m=A.h0(f,B.cJ,f,7,f,A.cW(f,f,f,f,f,f,f,f,f,D.fY7,u+(t?"|":"")),B.a7,B.ca,f,B.e4,B.cb)
m.nH(346)
J.bs(v.save())
u=A.hS(D.aby)
r=$.lH()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hS(new A.a4(30+390*n,96,420,346)),r[1],!0)
m.a5(a0,new A.m(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bx(new A.a4(u,r,u+40,r+90),B.h4)
u=A.L()
u.r=D.bAj.gp(0)
a0.aq(r,u)}}else{m=A.h0(f,B.cJ,f,f,f,D.fHF,B.K,B.ca,f,B.e4,B.cb)
m.nH(340)
m.a5(a0,new A.m(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.h.F(u+p/8,1)
o=B.n.F(e.gqK().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.U,B.R,B.X,B.Y,B.W)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.m(70+o+k*6,166+l*70),1.6,j)}u=e.ghl(0).gzU()
i=(u==null?f:u.c)===D.p_?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.fgV(d,a0,i,t,h,D.eDe)),new A.y(520,new C.fgW(a0,d,t)),new A.y(575,new C.fgX(a0,d,t)),new A.y(585,new C.fgY(this,a0,d,t)),new A.y(615,new C.fgZ(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.fh_())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cfM(d,e){var w,v,u,t,s,r,q,p=$.T(),o=A.a([],x.v),n=new A.aI(p.r,B.ak,null,null,o)
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
n.ac()}}n.E(new A.bz())
return n},
aD(d){return!1}}
C.anB.prototype={
R(){return new C.anC(new C.anN(),A.S(x.S,x.i),new A.eO(0,$.ay()),$,0,null,null)},
gd7(){return this.d}}
C.anC.prototype={
gkW(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hTr(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj7(){var w=this.z
return w===$?this.z=this.Gq(0):w},
gaNL(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.Gq(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.ca(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.Gq(0):r).length);++v}s.Q=w
r=w}return r},
Gq(d){var w,v,u,t,s=this.gkW()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e3(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e6()
u.cW(this.a.e+d*7)
B.d.e_(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eL(u,new C.bVo())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a4()
this.atf()},
t(){var w,v=this
v.e.t()
w=v.MR$
w===$&&A.d()
w.t()
w=v.qp$
w.V$=$.ay()
w.W$=0
v.byZ()},
asL(d){var w,v,u,t,s,r=this,q=r.gj7().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.ca(u===$?r.z=r.Gq(0):u,v)
s=r.gaNL()
s[v]=s[v]+(450*(t+0.5)/q-r.gaNL()[v])*Math.min(1,w)}},
d6g(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj7().length)return
w=v.y
if(w===-1){v.l(new C.bVz(v,d))
return}if(w===d){v.l(new C.bVA(v))
return}v.l(new C.bVB(v,B.d.ca(v.gj7(),v.y),d,B.d.ca(v.gj7(),d)))},
cR3(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.Gq(0):u).length))break
t=s.gkW()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.Gq(0):u)[v]]===v);++v}s.l(new C.bVu(s,B.d.cC(w,new C.bVv())))},
kR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkW().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bVw(t,s))
w=5
return A.b(C.Ca(t.a.d,s),$async$kR)
case 5:t.x=f
q=t.a
w=6
return A.b(C.Cb(q.d,q.c.a,"lineup",t.r*10),$async$kR)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bVx())
w=1
break
case 4:t.l(new C.bVy(t))
case 1:return A.h(u,v)}})
return A.i($async$kR,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.c(""+l.r+" of "+l.gkW().length+" lines right",k,k,k,k,k,k,B.qB,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tY("Line Up",A.co(A.a([D.aht,w,B.aN,new C.IU(v,u,l.ch,k),B.aN,A.at(C.uO("Back to the games",new C.bVq(d),B.d_,B.km,D.fL),k,k,k)],x.p),k,k,B.ae,k,k,B.ah,!1),B.fh,k)}w=A.a([],x.t)
for(t=0;v=l.gkW(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bVr(l))
u=A.bT(0,A.cg(new C.bVs(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aZj,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.w(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fQk,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fSD,B.K,k,k)],q),B.l,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.v.j(0.7)
o=A.n(16)
n=l.ax
m=A.K(n?D.lY:G.nN,B.r,2)
r.push(A.q(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.O(w,new C.bVt(l),x.cM).aL(0,", then ")+".",k,k,k,k,k,k,D.fUQ,k,k,k),B.f,k,k,new A.p(p,k,m,o,k,k,B.m),k,k,k,B.d2,B.bg,k,k,1/0))}if(!l.at)r.push(C.uO("That is my line!",l.gcR2(l),B.d_,B.h1,D.fL))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uO(w,l.gqC(l),B.d_,B.jH,D.fL))}return new C.tY("Line Up",new A.am(B.a0,k,B.ac,B.t,A.a([u,s,A.ao(12,A.w(r,B.l,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.fh,k)}}
C.bm8.prototype={
a5(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qp$.a
c7.CX(c5.e.Nr(c8))
w=C.hpG(c8)
v=c7.c
J.bs(v.save())
v.translate(w.a,w.b)
c7.bW(0,w.c)
u=c5.gj7().length
t=$.T().r
s=x.v
r=new A.aI(t,B.ak,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.cm(225,500,440,470))
q=A.L()
q.r=D.a01.gp(0)
q.b=B.ad
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aI(t,B.ak,c4,c4,l)
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
m=new A.bz()
l.push(m)
l=k.f
if(l!=null)m.aj(l)
k.ac()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=[B.d_,G.nN,D.lY,B.aH][B.n.F(p,4)].gp(0)
c7.af(k,m)}this.b3z(c7,"OLDEST",D.eEc,B.d_)
this.b3z(c7,"YOUNGEST",D.eDF,B.bf)
t=A.bx(D.fqZ,B.h4)
s=A.L()
s.r=D.H2.gp(0)
c7.aq(t,s)
s=A.bx(D.fqY,B.iE)
t=A.L()
t.r=D.Co.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.dwy())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.ca(a1===$?c5.z=c5.Gq(0):a1,f)
o=c5.gaNL()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gkW()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gkW()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.T()
a9=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a9.r=B.d_.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.m(o,520),54,a9)}a9=D.dsI[B.n.F(b0,6)]
if(b1)b3=1
else b3=a7?-0.4:0.35
if(b1)b4=0.4+0.4*b2
else b4=h&&a7?0.5:0
if(h&&a7)b5=1
else b5=a3?0.6:0
b6=b1?0.5:0
b7=a7?Math.sin(d)*0.5:0
b8=b1?a4+b2*8:a4
if(b1)b9=new A.m(-3-b2*8,-56)
else b9=a3?D.eGj:c4
if(b1)c0=new A.m(3+b2*8,-56)
else if(h&&a7)c0=D.aOS
else c0=a3?new A.m(30,-104+Math.sin(e)*5):c4
C.Ts(c7,new A.m(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.KD,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iS(new A.eE(a8,c4,c4,B.cV,c4,c4,c4,c4,c4,c4,D.fNX),B.a7,B.ca,new A.k2(1),"\u2026",c4,1,c4,B.cb,c4,B.cJ)
c1.nH(q)
c2=A.bx(A.c_(new A.m(o,650),24,c1.b.c+16),B.h4)
$.T()
a8=new A.ar(B.U,B.R,B.X,B.Y,B.W)
if(a6)a9=B.iN
else a9=a7?B.tu:D.r_
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.U,B.R,B.X,B.Y,B.W)
if(a6)a9=D.lY
else a9=a7?G.nN:D.lX
a8.r=a9.gp(0)
a8.b=B.ad
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a5(c7,new A.m(o-a9/2,650-a8.gb4(a8)/2))
c3=new A.iS(new A.eE(""+(a2+1),c4,c4,B.cV,c4,c4,c4,c4,c4,c4,D.fOg),B.a7,B.ca,new A.k2(1),c4,c4,c4,c4,B.cb,c4,B.cJ)
c3.eJ()
c3.a5(c7,new A.m(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.h.F(p*53+Math.sin(c5+p)*20,450)
q=B.h.F(t+p*37,420)
J.bs(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.c_(B.J,4,8)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=[B.d_,G.nN,D.lY,B.aH,B.c][B.n.F(p,5)].gp(0)
c7.aE(q,m)
v.restore()}v.restore()},
b3z(d,e,f,g){var w,v,u=null,t=A.h0(u,B.cJ,u,u,u,A.cW(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Em,u,u),e),B.a7,B.ca,u,B.e4,B.cb)
t.eJ()
w=t.b
v=w.c
w=w.a.c
t.a5(d,f.aI(0,new A.m(v/2,w.gb4(w)/2)))},
aD(d){return!1}}
C.a3b.prototype={
a9(){return"_Trip."+this.b}}
C.anx.prototype={
R(){return new C.any(D.YS,new A.eO(0,$.ay()),$,0,null,null)},
gd7(){return this.d}}
C.any.prototype={
gEa(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bH6(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghl(d){var w,v=this,u=v.e
if(u===$){w=C.ND(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqK(){var w=this.f
return w===$?this.f=new C.aMO(new C.bVa(this)):w},
gUW(){var w=this.ghl(0)
return w.gzU()==null?"Grandma":B.a.i(w.gzU().b)},
Z(){this.a4()
this.atf()},
t(){var w,v=this
v.gqK().t()
w=v.MR$
w===$&&A.d()
w.t()
w=v.qp$
w.V$=$.ay()
w.W$=0
v.byY()},
asL(d){var w,v,u,t=this
if(t.r!==D.afj)return
w=B.dS.aA(0,B.h.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gEa()
if(v+1>=u.length){t.r=D.afk
t.XW()}else{++t.w
t.ay=!1
t.r=D.YT
t.gqK().WZ(u[t.w].a)}if(t.c!=null)t.l(new C.bV8())}},
XW(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$XW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqK().WZ("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gEa().length
r=C.bJq(t,u.z,s)
u.as=r
w=2
return A.b(C.Ca(u.a.d,r),$async$XW)
case 2:u.at=e
s=u.a
w=3
return A.b(C.Cb(s.d,s.c.a,"journey",u.x*10),$async$XW)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bV2())
return A.h(null,v)}})
return A.i($async$XW,v)},
bu8(){this.aWy()},
aWy(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.afj
if(w.c!=null)w.l(new C.bV3())},
M2(d){var w,v,u,t,s=this
if(s.r!==D.YT)return
w=s.gEa()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bV7(s,d,v))
u=s.gqK()
t=s.w
u.WZ(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cWf(){if(this.r!==D.BX)return
this.aWy()},
C(d){var w,v,u,t=this,s=null,r=A.bT(0,new A.e9(A.b4(s,s,s,new C.bly(t,t.qp$),B.aA),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gEa().length;++w){v=t.w
if(w<v||t.r===D.afk)v=B.d_
else v=w===v?B.c:B.aT
u=new A.aQ(4,4)
p.push(new A.bu(1,B.b8,A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,B.xh,s,s,s,s),s))}p.push(B.b7)
p.push(D.h7W)
return new C.tY("Safari Journey",new A.am(B.a0,s,B.ac,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ao(10,t.cpR(),s,s,10,10,s,s)],q),s),B.fh,s)},
cpR(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bV6(o),l=D.r_.j(0.96),k=A.n(22),j=A.K(B.d_,B.r,3)
switch(o.r.a){case 0:w=A.w(A.a([A.c("A long drive to the village of Elder "+o.gUW()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aZh,B.K,n,n),B.S,C.uO("Start the journey",o.gbu7(),B.d_,D.bVf,D.fL)],x.p),B.l,n,B.e,B.P,0,B.p)
break
case 3:w=D.bgI
break
case 1:w=o.w
v=o.gEa()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aQ(14,14)
p=new A.ax(D.lX,2.5,B.r,-1)
t.push(A.aA(n,A.q(n,A.c(r[s],n,n,n,n,n,n,D.aYB,B.K,n,n),B.f,n,D.agI,new A.p(D.aml,n,new A.bE(p,p,p,p),new A.bc(q,q,q,q),n,n,B.m),n,n,n,n,B.xb,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bV4(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.w(A.a([w,B.N,A.c0(B.bI,t,B.br,n,8,8)],u),B.B,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gEa().length?"Drive home":"Drive on"
v=A.w(A.a([w,B.N,new A.bK(B.a9,n,n,C.uO(v,o.gcWe(),B.d_,B.jH,D.fL),n)],x.p),B.B,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUW()),B.N,A.c(""+o.x+" of "+o.gEa().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aYT,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aSU(v)
u=C.aSU(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.adA,n,n,n))}w.push(B.N)
w.push(A.at(C.uO("Back to the games",new C.bV5(o),B.d_,B.km,D.fL),n,n,n))
w=A.w(w,B.B,n,B.e,B.P,0,B.p)
break
default:w=n}return A.q(n,w,B.f,n,n,new A.p(l,n,j,k,D.aG0,n,B.m),n,n,n,n,B.bg,n,n,n)}}
C.bly.prototype={
a5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qp$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gEa(),d0=B.h.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.afj,d2=c7*0.5
c8=A.ap(D.bly,D.bwv,d0)
c8.toString
w=A.ap(D.a_d,G.ajT,d0)
w.toString
v=A.ap(B.uZ,D.buQ,d0)
v.toString
$.T()
u=A.L()
t=x.O
u.san(A.jS(B.J,new A.m(0,d2),A.a([c8,w,v],t),G.a6d,B.w,c3))
d3.aE(new A.a4(0,0,0+c6,0+c7),u)
s=new A.m(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.wB(s,60,A.a([D.bve,B.L],t),c3,B.w,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.a_q.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.h.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.n.F(r,3)*22
for(o=0;o<4;++o){n=D.dJn[o]
$.T()
u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.m(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.T()
j=A.a([],m)
i=new A.aI(k.r,B.ak,c3,c3,j)
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
k.r=A.ap(l===0?D.bk4:D.bzH,D.bpf,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cfN(d3,new A.m(B.h.F(B.h.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.T()
w=A.L()
v=A.ap(D.als,D.Hh,d0)
v.toString
w.san(A.jS(new A.m(0,d2),new A.m(0,c7),A.a([v,D.bvg],t),c3,B.w,c3))
d3.aE(new A.a4(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bos.gp(0)
d3.aE(new A.a4(0,a0,c6,a1),w)
w=A.L()
w.r=D.bzi.gp(0)
d3.aE(new A.a4(0,a0-3,c6,a0),w)
for(q=-B.h.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.r=I.NU.gp(0)
d3.aE(new A.a4(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.T()
b2=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b2.r=D.bjJ.gp(0)
d3.aE(new A.a4(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aI(b1.r,B.ak,c3,c3,b2)
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
b0=new A.bz()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.aj(b2)
b1.ac()
b0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b0.r=D.bxp.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b1.r=D.fL.gp(0)
d3.aE(new A.a4(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b0.r=D.H2.gp(0)
d3.aE(new A.a4(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bx(new A.a4(b0,a4,b0+60,a5),B.jL)
b0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b0.r=D.bAP.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b0.r=D.Co.gp(0)
b0.b=B.ad
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iS(new A.eE(b6,c3,c3,B.cV,c3,c3,c3,c3,c3,c3,D.fMl),B.a7,B.ca,new A.k2(1),c3,c3,c3,c3,B.cb,c3,B.cJ)
b7.eJ()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a5(d3,new A.m(b4-b1/2,a2-b0.gb4(b0)/2))
if(a7)b8=c4.r===D.afk
else if(r===c4.w){b0=c4.r
b0=b0===D.YT||b0===D.BX
b8=b0}else b8=!1
if(a7){b0=c4.ghl(0).gzU()
b9=(b0==null?c3:b0.c)===D.p_?1:0}else b9=[0,3,6,7,2,1,4,5][B.n.F(r,8)]
b0=c4.gqK()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.BX
b0=c0?C.hPl(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.YT?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.m(40,-110+Math.sin(g)*10)
else a7=c0?new A.m(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.Ts(d3,new A.m(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.m(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bLn(d3,new A.m(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.h.F(w+r/7,1)
$.T()
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=D.byM.j(0.5*(1-c2)).gp(0)
d3.O(new A.m(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.YS)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.h.F(w+r/5,1)
t=Math.sin(r+c8)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.m(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.BX&&c4.ax){b7=A.h0(c3,B.cJ,c3,c3,c3,A.cW(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.d_,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A7.Jz,c3,c3),"BEEP BEEP!"),B.a7,B.ca,c3,B.e4,B.cb)
b7.eJ()
b7.a5(d3,new A.m(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cfN(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.buK,D.bnL,g)
o.toString
if(f){w=new A.aI($.T().r,B.ak,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.cm(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.cm(v+9,t,v+16,u))
w.E(new A.bz())
t=A.L()
t.r=D.a0z.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d7a[r]
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=D.a0z.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.m(w,t),new A.m(v+q*24,s),p)
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=o.gp(0)
d.O(new A.m(v+q*26,u),10,p)}}else{w=e.a6(0,D.eGg)
$.T()
v=A.L()
v.r=D.bjL.gp(0)
v.c=4
d.ah(e,w,v)
v=A.c_(e.a6(0,D.eGh),16,60)
w=A.L()
w.r=o.gp(0)
d.c2(v,w)}},
bLn(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.YS?0.045:0,a1=a2.c
J.bs(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jy(0,a0)
for(w=0;w<2;++w){v=D.dB0[w]
u=d.ay&&d.r!==D.YS&&v>0
J.bs(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.T()
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=D.bzy.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=D.brr.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=B.bl.gp(0)
q.c=2
a2.ah(B.J,new A.m(s*9,t*9),q)}a1.restore()}p=A.rh(D.frn,B.h4,B.h4,B.i8,B.hT)
$.T()
t=A.L()
t.san(A.jS(D.eCk,B.aas,D.dq0,G.a6d,B.w,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=D.djx[B.n.F(o,4)].gp(0)
a2.aE(new A.a4(t,-26,t+10,-19),s)}n=d.r===D.BX&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a4(s,-66,q,-36)
J.bs(a1.save())
a1.clipRRect(A.nk(A.bx(l,B.pm)),$.mZ(),!0)
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.r=D.a_d.gp(0)
a2.aE(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.BX?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.Ts(a2,new A.m(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aOJ,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bx(l,B.pm)
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.r=D.amn.gp(0)
i.b=B.ad
i.c=2
a2.aq(j,i)}d=A.bx(D.Wc,B.pm)
t=A.L()
t.r=D.a_d.gp(0)
a2.aq(d,t)
J.bs(a1.save())
a1.clipRRect(A.nk(A.bx(D.Wc,B.pm)),$.mZ(),!0)
C.Ts(a2,new A.m(D.Wc.gbE().a,-10),0,0,0.7,-0.1,f,f,D.aOJ,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bx(D.Wc,B.pm)
d=A.L()
d.r=D.amn.gp(0)
d.b=B.ad
d.c=2
a2.aq(t,d)
d=A.L()
d.r=Ao.CO.gp(0)
a2.O(D.eEs,4,d)
d=A.L()
d.r=D.H2.gp(0)
a2.aE(D.fsw,d)
for(w=0;w<3;++w){v=D.dB2[w]
d=A.bx(new A.a4(v,-96,v+28,-79),B.jL)
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=D.Hh.gp(0)
a2.aq(d,t)}a1.restore()},
aD(d){return!1}}
C.aDm.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bj5.prototype={}
C.aDo.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bj6.prototype={}
C.aDp.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bj7.prototype={}
C.a7H.prototype={
C(d){var w=null
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.blF(w),B.aA),w)}}
C.blF.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dyS[B.n.F(n,6)]
k=$.T()
j=new A.ar(B.U,B.R,B.X,B.Y,B.W)
j.r=l.gp(0)
d.aE(new A.a4(m,0,m+v,u),j)
if(B.n.F(n,3)===0){j=A.a([],o)
i=new A.aI(k.r,B.ak,null,null,j)
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
k=new A.bz()
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.ac()
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.tY.prototype={
C(d){var w=null,v=x.p,u=A.a([A.aJ(w,w,w,w,B.Rv,w,w,w,new C.bV1(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fJz,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c6(w,D.ZY,A.q(w,A.bn(!0,A.w(A.a([D.can,new A.C(D.bLW,A.A(u,B.l,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.bbY,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.IU.prototype={
C(d){var w=null,v=this.d,u=C.aSU(v),t=C.iyT(v),s=B.c.j(0.08),r=A.n(18),q=A.K(B.d_.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fM6,w,w,w)],x.p)
if(this.e)p.push(D.eIK)
p.push(B.aj)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.hi,w,w,w))
if(t!=null)p.push(new A.C(B.rg,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.FH,w,w,w),w))
return A.q(w,A.w(p,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(s,w,q,r,w,w,B.m),w,w,w,w,B.bD,w,w,w)}}
C.Xc.prototype={
R(){return new C.bot(A.S(x.N,x.S),B.n.F(Date.now(),1e5))},
d2f(d){return this.f.$1(d)},
geb(){return this.d}}
C.bot.prototype={
gTW(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a4()
this.Qt()},
Qt(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Qt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bVN(u.a.d),$async$Qt)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dnY[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bVM(p,(o===$?u.d=q.c:o).a,r),$async$Qt)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e7p(u,n))
return A.h(null,v)}})
return A.i($async$Qt,v)},
uU(d){return this.ct_(d)},
ct_(d){var w=0,v=A.j(x.H),u=this,t
var $async$uU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a8(t,!1).c9(A.e4(new C.e7q(d),!1,null,x.H)),$async$uU)
case 2:u.r=B.n.F(Date.now(),1e5)
if(u.c!=null)u.Qt()
return A.h(null,v)}})
return A.i($async$uU,v)},
gb92(){var w,v,u,t=C.ND(this.gTW()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a3U(d){return this.cAm(d)},
cAm(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a3U=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d2f(r),$async$a3U)
case 2:if(u.c!=null)u.l(new C.e7r(u,r))
return A.h(null,v)}})
return A.i($async$a3U,v)},
PM(d){return this.bUf(d)},
bUf(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$PM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hs5(t.gTW())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Nl("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a8(s,!1).c9(A.e4(new C.e7n(q),!1,null,r)),$async$PM)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bn(j,new C.e7o(p))
o=s.length
B.d.ck(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a3U(A.cJ(s,0,A.dx(2,"count",x.S),r).de(0)),$async$PM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$PM,v)},
YS(d,e){return this.bRP(0,e)},
bRP(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$YS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cf(null,null,!0,null,new C.e7m(e),o,null,!0,!0,x.y),$async$YS)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hs5(u.gTW()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a3U(o),$async$YS)
case 5:case 3:return A.h(null,v)}})
return A.i($async$YS,v)},
abK(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e7j(this,j):h
o=o?0.55:1
w=A.ap(g,B.v,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.n(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ac(0,B.H,g.j(0.35),B.cy,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.X0,p,p,p),B.aX],s)
q=A.n(10)
r.push(A.q(p,A.c(i,p,p,p,p,p,p,D.fKt,p,p,p),B.f,p,p,new A.p(B.i0,p,p,q,p,p,B.m),p,p,p,p,B.zF,p,p,p))
return A.aA(p,A.d3(A.q(p,A.w(A.a([A.A(r,B.l,p,B.e,B.i,0,p,p),B.aX,A.c(e,p,2,p,p,p,p,D.fSw,p,p,p),B.cR,A.c(f,p,3,B.a2,p,p,p,D.fLd,p,p,p)],s),B.B,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(p,p,u,v,t,new A.a6(B.aw,B.aD,B.w,w,p,p),B.m),p,p,p,p,B.x9,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Yl(d,e,f,g,h,i){return this.abK(d,e,f,g,h,i,null)},
C(a2){var w,v,u,t,s=this,r=null,q=C.ND(s.gTW()),p=s.gTW(),o=C.aSU(s.e),n=C.hs5(p),m=s.a.e&&J.aa(p.z)<2,l=new C.e7s(s),k=C.hTr(p,1).length,j=C.hTC(p,1).length,i=C.hUw(p,1).length,h=B.c.j(0.07),g=A.n(20),f=A.K(B.d_.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,K.adn,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fPW,r,r,r),a0=q.b.length,a1=x.p
g=A.q(r,A.A(A.a([e,B.bc,A.E(A.w(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.Xi,r,r,r)],a1),B.B,r,B.e,B.i,0,B.p),1),A.w(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qB,r,r,r),D.heg],a1),B.l,r,B.e,B.i,0,B.p)],a1),B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(h,r,f,g,r,r,B.m),r,r,r,r,B.bD,r,r,r)
f=s.Yl("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.az,new C.e7t(s,p),l.$1("kahoot"))
h=s.Yl("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lX,new C.e7u(s,p),l.$1("fire"))
a0=s.Yl("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.vc,new C.e7v(s,p),l.$1("catch"))
j=j!==0?new C.e7y(s,p):r
j=s.abK("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hY,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e7z(s,p):r
i=s.abK("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lW,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Yl("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.ev,new C.e7A(s,p),l.$1("journey"))
k=k!==0?new C.e7B(s,p):r
k=A.a([g,B.aN,D.him,B.N,A.lh(0.98,A.a([f,h,a0,j,i,e,s.abK("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.et,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Yl("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.de,new C.e7C(s,p),l.$1("school"))],a1),2,12,12,r,B.e8,!0),B.df,A.A(A.a([D.bNL,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fKy,r,r,r)],a1),B.l,r,B.e,B.i,0,r,r),B.N],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aQ(18,18)
u=new A.ax(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fZI,B.bc,new A.bu(1,B.b8,A.w(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hj,r,r,r),A.c(""+v.garf(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.FH,r,r,r)],a1),B.B,r,B.e,B.i,0,B.p),r)],a1)
if(v.garf(0).length>=2){f=D.lY.j(0.2)
t=new A.ax(D.lY,1,B.r,-1)
g.push(A.aA(r,A.q(r,A.V(B.fQ,D.lY,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e7D(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.d_.j(0.2)
t=new A.ax(B.d_,1,B.r,-1)
f=A.aA(r,A.q(r,A.V(B.jm,B.d_,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e7E(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fs.j(0.2)
t=new A.ax(B.fs,1,B.r,-1)
B.d.u(g,A.a([B.b7,f,B.b7,A.aA(r,A.q(r,A.V(B.eq,B.fs,r,r,r,20),B.f,r,r,new A.p(e,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e7F(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.q(r,new A.c1(B.aK,B.e,B.i,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.p(i,r,new A.bE(u,u,u,u),new A.bc(h,h,h,h),r,r,B.m),r,r,r,B.d2,B.bg,r,r,r))}if(s.a.e){j=m?new C.e7w(s):new C.e7x(a2)
i=A.n(18)
h=A.K(m?B.d_:B.aT,B.r,2)
g=m?B.d_.j(0.12):B.dA
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.q(r,A.at(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.d_:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.p(g,r,h,i,r,r,B.m),r,r,r,r,B.Pi,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.hji)
k.push(B.aB)
k.push(D.avt)
return new C.tY("Family Games \xb7 "+p.b,A.co(k,r,r,D.bHY,r,r,B.ah,!1),B.fh,r)}}
C.a11.prototype={
a9(){return"_KPhase."+this.b}}
C.anz.prototype={
R(){return new C.anA(D.b3A)},
gd7(){return this.e}}
C.anA.prototype={
t(){var w=this.at
if(w!=null)w.a2(0)
w=this.ax
if(w!=null)w.a2(0)
this.a3()},
fU(d){var w,v=this
v.l(new C.bVm(v))
w=v.at
if(w!=null)w.a2(0)
v.at=A.d5(B.fr,new C.bVn(v))},
aS_(){var w=this,v=w.ax
if(v!=null)v.a2(0)
w.l(new C.bVc(w))
v=w.at
if(v!=null)v.a2(0)
w.at=A.d5(B.fq,new C.bVd(w))},
M2(d){var w
if(this.d!==D.aeP)return
w=this.at
if(w!=null)w.a2(0)
this.b8Z(d)},
b8Z(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.h.S(500+500*B.h.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bVi(u,v,d))
u=v.ax
if(u!=null)u.a2(0)
v.ax=A.cC(B.tB,v.giH(v))},
cPF(d){var w=this
if(w.d!==D.Yo)return
if(w.e+1>=w.a.w.length)w.ZF()
else{w.l(new C.bVj(w))
w.aS_()}},
ZF(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$ZF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a2(0)
p=u.x
t=u.a.w.length
s=C.bJq(p,u.w,t)
u.l(new C.bVf(u,s))
w=2
return A.b(C.Ca(u.a.e,s),$async$ZF)
case 2:r=e
t=u.a
w=3
return A.b(C.Cb(t.e,t.f,t.r,u.f),$async$ZF)
case 3:q=e
if(u.c!=null)u.l(new C.bVg(u,r,q))
return A.h(null,v)}})
return A.i($async$ZF,v)},
cQu(){var w,v,u,t,s=this,r=s.a,q=new A.e6()
q.cW(r.w.length*31+B.a.ga_(r.f))
w=s.a.w.length*900
v=A.a([new A.b1("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.e_(r,q)
for(r=A.cJ(r,0,A.dx(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bQ(r,r.gI(0),u.k("bQ<aj.E>")),u=u.k("aj.E");r.B();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b1(t,B.h.S(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bVk())
return v},
C(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b3A===r){w=A.a([D.heF,B.S,A.c(s,t,t,t,t,t,t,B.Xs,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fKG,t,t,t))
w.push(B.aB)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.BG,B.K,t,t))
w.push(B.eb)
w.push(C.uO("Play",u.gf3(u),B.d_,B.fQ,D.fL))
w=A.at(new A.C(B.ew,A.w(w,B.l,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.b3B===r){w=A.at(A.c(""+u.z,t,t,t,t,t,t,D.fT3,t,t,t),t,t,t)
break A}if(D.aeP===r||D.Yo===r){w=u.cvF()
break A}if(D.b3C===r){w=u.cfO()
break A}w=t}return new C.tY(s,w,B.fh,t)},
cvF(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Yo,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aYr,j,j,j),B.aX],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.LX,j,j,j))
g.push(B.ar)
f=A.n(14)
g.push(A.q(j,A.c(""+k.f,j,j,j,j,j,j,B.iX,j,j,j),B.f,j,j,new A.p(B.by,j,j,f,j,j,B.m),j,j,j,j,A1.Db,j,j,j))
g=A.A(g,B.l,j,B.e,B.i,0,j,j)
f=A.n(6)
w=i?0:B.h.D(k.as/k.a.w[k.e].r,0,1)
f=A.bv(f,A.jI(B.by,j,k.as<5?B.fs:B.d_,9,j,w,j),B.ap)
w=A.n(22)
v=A.K(B.d_,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.w(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.lY:G.nN,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.N,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fJI,B.K,j,j)],h),B.l,j,B.e,B.P,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fVf,B.K,j,j)
w=A.E(A.q(j,A.at(u,j,j,j),B.f,j,j,new A.p(D.r_,j,v,w,j,j,B.m),j,j,j,j,B.f7,j,j,1/0),3)
v=A.a([],h)
for(u=k.giH(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bVh(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.n.F(t,4)
n=D.aFD[o]
m=new A.aQ(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aFX[o],j,j,j,j,j,j,D.fLH,j,j,j),B.ar,new A.bu(1,B.b8,A.c(r[t],j,3,B.a2,j,j,j,D.fKD,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.atU)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c1Z)
v.push(A.aA(j,new A.TJ(A.q(j,new A.c1(B.aK,B.e,B.i,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.p(n,j,new A.bE(l,l,l,l),new A.bc(m,m,m,m),W.aE0,j,B.m),j,j,j,j,B.eU,j,j,j),p,B.b_,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.aj,f,B.af,w,B.af,A.E(A.lh(1.45,v,2,10,10,j,B.e8,!1),4)],h)
if(i)h.push(D.eHZ)
return new A.C(B.a2g,A.w(h,B.l,j,B.e,B.i,0,B.p),j)},
cfO(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cQu(),m=x.p,l=A.a([D.bfZ,A.at(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qB,o,o,o),o,o,o),A.at(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.X5,o,o,o),o,o,o),B.aN],m)
for(w=0;w<n.length;++w){v=n[w].c?B.d_.j(0.25):B.dA
u=new A.aQ(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.d_:B.by,1,B.r,-1)
q=A.c(w<3?D.dqh[w]:""+(w+1),o,o,o,o,o,o,B.mf,o,o,o)
s=s?B.u:B.O
l.push(A.q(o,new A.c1(B.aK,B.e,B.i,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bu(1,B.b8,A.c(t.a,o,o,o,o,o,o,new A.G(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.iX,o,o,o)],m),o),B.f,o,o,new A.p(v,o,new A.bE(r,r,r,r),new A.bc(u,u,u,u),o,o,B.m),o,o,o,B.cB,B.f_,o,o,o))}l.push(B.S)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.IU(m,v,p.CW,o))
l.push(B.aN)
l.push(A.at(C.uO("Back to the games",new C.bVe(p),B.d_,B.km,D.fL),o,o,o))
return A.co(l,o,o,B.f7,o,o,B.ah,!1)}}
C.US.prototype={
R(){return new C.anw(A.S(x.de,x.er))}}
C.anw.prototype={
gDQ(){var w,v=this,u=v.d
if(u===$){w=C.hy4(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gm3(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDQ().b
v=$.ay()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.bb(w,B.b9,B.aP),v)}return t},
cj0(d){return this.f.c0(0,d,new C.bUN(d))},
Z(){this.a4()
var w=this.gDQ().c
if(w.length===0)w.push(C.hjk(null,0,20,""))},
t(){var w,v,u=this.gm3(0)
u.V$=$.ay()
u.W$=0
for(u=this.f,u=new A.du(u,u.r,u.e);u.B();)for(w=J.aO(u.d);w.B();){v=w.gP(w)
v.V$=$.ay()
v.W$=0}this.a3()},
cPv(){if(this.gDQ().c.length>=12)return
this.l(new C.bUO(this))},
jC(d){var w,v,u=this,t=u.gDQ()
t.b=B.a.i(u.gm3(0).a.a)
w=t.garf(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.T(D.fCD)
return}v=t.c
B.d.a7(v)
B.d.u(v,w)
v=u.c
v.toString
A.a8(v,!1).N(t)},
C(d){var w,v,u=this,t=null,s=new C.bUY(),r=x.p,q=A.a([A.bL(!1,D.h3P,t,t,!0,t,t,t,u.gbt0(u),t,t)],r),p=A.a([D.hiU,B.af,A.aN(t,B.M,!1,t,!0,B.t,t,A.aP(),u.gm3(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.am,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ae,t,t,t,t,t,t,t,t,t,t,t,B.hi,!0,B.a7,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gDQ().c.length,w<v;++w)B.d.u(p,A.a([new A.fo(new C.bUX(u,w,s),t)],r))
if(v<12)p.push(A.at(C.uO("\uff0b Add a question",u.gcPu(),B.aT,t,B.c),t,t,t))
return new C.tY("Make your game",A.co(p,t,t,D.bHV,t,t,B.ah,!1),q,t)}}
C.asH.prototype={
R(){return new C.aGY(A.a([],x._))},
bw(){return this.r.$0()},
qD(){return this.w.$0()},
geb(){return this.c}}
C.aGY.prototype={
Z(){var w,v
this.a4()
this.wS()
w=this.a
v=w.c
if(v.length!==0)C.a9r(v,w.e,w.d.w)},
wI(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.huY(r,t.e,!1,s.w,new C.e94(u),null,s),$async$wI)
case 2:w=3
return A.b(u.wS(),$async$wI)
case 3:return A.h(null,v)}})
return A.i($async$wI,v)},
a20(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a20=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.huY(r,t.e,!0,s.w,new C.e93(u),null,s),$async$a20)
case 2:w=3
return A.b(u.wS(),$async$a20)
case 3:return A.h(null,v)}})
return A.i($async$a20,v)},
wS(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wS=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BG(q.a.c),$async$wS)
case 7:p=e
if(q.c!=null)n=q.e||J.cM(p)
else n=!1
if(n)q.l(new C.e96(q,p))
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
return A.b(C.HP(q.a.c).d8(0,B.rc),$async$wS)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.e97(q,o))
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
if(q.c!=null&&q.e)q.l(new C.e98(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wS,v)},
Q7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Q7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.T(D.fCd)
w=3
return A.b(C.HP(t.a.c),$async$Q7)
case 3:r=e
w=4
return A.b(C.h8F(t.a.c,r),$async$Q7)
case 4:q=e
w=5
return A.b(C.HP(t.a.c),$async$Q7)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.e92(t,p))
o=t.c.L(s).f
s=A.c(q?"Family trees synced \u2014 "+J.aa(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dT:B.d9,null,B.t,null,s,null,B.lC,null,null,null,null,null,null,null,null,null,null))
t.a.qD()
case 1:return A.h(u,v)}})
return A.i($async$Q7,v)},
Jf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Jf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iHA(l),$async$Jf)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.i92(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b3q(q,p.e,l,"Each family tree costs $"+B.h.a1(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Jf)
case 4:if(!e||t.c==null){w=1
break}l=B.n.v(1000*Date.now())
p=C.hPv(r)
o=Date.now()
n=t.a.c
m=new C.lg(l,r.toUpperCase(),p,!0,B.M,D.Ew,new A.W(o,0,!1),0,n,D.vq,B.co)
w=5
return A.b(C.a55(n,m),$async$Jf)
case 5:w=6
return A.b(t.wS(),$async$Jf)
case 6:t.a.bw()
t.a.qD()
if(t.c==null){w=1
break}t.FK(m)
case 1:return A.h(u,v)}})
return A.i($async$Jf,v)},
FK(d){return this.co8(d)},
co8(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$FK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.BG(u.a.c),$async$FK)
case 2:n=l.nT(k.dO(f,new C.e95(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.he(m,new C.asB(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$FK)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a55(u.a.c,o),$async$FK)
case 6:case 5:w=7
return A.b(u.wS(),$async$FK)
case 7:u.a.qD()
return A.h(null,v)}})
return A.i($async$FK,v)},
C(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=new C.uz(p)
if(r.e)return A.at(A.nn(q,p?B.bv:B.bl,q,q,q,q,q,q,q,q),q,q,q)
if(J.cj(r.d)){w=p?B.el:B.c
v=A.n(15)
u=A.aE(!1,B.a3,!0,q,A.aM(!1,q,!0,A.q(q,D.c_u,B.f,q,q,new A.p(B.aW.j(0.12),q,A.K(B.aW,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cM,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcn8(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.GQ(A.q(q,A.w(A.a([u,B.aN,t,B.N,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bl,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.eb,A.bH(D.hmb,q,r.gaVk(),A.bp(B.bU,q,q,q,q,q,B.a2G,q,new A.ba(A.n(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.i,0,B.p),B.f,q,q,new A.p(w,q,q,v,q,q,B.m),q,q,q,q,D.bKD,q,q,1/0),15,B.ag,1.05,D.aeC,q)}w=J.aa(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aX],v)
if(J.cM(r.d))w.push(A.aJ(q,q,q,q,A.V(B.Am,B.aW,q,q,q,q),q,q,q,new C.e9a(r),q,q,q,q,"Sync family trees with database",q))
if(J.cM(r.d))w.push(A.aJ(q,q,q,q,A.V(B.Ai,B.aW,q,q,q,q),q,q,q,r.gaiJ(),q,q,q,q,"Transfer / backup file",q))
w.push(A.df(E.auR,q,D.h15,r.gaVk(),A.bp(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.aa(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.GQ(r.cLC(J.t(r.d,s),o),14,B.ag,1,D.aeC,q))
B.d.u(w,u)}return A.w(A.a([p,B.aB,A.w(w,B.l,q,B.e,B.i,0,B.p)],v),B.B,q,B.e,B.i,0,B.p)},
cLC(d,e){var w=null,v=e.a,u=v?B.el:B.c,t=A.n(14),s=A.K((v?B.eo:B.bP).j(0.55),B.r,1),r=A.a([new A.ac(0,B.H,B.v.j(v?0.35:0.08),B.eF,10)],x.V),q=A.n(14),p=A.q(w,D.bZz,B.f,w,w,new A.p(B.aW.j(0.15),w,w,A.n(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gasf(),m=d.d?"":" \xb7 Public",l=d.y===D.le?" \xb7 View only":"",k=x.p
l=A.E(A.w(A.a([o,B.bs,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.B,w,B.e,B.i,0,B.p),1)
return A.q(w,A.aE(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.C(B.bD,A.A(A.a([p,B.bc,l,A.V(B.Qa,v?B.bv:B.bl,w,w,w,w)],k),B.l,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e99(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.p(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.asB.prototype={
R(){return new C.aGV(A.a([],x._),A.aR(x.N),A.bcf())},
bw(){return this.r.$0()},
geb(){return this.c}}
C.aGV.prototype={
Z(){var w,v,u=this
u.a4()
u.d=u.a.w
u.afg()
w=u.a
v=w.c
if(v.length!==0)C.a9r(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.ay()
w.W$=0
this.a3()},
a57(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a57=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.z0("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e8v(r),s,null,!0,!0,x.y),$async$a57)
case 3:if(e!==!0||t.c==null){w=1
break}t.KX()
t.l(new C.e8w(t,r))
w=4
return A.b(t.uQ(),$async$a57)
case 4:t.a.bw()
t.z0(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a57,v)},
cAZ(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aS.U$.push(new C.e8q(w,f,d,e))},
aXE(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dA()
u.ek(w,v,0,1)
u.kb(q,q,1,1)
this.w.sp(0,u)},
bfH(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eU(new Float64Array(16))
q.ef(r)
w=q.DV()
v=B.h.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dA()
t.ek(r,u,0,1)
t.kb(v,v,1,1)
t.ek(-r,-u,0,1)
t.j3(0,q)
s.sp(0,t)},
afg(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$afg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.BG(u.a.c),$async$afg)
case 2:t=s.nT(r.dO(e,new C.e7S(u)))
if(t!=null&&u.c!=null)u.l(new C.e7T(u,t))
return A.h(null,v)}})
return A.i($async$afg,v)},
z0(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
wI(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.d()
w=2
return A.b(C.huY(o,t,!1,r,new C.e89(u),q.a,s),$async$wI)
case 2:n=A
m=J
w=3
return A.b(C.HP(u.a.c),$async$wI)
case 3:p=n.nT(m.dO(e,new C.e8a(u)))
if(p!=null&&u.c!=null)u.l(new C.e8b(u,p))
return A.h(null,v)}})
return A.i($async$wI,v)},
KX(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cP(w,0)},
uQ(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a55(t,s),$async$uQ)
case 2:return A.h(null,v)}})
return A.i($async$uQ,v)},
a3A(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a3A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uP(q,t.a.c)){t.z0("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iIQ(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a3A)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.KX()
t.l(new C.e8p(t,r))
w=4
return A.b(t.uQ(),$async$a3A)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3A,v)},
b5C(){var w=this.c
w.toString
A.a8(w,!1).c9(A.e4(new C.e86(this),!1,null,x.H))},
a2g(){return this.coa()},
coa(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a2g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.d()
if(!C.uP(m,t.a.c)){t.z0("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.Q(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.X(s,new C.e8m(),A.U(s).k("X<1>")).gI(0)
s=A.eC([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("ck.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bV(B.L,null,new C.e8n(n,t,new C.uz(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a2g)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.KX()
t.l(new C.e8o(t,o))
w=6
return A.b(t.uQ(),$async$a2g)
case 6:case 5:if(o.a&&t.c!=null)t.b5C()
case 1:return A.h(u,v)}})
return A.i($async$a2g,v)},
XE(d){return this.bGC(d)},
bGC(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uP(r,t.a.c)){t.z0("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e7G(t,d),r,null,!0,!0,x.P),$async$XE)
case 3:s=f
if(s==null){w=1
break}t.KX()
t.l(new C.e7H(t,s))
w=4
return A.b(t.uQ(),$async$XE)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XE,v)},
a5s(d){return this.cNT(d)},
cNT(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a5s=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.Q(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.e8y(u,d,new C.uz(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a5s)
case 2:return A.h(null,v)}})
return A.i($async$a5s,v)},
ckd(d){var w=this,v=w.d
v===$&&A.d()
if(C.uP(v,w.a.c))w.PN(d)
else w.a5s(d)},
alc(d,e){return this.cF1(d,e)},
cF1(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$alc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.Q(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.e8s(new C.uz(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$alc)
case 3:case 1:return A.h(u,v)}})
return A.i($async$alc,v)},
Jk(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Jk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.le?3:5
break
case 3:w=6
return A.b(C.hhv(t.a.c),$async$Jk)
case 6:s=e
o=t.a
r=C.hCX(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.alc(!s,!r),$async$Jk)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aSZ(o,t.a.c)){t.z0("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lG(o,"Cancel","Remove",q.y===D.le?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Jk)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aSX(t.a.c,t.d.a),$async$Jk)
case 11:t.a.bw()
o=t.c
if(o==null){w=1
break}A.j5(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Jk,v)},
acG(d){return this.bS5(d)},
bS5(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$acG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uP(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aR(s,new C.e7I(p))){o=A.U(s)
p.a=A.nT(new A.cR(new A.X(s,new C.e7J(d),o.k("X<1>")),new C.e7K(),o.k("cR<1,o>")))}q=p.a
if(q==null)q=d.d
t.KX()
t.l(new C.e7L(t,s,d,q))
w=3
return A.b(t.uQ(),$async$acG)
case 3:t.z0(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$acG,v)},
PN(d){return this.bUj(d)},
bUj(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$PN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uP(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a5s(d),$async$PN)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.e7P(t,d),r,null,!0,!0,x.P),$async$PN)
case 6:s=f
if(s==null){w=1
break}t.KX()
t.l(new C.e7Q(t,s))
w=7
return A.b(t.uQ(),$async$PN)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PN,v)},
cM3(){var w=this,v=w.d
v===$&&A.d()
if(!C.uP(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.e8x(w))
w.uQ()},
a_K(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_K=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aSZ(n,t.a.c)){t.z0("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.Q(n)
s=$.ay()
r=new A.au(B.ay,s)
q=t.d.e
p=A.bt(new A.O(q,t.gciH(),A.U(q).k("O<1,o>")).c1(0,new C.e81()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e82(t,new C.uz(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_K)
case 3:o=e
r.V$=s
r.W$=0
if(o!==!0||t.c==null){w=1
break}t.KX()
t.l(new C.e83(t,p))
w=4
return A.b(t.uQ(),$async$a_K)
case 4:t.z0("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_K,v)},
ciI(d){return B.a.i(d.toLowerCase())},
cmQ(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uP(v,w)
t=r.d
s=C.ixm(t)
C.iHE(q,t.b,u,C.ixl(r.d),s,v.a,w)},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uz(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.X(l,new C.e8F(),A.U(l).k("X<1>")).gI(0)
l=n?B.c7:B.hX
v=A.V(B.a3Q,n?B.bv:B.bl,o,o,o,18)
u=x.p
v=A.a([new A.C(A_.Dc,A.aM(!1,o,!0,new A.C(B.hA,A.A(A.a([v,B.b7,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e8G(p,d),o,o,o,o,o,o,o),o),new A.C(B.o6,p.c4A(m),o)],u)
if(p.d.y===D.le){t=B.u9.j(0.15)
s=A.n(12)
r=A.K(B.u9.j(0.45),B.r,1)
q=C.HN(p.d,p.a.c)
v.push(new A.C(B.zy,A.q(o,A.A(A.a([D.c48,B.ar,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(t,o,r,s,o,o,B.m),o,o,o,o,B.hp,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,15,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aX],u)
if(C.uP(p.d,p.a.c)&&p.e.length!==0)u.push(new C.H0("Undo",B.q7,p.gcM2(),m,o,o))
u.push(new C.H0("Family Book",E.arz,p.gcmP(),m,B.v0,o))
u.push(new C.H0("Family games",B.of,p.gcn0(),m,B.az,o))
if(C.uP(p.d,p.a.c))u.push(new C.H0("Display settings",B.E1,p.gco9(),m,B.b6,o))
u.push(new C.H0("Sync",B.Ai,p.gaiJ(),m,o,o))
t=p.d
if(t.y===D.le||C.aSZ(t,p.a.c)){t=p.d.y===D.le?"Remove shared tree":"Delete tree"
u.push(new C.H0(t,B.eq,p.gbSf(),m,B.fs,o))}if(C.uP(p.d,p.a.c))u.push(new C.H0("Add member",B.xw,new C.e8H(p),m,B.bU,o))
v.push(new A.C(S.aop,A.A(u,B.l,o,B.e,B.i,0,o,o),o))
if(p.d.gasf()===0){u=A.at(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cg(new C.e8I(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.V(n?B.a3U:B.Qb,o,o,o,o,o)
v.push(A.at(A.hy(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e8J(p),o),o,o,o))}return A.c6(o,l,A.bn(!0,A.w(v,B.B,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c4A(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.n(22)
v=A.a([new A.ac(0,B.H,B.h7.j(0.35),B.dv,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.V(B.A9,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aE(!1,B.a3,!0,m,A.aM(!1,m,!0,A.q(m,D.c7u,B.f,m,m,new A.p(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cM,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaiJ(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fMM,m,m,m)
r=r.gasf()
p=n.d.gasf()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.w(A.a([q,B.bs,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.B,m,B.e,B.i,0,B.p),1)],o)
if(C.uP(n.d,n.a.c))p.push(A.aJ(m,m,m,m,D.c4n,m,m,m,n.gcye(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.j8:B.np
r=r?"Private":"Public"
r=A.E(n.ayO(q,"Privacy",r,n.a.d.w?n.gcKU():m),1)
q=A.E(n.ayO(B.xB,"Tree code",n.d.c,new C.e7R(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.aa,q,B.aa,A.E(n.ayO(D.bVM,"Collaborators",p,n.gc9E()),1)],o),B.l,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.le){s=B.c.j(0.15)
B.d.u(p,A.a([B.N,A.aE(!1,B.a3,!0,A.n(999),A.aM(!1,A.n(999),!0,new A.C(B.h0,A.A(A.a([A.V(B.og,B.c,m,m,m,14),B.dY,A.c("View only",m,m,m,m,m,m,B.ad3,m,m,m)],o),B.l,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.q(m,A.bv(u,new A.am(B.a0,m,B.ac,B.t,A.a([t,new A.C(B.HQ,A.w(p,B.B,m,B.e,B.i,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.p(m,m,m,w,v,D.cbQ,B.m),m,m,m,m,m,m,m,1/0)},
ayO(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aE(!1,B.a3,!0,A.n(14),A.aM(!1,A.n(14),!0,new A.C(K.apM,A.w(A.a([A.V(d,B.c,w,w,w,18),B.at,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rR,A.c(f,w,1,B.a2,w,w,w,Aq.y9,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bj9.prototype={
C(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gar(r)&&s.c.length===0)return B.bK
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bjc(s,t),new A.av(w,v))],x.p)
r=r.gdW(r)
B.d.u(u,r.dS(r,new C.dlH(this),x.l))
r=s.c
B.d.u(u,new A.O(r,new C.dlI(this),A.U(r).k("O<1,x>")))
return new A.C(B.vn,new A.a5(w,v,new A.am(B.a0,t,B.ac,B.f,u,t),t),t)}}
C.Lm.prototype={}
C.H4.prototype={}
C.bjb.prototype={
gboh(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aMI.prototype={}
C.bjc.prototype={
bTV(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.T()
v=A.L()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.ah(new A.m(n,w),new A.m(m,w),v)
u=(n+m)/2
t=new A.aI(q.r,B.ak,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.i6(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.i6(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bz())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.m(u,w),9,q)
q=A.L()
q.r=B.bE.gp(0)
d.af(t,q)},
bTS(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.dm1())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aR(a0,new C.dm2(f))
t=new A.O(a0,new C.dm3(f),A.U(a0).k("O<1,H>")).c1(0,new C.dm4()).cF(0,1/0,B.pD)
w=f.a
d.ah(f,new A.m(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.m(o,v),p,e)
continue}l=J.m9(n)
k=Math.min(10,m/2)
m=$.T()
j=A.a([],r)
i=new A.aI(m.r,B.ak,null,null,j)
j.push(new A.aZ(w,v-k))
i.ac()
m=l*k
h=new A.cm(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ac()
m=new A.cm(o,v,o,v+k)
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
a5(d,e){var w,v,u,t,s,r
$.T()
w=A.L()
w.r=B.bU.j(0.75).gp(0)
w.c=2.2
w.b=B.ad
w.d=B.bG
w.e=B.dQ
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bTS(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bTV(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.bn_.prototype={
gcfQ(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aGf
switch(w.c.a){case 0:return D.d5F
case 1:return D.djr
case 2:return D.dD7}},
gcfT(){var w=this.c,v=C.hOI(w.w),u=C.hOI(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
C(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=t.gcfQ(),p=t.c,o=A.bI_(p.f),n=t.gcfT(),m=x.V,l=A.a([new A.ac(0,B.H,B.d.gal(q).j(0.35),B.cN,10)],m),k=r?B.ax:B.c,j=A.K(r?B.ax:B.c,B.r,2)
if(o!=null)w=A.u1(B.z,s,B.cr,B.c0,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.q(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(s,s,s,s,s,new A.a6(B.a5,B.a9,B.w,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.q(s,A.q(s,A.ic(w,B.ap),B.f,s,s,new A.p(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.p(s,s,s,s,l,new A.a6(B.aw,B.aD,B.w,q,s,s),B.a6),s,56,s,s,B.Dq,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.K(r?B.ax:B.c,B.r,1.5)
l.push(A.ao(s,A.q(s,A.c(""+k,s,s,s,s,s,s,D.fXN,s,s,s),B.f,s,s,new A.p(B.ci,s,w,j,s,s,B.m),s,s,s,s,D.bMz,s,s,s),s,s,s,-6,-4,s))}k=r?B.cx:B.c
j=A.n(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.H,B.v.j(r?0.3:0.06),B.dP,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cx,s,s,s,s,s,s,s,s,u,s,s,B.C,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bl,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a5(84,112,A.w(A.a([new A.am(B.a0,s,B.ac,B.f,l,s),B.at,A.q(s,A.w(p,B.l,s,B.e,B.P,0,B.p),B.f,s,D.ba6,new A.p(k,s,w,j,m,s,B.m),s,s,s,s,D.bMK,s,s,s)],v),B.l,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bic.prototype={
a5(d,e){var w,v,u,t,s
$.T()
w=A.L()
v=this.b
u=v?B.c:D.bnj
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.m(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.bBb.prototype={
C(d){var w=this,v=null,u=new C.fwR(w),t=w.c,s=t?B.cx:B.c,r=A.n(12),q=u.$3(B.ig,"Zoom in",w.d),p=A.q(v,v,B.f,t?B.by:B.fA,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xy,"Zoom out",w.e)
return A.aE(!1,B.a3,!0,r,A.w(A.a([q,p,o,A.q(v,v,B.f,t?B.by:B.fA,v,v,v,1,v,v,v,v,v,22),u.$3(B.asf,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dJ,v,v,v,B.ai)}}
C.bqn.prototype={
C(d){var w=this,v=null,u=B.bU.j(0.15),t=A.K(B.bU,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.q(v,A.w(A.a([A.V(s?B.a3U:B.Qb,B.bU,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fTJ,v,v,v)],r),B.l,v,B.bb,B.i,0,B.p),B.f,v,v,new A.p(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.aj,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fRu,B.K,v,v)],r)
if(s){t=A.a([B.aj],r)
s=w.d
B.d.u(t,new A.O(s,new C.f6D(w),A.U(s).k("O<1,x>")))
B.d.u(u,t)}return new A.a5(84,v,A.w(u,B.l,v,B.e,B.i,0,B.p),v)}}
C.a1f.prototype={
R(){return new C.aFl()},
bw(){return this.Q.$0()},
geb(){return this.w}}
C.aFl.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a4()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ay()
r.d!==$&&A.aT()
r.d=new A.au(new A.bb(t,B.b9,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aT()
r.e=new A.au(new A.bb(t,B.b9,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aT()
r.f=new A.au(new A.bb(t,B.b9,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aT()
r.r=new A.au(new A.bb(t,B.b9,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aT()
r.w=new A.au(new A.bb(t,B.b9,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aT()
r.x=new A.au(new A.bb(t,B.b9,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zM:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.iyU(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.d()
w=u.V$=$.ay()
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
v.a3()},
Rl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Rl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hCX(p.y,p.w)
w=3
return A.b(A.lY(t.a.w,B.Kv),$async$Rl)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b3q(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Rl)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.i93(p.y,p.w)
t.a.bw()
case 5:w=7
return A.b(A.E4(78,800),$async$Rl)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dCk(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Rl,v)},
cfS(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.d()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.id(B.n.v(1000*Date.now()),w,D.zM,null,null,null,"","","","","",1,!1,0)
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
s=v.aIa(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a8(k,!1).N(s)},
ach(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ach=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dCj(r),s,null,!0,!0,x.y),$async$ach)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a8(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$ach,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.I,i=new C.uz(j),h=l.a.e,g=A.U(h).k("X<1>"),f=A.B(new A.X(h,new C.dCt(l),g),g.k("M.E"))
h=j?B.el:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bKY,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hb(A.aM(!1,k,!0,new A.C(B.m5,A.V(B.eq,B.pQ,k,k,k,17),k),B.cM,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbOL(),k,k,k,k,k,k,k),k,"Delete member",k,k,k),k,k,k,0,k,k))
u=j?B.kb:B.iM
t=A.bI_(l.as)
if(l.as==null)s=A.V(B.q0,j?B.bv:B.bl,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.am(B.a0,k,B.ac,B.t,A.a([A.hp(u,t,s,k,42),A.ao(0,A.hp(B.bU,k,D.bYC,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcfP(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aFn(t,"Full name",B.mB,1,1,i,B.mS)
u=l.y
u===$&&A.d()
u=A.w(A.a([t,B.S,new C.bmY(i,u,new C.dCu(l),k)],v),B.l,k,B.e,B.i,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.C,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bEk],q)
o=l.a.e
B.d.u(p,new A.O(o,new C.dCv(),A.U(o).k("O<1,eR<o?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.C,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bEm],q)
B.d.u(q,new A.O(f,new C.dCx(),A.U(f).k("O<1,eR<o?>>")))
o=A.w(A.a([t,B.aj,new C.afz(i,r,"Who is their parent?",p,new C.dCy(l),k,o),B.aB,n,B.aj,new C.afz(i,m,"Who is their spouse / partner?",q,new C.dCz(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.d()
q=C.aFn(q,"Birth date",D.arp,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aFn(m,"Birth place",B.a4a,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aFn(n,"Date of death (if deceased)",D.atx,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aFn(p,"Occupation",Y.Rj,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.am(B.z,k,B.ac,B.t,w,k),B.aB,s,B.bx,new C.afA(i,"Identity",u,k),B.af,new C.afA(i,"Family links",o,k),B.af,new C.afA(i,"Life details",A.w(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aFn(r,"Notes",B.lg,5,3,i,k)],v),B.l,k,B.e,B.i,0,B.p),k),B.af,new C.aFm(i,"Child order",l.coq(l.at),new C.dCA(l),new C.dCB(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hrU(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dCC(l):k
B.d.u(r,A.a([B.S,new C.aFm(i,"Visible in tree",u,w,new C.dCD(l),k)],v))}r.push(B.S)
w=j?B.kb:B.iM
u=A.n(14)
t=A.K(j?B.eo:B.bP,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.q(k,A.je(k,B.bU,k,B.ag,k,new C.dCE(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.p(w,k,t,u,k,k,B.m),k,k,k,k,B.ao2,k,k,k))
r.push(B.bx)
w=j?B.aS:B.ax
j=j?B.eo:B.bP
r.push(A.A(A.a([A.E(A.dV(B.ox,new C.dCw(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.ba(A.n(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bH(D.ftN,k,l.gcfR(),A.bp(B.aW,k,k,0,B.c,k,B.cq,k,new A.ba(A.n(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.i,0,k,k))
r.push(B.at)
return A.ek(B.fh,k,B.ag,h,new A.a5(420,k,A.cc(A.w(r,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.ap_,k,B.aoe,new A.ba(g,B.a1),k,k)},
coq(d){var w=B.n.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.n.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.afA.prototype={
C(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.C,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.kb:B.iM,s=A.n(16)
return A.w(A.a([new A.C(B.a2K,u,w),A.q(w,this.e,B.f,w,w,new A.p(t,w,A.K(v?B.eo:B.bP,B.r,1),s,w,w,B.m),w,w,w,w,B.bg,w,w,1/0)],x.p),B.B,w,B.e,B.i,0,B.p)}}
C.bmZ.prototype={
C(d){var w,v=this,u=null,t=v.c.a,s=t?B.el:B.c,r=A.n(12),q=A.K((t?B.eo:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aS:B.ax,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.q(u,A.aN(u,B.M,!1,u,!0,B.t,u,A.aP(),v.d,u,u,u,u,u,2,A.bC(u,B.eX,u,B.tI,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bv:B.bl,u,u,u,u,u,u,u,u,u,u,u,B.cE,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.am,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ae,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.p(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.afz.prototype={
C(d){var w=this,v=null,u=w.c.a,t=u?B.el:B.c,s=A.n(12),r=A.K((u?B.eo:B.bP).j(0.85),B.r,1),q=A.V(B.tR,u?B.bv:B.bl,v,v,v,v),p=A.l(v,v,u?B.aS:B.ax,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.el:B.c
return A.q(v,new A.ET(A.a6C(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,v,v,v,B.cE,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.p(t,v,r,s,v,v,B.m),v,v,v,v,B.lc,v,v,v)}}
C.bmY.prototype={
C(d){var w=new C.dCF(this)
return A.A(A.a([w.$3(D.xj,"Male",B.R1),B.aa,w.$3(D.p_,"Female",B.QM),B.aa,w.$3(D.zM,"Other",B.od)],x.p),B.l,null,B.e,B.i,0,null,null)}}
C.aFm.prototype={
C(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.kb:B.iM,r=A.n(14),q=A.K(t?B.eo:B.bP,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aS:B.ax,v,v,v,v,v,v,v,v,13,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.q(v,A.A(A.a([A.E(A.w(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.B,v,B.e,B.i,0,B.p),1),new C.aLK(u,B.xy,w.f,v),B.b7,new C.aLK(u,B.ig,w.r,v)],o),B.l,v,B.e,B.i,0,v,v),B.f,v,v,new A.p(s,v,q,r,v,v,B.m),v,v,v,v,B.ep,v,v,v)}}
C.aLK.prototype={
C(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bU.j(0.12)
else w=s.c.a?B.el:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bU
else t=(s.c.a?B.bv:B.bl).j(0.4)
return A.aE(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a5(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.afB.prototype={
bY7(d){switch(d.a){case 0:return B.bU
case 1:return B.bE
case 2:return B.cG}},
bY8(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b1a(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Bi(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.el:B.c
u=A.n(12)
t=A.K((w?B.eo:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.V(f,B.bU,p,p,p,18),B.ar],s))
q=A.c(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bl,p,p,p,p,p,p,p,p,9,p,p,B.C,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.w(A.a([q,B.at,A.c(o,p,p,p,p,p,p,A.l(p,p,w?B.aS:B.ax,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.B,p,B.e,B.i,0,B.p),1))
return A.q(p,A.A(r,B.B,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(v,p,t,u,p,p,B.m),p,p,p,B.cB,B.zv,p,p,1/0)},
ah3(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.C,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.kb:B.iM,s=A.n(16),r=A.K(v?B.eo:B.bP,B.r,1)
return A.w(A.a([new A.C(B.a2K,u,w),A.q(w,A.w(e,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(t,w,r,s,w,w,B.m),w,w,w,w,B.bS,w,w,1/0)],x.p),B.B,w,B.e,B.i,0,B.p)},
C(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hUj(r,q),o=q.c,n=t.bY7(o),m=A.bI_(q.f),l=t.e.a,k=l?B.el:B.c,j=A.n(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aS:B.ax,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.le?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bv:B.bl,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ac(0,B.H,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.q(s,A.hp(u,m,m==null?A.V(B.q0,n,s,s,s,48):s,s,52),B.f,s,s,new A.p(s,s,w,s,v,s,B.a6),s,s,s,s,B.eD,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.K(n.j(0.45),B.r,1)
v=A.at(A.q(s,A.c(t.bY8(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(w,s,u,v,s,s,B.m),s,s,s,s,B.lE,s,s,s),s,s,s)
u=x.p
i=A.a([t.Bi("Full name",i,B.mB)],u)
if(p>0)i.push(t.Bi("Child order","#"+p,B.QS))
r=A.a([h,B.at,r,B.aN,l,B.S,v,B.bx,t.ah3("Identity",i),B.af,t.ah3("Life details",A.a([t.Bi("Birth date",q.w,D.arp),t.Bi("Birth place",q.x,B.a4a),t.Bi("Date of death",q.y,D.atx),t.Bi("Occupation",q.z,Y.Rj)],u)),B.af,t.ah3("Family links",A.a([t.Bi("1. Parent",t.b1a(q.d),B.Ig),t.Bi("2. Spouse",t.b1a(q.e),B.Ix)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.ah3("Notes",A.a([t.Bi("Notes",q,B.lg)],u))],u))
r.push(B.bx)
r.push(A.bH(B.M3,s,new C.dCP(d),A.bp(B.aW,s,s,s,s,s,B.cq,s,new A.ba(A.n(14),B.a1),s,s,s)))
return A.eB(s,k,new A.cQ(B.mm,A.cc(A.w(r,B.al,s,B.e,B.P,0,B.p),B.t,s,B.y,s,s,B.xd,s,s,B.ah),s),s,s,s,B.HT,s,B.db,s,new A.ba(j,B.a1),s)}}
C.H0.prototype={
C(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.bl
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.tL,A.hb(A.aE(!1,B.a3,!0,A.n(8),A.aM(!1,A.n(8),!0,new A.a5(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u,u),u)}}
C.asE.prototype={
f6(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("O<1,a9<o,@>>")
w=A.B(new A.O(w,new C.cin(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j2(w,new C.cio(),t,x.fO))
return s}}
C.asF.prototype={
R(){return new C.aGX(A.a([],x.bF))},
gd7(){return this.c}}
C.aGX.prototype={
Z(){this.a4()
this.L3()},
L3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$L3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cir(t.a.c),$async$L3)
case 3:r=e
w=4
return A.b(C.BG(t.a.c),$async$L3)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rI(q,new C.e8S(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.e8T(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$L3,v)},
zC(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
LU(d,e){return this.cOB(d,e)},
cOB(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$LU=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.e8X(q,e))
t=3
w=6
return A.b(d.$0(),$async$LU)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.e8Y(q))
$.eY.mT()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LU,v)},
Zs(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pW(r,s.c,s.e),$async$Zs)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.LU(new C.e8P(t),"Preparing download\u2026"),$async$Zs)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zs,v)},
Zw(d){return this.bVY(d)},
bVY(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pW(r,s.c,s.e),$async$Zw)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.LU(new C.e8Q(t,d),"Preparing file\u2026"),$async$Zw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zw,v)},
aj5(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aj5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.y6.cr().NB(B.U9,B.vr,!0),$async$aj5)
case 7:r=e
o=r
q=o==null?null:J.eK(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
o=A.k0(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ad(m)
$.an.$1("[family tree sync pick] file_picker: "+A.v(p))
w=6
break
case 3:w=2
break
case 6:u=A.HV()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aj5,v)},
a_9(d){return this.c5v(d)},
c5v(d){var w=0,v=A.j(x.H),u=this
var $async$a_9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.LU(new C.e8R(u,d),"Restoring family trees\u2026"),$async$a_9)
case 2:return A.h(null,v)}})
return A.i($async$a_9,v)},
a_8(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aj5(),$async$a_8)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.a_9(s),$async$a_8)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_8,v)},
a4u(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pW(r,s.c,s.e),$async$a4u)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.LU(new C.e8W(t),"Creating QR code\u2026"),$async$a4u)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a4u,v)},
a43(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a43=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.E2()){t.zC("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a8(s,!1).c9(A.e4(new C.e8U(),!0,null,x.N)),$async$a43)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.a_9(r),$async$a43)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a43,v)},
C(d){var w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===B.I,n=o?B.CA:B.hX,m=o?D.amu:B.aS,l=o?B.aM:B.bP,k=o?B.aS:B.ax,j=new C.dm5(n,m,l,k,o?B.bQ:B.bl)
l=A.aJ(p,p,p,p,A.V(B.eE,k,p,p,p,20),p,p,p,new C.e9_(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eQ(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dlE(!0,B.jI,B.aH,B.aH,q.r?p:q.gcEQ(),j,s,"Show restore QR"),1),B.ar],u))}s=q.e
r=q.r?p:q.gcAT()
t.push(A.E(C.dlE(!s,B.jJ,B.b0,B.bj,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dlE(!1,B.hP,B.aW,B.bU,q.r?p:q.gbVR(),j,"Photos & books included","Download all trees"),1),B.ar],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dlE(!1,Q.Aj,B.as,B.aQ,q.r?p:q.gc5s(),j,s,"Upload backup file"),1))
l=A.a([new C.bja(v,l,p),B.lp,new C.aeP(j,"QR restore",p),B.S,t,B.df,new C.aeP(j,"Backup files",p),B.S,A.A(r,B.l,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.aa(q.d)>1&&q.a.f==null){v=A.a([B.lp,new C.aeP(j,"One tree",p),B.S],u)
B.d.u(v,J.b8(q.d,new C.e90(q,j),x.l))
B.d.u(l,v)}l=A.a([A.co(l,p,p,At.a2C,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.K(B.aW.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.H,B.v.j(o?0.3:0.1),B.dv,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bn(!0,A.q(p,A.A(A.a([Au.aWO,B.bc,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(m,p,t,v,s,p,B.m),p,p,p,p,A2.Di,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.am(B.a0,p,B.ac,B.t,l,p),p,!1,!1,p,p)}}
C.dm5.prototype={}
C.bja.prototype={
C(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.H,B.aW.j(0.32),B.kx,28)],x.V)
t=A.ao(p,A.V(B.vK,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.q(p,new A.am(B.a0,p,B.ac,B.t,A.a([t,new A.C(B.ae,A.A(A.a([A.q(p,D.c6Z,B.f,p,p,new A.p(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.pq,A.E(A.w(A.a([D.h28,B.N,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.B,p,B.e,B.i,0,B.p),1)],q),B.B,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.p(p,p,p,v,u,D.cfe,B.m),p,p,p,p,p,p,p,p)}}
C.aeP.prototype={
C(d){var w=null
return A.A(A.a([A.q(w,w,B.f,w,w,new A.p(B.aW,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3),B.aa,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.bj8.prototype={
C(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.H,B.aH.j(0.1),B.cN,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aE(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eM(A.d3(new A.C(E.a2d,A.w(A.a([A.q(q,A.V(r.d,t,q,q,q,22),B.f,q,q,new A.p(v,q,s,u,q,q,B.m),q,q,q,q,B.tM,q,q,q),B.af,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bs,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cE,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.B,q,B.e,B.i,0,B.p),q),w),q,new A.p(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bjd.prototype={
C(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aW.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aE(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eM(new A.C(B.f_,A.A(A.a([A.q(v,D.c68,B.f,v,v,new A.p(q,v,A.K(B.aW.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.tM,v,v,v),B.bc,A.E(A.w(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.B,v,B.e,B.i,0,B.p),1),A.V(B.hP,o,v,v,v,20)],n),B.l,v,B.e,B.i,0,v,v),v),v,new A.p(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a1z.prototype={
R(){return new C.aGW()},
gd7(){return this.c}}
C.aGW.prototype={
Z(){this.a4()
this.abP()},
abP(){var w=0,v=A.j(x.H),u=this,t
var $async$abP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(R.b66(u.a.c,B.F9),$async$abP)
case 2:t=e
if(u.c!=null)u.l(new C.e8K(u,t))
return A.h(null,v)}})
return A.i($async$abP,v)},
akw(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$akw=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.e8L(q))
t=4
p=R.hEM(q.a.d,B.F9)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.Y(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(R.av_(n.e,m,l,B.F9,p,n.f),$async$akw)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.e8M(q))
q.c.L(x.q).f.T(D.fDr)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ad(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(B.a.es(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.l(new C.e8N(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$akw,v)},
C(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=p?B.nW:B.nh,n=p?B.iZ:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eQ(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.hiO,q,q,q,1,q,!0)
w=A.n(24)
v=A.K(B.aW.j(0.35),B.r,1)
u=A.qw(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aW,q,q,q,q,q,q,q,q,q,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.q(q,A.w(A.a([B.N,u,B.bx,t,B.N,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.bb,B.i,0,B.p),B.f,q,q,new A.p(n,q,v,w,q,q,B.m),q,q,q,q,B.ae,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bz,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcAA()
if(u)u=B.Lv
else u=A.V(r.e===!0?B.h1:Ax.aro,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.en(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cf,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aW,q,B.ht,q,q,q,new A.ax(B.aW.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.hz,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.S)
w.push(new A.a5(1/0,q,A.bH(Af.BI,q,new C.e8O(d),A.bp(B.aW,q,q,q,q,B.ht,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.C(B.ae,A.w(w,B.l,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a1A.prototype={
R(){return new C.bou(A.Ae(B.zk,B.oE,B.vR))}}
C.bou.prototype={
t(){this.d.t()
this.a3()},
C(d){var w=null
return A.c6(A.eQ(w,w,w,!0,!0,B.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.haq,w,w,w,1,w,!0),B.v,A.Ad(this.d,B.c0,new C.e91(this,d)),w,!1,!1,w,w)}}
C.b1W.prototype={
C(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.TB,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.ml.prototype={}
C.a8t.prototype={
R(){return new C.bo8(null,null)}}
C.bo8.prototype={
Z(){var w=this,v=null
w.a4()
w.d=A.br(v,B.tB,v,1,v,w)
w.e=A.br(v,B.o_,v,1,v,w)
w.a.toString
w.d.cU(0)
w.e.cU(0)},
by(d){var w,v,u=this
u.bJ(d)
u.a.toString
w=u.d
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cU(0)
w=u.e
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cU(0)},
t(){var w=this.d
w===$&&A.d()
w.t()
w=this.e
w===$&&A.d()
w.t()
this.bBO()},
C(d){var w,v,u=this,t=B.d.ds(D.a8a,new C.dUN(u),new C.dUO())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cGt(A.c9(new A.hB(A.a([w,v],x.dS)),new C.dUP(u,t),null),!0)}}
C.bo7.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b63(d,e)
break
case"house":p.my(d,e,D.dp0)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdm()
$.T()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.m(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mE(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.C9(d,e,12)
p.zc(d,e,B.lz,5,14)
break
case"grocery":p.cpa(d,e)
break
case"calculator":p.coS(d,e)
break
case"lumber":p.cpi(d,e)
break
case"kitchen":p.cpd(d,e)
break
case"landscape":p.my(d,e,D.dpB)
s=new A.aI($.T().r,B.ak,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cm(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cm(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bz())
w=A.L()
w.r=B.et.j(0.85).gp(0)
d.af(s,w)
p.C9(d,e,8)
p.zc(d,e,B.iN,4,18)
break
case"plumbing":p.cps(d,e)
break
case"electrical":p.my(d,e,D.dC9)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.T()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aE(new A.a4(0,0,0+e.a,0+e.b),u)
p.mE(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mE(d,e,B.oS.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.C9(d,e,10)
break
case"store":p.cpC(d,e)
break
case"paint_remodel":p.cpn(d,e)
break
case"roofing":p.cpu(d,e)
break
case"warehouse":p.cpJ(d,e)
break
case"vehicles":p.cpH(d,e)
break
case"farm":p.cp4(d,e)
break
case"restaurant":p.cpt(d,e)
break
case"tools":p.cpF(d,e)
break
case"wallet":p.cpI(d,e)
break
case"concrete":p.coY(d,e)
break
case"blueprint":p.coQ(d,e)
break
default:p.b63(d,e)}},
my(d,e,f){var w,v=new A.a4(0,0,0+e.a,0+e.b)
$.T()
w=A.L()
w.san(new A.a6(B.aw,B.aD,B.w,f,null,null).az(0,v))
d.aE(v,w)},
mE(d,e,f,g,h){var w,v,u,t=new A.m(e.a/2,e.b/2),s=e.gdm()/2-h
$.T()
w=A.L()
w.b=B.ad
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cR(A.bY(t,s),u,u+0.1439896632895322-u,!1,w)}},
zc(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdm()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.T()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.m(q+t*o,p+s*o),3.5,r)}},
C9(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.h.F(t*0.17,0.9)
q=B.h.F(t*0.23,0.85)
$.T()
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.m(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b63(d,e){var w,v=this
v.my(d,e,D.dAj)
w=v.c
v.mE(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mE(d,e,B.bO.j(0.45),-w*3.141592653589793*1.4,22)
v.bTO(d,e,B.i_,w)
v.zc(d,e,B.c.j(0.7),6,8)},
bTO(d,e,f,g){var w,v,u,t,s,r
$.T()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aE(new A.a4(16,r,t,r+3),w)}},
cpa(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.my(d,e,D.cBf)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.n.F(t,3)
q=Math.sin(s)
p=B.n.ao(t,3)
o=Math.cos(s*0.8)
n=B.n.F(t,2)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=D.dn_[B.n.F(t,4)].j(0.85).gp(0)
d.O(new A.m(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mE(d,e,B.c.j(0.35),w,16)
l.zc(d,e,B.iN,5,12)},
coS(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.my(d,e,D.cBn)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdm()
$.T()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.O(new A.m(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h0(h,B.cJ,h,h,h,h,B.a7,B.ca,h,B.e4,B.cb)
for(o=0;o<6;++o){n=v+o*0.9
r=D.drw[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.n.F(o,2)
p.sb1(0,new A.eE(r,h,h,B.cV,h,h,h,h,h,h,new A.G(!0,q,h,h,h,h,14+m*4,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eJ()
p.a5(d,new A.m(t*(0.08+B.n.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.n.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cBp[o]
l=B.l3.j(0.28+0.3*Math.sin(n))
k=B.n.F(o,2)
p.sb1(0,new A.eE(m,h,h,B.cV,h,h,h,h,h,h,new A.G(!0,l,h,h,h,h,12+k*3,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eJ()
p.a5(d,new A.m(t*(0.55+B.n.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.n.ao(o,3)*0.38)+Math.sin(n)*6))}i.mE(d,e,B.c.j(0.35),w*1.5,14)
i.mE(d,e,B.eJ.j(0.55),-v*3.141592653589793*2,8)
i.mE(d,e,B.oM.j(0.4),r*2.8,22)
i.zc(d,e,B.pL,8,10)
i.C9(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.h.F(w+o*0.22,0.9)
$.T()
v=new A.ar(B.U,B.R,B.X,B.Y,B.W)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.m(12,j),new A.m(t,j),v)}},
cpi(d,e){var w,v,u,t,s,r,q,p,o=this
o.my(d,e,W.aDj)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bx(new A.a4(20,r,u,r+10),B.hs)
$.T()
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=A.ap(B.h9,B.nL,(s+1)/2).gp(0)
d.aq(q,p)}o.mE(d,e,B.h9.j(0.35),w,15)
o.C9(d,e,8)},
cpd(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.my(d,e,D.dny)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.h.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.h.F(s*0.13,0.7)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.m(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mE(d,e,B.bO.j(0.4),-w*3.141592653589793*2.2,11)
l.zc(d,e,B.qO,4,14)},
cps(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.my(d,e,D.dak)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.h.F(s,0.12)
$.T()
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.b=B.ad
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.m(w,u),q*(0.12+r*0.14+p),o)}n.zc(d,e,B.pP,6,12)
n.mE(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cpC(d,e){var w,v,u,t,s,r,q,p=this
p.my(d,e,D.cPh)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bx(new A.a4(r,14,r+u,22),B.jL)
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.fy,B.bO,(s+1)/2).gp(0)
d.aq(r,q)}p.mE(d,e,B.c.j(0.3),w,16)
p.C9(d,e,8)
p.zc(d,e,B.wT,5,13)},
cpn(d,e){var w,v,u,t,s,r,q
this.my(d,e,D.dhp)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.h.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bx(new A.a4(r,q,r+8,q+(18+s*22)),B.iE)
$.T()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=[B.iK,B.dH,B.bO,B.eH][t].j(0.85).gp(0)
d.aq(q,r)}this.mE(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cpu(d,e){var w,v,u,t,s,r,q
this.my(d,e,D.deq)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.h.F(v+t*0.12,0.75))
r=B.n.F(t,4)*0.22
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.m(u*(0.1+r),s),new A.m(u*(0.18+r),s+10),q)}this.zc(d,e,B.cF,7,11)},
cpJ(d,e){var w,v,u,t,s,r,q,p
this.my(d,e,D.cS7)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bx(new A.a4(q,p,q+(t-s*8),p+16),B.hs)
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.cF,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mE(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cpH(d,e){var w,v,u,t,s,r,q
this.my(d,e,D.dGL)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.h.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.n.F(t,2)*0.08)
r=A.bx(new A.a4(s,r,s+28,r+8),B.hs)
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.C9(d,e,6)},
cp4(d,e){var w,v,u,t,s,r,q,p
this.my(d,e,D.dlW)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.T()
s=A.L()
s.r=B.oS.j(0.75).gp(0)
d.O(new A.m(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=B.hY.j(0.85).gp(0)
p.c=3
d.ah(new A.m(q,v),new A.m(q+s*6,t),p)}this.mE(d,e,B.oS.j(0.35),w,14)},
cpt(d,e){var w,v,u,t,s,r,q=this
q.my(d,e,D.doO)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.c_(new A.m(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.T()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=B.c.j(0.22).gp(0)
d.c2(s,r)}q.zc(d,e,B.qO,5,16)
q.C9(d,e,7)},
cpF(d,e){var w,v,u,t,s,r,q,p,o=this
o.my(d,e,D.dDZ)
w=o.c
v=w*3.141592653589793
o.mE(d,e,B.nL.j(0.55),v*3,10)
o.mE(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.T()
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=B.nL.j(0.8).gp(0)
d.O(new A.m(v+r*34,u+q*22),4,p)}},
cpI(d,e){var w,v,u,t,s,r,q,p,o=this
o.my(d,e,D.dHw)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bx(new A.a4(q,p,q+36,p+22),B.jL)
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.iN,B.oS,r).gp(0)
d.aq(p,q)}o.C9(d,e,9)
o.mE(d,e,B.c.j(0.4),w*2.2,12)},
coY(d,e){var w,v,u,t,s,r,q,p
this.my(d,e,D.duK)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bY(new A.m(v,u),34)
$.T()
s=A.L()
s.b=B.ad
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cR(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=B.bP.j(0.85).gp(0)
d.O(new A.m(v+t*34,u+s*34),3,p)}},
coQ(d,e){var w,v,u,t,s,r,q
this.my(d,e,D.dpX)
$.T()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.m(t,0),new A.m(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.m(0,s),new A.m(v,s),w)
r=this.c
q=u*B.h.F(r*0.85,1)
$.T()
u=A.L()
u.r=B.dH.j(0.45).gp(0)
d.aE(new A.a4(0,q,0+v,q+6),u)
this.mE(d,e,B.lz.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.avL.prototype={
a1A(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aU_(),$async$a1A)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.aaO(s),$async$a1A)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a1A,v)},
aj6(d){return this.cs3(d)},
cs3(d){var w=0,v=A.j(x.H),u=this,t
var $async$aj6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iHP(d),$async$aj6)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aj6,v)},
C(d){var w,v,u=null,t=A.Q(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.kb:B.iM
w=x.p
v=A.a([C.aUn(!0,B.t0,1/0,B.rm,u,s,1/0)],w)
if(!r)v.push(new A.bP(new A.p(u,u,u,u,u,new A.a6(B.aU,B.b2,B.w,A.a([B.L,B.v.j(0.35)],x.O),u,u),B.m),B.bm,new A.bK(B.aU,u,u,new A.C(B.tD,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aEh,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.df(D.c_n,u,D.fZc,new C.cse(this,d),A.bp(B.aW,u,u,u,B.c,u,B.jD,u,u,u,u,B.cp)),1),B.aa,A.E(A.en(D.c8h,u,D.hdD,this.gciF(),A.dj(u,u,B.v.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jD,u,u,D.b8J,u,u,u,B.cp)),1)],w),B.l,u,B.e,B.i,0,u,u),u,u,8,8,u,u))
return new A.fK(1.7777777777777777,A.aE(!1,B.a3,!0,B.t0,new A.am(B.a0,u,B.b5,B.t,v,u),B.ap,t,0,u,u,u,u,u,B.ai),u)}}
C.aPa.prototype={
b0(){this.b8()
this.b5()
this.dV()},
t(){var w=this,v=w.bc$
if(v!=null)v.a8(0,w.gdP())
w.bc$=null
w.a3()}}
C.aXl.prototype={}
C.aXk.prototype={}
C.aVo.prototype={}
C.a0c.prototype={
R(){return new C.aC2()}}
C.aC2.prototype={
Z(){var w,v,u=this
u.a4()
u.a.toString
w=new A.bb("",B.b9,B.aP)
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a3()},
LH(){var w,v,u=this,t=u.d
t===$&&A.d()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.T(D.fDX)
return}t=u.c
t.toString
v=u.e
A.a8(t,!1).N(new C.aXl(w,v))},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.Q(d).ax.a===B.I,l=m?B.el:B.c,k=A.n(20),j=A.q(n,D.c7X,B.f,n,n,new A.p(B.aW.j(0.15),n,n,A.n(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.ax,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.w(A.a([i,B.bs,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.B,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bc,i,A.aJ(n,n,n,n,A.V(B.cC,m?B.bv:B.bl,n,n,n,n),n,n,n,new C.dd9(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.i,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,11,n,n,B.cE,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hF1(new C.dda(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aS:B.ax,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.kb:B.iM
r=A.n(12)
q=A.n(12)
p=m?B.eo:B.bP
t=A.aN(n,B.M,!0,n,!0,B.t,n,A.aP(),u,n,n,n,n,n,2,A.bC(n,new A.b6(4,r,B.dz),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.am,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.ddb(o),n,!1,n,n,!1,n,!0,n,B.ae,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,A0.LE,n,n,n,n)
u=m?B.aS:B.ax
m=m?B.eo:B.bP
return A.eB(n,l,new A.cQ(B.mm,A.cc(A.w(A.a([j,B.aN,i,B.at,w,B.N,v,B.aN,t,B.bx,A.A(A.a([A.E(A.dV(B.dy,new C.ddc(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.cq,n,new A.ba(A.n(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.ar,A.E(A.bH(D.hdU,n,o.ga4Q(),A.bp(B.aW,n,n,n,B.c,n,B.cq,n,new A.ba(A.n(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.i,0,n,n)],h),B.B,n,B.e,B.P,0,B.p),B.t,n,B.y,n,n,B.Dl,n,n,B.ah),n),n,n,n,B.Dm,n,B.db,n,new A.ba(k,B.a1),n)}}
C.a0b.prototype={
R(){return new C.aC1()}}
C.aC1.prototype={
Z(){this.a4()
var w=$.ay()
this.d!==$&&A.aT()
this.d=new A.au(B.ay,w)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a3()},
LH(){var w,v=this.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.T(D.fBy)
return}v=this.c
v.toString
A.a8(v,!1).N(new C.aXk(w))},
C(d){var w,v,u,t,s,r,q=null,p=A.Q(d).ax.a===B.I,o=p?B.el:B.c,n=A.n(20),m=A.q(q,D.c4e,B.f,q,q,new A.p(B.bU.j(0.15),q,q,A.n(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.w(A.a([l,B.bs,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bl,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.B,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bc,l,A.aJ(q,q,q,q,A.V(B.cC,p?B.bv:B.bl,q,q,q,q),q,q,q,new C.dd5(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.i,0,q,q)
l=B.aW.j(p?0.12:0.08)
w=A.n(12)
v=A.K(B.aW.j(0.25),B.r,1)
u=A.V(B.ara,B.aW.j(0.9),q,q,q,18)
l=A.q(q,A.A(A.a([u,B.ar,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.i,0,q,q),B.f,q,q,new A.p(l,q,v,w,q,q,B.m),q,q,q,q,B.bD,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.kb:B.iM
t=A.n(12)
s=A.n(12)
r=p?B.eo:B.bP
v=A.aN(q,B.M,!0,q,!0,B.t,q,A.aP(),w,q,q,q,q,q,2,A.bC(q,new A.b6(4,t,B.dz),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.am,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.dd6(this),q,!1,q,q,!1,q,!0,q,B.ae,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.lq,q,q,q,q)
w=p?B.aS:B.ax
p=p?B.eo:B.bP
return A.eB(q,o,new A.cQ(B.mm,A.cc(A.w(A.a([m,B.aN,l,B.aB,v,B.bx,A.A(A.a([A.E(A.dV(B.dy,new C.dd7(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.cq,q,new A.ba(A.n(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.ar,A.E(A.bH(D.hl7,q,this.ga4Q(),A.bp(B.bU,q,q,q,B.c,q,B.cq,q,new A.ba(A.n(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.i,0,q,q)],k),B.B,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.Dl,q,q,B.ah),q),q,q,q,B.Dm,q,B.db,q,new A.ba(n,B.a1),q)}}
C.a_E.prototype={
R(){return new C.aAG()}}
C.aAG.prototype={
Z(){var w,v=this
v.a4()
w=$.ay()
v.d!==$&&A.aT()
v.d=new A.au(B.ay,w)
v.e!==$&&A.aT()
v.e=new A.au(new A.bb("1",B.b9,B.aP),w)
v.f!==$&&A.aT()
v.f=new A.au(B.ay,w)
v.r!==$&&A.aT()
v.r=new A.au(B.ay,w)},
t(){var w,v=this,u=v.d
u===$&&A.d()
w=u.V$=$.ay()
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
v.a3()},
gKZ(){var w,v=this.e
v===$&&A.d()
w=A.cA(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gamg(){var w=this.f
w===$&&A.d()
w=A.cA(B.a.i(w.a.a))
return w==null?0:w},
gb8U(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aST(d){var w,v=B.h.D(this.gKZ()+d,0.25,999999),u=B.h.bO(v),t=this.e
t===$&&A.d()
if(v===u)u=B.n.v(B.h.M(v))
else{u=B.h.a1(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aH(u,w,"")}t.sb1(0,u)
this.l(new C.cKx())},
aBL(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aW,w,w,w,20):w,u=d.a,t=u?B.kb:B.iM,s=A.n(14),r=A.n(14)
u=u?B.eo:B.bP
return A.bC(w,new A.b6(4,s,B.dz),w,B.bD,w,w,w,w,!0,new A.b6(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.n(14),B.ag8),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ciG(d,e,f){return this.aBL(d,e,f,null)},
LH(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.gamg()<=0){s.c.L(x.q).f.T(D.fFR)
return}r=s.c
r.toString
v=s.gKZ()
u=s.gamg()
t=s.gb8U()
A.a8(r,!1).N(new C.aVo(w,v,u,t))},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uz(n),l=n?B.el:B.c,k=A.n(24),j=x.O,i=A.a([B.aW.j(0.22),B.bU.j(0.14)],j),h=A.n(14)
i=A.q(o,D.bYg,B.f,o,o,new A.p(o,o,A.K(B.aW.j(0.35),B.r,1),h,o,new A.a6(B.a5,B.a9,B.w,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.w(A.a([h,B.bs,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.cE,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bc,h,A.aJ(o,o,o,o,A.V(B.cC,n?B.bv:B.bl,o,o,o,o),o,o,o,new C.cKD(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.M,!0,o,!0,B.t,o,A.aP(),h,o,o,o,o,o,2,p.aBL(m,"Item name (optional)","Lumber, paint, labor\u2026",B.R_),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,A0.LE,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.C,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.kb:B.iM
t=A.n(14)
s=A.K(n?B.eo:B.bP,B.r,1)
r=A.aJ(o,o,o,o,A.V(B.xy,n?B.aS:B.ax,o,o,o,20),o,o,o,new C.cKE(p),o,o,o,o,o,B.cp)
q=p.e
q===$&&A.d()
q=A.aN(o,B.M,!1,o,!0,B.t,o,A.aP(),q,o,o,o,o,o,2,D.c9Q,B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,B.ei,o,o,o,1,o,o,!1,"\u2022",o,new C.cKF(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.q(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aJ(o,o,o,o,A.V(B.ig,n?B.aS:B.ax,o,o,o,20),o,o,o,new C.cKG(p),o,o,o,o,o,B.cp)],w),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.p(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.ar,A.E(A.aN(o,B.M,!1,o,!0,B.t,o,A.aP(),t,o,o,o,o,o,2,p.aBL(m,"Amount","0.00",B.hB),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,B.ei,o,o,o,1,o,o,!1,"\u2022",o,new C.cKH(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.B,o,B.e,B.i,0,o,o)
t=x.gv
u=A.B(new A.O(D.di_,new C.cKI(p,m),t),t.k("aj.E"))
i=A.a([i,B.bx,v,B.aB,h,B.N,s,B.af,A.c0(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.S,A.aN(o,B.M,!1,o,!0,B.t,o,A.aP(),h,o,o,o,o,o,2,p.ciG(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cKJ(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.lq,o,o,o,o)],w))}i.push(B.aN)
h=B.aW.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.K(B.aW.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKZ()===B.h.bO(p.gKZ())?B.h.M(p.gKZ()):p.gKZ()
s=p.gb8U()
r=A.BJ(p.gamg())
i.push(A.q(o,A.A(A.a([A.E(A.w(A.a([u,B.at,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.i,0,B.p),1),C.bIR(p.gKZ()*p.gamg(),B.b6,!1,B.u)],w),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(o,o,v,h,o,new A.a6(B.a5,B.a9,B.w,j,o,o),B.m),o,o,o,o,B.jF,o,o,o))
i.push(B.bx)
j=A.n(14)
h=n?B.eo:B.bP
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.cq,o,new A.ba(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dV(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cKK(d),h),1),B.ar,A.E(A.df(D.auI,o,D.hgX,p.ga4Q(),A.bp(B.aW,o,o,0,B.c,o,B.cq,o,new A.ba(A.n(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.i,0,o,o))
return A.eB(o,l,new A.cQ(B.N5,A.cc(A.w(i,B.al,o,B.e,B.P,0,B.p),B.t,o,B.y,o,o,Aj.tJ,o,o,B.ah),o),o,o,o,B.Pw,o,B.db,o,new A.ba(k,B.a1),o)}}
C.a3n.prototype={
R(){return new C.bB3()}}
C.bB3.prototype={
Z(){var w,v,u=this
u.a4()
w=u.a.e
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(new A.bb(w,B.b9,B.aP),v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a3()},
C(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=r?B.el:B.c,p=A.n(20),o=t.a.c
o=A.c(o,s,s,s,s,s,s,A.l(s,s,r?B.aS:B.ax,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.d()
v=A.l(s,s,r?B.aS:B.ax,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.kb:B.iM
v=A.aN(s,B.M,!0,s,!0,B.t,s,A.aP(),w,s,s,s,s,s,2,A.bC(s,new A.b6(4,A.n(12),B.dz),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fwm(t,d),s,!1,s,s,!1,s,!0,s,B.ae,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dV(B.dy,new C.fwn(d),s),1)
r=A.bp(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eB(s,q,new A.C(B.Dl,A.w(A.a([o,B.aB,v,B.aN,A.A(A.a([u,B.ar,A.E(A.bH(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fwo(t,d),r),1)],w),B.l,s,B.e,B.i,0,s,s)],w),B.l,s,B.e,B.P,0,B.p),s),s,s,s,s,s,B.db,s,new A.ba(p,B.a1),s)}}
C.adQ.prototype={
a9(){return"WorksheetFrameStyle."+this.b}}
C.GQ.prototype={
R(){return new C.bB1(null,null)}}
C.bB1.prototype={
Z(){var w,v=this
v.a4()
w=A.br(null,D.bEU,null,1,null,v)
w.cU(0)
v.d!==$&&A.aT()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bE8()},
gbFL(){switch(this.a.r.a){case 1:return A.a([B.aW,B.bU,B.b6],x.O)
case 2:return A.a([B.bw,B.aW,B.b6],x.O)
case 3:return A.a([B.aH,B.ci,B.jT],x.O)
case 4:return A.a([B.fK,B.bU,B.fz],x.O)
case 0:return A.a([B.aW,B.bU,B.b6],x.O)}},
C(d){var w=A.Q(d),v=this.d
v===$&&A.d()
return new A.e9(A.c9(v,new C.fwk(this,new C.uz(w.ax.a===B.I)),null),null)}}
C.aAz.prototype={
R(){return new C.bB2(null,null)}}
C.bB2.prototype={
Z(){var w,v=this
v.a4()
w=A.br(null,B.o1,null,1,null,v)
w.cU(0)
v.d!==$&&A.aT()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bE9()},
C(d){var w=this.d
w===$&&A.d()
return A.c9(w,new C.fwl(this),null)}}
C.bB0.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a4(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aQ(w,w))
u=new A.aI($.T().r,B.ak,null,null,A.a([],x.v))
u.E(new A.js(v))
w=A.L()
w.b=B.ad
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aq(v,w)
w=A.L()
w.b=B.ad
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.zW(u)
t=A.a([],x.U)
w=new A.vc(w,!1,t)
for(o=p.b,s=-o*0.85;w.B();){r=w.c
if(r===0||w.f)A.bi(A.jZ(y.B));--r
q=new A.C7(w,r)
w.jW()
r=t[r].b
r===$&&A.d()
r=r.a.length()
p.aWv(d,q,r,o,0,0.2,4.2,0.92)
p.aWv(d,q,r,s,0.52,0.11,3.2,0.58)}},
aWv(d,e,f,g,h,i,j,k){var w,v,u,t=B.h.F(g+h,1)*f,s=A.i1X(e.a.a,e,t,t+f*i,!0),r=A.aiZ(s.gli().a.getBounds())
$.T()
w=A.L()
w.b=B.ad
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a6(B.a5,B.a9,B.w,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Js,null).az(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aRi.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.aRj.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.uz.prototype={}
C.avK.prototype={
R(){return new C.aIw()},
geb(){return this.c}}
C.aIw.prototype={
Z(){var w=this
w.a4()
w.d=w.a.d
w.ajX()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.MJ(w,v)
this.a3()},
ajX(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ajX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bHe(t.c,t.d.a),$async$ajX)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.f3N(u,s))
return A.h(null,v)}})
return A.i($async$ajX,v)},
RR(){var w=0,v=A.j(x.H),u=this,t,s
var $async$RR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.f3E(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.MJ(t,s),$async$RR)
case 2:if(u.c!=null)u.l(new C.f3F(u))
return A.h(null,v)}})
return A.i($async$RR,v)},
Sn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Sn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.Q(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.f3L(t,new C.uz(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Sn)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.aaO(q),$async$Sn)
case 6:case 5:t.l(new C.f3M(t,r))
w=7
return A.b(t.RR(),$async$Sn)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Sn,v)},
Xy(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iHz(r),$async$Xy)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.f3z(t,new C.rN(B.n.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.RR(),$async$Xy)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xy,v)},
cnZ(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hUf(t,new C.f3D(u),w,v)},
adF(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.q(w,w,B.f,w,w,new A.p(w,w,new A.bE(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b8u,w,w,B.m),w,22,w,w,w,w,w,22)},
acF(d){return this.bS2(d)},
bS2(d){var w=0,v=A.j(x.H),u=this
var $async$acF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.f3C(u,d))
w=2
return A.b(u.RR(),$async$acF)
case 2:return A.h(null,v)}})
return A.i($async$acF,v)},
C(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.Q(a2).ax.a===B.I,e=f?B.c7:B.hX,d=A.n(8),a0=A.V(Z.a3R,f?B.bv:B.bl,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.C(B.HZ,A.A(A.a([a0,B.b7,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bl,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.f3O(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.Y(d,"ngmy:thumb:"))d=new A.am(B.a0,g,B.b5,B.t,A.a([A.bv(A.n(22),C.aUn(!0,A.n(22),1/0,B.rm,g,d,1/0),B.ap),A.ao(10,A.df(D.c27,g,D.hjm,h.gb6P(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.hd,g,new A.ba(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.H,B.aW.j(f?0.5:0.38),B.eQ,22),new A.ac(-4,B.H,B.bU.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.H,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.q(g,A.q(g,A.bv(s,new A.am(B.a0,g,B.b5,B.t,A.a([C.aUn(!0,A.n(16),1/0,B.Qm,g,r.c,1/0),new A.bP(new A.p(g,g,g,g,g,new A.a6(B.aU,B.b2,B.w,A.a([B.c.j(0.06),B.L,B.v.j(0.22)],x.O),g,g),B.m),B.bm,g,g),A.ao(g,h.adF(!0),g,g,8,g,8,g),A.ao(g,A.cHc(h.adF(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cHc(h.adF(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cHc(h.adF(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.df(D.bYU,g,D.hcA,h.gb6P(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.hd,g,new A.ba(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.p(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.p(g,g,g,d,v,D.cbx,B.m),g,g,g,g,B.m5,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.bjq,B.oK,B.hx],u):A.a([B.b6,B.aW,B.bU],u)
t=x.V
s=A.a([new A.ac(0,B.H,B.aW.j(f?0.45:0.35),B.eQ,24)],t)
r=A.n(22)
p=A.ao(g,A.V(B.jG,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.q(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.p(o,g,m,n,g,g,B.m),g,g,g,g,B.ho,g,g,g)],a1),B.l,g,B.e,B.i,0,g,g),B.aB,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.aj,C.bIR(h.d.gy9(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.N,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cE,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.w(n,B.B,g,B.e,B.i,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.K(B.hm.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.H,B.aH.j(0.28),B.cN,14)],t)
j=B.aH.j(0.22)
i=A.n(10)
u=A.q(g,A.bv(r,new A.am(B.a0,g,B.ac,B.t,A.a([p,new A.C(D.bJM,A.A(A.a([o,B.ar,A.aE(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eM(new A.C(B.xb,A.w(A.a([A.q(g,D.auh,B.f,g,g,new A.p(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.ct,g,g,g),B.fR,D.h17],a1),B.l,g,B.e,B.P,0,B.p),g),g,new A.p(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcnY(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.i,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.p(g,g,g,v,s,new A.a6(B.aw,B.aD,B.w,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fK(1.7777777777777777,d,g),B.aN,w,B.N,u,B.bx,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,16,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.aX,A.df(A9.a5C,g,D.fZT,h.gbGf(),A.bp(B.aW,g,g,g,B.c,g,B.hp,g,new A.ba(A.n(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.i,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.el:B.c
v=A.n(14)
u=A.K(f?B.eo:B.bP,B.r,1)
t=A.V(B.a4d,f?B.bv:B.bl,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.q(g,A.w(A.a([t,B.S,s,B.aj,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bl,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.p(w,g,u,v,g,g,B.m),g,g,g,g,B.pY,g,g,1/0))}else B.d.u(d,new A.O(w,new C.f3P(h,new C.uz(f)),A.U(w).k("O<1,x>")))
if(h.e)d.push(new A.C(B.zp,A.at(A.nn(g,f?B.bv:B.bl,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bn(!0,A.w(A.a([new A.C(A_.Dc,a0,g),A.E(A.cc(A.w(d,B.B,g,B.e,B.i,0,B.p),B.t,g,B.y,g,g,E.zB,g,g,B.ah),1)],a1),B.B,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bK0(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.el:B.c,p=A.n(16),o=A.a([new A.ac(0,B.H,B.v.j(r?0.35:0.08),B.cN,12)],x.V),n=A.n(16),m=A.q(u,u,B.f,u,u,D.bbd,u,u,u,u,u,u,u,5),l=B.aW.j(r?0.22:0.12),k=A.n(12)
l=A.q(u,A.V(s?B.ix:B.h3,B.b6,u,u,u,20),B.f,u,u,new A.p(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bK
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aS:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.C,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd4o()
v=A.BJ(d.d)
B.d.u(t,A.a([B.at,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bv:B.bl,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.w(t,B.B,u,B.bb,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aW.j(0.14),B.bU.j(0.1)],x.O)
w=A.n(12)
k=A.q(u,C.bIR(d.c*d.d,B.b6,!1,B.u),B.f,u,u,new A.p(u,u,u,w,u,new A.a6(B.a5,B.a9,B.w,k,u,u),B.m),u,u,u,u,B.hd,u,u,u)
w=x.p
return A.q(u,A.bv(n,new A.Fh(A.A(A.a([m,A.E(new A.C(B.anV,A.A(A.a([l,B.bc,t,B.aa,k,A.aJ(u,u,u,u,A.V(B.cC,(r?B.bv:B.bl).j(0.75),u,u,u,20),u,u,u,new C.f3A(this,d),u,u,u,u,u,B.cp)],w),B.l,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.ap),B.f,u,D.ba2,new A.p(q,u,u,p,o,u,B.m),u,u,u,B.d2,u,u,u,u)}}
C.afW.prototype={
FE(d){return this.bTq(d)},
bTq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$FE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(M.pW(d,o,!1),$async$FE)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).N(null)
w=4
return A.b(A.bM(B.D4,null,x.H),$async$FE)
case 4:s=t.d
w=5
return A.b(C.h7m(!0,o,s),$async$FE)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.HL(r,"ngmy_project_"+A.aH(s.b,q,"_"),!1),$async$FE)
case 6:p=f
w=7
return A.b(M.pV(o,!1),$async$FE)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$FE,v)},
a1C(d){return this.cER(d)},
cER(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a1C=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(M.pW(d,s,!1),$async$a1C)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).N(null)
A.he(d,new C.avE(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(M.pV(s,!1),$async$a1C)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1C,v)},
RS(d){return this.cAN(d)},
cAN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).N(null)
w=3
return A.b(A.he(d,D.aO8,!0,"NgmyWorksheetProjectScan",x.N),$async$RS)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bIS(s),$async$RS)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.T(D.fEY)
w=1
break}q=C.hux(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dT(p,x.H),$async$RS)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$RS,v)},
a1D(d){return this.cNp(d)},
cNp(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1D=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).N(null)
w=3
return A.b(C.bIl(),$async$a1D)
case 3:s=f
if(s==null){w=1
break}r=C.hux(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dT(q,x.H),$async$a1D)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1D,v)},
C(d){var w=this,v=null,u=A.Q(d).ax.a===B.I,t=new C.uz(u),s=w.d.d.length,r=u?B.el:B.c,q=A.n(28),p=A.a([new A.ac(0,B.H,B.v.j(u?0.35:0.08),B.kx,36)],x.V),o=x.p
return A.bn(!0,new A.C(B.xa,A.q(v,A.w(A.a([w.cDq(d,t,s),new A.C(D.bJa,A.w(A.a([w.b4M(t,"QR restore"),B.S,A.A(A.a([w.b4L(t,!0,B.jI,B.aH,B.aH,new C.f3R(w,d),"Show to scan","QR code"),B.ar,w.aBM(t,B.jJ,B.b0,B.bj,new C.f3S(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.i,0,v,v),B.df,w.b4M(t,"Backup files"),B.S,A.A(A.a([w.aBM(t,B.hP,B.aW,B.bU,new C.f3T(w,d),"Full copy","Backup file"),B.ar,w.aBM(t,Q.Aj,B.as,B.aQ,new C.f3U(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.i,0,v,v)],o),B.B,v,B.e,B.i,0,B.p),v)],o),B.l,v,B.e,B.P,0,B.p),B.ap,v,v,new A.p(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cDq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fo,B.cY,B.h7],k):A.a([B.b6,B.aW,B.bU],k)
w=A.ao(l,A.V(B.vK,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.q(l,l,B.f,l,l,new A.p(B.c.j(0.35),l,l,A.n(4),l,l,B.m),l,4,l,B.kM,l,l,l,36),l,l,l)
u=A.n(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.H,B.v.j(0.2),B.cN,12)],x.V)
r=this.d
s=A.q(l,C.aUn(!0,A.n(13),64,D.bTS,l,r.c,64),B.ap,l,l,new A.p(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.C,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,I.adu,l,l,l)
r=C.bIR(r.gy9(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.q(l,new A.am(B.a0,l,B.ac,B.t,A.a([w,new A.C(D.bJx,A.w(A.a([v,A.A(A.a([s,B.er,A.E(A.w(A.a([u,B.at,t,B.N,A.A(A.a([r,B.aa,A.q(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.p(q,l,o,p,l,l,B.m),l,l,l,l,B.f8,l,l,l)],m),B.l,l,B.e,B.i,0,l,l)],m),B.B,l,B.e,B.i,0,B.p),1),A.aJ(l,l,l,l,A.V(B.cC,B.c.j(0.85),l,l,l,l),l,l,l,new C.f3Q(d),l,l,l,A.ns(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aWC,l,l,l,l),l,l)],m),B.B,l,B.e,B.i,0,l,l)],m),B.l,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.p(l,l,l,l,l,new A.a6(B.aw,B.aD,B.w,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b4M(d,e){var w=null,v=A.q(w,w,B.f,w,w,new A.p(B.aW,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bv:B.bl,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
b4L(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.amu:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eo:B.bP
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.H,B.aH.j(0.12),B.cN,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.K(h.j(0.35),B.r,1)
t=A.q(r,A.V(f,h,r,r,r,22),B.f,r,r,new A.p(u,r,s,t,r,r,B.m),r,r,r,r,B.tM,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aS:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aE(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eM(new A.C(E.a2d,A.w(A.a([t,B.af,u,B.bs,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bv:B.bl,r,r,r,r,r,r,r,r,11,r,r,B.cE,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.i,0,B.p),r),r,new A.p(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aBM(d,e,f,g,h,i,j){return this.b4L(d,!1,e,f,g,h,i,j)}}
C.avE.prototype={
R(){return new C.bpT()}}
C.bpT.prototype={
Z(){this.a4()
this.ahR()},
ahR(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ahR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bIT(p.c,p.d),$async$ahR)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.f3u(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.f3v(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahR,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(d).ax.a===B.I,f=g?B.CA:B.hX,e=i.d
e=e==null?h:B.a.Y(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aJ(h,h,h,h,A.V(B.eE,g?B.ab:B.an,h,h,h,18),h,h,h,new C.f3w(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.uv],u),B.l,h,B.e,B.i,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.fo,B.cY,B.h7],s):A.a([B.b6,B.aW,B.bU],s)
r=x.V
q=A.a([new A.ac(0,B.H,B.aW.j(g?0.4:0.3),B.eQ,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dw,B.K,h,h)
p=C.bIR(p.gy9(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.q(h,A.w(A.a([o,B.aj,A.A(A.a([p,B.aa,A.q(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.p(n,h,h,m,h,h,B.m),h,h,h,h,B.f8,h,h,h)],u),B.l,h,B.bb,B.i,0,h,h)],u),B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(h,h,h,t,q,new A.a6(B.aw,B.aD,B.w,s,h,h),B.m),h,h,h,h,E.a2B,h,h,1/0)
t=g?D.bv8:B.c
q=A.n(24)
p=A.K(w?B.aH.j(0.4):B.aW.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.H,B.v.j(g?0.25:0.06),B.dv,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.X_,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eI3)
else{m=A.n(20)
l=A.K(B.bn,B.r,1)
o.push(A.q(h,A.qw(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.p(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bR,h,h,h))}}o.push(B.aN)
n=w?B.aH:B.aW
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.K((w?B.aH:B.aW).j(0.35),B.r,1)
k=w?B.QF:B.Ri
k=A.V(k,w?B.aH:B.aW,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.q(h,A.A(A.a([k,B.ar,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.p(n,h,l,m,h,h,B.m),h,h,h,h,B.hp,h,h,h))
return A.c6(h,f,A.bn(!0,A.w(A.a([new A.C(Ag.PJ,e,h),A.E(A.cc(A.w(A.a([s,B.aN,A.q(h,A.w(o,B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(t,h,p,q,r,h,B.m),h,h,h,h,B.vo,h,h,1/0)],u),B.l,h,B.e,B.i,0,B.p),B.t,h,B.y,h,h,E.apb,h,h,B.ah),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.avJ.prototype={
R(){return new C.aIv(A.Ae(B.P_,B.oE,B.vR))}}
C.aIv.prototype={
t(){this.d.t()
this.a3()},
aQP(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j5(w,d)},
cjy(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.iFu(t)
if(s!=null){this.aQP(s)
return}r=C.hJC(t)
if(r!=null)q=A.d_(r,p,0)
else q=!1
if(q){this.aQP(B.a.i(B.a.aV(r,B.a.ca(r,p))))
return}}},
C(d){var w,v,u=this,t=null,s=x.p,r=A.eQ(A.a([A.aJ(t,t,t,t,A.V(u.f?B.ru:Ab.QO,t,t,t,t,t),t,t,t,new C.f3y(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.CA,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.hcs,t,t,t,1,t,!0),q=A.Ad(u.d,B.c0,u.gcjx()),p=A.n(28)
p=A.at(A.q(t,t,B.f,t,t,new A.p(t,t,A.K(B.aW,B.r,3),p,A.a([new A.ac(2,B.H,B.aW.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.v.j(0.72)
v=A.n(16)
return A.c6(r,B.v,new A.am(B.a0,t,B.b5,B.t,A.a([q,p,A.ao(32,A.q(t,D.hbd,B.f,t,t,new A.p(w,t,A.K(B.aW.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jF,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aNv.prototype={
a9(){return"_WorksheetTab."+this.b}}
C.PJ.prototype={
R(){return new C.aIx(D.afs,A.a([],x.D))},
bw(){return this.r.$0()},
geb(){return this.c}}
C.aIx.prototype={
gcL7(){return J.bK0(this.e,0,new C.f4g())},
Z(){this.a4()
$.aS.cT$.push(this)
this.wH()},
t(){$.aS.hP(this)
this.a3()},
jf(d){if(d===B.fY)this.wH()},
wH(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wH=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.E1(q.a.c).d8(0,B.ki),$async$wH)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.f4c(q,p))
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
if(q.c!=null&&q.f)q.l(new C.f4d(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wH,v)},
Je(d){return this.bQ6(d)},
bQ5(){return this.Je(null)},
bQ6(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Je=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iHB(l,d),$async$Je)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.n.v(1000*Date.now())
r=s.a
q=s.b
p=new C.m1(l,r,q,D.dv0,new A.W(Date.now(),0,!1))
w=4
return A.b(C.MJ(t.a.c,p),$async$Je)
case 4:o=f
w=5
return A.b(t.wH(),$async$Je)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.T(D.fC1)
w=1
break}n=J.aO(t.e)
for(;;){if(!n.B()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.T(D.fDR)
else n.L(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.FI(m)
case 1:return A.h(u,v)}})
return A.i($async$Je,v)},
FI(d){return this.cnJ(d)},
cnJ(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$FI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.he(s,new C.avK(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$FI)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.MJ(u.a.c,t),$async$FI)
case 5:case 4:w=6
return A.b(u.wH(),$async$FI)
case 6:return A.h(null,v)}})
return A.i($async$FI,v)},
wr(d){return this.c5x(d)},
c5x(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bIl(),$async$wr)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.he(r,D.aO8,!0,"NgmyWorksheetProjectScan",x.N),$async$wr)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bIS(q),$async$wr)
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
r.T(A.b2(null,null,null,null,null,B.t,null,A.c(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hux(s)
w=15
return A.b(C.MJ(t.a.c,p),$async$wr)
case 15:o=f
w=16
return A.b(t.wH(),$async$wr)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.T(D.fDW)
w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.FI(p)
case 1:return A.h(u,v)}})
return A.i($async$wr,v)},
Pn(d){return this.bOI(d)},
bOI(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Pn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.f3Y(d),s,null,!0,!0,x.y),$async$Pn)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.py(t.a.c,A.a([],x.D)),$async$Pn)
case 6:w=7
return A.b(t.wH(),$async$Pn)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fC6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pn,v)},
cnX(d){var w=this.c
w.toString
A.bV(B.L,null,new C.f46(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
bau(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.kb
else w=B.c
v=A.n(16)
u=A.K(p?B.eo:B.bP,B.r,1)
t=d.j(0.14)
s=A.n(12)
s=A.q(r,A.V(e,d,r,r,r,22),B.f,r,r,new A.p(t,r,r,s,r,r,B.m),r,r,r,r,B.bS,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aS:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aE(!1,B.a3,!0,r,A.aM(!1,q,!0,A.q(r,A.w(A.a([s,B.af,t,B.bs,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bv:B.bl,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.i,0,B.p),B.f,r,r,new A.p(w,r,u,v,r,r,B.m),r,r,r,r,B.tI,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a2a(d,e){return this.cnK(d,e)},
cnK(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2a=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(B.L,null,new C.f41(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a2a)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hUf(r,new C.f42(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Pp(d,e),$async$a2a)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2a,v)},
b7r(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.q(u,A.V(e,f,u,u,u,22),B.f,u,u,new A.p(t,u,u,s,u,u,B.m),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aC
else t=h.a?B.aS:B.ax
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.w(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bv:B.bl,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.i,0,B.p),1)
return A.aE(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.C(A2.Di,A.A(A.a([s,B.bc,t,A.V(B.eL,w?B.bv:B.bl,u,u,u,u)],v),B.l,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
cuU(d,e,f,g,h,i){return this.b7r(!1,d,e,f,g,h,i)},
Pp(d,e){return this.bOS(d,e)},
bOS(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lG(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Pp)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bH0(t.a.c,d.a),$async$Pp)
case 6:w=7
return A.b(t.wH(),$async$Pp)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pp,v)},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uz(n),l=n?B.c7:B.hX
if(p.f)n=D.bha
else{w=A.aG(d,B.dL,x.w).w
v=p.bJ6(m)
u=p.c4B(m)
t=p.gbG7()
if(n)s=B.kb
else s=B.c
r=A.n(13)
q=x.p
t=A.a([v,B.af,u,B.aN,new C.GQ(A.q(o,A.A(A.a([p.aFo(P.Ql,"Projects",m,D.afs),p.aFo(B.vu,"Cashier",m,D.b4W),p.aFo(B.Ig,"Family Tree",m,D.i1d)],q),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.eD,0.95,t,o),B.bx],q)
v=p.d
if(v===D.afs){v=J.aa(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aX,new C.aAz(p.gaVf(),o)],q),B.l,o,B.e,B.i,0,o,o),B.aB,p.cuW(m)],q))}else{n=p.a
if(v===D.b4W)t.push(new C.art(n.c,m,o))
else{v=p.r
t.push(new C.asH(n.c,n.d,n.e,n.f,new C.f4j(p),new C.f4k(p),new A.bf(v,x.b4)))}}n=A.cc(A.w(t,B.B,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c6(o,l,A.bn(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bJ6(d){var w=null,v=A.n(8),u=d.a,t=A.V(Z.a3R,u?B.bv:B.bl,w,w,w,16)
return A.aM(!1,v,!0,new A.C(B.jY,A.A(A.a([t,B.b7,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bv:B.bl,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f3V(this),w,w,w,w,w,w,w)},
gbG7(){switch(this.d.a){case 0:return D.aeB
case 1:return D.hON
case 2:return D.aeC}},
c4B(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.H,B.aW.j(0.35),B.cy,16)],x.V),t=x.p,s=A.A(A.a([A.q(w,D.c42,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,44,w,w,w,w,w,44),B.bc,D.bO7,A.aE(!1,B.a3,!0,w,A.aM(!1,A.n(12),!0,A.q(w,D.c1m,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f3Z(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.B,w,B.e,B.i,0,w,w),r=B.b6.j(0.55),q=A.n(12)
return new C.GQ(A.q(w,A.w(A.a([new A.C(B.HS,s,w),A.q(w,A.w(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.c(A.BJ(this.gcL7()),w,w,w,w,w,w,D.fW0,w,w,w)],t),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(r,w,w,q,w,w,B.m),w,w,w,B.tH,B.jF,w,w,1/0)],t),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(B.aW,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hOM,w)},
aFo(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aW:B.L,q=A.n(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.H,B.aW.j(0.42),B.cN,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.bl
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.bl
return A.E(A.aE(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cY(u,A.A(A.a([w,B.dY,new A.d1(1,B.c9,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.bb,B.i,0,u,u),u,u,B.cn,new A.p(r,u,p,q,o,u,B.m),B.j4,u,u,u,u,B.I_,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f4f(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
cuW(d){var w,v,u,t,s,r,q=this,p=null
if(J.cj(q.e)){w=d.a
v=w?B.el:B.c
u=A.n(15)
t=A.q(p,D.c1t,B.f,p,p,new A.p(p,p,p,p,A.a([new A.ac(2,B.H,B.aW.j(0.5),B.eQ,28)],x.V),D.ce7,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aS:B.ax,p,p,p,p,p,p,p,p,18,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.GQ(A.q(p,A.w(A.a([t,B.df,s,B.N,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bl,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.eb,A.A(A.a([A.E(q.aWR(B.jJ,"Scan QR",new C.f49(q),d),1),B.ar,A.E(q.aWR(Q.Aj,"Upload file",new C.f4a(q),d),1)],r),B.l,p,B.e,B.i,0,p,p),B.aB,A.bH(D.hn6,p,q.gaVf(),A.bp(B.aW,p,p,p,B.c,B.ht,p,p,new A.ba(A.n(12),B.a1),p,p,p))],r),B.l,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bKC,1.05,D.aeB,p)}w=J.b8(q.e,new C.f4b(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.GQ(A.w(w,B.l,p,B.e,B.i,0,B.p),16,B.bS,1,D.aeB,p)},
aWR(d,e,f,g){var w=null,v=B.aW.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.K(B.aW.j(0.45),B.r,1)
return A.aE(!1,B.a3,!0,u,A.aM(!1,t,!0,A.q(w,A.w(A.a([A.V(d,B.b6,w,w,w,26),B.N,A.c(e,w,w,w,w,w,w,D.fUa,B.K,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),B.f,w,w,new A.p(w,w,r,s,w,w,B.m),w,w,w,w,Aw.a2_,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
cuV(d,e){var w,v,u=null,t=e.a,s=t?B.el:B.c,r=A.n(14),q=A.K(t?B.eo:B.bP,B.r,1),p=A.a([new A.ac(0,B.H,B.v.j(t?0.35:0.08),B.eF,10)],x.V),o=A.n(14),n=t?B.bv:B.bl
n=A.bv(B.Za,new A.fK(1.7777777777777777,C.aUn(!0,B.ft,1/0,P.Ql,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.w(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aS:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.c(""+d.d.length+" budget items \xb7 "+A.BJ(d.gy9()),u,u,u,u,u,u,D.fS7,u,u,u)],w),B.B,u,B.e,B.i,0,B.p),1)
return A.q(u,A.aE(!1,B.a3,!0,u,A.aM(!1,o,!0,A.w(A.a([n,new A.C(B.bD,A.A(A.a([v,A.aJ(u,u,u,u,A.V(An.a4T,t?B.bv:B.bl,u,u,u,u),u,u,u,new C.f47(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.i,0,u,u),u)],w),B.B,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f48(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.p(s,u,q,r,p,u,B.m),u,u,u,B.dW,u,u,u,1/0)}}
C.bCQ.prototype={}
C.rN.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd4o(){var w,v,u,t,s=this.c
if(s===B.h.bO(s))w=B.n.v(B.h.M(s))
else{v=B.h.a1(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aH(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.m1.prototype={
gy9(){return B.d.cF(this.d,0,new C.cJT())},
ak(){var w=this,v=w.d,u=A.U(v).k("O<1,a9<o,@>>")
v=A.B(new A.O(v,new C.cJS(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bhW(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.m1(w.a,w.b,v,u,w.e)},
bhF(d){return this.bhW(d,null)},
UB(d){return this.bhW(null,d)}}
C.IT.prototype={
a9(){return"FamilyGender."+this.b}}
C.id.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hPg(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aIa(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.id(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.anF.prototype={
a9(){return"FamilyTreeAccessRole."+this.b}}
C.lg.prototype={
gasf(){var w=this.f
return new A.X(w,new C.bVS(),A.U(w).k("X<1>")).gI(0)},
ak(){var w=this,v=w.f,u=A.U(v).k("O<1,a9<o,@>>")
v=A.B(new A.O(v,new C.bVR(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ixk(w.y),"games",w.z],x.N,x.z)},
xq(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.lg(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bhV(d,e){var w=null
return this.xq(w,w,w,d,e,w,w,w,w)},
cUA(d,e,f,g,h,i,j){return this.xq(d,e,null,f,g,h,i,j,null)},
aIf(d,e){var w=null
return this.xq(w,w,w,w,d,w,w,e,w)},
cUC(d,e,f,g,h,i,j,k){return this.xq(d,e,null,f,g,h,i,j,k)},
cT5(d){var w=null
return this.xq(w,w,w,w,w,w,w,d,w)},
cTt(d){var w=null
return this.xq(w,w,w,w,w,w,w,w,d)},
bhz(d){var w=null
return this.xq(w,w,d,w,w,w,w,w,w)},
aI_(d){var w=null
return this.xq(w,w,w,w,w,d,w,w,w)},
cU7(d,e,f){var w=null
return this.xq(w,d,w,w,e,w,w,f,w)},
cST(d){var w=null
return this.xq(w,w,w,d,w,w,w,w,w)},
cTF(d,e){var w=null
return this.xq(d,w,w,w,w,w,e,w,w)}}
C.cJU.prototype={
a9(){return"WrapAlignment."+this.b}}
C.cJV.prototype={
a9(){return"WrapCrossAlignment."+this.b}}
C.aKE.prototype={}
C.bd5.prototype={
aj(d){this.a=d.a
this.b=d.b},
d2(d){var w=new C.bd5()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b5(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bd4.prototype={
gxh(){return!0},
gHi(){return this.z.b<this.b.length},
aYx(d){switch(0){case 0:return d.a.c}},
aYd(d){switch(0){case 0:return d.a.d}},
bZ1(d,e){switch(0){case 0:return new A.hY(d,e)}},
bYp(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hp(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.jc(0,0,B.n.D(0,b5.a,b5.b),B.n.D(0,b5.c,b5.d))
return}w=A.IC(b4)
switch(0){case 0:v=b5.b
u=new A.ld(0,v,0,1/0)
t=w===B.WS
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fE(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hp(b4,u,!0)
f=b1.aYx(g)
f.toString
e=b1.aYd(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aKE(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aKE(k,j,i))}d=s.length
switch(0){case 0:q=b5.cG(new A.hY(m,l))
a0=q.a
a1=q.b
b1.a=new A.jc(0,0,a0,a1)
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
for(q=B.d.fE(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aYx(g)
e=b1.aYd(g)
e.toString
a9=b1.bYp(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bZ1(a6,a3+a9)
b0=g.a
g.a=new A.jc(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h1(d){var w,v,u,t,s,r=this
r.lI(d)
w=d.b
w.iD()
v=A.dA()
u=r.a
v.ek(u.a,u.b,0,1)
w.pF(0,v)
for(u=r.z,u=B.d.dw(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].h1(d)
w.nL(0)},
HP(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iD(){return this.z}}
C.bB4.prototype={}
var z=a.updateTypes(["az<~>()","P(id)","~()","P(lg)","P(nQ)","a9<o,@>(lg)","F(lg,lg)","F(id,id)","o(id)","lg(a9<@,@>)","P(m1)","nQ(a9<@,@>)","a9<o,@>(nQ)","P(ve)","ve()","F(id)","ah<id>()","P(zY)","a1f(Z)","o?(id)","eR<o?>(id)","az<~>(m1)","P(rN)","a9<o,@>(id)","id(a9<@,@>)","F(m1,m1)","P(ahg)","~(bh)","x(pa)","F(F,abf)","P(r0<F>)","~(r0<F>)","US(Z)","P(Nl)","P(vd)","~(id)","o(o)","Xc(Z)","UR(Z)","afB(Z)","a09(Z)","id(id)","cS(bw<o,H4>)","cS(Lm)","a0E(Z)","F?(id)","id()","P(Lm)","C(id)","~(IT)","a0A(Z)","x(IT,o,a_)","P(ah9)","bw<o,ah<a9<o,@>>>(o,ah<nQ>)","a0C(Z)","+count,id,name(F,o,o)(lg)","o(lg)","a1z(Z)","a1A(Z)","P(ml)","ml()","a_E(Z)","a3n(Z)","a0c(Z)","a0b(Z)","~(F)","~(o,lP?)","x(rN)","afW(Z)","~(lL)","az<~>([o?])","H(H,m1)","x(m1)","H(H,rN)","a9<o,@>(rN)","rN(a9<@,@>)","ah<lP>()","vd()","o(W)","m1(a9<@,@>)","cr(IS)","o(m1)","a9<o,@>(m1)","F(nQ,nQ)","lg(a9<o,@>)","lg(lg)"])
C.fZV.prototype={
$1(d){return d.a+" "+d.b},
$S:128}
C.fZU.prototype={
brn(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rD(s,d,B.ii,"book",E.HF),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.Y(r!=null&&A.Mt(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.brn(d)},
$S:260}
C.fZW.prototype={
$1(d){return d.b},
$S:128}
C.h9C.prototype={
$1(d){var w=null
return A.eB(w,B.L,new H.Rb(this.a,this.b,w),w,w,0,B.a2f,w,B.db,w,w,w)},
$S:46}
C.fMb.prototype={
$1(d){return d!=null},
$S:223}
C.fMc.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:223}
C.fMh.prototype={
$1(d){if(this.a)return new A.m(d.a*520,d.b*160)
return d},
$S:171}
C.fXs.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fe(d,w,w,w,A.hm(w,B.ul,w,w,w,w,w,w,w,B.dK,w,w,10.5,w,B.eO,w,!0,w,w,w,w),w),u=f?B.eO:B.xk
return new A.oz(D.bFW,A.ac3(A.a([new A.h4(130,w,v),new A.zX(1,B.Ia,A.fe(e,w,w,w,A.hm(w,g==null?D.eKu:g,w,w,w,w,w,w,w,B.dK,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.zh,B.md))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2020}
C.fXr.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.wq(999)
f=A.xZ(A.mf(h,A.fe("Cashier",h,h,h,A.hm(h,D.Bd,h,h,h,h,h,h,h,B.dK,h,h,10,h,B.eO,h,!0,h,h,h,h),h),h,new A.le(D.eKk,h,f,B.io,h),h,h,D.bGp,h))
w=A.xZ(A.fe("Debt receipt",h,h,h,A.hm(h,h,h,h,h,h,h,h,h,B.dK,h,h,22,h,B.eO,h,!0,h,h,h,h),h))
v=A.xZ(A.fe(C.xF(new A.W(Date.now(),0,!1),!0),h,h,h,D.ad0,h))
u=A.wq(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fe(s,h,h,h,A.hm(h,h,h,h,h,h,h,h,h,B.dK,h,h,14,h,B.eO,h,!0,h,h,h,h),h)
r=A.fe("Person who owes",h,h,h,D.ad0,h)
q=A.wq(10)
p=x.Z
u=A.mf(h,A.zP(A.a([s,new A.h4(h,2,h),r,new A.h4(h,10,h),A.mf(h,A.zP(A.a([A.fe("Amount owed",h,h,h,D.ad0,h),new A.h4(h,2,h),A.fe(A.BJ(t.c),h,h,h,A.hm(h,D.Bd,h,h,h,h,h,h,h,B.dK,h,h,20,h,B.eO,h,!0,h,h,h,h),h)],p),B.tx,B.md),h,new A.le(B.qo,h,q,B.io,h),h,h,D.bFC,1/0)],p),B.tx,B.md),h,new A.le(E.aPy,h,u,B.io,h),h,h,D.bHC,1/0)
q=new A.oi(D.eKn,0.9,B.lv)
r=A.wq(12)
s=i.c
o=s.$2("Original due",C.xF(t.r,!1))
n=s.$2("Current due",C.xF(t.f,!1))
m=i.d
l=new A.oi(m,1.1,B.lv)
k=A.wq(8)
j=i.a
k=A.a([o,n,new A.h4(h,6,h),A.mf(h,A.xZ(A.fe(t.gaPm(),h,h,h,A.hm(h,m,h,h,h,h,h,h,h,B.dK,h,h,11,h,B.eO,h,!0,0.5,h,h,h),h)),h,new A.le(h,new A.ql(l,l,l,l),k,B.io,h),h,h,D.bGy,1/0),new A.h4(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Bd))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Bd))
else{n=A.fe("Missed days ("+n+")",h,h,h,A.hm(h,B.ul,h,h,h,h,h,h,h,B.dK,h,h,10.5,h,B.eO,h,!0,h,h,h,h),h)
m=A.U(o).k("O<1,Ur>")
o=A.B(new A.O(o,new C.fXq(),m),m.k("aj.E"))
B.d.u(k,A.a([new A.h4(h,4,h),n,new A.h4(h,6,h),new C.bd4(5,5,new C.bd5(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h4(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h4(h,8,h),w,new A.h4(h,3,h),v,new A.h4(h,16,h),u,new A.h4(h,10,h),A.mf(h,A.zP(k,B.zh,B.md),h,new A.le(h,new A.ql(q,q,q,q),r,B.io,h),h,h,B.anZ,1/0)],p)
w=j.a
if(w!=null){v=new A.oi(B.KJ,1,B.lv)
B.d.u(f,A.a([new A.h4(h,16,h),A.fe("Debtor signature",h,h,h,A.hm(h,B.ul,h,h,h,h,h,h,h,B.dK,h,h,10,h,B.eO,h,!0,h,h,h,h),h),new A.h4(h,6,h),A.mf(h,new A.J9(w,B.Zm,h,h),h,new A.le(h,new A.ql(v,v,v,v),A.wq(6),B.io,h),82,h,B.PG,1/0)],p))}f.push(new A.h4(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fe(w,h,h,h,D.fKd,h))
f.push(new A.h4(h,18,h))
f.push(A.xZ(A.fe("NGMY.ORG",h,h,h,A.hm(h,D.Bd,h,h,h,h,h,h,h,B.dK,h,h,14,h,B.eO,h,!0,1.8,h,h,h),h)))
return f},
$S:398}
C.fXq.prototype={
$1(d){var w=null,v=new A.oi(D.KK,0.7,B.lv),u=A.wq(999)
return A.mf(w,A.fe(C.xF(d,!1),w,w,w,A.hm(w,D.KK,w,w,w,w,w,w,w,B.dK,w,w,9.5,w,B.eO,w,!0,w,w,w,w),w),w,new A.le(w,new A.ql(v,v,v,v),u,B.io,w),w,w,D.bM2,w)},
$S:2021}
C.cbc.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.n(999),t=A.K(B.bC.j(0.28),B.r,1)
return A.q(w,A.c(C.xF(d,!1),w,w,w,w,w,w,D.fRz,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.m),w,w,w,w,B.f0,w,w,w)},
$S:2022}
C.ha9.prototype={
$1(d){var w=null,v=A.aG(d,B.c_,x.w).w,u=A.n(26),t=A.aJ(w,w,w,w,D.c53,w,w,w,new C.ha6(d),w,w,w,w,w,B.cp),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eB(w,B.L,new A.cQ(new A.aY(0,380,0,v.a.b*0.9),A.aE(!1,B.a3,!0,u,new A.C(B.a20,A.w(A.a([new A.bK(B.a9,w,w,t,w),new A.d1(1,B.c9,A.cc(A.w(A.a([new A.e9(new C.b1Y(r,w),s),B.S,A.A(A.a([A.E(A.en(B.Ar,w,D.hjh,new C.ha7(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fc,w,new A.ba(A.n(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.E(A.df(B.a5s,w,D.hfC,new C.ha8(r,d),A.bp(B.b6,w,w,w,B.c,w,B.fc,w,new A.ba(A.n(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.i,0,w,w)],p),B.l,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.P,0,B.p),w),B.f,B.ax,0,w,w,w,w,w,B.ai),w),w,w,0,B.a2t,w,B.db,w,w,w)},
$S:46}
C.ha6.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.ha7.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aS.bl$.x.h(0,t.a)
m=m==null?null:m.gbf()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lC(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.hq),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eX(B.dM.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aH(q,p,"_")
if(o.length>32)o=B.a.av(o,0,32)
w=5
return A.b(A.rG(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.ha8.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.h3U(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ha1.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eB(w,B.ax,A.w(A.a([new A.C(D.bHq,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.nD,w,w,w),1),A.aJ(w,w,w,w,B.lJ,w,w,w,new C.ha_(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),w),new A.d1(1,B.c9,new A.C(B.eU,A.bv(A.n(14),A.h8(t,B.z,w,w,B.cr,B.dE,!1,w,!1,w,w),B.ap),w),w),new A.C(B.Pl,new A.a5(1/0,w,A.df(B.oi,w,D.b_2,new C.ha0(t,this.c,d),A.bp(B.b6,w,w,w,B.c,w,w,w,new A.ba(A.n(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.P,0,B.p),w,w,w,B.Px,w,B.db,w,new A.ba(v,B.a1),w)},
$S:46}
C.ha_.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.ha0.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rG(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.had.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eB(w,B.ax,new A.C(D.bHy,A.w(A.a([A.A(A.a([D.bNd,A.aJ(w,w,w,w,B.lJ,w,w,w,new C.hab(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),B.N,new A.e9(A.bv(A.n(14),A.q(w,A.b4(w,w,w,new C.bfn(s.ax,w),B.aA),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.af,new A.a5(1/0,w,A.df(B.oi,w,D.b_2,new C.hac(t,s,d),A.bp(B.b6,w,w,w,B.c,w,w,w,new A.ba(A.n(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.db,w,new A.ba(v,B.a1),w)},
$S:46}
C.hab.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.hac.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aS.bl$.x.h(0,t.a)
n=n==null?null:n.gbf()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lC(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.hq),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aH(r,q,"_")
if(p.length>32)p=B.a.av(p,0,32)
r=J.eX(B.dM.gaS(s))
w=5
return A.b(A.rG(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fRa.prototype={
$1(d){return d.a===this.a},
$S:253}
C.dVG.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dVr.prototype={
bqz(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.el:B.c
s=u.a
w=2
return A.b(A.bV(t,null,new C.dVu(s,q,e),p,!0,!0,!1,B.L3,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dVv(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bqz(d,e)},
$S:2023}
C.dVu.prototype={
$1(d){var w,v=null,u=this.c===B.xU,t=u?D.dCr:D.dxK
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aS:B.ax,v,v,v,v,v,v,v,v,15,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bn(!0,new A.C(B.aoy,A.w(A.a([u,B.at,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bv:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iA(!0,v,v,B.y,D.fAD,new C.dVt(this.a,w,t,d),t.length,v,B.e8,B.ah,!0)],x.p),B.al,v,B.e,B.P,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:28}
C.dVt.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.n(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bv:B.bl).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.q(B.z,C.b1X(r,26),B.f,s,s,new A.p(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dVs(t.d,r),s,s,s,s,s,s,s)},
$S:174}
C.dVs.prototype={
$0(){A.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.dVv.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dVp.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:86}
C.dVq.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cN(B.cn,e,v)
return new A.de(e,!1,A.iE(B.z,A.at(A.aE(!1,B.a3,!0,v,new A.eb(new C.dVo(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bk(t,new A.bq(0.96,1,u),u.k("bk<bS.T>"))),v)},
$S:34}
C.dVo.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.c_,x.w).w,i=l.b,h=i.a.d.a,g=h?B.el:B.c,f=A.n(14),e=A.K((h?B.bv:B.bl).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,16,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.C(B.eD,A.V(B.cC,i.a.d.a?B.bv:B.bl,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dV9(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aXn("Name")
r=l.a
q=r.d==null?k:new C.dVa(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bt:B.mr
n=A.K(B.cY.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.M,h,k,!0,B.t,k,A.aP(),w,k,k,k,k,k,2,s.aI7(new A.C(B.f6,A.aM(!1,p,!0,A.q(B.z,C.b1X(m==null?"\ud83d\udc64":A.fYi(r.e,m),18),B.f,k,k,new A.p(o,k,n,k,k,k,B.a6),k,34,k,B.ct,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.am,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.lq,k,B.acQ,k,k)
v=A.a([v,B.af,t,B.N,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.aj,A.A(A.a([A.E(i.aY3("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dVb(r,a0),r.d===B.xU),1),B.aa,A.E(i.aY3("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dVg(r,a0),r.d===B.a9m),1)],u),B.l,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.N,new A.bK(B.a5,k,k,A.hy(D.c3h,D.hhy,new C.dVh(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cp)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.vh(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.M,!1,k,!0,B.t,k,A.aP(),l.f,k,k,k,k,k,2,i.aXo("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.am,k,k,s,k,k,B.ei,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.K((t?B.bv:B.bl).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xF(r.a,!1)
v.push(A.aE(!1,B.a3,!0,q,A.aM(!1,p,!0,A.q(k,A.A(A.a([A.E(A.w(A.a([t,B.bs,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.B,k,B.e,B.i,0,B.p),1),D.c_O],u),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,n,o,k,k,B.m),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dVi(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.N,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.M,!1,k,!0,B.t,k,A.aP(),l.r,k,k,k,k,k,2,i.aXn("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.am,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,12.5,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b5N(r.b.length!==0,B.mB,new C.dVj(r,i,a0),new C.dVk(r,a0),"Upload from gallery","ID photo"))
v.push(i.b5N(r.c.length!==0,D.bTP,new C.dVl(r,i,d,a0),new C.dVm(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new Ar.a9T("Signature (optional)",t,new C.dVn(a0),new C.dVc(a0,t),new C.dVd(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bv:B.bl
s=(i?B.bv:B.bl).j(0.28)
s=A.E(A.dV(E.aZW,new C.dVe(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.rf,k,new A.ba(A.n(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cY,k,k,k,B.c,k,B.rf,k,new A.ba(A.n(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.aa,A.E(A.bH(A.c(h?"Save":"Update",k,k,k,k,k,k,B.wn,k,k,k),k,new C.dVf(r,w,d),t),1)],u),B.l,k,B.e,B.i,0,k,k))
return A.q(k,A.cc(A.w(v,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.p(g,k,e,f,k,k,B.m),k,k,k,B.ri,B.jF,k,k,360)},
$S:169}
C.dV9.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dVa.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dVb.prototype={
$0(){return this.b.$1(new C.dV8(this.a))},
$S:0}
C.dV8.prototype={
$0(){var w=this.a
w.d=B.xU
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dVg.prototype={
$0(){return this.b.$1(new C.dV7(this.a))},
$S:0}
C.dV7.prototype={
$0(){var w=this.a
w.d=B.a9m
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dVh.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dVi.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wm(null,u.b,A.c3(2020,1,1,0,0,0,0,0),null,s,A.c3(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dV6(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dV6.prototype={
$0(){var w=this.b
return this.a.a=A.c3(w.gcl(),w.gci(),w.gcB(),0,0,0,0,0)},
$S:0}
C.dVj.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.R4(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dV5(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dV5.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dVk.prototype={
$0(){return this.b.$1(new C.dV4(this.a))},
$S:0}
C.dV4.prototype={
$0(){return this.a.b=""},
$S:0}
C.dVl.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.el:B.c
w=3
return A.b(A.bV(q,null,new C.dV2(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.R4(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dV3(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dV2.prototype={
$1(d){var w=null
return A.bn(!0,A.w(A.a([A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.au7,w,w,w,w,new C.dUX(d),!1,w,w,w,w,w,w,w,D.h7u,w,w,w),A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.au5,w,w,w,w,new C.dUY(d),!1,w,w,w,w,w,w,w,D.heA,w,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),!0,!1,B.ag,!0,!0)},
$S:28}
C.dUX.prototype={
$0(){A.a8(this.a,!1).N("camera")
return null},
$S:0}
C.dUY.prototype={
$0(){A.a8(this.a,!1).N("gallery")
return null},
$S:0}
C.dV3.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dVm.prototype={
$0(){return this.b.$1(new C.dV1(this.a))},
$S:0}
C.dV1.prototype={
$0(){return this.a.c=""},
$S:0}
C.dVn.prototype={
$0(){return this.a.$1(new C.dV0())},
$S:0}
C.dV0.prototype={
$0(){},
$S:0}
C.dVc.prototype={
$0(){return this.a.$1(new C.dV_(this.b))},
$S:0}
C.dV_.prototype={
$0(){return B.d.a7(this.a)},
$S:0}
C.dVd.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.akb(u.a,null,null,new C.dUZ(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUZ.prototype={
$4(d,e,f,g){this.a.$1(new C.dUW(this.b,d))},
$S:465}
C.dUW.prototype={
$0(){var w=this.a
B.d.a7(w)
B.d.u(w,this.b)},
$S:0}
C.dVe.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dVf.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.T(D.fFQ)
return}if(w.a.d==null){w.c.L(x.q).f.T(D.fCF)
return}A.a8(w.c,!1).N(!0)},
$S:0}
C.dVJ.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:86}
C.dVK.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.el:B.c,n=A.n(14),m=A.K((p?B.bv:B.bl).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aS:B.ax,r,r,r,r,r,r,r,r,16,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.BJ(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bv:B.bl,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.Af(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.Af(r).length>0?B.bC:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.bl
t=(q?B.bv:B.bl).j(0.28)
s=x.p
return new A.de(e,!1,A.at(A.aE(!1,B.a3,!0,r,A.q(r,A.w(A.a([p,B.N,v,u,B.aB,A.A(A.a([A.E(A.dV(B.ox,new C.dVH(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.jD,r,new A.ba(A.n(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.E(A.bH(D.hf1,r,new C.dVI(d),A.bp(B.cY,r,r,r,B.c,r,B.jD,r,new A.ba(A.n(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.P,0,B.p),B.f,r,r,new A.p(o,r,m,n,r,r,B.m),r,r,r,B.zC,B.HS,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dVH.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dVI.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dVD.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dVE(r),p=r.a.d.a,o=p?B.el:B.c,n=A.n(14),m=A.K((p?B.bv:B.bl).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aS:B.ax,s,s,s,s,s,s,s,s,14,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.BJ(l.c),s,s,s,s,s,s,D.fTb,s,s,s)],p),B.l,s,B.e,B.i,0,s,s)
w=A.ja((r.a.d.a?B.bv:B.bl).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a4d,"View receipt",new C.dVw(r,d,l))
u=l.x!=null
t=u?B.q7:B.rq
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bHv,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dVx(r,d,l)),q.$3$icon$label$onTap(B.DB,"Edit",new C.dVy(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mB,"View / download ID",new C.dVz(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bTO,"View / download selfie",new C.dVA(r,d,l)))
if(l.gaJU())p.push(q.$3$icon$label$onTap(B.a5i,"View / download signature",new C.dVB(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.eq,"Delete",new C.dVC(r,d,l)))
p.push(B.at)
return A.bn(!0,new A.C(B.tH,A.q(s,A.w(p,B.l,s,B.e,B.P,0,B.p),B.f,s,s,new A.p(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:28}
C.dVE.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.ax
else w=d
return A.aM(!1,v,!0,new A.C(B.f_,A.A(A.a([A.V(e,w,v,v,v,20),B.bc,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2024}
C.dVw.prototype={
$0(){A.a8(this.b,!1).N(null)
var w=this.a.c
w.toString
C.ha5(w,this.c)},
$S:0}
C.dVx.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.TU(this.c)},
$S:0}
C.dVy.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.En(this.c)},
$S:0}
C.dVz.prototype={
$0(){var w,v,u
A.a8(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bJc(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dVA.prototype={
$0(){var w,v,u
A.a8(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bJc(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dVB.prototype={
$0(){A.a8(this.b,!1).N(null)
var w=this.a.c
w.toString
C.haa(w,this.c)},
$S:0}
C.dVC.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.R3(0,this.c)},
$S:0}
C.dVL.prototype={
$1(d){return d.x==null},
$S:253}
C.dVM.prototype={
$1(d){return d.x!=null},
$S:253}
C.dVN.prototype={
$2(d,e){return d+e.c},
$S:2025}
C.dVO.prototype={
$0(){return this.a.bGE()},
$S:0}
C.dVF.prototype={
$0(){return this.a.ai3(this.b)},
$S:0}
C.fRW.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fRX.prototype={
$0(){return B.d.gH(D.a6B)},
$S:z+77}
C.dkD.prototype={
$0(){var w=this.a
return w.l(new C.dkB(w,this.b))},
$S:0}
C.dkB.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dkC.prototype={
$0(){},
$S:0}
C.dkE.prototype={
$0(){var w=this.a.gc5l()
A.a8(this.b,!1).N(w)
return null},
$S:0}
C.fUQ.prototype={
$1(d){return C.hyR(A.a0(d,x.N,x.z))},
$S:z+11}
C.fUR.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fUS.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.n.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.h8E.prototype={
$1(d){return d.ak()},
$S:z+12}
C.hho.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fR1.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bUz.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eG(e,v)?v:null},
$S:2026}
C.h9f.prototype={
$1(d){var w=this
return new C.a0C(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dli.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dlh(w,d))},
$S:z+80}
C.dlh.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dl6.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cM(u)?v.r>=J.aa(v.d):w)v.r=J.aa(v.d)-1},
$S:0}
C.dl3.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dkF.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dkG.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dl7.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dkO.prototype={
$1(d){var w=null,v=A.Q(d).ax.a===B.I,u=v?B.el:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bL(!1,B.dy,w,w,!0,w,w,w,new C.dkM(d),w,w),A.bH(B.yi,w,new C.dkN(d),A.bp(B.nO,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:17}
C.dkM.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dkN.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dkP.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.n.D(w.r-1,-1,999)},
$S:0}
C.dl4.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dl5.prototype={
$0(){return B.d.gH(D.AE)},
$S:z+14}
C.dkK.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzB(0),t=J.aa(w.d)
w=J.aa(w.d)===1?"page":"pages"
return new C.UR(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dkL.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dkQ.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a09(v,u,J.aa(w.d),null)},
$S:z+40}
C.dkR.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dlg.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.aA(s,new C.a_O(r.y,r.gzB(0),J.aa(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dle(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.aa(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.beI(v,e,w,u,t,r.gbXu(),C.hPf(r.y.Q),r.gzB(0),s)
w=t}return A.c9(q,new C.dlf(r,e),new A.C(B.a2k,w,s))},
$S:2027}
C.dlf.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd4(t).ay){t=this.b
u=x.cy.a(B.d.gd4(u.f.f)).gvJ(0)
w=t-(u==null?t:u)}else w=0
v=B.h.D(w,-1,0)
u=A.dA()
t=u.a
t.$flags&2&&A.ak(t)
t[11]=0.0013
u.fL(v*3.141592653589793*0.5)
return A.fG(B.a5,A.d3(e,B.h.D(1+v*0.5,0,1)),null,u,!0)},
$S:48}
C.dle.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aL5(B.ra,B.iP)},
$S:0}
C.dl0.prototype={
$0(){var w=this.a
return w.l(new C.dl_(w))},
$S:0}
C.dl_.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dl1.prototype={
$0(){var w=this.a.c
w.toString
A.a8(w,!1).N(null)
return null},
$S:0}
C.dkH.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.kI.j(0.5),r=x.p,q=A.a([D.h60,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cj(p.d)?"Write this book":"Write a new book"
q.push(p.a_X(d,B.eh,w,J.cj(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_X(d,K.as_,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cM(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cB,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.l5.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cB,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.l5.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_X(d,X.at_,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_X(d,B.p6,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_X(d,B.p6,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eB(u,E.CK,A.bn(!0,new A.C(B.xc,A.w(q,B.B,u,B.e,B.P,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.PA,u,B.db,u,new A.ba(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:46}
C.dl2.prototype={
$0(){A.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.dkU.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cM(w.d)
return new C.a0E(v,J.cM(w.d),w.r+1,null)},
$S:z+44}
C.dkV.prototype={
$1(d){var w=null
return A.pf(!1,A.ek(w,w,w,E.CK,new A.kk(this.a,new C.dkT(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:333}
C.dkT.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.acu,B.pq,A.E(A.c(e,w,w,w,w,w,w,B.jO,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:774}
C.dkW.prototype={
$0(){return this.a.a=!1},
$S:53}
C.dkX.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:198}
C.dkY.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dkZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BQ(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Tv(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.dkS(s,t))
w=4
return A.b(s.ll(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dkS.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dl9.prototype={
$1(d){var w=null
return A.pf(!1,A.ek(w,w,w,E.CK,new A.kk(this.a,new C.dl8(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:333}
C.dl8.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.acu,B.pq,A.E(A.c(e,w,w,w,w,w,w,B.jO,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:774}
C.dla.prototype={
$0(){return this.a.a=!1},
$S:53}
C.dlb.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:198}
C.dlc.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:198}
C.dld.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BQ(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.ll(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dkI.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.bnq(B.ra,A5.P9)},
$S:0}
C.dkJ.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aL5(B.ra,A5.P9)},
$S:0}
C.dn4.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dn5.prototype={
$1(d){var w=this.a
return w.l(new C.dn3(w))},
$S:9}
C.dn3.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dn6.prototype={
$1(d){var w=this.a
return w.l(new C.dn2(w))},
$S:9}
C.dn2.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dn7.prototype={
$1(d){var w=this.a
return w.l(new C.dn1(w))},
$S:9}
C.dn1.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dn8.prototype={
$0(){var w=this.a
return w.l(new C.dn0(w,this.b))},
$S:0}
C.dn0.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dn9.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga44()
A.a8(this.b,!1).N(new A.btN(w,v))},
$S:0}
C.dlx.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dlw.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a0A(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dlB.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dlA.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bdm(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hH,v,v,v)
return A.ek(A.a([A.bL(!1,B.dy,v,v,!0,v,v,v,new C.dly(d),v,v),A.bH(B.yi,v,new C.dlz(d),A.bp(B.nO,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.CK,w,v,v,v,v,D.h4N,v)},
$S:17}
C.dly.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dlz.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dlC.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dlD.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cc(A.c0(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bIu,t,t,B.ah)},
$S:348}
C.dlv.prototype={
$0(){return this.a.RW(0,this.b)},
$S:0}
C.dlu.prototype={
$0(){return this.a.Rj(0,this.b)},
$S:0}
C.cTd.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cTe.prototype={
$0(){return B.d.gH(D.AE)},
$S:z+14}
C.cTf.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bT(0,new A.C(d,new A.bP(new A.p(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bm,w,w),w),0,0,0)},
$S:2029}
C.dcg.prototype={
$1(d){return this.a.l(new C.dcf(this.b,this.c))},
$S:9}
C.dcf.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.dcF.prototype={
$1(d){return this.a.l(new C.dcs())},
$S:2}
C.dcs.prototype={
$0(){},
$S:0}
C.dcG.prototype={
$1(d){return this.a.l(new C.dcr())},
$S:2}
C.dcr.prototype={
$0(){},
$S:0}
C.dcH.prototype={
$0(){var w=this.a
return w.l(new C.dcq(w,this.b))},
$S:0}
C.dcq.prototype={
$0(){var w=this.a
return w.d=w.goM().GX(this.b.a)},
$S:0}
C.dcI.prototype={
$0(){var w=this.a
return w.l(new C.dcp(w,this.b))},
$S:0}
C.dcp.prototype={
$0(){var w=this.a
return w.d=w.goM().cSp(this.b)},
$S:0}
C.dcJ.prototype={
$1(d){return this.a.l(new C.dco())},
$S:2}
C.dco.prototype={
$0(){},
$S:0}
C.dcK.prototype={
$0(){var w=this.a
return w.l(new C.dcn(w,this.b))},
$S:0}
C.dcn.prototype={
$0(){var w=this.a
return w.d=w.goM().cSu(this.b.a)},
$S:0}
C.dcL.prototype={
$1(d){var w=this.a
return w.l(new C.dcA(w,d))},
$S:6}
C.dcA.prototype={
$0(){var w=this.a
return w.d=w.goM().cTo(this.b)},
$S:0}
C.dcM.prototype={
$1(d){var w=this.a
return w.d=w.goM().aI2(d)},
$S:2}
C.dcN.prototype={
$1(d){var w=this.a
return w.d=w.goM().cSx(d)},
$S:2}
C.dcP.prototype={
$1(d){var w=this.a
return w.d=w.goM().cTm(d)},
$S:2}
C.dcQ.prototype={
$1(d){var w=this.a
return w.l(new C.dcz(w,d))},
$S:9}
C.dcz.prototype={
$0(){var w=this.a
return w.d=w.goM().cTd(this.b)},
$S:0}
C.dcR.prototype={
$0(){var w=this.a,v=w.goM(),u=B.a.i(w.gzB(0).a.a),t=B.a.i(w.gaFb().a.a)
u=v.bi4(B.a.i(w.gaux().a.a),t,u)
A.a8(this.b,!1).N(u)
return null},
$S:0}
C.bUJ.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bUD.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bUC(w,d))},
$S:10}
C.bUC.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a2(0)}},
$S:0}
C.bUM.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bUE.prototype={
$0(){var w=this.a
w.Q=D.b4v
w.afA(1)
w.r.x=null},
$S:0}
C.bUF.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b4v)return
w=new A.e6()
w.cW(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.daX[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bUI.prototype={
$0(){var w=this.a
w.Q=D.af8
w.afA(2)
w.r.z=null},
$S:0}
C.bUH.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.i_8
t.afA(3)
w=t.r
w.d=s
w.x="I say: "+t.gDe()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.die[v.aw(4)]:D.dFc[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bUK.prototype={
$0(){var w=this.a
w.Q=D.b4w
w.CW=this.b
w.cy=1
w.afA(4)
w.r.f=w.f.a+5},
$S:0}
C.bUL.prototype={
$0(){},
$S:0}
C.bUG.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).i1()},
$S:0}
C.bUA.prototype={
$0(){return this.a.M2(this.b)},
$S:0}
C.bUB.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).i1()},
$S:0}
C.bWf.prototype={
$0(){var w=this
return w.a.Se(w.b,0,w.c,w.d)},
$S:0}
C.bWg.prototype={
$0(){var w=this
return w.a.Se(w.b,3,w.c,w.d)},
$S:0}
C.bWh.prototype={
$0(){var w=this
return w.a.Se(w.b,1,w.c,w.d)},
$S:0}
C.bWi.prototype={
$0(){var w=this
return w.a.bWV(w.b,w.c,w.d)},
$S:0}
C.bWj.prototype={
$0(){var w=this
return w.a.Se(w.b,4,w.c,w.d)},
$S:0}
C.bWk.prototype={
$0(){var w=this
return w.a.Se(w.b,2,w.c,w.d)},
$S:0}
C.bWl.prototype={
$0(){var w=this
return w.a.Se(w.b,5,w.c,w.d)},
$S:0}
C.bWm.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:775}
C.bWe.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a7N[d],p=q.a.a6(0,new A.m(0,-q.b*1.2*124)),o=A.h0(r,B.cJ,r,3,r,A.cW(r,r,r,r,r,r,r,r,r,D.fJT,e),B.a7,B.ca,r,B.e4,B.cb)
o.nH(130)
w=o.b.a.c
w=p.aI(0,new A.m(0,w.gb4(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bx(A.c_(w,v.gb4(v)+12,u+18),B.il)
u=this.a
v=t.eM(B.dP)
w=$.T()
s=A.L()
s.r=B.dJ.gp(0)
u.aq(v,s)
s=A.L()
s.r=D.r_.gp(0)
u.aq(t,s)
w=new A.aI(w.r,B.ak,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bz())
v=A.L()
v.r=D.r_.gp(0)
u.af(w,v)
o.a5(u,new A.m(t.a+9,t.b+6))},
$S:776}
C.bV_.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.bV0.prototype={
$2(d,e){var w=this.a,v=B.n.aQ(w.aoj(d),w.aoj(e))
if(v!==0)return v
return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.fEN.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.hhe.prototype={
$2(d,e){if(e!=null)J.bZ(this.a.c0(0,d,new C.hhf()),e)},
$S:z+66}
C.hhf.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.hhg.prototype={
$1(d){return d!==this.a},
$S:3}
C.hhh.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.hhi.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hhd(this.c,d))},
$S:3}
C.hhd.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.hhj.prototype={
$1(d){return d!==this.a},
$S:3}
C.hhk.prototype={
$1(d){return d!==this.a},
$S:3}
C.hhl.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hhc(this.c,d))},
$S:3}
C.hhc.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fSz.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.aa(w)>this.a.a},
$S:3}
C.h7y.prototype={
$1(d){return d.Q},
$S:z+15}
C.h7z.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fOn.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fVM.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bPL.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.hhF.prototype={
$2(d,e){return B.n.aQ(C.hL9(d),C.hL9(e))},
$S:219}
C.hhG.prototype={
$1(d){return d!==this.a},
$S:3}
C.h8a.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bNT.prototype={
$0(){var w=this.a
w.ch=!0
w.bby()},
$S:0}
C.bNO.prototype={
$0(){},
$S:0}
C.bNU.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bNM.prototype={
$0(){},
$S:0}
C.bNN.prototype={
$0(){},
$S:0}
C.bNS.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bT(0,A.b4(u,u,u,new C.bfp(t,u),B.aA),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.v.j(0.7)
v=A.n(14)
s.push(A.ao(u,A.q(u,A.c(t.dy,u,u,u,u,u,u,D.fRL,B.K,u,u),B.f,u,u,new A.p(w,u,u,v,u,u,B.m),u,u,u,u,B.bS,u,u,u),u,u,14,14,6,u))}return A.aA(B.bZ,new A.am(B.a0,u,B.ac,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bNP(t,e),u,u,u,u,u,u,u,new C.bNQ(t,e),u,u,u,u,u,u,u,u,u,new C.bNR(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bNP.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bNR.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:24}
C.bNQ.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bNL.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).i1()},
$S:0}
C.ctX.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.ctY.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.ctW(w))},
$S:0}
C.ctW.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.ctZ.prototype={
$0(){var w=this,v=w.a
v.gj7()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cu_.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cu0.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cu1.prototype={
$0(){},
$S:0}
C.cu2.prototype={
$0(){var w=this.a
w.z=w.Yq(++w.e)
w.Q=A.c4(w.gkW()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.ctT.prototype={
$0(){return A.a8(this.a,!1).i1()},
$S:0}
C.ctU.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj7().length,e=i/2,d=new C.ctV(i,f,h),a0=g.as,a1=A.a3(a0).k("b9<2>")
a0=A.B(new A.b9(a0,a1),a1.k("M.E"))
a0=A.bT(0,A.c9(new A.hB(a0),new C.ctO(g,new A.m(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj7().length!==0&&!B.d.q(g.gj7(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.Rv(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cS(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new T.Nu(new C.ctP(g,u),new C.ctQ(g,u),new C.ctR(g,u),j,j,new A.bf("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fs:B.bf,j,j,j,j,j,j,j,j,13,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj7().length!==0&&!B.d.q(g.gj7(),-1)){a0=g.e+1>=g.gkW().length?"See my result":"Next family"
g=A.at(C.uO(a0,g.gqC(g),B.d_,B.jH,D.fL),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Yq(0):s).length))break
if(!B.d.q(g.gj7(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Yq(0)
o=s}else o=s
n=s[u]
n=A.e0(B.z,new C.Rv(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Yq(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.rt(new A.bq(0,p,t),new C.ctS(),new T.ES(u,j,new C.Rv(l.b,k,62,!1,j),new A.l0(0.25,new C.Rv(m.b,k,62,!1,j),j),new A.ku(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,T.hP7(),!0,!0,j,j,j,j,j,j,!1,B.j6,j,new A.bf("chip-"+r,a0),w),B.b_,B.j5,j,new A.bf("t"+r+"-"+q,a0),v))}++u}g=A.c0(B.fX,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.am(B.a0,j,B.ac,B.t,e,j)},
$S:65}
C.ctV.prototype={
$1(d){return new A.m(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:762}
C.ctO.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gj7().length!==0&&!B.d.q(t.gj7(),-1)
return A.b4(p,p,p,new C.beR(q.b,o,v,w,p),B.aA)},
$S:52}
C.ctQ.prototype={
$1(d){return this.a.gj7()[this.b]===-1},
$S:z+30}
C.ctR.prototype={
$1(d){return this.a.cWg(this.b,d.a)},
$S:z+31}
C.ctP.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj7()[t]!==-1,r=A.n(18),q=e.length!==0?B.d_.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.d_:B.jW,B.r,2)
u=s?A.l3(new C.ctN(),A.at(new C.Rv(u.gaHu()[u.gj7()[t]].b,u.gaHu()[u.gj7()[t]].a,62,!1,v),v,v,v),B.n1,B.j5,v,v,new A.bq(0.3,1,x.X),x.i):D.bfO
return A.cY(v,u,v,v,B.b_,new A.p(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:2032}
C.ctN.prototype={
$3(d,e,f){return A.e0(B.z,f,e,null,null)},
$S:111}
C.ctS.prototype={
$3(d,e,f){return A.dQ(f,new A.m(Math.sin(e*24)*8*(1-e),0))},
$S:111}
C.cUh.prototype={
$1(d){return d>=1},
$S:124}
C.cIS.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkW()[w.e].d.length)w.l(new C.cIR(w))},
$S:10}
C.cIR.prototype={
$0(){return this.a.f++},
$S:0}
C.cJ_.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cJ0.prototype={
$0(){var w=this.a,v=this.b
w.z.K(0,v)
w.Q=v},
$S:0}
C.cJ1.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cIZ(w))},
$S:0}
C.cIZ.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cJ2.prototype={
$0(){return this.a.f++},
$S:0}
C.cJ3.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cJ4.prototype={
$0(){},
$S:0}
C.cJ5.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a7(0)
w.as=!1
w.ay=0},
$S:0}
C.cIU.prototype={
$0(){return A.a8(this.a,!1).i1()},
$S:0}
C.cIV.prototype={
$3(d,e,f){var w=null
return A.l3(new C.cIT(this.a,e),w,B.b_,B.hy,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:2033}
C.cIT.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.d_.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.H,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.q(v,A.ic(new A.C_(new A.vb(B.v.j(e),B.MZ,v,B.ZP),H.c_v(A.b4(v,v,v,new C.aDj(u.gkW()[u.e].c,u.as,v),B.aA),new A.EX(w,w,B.XI)),v),B.ap),B.f,v,v,new A.p(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2034}
C.cIW.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,14*(1-e))),e)},
$S:95}
C.cIX.prototype={
$3(d,e,f){return A.dQ(f,new A.m(Math.sin(e*22)*8*(1-e),0))},
$S:111}
C.cIY.prototype={
$0(){return this.a.bsU(this.b)},
$S:0}
C.fgU.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.aoR$)
v.aoR$=w
v.qp$.sp(0,w)
v.asL(u)},
$S:7}
C.frg.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a2(0)
w.a.$0()},
$S:10}
C.bVL.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bVK())},
$S:0}
C.bVK.prototype={
$0(){},
$S:0}
C.bVI.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bVG.prototype={
$0(){},
$S:0}
C.bVH.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gNH()
w=s+1>=r.length?3:5
break
case 3:q=C.bJq(p.garB(0),0,r.length)
p.l(new C.bVD(p,q))
o=p
w=6
return A.b(C.Ca(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.Cb(s.d,s.c.a,"school",p.garB(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bVE())
w=4
break
case 5:p.l(new C.bVF(p))
p.gqK().WZ(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bVD.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bVE.prototype={
$0(){},
$S:0}
C.bVF.prototype={
$0(){return this.a.x++},
$S:0}
C.bVJ.prototype={
$0(){return this.a.M2(this.b)},
$S:0}
C.bVC.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).i1()},
$S:0}
C.fgV.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.m(t,s),q=v.b,p=v.d,o=p?C.hPl(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.Fc
C.Ts(q,D.eDE,0,0.2,-0.6,-0.2,null,w,D.eCn,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a6(0,new A.m(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.T()
p=A.L()
p.r=D.Hh.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.m(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.fgW.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Ts(this.a,D.eCK,0,u,0.7,-0.5,null,null,D.KD,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.fgX.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Ts(this.a,D.eEr,0,0,0.8,-0.5,null,null,D.KD,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.fgY.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Ts(w.b,D.eDy,0,v,-0.8,-0.5,null,null,D.KD,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.fgZ.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.m(34,-122+Math.sin(w*5)*5)
else v=v?D.eDC:D.Fc
C.Ts(p,D.eD2,0,t,0,-0.6,null,v,D.KD,3,0,s,1.3,u,0,w,0)
q=q.cfM(new A.m(222,455),9)
$.T()
w=A.L()
w.r=B.d_.gp(0)
p.af(q,w)},
$S:0}
C.fh_.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:775}
C.bVo.prototype={
$2(d,e){return d+e},
$S:61}
C.bVz.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bVA.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bVB.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj7()[u.b]=s
t.gj7()[u.d]=t.y
w=t.as
v=t.qp$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bVv.prototype={
$1(d){return d},
$S:101}
C.bVu.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qp$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bVw.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bVx.prototype={
$0(){},
$S:0}
C.bVy.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.Gq(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.ca(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a7(0)},
$S:0}
C.bVq.prototype={
$0(){return A.a8(this.a,!1).i1()},
$S:0}
C.bVr.prototype={
$2(d,e){var w=this.a
w=w.gkW()[w.f].e
return B.n.aQ(w[d],w[e])},
$S:61}
C.bVs.prototype={
$2(d,e){var w=null,v=C.hpG(new A.av(A.aU(1/0,e.a,e.b),A.aU(1/0,e.c,e.d))),u=this.a
return A.aA(B.bZ,new A.e9(A.b4(w,w,w,new C.bm8(u,u.qp$),B.aA),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bVp(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bVp.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj7().length
u=B.n.D(B.h.bd((t.a-s.a)/r/450*v),0,v-1)
w.d6g(w.gj7()[u])}},
$S:24}
C.bVt.prototype={
$1(d){var w=this.a
return w.gkW()[w.f].d[d]},
$S:80}
C.dwy.prototype={
$2(d,e){return 0},
$S:61}
C.bVa.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bV9())},
$S:0}
C.bV9.prototype={
$0(){},
$S:0}
C.bV8.prototype={
$0(){},
$S:0}
C.bV2.prototype={
$0(){},
$S:0}
C.bV3.prototype={
$0(){},
$S:0}
C.bV7.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.BX},
$S:0}
C.bV6.prototype={
$1(d){var w=null,v=this.a.gqK(),u=A.c(d,w,w,w,w,w,w,D.aYs,w,w,w),t=v.gbpf(0)
return A.aA(B.bZ,A.w(A.a([u,B.bs,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aYF,w,w,w)],x.p),B.B,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbvf(v),w,w,w,w,w,w,!1,B.a4)},
$S:126}
C.bV4.prototype={
$0(){return this.a.M2(this.b)},
$S:0}
C.bV5.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).i1()},
$S:0}
C.bV1.prototype={
$0(){return A.a8(this.a,!1).i1()},
$S:0}
C.e7p.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e7q.prototype={
$1(d){return this.a},
$S:42}
C.e7r.prototype={
$0(){var w=this.a
return w.d=w.gTW().bhz(this.b)},
$S:0}
C.e7n.prototype={
$1(d){return new C.US(this.a,null)},
$S:z+32}
C.e7o.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e7m.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hH,w,w,w)
return A.ek(A.a([A.bL(!1,E.b_5,w,w,!0,w,w,w,new C.e7k(d),w,w),A.bL(!1,D.hcr,w,w,!0,w,w,w,new C.e7l(d),w,w)],x.p),w,w,D.fL,v,w,w,w,w,D.fZM,w)},
$S:17}
C.e7k.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e7l.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.e7j.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e7s.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e7t.prototype={
$0(){var w=this.a,v=this.b,u=C.bH6(v,10,w.r,!1)
return w.uU(C.hyS(w.a.d,"kahoot",u,w.gb92(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e7u.prototype={
$0(){var w=this.a
return w.uU(new C.anu(this.b,w.a.d,w.r,null))},
$S:0}
C.e7v.prototype={
$0(){var w=this.a
return w.uU(new C.alC(this.b,w.a.d,w.r,null))},
$S:0}
C.e7y.prototype={
$0(){var w=this.a
return w.uU(new C.awx(this.b,w.a.d,w.r,null))},
$S:0}
C.e7z.prototype={
$0(){var w=this.a
return w.uU(new C.aAt(this.b,w.a.d,w.r,null))},
$S:0}
C.e7A.prototype={
$0(){var w=this.a
return w.uU(new C.anx(this.b,w.a.d,w.r,null))},
$S:0}
C.e7B.prototype={
$0(){var w=this.a
return w.uU(new C.anB(this.b,w.a.d,w.r,null))},
$S:0}
C.e7C.prototype={
$0(){var w=this.a
return w.uU(new C.anD(this.b,w.a.d,w.r,null))},
$S:0}
C.e7D.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d6G()
return v.uU(C.hyS(v.a.d,"creator_"+u.a,w,v.gb92(),"A game by the family",t,this.c.a))},
$S:0}
C.e7E.prototype={
$0(){return this.a.PM(this.b)},
$S:0}
C.e7F.prototype={
$0(){return this.a.YS(0,this.b)},
$S:0}
C.e7w.prototype={
$0(){return this.a.PM(null)},
$S:0}
C.e7x.prototype={
$0(){return this.a.L(x.q).f.T(D.fCL)},
$S:0}
C.bVm.prototype={
$0(){var w=this.a
w.d=D.b3B
w.z=3},
$S:0}
C.bVn.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a2(0)
w.aS_()}else w.l(new C.bVl(w))},
$S:10}
C.bVl.prototype={
$0(){return this.a.z--},
$S:0}
C.bVc.prototype={
$0(){var w=this.a
w.d=D.aeP
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bVd.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bVb(w))
if(w.as<=0){d.a2(0)
w.b8Z(-1)}},
$S:10}
C.bVb.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bVi.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Yo},
$S:0}
C.bVj.prototype={
$0(){return this.a.e++},
$S:0}
C.bVf.prototype={
$0(){var w=this.a
w.d=D.b3C
w.ay=this.b},
$S:0}
C.bVg.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bVk.prototype={
$2(d,e){return B.n.aQ(e.b,d.b)},
$S:2035}
C.bVh.prototype={
$0(){return this.a.M2(this.b)},
$S:0}
C.bVe.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).i1()},
$S:0}
C.bUN.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ay()
s=A.a([new A.au(new A.bb(s,B.b9,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.bb(u,B.b9,B.aP),r))}return s},
$S:2036}
C.bUO.prototype={
$0(){return this.a.gDQ().c.push(C.hjk(null,0,20,""))},
$S:0}
C.bUY.prototype={
$1(d){var w=null
return A.bC(w,new A.b6(4,A.n(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dA,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.FL,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:257}
C.bUX.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDQ().c,m=this.b,l=n[m],k=o.cj0(l),j=B.c.j(0.06),i=A.n(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.LX,p,p,p),B.aX],g)
if(n.length>1)f.push(A.aJ(p,p,p,p,B.atT,p,p,p,new C.bUS(o,m),p,p,p,p,p,p))
n=J.a1(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.i,0,p,p),A.aN(p,B.M,!1,p,!0,B.t,p,A.aP(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bUT(l),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a7,p,B.ao,p,p,p,p),B.N],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aFX[v]
t=D.aFD[v]
s=v+1
f.push(new A.C(B.eC,new A.c1(B.aK,B.e,B.i,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.G(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.aa,new A.bu(1,B.b8,A.aN(p,B.M,!1,p,!0,B.t,p,A.aP(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bUU(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a7,p,B.ao,p,p,p,p),p),new Av.Q6(v,l.c,new C.bUV(o,l),p,!1,D.lY,p,p,p,p,p,!1,!1,p,I.b4j,p,p,p,p,p,w)],g),p),p))}f.push(D.h4s)
f.push(B.aj)
n=A.a([D.fYQ,B.aa],g)
for(r=0;r<3;++r){q=D.cjF[r]
n.push(new A.C(B.f6,A.jl(p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bUW(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.i,0,p,p))
return A.q(p,A.w(f,B.B,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(j,p,h,i,p,p,B.m),p,p,p,B.kM,B.bg,p,p,p)},
$S:154}
C.bUS.prototype={
$0(){var w=this.a
return w.l(new C.bUR(w,this.b))},
$S:0}
C.bUR.prototype={
$0(){return B.d.cP(this.a.gDQ().c,this.b)},
$S:0}
C.bUT.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bUU.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bUV.prototype={
$1(d){return this.a.l(new C.bUQ(this.b,d))},
$S:162}
C.bUQ.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bUW.prototype={
$1(d){return this.a.l(new C.bUP(this.b,this.c))},
$S:9}
C.bUP.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e94.prototype={
$0(){var w=this.a
w.wS()
w.a.bw()
w.a.qD()},
$S:0}
C.e93.prototype={
$0(){var w=this.a
w.wS()
w.a.bw()
w.a.qD()},
$S:0}
C.e96.prototype={
$0(){var w=this,v=w.b
if(J.cM(v)||J.cj(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e97.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e98.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e92.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e95.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e9a.prototype={
$0(){this.a.Q7()
return null},
$S:0}
C.e99.prototype={
$0(){return this.a.FK(this.b)},
$S:0}
C.e8v.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bL(!1,B.dy,w,w,!0,w,w,w,new C.e8t(d),w,w),r=A.bp(B.bU,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bH(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e8u(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:17}
C.e8t.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e8u.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.e8w.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cST(this.b)},
$S:0}
C.e8q.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aXE(w.b,w.c,w.d)},
$S:7}
C.e7S.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e7T.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e89.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.HP(t.a.c),$async$$0)
case 2:s=r.nT(q.dO(e,new C.e87(t)))
if(s!=null&&t.c!=null)t.l(new C.e88(t,s))
t.a.bw()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e87.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e88.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e8a.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e8b.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e8p.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cTF(C.hPv(w),w)},
$S:0}
C.e86.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.Xc(u,w,C.aSZ(u,w),new C.e85(v),null)},
$S:z+37}
C.e85.prototype={
$1(d){return this.bqG(d)},
bqG(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e84(s,d))
w=3
return A.b(s.uQ(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:726}
C.e84.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.bhz(this.b)},
$S:0}
C.e8m.prototype={
$1(d){return d.as},
$S:z+1}
C.e8n.prototype={
$1(d){var w=this
return new A.eb(new C.e8l(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e8l.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.el:B.c,h=A.n(26),g=A.K(B.bU.j(0.5),B.r,1.5),f=A.q(k,D.bZ0,B.f,k,k,new A.p(B.bU.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.w(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.B,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bc,a0,A.aJ(k,k,k,k,A.V(B.cC,j?B.bv:B.bl,k,k,k,k),k,k,k,new C.e8f(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.i,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bU:B.bU.j(0.1)
p=new A.aQ(20,20)
o=t.a===r
n=new A.ax(B.bU,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bU
a0.push(A.aA(k,A.cY(k,A.c(m,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b_,new A.p(q,k,new A.bE(n,n,n,n),new A.bc(p,p,p,p),k,k,B.m),B.hn,k,k,k,k,B.De,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e8g(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.c0(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.cam,new A.C(D.bIU,f,k),new A.C(D.bIL,e,k),new A.C(B.ri,a0,k),new A.C(X.ap4,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.V(Ak.arM,j?B.bv:B.bl,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.C(D.bIN,A.A(A.a([a0,B.ar,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,k,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.azd(k,B.bU,k,k,!1,B.y,k,k,k,k,k,k,new C.e8h(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.i,0,k,k),k))}f.push(B.aB)
j=A.n(20)
e=A.a([new A.ac(0,B.H,B.az.j(0.35),B.hS,12)],x.V)
f.push(A.aA(k,A.q(k,A.A(A.a([D.fZb,B.bc,D.bNa,D.bZG],w),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,k,j,e,D.cea,B.m),k,k,k,B.ie,B.bD,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e8i(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.C(B.xd,A.A(A.a([A.E(A.dV(B.dy,new C.e8j(a1),k),1),B.ar,A.E(A.bH(N.b_x,k,new C.e8k(t,a1),A.bp(B.bU,k,k,k,k,k,B.cq,k,k,k,k,k)),1)],w),B.l,k,B.e,B.i,0,k,k),k))
return A.bn(!0,A.q(k,A.cc(A.w(f,B.B,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.ap,k,k,new A.p(i,k,g,h,k,k,B.m),k,k,k,B.zr,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:90}
C.e8f.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e8g.prototype={
$0(){return this.b.$1(new C.e8e(this.a,this.c))},
$S:0}
C.e8e.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e8h.prototype={
$1(d){var w=this.a
w.l(new C.e8c(w,d))
this.b.$1(new C.e8d())},
$S:9}
C.e8c.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e8d.prototype={
$0(){},
$S:0}
C.e8i.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(new A.aJx(!0,w))
return null},
$S:0}
C.e8j.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e8k.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(new A.aJx(!1,w))
return null},
$S:0}
C.e8o.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cTt(this.b.b)
w.r.a7(0)},
$S:0}
C.e7G.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.akm(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hIa(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e7H.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aI_(w)},
$S:0}
C.e8y.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.afB(this.b,w,this.c,null)},
$S:z+39}
C.e8s.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.el:B.c,t=A.n(20),s=A.V(B.kQ,B.aW,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.w(p,B.l,w,B.e,B.P,0,B.p)
return A.ek(A.a([A.bH(D.hgh,w,new C.e8r(d),A.bp(B.aW,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.ba(t,B.a1),r,w)},
$S:17}
C.e8r.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e7I.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e7J.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e7K.prototype={
$1(d){return d.a},
$S:z+8}
C.e7L.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.id(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aI_(w)},
$S:0}
C.e7P.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.akm(q)
w=A.U(q).k("X<1>")
q=A.B(new A.X(q,new C.e7N(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hIa(v.e,null,r,v.f,v.r,new C.e7O(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e7O.prototype={
$0(){return this.a.acG(this.b)},
$S:0}
C.e7N.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e7Q.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.U(w).k("O<1,id>")
w=A.B(new A.O(w,new C.e7M(this.b),v),v.k("aj.E"))
u.d=t.aI_(w)},
$S:0}
C.e7M.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e8x.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e81.prototype={
$1(d){return d.length!==0},
$S:3}
C.e82.prototype={
$1(d){var w=this
return new A.eb(new C.e80(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e80.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.el:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aS:B.ax,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.O(o,new C.e7X(u,e,o),A.U(o).k("O<1,x>")))
p.push(B.N)
u=w.d
p.push(A.aN(v,B.M,!1,v,!0,B.t,v,A.aP(),u,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.n(12),B.dz),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.am,v,v,v,v,v,B.mT,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.w(p,B.al,v,B.e,B.P,0,B.p)
t=w.a
return A.ek(A.a([A.bL(!1,B.dy,v,v,!0,v,v,v,new C.e7Y(d),v,v),A.bH(B.M5,v,new C.e7Z(t,u,o,e),A.bp(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.h2O,v,new C.e8_(t,u,o,d),A.bp(B.aW,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:214}
C.e7X.prototype={
$1(d){var w=null
return A.dP(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aJ(w,w,w,w,D.c7a,w,w,w,new C.e7W(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2037}
C.e7W.prototype={
$0(){return this.a.$1(new C.e7U(this.b,this.c))},
$S:0}
C.e7U.prototype={
$0(){return B.d.X(this.a,this.b)},
$S:0}
C.e7Y.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e7Z.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e7V(w.c,u))
v.bM(0,B.ck)}},
$S:0}
C.e7V.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e8_.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a8(w.d,!1).N(!0)},
$S:0}
C.e83.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cU7(this.b,D.vq,C.HN(v,w.a.c))},
$S:0}
C.e8F.prototype={
$1(d){return d.as},
$S:z+1}
C.e8G.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j5(this.b,w)},
$S:0}
C.e8H.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.iHh(v)
return w.XE(v==null?null:v.a)},
$S:0}
C.e8I.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.ihS(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gco(k)){k=A.aU(1/0,e.a,e.b)
s=A.aU(1/0,e.c,e.d)
l.cAZ(new A.av(u,t),v.gboh(),new A.av(k,s))}k=A.n(22)
s=this.b.a
r=s?D.d8w:D.d6o
q=A.K(s?B.dA:D.bnI,B.r,1)
p=A.n(22)
o=A.bT(0,A.b4(m,m,m,new C.bic(s,m),B.aA),0,0,0)
n=Math.max(e.b,e.d)
return A.q(m,A.bv(p,new A.am(B.a0,m,B.ac,B.t,A.a([o,A.bT(0,A.u4(new A.R(n,n,n,n),new A.a5(u,t,new C.bj9(l.d,v,l.f,w,new C.e8B(l),l.gckc(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bBb(s,new C.e8C(l,e),new C.e8D(l,e),new C.e8E(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.p(m,m,q,k,m,new A.a6(B.aU,B.b2,B.w,r,m,m),B.m),m,m,m,S.ao3,m,m,m,m)},
$S:173}
C.e8B.prototype={
$1(d){var w=this.a
w.l(new C.e8z(w,d))},
$S:2}
C.e8z.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.X(0,v)
else w.K(0,v)},
$S:0}
C.e8C.prototype={
$0(){var w=this.b
return this.a.bfH(1.25,new A.av(A.aU(1/0,w.a,w.b),A.aU(1/0,w.c,w.d)))},
$S:0}
C.e8D.prototype={
$0(){var w=this.b
return this.a.bfH(0.8,new A.av(A.aU(1/0,w.a,w.b),A.aU(1/0,w.c,w.d)))},
$S:0}
C.e8E.prototype={
$0(){var w=this,v=w.b
return w.a.aXE(new A.av(A.aU(1/0,v.a,v.b),A.aU(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gboh())},
$S:0}
C.e8J.prototype={
$0(){var w=this.a
return w.l(new C.e8A(w))},
$S:0}
C.e8A.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e7R.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fP(new A.fD(s.c)),$async$$0)
case 2:t.z0("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dlH.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bn_(u,C.hUj(v.c,u),new C.dlG(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dlG.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dlI.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bqn(d.d,d.c,u.f.q(0,d.a),new C.dlF(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dlF.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fS_.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nT(new A.cR(new A.X(v,new C.fS0(d),w.k("X<1>")),new C.fS1(),w.k("cR<1,o>")))},
$S:z+19}
C.fS0.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fS1.prototype={
$1(d){return d.a},
$S:z+8}
C.fRY.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fRZ.prototype={
$1(d){return d.b},
$S:z+8}
C.fS4.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nT(new A.cR(new A.X(v,new C.fS5(d),w.k("X<1>")),new C.fS6(),w.k("cR<1,o>")))},
$S:z+19}
C.fS5.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fS6.prototype={
$1(d){return d.a},
$S:z+8}
C.fS2.prototype={
$1(d){var w,v=A.eC([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.K(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fS3.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dlK.prototype={
$0(){return this.a},
$S:z+46}
C.dm0.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:259}
C.dlT.prototype={
$2(d,e){var w=this.a.c0(0,d,new C.dlU()),v=J.a1(w)
if(!v.q(w,e))v.K(w,e)},
$S:122}
C.dlU.prototype={
$0(){return A.a([],x.s)},
$S:777}
C.dlS.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eG(w,e)
return w===!0},
$S:269}
C.dlL.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dlR.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dlQ.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.K(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aO(v==null?D.Ew:v)
u=1
while(v.B())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aO(v==null?B.M:v)
while(v.B()){t=v.gP(v)
if(e.q(0,t))continue
e.K(0,t)
t=w.h(0,t)
t=J.aO(t==null?D.Ew:t)
while(t.B())u+=s.$2(t.gP(t).a,e)}return u},
$S:2039}
C.dlM.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dlV.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.K(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aO(u==null?B.M:u)
t=v.d
for(;;){if(!u.B()){s=null
break}A:{s=u.gP(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.K(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.u(w,r)
if(u){t=t.h(0,s)
t=J.aO(t==null?D.Ew:t)
while(t.B()){r=t.gP(t)
if(r.a!==a9&&!B.d.aR(w,new C.dlW(r)))w.push(r)}}B.d.br(w,new C.dlX(a8))
B.d.b_(w,new C.dlY())
q=C.ihR(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.fav],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.btv(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2040}
C.dlW.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dlX.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dlY.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.dlZ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a1(n),v=o.c,u=-1/0,t=0;t<w.gI(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b9(v,A.a3(v).k("b9<2>")).cF(0,0,B.oC)+88-w.gH(n).a}else u=0
for(w=J.a1(n),v=o.c,t=0;t<w.gI(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:806}
C.dm_.prototype={
$1(d){return 16+d*156},
$S:153}
C.dlJ.prototype={
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
t.n(0,d,new C.H4(r,new A.m(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.H4(s,new A.m(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.H4(s,new A.m(e,v)))}t=o.r.h(0,d)
t=J.aO(t==null?B.M:t)
s=o.w
while(t.B()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Lm(d,new A.m(e+t,w),s,s.length))}},
$S:198}
C.dlN.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aMI(new A.m(v.a,v.b+28),new A.m(w.a,w.b+28),!0,null))},
$S:122}
C.dlO.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dlP.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:778}
C.dm1.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:778}
C.dm2.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:482}
C.dm3.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:192}
C.dm4.prototype={
$1(d){return d>=0.5},
$S:124}
C.fwR.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.hb(A.aM(!1,v,!0,new A.a5(38,38,A.V(d,this.a.c?B.c:B.cx,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w,w)},
$S:2042}
C.f6D.prototype={
$1(d){var w=null,v=A.n(8),u=B.bU.j(0.12),t=A.n(8)
return new A.C(B.lb,A.aM(!1,v,!0,A.q(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fOu,B.K,w,w),B.f,w,w,new A.p(u,w,w,t,w,w,B.m),w,w,w,w,B.PF,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f6C(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.f6C.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dCk.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dCj.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mU,B.K,w,w)
return A.ek(A.a([A.bL(!1,B.dy,w,w,!0,w,w,w,new C.dCh(d),w,w),A.bL(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.nd,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dCi(d),w,w)],x.p),B.bb,B.D9,w,u,D.bJO,w,D.bLK,new A.ba(v,B.a1),w,w)},
$S:17}
C.dCh.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dCi.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dCt.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dCu.prototype={
$1(d){var w=this.a
return w.l(new C.dCs(w,d))},
$S:z+49}
C.dCs.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dCv.prototype={
$1(d){var w=null
return A.r1(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dCy.prototype={
$1(d){var w=this.a
return w.l(new C.dCr(w,d))},
$S:35}
C.dCr.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dCx.prototype={
$1(d){var w=null
return A.r1(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dCz.prototype={
$1(d){var w=this.a
return w.l(new C.dCq(w,d))},
$S:35}
C.dCq.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dCA.prototype={
$0(){var w=this.a
return w.l(new C.dCp(w))},
$S:0}
C.dCp.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dCB.prototype={
$0(){var w=this.a
return w.l(new C.dCo(w))},
$S:0}
C.dCo.prototype={
$0(){return++this.a.at},
$S:0}
C.dCC.prototype={
$0(){var w=this.a
return w.l(new C.dCn(w))},
$S:0}
C.dCn.prototype={
$0(){return--this.a.ax},
$S:0}
C.dCD.prototype={
$0(){var w=this.a
return w.l(new C.dCm(w))},
$S:0}
C.dCm.prototype={
$0(){return++this.a.ax},
$S:0}
C.dCE.prototype={
$1(d){var w=this.a
return w.l(new C.dCl(w,d))},
$S:9}
C.dCl.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dCw.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dCF.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bU.j(0.18)
else w=q.c.a?B.el:B.c
v=A.n(12)
if(p)u=B.bU
else u=(q.c.a?B.eo:B.bP).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bU
else t=q.c.a?B.bv:B.bl
t=A.V(f,t,r,r,r,18)
if(p)s=B.bU
else s=q.c.a?B.bv:B.bl
return A.E(A.aE(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cY(r,A.w(A.a([t,B.at,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.i,0,B.p),r,r,B.b_,new A.p(w,r,u,v,r,r,B.m),B.eK,r,r,r,r,B.jD,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dCG(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dCG.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dCP.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cig.prototype={
$2(d,e){return new A.bw(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:100}
C.cin.prototype={
$1(d){return d.ak()},
$S:z+5}
C.cio.prototype={
$2(d,e){var w=J.b8(e,new C.cim(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bw(d,w,x.d2)},
$S:z+53}
C.cim.prototype={
$1(d){return d.ak()},
$S:z+12}
C.cii.prototype={
$1(d){return C.anG(A.a0(d,x.N,x.z))},
$S:z+9}
C.cij.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cik.prototype={
$1(d){return C.hyR(A.a0(d,x.N,x.z))},
$S:z+11}
C.cil.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cis.prototype={
$1(d){return new A.aJJ(d.f.length,d.a,d.b)},
$S:z+55}
C.cit.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:691}
C.cip.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.ciq.prototype={
$1(d){return d.cT5(C.HN(d,this.a))},
$S:z+85}
C.e8S.prototype={
$1(d){return C.uP(d,this.a.a.c)},
$S:z+3}
C.e8T.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e8X.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e8Y.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e8P.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b3t(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zC("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(M.pV(r.c,r.e),$async$$0)
case 4:s.zC(p)
w=5
return A.b(s.L3(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e8Q.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b3t(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zC("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(M.pV(r.c,r.e),$async$$0)
case 4:s.zC(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e8R.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Xf(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zC("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zC("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zC("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.L3(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ad(j)
o=r.a
if(o.c==null){w=1
break}o.zC(B.a.es(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e8W.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b3s(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zC("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a8(r,!1).c9(A.e4(new C.e8V(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(M.pV(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e8V.prototype={
$1(d){var w=this.b
return new C.a1z(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e8U.prototype={
$1(d){return D.hUx},
$S:z+58}
C.e9_.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e90.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e8Z(w,d)
return new A.C(B.d2,new C.bjd(this.b,d.c,d.a,w,null),null)},
$S:2043}
C.e8Z.prototype={
$0(){return this.a.Zw(this.b.b)},
$S:0}
C.e8K.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e8L.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e8M.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e8N.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e8O.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e91.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.Y(s,"NGMYFTSYNC2"))t=!A.d_(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a8(this.b,!1).N(s)
return}},
$S:239}
C.dUN.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dUO.prototype={
$0(){return B.d.gH(D.a8a)},
$S:z+60}
C.dUP.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b4(A.at(A.V(this.b.d,B.c.j(0.95),w,w,D.dg9,44),w,w,w),w,w,new C.bo7(u,t,v,w),B.aA)},
$S:52}
C.h9J.prototype={
$1(d){return A.ol(new C.h9I(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:129}
C.h9I.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.el:B.c,p=A.a([new A.ac(0,B.H,B.v.j(r?0.35:0.08),B.uj,24)],x.V),o=r?B.eo:B.bP
o=A.q(t,t,B.f,t,t,new A.p(o,t,t,A.n(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aW.j(0.25),B.bU.j(0.18)],x.O)
w=A.q(t,D.c19,B.f,t,t,new A.p(t,t,t,A.n(12),t,new A.a6(B.a5,B.a9,B.w,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aS:B.ax,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.q(t,A.w(A.a([B.S,o,new A.C(E.ap8,A.A(A.a([w,B.bc,A.E(A.w(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bv:B.bl,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.i,0,B.p),1)],u),B.l,t,B.e,B.i,0,t,t),t),A.E(A.iA(!0,t,e,B.y,D.fAL,new C.h9H(this.b,s),20,B.aoD,t,B.ah,!1),1)],u),B.l,t,B.e,B.i,0,B.p),B.f,t,t,new A.p(q,t,t,B.lu,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:117}
C.h9H.prototype={
$2(d,e){var w=null,v=D.a8a[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.K(s?B.eo:B.bP,B.r,1),q=A.a([new A.ac(0,B.H,B.v.j(s?0.35:0.08),B.eF,8)],x.V),p=A.n(15),o=A.E(new C.a8t(v.a,!0,w),1),n=s?B.kb:B.iM,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aS:B.ax,w,w,w,w,w,w,w,w,13,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aE(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eM(A.bv(p,A.w(A.a([o,A.q(w,A.w(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.B,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.iQ,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.ap),w,new A.p(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h9G(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:76}
C.h9G.prototype={
$0(){A.a8(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cse.prototype={
$0(){return this.a.aj6(this.b)},
$S:0}
C.h95.prototype={
$1(d){return D.hP_},
$S:z+61}
C.hgX.prototype={
$1(d){var w=this
return new C.a3n(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.h99.prototype={
$1(d){return new C.a0c(this.a,null)},
$S:z+63}
C.h98.prototype={
$1(d){return D.hQ1},
$S:z+64}
C.dd9.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dda.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dd8(w,d))},
$S:35}
C.dd8.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ddb.prototype={
$1(d){return this.a.LH()},
$S:2}
C.ddc.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dd5.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dd6.prototype={
$1(d){return this.a.LH()},
$S:2}
C.dd7.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cKx.prototype={
$0(){},
$S:0}
C.cKD.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cKE.prototype={
$0(){return this.a.aST(-1)},
$S:0}
C.cKF.prototype={
$1(d){return this.a.l(new C.cKC())},
$S:2}
C.cKC.prototype={
$0(){},
$S:0}
C.cKG.prototype={
$0(){return this.a.aST(1)},
$S:0}
C.cKH.prototype={
$1(d){return this.a.l(new C.cKB())},
$S:2}
C.cKB.prototype={
$0(){},
$S:0}
C.cKI.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aW.j(0.2)
if(s)v=B.aW
else v=this.b.a?B.eo:B.bP
return A.vg(u,u,B.b6,r,u,new C.cKA(t,d),B.xh,s,w,u,new A.ax(v,1,B.r,-1),B.cp)},
$S:2044}
C.cKA.prototype={
$1(d){var w=this.a
return w.l(new C.cKy(w,this.b))},
$S:9}
C.cKy.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cKJ.prototype={
$1(d){return this.a.l(new C.cKz())},
$S:2}
C.cKz.prototype={
$0(){},
$S:0}
C.cKK.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.fwm.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a8(this.b,!1).N(w)},
$S:2}
C.fwn.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.fwo.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a8(this.b,!1).N(w)},
$S:0}
C.fwk.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbFL()
w=w.e
s=A.n(B.n.D(v-1,0,v))
return A.b4(new A.C(D.bLJ,new A.e9(A.q(r,q.a.c,B.f,r,r,new A.p(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bB0(p,v,this.b.a,u,t,r),r,r,B.aA)},
$S:52}
C.fwl.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=B.dS.aA(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.ap(B.aW,B.bU,w)
s.toString
s=A.a([B.b6,s,B.aW],x.O)
return A.aE(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eM(D.eIh,r,new A.p(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a6(new A.dl(-1.2+t,-0.5),new A.dl(1.2-t,0.8),B.w,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:148}
C.h7l.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:58}
C.f3N.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f3E.prototype={
$0(){return this.a.e=!0},
$S:0}
C.f3F.prototype={
$0(){return this.a.e=!1},
$S:0}
C.f3L.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.eb(new C.f3K(w,this.b),null)},
$S:20}
C.f3K.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.el:B.c,t=A.n(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eB(w,u,new A.C(B.ap1,A.w(A.a([s,B.aj,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hF1(new C.f3H(r,e),r.a),B.aB,A.A(A.a([A.E(A.dV(B.dy,new C.f3I(d),w),1),B.ar,A.E(A.bH(B.XC,w,new C.f3J(r,d),A.bp(B.aW,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.db,w,new A.ba(t,B.a1),w)},
$S:104}
C.f3H.prototype={
$1(d){return this.b.$1(new C.f3G(this.a,d))},
$S:35}
C.f3G.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.f3I.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f3J.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(w)
return null},
$S:0}
C.f3M.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.UB(this.b)},
$S:0}
C.f3z.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bhF(w)},
$S:0}
C.f3D.prototype={
$1(d){return this.br3(d)},
br3(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.MJ(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j5(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f3C.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.U(w).k("X<1>")
w=A.B(new A.X(w,new C.f3B(this.b),v),v.k("M.E"))
u.d=t.bhF(w)},
$S:0}
C.f3B.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.f3O.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j5(this.b,w)},
$S:0}
C.f3P.prototype={
$1(d){return this.a.bK0(d,this.b)},
$S:z+67}
C.f3A.prototype={
$0(){return this.a.acF(this.b)},
$S:0}
C.hgK.prototype={
$1(d){return new C.afW(this.a,this.b,this.c,null)},
$S:z+68}
C.f3R.prototype={
$0(){return this.a.a1C(this.b)},
$S:0}
C.f3S.prototype={
$0(){return this.a.RS(this.b)},
$S:0}
C.f3T.prototype={
$0(){return this.a.FE(this.b)},
$S:0}
C.f3U.prototype={
$0(){return this.a.a1D(this.b)},
$S:0}
C.f3Q.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f3u.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f3v.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.f3w.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f3y.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qJ(),$async$$0)
case 2:if(t.c!=null)t.l(new C.f3x(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f3x.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.f4g.prototype={
$2(d,e){return d+e.gy9()},
$S:z+71}
C.f4c.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f4d.prototype={
$0(){return this.a.f=!1},
$S:0}
C.f3Y.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.el:B.c,s=A.n(24),r=A.q(v,D.c1D,B.f,v,v,new A.p(B.aC.j(u?0.18:0.08),v,A.K(B.aC.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.ax,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.ax
u=u?B.eo:B.bP
w=x.p
return A.eB(v,t,new A.C(B.xg,A.w(A.a([r,B.aN,q,B.N,p,B.df,A.A(A.a([A.E(A.dV(B.ox,new C.f3W(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fc,v,new A.ba(A.n(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.ar,A.E(A.bH(D.hkd,v,new C.f3X(d),A.bp(B.aC,v,v,v,v,v,B.fc,v,new A.ba(A.n(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.i,0,v,v)],w),B.l,v,B.e,B.P,0,B.p),v),v,v,v,v,v,B.db,v,new A.ba(s,B.a1),v)},
$S:46}
C.f3W.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.f3X.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.f46.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.el:B.c,i=A.n(28),h=A.a([new A.ac(0,B.H,B.v.j(k?0.35:0.08),B.fF,28)],x.V),g=k?D.do9:As.a7t,f=x.p
g=A.q(m,A.w(A.a([A.q(m,m,B.f,m,m,new A.p(B.c.j(0.45),m,m,A.n(99),m,m,B.m),m,4,m,m,m,m,m,40),B.aB,D.ftS,B.at,new A.bK(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cE,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.p(m,m,m,m,m,new A.a6(B.aw,B.aD,B.w,g,m,m),B.m),m,m,m,m,E.ap6,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.C,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.bau(B.b0,B.jJ,new C.f43(v,d),l,"Camera import","Scan QR"),1),B.ar,A.E(v.bau(B.cI,Q.Aj,new C.f44(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.i,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.C,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.aC.j(k?0.14:0.06)
q=A.n(16)
p=A.K(B.aC.j(0.28),B.r,1)
o=A.q(m,D.c0W,B.f,m,m,new A.p(B.aC.j(0.12),m,m,A.n(12),m,m,B.m),m,m,m,m,B.bS,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aS:B.ax,m,m,m,m,m,m,m,m,m,m,m,B.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.w(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.B,m,B.e,B.i,0,B.p),1)
return A.bn(!0,new A.C(B.xa,A.q(m,A.w(A.a([g,new A.C(B.ap2,A.w(A.a([w,B.S,u,B.bx,t,B.S,A.aE(!1,B.a3,!0,m,A.aM(!1,s,!0,A.q(m,A.A(A.a([o,B.bc,n,A.V(B.eL,k?B.bv:B.bl,m,m,m,m)],f),B.l,m,B.e,B.i,0,m,m),B.f,m,m,new A.p(r,m,p,q,m,m,B.m),m,m,m,m,B.bD,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.f45(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.B,m,B.e,B.i,0,B.p),m)],f),B.l,m,B.e,B.P,0,B.p),B.ap,m,m,new A.p(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:28}
C.f43.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.wr("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f44.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.wr("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f45.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.Pn(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f41.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.el:B.c,m=A.n(24),l=A.a([new A.ac(0,B.H,B.v.j(o?0.35:0.08),B.eQ,24)],x.V),k=o?B.eo:B.bP
k=A.q(q,q,B.f,q,q,new A.p(k,q,q,A.n(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bv:B.bl
u=A.bv(w,new A.a5(48,48,C.aUn(!0,A.n(12),48,P.Ql,u,v.c,48),q),B.ap)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aS:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.BJ(v.gy9())
s=x.p
r=this.a
return A.bn(!0,new A.C(B.xa,A.q(q,A.w(A.a([B.S,k,new A.C(D.ap_,A.A(A.a([u,B.bc,A.E(A.w(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bv:B.bl,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.B,q,B.e,B.i,0,B.p),1)],s),B.l,q,B.e,B.i,0,q,q),q),B.D_,r.cuU(B.vK,B.aW,new C.f4_(d),p,"QR code or backup file","Transfer project"),r.b7r(!0,B.eq,B.aC,new C.f40(d),p,"Remove from this device","Delete project"),B.S],s),B.l,q,B.e,B.P,0,B.p),B.f,q,q,new A.p(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:28}
C.f4_.prototype={
$0(){A.a8(this.a,!1).N("transfer")
return null},
$S:0}
C.f40.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
C.f42.prototype={
$1(d){return this.br4(d)},
br4(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.MJ(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wH(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f4j.prototype={
$0(){var w=this.a
w.a.bw()
w.l(new C.f4i(w))},
$S:0}
C.f4i.prototype={
$0(){return this.a.r++},
$S:0}
C.f4k.prototype={
$0(){var w=this.a
return w.l(new C.f4h(w))},
$S:0}
C.f4h.prototype={
$0(){return this.a.r++},
$S:0}
C.f3V.prototype={
$0(){var w=this.a.c
w.toString
return A.j5(w,null)},
$S:0}
C.f3Z.prototype={
$0(){return this.a.cnX(this.b)},
$S:0}
C.f4f.prototype={
$0(){var w=this.a
return w.l(new C.f4e(w,this.b))},
$S:0}
C.f4e.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f49.prototype={
$0(){return this.a.wr("scan")},
$S:0}
C.f4a.prototype={
$0(){return this.a.wr("file")},
$S:0}
C.f4b.prototype={
$1(d){return this.a.cuV(d,this.b)},
$S:z+72}
C.f48.prototype={
$0(){return this.a.FI(this.b)},
$S:0}
C.f47.prototype={
$0(){return this.a.a2a(this.b,this.c)},
$S:0}
C.cJT.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cJS.prototype={
$1(d){return d.ak()},
$S:z+74}
C.cJQ.prototype={
$1(d){return C.i_C(A.a0(d,x.N,x.z))},
$S:z+75}
C.cJR.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fQS.prototype={
$1(d){return d.y===D.le},
$S:z+3}
C.hhw.prototype={
$1(d){return C.aSZ(d,this.a)},
$S:z+3}
C.fOm.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bVS.prototype={
$1(d){return!d.as},
$S:z+1}
C.bVR.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bVO.prototype={
$1(d){return C.hyT(A.a0(d,x.N,x.z))},
$S:z+24}
C.bVP.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bVQ.prototype={
$1(d){return J.k(d)},
$S:15}
C.fEk.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fzP.prototype={
$1(d){return C.hod(A.a0(d,x.N,x.z))},
$S:z+79}
C.fzQ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fzR.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h8U.prototype={
$1(d){return J.k(d)},
$S:15}
C.h8V.prototype={
$1(d){return d.a},
$S:z+81}
C.h8W.prototype={
$1(d){return d.length!==0},
$S:3}
C.h8X.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h8Y.prototype={
$1(d){return d.UB(null).ak()},
$S:z+82}
C.hhu.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fRl.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fUW.prototype={
$1(d){return C.anG(A.a0(d,x.N,x.z))},
$S:z+9}
C.fUX.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fUY.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fUZ.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fV_.prototype={
$1(d){return C.uP(d,this.a)},
$S:z+3}
C.h8G.prototype={
$1(d){return C.uP(d,this.a)},
$S:z+3}
C.hhp.prototype={
$1(d){return C.anG(A.a0(d,x.N,x.z))},
$S:z+9}
C.hhq.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.hhr.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fR2.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fR3.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.hhA.prototype={
$1(d){return!d.as},
$S:z+1}
C.fQx.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fQy.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fQz.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.hgY.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fVN.prototype={
$1(d){return d.Q},
$S:z+15}
C.h8z.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fUT.prototype={
$1(d){return C.anG(A.a0(d,x.N,x.z))},
$S:z+9}
C.fUU.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fUV.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h8u.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fAp.prototype={
$1(d){return d.length!==0},
$S:3}
C.fAq.prototype={
$1(d){return C.hyT(A.a0(d,x.N,x.z))},
$S:z+24}
C.fAr.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fAs.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:15}
C.fAt.prototype={
$1(d){return d.length!==0},
$S:3}
C.fAH.prototype={
$2(d,e){return d.eG(new C.fAI(e))},
$S:2045}
C.fAI.prototype={
$1(d){$.an.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.co},
$S:2046}
C.fAE.prototype={
$1(d){return C.imZ(d,this.a)},
$S:z+84}
C.fAF.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fAG.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fF5.prototype={
$1(d){return d.a},
$S:z+56}
C.fF6.prototype={
$1(d){return d.length!==0},
$S:3}
C.fF7.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fI7.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fNA.prototype={
$1(d){return C.hKJ(d,C.HN(d,this.a))},
$S:z+5}
C.fNB.prototype={
$1(d){return C.hKK(d,C.HN(d,this.a))},
$S:z+5};(function aliases(){var w=C.aDl.prototype
w.byX=w.t
w=C.aBs.prototype
w.byS=w.t
w=C.aIW.prototype
w.bzk=w.t
w=C.aDm.prototype
w.byY=w.t
w=C.aDo.prototype
w.byZ=w.t
w=C.aDp.prototype
w.bz_=w.t
w=C.aPa.prototype
w.bBO=w.t
w=C.aRi.prototype
w.bE8=w.t
w=C.aRj.prototype
w.bE9=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aGn.prototype,"gcrH","crI",28)
var r
w(r=C.aDk.prototype,"gcki","ckj",65)
v(r,"gaR3","OU",0)
v(r,"gcAh","C2",0)
v(r,"gbRY","PC",0)
v(r,"gcP5","zD",0)
v(r,"gctS","a2V",0)
v(r,"gbNg","Pj",0)
v(r,"gbSn","YX",0)
w(r,"gbXu","bXv",78)
v(r,"gbHr","AV",0)
v(C.aDn.prototype,"gcP1","GC",0)
v(r=C.anv.prototype,"gbvh","bvi",2)
v(r,"gbv9","bva",2)
v(r,"gcQ8","cQ9",2)
u(r,"gqC","kR",0)
u(r=C.alD.prototype,"gf3","fU",2)
w(r,"gcll","clm",27)
u(C.awy.prototype,"gqC","kR",0)
v(r=C.aAu.prototype,"gd0O","d0P",2)
u(r,"gqC","kR",0)
u(C.aMO.prototype,"gbvf","bvg",2)
v(C.anE.prototype,"gCA","cQl",2)
u(r=C.anC.prototype,"gcR2","cR3",2)
u(r,"gqC","kR",0)
v(r=C.any.prototype,"gbu7","bu8",2)
v(r,"gcWe","cWf",2)
u(r=C.anA.prototype,"gf3","fU",2)
u(r,"giH","cPF",2)
v(r=C.anw.prototype,"gcPu","cPv",2)
u(r,"gbt0","jC",2)
v(r=C.aGY.prototype,"gaiJ","wI",0)
v(r,"gcn8","a20",0)
v(r,"gaVk","Jf",0)
v(r=C.aGV.prototype,"gcKU","a57",0)
v(r,"gaiJ","wI",0)
v(r,"gcye","a3A",0)
v(r,"gcn0","b5C",2)
v(r,"gco9","a2g",0)
w(r,"gckc","ckd",35)
v(r,"gbSf","Jk",0)
v(r,"gcM2","cM3",2)
v(r,"gc9E","a_K",0)
w(r,"gciH","ciI",36)
v(r,"gcmP","cmQ",2)
v(r=C.aFl.prototype,"gcfP","Rl",0)
v(r,"gcfR","cfS",2)
v(r,"gbOL","ach",0)
v(r=C.aGX.prototype,"gbVR","Zs",0)
v(r,"gc5s","a_8",0)
v(r,"gcEQ","a4u",0)
v(r,"gcAT","a43",0)
v(C.aGW.prototype,"gcAA","akw",0)
v(C.avL.prototype,"gciF","a1A",0)
v(C.aC2.prototype,"ga4Q","LH",2)
v(C.aC1.prototype,"ga4Q","LH",2)
v(C.aAG.prototype,"ga4Q","LH",2)
v(r=C.aIw.prototype,"gb6P","Sn",0)
v(r,"gbGf","Xy",0)
v(r,"gcnY","cnZ",2)
w(C.aIv.prototype,"gcjx","cjy",69)
t(C.aIx.prototype,"gaVf",0,0,null,["$1","$0"],["Je","bQ5"],70,0,0)
s(C,"hTo","ixi",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aF,[C.arg,C.vd,C.nQ,C.IS,C.ah9,C.Lf,C.ve,C.bWn,C.ty,C.brF,C.anN,C.afd,C.lP,C.bUZ,C.avX,C.zY,C.amk,C.Nl,C.bcS,C.abf,C.bki,C.ahg,C.aBI,C.ah4,C.aMO,C.Lm,C.H4,C.bjb,C.aMI,C.asE,C.dm5,C.ml,C.aXl,C.aXk,C.aVo,C.uz,C.rN,C.m1,C.id,C.lg,C.aKE])
u(A.hq,[C.fZV,C.fZU,C.fZW,C.h9C,C.fMb,C.fMc,C.fMh,C.fXs,C.fXr,C.fXq,C.cbc,C.ha9,C.ha1,C.had,C.fRa,C.dVu,C.dVp,C.dVq,C.dV2,C.dUZ,C.dVJ,C.dVK,C.dVD,C.dVE,C.dVL,C.dVM,C.fRW,C.fUQ,C.fUR,C.h8E,C.hho,C.fR1,C.h9f,C.dli,C.dkF,C.dkO,C.dl4,C.dkK,C.dkQ,C.dkH,C.dkU,C.dkV,C.dkT,C.dl9,C.dl8,C.dn5,C.dn6,C.dn7,C.dlw,C.dlB,C.dlA,C.cTd,C.cTf,C.dcg,C.dcF,C.dcG,C.dcJ,C.dcL,C.dcM,C.dcN,C.dcP,C.dcQ,C.bUJ,C.bUD,C.fEN,C.hhg,C.hhh,C.hhi,C.hhd,C.hhj,C.hhk,C.hhl,C.hhc,C.fSz,C.h7y,C.fOn,C.fVM,C.bPL,C.hhG,C.h8a,C.bNU,C.bNP,C.bNR,C.bNQ,C.ctV,C.ctQ,C.ctR,C.ctP,C.ctN,C.ctS,C.cUh,C.cIS,C.cIV,C.cIT,C.cIW,C.cIX,C.fgU,C.frg,C.bVv,C.bVp,C.bVt,C.bV6,C.e7q,C.e7n,C.e7o,C.e7m,C.e7s,C.bVn,C.bVd,C.bUY,C.bUX,C.bUT,C.bUU,C.bUV,C.bUW,C.e95,C.e8v,C.e8q,C.e7S,C.e87,C.e8a,C.e86,C.e85,C.e8m,C.e8n,C.e8h,C.e7G,C.e8y,C.e8s,C.e7I,C.e7J,C.e7K,C.e7P,C.e7N,C.e7M,C.e81,C.e82,C.e7X,C.e8F,C.e8B,C.dlH,C.dlI,C.fS_,C.fS0,C.fS1,C.fRY,C.fRZ,C.fS4,C.fS5,C.fS6,C.fS2,C.fS3,C.dm0,C.dlR,C.dlM,C.dlW,C.dlX,C.dm_,C.dlO,C.dm2,C.dm3,C.dm4,C.fwR,C.f6D,C.dCj,C.dCt,C.dCu,C.dCv,C.dCy,C.dCx,C.dCz,C.dCE,C.dCF,C.cin,C.cim,C.cii,C.cij,C.cik,C.cil,C.cis,C.cip,C.ciq,C.e8S,C.e8V,C.e8U,C.e90,C.e91,C.dUN,C.h9J,C.h95,C.hgX,C.h99,C.h98,C.dda,C.ddb,C.dd6,C.cKF,C.cKH,C.cKI,C.cKA,C.cKJ,C.fwm,C.h7l,C.f3L,C.f3H,C.f3D,C.f3B,C.f3P,C.hgK,C.f3Y,C.f46,C.f41,C.f42,C.f4b,C.cJS,C.cJQ,C.cJR,C.fQS,C.hhw,C.fOm,C.bVS,C.bVR,C.bVO,C.bVP,C.bVQ,C.fzP,C.fzQ,C.h8U,C.h8V,C.h8W,C.h8X,C.h8Y,C.hhu,C.fRl,C.fUW,C.fUX,C.fUZ,C.fV_,C.h8G,C.hhp,C.hhq,C.hhr,C.fR2,C.fR3,C.hhA,C.fQx,C.fQy,C.hgY,C.fVN,C.h8z,C.fUT,C.fUU,C.h8u,C.fAp,C.fAq,C.fAr,C.fAs,C.fAt,C.fAI,C.fAE,C.fAF,C.fF5,C.fF6,C.fI7,C.fNA,C.fNB])
u(A.aw,[C.b1Y,C.ant,C.aYD,C.a_O,C.beI,C.Rv,C.a7H,C.tY,C.IU,C.bj9,C.bn_,C.bBb,C.bqn,C.afA,C.bmZ,C.afz,C.bmY,C.aFm,C.aLK,C.afB,C.H0,C.bja,C.aeP,C.bj8,C.bjd,C.b1W,C.avL,C.afW])
u(A.lO,[C.bfn,C.bgC,C.bgt,C.aKy,C.bm0,C.brE,C.aYI,C.bfp,C.aDj,C.beR,C.bvN,C.bm8,C.bly,C.blF,C.bjc,C.bic,C.bo7,C.bB0])
u(A.iY,[C.ha6,C.ha7,C.ha8,C.ha_,C.ha0,C.hab,C.hac,C.dVG,C.dVs,C.dVv,C.dV9,C.dVa,C.dVb,C.dV8,C.dVg,C.dV7,C.dVh,C.dVi,C.dV6,C.dVj,C.dV5,C.dVk,C.dV4,C.dVl,C.dUX,C.dUY,C.dV3,C.dVm,C.dV1,C.dVn,C.dV0,C.dVc,C.dV_,C.dVd,C.dUW,C.dVe,C.dVf,C.dVH,C.dVI,C.dVw,C.dVx,C.dVy,C.dVz,C.dVA,C.dVB,C.dVC,C.dVO,C.dVF,C.fRX,C.dkD,C.dkB,C.dkC,C.dkE,C.dlh,C.dl6,C.dl3,C.dkG,C.dl7,C.dkM,C.dkN,C.dkP,C.dl5,C.dkL,C.dkR,C.dle,C.dl0,C.dl_,C.dl1,C.dl2,C.dkW,C.dkY,C.dkZ,C.dkS,C.dla,C.dld,C.dkI,C.dkJ,C.dn4,C.dn3,C.dn2,C.dn1,C.dn8,C.dn0,C.dn9,C.dlx,C.dly,C.dlz,C.dlC,C.dlv,C.dlu,C.cTe,C.dcf,C.dcs,C.dcr,C.dcH,C.dcq,C.dcI,C.dcp,C.dco,C.dcK,C.dcn,C.dcA,C.dcz,C.dcR,C.bUC,C.bUM,C.bUE,C.bUF,C.bUI,C.bUH,C.bUK,C.bUL,C.bUG,C.bUA,C.bUB,C.bWf,C.bWg,C.bWh,C.bWi,C.bWj,C.bWk,C.bWl,C.hhf,C.h7z,C.bNT,C.bNO,C.bNM,C.bNN,C.bNL,C.ctX,C.ctY,C.ctW,C.ctZ,C.cu0,C.cu1,C.cu2,C.ctT,C.cIR,C.cJ_,C.cJ0,C.cJ1,C.cIZ,C.cJ2,C.cJ3,C.cJ4,C.cJ5,C.cIU,C.cIY,C.bVL,C.bVK,C.bVI,C.bVG,C.bVH,C.bVD,C.bVE,C.bVF,C.bVJ,C.bVC,C.fgV,C.fgW,C.fgX,C.fgY,C.fgZ,C.bVz,C.bVA,C.bVB,C.bVu,C.bVw,C.bVx,C.bVy,C.bVq,C.bVa,C.bV9,C.bV8,C.bV2,C.bV3,C.bV7,C.bV4,C.bV5,C.bV1,C.e7p,C.e7r,C.e7k,C.e7l,C.e7j,C.e7t,C.e7u,C.e7v,C.e7y,C.e7z,C.e7A,C.e7B,C.e7C,C.e7D,C.e7E,C.e7F,C.e7w,C.e7x,C.bVm,C.bVl,C.bVc,C.bVb,C.bVi,C.bVj,C.bVf,C.bVg,C.bVh,C.bVe,C.bUN,C.bUO,C.bUS,C.bUR,C.bUQ,C.bUP,C.e94,C.e93,C.e96,C.e97,C.e98,C.e92,C.e9a,C.e99,C.e8t,C.e8u,C.e8w,C.e7T,C.e89,C.e88,C.e8b,C.e8p,C.e84,C.e8f,C.e8g,C.e8e,C.e8c,C.e8d,C.e8i,C.e8j,C.e8k,C.e8o,C.e7H,C.e8r,C.e7L,C.e7O,C.e7Q,C.e8x,C.e7W,C.e7U,C.e7Y,C.e7Z,C.e7V,C.e8_,C.e83,C.e8G,C.e8H,C.e8z,C.e8C,C.e8D,C.e8E,C.e8J,C.e8A,C.e7R,C.dlG,C.dlF,C.dlK,C.dlU,C.dlL,C.f6C,C.dCk,C.dCh,C.dCi,C.dCs,C.dCr,C.dCq,C.dCA,C.dCp,C.dCB,C.dCo,C.dCC,C.dCn,C.dCD,C.dCm,C.dCl,C.dCw,C.dCG,C.dCP,C.e8T,C.e8X,C.e8Y,C.e8P,C.e8Q,C.e8R,C.e8W,C.e9_,C.e8Z,C.e8K,C.e8L,C.e8M,C.e8N,C.e8O,C.dUO,C.h9G,C.cse,C.dd9,C.dd8,C.ddc,C.dd5,C.dd7,C.cKx,C.cKD,C.cKE,C.cKC,C.cKG,C.cKB,C.cKy,C.cKz,C.cKK,C.fwn,C.fwo,C.f3N,C.f3E,C.f3F,C.f3G,C.f3I,C.f3J,C.f3M,C.f3z,C.f3C,C.f3O,C.f3A,C.f3R,C.f3S,C.f3T,C.f3U,C.f3Q,C.f3u,C.f3v,C.f3w,C.f3y,C.f3x,C.f4c,C.f4d,C.f3W,C.f3X,C.f43,C.f44,C.f45,C.f4_,C.f40,C.f4j,C.f4i,C.f4k,C.f4h,C.f3V,C.f3Z,C.f4f,C.f4e,C.f49,C.f4a,C.f48,C.f47])
u(A.af,[C.art,C.UR,C.a0A,C.a0E,C.a0C,C.a09,C.anu,C.alC,C.awx,C.aAt,C.anD,C.anB,C.anx,C.Xc,C.anz,C.US,C.asH,C.asB,C.a1f,C.asF,C.a1z,C.a1A,C.a8t,C.a0c,C.a0b,C.a_E,C.a3n,C.GQ,C.aAz,C.avK,C.avE,C.avJ,C.PJ])
u(A.ai,[C.aGn,C.bj3,C.aDk,C.bjs,C.aDn,C.bgA,C.aDl,C.aBs,C.aIW,C.aAu,C.aDp,C.aDo,C.aDm,C.bot,C.anA,C.anw,C.aGY,C.aGV,C.aFl,C.aGX,C.aGW,C.bou,C.aPa,C.aC2,C.aC1,C.aAG,C.bB3,C.aRi,C.aRj,C.aIw,C.bpT,C.aIv,C.bCQ])
u(A.iZ,[C.dVr,C.dVt,C.dVo,C.dVN,C.fUS,C.bUz,C.dlg,C.dlf,C.dkX,C.dlb,C.dlc,C.dlD,C.bWm,C.bWe,C.bV_,C.bV0,C.hhe,C.hhF,C.bNS,C.cu_,C.ctU,C.ctO,C.fh_,C.bVo,C.bVr,C.bVs,C.dwy,C.bVk,C.e8l,C.e80,C.e8I,C.dlT,C.dlS,C.dlQ,C.dlV,C.dlY,C.dlZ,C.dlJ,C.dlN,C.dlP,C.dm1,C.cig,C.cio,C.cit,C.dUP,C.h9I,C.h9H,C.fwk,C.fwl,C.f3K,C.f4g,C.cJT,C.fEk,C.fzR,C.fUY,C.fQz,C.fUV,C.fAH,C.fAG,C.fF7])
u(A.lm,[C.a2T,C.ahi,C.a3b,C.a11,C.adQ,C.aNv,C.IT,C.anF,C.cJU,C.cJV])
t(C.anv,C.aDl)
t(C.alD,C.aBs)
t(C.awy,C.aIW)
t(C.bj7,C.aDp)
t(C.anE,C.bj7)
t(C.bj6,C.aDo)
t(C.anC,C.bj6)
t(C.bj5,C.aDm)
t(C.any,C.bj5)
t(C.bo8,C.aPa)
t(C.bB1,C.aRi)
t(C.bB2,C.aRj)
t(C.aIx,C.bCQ)
t(C.bd5,A.bcT)
t(C.bB4,A.a87)
t(C.bd4,C.bB4)
w(C.aDl,A.cl)
w(C.aBs,A.cl)
w(C.aIW,A.eZ)
w(C.aDm,A.cl)
v(C.bj5,C.ah4)
w(C.aDo,A.cl)
v(C.bj6,C.ah4)
w(C.aDp,A.cl)
v(C.bj7,C.ah4)
w(C.aPa,A.eZ)
w(C.aRi,A.cl)
w(C.aRj,A.cl)
v(C.bCQ,A.eF)
v(C.bB4,A.jz)})()
A.jg(b.typeUniverse,JSON.parse('{"b1Y":{"aw":[],"x":[]},"bfn":{"aC":[]},"art":{"af":[],"x":[]},"aGn":{"ai":["art"]},"UR":{"af":[],"x":[]},"ant":{"aw":[],"x":[]},"aYD":{"aw":[],"x":[]},"bj3":{"ai":["UR"]},"a0A":{"af":[],"x":[]},"a0E":{"af":[],"x":[]},"a0C":{"af":[],"x":[]},"a09":{"af":[],"x":[]},"aDk":{"ai":["a0A"]},"bjs":{"ai":["a0E"]},"aDn":{"ai":["a0C"]},"a_O":{"aw":[],"x":[]},"bgC":{"aC":[]},"bgt":{"aC":[]},"bgA":{"ai":["a09"]},"aKy":{"aC":[]},"bm0":{"aC":[]},"beI":{"aw":[],"x":[]},"anu":{"af":[],"x":[]},"anv":{"ai":["anu"]},"brE":{"aC":[]},"aYI":{"aC":[]},"alC":{"af":[],"x":[]},"awx":{"af":[],"x":[]},"aAt":{"af":[],"x":[]},"alD":{"ai":["alC"]},"bfp":{"aC":[]},"Rv":{"aw":[],"x":[]},"aDj":{"aC":[]},"awy":{"ai":["awx"]},"beR":{"aC":[]},"aAu":{"ai":["aAt"]},"anD":{"af":[],"x":[]},"anB":{"af":[],"x":[]},"anx":{"af":[],"x":[]},"anE":{"ai":["anD"]},"bvN":{"aC":[]},"anC":{"ai":["anB"]},"bm8":{"aC":[]},"any":{"ai":["anx"]},"bly":{"aC":[]},"Xc":{"af":[],"x":[]},"anz":{"af":[],"x":[]},"US":{"af":[],"x":[]},"a7H":{"aw":[],"x":[]},"blF":{"aC":[]},"tY":{"aw":[],"x":[]},"IU":{"aw":[],"x":[]},"bot":{"ai":["Xc"]},"anA":{"ai":["anz"]},"anw":{"ai":["US"]},"asH":{"af":[],"x":[]},"asB":{"af":[],"x":[]},"a1f":{"af":[],"x":[]},"afB":{"aw":[],"x":[]},"aGY":{"ai":["asH"]},"aGV":{"ai":["asB"]},"bj9":{"aw":[],"x":[]},"bjc":{"aC":[]},"bn_":{"aw":[],"x":[]},"bic":{"aC":[]},"bBb":{"aw":[],"x":[]},"bqn":{"aw":[],"x":[]},"aFl":{"ai":["a1f"]},"afA":{"aw":[],"x":[]},"bmZ":{"aw":[],"x":[]},"afz":{"aw":[],"x":[]},"bmY":{"aw":[],"x":[]},"aFm":{"aw":[],"x":[]},"aLK":{"aw":[],"x":[]},"H0":{"aw":[],"x":[]},"asF":{"af":[],"x":[]},"a1z":{"af":[],"x":[]},"a1A":{"af":[],"x":[]},"aGX":{"ai":["asF"]},"bja":{"aw":[],"x":[]},"aeP":{"aw":[],"x":[]},"bj8":{"aw":[],"x":[]},"bjd":{"aw":[],"x":[]},"aGW":{"ai":["a1z"]},"bou":{"ai":["a1A"]},"b1W":{"aw":[],"x":[]},"a8t":{"af":[],"x":[]},"bo8":{"ai":["a8t"]},"bo7":{"aC":[]},"avL":{"aw":[],"x":[]},"a0c":{"af":[],"x":[]},"a0b":{"af":[],"x":[]},"a_E":{"af":[],"x":[]},"a3n":{"af":[],"x":[]},"aC2":{"ai":["a0c"]},"aC1":{"ai":["a0b"]},"aAG":{"ai":["a_E"]},"bB3":{"ai":["a3n"]},"GQ":{"af":[],"x":[]},"aAz":{"af":[],"x":[]},"bB1":{"ai":["GQ"]},"bB2":{"ai":["aAz"]},"bB0":{"aC":[]},"avK":{"af":[],"x":[]},"aIw":{"ai":["avK"]},"afW":{"aw":[],"x":[]},"avE":{"af":[],"x":[]},"avJ":{"af":[],"x":[]},"bpT":{"ai":["avE"]},"aIv":{"ai":["avJ"]},"PJ":{"af":[],"x":[]},"aIx":{"ai":["PJ"],"eF":[]},"bd4":{"jz":[],"fr":[]}}'))
A.S3(b.typeUniverse,JSON.parse('{"ah4":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aVo"),cq:w("mH"),Q:w("rN"),r:w("bm<o,o>"),c5:w("aXk"),dY:w("aXl"),fH:w("Nl"),de:w("amk"),dN:w("Nu<F>"),gc:w("ES<F>"),A:w("eR<o?>"),e:w("IS"),B:w("nQ"),P:w("id"),df:w("lP"),k:w("lg"),x:w("az<~>"),U:w("N<a5u>"),V:w("N<ac>"),C:w("N<rN>"),O:w("N<u>"),c:w("N<Nl>"),b:w("N<amk>"),ac:w("N<eR<o?>>"),I:w("N<nQ>"),u:w("N<id>"),J:w("N<lP>"),_:w("N<lg>"),cl:w("N<az<ah<a9<o,@>>>>"),R:w("N<mL>"),eU:w("N<ah<+(H,H)>>"),ez:w("N<a9<o,aF>>"),gE:w("N<a9<o,o>>"),Y:w("N<a9<o,@>>"),fD:w("N<nb>"),bp:w("N<pa>"),g:w("N<m>"),ar:w("N<avX>"),v:w("N<h_>"),gy:w("N<abf>"),L:w("N<+(o,o)>"),G:w("N<+(H,H)>"),E:w("N<+(H,~())>"),bd:w("N<+(o,F,P)>"),bF:w("N<+count,id,name(F,o,o)>"),F:w("N<d4>"),s:w("N<o>"),cF:w("N<au>"),aS:w("N<jp>"),dT:w("N<bcS>"),p:w("N<x>"),Z:w("N<fr>"),D:w("N<m1>"),h:w("N<aBI>"),cC:w("N<bki>"),fp:w("N<Lf>"),M:w("N<Lm>"),gZ:w("N<aKE>"),gA:w("N<ah9>"),e4:w("N<ahg>"),dE:w("N<aMI>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<F>"),dS:w("N<aC?>"),d4:w("N<o?>"),eF:w("cB<ai<af>>"),d:w("ah<nQ>"),do:w("ah<id>"),cg:w("ah<lP>"),ax:w("ah<lg>"),fO:w("ah<a9<o,@>>"),cz:w("ah<+(o,o)>"),bC:w("ah<+count,id,name(F,o,o)>"),dy:w("ah<o>"),er:w("ah<au>"),gk:w("ah<m1>"),j:w("ah<@>"),fK:w("bw<o,o>"),d2:w("bw<o,ah<a9<o,@>>>"),a:w("a9<o,@>"),f:w("a9<@,@>"),gv:w("O<o,IV>"),cM:w("O<F,o>"),w:w("io"),g2:w("t8"),bV:w("arg"),fL:w("cr"),K:w("aF"),dc:w("h_"),fo:w("Q6<F>"),fz:w("+(o,o)"),ei:w("+scope,text(o,o)"),bn:w("+games,limit(P,F)"),d9:w("+dx,hidden(H,ah<id>)"),cs:w("+count,id,name(F,o,o)"),N:w("o"),fT:w("ia<id>"),ec:w("ia<o>"),gW:w("rt<H>"),X:w("bq<H>"),bW:w("dG"),W:w("bf<o>"),b4:w("bf<F>"),cI:w("kk<o>"),av:w("X<zY>"),cc:w("X<o>"),l:w("x"),gF:w("fr"),fA:w("m1"),dO:w("H4"),bw:w("afz<o?>"),cy:w("Lo"),q:w("l4"),y:w("P"),i:w("H"),z:w("@"),S:w("F"),eK:w("ah<lg>?"),m:w("asE?"),cT:w("m?"),h5:w("+(o,o)?"),eo:w("+code,qrPayload,usesRemaining(o,o,F)?"),he:w("+qrPayload,token,usesRemaining(o,o,F)?"),gG:w("+members,trees,viewOnly(F,F,P)?"),az:w("oD?"),T:w("o?"),aD:w("dG?"),o:w("m1?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b8f=new A.bc(B.h4,B.bJ,B.h4,B.bJ)
D.ag2=new A.bc(B.h4,B.i8,B.h4,B.i8)
D.b8u=new A.bc(B.jL,B.bJ,B.bJ,B.bJ)
D.b8y=new A.ax(B.cY,1.4,B.r,-1)
D.b8J=new A.ax(B.ab,1,B.r,-1)
D.agB=new A.aY(140,1/0,0,1/0)
D.ba2=new A.aY(0,1/0,64,1/0)
D.ba6=new A.aY(0,84,0,1/0)
D.agI=new A.aY(130,1/0,0,1/0)
D.aFv=w([B.mr,B.tt,B.c],x.O)
D.cdg=new A.a6(B.aw,B.aD,B.w,D.aFv,null,null)
D.baT=new A.p(null,null,null,null,null,D.cdg,B.m)
D.dnx=w([B.aW,B.bU],x.O)
D.cfs=new A.a6(B.aU,B.b2,B.w,D.dnx,null,null)
D.bbd=new A.p(null,null,null,null,null,D.cfs,B.m)
D.ZY=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fL=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.drO=w([B.dD,D.ZY,D.fL],x.O)
D.ccr=new A.a6(B.aU,B.b2,B.w,D.drO,null,null)
D.bbY=new A.p(null,null,null,null,null,D.ccr,B.m)
D.fLF=new A.G(!0,B.bX,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hmK=new A.D("?",null,D.fLF,null,null,null,null,null,null,null,null,null)
D.bfO=new A.cq(B.z,null,null,D.hmK,null)
D.Xr=new A.G(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4z=new A.D("\ud83c\udf33",null,D.Xr,null,null,null,null,null,null,null,null,null)
D.aht=new A.cq(B.z,null,null,D.h4z,null)
D.h7f=new A.D("\ud83c\udfc6",null,B.LP,null,null,null,null,null,null,null,null,null)
D.bfZ=new A.cq(B.z,null,null,D.h7f,null)
D.bhP=new A.fs(null,null,null,null,null,E.kI,null,null,null,null)
D.ahu=new A.cq(B.z,null,null,D.bhP,null)
D.l5=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fMd=new A.G(!0,D.l5,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6e=new A.D("No books on the shelf yet.",null,D.fMd,null,null,null,null,null,null,null,null,null)
D.eIi=new A.C(B.o8,D.h6e,null)
D.bgf=new A.cq(B.z,null,null,D.eIi,null)
D.fTv=new A.G(!0,D.fL,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hnI=new A.D("\ud83d\ude8c  On the road\u2026",null,D.fTv,null,null,null,null,null,null,null,null,null)
D.eIS=new A.C(B.ct,D.hnI,null)
D.bgI=new A.cq(B.z,null,null,D.eIS,null)
D.aZU=new A.D("\ud83e\uddfa",null,D.Xr,null,null,null,null,null,null,null,null,null)
D.bgX=new A.cq(B.z,null,null,D.aZU,null)
D.h9J=new A.D("\ud83c\udfad",null,D.Xr,null,null,null,null,null,null,null,null,null)
D.bh7=new A.cq(B.z,null,null,D.h9J,null)
D.bha=new A.cq(B.z,null,null,A8.ZJ,null)
D.ahO=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.ahV=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bjq=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bjv=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bjH=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bjJ=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bjL=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bjT=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lX=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bjX=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bk1=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bk3=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bk4=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lY=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bkI=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Co=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bkR=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bla=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bld=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.blj=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.blr=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aiA=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bly=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.a_b=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aiD=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.blJ=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.a_d=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bm3=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.aiP=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bms=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bmI=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bn8=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bnj=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.GP=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bnI=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bnL=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bnP=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aji=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bo6=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.boc=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.boj=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ajm=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bos=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.boX=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bp6=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bp9=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bpf=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ajD=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bpW=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ak1=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bqW=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ake=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.brk=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.H2=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.brr=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.brB=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.brD=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.aki=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.brV=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.brX=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bs_=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.akq=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a_X=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bso=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bsL=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bsQ=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.akC=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bsX=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a01=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.btj=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.btk=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Hb=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bu8=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.buK=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.buQ=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.buU=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.r_=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bv4=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bv8=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bve=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bvg=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.alo=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.als=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Hh=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a0n=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.alB=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bwv=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bwN=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bxg=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bxp=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.am1=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a0z=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bxB=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bxR=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a0F=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.by7=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.byo=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a0J=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.byt=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.aml=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.amn=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.byM=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.amu=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bze=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bzi=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bzp=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bzy=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bzH=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bAj=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bAP=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.h0j=new A.D("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bEk=new A.eR(null,D.h0j,B.fm,null,x.A)
D.h9A=new A.D("None",null,null,null,null,null,null,null,null,null,null,null)
D.bEm=new A.eR(null,D.h9A,B.fm,null,x.A)
D.bEU=new A.bh(38e5)
D.bFC=new A.iN(0,10,0,10)
D.bFW=new A.iN(0,4,0,4)
D.bFZ=new A.R(0,4,5,0)
D.bGe=new A.R(10,10,14,10)
D.bGp=new A.iN(10,4,10,4)
D.bGy=new A.iN(10,8,10,8)
D.bGz=new A.R(10,8,8,8)
D.bH3=new A.R(12,6,12,2)
D.bHm=new A.R(14,0,14,6)
D.bHq=new A.R(14,10,6,6)
D.bHr=new A.R(14,12,14,0)
D.bHv=new A.R(14,12,14,8)
D.bHy=new A.R(14,12,8,14)
D.bHC=new A.iN(14,14,14,14)
D.bHV=new A.R(14,6,14,40)
D.bHY=new A.R(14,8,14,30)
D.bIl=new A.R(16,2,16,10)
D.bIu=new A.R(16,6,16,30)
D.bIw=new A.R(16,6,16,8)
D.bIL=new A.R(18,10,18,4)
D.bIN=new A.R(18,12,18,0)
D.bIU=new A.R(18,14,12,4)
D.ap_=new A.R(18,16,18,8)
D.bJa=new A.R(18,20,18,22)
D.bJf=new A.R(18,30,18,30)
D.bJx=new A.R(20,10,12,20)
D.bJA=new A.R(20,11,20,11)
D.bJM=new A.R(20,18,16,18)
D.bJO=new A.R(20,18,20,6)
D.bKC=new A.R(24,32,24,28)
D.bKD=new A.R(24,36,24,32)
D.bKG=new A.R(26,26,24,14)
D.bKU=new A.R(2,4,2,8)
D.bKY=new A.R(30,0,30,0)
D.bL8=new A.R(38,22,22,22)
D.apq=new A.R(40,24,24,24)
D.bLa=new A.iN(40,40,40,40)
D.bLc=new A.R(46,30,30,30)
D.bLF=new A.R(56,40,40,40)
D.bLJ=new A.R(1.25,1.25,1.25,1.25)
D.bLK=new A.R(60,0,60,0)
D.bLO=new A.R(6,14,6,16)
D.bLS=new A.R(6,4,12,0)
D.bLW=new A.R(6,6,10,2)
D.bM2=new A.iN(7,3,7,3)
D.bMz=new A.R(5,1.5,5,1.5)
D.bMK=new A.R(6,2.5,6,2.5)
D.hhS=new A.D("Family Games",null,B.jr,null,null,null,null,null,null,null,null,null)
D.fZU=new A.D("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.Xi,null,null,null,null,null,null,null,null,null)
D.cP_=w([D.hhS,D.fZU],x.p)
D.bBO=new A.fv(B.ah,B.e,B.i,B.B,null,B.p,null,0,D.cP_,null)
D.bNa=new A.bu(1,B.b8,D.bBO,null)
D.hmh=new A.D("Signature",null,B.nD,null,null,null,null,null,null,null,null,null)
D.bNd=new A.bu(1,B.b8,D.hmh,null)
D.hel=new A.D("MADE BY THE ONE WHO PLANTED THE TREE",null,U.uB,null,null,null,null,null,null,null,null,null)
D.bNL=new A.bu(1,B.b8,D.hel,null)
D.hjk=new A.D("Tell the AI what to fix",null,B.dw,null,null,null,null,null,null,null,null,null)
D.bO1=new A.bu(1,B.b8,D.hjk,null)
D.hlm=new A.D("Worksheets",null,B.aZn,null,null,null,null,null,null,null,null,null)
D.fUs=new A.G(!0,E.aij,null,null,null,null,13,B.cE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hkb=new A.D("Track your project spending",null,D.fUs,null,null,null,null,null,null,null,null,null)
D.ddV=w([D.hlm,B.at,D.hkb],x.p)
D.bBr=new A.fv(B.ah,B.e,B.i,B.B,null,B.p,null,0,D.ddV,null)
D.bO7=new A.bu(1,B.b8,D.bBr,null)
D.fP7=new A.G(!0,E.kI,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_t=new A.D("FAMILY LIBRARY",null,D.fP7,null,null,null,null,null,null,null,null,null)
D.bOq=new A.bu(1,B.b8,D.h_t,null)
D.PY=new C.IS("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.xj=new C.IT(0,"male")
D.p_=new C.IT(1,"female")
D.zM=new C.IT(2,"unknown")
D.vq=new C.anF(0,"owner")
D.PZ=new C.anF(1,"editor")
D.le=new C.anF(2,"viewer")
D.arp=new A.a_(61199,"MaterialIcons",!1)
D.bTO=new A.a_(61504,"MaterialIcons",!1)
D.bTP=new A.a_(61505,"MaterialIcons",!1)
D.bTS=new A.a_(61587,"MaterialIcons",!1)
D.bUY=new A.a_(63034,"MaterialIcons",!0)
D.bVf=new A.a_(63153,"MaterialIcons",!1)
D.bVM=new A.a_(63429,"MaterialIcons",!1)
D.atx=new A.a_(984520,"MaterialIcons",!1)
D.bUu=new A.a_(62776,"MaterialIcons",!1)
D.bYg=new A.ae(D.bUu,26,B.b6,null,null,null)
D.bSJ=new A.a_(57648,"MaterialIcons",!1)
D.bYC=new A.ae(D.bSJ,14,B.c,null,null,null)
D.bYU=new A.ae(B.Ii,17,null,null,null,null)
D.bZ0=new A.ae(B.Qu,null,B.bU,null,null,null)
D.bZq=new A.ae(E.a4p,null,null,null,null,null)
D.bZt=new A.ae(B.jm,18,E.kI,null,null,null)
D.a49=new A.a_(62044,"MaterialIcons",!1)
D.bZz=new A.ae(D.a49,null,B.aW,null,null,null)
D.bZG=new A.ae(B.zZ,18,B.c,null,null,null)
D.c_n=new A.ae(B.eh,16,null,null,null,null)
D.c_u=new A.ae(D.a49,32,B.aW,null,null,null)
D.c_O=new A.ae(E.arq,18,B.cY,null,null,null)
D.c0W=new A.ae(B.Iu,22,B.aC,null,null,null)
D.c19=new A.ae(B.eh,22,B.b6,null,null,null)
D.c1m=new A.ae(Z.a4e,22,B.c,null,null,null)
D.c1t=new A.ae(B.vy,52,B.c,null,null,null)
D.c1D=new A.ae(B.Iu,30,B.aC,null,null,null)
D.c1Z=new A.ae(B.Ir,null,B.c,null,null,null)
D.auh=new A.ae(B.vK,22,B.c,null,null,null)
D.c27=new A.ae(B.eh,17,null,null,null,null)
D.c2v=new A.ae(B.xw,26,B.cY,null,null,null)
D.c3h=new A.ae(B.a4C,16,null,null,null,null)
D.c42=new A.ae(B.vy,24,B.c,null,null,null)
D.c48=new A.ae(B.Qs,20,B.u9,null,null,null)
D.c4e=new A.ae(B.Ig,null,B.bU,null,null,null)
D.c4n=new A.ae(B.jm,18,B.c,null,null,null)
D.c53=new A.ae(B.cC,22,B.ab,null,null,null)
D.c5X=new A.ae(B.eq,16,B.ab,null,null,null)
D.c68=new A.ae(D.a49,20,B.aW,null,null,null)
D.auI=new A.ae(B.h1,20,null,null,null,null)
D.c6I=new A.ae(B.cC,18,D.l5,null,null,null)
D.c6Z=new A.ae(B.A9,28,B.c,null,null,null)
D.c7a=new A.ae(B.Qh,null,B.fs,null,null,null)
D.c7u=new A.ae(B.A9,24,B.c,null,null,null)
D.c7X=new A.ae(B.vy,null,B.aW,null,null,null)
D.c7Y=new A.ae(B.jG,20,B.cY,null,null,null)
D.c8h=new A.ae(B.Ii,16,null,null,null,null)
D.c9Q=new A.ef(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eX,!0,null,null,null,null)
D.avt=new C.a7H(10,null)
D.cam=new C.a7H(12,null)
D.can=new C.a7H(14,null)
D.dwg=w([B.bw,B.aW,B.fz,B.b6],x.O)
D.cbx=new A.a6(B.aw,B.aD,B.w,D.dwg,null,null)
D.btV=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bAq=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.da0=w([D.btV,D.bAq],x.O)
D.cbK=new A.a6(B.aU,B.b2,B.w,D.da0,null,null)
D.dpE=w([B.fo,B.h7,B.fz],x.O)
D.cbQ=new A.a6(B.aw,B.aD,B.w,D.dpE,null,null)
D.ald=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bk5=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.dcr=w([D.ald,D.bk5],x.O)
D.ccs=new A.a6(B.aU,B.b2,B.w,D.dcr,null,null)
D.bnY=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aEM=w([D.bnY,D.ald],x.O)
D.ccM=new A.a6(B.aw,B.aD,B.w,D.aEM,null,null)
D.ajU=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bqN=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.doH=w([D.ajU,D.bqN],x.O)
D.cdr=new A.a6(B.a5,B.a9,B.w,D.doH,null,null)
D.dDY=w([B.bC,B.nU],x.O)
D.cdt=new A.a6(B.aU,B.b2,B.w,D.dDY,null,null)
D.btQ=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dEW=w([D.btQ,D.l5,D.l5,I.Or],x.O)
D.dHG=w([0,0.07,0.9,1],x.n)
D.cdZ=new A.a6(B.a5,B.a9,B.w,D.dEW,D.dHG,null)
D.ce7=new A.a6(B.aw,B.aD,B.w,B.Uo,null,null)
D.d7s=w([B.az,D.lX],x.O)
D.cea=new A.a6(B.a5,B.a9,B.w,D.d7s,null,null)
D.dDu=w([B.b6,B.aW,B.bU],x.O)
D.cfe=new A.a6(B.aw,B.aD,B.w,D.dDu,null,null)
D.cjF=w([10,20,30],x.t)
D.ctH=w([-1,-0.4,0.3,1],x.n)
D.cBf=w([B.bw,B.b6,B.fo],x.O)
D.cBn=w([B.bj,B.az,B.kH],x.O)
D.cBp=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cC8=w([30,140,262,360],x.n)
D.bs5=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cHK=w([D.bs5,E.akM],x.O)
D.eCS=new A.m(1,2)
D.fwV=new A.d4(B.ba,D.eCS,3)
D.aBE=w([D.fwV],x.F)
D.cPh=w([B.hl,B.ci,B.fy],x.O)
D.cS7=w([B.bQ,B.bz,B.bt],x.O)
D.bPg=new C.vd("classic","Classic leather","Gold-edged brown leather",D.aEM,E.kI,E.kI,"\u2766",B.K,!0,!1,!1,!1)
D.bja=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bz4=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dfQ=w([D.bja,D.bz4],x.O)
D.akP=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bPb=new C.vd("ornate","Ornate gold","Double gold border and flourishes",D.dfQ,D.akP,D.akP,"\u2726",B.K,!0,!0,!0,!1)
D.bnu=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.buE=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d68=w([D.bnu,D.buE],x.O)
D.bPa=new C.vd("parchment","Parchment","Old paper with dark ink",D.d68,D.Hb,L.ji,"\u2767",B.K,!0,!1,!1,!0)
D.ahX=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bxd=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dBs=w([D.ahX,D.bxd],x.O)
D.bry=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bwp=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bPd=new C.vd("minimal","Clean paper","Plain and elegant, like a printed book",D.dBs,D.bry,D.bwp,"",B.K,!0,!0,!1,!0)
D.bPf=new C.vd("midnight","Midnight","Deep blue with silver stars",K.aF5,B.cF,B.cm,"\u2727",B.K,!0,!0,!1,!1)
D.bP9=new C.vd("emerald","Emerald library","Green cloth, title on the left",W.aC3,E.kI,B.h9,"\u25c6",B.aY,!0,!1,!1,!1)
D.bxK=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dzm=w([B.eA,D.bxK],x.O)
D.bsW=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bud=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bPe=new C.vd("rose","Rose vintage","Burgundy with rose-gold lettering",D.dzm,D.bsW,D.bud,"\u2740",B.K,!0,!1,!0,!1)
D.dEx=w([B.cx,F.ni],x.O)
D.bPc=new C.vd("modern","Modern","Dark, bold, left-aligned",D.dEx,B.aH,B.c,"",B.aY,!1,!0,!1,!1)
D.a6B=w([D.bPg,D.bPb,D.bPa,D.bPd,D.bPf,D.bP9,D.bPe,D.bPc],A.as("N<vd>"))
D.cVa=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dEj=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bPr=new C.lP('What does "Ubuntu" mean?',D.dEj,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d8d=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bPu=new C.lP("In Swahili, what do we call a grandmother?",D.d8d,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d84=w(["Babu","Mama","Baba","Dada"],x.s)
D.bPp=new C.lP("In Swahili, what do we call a grandfather?",D.d84,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d9x=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bPt=new C.lP("What is a sister called in Swahili?",D.d9x,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.dfb=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bPq=new C.lP("What is a brother called in Swahili?",D.dfb,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d83=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bPB=new C.lP("Which word means father in Swahili?",D.d83,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dFx=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bPA=new C.lP('"Umoja ni nguvu" means...',D.dFx,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dCc=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bPC=new C.lP('"Haba na haba hujaza kibaba" teaches us...',D.dCc,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.dcA=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bPz=new C.lP('The African saying "It takes a village to raise a child" means...',D.dcA,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dFQ=w(["The elders","The market","The river","The drum"],x.s)
D.bPv=new C.lP("Who is the traditional keeper of the family stories?",D.dFQ,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cZu=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bPs=new C.lP("Why do families sit round the fire at night?",D.cZu,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dEz=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bPx=new C.lP('What does "Harambee" mean?',D.dEz,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dir=w(["An elder","A baby","A market","A cow"],x.s)
D.bPw=new C.lP('"Mzee" is a respectful word for...',D.dir,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dzb=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bPy=new C.lP('What does "Shikamoo" show?',D.dzb,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aBZ=w([D.bPr,D.bPu,D.bPp,D.bPt,D.bPq,D.bPB,D.bPA,D.bPC,D.bPz,D.bPv,D.bPs,D.bPx,D.bPw,D.bPy],x.J)
D.d2Y=w([90,360],x.n)
D.d5F=w([B.bU,B.bp],x.O)
D.btC=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d6o=w([D.ahX,D.btC],x.O)
D.d7a=w([-1,-0.3,0.4,1],x.n)
D.d8a=w([0,0.45,0.72,0.92,1],x.n)
D.bnq=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d8w=w([D.bnq,B.bF],x.O)
D.bl5=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.amE=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d9a=w([B.dD,D.bl5,D.amE],x.O)
D.dak=w([B.be,B.jx,B.pJ],x.O)
D.bo_=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bwh=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bkM=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.dap=w([D.bo_,D.bwh,D.bkM],x.O)
D.daN=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.daX=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hRo=new C.afd(78,424,48,44,56)
D.hRm=new C.afd(214,396,34,34,42)
D.hRn=new C.afd(442,452,56,50,64)
D.aCX=w([D.hRo,D.hRm,D.hRn],A.as("N<afd>"))
D.dbx=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bjZ=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bpV=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dHC=w([D.ajU,D.bjZ,D.bpV],x.O)
D.bPh=new C.ve("leather","Leather",D.dHC,"vintage")
D.djw=w([B.dl,B.H0,Ac.a_s],x.O)
D.bPo=new C.ve("midnight","Midnight",D.djw,"starry")
D.dal=w([B.et,B.ej,B.lA],x.O)
D.bPn=new C.ve("forest","Forest",D.dal,"story")
D.dJU=w([B.eu,B.eA,B.kK],x.O)
D.bPk=new C.ve("burgundy","Burgundy",D.dJU,"royal")
D.cRE=w([B.az,B.nb,B.nK],x.O)
D.bPl=new C.ve("royal","Royal",D.cRE,"royal")
D.dd9=w([B.bz,B.cx,F.ni],x.O)
D.bPi=new C.ve("charcoal","Charcoal",D.dd9,"geo")
D.dHL=w([B.c8,B.e0,B.wU],x.O)
D.bPm=new C.ve("sunset","Sunset",D.dHL,"sunset")
D.dIy=w([B.jx,B.z5,B.a_w],x.O)
D.bPj=new C.ve("ocean","Ocean",D.dIy,"band")
D.AE=w([D.bPh,D.bPo,D.bPn,D.bPk,D.bPl,D.bPi,D.bPm,D.bPj],A.as("N<ve>"))
D.ddI=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.deq=w([B.an,B.aM,B.a_],x.O)
D.dfW=w([B.eA,B.ej,B.dl,B.j0,B.z7,B.cY,B.kd,B.cU,B.de],x.O)
D.dfX=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fwW=new A.d4(B.dJ,B.dP,8)
D.dg9=w([D.fwW],x.F)
D.dhp=w([B.c5,B.e0,B.k9],x.O)
D.blX=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bqd=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.buz=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dhH=w([D.blX,G.all,D.bqd,D.buz,D.amE],x.O)
D.di_=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.die=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bjm=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bpw=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.diL=w([D.bjm,D.ajm,D.bpw],x.O)
D.djr=w([B.c5,B.hK],x.O)
D.djx=w([G.nN,B.iu,G.ai8,B.d_],x.O)
D.dlf=w([B.d_,G.nN,B.iu,D.lY,B.d_],x.O)
D.dlW=w([B.aQ,B.z3,B.yV],x.O)
D.f_y=new A.y(-0.65,0.6)
D.fcS=new A.y(-0.2,0.95)
D.fe0=new A.y(0.25,0.95)
D.f37=new A.y(0.7,0.6)
D.feB=new A.y(1,0.1)
D.dmN=w([Al.Wb,D.f_y,D.fcS,D.fe0,D.f37,D.feB],x.G)
D.bsp=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.byX=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bmY=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dmU=w([D.bsp,D.byX,D.bmY],x.O)
D.dn_=w([B.bO,B.c1,B.dH,B.aQ],x.O)
D.dny=w([B.hZ,B.c8,B.v1],x.O)
D.dnY=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.do9=w([B.fo,B.cY],x.O)
D.btZ=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.doC=w([D.btZ,D.ahV],x.O)
D.doO=w([B.cX,B.fM,B.h_],x.O)
D.dp0=w([B.aH,B.bp,B.dl],x.O)
D.dpB=w([B.eH,B.dq,B.ej],x.O)
D.dpX=w([B.dU,B.dl,B.H0],x.O)
D.dq0=w([B.bu,B.n8,B.de],x.O)
D.dqh=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bta=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.brg=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dqD=w([D.bta,D.aji,D.brg],x.O)
D.drw=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dsI=w([1,0,7,6,3,2],x.t)
D.a7B=w(["leather","linen","plain","stars","rays"],x.s)
D.dsU=w([0.5,2,3.6],x.n)
D.dtt=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bXw=new A.a_(983781,"MaterialIcons",!1)
D.aEr=w([B.Qu,B.hQ,B.kP,B.ih,F.atF,B.IF,B.rn,D.bXw,K.ati,B.DW,B.rt,B.m6],A.as("N<a_>"))
D.a7F=w(["double","single","corners","none"],x.s)
D.bP6=new C.zY("Little Seed","\ud83c\udf31",0)
D.bP8=new C.zY("Young Listener","\ud83d\udc42",40)
D.bP7=new C.zY("Storyteller","\ud83e\ude98",120)
D.bP5=new C.zY("Village Pride","\ud83c\udfe1",300)
D.bP3=new C.zY("Keeper of Roots","\ud83c\udf33",700)
D.bP4=new C.zY("Elder of the Fire","\ud83d\udd25",1500)
D.aEt=w([D.bP6,D.bP8,D.bP7,D.bP5,D.bP3,D.bP4],A.as("N<zY>"))
D.duK=w([B.d0,B.bl,B.cU],x.O)
D.dv0=w([],x.C)
D.Ew=w([],x.u)
D.aOF=new A.m(225,528)
D.f1f=new A.y(D.aOF,1)
D.eDD=new A.m(350,548)
D.f7N=new A.y(D.eDD,0.95)
D.aOz=new A.m(158,656)
D.f7G=new A.y(D.aOz,1.12)
D.eEq=new A.m(92,544)
D.eXH=new A.y(D.eEq,0.93)
D.eDG=new A.m(398,614)
D.f3v=new A.y(D.eDG,1.04)
D.eDu=new A.m(318,662)
D.eSW=new A.y(D.eDu,1.1)
D.a7N=w([D.f1f,D.f7N,D.f7G,D.eXH,D.f3v,D.eSW],A.as("N<+(m,H)>"))
D.dxb=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dxK=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dyS=w([B.d_,G.nN,B.iu,D.lY,B.d_,B.iu],x.O)
D.dAj=w([B.as,B.fM,B.j0],x.O)
D.dB0=w([-70,58],x.n)
D.dB2=w([-70,-30,20],x.n)
D.dC9=w([B.bu,B.n8,B.a0A],x.O)
D.dCr=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dZ2=new C.ml("construction","Construction","Jobsite & builds",B.rr)
D.dZ9=new C.ml("house","Home Build","Houses & rooms",B.vB)
D.dZ_=new C.ml("grocery","Grocery","Store & pantry",B.a55)
D.dYZ=new C.ml("calculator","Calculations","Math & estimates",B.QB)
D.dZ7=new C.ml("lumber","Materials","Lumber & supplies",B.IC)
D.dYW=new C.ml("kitchen","Kitchen","Remodel & meals",A4.QZ)
D.bXt=new A.a_(983756,"MaterialIcons",!1)
D.dZ0=new C.ml("landscape","Landscaping","Yard & garden",D.bXt)
D.dYV=new C.ml("plumbing","Plumbing","Pipes & water",B.qb)
D.dZa=new C.ml("electrical","Electrical","Wiring & power",B.fP)
D.dYT=new C.ml("store","Retail Shop","Daily business",B.kp)
D.dYU=new C.ml("paint_remodel","Paint & Remodel","Colors & walls",A4.QT)
D.bWO=new A.a_(983311,"MaterialIcons",!1)
D.dZ6=new C.ml("roofing","Roofing","Roofs & exteriors",D.bWO)
D.bXG=new A.a_(983986,"MaterialIcons",!1)
D.dYS=new C.ml("warehouse","Warehouse","Storage & stock",D.bXG)
D.dZ4=new C.ml("vehicles","Vehicles","Fleet & transport",B.DS)
D.bUw=new A.a_(62785,"MaterialIcons",!1)
D.dYY=new C.ml("farm","Farm","Crops & livestock",D.bUw)
D.dYX=new C.ml("restaurant","Restaurant","Food & catering",B.vI)
D.dZ3=new C.ml("tools","Tools","Workshop gear",B.DO)
D.dZ8=new C.ml("wallet","Cash & Wallet","Quick spending",B.jG)
D.dZ5=new C.ml("concrete","Concrete","Foundation work",F.asn)
D.dZ1=new C.ml("blueprint","Blueprint","Plans & design",Ap.arV)
D.a8a=w([D.dZ2,D.dZ9,D.dZ_,D.dYZ,D.dZ7,D.dYW,D.dZ0,D.dYV,D.dZa,D.dYT,D.dYU,D.dZ6,D.dYS,D.dZ4,D.dYY,D.dYX,D.dZ3,D.dZ8,D.dZ5,D.dZ1],A.as("N<ml>"))
D.dD7=w([B.bv,B.bl],x.O)
D.dDZ=w([B.iJ,B.oI,B.e5],x.O)
D.ak7=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.al7=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.brC=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.biR=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aFD=w([D.ak7,D.al7,D.brC,D.biR],x.O)
D.dFc=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a8k=w(["top","middle","bottom"],x.s)
D.dGL=w([B.cw,B.bp,B.dl],x.O)
D.aFX=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bcr=new A.ac(0,B.H,B.ba,B.J,14)
D.aG0=w([D.bcr],x.V)
D.bqs=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dHv=w([D.aiA,D.a0z,D.bqs],x.O)
D.dHw=w([B.bf,B.dq,B.ej],x.O)
D.eDd=new A.m(24,-8)
D.eDW=new A.m(48,0)
D.eD9=new A.m(24,6)
D.dJn=w([B.J,D.eDd,D.eDW,D.eD9],x.g)
D.dJP=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.ezD={top:0,middle:1,bottom:2}
D.dNa=new A.bm(D.ezD,["Top","Middle","Bottom"],x.r)
D.ez9={double:0,single:1,corners:2,none:3}
D.dNg=new A.bm(D.ez9,["Double line","One line","Corners","None"],x.r)
D.eAr={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dOW=new A.bm(D.eAr,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dP7=new A.bm(B.ik,[],A.as("bm<F,+(o,o)>"))
D.ezu={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.EL=new A.bm(D.ezu,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bm<o,F>"))
D.dTr=new H.Ot(32,null)
D.dTs=new H.Ot(40,null)
D.dTt=new H.Ot(46,null)
D.aO8=new C.avJ(null)
D.eC4=new A.m(0,40)
D.eC5=new A.m(0,412)
D.eC8=new A.m(0,900)
D.eCh=new A.m(0,-34)
D.eCi=new A.m(0,-46)
D.eCk=new A.m(0,-74)
D.eCn=new A.m(100,300)
D.eCo=new A.m(10,14)
D.eCr=new A.m(10,-10)
D.eCw=new A.m(10,-46)
D.eCx=new A.m(10,-58)
D.eCy=new A.m(116,442)
D.eCA=new A.m(11,-1)
D.eCB=new A.m(11,-10)
D.eCC=new A.m(11,-21)
D.aOu=new A.m(11,-60)
D.eCJ=new A.m(14,-2)
D.eCK=new A.m(150,520)
D.aax=new A.m(150,592)
D.eCN=new A.m(15,-15)
D.eCO=new A.m(16,-1)
D.eCR=new A.m(190,444)
D.eCU=new A.m(1,5)
D.eD1=new A.m(21,-78)
D.eD2=new A.m(222,615)
D.KD=new A.m(225,300)
D.aaz=new A.m(225,574)
D.eDc=new A.m(24,-52)
D.eDe=new A.m(250,210)
D.eDp=new A.m(2,-56)
D.aOJ=new A.m(300,0)
D.eDq=new A.m(300,440)
D.eDt=new A.m(318,476)
D.eDw=new A.m(324,144)
D.aaC=new A.m(332,150)
D.eDy=new A.m(335,585)
D.eDz=new A.m(338,140)
D.eDA=new A.m(340,158)
D.eDC=new A.m(34,-60)
D.Fc=new A.m(36,-24)
D.eDE=new A.m(372,470)
D.eDF=new A.m(390,455)
D.eDO=new A.m(42,468)
D.eDP=new A.m(431,510)
D.eDQ=new A.m(431,520)
D.eDR=new A.m(45,-92)
D.eDS=new A.m(46,20)
D.eDT=new A.m(46,-92)
D.eDU=new A.m(46,-94)
D.eDV=new A.m(47,-4)
D.eDX=new A.m(48,-4)
D.eE4=new A.m(4,-26)
D.eEc=new A.m(60,455)
D.eEl=new A.m(8,14)
D.eEp=new A.m(8,-76)
D.eEr=new A.m(95,575)
D.eEs=new A.m(98,-24)
D.eEu=new A.m(9,-2)
D.eEv=new A.m(9,-58)
D.aOS=new A.m(9,-79)
D.eEw=new A.m(9,-9)
D.eFb=new A.m(16.5,8)
D.eFd=new A.m(3.2,0)
D.eFe=new A.m(-16.5,8)
D.eFl=new A.m(16.5,2)
D.eFo=new A.m(-3.2,0)
D.eFw=new A.m(9.5,6)
D.eFz=new A.m(-10,14)
D.eFA=new A.m(-10,-12)
D.eFB=new A.m(-10,-58)
D.eFD=new A.m(-11,-10)
D.eFF=new A.m(-11,-60)
D.eFG=new A.m(-12,-14)
D.eFH=new A.m(-12,-16)
D.eFM=new A.m(-14,-2)
D.eFP=new A.m(-15,-15)
D.eFQ=new A.m(-15,-3)
D.eFS=new A.m(-16,-1)
D.eG7=new A.m(-24,-52)
D.eGg=new A.m(-2,-34)
D.eGh=new A.m(-2,-38)
D.eGj=new A.m(-30,-100)
D.aaF=new A.m(-36,-24)
D.eGu=new A.m(-4,-26)
D.eGw=new A.m(-4,-6)
D.eGF=new A.m(-8,-3)
D.eGG=new A.m(-8,-48)
D.eGJ=new A.m(-9,-2)
D.eGL=new A.m(-9,-58)
D.eGM=new A.m(-9,-79)
D.eGN=new A.m(-9,-9)
D.eGQ=new A.m(-9.5,6)
D.eH3=new A.m(-16.5,2)
D.h6W=new A.D("Write a new book",null,B.hj,null,B.K,null,null,null,null,null,null,null)
D.eHD=new A.C(B.lc,D.h6W,null)
D.hlQ=new A.D("Tap to go on",null,B.wm,null,null,null,null,null,null,null,null,null)
D.eHZ=new A.C(B.kO,D.hlQ,null)
D.atP=new A.ae(B.ig,18,B.c,null,null,null)
D.h_Q=new A.D("Add",null,B.kX,null,null,null,null,null,null,null,null,null)
D.dnf=w([D.atP,B.pr,D.h_Q],x.p)
D.ftZ=new A.c1(B.aK,B.e,B.P,B.l,null,B.p,null,0,D.dnf,null)
D.eI1=new A.C(B.o5,D.ftZ,null)
D.eI3=new A.C(E.anM,A8.ZJ,null)
D.fUc=new A.G(!0,B.c,null,null,null,null,13.5,B.C,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h36=new A.D("New Project",null,D.fUc,null,null,null,null,null,null,null,null,null)
D.drY=w([D.atP,B.aa,D.h36],x.p)
D.fu1=new A.c1(B.aK,B.e,B.P,B.l,null,B.p,null,0,D.drY,null)
D.eIh=new A.C(B.hp,D.fu1,null)
D.h5E=new A.D("Choose your header",null,B.uy,null,null,null,null,null,null,null,null,null)
D.eIC=new A.C(B.ie,D.h5E,null)
D.bi4=new A.fs(2.2,null,null,null,null,B.cY,null,null,null,null)
D.fzN=new A.a5(22,22,D.bi4,null)
D.bga=new A.cq(B.z,null,null,D.fzN,null)
D.eIH=new A.C(B.a1X,D.bga,null)
D.bHN=new A.R(14,2,14,6)
D.hjV=new A.D("The top of your book. Tap a design to see it.",null,V.uz,null,null,null,null,null,null,null,null,null)
D.eII=new A.C(D.bHN,D.hjV,null)
D.h4O=new A.D("\ud83c\udfc6 A new record!",null,B.hi,null,null,null,null,null,null,null,null,null)
D.eIK=new A.C(B.kO,D.h4O,null)
D.eKk=new A.j7(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eKn=new A.j7(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aPx=new A.j7(1,0.9607843137254902,0.48627450980392156,0)
D.KK=new A.j7(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Bd=new A.j7(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eKu=new A.j7(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hTA=new C.bm0(null)
D.bCA=new A.n1(D.hTA,null,B.aA,null,null)
D.aTa=new A.cS(0,0,0,0,null,null,D.bCA,null)
D.h_S=new A.D("\ud83c\udfc5",null,B.acW,null,null,null,null,null,null,null,null,null)
D.eOU=new A.cS(null,0,-34,null,null,null,D.h_S,null)
D.eXl=new A.y("E","Sit by the fire again")
D.f26=new A.y("C","Good Learner")
D.f5H=new A.y("D","Still Growing")
D.fav=new A.y(-42,42)
D.fbV=new A.y("B","Faithful Listener")
D.fe2=new A.y("A","Keeper of the Family")
D.fhh=new A.b1(-17,0.7,0)
D.fhS=new A.b1(-8,0.95,1.3)
D.fj_=new A.b1(18,0.65,5.2)
D.fj1=new A.b1(0,1.15,2.6)
D.fjm=new A.b1(9,0.9,3.9)
D.fll=new A.b7([0,0,1,1])
D.aUH=new A.a4(0,0,520,160)
D.fqY=new A.a4(10,612,440,618)
D.fqZ=new A.a4(10,612,440,628)
D.fr1=new A.a4(14,-64,34,-12)
D.fr4=new A.a4(300,336,350,348)
D.aby=new A.a4(30,96,420,346)
D.fr5=new A.a4(30,-9,46,1)
D.fr6=new A.a4(4,2,11,14)
D.fr8=new A.a4(-8,-12.5,8,-7)
D.fr9=new A.a4(-16.5,-21,16.5,1)
D.fra=new A.a4(60,342,88,348)
D.Wc=new A.a4(66,-66,94,-36)
D.frb=new A.a4(6,8,10,14)
D.fre=new A.a4(95,343,115,348)
D.frf=new A.a4(-6.5,-74,6.5,-58)
D.frn=new A.a4(-100,-74,100,-12)
D.fro=new A.a4(-10,8,-6,14)
D.frp=new A.a4(-11,2,-4,14)
D.frq=new A.a4(-11,-70,11,-56)
D.frx=new A.a4(-13,-24,13,-4)
D.frE=new A.a4(-15,-21,15,0)
D.frH=new A.a4(-16,-21,16,1)
D.frI=new A.a4(-16,-21,16,2)
D.frL=new A.a4(-16,-26,16,-6)
D.frT=new A.a4(-230,-26,230,26)
D.fsh=new A.a4(-38,-26,12,-6)
D.fsl=new A.a4(-3,-70,3,-63)
D.fsm=new A.a4(-44,-22,44,0)
D.fso=new A.a4(-46,-9,-30,1)
D.aUL=new A.a4(-80,-190,80,20)
D.fsv=new A.a4(-8,-26,40,-6)
D.fsw=new A.a4(-98,-80,92,-75)
D.fsx=new A.a4(-9,-15,9,-9)
D.hjr=new A.D("Let the AI write it from your tree",null,B.iX,null,B.K,null,null,null,null,null,null,null)
D.bQb=new A.d1(1,B.c9,D.hjr,null)
D.djq=w([E.a5B,B.aa,D.bQb],x.p)
D.ftC=new A.c1(B.aK,B.e,B.P,B.l,null,B.p,null,0,D.djq,null)
D.h_u=new A.D("Save member",null,B.cf,null,null,null,null,null,null,null,null,null)
D.dAK=w([D.auI,B.aa,D.h_u],x.p)
D.ftN=new A.c1(B.aK,B.bb,B.i,B.l,null,B.p,null,0,D.dAK,null)
D.c1f=new A.ae(B.ix,14,B.b6,null,null,null)
D.fND=new A.G(!0,B.b6,null,null,null,null,12,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3x=new A.D("Cashier",null,D.fND,null,null,null,null,null,null,null,null,null)
D.dsx=w([D.c1f,B.b7,D.h3x],x.p)
D.ftR=new A.c1(B.aK,B.e,B.P,B.l,null,B.p,null,0,D.dsx,null)
D.h_v=new A.D("Transfer & settings",null,B.dw,null,null,null,null,null,null,null,null,null)
D.bNS=new A.bu(1,B.b8,D.h_v,null)
D.d9G=w([D.auh,B.ar,D.bNS],x.p)
D.ftS=new A.c1(B.aK,B.e,B.i,B.l,null,B.p,null,0,D.d9G,null)
D.fys=new A.av(16,40)
D.fyx=new A.av(22,64)
D.fyE=new A.av(280,88)
D.fzs=new A.a5(30,null,null,null)
D.fZA=new A.D("The teacher is writing\u2026",null,B.Bz,null,null,null,null,null,null,null,null,null)
D.bhg=new A.cq(B.z,null,null,D.fZA,null)
D.hNh=new A.bf("w",x.W)
D.fzR=new A.a5(null,56,D.bhg,D.hNh)
D.fAD=new A.hZ(5,8,8,1,null)
D.fAL=new A.hZ(2,12,12,1.05,null)
D.h3c=new A.D("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fBy=new A.b3(D.h3c,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h3s=new A.D("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aX6=new A.b3(D.h3s,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hbY=new A.D("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fC1=new A.b3(D.hbY,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hmT=new A.D("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fC6=new A.b3(D.hmT,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h5C=new A.D("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fCd=new A.b3(D.h5C,null,null,null,null,null,null,null,null,null,null,null,null,B.fO,!1,null,null,null,B.t,null)
D.hk7=new A.D("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aXb=new A.b3(D.hk7,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h5A=new A.D("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fCD=new A.b3(D.h5A,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h08=new A.D("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fCF=new A.b3(D.h08,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h9o=new A.D("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fCL=new A.b3(D.h9o,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hnF=new A.D("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fDr=new A.b3(D.hnF,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hil=new A.D("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fDR=new A.b3(D.hil,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hmX=new A.D("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fDU=new A.b3(D.hmX,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hdC=new A.D("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fDW=new A.b3(D.hdC,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h7y=new A.D("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fDX=new A.b3(D.h7y,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h7z=new A.D("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fEY=new A.b3(D.h7z,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h3e=new A.D("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fFf=new A.b3(D.h3e,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h5f=new A.D("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fFz=new A.b3(D.h5f,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hd4=new A.D("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fFQ=new A.b3(D.hd4,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h8o=new A.D("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fFR=new A.b3(D.h8o,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fST=new A.G(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHp=new A.eE("\u2665",null,null,B.cV,null,null,null,null,null,null,D.fST)
D.fPZ=new A.G(!0,B.aS,null,null,null,null,28,B.O,B.cQ,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHF=new A.eE("Today: how well do you know the family?",null,null,B.cV,null,null,null,null,null,null,D.fPZ)
D.fHW=new A.G(!0,B.qN,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ7=new A.G(!0,D.l5,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJv=new A.G(!0,D.l5,null,null,null,null,12,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJz=new A.G(!0,B.d_,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJI=new A.G(!0,D.fL,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJT=new A.G(!0,D.fL,null,null,null,null,13,B.C,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKd=new A.tp(!0,B.ul,null,null,null,null,B.dK,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKt=new A.G(!0,B.d_,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKx=new A.G(!0,D.l5,null,null,null,null,18,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKy=new A.G(!0,B.d_,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKD=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKG=new A.G(!0,B.d_,null,null,null,null,15,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLc=new A.G(!0,B.b6,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLd=new A.G(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLf=new A.G(!0,B.aS,null,null,null,null,15.5,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLH=new A.G(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYr=new A.G(!0,B.aR,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYs=new A.G(!0,D.lX,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM6=new A.G(!0,B.d_,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ad0=new A.tp(!0,B.VJ,null,null,null,null,B.dK,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.X5=new A.G(!0,B.d_,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMg=new A.G(!0,B.a_,null,null,null,null,12.5,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMl=new A.G(!0,D.fL,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMM=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNX=new A.G(!0,D.fL,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYB=new A.G(!0,D.fL,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOg=new A.G(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOs=new A.G(!0,D.fL,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOu=new A.G(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOB=new A.G(!0,L.ji,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYF=new A.G(!0,D.fL,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPz=new A.G(!0,D.fL,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPS=new A.G(!0,D.fL,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPU=new A.G(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPW=new A.G(!0,B.d_,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQk=new A.G(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A7.Jz,null,null,null)
D.aYT=new A.G(!0,D.fL,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQL=new A.G(!0,B.a_,null,null,null,null,17,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR6=new A.G(!0,B.fs,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRu=new A.G(!0,B.bU,null,null,null,null,8,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRz=new A.G(!0,B.bC,null,null,null,null,11,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRL=new A.G(!0,B.c,null,null,null,null,13.5,B.C,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRO=new A.G(!0,D.fL,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRW=new A.G(!0,D.Hb,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS7=new A.G(!0,B.b6,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSw=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSD=new A.G(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Em,null,null,null)
D.fT3=new A.G(!0,B.d_,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTb=new A.G(!0,B.cY,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTo=new A.G(!0,D.lY,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZh=new A.G(!0,D.fL,null,null,null,null,null,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.LX=new A.G(!0,B.d_,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZj=new A.G(!0,B.d_,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Em,null,null,null)
D.fTJ=new A.G(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTN=new A.G(!0,G.nN,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUa=new A.G(!0,B.b6,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUr=new A.G(!0,D.fL,null,null,null,null,15,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUQ=new A.G(!0,B.c,null,null,null,null,null,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVf=new A.G(!0,D.fL,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVM=new A.G(!0,D.fL,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVR=new A.G(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW0=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adx=new A.G(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adA=new A.G(!0,D.lX,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXN=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fY7=new A.G(!0,B.aS,null,null,null,null,27,B.O,B.cQ,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYe=new A.G(!0,L.ji,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYm=new A.G(!0,L.ji,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYQ=new A.D("Time:",null,B.hH,null,null,null,null,null,null,null,null,null)
D.fZb=new A.D("\ud83c\udfae",null,K.adn,null,null,null,null,null,null,null,null,null)
D.fZc=new A.D("Themes",null,B.pu,null,null,null,null,null,null,null,null,null)
D.fZI=new A.D("\ud83c\udfb2",null,B.yg,null,null,null,null,null,null,null,null,null)
D.fZM=new A.D("Delete this game?",null,B.iX,null,null,null,null,null,null,null,null,null)
D.fZT=new A.D("Add Item",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fOa=new A.G(!0,B.a_,null,null,null,null,22,B.C,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_j=new A.D("Debt receipt",null,D.fOa,null,B.K,null,null,null,null,null,null,null)
D.aZy=new A.G(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_C=new A.D("Person who owes",null,D.aZy,null,null,null,null,null,null,null,null,null)
D.h0C=new A.D("Notes",null,B.adc,null,null,null,null,null,null,null,null,null)
D.h15=new A.D("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fN4=new A.G(!0,B.c,null,null,null,null,11,B.C,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h17=new A.D("Share",null,D.fN4,null,null,null,null,null,null,null,null,null)
D.h28=new A.D("Move your family trees",null,I.adu,null,null,null,null,null,null,null,null,null)
D.h2O=new A.D("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.h3r=new A.D("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.h3P=new A.D("SAVE",null,D.LX,null,null,null,null,null,null,null,null,null)
D.h4s=new A.D("The round button is the right answer.",null,V.BC,null,null,null,null,null,null,null,null,null)
D.h4N=new A.D("Remove this book?",null,B.hi,null,null,null,null,null,null,null,null,null)
D.fU7=new A.G(!0,B.d_,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Em,null,null,null)
D.h5k=new A.D("Fireside Stories",null,D.fU7,null,null,null,null,null,null,null,null,null)
D.b_2=new A.D("Download",null,B.cf,null,null,null,null,null,null,null,null,null)
D.h60=new A.D("What should the AI do?",null,B.dw,null,null,null,null,null,null,null,null,null)
D.fMF=new A.G(!0,D.lX,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6f=new A.D("REPORT CARD",null,D.fMF,null,null,null,null,null,null,null,null,null)
D.h72=new A.D("Calabash Catch",null,B.Xs,null,null,null,null,null,null,null,null,null)
D.h7u=new A.D("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.h7W=new A.D("\ud83c\udfe1",null,B.FJ,null,null,null,null,null,null,null,null,null)
D.h8D=new A.D("Ribbon bookmark",null,B.jO,null,null,null,null,null,null,null,null,null)
D.fVL=new A.G(!0,B.b6,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h97=new A.D("NGMY.ORG",null,D.fVL,null,B.K,null,null,null,null,null,null,null)
D.haq=new A.D("Scan family tree QR",null,B.cK,null,null,null,null,null,null,null,null,null)
D.fRP=new A.G(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbd=new A.D("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fRP,null,B.K,null,null,null,null,null,null,null)
D.hcr=new A.D("Delete",null,B.X_,null,null,null,null,null,null,null,null,null)
D.hcs=new A.D("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.hcA=new A.D("Thumbnail",null,B.pu,null,null,null,null,null,null,null,null,null)
D.hd9=new A.D("Save the cover",null,B.cK,null,null,null,null,null,null,null,null,null)
D.hde=new A.D("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.BG,null,B.K,null,null,null,null,null,null,null)
D.hdD=new A.D("Your photos",null,B.pu,null,null,null,null,null,null,null,null,null)
D.hdU=new A.D("Create Project",null,B.cf,null,null,null,null,null,null,null,null,null)
D.heg=new A.D("\u2b50 stars",null,B.FK,null,null,null,null,null,null,null,null,null)
D.heu=new A.D("Design your cover",null,B.uy,null,null,null,null,null,null,null,null,null)
D.heA=new A.D("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.heD=new A.D("PICTURE",null,N.wp,null,null,null,null,null,null,null,null,null)
D.heF=new A.D("\ud83c\udfaf",null,D.Xr,null,null,null,null,null,null,null,null,null)
D.hf1=new A.D("Paid",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hf3=new A.D("You can undo it right after.",null,V.BC,null,null,null,null,null,null,null,null,null)
D.hfC=new A.D("Print",null,B.wn,null,null,null,null,null,null,null,null,null)
D.hg1=new A.D("Amount owed",null,D.aZy,null,null,null,null,null,null,null,null,null)
D.hgh=new A.D("Got it",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hgU=new A.D("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.hgX=new A.D("Add to budget",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hhm=new A.D("Debtor signature",null,B.adc,null,null,null,null,null,null,null,null,null)
D.hhy=new A.D("Change icon",null,B.adb,null,null,null,null,null,null,null,null,null)
D.him=new A.D("MADE BY THE SYSTEM, FROM YOUR TREE",null,U.uB,null,null,null,null,null,null,null,null,null)
D.hiO=new A.D("Family tree QR",null,B.cK,null,null,null,null,null,null,null,null,null)
D.hiU=new A.D("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Xq,null,null,null,null,null,null,null,null,null)
D.hjh=new A.D("Download",null,B.wn,null,null,null,null,null,null,null,null,null)
D.hji=new A.D("The person who planted this tree has not made a game yet.",null,Y.BE,null,null,null,null,null,null,null,null,null)
D.hjm=new A.D("Change",null,B.pu,null,null,null,null,null,null,null,null,null)
D.hkd=new A.D("Clear all",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hkg=new A.D("WHAT SHOULD IT CHANGE?",null,N.wp,null,null,null,null,null,null,null,null,null)
D.hkP=new A.D("COLOUR",null,N.wp,null,null,null,null,null,null,null,null,null)
D.hl3=new A.D("Do it",null,B.cK,null,null,null,null,null,null,null,null,null)
D.hl7=new A.D("Create Tree",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hlh=new A.D("Give me another clue",null,D.LX,null,null,null,null,null,null,null,null,null)
D.hmb=new A.D("Create Family Tree",null,B.fk,null,null,null,null,null,null,null,null,null)
D.hml=new A.D("THE TEACHER EXPLAINS THESE",null,U.uB,null,null,null,null,null,null,null,null,null)
D.fHV=new A.G(!0,E.kI,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hmr=new A.D("Write the first page myself",null,D.fHV,null,null,null,null,null,null,null,null,null)
D.hn_=new A.D("Use this header",null,B.cK,null,null,null,null,null,null,null,null,null)
D.hn6=new A.D("Create Project",null,E.aZc,null,null,null,null,null,null,null,null,null)
D.hOM=new C.adQ(1,"header")
D.aeB=new C.adQ(2,"projects")
D.hON=new C.adQ(3,"cashier")
D.aeC=new C.adQ(4,"familyTree")
D.i3t=new C.cJU(0,"start")
D.i3u=new C.cJV(0,"start")
D.hP_=new C.a_E(null)
D.hQ1=new C.a0b(null)
D.dP4=new A.bm(B.ik,[],A.as("bm<o,H4>"))
D.dvs=w([],x.dE)
D.duT=w([],x.M)
D.hQH=new C.bjb(D.dP4,D.dvs,D.duT,0,0,null,null)
D.b3A=new C.a11(0,"intro")
D.b3B=new C.a11(1,"countdown")
D.aeP=new C.a11(2,"ask")
D.Yo=new C.a11(3,"reveal")
D.b3C=new C.a11(4,"end")
D.hTC=new C.ty(F.Hk,D.lY,B.d_,F.mo,5,!1,!1,!1,0,null)
D.hTE=new C.ty(F.Hk,B.eu,B.d_,B.bP,2,!0,!0,!1,2,B.d_)
D.hTG=new C.ty(B.r0,B.cY,B.d_,F.mo,2,!0,!1,!1,2,B.as)
D.hTH=new C.ty(F.Hk,B.dU,B.d_,F.mo,5,!1,!1,!1,1,null)
D.hTK=new C.ty(F.a0Q,D.al7,B.d_,F.mo,4,!0,!1,!0,0,null)
D.b3F=new C.ty(F.a0Q,B.e0,B.d_,F.mo,3,!0,!1,!0,2,null)
D.b3G=new C.ty(F.tv,D.lY,B.c,F.mo,0,!1,!1,!0,0,null)
D.b3H=new C.ty(B.r0,B.az,B.d_,B.bP,2,!0,!0,!1,2,B.e0)
D.b3I=new C.ty(B.r0,G.nN,B.iu,F.mo,5,!1,!1,!0,3,null)
D.hTO=new C.ty(B.r0,B.e0,B.d_,F.mo,0,!0,!1,!1,0,B.az)
D.b3J=new C.ty(F.Hk,B.eu,B.d_,B.bP,1,!1,!0,!1,1,null)
D.b3K=new C.ty(F.GR,B.as,B.az,F.mo,4,!0,!1,!0,2,null)
D.hTQ=new C.ty(F.tv,B.as,B.eu,F.mo,3,!0,!1,!1,0,null)
D.hTS=new C.ty(B.r0,B.dU,B.d_,B.bP,1,!1,!0,!1,1,null)
D.hTT=new C.ty(F.GR,D.ak7,B.c,F.mo,5,!1,!1,!0,0,null)
D.hUx=new C.a1A(null)
D.i3C=new C.ahi(0,"still")
D.YL=new C.ahi(1,"walk")
D.b4t=new C.ahi(2,"pound")
D.b4u=new C.ahi(3,"drum")
D.i_7=new C.a2T(0,"greet")
D.b4v=new C.a2T(1,"teach")
D.af8=new C.a2T(2,"ask")
D.i_8=new C.a2T(3,"feedback")
D.b4w=new C.a2T(4,"end")
D.YS=new C.a3b(0,"intro")
D.YT=new C.a3b(1,"asking")
D.BX=new C.a3b(2,"reacting")
D.afj=new C.a3b(3,"driving")
D.afk=new C.a3b(4,"arrived")
D.afs=new C.aNv(0,"projects")
D.b4W=new C.aNv(1,"cashier")
D.i1d=new C.aNv(2,"familyTree")})()};
(a=>{a["udDn5KJCytWzc1qkJQeUAkH1IrI="]=a.current})($__dart_deferred_initializers__);