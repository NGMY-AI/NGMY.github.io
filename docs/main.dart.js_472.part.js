((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A9,S,A_,Aa,P,A0,T,M,Ab,L,A1,U,H,E,Ac,V,Ad,Ae,A2,Af,Ag,Ah,Ai,Q,Aj,Ak,N,A3,Al,A4,A5,A6,Am,W,A7,An,Ao,Ap,G,Aq,Ar,A8,As,At,Au,Av,X,O,F,Aw,I,Y,K,Ax,Z,R,Ay,C={
bHW(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bHW=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.wa(null,""),$async$bHW)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.Y(y.z)
t=A.nB(b1)
s=A.c2(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.du(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cY(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.V.au(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rv(t,a1,B.ig,"book",E.Hu),$async$bHW)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.S_(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.Y(l!=null&&A.Me(l)?y.k:y.y)
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a4r(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHW,v)},
aiY(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aiY=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.wa(null,""),$async$aiY)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.Y(y.z)
t=A.nB(b6)
s=x.S
r=A.cU(c1,0,A.dy(4,"count",s),A.U(c1).c)
q=H.a4a(new A.O(r,new C.fX6(),r.$ti.k("O<aj.E,n>")).aL(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fX5(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.V.au(b7,null)+"\nAllowed values: style one of "+B.d.aL(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aiY)
case 6:l=c5
k=H.S_(l==null?"":l)
if(k==null)throw A.Y("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.aqL(s,D.dNs,r.b(k.h(0,"cover"))?A.a0(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.V.au(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aiY)
case 10:l=c5
k=l==null?null:H.S_(l)
if(k==null)throw A.Y(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.v(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.v(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.cN(a8,d),a5=J.aQ(a2.a),a2=a2.$ti,a7=new A.jY(a5,a2.k("jY<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
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
p=A.cv(new A.ba(h,s),new C.fX7(),s.k("M.E"),p)
p=H.a4a(A.pd(p,3,A.a3(p).k("M.E")).aL(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cr<1>")
b4=A.B(new A.cr(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a4r(s,b9),$async$aiY)
case 13:b5=c5
for(s=J.a2(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aqL(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aiY,v)},
hQD(d,e,f){return A.ce(null,B.v.j(0.65),!1,null,new C.h6H(e,f),d,null,!0,!0,x.g2)},
aqL:function aqL(d,e,f){this.a=d
this.b=e
this.c=f},
fX6:function fX6(){},
fX5:function fX5(d){this.a=d},
fX7:function fX7(){},
h6H:function h6H(d,e){this.a=d
this.b=e},
bFC(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bFC=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aR(b1,new C.fJV())){u=null
w=1
break}t=B.d.cw(b1,new C.fJW())
s=$.T()
r=new A.oV(new A.oq())
q=A.v1(r,D.aU1)
p=A.L()
p.r=B.c.gp(0)
q.aE(D.aU1,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.ac
o.d=B.bG
o.e=B.dP
n=new C.fK0(t)
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
return A.b(r.n_().vI(520,160),$async$bFC)
case 4:w=3
return A.b(b3.ho(B.ho),$async$bFC)
case 3:b0=b3
u=b0==null?null:J.eU(B.dM.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFC,v)},
fUM(d){return C.iw0(d)},
iw0(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fUM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.blg()
n=d.x!=null&&d.A_(null).length===0
if(d.x!=null)t=n?D.B6:D.KB
else t=d.gVa()?D.KB:D.aOS
w=3
return A.b(C.bFC(d.ax),$async$fUM)
case 3:s=f
p.a=null
if(s!=null)p.a=A.apo(s)
r=A.a6b(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aOS}else{p.c=C.xz(q,!0)
p.b=n?D.B6:D.KB}r.a4Y(A.hht(new C.fUO(p,d,new C.fUP(),t,n,o),null,D.bKq,B.xT))
u=r.jI(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fUM,v)},
h11(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$h11=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fUM(d),$async$h11)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aw(q,0,40)
u=Ai.HH(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h11,v)},
fJV:function fJV(){},
fJW:function fJW(){},
fK0:function fK0(d){this.a=d},
fUP:function fUP(){},
fUO:function fUO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fUN:function fUN(){},
h79(d,e){var w=0,v=A.j(x.H)
var $async$h79=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,B.v.j(0.55),!0,null,new C.h7d(new A.cA(null,x.eF),e),d,null,!0,!0,x.H),$async$h79)
case 2:return A.h(null,v)}})
return A.i($async$h79,v)},
bIo(d,e,f,g){return C.iDO(d,e,f,g)},
iDO(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bIo=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cJ.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.T(D.fAh)
w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.h75(g,r,f),d,null,!0,!0,x.H),$async$bIo)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bIo,v)},
h7e(d,e){var w=0,v=A.j(x.H)
var $async$h7e=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,null,!0,null,new C.h7h(new A.cA(null,x.eF),e),d,null,!0,!0,x.H),$async$h7e)
case 2:return A.h(null,v)}})
return A.i($async$h7e,v)},
b1g:function b1g(d,e){this.c=d
this.a=e},
can:function can(){},
beF:function beF(d,e){this.b=d
this.a=e},
h7d:function h7d(d,e){this.a=d
this.b=e},
h7a:function h7a(d){this.a=d},
h7b:function h7b(d,e,f){this.a=d
this.b=e
this.c=f},
h7c:function h7c(d,e){this.a=d
this.b=e},
h75:function h75(d,e,f){this.a=d
this.b=e
this.c=f},
h73:function h73(d){this.a=d},
h74:function h74(d,e,f){this.a=d
this.b=e
this.c=f},
h7h:function h7h(d,e){this.a=d
this.b=e},
h7f:function h7f(d){this.a=d},
h7g:function h7g(d,e,f){this.a=d
this.b=e
this.c=f},
fOS(d,e){var w=0,v=A.j(x.y),u,t
var $async$fOS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3V(d),$async$fOS)
case 3:t=g
J.nf(t,new C.fOT(e))
u=A.ajF(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fOS,v)},
fOT:function fOT(d){this.a=d},
aqY:function aqY(d,e,f){this.c=d
this.d=e
this.a=f},
aFM:function aFM(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dUf:function dUf(d,e){this.a=d
this.b=e},
dU0:function dU0(d,e){this.a=d
this.b=e},
dU3:function dU3(d,e,f){this.a=d
this.b=e
this.c=f},
dU2:function dU2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dU1:function dU1(d,e){this.a=d
this.b=e},
dU4:function dU4(d,e){this.a=d
this.b=e},
dTZ:function dTZ(){},
dU_:function dU_(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dTY:function dTY(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dTJ:function dTJ(d){this.a=d},
dTK:function dTK(d,e,f){this.a=d
this.b=e
this.c=f},
dTL:function dTL(d,e){this.a=d
this.b=e},
dTI:function dTI(d){this.a=d},
dTQ:function dTQ(d,e){this.a=d
this.b=e},
dTH:function dTH(d){this.a=d},
dTR:function dTR(d,e,f){this.a=d
this.b=e
this.c=f},
dTS:function dTS(d,e,f){this.a=d
this.b=e
this.c=f},
dTG:function dTG(d,e){this.a=d
this.b=e},
dTT:function dTT(d,e,f){this.a=d
this.b=e
this.c=f},
dTF:function dTF(d,e){this.a=d
this.b=e},
dTU:function dTU(d,e){this.a=d
this.b=e},
dTE:function dTE(d){this.a=d},
dTV:function dTV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTC:function dTC(){},
dTw:function dTw(d){this.a=d},
dTx:function dTx(d){this.a=d},
dTD:function dTD(d,e){this.a=d
this.b=e},
dTW:function dTW(d,e){this.a=d
this.b=e},
dTB:function dTB(d){this.a=d},
dTX:function dTX(d){this.a=d},
dTA:function dTA(){},
dTM:function dTM(d,e){this.a=d
this.b=e},
dTz:function dTz(d){this.a=d},
dTN:function dTN(d,e,f){this.a=d
this.b=e
this.c=f},
dTy:function dTy(d,e){this.a=d
this.b=e},
dTv:function dTv(d,e){this.a=d
this.b=e},
dTO:function dTO(d){this.a=d},
dTP:function dTP(d,e,f){this.a=d
this.b=e
this.c=f},
dUi:function dUi(){},
dUj:function dUj(d,e){this.a=d
this.b=e},
dUg:function dUg(d){this.a=d},
dUh:function dUh(d){this.a=d},
dUc:function dUc(d,e){this.a=d
this.b=e},
dUd:function dUd(d){this.a=d},
dU5:function dU5(d,e,f){this.a=d
this.b=e
this.c=f},
dU6:function dU6(d,e,f){this.a=d
this.b=e
this.c=f},
dU7:function dU7(d,e,f){this.a=d
this.b=e
this.c=f},
dU8:function dU8(d,e,f){this.a=d
this.b=e
this.c=f},
dU9:function dU9(d,e,f){this.a=d
this.b=e
this.c=f},
dUa:function dUa(d,e,f){this.a=d
this.b=e
this.c=f},
dUb:function dUb(d,e,f){this.a=d
this.b=e
this.c=f},
dUk:function dUk(){},
dUl:function dUl(){},
dUm:function dUm(){},
dUn:function dUn(d){this.a=d},
dUe:function dUe(d,e){this.a=d
this.b=e},
hM4(d){return B.d.dr(D.a6d,new C.fPE(d),new C.fPF())},
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
fPE:function fPE(d){this.a=d},
fPF:function fPF(){},
amY:function amY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aXW:function aXW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Uy:function Uy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bij:function bij(){this.d=$
this.c=this.a=null},
dji:function dji(d,e){this.a=d
this.b=e},
djg:function djg(d,e){this.a=d
this.b=e},
djh:function djh(){},
djj:function djj(d,e){this.a=d
this.b=e},
hvO(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.be(J.k(u==null?"":u))
return new C.nI(t,w,v,u==null?new A.W(Date.now(),0,!1):u)},
M0(d,e){return C.iuD(d,e)},
iuD(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$M0=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$M0)
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
break}o=J.cN(p,x.f)
o=A.cv(o,new C.fSc(),o.$ti.k("M.E"),x.B)
n=A.a3(o).k("X<M.E>")
o=A.B(new A.X(o,new C.fSd(),n),n.k("M.E"))
B.d.b0(o,new C.fSe())
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
return A.i($async$M0,v)},
BH(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BH=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aB(),$async$BH)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.h5L(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.aB("String","ngmy_family_book_v1_"+s+"_"+e,B.V.au(r,null)),$async$BH)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BH,v)},
aU0(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aU0=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.M0(d,e),$async$aU0)
case 2:u=h
t=J.cI(u)
s=t.bl(u,new C.heq(f))
if(s===-1)t.ce(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BH(d,e,u),$async$aU0)
case 3:return A.h(null,v)}})
return A.i($async$aU0,v)},
bG6(d,e,f){var w=0,v=A.j(x.H),u
var $async$bG6=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.M0(d,e),$async$bG6)
case 2:u=h
J.nf(u,new C.fOK(f))
w=3
return A.b(C.BH(d,e,u),$async$bG6)
case 3:return A.h(null,v)}})
return A.i($async$bG6,v)},
bGm(d,e){return C.iuC(d,e)},
iuC(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bGm=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bGm)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.PK
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
if(D.EB.am(0,o.h(0,"foil")))j=A.cT(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.i.D(i==null?25:i,18,36)
h=B.d.q(D.a7V,o.h(0,"position"))?A.cT(o.h(0,"position")):"middle"
g=B.d.q(D.a7e,o.h(0,"frame"))?A.cT(o.h(0,"frame")):"double"
f=B.d.q(D.a7a,o.h(0,"texture"))?A.cT(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.dcv,o.h(0,"header"))?A.cT(o.h(0,"header")):"classic"
o=new C.IE(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.PK
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.PK
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bGm,v)},
Ta(d,e,f){return C.iDj(d,e,f)},
iDj(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Ta=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aB(),$async$Ta)
case 7:r=h
w=8
return A.b(r.aB("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.V.au(f.ak(),null)),$async$Ta)
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
return A.i($async$Ta,v)},
SB(d,e){return C.iuE(d,e)},
iuE(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$SB=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$SB)
case 7:r=g
q=r.ps("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.M0(d,e),$async$SB)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lE(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$SB)
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
return A.i($async$SB,v)},
aii(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aii=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SB(d,e),$async$aii)
case 3:s=g
r=J.a2(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.aB(),$async$aii)
case 5:w=4
return A.b(g.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aii)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aii,v)},
a4C(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a4C=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.SB(d,e),$async$a4C)
case 2:s=h
J.fQ(s,f)
w=3
return A.b(A.aB(),$async$a4C)
case 3:u=h
w=4
return A.b(u.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a4C)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.X(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4C)
case 5:w=6
return A.b(u.X(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4C)
case 6:return A.h(null,v)}})
return A.i($async$a4C,v)},
nI:function nI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fSc:function fSc(){},
fSd:function fSd(){},
fSe:function fSe(){},
h5L:function h5L(){},
heq:function heq(d){this.a=d},
fOK:function fOK(d){this.a=d},
IE:function IE(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bTL:function bTL(d){this.a=d},
iDD(d,e,f,g,h,i,j){return A.a7(d,!1).c8(A.e5(new C.h6l(j,i,f,e,h,g),!0,null,x.H))},
Sx(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Sx=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SB(h,g),$async$Sx)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.T(D.aWp)
u=!1
w=1
break}w=4
return A.b(C.hQD(d,f,e),$async$Sx)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aii(h,g),$async$Sx)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nI(""+(q+n),l,B.a.i(m.b),new A.W(Date.now(),0,!1)))}w=6
return A.b(C.BH(h,r,p),$async$Sx)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Ta(h,r,new C.IE("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Sx)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Sx,v)},
h6l:function h6l(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a0d:function a0d(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCK:function aCK(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
djY:function djY(d){this.a=d},
djX:function djX(d,e){this.a=d
this.b=e},
djM:function djM(d,e){this.a=d
this.b=e},
djJ:function djJ(d,e){this.a=d
this.b=e},
djk:function djk(d){this.a=d},
djl:function djl(d,e){this.a=d
this.b=e},
djN:function djN(d){this.a=d},
djt:function djt(d){this.a=d},
djr:function djr(d){this.a=d},
djs:function djs(d){this.a=d},
dju:function dju(d){this.a=d},
djK:function djK(d){this.a=d},
djL:function djL(){},
djp:function djp(d){this.a=d},
djq:function djq(d,e){this.a=d
this.b=e},
djv:function djv(d){this.a=d},
djw:function djw(d,e){this.a=d
this.b=e},
djW:function djW(d){this.a=d},
djV:function djV(d,e){this.a=d
this.b=e},
djU:function djU(d){this.a=d},
djG:function djG(d){this.a=d},
djF:function djF(d){this.a=d},
djH:function djH(d){this.a=d},
djm:function djm(d,e){this.a=d
this.b=e},
djI:function djI(d,e){this.a=d
this.b=e},
djz:function djz(d){this.a=d},
djA:function djA(d){this.a=d},
djy:function djy(){},
djB:function djB(d){this.a=d},
djC:function djC(d){this.a=d},
djD:function djD(d,e){this.a=d
this.b=e},
djE:function djE(d,e,f){this.a=d
this.b=e
this.c=f},
djx:function djx(d,e){this.a=d
this.b=e},
djP:function djP(d){this.a=d},
djO:function djO(){},
djQ:function djQ(d){this.a=d},
djR:function djR(d){this.a=d},
djS:function djS(d){this.a=d},
djT:function djT(d,e){this.a=d
this.b=e},
djn:function djn(d){this.a=d},
djo:function djo(d){this.a=d},
a0h:function a0h(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biI:function biI(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dlK:function dlK(d){this.a=d},
dlL:function dlL(d){this.a=d},
dlJ:function dlJ(d){this.a=d},
dlM:function dlM(d){this.a=d},
dlI:function dlI(d){this.a=d},
dlN:function dlN(d){this.a=d},
dlH:function dlH(d){this.a=d},
dlO:function dlO(d,e){this.a=d
this.b=e},
dlG:function dlG(d,e){this.a=d
this.b=e},
dlP:function dlP(d,e){this.a=d
this.b=e},
a0f:function a0f(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
agJ:function agJ(d,e,f){this.a=d
this.b=e
this.c=f},
aCN:function aCN(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dkc:function dkc(d,e){this.a=d
this.b=e},
dkb:function dkb(d,e){this.a=d
this.b=e},
dkg:function dkg(d){this.a=d},
dkf:function dkf(d,e){this.a=d
this.b=e},
dkd:function dkd(d){this.a=d},
dke:function dke(d){this.a=d},
dkh:function dkh(d){this.a=d},
dki:function dki(d){this.a=d},
dka:function dka(d,e){this.a=d
this.b=e},
dk9:function dk9(d,e){this.a=d
this.b=e},
L2:function L2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_s:function a_s(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cS1:function cS1(d){this.a=d},
cS2:function cS2(){},
cS3:function cS3(d){this.a=d},
bfT:function bfT(d,e,f){this.b=d
this.c=e
this.a=f},
bfK:function bfK(d,e){this.b=d
this.a=e},
v6:function v6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_O:function a_O(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfR:function bfR(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
db2:function db2(d,e,f){this.a=d
this.b=e
this.c=f},
db1:function db1(d,e){this.a=d
this.b=e},
dbr:function dbr(d){this.a=d},
dbe:function dbe(){},
dbs:function dbs(d){this.a=d},
dbd:function dbd(){},
dbt:function dbt(d,e){this.a=d
this.b=e},
dbc:function dbc(d,e){this.a=d
this.b=e},
dbu:function dbu(d,e){this.a=d
this.b=e},
dbb:function dbb(d,e){this.a=d
this.b=e},
dbv:function dbv(d){this.a=d},
dba:function dba(){},
dbw:function dbw(d,e){this.a=d
this.b=e},
db9:function db9(d,e){this.a=d
this.b=e},
dbx:function dbx(d){this.a=d},
dbm:function dbm(d,e){this.a=d
this.b=e},
dby:function dby(d){this.a=d},
dbz:function dbz(d){this.a=d},
dbB:function dbB(d){this.a=d},
dbC:function dbC(d){this.a=d},
dbl:function dbl(d,e){this.a=d
this.b=e},
dbD:function dbD(d,e){this.a=d
this.b=e},
aJS:function aJS(d){this.a=d},
blg:function blg(d){this.a=d},
be_:function be_(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
amZ:function amZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a2u:function a2u(d,e){this.a=d
this.b=e},
an_:function an_(d,e,f,g,h,i){var _=this
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
bTV:function bTV(d){this.a=d},
bTP:function bTP(d){this.a=d},
bTO:function bTO(d,e){this.a=d
this.b=e},
bTY:function bTY(d){this.a=d},
bTQ:function bTQ(d){this.a=d},
bTR:function bTR(d){this.a=d},
bTU:function bTU(d){this.a=d},
bTT:function bTT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTW:function bTW(d,e){this.a=d
this.b=e},
bTX:function bTX(){},
bTS:function bTS(d){this.a=d},
bTM:function bTM(d,e){this.a=d
this.b=e},
bTN:function bTN(d){this.a=d},
bqT:function bqT(d,e){this.b=d
this.a=e},
aCL:function aCL(){},
iQ(d,e){var w
$.T()
w=A.L()
w.b=B.ac
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dP
return w},
bFE(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bs(j.save())
j.translate(e.a,e.b)
d.nK(0,a0?-f:f,f)
w=A.bY(B.hE,8,36)
v=B.v.j(0.3)
u=$.T()
t=A.L()
t.r=v.gp(0)
d.c1(w,t)
w=a1===D.Yp
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.v,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eBr,new A.r(-4+v,-2),C.iQ(q,5))
d.ah(D.ez4,new A.r(4-v,-2),C.iQ(q,5))}else{t=A.bY(B.Ks,14,40)
p=A.L()
p.r=v.gp(0)
d.c1(t,p)}v=u.r
u=x.v
o=new A.aH(v,B.ak,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.cj(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.cj(15,-40,11,t))
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
break}if(a1===D.b3H){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iQ(F.GG,3.4))
d.ah(D.eBI,new A.r(9,n),C.iQ(q,4))
d.ah(D.ezv,new A.r(10,n),C.iQ(q,4))}else if(a1===D.b3I){d.ah(D.eAy,new A.r(-8,-26-Math.max(0,w)*6),C.iQ(q,4))
d.ah(D.exx,new A.r(8,-26-Math.max(0,-w)*6),C.iQ(q,4))}else{w=s*3
v=-38-r
d.ah(D.eAC,new A.r(-12-w,v),C.iQ(q,4))
d.ah(D.aNS,new A.r(12+w,v),C.iQ(q,4))}w=A.L()
w.r=q.gp(0)
d.aE(D.fn5,w)
m=new A.r(0,-77-r)
w=A.bY(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c1(w,v)
w=h.y
if(w!=null){v=A.bY(m.a7(0,K.w3),15,24)
u=A.L()
u.r=w.gp(0)
d.c1(v,u)
u=m.a7(0,D.exr)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bY(m.a7(0,B.ub),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a7(0,D.eBG),m.a7(0,D.eAw),C.iQ(v,2.2))
d.ah(m.a7(0,D.ezu),m.a7(0,D.exo),C.iQ(v,2.2))}if(w===4){w=m.a7(0,D.eBK)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a7(0,D.ezw)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a7(0,D.eAl)
v=A.L()
v.r=B.it.gp(0)
d.O(w,0.9,v)
v=m.a7(0,D.eAa)
w=A.L()
w.r=B.it.gp(0)
d.O(v,0.9,w)
if(i){l=m.a7(0,K.aa3)
w=A.bY(l,21,22)
v=A.L()
v.r=D.lR.gp(0)
d.c1(w,v)
v=A.bY(l.a7(0,K.aNP),5,12)
w=A.L()
w.r=D.bj7.gp(0)
d.c1(v,w)
d.ah(l.a7(0,D.eBC),l.a7(0,K.aOc),C.iQ(B.d_,1.4))
d.ah(D.aNS,new A.r(15,-88-r),C.iQ(q,3.6))}j.restore()},
hKG(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bs(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bY(B.dS,18,96)
u=B.v.j(0.28)
$.T()
t=A.L()
t.r=u.gp(0)
d.c1(v,t)
t=A.bY(B.dS,11,70)
v=B.v.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c1(t,u)
d.lz(D.aU5,A.L())
C.ij2(d,g,h,i,j)
s=(k==null?D.aa8:k).a-w>=0?1:-1
w=A.L()
w.a=B.MP
w.san(A.jN(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.aka.j(0.5),D.aka.j(0.12),D.bqN.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aE(D.aU5,w)
r.restore()
r.restore()},
ij2(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.v,0.28)
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
s=A.bw(D.fn6,B.ug)
p=$.T()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bw(D.fn1,B.hT)
s=A.ap(v,B.v,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bw(D.fnf,B.hT)
o=A.ap(v,B.v,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fn8,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.flS,s)
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
l.E(new A.cj(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.cj(m+3,-62,m-2,-58))
l.E(new A.cj(0,-70,k,-58))
l.E(new A.bA())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.bs(s.save())
a1.mz(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.djV[j]
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ao(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.T()
f=new A.ar(B.T,B.Q,B.W,B.X,B.U)
f.r=i.gp(0)
a1.O(new A.r(g,h),3.6,f)
f=new A.ar(B.T,B.Q,B.W,B.X,B.U)
f.r=u.gp(0)
a1.O(new A.r(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.eB4,D.eyc,C.iQ(a2.c.j(0.9),3))}a1.ah(D.eBD,D.eAE,C.iQ(B.v.j(0.18),1.6))
a1.ah(D.exw,K.aNU,C.iQ(B.v.j(0.18),1.6))
u=B.v.j(0.12)
k=$.T()
i=A.L()
i.r=u.gp(0)
a1.aE(D.flO,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aE(D.fm1,i)
n=new A.aH(k.r,B.ak,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.cj(0,-57,9,-66))
n.E(new A.cj(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fma,0.1,2.941592653589793,!1,C.iQ(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.aad
n=25*q
k=23*q
i=9*q
C.hGv(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.F2:o
C.hGv(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eyX,D.eyT,C.iQ(D.al9,4))
a1.ah(D.eyV,D.eyR,C.iQ(D.H6.j(0.7),1.4))
u=A.L()
u.r=B.d_.gp(0)
a1.O(D.eyU,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bs(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jr(0,a3.f)
a1.bV(0,r)
C.iiZ(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hGv(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aI(0,e),r=s.gcL(),q=r===0?B.hE:s.f_(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a7(0,q.aO(0,n)).a7(0,v.aO(0,m))
t=e.a7(0,q.aO(0,p))
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
w=t.a7(0,new A.r(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
iiZ(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bY(B.w2,40,38)
$.T()
v=A.L()
v.r=c0.gp(0)
c2.c1(w,v)}if(c1===4){$.T()
w=A.L()
w.r=c0.gp(0)
c2.O(D.eAM,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.exN,9.5,w)}w=A.bY(D.eBZ,10,6)
v=$.T()
u=A.L()
u.r=c8.gp(0)
c2.c1(w,u)
u=A.bY(D.eAi,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c1(u,w)
v=v.r
w=x.v
t=new A.aH(v,B.ak,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.i3(13,-20,17,-9,16,2))
t.E(new A.i3(15,13,8,20,0,20))
t.E(new A.i3(-8,20,-15,13,-16,2))
t.E(new A.i3(-17,-9,-13,-20,0,-20))
t.E(new A.bA())
u=A.L()
u.san(A.ws(D.eBt,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iQ(c8.j(0.5),0.8)
c2.cQ(D.fnh,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.flV,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eAJ,K.aOl,s)
c2.ah(D.exJ,D.exA,s)
c2.cQ(D.fm9,2.2,1.4,!1,s)
c2.cQ(D.flT,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fmo,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aH(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.cj(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.cj(0,-12,-13,-6))
p.E(new A.bA())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.eAA,D.exB,C.iQ(G.nH,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.eAP,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.exO,3,o)
o=new A.aH(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.cj(-12,22,0,26))
o.E(new A.cj(12,22,13,6))
o.E(new A.cj(8,13,0,12))
o.E(new A.cj(-8,13,-13,6))
o.E(new A.bA())
p=A.L()
p.r=B.hX.gp(0)
c2.af(o,p)
p=new A.aH(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.cj(0,6,7,8))
p.E(new A.cj(0,10.5,-7,8))
o=A.L()
o.r=B.bO.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aH(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.cj(-20,-27,0,-29))
p.E(new A.cj(20,-27,17,-4))
p.E(new A.cj(0,-14,-17,-4))
p.E(new A.bA())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.v,0.3)
o.toString
c2.cQ(D.fmv,3.4,2.5,!1,C.iQ(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fmh,3.6,2.2,!1,C.iQ(o,1.2))
o=new A.aH(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.cj(27,-34,25,-19))
o.E(new A.cj(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aH(v,B.ak,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.cj(24,-12,27,-26))
n.E(new A.cj(18,-22,11,-22))
o=A.ap(m,B.v,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.O(D.exC,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fms,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dP
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aEz[l]
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=4.5
o.r=c0.gp(0)
o.d=B.bG
o.e=B.dP
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fmr,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.aa3,K.aa2,C.iQ(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.flW,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bY(D.eBM,5,8)
o=D.aho.j(i)
n=A.L()
n.r=o.gp(0)
c2.c1(p,n)
n=A.bY(D.eAt,5,8)
p=D.aho.j(i)
o=A.L()
o.r=p.gp(0)
c2.c1(n,o)
h=c4.e*2.4
o=new A.aH(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.cj(h-3.4,6,h-2.6,7.4))
o.E(new A.cj(h,8.8,h+2.6,7.4))
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
a6=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a6.r=B.c.j(0.96).gp(0)
c2.c1(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bs(d.save())
a6=A.a([],w)
a4=new A.aH(v,B.ak,b9,b9,a6)
a6.push(new A.jH(A.bY(new A.r(a5,-3),a3,7)))
a4.ac()
a3=a4.e
if(a3==null)a3=a4.e=new A.Es(a4.glc().a.snapshot())
d.clipPath(a3.a,$.mP(),!0)
a3=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a3.r=D.bn2.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a3.r=B.v.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a_B:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a9.b=B.ac
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bG
a9.e=B.dP
a3=p?0.8:0
c2.cQ(A.bY(new A.r(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dT
else{b1=A.ap(c0,B.v,0.2)
b1.toString}b2=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b2.b=B.ac
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bG
b2.e=B.dP
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.bxz
else{u=A.ap(c8,D.bqP,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.i.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aH(v,B.ak,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.cj(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.cj(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bA())
v=A.L()
v.r=D.bq6.gp(0)
c2.af(b8,v)
J.bs(d.save())
c2.mz(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aE(new A.a4(w,11,w+b6*2,13.2),u)
u=A.bY(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bxE.gp(0)
c2.c1(u,w)
d.restore()
c2.af(b8,C.iQ(b4,1.1))}else{u=new A.aH(v,B.ak,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.cj(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iQ(b4,1.5))
if(b5>0.6){w=new A.aH(v,B.ak,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.cj(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.cj(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fm8,-1.2,2.2,!1,C.iQ(c8.j(0.5),0.8))
c2.cQ(D.flY,2.141592653589793,2.2,!1,C.iQ(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.eAb,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.eA8,1.7,w)}},
iov(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.T(),f=new A.oV(new A.oq()),e=A.v1(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jN(B.J,new A.r(0,a0*0.46),D.dgp,D.d74,B.x,h))
e.aE(new A.a4(0,0,0+d,0+a0),a2)
a2=e.c
J.bs(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e2()
w.cT(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bs(a2.save())
a2.translate(200,120)
e.jr(0,-0.5)
d=A.L()
a0=x.O
d.san(A.ws(B.J,230,A.a([D.blH,B.L],a0),h,B.x,h,h,0))
e.c1(D.fmD,d)
a2.restore()
d=A.L()
d.san(A.ws(D.aab,58,A.a([D.bp7,B.L],a0),h,B.x,h,h,0))
e.O(D.aab,58,d)
d=A.L()
d.r=D.bkp.gp(0)
e.O(D.aab,24,d)
d=A.L()
d.r=D.a01.gp(0)
e.O(D.eyw,5,d)
d=A.L()
d.r=D.a01.gp(0)
e.O(D.eyA,3.4,d)
d=A.L()
d.r=D.a01.gp(0)
e.O(D.eyz,2.4,d)
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
g=[D.biW,D.bkY,D.br8][s]
u=$.T()
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cB6[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
u.b=B.ac
u.c=2.4
u.r=D.a0n.gp(0)
u.d=B.bG
u.e=B.dP
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bY(new A.r(g,k-27),11,46)
u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
u.r=D.a0n.gp(0)
e.c1(g,u)
d=A.bY(new A.r(o-12,d),8,24)
u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
u.r=D.a0n.gp(0)
e.c1(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
u.r=D.bks.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jN(D.ex5,D.ex8,D.d9f,B.xH,B.x,h))
e.aE(new A.a4(-200,412,650,1300),g)
j=new A.e2()
j.cT(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bY(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h9()?B.c:B.v
d=new A.ar(B.T,B.Q,B.W,B.X,B.U)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c1(u,d)}J.bs(a2.save())
a2.translate(225,590)
e.nK(0,1,0.34)
g=A.L()
g.san(A.ws(B.J,250,A.a([D.bs8,D.bli,D.bu5],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.ajR,D.bjX,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.T()
a0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a0.b=B.ac
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dP
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.ihd(e)
for(l=0;l<3;++l)C.iks(e,D.aCm[l])
C.ikh(e,D.eyq)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.T()
a0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a0.b=B.ac
a0.c=2.4
a0.r=D.a0j.gp(0)
a0.d=B.bG
a0.e=B.dP
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.exy,D.exR,C.iQ(D.bkG,1.6))
a2.restore()
return f.n_()},
ihd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.T().r,g=x.v,f=new A.aH(h,B.ak,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.i3(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.i3(416,382,432,422,428,462))
f.E(new A.bA())
w=A.L()
w.san(A.jN(new A.r(354,0),new A.r(430,0),D.dFR,B.m6,B.x,i))
d.af(f,w)
v=new A.e2()
v.cT(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.v.j(0.18)
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.b=B.ac
p.c=1.1
p.r=q.gp(0)
p.d=B.bG
p.e=B.dP
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dlq[o]
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
r=new A.cj(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.aj(p)
k.ac()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.b=B.ac
r.c=8
r.r=D.aia.gp(0)
r.d=B.bG
r.e=B.dP
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
l.r=A.ap(D.bky,D.br6,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.b=B.ac
r.c=1.2
r.r=D.a0j.gp(0)
r.d=B.bG
r.e=B.dP
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bY(new A.r(w,q+28),13,7)
w=new A.ar(B.T,B.Q,B.W,B.X,B.U)
w.r=D.bsv.gp(0)
d.c1(q,w)}},
iks(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bY(new A.r(a5,a6+2),a9,a7*2.8),b1=B.v.j(0.3),b2=$.T(),b3=A.L()
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
w.E(new A.cj(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bA())
u=A.L()
u.san(A.jN(new A.r(b0,0),new A.r(v,0),D.dlx,B.m6,B.x,a4))
b4.af(w,u)
t=new A.e2()
t.cT(B.o.S(a5*7))
v=b4.c
J.bs(v.save())
b4.mz(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.v.j(0.14)
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.b=B.ac
n.c=1
n.r=o.gp(0)
n.d=B.bG
n.e=B.dP
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ajN.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aE(new A.a4(b0,u,b0+p,u+7),n)
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
j=new A.ar(B.T,B.Q,B.W,B.X,B.U)
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
f.ac()}b4.af(f,C.iQ(D.ajN.j(0.7),1.6))
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
b2.E(new A.cj(p,a6-a8*0.82,o,j))
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
e=new A.aH(b0,B.ak,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.cj(a5-a9,n,a5,u))
e.E(new A.cj(a5+a9,n,p,j))
e.E(new A.cj(a5,b1+a7*0.34,o,j))
e.E(new A.bA())
b1=A.L()
n=a7*1.4
b1.san(A.jN(new A.r(a5-n,0),new A.r(a5+n,0),D.dpd,B.m6,B.x,a4))
b4.af(e,b1)
J.bs(v.save())
b4.mz(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h9()?B.v:D.bk5).j(0.16)
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
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
n=new A.cj(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.aj(b1)
p.ac()
b1=B.v.j(0.22)
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
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
v=new A.ar(B.T,B.Q,B.W,B.X,B.U)
v.b=B.ac
v.c=1.1
v.r=D.brA.gp(0)
v.d=B.bG
v.e=B.dP
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aH(b0,B.ak,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bA())
b0=A.L()
b0.r=D.bnx.gp(0)
b4.af(a9,b0)},
ikh(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aEw[s]
$.T()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.b=B.ac
q.c=3
q.r=D.a0j.gp(0)
q.d=B.bG
q.e=B.dP
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bY(e.a7(0,K.aNO),24,36)
t=$.T()
r=A.L()
r.r=D.bwL.gp(0)
d.c1(u,r)
t=new A.aH(t.r,B.ak,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.cj(w,v-24,r,u))
t.E(new A.bA())
u=A.L()
u.r=D.aiS.gp(0)
d.af(t,u)},
ijE(d){switch(B.o.F(d,8)){case 0:return D.b2X
case 1:return D.b2V
case 2:return D.b2U
case 3:return D.b2T
case 4:return D.b2W
case 5:return D.b2Y
case 6:return D.hOk
default:return D.hOj}},
T8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bqU()
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
w.as=k==null?D.F2:k
C.hKG(d,e,p,C.ijE(m),w,s,m,l)},
hMa(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bVz:function bVz(){var _=this
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
tp:function tp(d,e,f,g,h,i,j,k,l,m){var _=this
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
bqU:function bqU(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
anh:function anh(){this.b=this.a=null},
aY0:function aY0(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bVr:function bVr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVs:function bVs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVt:function bVt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVu:function bVu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVv:function bVv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVw:function bVw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVx:function bVx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVy:function bVy(){},
bVq:function bVq(d){this.a=d},
agS:function agS(d,e){this.a=d
this.b=e},
aeN:function aeN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
No(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bUa(s)
s.bDp(d)
return s},
Hk(d,e,f,g,h,i,j){var w,v=A.U(g).k("X<1>")
v=A.d4(new A.X(g,new C.fCA(f),v),v.k("M.E"))
w=A.B(v,A.a3(v).k("ch.E"))
B.d.dY(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cU(w,0,A.dy(3,"count",x.S),A.U(w).c))
B.d.dY(v,d)
return new C.lK(e,v,B.d.cd(v,f),h,i,"tree",j)},
iFg(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.heg(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.js(c4,c0)
t=A.B(c4,A.a3(c4).k("ch.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.js(c4,c0)
r=A.B(c4,A.a3(c4).k("ch.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.js(c4,c0)
q=A.B(c4,A.a3(c4).k("ch.E"))
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
f=A.B(new A.X(t,new C.hei(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Hk(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.X(w,new C.hej(i,m),p),o)
B.d.dY(d,c6)
c2.$2(b4,new C.lK("True or false: "+h+" is the "+g+" of "+l+".",A6.Ti,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lK("True or false: "+B.a.i(B.d.gG(d).b)+" is the "+g+" of "+l+".",A6.Ti,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Gw(m)
h=a0.length
if(h!==0){a1=a0[c6.av(h)]
h=B.a.i(a1.b)
f=A.B(new A.X(t,new C.hek(l,a0,c5),v),s)
e=a1.c
if(e===D.xc)e="son"
else e=e===D.oU?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Hk(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eA([h+1,h+2,Math.max(0,h-1)],n)
a5.X(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mI(a5,a5.r,f.k("mI<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.v(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Hk(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gG(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iO<1>"),a3=new A.iO(a0,1,b3,a2),a3.nb(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gJ(0),a2.k("bQ<aj.E>")),a2=a2.k("aj.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Hk(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gG(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gG(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.asr(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.X(t,new C.hel(l),v),s)
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
j=A.B(new A.X(t,new C.hem(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.xc
if(e)a2=b7
else a2=f===D.oU?b8:b9
if(e)f=b7
else f=f===D.oU?b8:b9
c2.$2("grand",C.Hk(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aOh(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.av(k)].b)
j=A.B(new A.X(t,new C.hen(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Hk(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cU6)
h=l+" was born in "+k
c2.$2("place",C.Hk(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.dam)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Hk(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Hk(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.je(b1,b3,b3)
c2.$2("year",C.Hk(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bGi(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.No(d),l=new A.e2()
l.cT(f)
w=C.iFg(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.htR(v.d,l)
v=A.a3(w).k("cr<1>")
u=A.B(new A.cr(w,v),v.k("M.E"))
B.d.dY(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aR(u,new C.fQh(n,w))))break
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
if(v<e){v=A.B(D.aBn,x.df)
B.d.dY(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hKN(o,l))}}else if(!g&&v>3){o=C.hKN(D.aBn[l.av(14)],l)
t[t.length-1-l.av(3)]=o}return t},
hKN(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.dY(w,e)
return new C.lK(d.a,w,B.d.cd(w,v),d.d,d.e,d.f,d.r)},
hQc(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.No(a2),a1=new A.e2()
a1.cT(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Gw(q).length>=2)u.push(q)}B.d.dY(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Gw(n)
l=A.U(m)
k=new A.iO(m,0,5,l.k("iO<1>"))
k.nb(m,0,5,l.c)
j=k.df(0)
if(new A.O(j,new C.h4F(),A.U(j).k("O<1,G>")).fD(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aTL(a0,j[i]))
w.push(new C.avn("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c7(e.c_(0,a0.anA(q),new C.h4G()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cr<1>")
d=A.B(new A.cr(e,t),t.k("M.E"))
B.d.fd(d)
v=A.a([],v)
for(u=A.cU(d,0,A.dy(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bQ(u,u.gJ(0),t.k("bQ<aj.E>")),t=t.k("aj.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cI(s)
m.dY(s,a1)
v.push(m.gG(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aTL(a0,v[r]))
w.push(new C.avn("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aSb(d){return B.d.ap2(D.aDT,new C.fM5(d))},
iv7(d){return A.nL(new A.X(D.aDT,new C.fT8(d),x.av))},
bUZ(d){return C.i_5(d)},
i_5(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bUZ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bUZ)
case 7:r=f
q=B.a.i(d)
q=A.eu(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bUZ,v)},
C1(d,e){return C.i_2(d,e)},
i_2(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$C1=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$C1)
case 7:r=g
p=B.a.i(d)
o=A.eu(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aB("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$C1)
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
return A.i($async$C1,v)},
bUY(d,e,f){return C.i_3(d,e,f)},
i_3(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bUY=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bUY)
case 7:r=h
q=B.a.i(d)
q=A.eu(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bUY,v)},
C2(d,e,f,g){return C.i_4(d,e,f,g)},
i_4(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$C2=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$C2)
case 7:r=i
p=B.a.i(d)
o=A.eu(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aB("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$C2)
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
return A.i($async$C2,v)},
bIC(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
hgm(d,e,f,g){return new C.alQ(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hY6(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aQ(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.bP)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cU(w,0,A.dy(4,"count",x.S),u).df(0)
B.d.u(w,A.c2(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.i.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.i.M(u)
return C.hgm(w,v,B.o.D(u==null?20:u,5,60),t)},
hv1(d){var w,v,u,t,s,r,q=J.a2(d),p=q.h(d,"id")
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
if(u.b(r))v.push(C.hY6(A.a0(r,t,s)))}return new C.N6(p,w,v)},
hp1(d){var w,v=A.a([],x.c)
for(w=J.aQ(d.z);w.C();)v.push(C.hv1(w.gP(w)))
return v},
aTL(d,e){var w=e.c===D.oU
if(d.anA(e)===0&&d.Gw(e).length!==0)return w?0:1
if(d.Gw(e).length!==0||d.asr(e)!=null)return w?2:3
return w?4:5},
hRh(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.No(a4),a3=new A.e2()
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
g=a2.asr(m)
f=a2.aOh(m)
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
B.d.b0(l,new C.heH())
d=B.a.i(m.b)
a0=A.B(new A.X(s,new C.heI(d),o),n)
B.d.dY(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iO(a0,0,3,i.k("iO<1>"))
a1.nb(a0,0,3,i.c)
B.d.u(k,a1)
B.d.dY(k,a3)
a1=C.aTL(a2,m)
i=new A.iO(l,0,4,p)
i.nb(l,0,4,r)
w.push(new C.bc9(d,a1,i.df(0),k))
if(w.length>=5)break}return w},
hI6(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.Y(d,"My ")?1:0},
hQn(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.No(a4),a3=new A.e2()
a3.cT(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Gw(q).length>=2)u.push(q)}B.d.dY(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Gw(l)
j=A.U(k)
i=new A.iO(k,0,4,j.k("iO<1>"))
i.nb(k,0,4,j.c)
h=i.df(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aR(h,new C.h5h(q))&&q.d!==j)i.push(q)}B.d.dY(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iO(i,0,k,m)
j.nb(i,0,k,n)
f=j.df(0)
j=B.a.i(l.b)
k=C.aTL(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aTL(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aTL(a2,f[g]))
w.push(new C.aaR(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lK:function lK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bUa:function bUa(d){this.b=d
this.c=$},
bUb:function bUb(){},
bUc:function bUc(d){this.a=d},
fCA:function fCA(d){this.a=d},
heg:function heg(d){this.a=d},
heh:function heh(){},
hei:function hei(d){this.a=d},
hej:function hej(d,e){this.a=d
this.b=e},
hek:function hek(d,e,f){this.a=d
this.b=e
this.c=f},
hef:function hef(d,e){this.a=d
this.b=e},
hel:function hel(d){this.a=d},
hem:function hem(d){this.a=d},
hen:function hen(d,e,f){this.a=d
this.b=e
this.c=f},
hee:function hee(d,e){this.a=d
this.b=e},
fQh:function fQh(d,e){this.a=d
this.b=e},
avn:function avn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h4F:function h4F(){},
h4G:function h4G(){},
zQ:function zQ(d,e,f){this.a=d
this.b=e
this.c=f},
fM5:function fM5(d){this.a=d},
fT8:function fT8(d){this.a=d},
alQ:function alQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bOX:function bOX(){},
N6:function N6(d,e,f){this.a=d
this.b=e
this.c=f},
bc9:function bc9(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
heH:function heH(){},
heI:function heI(d){this.a=d},
aaR:function aaR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h5h:function h5h(d){this.a=d},
bjy:function bjy(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
agQ:function agQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
al8:function al8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
al9:function al9(d,e,f,g,h){var _=this
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
bN5:function bN5(d){this.a=d},
bN0:function bN0(){},
bN6:function bN6(){},
bMZ:function bMZ(){},
bN_:function bN_(){},
bN4:function bN4(d){this.a=d},
bN1:function bN1(d,e){this.a=d
this.b=e},
bN3:function bN3(d,e){this.a=d
this.b=e},
bN2:function bN2(d,e){this.a=d
this.b=e},
bMY:function bMY(d){this.a=d},
beH:function beH(d,e){this.b=d
this.a=e},
Rb:function Rb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCJ:function aCJ(d,e,f){this.b=d
this.c=e
this.a=f},
aB9:function aB9(d,e,f){this.a=d
this.b=e
this.c=f},
avZ:function avZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aw_:function aw_(d,e,f){var _=this
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
ct1:function ct1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ct2:function ct2(d){this.a=d},
ct0:function ct0(d){this.a=d},
ct3:function ct3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ct4:function ct4(){},
ct5:function ct5(d,e){this.a=d
this.b=e},
ct6:function ct6(){},
ct7:function ct7(d){this.a=d},
csY:function csY(d){this.a=d},
csZ:function csZ(d,e){this.a=d
this.b=e},
ct_:function ct_(d,e,f){this.a=d
this.b=e
this.c=f},
csT:function csT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csV:function csV(d,e){this.a=d
this.b=e},
csW:function csW(d,e){this.a=d
this.b=e},
csU:function csU(d,e){this.a=d
this.b=e},
csS:function csS(){},
csX:function csX(){},
be8:function be8(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cT5:function cT5(){},
azW:function azW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azX:function azX(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cHZ:function cHZ(d){this.a=d},
cHY:function cHY(d){this.a=d},
cI6:function cI6(d,e){this.a=d
this.b=e},
cI7:function cI7(d,e){this.a=d
this.b=e},
cI8:function cI8(d){this.a=d},
cI5:function cI5(d){this.a=d},
cI9:function cI9(d){this.a=d},
cIa:function cIa(d,e){this.a=d
this.b=e},
cIb:function cIb(){},
cIc:function cIc(d){this.a=d},
cI0:function cI0(d){this.a=d},
cI1:function cI1(d,e){this.a=d
this.b=e},
cI_:function cI_(d,e){this.a=d
this.b=e},
cI2:function cI2(){},
cI3:function cI3(){},
cI4:function cI4(d,e){this.a=d
this.b=e},
aAU:function aAU(){},
aIg:function aIg(){},
hmD(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.btg((w-450*u)/2,(v-900*u)/2,u)},
agE:function agE(){},
feK:function feK(d){this.a=d},
aM6:function aM6(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fp6:function fp6(d){this.a=d},
an7:function an7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
an8:function an8(d,e,f,g,h,i,j){var _=this
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
bUX:function bUX(d){this.a=d},
bUW:function bUW(){},
bUU:function bUU(d){this.a=d},
bUS:function bUS(){},
bUT:function bUT(d){this.a=d},
bUP:function bUP(d,e){this.a=d
this.b=e},
bUQ:function bUQ(){},
bUR:function bUR(d){this.a=d},
bUV:function bUV(d,e){this.a=d
this.b=e},
bUO:function bUO(d){this.a=d},
bv_:function bv_(d,e){this.b=d
this.a=e},
feL:function feL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
feM:function feM(d,e,f){this.a=d
this.b=e
this.c=f},
feN:function feN(d,e,f){this.a=d
this.b=e
this.c=f},
feO:function feO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
feP:function feP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
feQ:function feQ(){},
an5:function an5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
an6:function an6(d,e,f,g,h,i,j){var _=this
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
bUA:function bUA(){},
bUL:function bUL(d,e){this.a=d
this.b=e},
bUM:function bUM(d){this.a=d},
bUN:function bUN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUH:function bUH(){},
bUG:function bUG(d,e){this.a=d
this.b=e},
bUI:function bUI(d,e){this.a=d
this.b=e},
bUJ:function bUJ(){},
bUK:function bUK(d){this.a=d},
bUC:function bUC(d){this.a=d},
bUD:function bUD(d){this.a=d},
bUE:function bUE(d){this.a=d},
bUB:function bUB(d,e){this.a=d
this.b=e},
bUF:function bUF(d){this.a=d},
blo:function blo(d,e){this.b=d
this.a=e},
dvb:function dvb(){},
a2N:function a2N(d,e){this.a=d
this.b=e},
an1:function an1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
an2:function an2(d,e,f,g,h,i){var _=this
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
bUm:function bUm(d){this.a=d},
bUl:function bUl(){},
bUk:function bUk(){},
bUe:function bUe(){},
bUf:function bUf(){},
bUj:function bUj(d,e,f){this.a=d
this.b=e
this.c=f},
bUi:function bUi(d){this.a=d},
bUg:function bUg(d,e){this.a=d
this.b=e},
bUh:function bUh(d){this.a=d},
bkO:function bkO(d,e){this.b=d
this.a=e},
aCM:function aCM(){},
bil:function bil(){},
aCO:function aCO(){},
bim:function bim(){},
aCP:function aCP(){},
bin:function bin(){},
uG(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.aa(0,B.H,f.j(0.4),B.hS,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.V(g,h,u,u,u,20),B.aa],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.p(u,A.A(v,B.l,u,B.e,B.O,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.m),u,u,u,u,B.Po,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hvP(d,e,f,g,h,i,j){return new C.an3(i,h,d,j,e,f,g,null)},
a7i:function a7i(d,e){this.c=d
this.a=e},
bkV:function bkV(d){this.a=d},
tP:function tP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bUd:function bUd(d){this.a=d},
IG:function IG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
WU:function WU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnJ:function bnJ(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e5S:function e5S(d,e){this.a=d
this.b=e},
e5T:function e5T(d){this.a=d},
e5U:function e5U(d,e){this.a=d
this.b=e},
e5Q:function e5Q(d){this.a=d},
e5R:function e5R(d){this.a=d},
e5P:function e5P(d){this.a=d},
e5N:function e5N(d){this.a=d},
e5O:function e5O(d){this.a=d},
e5M:function e5M(d,e){this.a=d
this.b=e},
e5V:function e5V(d){this.a=d},
e5W:function e5W(d,e){this.a=d
this.b=e},
e5X:function e5X(d,e){this.a=d
this.b=e},
e5Y:function e5Y(d,e){this.a=d
this.b=e},
e60:function e60(d,e){this.a=d
this.b=e},
e61:function e61(d,e){this.a=d
this.b=e},
e62:function e62(d,e){this.a=d
this.b=e},
e63:function e63(d,e){this.a=d
this.b=e},
e64:function e64(d,e){this.a=d
this.b=e},
e65:function e65(d,e,f){this.a=d
this.b=e
this.c=f},
e66:function e66(d,e){this.a=d
this.b=e},
e67:function e67(d,e){this.a=d
this.b=e},
e5Z:function e5Z(d){this.a=d},
e6_:function e6_(d){this.a=d},
a0F:function a0F(d,e){this.a=d
this.b=e},
an3:function an3(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
an4:function an4(d){var _=this
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
bUy:function bUy(d){this.a=d},
bUz:function bUz(d){this.a=d},
bUx:function bUx(d){this.a=d},
bUo:function bUo(d){this.a=d},
bUp:function bUp(d){this.a=d},
bUn:function bUn(d){this.a=d},
bUu:function bUu(d,e,f){this.a=d
this.b=e
this.c=f},
bUv:function bUv(d){this.a=d},
bUr:function bUr(d,e){this.a=d
this.b=e},
bUs:function bUs(d,e,f){this.a=d
this.b=e
this.c=f},
bUw:function bUw(){},
bUt:function bUt(d,e){this.a=d
this.b=e},
bUq:function bUq(d){this.a=d},
Uz:function Uz(d,e){this.c=d
this.a=e},
an0:function an0(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bTZ:function bTZ(d){this.a=d},
bU_:function bU_(d){this.a=d},
bU9:function bU9(){},
bU8:function bU8(d,e,f){this.a=d
this.b=e
this.c=f},
bU3:function bU3(d,e){this.a=d
this.b=e},
bU2:function bU2(d,e){this.a=d
this.b=e},
bU4:function bU4(d){this.a=d},
bU5:function bU5(d,e){this.a=d
this.b=e},
bU6:function bU6(d,e){this.a=d
this.b=e},
bU1:function bU1(d,e){this.a=d
this.b=e},
bU7:function bU7(d,e,f){this.a=d
this.b=e
this.c=f},
bU0:function bU0(d,e){this.a=d
this.b=e},
itA(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ajV(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.W(Date.now(),0,!1))
s=new C.fPI(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("X<1>"),q=q.k("cO<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
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
if(l&&h==null)m.push("about "+(t-A.je(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.je(h,a2,a2)-A.je(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.B(new A.cO(new A.X(a4,new C.fPG(u,f),p),new C.fPH(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aL(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aL(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aw(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
itB(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ajV(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fPN(v,e)
q=new C.fPL(v)
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
d=A.d4(new A.ba(p,d),d.k("M.E"))
n=A.B(d,A.a3(d).k("ch.E"))
B.d.fd(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eQ(l,new C.fPM(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aL(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
ieu(d,e,f,g){var w,v,u=C.itC(d,e)
if(u<=0||f.length<=u)return new A.agi(!1,D.El,f)
if(g.q(0,e.a))return new A.agi(!1,D.El,f)
w=A.U(f).c
v=A.cU(f,0,A.dy(u,"count",x.S),w).df(0)
return new A.agi(!0,A.cU(f,u,null,w).df(0),v)},
iev(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ajV(d3),d2=d1.length
if(d2===0)return D.hLk
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c_(0,t.a,new C.dkp(t))}s=new C.dkG(v)
d2=x.dy
r=A.S(w,d2)
q=new C.dky(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dkx(r)
l=A.S(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c7(l.c_(0,k,new C.dkq()),o)}h=new C.dkw(s)
g=new C.dkv(l,r)
p=v.$ti.k("ba<2>")
o=p.k("X<M.E>")
f=A.B(new A.X(new A.ba(v,p),new C.dkr(h),o),o.k("M.E"))
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
a9=new C.dkE(new C.dkA(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gan5(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eA([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nL(J.dN(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.dO)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.dko(a2,new C.dkF(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=b4.$ti.k("cr<1>")
d2=A.B(new A.cr(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GT(o,new A.r(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.L9(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cr<1>")
d2=A.B(new A.cr(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bP(0,new C.dks(c6,b4))
for(d2=new A.cg(a4,a4.$ti.k("cg<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aQ(c7.b);j.C();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eQ(j,new C.dkt(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b0(o,new C.dku())
c6.push(new C.aM0(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bir(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hLx(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(d)
return w==null?null:w.b[1]},
hF9(d,e,f,g,h,i,j,k,l,m,n){return new C.a0T(k,f,j,e,l,n,m,d,g,h,i,null)},
aEN(d,e,f,g,h,i,j){return new C.bme(i,d,e,f,j,h,g,null)},
asa:function asa(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGl:function aGl(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e7x:function e7x(d){this.a=d},
e7w:function e7w(d){this.a=d},
e7z:function e7z(d,e){this.a=d
this.b=e},
e7A:function e7A(d,e){this.a=d
this.b=e},
e7B:function e7B(d){this.a=d},
e7v:function e7v(d,e){this.a=d
this.b=e},
e7y:function e7y(d){this.a=d},
e7D:function e7D(d){this.a=d},
e7C:function e7C(d,e){this.a=d
this.b=e},
as4:function as4(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGi:function aGi(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e6Y:function e6Y(d){this.a=d},
e6W:function e6W(d){this.a=d},
e6X:function e6X(d){this.a=d},
e6Z:function e6Z(d,e){this.a=d
this.b=e},
e6T:function e6T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6k:function e6k(d){this.a=d},
e6l:function e6l(d,e){this.a=d
this.b=e},
e6C:function e6C(d){this.a=d},
e6A:function e6A(d){this.a=d},
e6B:function e6B(d,e){this.a=d
this.b=e},
e6D:function e6D(d){this.a=d},
e6E:function e6E(d,e){this.a=d
this.b=e},
e6S:function e6S(d,e){this.a=d
this.b=e},
e6z:function e6z(d){this.a=d},
e6y:function e6y(d){this.a=d},
e6x:function e6x(d,e){this.a=d
this.b=e},
e6P:function e6P(){},
e6Q:function e6Q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e6O:function e6O(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e6I:function e6I(d){this.a=d},
e6J:function e6J(d,e,f){this.a=d
this.b=e
this.c=f},
e6H:function e6H(d,e){this.a=d
this.b=e},
e6K:function e6K(d,e){this.a=d
this.b=e},
e6F:function e6F(d,e){this.a=d
this.b=e},
e6G:function e6G(){},
e6L:function e6L(d,e){this.a=d
this.b=e},
e6M:function e6M(d){this.a=d},
e6N:function e6N(d,e){this.a=d
this.b=e},
e6R:function e6R(d,e){this.a=d
this.b=e},
e68:function e68(d,e){this.a=d
this.b=e},
e69:function e69(d,e){this.a=d
this.b=e},
e70:function e70(d,e,f){this.a=d
this.b=e
this.c=f},
e6V:function e6V(d,e,f){this.a=d
this.b=e
this.c=f},
e6U:function e6U(d){this.a=d},
e6a:function e6a(d){this.a=d},
e6b:function e6b(d){this.a=d},
e6c:function e6c(){},
e6d:function e6d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6h:function e6h(d,e){this.a=d
this.b=e},
e6g:function e6g(d,e){this.a=d
this.b=e},
e6f:function e6f(d){this.a=d},
e6i:function e6i(d,e){this.a=d
this.b=e},
e6e:function e6e(d){this.a=d},
e7_:function e7_(d){this.a=d},
e6u:function e6u(){},
e6v:function e6v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6t:function e6t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6p:function e6p(d,e,f){this.a=d
this.b=e
this.c=f},
e6o:function e6o(d,e,f){this.a=d
this.b=e
this.c=f},
e6m:function e6m(d,e){this.a=d
this.b=e},
e6q:function e6q(d){this.a=d},
e6r:function e6r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6n:function e6n(d,e){this.a=d
this.b=e},
e6s:function e6s(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6w:function e6w(d,e){this.a=d
this.b=e},
e77:function e77(){},
e78:function e78(d,e){this.a=d
this.b=e},
e79:function e79(d){this.a=d},
e7a:function e7a(d,e){this.a=d
this.b=e},
e73:function e73(d){this.a=d},
e71:function e71(d,e){this.a=d
this.b=e},
e74:function e74(d,e){this.a=d
this.b=e},
e75:function e75(d,e){this.a=d
this.b=e},
e76:function e76(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e7b:function e7b(d){this.a=d},
e72:function e72(d){this.a=d},
e6j:function e6j(d){this.a=d},
bip:function bip(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dkm:function dkm(d){this.a=d},
dkl:function dkl(d,e){this.a=d
this.b=e},
dkn:function dkn(d){this.a=d},
dkk:function dkk(d,e){this.a=d
this.b=e},
fPI:function fPI(d,e){this.a=d
this.b=e},
fPJ:function fPJ(d){this.a=d},
fPK:function fPK(){},
fPG:function fPG(d,e){this.a=d
this.b=e},
fPH:function fPH(){},
fPN:function fPN(d,e){this.a=d
this.b=e},
fPO:function fPO(d){this.a=d},
fPP:function fPP(){},
fPL:function fPL(d){this.a=d},
fPM:function fPM(d,e){this.a=d
this.b=e},
L9:function L9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GT:function GT(d,e){this.a=d
this.b=e},
bir:function bir(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dkp:function dkp(d){this.a=d},
dkG:function dkG(d){this.a=d},
dky:function dky(d){this.a=d},
dkz:function dkz(){},
dkx:function dkx(d){this.a=d},
dkq:function dkq(){},
dkw:function dkw(d){this.a=d},
dkv:function dkv(d,e){this.a=d
this.b=e},
dkr:function dkr(d){this.a=d},
dkA:function dkA(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dkB:function dkB(d){this.a=d},
dkC:function dkC(d){this.a=d},
dkD:function dkD(){},
dkE:function dkE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dkF:function dkF(){},
dko:function dko(d,e,f,g,h,i,j,k,l,m){var _=this
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
dks:function dks(d,e){this.a=d
this.b=e},
dkt:function dkt(d){this.a=d},
dku:function dku(){},
aM0:function aM0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bis:function bis(d,e){this.b=d
this.a=e},
dkH:function dkH(){},
dkI:function dkI(d){this.a=d},
dkJ:function dkJ(d){this.a=d},
dkK:function dkK(){},
bmf:function bmf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhs:function bhs(d,e){this.b=d
this.a=e},
bAp:function bAp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fuH:function fuH(d){this.a=d},
bpC:function bpC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f4v:function f4v(d){this.a=d},
f4u:function f4u(d,e){this.a=d
this.b=e},
a0T:function a0T(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aEL:function aEL(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dAY:function dAY(d,e){this.a=d
this.b=e},
dAX:function dAX(d){this.a=d},
dAV:function dAV(d){this.a=d},
dAW:function dAW(d){this.a=d},
dB6:function dB6(d){this.a=d},
dB7:function dB7(d){this.a=d},
dB5:function dB5(d,e){this.a=d
this.b=e},
dB8:function dB8(){},
dBb:function dBb(d){this.a=d},
dB4:function dB4(d,e){this.a=d
this.b=e},
dBa:function dBa(){},
dBc:function dBc(d){this.a=d},
dB3:function dB3(d,e){this.a=d
this.b=e},
dBd:function dBd(d){this.a=d},
dB2:function dB2(d){this.a=d},
dBe:function dBe(d){this.a=d},
dB1:function dB1(d){this.a=d},
dBf:function dBf(d){this.a=d},
dB0:function dB0(d){this.a=d},
dBg:function dBg(d){this.a=d},
dB_:function dB_(d){this.a=d},
dBh:function dBh(d){this.a=d},
dAZ:function dAZ(d,e){this.a=d
this.b=e},
dB9:function dB9(d){this.a=d},
af9:function af9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bme:function bme(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
af8:function af8(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bmd:function bmd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dBi:function dBi(d){this.a=d},
dBj:function dBj(d,e){this.a=d
this.b=e},
aEM:function aEM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aL2:function aL2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afa:function afa(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dBs:function dBs(d){this.a=d},
GP:function GP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hzT(d){var w=d.cH,v=x.N
return w.iX(w,new C.chr(),v,v)},
i5M(d){var w=d.bF
if(w>=0)return w
return 5},
hzV(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hzT(d).h(0,v)
if(w==null||w.length===0)return null
return A.be(w)},
hzU(d,e){var w=C.hzV(d,e)
if(w!=null&&w.cb(new A.W(Date.now(),0,!1)))return!0
return!1},
i5N(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a0(C.hzT(d),w,w)
u=C.hzV(d,e)
t=u!=null&&u.cb(new A.W(Date.now(),0,!1))?u:new A.W(Date.now(),0,!1)
v.n(0,s,t.bL(A.du(30,0,0,0,0,0).a).aa().ag())
d.cH=v},
b2J(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b2J=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lT(t,B.Km),$async$b2J)
case 3:if(l){u=!0
w=1
break}u=A.ls(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Km,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2J,v)},
chr:function chr(){},
i5K(){var w,v=$.oL(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.hl(u)},
JB(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$JB=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cd(),$async$JB)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.fa("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$JB)
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
return A.i($async$JB,v)},
a92(d){return C.i5L(d)},
i5L(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a92=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cd(),$async$a92)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hZ("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cX,null),$async$a92)
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
return A.i($async$a92,v)},
chq(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$chq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.JB(),$async$chq)
case 3:t=m.ii(f),t=t.gae(t),s=x.f
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
return A.i($async$chq,v)},
OJ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$OJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.chq(d),$async$OJ)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.JB(),$async$OJ)
case 6:s=f
r=J.a2(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dD(A.a0(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a92(s),$async$OJ)
case 9:case 8:u=t
w=1
break
case 5:n=C.i5K()
w=10
return A.b(C.JB(),$async$OJ)
case 10:s=f
J.aK(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a92(s),$async$OJ)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$OJ,v)},
b2I(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b2I=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.JB(),$async$b2I)
case 3:t=f
for(s=J.dt(t),r=s.gdS(t),r=r.df(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.X(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a92(t),$async$b2I)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b2I,v)},
a93(d,e,f){var w=0,v=A.j(x.H),u
var $async$a93=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.as9(d,e),$async$a93)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.OJ(d),$async$a93)
case 7:w=4
break
case 5:w=8
return A.b(C.b2I(d),$async$a93)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a93,v)},
as3(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$as3=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.as9(f,e),$async$as3)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.cd(),$async$as3)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.JB(),$async$as3)
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
return A.i($async$as3,v)},
b2H(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b2H=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.cd(),$async$b2H)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.JB(),$async$b2H)
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
return A.i($async$b2H,v)},
i5O(){var w,v=$.oL(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.hl(u)},
as6(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$as6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.cd(),$async$as6)
case 3:if(!g){u=null
w=1
break}t=C.i5O()
w=4
return A.b(A.WV(),$async$as6)
case 4:s=g
r=B.e2.aK(B.V.au(d.f4(),null))
r=B.cS.gcp().aK(r)
q=e?999:2
J.aK(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a94(s),$async$as6)
case 5:p=e?999:2
u=new A.a22("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as6,v)},
as5(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$as5=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.WV(),$async$as5)
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
return A.b(C.b2H(J.k(l==null?"":l),j),$async$as5)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cg.cG(0,B.cJ.aK(t))
s=C.hzW(r)}catch(f){q=A.ac(f)
$.am.$1("[family tree qr stash] decode: "+A.v(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.X(p,g)
else{m=x.N
l=x.z
l=A.dD(A.a0(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a94(p),$async$as5)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as5,v)},
hzW(d){var w,v,u,t,s=null
try{w=B.V.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.i5Q(A.a0(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.am.$1("[family tree sync] parse: "+A.v(v))
return s}},
hiu(d){var w=0,v=A.j(x.m),u,t,s
var $async$hiu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.Y(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.as5(t[1])
w=1
break}u=null
w=1
break}u=C.hzW(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hiu,v)},
i5Q(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.cN(v,x.f)
u=A.cv(u,new C.cht(),u.$ti.k("M.E"),x.k)
t=A.a3(u).k("X<M.E>")
s=A.B(new A.X(u,new C.chu(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.be(J.k(u==null?"":u))
if(r==null)r=new A.W(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.ii(p),t=t.gae(t),o=x.B;t.C();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.cN(l,u)
n=A.cv(n,new C.chv(),n.$ti.k("M.E"),o)
k=A.a3(n).k("X<M.E>")
j=A.B(new A.X(n,new C.chw(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.as7(h,w,s,r,q)},
as9(d,e){var w=0,v=A.j(x.y),u,t
var $async$as9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(R.Oz(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bx(d),$async$as9)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as9,v)},
chC(d){var w=0,v=A.j(x.bC),u,t,s
var $async$chC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bx(d),$async$chC)
case 3:t=s.b8(f,new C.chD(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b0(t,new C.chE())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$chC,v)},
WW(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$WW=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.as9(e,d),$async$WW)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.OJ(e),$async$WW)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bx(e),$async$WW)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dN(r,new C.chA(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a2(r)
if(t.gar(r)){u=null
w=1
break}t=t.dP(r,new C.chB(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.M0(e,o),$async$WW)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.as7(s,B.a.i(e.toLowerCase()),r,new A.W(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WW,v)},
b2M(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b2M=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WW(d,e,f,g),$async$b2M)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gG(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hy(A.L5(q.f4(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2M,v)},
b2L(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b2L=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WW(d,e,f,g),$async$b2L)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.as6(r,f),$async$b2L)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aJ1(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2L,v)},
WX(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WX=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hiu(a0),$async$WX)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.Y(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.as3(g.a,d,e,f,s,r),$async$WX)
case 6:if(!a2){if(r)throw A.Y(A.bc("This backup expired or the sender's tree is no longer available."))
throw A.Y(A.bc("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bFX(e,j),$async$WX)
case 12:case 11:w=13
return A.b(C.ajD(e,j,s),$async$WX)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.BH(e,i,h),$async$WX)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.btm(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WX,v)},
as7:function as7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
chy:function chy(){},
chz:function chz(){},
chx:function chx(){},
cht:function cht(){},
chu:function chu(){},
chv:function chv(){},
chw:function chw(){},
chD:function chD(){},
chE:function chE(){},
chA:function chA(d){this.a=d},
chB:function chB(d){this.a=d},
hrT(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hC(d,new C.as8(w,e,g,i,f,h,null),!0,null,x.H)},
dkj(d,e,f,g,h,i,j,k){return new C.bio(i,e,k,j,g,f,h,d,null)},
as8:function as8(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGk:function aGk(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e7k:function e7k(d){this.a=d},
e7l:function e7l(d,e,f){this.a=d
this.b=e
this.c=f},
e7p:function e7p(d,e){this.a=d
this.b=e},
e7q:function e7q(d){this.a=d},
e7h:function e7h(d){this.a=d},
e7i:function e7i(d,e){this.a=d
this.b=e},
e7j:function e7j(d,e){this.a=d
this.b=e},
e7o:function e7o(d){this.a=d},
e7n:function e7n(d,e){this.a=d
this.b=e},
e7m:function e7m(){},
e7s:function e7s(d){this.a=d},
e7t:function e7t(d,e){this.a=d
this.b=e},
e7r:function e7r(d,e){this.a=d
this.b=e},
dkL:function dkL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
biq:function biq(d,e,f){this.d=d
this.e=e
this.a=f},
aep:function aep(d,e,f){this.c=d
this.d=e
this.a=f},
bio:function bio(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bit:function bit(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a1c:function a1c(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGj:function aGj(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e7c:function e7c(d,e){this.a=d
this.b=e},
e7d:function e7d(d){this.a=d},
e7e:function e7e(d){this.a=d},
e7f:function e7f(d){this.a=d},
e7g:function e7g(d){this.a=d},
a1d:function a1d(d){this.a=d},
bnK:function bnK(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e7u:function e7u(d,e){this.a=d
this.b=e},
b1f(d,e){return new C.b1e(d,e,null)},
b1e:function b1e(d,e,f){this.c=d
this.d=e
this.a=f},
iw5(d){if(!(d!=null&&B.a.Y(d,"ngmy:thumb:")))return null
return B.a.aY(d,11)},
iDN(d){return A.bU(B.L,null,new C.h6O(new C.ur(A.Q(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hC_(d,e){return new C.avb(e,d,null)},
aTF(d,e,f,g,h,i,j){var w=C.iw5(i)
if(w!=null)return A.by(e,new A.a5(j,f,new C.a85(w,!0,null),null),B.aq)
return A.aSZ(e,B.c0,f,g,h,i,j)},
mc:function mc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a85:function a85(d,e,f){this.c=d
this.d=e
this.a=f},
bno:function bno(d,e){var _=this
_.e=_.d=$
_.dz$=d
_.bd$=e
_.c=_.a=null},
dTm:function dTm(d){this.a=d},
dTn:function dTn(){},
dTo:function dTo(d,e){this.a=d
this.b=e},
bnn:function bnn(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h6O:function h6O(d){this.a=d},
h6N:function h6N(d,e){this.a=d
this.b=e},
h6M:function h6M(d,e){this.a=d
this.b=e},
h6L:function h6L(d,e){this.a=d
this.b=e},
avb:function avb(d,e,f){this.c=d
this.d=e
this.a=f},
crj:function crj(d,e){this.a=d
this.b=e},
aOt:function aOt(){},
iDy(d){var w=null
return A.ce(w,w,!0,w,new C.h6b(),d,w,!0,!0,x.e2)},
iEM(d,e,f,g,h){var w=null
return A.ce(w,w,!0,w,new C.hdZ(h,g,f,e),d,w,!0,!0,x.N)},
iDA(d,e){var w=null
return A.ce(w,w,!0,w,new C.h6f(e),d,w,!0,!0,x.dY)},
iDz(d){var w=null
return A.ce(w,w,!0,w,new C.h6e(),d,w,!0,!0,x.c5)},
aWD:function aWD(d,e){this.a=d
this.b=e},
aWC:function aWC(d){this.a=d},
aUE:function aUE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h6b:function h6b(){},
hdZ:function hdZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h6f:function h6f(d){this.a=d},
h6e:function h6e(){},
a_Q:function a_Q(d,e){this.c=d
this.a=e},
aBt:function aBt(){var _=this
_.d=$
_.c=_.a=_.e=null},
dbP:function dbP(d){this.a=d},
dbQ:function dbQ(d){this.a=d},
dbO:function dbO(d,e){this.a=d
this.b=e},
dbR:function dbR(d){this.a=d},
dbS:function dbS(d){this.a=d},
a_P:function a_P(d){this.a=d},
aBs:function aBs(){this.d=$
this.c=this.a=null},
dbL:function dbL(d){this.a=d},
dbM:function dbM(d){this.a=d},
dbN:function dbN(d){this.a=d},
a_j:function a_j(d){this.a=d},
aA8:function aA8(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cJE:function cJE(){},
cJK:function cJK(d){this.a=d},
cJL:function cJL(d){this.a=d},
cJM:function cJM(d){this.a=d},
cJJ:function cJJ(){},
cJN:function cJN(d){this.a=d},
cJO:function cJO(d){this.a=d},
cJI:function cJI(){},
cJP:function cJP(d,e){this.a=d
this.b=e},
cJH:function cJH(d,e){this.a=d
this.b=e},
cJF:function cJF(d,e){this.a=d
this.b=e},
cJQ:function cJQ(d){this.a=d},
cJG:function cJG(){},
cJR:function cJR(d){this.a=d},
a2Z:function a2Z(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bAh:function bAh(){this.d=$
this.c=this.a=null},
fuc:function fuc(d,e){this.a=d
this.b=e},
fud:function fud(d){this.a=d},
fue:function fue(d,e){this.a=d
this.b=e},
adq:function adq(d,e){this.a=d
this.b=e},
GE:function GE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bAf:function bAf(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
fua:function fua(d,e){this.a=d
this.b=e},
aA1:function aA1(d,e){this.c=d
this.a=e},
bAg:function bAg(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
fub:function fub(d){this.a=d},
bAe:function bAe(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aQA:function aQA(){},
aQB:function aQB(){},
bI2(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.bc(u),s=B.o.D(B.i.S((u-t)*100),0,99),r=d<0?"-":"",q=A.o5(B.o.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.h4s(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.N,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aZ(B.o.v(s),2,"0")
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.D,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.KH(A.cW(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aTh(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aTh=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.ic().l6(85,1280,B.eZ),$async$aTh)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fv(),$async$aTh)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hBZ()
w=9
return A.b(C.cri(q,r),$async$aTh)
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
return A.i($async$aTh,v)},
aTD(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aTD=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.Y(g,"ngmy:ws-thumb:")
if(i){u=C.crf(g)
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
return A.b(A.Hz(p,!0,null,o).dc(0,B.fM),$async$aTD)
case 9:n=a1
w=10
return A.b(n.la(),$async$aTD)
case 10:m=a1
w=11
return A.b(m.b.ho(B.ho),$async$aTD)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eU(B.dM.gaS(l))
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
return A.i($async$aTD,v)},
h4s:function h4s(){},
ur:function ur(d){this.a=d},
ava:function ava(d,e,f){this.c=d
this.d=e
this.a=f},
aHS:function aHS(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
f1F:function f1F(d,e){this.a=d
this.b=e},
f1w:function f1w(d){this.a=d},
f1x:function f1x(d){this.a=d},
f1D:function f1D(d,e){this.a=d
this.b=e},
f1C:function f1C(d,e){this.a=d
this.b=e},
f1z:function f1z(d,e){this.a=d
this.b=e},
f1y:function f1y(d,e){this.a=d
this.b=e},
f1A:function f1A(d){this.a=d},
f1B:function f1B(d,e){this.a=d
this.b=e},
f1E:function f1E(d,e){this.a=d
this.b=e},
f1r:function f1r(d,e){this.a=d
this.b=e},
f1v:function f1v(d){this.a=d},
f1u:function f1u(d,e){this.a=d
this.b=e},
f1t:function f1t(d){this.a=d},
f1G:function f1G(d,e){this.a=d
this.b=e},
f1H:function f1H(d,e){this.a=d
this.b=e},
f1s:function f1s(d,e){this.a=d
this.b=e},
hPN(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.X(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.W(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
h4t(d,e,f){var w=0,v=A.j(x.N),u
var $async$h4t=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.V.au(C.hPN(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h4t,v)},
bI4(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bI4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.h4t(!0,d,e),$async$bI4)
case 4:w=3
return A.b(r.av8(g,d,e.a),$async$bI4)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.e2.aK(B.V.au(C.hPN(d,e,null),null))
u="NGMY_WS:"+B.kX.gcp().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bI4,v)},
hGB(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hrs(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d9(s,"NGMYWSSYNC2|"))return!0
if(J.d9(s,"NGMY_WS:"))return!0
if(J.eC(s,t))return!0
if(J.d9(s,"{"))try{w=B.V.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iBy(d){var w,v,u,t=C.hGB(d)
if(t==null)return null
if(C.hrs(t))return t
w=B.a.cd(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aY(t,w))
if(C.hrs(v))return v}u=B.a.cd(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aY(t,u))
if(C.hrs(v))return v}return null},
hrr(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d9(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d9(q,"NGMY_WS:")){v=B.cg.cG(0,B.cJ.aK(J.ng(q,8)))
w=t.a(B.V.aP(0,v,r))}else w=t.a(B.V.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hlb(A.a0(u,x.N,x.z))
return t}catch(s){return r}},
bI3(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bI3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.Y(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.av7(t[1]),$async$bI3)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hrr(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hrr(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bI3,v)},
hrq(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lX(w,v,d.c,d.d,new A.W(Date.now(),0,!1))},
bHx(){var w=0,v=A.j(x.o),u,t
var $async$bHx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HI(),$async$bHx)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hrr(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHx,v)},
hR0(d,e,f,g){return A.bU(B.L,null,new C.hdM(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
hdM:function hdM(d,e,f){this.a=d
this.b=e
this.c=f},
afv:function afv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f1J:function f1J(d,e){this.a=d
this.b=e},
f1K:function f1K(d,e){this.a=d
this.b=e},
f1L:function f1L(d,e){this.a=d
this.b=e},
f1M:function f1M(d,e){this.a=d
this.b=e},
f1I:function f1I(d){this.a=d},
av4:function av4(d,e,f){this.c=d
this.d=e
this.a=f},
bp7:function bp7(){var _=this
_.c=_.a=_.e=_.d=null},
f1m:function f1m(d,e){this.a=d
this.b=e},
f1n:function f1n(d){this.a=d},
f1o:function f1o(d){this.a=d},
av9:function av9(d){this.a=d},
aHR:function aHR(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
f1q:function f1q(d){this.a=d},
f1p:function f1p(d){this.a=d},
i9a(d,e,f,g,h){return new C.Pq(h,g,d,e,f,null)},
aMO:function aMO(d,e){this.a=d
this.b=e},
Pq:function Pq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHT:function aHT(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
f28:function f28(){},
f24:function f24(d,e){this.a=d
this.b=e},
f25:function f25(d){this.a=d},
f1Q:function f1Q(d){this.a=d},
f1O:function f1O(d){this.a=d},
f1P:function f1P(d){this.a=d},
f1Z:function f1Z(d,e){this.a=d
this.b=e},
f1W:function f1W(d,e){this.a=d
this.b=e},
f1X:function f1X(d,e){this.a=d
this.b=e},
f1Y:function f1Y(d,e,f){this.a=d
this.b=e
this.c=f},
f1U:function f1U(d,e,f){this.a=d
this.b=e
this.c=f},
f1S:function f1S(d){this.a=d},
f1T:function f1T(d){this.a=d},
f1V:function f1V(d){this.a=d},
f2b:function f2b(d){this.a=d},
f2a:function f2a(d){this.a=d},
f2c:function f2c(d){this.a=d},
f29:function f29(d){this.a=d},
f1N:function f1N(d){this.a=d},
f1R:function f1R(d,e){this.a=d
this.b=e},
f27:function f27(d,e){this.a=d
this.b=e},
f26:function f26(d,e){this.a=d
this.b=e},
f21:function f21(d){this.a=d},
f22:function f22(d){this.a=d},
f23:function f23(d,e){this.a=d
this.b=e},
f20:function f20(d,e){this.a=d
this.b=e},
f2_:function f2_(d,e,f){this.a=d
this.b=e
this.c=f},
bC2:function bC2(){},
Bk(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ai6(d,e,f){return C.ipr(d,e,f)},
ipr(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ai6=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aB("String",e,f),$async$ai6)
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
return A.i($async$ai6,v)},
ai5(d,e){return C.ipq(d,e)},
ipq(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ai5=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.X(0,e),$async$ai5)
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
return A.i($async$ai5,v)},
iog(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Ua(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bEQ(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bEQ=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b61(q),$async$bEQ)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aTD(q,!1),$async$bEQ)
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
return A.i($async$bEQ,v)},
hXm(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rE(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rE(p,J.k(u==null?"":u),1,o,q)},
hlb(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.cN(s,x.f)
w=A.cv(w,new C.cIX(),w.$ti.k("M.E"),x.Q)
v=A.a3(w).k("X<M.E>")
r=A.B(new A.X(w,new C.cIY(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.be(J.k(t==null?"":t))
return new C.lX(w,v,u,r,t==null?new A.W(Date.now(),0,!1):t)},
itw(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.xc
case"female":case"f":return D.oU
default:return D.zG}},
hM5(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hvQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.itw(v==null?j:J.k(v))
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
return new C.ib(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ity(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.PL
case"viewer":return D.l8
default:return D.vj}},
itz(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
HA(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aSg(d,e){return B.a.i(e.toLowerCase())===C.HA(d,e)&&d.y!==D.l8},
uH(d,e){var w,v=d.y
if(v===D.l8)return!1
w=B.a.i(e.toLowerCase())
if(w===C.HA(d,e))return!0
if(v===D.PL)return!0
v=d.e
return new A.O(v,A.hry(),A.U(v).k("O<1,n>")).q(0,w)},
isT(d){return J.dN(d,new C.fOA()).gJ(0)},
hex(d){var w=0,v=A.j(x.y),u,t
var $async$hex=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bx(d),$async$hex)
case 3:u=t.rz(f,new C.hey(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hex,v)},
bFX(d,e){var w=0,v=A.j(x.H),u,t
var $async$bFX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bx(d),$async$bFX)
case 3:t=g
if(J.rz(t,new C.fM4(e))){w=1
break}if(C.isT(t)>=2)throw A.Y(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bFX,v)},
ana(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.cN(h,x.f)
w=A.cv(w,new C.bV_(),w.$ti.k("M.E"),x.P)
v=A.a3(w).k("X<M.E>")
g=A.B(new A.X(w,new C.bV0(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bV1(),x.N)
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
n=C.ity(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aQ(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.bP)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a0(i,k,j))}return new C.la(w,v,s,!r,t,g,q,p,o,n,m)},
hMk(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aw(v,0,8)},
DT(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.T7(d),$async$DT)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aB(),$async$DT)
case 4:t=f
w=5
return A.b(t.a87(0),$async$DT)
case 5:w=6
return A.b(C.fC7(t,l),$async$DT)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gZ(B.a.i(l.toLowerCase()))
q=t.a
p=J.a2(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hHd(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pt(l,n),$async$DT)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gZ(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hHd(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pt(l,n),$async$DT)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DT,v)},
fC7(d,e){return C.ilB(d,e)},
ilB(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fC7=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a2(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bk(a9)))
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
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bk(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.V.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hlb(A.a0(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bk(a9)+"_"+n))
i=C.iog(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.Y(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b61(h),$async$fC7)
case 17:g=b1
if(g!=null){i=i.Ua(g)
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
case 8:J.Th(q,new C.fC8())
if(p&&J.ad(q)!==0)C.pt(a9,q)
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
return A.i($async$fC7,v)},
bGq(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bGq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.T7(d),$async$bGq)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DT(r),$async$bGq)
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
return A.i($async$bGq,v)},
hHd(d){var w,v,u,t
try{w=B.V.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.cN(w,x.f)
v=A.cv(v,new C.fxF(),v.$ti.k("M.E"),x.fA)
u=A.a3(v).k("X<M.E>")
v=A.B(new A.X(v,new C.fxG(),u),u.k("M.E"))
B.d.b0(v,new C.fxH())
return v}catch(t){v=A.a([],x.D)
return v}},
pt(d,e){return C.iDn(d,e)},
iDn(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pt=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.T7(b2),$async$pt)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aB(),$async$pt)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bk(a8)
p=A.aV(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.V.aP(0,p,null)),new C.h6_(),a2).fD(0)
a2=J.b8(b3,new C.h60(),a2).c0(0,new C.h61())
n=A.d4(a2,a2.$ti.k("M.E"))
a2=o,a2=A.e6(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eC(n,m)?17:18
break
case 17:a5=C.Bk(a8)
l=A.aV(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.aap(l),$async$pt)
case 19:t=21
a5=C.Bk(a8)
k=A.aV(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.V.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.aap(a5==null?null:J.k(a5)),$async$pt)
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
return A.b(C.ai5(r,"ngmy_worksheet_item_v3_"+C.Bk(a8)+"_"+m),$async$pt)
case 29:w=30
return A.b(C.ai5(r,"ngmy_worksheet_thumb_v3_"+C.Bk(a8)+"_"+m),$async$pt)
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
case 14:case 10:a2=J.cI(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gP(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bEQ(h),$async$pt)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ai6(r,"ngmy_worksheet_thumb_v3_"+C.Bk(a8)+"_"+a4,f),$async$pt)
case 40:g=i.Ua(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ai5(r,"ngmy_worksheet_thumb_v3_"+C.Bk(a8)+"_"+a4),$async$pt)
case 41:g=i.Ua(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ai5(r,"ngmy_worksheet_thumb_v3_"+C.Bk(a8)+"_"+a4),$async$pt)
case 42:case 34:a4=i.a
w=43
return A.b(C.ai6(r,"ngmy_worksheet_item_v3_"+C.Bk(a8)+"_"+a4,B.V.au(g.ak(),null)),$async$pt)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.c7(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ai6(r,"ngmy_worksheets_index_v3_"+C.Bk(a8),B.V.au(q,null)),$async$pt)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eT(b3,new C.h62(q))
a4=a3.$ti.k("cO<1,a9<n,@>>")
a7=A.B(new A.cO(a3,new C.h63(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ai6(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gZ(B.a.i(a8.toLowerCase()))),B.V.au(a0,null)),$async$pt)
case 45:w=46
return A.b(J.hWr(r),$async$pt)
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
return A.i($async$pt,v)},
Mu(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Mu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DT(d),$async$Mu)
case 3:t=g
s=J.cI(t)
r=s.bl(t,new C.hew(e))
if(r===-1)s.ce(t,0,e)
else s.n(t,r,e)
u=C.pt(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mu,v)},
bGc(d,e){var w=0,v=A.j(x.H),u
var $async$bGc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DT(d),$async$bGc)
case 2:u=g
J.nf(u,new C.fP3(e))
w=3
return A.b(C.pt(d,u),$async$bGc)
case 3:return A.h(null,v)}})
return A.i($async$bGc,v)},
HC(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$HC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$HC)
case 3:l=f
k=A.a([],x._)
j=B.a.gZ(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.V.aP(0,i,null)
if(x.j.b(t)){j=J.cN(t,x.f)
j=A.cv(j,new C.fSi(),j.$ti.k("M.E"),x.k)
s=A.a3(j).k("X<M.E>")
r=A.B(new A.X(j,new C.fSj(),s),s.k("M.E"))
B.d.b0(r,new C.fSk())
k=r}}catch(h){}w=4
return A.b(C.fyr(d),$async$HC)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.ilY(k,p,d)
j=A.U(o)
s=j.k("O<1,a9<n,@>>")
s=A.B(new A.O(o,new C.fSl(),s),s.k("aj.E"))
n=B.V.au(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Sd(d,o),$async$HC)
case 7:case 6:j=j.k("X<1>")
m=A.B(new A.X(o,new C.fSm(d),j),j.k("M.E"))
if(m.length!==0)C.aS2(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$HC,v)},
h5M(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h5M=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sd(d,e),$async$h5M)
case 3:t=J.dN(e,new C.h5N(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aS2(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h5M,v)},
a4H(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a4H=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aB(),$async$a4H)
case 2:n=g
m=B.a.gZ(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.V.aP(0,l,null)
if(x.j.b(u)){m=J.cN(u,x.f)
m=A.cv(m,new C.her(),m.$ti.k("M.E"),x.k)
t=A.a3(m).k("X<M.E>")
s=A.B(new A.X(m,new C.hes(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oQ(o,new C.het(e))
if(B.a.i(e.x).length===0&&C.uH(e,d)){m=B.a.i(d.toLowerCase())
p=e.aHn(e.y===D.l8?D.l8:D.vj,m)}else p=e
if(q===-1)J.ne(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.Sd(d,o),$async$a4H)
case 3:w=C.uH(p,d)?4:5
break
case 4:w=6
return A.b(C.aS1(C.HA(p,d),p),$async$a4H)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a4H,v)},
aSe(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aSe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.HC(d),$async$aSe)
case 2:u=g
t=J.cI(u)
s=A.nL(t.eT(u,new C.fOL(e)))
t.br(u,new C.fOM(e))
w=3
return A.b(C.Sd(d,u),$async$aSe)
case 3:w=s!=null&&C.aSg(s,d)?4:5
break
case 4:w=6
return A.b(C.fxJ(e),$async$aSe)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aSe,v)},
ajV(d){var w=d.f,v=A.U(w).k("X<1>")
w=A.B(new A.X(w,new C.heC(),v),v.k("M.E"))
return w},
hoQ(d,e){var w,v=d.f,u=A.nL(new A.X(v,new C.fOf(e),A.U(v).k("X<1>")))
v=C.ajV(d)
w=A.U(v).k("X<1>")
v=A.B(new A.X(v,new C.fOg(e,u),w),w.k("M.E"))
B.d.b0(v,new C.fOh())
return v},
itC(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hR4(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bl(C.hoQ(d,u),new C.he_(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
iv8(d,e){var w
if(e==null||e.length===0)return 1
w=C.hoQ(d,e)
if(w.length===0)return 1
return new A.O(w,new C.fT9(),A.U(w).k("O<1,G>")).eH(0,B.yC)+1},
iDg(d){var w,v=C.ajV(d)
if(v.length===0)return null
w=new A.X(v,new C.h5G(),A.U(v).k("X<1>"))
if(!w.gar(0))return w.gG(0)
return B.d.gG(v)},
itx(d){return A.J(["id",d.a,"name",d.b,"gender",C.hM5(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
iv3(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
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
d=q.aHi(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cT_(a1,w,a3.d,a2.y,s,a0,v)},
Bx(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$Bx)
case 3:q=f
p=B.a.gZ(B.a.i(d.toLowerCase()))
o=A.aV(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.V.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.cN(t,x.f)
p=A.cv(p,new C.fSf(),p.$ti.k("M.E"),x.k)
s=A.a3(p).k("X<M.E>")
p=A.B(new A.X(p,new C.fSg(),s),s.k("M.E"))
B.d.b0(p,new C.fSh())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bx,v)},
ajD(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ajD=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.vj:D.l8
a7=C.HA(b2,b3)
w=2
return A.b(C.Bx(b1),$async$ajD)
case 2:a8=b5
a9=J.cI(a8)
b0=a9.bl(a8,new C.h5B(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bFX(b1,b2),$async$ajD)
case 5:case 4:if(b0===-1){u=b2.aHn(a6,a7)
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
s.n(0,m,l.aHi(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("ba<2>")
s=A.B(new A.ba(s,k),k.k("M.E"))
k=a5?D.vj:D.l8
u=t.cT1(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Sd(b1,a8),$async$ajD)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aS1(B.a.i(b3.toLowerCase()),u),$async$ajD)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ajD,v)},
hHG(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.W(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("O<1,a9<n,@>>"),k=A.B(new A.O(m,C.hQ9(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hHH(d,e){var w=new A.W(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("O<1,a9<n,@>>")
u=A.B(new A.O(u,C.hQ9(),t),t.k("aj.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
ijv(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a2(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ana(A.a0(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.O(j,A.hry(),A.U(j).k("O<1,n>")).c0(0,new C.fye())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.vj
else s=B.d.q(t,u)?D.PL:D.l8
return w.aHn(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ana(A.a0(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.cN(q,h)
h=A.cv(h,new C.fyf(),h.$ti.k("M.E"),x.P)
p=A.a3(h).k("X<M.E>")
o=A.B(new A.X(h,new C.fyg(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fyh(),x.N).c0(0,new C.fyi())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.vj
else s=B.d.q(t,u)?D.PL:D.l8
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
return new C.la(h,r,p,!m,t,o,l,j,v,s,B.cn)},
fyr(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fyr=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fyv()
h=x.N
g=x.z
w=7
return A.b(A.hb(A.a([A.m_("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.m_("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.m_("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fyr)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.S(h,g)
h=A.B(p,g)
l=h
J.ha(l,o)
J.ha(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a3(l).k("ba<2>")
h=A.cv(new A.ba(l,h),new C.fys(a0),h.k("M.E"),x.k)
l=A.a3(h).k("X<M.E>")
l=A.B(new A.X(h,new C.fyt(),l),l.k("M.E"))
B.d.b0(l,new C.fyu())
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
return A.i($async$fyr,v)},
ilY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a2(e)
if(j.gar(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dP(e,new C.fCT(),v).c0(0,new C.fCU())
t=A.d4(u,u.$ti.k("M.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.HA(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.l8){m=q.e
m=!new A.O(m,A.hry(),A.U(m).k("O<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.iv3(l,v)
o=C.HA(k,w)
p=v.d
s.n(0,u,o===w?k.bgV(p,D.vj):k.bgV(p,v.y))}j=s.$ti.k("ba<2>")
j=A.B(new A.ba(s,j),j.k("M.E"))
B.d.b0(j,new C.fCV())
return j},
Sd(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Sd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aB(),$async$Sd)
case 2:u=g
t=B.a.gZ(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fFV(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.V.au(s,null)),$async$Sd)
case 3:return A.h(null,v)}})
return A.i($async$Sd,v)},
aS1(d,e){return C.irj(d,e)},
irj(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aS1=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mu("family_trees",A.a([C.hHG(e,d)],p),null,B.cX),$async$aS1)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mu("family_trees",A.a([C.hHH(e,d)],p),null,B.cX),$async$aS1)
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
return A.i($async$aS1,v)},
aS2(d,e){return C.irk(d,e)},
irk(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aS2=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("O<1,a9<n,@>>")
m=n.k("aj.E")
l=A.B(new A.O(e,new C.fLi(d),n),m)
r=l
w=7
return A.b(A.mu("family_trees",r,null,B.cX),$async$aS2)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.O(e,new C.fLj(d),n),m)
p=k
w=8
return A.b(A.mu("family_trees",p,null,B.cX),$async$aS2)
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
return A.i($async$aS2,v)},
fxJ(d){return C.iiI(d)},
iiI(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fxJ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.SF("family_trees",A.J(["id",d],x.N,x.z),null,B.cX),$async$fxJ)
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
return A.i($async$fxJ,v)},
rE:function rE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lX:function lX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cJ_:function cJ_(){},
cIZ:function cIZ(){},
cIX:function cIX(){},
cIY:function cIY(){},
IF:function IF(d,e){this.a=d
this.b=e},
ib:function ib(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
an9:function an9(d,e){this.a=d
this.b=e},
fOA:function fOA(){},
hey:function hey(d){this.a=d},
fM4:function fM4(d){this.a=d},
la:function la(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bV3:function bV3(){},
bV2:function bV2(){},
bV_:function bV_(){},
bV0:function bV0(){},
bV1:function bV1(){},
fC8:function fC8(){},
fxF:function fxF(){},
fxG:function fxG(){},
fxH:function fxH(){},
h6_:function h6_(){},
h60:function h60(){},
h61:function h61(){},
h62:function h62(d){this.a=d},
h63:function h63(){},
hew:function hew(d){this.a=d},
fP3:function fP3(d){this.a=d},
fSi:function fSi(){},
fSj:function fSj(){},
fSk:function fSk(){},
fSl:function fSl(){},
fSm:function fSm(d){this.a=d},
h5N:function h5N(d){this.a=d},
her:function her(){},
hes:function hes(){},
het:function het(d){this.a=d},
fOL:function fOL(d){this.a=d},
fOM:function fOM(d){this.a=d},
heC:function heC(){},
fOf:function fOf(d){this.a=d},
fOg:function fOg(d,e){this.a=d
this.b=e},
fOh:function fOh(){},
he_:function he_(d){this.a=d},
fT9:function fT9(){},
h5G:function h5G(){},
fSf:function fSf(){},
fSg:function fSg(){},
fSh:function fSh(){},
h5B:function h5B(d){this.a=d},
fye:function fye(){},
fyf:function fyf(){},
fyg:function fyg(){},
fyh:function fyh(){},
fyi:function fyi(){},
fyv:function fyv(){},
fyw:function fyw(d){this.a=d},
fys:function fys(d){this.a=d},
fyt:function fyt(){},
fyu:function fyu(){},
fCT:function fCT(){},
fCU:function fCU(){},
fCV:function fCV(){},
fFV:function fFV(){},
fLi:function fLi(d){this.a=d},
fLj:function fLj(d){this.a=d},
cJ0:function cJ0(d,e){this.a=d
this.b=e},
cJ1:function cJ1(d,e){this.a=d
this.b=e},
aJY:function aJY(d,e,f){this.a=d
this.b=e
this.c=f},
bcn:function bcn(){this.b=this.a=0},
bcm:function bcm(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bAi:function bAi(){},
xz(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gci()+"/"+w.gcB()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.aZ(B.o.v(w.gny()),2,"0")+":"+B.a.aZ(B.o.v(w.gHa()),2,"0")},
isp(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
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
j=A.bw(new A.a4(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.r=B.dl.gp(0)
a5.aq(j,i)
k-=q
k=A.bw(new A.a4(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bw(new A.a4(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bw(new A.a4(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a7(0,new A.r(s,a7*0.17)),O.ai4(F.tp,t))
s=g.a7(0,new A.r(s,a7*0.18))
q=A.L()
q.r=F.tp.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a7(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,O.ai4(F.tp,t))
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
if(b1===0){w=A.bX(a0,a1)
u=A.L()
u.r=F.mj.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bX(a0,a1)
u=A.L()
u.r=F.mj.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=F.hp[l]
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=F.mj.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.i.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=F.hp[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.b=B.ac
k.c=1.6
k.r=B.bq.gp(0)
k.d=B.bG
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.T,B.Q,B.W,B.X,B.U)
j.r=B.v.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=B.hZ.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bY(a0.a7(0,new A.r(0,a1*0.5)).aI(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,O.ai4(B.bq,1.8))
a4.restore()},
i97(){var w,v=$.oL(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"WS"+B.d.hl(u)},
av5(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$av5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cd(),$async$av5)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.fa("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$av5)
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
return A.i($async$av5,v)},
av6(d){return C.i98(d)},
i98(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$av6=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cd(),$async$av6)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hZ("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cX,null),$async$av6)
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
return A.i($async$av6,v)},
av8(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$av8=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.cd(),$async$av8)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i97()
w=4
return A.b(C.av5(),$async$av8)
case 4:r=h
q=B.a.i(e)
p=B.e2.aK(t)
J.aK(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cS.gcp().aK(p),"usesRemaining",25,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.av6(r),$async$av8)
case 5:u=new A.a22("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$av8,v)},
av7(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$av7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.cd(),$async$av7)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.av5(),$async$av7)
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
try{s=B.cg.cG(0,B.cJ.aK(t))}catch(h){r=A.ac(h)
$.am.$1("[worksheet qr stash] decode: "+A.v(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.X(q,i)
else{n=x.N
m=x.z
m=A.dD(A.a0(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.av6(q),$async$av7)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$av7,v)},
hBZ(){var w=new A.W(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cV.av(999999)},
i99(d){var w,v,u,t,s,r,q
try{w=A.Bv(d)
if(w==null)return d
v=w
if(J.MA(v)>960||J.Mz(v)>960){s=v
r=J.MA(v)>=J.Mz(v)?960:null
v=A.Sz(s,J.Mz(v)>J.MA(v)?960:null,B.IT,r)}s=v
u=A.J0(82).zF(s,B.rq)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cc(u))
return s}catch(q){t=A.ac(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
cri(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cri=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i99(e)
$.cre.n(0,s,t)
u=C.bI6(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cri,v)},
b61(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b61=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d9(l,"data:image")){u=null
w=1
break}t=4
r=J.eC(l,",")?B.d.gal(J.m2(l,",")):l
q=B.cJ.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hBZ()
w=7
return A.b(C.cri(p,q),$async$b61)
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
return A.i($async$b61,v)},
crf(d){var w=0,v=A.j(x.T),u,t,s
var $async$crf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.Y(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.crh(s),$async$crf)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcp().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$crf,v)},
aap(d){var w=0,v=A.j(x.H),u,t
var $async$aap=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hPO(d)
if(t==null){w=1
break}$.cre.X(0,t)
w=3
return A.b(C.bI5(t),$async$aap)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aap,v)},
bI6(d,e){return C.iBB(d,e)},
iBB(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bI6=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aQR
w=7
return A.b(n==null?$.aQR=A.hnD():n,$async$bI6)
case 7:r=g
q=new Uint8Array(A.cc(e))
p=J.my(r,"thumbs","readwrite")
B.iT.mj(J.mx(p,"thumbs"),q,l)
w=8
return A.b(J.oP(p),$async$bI6)
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
return A.i($async$bI6,v)},
bI5(d){return C.iBz(d)},
iBz(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bI5=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aQR
w=7
return A.b(o==null?$.aQR=A.hnD():o,$async$bI5)
case 7:r=f
q=J.my(r,"thumbs","readwrite")
B.iT.GK(J.mx(q,"thumbs"),m)
w=8
return A.b(J.oP(q),$async$bI5)
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
return A.i($async$bI5,v)}},D
J=c[1]
A=c[0]
B=c[2]
A9=c[86]
S=c[294]
A_=c[113]
Aa=c[293]
P=c[298]
A0=c[205]
T=c[67]
M=c[70]
Ab=c[270]
L=c[242]
A1=c[120]
U=c[156]
H=c[42]
E=c[258]
Ac=c[273]
V=c[139]
Ad=c[169]
Ae=c[153]
A2=c[116]
Af=c[106]
Ag=c[73]
Ah=c[269]
Ai=c[51]
Q=c[268]
Aj=c[292]
Ak=c[238]
N=c[98]
A3=c[94]
Al=c[211]
A4=c[165]
A5=c[216]
A6=c[254]
Am=c[161]
W=c[299]
A7=c[297]
An=c[295]
Ao=c[300]
Ap=c[87]
G=c[296]
Aq=c[168]
Ar=c[155]
A8=c[246]
As=c[41]
At=c[199]
Au=c[115]
Av=c[234]
X=c[285]
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
D=c[291]
C.aqL.prototype={}
C.b1g.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.blg(),f=h.x!=null&&h.A_(i).length===0
if(h.x!=null)w=f?B.b5:B.bE
else w=h.gVa()?B.bE:B.ee
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.K(D.bsw,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.foB,B.f,i,i,new A.o(B.b5.j(0.12),i,i,A.m(999),i,i,B.m),i,i,i,i,B.hm,i,i,i),B.R,D.fV1,B.at,A.c(C.xz(new A.W(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fQz,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,D.ba6,i,i,i,i,B.Pl,i,i,i)
q=A.m(16)
p=A.K(B.bn,B.r,1)
o=A.K(B.b5.j(0.28),B.r,1)
n=A.hpZ(h.d)
o=A.p(B.z,C.b1f(A.fVE(h.e,n),30),B.f,i,i,new A.o(B.mm,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fLs,B.K,i,i)
m=A.m(14)
l=A.K(B.bn,B.r,1)
q=A.p(i,A.x(A.a([o,B.M,n,B.bs,D.fVk,B.af,A.p(i,A.x(A.a([D.haJ,B.bs,A.c(A.BA(h.c),i,i,i,i,i,i,D.fFW,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.m),i,i,i,i,B.f8,i,i,1/0)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,p,q,i,i,B.m),i,i,i,i,B.a1Q,i,i,i)
p=A.m(16)
m=A.K(B.bn,B.r,1)
l=j.aUv("Original due",C.xz(h.r,!1))
n=j.aUv("Current due",C.xz(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.R,A.p(i,A.x(A.a([l,B.M,n,B.R,A.p(i,A.c(h.gaOs(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.m),i,i,i,i,B.x1,i,i,1/0),B.R,j.cni(),B.M,j.c9E(g,f)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.K(B.bn,B.r,1)
B.d.u(p,A.a([B.R,A.p(i,A.x(A.a([D.fWk,B.at,A.c(q,i,i,i,i,i,i,D.fKB,i,i,i)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,n,o,i,i,B.m),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaJ2()){q=A.m(14)
o=A.K(B.cD,B.r,1.6)
B.d.u(p,A.a([B.R,A.p(i,A.x(A.a([D.hc3,B.M,A.by(A.m(12),A.ek(new A.a5(1/0,88,A.b4(i,i,i,new A.XL(h.ax,B.a_,D.fto,!0,3.5,i),B.aA),i),B.c,!0),B.aq)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.m),i,i,i,i,B.D1,i,i,i)],s))}p.push(B.aB)
p.push(D.h3Q)
return A.p(i,A.x(A.a([r,new A.D(B.a1S,A.x(p,B.am,i,B.e,B.h,0,B.p),i)],s),B.am,i,B.e,B.O,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aUv(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.ad8,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fH_,w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
cni(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.abp(B.ee,u,"Not paid yet")
w=t.A_(null).length
v=w===0?B.b5:B.bE
return this.abp(v,u,C.xz(t.x,!0))},
c9E(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.abp(B.b5,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.abp(B.b5,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.ad8,u,u,u)
v=A.U(d).k("O<1,hh>")
v=A.B(new A.O(d,new C.can(),v),v.k("aj.E"))
return A.x(A.a([w,B.aj,A.bZ(B.bI,v,B.br,u,6,6)],x.p),B.B,u,B.e,B.h,0,B.p)},
abp(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.ad8,w,w,w),1),new A.d2(1,B.ci,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e0,w,w),w)],x.p),B.B,w,B.e,B.h,0,w,w)}}
C.beF.prototype={
a4(d,e){new A.XL(this.b,B.a_,e,!0,3.5,null).a4(d,e)},
aD(d){return d.b!==this.b}}
C.aqY.prototype={
R(){return new C.aFM(A.a([],x.bp))},
ge9(){return this.c}}
C.aFM.prototype={
a_(){this.a3()
this.JK()},
JK(){var w=0,v=A.j(x.H),u,t=this,s
var $async$JK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3V(t.a.c),$async$JK)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dUf(t,s))
case 1:return A.h(u,v)}})
return A.i($async$JK,v)},
aWt(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.l(v,v,u?B.bv:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bv:B.bk).j(0.22)
w=A.m(10)
return A.bC(v,new A.b6(4,r,new A.ax(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b6(4,w,new A.ax((this.a.d.a?B.bv:B.bk).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.m(10),D.b7L),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aWs(d){return this.aWt(d,null)},
QG(d){return this.cr0(d)},
cr0(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QG=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.IS:B.eZ
w=7
return A.b(new A.ic().Da(72,900,900,n),$async$QG)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fv(),$async$QG)
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
if(n!=null)n.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c("Could not pick photo: "+A.v(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$QG,v)},
b4O(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.m(10),n=A.K((q?B.bv:B.bk).j(0.18),B.r,1)
if(d)q=B.cZ
else q=s.a.d.a?B.bv:B.bk
q=A.V(e,q,r,r,r,18)
w=A.c(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,12.5,r,r,B.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cZ
else u=s.a.d.a?B.bv:B.bk
t=x.p
u=A.E(A.x(A.a([w,A.c(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.B,r,B.e,B.h,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cZ,r,r,r,r,r,r,r,r,r,r,r,r,r,B.co)
q=A.a([q,B.aa,u,A.bL(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.V(B.cC,s.a.d.a?B.bv:B.bk,r,r,r,18),r,r,r,g,r,r,r,r,r,B.co))
return A.p(r,A.A(q,B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.m),r,r,r,B.jB,D.bFL,r,r,r)},
E3(d){return this.bFz(d)},
bFy(){return this.E3(null)},
bFz(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E3=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
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
a4=a4===q?B.o.v(B.i.M(p)):B.i.a5(p,2)}o=new A.au(new A.bd(a4,B.b6,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.bd(a4,B.b6,B.aP),s)
if(a3){a4=new A.W(Date.now(),0,!1).bL(6048e8)
m=A.c0(a4.gck(),a4.gci(),a4.gcB(),0,0,0,0,0)}else{a4=a5.f
m=A.c0(a4.gck(),a4.gci(),a4.gcB(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bt(a4,!0,x.cT)
i=a3?null:A.hpZ(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xO?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i_(B.v.j(0.55),!0,"Dismiss",a4,new C.dTZ(),new C.dU_(a2,t,a5,r,new C.dU0(a2,t),o,n,j),B.eI,!0,x.y),$async$E3)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cz(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.V$=s
r.W$=0
o.V$=s
o.W$=0
n.V$=s
n.W$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.T(D.fzY)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.T(D.fyC)
w=1
break}a1=A.fVE(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xO?"male":"female"
w=7
return A.b(A.ajU(a3,A.hyw(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$E3)
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
a3=A.c0(a3.gck(),a3.gci(),a3.gcB(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gck(),a4.gci(),a4.gcB(),0,0,0,0,0)))a5.cVo(a2.a)
w=8
return A.b(A.ajU(t.a.c,a5),$async$E3)
case 8:case 5:w=9
return A.b(t.JK(),$async$E3)
case 9:case 1:return A.h(u,v)}})
return A.i($async$E3,v)},
aX8(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cZ.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cZ
else s=(this.a.d.a?B.bv:B.bk).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b1f(d,18)
if(g)q=B.cZ
else q=this.a.d.a?B.aS:B.aw
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.p(p,A.A(A.a([r,B.ba,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.D,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.bb,B.h,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.m),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Tu(d){return this.cJh(d)},
cJh(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Tu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i_(B.v.j(0.55),!0,"Dismiss",s,new C.dUi(),new C.dUj(t,d),B.hl,!0,x.y),$async$Tu)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.W(s,0,!1)
case 4:w=7
return A.b(A.ajU(t.a.c,d),$async$Tu)
case 7:w=8
return A.b(t.JK(),$async$Tu)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Tu,v)},
QF(d,e){return this.bQG(0,e)},
bQG(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lB(s,"Cancel","Delete",e.b+" \xb7 "+A.BA(e.c)+" will be removed from this device.","Delete this debt?"),$async$QF)
case 3:if(!g){w=1
break}w=4
return A.b(C.fOS(t.a.c,e.a),$async$QF)
case 4:w=5
return A.b(t.JK(),$async$QF)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QF,v)},
ahj(d){return this.ckD(d)},
ckD(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dUc(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ahj)
case 2:return A.h(null,v)}})
return A.i($async$ahj,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eDC
w=J.dN(m.d,new C.dUk())
v=A.B(w,w.$ti.k("M.E"))
w=J.dN(m.d,new C.dUl())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cE(v,0,new C.dUm())
w=A.m(18)
s=m.a.d.a
r=s?D.cGI:D.aEU
q=A.K(s?B.cZ.j(0.35):B.cZ.j(0.18),B.r,1)
s=A.p(l,D.c6Z,B.f,l,l,new A.o(B.cZ.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.ar,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a3,!0,A.m(12),A.aM(!1,A.m(12),!0,D.eCX,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dUn(m),l,l,l,l,l,l,l),B.f,B.cZ,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.h,0,l,l)
o=A.E(m.cFi("Open",""+v.length),1)
n=v.length===0?"$0.00":A.BA(t)
r=A.a([A.p(l,A.x(A.a([s,B.af,A.A(A.a([o,B.aa,A.E(m.bb2(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.h,0,l,l)],p),B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ay,B.aD,B.x,r,l,l),B.m),l,l,l,l,B.anG,l,l,l),B.aB],p)
if(J.cw(m.d)){w=m.a.d.a
s=w?B.el:B.c
q=A.m(18)
o=A.K((w?B.bv:B.bk).j(0.12),B.r,1)
n=A.p(l,D.c1u,B.f,l,l,new A.o(B.cZ.j(0.12),l,l,A.m(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,15,l,l,B.D,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.af,w,B.at,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bk,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.m),l,l,l,l,D.bIu,l,l,1/0))}else{w=m.gcqe()
s=A.B(new A.O(v,w,A.U(v).k("O<1,w>")),x.l)
if(u.length!==0){q=A.a([B.aj,new A.D(D.bK9,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bk,l,l,l,l,l,l,l,l,12,l,l,B.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.O(u,w,A.U(u).k("O<1,w>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.am,l,B.e,B.h,0,B.p)},
bb2(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.v.j(0.22):B.c.j(0.85),s=A.m(14),r=A.K((v.a.d.a?B.bv:B.bk).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bv:B.bk,u,u,u,u,u,u,u,u,11,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cZ
else w=v.a.d.a?B.aS:B.aw
return A.p(u,A.x(A.a([q,B.bs,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.B,u,B.e,B.h,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.m),u,u,u,u,B.ep,u,u,u)},
cFi(d,e){return this.bb2(!1,d,e)},
cqf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.A_(j).length,h=d.bkw()
if(d.x!=null){w=d.A_(j).length
v=w===0?B.cZ:B.bE}else if(d.gVa())v=B.bE
else{if(h)w=B.cZ
else w=k.a.d.a?B.bv:B.bk
v=w}if(d.x!=null){w=d.A_(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xz(u,!1)}else{u.toString
t="Paid "+C.xz(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xz(w,!1)+" \xb7 "+i+" missed":"Due "+C.xz(w,!1)}w=k.a.d.a?B.el:B.c
u=A.m(18)
if(d.gVa()&&d.x==null)s=B.bE.j(0.35)
else s=(k.a.d.a?B.bv:B.bk).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.aa(0,B.H,B.v.j(0.04),B.cP,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bt:B.mm
o=A.K(d.gVa()&&d.x==null?B.bE.j(0.45):B.cZ.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hpZ(d.d)
o=A.p(B.z,A.d5(C.b1f(A.fVE(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.aw
m=x.p
n=A.a([new A.d2(1,B.ci,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.D,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaJ2())B.d.u(n,A.a([B.dZ,A.V(B.Qb,B.cZ.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.h,0,j,j),B.cQ,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.N,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.B,j,B.e,B.h,0,B.p),1)
n=A.BA(d.c)
l=k.a.d.a?B.aS:B.aw
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(Aj.anu,A.A(A.a([o,B.bc,p,B.aa,A.x(A.a([n,B.bs,A.V(B.eM,(k.a.d.a?B.bv:B.bk).j(0.5),j,j,j,18)],m),B.dt,j,B.e,B.h,0,B.p)],m),B.l,j,B.e,B.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dUe(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.m),j,j,j,B.d7,j,j,j,j)}}
C.v5.prototype={}
C.amY.prototype={
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
l.push(A.c(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aB2,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.HT,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.dc(B.dp,m,B.f,A.A(l,B.l,a0,B.e,B.O,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bEX,A.c(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cR:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fD,A.x(a2,u,a0,B.e,B.O,0,B.p),a0),1))
n.push(D.fuc)
a2=A.a([A.A(n,B.l,a0,B.e,B.h,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.x0,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a5,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.m),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lz,A.x(a2,B.l,a0,B.e,B.O,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hM,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ay,B.aD,B.x,a1.d,a0,a0),B.m),a0,a0,a0,D.bGf,a0,a0,a0,a0)}}
C.aXW.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.b9?B.b9:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.c(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cR,q,B.N,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.h,0,q,q),B.cQ,n],m)
if(p.z)o.push(new A.D(B.va,n,q))
return new A.D(B.d7,A.x(o,B.l,q,B.e,B.O,0,B.p),q)}}
C.Uy.prototype={
R(){return new C.bij()}}
C.bij.prototype={
gc4c(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aE(d,n,x.w).w,l=x.p,k=A.a([D.eDx,D.eDD],l)
for(w=0;w<8;++w){v=D.a6d[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.IG:B.A6
q=t===s
r=A.V(r,q?B.eH:B.bY,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.ba,A.c(v.b,n,n,n,n,n,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aa,new A.bu(1,B.b8,A.c(v.c,n,1,B.a2,n,n,n,B.Bu,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ax(B.eH,2,B.r,-1)
s=new A.o(n,n,new A.bE(p,p,p,p),new A.bb(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eY,A.x(A.a([new A.D(B.nf,new A.c1(B.aK,B.e,B.h,B.l,n,B.p,n,0,r,n),n),A.p(n,new A.dv(!0,new C.amY(v,q.d,q.e,new C.djh(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.B,n,B.e,B.h,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dji(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bGE,A.bI(D.hhG,n,new C.djj(o,d),A.bp(B.b_,n,n,n,n,B.pl,n,n,new A.b9(A.m(16),B.a1),n,n,n)),n))
return A.bo(!0,new A.cS(new A.aY(0,1/0,0,m.a.b*0.9),A.cn(k,n,n,D.bL2,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nI.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bh6(d,e,f){return new C.nI(this.a,e,d,f)}}
C.IE.prototype={
x9(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.IE(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aHb(d){var w=null
return this.x9(w,w,w,w,w,d,w,w,w,w,w,w)},
cQZ(d){var w=null
return this.x9(w,w,w,w,d,w,w,w,w,w,w,w)},
bh4(d,e,f){var w=null
return this.x9(d,w,w,w,w,w,w,w,e,w,f,w)},
cRD(d){var w=null
return this.x9(w,w,w,w,w,w,d,w,w,w,w,w)},
cRM(d){var w=null
return this.x9(w,w,w,w,w,w,w,w,w,d,w,w)},
cQX(d){var w=null
return this.x9(w,w,w,d,w,w,w,w,w,w,w,w)},
cRO(d){var w=null
return this.x9(w,w,w,w,w,w,w,w,w,w,w,d)},
cQU(d){var w=null
return this.x9(w,w,d,w,w,w,w,w,w,w,w,w)},
cQP(d){var w=null
return this.x9(w,d,w,w,w,w,w,w,w,w,w,w)},
GB(d){var w=null
return this.x9(w,w,w,w,w,w,w,d,w,w,w,w)},
cRW(d,e,f,g,h,i,j,k,l,m,n){return this.x9(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cOt(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bTL(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.i.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cT(d.h(0,n))).length!==0?B.a.i(A.cT(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cT(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.EB.geA(D.EB))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a7V)
q=l.$2("frame",D.a7e)
l=l.$2("texture",D.a7a)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cT(d.h(0,"author"))):o
return this.cRW(p,u,t,q,r,A.rt(d.h(0,"ribbon"))?A.Hd(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a0d.prototype={
R(){return new C.aCK(A.a([],x.I),D.PK)},
ge9(){return this.c}}
C.aCK.prototype={
a_(){var w,v=this
v.a3()
v.f=A.Ar(0,1)
w=$.az()
v.z=new A.au(B.ax,w)
v.Q=new A.au(B.ax,w)
v.lf()
w=v.a
C.bGm(w.c,w.d).bE(new C.djY(v),x.fL)},
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
return A.b(C.M0(s.c,s.d),$async$lf)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.djM(t,r))
t.ayH()
case 1:return A.h(u,v)}})
return A.i($async$lf,v)},
gavg(){var w,v=this
if(!J.cw(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
ayH(){var w,v,u=this.gavg(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cj0(d){this.l(new C.djJ(this,d))
this.ayH()},
Ox(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ox=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nI(B.o.v(1000*Date.now()),"Untitled page","",new A.W(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aU0(r.c,r.d,s),$async$Ox)
case 3:w=4
return A.b(t.lf(),$async$Ox)
case 4:if(t.c==null||J.cw(t.d)){w=1
break}q=J.oQ(t.d,new C.djk(s))
p=q>=0?q:J.ad(t.d)-1
t.l(new C.djl(t,p))
t.ayH()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.C8(p+1,B.cp,B.l5),$async$Ox)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Ox,v)},
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
break}s=t.gavg()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aU0(o.c,o.d,new C.nI(s,r,q,new A.W(p,0,!1))),$async$BL)
case 3:w=4
return A.b(t.lf(),$async$BL)
case 4:if(t.c==null){w=1
break}t.l(new C.djN(t))
case 1:return A.h(u,v)}})
return A.i($async$BL,v)},
Pf(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gavg()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.djt(r),s,null,!0,!0,x.y),$async$Pf)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bG6(s.c,s.d,r.a),$async$Pf)
case 4:t.l(new C.dju(t))
w=5
return A.b(t.lf(),$async$Pf)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.Vd(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Pf,v)},
zm(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BL(),$async$zm)
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
return A.b(C.Sx(s,r.r,o,p,q),$async$zm)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a7(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hQD(s,r.x,r.r),$async$zm)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.M0(s.c,s.d),$async$zm)
case 10:l=e
for(s=n.d,r=J.cI(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nI(""+(m+k),q,B.a.i(j.b),new A.W(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BH(r.c,r.d,l),$async$zm)
case 11:w=12
return A.b(t.lf(),$async$zm)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zm,v)},
a2l(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a2l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BL(),$async$a2l)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzk(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dr(D.Aw,new C.djK(t),new C.djL())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.n3("Our Family",o,"",""))
for(o=J.aQ(t.d);o.C();){n=o.gP(o)
p.push(new H.n3(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hrP(o,new H.t_(s,r,"",p,new H.vn(q.d,null,null,null,null,"","","")),null),$async$a2l)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a2l,v)},
OX(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$OX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BL(),$async$OX)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.aip,null,new C.djp(t),s,!0,!0,!0,I.abe,!1,!1,x.N),$async$OX)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cQZ(r)
t.l(new C.djq(t,q))
s=t.a
w=7
return A.b(C.Ta(s.c,s.d,q),$async$OX)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OX,v)},
Yt(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.aip,null,new C.djv(t),r,!0,!0,!0,I.abe,!1,!1,x.e),$async$Yt)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.djw(t,s))
r=t.a
w=4
return A.b(C.Ta(r.c,r.d,s),$async$Yt)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.C8(0,B.eb,B.nc)
case 1:return A.h(u,v)}})
return A.i($async$Yt,v)},
bWn(d){var w=d.bU(),v=B.a.aZ(B.o.v(w.gci()),2,"0"),u=B.a.aZ(B.o.v(w.gcB()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gzk(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c3q()
if(r.e)w=D.ah4
else if(J.cw(r.d)){w=r.y
v=r.gzk(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fFg,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(X.aoR,new C.a_s(w,v,0,q),q),q),B.by,t,B.aj,A.c(u,q,q,q,q,q,q,A.l(q,q,D.l0.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.p(q,D.fol,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.aa(0,B.H,B.dY.j(0.45),B.J,18)],x.V),E.xE,B.m),q,q,q,q,B.Po,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcNw(),q,q,q,q,q,q,!1,B.a4))
w.push(B.R)
w.push(A.hv(D.bYs,D.hh7,r.gaQ9(),q))
B.d.u(u,w)}w=A.at(A.cb(A.x(u,B.l,q,B.e,B.O,0,B.p),B.t,q,B.y,q,q,B.eJ,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.l0.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.N,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.e8:B.C5
u=A.x(A.a([new A.D(D.bHJ,w,q),A.E(A.K1(v,new C.djW(r),J.ad(r.d)+1,q,r.gcj_(),u,B.aK),1),r.bIy()],x.p),B.l,q,B.e,B.h,0,B.p)
w=u}v=x.p
return A.c6(q,D.a_B,new A.an(B.a0,q,B.b4,B.t,A.a([D.aSv,A.bo(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c3q(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.L2(B.eg,"AI",h.gbGl(),!0))
if(h.a.f)f.push(new C.L2(B.m3,"Cover",h.gbRf(),!1))
if(h.a.f)f.push(new C.L2(B.xw,"Header",h.gbMa(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.L2(B.vz,"Print",h.gcsm(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hn:B.jl
t=v?"Save":"Edit"
f.push(new C.L2(u,t,v?h.gcyM():new C.djG(h),!1))}if(h.a.f)f.push(new C.L2(B.id,"Add page",h.gaQ9(),!1))
v=C.hM4(h.y.Q)
u=h.gzk(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dRM
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(E.kF.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.l0,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bE(i,i,i,i),new A.bb(k,k,k,k),g,new A.a8(B.a5,B.a9,B.x,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.l0.j(0.85)
p.push(new A.bu(1,B.b8,A.aA(B.c_,A.x(A.a([k,B.bs,A.c(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.D,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.O,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.amY(v,u,t+" \xb7 "+s+" "+r,new C.djH(h),A.A(p,B.l,g,B.e,B.h,0,g,g),g)},
AF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BL(),$async$AF)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aQ(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=H.a4a(B.d.aL(s," "))
s=t.c
s.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.djm(t,p),s,null,!0,!0,x.N),$async$AF)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zm(),$async$AF)
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
return A.b(t.cJX(o==="sw"?"Swahili (Kiswahili)":"English"),$async$AF)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$AF,v)},
a_t(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.K(E.kF.j(0.3),B.r,1),r=x.p
return new A.D(B.cB,A.aM(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.xE,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.c(f,w,w,w,w,w,w,A3.LG,w,w,w),A.c(g,w,w,w,w,w,w,B.Fw,w,w,w)],r),B.B,w,B.e,B.h,0,B.p),1)],r),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.m),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.djI(d,h),w,w,w,w,w,w,w),w)},
ED(){return this.bVR()},
bVR(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$ED=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.djz(r),a7,null,!0,!0,x.ei),$async$ED)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eK("Working on it\u2026",$.az())
a6.a=!0
a7=r.c
a7.toString
A.ce(null,null,!1,null,new C.djA(o),a7,null,!0,!0,x.H).fA(new C.djB(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.c7(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ak()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.Aw[a1]
J.c7(j,i.a)}w=8
return A.b(C.aiY(a0,a7,new C.djC(o),d,l,e,j),$async$ED)
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
J.aUu(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.T(A.b3(null,null,null,null,null,B.t,null,A.c(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcn(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bh6(m.b.h(0,a4).b,a7,new A.W(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BH(j.c,j.d,l),$async$ED)
case 11:w=12
return A.b(r.lf(),$async$ED)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.Aw[a1].a)
a5=l.cOt(j,12,a7)
l=r.a
w=15
return A.b(C.Ta(l.c,l.d,a5),$async$ED)
case 15:if(r.c!=null)r.l(new C.djD(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.C8(0,B.eb,B.nc)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b3(a3?A.cCP("Undo",new C.djE(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.em,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ED,v)},
Ge(d,e){return this.cJY(d,e)},
cJX(d){return this.Ge(d,!1)},
cJY(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ge=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eK("Starting\u2026",$.az())
f.a=!0
k=r.c
k.toString
A.ce(null,null,!1,null,new C.djP(a0),k,null,!0,!0,x.H).fA(new C.djQ(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c7(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a4r(m,new C.djR(a0)),$async$Ge)
case 10:w=8
break
case 9:w=11
return A.b(C.bHW(new C.djS(a0),m,a2),$async$Ge)
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
J.aUu(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.T(A.b3(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bh6(J.t(p,g).b,j.a,new A.W(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BH(k.c,k.d,o),$async$Ge)
case 12:w=13
return A.b(r.lf(),$async$Ge)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.Y(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b3(A.cCP("Undo",new C.djT(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ge,v)},
bIy(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.djn(v):u
r=A.aI(u,u,u,u,A.V(D.bU1,s?D.l0:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.hv(A.V(B.xh,B.Hg,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.Hg,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbQQ(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.l0.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.djo(v):u
return A.bo(!0,new A.D(D.bHy,A.A(A.a([r,s,A.aI(u,u,u,u,A.V(B.eM,t<J.ad(v.d)?D.l0:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.h,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a0h.prototype={
R(){return new C.biI(new A.au(B.ax,$.az()))}}
C.biI.prototype={
ga3u(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.az()
w.W$=0
this.a2()},
gbUq(){switch(this.ga3u()){case"cover":var w=D.deI
break
case"book":w=D.d9C
break
default:w=D.dIb
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.m(26),n=E.kF.j(0.5),m=x.p,l=A.A(A.a([D.dRN,B.ar,D.bNg,A.aI(p,p,p,p,B.lD,p,p,p,new C.dlK(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.h,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jK(p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dlL(q),q.ga3u()==="page",p,p,p,p))
if(q.a.d)k.push(A.jK(p,p,p,D.hbB,p,new C.dlM(q),q.ga3u()==="book",p,p,p,p))
k.push(A.jK(p,p,p,D.fZ9,p,new C.dlN(q),q.ga3u()==="cover",p,p,p,p))
k=A.bZ(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bC(p,new A.b6(4,A.m(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kz,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.ds,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbUq(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,Af.LD,p,p,p)
w.push(A.mQ(p,B.c.j(0.08),r,B.hG,new C.dlO(q,s),p,p,p,p))}return A.eH(p,E.CD,A.cb(A.x(A.a([l,B.R,D.heX,B.aj,k,B.af,j,B.M,A.bZ(B.bI,w,B.br,p,6,6),B.aB,A.db(D.bYp,p,D.hfK,new C.dlP(q,d),A.bp(B.b_,p,p,p,p,B.pl,p,p,new A.b9(A.m(16),B.a1),p,p,p)),B.at,D.h9L],m),B.B,p,B.e,B.O,0,B.p),B.t,p,B.y,p,p,B.f9,p,p,B.ah),p,p,p,B.Pm,p,B.dd,p,new A.b9(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a0f.prototype={
R(){return new C.aCN(A.a([],x.gA))},
ge9(){return this.c}}
C.agJ.prototype={}
C.aCN.prototype={
a_(){this.a3()
this.lf()},
lf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.SB(p.c,p.d),$async$lf)
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
return A.b(C.bGm(r.c,q),$async$lf)
case 6:j=e
i=J
w=7
return A.b(C.M0(t.a.c,q),$async$lf)
case 7:m.push(new l.agJ(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.dkc(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lf,v)},
bcm(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Rv(d,e){return this.ckA(0,e)},
ckA(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a7(s,!1).c8(A.e5(new C.dkb(u,e),!0,null,x.y)),$async$Rv)
case 2:t=g
w=3
return A.b(u.lf(),$async$Rv)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.T(D.aWu)
return A.h(null,v)}})
return A.i($async$Rv,v)},
Gg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Gg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.T(D.aWp)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aii(s.c,s.d),$async$Gg)
case 5:q=e
w=6
return A.b(t.lf(),$async$Gg)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Rv(0,B.d.fg(t.d,new C.dkg(q))),$async$Gg)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Sx(p,s.f,r,n,o),$async$Gg)
case 10:m=e
w=11
return A.b(t.lf(),$async$Gg)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.T(D.aWu)
case 1:return A.h(u,v)}})
return A.i($async$Gg,v)},
QU(d,e){return this.cwq(0,e)},
cwq(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dkf(t,e),s,null,!0,!0,x.y),$async$QU)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a4C(s.c,s.d,e.a),$async$QU)
case 4:w=5
return A.b(t.lf(),$async$QU)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QU,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bIB(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.K(E.kF.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fL(0.7142857142857143,A.p(n,A.x(A.a([D.dRO,B.af,D.eCy,B.at,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.l0.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.bb,B.h,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcNs(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.K(E.kF.j(0.85),B.r,1.6)
s=A.aA(n,A.p(n,D.c5H,B.f,n,n,new A.o(B.v.j(0.3),n,A.K(E.kF.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dkh(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.v.j(0.3)
p=A.K(E.kF.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bc,D.bNF,A.p(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fEe,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.m),n,n,n,n,B.hm,n,n,n)],l),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.cbN,B.m),n,n,n,Aa.P9,D.bFq,n,n,n)
if(o.e)k=D.ah4
else k=k.length===0?D.bft:A.cf(new C.dki(k))
return A.c6(n,D.a_B,new A.an(B.a0,n,B.b4,B.t,A.a([D.aSv,A.bo(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bIB(d){var w,v,u=this,t=null,s=u.bcm(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.dc(B.dI,B.z,B.f,new A.a5(300,420,new C.a_s(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aA(t,A.p(t,D.c4W,B.f,t,t,new A.o(B.v.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dk9(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fDR,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fL(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.M,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.l0.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.h,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dka(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.L2.prototype={}
C.a_s.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dr(D.Aw,new C.cS1(m),new C.cS2()),j=m.c,i=D.EB.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mE:B.bb
v=new C.cS3(h)
i=A.a([new A.aa(0,B.H,B.v.j(0.6),D.ezl,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b4(l,l,l,new C.bfT(j.x,h,l),B.aA),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a5,B.a9,B.x,A.a([B.v.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cP(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bb(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.aoS,8,0.85,2.2),v.$4(D.bKs,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aoS,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bKo,A.b4(l,l,l,new C.bfK(h,l),B.aA),l),0,0,0))
r=A.V(D.aDR[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.c(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aB2,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.c(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cR,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.c(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.D,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bKU,A.x(o,B.l,l,w,B.h,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aJS(l),D.fth),l,l,l,46,0,l))
return A.p(l,A.by(D.afF,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.afF,i,new A.a8(B.ay,B.aD,B.x,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bfT.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e2()
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
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
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
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
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
C.bfK.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.T(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.ac
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.fgb,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
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
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=i.j(0.9).gp(0)
d.O(new A.r(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.A(0,this.b)}}
C.v6.prototype={}
C.a_O.prototype={
R(){return new C.bfR()}}
C.bfR.prototype={
goC(){var w=this.d
return w===$?this.d=this.a.c:w},
gzk(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.bd(w.b,B.b6,B.aP),$.az())}return v},
gaEl(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.bd(w.c,B.b6,B.aP),$.az())}return v},
gatN(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.bd(w.y,B.b6,B.aP),$.az())}return v},
t(){var w=this,v=w.gzk(0),u=v.V$=$.az()
v.W$=0
v=w.gaEl()
v.V$=u
v.W$=0
v=w.gatN()
v.V$=u
v.W$=0
w.a2()},
auq(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jK(s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.db2(this,f,u),e===u,s,s,s,s))}return A.bZ(B.bI,r,B.br,s,6,8)},
aAc(d){var w=null,v=B.c.j(0.07)
return A.bC(w,new A.b6(4,A.m(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.ma,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goC(),a0=f.gzk(0),a1=a0.a.a,a2=f.gaEl(),a3=a2.a.a,a4=f.gatN(),a5=d.bh4(a4.a.a,a3,a1)
a1=x.w
a3=A.aE(a6,e,a1).w
a1=A.aE(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a5(190,260,new A.dc(B.dI,B.z,B.f,new A.a5(270,370,new C.a_s(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.aAc("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dbr(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.ds,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.aAc("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dbs(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.ds,!0,B.a7,e,B.ao,e,e,e,e)
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
v.push(A.aA(e,A.x(A.a([p,B.cQ,A.c(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.N,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dbt(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bZ(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b_.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.eH:B.L,2,B.r,-1)
q.push(A.aA(e,A.p(e,A.V(D.aDR[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bE(o,o,o,o),new A.bb(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dbu(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bZ(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.aAc("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dbv(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.ds,!0,B.a7,e,B.ao,e,e,e,e)
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
m.push(A.aA(e,A.x(A.a([j,B.bs,A.c(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.N,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dbw(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bZ(B.bI,m,B.br,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,N.wg,e,e,e)
k=f.goC()
return new A.D(new A.R(0,0,0,a3.f.d),A.bo(!0,new A.cS(new A.aY(0,1/0,0,a1.a.b*0.92),A.cn(A.a([D.h9b,B.af,d,B.aO,a0,B.R,a2,B.aB,D.hfv,B.M,v,B.aB,D.h9k,B.M,q,B.aB,a4,B.aB,p,B.M,m,B.aB,l,A.lc(e,9,""+B.i.S(f.goC().f),36,18,new C.dbx(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,N.wg,e,e,e),B.aj,f.auq(D.a7V,f.goC().r,new C.dby(f),D.dLw),B.af,A.c("BORDER",e,e,e,e,e,e,N.wg,e,e,e),B.aj,f.auq(D.a7e,f.goC().w,new C.dbz(f),D.dLC),B.af,A.c("COVER MATERIAL",e,e,e,e,e,e,N.wg,e,e,e),B.aj,f.auq(D.a7a,f.goC().x,new C.dbB(f),D.dNg),B.aj,A.j9(e,B.b_,e,B.ag,e,new C.dbC(f),e,e,e,D.h3l,f.goC().z),B.by,A.bI(D.h7S,e,new C.dbD(f,a6),A.bp(B.b_,e,e,e,e,B.pl,e,e,new A.b9(A.m(16),B.a1),e,e,e))],w),e,e,S.aol,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aJS.prototype={
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
u.san(D.ccu.az(0,new A.a4(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.blg.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.T()
w=A.L()
w.san(D.cbt.az(0,new A.a4(0,0,a2,a3)))
a4.aE(new A.a4(0,0,a2,a3),w)
v=B.i.cF(a1/112)
u=new A.e2()
u.cT(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.deH[u.av(9)]
j=u.av(14)
J.bs(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a4(n,j,n+m,j+l)
h=A.bw(i,B.hF)
g=new A.ar(B.T,B.Q,B.W,B.X,B.U)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.v,0.45)
e.toString
g.san(new A.a8(B.a5,B.a9,B.x,A.a([f,k,e],w),d,d).az(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.T,B.Q,B.W,B.X,B.U)
e.r=E.kF.j(0.55).gp(0)
a4.aE(new A.a4(g,j,h,j+2),e)
e=new A.ar(B.T,B.Q,B.W,B.X,B.U)
e.r=E.kF.j(0.4).gp(0)
a4.aE(new A.a4(g,q,h,p),e)
t.restore()
j=u.av(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.san(D.caL.az(0,new A.a4(0,r,a2,q)))
a4.aE(new A.a4(0,r,a2,q),p)
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=B.v.j(0.5).gp(0)
p.y=B.l7
a4.aE(new A.a4(0,q,a2,q+14),p)}t=A.L()
t.r=D.bji.j(0.72).gp(0)
a4.aE(new A.a4(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bT(B.z,0.5,B.x,d,0,A.a([D.brX.j(0.22),B.L],w),d,d).az(0,A.bX(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aD(d){return!1}}
C.be_.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cP(14,w*2,v*2.2,v*2,o,o,new A.bP(new A.o(A.ap(D.l0,D.bxi,w/4),o,new A.bE(B.a1,new A.ax(B.v.j(0.12),1,B.r,-1),B.a1,B.a1),B.MR,o,o,B.m),B.bm,o,o),o))}v=x.V
u=A.a([new A.aa(0,B.H,B.v.j(0.35),B.aO4,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kF.j(0.6),o,o,new A.bb(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.l,o,B.ru,B.h,0,B.p),B.f,o,o,new A.o(o,o,o,D.b7s,u,D.ccs,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.aa(0,B.H,B.v.j(0.4),B.du,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aJS(o),D.ftc),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aXW(p.y,r,L.jh,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bC(o,B.eU,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.jh.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fT4,!0,B.a7,o,B.ao,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.jh.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.R,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bC(o,B.eU,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.jh.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.al,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fJi,!0,B.a7,B.Bp,B.ao,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.fSX,o,o,o),B.at,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.jh.j(0.5),o,o,o,o,o,o,o,o,11,B.cR,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.M,A.A(A.a([A.E(A.p(o,o,B.f,D.H0.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fD,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.H0.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.H0.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.h,0,o,o),B.aB],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.jh.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.KH(A.cW(A.a([A.cW(o,o,o,o,o,o,o,o,o,D.fMD,B.a.aw(k,0,1)),A.cW(o,o,o,o,o,o,o,o,o,o,B.a.aY(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.jh.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cb(A.x(n,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hy,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.jh.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.by(B.MR,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bJW,A.x(s,B.am,o,B.e,B.h,0,B.p),o),A.ao(0,new A.bP(new A.o(o,o,o,o,o,new A.a8(B.a5,B.a9,B.x,A.a([B.v.j(0.16),B.L],x.O),o,o),B.m),B.bm,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.MR,v,D.cd_,B.m),o,o,o,o,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.amZ.prototype={
R(){return new C.an_(new A.eK(0,$.az()),new C.bVz(),new C.anh(),D.hUL,null,null)},
gd6(){return this.d}}
C.a2u.prototype={
a9(){return"_Step."+this.b}}
C.an_.prototype={
gCX(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGi(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.No(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gUv(){var w=this.ghi(0)
return w.gzD()==null?"Babu":B.a.i(w.gzD().b)},
a_(){var w,v=this
v.a3()
w=v.ghi(0).gzD()
w=w==null?null:w.c
v.r.b=w===D.oU
w=v.q9(new C.bTV(v))
w.fR(0)
v.x!==$&&A.aS()
v.x=w
v.a3q("Come closer, my children. I am "+v.gUv()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bxS()},
a3q(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.d0(E.a1k,new C.bTP(w))},
bud(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.l(new C.bTY(v))},
aeU(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bu5(){return this.bbU()},
bbU(){var w=this,v=w.gCX()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bTQ(w))
w.a3q(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cB(B.nV,new C.bTR(w))},
cOA(){var w=this
w.l(new C.bTU(w))
w.a3q(w.gCX()[w.as].a)},
LF(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aeL)return
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
t.r=s.a+1.5}q=new A.e2()
q.cT(v*7+d)
p.l(new C.bTT(p,d,u,q))
p.a3q(u?D.dvC[q.av(4)]+" "+w[p.as].d:D.ds_[q.av(3)]+" "+w[p.as].d)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCX()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bIC(t.at,t.ay,p)
t.l(new C.bTW(t,s))
t.a3q(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.C1(t.a.d,s),$async$kM)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.C2(r.d,r.c.a,"fire",t.at*10),$async$kM)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bTX())
w=1
break
case 4:++t.as
t.bbU()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c6(v,D.ZC,new A.an(B.a0,v,B.ad,B.t,A.a([A.bS(0,new A.e7(A.b4(v,v,v,new C.aY0(u,w.r,w.w,u),B.aA),v),0,0,0),A.bo(!0,A.x(A.a([w.cew(0),B.aW,w.bTB()],t),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cew(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,B.Rb,s,s,s,new C.bTS(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCX().length;++w){v=t.as
if(w<v||t.Q===D.b3K)v=B.d_
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bb(u,u,u,u),s,s,B.m),s,7,s,D.bFa,s,s,s,22))}p=A.E(A.x(A.a([D.h02,A.A(p,B.l,s,B.e,B.h,0,s,s)],q),B.B,s,B.e,B.h,0,B.p),1)
v=A.m(14)
u=A.K(B.fK,B.r,1)
return new A.D(D.bL6,A.A(A.a([r,p,A.p(s,A.c("\ud83d\udd25 "+B.i.S(t.cy*100)+"%",s,s,s,s,s,s,B.iV,s,s,s),B.f,s,s,new A.o(B.b7,s,u,v,s,s,B.m),s,s,s,s,B.hm,s,s,s)],q),B.l,s,B.e,B.h,0,s,s),s)},
bTB(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghi(0).gzD()
if(h==null)w=1
else w=h.c===D.oU?0:1
v=j.dx
u=j.db
t=D.qP.j(0.96)
s=A.m(22)
r=A.K(B.d_,B.r,3)
q=A.b4(i,i,i,new C.bqT(w,i),B.aA)
p=A.c(j.Q===D.aeL?j.gUv()+" asks":"Elder "+j.gUv(),i,i,i,i,i,i,D.aXK,i,i,i)
o=j.db
o=B.a.aw(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c_,A.A(A.a([new A.a5(62,62,q,i),B.ar,A.E(A.x(A.a([p,B.bs,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aXX,i,i,i)],n),B.B,i,B.e,B.h,0,B.p),1)],n),B.B,i,B.e,B.h,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbuc(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.aaY("Sit down by the fire",j.gbu4()),i,i,i)
break
case 1:v=A.at(j.aaY("Ask me, Elder",j.gcOz()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCX()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ax(D.lR,2.5,B.r,-1)
v.push(A.aA(i,A.p(i,A.c(u[m],i,i,i,i,i,i,D.aXT,B.K,i,i),B.f,i,D.agi,new A.o(D.alR,i,new A.bE(l,l,l,l),new A.bb(q,q,q,q),i,i,B.m),i,i,i,i,B.x4,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bTM(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bZ(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kl:An.arU
u=A.V(u,v?B.es:D.lR,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.es:D.lR,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCX().length?"Finish":"Next story"
v=A.A(A.a([u,B.aa,q,j.aaY(v,j.gqs(j))],n),B.l,i,B.e,B.h,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gCX().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aYa,i,i,i)],n)
u=j.cx
if(u>0){u=C.aSb(u)
q=C.aSb(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.adb,i,i,i))}v.push(B.M)
v.push(j.aaY("Back to the games",new C.bTN(j)))
v=A.x(v,B.l,i,B.e,B.h,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.R,v],n),B.B,i,B.e,B.O,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aFp,i,B.m),i,i,i,B.zk,B.bg,i,i,i)},
aaY(d,e){var w=null,v=A.m(16),u=A.K(B.d_,B.r,2)
return A.aA(w,A.p(w,A.c(d,w,w,w,w,w,w,A3.LG,w,w,w),B.f,w,w,new A.o(D.lR,w,u,v,w,w,B.m),w,w,w,w,D.bIP,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bqT.prototype={
a4(d,e){O.hrz(d,e.eo(B.J),e.gdl()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aCL.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.bVz.prototype={}
C.tp.prototype={}
C.bqU.prototype={}
C.anh.prototype={
N4(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.iov(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aY0.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.CE(l.d.N4(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bs(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cDV(d,j)
l.bS9(d,j)
l.cMm(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bs(t.save())
t.translate(225,580)
d.nK(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.T()
q=A.L()
p=x.O
o=x.n
q.san(A.ws(B.J,r,A.a([D.bvZ.j(0.55*s),F.Op.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bVr(l,d,j,i)),new A.y(540,new C.bVs(l,d,j,i)),new A.y(546,new C.bVt(l,d,j,i)),new A.y(574,new C.bVu(l,d,j,i)),new A.y(612,new C.bVv(l,d,j,i)),new A.y(650,new C.bVw(l,d,j,i)),new A.y(656,new C.bVx(l,d,j,i))],x.E)
B.d.b0(n,new C.bVy())
for(m=0;m<7;++m)n[m].b.$0()
l.bIU(d,j,i)
l.bVP(d,j)
t.restore()
$.T()
t=A.L()
t.san(A.ws(new A.r(w/2,v*0.6),e.gapb()*0.75,A.a([B.L,D.bjb],p),A.a([0.55,1],o),B.x,k,k,0))
d.aE(new A.a4(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cDV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e2()
h.cT(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.T()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.i.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aI(0,D.eyS),C.iQ(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
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
r=new A.cj(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.aj(i)
l.ac()
s=new A.cj(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.aj(r)
l.ac()
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.b=B.ac
s.c=1.6
s.r=D.blX.gp(0)
s.d=B.bG
s.e=B.dP
d.af(l,s)}},
bS9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aCm[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bY(new A.r(p,m),n*0.74,q*0.5)
k=Ad.z5.j(v)
$.T()
j=new A.ar(B.T,B.Q,B.W,B.X,B.U)
j.r=k.gp(0)
d.c1(l,j)
q=A.bY(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=B.wG.j(u).gp(0)
d.c1(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.r=D.ajc.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cMm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bFE(d,D.eyO,0.9,e,D.hOr,!1,!1,D.b3H,1,!1)
w=$.T().r
v=x.v
u=new A.aH(w,B.ak,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bA())
t=A.L()
t.r=D.al9.gp(0)
d.af(u,t)
C.bFE(d,D.eyQ,0.95,e,D.hOf,!1,!1,D.b3I,1,!0)
t=new A.aH(w,B.ak,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.cj(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.cj(431,553,421,548))
t.E(new A.bA())
u=A.L()
u.r=F.GG.gp(0)
d.af(t,u)
u=A.bY(D.eyP,8,28)
t=A.L()
t.r=D.byp.gp(0)
d.c1(u,t)
C.bFE(d,new A.r(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hOt,!0,!1,D.Yp,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c1(A.bY(new A.r(s+q*16,r-6),16,11),C.iQ(D.al0,1.8))
u=q<0
C.bFE(d,new A.r(s-q*6,r),0.62,e,D.hOw,!1,u,D.Yp,2.2,!1)
C.bFE(d,new A.r(s-q*32,r+4),0.58,e+1,D.hOn,!1,u,D.Yp,2.2,!1)
this.bYy(d,D.eyt,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bY(new A.r(o,n),8,11)
k=p===1
j=k?D.akX:D.alz
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.r=j.gp(0)
d.c1(l,i)
l=k?D.akX:D.alz
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.b=B.ac
k.c=1
k.r=B.as.gp(0)
k.d=B.bG
k.e=B.dP
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.b=B.ac
k.c=1
k.r=B.as.gp(0)
k.d=B.bG
k.e=B.dP
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bY(D.aa6,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.ajB.gp(0)
d.c1(u,t)
u=A.bY(D.aa6.a7(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.boa.gp(0)
d.c1(u,t)
t=new A.aH(w,B.ak,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bA())
u=A.L()
u.r=D.bon.gp(0)
d.af(t,u)
u=D.aa6.a7(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.it.gp(0)
d.O(u,1.1,t)
v=new A.aH(w,B.ak,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.cj(180,588+w*(h?6:0),178,595))
d.af(v,C.iQ(D.ajB,3.5))},
bYy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a7(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.T()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.b=B.ac
m.c=2
m.r=D.ZQ.gp(0)
m.d=B.bG
m.e=B.dP
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bY(k,17,32)
v=$.T()
r=A.L()
r.r=D.GE.gp(0)
d.c1(w,r)
r=A.bY(k.a7(0,D.exU),7,26)
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
s=A.bY(k.a7(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.GE.gp(0)
d.c1(s,v)
v=-11+l
d.ah(k.a7(0,new A.r(22,v)),k.a7(0,new A.r(21,-17+l)),C.iQ(D.ZQ,1.6))
d.ah(k.a7(0,new A.r(26,v)),k.a7(0,new A.r(28,-16+l)),C.iQ(D.ZQ,1.6))
v=k.a7(0,new A.r(26,-8+l))
s=A.L()
s.r=B.v.gp(0)
d.O(v,0.9,s)
d.ah(k.a7(0,new A.r(26,-3+l)),k.a7(0,new A.r(26,1+l)),C.iQ(D.brb,1.4))
d.ah(k.a7(0,D.eAN),k.a7(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iQ(D.GE,2.4))},
bVN(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bY(new A.r(225+u*36,574+(t*13+6)),8,11)
$.T()
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=D.bx1.gp(0)
a6.c1(u,t)}}u=A.bY(D.aa8.a7(0,B.cz),17,52)
$.T()
t=A.L()
t.r=D.biK.gp(0)
a6.c1(u,t)
t=A.bY(D.aa8.a7(0,B.cz),12,44)
u=D.bmm.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c1(t,s)
for(r=0;r<3;++r){v=D.drr[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
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
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.b=B.ac
n.c=2
n.r=t.gp(0)
n.d=B.bG
n.e=B.dP
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.fc7,D.fcI,D.fdS,D.fec,D.fdQ]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bug,D.bqw,D.bwr][k]
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
a3=new A.i3(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.aj(a4)
a2.ac()
g=new A.i3(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.aj(a3)
a2.ac()
g=new A.bA()
f.push(g)
f=a2.f
if(f!=null)g.aj(f)
a2.ac()
g=new A.ar(B.T,B.Q,B.W,B.X,B.U)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.i.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.alx.j((1-a5)*0.9)
$.T()
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.i.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ajc.j(0.1*(1-a5))
$.T()
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bVP(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.byA.j(0.18*p)
$.T()
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.T,B.Q,B.W,B.X,B.U)
n.r=D.bs1.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c7L(d,e){switch(d){case 0:return e.b?D.hOh:D.b2X
case 1:return e.b?D.hOv:D.b2V
case 2:return D.b2U
case 3:return D.b2T
case 4:return D.b2W
default:return D.b2Y}},
aEA(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
RP(d,e,f,g){var w,v=this,u=D.a7m[e],t=v.c7L(e,g),s=new C.bqU(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a7m[e],l=e===0
m=B.i.D(((l?D.aNX:D.aO2).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.aad
s.as=D.F2
if(l){s.a=o?v.aEA(f,0):0
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.ey1
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.ezp
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
s.Q=D.eBJ
s.as=D.aOf}if(e===2&&g.x!=null&&f<g.y){s.a=v.aEA(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aEA(f,e*3)
s.b=0.5
s.c=0.4}}C.hKG(d,u.a,u.b*1.2,t,s,f,e,null)},
bIU(d,e,f){var w=new C.bVq(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd4(d){return this.c}}
C.agS.prototype={
a9(){return"_Stand."+this.b}}
C.aeN.prototype={}
C.lK.prototype={}
C.bUa.prototype={
bDp(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aS()
this.c=s},
Gw(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b0(r,new C.bUb())
return r},
asr(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aOh(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
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
gzD(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b0(w,new C.bUc(this))
return B.d.gG(w)}}
C.avn.prototype={}
C.zQ.prototype={}
C.alQ.prototype={
gCs(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.X(w,new C.bOX(),A.U(w).k("X<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.N6.prototype={
gaqu(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCs(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d4Y(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaqu(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lK(B.a.i(s.a),p,B.d.cd(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bc9.prototype={}
C.aaR.prototype={}
C.bjy.prototype={}
C.agQ.prototype={}
C.al8.prototype={
R(){return new C.al9(B.bH,A.a([],x.cC),A.a([],x.e4),null,null)},
gd6(){return this.d}}
C.al9.prototype={
gNl(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGi(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbcf(){var w,v=this,u=v.e
if(u===$){w=v.q9(v.gcjZ())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
a_(){this.a3()
this.gbcf().fR(0)},
t(){this.gbcf().t()
this.bxN()},
fR(d){this.l(new C.bN5(this))},
ck_(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fK(0,v)
if(w.c!=null)w.l(new C.bN0())},
bay(){var w,v,u,t=this,s=t.r
B.d.a6(s)
w=t.gNl()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bjy(u,(u+0.5)/v,w[t.x].b[u]))},
fK(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.br(w,new C.bN6())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.caE()
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
m.atZ(v,0.8,B.d_)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.atZ(m.cy,0.8,G.nH)
m.b_R("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.atZ(q,0.88,D.lR)
p=m.gNl()[m.x]
n=p.c
if(u===n){m.b_R("The right gourd fell! It was "+p.b[n]+".")
return}}}},
atZ(d,e,f){var w,v,u,t=new A.e2()
t.cT(B.i.S(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agQ(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b_R(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.QV()}},
caE(){var w=this
if(w.x+1>=w.gNl().length){w.QV()
return}++w.x
w.bay()},
QV(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$QV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gNl().length
r=C.bIC(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bMZ())
w=2
return A.b(C.C1(u.a.d,r),$async$QV)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.C2(t.d,t.c.a,"catch",u.z),$async$QV)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bN_())
return A.h(null,v)}})
return A.i($async$QV,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cex()
else w=v.ch?v.cey():A.at(new A.D(B.eJ,A.x(A.a([D.aZ9,B.M,D.h1L,B.R,D.h7X,B.ec,C.uG("Play",v.gf1(v),B.d_,B.fO,D.fJ)],x.p),B.l,u,B.e,B.O,0,B.p),u),u,u,u)
return new C.tP("Calabash Catch",w,B.ff,u)},
cey(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hQ:B.Ip
p.push(A.V(u,v?B.aC:B.bY,r,r,r,22))}p.push(B.aW)
v=s.x
u=s.gNl()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aXJ,r,r,r))
p.push(B.bc)
v=A.m(14)
p.push(A.p(r,A.c(""+s.z,r,r,r,r,r,r,B.iV,r,r,r),B.f,r,r,new A.o(B.bx,r,r,v,r,r,B.m),r,r,r,r,A1.D2,r,r,r))
p=A.A(p,B.l,r,B.e,B.h,0,r,r)
v=A.m(18)
t=A.K(B.d_,B.r,3)
return A.x(A.a([new A.D(D.bGz,p,r),A.p(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fMv,B.K,r,r),B.f,r,r,new A.o(D.qP,r,t,v,r,r,B.m),r,r,r,B.f2,B.bg,r,r,1/0),B.aj,A.E(A.cf(new C.bN4(s)),1)],q),B.l,r,B.e,B.h,0,B.p)},
cex(){var w=this,v=null,u=A.at(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qr,v,v,v),v,v,v),t=A.at(A.c(""+w.Q+" of "+w.gNl().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.WL,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cn(A.a([D.bga,u,t,B.aO,new C.IG(s,r,w.cx,v),B.aO,A.at(C.uG("Back to the games",new C.bMY(w),B.d_,B.kk,D.fJ),v,v,v)],x.p),v,v,B.ae,v,v,B.ah,!1)}}
C.beH.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.T(),a3=A.L()
a3.san(A.jN(B.J,new A.r(0,a0),D.d80,G.aCD,B.x,e))
a4.aE(new A.a4(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=G.Ot.gp(0)
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
w.r=D.bnk.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aH(a2.r,B.ak,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.cj(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.cj(r+14,t,r+26,w))
a2.E(new A.bA())
w=A.L()
w.r=D.aid.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.csH[q]
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=D.aid.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=D.ahv.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bok.gp(0)
a4.aE(new A.a4(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=D.ajR.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bY(new A.r(u,s),12,54)
$.T()
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
l.r=D.lR.j(0.6).gp(0)
a4.c1(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bs(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.T()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=D.aiW.gp(0)
a4.O(D.exh,14,m)
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=D.btj.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.exi,D.eyp,m)
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.san(new A.amJ(D.eAx,46,D.dhq,B.vJ,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bY(D.eAD,8,12)
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
l.r=B.c.j(0.35).gp(0)
a4.c1(m,l)
k=new A.j1(new A.eG(n.c,e,e,B.cY,e,e,e,e,e,e,D.fKg),B.K,B.cc,new A.kg(1),e,e,3,e,B.cd,e,B.cK)
k.nA(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bw(A.bY(B.cP,m.gb4(m)+8,l),B.h2)
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
l.r=D.qP.gp(0)
a4.aq(j,l)
l=new A.ar(B.T,B.Q,B.W,B.X,B.U)
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
C.isp(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dY,(w+1)/2)
h=A.bY(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aH($.T().r,B.ak,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.cj(h.gbD().a,s+8,w+8,s))
a3.E(new A.bA())
m=A.L()
m.r=D.a_H.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=D.Ci.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.nH.gp(0)
a4.aE(new A.a4(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bnq.gp(0)
a4.c1(new A.a4(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fY(e,B.cK,e,e,e,A.cW(e,e,e,e,e,e,e,e,e,A.l(e,e,B.d_.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Ec,e,e),"+"+a2),B.a7,B.cc,e,B.e3,B.cd)
k.eL()
k.a4(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.Rb.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aCJ(w.c,w.f,v),B.aA),s=A.m(10),r=A.K(B.bB,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cQ,A.p(v,A.c(w.d,v,1,B.a2,v,v,v,D.fCE,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.m),v,v,v,v,B.ng,v,v,v)],x.p),B.l,v,B.e,B.O,0,B.p),v)},
ga0(d){return this.e}}
C.aCJ.prototype={
a4(d,e){var w=e.eo(B.J),v=e.gdl(),u=this.c?0.8:0
return O.hrz(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aB9.prototype={}
C.avZ.prototype={
R(){return new C.aw_(A.S(x.S,x.cq),null,null)},
gd6(){return this.d}}
C.aw_.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hQn(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaGD(){var w=this.z
return w===$?this.z=this.XX(0):w},
gj0(){var w,v=this.Q
if(v===$){w=this.gkR()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c2(w,-1,!1,x.S)}return v},
XX(d){var w,v,u,t,s=this.gkR()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aB9(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aB9(v[t],u[t],-1))
v=new A.e2()
v.cT(this.a.e*31+d)
B.d.dY(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eR$
u.b=!1
B.d.a6(u.a)
u=u.goJ()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.e0$.a.a6(0)
v.qI()}this.byf()},
cUG(d,e){var w,v,u,t,s,r=this
if(d>=r.gj0().length||r.gj0()[d]!==-1||B.d.q(r.gj0(),e))return
w=r.gaGD()[e]
v=r.gkR()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.ct1(r,e,w,v))
A.cB(B.lY,new C.ct2(r))
return}++r.r
u=A.br(null,B.hx,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.ct3(r,d,e,w,v))
u.ct(0)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkR()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cE(n,0,new C.ct4())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.ct5(t,r))
w=5
return A.b(C.C1(t.a.d,r),$async$kM)
case 5:t.x=f
o=t.a
w=6
return A.b(C.C2(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.l(new C.ct6())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eR$
p.b=!1
B.d.a6(p.a)
p=p.goJ()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.e0$.a.a6(0)
q.qI()}o.a6(0)
t.l(new C.ct7(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qr,p,p,p),p,p,p)
v=r.f
v=A.at(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.WL,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tP(q,A.cn(A.a([D.ah3,w,v,B.aO,new C.IG(u,t,r.ch,p),B.aO,A.at(C.uG("Back to the games",new C.csY(d),B.d_,B.kk,D.fJ),p,p,p)],x.p),p,p,B.ae,p,p,B.ah,!1),B.ff,p)}w=r.gkR()
v=r.e
s=w[v]
return new C.tP(q,new A.D(B.tz,A.x(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aXE,B.K,p,p),A.E(A.cf(new C.csZ(r,s)),1)],x.p),B.l,p,B.e,B.h,0,B.p),p),B.ff,p)}}
C.be8.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.X(b2,new C.cT5(),A.U(b2).k("X<1>")).gJ(0),b4=a9.b,b5=b4.a7(0,B.Kr)
$.T()
w=A.L()
w.r=D.lS.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a7(0,D.ex4)
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
o=new A.cj((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.aj(n)
j.ac()
if(m<1)for(o=new A.aH(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),i=new A.v4(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bi(A.jU(b1));--h
g=new A.BZ(i,h)
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
a1=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a1.r=B.aT.gp(0)
a1.b=B.ac
a1.c=3
b6.af(new A.aH(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aH(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),k=new A.v4(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jU(b1));--a0
k.jP()
a1=n[a0].b
a1===$&&A.d()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.T()
a4=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a4.r=D.H6.gp(0)
a4.b=B.ac
a4.c=h
a4.d=B.bG
b6.af(new A.aH(l,a2,b0,new A.b7([new A.BZ(k,a0),0,a1*m,!0]),a3),a4)
k.jP()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jP()
a5=n[a0].Wo(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bY(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a3.r=B.bf.gp(0)
b6.c1(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.j1(D.fC7,B.a7,B.cc,new A.kg(1),b0,b0,b0,b0,B.cd,b0,B.cK)
a8.eL()
a8.a4(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aD(d){return!0}}
C.azW.prototype={
R(){return new C.azX(A.aR(x.S))},
gd6(){return this.d}}
C.azX.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hRh(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
a_(){this.a3()
this.baH()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
baH(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.d0(B.tv,new C.cHZ(this))},
brO(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkR()[v.e]
if(w.e[d]===w.b)v.l(new C.cI6(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cI7(v,d))
A.cB(B.j3,new C.cI8(v))}},
d_e(){var w=this
if(!w.as&&w.f<w.gkR()[w.e].d.length)w.l(new C.cI9(w))},
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
t.l(new C.cIa(t,s))
w=5
return A.b(C.C1(t.a.d,s),$async$kM)
case 5:t.y=f
q=t.a
w=6
return A.b(C.C2(q.d,q.c.a,"who",t.r),$async$kM)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cIb())
w=1
break
case 4:t.l(new C.cIc(t))
t.baH()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.c(""+a0.w+" of "+a0.gkR().length+" guessed",a2,a2,a2,a2,a2,a2,B.qr,a2,a2,a2),a2,a2,a2)
v=A.at(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.WL,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tP(a1,A.cn(A.a([D.bgl,w,v,B.aO,new C.IG(u,t,a0.ax,a2),B.aO,A.at(C.uG("Back to the games",new C.cI0(a3),B.d_,B.kk,D.fJ),a2,a2,a2)],x.p),a2,a2,B.ae,a2,a2,B.ah,!1),B.ff,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkR()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.LM,B.K,a2,a2),B.R,A.at(A.ly(new C.cI1(a0,r),a2,B.aZ,B.hx,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ax(B.d_,2,B.r,-1)
k=o+1
w.push(new A.rl(new A.bq(0,1,u),new C.cI2(),A.p(a2,new A.c1(B.aK,B.e,B.h,B.l,a2,B.p,a2,0,A.a([new A.qT(A.c(""+k,a2,a2,a2,a2,a2,a2,B.op,a2,a2,a2),D.lR,a2,12,a2),B.ar,new A.bu(1,B.b8,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fPa,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qP,a2,new A.bE(l,l,l,l),new A.bb(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cB,B.bg,a2,a2,a2),B.aZ,B.j3,a2,new A.bg("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bL(!1,D.hfY,a2,a2,!0,a2,a2,a2,a0.gd_d(),a2,a2),a2,a2,a2))
w.push(B.M)
if(a0.as){u=D.lS.j(0.2)
q=A.m(16)
p=A.K(D.lS,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fQ,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.R,C.uG(v,a0.gqs(a0),B.d_,B.jE,D.fJ)],t),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bF,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dx:B.d_.j(0.2)
g=new A.aP(16,16)
l=new A.ax(n.q(0,o)?B.fq:B.d_,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bY:B.c
d=n.q(0,o)?B.y1:a2
t.push(new A.rl(new A.bq(0,i,u),new C.cI3(),A.aA(a2,A.p(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.agb,new A.o(h,a2,new A.bE(l,l,l,l),new A.bb(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jC,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cI4(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.aZ,B.mq,a2,new A.bg("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bZ(B.fV,t,B.br,a2,10,10))}return new C.tP(a1,A.cn(w,a2,a2,B.anS,a2,a2,B.ah,!1),B.ff,a2)}}
C.aAU.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.aIg.prototype={
b_(){this.b8()
this.b6()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdR())
w.bd$=null
w.a2()}}
C.agE.prototype={
as_(d){},
asv(){var w=this,v=w.q9(new C.feK(w))
v.fR(0)
w.Mt$!==$&&A.aS()
w.Mt$=v}}
C.aM6.prototype={
gboa(d){var w=this.c
return B.a.aw(w,0,Math.min(this.d,w.length))},
Ww(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.d0(E.a1k,new C.fp6(w))},
bub(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.an7.prototype={
R(){return new C.an8(new C.anh(),A.a([],x.t),new A.eK(0,$.az()),$,0,null,null)},
gd6(){return this.d}}
C.an8.prototype={
gNj(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGi(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.No(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqz(){var w=this.r
return w===$?this.r=new C.aM6(new C.bUX(this)):w},
gaqQ(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gNj()[v].c)u.push(1)
return u.length},
gbnu(){var w=this.ghi(0)
return w.gzD()==null?"Elder":B.a.i(w.gzD().b)},
a_(){this.a3()
this.asv()},
t(){var w,v=this
v.gqz().t()
v.f.t()
w=v.Mt$
w===$&&A.d()
w.t()
w=v.qg$
w.V$=$.az()
w.W$=0
v.bxV()},
cOM(){var w=this
w.l(new C.bUU(w))
w.gqz().Ww(w.gNj()[w.x].a)},
LF(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqz()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qg$.a
v.ax=u
v.ay=u+1
v.l(new C.bUS())
A.cB(B.hx,new C.bUT(v))},
brK(){var w=this.gaqQ(0)/this.gNj().length*100
if(w>=90)return D.f8U
if(w>=75)return D.f6M
if(w>=60)return D.eXZ
if(w>=45)return D.f0z
return D.eSd},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cwU()
w=A.bS(0,new A.e7(A.b4(m,m,m,new C.bv_(n,n.qg$),B.aA),m),0,0,0)
if(!n.Q){v=D.qP.j(0.96)
u=A.m(20)
t=A.K(B.d_,B.r,3)
u=A.p(m,A.x(A.a([A.c("Elder "+n.gbnu()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aYy,B.K,m,m),B.R,C.uG("Start the test",n.gCi(),B.d_,B.jl,D.fJ)],x.p),B.l,m,B.e,B.O,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.m),m,m,m,m,B.bF,m,m,m)
v=u}else{v=n.x
u=n.gNj()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aYA,m,m,m)
if(n.Q){t=n.gqz()
t=t.d<t.c.length}else t=!1
if(t)u=D.fuB
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ax(D.Ci,4,B.r,-1)
s.push(A.aA(m,A.p(m,A.c(q[r],m,m,m,m,m,m,D.fFZ,B.K,m,m),B.f,m,D.agb,new A.o(D.bjg,m,new A.bE(o,o,o,o),new A.bb(p,p,p,p),m,m,B.m),m,m,m,m,B.Pf,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bUV(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bZ(B.fV,s,B.br,new A.bg("o"+t,x.W),8,8)}u=A.x(A.a([v,B.aj,A.oT(u,B.nb,A.q7(),B.aZ,B.aZ,A.LY())],x.p),B.l,m,B.e,B.O,0,B.p)
v=u}return new C.tP("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.ff,m)},
cwU(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.brK(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gNj()[v].c)g.push(v)
u=A.m(22)
t=A.K(B.d_,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fKz,B.K,i,i)
r=A.c("Signed by Elder "+j.gbnu(),i,i,i,i,i,i,D.fJa,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fOv,i,i,i),D.eJM],q)
o=A.c(h.b,i,i,i,i,i,i,D.fQu,i,i,i)
n=j.gaqQ(0)
m=j.gNj()
u=A.p(i,A.x(A.a([D.h0Y,B.at,s,r,B.R,new A.an(B.z,i,B.ad,B.t,p,i),o,B.aj,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.adb,i,i,i),B.M,D.auS],q),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(D.qP,i,t,u,i,i,B.m),i,i,i,i,B.f9,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.IG(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.hh1,B.M],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ax(B.bx,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([A.c(p.a,i,i,i,i,i,i,B.hh,i,i,i),B.at,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fLO,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fO6,i,i,i)],q),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.dx,i,new A.bE(k,k,k,k),new A.bb(r,r,r,r),i,i,B.m),i,i,i,B.cB,B.bg,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.at(C.uG("Back to the games",new C.bUO(j),B.d_,B.kk,D.fJ),i,i,i))
return new C.tP("Village School",A.cn(s,i,i,B.bS,i,i,B.ah,!1),B.ff,i)}}
C.bv_.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qg$.a
a0.CE(e.f.N4(a1))
w=C.hmD(a1)
v=a0.c
J.bs(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqz()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d1S[s]-6
$.T()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=D.GS.gp(0)
a0.aE(new A.a4(u,340,u+12,450),r)}u=A.bw(D.ab7.cs(10),B.ij)
$.T()
r=A.L()
r.r=D.Ci.gp(0)
a0.aq(u,r)
r=A.bw(D.ab7,B.iD)
u=A.L()
u.san(A.jN(new A.r(30,96),new A.r(420,346),D.dnc,f,B.x,f))
a0.aq(r,u)
q=new A.e2()
q.cT(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bY(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=B.c.j(0.025).gp(0)
a0.c1(o,r)}u=A.L()
u.r=I.akH.gp(0)
a0.aE(new A.a4(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aE(D.flX,u)
u=A.L()
u.r=B.bM.gp(0)
a0.aE(D.fm0,u)
u=A.bw(D.flR,B.hq)
r=A.L()
r.r=D.a_H.gp(0)
a0.aq(u,r)
n=B.i.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqz().gboa(0)
m=A.fY(f,B.cK,f,7,f,A.cW(f,f,f,f,f,f,f,f,f,D.fSQ,u+(t?"|":"")),B.a7,B.cc,f,B.e3,B.cd)
m.nA(346)
J.bs(v.save())
u=A.hR(D.ab7)
r=$.lC()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hR(new A.a4(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bw(new A.a4(u,r,u+40,r+90),B.h2)
u=A.L()
u.r=D.bzt.gp(0)
a0.aq(r,u)}}else{m=A.fY(f,B.cK,f,f,f,D.fCn,B.K,B.cc,f,B.e3,B.cd)
m.nA(340)
m.a4(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqz().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.T,B.Q,B.W,B.X,B.U)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghi(0).gzD()
i=(u==null?f:u.c)===D.oU?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.feL(d,a0,i,t,h,D.eye)),new A.y(520,new C.feM(a0,d,t)),new A.y(575,new C.feN(a0,d,t)),new A.y(585,new C.feO(this,a0,d,t)),new A.y(615,new C.feP(this,t,a0,d,h))],x.E)
B.d.b0(g,new C.feQ())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cez(d,e){var w,v,u,t,s,r,q,p=$.T(),o=A.a([],x.v),n=new A.aH(p.r,B.ak,null,null,o)
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
C.an5.prototype={
R(){return new C.an6(new C.anh(),A.S(x.S,x.i),new A.eK(0,$.az()),$,0,null,null)},
gd6(){return this.d}}
C.an6.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hQc(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj0(){var w=this.z
return w===$?this.z=this.G4(0):w},
gaMT(){var w,v,u,t,s=this,r=s.Q
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
s=J.e4(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e2()
u.cT(this.a.e+d*7)
B.d.dY(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eH(u,new C.bUA())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
a_(){this.a3()
this.asv()},
t(){var w,v=this
v.e.t()
w=v.Mt$
w===$&&A.d()
w.t()
w=v.qg$
w.V$=$.az()
w.W$=0
v.bxU()},
as_(d){var w,v,u,t,s,r=this,q=r.gj0().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cd(u===$?r.z=r.G4(0):u,v)
s=r.gaMT()
s[v]=s[v]+(450*(t+0.5)/q-r.gaMT()[v])*Math.min(1,w)}},
d4D(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj0().length)return
w=v.y
if(w===-1){v.l(new C.bUL(v,d))
return}if(w===d){v.l(new C.bUM(v))
return}v.l(new C.bUN(v,B.d.cd(v.gj0(),v.y),d,B.d.cd(v.gj0(),d)))},
cPu(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.G4(0):u).length))break
t=s.gkR()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.G4(0):u)[v]]===v);++v}s.l(new C.bUG(s,B.d.cw(w,new C.bUH())))},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkR().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bUI(t,s))
w=5
return A.b(C.C1(t.a.d,s),$async$kM)
case 5:t.x=f
q=t.a
w=6
return A.b(C.C2(q.d,q.c.a,"lineup",t.r*10),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bUJ())
w=1
break
case 4:t.l(new C.bUK(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.c(""+l.r+" of "+l.gkR().length+" lines right",k,k,k,k,k,k,B.qr,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tP("Line Up",A.cn(A.a([D.ah3,w,B.aO,new C.IG(v,u,l.ch,k),B.aO,A.at(C.uG("Back to the games",new C.bUC(d),B.d_,B.kk,D.fJ),k,k,k)],x.p),k,k,B.ae,k,k,B.ah,!1),B.ff,k)}w=A.a([],x.t)
for(t=0;v=l.gkR(),t<v[l.f].d.length;++t)w.push(t)
B.d.b0(w,new C.bUD(l))
u=A.bS(0,A.cf(new C.bUE(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aYA,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fL1,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fNk,B.K,k,k)],q),B.l,k,B.e,B.h,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.v.j(0.7)
o=A.m(16)
n=l.ax
m=A.K(n?D.lS:G.nH,B.r,2)
r.push(A.p(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.O(w,new C.bUF(l),x.cM).aL(0,", then ")+".",k,k,k,k,k,k,D.fPz,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.m),k,k,k,B.d7,B.bg,k,k,1/0))}if(!l.at)r.push(C.uG("That is my line!",l.gcPt(l),B.d_,B.hn,D.fJ))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uG(w,l.gqs(l),B.d_,B.jE,D.fJ))}return new C.tP("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.O,0,B.p),k,k,12,12,k,k)],q),k),B.ff,k)}}
C.blo.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qg$.a
c7.CE(c5.e.N4(c8))
w=C.hmD(c8)
v=c7.c
J.bs(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj0().length
t=$.T().r
s=x.v
r=new A.aH(t,B.ak,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.cj(225,500,440,470))
q=A.L()
q.r=D.a_H.gp(0)
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
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=[B.d_,G.nH,D.lS,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b2D(c7,"OLDEST",D.ezc,B.d_)
this.b2D(c7,"YOUNGEST",D.eyF,B.bf)
t=A.bw(D.flL,B.h2)
s=A.L()
s.r=D.GS.gp(0)
c7.aq(t,s)
s=A.bw(D.flK,B.iD)
t=A.L()
t.r=D.Ci.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b0(t,new C.dvb())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cd(a1===$?c5.z=c5.G4(0):a1,f)
o=c5.gaMT()[f]
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
a9=new A.ar(B.T,B.Q,B.W,B.X,B.U)
a9.r=B.d_.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.drg[B.o.F(b0,6)]
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
else b9=a3?D.eBg:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aOf
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.T8(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Kt,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.j1(new A.eG(a8,c4,c4,B.cY,c4,c4,c4,c4,c4,c4,D.fIF),B.a7,B.cc,new A.kg(1),"\u2026",c4,1,c4,B.cd,c4,B.cK)
c1.nA(q)
c2=A.bw(A.bY(new A.r(o,650),24,c1.b.c+16),B.h2)
$.T()
a8=new A.ar(B.T,B.Q,B.W,B.X,B.U)
if(a6)a9=B.iM
else a9=a7?B.to:D.qP
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.T,B.Q,B.W,B.X,B.U)
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
c3=new A.j1(new A.eG(""+(a2+1),c4,c4,B.cY,c4,c4,c4,c4,c4,c4,D.fIZ),B.a7,B.cc,new A.kg(1),c4,c4,c4,c4,B.cd,c4,B.cK)
c3.eL()
c3.a4(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.bs(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bY(B.J,4,8)
$.T()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=[B.d_,G.nH,D.lS,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aE(q,m)
v.restore()}v.restore()},
b2D(d,e,f,g){var w,v,u=null,t=A.fY(u,B.cK,u,u,u,A.cW(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Ec,u,u),e),B.a7,B.cc,u,B.e3,B.cd)
t.eL()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aI(0,new A.r(v/2,w.gb4(w)/2)))},
aD(d){return!1}}
C.a2N.prototype={
a9(){return"_Trip."+this.b}}
C.an1.prototype={
R(){return new C.an2(D.Yw,new A.eK(0,$.az()),$,0,null,null)},
gd6(){return this.d}}
C.an2.prototype={
gDR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGi(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.No(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqz(){var w=this.f
return w===$?this.f=new C.aM6(new C.bUm(this)):w},
gUv(){var w=this.ghi(0)
return w.gzD()==null?"Grandma":B.a.i(w.gzD().b)},
a_(){this.a3()
this.asv()},
t(){var w,v=this
v.gqz().t()
w=v.Mt$
w===$&&A.d()
w.t()
w=v.qg$
w.V$=$.az()
w.W$=0
v.bxT()},
as_(d){var w,v,u,t=this
if(t.r!==D.aeW)return
w=B.dQ.aA(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDR()
if(v+1>=u.length){t.r=D.aeX
t.Xs()}else{++t.w
t.ay=!1
t.r=D.Yx
t.gqz().Ww(u[t.w].a)}if(t.c!=null)t.l(new C.bUk())}},
Xs(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Xs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqz().Ww("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDR().length
r=C.bIC(t,u.z,s)
u.as=r
w=2
return A.b(C.C1(u.a.d,r),$async$Xs)
case 2:u.at=e
s=u.a
w=3
return A.b(C.C2(s.d,s.c.a,"journey",u.x*10),$async$Xs)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bUe())
return A.h(null,v)}})
return A.i($async$Xs,v)},
bt3(){this.aVD()},
aVD(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.aeW
if(w.c!=null)w.l(new C.bUf())},
LF(d){var w,v,u,t,s=this
if(s.r!==D.Yx)return
w=s.gDR()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bUj(s,d,v))
u=s.gqz()
t=s.w
u.Ww(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cUF(){if(this.r!==D.BQ)return
this.aVD()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.e7(A.b4(s,s,s,new C.bkO(t,t.qg$),B.aA),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDR().length;++w){v=t.w
if(w<v||t.r===D.aeX)v=B.d_
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.bu(1,B.b8,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bb(u,u,u,u),s,s,B.m),s,7,s,B.xa,s,s,s,s),s))}p.push(B.ba)
p.push(D.h2E)
return new C.tP("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.h,0,s,s),s,s,12,12,2,s),A.ao(10,t.coq(),s,s,10,10,s,s)],q),s),B.ff,s)},
coq(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bUi(o),l=D.qP.j(0.96),k=A.m(22),j=A.K(B.d_,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.c("A long drive to the village of Elder "+o.gUv()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aYy,B.K,n,n),B.R,C.uG("Start the journey",o.gbt2(),B.d_,D.bUj,D.fJ)],x.p),B.l,n,B.e,B.O,0,B.p)
break
case 3:w=D.bfW
break
case 1:w=o.w
v=o.gDR()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ax(D.lR,2.5,B.r,-1)
t.push(A.aA(n,A.p(n,A.c(r[s],n,n,n,n,n,n,D.aXT,B.K,n,n),B.f,n,D.agi,new A.o(D.alR,n,new A.bE(p,p,p,p),new A.bb(q,q,q,q),n,n,B.m),n,n,n,n,B.x4,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bUg(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.M,A.bZ(B.bI,t,B.br,n,8,8)],u),B.B,n,B.e,B.O,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDR().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.M,new A.bK(B.a9,n,n,C.uG(v,o.gcUE(),B.d_,B.jE,D.fJ),n)],x.p),B.B,n,B.e,B.O,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUv()),B.M,A.c(""+o.x+" of "+o.gDR().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aYa,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aSb(v)
u=C.aSb(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.adb,n,n,n))}w.push(B.M)
w.push(A.at(C.uG("Back to the games",new C.bUh(o),B.d_,B.kk,D.fJ),n,n,n))
w=A.x(w,B.B,n,B.e,B.O,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aFp,n,B.m),n,n,n,n,B.bg,n,n,n)}}
C.bkO.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qg$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDR(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.aeW,d2=c7*0.5
c8=A.ap(D.bkN,D.bvH,d0)
c8.toString
w=A.ap(D.ZS,G.ajs,d0)
w.toString
v=A.ap(B.uS,D.bu1,d0)
v.toString
$.T()
u=A.L()
t=x.O
u.san(A.jN(B.J,new A.r(0,d2),A.a([c8,w,v],t),G.a5R,B.x,c3))
d3.aE(new A.a4(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.ws(s,60,A.a([D.buq,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.a_4.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dHK[o]
$.T()
u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
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
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.r=A.ap(l===0?D.bjj:D.byS,D.bot,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.ceA(d3,new A.r(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.T()
w=A.L()
v=A.ap(D.al0,D.H6,d0)
v.toString
w.san(A.jN(new A.r(0,d2),new A.r(0,c7),A.a([v,D.bus],t),c3,B.x,c3))
d3.aE(new A.a4(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bnG.gp(0)
d3.aE(new A.a4(0,a0,c6,a1),w)
w=A.L()
w.r=D.byt.gp(0)
d3.aE(new A.a4(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.T,B.Q,B.W,B.X,B.U)
u.r=I.NI.gp(0)
d3.aE(new A.a4(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.T()
b2=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b2.r=D.biY.gp(0)
d3.aE(new A.a4(b0,v,b0+52,u),b2)
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
b0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.bwA.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b1.r=D.fJ.gp(0)
d3.aE(new A.a4(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.GS.gp(0)
d3.aE(new A.a4(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bw(new A.a4(b0,a4,b0+60,a5),B.jJ)
b0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.bzZ.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.Ci.gp(0)
b0.b=B.ac
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.j1(new A.eG(b6,c3,c3,B.cY,c3,c3,c3,c3,c3,c3,D.fH4),B.a7,B.cc,new A.kg(1),c3,c3,c3,c3,B.cd,c3,B.cK)
b7.eL()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.r(b4-b1/2,a2-b0.gb4(b0)/2))
if(a7)b8=c4.r===D.aeX
else if(r===c4.w){b0=c4.r
b0=b0===D.Yx||b0===D.BQ
b8=b0}else b8=!1
if(a7){b0=c4.ghi(0).gzD()
b9=(b0==null?c3:b0.c)===D.oU?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqz()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.BQ
b0=c0?C.hMa(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Yx?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.T8(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bKh(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.T()
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=D.bxX.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Yw)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.T()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.BQ&&c4.ax){b7=A.fY(c3,B.cK,c3,c3,c3,A.cW(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.d_,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A7.Js,c3,c3),"BEEP BEEP!"),B.a7,B.cc,c3,B.e3,B.cd)
b7.eL()
b7.a4(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
ceA(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.btW,D.bmZ,g)
o.toString
if(f){w=new A.aH($.T().r,B.ak,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.cj(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.cj(v+9,t,v+16,u))
w.E(new A.bA())
t=A.L()
t.r=D.a0d.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d64[r]
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=D.a0d.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a7(0,D.eBd)
$.T()
v=A.L()
v.r=D.bj_.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bY(e.a7(0,D.eBe),16,60)
w=A.L()
w.r=o.gp(0)
d.c1(v,w)}},
bKh(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Yw?0.045:0,a1=a2.c
J.bs(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jr(0,a0)
for(w=0;w<2;++w){v=D.dzp[w]
u=d.ay&&d.r!==D.Yw&&v>0
J.bs(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.T()
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=D.byJ.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=D.bqD.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=B.bk.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.r9(D.fm7,B.h2,B.h2,B.i6,B.hT)
$.T()
t=A.L()
t.san(A.jN(D.exk,B.aa1,D.doB,G.a5R,B.x,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.T,B.Q,B.W,B.X,B.U)
s.r=D.dic[B.o.F(o,4)].gp(0)
a2.aE(new A.a4(t,-26,t+10,-19),s)}n=d.r===D.BQ&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a4(s,-66,q,-36)
J.bs(a1.save())
a1.clipRRect(A.nd(A.bw(l,B.pi)),$.mP(),!0)
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.r=D.ZS.gp(0)
a2.aE(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.BQ?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.T8(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aO6,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bw(l,B.pi)
i=new A.ar(B.T,B.Q,B.W,B.X,B.U)
i.r=D.alT.gp(0)
i.b=B.ac
i.c=2
a2.aq(j,i)}d=A.bw(D.VS,B.pi)
t=A.L()
t.r=D.ZS.gp(0)
a2.aq(d,t)
J.bs(a1.save())
a1.clipRRect(A.nd(A.bw(D.VS,B.pi)),$.mP(),!0)
C.T8(a2,new A.r(D.VS.gbD().a,-10),0,0,0.7,-0.1,f,f,D.aO6,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bw(D.VS,B.pi)
d=A.L()
d.r=D.alT.gp(0)
d.b=B.ac
d.c=2
a2.aq(t,d)
d=A.L()
d.r=Aq.CH.gp(0)
a2.O(D.ezs,4,d)
d=A.L()
d.r=D.GS.gp(0)
a2.aE(D.fng,d)
for(w=0;w<3;++w){v=D.dzr[w]
d=A.bw(new A.a4(v,-96,v+28,-79),B.jJ)
t=new A.ar(B.T,B.Q,B.W,B.X,B.U)
t.r=D.H6.gp(0)
a2.aq(d,t)}a1.restore()},
aD(d){return!1}}
C.aCM.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.bil.prototype={}
C.aCO.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.bim.prototype={}
C.aCP.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.bin.prototype={}
C.a7i.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.bkV(w),B.aA),w)}}
C.bkV.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dxg[B.o.F(n,6)]
k=$.T()
j=new A.ar(B.T,B.Q,B.W,B.X,B.U)
j.r=l.gp(0)
d.aE(new A.a4(m,0,m+v,u),j)
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
k=new A.ar(B.T,B.Q,B.W,B.X,B.U)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.tP.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,B.Rb,w,w,w,new C.bUd(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fEi,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c6(w,D.ZC,A.p(w,A.bo(!0,A.x(A.a([D.c9o,new A.D(D.bLa,A.A(u,B.l,w,B.e,B.h,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.bbb,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.IG.prototype={
B(d){var w=null,v=this.d,u=C.aSb(v),t=C.iv7(v),s=B.c.j(0.08),r=A.m(18),q=A.K(B.d_.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fGQ,w,w,w)],x.p)
if(this.e)p.push(D.eDF)
p.push(B.aj)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.hh,w,w,w))
if(t!=null)p.push(new A.D(B.r7,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Fw,w,w,w),w))
return A.p(w,A.x(p,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.m),w,w,w,w,B.bF,w,w,w)}}
C.WU.prototype={
R(){return new C.bnJ(A.S(x.N,x.S),B.o.F(Date.now(),1e5))},
d0E(d){return this.f.$1(d)},
ge9(){return this.d}}
C.bnJ.prototype={
gTw(){var w=this.d
return w===$?this.d=this.a.c:w},
a_(){this.a3()
this.Q5()},
Q5(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Q5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bUZ(u.a.d),$async$Q5)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dmy[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bUY(p,(o===$?u.d=q.c:o).a,r),$async$Q5)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e5S(u,n))
return A.h(null,v)}})
return A.i($async$Q5,v)},
uF(d){return this.crw(d)},
crw(d){var w=0,v=A.j(x.H),u=this,t
var $async$uF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a7(t,!1).c8(A.e5(new C.e5T(d),!1,null,x.H)),$async$uF)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Q5()
return A.h(null,v)}})
return A.i($async$uF,v)},
gb83(){var w,v,u,t=C.No(this.gTw()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a3j(d){return this.cyR(d)},
cyR(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a3j=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d0E(r),$async$a3j)
case 2:if(u.c!=null)u.l(new C.e5U(u,r))
return A.h(null,v)}})
return A.i($async$a3j,v)},
Pp(d){return this.bT7(d)},
bT7(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Pp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hp1(t.gTw())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.N6("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a7(s,!1).c8(A.e5(new C.e5Q(q),!1,null,r)),$async$Pp)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bl(j,new C.e5R(p))
o=s.length
B.d.ce(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a3j(A.cU(s,0,A.dy(2,"count",x.S),r).df(0)),$async$Pp)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pp,v)},
Yo(d,e){return this.bQH(0,e)},
bQH(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Yo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.ce(null,null,!0,null,new C.e5P(e),o,null,!0,!0,x.y),$async$Yo)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hp1(u.gTw()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a3j(o),$async$Yo)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Yo,v)},
ab5(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e5M(this,j):h
o=o?0.55:1
w=A.ap(g,B.v,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.aa(0,B.H,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.WG,p,p,p),B.aW],s)
q=A.m(10)
r.push(A.p(p,A.c(i,p,p,p,p,p,p,D.fFc,p,p,p),B.f,p,p,new A.o(B.i0,p,p,q,p,p,B.m),p,p,p,p,B.zz,p,p,p))
return A.aA(p,A.d5(A.p(p,A.x(A.a([A.A(r,B.l,p,B.e,B.h,0,p,p),B.aW,A.c(e,p,2,p,p,p,p,D.fNd,p,p,p),B.cQ,A.c(f,p,3,B.a2,p,p,p,D.fFX,p,p,p)],s),B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a8(B.ay,B.aD,B.x,w,p,p),B.m),p,p,p,p,B.x2,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
XS(d,e,f,g,h,i){return this.ab5(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.No(s.gTw()),p=s.gTw(),o=C.aSb(s.e),n=C.hp1(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e5V(s),k=C.hQc(p,1).length,j=C.hQn(p,1).length,i=C.hRh(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.K(B.d_.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,K.acZ,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fKD,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.A(A.a([e,B.bc,A.E(A.x(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.WY,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),1),A.x(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qr,r,r,r),D.h8Y],a1),B.l,r,B.e,B.h,0,B.p)],a1),B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.m),r,r,r,r,B.bF,r,r,r)
f=s.XS("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.az,new C.e5W(s,p),l.$1("kahoot"))
h=s.XS("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lR,new C.e5X(s,p),l.$1("fire"))
a0=s.XS("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wR,new C.e5Y(s,p),l.$1("catch"))
j=j!==0?new C.e60(s,p):r
j=s.ab5("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hY,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e61(s,p):r
i=s.ab5("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lQ,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.XS("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.fv,new C.e62(s,p),l.$1("journey"))
k=k!==0?new C.e63(s,p):r
k=A.a([g,B.aO,D.hd2,B.M,A.lb(0.98,A.a([f,h,a0,j,i,e,s.ab5("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.es,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.XS("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.de,new C.e64(s,p),l.$1("school"))],a1),2,12,12,r,B.e8,!0),B.di,A.A(A.a([D.bN_,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fFh,r,r,r)],a1),B.l,r,B.e,B.h,0,r,r),B.M],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ax(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fUq,B.bc,new A.bu(1,B.b8,A.x(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hs,r,r,r),A.c(""+v.gaqu(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.Fw,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),r)],a1)
if(v.gaqu(0).length>=2){f=D.lS.j(0.2)
t=new A.ax(D.lS,1,B.r,-1)
g.push(A.aA(r,A.p(r,A.V(B.fO,D.lS,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e65(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.d_.j(0.2)
t=new A.ax(B.d_,1,B.r,-1)
f=A.aA(r,A.p(r,A.V(B.jl,B.d_,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e66(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fq.j(0.2)
t=new A.ax(B.fq,1,B.r,-1)
B.d.u(g,A.a([B.ba,f,B.ba,A.aA(r,A.p(r,A.V(B.eq,B.fq,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e67(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.c1(B.aK,B.e,B.h,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bE(u,u,u,u),new A.bb(h,h,h,h),r,r,B.m),r,r,r,B.d7,B.bg,r,r,r))}if(s.a.e){j=m?new C.e5Z(s):new C.e6_(a2)
i=A.m(18)
h=A.K(m?B.d_:B.aT,B.r,2)
g=m?B.d_.j(0.12):B.dx
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.p(r,A.at(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.d_:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.m),r,r,r,r,B.P4,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.hdZ)
k.push(B.aB)
k.push(D.auS)
return new C.tP("Family Games \xb7 "+p.b,A.cn(k,r,r,D.bHa,r,r,B.ah,!1),B.ff,r)}}
C.a0F.prototype={
a9(){return"_KPhase."+this.b}}
C.an3.prototype={
R(){return new C.an4(D.b2O)},
gd6(){return this.e}}
C.an4.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fR(d){var w,v=this
v.l(new C.bUy(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.d0(B.fp,new C.bUz(v))},
aR5(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.l(new C.bUo(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.d0(B.fo,new C.bUp(w))},
LF(d){var w
if(this.d!==D.aer)return
w=this.at
if(w!=null)w.a1(0)
this.b8_(d)},
b8_(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.S(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bUu(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cB(B.tv,v.giA(v))},
cO5(d){var w=this
if(w.d!==D.Y2)return
if(w.e+1>=w.a.w.length)w.Zb()
else{w.l(new C.bUv(w))
w.aR5()}},
Zb(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Zb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bIC(p,u.w,t)
u.l(new C.bUr(u,s))
w=2
return A.b(C.C1(u.a.e,s),$async$Zb)
case 2:r=e
t=u.a
w=3
return A.b(C.C2(t.e,t.f,t.r,u.f),$async$Zb)
case 3:q=e
if(u.c!=null)u.l(new C.bUs(u,r,q))
return A.h(null,v)}})
return A.i($async$Zb,v)},
cOV(){var w,v,u,t,s=this,r=s.a,q=new A.e2()
q.cT(r.w.length*31+B.a.gZ(r.f))
w=s.a.w.length*900
v=A.a([new A.b0("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.dY(r,q)
for(r=A.cU(r,0,A.dy(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bQ(r,r.gJ(0),u.k("bQ<aj.E>")),u=u.k("aj.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b0(t,B.i.S(w*(0.35+q.ai()*0.5)),!1))}B.d.b0(v,new C.bUw())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b2O===r){w=A.a([D.h9m,B.R,A.c(s,t,t,t,t,t,t,B.X7,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fFp,t,t,t))
w.push(B.aB)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.BA,B.K,t,t))
w.push(B.ec)
w.push(C.uG("Play",u.gf1(u),B.d_,B.fO,D.fJ))
w=A.at(new A.D(B.eJ,A.x(w,B.l,t,B.e,B.O,0,B.p),t),t,t,t)
break A}if(D.b2P===r){w=A.at(A.c(""+u.z,t,t,t,t,t,t,D.fNM,t,t,t),t,t,t)
break A}if(D.aer===r||D.Y2===r){w=u.cua()
break A}if(D.b2Q===r){w=u.ceB()
break A}w=t}return new C.tP(s,w,B.ff,t)},
cua(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Y2,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aXJ,j,j,j),B.aW],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.LM,j,j,j))
g.push(B.ar)
f=A.m(14)
g.push(A.p(j,A.c(""+k.f,j,j,j,j,j,j,B.iV,j,j,j),B.f,j,j,new A.o(B.bx,j,j,f,j,j,B.m),j,j,j,j,A1.D2,j,j,j))
g=A.A(g,B.l,j,B.e,B.h,0,j,j)
f=A.m(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.by(f,A.jD(B.bx,j,k.as<5?B.fq:B.d_,9,j,w,j),B.aq)
w=A.m(22)
v=A.K(B.d_,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.lS:G.nH,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.M,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fEr,B.K,j,j)],h),B.l,j,B.e,B.O,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fPY,B.K,j,j)
w=A.E(A.p(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.qP,j,v,w,j,j,B.m),j,j,j,j,B.f9,j,j,1/0),3)
v=A.a([],h)
for(u=k.giA(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bUt(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aF1[o]
m=new A.aP(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aFl[o],j,j,j,j,j,j,D.fGq,j,j,j),B.ar,new A.bu(1,B.b8,A.c(r[t],j,3,B.a2,j,j,j,D.fFm,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.atl)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c0Y)
v.push(A.aA(j,new A.Tp(A.p(j,new A.c1(B.aK,B.e,B.h,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bE(l,l,l,l),new A.bb(m,m,m,m),W.aDq,j,B.m),j,j,j,j,B.f2,j,j,j),p,B.aZ,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.aj,f,B.af,w,B.af,A.E(A.lb(1.45,v,2,10,10,j,B.e8,!1),4)],h)
if(i)h.push(D.eCU)
return new A.D(B.a1S,A.x(h,B.l,j,B.e,B.h,0,B.p),j)},
ceB(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cOV(),m=x.p,l=A.a([D.bfc,A.at(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qr,o,o,o),o,o,o),A.at(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.WL,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.d_.j(0.25):B.dx
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.d_:B.bx,1,B.r,-1)
q=A.c(w<3?D.doS[w]:""+(w+1),o,o,o,o,o,o,B.m9,o,o,o)
s=s?B.u:B.N
l.push(A.p(o,new A.c1(B.aK,B.e,B.h,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bu(1,B.b8,A.c(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.iV,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bE(r,r,r,r),new A.bb(u,u,u,u),o,o,B.m),o,o,o,B.cB,B.eX,o,o,o))}l.push(B.R)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.IG(m,v,p.CW,o))
l.push(B.aO)
l.push(A.at(C.uG("Back to the games",new C.bUq(p),B.d_,B.kk,D.fJ),o,o,o))
return A.cn(l,o,o,B.f9,o,o,B.ah,!1)}}
C.Uz.prototype={
R(){return new C.an0(A.S(x.de,x.er))}}
C.an0.prototype={
gDw(){var w,v=this,u=v.d
if(u===$){w=C.hv1(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
glX(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDw().b
v=$.az()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.bd(w,B.b6,B.aP),v)}return t},
chI(d){return this.f.c_(0,d,new C.bTZ(d))},
a_(){this.a3()
var w=this.gDw().c
if(w.length===0)w.push(C.hgm(null,0,20,""))},
t(){var w,v,u=this.glX(0)
u.V$=$.az()
u.W$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aQ(u.d);w.C();){v=w.gP(w)
v.V$=$.az()
v.W$=0}this.a2()},
cNW(){if(this.gDw().c.length>=12)return
this.l(new C.bU_(this))},
jI(d){var w,v,u=this,t=u.gDw()
t.b=B.a.i(u.glX(0).a.a)
w=t.gaqu(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.T(D.fxl)
return}v=t.c
B.d.a6(v)
B.d.u(v,w)
v=u.c
v.toString
A.a7(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bU9(),r=x.p,q=A.a([A.bL(!1,D.fZx,t,t,!0,t,t,t,u.gbrV(u),t,t)],r),p=A.a([D.hdA,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glX(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.al,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ae,t,t,t,t,t,t,t,t,t,t,t,B.hh,!0,B.a7,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gDw().c.length,w<v;++w)B.d.u(p,A.a([new A.fl(new C.bU8(u,w,s),t)],r))
if(v<12)p.push(A.at(C.uG("\uff0b Add a question",u.gcNV(),B.aT,t,B.c),t,t,t))
return new C.tP("Make your game",A.cn(p,t,t,D.bH7,t,t,B.ah,!1),q,t)}}
C.asa.prototype={
R(){return new C.aGl(A.a([],x._))},
bw(){return this.r.$0()},
qt(){return this.w.$0()},
ge9(){return this.c}}
C.aGl.prototype={
a_(){var w,v
this.a3()
this.wE()
w=this.a
v=w.c
if(v.length!==0)C.a93(v,w.e,w.d.w)},
wu(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hrT(r,t.e,!1,s.w,new C.e7x(u),null,s),$async$wu)
case 2:w=3
return A.b(u.wE(),$async$wu)
case 3:return A.h(null,v)}})
return A.i($async$wu,v)},
a1t(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hrT(r,t.e,!0,s.w,new C.e7w(u),null,s),$async$a1t)
case 2:w=3
return A.b(u.wE(),$async$a1t)
case 3:return A.h(null,v)}})
return A.i($async$a1t,v)},
wE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bx(q.a.c),$async$wE)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.l(new C.e7z(q,p))
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
return A.b(C.HC(q.a.c).dc(0,B.r2),$async$wE)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.e7A(q,o))
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
if(q.c!=null&&q.e)q.l(new C.e7B(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wE,v)},
PL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$PL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.T(D.fwW)
w=3
return A.b(C.HC(t.a.c),$async$PL)
case 3:r=e
w=4
return A.b(C.h5M(t.a.c,r),$async$PL)
case 4:q=e
w=5
return A.b(C.HC(t.a.c),$async$PL)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.e7v(t,p))
o=t.c.L(s).f
s=A.c(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b3(null,null,null,q?B.dR:B.d9,null,B.t,null,s,null,B.lX,null,null,null,null,null,null,null,null,null,null))
t.a.qt()
case 1:return A.h(u,v)}})
return A.i($async$PL,v)},
IT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iDz(l),$async$IT)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.i5M(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b2J(q,p.e,l,"Each family tree costs $"+B.i.a5(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IT)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hMk(r)
o=Date.now()
n=t.a.c
m=new C.la(l,r.toUpperCase(),p,!0,B.Z,D.El,new A.W(o,0,!1),0,n,D.vj,B.cn)
w=5
return A.b(C.a4H(n,m),$async$IT)
case 5:w=6
return A.b(t.wE(),$async$IT)
case 6:t.a.bw()
t.a.qt()
if(t.c==null){w=1
break}t.Fo(m)
case 1:return A.h(u,v)}})
return A.i($async$IT,v)},
Fo(d){return this.cmI(d)},
cmI(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Fo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bx(u.a.c),$async$Fo)
case 2:n=l.nL(k.dN(f,new C.e7y(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hC(m,new C.as4(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Fo)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a4H(u.a.c,o),$async$Fo)
case 6:case 5:w=7
return A.b(u.wE(),$async$Fo)
case 7:u.a.qt()
return A.h(null,v)}})
return A.i($async$Fo,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=new C.ur(p)
if(r.e)return A.at(A.ni(q,p?B.bv:B.bk,q,q,q,q,q,q,q,q),q,q,q)
if(J.cw(r.d)){w=p?B.el:B.c
v=A.m(15)
u=A.aG(!1,B.a3,!0,q,A.aM(!1,q,!0,A.p(q,D.bZt,B.f,q,q,new A.o(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cM,!0,q,q,q,q,q,q,q,q,q,q,q,r.gclI(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.D,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.GE(A.p(q,A.x(A.a([u,B.aO,t,B.M,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bk,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.ec,A.bI(D.hgS,q,r.gaUq(),A.bp(B.bU,q,q,q,q,q,B.a2f,q,new A.b9(A.m(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.h,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.m),q,q,q,q,D.bJT,q,q,1/0),15,B.ag,1.05,D.aee,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.D,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aW],v)
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.V(B.Ae,B.aV,q,q,q,q),q,q,q,new C.e7D(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.V(B.Aa,B.aV,q,q,q,q),q,q,q,r.gahY(),q,q,q,q,"Transfer / backup file",q))
w.push(A.db(E.aug,q,D.fWO,r.gaUq(),A.bp(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.h,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.GE(r.cK3(J.t(r.d,s),o),14,B.ag,1,D.aee,q))
B.d.u(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.h,0,B.p)],v),B.B,q,B.e,B.h,0,B.p)},
cK3(d,e){var w=null,v=e.a,u=v?B.el:B.c,t=A.m(14),s=A.K((v?B.eo:B.bO).j(0.55),B.r,1),r=A.a([new A.aa(0,B.H,B.v.j(v?0.35:0.08),B.eD,10)],x.V),q=A.m(14),p=A.p(w,D.bYy,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.garu(),m=d.d?"":" \xb7 Public",l=d.y===D.l8?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bs,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.B,w,B.e,B.h,0,B.p),1)
return A.p(w,A.aG(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bF,A.A(A.a([p,B.bc,l,A.V(B.PX,v?B.bv:B.bk,w,w,w,w)],k),B.l,w,B.e,B.h,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e7C(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.as4.prototype={
R(){return new C.aGi(A.a([],x._),A.aR(x.N),A.bbx())},
bw(){return this.r.$0()},
ge9(){return this.c}}
C.aGi.prototype={
a_(){var w,v,u=this
u.a3()
u.d=u.a.w
u.aeA()
w=u.a
v=w.c
if(v.length!==0)C.a93(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.az()
w.W$=0
this.a2()},
a4v(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4v=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yK("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e6Y(r),s,null,!0,!0,x.y),$async$a4v)
case 3:if(e!==!0||t.c==null){w=1
break}t.Kz()
t.l(new C.e6Z(t,r))
w=4
return A.b(t.uB(),$async$a4v)
case 4:t.a.bw()
t.yK(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a4v,v)},
czs(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.U$.push(new C.e6T(w,f,d,e))},
aWJ(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dz()
u.ei(w,v,0,1)
u.k0(q,q,1,1)
this.w.sp(0,u)},
beG(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eR(new Float64Array(16))
q.ed(r)
w=q.DB()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dz()
t.ei(r,u,0,1)
t.k0(v,v,1,1)
t.ei(-r,-u,0,1)
t.iY(0,q)
s.sp(0,t)},
aeA(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aeA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bx(u.a.c),$async$aeA)
case 2:t=s.nL(r.dN(e,new C.e6k(u)))
if(t!=null&&u.c!=null)u.l(new C.e6l(u,t))
return A.h(null,v)}})
return A.i($async$aeA,v)},
yK(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
wu(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.d()
w=2
return A.b(C.hrT(o,t,!1,r,new C.e6C(u),q.a,s),$async$wu)
case 2:n=A
m=J
w=3
return A.b(C.HC(u.a.c),$async$wu)
case 3:p=n.nL(m.dN(e,new C.e6D(u)))
if(p!=null&&u.c!=null)u.l(new C.e6E(u,p))
return A.h(null,v)}})
return A.i($async$wu,v)},
Kz(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cJ(w,0)},
uB(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a4H(t,s),$async$uB)
case 2:return A.h(null,v)}})
return A.i($async$uB,v)},
a3_(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a3_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uH(q,t.a.c)){t.yK("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iEM(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a3_)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Kz()
t.l(new C.e6S(t,r))
w=4
return A.b(t.uB(),$async$a3_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3_,v)},
b4D(){var w=this.c
w.toString
A.a7(w,!1).c8(A.e5(new C.e6z(this),!1,null,x.H))},
a1H(){return this.cmK()},
cmK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1H=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.d()
if(!C.uH(m,t.a.c)){t.yK("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.Q(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.X(s,new C.e6P(),A.U(s).k("X<1>")).gJ(0)
s=A.eA([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("ch.E"))
B.d.fd(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e6Q(n,t,new C.ur(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1H)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Kz()
t.l(new C.e6R(t,o))
w=6
return A.b(t.uB(),$async$a1H)
case 6:case 5:if(o.a&&t.c!=null)t.b4D()
case 1:return A.h(u,v)}})
return A.i($async$a1H,v)},
Xb(d){return this.bFw(d)},
bFw(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uH(r,t.a.c)){t.yK("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e68(t,d),r,null,!0,!0,x.P),$async$Xb)
case 3:s=f
if(s==null){w=1
break}t.Kz()
t.l(new C.e69(t,s))
w=4
return A.b(t.uB(),$async$Xb)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xb,v)},
a4Q(d){return this.cMk(d)},
cMk(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4Q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.Q(s)
t=u.c
t.toString
w=2
return A.b(A.ce(null,null,!0,null,new C.e70(u,d,new C.ur(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4Q)
case 2:return A.h(null,v)}})
return A.i($async$a4Q,v)},
ciV(d){var w=this,v=w.d
v===$&&A.d()
if(C.uH(v,w.a.c))w.Pq(d)
else w.a4Q(d)},
akt(d,e){return this.cDv(d,e)},
cDv(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$akt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.Q(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.e6V(new C.ur(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$akt)
case 3:case 1:return A.h(u,v)}})
return A.i($async$akt,v)},
IY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.l8?3:5
break
case 3:w=6
return A.b(C.hex(t.a.c),$async$IY)
case 6:s=e
o=t.a
r=C.hzU(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.akt(!s,!r),$async$IY)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aSg(o,t.a.c)){t.yK("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lB(o,"Cancel","Remove",q.y===D.l8?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IY)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aSe(t.a.c,t.d.a),$async$IY)
case 11:t.a.bw()
o=t.c
if(o==null){w=1
break}A.ji(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IY,v)},
ac1(d){return this.bQY(d)},
bQY(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ac1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uH(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aR(s,new C.e6a(p))){o=A.U(s)
p.a=A.nL(new A.cO(new A.X(s,new C.e6b(d),o.k("X<1>")),new C.e6c(),o.k("cO<1,n>")))}q=p.a
if(q==null)q=d.d
t.Kz()
t.l(new C.e6d(t,s,d,q))
w=3
return A.b(t.uB(),$async$ac1)
case 3:t.yK(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$ac1,v)},
Pq(d){return this.bTb(d)},
bTb(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uH(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4Q(d),$async$Pq)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.e6h(t,d),r,null,!0,!0,x.P),$async$Pq)
case 6:s=f
if(s==null){w=1
break}t.Kz()
t.l(new C.e6i(t,s))
w=7
return A.b(t.uB(),$async$Pq)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Pq,v)},
cKv(){var w=this,v=w.d
v===$&&A.d()
if(!C.uH(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.e7_(w))
w.uB()},
a_g(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aSg(n,t.a.c)){t.yK("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.Q(n)
s=$.az()
r=new A.au(B.ax,s)
q=t.d.e
p=A.bt(new A.O(q,t.gcho(),A.U(q).k("O<1,n>")).c0(0,new C.e6u()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e6v(t,new C.ur(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_g)
case 3:o=e
r.V$=s
r.W$=0
if(o!==!0||t.c==null){w=1
break}t.Kz()
t.l(new C.e6w(t,p))
w=4
return A.b(t.uB(),$async$a_g)
case 4:t.yK("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_g,v)},
chp(d){return B.a.i(d.toLowerCase())},
cls(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uH(v,w)
t=r.d
s=C.itB(t)
C.iDD(q,t.b,u,C.itA(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.ur(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.X(l,new C.e77(),A.U(l).k("X<1>")).gJ(0)
l=n?B.c7:B.hX
v=A.V(B.a3p,n?B.bv:B.bk,o,o,o,18)
u=x.p
v=A.a([new A.D(A_.D3,A.aM(!1,o,!0,new A.D(B.hz,A.A(A.a([v,B.ba,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.O,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e78(p,d),o,o,o,o,o,o,o),o),new A.D(B.o0,p.c3r(m),o)],u)
if(p.d.y===D.l8){t=B.u2.j(0.15)
s=A.m(12)
r=A.K(B.u2.j(0.45),B.r,1)
q=C.HA(p.d,p.a.c)
v.push(new A.D(B.zr,A.p(o,A.A(A.a([D.c37,B.ar,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.m),o,o,o,o,B.hA,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,15,o,o,B.D,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aW],u)
if(C.uH(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GP("Undo",B.q0,p.gcKu(),m,o,o))
u.push(new C.GP("Family Book",D.bT9,p.gclr(),m,B.uT,o))
u.push(new C.GP("Family games",B.o9,p.gclD(),m,B.az,o))
if(C.uH(p.d,p.a.c))u.push(new C.GP("Display settings",B.DS,p.gcmJ(),m,B.b5,o))
u.push(new C.GP("Sync",B.Aa,p.gahY(),m,o,o))
t=p.d
if(t.y===D.l8||C.aSg(t,p.a.c)){t=p.d.y===D.l8?"Remove shared tree":"Delete tree"
u.push(new C.GP(t,B.eq,p.gbR7(),m,B.fq,o))}if(C.uH(p.d,p.a.c))u.push(new C.GP("Add member",B.xq,new C.e79(p),m,B.bU,o))
v.push(new A.D(S.anT,A.A(u,B.l,o,B.e,B.h,0,o,o),o))
if(p.d.garu()===0){u=A.at(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cf(new C.e7a(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.V(n?B.a3t:B.PY,o,o,o,o,o)
v.push(A.at(A.hv(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e7b(p),o),o,o,o))}return A.c6(o,l,A.bo(!0,A.x(v,B.B,o,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c3r(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.m(22)
v=A.a([new A.aa(0,B.H,B.h6.j(0.35),B.du,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.V(B.A2,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a3,!0,m,A.aM(!1,m,!0,A.p(m,D.c6v,B.f,m,m,new A.o(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cM,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahY(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fHu,m,m,m)
r=r.garu()
p=n.d.garu()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bs,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.B,m,B.e,B.h,0,B.p),1)],o)
if(C.uH(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c3m,m,m,m,n.gcwJ(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.h,0,m,m)
r=n.d.d
q=r?B.jF:B.nj
r=r?"Private":"Public"
r=A.E(n.ay1(q,"Privacy",r,n.a.d.w?n.gcJl():m),1)
q=A.E(n.ay1(B.xv,"Tree code",n.d.c,new C.e6j(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.aa,q,B.aa,A.E(n.ay1(D.bUQ,"Collaborators",p,n.gc8s()),1)],o),B.l,m,B.e,B.h,0,m,m)],o)
if(n.d.y===D.l8){s=B.c.j(0.15)
B.d.u(p,A.a([B.M,A.aG(!1,B.a3,!0,A.m(999),A.aM(!1,A.m(999),!0,new A.D(B.fZ,A.A(A.a([A.V(B.oa,B.c,m,m,m,14),B.dZ,A.c("View only",m,m,m,m,m,m,B.acF,m,m,m)],o),B.l,m,B.e,B.O,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.by(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.HH,A.x(p,B.B,m,B.e,B.h,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.caR,B.m),m,m,m,m,m,m,m,1/0)},
ay1(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a3,!0,A.m(14),A.aM(!1,A.m(14),!0,new A.D(K.apd,A.x(A.a([A.V(d,B.c,w,w,w,18),B.at,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rJ,A.c(f,w,1,B.a2,w,w,w,Ar.y3,w,w,w)],x.p),B.l,w,B.e,B.h,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bip.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gar(r)&&s.c.length===0)return B.bK
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bis(s,t),new A.av(w,v))],x.p)
r=r.gdS(r)
B.d.u(u,r.dP(r,new C.dkm(this),x.l))
r=s.c
B.d.u(u,new A.O(r,new C.dkn(this),A.U(r).k("O<1,w>")))
return new A.D(B.vf,new A.a5(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.L9.prototype={}
C.GT.prototype={}
C.bir.prototype={
gbng(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aM0.prototype={}
C.bis.prototype={
bSN(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.T()
v=A.L()
v.r=B.bB.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aH(q.r,B.ak,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.i3(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.i3(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bA())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bB.gp(0)
d.af(t,q)},
bSK(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b0(a0,new C.dkH())
w=f.b
v=w+(B.d.gG(a0).b-w)/2
u=B.d.aR(a0,new C.dkI(f))
t=new A.O(a0,new C.dkJ(f),A.U(a0).k("O<1,H>")).c0(0,new C.dkK()).cE(0,1/0,B.py)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.m0(n)
k=Math.min(10,m/2)
m=$.T()
j=A.a([],r)
i=new A.aH(m.r,B.ak,null,null,j)
j.push(new A.aZ(w,v-k))
i.ac()
m=l*k
h=new A.cj(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ac()
m=new A.cj(o,v,o,v+k)
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
if(s!=null&&s.length!==0)this.bSK(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bSN(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.bmf.prototype={
gceD(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aFC
switch(w.c.a){case 0:return D.d4z
case 1:return D.di6
case 2:return D.dBu}},
gceG(){var w=this.c,v=C.hLx(w.w),u=C.hLx(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=t.gceD(),p=t.c,o=A.bHb(p.f),n=t.gceG(),m=x.V,l=A.a([new A.aa(0,B.H,B.d.gal(q).j(0.35),B.cP,10)],m),k=r?B.aw:B.c,j=A.K(r?B.aw:B.c,B.r,2)
if(o!=null)w=A.tT(B.z,s,B.cs,B.c0,!1,s,o,!1,s,s)
else{w=A.a([B.d.gG(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a5,B.a9,B.x,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.ia(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ay,B.aD,B.x,q,s,s),B.a6),s,56,s,s,B.Dg,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.K(r?B.aw:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.c(""+k,s,s,s,s,s,s,D.fSv,s,s,s),B.f,s,s,new A.o(B.ch,s,w,j,s,s,B.m),s,s,s,s,D.bLO,s,s,s),s,s,s,-6,-4,s))}k=r?B.cx:B.c
j=A.m(8)
w=A.K(B.d.gG(q).j(0.35),B.r,1)
m=A.a([new A.aa(0,B.H,B.v.j(r?0.3:0.06),B.dS,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cx,s,s,s,s,s,s,s,s,u,s,s,B.D,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bk,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.at,A.p(s,A.x(p,B.l,s,B.e,B.O,0,B.p),B.f,s,D.b9l,new A.o(k,s,w,j,m,s,B.m),s,s,s,s,D.bLZ,s,s,s)],v),B.l,s,B.e,B.h,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bhs.prototype={
a4(d,e){var w,v,u,t,s
$.T()
w=A.L()
v=this.b
u=v?B.c:D.bmx
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.bAp.prototype={
B(d){var w=this,v=null,u=new C.fuH(w),t=w.c,s=t?B.cx:B.c,r=A.m(12),q=u.$3(B.id,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bx:B.fA,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xs,"Zoom out",w.e)
return A.aG(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bx:B.fA,v,v,v,1,v,v,v,v,v,22),u.$3(B.arH,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.O,0,B.p),B.f,s,4,v,B.dJ,v,v,v,B.ai)}}
C.bpC.prototype={
B(d){var w=this,v=null,u=B.bU.j(0.15),t=A.K(B.bU,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.p(v,A.x(A.a([A.V(s?B.a3t:B.PY,B.bU,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fOr,v,v,v)],r),B.l,v,B.bb,B.h,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.aj,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fMb,B.K,v,v)],r)
if(s){t=A.a([B.aj],r)
s=w.d
B.d.u(t,new A.O(s,new C.f4v(w),A.U(s).k("O<1,w>")))
B.d.u(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.h,0,B.p),v)}}
C.a0T.prototype={
R(){return new C.aEL()},
bw(){return this.Q.$0()},
ge9(){return this.w}}
C.aEL.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a3()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.az()
r.d!==$&&A.aS()
r.d=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aS()
r.e=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aS()
r.f=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aS()
r.r=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aS()
r.w=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aS()
r.x=new A.au(new A.bd(t,B.b6,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zG:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.iv8(w.r,w.f)
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
QW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$QW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hzU(p.y,p.w)
w=3
return A.b(A.lT(t.a.w,B.Km),$async$QW)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b2J(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$QW)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.i5N(p.y,p.w)
t.a.bw()
case 5:w=7
return A.b(A.DW(78,800),$async$QW)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dAY(t,q))
case 1:return A.h(u,v)}})
return A.i($async$QW,v)},
ceF(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.d()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.ib(B.o.v(1000*Date.now()),w,D.zG,null,null,null,"","","","","",1,!1,0)
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
s=v.aHi(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a7(k,!1).N(s)},
abD(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$abD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dAX(r),s,null,!0,!0,x.y),$async$abD)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a7(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$abD,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.I,i=new C.ur(j),h=l.a.e,g=A.U(h).k("X<1>"),f=A.B(new A.X(h,new C.dB6(l),g),g.k("M.E"))
h=j?B.el:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bKd,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.h9(A.aM(!1,k,!0,new A.D(B.m0,A.V(B.eq,B.pL,k,k,k,17),k),B.cM,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbNF(),k,k,k,k,k,k,k),k,"Delete member",k,k,k),k,k,k,0,k,k))
u=j?B.ka:B.iL
t=A.bHb(l.as)
if(l.as==null)s=A.V(B.pU,j?B.bv:B.bk,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hn(u,t,s,k,42),A.ao(0,A.hn(B.bU,k,D.bXB,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gceC(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aEN(t,"Full name",B.mt,1,1,i,B.mK)
u=l.y
u===$&&A.d()
u=A.x(A.a([t,B.R,new C.bmd(i,u,new C.dB7(l),k)],v),B.l,k,B.e,B.h,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.D,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bDu],q)
o=l.a.e
B.d.u(p,new A.O(o,new C.dB8(),A.U(o).k("O<1,eN<n?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.D,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bDw],q)
B.d.u(q,new A.O(f,new C.dBa(),A.U(f).k("O<1,eN<n?>>")))
o=A.x(A.a([t,B.aj,new C.af8(i,r,"Who is their parent?",p,new C.dBb(l),k,o),B.aB,n,B.aj,new C.af8(i,m,"Who is their spouse / partner?",q,new C.dBc(l),k,o)],v),B.am,k,B.e,B.h,0,B.p)
q=l.f
q===$&&A.d()
q=C.aEN(q,"Birth date",D.aqR,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aEN(m,"Birth place",B.a3J,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aEN(n,"Date of death (if deceased)",D.asZ,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aEN(p,"Occupation",Y.R0,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.an(B.z,k,B.ad,B.t,w,k),B.aB,s,B.by,new C.af9(i,"Identity",u,k),B.af,new C.af9(i,"Family links",o,k),B.af,new C.af9(i,"Life details",A.x(A.a([q,B.R,m,B.R,n,B.R,p,B.R,C.aEN(r,"Notes",B.la,5,3,i,k)],v),B.l,k,B.e,B.h,0,B.p),k),B.af,new C.aEM(i,"Child order",l.cn_(l.at),new C.dBd(l),new C.dBe(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hoQ(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dBf(l):k
B.d.u(r,A.a([B.R,new C.aEM(i,"Visible in tree",u,w,new C.dBg(l),k)],v))}r.push(B.R)
w=j?B.ka:B.iL
u=A.m(14)
t=A.K(j?B.eo:B.bO,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.j9(k,B.bU,k,B.ag,k,new C.dBh(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.m),k,k,k,k,B.any,k,k,k))
r.push(B.by)
w=j?B.aS:B.aw
j=j?B.eo:B.bO
r.push(A.A(A.a([A.E(A.dY(B.oq,new C.dB9(d),A.dk(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.b9(A.m(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bI(D.fox,k,l.gceE(),A.bp(B.aV,k,k,0,B.c,k,B.cq,k,new A.b9(A.m(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.h,0,k,k))
r.push(B.at)
return A.ej(B.ff,k,B.ag,h,new A.a5(420,k,A.cb(A.x(r,B.am,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.aot,k,B.anJ,new A.b9(g,B.a1),k,k)},
cn_(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.af9.prototype={
B(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.D,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.ka:B.iL,s=A.m(16)
return A.x(A.a([new A.D(B.a2j,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.K(v?B.eo:B.bO,B.r,1),s,w,w,B.m),w,w,w,w,B.bg,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)}}
C.bme.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.el:B.c,r=A.m(12),q=A.K((t?B.eo:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bC(u,B.eU,u,B.tA,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bv:B.bk,u,u,u,u,u,u,u,u,u,u,u,B.cH,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.al,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ae,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.af8.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.el:B.c,s=A.m(12),r=A.K((u?B.eo:B.bO).j(0.85),B.r,1),q=A.V(B.tK,u?B.bv:B.bk,v,v,v,v),p=A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.el:B.c
return A.p(v,new A.EJ(A.a6d(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bk,v,v,v,v,v,v,v,v,v,v,v,B.cH,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.m),v,v,v,v,B.l6,v,v,v)}}
C.bmd.prototype={
B(d){var w=new C.dBi(this)
return A.A(A.a([w.$3(D.xc,"Male",B.QL),B.aa,w.$3(D.oU,"Female",B.Qw),B.aa,w.$3(D.zG,"Other",B.o7)],x.p),B.l,null,B.e,B.h,0,null,null)}}
C.aEM.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.ka:B.iL,r=A.m(14),q=A.K(t?B.eo:B.bO,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,13,v,v,B.D,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.x(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bk,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.B,v,B.e,B.h,0,B.p),1),new C.aL2(u,B.xs,w.f,v),B.ba,new C.aL2(u,B.id,w.r,v)],o),B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.m),v,v,v,v,B.ep,v,v,v)}}
C.aL2.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bU.j(0.12)
else w=s.c.a?B.el:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bU
else t=(s.c.a?B.bv:B.bk).j(0.4)
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a5(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.afa.prototype={
bX_(d){switch(d.a){case 0:return B.bU
case 1:return B.bB
case 2:return B.cE}},
bX0(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b0f(d){var w,v,u,t
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
r.push(A.E(A.x(A.a([q,B.at,A.c(o,p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,14,p,p,B.N,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.B,p,B.e,B.h,0,B.p),1))
return A.p(p,A.A(r,B.B,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.m),p,p,p,B.cB,B.zo,p,p,1/0)},
agk(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.D,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.ka:B.iL,s=A.m(16),r=A.K(v?B.eo:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a2j,u,w),A.p(w,A.x(e,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.m),w,w,w,w,B.bR,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hR4(r,q),o=q.c,n=t.bX_(o),m=A.bHb(q.f),l=t.e.a,k=l?B.el:B.c,j=A.m(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.l8?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bv:B.bk,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.aa(0,B.H,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.hn(u,m,m==null?A.V(B.pU,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eB,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.K(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.c(t.bX0(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.D,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.m),s,s,s,s,B.lZ,s,s,s),s,s,s)
u=x.p
i=A.a([t.B2("Full name",i,B.mt)],u)
if(p>0)i.push(t.B2("Child order","#"+p,B.QC))
r=A.a([h,B.at,r,B.aO,l,B.R,v,B.by,t.agk("Identity",i),B.af,t.agk("Life details",A.a([t.B2("Birth date",q.w,D.aqR),t.B2("Birth place",q.x,B.a3J),t.B2("Date of death",q.y,D.asZ),t.B2("Occupation",q.z,Y.R0)],u)),B.af,t.agk("Family links",A.a([t.B2("1. Parent",t.b0f(q.d),B.I8),t.B2("2. Spouse",t.b0f(q.e),B.Ip)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.agk("Notes",A.a([t.B2("Notes",q,B.la)],u))],u))
r.push(B.by)
r.push(A.bI(B.LU,s,new C.dBs(d),A.bp(B.aV,s,s,s,s,s,B.cq,s,new A.b9(A.m(14),B.a1),s,s,s)))
return A.eH(s,k,new A.cS(B.mh,A.cb(A.x(r,B.am,s,B.e,B.O,0,B.p),B.t,s,B.y,s,s,B.x6,s,s,B.ah),s),s,s,s,B.HK,s,B.dd,s,new A.b9(j,B.a1),s)}}
C.GP.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.bk
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.vh,A.h9(A.aG(!1,B.a3,!0,A.m(8),A.aM(!1,A.m(8),!0,new A.a5(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u,u),u)}}
C.as7.prototype={
f4(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("O<1,a9<n,@>>")
w=A.B(new A.O(w,new C.chy(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iX(w,new C.chz(),t,x.fO))
return s}}
C.as8.prototype={
R(){return new C.aGk(A.a([],x.bF))},
gd6(){return this.c}}
C.aGk.prototype={
a_(){this.a3()
this.KG()},
KG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$KG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.chC(t.a.c),$async$KG)
case 3:r=e
w=4
return A.b(C.Bx(t.a.c),$async$KG)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rz(q,new C.e7k(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.e7l(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$KG,v)},
zl(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
Lw(d,e){return this.cN1(d,e)},
cN1(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Lw=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.e7p(q,e))
t=3
w=6
return A.b(d.$0(),$async$Lw)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.e7q(q))
$.eW.mJ()}w=r.pop()
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
return A.b(M.pR(r,s.c,s.e),$async$YZ)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lw(new C.e7h(t),"Preparing download\u2026"),$async$YZ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YZ,v)},
Z2(d){return this.bUQ(d)},
bUQ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Z2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pR(r,s.c,s.e),$async$Z2)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Lw(new C.e7i(t,d),"Preparing file\u2026"),$async$Z2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z2,v)},
aik(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aik=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.y0.cq().Ne(B.TO,B.vk,!0),$async$aik)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jW(o,0,null)
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
case 6:u=A.HI()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aik,v)},
ZG(d){return this.c4m(d)},
c4m(d){var w=0,v=A.j(x.H),u=this
var $async$ZG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Lw(new C.e7j(u,d),"Restoring family trees\u2026"),$async$ZG)
case 2:return A.h(null,v)}})
return A.i($async$ZG,v)},
ZF(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aik(),$async$ZF)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.ZG(s),$async$ZF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZF,v)},
a3T(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3T=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pR(r,s.c,s.e),$async$a3T)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lw(new C.e7o(t),"Creating QR code\u2026"),$async$a3T)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3T,v)},
a3t(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DU()){t.zl("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a7(s,!1).c8(A.e5(new C.e7m(),!0,null,x.N)),$async$a3t)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.ZG(r),$async$a3t)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a3t,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===B.I,n=o?B.Ct:B.hX,m=o?D.am_:B.aS,l=o?B.aM:B.bO,k=o?B.aS:B.aw,j=new C.dkL(n,m,l,k,o?B.bQ:B.bk)
l=A.aI(p,p,p,p,A.V(B.eC,k,p,p,p,20),p,p,p,new C.e7s(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eV(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dkj(!0,B.jG,B.aH,B.aH,q.r?p:q.gcDj(),j,s,"Show restore QR"),1),B.ar],u))}s=q.e
r=q.r?p:q.gczm()
t.push(A.E(C.dkj(!s,B.jH,B.b_,B.bl,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.h,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dkj(!1,B.hP,B.aV,B.bU,q.r?p:q.gbUJ(),j,"Photos & books included","Download all trees"),1),B.ar],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dkj(!1,Q.Ab,B.as,B.aQ,q.r?p:q.gc4j(),j,s,"Upload backup file"),1))
l=A.a([new C.biq(v,l,p),B.lk,new C.aep(j,"QR restore",p),B.R,t,B.di,new C.aep(j,"Backup files",p),B.R,A.A(r,B.l,p,B.e,B.h,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.lk,new C.aep(j,"One tree",p),B.R],u)
B.d.u(v,J.b8(q.d,new C.e7t(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cn(l,p,p,Au.a2b,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.aa(0,B.H,B.v.j(o?0.3:0.1),B.du,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bo(!0,A.p(p,A.A(A.a([Av.aW7,B.bc,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.N,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.m),p,p,p,p,A2.D9,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dkL.prototype={}
C.biq.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.aa(0,B.H,B.aV.j(0.32),B.kQ,28)],x.V)
t=A.ao(p,A.V(B.vD,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ae,A.A(A.a([A.p(p,D.c5Z,B.f,p,p,new A.o(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.pm,A.E(A.x(A.a([D.fXR,B.M,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.B,p,B.e,B.h,0,B.p),1)],q),B.B,p,B.e,B.h,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.cee,B.m),p,p,p,p,p,p,p,p)}}
C.aep.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.m),w,14,w,w,w,w,w,3),B.aa,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.D,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)}}
C.bio.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.aa(0,B.H,B.aH.j(0.1),B.cP,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aG(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eJ(A.d5(new A.D(E.a1P,A.x(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.m),q,q,q,q,B.tD,q,q,q),B.af,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bs,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cH,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.B,q,B.e,B.h,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bit.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eJ(new A.D(B.eX,A.A(A.a([A.p(v,D.c57,B.f,v,v,new A.o(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.tD,v,v,v),B.bc,A.E(A.x(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.D,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.B,v,B.e,B.h,0,B.p),1),A.V(B.hP,o,v,v,v,20)],n),B.l,v,B.e,B.h,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a1c.prototype={
R(){return new C.aGj()},
gd6(){return this.c}}
C.aGj.prototype={
a_(){this.a3()
this.aba()},
aba(){var w=0,v=A.j(x.H),u=this,t
var $async$aba=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(R.b5p(u.a.c,B.F_),$async$aba)
case 2:t=e
if(u.c!=null)u.l(new C.e7c(u,t))
return A.h(null,v)}})
return A.i($async$aba,v)},
ajM(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ajM=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.e7d(q))
t=4
p=R.hBK(q.a.d,B.F_)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.Y(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(R.auq(n.e,m,l,B.F_,p,n.f),$async$ajM)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.e7e(q))
q.c.L(x.q).f.T(D.fy9)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ac(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(B.a.eq(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.l(new C.e7f(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ajM,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=p?B.nQ:B.qQ,n=p?B.iX:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eV(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.hdu,q,q,q,1,q,!0)
w=A.m(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qr(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.D,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.M,u,B.by,t,B.M,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.bb,B.h,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.m),q,q,q,q,B.ae,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bA,q,q,q,q,q,q,q,q,q,q,q,B.N,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcz4()
if(u)u=B.Lk
else u=A.V(r.e===!0?B.hn:Ay.aqQ,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.eq(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cf,q,q,q),t,A.dk(q,q,q,q,q,q,q,q,q,B.aV,q,B.hr,q,q,q,new A.ax(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hy,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.R)
w.push(new A.a5(1/0,q,A.bI(Ag.BB,q,new C.e7g(d),A.bp(B.aV,q,q,q,q,B.hr,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.D(B.ae,A.x(w,B.l,q,B.e,B.h,0,B.p),q),q,!1,!1,q,q)}}
C.a1d.prototype={
R(){return new C.bnK(A.A6(B.zc,B.ox,B.vK))}}
C.bnK.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c6(A.eV(w,w,w,!0,!0,B.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h58,w,w,w,1,w,!0),B.v,A.A5(this.d,B.c0,new C.e7u(this,d)),w,!1,!1,w,w)}}
C.b1e.prototype={
B(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Th,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.mc.prototype={}
C.a85.prototype={
R(){return new C.bno(null,null)}}
C.bno.prototype={
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
this.bAJ()},
B(d){var w,v,u=this,t=B.d.dr(D.a7L,new C.dTm(u),new C.dTn())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cFA(A.ca(new A.hz(A.a([w,v],x.dS)),new C.dTo(u,t),null),!0)}}
C.bnn.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b54(d,e)
break
case"house":p.mp(d,e,D.dnB)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdl()
$.T()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mv(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BS(d,e,12)
p.yW(d,e,B.lu,5,14)
break
case"grocery":p.cnK(d,e)
break
case"calculator":p.cnr(d,e)
break
case"lumber":p.cnS(d,e)
break
case"kitchen":p.cnN(d,e)
break
case"landscape":p.mp(d,e,D.dob)
s=new A.aH($.T().r,B.ak,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cj(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cj(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bA())
w=A.L()
w.r=B.es.j(0.85).gp(0)
d.af(s,w)
p.BS(d,e,8)
p.yW(d,e,B.iM,4,18)
break
case"plumbing":p.co1(d,e)
break
case"electrical":p.mp(d,e,D.dAx)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.T()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aE(new A.a4(0,0,0+e.a,0+e.b),u)
p.mv(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mv(d,e,B.oM.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BS(d,e,10)
break
case"store":p.cob(d,e)
break
case"paint_remodel":p.cnX(d,e)
break
case"roofing":p.co3(d,e)
break
case"warehouse":p.coi(d,e)
break
case"vehicles":p.cog(d,e)
break
case"farm":p.cnE(d,e)
break
case"restaurant":p.co2(d,e)
break
case"tools":p.coe(d,e)
break
case"wallet":p.coh(d,e)
break
case"concrete":p.cnx(d,e)
break
case"blueprint":p.cnp(d,e)
break
default:p.b54(d,e)}},
mp(d,e,f){var w,v=new A.a4(0,0,0+e.a,0+e.b)
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
d.cQ(A.bX(t,s),u,u+0.1439896632895322-u,!1,w)}},
yW(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdl()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.T()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BS(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.T()
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b54(d,e){var w,v=this
v.mp(d,e,D.dyI)
w=v.c
v.mv(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mv(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bSG(d,e,B.i_,w)
v.yW(d,e,B.c.j(0.7),6,8)},
bSG(d,e,f,g){var w,v,u,t,s,r
$.T()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aE(new A.a4(16,r,t,r+3),w)}},
cnK(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mp(d,e,D.cAe)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ao(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.T()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=D.dlC[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mv(d,e,B.c.j(0.35),w,16)
l.yW(d,e,B.iM,5,12)},
cnr(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mp(d,e,D.cAm)
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
p=A.fY(h,B.cK,h,h,h,h,B.a7,B.cc,h,B.e3,B.cd)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dq5[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.eG(r,h,h,B.cY,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.D,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a4(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cAo[o]
l=B.kZ.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.eG(m,h,h,B.cY,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.D,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a4(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ao(o,3)*0.38)+Math.sin(n)*6))}i.mv(d,e,B.c.j(0.35),w*1.5,14)
i.mv(d,e,B.eH.j(0.55),-v*3.141592653589793*2,8)
i.mv(d,e,B.oH.j(0.4),r*2.8,22)
i.yW(d,e,B.pG,8,10)
i.BS(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.T()
v=new A.ar(B.T,B.Q,B.W,B.X,B.U)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
cnS(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,W.aCJ)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bw(new A.a4(20,r,u,r+10),B.hq)
$.T()
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=A.ap(B.h8,B.oA,(s+1)/2).gp(0)
d.aq(q,p)}o.mv(d,e,B.h8.j(0.35),w,15)
o.BS(d,e,8)},
cnN(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mp(d,e,D.dma)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.T()
m=new A.ar(B.T,B.Q,B.W,B.X,B.U)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mv(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
l.yW(d,e,B.qD,4,14)},
co1(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mp(d,e,D.d9a)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.T()
o=new A.ar(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yW(d,e,B.pK,6,12)
n.mv(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cob(d,e){var w,v,u,t,s,r,q,p=this
p.mp(d,e,D.cOe)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bw(new A.a4(r,14,r+u,22),B.jJ)
$.T()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.fy,B.bM,(s+1)/2).gp(0)
d.aq(r,q)}p.mv(d,e,B.c.j(0.3),w,16)
p.BS(d,e,8)
p.yW(d,e,B.wL,5,13)},
cnX(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dg7)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bw(new A.a4(r,q,r+8,q+(18+s*22)),B.iD)
$.T()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=[B.iJ,B.dG,B.bM,B.eF][t].j(0.85).gp(0)
d.aq(q,r)}this.mv(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
co3(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.ddd)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.T()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yW(d,e,B.cD,7,11)},
coi(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.cR3)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bw(new A.a4(q,p,q+(t-s*8),p+16),B.hq)
$.T()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.cD,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mv(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cog(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dF6)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bw(new A.a4(s,r,s+28,r+8),B.hq)
$.T()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.BS(d,e,6)},
cnE(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.dkA)
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
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=B.hY.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.mv(d,e,B.oM.j(0.35),w,14)},
co2(d,e){var w,v,u,t,s,r,q=this
q.mp(d,e,D.dno)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bY(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.T()
r=new A.ar(B.T,B.Q,B.W,B.X,B.U)
r.r=B.c.j(0.22).gp(0)
d.c1(s,r)}q.yW(d,e,B.qD,5,16)
q.BS(d,e,7)},
coe(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,D.dCk)
w=o.c
v=w*3.141592653589793
o.mv(d,e,B.oA.j(0.55),v*3,10)
o.mv(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.T()
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=B.oA.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
coh(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,D.dFS)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bw(new A.a4(q,p,q+36,p+22),B.jJ)
$.T()
q=new A.ar(B.T,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.iM,B.oM,r).gp(0)
d.aq(p,q)}o.BS(d,e,9)
o.mv(d,e,B.c.j(0.4),w*2.2,12)},
cnx(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.dte)
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
p=new A.ar(B.T,B.Q,B.W,B.X,B.U)
p.r=B.bO.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
cnp(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dox)
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
d.aE(new A.a4(0,q,0+v,q+6),u)
this.mv(d,e,B.lu.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.avb.prototype={
a13(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a13=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aTh(),$async$a13)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.aap(s),$async$a13)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a13,v)},
ail(d){return this.cqB(d)},
cqB(d){var w=0,v=A.j(x.H),u=this,t
var $async$ail=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iDN(d),$async$ail)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ail,v)},
B(d){var w,v,u=null,t=A.Q(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.ka:B.iL
w=x.p
v=A.a([C.aTF(!0,B.rW,1/0,B.re,u,s,1/0)],w)
if(!r)v.push(new A.bP(new A.o(u,u,u,u,u,new A.a8(B.aX,B.b1,B.x,A.a([B.L,B.v.j(0.35)],x.O),u,u),B.m),B.bm,new A.bK(B.aX,u,u,new A.D(B.tx,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.N,u,u,!0,u,u,u,u,u,B.aDH,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.db(D.bZm,u,D.fTV,new C.crj(this,d),A.bp(B.aV,u,u,u,B.c,u,B.jW,u,u,u,u,B.co)),1),B.aa,A.E(A.eq(D.c7i,u,D.h8k,this.gchm(),A.dk(u,u,B.v.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jW,u,u,D.b7V,u,u,u,B.co)),1)],w),B.l,u,B.e,B.h,0,u,u),u,u,8,8,u,u))
return new A.fL(1.7777777777777777,A.aG(!1,B.a3,!0,B.rW,new A.an(B.a0,u,B.b4,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.ai),u)}}
C.aOt.prototype={
b_(){this.b8()
this.b6()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdR())
w.bd$=null
w.a2()}}
C.aWD.prototype={}
C.aWC.prototype={}
C.aUE.prototype={}
C.a_Q.prototype={
R(){return new C.aBt()}}
C.aBt.prototype={
a_(){var w,v,u=this
u.a3()
u.a.toString
w=new A.bd("",B.b6,B.aP)
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
if(w.length===0){u.c.L(x.q).f.T(D.fyF)
return}t=u.c
t.toString
v=u.e
A.a7(t,!1).N(new C.aWD(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.Q(d).ax.a===B.I,l=m?B.el:B.c,k=A.m(20),j=A.p(n,D.c6Y,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bs,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bk,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.B,n,B.e,B.h,0,B.p),1)
j=A.A(A.a([j,B.bc,i,A.aI(n,n,n,n,A.V(B.cC,m?B.bv:B.bk,n,n,n,n),n,n,n,new C.dbP(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.h,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bk,n,n,n,n,n,n,n,n,12,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bk,n,n,n,n,n,n,n,n,11,n,n,B.cH,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hC_(new C.dbQ(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ka:B.iL
r=A.m(12)
q=A.m(12)
p=m?B.eo:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bC(n,new A.b6(4,r,B.dB),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.al,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.dbR(o),n,!1,n,n,!1,n,!0,n,B.ae,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,A0.Lt,n,n,n,n)
u=m?B.aS:B.aw
m=m?B.eo:B.bO
return A.eH(n,l,new A.cS(B.mh,A.cb(A.x(A.a([j,B.aO,i,B.at,w,B.M,v,B.aO,t,B.by,A.A(A.a([A.E(A.dY(B.dw,new C.dbS(d),A.dk(n,n,n,n,n,n,n,n,n,u,n,n,B.cq,n,new A.b9(A.m(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.ar,A.E(A.bI(D.h8B,n,o.ga4e(),A.bp(B.aV,n,n,n,B.c,n,B.cq,n,new A.b9(A.m(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.h,0,n,n)],h),B.B,n,B.e,B.O,0,B.p),B.t,n,B.y,n,n,B.Db,n,n,B.ah),n),n,n,n,B.Dc,n,B.dd,n,new A.b9(k,B.a1),n)}}
C.a_P.prototype={
R(){return new C.aBs()}}
C.aBs.prototype={
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
if(w.length===0){this.c.L(x.q).f.T(D.fwg)
return}v=this.c
v.toString
A.a7(v,!1).N(new C.aWC(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.Q(d).ax.a===B.I,o=p?B.el:B.c,n=A.m(20),m=A.p(q,D.c3d,B.f,q,q,new A.o(B.bU.j(0.15),q,q,A.m(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bs,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bk,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.B,q,B.e,B.h,0,B.p),1)
m=A.A(A.a([m,B.bc,l,A.aI(q,q,q,q,A.V(B.cC,p?B.bv:B.bk,q,q,q,q),q,q,q,new C.dbL(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.h,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.V(B.aqC,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.ar,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.h,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.m),q,q,q,q,B.bF,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.ka:B.iL
t=A.m(12)
s=A.m(12)
r=p?B.eo:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bC(q,new A.b6(4,t,B.dB),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.al,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.dbM(this),q,!1,q,q,!1,q,!0,q,B.ae,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.ll,q,q,q,q)
w=p?B.aS:B.aw
p=p?B.eo:B.bO
return A.eH(q,o,new A.cS(B.mh,A.cb(A.x(A.a([m,B.aO,l,B.aB,v,B.by,A.A(A.a([A.E(A.dY(B.dw,new C.dbN(d),A.dk(q,q,q,q,q,q,q,q,q,w,q,q,B.cq,q,new A.b9(A.m(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.ar,A.E(A.bI(D.hfO,q,this.ga4e(),A.bp(B.bU,q,q,q,B.c,q,B.cq,q,new A.b9(A.m(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.h,0,q,q)],k),B.B,q,B.e,B.O,0,B.p),B.t,q,B.y,q,q,B.Db,q,q,B.ah),q),q,q,q,B.Dc,q,B.dd,q,new A.b9(n,B.a1),q)}}
C.a_j.prototype={
R(){return new C.aA8()}}
C.aA8.prototype={
a_(){var w,v=this
v.a3()
w=$.az()
v.d!==$&&A.aS()
v.d=new A.au(B.ax,w)
v.e!==$&&A.aS()
v.e=new A.au(new A.bd("1",B.b6,B.aP),w)
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
w=A.cz(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
galy(){var w=this.f
w===$&&A.d()
w=A.cz(B.a.i(w.a.a))
return w==null?0:w},
gb7V(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aRZ(d){var w,v=B.i.D(this.gKB()+d,0.25,999999),u=B.i.fO(v),t=this.e
t===$&&A.d()
if(v===u)u=B.o.v(B.i.M(v))
else{u=B.i.a5(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.l(new C.cJE())},
aAV(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.ka:B.iL,s=A.m(14),r=A.m(14)
u=u?B.eo:B.bO
return A.bC(w,new A.b6(4,s,B.dB),w,B.bF,w,w,w,w,!0,new A.b6(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.m(14),B.afL),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
chn(d,e,f){return this.aAV(d,e,f,null)},
Lj(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.galy()<=0){s.c.L(x.q).f.T(D.fAz)
return}r=s.c
r.toString
v=s.gKB()
u=s.galy()
t=s.gb7V()
A.a7(r,!1).N(new C.aUE(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.ur(n),l=n?B.el:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bU.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bXg,B.f,o,o,new A.o(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a8(B.a5,B.a9,B.x,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bs,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.cH,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1)
i=A.A(A.a([i,B.bc,h,A.aI(o,o,o,o,A.V(B.cC,n?B.bv:B.bk,o,o,o,o),o,o,o,new C.cJK(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.h,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aAV(m,"Item name (optional)","Lumber, paint, labor\u2026",B.QJ),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,A0.Lt,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.D,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.ka:B.iL
t=A.m(14)
s=A.K(n?B.eo:B.bO,B.r,1)
r=A.aI(o,o,o,o,A.V(B.xs,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cJL(p),o,o,o,o,o,B.co)
q=p.e
q===$&&A.d()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c8R,B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,B.eh,o,o,o,1,o,o,!1,"\u2022",o,new C.cJM(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aI(o,o,o,o,A.V(B.id,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cJN(p),o,o,o,o,o,B.co)],w),B.l,o,B.e,B.O,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.N,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.ar,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aAV(m,"Amount","0.00",B.hO),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,B.eh,o,o,o,1,o,o,!1,"\u2022",o,new C.cJO(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.B,o,B.e,B.h,0,o,o)
t=x.gv
u=A.B(new A.O(D.dgG,new C.cJP(p,m),t),t.k("aj.E"))
i=A.a([i,B.by,v,B.aB,h,B.M,s,B.af,A.bZ(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.R,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.chn(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cJQ(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.ll,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,11,o,o,B.N,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKB()===B.i.fO(p.gKB())?B.i.M(p.gKB()):p.gKB()
s=p.gb7V()
r=A.BA(p.galy())
i.push(A.p(o,A.A(A.a([A.E(A.x(A.a([u,B.at,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1),C.bI2(p.gKB()*p.galy(),B.b5,!1,B.u)],w),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a5,B.a9,B.x,j,o,o),B.m),o,o,o,o,B.jC,o,o,o))
i.push(B.by)
j=A.m(14)
h=n?B.eo:B.bO
h=A.dk(o,o,o,o,o,o,o,o,o,o,o,o,B.cq,o,new A.b9(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dY(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.N,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cJR(d),h),1),B.ar,A.E(A.db(D.au8,o,D.hbE,p.ga4e(),A.bp(B.aV,o,o,0,B.c,o,B.cq,o,new A.b9(A.m(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.h,0,o,o))
return A.eH(o,l,new A.cS(B.MU,A.cb(A.x(i,B.am,o,B.e,B.O,0,B.p),B.t,o,B.y,o,o,Ak.tB,o,o,B.ah),o),o,o,o,B.Pi,o,B.dd,o,new A.b9(k,B.a1),o)}}
C.a2Z.prototype={
R(){return new C.bAh()}}
C.bAh.prototype={
a_(){var w,v,u=this
u.a3()
w=u.a.e
v=$.az()
u.d!==$&&A.aS()
u.d=new A.au(new A.bd(w,B.b6,B.aP),v)},
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
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bC(s,new A.b6(4,A.m(12),B.dB),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fuc(t,d),s,!1,s,s,!1,s,!0,s,B.ae,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dY(B.dw,new C.fud(d),s),1)
r=A.bp(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eH(s,q,new A.D(B.Db,A.x(A.a([o,B.aB,v,B.aO,A.A(A.a([u,B.ar,A.E(A.bI(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fue(t,d),r),1)],w),B.l,s,B.e,B.h,0,s,s)],w),B.l,s,B.e,B.O,0,B.p),s),s,s,s,s,s,B.dd,s,new A.b9(p,B.a1),s)}}
C.adq.prototype={
a9(){return"WorksheetFrameStyle."+this.b}}
C.GE.prototype={
R(){return new C.bAf(null,null)}}
C.bAf.prototype={
a_(){var w,v=this
v.a3()
w=A.br(null,D.bE3,null,1,null,v)
w.cX(0)
v.d!==$&&A.aS()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bD2()},
gbEF(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bU,B.b5],x.O)
case 2:return A.a([B.bw,B.aV,B.b5],x.O)
case 3:return A.a([B.aH,B.ch,B.jR],x.O)
case 4:return A.a([B.fY,B.bU,B.fz],x.O)
case 0:return A.a([B.aV,B.bU,B.b5],x.O)}},
B(d){var w=A.Q(d),v=this.d
v===$&&A.d()
return new A.e7(A.ca(v,new C.fua(this,new C.ur(w.ax.a===B.I)),null),null)}}
C.aA1.prototype={
R(){return new C.bAg(null,null)}}
C.bAg.prototype={
a_(){var w,v=this
v.a3()
w=A.br(null,B.nW,null,1,null,v)
w.cX(0)
v.d!==$&&A.aS()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bD3()},
B(d){var w=this.d
w===$&&A.d()
return A.ca(w,new C.fub(this),null)}}
C.bAe.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bw(new A.a4(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aH($.T().r,B.ak,null,null,A.a([],x.v))
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
w=A.zO(u)
t=A.a([],x.U)
w=new A.v4(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jU(y.B));--r
q=new A.BZ(w,r)
w.jP()
r=t[r].b
r===$&&A.d()
r=r.a.length()
p.aVA(d,q,r,o,0,0.2,4.2,0.92)
p.aVA(d,q,r,s,0.52,0.11,3.2,0.58)}},
aVA(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.hZH(e.a.a,e,t,t+f*i,!0),r=A.aix(s.glc().a.getBounds())
$.T()
w=A.L()
w.b=B.ac
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a8(B.a5,B.a9,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Jl,null).az(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aQA.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.aQB.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.ur.prototype={}
C.ava.prototype={
R(){return new C.aHS()},
ge9(){return this.c}}
C.aHS.prototype={
a_(){var w=this
w.a3()
w.d=w.a.d
w.ajc()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.Mu(w,v)
this.a2()},
ajc(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ajc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bGq(t.c,t.d.a),$async$ajc)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.f1F(u,s))
return A.h(null,v)}})
return A.i($async$ajc,v)},
Rq(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.f1w(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.Mu(t,s),$async$Rq)
case 2:if(u.c!=null)u.l(new C.f1x(u))
return A.h(null,v)}})
return A.i($async$Rq,v)},
RY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.Q(p)
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.f1D(t,new C.ur(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$RY)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.aap(q),$async$RY)
case 6:case 5:t.l(new C.f1E(t,r))
w=7
return A.b(t.Rq(),$async$RY)
case 7:case 1:return A.h(u,v)}})
return A.i($async$RY,v)},
X5(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iDy(r),$async$X5)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.f1r(t,new C.rE(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Rq(),$async$X5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X5,v)},
cmy(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hR0(t,new C.f1v(u),w,v)},
acZ(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bE(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b7H,w,w,B.m),w,22,w,w,w,w,w,22)},
ac0(d){return this.bQV(d)},
bQV(d){var w=0,v=A.j(x.H),u=this
var $async$ac0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.f1u(u,d))
w=2
return A.b(u.Rq(),$async$ac0)
case 2:return A.h(null,v)}})
return A.i($async$ac0,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.Q(a2).ax.a===B.I,e=f?B.c7:B.hX,d=A.m(8),a0=A.V(Z.a3q,f?B.bv:B.bk,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.HR,A.A(A.a([a0,B.ba,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bk,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.O,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.f1G(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.Y(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b4,B.t,A.a([A.by(A.m(22),C.aTF(!0,A.m(22),1/0,B.re,g,d,1/0),B.aq),A.ao(10,A.db(D.c16,g,D.he2,h.gb5Q(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.hc,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.aa(0,B.H,B.aV.j(f?0.5:0.38),B.eT,22),new A.aa(-4,B.H,B.bU.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.aa(-2,B.H,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.by(s,new A.an(B.a0,g,B.b4,B.t,A.a([C.aTF(!0,A.m(16),1/0,B.Q8,g,r.c,1/0),new A.bP(new A.o(g,g,g,g,g,new A.a8(B.aX,B.b1,B.x,A.a([B.c.j(0.06),B.L,B.v.j(0.22)],x.O),g,g),B.m),B.bm,g,g),A.ao(g,h.acZ(!0),g,g,8,g,8,g),A.ao(g,A.cGj(h.acZ(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cGj(h.acZ(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cGj(h.acZ(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.db(D.bXT,g,D.h7i,h.gb5Q(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.hc,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.cay,B.m),g,g,g,g,B.m0,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.biF,B.oE,B.hw],u):A.a([B.b5,B.aV,B.bU],u)
t=x.V
s=A.a([new A.aa(0,B.H,B.aV.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.V(B.jD,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.D,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.m),g,g,g,g,B.hm,g,g,g)],a1),B.l,g,B.e,B.h,0,g,g),B.aB,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.D,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.aj,C.bI2(h.d.gxR(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.M,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cH,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.B,g,B.e,B.h,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.K(B.hk.j(0.75),B.r,1.6)
t=A.a([new A.aa(0,B.H,B.aH.j(0.28),B.cP,14)],t)
j=B.aH.j(0.22)
i=A.m(10)
u=A.p(g,A.by(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bJ0,A.A(A.a([o,B.ar,A.aG(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eJ(new A.D(B.x4,A.x(A.a([A.p(g,D.atI,B.f,g,g,new A.o(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.cu,g,g,g),B.fP,D.fWQ],a1),B.l,g,B.e,B.O,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcmx(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.h,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ay,B.aD,B.x,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fL(1.7777777777777777,d,g),B.aO,w,B.M,u,B.by,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,16,g,g,B.D,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.aW,A.db(A9.a5f,g,D.fUB,h.gbF9(),A.bp(B.aV,g,g,g,B.c,g,B.hA,g,new A.b9(A.m(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.h,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.el:B.c
v=A.m(14)
u=A.K(f?B.eo:B.bO,B.r,1)
t=A.V(B.a3M,f?B.bv:B.bk,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,g,g,g,B.N,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.R,s,B.aj,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bk,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.m),g,g,g,g,B.ra,g,g,1/0))}else B.d.u(d,new A.O(w,new C.f1H(h,new C.ur(f)),A.U(w).k("O<1,w>")))
if(h.e)d.push(new A.D(B.zi,A.at(A.ni(g,f?B.bv:B.bk,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bo(!0,A.x(A.a([new A.D(A_.D3,a0,g),A.E(A.cb(A.x(d,B.B,g,B.e,B.h,0,B.p),B.t,g,B.y,g,g,E.zv,g,g,B.ah),1)],a1),B.B,g,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bIV(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.el:B.c,p=A.m(16),o=A.a([new A.aa(0,B.H,B.v.j(r?0.35:0.08),B.cP,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.bar,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.V(s?B.iv:B.h0,B.b5,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bK
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.D,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd2M()
v=A.BA(d.d)
B.d.u(t,A.a([B.at,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bv:B.bk,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.B,u,B.bb,B.O,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bU.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bI2(d.c*d.d,B.b5,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a5,B.a9,B.x,k,u,u),B.m),u,u,u,u,B.hc,u,u,u)
w=x.p
return A.p(u,A.by(n,new A.F7(A.A(A.a([m,A.E(new A.D(B.anr,A.A(A.a([l,B.bc,t,B.aa,k,A.aI(u,u,u,u,A.V(B.cC,(r?B.bv:B.bk).j(0.75),u,u,u,20),u,u,u,new C.f1s(this,d),u,u,u,u,u,B.co)],w),B.l,u,B.e,B.h,0,u,u),u),1)],w),B.am,u,B.e,B.h,0,u,u),u),B.aq),B.f,u,D.b9h,new A.o(q,u,u,p,o,u,B.m),u,u,u,B.d7,u,u,u,u)}}
C.afv.prototype={
Fj(d){return this.bSi(d)},
bSi(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Fj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(M.pR(d,o,!1),$async$Fj)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).N(null)
w=4
return A.b(A.bM(B.CY,null,x.H),$async$Fj)
case 4:s=t.d
w=5
return A.b(C.h4t(!0,o,s),$async$Fj)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hy(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$Fj)
case 6:p=f
w=7
return A.b(M.pQ(o,!1),$async$Fj)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Fj,v)},
a15(d){return this.cDk(d)},
cDk(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a15=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(M.pR(d,s,!1),$async$a15)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).N(null)
A.hC(d,new C.av4(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(M.pQ(s,!1),$async$a15)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a15,v)},
Rr(d){return this.czg(d)},
czg(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).N(null)
w=3
return A.b(A.hC(d,D.aNv,!0,"NgmyWorksheetProjectScan",x.N),$async$Rr)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bI3(s),$async$Rr)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.T(D.fzG)
w=1
break}q=C.hrq(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dQ(p,x.H),$async$Rr)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Rr,v)},
a16(d){return this.cLR(d)},
cLR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a16=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).N(null)
w=3
return A.b(C.bHx(),$async$a16)
case 3:s=f
if(s==null){w=1
break}r=C.hrq(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dQ(q,x.H),$async$a16)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a16,v)},
B(d){var w=this,v=null,u=A.Q(d).ax.a===B.I,t=new C.ur(u),s=w.d.d.length,r=u?B.el:B.c,q=A.m(28),p=A.a([new A.aa(0,B.H,B.v.j(u?0.35:0.08),B.kQ,36)],x.V),o=x.p
return A.bo(!0,new A.D(B.x3,A.p(v,A.x(A.a([w.cBU(d,t,s),new A.D(D.bIo,A.x(A.a([w.b8Q(t,"QR restore"),B.R,A.A(A.a([w.b3O(t,!0,B.jG,B.aH,B.aH,new C.f1J(w,d),"Show to scan","QR code"),B.ar,w.aAW(t,B.jH,B.b_,B.bl,new C.f1K(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.h,0,v,v),B.di,w.b8Q(t,"Backup files"),B.R,A.A(A.a([w.aAW(t,B.hP,B.aV,B.bU,new C.f1L(w,d),"Full copy","Backup file"),B.ar,w.aAW(t,Q.Ab,B.as,B.aQ,new C.f1M(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.h,0,v,v)],o),B.B,v,B.e,B.h,0,B.p),v)],o),B.l,v,B.e,B.O,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cBU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fm,B.cZ,B.h6],k):A.a([B.b5,B.aV,B.bU],k)
w=A.ao(l,A.V(B.vD,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.m),l,4,l,B.kJ,l,l,l,36),l,l,l)
u=A.m(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.aa(0,B.H,B.v.j(0.2),B.cP,12)],x.V)
r=this.d
s=A.p(l,C.aTF(!0,A.m(13),64,D.bT2,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.D,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,I.ad5,l,l,l)
r=C.bI2(r.gxR(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bIM,A.x(A.a([v,A.A(A.a([s,B.ew,A.E(A.x(A.a([u,B.at,t,B.M,A.A(A.a([r,B.aa,A.p(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.m),l,l,l,l,B.fa,l,l,l)],m),B.l,l,B.e,B.h,0,l,l)],m),B.B,l,B.e,B.h,0,B.p),1),A.aI(l,l,l,l,A.V(B.cC,B.c.j(0.85),l,l,l,l),l,l,l,new C.f1I(d),l,l,l,A.nn(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aVW,l,l,l,l),l,l)],m),B.B,l,B.e,B.h,0,l,l)],m),B.l,l,B.e,B.h,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ay,B.aD,B.x,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b8Q(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bv:B.bk,w,w,w,w,w,w,w,w,11,w,w,B.D,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
b3O(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.am_:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eo:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.aa(0,B.H,B.aH.j(0.12),B.cP,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.K(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.m),r,r,r,r,B.tD,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eJ(new A.D(E.a1P,A.x(A.a([t,B.af,u,B.bs,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bv:B.bk,r,r,r,r,r,r,r,r,11,r,r,B.cH,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aAW(d,e,f,g,h,i,j){return this.b3O(d,!1,e,f,g,h,i,j)}}
C.av4.prototype={
R(){return new C.bp7()}}
C.bp7.prototype={
a_(){this.a3()
this.ah6()},
ah6(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ah6=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bI4(p.c,p.d),$async$ah6)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.f1m(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.f1n(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ah6,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(d).ax.a===B.I,f=g?B.Ct:B.hX,e=i.d
e=e==null?h:B.a.Y(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.V(B.eC,g?B.ab:B.an,h,h,h,18),h,h,h,new C.f1o(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.uo],u),B.l,h,B.e,B.h,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.fm,B.cZ,B.h6],s):A.a([B.b5,B.aV,B.bU],s)
r=x.V
q=A.a([new A.aa(0,B.H,B.aV.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dv,B.K,h,h)
p=C.bI2(p.gxR(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.aj,A.A(A.a([p,B.aa,A.p(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.D,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.m),h,h,h,h,B.fa,h,h,h)],u),B.l,h,B.bb,B.h,0,h,h)],u),B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ay,B.aD,B.x,s,h,h),B.m),h,h,h,h,E.a2a,h,h,1/0)
t=g?D.buk:B.c
q=A.m(24)
p=A.K(w?B.aH.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.aa(0,B.H,B.v.j(g?0.25:0.06),B.du,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.WF,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eCZ)
else{m=A.m(20)
l=A.K(B.bn,B.r,1)
o.push(A.p(h,A.qr(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bS,h,h,h))}}o.push(B.aO)
n=w?B.aH:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.K((w?B.aH:B.aV).j(0.35),B.r,1)
k=w?B.Qq:B.R_
k=A.V(k,w?B.aH:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.ar,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.m),h,h,h,h,B.hA,h,h,h))
return A.c6(h,f,A.bo(!0,A.x(A.a([new A.D(Ah.Pv,e,h),A.E(A.cb(A.x(A.a([s,B.aO,A.p(h,A.x(o,B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.m),h,h,h,h,B.vg,h,h,1/0)],u),B.l,h,B.e,B.h,0,B.p),B.t,h,B.y,h,h,E.aoE,h,h,B.ah),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.av9.prototype={
R(){return new C.aHR(A.A6(B.OM,B.ox,B.vK))}}
C.aHR.prototype={
t(){this.d.t()
this.a2()},
aPV(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.ji(w,d)},
cif(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.iBy(t)
if(s!=null){this.aPV(s)
return}r=C.hGB(t)
if(r!=null)q=A.cY(r,p,0)
else q=!1
if(q){this.aPV(B.a.i(B.a.aY(r,B.a.cd(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eV(A.a([A.aI(t,t,t,t,A.V(u.f?B.rj:Ab.Qy,t,t,t,t,t),t,t,t,new C.f1q(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Ct,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.h7a,t,t,t,1,t,!0),q=A.A5(u.d,B.c0,u.gcie()),p=A.m(28)
p=A.at(A.p(t,t,B.f,t,t,new A.o(t,t,A.K(B.aV,B.r,3),p,A.a([new A.aa(2,B.H,B.aV.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.v.j(0.72)
v=A.m(16)
return A.c6(r,B.v,new A.an(B.a0,t,B.b4,B.t,A.a([q,p,A.ao(32,A.p(t,D.h5W,B.f,t,t,new A.o(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jC,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aMO.prototype={
a9(){return"_WorksheetTab."+this.b}}
C.Pq.prototype={
R(){return new C.aHT(D.af4,A.a([],x.D))},
bw(){return this.r.$0()},
ge9(){return this.c}}
C.aHT.prototype={
gcJz(){return J.bJc(this.e,0,new C.f28())},
a_(){this.a3()
$.aU.cV$.push(this)
this.wt()},
t(){$.aU.hZ(this)
this.a2()},
jn(d){if(d===B.h5)this.wt()},
wt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DT(q.a.c).dc(0,B.kg),$async$wt)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.f24(q,p))
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
if(q.c!=null&&q.f)q.l(new C.f25(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wt,v)},
IS(d){return this.bP_(d)},
bOZ(){return this.IS(null)},
bP_(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iDA(l,d),$async$IS)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lX(l,r,q,D.dtv,new A.W(Date.now(),0,!1))
w=4
return A.b(C.Mu(t.a.c,p),$async$IS)
case 4:o=f
w=5
return A.b(t.wt(),$async$IS)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.T(D.fwK)
w=1
break}n=J.aQ(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.T(D.fyz)
else n.L(q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fn(m)
case 1:return A.h(u,v)}})
return A.i($async$IS,v)},
Fn(d){return this.cmi(d)},
cmi(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Fn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hC(s,new C.ava(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$Fn)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mu(u.a.c,t),$async$Fn)
case 5:case 4:w=6
return A.b(u.wt(),$async$Fn)
case 6:return A.h(null,v)}})
return A.i($async$Fn,v)},
wd(d){return this.c4o(d)},
c4o(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bHx(),$async$wd)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hC(r,D.aNv,!0,"NgmyWorksheetProjectScan",x.N),$async$wd)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bI3(q),$async$wd)
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
r.T(A.b3(null,null,null,null,null,B.t,null,A.c(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hrq(s)
w=15
return A.b(C.Mu(t.a.c,p),$async$wd)
case 15:o=f
w=16
return A.b(t.wt(),$async$wd)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.T(D.fyE)
w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fn(p)
case 1:return A.h(u,v)}})
return A.i($async$wd,v)},
P0(d){return this.bNC(d)},
bNC(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$P0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ce(null,null,!0,null,new C.f1Q(d),s,null,!0,!0,x.y),$async$P0)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pt(t.a.c,A.a([],x.D)),$async$P0)
case 6:w=7
return A.b(t.wt(),$async$P0)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fwP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$P0,v)},
cmw(d){var w=this.c
w.toString
A.bU(B.L,null,new C.f1Z(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b9u(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.ka
else w=B.c
v=A.m(16)
u=A.K(p?B.eo:B.bO,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.m),r,r,r,r,B.bR,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.D,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.p(r,A.x(A.a([s,B.af,t,B.bs,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bv:B.bk,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.m),r,r,r,r,B.tA,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a1C(d,e){return this.cmj(d,e)},
cmj(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1C=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.f1U(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a1C)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hR0(r,new C.f1V(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.P2(d,e),$async$a1C)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1C,v)},
b6s(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.m),u,u,u,u,B.bR,u,u,u)
if(d)t=B.aC
else t=h.a?B.aS:B.aw
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bv:B.bk,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(A2.D9,A.A(A.a([s,B.bc,t,A.V(B.eM,w?B.bv:B.bk,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
ctq(d,e,f,g,h,i){return this.b6s(!1,d,e,f,g,h,i)},
P2(d,e){return this.bNM(d,e)},
bNM(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lB(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$P2)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bGc(t.a.c,d.a),$async$P2)
case 6:w=7
return A.b(t.wt(),$async$P2)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$P2,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.ur(n),l=n?B.c7:B.hX
if(p.f)n=D.bgo
else{w=A.aE(d,B.dK,x.w).w
v=p.bI0(m)
u=p.c3s(m)
t=p.gbF1()
if(n)s=B.ka
else s=B.c
r=A.m(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.GE(A.p(o,A.A(A.a([p.aEy(P.Q7,"Projects",m,D.af4),p.aEy(B.vn,"Cashier",m,D.b49),p.aEy(B.I8,"Family Tree",m,D.hWR)],q),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.eB,0.95,t,o),B.by],q)
v=p.d
if(v===D.af4){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.D,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aW,new C.aA1(p.gaUl(),o)],q),B.l,o,B.e,B.h,0,o,o),B.aB,p.cts(m)],q))}else{n=p.a
if(v===D.b49)t.push(new C.aqY(n.c,m,o))
else{v=p.r
t.push(new C.asa(n.c,n.d,n.e,n.f,new C.f2b(p),new C.f2c(p),new A.bg(v,x.b4)))}}n=A.cb(A.x(t,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c6(o,l,A.bo(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bI0(d){var w=null,v=A.m(8),u=d.a,t=A.V(Z.a3q,u?B.bv:B.bk,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.jX,A.A(A.a([t,B.ba,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bv:B.bk,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.O,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f1N(this),w,w,w,w,w,w,w)},
gbF1(){switch(this.d.a){case 0:return D.aed
case 1:return D.hJs
case 2:return D.aee}},
c3s(d){var w=null,v=A.m(15),u=A.a([new A.aa(0,B.H,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.c32,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.m),w,44,w,w,w,w,w,44),B.bc,D.bNm,A.aG(!1,B.a3,!0,w,A.aM(!1,A.m(12),!0,A.p(w,D.c0k,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f1R(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.B,w,B.e,B.h,0,w,w),r=B.b5.j(0.55),q=A.m(12)
return new C.GE(A.p(w,A.x(A.a([new A.D(B.HJ,s,w),A.p(w,A.x(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.c(A.BA(this.gcJz()),w,w,w,w,w,w,D.fQJ,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.m),w,w,w,B.tz,B.jC,w,w,1/0)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hJr,w)},
aEy(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.L,q=A.m(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.aa(0.5,B.H,B.aV.j(0.42),B.cP,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.bk
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.bk
return A.E(A.aG(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cV(u,A.A(A.a([w,B.dZ,new A.d2(1,B.ci,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.bb,B.h,0,u,u),u,u,B.cp,new A.o(r,u,p,q,o,u,B.m),B.j2,u,u,u,u,B.HS,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f27(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
cts(d){var w,v,u,t,s,r,q=this,p=null
if(J.cw(q.e)){w=d.a
v=w?B.el:B.c
u=A.m(15)
t=A.p(p,D.c0r,B.f,p,p,new A.o(p,p,p,p,A.a([new A.aa(2,B.H,B.aV.j(0.5),B.eT,28)],x.V),D.cd8,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,18,p,p,B.D,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.GE(A.p(p,A.x(A.a([t,B.di,s,B.M,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bk,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.ec,A.A(A.a([A.E(q.aVW(B.jH,"Scan QR",new C.f21(q),d),1),B.ar,A.E(q.aVW(Q.Ab,"Upload file",new C.f22(q),d),1)],r),B.l,p,B.e,B.h,0,p,p),B.aB,A.bI(D.hhN,p,q.gaUl(),A.bp(B.aV,p,p,p,B.c,B.hr,p,p,new A.b9(A.m(12),B.a1),p,p,p))],r),B.l,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bJS,1.05,D.aed,p)}w=J.b8(q.e,new C.f23(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.GE(A.x(w,B.l,p,B.e,B.h,0,B.p),16,B.bR,1,D.aed,p)},
aVW(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,t,!0,A.p(w,A.x(A.a([A.V(d,B.b5,w,w,w,26),B.M,A.c(e,w,w,w,w,w,w,D.fOT,B.K,w,w)],x.p),B.l,w,B.e,B.O,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.m),w,w,w,w,Ax.a1C,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
ctr(d,e){var w,v,u=null,t=e.a,s=t?B.el:B.c,r=A.m(14),q=A.K(t?B.eo:B.bO,B.r,1),p=A.a([new A.aa(0,B.H,B.v.j(t?0.35:0.08),B.eD,10)],x.V),o=A.m(14),n=t?B.bv:B.bk
n=A.by(B.YP,new A.fL(1.7777777777777777,C.aTF(!0,B.fr,1/0,P.Q7,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.c(""+d.d.length+" budget items \xb7 "+A.BA(d.gxR()),u,u,u,u,u,u,D.fMP,u,u,u)],w),B.B,u,B.e,B.h,0,B.p),1)
return A.p(u,A.aG(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bF,A.A(A.a([v,A.aI(u,u,u,u,A.V(Ap.a4u,t?B.bv:B.bk,u,u,u,u),u,u,u,new C.f2_(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.h,0,u,u),u)],w),B.B,u,B.e,B.h,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f20(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.m),u,u,u,B.dU,u,u,u,1/0)}}
C.bC2.prototype={}
C.rE.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd2M(){var w,v,u,t,s=this.c
if(s===B.i.fO(s))w=B.o.v(B.i.M(s))
else{v=B.i.a5(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lX.prototype={
gxR(){return B.d.cE(this.d,0,new C.cJ_())},
ak(){var w=this,v=w.d,u=A.U(v).k("O<1,a9<n,@>>")
v=A.B(new A.O(v,new C.cIZ(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bgW(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lX(w.a,w.b,v,u,w.e)},
bgE(d){return this.bgW(d,null)},
Ua(d){return this.bgW(null,d)}}
C.IF.prototype={
a9(){return"FamilyGender."+this.b}}
C.ib.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hM5(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aHi(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.ib(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.an9.prototype={
a9(){return"FamilyTreeAccessRole."+this.b}}
C.la.prototype={
garu(){var w=this.f
return new A.X(w,new C.bV3(),A.U(w).k("X<1>")).gJ(0)},
ak(){var w=this,v=w.f,u=A.U(v).k("O<1,a9<n,@>>")
v=A.B(new A.O(v,new C.bV2(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.itz(w.y),"games",w.z],x.N,x.z)},
xb(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.la(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bgV(d,e){var w=null
return this.xb(w,w,w,d,e,w,w,w,w)},
cT_(d,e,f,g,h,i,j){return this.xb(d,e,null,f,g,h,i,j,null)},
aHn(d,e){var w=null
return this.xb(w,w,w,w,d,w,w,e,w)},
cT1(d,e,f,g,h,i,j,k){return this.xb(d,e,null,f,g,h,i,j,k)},
cRv(d){var w=null
return this.xb(w,w,w,w,w,w,w,d,w)},
cRT(d){var w=null
return this.xb(w,w,w,w,w,w,w,w,d)},
bgy(d){var w=null
return this.xb(w,w,d,w,w,w,w,w,w)},
aH8(d){var w=null
return this.xb(w,w,w,w,w,d,w,w,w)},
cSx(d,e,f){var w=null
return this.xb(w,d,w,w,e,w,w,f,w)},
cRi(d){var w=null
return this.xb(w,w,w,d,w,w,w,w,w)},
cS4(d,e){var w=null
return this.xb(d,w,w,w,w,w,e,w,w)}}
C.cJ0.prototype={
a9(){return"WrapAlignment."+this.b}}
C.cJ1.prototype={
a9(){return"WrapCrossAlignment."+this.b}}
C.aJY.prototype={}
C.bcn.prototype={
aj(d){this.a=d.a
this.b=d.b},
d1(d){var w=new C.bcn()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b5(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bcm.prototype={
gx3(){return!0},
gGX(){return this.z.b<this.b.length},
aXC(d){switch(0){case 0:return d.a.c}},
aXi(d){switch(0){case 0:return d.a.d}},
bXU(d,e){switch(0){case 0:return new A.i6(d,e)}},
bXh(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hm(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.j7(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Io(b4)
switch(0){case 0:v=b5.b
u=new A.l7(0,v,0,1/0)
t=w===B.Wx
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fB(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hm(b4,u,!0)
f=b1.aXC(g)
f.toString
e=b1.aXi(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJY(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJY(k,j,i))}d=s.length
switch(0){case 0:q=b5.cD(new A.i6(m,l))
a0=q.a
a1=q.b
b1.a=new A.j7(0,0,a0,a1)
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
a8=b1.aXC(g)
e=b1.aXi(g)
e.toString
a9=b1.bXh(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bXU(a6,a3+a9)
b0=g.a
g.a=new A.j7(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fZ(d){var w,v,u,t,s,r=this
r.lC(d)
w=d.b
w.iw()
v=A.dz()
u=r.a
v.ei(u.a,u.b,0,1)
w.pw(0,v)
for(u=r.z,u=B.d.du(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fZ(d)
w.nE(0)},
Ht(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iw(){return this.z}}
C.bAi.prototype={}
var z=a.updateTypes(["ay<~>()","P(ib)","~()","P(la)","P(nI)","a9<n,@>(la)","G(la,la)","G(ib,ib)","n(ib)","la(a9<@,@>)","P(lX)","nI(a9<@,@>)","a9<n,@>(nI)","P(v6)","v6()","G(ib)","ai<ib>()","P(zQ)","a0T(Z)","n?(ib)","eN<n?>(ib)","ay<~>(lX)","P(rE)","a9<n,@>(ib)","ib(a9<@,@>)","G(lX,lX)","P(agQ)","~(bh)","w(p4)","G(G,aaR)","P(qV<G>)","~(qV<G>)","Uz(Z)","P(N6)","P(v5)","~(ib)","n(n)","WU(Z)","Uy(Z)","afa(Z)","a_O(Z)","ib(ib)","cP(bv<n,GT>)","cP(L9)","a0h(Z)","G?(ib)","ib()","P(L9)","D(ib)","~(IF)","a0d(Z)","w(IF,n,a_)","P(agJ)","bv<n,ai<a9<n,@>>>(n,ai<nI>)","a0f(Z)","+count,id,name(G,n,n)(la)","n(la)","a1c(Z)","a1d(Z)","P(mc)","mc()","a_j(Z)","a2Z(Z)","a_Q(Z)","a_P(Z)","~(G)","~(n,lK?)","w(rE)","afv(Z)","~(lG)","ay<~>([n?])","H(H,lX)","w(lX)","H(H,rE)","a9<n,@>(rE)","rE(a9<@,@>)","ai<lK>()","v5()","n(W)","lX(a9<@,@>)","co(IE)","n(lX)","a9<n,@>(lX)","G(nI,nI)","la(a9<n,@>)","la(la)"])
C.fX6.prototype={
$1(d){return d.a+" "+d.b},
$S:132}
C.fX5.prototype={
bqh(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rv(s,d,B.ig,"book",E.Hu),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.Y(r!=null&&A.Me(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bqh(d)},
$S:251}
C.fX7.prototype={
$1(d){return d.b},
$S:132}
C.h6H.prototype={
$1(d){var w=null
return A.eH(w,B.L,new H.QS(this.a,this.b,w),w,w,0,B.a1R,w,B.dd,w,w,w)},
$S:47}
C.fJV.prototype={
$1(d){return d!=null},
$S:241}
C.fJW.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:241}
C.fK0.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:180}
C.fUP.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fj(d,w,w,w,A.hp(w,B.ue,w,w,w,w,w,w,w,B.dL,w,w,10.5,w,B.eL,w,!0,w,w,w,w),w),u=f?B.eL:B.xd
return new A.oo(D.bF7,A.abF(A.a([new A.h8(130,w,v),new A.zP(1,B.I2,A.fj(e,w,w,w,A.hp(w,g==null?D.eFm:g,w,w,w,w,w,w,w,B.dL,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.z9,B.m7))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2005}
C.fUO.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.wg(999)
f=A.xT(A.m6(h,A.fj("Cashier",h,h,h,A.hp(h,D.B6,h,h,h,h,h,h,h,B.dL,h,h,10,h,B.eL,h,!0,h,h,h,h),h),h,new A.l8(D.eFd,h,f,B.il,h),h,h,D.bFB,h))
w=A.xT(A.fj("Debt receipt",h,h,h,A.hp(h,h,h,h,h,h,h,h,h,B.dL,h,h,22,h,B.eL,h,!0,h,h,h,h),h))
v=A.xT(A.fj(C.xz(new A.W(Date.now(),0,!1),!0),h,h,h,D.acC,h))
u=A.wg(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fj(s,h,h,h,A.hp(h,h,h,h,h,h,h,h,h,B.dL,h,h,14,h,B.eL,h,!0,h,h,h,h),h)
r=A.fj("Person who owes",h,h,h,D.acC,h)
q=A.wg(10)
p=x.Z
u=A.m6(h,A.zH(A.a([s,new A.h8(h,2,h),r,new A.h8(h,10,h),A.m6(h,A.zH(A.a([A.fj("Amount owed",h,h,h,D.acC,h),new A.h8(h,2,h),A.fj(A.BA(t.c),h,h,h,A.hp(h,D.B6,h,h,h,h,h,h,h,B.dL,h,h,20,h,B.eL,h,!0,h,h,h,h),h)],p),B.tr,B.m7),h,new A.l8(B.qf,h,q,B.il,h),h,h,D.bEN,1/0)],p),B.tr,B.m7),h,new A.l8(E.aOT,h,u,B.il,h),h,h,D.bGP,1/0)
q=new A.o8(D.eFg,0.9,B.lp)
r=A.wg(12)
s=i.c
o=s.$2("Original due",C.xz(t.r,!1))
n=s.$2("Current due",C.xz(t.f,!1))
m=i.d
l=new A.o8(m,1.1,B.lp)
k=A.wg(8)
j=i.a
k=A.a([o,n,new A.h8(h,6,h),A.m6(h,A.xT(A.fj(t.gaOs(),h,h,h,A.hp(h,m,h,h,h,h,h,h,h,B.dL,h,h,11,h,B.eL,h,!0,0.5,h,h,h),h)),h,new A.l8(h,new A.qg(l,l,l,l),k,B.il,h),h,h,D.bFK,1/0),new A.h8(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.B6))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.B6))
else{n=A.fj("Missed days ("+n+")",h,h,h,A.hp(h,B.ue,h,h,h,h,h,h,h,B.dL,h,h,10.5,h,B.eL,h,!0,h,h,h,h),h)
m=A.U(o).k("O<1,U8>")
o=A.B(new A.O(o,new C.fUN(),m),m.k("aj.E"))
B.d.u(k,A.a([new A.h8(h,4,h),n,new A.h8(h,6,h),new C.bcm(5,5,new C.bcn(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h8(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h8(h,8,h),w,new A.h8(h,3,h),v,new A.h8(h,16,h),u,new A.h8(h,10,h),A.m6(h,A.zH(k,B.z9,B.m7),h,new A.l8(h,new A.qg(q,q,q,q),r,B.il,h),h,h,B.anv,1/0)],p)
w=j.a
if(w!=null){v=new A.o8(B.KA,1,B.lp)
B.d.u(f,A.a([new A.h8(h,16,h),A.fj("Debtor signature",h,h,h,A.hp(h,B.ue,h,h,h,h,h,h,h,B.dL,h,h,10,h,B.eL,h,!0,h,h,h,h),h),new A.h8(h,6,h),A.m6(h,new A.IW(w,B.Z1,h,h),h,new A.l8(h,new A.qg(v,v,v,v),A.wg(6),B.il,h),82,h,B.Ps,1/0)],p))}f.push(new A.h8(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fj(w,h,h,h,D.fEX,h))
f.push(new A.h8(h,18,h))
f.push(A.xT(A.fj("NGMY.ORG",h,h,h,A.hp(h,D.B6,h,h,h,h,h,h,h,B.dL,h,h,14,h,B.eL,h,!0,1.8,h,h,h),h)))
return f},
$S:437}
C.fUN.prototype={
$1(d){var w=null,v=new A.o8(D.KB,0.7,B.lp),u=A.wg(999)
return A.m6(w,A.fj(C.xz(d,!1),w,w,w,A.hp(w,D.KB,w,w,w,w,w,w,w,B.dL,w,w,9.5,w,B.eL,w,!0,w,w,w,w),w),w,new A.l8(w,new A.qg(v,v,v,v),u,B.il,w),w,w,D.bLh,w)},
$S:2006}
C.can.prototype={
$1(d){var w=null,v=B.bE.j(0.08),u=A.m(999),t=A.K(B.bE.j(0.28),B.r,1)
return A.p(w,A.c(C.xz(d,!1),w,w,w,w,w,w,D.fMg,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,w,B.eY,w,w,w)},
$S:2007}
C.h7d.prototype={
$1(d){var w=null,v=A.aE(d,B.bZ,x.w).w,u=A.m(26),t=A.aI(w,w,w,w,D.c42,w,w,w,new C.h7a(d),w,w,w,w,w,B.co),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eH(w,B.L,new A.cS(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a3,!0,u,new A.D(B.a1D,A.x(A.a([new A.bK(B.a9,w,w,t,w),new A.d2(1,B.ci,A.cb(A.x(A.a([new A.e7(new C.b1g(r,w),s),B.R,A.A(A.a([A.E(A.eq(B.Aj,w,D.hdY,new C.h7b(s,r,d),A.dk(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f8,w,new A.b9(A.m(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.E(A.db(B.a55,w,D.haj,new C.h7c(r,d),A.bp(B.b5,w,w,w,B.c,w,B.f8,w,new A.b9(A.m(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.h,0,w,w)],p),B.l,w,B.e,B.O,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.O,0,B.p),w),B.f,B.aw,0,w,w,w,w,w,B.ai),w),w,w,0,B.a22,w,B.dd,w,w,w)},
$S:47}
C.h7a.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.h7b.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.bk$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lw(2.5),$async$$0)
case 4:w=3
return A.b(e.ho(B.ho),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eU(B.dM.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aw(o,0,32)
w=5
return A.b(A.ry(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h7c.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.h11(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.T(A.b3(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h75.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eH(w,B.aw,A.x(A.a([new A.D(D.bGD,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.nx,w,w,w),1),A.aI(w,w,w,w,B.lD,w,w,w,new C.h73(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),w),new A.d2(1,B.ci,new A.D(B.f2,A.by(A.m(14),A.h5(t,B.z,w,w,B.cs,B.dI,!1,w,!1,w,w),B.aq),w),w),new A.D(B.P7,new A.a5(1/0,w,A.db(B.oc,w,D.aZi,new C.h74(t,this.c,d),A.bp(B.b5,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.O,0,B.p),w,w,w,B.Pj,w,B.dd,w,new A.b9(v,B.a1),w)},
$S:47}
C.h73.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.h74.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ry(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h7h.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eH(w,B.aw,new A.D(D.bGL,A.x(A.a([A.A(A.a([D.bMs,A.aI(w,w,w,w,B.lD,w,w,w,new C.h7f(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),B.M,new A.e7(A.by(A.m(14),A.p(w,A.b4(w,w,w,new C.beF(s.ax,w),B.aA),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.db(B.oc,w,D.aZi,new C.h7g(t,s,d),A.bp(B.b5,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.O,0,B.p),w),w,w,w,w,w,B.dd,w,new A.b9(v,B.a1),w)},
$S:47}
C.h7f.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.h7g.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.bk$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lw(2.5),$async$$0)
case 4:w=3
return A.b(e.ho(B.ho),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aw(p,0,32)
r=J.eU(B.dM.gaS(s))
w=5
return A.b(A.ry(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fOT.prototype={
$1(d){return d.a===this.a},
$S:254}
C.dUf.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dU0.prototype={
bpu(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.el:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dU3(s,q,e),p,!0,!0,!1,B.KU,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dU4(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bpu(d,e)},
$S:2008}
C.dU3.prototype={
$1(d){var w,v=null,u=this.c===B.xO,t=u?D.dAP:D.dw8
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aS:B.aw,v,v,v,v,v,v,v,v,15,v,v,B.D,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bo(!0,new A.D(B.ao1,A.x(A.a([u,B.at,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bv:B.bk,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iK(!0,v,v,B.y,D.fvo,new C.dU2(this.a,w,t,d),t.length,v,B.e8,B.ah,!0)],x.p),B.am,v,B.e,B.O,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:26}
C.dU2.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cZ.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.m(14)
if(q)u=B.cZ
else u=(t.b.a.d.a?B.bv:B.bk).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.p(B.z,C.b1f(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dU1(t.d,r),s,s,s,s,s,s,s)},
$S:206}
C.dU1.prototype={
$0(){A.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.dU4.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dTZ.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:86}
C.dU_.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cK(B.cp,e,v)
return new A.da(e,!1,A.iz(B.z,A.at(A.aG(!1,B.a3,!0,v,new A.e9(new C.dTY(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bk(t,new A.bq(0.96,1,u),u.k("bk<bR.T>"))),v)},
$S:34}
C.dTY.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aE(d,B.bZ,x.w).w,i=l.b,h=i.a.d.a,g=h?B.el:B.c,f=A.m(14),e=A.K((h?B.bv:B.bk).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,16,k,k,B.D,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.eB,A.V(B.cC,i.a.d.a?B.bv:B.bk,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dTJ(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.h,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aWs("Name")
r=l.a
q=r.d==null?k:new C.dTK(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bt:B.mm
n=A.K(B.cZ.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bgO(new A.D(B.f7,A.aM(!1,p,!0,A.p(B.z,C.b1f(m==null?"\ud83d\udc64":A.fVE(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cu,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ll,k,B.acr,k,k)
v=A.a([v,B.af,t,B.M,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bk,k,k,k,k,k,k,k,k,11.5,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.aj,A.A(A.a([A.E(i.aX8("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dTL(r,a0),r.d===B.xO),1),B.aa,A.E(i.aX8("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dTQ(r,a0),r.d===B.a8X),1)],u),B.l,k,B.e,B.h,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.M,new A.bK(B.a5,k,k,A.hv(D.c2g,D.hce,new C.dTR(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cZ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.co)),k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.v9(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aWt("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.al,k,k,s,k,k,B.eh,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.R)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.K((t?B.bv:B.bk).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xz(r.a,!1)
v.push(A.aG(!1,B.a3,!0,q,A.aM(!1,p,!0,A.p(k,A.A(A.a([A.E(A.x(A.a([t,B.bs,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.B,k,B.e,B.h,0,B.p),1),D.bZN],u),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.m),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dTS(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.M,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aWs("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,12.5,k,k,B.D,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b4O(r.b.length!==0,B.mt,new C.dTT(r,i,a0),new C.dTU(r,a0),"Upload from gallery","ID photo"))
v.push(i.b4O(r.c.length!==0,D.bT0,new C.dTV(r,i,d,a0),new C.dTW(r,a0),"Camera or gallery","Selfie"))
v.push(B.M)
t=l.w
v.push(new As.a9u("Signature (optional)",t,new C.dTX(a0),new C.dTM(a0,t),new C.dTN(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bv:B.bk
s=(i?B.bv:B.bk).j(0.28)
s=A.E(A.dY(E.aZb,new C.dTO(d),A.dk(k,k,k,k,k,k,k,k,k,t,k,k,B.r6,k,new A.b9(A.m(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cZ,k,k,k,B.c,k,B.r6,k,new A.b9(A.m(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.aa,A.E(A.bI(A.c(h?"Save":"Update",k,k,k,k,k,k,B.we,k,k,k),k,new C.dTP(r,w,d),t),1)],u),B.l,k,B.e,B.h,0,k,k))
return A.p(k,A.cb(A.x(v,B.am,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.m),k,k,k,B.r9,B.jC,k,k,360)},
$S:164}
C.dTJ.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dTK.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dTL.prototype={
$0(){return this.b.$1(new C.dTI(this.a))},
$S:0}
C.dTI.prototype={
$0(){var w=this.a
w.d=B.xO
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dTQ.prototype={
$0(){return this.b.$1(new C.dTH(this.a))},
$S:0}
C.dTH.prototype={
$0(){var w=this.a
w.d=B.a8X
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dTR.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dTS.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wc(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dTG(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTG.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gck(),w.gci(),w.gcB(),0,0,0,0,0)},
$S:0}
C.dTT.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.QG(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dTF(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTF.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dTU.prototype={
$0(){return this.b.$1(new C.dTE(this.a))},
$S:0}
C.dTE.prototype={
$0(){return this.a.b=""},
$S:0}
C.dTV.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.el:B.c
w=3
return A.b(A.bU(q,null,new C.dTC(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.QG(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dTD(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTC.prototype={
$1(d){var w=null
return A.bo(!0,A.x(A.a([A.dO(!1,w,w,w,!0,w,w,w,!0,w,w,B.atz,w,w,w,w,new C.dTw(d),!1,w,w,w,w,w,w,w,D.h2c,w,w,w),A.dO(!1,w,w,w,!0,w,w,w,!0,w,w,B.atx,w,w,w,w,new C.dTx(d),!1,w,w,w,w,w,w,w,D.h9h,w,w,w)],x.p),B.l,w,B.e,B.O,0,B.p),!0,!1,B.ag,!0,!0)},
$S:26}
C.dTw.prototype={
$0(){A.a7(this.a,!1).N("camera")
return null},
$S:0}
C.dTx.prototype={
$0(){A.a7(this.a,!1).N("gallery")
return null},
$S:0}
C.dTD.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dTW.prototype={
$0(){return this.b.$1(new C.dTB(this.a))},
$S:0}
C.dTB.prototype={
$0(){return this.a.c=""},
$S:0}
C.dTX.prototype={
$0(){return this.a.$1(new C.dTA())},
$S:0}
C.dTA.prototype={
$0(){},
$S:0}
C.dTM.prototype={
$0(){return this.a.$1(new C.dTz(this.b))},
$S:0}
C.dTz.prototype={
$0(){return B.d.a6(this.a)},
$S:0}
C.dTN.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ajK(u.a,null,null,new C.dTy(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTy.prototype={
$4(d,e,f,g){this.a.$1(new C.dTv(this.b,d))},
$S:403}
C.dTv.prototype={
$0(){var w=this.a
B.d.a6(w)
B.d.u(w,this.b)},
$S:0}
C.dTO.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dTP.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.T(D.fAy)
return}if(w.a.d==null){w.c.L(x.q).f.T(D.fxn)
return}A.a7(w.c,!1).N(!0)},
$S:0}
C.dUi.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:86}
C.dUj.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.el:B.c,n=A.m(14),m=A.K((p?B.bv:B.bk).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,16,r,r,B.D,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.BA(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bv:B.bk,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.A_(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.A_(r).length>0?B.bE:B.cZ,r,r,r,r,r,r,r,r,12,r,r,B.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.bk
t=(q?B.bv:B.bk).j(0.28)
s=x.p
return new A.da(e,!1,A.at(A.aG(!1,B.a3,!0,r,A.p(r,A.x(A.a([p,B.M,v,u,B.aB,A.A(A.a([A.E(A.dY(B.oq,new C.dUg(d),A.dk(r,r,r,r,r,r,r,r,r,w,r,r,B.jW,r,new A.b9(A.m(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.E(A.bI(D.h9J,r,new C.dUh(d),A.bp(B.cZ,r,r,r,B.c,r,B.jW,r,new A.b9(A.m(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.h,0,r,r)],s),B.am,r,B.e,B.O,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.m),r,r,r,B.zw,B.HJ,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dUg.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dUh.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dUc.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dUd(r),p=r.a.d.a,o=p?B.el:B.c,n=A.m(14),m=A.K((p?B.bv:B.bk).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aS:B.aw,s,s,s,s,s,s,s,s,14,s,s,B.D,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.BA(l.c),s,s,s,s,s,s,D.fNU,s,s,s)],p),B.l,s,B.e,B.h,0,s,s)
w=A.j5((r.a.d.a?B.bv:B.bk).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a3M,"View receipt",new C.dU5(r,d,l))
u=l.x!=null
t=u?B.q0:B.rg
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bGI,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dU6(r,d,l)),q.$3$icon$label$onTap(B.Dr,"Edit",new C.dU7(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mt,"View / download ID",new C.dU8(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bT_,"View / download selfie",new C.dU9(r,d,l)))
if(l.gaJ2())p.push(q.$3$icon$label$onTap(B.a4W,"View / download signature",new C.dUa(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bE,B.eq,"Delete",new C.dUb(r,d,l)))
p.push(B.at)
return A.bo(!0,new A.D(B.tz,A.p(s,A.x(p,B.l,s,B.e,B.O,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:26}
C.dUd.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.aw
else w=d
return A.aM(!1,v,!0,new A.D(B.eX,A.A(A.a([A.V(e,w,v,v,v,20),B.bc,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2009}
C.dU5.prototype={
$0(){A.a7(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h79(w,this.c)},
$S:0}
C.dU6.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.Tu(this.c)},
$S:0}
C.dU7.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.E3(this.c)},
$S:0}
C.dU8.prototype={
$0(){var w,v,u
A.a7(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bIo(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dU9.prototype={
$0(){var w,v,u
A.a7(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bIo(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dUa.prototype={
$0(){A.a7(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h7e(w,this.c)},
$S:0}
C.dUb.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.QF(0,this.c)},
$S:0}
C.dUk.prototype={
$1(d){return d.x==null},
$S:254}
C.dUl.prototype={
$1(d){return d.x!=null},
$S:254}
C.dUm.prototype={
$2(d,e){return d+e.c},
$S:2010}
C.dUn.prototype={
$0(){return this.a.bFy()},
$S:0}
C.dUe.prototype={
$0(){return this.a.ahj(this.b)},
$S:0}
C.fPE.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fPF.prototype={
$0(){return B.d.gG(D.a6d)},
$S:z+77}
C.dji.prototype={
$0(){var w=this.a
return w.l(new C.djg(w,this.b))},
$S:0}
C.djg.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.djh.prototype={
$0(){},
$S:0}
C.djj.prototype={
$0(){var w=this.a.gc4c()
A.a7(this.b,!1).N(w)
return null},
$S:0}
C.fSc.prototype={
$1(d){return C.hvO(A.a0(d,x.N,x.z))},
$S:z+11}
C.fSd.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fSe.prototype={
$2(d,e){var w=A.c9(d.a,null),v=A.c9(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.h5L.prototype={
$1(d){return d.ak()},
$S:z+12}
C.heq.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fOK.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bTL.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eC(e,v)?v:null},
$S:2011}
C.h6l.prototype={
$1(d){var w=this
return new C.a0f(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.djY.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.djX(w,d))},
$S:z+80}
C.djX.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djM.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.djJ.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.djk.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.djl.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.djN.prototype={
$0(){return this.a.w=!1},
$S:0}
C.djt.prototype={
$1(d){var w=null,v=A.Q(d).ax.a===B.I,u=v?B.el:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ej(A.a([A.bL(!1,B.dw,w,w,!0,w,w,w,new C.djr(d),w,w),A.bI(B.yb,w,new C.djs(d),A.bp(B.nI,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.djr.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.djs.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dju.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.djK.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.djL.prototype={
$0(){return B.d.gG(D.Aw)},
$S:z+14}
C.djp.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzk(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Uy(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.djq.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djv.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_O(v,u,J.ad(w.d),null)},
$S:z+40}
C.djw.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djW.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.aA(s,new C.a_s(r.y,r.gzk(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.djU(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.be_(v,e,w,u,t,r.gbWm(),C.hM4(r.y.Q),r.gzk(0),s)
w=t}return A.ca(q,new C.djV(r,e),new A.D(B.a1W,w,s))},
$S:2012}
C.djV.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd3(t).ay){t=this.b
u=x.cy.a(B.d.gd3(u.f.f)).gvv(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.dz()
t=u.a
t.$flags&2&&A.ak(t)
t[11]=0.0013
u.fI(v*3.141592653589793*0.5)
return A.fF(B.a5,A.d5(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.djU.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aKe(B.r0,B.iO)},
$S:0}
C.djG.prototype={
$0(){var w=this.a
return w.l(new C.djF(w))},
$S:0}
C.djF.prototype={
$0(){return this.a.w=!0},
$S:0}
C.djH.prototype={
$0(){var w=this.a.c
w.toString
A.a7(w,!1).N(null)
return null},
$S:0}
C.djm.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.kF.j(0.5),r=x.p,q=A.a([D.h0J,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cw(p.d)?"Write this book":"Write a new book"
q.push(p.a_t(d,B.eg,w,J.cw(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_t(d,K.arr,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cB,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.l0.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cB,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.l0.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_t(d,X.asr,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_t(d,B.p1,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_t(d,B.p1,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eH(u,E.CD,A.bo(!0,new A.D(Ae.zt,A.x(q,B.B,u,B.e,B.O,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.Pm,u,B.dd,u,new A.b9(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:47}
C.djI.prototype={
$0(){A.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.djz.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a0h(v,J.cJ(w.d),w.r+1,null)},
$S:z+44}
C.djA.prototype={
$1(d){var w=null
return A.p9(!1,A.ej(w,w,w,E.CD,new A.kf(this.a,new C.djy(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:312}
C.djy.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.ac4,B.pm,A.E(A.c(e,w,w,w,w,w,w,B.jN,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:786}
C.djB.prototype={
$0(){return this.a.a=!1},
$S:53}
C.djC.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:197}
C.djD.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BH(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Ta(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.djx(s,t))
w=4
return A.b(s.lf(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.djx.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djP.prototype={
$1(d){var w=null
return A.p9(!1,A.ej(w,w,w,E.CD,new A.kf(this.a,new C.djO(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:312}
C.djO.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.ac4,B.pm,A.E(A.c(e,w,w,w,w,w,w,B.jN,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:786}
C.djQ.prototype={
$0(){return this.a.a=!1},
$S:53}
C.djR.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:197}
C.djS.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:197}
C.djT.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BH(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lf(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.djn.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.bmp(B.r0,A5.OW)},
$S:0}
C.djo.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aKe(B.r0,A5.OW)},
$S:0}
C.dlK.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dlL.prototype={
$1(d){var w=this.a
return w.l(new C.dlJ(w))},
$S:9}
C.dlJ.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dlM.prototype={
$1(d){var w=this.a
return w.l(new C.dlI(w))},
$S:9}
C.dlI.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dlN.prototype={
$1(d){var w=this.a
return w.l(new C.dlH(w))},
$S:9}
C.dlH.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dlO.prototype={
$0(){var w=this.a
return w.l(new C.dlG(w,this.b))},
$S:0}
C.dlG.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dlP.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga3u()
A.a7(this.b,!1).N(new A.bt0(w,v))},
$S:0}
C.dkc.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dkb.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a0d(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dkg.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dkf.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bcm(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hG,v,v,v)
return A.ej(A.a([A.bL(!1,B.dw,v,v,!0,v,v,v,new C.dkd(d),v,v),A.bI(B.yb,v,new C.dke(d),A.bp(B.nI,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.CD,w,v,v,v,v,D.h_v,v)},
$S:18}
C.dkd.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dke.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dkh.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dki.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cb(A.bZ(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bHH,t,t,B.ah)},
$S:346}
C.dka.prototype={
$0(){return this.a.Rv(0,this.b)},
$S:0}
C.dk9.prototype={
$0(){return this.a.QU(0,this.b)},
$S:0}
C.cS1.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cS2.prototype={
$0(){return B.d.gG(D.Aw)},
$S:z+14}
C.cS3.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bS(0,new A.D(d,new A.bP(new A.o(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bm,w,w),w),0,0,0)},
$S:2014}
C.db2.prototype={
$1(d){return this.a.l(new C.db1(this.b,this.c))},
$S:9}
C.db1.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.dbr.prototype={
$1(d){return this.a.l(new C.dbe())},
$S:2}
C.dbe.prototype={
$0(){},
$S:0}
C.dbs.prototype={
$1(d){return this.a.l(new C.dbd())},
$S:2}
C.dbd.prototype={
$0(){},
$S:0}
C.dbt.prototype={
$0(){var w=this.a
return w.l(new C.dbc(w,this.b))},
$S:0}
C.dbc.prototype={
$0(){var w=this.a
return w.d=w.goC().GB(this.b.a)},
$S:0}
C.dbu.prototype={
$0(){var w=this.a
return w.l(new C.dbb(w,this.b))},
$S:0}
C.dbb.prototype={
$0(){var w=this.a
return w.d=w.goC().cQP(this.b)},
$S:0}
C.dbv.prototype={
$1(d){return this.a.l(new C.dba())},
$S:2}
C.dba.prototype={
$0(){},
$S:0}
C.dbw.prototype={
$0(){var w=this.a
return w.l(new C.db9(w,this.b))},
$S:0}
C.db9.prototype={
$0(){var w=this.a
return w.d=w.goC().cQU(this.b.a)},
$S:0}
C.dbx.prototype={
$1(d){var w=this.a
return w.l(new C.dbm(w,d))},
$S:6}
C.dbm.prototype={
$0(){var w=this.a
return w.d=w.goC().cRO(this.b)},
$S:0}
C.dby.prototype={
$1(d){var w=this.a
return w.d=w.goC().aHb(d)},
$S:2}
C.dbz.prototype={
$1(d){var w=this.a
return w.d=w.goC().cQX(d)},
$S:2}
C.dbB.prototype={
$1(d){var w=this.a
return w.d=w.goC().cRM(d)},
$S:2}
C.dbC.prototype={
$1(d){var w=this.a
return w.l(new C.dbl(w,d))},
$S:9}
C.dbl.prototype={
$0(){var w=this.a
return w.d=w.goC().cRD(this.b)},
$S:0}
C.dbD.prototype={
$0(){var w=this.a,v=w.goC(),u=B.a.i(w.gzk(0).a.a),t=B.a.i(w.gaEl().a.a)
u=v.bh4(B.a.i(w.gatN().a.a),t,u)
A.a7(this.b,!1).N(u)
return null},
$S:0}
C.bTV.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bTP.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bTO(w,d))},
$S:10}
C.bTO.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bTY.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bTQ.prototype={
$0(){var w=this.a
w.Q=D.b3J
w.aeU(1)
w.r.x=null},
$S:0}
C.bTR.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b3J)return
w=new A.e2()
w.cT(u.as*13+u.a.e)
v=u.r
v.Q=3+w.av(3)
v.z=D.d9M[w.av(6)]
v.as=u.f.a+2.6},
$S:0}
C.bTU.prototype={
$0(){var w=this.a
w.Q=D.aeL
w.aeU(2)
w.r.z=null},
$S:0}
C.bTT.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hUM
t.aeU(3)
w=t.r
w.d=s
w.x="I say: "+t.gCX()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.av(3)
w.z=s?D.dgU[v.av(4)]:D.dDy[v.av(3)]
w.as=t.a+2.8},
$S:0}
C.bTW.prototype={
$0(){var w=this.a
w.Q=D.b3K
w.CW=this.b
w.cy=1
w.aeU(4)
w.r.f=w.f.a+5},
$S:0}
C.bTX.prototype={
$0(){},
$S:0}
C.bTS.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.bTM.prototype={
$0(){return this.a.LF(this.b)},
$S:0}
C.bTN.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.bVr.prototype={
$0(){var w=this
return w.a.RP(w.b,0,w.c,w.d)},
$S:0}
C.bVs.prototype={
$0(){var w=this
return w.a.RP(w.b,3,w.c,w.d)},
$S:0}
C.bVt.prototype={
$0(){var w=this
return w.a.RP(w.b,1,w.c,w.d)},
$S:0}
C.bVu.prototype={
$0(){var w=this
return w.a.bVN(w.b,w.c,w.d)},
$S:0}
C.bVv.prototype={
$0(){var w=this
return w.a.RP(w.b,4,w.c,w.d)},
$S:0}
C.bVw.prototype={
$0(){var w=this
return w.a.RP(w.b,2,w.c,w.d)},
$S:0}
C.bVx.prototype={
$0(){var w=this
return w.a.RP(w.b,5,w.c,w.d)},
$S:0}
C.bVy.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:788}
C.bVq.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a7m[d],p=q.a.a7(0,new A.r(0,-q.b*1.2*124)),o=A.fY(r,B.cK,r,3,r,A.cW(r,r,r,r,r,r,r,r,r,D.fEC,e),B.a7,B.cc,r,B.e3,B.cd)
o.nA(130)
w=o.b.a.c
w=p.aI(0,new A.r(0,w.gb4(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bw(A.bY(w,v.gb4(v)+12,u+18),B.ij)
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
$S:791}
C.bUb.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bUc.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.anA(d),w.anA(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fCA.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.heg.prototype={
$2(d,e){if(e!=null)J.c7(this.a.c_(0,d,new C.heh()),e)},
$S:z+66}
C.heh.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.hei.prototype={
$1(d){return d!==this.a},
$S:3}
C.hej.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.hek.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hef(this.c,d))},
$S:3}
C.hef.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.hel.prototype={
$1(d){return d!==this.a},
$S:3}
C.hem.prototype={
$1(d){return d!==this.a},
$S:3}
C.hen.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hee(this.c,d))},
$S:3}
C.hee.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fQh.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.h4F.prototype={
$1(d){return d.Q},
$S:z+15}
C.h4G.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fM5.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fT8.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bOX.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.heH.prototype={
$2(d,e){return B.o.aQ(C.hI6(d),C.hI6(e))},
$S:240}
C.heI.prototype={
$1(d){return d!==this.a},
$S:3}
C.h5h.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bN5.prototype={
$0(){var w=this.a
w.ch=!0
w.bay()},
$S:0}
C.bN0.prototype={
$0(){},
$S:0}
C.bN6.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bMZ.prototype={
$0(){},
$S:0}
C.bN_.prototype={
$0(){},
$S:0}
C.bN4.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b4(u,u,u,new C.beH(t,u),B.aA),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.v.j(0.7)
v=A.m(14)
s.push(A.ao(u,A.p(u,A.c(t.dy,u,u,u,u,u,u,D.fMs,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.m),u,u,u,u,B.bR,u,u,u),u,u,14,14,6,u))}return A.aA(B.c_,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bN1(t,e),u,u,u,u,u,u,u,new C.bN2(t,e),u,u,u,u,u,u,u,u,u,new C.bN3(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bN1.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bN3.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:24}
C.bN2.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bMY.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.ct1.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.ct2.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.ct0(w))},
$S:0}
C.ct0.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.ct3.prototype={
$0(){var w=this,v=w.a
v.gj0()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.ct4.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.ct5.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.ct6.prototype={
$0(){},
$S:0}
C.ct7.prototype={
$0(){var w=this.a
w.z=w.XX(++w.e)
w.Q=A.c2(w.gkR()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.csY.prototype={
$0(){return A.a7(this.a,!1).hY()},
$S:0}
C.csZ.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj0().length,e=i/2,d=new C.ct_(i,f,h),a0=g.as,a1=A.a3(a0).k("ba<2>")
a0=A.B(new A.ba(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.ca(new A.hz(a0),new C.csT(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj0().length!==0&&!B.d.q(g.gj0(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.Rb(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cP(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new T.Nf(new C.csU(g,u),new C.csV(g,u),new C.csW(g,u),j,j,new A.bg("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fq:B.bf,j,j,j,j,j,j,j,j,13,j,j,B.D,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj0().length!==0&&!B.d.q(g.gj0(),-1)){a0=g.e+1>=g.gkR().length?"See my result":"Next family"
g=A.at(C.uG(a0,g.gqs(g),B.d_,B.jE,D.fJ),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.XX(0):s).length))break
if(!B.d.q(g.gj0(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.XX(0)
o=s}else o=s
n=s[u]
n=A.ea(B.z,new C.Rb(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.XX(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.rl(new A.bq(0,p,t),new C.csX(),new T.EI(u,j,new C.Rb(l.b,k,62,!1,j),new A.kX(0.25,new C.Rb(m.b,k,62,!1,j),j),new A.kp(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,T.hLX(),!0,!0,j,j,j,j,j,j,!1,B.j5,j,new A.bg("chip-"+r,a0),w),B.aZ,B.j3,j,new A.bg("t"+r+"-"+q,a0),v))}++u}g=A.bZ(B.fV,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:65}
C.ct_.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:756}
C.csT.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gj0().length!==0&&!B.d.q(t.gj0(),-1)
return A.b4(p,p,p,new C.be8(q.b,o,v,w,p),B.aA)},
$S:58}
C.csV.prototype={
$1(d){return this.a.gj0()[this.b]===-1},
$S:z+30}
C.csW.prototype={
$1(d){return this.a.cUG(this.b,d.a)},
$S:z+31}
C.csU.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj0()[t]!==-1,r=A.m(18),q=e.length!==0?B.d_.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.d_:B.jU,B.r,2)
u=s?A.ly(new C.csS(),A.at(new C.Rb(u.gaGD()[u.gj0()[t]].b,u.gaGD()[u.gj0()[t]].a,62,!1,v),v,v,v),B.nC,B.j3,v,v,new A.bq(0.3,1,x.X),x.i):D.bf1
return A.cV(v,u,v,v,B.aZ,new A.o(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:2017}
C.csS.prototype={
$3(d,e,f){return A.ea(B.z,f,e,null,null)},
$S:116}
C.csX.prototype={
$3(d,e,f){return A.dT(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:116}
C.cT5.prototype={
$1(d){return d>=1},
$S:118}
C.cHZ.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkR()[w.e].d.length)w.l(new C.cHY(w))},
$S:10}
C.cHY.prototype={
$0(){return this.a.f++},
$S:0}
C.cI6.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cI7.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cI8.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cI5(w))},
$S:0}
C.cI5.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cI9.prototype={
$0(){return this.a.f++},
$S:0}
C.cIa.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cIb.prototype={
$0(){},
$S:0}
C.cIc.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a6(0)
w.as=!1
w.ay=0},
$S:0}
C.cI0.prototype={
$0(){return A.a7(this.a,!1).hY()},
$S:0}
C.cI1.prototype={
$3(d,e,f){var w=null
return A.ly(new C.cI_(this.a,e),w,B.aZ,B.hx,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:2018}
C.cI_.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.d_.j(u.as?0.6:0.15)
t=A.a([new A.aa(0,B.H,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.p(v,A.ia(new A.BR(new A.v3(B.v.j(e),B.MP,v,B.Zu),H.bZH(A.b4(v,v,v,new C.aCJ(u.gkR()[u.e].c,u.as,v),B.aA),new A.EN(w,w,B.Xm)),v),B.aq),B.f,v,v,new A.o(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2019}
C.cI2.prototype={
$3(d,e,f){return A.d5(A.dT(f,new A.r(0,14*(1-e))),e)},
$S:100}
C.cI3.prototype={
$3(d,e,f){return A.dT(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:116}
C.cI4.prototype={
$0(){return this.a.brO(this.b)},
$S:0}
C.feK.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.ao6$)
v.ao6$=w
v.qg$.sp(0,w)
v.as_(u)},
$S:7}
C.fp6.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:10}
C.bUX.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bUW())},
$S:0}
C.bUW.prototype={
$0(){},
$S:0}
C.bUU.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bUS.prototype={
$0(){},
$S:0}
C.bUT.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gNj()
w=s+1>=r.length?3:5
break
case 3:q=C.bIC(p.gaqQ(0),0,r.length)
p.l(new C.bUP(p,q))
o=p
w=6
return A.b(C.C1(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.C2(s.d,s.c.a,"school",p.gaqQ(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bUQ())
w=4
break
case 5:p.l(new C.bUR(p))
p.gqz().Ww(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bUP.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bUQ.prototype={
$0(){},
$S:0}
C.bUR.prototype={
$0(){return this.a.x++},
$S:0}
C.bUV.prototype={
$0(){return this.a.LF(this.b)},
$S:0}
C.bUO.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.feL.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hMa(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.F2
C.T8(q,D.eyE,0,0.2,-0.6,-0.2,null,w,D.exn,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a7(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.T()
p=A.L()
p.r=D.H6.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.feM.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.T8(this.a,D.exK,0,u,0.7,-0.5,null,null,D.Kt,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.feN.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.T8(this.a,D.ezr,0,0,0.8,-0.5,null,null,D.Kt,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.feO.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.T8(w.b,D.eyy,0,v,-0.8,-0.5,null,null,D.Kt,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.feP.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.eyC:D.F2
C.T8(p,D.ey2,0,t,0,-0.6,null,v,D.Kt,3,0,s,1.3,u,0,w,0)
q=q.cez(new A.r(222,455),9)
$.T()
w=A.L()
w.r=B.d_.gp(0)
p.af(q,w)},
$S:0}
C.feQ.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:788}
C.bUA.prototype={
$2(d,e){return d+e},
$S:61}
C.bUL.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bUM.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bUN.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj0()[u.b]=s
t.gj0()[u.d]=t.y
w=t.as
v=t.qg$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bUH.prototype={
$1(d){return d},
$S:99}
C.bUG.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qg$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bUI.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bUJ.prototype={
$0(){},
$S:0}
C.bUK.prototype={
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
C.bUC.prototype={
$0(){return A.a7(this.a,!1).hY()},
$S:0}
C.bUD.prototype={
$2(d,e){var w=this.a
w=w.gkR()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:61}
C.bUE.prototype={
$2(d,e){var w=null,v=C.hmD(new A.av(A.aT(1/0,e.a,e.b),A.aT(1/0,e.c,e.d))),u=this.a
return A.aA(B.c_,new A.e7(A.b4(w,w,w,new C.blo(u,u.qg$),B.aA),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bUB(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bUB.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj0().length
u=B.o.D(B.i.bc((t.a-s.a)/r/450*v),0,v-1)
w.d4D(w.gj0()[u])}},
$S:24}
C.bUF.prototype={
$1(d){var w=this.a
return w.gkR()[w.f].d[d]},
$S:79}
C.dvb.prototype={
$2(d,e){return 0},
$S:61}
C.bUm.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bUl())},
$S:0}
C.bUl.prototype={
$0(){},
$S:0}
C.bUk.prototype={
$0(){},
$S:0}
C.bUe.prototype={
$0(){},
$S:0}
C.bUf.prototype={
$0(){},
$S:0}
C.bUj.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.BQ},
$S:0}
C.bUi.prototype={
$1(d){var w=null,v=this.a.gqz(),u=A.c(d,w,w,w,w,w,w,D.aXK,w,w,w),t=v.gboa(0)
return A.aA(B.c_,A.x(A.a([u,B.bs,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aXX,w,w,w)],x.p),B.B,w,B.e,B.h,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbua(v),w,w,w,w,w,w,!1,B.a4)},
$S:126}
C.bUg.prototype={
$0(){return this.a.LF(this.b)},
$S:0}
C.bUh.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.bUd.prototype={
$0(){return A.a7(this.a,!1).hY()},
$S:0}
C.e5S.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e5T.prototype={
$1(d){return this.a},
$S:43}
C.e5U.prototype={
$0(){var w=this.a
return w.d=w.gTw().bgy(this.b)},
$S:0}
C.e5Q.prototype={
$1(d){return new C.Uz(this.a,null)},
$S:z+32}
C.e5R.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e5P.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hG,w,w,w)
return A.ej(A.a([A.bL(!1,E.aZl,w,w,!0,w,w,w,new C.e5N(d),w,w),A.bL(!1,D.h79,w,w,!0,w,w,w,new C.e5O(d),w,w)],x.p),w,w,D.fJ,v,w,w,w,w,D.fUu,w)},
$S:18}
C.e5N.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e5O.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.e5M.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.T(A.b3(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e5V.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e5W.prototype={
$0(){var w=this.a,v=this.b,u=C.bGi(v,10,w.r,!1)
return w.uF(C.hvP(w.a.d,"kahoot",u,w.gb83(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e5X.prototype={
$0(){var w=this.a
return w.uF(new C.amZ(this.b,w.a.d,w.r,null))},
$S:0}
C.e5Y.prototype={
$0(){var w=this.a
return w.uF(new C.al8(this.b,w.a.d,w.r,null))},
$S:0}
C.e60.prototype={
$0(){var w=this.a
return w.uF(new C.avZ(this.b,w.a.d,w.r,null))},
$S:0}
C.e61.prototype={
$0(){var w=this.a
return w.uF(new C.azW(this.b,w.a.d,w.r,null))},
$S:0}
C.e62.prototype={
$0(){var w=this.a
return w.uF(new C.an1(this.b,w.a.d,w.r,null))},
$S:0}
C.e63.prototype={
$0(){var w=this.a
return w.uF(new C.an5(this.b,w.a.d,w.r,null))},
$S:0}
C.e64.prototype={
$0(){var w=this.a
return w.uF(new C.an7(this.b,w.a.d,w.r,null))},
$S:0}
C.e65.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d4Y()
return v.uF(C.hvP(v.a.d,"creator_"+u.a,w,v.gb83(),"A game by the family",t,this.c.a))},
$S:0}
C.e66.prototype={
$0(){return this.a.Pp(this.b)},
$S:0}
C.e67.prototype={
$0(){return this.a.Yo(0,this.b)},
$S:0}
C.e5Z.prototype={
$0(){return this.a.Pp(null)},
$S:0}
C.e6_.prototype={
$0(){return this.a.L(x.q).f.T(D.fxt)},
$S:0}
C.bUy.prototype={
$0(){var w=this.a
w.d=D.b2P
w.z=3},
$S:0}
C.bUz.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aR5()}else w.l(new C.bUx(w))},
$S:10}
C.bUx.prototype={
$0(){return this.a.z--},
$S:0}
C.bUo.prototype={
$0(){var w=this.a
w.d=D.aer
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bUp.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bUn(w))
if(w.as<=0){d.a1(0)
w.b8_(-1)}},
$S:10}
C.bUn.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bUu.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Y2},
$S:0}
C.bUv.prototype={
$0(){return this.a.e++},
$S:0}
C.bUr.prototype={
$0(){var w=this.a
w.d=D.b2Q
w.ay=this.b},
$S:0}
C.bUs.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bUw.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:2020}
C.bUt.prototype={
$0(){return this.a.LF(this.b)},
$S:0}
C.bUq.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hY()},
$S:0}
C.bTZ.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.az()
s=A.a([new A.au(new A.bd(s,B.b6,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.bd(u,B.b6,B.aP),r))}return s},
$S:2021}
C.bU_.prototype={
$0(){return this.a.gDw().c.push(C.hgm(null,0,20,""))},
$S:0}
C.bU9.prototype={
$1(d){var w=null
return A.bC(w,new A.b6(4,A.m(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dx,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.FA,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:245}
C.bU8.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDw().c,m=this.b,l=n[m],k=o.chI(l),j=B.c.j(0.06),i=A.m(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.LM,p,p,p),B.aW],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.atk,p,p,p,new C.bU3(o,m),p,p,p,p,p,p))
n=J.a2(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.h,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bU4(l),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.ds,!0,B.a7,p,B.ao,p,p,p,p),B.M],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aFl[v]
t=D.aF1[v]
s=v+1
f.push(new A.D(B.eA,new A.c1(B.aK,B.e,B.h,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.aa,new A.bu(1,B.b8,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bU5(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.ds,!0,B.a7,p,B.ao,p,p,p,p),p),new Aw.PN(v,l.c,new C.bU6(o,l),p,!1,D.lS,p,p,p,p,p,!1,!1,p,I.b3x,p,p,p,p,p,w)],g),p),p))}f.push(D.h_a)
f.push(B.aj)
n=A.a([D.fTy,B.aa],g)
for(r=0;r<3;++r){q=D.ciF[r]
n.push(new A.D(B.f7,A.jK(p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bU7(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.h,0,p,p))
return A.p(p,A.x(f,B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.m),p,p,p,B.kJ,B.bg,p,p,p)},
$S:155}
C.bU3.prototype={
$0(){var w=this.a
return w.l(new C.bU2(w,this.b))},
$S:0}
C.bU2.prototype={
$0(){return B.d.cJ(this.a.gDw().c,this.b)},
$S:0}
C.bU4.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bU5.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bU6.prototype={
$1(d){return this.a.l(new C.bU1(this.b,d))},
$S:157}
C.bU1.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bU7.prototype={
$1(d){return this.a.l(new C.bU0(this.b,this.c))},
$S:9}
C.bU0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7x.prototype={
$0(){var w=this.a
w.wE()
w.a.bw()
w.a.qt()},
$S:0}
C.e7w.prototype={
$0(){var w=this.a
w.wE()
w.a.bw()
w.a.qt()},
$S:0}
C.e7z.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.cw(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e7A.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7B.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e7v.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e7y.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e7D.prototype={
$0(){this.a.PL()
return null},
$S:0}
C.e7C.prototype={
$0(){return this.a.Fo(this.b)},
$S:0}
C.e6Y.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bL(!1,B.dw,w,w,!0,w,w,w,new C.e6W(d),w,w),r=A.bp(B.bU,w,w,w,w,w,w,w,w,w,w,w)
return A.ej(A.a([s,A.bI(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e6X(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e6W.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e6X.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.e6Z.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cRi(this.b)},
$S:0}
C.e6T.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aWJ(w.b,w.c,w.d)},
$S:7}
C.e6k.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e6l.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6C.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.HC(t.a.c),$async$$0)
case 2:s=r.nL(q.dN(e,new C.e6A(t)))
if(s!=null&&t.c!=null)t.l(new C.e6B(t,s))
t.a.bw()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e6A.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e6B.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6D.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e6E.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6S.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cS4(C.hMk(w),w)},
$S:0}
C.e6z.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.WU(u,w,C.aSg(u,w),new C.e6y(v),null)},
$S:z+37}
C.e6y.prototype={
$1(d){return this.bpB(d)},
bpB(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e6x(s,d))
w=3
return A.b(s.uB(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:787}
C.e6x.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.bgy(this.b)},
$S:0}
C.e6P.prototype={
$1(d){return d.as},
$S:z+1}
C.e6Q.prototype={
$1(d){var w=this
return new A.e9(new C.e6O(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e6O.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.el:B.c,h=A.m(26),g=A.K(B.bU.j(0.5),B.r,1.5),f=A.p(k,D.bY_,B.f,k,k,new A.o(B.bU.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.x(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,12.5,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.B,k,B.e,B.h,0,B.p),1)
f=A.A(A.a([f,B.bc,a0,A.aI(k,k,k,k,A.V(B.cC,j?B.bv:B.bk,k,k,k,k),k,k,k,new C.e6I(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.h,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bU:B.bU.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ax(B.bU,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bU
a0.push(A.aA(k,A.cV(k,A.c(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.aZ,new A.o(q,k,new A.bE(n,n,n,n),new A.bb(p,p,p,p),k,k,B.m),B.hl,k,k,k,k,B.D5,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e6J(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bZ(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c9n,new A.D(D.bI7,f,k),new A.D(D.bHZ,e,k),new A.D(B.r9,a0,k),new A.D(X.aox,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bk,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.V(Al.arc,j?B.bv:B.bk,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bI0,A.A(A.a([a0,B.ar,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,k,k,k,B.D,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.ayF(k,B.bU,k,k,!1,B.y,k,k,k,k,k,k,new C.e6K(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.h,0,k,k),k))}f.push(B.aB)
j=A.m(20)
e=A.a([new A.aa(0,B.H,B.az.j(0.35),B.hS,12)],x.V)
f.push(A.aA(k,A.p(k,A.A(A.a([D.fTU,B.bc,D.bMp,D.bYF],w),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.cdb,B.m),k,k,k,B.ic,B.bF,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e6L(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.x6,A.A(A.a([A.E(A.dY(B.dw,new C.e6M(a1),k),1),B.ar,A.E(A.bI(N.aZN,k,new C.e6N(t,a1),A.bp(B.bU,k,k,k,k,k,B.cq,k,k,k,k,k)),1)],w),B.l,k,B.e,B.h,0,k,k),k))
return A.bo(!0,A.p(k,A.cb(A.x(f,B.B,k,B.e,B.O,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.aq,k,k,new A.o(i,k,g,h,k,k,B.m),k,k,k,B.zk,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:87}
C.e6I.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e6J.prototype={
$0(){return this.b.$1(new C.e6H(this.a,this.c))},
$S:0}
C.e6H.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e6K.prototype={
$1(d){var w=this.a
w.l(new C.e6F(w,d))
this.b.$1(new C.e6G())},
$S:9}
C.e6F.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e6G.prototype={
$0(){},
$S:0}
C.e6L.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(new A.aIS(!0,w))
return null},
$S:0}
C.e6M.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e6N.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(new A.aIS(!1,w))
return null},
$S:0}
C.e6R.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cRT(this.b.b)
w.r.a6(0)},
$S:0}
C.e68.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.ajV(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hF9(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e69.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aH8(w)},
$S:0}
C.e70.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.afa(this.b,w,this.c,null)},
$S:z+39}
C.e6V.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.el:B.c,t=A.m(20),s=A.V(B.kN,B.aV,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.O,0,B.p)
return A.ej(A.a([A.bI(D.haZ,w,new C.e6U(d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e6U.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e6a.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e6b.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e6c.prototype={
$1(d){return d.a},
$S:z+8}
C.e6d.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.ib(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aH8(w)},
$S:0}
C.e6h.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.ajV(q)
w=A.U(q).k("X<1>")
q=A.B(new A.X(q,new C.e6f(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hF9(v.e,null,r,v.f,v.r,new C.e6g(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e6g.prototype={
$0(){return this.a.ac1(this.b)},
$S:0}
C.e6f.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e6i.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.U(w).k("O<1,ib>")
w=A.B(new A.O(w,new C.e6e(this.b),v),v.k("aj.E"))
u.d=t.aH8(w)},
$S:0}
C.e6e.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e7_.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e6u.prototype={
$1(d){return d.length!==0},
$S:3}
C.e6v.prototype={
$1(d){var w=this
return new A.e9(new C.e6t(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e6t.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.el:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bk,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.O(o,new C.e6p(u,e,o),A.U(o).k("O<1,w>")))
p.push(B.M)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.m(12),B.dB),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.al,v,v,v,v,v,B.mL,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.am,v,B.e,B.O,0,B.p)
t=w.a
return A.ej(A.a([A.bL(!1,B.dw,v,v,!0,v,v,v,new C.e6q(d),v,v),A.bI(B.LW,v,new C.e6r(t,u,o,e),A.bp(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fYw,v,new C.e6s(t,u,o,d),A.bp(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:230}
C.e6p.prototype={
$1(d){var w=null
return A.dO(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c6a,w,w,w,new C.e6o(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2022}
C.e6o.prototype={
$0(){return this.a.$1(new C.e6m(this.b,this.c))},
$S:0}
C.e6m.prototype={
$0(){return B.d.X(this.a,this.b)},
$S:0}
C.e6q.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e6r.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e6n(w.c,u))
v.bN(0,B.ck)}},
$S:0}
C.e6n.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e6s.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a7(w.d,!1).N(!0)},
$S:0}
C.e6w.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cSx(this.b,D.vj,C.HA(v,w.a.c))},
$S:0}
C.e77.prototype={
$1(d){return d.as},
$S:z+1}
C.e78.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.ji(this.b,w)},
$S:0}
C.e79.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.iDg(v)
return w.Xb(v==null?null:v.a)},
$S:0}
C.e7a.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.iev(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aT(1/0,e.a,e.b)
s=A.aT(1/0,e.c,e.d)
l.czs(new A.av(u,t),v.gbng(),new A.av(k,s))}k=A.m(22)
s=this.b.a
r=s?D.d7o:D.d5i
q=A.K(s?B.dx:D.bmW,B.r,1)
p=A.m(22)
o=A.bS(0,A.b4(m,m,m,new C.bhs(s,m),B.aA),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.by(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bS(0,A.vg(new A.R(n,n,n,n),new A.a5(u,t,new C.bip(l.d,v,l.f,w,new C.e73(l),l.gciU(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bAp(s,new C.e74(l,e),new C.e75(l,e),new C.e76(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.aX,B.b1,B.x,r,m,m),B.m),m,m,m,S.anz,m,m,m,m)},
$S:175}
C.e73.prototype={
$1(d){var w=this.a
w.l(new C.e71(w,d))},
$S:2}
C.e71.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.X(0,v)
else w.I(0,v)},
$S:0}
C.e74.prototype={
$0(){var w=this.b
return this.a.beG(1.25,new A.av(A.aT(1/0,w.a,w.b),A.aT(1/0,w.c,w.d)))},
$S:0}
C.e75.prototype={
$0(){var w=this.b
return this.a.beG(0.8,new A.av(A.aT(1/0,w.a,w.b),A.aT(1/0,w.c,w.d)))},
$S:0}
C.e76.prototype={
$0(){var w=this,v=w.b
return w.a.aWJ(new A.av(A.aT(1/0,v.a,v.b),A.aT(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbng())},
$S:0}
C.e7b.prototype={
$0(){var w=this.a
return w.l(new C.e72(w))},
$S:0}
C.e72.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e6j.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fM(new A.fC(s.c)),$async$$0)
case 2:t.yK("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dkm.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bmf(u,C.hR4(v.c,u),new C.dkl(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dkl.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dkn.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bpC(d.d,d.c,u.f.q(0,d.a),new C.dkk(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dkk.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fPI.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nL(new A.cO(new A.X(v,new C.fPJ(d),w.k("X<1>")),new C.fPK(),w.k("cO<1,n>")))},
$S:z+19}
C.fPJ.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fPK.prototype={
$1(d){return d.a},
$S:z+8}
C.fPG.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fPH.prototype={
$1(d){return d.b},
$S:z+8}
C.fPN.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nL(new A.cO(new A.X(v,new C.fPO(d),w.k("X<1>")),new C.fPP(),w.k("cO<1,n>")))},
$S:z+19}
C.fPO.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fPP.prototype={
$1(d){return d.a},
$S:z+8}
C.fPL.prototype={
$1(d){var w,v=A.eA([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fPM.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dkp.prototype={
$0(){return this.a},
$S:z+46}
C.dkG.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:247}
C.dky.prototype={
$2(d,e){var w=this.a.c_(0,d,new C.dkz()),v=J.a2(w)
if(!v.q(w,e))v.I(w,e)},
$S:122}
C.dkz.prototype={
$0(){return A.a([],x.s)},
$S:794}
C.dkx.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eC(w,e)
return w===!0},
$S:276}
C.dkq.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dkw.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dkv.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aQ(v==null?D.El:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aQ(v==null?B.Z:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aQ(t==null?D.El:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:2024}
C.dkr.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dkA.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.I(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aQ(u==null?B.Z:u)
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
if(r.a!==a9&&!B.d.aR(w,new C.dkB(r)))w.push(r)}}B.d.br(w,new C.dkC(a8))
B.d.b0(w,new C.dkD())
q=C.ieu(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.f5m],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bsK(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2025}
C.dkB.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dkC.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dkD.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.dkE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a2(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.ba(v,A.a3(v).k("ba<2>")).cE(0,0,B.ov)+88-w.gG(n).a}else u=0
for(w=J.a2(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:765}
C.dkF.prototype={
$1(d){return 16+d*156},
$S:156}
C.dko.prototype={
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
t=J.aQ(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.L9(d,new A.r(e+t,w),s,s.length))}},
$S:197}
C.dks.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aM0(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:122}
C.dkt.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dku.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:796}
C.dkH.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:796}
C.dkI.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:392}
C.dkJ.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:204}
C.dkK.prototype={
$1(d){return d>=0.5},
$S:118}
C.fuH.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.h9(A.aM(!1,v,!0,new A.a5(38,38,A.V(d,this.a.c?B.c:B.cx,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w,w)},
$S:2027}
C.f4v.prototype={
$1(d){var w=null,v=A.m(8),u=B.bU.j(0.12),t=A.m(8)
return new A.D(B.lx,A.aM(!1,v,!0,A.p(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fJc,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.Pr,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f4u(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.f4u.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dAY.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dAX.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mM,B.K,w,w)
return A.ej(A.a([A.bL(!1,B.dw,w,w,!0,w,w,w,new C.dAV(d),w,w),A.bL(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.n4,w,w,w,w,w,w,w,w,w,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dAW(d),w,w)],x.p),B.bb,B.D0,w,u,D.bJ2,w,D.bKZ,new A.b9(v,B.a1),w,w)},
$S:18}
C.dAV.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dAW.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dB6.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dB7.prototype={
$1(d){var w=this.a
return w.l(new C.dB5(w,d))},
$S:z+49}
C.dB5.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dB8.prototype={
$1(d){var w=null
return A.qW(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dBb.prototype={
$1(d){var w=this.a
return w.l(new C.dB4(w,d))},
$S:35}
C.dB4.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dBa.prototype={
$1(d){var w=null
return A.qW(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dBc.prototype={
$1(d){var w=this.a
return w.l(new C.dB3(w,d))},
$S:35}
C.dB3.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dBd.prototype={
$0(){var w=this.a
return w.l(new C.dB2(w))},
$S:0}
C.dB2.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dBe.prototype={
$0(){var w=this.a
return w.l(new C.dB1(w))},
$S:0}
C.dB1.prototype={
$0(){return++this.a.at},
$S:0}
C.dBf.prototype={
$0(){var w=this.a
return w.l(new C.dB0(w))},
$S:0}
C.dB0.prototype={
$0(){return--this.a.ax},
$S:0}
C.dBg.prototype={
$0(){var w=this.a
return w.l(new C.dB_(w))},
$S:0}
C.dB_.prototype={
$0(){return++this.a.ax},
$S:0}
C.dBh.prototype={
$1(d){var w=this.a
return w.l(new C.dAZ(w,d))},
$S:9}
C.dAZ.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dB9.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dBi.prototype={
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
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cV(r,A.x(A.a([t,B.at,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.D,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.h,0,B.p),r,r,B.aZ,new A.o(w,r,u,v,r,r,B.m),B.eI,r,r,r,r,B.jW,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dBj(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dBj.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dBs.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.chr.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:102}
C.chy.prototype={
$1(d){return d.ak()},
$S:z+5}
C.chz.prototype={
$2(d,e){var w=J.b8(e,new C.chx(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bv(d,w,x.d2)},
$S:z+53}
C.chx.prototype={
$1(d){return d.ak()},
$S:z+12}
C.cht.prototype={
$1(d){return C.ana(A.a0(d,x.N,x.z))},
$S:z+9}
C.chu.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.chv.prototype={
$1(d){return C.hvO(A.a0(d,x.N,x.z))},
$S:z+11}
C.chw.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.chD.prototype={
$1(d){return new A.aJ3(d.f.length,d.a,d.b)},
$S:z+55}
C.chE.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:516}
C.chA.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.chB.prototype={
$1(d){return d.cRv(C.HA(d,this.a))},
$S:z+85}
C.e7k.prototype={
$1(d){return C.uH(d,this.a.a.c)},
$S:z+3}
C.e7l.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e7p.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e7q.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e7h.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2M(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zl("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(M.pQ(r.c,r.e),$async$$0)
case 4:s.zl(p)
w=5
return A.b(s.KG(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e7i.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2M(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zl("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(M.pQ(r.c,r.e),$async$$0)
case 4:s.zl(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e7j.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.WX(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zl("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zl("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zl("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.KG(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ac(j)
o=r.a
if(o.c==null){w=1
break}o.zl(B.a.eq(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e7o.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2L(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zl("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a7(r,!1).c8(A.e5(new C.e7n(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(M.pQ(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e7n.prototype={
$1(d){var w=this.b
return new C.a1c(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e7m.prototype={
$1(d){return D.hPa},
$S:z+58}
C.e7s.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e7t.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e7r(w,d)
return new A.D(B.d7,new C.bit(this.b,d.c,d.a,w,null),null)},
$S:2028}
C.e7r.prototype={
$0(){return this.a.Z2(this.b.b)},
$S:0}
C.e7c.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e7d.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e7e.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e7f.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e7g.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e7u.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.Y(s,"NGMYFTSYNC2"))t=!A.cY(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a7(this.b,!1).N(s)
return}},
$S:214}
C.dTm.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dTn.prototype={
$0(){return B.d.gG(D.a7L)},
$S:z+60}
C.dTo.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b4(A.at(A.V(this.b.d,B.c.j(0.95),w,w,D.deU,44),w,w,w),w,w,new C.bnn(u,t,v,w),B.aA)},
$S:58}
C.h6O.prototype={
$1(d){return A.oW(new C.h6N(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:133}
C.h6N.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.el:B.c,p=A.a([new A.aa(0,B.H,B.v.j(r?0.35:0.08),B.uc,24)],x.V),o=r?B.eo:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bU.j(0.18)],x.O)
w=A.p(t,D.c07,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a5,B.a9,B.x,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aS:B.aw,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.R,o,new A.D(E.aoB,A.A(A.a([w,B.bc,A.E(A.x(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bv:B.bk,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.h,0,B.p),1)],u),B.l,t,B.e,B.h,0,t,t),t),A.E(A.iK(!0,t,e,B.y,D.fvw,new C.h6M(this.b,s),20,B.ao5,t,B.ah,!1),1)],u),B.l,t,B.e,B.h,0,B.p),B.f,t,t,new A.o(q,t,t,B.lo,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:123}
C.h6M.prototype={
$2(d,e){var w=null,v=D.a7L[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.K(s?B.eo:B.bO,B.r,1),q=A.a([new A.aa(0,B.H,B.v.j(s?0.35:0.08),B.eD,8)],x.V),p=A.m(15),o=A.E(new C.a85(v.a,!0,w),1),n=s?B.ka:B.iL,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aS:B.aw,w,w,w,w,w,w,w,w,13,w,w,B.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eJ(A.by(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bv:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.B,w,B.e,B.h,0,B.p),B.f,n,w,w,w,w,w,w,B.iP,w,w,w)],l),B.am,w,B.e,B.h,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h6L(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:82}
C.h6L.prototype={
$0(){A.a7(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.crj.prototype={
$0(){return this.a.ail(this.b)},
$S:0}
C.h6b.prototype={
$1(d){return D.hJF},
$S:z+61}
C.hdZ.prototype={
$1(d){var w=this
return new C.a2Z(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.h6f.prototype={
$1(d){return new C.a_Q(this.a,null)},
$S:z+63}
C.h6e.prototype={
$1(d){return D.hKG},
$S:z+64}
C.dbP.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dbQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dbO(w,d))},
$S:35}
C.dbO.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dbR.prototype={
$1(d){return this.a.Lj()},
$S:2}
C.dbS.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dbL.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dbM.prototype={
$1(d){return this.a.Lj()},
$S:2}
C.dbN.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cJE.prototype={
$0(){},
$S:0}
C.cJK.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cJL.prototype={
$0(){return this.a.aRZ(-1)},
$S:0}
C.cJM.prototype={
$1(d){return this.a.l(new C.cJJ())},
$S:2}
C.cJJ.prototype={
$0(){},
$S:0}
C.cJN.prototype={
$0(){return this.a.aRZ(1)},
$S:0}
C.cJO.prototype={
$1(d){return this.a.l(new C.cJI())},
$S:2}
C.cJI.prototype={
$0(){},
$S:0}
C.cJP.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.eo:B.bO
return A.v8(u,u,B.b5,r,u,new C.cJH(t,d),B.xa,s,w,u,new A.ax(v,1,B.r,-1),B.co)},
$S:2029}
C.cJH.prototype={
$1(d){var w=this.a
return w.l(new C.cJF(w,this.b))},
$S:9}
C.cJF.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cJQ.prototype={
$1(d){return this.a.l(new C.cJG())},
$S:2}
C.cJG.prototype={
$0(){},
$S:0}
C.cJR.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.fuc.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a7(this.b,!1).N(w)},
$S:2}
C.fud.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.fue.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a7(this.b,!1).N(w)},
$S:0}
C.fua.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbEF()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bKY,new A.e7(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bAe(p,v,this.b.a,u,t,r),r,r,B.aA)},
$S:58}
C.fub.prototype={
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
return A.aG(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eJ(D.eDc,r,new A.o(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.df(-1.2+t,-0.5),new A.df(1.2-t,0.8),B.x,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:139}
C.h4s.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:57}
C.f1F.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f1w.prototype={
$0(){return this.a.e=!0},
$S:0}
C.f1x.prototype={
$0(){return this.a.e=!1},
$S:0}
C.f1D.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.e9(new C.f1C(w,this.b),null)},
$S:20}
C.f1C.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.el:B.c,t=A.m(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eH(w,u,new A.D(B.aov,A.x(A.a([s,B.aj,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bk,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hC_(new C.f1z(r,e),r.a),B.aB,A.A(A.a([A.E(A.dY(B.dw,new C.f1A(d),w),1),B.ar,A.E(A.bI(B.Xg,w,new C.f1B(r,d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.h,0,w,w)],q),B.am,w,B.e,B.O,0,B.p),w),w,w,w,w,w,B.dd,w,new A.b9(t,B.a1),w)},
$S:105}
C.f1z.prototype={
$1(d){return this.b.$1(new C.f1y(this.a,d))},
$S:35}
C.f1y.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.f1A.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f1B.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(w)
return null},
$S:0}
C.f1E.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.Ua(this.b)},
$S:0}
C.f1r.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bgE(w)},
$S:0}
C.f1v.prototype={
$1(d){return this.bpY(d)},
bpY(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mu(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.ji(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f1u.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.U(w).k("X<1>")
w=A.B(new A.X(w,new C.f1t(this.b),v),v.k("M.E"))
u.d=t.bgE(w)},
$S:0}
C.f1t.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.f1G.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.ji(this.b,w)},
$S:0}
C.f1H.prototype={
$1(d){return this.a.bIV(d,this.b)},
$S:z+67}
C.f1s.prototype={
$0(){return this.a.ac0(this.b)},
$S:0}
C.hdM.prototype={
$1(d){return new C.afv(this.a,this.b,this.c,null)},
$S:z+68}
C.f1J.prototype={
$0(){return this.a.a15(this.b)},
$S:0}
C.f1K.prototype={
$0(){return this.a.Rr(this.b)},
$S:0}
C.f1L.prototype={
$0(){return this.a.Fj(this.b)},
$S:0}
C.f1M.prototype={
$0(){return this.a.a16(this.b)},
$S:0}
C.f1I.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f1m.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f1n.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.f1o.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f1q.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qy(),$async$$0)
case 2:if(t.c!=null)t.l(new C.f1p(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f1p.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.f28.prototype={
$2(d,e){return d+e.gxR()},
$S:z+71}
C.f24.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f25.prototype={
$0(){return this.a.f=!1},
$S:0}
C.f1Q.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.el:B.c,s=A.m(24),r=A.p(v,D.c0C,B.f,v,v,new A.o(B.aC.j(u?0.18:0.08),v,A.K(B.aC.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.aw
u=u?B.eo:B.bO
w=x.p
return A.eH(v,t,new A.D(B.x9,A.x(A.a([r,B.aO,q,B.M,p,B.di,A.A(A.a([A.E(A.dY(B.oq,new C.f1O(d),A.dk(v,v,v,v,v,v,v,v,v,o,v,v,B.f8,v,new A.b9(A.m(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.ar,A.E(A.bI(D.heU,v,new C.f1P(d),A.bp(B.aC,v,v,v,v,v,B.f8,v,new A.b9(A.m(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.h,0,v,v)],w),B.l,v,B.e,B.O,0,B.p),v),v,v,v,v,v,B.dd,v,new A.b9(s,B.a1),v)},
$S:47}
C.f1O.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.f1P.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.f1Z.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.el:B.c,i=A.m(28),h=A.a([new A.aa(0,B.H,B.v.j(k?0.35:0.08),B.h1,28)],x.V),g=k?D.dmK:At.a72,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.m),m,4,m,m,m,m,m,40),B.aB,D.foC,B.at,new A.bK(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cH,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ay,B.aD,B.x,g,m,m),B.m),m,m,m,m,E.aoz,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bk,m,m,m,m,m,m,m,m,11,m,m,B.D,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b9u(B.b_,B.jH,new C.f1W(v,d),l,"Camera import","Scan QR"),1),B.ar,A.E(v.b9u(B.cG,Q.Ab,new C.f1X(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.h,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bk,m,m,m,m,m,m,m,m,11,m,m,B.D,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aC.j(k?0.14:0.06)
q=A.m(16)
p=A.K(B.aC.j(0.28),B.r,1)
o=A.p(m,D.c_U,B.f,m,m,new A.o(B.aC.j(0.12),m,m,A.m(12),m,m,B.m),m,m,m,m,B.bR,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aS:B.aw,m,m,m,m,m,m,m,m,m,m,m,B.D,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bk,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.B,m,B.e,B.h,0,B.p),1)
return A.bo(!0,new A.D(B.x3,A.p(m,A.x(A.a([g,new A.D(B.aow,A.x(A.a([w,B.R,u,B.by,t,B.R,A.aG(!1,B.a3,!0,m,A.aM(!1,s,!0,A.p(m,A.A(A.a([o,B.bc,n,A.V(B.eM,k?B.bv:B.bk,m,m,m,m)],f),B.l,m,B.e,B.h,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.m),m,m,m,m,B.bF,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.f1Y(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.B,m,B.e,B.h,0,B.p),m)],f),B.l,m,B.e,B.O,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:26}
C.f1W.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.wd("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f1X.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.wd("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f1Y.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.P0(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f1U.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.el:B.c,m=A.m(24),l=A.a([new A.aa(0,B.H,B.v.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.eo:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bv:B.bk
u=A.by(w,new A.a5(48,48,C.aTF(!0,A.m(12),48,P.Q7,u,v.c,48),q),B.aq)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.BA(v.gxR())
s=x.p
r=this.a
return A.bo(!0,new A.D(B.x3,A.p(q,A.x(A.a([B.R,k,new A.D(D.aot,A.A(A.a([u,B.bc,A.E(A.x(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bv:B.bk,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.B,q,B.e,B.h,0,B.p),1)],s),B.l,q,B.e,B.h,0,q,q),q),B.CT,r.ctq(B.vD,B.aV,new C.f1S(d),p,"QR code or backup file","Transfer project"),r.b6s(!0,B.eq,B.aC,new C.f1T(d),p,"Remove from this device","Delete project"),B.R],s),B.l,q,B.e,B.O,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:26}
C.f1S.prototype={
$0(){A.a7(this.a,!1).N("transfer")
return null},
$S:0}
C.f1T.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
C.f1V.prototype={
$1(d){return this.bpZ(d)},
bpZ(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mu(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wt(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f2b.prototype={
$0(){var w=this.a
w.a.bw()
w.l(new C.f2a(w))},
$S:0}
C.f2a.prototype={
$0(){return this.a.r++},
$S:0}
C.f2c.prototype={
$0(){var w=this.a
return w.l(new C.f29(w))},
$S:0}
C.f29.prototype={
$0(){return this.a.r++},
$S:0}
C.f1N.prototype={
$0(){var w=this.a.c
w.toString
return A.ji(w,null)},
$S:0}
C.f1R.prototype={
$0(){return this.a.cmw(this.b)},
$S:0}
C.f27.prototype={
$0(){var w=this.a
return w.l(new C.f26(w,this.b))},
$S:0}
C.f26.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f21.prototype={
$0(){return this.a.wd("scan")},
$S:0}
C.f22.prototype={
$0(){return this.a.wd("file")},
$S:0}
C.f23.prototype={
$1(d){return this.a.ctr(d,this.b)},
$S:z+72}
C.f20.prototype={
$0(){return this.a.Fn(this.b)},
$S:0}
C.f2_.prototype={
$0(){return this.a.a1C(this.b,this.c)},
$S:0}
C.cJ_.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cIZ.prototype={
$1(d){return d.ak()},
$S:z+74}
C.cIX.prototype={
$1(d){return C.hXm(A.a0(d,x.N,x.z))},
$S:z+75}
C.cIY.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fOA.prototype={
$1(d){return d.y===D.l8},
$S:z+3}
C.hey.prototype={
$1(d){return C.aSg(d,this.a)},
$S:z+3}
C.fM4.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bV3.prototype={
$1(d){return!d.as},
$S:z+1}
C.bV2.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bV_.prototype={
$1(d){return C.hvQ(A.a0(d,x.N,x.z))},
$S:z+24}
C.bV0.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bV1.prototype={
$1(d){return J.k(d)},
$S:15}
C.fC8.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fxF.prototype={
$1(d){return C.hlb(A.a0(d,x.N,x.z))},
$S:z+79}
C.fxG.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fxH.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h6_.prototype={
$1(d){return J.k(d)},
$S:15}
C.h60.prototype={
$1(d){return d.a},
$S:z+81}
C.h61.prototype={
$1(d){return d.length!==0},
$S:3}
C.h62.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h63.prototype={
$1(d){return d.Ua(null).ak()},
$S:z+82}
C.hew.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fP3.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fSi.prototype={
$1(d){return C.ana(A.a0(d,x.N,x.z))},
$S:z+9}
C.fSj.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fSk.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fSl.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fSm.prototype={
$1(d){return C.uH(d,this.a)},
$S:z+3}
C.h5N.prototype={
$1(d){return C.uH(d,this.a)},
$S:z+3}
C.her.prototype={
$1(d){return C.ana(A.a0(d,x.N,x.z))},
$S:z+9}
C.hes.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.het.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fOL.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fOM.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.heC.prototype={
$1(d){return!d.as},
$S:z+1}
C.fOf.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fOg.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fOh.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.he_.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fT9.prototype={
$1(d){return d.Q},
$S:z+15}
C.h5G.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fSf.prototype={
$1(d){return C.ana(A.a0(d,x.N,x.z))},
$S:z+9}
C.fSg.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fSh.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h5B.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fye.prototype={
$1(d){return d.length!==0},
$S:3}
C.fyf.prototype={
$1(d){return C.hvQ(A.a0(d,x.N,x.z))},
$S:z+24}
C.fyg.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fyh.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:15}
C.fyi.prototype={
$1(d){return d.length!==0},
$S:3}
C.fyv.prototype={
$2(d,e){return d.eD(new C.fyw(e))},
$S:2030}
C.fyw.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.cn},
$S:2031}
C.fys.prototype={
$1(d){return C.ijv(d,this.a)},
$S:z+84}
C.fyt.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fyu.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fCT.prototype={
$1(d){return d.a},
$S:z+56}
C.fCU.prototype={
$1(d){return d.length!==0},
$S:3}
C.fCV.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fFV.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fLi.prototype={
$1(d){return C.hHG(d,C.HA(d,this.a))},
$S:z+5}
C.fLj.prototype={
$1(d){return C.hHH(d,C.HA(d,this.a))},
$S:z+5};(function aliases(){var w=C.aCL.prototype
w.bxS=w.t
w=C.aAU.prototype
w.bxN=w.t
w=C.aIg.prototype
w.byf=w.t
w=C.aCM.prototype
w.bxT=w.t
w=C.aCO.prototype
w.bxU=w.t
w=C.aCP.prototype
w.bxV=w.t
w=C.aOt.prototype
w.bAJ=w.t
w=C.aQA.prototype
w.bD2=w.t
w=C.aQB.prototype
w.bD3=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aFM.prototype,"gcqe","cqf",28)
var r
w(r=C.aCK.prototype,"gcj_","cj0",65)
v(r,"gaQ9","Ox",0)
v(r,"gcyM","BL",0)
v(r,"gbQQ","Pf",0)
v(r,"gcNw","zm",0)
v(r,"gcsm","a2l",0)
v(r,"gbMa","OX",0)
v(r,"gbRf","Yt",0)
w(r,"gbWm","bWn",78)
v(r,"gbGl","AF",0)
v(C.aCN.prototype,"gcNs","Gg",0)
v(r=C.an_.prototype,"gbuc","bud",2)
v(r,"gbu4","bu5",2)
v(r,"gcOz","cOA",2)
u(r,"gqs","kM",0)
u(r=C.al9.prototype,"gf1","fR",2)
w(r,"gcjZ","ck_",27)
u(C.aw_.prototype,"gqs","kM",0)
v(r=C.azX.prototype,"gd_d","d_e",2)
u(r,"gqs","kM",0)
u(C.aM6.prototype,"gbua","bub",2)
v(C.an8.prototype,"gCi","cOM",2)
u(r=C.an6.prototype,"gcPt","cPu",2)
u(r,"gqs","kM",0)
v(r=C.an2.prototype,"gbt2","bt3",2)
v(r,"gcUE","cUF",2)
u(r=C.an4.prototype,"gf1","fR",2)
u(r,"giA","cO5",2)
v(r=C.an0.prototype,"gcNV","cNW",2)
u(r,"gbrV","jI",2)
v(r=C.aGl.prototype,"gahY","wu",0)
v(r,"gclI","a1t",0)
v(r,"gaUq","IT",0)
v(r=C.aGi.prototype,"gcJl","a4v",0)
v(r,"gahY","wu",0)
v(r,"gcwJ","a3_",0)
v(r,"gclD","b4D",2)
v(r,"gcmJ","a1H",0)
w(r,"gciU","ciV",35)
v(r,"gbR7","IY",0)
v(r,"gcKu","cKv",2)
v(r,"gc8s","a_g",0)
w(r,"gcho","chp",36)
v(r,"gclr","cls",2)
v(r=C.aEL.prototype,"gceC","QW",0)
v(r,"gceE","ceF",2)
v(r,"gbNF","abD",0)
v(r=C.aGk.prototype,"gbUJ","YZ",0)
v(r,"gc4j","ZF",0)
v(r,"gcDj","a3T",0)
v(r,"gczm","a3t",0)
v(C.aGj.prototype,"gcz4","ajM",0)
v(C.avb.prototype,"gchm","a13",0)
v(C.aBt.prototype,"ga4e","Lj",2)
v(C.aBs.prototype,"ga4e","Lj",2)
v(C.aA8.prototype,"ga4e","Lj",2)
v(r=C.aHS.prototype,"gb5Q","RY",0)
v(r,"gbF9","X5",0)
v(r,"gcmx","cmy",2)
w(C.aHR.prototype,"gcie","cif",69)
t(C.aHT.prototype,"gaUl",0,0,null,["$1","$0"],["IS","bOZ"],70,0,0)
s(C,"hQ9","itx",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aF,[C.aqL,C.v5,C.nI,C.IE,C.agJ,C.L2,C.v6,C.bVz,C.tp,C.bqU,C.anh,C.aeN,C.lK,C.bUa,C.avn,C.zQ,C.alQ,C.N6,C.bc9,C.aaR,C.bjy,C.agQ,C.aB9,C.agE,C.aM6,C.L9,C.GT,C.bir,C.aM0,C.as7,C.dkL,C.mc,C.aWD,C.aWC,C.aUE,C.ur,C.rE,C.lX,C.ib,C.la,C.aJY])
u(A.hf,[C.fX6,C.fX5,C.fX7,C.h6H,C.fJV,C.fJW,C.fK0,C.fUP,C.fUO,C.fUN,C.can,C.h7d,C.h75,C.h7h,C.fOT,C.dU3,C.dTZ,C.dU_,C.dTC,C.dTy,C.dUi,C.dUj,C.dUc,C.dUd,C.dUk,C.dUl,C.fPE,C.fSc,C.fSd,C.h5L,C.heq,C.fOK,C.h6l,C.djY,C.djk,C.djt,C.djK,C.djp,C.djv,C.djm,C.djz,C.djA,C.djy,C.djP,C.djO,C.dlL,C.dlM,C.dlN,C.dkb,C.dkg,C.dkf,C.cS1,C.cS3,C.db2,C.dbr,C.dbs,C.dbv,C.dbx,C.dby,C.dbz,C.dbB,C.dbC,C.bTV,C.bTP,C.fCA,C.hei,C.hej,C.hek,C.hef,C.hel,C.hem,C.hen,C.hee,C.fQh,C.h4F,C.fM5,C.fT8,C.bOX,C.heI,C.h5h,C.bN6,C.bN1,C.bN3,C.bN2,C.ct_,C.csV,C.csW,C.csU,C.csS,C.csX,C.cT5,C.cHZ,C.cI1,C.cI_,C.cI2,C.cI3,C.feK,C.fp6,C.bUH,C.bUB,C.bUF,C.bUi,C.e5T,C.e5Q,C.e5R,C.e5P,C.e5V,C.bUz,C.bUp,C.bU9,C.bU8,C.bU4,C.bU5,C.bU6,C.bU7,C.e7y,C.e6Y,C.e6T,C.e6k,C.e6A,C.e6D,C.e6z,C.e6y,C.e6P,C.e6Q,C.e6K,C.e68,C.e70,C.e6V,C.e6a,C.e6b,C.e6c,C.e6h,C.e6f,C.e6e,C.e6u,C.e6v,C.e6p,C.e77,C.e73,C.dkm,C.dkn,C.fPI,C.fPJ,C.fPK,C.fPG,C.fPH,C.fPN,C.fPO,C.fPP,C.fPL,C.fPM,C.dkG,C.dkw,C.dkr,C.dkB,C.dkC,C.dkF,C.dkt,C.dkI,C.dkJ,C.dkK,C.fuH,C.f4v,C.dAX,C.dB6,C.dB7,C.dB8,C.dBb,C.dBa,C.dBc,C.dBh,C.dBi,C.chy,C.chx,C.cht,C.chu,C.chv,C.chw,C.chD,C.chA,C.chB,C.e7k,C.e7n,C.e7m,C.e7t,C.e7u,C.dTm,C.h6O,C.h6b,C.hdZ,C.h6f,C.h6e,C.dbQ,C.dbR,C.dbM,C.cJM,C.cJO,C.cJP,C.cJH,C.cJQ,C.fuc,C.h4s,C.f1D,C.f1z,C.f1v,C.f1t,C.f1H,C.hdM,C.f1Q,C.f1Z,C.f1U,C.f1V,C.f23,C.cIZ,C.cIX,C.cIY,C.fOA,C.hey,C.fM4,C.bV3,C.bV2,C.bV_,C.bV0,C.bV1,C.fxF,C.fxG,C.h6_,C.h60,C.h61,C.h62,C.h63,C.hew,C.fP3,C.fSi,C.fSj,C.fSl,C.fSm,C.h5N,C.her,C.hes,C.het,C.fOL,C.fOM,C.heC,C.fOf,C.fOg,C.he_,C.fT9,C.h5G,C.fSf,C.fSg,C.h5B,C.fye,C.fyf,C.fyg,C.fyh,C.fyi,C.fyw,C.fys,C.fyt,C.fCT,C.fCU,C.fFV,C.fLi,C.fLj])
u(A.aw,[C.b1g,C.amY,C.aXW,C.a_s,C.be_,C.Rb,C.a7i,C.tP,C.IG,C.bip,C.bmf,C.bAp,C.bpC,C.af9,C.bme,C.af8,C.bmd,C.aEM,C.aL2,C.afa,C.GP,C.biq,C.aep,C.bio,C.bit,C.b1e,C.avb,C.afv])
u(A.lJ,[C.beF,C.bfT,C.bfK,C.aJS,C.blg,C.bqT,C.aY0,C.beH,C.aCJ,C.be8,C.bv_,C.blo,C.bkO,C.bkV,C.bis,C.bhs,C.bnn,C.bAe])
u(A.iG,[C.h7a,C.h7b,C.h7c,C.h73,C.h74,C.h7f,C.h7g,C.dUf,C.dU1,C.dU4,C.dTJ,C.dTK,C.dTL,C.dTI,C.dTQ,C.dTH,C.dTR,C.dTS,C.dTG,C.dTT,C.dTF,C.dTU,C.dTE,C.dTV,C.dTw,C.dTx,C.dTD,C.dTW,C.dTB,C.dTX,C.dTA,C.dTM,C.dTz,C.dTN,C.dTv,C.dTO,C.dTP,C.dUg,C.dUh,C.dU5,C.dU6,C.dU7,C.dU8,C.dU9,C.dUa,C.dUb,C.dUn,C.dUe,C.fPF,C.dji,C.djg,C.djh,C.djj,C.djX,C.djM,C.djJ,C.djl,C.djN,C.djr,C.djs,C.dju,C.djL,C.djq,C.djw,C.djU,C.djG,C.djF,C.djH,C.djI,C.djB,C.djD,C.djE,C.djx,C.djQ,C.djT,C.djn,C.djo,C.dlK,C.dlJ,C.dlI,C.dlH,C.dlO,C.dlG,C.dlP,C.dkc,C.dkd,C.dke,C.dkh,C.dka,C.dk9,C.cS2,C.db1,C.dbe,C.dbd,C.dbt,C.dbc,C.dbu,C.dbb,C.dba,C.dbw,C.db9,C.dbm,C.dbl,C.dbD,C.bTO,C.bTY,C.bTQ,C.bTR,C.bTU,C.bTT,C.bTW,C.bTX,C.bTS,C.bTM,C.bTN,C.bVr,C.bVs,C.bVt,C.bVu,C.bVv,C.bVw,C.bVx,C.heh,C.h4G,C.bN5,C.bN0,C.bMZ,C.bN_,C.bMY,C.ct1,C.ct2,C.ct0,C.ct3,C.ct5,C.ct6,C.ct7,C.csY,C.cHY,C.cI6,C.cI7,C.cI8,C.cI5,C.cI9,C.cIa,C.cIb,C.cIc,C.cI0,C.cI4,C.bUX,C.bUW,C.bUU,C.bUS,C.bUT,C.bUP,C.bUQ,C.bUR,C.bUV,C.bUO,C.feL,C.feM,C.feN,C.feO,C.feP,C.bUL,C.bUM,C.bUN,C.bUG,C.bUI,C.bUJ,C.bUK,C.bUC,C.bUm,C.bUl,C.bUk,C.bUe,C.bUf,C.bUj,C.bUg,C.bUh,C.bUd,C.e5S,C.e5U,C.e5N,C.e5O,C.e5M,C.e5W,C.e5X,C.e5Y,C.e60,C.e61,C.e62,C.e63,C.e64,C.e65,C.e66,C.e67,C.e5Z,C.e6_,C.bUy,C.bUx,C.bUo,C.bUn,C.bUu,C.bUv,C.bUr,C.bUs,C.bUt,C.bUq,C.bTZ,C.bU_,C.bU3,C.bU2,C.bU1,C.bU0,C.e7x,C.e7w,C.e7z,C.e7A,C.e7B,C.e7v,C.e7D,C.e7C,C.e6W,C.e6X,C.e6Z,C.e6l,C.e6C,C.e6B,C.e6E,C.e6S,C.e6x,C.e6I,C.e6J,C.e6H,C.e6F,C.e6G,C.e6L,C.e6M,C.e6N,C.e6R,C.e69,C.e6U,C.e6d,C.e6g,C.e6i,C.e7_,C.e6o,C.e6m,C.e6q,C.e6r,C.e6n,C.e6s,C.e6w,C.e78,C.e79,C.e71,C.e74,C.e75,C.e76,C.e7b,C.e72,C.e6j,C.dkl,C.dkk,C.dkp,C.dkz,C.dkq,C.f4u,C.dAY,C.dAV,C.dAW,C.dB5,C.dB4,C.dB3,C.dBd,C.dB2,C.dBe,C.dB1,C.dBf,C.dB0,C.dBg,C.dB_,C.dAZ,C.dB9,C.dBj,C.dBs,C.e7l,C.e7p,C.e7q,C.e7h,C.e7i,C.e7j,C.e7o,C.e7s,C.e7r,C.e7c,C.e7d,C.e7e,C.e7f,C.e7g,C.dTn,C.h6L,C.crj,C.dbP,C.dbO,C.dbS,C.dbL,C.dbN,C.cJE,C.cJK,C.cJL,C.cJJ,C.cJN,C.cJI,C.cJF,C.cJG,C.cJR,C.fud,C.fue,C.f1F,C.f1w,C.f1x,C.f1y,C.f1A,C.f1B,C.f1E,C.f1r,C.f1u,C.f1G,C.f1s,C.f1J,C.f1K,C.f1L,C.f1M,C.f1I,C.f1m,C.f1n,C.f1o,C.f1q,C.f1p,C.f24,C.f25,C.f1O,C.f1P,C.f1W,C.f1X,C.f1Y,C.f1S,C.f1T,C.f2b,C.f2a,C.f2c,C.f29,C.f1N,C.f1R,C.f27,C.f26,C.f21,C.f22,C.f20,C.f2_])
u(A.af,[C.aqY,C.Uy,C.a0d,C.a0h,C.a0f,C.a_O,C.amZ,C.al8,C.avZ,C.azW,C.an7,C.an5,C.an1,C.WU,C.an3,C.Uz,C.asa,C.as4,C.a0T,C.as8,C.a1c,C.a1d,C.a85,C.a_Q,C.a_P,C.a_j,C.a2Z,C.GE,C.aA1,C.ava,C.av4,C.av9,C.Pq])
u(A.ah,[C.aFM,C.bij,C.aCK,C.biI,C.aCN,C.bfR,C.aCL,C.aAU,C.aIg,C.azX,C.aCP,C.aCO,C.aCM,C.bnJ,C.an4,C.an0,C.aGl,C.aGi,C.aEL,C.aGk,C.aGj,C.bnK,C.aOt,C.aBt,C.aBs,C.aA8,C.bAh,C.aQA,C.aQB,C.aHS,C.bp7,C.aHR,C.bC2])
u(A.iH,[C.dU0,C.dU2,C.dTY,C.dUm,C.fSe,C.bTL,C.djW,C.djV,C.djC,C.djR,C.djS,C.dki,C.bVy,C.bVq,C.bUb,C.bUc,C.heg,C.heH,C.bN4,C.ct4,C.csZ,C.csT,C.feQ,C.bUA,C.bUD,C.bUE,C.dvb,C.bUw,C.e6O,C.e6t,C.e7a,C.dky,C.dkx,C.dkv,C.dkA,C.dkD,C.dkE,C.dko,C.dks,C.dku,C.dkH,C.chr,C.chz,C.chE,C.dTo,C.h6N,C.h6M,C.fua,C.fub,C.f1C,C.f28,C.cJ_,C.fC8,C.fxH,C.fSk,C.fOh,C.fSh,C.fyv,C.fyu,C.fCV])
u(A.lg,[C.a2u,C.agS,C.a2N,C.a0F,C.adq,C.aMO,C.IF,C.an9,C.cJ0,C.cJ1])
t(C.an_,C.aCL)
t(C.al9,C.aAU)
t(C.aw_,C.aIg)
t(C.bin,C.aCP)
t(C.an8,C.bin)
t(C.bim,C.aCO)
t(C.an6,C.bim)
t(C.bil,C.aCM)
t(C.an2,C.bil)
t(C.bno,C.aOt)
t(C.bAf,C.aQA)
t(C.bAg,C.aQB)
t(C.aHT,C.bC2)
t(C.bcn,A.bca)
t(C.bAi,A.a7K)
t(C.bcm,C.bAi)
w(C.aCL,A.ci)
w(C.aAU,A.ci)
w(C.aIg,A.f1)
w(C.aCM,A.ci)
v(C.bil,C.agE)
w(C.aCO,A.ci)
v(C.bim,C.agE)
w(C.aCP,A.ci)
v(C.bin,C.agE)
w(C.aOt,A.f1)
w(C.aQA,A.ci)
w(C.aQB,A.ci)
v(C.bC2,A.eL)
v(C.bAi,A.jw)})()
A.j2(b.typeUniverse,JSON.parse('{"b1g":{"aw":[],"w":[]},"beF":{"aC":[]},"aqY":{"af":[],"w":[]},"aFM":{"ah":["aqY"]},"Uy":{"af":[],"w":[]},"amY":{"aw":[],"w":[]},"aXW":{"aw":[],"w":[]},"bij":{"ah":["Uy"]},"a0d":{"af":[],"w":[]},"a0h":{"af":[],"w":[]},"a0f":{"af":[],"w":[]},"a_O":{"af":[],"w":[]},"aCK":{"ah":["a0d"]},"biI":{"ah":["a0h"]},"aCN":{"ah":["a0f"]},"a_s":{"aw":[],"w":[]},"bfT":{"aC":[]},"bfK":{"aC":[]},"bfR":{"ah":["a_O"]},"aJS":{"aC":[]},"blg":{"aC":[]},"be_":{"aw":[],"w":[]},"amZ":{"af":[],"w":[]},"an_":{"ah":["amZ"]},"bqT":{"aC":[]},"aY0":{"aC":[]},"al8":{"af":[],"w":[]},"avZ":{"af":[],"w":[]},"azW":{"af":[],"w":[]},"al9":{"ah":["al8"]},"beH":{"aC":[]},"Rb":{"aw":[],"w":[]},"aCJ":{"aC":[]},"aw_":{"ah":["avZ"]},"be8":{"aC":[]},"azX":{"ah":["azW"]},"an7":{"af":[],"w":[]},"an5":{"af":[],"w":[]},"an1":{"af":[],"w":[]},"an8":{"ah":["an7"]},"bv_":{"aC":[]},"an6":{"ah":["an5"]},"blo":{"aC":[]},"an2":{"ah":["an1"]},"bkO":{"aC":[]},"WU":{"af":[],"w":[]},"an3":{"af":[],"w":[]},"Uz":{"af":[],"w":[]},"a7i":{"aw":[],"w":[]},"bkV":{"aC":[]},"tP":{"aw":[],"w":[]},"IG":{"aw":[],"w":[]},"bnJ":{"ah":["WU"]},"an4":{"ah":["an3"]},"an0":{"ah":["Uz"]},"asa":{"af":[],"w":[]},"as4":{"af":[],"w":[]},"a0T":{"af":[],"w":[]},"afa":{"aw":[],"w":[]},"aGl":{"ah":["asa"]},"aGi":{"ah":["as4"]},"bip":{"aw":[],"w":[]},"bis":{"aC":[]},"bmf":{"aw":[],"w":[]},"bhs":{"aC":[]},"bAp":{"aw":[],"w":[]},"bpC":{"aw":[],"w":[]},"aEL":{"ah":["a0T"]},"af9":{"aw":[],"w":[]},"bme":{"aw":[],"w":[]},"af8":{"aw":[],"w":[]},"bmd":{"aw":[],"w":[]},"aEM":{"aw":[],"w":[]},"aL2":{"aw":[],"w":[]},"GP":{"aw":[],"w":[]},"as8":{"af":[],"w":[]},"a1c":{"af":[],"w":[]},"a1d":{"af":[],"w":[]},"aGk":{"ah":["as8"]},"biq":{"aw":[],"w":[]},"aep":{"aw":[],"w":[]},"bio":{"aw":[],"w":[]},"bit":{"aw":[],"w":[]},"aGj":{"ah":["a1c"]},"bnK":{"ah":["a1d"]},"b1e":{"aw":[],"w":[]},"a85":{"af":[],"w":[]},"bno":{"ah":["a85"]},"bnn":{"aC":[]},"avb":{"aw":[],"w":[]},"a_Q":{"af":[],"w":[]},"a_P":{"af":[],"w":[]},"a_j":{"af":[],"w":[]},"a2Z":{"af":[],"w":[]},"aBt":{"ah":["a_Q"]},"aBs":{"ah":["a_P"]},"aA8":{"ah":["a_j"]},"bAh":{"ah":["a2Z"]},"GE":{"af":[],"w":[]},"aA1":{"af":[],"w":[]},"bAf":{"ah":["GE"]},"bAg":{"ah":["aA1"]},"bAe":{"aC":[]},"ava":{"af":[],"w":[]},"aHS":{"ah":["ava"]},"afv":{"aw":[],"w":[]},"av4":{"af":[],"w":[]},"av9":{"af":[],"w":[]},"bp7":{"ah":["av4"]},"aHR":{"ah":["av9"]},"Pq":{"af":[],"w":[]},"aHT":{"ah":["Pq"],"eL":[]},"bcm":{"jw":[],"fp":[]}}'))
A.RK(b.typeUniverse,JSON.parse('{"agE":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aUE"),cq:w("mz"),Q:w("rE"),r:w("bn<n,n>"),c5:w("aWC"),dY:w("aWD"),fH:w("N6"),de:w("alQ"),dN:w("Nf<G>"),gc:w("EI<G>"),A:w("eN<n?>"),e:w("IE"),B:w("nI"),P:w("ib"),df:w("lK"),k:w("la"),x:w("ay<~>"),U:w("N<a55>"),V:w("N<aa>"),C:w("N<rE>"),O:w("N<u>"),c:w("N<N6>"),b:w("N<alQ>"),ac:w("N<eN<n?>>"),I:w("N<nI>"),u:w("N<ib>"),J:w("N<lK>"),_:w("N<la>"),cl:w("N<ay<ai<a9<n,@>>>>"),R:w("N<mZ>"),eU:w("N<ai<+(H,H)>>"),ez:w("N<a9<n,aF>>"),gE:w("N<a9<n,n>>"),Y:w("N<a9<n,@>>"),fD:w("N<n3>"),bp:w("N<p4>"),g:w("N<r>"),ar:w("N<avn>"),v:w("N<fX>"),gy:w("N<aaR>"),L:w("N<+(n,n)>"),G:w("N<+(H,H)>"),E:w("N<+(H,~())>"),bd:w("N<+(n,G,P)>"),bF:w("N<+count,id,name(G,n,n)>"),F:w("N<d1>"),s:w("N<n>"),cF:w("N<au>"),aS:w("N<jl>"),dT:w("N<bc9>"),p:w("N<w>"),Z:w("N<fp>"),D:w("N<lX>"),h:w("N<aB9>"),cC:w("N<bjy>"),fp:w("N<L2>"),M:w("N<L9>"),gZ:w("N<aJY>"),gA:w("N<agJ>"),e4:w("N<agQ>"),dE:w("N<aM0>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<G>"),dS:w("N<aC?>"),d4:w("N<n?>"),eF:w("cA<ah<af>>"),d:w("ai<nI>"),do:w("ai<ib>"),cg:w("ai<lK>"),ax:w("ai<la>"),fO:w("ai<a9<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(G,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<lX>"),j:w("ai<@>"),fK:w("bv<n,n>"),d2:w("bv<n,ai<a9<n,@>>>"),a:w("a9<n,@>"),f:w("a9<@,@>"),gv:w("O<n,IH>"),cM:w("O<G,n>"),w:w("id"),g2:w("t_"),bV:w("aqL"),fL:w("co"),K:w("aF"),dc:w("fX"),fo:w("PN<G>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(P,G)"),d9:w("+dx,hidden(H,ai<ib>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),fT:w("iO<ib>"),ec:w("iO<n>"),gW:w("rl<H>"),X:w("bq<H>"),bW:w("dE"),W:w("bg<n>"),b4:w("bg<G>"),cI:w("kf<n>"),av:w("X<zQ>"),cc:w("X<n>"),l:w("w"),gF:w("fp"),fA:w("lX"),dO:w("GT"),bw:w("af8<n?>"),cy:w("Lb"),q:w("kZ"),y:w("P"),i:w("H"),z:w("@"),S:w("G"),eK:w("ai<la>?"),m:w("as7?"),cT:w("r?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),he:w("+qrPayload,token,usesRemaining(n,n,G)?"),gG:w("+members,trees,viewOnly(G,G,P)?"),az:w("os?"),T:w("n?"),aD:w("dE?"),o:w("lX?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b7s=new A.bb(B.h2,B.bJ,B.h2,B.bJ)
D.afF=new A.bb(B.h2,B.i6,B.h2,B.i6)
D.b7H=new A.bb(B.jJ,B.bJ,B.bJ,B.bJ)
D.b7L=new A.ax(B.cZ,1.4,B.r,-1)
D.b7V=new A.ax(B.ab,1,B.r,-1)
D.agb=new A.aY(140,1/0,0,1/0)
D.b9h=new A.aY(0,1/0,64,1/0)
D.b9l=new A.aY(0,84,0,1/0)
D.agi=new A.aY(130,1/0,0,1/0)
D.aEU=w([B.mm,B.tn,B.c],x.O)
D.cch=new A.a8(B.ay,B.aD,B.x,D.aEU,null,null)
D.ba6=new A.o(null,null,null,null,null,D.cch,B.m)
D.dm9=w([B.aV,B.bU],x.O)
D.ces=new A.a8(B.aX,B.b1,B.x,D.dm9,null,null)
D.bar=new A.o(null,null,null,null,null,D.ces,B.m)
D.ZC=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fJ=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dqn=w([B.dD,D.ZC,D.fJ],x.O)
D.cbs=new A.a8(B.aX,B.b1,B.x,D.dqn,null,null)
D.bbb=new A.o(null,null,null,null,null,D.cbs,B.m)
D.fGo=new A.F(!0,B.bY,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hhq=new A.C("?",null,D.fGo,null,null,null,null,null,null,null,null,null)
D.bf1=new A.cm(B.z,null,null,D.hhq,null)
D.X6=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_h=new A.C("\ud83c\udf33",null,D.X6,null,null,null,null,null,null,null,null,null)
D.ah3=new A.cm(B.z,null,null,D.h_h,null)
D.h1Y=new A.C("\ud83c\udfc6",null,B.LE,null,null,null,null,null,null,null,null,null)
D.bfc=new A.cm(B.z,null,null,D.h1Y,null)
D.bh2=new A.fr(null,null,null,null,null,E.kF,null,null,null,null)
D.ah4=new A.cm(B.z,null,null,D.bh2,null)
D.l0=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fGX=new A.F(!0,D.l0,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0X=new A.C("No books on the shelf yet.",null,D.fGX,null,null,null,null,null,null,null,null,null)
D.eDd=new A.D(B.o2,D.h0X,null)
D.bft=new A.cm(B.z,null,null,D.eDd,null)
D.fOd=new A.F(!0,D.fJ,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hio=new A.C("\ud83d\ude8c  On the road\u2026",null,D.fOd,null,null,null,null,null,null,null,null,null)
D.eDN=new A.D(B.cu,D.hio,null)
D.bfW=new A.cm(B.z,null,null,D.eDN,null)
D.aZ9=new A.C("\ud83e\uddfa",null,D.X6,null,null,null,null,null,null,null,null,null)
D.bga=new A.cm(B.z,null,null,D.aZ9,null)
D.h4r=new A.C("\ud83c\udfad",null,D.X6,null,null,null,null,null,null,null,null,null)
D.bgl=new A.cm(B.z,null,null,D.h4r,null)
D.bgo=new A.cm(B.z,null,null,A8.Zo,null)
D.aho=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.ahv=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.biF=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.biK=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.biW=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.biY=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bj_=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bj7=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lR=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bjb=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bjg=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bji=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bjj=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lS=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bjX=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Ci=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bk5=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bkp=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bks=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bky=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bkG=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aia=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bkN=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.ZQ=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aid=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bkY=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.ZS=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bli=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.aip=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.blH=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.blX=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bmm=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bmx=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.GE=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bmW=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bmZ=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bn2=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aiS=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bnk=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bnq=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bnx=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.aiW=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bnG=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.boa=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bok=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bon=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bot=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ajc=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bp7=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ajB=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bq6=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ajN=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bqw=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.GS=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bqD=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bqN=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bqP=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ajR=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.br6=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.br8=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.brb=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ajZ=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a_B=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.brA=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.brX=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bs1=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.aka=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bs8=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a_H=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bsv=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bsw=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.H0=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.btj=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.btW=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bu1=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bu5=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qP=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bug=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.buk=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.buq=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bus=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.akX=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.al0=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.H6=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a01=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.al9=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bvH=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bvZ=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bwr=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bwA=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.alz=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a0d=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bwL=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bx1=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a0j=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bxi=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bxz=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a0n=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bxE=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.alR=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.alT=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bxX=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.am_=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.byp=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.byt=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.byA=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.byJ=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.byS=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bzt=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bzZ=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fW1=new A.C("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bDu=new A.eN(null,D.fW1,B.fk,null,x.A)
D.h4i=new A.C("None",null,null,null,null,null,null,null,null,null,null,null)
D.bDw=new A.eN(null,D.h4i,B.fk,null,x.A)
D.bE3=new A.bh(38e5)
D.bEN=new A.iI(0,10,0,10)
D.bEX=new A.R(0,1,0,0)
D.bF7=new A.iI(0,4,0,4)
D.bFa=new A.R(0,4,5,0)
D.bFq=new A.R(10,10,14,10)
D.bFB=new A.iI(10,4,10,4)
D.bFK=new A.iI(10,8,10,8)
D.bFL=new A.R(10,8,8,8)
D.bGf=new A.R(12,6,12,2)
D.bGz=new A.R(14,0,14,6)
D.bGD=new A.R(14,10,6,6)
D.bGE=new A.R(14,12,14,0)
D.bGI=new A.R(14,12,14,8)
D.bGL=new A.R(14,12,8,14)
D.bGP=new A.iI(14,14,14,14)
D.bH7=new A.R(14,6,14,40)
D.bHa=new A.R(14,8,14,30)
D.bHy=new A.R(16,2,16,10)
D.bHH=new A.R(16,6,16,30)
D.bHJ=new A.R(16,6,16,8)
D.bHZ=new A.R(18,10,18,4)
D.bI0=new A.R(18,12,18,0)
D.bI7=new A.R(18,14,12,4)
D.aot=new A.R(18,16,18,8)
D.bIo=new A.R(18,20,18,22)
D.bIu=new A.R(18,30,18,30)
D.bIM=new A.R(20,10,12,20)
D.bIP=new A.R(20,11,20,11)
D.bJ0=new A.R(20,18,16,18)
D.bJ2=new A.R(20,18,20,6)
D.bJS=new A.R(24,32,24,28)
D.bJT=new A.R(24,36,24,32)
D.bJW=new A.R(26,26,24,14)
D.bK9=new A.R(2,4,2,8)
D.bKd=new A.R(30,0,30,0)
D.bKo=new A.R(38,22,22,22)
D.aoS=new A.R(40,24,24,24)
D.bKq=new A.iI(40,40,40,40)
D.bKs=new A.R(46,30,30,30)
D.bKU=new A.R(56,40,40,40)
D.bKY=new A.R(1.25,1.25,1.25,1.25)
D.bKZ=new A.R(60,0,60,0)
D.bL2=new A.R(6,14,6,16)
D.bL6=new A.R(6,4,12,0)
D.bLa=new A.R(6,6,10,2)
D.bLh=new A.iI(7,3,7,3)
D.bLO=new A.R(5,1.5,5,1.5)
D.bLZ=new A.R(6,2.5,6,2.5)
D.hcy=new A.C("Family Games",null,B.jp,null,null,null,null,null,null,null,null,null)
D.fUC=new A.C("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.WY,null,null,null,null,null,null,null,null,null)
D.cNY=w([D.hcy,D.fUC],x.p)
D.bAY=new A.ft(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.cNY,null)
D.bMp=new A.bu(1,B.b8,D.bAY,null)
D.hgY=new A.C("Signature",null,B.nx,null,null,null,null,null,null,null,null,null)
D.bMs=new A.bu(1,B.b8,D.hgY,null)
D.h92=new A.C("MADE BY THE ONE WHO PLANTED THE TREE",null,U.uu,null,null,null,null,null,null,null,null,null)
D.bN_=new A.bu(1,B.b8,D.h92,null)
D.he0=new A.C("Tell the AI what to fix",null,B.dv,null,null,null,null,null,null,null,null,null)
D.bNg=new A.bu(1,B.b8,D.he0,null)
D.fP_=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hg2=new A.C("Worksheets",null,D.fP_,null,null,null,null,null,null,null,null,null)
D.fPb=new A.F(!0,E.ahU,null,null,null,null,13,B.cH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.heS=new A.C("Track your project spending",null,D.fPb,null,null,null,null,null,null,null,null,null)
D.dcI=w([D.hg2,B.at,D.heS],x.p)
D.bAB=new A.ft(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.dcI,null)
D.bNm=new A.bu(1,B.b8,D.bAB,null)
D.fJP=new A.F(!0,E.kF,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVb=new A.C("FAMILY LIBRARY",null,D.fJP,null,null,null,null,null,null,null,null,null)
D.bNF=new A.bu(1,B.b8,D.fVb,null)
D.PK=new C.IE("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.xc=new C.IF(0,"male")
D.oU=new C.IF(1,"female")
D.zG=new C.IF(2,"unknown")
D.vj=new C.an9(0,"owner")
D.PL=new C.an9(1,"editor")
D.l8=new C.an9(2,"viewer")
D.aqR=new A.a_(61199,"MaterialIcons",!1)
D.bT_=new A.a_(61504,"MaterialIcons",!1)
D.bT0=new A.a_(61505,"MaterialIcons",!1)
D.bT2=new A.a_(61587,"MaterialIcons",!1)
D.bT9=new A.a_(61890,"MaterialIcons",!1)
D.bU1=new A.a_(63034,"MaterialIcons",!0)
D.bUj=new A.a_(63153,"MaterialIcons",!1)
D.bUQ=new A.a_(63429,"MaterialIcons",!1)
D.asZ=new A.a_(984520,"MaterialIcons",!1)
D.bTy=new A.a_(62776,"MaterialIcons",!1)
D.bXg=new A.ae(D.bTy,26,B.b5,null,null,null)
D.bRY=new A.a_(57648,"MaterialIcons",!1)
D.bXB=new A.ae(D.bRY,14,B.c,null,null,null)
D.bXT=new A.ae(B.Ia,17,null,null,null,null)
D.bY_=new A.ae(B.Qf,null,B.bU,null,null,null)
D.bYp=new A.ae(E.a3Y,null,null,null,null,null)
D.bYs=new A.ae(B.jl,18,E.kF,null,null,null)
D.a3I=new A.a_(62044,"MaterialIcons",!1)
D.bYy=new A.ae(D.a3I,null,B.aV,null,null,null)
D.bYF=new A.ae(B.zT,18,B.c,null,null,null)
D.bZm=new A.ae(B.eg,16,null,null,null,null)
D.bZt=new A.ae(D.a3I,32,B.aV,null,null,null)
D.bZN=new A.ae(E.aqS,18,B.cZ,null,null,null)
D.c_U=new A.ae(B.Im,22,B.aC,null,null,null)
D.c07=new A.ae(B.eg,22,B.b5,null,null,null)
D.c0k=new A.ae(Z.a3N,22,B.c,null,null,null)
D.c0r=new A.ae(B.vs,52,B.c,null,null,null)
D.c0C=new A.ae(B.Im,30,B.aC,null,null,null)
D.c0Y=new A.ae(B.Ij,null,B.c,null,null,null)
D.atI=new A.ae(B.vD,22,B.c,null,null,null)
D.c16=new A.ae(B.eg,17,null,null,null,null)
D.c1u=new A.ae(B.xq,26,B.cZ,null,null,null)
D.c2g=new A.ae(B.a4c,16,null,null,null,null)
D.c32=new A.ae(B.vs,24,B.c,null,null,null)
D.c37=new A.ae(B.Qd,20,B.u2,null,null,null)
D.c3d=new A.ae(B.I8,null,B.bU,null,null,null)
D.c3m=new A.ae(B.jl,18,B.c,null,null,null)
D.c42=new A.ae(B.cC,22,B.ab,null,null,null)
D.c4W=new A.ae(B.eq,16,B.ab,null,null,null)
D.c57=new A.ae(D.a3I,20,B.aV,null,null,null)
D.au8=new A.ae(B.hn,20,null,null,null,null)
D.c5H=new A.ae(B.cC,18,D.l0,null,null,null)
D.c5Z=new A.ae(B.A2,28,B.c,null,null,null)
D.c6a=new A.ae(B.Q3,null,B.fq,null,null,null)
D.c6v=new A.ae(B.A2,24,B.c,null,null,null)
D.c6Y=new A.ae(B.vs,null,B.aV,null,null,null)
D.c6Z=new A.ae(B.jD,20,B.cZ,null,null,null)
D.c7i=new A.ae(B.Ia,16,null,null,null,null)
D.c8R=new A.ee(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eU,!0,null,null,null,null)
D.auS=new C.a7i(10,null)
D.c9n=new C.a7i(12,null)
D.c9o=new C.a7i(14,null)
D.duI=w([B.bw,B.aV,B.fz,B.b5],x.O)
D.cay=new A.a8(B.ay,B.aD,B.x,D.duI,null,null)
D.bt5=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bzA=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d8R=w([D.bt5,D.bzA],x.O)
D.caL=new A.a8(B.aX,B.b1,B.x,D.d8R,null,null)
D.doe=w([B.fm,B.h6,B.fz],x.O)
D.caR=new A.a8(B.ay,B.aD,B.x,D.doe,null,null)
D.akL=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bjk=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.dbg=w([D.akL,D.bjk],x.O)
D.cbt=new A.a8(B.aX,B.b1,B.x,D.dbg,null,null)
D.bnb=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aEa=w([D.bnb,D.akL],x.O)
D.cbN=new A.a8(B.ay,B.aD,B.x,D.aEa,null,null)
D.ajt=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bpY=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dnh=w([D.ajt,D.bpY],x.O)
D.ccs=new A.a8(B.a5,B.a9,B.x,D.dnh,null,null)
D.dCj=w([B.bE,B.nO],x.O)
D.ccu=new A.a8(B.aX,B.b1,B.x,D.dCj,null,null)
D.bt0=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dDh=w([D.bt0,D.l0,D.l0,I.Oe],x.O)
D.dG1=w([0,0.07,0.9,1],x.n)
D.cd_=new A.a8(B.a5,B.a9,B.x,D.dDh,D.dG1,null)
D.cd8=new A.a8(B.ay,B.aD,B.x,B.U2,null,null)
D.d6m=w([B.az,D.lR],x.O)
D.cdb=new A.a8(B.a5,B.a9,B.x,D.d6m,null,null)
D.dBQ=w([B.b5,B.aV,B.bU],x.O)
D.cee=new A.a8(B.ay,B.aD,B.x,D.dBQ,null,null)
D.ciF=w([10,20,30],x.t)
D.csH=w([-1,-0.4,0.3,1],x.n)
D.cAe=w([B.bw,B.b5,B.fm],x.O)
D.cAm=w([B.bl,B.az,B.kE],x.O)
D.cAo=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cB6=w([30,140,262,360],x.n)
D.brh=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cGI=w([D.brh,E.akk],x.O)
D.exS=new A.r(1,2)
D.frE=new A.d1(B.b7,D.exS,3)
D.aB2=w([D.frE],x.F)
D.cOe=w([B.hj,B.ch,B.fy],x.O)
D.cR3=w([B.bQ,B.bA,B.bt],x.O)
D.bOv=new C.v5("classic","Classic leather","Gold-edged brown leather",D.aEa,E.kF,E.kF,"\u2766",B.K,!0,!1,!1,!1)
D.bip=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.byf=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.deB=w([D.bip,D.byf],x.O)
D.akn=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bOq=new C.v5("ornate","Ornate gold","Double gold border and flourishes",D.deB,D.akn,D.akn,"\u2726",B.K,!0,!0,!0,!1)
D.bmI=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.btQ=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d52=w([D.bmI,D.btQ],x.O)
D.bOp=new C.v5("parchment","Parchment","Old paper with dark ink",D.d52,D.H0,L.jh,"\u2767",B.K,!0,!1,!1,!0)
D.ahx=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bwo=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dzR=w([D.ahx,D.bwo],x.O)
D.bqK=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bvB=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bOs=new C.v5("minimal","Clean paper","Plain and elegant, like a printed book",D.dzR,D.bqK,D.bvB,"",B.K,!0,!0,!1,!0)
D.bOu=new C.v5("midnight","Midnight","Deep blue with silver stars",K.aEu,B.cD,B.cm,"\u2727",B.K,!0,!0,!1,!1)
D.bOo=new C.v5("emerald","Emerald library","Green cloth, title on the left",W.aBs,E.kF,B.h8,"\u25c6",B.b9,!0,!1,!1,!1)
D.bwU=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dxL=w([B.ey,D.bwU],x.O)
D.bs7=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bto=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bOt=new C.v5("rose","Rose vintage","Burgundy with rose-gold lettering",D.dxL,D.bs7,D.bto,"\u2740",B.K,!0,!1,!0,!1)
D.dCT=w([B.cx,F.n8],x.O)
D.bOr=new C.v5("modern","Modern","Dark, bold, left-aligned",D.dCT,B.aH,B.c,"",B.b9,!1,!0,!1,!1)
D.a6d=w([D.bOv,D.bOq,D.bOp,D.bOs,D.bOu,D.bOo,D.bOt,D.bOr],A.as("N<v5>"))
D.cU6=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dCF=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bOG=new C.lK('What does "Ubuntu" mean?',D.dCF,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d77=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bOJ=new C.lK("In Swahili, what do we call a grandmother?",D.d77,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d6Z=w(["Babu","Mama","Baba","Dada"],x.s)
D.bOE=new C.lK("In Swahili, what do we call a grandfather?",D.d6Z,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d8n=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bOI=new C.lK("What is a sister called in Swahili?",D.d8n,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.ddZ=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bOF=new C.lK("What is a brother called in Swahili?",D.ddZ,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d6Y=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bOQ=new C.lK("Which word means father in Swahili?",D.d6Y,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dDT=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bOP=new C.lK('"Umoja ni nguvu" means...',D.dDT,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dAA=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bOR=new C.lK('"Haba na haba hujaza kibaba" teaches us...',D.dAA,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.dbp=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bOO=new C.lK('The African saying "It takes a village to raise a child" means...',D.dbp,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dEb=w(["The elders","The market","The river","The drum"],x.s)
D.bOK=new C.lK("Who is the traditional keeper of the family stories?",D.dEb,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cYp=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bOH=new C.lK("Why do families sit round the fire at night?",D.cYp,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dCV=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bOM=new C.lK('What does "Harambee" mean?',D.dCV,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dh6=w(["An elder","A baby","A market","A cow"],x.s)
D.bOL=new C.lK('"Mzee" is a respectful word for...',D.dh6,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dxA=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bON=new C.lK('What does "Shikamoo" show?',D.dxA,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aBn=w([D.bOG,D.bOJ,D.bOE,D.bOI,D.bOF,D.bOQ,D.bOP,D.bOR,D.bOO,D.bOK,D.bOH,D.bOM,D.bOL,D.bON],x.J)
D.d1S=w([90,360],x.n)
D.d4z=w([B.bU,B.bp],x.O)
D.bsO=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d5i=w([D.ahx,D.bsO],x.O)
D.d64=w([-1,-0.3,0.4,1],x.n)
D.d74=w([0,0.45,0.72,0.92,1],x.n)
D.bmE=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d7o=w([D.bmE,B.bC],x.O)
D.bkk=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.am9=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d80=w([B.dD,D.bkk,D.am9],x.O)
D.d9a=w([B.bd,B.jv,B.pE],x.O)
D.bnd=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bvs=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bk0=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d9f=w([D.bnd,D.bvs,D.bk0],x.O)
D.d9C=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d9M=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hM1=new C.aeN(78,424,48,44,56)
D.hM_=new C.aeN(214,396,34,34,42)
D.hM0=new C.aeN(442,452,56,50,64)
D.aCm=w([D.hM1,D.hM_,D.hM0],A.as("N<aeN>"))
D.dam=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bjd=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bp6=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dFY=w([D.ajt,D.bjd,D.bp6],x.O)
D.bOw=new C.v6("leather","Leather",D.dFY,"vintage")
D.dib=w([B.dl,B.GQ,Ac.a_6],x.O)
D.bOD=new C.v6("midnight","Midnight",D.dib,"starry")
D.d9b=w([B.es,B.ei,B.lv],x.O)
D.bOC=new C.v6("forest","Forest",D.d9b,"story")
D.dIg=w([B.et,B.ey,B.kH],x.O)
D.bOz=new C.v6("burgundy","Burgundy",D.dIg,"royal")
D.cQB=w([B.az,B.n2,B.nF],x.O)
D.bOA=new C.v6("royal","Royal",D.cQB,"royal")
D.dbX=w([B.bA,B.cx,F.n8],x.O)
D.bOx=new C.v6("charcoal","Charcoal",D.dbX,"geo")
D.dG6=w([B.ca,B.dY,B.wM],x.O)
D.bOB=new C.v6("sunset","Sunset",D.dG6,"sunset")
D.dGW=w([B.jv,B.yY,B.a_a],x.O)
D.bOy=new C.v6("ocean","Ocean",D.dGW,"band")
D.Aw=w([D.bOw,D.bOD,D.bOC,D.bOz,D.bOA,D.bOx,D.bOB,D.bOy],A.as("N<v6>"))
D.dcv=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.ddd=w([B.an,B.aM,B.a_],x.O)
D.deH=w([B.ey,B.ei,B.dl,B.iZ,B.z_,B.cZ,B.kc,B.cU,B.de],x.O)
D.deI=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.frF=new A.d1(B.dJ,B.dS,8)
D.deU=w([D.frF],x.F)
D.dg7=w([B.c5,B.dY,B.k8],x.O)
D.blb=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bpp=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.btL=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dgp=w([D.blb,G.akU,D.bpp,D.btL,D.am9],x.O)
D.dgG=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dgU=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.biB=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.boK=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dhq=w([D.biB,D.aiW,D.boK],x.O)
D.di6=w([B.c5,B.hJ],x.O)
D.dic=w([G.nH,B.it,G.ahJ,B.d_],x.O)
D.djV=w([B.d_,G.nH,B.it,D.lS,B.d_],x.O)
D.dkA=w([B.aQ,B.yW,B.yN],x.O)
D.eVq=new A.y(-0.65,0.6)
D.f7J=new A.y(-0.2,0.95)
D.f8S=new A.y(0.25,0.95)
D.eZ_=new A.y(0.7,0.6)
D.f9s=new A.y(1,0.1)
D.dlq=w([Am.VR,D.eVq,D.f7J,D.f8S,D.eZ_,D.f9s],x.G)
D.brB=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.by7=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bmb=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dlx=w([D.brB,D.by7,D.bmb],x.O)
D.dlC=w([B.bM,B.c1,B.dG,B.aQ],x.O)
D.dma=w([B.hZ,B.ca,B.uU],x.O)
D.dmy=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dmK=w([B.fm,B.cZ],x.O)
D.bt9=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dnc=w([D.bt9,D.ahv],x.O)
D.dno=w([B.cW,B.fK,B.fX],x.O)
D.dnB=w([B.aH,B.bp,B.dl],x.O)
D.dob=w([B.eF,B.dy,B.ei],x.O)
D.dox=w([B.dW,B.dl,B.GQ],x.O)
D.doB=w([B.bu,B.n_,B.de],x.O)
D.doS=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bsm=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bqs=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dpd=w([D.bsm,D.aiS,D.bqs],x.O)
D.dq5=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.drg=w([1,0,7,6,3,2],x.t)
D.a7a=w(["leather","linen","plain","stars","rays"],x.s)
D.drr=w([0.5,2,3.6],x.n)
D.ds_=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bWy=new A.a_(983781,"MaterialIcons",!1)
D.aDR=w([B.Qf,B.hQ,B.kM,B.ie,F.at6,B.Ix,B.rf,D.bWy,K.asK,B.DL,B.ri,B.m1],A.as("N<a_>"))
D.a7e=w(["double","single","corners","none"],x.s)
D.bOl=new C.zQ("Little Seed","\ud83c\udf31",0)
D.bOn=new C.zQ("Young Listener","\ud83d\udc42",40)
D.bOm=new C.zQ("Storyteller","\ud83e\ude98",120)
D.bOk=new C.zQ("Village Pride","\ud83c\udfe1",300)
D.bOi=new C.zQ("Keeper of Roots","\ud83c\udf33",700)
D.bOj=new C.zQ("Elder of the Fire","\ud83d\udd25",1500)
D.aDT=w([D.bOl,D.bOn,D.bOm,D.bOk,D.bOi,D.bOj],A.as("N<zQ>"))
D.dte=w([B.d0,B.bk,B.cU],x.O)
D.dtv=w([],x.C)
D.El=w([],x.u)
D.aO2=new A.r(225,528)
D.eX7=new A.y(D.aO2,1)
D.eyD=new A.r(350,548)
D.f2E=new A.y(D.eyD,0.95)
D.aNX=new A.r(158,656)
D.f2x=new A.y(D.aNX,1.12)
D.ezq=new A.r(92,544)
D.eSz=new A.y(D.ezq,0.93)
D.eyG=new A.r(398,614)
D.eZn=new A.y(D.eyG,1.04)
D.eyu=new A.r(318,662)
D.eNO=new A.y(D.eyu,1.1)
D.a7m=w([D.eX7,D.f2E,D.f2x,D.eSz,D.eZn,D.eNO],A.as("N<+(r,H)>"))
D.dvC=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dw8=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dxg=w([B.d_,G.nH,B.it,D.lS,B.d_,B.it],x.O)
D.dyI=w([B.as,B.fK,B.iZ],x.O)
D.dzp=w([-70,58],x.n)
D.dzr=w([-70,-30,20],x.n)
D.dAx=w([B.bu,B.n_,B.a0e],x.O)
D.dAP=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dXn=new C.mc("construction","Construction","Jobsite & builds",B.rh)
D.dXu=new C.mc("house","Home Build","Houses & rooms",B.vu)
D.dXk=new C.mc("grocery","Grocery","Store & pantry",B.a4J)
D.dXj=new C.mc("calculator","Calculations","Math & estimates",B.Qn)
D.dXs=new C.mc("lumber","Materials","Lumber & supplies",B.Iu)
D.dXg=new C.mc("kitchen","Kitchen","Remodel & meals",A4.QI)
D.bWv=new A.a_(983756,"MaterialIcons",!1)
D.dXl=new C.mc("landscape","Landscaping","Yard & garden",D.bWv)
D.dXf=new C.mc("plumbing","Plumbing","Pipes & water",B.q4)
D.dXv=new C.mc("electrical","Electrical","Wiring & power",B.fN)
D.dXd=new C.mc("store","Retail Shop","Daily business",B.kn)
D.dXe=new C.mc("paint_remodel","Paint & Remodel","Colors & walls",A4.QD)
D.bVR=new A.a_(983311,"MaterialIcons",!1)
D.dXr=new C.mc("roofing","Roofing","Roofs & exteriors",D.bVR)
D.bWI=new A.a_(983986,"MaterialIcons",!1)
D.dXc=new C.mc("warehouse","Warehouse","Storage & stock",D.bWI)
D.dXp=new C.mc("vehicles","Vehicles","Fleet & transport",B.DI)
D.bTA=new A.a_(62785,"MaterialIcons",!1)
D.dXi=new C.mc("farm","Farm","Crops & livestock",D.bTA)
D.dXh=new C.mc("restaurant","Restaurant","Food & catering",B.vB)
D.dXo=new C.mc("tools","Tools","Workshop gear",B.DE)
D.dXt=new C.mc("wallet","Cash & Wallet","Quick spending",B.jD)
D.dXq=new C.mc("concrete","Concrete","Foundation work",F.arP)
D.dXm=new C.mc("blueprint","Blueprint","Plans & design",Ao.arl)
D.a7L=w([D.dXn,D.dXu,D.dXk,D.dXj,D.dXs,D.dXg,D.dXl,D.dXf,D.dXv,D.dXd,D.dXe,D.dXr,D.dXc,D.dXp,D.dXi,D.dXh,D.dXo,D.dXt,D.dXq,D.dXm],A.as("N<mc>"))
D.dBu=w([B.bv,B.bk],x.O)
D.dCk=w([B.iI,B.oC,B.e4],x.O)
D.ajH=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.akG=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bqO=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bi4=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aF1=w([D.ajH,D.akG,D.bqO,D.bi4],x.O)
D.dDy=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7V=w(["top","middle","bottom"],x.s)
D.dF6=w([B.cw,B.bp,B.dl],x.O)
D.aFl=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bbF=new A.aa(0,B.H,B.b7,B.J,14)
D.aFp=w([D.bbF],x.V)
D.bpE=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dFR=w([D.aia,D.a0d,D.bpE],x.O)
D.dFS=w([B.bf,B.dy,B.ei],x.O)
D.eyd=new A.r(24,-8)
D.eyW=new A.r(48,0)
D.ey9=new A.r(24,6)
D.dHK=w([B.J,D.eyd,D.eyW,D.ey9],x.g)
D.dIb=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.euF={top:0,middle:1,bottom:2}
D.dLw=new A.bn(D.euF,["Top","Middle","Bottom"],x.r)
D.euc={double:0,single:1,corners:2,none:3}
D.dLC=new A.bn(D.euc,["Double line","One line","Corners","None"],x.r)
D.evt={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dNg=new A.bn(D.evt,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dNs=new A.bn(B.ii,[],A.as("bn<G,+(n,n)>"))
D.euw={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.EB=new A.bn(D.euw,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bn<n,G>"))
D.dRM=new H.Od(32,null)
D.dRN=new H.Od(40,null)
D.dRO=new H.Od(46,null)
D.aNv=new C.av9(null)
D.ex4=new A.r(0,40)
D.ex5=new A.r(0,412)
D.ex8=new A.r(0,900)
D.exh=new A.r(0,-34)
D.exi=new A.r(0,-46)
D.exk=new A.r(0,-74)
D.exn=new A.r(100,300)
D.exo=new A.r(10,14)
D.exr=new A.r(10,-10)
D.exw=new A.r(10,-46)
D.exx=new A.r(10,-58)
D.exy=new A.r(116,442)
D.exA=new A.r(11,-1)
D.exB=new A.r(11,-10)
D.exC=new A.r(11,-21)
D.aNS=new A.r(11,-60)
D.exJ=new A.r(14,-2)
D.exK=new A.r(150,520)
D.aa6=new A.r(150,592)
D.exN=new A.r(15,-15)
D.exO=new A.r(16,-1)
D.exR=new A.r(190,444)
D.exU=new A.r(1,5)
D.ey1=new A.r(21,-78)
D.ey2=new A.r(222,615)
D.Kt=new A.r(225,300)
D.aa8=new A.r(225,574)
D.eyc=new A.r(24,-52)
D.eye=new A.r(250,210)
D.eyp=new A.r(2,-56)
D.aO6=new A.r(300,0)
D.eyq=new A.r(300,440)
D.eyt=new A.r(318,476)
D.eyw=new A.r(324,144)
D.aab=new A.r(332,150)
D.eyy=new A.r(335,585)
D.eyz=new A.r(338,140)
D.eyA=new A.r(340,158)
D.eyC=new A.r(34,-60)
D.F2=new A.r(36,-24)
D.eyE=new A.r(372,470)
D.eyF=new A.r(390,455)
D.eyO=new A.r(42,468)
D.eyP=new A.r(431,510)
D.eyQ=new A.r(431,520)
D.eyR=new A.r(45,-92)
D.eyS=new A.r(46,20)
D.eyT=new A.r(46,-92)
D.eyU=new A.r(46,-94)
D.eyV=new A.r(47,-4)
D.eyX=new A.r(48,-4)
D.ez4=new A.r(4,-26)
D.ezc=new A.r(60,455)
D.ezl=new A.r(8,14)
D.ezp=new A.r(8,-76)
D.ezr=new A.r(95,575)
D.ezs=new A.r(98,-24)
D.ezu=new A.r(9,-2)
D.ezv=new A.r(9,-58)
D.aOf=new A.r(9,-79)
D.ezw=new A.r(9,-9)
D.eA8=new A.r(16.5,8)
D.eAa=new A.r(3.2,0)
D.eAb=new A.r(-16.5,8)
D.eAi=new A.r(16.5,2)
D.eAl=new A.r(-3.2,0)
D.eAt=new A.r(9.5,6)
D.eAw=new A.r(-10,14)
D.eAx=new A.r(-10,-12)
D.eAy=new A.r(-10,-58)
D.eAA=new A.r(-11,-10)
D.eAC=new A.r(-11,-60)
D.eAD=new A.r(-12,-14)
D.eAE=new A.r(-12,-16)
D.eAJ=new A.r(-14,-2)
D.eAM=new A.r(-15,-15)
D.eAN=new A.r(-15,-3)
D.eAP=new A.r(-16,-1)
D.eB4=new A.r(-24,-52)
D.eBd=new A.r(-2,-34)
D.eBe=new A.r(-2,-38)
D.eBg=new A.r(-30,-100)
D.aad=new A.r(-36,-24)
D.eBr=new A.r(-4,-26)
D.eBt=new A.r(-4,-6)
D.eBC=new A.r(-8,-3)
D.eBD=new A.r(-8,-48)
D.eBG=new A.r(-9,-2)
D.eBI=new A.r(-9,-58)
D.eBJ=new A.r(-9,-79)
D.eBK=new A.r(-9,-9)
D.eBM=new A.r(-9.5,6)
D.eBZ=new A.r(-16.5,2)
D.h1E=new A.C("Write a new book",null,B.hs,null,B.K,null,null,null,null,null,null,null)
D.eCy=new A.D(B.l6,D.h1E,null)
D.hgw=new A.C("Tap to go on",null,B.wd,null,null,null,null,null,null,null,null,null)
D.eCU=new A.D(B.kL,D.hgw,null)
D.atg=new A.ae(B.id,18,B.c,null,null,null)
D.fVy=new A.C("Add",null,B.kT,null,null,null,null,null,null,null,null,null)
D.dlS=w([D.atg,B.pn,D.fVy],x.p)
D.foJ=new A.c1(B.aK,B.e,B.O,B.l,null,B.p,null,0,D.dlS,null)
D.eCX=new A.D(B.o_,D.foJ,null)
D.eCZ=new A.D(E.anh,A8.Zo,null)
D.fOV=new A.F(!0,B.c,null,null,null,null,13.5,B.D,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYP=new A.C("New Project",null,D.fOV,null,null,null,null,null,null,null,null,null)
D.dqw=w([D.atg,B.aa,D.fYP],x.p)
D.foM=new A.c1(B.aK,B.e,B.O,B.l,null,B.p,null,0,D.dqw,null)
D.eDc=new A.D(B.hA,D.foM,null)
D.h0m=new A.C("Choose your header",null,B.ur,null,null,null,null,null,null,null,null,null)
D.eDx=new A.D(B.ic,D.h0m,null)
D.bhi=new A.fr(2.2,null,null,null,null,B.cZ,null,null,null,null)
D.fux=new A.a5(22,22,D.bhi,null)
D.bfo=new A.cm(B.z,null,null,D.fux,null)
D.eDC=new A.D(B.a1z,D.bfo,null)
D.bH_=new A.R(14,2,14,6)
D.heB=new A.C("The top of your book. Tap a design to see it.",null,V.us,null,null,null,null,null,null,null,null,null)
D.eDD=new A.D(D.bH_,D.heB,null)
D.h_w=new A.C("\ud83c\udfc6 A new record!",null,B.hh,null,null,null,null,null,null,null,null,null)
D.eDF=new A.D(B.kL,D.h_w,null)
D.eFd=new A.jj(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eFg=new A.jj(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aOS=new A.jj(1,0.9607843137254902,0.48627450980392156,0)
D.KB=new A.jj(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.B6=new A.jj(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eFm=new A.jj(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hOd=new C.blg(null)
D.bBK=new A.mT(D.hOd,null,B.aA,null,null)
D.aSv=new A.cP(0,0,0,0,null,null,D.bBK,null)
D.fVA=new A.C("\ud83c\udfc5",null,B.acx,null,null,null,null,null,null,null,null,null)
D.eJM=new A.cP(null,0,-34,null,null,null,D.fVA,null)
D.eSd=new A.y("E","Sit by the fire again")
D.eXZ=new A.y("C","Good Learner")
D.f0z=new A.y("D","Still Growing")
D.f5m=new A.y(-42,42)
D.f6M=new A.y("B","Faithful Listener")
D.f8U=new A.y("A","Keeper of the Family")
D.fc7=new A.b0(-17,0.7,0)
D.fcI=new A.b0(-8,0.95,1.3)
D.fdQ=new A.b0(18,0.65,5.2)
D.fdS=new A.b0(0,1.15,2.6)
D.fec=new A.b0(9,0.9,3.9)
D.fgb=new A.b7([0,0,1,1])
D.aU1=new A.a4(0,0,520,160)
D.flK=new A.a4(10,612,440,618)
D.flL=new A.a4(10,612,440,628)
D.flO=new A.a4(14,-64,34,-12)
D.flR=new A.a4(300,336,350,348)
D.ab7=new A.a4(30,96,420,346)
D.flS=new A.a4(30,-9,46,1)
D.flT=new A.a4(4,2,11,14)
D.flV=new A.a4(-8,-12.5,8,-7)
D.flW=new A.a4(-16.5,-21,16.5,1)
D.flX=new A.a4(60,342,88,348)
D.VS=new A.a4(66,-66,94,-36)
D.flY=new A.a4(6,8,10,14)
D.fm0=new A.a4(95,343,115,348)
D.fm1=new A.a4(-6.5,-74,6.5,-58)
D.fm7=new A.a4(-100,-74,100,-12)
D.fm8=new A.a4(-10,8,-6,14)
D.fm9=new A.a4(-11,2,-4,14)
D.fma=new A.a4(-11,-70,11,-56)
D.fmh=new A.a4(-13,-24,13,-4)
D.fmo=new A.a4(-15,-21,15,0)
D.fmr=new A.a4(-16,-21,16,1)
D.fms=new A.a4(-16,-21,16,2)
D.fmv=new A.a4(-16,-26,16,-6)
D.fmD=new A.a4(-230,-26,230,26)
D.fn1=new A.a4(-38,-26,12,-6)
D.fn5=new A.a4(-3,-70,3,-63)
D.fn6=new A.a4(-44,-22,44,0)
D.fn8=new A.a4(-46,-9,-30,1)
D.aU5=new A.a4(-80,-190,80,20)
D.fnf=new A.a4(-8,-26,40,-6)
D.fng=new A.a4(-98,-80,92,-75)
D.fnh=new A.a4(-9,-15,9,-9)
D.he7=new A.C("Let the AI write it from your tree",null,B.iV,null,B.K,null,null,null,null,null,null,null)
D.bPq=new A.d2(1,B.ci,D.he7,null)
D.di5=w([E.a5d,B.aa,D.bPq],x.p)
D.fol=new A.c1(B.aK,B.e,B.O,B.l,null,B.p,null,0,D.di5,null)
D.fVc=new A.C("Save member",null,B.cf,null,null,null,null,null,null,null,null,null)
D.dz8=w([D.au8,B.aa,D.fVc],x.p)
D.fox=new A.c1(B.aK,B.bb,B.h,B.l,null,B.p,null,0,D.dz8,null)
D.c0d=new A.ae(B.iv,14,B.b5,null,null,null)
D.fIl=new A.F(!0,B.b5,null,null,null,null,12,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZf=new A.C("Cashier",null,D.fIl,null,null,null,null,null,null,null,null,null)
D.dr5=w([D.c0d,B.ba,D.fZf],x.p)
D.foB=new A.c1(B.aK,B.e,B.O,B.l,null,B.p,null,0,D.dr5,null)
D.fVd=new A.C("Transfer & settings",null,B.dv,null,null,null,null,null,null,null,null,null)
D.bN6=new A.bu(1,B.b8,D.fVd,null)
D.d8w=w([D.atI,B.ar,D.bN6],x.p)
D.foC=new A.c1(B.aK,B.e,B.h,B.l,null,B.p,null,0,D.d8w,null)
D.ftc=new A.av(16,40)
D.fth=new A.av(22,64)
D.fto=new A.av(280,88)
D.fuc=new A.a5(30,null,null,null)
D.fUi=new A.C("The teacher is writing\u2026",null,B.Bs,null,null,null,null,null,null,null,null,null)
D.bgu=new A.cm(B.z,null,null,D.fUi,null)
D.hHX=new A.bg("w",x.W)
D.fuB=new A.a5(null,56,D.bgu,D.hHX)
D.fvo=new A.hW(5,8,8,1,null)
D.fvw=new A.hW(2,12,12,1.05,null)
D.fYV=new A.C("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fwg=new A.b2(D.fYV,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fZa=new A.C("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aWp=new A.b2(D.fZa,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h6G=new A.C("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fwK=new A.b2(D.h6G,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hhz=new A.C("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fwP=new A.b2(D.hhz,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h0k=new A.C("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fwW=new A.b2(D.h0k,null,null,null,null,null,null,null,null,null,null,null,null,B.fM,!1,null,null,null,B.t,null)
D.heO=new A.C("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aWu=new A.b2(D.heO,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h0i=new A.C("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fxl=new A.b2(D.h0i,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVR=new A.C("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fxn=new A.b2(D.fVR,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h46=new A.C("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fxt=new A.b2(D.h46,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hil=new A.C("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fy9=new A.b2(D.hil,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hd1=new A.C("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fyz=new A.b2(D.hd1,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hhD=new A.C("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fyC=new A.b2(D.hhD,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h8j=new A.C("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fyE=new A.b2(D.h8j,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h2g=new A.C("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fyF=new A.b2(D.h2g,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h2h=new A.C("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fzG=new A.b2(D.h2h,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYX=new A.C("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fzY=new A.b2(D.fYX,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h_Y=new A.C("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fAh=new A.b2(D.h_Y,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h7N=new A.C("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fAy=new A.b2(D.h7N,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h36=new A.C("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fAz=new A.b2(D.h36,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fNA=new A.F(!0,B.bB,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC7=new A.eG("\u2665",null,null,B.cY,null,null,null,null,null,null,D.fNA)
D.fKG=new A.F(!0,B.aS,null,null,null,null,28,B.N,B.cR,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCn=new A.eG("Today: how well do you know the family?",null,null,B.cY,null,null,null,null,null,null,D.fKG)
D.fCE=new A.F(!0,B.qC,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDR=new A.F(!0,D.l0,null,null,null,null,13,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEe=new A.F(!0,D.l0,null,null,null,null,12,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEi=new A.F(!0,B.d_,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEr=new A.F(!0,D.fJ,null,null,null,null,15,B.N,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEC=new A.F(!0,D.fJ,null,null,null,null,13,B.D,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEX=new A.th(!0,B.ue,null,null,null,null,B.dL,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFc=new A.F(!0,B.d_,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFg=new A.F(!0,D.l0,null,null,null,null,18,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFh=new A.F(!0,B.d_,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFm=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFp=new A.F(!0,B.d_,null,null,null,null,15,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFW=new A.F(!0,B.b5,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFX=new A.F(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFZ=new A.F(!0,B.aS,null,null,null,null,15.5,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGq=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXJ=new A.F(!0,B.aR,null,null,null,null,null,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXK=new A.F(!0,D.lR,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGQ=new A.F(!0,B.d_,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acC=new A.th(!0,B.Vo,null,null,null,null,B.dL,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.WL=new A.F(!0,B.d_,null,null,null,null,null,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH_=new A.F(!0,B.a_,null,null,null,null,12.5,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH4=new A.F(!0,D.fJ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHu=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIF=new A.F(!0,D.fJ,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXT=new A.F(!0,D.fJ,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIZ=new A.F(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJa=new A.F(!0,D.fJ,null,null,null,null,null,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJc=new A.F(!0,null,null,null,null,null,8,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJi=new A.F(!0,L.jh,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXX=new A.F(!0,D.fJ,null,null,null,null,14.5,B.N,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKg=new A.F(!0,D.fJ,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKz=new A.F(!0,D.fJ,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKB=new A.F(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKD=new A.F(!0,B.d_,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL1=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A7.Js,null,null,null)
D.aYa=new A.F(!0,D.fJ,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLs=new A.F(!0,B.a_,null,null,null,null,17,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLO=new A.F(!0,B.fq,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMb=new A.F(!0,B.bU,null,null,null,null,8,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMg=new A.F(!0,B.bE,null,null,null,null,11,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMs=new A.F(!0,B.c,null,null,null,null,13.5,B.D,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMv=new A.F(!0,D.fJ,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMD=new A.F(!0,D.H0,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMP=new A.F(!0,B.b5,null,null,null,null,13,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNd=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNk=new A.F(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ec,null,null,null)
D.fNM=new A.F(!0,B.d_,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNU=new A.F(!0,B.cZ,null,null,null,null,13,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO6=new A.F(!0,D.lS,null,null,null,null,13,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYy=new A.F(!0,D.fJ,null,null,null,null,null,B.D,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.LM=new A.F(!0,B.d_,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYA=new A.F(!0,B.d_,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ec,null,null,null)
D.fOr=new A.F(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOv=new A.F(!0,G.nH,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOT=new A.F(!0,B.b5,null,null,null,null,13,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPa=new A.F(!0,D.fJ,null,null,null,null,15,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPz=new A.F(!0,B.c,null,null,null,null,null,B.D,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPY=new A.F(!0,D.fJ,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQu=new A.F(!0,D.fJ,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQz=new A.F(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQJ=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ad8=new A.F(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adb=new A.F(!0,D.lR,null,null,null,null,null,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSv=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSQ=new A.F(!0,B.aS,null,null,null,null,27,B.N,B.cR,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSX=new A.F(!0,L.jh,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT4=new A.F(!0,L.jh,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTy=new A.C("Time:",null,B.hG,null,null,null,null,null,null,null,null,null)
D.fTU=new A.C("\ud83c\udfae",null,K.acZ,null,null,null,null,null,null,null,null,null)
D.fTV=new A.C("Themes",null,B.pp,null,null,null,null,null,null,null,null,null)
D.fUq=new A.C("\ud83c\udfb2",null,B.y9,null,null,null,null,null,null,null,null,null)
D.fUu=new A.C("Delete this game?",null,B.iV,null,null,null,null,null,null,null,null,null)
D.fUB=new A.C("Add Item",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fIT=new A.F(!0,B.a_,null,null,null,null,22,B.D,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV1=new A.C("Debt receipt",null,D.fIT,null,B.K,null,null,null,null,null,null,null)
D.aYO=new A.F(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVk=new A.C("Person who owes",null,D.aYO,null,null,null,null,null,null,null,null,null)
D.fWk=new A.C("Notes",null,B.acO,null,null,null,null,null,null,null,null,null)
D.fWO=new A.C("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fHN=new A.F(!0,B.c,null,null,null,null,11,B.D,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWQ=new A.C("Share",null,D.fHN,null,null,null,null,null,null,null,null,null)
D.fXR=new A.C("Move your family trees",null,I.ad5,null,null,null,null,null,null,null,null,null)
D.fYw=new A.C("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fZ9=new A.C("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fZx=new A.C("SAVE",null,D.LM,null,null,null,null,null,null,null,null,null)
D.h_a=new A.C("The round button is the right answer.",null,V.Bw,null,null,null,null,null,null,null,null,null)
D.h_v=new A.C("Remove this book?",null,B.hh,null,null,null,null,null,null,null,null,null)
D.fOQ=new A.F(!0,B.d_,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ec,null,null,null)
D.h02=new A.C("Fireside Stories",null,D.fOQ,null,null,null,null,null,null,null,null,null)
D.aZi=new A.C("Download",null,B.cf,null,null,null,null,null,null,null,null,null)
D.h0J=new A.C("What should the AI do?",null,B.dv,null,null,null,null,null,null,null,null,null)
D.fHo=new A.F(!0,D.lR,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0Y=new A.C("REPORT CARD",null,D.fHo,null,null,null,null,null,null,null,null,null)
D.h1L=new A.C("Calabash Catch",null,B.X7,null,null,null,null,null,null,null,null,null)
D.h2c=new A.C("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.h2E=new A.C("\ud83c\udfe1",null,B.Fy,null,null,null,null,null,null,null,null,null)
D.h3l=new A.C("Ribbon bookmark",null,B.jN,null,null,null,null,null,null,null,null,null)
D.fQt=new A.F(!0,B.b5,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3Q=new A.C("NGMY.ORG",null,D.fQt,null,B.K,null,null,null,null,null,null,null)
D.h58=new A.C("Scan family tree QR",null,B.cL,null,null,null,null,null,null,null,null,null)
D.fMw=new A.F(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5W=new A.C("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fMw,null,B.K,null,null,null,null,null,null,null)
D.h79=new A.C("Delete",null,B.WF,null,null,null,null,null,null,null,null,null)
D.h7a=new A.C("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.h7i=new A.C("Thumbnail",null,B.pp,null,null,null,null,null,null,null,null,null)
D.h7S=new A.C("Save the cover",null,B.cL,null,null,null,null,null,null,null,null,null)
D.h7X=new A.C("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.BA,null,B.K,null,null,null,null,null,null,null)
D.h8k=new A.C("Your photos",null,B.pp,null,null,null,null,null,null,null,null,null)
D.h8B=new A.C("Create Project",null,B.cf,null,null,null,null,null,null,null,null,null)
D.h8Y=new A.C("\u2b50 stars",null,B.Fz,null,null,null,null,null,null,null,null,null)
D.h9b=new A.C("Design your cover",null,B.ur,null,null,null,null,null,null,null,null,null)
D.h9h=new A.C("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.h9k=new A.C("PICTURE",null,N.wg,null,null,null,null,null,null,null,null,null)
D.h9m=new A.C("\ud83c\udfaf",null,D.X6,null,null,null,null,null,null,null,null,null)
D.h9J=new A.C("Paid",null,B.cf,null,null,null,null,null,null,null,null,null)
D.h9L=new A.C("You can undo it right after.",null,V.Bw,null,null,null,null,null,null,null,null,null)
D.haj=new A.C("Print",null,B.we,null,null,null,null,null,null,null,null,null)
D.haJ=new A.C("Amount owed",null,D.aYO,null,null,null,null,null,null,null,null,null)
D.haZ=new A.C("Got it",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hbB=new A.C("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.hbE=new A.C("Add to budget",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hc3=new A.C("Debtor signature",null,B.acO,null,null,null,null,null,null,null,null,null)
D.hce=new A.C("Change icon",null,B.acN,null,null,null,null,null,null,null,null,null)
D.hd2=new A.C("MADE BY THE SYSTEM, FROM YOUR TREE",null,U.uu,null,null,null,null,null,null,null,null,null)
D.hdu=new A.C("Family tree QR",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hdA=new A.C("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.X5,null,null,null,null,null,null,null,null,null)
D.hdY=new A.C("Download",null,B.we,null,null,null,null,null,null,null,null,null)
D.hdZ=new A.C("The person who planted this tree has not made a game yet.",null,Y.By,null,null,null,null,null,null,null,null,null)
D.he2=new A.C("Change",null,B.pp,null,null,null,null,null,null,null,null,null)
D.heU=new A.C("Clear all",null,B.cf,null,null,null,null,null,null,null,null,null)
D.heX=new A.C("WHAT SHOULD IT CHANGE?",null,N.wg,null,null,null,null,null,null,null,null,null)
D.hfv=new A.C("COLOUR",null,N.wg,null,null,null,null,null,null,null,null,null)
D.hfK=new A.C("Do it",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hfO=new A.C("Create Tree",null,B.cf,null,null,null,null,null,null,null,null,null)
D.hfY=new A.C("Give me another clue",null,D.LM,null,null,null,null,null,null,null,null,null)
D.hgS=new A.C("Create Family Tree",null,B.fi,null,null,null,null,null,null,null,null,null)
D.hh1=new A.C("THE TEACHER EXPLAINS THESE",null,U.uu,null,null,null,null,null,null,null,null,null)
D.fCD=new A.F(!0,E.kF,null,null,null,null,null,B.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hh7=new A.C("Write the first page myself",null,D.fCD,null,null,null,null,null,null,null,null,null)
D.hhG=new A.C("Use this header",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hhN=new A.C("Create Project",null,E.aYu,null,null,null,null,null,null,null,null,null)
D.hJr=new C.adq(1,"header")
D.aed=new C.adq(2,"projects")
D.hJs=new C.adq(3,"cashier")
D.aee=new C.adq(4,"familyTree")
D.hZ7=new C.cJ0(0,"start")
D.hZ8=new C.cJ1(0,"start")
D.hJF=new C.a_j(null)
D.hKG=new C.a_P(null)
D.dNp=new A.bn(B.ii,[],A.as("bn<n,GT>"))
D.dtV=w([],x.dE)
D.dtW=w([],x.M)
D.hLk=new C.bir(D.dNp,D.dtV,D.dtW,0,0,null,null)
D.b2O=new C.a0F(0,"intro")
D.b2P=new C.a0F(1,"countdown")
D.aer=new C.a0F(2,"ask")
D.Y2=new C.a0F(3,"reveal")
D.b2Q=new C.a0F(4,"end")
D.hOf=new C.tp(F.H9,D.lS,B.d_,F.mj,5,!1,!1,!1,0,null)
D.hOh=new C.tp(F.H9,B.et,B.d_,B.bO,2,!0,!0,!1,2,B.d_)
D.hOj=new C.tp(B.qR,B.cZ,B.d_,F.mj,2,!0,!1,!1,2,B.as)
D.hOk=new C.tp(F.H9,B.dW,B.d_,F.mj,5,!1,!1,!1,1,null)
D.hOn=new C.tp(F.a0u,D.akG,B.d_,F.mj,4,!0,!1,!0,0,null)
D.b2T=new C.tp(F.a0u,B.dY,B.d_,F.mj,3,!0,!1,!0,2,null)
D.b2U=new C.tp(F.tp,D.lS,B.c,F.mj,0,!1,!1,!0,0,null)
D.b2V=new C.tp(B.qR,B.az,B.d_,B.bO,2,!0,!0,!1,2,B.dY)
D.b2W=new C.tp(B.qR,G.nH,B.it,F.mj,5,!1,!1,!0,3,null)
D.hOr=new C.tp(B.qR,B.dY,B.d_,F.mj,0,!0,!1,!1,0,B.az)
D.b2X=new C.tp(F.H9,B.et,B.d_,B.bO,1,!1,!0,!1,1,null)
D.b2Y=new C.tp(F.GG,B.as,B.az,F.mj,4,!0,!1,!0,2,null)
D.hOt=new C.tp(F.tp,B.as,B.et,F.mj,3,!0,!1,!1,0,null)
D.hOv=new C.tp(B.qR,B.dW,B.d_,B.bO,1,!1,!0,!1,1,null)
D.hOw=new C.tp(F.GG,D.ajH,B.c,F.mj,5,!1,!1,!0,0,null)
D.hPa=new C.a1d(null)
D.hZg=new C.agS(0,"still")
D.Yp=new C.agS(1,"walk")
D.b3H=new C.agS(2,"pound")
D.b3I=new C.agS(3,"drum")
D.hUL=new C.a2u(0,"greet")
D.b3J=new C.a2u(1,"teach")
D.aeL=new C.a2u(2,"ask")
D.hUM=new C.a2u(3,"feedback")
D.b3K=new C.a2u(4,"end")
D.Yw=new C.a2N(0,"intro")
D.Yx=new C.a2N(1,"asking")
D.BQ=new C.a2N(2,"reacting")
D.aeW=new C.a2N(3,"driving")
D.aeX=new C.a2N(4,"arrived")
D.af4=new C.aMO(0,"projects")
D.b49=new C.aMO(1,"cashier")
D.hWR=new C.aMO(2,"familyTree")})()};
(a=>{a["iJEe+s1TnHKPpK0ysxN2W/tS0TA="]=a.current})($__dart_deferred_initializers__);