((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,Ai,Aj,Ak,U,A3,V,Al,Am,O,R,A4,W,A5,M,An,L,A6,X,H,E,A7,Ao,Y,Ap,Aq,Ar,A8,As,At,Au,Av,Aw,S,A9,Ax,Ay,Az,N,Aa,AA,Ab,Ac,Ad,AB,AC,Ae,AD,G,AE,AF,AG,Af,AH,Z,AI,AJ,A_,AK,AL,P,AM,AN,Ag,AO,Ah,A0,Q,F,AP,I,A1,K,AQ,A2,T,AR,C={
bHI(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bHI=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.wa(null,""),$async$bHI)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.Y(y.z)
t=A.nA(b1)
s=A.c1(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dt(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cW(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.V.au(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rx(t,a1,B.id,"book",E.Hu),$async$bHI)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.RV(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.Y(l!=null&&A5.Mc(l)?y.k:y.y)
for(j=J.a2(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cF
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a4l(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHI,v)},
aiR(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aiR=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.wa(null,""),$async$aiR)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.Y(y.z)
t=A.nA(b6)
s=x.S
r=A.cS(c1,0,A.dA(4,"count",s),A.U(c1).c)
q=H.a44(new A.O(r,new C.fVy(),r.$ti.k("O<ak.E,m>")).aL(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fVx(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.V.au(b7,null)+"\nAllowed values: style one of "+B.d.aL(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aiR)
case 6:l=c5
k=H.RV(l==null?"":l)
if(k==null)throw A.Y("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.aqF(s,D.dNr,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.dt(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.V.au(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aiR)
case 10:l=c5
k=l==null?null:H.RV(l)
if(k==null)throw A.Y(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.v(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.v(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.cZ(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.l0(a5,a2.k("l0<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
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
case 9:if(h.a!==0){s=h.$ti.k("b9<2>")
p=A.cE(new A.b9(h,s),new C.fVz(),s.k("M.E"),p)
p=H.a44(A.pY(p,3,A.a5(p).k("M.E")).aL(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cq<1>")
b4=A.B(new A.cq(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a4l(s,b9),$async$aiR)
case 13:b5=c5
for(s=J.a2(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aqF(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aiR,v)},
hOP(d,e,f){return A.ce(null,B.v.j(0.65),!1,null,new C.h52(e,f),d,null,!0,!0,x.g2)},
aqF:function aqF(d,e,f){this.a=d
this.b=e
this.c=f},
fVy:function fVy(){},
fVx:function fVx(d){this.a=d},
fVz:function fVz(){},
h52:function h52(d,e){this.a=d
this.b=e},
bFn(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bFn=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aR(b1,new C.fIo())){u=null
w=1
break}t=B.d.cw(b1,new C.fIp())
s=$.T()
r=new A.oT(new A.oo())
q=A.v1(r,D.aTY)
p=A.L()
p.r=B.c.gp(0)
q.aD(D.aTY,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.ac
o.d=B.bF
o.e=B.dN
n=new C.fIu(t)
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
a3=new A.aH(s.r,B.aj,null,null,p)
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
a3=new A.aH(s.r,B.aj,null,null,p)
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
return A.b(r.mZ().vI(520,160),$async$bFn)
case 4:w=3
return A.b(b3.ho(B.ho),$async$bFn)
case 3:b0=b3
u=b0==null?null:J.eR(B.dK.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFn,v)},
fTd(d){return C.iub(d)},
iub(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fTd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bl4()
n=d.x!=null&&d.zX(null).length===0
if(d.x!=null)t=n?D.B2:D.Ky
else t=d.gV4()?D.Ky:D.aOO
w=3
return A.b(C.bFn(d.ax),$async$fTd)
case 3:s=f
p.a=null
if(s!=null)p.a=A.api(s)
r=A.a65(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aOO}else{p.c=C.xA(q,!0)
p.b=n?D.B2:D.Ky}r.a4O(A.hfO(new C.fTf(p,d,new C.fTg(),t,n,o),null,D.bKj,B.xM))
u=r.jI(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTd,v)},
h_p(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$h_p=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fTd(d),$async$h_p)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aw(q,0,40)
u=Aw.HI(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h_p,v)},
fIo:function fIo(){},
fIp:function fIp(){},
fIu:function fIu(d){this.a=d},
fTg:function fTg(){},
fTf:function fTf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fTe:function fTe(){},
h5v(d,e){var w=0,v=A.j(x.H)
var $async$h5v=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,B.v.j(0.55),!0,null,new C.h5z(new A.cx(null,x.eF),e),d,null,!0,!0,x.H),$async$h5v)
case 2:return A.h(null,v)}})
return A.i($async$h5v,v)},
bIa(d,e,f,g){return C.iBZ(d,e,f,g)},
iBZ(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bIa=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cD.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.T(D.fA8)
w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.h5r(g,r,f),d,null,!0,!0,x.H),$async$bIa)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bIa,v)},
h5A(d,e){var w=0,v=A.j(x.H)
var $async$h5A=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,null,!0,null,new C.h5D(new A.cx(null,x.eF),e),d,null,!0,!0,x.H),$async$h5A)
case 2:return A.h(null,v)}})
return A.i($async$h5A,v)},
b19:function b19(d,e){this.c=d
this.a=e},
caa:function caa(){},
beu:function beu(d,e){this.b=d
this.a=e},
h5z:function h5z(d,e){this.a=d
this.b=e},
h5w:function h5w(d){this.a=d},
h5x:function h5x(d,e,f){this.a=d
this.b=e
this.c=f},
h5y:function h5y(d,e){this.a=d
this.b=e},
h5r:function h5r(d,e,f){this.a=d
this.b=e
this.c=f},
h5p:function h5p(d){this.a=d},
h5q:function h5q(d,e,f){this.a=d
this.b=e
this.c=f},
h5D:function h5D(d,e){this.a=d
this.b=e},
h5B:function h5B(d){this.a=d},
h5C:function h5C(d,e,f){this.a=d
this.b=e
this.c=f},
fNj(d,e){var w=0,v=A.j(x.y),u,t
var $async$fNj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3P(d),$async$fNj)
case 3:t=g
J.nd(t,new C.fNk(e))
u=A.ajz(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fNj,v)},
fNk:function fNk(d){this.a=d},
aqS:function aqS(d,e,f){this.c=d
this.d=e
this.a=f},
aFH:function aFH(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dTS:function dTS(d,e){this.a=d
this.b=e},
dTD:function dTD(d,e){this.a=d
this.b=e},
dTG:function dTG(d,e,f){this.a=d
this.b=e
this.c=f},
dTF:function dTF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTE:function dTE(d,e){this.a=d
this.b=e},
dTH:function dTH(d,e){this.a=d
this.b=e},
dTB:function dTB(){},
dTC:function dTC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dTA:function dTA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dTl:function dTl(d){this.a=d},
dTm:function dTm(d,e,f){this.a=d
this.b=e
this.c=f},
dTn:function dTn(d,e){this.a=d
this.b=e},
dTk:function dTk(d){this.a=d},
dTs:function dTs(d,e){this.a=d
this.b=e},
dTj:function dTj(d){this.a=d},
dTt:function dTt(d,e,f){this.a=d
this.b=e
this.c=f},
dTu:function dTu(d,e,f){this.a=d
this.b=e
this.c=f},
dTi:function dTi(d,e){this.a=d
this.b=e},
dTv:function dTv(d,e,f){this.a=d
this.b=e
this.c=f},
dTh:function dTh(d,e){this.a=d
this.b=e},
dTw:function dTw(d,e){this.a=d
this.b=e},
dTg:function dTg(d){this.a=d},
dTx:function dTx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTe:function dTe(){},
dT8:function dT8(d){this.a=d},
dT9:function dT9(d){this.a=d},
dTf:function dTf(d,e){this.a=d
this.b=e},
dTy:function dTy(d,e){this.a=d
this.b=e},
dTd:function dTd(d){this.a=d},
dTz:function dTz(d){this.a=d},
dTc:function dTc(){},
dTo:function dTo(d,e){this.a=d
this.b=e},
dTb:function dTb(d){this.a=d},
dTp:function dTp(d,e,f){this.a=d
this.b=e
this.c=f},
dTa:function dTa(d,e){this.a=d
this.b=e},
dT7:function dT7(d,e){this.a=d
this.b=e},
dTq:function dTq(d){this.a=d},
dTr:function dTr(d,e,f){this.a=d
this.b=e
this.c=f},
dTV:function dTV(){},
dTW:function dTW(d,e){this.a=d
this.b=e},
dTT:function dTT(d){this.a=d},
dTU:function dTU(d){this.a=d},
dTP:function dTP(d,e){this.a=d
this.b=e},
dTQ:function dTQ(d){this.a=d},
dTI:function dTI(d,e,f){this.a=d
this.b=e
this.c=f},
dTJ:function dTJ(d,e,f){this.a=d
this.b=e
this.c=f},
dTK:function dTK(d,e,f){this.a=d
this.b=e
this.c=f},
dTL:function dTL(d,e,f){this.a=d
this.b=e
this.c=f},
dTM:function dTM(d,e,f){this.a=d
this.b=e
this.c=f},
dTN:function dTN(d,e,f){this.a=d
this.b=e
this.c=f},
dTO:function dTO(d,e,f){this.a=d
this.b=e
this.c=f},
dTX:function dTX(){},
dTY:function dTY(){},
dTZ:function dTZ(){},
dU_:function dU_(d){this.a=d},
dTR:function dTR(d,e){this.a=d
this.b=e},
hKh(d){return B.d.dC(D.a6d,new C.fO5(d),new C.fO6())},
v5:function v5(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fO5:function fO5(d){this.a=d},
fO6:function fO6(){},
amT:function amT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aXQ:function aXQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ur:function Ur(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bi7:function bi7(){this.d=$
this.c=this.a=null},
dj4:function dj4(d,e){this.a=d
this.b=e},
dj2:function dj2(d,e){this.a=d
this.b=e},
dj3:function dj3(){},
dj5:function dj5(d,e){this.a=d
this.b=e},
hu5(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.nH(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LZ(d,e){return C.isO(d,e)},
isO(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LZ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$LZ)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.V.aP(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.cZ(p,x.f)
o=A.cE(o,new C.fQE(),o.$ti.k("M.E"),x.B)
n=A.a5(o).k("X<M.E>")
o=A.B(new A.X(o,new C.fQF(),n),n.k("M.E"))
B.d.b_(o,new C.fQG())
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
return A.i($async$LZ,v)},
BM(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BM=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aB(),$async$BM)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.h46(),x.a)
r=A.B(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aE("String","ngmy_family_book_v1_"+s+"_"+e,B.V.au(r,null)),$async$BM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BM,v)},
aTW(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aTW=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LZ(d,e),$async$aTW)
case 2:u=h
t=J.cH(u)
s=t.bl(u,new C.hcM(f))
if(s===-1)t.cb(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BM(d,e,u),$async$aTW)
case 3:return A.h(null,v)}})
return A.i($async$aTW,v)},
bFT(d,e,f){var w=0,v=A.j(x.H),u
var $async$bFT=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LZ(d,e),$async$bFT)
case 2:u=h
J.nd(u,new C.fNb(f))
w=3
return A.b(C.BM(d,e,u),$async$bFT)
case 3:return A.h(null,v)}})
return A.i($async$bFT,v)},
bG8(d,e){return C.isN(d,e)},
isN(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bG8=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bG8)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.PC
w=1
break}p=B.V.aP(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.i.M(k)
if(k==null)k=0
if(D.Ey.am(0,o.h(0,"foil")))j=A.cR(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.i.D(i==null?25:i,18,36)
h=B.d.q(D.a7V,o.h(0,"position"))?A.cR(o.h(0,"position")):"middle"
g=B.d.q(D.a7e,o.h(0,"frame"))?A.cR(o.h(0,"frame")):"double"
f=B.d.q(D.a7a,o.h(0,"texture"))?A.cR(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.dcr,o.h(0,"header"))?A.cR(o.h(0,"header")):"classic"
o=new C.IG(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.PC
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.PC
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bG8,v)},
T4(d,e,f){return C.iBu(d,e,f)},
iBu(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$T4=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aB(),$async$T4)
case 7:r=h
w=8
return A.b(r.aE("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.V.au(f.ak(),null)),$async$T4)
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
return A.i($async$T4,v)},
Sv(d,e){return C.isP(d,e)},
isP(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sv=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$Sv)
case 7:r=g
q=r.qF("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LZ(d,e),$async$Sv)
case 8:if(!j.cL(g)){n=B.a.i(d.toLowerCase())
m=J.lF(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aE("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Sv)
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
return A.i($async$Sv,v)},
aia(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aia=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sv(d,e),$async$aia)
case 3:s=g
r=J.a2(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.aB(),$async$aia)
case 5:w=4
return A.b(g.aE("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aia)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aia,v)},
a4w(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a4w=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sv(d,e),$async$a4w)
case 2:s=h
J.fQ(s,f)
w=3
return A.b(A.aB(),$async$a4w)
case 3:u=h
w=4
return A.b(u.aE("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a4w)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.X(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4w)
case 5:w=6
return A.b(u.X(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4w)
case 6:return A.h(null,v)}})
return A.i($async$a4w,v)},
nH:function nH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fQE:function fQE(){},
fQF:function fQF(){},
fQG:function fQG(){},
h46:function h46(){},
hcM:function hcM(d){this.a=d},
fNb:function fNb(d){this.a=d},
IG:function IG(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bTy:function bTy(d){this.a=d},
iBO(d,e,f,g,h,i,j){return A.a8(d,!1).cc(A.ec(new C.h4H(j,i,f,e,h,g),!0,null,x.H))},
Sr(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Sr=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sv(h,g),$async$Sr)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.T(D.aWl)
u=!1
w=1
break}w=4
return A.b(C.hOP(d,f,e),$async$Sr)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aia(h,g),$async$Sr)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nH(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.BM(h,r,p),$async$Sr)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.T4(h,r,new C.IG("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Sr)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Sr,v)},
h4H:function h4H(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a07:function a07(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCF:function aCF(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
djK:function djK(d){this.a=d},
djJ:function djJ(d,e){this.a=d
this.b=e},
djy:function djy(d,e){this.a=d
this.b=e},
djv:function djv(d,e){this.a=d
this.b=e},
dj6:function dj6(d){this.a=d},
dj7:function dj7(d,e){this.a=d
this.b=e},
djz:function djz(d){this.a=d},
djf:function djf(d){this.a=d},
djd:function djd(d){this.a=d},
dje:function dje(d){this.a=d},
djg:function djg(d){this.a=d},
djw:function djw(d){this.a=d},
djx:function djx(){},
djb:function djb(d){this.a=d},
djc:function djc(d,e){this.a=d
this.b=e},
djh:function djh(d){this.a=d},
dji:function dji(d,e){this.a=d
this.b=e},
djI:function djI(d){this.a=d},
djH:function djH(d,e){this.a=d
this.b=e},
djG:function djG(d){this.a=d},
djs:function djs(d){this.a=d},
djr:function djr(d){this.a=d},
djt:function djt(d){this.a=d},
dj8:function dj8(d,e){this.a=d
this.b=e},
dju:function dju(d,e){this.a=d
this.b=e},
djl:function djl(d){this.a=d},
djm:function djm(d){this.a=d},
djk:function djk(){},
djn:function djn(d){this.a=d},
djo:function djo(d){this.a=d},
djp:function djp(d,e){this.a=d
this.b=e},
djq:function djq(d,e,f){this.a=d
this.b=e
this.c=f},
djj:function djj(d,e){this.a=d
this.b=e},
djB:function djB(d){this.a=d},
djA:function djA(){},
djC:function djC(d){this.a=d},
djD:function djD(d){this.a=d},
djE:function djE(d){this.a=d},
djF:function djF(d,e){this.a=d
this.b=e},
dj9:function dj9(d){this.a=d},
dja:function dja(d){this.a=d},
a0b:function a0b(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biw:function biw(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dlw:function dlw(d){this.a=d},
dlx:function dlx(d){this.a=d},
dlv:function dlv(d){this.a=d},
dly:function dly(d){this.a=d},
dlu:function dlu(d){this.a=d},
dlz:function dlz(d){this.a=d},
dlt:function dlt(d){this.a=d},
dlA:function dlA(d,e){this.a=d
this.b=e},
dls:function dls(d,e){this.a=d
this.b=e},
dlB:function dlB(d,e){this.a=d
this.b=e},
a09:function a09(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
agB:function agB(d,e,f){this.a=d
this.b=e
this.c=f},
aCI:function aCI(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
djZ:function djZ(d,e){this.a=d
this.b=e},
djY:function djY(d,e){this.a=d
this.b=e},
dk2:function dk2(d){this.a=d},
dk1:function dk1(d,e){this.a=d
this.b=e},
dk_:function dk_(d){this.a=d},
dk0:function dk0(d){this.a=d},
dk3:function dk3(d){this.a=d},
dk4:function dk4(d){this.a=d},
djX:function djX(d,e){this.a=d
this.b=e},
djW:function djW(d,e){this.a=d
this.b=e},
L1:function L1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_n:function a_n(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cRQ:function cRQ(d){this.a=d},
cRR:function cRR(){},
cRS:function cRS(d){this.a=d},
bfH:function bfH(d,e,f){this.b=d
this.c=e
this.a=f},
bfy:function bfy(d,e){this.b=d
this.a=e},
v6:function v6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_I:function a_I(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfF:function bfF(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
daP:function daP(d,e,f){this.a=d
this.b=e
this.c=f},
daO:function daO(d,e){this.a=d
this.b=e},
dbd:function dbd(d){this.a=d},
db0:function db0(){},
dbe:function dbe(d){this.a=d},
db_:function db_(){},
dbf:function dbf(d,e){this.a=d
this.b=e},
daZ:function daZ(d,e){this.a=d
this.b=e},
dbg:function dbg(d,e){this.a=d
this.b=e},
daY:function daY(d,e){this.a=d
this.b=e},
dbh:function dbh(d){this.a=d},
daX:function daX(){},
dbi:function dbi(d,e){this.a=d
this.b=e},
daW:function daW(d,e){this.a=d
this.b=e},
dbj:function dbj(d){this.a=d},
db8:function db8(d,e){this.a=d
this.b=e},
dbk:function dbk(d){this.a=d},
dbl:function dbl(d){this.a=d},
dbn:function dbn(d){this.a=d},
dbo:function dbo(d){this.a=d},
db7:function db7(d,e){this.a=d
this.b=e},
dbp:function dbp(d,e){this.a=d
this.b=e},
aJN:function aJN(d){this.a=d},
bl4:function bl4(d){this.a=d},
bdP:function bdP(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
amU:function amU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a2p:function a2p(d,e){this.a=d
this.b=e},
amV:function amV(d,e,f,g,h,i){var _=this
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
_.a9$=i
_.c=_.a=null},
bTI:function bTI(d){this.a=d},
bTC:function bTC(d){this.a=d},
bTB:function bTB(d,e){this.a=d
this.b=e},
bTL:function bTL(d){this.a=d},
bTD:function bTD(d){this.a=d},
bTE:function bTE(d){this.a=d},
bTH:function bTH(d){this.a=d},
bTG:function bTG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTJ:function bTJ(d,e){this.a=d
this.b=e},
bTK:function bTK(){},
bTF:function bTF(d){this.a=d},
bTz:function bTz(d,e){this.a=d
this.b=e},
bTA:function bTA(d){this.a=d},
bqH:function bqH(d,e){this.b=d
this.a=e},
aCG:function aCG(){},
iQ(d,e){var w
$.T()
w=A.L()
w.b=B.ac
w.c=e
w.r=d.gp(0)
w.d=B.bF
w.e=B.dN
return w},
bFp(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bs(j.save())
j.translate(e.a,e.b)
d.nK(0,a0?-f:f,f)
w=A.bY(B.hC,8,36)
v=B.v.j(0.3)
u=$.T()
t=A.L()
t.r=v.gp(0)
d.c1(w,t)
w=a1===D.Yi
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.v,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eBp,new A.r(-4+v,-2),C.iQ(q,5))
d.ah(D.ez2,new A.r(4-v,-2),C.iQ(q,5))}else{t=A.bY(B.Kp,14,40)
p=A.L()
p.r=v.gp(0)
d.c1(t,p)}v=u.r
u=x.v
o=new A.aH(v,B.aj,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.ch(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.ch(15,-40,11,t))
o.E(new A.bA())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aH(v,B.aj,k,k,A.a([],u))
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
break}if(a1===D.b3A){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iQ(F.GC,3.4))
d.ah(D.eBG,new A.r(9,n),C.iQ(q,4))
d.ah(D.ezt,new A.r(10,n),C.iQ(q,4))}else if(a1===D.b3B){d.ah(D.eAw,new A.r(-8,-26-Math.max(0,w)*6),C.iQ(q,4))
d.ah(D.exv,new A.r(8,-26-Math.max(0,-w)*6),C.iQ(q,4))}else{w=s*3
v=-38-r
d.ah(D.eAA,new A.r(-12-w,v),C.iQ(q,4))
d.ah(D.aNO,new A.r(12+w,v),C.iQ(q,4))}w=A.L()
w.r=q.gp(0)
d.aD(D.fmX,w)
m=new A.r(0,-77-r)
w=A.bY(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c1(w,v)
w=h.y
if(w!=null){v=A.bY(m.a6(0,K.vX),15,24)
u=A.L()
u.r=w.gp(0)
d.c1(v,u)
u=m.a6(0,D.exp)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bY(m.a6(0,B.u0),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a6(0,D.eBE),m.a6(0,D.eAu),C.iQ(v,2.2))
d.ah(m.a6(0,D.ezs),m.a6(0,D.exm),C.iQ(v,2.2))}if(w===4){w=m.a6(0,D.eBI)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a6(0,D.ezu)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a6(0,D.eAj)
v=A.L()
v.r=B.ir.gp(0)
d.O(w,0.9,v)
v=m.a6(0,D.eA8)
w=A.L()
w.r=B.ir.gp(0)
d.O(v,0.9,w)
if(i){l=m.a6(0,K.aa3)
w=A.bY(l,21,22)
v=A.L()
v.r=D.lR.gp(0)
d.c1(w,v)
v=A.bY(l.a6(0,K.aNL),5,12)
w=A.L()
w.r=D.bj0.gp(0)
d.c1(v,w)
d.ah(l.a6(0,D.eBA),l.a6(0,K.aO8),C.iQ(B.cW,1.4))
d.ah(D.aNO,new A.r(15,-88-r),C.iQ(q,3.6))}j.restore()},
hIU(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bs(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bY(B.dQ,18,96)
u=B.v.j(0.28)
$.T()
t=A.L()
t.r=u.gp(0)
d.c1(v,t)
t=A.bY(B.dQ,11,70)
v=B.v.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c1(t,u)
d.ly(D.aU1,A.L())
C.ihd(d,g,h,i,j)
s=(k==null?D.aa8:k).a-w>=0?1:-1
w=A.L()
w.a=B.MM
w.san(A.jP(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.aka.j(0.5),D.aka.j(0.12),D.bqG.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aD(D.aU1,w)
r.restore()
r.restore()},
ihd(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.v,0.28)
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
s=A.bx(D.fmY,B.u5)
p=$.T()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bx(D.fmT,B.hS)
s=A.ap(v,B.v,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bx(D.fn6,B.hS)
o=A.ap(v,B.v,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fn_,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.flJ,s)
s=a1.c
J.bs(s.save())
s.translate(a3.w,0)
J.bs(s.save())
a1.nK(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aH(p.r,B.aj,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.ch(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.ch(m+3,-62,m-2,-58))
l.E(new A.ch(0,-70,k,-58))
l.E(new A.bA())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.bs(s.save())
a1.mz(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.djR[j]
i=new A.as(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=5
i.r=k.gp(0)
i.d=B.bF
i.e=B.dN
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ap(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.T()
f=new A.as(B.T,B.Q,B.W,B.X,B.U)
f.r=i.gp(0)
a1.O(new A.r(g,h),3.6,f)
f=new A.as(B.T,B.Q,B.W,B.X,B.U)
f.r=u.gp(0)
a1.O(new A.r(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.as(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=1.6
i.r=k.gp(0)
i.d=B.bF
i.e=B.dN
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.as(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=1.6
i.r=k.gp(0)
i.d=B.bF
i.e=B.dN
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.eB2,D.eya,C.iQ(a2.c.j(0.9),3))}a1.ah(D.eBB,D.eAC,C.iQ(B.v.j(0.18),1.6))
a1.ah(D.exu,K.aNQ,C.iQ(B.v.j(0.18),1.6))
u=B.v.j(0.12)
k=$.T()
i=A.L()
i.r=u.gp(0)
a1.aD(D.flF,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aD(D.flT,i)
n=new A.aH(k.r,B.aj,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.ch(0,-57,9,-66))
n.E(new A.ch(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fm1,0.1,2.941592653589793,!1,C.iQ(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.aad
n=25*q
k=23*q
i=9*q
C.hEK(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.F_:o
C.hEK(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eyV,D.eyR,C.iQ(D.al9,4))
a1.ah(D.eyT,D.eyP,C.iQ(D.H4.j(0.7),1.4))
u=A.L()
u.r=B.cW.gp(0)
a1.O(D.eyS,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bs(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jr(0,a3.f)
a1.bV(0,r)
C.ih9(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hEK(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aI(0,e),r=s.gcL(),q=r===0?B.hC:s.f_(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a6(0,q.aO(0,n)).a6(0,v.aO(0,m))
t=e.a6(0,q.aO(0,p))
d.ah(e,u,C.iQ(j,l))
o=A.ap(j,B.v,0.2)
o.toString
d.ah(e,u,C.iQ(o,l*0.35))
d.ah(u,t,C.iQ(k,l*0.78))
o=A.ap(k,B.v,0.22)
o.toString
d.ah(u,t,C.iQ(o,l*0.22))
$.T()
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.bY(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c1(o,w)
w=-l
w=t.a6(0,new A.r(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
ih9(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bY(B.vW,40,38)
$.T()
v=A.L()
v.r=c0.gp(0)
c2.c1(w,v)}if(c1===4){$.T()
w=A.L()
w.r=c0.gp(0)
c2.O(D.eAK,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.exL,9.5,w)}w=A.bY(D.eBX,10,6)
v=$.T()
u=A.L()
u.r=c8.gp(0)
c2.c1(w,u)
u=A.bY(D.eAg,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c1(u,w)
v=v.r
w=x.v
t=new A.aH(v,B.aj,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.i5(13,-20,17,-9,16,2))
t.E(new A.i5(15,13,8,20,0,20))
t.E(new A.i5(-8,20,-15,13,-16,2))
t.E(new A.i5(-17,-9,-13,-20,0,-20))
t.E(new A.bA())
u=A.L()
u.san(A.ws(D.eBr,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iQ(c8.j(0.5),0.8)
c2.cQ(D.fn8,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.flM,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eAH,K.aOh,s)
c2.ah(D.exH,D.exy,s)
c2.cQ(D.fm0,2.2,1.4,!1,s)
c2.cQ(D.flK,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.as(B.T,B.Q,B.W,B.X,B.U)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fmf,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aH(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.ch(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.ch(0,-12,-13,-6))
p.E(new A.bA())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.eAy,D.exz,C.iQ(G.nD,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.eAN,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.exM,3,o)
o=new A.aH(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.ch(-12,22,0,26))
o.E(new A.ch(12,22,13,6))
o.E(new A.ch(8,13,0,12))
o.E(new A.ch(-8,13,-13,6))
o.E(new A.bA())
p=A.L()
p.r=B.hW.gp(0)
c2.af(o,p)
p=new A.aH(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.ch(0,6,7,8))
p.E(new A.ch(0,10.5,-7,8))
o=A.L()
o.r=B.bO.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aH(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.ch(-20,-27,0,-29))
p.E(new A.ch(20,-27,17,-4))
p.E(new A.ch(0,-14,-17,-4))
p.E(new A.bA())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.v,0.3)
o.toString
c2.cQ(D.fmm,3.4,2.5,!1,C.iQ(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fm8,3.6,2.2,!1,C.iQ(o,1.2))
o=new A.aH(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.ch(27,-34,25,-19))
o.E(new A.ch(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aH(v,B.aj,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.ch(24,-12,27,-26))
n.E(new A.ch(18,-22,11,-22))
o=A.ap(m,B.v,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.O(D.exA,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fmj,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.as(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=0.9
o.r=p.gp(0)
o.d=B.bF
o.e=B.dN
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aEv[l]
o=new A.as(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=4.5
o.r=c0.gp(0)
o.d=B.bF
o.e=B.dN
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.as(B.T,B.Q,B.W,B.X,B.U)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fmi,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.aa3,K.aa2,C.iQ(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.flN,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bY(D.eBK,5,8)
o=D.aho.j(i)
n=A.L()
n.r=o.gp(0)
c2.c1(p,n)
n=A.bY(D.eAr,5,8)
p=D.aho.j(i)
o=A.L()
o.r=p.gp(0)
c2.c1(n,o)
h=c4.e*2.4
o=new A.aH(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.ch(h-3.4,6,h-2.6,7.4))
o.E(new A.ch(h,8.8,h+2.6,7.4))
c2.af(o,C.iQ(c8.j(0.75),1.1))
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
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.hp[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bY(new A.r(a5,-3),a3,7)
a6=new A.as(B.T,B.Q,B.W,B.X,B.U)
a6.r=B.c.j(0.96).gp(0)
c2.c1(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bs(d.save())
a6=A.a([],w)
a4=new A.aH(v,B.aj,b9,b9,a6)
a6.push(new A.jK(A.bY(new A.r(a5,-3),a3,7)))
a4.ac()
a3=a4.e
if(a3==null)a3=a4.e=new A.Es(a4.glc().a.snapshot())
d.clipPath(a3.a,$.mQ(),!0)
a3=new A.as(B.T,B.Q,B.W,B.X,B.U)
a3.r=D.bmW.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.as(B.T,B.Q,B.W,B.X,B.U)
a3.r=B.v.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.as(B.T,B.Q,B.W,B.X,B.U)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a_v:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.as(B.T,B.Q,B.W,B.X,B.U)
a9.b=B.ac
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bF
a9.e=B.dN
a3=p?0.8:0
c2.cQ(A.bY(new A.r(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dS
else{b1=A.ap(c0,B.v,0.2)
b1.toString}b2=new A.as(B.T,B.Q,B.W,B.X,B.U)
b2.b=B.ac
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bF
b2.e=B.dN
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.bxs
else{u=A.ap(c8,D.bqI,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.i.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aH(v,B.aj,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.ch(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.ch(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bA())
v=A.L()
v.r=D.bq_.gp(0)
c2.af(b8,v)
J.bs(d.save())
c2.mz(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aD(new A.a3(w,11,w+b6*2,13.2),u)
u=A.bY(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bxx.gp(0)
c2.c1(u,w)
d.restore()
c2.af(b8,C.iQ(b4,1.1))}else{u=new A.aH(v,B.aj,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.ch(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iQ(b4,1.5))
if(b5>0.6){w=new A.aH(v,B.aj,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.ch(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.ch(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fm_,-1.2,2.2,!1,C.iQ(c8.j(0.5),0.8))
c2.cQ(D.flP,2.141592653589793,2.2,!1,C.iQ(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.eA9,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.eA6,1.7,w)}},
imH(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.T(),f=new A.oT(new A.oo()),e=A.v1(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jP(B.J,new A.r(0,a0*0.46),D.dgo,D.d74,B.x,h))
e.aD(new A.a3(0,0,0+d,0+a0),a2)
a2=e.c
J.bs(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e0()
w.cT(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.as(B.T,B.Q,B.W,B.X,B.U)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bs(a2.save())
a2.translate(200,120)
e.jr(0,-0.5)
d=A.L()
a0=x.O
d.san(A.ws(B.J,230,A.a([D.blA,B.L],a0),h,B.x,h,h,0))
e.c1(D.fmu,d)
a2.restore()
d=A.L()
d.san(A.ws(D.aab,58,A.a([D.bp0,B.L],a0),h,B.x,h,h,0))
e.O(D.aab,58,d)
d=A.L()
d.r=D.bki.gp(0)
e.O(D.aab,24,d)
d=A.L()
d.r=D.a_X.gp(0)
e.O(D.eyu,5,d)
d=A.L()
d.r=D.a_X.gp(0)
e.O(D.eyy,3.4,d)
d=A.L()
d.r=D.a_X.gp(0)
e.O(D.eyx,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aH(g.r,B.aj,h,h,u)
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
g=[D.biP,D.bkR,D.br1][s]
u=$.T()
t=new A.as(B.T,B.Q,B.W,B.X,B.U)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cB3[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.as(B.T,B.Q,B.W,B.X,B.U)
u.b=B.ac
u.c=2.4
u.r=D.a0i.gp(0)
u.d=B.bF
u.e=B.dN
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bY(new A.r(g,k-27),11,46)
u=new A.as(B.T,B.Q,B.W,B.X,B.U)
u.r=D.a0i.gp(0)
e.c1(g,u)
d=A.bY(new A.r(o-12,d),8,24)
u=new A.as(B.T,B.Q,B.W,B.X,B.U)
u.r=D.a0i.gp(0)
e.c1(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.as(B.T,B.Q,B.W,B.X,B.U)
u.r=D.bkl.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jP(D.ex3,D.ex6,D.d9b,B.xA,B.x,h))
e.aD(new A.a3(-200,412,650,1300),g)
j=new A.e0()
j.cT(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bY(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h9()?B.c:B.v
d=new A.as(B.T,B.Q,B.W,B.X,B.U)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c1(u,d)}J.bs(a2.save())
a2.translate(225,590)
e.nK(0,1,0.34)
g=A.L()
g.san(A.ws(B.J,250,A.a([D.bs1,D.blb,D.btZ],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.ajR,D.bjQ,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.T()
a0=new A.as(B.T,B.Q,B.W,B.X,B.U)
a0.b=B.ac
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bF
a0.e=B.dN
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.ifo(e)
for(l=0;l<3;++l)C.iiE(e,D.aCi[l])
C.iit(e,D.eyo)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.T()
a0=new A.as(B.T,B.Q,B.W,B.X,B.U)
a0.b=B.ac
a0.c=2.4
a0.r=D.a0e.gp(0)
a0.d=B.bF
a0.e=B.dN
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.exw,D.exP,C.iQ(D.bkz,1.6))
a2.restore()
return f.mZ()},
ifo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.T().r,g=x.v,f=new A.aH(h,B.aj,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.i5(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.i5(416,382,432,422,428,462))
f.E(new A.bA())
w=A.L()
w.san(A.jP(new A.r(354,0),new A.r(430,0),D.dFS,B.my,B.x,i))
d.af(f,w)
v=new A.e0()
v.cT(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.v.j(0.18)
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.b=B.ac
p.c=1.1
p.r=q.gp(0)
p.d=B.bF
p.e=B.dN
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dlm[o]
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
k.ac()
r=new A.ch(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.aj(p)
k.ac()
r=new A.as(B.T,B.Q,B.W,B.X,B.U)
r.b=B.ac
r.c=8
r.r=D.aia.gp(0)
r.d=B.bF
r.e=B.dN
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.as(B.T,B.Q,B.W,B.X,B.U)
l.r=A.ap(D.bkr,D.br_,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.as(B.T,B.Q,B.W,B.X,B.U)
r.b=B.ac
r.c=1.2
r.r=D.a0e.gp(0)
r.d=B.bF
r.e=B.dN
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bY(new A.r(w,q+28),13,7)
w=new A.as(B.T,B.Q,B.W,B.X,B.U)
w.r=D.bso.gp(0)
d.c1(q,w)}},
iiE(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bY(new A.r(a5,a6+2),a9,a7*2.8),b1=B.v.j(0.3),b2=$.T(),b3=A.L()
b3.r=b1.gp(0)
b4.c1(b0,b3)
b2=b2.r
b3=x.v
w=new A.aH(b2,B.aj,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.ch(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bA())
u=A.L()
u.san(A.jP(new A.r(b0,0),new A.r(v,0),D.dlt,B.my,B.x,a4))
b4.af(w,u)
t=new A.e0()
t.cT(B.o.R(a5*7))
v=b4.c
J.bs(v.save())
b4.mz(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.v.j(0.14)
n=new A.as(B.T,B.Q,B.W,B.X,B.U)
n.b=B.ac
n.c=1
n.r=o.gp(0)
n.d=B.bF
n.e=B.dN
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ajN.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aD(new A.a3(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.i.bc(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aH(b2,B.aj,a4,a4,j)
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
j=new A.as(B.T,B.Q,B.W,B.X,B.U)
j.r=D.lR.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aH(b2,B.aj,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.i.bc(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.aj(n)
f.ac()}b4.af(f,C.iQ(D.ajN.j(0.7),1.6))
v.restore()
b0=$.T().r
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
b2.E(new A.ch(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bA())
m=A.L()
m.r=D.ajZ.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.ajZ.gp(0)
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
e.E(new A.ch(a5-a9,n,a5,u))
e.E(new A.ch(a5+a9,n,p,j))
e.E(new A.ch(a5,b1+a7*0.34,o,j))
e.E(new A.bA())
b1=A.L()
n=a7*1.4
b1.san(A.jP(new A.r(a5-n,0),new A.r(a5+n,0),D.dpb,B.my,B.x,a4))
b4.af(e,b1)
J.bs(v.save())
b4.mz(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h9()?B.v:D.bjZ).j(0.16)
i=new A.as(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=0.9
i.r=n.gp(0)
i.d=B.bF
i.e=B.dN
b4.ah(new A.r(a5+(p-0.5)*3,u),new A.r(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aH(b0,B.aj,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ac()
n=new A.ch(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.aj(b1)
p.ac()
b1=B.v.j(0.22)
n=new A.as(B.T,B.Q,B.W,B.X,B.U)
n.b=B.ac
n.c=1.2
n.r=b1.gp(0)
n.d=B.bF
n.e=B.dN
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.as(B.T,B.Q,B.W,B.X,B.U)
v.b=B.ac
v.c=1.1
v.r=D.brt.gp(0)
v.d=B.bF
v.e=B.dN
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aH(b0,B.aj,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bA())
b0=A.L()
b0.r=D.bnq.gp(0)
b4.af(a9,b0)},
iit(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aEs[s]
$.T()
q=new A.as(B.T,B.Q,B.W,B.X,B.U)
q.b=B.ac
q.c=3
q.r=D.a0e.gp(0)
q.d=B.bF
q.e=B.dN
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bY(e.a6(0,K.aNK),24,36)
t=$.T()
r=A.L()
r.r=D.bwE.gp(0)
d.c1(u,r)
t=new A.aH(t.r,B.aj,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.ch(w,v-24,r,u))
t.E(new A.bA())
u=A.L()
u.r=D.aiS.gp(0)
d.af(t,u)},
ihQ(d){switch(B.o.F(d,8)){case 0:return D.b2Q
case 1:return D.b2O
case 2:return D.b2N
case 3:return D.b2M
case 4:return D.b2P
case 5:return D.b2R
case 6:return D.hNZ
default:return D.hNY}},
T2(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bqI()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.aad:j
w.as=k==null?D.F_:k
C.hIU(d,e,p,C.ihQ(m),w,s,m,l)},
hKn(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bVm:function bVm(){var _=this
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
bqI:function bqI(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
anc:function anc(){this.b=this.a=null},
aXV:function aXV(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bVe:function bVe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVf:function bVf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVg:function bVg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVh:function bVh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVi:function bVi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVj:function bVj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVk:function bVk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVl:function bVl(){},
bVd:function bVd(d){this.a=d},
agK:function agK(d,e){this.a=d
this.b=e},
aeH:function aeH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Nk(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bTY(s)
s.bDa(d)
return s},
Hk(d,e,f,g,h,i,j){var w,v=A.U(g).k("X<1>")
v=A.d_(new A.X(g,new C.fB3(f),v),v.k("M.E"))
w=A.B(v,A.a5(v).k("ci.E"))
B.d.dX(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cS(w,0,A.dA(3,"count",x.S),A.U(w).c))
B.d.dX(v,d)
return new C.lL(e,v,B.d.ce(v,f),h,i,"tree",j)},
iDr(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.hcC(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jE(c4,c0)
t=A.B(c4,A.a5(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jE(c4,c0)
r=A.B(c4,A.a5(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jE(c4,c0)
q=A.B(c4,A.a5(c4).k("ci.E"))
for(c4=w.length,v=A.U(t).k("X<1>"),s=v.k("M.E"),p=A.U(w).k("X<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.d()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.x4)g="father"
else g=h===D.oP?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.X(t,new C.hcE(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Hk(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.X(w,new C.hcF(i,m),p),o)
B.d.dX(d,c6)
c2.$2(b4,new C.lL("True or false: "+h+" is the "+g+" of "+l+".",Ah.T9,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lL("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",Ah.T9,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Gq(m)
h=a0.length
if(h!==0){a1=a0[c6.av(h)]
h=B.a.i(a1.b)
f=A.B(new A.X(t,new C.hcG(l,a0,c5),v),s)
e=a1.c
if(e===D.x4)e="son"
else e=e===D.oP?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Hk(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ex([h+1,h+2,Math.max(0,h-1)],n)
a5.X(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mJ(a5,a5.r,f.k("mJ<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.v(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Hk(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iO<1>"),a3=new A.iO(a0,1,b3,a2),a3.na(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gJ(0),a2.k("bQ<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Hk(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.asj(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.X(t,new C.hcH(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.Hk(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.d()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.d()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.B(new A.X(t,new C.hcI(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.x4
if(e)a2=b7
else a2=f===D.oP?b8:b9
if(e)f=b7
else f=f===D.oP?b8:b9
c2.$2("grand",C.Hk(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aO6(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.av(k)].b)
j=A.B(new A.X(t,new C.hcJ(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Hk(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cU3)
h=l+" was born in "+k
c2.$2("place",C.Hk(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.dah)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Hk(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Hk(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jd(b1,b3,b3)
c2.$2("year",C.Hk(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bG4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Nk(d),l=new A.e0()
l.cT(f)
w=C.iDr(m,l,g)
for(v=new A.dp(w,w.r,w.e);v.C();)J.hs8(v.d,l)
v=A.a5(w).k("cq<1>")
u=A.B(new A.cq(w,v),v.k("M.E"))
B.d.dX(u,l)
t=A.a([],x.J)
s=A.aQ(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aR(u,new C.fOJ(n,w))))break
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
if(v<e){v=A.B(D.aBi,x.df)
B.d.dX(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hJ0(o,l))}}else if(!g&&v>3){o=C.hJ0(D.aBi[l.av(14)],l)
t[t.length-1-l.av(3)]=o}return t},
hJ0(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.dX(w,e)
return new C.lL(d.a,w,B.d.ce(w,v),d.d,d.e,d.f,d.r)},
hOo(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Nk(a2),a1=new A.e0()
a1.cT(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Gq(q).length>=2)u.push(q)}B.d.dX(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Gq(n)
l=A.U(m)
k=new A.iO(m,0,5,l.k("iO<1>"))
k.na(m,0,5,l.c)
j=k.dn(0)
if(new A.O(j,new C.h30(),A.U(j).k("O<1,F>")).fC(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aTG(a0,j[i]))
w.push(new C.avh("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c6(e.c_(0,a0.anr(q),new C.h31()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cq<1>")
d=A.B(new A.cq(e,t),t.k("M.E"))
B.d.fc(d)
v=A.a([],v)
for(u=A.cS(d,0,A.dA(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bQ(u,u.gJ(0),t.k("bQ<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cH(s)
m.dX(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aTG(a0,v[r]))
w.push(new C.avh("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aS7(d){return B.d.aoV(D.aDP,new C.fKx(d))},
iti(d){return A.nK(new A.X(D.aDP,new C.fRA(d),x.av))},
bUM(d){return C.hYg(d)},
hYg(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bUM=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bUM)
case 7:r=f
q=B.a.i(d)
q=A.er(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bUM,v)},
C7(d,e){return C.hYd(d,e)},
hYd(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$C7=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$C7)
case 7:r=g
p=B.a.i(d)
o=A.er(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aE("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$C7)
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
return A.i($async$C7,v)},
bUL(d,e,f){return C.hYe(d,e,f)},
hYe(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bUL=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bUL)
case 7:r=h
q=B.a.i(d)
q=A.er(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bUL,v)},
C8(d,e,f,g){return C.hYf(d,e,f,g)},
hYf(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$C8=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$C8)
case 7:r=i
p=B.a.i(d)
o=A.er(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aE("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$C8)
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
return A.i($async$C8,v)},
bIo(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
heH(d,e,f,g){return new C.alL(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hWh(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.c9)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cS(w,0,A.dA(4,"count",x.S),u).dn(0)
B.d.u(w,A.c1(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.i.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.i.M(u)
return C.heH(w,v,B.o.D(u==null?20:u,5,60),t)},
hti(d){var w,v,u,t,s,r,q=J.a2(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aT(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.c9)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gP(q)
if(u.b(r))v.push(C.hWh(A.a1(r,t,s)))}return new C.N3(p,w,v)},
hnj(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hti(w.gP(w)))
return v},
aTG(d,e){var w=e.c===D.oP
if(d.anr(e)===0&&d.Gq(e).length!==0)return w?0:1
if(d.Gq(e).length!==0||d.asj(e)!=null)return w?2:3
return w?4:5},
hPt(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nk(a4),a3=new A.e0()
a3.cT(a5)
w=A.a([],x.dT)
v=a2.b
u=A.B(v,x.P)
B.d.dX(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.I)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.I)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.d()
j=i.h(0,k)}h=a2.Gq(m)
g=a2.asj(m)
f=a2.aO6(m)
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
if(k===D.x4)k="father"
else k=k===D.oP?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.x4)k="father"
else k=k===D.oP?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.dX(l,a3)
B.d.b_(l,new C.hd2())
d=B.a.i(m.b)
a0=A.B(new A.X(s,new C.hd3(d),o),n)
B.d.dX(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iO(a0,0,3,i.k("iO<1>"))
a1.na(a0,0,3,i.c)
B.d.u(k,a1)
B.d.dX(k,a3)
a1=C.aTG(a2,m)
i=new A.iO(l,0,4,p)
i.na(l,0,4,r)
w.push(new C.bc_(d,a1,i.dn(0),k))
if(w.length>=5)break}return w},
hGl(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.Y(d,"My ")?1:0},
hOz(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nk(a4),a3=new A.e0()
a3.cT(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Gq(q).length>=2)u.push(q)}B.d.dX(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Gq(l)
j=A.U(k)
i=new A.iO(k,0,4,j.k("iO<1>"))
i.na(k,0,4,j.c)
h=i.dn(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aR(h,new C.h3D(q))&&q.d!==j)i.push(q)}B.d.dX(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iO(i,0,k,m)
j.na(i,0,k,n)
f=j.dn(0)
j=B.a.i(l.b)
k=C.aTG(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aTG(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aTG(a2,f[g]))
w.push(new C.aaK(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lL:function lL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bTY:function bTY(d){this.b=d
this.c=$},
bTZ:function bTZ(){},
bU_:function bU_(d){this.a=d},
fB3:function fB3(d){this.a=d},
hcC:function hcC(d){this.a=d},
hcD:function hcD(){},
hcE:function hcE(d){this.a=d},
hcF:function hcF(d,e){this.a=d
this.b=e},
hcG:function hcG(d,e,f){this.a=d
this.b=e
this.c=f},
hcB:function hcB(d,e){this.a=d
this.b=e},
hcH:function hcH(d){this.a=d},
hcI:function hcI(d){this.a=d},
hcJ:function hcJ(d,e,f){this.a=d
this.b=e
this.c=f},
hcA:function hcA(d,e){this.a=d
this.b=e},
fOJ:function fOJ(d,e){this.a=d
this.b=e},
avh:function avh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h30:function h30(){},
h31:function h31(){},
zS:function zS(d,e,f){this.a=d
this.b=e
this.c=f},
fKx:function fKx(d){this.a=d},
fRA:function fRA(d){this.a=d},
alL:function alL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bOJ:function bOJ(){},
N3:function N3(d,e,f){this.a=d
this.b=e
this.c=f},
bc_:function bc_(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
hd2:function hd2(){},
hd3:function hd3(d){this.a=d},
aaK:function aaK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h3D:function h3D(d){this.a=d},
bjm:function bjm(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
agI:function agI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
al3:function al3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
al4:function al4(d,e,f,g,h){var _=this
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
_.a9$=h
_.c=_.a=null},
bMS:function bMS(d){this.a=d},
bMN:function bMN(){},
bMT:function bMT(){},
bML:function bML(){},
bMM:function bMM(){},
bMR:function bMR(d){this.a=d},
bMO:function bMO(d,e){this.a=d
this.b=e},
bMQ:function bMQ(d,e){this.a=d
this.b=e},
bMP:function bMP(d,e){this.a=d
this.b=e},
bMK:function bMK(d){this.a=d},
bew:function bew(d,e){this.b=d
this.a=e},
R6:function R6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCE:function aCE(d,e,f){this.b=d
this.c=e
this.a=f},
aB5:function aB5(d,e,f){this.a=d
this.b=e
this.c=f},
avT:function avT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
avU:function avU(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.dw$=e
_.bd$=f
_.c=_.a=null},
csP:function csP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csQ:function csQ(d){this.a=d},
csO:function csO(d){this.a=d},
csR:function csR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
csS:function csS(){},
csT:function csT(d,e){this.a=d
this.b=e},
csU:function csU(){},
csV:function csV(d){this.a=d},
csL:function csL(d){this.a=d},
csM:function csM(d,e){this.a=d
this.b=e},
csN:function csN(d,e,f){this.a=d
this.b=e
this.c=f},
csG:function csG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csI:function csI(d,e){this.a=d
this.b=e},
csJ:function csJ(d,e){this.a=d
this.b=e},
csH:function csH(d,e){this.a=d
this.b=e},
csF:function csF(){},
csK:function csK(){},
bdY:function bdY(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cSU:function cSU(){},
azR:function azR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azS:function azS(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cHN:function cHN(d){this.a=d},
cHM:function cHM(d){this.a=d},
cHV:function cHV(d,e){this.a=d
this.b=e},
cHW:function cHW(d,e){this.a=d
this.b=e},
cHX:function cHX(d){this.a=d},
cHU:function cHU(d){this.a=d},
cHY:function cHY(d){this.a=d},
cHZ:function cHZ(d,e){this.a=d
this.b=e},
cI_:function cI_(){},
cI0:function cI0(d){this.a=d},
cHP:function cHP(d){this.a=d},
cHQ:function cHQ(d,e){this.a=d
this.b=e},
cHO:function cHO(d,e){this.a=d
this.b=e},
cHR:function cHR(){},
cHS:function cHS(){},
cHT:function cHT(d,e){this.a=d
this.b=e},
aAQ:function aAQ(){},
aIb:function aIb(){},
hkW(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bt5((w-450*u)/2,(v-900*u)/2,u)},
agw:function agw(){},
fdg:function fdg(d){this.a=d},
aM1:function aM1(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fny:function fny(d){this.a=d},
an2:function an2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
an3:function an3(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qf$=f
_.Mm$=g
_.anY$=h
_.bv$=i
_.a9$=j
_.c=_.a=null},
bUK:function bUK(d){this.a=d},
bUJ:function bUJ(){},
bUH:function bUH(d){this.a=d},
bUF:function bUF(){},
bUG:function bUG(d){this.a=d},
bUC:function bUC(d,e){this.a=d
this.b=e},
bUD:function bUD(){},
bUE:function bUE(d){this.a=d},
bUI:function bUI(d,e){this.a=d
this.b=e},
bUB:function bUB(d){this.a=d},
buP:function buP(d,e){this.b=d
this.a=e},
fdh:function fdh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fdi:function fdi(d,e,f){this.a=d
this.b=e
this.c=f},
fdj:function fdj(d,e,f){this.a=d
this.b=e
this.c=f},
fdk:function fdk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fdl:function fdl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fdm:function fdm(){},
an0:function an0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
an1:function an1(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qf$=f
_.Mm$=g
_.anY$=h
_.bv$=i
_.a9$=j
_.c=_.a=null},
bUn:function bUn(){},
bUy:function bUy(d,e){this.a=d
this.b=e},
bUz:function bUz(d){this.a=d},
bUA:function bUA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUu:function bUu(){},
bUt:function bUt(d,e){this.a=d
this.b=e},
bUv:function bUv(d,e){this.a=d
this.b=e},
bUw:function bUw(){},
bUx:function bUx(d){this.a=d},
bUp:function bUp(d){this.a=d},
bUq:function bUq(d){this.a=d},
bUr:function bUr(d){this.a=d},
bUo:function bUo(d,e){this.a=d
this.b=e},
bUs:function bUs(d){this.a=d},
blc:function blc(d,e){this.b=d
this.a=e},
duY:function duY(){},
a2I:function a2I(d,e){this.a=d
this.b=e},
amX:function amX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amY:function amY(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qf$=e
_.Mm$=f
_.anY$=g
_.bv$=h
_.a9$=i
_.c=_.a=null},
bU9:function bU9(d){this.a=d},
bU8:function bU8(){},
bU7:function bU7(){},
bU1:function bU1(){},
bU2:function bU2(){},
bU6:function bU6(d,e,f){this.a=d
this.b=e
this.c=f},
bU5:function bU5(d){this.a=d},
bU3:function bU3(d,e){this.a=d
this.b=e},
bU4:function bU4(d){this.a=d},
bkC:function bkC(d,e){this.b=d
this.a=e},
aCH:function aCH(){},
bi9:function bi9(){},
aCJ:function aCJ(){},
bia:function bia(){},
aCK:function aCK(){},
bib:function bib(){},
uG(d,e,f,g,h){var w,v,u=null,t=A.n(18),s=A.a([],x.V)
s.push(new A.aa(0,B.H,f.j(0.4),B.hR,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.W(g,h,u,u,u,20),B.aa],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.p(u,A.A(v,B.l,u,B.e,B.M,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.m),u,u,u,u,B.Pf,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hu6(d,e,f,g,h,i,j){return new C.amZ(i,h,d,j,e,f,g,null)},
a7d:function a7d(d,e){this.c=d
this.a=e},
bkJ:function bkJ(d){this.a=d},
tP:function tP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bU0:function bU0(d){this.a=d},
II:function II(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
WP:function WP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnx:function bnx(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e5u:function e5u(d,e){this.a=d
this.b=e},
e5v:function e5v(d){this.a=d},
e5w:function e5w(d,e){this.a=d
this.b=e},
e5s:function e5s(d){this.a=d},
e5t:function e5t(d){this.a=d},
e5r:function e5r(d){this.a=d},
e5p:function e5p(d){this.a=d},
e5q:function e5q(d){this.a=d},
e5o:function e5o(d,e){this.a=d
this.b=e},
e5x:function e5x(d){this.a=d},
e5y:function e5y(d,e){this.a=d
this.b=e},
e5z:function e5z(d,e){this.a=d
this.b=e},
e5A:function e5A(d,e){this.a=d
this.b=e},
e5D:function e5D(d,e){this.a=d
this.b=e},
e5E:function e5E(d,e){this.a=d
this.b=e},
e5F:function e5F(d,e){this.a=d
this.b=e},
e5G:function e5G(d,e){this.a=d
this.b=e},
e5H:function e5H(d,e){this.a=d
this.b=e},
e5I:function e5I(d,e,f){this.a=d
this.b=e
this.c=f},
e5J:function e5J(d,e){this.a=d
this.b=e},
e5K:function e5K(d,e){this.a=d
this.b=e},
e5B:function e5B(d){this.a=d},
e5C:function e5C(d){this.a=d},
a0z:function a0z(d,e){this.a=d
this.b=e},
amZ:function amZ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
an_:function an_(d){var _=this
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
bUl:function bUl(d){this.a=d},
bUm:function bUm(d){this.a=d},
bUk:function bUk(d){this.a=d},
bUb:function bUb(d){this.a=d},
bUc:function bUc(d){this.a=d},
bUa:function bUa(d){this.a=d},
bUh:function bUh(d,e,f){this.a=d
this.b=e
this.c=f},
bUi:function bUi(d){this.a=d},
bUe:function bUe(d,e){this.a=d
this.b=e},
bUf:function bUf(d,e,f){this.a=d
this.b=e
this.c=f},
bUj:function bUj(){},
bUg:function bUg(d,e){this.a=d
this.b=e},
bUd:function bUd(d){this.a=d},
Us:function Us(d,e){this.c=d
this.a=e},
amW:function amW(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bTM:function bTM(d){this.a=d},
bTN:function bTN(d){this.a=d},
bTX:function bTX(){},
bTW:function bTW(d,e,f){this.a=d
this.b=e
this.c=f},
bTR:function bTR(d,e){this.a=d
this.b=e},
bTQ:function bTQ(d,e){this.a=d
this.b=e},
bTS:function bTS(d){this.a=d},
bTT:function bTT(d,e){this.a=d
this.b=e},
bTU:function bTU(d,e){this.a=d
this.b=e},
bTP:function bTP(d,e){this.a=d
this.b=e},
bTV:function bTV(d,e,f){this.a=d
this.b=e
this.c=f},
bTO:function bTO(d,e){this.a=d
this.b=e},
irL(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ajP(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.V(Date.now(),0,!1))
s=new C.fO9(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("X<1>"),q=q.k("cM<1,m>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zD)m.push(l===D.x4?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.jd(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jd(h,a2,a2)-A.jd(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.B(new A.cM(new A.X(a4,new C.fO7(u,f),p),new C.fO8(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aL(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aL(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aw(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
irM(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ajP(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fOe(v,e)
q=new C.fOc(v)
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
d=A.d_(new A.b9(p,d),d.k("M.E"))
n=A.B(d,A.a5(d).k("ci.E"))
B.d.fc(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eI(l,new C.fOd(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aL(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
icF(d,e,f,g){var w,v,u=C.irN(d,e)
if(u<=0||f.length<=u)return new A.aga(!1,D.Ei,f)
if(g.q(0,e.a))return new A.aga(!1,D.Ei,f)
w=A.U(f).c
v=A.cS(f,0,A.dA(u,"count",x.S),w).dn(0)
return new A.aga(!0,A.cS(f,u,null,w).dn(0),v)},
icG(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ajP(d3),d2=d1.length
if(d2===0)return D.hKZ
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c_(0,t.a,new C.dkb(t))}s=new C.dks(v)
d2=x.dy
r=A.S(w,d2)
q=new C.dkk(r)
for(p=new A.dp(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dkj(r)
l=A.S(w,x.do)
for(p=new A.dp(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c6(l.c_(0,k,new C.dkc()),o)}h=new C.dki(s)
g=new C.dkh(l,r)
p=v.$ti.k("b9<2>")
o=p.k("X<M.E>")
f=A.B(new A.X(new A.b9(v,p),new C.dkd(h),o),o.k("M.E"))
e=f.length===0?new A.b9(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.I)(f),++u){t=f[u]
a0=g.$2(t.a,A.aQ(w))
if(a0>d){d=a0
e=t}}a1=A.aQ(w)
p=x.S
a2=A.S(w,p)
a3=A.S(w,w)
a4=A.S(w,d2)
d2=x.i
a5=A.S(w,d2)
a6=A.S(w,x.d9)
a7=A.S(w,d2)
a8=A.a([],x.s)
a9=new C.dkq(new C.dkm(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dp(v,v.r,v.e),j=a2.gamX(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ex([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nK(J.dL(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.dO)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.dka(a2,new C.dkr(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dp(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cq<1>")
d2=A.B(new A.cq(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GT(o,new A.r(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.L8(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cq<1>")
d2=A.B(new A.cq(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bP(0,new C.dke(c6,b4))
for(d2=new A.cd(a4,a4.$ti.k("cd<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eI(j,new C.dkf(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b_(o,new C.dkg())
c6.push(new C.aLW(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bif(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hJK(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(d)
return w==null?null:w.b[1]},
hDp(d,e,f,g,h,i,j,k,l,m,n){return new C.a0N(k,f,j,e,l,n,m,d,g,h,i,null)},
aEI(d,e,f,g,h,i,j){return new C.bm2(i,d,e,f,j,h,g,null)},
as4:function as4(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGg:function aGg(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e79:function e79(d){this.a=d},
e78:function e78(d){this.a=d},
e7b:function e7b(d,e){this.a=d
this.b=e},
e7c:function e7c(d,e){this.a=d
this.b=e},
e7d:function e7d(d){this.a=d},
e77:function e77(d,e){this.a=d
this.b=e},
e7a:function e7a(d){this.a=d},
e7f:function e7f(d){this.a=d},
e7e:function e7e(d,e){this.a=d
this.b=e},
arZ:function arZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGd:function aGd(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e6A:function e6A(d){this.a=d},
e6y:function e6y(d){this.a=d},
e6z:function e6z(d){this.a=d},
e6B:function e6B(d,e){this.a=d
this.b=e},
e6v:function e6v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5X:function e5X(d){this.a=d},
e5Y:function e5Y(d,e){this.a=d
this.b=e},
e6e:function e6e(d){this.a=d},
e6c:function e6c(d){this.a=d},
e6d:function e6d(d,e){this.a=d
this.b=e},
e6f:function e6f(d){this.a=d},
e6g:function e6g(d,e){this.a=d
this.b=e},
e6u:function e6u(d,e){this.a=d
this.b=e},
e6b:function e6b(d){this.a=d},
e6a:function e6a(d){this.a=d},
e69:function e69(d,e){this.a=d
this.b=e},
e6r:function e6r(){},
e6s:function e6s(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e6q:function e6q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e6k:function e6k(d){this.a=d},
e6l:function e6l(d,e,f){this.a=d
this.b=e
this.c=f},
e6j:function e6j(d,e){this.a=d
this.b=e},
e6m:function e6m(d,e){this.a=d
this.b=e},
e6h:function e6h(d,e){this.a=d
this.b=e},
e6i:function e6i(){},
e6n:function e6n(d,e){this.a=d
this.b=e},
e6o:function e6o(d){this.a=d},
e6p:function e6p(d,e){this.a=d
this.b=e},
e6t:function e6t(d,e){this.a=d
this.b=e},
e5L:function e5L(d,e){this.a=d
this.b=e},
e5M:function e5M(d,e){this.a=d
this.b=e},
e6D:function e6D(d,e,f){this.a=d
this.b=e
this.c=f},
e6x:function e6x(d,e,f){this.a=d
this.b=e
this.c=f},
e6w:function e6w(d){this.a=d},
e5N:function e5N(d){this.a=d},
e5O:function e5O(d){this.a=d},
e5P:function e5P(){},
e5Q:function e5Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5U:function e5U(d,e){this.a=d
this.b=e},
e5T:function e5T(d,e){this.a=d
this.b=e},
e5S:function e5S(d){this.a=d},
e5V:function e5V(d,e){this.a=d
this.b=e},
e5R:function e5R(d){this.a=d},
e6C:function e6C(d){this.a=d},
e66:function e66(){},
e67:function e67(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e65:function e65(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e61:function e61(d,e,f){this.a=d
this.b=e
this.c=f},
e60:function e60(d,e,f){this.a=d
this.b=e
this.c=f},
e5Z:function e5Z(d,e){this.a=d
this.b=e},
e62:function e62(d){this.a=d},
e63:function e63(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6_:function e6_(d,e){this.a=d
this.b=e},
e64:function e64(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e68:function e68(d,e){this.a=d
this.b=e},
e6K:function e6K(){},
e6L:function e6L(d,e){this.a=d
this.b=e},
e6M:function e6M(d){this.a=d},
e6N:function e6N(d,e){this.a=d
this.b=e},
e6G:function e6G(d){this.a=d},
e6E:function e6E(d,e){this.a=d
this.b=e},
e6H:function e6H(d,e){this.a=d
this.b=e},
e6I:function e6I(d,e){this.a=d
this.b=e},
e6J:function e6J(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e6O:function e6O(d){this.a=d},
e6F:function e6F(d){this.a=d},
e5W:function e5W(d){this.a=d},
bid:function bid(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dk8:function dk8(d){this.a=d},
dk7:function dk7(d,e){this.a=d
this.b=e},
dk9:function dk9(d){this.a=d},
dk6:function dk6(d,e){this.a=d
this.b=e},
fO9:function fO9(d,e){this.a=d
this.b=e},
fOa:function fOa(d){this.a=d},
fOb:function fOb(){},
fO7:function fO7(d,e){this.a=d
this.b=e},
fO8:function fO8(){},
fOe:function fOe(d,e){this.a=d
this.b=e},
fOf:function fOf(d){this.a=d},
fOg:function fOg(){},
fOc:function fOc(d){this.a=d},
fOd:function fOd(d,e){this.a=d
this.b=e},
L8:function L8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GT:function GT(d,e){this.a=d
this.b=e},
bif:function bif(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dkb:function dkb(d){this.a=d},
dks:function dks(d){this.a=d},
dkk:function dkk(d){this.a=d},
dkl:function dkl(){},
dkj:function dkj(d){this.a=d},
dkc:function dkc(){},
dki:function dki(d){this.a=d},
dkh:function dkh(d,e){this.a=d
this.b=e},
dkd:function dkd(d){this.a=d},
dkm:function dkm(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dkn:function dkn(d){this.a=d},
dko:function dko(d){this.a=d},
dkp:function dkp(){},
dkq:function dkq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dkr:function dkr(){},
dka:function dka(d,e,f,g,h,i,j,k,l,m){var _=this
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
dke:function dke(d,e){this.a=d
this.b=e},
dkf:function dkf(d){this.a=d},
dkg:function dkg(){},
aLW:function aLW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
big:function big(d,e){this.b=d
this.a=e},
dkt:function dkt(){},
dku:function dku(d){this.a=d},
dkv:function dkv(d){this.a=d},
dkw:function dkw(){},
bm3:function bm3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhg:function bhg(d,e){this.b=d
this.a=e},
bAc:function bAc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ft9:function ft9(d){this.a=d},
bpq:function bpq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f31:function f31(d){this.a=d},
f30:function f30(d,e){this.a=d
this.b=e},
a0N:function a0N(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aEG:function aEG(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dAJ:function dAJ(d,e){this.a=d
this.b=e},
dAI:function dAI(d){this.a=d},
dAG:function dAG(d){this.a=d},
dAH:function dAH(d){this.a=d},
dAS:function dAS(d){this.a=d},
dAT:function dAT(d){this.a=d},
dAR:function dAR(d,e){this.a=d
this.b=e},
dAU:function dAU(){},
dAX:function dAX(d){this.a=d},
dAQ:function dAQ(d,e){this.a=d
this.b=e},
dAW:function dAW(){},
dAY:function dAY(d){this.a=d},
dAP:function dAP(d,e){this.a=d
this.b=e},
dAZ:function dAZ(d){this.a=d},
dAO:function dAO(d){this.a=d},
dB_:function dB_(d){this.a=d},
dAN:function dAN(d){this.a=d},
dB0:function dB0(d){this.a=d},
dAM:function dAM(d){this.a=d},
dB1:function dB1(d){this.a=d},
dAL:function dAL(d){this.a=d},
dB2:function dB2(d){this.a=d},
dAK:function dAK(d,e){this.a=d
this.b=e},
dAV:function dAV(d){this.a=d},
af3:function af3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bm2:function bm2(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
af2:function af2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bm1:function bm1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dB3:function dB3(d){this.a=d},
dB4:function dB4(d,e){this.a=d
this.b=e},
aEH:function aEH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKY:function aKY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
af4:function af4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dBd:function dBd(d){this.a=d},
GP:function GP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hy9(d){var w=d.cH,v=x.N
return w.iW(w,new C.che(),v,v)},
i3X(d){var w=d.bF
if(w>=0)return w
return 5},
hyb(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hy9(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
hya(d,e){var w=C.hyb(d,e)
if(w!=null&&w.cd(new A.V(Date.now(),0,!1)))return!0
return!1},
i3Y(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.hy9(d),w,w)
u=C.hyb(d,e)
t=u!=null&&u.cd(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bM(A.dv(30,0,0,0,0,0).a).ab().ag())
d.cH=v},
b2C(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b2C=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lT(t,B.Kj),$async$b2C)
case 3:if(l){u=!0
w=1
break}u=A.lt(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Kj,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2C,v)},
che:function che(){},
i3V(){var w,v=$.oH(),u=J.e2(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.hl(u)},
JD(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$JD=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$JD)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f7("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$JD)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
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
return A.i($async$JD,v)},
a8X(d){return C.i3W(d)},
i3W(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8X=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$a8X)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i0("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.z),!1,!1,B.cT,null),$async$a8X)
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
return A.i($async$a8X,v)},
chd(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$chd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.JD(),$async$chd)
case 3:t=m.il(f),t=t.gae(t),s=x.f
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
return A.i($async$chd,v)},
OE(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$OE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.chd(d),$async$OE)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.JD(),$async$OE)
case 6:s=f
r=J.a2(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dH(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).ab().ag())
r.n(s,t,o)
w=9
return A.b(C.a8X(s),$async$OE)
case 9:case 8:u=t
w=1
break
case 5:n=C.i3V()
w=10
return A.b(C.JD(),$async$OE)
case 10:s=f
J.aK(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.K))
w=11
return A.b(C.a8X(s),$async$OE)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$OE,v)},
b2B(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b2B=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.JD(),$async$b2B)
case 3:t=f
for(s=J.du(t),r=s.gdS(t),r=r.dn(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.X(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8X(t),$async$b2B)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b2B,v)},
a8Y(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8Y=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.as3(d,e),$async$a8Y)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.OE(d),$async$a8Y)
case 7:w=4
break
case 5:w=8
return A.b(C.b2B(d),$async$a8Y)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8Y,v)},
arY(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$arY=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.as3(f,e),$async$arY)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.cc(),$async$arY)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.JD(),$async$arY)
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
return A.i($async$arY,v)},
b2A(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b2A=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.cc(),$async$b2A)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.JD(),$async$b2A)
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
return A.i($async$b2A,v)},
i3Z(){var w,v=$.oH(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.hl(u)},
as0(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$as0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$as0)
case 3:if(!g){u=null
w=1
break}t=C.i3Z()
w=4
return A.b(A.WQ(),$async$as0)
case 4:s=g
r=B.dZ.aK(B.V.au(d.f4(),null))
r=B.cN.gcp().aK(r)
q=e?999:2
J.aK(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.K))
w=5
return A.b(A.a8Z(s),$async$as0)
case 5:p=e?999:2
u=new A.a1Y("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as0,v)},
as_(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$as_=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.WQ(),$async$as_)
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
return A.b(C.b2A(J.k(l==null?"":l),j),$async$as_)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cb.cG(0,B.cD.aK(t))
s=C.hyc(r)}catch(f){q=A.ac(f)
$.am.$1("[family tree qr stash] decode: "+A.v(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.X(p,g)
else{m=x.N
l=x.z
l=A.dH(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().ag())
o.n(p,g,l)}w=5
return A.b(A.a8Z(p),$async$as_)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as_,v)},
hyc(d){var w,v,u,t,s=null
try{w=B.V.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.i40(A.a1(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.am.$1("[family tree sync] parse: "+A.v(v))
return s}},
hgQ(d){var w=0,v=A.j(x.m),u,t,s
var $async$hgQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.Y(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.as_(t[1])
w=1
break}u=null
w=1
break}u=C.hyc(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hgQ,v)},
i40(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.cZ(v,x.f)
u=A.cE(u,new C.chg(),u.$ti.k("M.E"),x.k)
t=A.a5(u).k("X<M.E>")
s=A.B(new A.X(u,new C.chh(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.il(p),t=t.gae(t),o=x.B;t.C();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.cZ(l,u)
n=A.cE(n,new C.chi(),n.$ti.k("M.E"),o)
k=A.a5(n).k("X<M.E>")
j=A.B(new A.X(n,new C.chj(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.as1(h,w,s,r,q)},
as3(d,e){var w=0,v=A.j(x.y),u,t
var $async$as3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(T.Ou(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.BC(d),$async$as3)
case 3:u=t.cL(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as3,v)},
chp(d){var w=0,v=A.j(x.bC),u,t,s
var $async$chp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.BC(d),$async$chp)
case 3:t=s.b8(f,new C.chq(),x.cs)
t=A.B(t,t.$ti.k("ak.E"))
B.d.b_(t,new C.chr())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$chp,v)},
WR(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$WR=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.as3(e,d),$async$WR)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.OE(e),$async$WR)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.BC(e),$async$WR)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dL(r,new C.chn(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a2(r)
if(t.gar(r)){u=null
w=1
break}t=t.dP(r,new C.cho(e),x.k)
r=A.B(t,t.$ti.k("ak.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LZ(e,o),$async$WR)
case 14:n=i
if(J.cL(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.as1(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WR,v)},
b2F(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b2F=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WR(d,e,f,g),$async$b2F)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hz(A.L4(q.f4(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2F,v)},
b2E(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b2E=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WR(d,e,f,g),$async$b2E)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.as0(r,f),$async$b2E)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aIX(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2E,v)},
WS(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WS=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hgQ(a0),$async$WS)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.Y(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.arY(g.a,d,e,f,s,r),$async$WS)
case 6:if(!a2){if(r)throw A.Y(A.bb("This backup expired or the sender's tree is no longer available."))
throw A.Y(A.bb("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bFJ(e,j),$async$WS)
case 12:case 11:w=13
return A.b(C.ajx(e,j,s),$async$WS)
case 13:h=n.h(0,i)
w=h!=null&&J.cL(h)?14:15
break
case 14:w=16
return A.b(C.BM(e,i,h),$async$WS)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.btb(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WS,v)},
as1:function as1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
chl:function chl(){},
chm:function chm(){},
chk:function chk(){},
chg:function chg(){},
chh:function chh(){},
chi:function chi(){},
chj:function chj(){},
chq:function chq(){},
chr:function chr(){},
chn:function chn(d){this.a=d},
cho:function cho(d){this.a=d},
hq9(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f6(null,x.H)
return A.hL(d,new C.as2(w,e,g,i,f,h,null),!0,null,x.H)},
dk5(d,e,f,g,h,i,j,k){return new C.bic(i,e,k,j,g,f,h,d,null)},
as2:function as2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGf:function aGf(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e6X:function e6X(d){this.a=d},
e6Y:function e6Y(d,e,f){this.a=d
this.b=e
this.c=f},
e71:function e71(d,e){this.a=d
this.b=e},
e72:function e72(d){this.a=d},
e6U:function e6U(d){this.a=d},
e6V:function e6V(d,e){this.a=d
this.b=e},
e6W:function e6W(d,e){this.a=d
this.b=e},
e70:function e70(d){this.a=d},
e7_:function e7_(d,e){this.a=d
this.b=e},
e6Z:function e6Z(){},
e74:function e74(d){this.a=d},
e75:function e75(d,e){this.a=d
this.b=e},
e73:function e73(d,e){this.a=d
this.b=e},
dkx:function dkx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bie:function bie(d,e,f){this.d=d
this.e=e
this.a=f},
aej:function aej(d,e,f){this.c=d
this.d=e
this.a=f},
bic:function bic(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bih:function bih(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a16:function a16(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGe:function aGe(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e6P:function e6P(d,e){this.a=d
this.b=e},
e6Q:function e6Q(d){this.a=d},
e6R:function e6R(d){this.a=d},
e6S:function e6S(d){this.a=d},
e6T:function e6T(d){this.a=d},
a17:function a17(d){this.a=d},
bny:function bny(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e76:function e76(d,e){this.a=d
this.b=e},
b18(d,e){return new C.b17(d,e,null)},
b17:function b17(d,e,f){this.c=d
this.d=e
this.a=f},
iug(d){if(!(d!=null&&B.a.Y(d,"ngmy:thumb:")))return null
return B.a.aY(d,11)},
iBY(d){return A.bU(B.L,null,new C.h59(new C.ur(A.Q(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hAf(d,e){return new C.av5(e,d,null)},
aTA(d,e,f,g,h,i,j){var w=C.iug(i)
if(w!=null)return A.bw(e,new A.a6(j,f,new C.a8_(w,!0,null),null),B.aq)
return O.aSV(e,B.bX,f,g,h,i,j)},
md:function md(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a8_:function a8_(d,e,f){this.c=d
this.d=e
this.a=f},
bnc:function bnc(d,e){var _=this
_.e=_.d=$
_.dw$=d
_.bd$=e
_.c=_.a=null},
dSZ:function dSZ(d){this.a=d},
dT_:function dT_(){},
dT0:function dT0(d,e){this.a=d
this.b=e},
bnb:function bnb(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h59:function h59(d){this.a=d},
h58:function h58(d,e){this.a=d
this.b=e},
h57:function h57(d,e){this.a=d
this.b=e},
h56:function h56(d,e){this.a=d
this.b=e},
av5:function av5(d,e,f){this.c=d
this.d=e
this.a=f},
cr6:function cr6(d,e){this.a=d
this.b=e},
aOo:function aOo(){},
iBJ(d){var w=null
return A.ce(w,w,!0,w,new C.h4x(),d,w,!0,!0,x.e2)},
iCX(d,e,f,g,h){var w=null
return A.ce(w,w,!0,w,new C.hck(h,g,f,e),d,w,!0,!0,x.N)},
iBL(d,e){var w=null
return A.ce(w,w,!0,w,new C.h4B(e),d,w,!0,!0,x.dY)},
iBK(d){var w=null
return A.ce(w,w,!0,w,new C.h4A(),d,w,!0,!0,x.c5)},
aWy:function aWy(d,e){this.a=d
this.b=e},
aWx:function aWx(d){this.a=d},
aUz:function aUz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h4x:function h4x(){},
hck:function hck(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h4B:function h4B(d){this.a=d},
h4A:function h4A(){},
a_K:function a_K(d,e){this.c=d
this.a=e},
aBo:function aBo(){var _=this
_.d=$
_.c=_.a=_.e=null},
dbB:function dbB(d){this.a=d},
dbC:function dbC(d){this.a=d},
dbA:function dbA(d,e){this.a=d
this.b=e},
dbD:function dbD(d){this.a=d},
dbE:function dbE(d){this.a=d},
a_J:function a_J(d){this.a=d},
aBn:function aBn(){this.d=$
this.c=this.a=null},
dbx:function dbx(d){this.a=d},
dby:function dby(d){this.a=d},
dbz:function dbz(d){this.a=d},
a_e:function a_e(d){this.a=d},
aA4:function aA4(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cJs:function cJs(){},
cJy:function cJy(d){this.a=d},
cJz:function cJz(d){this.a=d},
cJA:function cJA(d){this.a=d},
cJx:function cJx(){},
cJB:function cJB(d){this.a=d},
cJC:function cJC(d){this.a=d},
cJw:function cJw(){},
cJD:function cJD(d,e){this.a=d
this.b=e},
cJv:function cJv(d,e){this.a=d
this.b=e},
cJt:function cJt(d,e){this.a=d
this.b=e},
cJE:function cJE(d){this.a=d},
cJu:function cJu(){},
cJF:function cJF(d){this.a=d},
a2U:function a2U(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bA4:function bA4(){this.d=$
this.c=this.a=null},
fsF:function fsF(d,e){this.a=d
this.b=e},
fsG:function fsG(d){this.a=d},
fsH:function fsH(d,e){this.a=d
this.b=e},
adj:function adj(d,e){this.a=d
this.b=e},
GE:function GE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bA2:function bA2(d,e){var _=this
_.d=$
_.bv$=d
_.a9$=e
_.c=_.a=null},
fsD:function fsD(d,e){this.a=d
this.b=e},
azY:function azY(d,e){this.c=d
this.a=e},
bA3:function bA3(d,e){var _=this
_.d=$
_.bv$=d
_.a9$=e
_.c=_.a=null},
fsE:function fsE(d){this.a=d},
bA1:function bA1(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aQv:function aQv(){},
aQw:function aQw(){},
bHP(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.bc(u),s=B.o.D(B.i.R((u-t)*100),0,99),r=d<0?"-":"",q=A.o4(B.o.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.h2O(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.d1(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.d1(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.d1(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b0(B.o.v(s),2,"0")
n.push(A.d1(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.ZD(A.d1(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aTc(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aTc=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.ig().l6(85,1280,B.eZ),$async$aTc)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fu(),$async$aTc)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hAe()
w=9
return A.b(C.cr5(q,r),$async$aTc)
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
return A.i($async$aTc,v)},
aTy(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aTy=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.Y(g,"ngmy:ws-thumb:")
if(i){u=C.cr2(g)
w=1
break}if(!B.a.Y(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cD.aK(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.HA(p,!0,null,o).de(0,B.fX),$async$aTy)
case 9:n=a1
w=10
return A.b(n.la(),$async$aTy)
case 10:m=a1
w=11
return A.b(m.b.ho(B.ho),$async$aTy)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eR(B.dK.gaS(l))
k="data:image/png;base64,"+B.cN.gcp().aK(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.i.R(o*0.72)
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
return A.i($async$aTy,v)},
h2O:function h2O(){},
ur:function ur(d){this.a=d},
av4:function av4(d,e,f){this.c=d
this.d=e
this.a=f},
aHN:function aHN(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
f0b:function f0b(d,e){this.a=d
this.b=e},
f02:function f02(d){this.a=d},
f03:function f03(d){this.a=d},
f09:function f09(d,e){this.a=d
this.b=e},
f08:function f08(d,e){this.a=d
this.b=e},
f05:function f05(d,e){this.a=d
this.b=e},
f04:function f04(d,e){this.a=d
this.b=e},
f06:function f06(d){this.a=d},
f07:function f07(d,e){this.a=d
this.b=e},
f0a:function f0a(d,e){this.a=d
this.b=e},
f_Y:function f_Y(d,e){this.a=d
this.b=e},
f01:function f01(d){this.a=d},
f00:function f00(d,e){this.a=d
this.b=e},
f0_:function f0_(d){this.a=d},
f0c:function f0c(d,e){this.a=d
this.b=e},
f0d:function f0d(d,e){this.a=d
this.b=e},
f_Z:function f_Z(d,e){this.a=d
this.b=e},
hO_(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.X(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).ab().ag(),"project",v],x.N,x.z)},
h2P(d,e,f){var w=0,v=A.j(x.N),u
var $async$h2P=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.V.au(C.hO_(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h2P,v)},
bHR(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bHR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.h2P(!0,d,e),$async$bHR)
case 4:w=3
return A.b(r.av2(g,d,e.a),$async$bHR)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dZ.aK(B.V.au(C.hO_(d,e,null),null))
u="NGMY_WS:"+B.kU.gcp().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHR,v)},
hEQ(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hpJ(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d8(s,"NGMYWSSYNC2|"))return!0
if(J.d8(s,"NGMY_WS:"))return!0
if(J.eD(s,t))return!0
if(J.d8(s,"{"))try{w=B.V.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
izI(d){var w,v,u,t=C.hEQ(d)
if(t==null)return null
if(C.hpJ(t))return t
w=B.a.ce(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aY(t,w))
if(C.hpJ(v))return v}u=B.a.ce(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aY(t,u))
if(C.hpJ(v))return v}return null},
hpI(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d8(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d8(q,"NGMY_WS:")){v=B.cb.cG(0,B.cD.aK(J.ne(q,8)))
w=t.a(B.V.aP(0,v,r))}else w=t.a(B.V.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hjv(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bHQ(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bHQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.Y(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.av1(t[1]),$async$bHQ)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hpI(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hpI(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHQ,v)},
hpH(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lY(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bHj(){var w=0,v=A.j(x.o),u,t
var $async$bHj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HJ(),$async$bHj)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hpI(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHj,v)},
hPc(d,e,f,g){return A.bU(B.L,null,new C.hc7(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
hc7:function hc7(d,e,f){this.a=d
this.b=e
this.c=f},
afp:function afp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f0f:function f0f(d,e){this.a=d
this.b=e},
f0g:function f0g(d,e){this.a=d
this.b=e},
f0h:function f0h(d,e){this.a=d
this.b=e},
f0i:function f0i(d,e){this.a=d
this.b=e},
f0e:function f0e(d){this.a=d},
auZ:function auZ(d,e,f){this.c=d
this.d=e
this.a=f},
boW:function boW(){var _=this
_.c=_.a=_.e=_.d=null},
f_T:function f_T(d,e){this.a=d
this.b=e},
f_U:function f_U(d){this.a=d},
f_V:function f_V(d){this.a=d},
av3:function av3(d){this.a=d},
aHM:function aHM(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
f_X:function f_X(d){this.a=d},
f_W:function f_W(d){this.a=d},
i7l(d,e,f,g,h){return new C.Pl(h,g,d,e,f,null)},
aMJ:function aMJ(d,e){this.a=d
this.b=e},
Pl:function Pl(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHO:function aHO(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
f0F:function f0F(){},
f0B:function f0B(d,e){this.a=d
this.b=e},
f0C:function f0C(d){this.a=d},
f0m:function f0m(d){this.a=d},
f0k:function f0k(d){this.a=d},
f0l:function f0l(d){this.a=d},
f0v:function f0v(d,e){this.a=d
this.b=e},
f0s:function f0s(d,e){this.a=d
this.b=e},
f0t:function f0t(d,e){this.a=d
this.b=e},
f0u:function f0u(d,e,f){this.a=d
this.b=e
this.c=f},
f0q:function f0q(d,e,f){this.a=d
this.b=e
this.c=f},
f0o:function f0o(d){this.a=d},
f0p:function f0p(d){this.a=d},
f0r:function f0r(d){this.a=d},
f0I:function f0I(d){this.a=d},
f0H:function f0H(d){this.a=d},
f0J:function f0J(d){this.a=d},
f0G:function f0G(d){this.a=d},
f0j:function f0j(d){this.a=d},
f0n:function f0n(d,e){this.a=d
this.b=e},
f0E:function f0E(d,e){this.a=d
this.b=e},
f0D:function f0D(d,e){this.a=d
this.b=e},
f0y:function f0y(d){this.a=d},
f0z:function f0z(d){this.a=d},
f0A:function f0A(d,e){this.a=d
this.b=e},
f0x:function f0x(d,e){this.a=d
this.b=e},
f0w:function f0w(d,e,f){this.a=d
this.b=e
this.c=f},
bBQ:function bBQ(){},
Bp(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahZ(d,e,f){return C.inD(d,e,f)},
inD(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahZ=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aE("String",e,f),$async$ahZ)
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
return A.i($async$ahZ,v)},
ahY(d,e){return C.inC(d,e)},
inC(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahY=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.X(0,e),$async$ahY)
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
return A.i($async$ahY,v)},
ims(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.U4(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bEC(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bEC=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b5U(q),$async$bEC)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aTy(q,!1),$async$bEC)
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
return A.i($async$bEC,v)},
hVx(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rG(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rG(p,J.k(u==null?"":u),1,o,q)},
hjv(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.cZ(s,x.f)
w=A.cE(w,new C.cIL(),w.$ti.k("M.E"),x.Q)
v=A.a5(w).k("X<M.E>")
r=A.B(new A.X(w,new C.cIM(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lY(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
irH(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.x4
case"female":case"f":return D.oP
default:return D.zD}},
hKi(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hu7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.irH(v==null?j:J.k(v))
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
return new C.ie(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
irJ(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.PD
case"viewer":return D.l7
default:return D.va}},
irK(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
HB(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aSc(d,e){return B.a.i(e.toLowerCase())===C.HB(d,e)&&d.y!==D.l7},
uH(d,e){var w,v=d.y
if(v===D.l7)return!1
w=B.a.i(e.toLowerCase())
if(w===C.HB(d,e))return!0
if(v===D.PD)return!0
v=d.e
return new A.O(v,A.hpP(),A.U(v).k("O<1,m>")).q(0,w)},
ir3(d){return J.dL(d,new C.fN1()).gJ(0)},
hcT(d){var w=0,v=A.j(x.y),u,t
var $async$hcT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.BC(d),$async$hcT)
case 3:u=t.rB(f,new C.hcU(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hcT,v)},
bFJ(d,e){var w=0,v=A.j(x.H),u,t
var $async$bFJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BC(d),$async$bFJ)
case 3:t=g
if(J.rB(t,new C.fKw(e))){w=1
break}if(C.ir3(t)>=2)throw A.Y(A.bb("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bFJ,v)},
an5(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.cZ(h,x.f)
w=A.cE(w,new C.bUN(),w.$ti.k("M.E"),x.P)
v=A.a5(w).k("X<M.E>")
g=A.B(new A.X(w,new C.bUO(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bUP(),x.N)
t=A.B(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bi(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aJ(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.i.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.irJ(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.c9)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.lb(w,v,s,!r,t,g,q,p,o,n,m)},
hKx(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aw(v,0,8)},
DU(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.T1(d),$async$DU)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aB(),$async$DU)
case 4:t=f
w=5
return A.b(t.a7W(0),$async$DU)
case 5:w=6
return A.b(C.fAB(t,l),$async$DU)
case 6:s=f
if(J.cL(s)){u=s
w=1
break}r=B.a.gZ(B.a.i(l.toLowerCase()))
q=t.a
p=J.a2(q)
o=A.aW(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hFs(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.ps(l,n),$async$DU)
case 11:u=n
w=1
break
case 10:case 8:m=A.aW(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gZ(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hFs(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.ps(l,n),$async$DU)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DU,v)},
fAB(d,e){return C.ijN(d,e)},
ijN(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fAB=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a2(a3)
a5=A.aW(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bp(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.V.aP(0,a5,null)
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
break}m=A.aW(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bp(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.V.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hjv(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aW(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bp(a9)+"_"+n))
i=C.ims(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.Y(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b5U(h),$async$fAB)
case 17:g=b1
if(g!=null){i=i.U4(g)
p=!0}case 16:J.c6(q,i)
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
case 8:J.Ta(q,new C.fAC())
if(p&&J.ad(q)!==0)C.ps(a9,q)
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
return A.i($async$fAB,v)},
bGc(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bGc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.T1(d),$async$bGc)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DU(r),$async$bGc)
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
return A.i($async$bGc,v)},
hFs(d){var w,v,u,t
try{w=B.V.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.cZ(w,x.f)
v=A.cE(v,new C.fw8(),v.$ti.k("M.E"),x.fA)
u=A.a5(v).k("X<M.E>")
v=A.B(new A.X(v,new C.fw9(),u),u.k("M.E"))
B.d.b_(v,new C.fwa())
return v}catch(t){v=A.a([],x.D)
return v}},
ps(d,e){return C.iBy(d,e)},
iBy(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$ps=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.T1(b2),$async$ps)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aB(),$async$ps)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bp(a8)
p=A.aW(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.V.aP(0,p,null)),new C.h4l(),a2).fC(0)
a2=J.b8(b3,new C.h4m(),a2).c0(0,new C.h4n())
n=A.d_(a2,a2.$ti.k("M.E"))
a2=o,a2=A.e3(a2,a2.r,A.a5(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eD(n,m)?17:18
break
case 17:a5=C.Bp(a8)
l=A.aW(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.aai(l),$async$ps)
case 19:t=21
a5=C.Bp(a8)
k=A.aW(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.V.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.aai(a5==null?null:J.k(a5)),$async$ps)
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
return A.b(C.ahY(r,"ngmy_worksheet_item_v3_"+C.Bp(a8)+"_"+m),$async$ps)
case 29:w=30
return A.b(C.ahY(r,"ngmy_worksheet_thumb_v3_"+C.Bp(a8)+"_"+m),$async$ps)
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
case 14:case 10:a2=J.cH(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gP(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bEC(h),$async$ps)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahZ(r,"ngmy_worksheet_thumb_v3_"+C.Bp(a8)+"_"+a4,f),$async$ps)
case 40:g=i.U4(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahY(r,"ngmy_worksheet_thumb_v3_"+C.Bp(a8)+"_"+a4),$async$ps)
case 41:g=i.U4(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahY(r,"ngmy_worksheet_thumb_v3_"+C.Bp(a8)+"_"+a4),$async$ps)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahZ(r,"ngmy_worksheet_item_v3_"+C.Bp(a8)+"_"+a4,B.V.au(g.ak(),null)),$async$ps)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.c6(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahZ(r,"ngmy_worksheets_index_v3_"+C.Bp(a8),B.V.au(q,null)),$async$ps)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eS(b3,new C.h4o(q))
a4=a3.$ti.k("cM<1,a9<m,@>>")
a7=A.B(new A.cM(a3,new C.h4p(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahZ(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gZ(B.a.i(a8.toLowerCase()))),B.V.au(a0,null)),$async$ps)
case 45:w=46
return A.b(J.hUC(r),$async$ps)
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
return A.i($async$ps,v)},
Mr(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Mr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DU(d),$async$Mr)
case 3:t=g
s=J.cH(t)
r=s.bl(t,new C.hcS(e))
if(r===-1)s.cb(t,0,e)
else s.n(t,r,e)
u=C.ps(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mr,v)},
bFZ(d,e){var w=0,v=A.j(x.H),u
var $async$bFZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DU(d),$async$bFZ)
case 2:u=g
J.nd(u,new C.fNv(e))
w=3
return A.b(C.ps(d,u),$async$bFZ)
case 3:return A.h(null,v)}})
return A.i($async$bFZ,v)},
HD(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$HD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$HD)
case 3:l=f
k=A.a([],x._)
j=B.a.gZ(B.a.i(d.toLowerCase()))
i=A.aW(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.V.aP(0,i,null)
if(x.j.b(t)){j=J.cZ(t,x.f)
j=A.cE(j,new C.fQK(),j.$ti.k("M.E"),x.k)
s=A.a5(j).k("X<M.E>")
r=A.B(new A.X(j,new C.fQL(),s),s.k("M.E"))
B.d.b_(r,new C.fQM())
k=r}}catch(h){}w=4
return A.b(C.fwV(d),$async$HD)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.ik9(k,p,d)
j=A.U(o)
s=j.k("O<1,a9<m,@>>")
s=A.B(new A.O(o,new C.fQN(),s),s.k("ak.E"))
n=B.V.au(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.S8(d,o),$async$HD)
case 7:case 6:j=j.k("X<1>")
m=A.B(new A.X(o,new C.fQO(d),j),j.k("M.E"))
if(m.length!==0)C.aRZ(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$HD,v)},
h47(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h47=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S8(d,e),$async$h47)
case 3:t=J.dL(e,new C.h48(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aRZ(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h47,v)},
a4B(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a4B=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aB(),$async$a4B)
case 2:n=g
m=B.a.gZ(B.a.i(d.toLowerCase()))
l=A.aW(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.V.aP(0,l,null)
if(x.j.b(u)){m=J.cZ(u,x.f)
m=A.cE(m,new C.hcN(),m.$ti.k("M.E"),x.k)
t=A.a5(m).k("X<M.E>")
s=A.B(new A.X(m,new C.hcO(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oM(o,new C.hcP(e))
if(B.a.i(e.x).length===0&&C.uH(e,d)){m=B.a.i(d.toLowerCase())
p=e.aHc(e.y===D.l7?D.l7:D.va,m)}else p=e
if(q===-1)J.nc(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.S8(d,o),$async$a4B)
case 3:w=C.uH(p,d)?4:5
break
case 4:w=6
return A.b(C.aRY(C.HB(p,d),p),$async$a4B)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a4B,v)},
aSa(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aSa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.HD(d),$async$aSa)
case 2:u=g
t=J.cH(u)
s=A.nK(t.eS(u,new C.fNc(e)))
t.bq(u,new C.fNd(e))
w=3
return A.b(C.S8(d,u),$async$aSa)
case 3:w=s!=null&&C.aSc(s,d)?4:5
break
case 4:w=6
return A.b(C.fwc(e),$async$aSa)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aSa,v)},
ajP(d){var w=d.f,v=A.U(w).k("X<1>")
w=A.B(new A.X(w,new C.hcY(),v),v.k("M.E"))
return w},
hn7(d,e){var w,v=d.f,u=A.nK(new A.X(v,new C.fMH(e),A.U(v).k("X<1>")))
v=C.ajP(d)
w=A.U(v).k("X<1>")
v=A.B(new A.X(v,new C.fMI(e,u),w),w.k("M.E"))
B.d.b_(v,new C.fMJ())
return v},
irN(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hPg(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bl(C.hn7(d,u),new C.hcl(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
itj(d,e){var w
if(e==null||e.length===0)return 1
w=C.hn7(d,e)
if(w.length===0)return 1
return new A.O(w,new C.fRB(),A.U(w).k("O<1,F>")).eH(0,B.yx)+1},
iBr(d){var w,v=C.ajP(d)
if(v.length===0)return null
w=new A.X(v,new C.h41(),A.U(v).k("X<1>"))
if(!w.gar(0))return w.gH(0)
return B.d.gH(v)},
irI(d){return A.J(["id",d.a,"name",d.b,"gender",C.hKi(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ite(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aQ(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.I)(a0),++u){q=a0[u]
p=q.a
r.I(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.zD?n:q.c
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
d=q.aH7(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cSv(a1,w,a3.d,a2.y,s,a0,v)},
BC(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$BC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$BC)
case 3:q=f
p=B.a.gZ(B.a.i(d.toLowerCase()))
o=A.aW(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.V.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.cZ(t,x.f)
p=A.cE(p,new C.fQH(),p.$ti.k("M.E"),x.k)
s=A.a5(p).k("X<M.E>")
p=A.B(new A.X(p,new C.fQI(),s),s.k("M.E"))
B.d.b_(p,new C.fQJ())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$BC,v)},
ajx(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ajx=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.va:D.l7
a7=C.HB(b2,b3)
w=2
return A.b(C.BC(b1),$async$ajx)
case 2:a8=b5
a9=J.cH(a8)
b0=a9.bl(a8,new C.h3X(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bFJ(b1,b2),$async$ajx)
case 5:case 4:if(b0===-1){u=b2.aHc(a6,a7)
a9.cb(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.zD?i:l.c
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
s.n(0,m,l.aH7(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b9<2>")
s=A.B(new A.b9(s,k),k.k("M.E"))
k=a5?D.va:D.l7
u=t.cSx(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.S8(b1,a8),$async$ajx)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aRY(B.a.i(b3.toLowerCase()),u),$async$ajx)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ajx,v)},
hFV(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).ab().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("O<1,a9<m,@>>"),k=A.B(new A.O(m,C.hOl(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.ab().ag(),"updatedAt",o],r,x.K),"createdAt",s.ab().ag(),"updatedAt",o],r,x.z)},
hFW(d,e){var w=new A.V(Date.now(),0,!1).ab().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("O<1,a9<m,@>>")
u=A.B(new A.O(u,C.hOl(),t),t.k("ak.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.ab().ag(),"updatedAt",w],x.N,x.z)},
ihH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a2(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.an5(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.O(j,A.hpP(),A.U(j).k("O<1,m>")).c0(0,new C.fwI())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.va
else s=B.d.q(t,u)?D.PD:D.l7
return w.aHc(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.an5(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.cZ(q,h)
h=A.cE(h,new C.fwJ(),h.$ti.k("M.E"),x.P)
p=A.a5(h).k("X<M.E>")
o=A.B(new A.X(h,new C.fwK(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fwL(),x.N).c0(0,new C.fwM())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.va
else s=B.d.q(t,u)?D.PD:D.l7
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.i.M(j)
if(j==null)j=0
return new C.lb(h,r,p,!m,t,o,l,j,v,s,B.ck)},
fwV(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fwV=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fwZ()
h=x.N
g=x.z
w=7
return A.b(A.hf(A.a([A.m0("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.m0("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.m0("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fwV)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.S(h,g)
h=A.B(p,g)
l=h
J.h9(l,o)
J.h9(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a5(l).k("b9<2>")
h=A.cE(new A.b9(l,h),new C.fwW(a0),h.k("M.E"),x.k)
l=A.a5(h).k("X<M.E>")
l=A.B(new A.X(h,new C.fwX(),l),l.k("M.E"))
B.d.b_(l,new C.fwY())
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
return A.i($async$fwV,v)},
ik9(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a2(e)
if(j.gar(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dP(e,new C.fBm(),v).c0(0,new C.fBn())
t=A.d_(u,u.$ti.k("M.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.HB(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.l7){m=q.e
m=!new A.O(m,A.hpP(),A.U(m).k("O<1,m>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ite(l,v)
o=C.HB(k,w)
p=v.d
s.n(0,u,o===w?k.bgJ(p,D.va):k.bgJ(p,v.y))}j=s.$ti.k("b9<2>")
j=A.B(new A.b9(s,j),j.k("M.E"))
B.d.b_(j,new C.fBo())
return j},
S8(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$S8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aB(),$async$S8)
case 2:u=g
t=B.a.gZ(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fEo(),x.a)
s=A.B(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aE("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.V.au(s,null)),$async$S8)
case 3:return A.h(null,v)}})
return A.i($async$S8,v)},
aRY(d,e){return C.ipv(d,e)},
ipv(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aRY=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mu("family_trees",A.a([C.hFV(e,d)],p),null,B.cT),$async$aRY)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mu("family_trees",A.a([C.hFW(e,d)],p),null,B.cT),$async$aRY)
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
return A.i($async$aRY,v)},
aRZ(d,e){return C.ipw(d,e)},
ipw(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aRZ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("O<1,a9<m,@>>")
m=n.k("ak.E")
l=A.B(new A.O(e,new C.fJL(d),n),m)
r=l
w=7
return A.b(A.mu("family_trees",r,null,B.cT),$async$aRZ)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.O(e,new C.fJM(d),n),m)
p=k
w=8
return A.b(A.mu("family_trees",p,null,B.cT),$async$aRZ)
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
return A.i($async$aRZ,v)},
fwc(d){return C.igT(d)},
igT(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fwc=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Sz("family_trees",A.J(["id",d],x.N,x.z),null,B.cT),$async$fwc)
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
return A.i($async$fwc,v)},
rG:function rG(d,e,f,g,h){var _=this
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
cIO:function cIO(){},
cIN:function cIN(){},
cIL:function cIL(){},
cIM:function cIM(){},
IH:function IH(d,e){this.a=d
this.b=e},
ie:function ie(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
an4:function an4(d,e){this.a=d
this.b=e},
fN1:function fN1(){},
hcU:function hcU(d){this.a=d},
fKw:function fKw(d){this.a=d},
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
bUR:function bUR(){},
bUQ:function bUQ(){},
bUN:function bUN(){},
bUO:function bUO(){},
bUP:function bUP(){},
fAC:function fAC(){},
fw8:function fw8(){},
fw9:function fw9(){},
fwa:function fwa(){},
h4l:function h4l(){},
h4m:function h4m(){},
h4n:function h4n(){},
h4o:function h4o(d){this.a=d},
h4p:function h4p(){},
hcS:function hcS(d){this.a=d},
fNv:function fNv(d){this.a=d},
fQK:function fQK(){},
fQL:function fQL(){},
fQM:function fQM(){},
fQN:function fQN(){},
fQO:function fQO(d){this.a=d},
h48:function h48(d){this.a=d},
hcN:function hcN(){},
hcO:function hcO(){},
hcP:function hcP(d){this.a=d},
fNc:function fNc(d){this.a=d},
fNd:function fNd(d){this.a=d},
hcY:function hcY(){},
fMH:function fMH(d){this.a=d},
fMI:function fMI(d,e){this.a=d
this.b=e},
fMJ:function fMJ(){},
hcl:function hcl(d){this.a=d},
fRB:function fRB(){},
h41:function h41(){},
fQH:function fQH(){},
fQI:function fQI(){},
fQJ:function fQJ(){},
h3X:function h3X(d){this.a=d},
fwI:function fwI(){},
fwJ:function fwJ(){},
fwK:function fwK(){},
fwL:function fwL(){},
fwM:function fwM(){},
fwZ:function fwZ(){},
fx_:function fx_(d){this.a=d},
fwW:function fwW(d){this.a=d},
fwX:function fwX(){},
fwY:function fwY(){},
fBm:function fBm(){},
fBn:function fBn(){},
fBo:function fBo(){},
fEo:function fEo(){},
fJL:function fJL(d){this.a=d},
fJM:function fJM(d){this.a=d},
cIP:function cIP(d,e){this.a=d
this.b=e},
cIQ:function cIQ(d,e){this.a=d
this.b=e},
aJT:function aJT(d,e,f){this.a=d
this.b=e
this.c=f},
bcc:function bcc(){this.b=this.a=0},
bcb:function bcb(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bA5:function bA5(){},
xA(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gci()+"/"+w.gcA()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.b0(B.o.v(w.gny()),2,"0")+":"+B.a.b0(B.o.v(w.gH4()),2,"0")},
iqA(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.bs(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.bY(new A.r(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.v.j(0.22)
$.T()
u=A.L()
u.r=v.gp(0)
a5.c1(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=F.hp[l]*a7*0.075
j=k-w
j=A.bx(new A.a3(j,u,j+t,s),new A.aP(r,r))
i=new A.as(B.T,B.Q,B.W,B.X,B.U)
i.r=B.dg.gp(0)
a5.aq(j,i)
k-=q
k=A.bx(new A.a3(k,p,k+o,n),new A.aP(m,m))
i=new A.as(B.T,B.Q,B.W,B.X,B.U)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bx(new A.a3(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bx(new A.a3(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a6(0,new A.r(s,a7*0.17)),Q.ahX(F.tf,t))
s=g.a6(0,new A.r(s,a7*0.18))
q=A.L()
q.r=F.tf.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a6(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,Q.ahX(F.tf,t))
w=A.L()
w.r=F.tf.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a6(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=F.mi.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=F.tf.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bX(a0,a1)
u=A.L()
u.r=F.mi.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bX(a0,a1)
u=A.L()
u.r=F.mi.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=F.hp[l]
t=new A.as(B.T,B.Q,B.W,B.X,B.U)
t.r=F.mi.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.i.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=F.hp[l]*a1
m=0+n*0.4
if(a3){k=new A.as(B.T,B.Q,B.W,B.X,B.U)
k.b=B.ac
k.c=1.6
k.r=B.bq.gp(0)
k.d=B.bF
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.as(B.T,B.Q,B.W,B.X,B.U)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.as(B.T,B.Q,B.W,B.X,B.U)
j.r=B.v.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=B.hY.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bY(a0.a6(0,new A.r(0,a1*0.5)).aI(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,Q.ahX(B.bq,1.8))
a4.restore()},
i7i(){var w,v=$.oH(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"WS"+B.d.hl(u)},
av_(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$av_=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$av_)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f7("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$av_)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
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
return A.i($async$av_,v)},
av0(d){return C.i7j(d)},
i7j(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$av0=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$av0)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i0("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.z),!1,!1,B.cT,null),$async$av0)
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
return A.i($async$av0,v)},
av2(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$av2=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$av2)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i7i()
w=4
return A.b(C.av_(),$async$av2)
case 4:r=h
q=B.a.i(e)
p=B.dZ.aK(t)
J.aK(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cN.gcp().aK(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.K))
w=5
return A.b(C.av0(r),$async$av2)
case 5:u=new A.a1Y("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$av2,v)},
av1(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$av1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.cc(),$async$av1)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.av_(),$async$av1)
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
try{s=B.cb.cG(0,B.cD.aK(t))}catch(h){r=A.ac(h)
$.am.$1("[worksheet qr stash] decode: "+A.v(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.X(q,i)
else{n=x.N
m=x.z
m=A.dH(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().ag())
p.n(q,i,m)}w=5
return A.b(C.av0(q),$async$av1)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$av1,v)},
hAe(){var w=new A.V(Date.now(),0,!1).ab()
return"wst_"+(1000*w.a+w.b)+"_"+B.cR.av(999999)},
i7k(d){var w,v,u,t,s,r,q
try{w=A.BA(d)
if(w==null)return d
v=w
if(J.Mx(v)>960||J.Mw(v)>960){s=v
r=J.Mx(v)>=J.Mw(v)?960:null
v=A.St(s,J.Mw(v)>J.Mx(v)?960:null,B.IQ,r)}s=v
u=A.J2(82).zC(s,B.ri)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ca(u))
return s}catch(q){t=A.ac(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
cr5(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cr5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i7k(e)
$.cr1.n(0,s,t)
u=C.bHT(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cr5,v)},
b5U(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b5U=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d8(l,"data:image")){u=null
w=1
break}t=4
r=J.eD(l,",")?B.d.gal(J.m3(l,",")):l
q=B.cD.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hAe()
w=7
return A.b(C.cr5(p,q),$async$b5U)
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
return A.i($async$b5U,v)},
cr2(d){var w=0,v=A.j(x.T),u,t,s
var $async$cr2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.Y(s,"data:image")){u=s
w=1
break}w=3
return A.b(O.cr4(s),$async$cr2)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cN.gcp().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cr2,v)},
aai(d){var w=0,v=A.j(x.H),u,t
var $async$aai=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=O.hO0(d)
if(t==null){w=1
break}$.cr1.X(0,t)
w=3
return A.b(C.bHS(t),$async$aai)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aai,v)},
bHT(d,e){return C.izL(d,e)},
izL(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bHT=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aQM
w=7
return A.b(n==null?$.aQM=O.hlW():n,$async$bHT)
case 7:r=g
q=new Uint8Array(A.ca(e))
p=J.my(r,"thumbs","readwrite")
B.iO.mj(J.mx(p,"thumbs"),q,l)
w=8
return A.b(J.oL(p),$async$bHT)
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
return A.i($async$bHT,v)},
bHS(d){return C.izJ(d)},
izJ(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bHS=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aQM
w=7
return A.b(o==null?$.aQM=O.hlW():o,$async$bHS)
case 7:r=f
q=J.my(r,"thumbs","readwrite")
B.iO.GE(J.mx(q,"thumbs"),m)
w=8
return A.b(J.oL(q),$async$bHS)
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
return A.i($async$bHS,v)}},D
J=c[1]
A=c[0]
B=c[2]
Ai=c[112]
Aj=c[100]
Ak=c[297]
U=c[352]
A3=c[135]
V=c[284]
Al=c[351]
Am=c[81]
O=c[77]
R=c[356]
A4=c[239]
W=c[76]
A5=c[80]
M=c[83]
An=c[328]
L=c[300]
A6=c[144]
X=c[185]
H=c[45]
E=c[316]
A7=c[182]
Ao=c[331]
Y=c[163]
Ap=c[199]
Aq=c[180]
Ar=c[281]
A8=c[139]
As=c[126]
At=c[138]
Au=c[86]
Av=c[327]
Aw=c[57]
S=c[326]
A9=c[282]
Ax=c[350]
Ay=c[270]
Az=c[286]
N=c[116]
Aa=c[111]
AA=c[246]
Ab=c[195]
Ac=c[250]
Ad=c[280]
AB=c[353]
AC=c[140]
Ae=c[355]
AD=c[101]
G=c[354]
AE=c[198]
AF=c[184]
AG=c[358]
Af=c[304]
AH=c[44]
Z=c[183]
AI=c[233]
AJ=c[191]
A_=c[357]
AK=c[224]
AL=c[137]
P=c[273]
AM=c[288]
AN=c[290]
Ag=c[232]
AO=c[130]
Ah=c[312]
A0=c[343]
Q=c[56]
F=c[154]
AP=c[43]
I=c[162]
A1=c[129]
K=c[204]
AQ=c[145]
A2=c[98]
T=c[42]
AR=c[141]
C=a.updateHolder(c[7],C)
D=c[349]
C.aqF.prototype={}
C.b19.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bl4(),f=h.x!=null&&h.zX(i).length===0
if(h.x!=null)w=f?B.b5:B.bE
else w=h.gV4()?B.bE:B.ed
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.K(D.bsp,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.fos,B.f,i,i,new A.o(B.b5.j(0.12),i,i,A.n(999),i,i,B.m),i,i,i,i,B.hl,i,i,i),B.S,D.fUJ,B.at,A.c(C.xA(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fQi,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,D.ba_,i,i,i,i,B.Pc,i,i,i)
q=A.n(16)
p=A.K(B.bn,B.r,1)
o=A.K(B.b5.j(0.28),B.r,1)
n=A.hog(h.d)
o=A.p(B.z,C.b18(A.fU5(h.e,n),30),B.f,i,i,new A.o(B.ml,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fLc,B.K,i,i)
m=A.n(14)
l=A.K(B.bn,B.r,1)
q=A.p(i,A.x(A.a([o,B.P,n,B.bC,D.fV1,B.af,A.p(i,A.x(A.a([D.haq,B.bC,A.c(A.BF(h.c),i,i,i,i,i,i,D.fFJ,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.m),i,i,i,i,B.f8,i,i,1/0)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,p,q,i,i,B.m),i,i,i,i,AN.a1N,i,i,i)
p=A.n(16)
m=A.K(B.bn,B.r,1)
l=j.aUk("Original due",C.xA(h.r,!1))
n=j.aUk("Current due",C.xA(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.S,A.p(i,A.x(A.a([l,B.P,n,B.S,A.p(i,A.c(h.gaOh(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.m),i,i,i,i,B.wU,i,i,1/0),B.S,j.cmW(),B.P,j.c9h(g,f)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.K(B.bn,B.r,1)
B.d.u(p,A.a([B.S,A.p(i,A.x(A.a([D.fW2,B.at,A.c(q,i,i,i,i,i,i,D.fKn,i,i,i)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,n,o,i,i,B.m),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaIS()){q=A.n(14)
o=A.K(B.cA,B.r,1.6)
B.d.u(p,A.a([B.S,A.p(i,A.x(A.a([D.hbL,B.P,A.bw(A.n(12),A.ef(new A.a6(1/0,88,A.b4(i,i,i,new A.XG(h.ax,B.a_,D.ftf,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.m),i,i,i,i,B.CZ,i,i,i)],s))}p.push(B.aA)
p.push(D.h3v)
return A.p(i,A.x(A.a([r,new A.D(B.a1P,A.x(p,B.am,i,B.e,B.h,0,B.p),i)],s),B.am,i,B.e,B.M,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aUk(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.ad8,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fGM,w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
cmW(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.abf(B.ed,u,"Not paid yet")
w=t.zX(null).length
v=w===0?B.b5:B.bE
return this.abf(v,u,C.xA(t.x,!0))},
c9h(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.abf(B.b5,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.abf(B.b5,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.ad8,u,u,u)
v=A.U(d).k("O<1,he>")
v=A.B(new A.O(d,new C.caa(),v),v.k("ak.E"))
return A.x(A.a([w,B.ak,A.bZ(B.bI,v,B.br,u,6,6)],x.p),B.B,u,B.e,B.h,0,B.p)},
abf(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.ad8,w,w,w),1),new A.d5(1,B.cg,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e6,w,w),w)],x.p),B.B,w,B.e,B.h,0,w,w)}}
C.beu.prototype={
a4(d,e){new A.XG(this.b,B.a_,e,!0,3.5,null).a4(d,e)},
aC(d){return d.b!==this.b}}
C.aqS.prototype={
S(){return new C.aFH(A.a([],x.bp))},
ge9(){return this.c}}
C.aFH.prototype={
a_(){this.a3()
this.JD()},
JD(){var w=0,v=A.j(x.H),u,t=this,s
var $async$JD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3P(t.a.c),$async$JD)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dTS(t,s))
case 1:return A.h(u,v)}})
return A.i($async$JD,v)},
aWi(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.l(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bu:B.bj).j(0.22)
w=A.n(10)
return A.bC(v,new A.b6(4,r,new A.ax(u,1,B.r,-1)),v,B.bl,v,v,v,v,!0,new A.b6(4,w,new A.ax((this.a.d.a?B.bu:B.bj).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.n(10),D.b7E),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aWh(d){return this.aWi(d,null)},
QA(d){return this.cqE(d)},
cqE(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QA=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.IP:B.eZ
w=7
return A.b(new A.ig().D4(72,900,900,n),$async$QA)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fu(),$async$QA)
case 8:p=f
n=B.cN.gcp().aK(p)
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
if(n!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("Could not pick photo: "+A.v(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$QA,v)},
b4C(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.n(10),n=A.K((q?B.bu:B.bj).j(0.18),B.r,1)
if(d)q=B.cU
else q=s.a.d.a?B.bu:B.bj
q=A.W(e,q,r,r,r,18)
w=A.c(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cU
else u=s.a.d.a?B.bu:B.bj
t=x.p
u=A.E(A.x(A.a([w,A.c(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.B,r,B.e,B.h,0,B.p),1)
v=A.ft(r,r,r,r,r,r,r,r,r,r,r,B.cU,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cl)
q=A.a([q,B.aa,u,A.bO(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.W(B.cz,s.a.d.a?B.bu:B.bj,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cl))
return A.p(r,A.A(q,B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.m),r,r,r,B.jg,D.bFD,r,r,r)},
DY(d){return this.bFj(d)},
bFi(){return this.DY(null)},
bFj(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DY=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.az()
r=new A.au(new A.bd(a4,B.b6,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.i.fO(a4)
p=a5.c
a4=a4===q?B.o.v(B.i.M(p)):B.i.aa(p,2)}o=new A.au(new A.bd(a4,B.b6,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.bd(a4,B.b6,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bM(6048e8)
m=A.c0(a4.gck(),a4.gci(),a4.gcA(),0,0,0,0,0)}else{a4=a5.f
m=A.c0(a4.gck(),a4.gci(),a4.gcA(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bt(a4,!0,x.cT)
i=a3?null:A.hog(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xH?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i1(B.v.j(0.55),!0,"Dismiss",a4,new C.dTB(),new C.dTC(a2,t,a5,r,new C.dTD(a2,t),o,n,j),B.eJ,!0,x.y),$async$DY)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cG(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.V$=s
r.W$=0
o.V$=s
o.W$=0
n.V$=s
n.W$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.T(D.fzP)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.T(D.fyt)
w=1
break}a1=A.fU5(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xH?"male":"female"
w=7
return A.b(A.ajO(a3,A.hwN(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DY)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xH?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a5(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c0(a3.gck(),a3.gci(),a3.gcA(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gck(),a4.gci(),a4.gcA(),0,0,0,0,0)))a5.cUU(a2.a)
w=8
return A.b(A.ajO(t.a.c,a5),$async$DY)
case 8:case 5:w=9
return A.b(t.JD(),$async$DY)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DY,v)},
aWY(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cU.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cU
else s=(this.a.d.a?B.bu:B.bj).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b18(d,18)
if(g)q=B.cU
else q=this.a.d.a?B.aS:B.aw
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.p(p,A.A(A.a([r,B.bf,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.b9,B.h,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.m),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
To(d){return this.cIQ(d)},
cIQ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$To=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i1(B.v.j(0.55),!0,"Dismiss",s,new C.dTV(),new C.dTW(t,d),B.hk,!0,x.y),$async$To)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.ajO(t.a.c,d),$async$To)
case 7:w=8
return A.b(t.JD(),$async$To)
case 8:case 1:return A.h(u,v)}})
return A.i($async$To,v)},
Qz(d,e){return this.bQn(0,e)},
bQn(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lC(s,"Cancel","Delete",e.b+" \xb7 "+A.BF(e.c)+" will be removed from this device.","Delete this debt?"),$async$Qz)
case 3:if(!g){w=1
break}w=4
return A.b(C.fNj(t.a.c,e.a),$async$Qz)
case 4:w=5
return A.b(t.JD(),$async$Qz)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qz,v)},
ah8(d){return this.cki(d)},
cki(d){var w=0,v=A.j(x.H),u=this,t
var $async$ah8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dTP(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ah8)
case 2:return A.h(null,v)}})
return A.i($async$ah8,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eDA
w=J.dL(m.d,new C.dTX())
v=A.B(w,w.$ti.k("M.E"))
w=J.dL(m.d,new C.dTY())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cD(v,0,new C.dTZ())
w=A.n(18)
s=m.a.d.a
r=s?D.cGF:D.aEQ
q=A.K(s?B.cU.j(0.35):B.cU.j(0.18),B.r,1)
s=A.p(l,D.c6U,B.f,l,l,new A.o(B.cU.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.ar,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a3,!0,A.n(12),A.aM(!1,A.n(12),!0,D.eCV,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dU_(m),l,l,l,l,l,l,l),B.f,B.cU,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.h,0,l,l)
o=A.E(m.cEQ("Open",""+v.length),1)
n=v.length===0?"$0.00":A.BF(t)
r=A.a([A.p(l,A.x(A.a([s,B.af,A.A(A.a([o,B.aa,A.E(m.baQ(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.h,0,l,l)],p),B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a7(B.ay,B.aC,B.x,r,l,l),B.m),l,l,l,l,B.anG,l,l,l),B.aA],p)
if(J.cv(m.d)){w=m.a.d.a
s=w?B.ek:B.c
q=A.n(18)
o=A.K((w?B.bu:B.bj).j(0.12),B.r,1)
n=A.p(l,D.c1p,B.f,l,l,new A.o(B.cU.j(0.12),l,l,A.n(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,15,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.af,w,B.at,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bj,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.m),l,l,l,l,D.bIm,l,l,1/0))}else{w=m.gcpS()
s=A.B(new A.O(v,w,A.U(v).k("O<1,w>")),x.l)
if(u.length!==0){q=A.a([B.ak,new A.D(D.bK2,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bj,l,l,l,l,l,l,l,l,12,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.O(u,w,A.U(u).k("O<1,w>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.am,l,B.e,B.h,0,B.p)},
baQ(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.v.j(0.22):B.c.j(0.85),s=A.n(14),r=A.K((v.a.d.a?B.bu:B.bj).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bu:B.bj,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cU
else w=v.a.d.a?B.aS:B.aw
return A.p(u,A.x(A.a([q,B.bC,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.B,u,B.e,B.h,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.m),u,u,u,u,B.ez,u,u,u)},
cEQ(d,e){return this.baQ(!1,d,e)},
cpT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zX(j).length,h=d.bkk()
if(d.x!=null){w=d.zX(j).length
v=w===0?B.cU:B.bE}else if(d.gV4())v=B.bE
else{if(h)w=B.cU
else w=k.a.d.a?B.bu:B.bj
v=w}if(d.x!=null){w=d.zX(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xA(u,!1)}else{u.toString
t="Paid "+C.xA(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xA(w,!1)+" \xb7 "+i+" missed":"Due "+C.xA(w,!1)}w=k.a.d.a?B.ek:B.c
u=A.n(18)
if(d.gV4()&&d.x==null)s=B.bE.j(0.35)
else s=(k.a.d.a?B.bu:B.bj).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.aa(0,B.H,B.v.j(0.04),B.cO,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bs:B.ml
o=A.K(d.gV4()&&d.x==null?B.bE.j(0.45):B.cU.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hog(d.d)
o=A.p(B.z,A.d0(C.b18(A.fU5(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.aw
m=x.p
n=A.a([new A.d5(1,B.cg,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.F,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaIS())B.d.u(n,A.a([B.e5,A.W(B.Q3,B.cU.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.h,0,j,j),B.cM,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.B,j,B.e,B.h,0,B.p),1)
n=A.BF(d.c)
l=k.a.d.a?B.aS:B.aw
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(Ax.anu,A.A(A.a([o,B.bb,p,B.aa,A.x(A.a([n,B.bC,A.W(B.eM,(k.a.d.a?B.bu:B.bj).j(0.5),j,j,j,18)],m),B.dI,j,B.e,B.h,0,B.p)],m),B.l,j,B.e,B.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dTR(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.m),j,j,j,B.d4,j,j,j,j)}}
C.v5.prototype={}
C.amT.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.b8
u=v?B.B:B.l
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.aa(0,B.H,B.v.j(0.45),B.cy,16)],x.V)
o=x.p
n=A.a([],o)
m=B.v.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.p(a0,A.W(B.cz,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.j_,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.c(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aAY,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.HT,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.dn(B.dx,m,B.f,A.A(l,B.l,a0,B.e,B.M,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bEP,A.c(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cL:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fC,A.x(a2,u,a0,B.e,B.M,0,B.p),a0),1))
n.push(D.fu3)
a2=A.a([A.A(n,B.l,a0,B.e,B.h,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.wT,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a7(B.a5,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.m),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.m0,A.x(a2,B.l,a0,B.e,B.M,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hL,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a7(B.ay,B.aC,B.x,a1.d,a0,a0),B.m),a0,a0,a0,D.bG6,a0,a0,a0,a0)}}
C.aXQ.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.b8?B.b8:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.c(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cL,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.h,0,q,q),B.cM,n],m)
if(p.z)o.push(new A.D(B.v1,n,q))
return new A.D(B.d4,A.x(o,B.l,q,B.e,B.M,0,B.p),q)}}
C.Ur.prototype={
S(){return new C.bi7()}}
C.bi7.prototype={
gc3S(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aF(d,n,x.w).w,l=x.p,k=A.a([D.eDv,D.eDB],l)
for(w=0;w<8;++w){v=D.a6d[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.ID:B.A3
q=t===s
r=A.W(r,q?B.eE:B.bV,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bf,A.c(v.b,n,n,n,n,n,n,new A.H(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aa,new A.bz(1,B.ba,A.c(v.c,n,1,B.a2,n,n,n,B.Bq,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ax(B.eE,2,B.r,-1)
s=new A.o(n,n,new A.bE(p,p,p,p),new A.bc(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eY,A.x(A.a([new A.D(B.na,new A.c3(B.aL,B.e,B.h,B.l,n,B.p,n,0,r,n),n),A.p(n,new A.ds(!0,new C.amT(v,q.d,q.e,new C.dj3(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.B,n,B.e,B.h,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dj4(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bGv,A.bI(D.hhm,n,new C.dj5(o,d),A.bp(B.b2,n,n,n,n,B.pg,n,n,new A.ba(A.n(16),B.a1),n,n,n)),n))
return A.bo(!0,new A.cQ(new A.aY(0,1/0,0,m.a.b*0.9),A.cp(k,n,n,D.bKZ,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nH.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.ab().ag()],x.N,x.z)},
bgV(d,e,f){return new C.nH(this.a,e,d,f)}}
C.IG.prototype={
x7(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.IG(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aH0(d){var w=null
return this.x7(w,w,w,w,w,d,w,w,w,w,w,w)},
cQu(d){var w=null
return this.x7(w,w,w,w,d,w,w,w,w,w,w,w)},
bgT(d,e,f){var w=null
return this.x7(d,w,w,w,w,w,w,w,e,w,f,w)},
cR8(d){var w=null
return this.x7(w,w,w,w,w,w,d,w,w,w,w,w)},
cRh(d){var w=null
return this.x7(w,w,w,w,w,w,w,w,w,d,w,w)},
cQs(d){var w=null
return this.x7(w,w,w,d,w,w,w,w,w,w,w,w)},
cRj(d){var w=null
return this.x7(w,w,w,w,w,w,w,w,w,w,w,d)},
cQp(d){var w=null
return this.x7(w,w,d,w,w,w,w,w,w,w,w,w)},
cQk(d){var w=null
return this.x7(w,d,w,w,w,w,w,w,w,w,w,w)},
Gv(d){var w=null
return this.x7(w,w,w,w,w,w,w,d,w,w,w,w)},
cRr(d,e,f,g,h,i,j,k,l,m,n){return this.x7(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cNZ(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bTy(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.i.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cR(d.h(0,n))).length!==0?B.a.i(A.cR(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cR(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Ey.geA(D.Ey))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a7V)
q=l.$2("frame",D.a7e)
l=l.$2("texture",D.a7a)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cR(d.h(0,"author"))):o
return this.cRr(p,u,t,q,r,A.rv(d.h(0,"ribbon"))?A.Hd(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a07.prototype={
S(){return new C.aCF(A.a([],x.I),D.PC)},
ge9(){return this.c}}
C.aCF.prototype={
a_(){var w,v=this
v.a3()
v.f=A.At(0,1)
w=$.az()
v.z=new A.au(B.ax,w)
v.Q=new A.au(B.ax,w)
v.lf()
w=v.a
C.bG8(w.c,w.d).bE(new C.djK(v),x.fL)},
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
return A.b(C.LZ(s.c,s.d),$async$lf)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.djy(t,r))
t.ayA()
case 1:return A.h(u,v)}})
return A.i($async$lf,v)},
gav7(){var w,v=this
if(!J.cv(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
ayA(){var w,v,u=this.gav7(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
ciG(d){this.l(new C.djv(this,d))
this.ayA()},
Oq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Oq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nH(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aTW(r.c,r.d,s),$async$Oq)
case 3:w=4
return A.b(t.lf(),$async$Oq)
case 4:if(t.c==null||J.cv(t.d)){w=1
break}q=J.oM(t.d,new C.dj6(s))
p=q>=0?q:J.ad(t.d)-1
t.l(new C.dj7(t,p))
t.ayA()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.C2(p+1,B.cn,B.l4),$async$Oq)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Oq,v)},
BG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$BG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.d()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.d()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gav7()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aTW(o.c,o.d,new C.nH(s,r,q,new A.V(p,0,!1))),$async$BG)
case 3:w=4
return A.b(t.lf(),$async$BG)
case 4:if(t.c==null){w=1
break}t.l(new C.djz(t))
case 1:return A.h(u,v)}})
return A.i($async$BG,v)},
P9(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gav7()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.djf(r),s,null,!0,!0,x.y),$async$P9)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bFT(s.c,s.d,r.a),$async$P9)
case 4:t.l(new C.djg(t))
w=5
return A.b(t.lf(),$async$P9)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.V7(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$P9,v)},
zi(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BG(),$async$zi)
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
return A.b(C.Sr(s,r.r,o,p,q),$async$zi)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a8(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hOP(s,r.x,r.r),$async$zi)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LZ(s.c,s.d),$async$zi)
case 10:l=e
for(s=n.d,r=J.cH(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nH(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BM(r.c,r.d,l),$async$zi)
case 11:w=12
return A.b(t.lf(),$async$zi)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zi,v)},
a2c(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a2c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BG(),$async$a2c)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzg(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dC(D.As,new C.djw(t),new C.djx())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.n1("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gP(o)
p.push(new H.n1(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hq5(o,new H.t0(s,r,"",p,new H.vn(q.d,null,null,null,null,"","","")),null),$async$a2c)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a2c,v)},
OQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$OQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BG(),$async$OQ)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.aip,null,new C.djb(t),s,!0,!0,!0,I.abe,!1,!1,x.N),$async$OQ)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cQu(r)
t.l(new C.djc(t,q))
s=t.a
w=7
return A.b(C.T4(s.c,s.d,q),$async$OQ)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OQ,v)},
Yn(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.aip,null,new C.djh(t),r,!0,!0,!0,I.abe,!1,!1,x.e),$async$Yn)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.dji(t,s))
r=t.a
w=4
return A.b(C.T4(r.c,r.d,s),$async$Yn)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.C2(0,B.e8,B.n6)
case 1:return A.h(u,v)}})
return A.i($async$Yn,v)},
bW2(d){var w=d.bU(),v=B.a.b0(B.o.v(w.gci()),2,"0"),u=B.a.b0(B.o.v(w.gcA()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gzg(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c35()
if(r.e)w=D.ah4
else if(J.cv(r.d)){w=r.y
v=r.gzg(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fF4,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a6(q,330,new A.D(A0.aoP,new C.a_n(w,v,0,q),q),q),B.bx,t,B.ak,A.c(u,q,q,q,q,q,q,A.l(q,q,D.kZ.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.p(q,D.foc,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.aa(0,B.H,B.dW.j(0.45),B.J,18)],x.V),E.xx,B.m),q,q,q,q,B.Pf,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcN1(),q,q,q,q,q,q,!1,B.a4))
w.push(B.S)
w.push(A.hu(D.bYn,D.hgO,r.gaPZ(),q))
B.d.u(u,w)}w=A.at(A.cb(A.x(u,B.l,q,B.e,B.M,0,B.p),B.t,q,B.y,q,q,B.eG,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.kZ.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.e4:B.C1
u=A.x(A.a([new A.D(D.bHB,w,q),A.E(A.K2(v,new C.djI(r),J.ad(r.d)+1,q,r.gciF(),u,B.aL),1),r.bIh()],x.p),B.l,q,B.e,B.h,0,B.p)
w=u}v=x.p
return A.c5(q,D.a_v,new A.an(B.a0,q,B.b4,B.t,A.a([D.aSr,A.bo(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c35(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cL(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.L1(B.ef,"AI",h.gbG5(),!0))
if(h.a.f)f.push(new C.L1(B.m3,"Cover",h.gbQX(),!1))
if(h.a.f)f.push(new C.L1(B.xp,"Header",h.gbLT(),!1))
if(J.cL(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.L1(B.vs,"Print",h.gcs_(),!1))
if(h.a.f&&J.cL(h.d)&&h.r>=0){v=h.w
u=v?B.hn:B.jj
t=v?"Save":"Edit"
f.push(new C.L1(u,t,v?h.gcyn():new C.djs(h),!1))}if(h.a.f)f.push(new C.L1(B.ib,"Add page",h.gaPZ(),!1))
v=C.hKh(h.y.Q)
u=h.gzg(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dRK
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(E.kD.j(0.5),1,B.r,-1)
j=A.p(g,A.W(l.a,D.kZ,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bE(i,i,i,i),new A.bc(k,k,k,k),g,new A.a7(B.a5,B.a9,B.x,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.kZ.j(0.85)
p.push(new A.bz(1,B.ba,A.aA(B.c_,A.x(A.a([k,B.bC,A.c(l.b,g,1,g,g,g,g,new A.H(!0,j,g,g,g,g,9.5,B.F,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.M,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.amT(v,u,t+" \xb7 "+s+" "+r,new C.djt(h),A.A(p,B.l,g,B.e,B.h,0,g,g),g)},
AC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BG(),$async$AC)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=H.a44(B.d.aL(s," "))
s=t.c
s.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.dj8(t,p),s,null,!0,!0,x.N),$async$AC)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zi(),$async$AC)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Ex(),$async$AC)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.G8("Swahili (Kiswahili)",!0),$async$AC)
case 18:w=16
break
case 17:w=19
return A.b(t.cJt(o==="sw"?"Swahili (Kiswahili)":"English"),$async$AC)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$AC,v)},
a_m(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.K(E.kD.j(0.3),B.r,1),r=x.p
return new A.D(B.cx,A.aM(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.xx,B.a6),w,42,w,w,w,w,w,42),B.bb,A.E(A.x(A.a([A.c(f,w,w,w,w,w,w,Aa.LD,w,w,w),A.c(g,w,w,w,w,w,w,B.Ft,w,w,w)],r),B.B,w,B.e,B.h,0,B.p),1)],r),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.m),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dju(d,h),w,w,w,w,w,w,w),w)},
Ex(){return this.bVw()},
bVw(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Ex=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.djl(r),a7,null,!0,!0,x.ei),$async$Ex)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eH("Working on it\u2026",$.az())
a6.a=!0
a7=r.c
a7.toString
A.ce(null,null,!1,null,new C.djm(o),a7,null,!0,!0,x.H).fA(new C.djn(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.c6(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ak()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.As[a1]
J.c6(j,i.a)}w=8
return A.b(C.aiR(a0,a7,new C.djo(o),d,l,e,j),$async$Ex)
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
if(l!=null&&a6.a)A.a8(l,!0).e7()
l=o
l.sik($.az())
J.aUp(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.T(A.b2(null,null,null,null,null,B.t,null,A.c(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcn(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bgV(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BM(j.c,j.d,l),$async$Ex)
case 11:w=12
return A.b(r.lf(),$async$Ex)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.As[a1].a)
a5=l.cNZ(j,12,a7)
l=r.a
w=15
return A.b(C.T4(l.c,l.d,a5),$async$Ex)
case 15:if(r.c!=null)r.l(new C.djp(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.C2(0,B.e8,B.n6)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.cCC("Undo",new C.djq(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.en,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ex,v)},
G8(d,e){return this.cJu(d,e)},
cJt(d){return this.G8(d,!1)},
cJu(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$G8=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eH("Starting\u2026",$.az())
f.a=!0
k=r.c
k.toString
A.ce(null,null,!1,null,new C.djB(a0),k,null,!0,!0,x.H).fA(new C.djC(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c6(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a4l(m,new C.djD(a0)),$async$G8)
case 10:w=8
break
case 9:w=11
return A.b(C.bHI(new C.djE(a0),m,a2),$async$G8)
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
if(o!=null&&f.a)A.a8(o,!0).e7()
o=a0
o.sik($.az())
J.aUp(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bgV(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BM(k.c,k.d,o),$async$G8)
case 12:w=13
return A.b(r.lf(),$async$G8)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.Y(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.cCC("Undo",new C.djF(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$G8,v)},
bIh(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dj9(v):u
r=A.aI(u,u,u,u,A.W(D.bTY,s?D.kZ:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cL(v.d)&&!v.w&&v.r>=0)s=A.hu(A.W(B.x9,B.Hg,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.Hg,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbQx(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.kZ.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dja(v):u
return A.bo(!0,new A.D(D.bHp,A.A(A.a([r,s,A.aI(u,u,u,u,A.W(B.eM,t<J.ad(v.d)?D.kZ:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.h,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a0b.prototype={
S(){return new C.biw(new A.au(B.ax,$.az()))}}
C.biw.prototype={
ga3k(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.az()
w.W$=0
this.a2()},
gbU7(){switch(this.ga3k()){case"cover":var w=D.deG
break
case"book":w=D.d9y
break
default:w=D.dIa
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.n(26),n=E.kD.j(0.5),m=x.p,l=A.A(A.a([D.dRL,B.ar,D.bNc,A.aI(p,p,p,p,B.lC,p,p,p,new C.dlw(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.h,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jN(p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dlx(q),q.ga3k()==="page",p,p,p,p))
if(q.a.d)k.push(A.jN(p,p,p,D.hbi,p,new C.dly(q),q.ga3k()==="book",p,p,p,p))
k.push(A.jN(p,p,p,D.fYR,p,new C.dlz(q),q.ga3k()==="cover",p,p,p,p))
k=A.bZ(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bC(p,new A.b6(4,A.n(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kx,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dn,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbU7(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,As.LA,p,p,p)
w.push(A.mR(p,B.c.j(0.08),r,B.hE,new C.dlA(q,s),p,p,p,p))}return A.eE(p,E.Cz,A.cb(A.x(A.a([l,B.S,D.heD,B.ak,k,B.af,j,B.P,A.bZ(B.bI,w,B.br,p,6,6),B.aA,A.dc(D.bYk,p,D.hfq,new C.dlB(q,d),A.bp(B.b2,p,p,p,p,B.pg,p,p,new A.ba(A.n(16),B.a1),p,p,p)),B.at,D.h9s],m),B.B,p,B.e,B.M,0,B.p),B.t,p,B.y,p,p,B.fc,p,p,B.ah),p,p,p,B.Pd,p,B.d7,p,new A.ba(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a09.prototype={
S(){return new C.aCI(A.a([],x.gA))},
ge9(){return this.c}}
C.agB.prototype={}
C.aCI.prototype={
a_(){this.a3()
this.lf()},
lf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sv(p.c,p.d),$async$lf)
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
return A.b(C.bG8(r.c,q),$async$lf)
case 6:j=e
i=J
w=7
return A.b(C.LZ(t.a.c,q),$async$lf)
case 7:m.push(new l.agB(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.djZ(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lf,v)},
bc9(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Ro(d,e){return this.ckf(0,e)},
ckf(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ro=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a8(s,!1).cc(A.ec(new C.djY(u,e),!0,null,x.y)),$async$Ro)
case 2:t=g
w=3
return A.b(u.lf(),$async$Ro)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.T(D.aWq)
return A.h(null,v)}})
return A.i($async$Ro,v)},
Ga(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Ga=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.T(D.aWl)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aia(s.c,s.d),$async$Ga)
case 5:q=e
w=6
return A.b(t.lf(),$async$Ga)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Ro(0,B.d.ff(t.d,new C.dk2(q))),$async$Ga)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Sr(p,s.f,r,n,o),$async$Ga)
case 10:m=e
w=11
return A.b(t.lf(),$async$Ga)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.T(D.aWq)
case 1:return A.h(u,v)}})
return A.i($async$Ga,v)},
QO(d,e){return this.cw3(0,e)},
cw3(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dk1(t,e),s,null,!0,!0,x.y),$async$QO)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a4w(s.c,s.d,e.a),$async$QO)
case 4:w=5
return A.b(t.lf(),$async$QO)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QO,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bIk(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.K(E.kD.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fJ(0.7142857142857143,A.p(n,A.x(A.a([D.dRM,B.af,D.eCw,B.at,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kZ.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.b9,B.h,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcMY(),n,n,n,n,n,n,!1,B.a4))}w=A.n(22)
v=A.K(E.kD.j(0.85),B.r,1.6)
s=A.aA(n,A.p(n,D.c5C,B.f,n,n,new A.o(B.v.j(0.3),n,A.K(E.kD.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dk3(d),n,n,n,n,n,n,!1,B.a4)
r=A.n(14)
q=B.v.j(0.3)
p=A.K(E.kD.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bb,D.bNB,A.p(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fE3,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.m),n,n,n,n,B.hl,n,n,n)],l),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.cbI,B.m),n,n,n,Al.P0,D.bFi,n,n,n)
if(o.e)k=D.ah4
else k=k.length===0?D.bfm:A.cf(new C.dk4(k))
return A.c5(n,D.a_v,new A.an(B.a0,n,B.b4,B.t,A.a([D.aSr,A.bo(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bIk(d){var w,v,u=this,t=null,s=u.bc9(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.dn(B.dF,B.z,B.f,new A.a6(300,420,new C.a_n(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aA(t,A.p(t,D.c4S,B.f,t,t,new A.o(B.v.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.djW(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fDH,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fJ(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.P,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kZ.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.h,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.djX(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.L1.prototype={}
C.a_n.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dC(D.As,new C.cRQ(m),new C.cRR()),j=m.c,i=D.Ey.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mC:B.b9
v=new C.cRS(h)
i=A.a([new A.aa(0,B.H,B.v.j(0.6),D.ezj,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b4(l,l,l,new C.bfH(j.x,h,l),B.az),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.a5,B.a9,B.x,A.a([B.v.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cN(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bc(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.aoQ,8,0.85,2.2),v.$4(D.bKl,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aoQ,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bKh,A.b4(l,l,l,new C.bfy(h,l),B.az),l),0,0,0))
r=A.W(D.aDN[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.c(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aAY,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.af,p,B.af,A.c(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cL,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.c(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.F,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bKP,A.x(o,B.l,l,w,B.h,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aJN(l),D.ft8),l,l,l,46,0,l))
return A.p(l,A.bw(D.afF,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.afF,i,new A.a7(B.ay,B.aC,B.x,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bfH.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e0()
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
l=new A.as(B.T,B.Q,B.W,B.X,B.U)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.O(new A.r(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.T()
l=A.a([],n)
j=new A.aH(m.r,B.aj,null,null,l)
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
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
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
aC(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bfy.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.T(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.ac
j.c=2.4
j.d=B.bF
for(w=e.a,v=e.b,v=[D.fg2,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aH(k,B.aj,null,null,s)
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
s=new A.as(B.T,B.Q,B.W,B.X,B.U)
s.r=i.j(0.9).gp(0)
d.O(new A.r(r+p*9,q+o*9),3,s)}},
aC(d){return!d.b.A(0,this.b)}}
C.v6.prototype={}
C.a_I.prototype={
S(){return new C.bfF()}}
C.bfF.prototype={
goB(){var w=this.d
return w===$?this.d=this.a.c:w},
gzg(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.bd(w.b,B.b6,B.aP),$.az())}return v},
gaEa(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.bd(w.c,B.b6,B.aP),$.az())}return v},
gatE(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.bd(w.y,B.b6,B.aP),$.az())}return v},
t(){var w=this,v=w.gzg(0),u=v.V$=$.az()
v.W$=0
v=w.gaEa()
v.V$=u
v.W$=0
v=w.gatE()
v.V$=u
v.W$=0
w.a2()},
auh(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jN(s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.daP(this,f,u),e===u,s,s,s,s))}return A.bZ(B.bI,r,B.br,s,6,8)},
aA5(d){var w=null,v=B.c.j(0.07)
return A.bC(w,new A.b6(4,A.n(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.m9,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goB(),a0=f.gzg(0),a1=a0.a.a,a2=f.gaEa(),a3=a2.a.a,a4=f.gatE(),a5=d.bgT(a4.a.a,a3,a1)
a1=x.w
a3=A.aF(a6,e,a1).w
a1=A.aF(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a6(190,260,new A.dn(B.dF,B.z,B.f,new A.a6(270,370,new C.a_n(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.aA5("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dbd(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.aA5("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dbe(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.As[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bE(o,o,o,o),e,e,new A.a7(B.ay,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aF
v.push(A.aA(e,A.x(A.a([p,B.cM,A.c(t.b,e,e,e,e,e,e,new A.H(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.M,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dbf(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bZ(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b2.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.eE:B.L,2,B.r,-1)
q.push(A.aA(e,A.p(e,A.W(D.aDN[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bE(o,o,o,o),new A.bc(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dbg(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bZ(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.aA5("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dbh(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a7,e,B.ao,e,e,e,e)
p=A.c("LETTERING COLOUR",e,e,e,e,e,e,N.w8,e,e,e)
m=A.a([],w)
for(l=D.Ey.gdS(D.Ey),l=l.gae(l);l.C();){k=l.gP(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eE:B.aT
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bE(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aF
m.push(A.aA(e,A.x(A.a([j,B.bC,A.c(i,e,e,e,e,e,e,new A.H(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.M,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dbi(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bZ(B.bI,m,B.br,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,N.w8,e,e,e)
k=f.goB()
return new A.D(new A.R(0,0,0,a3.f.d),A.bo(!0,new A.cQ(new A.aY(0,1/0,0,a1.a.b*0.92),A.cp(A.a([D.h8T,B.af,d,B.aO,a0,B.S,a2,B.aA,D.hfb,B.P,v,B.aA,D.h91,B.P,q,B.aA,a4,B.aA,p,B.P,m,B.aA,l,A.ld(e,9,""+B.i.R(f.goB().f),36,18,new C.dbj(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,N.w8,e,e,e),B.ak,f.auh(D.a7V,f.goB().r,new C.dbk(f),D.dLu),B.af,A.c("BORDER",e,e,e,e,e,e,N.w8,e,e,e),B.ak,f.auh(D.a7e,f.goB().w,new C.dbl(f),D.dLA),B.af,A.c("COVER MATERIAL",e,e,e,e,e,e,N.w8,e,e,e),B.ak,f.auh(D.a7a,f.goB().x,new C.dbn(f),D.dNe),B.ak,A.j7(e,B.b2,e,B.ag,e,new C.dbo(f),e,e,e,D.h30,f.goB().z),B.bx,A.bI(D.h7z,e,new C.dbp(f,a6),A.bp(B.b2,e,e,e,e,B.pg,e,e,new A.ba(A.n(16),B.a1),e,e,e))],w),e,e,U.aok,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aJN.prototype={
a4(d,e){var w,v,u,t=new A.aH($.T().r,B.aj,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bA())
u=A.L()
u.san(D.ccq.az(0,new A.a3(0,0,0+w,0+v)))
d.af(t,u)},
aC(d){return!1}}
C.bl4.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.T()
w=A.L()
w.san(D.cbo.az(0,new A.a3(0,0,a2,a3)))
a4.aD(new A.a3(0,0,a2,a3),w)
v=B.i.cF(a1/112)
u=new A.e0()
u.cT(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.deF[u.av(9)]
j=u.av(14)
J.bs(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a3(n,j,n+m,j+l)
h=A.bx(i,B.hD)
g=new A.as(B.T,B.Q,B.W,B.X,B.U)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.v,0.45)
e.toString
g.san(new A.a7(B.a5,B.a9,B.x,A.a([f,k,e],w),d,d).az(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.as(B.T,B.Q,B.W,B.X,B.U)
e.r=E.kD.j(0.55).gp(0)
a4.aD(new A.a3(g,j,h,j+2),e)
e=new A.as(B.T,B.Q,B.W,B.X,B.U)
e.r=E.kD.j(0.4).gp(0)
a4.aD(new A.a3(g,q,h,p),e)
t.restore()
j=u.av(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.san(D.caH.az(0,new A.a3(0,r,a2,q)))
a4.aD(new A.a3(0,r,a2,q),p)
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=B.v.j(0.5).gp(0)
p.y=B.l6
a4.aD(new A.a3(0,q,a2,q+14),p)}t=A.L()
t.r=D.bjb.j(0.72).gp(0)
a4.aD(new A.a3(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bT(B.z,0.5,B.x,d,0,A.a([D.brQ.j(0.22),B.L],w),d,d).az(0,A.bX(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aC(d){return!1}}
C.bdP.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cN(14,w*2,v*2.2,v*2,o,o,new A.bP(new A.o(A.ap(D.kZ,D.bxb,w/4),o,new A.bE(B.a1,new A.ax(B.v.j(0.12),1,B.r,-1),B.a1,B.a1),B.MO,o,o,B.m),B.bm,o,o),o))}v=x.V
u=A.a([new A.aa(0,B.H,B.v.j(0.35),B.aO0,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kD.j(0.6),o,o,new A.bc(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.l,o,B.rm,B.h,0,B.p),B.f,o,o,new A.o(o,o,o,D.b7l,u,D.cco,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.aa(0,B.H,B.v.j(0.4),B.dp,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aJN(o),D.ft3),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aXQ(p.y,r,L.je,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bC(o,B.eU,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.je.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fSM,!0,B.a7,o,B.ao,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.je.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bC(o,B.eU,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.je.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.al,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fJ4,!0,B.a7,B.Bl,B.ao,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.fSE,o,o,o),B.at,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.je.j(0.5),o,o,o,o,o,o,o,o,11,B.cL,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.E(A.p(o,o,B.f,D.GY.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fC,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.GY.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.GY.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.h,0,o,o),B.aA],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.je.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.ZD(A.d1(A.a([A.d1(o,o,o,o,o,o,o,o,o,D.fMn,B.a.aw(k,0,1)),A.d1(o,o,o,o,o,o,o,o,o,o,B.a.aY(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.je.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cb(A.x(n,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hy,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.je.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.bw(B.MO,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bJO,A.x(s,B.am,o,B.e,B.h,0,B.p),o),A.ao(0,new A.bP(new A.o(o,o,o,o,o,new A.a7(B.a5,B.a9,B.x,A.a([B.v.j(0.16),B.L],x.O),o,o),B.m),B.bm,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.MO,v,D.ccW,B.m),o,o,o,o,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.amU.prototype={
S(){return new C.amV(new A.eH(0,$.az()),new C.bVm(),new C.anc(),D.hUp,null,null)},
gd6(){return this.d}}
C.a2p.prototype={
a8(){return"_Step."+this.b}}
C.amV.prototype={
gCQ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bG4(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Nk(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gUp(){var w=this.ghi(0)
return w.gzA()==null?"Babu":B.a.i(w.gzA().b)},
a_(){var w,v=this
v.a3()
w=v.ghi(0).gzA()
w=w==null?null:w.c
v.r.b=w===D.oP
w=v.q8(new C.bTI(v))
w.fR(0)
v.x!==$&&A.aR()
v.x=w
v.a3g("Come closer, my children. I am "+v.gUp()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bxD()},
a3g(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.d2(E.a1f,new C.bTC(w))},
bu_(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.l(new C.bTL(v))},
aeJ(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
btS(){return this.bbG()},
bbG(){var w=this,v=w.gCQ()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bTD(w))
w.a3g(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.nR,new C.bTE(w))},
cO5(){var w=this
w.l(new C.bTH(w))
w.a3g(w.gCQ()[w.as].a)},
Ly(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aeL)return
w=p.gCQ()
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
t.r=s.a+1.5}q=new A.e0()
q.cT(v*7+d)
p.l(new C.bTG(p,d,u,q))
p.a3g(u?D.dvB[q.av(4)]+" "+w[p.as].d:D.drY[q.av(3)]+" "+w[p.as].d)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCQ()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bIo(t.at,t.ay,p)
t.l(new C.bTJ(t,s))
t.a3g(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.C7(t.a.d,s),$async$kM)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.C8(r.d,r.c.a,"fire",t.at*10),$async$kM)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bTK())
w=1
break
case 4:++t.as
t.bbG()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.Zv,new A.an(B.a0,v,B.ad,B.t,A.a([A.bS(0,new A.e4(A.b4(v,v,v,new C.aXV(u,w.r,w.w,u),B.az),v),0,0,0),A.bo(!0,A.x(A.a([w.ce9(0),B.aY,w.bTi()],t),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
ce9(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,Ag.R2,s,s,s,new C.bTF(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCQ().length;++w){v=t.as
if(w<v||t.Q===D.b3D)v=B.cW
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,D.bF2,s,s,s,22))}p=A.E(A.x(A.a([D.h_K,A.A(p,B.l,s,B.e,B.h,0,s,s)],q),B.B,s,B.e,B.h,0,B.p),1)
v=A.n(14)
u=A.K(B.fK,B.r,1)
return new A.D(D.bL2,A.A(A.a([r,p,A.p(s,A.c("\ud83d\udd25 "+B.i.R(t.cy*100)+"%",s,s,s,s,s,s,B.iQ,s,s,s),B.f,s,s,new A.o(B.b7,s,u,v,s,s,B.m),s,s,s,s,B.hl,s,s,s)],q),B.l,s,B.e,B.h,0,s,s),s)},
bTi(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghi(0).gzA()
if(h==null)w=1
else w=h.c===D.oP?0:1
v=j.dx
u=j.db
t=D.qK.j(0.96)
s=A.n(22)
r=A.K(B.cW,B.r,3)
q=A.b4(i,i,i,new C.bqH(w,i),B.az)
p=A.c(j.Q===D.aeL?j.gUp()+" asks":"Elder "+j.gUp(),i,i,i,i,i,i,D.aXG,i,i,i)
o=j.db
o=B.a.aw(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c_,A.A(A.a([new A.a6(62,62,q,i),B.ar,A.E(A.x(A.a([p,B.bC,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aXT,i,i,i)],n),B.B,i,B.e,B.h,0,B.p),1)],n),B.B,i,B.e,B.h,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbtZ(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.aaO("Sit down by the fire",j.gbtR()),i,i,i)
break
case 1:v=A.at(j.aaO("Ask me, Elder",j.gcO4()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCQ()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ax(D.lR,2.5,B.r,-1)
v.push(A.aA(i,A.p(i,A.c(u[m],i,i,i,i,i,i,D.aXP,B.K,i,i),B.f,i,D.agi,new A.o(D.alR,i,new A.bE(l,l,l,l),new A.bc(q,q,q,q),i,i,B.m),i,i,i,i,Z.wX,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bTz(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bZ(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kk:AB.arP
u=A.W(u,v?B.eq:D.lR,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.eq:D.lR,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCQ().length?"Finish":"Next story"
v=A.A(A.a([u,B.aa,q,j.aaO(v,j.gqr(j))],n),B.l,i,B.e,B.h,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gCQ().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aY6,i,i,i)],n)
u=j.cx
if(u>0){u=C.aS7(u)
q=C.aS7(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.adb,i,i,i))}v.push(B.P)
v.push(j.aaO("Back to the games",new C.bTA(j)))
v=A.x(v,B.l,i,B.e,B.h,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.S,v],n),B.B,i,B.e,B.M,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aFl,i,B.m),i,i,i,B.zh,B.bl,i,i,i)},
aaO(d,e){var w=null,v=A.n(16),u=A.K(B.cW,B.r,2)
return A.aA(w,A.p(w,A.c(d,w,w,w,w,w,w,Aa.LD,w,w,w),B.f,w,w,new A.o(D.lR,w,u,v,w,w,B.m),w,w,w,w,D.bIH,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bqH.prototype={
a4(d,e){Q.hpQ(d,e.eo(B.J),e.gdk()*0.45,this.b,0,0.4)},
aC(d){return d.b!==this.b}}
C.aCG.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a7(0,w.gbB())
w.a9$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bVm.prototype={}
C.tq.prototype={}
C.bqI.prototype={}
C.anc.prototype={
MY(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.imH(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aXV.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.Cy(l.d.MY(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bs(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cDs(d,j)
l.bRR(d,j)
l.cLS(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bs(t.save())
t.translate(225,580)
d.nK(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.T()
q=A.L()
p=x.O
o=x.n
q.san(A.ws(B.J,r,A.a([D.bvS.j(0.55*s),F.Oi.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bVe(l,d,j,i)),new A.y(540,new C.bVf(l,d,j,i)),new A.y(546,new C.bVg(l,d,j,i)),new A.y(574,new C.bVh(l,d,j,i)),new A.y(612,new C.bVi(l,d,j,i)),new A.y(650,new C.bVj(l,d,j,i)),new A.y(656,new C.bVk(l,d,j,i))],x.E)
B.d.b_(n,new C.bVl())
for(m=0;m<7;++m)n[m].b.$0()
l.bID(d,j,i)
l.bVu(d,j)
t.restore()
$.T()
t=A.L()
t.san(A.ws(new A.r(w/2,v*0.6),e.gap3()*0.75,A.a([B.L,D.bj4],p),A.a([0.55,1],o),B.x,k,k,0))
d.aD(new A.a3(0,0,0+w,0+v),t)},
aC(d){return d.c!==this.c||d.d!==this.d},
cDs(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e0()
h.cT(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.T()
r=new A.as(B.T,B.Q,B.W,B.X,B.U)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.i.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aI(0,D.eyQ),C.iQ(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.T()
k=A.a([],t)
l=new A.aH(l.r,B.aj,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ac()
j=r-3
r=new A.ch(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.aj(i)
l.ac()
s=new A.ch(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.aj(r)
l.ac()
s=new A.as(B.T,B.Q,B.W,B.X,B.U)
s.b=B.ac
s.c=1.6
s.r=D.blQ.gp(0)
s.d=B.bF
s.e=B.dN
d.af(l,s)}},
bRR(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aCi[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bY(new A.r(p,m),n*0.74,q*0.5)
k=Ap.z2.j(v)
$.T()
j=new A.as(B.T,B.Q,B.W,B.X,B.U)
j.r=k.gp(0)
d.c1(l,j)
q=A.bY(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=B.wy.j(u).gp(0)
d.c1(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.as(B.T,B.Q,B.W,B.X,B.U)
o.r=D.ajc.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cLS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bFp(d,D.eyM,0.9,e,D.hO5,!1,!1,D.b3A,1,!1)
w=$.T().r
v=x.v
u=new A.aH(w,B.aj,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bA())
t=A.L()
t.r=D.al9.gp(0)
d.af(u,t)
C.bFp(d,D.eyO,0.95,e,D.hNU,!1,!1,D.b3B,1,!0)
t=new A.aH(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.ch(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.ch(431,553,421,548))
t.E(new A.bA())
u=A.L()
u.r=F.GC.gp(0)
d.af(t,u)
u=A.bY(D.eyN,8,28)
t=A.L()
t.r=D.byi.gp(0)
d.c1(u,t)
C.bFp(d,new A.r(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hO7,!0,!1,D.Yi,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c1(A.bY(new A.r(s+q*16,r-6),16,11),C.iQ(D.al0,1.8))
u=q<0
C.bFp(d,new A.r(s-q*6,r),0.62,e,D.hOa,!1,u,D.Yi,2.2,!1)
C.bFp(d,new A.r(s-q*32,r+4),0.58,e+1,D.hO1,!1,u,D.Yi,2.2,!1)
this.bYd(d,D.eyr,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bY(new A.r(o,n),8,11)
k=p===1
j=k?D.akX:D.alz
i=new A.as(B.T,B.Q,B.W,B.X,B.U)
i.r=j.gp(0)
d.c1(l,i)
l=k?D.akX:D.alz
k=new A.as(B.T,B.Q,B.W,B.X,B.U)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.as(B.T,B.Q,B.W,B.X,B.U)
k.b=B.ac
k.c=1
k.r=B.au.gp(0)
k.d=B.bF
k.e=B.dN
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.as(B.T,B.Q,B.W,B.X,B.U)
k.b=B.ac
k.c=1
k.r=B.au.gp(0)
k.d=B.bF
k.e=B.dN
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bY(D.aa6,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.ajB.gp(0)
d.c1(u,t)
u=A.bY(D.aa6.a6(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bo3.gp(0)
d.c1(u,t)
t=new A.aH(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bA())
u=A.L()
u.r=D.bog.gp(0)
d.af(t,u)
u=D.aa6.a6(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.ir.gp(0)
d.O(u,1.1,t)
v=new A.aH(w,B.aj,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.ch(180,588+w*(h?6:0),178,595))
d.af(v,C.iQ(D.ajB,3.5))},
bYd(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a6(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.T()
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.b=B.ac
m.c=2
m.r=D.ZJ.gp(0)
m.d=B.bF
m.e=B.dN
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bY(k,17,32)
v=$.T()
r=A.L()
r.r=D.GA.gp(0)
d.c1(w,r)
r=A.bY(k.a6(0,D.exS),7,26)
w=A.ap(D.GA,B.v,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c1(r,q)
v=new A.aH(v.r,B.aj,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bA())
s=A.L()
s.r=D.GA.gp(0)
d.af(v,s)
s=A.bY(k.a6(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.GA.gp(0)
d.c1(s,v)
v=-11+l
d.ah(k.a6(0,new A.r(22,v)),k.a6(0,new A.r(21,-17+l)),C.iQ(D.ZJ,1.6))
d.ah(k.a6(0,new A.r(26,v)),k.a6(0,new A.r(28,-16+l)),C.iQ(D.ZJ,1.6))
v=k.a6(0,new A.r(26,-8+l))
s=A.L()
s.r=B.v.gp(0)
d.O(v,0.9,s)
d.ah(k.a6(0,new A.r(26,-3+l)),k.a6(0,new A.r(26,1+l)),C.iQ(D.br4,1.4))
d.ah(k.a6(0,D.eAL),k.a6(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iQ(D.GA,2.4))},
bVs(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bY(new A.r(225+u*36,574+(t*13+6)),8,11)
$.T()
t=new A.as(B.T,B.Q,B.W,B.X,B.U)
t.r=D.bwV.gp(0)
a6.c1(u,t)}}u=A.bY(D.aa8.a6(0,B.cy),17,52)
$.T()
t=A.L()
t.r=D.biD.gp(0)
a6.c1(u,t)
t=A.bY(D.aa8.a6(0,B.cy),12,44)
u=D.bmf.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c1(t,s)
for(r=0;r<3;++r){v=D.drp[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.as(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=7
o.r=D.GO.gp(0)
o.d=B.bF
o.e=B.dN
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Ce.j(0.6)
n=new A.as(B.T,B.Q,B.W,B.X,B.U)
n.b=B.ac
n.c=2
n.r=t.gp(0)
n.d=B.bF
n.e=B.dN
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.fc1,D.fcB,D.fdK,D.fe4,D.fdI]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bu9,D.bqp,D.bwk][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.T()
f=A.a([],q)
a2=new A.aH(g.r,B.aj,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ac()
g=a0+d*0.6
a3=new A.i5(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.aj(a4)
a2.ac()
g=new A.i5(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.aj(a3)
a2.ac()
g=new A.bA()
f.push(g)
f=a2.f
if(f!=null)g.aj(f)
a2.ac()
g=new A.as(B.T,B.Q,B.W,B.X,B.U)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.i.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.alx.j((1-a5)*0.9)
$.T()
o=new A.as(B.T,B.Q,B.W,B.X,B.U)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.i.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ajc.j(0.1*(1-a5))
$.T()
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bVu(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.byt.j(0.18*p)
$.T()
n=new A.as(B.T,B.Q,B.W,B.X,B.U)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.as(B.T,B.Q,B.W,B.X,B.U)
n.r=D.brV.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c7p(d,e){switch(d){case 0:return e.b?D.hNW:D.b2Q
case 1:return e.b?D.hO9:D.b2O
case 2:return D.b2N
case 3:return D.b2M
case 4:return D.b2P
default:return D.b2R}},
aEp(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
RI(d,e,f,g){var w,v=this,u=D.a7m[e],t=v.c7p(e,g),s=new C.bqI(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a7m[e],l=e===0
m=B.i.D(((l?D.aNT:D.aNZ).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.aad
s.as=D.F_
if(l){s.a=o?v.aEp(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.r(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.r(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.F_
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.ey_
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.ezn
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
s.Q=D.eBH
s.as=D.aOb}if(e===2&&g.x!=null&&f<g.y){s.a=v.aEp(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aEp(f,e*3)
s.b=0.5
s.c=0.4}}C.hIU(d,u.a,u.b*1.2,t,s,f,e,null)},
bID(d,e,f){var w=new C.bVd(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd4(d){return this.c}}
C.agK.prototype={
a8(){return"_Stand."+this.b}}
C.aeH.prototype={}
C.lL.prototype={}
C.bTY.prototype={
bDa(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aR()
this.c=s},
Gq(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bTZ())
return r},
asj(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aO6(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
anr(d){var w,v,u=A.aQ(x.N),t=d,s=0
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
gzA(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b_(w,new C.bU_(this))
return B.d.gH(w)}}
C.avh.prototype={}
C.zS.prototype={}
C.alL.prototype={
gCm(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.X(w,new C.bOJ(),A.U(w).k("X<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.N3.prototype={
gaqm(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCm(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d4t(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaqm(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lL(B.a.i(s.a),p,B.d.ce(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bc_.prototype={}
C.aaK.prototype={}
C.bjm.prototype={}
C.agI.prototype={}
C.al3.prototype={
S(){return new C.al4(B.bG,A.a([],x.cC),A.a([],x.e4),null,null)},
gd6(){return this.d}}
C.al4.prototype={
gNe(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bG4(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbc1(){var w,v=this,u=v.e
if(u===$){w=v.q8(v.gcjE())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
a_(){this.a3()
this.gbc1().fR(0)},
t(){this.gbc1().t()
this.bxy()},
fR(d){this.l(new C.bMS(this))},
cjF(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fK(0,v)
if(w.c!=null)w.l(new C.bMN())},
bal(){var w,v,u,t=this,s=t.r
B.d.a5(s)
w=t.gNe()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bjm(u,(u+0.5)/v,w[t.x].b[u]))},
fK(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bMT())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.cah()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gNe()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.i.R((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.atQ(v,0.8,B.cW)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.atQ(m.cy,0.8,G.nD)
m.b_G("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.atQ(q,0.88,D.lR)
p=m.gNe()[m.x]
n=p.c
if(u===n){m.b_G("The right gourd fell! It was "+p.b[n]+".")
return}}}},
atQ(d,e,f){var w,v,u,t=new A.e0()
t.cT(B.i.R(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agI(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b_G(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.QP()}},
cah(){var w=this
if(w.x+1>=w.gNe().length){w.QP()
return}++w.x
w.bal()},
QP(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$QP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gNe().length
r=C.bIo(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bML())
w=2
return A.b(C.C7(u.a.d,r),$async$QP)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.C8(t.d,t.c.a,"catch",u.z),$async$QP)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bMM())
return A.h(null,v)}})
return A.i($async$QP,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cea()
else w=v.ch?v.ceb():A.at(new A.D(B.eG,A.x(A.a([D.aZ3,B.P,D.h1r,B.S,D.h7E,B.eb,C.uG("Play",v.gf1(v),B.cW,B.fZ,D.fJ)],x.p),B.l,u,B.e,B.M,0,B.p),u),u,u,u)
return new C.tP("Calabash Catch",w,B.fe,u)},
ceb(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hP:B.In
p.push(A.W(u,v?B.aB:B.bV,r,r,r,22))}p.push(B.aY)
v=s.x
u=s.gNe()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aXF,r,r,r))
p.push(B.bb)
v=A.n(14)
p.push(A.p(r,A.c(""+s.z,r,r,r,r,r,r,B.iQ,r,r,r),B.f,r,r,new A.o(B.bw,r,r,v,r,r,B.m),r,r,r,r,A6.D_,r,r,r))
p=A.A(p,B.l,r,B.e,B.h,0,r,r)
v=A.n(18)
t=A.K(B.cW,B.r,3)
return A.x(A.a([new A.D(D.bGq,p,r),A.p(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fMf,B.K,r,r),B.f,r,r,new A.o(D.qK,r,t,v,r,r,B.m),r,r,r,B.f2,B.bl,r,r,1/0),B.ak,A.E(A.cf(new C.bMR(s)),1)],q),B.l,r,B.e,B.h,0,B.p)},
cea(){var w=this,v=null,u=A.at(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qk,v,v,v),v,v,v),t=A.at(A.c(""+w.Q+" of "+w.gNe().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.WD,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cp(A.a([D.bg3,u,t,B.aO,new C.II(s,r,w.cx,v),B.aO,A.at(C.uG("Back to the games",new C.bMK(w),B.cW,B.kj,D.fJ),v,v,v)],x.p),v,v,B.ae,v,v,B.ah,!1)}}
C.bew.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.T(),a3=A.L()
a3.san(A.jP(B.J,new A.r(0,a0),D.d7Z,G.aCz,B.x,e))
a4.aD(new A.a3(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=G.Om.gp(0)
a4.O(new A.r(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aH(a2.r,B.aj,e,e,w)
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
w.r=D.bnd.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aH(a2.r,B.aj,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.ch(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.ch(r+14,t,r+26,w))
a2.E(new A.bA())
w=A.L()
w.r=D.aid.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.csE[q]
s=new A.as(B.T,B.Q,B.W,B.X,B.U)
s.r=D.aid.gp(0)
s.c=7
s.d=B.bF
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.as(B.T,B.Q,B.W,B.X,B.U)
s.r=D.ahv.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bod.gp(0)
a4.aD(new A.a3(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.as(B.T,B.Q,B.W,B.X,B.U)
t.r=D.ajR.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bY(new A.r(u,s),12,54)
$.T()
l=new A.as(B.T,B.Q,B.W,B.X,B.U)
l.r=D.lR.j(0.6).gp(0)
a4.c1(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bs(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.T()
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=D.aiW.gp(0)
a4.O(D.exf,14,m)
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=D.btc.gp(0)
m.c=4
m.d=B.bF
a4.ah(D.exg,D.eyn,m)
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.san(new A.amE(D.eAv,46,D.dhp,B.vC,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bY(D.eAB,8,12)
l=new A.as(B.T,B.Q,B.W,B.X,B.U)
l.r=B.c.j(0.35).gp(0)
a4.c1(m,l)
k=new A.j8(new A.eC(n.c,e,e,B.cV,e,e,e,e,e,e,D.fK2),B.K,B.cc,new A.kv(1),e,e,3,e,B.cd,e,B.cH)
k.nA(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bx(A.bY(B.cO,m.gb8(m)+8,l),B.h1)
l=new A.as(B.T,B.Q,B.W,B.X,B.U)
l.r=D.qK.gp(0)
a4.aq(j,l)
l=new A.as(B.T,B.Q,B.W,B.X,B.U)
l.r=D.lR.gp(0)
l.b=B.ac
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a4(a4,new A.r(-m/2,4-l.gb8(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.iqA(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dW,(w+1)/2)
h=A.bY(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aH($.T().r,B.aj,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.ch(h.gbD().a,s+8,w+8,s))
a3.E(new A.bA())
m=A.L()
m.r=D.a_C.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=D.Ce.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.nD.gp(0)
a4.aD(new A.a3(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bnj.gp(0)
a4.c1(new A.a3(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.h_(e,B.cH,e,e,e,A.d1(e,e,e,e,e,e,e,e,e,A.l(e,e,B.cW.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Ea,e,e),"+"+a2),B.a7,B.cc,e,B.e1,B.cd)
k.eY()
k.a4(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aC(d){return!0}}
C.R6.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aCE(w.c,w.f,v),B.az),s=A.n(10),r=A.K(B.bA,B.r,1.4)
return new A.a6(u+22,v,A.x(A.a([new A.a6(u,u,t,v),B.cM,A.p(v,A.c(w.d,v,1,B.a2,v,v,v,D.fCv,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.m),v,v,v,v,B.nb,v,v,v)],x.p),B.l,v,B.e,B.M,0,B.p),v)},
ga0(d){return this.e}}
C.aCE.prototype={
a4(d,e){var w=e.eo(B.J),v=e.gdk(),u=this.c?0.8:0
return Q.hpQ(d,w,v*0.44,this.b,0,u)},
aC(d){return d.b!==this.b||d.c!==this.c}}
C.aB5.prototype={}
C.avT.prototype={
S(){return new C.avU(A.S(x.S,x.cq),null,null)},
gd6(){return this.d}}
C.avU.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hOz(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaGt(){var w=this.z
return w===$?this.z=this.XR(0):w},
gj_(){var w,v=this.Q
if(v===$){w=this.gkR()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c1(w,-1,!1,x.S)}return v},
XR(d){var w,v,u,t,s=this.gkR()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aB5(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aB5(v[t],u[t],-1))
v=new A.e0()
v.cT(this.a.e*31+d)
B.d.dX(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dp(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eQ$
u.b=!1
B.d.a5(u.a)
u=u.goI()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.e_$.a.a5(0)
v.qI()}this.by0()},
cUb(d,e){var w,v,u,t,s,r=this
if(d>=r.gj_().length||r.gj_()[d]!==-1||B.d.q(r.gj_(),e))return
w=r.gaGt()[e]
v=r.gkR()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.csP(r,e,w,v))
A.cy(B.lX,new C.csQ(r))
return}++r.r
u=A.br(null,B.hx,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.csR(r,d,e,w,v))
u.ct(0)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkR()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cD(n,0,new C.csS())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.csT(t,r))
w=5
return A.b(C.C7(t.a.d,r),$async$kM)
case 5:t.x=f
o=t.a
w=6
return A.b(C.C8(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.l(new C.csU())
w=1
break
case 4:for(o=t.as,n=new A.dp(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eQ$
p.b=!1
B.d.a5(p.a)
p=p.goI()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.e_$.a.a5(0)
q.qI()}o.a5(0)
t.l(new C.csV(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qk,p,p,p),p,p,p)
v=r.f
v=A.at(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.WD,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tP(q,A.cp(A.a([D.ah3,w,v,B.aO,new C.II(u,t,r.ch,p),B.aO,A.at(C.uG("Back to the games",new C.csL(d),B.cW,B.kj,D.fJ),p,p,p)],x.p),p,p,B.ae,p,p,B.ah,!1),B.fe,p)}w=r.gkR()
v=r.e
s=w[v]
return new C.tP(q,new A.D(V.tp,A.x(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aXA,B.K,p,p),A.E(A.cf(new C.csM(r,s)),1)],x.p),B.l,p,B.e,B.h,0,B.p),p),B.fe,p)}}
C.bdY.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.X(b2,new C.cSU(),A.U(b2).k("X<1>")).gJ(0),b4=a9.b,b5=b4.a6(0,B.Ko)
$.T()
w=A.L()
w.r=D.lS.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a6(0,D.ex2)
u=A.L()
u.r=B.qM.j(0.5).gp(0)
u.c=10
u.d=B.bF
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.e8.aA(0,B.i.D(b2[p],0,1))
l=$.T().r
k=A.a([],s)
j=new A.aH(l,B.aj,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ac()
o=new A.ch((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.aj(n)
j.ac()
if(m<1)for(o=new A.aH(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),i=new A.v4(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bk(A.jV(b1));--h
g=new A.C4(i,h)
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
a1=new A.as(B.T,B.Q,B.W,B.X,B.U)
a1.r=B.aT.gp(0)
a1.b=B.ac
a1.c=3
b6.af(new A.aH(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aH(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),k=new A.v4(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bk(A.jV(b1));--a0
k.jP()
a1=n[a0].b
a1===$&&A.d()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.T()
a4=new A.as(B.T,B.Q,B.W,B.X,B.U)
a4.r=D.H4.gp(0)
a4.b=B.ac
a4.c=h
a4.d=B.bF
b6.af(new A.aH(l,a2,b0,new A.b7([new A.C4(k,a0),0,a1*m,!0]),a3),a4)
k.jP()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jP()
a5=n[a0].Wi(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bY(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.as(B.T,B.Q,B.W,B.X,B.U)
a3.r=B.be.gp(0)
b6.c1(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.j8(D.fBZ,B.a7,B.cc,new A.kv(1),b0,b0,b0,b0,B.cd,b0,B.cH)
a8.eY()
a8.a4(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aC(d){return!0}}
C.azR.prototype={
S(){return new C.azS(A.aQ(x.S))},
gd6(){return this.d}}
C.azS.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hPt(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
a_(){this.a3()
this.bau()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
bau(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.d2(B.tl,new C.cHN(this))},
brA(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkR()[v.e]
if(w.e[d]===w.b)v.l(new C.cHV(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cHW(v,d))
A.cy(B.iZ,new C.cHX(v))}},
cZK(){var w=this
if(!w.as&&w.f<w.gkR()[w.e].d.length)w.l(new C.cHY(w))},
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
t.l(new C.cHZ(t,s))
w=5
return A.b(C.C7(t.a.d,s),$async$kM)
case 5:t.y=f
q=t.a
w=6
return A.b(C.C8(q.d,q.c.a,"who",t.r),$async$kM)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cI_())
w=1
break
case 4:t.l(new C.cI0(t))
t.bau()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.c(""+a0.w+" of "+a0.gkR().length+" guessed",a2,a2,a2,a2,a2,a2,B.qk,a2,a2,a2),a2,a2,a2)
v=A.at(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.WD,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tP(a1,A.cp(A.a([D.bge,w,v,B.aO,new C.II(u,t,a0.ax,a2),B.aO,A.at(C.uG("Back to the games",new C.cHP(a3),B.cW,B.kj,D.fJ),a2,a2,a2)],x.p),a2,a2,B.ae,a2,a2,B.ah,!1),B.fe,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkR()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.LK,B.K,a2,a2),B.S,A.at(A.lz(new C.cHQ(a0,r),a2,B.b_,B.hx,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aA],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ax(B.cW,2,B.r,-1)
k=o+1
w.push(new A.rn(new A.bq(0,1,u),new C.cHR(),A.p(a2,new A.c3(B.aL,B.e,B.h,B.l,a2,B.p,a2,0,A.a([new A.qT(A.c(""+k,a2,a2,a2,a2,a2,a2,B.ol,a2,a2,a2),D.lR,a2,12,a2),B.ar,new A.bz(1,B.ba,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fOU,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qK,a2,new A.bE(l,l,l,l),new A.bc(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cx,B.bl,a2,a2,a2),B.b_,B.iZ,a2,new A.bf("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bO(!1,D.hfE,a2,a2,!0,a2,a2,a2,a0.gcZJ(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lS.j(0.2)
q=A.n(16)
p=A.K(D.lS,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fO,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.S,C.uG(v,a0.gqr(a0),B.cW,B.jB,D.fJ)],t),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bH,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.ds:B.cW.j(0.2)
g=new A.aP(16,16)
l=new A.ax(n.q(0,o)?B.fo:B.cW,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.xX:a2
t.push(new A.rn(new A.bq(0,i,u),new C.cHS(),A.aA(a2,A.p(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.H(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.agb,new A.o(h,a2,new A.bE(l,l,l,l),new A.bc(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jz,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cHT(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b_,B.mp,a2,new A.bf("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bZ(B.fT,t,B.br,a2,10,10))}return new C.tP(a1,A.cp(w,a2,a2,B.anS,a2,a2,B.ah,!1),B.fe,a2)}}
C.aAQ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a7(0,w.gbB())
w.a9$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.aIb.prototype={
aZ(){this.b7()
this.b5()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a7(0,w.gdR())
w.bd$=null
w.a2()}}
C.agw.prototype={
arS(d){},
asn(){var w=this,v=w.q8(new C.fdg(w))
v.fR(0)
w.Mm$!==$&&A.aR()
w.Mm$=v}}
C.aM1.prototype={
gbnZ(d){var w=this.c
return B.a.aw(w,0,Math.min(this.d,w.length))},
Wq(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.d2(E.a1f,new C.fny(w))},
btY(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.an2.prototype={
S(){return new C.an3(new C.anc(),A.a([],x.t),new A.eH(0,$.az()),$,0,null,null)},
gd6(){return this.d}}
C.an3.prototype={
gNc(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bG4(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Nk(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqy(){var w=this.r
return w===$?this.r=new C.aM1(new C.bUK(this)):w},
gaqI(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gNc()[v].c)u.push(1)
return u.length},
gbni(){var w=this.ghi(0)
return w.gzA()==null?"Elder":B.a.i(w.gzA().b)},
a_(){this.a3()
this.asn()},
t(){var w,v=this
v.gqy().t()
v.f.t()
w=v.Mm$
w===$&&A.d()
w.t()
w=v.qf$
w.V$=$.az()
w.W$=0
v.bxG()},
cOh(){var w=this
w.l(new C.bUH(w))
w.gqy().Wq(w.gNc()[w.x].a)},
Ly(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqy()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qf$.a
v.ax=u
v.ay=u+1
v.l(new C.bUF())
A.cy(B.hx,new C.bUG(v))},
brw(){var w=this.gaqI(0)/this.gNc().length*100
if(w>=90)return D.f8O
if(w>=75)return D.f6K
if(w>=60)return D.eXY
if(w>=45)return D.f0x
return D.eSd},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cwx()
w=A.bS(0,new A.e4(A.b4(m,m,m,new C.buP(n,n.qf$),B.az),m),0,0,0)
if(!n.Q){v=D.qK.j(0.96)
u=A.n(20)
t=A.K(B.cW,B.r,3)
u=A.p(m,A.x(A.a([A.c("Elder "+n.gbni()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aYt,B.K,m,m),B.S,C.uG("Start the test",n.gCc(),B.cW,B.jj,D.fJ)],x.p),B.l,m,B.e,B.M,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.m),m,m,m,m,B.bH,m,m,m)
v=u}else{v=n.x
u=n.gNc()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aYv,m,m,m)
if(n.Q){t=n.gqy()
t=t.d<t.c.length}else t=!1
if(t)u=D.fus
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ax(D.Ce,4,B.r,-1)
s.push(A.aA(m,A.p(m,A.c(q[r],m,m,m,m,m,m,D.fFM,B.K,m,m),B.f,m,D.agb,new A.o(D.bj9,m,new A.bE(o,o,o,o),new A.bc(p,p,p,p),m,m,B.m),m,m,m,m,B.P6,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bUI(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bZ(B.fT,s,B.br,new A.bf("o"+t,x.W),8,8)}u=A.x(A.a([v,B.ak,A.oP(u,B.n5,A.q8(),B.b_,B.b_,A.LW())],x.p),B.l,m,B.e,B.M,0,B.p)
v=u}return new C.tP("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fe,m)},
cwx(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.brw(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gNc()[v].c)g.push(v)
u=A.n(22)
t=A.K(B.cW,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fKl,B.K,i,i)
r=A.c("Signed by Elder "+j.gbni(),i,i,i,i,i,i,D.fIX,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fOe,i,i,i),D.eJK],q)
o=A.c(h.b,i,i,i,i,i,i,D.fQd,i,i,i)
n=j.gaqI(0)
m=j.gNc()
u=A.p(i,A.x(A.a([D.h0F,B.at,s,r,B.S,new A.an(B.z,i,B.ad,B.t,p,i),o,B.ak,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.adb,i,i,i),B.P,D.auO],q),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(D.qK,i,t,u,i,i,B.m),i,i,i,i,B.fc,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aA,new C.II(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.hgI,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ax(B.bw,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([A.c(p.a,i,i,i,i,i,i,B.hg,i,i,i),B.at,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fLy,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fNQ,i,i,i)],q),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.ds,i,new A.bE(k,k,k,k),new A.bc(r,r,r,r),i,i,B.m),i,i,i,B.cx,B.bl,i,i,i))}B.d.u(s,u)}s.push(B.aA)
s.push(A.at(C.uG("Back to the games",new C.bUB(j),B.cW,B.kj,D.fJ),i,i,i))
return new C.tP("Village School",A.cp(s,i,i,B.bQ,i,i,B.ah,!1),B.fe,i)}}
C.buP.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qf$.a
a0.Cy(e.f.MY(a1))
w=C.hkW(a1)
v=a0.c
J.bs(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqy()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d1S[s]-6
$.T()
r=new A.as(B.T,B.Q,B.W,B.X,B.U)
r.r=D.GO.gp(0)
a0.aD(new A.a3(u,340,u+12,450),r)}u=A.bx(D.ab7.cs(10),B.ii)
$.T()
r=A.L()
r.r=D.Ce.gp(0)
a0.aq(u,r)
r=A.bx(D.ab7,B.iz)
u=A.L()
u.san(A.jP(new A.r(30,96),new A.r(420,346),D.dn9,f,B.x,f))
a0.aq(r,u)
q=new A.e0()
q.cT(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bY(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.as(B.T,B.Q,B.W,B.X,B.U)
r.r=B.c.j(0.025).gp(0)
a0.c1(o,r)}u=A.L()
u.r=I.akH.gp(0)
a0.aD(new A.a3(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aD(D.flO,u)
u=A.L()
u.r=B.bM.gp(0)
a0.aD(D.flS,u)
u=A.bx(D.flI,B.hq)
r=A.L()
r.r=D.a_C.gp(0)
a0.aq(u,r)
n=B.i.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqy().gbnZ(0)
m=A.h_(f,B.cH,f,7,f,A.d1(f,f,f,f,f,f,f,f,f,D.fSx,u+(t?"|":"")),B.a7,B.cc,f,B.e1,B.cd)
m.nA(346)
J.bs(v.save())
u=A.hP(D.ab7)
r=$.lD()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hP(new A.a3(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bx(new A.a3(u,r,u+40,r+90),B.h1)
u=A.L()
u.r=D.bzm.gp(0)
a0.aq(r,u)}}else{m=A.h_(f,B.cH,f,f,f,D.fCe,B.K,B.cc,f,B.e1,B.cd)
m.nA(340)
m.a4(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqy().d*9,310)
k=Math.sin(p+r)
j=new A.as(B.T,B.Q,B.W,B.X,B.U)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghi(0).gzA()
i=(u==null?f:u.c)===D.oP?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.fdh(d,a0,i,t,h,D.eyc)),new A.y(520,new C.fdi(a0,d,t)),new A.y(575,new C.fdj(a0,d,t)),new A.y(585,new C.fdk(this,a0,d,t)),new A.y(615,new C.fdl(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.fdm())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cec(d,e){var w,v,u,t,s,r,q,p=$.T(),o=A.a([],x.v),n=new A.aH(p.r,B.aj,null,null,o)
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
aC(d){return!1}}
C.an0.prototype={
S(){return new C.an1(new C.anc(),A.S(x.S,x.i),new A.eH(0,$.az()),$,0,null,null)},
gd6(){return this.d}}
C.an1.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hOo(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj_(){var w=this.z
return w===$?this.z=this.FZ(0):w},
gaMI(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FZ(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.ce(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FZ(0):r).length);++v}s.Q=w
r=w}return r},
FZ(d){var w,v,u,t,s=this.gkR()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e2(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e0()
u.cT(this.a.e+d*7)
B.d.dX(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eH(u,new C.bUn())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
a_(){this.a3()
this.asn()},
t(){var w,v=this
v.e.t()
w=v.Mm$
w===$&&A.d()
w.t()
w=v.qf$
w.V$=$.az()
w.W$=0
v.bxF()},
arS(d){var w,v,u,t,s,r=this,q=r.gj_().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.ce(u===$?r.z=r.FZ(0):u,v)
s=r.gaMI()
s[v]=s[v]+(450*(t+0.5)/q-r.gaMI()[v])*Math.min(1,w)}},
d48(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj_().length)return
w=v.y
if(w===-1){v.l(new C.bUy(v,d))
return}if(w===d){v.l(new C.bUz(v))
return}v.l(new C.bUA(v,B.d.ce(v.gj_(),v.y),d,B.d.ce(v.gj_(),d)))},
cP_(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FZ(0):u).length))break
t=s.gkR()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FZ(0):u)[v]]===v);++v}s.l(new C.bUt(s,B.d.cw(w,new C.bUu())))},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkR().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bUv(t,s))
w=5
return A.b(C.C7(t.a.d,s),$async$kM)
case 5:t.x=f
q=t.a
w=6
return A.b(C.C8(q.d,q.c.a,"lineup",t.r*10),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bUw())
w=1
break
case 4:t.l(new C.bUx(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.c(""+l.r+" of "+l.gkR().length+" lines right",k,k,k,k,k,k,B.qk,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tP("Line Up",A.cp(A.a([D.ah3,w,B.aO,new C.II(v,u,l.ch,k),B.aO,A.at(C.uG("Back to the games",new C.bUp(d),B.cW,B.kj,D.fJ),k,k,k)],x.p),k,k,B.ae,k,k,B.ah,!1),B.fe,k)}w=A.a([],x.t)
for(t=0;v=l.gkR(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bUq(l))
u=A.bS(0,A.cf(new C.bUr(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aYv,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fKN,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fN4,B.K,k,k)],q),B.l,k,B.e,B.h,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.v.j(0.7)
o=A.n(16)
n=l.ax
m=A.K(n?D.lS:G.nD,B.r,2)
r.push(A.p(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.O(w,new C.bUs(l),x.cM).aL(0,", then ")+".",k,k,k,k,k,k,D.fPi,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.m),k,k,k,B.d4,B.bl,k,k,1/0))}if(!l.at)r.push(C.uG("That is my line!",l.gcOZ(l),B.cW,B.hn,D.fJ))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uG(w,l.gqr(l),B.cW,B.jB,D.fJ))}return new C.tP("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.M,0,B.p),k,k,12,12,k,k)],q),k),B.fe,k)}}
C.blc.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qf$.a
c7.Cy(c5.e.MY(c8))
w=C.hkW(c8)
v=c7.c
J.bs(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj_().length
t=$.T().r
s=x.v
r=new A.aH(t,B.aj,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.ch(225,500,440,470))
q=A.L()
q.r=D.a_C.gp(0)
q.b=B.ac
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aH(t,B.aj,c4,c4,l)
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
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=[B.cW,G.nD,D.lS,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b2r(c7,"OLDEST",D.eza,B.cW)
this.b2r(c7,"YOUNGEST",D.eyD,B.be)
t=A.bx(D.flC,B.h1)
s=A.L()
s.r=D.GO.gp(0)
c7.aq(t,s)
s=A.bx(D.flB,B.iz)
t=A.L()
t.r=D.Ce.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.duY())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.ce(a1===$?c5.z=c5.FZ(0):a1,f)
o=c5.gaMI()[f]
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
a9=new A.as(B.T,B.Q,B.W,B.X,B.U)
a9.r=B.cW.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.dre[B.o.F(b0,6)]
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
else b9=a3?D.eBe:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aOb
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.T2(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Kq,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.j8(new A.eC(a8,c4,c4,B.cV,c4,c4,c4,c4,c4,c4,D.fIr),B.a7,B.cc,new A.kv(1),"\u2026",c4,1,c4,B.cd,c4,B.cH)
c1.nA(q)
c2=A.bx(A.bY(new A.r(o,650),24,c1.b.c+16),B.h1)
$.T()
a8=new A.as(B.T,B.Q,B.W,B.X,B.U)
if(a6)a9=B.iI
else a9=a7?B.te:D.qK
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.as(B.T,B.Q,B.W,B.X,B.U)
if(a6)a9=D.lS
else a9=a7?G.nD:D.lR
a8.r=a9.gp(0)
a8.b=B.ac
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.r(o-a9/2,650-a8.gb8(a8)/2))
c3=new A.j8(new A.eC(""+(a2+1),c4,c4,B.cV,c4,c4,c4,c4,c4,c4,D.fIL),B.a7,B.cc,new A.kv(1),c4,c4,c4,c4,B.cd,c4,B.cH)
c3.eY()
c3.a4(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.bs(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bY(B.J,4,8)
$.T()
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=[B.cW,G.nD,D.lS,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aD(q,m)
v.restore()}v.restore()},
b2r(d,e,f,g){var w,v,u=null,t=A.h_(u,B.cH,u,u,u,A.d1(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Ea,u,u),e),B.a7,B.cc,u,B.e1,B.cd)
t.eY()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aI(0,new A.r(v/2,w.gb8(w)/2)))},
aC(d){return!1}}
C.a2I.prototype={
a8(){return"_Trip."+this.b}}
C.amX.prototype={
S(){return new C.amY(D.Yp,new A.eH(0,$.az()),$,0,null,null)},
gd6(){return this.d}}
C.amY.prototype={
gDL(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bG4(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Nk(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqy(){var w=this.f
return w===$?this.f=new C.aM1(new C.bU9(this)):w},
gUp(){var w=this.ghi(0)
return w.gzA()==null?"Grandma":B.a.i(w.gzA().b)},
a_(){this.a3()
this.asn()},
t(){var w,v=this
v.gqy().t()
w=v.Mm$
w===$&&A.d()
w.t()
w=v.qf$
w.V$=$.az()
w.W$=0
v.bxE()},
arS(d){var w,v,u,t=this
if(t.r!==D.aeW)return
w=B.dO.aA(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDL()
if(v+1>=u.length){t.r=D.aeX
t.Xm()}else{++t.w
t.ay=!1
t.r=D.Yq
t.gqy().Wq(u[t.w].a)}if(t.c!=null)t.l(new C.bU7())}},
Xm(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Xm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqy().Wq("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDL().length
r=C.bIo(t,u.z,s)
u.as=r
w=2
return A.b(C.C7(u.a.d,r),$async$Xm)
case 2:u.at=e
s=u.a
w=3
return A.b(C.C8(s.d,s.c.a,"journey",u.x*10),$async$Xm)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bU1())
return A.h(null,v)}})
return A.i($async$Xm,v)},
bsQ(){this.aVs()},
aVs(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.aeW
if(w.c!=null)w.l(new C.bU2())},
Ly(d){var w,v,u,t,s=this
if(s.r!==D.Yq)return
w=s.gDL()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bU6(s,d,v))
u=s.gqy()
t=s.w
u.Wq(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cUa(){if(this.r!==D.BM)return
this.aVs()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.e4(A.b4(s,s,s,new C.bkC(t,t.qf$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDL().length;++w){v=t.w
if(w<v||t.r===D.aeX)v=B.cW
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.bz(1,B.ba,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,B.x2,s,s,s,s),s))}p.push(B.bf)
p.push(D.h2j)
return new C.tP("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.h,0,s,s),s,s,12,12,2,s),A.ao(10,t.co3(),s,s,10,10,s,s)],q),s),B.fe,s)},
co3(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bU5(o),l=D.qK.j(0.96),k=A.n(22),j=A.K(B.cW,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.c("A long drive to the village of Elder "+o.gUp()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aYt,B.K,n,n),B.S,C.uG("Start the journey",o.gbsP(),B.cW,D.bUf,D.fJ)],x.p),B.l,n,B.e,B.M,0,B.p)
break
case 3:w=D.bfP
break
case 1:w=o.w
v=o.gDL()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ax(D.lR,2.5,B.r,-1)
t.push(A.aA(n,A.p(n,A.c(r[s],n,n,n,n,n,n,D.aXP,B.K,n,n),B.f,n,D.agi,new A.o(D.alR,n,new A.bE(p,p,p,p),new A.bc(q,q,q,q),n,n,B.m),n,n,n,n,Z.wX,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bU3(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.P,A.bZ(B.bI,t,B.br,n,8,8)],u),B.B,n,B.e,B.M,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDL().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bK(B.a9,n,n,C.uG(v,o.gcU9(),B.cW,B.jB,D.fJ),n)],x.p),B.B,n,B.e,B.M,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUp()),B.P,A.c(""+o.x+" of "+o.gDL().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aY6,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aS7(v)
u=C.aS7(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.adb,n,n,n))}w.push(B.P)
w.push(A.at(C.uG("Back to the games",new C.bU4(o),B.cW,B.kj,D.fJ),n,n,n))
w=A.x(w,B.B,n,B.e,B.M,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aFl,n,B.m),n,n,n,n,B.bl,n,n,n)}}
C.bkC.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qf$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDL(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.aeW,d2=c7*0.5
c8=A.ap(D.bkG,D.bvA,d0)
c8.toString
w=A.ap(D.ZL,G.ajs,d0)
w.toString
v=A.ap(B.uI,D.btV,d0)
v.toString
$.T()
u=A.L()
t=x.O
u.san(A.jP(B.J,new A.r(0,d2),A.a([c8,w,v],t),G.a5R,B.x,c3))
d3.aD(new A.a3(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.ws(s,60,A.a([D.buj,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.ZY.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dHJ[o]
$.T()
u=new A.as(B.T,B.Q,B.W,B.X,B.U)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.r(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.T()
j=A.a([],m)
i=new A.aH(k.r,B.aj,c3,c3,j)
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
k=new A.as(B.T,B.Q,B.W,B.X,B.U)
k.r=A.ap(l===0?D.bjc:D.byL,D.bom,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.ced(d3,new A.r(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.T()
w=A.L()
v=A.ap(D.al0,D.H4,d0)
v.toString
w.san(A.jP(new A.r(0,d2),new A.r(0,c7),A.a([v,D.bul],t),c3,B.x,c3))
d3.aD(new A.a3(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bnz.gp(0)
d3.aD(new A.a3(0,a0,c6,a1),w)
w=A.L()
w.r=D.bym.gp(0)
d3.aD(new A.a3(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.as(B.T,B.Q,B.W,B.X,B.U)
u.r=I.NF.gp(0)
d3.aD(new A.a3(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.T()
b2=new A.as(B.T,B.Q,B.W,B.X,B.U)
b2.r=D.biR.gp(0)
d3.aD(new A.a3(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aH(b1.r,B.aj,c3,c3,b2)
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
b0=new A.as(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.bwt.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.as(B.T,B.Q,B.W,B.X,B.U)
b1.r=D.fJ.gp(0)
d3.aD(new A.a3(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.as(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.GO.gp(0)
d3.aD(new A.a3(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bx(new A.a3(b0,a4,b0+60,a5),B.jG)
b0=new A.as(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.bzS.gp(0)
d3.aq(b5,b0)
b0=new A.as(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.Ce.gp(0)
b0.b=B.ac
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.j8(new A.eC(b6,c3,c3,B.cV,c3,c3,c3,c3,c3,c3,D.fGR),B.a7,B.cc,new A.kv(1),c3,c3,c3,c3,B.cd,c3,B.cH)
b7.eY()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.r(b4-b1/2,a2-b0.gb8(b0)/2))
if(a7)b8=c4.r===D.aeX
else if(r===c4.w){b0=c4.r
b0=b0===D.Yq||b0===D.BM
b8=b0}else b8=!1
if(a7){b0=c4.ghi(0).gzA()
b9=(b0==null?c3:b0.c)===D.oP?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqy()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.BM
b0=c0?C.hKn(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Yq?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.T2(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bK0(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.T()
t=new A.as(B.T,B.Q,B.W,B.X,B.U)
t.r=D.bxQ.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Yp)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.T()
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.BM&&c4.ax){b7=A.h_(c3,B.cH,c3,c3,c3,A.d1(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.cW,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,Ae.Jq,c3,c3),"BEEP BEEP!"),B.a7,B.cc,c3,B.e1,B.cd)
b7.eY()
b7.a4(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
ced(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.btP,D.bmS,g)
o.toString
if(f){w=new A.aH($.T().r,B.aj,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.ch(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.ch(v+9,t,v+16,u))
w.E(new A.bA())
t=A.L()
t.r=D.a08.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d64[r]
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=D.a08.gp(0)
p.c=4
p.d=B.bF
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a6(0,D.eBb)
$.T()
v=A.L()
v.r=D.biT.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bY(e.a6(0,D.eBc),16,60)
w=A.L()
w.r=o.gp(0)
d.c1(v,w)}},
bK0(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Yp?0.045:0,a1=a2.c
J.bs(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jr(0,a0)
for(w=0;w<2;++w){v=D.dzr[w]
u=d.ay&&d.r!==D.Yp&&v>0
J.bs(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.T()
s=new A.as(B.T,B.Q,B.W,B.X,B.U)
s.r=D.byC.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.as(B.T,B.Q,B.W,B.X,B.U)
s.r=D.bqw.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.as(B.T,B.Q,B.W,B.X,B.U)
q.r=B.bj.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.rb(D.flZ,B.h1,B.h1,B.i5,B.hS)
$.T()
t=A.L()
t.san(A.jP(D.exi,B.aa1,D.doz,G.a5R,B.x,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.as(B.T,B.Q,B.W,B.X,B.U)
s.r=D.dib[B.o.F(o,4)].gp(0)
a2.aD(new A.a3(t,-26,t+10,-19),s)}n=d.r===D.BM&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a3(s,-66,q,-36)
J.bs(a1.save())
a1.clipRRect(A.nb(A.bx(l,B.qa)),$.mQ(),!0)
k=new A.as(B.T,B.Q,B.W,B.X,B.U)
k.r=D.ZL.gp(0)
a2.aD(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.BM?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.T2(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aO2,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bx(l,B.qa)
i=new A.as(B.T,B.Q,B.W,B.X,B.U)
i.r=D.alT.gp(0)
i.b=B.ac
i.c=2
a2.aq(j,i)}d=A.bx(D.VK,B.qa)
t=A.L()
t.r=D.ZL.gp(0)
a2.aq(d,t)
J.bs(a1.save())
a1.clipRRect(A.nb(A.bx(D.VK,B.qa)),$.mQ(),!0)
C.T2(a2,new A.r(D.VK.gbD().a,-10),0,0,0.7,-0.1,f,f,D.aO2,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bx(D.VK,B.qa)
d=A.L()
d.r=D.alT.gp(0)
d.b=B.ac
d.c=2
a2.aq(t,d)
d=A.L()
d.r=AE.CD.gp(0)
a2.O(D.ezq,4,d)
d=A.L()
d.r=D.GO.gp(0)
a2.aD(D.fn7,d)
for(w=0;w<3;++w){v=D.dzt[w]
d=A.bx(new A.a3(v,-96,v+28,-79),B.jG)
t=new A.as(B.T,B.Q,B.W,B.X,B.U)
t.r=D.H4.gp(0)
a2.aq(d,t)}a1.restore()},
aC(d){return!1}}
C.aCH.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a7(0,w.gbB())
w.a9$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bi9.prototype={}
C.aCJ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a7(0,w.gbB())
w.a9$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bia.prototype={}
C.aCK.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a7(0,w.gbB())
w.a9$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bib.prototype={}
C.a7d.prototype={
B(d){var w=null
return new A.a6(1/0,this.c,A.b4(w,w,w,new C.bkJ(w),B.az),w)}}
C.bkJ.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dxg[B.o.F(n,6)]
k=$.T()
j=new A.as(B.T,B.Q,B.W,B.X,B.U)
j.r=l.gp(0)
d.aD(new A.a3(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aH(k.r,B.aj,null,null,j)
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
k=new A.as(B.T,B.Q,B.W,B.X,B.U)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aC(d){return!1}}
C.tP.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,Ag.R2,w,w,w,new C.bU0(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fE7,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c5(w,D.Zv,A.p(w,A.bo(!0,A.x(A.a([D.c9j,new A.D(D.bL6,A.A(u,B.l,w,B.e,B.h,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.bb4,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.II.prototype={
B(d){var w=null,v=this.d,u=C.aS7(v),t=C.iti(v),s=B.c.j(0.08),r=A.n(18),q=A.K(B.cW.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fGC,w,w,w)],x.p)
if(this.e)p.push(D.eDD)
p.push(B.ak)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.hg,w,w,w))
if(t!=null)p.push(new A.D(B.v2,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Ft,w,w,w),w))
return A.p(w,A.x(p,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.m),w,w,w,w,B.bH,w,w,w)}}
C.WP.prototype={
S(){return new C.bnx(A.S(x.N,x.S),B.o.F(Date.now(),1e5))},
d09(d){return this.f.$1(d)},
ge9(){return this.d}}
C.bnx.prototype={
gTq(){var w=this.d
return w===$?this.d=this.a.c:w},
a_(){this.a3()
this.Q_()},
Q_(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Q_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bUM(u.a.d),$async$Q_)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dmv[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bUL(p,(o===$?u.d=q.c:o).a,r),$async$Q_)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e5u(u,n))
return A.h(null,v)}})
return A.i($async$Q_,v)},
uF(d){return this.cr9(d)},
cr9(d){var w=0,v=A.j(x.H),u=this,t
var $async$uF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a8(t,!1).cc(A.ec(new C.e5v(d),!1,null,x.H)),$async$uF)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Q_()
return A.h(null,v)}})
return A.i($async$uF,v)},
gb7S(){var w,v,u,t=C.Nk(this.gTq()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a39(d){return this.cys(d)},
cys(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a39=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d09(r),$async$a39)
case 2:if(u.c!=null)u.l(new C.e5w(u,r))
return A.h(null,v)}})
return A.i($async$a39,v)},
Pj(d){return this.bSP(d)},
bSP(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Pj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hnj(t.gTq())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.N3("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a8(s,!1).cc(A.ec(new C.e5s(q),!1,null,r)),$async$Pj)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bl(j,new C.e5t(p))
o=s.length
B.d.cb(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a39(A.cS(s,0,A.dA(2,"count",x.S),r).dn(0)),$async$Pj)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pj,v)},
Yi(d,e){return this.bQo(0,e)},
bQo(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Yi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.ce(null,null,!0,null,new C.e5r(e),o,null,!0,!0,x.y),$async$Yi)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hnj(u.gTq()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a39(o),$async$Yi)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Yi,v)},
aaW(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e5o(this,j):h
o=o?0.55:1
w=A.ap(g,B.v,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.n(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.aa(0,B.H,g.j(0.35),B.cy,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.Wy,p,p,p),B.aY],s)
q=A.n(10)
r.push(A.p(p,A.c(i,p,p,p,p,p,p,D.fF0,p,p,p),B.f,p,p,new A.o(B.i_,p,p,q,p,p,B.m),p,p,p,p,B.zw,p,p,p))
return A.aA(p,A.d0(A.p(p,A.x(A.a([A.A(r,B.l,p,B.e,B.h,0,p,p),B.aY,A.c(e,p,2,p,p,p,p,D.fMY,p,p,p),B.cM,A.c(f,p,3,B.a2,p,p,p,D.fFK,p,p,p)],s),B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a7(B.ay,B.aC,B.x,w,p,p),B.m),p,p,p,p,B.wV,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
XM(d,e,f,g,h,i){return this.aaW(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Nk(s.gTq()),p=s.gTq(),o=C.aS7(s.e),n=C.hnj(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e5x(s),k=C.hOo(p,1).length,j=C.hOz(p,1).length,i=C.hPt(p,1).length,h=B.c.j(0.07),g=A.n(20),f=A.K(B.cW.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,K.acZ,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fKp,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.A(A.a([e,B.bb,A.E(A.x(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.WQ,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),1),A.x(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qk,r,r,r),D.h8F],a1),B.l,r,B.e,B.h,0,B.p)],a1),B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.m),r,r,r,r,B.bH,r,r,r)
f=s.XM("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.e5y(s,p),l.$1("kahoot"))
h=s.XM("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lR,new C.e5z(s,p),l.$1("fire"))
a0=s.XM("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wJ,new C.e5A(s,p),l.$1("catch"))
j=j!==0?new C.e5D(s,p):r
j=s.aaW("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hX,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e5E(s,p):r
i=s.aaW("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lQ,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.XM("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.ft,new C.e5F(s,p),l.$1("journey"))
k=k!==0?new C.e5G(s,p):r
k=A.a([g,B.aO,D.hcJ,B.P,A.lc(0.98,A.a([f,h,a0,j,i,e,s.aaW("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.eq,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.XM("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d9,new C.e5H(s,p),l.$1("school"))],a1),2,12,12,r,B.e4,!0),B.dc,A.A(A.a([D.bMW,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fF5,r,r,r)],a1),B.l,r,B.e,B.h,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ax(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fU7,B.bb,new A.bz(1,B.ba,A.x(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hs,r,r,r),A.c(""+v.gaqm(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.Ft,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),r)],a1)
if(v.gaqm(0).length>=2){f=D.lS.j(0.2)
t=new A.ax(D.lS,1,B.r,-1)
g.push(A.aA(r,A.p(r,A.W(B.fZ,D.lS,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e5I(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cW.j(0.2)
t=new A.ax(B.cW,1,B.r,-1)
f=A.aA(r,A.p(r,A.W(B.jj,B.cW,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e5J(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fo.j(0.2)
t=new A.ax(B.fo,1,B.r,-1)
B.d.u(g,A.a([B.bf,f,B.bf,A.aA(r,A.p(r,A.W(B.eo,B.fo,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e5K(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.c3(B.aL,B.e,B.h,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bE(u,u,u,u),new A.bc(h,h,h,h),r,r,B.m),r,r,r,B.d4,B.bl,r,r,r))}if(s.a.e){j=m?new C.e5B(s):new C.e5C(a2)
i=A.n(18)
h=A.K(m?B.cW:B.aT,B.r,2)
g=m?B.cW.j(0.12):B.ds
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.p(r,A.at(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.cW:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.m),r,r,r,r,B.OX,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.hdF)
k.push(B.aA)
k.push(D.auO)
return new C.tP("Family Games \xb7 "+p.b,A.cp(k,r,r,D.bH1,r,r,B.ah,!1),B.fe,r)}}
C.a0z.prototype={
a8(){return"_KPhase."+this.b}}
C.amZ.prototype={
S(){return new C.an_(D.b2H)},
gd6(){return this.e}}
C.an_.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fR(d){var w,v=this
v.l(new C.bUl(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.d2(B.fB,new C.bUm(v))},
aQV(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.l(new C.bUb(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.d2(B.fn,new C.bUc(w))},
Ly(d){var w
if(this.d!==D.aer)return
w=this.at
if(w!=null)w.a1(0)
this.b7O(d)},
b7O(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.R(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bUh(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.tl,v.giA(v))},
cNB(d){var w=this
if(w.d!==D.XW)return
if(w.e+1>=w.a.w.length)w.Z4()
else{w.l(new C.bUi(w))
w.aQV()}},
Z4(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Z4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bIo(p,u.w,t)
u.l(new C.bUe(u,s))
w=2
return A.b(C.C7(u.a.e,s),$async$Z4)
case 2:r=e
t=u.a
w=3
return A.b(C.C8(t.e,t.f,t.r,u.f),$async$Z4)
case 3:q=e
if(u.c!=null)u.l(new C.bUf(u,r,q))
return A.h(null,v)}})
return A.i($async$Z4,v)},
cOq(){var w,v,u,t,s=this,r=s.a,q=new A.e0()
q.cT(r.w.length*31+B.a.gZ(r.f))
w=s.a.w.length*900
v=A.a([new A.b3("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.dX(r,q)
for(r=A.cS(r,0,A.dA(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bQ(r,r.gJ(0),u.k("bQ<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b3(t,B.i.R(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bUj())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b2H===r){w=A.a([D.h93,B.S,A.c(s,t,t,t,t,t,t,B.X_,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fFd,t,t,t))
w.push(B.aA)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.Bw,B.K,t,t))
w.push(B.eb)
w.push(C.uG("Play",u.gf1(u),B.cW,B.fZ,D.fJ))
w=A.at(new A.D(B.eG,A.x(w,B.l,t,B.e,B.M,0,B.p),t),t,t,t)
break A}if(D.b2I===r){w=A.at(A.c(""+u.z,t,t,t,t,t,t,D.fNv,t,t,t),t,t,t)
break A}if(D.aer===r||D.XW===r){w=u.ctO()
break A}if(D.b2J===r){w=u.cee()
break A}w=t}return new C.tP(s,w,B.fe,t)},
ctO(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.XW,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aXF,j,j,j),B.aY],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.LK,j,j,j))
g.push(B.ar)
f=A.n(14)
g.push(A.p(j,A.c(""+k.f,j,j,j,j,j,j,B.iQ,j,j,j),B.f,j,j,new A.o(B.bw,j,j,f,j,j,B.m),j,j,j,j,A6.D_,j,j,j))
g=A.A(g,B.l,j,B.e,B.h,0,j,j)
f=A.n(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.bw(f,A.jD(B.bw,j,k.as<5?B.fo:B.cW,9,j,w,j),B.aq)
w=A.n(22)
v=A.K(B.cW,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.lS:G.nD,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fEg,B.K,j,j)],h),B.l,j,B.e,B.M,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fPH,B.K,j,j)
w=A.E(A.p(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.qK,j,v,w,j,j,B.m),j,j,j,j,B.fc,j,j,1/0),3)
v=A.a([],h)
for(u=k.giA(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bUg(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aEY[o]
m=new A.aP(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aFh[o],j,j,j,j,j,j,D.fGc,j,j,j),B.ar,new A.bz(1,B.ba,A.c(r[t],j,3,B.a2,j,j,j,D.fFa,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(R.ath)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c0T)
v.push(A.aA(j,new A.Ti(A.p(j,new A.c3(B.aL,B.e,B.h,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bE(l,l,l,l),new A.bc(m,m,m,m),A_.aDm,j,B.m),j,j,j,j,B.f2,j,j,j),p,B.b_,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.ak,f,B.af,w,B.af,A.E(A.lc(1.45,v,2,10,10,j,B.e4,!1),4)],h)
if(i)h.push(D.eCS)
return new A.D(B.a1P,A.x(h,B.l,j,B.e,B.h,0,B.p),j)},
cee(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cOq(),m=x.p,l=A.a([D.bf5,A.at(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qk,o,o,o),o,o,o),A.at(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.WD,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cW.j(0.25):B.ds
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.cW:B.bw,1,B.r,-1)
q=A.c(w<3?D.doQ[w]:""+(w+1),o,o,o,o,o,o,B.m8,o,o,o)
s=s?B.u:B.O
l.push(A.p(o,new A.c3(B.aL,B.e,B.h,B.l,o,B.p,o,0,A.a([new A.a6(34,o,q,o),new A.bz(1,B.ba,A.c(t.a,o,o,o,o,o,o,new A.H(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.iQ,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bE(r,r,r,r),new A.bc(u,u,u,u),o,o,B.m),o,o,o,B.cx,B.eX,o,o,o))}l.push(B.S)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.II(m,v,p.CW,o))
l.push(B.aO)
l.push(A.at(C.uG("Back to the games",new C.bUd(p),B.cW,B.kj,D.fJ),o,o,o))
return A.cp(l,o,o,B.fc,o,o,B.ah,!1)}}
C.Us.prototype={
S(){return new C.amW(A.S(x.de,x.er))}}
C.amW.prototype={
gDq(){var w,v=this,u=v.d
if(u===$){w=C.hti(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
glX(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDq().b
v=$.az()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.bd(w,B.b6,B.aP),v)}return t},
chn(d){return this.f.c_(0,d,new C.bTM(d))},
a_(){this.a3()
var w=this.gDq().c
if(w.length===0)w.push(C.heH(null,0,20,""))},
t(){var w,v,u=this.glX(0)
u.V$=$.az()
u.W$=0
for(u=this.f,u=new A.dp(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gP(w)
v.V$=$.az()
v.W$=0}this.a2()},
cNr(){if(this.gDq().c.length>=12)return
this.l(new C.bTN(this))},
jI(d){var w,v,u=this,t=u.gDq()
t.b=B.a.i(u.glX(0).a.a)
w=t.gaqm(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.T(D.fxc)
return}v=t.c
B.d.a5(v)
B.d.u(v,w)
v=u.c
v.toString
A.a8(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bTX(),r=x.p,q=A.a([A.bO(!1,D.fZe,t,t,!0,t,t,t,u.gbrH(u),t,t)],r),p=A.a([D.hdg,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glX(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.al,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ae,t,t,t,t,t,t,t,t,t,t,t,B.hg,!0,B.a7,t,B.ao,t,t,t,t),B.aA],r)
for(w=0;v=u.gDq().c.length,w<v;++w)B.d.u(p,A.a([new A.fk(new C.bTW(u,w,s),t)],r))
if(v<12)p.push(A.at(C.uG("\uff0b Add a question",u.gcNq(),B.aT,t,B.c),t,t,t))
return new C.tP("Make your game",A.cp(p,t,t,D.bGZ,t,t,B.ah,!1),q,t)}}
C.as4.prototype={
S(){return new C.aGg(A.a([],x._))},
bw(){return this.r.$0()},
qs(){return this.w.$0()},
ge9(){return this.c}}
C.aGg.prototype={
a_(){var w,v
this.a3()
this.wD()
w=this.a
v=w.c
if(v.length!==0)C.a8Y(v,w.e,w.d.w)},
wt(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hq9(r,t.e,!1,s.w,new C.e79(u),null,s),$async$wt)
case 2:w=3
return A.b(u.wD(),$async$wt)
case 3:return A.h(null,v)}})
return A.i($async$wt,v)},
a1l(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hq9(r,t.e,!0,s.w,new C.e78(u),null,s),$async$a1l)
case 2:w=3
return A.b(u.wD(),$async$a1l)
case 3:return A.h(null,v)}})
return A.i($async$a1l,v)},
wD(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wD=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BC(q.a.c),$async$wD)
case 7:p=e
if(q.c!=null)n=q.e||J.cL(p)
else n=!1
if(n)q.l(new C.e7b(q,p))
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
return A.b(C.HD(q.a.c).de(0,B.qW),$async$wD)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.e7c(q,o))
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
if(q.c!=null&&q.e)q.l(new C.e7d(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wD,v)},
PF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$PF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.T(D.fwN)
w=3
return A.b(C.HD(t.a.c),$async$PF)
case 3:r=e
w=4
return A.b(C.h47(t.a.c,r),$async$PF)
case 4:q=e
w=5
return A.b(C.HD(t.a.c),$async$PF)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.e77(t,p))
o=t.c.L(s).f
s=A.c(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dP:B.d3,null,B.t,null,s,null,B.lw,null,null,null,null,null,null,null,null,null,null))
t.a.qs()
case 1:return A.h(u,v)}})
return A.i($async$PF,v)},
IM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iBK(l),$async$IM)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.i3X(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b2C(q,p.e,l,"Each family tree costs $"+B.i.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IM)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hKx(r)
o=Date.now()
n=t.a.c
m=new C.lb(l,r.toUpperCase(),p,!0,B.Z,D.Ei,new A.V(o,0,!1),0,n,D.va,B.ck)
w=5
return A.b(C.a4B(n,m),$async$IM)
case 5:w=6
return A.b(t.wD(),$async$IM)
case 6:t.a.bw()
t.a.qs()
if(t.c==null){w=1
break}t.Fi(m)
case 1:return A.h(u,v)}})
return A.i($async$IM,v)},
Fi(d){return this.cml(d)},
cml(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Fi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.BC(u.a.c),$async$Fi)
case 2:n=l.nK(k.dL(f,new C.e7a(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hL(m,new C.arZ(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Fi)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a4B(u.a.c,o),$async$Fi)
case 6:case 5:w=7
return A.b(u.wD(),$async$Fi)
case 7:u.a.qs()
return A.h(null,v)}})
return A.i($async$Fi,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=new C.ur(p)
if(r.e)return A.at(A.ng(q,p?B.bu:B.bj,q,q,q,q,q,q,q,q),q,q,q)
if(J.cv(r.d)){w=p?B.ek:B.c
v=A.n(15)
u=A.aG(!1,B.a3,!0,q,A.aM(!1,q,!0,A.p(q,D.bZo,B.f,q,q,new A.o(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cK,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcln(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.GE(A.p(q,A.x(A.a([u,B.aO,t,B.P,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bj,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.eb,A.bI(D.hgy,q,r.gaUe(),A.bp(B.bR,q,q,q,q,q,Ak.a2c,q,new A.ba(A.n(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.h,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.m),q,q,q,q,D.bJL,q,q,1/0),15,B.ag,1.05,D.aee,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aY],v)
if(J.cL(r.d))w.push(A.aI(q,q,q,q,A.W(B.Ab,B.aV,q,q,q,q),q,q,q,new C.e7f(r),q,q,q,q,"Sync family trees with database",q))
if(J.cL(r.d))w.push(A.aI(q,q,q,q,A.W(B.A7,B.aV,q,q,q,q),q,q,q,r.gahO(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dc(E.auc,q,D.fWv,r.gaUe(),A.bp(B.bR,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.h,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.GE(r.cJA(J.t(r.d,s),o),14,B.ag,1,D.aee,q))
B.d.u(w,u)}return A.x(A.a([p,B.aA,A.x(w,B.l,q,B.e,B.h,0,B.p)],v),B.B,q,B.e,B.h,0,B.p)},
cJA(d,e){var w=null,v=e.a,u=v?B.ek:B.c,t=A.n(14),s=A.K((v?B.em:B.bO).j(0.55),B.r,1),r=A.a([new A.aa(0,B.H,B.v.j(v?0.35:0.08),B.eA,10)],x.V),q=A.n(14),p=A.p(w,D.bYt,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.n(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.garm(),m=d.d?"":" \xb7 Public",l=d.y===D.l7?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bC,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.B,w,B.e,B.h,0,B.p),1)
return A.p(w,A.aG(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bH,A.A(A.a([p,B.bb,l,A.W(B.PP,v?B.bu:B.bj,w,w,w,w)],k),B.l,w,B.e,B.h,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e7e(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.arZ.prototype={
S(){return new C.aGd(A.a([],x._),A.aQ(x.N),A.bbn())},
bw(){return this.r.$0()},
ge9(){return this.c}}
C.aGd.prototype={
a_(){var w,v,u=this
u.a3()
u.d=u.a.w
u.aep()
w=u.a
v=w.c
if(v.length!==0)C.a8Y(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.az()
w.W$=0
this.a2()},
a4l(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yI("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e6A(r),s,null,!0,!0,x.y),$async$a4l)
case 3:if(e!==!0||t.c==null){w=1
break}t.Ks()
t.l(new C.e6B(t,r))
w=4
return A.b(t.uB(),$async$a4l)
case 4:t.a.bw()
t.yI(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a4l,v)},
cz3(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.U$.push(new C.e6v(w,f,d,e))},
aWy(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dw()
u.ei(w,v,0,1)
u.k0(q,q,1,1)
this.w.sp(0,u)},
bet(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eO(new Float64Array(16))
q.ed(r)
w=q.Dv()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dw()
t.ei(r,u,0,1)
t.k0(v,v,1,1)
t.ei(-r,-u,0,1)
t.iX(0,q)
s.sp(0,t)},
aep(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aep=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.BC(u.a.c),$async$aep)
case 2:t=s.nK(r.dL(e,new C.e5X(u)))
if(t!=null&&u.c!=null)u.l(new C.e5Y(u,t))
return A.h(null,v)}})
return A.i($async$aep,v)},
yI(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
wt(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.d()
w=2
return A.b(C.hq9(o,t,!1,r,new C.e6e(u),q.a,s),$async$wt)
case 2:n=A
m=J
w=3
return A.b(C.HD(u.a.c),$async$wt)
case 3:p=n.nK(m.dL(e,new C.e6f(u)))
if(p!=null&&u.c!=null)u.l(new C.e6g(u,p))
return A.h(null,v)}})
return A.i($async$wt,v)},
Ks(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cJ(w,0)},
uB(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a4B(t,s),$async$uB)
case 2:return A.h(null,v)}})
return A.i($async$uB,v)},
a2R(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uH(q,t.a.c)){t.yI("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iCX(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2R)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Ks()
t.l(new C.e6u(t,r))
w=4
return A.b(t.uB(),$async$a2R)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2R,v)},
b4s(){var w=this.c
w.toString
A.a8(w,!1).cc(A.ec(new C.e6b(this),!1,null,x.H))},
a1y(){return this.cmn()},
cmn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.d()
if(!C.uH(m,t.a.c)){t.yI("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.Q(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.X(s,new C.e6r(),A.U(s).k("X<1>")).gJ(0)
s=A.ex([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("ci.E"))
B.d.fc(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e6s(n,t,new C.ur(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1y)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Ks()
t.l(new C.e6t(t,o))
w=6
return A.b(t.uB(),$async$a1y)
case 6:case 5:if(o.a&&t.c!=null)t.b4s()
case 1:return A.h(u,v)}})
return A.i($async$a1y,v)},
X5(d){return this.bFg(d)},
bFg(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uH(r,t.a.c)){t.yI("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e5L(t,d),r,null,!0,!0,x.P),$async$X5)
case 3:s=f
if(s==null){w=1
break}t.Ks()
t.l(new C.e5M(t,s))
w=4
return A.b(t.uB(),$async$X5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X5,v)},
a4G(d){return this.cLQ(d)},
cLQ(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.Q(s)
t=u.c
t.toString
w=2
return A.b(A.ce(null,null,!0,null,new C.e6D(u,d,new C.ur(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4G)
case 2:return A.h(null,v)}})
return A.i($async$a4G,v)},
ciA(d){var w=this,v=w.d
v===$&&A.d()
if(C.uH(v,w.a.c))w.Pk(d)
else w.a4G(d)},
akj(d,e){return this.cD4(d,e)},
cD4(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$akj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.Q(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.e6x(new C.ur(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$akj)
case 3:case 1:return A.h(u,v)}})
return A.i($async$akj,v)},
IR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.l7?3:5
break
case 3:w=6
return A.b(C.hcT(t.a.c),$async$IR)
case 6:s=e
o=t.a
r=C.hya(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.akj(!s,!r),$async$IR)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aSc(o,t.a.c)){t.yI("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lC(o,"Cancel","Remove",q.y===D.l7?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IR)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aSa(t.a.c,t.d.a),$async$IR)
case 11:t.a.bw()
o=t.c
if(o==null){w=1
break}A.ji(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IR,v)},
abS(d){return this.bQF(d)},
bQF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$abS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uH(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aR(s,new C.e5N(p))){o=A.U(s)
p.a=A.nK(new A.cM(new A.X(s,new C.e5O(d),o.k("X<1>")),new C.e5P(),o.k("cM<1,m>")))}q=p.a
if(q==null)q=d.d
t.Ks()
t.l(new C.e5Q(t,s,d,q))
w=3
return A.b(t.uB(),$async$abS)
case 3:t.yI(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$abS,v)},
Pk(d){return this.bST(d)},
bST(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uH(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4G(d),$async$Pk)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.e5U(t,d),r,null,!0,!0,x.P),$async$Pk)
case 6:s=f
if(s==null){w=1
break}t.Ks()
t.l(new C.e5V(t,s))
w=7
return A.b(t.uB(),$async$Pk)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Pk,v)},
cK0(){var w=this,v=w.d
v===$&&A.d()
if(!C.uH(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.e6C(w))
w.uB()},
a_9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aSc(n,t.a.c)){t.yI("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.Q(n)
s=$.az()
r=new A.au(B.ax,s)
q=t.d.e
p=A.bt(new A.O(q,t.gch2(),A.U(q).k("O<1,m>")).c0(0,new C.e66()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e67(t,new C.ur(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_9)
case 3:o=e
r.V$=s
r.W$=0
if(o!==!0||t.c==null){w=1
break}t.Ks()
t.l(new C.e68(t,p))
w=4
return A.b(t.uB(),$async$a_9)
case 4:t.yI("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_9,v)},
ch3(d){return B.a.i(d.toLowerCase())},
cl7(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uH(v,w)
t=r.d
s=C.irM(t)
C.iBO(q,t.b,u,C.irL(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.ur(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.X(l,new C.e6K(),A.U(l).k("X<1>")).gJ(0)
l=n?B.c4:B.hW
v=A.W(B.a3m,n?B.bu:B.bj,o,o,o,18)
u=x.p
v=A.a([new A.D(A3.D0,A.aM(!1,o,!0,new A.D(B.hK,A.A(A.a([v,B.bf,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.M,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e6L(p,d),o,o,o,o,o,o,o),o),new A.D(B.nX,p.c36(m),o)],u)
if(p.d.y===D.l7){t=B.tS.j(0.15)
s=A.n(12)
r=A.K(B.tS.j(0.45),B.r,1)
q=C.HB(p.d,p.a.c)
v.push(new A.D(B.zo,A.p(o,A.A(A.a([D.c33,B.ar,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.m),o,o,o,o,B.hz,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,15,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY],u)
if(C.uH(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GP("Undo",B.pU,p.gcK_(),m,o,o))
u.push(new C.GP("Family Book",D.bT5,p.gcl6(),m,B.uJ,o))
u.push(new C.GP("Family games",B.o5,p.gcli(),m,B.aD,o))
if(C.uH(p.d,p.a.c))u.push(new C.GP("Display settings",B.DP,p.gcmm(),m,B.b5,o))
u.push(new C.GP("Sync",B.A7,p.gahO(),m,o,o))
t=p.d
if(t.y===D.l7||C.aSc(t,p.a.c)){t=p.d.y===D.l7?"Remove shared tree":"Delete tree"
u.push(new C.GP(t,B.eo,p.gbQP(),m,B.fo,o))}if(C.uH(p.d,p.a.c))u.push(new C.GP("Add member",B.xi,new C.e6M(p),m,B.bR,o))
v.push(new A.D(U.anT,A.A(u,B.l,o,B.e,B.h,0,o,o),o))
if(p.d.garm()===0){u=A.at(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cf(new C.e6N(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.W(n?P.a3q:Ad.PQ,o,o,o,o,o)
v.push(A.at(A.hu(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e6O(p),o),o,o,o))}return A.c5(o,l,A.bo(!0,A.x(v,B.B,o,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c36(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.n(22)
v=A.a([new A.aa(0,B.H,B.h6.j(0.35),B.dp,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.W(B.A_,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a3,!0,m,A.aM(!1,m,!0,A.p(m,D.c6q,B.f,m,m,new A.o(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cK,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahO(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fHg,m,m,m)
r=r.garm()
p=n.d.garm()===1?"member":"members"
o=x.p
p=A.a([s,B.bb,A.E(A.x(A.a([q,B.bC,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.B,m,B.e,B.h,0,B.p),1)],o)
if(C.uH(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c3i,m,m,m,n.gcwm(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.h,0,m,m)
r=n.d.d
q=r?B.jC:B.nd
r=r?"Private":"Public"
r=A.E(n.axV(q,"Privacy",r,n.a.d.w?n.gcIU():m),1)
q=A.E(n.axV(B.xo,"Tree code",n.d.c,new C.e5W(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.aa,q,B.aa,A.E(n.axV(D.bUN,"Collaborators",p,n.gc86()),1)],o),B.l,m,B.e,B.h,0,m,m)],o)
if(n.d.y===D.l7){s=B.c.j(0.15)
B.d.u(p,A.a([B.P,A.aG(!1,B.a3,!0,A.n(999),A.aM(!1,A.n(999),!0,new A.D(B.fM,A.A(A.a([A.W(B.o6,B.c,m,m,m,14),B.e5,A.c("View only",m,m,m,m,m,m,B.acF,m,m,m)],o),B.l,m,B.e,B.M,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.bw(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.HH,A.x(p,B.B,m,B.e,B.h,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.caN,B.m),m,m,m,m,m,m,m,1/0)},
axV(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a3,!0,A.n(14),A.aM(!1,A.n(14),!0,new A.D(K.ap9,A.x(A.a([A.W(d,B.c,w,w,w,18),B.at,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rB,A.c(f,w,1,B.a2,w,w,w,AF.xZ,w,w,w)],x.p),B.l,w,B.e,B.h,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bid.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gar(r)&&s.c.length===0)return B.bL
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.big(s,t),new A.av(w,v))],x.p)
r=r.gdS(r)
B.d.u(u,r.dP(r,new C.dk8(this),x.l))
r=s.c
B.d.u(u,new A.O(r,new C.dk9(this),A.U(r).k("O<1,w>")))
return new A.D(B.v6,new A.a6(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.L8.prototype={}
C.GT.prototype={}
C.bif.prototype={
gbn4(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aLW.prototype={}
C.big.prototype={
bSu(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.T()
v=A.L()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bF
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aH(q.r,B.aj,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.i5(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.i5(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bA())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bA.gp(0)
d.af(t,q)},
bSr(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.dkt())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aR(a0,new C.dku(f))
t=new A.O(a0,new C.dkv(f),A.U(a0).k("O<1,G>")).c0(0,new C.dkw()).cD(0,1/0,B.pr)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.m1(n)
k=Math.min(10,m/2)
m=$.T()
j=A.a([],r)
i=new A.aH(m.r,B.aj,null,null,j)
j.push(new A.aZ(w,v-k))
i.ac()
m=l*k
h=new A.ch(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ac()
m=new A.ch(o,v,o,v+k)
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
w.r=B.bR.j(0.75).gp(0)
w.c=2.2
w.b=B.ac
w.d=B.bF
w.e=B.dN
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bSr(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bSu(d,w,r.a,r.b)}},
aC(d){return d.b!==this.b}}
C.bm3.prototype={
gceg(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aFy
switch(w.c.a){case 0:return D.d4y
case 1:return D.di5
case 2:return D.dBv}},
gcej(){var w=this.c,v=C.hJK(w.w),u=C.hJK(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=t.gceg(),p=t.c,o=O.bGY(p.f),n=t.gcej(),m=x.V,l=A.a([new A.aa(0,B.H,B.d.gal(q).j(0.35),B.cO,10)],m),k=r?B.aw:B.c,j=A.K(r?B.aw:B.c,B.r,2)
if(o!=null)w=A.tT(B.z,s,B.cp,B.bX,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a7(B.a5,B.a9,B.x,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.ic(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a7(B.ay,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Dd,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.K(r?B.aw:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.c(""+k,s,s,s,s,s,s,D.fSc,s,s,s),B.f,s,s,new A.o(B.ce,s,w,j,s,s,B.m),s,s,s,s,D.bLK,s,s,s),s,s,s,-6,-4,s))}k=r?B.cu:B.c
j=A.n(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.aa(0,B.H,B.v.j(r?0.3:0.06),B.dQ,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cu,s,s,s,s,s,s,s,s,u,s,s,B.F,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bj,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a6(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.at,A.p(s,A.x(p,B.l,s,B.e,B.M,0,B.p),B.f,s,D.b9e,new A.o(k,s,w,j,m,s,B.m),s,s,s,s,D.bLV,s,s,s)],v),B.l,s,B.e,B.h,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bhg.prototype={
a4(d,e){var w,v,u,t,s
$.T()
w=A.L()
v=this.b
u=v?B.c:D.bmq
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aC(d){return d.b!==this.b}}
C.bAc.prototype={
B(d){var w=this,v=null,u=new C.ft9(w),t=w.c,s=t?B.cu:B.c,r=A.n(12),q=u.$3(B.ib,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bw:B.fy,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xk,"Zoom out",w.e)
return A.aG(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bw:B.fy,v,v,v,1,v,v,v,v,v,22),u.$3(B.arC,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.M,0,B.p),B.f,s,4,v,B.dG,v,v,v,B.ai)}}
C.bpq.prototype={
B(d){var w=this,v=null,u=B.bR.j(0.15),t=A.K(B.bR,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.p(v,A.x(A.a([A.W(s?P.a3q:Ad.PQ,B.bR,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fOa,v,v,v)],r),B.l,v,B.b9,B.h,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.ak,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fLW,B.K,v,v)],r)
if(s){t=A.a([B.ak],r)
s=w.d
B.d.u(t,new A.O(s,new C.f31(w),A.U(s).k("O<1,w>")))
B.d.u(u,t)}return new A.a6(84,v,A.x(u,B.l,v,B.e,B.h,0,B.p),v)}}
C.a0N.prototype={
S(){return new C.aEG()},
bw(){return this.Q.$0()},
ge9(){return this.w}}
C.aEG.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a3()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.az()
r.d!==$&&A.aR()
r.d=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aR()
r.e=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aR()
r.f=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aR()
r.r=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aR()
r.w=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aR()
r.x=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zD:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.itj(w.r,w.f)
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
QQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$QQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hya(p.y,p.w)
w=3
return A.b(A.lT(t.a.w,B.Kj),$async$QQ)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b2C(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$QQ)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.i3Y(p.y,p.w)
t.a.bw()
case 5:w=7
return A.b(Am.DX(78,800),$async$QQ)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dAJ(t,q))
case 1:return A.h(u,v)}})
return A.i($async$QQ,v)},
cei(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.d()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.ie(B.o.v(1000*Date.now()),w,D.zD,null,null,null,"","","","","",1,!1,0)
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
s=v.aH7(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a8(k,!1).N(s)},
abt(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$abt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dAI(r),s,null,!0,!0,x.y),$async$abt)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a8(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$abt,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.I,i=new C.ur(j),h=l.a.e,g=A.U(h).k("X<1>"),f=A.B(new A.X(h,new C.dAS(l),g),g.k("M.E"))
h=j?B.ek:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bK6,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hk(A.aM(!1,k,!0,new A.D(B.m_,A.W(B.eo,B.pE,k,k,k,17),k),B.cK,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbNn(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.k8:B.iH
t=O.bGY(l.as)
if(l.as==null)s=A.W(B.pN,j?B.bu:B.bj,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hm(u,t,s,k,42),A.ao(0,A.hm(B.bR,k,D.bXw,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcef(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aEI(t,"Full name",B.ms,1,1,i,B.mI)
u=l.y
u===$&&A.d()
u=A.x(A.a([t,B.S,new C.bm1(i,u,new C.dAT(l),k)],v),B.l,k,B.e,B.h,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.F,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bDn],q)
o=l.a.e
B.d.u(p,new A.O(o,new C.dAU(),A.U(o).k("O<1,eL<m?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.F,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bDp],q)
B.d.u(q,new A.O(f,new C.dAW(),A.U(f).k("O<1,eL<m?>>")))
o=A.x(A.a([t,B.ak,new C.af2(i,r,"Who is their parent?",p,new C.dAX(l),k,o),B.aA,n,B.ak,new C.af2(i,m,"Who is their spouse / partner?",q,new C.dAY(l),k,o)],v),B.am,k,B.e,B.h,0,B.p)
q=l.f
q===$&&A.d()
q=C.aEI(q,"Birth date",D.aqN,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aEI(m,"Birth place",B.a3G,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aEI(n,"Date of death (if deceased)",D.asV,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aEI(p,"Occupation",A1.QS,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.an(B.z,k,B.ad,B.t,w,k),B.aA,s,B.bx,new C.af3(i,"Identity",u,k),B.af,new C.af3(i,"Family links",o,k),B.af,new C.af3(i,"Life details",A.x(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aEI(r,"Notes",B.l9,5,3,i,k)],v),B.l,k,B.e,B.h,0,B.p),k),B.af,new C.aEH(i,"Child order",l.cmD(l.at),new C.dAZ(l),new C.dB_(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hn7(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dB0(l):k
B.d.u(r,A.a([B.S,new C.aEH(i,"Visible in tree",u,w,new C.dB1(l),k)],v))}r.push(B.S)
w=j?B.k8:B.iH
u=A.n(14)
t=A.K(j?B.em:B.bO,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.j7(k,B.bR,k,B.ag,k,new C.dB2(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.m),k,k,k,k,P.any,k,k,k))
r.push(B.bx)
w=j?B.aS:B.aw
j=j?B.em:B.bO
r.push(A.A(A.a([A.E(A.dW(B.om,new C.dAV(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cm,k,new A.ba(A.n(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.bb,A.E(A.bI(D.fon,k,l.gceh(),A.bp(B.aV,k,k,0,B.c,k,B.cm,k,new A.ba(A.n(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.h,0,k,k))
r.push(B.at)
return A.eh(B.fe,k,B.ag,h,new A.a6(420,k,A.cb(A.x(r,B.am,k,B.e,B.M,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.aos,k,B.anJ,new A.ba(g,B.a1),k,k)},
cmD(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.af3.prototype={
B(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.F,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.k8:B.iH,s=A.n(16)
return A.x(A.a([new A.D(B.a2g,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.K(v?B.em:B.bO,B.r,1),s,w,w,B.m),w,w,w,w,B.bl,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)}}
C.bm2.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ek:B.c,r=A.n(12),q=A.K((t?B.em:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bC(u,B.eU,u,B.tq,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bu:B.bj,u,u,u,u,u,u,u,u,u,u,u,B.cE,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bR,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.al,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ae,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.af2.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ek:B.c,s=A.n(12),r=A.K((u?B.em:B.bO).j(0.85),B.r,1),q=A.W(B.tz,u?B.bu:B.bj,v,v,v,v),p=A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ek:B.c
return A.p(v,new A.EJ(A.a67(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,v,v,v,B.cE,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.m),v,v,v,v,B.l5,v,v,v)}}
C.bm1.prototype={
B(d){var w=new C.dB3(this)
return A.A(A.a([w.$3(D.x4,"Male",B.QC),B.aa,w.$3(D.oP,"Female",B.Qo),B.aa,w.$3(D.zD,"Other",B.o2)],x.p),B.l,null,B.e,B.h,0,null,null)}}
C.aEH.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.k8:B.iH,r=A.n(14),q=A.K(t?B.em:B.bO,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,13,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.x(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.B,v,B.e,B.h,0,B.p),1),new C.aKY(u,B.xk,w.f,v),B.bf,new C.aKY(u,B.ib,w.r,v)],o),B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.m),v,v,v,v,B.ez,v,v,v)}}
C.aKY.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bR.j(0.12)
else w=s.c.a?B.ek:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bR
else t=(s.c.a?B.bu:B.bj).j(0.4)
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a6(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.af4.prototype={
bWF(d){switch(d.a){case 0:return B.bR
case 1:return B.bA
case 2:return B.cB}},
bWG(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b03(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AZ(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ek:B.c
u=A.n(12)
t=A.K((w?B.em:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.W(f,B.bR,p,p,p,18),B.ar],s))
q=A.c(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bj,p,p,p,p,p,p,p,p,9,p,p,B.F,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.at,A.c(o,p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.B,p,B.e,B.h,0,B.p),1))
return A.p(p,A.A(r,B.B,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.m),p,p,p,B.cx,B.zl,p,p,1/0)},
ag9(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.F,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.k8:B.iH,s=A.n(16),r=A.K(v?B.em:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a2g,u,w),A.p(w,A.x(e,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.m),w,w,w,w,B.bT,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hPg(r,q),o=q.c,n=t.bWF(o),m=O.bGY(q.f),l=t.e.a,k=l?B.ek:B.c,j=A.n(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.l7?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bu:B.bj,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.aa(0,B.H,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.hm(u,m,m==null?A.W(B.pN,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.es,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.K(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.c(t.bWG(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.m),s,s,s,s,B.lY,s,s,s),s,s,s)
u=x.p
i=A.a([t.AZ("Full name",i,B.ms)],u)
if(p>0)i.push(t.AZ("Child order","#"+p,B.Qu))
r=A.a([h,B.at,r,B.aO,l,B.S,v,B.bx,t.ag9("Identity",i),B.af,t.ag9("Life details",A.a([t.AZ("Birth date",q.w,D.aqN),t.AZ("Birth place",q.x,B.a3G),t.AZ("Date of death",q.y,D.asV),t.AZ("Occupation",q.z,A1.QS)],u)),B.af,t.ag9("Family links",A.a([t.AZ("1. Parent",t.b03(q.d),B.I7),t.AZ("2. Spouse",t.b03(q.e),B.In)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.ag9("Notes",A.a([t.AZ("Notes",q,B.l9)],u))],u))
r.push(B.bx)
r.push(A.bI(B.LR,s,new C.dBd(d),A.bp(B.aV,s,s,s,s,s,B.cm,s,new A.ba(A.n(14),B.a1),s,s,s)))
return A.eE(s,k,new A.cQ(B.mg,A.cb(A.x(r,B.am,s,B.e,B.M,0,B.p),B.t,s,B.y,s,s,B.wZ,s,s,B.ah),s),s,s,s,B.HK,s,B.d7,s,new A.ba(j,B.a1),s)}}
C.GP.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bj
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.v8,A.hk(A.aG(!1,B.a3,!0,A.n(8),A.aM(!1,A.n(8),!0,new A.a6(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.as1.prototype={
f4(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.ab().ag())
w=u.c
v=A.U(w).k("O<1,a9<m,@>>")
w=A.B(new A.O(w,new C.chl(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iW(w,new C.chm(),t,x.fO))
return s}}
C.as2.prototype={
S(){return new C.aGf(A.a([],x.bF))},
gd6(){return this.c}}
C.aGf.prototype={
a_(){this.a3()
this.Kz()},
Kz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Kz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.chp(t.a.c),$async$Kz)
case 3:r=e
w=4
return A.b(C.BC(t.a.c),$async$Kz)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rB(q,new C.e6X(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.e6Y(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Kz,v)},
zh(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
Lp(d,e){return this.cMx(d,e)},
cMx(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Lp=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.e71(q,e))
t=3
w=6
return A.b(d.$0(),$async$Lp)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.e72(q))
$.eT.mJ()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Lp,v)},
YT(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pP(r,s.c,s.e),$async$YT)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lp(new C.e6U(t),"Preparing download\u2026"),$async$YT)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YT,v)},
YX(d){return this.bUx(d)},
bUx(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pP(r,s.c,s.e),$async$YX)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Lp(new C.e6V(t,d),"Preparing file\u2026"),$async$YX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YX,v)},
aia(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aia=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.y1.cq().N7(B.TG,B.vb,!0),$async$aia)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jX(o,0,null)
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
case 6:u=A.HJ()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aia,v)},
Zz(d){return this.c41(d)},
c41(d){var w=0,v=A.j(x.H),u=this
var $async$Zz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Lp(new C.e6W(u,d),"Restoring family trees\u2026"),$async$Zz)
case 2:return A.h(null,v)}})
return A.i($async$Zz,v)},
Zy(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aia(),$async$Zy)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Zz(s),$async$Zy)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zy,v)},
a3J(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3J=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pP(r,s.c,s.e),$async$a3J)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lp(new C.e70(t),"Creating QR code\u2026"),$async$a3J)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3J,v)},
a3j(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DV()){t.zh("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a8(s,!1).cc(A.ec(new C.e6Z(),!0,null,x.N)),$async$a3j)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Zz(r),$async$a3j)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a3j,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===B.I,n=o?B.Cp:B.hW,m=o?D.am_:B.aS,l=o?B.aM:B.bO,k=o?B.aS:B.aw,j=new C.dkx(n,m,l,k,o?B.bP:B.bj)
l=A.aI(p,p,p,p,A.W(B.eH,k,p,p,p,20),p,p,p,new C.e74(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eS(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dk5(!0,B.jD,B.aH,B.aH,q.r?p:q.gcCT(),j,s,"Show restore QR"),1),B.ar],u))}s=q.e
r=q.r?p:q.gcyY()
t.push(A.E(C.dk5(!s,B.jE,B.b2,B.bk,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.h,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dk5(!1,B.hO,B.aV,B.bR,q.r?p:q.gbUq(),j,"Photos & books included","Download all trees"),1),B.ar],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dk5(!1,S.A8,B.au,B.aQ,q.r?p:q.gc3Z(),j,s,"Upload backup file"),1))
l=A.a([new C.bie(v,l,p),B.lk,new C.aej(j,"QR restore",p),B.S,t,B.dc,new C.aej(j,"Backup files",p),B.S,A.A(r,B.l,p,B.e,B.h,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.lk,new C.aej(j,"One tree",p),B.S],u)
B.d.u(v,J.b8(q.d,new C.e75(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cp(l,p,p,AL.a28,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.aa(0,B.H,B.v.j(o?0.3:0.1),B.dp,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bo(!0,A.p(p,A.A(A.a([P.aW3,B.bb,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.m),p,p,p,p,A8.D6,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dkx.prototype={}
C.bie.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.aa(0,B.H,B.aV.j(0.32),B.kN,28)],x.V)
t=A.ao(p,A.W(B.vw,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ae,A.A(A.a([A.p(p,D.c5U,B.f,p,p,new A.o(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.ph,A.E(A.x(A.a([D.fXy,B.P,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.B,p,B.e,B.h,0,B.p),1)],q),B.B,p,B.e,B.h,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.cea,B.m),p,p,p,p,p,p,p,p)}}
C.aej.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3),B.aa,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)}}
C.bic.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.aa(0,B.H,B.aH.j(0.1),B.cO,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aG(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eG(A.d0(new A.D(E.a1M,A.x(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.m),q,q,q,q,B.tt,q,q,q),B.af,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bC,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cE,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.B,q,B.e,B.h,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bih.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eG(new A.D(B.eX,A.A(A.a([A.p(v,D.c53,B.f,v,v,new A.o(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.tt,v,v,v),B.bb,A.E(A.x(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.B,v,B.e,B.h,0,B.p),1),A.W(B.hO,o,v,v,v,20)],n),B.l,v,B.e,B.h,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a16.prototype={
S(){return new C.aGe()},
gd6(){return this.c}}
C.aGe.prototype={
a_(){this.a3()
this.ab0()},
ab0(){var w=0,v=A.j(x.H),u=this,t
var $async$ab0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(T.b5h(u.a.c,B.EX),$async$ab0)
case 2:t=e
if(u.c!=null)u.l(new C.e6P(u,t))
return A.h(null,v)}})
return A.i($async$ab0,v)},
ajC(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ajC=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.e6Q(q))
t=4
p=T.hA_(q.a.d,B.EX)
if(p==null){n=A.bb("Could not read this QR code.")
throw A.Y(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(T.auk(n.e,m,l,B.EX,p,n.f),$async$ajC)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.e6R(q))
q.c.L(x.q).f.T(D.fy0)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ac(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(B.a.eq(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.l(new C.e6S(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ajC,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=p?B.nM:AC.qL,n=p?B.iS:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eS(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.hda,q,q,q,1,q,!0)
w=A.n(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qs(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.P,u,B.bx,t,B.P,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.b9,B.h,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.m),q,q,q,q,B.ae,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bz,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcyG()
if(u)u=B.Lh
else u=A.W(r.e===!0?B.hn:AR.aqM,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a6(1/0,q,A.en(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ca,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aV,q,B.hr,q,q,q,new A.ax(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hy,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.S)
w.push(new A.a6(1/0,q,A.bI(Au.Bx,q,new C.e6T(d),A.bp(B.aV,q,q,q,q,B.hr,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.ae,A.x(w,B.l,q,B.e,B.h,0,B.p),q),q,!1,!1,q,q)}}
C.a17.prototype={
S(){return new C.bny(A.A8(B.z9,B.ot,B.vD))}}
C.bny.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c5(A.eS(w,w,w,!0,!0,B.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h4Q,w,w,w,1,w,!0),B.v,A.A7(this.d,B.bX,new C.e76(this,d)),w,!1,!1,w,w)}}
C.b17.prototype={
B(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.T8,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.md.prototype={}
C.a8_.prototype={
S(){return new C.bnc(null,null)}}
C.bnc.prototype={
a_(){var w=this,v=null
w.a3()
w.d=A.br(v,B.tl,v,1,v,w)
w.e=A.br(v,B.nQ,v,1,v,w)
w.a.toString
w.d.cX(0)
w.e.cX(0)},
bx(d){var w,v,u=this
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
this.bAu()},
B(d){var w,v,u=this,t=B.d.dC(D.a7L,new C.dSZ(u),new C.dT_())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cFn(A.c9(new A.hz(A.a([w,v],x.dS)),new C.dT0(u,t),null),!0)}}
C.bnb.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b4T(d,e)
break
case"house":p.mp(d,e,D.dny)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdk()
$.T()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mv(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BN(d,e,12)
p.yT(d,e,B.lt,5,14)
break
case"grocery":p.cnn(d,e)
break
case"calculator":p.cn4(d,e)
break
case"lumber":p.cnv(d,e)
break
case"kitchen":p.cnq(d,e)
break
case"landscape":p.mp(d,e,D.do8)
s=new A.aH($.T().r,B.aj,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.ch(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.ch(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bA())
w=A.L()
w.r=B.eq.j(0.85).gp(0)
d.af(s,w)
p.BN(d,e,8)
p.yT(d,e,B.iI,4,18)
break
case"plumbing":p.cnF(d,e)
break
case"electrical":p.mp(d,e,D.dAz)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.T()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aD(new A.a3(0,0,0+e.a,0+e.b),u)
p.mv(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mv(d,e,B.oG.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BN(d,e,10)
break
case"store":p.cnP(d,e)
break
case"paint_remodel":p.cnA(d,e)
break
case"roofing":p.cnH(d,e)
break
case"warehouse":p.cnW(d,e)
break
case"vehicles":p.cnU(d,e)
break
case"farm":p.cnh(d,e)
break
case"restaurant":p.cnG(d,e)
break
case"tools":p.cnS(d,e)
break
case"wallet":p.cnV(d,e)
break
case"concrete":p.cna(d,e)
break
case"blueprint":p.cn2(d,e)
break
default:p.b4T(d,e)}},
mp(d,e,f){var w,v=new A.a3(0,0,0+e.a,0+e.b)
$.T()
w=A.L()
w.san(new A.a7(B.ay,B.aC,B.x,f,null,null).az(0,v))
d.aD(v,w)},
mv(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdk()/2-h
$.T()
w=A.L()
w.b=B.ac
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.bX(t,s),u,u+0.1439896632895322-u,!1,w)}},
yT(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdk()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.T()
r=new A.as(B.T,B.Q,B.W,B.X,B.U)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BN(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.T()
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b4T(d,e){var w,v=this
v.mp(d,e,D.dyK)
w=v.c
v.mv(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mv(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bSn(d,e,B.hZ,w)
v.yT(d,e,B.c.j(0.7),6,8)},
bSn(d,e,f,g){var w,v,u,t,s,r
$.T()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aD(new A.a3(16,r,t,r+3),w)}},
cnn(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mp(d,e,D.cAb)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ap(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.T()
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=D.dly[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mv(d,e,B.c.j(0.35),w,16)
l.yT(d,e,B.iI,5,12)},
cn4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mp(d,e,D.cAj)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdk()
$.T()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.O(new A.r(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h_(h,B.cH,h,h,h,h,B.a7,B.cc,h,B.e1,B.cd)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dq3[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.eC(r,h,h,B.cV,h,h,h,h,h,h,new A.H(!0,q,h,h,h,h,14+m*4,B.F,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eY()
p.a4(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ap(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cAl[o]
l=B.kW.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.eC(m,h,h,B.cV,h,h,h,h,h,h,new A.H(!0,l,h,h,h,h,12+k*3,B.F,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eY()
p.a4(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ap(o,3)*0.38)+Math.sin(n)*6))}i.mv(d,e,B.c.j(0.35),w*1.5,14)
i.mv(d,e,B.eE.j(0.55),-v*3.141592653589793*2,8)
i.mv(d,e,B.oC.j(0.4),r*2.8,22)
i.yT(d,e,B.pz,8,10)
i.BN(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.T()
v=new A.as(B.T,B.Q,B.W,B.X,B.U)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
cnv(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,A_.aCF)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bx(new A.a3(20,r,u,r+10),B.hq)
$.T()
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=A.ap(B.h8,B.ow,(s+1)/2).gp(0)
d.aq(q,p)}o.mv(d,e,B.h8.j(0.35),w,15)
o.BN(d,e,8)},
cnq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mp(d,e,D.dm7)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.T()
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mv(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
l.yT(d,e,B.qx,4,14)},
cnF(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mp(d,e,D.d96)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.T()
o=new A.as(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yT(d,e,B.pD,6,12)
n.mv(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cnP(d,e){var w,v,u,t,s,r,q,p=this
p.mp(d,e,D.cOb)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bx(new A.a3(r,14,r+u,22),B.jG)
$.T()
q=new A.as(B.T,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.fw,B.bM,(s+1)/2).gp(0)
d.aq(r,q)}p.mv(d,e,B.c.j(0.3),w,16)
p.BN(d,e,8)
p.yT(d,e,B.wD,5,13)},
cnA(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dg6)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bx(new A.a3(r,q,r+8,q+(18+s*22)),B.iz)
$.T()
r=new A.as(B.T,B.Q,B.W,B.X,B.U)
r.r=[B.iF,B.dC,B.bM,B.eC][t].j(0.85).gp(0)
d.aq(q,r)}this.mv(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cnH(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dd8)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.T()
q=new A.as(B.T,B.Q,B.W,B.X,B.U)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yT(d,e,B.cA,7,11)},
cnW(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.cR1)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bx(new A.a3(q,p,q+(t-s*8),p+16),B.hq)
$.T()
q=new A.as(B.T,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.cA,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mv(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cnU(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dF7)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bx(new A.a3(s,r,s+28,r+8),B.hq)
$.T()
q=new A.as(B.T,B.Q,B.W,B.X,B.U)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.BN(d,e,6)},
cnh(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.dkw)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.T()
s=A.L()
s.r=B.oG.j(0.75).gp(0)
d.O(new A.r(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=B.hX.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.mv(d,e,B.oG.j(0.35),w,14)},
cnG(d,e){var w,v,u,t,s,r,q=this
q.mp(d,e,D.dnl)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bY(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.T()
r=new A.as(B.T,B.Q,B.W,B.X,B.U)
r.r=B.c.j(0.22).gp(0)
d.c1(s,r)}q.yT(d,e,B.qx,5,16)
q.BN(d,e,7)},
cnS(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,D.dCk)
w=o.c
v=w*3.141592653589793
o.mv(d,e,B.ow.j(0.55),v*3,10)
o.mv(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.T()
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=B.ow.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
cnV(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,D.dFT)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bx(new A.a3(q,p,q+36,p+22),B.jG)
$.T()
q=new A.as(B.T,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.iI,B.oG,r).gp(0)
d.aq(p,q)}o.BN(d,e,9)
o.mv(d,e,B.c.j(0.4),w*2.2,12)},
cna(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.dtd)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bX(new A.r(v,u),34)
$.T()
s=A.L()
s.b=B.ac
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cQ(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=B.bO.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
cn2(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dov)
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
u.r=B.dC.j(0.45).gp(0)
d.aD(new A.a3(0,q,0+v,q+6),u)
this.mv(d,e,B.lt.j(0.45),-r*3.141592653589793*2,11)},
aC(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.av5.prototype={
a0X(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aTc(),$async$a0X)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.aai(s),$async$a0X)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0X,v)},
aib(d){return this.cqe(d)},
cqe(d){var w=0,v=A.j(x.H),u=this,t
var $async$aib=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iBY(d),$async$aib)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aib,v)},
B(d){var w,v,u=null,t=A.Q(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.k8:B.iH
w=x.p
v=A.a([C.aTA(!0,B.rO,1/0,B.r7,u,s,1/0)],w)
if(!r)v.push(new A.bP(new A.o(u,u,u,u,u,new A.a7(B.aX,B.b1,B.x,A.a([B.L,B.v.j(0.35)],x.O),u,u),B.m),B.bm,new A.bK(B.aX,u,u,new A.D(B.tn,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aDD,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.dc(D.bZh,u,D.fTC,new C.cr6(this,d),A.bp(B.aV,u,u,u,B.c,u,B.jU,u,u,u,u,B.cl)),1),B.aa,A.E(A.en(D.c7d,u,D.h81,this.gch0(),A.di(u,u,B.v.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jU,u,u,D.b7O,u,u,u,B.cl)),1)],w),B.l,u,B.e,B.h,0,u,u),u,u,8,8,u,u))
return new A.fJ(1.7777777777777777,A.aG(!1,B.a3,!0,B.rO,new A.an(B.a0,u,B.b4,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.ai),u)}}
C.aOo.prototype={
aZ(){this.b7()
this.b5()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a7(0,w.gdR())
w.bd$=null
w.a2()}}
C.aWy.prototype={}
C.aWx.prototype={}
C.aUz.prototype={}
C.a_K.prototype={
S(){return new C.aBo()}}
C.aBo.prototype={
a_(){var w,v,u=this
u.a3()
u.a.toString
w=new A.bd("",B.b6,B.aP)
v=$.az()
u.d!==$&&A.aR()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.az()
w.W$=0
this.a2()},
Lc(){var w,v,u=this,t=u.d
t===$&&A.d()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.T(D.fyw)
return}t=u.c
t.toString
v=u.e
A.a8(t,!1).N(new C.aWy(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.Q(d).ax.a===B.I,l=m?B.ek:B.c,k=A.n(20),j=A.p(n,D.c6T,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.n(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bC,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.B,n,B.e,B.h,0,B.p),1)
j=A.A(A.a([j,B.bb,i,A.aI(n,n,n,n,A.W(B.cz,m?B.bu:B.bj,n,n,n,n),n,n,n,new C.dbB(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.h,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,11,n,n,B.cE,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hAf(new C.dbC(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.k8:B.iH
r=A.n(12)
q=A.n(12)
p=m?B.em:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bC(n,new A.b6(4,r,B.dw),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.al,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.dbD(o),n,!1,n,n,!1,n,!0,n,B.ae,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,A4.Lq,n,n,n,n)
u=m?B.aS:B.aw
m=m?B.em:B.bO
return A.eE(n,l,new A.cQ(B.mg,A.cb(A.x(A.a([j,B.aO,i,B.at,w,B.P,v,B.aO,t,B.bx,A.A(A.a([A.E(A.dW(B.dr,new C.dbE(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cm,n,new A.ba(A.n(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.ar,A.E(A.bI(D.h8i,n,o.ga44(),A.bp(B.aV,n,n,n,B.c,n,B.cm,n,new A.ba(A.n(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.h,0,n,n)],h),B.B,n,B.e,B.M,0,B.p),B.t,n,B.y,n,n,B.D8,n,n,B.ah),n),n,n,n,A9.D9,n,B.d7,n,new A.ba(k,B.a1),n)}}
C.a_J.prototype={
S(){return new C.aBn()}}
C.aBn.prototype={
a_(){this.a3()
var w=$.az()
this.d!==$&&A.aR()
this.d=new A.au(B.ax,w)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.az()
w.W$=0
this.a2()},
Lc(){var w,v=this.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.T(D.fw7)
return}v=this.c
v.toString
A.a8(v,!1).N(new C.aWx(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.Q(d).ax.a===B.I,o=p?B.ek:B.c,n=A.n(20),m=A.p(q,D.c39,B.f,q,q,new A.o(B.bR.j(0.15),q,q,A.n(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bC,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bj,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.B,q,B.e,B.h,0,B.p),1)
m=A.A(A.a([m,B.bb,l,A.aI(q,q,q,q,A.W(B.cz,p?B.bu:B.bj,q,q,q,q),q,q,q,new C.dbx(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.h,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.n(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.W(B.aqy,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.ar,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.h,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.m),q,q,q,q,B.bH,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.k8:B.iH
t=A.n(12)
s=A.n(12)
r=p?B.em:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bC(q,new A.b6(4,t,B.dw),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.al,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.dby(this),q,!1,q,q,!1,q,!0,q,B.ae,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.ll,q,q,q,q)
w=p?B.aS:B.aw
p=p?B.em:B.bO
return A.eE(q,o,new A.cQ(B.mg,A.cb(A.x(A.a([m,B.aO,l,B.aA,v,B.bx,A.A(A.a([A.E(A.dW(B.dr,new C.dbz(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cm,q,new A.ba(A.n(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.ar,A.E(A.bI(D.hfu,q,this.ga44(),A.bp(B.bR,q,q,q,B.c,q,B.cm,q,new A.ba(A.n(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.h,0,q,q)],k),B.B,q,B.e,B.M,0,B.p),B.t,q,B.y,q,q,B.D8,q,q,B.ah),q),q,q,q,A9.D9,q,B.d7,q,new A.ba(n,B.a1),q)}}
C.a_e.prototype={
S(){return new C.aA4()}}
C.aA4.prototype={
a_(){var w,v=this
v.a3()
w=$.az()
v.d!==$&&A.aR()
v.d=new A.au(B.ax,w)
v.e!==$&&A.aR()
v.e=new A.au(new A.bd("1",B.b6,B.aP),w)
v.f!==$&&A.aR()
v.f=new A.au(B.ax,w)
v.r!==$&&A.aR()
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
gKu(){var w,v=this.e
v===$&&A.d()
w=A.cG(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
galn(){var w=this.f
w===$&&A.d()
w=A.cG(B.a.i(w.a.a))
return w==null?0:w},
gb7J(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aRN(d){var w,v=B.i.D(this.gKu()+d,0.25,999999),u=B.i.fO(v),t=this.e
t===$&&A.d()
if(v===u)u=B.o.v(B.i.M(v))
else{u=B.i.aa(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.l(new C.cJs())},
aAL(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.k8:B.iH,s=A.n(14),r=A.n(14)
u=u?B.em:B.bO
return A.bC(w,new A.b6(4,s,B.dw),w,B.bH,w,w,w,w,!0,new A.b6(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.n(14),B.afL),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ch1(d,e,f){return this.aAL(d,e,f,null)},
Lc(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.galn()<=0){s.c.L(x.q).f.T(D.fAq)
return}r=s.c
r.toString
v=s.gKu()
u=s.galn()
t=s.gb7J()
A.a8(r,!1).N(new C.aUz(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.ur(n),l=n?B.ek:B.c,k=A.n(24),j=x.O,i=A.a([B.aV.j(0.22),B.bR.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bXb,B.f,o,o,new A.o(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a7(B.a5,B.a9,B.x,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bC,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.cE,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1)
i=A.A(A.a([i,B.bb,h,A.aI(o,o,o,o,A.W(B.cz,n?B.bu:B.bj,o,o,o,o),o,o,o,new C.cJy(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.h,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aAL(m,"Item name (optional)","Lumber, paint, labor\u2026",B.QA),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,A4.Lq,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.F,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.k8:B.iH
t=A.n(14)
s=A.K(n?B.em:B.bO,B.r,1)
r=A.aI(o,o,o,o,A.W(B.xk,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cJz(p),o,o,o,o,o,B.cl)
q=p.e
q===$&&A.d()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c8M,B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,B.eg,o,o,o,1,o,o,!1,"\u2022",o,new C.cJA(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a6(52,o,q,o),A.aI(o,o,o,o,A.W(B.ib,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cJB(p),o,o,o,o,o,B.cl)],w),B.l,o,B.e,B.M,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.ar,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aAL(m,"Amount","0.00",B.hN),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,B.eg,o,o,o,1,o,o,!1,"\u2022",o,new C.cJC(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.B,o,B.e,B.h,0,o,o)
t=x.gv
u=A.B(new A.O(D.dgF,new C.cJD(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aA,h,B.P,s,B.af,A.bZ(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.S,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.ch1(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cJE(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.ll,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bR.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKu()===B.i.fO(p.gKu())?B.i.M(p.gKu()):p.gKu()
s=p.gb7J()
r=A.BF(p.galn())
i.push(A.p(o,A.A(A.a([A.E(A.x(A.a([u,B.at,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1),C.bHP(p.gKu()*p.galn(),B.b5,!1,B.u)],w),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a7(B.a5,B.a9,B.x,j,o,o),B.m),o,o,o,o,B.jz,o,o,o))
i.push(B.bx)
j=A.n(14)
h=n?B.em:B.bO
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cm,o,new A.ba(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dW(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cJF(d),h),1),B.ar,A.E(A.dc(D.au4,o,D.hbl,p.ga44(),A.bp(B.aV,o,o,0,B.c,o,B.cm,o,new A.ba(A.n(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.h,0,o,o))
return A.eE(o,l,new A.cQ(B.MR,A.cb(A.x(i,B.am,o,B.e,B.M,0,B.p),B.t,o,B.y,o,o,Az.tr,o,o,B.ah),o),o,o,o,B.P9,o,B.d7,o,new A.ba(k,B.a1),o)}}
C.a2U.prototype={
S(){return new C.bA4()}}
C.bA4.prototype={
a_(){var w,v,u=this
u.a3()
w=u.a.e
v=$.az()
u.d!==$&&A.aR()
u.d=new A.au(new A.bd(w,B.b6,B.aP),v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.az()
w.W$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=r?B.ek:B.c,p=A.n(20),o=t.a.c
o=A.c(o,s,s,s,s,s,s,A.l(s,s,r?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.d()
v=A.l(s,s,r?B.aS:B.aw,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.k8:B.iH
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bC(s,new A.b6(4,A.n(12),B.dw),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fsF(t,d),s,!1,s,s,!1,s,!0,s,B.ae,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dW(B.dr,new C.fsG(d),s),1)
r=A.bp(B.bR,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eE(s,q,new A.D(B.D8,A.x(A.a([o,B.aA,v,B.aO,A.A(A.a([u,B.ar,A.E(A.bI(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fsH(t,d),r),1)],w),B.l,s,B.e,B.h,0,s,s)],w),B.l,s,B.e,B.M,0,B.p),s),s,s,s,s,s,B.d7,s,new A.ba(p,B.a1),s)}}
C.adj.prototype={
a8(){return"WorksheetFrameStyle."+this.b}}
C.GE.prototype={
S(){return new C.bA2(null,null)}}
C.bA2.prototype={
a_(){var w,v=this
v.a3()
w=A.br(null,D.bDX,null,1,null,v)
w.cX(0)
v.d!==$&&A.aR()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bCO()},
gbEq(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bR,B.b5],x.O)
case 2:return A.a([B.bv,B.aV,B.b5],x.O)
case 3:return A.a([B.aH,B.ce,B.jO],x.O)
case 4:return A.a([B.fW,B.bR,B.fx],x.O)
case 0:return A.a([B.aV,B.bR,B.b5],x.O)}},
B(d){var w=A.Q(d),v=this.d
v===$&&A.d()
return new A.e4(A.c9(v,new C.fsD(this,new C.ur(w.ax.a===B.I)),null),null)}}
C.azY.prototype={
S(){return new C.bA3(null,null)}}
C.bA3.prototype={
a_(){var w,v=this
v.a3()
w=A.br(null,B.nS,null,1,null,v)
w.cX(0)
v.d!==$&&A.aR()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bCP()},
B(d){var w=this.d
w===$&&A.d()
return A.c9(w,new C.fsE(this),null)}}
C.bA1.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a3(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aH($.T().r,B.aj,null,null,A.a([],x.v))
u.E(new A.jp(v))
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
w=A.zQ(u)
t=A.a([],x.U)
w=new A.v4(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bk(A.jV(y.B));--r
q=new A.C4(w,r)
w.jP()
r=t[r].b
r===$&&A.d()
r=r.a.length()
p.aVp(d,q,r,o,0,0.2,4.2,0.92)
p.aVp(d,q,r,s,0.52,0.11,3.2,0.58)}},
aVp(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.hXS(e.a.a,e,t,t+f*i,!0),r=A.aiq(s.glc().a.getBounds())
$.T()
w=A.L()
w.b=B.ac
w.c=j
w.d=B.bF
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a7(B.a5,B.a9,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Jj,null).az(0,r))
d.af(s,w)},
aC(d){return d.b!==this.b||d.d!==this.d}}
C.aQv.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a7(0,w.gbB())
w.a9$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.aQw.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a7(0,w.gbB())
w.a9$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.ur.prototype={}
C.av4.prototype={
S(){return new C.aHN()},
ge9(){return this.c}}
C.aHN.prototype={
a_(){var w=this
w.a3()
w.d=w.a.d
w.aj2()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.Mr(w,v)
this.a2()},
aj2(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aj2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bGc(t.c,t.d.a),$async$aj2)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.f0b(u,s))
return A.h(null,v)}})
return A.i($async$aj2,v)},
Rj(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.f02(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.Mr(t,s),$async$Rj)
case 2:if(u.c!=null)u.l(new C.f03(u))
return A.h(null,v)}})
return A.i($async$Rj,v)},
RR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.Q(p)
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.f09(t,new C.ur(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$RR)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.aai(q),$async$RR)
case 6:case 5:t.l(new C.f0a(t,r))
w=7
return A.b(t.Rj(),$async$RR)
case 7:case 1:return A.h(u,v)}})
return A.i($async$RR,v)},
X_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iBJ(r),$async$X_)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.f_Y(t,new C.rG(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Rj(),$async$X_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X_,v)},
cmb(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hPc(t,new C.f01(u),w,v)},
acP(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bE(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b7A,w,w,B.m),w,22,w,w,w,w,w,22)},
abR(d){return this.bQC(d)},
bQC(d){var w=0,v=A.j(x.H),u=this
var $async$abR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.f00(u,d))
w=2
return A.b(u.Rj(),$async$abR)
case 2:return A.h(null,v)}})
return A.i($async$abR,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.Q(a2).ax.a===B.I,e=f?B.c4:B.hW,d=A.n(8),a0=A.W(A2.a3n,f?B.bu:B.bj,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.HR,A.A(A.a([a0,B.bf,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bj,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.M,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.f0c(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.Y(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b4,B.t,A.a([A.bw(A.n(22),C.aTA(!0,A.n(22),1/0,B.r7,g,d,1/0),B.aq),A.ao(10,A.dc(D.c11,g,D.hdJ,h.gb5E(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.hm,g,new A.ba(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.aa(0,B.H,B.aV.j(f?0.5:0.38),B.eT,22),new A.aa(-4,B.H,B.bR.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.aa(-2,B.H,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.a0,g,B.b4,B.t,A.a([C.aTA(!0,A.n(16),1/0,B.Q0,g,r.c,1/0),new A.bP(new A.o(g,g,g,g,g,new A.a7(B.aX,B.b1,B.x,A.a([B.c.j(0.06),B.L,B.v.j(0.22)],x.O),g,g),B.m),B.bm,g,g),A.ao(g,h.acP(!0),g,g,8,g,8,g),A.ao(g,A.cG7(h.acP(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cG7(h.acP(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cG7(h.acP(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dc(D.bXO,g,D.h7_,h.gb5E(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.hm,g,new A.ba(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.cat,B.m),g,g,g,g,B.m_,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.biy,B.oA,B.hw],u):A.a([B.b5,B.aV,B.bR],u)
t=x.V
s=A.a([new A.aa(0,B.H,B.aV.j(f?0.45:0.35),B.eT,24)],t)
r=A.n(22)
p=A.ao(g,A.W(B.jA,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.F,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.m),g,g,g,g,B.hl,g,g,g)],a1),B.l,g,B.e,B.h,0,g,g),B.aA,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.F,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ak,C.bHP(h.d.gxP(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.P,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cE,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.B,g,B.e,B.h,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.K(B.hj.j(0.75),B.r,1.6)
t=A.a([new A.aa(0,B.H,B.aH.j(0.28),B.cO,14)],t)
j=B.aH.j(0.22)
i=A.n(10)
u=A.p(g,A.bw(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bIT,A.A(A.a([o,B.ar,A.aG(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eG(new A.D(Z.wX,A.x(A.a([A.p(g,D.atE,B.f,g,g,new A.o(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.cr,g,g,g),B.fN,D.fWx],a1),B.l,g,B.e,B.M,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcma(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.h,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a7(B.ay,B.aC,B.x,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fJ(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bx,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,16,g,g,B.F,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.aY,A.dc(Aj.a5f,g,D.fUi,h.gbEU(),A.bp(B.aV,g,g,g,B.c,g,B.hz,g,new A.ba(A.n(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.h,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ek:B.c
v=A.n(14)
u=A.K(f?B.em:B.bO,B.r,1)
t=A.W(B.a3J,f?B.bu:B.bj,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.S,s,B.ak,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bj,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.m),g,g,g,g,B.r2,g,g,1/0))}else B.d.u(d,new A.O(w,new C.f0d(h,new C.ur(f)),A.U(w).k("O<1,w>")))
if(h.e)d.push(new A.D(Ai.zf,A.at(A.ng(g,f?B.bu:B.bj,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bo(!0,A.x(A.a([new A.D(A3.D0,a0,g),A.E(A.cb(A.x(d,B.B,g,B.e,B.h,0,B.p),B.t,g,B.y,g,g,E.zs,g,g,B.ah),1)],a1),B.B,g,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bIE(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ek:B.c,p=A.n(16),o=A.a([new A.aa(0,B.H,B.v.j(r?0.35:0.08),B.cO,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.bak,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.W(s?B.it:B.h_,B.b5,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bL
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.F,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd2h()
v=A.BF(d.d)
B.d.u(t,A.a([B.at,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bu:B.bj,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.B,u,B.b9,B.M,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bR.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bHP(d.c*d.d,B.b5,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a7(B.a5,B.a9,B.x,k,u,u),B.m),u,u,u,u,B.hm,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.F6(A.A(A.a([m,A.E(new A.D(B.anr,A.A(A.a([l,B.bb,t,B.aa,k,A.aI(u,u,u,u,A.W(B.cz,(r?B.bu:B.bj).j(0.75),u,u,u,20),u,u,u,new C.f_Z(this,d),u,u,u,u,u,B.cl)],w),B.l,u,B.e,B.h,0,u,u),u),1)],w),B.am,u,B.e,B.h,0,u,u),u),B.aq),B.f,u,D.b9a,new A.o(q,u,u,p,o,u,B.m),u,u,u,B.d4,u,u,u,u)}}
C.afp.prototype={
Fd(d){return this.bS_(d)},
bS_(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Fd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(M.pP(d,o,!1),$async$Fd)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).N(null)
w=4
return A.b(A.bL(Ay.CV,null,x.H),$async$Fd)
case 4:s=t.d
w=5
return A.b(C.h2P(!0,o,s),$async$Fd)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hz(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$Fd)
case 6:p=f
w=7
return A.b(M.pO(o,!1),$async$Fd)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Fd,v)},
a0Z(d){return this.cCU(d)},
cCU(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0Z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(M.pP(d,s,!1),$async$a0Z)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).N(null)
A.hL(d,new C.auZ(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(M.pO(s,!1),$async$a0Z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0Z,v)},
Rk(d){return this.cyS(d)},
cyS(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).N(null)
w=3
return A.b(A.hL(d,D.aNr,!0,"NgmyWorksheetProjectScan",x.N),$async$Rk)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bHQ(s),$async$Rk)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.T(D.fzx)
w=1
break}q=C.hpH(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$Rk)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Rk,v)},
a1_(d){return this.cLm(d)},
cLm(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).N(null)
w=3
return A.b(C.bHj(),$async$a1_)
case 3:s=f
if(s==null){w=1
break}r=C.hpH(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$a1_)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1_,v)},
B(d){var w=this,v=null,u=A.Q(d).ax.a===B.I,t=new C.ur(u),s=w.d.d.length,r=u?B.ek:B.c,q=A.n(28),p=A.a([new A.aa(0,B.H,B.v.j(u?0.35:0.08),B.kN,36)],x.V),o=x.p
return A.bo(!0,new A.D(B.wW,A.p(v,A.x(A.a([w.cBt(d,t,s),new A.D(D.bIg,A.x(A.a([w.b8E(t,"QR restore"),B.S,A.A(A.a([w.b3D(t,!0,B.jD,B.aH,B.aH,new C.f0f(w,d),"Show to scan","QR code"),B.ar,w.aAM(t,B.jE,B.b2,B.bk,new C.f0g(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.h,0,v,v),B.dc,w.b8E(t,"Backup files"),B.S,A.A(A.a([w.aAM(t,B.hO,B.aV,B.bR,new C.f0h(w,d),"Full copy","Backup file"),B.ar,w.aAM(t,S.A8,B.au,B.aQ,new C.f0i(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.h,0,v,v)],o),B.B,v,B.e,B.h,0,B.p),v)],o),B.l,v,B.e,B.M,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cBt(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fl,B.cU,B.h6],k):A.a([B.b5,B.aV,B.bR],k)
w=A.ao(l,A.W(B.vw,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.m),l,4,l,B.kH,l,l,l,36),l,l,l)
u=A.n(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.aa(0,B.H,B.v.j(0.2),B.cO,12)],x.V)
r=this.d
s=A.p(l,C.aTA(!0,A.n(13),64,D.bSZ,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.F,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,I.ad5,l,l,l)
r=C.bHP(r.gxP(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bIE,A.x(A.a([v,A.A(A.a([s,B.ev,A.E(A.x(A.a([u,B.at,t,B.P,A.A(A.a([r,B.aa,A.p(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.m),l,l,l,l,B.fD,l,l,l)],m),B.l,l,B.e,B.h,0,l,l)],m),B.B,l,B.e,B.h,0,B.p),1),A.aI(l,l,l,l,A.W(B.cz,B.c.j(0.85),l,l,l,l),l,l,l,new C.f0e(d),l,l,l,A.nl(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aVS,l,l,l,l),l,l)],m),B.B,l,B.e,B.h,0,l,l)],m),B.l,l,B.e,B.h,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.ay,B.aC,B.x,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b8E(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bu:B.bj,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
b3D(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.am_:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.em:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.aa(0,B.H,B.aH.j(0.12),B.cO,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.K(h.j(0.35),B.r,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.m),r,r,r,r,B.tt,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eG(new A.D(E.a1M,A.x(A.a([t,B.af,u,B.bC,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bu:B.bj,r,r,r,r,r,r,r,r,11,r,r,B.cE,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aAM(d,e,f,g,h,i,j){return this.b3D(d,!1,e,f,g,h,i,j)}}
C.auZ.prototype={
S(){return new C.boW()}}
C.boW.prototype={
a_(){this.a3()
this.agW()},
agW(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$agW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bHR(p.c,p.d),$async$agW)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.f_T(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.f_U(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agW,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(d).ax.a===B.I,f=g?B.Cp:B.hW,e=i.d
e=e==null?h:B.a.Y(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.W(B.eH,g?B.ab:B.an,h,h,h,18),h,h,h,new C.f_V(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.uc],u),B.l,h,B.e,B.h,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.fl,B.cU,B.h6],s):A.a([B.b5,B.aV,B.bR],s)
r=x.V
q=A.a([new A.aa(0,B.H,B.aV.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dq,B.K,h,h)
p=C.bHP(p.gxP(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.ak,A.A(A.a([p,B.aa,A.p(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.F,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.m),h,h,h,h,B.fD,h,h,h)],u),B.l,h,B.b9,B.h,0,h,h)],u),B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a7(B.ay,B.aC,B.x,s,h,h),B.m),h,h,h,h,E.a27,h,h,1/0)
t=g?D.bud:B.c
q=A.n(24)
p=A.K(w?B.aH.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.aa(0,B.H,B.v.j(g?0.25:0.06),B.dp,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.Wx,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eCX)
else{m=A.n(20)
l=A.K(B.bn,B.r,1)
o.push(A.p(h,A.qs(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aO)
n=w?B.aH:B.aV
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.K((w?B.aH:B.aV).j(0.35),B.r,1)
k=w?B.Qi:B.QR
k=A.W(k,w?B.aH:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.ar,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.m),h,h,h,h,B.hz,h,h,h))
return A.c5(h,f,A.bo(!0,A.x(A.a([new A.D(Av.Pm,e,h),A.E(A.cb(A.x(A.a([s,B.aO,A.p(h,A.x(o,B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.m),h,h,h,h,B.v7,h,h,1/0)],u),B.l,h,B.e,B.h,0,B.p),B.t,h,B.y,h,h,E.aoD,h,h,B.ah),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.av3.prototype={
S(){return new C.aHM(A.A8(B.OF,B.ot,B.vD))}}
C.aHM.prototype={
t(){this.d.t()
this.a2()},
aPK(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.ji(w,d)},
chV(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.izI(t)
if(s!=null){this.aPK(s)
return}r=C.hEQ(t)
if(r!=null)q=A.cW(r,p,0)
else q=!1
if(q){this.aPK(B.a.i(B.a.aY(r,B.a.ce(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eS(A.a([A.aI(t,t,t,t,A.W(u.f?B.vk:An.Qq,t,t,t,t,t),t,t,t,new C.f_X(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Cp,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.h6S,t,t,t,1,t,!0),q=A.A7(u.d,B.bX,u.gchU()),p=A.n(28)
p=A.at(A.p(t,t,B.f,t,t,new A.o(t,t,A.K(B.aV,B.r,3),p,A.a([new A.aa(2,B.H,B.aV.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.v.j(0.72)
v=A.n(16)
return A.c5(r,B.v,new A.an(B.a0,t,B.b4,B.t,A.a([q,p,A.ao(32,A.p(t,D.h5D,B.f,t,t,new A.o(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jz,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aMJ.prototype={
a8(){return"_WorksheetTab."+this.b}}
C.Pl.prototype={
S(){return new C.aHO(D.af4,A.a([],x.D))},
bw(){return this.r.$0()},
ge9(){return this.c}}
C.aHO.prototype={
gcJ7(){return J.bIZ(this.e,0,new C.f0F())},
a_(){this.a3()
$.aU.cV$.push(this)
this.ws()},
t(){$.aU.hZ(this)
this.a2()},
jn(d){if(d===B.h5)this.ws()},
ws(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$ws=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DU(q.a.c).de(0,B.ke),$async$ws)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.f0B(q,p))
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
if(q.c!=null&&q.f)q.l(new C.f0C(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ws,v)},
IL(d){return this.bOI(d)},
bOH(){return this.IL(null)},
bOI(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iBL(l,d),$async$IL)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lY(l,r,q,D.dtt,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Mr(t.a.c,p),$async$IL)
case 4:o=f
w=5
return A.b(t.ws(),$async$IL)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.T(D.fwB)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.T(D.fyq)
else n.L(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fh(m)
case 1:return A.h(u,v)}})
return A.i($async$IL,v)},
Fh(d){return this.clX(d)},
clX(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Fh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hL(s,new C.av4(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$Fh)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mr(u.a.c,t),$async$Fh)
case 5:case 4:w=6
return A.b(u.ws(),$async$Fh)
case 6:return A.h(null,v)}})
return A.i($async$Fh,v)},
wd(d){return this.c43(d)},
c43(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bHj(),$async$wd)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hL(r,D.aNr,!0,"NgmyWorksheetProjectScan",x.N),$async$wd)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bHQ(q),$async$wd)
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
r.T(A.b2(null,null,null,null,null,B.t,null,A.c(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hpH(s)
w=15
return A.b(C.Mr(t.a.c,p),$async$wd)
case 15:o=f
w=16
return A.b(t.ws(),$async$wd)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.T(D.fyv)
w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fh(p)
case 1:return A.h(u,v)}})
return A.i($async$wd,v)},
OU(d){return this.bNk(d)},
bNk(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$OU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ce(null,null,!0,null,new C.f0m(d),s,null,!0,!0,x.y),$async$OU)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.ps(t.a.c,A.a([],x.D)),$async$OU)
case 6:w=7
return A.b(t.ws(),$async$OU)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fwG)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OU,v)},
cm9(d){var w=this.c
w.toString
A.bU(B.L,null,new C.f0v(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b9h(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.k8
else w=B.c
v=A.n(16)
u=A.K(p?B.em:B.bO,B.r,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.m),r,r,r,r,B.bT,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.p(r,A.x(A.a([s,B.af,t,B.bC,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bu:B.bj,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.m),r,r,r,r,B.tq,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a1t(d,e){return this.clY(d,e)},
clY(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1t=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.f0q(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a1t)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hPc(r,new C.f0r(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.OW(d,e),$async$a1t)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1t,v)},
b6g(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.m),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aB
else t=h.a?B.aS:B.aw
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bu:B.bj,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(A8.D6,A.A(A.a([s,B.bb,t,A.W(B.eM,w?B.bu:B.bj,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
ct2(d,e,f,g,h,i){return this.b6g(!1,d,e,f,g,h,i)},
OW(d,e){return this.bNu(d,e)},
bNu(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lC(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$OW)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bFZ(t.a.c,d.a),$async$OW)
case 6:w=7
return A.b(t.ws(),$async$OW)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$OW,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.ur(n),l=n?B.c4:B.hW
if(p.f)n=D.bgh
else{w=A.aF(d,B.dH,x.w).w
v=p.bHK(m)
u=p.c37(m)
t=p.gbEN()
if(n)s=B.k8
else s=B.c
r=A.n(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.GE(A.p(o,A.A(A.a([p.aEn(R.Q_,"Projects",m,D.af4),p.aEn(B.ve,"Cashier",m,D.b42),p.aEn(B.I7,"Family Tree",m,D.hWv)],q),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.es,0.95,t,o),B.bx],q)
v=p.d
if(v===D.af4){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY,new C.azY(p.gaU9(),o)],q),B.l,o,B.e,B.h,0,o,o),B.aA,p.ct4(m)],q))}else{n=p.a
if(v===D.b42)t.push(new C.aqS(n.c,m,o))
else{v=p.r
t.push(new C.as4(n.c,n.d,n.e,n.f,new C.f0I(p),new C.f0J(p),new A.bf(v,x.b4)))}}n=A.cb(A.x(t,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c5(o,l,A.bo(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bHK(d){var w=null,v=A.n(8),u=d.a,t=A.W(A2.a3n,u?B.bu:B.bj,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.kf,A.A(A.a([t,B.bf,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bu:B.bj,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.M,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f0j(this),w,w,w,w,w,w,w)},
gbEN(){switch(this.d.a){case 0:return D.aed
case 1:return D.hJ6
case 2:return D.aee}},
c37(d){var w=null,v=A.n(15),u=A.a([new A.aa(0,B.H,B.aV.j(0.35),B.cy,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.c2Z,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,44,w,w,w,w,w,44),B.bb,D.bNi,A.aG(!1,B.a3,!0,w,A.aM(!1,A.n(12),!0,A.p(w,D.c0f,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f0n(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.B,w,B.e,B.h,0,w,w),r=B.b5.j(0.55),q=A.n(12)
return new C.GE(A.p(w,A.x(A.a([new A.D(B.HJ,s,w),A.p(w,A.x(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.c(A.BF(this.gcJ7()),w,w,w,w,w,w,D.fQs,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.m),w,w,w,V.tp,B.jz,w,w,1/0)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hJ5,w)},
aEn(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aV:B.L,q=A.n(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.aa(0.5,B.H,B.aV.j(0.42),B.cO,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bj
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bj
return A.E(A.aG(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cT(u,A.A(A.a([w,B.e5,new A.d5(1,B.cg,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.b9,B.h,0,u,u),u,u,B.cn,new A.o(r,u,p,q,o,u,B.m),B.iY,u,u,u,u,B.HS,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f0E(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
ct4(d){var w,v,u,t,s,r,q=this,p=null
if(J.cv(q.e)){w=d.a
v=w?B.ek:B.c
u=A.n(15)
t=A.p(p,D.c0m,B.f,p,p,new A.o(p,p,p,p,A.a([new A.aa(2,B.H,B.aV.j(0.5),B.eT,28)],x.V),D.cd4,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,18,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.GE(A.p(p,A.x(A.a([t,B.dc,s,B.P,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bj,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.eb,A.A(A.a([A.E(q.aVL(B.jE,"Scan QR",new C.f0y(q),d),1),B.ar,A.E(q.aVL(S.A8,"Upload file",new C.f0z(q),d),1)],r),B.l,p,B.e,B.h,0,p,p),B.aA,A.bI(D.hht,p,q.gaU9(),A.bp(B.aV,p,p,p,B.c,B.hr,p,p,new A.ba(A.n(12),B.a1),p,p,p))],r),B.l,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bJK,1.05,D.aed,p)}w=J.b8(q.e,new C.f0A(q,d),x.l)
w=A.B(w,w.$ti.k("ak.E"))
return new C.GE(A.x(w,B.l,p,B.e,B.h,0,B.p),16,B.bT,1,D.aed,p)},
aVL(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,t,!0,A.p(w,A.x(A.a([A.W(d,B.b5,w,w,w,26),B.P,A.c(e,w,w,w,w,w,w,D.fOC,B.K,w,w)],x.p),B.l,w,B.e,B.M,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.m),w,w,w,w,AQ.a1z,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
ct3(d,e){var w,v,u=null,t=e.a,s=t?B.ek:B.c,r=A.n(14),q=A.K(t?B.em:B.bO,B.r,1),p=A.a([new A.aa(0,B.H,B.v.j(t?0.35:0.08),B.eA,10)],x.V),o=A.n(14),n=t?B.bu:B.bj
n=A.bw(B.YI,new A.fJ(1.7777777777777777,C.aTA(!0,B.fp,1/0,R.Q_,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.c(""+d.d.length+" budget items \xb7 "+A.BF(d.gxP()),u,u,u,u,u,u,D.fMz,u,u,u)],w),B.B,u,B.e,B.h,0,B.p),1)
return A.p(u,A.aG(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bH,A.A(A.a([v,A.aI(u,u,u,u,A.W(AD.a4t,t?B.bu:B.bj,u,u,u,u),u,u,u,new C.f0w(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.h,0,u,u),u)],w),B.B,u,B.e,B.h,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f0x(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.m),u,u,u,B.e9,u,u,u,1/0)}}
C.bBQ.prototype={}
C.rG.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd2h(){var w,v,u,t,s=this.c
if(s===B.i.fO(s))w=B.o.v(B.i.M(s))
else{v=B.i.aa(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lY.prototype={
gxP(){return B.d.cD(this.d,0,new C.cIO())},
ak(){var w=this,v=w.d,u=A.U(v).k("O<1,a9<m,@>>")
v=A.B(new A.O(v,new C.cIN(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bgK(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lY(w.a,w.b,v,u,w.e)},
bgs(d){return this.bgK(d,null)},
U4(d){return this.bgK(null,d)}}
C.IH.prototype={
a8(){return"FamilyGender."+this.b}}
C.ie.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hKi(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aH7(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.ie(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.an4.prototype={
a8(){return"FamilyTreeAccessRole."+this.b}}
C.lb.prototype={
garm(){var w=this.f
return new A.X(w,new C.bUR(),A.U(w).k("X<1>")).gJ(0)},
ak(){var w=this,v=w.f,u=A.U(v).k("O<1,a9<m,@>>")
v=A.B(new A.O(v,new C.bUQ(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.irK(w.y),"games",w.z],x.N,x.z)},
x9(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.lb(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bgJ(d,e){var w=null
return this.x9(w,w,w,d,e,w,w,w,w)},
cSv(d,e,f,g,h,i,j){return this.x9(d,e,null,f,g,h,i,j,null)},
aHc(d,e){var w=null
return this.x9(w,w,w,w,d,w,w,e,w)},
cSx(d,e,f,g,h,i,j,k){return this.x9(d,e,null,f,g,h,i,j,k)},
cR0(d){var w=null
return this.x9(w,w,w,w,w,w,w,d,w)},
cRo(d){var w=null
return this.x9(w,w,w,w,w,w,w,w,d)},
bgm(d){var w=null
return this.x9(w,w,d,w,w,w,w,w,w)},
aGY(d){var w=null
return this.x9(w,w,w,w,w,d,w,w,w)},
cS2(d,e,f){var w=null
return this.x9(w,d,w,w,e,w,w,f,w)},
cQO(d){var w=null
return this.x9(w,w,w,d,w,w,w,w,w)},
cRA(d,e){var w=null
return this.x9(d,w,w,w,w,w,e,w,w)}}
C.cIP.prototype={
a8(){return"WrapAlignment."+this.b}}
C.cIQ.prototype={
a8(){return"WrapCrossAlignment."+this.b}}
C.aJT.prototype={}
C.bcc.prototype={
aj(d){this.a=d.a
this.b=d.b},
d1(d){var w=new C.bcc()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b5(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bcb.prototype={
gx_(){return!0},
gGR(){return this.z.b<this.b.length},
aXr(d){switch(0){case 0:return d.a.c}},
aX7(d){switch(0){case 0:return d.a.d}},
bXz(d,e){switch(0){case 0:return new A.i8(d,e)}},
bWX(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hm(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.j5(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Iq(b4)
switch(0){case 0:v=b5.b
u=new A.l8(0,v,0,1/0)
t=w===B.Wp
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fE(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hm(b4,u,!0)
f=b1.aXr(g)
f.toString
e=b1.aX7(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJT(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJT(k,j,i))}d=s.length
switch(0){case 0:q=b5.cC(new A.i8(m,l))
a0=q.a
a1=q.b
b1.a=new A.j5(0,0,a0,a1)
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
a8=b1.aXr(g)
e=b1.aX7(g)
e.toString
a9=b1.bWX(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bXz(a6,a3+a9)
b0=g.a
g.a=new A.j5(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fZ(d){var w,v,u,t,s,r=this
r.lB(d)
w=d.b
w.iw()
v=A.dw()
u=r.a
v.ei(u.a,u.b,0,1)
w.pv(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fZ(d)
w.nE(0)},
Hn(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iw(){return this.z}}
C.bA5.prototype={}
var z=a.updateTypes(["ay<~>()","P(ie)","~()","P(lb)","P(nH)","a9<m,@>(lb)","F(lb,lb)","F(ie,ie)","m(ie)","lb(a9<@,@>)","P(lY)","nH(a9<@,@>)","a9<m,@>(nH)","P(v6)","v6()","F(ie)","ai<ie>()","P(zS)","a0N(Z)","m?(ie)","eL<m?>(ie)","ay<~>(lY)","P(rG)","a9<m,@>(ie)","ie(a9<@,@>)","F(lY,lY)","P(agI)","~(bg)","w(p2)","F(F,aaK)","P(qX<F>)","~(qX<F>)","Us(Z)","P(N3)","P(v5)","~(ie)","m(m)","WP(Z)","Ur(Z)","af4(Z)","a_I(Z)","ie(ie)","cN(bu<m,GT>)","cN(L8)","a0b(Z)","F?(ie)","ie()","P(L8)","D(ie)","~(IH)","a07(Z)","w(IH,m,a_)","P(agB)","bu<m,ai<a9<m,@>>>(m,ai<nH>)","a09(Z)","+count,id,name(F,m,m)(lb)","m(lb)","a16(Z)","a17(Z)","P(md)","md()","a_e(Z)","a2U(Z)","a_K(Z)","a_J(Z)","~(F)","~(m,lL?)","w(rG)","afp(Z)","~(lH)","ay<~>([m?])","G(G,lY)","w(lY)","G(G,rG)","a9<m,@>(rG)","rG(a9<@,@>)","ai<lL>()","v5()","m(V)","lY(a9<@,@>)","cm(IG)","m(lY)","a9<m,@>(lY)","F(nH,nH)","lb(a9<m,@>)","lb(lb)"])
C.fVy.prototype={
$1(d){return d.a+" "+d.b},
$S:132}
C.fVx.prototype={
bq3(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rx(s,d,B.id,"book",E.Hu),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.Y(r!=null&&A5.Mc(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bq3(d)},
$S:259}
C.fVz.prototype={
$1(d){return d.b},
$S:132}
C.h52.prototype={
$1(d){var w=null
return A.eE(w,B.L,new H.QO(this.a,this.b,w),w,w,0,B.a1O,w,B.d7,w,w,w)},
$S:47}
C.fIo.prototype={
$1(d){return d!=null},
$S:212}
C.fIp.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:212}
C.fIu.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:167}
C.fTg.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fg(d,w,w,w,A.ho(w,B.u3,w,w,w,w,w,w,w,B.dJ,w,w,10.5,w,B.eL,w,!0,w,w,w,w),w),u=f?B.eL:B.x5
return new A.om(D.bF_,A.aby(A.a([new A.h6(130,w,v),new A.zR(1,B.I1,A.fg(e,w,w,w,A.ho(w,g==null?D.eFk:g,w,w,w,w,w,w,w,B.dJ,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.z6,B.m6))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1944}
C.fTf.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.wg(999)
f=A.xU(A.m7(h,A.fg("Cashier",h,h,h,A.ho(h,D.B2,h,h,h,h,h,h,h,B.dJ,h,h,10,h,B.eL,h,!0,h,h,h,h),h),h,new A.l9(D.eFb,h,f,B.ik,h),h,h,D.bFt,h))
w=A.xU(A.fg("Debt receipt",h,h,h,A.ho(h,h,h,h,h,h,h,h,h,B.dJ,h,h,22,h,B.eL,h,!0,h,h,h,h),h))
v=A.xU(A.fg(C.xA(new A.V(Date.now(),0,!1),!0),h,h,h,D.acC,h))
u=A.wg(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fg(s,h,h,h,A.ho(h,h,h,h,h,h,h,h,h,B.dJ,h,h,14,h,B.eL,h,!0,h,h,h,h),h)
r=A.fg("Person who owes",h,h,h,D.acC,h)
q=A.wg(10)
p=x.Z
u=A.m7(h,A.zJ(A.a([s,new A.h6(h,2,h),r,new A.h6(h,10,h),A.m7(h,A.zJ(A.a([A.fg("Amount owed",h,h,h,D.acC,h),new A.h6(h,2,h),A.fg(A.BF(t.c),h,h,h,A.ho(h,D.B2,h,h,h,h,h,h,h,B.dJ,h,h,20,h,B.eL,h,!0,h,h,h,h),h)],p),B.th,B.m6),h,new A.l9(B.q7,h,q,B.ik,h),h,h,D.bEG,1/0)],p),B.th,B.m6),h,new A.l9(E.aOP,h,u,B.ik,h),h,h,D.bGG,1/0)
q=new A.o7(D.eFe,0.9,B.lp)
r=A.wg(12)
s=i.c
o=s.$2("Original due",C.xA(t.r,!1))
n=s.$2("Current due",C.xA(t.f,!1))
m=i.d
l=new A.o7(m,1.1,B.lp)
k=A.wg(8)
j=i.a
k=A.a([o,n,new A.h6(h,6,h),A.m7(h,A.xU(A.fg(t.gaOh(),h,h,h,A.ho(h,m,h,h,h,h,h,h,h,B.dJ,h,h,11,h,B.eL,h,!0,0.5,h,h,h),h)),h,new A.l9(h,new A.qg(l,l,l,l),k,B.ik,h),h,h,D.bFC,1/0),new A.h6(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.B2))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.B2))
else{n=A.fg("Missed days ("+n+")",h,h,h,A.ho(h,B.u3,h,h,h,h,h,h,h,B.dJ,h,h,10.5,h,B.eL,h,!0,h,h,h,h),h)
m=A.U(o).k("O<1,U1>")
o=A.B(new A.O(o,new C.fTe(),m),m.k("ak.E"))
B.d.u(k,A.a([new A.h6(h,4,h),n,new A.h6(h,6,h),new C.bcb(5,5,new C.bcc(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h6(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h6(h,8,h),w,new A.h6(h,3,h),v,new A.h6(h,16,h),u,new A.h6(h,10,h),A.m7(h,A.zJ(k,B.z6,B.m6),h,new A.l9(h,new A.qg(q,q,q,q),r,B.ik,h),h,h,B.anv,1/0)],p)
w=j.a
if(w!=null){v=new A.o7(B.Kx,1,B.lp)
B.d.u(f,A.a([new A.h6(h,16,h),A.fg("Debtor signature",h,h,h,A.ho(h,B.u3,h,h,h,h,h,h,h,B.dJ,h,h,10,h,B.eL,h,!0,h,h,h,h),h),new A.h6(h,6,h),A.m7(h,new A.IY(w,B.YV,h,h),h,new A.l9(h,new A.qg(v,v,v,v),A.wg(6),B.ik,h),82,h,B.Pj,1/0)],p))}f.push(new A.h6(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fg(w,h,h,h,D.fEL,h))
f.push(new A.h6(h,18,h))
f.push(A.xU(A.fg("NGMY.ORG",h,h,h,A.ho(h,D.B2,h,h,h,h,h,h,h,B.dJ,h,h,14,h,B.eL,h,!0,1.8,h,h,h),h)))
return f},
$S:355}
C.fTe.prototype={
$1(d){var w=null,v=new A.o7(D.Ky,0.7,B.lp),u=A.wg(999)
return A.m7(w,A.fg(C.xA(d,!1),w,w,w,A.ho(w,D.Ky,w,w,w,w,w,w,w,B.dJ,w,w,9.5,w,B.eL,w,!0,w,w,w,w),w),w,new A.l9(w,new A.qg(v,v,v,v),u,B.ik,w),w,w,D.bLd,w)},
$S:1945}
C.caa.prototype={
$1(d){var w=null,v=B.bE.j(0.08),u=A.n(999),t=A.K(B.bE.j(0.28),B.r,1)
return A.p(w,A.c(C.xA(d,!1),w,w,w,w,w,w,D.fM0,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,w,B.eY,w,w,w)},
$S:1946}
C.h5z.prototype={
$1(d){var w=null,v=A.aF(d,B.bW,x.w).w,u=A.n(26),t=A.aI(w,w,w,w,D.c3Z,w,w,w,new C.h5w(d),w,w,w,w,w,B.cl),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eE(w,B.L,new A.cQ(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a3,!0,u,new A.D(B.a1A,A.x(A.a([new A.bK(B.a9,w,w,t,w),new A.d5(1,B.cg,A.cb(A.x(A.a([new A.e4(new C.b19(r,w),s),B.S,A.A(A.a([A.E(A.en(B.Ag,w,D.hdE,new C.h5x(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f8,w,new A.ba(A.n(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.E(A.dc(B.a55,w,D.ha0,new C.h5y(r,d),A.bp(B.b5,w,w,w,B.c,w,B.f8,w,new A.ba(A.n(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.h,0,w,w)],p),B.l,w,B.e,B.M,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.M,0,B.p),w),B.f,B.aw,0,w,w,w,w,w,B.ai),w),w,w,0,AM.a2_,w,B.d7,w,w,w)},
$S:47}
C.h5w.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h5x.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.bk$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lv(2.5),$async$$0)
case 4:w=3
return A.b(e.ho(B.ho),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eR(B.dK.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aw(o,0,32)
w=5
return A.b(A.rA(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h5y.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.h_p(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h5r.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eE(w,B.aw,A.x(A.a([new A.D(D.bGu,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.nt,w,w,w),1),A.aI(w,w,w,w,B.lC,w,w,w,new C.h5p(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),w),new A.d5(1,B.cg,new A.D(B.f2,A.bw(A.n(14),A.h3(t,B.z,w,w,B.cp,B.dF,!1,w,!1,w,w),B.aq),w),w),new A.D(B.OZ,new A.a6(1/0,w,A.dc(B.o8,w,D.aZc,new C.h5q(t,this.c,d),A.bp(B.b5,w,w,w,B.c,w,w,w,new A.ba(A.n(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.M,0,B.p),w,w,w,B.Pa,w,B.d7,w,new A.ba(v,B.a1),w)},
$S:47}
C.h5p.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h5q.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rA(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h5D.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eE(w,B.aw,new A.D(D.bGC,A.x(A.a([A.A(A.a([D.bMo,A.aI(w,w,w,w,B.lC,w,w,w,new C.h5B(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),B.P,new A.e4(A.bw(A.n(14),A.p(w,A.b4(w,w,w,new C.beu(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a6(1/0,w,A.dc(B.o8,w,D.aZc,new C.h5C(t,s,d),A.bp(B.b5,w,w,w,B.c,w,w,w,new A.ba(A.n(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.M,0,B.p),w),w,w,w,w,w,B.d7,w,new A.ba(v,B.a1),w)},
$S:47}
C.h5B.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h5C.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.bk$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lv(2.5),$async$$0)
case 4:w=3
return A.b(e.ho(B.ho),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aw(p,0,32)
r=J.eR(B.dK.gaS(s))
w=5
return A.b(A.rA(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fNk.prototype={
$1(d){return d.a===this.a},
$S:256}
C.dTS.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dTD.prototype={
bpg(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ek:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dTG(s,q,e),p,!0,!0,!1,B.KR,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dTH(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bpg(d,e)},
$S:1947}
C.dTG.prototype={
$1(d){var w,v=null,u=this.c===B.xH,t=u?D.dAR:D.dw7
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aS:B.aw,v,v,v,v,v,v,v,v,15,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bo(!0,new A.D(P.ao1,A.x(A.a([u,B.at,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bu:B.bj,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iK(!0,v,v,B.y,D.fvf,new C.dTF(this.a,w,t,d),t.length,v,B.e4,B.ah,!0)],x.p),B.am,v,B.e,B.M,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:27}
C.dTF.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cU.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.n(14)
if(q)u=B.cU
else u=(t.b.a.d.a?B.bu:B.bj).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.p(B.z,C.b18(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dTE(t.d,r),s,s,s,s,s,s,s)},
$S:183}
C.dTE.prototype={
$0(){A.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.dTH.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dTB.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:86}
C.dTC.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cI(B.cn,e,v)
return new A.d9(e,!1,A.iC(B.z,A.at(A.aG(!1,B.a3,!0,v,new A.e6(new C.dTA(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bj(t,new A.bq(0.96,1,u),u.k("bj<bR.T>"))),v)},
$S:34}
C.dTA.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aF(d,B.bW,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ek:B.c,f=A.n(14),e=A.K((h?B.bu:B.bj).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,16,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.es,A.W(B.cz,i.a.d.a?B.bu:B.bj,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dTl(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.h,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aWh("Name")
r=l.a
q=r.d==null?k:new C.dTm(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bs:B.ml
n=A.K(B.cU.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bgC(new A.D(B.f7,A.aM(!1,p,!0,A.p(B.z,C.b18(m==null?"\ud83d\udc64":A.fU5(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cr,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ll,k,B.acr,k,k)
v=A.a([v,B.af,t,B.P,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ak,A.A(A.a([A.E(i.aWY("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dTn(r,a0),r.d===B.xH),1),B.aa,A.E(i.aWY("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dTs(r,a0),r.d===B.a8X),1)],u),B.l,k,B.e,B.h,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.P,new A.bK(B.a5,k,k,A.hu(D.c2c,D.hbV,new C.dTt(r,l.e,a0),A.ft(k,k,k,k,k,k,k,k,k,k,k,B.cU,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cl)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.v9(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aWi("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.al,k,k,s,k,k,B.eg,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.K((t?B.bu:B.bj).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xA(r.a,!1)
v.push(A.aG(!1,B.a3,!0,q,A.aM(!1,p,!0,A.p(k,A.A(A.a([A.E(A.x(A.a([t,B.bC,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.B,k,B.e,B.h,0,B.p),1),D.bZI],u),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.m),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dTu(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.P,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aWh("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,12.5,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b4C(r.b.length!==0,B.ms,new C.dTv(r,i,a0),new C.dTw(r,a0),"Upload from gallery","ID photo"))
v.push(i.b4C(r.c.length!==0,D.bSX,new C.dTx(r,i,d,a0),new C.dTy(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new AH.a9n("Signature (optional)",t,new C.dTz(a0),new C.dTo(a0,t),new C.dTp(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bu:B.bj
s=(i?B.bu:B.bj).j(0.28)
s=A.E(A.dW(E.aZ5,new C.dTq(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.r_,k,new A.ba(A.n(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cU,k,k,k,B.c,k,B.r_,k,new A.ba(A.n(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.aa,A.E(A.bI(A.c(h?"Save":"Update",k,k,k,k,k,k,B.w6,k,k,k),k,new C.dTr(r,w,d),t),1)],u),B.l,k,B.e,B.h,0,k,k))
return A.p(k,A.cb(A.x(v,B.am,k,B.e,B.M,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.m),k,k,k,B.r1,B.jz,k,k,360)},
$S:176}
C.dTl.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dTm.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dTn.prototype={
$0(){return this.b.$1(new C.dTk(this.a))},
$S:0}
C.dTk.prototype={
$0(){var w=this.a
w.d=B.xH
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dTs.prototype={
$0(){return this.b.$1(new C.dTj(this.a))},
$S:0}
C.dTj.prototype={
$0(){var w=this.a
w.d=B.a8X
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dTt.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dTu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wc(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dTi(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTi.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gck(),w.gci(),w.gcA(),0,0,0,0,0)},
$S:0}
C.dTv.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.QA(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dTh(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTh.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dTw.prototype={
$0(){return this.b.$1(new C.dTg(this.a))},
$S:0}
C.dTg.prototype={
$0(){return this.a.b=""},
$S:0}
C.dTx.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ek:B.c
w=3
return A.b(A.bU(q,null,new C.dTe(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.QA(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dTf(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTe.prototype={
$1(d){var w=null
return A.bo(!0,A.x(A.a([A.dM(!1,w,w,w,!0,w,w,w,!0,w,w,B.atv,w,w,w,w,new C.dT8(d),!1,w,w,w,w,w,w,w,D.h1T,w,w,w),A.dM(!1,w,w,w,!0,w,w,w,!0,w,w,B.att,w,w,w,w,new C.dT9(d),!1,w,w,w,w,w,w,w,D.h8Z,w,w,w)],x.p),B.l,w,B.e,B.M,0,B.p),!0,!1,B.ag,!0,!0)},
$S:27}
C.dT8.prototype={
$0(){A.a8(this.a,!1).N("camera")
return null},
$S:0}
C.dT9.prototype={
$0(){A.a8(this.a,!1).N("gallery")
return null},
$S:0}
C.dTf.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dTy.prototype={
$0(){return this.b.$1(new C.dTd(this.a))},
$S:0}
C.dTd.prototype={
$0(){return this.a.c=""},
$S:0}
C.dTz.prototype={
$0(){return this.a.$1(new C.dTc())},
$S:0}
C.dTc.prototype={
$0(){},
$S:0}
C.dTo.prototype={
$0(){return this.a.$1(new C.dTb(this.b))},
$S:0}
C.dTb.prototype={
$0(){return B.d.a5(this.a)},
$S:0}
C.dTp.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ajE(u.a,null,null,new C.dTa(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTa.prototype={
$4(d,e,f,g){this.a.$1(new C.dT7(this.b,d))},
$S:445}
C.dT7.prototype={
$0(){var w=this.a
B.d.a5(w)
B.d.u(w,this.b)},
$S:0}
C.dTq.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dTr.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.T(D.fAp)
return}if(w.a.d==null){w.c.L(x.q).f.T(D.fxe)
return}A.a8(w.c,!1).N(!0)},
$S:0}
C.dTV.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:86}
C.dTW.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ek:B.c,n=A.n(14),m=A.K((p?B.bu:B.bj).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,16,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.BF(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bu:B.bj,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zX(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zX(r).length>0?B.bE:B.cU,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bj
t=(q?B.bu:B.bj).j(0.28)
s=x.p
return new A.d9(e,!1,A.at(A.aG(!1,B.a3,!0,r,A.p(r,A.x(A.a([p,B.P,v,u,B.aA,A.A(A.a([A.E(A.dW(B.om,new C.dTT(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.jU,r,new A.ba(A.n(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.E(A.bI(D.h9q,r,new C.dTU(d),A.bp(B.cU,r,r,r,B.c,r,B.jU,r,new A.ba(A.n(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.h,0,r,r)],s),B.am,r,B.e,B.M,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.m),r,r,r,B.zt,B.HJ,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dTT.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dTU.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dTP.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dTQ(r),p=r.a.d.a,o=p?B.ek:B.c,n=A.n(14),m=A.K((p?B.bu:B.bj).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aS:B.aw,s,s,s,s,s,s,s,s,14,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.BF(l.c),s,s,s,s,s,s,D.fND,s,s,s)],p),B.l,s,B.e,B.h,0,s,s)
w=A.j3((r.a.d.a?B.bu:B.bj).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a3J,"View receipt",new C.dTI(r,d,l))
u=l.x!=null
t=u?B.pU:B.r9
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bGz,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dTJ(r,d,l)),q.$3$icon$label$onTap(B.Do,"Edit",new C.dTK(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.ms,"View / download ID",new C.dTL(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bSW,"View / download selfie",new C.dTM(r,d,l)))
if(l.gaIS())p.push(q.$3$icon$label$onTap(Ar.a4W,"View / download signature",new C.dTN(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bE,B.eo,"Delete",new C.dTO(r,d,l)))
p.push(B.at)
return A.bo(!0,new A.D(V.tp,A.p(s,A.x(p,B.l,s,B.e,B.M,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:27}
C.dTQ.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.aw
else w=d
return A.aM(!1,v,!0,new A.D(B.eX,A.A(A.a([A.W(e,w,v,v,v,20),B.bb,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1948}
C.dTI.prototype={
$0(){A.a8(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h5v(w,this.c)},
$S:0}
C.dTJ.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.To(this.c)},
$S:0}
C.dTK.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.DY(this.c)},
$S:0}
C.dTL.prototype={
$0(){var w,v,u
A.a8(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bIa(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dTM.prototype={
$0(){var w,v,u
A.a8(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bIa(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dTN.prototype={
$0(){A.a8(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h5A(w,this.c)},
$S:0}
C.dTO.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.Qz(0,this.c)},
$S:0}
C.dTX.prototype={
$1(d){return d.x==null},
$S:256}
C.dTY.prototype={
$1(d){return d.x!=null},
$S:256}
C.dTZ.prototype={
$2(d,e){return d+e.c},
$S:1949}
C.dU_.prototype={
$0(){return this.a.bFi()},
$S:0}
C.dTR.prototype={
$0(){return this.a.ah8(this.b)},
$S:0}
C.fO5.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fO6.prototype={
$0(){return B.d.gH(D.a6d)},
$S:z+77}
C.dj4.prototype={
$0(){var w=this.a
return w.l(new C.dj2(w,this.b))},
$S:0}
C.dj2.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dj3.prototype={
$0(){},
$S:0}
C.dj5.prototype={
$0(){var w=this.a.gc3S()
A.a8(this.b,!1).N(w)
return null},
$S:0}
C.fQE.prototype={
$1(d){return C.hu5(A.a1(d,x.N,x.z))},
$S:z+11}
C.fQF.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fQG.prototype={
$2(d,e){var w=A.c8(d.a,null),v=A.c8(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.h46.prototype={
$1(d){return d.ak()},
$S:z+12}
C.hcM.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fNb.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bTy.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eD(e,v)?v:null},
$S:1950}
C.h4H.prototype={
$1(d){var w=this
return new C.a09(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.djK.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.djJ(w,d))},
$S:z+80}
C.djJ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djy.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cL(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.djv.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dj6.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dj7.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.djz.prototype={
$0(){return this.a.w=!1},
$S:0}
C.djf.prototype={
$1(d){var w=null,v=A.Q(d).ax.a===B.I,u=v?B.ek:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eh(A.a([A.bO(!1,B.dr,w,w,!0,w,w,w,new C.djd(d),w,w),A.bI(B.y6,w,new C.dje(d),A.bp(B.nE,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.djd.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dje.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.djg.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.djw.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.djx.prototype={
$0(){return B.d.gH(D.As)},
$S:z+14}
C.djb.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzg(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Ur(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.djc.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djh.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_I(v,u,J.ad(w.d),null)},
$S:z+40}
C.dji.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djI.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.aA(s,new C.a_n(r.y,r.gzg(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.djG(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.bdP(v,e,w,u,t,r.gbW1(),C.hKh(r.y.Q),r.gzg(0),s)
w=t}return A.c9(q,new C.djH(r,e),new A.D(B.a1T,w,s))},
$S:1951}
C.djH.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd3(t).ay){t=this.b
u=x.cy.a(B.d.gd3(u.f.f)).gvv(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.dw()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fI(v*3.141592653589793*0.5)
return A.fC(B.a5,A.d0(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.djG.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aK3(B.qU,B.iK)},
$S:0}
C.djs.prototype={
$0(){var w=this.a
return w.l(new C.djr(w))},
$S:0}
C.djr.prototype={
$0(){return this.a.w=!0},
$S:0}
C.djt.prototype={
$0(){var w=this.a.c
w.toString
A.a8(w,!1).N(null)
return null},
$S:0}
C.dj8.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.kD.j(0.5),r=x.p,q=A.a([D.h0q,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cv(p.d)?"Write this book":"Write a new book"
q.push(p.a_m(d,B.ef,w,J.cv(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_m(d,K.arn,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cL(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cx,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kZ.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cx,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kZ.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_m(d,A0.asm,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_m(d,B.oY,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_m(d,B.oY,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eE(u,E.Cz,A.bo(!0,new A.D(Aq.zq,A.x(q,B.B,u,B.e,B.M,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.Pd,u,B.d7,u,new A.ba(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:47}
C.dju.prototype={
$0(){A.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.djl.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cL(w.d)
return new C.a0b(v,J.cL(w.d),w.r+1,null)},
$S:z+44}
C.djm.prototype={
$1(d){var w=null
return A.p8(!1,A.eh(w,w,w,E.Cz,new A.kf(this.a,new C.djk(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:344}
C.djk.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.ac4,B.ph,A.E(A.c(e,w,w,w,w,w,w,B.jK,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:755}
C.djn.prototype={
$0(){return this.a.a=!1},
$S:53}
C.djo.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:202}
C.djp.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djq.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BM(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.T4(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.djj(s,t))
w=4
return A.b(s.lf(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.djj.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djB.prototype={
$1(d){var w=null
return A.p8(!1,A.eh(w,w,w,E.Cz,new A.kf(this.a,new C.djA(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:344}
C.djA.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.ac4,B.ph,A.E(A.c(e,w,w,w,w,w,w,B.jK,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:755}
C.djC.prototype={
$0(){return this.a.a=!1},
$S:53}
C.djD.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:202}
C.djE.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:202}
C.djF.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BM(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lf(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dj9.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.bmd(B.qU,Ac.OP)},
$S:0}
C.dja.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aK3(B.qU,Ac.OP)},
$S:0}
C.dlw.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dlx.prototype={
$1(d){var w=this.a
return w.l(new C.dlv(w))},
$S:9}
C.dlv.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dly.prototype={
$1(d){var w=this.a
return w.l(new C.dlu(w))},
$S:9}
C.dlu.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dlz.prototype={
$1(d){var w=this.a
return w.l(new C.dlt(w))},
$S:9}
C.dlt.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dlA.prototype={
$0(){var w=this.a
return w.l(new C.dls(w,this.b))},
$S:0}
C.dls.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dlB.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga3k()
A.a8(this.b,!1).N(new A.bsP(w,v))},
$S:0}
C.djZ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.djY.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a07(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dk2.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dk1.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bc9(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hE,v,v,v)
return A.eh(A.a([A.bO(!1,B.dr,v,v,!0,v,v,v,new C.dk_(d),v,v),A.bI(B.y6,v,new C.dk0(d),A.bp(B.nE,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Cz,w,v,v,v,v,D.h_c,v)},
$S:18}
C.dk_.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dk0.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dk3.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dk4.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a6(s,t,w[u],t))
return A.cb(A.bZ(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bHz,t,t,B.ah)},
$S:348}
C.djX.prototype={
$0(){return this.a.Ro(0,this.b)},
$S:0}
C.djW.prototype={
$0(){return this.a.QO(0,this.b)},
$S:0}
C.cRQ.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cRR.prototype={
$0(){return B.d.gH(D.As)},
$S:z+14}
C.cRS.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bS(0,new A.D(d,new A.bP(new A.o(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bm,w,w),w),0,0,0)},
$S:1953}
C.daP.prototype={
$1(d){return this.a.l(new C.daO(this.b,this.c))},
$S:9}
C.daO.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.dbd.prototype={
$1(d){return this.a.l(new C.db0())},
$S:2}
C.db0.prototype={
$0(){},
$S:0}
C.dbe.prototype={
$1(d){return this.a.l(new C.db_())},
$S:2}
C.db_.prototype={
$0(){},
$S:0}
C.dbf.prototype={
$0(){var w=this.a
return w.l(new C.daZ(w,this.b))},
$S:0}
C.daZ.prototype={
$0(){var w=this.a
return w.d=w.goB().Gv(this.b.a)},
$S:0}
C.dbg.prototype={
$0(){var w=this.a
return w.l(new C.daY(w,this.b))},
$S:0}
C.daY.prototype={
$0(){var w=this.a
return w.d=w.goB().cQk(this.b)},
$S:0}
C.dbh.prototype={
$1(d){return this.a.l(new C.daX())},
$S:2}
C.daX.prototype={
$0(){},
$S:0}
C.dbi.prototype={
$0(){var w=this.a
return w.l(new C.daW(w,this.b))},
$S:0}
C.daW.prototype={
$0(){var w=this.a
return w.d=w.goB().cQp(this.b.a)},
$S:0}
C.dbj.prototype={
$1(d){var w=this.a
return w.l(new C.db8(w,d))},
$S:6}
C.db8.prototype={
$0(){var w=this.a
return w.d=w.goB().cRj(this.b)},
$S:0}
C.dbk.prototype={
$1(d){var w=this.a
return w.d=w.goB().aH0(d)},
$S:2}
C.dbl.prototype={
$1(d){var w=this.a
return w.d=w.goB().cQs(d)},
$S:2}
C.dbn.prototype={
$1(d){var w=this.a
return w.d=w.goB().cRh(d)},
$S:2}
C.dbo.prototype={
$1(d){var w=this.a
return w.l(new C.db7(w,d))},
$S:9}
C.db7.prototype={
$0(){var w=this.a
return w.d=w.goB().cR8(this.b)},
$S:0}
C.dbp.prototype={
$0(){var w=this.a,v=w.goB(),u=B.a.i(w.gzg(0).a.a),t=B.a.i(w.gaEa().a.a)
u=v.bgT(B.a.i(w.gatE().a.a),t,u)
A.a8(this.b,!1).N(u)
return null},
$S:0}
C.bTI.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bTC.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bTB(w,d))},
$S:11}
C.bTB.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bTL.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bTD.prototype={
$0(){var w=this.a
w.Q=D.b3C
w.aeJ(1)
w.r.x=null},
$S:0}
C.bTE.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b3C)return
w=new A.e0()
w.cT(u.as*13+u.a.e)
v=u.r
v.Q=3+w.av(3)
v.z=D.d9I[w.av(6)]
v.as=u.f.a+2.6},
$S:0}
C.bTH.prototype={
$0(){var w=this.a
w.Q=D.aeL
w.aeJ(2)
w.r.z=null},
$S:0}
C.bTG.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hUq
t.aeJ(3)
w=t.r
w.d=s
w.x="I say: "+t.gCQ()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.av(3)
w.z=s?D.dgT[v.av(4)]:D.dDz[v.av(3)]
w.as=t.a+2.8},
$S:0}
C.bTJ.prototype={
$0(){var w=this.a
w.Q=D.b3D
w.CW=this.b
w.cy=1
w.aeJ(4)
w.r.f=w.f.a+5},
$S:0}
C.bTK.prototype={
$0(){},
$S:0}
C.bTF.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bTz.prototype={
$0(){return this.a.Ly(this.b)},
$S:0}
C.bTA.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bVe.prototype={
$0(){var w=this
return w.a.RI(w.b,0,w.c,w.d)},
$S:0}
C.bVf.prototype={
$0(){var w=this
return w.a.RI(w.b,3,w.c,w.d)},
$S:0}
C.bVg.prototype={
$0(){var w=this
return w.a.RI(w.b,1,w.c,w.d)},
$S:0}
C.bVh.prototype={
$0(){var w=this
return w.a.bVs(w.b,w.c,w.d)},
$S:0}
C.bVi.prototype={
$0(){var w=this
return w.a.RI(w.b,4,w.c,w.d)},
$S:0}
C.bVj.prototype={
$0(){var w=this
return w.a.RI(w.b,2,w.c,w.d)},
$S:0}
C.bVk.prototype={
$0(){var w=this
return w.a.RI(w.b,5,w.c,w.d)},
$S:0}
C.bVl.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:756}
C.bVd.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a7m[d],p=q.a.a6(0,new A.r(0,-q.b*1.2*124)),o=A.h_(r,B.cH,r,3,r,A.d1(r,r,r,r,r,r,r,r,r,D.fEr,e),B.a7,B.cc,r,B.e1,B.cd)
o.nA(130)
w=o.b.a.c
w=p.aI(0,new A.r(0,w.gb8(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bx(A.bY(w,v.gb8(v)+12,u+18),B.ii)
u=this.a
v=t.eI(B.dQ)
w=$.T()
s=A.L()
s.r=B.dG.gp(0)
u.aq(v,s)
s=A.L()
s.r=D.qK.gp(0)
u.aq(t,s)
w=new A.aH(w.r,B.aj,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bA())
v=A.L()
v.r=D.qK.gp(0)
u.af(w,v)
o.a4(u,new A.r(t.a+9,t.b+6))},
$S:757}
C.bTZ.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bU_.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.anr(d),w.anr(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fB3.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.hcC.prototype={
$2(d,e){if(e!=null)J.c6(this.a.c_(0,d,new C.hcD()),e)},
$S:z+66}
C.hcD.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.hcE.prototype={
$1(d){return d!==this.a},
$S:3}
C.hcF.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.hcG.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hcB(this.c,d))},
$S:3}
C.hcB.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.hcH.prototype={
$1(d){return d!==this.a},
$S:3}
C.hcI.prototype={
$1(d){return d!==this.a},
$S:3}
C.hcJ.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hcA(this.c,d))},
$S:3}
C.hcA.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fOJ.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.h30.prototype={
$1(d){return d.Q},
$S:z+15}
C.h31.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fKx.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fRA.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bOJ.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.hd2.prototype={
$2(d,e){return B.o.aQ(C.hGl(d),C.hGl(e))},
$S:216}
C.hd3.prototype={
$1(d){return d!==this.a},
$S:3}
C.h3D.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bMS.prototype={
$0(){var w=this.a
w.ch=!0
w.bal()},
$S:0}
C.bMN.prototype={
$0(){},
$S:0}
C.bMT.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bML.prototype={
$0(){},
$S:0}
C.bMM.prototype={
$0(){},
$S:0}
C.bMR.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b4(u,u,u,new C.bew(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.v.j(0.7)
v=A.n(14)
s.push(A.ao(u,A.p(u,A.c(t.dy,u,u,u,u,u,u,D.fMc,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.m),u,u,u,u,B.bT,u,u,u),u,u,14,14,6,u))}return A.aA(B.c_,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bMO(t,e),u,u,u,u,u,u,u,new C.bMP(t,e),u,u,u,u,u,u,u,u,u,new C.bMQ(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bMO.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bMQ.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bMP.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bMK.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.csP.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.csQ.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.csO(w))},
$S:0}
C.csO.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.csR.prototype={
$0(){var w=this,v=w.a
v.gj_()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.csS.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.csT.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.csU.prototype={
$0(){},
$S:0}
C.csV.prototype={
$0(){var w=this.a
w.z=w.XR(++w.e)
w.Q=A.c1(w.gkR()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.csL.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.csM.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj_().length,e=i/2,d=new C.csN(i,f,h),a0=g.as,a1=A.a5(a0).k("b9<2>")
a0=A.B(new A.b9(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.c9(new A.hz(a0),new C.csG(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj_().length!==0&&!B.d.q(g.gj_(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.R6(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cN(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new W.Nb(new C.csH(g,u),new C.csI(g,u),new C.csJ(g,u),j,j,new A.bf("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fo:B.be,j,j,j,j,j,j,j,j,13,j,j,B.F,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj_().length!==0&&!B.d.q(g.gj_(),-1)){a0=g.e+1>=g.gkR().length?"See my result":"Next family"
g=A.at(C.uG(a0,g.gqr(g),B.cW,B.jB,D.fJ),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.XR(0):s).length))break
if(!B.d.q(g.gj_(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.XR(0)
o=s}else o=s
n=s[u]
n=A.e7(B.z,new C.R6(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.XR(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.rn(new A.bq(0,p,t),new C.csK(),new W.EI(u,j,new C.R6(l.b,k,62,!1,j),new A.kZ(0.25,new C.R6(m.b,k,62,!1,j),j),new A.ko(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,W.hK9(),!0,!0,j,j,j,j,j,j,!1,B.j0,j,new A.bf("chip-"+r,a0),w),B.b_,B.iZ,j,new A.bf("t"+r+"-"+q,a0),v))}++u}g=A.bZ(B.fT,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:63}
C.csN.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:743}
C.csG.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gj_().length!==0&&!B.d.q(t.gj_(),-1)
return A.b4(p,p,p,new C.bdY(q.b,o,v,w,p),B.az)},
$S:59}
C.csI.prototype={
$1(d){return this.a.gj_()[this.b]===-1},
$S:z+30}
C.csJ.prototype={
$1(d){return this.a.cUb(this.b,d.a)},
$S:z+31}
C.csH.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj_()[t]!==-1,r=A.n(18),q=e.length!==0?B.cW.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cW:B.jS,B.r,2)
u=s?A.lz(new C.csF(),A.at(new C.R6(u.gaGt()[u.gj_()[t]].b,u.gaGt()[u.gj_()[t]].a,62,!1,v),v,v,v),B.ny,B.iZ,v,v,new A.bq(0.3,1,x.X),x.i):D.beV
return A.cT(v,u,v,v,B.b_,new A.o(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:1956}
C.csF.prototype={
$3(d,e,f){return A.e7(B.z,f,e,null,null)},
$S:113}
C.csK.prototype={
$3(d,e,f){return A.dR(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:113}
C.cSU.prototype={
$1(d){return d>=1},
$S:118}
C.cHN.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkR()[w.e].d.length)w.l(new C.cHM(w))},
$S:11}
C.cHM.prototype={
$0(){return this.a.f++},
$S:0}
C.cHV.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cHW.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cHX.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cHU(w))},
$S:0}
C.cHU.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cHY.prototype={
$0(){return this.a.f++},
$S:0}
C.cHZ.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cI_.prototype={
$0(){},
$S:0}
C.cI0.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a5(0)
w.as=!1
w.ay=0},
$S:0}
C.cHP.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.cHQ.prototype={
$3(d,e,f){var w=null
return A.lz(new C.cHO(this.a,e),w,B.b_,B.hx,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:1957}
C.cHO.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cW.j(u.as?0.6:0.15)
t=A.a([new A.aa(0,B.H,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.p(v,A.ic(new A.BW(new A.v3(B.v.j(e),B.MM,v,B.Zn),H.bZu(A.b4(v,v,v,new C.aCE(u.gkR()[u.e].c,u.as,v),B.az),new A.EN(w,w,B.Xf)),v),B.aq),B.f,v,v,new A.o(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:1958}
C.cHR.prototype={
$3(d,e,f){return A.d0(A.dR(f,new A.r(0,14*(1-e))),e)},
$S:100}
C.cHS.prototype={
$3(d,e,f){return A.dR(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:113}
C.cHT.prototype={
$0(){return this.a.brA(this.b)},
$S:0}
C.fdg.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.anY$)
v.anY$=w
v.qf$.sp(0,w)
v.arS(u)},
$S:7}
C.fny.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:11}
C.bUK.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bUJ())},
$S:0}
C.bUJ.prototype={
$0(){},
$S:0}
C.bUH.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bUF.prototype={
$0(){},
$S:0}
C.bUG.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gNc()
w=s+1>=r.length?3:5
break
case 3:q=C.bIo(p.gaqI(0),0,r.length)
p.l(new C.bUC(p,q))
o=p
w=6
return A.b(C.C7(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.C8(s.d,s.c.a,"school",p.gaqI(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bUD())
w=4
break
case 5:p.l(new C.bUE(p))
p.gqy().Wq(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bUC.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bUD.prototype={
$0(){},
$S:0}
C.bUE.prototype={
$0(){return this.a.x++},
$S:0}
C.bUI.prototype={
$0(){return this.a.Ly(this.b)},
$S:0}
C.bUB.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.fdh.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hKn(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.F_
C.T2(q,D.eyC,0,0.2,-0.6,-0.2,null,w,D.exl,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a6(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.T()
p=A.L()
p.r=D.H4.gp(0)
p.c=3
p.d=B.bF
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.fdi.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.T2(this.a,D.exI,0,u,0.7,-0.5,null,null,D.Kq,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.fdj.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.T2(this.a,D.ezp,0,0,0.8,-0.5,null,null,D.Kq,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.fdk.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.T2(w.b,D.eyw,0,v,-0.8,-0.5,null,null,D.Kq,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.fdl.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.eyA:D.F_
C.T2(p,D.ey0,0,t,0,-0.6,null,v,D.Kq,3,0,s,1.3,u,0,w,0)
q=q.cec(new A.r(222,455),9)
$.T()
w=A.L()
w.r=B.cW.gp(0)
p.af(q,w)},
$S:0}
C.fdm.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:756}
C.bUn.prototype={
$2(d,e){return d+e},
$S:64}
C.bUy.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bUz.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bUA.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj_()[u.b]=s
t.gj_()[u.d]=t.y
w=t.as
v=t.qf$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bUu.prototype={
$1(d){return d},
$S:95}
C.bUt.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qf$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bUv.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bUw.prototype={
$0(){},
$S:0}
C.bUx.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FZ(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.ce(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a5(0)},
$S:0}
C.bUp.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.bUq.prototype={
$2(d,e){var w=this.a
w=w.gkR()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:64}
C.bUr.prototype={
$2(d,e){var w=null,v=C.hkW(new A.av(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.aA(B.c_,new A.e4(A.b4(w,w,w,new C.blc(u,u.qf$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bUo(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bUo.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj_().length
u=B.o.D(B.i.bc((t.a-s.a)/r/450*v),0,v-1)
w.d48(w.gj_()[u])}},
$S:23}
C.bUs.prototype={
$1(d){var w=this.a
return w.gkR()[w.f].d[d]},
$S:76}
C.duY.prototype={
$2(d,e){return 0},
$S:64}
C.bU9.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bU8())},
$S:0}
C.bU8.prototype={
$0(){},
$S:0}
C.bU7.prototype={
$0(){},
$S:0}
C.bU1.prototype={
$0(){},
$S:0}
C.bU2.prototype={
$0(){},
$S:0}
C.bU6.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.BM},
$S:0}
C.bU5.prototype={
$1(d){var w=null,v=this.a.gqy(),u=A.c(d,w,w,w,w,w,w,D.aXG,w,w,w),t=v.gbnZ(0)
return A.aA(B.c_,A.x(A.a([u,B.bC,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aXT,w,w,w)],x.p),B.B,w,B.e,B.h,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbtX(v),w,w,w,w,w,w,!1,B.a4)},
$S:128}
C.bU3.prototype={
$0(){return this.a.Ly(this.b)},
$S:0}
C.bU4.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bU0.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.e5u.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e5v.prototype={
$1(d){return this.a},
$S:43}
C.e5w.prototype={
$0(){var w=this.a
return w.d=w.gTq().bgm(this.b)},
$S:0}
C.e5s.prototype={
$1(d){return new C.Us(this.a,null)},
$S:z+32}
C.e5t.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e5r.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hE,w,w,w)
return A.eh(A.a([A.bO(!1,E.aZf,w,w,!0,w,w,w,new C.e5p(d),w,w),A.bO(!1,D.h6R,w,w,!0,w,w,w,new C.e5q(d),w,w)],x.p),w,w,D.fJ,v,w,w,w,w,D.fUb,w)},
$S:18}
C.e5p.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e5q.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.e5o.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e5x.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e5y.prototype={
$0(){var w=this.a,v=this.b,u=C.bG4(v,10,w.r,!1)
return w.uF(C.hu6(w.a.d,"kahoot",u,w.gb7S(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e5z.prototype={
$0(){var w=this.a
return w.uF(new C.amU(this.b,w.a.d,w.r,null))},
$S:0}
C.e5A.prototype={
$0(){var w=this.a
return w.uF(new C.al3(this.b,w.a.d,w.r,null))},
$S:0}
C.e5D.prototype={
$0(){var w=this.a
return w.uF(new C.avT(this.b,w.a.d,w.r,null))},
$S:0}
C.e5E.prototype={
$0(){var w=this.a
return w.uF(new C.azR(this.b,w.a.d,w.r,null))},
$S:0}
C.e5F.prototype={
$0(){var w=this.a
return w.uF(new C.amX(this.b,w.a.d,w.r,null))},
$S:0}
C.e5G.prototype={
$0(){var w=this.a
return w.uF(new C.an0(this.b,w.a.d,w.r,null))},
$S:0}
C.e5H.prototype={
$0(){var w=this.a
return w.uF(new C.an2(this.b,w.a.d,w.r,null))},
$S:0}
C.e5I.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d4t()
return v.uF(C.hu6(v.a.d,"creator_"+u.a,w,v.gb7S(),"A game by the family",t,this.c.a))},
$S:0}
C.e5J.prototype={
$0(){return this.a.Pj(this.b)},
$S:0}
C.e5K.prototype={
$0(){return this.a.Yi(0,this.b)},
$S:0}
C.e5B.prototype={
$0(){return this.a.Pj(null)},
$S:0}
C.e5C.prototype={
$0(){return this.a.L(x.q).f.T(D.fxk)},
$S:0}
C.bUl.prototype={
$0(){var w=this.a
w.d=D.b2I
w.z=3},
$S:0}
C.bUm.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aQV()}else w.l(new C.bUk(w))},
$S:11}
C.bUk.prototype={
$0(){return this.a.z--},
$S:0}
C.bUb.prototype={
$0(){var w=this.a
w.d=D.aer
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bUc.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bUa(w))
if(w.as<=0){d.a1(0)
w.b7O(-1)}},
$S:11}
C.bUa.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bUh.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.XW},
$S:0}
C.bUi.prototype={
$0(){return this.a.e++},
$S:0}
C.bUe.prototype={
$0(){var w=this.a
w.d=D.b2J
w.ay=this.b},
$S:0}
C.bUf.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bUj.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:1959}
C.bUg.prototype={
$0(){return this.a.Ly(this.b)},
$S:0}
C.bUd.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bTM.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.az()
s=A.a([new A.au(new A.bd(s,B.b6,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.bd(u,B.b6,B.aP),r))}return s},
$S:1960}
C.bTN.prototype={
$0(){return this.a.gDq().c.push(C.heH(null,0,20,""))},
$S:0}
C.bTX.prototype={
$1(d){var w=null
return A.bC(w,new A.b6(4,A.n(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.ds,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Fw,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:246}
C.bTW.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDq().c,m=this.b,l=n[m],k=o.chn(l),j=B.c.j(0.06),i=A.n(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.LK,p,p,p),B.aY],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.atg,p,p,p,new C.bTR(o,m),p,p,p,p,p,p))
n=J.a2(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.h,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bTS(l),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dn,!0,B.a7,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aFh[v]
t=D.aEY[v]
s=v+1
f.push(new A.D(B.eK,new A.c3(B.aL,B.e,B.h,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.H(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.aa,new A.bz(1,B.ba,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bTT(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dn,!0,B.a7,p,B.ao,p,p,p,p),p),new AP.PI(v,l.c,new C.bTU(o,l),p,!1,D.lS,p,p,p,p,p,!1,!1,p,I.b3q,p,p,p,p,p,w)],g),p),p))}f.push(D.fZS)
f.push(B.ak)
n=A.a([D.fTf,B.aa],g)
for(r=0;r<3;++r){q=D.ciC[r]
n.push(new A.D(B.f7,A.jN(p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bTV(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.h,0,p,p))
return A.p(p,A.x(f,B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.m),p,p,p,B.kH,B.bl,p,p,p)},
$S:158}
C.bTR.prototype={
$0(){var w=this.a
return w.l(new C.bTQ(w,this.b))},
$S:0}
C.bTQ.prototype={
$0(){return B.d.cJ(this.a.gDq().c,this.b)},
$S:0}
C.bTS.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bTT.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bTU.prototype={
$1(d){return this.a.l(new C.bTP(this.b,d))},
$S:153}
C.bTP.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bTV.prototype={
$1(d){return this.a.l(new C.bTO(this.b,this.c))},
$S:9}
C.bTO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e79.prototype={
$0(){var w=this.a
w.wD()
w.a.bw()
w.a.qs()},
$S:0}
C.e78.prototype={
$0(){var w=this.a
w.wD()
w.a.bw()
w.a.qs()},
$S:0}
C.e7b.prototype={
$0(){var w=this,v=w.b
if(J.cL(v)||J.cv(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e7c.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7d.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e77.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e7a.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e7f.prototype={
$0(){this.a.PF()
return null},
$S:0}
C.e7e.prototype={
$0(){return this.a.Fi(this.b)},
$S:0}
C.e6A.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bO(!1,B.dr,w,w,!0,w,w,w,new C.e6y(d),w,w),r=A.bp(B.bR,w,w,w,w,w,w,w,w,w,w,w)
return A.eh(A.a([s,A.bI(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e6z(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e6y.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e6z.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.e6B.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cQO(this.b)},
$S:0}
C.e6v.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aWy(w.b,w.c,w.d)},
$S:7}
C.e5X.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e5Y.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6e.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.HD(t.a.c),$async$$0)
case 2:s=r.nK(q.dL(e,new C.e6c(t)))
if(s!=null&&t.c!=null)t.l(new C.e6d(t,s))
t.a.bw()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e6c.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e6d.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6f.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e6g.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6u.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cRA(C.hKx(w),w)},
$S:0}
C.e6b.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.WP(u,w,C.aSc(u,w),new C.e6a(v),null)},
$S:z+37}
C.e6a.prototype={
$1(d){return this.bpn(d)},
bpn(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e69(s,d))
w=3
return A.b(s.uB(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:543}
C.e69.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.bgm(this.b)},
$S:0}
C.e6r.prototype={
$1(d){return d.as},
$S:z+1}
C.e6s.prototype={
$1(d){var w=this
return new A.e6(new C.e6q(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.e6q.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ek:B.c,h=A.n(26),g=A.K(B.bR.j(0.5),B.r,1.5),f=A.p(k,D.bXV,B.f,k,k,new A.o(B.bR.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.x(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.B,k,B.e,B.h,0,B.p),1)
f=A.A(A.a([f,B.bb,a0,A.aI(k,k,k,k,A.W(B.cz,j?B.bu:B.bj,k,k,k,k),k,k,k,new C.e6k(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.h,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bR:B.bR.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ax(B.bR,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bR
a0.push(A.aA(k,A.cT(k,A.c(m,k,k,k,k,k,k,new A.H(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b_,new A.o(q,k,new A.bE(n,n,n,n),new A.bc(p,p,p,p),k,k,B.m),B.hk,k,k,k,k,B.D2,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e6l(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bZ(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c9i,new A.D(D.bI_,f,k),new A.D(D.bHR,e,k),new A.D(B.r1,a0,k),new A.D(A0.aow,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.W(AA.ar8,j?B.bu:B.bj,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bHT,A.A(A.a([a0,B.ar,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,k,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.ayA(k,B.bR,k,k,!1,B.y,k,k,k,k,k,k,new C.e6m(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.h,0,k,k),k))}f.push(B.aA)
j=A.n(20)
e=A.a([new A.aa(0,B.H,B.aD.j(0.35),B.hR,12)],x.V)
f.push(A.aA(k,A.p(k,A.A(A.a([D.fTB,B.bb,D.bMl,D.bYA],w),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.cd7,B.m),k,k,k,B.ia,B.bH,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e6n(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.wZ,A.A(A.a([A.E(A.dW(B.dr,new C.e6o(a1),k),1),B.ar,A.E(A.bI(N.aZG,k,new C.e6p(t,a1),A.bp(B.bR,k,k,k,k,k,B.cm,k,k,k,k,k)),1)],w),B.l,k,B.e,B.h,0,k,k),k))
return A.bo(!0,A.p(k,A.cb(A.x(f,B.B,k,B.e,B.M,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.aq,k,k,new A.o(i,k,g,h,k,k,B.m),k,k,k,B.zh,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:90}
C.e6k.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e6l.prototype={
$0(){return this.b.$1(new C.e6j(this.a,this.c))},
$S:0}
C.e6j.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e6m.prototype={
$1(d){var w=this.a
w.l(new C.e6h(w,d))
this.b.$1(new C.e6i())},
$S:9}
C.e6h.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e6i.prototype={
$0(){},
$S:0}
C.e6n.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(new A.aIN(!0,w))
return null},
$S:0}
C.e6o.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e6p.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(new A.aIN(!1,w))
return null},
$S:0}
C.e6t.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cRo(this.b.b)
w.r.a5(0)},
$S:0}
C.e5L.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.ajP(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hDp(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e5M.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aGY(w)},
$S:0}
C.e6D.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.af4(this.b,w,this.c,null)},
$S:z+39}
C.e6x.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ek:B.c,t=A.n(20),s=A.W(B.kK,B.aV,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.M,0,B.p)
return A.eh(A.a([A.bI(D.haG,w,new C.e6w(d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.ba(t,B.a1),r,w)},
$S:18}
C.e6w.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e5N.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e5O.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e5P.prototype={
$1(d){return d.a},
$S:z+8}
C.e5Q.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.ie(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aGY(w)},
$S:0}
C.e5U.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.ajP(q)
w=A.U(q).k("X<1>")
q=A.B(new A.X(q,new C.e5S(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hDp(v.e,null,r,v.f,v.r,new C.e5T(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e5T.prototype={
$0(){return this.a.abS(this.b)},
$S:0}
C.e5S.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e5V.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.U(w).k("O<1,ie>")
w=A.B(new A.O(w,new C.e5R(this.b),v),v.k("ak.E"))
u.d=t.aGY(w)},
$S:0}
C.e5R.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e6C.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e66.prototype={
$1(d){return d.length!==0},
$S:3}
C.e67.prototype={
$1(d){var w=this
return new A.e6(new C.e65(w.a,w.b,w.c,w.d),null)},
$S:21}
C.e65.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ek:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.O(o,new C.e61(u,e,o),A.U(o).k("O<1,w>")))
p.push(B.P)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.n(12),B.dw),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.al,v,v,v,v,v,B.mJ,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.am,v,B.e,B.M,0,B.p)
t=w.a
return A.eh(A.a([A.bO(!1,B.dr,v,v,!0,v,v,v,new C.e62(d),v,v),A.bI(B.LT,v,new C.e63(t,u,o,e),A.bp(B.bR,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fYd,v,new C.e64(t,u,o,d),A.bp(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a6(360,v,p,v),v,v,v,v,r,v)},
$S:234}
C.e61.prototype={
$1(d){var w=null
return A.dM(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c65,w,w,w,new C.e60(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1961}
C.e60.prototype={
$0(){return this.a.$1(new C.e5Z(this.b,this.c))},
$S:0}
C.e5Z.prototype={
$0(){return B.d.X(this.a,this.b)},
$S:0}
C.e62.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e63.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e6_(w.c,u))
v.bN(0,B.ci)}},
$S:0}
C.e6_.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e64.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a8(w.d,!1).N(!0)},
$S:0}
C.e68.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cS2(this.b,D.va,C.HB(v,w.a.c))},
$S:0}
C.e6K.prototype={
$1(d){return d.as},
$S:z+1}
C.e6L.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.ji(this.b,w)},
$S:0}
C.e6M.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.iBr(v)
return w.X5(v==null?null:v.a)},
$S:0}
C.e6N.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.icG(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cz3(new A.av(u,t),v.gbn4(),new A.av(k,s))}k=A.n(22)
s=this.b.a
r=s?D.d7n:D.d5h
q=A.K(s?B.ds:D.bmP,B.r,1)
p=A.n(22)
o=A.bS(0,A.b4(m,m,m,new C.bhg(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bS(0,A.vg(new A.R(n,n,n,n),new A.a6(u,t,new C.bid(l.d,v,l.f,w,new C.e6G(l),l.gciz(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bAc(s,new C.e6H(l,e),new C.e6I(l,e),new C.e6J(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a7(B.aX,B.b1,B.x,r,m,m),B.m),m,m,m,U.anz,m,m,m,m)},
$S:178}
C.e6G.prototype={
$1(d){var w=this.a
w.l(new C.e6E(w,d))},
$S:2}
C.e6E.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.X(0,v)
else w.I(0,v)},
$S:0}
C.e6H.prototype={
$0(){var w=this.b
return this.a.bet(1.25,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e6I.prototype={
$0(){var w=this.b
return this.a.bet(0.8,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e6J.prototype={
$0(){var w=this,v=w.b
return w.a.aWy(new A.av(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbn4())},
$S:0}
C.e6O.prototype={
$0(){var w=this.a
return w.l(new C.e6F(w))},
$S:0}
C.e6F.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e5W.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fK(new A.fz(s.c)),$async$$0)
case 2:t.yI("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dk8.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bm3(u,C.hPg(v.c,u),new C.dk7(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dk7.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dk9.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bpq(d.d,d.c,u.f.q(0,d.a),new C.dk6(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dk6.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fO9.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nK(new A.cM(new A.X(v,new C.fOa(d),w.k("X<1>")),new C.fOb(),w.k("cM<1,m>")))},
$S:z+19}
C.fOa.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fOb.prototype={
$1(d){return d.a},
$S:z+8}
C.fO7.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fO8.prototype={
$1(d){return d.b},
$S:z+8}
C.fOe.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nK(new A.cM(new A.X(v,new C.fOf(d),w.k("X<1>")),new C.fOg(),w.k("cM<1,m>")))},
$S:z+19}
C.fOf.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fOg.prototype={
$1(d){return d.a},
$S:z+8}
C.fOc.prototype={
$1(d){var w,v=A.ex([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fOd.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dkb.prototype={
$0(){return this.a},
$S:z+46}
C.dks.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:247}
C.dkk.prototype={
$2(d,e){var w=this.a.c_(0,d,new C.dkl()),v=J.a2(w)
if(!v.q(w,e))v.I(w,e)},
$S:122}
C.dkl.prototype={
$0(){return A.a([],x.s)},
$S:758}
C.dkj.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eD(w,e)
return w===!0},
$S:268}
C.dkc.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dki.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dkh.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.Ei:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.Ei:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:1963}
C.dkd.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dkm.prototype={
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
t=J.aT(t==null?D.Ei:t)
while(t.C()){r=t.gP(t)
if(r.a!==a9&&!B.d.aR(w,new C.dkn(r)))w.push(r)}}B.d.bq(w,new C.dko(a8))
B.d.b_(w,new C.dkp())
q=C.icF(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.f5k],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bsy(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1964}
C.dkn.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dko.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dkp.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.dkq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a2(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b9(v,A.a5(v).k("b9<2>")).cD(0,0,B.or)+88-w.gH(n).a}else u=0
for(w=J.a2(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:665}
C.dkr.prototype={
$1(d){return 16+d*156},
$S:157}
C.dka.prototype={
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
t.n(0,d,new C.GT(r,new A.r(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GT(s,new A.r(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GT(s,new A.r(e,v)))}t=o.r.h(0,d)
t=J.aT(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.L8(d,new A.r(e+t,w),s,s.length))}},
$S:202}
C.dke.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aLW(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:122}
C.dkf.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dkg.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:759}
C.dkt.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:759}
C.dku.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:468}
C.dkv.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:185}
C.dkw.prototype={
$1(d){return d>=0.5},
$S:118}
C.ft9.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.hk(A.aM(!1,v,!0,new A.a6(38,38,A.W(d,this.a.c?B.c:B.cu,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1966}
C.f31.prototype={
$1(d){var w=null,v=A.n(8),u=B.bR.j(0.12),t=A.n(8)
return new A.D(B.n9,A.aM(!1,v,!0,A.p(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fIZ,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.Pi,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f30(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.f30.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dAJ.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dAI.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nr,B.K,w,w)
return A.eh(A.a([A.bO(!1,B.dr,w,w,!0,w,w,w,new C.dAG(d),w,w),A.bO(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.n0,w,w,w,w,w,w,w,w,w,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dAH(d),w,w)],x.p),B.b9,B.CY,w,u,D.bIV,w,D.bKU,new A.ba(v,B.a1),w,w)},
$S:18}
C.dAG.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dAH.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dAS.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dAT.prototype={
$1(d){var w=this.a
return w.l(new C.dAR(w,d))},
$S:z+49}
C.dAR.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dAU.prototype={
$1(d){var w=null
return A.qY(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dAX.prototype={
$1(d){var w=this.a
return w.l(new C.dAQ(w,d))},
$S:35}
C.dAQ.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dAW.prototype={
$1(d){var w=null
return A.qY(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dAY.prototype={
$1(d){var w=this.a
return w.l(new C.dAP(w,d))},
$S:35}
C.dAP.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dAZ.prototype={
$0(){var w=this.a
return w.l(new C.dAO(w))},
$S:0}
C.dAO.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dB_.prototype={
$0(){var w=this.a
return w.l(new C.dAN(w))},
$S:0}
C.dAN.prototype={
$0(){return++this.a.at},
$S:0}
C.dB0.prototype={
$0(){var w=this.a
return w.l(new C.dAM(w))},
$S:0}
C.dAM.prototype={
$0(){return--this.a.ax},
$S:0}
C.dB1.prototype={
$0(){var w=this.a
return w.l(new C.dAL(w))},
$S:0}
C.dAL.prototype={
$0(){return++this.a.ax},
$S:0}
C.dB2.prototype={
$1(d){var w=this.a
return w.l(new C.dAK(w,d))},
$S:9}
C.dAK.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dAV.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dB3.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bR.j(0.18)
else w=q.c.a?B.ek:B.c
v=A.n(12)
if(p)u=B.bR
else u=(q.c.a?B.em:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bR
else t=q.c.a?B.bu:B.bj
t=A.W(f,t,r,r,r,18)
if(p)s=B.bR
else s=q.c.a?B.bu:B.bj
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cT(r,A.x(A.a([t,B.at,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.h,0,B.p),r,r,B.b_,new A.o(w,r,u,v,r,r,B.m),B.eJ,r,r,r,r,B.jU,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dB4(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dB4.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dBd.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.che.prototype={
$2(d,e){return new A.bu(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:99}
C.chl.prototype={
$1(d){return d.ak()},
$S:z+5}
C.chm.prototype={
$2(d,e){var w=J.b8(e,new C.chk(),x.a)
w=A.B(w,w.$ti.k("ak.E"))
return new A.bu(d,w,x.d2)},
$S:z+53}
C.chk.prototype={
$1(d){return d.ak()},
$S:z+12}
C.chg.prototype={
$1(d){return C.an5(A.a1(d,x.N,x.z))},
$S:z+9}
C.chh.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.chi.prototype={
$1(d){return C.hu5(A.a1(d,x.N,x.z))},
$S:z+11}
C.chj.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.chq.prototype={
$1(d){return new A.aIZ(d.f.length,d.a,d.b)},
$S:z+55}
C.chr.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:663}
C.chn.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cho.prototype={
$1(d){return d.cR0(C.HB(d,this.a))},
$S:z+85}
C.e6X.prototype={
$1(d){return C.uH(d,this.a.a.c)},
$S:z+3}
C.e6Y.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e71.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e72.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e6U.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2F(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zh("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(M.pO(r.c,r.e),$async$$0)
case 4:s.zh(p)
w=5
return A.b(s.Kz(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e6V.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2F(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zh("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(M.pO(r.c,r.e),$async$$0)
case 4:s.zh(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e6W.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.WS(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zh("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zh("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zh("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Kz(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ac(j)
o=r.a
if(o.c==null){w=1
break}o.zh(B.a.eq(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e70.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2E(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zh("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a8(r,!1).cc(A.ec(new C.e7_(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(M.pO(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e7_.prototype={
$1(d){var w=this.b
return new C.a16(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e6Z.prototype={
$1(d){return D.hOP},
$S:z+58}
C.e74.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e75.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e73(w,d)
return new A.D(B.d4,new C.bih(this.b,d.c,d.a,w,null),null)},
$S:1967}
C.e73.prototype={
$0(){return this.a.YX(this.b.b)},
$S:0}
C.e6P.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e6Q.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e6R.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e6S.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e6T.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e76.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.Y(s,"NGMYFTSYNC2"))t=!A.cW(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a8(this.b,!1).N(s)
return}},
$S:213}
C.dSZ.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dT_.prototype={
$0(){return B.d.gH(D.a7L)},
$S:z+60}
C.dT0.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b4(A.at(A.W(this.b.d,B.c.j(0.95),w,w,D.deS,44),w,w,w),w,w,new C.bnb(u,t,v,w),B.az)},
$S:59}
C.h59.prototype={
$1(d){return A.oU(new C.h58(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:135}
C.h58.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ek:B.c,p=A.a([new A.aa(0,B.H,B.v.j(r?0.35:0.08),B.u1,24)],x.V),o=r?B.em:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bR.j(0.18)],x.O)
w=A.p(t,D.c02,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a7(B.a5,B.a9,B.x,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aS:B.aw,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.S,o,new A.D(E.aoA,A.A(A.a([w,B.bb,A.E(A.x(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bu:B.bj,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.h,0,B.p),1)],u),B.l,t,B.e,B.h,0,t,t),t),A.E(A.iK(!0,t,e,B.y,D.fvn,new C.h57(this.b,s),20,B.ao5,t,B.ah,!1),1)],u),B.l,t,B.e,B.h,0,B.p),B.f,t,t,new A.o(q,t,t,B.lo,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:124}
C.h57.prototype={
$2(d,e){var w=null,v=D.a7L[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.K(s?B.em:B.bO,B.r,1),q=A.a([new A.aa(0,B.H,B.v.j(s?0.35:0.08),B.eA,8)],x.V),p=A.n(15),o=A.E(new C.a8_(v.a,!0,w),1),n=s?B.k8:B.iH,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aS:B.aw,w,w,w,w,w,w,w,w,13,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eG(A.bw(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.B,w,B.e,B.h,0,B.p),B.f,n,w,w,w,w,w,w,B.jV,w,w,w)],l),B.am,w,B.e,B.h,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h56(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:82}
C.h56.prototype={
$0(){A.a8(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cr6.prototype={
$0(){return this.a.aib(this.b)},
$S:0}
C.h4x.prototype={
$1(d){return D.hJj},
$S:z+61}
C.hck.prototype={
$1(d){var w=this
return new C.a2U(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.h4B.prototype={
$1(d){return new C.a_K(this.a,null)},
$S:z+63}
C.h4A.prototype={
$1(d){return D.hKk},
$S:z+64}
C.dbB.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dbC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dbA(w,d))},
$S:35}
C.dbA.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dbD.prototype={
$1(d){return this.a.Lc()},
$S:2}
C.dbE.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dbx.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dby.prototype={
$1(d){return this.a.Lc()},
$S:2}
C.dbz.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cJs.prototype={
$0(){},
$S:0}
C.cJy.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cJz.prototype={
$0(){return this.a.aRN(-1)},
$S:0}
C.cJA.prototype={
$1(d){return this.a.l(new C.cJx())},
$S:2}
C.cJx.prototype={
$0(){},
$S:0}
C.cJB.prototype={
$0(){return this.a.aRN(1)},
$S:0}
C.cJC.prototype={
$1(d){return this.a.l(new C.cJw())},
$S:2}
C.cJw.prototype={
$0(){},
$S:0}
C.cJD.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.em:B.bO
return A.v8(u,u,B.b5,r,u,new C.cJv(t,d),B.x2,s,w,u,new A.ax(v,1,B.r,-1),B.cl)},
$S:1968}
C.cJv.prototype={
$1(d){var w=this.a
return w.l(new C.cJt(w,this.b))},
$S:9}
C.cJt.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cJE.prototype={
$1(d){return this.a.l(new C.cJu())},
$S:2}
C.cJu.prototype={
$0(){},
$S:0}
C.cJF.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.fsF.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a8(this.b,!1).N(w)},
$S:2}
C.fsG.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.fsH.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a8(this.b,!1).N(w)},
$S:0}
C.fsD.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbEq()
w=w.e
s=A.n(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bKT,new A.e4(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bA1(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:59}
C.fsE.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=B.dO.aA(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.ap(B.aV,B.bR,w)
s.toString
s=A.a([B.b5,s,B.aV],x.O)
return A.aG(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eG(D.eDa,r,new A.o(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.de(-1.2+t,-0.5),new A.de(1.2-t,0.8),B.x,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:137}
C.h2O.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:57}
C.f0b.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f02.prototype={
$0(){return this.a.e=!0},
$S:0}
C.f03.prototype={
$0(){return this.a.e=!1},
$S:0}
C.f09.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.e6(new C.f08(w,this.b),null)},
$S:21}
C.f08.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ek:B.c,t=A.n(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eE(w,u,new A.D(B.aou,A.x(A.a([s,B.ak,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hAf(new C.f05(r,e),r.a),B.aA,A.A(A.a([A.E(A.dW(B.dr,new C.f06(d),w),1),B.ar,A.E(A.bI(B.X9,w,new C.f07(r,d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.h,0,w,w)],q),B.am,w,B.e,B.M,0,B.p),w),w,w,w,w,w,B.d7,w,new A.ba(t,B.a1),w)},
$S:104}
C.f05.prototype={
$1(d){return this.b.$1(new C.f04(this.a,d))},
$S:35}
C.f04.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.f06.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f07.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(w)
return null},
$S:0}
C.f0a.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.U4(this.b)},
$S:0}
C.f_Y.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bgs(w)},
$S:0}
C.f01.prototype={
$1(d){return this.bpK(d)},
bpK(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mr(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.ji(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f00.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.U(w).k("X<1>")
w=A.B(new A.X(w,new C.f0_(this.b),v),v.k("M.E"))
u.d=t.bgs(w)},
$S:0}
C.f0_.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.f0c.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.ji(this.b,w)},
$S:0}
C.f0d.prototype={
$1(d){return this.a.bIE(d,this.b)},
$S:z+67}
C.f_Z.prototype={
$0(){return this.a.abR(this.b)},
$S:0}
C.hc7.prototype={
$1(d){return new C.afp(this.a,this.b,this.c,null)},
$S:z+68}
C.f0f.prototype={
$0(){return this.a.a0Z(this.b)},
$S:0}
C.f0g.prototype={
$0(){return this.a.Rk(this.b)},
$S:0}
C.f0h.prototype={
$0(){return this.a.Fd(this.b)},
$S:0}
C.f0i.prototype={
$0(){return this.a.a1_(this.b)},
$S:0}
C.f0e.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f_T.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f_U.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.f_V.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f_X.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qx(),$async$$0)
case 2:if(t.c!=null)t.l(new C.f_W(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f_W.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.f0F.prototype={
$2(d,e){return d+e.gxP()},
$S:z+71}
C.f0B.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f0C.prototype={
$0(){return this.a.f=!1},
$S:0}
C.f0m.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ek:B.c,s=A.n(24),r=A.p(v,D.c0x,B.f,v,v,new A.o(B.aB.j(u?0.18:0.08),v,A.K(B.aB.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.aw
u=u?B.em:B.bO
w=x.p
return A.eE(v,t,new A.D(B.x1,A.x(A.a([r,B.aO,q,B.P,p,B.dc,A.A(A.a([A.E(A.dW(B.om,new C.f0k(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.f8,v,new A.ba(A.n(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.ar,A.E(A.bI(D.heA,v,new C.f0l(d),A.bp(B.aB,v,v,v,v,v,B.f8,v,new A.ba(A.n(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.h,0,v,v)],w),B.l,v,B.e,B.M,0,B.p),v),v,v,v,v,v,B.d7,v,new A.ba(s,B.a1),v)},
$S:47}
C.f0k.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.f0l.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.f0v.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ek:B.c,i=A.n(28),h=A.a([new A.aa(0,B.H,B.v.j(k?0.35:0.08),B.h0,28)],x.V),g=k?D.dmH:AI.a72,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.m),m,4,m,m,m,m,m,40),B.aA,D.fot,B.at,new A.bK(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cE,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a7(B.ay,B.aC,B.x,g,m,m),B.m),m,m,m,m,E.aoy,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,11,m,m,B.F,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b9h(B.b2,B.jE,new C.f0s(v,d),l,"Camera import","Scan QR"),1),B.ar,A.E(v.b9h(B.cC,S.A8,new C.f0t(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.h,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,11,m,m,B.F,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.aB.j(k?0.14:0.06)
q=A.n(16)
p=A.K(B.aB.j(0.28),B.r,1)
o=A.p(m,D.c_P,B.f,m,m,new A.o(B.aB.j(0.12),m,m,A.n(12),m,m,B.m),m,m,m,m,B.bT,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aS:B.aw,m,m,m,m,m,m,m,m,m,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.B,m,B.e,B.h,0,B.p),1)
return A.bo(!0,new A.D(B.wW,A.p(m,A.x(A.a([g,new A.D(B.aov,A.x(A.a([w,B.S,u,B.bx,t,B.S,A.aG(!1,B.a3,!0,m,A.aM(!1,s,!0,A.p(m,A.A(A.a([o,B.bb,n,A.W(B.eM,k?B.bu:B.bj,m,m,m,m)],f),B.l,m,B.e,B.h,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.m),m,m,m,m,B.bH,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.f0u(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.B,m,B.e,B.h,0,B.p),m)],f),B.l,m,B.e,B.M,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:27}
C.f0s.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.wd("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f0t.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.wd("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f0u.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.OU(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f0q.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ek:B.c,m=A.n(24),l=A.a([new A.aa(0,B.H,B.v.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.em:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bu:B.bj
u=A.bw(w,new A.a6(48,48,C.aTA(!0,A.n(12),48,R.Q_,u,v.c,48),q),B.aq)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.BF(v.gxP())
s=x.p
r=this.a
return A.bo(!0,new A.D(B.wW,A.p(q,A.x(A.a([B.S,k,new A.D(D.aos,A.A(A.a([u,B.bb,A.E(A.x(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bu:B.bj,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.B,q,B.e,B.h,0,B.p),1)],s),B.l,q,B.e,B.h,0,q,q),q),B.CP,r.ct2(B.vw,B.aV,new C.f0o(d),p,"QR code or backup file","Transfer project"),r.b6g(!0,B.eo,B.aB,new C.f0p(d),p,"Remove from this device","Delete project"),B.S],s),B.l,q,B.e,B.M,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:27}
C.f0o.prototype={
$0(){A.a8(this.a,!1).N("transfer")
return null},
$S:0}
C.f0p.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
C.f0r.prototype={
$1(d){return this.bpL(d)},
bpL(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mr(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.ws(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f0I.prototype={
$0(){var w=this.a
w.a.bw()
w.l(new C.f0H(w))},
$S:0}
C.f0H.prototype={
$0(){return this.a.r++},
$S:0}
C.f0J.prototype={
$0(){var w=this.a
return w.l(new C.f0G(w))},
$S:0}
C.f0G.prototype={
$0(){return this.a.r++},
$S:0}
C.f0j.prototype={
$0(){var w=this.a.c
w.toString
return A.ji(w,null)},
$S:0}
C.f0n.prototype={
$0(){return this.a.cm9(this.b)},
$S:0}
C.f0E.prototype={
$0(){var w=this.a
return w.l(new C.f0D(w,this.b))},
$S:0}
C.f0D.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f0y.prototype={
$0(){return this.a.wd("scan")},
$S:0}
C.f0z.prototype={
$0(){return this.a.wd("file")},
$S:0}
C.f0A.prototype={
$1(d){return this.a.ct3(d,this.b)},
$S:z+72}
C.f0x.prototype={
$0(){return this.a.Fh(this.b)},
$S:0}
C.f0w.prototype={
$0(){return this.a.a1t(this.b,this.c)},
$S:0}
C.cIO.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cIN.prototype={
$1(d){return d.ak()},
$S:z+74}
C.cIL.prototype={
$1(d){return C.hVx(A.a1(d,x.N,x.z))},
$S:z+75}
C.cIM.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fN1.prototype={
$1(d){return d.y===D.l7},
$S:z+3}
C.hcU.prototype={
$1(d){return C.aSc(d,this.a)},
$S:z+3}
C.fKw.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bUR.prototype={
$1(d){return!d.as},
$S:z+1}
C.bUQ.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bUN.prototype={
$1(d){return C.hu7(A.a1(d,x.N,x.z))},
$S:z+24}
C.bUO.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bUP.prototype={
$1(d){return J.k(d)},
$S:15}
C.fAC.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fw8.prototype={
$1(d){return C.hjv(A.a1(d,x.N,x.z))},
$S:z+79}
C.fw9.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fwa.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h4l.prototype={
$1(d){return J.k(d)},
$S:15}
C.h4m.prototype={
$1(d){return d.a},
$S:z+81}
C.h4n.prototype={
$1(d){return d.length!==0},
$S:3}
C.h4o.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h4p.prototype={
$1(d){return d.U4(null).ak()},
$S:z+82}
C.hcS.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fNv.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fQK.prototype={
$1(d){return C.an5(A.a1(d,x.N,x.z))},
$S:z+9}
C.fQL.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fQM.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fQN.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fQO.prototype={
$1(d){return C.uH(d,this.a)},
$S:z+3}
C.h48.prototype={
$1(d){return C.uH(d,this.a)},
$S:z+3}
C.hcN.prototype={
$1(d){return C.an5(A.a1(d,x.N,x.z))},
$S:z+9}
C.hcO.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.hcP.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fNc.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fNd.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.hcY.prototype={
$1(d){return!d.as},
$S:z+1}
C.fMH.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fMI.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fMJ.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.hcl.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fRB.prototype={
$1(d){return d.Q},
$S:z+15}
C.h41.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fQH.prototype={
$1(d){return C.an5(A.a1(d,x.N,x.z))},
$S:z+9}
C.fQI.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fQJ.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h3X.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fwI.prototype={
$1(d){return d.length!==0},
$S:3}
C.fwJ.prototype={
$1(d){return C.hu7(A.a1(d,x.N,x.z))},
$S:z+24}
C.fwK.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fwL.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:15}
C.fwM.prototype={
$1(d){return d.length!==0},
$S:3}
C.fwZ.prototype={
$2(d,e){return d.eE(new C.fx_(e))},
$S:1969}
C.fx_.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.ck},
$S:1970}
C.fwW.prototype={
$1(d){return C.ihH(d,this.a)},
$S:z+84}
C.fwX.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fwY.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fBm.prototype={
$1(d){return d.a},
$S:z+56}
C.fBn.prototype={
$1(d){return d.length!==0},
$S:3}
C.fBo.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fEo.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fJL.prototype={
$1(d){return C.hFV(d,C.HB(d,this.a))},
$S:z+5}
C.fJM.prototype={
$1(d){return C.hFW(d,C.HB(d,this.a))},
$S:z+5};(function aliases(){var w=C.aCG.prototype
w.bxD=w.t
w=C.aAQ.prototype
w.bxy=w.t
w=C.aIb.prototype
w.by0=w.t
w=C.aCH.prototype
w.bxE=w.t
w=C.aCJ.prototype
w.bxF=w.t
w=C.aCK.prototype
w.bxG=w.t
w=C.aOo.prototype
w.bAu=w.t
w=C.aQv.prototype
w.bCO=w.t
w=C.aQw.prototype
w.bCP=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aFH.prototype,"gcpS","cpT",28)
var r
w(r=C.aCF.prototype,"gciF","ciG",65)
v(r,"gaPZ","Oq",0)
v(r,"gcyn","BG",0)
v(r,"gbQx","P9",0)
v(r,"gcN1","zi",0)
v(r,"gcs_","a2c",0)
v(r,"gbLT","OQ",0)
v(r,"gbQX","Yn",0)
w(r,"gbW1","bW2",78)
v(r,"gbG5","AC",0)
v(C.aCI.prototype,"gcMY","Ga",0)
v(r=C.amV.prototype,"gbtZ","bu_",2)
v(r,"gbtR","btS",2)
v(r,"gcO4","cO5",2)
u(r,"gqr","kM",0)
u(r=C.al4.prototype,"gf1","fR",2)
w(r,"gcjE","cjF",27)
u(C.avU.prototype,"gqr","kM",0)
v(r=C.azS.prototype,"gcZJ","cZK",2)
u(r,"gqr","kM",0)
u(C.aM1.prototype,"gbtX","btY",2)
v(C.an3.prototype,"gCc","cOh",2)
u(r=C.an1.prototype,"gcOZ","cP_",2)
u(r,"gqr","kM",0)
v(r=C.amY.prototype,"gbsP","bsQ",2)
v(r,"gcU9","cUa",2)
u(r=C.an_.prototype,"gf1","fR",2)
u(r,"giA","cNB",2)
v(r=C.amW.prototype,"gcNq","cNr",2)
u(r,"gbrH","jI",2)
v(r=C.aGg.prototype,"gahO","wt",0)
v(r,"gcln","a1l",0)
v(r,"gaUe","IM",0)
v(r=C.aGd.prototype,"gcIU","a4l",0)
v(r,"gahO","wt",0)
v(r,"gcwm","a2R",0)
v(r,"gcli","b4s",2)
v(r,"gcmm","a1y",0)
w(r,"gciz","ciA",35)
v(r,"gbQP","IR",0)
v(r,"gcK_","cK0",2)
v(r,"gc86","a_9",0)
w(r,"gch2","ch3",36)
v(r,"gcl6","cl7",2)
v(r=C.aEG.prototype,"gcef","QQ",0)
v(r,"gceh","cei",2)
v(r,"gbNn","abt",0)
v(r=C.aGf.prototype,"gbUq","YT",0)
v(r,"gc3Z","Zy",0)
v(r,"gcCT","a3J",0)
v(r,"gcyY","a3j",0)
v(C.aGe.prototype,"gcyG","ajC",0)
v(C.av5.prototype,"gch0","a0X",0)
v(C.aBo.prototype,"ga44","Lc",2)
v(C.aBn.prototype,"ga44","Lc",2)
v(C.aA4.prototype,"ga44","Lc",2)
v(r=C.aHN.prototype,"gb5E","RR",0)
v(r,"gbEU","X_",0)
v(r,"gcma","cmb",2)
w(C.aHM.prototype,"gchU","chV",69)
t(C.aHO.prototype,"gaU9",0,0,null,["$1","$0"],["IL","bOH"],70,0,0)
s(C,"hOl","irI",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aE,[C.aqF,C.v5,C.nH,C.IG,C.agB,C.L1,C.v6,C.bVm,C.tq,C.bqI,C.anc,C.aeH,C.lL,C.bTY,C.avh,C.zS,C.alL,C.N3,C.bc_,C.aaK,C.bjm,C.agI,C.aB5,C.agw,C.aM1,C.L8,C.GT,C.bif,C.aLW,C.as1,C.dkx,C.md,C.aWy,C.aWx,C.aUz,C.ur,C.rG,C.lY,C.ie,C.lb,C.aJT])
u(A.fN,[C.fVy,C.fVx,C.fVz,C.h52,C.fIo,C.fIp,C.fIu,C.fTg,C.fTf,C.fTe,C.caa,C.h5z,C.h5r,C.h5D,C.fNk,C.dTG,C.dTB,C.dTC,C.dTe,C.dTa,C.dTV,C.dTW,C.dTP,C.dTQ,C.dTX,C.dTY,C.fO5,C.fQE,C.fQF,C.h46,C.hcM,C.fNb,C.h4H,C.djK,C.dj6,C.djf,C.djw,C.djb,C.djh,C.dj8,C.djl,C.djm,C.djk,C.djB,C.djA,C.dlx,C.dly,C.dlz,C.djY,C.dk2,C.dk1,C.cRQ,C.cRS,C.daP,C.dbd,C.dbe,C.dbh,C.dbj,C.dbk,C.dbl,C.dbn,C.dbo,C.bTI,C.bTC,C.fB3,C.hcE,C.hcF,C.hcG,C.hcB,C.hcH,C.hcI,C.hcJ,C.hcA,C.fOJ,C.h30,C.fKx,C.fRA,C.bOJ,C.hd3,C.h3D,C.bMT,C.bMO,C.bMQ,C.bMP,C.csN,C.csI,C.csJ,C.csH,C.csF,C.csK,C.cSU,C.cHN,C.cHQ,C.cHO,C.cHR,C.cHS,C.fdg,C.fny,C.bUu,C.bUo,C.bUs,C.bU5,C.e5v,C.e5s,C.e5t,C.e5r,C.e5x,C.bUm,C.bUc,C.bTX,C.bTW,C.bTS,C.bTT,C.bTU,C.bTV,C.e7a,C.e6A,C.e6v,C.e5X,C.e6c,C.e6f,C.e6b,C.e6a,C.e6r,C.e6s,C.e6m,C.e5L,C.e6D,C.e6x,C.e5N,C.e5O,C.e5P,C.e5U,C.e5S,C.e5R,C.e66,C.e67,C.e61,C.e6K,C.e6G,C.dk8,C.dk9,C.fO9,C.fOa,C.fOb,C.fO7,C.fO8,C.fOe,C.fOf,C.fOg,C.fOc,C.fOd,C.dks,C.dki,C.dkd,C.dkn,C.dko,C.dkr,C.dkf,C.dku,C.dkv,C.dkw,C.ft9,C.f31,C.dAI,C.dAS,C.dAT,C.dAU,C.dAX,C.dAW,C.dAY,C.dB2,C.dB3,C.chl,C.chk,C.chg,C.chh,C.chi,C.chj,C.chq,C.chn,C.cho,C.e6X,C.e7_,C.e6Z,C.e75,C.e76,C.dSZ,C.h59,C.h4x,C.hck,C.h4B,C.h4A,C.dbC,C.dbD,C.dby,C.cJA,C.cJC,C.cJD,C.cJv,C.cJE,C.fsF,C.h2O,C.f09,C.f05,C.f01,C.f0_,C.f0d,C.hc7,C.f0m,C.f0v,C.f0q,C.f0r,C.f0A,C.cIN,C.cIL,C.cIM,C.fN1,C.hcU,C.fKw,C.bUR,C.bUQ,C.bUN,C.bUO,C.bUP,C.fw8,C.fw9,C.h4l,C.h4m,C.h4n,C.h4o,C.h4p,C.hcS,C.fNv,C.fQK,C.fQL,C.fQN,C.fQO,C.h48,C.hcN,C.hcO,C.hcP,C.fNc,C.fNd,C.hcY,C.fMH,C.fMI,C.hcl,C.fRB,C.h41,C.fQH,C.fQI,C.h3X,C.fwI,C.fwJ,C.fwK,C.fwL,C.fwM,C.fx_,C.fwW,C.fwX,C.fBm,C.fBn,C.fEo,C.fJL,C.fJM])
u(A.aw,[C.b19,C.amT,C.aXQ,C.a_n,C.bdP,C.R6,C.a7d,C.tP,C.II,C.bid,C.bm3,C.bAc,C.bpq,C.af3,C.bm2,C.af2,C.bm1,C.aEH,C.aKY,C.af4,C.GP,C.bie,C.aej,C.bic,C.bih,C.b17,C.av5,C.afp])
u(A.lK,[C.beu,C.bfH,C.bfy,C.aJN,C.bl4,C.bqH,C.aXV,C.bew,C.aCE,C.bdY,C.buP,C.blc,C.bkC,C.bkJ,C.big,C.bhg,C.bnb,C.bA1])
u(A.hQ,[C.h5w,C.h5x,C.h5y,C.h5p,C.h5q,C.h5B,C.h5C,C.dTS,C.dTE,C.dTH,C.dTl,C.dTm,C.dTn,C.dTk,C.dTs,C.dTj,C.dTt,C.dTu,C.dTi,C.dTv,C.dTh,C.dTw,C.dTg,C.dTx,C.dT8,C.dT9,C.dTf,C.dTy,C.dTd,C.dTz,C.dTc,C.dTo,C.dTb,C.dTp,C.dT7,C.dTq,C.dTr,C.dTT,C.dTU,C.dTI,C.dTJ,C.dTK,C.dTL,C.dTM,C.dTN,C.dTO,C.dU_,C.dTR,C.fO6,C.dj4,C.dj2,C.dj3,C.dj5,C.djJ,C.djy,C.djv,C.dj7,C.djz,C.djd,C.dje,C.djg,C.djx,C.djc,C.dji,C.djG,C.djs,C.djr,C.djt,C.dju,C.djn,C.djp,C.djq,C.djj,C.djC,C.djF,C.dj9,C.dja,C.dlw,C.dlv,C.dlu,C.dlt,C.dlA,C.dls,C.dlB,C.djZ,C.dk_,C.dk0,C.dk3,C.djX,C.djW,C.cRR,C.daO,C.db0,C.db_,C.dbf,C.daZ,C.dbg,C.daY,C.daX,C.dbi,C.daW,C.db8,C.db7,C.dbp,C.bTB,C.bTL,C.bTD,C.bTE,C.bTH,C.bTG,C.bTJ,C.bTK,C.bTF,C.bTz,C.bTA,C.bVe,C.bVf,C.bVg,C.bVh,C.bVi,C.bVj,C.bVk,C.hcD,C.h31,C.bMS,C.bMN,C.bML,C.bMM,C.bMK,C.csP,C.csQ,C.csO,C.csR,C.csT,C.csU,C.csV,C.csL,C.cHM,C.cHV,C.cHW,C.cHX,C.cHU,C.cHY,C.cHZ,C.cI_,C.cI0,C.cHP,C.cHT,C.bUK,C.bUJ,C.bUH,C.bUF,C.bUG,C.bUC,C.bUD,C.bUE,C.bUI,C.bUB,C.fdh,C.fdi,C.fdj,C.fdk,C.fdl,C.bUy,C.bUz,C.bUA,C.bUt,C.bUv,C.bUw,C.bUx,C.bUp,C.bU9,C.bU8,C.bU7,C.bU1,C.bU2,C.bU6,C.bU3,C.bU4,C.bU0,C.e5u,C.e5w,C.e5p,C.e5q,C.e5o,C.e5y,C.e5z,C.e5A,C.e5D,C.e5E,C.e5F,C.e5G,C.e5H,C.e5I,C.e5J,C.e5K,C.e5B,C.e5C,C.bUl,C.bUk,C.bUb,C.bUa,C.bUh,C.bUi,C.bUe,C.bUf,C.bUg,C.bUd,C.bTM,C.bTN,C.bTR,C.bTQ,C.bTP,C.bTO,C.e79,C.e78,C.e7b,C.e7c,C.e7d,C.e77,C.e7f,C.e7e,C.e6y,C.e6z,C.e6B,C.e5Y,C.e6e,C.e6d,C.e6g,C.e6u,C.e69,C.e6k,C.e6l,C.e6j,C.e6h,C.e6i,C.e6n,C.e6o,C.e6p,C.e6t,C.e5M,C.e6w,C.e5Q,C.e5T,C.e5V,C.e6C,C.e60,C.e5Z,C.e62,C.e63,C.e6_,C.e64,C.e68,C.e6L,C.e6M,C.e6E,C.e6H,C.e6I,C.e6J,C.e6O,C.e6F,C.e5W,C.dk7,C.dk6,C.dkb,C.dkl,C.dkc,C.f30,C.dAJ,C.dAG,C.dAH,C.dAR,C.dAQ,C.dAP,C.dAZ,C.dAO,C.dB_,C.dAN,C.dB0,C.dAM,C.dB1,C.dAL,C.dAK,C.dAV,C.dB4,C.dBd,C.e6Y,C.e71,C.e72,C.e6U,C.e6V,C.e6W,C.e70,C.e74,C.e73,C.e6P,C.e6Q,C.e6R,C.e6S,C.e6T,C.dT_,C.h56,C.cr6,C.dbB,C.dbA,C.dbE,C.dbx,C.dbz,C.cJs,C.cJy,C.cJz,C.cJx,C.cJB,C.cJw,C.cJt,C.cJu,C.cJF,C.fsG,C.fsH,C.f0b,C.f02,C.f03,C.f04,C.f06,C.f07,C.f0a,C.f_Y,C.f00,C.f0c,C.f_Z,C.f0f,C.f0g,C.f0h,C.f0i,C.f0e,C.f_T,C.f_U,C.f_V,C.f_X,C.f_W,C.f0B,C.f0C,C.f0k,C.f0l,C.f0s,C.f0t,C.f0u,C.f0o,C.f0p,C.f0I,C.f0H,C.f0J,C.f0G,C.f0j,C.f0n,C.f0E,C.f0D,C.f0y,C.f0z,C.f0x,C.f0w])
u(A.af,[C.aqS,C.Ur,C.a07,C.a0b,C.a09,C.a_I,C.amU,C.al3,C.avT,C.azR,C.an2,C.an0,C.amX,C.WP,C.amZ,C.Us,C.as4,C.arZ,C.a0N,C.as2,C.a16,C.a17,C.a8_,C.a_K,C.a_J,C.a_e,C.a2U,C.GE,C.azY,C.av4,C.auZ,C.av3,C.Pl])
u(A.ah,[C.aFH,C.bi7,C.aCF,C.biw,C.aCI,C.bfF,C.aCG,C.aAQ,C.aIb,C.azS,C.aCK,C.aCJ,C.aCH,C.bnx,C.an_,C.amW,C.aGg,C.aGd,C.aEG,C.aGf,C.aGe,C.bny,C.aOo,C.aBo,C.aBn,C.aA4,C.bA4,C.aQv,C.aQw,C.aHN,C.boW,C.aHM,C.bBQ])
u(A.id,[C.dTD,C.dTF,C.dTA,C.dTZ,C.fQG,C.bTy,C.djI,C.djH,C.djo,C.djD,C.djE,C.dk4,C.bVl,C.bVd,C.bTZ,C.bU_,C.hcC,C.hd2,C.bMR,C.csS,C.csM,C.csG,C.fdm,C.bUn,C.bUq,C.bUr,C.duY,C.bUj,C.e6q,C.e65,C.e6N,C.dkk,C.dkj,C.dkh,C.dkm,C.dkp,C.dkq,C.dka,C.dke,C.dkg,C.dkt,C.che,C.chm,C.chr,C.dT0,C.h58,C.h57,C.fsD,C.fsE,C.f08,C.f0F,C.cIO,C.fAC,C.fwa,C.fQM,C.fMJ,C.fQJ,C.fwZ,C.fwY,C.fBo])
u(A.kP,[C.a2p,C.agK,C.a2I,C.a0z,C.adj,C.aMJ,C.IH,C.an4,C.cIP,C.cIQ])
t(C.amV,C.aCG)
t(C.al4,C.aAQ)
t(C.avU,C.aIb)
t(C.bib,C.aCK)
t(C.an3,C.bib)
t(C.bia,C.aCJ)
t(C.an1,C.bia)
t(C.bi9,C.aCH)
t(C.amY,C.bi9)
t(C.bnc,C.aOo)
t(C.bA2,C.aQv)
t(C.bA3,C.aQw)
t(C.aHO,C.bBQ)
t(C.bcc,A.bc0)
t(C.bA5,A.a7F)
t(C.bcb,C.bA5)
w(C.aCG,A.cg)
w(C.aAQ,A.cg)
w(C.aIb,A.eZ)
w(C.aCH,A.cg)
v(C.bi9,C.agw)
w(C.aCJ,A.cg)
v(C.bia,C.agw)
w(C.aCK,A.cg)
v(C.bib,C.agw)
w(C.aOo,A.eZ)
w(C.aQv,A.cg)
w(C.aQw,A.cg)
v(C.bBQ,A.eJ)
v(C.bA5,A.ju)})()
A.i_(b.typeUniverse,JSON.parse('{"b19":{"aw":[],"w":[]},"beu":{"aC":[]},"aqS":{"af":[],"w":[]},"aFH":{"ah":["aqS"]},"Ur":{"af":[],"w":[]},"amT":{"aw":[],"w":[]},"aXQ":{"aw":[],"w":[]},"bi7":{"ah":["Ur"]},"a07":{"af":[],"w":[]},"a0b":{"af":[],"w":[]},"a09":{"af":[],"w":[]},"a_I":{"af":[],"w":[]},"aCF":{"ah":["a07"]},"biw":{"ah":["a0b"]},"aCI":{"ah":["a09"]},"a_n":{"aw":[],"w":[]},"bfH":{"aC":[]},"bfy":{"aC":[]},"bfF":{"ah":["a_I"]},"aJN":{"aC":[]},"bl4":{"aC":[]},"bdP":{"aw":[],"w":[]},"amU":{"af":[],"w":[]},"amV":{"ah":["amU"]},"bqH":{"aC":[]},"aXV":{"aC":[]},"al3":{"af":[],"w":[]},"avT":{"af":[],"w":[]},"azR":{"af":[],"w":[]},"al4":{"ah":["al3"]},"bew":{"aC":[]},"R6":{"aw":[],"w":[]},"aCE":{"aC":[]},"avU":{"ah":["avT"]},"bdY":{"aC":[]},"azS":{"ah":["azR"]},"an2":{"af":[],"w":[]},"an0":{"af":[],"w":[]},"amX":{"af":[],"w":[]},"an3":{"ah":["an2"]},"buP":{"aC":[]},"an1":{"ah":["an0"]},"blc":{"aC":[]},"amY":{"ah":["amX"]},"bkC":{"aC":[]},"WP":{"af":[],"w":[]},"amZ":{"af":[],"w":[]},"Us":{"af":[],"w":[]},"a7d":{"aw":[],"w":[]},"bkJ":{"aC":[]},"tP":{"aw":[],"w":[]},"II":{"aw":[],"w":[]},"bnx":{"ah":["WP"]},"an_":{"ah":["amZ"]},"amW":{"ah":["Us"]},"as4":{"af":[],"w":[]},"arZ":{"af":[],"w":[]},"a0N":{"af":[],"w":[]},"af4":{"aw":[],"w":[]},"aGg":{"ah":["as4"]},"aGd":{"ah":["arZ"]},"bid":{"aw":[],"w":[]},"big":{"aC":[]},"bm3":{"aw":[],"w":[]},"bhg":{"aC":[]},"bAc":{"aw":[],"w":[]},"bpq":{"aw":[],"w":[]},"aEG":{"ah":["a0N"]},"af3":{"aw":[],"w":[]},"bm2":{"aw":[],"w":[]},"af2":{"aw":[],"w":[]},"bm1":{"aw":[],"w":[]},"aEH":{"aw":[],"w":[]},"aKY":{"aw":[],"w":[]},"GP":{"aw":[],"w":[]},"as2":{"af":[],"w":[]},"a16":{"af":[],"w":[]},"a17":{"af":[],"w":[]},"aGf":{"ah":["as2"]},"bie":{"aw":[],"w":[]},"aej":{"aw":[],"w":[]},"bic":{"aw":[],"w":[]},"bih":{"aw":[],"w":[]},"aGe":{"ah":["a16"]},"bny":{"ah":["a17"]},"b17":{"aw":[],"w":[]},"a8_":{"af":[],"w":[]},"bnc":{"ah":["a8_"]},"bnb":{"aC":[]},"av5":{"aw":[],"w":[]},"a_K":{"af":[],"w":[]},"a_J":{"af":[],"w":[]},"a_e":{"af":[],"w":[]},"a2U":{"af":[],"w":[]},"aBo":{"ah":["a_K"]},"aBn":{"ah":["a_J"]},"aA4":{"ah":["a_e"]},"bA4":{"ah":["a2U"]},"GE":{"af":[],"w":[]},"azY":{"af":[],"w":[]},"bA2":{"ah":["GE"]},"bA3":{"ah":["azY"]},"bA1":{"aC":[]},"av4":{"af":[],"w":[]},"aHN":{"ah":["av4"]},"afp":{"aw":[],"w":[]},"auZ":{"af":[],"w":[]},"av3":{"af":[],"w":[]},"boW":{"ah":["auZ"]},"aHM":{"ah":["av3"]},"Pl":{"af":[],"w":[]},"aHO":{"ah":["Pl"],"eJ":[]},"bcb":{"ju":[],"fn":[]}}'))
A.DC(b.typeUniverse,JSON.parse('{"agw":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ar
return{e2:w("aUz"),cq:w("mz"),Q:w("rG"),r:w("bl<m,m>"),c5:w("aWx"),dY:w("aWy"),fH:w("N3"),de:w("alL"),dN:w("Nb<F>"),gc:w("EI<F>"),A:w("eL<m?>"),e:w("IG"),B:w("nH"),P:w("ie"),df:w("lL"),k:w("lb"),x:w("ay<~>"),U:w("N<a5_>"),V:w("N<aa>"),C:w("N<rG>"),O:w("N<u>"),c:w("N<N3>"),b:w("N<alL>"),ac:w("N<eL<m?>>"),I:w("N<nH>"),u:w("N<ie>"),J:w("N<lL>"),_:w("N<lb>"),cl:w("N<ay<ai<a9<m,@>>>>"),R:w("N<nm>"),eU:w("N<ai<+(G,G)>>"),ez:w("N<a9<m,aE>>"),gE:w("N<a9<m,m>>"),Y:w("N<a9<m,@>>"),fD:w("N<n1>"),bp:w("N<p2>"),g:w("N<r>"),ar:w("N<avh>"),v:w("N<fW>"),gy:w("N<aaK>"),L:w("N<+(m,m)>"),G:w("N<+(G,G)>"),E:w("N<+(G,~())>"),bd:w("N<+(m,F,P)>"),bF:w("N<+count,id,name(F,m,m)>"),F:w("N<cX>"),s:w("N<m>"),cF:w("N<au>"),aS:w("N<jl>"),dT:w("N<bc_>"),p:w("N<w>"),Z:w("N<fn>"),D:w("N<lY>"),h:w("N<aB5>"),cC:w("N<bjm>"),fp:w("N<L1>"),M:w("N<L8>"),gZ:w("N<aJT>"),gA:w("N<agB>"),e4:w("N<agI>"),dE:w("N<aLW>"),f7:w("N<P>"),n:w("N<G>"),t:w("N<F>"),dS:w("N<aC?>"),d4:w("N<m?>"),eF:w("cx<ah<af>>"),d:w("ai<nH>"),do:w("ai<ie>"),cg:w("ai<lL>"),ax:w("ai<lb>"),fO:w("ai<a9<m,@>>"),cz:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(F,m,m)>"),dy:w("ai<m>"),er:w("ai<au>"),gk:w("ai<lY>"),j:w("ai<@>"),fK:w("bu<m,m>"),d2:w("bu<m,ai<a9<m,@>>>"),a:w("a9<m,@>"),f:w("a9<@,@>"),gv:w("O<m,IJ>"),cM:w("O<F,m>"),w:w("hV"),g2:w("t0"),bV:w("aqF"),fL:w("cm"),K:w("aE"),dc:w("fW"),fo:w("PI<F>"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),bn:w("+games,limit(P,F)"),d9:w("+dx,hidden(G,ai<ie>)"),cs:w("+count,id,name(F,m,m)"),N:w("m"),fT:w("iO<ie>"),ec:w("iO<m>"),gW:w("rn<G>"),X:w("bq<G>"),bW:w("dz"),W:w("bf<m>"),b4:w("bf<F>"),cI:w("kf<m>"),av:w("X<zS>"),cc:w("X<m>"),l:w("w"),gF:w("fn"),fA:w("lY"),dO:w("GT"),bw:w("af2<m?>"),cy:w("La"),q:w("kx"),y:w("P"),i:w("G"),z:w("@"),S:w("F"),eK:w("ai<lb>?"),m:w("as1?"),cT:w("r?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,F)?"),he:w("+qrPayload,token,usesRemaining(m,m,F)?"),gG:w("+members,trees,viewOnly(F,F,P)?"),az:w("oq?"),T:w("m?"),aD:w("dz?"),o:w("lY?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b7l=new A.bc(B.h1,B.bJ,B.h1,B.bJ)
D.afF=new A.bc(B.h1,B.i5,B.h1,B.i5)
D.b7A=new A.bc(B.jG,B.bJ,B.bJ,B.bJ)
D.b7E=new A.ax(B.cU,1.4,B.r,-1)
D.b7O=new A.ax(B.ab,1,B.r,-1)
D.agb=new A.aY(140,1/0,0,1/0)
D.b9a=new A.aY(0,1/0,64,1/0)
D.b9e=new A.aY(0,84,0,1/0)
D.agi=new A.aY(130,1/0,0,1/0)
D.aEQ=w([B.ml,B.td,B.c],x.O)
D.ccc=new A.a7(B.ay,B.aC,B.x,D.aEQ,null,null)
D.ba_=new A.o(null,null,null,null,null,D.ccc,B.m)
D.dm6=w([B.aV,B.bR],x.O)
D.ceo=new A.a7(B.aX,B.b1,B.x,D.dm6,null,null)
D.bak=new A.o(null,null,null,null,null,D.ceo,B.m)
D.Zv=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fJ=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dql=w([B.dz,D.Zv,D.fJ],x.O)
D.cbn=new A.a7(B.aX,B.b1,B.x,D.dql,null,null)
D.bb4=new A.o(null,null,null,null,null,D.cbn,B.m)
D.fGa=new A.H(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hh6=new A.C("?",null,D.fGa,null,null,null,null,null,null,null,null,null)
D.beV=new A.cl(B.z,null,null,D.hh6,null)
D.WZ=new A.H(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZZ=new A.C("\ud83c\udf33",null,D.WZ,null,null,null,null,null,null,null,null,null)
D.ah3=new A.cl(B.z,null,null,D.fZZ,null)
D.h1E=new A.C("\ud83c\udfc6",null,AK.LB,null,null,null,null,null,null,null,null,null)
D.bf5=new A.cl(B.z,null,null,D.h1E,null)
D.bgW=new A.fp(null,null,null,null,null,E.kD,null,null,null,null)
D.ah4=new A.cl(B.z,null,null,D.bgW,null)
D.kZ=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fGJ=new A.H(!0,D.kZ,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0E=new A.C("No books on the shelf yet.",null,D.fGJ,null,null,null,null,null,null,null,null,null)
D.eDb=new A.D(B.nZ,D.h0E,null)
D.bfm=new A.cl(B.z,null,null,D.eDb,null)
D.fNX=new A.H(!0,D.fJ,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hi3=new A.C("\ud83d\ude8c  On the road\u2026",null,D.fNX,null,null,null,null,null,null,null,null,null)
D.eDL=new A.D(B.cr,D.hi3,null)
D.bfP=new A.cl(B.z,null,null,D.eDL,null)
D.aZ3=new A.C("\ud83e\uddfa",null,D.WZ,null,null,null,null,null,null,null,null,null)
D.bg3=new A.cl(B.z,null,null,D.aZ3,null)
D.h47=new A.C("\ud83c\udfad",null,D.WZ,null,null,null,null,null,null,null,null,null)
D.bge=new A.cl(B.z,null,null,D.h47,null)
D.bgh=new A.cl(B.z,null,null,Af.Zh,null)
D.aho=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.ahv=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.biy=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.biD=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.biP=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.biR=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.biT=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bj0=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lR=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bj4=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bj9=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bjb=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bjc=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lS=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bjQ=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Ce=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bjZ=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bki=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bkl=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bkr=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bkz=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aia=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bkG=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.ZJ=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aid=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bkR=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.ZL=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.blb=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.aip=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.blA=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.blQ=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bmf=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bmq=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.GA=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bmP=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bmS=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bmW=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aiS=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bnd=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bnj=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bnq=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.aiW=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bnz=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bo3=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bod=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bog=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bom=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ajc=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bp0=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ajB=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bq_=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ajN=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bqp=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.GO=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bqw=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bqG=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bqI=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ajR=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.br_=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.br1=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.br4=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ajZ=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a_v=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.brt=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.brQ=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.brV=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.aka=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bs1=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a_C=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bso=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bsp=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.GY=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.btc=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.btP=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.btV=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.btZ=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qK=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bu9=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bud=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.buj=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bul=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.akX=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.al0=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.H4=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a_X=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.al9=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bvA=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bvS=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bwk=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bwt=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.alz=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a08=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bwE=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bwV=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a0e=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bxb=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bxs=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a0i=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bxx=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.alR=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.alT=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bxQ=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.am_=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.byi=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bym=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.byt=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.byC=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.byL=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bzm=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bzS=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fVK=new A.C("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bDn=new A.eL(null,D.fVK,B.fj,null,x.A)
D.h3Z=new A.C("None",null,null,null,null,null,null,null,null,null,null,null)
D.bDp=new A.eL(null,D.h3Z,B.fj,null,x.A)
D.bDX=new A.bg(38e5)
D.bEG=new A.iI(0,10,0,10)
D.bEP=new A.R(0,1,0,0)
D.bF_=new A.iI(0,4,0,4)
D.bF2=new A.R(0,4,5,0)
D.bFi=new A.R(10,10,14,10)
D.bFt=new A.iI(10,4,10,4)
D.bFC=new A.iI(10,8,10,8)
D.bFD=new A.R(10,8,8,8)
D.bG6=new A.R(12,6,12,2)
D.bGq=new A.R(14,0,14,6)
D.bGu=new A.R(14,10,6,6)
D.bGv=new A.R(14,12,14,0)
D.bGz=new A.R(14,12,14,8)
D.bGC=new A.R(14,12,8,14)
D.bGG=new A.iI(14,14,14,14)
D.bGZ=new A.R(14,6,14,40)
D.bH1=new A.R(14,8,14,30)
D.bHp=new A.R(16,2,16,10)
D.bHz=new A.R(16,6,16,30)
D.bHB=new A.R(16,6,16,8)
D.bHR=new A.R(18,10,18,4)
D.bHT=new A.R(18,12,18,0)
D.bI_=new A.R(18,14,12,4)
D.aos=new A.R(18,16,18,8)
D.bIg=new A.R(18,20,18,22)
D.bIm=new A.R(18,30,18,30)
D.bIE=new A.R(20,10,12,20)
D.bIH=new A.R(20,11,20,11)
D.bIT=new A.R(20,18,16,18)
D.bIV=new A.R(20,18,20,6)
D.bJK=new A.R(24,32,24,28)
D.bJL=new A.R(24,36,24,32)
D.bJO=new A.R(26,26,24,14)
D.bK2=new A.R(2,4,2,8)
D.bK6=new A.R(30,0,30,0)
D.bKh=new A.R(38,22,22,22)
D.aoQ=new A.R(40,24,24,24)
D.bKj=new A.iI(40,40,40,40)
D.bKl=new A.R(46,30,30,30)
D.bKP=new A.R(56,40,40,40)
D.bKT=new A.R(1.25,1.25,1.25,1.25)
D.bKU=new A.R(60,0,60,0)
D.bKZ=new A.R(6,14,6,16)
D.bL2=new A.R(6,4,12,0)
D.bL6=new A.R(6,6,10,2)
D.bLd=new A.iI(7,3,7,3)
D.bLK=new A.R(5,1.5,5,1.5)
D.bLV=new A.R(6,2.5,6,2.5)
D.hce=new A.C("Family Games",null,B.jn,null,null,null,null,null,null,null,null,null)
D.fUj=new A.C("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.WQ,null,null,null,null,null,null,null,null,null)
D.cNV=w([D.hce,D.fUj],x.p)
D.bAR=new A.fr(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.cNV,null)
D.bMl=new A.bz(1,B.ba,D.bAR,null)
D.hgE=new A.C("Signature",null,B.nt,null,null,null,null,null,null,null,null,null)
D.bMo=new A.bz(1,B.ba,D.hgE,null)
D.h8K=new A.C("MADE BY THE ONE WHO PLANTED THE TREE",null,X.uj,null,null,null,null,null,null,null,null,null)
D.bMW=new A.bz(1,B.ba,D.h8K,null)
D.hdH=new A.C("Tell the AI what to fix",null,B.dq,null,null,null,null,null,null,null,null,null)
D.bNc=new A.bz(1,B.ba,D.hdH,null)
D.fOJ=new A.H(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hfJ=new A.C("Worksheets",null,D.fOJ,null,null,null,null,null,null,null,null,null)
D.fOV=new A.H(!0,E.ahU,null,null,null,null,13,B.cE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hey=new A.C("Track your project spending",null,D.fOV,null,null,null,null,null,null,null,null,null)
D.dcE=w([D.hfJ,B.at,D.hey],x.p)
D.bAu=new A.fr(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.dcE,null)
D.bNi=new A.bz(1,B.ba,D.bAu,null)
D.fJC=new A.H(!0,E.kD,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUT=new A.C("FAMILY LIBRARY",null,D.fJC,null,null,null,null,null,null,null,null,null)
D.bNB=new A.bz(1,B.ba,D.fUT,null)
D.PC=new C.IG("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.x4=new C.IH(0,"male")
D.oP=new C.IH(1,"female")
D.zD=new C.IH(2,"unknown")
D.va=new C.an4(0,"owner")
D.PD=new C.an4(1,"editor")
D.l7=new C.an4(2,"viewer")
D.aqN=new A.a_(61199,"MaterialIcons",!1)
D.bSW=new A.a_(61504,"MaterialIcons",!1)
D.bSX=new A.a_(61505,"MaterialIcons",!1)
D.bSZ=new A.a_(61587,"MaterialIcons",!1)
D.bT5=new A.a_(61890,"MaterialIcons",!1)
D.bTY=new A.a_(63034,"MaterialIcons",!0)
D.bUf=new A.a_(63153,"MaterialIcons",!1)
D.bUN=new A.a_(63429,"MaterialIcons",!1)
D.asV=new A.a_(984520,"MaterialIcons",!1)
D.bTu=new A.a_(62776,"MaterialIcons",!1)
D.bXb=new A.ae(D.bTu,26,B.b5,null,null,null)
D.bRU=new A.a_(57648,"MaterialIcons",!1)
D.bXw=new A.ae(D.bRU,14,B.c,null,null,null)
D.bXO=new A.ae(B.I9,17,null,null,null,null)
D.bXV=new A.ae(B.Q7,null,B.bR,null,null,null)
D.bYk=new A.ae(E.a3V,null,null,null,null,null)
D.bYn=new A.ae(B.jj,18,E.kD,null,null,null)
D.a3F=new A.a_(62044,"MaterialIcons",!1)
D.bYt=new A.ae(D.a3F,null,B.aV,null,null,null)
D.bYA=new A.ae(At.zQ,18,B.c,null,null,null)
D.bZh=new A.ae(B.ef,16,null,null,null,null)
D.bZo=new A.ae(D.a3F,32,B.aV,null,null,null)
D.bZI=new A.ae(E.aqO,18,B.cU,null,null,null)
D.c_P=new A.ae(B.Ik,22,B.aB,null,null,null)
D.c02=new A.ae(B.ef,22,B.b5,null,null,null)
D.c0f=new A.ae(A2.a3K,22,B.c,null,null,null)
D.c0m=new A.ae(B.vl,52,B.c,null,null,null)
D.c0x=new A.ae(B.Ik,30,B.aB,null,null,null)
D.c0T=new A.ae(B.Qf,null,B.c,null,null,null)
D.atE=new A.ae(B.vw,22,B.c,null,null,null)
D.c11=new A.ae(B.ef,17,null,null,null,null)
D.c1p=new A.ae(B.xi,26,B.cU,null,null,null)
D.c2c=new A.ae(B.a4a,16,null,null,null,null)
D.c2Z=new A.ae(B.vl,24,B.c,null,null,null)
D.c33=new A.ae(B.Q5,20,B.tS,null,null,null)
D.c39=new A.ae(B.I7,null,B.bR,null,null,null)
D.c3i=new A.ae(B.jj,18,B.c,null,null,null)
D.c3Z=new A.ae(B.cz,22,B.ab,null,null,null)
D.c4S=new A.ae(B.eo,16,B.ab,null,null,null)
D.c53=new A.ae(D.a3F,20,B.aV,null,null,null)
D.au4=new A.ae(B.hn,20,null,null,null,null)
D.c5C=new A.ae(B.cz,18,D.kZ,null,null,null)
D.c5U=new A.ae(B.A_,28,B.c,null,null,null)
D.c65=new A.ae(B.PW,null,B.fo,null,null,null)
D.c6q=new A.ae(B.A_,24,B.c,null,null,null)
D.c6T=new A.ae(B.vl,null,B.aV,null,null,null)
D.c6U=new A.ae(B.jA,20,B.cU,null,null,null)
D.c7d=new A.ae(B.I9,16,null,null,null,null)
D.c8M=new A.eb(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jU,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eU,!0,null,null,null,null)
D.auO=new C.a7d(10,null)
D.c9i=new C.a7d(12,null)
D.c9j=new C.a7d(14,null)
D.duG=w([B.bv,B.aV,B.fx,B.b5],x.O)
D.cat=new A.a7(B.ay,B.aC,B.x,D.duG,null,null)
D.bsZ=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bzt=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d8O=w([D.bsZ,D.bzt],x.O)
D.caH=new A.a7(B.aX,B.b1,B.x,D.d8O,null,null)
D.dob=w([B.fl,B.h6,B.fx],x.O)
D.caN=new A.a7(B.ay,B.aC,B.x,D.dob,null,null)
D.akL=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bjd=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.dbb=w([D.akL,D.bjd],x.O)
D.cbo=new A.a7(B.aX,B.b1,B.x,D.dbb,null,null)
D.bn4=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aE6=w([D.bn4,D.akL],x.O)
D.cbI=new A.a7(B.ay,B.aC,B.x,D.aE6,null,null)
D.ajt=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bpR=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dne=w([D.ajt,D.bpR],x.O)
D.cco=new A.a7(B.a5,B.a9,B.x,D.dne,null,null)
D.dCj=w([B.bE,B.nK],x.O)
D.ccq=new A.a7(B.aX,B.b1,B.x,D.dCj,null,null)
D.bsU=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dDi=w([D.bsU,D.kZ,D.kZ,I.O7],x.O)
D.dG2=w([0,0.07,0.9,1],x.n)
D.ccW=new A.a7(B.a5,B.a9,B.x,D.dDi,D.dG2,null)
D.cd4=new A.a7(B.ay,B.aC,B.x,B.TV,null,null)
D.d6m=w([B.aD,D.lR],x.O)
D.cd7=new A.a7(B.a5,B.a9,B.x,D.d6m,null,null)
D.dBR=w([B.b5,B.aV,B.bR],x.O)
D.cea=new A.a7(B.ay,B.aC,B.x,D.dBR,null,null)
D.ciC=w([10,20,30],x.t)
D.csE=w([-1,-0.4,0.3,1],x.n)
D.cAb=w([B.bv,B.b5,B.fl],x.O)
D.cAj=w([B.bk,B.aD,B.kC],x.O)
D.cAl=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cB3=w([30,140,262,360],x.n)
D.bra=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cGF=w([D.bra,E.akk],x.O)
D.exQ=new A.r(1,2)
D.frv=new A.cX(B.b7,D.exQ,3)
D.aAY=w([D.frv],x.F)
D.cOb=w([B.hi,B.ce,B.fw],x.O)
D.cR1=w([B.bP,B.bz,B.bs],x.O)
D.bOr=new C.v5("classic","Classic leather","Gold-edged brown leather",D.aE6,E.kD,E.kD,"\u2766",B.K,!0,!1,!1,!1)
D.bii=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.by8=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dez=w([D.bii,D.by8],x.O)
D.akn=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bOm=new C.v5("ornate","Ornate gold","Double gold border and flourishes",D.dez,D.akn,D.akn,"\u2726",B.K,!0,!0,!0,!1)
D.bmB=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.btJ=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d51=w([D.bmB,D.btJ],x.O)
D.bOl=new C.v5("parchment","Parchment","Old paper with dark ink",D.d51,D.GY,L.je,"\u2767",B.K,!0,!1,!1,!0)
D.ahx=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bwh=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dzU=w([D.ahx,D.bwh],x.O)
D.bqD=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bvu=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bOo=new C.v5("minimal","Clean paper","Plain and elegant, like a printed book",D.dzU,D.bqD,D.bvu,"",B.K,!0,!0,!1,!0)
D.bOq=new C.v5("midnight","Midnight","Deep blue with silver stars",K.aEq,B.cA,B.cj,"\u2727",B.K,!0,!0,!1,!1)
D.bOk=new C.v5("emerald","Emerald library","Green cloth, title on the left",A_.aBn,E.kD,B.h8,"\u25c6",B.b8,!0,!1,!1,!1)
D.bwN=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dxK=w([B.ex,D.bwN],x.O)
D.bs0=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bth=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bOp=new C.v5("rose","Rose vintage","Burgundy with rose-gold lettering",D.dxK,D.bs0,D.bth,"\u2740",B.K,!0,!1,!0,!1)
D.dCU=w([B.cu,F.n3],x.O)
D.bOn=new C.v5("modern","Modern","Dark, bold, left-aligned",D.dCU,B.aH,B.c,"",B.b8,!1,!0,!1,!1)
D.a6d=w([D.bOr,D.bOm,D.bOl,D.bOo,D.bOq,D.bOk,D.bOp,D.bOn],A.ar("N<v5>"))
D.cU3=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dCG=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bOC=new C.lL('What does "Ubuntu" mean?',D.dCG,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d77=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bOF=new C.lL("In Swahili, what do we call a grandmother?",D.d77,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d6Z=w(["Babu","Mama","Baba","Dada"],x.s)
D.bOA=new C.lL("In Swahili, what do we call a grandfather?",D.d6Z,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d8l=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bOE=new C.lL("What is a sister called in Swahili?",D.d8l,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.ddW=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bOB=new C.lL("What is a brother called in Swahili?",D.ddW,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d6Y=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bOM=new C.lL("Which word means father in Swahili?",D.d6Y,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dDU=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bOL=new C.lL('"Umoja ni nguvu" means...',D.dDU,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dAC=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bON=new C.lL('"Haba na haba hujaza kibaba" teaches us...',D.dAC,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.dbk=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bOK=new C.lL('The African saying "It takes a village to raise a child" means...',D.dbk,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dEd=w(["The elders","The market","The river","The drum"],x.s)
D.bOG=new C.lL("Who is the traditional keeper of the family stories?",D.dEd,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cYo=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bOD=new C.lL("Why do families sit round the fire at night?",D.cYo,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dCW=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bOI=new C.lL('What does "Harambee" mean?',D.dCW,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dh5=w(["An elder","A baby","A market","A cow"],x.s)
D.bOH=new C.lL('"Mzee" is a respectful word for...',D.dh5,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dxA=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bOJ=new C.lL('What does "Shikamoo" show?',D.dxA,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aBi=w([D.bOC,D.bOF,D.bOA,D.bOE,D.bOB,D.bOM,D.bOL,D.bON,D.bOK,D.bOG,D.bOD,D.bOI,D.bOH,D.bOJ],x.J)
D.d1S=w([90,360],x.n)
D.d4y=w([B.bR,B.bp],x.O)
D.bsH=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d5h=w([D.ahx,D.bsH],x.O)
D.d64=w([-1,-0.3,0.4,1],x.n)
D.d74=w([0,0.45,0.72,0.92,1],x.n)
D.bmx=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d7n=w([D.bmx,B.bB],x.O)
D.bkd=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.am9=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d7Z=w([B.dz,D.bkd,D.am9],x.O)
D.d96=w([B.bc,B.jt,B.px],x.O)
D.bn6=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bvl=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bjU=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d9b=w([D.bn6,D.bvl,D.bjU],x.O)
D.d9y=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d9I=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hLG=new C.aeH(78,424,48,44,56)
D.hLE=new C.aeH(214,396,34,34,42)
D.hLF=new C.aeH(442,452,56,50,64)
D.aCi=w([D.hLG,D.hLE,D.hLF],A.ar("N<aeH>"))
D.dah=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bj6=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bp_=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dFZ=w([D.ajt,D.bj6,D.bp_],x.O)
D.bOs=new C.v6("leather","Leather",D.dFZ,"vintage")
D.dia=w([B.dg,B.GM,Ao.a__],x.O)
D.bOz=new C.v6("midnight","Midnight",D.dia,"starry")
D.d97=w([B.eq,B.eh,B.lu],x.O)
D.bOy=new C.v6("forest","Forest",D.d97,"story")
D.dIf=w([B.er,B.ex,B.kF],x.O)
D.bOv=new C.v6("burgundy","Burgundy",D.dIf,"royal")
D.cQz=w([B.aD,B.mZ,B.nB],x.O)
D.bOw=new C.v6("royal","Royal",D.cQz,"royal")
D.dbT=w([B.bz,B.cu,F.n3],x.O)
D.bOt=new C.v6("charcoal","Charcoal",D.dbT,"geo")
D.dG7=w([B.c7,B.dW,B.wE],x.O)
D.bOx=new C.v6("sunset","Sunset",D.dG7,"sunset")
D.dGW=w([B.jt,B.yV,B.a_3],x.O)
D.bOu=new C.v6("ocean","Ocean",D.dGW,"band")
D.As=w([D.bOs,D.bOz,D.bOy,D.bOv,D.bOw,D.bOt,D.bOx,D.bOu],A.ar("N<v6>"))
D.dcr=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.dd8=w([B.an,B.aM,B.a_],x.O)
D.deF=w([B.ex,B.eh,B.dg,B.iU,B.yX,B.cU,B.ka,B.cQ,B.d9],x.O)
D.deG=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.frw=new A.cX(B.dG,B.dQ,8)
D.deS=w([D.frw],x.F)
D.dg6=w([B.c2,B.dW,B.k6],x.O)
D.bl4=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bpi=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.btE=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dgo=w([D.bl4,G.akU,D.bpi,D.btE,D.am9],x.O)
D.dgF=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dgT=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.biu=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.boD=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dhp=w([D.biu,D.aiW,D.boD],x.O)
D.di5=w([B.c2,B.hH],x.O)
D.dib=w([G.nD,B.ir,G.ahJ,B.cW],x.O)
D.djR=w([B.cW,G.nD,B.ir,D.lS,B.cW],x.O)
D.dkw=w([B.aQ,B.yT,B.yJ],x.O)
D.eVp=new A.y(-0.65,0.6)
D.f7C=new A.y(-0.2,0.95)
D.f8M=new A.y(0.25,0.95)
D.eYZ=new A.y(0.7,0.6)
D.f9m=new A.y(1,0.1)
D.dlm=w([AJ.VJ,D.eVp,D.f7C,D.f8M,D.eYZ,D.f9m],x.G)
D.bru=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.by0=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bm4=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dlt=w([D.bru,D.by0,D.bm4],x.O)
D.dly=w([B.bM,B.bY,B.dC,B.aQ],x.O)
D.dm7=w([B.hY,B.c7,B.uK],x.O)
D.dmv=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dmH=w([B.fl,B.cU],x.O)
D.bt2=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dn9=w([D.bt2,D.ahv],x.O)
D.dnl=w([B.cS,B.fK,B.fV],x.O)
D.dny=w([B.aH,B.bp,B.dg],x.O)
D.do8=w([B.eC,B.dt,B.eh],x.O)
D.dov=w([B.dU,B.dg,B.GM],x.O)
D.doz=w([B.bt,B.mW,B.d9],x.O)
D.doQ=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bsf=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bql=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dpb=w([D.bsf,D.aiS,D.bql],x.O)
D.dq3=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dre=w([1,0,7,6,3,2],x.t)
D.a7a=w(["leather","linen","plain","stars","rays"],x.s)
D.drp=w([0.5,2,3.6],x.n)
D.drY=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bWt=new A.a_(983781,"MaterialIcons",!1)
D.aDN=w([B.Q7,B.hP,B.kJ,B.ic,F.at2,B.Iv,B.r8,D.bWt,K.asG,B.DI,B.rb,B.m1],A.ar("N<a_>"))
D.a7e=w(["double","single","corners","none"],x.s)
D.bOh=new C.zS("Little Seed","\ud83c\udf31",0)
D.bOj=new C.zS("Young Listener","\ud83d\udc42",40)
D.bOi=new C.zS("Storyteller","\ud83e\ude98",120)
D.bOg=new C.zS("Village Pride","\ud83c\udfe1",300)
D.bOe=new C.zS("Keeper of Roots","\ud83c\udf33",700)
D.bOf=new C.zS("Elder of the Fire","\ud83d\udd25",1500)
D.aDP=w([D.bOh,D.bOj,D.bOi,D.bOg,D.bOe,D.bOf],A.ar("N<zS>"))
D.dtd=w([B.cX,B.bj,B.cQ],x.O)
D.dtt=w([],x.C)
D.Ei=w([],x.u)
D.aNZ=new A.r(225,528)
D.eX5=new A.y(D.aNZ,1)
D.eyB=new A.r(350,548)
D.f2D=new A.y(D.eyB,0.95)
D.aNT=new A.r(158,656)
D.f2w=new A.y(D.aNT,1.12)
D.ezo=new A.r(92,544)
D.eSz=new A.y(D.ezo,0.93)
D.eyE=new A.r(398,614)
D.eZm=new A.y(D.eyE,1.04)
D.eys=new A.r(318,662)
D.eNM=new A.y(D.eys,1.1)
D.a7m=w([D.eX5,D.f2D,D.f2w,D.eSz,D.eZm,D.eNM],A.ar("N<+(r,G)>"))
D.dvB=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dw7=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dxg=w([B.cW,G.nD,B.ir,D.lS,B.cW,B.ir],x.O)
D.dyK=w([B.au,B.fK,B.iU],x.O)
D.dzr=w([-70,58],x.n)
D.dzt=w([-70,-30,20],x.n)
D.dAz=w([B.bt,B.mW,B.a09],x.O)
D.dAR=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dXl=new C.md("construction","Construction","Jobsite & builds",B.ra)
D.dXs=new C.md("house","Home Build","Houses & rooms",B.vn)
D.dXi=new C.md("grocery","Grocery","Store & pantry",B.a4J)
D.dXh=new C.md("calculator","Calculations","Math & estimates",B.Qe)
D.dXq=new C.md("lumber","Materials","Lumber & supplies",B.Is)
D.dXe=new C.md("kitchen","Kitchen","Remodel & meals",Ab.Qz)
D.bWq=new A.a_(983756,"MaterialIcons",!1)
D.dXj=new C.md("landscape","Landscaping","Yard & garden",D.bWq)
D.dXd=new C.md("plumbing","Plumbing","Pipes & water",B.pX)
D.dXt=new C.md("electrical","Electrical","Wiring & power",B.he)
D.dXb=new C.md("store","Retail Shop","Daily business",B.km)
D.dXc=new C.md("paint_remodel","Paint & Remodel","Colors & walls",Ab.Qv)
D.bVN=new A.a_(983311,"MaterialIcons",!1)
D.dXp=new C.md("roofing","Roofing","Roofs & exteriors",D.bVN)
D.bWD=new A.a_(983986,"MaterialIcons",!1)
D.dXa=new C.md("warehouse","Warehouse","Storage & stock",D.bWD)
D.dXn=new C.md("vehicles","Vehicles","Fleet & transport",B.DF)
D.bTw=new A.a_(62785,"MaterialIcons",!1)
D.dXg=new C.md("farm","Farm","Crops & livestock",D.bTw)
D.dXf=new C.md("restaurant","Restaurant","Food & catering",B.vu)
D.dXm=new C.md("tools","Tools","Workshop gear",B.DB)
D.dXr=new C.md("wallet","Cash & Wallet","Quick spending",B.jA)
D.dXo=new C.md("concrete","Concrete","Foundation work",F.arK)
D.dXk=new C.md("blueprint","Blueprint","Plans & design",AG.arh)
D.a7L=w([D.dXl,D.dXs,D.dXi,D.dXh,D.dXq,D.dXe,D.dXj,D.dXd,D.dXt,D.dXb,D.dXc,D.dXp,D.dXa,D.dXn,D.dXg,D.dXf,D.dXm,D.dXr,D.dXo,D.dXk],A.ar("N<md>"))
D.dBv=w([B.bu,B.bj],x.O)
D.dCk=w([B.iE,B.oy,B.e_],x.O)
D.ajH=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.akG=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bqH=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bhY=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aEY=w([D.ajH,D.akG,D.bqH,D.bhY],x.O)
D.dDz=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7V=w(["top","middle","bottom"],x.s)
D.dF7=w([B.ct,B.bp,B.dg],x.O)
D.aFh=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bby=new A.aa(0,B.H,B.b7,B.J,14)
D.aFl=w([D.bby],x.V)
D.bpx=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dFS=w([D.aia,D.a08,D.bpx],x.O)
D.dFT=w([B.be,B.dt,B.eh],x.O)
D.eyb=new A.r(24,-8)
D.eyU=new A.r(48,0)
D.ey7=new A.r(24,6)
D.dHJ=w([B.J,D.eyb,D.eyU,D.ey7],x.g)
D.dIa=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.euC={top:0,middle:1,bottom:2}
D.dLu=new A.bl(D.euC,["Top","Middle","Bottom"],x.r)
D.eua={double:0,single:1,corners:2,none:3}
D.dLA=new A.bl(D.eua,["Double line","One line","Corners","None"],x.r)
D.evq={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dNe=new A.bl(D.evq,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dNr=new A.bl(B.ih,[],A.ar("bl<F,+(m,m)>"))
D.eut={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Ey=new A.bl(D.eut,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ar("bl<m,F>"))
D.dRK=new H.O8(32,null)
D.dRL=new H.O8(40,null)
D.dRM=new H.O8(46,null)
D.aNr=new C.av3(null)
D.ex2=new A.r(0,40)
D.ex3=new A.r(0,412)
D.ex6=new A.r(0,900)
D.exf=new A.r(0,-34)
D.exg=new A.r(0,-46)
D.exi=new A.r(0,-74)
D.exl=new A.r(100,300)
D.exm=new A.r(10,14)
D.exp=new A.r(10,-10)
D.exu=new A.r(10,-46)
D.exv=new A.r(10,-58)
D.exw=new A.r(116,442)
D.exy=new A.r(11,-1)
D.exz=new A.r(11,-10)
D.exA=new A.r(11,-21)
D.aNO=new A.r(11,-60)
D.exH=new A.r(14,-2)
D.exI=new A.r(150,520)
D.aa6=new A.r(150,592)
D.exL=new A.r(15,-15)
D.exM=new A.r(16,-1)
D.exP=new A.r(190,444)
D.exS=new A.r(1,5)
D.ey_=new A.r(21,-78)
D.ey0=new A.r(222,615)
D.Kq=new A.r(225,300)
D.aa8=new A.r(225,574)
D.eya=new A.r(24,-52)
D.eyc=new A.r(250,210)
D.eyn=new A.r(2,-56)
D.aO2=new A.r(300,0)
D.eyo=new A.r(300,440)
D.eyr=new A.r(318,476)
D.eyu=new A.r(324,144)
D.aab=new A.r(332,150)
D.eyw=new A.r(335,585)
D.eyx=new A.r(338,140)
D.eyy=new A.r(340,158)
D.eyA=new A.r(34,-60)
D.F_=new A.r(36,-24)
D.eyC=new A.r(372,470)
D.eyD=new A.r(390,455)
D.eyM=new A.r(42,468)
D.eyN=new A.r(431,510)
D.eyO=new A.r(431,520)
D.eyP=new A.r(45,-92)
D.eyQ=new A.r(46,20)
D.eyR=new A.r(46,-92)
D.eyS=new A.r(46,-94)
D.eyT=new A.r(47,-4)
D.eyV=new A.r(48,-4)
D.ez2=new A.r(4,-26)
D.eza=new A.r(60,455)
D.ezj=new A.r(8,14)
D.ezn=new A.r(8,-76)
D.ezp=new A.r(95,575)
D.ezq=new A.r(98,-24)
D.ezs=new A.r(9,-2)
D.ezt=new A.r(9,-58)
D.aOb=new A.r(9,-79)
D.ezu=new A.r(9,-9)
D.eA6=new A.r(16.5,8)
D.eA8=new A.r(3.2,0)
D.eA9=new A.r(-16.5,8)
D.eAg=new A.r(16.5,2)
D.eAj=new A.r(-3.2,0)
D.eAr=new A.r(9.5,6)
D.eAu=new A.r(-10,14)
D.eAv=new A.r(-10,-12)
D.eAw=new A.r(-10,-58)
D.eAy=new A.r(-11,-10)
D.eAA=new A.r(-11,-60)
D.eAB=new A.r(-12,-14)
D.eAC=new A.r(-12,-16)
D.eAH=new A.r(-14,-2)
D.eAK=new A.r(-15,-15)
D.eAL=new A.r(-15,-3)
D.eAN=new A.r(-16,-1)
D.eB2=new A.r(-24,-52)
D.eBb=new A.r(-2,-34)
D.eBc=new A.r(-2,-38)
D.eBe=new A.r(-30,-100)
D.aad=new A.r(-36,-24)
D.eBp=new A.r(-4,-26)
D.eBr=new A.r(-4,-6)
D.eBA=new A.r(-8,-3)
D.eBB=new A.r(-8,-48)
D.eBE=new A.r(-9,-2)
D.eBG=new A.r(-9,-58)
D.eBH=new A.r(-9,-79)
D.eBI=new A.r(-9,-9)
D.eBK=new A.r(-9.5,6)
D.eBX=new A.r(-16.5,2)
D.h1k=new A.C("Write a new book",null,B.hs,null,B.K,null,null,null,null,null,null,null)
D.eCw=new A.D(B.l5,D.h1k,null)
D.hgc=new A.C("Tap to go on",null,B.w5,null,null,null,null,null,null,null,null,null)
D.eCS=new A.D(B.lx,D.hgc,null)
D.atc=new A.ae(B.ib,18,B.c,null,null,null)
D.fVg=new A.C("Add",null,B.kQ,null,null,null,null,null,null,null,null,null)
D.dlO=w([D.atc,B.ry,D.fVg],x.p)
D.foA=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,D.dlO,null)
D.eCV=new A.D(B.nW,D.foA,null)
D.eCX=new A.D(E.ang,Af.Zh,null)
D.fOE=new A.H(!0,B.c,null,null,null,null,13.5,B.F,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYw=new A.C("New Project",null,D.fOE,null,null,null,null,null,null,null,null,null)
D.dqu=w([D.atc,B.aa,D.fYw],x.p)
D.foD=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,D.dqu,null)
D.eDa=new A.D(B.hz,D.foD,null)
D.h03=new A.C("Choose your header",null,A7.ug,null,null,null,null,null,null,null,null,null)
D.eDv=new A.D(B.ia,D.h03,null)
D.bhb=new A.fp(2.2,null,null,null,null,B.cU,null,null,null,null)
D.fuo=new A.a6(22,22,D.bhb,null)
D.bfh=new A.cl(B.z,null,null,D.fuo,null)
D.eDA=new A.D(B.a1v,D.bfh,null)
D.bGR=new A.R(14,2,14,6)
D.heh=new A.C("The top of your book. Tap a design to see it.",null,Y.uh,null,null,null,null,null,null,null,null,null)
D.eDB=new A.D(D.bGR,D.heh,null)
D.h_d=new A.C("\ud83c\udfc6 A new record!",null,B.hg,null,null,null,null,null,null,null,null,null)
D.eDD=new A.D(B.lx,D.h_d,null)
D.eFb=new A.jj(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eFe=new A.jj(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aOO=new A.jj(1,0.9607843137254902,0.48627450980392156,0)
D.Ky=new A.jj(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.B2=new A.jj(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eFk=new A.jj(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hNS=new C.bl4(null)
D.bBD=new A.mT(D.hNS,null,B.az,null,null)
D.aSr=new A.cN(0,0,0,0,null,null,D.bBD,null)
D.fVi=new A.C("\ud83c\udfc5",null,B.acx,null,null,null,null,null,null,null,null,null)
D.eJK=new A.cN(null,0,-34,null,null,null,D.fVi,null)
D.eSd=new A.y("E","Sit by the fire again")
D.eXY=new A.y("C","Good Learner")
D.f0x=new A.y("D","Still Growing")
D.f5k=new A.y(-42,42)
D.f6K=new A.y("B","Faithful Listener")
D.f8O=new A.y("A","Keeper of the Family")
D.fc1=new A.b3(-17,0.7,0)
D.fcB=new A.b3(-8,0.95,1.3)
D.fdI=new A.b3(18,0.65,5.2)
D.fdK=new A.b3(0,1.15,2.6)
D.fe4=new A.b3(9,0.9,3.9)
D.fg2=new A.b7([0,0,1,1])
D.aTY=new A.a3(0,0,520,160)
D.flB=new A.a3(10,612,440,618)
D.flC=new A.a3(10,612,440,628)
D.flF=new A.a3(14,-64,34,-12)
D.flI=new A.a3(300,336,350,348)
D.ab7=new A.a3(30,96,420,346)
D.flJ=new A.a3(30,-9,46,1)
D.flK=new A.a3(4,2,11,14)
D.flM=new A.a3(-8,-12.5,8,-7)
D.flN=new A.a3(-16.5,-21,16.5,1)
D.flO=new A.a3(60,342,88,348)
D.VK=new A.a3(66,-66,94,-36)
D.flP=new A.a3(6,8,10,14)
D.flS=new A.a3(95,343,115,348)
D.flT=new A.a3(-6.5,-74,6.5,-58)
D.flZ=new A.a3(-100,-74,100,-12)
D.fm_=new A.a3(-10,8,-6,14)
D.fm0=new A.a3(-11,2,-4,14)
D.fm1=new A.a3(-11,-70,11,-56)
D.fm8=new A.a3(-13,-24,13,-4)
D.fmf=new A.a3(-15,-21,15,0)
D.fmi=new A.a3(-16,-21,16,1)
D.fmj=new A.a3(-16,-21,16,2)
D.fmm=new A.a3(-16,-26,16,-6)
D.fmu=new A.a3(-230,-26,230,26)
D.fmT=new A.a3(-38,-26,12,-6)
D.fmX=new A.a3(-3,-70,3,-63)
D.fmY=new A.a3(-44,-22,44,0)
D.fn_=new A.a3(-46,-9,-30,1)
D.aU1=new A.a3(-80,-190,80,20)
D.fn6=new A.a3(-8,-26,40,-6)
D.fn7=new A.a3(-98,-80,92,-75)
D.fn8=new A.a3(-9,-15,9,-9)
D.hdO=new A.C("Let the AI write it from your tree",null,B.iQ,null,B.K,null,null,null,null,null,null,null)
D.bPm=new A.d5(1,B.cg,D.hdO,null)
D.di4=w([E.a5d,B.aa,D.bPm],x.p)
D.foc=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,D.di4,null)
D.fUU=new A.C("Save member",null,B.ca,null,null,null,null,null,null,null,null,null)
D.dza=w([D.au4,B.aa,D.fUU],x.p)
D.fon=new A.c3(B.aL,B.b9,B.h,B.l,null,B.p,null,0,D.dza,null)
D.c08=new A.ae(B.it,14,B.b5,null,null,null)
D.fI7=new A.H(!0,B.b5,null,null,null,null,12,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYX=new A.C("Cashier",null,D.fI7,null,null,null,null,null,null,null,null,null)
D.dr3=w([D.c08,B.bf,D.fYX],x.p)
D.fos=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,D.dr3,null)
D.fUV=new A.C("Transfer & settings",null,B.dq,null,null,null,null,null,null,null,null,null)
D.bN2=new A.bz(1,B.ba,D.fUV,null)
D.d8u=w([D.atE,B.ar,D.bN2],x.p)
D.fot=new A.c3(B.aL,B.e,B.h,B.l,null,B.p,null,0,D.d8u,null)
D.ft3=new A.av(16,40)
D.ft8=new A.av(22,64)
D.ftf=new A.av(280,88)
D.fu3=new A.a6(30,null,null,null)
D.fU_=new A.C("The teacher is writing\u2026",null,B.Bo,null,null,null,null,null,null,null,null,null)
D.bgn=new A.cl(B.z,null,null,D.fU_,null)
D.hHB=new A.bf("w",x.W)
D.fus=new A.a6(null,56,D.bgn,D.hHB)
D.fvf=new A.hX(5,8,8,1,null)
D.fvn=new A.hX(2,12,12,1.05,null)
D.fYC=new A.C("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fw7=new A.b1(D.fYC,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYS=new A.C("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aWl=new A.b1(D.fYS,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h6n=new A.C("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fwB=new A.b1(D.h6n,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hhf=new A.C("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fwG=new A.b1(D.hhf,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h01=new A.C("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fwN=new A.b1(D.h01,null,null,null,null,null,null,null,null,null,null,null,null,B.fX,!1,null,null,null,B.t,null)
D.heu=new A.C("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aWq=new A.b1(D.heu,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h0_=new A.C("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fxc=new A.b1(D.h0_,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVz=new A.C("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fxe=new A.b1(D.fVz,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h3N=new A.C("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fxk=new A.b1(D.h3N,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hi0=new A.C("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fy0=new A.b1(D.hi0,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hcI=new A.C("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fyq=new A.b1(D.hcI,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hhj=new A.C("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fyt=new A.b1(D.hhj,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h80=new A.C("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fyv=new A.b1(D.h80,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h1X=new A.C("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fyw=new A.b1(D.h1X,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h1Y=new A.C("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fzx=new A.b1(D.h1Y,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYE=new A.C("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fzP=new A.b1(D.fYE,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h_F=new A.C("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fA8=new A.b1(D.h_F,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h7u=new A.C("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fAp=new A.b1(D.h7u,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h2M=new A.C("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fAq=new A.b1(D.h2M,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fNk=new A.H(!0,B.bA,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBZ=new A.eC("\u2665",null,null,B.cV,null,null,null,null,null,null,D.fNk)
D.fKs=new A.H(!0,B.aS,null,null,null,null,28,B.O,B.cL,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCe=new A.eC("Today: how well do you know the family?",null,null,B.cV,null,null,null,null,null,null,D.fKs)
D.fCv=new A.H(!0,B.qw,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDH=new A.H(!0,D.kZ,null,null,null,null,13,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE3=new A.H(!0,D.kZ,null,null,null,null,12,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE7=new A.H(!0,B.cW,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEg=new A.H(!0,D.fJ,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEr=new A.H(!0,D.fJ,null,null,null,null,13,B.F,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEL=new A.ti(!0,B.u3,null,null,null,null,B.dJ,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF0=new A.H(!0,B.cW,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF4=new A.H(!0,D.kZ,null,null,null,null,18,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF5=new A.H(!0,B.cW,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFa=new A.H(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFd=new A.H(!0,B.cW,null,null,null,null,15,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFJ=new A.H(!0,B.b5,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFK=new A.H(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFM=new A.H(!0,B.aS,null,null,null,null,15.5,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGc=new A.H(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXF=new A.H(!0,B.aR,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXG=new A.H(!0,D.lR,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGC=new A.H(!0,B.cW,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acC=new A.ti(!0,B.Vg,null,null,null,null,B.dJ,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.WD=new A.H(!0,B.cW,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGM=new A.H(!0,B.a_,null,null,null,null,12.5,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGR=new A.H(!0,D.fJ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHg=new A.H(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIr=new A.H(!0,D.fJ,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXP=new A.H(!0,D.fJ,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIL=new A.H(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIX=new A.H(!0,D.fJ,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIZ=new A.H(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ4=new A.H(!0,L.je,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXT=new A.H(!0,D.fJ,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK2=new A.H(!0,D.fJ,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKl=new A.H(!0,D.fJ,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKn=new A.H(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKp=new A.H(!0,B.cW,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKN=new A.H(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,Ae.Jq,null,null,null)
D.aY6=new A.H(!0,D.fJ,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLc=new A.H(!0,B.a_,null,null,null,null,17,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLy=new A.H(!0,B.fo,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLW=new A.H(!0,B.bR,null,null,null,null,8,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM0=new A.H(!0,B.bE,null,null,null,null,11,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMc=new A.H(!0,B.c,null,null,null,null,13.5,B.F,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMf=new A.H(!0,D.fJ,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMn=new A.H(!0,D.GY,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMz=new A.H(!0,B.b5,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMY=new A.H(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN4=new A.H(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ea,null,null,null)
D.fNv=new A.H(!0,B.cW,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fND=new A.H(!0,B.cU,null,null,null,null,13,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNQ=new A.H(!0,D.lS,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYt=new A.H(!0,D.fJ,null,null,null,null,null,B.F,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.LK=new A.H(!0,B.cW,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYv=new A.H(!0,B.cW,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ea,null,null,null)
D.fOa=new A.H(!0,B.bR,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOe=new A.H(!0,G.nD,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOC=new A.H(!0,B.b5,null,null,null,null,13,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOU=new A.H(!0,D.fJ,null,null,null,null,15,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPi=new A.H(!0,B.c,null,null,null,null,null,B.F,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPH=new A.H(!0,D.fJ,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQd=new A.H(!0,D.fJ,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQi=new A.H(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQs=new A.H(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ad8=new A.H(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adb=new A.H(!0,D.lR,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSc=new A.H(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSx=new A.H(!0,B.aS,null,null,null,null,27,B.O,B.cL,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSE=new A.H(!0,L.je,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSM=new A.H(!0,L.je,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTf=new A.C("Time:",null,B.hE,null,null,null,null,null,null,null,null,null)
D.fTB=new A.C("\ud83c\udfae",null,K.acZ,null,null,null,null,null,null,null,null,null)
D.fTC=new A.C("Themes",null,B.pj,null,null,null,null,null,null,null,null,null)
D.fU7=new A.C("\ud83c\udfb2",null,B.y4,null,null,null,null,null,null,null,null,null)
D.fUb=new A.C("Delete this game?",null,B.iQ,null,null,null,null,null,null,null,null,null)
D.fUi=new A.C("Add Item",null,B.ca,null,null,null,null,null,null,null,null,null)
D.fIF=new A.H(!0,B.a_,null,null,null,null,22,B.F,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUJ=new A.C("Debt receipt",null,D.fIF,null,B.K,null,null,null,null,null,null,null)
D.aYJ=new A.H(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV1=new A.C("Person who owes",null,D.aYJ,null,null,null,null,null,null,null,null,null)
D.fW2=new A.C("Notes",null,B.acO,null,null,null,null,null,null,null,null,null)
D.fWv=new A.C("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fHz=new A.H(!0,B.c,null,null,null,null,11,B.F,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWx=new A.C("Share",null,D.fHz,null,null,null,null,null,null,null,null,null)
D.fXy=new A.C("Move your family trees",null,I.ad5,null,null,null,null,null,null,null,null,null)
D.fYd=new A.C("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fYR=new A.C("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fZe=new A.C("SAVE",null,D.LK,null,null,null,null,null,null,null,null,null)
D.fZS=new A.C("The round button is the right answer.",null,Y.Bs,null,null,null,null,null,null,null,null,null)
D.h_c=new A.C("Remove this book?",null,B.hg,null,null,null,null,null,null,null,null,null)
D.fOz=new A.H(!0,B.cW,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ea,null,null,null)
D.h_K=new A.C("Fireside Stories",null,D.fOz,null,null,null,null,null,null,null,null,null)
D.aZc=new A.C("Download",null,B.ca,null,null,null,null,null,null,null,null,null)
D.h0q=new A.C("What should the AI do?",null,B.dq,null,null,null,null,null,null,null,null,null)
D.fHa=new A.H(!0,D.lR,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0F=new A.C("REPORT CARD",null,D.fHa,null,null,null,null,null,null,null,null,null)
D.h1r=new A.C("Calabash Catch",null,B.X_,null,null,null,null,null,null,null,null,null)
D.h1T=new A.C("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.h2j=new A.C("\ud83c\udfe1",null,B.Fv,null,null,null,null,null,null,null,null,null)
D.h30=new A.C("Ribbon bookmark",null,B.jK,null,null,null,null,null,null,null,null,null)
D.fQc=new A.H(!0,B.b5,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3v=new A.C("NGMY.ORG",null,D.fQc,null,B.K,null,null,null,null,null,null,null)
D.h4Q=new A.C("Scan family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fMg=new A.H(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5D=new A.C("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fMg,null,B.K,null,null,null,null,null,null,null)
D.h6R=new A.C("Delete",null,B.Wx,null,null,null,null,null,null,null,null,null)
D.h6S=new A.C("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.h7_=new A.C("Thumbnail",null,B.pj,null,null,null,null,null,null,null,null,null)
D.h7z=new A.C("Save the cover",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h7E=new A.C("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.Bw,null,B.K,null,null,null,null,null,null,null)
D.h81=new A.C("Your photos",null,B.pj,null,null,null,null,null,null,null,null,null)
D.h8i=new A.C("Create Project",null,B.ca,null,null,null,null,null,null,null,null,null)
D.h8F=new A.C("\u2b50 stars",null,AO.LF,null,null,null,null,null,null,null,null,null)
D.h8T=new A.C("Design your cover",null,A7.ug,null,null,null,null,null,null,null,null,null)
D.h8Z=new A.C("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.h91=new A.C("PICTURE",null,N.w8,null,null,null,null,null,null,null,null,null)
D.h93=new A.C("\ud83c\udfaf",null,D.WZ,null,null,null,null,null,null,null,null,null)
D.h9q=new A.C("Paid",null,B.ca,null,null,null,null,null,null,null,null,null)
D.h9s=new A.C("You can undo it right after.",null,Y.Bs,null,null,null,null,null,null,null,null,null)
D.ha0=new A.C("Print",null,B.w6,null,null,null,null,null,null,null,null,null)
D.haq=new A.C("Amount owed",null,D.aYJ,null,null,null,null,null,null,null,null,null)
D.haG=new A.C("Got it",null,B.ca,null,null,null,null,null,null,null,null,null)
D.hbi=new A.C("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.hbl=new A.C("Add to budget",null,B.ca,null,null,null,null,null,null,null,null,null)
D.hbL=new A.C("Debtor signature",null,B.acO,null,null,null,null,null,null,null,null,null)
D.hbV=new A.C("Change icon",null,B.acN,null,null,null,null,null,null,null,null,null)
D.hcJ=new A.C("MADE BY THE SYSTEM, FROM YOUR TREE",null,X.uj,null,null,null,null,null,null,null,null,null)
D.hda=new A.C("Family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.hdg=new A.C("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.WY,null,null,null,null,null,null,null,null,null)
D.hdE=new A.C("Download",null,B.w6,null,null,null,null,null,null,null,null,null)
D.hdF=new A.C("The person who planted this tree has not made a game yet.",null,A1.Bu,null,null,null,null,null,null,null,null,null)
D.hdJ=new A.C("Change",null,B.pj,null,null,null,null,null,null,null,null,null)
D.heA=new A.C("Clear all",null,B.ca,null,null,null,null,null,null,null,null,null)
D.heD=new A.C("WHAT SHOULD IT CHANGE?",null,N.w8,null,null,null,null,null,null,null,null,null)
D.hfb=new A.C("COLOUR",null,N.w8,null,null,null,null,null,null,null,null,null)
D.hfq=new A.C("Do it",null,B.cG,null,null,null,null,null,null,null,null,null)
D.hfu=new A.C("Create Tree",null,B.ca,null,null,null,null,null,null,null,null,null)
D.hfE=new A.C("Give me another clue",null,D.LK,null,null,null,null,null,null,null,null,null)
D.hgy=new A.C("Create Family Tree",null,B.fh,null,null,null,null,null,null,null,null,null)
D.hgI=new A.C("THE TEACHER EXPLAINS THESE",null,X.uj,null,null,null,null,null,null,null,null,null)
D.fCu=new A.H(!0,E.kD,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hgO=new A.C("Write the first page myself",null,D.fCu,null,null,null,null,null,null,null,null,null)
D.hhm=new A.C("Use this header",null,B.cG,null,null,null,null,null,null,null,null,null)
D.hht=new A.C("Create Project",null,E.aYp,null,null,null,null,null,null,null,null,null)
D.hJ5=new C.adj(1,"header")
D.aed=new C.adj(2,"projects")
D.hJ6=new C.adj(3,"cashier")
D.aee=new C.adj(4,"familyTree")
D.hYM=new C.cIP(0,"start")
D.hYN=new C.cIQ(0,"start")
D.hJj=new C.a_e(null)
D.hKk=new C.a_J(null)
D.dNo=new A.bl(B.ih,[],A.ar("bl<m,GT>"))
D.dtS=w([],x.dE)
D.dtT=w([],x.M)
D.hKZ=new C.bif(D.dNo,D.dtS,D.dtT,0,0,null,null)
D.b2H=new C.a0z(0,"intro")
D.b2I=new C.a0z(1,"countdown")
D.aer=new C.a0z(2,"ask")
D.XW=new C.a0z(3,"reveal")
D.b2J=new C.a0z(4,"end")
D.hNU=new C.tq(F.H7,D.lS,B.cW,F.mi,5,!1,!1,!1,0,null)
D.hNW=new C.tq(F.H7,B.er,B.cW,B.bO,2,!0,!0,!1,2,B.cW)
D.hNY=new C.tq(B.qM,B.cU,B.cW,F.mi,2,!0,!1,!1,2,B.au)
D.hNZ=new C.tq(F.H7,B.dU,B.cW,F.mi,5,!1,!1,!1,1,null)
D.hO1=new C.tq(F.a0p,D.akG,B.cW,F.mi,4,!0,!1,!0,0,null)
D.b2M=new C.tq(F.a0p,B.dW,B.cW,F.mi,3,!0,!1,!0,2,null)
D.b2N=new C.tq(F.tf,D.lS,B.c,F.mi,0,!1,!1,!0,0,null)
D.b2O=new C.tq(B.qM,B.aD,B.cW,B.bO,2,!0,!0,!1,2,B.dW)
D.b2P=new C.tq(B.qM,G.nD,B.ir,F.mi,5,!1,!1,!0,3,null)
D.hO5=new C.tq(B.qM,B.dW,B.cW,F.mi,0,!0,!1,!1,0,B.aD)
D.b2Q=new C.tq(F.H7,B.er,B.cW,B.bO,1,!1,!0,!1,1,null)
D.b2R=new C.tq(F.GC,B.au,B.aD,F.mi,4,!0,!1,!0,2,null)
D.hO7=new C.tq(F.tf,B.au,B.er,F.mi,3,!0,!1,!1,0,null)
D.hO9=new C.tq(B.qM,B.dU,B.cW,B.bO,1,!1,!0,!1,1,null)
D.hOa=new C.tq(F.GC,D.ajH,B.c,F.mi,5,!1,!1,!0,0,null)
D.hOP=new C.a17(null)
D.hYV=new C.agK(0,"still")
D.Yi=new C.agK(1,"walk")
D.b3A=new C.agK(2,"pound")
D.b3B=new C.agK(3,"drum")
D.hUp=new C.a2p(0,"greet")
D.b3C=new C.a2p(1,"teach")
D.aeL=new C.a2p(2,"ask")
D.hUq=new C.a2p(3,"feedback")
D.b3D=new C.a2p(4,"end")
D.Yp=new C.a2I(0,"intro")
D.Yq=new C.a2I(1,"asking")
D.BM=new C.a2I(2,"reacting")
D.aeW=new C.a2I(3,"driving")
D.aeX=new C.a2I(4,"arrived")
D.af4=new C.aMJ(0,"projects")
D.b42=new C.aMJ(1,"cashier")
D.hWv=new C.aMJ(2,"familyTree")})()};
(a=>{a["ObD71ihFH1ph/snG0fqQ5HbPy/0="]=a.current})($__dart_deferred_initializers__);