((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,Ai,Aj,Ak,U,V,A3,Al,Am,O,R,A4,W,A5,M,An,L,A6,X,H,E,A7,Ao,Y,Ap,Aq,Ar,A8,As,At,Au,Av,Aw,S,A9,Ax,Ay,Az,N,Aa,AA,Ab,Ac,Ad,AB,AC,Ae,AD,G,AE,AF,Af,AG,AH,Z,AI,AJ,A_,AK,AL,P,AM,AN,Ag,AO,Ah,A0,Q,F,AP,I,A1,K,AQ,A2,T,AR,C={
bHM(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bHM=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.wa(null,""),$async$bHM)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.Y(y.z)
t=A.nA(b1)
s=A.c2(b3.length,null,!1,x.h5)
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
return A.b(A.rx(t,a1,B.ie,"book",E.Ht),$async$bHM)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.RX(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.Y(l!=null&&A5.Md(l)?y.k:y.y)
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a4n(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHM,v)},
aiU(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aiU=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.wa(null,""),$async$aiU)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.Y(y.z)
t=A.nA(b6)
s=x.S
r=A.cS(c1,0,A.dv(4,"count",s),A.U(c1).c)
q=H.a46(new A.O(r,new C.fW2(),r.$ti.k("O<aj.E,m>")).aL(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fW1(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.V.au(b7,null)+"\nAllowed values: style one of "+B.d.aL(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aiU)
case 6:l=c5
k=H.RX(l==null?"":l)
if(k==null)throw A.Y("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.aqI(s,D.dNp,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.V.au(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aiU)
case 10:l=c5
k=l==null?null:H.RX(l)
if(k==null)throw A.Y(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.v(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.v(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.cX(a8,d),a5=J.aR(a2.a),a2=a2.$ti,a7=new A.kv(a5,a2.k("kv<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
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
p=A.cE(new A.ba(h,s),new C.fW3(),s.k("M.E"),p)
p=H.a46(A.pY(p,3,A.a3(p).k("M.E")).aL(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cq<1>")
b4=A.B(new A.cq(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a4n(s,b9),$async$aiU)
case 13:b5=c5
for(s=J.a2(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aqI(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aiU,v)},
hPm(d,e,f){return A.ce(null,B.v.j(0.65),!1,null,new C.h5x(e,f),d,null,!0,!0,x.g2)},
aqI:function aqI(d,e,f){this.a=d
this.b=e
this.c=f},
fW2:function fW2(){},
fW1:function fW1(d){this.a=d},
fW3:function fW3(){},
h5x:function h5x(d,e){this.a=d
this.b=e},
bFs(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bFs=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aR(b1,new C.fIT())){u=null
w=1
break}t=B.d.cw(b1,new C.fIU())
s=$.T()
r=new A.oU(new A.oo())
q=A.v1(r,D.aU1)
p=A.L()
p.r=B.c.gp(0)
q.aD(D.aU1,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.ac
o.d=B.bF
o.e=B.dP
n=new C.fIZ(t)
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
return A.b(r.mZ().vI(520,160),$async$bFs)
case 4:w=3
return A.b(b3.ho(B.ho),$async$bFs)
case 3:b0=b3
u=b0==null?null:J.eU(B.dM.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFs,v)},
fTI(d){return C.iuH(d)},
iuH(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fTI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bl9()
n=d.x!=null&&d.A_(null).length===0
if(d.x!=null)t=n?D.B5:D.Ky
else t=d.gV7()?D.Ky:D.aOS
w=3
return A.b(C.bFs(d.ax),$async$fTI)
case 3:s=f
p.a=null
if(s!=null)p.a=A.apl(s)
r=A.a67(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aOS}else{p.c=C.xA(q,!0)
p.b=n?D.B5:D.Ky}r.a4Q(A.hgj(new C.fTK(p,d,new C.fTL(),t,n,o),null,D.bKm,B.xP))
u=r.jI(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTI,v)},
h_U(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$h_U=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fTI(d),$async$h_U)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aw(q,0,40)
u=Aw.HI(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h_U,v)},
fIT:function fIT(){},
fIU:function fIU(){},
fIZ:function fIZ(d){this.a=d},
fTL:function fTL(){},
fTK:function fTK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fTJ:function fTJ(){},
h6_(d,e){var w=0,v=A.j(x.H)
var $async$h6_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,B.v.j(0.55),!0,null,new C.h63(new A.cy(null,x.eF),e),d,null,!0,!0,x.H),$async$h6_)
case 2:return A.h(null,v)}})
return A.i($async$h6_,v)},
bIe(d,e,f,g){return C.iCu(d,e,f,g)},
iCu(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bIe=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cG.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.T(D.fAa)
w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.h5W(g,r,f),d,null,!0,!0,x.H),$async$bIe)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bIe,v)},
h64(d,e){var w=0,v=A.j(x.H)
var $async$h64=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,null,!0,null,new C.h67(new A.cy(null,x.eF),e),d,null,!0,!0,x.H),$async$h64)
case 2:return A.h(null,v)}})
return A.i($async$h64,v)},
b1a:function b1a(d,e){this.c=d
this.a=e},
cae:function cae(){},
bew:function bew(d,e){this.b=d
this.a=e},
h63:function h63(d,e){this.a=d
this.b=e},
h60:function h60(d){this.a=d},
h61:function h61(d,e,f){this.a=d
this.b=e
this.c=f},
h62:function h62(d,e){this.a=d
this.b=e},
h5W:function h5W(d,e,f){this.a=d
this.b=e
this.c=f},
h5U:function h5U(d){this.a=d},
h5V:function h5V(d,e,f){this.a=d
this.b=e
this.c=f},
h67:function h67(d,e){this.a=d
this.b=e},
h65:function h65(d){this.a=d},
h66:function h66(d,e,f){this.a=d
this.b=e
this.c=f},
fNO(d,e){var w=0,v=A.j(x.y),u,t
var $async$fNO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3R(d),$async$fNO)
case 3:t=g
J.nd(t,new C.fNP(e))
u=A.ajC(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fNO,v)},
fNP:function fNP(d){this.a=d},
aqV:function aqV(d,e,f){this.c=d
this.d=e
this.a=f},
aFK:function aFK(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dTV:function dTV(d,e){this.a=d
this.b=e},
dTG:function dTG(d,e){this.a=d
this.b=e},
dTJ:function dTJ(d,e,f){this.a=d
this.b=e
this.c=f},
dTI:function dTI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTH:function dTH(d,e){this.a=d
this.b=e},
dTK:function dTK(d,e){this.a=d
this.b=e},
dTE:function dTE(){},
dTF:function dTF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dTD:function dTD(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dTo:function dTo(d){this.a=d},
dTp:function dTp(d,e,f){this.a=d
this.b=e
this.c=f},
dTq:function dTq(d,e){this.a=d
this.b=e},
dTn:function dTn(d){this.a=d},
dTv:function dTv(d,e){this.a=d
this.b=e},
dTm:function dTm(d){this.a=d},
dTw:function dTw(d,e,f){this.a=d
this.b=e
this.c=f},
dTx:function dTx(d,e,f){this.a=d
this.b=e
this.c=f},
dTl:function dTl(d,e){this.a=d
this.b=e},
dTy:function dTy(d,e,f){this.a=d
this.b=e
this.c=f},
dTk:function dTk(d,e){this.a=d
this.b=e},
dTz:function dTz(d,e){this.a=d
this.b=e},
dTj:function dTj(d){this.a=d},
dTA:function dTA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dTh:function dTh(){},
dTb:function dTb(d){this.a=d},
dTc:function dTc(d){this.a=d},
dTi:function dTi(d,e){this.a=d
this.b=e},
dTB:function dTB(d,e){this.a=d
this.b=e},
dTg:function dTg(d){this.a=d},
dTC:function dTC(d){this.a=d},
dTf:function dTf(){},
dTr:function dTr(d,e){this.a=d
this.b=e},
dTe:function dTe(d){this.a=d},
dTs:function dTs(d,e,f){this.a=d
this.b=e
this.c=f},
dTd:function dTd(d,e){this.a=d
this.b=e},
dTa:function dTa(d,e){this.a=d
this.b=e},
dTt:function dTt(d){this.a=d},
dTu:function dTu(d,e,f){this.a=d
this.b=e
this.c=f},
dTY:function dTY(){},
dTZ:function dTZ(d,e){this.a=d
this.b=e},
dTW:function dTW(d){this.a=d},
dTX:function dTX(d){this.a=d},
dTS:function dTS(d,e){this.a=d
this.b=e},
dTT:function dTT(d){this.a=d},
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
dTP:function dTP(d,e,f){this.a=d
this.b=e
this.c=f},
dTQ:function dTQ(d,e,f){this.a=d
this.b=e
this.c=f},
dTR:function dTR(d,e,f){this.a=d
this.b=e
this.c=f},
dU_:function dU_(){},
dU0:function dU0(){},
dU1:function dU1(){},
dU2:function dU2(d){this.a=d},
dTU:function dTU(d,e){this.a=d
this.b=e},
hKP(d){return B.d.dz(D.a6d,new C.fOA(d),new C.fOB())},
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
fOA:function fOA(d){this.a=d},
fOB:function fOB(){},
amW:function amW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aXR:function aXR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ut:function Ut(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bi9:function bi9(){this.d=$
this.c=this.a=null},
dj7:function dj7(d,e){this.a=d
this.b=e},
dj5:function dj5(d,e){this.a=d
this.b=e},
dj6:function dj6(){},
dj8:function dj8(d,e){this.a=d
this.b=e},
huB(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bh(J.k(u==null?"":u))
return new C.nH(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
M_(d,e){return C.itj(d,e)},
itj(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$M_=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$M_)
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
break}o=J.cX(p,x.f)
o=A.cE(o,new C.fR8(),o.$ti.k("M.E"),x.B)
n=A.a3(o).k("X<M.E>")
o=A.B(new A.X(o,new C.fR9(),n),n.k("M.E"))
B.d.b_(o,new C.fRa())
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
return A.i($async$M_,v)},
BM(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BM=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aB(),$async$BM)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.h4B(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.aE("String","ngmy_family_book_v1_"+s+"_"+e,B.V.au(r,null)),$async$BM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BM,v)},
aTX(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aTX=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.M_(d,e),$async$aTX)
case 2:u=h
t=J.cH(u)
s=t.bl(u,new C.hdg(f))
if(s===-1)t.cd(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BM(d,e,u),$async$aTX)
case 3:return A.h(null,v)}})
return A.i($async$aTX,v)},
bFX(d,e,f){var w=0,v=A.j(x.H),u
var $async$bFX=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.M_(d,e),$async$bFX)
case 2:u=h
J.nd(u,new C.fNG(f))
w=3
return A.b(C.BM(d,e,u),$async$bFX)
case 3:return A.h(null,v)}})
return A.i($async$bFX,v)},
bGc(d,e){return C.iti(d,e)},
iti(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bGc=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bGc)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.PI
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
if(D.EA.am(0,o.h(0,"foil")))j=A.cR(o.h(0,"foil"))
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
o=B.d.q(D.dcu,o.h(0,"header"))?A.cR(o.h(0,"header")):"classic"
o=new C.IG(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.PI
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.PI
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bGc,v)},
T6(d,e,f){return C.iC_(d,e,f)},
iC_(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$T6=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aB(),$async$T6)
case 7:r=h
w=8
return A.b(r.aE("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.V.au(f.ak(),null)),$async$T6)
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
return A.i($async$T6,v)},
Sx(d,e){return C.itk(d,e)},
itk(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sx=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$Sx)
case 7:r=g
q=r.qF("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.M_(d,e),$async$Sx)
case 8:if(!j.cL(g)){n=B.a.i(d.toLowerCase())
m=J.lF(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aE("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Sx)
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
return A.i($async$Sx,v)},
aid(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aid=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sx(d,e),$async$aid)
case 3:s=g
r=J.a2(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.aB(),$async$aid)
case 5:w=4
return A.b(g.aE("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aid)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aid,v)},
a4y(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a4y=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sx(d,e),$async$a4y)
case 2:s=h
J.fT(s,f)
w=3
return A.b(A.aB(),$async$a4y)
case 3:u=h
w=4
return A.b(u.aE("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a4y)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.X(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4y)
case 5:w=6
return A.b(u.X(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4y)
case 6:return A.h(null,v)}})
return A.i($async$a4y,v)},
nH:function nH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fR8:function fR8(){},
fR9:function fR9(){},
fRa:function fRa(){},
h4B:function h4B(){},
hdg:function hdg(d){this.a=d},
fNG:function fNG(d){this.a=d},
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
bTC:function bTC(d){this.a=d},
iCj(d,e,f,g,h,i,j){return A.a8(d,!1).cb(A.ea(new C.h5b(j,i,f,e,h,g),!0,null,x.H))},
St(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$St=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sx(h,g),$async$St)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.T(D.aWp)
u=!1
w=1
break}w=4
return A.b(C.hPm(d,f,e),$async$St)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aid(h,g),$async$St)
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
return A.b(C.BM(h,r,p),$async$St)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.T6(h,r,new C.IG("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$St)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$St,v)},
h5b:function h5b(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a09:function a09(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCI:function aCI(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
djN:function djN(d){this.a=d},
djM:function djM(d,e){this.a=d
this.b=e},
djB:function djB(d,e){this.a=d
this.b=e},
djy:function djy(d,e){this.a=d
this.b=e},
dj9:function dj9(d){this.a=d},
dja:function dja(d,e){this.a=d
this.b=e},
djC:function djC(d){this.a=d},
dji:function dji(d){this.a=d},
djg:function djg(d){this.a=d},
djh:function djh(d){this.a=d},
djj:function djj(d){this.a=d},
djz:function djz(d){this.a=d},
djA:function djA(){},
dje:function dje(d){this.a=d},
djf:function djf(d,e){this.a=d
this.b=e},
djk:function djk(d){this.a=d},
djl:function djl(d,e){this.a=d
this.b=e},
djL:function djL(d){this.a=d},
djK:function djK(d,e){this.a=d
this.b=e},
djJ:function djJ(d){this.a=d},
djv:function djv(d){this.a=d},
dju:function dju(d){this.a=d},
djw:function djw(d){this.a=d},
djb:function djb(d,e){this.a=d
this.b=e},
djx:function djx(d,e){this.a=d
this.b=e},
djo:function djo(d){this.a=d},
djp:function djp(d){this.a=d},
djn:function djn(){},
djq:function djq(d){this.a=d},
djr:function djr(d){this.a=d},
djs:function djs(d,e){this.a=d
this.b=e},
djt:function djt(d,e,f){this.a=d
this.b=e
this.c=f},
djm:function djm(d,e){this.a=d
this.b=e},
djE:function djE(d){this.a=d},
djD:function djD(){},
djF:function djF(d){this.a=d},
djG:function djG(d){this.a=d},
djH:function djH(d){this.a=d},
djI:function djI(d,e){this.a=d
this.b=e},
djc:function djc(d){this.a=d},
djd:function djd(d){this.a=d},
a0d:function a0d(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biy:function biy(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dlz:function dlz(d){this.a=d},
dlA:function dlA(d){this.a=d},
dly:function dly(d){this.a=d},
dlB:function dlB(d){this.a=d},
dlx:function dlx(d){this.a=d},
dlC:function dlC(d){this.a=d},
dlw:function dlw(d){this.a=d},
dlD:function dlD(d,e){this.a=d
this.b=e},
dlv:function dlv(d,e){this.a=d
this.b=e},
dlE:function dlE(d,e){this.a=d
this.b=e},
a0b:function a0b(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
agD:function agD(d,e,f){this.a=d
this.b=e
this.c=f},
aCL:function aCL(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dk1:function dk1(d,e){this.a=d
this.b=e},
dk0:function dk0(d,e){this.a=d
this.b=e},
dk5:function dk5(d){this.a=d},
dk4:function dk4(d,e){this.a=d
this.b=e},
dk2:function dk2(d){this.a=d},
dk3:function dk3(d){this.a=d},
dk6:function dk6(d){this.a=d},
dk7:function dk7(d){this.a=d},
dk_:function dk_(d,e){this.a=d
this.b=e},
djZ:function djZ(d,e){this.a=d
this.b=e},
L2:function L2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_p:function a_p(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cRT:function cRT(d){this.a=d},
cRU:function cRU(){},
cRV:function cRV(d){this.a=d},
bfJ:function bfJ(d,e,f){this.b=d
this.c=e
this.a=f},
bfA:function bfA(d,e){this.b=d
this.a=e},
v6:function v6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_K:function a_K(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfH:function bfH(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
daS:function daS(d,e,f){this.a=d
this.b=e
this.c=f},
daR:function daR(d,e){this.a=d
this.b=e},
dbg:function dbg(d){this.a=d},
db3:function db3(){},
dbh:function dbh(d){this.a=d},
db2:function db2(){},
dbi:function dbi(d,e){this.a=d
this.b=e},
db1:function db1(d,e){this.a=d
this.b=e},
dbj:function dbj(d,e){this.a=d
this.b=e},
db0:function db0(d,e){this.a=d
this.b=e},
dbk:function dbk(d){this.a=d},
db_:function db_(){},
dbl:function dbl(d,e){this.a=d
this.b=e},
daZ:function daZ(d,e){this.a=d
this.b=e},
dbm:function dbm(d){this.a=d},
dbb:function dbb(d,e){this.a=d
this.b=e},
dbn:function dbn(d){this.a=d},
dbo:function dbo(d){this.a=d},
dbq:function dbq(d){this.a=d},
dbr:function dbr(d){this.a=d},
dba:function dba(d,e){this.a=d
this.b=e},
dbs:function dbs(d,e){this.a=d
this.b=e},
aJR:function aJR(d){this.a=d},
bl6:function bl6(d){this.a=d},
bdR:function bdR(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
amX:function amX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a2q:function a2q(d,e){this.a=d
this.b=e},
amY:function amY(d,e,f,g,h,i){var _=this
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
_.aa$=i
_.c=_.a=null},
bTM:function bTM(d){this.a=d},
bTG:function bTG(d){this.a=d},
bTF:function bTF(d,e){this.a=d
this.b=e},
bTP:function bTP(d){this.a=d},
bTH:function bTH(d){this.a=d},
bTI:function bTI(d){this.a=d},
bTL:function bTL(d){this.a=d},
bTK:function bTK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTN:function bTN(d,e){this.a=d
this.b=e},
bTO:function bTO(){},
bTJ:function bTJ(d){this.a=d},
bTD:function bTD(d,e){this.a=d
this.b=e},
bTE:function bTE(d){this.a=d},
bqJ:function bqJ(d,e){this.b=d
this.a=e},
aCJ:function aCJ(){},
iQ(d,e){var w
$.T()
w=A.L()
w.b=B.ac
w.c=e
w.r=d.gp(0)
w.d=B.bF
w.e=B.dP
return w},
bFu(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bs(j.save())
j.translate(e.a,e.b)
d.nK(0,a0?-f:f,f)
w=A.bY(B.hB,8,36)
v=B.v.j(0.3)
u=$.T()
t=A.L()
t.r=v.gp(0)
d.c1(w,t)
w=a1===D.Yo
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.v,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eBo,new A.r(-4+v,-2),C.iQ(q,5))
d.ah(D.ez1,new A.r(4-v,-2),C.iQ(q,5))}else{t=A.bY(B.Kp,14,40)
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
break}if(a1===D.b3F){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iQ(F.GF,3.4))
d.ah(D.eBF,new A.r(9,n),C.iQ(q,4))
d.ah(D.ezs,new A.r(10,n),C.iQ(q,4))}else if(a1===D.b3G){d.ah(D.eAv,new A.r(-8,-26-Math.max(0,w)*6),C.iQ(q,4))
d.ah(D.exu,new A.r(8,-26-Math.max(0,-w)*6),C.iQ(q,4))}else{w=s*3
v=-38-r
d.ah(D.eAz,new A.r(-12-w,v),C.iQ(q,4))
d.ah(D.aNS,new A.r(12+w,v),C.iQ(q,4))}w=A.L()
w.r=q.gp(0)
d.aD(D.fmZ,w)
m=new A.r(0,-77-r)
w=A.bY(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c1(w,v)
w=h.y
if(w!=null){v=A.bY(m.a7(0,K.w0),15,24)
u=A.L()
u.r=w.gp(0)
d.c1(v,u)
u=m.a7(0,D.exo)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bY(m.a7(0,B.u5),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a7(0,D.eBD),m.a7(0,D.eAt),C.iQ(v,2.2))
d.ah(m.a7(0,D.ezr),m.a7(0,D.exl),C.iQ(v,2.2))}if(w===4){w=m.a7(0,D.eBH)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a7(0,D.ezt)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a7(0,D.eAi)
v=A.L()
v.r=B.ir.gp(0)
d.O(w,0.9,v)
v=m.a7(0,D.eA7)
w=A.L()
w.r=B.ir.gp(0)
d.O(v,0.9,w)
if(i){l=m.a7(0,K.aa3)
w=A.bY(l,21,22)
v=A.L()
v.r=D.lQ.gp(0)
d.c1(w,v)
v=A.bY(l.a7(0,K.aNP),5,12)
w=A.L()
w.r=D.bj5.gp(0)
d.c1(v,w)
d.ah(l.a7(0,D.eBz),l.a7(0,K.aOc),C.iQ(B.cY,1.4))
d.ah(D.aNS,new A.r(15,-88-r),C.iQ(q,3.6))}j.restore()},
hJq(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bs(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bY(B.dT,18,96)
u=B.v.j(0.28)
$.T()
t=A.L()
t.r=u.gp(0)
d.c1(v,t)
t=A.bY(B.dT,11,70)
v=B.v.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c1(t,u)
d.ly(D.aU5,A.L())
C.ihL(d,g,h,i,j)
s=(k==null?D.aa8:k).a-w>=0?1:-1
w=A.L()
w.a=B.MN
w.san(A.jP(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.aka.j(0.5),D.aka.j(0.12),D.bqL.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aD(D.aU5,w)
r.restore()
r.restore()},
ihL(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.v,0.28)
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
s=A.by(D.fn_,B.ua)
p=$.T()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.by(D.fmV,B.hS)
s=A.ap(v,B.v,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.by(D.fn8,B.hS)
o=A.ap(v,B.v,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fn1,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.flL,s)
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
k=D.djV[j]
i=new A.as(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=5
i.r=k.gp(0)
i.d=B.bF
i.e=B.dP
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ao(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
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
i.e=B.dP
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.as(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=1.6
i.r=k.gp(0)
i.d=B.bF
i.e=B.dP
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.eB1,D.ey9,C.iQ(a2.c.j(0.9),3))}a1.ah(D.eBA,D.eAB,C.iQ(B.v.j(0.18),1.6))
a1.ah(D.ext,K.aNU,C.iQ(B.v.j(0.18),1.6))
u=B.v.j(0.12)
k=$.T()
i=A.L()
i.r=u.gp(0)
a1.aD(D.flH,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aD(D.flV,i)
n=new A.aH(k.r,B.aj,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.ch(0,-57,9,-66))
n.E(new A.ch(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fm3,0.1,2.941592653589793,!1,C.iQ(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.aad
n=25*q
k=23*q
i=9*q
C.hFf(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.F1:o
C.hFf(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eyU,D.eyQ,C.iQ(D.al9,4))
a1.ah(D.eyS,D.eyO,C.iQ(D.H5.j(0.7),1.4))
u=A.L()
u.r=B.cY.gp(0)
a1.O(D.eyR,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bs(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jr(0,a3.f)
a1.bV(0,r)
C.ihH(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hFf(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aI(0,e),r=s.gcL(),q=r===0?B.hB:s.f_(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
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
ihH(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bY(B.w_,40,38)
$.T()
v=A.L()
v.r=c0.gp(0)
c2.c1(w,v)}if(c1===4){$.T()
w=A.L()
w.r=c0.gp(0)
c2.O(D.eAJ,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.exK,9.5,w)}w=A.bY(D.eBW,10,6)
v=$.T()
u=A.L()
u.r=c8.gp(0)
c2.c1(w,u)
u=A.bY(D.eAf,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c1(u,w)
v=v.r
w=x.v
t=new A.aH(v,B.aj,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.i6(13,-20,17,-9,16,2))
t.E(new A.i6(15,13,8,20,0,20))
t.E(new A.i6(-8,20,-15,13,-16,2))
t.E(new A.i6(-17,-9,-13,-20,0,-20))
t.E(new A.bA())
u=A.L()
u.san(A.ws(D.eBq,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iQ(c8.j(0.5),0.8)
c2.cQ(D.fna,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.flO,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eAG,K.aOl,s)
c2.ah(D.exG,D.exx,s)
c2.cQ(D.fm2,2.2,1.4,!1,s)
c2.cQ(D.flM,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.as(B.T,B.Q,B.W,B.X,B.U)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fmh,3.141592653589793,3.141592653589793,!0,p)
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
c2.ah(D.eAx,D.exy,C.iQ(G.nF,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.eAM,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.exL,3,o)
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
c2.cQ(D.fmo,3.4,2.5,!1,C.iQ(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fma,3.6,2.2,!1,C.iQ(o,1.2))
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
c2.O(D.exz,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fml,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.as(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=0.9
o.r=p.gp(0)
o.d=B.bF
o.e=B.dP
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aEz[l]
o=new A.as(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=4.5
o.r=c0.gp(0)
o.d=B.bF
o.e=B.dP
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.as(B.T,B.Q,B.W,B.X,B.U)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fmk,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.aa3,K.aa2,C.iQ(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.flP,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bY(D.eBJ,5,8)
o=D.aho.j(i)
n=A.L()
n.r=o.gp(0)
c2.c1(p,n)
n=A.bY(D.eAq,5,8)
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
a3.r=D.bn0.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.as(B.T,B.Q,B.W,B.X,B.U)
a3.r=B.v.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.as(B.T,B.Q,B.W,B.X,B.U)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a_A:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.as(B.T,B.Q,B.W,B.X,B.U)
a9.b=B.ac
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bF
a9.e=B.dP
a3=p?0.8:0
c2.cQ(A.bY(new A.r(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dU
else{b1=A.ap(c0,B.v,0.2)
b1.toString}b2=new A.as(B.T,B.Q,B.W,B.X,B.U)
b2.b=B.ac
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bF
b2.e=B.dP
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.bxx
else{u=A.ap(c8,D.bqN,0.6)
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
v.r=D.bq4.gp(0)
c2.af(b8,v)
J.bs(d.save())
c2.mz(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aD(new A.a4(w,11,w+b6*2,13.2),u)
u=A.bY(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bxC.gp(0)
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
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fm1,-1.2,2.2,!1,C.iQ(c8.j(0.5),0.8))
c2.cQ(D.flR,2.141592653589793,2.2,!1,C.iQ(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.eA8,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.eA5,1.7,w)}},
ind(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.T(),f=new A.oU(new A.oo()),e=A.v1(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jP(B.J,new A.r(0,a0*0.46),D.dgr,D.d73,B.x,h))
e.aD(new A.a4(0,0,0+d,0+a0),a2)
a2=e.c
J.bs(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e1()
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
d.san(A.ws(B.J,230,A.a([D.blF,B.L],a0),h,B.x,h,h,0))
e.c1(D.fmw,d)
a2.restore()
d=A.L()
d.san(A.ws(D.aab,58,A.a([D.bp5,B.L],a0),h,B.x,h,h,0))
e.O(D.aab,58,d)
d=A.L()
d.r=D.bkn.gp(0)
e.O(D.aab,24,d)
d=A.L()
d.r=D.a00.gp(0)
e.O(D.eyt,5,d)
d=A.L()
d.r=D.a00.gp(0)
e.O(D.eyx,3.4,d)
d=A.L()
d.r=D.a00.gp(0)
e.O(D.eyw,2.4,d)
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
g=[D.biU,D.bkW,D.br6][s]
u=$.T()
t=new A.as(B.T,B.Q,B.W,B.X,B.U)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cB4[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.as(B.T,B.Q,B.W,B.X,B.U)
u.b=B.ac
u.c=2.4
u.r=D.a0m.gp(0)
u.d=B.bF
u.e=B.dP
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bY(new A.r(g,k-27),11,46)
u=new A.as(B.T,B.Q,B.W,B.X,B.U)
u.r=D.a0m.gp(0)
e.c1(g,u)
d=A.bY(new A.r(o-12,d),8,24)
u=new A.as(B.T,B.Q,B.W,B.X,B.U)
u.r=D.a0m.gp(0)
e.c1(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.as(B.T,B.Q,B.W,B.X,B.U)
u.r=D.bkq.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jP(D.ex2,D.ex5,D.d9d,B.xD,B.x,h))
e.aD(new A.a4(-200,412,650,1300),g)
j=new A.e1()
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
g.san(A.ws(B.J,250,A.a([D.bs6,D.blg,D.bu3],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.ajR,D.bjV,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.T()
a0=new A.as(B.T,B.Q,B.W,B.X,B.U)
a0.b=B.ac
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bF
a0.e=B.dP
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.ifW(e)
for(l=0;l<3;++l)C.ija(e,D.aCm[l])
C.ij_(e,D.eyn)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.T()
a0=new A.as(B.T,B.Q,B.W,B.X,B.U)
a0.b=B.ac
a0.c=2.4
a0.r=D.a0i.gp(0)
a0.d=B.bF
a0.e=B.dP
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.exv,D.exO,C.iQ(D.bkE,1.6))
a2.restore()
return f.mZ()},
ifW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.T().r,g=x.v,f=new A.aH(h,B.aj,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.i6(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.i6(416,382,432,422,428,462))
f.E(new A.bA())
w=A.L()
w.san(A.jP(new A.r(354,0),new A.r(430,0),D.dFP,B.m5,B.x,i))
d.af(f,w)
v=new A.e1()
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
r.e=B.dP
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.as(B.T,B.Q,B.W,B.X,B.U)
l.r=A.ap(D.bkw,D.br4,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.as(B.T,B.Q,B.W,B.X,B.U)
r.b=B.ac
r.c=1.2
r.r=D.a0i.gp(0)
r.d=B.bF
r.e=B.dP
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bY(new A.r(w,q+28),13,7)
w=new A.as(B.T,B.Q,B.W,B.X,B.U)
w.r=D.bst.gp(0)
d.c1(q,w)}},
ija(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bY(new A.r(a5,a6+2),a9,a7*2.8),b1=B.v.j(0.3),b2=$.T(),b3=A.L()
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
u.san(A.jP(new A.r(b0,0),new A.r(v,0),D.dlx,B.m5,B.x,a4))
b4.af(w,u)
t=new A.e1()
t.cT(B.o.S(a5*7))
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
n.e=B.dP
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ajN.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aD(new A.a4(b0,u,b0+p,u+7),n)
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
j.r=D.lQ.j(0.85).gp(0)
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
b1.san(A.jP(new A.r(a5-n,0),new A.r(a5+n,0),D.dpd,B.m5,B.x,a4))
b4.af(e,b1)
J.bs(v.save())
b4.mz(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h9()?B.v:D.bk3).j(0.16)
i=new A.as(B.T,B.Q,B.W,B.X,B.U)
i.b=B.ac
i.c=0.9
i.r=n.gp(0)
i.d=B.bF
i.e=B.dP
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
n.e=B.dP
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.as(B.T,B.Q,B.W,B.X,B.U)
v.b=B.ac
v.c=1.1
v.r=D.bry.gp(0)
v.d=B.bF
v.e=B.dP
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aH(b0,B.aj,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bA())
b0=A.L()
b0.r=D.bnv.gp(0)
b4.af(a9,b0)},
ij_(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aEw[s]
$.T()
q=new A.as(B.T,B.Q,B.W,B.X,B.U)
q.b=B.ac
q.c=3
q.r=D.a0i.gp(0)
q.d=B.bF
q.e=B.dP
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bY(e.a7(0,K.aNO),24,36)
t=$.T()
r=A.L()
r.r=D.bwJ.gp(0)
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
iim(d){switch(B.o.F(d,8)){case 0:return D.b2V
case 1:return D.b2T
case 2:return D.b2S
case 3:return D.b2R
case 4:return D.b2U
case 5:return D.b2W
case 6:return D.hO7
default:return D.hO6}},
T4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bqK()
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
w.as=k==null?D.F1:k
C.hJq(d,e,p,C.iim(m),w,s,m,l)},
hKV(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bVq:function bVq(){var _=this
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
bqK:function bqK(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
anf:function anf(){this.b=this.a=null},
aXW:function aXW(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
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
bVl:function bVl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVm:function bVm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVn:function bVn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVo:function bVo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVp:function bVp(){},
bVh:function bVh(d){this.a=d},
agM:function agM(d,e){this.a=d
this.b=e},
aeJ:function aeJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Nl(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bU1(s)
s.bDf(d)
return s},
Hk(d,e,f,g,h,i,j){var w,v=A.U(g).k("X<1>")
v=A.d1(new A.X(g,new C.fBy(f),v),v.k("M.E"))
w=A.B(v,A.a3(v).k("ci.E"))
B.d.dX(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cS(w,0,A.dv(3,"count",x.S),A.U(w).c))
B.d.dX(v,d)
return new C.lL(e,v,B.d.cc(v,f),h,i,"tree",j)},
iDX(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.hd6(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jE(c4,c0)
t=A.B(c4,A.a3(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jE(c4,c0)
r=A.B(c4,A.a3(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jE(c4,c0)
q=A.B(c4,A.a3(c4).k("ci.E"))
for(c4=w.length,v=A.U(t).k("X<1>"),s=v.k("M.E"),p=A.U(w).k("X<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.d()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.x8)g="father"
else g=h===D.oR?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.X(t,new C.hd8(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Hk(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.X(w,new C.hd9(i,m),p),o)
B.d.dX(d,c6)
c2.$2(b4,new C.lL("True or false: "+h+" is the "+g+" of "+l+".",Ah.Th,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lL("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",Ah.Th,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Gu(m)
h=a0.length
if(h!==0){a1=a0[c6.av(h)]
h=B.a.i(a1.b)
f=A.B(new A.X(t,new C.hda(l,a0,c5),v),s)
e=a1.c
if(e===D.x8)e="son"
else e=e===D.oR?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Hk(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ez([h+1,h+2,Math.max(0,h-1)],n)
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
for(e=A.U(a0),a2=e.k("iO<1>"),a3=new A.iO(a0,1,b3,a2),a3.na(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gJ(0),a2.k("bQ<aj.E>")),a2=a2.k("aj.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Hk(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.asm(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.X(t,new C.hdb(l),v),s)
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
j=A.B(new A.X(t,new C.hdc(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.x8
if(e)a2=b7
else a2=f===D.oR?b8:b9
if(e)f=b7
else f=f===D.oR?b8:b9
c2.$2("grand",C.Hk(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aOb(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.av(k)].b)
j=A.B(new A.X(t,new C.hdd(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Hk(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cU4)
h=l+" was born in "+k
c2.$2("place",C.Hk(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.dal)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Hk(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Hk(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jd(b1,b3,b3)
c2.$2("year",C.Hk(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bG8(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Nl(d),l=new A.e1()
l.cT(f)
w=C.iDX(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hsF(v.d,l)
v=A.a3(w).k("cq<1>")
u=A.B(new A.cq(w,v),v.k("M.E"))
B.d.dX(u,l)
t=A.a([],x.J)
s=A.aQ(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aR(u,new C.fPd(n,w))))break
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
if(v<e){v=A.B(D.aBm,x.df)
B.d.dX(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hJy(o,l))}}else if(!g&&v>3){o=C.hJy(D.aBm[l.av(14)],l)
t[t.length-1-l.av(3)]=o}return t},
hJy(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.dX(w,e)
return new C.lL(d.a,w,B.d.cc(w,v),d.d,d.e,d.f,d.r)},
hOW(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Nl(a2),a1=new A.e1()
a1.cT(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Gu(q).length>=2)u.push(q)}B.d.dX(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Gu(n)
l=A.U(m)
k=new A.iO(m,0,5,l.k("iO<1>"))
k.na(m,0,5,l.c)
j=k.dk(0)
if(new A.O(j,new C.h3v(),A.U(j).k("O<1,F>")).fC(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aTH(a0,j[i]))
w.push(new C.avk("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c6(e.c_(0,a0.anu(q),new C.h3w()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cq<1>")
d=A.B(new A.cq(e,t),t.k("M.E"))
B.d.fd(d)
v=A.a([],v)
for(u=A.cS(d,0,A.dv(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bQ(u,u.gJ(0),t.k("bQ<aj.E>")),t=t.k("aj.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cH(s)
m.dX(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aTH(a0,v[r]))
w.push(new C.avk("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aS8(d){return B.d.aoY(D.aDT,new C.fL1(d))},
itO(d){return A.nK(new A.X(D.aDT,new C.fS4(d),x.av))},
bUQ(d){return C.hYO(d)},
hYO(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bUQ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bUQ)
case 7:r=f
q=B.a.i(d)
q=A.es(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bUQ,v)},
C7(d,e){return C.hYL(d,e)},
hYL(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$C7=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$C7)
case 7:r=g
p=B.a.i(d)
o=A.es(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
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
bUP(d,e,f){return C.hYM(d,e,f)},
hYM(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bUP=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bUP)
case 7:r=h
q=B.a.i(d)
q=A.es(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bUP,v)},
C8(d,e,f,g){return C.hYN(d,e,f,g)},
hYN(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$C8=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$C8)
case 7:r=i
p=B.a.i(d)
o=A.es(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
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
bIs(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
hfb(d,e,f,g){return new C.alO(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hWP(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aR(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.c1)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cS(w,0,A.dv(4,"count",x.S),u).dk(0)
B.d.u(w,A.c2(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.i.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.i.M(u)
return C.hfb(w,v,B.o.D(u==null?20:u,5,60),t)},
htP(d){var w,v,u,t,s,r,q=J.a2(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aR(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.c1)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gP(q)
if(u.b(r))v.push(C.hWP(A.a1(r,t,s)))}return new C.N4(p,w,v)},
hnQ(d){var w,v=A.a([],x.c)
for(w=J.aR(d.z);w.C();)v.push(C.htP(w.gP(w)))
return v},
aTH(d,e){var w=e.c===D.oR
if(d.anu(e)===0&&d.Gu(e).length!==0)return w?0:1
if(d.Gu(e).length!==0||d.asm(e)!=null)return w?2:3
return w?4:5},
hQ0(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nl(a4),a3=new A.e1()
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
j=i.h(0,k)}h=a2.Gu(m)
g=a2.asm(m)
f=a2.aOb(m)
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
if(k===D.x8)k="father"
else k=k===D.oR?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.x8)k="father"
else k=k===D.oR?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.dX(l,a3)
B.d.b_(l,new C.hdx())
d=B.a.i(m.b)
a0=A.B(new A.X(s,new C.hdy(d),o),n)
B.d.dX(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iO(a0,0,3,i.k("iO<1>"))
a1.na(a0,0,3,i.c)
B.d.u(k,a1)
B.d.dX(k,a3)
a1=C.aTH(a2,m)
i=new A.iO(l,0,4,p)
i.na(l,0,4,r)
w.push(new C.bc1(d,a1,i.dk(0),k))
if(w.length>=5)break}return w},
hGS(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.Y(d,"My ")?1:0},
hP6(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nl(a4),a3=new A.e1()
a3.cT(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Gu(q).length>=2)u.push(q)}B.d.dX(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Gu(l)
j=A.U(k)
i=new A.iO(k,0,4,j.k("iO<1>"))
i.na(k,0,4,j.c)
h=i.dk(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aR(h,new C.h47(q))&&q.d!==j)i.push(q)}B.d.dX(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iO(i,0,k,m)
j.na(i,0,k,n)
f=j.dk(0)
j=B.a.i(l.b)
k=C.aTH(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aTH(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aTH(a2,f[g]))
w.push(new C.aaM(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lL:function lL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bU1:function bU1(d){this.b=d
this.c=$},
bU2:function bU2(){},
bU3:function bU3(d){this.a=d},
fBy:function fBy(d){this.a=d},
hd6:function hd6(d){this.a=d},
hd7:function hd7(){},
hd8:function hd8(d){this.a=d},
hd9:function hd9(d,e){this.a=d
this.b=e},
hda:function hda(d,e,f){this.a=d
this.b=e
this.c=f},
hd5:function hd5(d,e){this.a=d
this.b=e},
hdb:function hdb(d){this.a=d},
hdc:function hdc(d){this.a=d},
hdd:function hdd(d,e,f){this.a=d
this.b=e
this.c=f},
hd4:function hd4(d,e){this.a=d
this.b=e},
fPd:function fPd(d,e){this.a=d
this.b=e},
avk:function avk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h3v:function h3v(){},
h3w:function h3w(){},
zS:function zS(d,e,f){this.a=d
this.b=e
this.c=f},
fL1:function fL1(d){this.a=d},
fS4:function fS4(d){this.a=d},
alO:function alO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bON:function bON(){},
N4:function N4(d,e,f){this.a=d
this.b=e
this.c=f},
bc1:function bc1(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
hdx:function hdx(){},
hdy:function hdy(d){this.a=d},
aaM:function aaM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h47:function h47(d){this.a=d},
bjo:function bjo(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
agK:function agK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
al6:function al6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
al7:function al7(d,e,f,g,h){var _=this
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
_.aa$=h
_.c=_.a=null},
bMW:function bMW(d){this.a=d},
bMR:function bMR(){},
bMX:function bMX(){},
bMP:function bMP(){},
bMQ:function bMQ(){},
bMV:function bMV(d){this.a=d},
bMS:function bMS(d,e){this.a=d
this.b=e},
bMU:function bMU(d,e){this.a=d
this.b=e},
bMT:function bMT(d,e){this.a=d
this.b=e},
bMO:function bMO(d){this.a=d},
bey:function bey(d,e){this.b=d
this.a=e},
R7:function R7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCH:function aCH(d,e,f){this.b=d
this.c=e
this.a=f},
aB8:function aB8(d,e,f){this.a=d
this.b=e
this.c=f},
avW:function avW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
avX:function avX(d,e,f){var _=this
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
csT:function csT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csU:function csU(d){this.a=d},
csS:function csS(d){this.a=d},
csV:function csV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
csW:function csW(){},
csX:function csX(d,e){this.a=d
this.b=e},
csY:function csY(){},
csZ:function csZ(d){this.a=d},
csP:function csP(d){this.a=d},
csQ:function csQ(d,e){this.a=d
this.b=e},
csR:function csR(d,e,f){this.a=d
this.b=e
this.c=f},
csK:function csK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csM:function csM(d,e){this.a=d
this.b=e},
csN:function csN(d,e){this.a=d
this.b=e},
csL:function csL(d,e){this.a=d
this.b=e},
csJ:function csJ(){},
csO:function csO(){},
be_:function be_(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cSX:function cSX(){},
azU:function azU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azV:function azV(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cHQ:function cHQ(d){this.a=d},
cHP:function cHP(d){this.a=d},
cHY:function cHY(d,e){this.a=d
this.b=e},
cHZ:function cHZ(d,e){this.a=d
this.b=e},
cI_:function cI_(d){this.a=d},
cHX:function cHX(d){this.a=d},
cI0:function cI0(d){this.a=d},
cI1:function cI1(d,e){this.a=d
this.b=e},
cI2:function cI2(){},
cI3:function cI3(d){this.a=d},
cHS:function cHS(d){this.a=d},
cHT:function cHT(d,e){this.a=d
this.b=e},
cHR:function cHR(d,e){this.a=d
this.b=e},
cHU:function cHU(){},
cHV:function cHV(){},
cHW:function cHW(d,e){this.a=d
this.b=e},
aAT:function aAT(){},
aIf:function aIf(){},
hls(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bt7((w-450*u)/2,(v-900*u)/2,u)},
agy:function agy(){},
fdM:function fdM(d){this.a=d},
aM4:function aM4(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fo3:function fo3(d){this.a=d},
an5:function an5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
an6:function an6(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qf$=f
_.Mq$=g
_.ao0$=h
_.bv$=i
_.aa$=j
_.c=_.a=null},
bUO:function bUO(d){this.a=d},
bUN:function bUN(){},
bUL:function bUL(d){this.a=d},
bUJ:function bUJ(){},
bUK:function bUK(d){this.a=d},
bUG:function bUG(d,e){this.a=d
this.b=e},
bUH:function bUH(){},
bUI:function bUI(d){this.a=d},
bUM:function bUM(d,e){this.a=d
this.b=e},
bUF:function bUF(d){this.a=d},
buR:function buR(d,e){this.b=d
this.a=e},
fdN:function fdN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fdO:function fdO(d,e,f){this.a=d
this.b=e
this.c=f},
fdP:function fdP(d,e,f){this.a=d
this.b=e
this.c=f},
fdQ:function fdQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fdR:function fdR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fdS:function fdS(){},
an3:function an3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
an4:function an4(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qf$=f
_.Mq$=g
_.ao0$=h
_.bv$=i
_.aa$=j
_.c=_.a=null},
bUr:function bUr(){},
bUC:function bUC(d,e){this.a=d
this.b=e},
bUD:function bUD(d){this.a=d},
bUE:function bUE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUy:function bUy(){},
bUx:function bUx(d,e){this.a=d
this.b=e},
bUz:function bUz(d,e){this.a=d
this.b=e},
bUA:function bUA(){},
bUB:function bUB(d){this.a=d},
bUt:function bUt(d){this.a=d},
bUu:function bUu(d){this.a=d},
bUv:function bUv(d){this.a=d},
bUs:function bUs(d,e){this.a=d
this.b=e},
bUw:function bUw(d){this.a=d},
ble:function ble(d,e){this.b=d
this.a=e},
dv0:function dv0(){},
a2J:function a2J(d,e){this.a=d
this.b=e},
an_:function an_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
an0:function an0(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qf$=e
_.Mq$=f
_.ao0$=g
_.bv$=h
_.aa$=i
_.c=_.a=null},
bUd:function bUd(d){this.a=d},
bUc:function bUc(){},
bUb:function bUb(){},
bU5:function bU5(){},
bU6:function bU6(){},
bUa:function bUa(d,e,f){this.a=d
this.b=e
this.c=f},
bU9:function bU9(d){this.a=d},
bU7:function bU7(d,e){this.a=d
this.b=e},
bU8:function bU8(d){this.a=d},
bkE:function bkE(d,e){this.b=d
this.a=e},
aCK:function aCK(){},
bib:function bib(){},
aCM:function aCM(){},
bic:function bic(){},
aCN:function aCN(){},
bid:function bid(){},
uG(d,e,f,g,h){var w,v,u=null,t=A.n(18),s=A.a([],x.V)
s.push(new A.aa(0,B.H,f.j(0.4),B.hR,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.W(g,h,u,u,u,20),B.aa],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.p(u,A.A(v,B.l,u,B.e,B.M,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.m),u,u,u,u,B.Pl,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
huC(d,e,f,g,h,i,j){return new C.an1(i,h,d,j,e,f,g,null)},
a7f:function a7f(d,e){this.c=d
this.a=e},
bkL:function bkL(d){this.a=d},
tP:function tP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bU4:function bU4(d){this.a=d},
II:function II(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
WQ:function WQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnz:function bnz(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e5x:function e5x(d,e){this.a=d
this.b=e},
e5y:function e5y(d){this.a=d},
e5z:function e5z(d,e){this.a=d
this.b=e},
e5v:function e5v(d){this.a=d},
e5w:function e5w(d){this.a=d},
e5u:function e5u(d){this.a=d},
e5s:function e5s(d){this.a=d},
e5t:function e5t(d){this.a=d},
e5r:function e5r(d,e){this.a=d
this.b=e},
e5A:function e5A(d){this.a=d},
e5B:function e5B(d,e){this.a=d
this.b=e},
e5C:function e5C(d,e){this.a=d
this.b=e},
e5D:function e5D(d,e){this.a=d
this.b=e},
e5G:function e5G(d,e){this.a=d
this.b=e},
e5H:function e5H(d,e){this.a=d
this.b=e},
e5I:function e5I(d,e){this.a=d
this.b=e},
e5J:function e5J(d,e){this.a=d
this.b=e},
e5K:function e5K(d,e){this.a=d
this.b=e},
e5L:function e5L(d,e,f){this.a=d
this.b=e
this.c=f},
e5M:function e5M(d,e){this.a=d
this.b=e},
e5N:function e5N(d,e){this.a=d
this.b=e},
e5E:function e5E(d){this.a=d},
e5F:function e5F(d){this.a=d},
a0B:function a0B(d,e){this.a=d
this.b=e},
an1:function an1(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
an2:function an2(d){var _=this
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
bUp:function bUp(d){this.a=d},
bUq:function bUq(d){this.a=d},
bUo:function bUo(d){this.a=d},
bUf:function bUf(d){this.a=d},
bUg:function bUg(d){this.a=d},
bUe:function bUe(d){this.a=d},
bUl:function bUl(d,e,f){this.a=d
this.b=e
this.c=f},
bUm:function bUm(d){this.a=d},
bUi:function bUi(d,e){this.a=d
this.b=e},
bUj:function bUj(d,e,f){this.a=d
this.b=e
this.c=f},
bUn:function bUn(){},
bUk:function bUk(d,e){this.a=d
this.b=e},
bUh:function bUh(d){this.a=d},
Uu:function Uu(d,e){this.c=d
this.a=e},
amZ:function amZ(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bTQ:function bTQ(d){this.a=d},
bTR:function bTR(d){this.a=d},
bU0:function bU0(){},
bU_:function bU_(d,e,f){this.a=d
this.b=e
this.c=f},
bTV:function bTV(d,e){this.a=d
this.b=e},
bTU:function bTU(d,e){this.a=d
this.b=e},
bTW:function bTW(d){this.a=d},
bTX:function bTX(d,e){this.a=d
this.b=e},
bTY:function bTY(d,e){this.a=d
this.b=e},
bTT:function bTT(d,e){this.a=d
this.b=e},
bTZ:function bTZ(d,e,f){this.a=d
this.b=e
this.c=f},
bTS:function bTS(d,e){this.a=d
this.b=e},
isg(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ajS(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.V(Date.now(),0,!1))
s=new C.fOE(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("X<1>"),q=q.k("cM<1,m>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zG)m.push(l===D.x8?"male":"female")
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
m.push("child of "+l+k)}a0=A.B(new A.cM(new A.X(a4,new C.fOC(u,f),p),new C.fOD(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aL(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aL(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aw(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ish(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ajS(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fOJ(v,e)
q=new C.fOH(v)
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
d=A.d1(new A.ba(p,d),d.k("M.E"))
n=A.B(d,A.a3(d).k("ci.E"))
B.d.fd(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eK(l,new C.fOI(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aL(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
idc(d,e,f,g){var w,v,u=C.isi(d,e)
if(u<=0||f.length<=u)return new A.agc(!1,D.Ek,f)
if(g.q(0,e.a))return new A.agc(!1,D.Ek,f)
w=A.U(f).c
v=A.cS(f,0,A.dv(u,"count",x.S),w).dk(0)
return new A.agc(!0,A.cS(f,u,null,w).dk(0),v)},
idd(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ajS(d3),d2=d1.length
if(d2===0)return D.hL7
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c_(0,t.a,new C.dke(t))}s=new C.dkv(v)
d2=x.dy
r=A.S(w,d2)
q=new C.dkn(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dkm(r)
l=A.S(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c6(l.c_(0,k,new C.dkf()),o)}h=new C.dkl(s)
g=new C.dkk(l,r)
p=v.$ti.k("ba<2>")
o=p.k("X<M.E>")
f=A.B(new A.X(new A.ba(v,p),new C.dkg(h),o),o.k("M.E"))
e=f.length===0?new A.ba(v,p).gH(0):B.d.gH(f)
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
a9=new C.dkt(new C.dkp(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gan_(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ez([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nK(J.dM(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.dO)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.dkd(a2,new C.dku(),b6,a3,b4,v,a4,a5,a6,b5)
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
b5[c4]=new C.L9(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cq<1>")
d2=A.B(new A.cq(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bP(0,new C.dkh(c6,b4))
for(d2=new A.cd(a4,a4.$ti.k("cd<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aR(c7.b);j.C();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eK(j,new C.dki(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b_(o,new C.dkj())
c6.push(new C.aLZ(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bih(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hKh(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(d)
return w==null?null:w.b[1]},
hDV(d,e,f,g,h,i,j,k,l,m,n){return new C.a0P(k,f,j,e,l,n,m,d,g,h,i,null)},
aEL(d,e,f,g,h,i,j){return new C.bm4(i,d,e,f,j,h,g,null)},
as7:function as7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGj:function aGj(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e7c:function e7c(d){this.a=d},
e7b:function e7b(d){this.a=d},
e7e:function e7e(d,e){this.a=d
this.b=e},
e7f:function e7f(d,e){this.a=d
this.b=e},
e7g:function e7g(d){this.a=d},
e7a:function e7a(d,e){this.a=d
this.b=e},
e7d:function e7d(d){this.a=d},
e7i:function e7i(d){this.a=d},
e7h:function e7h(d,e){this.a=d
this.b=e},
as1:function as1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGg:function aGg(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e6D:function e6D(d){this.a=d},
e6B:function e6B(d){this.a=d},
e6C:function e6C(d){this.a=d},
e6E:function e6E(d,e){this.a=d
this.b=e},
e6y:function e6y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6_:function e6_(d){this.a=d},
e60:function e60(d,e){this.a=d
this.b=e},
e6h:function e6h(d){this.a=d},
e6f:function e6f(d){this.a=d},
e6g:function e6g(d,e){this.a=d
this.b=e},
e6i:function e6i(d){this.a=d},
e6j:function e6j(d,e){this.a=d
this.b=e},
e6x:function e6x(d,e){this.a=d
this.b=e},
e6e:function e6e(d){this.a=d},
e6d:function e6d(d){this.a=d},
e6c:function e6c(d,e){this.a=d
this.b=e},
e6u:function e6u(){},
e6v:function e6v(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e6t:function e6t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e6n:function e6n(d){this.a=d},
e6o:function e6o(d,e,f){this.a=d
this.b=e
this.c=f},
e6m:function e6m(d,e){this.a=d
this.b=e},
e6p:function e6p(d,e){this.a=d
this.b=e},
e6k:function e6k(d,e){this.a=d
this.b=e},
e6l:function e6l(){},
e6q:function e6q(d,e){this.a=d
this.b=e},
e6r:function e6r(d){this.a=d},
e6s:function e6s(d,e){this.a=d
this.b=e},
e6w:function e6w(d,e){this.a=d
this.b=e},
e5O:function e5O(d,e){this.a=d
this.b=e},
e5P:function e5P(d,e){this.a=d
this.b=e},
e6G:function e6G(d,e,f){this.a=d
this.b=e
this.c=f},
e6A:function e6A(d,e,f){this.a=d
this.b=e
this.c=f},
e6z:function e6z(d){this.a=d},
e5Q:function e5Q(d){this.a=d},
e5R:function e5R(d){this.a=d},
e5S:function e5S(){},
e5T:function e5T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5X:function e5X(d,e){this.a=d
this.b=e},
e5W:function e5W(d,e){this.a=d
this.b=e},
e5V:function e5V(d){this.a=d},
e5Y:function e5Y(d,e){this.a=d
this.b=e},
e5U:function e5U(d){this.a=d},
e6F:function e6F(d){this.a=d},
e69:function e69(){},
e6a:function e6a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e68:function e68(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e64:function e64(d,e,f){this.a=d
this.b=e
this.c=f},
e63:function e63(d,e,f){this.a=d
this.b=e
this.c=f},
e61:function e61(d,e){this.a=d
this.b=e},
e65:function e65(d){this.a=d},
e66:function e66(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e62:function e62(d,e){this.a=d
this.b=e},
e67:function e67(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6b:function e6b(d,e){this.a=d
this.b=e},
e6N:function e6N(){},
e6O:function e6O(d,e){this.a=d
this.b=e},
e6P:function e6P(d){this.a=d},
e6Q:function e6Q(d,e){this.a=d
this.b=e},
e6J:function e6J(d){this.a=d},
e6H:function e6H(d,e){this.a=d
this.b=e},
e6K:function e6K(d,e){this.a=d
this.b=e},
e6L:function e6L(d,e){this.a=d
this.b=e},
e6M:function e6M(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e6R:function e6R(d){this.a=d},
e6I:function e6I(d){this.a=d},
e5Z:function e5Z(d){this.a=d},
bif:function bif(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dkb:function dkb(d){this.a=d},
dka:function dka(d,e){this.a=d
this.b=e},
dkc:function dkc(d){this.a=d},
dk9:function dk9(d,e){this.a=d
this.b=e},
fOE:function fOE(d,e){this.a=d
this.b=e},
fOF:function fOF(d){this.a=d},
fOG:function fOG(){},
fOC:function fOC(d,e){this.a=d
this.b=e},
fOD:function fOD(){},
fOJ:function fOJ(d,e){this.a=d
this.b=e},
fOK:function fOK(d){this.a=d},
fOL:function fOL(){},
fOH:function fOH(d){this.a=d},
fOI:function fOI(d,e){this.a=d
this.b=e},
L9:function L9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GT:function GT(d,e){this.a=d
this.b=e},
bih:function bih(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dke:function dke(d){this.a=d},
dkv:function dkv(d){this.a=d},
dkn:function dkn(d){this.a=d},
dko:function dko(){},
dkm:function dkm(d){this.a=d},
dkf:function dkf(){},
dkl:function dkl(d){this.a=d},
dkk:function dkk(d,e){this.a=d
this.b=e},
dkg:function dkg(d){this.a=d},
dkp:function dkp(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dkq:function dkq(d){this.a=d},
dkr:function dkr(d){this.a=d},
dks:function dks(){},
dkt:function dkt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dku:function dku(){},
dkd:function dkd(d,e,f,g,h,i,j,k,l,m){var _=this
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
dkh:function dkh(d,e){this.a=d
this.b=e},
dki:function dki(d){this.a=d},
dkj:function dkj(){},
aLZ:function aLZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bii:function bii(d,e){this.b=d
this.a=e},
dkw:function dkw(){},
dkx:function dkx(d){this.a=d},
dky:function dky(d){this.a=d},
dkz:function dkz(){},
bm5:function bm5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhi:function bhi(d,e){this.b=d
this.a=e},
bAf:function bAf(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ftF:function ftF(d){this.a=d},
bps:function bps(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f3x:function f3x(d){this.a=d},
f3w:function f3w(d,e){this.a=d
this.b=e},
a0P:function a0P(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aEJ:function aEJ(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dAM:function dAM(d,e){this.a=d
this.b=e},
dAL:function dAL(d){this.a=d},
dAJ:function dAJ(d){this.a=d},
dAK:function dAK(d){this.a=d},
dAV:function dAV(d){this.a=d},
dAW:function dAW(d){this.a=d},
dAU:function dAU(d,e){this.a=d
this.b=e},
dAX:function dAX(){},
dB_:function dB_(d){this.a=d},
dAT:function dAT(d,e){this.a=d
this.b=e},
dAZ:function dAZ(){},
dB0:function dB0(d){this.a=d},
dAS:function dAS(d,e){this.a=d
this.b=e},
dB1:function dB1(d){this.a=d},
dAR:function dAR(d){this.a=d},
dB2:function dB2(d){this.a=d},
dAQ:function dAQ(d){this.a=d},
dB3:function dB3(d){this.a=d},
dAP:function dAP(d){this.a=d},
dB4:function dB4(d){this.a=d},
dAO:function dAO(d){this.a=d},
dB5:function dB5(d){this.a=d},
dAN:function dAN(d,e){this.a=d
this.b=e},
dAY:function dAY(d){this.a=d},
af5:function af5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bm4:function bm4(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
af4:function af4(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bm3:function bm3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dB6:function dB6(d){this.a=d},
dB7:function dB7(d,e){this.a=d
this.b=e},
aEK:function aEK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aL0:function aL0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
af6:function af6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dBg:function dBg(d){this.a=d},
GP:function GP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hyF(d){var w=d.cH,v=x.N
return w.iW(w,new C.chi(),v,v)},
i4u(d){var w=d.bF
if(w>=0)return w
return 5},
hyH(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hyF(d).h(0,v)
if(w==null||w.length===0)return null
return A.bh(w)},
hyG(d,e){var w=C.hyH(d,e)
if(w!=null&&w.ce(new A.V(Date.now(),0,!1)))return!0
return!1},
i4v(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.hyF(d),w,w)
u=C.hyH(d,e)
t=u!=null&&u.ce(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bL(A.dx(30,0,0,0,0,0).a).ab().ag())
d.cH=v},
b2D(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b2D=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lT(t,B.Kj),$async$b2D)
case 3:if(l){u=!0
w=1
break}u=A.lt(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Kj,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2D,v)},
chi:function chi(){},
i4s(){var w,v=$.oI(),u=J.e3(8,x.N)
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
return A.b(A.f9("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$JD)
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
a8Z(d){return C.i4t(d)},
i4t(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8Z=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$a8Z)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i1("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.z),!1,!1,B.cV,null),$async$a8Z)
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
return A.i($async$a8Z,v)},
chh(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$chh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.JD(),$async$chh)
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
return A.i($async$chh,v)},
OG(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$OG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.chh(d),$async$OG)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.JD(),$async$OG)
case 6:s=f
r=J.a2(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dI(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).ab().ag())
r.n(s,t,o)
w=9
return A.b(C.a8Z(s),$async$OG)
case 9:case 8:u=t
w=1
break
case 5:n=C.i4s()
w=10
return A.b(C.JD(),$async$OG)
case 10:s=f
J.aK(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.K))
w=11
return A.b(C.a8Z(s),$async$OG)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$OG,v)},
b2C(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b2C=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.JD(),$async$b2C)
case 3:t=f
for(s=J.dw(t),r=s.gdS(t),r=r.dk(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.X(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8Z(t),$async$b2C)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b2C,v)},
a9_(d,e,f){var w=0,v=A.j(x.H),u
var $async$a9_=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.as6(d,e),$async$a9_)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.OG(d),$async$a9_)
case 7:w=4
break
case 5:w=8
return A.b(C.b2C(d),$async$a9_)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a9_,v)},
as0(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$as0=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.as6(f,e),$async$as0)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.cc(),$async$as0)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.JD(),$async$as0)
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
return A.i($async$as0,v)},
b2B(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b2B=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.cc(),$async$b2B)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.JD(),$async$b2B)
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
return A.i($async$b2B,v)},
i4w(){var w,v=$.oI(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.hl(u)},
as3(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$as3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$as3)
case 3:if(!g){u=null
w=1
break}t=C.i4w()
w=4
return A.b(A.WR(),$async$as3)
case 4:s=g
r=B.e0.aK(B.V.au(d.f4(),null))
r=B.cQ.gcp().aK(r)
q=e?999:2
J.aK(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.K))
w=5
return A.b(A.a90(s),$async$as3)
case 5:p=e?999:2
u=new A.a1Z("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as3,v)},
as2(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$as2=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.WR(),$async$as2)
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
return A.b(C.b2B(J.k(l==null?"":l),j),$async$as2)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cc.cG(0,B.cG.aK(t))
s=C.hyI(r)}catch(f){q=A.ac(f)
$.am.$1("[family tree qr stash] decode: "+A.v(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.X(p,g)
else{m=x.N
l=x.z
l=A.dI(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().ag())
o.n(p,g,l)}w=5
return A.b(A.a90(p),$async$as2)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as2,v)},
hyI(d){var w,v,u,t,s=null
try{w=B.V.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.i4y(A.a1(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.am.$1("[family tree sync] parse: "+A.v(v))
return s}},
hhl(d){var w=0,v=A.j(x.m),u,t,s
var $async$hhl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.Y(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.as2(t[1])
w=1
break}u=null
w=1
break}u=C.hyI(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hhl,v)},
i4y(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.cX(v,x.f)
u=A.cE(u,new C.chk(),u.$ti.k("M.E"),x.k)
t=A.a3(u).k("X<M.E>")
s=A.B(new A.X(u,new C.chl(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bh(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.il(p),t=t.gae(t),o=x.B;t.C();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.cX(l,u)
n=A.cE(n,new C.chm(),n.$ti.k("M.E"),o)
k=A.a3(n).k("X<M.E>")
j=A.B(new A.X(n,new C.chn(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.as4(h,w,s,r,q)},
as6(d,e){var w=0,v=A.j(x.y),u,t
var $async$as6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(T.Ow(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.BC(d),$async$as6)
case 3:u=t.cL(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as6,v)},
cht(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cht=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.BC(d),$async$cht)
case 3:t=s.b8(f,new C.chu(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b_(t,new C.chv())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cht,v)},
WS(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$WS=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.as6(e,d),$async$WS)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.OG(e),$async$WS)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.BC(e),$async$WS)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dM(r,new C.chr(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a2(r)
if(t.gar(r)){u=null
w=1
break}t=t.dP(r,new C.chs(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.M_(e,o),$async$WS)
case 14:n=i
if(J.cL(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.as4(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WS,v)},
b2G(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b2G=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WS(d,e,f,g),$async$b2G)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hz(A.L5(q.f4(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2G,v)},
b2F(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b2F=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WS(d,e,f,g),$async$b2F)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.as3(r,f),$async$b2F)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aJ0(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2F,v)},
WT(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WT=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hhl(a0),$async$WT)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.Y(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.as0(g.a,d,e,f,s,r),$async$WT)
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
return A.b(C.bFN(e,j),$async$WT)
case 12:case 11:w=13
return A.b(C.ajA(e,j,s),$async$WT)
case 13:h=n.h(0,i)
w=h!=null&&J.cL(h)?14:15
break
case 14:w=16
return A.b(C.BM(e,i,h),$async$WT)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.btd(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WT,v)},
as4:function as4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
chp:function chp(){},
chq:function chq(){},
cho:function cho(){},
chk:function chk(){},
chl:function chl(){},
chm:function chm(){},
chn:function chn(){},
chu:function chu(){},
chv:function chv(){},
chr:function chr(d){this.a=d},
chs:function chs(d){this.a=d},
hqG(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hM(d,new C.as5(w,e,g,i,f,h,null),!0,null,x.H)},
dk8(d,e,f,g,h,i,j,k){return new C.bie(i,e,k,j,g,f,h,d,null)},
as5:function as5(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGi:function aGi(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e7_:function e7_(d){this.a=d},
e70:function e70(d,e,f){this.a=d
this.b=e
this.c=f},
e74:function e74(d,e){this.a=d
this.b=e},
e75:function e75(d){this.a=d},
e6X:function e6X(d){this.a=d},
e6Y:function e6Y(d,e){this.a=d
this.b=e},
e6Z:function e6Z(d,e){this.a=d
this.b=e},
e73:function e73(d){this.a=d},
e72:function e72(d,e){this.a=d
this.b=e},
e71:function e71(){},
e77:function e77(d){this.a=d},
e78:function e78(d,e){this.a=d
this.b=e},
e76:function e76(d,e){this.a=d
this.b=e},
dkA:function dkA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
big:function big(d,e,f){this.d=d
this.e=e
this.a=f},
ael:function ael(d,e,f){this.c=d
this.d=e
this.a=f},
bie:function bie(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bij:function bij(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a18:function a18(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGh:function aGh(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e6S:function e6S(d,e){this.a=d
this.b=e},
e6T:function e6T(d){this.a=d},
e6U:function e6U(d){this.a=d},
e6V:function e6V(d){this.a=d},
e6W:function e6W(d){this.a=d},
a19:function a19(d){this.a=d},
bnA:function bnA(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e79:function e79(d,e){this.a=d
this.b=e},
b19(d,e){return new C.b18(d,e,null)},
b18:function b18(d,e,f){this.c=d
this.d=e
this.a=f},
iuM(d){if(!(d!=null&&B.a.Y(d,"ngmy:thumb:")))return null
return B.a.aY(d,11)},
iCt(d){return A.bU(B.L,null,new C.h5E(new C.ur(A.Q(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hAL(d,e){return new C.av8(e,d,null)},
aTB(d,e,f,g,h,i,j){var w=C.iuM(i)
if(w!=null)return A.bx(e,new A.a6(j,f,new C.a81(w,!0,null),null),B.aq)
return O.aSW(e,B.bX,f,g,h,i,j)},
md:function md(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a81:function a81(d,e,f){this.c=d
this.d=e
this.a=f},
bne:function bne(d,e){var _=this
_.e=_.d=$
_.dw$=d
_.bd$=e
_.c=_.a=null},
dT1:function dT1(d){this.a=d},
dT2:function dT2(){},
dT3:function dT3(d,e){this.a=d
this.b=e},
bnd:function bnd(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h5E:function h5E(d){this.a=d},
h5D:function h5D(d,e){this.a=d
this.b=e},
h5C:function h5C(d,e){this.a=d
this.b=e},
h5B:function h5B(d,e){this.a=d
this.b=e},
av8:function av8(d,e,f){this.c=d
this.d=e
this.a=f},
cra:function cra(d,e){this.a=d
this.b=e},
aOr:function aOr(){},
iCe(d){var w=null
return A.ce(w,w,!0,w,new C.h51(),d,w,!0,!0,x.e2)},
iDs(d,e,f,g,h){var w=null
return A.ce(w,w,!0,w,new C.hcP(h,g,f,e),d,w,!0,!0,x.N)},
iCg(d,e){var w=null
return A.ce(w,w,!0,w,new C.h55(e),d,w,!0,!0,x.dY)},
iCf(d){var w=null
return A.ce(w,w,!0,w,new C.h54(),d,w,!0,!0,x.c5)},
aWz:function aWz(d,e){this.a=d
this.b=e},
aWy:function aWy(d){this.a=d},
aUA:function aUA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h51:function h51(){},
hcP:function hcP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h55:function h55(d){this.a=d},
h54:function h54(){},
a_M:function a_M(d,e){this.c=d
this.a=e},
aBr:function aBr(){var _=this
_.d=$
_.c=_.a=_.e=null},
dbE:function dbE(d){this.a=d},
dbF:function dbF(d){this.a=d},
dbD:function dbD(d,e){this.a=d
this.b=e},
dbG:function dbG(d){this.a=d},
dbH:function dbH(d){this.a=d},
a_L:function a_L(d){this.a=d},
aBq:function aBq(){this.d=$
this.c=this.a=null},
dbA:function dbA(d){this.a=d},
dbB:function dbB(d){this.a=d},
dbC:function dbC(d){this.a=d},
a_g:function a_g(d){this.a=d},
aA7:function aA7(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cJv:function cJv(){},
cJB:function cJB(d){this.a=d},
cJC:function cJC(d){this.a=d},
cJD:function cJD(d){this.a=d},
cJA:function cJA(){},
cJE:function cJE(d){this.a=d},
cJF:function cJF(d){this.a=d},
cJz:function cJz(){},
cJG:function cJG(d,e){this.a=d
this.b=e},
cJy:function cJy(d,e){this.a=d
this.b=e},
cJw:function cJw(d,e){this.a=d
this.b=e},
cJH:function cJH(d){this.a=d},
cJx:function cJx(){},
cJI:function cJI(d){this.a=d},
a2V:function a2V(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bA7:function bA7(){this.d=$
this.c=this.a=null},
fta:function fta(d,e){this.a=d
this.b=e},
ftb:function ftb(d){this.a=d},
ftc:function ftc(d,e){this.a=d
this.b=e},
adl:function adl(d,e){this.a=d
this.b=e},
GE:function GE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bA5:function bA5(d,e){var _=this
_.d=$
_.bv$=d
_.aa$=e
_.c=_.a=null},
ft8:function ft8(d,e){this.a=d
this.b=e},
aA0:function aA0(d,e){this.c=d
this.a=e},
bA6:function bA6(d,e){var _=this
_.d=$
_.bv$=d
_.aa$=e
_.c=_.a=null},
ft9:function ft9(d){this.a=d},
bA4:function bA4(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aQy:function aQy(){},
aQz:function aQz(){},
bHT(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.bc(u),s=B.o.D(B.i.S((u-t)*100),0,99),r=d<0?"-":"",q=A.o4(B.o.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.h3i(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b0(B.o.v(s),2,"0")
n.push(A.d3(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.ZF(A.d3(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aTd(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aTd=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.ih().l6(85,1280,B.eZ),$async$aTd)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fu(),$async$aTd)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hAK()
w=9
return A.b(C.cr9(q,r),$async$aTd)
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
return A.i($async$aTd,v)},
aTz(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aTz=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.Y(g,"ngmy:ws-thumb:")
if(i){u=C.cr6(g)
w=1
break}if(!B.a.Y(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cG.aK(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.HA(p,!0,null,o).de(0,B.fZ),$async$aTz)
case 9:n=a1
w=10
return A.b(n.la(),$async$aTz)
case 10:m=a1
w=11
return A.b(m.b.ho(B.ho),$async$aTz)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eU(B.dM.gaS(l))
k="data:image/png;base64,"+B.cQ.gcp().aK(i)
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
return A.i($async$aTz,v)},
h3i:function h3i(){},
ur:function ur(d){this.a=d},
av7:function av7(d,e,f){this.c=d
this.d=e
this.a=f},
aHR:function aHR(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
f0H:function f0H(d,e){this.a=d
this.b=e},
f0y:function f0y(d){this.a=d},
f0z:function f0z(d){this.a=d},
f0F:function f0F(d,e){this.a=d
this.b=e},
f0E:function f0E(d,e){this.a=d
this.b=e},
f0B:function f0B(d,e){this.a=d
this.b=e},
f0A:function f0A(d,e){this.a=d
this.b=e},
f0C:function f0C(d){this.a=d},
f0D:function f0D(d,e){this.a=d
this.b=e},
f0G:function f0G(d,e){this.a=d
this.b=e},
f0t:function f0t(d,e){this.a=d
this.b=e},
f0x:function f0x(d){this.a=d},
f0w:function f0w(d,e){this.a=d
this.b=e},
f0v:function f0v(d){this.a=d},
f0I:function f0I(d,e){this.a=d
this.b=e},
f0J:function f0J(d,e){this.a=d
this.b=e},
f0u:function f0u(d,e){this.a=d
this.b=e},
hOx(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.X(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).ab().ag(),"project",v],x.N,x.z)},
h3j(d,e,f){var w=0,v=A.j(x.N),u
var $async$h3j=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.V.au(C.hOx(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h3j,v)},
bHV(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bHV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.h3j(!0,d,e),$async$bHV)
case 4:w=3
return A.b(r.av5(g,d,e.a),$async$bHV)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.e0.aK(B.V.au(C.hOx(d,e,null),null))
u="NGMY_WS:"+B.kW.gcp().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHV,v)},
hFl(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hqf(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d9(s,"NGMYWSSYNC2|"))return!0
if(J.d9(s,"NGMY_WS:"))return!0
if(J.eF(s,t))return!0
if(J.d9(s,"{"))try{w=B.V.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iAd(d){var w,v,u,t=C.hFl(d)
if(t==null)return null
if(C.hqf(t))return t
w=B.a.cc(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aY(t,w))
if(C.hqf(v))return v}u=B.a.cc(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aY(t,u))
if(C.hqf(v))return v}return null},
hqe(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d9(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d9(q,"NGMY_WS:")){v=B.cc.cG(0,B.cG.aK(J.ne(q,8)))
w=t.a(B.V.aP(0,v,r))}else w=t.a(B.V.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hk0(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bHU(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bHU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.Y(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.av4(t[1]),$async$bHU)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hqe(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hqe(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHU,v)},
hqd(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lY(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bHn(){var w=0,v=A.j(x.o),u,t
var $async$bHn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HJ(),$async$bHn)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hqe(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHn,v)},
hPK(d,e,f,g){return A.bU(B.L,null,new C.hcC(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
hcC:function hcC(d,e,f){this.a=d
this.b=e
this.c=f},
afr:function afr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f0L:function f0L(d,e){this.a=d
this.b=e},
f0M:function f0M(d,e){this.a=d
this.b=e},
f0N:function f0N(d,e){this.a=d
this.b=e},
f0O:function f0O(d,e){this.a=d
this.b=e},
f0K:function f0K(d){this.a=d},
av1:function av1(d,e,f){this.c=d
this.d=e
this.a=f},
boY:function boY(){var _=this
_.c=_.a=_.e=_.d=null},
f0o:function f0o(d,e){this.a=d
this.b=e},
f0p:function f0p(d){this.a=d},
f0q:function f0q(d){this.a=d},
av6:function av6(d){this.a=d},
aHQ:function aHQ(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
f0s:function f0s(d){this.a=d},
f0r:function f0r(d){this.a=d},
i7T(d,e,f,g,h){return new C.Pn(h,g,d,e,f,null)},
aMM:function aMM(d,e){this.a=d
this.b=e},
Pn:function Pn(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHS:function aHS(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
f1a:function f1a(){},
f16:function f16(d,e){this.a=d
this.b=e},
f17:function f17(d){this.a=d},
f0S:function f0S(d){this.a=d},
f0Q:function f0Q(d){this.a=d},
f0R:function f0R(d){this.a=d},
f10:function f10(d,e){this.a=d
this.b=e},
f0Y:function f0Y(d,e){this.a=d
this.b=e},
f0Z:function f0Z(d,e){this.a=d
this.b=e},
f1_:function f1_(d,e,f){this.a=d
this.b=e
this.c=f},
f0W:function f0W(d,e,f){this.a=d
this.b=e
this.c=f},
f0U:function f0U(d){this.a=d},
f0V:function f0V(d){this.a=d},
f0X:function f0X(d){this.a=d},
f1d:function f1d(d){this.a=d},
f1c:function f1c(d){this.a=d},
f1e:function f1e(d){this.a=d},
f1b:function f1b(d){this.a=d},
f0P:function f0P(d){this.a=d},
f0T:function f0T(d,e){this.a=d
this.b=e},
f19:function f19(d,e){this.a=d
this.b=e},
f18:function f18(d,e){this.a=d
this.b=e},
f13:function f13(d){this.a=d},
f14:function f14(d){this.a=d},
f15:function f15(d,e){this.a=d
this.b=e},
f12:function f12(d,e){this.a=d
this.b=e},
f11:function f11(d,e,f){this.a=d
this.b=e
this.c=f},
bBT:function bBT(){},
Bp(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ai0(d,e,f){return C.io9(d,e,f)},
io9(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ai0=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aE("String",e,f),$async$ai0)
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
return A.i($async$ai0,v)},
ai_(d,e){return C.io8(d,e)},
io8(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ai_=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.X(0,e),$async$ai_)
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
return A.i($async$ai_,v)},
imZ(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.U7(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bEG(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bEG=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b5V(q),$async$bEG)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aTz(q,!1),$async$bEG)
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
return A.i($async$bEG,v)},
hW4(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
hk0(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.cX(s,x.f)
w=A.cE(w,new C.cIO(),w.$ti.k("M.E"),x.Q)
v=A.a3(w).k("X<M.E>")
r=A.B(new A.X(w,new C.cIP(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bh(J.k(t==null?"":t))
return new C.lY(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
isc(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.x8
case"female":case"f":return D.oR
default:return D.zG}},
hKQ(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
huD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.isc(v==null?j:J.k(v))
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
return new C.ig(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ise(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.PJ
case"viewer":return D.l7
default:return D.vf}},
isf(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
HB(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aSd(d,e){return B.a.i(e.toLowerCase())===C.HB(d,e)&&d.y!==D.l7},
uH(d,e){var w,v=d.y
if(v===D.l7)return!1
w=B.a.i(e.toLowerCase())
if(w===C.HB(d,e))return!0
if(v===D.PJ)return!0
v=d.e
return new A.O(v,A.hql(),A.U(v).k("O<1,m>")).q(0,w)},
irz(d){return J.dM(d,new C.fNw()).gJ(0)},
hdn(d){var w=0,v=A.j(x.y),u,t
var $async$hdn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.BC(d),$async$hdn)
case 3:u=t.rB(f,new C.hdo(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hdn,v)},
bFN(d,e){var w=0,v=A.j(x.H),u,t
var $async$bFN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BC(d),$async$bFN)
case 3:t=g
if(J.rB(t,new C.fL0(e))){w=1
break}if(C.irz(t)>=2)throw A.Y(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bFN,v)},
an8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.cX(h,x.f)
w=A.cE(w,new C.bUR(),w.$ti.k("M.E"),x.P)
v=A.a3(w).k("X<M.E>")
g=A.B(new A.X(w,new C.bUS(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bUT(),x.N)
t=A.B(w,w.$ti.k("aj.E"))}else t=A.a([],x.s)
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
n=C.ise(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aR(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.c1)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.lb(w,v,s,!r,t,g,q,p,o,n,m)},
hL4(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aw(v,0,8)},
DU(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.T3(d),$async$DU)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aB(),$async$DU)
case 4:t=f
w=5
return A.b(t.a7Z(0),$async$DU)
case 5:w=6
return A.b(C.fB5(t,l),$async$DU)
case 6:s=f
if(J.cL(s)){u=s
w=1
break}r=B.a.gZ(B.a.i(l.toLowerCase()))
q=t.a
p=J.a2(q)
o=A.aW(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hFY(o)
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
case 12:n=C.hFY(m)
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
fB5(d,e){return C.ikj(d,e)},
ikj(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fB5=A.e(function(b0,b1){if(b0===1){s.push(b1)
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
f=J.aR(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gP(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aW(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bp(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.V.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hk0(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aW(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bp(a9)+"_"+n))
i=C.imZ(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.Y(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b5V(h),$async$fB5)
case 17:g=b1
if(g!=null){i=i.U7(g)
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
case 8:J.Tc(q,new C.fB6())
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
return A.i($async$fB5,v)},
bGg(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bGg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.T3(d),$async$bGg)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DU(r),$async$bGg)
case 4:t=p.aR(g)
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
return A.i($async$bGg,v)},
hFY(d){var w,v,u,t
try{w=B.V.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.cX(w,x.f)
v=A.cE(v,new C.fwD(),v.$ti.k("M.E"),x.fA)
u=A.a3(v).k("X<M.E>")
v=A.B(new A.X(v,new C.fwE(),u),u.k("M.E"))
B.d.b_(v,new C.fwF())
return v}catch(t){v=A.a([],x.D)
return v}},
ps(d,e){return C.iC3(d,e)},
iC3(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$ps=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.T3(b2),$async$ps)
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
o=J.b8(x.j.a(B.V.aP(0,p,null)),new C.h4Q(),a2).fC(0)
a2=J.b8(b3,new C.h4R(),a2).c0(0,new C.h4S())
n=A.d1(a2,a2.$ti.k("M.E"))
a2=o,a2=A.e4(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eF(n,m)?17:18
break
case 17:a5=C.Bp(a8)
l=A.aW(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.aak(l),$async$ps)
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
return A.b(C.aak(a5==null?null:J.k(a5)),$async$ps)
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
return A.b(C.ai_(r,"ngmy_worksheet_item_v3_"+C.Bp(a8)+"_"+m),$async$ps)
case 29:w=30
return A.b(C.ai_(r,"ngmy_worksheet_thumb_v3_"+C.Bp(a8)+"_"+m),$async$ps)
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
return A.b(C.bEG(h),$async$ps)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ai0(r,"ngmy_worksheet_thumb_v3_"+C.Bp(a8)+"_"+a4,f),$async$ps)
case 40:g=i.U7(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ai_(r,"ngmy_worksheet_thumb_v3_"+C.Bp(a8)+"_"+a4),$async$ps)
case 41:g=i.U7(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ai_(r,"ngmy_worksheet_thumb_v3_"+C.Bp(a8)+"_"+a4),$async$ps)
case 42:case 34:a4=i.a
w=43
return A.b(C.ai0(r,"ngmy_worksheet_item_v3_"+C.Bp(a8)+"_"+a4,B.V.au(g.ak(),null)),$async$ps)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.c6(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ai0(r,"ngmy_worksheets_index_v3_"+C.Bp(a8),B.V.au(q,null)),$async$ps)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eS(b3,new C.h4T(q))
a4=a3.$ti.k("cM<1,a9<m,@>>")
a7=A.B(new A.cM(a3,new C.h4U(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ai0(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gZ(B.a.i(a8.toLowerCase()))),B.V.au(a0,null)),$async$ps)
case 45:w=46
return A.b(J.hV9(r),$async$ps)
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
Ms(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Ms=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DU(d),$async$Ms)
case 3:t=g
s=J.cH(t)
r=s.bl(t,new C.hdm(e))
if(r===-1)s.cd(t,0,e)
else s.n(t,r,e)
u=C.ps(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ms,v)},
bG2(d,e){var w=0,v=A.j(x.H),u
var $async$bG2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DU(d),$async$bG2)
case 2:u=g
J.nd(u,new C.fO_(e))
w=3
return A.b(C.ps(d,u),$async$bG2)
case 3:return A.h(null,v)}})
return A.i($async$bG2,v)},
HD(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$HD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$HD)
case 3:l=f
k=A.a([],x._)
j=B.a.gZ(B.a.i(d.toLowerCase()))
i=A.aW(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.V.aP(0,i,null)
if(x.j.b(t)){j=J.cX(t,x.f)
j=A.cE(j,new C.fRe(),j.$ti.k("M.E"),x.k)
s=A.a3(j).k("X<M.E>")
r=A.B(new A.X(j,new C.fRf(),s),s.k("M.E"))
B.d.b_(r,new C.fRg())
k=r}}catch(h){}w=4
return A.b(C.fxp(d),$async$HD)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.ikG(k,p,d)
j=A.U(o)
s=j.k("O<1,a9<m,@>>")
s=A.B(new A.O(o,new C.fRh(),s),s.k("aj.E"))
n=B.V.au(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Sa(d,o),$async$HD)
case 7:case 6:j=j.k("X<1>")
m=A.B(new A.X(o,new C.fRi(d),j),j.k("M.E"))
if(m.length!==0)C.aS_(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$HD,v)},
h4C(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h4C=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sa(d,e),$async$h4C)
case 3:t=J.dM(e,new C.h4D(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aS_(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h4C,v)},
a4D(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a4D=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aB(),$async$a4D)
case 2:n=g
m=B.a.gZ(B.a.i(d.toLowerCase()))
l=A.aW(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.V.aP(0,l,null)
if(x.j.b(u)){m=J.cX(u,x.f)
m=A.cE(m,new C.hdh(),m.$ti.k("M.E"),x.k)
t=A.a3(m).k("X<M.E>")
s=A.B(new A.X(m,new C.hdi(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oN(o,new C.hdj(e))
if(B.a.i(e.x).length===0&&C.uH(e,d)){m=B.a.i(d.toLowerCase())
p=e.aHh(e.y===D.l7?D.l7:D.vf,m)}else p=e
if(q===-1)J.nc(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.Sa(d,o),$async$a4D)
case 3:w=C.uH(p,d)?4:5
break
case 4:w=6
return A.b(C.aRZ(C.HB(p,d),p),$async$a4D)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a4D,v)},
aSb(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aSb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.HD(d),$async$aSb)
case 2:u=g
t=J.cH(u)
s=A.nK(t.eS(u,new C.fNH(e)))
t.bq(u,new C.fNI(e))
w=3
return A.b(C.Sa(d,u),$async$aSb)
case 3:w=s!=null&&C.aSd(s,d)?4:5
break
case 4:w=6
return A.b(C.fwH(e),$async$aSb)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aSb,v)},
ajS(d){var w=d.f,v=A.U(w).k("X<1>")
w=A.B(new A.X(w,new C.hds(),v),v.k("M.E"))
return w},
hnE(d,e){var w,v=d.f,u=A.nK(new A.X(v,new C.fNb(e),A.U(v).k("X<1>")))
v=C.ajS(d)
w=A.U(v).k("X<1>")
v=A.B(new A.X(v,new C.fNc(e,u),w),w.k("M.E"))
B.d.b_(v,new C.fNd())
return v},
isi(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hPO(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bl(C.hnE(d,u),new C.hcQ(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
itP(d,e){var w
if(e==null||e.length===0)return 1
w=C.hnE(d,e)
if(w.length===0)return 1
return new A.O(w,new C.fS5(),A.U(w).k("O<1,F>")).eH(0,B.yA)+1},
iBX(d){var w,v=C.ajS(d)
if(v.length===0)return null
w=new A.X(v,new C.h4w(),A.U(v).k("X<1>"))
if(!w.gar(0))return w.gH(0)
return B.d.gH(v)},
isd(d){return A.J(["id",d.a,"name",d.b,"gender",C.hKQ(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
itK(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
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
d=q.aHc(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cSH(a1,w,a3.d,a2.y,s,a0,v)},
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
break}p=J.cX(t,x.f)
p=A.cE(p,new C.fRb(),p.$ti.k("M.E"),x.k)
s=A.a3(p).k("X<M.E>")
p=A.B(new A.X(p,new C.fRc(),s),s.k("M.E"))
B.d.b_(p,new C.fRd())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$BC,v)},
ajA(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ajA=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.vf:D.l7
a7=C.HB(b2,b3)
w=2
return A.b(C.BC(b1),$async$ajA)
case 2:a8=b5
a9=J.cH(a8)
b0=a9.bl(a8,new C.h4r(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bFN(b1,b2),$async$ajA)
case 5:case 4:if(b0===-1){u=b2.aHh(a6,a7)
a9.cd(a8,0,u)}else{t=a9.h(a8,b0)
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
s.n(0,m,l.aHc(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("ba<2>")
s=A.B(new A.ba(s,k),k.k("M.E"))
k=a5?D.vf:D.l7
u=t.cSJ(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Sa(b1,a8),$async$ajA)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aRZ(B.a.i(b3.toLowerCase()),u),$async$ajA)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ajA,v)},
hGr(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).ab().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("O<1,a9<m,@>>"),k=A.B(new A.O(m,C.hOT(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.ab().ag(),"updatedAt",o],r,x.K),"createdAt",s.ab().ag(),"updatedAt",o],r,x.z)},
hGs(d,e){var w=new A.V(Date.now(),0,!1).ab().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("O<1,a9<m,@>>")
u=A.B(new A.O(u,C.hOT(),t),t.k("aj.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.ab().ag(),"updatedAt",w],x.N,x.z)},
iid(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a2(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.an8(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.O(j,A.hql(),A.U(j).k("O<1,m>")).c0(0,new C.fxc())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.vf
else s=B.d.q(t,u)?D.PJ:D.l7
return w.aHh(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.an8(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.cX(q,h)
h=A.cE(h,new C.fxd(),h.$ti.k("M.E"),x.P)
p=A.a3(h).k("X<M.E>")
o=A.B(new A.X(h,new C.fxe(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fxf(),x.N).c0(0,new C.fxg())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.vf
else s=B.d.q(t,u)?D.PJ:D.l7
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
return new C.lb(h,r,p,!m,t,o,l,j,v,s,B.ck)},
fxp(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fxp=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fxt()
h=x.N
g=x.z
w=7
return A.b(A.hh(A.a([A.m0("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.m0("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.m0("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fxp)
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
h=A.cE(new A.ba(l,h),new C.fxq(a0),h.k("M.E"),x.k)
l=A.a3(h).k("X<M.E>")
l=A.B(new A.X(h,new C.fxr(),l),l.k("M.E"))
B.d.b_(l,new C.fxs())
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
return A.i($async$fxp,v)},
ikG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a2(e)
if(j.gar(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dP(e,new C.fBR(),v).c0(0,new C.fBS())
t=A.d1(u,u.$ti.k("M.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.HB(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.l7){m=q.e
m=!new A.O(m,A.hql(),A.U(m).k("O<1,m>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.itK(l,v)
o=C.HB(k,w)
p=v.d
s.n(0,u,o===w?k.bgO(p,D.vf):k.bgO(p,v.y))}j=s.$ti.k("ba<2>")
j=A.B(new A.ba(s,j),j.k("M.E"))
B.d.b_(j,new C.fBT())
return j},
Sa(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Sa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aB(),$async$Sa)
case 2:u=g
t=B.a.gZ(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fET(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.aE("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.V.au(s,null)),$async$Sa)
case 3:return A.h(null,v)}})
return A.i($async$Sa,v)},
aRZ(d,e){return C.iq0(d,e)},
iq0(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aRZ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mu("family_trees",A.a([C.hGr(e,d)],p),null,B.cV),$async$aRZ)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mu("family_trees",A.a([C.hGs(e,d)],p),null,B.cV),$async$aRZ)
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
return A.i($async$aRZ,v)},
aS_(d,e){return C.iq1(d,e)},
iq1(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aS_=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("O<1,a9<m,@>>")
m=n.k("aj.E")
l=A.B(new A.O(e,new C.fKf(d),n),m)
r=l
w=7
return A.b(A.mu("family_trees",r,null,B.cV),$async$aS_)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.O(e,new C.fKg(d),n),m)
p=k
w=8
return A.b(A.mu("family_trees",p,null,B.cV),$async$aS_)
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
return A.i($async$aS_,v)},
fwH(d){return C.ihq(d)},
ihq(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fwH=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.SB("family_trees",A.J(["id",d],x.N,x.z),null,B.cV),$async$fwH)
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
return A.i($async$fwH,v)},
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
cIR:function cIR(){},
cIQ:function cIQ(){},
cIO:function cIO(){},
cIP:function cIP(){},
IH:function IH(d,e){this.a=d
this.b=e},
ig:function ig(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
an7:function an7(d,e){this.a=d
this.b=e},
fNw:function fNw(){},
hdo:function hdo(d){this.a=d},
fL0:function fL0(d){this.a=d},
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
bUV:function bUV(){},
bUU:function bUU(){},
bUR:function bUR(){},
bUS:function bUS(){},
bUT:function bUT(){},
fB6:function fB6(){},
fwD:function fwD(){},
fwE:function fwE(){},
fwF:function fwF(){},
h4Q:function h4Q(){},
h4R:function h4R(){},
h4S:function h4S(){},
h4T:function h4T(d){this.a=d},
h4U:function h4U(){},
hdm:function hdm(d){this.a=d},
fO_:function fO_(d){this.a=d},
fRe:function fRe(){},
fRf:function fRf(){},
fRg:function fRg(){},
fRh:function fRh(){},
fRi:function fRi(d){this.a=d},
h4D:function h4D(d){this.a=d},
hdh:function hdh(){},
hdi:function hdi(){},
hdj:function hdj(d){this.a=d},
fNH:function fNH(d){this.a=d},
fNI:function fNI(d){this.a=d},
hds:function hds(){},
fNb:function fNb(d){this.a=d},
fNc:function fNc(d,e){this.a=d
this.b=e},
fNd:function fNd(){},
hcQ:function hcQ(d){this.a=d},
fS5:function fS5(){},
h4w:function h4w(){},
fRb:function fRb(){},
fRc:function fRc(){},
fRd:function fRd(){},
h4r:function h4r(d){this.a=d},
fxc:function fxc(){},
fxd:function fxd(){},
fxe:function fxe(){},
fxf:function fxf(){},
fxg:function fxg(){},
fxt:function fxt(){},
fxu:function fxu(d){this.a=d},
fxq:function fxq(d){this.a=d},
fxr:function fxr(){},
fxs:function fxs(){},
fBR:function fBR(){},
fBS:function fBS(){},
fBT:function fBT(){},
fET:function fET(){},
fKf:function fKf(d){this.a=d},
fKg:function fKg(d){this.a=d},
cIS:function cIS(d,e){this.a=d
this.b=e},
cIT:function cIT(d,e){this.a=d
this.b=e},
aJX:function aJX(d,e,f){this.a=d
this.b=e
this.c=f},
bce:function bce(){this.b=this.a=0},
bcd:function bcd(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bA8:function bA8(){},
xA(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gci()+"/"+w.gcA()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.b0(B.o.v(w.gny()),2,"0")+":"+B.a.b0(B.o.v(w.gH8()),2,"0")},
ir5(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
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
j=A.by(new A.a4(j,u,j+t,s),new A.aP(r,r))
i=new A.as(B.T,B.Q,B.W,B.X,B.U)
i.r=B.dk.gp(0)
a5.aq(j,i)
k-=q
k=A.by(new A.a4(k,p,k+o,n),new A.aP(m,m))
i=new A.as(B.T,B.Q,B.W,B.X,B.U)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.by(new A.a4(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.by(new A.a4(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a7(0,new A.r(s,a7*0.17)),Q.ahZ(F.tk,t))
s=g.a7(0,new A.r(s,a7*0.18))
q=A.L()
q.r=F.tk.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a7(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,Q.ahZ(F.tk,t))
w=A.L()
w.r=F.tk.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a7(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=F.mi.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=F.tk.gp(0)
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
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bY(a0.a7(0,new A.r(0,a1*0.5)).aI(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,Q.ahZ(B.bq,1.8))
a4.restore()},
i7Q(){var w,v=$.oI(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"WS"+B.d.hl(u)},
av2(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$av2=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$av2)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f9("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$av2)
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
return A.i($async$av2,v)},
av3(d){return C.i7R(d)},
i7R(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$av3=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$av3)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i1("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.z),!1,!1,B.cV,null),$async$av3)
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
return A.i($async$av3,v)},
av5(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$av5=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.cc(),$async$av5)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i7Q()
w=4
return A.b(C.av2(),$async$av5)
case 4:r=h
q=B.a.i(e)
p=B.e0.aK(t)
J.aK(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cQ.gcp().aK(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.K))
w=5
return A.b(C.av3(r),$async$av5)
case 5:u=new A.a1Z("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$av5,v)},
av4(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$av4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.cc(),$async$av4)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.av2(),$async$av4)
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
try{s=B.cc.cG(0,B.cG.aK(t))}catch(h){r=A.ac(h)
$.am.$1("[worksheet qr stash] decode: "+A.v(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.X(q,i)
else{n=x.N
m=x.z
m=A.dI(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().ag())
p.n(q,i,m)}w=5
return A.b(C.av3(q),$async$av4)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$av4,v)},
hAK(){var w=new A.V(Date.now(),0,!1).ab()
return"wst_"+(1000*w.a+w.b)+"_"+B.cT.av(999999)},
i7S(d){var w,v,u,t,s,r,q
try{w=A.BA(d)
if(w==null)return d
v=w
if(J.My(v)>960||J.Mx(v)>960){s=v
r=J.My(v)>=J.Mx(v)?960:null
v=A.Sv(s,J.Mx(v)>J.My(v)?960:null,B.IQ,r)}s=v
u=A.J2(82).zF(s,B.rm)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ca(u))
return s}catch(q){t=A.ac(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
cr9(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cr9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i7S(e)
$.cr5.n(0,s,t)
u=C.bHX(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cr9,v)},
b5V(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b5V=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d9(l,"data:image")){u=null
w=1
break}t=4
r=J.eF(l,",")?B.d.gal(J.m3(l,",")):l
q=B.cG.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hAK()
w=7
return A.b(C.cr9(p,q),$async$b5V)
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
return A.i($async$b5V,v)},
cr6(d){var w=0,v=A.j(x.T),u,t,s
var $async$cr6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.Y(s,"data:image")){u=s
w=1
break}w=3
return A.b(O.cr8(s),$async$cr6)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cQ.gcp().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cr6,v)},
aak(d){var w=0,v=A.j(x.H),u,t
var $async$aak=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=O.hOy(d)
if(t==null){w=1
break}$.cr5.X(0,t)
w=3
return A.b(C.bHW(t),$async$aak)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aak,v)},
bHX(d,e){return C.iAg(d,e)},
iAg(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bHX=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aQO
w=7
return A.b(n==null?$.aQO=O.hms():n,$async$bHX)
case 7:r=g
q=new Uint8Array(A.ca(e))
p=J.my(r,"thumbs","readwrite")
B.iQ.mj(J.mx(p,"thumbs"),q,l)
w=8
return A.b(J.oM(p),$async$bHX)
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
return A.i($async$bHX,v)},
bHW(d){return C.iAe(d)},
iAe(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bHW=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aQO
w=7
return A.b(o==null?$.aQO=O.hms():o,$async$bHW)
case 7:r=f
q=J.my(r,"thumbs","readwrite")
B.iQ.GI(J.mx(q,"thumbs"),m)
w=8
return A.b(J.oM(q),$async$bHW)
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
return A.i($async$bHW,v)}},D
J=c[1]
A=c[0]
B=c[2]
Ai=c[112]
Aj=c[100]
Ak=c[298]
U=c[353]
V=c[285]
A3=c[134]
Al=c[352]
Am=c[81]
O=c[77]
R=c[357]
A4=c[240]
W=c[76]
A5=c[80]
M=c[83]
An=c[329]
L=c[301]
A6=c[143]
X=c[185]
H=c[45]
E=c[317]
A7=c[182]
Ao=c[332]
Y=c[163]
Ap=c[199]
Aq=c[180]
Ar=c[282]
A8=c[138]
As=c[125]
At=c[137]
Au=c[86]
Av=c[328]
Aw=c[57]
S=c[327]
A9=c[283]
Ax=c[351]
Ay=c[271]
Az=c[287]
N=c[116]
Aa=c[111]
AA=c[247]
Ab=c[195]
Ac=c[251]
Ad=c[281]
AB=c[354]
AC=c[139]
Ae=c[356]
AD=c[101]
G=c[355]
AE=c[198]
AF=c[184]
Af=c[305]
AG=c[359]
AH=c[44]
Z=c[183]
AI=c[234]
AJ=c[191]
A_=c[358]
AK=c[224]
AL=c[136]
P=c[274]
AM=c[289]
AN=c[291]
Ag=c[233]
AO=c[129]
Ah=c[313]
A0=c[344]
Q=c[56]
F=c[154]
AP=c[43]
I=c[162]
A1=c[128]
K=c[204]
AQ=c[144]
A2=c[98]
T=c[42]
AR=c[140]
C=a.updateHolder(c[7],C)
D=c[350]
C.aqI.prototype={}
C.b1a.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bl9(),f=h.x!=null&&h.A_(i).length===0
if(h.x!=null)w=f?B.b5:B.bE
else w=h.gV7()?B.bE:B.ee
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.K(D.bsu,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.fou,B.f,i,i,new A.o(B.b5.j(0.12),i,i,A.n(999),i,i,B.m),i,i,i,i,B.hm,i,i,i),B.S,D.fUN,B.au,A.c(C.xA(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fQn,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,D.ba4,i,i,i,i,B.Pi,i,i,i)
q=A.n(16)
p=A.K(B.bn,B.r,1)
o=A.K(B.b5.j(0.28),B.r,1)
n=A.hoN(h.d)
o=A.p(B.z,C.b19(A.fUA(h.e,n),30),B.f,i,i,new A.o(B.ml,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fLg,B.K,i,i)
m=A.n(14)
l=A.K(B.bn,B.r,1)
q=A.p(i,A.x(A.a([o,B.O,n,B.bw,D.fV5,B.af,A.p(i,A.x(A.a([D.haw,B.bw,A.c(A.BF(h.c),i,i,i,i,i,i,D.fFM,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.m),i,i,i,i,B.f8,i,i,1/0)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,p,q,i,i,B.m),i,i,i,i,AN.a1Q,i,i,i)
p=A.n(16)
m=A.K(B.bn,B.r,1)
l=j.aUq("Original due",C.xA(h.r,!1))
n=j.aUq("Current due",C.xA(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.S,A.p(i,A.x(A.a([l,B.O,n,B.S,A.p(i,A.c(h.gaOm(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.m),i,i,i,i,B.wY,i,i,1/0),B.S,j.cn2(),B.O,j.c9o(g,f)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.K(B.bn,B.r,1)
B.d.u(p,A.a([B.S,A.p(i,A.x(A.a([D.fW5,B.au,A.c(q,i,i,i,i,i,i,D.fKr,i,i,i)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,n,o,i,i,B.m),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaIX()){q=A.n(14)
o=A.K(B.cC,B.r,1.6)
B.d.u(p,A.a([B.S,A.p(i,A.x(A.a([D.hbR,B.O,A.bx(A.n(12),A.eg(new A.a6(1/0,88,A.b4(i,i,i,new A.XI(h.ax,B.a_,D.fth,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.m),i,i,i,i,B.D0,i,i,i)],s))}p.push(B.aA)
p.push(D.h3B)
return A.p(i,A.x(A.a([r,new A.D(B.a1S,A.x(p,B.am,i,B.e,B.h,0,B.p),i)],s),B.am,i,B.e,B.M,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aUq(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.ad8,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fGQ,w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
cn2(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.abh(B.ee,u,"Not paid yet")
w=t.A_(null).length
v=w===0?B.b5:B.bE
return this.abh(v,u,C.xA(t.x,!0))},
c9o(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.abh(B.b5,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.abh(B.b5,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.ad8,u,u,u)
v=A.U(d).k("O<1,hg>")
v=A.B(new A.O(d,new C.cae(),v),v.k("aj.E"))
return A.x(A.a([w,B.ak,A.bZ(B.bI,v,B.br,u,6,6)],x.p),B.B,u,B.e,B.h,0,B.p)},
abh(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.ad8,w,w,w),1),new A.d6(1,B.cg,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e4,w,w),w)],x.p),B.B,w,B.e,B.h,0,w,w)}}
C.bew.prototype={
a4(d,e){new A.XI(this.b,B.a_,e,!0,3.5,null).a4(d,e)},
aC(d){return d.b!==this.b}}
C.aqV.prototype={
R(){return new C.aFK(A.a([],x.bp))},
ge9(){return this.c}}
C.aFK.prototype={
a_(){this.a3()
this.JH()},
JH(){var w=0,v=A.j(x.H),u,t=this,s
var $async$JH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3R(t.a.c),$async$JH)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dTV(t,s))
case 1:return A.h(u,v)}})
return A.i($async$JH,v)},
aWo(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.l(v,v,u?B.bu:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bu:B.bk).j(0.22)
w=A.n(10)
return A.bC(v,new A.b6(4,r,new A.ax(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b6(4,w,new A.ax((this.a.d.a?B.bu:B.bk).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.n(10),D.b7J),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aWn(d){return this.aWo(d,null)},
QE(d){return this.cqL(d)},
cqL(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QE=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.IP:B.eZ
w=7
return A.b(new A.ih().D7(72,900,900,n),$async$QE)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fu(),$async$QE)
case 8:p=f
n=B.cQ.gcp().aK(p)
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
if(n!=null)n.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c("Could not pick photo: "+A.v(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$QE,v)},
b4I(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.n(10),n=A.K((q?B.bu:B.bk).j(0.18),B.r,1)
if(d)q=B.cW
else q=s.a.d.a?B.bu:B.bk
q=A.W(e,q,r,r,r,18)
w=A.c(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,12.5,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cW
else u=s.a.d.a?B.bu:B.bk
t=x.p
u=A.E(A.x(A.a([w,A.c(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.B,r,B.e,B.h,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.cW,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cl)
q=A.a([q,B.aa,u,A.bM(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.W(B.cB,s.a.d.a?B.bu:B.bk,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cl))
return A.p(r,A.A(q,B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.m),r,r,r,B.jB,D.bFH,r,r,r)},
E0(d){return this.bFp(d)},
bFo(){return this.E0(null)},
bFp(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E0=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
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
a4=a4===q?B.o.v(B.i.M(p)):B.i.a6(p,2)}o=new A.au(new A.bd(a4,B.b6,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.bd(a4,B.b6,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bL(6048e8)
m=A.c0(a4.gck(),a4.gci(),a4.gcA(),0,0,0,0,0)}else{a4=a5.f
m=A.c0(a4.gck(),a4.gci(),a4.gcA(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bt(a4,!0,x.cT)
i=a3?null:A.hoN(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xK?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i2(B.v.j(0.55),!0,"Dismiss",a4,new C.dTE(),new C.dTF(a2,t,a5,r,new C.dTG(a2,t),o,n,j),B.eL,!0,x.y),$async$E0)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cw(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.V$=s
r.W$=0
o.V$=s
o.W$=0
n.V$=s
n.W$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.K(x.q).f.T(D.fzR)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.T(D.fyv)
w=1
break}a1=A.fUA(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xK?"male":"female"
w=7
return A.b(A.ajR(a3,A.hxi(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$E0)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xK?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a5(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c0(a3.gck(),a3.gci(),a3.gcA(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gck(),a4.gci(),a4.gcA(),0,0,0,0,0)))a5.cV5(a2.a)
w=8
return A.b(A.ajR(t.a.c,a5),$async$E0)
case 8:case 5:w=9
return A.b(t.JH(),$async$E0)
case 9:case 1:return A.h(u,v)}})
return A.i($async$E0,v)},
aX3(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cW.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cW
else s=(this.a.d.a?B.bu:B.bk).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b19(d,18)
if(g)q=B.cW
else q=this.a.d.a?B.aS:B.aw
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.p(p,A.A(A.a([r,B.bb,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.b9,B.h,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.m),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Tr(d){return this.cJ_(d)},
cJ_(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Tr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i2(B.v.j(0.55),!0,"Dismiss",s,new C.dTY(),new C.dTZ(t,d),B.hl,!0,x.y),$async$Tr)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.ajR(t.a.c,d),$async$Tr)
case 7:w=8
return A.b(t.JH(),$async$Tr)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Tr,v)},
QD(d,e){return this.bQu(0,e)},
bQu(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lC(s,"Cancel","Delete",e.b+" \xb7 "+A.BF(e.c)+" will be removed from this device.","Delete this debt?"),$async$QD)
case 3:if(!g){w=1
break}w=4
return A.b(C.fNO(t.a.c,e.a),$async$QD)
case 4:w=5
return A.b(t.JH(),$async$QD)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QD,v)},
ahc(d){return this.cko(d)},
cko(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dTS(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ahc)
case 2:return A.h(null,v)}})
return A.i($async$ahc,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eDz
w=J.dM(m.d,new C.dU_())
v=A.B(w,w.$ti.k("M.E"))
w=J.dM(m.d,new C.dU0())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cD(v,0,new C.dU1())
w=A.n(18)
s=m.a.d.a
r=s?D.cGG:D.aEU
q=A.K(s?B.cW.j(0.35):B.cW.j(0.18),B.r,1)
s=A.p(l,D.c6V,B.f,l,l,new A.o(B.cW.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.ar,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a3,!0,A.n(12),A.aM(!1,A.n(12),!0,D.eCU,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dU2(m),l,l,l,l,l,l,l),B.f,B.cW,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.h,0,l,l)
o=A.E(m.cF_("Open",""+v.length),1)
n=v.length===0?"$0.00":A.BF(t)
r=A.a([A.p(l,A.x(A.a([s,B.af,A.A(A.a([o,B.aa,A.E(m.baW(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.h,0,l,l)],p),B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a7(B.ay,B.aD,B.x,r,l,l),B.m),l,l,l,l,B.anG,l,l,l),B.aA],p)
if(J.cv(m.d)){w=m.a.d.a
s=w?B.el:B.c
q=A.n(18)
o=A.K((w?B.bu:B.bk).j(0.12),B.r,1)
n=A.p(l,D.c1p,B.f,l,l,new A.o(B.cW.j(0.12),l,l,A.n(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,15,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.af,w,B.au,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bk,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.m),l,l,l,l,D.bIq,l,l,1/0))}else{w=m.gcpZ()
s=A.B(new A.O(v,w,A.U(v).k("O<1,w>")),x.l)
if(u.length!==0){q=A.a([B.ak,new A.D(D.bK5,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bk,l,l,l,l,l,l,l,l,12,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.O(u,w,A.U(u).k("O<1,w>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.am,l,B.e,B.h,0,B.p)},
baW(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.v.j(0.22):B.c.j(0.85),s=A.n(14),r=A.K((v.a.d.a?B.bu:B.bk).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bu:B.bk,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cW
else w=v.a.d.a?B.aS:B.aw
return A.p(u,A.x(A.a([q,B.bw,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.B,u,B.e,B.h,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.m),u,u,u,u,B.ep,u,u,u)},
cF_(d,e){return this.baW(!1,d,e)},
cq_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.A_(j).length,h=d.bkp()
if(d.x!=null){w=d.A_(j).length
v=w===0?B.cW:B.bE}else if(d.gV7())v=B.bE
else{if(h)w=B.cW
else w=k.a.d.a?B.bu:B.bk
v=w}if(d.x!=null){w=d.A_(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xA(u,!1)}else{u.toString
t="Paid "+C.xA(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xA(w,!1)+" \xb7 "+i+" missed":"Due "+C.xA(w,!1)}w=k.a.d.a?B.el:B.c
u=A.n(18)
if(d.gV7()&&d.x==null)s=B.bE.j(0.35)
else s=(k.a.d.a?B.bu:B.bk).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.aa(0,B.H,B.v.j(0.04),B.cP,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bs:B.ml
o=A.K(d.gV7()&&d.x==null?B.bE.j(0.45):B.cW.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hoN(d.d)
o=A.p(B.z,A.d2(C.b19(A.fUA(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.aw
m=x.p
n=A.a([new A.d6(1,B.cg,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.F,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaIX())B.d.u(n,A.a([B.e3,A.W(B.Q9,B.cW.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.h,0,j,j),B.cN,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.B,j,B.e,B.h,0,B.p),1)
n=A.BF(d.c)
l=k.a.d.a?B.aS:B.aw
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(Ax.anu,A.A(A.a([o,B.bc,p,B.aa,A.x(A.a([n,B.bw,A.W(B.eJ,(k.a.d.a?B.bu:B.bk).j(0.5),j,j,j,18)],m),B.dF,j,B.e,B.h,0,B.p)],m),B.l,j,B.e,B.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dTU(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.m),j,j,j,B.d7,j,j,j,j)}}
C.v5.prototype={}
C.amW.prototype={
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
p=A.a([new A.aa(0,B.H,B.v.j(0.45),B.cw,16)],x.V)
o=x.p
n=A.a([],o)
m=B.v.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.p(a0,A.W(B.cB,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.j2,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.c(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aB1,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.HS,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.di(B.dr,m,B.f,A.A(l,B.l,a0,B.e,B.M,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bEU,A.c(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cO:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fE,A.x(a2,u,a0,B.e,B.M,0,B.p),a0),1))
n.push(D.fu5)
a2=A.a([A.A(n,B.l,a0,B.e,B.h,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.wX,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a7(B.a5,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.m),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.m_,A.x(a2,B.l,a0,B.e,B.M,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hL,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a7(B.ay,B.aD,B.x,a1.d,a0,a0),B.m),a0,a0,a0,D.bGb,a0,a0,a0,a0)}}
C.aXR.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.b8?B.b8:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.c(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cO,q,B.P,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.h,0,q,q),B.cN,n],m)
if(p.z)o.push(new A.D(B.v6,n,q))
return new A.D(B.d7,A.x(o,B.l,q,B.e,B.M,0,B.p),q)}}
C.Ut.prototype={
R(){return new C.bi9()}}
C.bi9.prototype={
gc3Z(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aF(d,n,x.w).w,l=x.p,k=A.a([D.eDu,D.eDA],l)
for(w=0;w<8;++w){v=D.a6d[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.ID:B.A6
q=t===s
r=A.W(r,q?B.eG:B.bV,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bb,A.c(v.b,n,n,n,n,n,n,new A.H(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aa,new A.bu(1,B.ba,A.c(v.c,n,1,B.a2,n,n,n,B.Bt,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ax(B.eG,2,B.r,-1)
s=new A.o(n,n,new A.bE(p,p,p,p),new A.bb(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eY,A.x(A.a([new A.D(B.ne,new A.c1(B.aK,B.e,B.h,B.l,n,B.p,n,0,r,n),n),A.p(n,new A.dt(!0,new C.amW(v,q.d,q.e,new C.dj6(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.B,n,B.e,B.h,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dj7(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bGA,A.bI(D.hht,n,new C.dj8(o,d),A.bp(B.b2,n,n,n,n,B.ph,n,n,new A.b9(A.n(16),B.a1),n,n,n)),n))
return A.bo(!0,new A.cQ(new A.aY(0,1/0,0,m.a.b*0.9),A.cn(k,n,n,D.bKZ,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nH.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.ab().ag()],x.N,x.z)},
bh_(d,e,f){return new C.nH(this.a,e,d,f)}}
C.IG.prototype={
x9(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.IG(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aH5(d){var w=null
return this.x9(w,w,w,w,w,d,w,w,w,w,w,w)},
cQG(d){var w=null
return this.x9(w,w,w,w,d,w,w,w,w,w,w,w)},
bgY(d,e,f){var w=null
return this.x9(d,w,w,w,w,w,w,w,e,w,f,w)},
cRk(d){var w=null
return this.x9(w,w,w,w,w,w,d,w,w,w,w,w)},
cRt(d){var w=null
return this.x9(w,w,w,w,w,w,w,w,w,d,w,w)},
cQE(d){var w=null
return this.x9(w,w,w,d,w,w,w,w,w,w,w,w)},
cRv(d){var w=null
return this.x9(w,w,w,w,w,w,w,w,w,w,w,d)},
cQB(d){var w=null
return this.x9(w,w,d,w,w,w,w,w,w,w,w,w)},
cQw(d){var w=null
return this.x9(w,d,w,w,w,w,w,w,w,w,w,w)},
Gz(d){var w=null
return this.x9(w,w,w,w,w,w,w,d,w,w,w,w)},
cRD(d,e,f,g,h,i,j,k,l,m,n){return this.x9(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cOa(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bTC(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.i.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cR(d.h(0,n))).length!==0?B.a.i(A.cR(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cR(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.EA.geA(D.EA))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a7V)
q=l.$2("frame",D.a7e)
l=l.$2("texture",D.a7a)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cR(d.h(0,"author"))):o
return this.cRD(p,u,t,q,r,A.rv(d.h(0,"ribbon"))?A.Hd(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a09.prototype={
R(){return new C.aCI(A.a([],x.I),D.PI)},
ge9(){return this.c}}
C.aCI.prototype={
a_(){var w,v=this
v.a3()
v.f=A.At(0,1)
w=$.az()
v.z=new A.au(B.ax,w)
v.Q=new A.au(B.ax,w)
v.lf()
w=v.a
C.bGc(w.c,w.d).bE(new C.djN(v),x.fL)},
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
return A.b(C.M_(s.c,s.d),$async$lf)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.djB(t,r))
t.ayD()
case 1:return A.h(u,v)}})
return A.i($async$lf,v)},
gava(){var w,v=this
if(!J.cv(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
ayD(){var w,v,u=this.gava(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
ciM(d){this.l(new C.djy(this,d))
this.ayD()},
Ov(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ov=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nH(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aTX(r.c,r.d,s),$async$Ov)
case 3:w=4
return A.b(t.lf(),$async$Ov)
case 4:if(t.c==null||J.cv(t.d)){w=1
break}q=J.oN(t.d,new C.dj9(s))
p=q>=0?q:J.ad(t.d)-1
t.l(new C.dja(t,p))
t.ayD()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.C5(p+1,B.cm,B.l4),$async$Ov)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Ov,v)},
BJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$BJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.d()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.d()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gava()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aTX(o.c,o.d,new C.nH(s,r,q,new A.V(p,0,!1))),$async$BJ)
case 3:w=4
return A.b(t.lf(),$async$BJ)
case 4:if(t.c==null){w=1
break}t.l(new C.djC(t))
case 1:return A.h(u,v)}})
return A.i($async$BJ,v)},
Pd(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gava()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dji(r),s,null,!0,!0,x.y),$async$Pd)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bFX(s.c,s.d,r.a),$async$Pd)
case 4:t.l(new C.djj(t))
w=5
return A.b(t.lf(),$async$Pd)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.Va(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Pd,v)},
zl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BJ(),$async$zl)
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
return A.b(C.St(s,r.r,o,p,q),$async$zl)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a8(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hPm(s,r.x,r.r),$async$zl)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.M_(s.c,s.d),$async$zl)
case 10:l=e
for(s=n.d,r=J.cH(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nH(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BM(r.c,r.d,l),$async$zl)
case 11:w=12
return A.b(t.lf(),$async$zl)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zl,v)},
a2e(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a2e=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BJ(),$async$a2e)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzj(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dz(D.Av,new C.djz(t),new C.djA())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.n1("Our Family",o,"",""))
for(o=J.aR(t.d);o.C();){n=o.gP(o)
p.push(new H.n1(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hqC(o,new H.t0(s,r,"",p,new H.vn(q.d,null,null,null,null,"","","")),null),$async$a2e)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a2e,v)},
OV(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$OV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BJ(),$async$OV)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.aip,null,new C.dje(t),s,!0,!0,!0,I.abe,!1,!1,x.N),$async$OV)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cQG(r)
t.l(new C.djf(t,q))
s=t.a
w=7
return A.b(C.T6(s.c,s.d,q),$async$OV)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OV,v)},
Yq(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.aip,null,new C.djk(t),r,!0,!0,!0,I.abe,!1,!1,x.e),$async$Yq)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.djl(t,s))
r=t.a
w=4
return A.b(C.T6(r.c,r.d,s),$async$Yq)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.C5(0,B.ea,B.na)
case 1:return A.h(u,v)}})
return A.i($async$Yq,v)},
bW9(d){var w=d.bU(),v=B.a.b0(B.o.v(w.gci()),2,"0"),u=B.a.b0(B.o.v(w.gcA()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gzj(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c3c()
if(r.e)w=D.ah4
else if(J.cv(r.d)){w=r.y
v=r.gzj(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fF7,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a6(q,330,new A.D(A0.aoR,new C.a_p(w,v,0,q),q),q),B.by,t,B.ak,A.c(u,q,q,q,q,q,q,A.l(q,q,D.l_.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.p(q,D.foe,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.aa(0,B.H,B.dY.j(0.45),B.J,18)],x.V),E.xA,B.m),q,q,q,q,B.Pl,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcNd(),q,q,q,q,q,q,!1,B.a4))
w.push(B.S)
w.push(A.hv(D.bYn,D.hgV,r.gaQ3(),q))
B.d.u(u,w)}w=A.at(A.cb(A.x(u,B.l,q,B.e,B.M,0,B.p),B.t,q,B.y,q,q,B.eI,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.l_.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.P,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.e8:B.C4
u=A.x(A.a([new A.D(D.bHF,w,q),A.E(A.K2(v,new C.djL(r),J.ad(r.d)+1,q,r.gciL(),u,B.aK),1),r.bIo()],x.p),B.l,q,B.e,B.h,0,B.p)
w=u}v=x.p
return A.c5(q,D.a_A,new A.an(B.a0,q,B.b4,B.t,A.a([D.aSv,A.bo(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c3c(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cL(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.L2(B.eg,"AI",h.gbGb(),!0))
if(h.a.f)f.push(new C.L2(B.m2,"Cover",h.gbR3(),!1))
if(h.a.f)f.push(new C.L2(B.xs,"Header",h.gbM_(),!1))
if(J.cL(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.L2(B.vw,"Print",h.gcs6(),!1))
if(h.a.f&&J.cL(h.d)&&h.r>=0){v=h.w
u=v?B.hn:B.jk
t=v?"Save":"Edit"
f.push(new C.L2(u,t,v?h.gcyv():new C.djv(h),!1))}if(h.a.f)f.push(new C.L2(B.ic,"Add page",h.gaQ3(),!1))
v=C.hKP(h.y.Q)
u=h.gzj(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dRJ
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(E.kF.j(0.5),1,B.r,-1)
j=A.p(g,A.W(l.a,D.l_,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bE(i,i,i,i),new A.bb(k,k,k,k),g,new A.a7(B.a5,B.a9,B.x,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.l_.j(0.85)
p.push(new A.bu(1,B.ba,A.aA(B.c_,A.x(A.a([k,B.bw,A.c(l.b,g,1,g,g,g,g,new A.H(!0,j,g,g,g,g,9.5,B.F,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.M,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.amW(v,u,t+" \xb7 "+s+" "+r,new C.djw(h),A.A(p,B.l,g,B.e,B.h,0,g,g),g)},
AF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BJ(),$async$AF)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aR(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=H.a46(B.d.aL(s," "))
s=t.c
s.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.djb(t,p),s,null,!0,!0,x.N),$async$AF)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zl(),$async$AF)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.EA(),$async$AF)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Gc("Swahili (Kiswahili)",!0),$async$AF)
case 18:w=16
break
case 17:w=19
return A.b(t.cJE(o==="sw"?"Swahili (Kiswahili)":"English"),$async$AF)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$AF,v)},
a_p(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.K(E.kF.j(0.3),B.r,1),r=x.p
return new A.D(B.cy,A.aM(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.xA,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.c(f,w,w,w,w,w,w,Aa.LD,w,w,w),A.c(g,w,w,w,w,w,w,B.Fv,w,w,w)],r),B.B,w,B.e,B.h,0,B.p),1)],r),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.m),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.djx(d,h),w,w,w,w,w,w,w),w)},
EA(){return this.bVD()},
bVD(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$EA=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.djo(r),a7,null,!0,!0,x.ei),$async$EA)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eJ("Working on it\u2026",$.az())
a6.a=!0
a7=r.c
a7.toString
A.ce(null,null,!1,null,new C.djp(o),a7,null,!0,!0,x.H).fA(new C.djq(a6))
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
for(a1=0;a1<8;++a1){i=D.Av[a1]
J.c6(j,i.a)}w=8
return A.b(C.aiU(a0,a7,new C.djr(o),d,l,e,j),$async$EA)
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
J.aUq(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.K(x.q).f
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
a7=j.bh_(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BM(j.c,j.d,l),$async$EA)
case 11:w=12
return A.b(r.lf(),$async$EA)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.Av[a1].a)
a5=l.cOa(j,12,a7)
l=r.a
w=15
return A.b(C.T6(l.c,l.d,a5),$async$EA)
case 15:if(r.c!=null)r.l(new C.djs(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.C5(0,B.ea,B.na)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b3(a3?A.cCG("Undo",new C.djt(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.eo,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EA,v)},
Gc(d,e){return this.cJF(d,e)},
cJE(d){return this.Gc(d,!1)},
cJF(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Gc=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eJ("Starting\u2026",$.az())
f.a=!0
k=r.c
k.toString
A.ce(null,null,!1,null,new C.djE(a0),k,null,!0,!0,x.H).fA(new C.djF(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c6(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a4n(m,new C.djG(a0)),$async$Gc)
case 10:w=8
break
case 9:w=11
return A.b(C.bHM(new C.djH(a0),m,a2),$async$Gc)
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
J.aUq(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.T(A.b3(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bh_(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BM(k.c,k.d,o),$async$Gc)
case 12:w=13
return A.b(r.lf(),$async$Gc)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.Y(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b3(A.cCG("Undo",new C.djI(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Gc,v)},
bIo(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.djc(v):u
r=A.aI(u,u,u,u,A.W(D.bTY,s?D.l_:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cL(v.d)&&!v.w&&v.r>=0)s=A.hv(A.W(B.xd,B.Hf,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.Hf,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbQE(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.l_.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.djd(v):u
return A.bo(!0,new A.D(D.bHu,A.A(A.a([r,s,A.aI(u,u,u,u,A.W(B.eJ,t<J.ad(v.d)?D.l_:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.h,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a0d.prototype={
R(){return new C.biy(new A.au(B.ax,$.az()))}}
C.biy.prototype={
ga3m(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.az()
w.W$=0
this.a2()},
gbUe(){switch(this.ga3m()){case"cover":var w=D.deK
break
case"book":w=D.d9B
break
default:w=D.dI8
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.n(26),n=E.kF.j(0.5),m=x.p,l=A.A(A.a([D.dRK,B.ar,D.bNc,A.aI(p,p,p,p,B.lC,p,p,p,new C.dlz(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.h,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jN(p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dlA(q),q.ga3m()==="page",p,p,p,p))
if(q.a.d)k.push(A.jN(p,p,p,D.hbo,p,new C.dlB(q),q.ga3m()==="book",p,p,p,p))
k.push(A.jN(p,p,p,D.fYW,p,new C.dlC(q),q.ga3m()==="cover",p,p,p,p))
k=A.bZ(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bC(p,new A.b6(4,A.n(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kz,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dq,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbUe(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,As.LA,p,p,p)
w.push(A.mR(p,B.c.j(0.08),r,B.hD,new C.dlD(q,s),p,p,p,p))}return A.eG(p,E.CC,A.cb(A.x(A.a([l,B.S,D.heK,B.ak,k,B.af,j,B.O,A.bZ(B.bI,w,B.br,p,6,6),B.aA,A.db(D.bYk,p,D.hfx,new C.dlE(q,d),A.bp(B.b2,p,p,p,p,B.ph,p,p,new A.b9(A.n(16),B.a1),p,p,p)),B.au,D.h9y],m),B.B,p,B.e,B.M,0,B.p),B.t,p,B.y,p,p,B.f9,p,p,B.ah),p,p,p,B.Pj,p,B.dc,p,new A.b9(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a0b.prototype={
R(){return new C.aCL(A.a([],x.gA))},
ge9(){return this.c}}
C.agD.prototype={}
C.aCL.prototype={
a_(){this.a3()
this.lf()},
lf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sx(p.c,p.d),$async$lf)
case 3:o=e
n=A.a([],x.gA)
p=J.aR(o)
case 4:if(!p.C()){w=5
break}s=p.gP(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bGc(r.c,q),$async$lf)
case 6:j=e
i=J
w=7
return A.b(C.M_(t.a.c,q),$async$lf)
case 7:m.push(new l.agD(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.dk1(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lf,v)},
bcf(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Rs(d,e){return this.ckl(0,e)},
ckl(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a8(s,!1).cb(A.ea(new C.dk0(u,e),!0,null,x.y)),$async$Rs)
case 2:t=g
w=3
return A.b(u.lf(),$async$Rs)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.T(D.aWu)
return A.h(null,v)}})
return A.i($async$Rs,v)},
Ge(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Ge=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.T(D.aWp)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aid(s.c,s.d),$async$Ge)
case 5:q=e
w=6
return A.b(t.lf(),$async$Ge)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Rs(0,B.d.fg(t.d,new C.dk5(q))),$async$Ge)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.St(p,s.f,r,n,o),$async$Ge)
case 10:m=e
w=11
return A.b(t.lf(),$async$Ge)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.T(D.aWu)
case 1:return A.h(u,v)}})
return A.i($async$Ge,v)},
QS(d,e){return this.cwa(0,e)},
cwa(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dk4(t,e),s,null,!0,!0,x.y),$async$QS)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a4y(s.c,s.d,e.a),$async$QS)
case 4:w=5
return A.b(t.lf(),$async$QS)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QS,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bIr(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.K(E.kF.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fL(0.7142857142857143,A.p(n,A.x(A.a([D.dRL,B.af,D.eCv,B.au,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.l_.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.b9,B.h,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcN9(),n,n,n,n,n,n,!1,B.a4))}w=A.n(22)
v=A.K(E.kF.j(0.85),B.r,1.6)
s=A.aA(n,A.p(n,D.c5D,B.f,n,n,new A.o(B.v.j(0.3),n,A.K(E.kF.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dk6(d),n,n,n,n,n,n,!1,B.a4)
r=A.n(14)
q=B.v.j(0.3)
p=A.K(E.kF.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bc,D.bNB,A.p(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fE5,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.m),n,n,n,n,B.hm,n,n,n)],l),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.cbJ,B.m),n,n,n,Al.P6,D.bFm,n,n,n)
if(o.e)k=D.ah4
else k=k.length===0?D.bfr:A.cf(new C.dk7(k))
return A.c5(n,D.a_A,new A.an(B.a0,n,B.b4,B.t,A.a([D.aSv,A.bo(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bIr(d){var w,v,u=this,t=null,s=u.bcf(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.di(B.dH,B.z,B.f,new A.a6(300,420,new C.a_p(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aA(t,A.p(t,D.c4S,B.f,t,t,new A.o(B.v.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.djZ(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fDJ,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fL(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.O,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.l_.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.h,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dk_(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.L2.prototype={}
C.a_p.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dz(D.Av,new C.cRT(m),new C.cRU()),j=m.c,i=D.EA.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mD:B.b9
v=new C.cRV(h)
i=A.a([new A.aa(0,B.H,B.v.j(0.6),D.ezi,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b4(l,l,l,new C.bfJ(j.x,h,l),B.az),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.a5,B.a9,B.x,A.a([B.v.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cN(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bb(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.aoS,8,0.85,2.2),v.$4(D.bKo,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aoS,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bKk,A.b4(l,l,l,new C.bfA(h,l),B.az),l),0,0,0))
r=A.W(D.aDR[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.c(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aB1,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.af,p,B.af,A.c(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cO,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.c(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.F,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bKQ,A.x(o,B.l,l,w,B.h,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aJR(l),D.fta),l,l,l,46,0,l))
return A.p(l,A.bx(D.afF,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.afF,i,new A.a7(B.ay,B.aD,B.x,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bfJ.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e1()
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
C.bfA.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.T(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.ac
j.c=2.4
j.d=B.bF
for(w=e.a,v=e.b,v=[D.fg4,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
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
C.a_K.prototype={
R(){return new C.bfH()}}
C.bfH.prototype={
goB(){var w=this.d
return w===$?this.d=this.a.c:w},
gzj(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.bd(w.b,B.b6,B.aP),$.az())}return v},
gaEf(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.bd(w.c,B.b6,B.aP),$.az())}return v},
gatH(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.bd(w.y,B.b6,B.aP),$.az())}return v},
t(){var w=this,v=w.gzj(0),u=v.V$=$.az()
v.W$=0
v=w.gaEf()
v.V$=u
v.W$=0
v=w.gatH()
v.V$=u
v.W$=0
w.a2()},
auk(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jN(s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.daS(this,f,u),e===u,s,s,s,s))}return A.bZ(B.bI,r,B.br,s,6,8)},
aA8(d){var w=null,v=B.c.j(0.07)
return A.bC(w,new A.b6(4,A.n(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.m9,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goB(),a0=f.gzj(0),a1=a0.a.a,a2=f.gaEf(),a3=a2.a.a,a4=f.gatH(),a5=d.bgY(a4.a.a,a3,a1)
a1=x.w
a3=A.aF(a6,e,a1).w
a1=A.aF(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a6(190,260,new A.di(B.dH,B.z,B.f,new A.a6(270,370,new C.a_p(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.aA8("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dbg(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dq,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.aA8("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dbh(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dq,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.Av[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bE(o,o,o,o),e,e,new A.a7(B.ay,B.aD,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aF
v.push(A.aA(e,A.x(A.a([p,B.cN,A.c(t.b,e,e,e,e,e,e,new A.H(!0,q,e,e,e,e,10.5,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.M,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dbi(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bZ(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b2.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.eG:B.L,2,B.r,-1)
q.push(A.aA(e,A.p(e,A.W(D.aDR[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bE(o,o,o,o),new A.bb(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dbj(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bZ(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.aA8("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dbk(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dq,!0,B.a7,e,B.ao,e,e,e,e)
p=A.c("LETTERING COLOUR",e,e,e,e,e,e,N.wb,e,e,e)
m=A.a([],w)
for(l=D.EA.gdS(D.EA),l=l.gae(l);l.C();){k=l.gP(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eG:B.aT
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bE(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aF
m.push(A.aA(e,A.x(A.a([j,B.bw,A.c(i,e,e,e,e,e,e,new A.H(!0,h,e,e,e,e,10,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.M,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dbl(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bZ(B.bI,m,B.br,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,N.wb,e,e,e)
k=f.goB()
return new A.D(new A.R(0,0,0,a3.f.d),A.bo(!0,new A.cQ(new A.aY(0,1/0,0,a1.a.b*0.92),A.cn(A.a([D.h8Z,B.af,d,B.aO,a0,B.S,a2,B.aA,D.hfi,B.O,v,B.aA,D.h97,B.O,q,B.aA,a4,B.aA,p,B.O,m,B.aA,l,A.ld(e,9,""+B.i.S(f.goB().f),36,18,new C.dbm(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,N.wb,e,e,e),B.ak,f.auk(D.a7V,f.goB().r,new C.dbn(f),D.dLt),B.af,A.c("BORDER",e,e,e,e,e,e,N.wb,e,e,e),B.ak,f.auk(D.a7e,f.goB().w,new C.dbo(f),D.dLz),B.af,A.c("COVER MATERIAL",e,e,e,e,e,e,N.wb,e,e,e),B.ak,f.auk(D.a7a,f.goB().x,new C.dbq(f),D.dNd),B.ak,A.j7(e,B.b2,e,B.ag,e,new C.dbr(f),e,e,e,D.h36,f.goB().z),B.by,A.bI(D.h7F,e,new C.dbs(f,a6),A.bp(B.b2,e,e,e,e,B.ph,e,e,new A.b9(A.n(16),B.a1),e,e,e))],w),e,e,U.aol,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aJR.prototype={
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
u.san(D.ccq.az(0,new A.a4(0,0,0+w,0+v)))
d.af(t,u)},
aC(d){return!1}}
C.bl6.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.T()
w=A.L()
w.san(D.cbp.az(0,new A.a4(0,0,a2,a3)))
a4.aD(new A.a4(0,0,a2,a3),w)
v=B.i.cF(a1/112)
u=new A.e1()
u.cT(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.deJ[u.av(9)]
j=u.av(14)
J.bs(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a4(n,j,n+m,j+l)
h=A.by(i,B.hC)
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
e.r=E.kF.j(0.55).gp(0)
a4.aD(new A.a4(g,j,h,j+2),e)
e=new A.as(B.T,B.Q,B.W,B.X,B.U)
e.r=E.kF.j(0.4).gp(0)
a4.aD(new A.a4(g,q,h,p),e)
t.restore()
j=u.av(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.san(D.caH.az(0,new A.a4(0,r,a2,q)))
a4.aD(new A.a4(0,r,a2,q),p)
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=B.v.j(0.5).gp(0)
p.y=B.l6
a4.aD(new A.a4(0,q,a2,q+14),p)}t=A.L()
t.r=D.bjg.j(0.72).gp(0)
a4.aD(new A.a4(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bT(B.z,0.5,B.x,d,0,A.a([D.brV.j(0.22),B.L],w),d,d).az(0,A.bX(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aC(d){return!1}}
C.bdR.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cN(14,w*2,v*2.2,v*2,o,o,new A.bP(new A.o(A.ap(D.l_,D.bxg,w/4),o,new A.bE(B.a1,new A.ax(B.v.j(0.12),1,B.r,-1),B.a1,B.a1),B.MP,o,o,B.m),B.bm,o,o),o))}v=x.V
u=A.a([new A.aa(0,B.H,B.v.j(0.35),B.aO4,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kF.j(0.6),o,o,new A.bb(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.l,o,B.rq,B.h,0,B.p),B.f,o,o,new A.o(o,o,o,D.b7q,u,D.cco,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.aa(0,B.H,B.v.j(0.4),B.ds,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aJR(o),D.ft5),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aXR(p.y,r,L.jg,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bC(o,B.eU,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.jg.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fSQ,!0,B.a7,o,B.ao,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.jg.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bC(o,B.eU,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.jg.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.al,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fJ8,!0,B.a7,B.Bo,B.ao,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.fSI,o,o,o),B.au,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.jg.j(0.5),o,o,o,o,o,o,o,o,11,B.cO,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.O,A.A(A.a([A.E(A.p(o,o,B.f,D.H_.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fE,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.H_.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.H_.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.h,0,o,o),B.aA],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.jg.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.ZF(A.d3(A.a([A.d3(o,o,o,o,o,o,o,o,o,D.fMr,B.a.aw(k,0,1)),A.d3(o,o,o,o,o,o,o,o,o,o,B.a.aY(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.jg.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cb(A.x(n,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hJ,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.jg.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.bx(B.MP,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bJS,A.x(s,B.am,o,B.e,B.h,0,B.p),o),A.ao(0,new A.bP(new A.o(o,o,o,o,o,new A.a7(B.a5,B.a9,B.x,A.a([B.v.j(0.16),B.L],x.O),o,o),B.m),B.bm,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.MP,v,D.ccW,B.m),o,o,o,o,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.amX.prototype={
R(){return new C.amY(new A.eJ(0,$.az()),new C.bVq(),new C.anf(),D.hUy,null,null)},
gd6(){return this.d}}
C.a2q.prototype={
a9(){return"_Step."+this.b}}
C.amY.prototype={
gCT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bG8(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Nl(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gUs(){var w=this.ghi(0)
return w.gzD()==null?"Babu":B.a.i(w.gzD().b)},
a_(){var w,v=this
v.a3()
w=v.ghi(0).gzD()
w=w==null?null:w.c
v.r.b=w===D.oR
w=v.q8(new C.bTM(v))
w.fR(0)
v.x!==$&&A.aS()
v.x=w
v.a3i("Come closer, my children. I am "+v.gUs()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bxI()},
a3i(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.cZ(E.a1j,new C.bTG(w))},
bu4(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.l(new C.bTP(v))},
aeL(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
btX(){return this.bbN()},
bbN(){var w=this,v=w.gCT()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bTH(w))
w.a3i(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cz(B.nT,new C.bTI(w))},
cOh(){var w=this
w.l(new C.bTL(w))
w.a3i(w.gCT()[w.as].a)},
LC(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aeL)return
w=p.gCT()
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
t.r=s.a+1.5}q=new A.e1()
q.cT(v*7+d)
p.l(new C.bTK(p,d,u,q))
p.a3i(u?D.dvA[q.av(4)]+" "+w[p.as].d:D.ds_[q.av(3)]+" "+w[p.as].d)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCT()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bIs(t.at,t.ay,p)
t.l(new C.bTN(t,s))
t.a3i(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.C7(t.a.d,s),$async$kM)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.C8(r.d,r.c.a,"fire",t.at*10),$async$kM)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bTO())
w=1
break
case 4:++t.as
t.bbN()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.ZB,new A.an(B.a0,v,B.ad,B.t,A.a([A.bS(0,new A.e5(A.b4(v,v,v,new C.aXW(u,w.r,w.w,u),B.az),v),0,0,0),A.bo(!0,A.x(A.a([w.ceg(0),B.aY,w.bTp()],t),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
ceg(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,Ag.Ra,s,s,s,new C.bTJ(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCT().length;++w){v=t.as
if(w<v||t.Q===D.b3I)v=B.cY
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bb(u,u,u,u),s,s,B.m),s,7,s,D.bF6,s,s,s,22))}p=A.E(A.x(A.a([D.h_P,A.A(p,B.l,s,B.e,B.h,0,s,s)],q),B.B,s,B.e,B.h,0,B.p),1)
v=A.n(14)
u=A.K(B.fM,B.r,1)
return new A.D(D.bL2,A.A(A.a([r,p,A.p(s,A.c("\ud83d\udd25 "+B.i.S(t.cy*100)+"%",s,s,s,s,s,s,B.iS,s,s,s),B.f,s,s,new A.o(B.b7,s,u,v,s,s,B.m),s,s,s,s,B.hm,s,s,s)],q),B.l,s,B.e,B.h,0,s,s),s)},
bTp(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghi(0).gzD()
if(h==null)w=1
else w=h.c===D.oR?0:1
v=j.dx
u=j.db
t=D.qO.j(0.96)
s=A.n(22)
r=A.K(B.cY,B.r,3)
q=A.b4(i,i,i,new C.bqJ(w,i),B.az)
p=A.c(j.Q===D.aeL?j.gUs()+" asks":"Elder "+j.gUs(),i,i,i,i,i,i,D.aXK,i,i,i)
o=j.db
o=B.a.aw(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c_,A.A(A.a([new A.a6(62,62,q,i),B.ar,A.E(A.x(A.a([p,B.bw,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aXX,i,i,i)],n),B.B,i,B.e,B.h,0,B.p),1)],n),B.B,i,B.e,B.h,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbu3(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.aaQ("Sit down by the fire",j.gbtW()),i,i,i)
break
case 1:v=A.at(j.aaQ("Ask me, Elder",j.gcOg()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCT()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ax(D.lQ,2.5,B.r,-1)
v.push(A.aA(i,A.p(i,A.c(u[m],i,i,i,i,i,i,D.aXT,B.K,i,i),B.f,i,D.agi,new A.o(D.alR,i,new A.bE(l,l,l,l),new A.bb(q,q,q,q),i,i,B.m),i,i,i,i,Z.x0,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bTD(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bZ(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kl:AB.arS
u=A.W(u,v?B.es:D.lQ,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.es:D.lQ,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCT().length?"Finish":"Next story"
v=A.A(A.a([u,B.aa,q,j.aaQ(v,j.gqr(j))],n),B.l,i,B.e,B.h,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gCT().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aYa,i,i,i)],n)
u=j.cx
if(u>0){u=C.aS8(u)
q=C.aS8(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.adb,i,i,i))}v.push(B.O)
v.push(j.aaQ("Back to the games",new C.bTE(j)))
v=A.x(v,B.l,i,B.e,B.h,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.S,v],n),B.B,i,B.e,B.M,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aFp,i,B.m),i,i,i,B.zk,B.bg,i,i,i)},
aaQ(d,e){var w=null,v=A.n(16),u=A.K(B.cY,B.r,2)
return A.aA(w,A.p(w,A.c(d,w,w,w,w,w,w,Aa.LD,w,w,w),B.f,w,w,new A.o(D.lQ,w,u,v,w,w,B.m),w,w,w,w,D.bIL,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bqJ.prototype={
a4(d,e){Q.hqm(d,e.eo(B.J),e.gdl()*0.45,this.b,0,0.4)},
aC(d){return d.b!==this.b}}
C.aCJ.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a8(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bVq.prototype={}
C.tq.prototype={}
C.bqK.prototype={}
C.anf.prototype={
N1(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ind(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aXW.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.CB(l.d.N1(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bs(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cDC(d,j)
l.bRY(d,j)
l.cM3(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bs(t.save())
t.translate(225,580)
d.nK(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.T()
q=A.L()
p=x.O
o=x.n
q.san(A.ws(B.J,r,A.a([D.bvX.j(0.55*s),F.On.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bVi(l,d,j,i)),new A.y(540,new C.bVj(l,d,j,i)),new A.y(546,new C.bVk(l,d,j,i)),new A.y(574,new C.bVl(l,d,j,i)),new A.y(612,new C.bVm(l,d,j,i)),new A.y(650,new C.bVn(l,d,j,i)),new A.y(656,new C.bVo(l,d,j,i))],x.E)
B.d.b_(n,new C.bVp())
for(m=0;m<7;++m)n[m].b.$0()
l.bIK(d,j,i)
l.bVB(d,j)
t.restore()
$.T()
t=A.L()
t.san(A.ws(new A.r(w/2,v*0.6),e.gap6()*0.75,A.a([B.L,D.bj9],p),A.a([0.55,1],o),B.x,k,k,0))
d.aD(new A.a4(0,0,0+w,0+v),t)},
aC(d){return d.c!==this.c||d.d!==this.d},
cDC(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e1()
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
d.ah(p,p.aI(0,D.eyP),C.iQ(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
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
s.r=D.blV.gp(0)
s.d=B.bF
s.e=B.dP
d.af(l,s)}},
bRY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aCm[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bY(new A.r(p,m),n*0.74,q*0.5)
k=Ap.z3.j(v)
$.T()
j=new A.as(B.T,B.Q,B.W,B.X,B.U)
j.r=k.gp(0)
d.c1(l,j)
q=A.bY(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=B.wB.j(u).gp(0)
d.c1(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.as(B.T,B.Q,B.W,B.X,B.U)
o.r=D.ajc.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cM3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bFu(d,D.eyL,0.9,e,D.hOe,!1,!1,D.b3F,1,!1)
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
C.bFu(d,D.eyN,0.95,e,D.hO2,!1,!1,D.b3G,1,!0)
t=new A.aH(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.ch(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.ch(431,553,421,548))
t.E(new A.bA())
u=A.L()
u.r=F.GF.gp(0)
d.af(t,u)
u=A.bY(D.eyM,8,28)
t=A.L()
t.r=D.byn.gp(0)
d.c1(u,t)
C.bFu(d,new A.r(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hOg,!0,!1,D.Yo,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c1(A.bY(new A.r(s+q*16,r-6),16,11),C.iQ(D.al0,1.8))
u=q<0
C.bFu(d,new A.r(s-q*6,r),0.62,e,D.hOj,!1,u,D.Yo,2.2,!1)
C.bFu(d,new A.r(s-q*32,r+4),0.58,e+1,D.hOa,!1,u,D.Yo,2.2,!1)
this.bYk(d,D.eyq,e)
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
k.r=B.at.gp(0)
k.d=B.bF
k.e=B.dP
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.as(B.T,B.Q,B.W,B.X,B.U)
k.b=B.ac
k.c=1
k.r=B.at.gp(0)
k.d=B.bF
k.e=B.dP
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bY(D.aa6,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.ajB.gp(0)
d.c1(u,t)
u=A.bY(D.aa6.a7(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bo8.gp(0)
d.c1(u,t)
t=new A.aH(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bA())
u=A.L()
u.r=D.bol.gp(0)
d.af(t,u)
u=D.aa6.a7(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.ir.gp(0)
d.O(u,1.1,t)
v=new A.aH(w,B.aj,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.ch(180,588+w*(h?6:0),178,595))
d.af(v,C.iQ(D.ajB,3.5))},
bYk(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a7(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.T()
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.b=B.ac
m.c=2
m.r=D.ZP.gp(0)
m.d=B.bF
m.e=B.dP
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bY(k,17,32)
v=$.T()
r=A.L()
r.r=D.GD.gp(0)
d.c1(w,r)
r=A.bY(k.a7(0,D.exR),7,26)
w=A.ap(D.GD,B.v,0.12)
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
s.r=D.GD.gp(0)
d.af(v,s)
s=A.bY(k.a7(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.GD.gp(0)
d.c1(s,v)
v=-11+l
d.ah(k.a7(0,new A.r(22,v)),k.a7(0,new A.r(21,-17+l)),C.iQ(D.ZP,1.6))
d.ah(k.a7(0,new A.r(26,v)),k.a7(0,new A.r(28,-16+l)),C.iQ(D.ZP,1.6))
v=k.a7(0,new A.r(26,-8+l))
s=A.L()
s.r=B.v.gp(0)
d.O(v,0.9,s)
d.ah(k.a7(0,new A.r(26,-3+l)),k.a7(0,new A.r(26,1+l)),C.iQ(D.br9,1.4))
d.ah(k.a7(0,D.eAK),k.a7(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iQ(D.GD,2.4))},
bVz(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bY(new A.r(225+u*36,574+(t*13+6)),8,11)
$.T()
t=new A.as(B.T,B.Q,B.W,B.X,B.U)
t.r=D.bx_.gp(0)
a6.c1(u,t)}}u=A.bY(D.aa8.a7(0,B.cw),17,52)
$.T()
t=A.L()
t.r=D.biI.gp(0)
a6.c1(u,t)
t=A.bY(D.aa8.a7(0,B.cw),12,44)
u=D.bmk.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c1(t,s)
for(r=0;r<3;++r){v=D.drr[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.as(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=7
o.r=D.GR.gp(0)
o.d=B.bF
o.e=B.dP
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Ch.j(0.6)
n=new A.as(B.T,B.Q,B.W,B.X,B.U)
n.b=B.ac
n.c=2
n.r=t.gp(0)
n.d=B.bF
n.e=B.dP
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.fc0,D.fcB,D.fdL,D.fe5,D.fdJ]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bue,D.bqu,D.bwp][k]
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
bVB(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.byy.j(0.18*p)
$.T()
n=new A.as(B.T,B.Q,B.W,B.X,B.U)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.as(B.T,B.Q,B.W,B.X,B.U)
n.r=D.bs_.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c7w(d,e){switch(d){case 0:return e.b?D.hO4:D.b2V
case 1:return e.b?D.hOi:D.b2T
case 2:return D.b2S
case 3:return D.b2R
case 4:return D.b2U
default:return D.b2W}},
aEu(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
RM(d,e,f,g){var w,v=this,u=D.a7m[e],t=v.c7w(e,g),s=new C.bqK(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a7m[e],l=e===0
m=B.i.D(((l?D.aNX:D.aO2).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.aad
s.as=D.F1
if(l){s.a=o?v.aEu(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.r(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.r(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.F1
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.exZ
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.ezm
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
s.Q=D.eBG
s.as=D.aOf}if(e===2&&g.x!=null&&f<g.y){s.a=v.aEu(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aEu(f,e*3)
s.b=0.5
s.c=0.4}}C.hJq(d,u.a,u.b*1.2,t,s,f,e,null)},
bIK(d,e,f){var w=new C.bVh(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd4(d){return this.c}}
C.agM.prototype={
a9(){return"_Stand."+this.b}}
C.aeJ.prototype={}
C.lL.prototype={}
C.bU1.prototype={
bDf(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aS()
this.c=s},
Gu(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bU2())
return r},
asm(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aOb(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
anu(d){var w,v,u=A.aQ(x.N),t=d,s=0
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
B.d.b_(w,new C.bU3(this))
return B.d.gH(w)}}
C.avk.prototype={}
C.zS.prototype={}
C.alO.prototype={
gCp(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.X(w,new C.bON(),A.U(w).k("X<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.N4.prototype={
gaqp(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCp(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d4F(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaqp(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lL(B.a.i(s.a),p,B.d.cc(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bc1.prototype={}
C.aaM.prototype={}
C.bjo.prototype={}
C.agK.prototype={}
C.al6.prototype={
R(){return new C.al7(B.bG,A.a([],x.cC),A.a([],x.e4),null,null)},
gd6(){return this.d}}
C.al7.prototype={
gNi(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bG8(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbc8(){var w,v=this,u=v.e
if(u===$){w=v.q8(v.gcjK())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
a_(){this.a3()
this.gbc8().fR(0)},
t(){this.gbc8().t()
this.bxD()},
fR(d){this.l(new C.bMW(this))},
cjL(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fK(0,v)
if(w.c!=null)w.l(new C.bMR())},
bar(){var w,v,u,t=this,s=t.r
B.d.a5(s)
w=t.gNi()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bjo(u,(u+0.5)/v,w[t.x].b[u]))},
fK(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bMX())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.cao()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gNi()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.i.S((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.atT(v,0.8,B.cY)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.atT(m.cy,0.8,G.nF)
m.b_M("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.atT(q,0.88,D.lQ)
p=m.gNi()[m.x]
n=p.c
if(u===n){m.b_M("The right gourd fell! It was "+p.b[n]+".")
return}}}},
atT(d,e,f){var w,v,u,t=new A.e1()
t.cT(B.i.S(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agK(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b_M(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.QT()}},
cao(){var w=this
if(w.x+1>=w.gNi().length){w.QT()
return}++w.x
w.bar()},
QT(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$QT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gNi().length
r=C.bIs(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bMP())
w=2
return A.b(C.C7(u.a.d,r),$async$QT)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.C8(t.d,t.c.a,"catch",u.z),$async$QT)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bMQ())
return A.h(null,v)}})
return A.i($async$QT,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.ceh()
else w=v.ch?v.cei():A.at(new A.D(B.eI,A.x(A.a([D.aZ8,B.O,D.h1x,B.S,D.h7K,B.ec,C.uG("Play",v.gf1(v),B.cY,B.fO,D.fL)],x.p),B.l,u,B.e,B.M,0,B.p),u),u,u,u)
return new C.tP("Calabash Catch",w,B.fe,u)},
cei(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hP:B.Im
p.push(A.W(u,v?B.aB:B.bV,r,r,r,22))}p.push(B.aY)
v=s.x
u=s.gNi()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aXJ,r,r,r))
p.push(B.bc)
v=A.n(14)
p.push(A.p(r,A.c(""+s.z,r,r,r,r,r,r,B.iS,r,r,r),B.f,r,r,new A.o(B.bx,r,r,v,r,r,B.m),r,r,r,r,A6.D1,r,r,r))
p=A.A(p,B.l,r,B.e,B.h,0,r,r)
v=A.n(18)
t=A.K(B.cY,B.r,3)
return A.x(A.a([new A.D(D.bGv,p,r),A.p(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fMj,B.K,r,r),B.f,r,r,new A.o(D.qO,r,t,v,r,r,B.m),r,r,r,B.f2,B.bg,r,r,1/0),B.ak,A.E(A.cf(new C.bMV(s)),1)],q),B.l,r,B.e,B.h,0,B.p)},
ceh(){var w=this,v=null,u=A.at(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qq,v,v,v),v,v,v),t=A.at(A.c(""+w.Q+" of "+w.gNi().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.WL,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cn(A.a([D.bg8,u,t,B.aO,new C.II(s,r,w.cx,v),B.aO,A.at(C.uG("Back to the games",new C.bMO(w),B.cY,B.kk,D.fL),v,v,v)],x.p),v,v,B.ae,v,v,B.ah,!1)}}
C.bey.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.T(),a3=A.L()
a3.san(A.jP(B.J,new A.r(0,a0),D.d8_,G.aCD,B.x,e))
a4.aD(new A.a4(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=G.Or.gp(0)
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
w.r=D.bni.gp(0)
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
w.r=D.boi.gp(0)
a4.aD(new A.a4(0,a2,a1,a2+a0*0.12),w)
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
l.r=D.lQ.j(0.6).gp(0)
a4.c1(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bs(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.T()
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=D.aiW.gp(0)
a4.O(D.exe,14,m)
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=D.bth.gp(0)
m.c=4
m.d=B.bF
a4.ah(D.exf,D.eym,m)
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.san(new A.amH(D.eAu,46,D.dhs,B.vG,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bY(D.eAA,8,12)
l=new A.as(B.T,B.Q,B.W,B.X,B.U)
l.r=B.c.j(0.35).gp(0)
a4.c1(m,l)
k=new A.j8(new A.eE(n.c,e,e,B.cX,e,e,e,e,e,e,D.fK6),B.K,B.ce,new A.kw(1),e,e,3,e,B.cf,e,B.cK)
k.nA(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.by(A.bY(B.cP,m.gb8(m)+8,l),B.h2)
l=new A.as(B.T,B.Q,B.W,B.X,B.U)
l.r=D.qO.gp(0)
a4.aq(j,l)
l=new A.as(B.T,B.Q,B.W,B.X,B.U)
l.r=D.lQ.gp(0)
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
C.ir5(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dY,(w+1)/2)
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
m.r=D.a_G.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=D.Ch.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.nF.gp(0)
a4.aD(new A.a4(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bno.gp(0)
a4.c1(new A.a4(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.h2(e,B.cK,e,e,e,A.d3(e,e,e,e,e,e,e,e,e,A.l(e,e,B.cY.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Eb,e,e),"+"+a2),B.a7,B.ce,e,B.e5,B.cf)
k.eY()
k.a4(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aC(d){return!0}}
C.R7.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aCH(w.c,w.f,v),B.az),s=A.n(10),r=A.K(B.bB,B.r,1.4)
return new A.a6(u+22,v,A.x(A.a([new A.a6(u,u,t,v),B.cN,A.p(v,A.c(w.d,v,1,B.a2,v,v,v,D.fCx,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.m),v,v,v,v,B.nf,v,v,v)],x.p),B.l,v,B.e,B.M,0,B.p),v)},
ga0(d){return this.e}}
C.aCH.prototype={
a4(d,e){var w=e.eo(B.J),v=e.gdl(),u=this.c?0.8:0
return Q.hqm(d,w,v*0.44,this.b,0,u)},
aC(d){return d.b!==this.b||d.c!==this.c}}
C.aB8.prototype={}
C.avW.prototype={
R(){return new C.avX(A.S(x.S,x.cq),null,null)},
gd6(){return this.d}}
C.avX.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hP6(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaGx(){var w=this.z
return w===$?this.z=this.XU(0):w},
gj_(){var w,v=this.Q
if(v===$){w=this.gkR()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c2(w,-1,!1,x.S)}return v},
XU(d){var w,v,u,t,s=this.gkR()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aB8(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aB8(v[t],u[t],-1))
v=new A.e1()
v.cT(this.a.e*31+d)
B.d.dX(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eQ$
u.b=!1
B.d.a5(u.a)
u=u.goI()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.e_$.a.a5(0)
v.qI()}this.by5()},
cUn(d,e){var w,v,u,t,s,r=this
if(d>=r.gj_().length||r.gj_()[d]!==-1||B.d.q(r.gj_(),e))return
w=r.gaGx()[e]
v=r.gkR()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.csT(r,e,w,v))
A.cz(B.lW,new C.csU(r))
return}++r.r
u=A.br(null,B.hx,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.csV(r,d,e,w,v))
u.ct(0)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkR()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cD(n,0,new C.csW())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.csX(t,r))
w=5
return A.b(C.C7(t.a.d,r),$async$kM)
case 5:t.x=f
o=t.a
w=6
return A.b(C.C8(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.l(new C.csY())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eQ$
p.b=!1
B.d.a5(p.a)
p=p.goI()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.e_$.a.a5(0)
q.qI()}o.a5(0)
t.l(new C.csZ(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qq,p,p,p),p,p,p)
v=r.f
v=A.at(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.WL,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tP(q,A.cn(A.a([D.ah3,w,v,B.aO,new C.II(u,t,r.ch,p),B.aO,A.at(C.uG("Back to the games",new C.csP(d),B.cY,B.kk,D.fL),p,p,p)],x.p),p,p,B.ae,p,p,B.ah,!1),B.fe,p)}w=r.gkR()
v=r.e
s=w[v]
return new C.tP(q,new A.D(V.tu,A.x(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aXE,B.K,p,p),A.E(A.cf(new C.csQ(r,s)),1)],x.p),B.l,p,B.e,B.h,0,B.p),p),B.fe,p)}}
C.be_.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.X(b2,new C.cSX(),A.U(b2).k("X<1>")).gJ(0),b4=a9.b,b5=b4.a7(0,B.Ko)
$.T()
w=A.L()
w.r=D.lR.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a7(0,D.ex1)
u=A.L()
u.r=B.qQ.j(0.5).gp(0)
u.c=10
u.d=B.bF
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.ea.aA(0,B.i.D(b2[p],0,1))
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
a4.r=D.H5.gp(0)
a4.b=B.ac
a4.c=h
a4.d=B.bF
b6.af(new A.aH(l,a2,b0,new A.b7([new A.C4(k,a0),0,a1*m,!0]),a3),a4)
k.jP()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jP()
a5=n[a0].Wl(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bY(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.as(B.T,B.Q,B.W,B.X,B.U)
a3.r=B.bf.gp(0)
b6.c1(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.j8(D.fC0,B.a7,B.ce,new A.kw(1),b0,b0,b0,b0,B.cf,b0,B.cK)
a8.eY()
a8.a4(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aC(d){return!0}}
C.azU.prototype={
R(){return new C.azV(A.aQ(x.S))},
gd6(){return this.d}}
C.azV.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hQ0(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
a_(){this.a3()
this.baA()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
baA(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.cZ(B.tq,new C.cHQ(this))},
brF(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkR()[v.e]
if(w.e[d]===w.b)v.l(new C.cHY(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cHZ(v,d))
A.cz(B.j1,new C.cI_(v))}},
cZW(){var w=this
if(!w.as&&w.f<w.gkR()[w.e].d.length)w.l(new C.cI0(w))},
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
t.l(new C.cI1(t,s))
w=5
return A.b(C.C7(t.a.d,s),$async$kM)
case 5:t.y=f
q=t.a
w=6
return A.b(C.C8(q.d,q.c.a,"who",t.r),$async$kM)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cI2())
w=1
break
case 4:t.l(new C.cI3(t))
t.baA()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.c(""+a0.w+" of "+a0.gkR().length+" guessed",a2,a2,a2,a2,a2,a2,B.qq,a2,a2,a2),a2,a2,a2)
v=A.at(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.WL,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tP(a1,A.cn(A.a([D.bgj,w,v,B.aO,new C.II(u,t,a0.ax,a2),B.aO,A.at(C.uG("Back to the games",new C.cHS(a3),B.cY,B.kk,D.fL),a2,a2,a2)],x.p),a2,a2,B.ae,a2,a2,B.ah,!1),B.fe,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkR()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.LK,B.K,a2,a2),B.S,A.at(A.lz(new C.cHT(a0,r),a2,B.b_,B.hx,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aA],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ax(B.cY,2,B.r,-1)
k=o+1
w.push(new A.rn(new A.bq(0,1,u),new C.cHU(),A.p(a2,new A.c1(B.aK,B.e,B.h,B.l,a2,B.p,a2,0,A.a([new A.qT(A.c(""+k,a2,a2,a2,a2,a2,a2,B.on,a2,a2,a2),D.lQ,a2,12,a2),B.ar,new A.bu(1,B.ba,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fOZ,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qO,a2,new A.bE(l,l,l,l),new A.bb(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cy,B.bg,a2,a2,a2),B.b_,B.j1,a2,new A.bf("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bM(!1,D.hfL,a2,a2,!0,a2,a2,a2,a0.gcZV(),a2,a2),a2,a2,a2))
w.push(B.O)
if(a0.as){u=D.lR.j(0.2)
q=A.n(16)
p=A.K(D.lR,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fQ,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.S,C.uG(v,a0.gqr(a0),B.cY,B.jE,D.fL)],t),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bH,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dv:B.cY.j(0.2)
g=new A.aP(16,16)
l=new A.ax(n.q(0,o)?B.fp:B.cY,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.y_:a2
t.push(new A.rn(new A.bq(0,i,u),new C.cHV(),A.aA(a2,A.p(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.H(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.agb,new A.o(h,a2,new A.bE(l,l,l,l),new A.bb(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jC,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cHW(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b_,B.mp,a2,new A.bf("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bZ(B.fV,t,B.br,a2,10,10))}return new C.tP(a1,A.cn(w,a2,a2,B.anS,a2,a2,B.ah,!1),B.fe,a2)}}
C.aAT.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a8(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.aIf.prototype={
aZ(){this.b7()
this.b5()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdR())
w.bd$=null
w.a2()}}
C.agy.prototype={
arV(d){},
asq(){var w=this,v=w.q8(new C.fdM(w))
v.fR(0)
w.Mq$!==$&&A.aS()
w.Mq$=v}}
C.aM4.prototype={
gbo3(d){var w=this.c
return B.a.aw(w,0,Math.min(this.d,w.length))},
Wt(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.cZ(E.a1j,new C.fo3(w))},
bu2(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.an5.prototype={
R(){return new C.an6(new C.anf(),A.a([],x.t),new A.eJ(0,$.az()),$,0,null,null)},
gd6(){return this.d}}
C.an6.prototype={
gNg(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bG8(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Nl(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqy(){var w=this.r
return w===$?this.r=new C.aM4(new C.bUO(this)):w},
gaqL(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gNg()[v].c)u.push(1)
return u.length},
gbnn(){var w=this.ghi(0)
return w.gzD()==null?"Elder":B.a.i(w.gzD().b)},
a_(){this.a3()
this.asq()},
t(){var w,v=this
v.gqy().t()
v.f.t()
w=v.Mq$
w===$&&A.d()
w.t()
w=v.qf$
w.V$=$.az()
w.W$=0
v.bxL()},
cOt(){var w=this
w.l(new C.bUL(w))
w.gqy().Wt(w.gNg()[w.x].a)},
LC(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqy()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qf$.a
v.ax=u
v.ay=u+1
v.l(new C.bUJ())
A.cz(B.hx,new C.bUK(v))},
brB(){var w=this.gaqL(0)/this.gNg().length*100
if(w>=90)return D.f8N
if(w>=75)return D.f6I
if(w>=60)return D.eXW
if(w>=45)return D.f0v
return D.eSb},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cwE()
w=A.bS(0,new A.e5(A.b4(m,m,m,new C.buR(n,n.qf$),B.az),m),0,0,0)
if(!n.Q){v=D.qO.j(0.96)
u=A.n(20)
t=A.K(B.cY,B.r,3)
u=A.p(m,A.x(A.a([A.c("Elder "+n.gbnn()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aYx,B.K,m,m),B.S,C.uG("Start the test",n.gCf(),B.cY,B.jk,D.fL)],x.p),B.l,m,B.e,B.M,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.m),m,m,m,m,B.bH,m,m,m)
v=u}else{v=n.x
u=n.gNg()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aYz,m,m,m)
if(n.Q){t=n.gqy()
t=t.d<t.c.length}else t=!1
if(t)u=D.fuu
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ax(D.Ch,4,B.r,-1)
s.push(A.aA(m,A.p(m,A.c(q[r],m,m,m,m,m,m,D.fFP,B.K,m,m),B.f,m,D.agb,new A.o(D.bje,m,new A.bE(o,o,o,o),new A.bb(p,p,p,p),m,m,B.m),m,m,m,m,B.Pc,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bUM(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bZ(B.fV,s,B.br,new A.bf("o"+t,x.W),8,8)}u=A.x(A.a([v,B.ak,A.oQ(u,B.n9,A.q8(),B.b_,B.b_,A.LX())],x.p),B.l,m,B.e,B.M,0,B.p)
v=u}return new C.tP("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fe,m)},
cwE(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.brB(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gNg()[v].c)g.push(v)
u=A.n(22)
t=A.K(B.cY,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fKp,B.K,i,i)
r=A.c("Signed by Elder "+j.gbnn(),i,i,i,i,i,i,D.fJ0,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fOj,i,i,i),D.eJJ],q)
o=A.c(h.b,i,i,i,i,i,i,D.fQi,i,i,i)
n=j.gaqL(0)
m=j.gNg()
u=A.p(i,A.x(A.a([D.h0K,B.au,s,r,B.S,new A.an(B.z,i,B.ad,B.t,p,i),o,B.ak,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.adb,i,i,i),B.O,D.auR],q),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(D.qO,i,t,u,i,i,B.m),i,i,i,i,B.f9,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aA,new C.II(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.hgP,B.O],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ax(B.bx,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([A.c(p.a,i,i,i,i,i,i,B.hh,i,i,i),B.au,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fLC,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fNV,i,i,i)],q),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.dv,i,new A.bE(k,k,k,k),new A.bb(r,r,r,r),i,i,B.m),i,i,i,B.cy,B.bg,i,i,i))}B.d.u(s,u)}s.push(B.aA)
s.push(A.at(C.uG("Back to the games",new C.bUF(j),B.cY,B.kk,D.fL),i,i,i))
return new C.tP("Village School",A.cn(s,i,i,B.bQ,i,i,B.ah,!1),B.fe,i)}}
C.buR.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qf$.a
a0.CB(e.f.N1(a1))
w=C.hls(a1)
v=a0.c
J.bs(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqy()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d1R[s]-6
$.T()
r=new A.as(B.T,B.Q,B.W,B.X,B.U)
r.r=D.GR.gp(0)
a0.aD(new A.a4(u,340,u+12,450),r)}u=A.by(D.ab7.cs(10),B.ii)
$.T()
r=A.L()
r.r=D.Ch.gp(0)
a0.aq(u,r)
r=A.by(D.ab7,B.iA)
u=A.L()
u.san(A.jP(new A.r(30,96),new A.r(420,346),D.dnc,f,B.x,f))
a0.aq(r,u)
q=new A.e1()
q.cT(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bY(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.as(B.T,B.Q,B.W,B.X,B.U)
r.r=B.c.j(0.025).gp(0)
a0.c1(o,r)}u=A.L()
u.r=I.akH.gp(0)
a0.aD(new A.a4(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aD(D.flQ,u)
u=A.L()
u.r=B.bM.gp(0)
a0.aD(D.flU,u)
u=A.by(D.flK,B.hq)
r=A.L()
r.r=D.a_G.gp(0)
a0.aq(u,r)
n=B.i.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqy().gbo3(0)
m=A.h2(f,B.cK,f,7,f,A.d3(f,f,f,f,f,f,f,f,f,D.fSB,u+(t?"|":"")),B.a7,B.ce,f,B.e5,B.cf)
m.nA(346)
J.bs(v.save())
u=A.hQ(D.ab7)
r=$.lD()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hQ(new A.a4(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.by(new A.a4(u,r,u+40,r+90),B.h2)
u=A.L()
u.r=D.bzr.gp(0)
a0.aq(r,u)}}else{m=A.h2(f,B.cK,f,f,f,D.fCg,B.K,B.ce,f,B.e5,B.cf)
m.nA(340)
m.a4(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqy().d*9,310)
k=Math.sin(p+r)
j=new A.as(B.T,B.Q,B.W,B.X,B.U)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghi(0).gzD()
i=(u==null?f:u.c)===D.oR?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.fdN(d,a0,i,t,h,D.eyb)),new A.y(520,new C.fdO(a0,d,t)),new A.y(575,new C.fdP(a0,d,t)),new A.y(585,new C.fdQ(this,a0,d,t)),new A.y(615,new C.fdR(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.fdS())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cej(d,e){var w,v,u,t,s,r,q,p=$.T(),o=A.a([],x.v),n=new A.aH(p.r,B.aj,null,null,o)
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
C.an3.prototype={
R(){return new C.an4(new C.anf(),A.S(x.S,x.i),new A.eJ(0,$.az()),$,0,null,null)},
gd6(){return this.d}}
C.an4.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hOW(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj_(){var w=this.z
return w===$?this.z=this.G2(0):w},
gaMN(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.G2(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cc(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.G2(0):r).length);++v}s.Q=w
r=w}return r},
G2(d){var w,v,u,t,s=this.gkR()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e3(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e1()
u.cT(this.a.e+d*7)
B.d.dX(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eH(u,new C.bUr())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
a_(){this.a3()
this.asq()},
t(){var w,v=this
v.e.t()
w=v.Mq$
w===$&&A.d()
w.t()
w=v.qf$
w.V$=$.az()
w.W$=0
v.bxK()},
arV(d){var w,v,u,t,s,r=this,q=r.gj_().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cc(u===$?r.z=r.G2(0):u,v)
s=r.gaMN()
s[v]=s[v]+(450*(t+0.5)/q-r.gaMN()[v])*Math.min(1,w)}},
d4k(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj_().length)return
w=v.y
if(w===-1){v.l(new C.bUC(v,d))
return}if(w===d){v.l(new C.bUD(v))
return}v.l(new C.bUE(v,B.d.cc(v.gj_(),v.y),d,B.d.cc(v.gj_(),d)))},
cPb(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.G2(0):u).length))break
t=s.gkR()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.G2(0):u)[v]]===v);++v}s.l(new C.bUx(s,B.d.cw(w,new C.bUy())))},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkR().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bUz(t,s))
w=5
return A.b(C.C7(t.a.d,s),$async$kM)
case 5:t.x=f
q=t.a
w=6
return A.b(C.C8(q.d,q.c.a,"lineup",t.r*10),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bUA())
w=1
break
case 4:t.l(new C.bUB(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.c(""+l.r+" of "+l.gkR().length+" lines right",k,k,k,k,k,k,B.qq,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tP("Line Up",A.cn(A.a([D.ah3,w,B.aO,new C.II(v,u,l.ch,k),B.aO,A.at(C.uG("Back to the games",new C.bUt(d),B.cY,B.kk,D.fL),k,k,k)],x.p),k,k,B.ae,k,k,B.ah,!1),B.fe,k)}w=A.a([],x.t)
for(t=0;v=l.gkR(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bUu(l))
u=A.bS(0,A.cf(new C.bUv(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aYz,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fKR,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fN8,B.K,k,k)],q),B.l,k,B.e,B.h,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.v.j(0.7)
o=A.n(16)
n=l.ax
m=A.K(n?D.lR:G.nF,B.r,2)
r.push(A.p(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.O(w,new C.bUw(l),x.cM).aL(0,", then ")+".",k,k,k,k,k,k,D.fPn,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.m),k,k,k,B.d7,B.bg,k,k,1/0))}if(!l.at)r.push(C.uG("That is my line!",l.gcPa(l),B.cY,B.hn,D.fL))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uG(w,l.gqr(l),B.cY,B.jE,D.fL))}return new C.tP("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.M,0,B.p),k,k,12,12,k,k)],q),k),B.fe,k)}}
C.ble.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qf$.a
c7.CB(c5.e.N1(c8))
w=C.hls(c8)
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
q.r=D.a_G.gp(0)
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
m.r=[B.cY,G.nF,D.lR,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b2x(c7,"OLDEST",D.ez9,B.cY)
this.b2x(c7,"YOUNGEST",D.eyC,B.bf)
t=A.by(D.flE,B.h2)
s=A.L()
s.r=D.GR.gp(0)
c7.aq(t,s)
s=A.by(D.flD,B.iA)
t=A.L()
t.r=D.Ch.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.dv0())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cc(a1===$?c5.z=c5.G2(0):a1,f)
o=c5.gaMN()[f]
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
a9.r=B.cY.j(0.22+0.1*Math.sin(e)).gp(0)
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
else b9=a3?D.eBd:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aOf
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.T4(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Kq,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.j8(new A.eE(a8,c4,c4,B.cX,c4,c4,c4,c4,c4,c4,D.fIv),B.a7,B.ce,new A.kw(1),"\u2026",c4,1,c4,B.cf,c4,B.cK)
c1.nA(q)
c2=A.by(A.bY(new A.r(o,650),24,c1.b.c+16),B.h2)
$.T()
a8=new A.as(B.T,B.Q,B.W,B.X,B.U)
if(a6)a9=B.iJ
else a9=a7?B.tj:D.qO
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.as(B.T,B.Q,B.W,B.X,B.U)
if(a6)a9=D.lR
else a9=a7?G.nF:D.lQ
a8.r=a9.gp(0)
a8.b=B.ac
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.r(o-a9/2,650-a8.gb8(a8)/2))
c3=new A.j8(new A.eE(""+(a2+1),c4,c4,B.cX,c4,c4,c4,c4,c4,c4,D.fIP),B.a7,B.ce,new A.kw(1),c4,c4,c4,c4,B.cf,c4,B.cK)
c3.eY()
c3.a4(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.bs(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bY(B.J,4,8)
$.T()
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=[B.cY,G.nF,D.lR,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aD(q,m)
v.restore()}v.restore()},
b2x(d,e,f,g){var w,v,u=null,t=A.h2(u,B.cK,u,u,u,A.d3(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Eb,u,u),e),B.a7,B.ce,u,B.e5,B.cf)
t.eY()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aI(0,new A.r(v/2,w.gb8(w)/2)))},
aC(d){return!1}}
C.a2J.prototype={
a9(){return"_Trip."+this.b}}
C.an_.prototype={
R(){return new C.an0(D.Yv,new A.eJ(0,$.az()),$,0,null,null)},
gd6(){return this.d}}
C.an0.prototype={
gDO(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bG8(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Nl(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqy(){var w=this.f
return w===$?this.f=new C.aM4(new C.bUd(this)):w},
gUs(){var w=this.ghi(0)
return w.gzD()==null?"Grandma":B.a.i(w.gzD().b)},
a_(){this.a3()
this.asq()},
t(){var w,v=this
v.gqy().t()
w=v.Mq$
w===$&&A.d()
w.t()
w=v.qf$
w.V$=$.az()
w.W$=0
v.bxJ()},
arV(d){var w,v,u,t=this
if(t.r!==D.aeW)return
w=B.dQ.aA(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDO()
if(v+1>=u.length){t.r=D.aeX
t.Xp()}else{++t.w
t.ay=!1
t.r=D.Yw
t.gqy().Wt(u[t.w].a)}if(t.c!=null)t.l(new C.bUb())}},
Xp(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Xp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqy().Wt("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDO().length
r=C.bIs(t,u.z,s)
u.as=r
w=2
return A.b(C.C7(u.a.d,r),$async$Xp)
case 2:u.at=e
s=u.a
w=3
return A.b(C.C8(s.d,s.c.a,"journey",u.x*10),$async$Xp)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bU5())
return A.h(null,v)}})
return A.i($async$Xp,v)},
bsV(){this.aVy()},
aVy(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.aeW
if(w.c!=null)w.l(new C.bU6())},
LC(d){var w,v,u,t,s=this
if(s.r!==D.Yw)return
w=s.gDO()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bUa(s,d,v))
u=s.gqy()
t=s.w
u.Wt(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cUm(){if(this.r!==D.BP)return
this.aVy()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.e5(A.b4(s,s,s,new C.bkE(t,t.qf$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDO().length;++w){v=t.w
if(w<v||t.r===D.aeX)v=B.cY
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.bu(1,B.ba,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bb(u,u,u,u),s,s,B.m),s,7,s,B.x6,s,s,s,s),s))}p.push(B.bb)
p.push(D.h2p)
return new C.tP("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.h,0,s,s),s,s,12,12,2,s),A.ao(10,t.coa(),s,s,10,10,s,s)],q),s),B.fe,s)},
coa(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bU9(o),l=D.qO.j(0.96),k=A.n(22),j=A.K(B.cY,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.c("A long drive to the village of Elder "+o.gUs()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aYx,B.K,n,n),B.S,C.uG("Start the journey",o.gbsU(),B.cY,D.bUf,D.fL)],x.p),B.l,n,B.e,B.M,0,B.p)
break
case 3:w=D.bfU
break
case 1:w=o.w
v=o.gDO()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ax(D.lQ,2.5,B.r,-1)
t.push(A.aA(n,A.p(n,A.c(r[s],n,n,n,n,n,n,D.aXT,B.K,n,n),B.f,n,D.agi,new A.o(D.alR,n,new A.bE(p,p,p,p),new A.bb(q,q,q,q),n,n,B.m),n,n,n,n,Z.x0,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bU7(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.O,A.bZ(B.bI,t,B.br,n,8,8)],u),B.B,n,B.e,B.M,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDO().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.O,new A.bK(B.a9,n,n,C.uG(v,o.gcUl(),B.cY,B.jE,D.fL),n)],x.p),B.B,n,B.e,B.M,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUs()),B.O,A.c(""+o.x+" of "+o.gDO().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aYa,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aS8(v)
u=C.aS8(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.adb,n,n,n))}w.push(B.O)
w.push(A.at(C.uG("Back to the games",new C.bU8(o),B.cY,B.kk,D.fL),n,n,n))
w=A.x(w,B.B,n,B.e,B.M,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aFp,n,B.m),n,n,n,n,B.bg,n,n,n)}}
C.bkE.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qf$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDO(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.aeW,d2=c7*0.5
c8=A.ap(D.bkL,D.bvF,d0)
c8.toString
w=A.ap(D.ZR,G.ajs,d0)
w.toString
v=A.ap(B.uO,D.bu_,d0)
v.toString
$.T()
u=A.L()
t=x.O
u.san(A.jP(B.J,new A.r(0,d2),A.a([c8,w,v],t),G.a5R,B.x,c3))
d3.aD(new A.a4(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.ws(s,60,A.a([D.buo,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.a_3.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dHH[o]
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
k.r=A.ap(l===0?D.bjh:D.byQ,D.bor,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cek(d3,new A.r(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.T()
w=A.L()
v=A.ap(D.al0,D.H5,d0)
v.toString
w.san(A.jP(new A.r(0,d2),new A.r(0,c7),A.a([v,D.buq],t),c3,B.x,c3))
d3.aD(new A.a4(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bnE.gp(0)
d3.aD(new A.a4(0,a0,c6,a1),w)
w=A.L()
w.r=D.byr.gp(0)
d3.aD(new A.a4(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.as(B.T,B.Q,B.W,B.X,B.U)
u.r=I.NG.gp(0)
d3.aD(new A.a4(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.T()
b2=new A.as(B.T,B.Q,B.W,B.X,B.U)
b2.r=D.biW.gp(0)
d3.aD(new A.a4(b0,v,b0+52,u),b2)
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
b0.r=D.bwy.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.as(B.T,B.Q,B.W,B.X,B.U)
b1.r=D.fL.gp(0)
d3.aD(new A.a4(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.as(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.GR.gp(0)
d3.aD(new A.a4(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.by(new A.a4(b0,a4,b0+60,a5),B.jJ)
b0=new A.as(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.bzX.gp(0)
d3.aq(b5,b0)
b0=new A.as(B.T,B.Q,B.W,B.X,B.U)
b0.r=D.Ch.gp(0)
b0.b=B.ac
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.j8(new A.eE(b6,c3,c3,B.cX,c3,c3,c3,c3,c3,c3,D.fGV),B.a7,B.ce,new A.kw(1),c3,c3,c3,c3,B.cf,c3,B.cK)
b7.eY()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.r(b4-b1/2,a2-b0.gb8(b0)/2))
if(a7)b8=c4.r===D.aeX
else if(r===c4.w){b0=c4.r
b0=b0===D.Yw||b0===D.BP
b8=b0}else b8=!1
if(a7){b0=c4.ghi(0).gzD()
b9=(b0==null?c3:b0.c)===D.oR?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqy()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.BP
b0=c0?C.hKV(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Yw?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.T4(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bK7(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.T()
t=new A.as(B.T,B.Q,B.W,B.X,B.U)
t.r=D.bxV.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Yv)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.T()
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.BP&&c4.ax){b7=A.h2(c3,B.cK,c3,c3,c3,A.d3(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.cY,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,Ae.Jq,c3,c3),"BEEP BEEP!"),B.a7,B.ce,c3,B.e5,B.cf)
b7.eY()
b7.a4(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cek(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.btU,D.bmX,g)
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
t.r=D.a0c.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d63[r]
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=D.a0c.gp(0)
p.c=4
p.d=B.bF
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a7(0,D.eBa)
$.T()
v=A.L()
v.r=D.biY.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bY(e.a7(0,D.eBb),16,60)
w=A.L()
w.r=o.gp(0)
d.c1(v,w)}},
bK7(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Yv?0.045:0,a1=a2.c
J.bs(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jr(0,a0)
for(w=0;w<2;++w){v=D.dzo[w]
u=d.ay&&d.r!==D.Yv&&v>0
J.bs(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.T()
s=new A.as(B.T,B.Q,B.W,B.X,B.U)
s.r=D.byH.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.as(B.T,B.Q,B.W,B.X,B.U)
s.r=D.bqB.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.as(B.T,B.Q,B.W,B.X,B.U)
q.r=B.bk.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.rb(D.fm0,B.h2,B.h2,B.i6,B.hS)
$.T()
t=A.L()
t.san(A.jP(D.exh,B.aa1,D.doB,G.a5R,B.x,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.as(B.T,B.Q,B.W,B.X,B.U)
s.r=D.die[B.o.F(o,4)].gp(0)
a2.aD(new A.a4(t,-26,t+10,-19),s)}n=d.r===D.BP&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a4(s,-66,q,-36)
J.bs(a1.save())
a1.clipRRect(A.nb(A.by(l,B.qg)),$.mQ(),!0)
k=new A.as(B.T,B.Q,B.W,B.X,B.U)
k.r=D.ZR.gp(0)
a2.aD(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.BP?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.T4(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aO6,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.by(l,B.qg)
i=new A.as(B.T,B.Q,B.W,B.X,B.U)
i.r=D.alT.gp(0)
i.b=B.ac
i.c=2
a2.aq(j,i)}d=A.by(D.VS,B.qg)
t=A.L()
t.r=D.ZR.gp(0)
a2.aq(d,t)
J.bs(a1.save())
a1.clipRRect(A.nb(A.by(D.VS,B.qg)),$.mQ(),!0)
C.T4(a2,new A.r(D.VS.gbD().a,-10),0,0,0.7,-0.1,f,f,D.aO6,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.by(D.VS,B.qg)
d=A.L()
d.r=D.alT.gp(0)
d.b=B.ac
d.c=2
a2.aq(t,d)
d=A.L()
d.r=AE.CG.gp(0)
a2.O(D.ezp,4,d)
d=A.L()
d.r=D.GR.gp(0)
a2.aD(D.fn9,d)
for(w=0;w<3;++w){v=D.dzq[w]
d=A.by(new A.a4(v,-96,v+28,-79),B.jJ)
t=new A.as(B.T,B.Q,B.W,B.X,B.U)
t.r=D.H5.gp(0)
a2.aq(d,t)}a1.restore()},
aC(d){return!1}}
C.aCK.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a8(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bib.prototype={}
C.aCM.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a8(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bic.prototype={}
C.aCN.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a8(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bid.prototype={}
C.a7f.prototype={
B(d){var w=null
return new A.a6(1/0,this.c,A.b4(w,w,w,new C.bkL(w),B.az),w)}}
C.bkL.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dxe[B.o.F(n,6)]
k=$.T()
j=new A.as(B.T,B.Q,B.W,B.X,B.U)
j.r=l.gp(0)
d.aD(new A.a4(m,0,m+v,u),j)
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
B(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,Ag.Ra,w,w,w,new C.bU4(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fE9,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c5(w,D.ZB,A.p(w,A.bo(!0,A.x(A.a([D.c9k,new A.D(D.bL6,A.A(u,B.l,w,B.e,B.h,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.bb9,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.II.prototype={
B(d){var w=null,v=this.d,u=C.aS8(v),t=C.itO(v),s=B.c.j(0.08),r=A.n(18),q=A.K(B.cY.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fGG,w,w,w)],x.p)
if(this.e)p.push(D.eDC)
p.push(B.ak)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.hh,w,w,w))
if(t!=null)p.push(new A.D(B.v7,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Fv,w,w,w),w))
return A.p(w,A.x(p,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.m),w,w,w,w,B.bH,w,w,w)}}
C.WQ.prototype={
R(){return new C.bnz(A.S(x.N,x.S),B.o.F(Date.now(),1e5))},
d0l(d){return this.f.$1(d)},
ge9(){return this.d}}
C.bnz.prototype={
gTt(){var w=this.d
return w===$?this.d=this.a.c:w},
a_(){this.a3()
this.Q3()},
Q3(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Q3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bUQ(u.a.d),$async$Q3)
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
return A.b(C.bUP(p,(o===$?u.d=q.c:o).a,r),$async$Q3)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e5x(u,n))
return A.h(null,v)}})
return A.i($async$Q3,v)},
uF(d){return this.crg(d)},
crg(d){var w=0,v=A.j(x.H),u=this,t
var $async$uF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a8(t,!1).cb(A.ea(new C.e5y(d),!1,null,x.H)),$async$uF)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Q3()
return A.h(null,v)}})
return A.i($async$uF,v)},
gb7Y(){var w,v,u,t=C.Nl(this.gTt()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a3b(d){return this.cyA(d)},
cyA(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a3b=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d0l(r),$async$a3b)
case 2:if(u.c!=null)u.l(new C.e5z(u,r))
return A.h(null,v)}})
return A.i($async$a3b,v)},
Pn(d){return this.bSW(d)},
bSW(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Pn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hnQ(t.gTt())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.N4("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a8(s,!1).cb(A.ea(new C.e5v(q),!1,null,r)),$async$Pn)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bl(j,new C.e5w(p))
o=s.length
B.d.cd(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a3b(A.cS(s,0,A.dv(2,"count",x.S),r).dk(0)),$async$Pn)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pn,v)},
Yl(d,e){return this.bQv(0,e)},
bQv(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Yl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.ce(null,null,!0,null,new C.e5u(e),o,null,!0,!0,x.y),$async$Yl)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hnQ(u.gTt()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a3b(o),$async$Yl)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Yl,v)},
aaY(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e5r(this,j):h
o=o?0.55:1
w=A.ap(g,B.v,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.n(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.aa(0,B.H,g.j(0.35),B.cw,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.WG,p,p,p),B.aY],s)
q=A.n(10)
r.push(A.p(p,A.c(i,p,p,p,p,p,p,D.fF3,p,p,p),B.f,p,p,new A.o(B.i_,p,p,q,p,p,B.m),p,p,p,p,B.zz,p,p,p))
return A.aA(p,A.d2(A.p(p,A.x(A.a([A.A(r,B.l,p,B.e,B.h,0,p,p),B.aY,A.c(e,p,2,p,p,p,p,D.fN1,p,p,p),B.cN,A.c(f,p,3,B.a2,p,p,p,D.fFN,p,p,p)],s),B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a7(B.ay,B.aD,B.x,w,p,p),B.m),p,p,p,p,B.wZ,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
XP(d,e,f,g,h,i){return this.aaY(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Nl(s.gTt()),p=s.gTt(),o=C.aS8(s.e),n=C.hnQ(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e5A(s),k=C.hOW(p,1).length,j=C.hP6(p,1).length,i=C.hQ0(p,1).length,h=B.c.j(0.07),g=A.n(20),f=A.K(B.cY.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,K.acZ,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fKt,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.A(A.a([e,B.bc,A.E(A.x(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.WX,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),1),A.x(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qq,r,r,r),D.h8L],a1),B.l,r,B.e,B.h,0,B.p)],a1),B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.m),r,r,r,r,B.bH,r,r,r)
f=s.XP("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aC,new C.e5B(s,p),l.$1("kahoot"))
h=s.XP("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lQ,new C.e5C(s,p),l.$1("fire"))
a0=s.XP("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wM,new C.e5D(s,p),l.$1("catch"))
j=j!==0?new C.e5G(s,p):r
j=s.aaY("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hX,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e5H(s,p):r
i=s.aaY("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lP,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.XP("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.fu,new C.e5I(s,p),l.$1("journey"))
k=k!==0?new C.e5J(s,p):r
k=A.a([g,B.aO,D.hcQ,B.O,A.lc(0.98,A.a([f,h,a0,j,i,e,s.aaY("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.es,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.XP("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.dd,new C.e5K(s,p),l.$1("school"))],a1),2,12,12,r,B.e8,!0),B.dh,A.A(A.a([D.bMW,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fF8,r,r,r)],a1),B.l,r,B.e,B.h,0,r,r),B.O],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ax(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fUb,B.bc,new A.bu(1,B.ba,A.x(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hs,r,r,r),A.c(""+v.gaqp(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.Fv,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),r)],a1)
if(v.gaqp(0).length>=2){f=D.lR.j(0.2)
t=new A.ax(D.lR,1,B.r,-1)
g.push(A.aA(r,A.p(r,A.W(B.fO,D.lR,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e5L(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cY.j(0.2)
t=new A.ax(B.cY,1,B.r,-1)
f=A.aA(r,A.p(r,A.W(B.jk,B.cY,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e5M(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fp.j(0.2)
t=new A.ax(B.fp,1,B.r,-1)
B.d.u(g,A.a([B.bb,f,B.bb,A.aA(r,A.p(r,A.W(B.eq,B.fp,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e5N(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.c1(B.aK,B.e,B.h,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bE(u,u,u,u),new A.bb(h,h,h,h),r,r,B.m),r,r,r,B.d7,B.bg,r,r,r))}if(s.a.e){j=m?new C.e5E(s):new C.e5F(a2)
i=A.n(18)
h=A.K(m?B.cY:B.aT,B.r,2)
g=m?B.cY.j(0.12):B.dv
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.p(r,A.at(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.cY:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.m),r,r,r,r,B.P1,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.hdM)
k.push(B.aA)
k.push(D.auR)
return new C.tP("Family Games \xb7 "+p.b,A.cn(k,r,r,D.bH6,r,r,B.ah,!1),B.fe,r)}}
C.a0B.prototype={
a9(){return"_KPhase."+this.b}}
C.an1.prototype={
R(){return new C.an2(D.b2M)},
gd6(){return this.e}}
C.an2.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fR(d){var w,v=this
v.l(new C.bUp(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.cZ(B.fv,new C.bUq(v))},
aR_(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.l(new C.bUf(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.cZ(B.fn,new C.bUg(w))},
LC(d){var w
if(this.d!==D.aer)return
w=this.at
if(w!=null)w.a1(0)
this.b7U(d)},
b7U(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.S(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bUl(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cz(B.tq,v.giA(v))},
cNN(d){var w=this
if(w.d!==D.Y1)return
if(w.e+1>=w.a.w.length)w.Z7()
else{w.l(new C.bUm(w))
w.aR_()}},
Z7(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Z7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bIs(p,u.w,t)
u.l(new C.bUi(u,s))
w=2
return A.b(C.C7(u.a.e,s),$async$Z7)
case 2:r=e
t=u.a
w=3
return A.b(C.C8(t.e,t.f,t.r,u.f),$async$Z7)
case 3:q=e
if(u.c!=null)u.l(new C.bUj(u,r,q))
return A.h(null,v)}})
return A.i($async$Z7,v)},
cOC(){var w,v,u,t,s=this,r=s.a,q=new A.e1()
q.cT(r.w.length*31+B.a.gZ(r.f))
w=s.a.w.length*900
v=A.a([new A.b0("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.dX(r,q)
for(r=A.cS(r,0,A.dv(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bQ(r,r.gJ(0),u.k("bQ<aj.E>")),u=u.k("aj.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b0(t,B.i.S(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bUn())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b2M===r){w=A.a([D.h99,B.S,A.c(s,t,t,t,t,t,t,B.X6,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fFg,t,t,t))
w.push(B.aA)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.Bz,B.K,t,t))
w.push(B.ec)
w.push(C.uG("Play",u.gf1(u),B.cY,B.fO,D.fL))
w=A.at(new A.D(B.eI,A.x(w,B.l,t,B.e,B.M,0,B.p),t),t,t,t)
break A}if(D.b2N===r){w=A.at(A.c(""+u.z,t,t,t,t,t,t,D.fNA,t,t,t),t,t,t)
break A}if(D.aer===r||D.Y1===r){w=u.ctV()
break A}if(D.b2O===r){w=u.cel()
break A}w=t}return new C.tP(s,w,B.fe,t)},
ctV(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Y1,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aXJ,j,j,j),B.aY],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.LK,j,j,j))
g.push(B.ar)
f=A.n(14)
g.push(A.p(j,A.c(""+k.f,j,j,j,j,j,j,B.iS,j,j,j),B.f,j,j,new A.o(B.bx,j,j,f,j,j,B.m),j,j,j,j,A6.D1,j,j,j))
g=A.A(g,B.l,j,B.e,B.h,0,j,j)
f=A.n(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.jD(B.bx,j,k.as<5?B.fp:B.cY,9,j,w,j),B.aq)
w=A.n(22)
v=A.K(B.cY,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.lR:G.nF,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.O,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fEi,B.K,j,j)],h),B.l,j,B.e,B.M,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fPM,B.K,j,j)
w=A.E(A.p(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.qO,j,v,w,j,j,B.m),j,j,j,j,B.f9,j,j,1/0),3)
v=A.a([],h)
for(u=k.giA(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bUk(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aF1[o]
m=new A.aP(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aFl[o],j,j,j,j,j,j,D.fGg,j,j,j),B.ar,new A.bu(1,B.ba,A.c(r[t],j,3,B.a2,j,j,j,D.fFd,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(R.atk)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c0T)
v.push(A.aA(j,new A.Tk(A.p(j,new A.c1(B.aK,B.e,B.h,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bE(l,l,l,l),new A.bb(m,m,m,m),A_.aDq,j,B.m),j,j,j,j,B.f2,j,j,j),p,B.b_,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.ak,f,B.af,w,B.af,A.E(A.lc(1.45,v,2,10,10,j,B.e8,!1),4)],h)
if(i)h.push(D.eCR)
return new A.D(B.a1S,A.x(h,B.l,j,B.e,B.h,0,B.p),j)},
cel(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cOC(),m=x.p,l=A.a([D.bfa,A.at(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qq,o,o,o),o,o,o),A.at(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.WL,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cY.j(0.25):B.dv
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.cY:B.bx,1,B.r,-1)
q=A.c(w<3?D.doS[w]:""+(w+1),o,o,o,o,o,o,B.m8,o,o,o)
s=s?B.u:B.P
l.push(A.p(o,new A.c1(B.aK,B.e,B.h,B.l,o,B.p,o,0,A.a([new A.a6(34,o,q,o),new A.bu(1,B.ba,A.c(t.a,o,o,o,o,o,o,new A.H(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.iS,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bE(r,r,r,r),new A.bb(u,u,u,u),o,o,B.m),o,o,o,B.cy,B.eX,o,o,o))}l.push(B.S)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.II(m,v,p.CW,o))
l.push(B.aO)
l.push(A.at(C.uG("Back to the games",new C.bUh(p),B.cY,B.kk,D.fL),o,o,o))
return A.cn(l,o,o,B.f9,o,o,B.ah,!1)}}
C.Uu.prototype={
R(){return new C.amZ(A.S(x.de,x.er))}}
C.amZ.prototype={
gDt(){var w,v=this,u=v.d
if(u===$){w=C.htP(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
glX(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDt().b
v=$.az()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.bd(w,B.b6,B.aP),v)}return t},
cht(d){return this.f.c_(0,d,new C.bTQ(d))},
a_(){this.a3()
var w=this.gDt().c
if(w.length===0)w.push(C.hfb(null,0,20,""))},
t(){var w,v,u=this.glX(0)
u.V$=$.az()
u.W$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aR(u.d);w.C();){v=w.gP(w)
v.V$=$.az()
v.W$=0}this.a2()},
cND(){if(this.gDt().c.length>=12)return
this.l(new C.bTR(this))},
jI(d){var w,v,u=this,t=u.gDt()
t.b=B.a.i(u.glX(0).a.a)
w=t.gaqp(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.T(D.fxe)
return}v=t.c
B.d.a5(v)
B.d.u(v,w)
v=u.c
v.toString
A.a8(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bU0(),r=x.p,q=A.a([A.bM(!1,D.fZj,t,t,!0,t,t,t,u.gbrM(u),t,t)],r),p=A.a([D.hdn,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glX(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.al,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ae,t,t,t,t,t,t,t,t,t,t,t,B.hh,!0,B.a7,t,B.ao,t,t,t,t),B.aA],r)
for(w=0;v=u.gDt().c.length,w<v;++w)B.d.u(p,A.a([new A.fm(new C.bU_(u,w,s),t)],r))
if(v<12)p.push(A.at(C.uG("\uff0b Add a question",u.gcNC(),B.aT,t,B.c),t,t,t))
return new C.tP("Make your game",A.cn(p,t,t,D.bH3,t,t,B.ah,!1),q,t)}}
C.as7.prototype={
R(){return new C.aGj(A.a([],x._))},
bw(){return this.r.$0()},
qs(){return this.w.$0()},
ge9(){return this.c}}
C.aGj.prototype={
a_(){var w,v
this.a3()
this.wE()
w=this.a
v=w.c
if(v.length!==0)C.a9_(v,w.e,w.d.w)},
wu(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hqG(r,t.e,!1,s.w,new C.e7c(u),null,s),$async$wu)
case 2:w=3
return A.b(u.wE(),$async$wu)
case 3:return A.h(null,v)}})
return A.i($async$wu,v)},
a1n(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1n=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hqG(r,t.e,!0,s.w,new C.e7b(u),null,s),$async$a1n)
case 2:w=3
return A.b(u.wE(),$async$a1n)
case 3:return A.h(null,v)}})
return A.i($async$a1n,v)},
wE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BC(q.a.c),$async$wE)
case 7:p=e
if(q.c!=null)n=q.e||J.cL(p)
else n=!1
if(n)q.l(new C.e7e(q,p))
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
return A.b(C.HD(q.a.c).de(0,B.r_),$async$wE)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.e7f(q,o))
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
if(q.c!=null&&q.e)q.l(new C.e7g(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wE,v)},
PJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$PJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.T(D.fwP)
w=3
return A.b(C.HD(t.a.c),$async$PJ)
case 3:r=e
w=4
return A.b(C.h4C(t.a.c,r),$async$PJ)
case 4:q=e
w=5
return A.b(C.HD(t.a.c),$async$PJ)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.e7a(t,p))
o=t.c.K(s).f
s=A.c(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b3(null,null,null,q?B.dS:B.d6,null,B.t,null,s,null,B.lw,null,null,null,null,null,null,null,null,null,null))
t.a.qs()
case 1:return A.h(u,v)}})
return A.i($async$PJ,v)},
IQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iCf(l),$async$IQ)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.i4u(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b2D(q,p.e,l,"Each family tree costs $"+B.i.a6(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IQ)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hL4(r)
o=Date.now()
n=t.a.c
m=new C.lb(l,r.toUpperCase(),p,!0,B.Z,D.Ek,new A.V(o,0,!1),0,n,D.vf,B.ck)
w=5
return A.b(C.a4D(n,m),$async$IQ)
case 5:w=6
return A.b(t.wE(),$async$IQ)
case 6:t.a.bw()
t.a.qs()
if(t.c==null){w=1
break}t.Fm(m)
case 1:return A.h(u,v)}})
return A.i($async$IQ,v)},
Fm(d){return this.cms(d)},
cms(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Fm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.BC(u.a.c),$async$Fm)
case 2:n=l.nK(k.dM(f,new C.e7d(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hM(m,new C.as1(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Fm)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a4D(u.a.c,o),$async$Fm)
case 6:case 5:w=7
return A.b(u.wE(),$async$Fm)
case 7:u.a.qs()
return A.h(null,v)}})
return A.i($async$Fm,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=new C.ur(p)
if(r.e)return A.at(A.ng(q,p?B.bu:B.bk,q,q,q,q,q,q,q,q),q,q,q)
if(J.cv(r.d)){w=p?B.el:B.c
v=A.n(15)
u=A.aG(!1,B.a3,!0,q,A.aM(!1,q,!0,A.p(q,D.bZo,B.f,q,q,new A.o(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cJ,!0,q,q,q,q,q,q,q,q,q,q,q,r.gclt(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.GE(A.p(q,A.x(A.a([u,B.aO,t,B.O,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bk,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.ec,A.bI(D.hgF,q,r.gaUk(),A.bp(B.bR,q,q,q,q,q,Ak.a2f,q,new A.b9(A.n(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.h,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.m),q,q,q,q,D.bJP,q,q,1/0),15,B.ag,1.05,D.aee,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aY],v)
if(J.cL(r.d))w.push(A.aI(q,q,q,q,A.W(B.Ae,B.aV,q,q,q,q),q,q,q,new C.e7i(r),q,q,q,q,"Sync family trees with database",q))
if(J.cL(r.d))w.push(A.aI(q,q,q,q,A.W(B.Aa,B.aV,q,q,q,q),q,q,q,r.gahS(),q,q,q,q,"Transfer / backup file",q))
w.push(A.db(E.auf,q,D.fWz,r.gaUk(),A.bp(B.bR,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.h,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.GE(r.cJL(J.t(r.d,s),o),14,B.ag,1,D.aee,q))
B.d.u(w,u)}return A.x(A.a([p,B.aA,A.x(w,B.l,q,B.e,B.h,0,B.p)],v),B.B,q,B.e,B.h,0,B.p)},
cJL(d,e){var w=null,v=e.a,u=v?B.el:B.c,t=A.n(14),s=A.K((v?B.en:B.bO).j(0.55),B.r,1),r=A.a([new A.aa(0,B.H,B.v.j(v?0.35:0.08),B.eC,10)],x.V),q=A.n(14),p=A.p(w,D.bYt,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.n(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.garp(),m=d.d?"":" \xb7 Public",l=d.y===D.l7?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bw,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bk,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.B,w,B.e,B.h,0,B.p),1)
return A.p(w,A.aG(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bH,A.A(A.a([p,B.bc,l,A.W(B.PV,v?B.bu:B.bk,w,w,w,w)],k),B.l,w,B.e,B.h,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e7h(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.as1.prototype={
R(){return new C.aGg(A.a([],x._),A.aQ(x.N),A.bbp())},
bw(){return this.r.$0()},
ge9(){return this.c}}
C.aGg.prototype={
a_(){var w,v,u=this
u.a3()
u.d=u.a.w
u.aer()
w=u.a
v=w.c
if(v.length!==0)C.a9_(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.az()
w.W$=0
this.a2()},
a4n(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4n=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yK("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e6D(r),s,null,!0,!0,x.y),$async$a4n)
case 3:if(e!==!0||t.c==null){w=1
break}t.Kw()
t.l(new C.e6E(t,r))
w=4
return A.b(t.uB(),$async$a4n)
case 4:t.a.bw()
t.yK(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a4n,v)},
czb(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.U$.push(new C.e6y(w,f,d,e))},
aWE(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dy()
u.ei(w,v,0,1)
u.k0(q,q,1,1)
this.w.sp(0,u)},
bez(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eQ(new Float64Array(16))
q.ed(r)
w=q.Dy()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dy()
t.ei(r,u,0,1)
t.k0(v,v,1,1)
t.ei(-r,-u,0,1)
t.iX(0,q)
s.sp(0,t)},
aer(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aer=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.BC(u.a.c),$async$aer)
case 2:t=s.nK(r.dM(e,new C.e6_(u)))
if(t!=null&&u.c!=null)u.l(new C.e60(u,t))
return A.h(null,v)}})
return A.i($async$aer,v)},
yK(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
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
return A.b(C.hqG(o,t,!1,r,new C.e6h(u),q.a,s),$async$wu)
case 2:n=A
m=J
w=3
return A.b(C.HD(u.a.c),$async$wu)
case 3:p=n.nK(m.dM(e,new C.e6i(u)))
if(p!=null&&u.c!=null)u.l(new C.e6j(u,p))
return A.h(null,v)}})
return A.i($async$wu,v)},
Kw(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cJ(w,0)},
uB(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a4D(t,s),$async$uB)
case 2:return A.h(null,v)}})
return A.i($async$uB,v)},
a2T(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2T=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uH(q,t.a.c)){t.yK("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iDs(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2T)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Kw()
t.l(new C.e6x(t,r))
w=4
return A.b(t.uB(),$async$a2T)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2T,v)},
b4y(){var w=this.c
w.toString
A.a8(w,!1).cb(A.ea(new C.e6e(this),!1,null,x.H))},
a1A(){return this.cmu()},
cmu(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1A=A.e(function(d,e){if(d===1)return A.f(e,v)
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
q=new A.X(s,new C.e6u(),A.U(s).k("X<1>")).gJ(0)
s=A.ez([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("ci.E"))
B.d.fd(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e6v(n,t,new C.ur(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1A)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Kw()
t.l(new C.e6w(t,o))
w=6
return A.b(t.uB(),$async$a1A)
case 6:case 5:if(o.a&&t.c!=null)t.b4y()
case 1:return A.h(u,v)}})
return A.i($async$a1A,v)},
X8(d){return this.bFm(d)},
bFm(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uH(r,t.a.c)){t.yK("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e5O(t,d),r,null,!0,!0,x.P),$async$X8)
case 3:s=f
if(s==null){w=1
break}t.Kw()
t.l(new C.e5P(t,s))
w=4
return A.b(t.uB(),$async$X8)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X8,v)},
a4I(d){return this.cM1(d)},
cM1(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4I=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.Q(s)
t=u.c
t.toString
w=2
return A.b(A.ce(null,null,!0,null,new C.e6G(u,d,new C.ur(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4I)
case 2:return A.h(null,v)}})
return A.i($async$a4I,v)},
ciG(d){var w=this,v=w.d
v===$&&A.d()
if(C.uH(v,w.a.c))w.Po(d)
else w.a4I(d)},
akn(d,e){return this.cDe(d,e)},
cDe(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$akn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.Q(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.e6A(new C.ur(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$akn)
case 3:case 1:return A.h(u,v)}})
return A.i($async$akn,v)},
IV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.l7?3:5
break
case 3:w=6
return A.b(C.hdn(t.a.c),$async$IV)
case 6:s=e
o=t.a
r=C.hyG(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.akn(!s,!r),$async$IV)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aSd(o,t.a.c)){t.yK("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lC(o,"Cancel","Remove",q.y===D.l7?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IV)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aSb(t.a.c,t.d.a),$async$IV)
case 11:t.a.bw()
o=t.c
if(o==null){w=1
break}A.ji(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IV,v)},
abU(d){return this.bQM(d)},
bQM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$abU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uH(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aR(s,new C.e5Q(p))){o=A.U(s)
p.a=A.nK(new A.cM(new A.X(s,new C.e5R(d),o.k("X<1>")),new C.e5S(),o.k("cM<1,m>")))}q=p.a
if(q==null)q=d.d
t.Kw()
t.l(new C.e5T(t,s,d,q))
w=3
return A.b(t.uB(),$async$abU)
case 3:t.yK(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$abU,v)},
Po(d){return this.bT_(d)},
bT_(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Po=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uH(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4I(d),$async$Po)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.e5X(t,d),r,null,!0,!0,x.P),$async$Po)
case 6:s=f
if(s==null){w=1
break}t.Kw()
t.l(new C.e5Y(t,s))
w=7
return A.b(t.uB(),$async$Po)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Po,v)},
cKc(){var w=this,v=w.d
v===$&&A.d()
if(!C.uH(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.e6F(w))
w.uB()},
a_c(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aSd(n,t.a.c)){t.yK("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.Q(n)
s=$.az()
r=new A.au(B.ax,s)
q=t.d.e
p=A.bt(new A.O(q,t.gch8(),A.U(q).k("O<1,m>")).c0(0,new C.e69()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e6a(t,new C.ur(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_c)
case 3:o=e
r.V$=s
r.W$=0
if(o!==!0||t.c==null){w=1
break}t.Kw()
t.l(new C.e6b(t,p))
w=4
return A.b(t.uB(),$async$a_c)
case 4:t.yK("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_c,v)},
ch9(d){return B.a.i(d.toLowerCase())},
cld(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uH(v,w)
t=r.d
s=C.ish(t)
C.iCj(q,t.b,u,C.isg(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.ur(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.X(l,new C.e6N(),A.U(l).k("X<1>")).gJ(0)
l=n?B.c5:B.hW
v=A.W(B.a3p,n?B.bu:B.bk,o,o,o,18)
u=x.p
v=A.a([new A.D(A3.D2,A.aM(!1,o,!0,new A.D(B.hK,A.A(A.a([v,B.bb,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bk,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.M,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e6O(p,d),o,o,o,o,o,o,o),o),new A.D(B.nZ,p.c3d(m),o)],u)
if(p.d.y===D.l7){t=B.tX.j(0.15)
s=A.n(12)
r=A.K(B.tX.j(0.45),B.r,1)
q=C.HB(p.d,p.a.c)
v.push(new A.D(B.zr,A.p(o,A.A(A.a([D.c33,B.ar,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.m),o,o,o,o,B.hy,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,15,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY],u)
if(C.uH(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GP("Undo",B.pZ,p.gcKb(),m,o,o))
u.push(new C.GP("Family Book",D.bT5,p.gclc(),m,B.uP,o))
u.push(new C.GP("Family games",B.o7,p.gclo(),m,B.aC,o))
if(C.uH(p.d,p.a.c))u.push(new C.GP("Display settings",B.DR,p.gcmt(),m,B.b5,o))
u.push(new C.GP("Sync",B.Aa,p.gahS(),m,o,o))
t=p.d
if(t.y===D.l7||C.aSd(t,p.a.c)){t=p.d.y===D.l7?"Remove shared tree":"Delete tree"
u.push(new C.GP(t,B.eq,p.gbQW(),m,B.fp,o))}if(C.uH(p.d,p.a.c))u.push(new C.GP("Add member",B.xm,new C.e6P(p),m,B.bR,o))
v.push(new A.D(U.anT,A.A(u,B.l,o,B.e,B.h,0,o,o),o))
if(p.d.garp()===0){u=A.at(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bk,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cf(new C.e6Q(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.W(n?P.a3t:Ad.PW,o,o,o,o,o)
v.push(A.at(A.hv(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e6R(p),o),o,o,o))}return A.c5(o,l,A.bo(!0,A.x(v,B.B,o,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c3d(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.n(22)
v=A.a([new A.aa(0,B.H,B.h6.j(0.35),B.ds,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.W(B.A2,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a3,!0,m,A.aM(!1,m,!0,A.p(m,D.c6r,B.f,m,m,new A.o(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cJ,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahS(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fHk,m,m,m)
r=r.garp()
p=n.d.garp()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bw,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.B,m,B.e,B.h,0,B.p),1)],o)
if(C.uH(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c3i,m,m,m,n.gcwt(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.h,0,m,m)
r=n.d.d
q=r?B.jF:B.nh
r=r?"Private":"Public"
r=A.E(n.axY(q,"Privacy",r,n.a.d.w?n.gcJ3():m),1)
q=A.E(n.axY(B.xr,"Tree code",n.d.c,new C.e5Z(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.aa,q,B.aa,A.E(n.axY(D.bUN,"Collaborators",p,n.gc8d()),1)],o),B.l,m,B.e,B.h,0,m,m)],o)
if(n.d.y===D.l7){s=B.c.j(0.15)
B.d.u(p,A.a([B.O,A.aG(!1,B.a3,!0,A.n(999),A.aM(!1,A.n(999),!0,new A.D(B.fD,A.A(A.a([A.W(B.o8,B.c,m,m,m,14),B.e3,A.c("View only",m,m,m,m,m,m,B.acF,m,m,m)],o),B.l,m,B.e,B.M,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.bx(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.HG,A.x(p,B.B,m,B.e,B.h,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.caN,B.m),m,m,m,m,m,m,m,1/0)},
axY(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a3,!0,A.n(14),A.aM(!1,A.n(14),!0,new A.D(K.apc,A.x(A.a([A.W(d,B.c,w,w,w,18),B.au,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rF,A.c(f,w,1,B.a2,w,w,w,AF.y1,w,w,w)],x.p),B.l,w,B.e,B.h,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bif.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gar(r)&&s.c.length===0)return B.bL
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bii(s,t),new A.av(w,v))],x.p)
r=r.gdS(r)
B.d.u(u,r.dP(r,new C.dkb(this),x.l))
r=s.c
B.d.u(u,new A.O(r,new C.dkc(this),A.U(r).k("O<1,w>")))
return new A.D(B.vb,new A.a6(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.L9.prototype={}
C.GT.prototype={}
C.bih.prototype={
gbn9(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aLZ.prototype={}
C.bii.prototype={
bSB(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.T()
v=A.L()
v.r=B.bB.j(0.75).gp(0)
v.c=2
v.d=B.bF
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aH(q.r,B.aj,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.i6(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.i6(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bA())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bB.gp(0)
d.af(t,q)},
bSy(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.dkw())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aR(a0,new C.dkx(f))
t=new A.O(a0,new C.dky(f),A.U(a0).k("O<1,G>")).c0(0,new C.dkz()).cD(0,1/0,B.pt)
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
w.e=B.dP
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bSy(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bSB(d,w,r.a,r.b)}},
aC(d){return d.b!==this.b}}
C.bm5.prototype={
gcen(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aFC
switch(w.c.a){case 0:return D.d4y
case 1:return D.di8
case 2:return D.dBs}},
gceq(){var w=this.c,v=C.hKh(w.w),u=C.hKh(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=t.gcen(),p=t.c,o=O.bH1(p.f),n=t.gceq(),m=x.V,l=A.a([new A.aa(0,B.H,B.d.gal(q).j(0.35),B.cP,10)],m),k=r?B.aw:B.c,j=A.K(r?B.aw:B.c,B.r,2)
if(o!=null)w=A.tT(B.z,s,B.cp,B.bX,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a7(B.a5,B.a9,B.x,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.id(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a7(B.ay,B.aD,B.x,q,s,s),B.a6),s,56,s,s,B.Df,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.K(r?B.aw:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.c(""+k,s,s,s,s,s,s,D.fSh,s,s,s),B.f,s,s,new A.o(B.cd,s,w,j,s,s,B.m),s,s,s,s,D.bLK,s,s,s),s,s,s,-6,-4,s))}k=r?B.cu:B.c
j=A.n(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.aa(0,B.H,B.v.j(r?0.3:0.06),B.dT,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cu,s,s,s,s,s,s,s,s,u,s,s,B.F,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bk,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a6(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.au,A.p(s,A.x(p,B.l,s,B.e,B.M,0,B.p),B.f,s,D.b9j,new A.o(k,s,w,j,m,s,B.m),s,s,s,s,D.bLV,s,s,s)],v),B.l,s,B.e,B.h,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bhi.prototype={
a4(d,e){var w,v,u,t,s
$.T()
w=A.L()
v=this.b
u=v?B.c:D.bmv
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aC(d){return d.b!==this.b}}
C.bAf.prototype={
B(d){var w=this,v=null,u=new C.ftF(w),t=w.c,s=t?B.cu:B.c,r=A.n(12),q=u.$3(B.ic,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bx:B.fA,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xo,"Zoom out",w.e)
return A.aG(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bx:B.fA,v,v,v,1,v,v,v,v,v,22),u.$3(B.arF,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.M,0,B.p),B.f,s,4,v,B.dI,v,v,v,B.ai)}}
C.bps.prototype={
B(d){var w=this,v=null,u=B.bR.j(0.15),t=A.K(B.bR,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.p(v,A.x(A.a([A.W(s?P.a3t:Ad.PW,B.bR,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fOf,v,v,v)],r),B.l,v,B.b9,B.h,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.ak,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fM_,B.K,v,v)],r)
if(s){t=A.a([B.ak],r)
s=w.d
B.d.u(t,new A.O(s,new C.f3x(w),A.U(s).k("O<1,w>")))
B.d.u(u,t)}return new A.a6(84,v,A.x(u,B.l,v,B.e,B.h,0,B.p),v)}}
C.a0P.prototype={
R(){return new C.aEJ()},
bw(){return this.Q.$0()},
ge9(){return this.w}}
C.aEJ.prototype={
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
if(t==null)w=C.itP(w.r,w.f)
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
QU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$QU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hyG(p.y,p.w)
w=3
return A.b(A.lT(t.a.w,B.Kj),$async$QU)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b2D(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$QU)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.i4v(p.y,p.w)
t.a.bw()
case 5:w=7
return A.b(Am.DX(78,800),$async$QU)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dAM(t,q))
case 1:return A.h(u,v)}})
return A.i($async$QU,v)},
cep(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.d()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.ig(B.o.v(1000*Date.now()),w,D.zG,null,null,null,"","","","","",1,!1,0)
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
s=v.aHc(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a8(k,!1).N(s)},
abv(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$abv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dAL(r),s,null,!0,!0,x.y),$async$abv)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a8(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$abv,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.I,i=new C.ur(j),h=l.a.e,g=A.U(h).k("X<1>"),f=A.B(new A.X(h,new C.dAV(l),g),g.k("M.E"))
h=j?B.el:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bK9,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hd(A.aM(!1,k,!0,new A.D(B.lZ,A.W(B.eq,B.pI,k,k,k,17),k),B.cJ,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbNu(),k,k,k,k,k,k,k),k,"Delete member",k,k,k),k,k,k,0,k,k))
u=j?B.ka:B.iI
t=O.bH1(l.as)
if(l.as==null)s=A.W(B.pS,j?B.bu:B.bk,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hn(u,t,s,k,42),A.ao(0,A.hn(B.bR,k,D.bXw,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcem(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aEL(t,"Full name",B.ms,1,1,i,B.mJ)
u=l.y
u===$&&A.d()
u=A.x(A.a([t,B.S,new C.bm3(i,u,new C.dAW(l),k)],v),B.l,k,B.e,B.h,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.F,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bDs],q)
o=l.a.e
B.d.u(p,new A.O(o,new C.dAX(),A.U(o).k("O<1,eN<m?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.F,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bDu],q)
B.d.u(q,new A.O(f,new C.dAZ(),A.U(f).k("O<1,eN<m?>>")))
o=A.x(A.a([t,B.ak,new C.af4(i,r,"Who is their parent?",p,new C.dB_(l),k,o),B.aA,n,B.ak,new C.af4(i,m,"Who is their spouse / partner?",q,new C.dB0(l),k,o)],v),B.am,k,B.e,B.h,0,B.p)
q=l.f
q===$&&A.d()
q=C.aEL(q,"Birth date",D.aqQ,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aEL(m,"Birth place",B.a3J,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aEL(n,"Date of death (if deceased)",D.asY,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aEL(p,"Occupation",A1.R_,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.an(B.z,k,B.ad,B.t,w,k),B.aA,s,B.by,new C.af5(i,"Identity",u,k),B.af,new C.af5(i,"Family links",o,k),B.af,new C.af5(i,"Life details",A.x(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aEL(r,"Notes",B.l9,5,3,i,k)],v),B.l,k,B.e,B.h,0,B.p),k),B.af,new C.aEK(i,"Child order",l.cmK(l.at),new C.dB1(l),new C.dB2(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hnE(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dB3(l):k
B.d.u(r,A.a([B.S,new C.aEK(i,"Visible in tree",u,w,new C.dB4(l),k)],v))}r.push(B.S)
w=j?B.ka:B.iI
u=A.n(14)
t=A.K(j?B.en:B.bO,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.j7(k,B.bR,k,B.ag,k,new C.dB5(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.m),k,k,k,k,P.any,k,k,k))
r.push(B.by)
w=j?B.aS:B.aw
j=j?B.en:B.bO
r.push(A.A(A.a([A.E(A.dX(B.oo,new C.dAY(d),A.dk(k,k,k,k,k,k,k,k,k,w,k,k,B.cn,k,new A.b9(A.n(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bI(D.fop,k,l.gceo(),A.bp(B.aV,k,k,0,B.c,k,B.cn,k,new A.b9(A.n(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.h,0,k,k))
r.push(B.au)
return A.ei(B.fe,k,B.ag,h,new A.a6(420,k,A.cb(A.x(r,B.am,k,B.e,B.M,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.aot,k,B.anJ,new A.b9(g,B.a1),k,k)},
cmK(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.af5.prototype={
B(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.F,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.ka:B.iI,s=A.n(16)
return A.x(A.a([new A.D(B.a2j,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.K(v?B.en:B.bO,B.r,1),s,w,w,B.m),w,w,w,w,B.bg,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)}}
C.bm4.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.el:B.c,r=A.n(12),q=A.K((t?B.en:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bC(u,B.eU,u,B.tv,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bu:B.bk,u,u,u,u,u,u,u,u,u,u,u,B.cH,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bR,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.al,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ae,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.af4.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.el:B.c,s=A.n(12),r=A.K((u?B.en:B.bO).j(0.85),B.r,1),q=A.W(B.tE,u?B.bu:B.bk,v,v,v,v),p=A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.el:B.c
return A.p(v,new A.EJ(A.a69(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bk,v,v,v,v,v,v,v,v,v,v,v,B.cH,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.m),v,v,v,v,B.l5,v,v,v)}}
C.bm3.prototype={
B(d){var w=new C.dB6(this)
return A.A(A.a([w.$3(D.x8,"Male",B.QK),B.aa,w.$3(D.oR,"Female",B.Qv),B.aa,w.$3(D.zG,"Other",B.o5)],x.p),B.l,null,B.e,B.h,0,null,null)}}
C.aEK.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.ka:B.iI,r=A.n(14),q=A.K(t?B.en:B.bO,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,13,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.x(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bk,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.B,v,B.e,B.h,0,B.p),1),new C.aL0(u,B.xo,w.f,v),B.bb,new C.aL0(u,B.ic,w.r,v)],o),B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.m),v,v,v,v,B.ep,v,v,v)}}
C.aL0.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bR.j(0.12)
else w=s.c.a?B.el:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bR
else t=(s.c.a?B.bu:B.bk).j(0.4)
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a6(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.af6.prototype={
bWM(d){switch(d.a){case 0:return B.bR
case 1:return B.bB
case 2:return B.cD}},
bWN(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b09(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
B2(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.el:B.c
u=A.n(12)
t=A.K((w?B.en:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.W(f,B.bR,p,p,p,18),B.ar],s))
q=A.c(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bk,p,p,p,p,p,p,p,p,9,p,p,B.F,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.c(o,p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,14,p,p,B.P,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.B,p,B.e,B.h,0,B.p),1))
return A.p(p,A.A(r,B.B,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.m),p,p,p,B.cy,B.zo,p,p,1/0)},
agb(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.F,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.ka:B.iI,s=A.n(16),r=A.K(v?B.en:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a2j,u,w),A.p(w,A.x(e,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.m),w,w,w,w,B.bT,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hPO(r,q),o=q.c,n=t.bWM(o),m=O.bH1(q.f),l=t.e.a,k=l?B.el:B.c,j=A.n(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.l7?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bu:B.bk,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.aa(0,B.H,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.hn(u,m,m==null?A.W(B.pS,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eA,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.K(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.c(t.bWN(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.m),s,s,s,s,B.lX,s,s,s),s,s,s)
u=x.p
i=A.a([t.B2("Full name",i,B.ms)],u)
if(p>0)i.push(t.B2("Child order","#"+p,B.QB))
r=A.a([h,B.au,r,B.aO,l,B.S,v,B.by,t.agb("Identity",i),B.af,t.agb("Life details",A.a([t.B2("Birth date",q.w,D.aqQ),t.B2("Birth place",q.x,B.a3J),t.B2("Date of death",q.y,D.asY),t.B2("Occupation",q.z,A1.R_)],u)),B.af,t.agb("Family links",A.a([t.B2("1. Parent",t.b09(q.d),B.I6),t.B2("2. Spouse",t.b09(q.e),B.Im)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.agb("Notes",A.a([t.B2("Notes",q,B.l9)],u))],u))
r.push(B.by)
r.push(A.bI(B.LS,s,new C.dBg(d),A.bp(B.aV,s,s,s,s,s,B.cn,s,new A.b9(A.n(14),B.a1),s,s,s)))
return A.eG(s,k,new A.cQ(B.mg,A.cb(A.x(r,B.am,s,B.e,B.M,0,B.p),B.t,s,B.y,s,s,B.x2,s,s,B.ah),s),s,s,s,B.HJ,s,B.dc,s,new A.b9(j,B.a1),s)}}
C.GP.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bk
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.vd,A.hd(A.aG(!1,B.a3,!0,A.n(8),A.aM(!1,A.n(8),!0,new A.a6(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u,u),u)}}
C.as4.prototype={
f4(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.ab().ag())
w=u.c
v=A.U(w).k("O<1,a9<m,@>>")
w=A.B(new A.O(w,new C.chp(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iW(w,new C.chq(),t,x.fO))
return s}}
C.as5.prototype={
R(){return new C.aGi(A.a([],x.bF))},
gd6(){return this.c}}
C.aGi.prototype={
a_(){this.a3()
this.KD()},
KD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$KD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cht(t.a.c),$async$KD)
case 3:r=e
w=4
return A.b(C.BC(t.a.c),$async$KD)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rB(q,new C.e7_(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.e70(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$KD,v)},
zk(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(A.b3(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
Lt(d,e){return this.cMJ(d,e)},
cMJ(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Lt=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.e74(q,e))
t=3
w=6
return A.b(d.$0(),$async$Lt)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.e75(q))
$.eW.mJ()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Lt,v)},
YW(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pP(r,s.c,s.e),$async$YW)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lt(new C.e6X(t),"Preparing download\u2026"),$async$YW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YW,v)},
Z_(d){return this.bUE(d)},
bUE(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Z_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pP(r,s.c,s.e),$async$Z_)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Lt(new C.e6Y(t,d),"Preparing file\u2026"),$async$Z_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z_,v)},
aie(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aie=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.y1.cq().Nb(B.TO,B.vg,!0),$async$aie)
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
return A.i($async$aie,v)},
ZC(d){return this.c48(d)},
c48(d){var w=0,v=A.j(x.H),u=this
var $async$ZC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Lt(new C.e6Z(u,d),"Restoring family trees\u2026"),$async$ZC)
case 2:return A.h(null,v)}})
return A.i($async$ZC,v)},
ZB(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aie(),$async$ZB)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.ZC(s),$async$ZB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZB,v)},
a3L(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3L=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pP(r,s.c,s.e),$async$a3L)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lt(new C.e73(t),"Creating QR code\u2026"),$async$a3L)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3L,v)},
a3l(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DV()){t.zk("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a8(s,!1).cb(A.ea(new C.e71(),!0,null,x.N)),$async$a3l)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.ZC(r),$async$a3l)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a3l,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===B.I,n=o?B.Cs:B.hW,m=o?D.am_:B.aS,l=o?B.aM:B.bO,k=o?B.aS:B.aw,j=new C.dkA(n,m,l,k,o?B.bP:B.bk)
l=A.aI(p,p,p,p,A.W(B.eB,k,p,p,p,20),p,p,p,new C.e77(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eV(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dk8(!0,B.jG,B.aH,B.aH,q.r?p:q.gcD2(),j,s,"Show restore QR"),1),B.ar],u))}s=q.e
r=q.r?p:q.gcz5()
t.push(A.E(C.dk8(!s,B.jH,B.b2,B.bl,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.h,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dk8(!1,B.hO,B.aV,B.bR,q.r?p:q.gbUx(),j,"Photos & books included","Download all trees"),1),B.ar],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dk8(!1,S.Ab,B.at,B.aQ,q.r?p:q.gc45(),j,s,"Upload backup file"),1))
l=A.a([new C.big(v,l,p),B.lj,new C.ael(j,"QR restore",p),B.S,t,B.dh,new C.ael(j,"Backup files",p),B.S,A.A(r,B.l,p,B.e,B.h,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.lj,new C.ael(j,"One tree",p),B.S],u)
B.d.u(v,J.b8(q.d,new C.e78(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cn(l,p,p,AL.a2b,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.aa(0,B.H,B.v.j(o?0.3:0.1),B.ds,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bo(!0,A.p(p,A.A(A.a([P.aW7,B.bc,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.m),p,p,p,p,A8.D8,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dkA.prototype={}
C.big.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.aa(0,B.H,B.aV.j(0.32),B.kP,28)],x.V)
t=A.ao(p,A.W(B.vA,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ae,A.A(A.a([A.p(p,D.c5V,B.f,p,p,new A.o(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.pi,A.E(A.x(A.a([D.fXD,B.O,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.B,p,B.e,B.h,0,B.p),1)],q),B.B,p,B.e,B.h,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.cea,B.m),p,p,p,p,p,p,p,p)}}
C.ael.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3),B.aa,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)}}
C.bie.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.aa(0,B.H,B.aH.j(0.1),B.cP,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aG(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eI(A.d2(new A.D(E.a1P,A.x(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.m),q,q,q,q,B.ty,q,q,q),B.af,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bw,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cH,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.B,q,B.e,B.h,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bij.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eI(new A.D(B.eX,A.A(A.a([A.p(v,D.c53,B.f,v,v,new A.o(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.ty,v,v,v),B.bc,A.E(A.x(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.B,v,B.e,B.h,0,B.p),1),A.W(B.hO,o,v,v,v,20)],n),B.l,v,B.e,B.h,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a18.prototype={
R(){return new C.aGh()},
gd6(){return this.c}}
C.aGh.prototype={
a_(){this.a3()
this.ab2()},
ab2(){var w=0,v=A.j(x.H),u=this,t
var $async$ab2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(T.b5i(u.a.c,B.EZ),$async$ab2)
case 2:t=e
if(u.c!=null)u.l(new C.e6S(u,t))
return A.h(null,v)}})
return A.i($async$ab2,v)},
ajG(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ajG=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.e6T(q))
t=4
p=T.hAv(q.a.d,B.EZ)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.Y(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(T.aun(n.e,m,l,B.EZ,p,n.f),$async$ajG)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.e6U(q))
q.c.K(x.q).f.T(D.fy2)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ac(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(B.a.eq(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.l(new C.e6V(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ajG,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=p?B.nO:AC.qP,n=p?B.iV:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eV(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.hdh,q,q,q,1,q,!0)
w=A.n(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qs(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.O,u,B.by,t,B.O,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.b9,B.h,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.m),q,q,q,q,B.ae,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bA,q,q,q,q,q,q,q,q,q,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcyO()
if(u)u=B.Lh
else u=A.W(r.e===!0?B.hn:AR.aqP,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a6(1/0,q,A.eo(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cb,q,q,q),t,A.dk(q,q,q,q,q,q,q,q,q,B.aV,q,B.hr,q,q,q,new A.ax(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hJ,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.S)
w.push(new A.a6(1/0,q,A.bI(Au.BA,q,new C.e6W(d),A.bp(B.aV,q,q,q,q,B.hr,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.ae,A.x(w,B.l,q,B.e,B.h,0,B.p),q),q,!1,!1,q,q)}}
C.a19.prototype={
R(){return new C.bnA(A.A8(B.zc,B.ov,B.vH))}}
C.bnA.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c5(A.eV(w,w,w,!0,!0,B.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h4W,w,w,w,1,w,!0),B.v,A.A7(this.d,B.bX,new C.e79(this,d)),w,!1,!1,w,w)}}
C.b18.prototype={
B(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Tg,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.md.prototype={}
C.a81.prototype={
R(){return new C.bne(null,null)}}
C.bne.prototype={
a_(){var w=this,v=null
w.a3()
w.d=A.br(v,B.tq,v,1,v,w)
w.e=A.br(v,B.nS,v,1,v,w)
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
this.bAz()},
B(d){var w,v,u=this,t=B.d.dz(D.a7L,new C.dT1(u),new C.dT2())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cFr(A.c9(new A.hA(A.a([w,v],x.dS)),new C.dT3(u,t),null),!0)}}
C.bnd.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b4Z(d,e)
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
p.BQ(d,e,12)
p.yW(d,e,B.lt,5,14)
break
case"grocery":p.cnu(d,e)
break
case"calculator":p.cnb(d,e)
break
case"lumber":p.cnC(d,e)
break
case"kitchen":p.cnx(d,e)
break
case"landscape":p.mp(d,e,D.dob)
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
w.r=B.es.j(0.85).gp(0)
d.af(s,w)
p.BQ(d,e,8)
p.yW(d,e,B.iJ,4,18)
break
case"plumbing":p.cnM(d,e)
break
case"electrical":p.mp(d,e,D.dAw)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.T()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aD(new A.a4(0,0,0+e.a,0+e.b),u)
p.mv(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mv(d,e,B.oI.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BQ(d,e,10)
break
case"store":p.cnW(d,e)
break
case"paint_remodel":p.cnH(d,e)
break
case"roofing":p.cnO(d,e)
break
case"warehouse":p.co2(d,e)
break
case"vehicles":p.co0(d,e)
break
case"farm":p.cno(d,e)
break
case"restaurant":p.cnN(d,e)
break
case"tools":p.cnZ(d,e)
break
case"wallet":p.co1(d,e)
break
case"concrete":p.cnh(d,e)
break
case"blueprint":p.cn9(d,e)
break
default:p.b4Z(d,e)}},
mp(d,e,f){var w,v=new A.a4(0,0,0+e.a,0+e.b)
$.T()
w=A.L()
w.san(new A.a7(B.ay,B.aD,B.x,f,null,null).az(0,v))
d.aD(v,w)},
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
r=new A.as(B.T,B.Q,B.W,B.X,B.U)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BQ(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.T()
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b4Z(d,e){var w,v=this
v.mp(d,e,D.dyH)
w=v.c
v.mv(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mv(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bSu(d,e,B.hZ,w)
v.yW(d,e,B.c.j(0.7),6,8)},
bSu(d,e,f,g){var w,v,u,t,s,r
$.T()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aD(new A.a4(16,r,t,r+3),w)}},
cnu(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mp(d,e,D.cAc)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ao(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.T()
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=D.dlC[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mv(d,e,B.c.j(0.35),w,16)
l.yW(d,e,B.iJ,5,12)},
cnb(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mp(d,e,D.cAk)
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
p=A.h2(h,B.cK,h,h,h,h,B.a7,B.ce,h,B.e5,B.cf)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dq5[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.eE(r,h,h,B.cX,h,h,h,h,h,h,new A.H(!0,q,h,h,h,h,14+m*4,B.F,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eY()
p.a4(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cAm[o]
l=B.kY.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.eE(m,h,h,B.cX,h,h,h,h,h,h,new A.H(!0,l,h,h,h,h,12+k*3,B.F,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eY()
p.a4(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ao(o,3)*0.38)+Math.sin(n)*6))}i.mv(d,e,B.c.j(0.35),w*1.5,14)
i.mv(d,e,B.eG.j(0.55),-v*3.141592653589793*2,8)
i.mv(d,e,B.oE.j(0.4),r*2.8,22)
i.yW(d,e,B.pB,8,10)
i.BQ(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.T()
v=new A.as(B.T,B.Q,B.W,B.X,B.U)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
cnC(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,A_.aCJ)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.by(new A.a4(20,r,u,r+10),B.hq)
$.T()
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=A.ap(B.h8,B.oy,(s+1)/2).gp(0)
d.aq(q,p)}o.mv(d,e,B.h8.j(0.35),w,15)
o.BQ(d,e,8)},
cnx(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mp(d,e,D.dma)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.T()
m=new A.as(B.T,B.Q,B.W,B.X,B.U)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mv(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
l.yW(d,e,B.qD,4,14)},
cnM(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mp(d,e,D.d98)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.T()
o=new A.as(B.T,B.Q,B.W,B.X,B.U)
o.b=B.ac
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yW(d,e,B.pH,6,12)
n.mv(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cnW(d,e){var w,v,u,t,s,r,q,p=this
p.mp(d,e,D.cOc)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.by(new A.a4(r,14,r+u,22),B.jJ)
$.T()
q=new A.as(B.T,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.fy,B.bM,(s+1)/2).gp(0)
d.aq(r,q)}p.mv(d,e,B.c.j(0.3),w,16)
p.BQ(d,e,8)
p.yW(d,e,B.wG,5,13)},
cnH(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dg9)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.by(new A.a4(r,q,r+8,q+(18+s*22)),B.iA)
$.T()
r=new A.as(B.T,B.Q,B.W,B.X,B.U)
r.r=[B.iG,B.dE,B.bM,B.eE][t].j(0.85).gp(0)
d.aq(q,r)}this.mv(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cnO(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.ddc)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.T()
q=new A.as(B.T,B.Q,B.W,B.X,B.U)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yW(d,e,B.cC,7,11)},
co2(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.cR1)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.by(new A.a4(q,p,q+(t-s*8),p+16),B.hq)
$.T()
q=new A.as(B.T,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.cC,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mv(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
co0(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dF3)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.by(new A.a4(s,r,s+28,r+8),B.hq)
$.T()
q=new A.as(B.T,B.Q,B.W,B.X,B.U)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.BQ(d,e,6)},
cno(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.dkA)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.T()
s=A.L()
s.r=B.oI.j(0.75).gp(0)
d.O(new A.r(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=B.hX.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.mv(d,e,B.oI.j(0.35),w,14)},
cnN(d,e){var w,v,u,t,s,r,q=this
q.mp(d,e,D.dno)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bY(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.T()
r=new A.as(B.T,B.Q,B.W,B.X,B.U)
r.r=B.c.j(0.22).gp(0)
d.c1(s,r)}q.yW(d,e,B.qD,5,16)
q.BQ(d,e,7)},
cnZ(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,D.dCi)
w=o.c
v=w*3.141592653589793
o.mv(d,e,B.oy.j(0.55),v*3,10)
o.mv(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.T()
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=B.oy.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
co1(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,D.dFQ)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.by(new A.a4(q,p,q+36,p+22),B.jJ)
$.T()
q=new A.as(B.T,B.Q,B.W,B.X,B.U)
q.r=A.ap(B.iJ,B.oI,r).gp(0)
d.aq(p,q)}o.BQ(d,e,9)
o.mv(d,e,B.c.j(0.4),w*2.2,12)},
cnh(d,e){var w,v,u,t,s,r,q,p
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
p=new A.as(B.T,B.Q,B.W,B.X,B.U)
p.r=B.bO.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
cn9(d,e){var w,v,u,t,s,r,q
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
u.r=B.dE.j(0.45).gp(0)
d.aD(new A.a4(0,q,0+v,q+6),u)
this.mv(d,e,B.lt.j(0.45),-r*3.141592653589793*2,11)},
aC(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.av8.prototype={
a0Z(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0Z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aTd(),$async$a0Z)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.aak(s),$async$a0Z)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0Z,v)},
aif(d){return this.cql(d)},
cql(d){var w=0,v=A.j(x.H),u=this,t
var $async$aif=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iCt(d),$async$aif)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aif,v)},
B(d){var w,v,u=null,t=A.Q(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.ka:B.iI
w=x.p
v=A.a([C.aTB(!0,B.rS,1/0,B.ra,u,s,1/0)],w)
if(!r)v.push(new A.bP(new A.o(u,u,u,u,u,new A.a7(B.aW,B.b0,B.x,A.a([B.L,B.v.j(0.35)],x.O),u,u),B.m),B.bm,new A.bK(B.aW,u,u,new A.D(B.ts,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,B.aDH,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.db(D.bZh,u,D.fTG,new C.cra(this,d),A.bp(B.aV,u,u,u,B.c,u,B.jW,u,u,u,u,B.cl)),1),B.aa,A.E(A.eo(D.c7e,u,D.h87,this.gch6(),A.dk(u,u,B.v.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jW,u,u,D.b7T,u,u,u,B.cl)),1)],w),B.l,u,B.e,B.h,0,u,u),u,u,8,8,u,u))
return new A.fL(1.7777777777777777,A.aG(!1,B.a3,!0,B.rS,new A.an(B.a0,u,B.b4,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.ai),u)}}
C.aOr.prototype={
aZ(){this.b7()
this.b5()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdR())
w.bd$=null
w.a2()}}
C.aWz.prototype={}
C.aWy.prototype={}
C.aUA.prototype={}
C.a_M.prototype={
R(){return new C.aBr()}}
C.aBr.prototype={
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
Lg(){var w,v,u=this,t=u.d
t===$&&A.d()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.T(D.fyy)
return}t=u.c
t.toString
v=u.e
A.a8(t,!1).N(new C.aWz(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.Q(d).ax.a===B.I,l=m?B.el:B.c,k=A.n(20),j=A.p(n,D.c6U,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.n(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bw,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bk,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.B,n,B.e,B.h,0,B.p),1)
j=A.A(A.a([j,B.bc,i,A.aI(n,n,n,n,A.W(B.cB,m?B.bu:B.bk,n,n,n,n),n,n,n,new C.dbE(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.h,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bk,n,n,n,n,n,n,n,n,12,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bk,n,n,n,n,n,n,n,n,11,n,n,B.cH,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hAL(new C.dbF(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ka:B.iI
r=A.n(12)
q=A.n(12)
p=m?B.en:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bC(n,new A.b6(4,r,B.dz),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.al,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.dbG(o),n,!1,n,n,!1,n,!0,n,B.ae,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,A4.Lq,n,n,n,n)
u=m?B.aS:B.aw
m=m?B.en:B.bO
return A.eG(n,l,new A.cQ(B.mg,A.cb(A.x(A.a([j,B.aO,i,B.au,w,B.O,v,B.aO,t,B.by,A.A(A.a([A.E(A.dX(B.du,new C.dbH(d),A.dk(n,n,n,n,n,n,n,n,n,u,n,n,B.cn,n,new A.b9(A.n(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.ar,A.E(A.bI(D.h8o,n,o.ga46(),A.bp(B.aV,n,n,n,B.c,n,B.cn,n,new A.b9(A.n(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.h,0,n,n)],h),B.B,n,B.e,B.M,0,B.p),B.t,n,B.y,n,n,B.Da,n,n,B.ah),n),n,n,n,A9.Db,n,B.dc,n,new A.b9(k,B.a1),n)}}
C.a_L.prototype={
R(){return new C.aBq()}}
C.aBq.prototype={
a_(){this.a3()
var w=$.az()
this.d!==$&&A.aS()
this.d=new A.au(B.ax,w)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.az()
w.W$=0
this.a2()},
Lg(){var w,v=this.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.T(D.fw9)
return}v=this.c
v.toString
A.a8(v,!1).N(new C.aWy(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.Q(d).ax.a===B.I,o=p?B.el:B.c,n=A.n(20),m=A.p(q,D.c39,B.f,q,q,new A.o(B.bR.j(0.15),q,q,A.n(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bw,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bk,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.B,q,B.e,B.h,0,B.p),1)
m=A.A(A.a([m,B.bc,l,A.aI(q,q,q,q,A.W(B.cB,p?B.bu:B.bk,q,q,q,q),q,q,q,new C.dbA(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.h,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.n(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.W(B.aqB,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.ar,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.h,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.m),q,q,q,q,B.bH,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.ka:B.iI
t=A.n(12)
s=A.n(12)
r=p?B.en:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bC(q,new A.b6(4,t,B.dz),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.al,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.dbB(this),q,!1,q,q,!1,q,!0,q,B.ae,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.lk,q,q,q,q)
w=p?B.aS:B.aw
p=p?B.en:B.bO
return A.eG(q,o,new A.cQ(B.mg,A.cb(A.x(A.a([m,B.aO,l,B.aA,v,B.by,A.A(A.a([A.E(A.dX(B.du,new C.dbC(d),A.dk(q,q,q,q,q,q,q,q,q,w,q,q,B.cn,q,new A.b9(A.n(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.ar,A.E(A.bI(D.hfB,q,this.ga46(),A.bp(B.bR,q,q,q,B.c,q,B.cn,q,new A.b9(A.n(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.h,0,q,q)],k),B.B,q,B.e,B.M,0,B.p),B.t,q,B.y,q,q,B.Da,q,q,B.ah),q),q,q,q,A9.Db,q,B.dc,q,new A.b9(n,B.a1),q)}}
C.a_g.prototype={
R(){return new C.aA7()}}
C.aA7.prototype={
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
gKy(){var w,v=this.e
v===$&&A.d()
w=A.cw(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
galr(){var w=this.f
w===$&&A.d()
w=A.cw(B.a.i(w.a.a))
return w==null?0:w},
gb7P(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aRT(d){var w,v=B.i.D(this.gKy()+d,0.25,999999),u=B.i.fO(v),t=this.e
t===$&&A.d()
if(v===u)u=B.o.v(B.i.M(v))
else{u=B.i.a6(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.l(new C.cJv())},
aAQ(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.ka:B.iI,s=A.n(14),r=A.n(14)
u=u?B.en:B.bO
return A.bC(w,new A.b6(4,s,B.dz),w,B.bH,w,w,w,w,!0,new A.b6(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.n(14),B.afL),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ch7(d,e,f){return this.aAQ(d,e,f,null)},
Lg(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.galr()<=0){s.c.K(x.q).f.T(D.fAs)
return}r=s.c
r.toString
v=s.gKy()
u=s.galr()
t=s.gb7P()
A.a8(r,!1).N(new C.aUA(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.ur(n),l=n?B.el:B.c,k=A.n(24),j=x.O,i=A.a([B.aV.j(0.22),B.bR.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bXb,B.f,o,o,new A.o(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a7(B.a5,B.a9,B.x,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bw,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.cH,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1)
i=A.A(A.a([i,B.bc,h,A.aI(o,o,o,o,A.W(B.cB,n?B.bu:B.bk,o,o,o,o),o,o,o,new C.cJB(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.h,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aAQ(m,"Item name (optional)","Lumber, paint, labor\u2026",B.QI),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,A4.Lq,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.F,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.ka:B.iI
t=A.n(14)
s=A.K(n?B.en:B.bO,B.r,1)
r=A.aI(o,o,o,o,A.W(B.xo,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cJC(p),o,o,o,o,o,B.cl)
q=p.e
q===$&&A.d()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c8N,B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,B.eh,o,o,o,1,o,o,!1,"\u2022",o,new C.cJD(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a6(52,o,q,o),A.aI(o,o,o,o,A.W(B.ic,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cJE(p),o,o,o,o,o,B.cl)],w),B.l,o,B.e,B.M,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.ar,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aAQ(m,"Amount","0.00",B.hN),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,B.eh,o,o,o,1,o,o,!1,"\u2022",o,new C.cJF(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.B,o,B.e,B.h,0,o,o)
t=x.gv
u=A.B(new A.O(D.dgI,new C.cJG(p,m),t),t.k("aj.E"))
i=A.a([i,B.by,v,B.aA,h,B.O,s,B.af,A.bZ(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.S,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.ch7(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cJH(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.lk,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bR.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bk,o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKy()===B.i.fO(p.gKy())?B.i.M(p.gKy()):p.gKy()
s=p.gb7P()
r=A.BF(p.galr())
i.push(A.p(o,A.A(A.a([A.E(A.x(A.a([u,B.au,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1),C.bHT(p.gKy()*p.galr(),B.b5,!1,B.u)],w),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a7(B.a5,B.a9,B.x,j,o,o),B.m),o,o,o,o,B.jC,o,o,o))
i.push(B.by)
j=A.n(14)
h=n?B.en:B.bO
h=A.dk(o,o,o,o,o,o,o,o,o,o,o,o,B.cn,o,new A.b9(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dX(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cJI(d),h),1),B.ar,A.E(A.db(D.au7,o,D.hbr,p.ga46(),A.bp(B.aV,o,o,0,B.c,o,B.cn,o,new A.b9(A.n(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.h,0,o,o))
return A.eG(o,l,new A.cQ(B.MS,A.cb(A.x(i,B.am,o,B.e,B.M,0,B.p),B.t,o,B.y,o,o,Az.tw,o,o,B.ah),o),o,o,o,B.Pf,o,B.dc,o,new A.b9(k,B.a1),o)}}
C.a2V.prototype={
R(){return new C.bA7()}}
C.bA7.prototype={
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
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=r?B.el:B.c,p=A.n(20),o=t.a.c
o=A.c(o,s,s,s,s,s,s,A.l(s,s,r?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.d()
v=A.l(s,s,r?B.aS:B.aw,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.ka:B.iI
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bC(s,new A.b6(4,A.n(12),B.dz),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fta(t,d),s,!1,s,s,!1,s,!0,s,B.ae,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dX(B.du,new C.ftb(d),s),1)
r=A.bp(B.bR,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eG(s,q,new A.D(B.Da,A.x(A.a([o,B.aA,v,B.aO,A.A(A.a([u,B.ar,A.E(A.bI(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.ftc(t,d),r),1)],w),B.l,s,B.e,B.h,0,s,s)],w),B.l,s,B.e,B.M,0,B.p),s),s,s,s,s,s,B.dc,s,new A.b9(p,B.a1),s)}}
C.adl.prototype={
a9(){return"WorksheetFrameStyle."+this.b}}
C.GE.prototype={
R(){return new C.bA5(null,null)}}
C.bA5.prototype={
a_(){var w,v=this
v.a3()
w=A.br(null,D.bE1,null,1,null,v)
w.cX(0)
v.d!==$&&A.aS()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bCT()},
gbEv(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bR,B.b5],x.O)
case 2:return A.a([B.bv,B.aV,B.b5],x.O)
case 3:return A.a([B.aH,B.cd,B.jR],x.O)
case 4:return A.a([B.fY,B.bR,B.fz],x.O)
case 0:return A.a([B.aV,B.bR,B.b5],x.O)}},
B(d){var w=A.Q(d),v=this.d
v===$&&A.d()
return new A.e5(A.c9(v,new C.ft8(this,new C.ur(w.ax.a===B.I)),null),null)}}
C.aA0.prototype={
R(){return new C.bA6(null,null)}}
C.bA6.prototype={
a_(){var w,v=this
v.a3()
w=A.br(null,B.nU,null,1,null,v)
w.cX(0)
v.d!==$&&A.aS()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bCU()},
B(d){var w=this.d
w===$&&A.d()
return A.c9(w,new C.ft9(this),null)}}
C.bA4.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.by(new A.a4(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
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
p.aVv(d,q,r,o,0,0.2,4.2,0.92)
p.aVv(d,q,r,s,0.52,0.11,3.2,0.58)}},
aVv(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.hYp(e.a.a,e,t,t+f*i,!0),r=A.ait(s.glc().a.getBounds())
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
C.aQy.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a8(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.aQz.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a8(0,w.gbB())
w.aa$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.ur.prototype={}
C.av7.prototype={
R(){return new C.aHR()},
ge9(){return this.c}}
C.aHR.prototype={
a_(){var w=this
w.a3()
w.d=w.a.d
w.aj6()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.Ms(w,v)
this.a2()},
aj6(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aj6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bGg(t.c,t.d.a),$async$aj6)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.f0H(u,s))
return A.h(null,v)}})
return A.i($async$aj6,v)},
Rn(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.f0y(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.Ms(t,s),$async$Rn)
case 2:if(u.c!=null)u.l(new C.f0z(u))
return A.h(null,v)}})
return A.i($async$Rn,v)},
RV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.Q(p)
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.f0F(t,new C.ur(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$RV)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.aak(q),$async$RV)
case 6:case 5:t.l(new C.f0G(t,r))
w=7
return A.b(t.Rn(),$async$RV)
case 7:case 1:return A.h(u,v)}})
return A.i($async$RV,v)},
X2(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iCe(r),$async$X2)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.f0t(t,new C.rG(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Rn(),$async$X2)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X2,v)},
cmh(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hPK(t,new C.f0x(u),w,v)},
acR(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bE(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b7F,w,w,B.m),w,22,w,w,w,w,w,22)},
abT(d){return this.bQJ(d)},
bQJ(d){var w=0,v=A.j(x.H),u=this
var $async$abT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.f0w(u,d))
w=2
return A.b(u.Rn(),$async$abT)
case 2:return A.h(null,v)}})
return A.i($async$abT,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.Q(a2).ax.a===B.I,e=f?B.c5:B.hW,d=A.n(8),a0=A.W(A2.a3q,f?B.bu:B.bk,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.HQ,A.A(A.a([a0,B.bb,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bk,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.M,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.f0I(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.Y(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b4,B.t,A.a([A.bx(A.n(22),C.aTB(!0,A.n(22),1/0,B.ra,g,d,1/0),B.aq),A.ao(10,A.db(D.c11,g,D.hdQ,h.gb5K(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.hc,g,new A.b9(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.aa(0,B.H,B.aV.j(f?0.5:0.38),B.eT,22),new A.aa(-4,B.H,B.bR.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.aa(-2,B.H,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.bx(s,new A.an(B.a0,g,B.b4,B.t,A.a([C.aTB(!0,A.n(16),1/0,B.Q6,g,r.c,1/0),new A.bP(new A.o(g,g,g,g,g,new A.a7(B.aW,B.b0,B.x,A.a([B.c.j(0.06),B.L,B.v.j(0.22)],x.O),g,g),B.m),B.bm,g,g),A.ao(g,h.acR(!0),g,g,8,g,8,g),A.ao(g,A.cGa(h.acR(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cGa(h.acR(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cGa(h.acR(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.db(D.bXO,g,D.h75,h.gb5K(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.hc,g,new A.b9(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.cau,B.m),g,g,g,g,B.lZ,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.biD,B.oC,B.hw],u):A.a([B.b5,B.aV,B.bR],u)
t=x.V
s=A.a([new A.aa(0,B.H,B.aV.j(f?0.45:0.35),B.eT,24)],t)
r=A.n(22)
p=A.ao(g,A.W(B.jD,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.F,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.m),g,g,g,g,B.hm,g,g,g)],a1),B.l,g,B.e,B.h,0,g,g),B.aA,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.F,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ak,C.bHT(h.d.gxR(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.O,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cH,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.B,g,B.e,B.h,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.K(B.hk.j(0.75),B.r,1.6)
t=A.a([new A.aa(0,B.H,B.aH.j(0.28),B.cP,14)],t)
j=B.aH.j(0.22)
i=A.n(10)
u=A.p(g,A.bx(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bIX,A.A(A.a([o,B.ar,A.aG(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eI(new A.D(Z.x0,A.x(A.a([A.p(g,D.atH,B.f,g,g,new A.o(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.cr,g,g,g),B.fP,D.fWB],a1),B.l,g,B.e,B.M,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcmg(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.h,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a7(B.ay,B.aD,B.x,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fL(1.7777777777777777,d,g),B.aO,w,B.O,u,B.by,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,16,g,g,B.F,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.aY,A.db(Aj.a5f,g,D.fUm,h.gbF_(),A.bp(B.aV,g,g,g,B.c,g,B.hy,g,new A.b9(A.n(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.h,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.el:B.c
v=A.n(14)
u=A.K(f?B.en:B.bO,B.r,1)
t=A.W(B.a3M,f?B.bu:B.bk,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,g,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.S,s,B.ak,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bk,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.m),g,g,g,g,B.r6,g,g,1/0))}else B.d.u(d,new A.O(w,new C.f0J(h,new C.ur(f)),A.U(w).k("O<1,w>")))
if(h.e)d.push(new A.D(Ai.zi,A.at(A.ng(g,f?B.bu:B.bk,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bo(!0,A.x(A.a([new A.D(A3.D2,a0,g),A.E(A.cb(A.x(d,B.B,g,B.e,B.h,0,B.p),B.t,g,B.y,g,g,E.zv,g,g,B.ah),1)],a1),B.B,g,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bIL(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.el:B.c,p=A.n(16),o=A.a([new A.aa(0,B.H,B.v.j(r?0.35:0.08),B.cP,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.bap,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.W(s?B.it:B.h0,B.b5,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bL
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.F,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd2t()
v=A.BF(d.d)
B.d.u(t,A.a([B.au,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bu:B.bk,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.B,u,B.b9,B.M,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bR.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bHT(d.c*d.d,B.b5,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a7(B.a5,B.a9,B.x,k,u,u),B.m),u,u,u,u,B.hc,u,u,u)
w=x.p
return A.p(u,A.bx(n,new A.F6(A.A(A.a([m,A.E(new A.D(B.anr,A.A(A.a([l,B.bc,t,B.aa,k,A.aI(u,u,u,u,A.W(B.cB,(r?B.bu:B.bk).j(0.75),u,u,u,20),u,u,u,new C.f0u(this,d),u,u,u,u,u,B.cl)],w),B.l,u,B.e,B.h,0,u,u),u),1)],w),B.am,u,B.e,B.h,0,u,u),u),B.aq),B.f,u,D.b9f,new A.o(q,u,u,p,o,u,B.m),u,u,u,B.d7,u,u,u,u)}}
C.afr.prototype={
Fh(d){return this.bS6(d)},
bS6(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Fh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(M.pP(d,o,!1),$async$Fh)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).N(null)
w=4
return A.b(A.bL(Ay.CX,null,x.H),$async$Fh)
case 4:s=t.d
w=5
return A.b(C.h3j(!0,o,s),$async$Fh)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hz(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$Fh)
case 6:p=f
w=7
return A.b(M.pO(o,!1),$async$Fh)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Fh,v)},
a10(d){return this.cD3(d)},
cD3(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a10=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(M.pP(d,s,!1),$async$a10)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).N(null)
A.hM(d,new C.av1(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(M.pO(s,!1),$async$a10)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a10,v)},
Ro(d){return this.cz_(d)},
cz_(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ro=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).N(null)
w=3
return A.b(A.hM(d,D.aNv,!0,"NgmyWorksheetProjectScan",x.N),$async$Ro)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bHU(s),$async$Ro)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.T(D.fzz)
w=1
break}q=C.hqd(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dQ(p,x.H),$async$Ro)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Ro,v)},
a11(d){return this.cLy(d)},
cLy(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a11=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).N(null)
w=3
return A.b(C.bHn(),$async$a11)
case 3:s=f
if(s==null){w=1
break}r=C.hqd(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dQ(q,x.H),$async$a11)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a11,v)},
B(d){var w=this,v=null,u=A.Q(d).ax.a===B.I,t=new C.ur(u),s=w.d.d.length,r=u?B.el:B.c,q=A.n(28),p=A.a([new A.aa(0,B.H,B.v.j(u?0.35:0.08),B.kP,36)],x.V),o=x.p
return A.bo(!0,new A.D(B.x_,A.p(v,A.x(A.a([w.cBD(d,t,s),new A.D(D.bIk,A.x(A.a([w.b8K(t,"QR restore"),B.S,A.A(A.a([w.b3J(t,!0,B.jG,B.aH,B.aH,new C.f0L(w,d),"Show to scan","QR code"),B.ar,w.aAR(t,B.jH,B.b2,B.bl,new C.f0M(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.h,0,v,v),B.dh,w.b8K(t,"Backup files"),B.S,A.A(A.a([w.aAR(t,B.hO,B.aV,B.bR,new C.f0N(w,d),"Full copy","Backup file"),B.ar,w.aAR(t,S.Ab,B.at,B.aQ,new C.f0O(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.h,0,v,v)],o),B.B,v,B.e,B.h,0,B.p),v)],o),B.l,v,B.e,B.M,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cBD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fl,B.cW,B.h6],k):A.a([B.b5,B.aV,B.bR],k)
w=A.ao(l,A.W(B.vA,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.m),l,4,l,B.kJ,l,l,l,36),l,l,l)
u=A.n(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.aa(0,B.H,B.v.j(0.2),B.cP,12)],x.V)
r=this.d
s=A.p(l,C.aTB(!0,A.n(13),64,D.bSZ,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.F,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,I.ad5,l,l,l)
r=C.bHT(r.gxR(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bII,A.x(A.a([v,A.A(A.a([s,B.ew,A.E(A.x(A.a([u,B.au,t,B.O,A.A(A.a([r,B.aa,A.p(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.m),l,l,l,l,B.fo,l,l,l)],m),B.l,l,B.e,B.h,0,l,l)],m),B.B,l,B.e,B.h,0,B.p),1),A.aI(l,l,l,l,A.W(B.cB,B.c.j(0.85),l,l,l,l),l,l,l,new C.f0K(d),l,l,l,A.nl(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aVW,l,l,l,l),l,l)],m),B.B,l,B.e,B.h,0,l,l)],m),B.l,l,B.e,B.h,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.ay,B.aD,B.x,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b8K(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bu:B.bk,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
b3J(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.am_:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.en:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.aa(0,B.H,B.aH.j(0.12),B.cP,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.K(h.j(0.35),B.r,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.m),r,r,r,r,B.ty,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eI(new A.D(E.a1P,A.x(A.a([t,B.af,u,B.bw,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bu:B.bk,r,r,r,r,r,r,r,r,11,r,r,B.cH,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aAR(d,e,f,g,h,i,j){return this.b3J(d,!1,e,f,g,h,i,j)}}
C.av1.prototype={
R(){return new C.boY()}}
C.boY.prototype={
a_(){this.a3()
this.ah_()},
ah_(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ah_=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bHV(p.c,p.d),$async$ah_)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.f0o(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.f0p(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ah_,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(d).ax.a===B.I,f=g?B.Cs:B.hW,e=i.d
e=e==null?h:B.a.Y(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.W(B.eB,g?B.ab:B.an,h,h,h,18),h,h,h,new C.f0q(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.ui],u),B.l,h,B.e,B.h,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.fl,B.cW,B.h6],s):A.a([B.b5,B.aV,B.bR],s)
r=x.V
q=A.a([new A.aa(0,B.H,B.aV.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dt,B.K,h,h)
p=C.bHT(p.gxR(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.ak,A.A(A.a([p,B.aa,A.p(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.F,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.m),h,h,h,h,B.fo,h,h,h)],u),B.l,h,B.b9,B.h,0,h,h)],u),B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a7(B.ay,B.aD,B.x,s,h,h),B.m),h,h,h,h,E.a2a,h,h,1/0)
t=g?D.bui:B.c
q=A.n(24)
p=A.K(w?B.aH.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.aa(0,B.H,B.v.j(g?0.25:0.06),B.ds,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.WF,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eCW)
else{m=A.n(20)
l=A.K(B.bn,B.r,1)
o.push(A.p(h,A.qs(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aO)
n=w?B.aH:B.aV
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.K((w?B.aH:B.aV).j(0.35),B.r,1)
k=w?B.Qp:B.QZ
k=A.W(k,w?B.aH:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.ar,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.m),h,h,h,h,B.hy,h,h,h))
return A.c5(h,f,A.bo(!0,A.x(A.a([new A.D(Av.Ps,e,h),A.E(A.cb(A.x(A.a([s,B.aO,A.p(h,A.x(o,B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.m),h,h,h,h,B.vc,h,h,1/0)],u),B.l,h,B.e,B.h,0,B.p),B.t,h,B.y,h,h,E.aoE,h,h,B.ah),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.av6.prototype={
R(){return new C.aHQ(A.A8(B.OK,B.ov,B.vH))}}
C.aHQ.prototype={
t(){this.d.t()
this.a2()},
aPP(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.ji(w,d)},
ci0(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.iAd(t)
if(s!=null){this.aPP(s)
return}r=C.hFl(t)
if(r!=null)q=A.cW(r,p,0)
else q=!1
if(q){this.aPP(B.a.i(B.a.aY(r,B.a.cc(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eV(A.a([A.aI(t,t,t,t,A.W(u.f?B.rf:An.Qx,t,t,t,t,t),t,t,t,new C.f0s(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Cs,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.h6Y,t,t,t,1,t,!0),q=A.A7(u.d,B.bX,u.gci_()),p=A.n(28)
p=A.at(A.p(t,t,B.f,t,t,new A.o(t,t,A.K(B.aV,B.r,3),p,A.a([new A.aa(2,B.H,B.aV.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.v.j(0.72)
v=A.n(16)
return A.c5(r,B.v,new A.an(B.a0,t,B.b4,B.t,A.a([q,p,A.ao(32,A.p(t,D.h5J,B.f,t,t,new A.o(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jC,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aMM.prototype={
a9(){return"_WorksheetTab."+this.b}}
C.Pn.prototype={
R(){return new C.aHS(D.af4,A.a([],x.D))},
bw(){return this.r.$0()},
ge9(){return this.c}}
C.aHS.prototype={
gcJh(){return J.bJ2(this.e,0,new C.f1a())},
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
return A.b(C.DU(q.a.c).de(0,B.kg),$async$wt)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.f16(q,p))
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
if(q.c!=null&&q.f)q.l(new C.f17(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wt,v)},
IP(d){return this.bOP(d)},
bOO(){return this.IP(null)},
bOP(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iCg(l,d),$async$IP)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lY(l,r,q,D.dtu,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Ms(t.a.c,p),$async$IP)
case 4:o=f
w=5
return A.b(t.wt(),$async$IP)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.T(D.fwD)
w=1
break}n=J.aR(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.T(D.fys)
else n.K(q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fl(m)
case 1:return A.h(u,v)}})
return A.i($async$IP,v)},
Fl(d){return this.cm2(d)},
cm2(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Fl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hM(s,new C.av7(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$Fl)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Ms(u.a.c,t),$async$Fl)
case 5:case 4:w=6
return A.b(u.wt(),$async$Fl)
case 6:return A.h(null,v)}})
return A.i($async$Fl,v)},
wd(d){return this.c4a(d)},
c4a(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bHn(),$async$wd)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hM(r,D.aNv,!0,"NgmyWorksheetProjectScan",x.N),$async$wd)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bHU(q),$async$wd)
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
r.T(A.b3(null,null,null,null,null,B.t,null,A.c(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hqd(s)
w=15
return A.b(C.Ms(t.a.c,p),$async$wd)
case 15:o=f
w=16
return A.b(t.wt(),$async$wd)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.T(D.fyx)
w=1
break}r.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fl(p)
case 1:return A.h(u,v)}})
return A.i($async$wd,v)},
OZ(d){return this.bNr(d)},
bNr(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$OZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ce(null,null,!0,null,new C.f0S(d),s,null,!0,!0,x.y),$async$OZ)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.ps(t.a.c,A.a([],x.D)),$async$OZ)
case 6:w=7
return A.b(t.wt(),$async$OZ)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(D.fwI)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OZ,v)},
cmf(d){var w=this.c
w.toString
A.bU(B.L,null,new C.f10(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b9n(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.ka
else w=B.c
v=A.n(16)
u=A.K(p?B.en:B.bO,B.r,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.m),r,r,r,r,B.bT,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.p(r,A.x(A.a([s,B.af,t,B.bw,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bu:B.bk,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.m),r,r,r,r,B.tv,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a1v(d,e){return this.cm3(d,e)},
cm3(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1v=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.f0W(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a1v)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hPK(r,new C.f0X(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.P0(d,e),$async$a1v)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1v,v)},
b6m(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.m),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aB
else t=h.a?B.aS:B.aw
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bu:B.bk,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(A8.D8,A.A(A.a([s,B.bc,t,A.W(B.eJ,w?B.bu:B.bk,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
ct9(d,e,f,g,h,i){return this.b6m(!1,d,e,f,g,h,i)},
P0(d,e){return this.bNB(d,e)},
bNB(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lC(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$P0)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bG2(t.a.c,d.a),$async$P0)
case 6:w=7
return A.b(t.wt(),$async$P0)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$P0,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.ur(n),l=n?B.c5:B.hW
if(p.f)n=D.bgm
else{w=A.aF(d,B.dJ,x.w).w
v=p.bHR(m)
u=p.c3e(m)
t=p.gbES()
if(n)s=B.ka
else s=B.c
r=A.n(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.GE(A.p(o,A.A(A.a([p.aEs(R.Q5,"Projects",m,D.af4),p.aEs(B.vj,"Cashier",m,D.b47),p.aEs(B.I6,"Family Tree",m,D.hWE)],q),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.eA,0.95,t,o),B.by],q)
v=p.d
if(v===D.af4){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY,new C.aA0(p.gaUf(),o)],q),B.l,o,B.e,B.h,0,o,o),B.aA,p.ctb(m)],q))}else{n=p.a
if(v===D.b47)t.push(new C.aqV(n.c,m,o))
else{v=p.r
t.push(new C.as7(n.c,n.d,n.e,n.f,new C.f1d(p),new C.f1e(p),new A.bf(v,x.b4)))}}n=A.cb(A.x(t,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c5(o,l,A.bo(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bHR(d){var w=null,v=A.n(8),u=d.a,t=A.W(A2.a3q,u?B.bu:B.bk,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.jX,A.A(A.a([t,B.bb,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bu:B.bk,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.M,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f0P(this),w,w,w,w,w,w,w)},
gbES(){switch(this.d.a){case 0:return D.aed
case 1:return D.hJf
case 2:return D.aee}},
c3e(d){var w=null,v=A.n(15),u=A.a([new A.aa(0,B.H,B.aV.j(0.35),B.cw,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.c2Z,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,44,w,w,w,w,w,44),B.bc,D.bNi,A.aG(!1,B.a3,!0,w,A.aM(!1,A.n(12),!0,A.p(w,D.c0f,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f0T(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.B,w,B.e,B.h,0,w,w),r=B.b5.j(0.55),q=A.n(12)
return new C.GE(A.p(w,A.x(A.a([new A.D(B.HI,s,w),A.p(w,A.x(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.c(A.BF(this.gcJh()),w,w,w,w,w,w,D.fQx,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.m),w,w,w,V.tu,B.jC,w,w,1/0)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hJe,w)},
aEs(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aV:B.L,q=A.n(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.aa(0.5,B.H,B.aV.j(0.42),B.cP,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bk
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bk
return A.E(A.aG(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cT(u,A.A(A.a([w,B.e3,new A.d6(1,B.cg,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.b9,B.h,0,u,u),u,u,B.cm,new A.o(r,u,p,q,o,u,B.m),B.j0,u,u,u,u,B.HR,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f19(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
ctb(d){var w,v,u,t,s,r,q=this,p=null
if(J.cv(q.e)){w=d.a
v=w?B.el:B.c
u=A.n(15)
t=A.p(p,D.c0m,B.f,p,p,new A.o(p,p,p,p,A.a([new A.aa(2,B.H,B.aV.j(0.5),B.eT,28)],x.V),D.cd4,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,18,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.GE(A.p(p,A.x(A.a([t,B.dh,s,B.O,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bk,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.ec,A.A(A.a([A.E(q.aVR(B.jH,"Scan QR",new C.f13(q),d),1),B.ar,A.E(q.aVR(S.Ab,"Upload file",new C.f14(q),d),1)],r),B.l,p,B.e,B.h,0,p,p),B.aA,A.bI(D.hhA,p,q.gaUf(),A.bp(B.aV,p,p,p,B.c,B.hr,p,p,new A.b9(A.n(12),B.a1),p,p,p))],r),B.l,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bJO,1.05,D.aed,p)}w=J.b8(q.e,new C.f15(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.GE(A.x(w,B.l,p,B.e,B.h,0,B.p),16,B.bT,1,D.aed,p)},
aVR(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,t,!0,A.p(w,A.x(A.a([A.W(d,B.b5,w,w,w,26),B.O,A.c(e,w,w,w,w,w,w,D.fOH,B.K,w,w)],x.p),B.l,w,B.e,B.M,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.m),w,w,w,w,AQ.a1C,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
cta(d,e){var w,v,u=null,t=e.a,s=t?B.el:B.c,r=A.n(14),q=A.K(t?B.en:B.bO,B.r,1),p=A.a([new A.aa(0,B.H,B.v.j(t?0.35:0.08),B.eC,10)],x.V),o=A.n(14),n=t?B.bu:B.bk
n=A.bx(B.YO,new A.fL(1.7777777777777777,C.aTB(!0,B.fq,1/0,R.Q5,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.c(""+d.d.length+" budget items \xb7 "+A.BF(d.gxR()),u,u,u,u,u,u,D.fMD,u,u,u)],w),B.B,u,B.e,B.h,0,B.p),1)
return A.p(u,A.aG(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bH,A.A(A.a([v,A.aI(u,u,u,u,A.W(AD.a4u,t?B.bu:B.bk,u,u,u,u),u,u,u,new C.f11(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.h,0,u,u),u)],w),B.B,u,B.e,B.h,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f12(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.m),u,u,u,B.dR,u,u,u,1/0)}}
C.bBT.prototype={}
C.rG.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd2t(){var w,v,u,t,s=this.c
if(s===B.i.fO(s))w=B.o.v(B.i.M(s))
else{v=B.i.a6(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lY.prototype={
gxR(){return B.d.cD(this.d,0,new C.cIR())},
ak(){var w=this,v=w.d,u=A.U(v).k("O<1,a9<m,@>>")
v=A.B(new A.O(v,new C.cIQ(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bgP(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lY(w.a,w.b,v,u,w.e)},
bgx(d){return this.bgP(d,null)},
U7(d){return this.bgP(null,d)}}
C.IH.prototype={
a9(){return"FamilyGender."+this.b}}
C.ig.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hKQ(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aHc(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.ig(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.an7.prototype={
a9(){return"FamilyTreeAccessRole."+this.b}}
C.lb.prototype={
garp(){var w=this.f
return new A.X(w,new C.bUV(),A.U(w).k("X<1>")).gJ(0)},
ak(){var w=this,v=w.f,u=A.U(v).k("O<1,a9<m,@>>")
v=A.B(new A.O(v,new C.bUU(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.isf(w.y),"games",w.z],x.N,x.z)},
xb(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.lb(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bgO(d,e){var w=null
return this.xb(w,w,w,d,e,w,w,w,w)},
cSH(d,e,f,g,h,i,j){return this.xb(d,e,null,f,g,h,i,j,null)},
aHh(d,e){var w=null
return this.xb(w,w,w,w,d,w,w,e,w)},
cSJ(d,e,f,g,h,i,j,k){return this.xb(d,e,null,f,g,h,i,j,k)},
cRc(d){var w=null
return this.xb(w,w,w,w,w,w,w,d,w)},
cRA(d){var w=null
return this.xb(w,w,w,w,w,w,w,w,d)},
bgr(d){var w=null
return this.xb(w,w,d,w,w,w,w,w,w)},
aH2(d){var w=null
return this.xb(w,w,w,w,w,d,w,w,w)},
cSe(d,e,f){var w=null
return this.xb(w,d,w,w,e,w,w,f,w)},
cR_(d){var w=null
return this.xb(w,w,w,d,w,w,w,w,w)},
cRM(d,e){var w=null
return this.xb(d,w,w,w,w,w,e,w,w)}}
C.cIS.prototype={
a9(){return"WrapAlignment."+this.b}}
C.cIT.prototype={
a9(){return"WrapCrossAlignment."+this.b}}
C.aJX.prototype={}
C.bce.prototype={
aj(d){this.a=d.a
this.b=d.b},
d1(d){var w=new C.bce()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b5(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bcd.prototype={
gx3(){return!0},
gGV(){return this.z.b<this.b.length},
aXx(d){switch(0){case 0:return d.a.c}},
aXd(d){switch(0){case 0:return d.a.d}},
bXG(d,e){switch(0){case 0:return new A.i9(d,e)}},
bX3(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hm(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.j5(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Iq(b4)
switch(0){case 0:v=b5.b
u=new A.l8(0,v,0,1/0)
t=w===B.Wx
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fE(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hm(b4,u,!0)
f=b1.aXx(g)
f.toString
e=b1.aXd(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJX(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJX(k,j,i))}d=s.length
switch(0){case 0:q=b5.cC(new A.i9(m,l))
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
a8=b1.aXx(g)
e=b1.aXd(g)
e.toString
a9=b1.bX3(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bXG(a6,a3+a9)
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
v=A.dy()
u=r.a
v.ei(u.a,u.b,0,1)
w.pv(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fZ(d)
w.nE(0)},
Hr(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iw(){return this.z}}
C.bA8.prototype={}
var z=a.updateTypes(["ay<~>()","P(ig)","~()","P(lb)","P(nH)","a9<m,@>(lb)","F(lb,lb)","F(ig,ig)","m(ig)","lb(a9<@,@>)","P(lY)","nH(a9<@,@>)","a9<m,@>(nH)","P(v6)","v6()","F(ig)","ai<ig>()","P(zS)","a0P(Z)","m?(ig)","eN<m?>(ig)","ay<~>(lY)","P(rG)","a9<m,@>(ig)","ig(a9<@,@>)","F(lY,lY)","P(agK)","~(bg)","w(p3)","F(F,aaM)","P(qX<F>)","~(qX<F>)","Uu(Z)","P(N4)","P(v5)","~(ig)","m(m)","WQ(Z)","Ut(Z)","af6(Z)","a_K(Z)","ig(ig)","cN(bv<m,GT>)","cN(L9)","a0d(Z)","F?(ig)","ig()","P(L9)","D(ig)","~(IH)","a09(Z)","w(IH,m,a_)","P(agD)","bv<m,ai<a9<m,@>>>(m,ai<nH>)","a0b(Z)","+count,id,name(F,m,m)(lb)","m(lb)","a18(Z)","a19(Z)","P(md)","md()","a_g(Z)","a2V(Z)","a_M(Z)","a_L(Z)","~(F)","~(m,lL?)","w(rG)","afr(Z)","~(lH)","ay<~>([m?])","G(G,lY)","w(lY)","G(G,rG)","a9<m,@>(rG)","rG(a9<@,@>)","ai<lL>()","v5()","m(V)","lY(a9<@,@>)","cm(IG)","m(lY)","a9<m,@>(lY)","F(nH,nH)","lb(a9<m,@>)","lb(lb)"])
C.fW2.prototype={
$1(d){return d.a+" "+d.b},
$S:127}
C.fW1.prototype={
bq8(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rx(s,d,B.ie,"book",E.Ht),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.Y(r!=null&&A5.Md(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bq8(d)},
$S:259}
C.fW3.prototype={
$1(d){return d.b},
$S:127}
C.h5x.prototype={
$1(d){var w=null
return A.eG(w,B.L,new H.QP(this.a,this.b,w),w,w,0,B.a1R,w,B.dc,w,w,w)},
$S:47}
C.fIT.prototype={
$1(d){return d!=null},
$S:218}
C.fIU.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:218}
C.fIZ.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:164}
C.fTL.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fi(d,w,w,w,A.hp(w,B.u8,w,w,w,w,w,w,w,B.dL,w,w,10.5,w,B.eM,w,!0,w,w,w,w),w),u=f?B.eM:B.x9
return new A.om(D.bF3,A.abA(A.a([new A.h8(130,w,v),new A.zR(1,B.I0,A.fi(e,w,w,w,A.hp(w,g==null?D.eFj:g,w,w,w,w,w,w,w,B.dL,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.z9,B.m6))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1944}
C.fTK.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.wg(999)
f=A.xU(A.m7(h,A.fi("Cashier",h,h,h,A.hp(h,D.B5,h,h,h,h,h,h,h,B.dL,h,h,10,h,B.eM,h,!0,h,h,h,h),h),h,new A.l9(D.eFa,h,f,B.ik,h),h,h,D.bFx,h))
w=A.xU(A.fi("Debt receipt",h,h,h,A.hp(h,h,h,h,h,h,h,h,h,B.dL,h,h,22,h,B.eM,h,!0,h,h,h,h),h))
v=A.xU(A.fi(C.xA(new A.V(Date.now(),0,!1),!0),h,h,h,D.acC,h))
u=A.wg(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fi(s,h,h,h,A.hp(h,h,h,h,h,h,h,h,h,B.dL,h,h,14,h,B.eM,h,!0,h,h,h,h),h)
r=A.fi("Person who owes",h,h,h,D.acC,h)
q=A.wg(10)
p=x.Z
u=A.m7(h,A.zJ(A.a([s,new A.h8(h,2,h),r,new A.h8(h,10,h),A.m7(h,A.zJ(A.a([A.fi("Amount owed",h,h,h,D.acC,h),new A.h8(h,2,h),A.fi(A.BF(t.c),h,h,h,A.hp(h,D.B5,h,h,h,h,h,h,h,B.dL,h,h,20,h,B.eM,h,!0,h,h,h,h),h)],p),B.tm,B.m6),h,new A.l9(B.qd,h,q,B.ik,h),h,h,D.bEL,1/0)],p),B.tm,B.m6),h,new A.l9(E.aOT,h,u,B.ik,h),h,h,D.bGL,1/0)
q=new A.o7(D.eFd,0.9,B.lo)
r=A.wg(12)
s=i.c
o=s.$2("Original due",C.xA(t.r,!1))
n=s.$2("Current due",C.xA(t.f,!1))
m=i.d
l=new A.o7(m,1.1,B.lo)
k=A.wg(8)
j=i.a
k=A.a([o,n,new A.h8(h,6,h),A.m7(h,A.xU(A.fi(t.gaOm(),h,h,h,A.hp(h,m,h,h,h,h,h,h,h,B.dL,h,h,11,h,B.eM,h,!0,0.5,h,h,h),h)),h,new A.l9(h,new A.qg(l,l,l,l),k,B.ik,h),h,h,D.bFG,1/0),new A.h8(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.B5))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.B5))
else{n=A.fi("Missed days ("+n+")",h,h,h,A.hp(h,B.u8,h,h,h,h,h,h,h,B.dL,h,h,10.5,h,B.eM,h,!0,h,h,h,h),h)
m=A.U(o).k("O<1,U3>")
o=A.B(new A.O(o,new C.fTJ(),m),m.k("aj.E"))
B.d.u(k,A.a([new A.h8(h,4,h),n,new A.h8(h,6,h),new C.bcd(5,5,new C.bce(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h8(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h8(h,8,h),w,new A.h8(h,3,h),v,new A.h8(h,16,h),u,new A.h8(h,10,h),A.m7(h,A.zJ(k,B.z9,B.m6),h,new A.l9(h,new A.qg(q,q,q,q),r,B.ik,h),h,h,B.anv,1/0)],p)
w=j.a
if(w!=null){v=new A.o7(B.Kx,1,B.lo)
B.d.u(f,A.a([new A.h8(h,16,h),A.fi("Debtor signature",h,h,h,A.hp(h,B.u8,h,h,h,h,h,h,h,B.dL,h,h,10,h,B.eM,h,!0,h,h,h,h),h),new A.h8(h,6,h),A.m7(h,new A.IY(w,B.Z0,h,h),h,new A.l9(h,new A.qg(v,v,v,v),A.wg(6),B.ik,h),82,h,B.Pp,1/0)],p))}f.push(new A.h8(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fi(w,h,h,h,D.fEO,h))
f.push(new A.h8(h,18,h))
f.push(A.xU(A.fi("NGMY.ORG",h,h,h,A.hp(h,D.B5,h,h,h,h,h,h,h,B.dL,h,h,14,h,B.eM,h,!0,1.8,h,h,h),h)))
return f},
$S:355}
C.fTJ.prototype={
$1(d){var w=null,v=new A.o7(D.Ky,0.7,B.lo),u=A.wg(999)
return A.m7(w,A.fi(C.xA(d,!1),w,w,w,A.hp(w,D.Ky,w,w,w,w,w,w,w,B.dL,w,w,9.5,w,B.eM,w,!0,w,w,w,w),w),w,new A.l9(w,new A.qg(v,v,v,v),u,B.ik,w),w,w,D.bLd,w)},
$S:1945}
C.cae.prototype={
$1(d){var w=null,v=B.bE.j(0.08),u=A.n(999),t=A.K(B.bE.j(0.28),B.r,1)
return A.p(w,A.c(C.xA(d,!1),w,w,w,w,w,w,D.fM4,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,w,B.eY,w,w,w)},
$S:1946}
C.h63.prototype={
$1(d){var w=null,v=A.aF(d,B.bW,x.w).w,u=A.n(26),t=A.aI(w,w,w,w,D.c3Z,w,w,w,new C.h60(d),w,w,w,w,w,B.cl),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eG(w,B.L,new A.cQ(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a3,!0,u,new A.D(B.a1D,A.x(A.a([new A.bK(B.a9,w,w,t,w),new A.d6(1,B.cg,A.cb(A.x(A.a([new A.e5(new C.b1a(r,w),s),B.S,A.A(A.a([A.E(A.eo(B.Aj,w,D.hdL,new C.h61(s,r,d),A.dk(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f8,w,new A.b9(A.n(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.E(A.db(B.a55,w,D.ha6,new C.h62(r,d),A.bp(B.b5,w,w,w,B.c,w,B.f8,w,new A.b9(A.n(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.h,0,w,w)],p),B.l,w,B.e,B.M,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.M,0,B.p),w),B.f,B.aw,0,w,w,w,w,w,B.ai),w),w,w,0,AM.a22,w,B.dc,w,w,w)},
$S:47}
C.h60.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h61.prototype={
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
break}r=J.eU(B.dM.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aw(o,0,32)
w=5
return A.b(A.rA(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h62.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.h_U(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.T(A.b3(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h5W.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eG(w,B.aw,A.x(A.a([new A.D(D.bGz,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.nv,w,w,w),1),A.aI(w,w,w,w,B.lC,w,w,w,new C.h5U(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),w),new A.d6(1,B.cg,new A.D(B.f2,A.bx(A.n(14),A.h5(t,B.z,w,w,B.cp,B.dH,!1,w,!1,w,w),B.aq),w),w),new A.D(B.P4,new A.a6(1/0,w,A.db(B.oa,w,D.aZh,new C.h5V(t,this.c,d),A.bp(B.b5,w,w,w,B.c,w,w,w,new A.b9(A.n(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.M,0,B.p),w,w,w,B.Pg,w,B.dc,w,new A.b9(v,B.a1),w)},
$S:47}
C.h5U.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h5V.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rA(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h67.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eG(w,B.aw,new A.D(D.bGH,A.x(A.a([A.A(A.a([D.bMo,A.aI(w,w,w,w,B.lC,w,w,w,new C.h65(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),B.O,new A.e5(A.bx(A.n(14),A.p(w,A.b4(w,w,w,new C.bew(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a6(1/0,w,A.db(B.oa,w,D.aZh,new C.h66(t,s,d),A.bp(B.b5,w,w,w,B.c,w,w,w,new A.b9(A.n(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.M,0,B.p),w),w,w,w,w,w,B.dc,w,new A.b9(v,B.a1),w)},
$S:47}
C.h65.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h66.prototype={
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
r=J.eU(B.dM.gaS(s))
w=5
return A.b(A.rA(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.T(A.b3(null,null,null,null,null,B.t,null,A.c(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fNP.prototype={
$1(d){return d.a===this.a},
$S:258}
C.dTV.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dTG.prototype={
bpl(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.el:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dTJ(s,q,e),p,!0,!0,!1,B.KR,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dTK(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bpl(d,e)},
$S:1947}
C.dTJ.prototype={
$1(d){var w,v=null,u=this.c===B.xK,t=u?D.dAO:D.dw6
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aS:B.aw,v,v,v,v,v,v,v,v,15,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bo(!0,new A.D(P.ao1,A.x(A.a([u,B.au,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bu:B.bk,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iK(!0,v,v,B.y,D.fvh,new C.dTI(this.a,w,t,d),t.length,v,B.e8,B.ah,!0)],x.p),B.am,v,B.e,B.M,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:27}
C.dTI.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cW.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.n(14)
if(q)u=B.cW
else u=(t.b.a.d.a?B.bu:B.bk).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.p(B.z,C.b19(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dTH(t.d,r),s,s,s,s,s,s,s)},
$S:202}
C.dTH.prototype={
$0(){A.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.dTK.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dTE.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:89}
C.dTF.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cI(B.cm,e,v)
return new A.da(e,!1,A.iC(B.z,A.at(A.aG(!1,B.a3,!0,v,new A.e7(new C.dTD(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bj(t,new A.bq(0.96,1,u),u.k("bj<bR.T>"))),v)},
$S:34}
C.dTD.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aF(d,B.bW,x.w).w,i=l.b,h=i.a.d.a,g=h?B.el:B.c,f=A.n(14),e=A.K((h?B.bu:B.bk).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,16,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.eA,A.W(B.cB,i.a.d.a?B.bu:B.bk,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dTo(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.h,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aWn("Name")
r=l.a
q=r.d==null?k:new C.dTp(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bs:B.ml
n=A.K(B.cW.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bgH(new A.D(B.f7,A.aM(!1,p,!0,A.p(B.z,C.b19(m==null?"\ud83d\udc64":A.fUA(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cr,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.lk,k,B.acr,k,k)
v=A.a([v,B.af,t,B.O,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bk,k,k,k,k,k,k,k,k,11.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ak,A.A(A.a([A.E(i.aX3("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dTq(r,a0),r.d===B.xK),1),B.aa,A.E(i.aX3("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dTv(r,a0),r.d===B.a8X),1)],u),B.l,k,B.e,B.h,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.O,new A.bK(B.a5,k,k,A.hv(D.c2c,D.hc1,new C.dTw(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.cW,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cl)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.v9(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aWo("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.al,k,k,s,k,k,B.eh,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.K((t?B.bu:B.bk).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xA(r.a,!1)
v.push(A.aG(!1,B.a3,!0,q,A.aM(!1,p,!0,A.p(k,A.A(A.a([A.E(A.x(A.a([t,B.bw,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.B,k,B.e,B.h,0,B.p),1),D.bZI],u),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.m),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dTx(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.O,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aWn("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,12.5,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b4I(r.b.length!==0,B.ms,new C.dTy(r,i,a0),new C.dTz(r,a0),"Upload from gallery","ID photo"))
v.push(i.b4I(r.c.length!==0,D.bSX,new C.dTA(r,i,d,a0),new C.dTB(r,a0),"Camera or gallery","Selfie"))
v.push(B.O)
t=l.w
v.push(new AH.a9p("Signature (optional)",t,new C.dTC(a0),new C.dTr(a0,t),new C.dTs(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bu:B.bk
s=(i?B.bu:B.bk).j(0.28)
s=A.E(A.dX(E.aZa,new C.dTt(d),A.dk(k,k,k,k,k,k,k,k,k,t,k,k,B.r3,k,new A.b9(A.n(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cW,k,k,k,B.c,k,B.r3,k,new A.b9(A.n(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.aa,A.E(A.bI(A.c(h?"Save":"Update",k,k,k,k,k,k,B.w9,k,k,k),k,new C.dTu(r,w,d),t),1)],u),B.l,k,B.e,B.h,0,k,k))
return A.p(k,A.cb(A.x(v,B.am,k,B.e,B.M,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.m),k,k,k,B.r5,B.jC,k,k,360)},
$S:170}
C.dTo.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dTp.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dTq.prototype={
$0(){return this.b.$1(new C.dTn(this.a))},
$S:0}
C.dTn.prototype={
$0(){var w=this.a
w.d=B.xK
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dTv.prototype={
$0(){return this.b.$1(new C.dTm(this.a))},
$S:0}
C.dTm.prototype={
$0(){var w=this.a
w.d=B.a8X
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dTw.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dTx.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wc(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dTl(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTl.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gck(),w.gci(),w.gcA(),0,0,0,0,0)},
$S:0}
C.dTy.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.QE(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dTk(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTk.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dTz.prototype={
$0(){return this.b.$1(new C.dTj(this.a))},
$S:0}
C.dTj.prototype={
$0(){return this.a.b=""},
$S:0}
C.dTA.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.el:B.c
w=3
return A.b(A.bU(q,null,new C.dTh(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.QE(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dTi(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTh.prototype={
$1(d){var w=null
return A.bo(!0,A.x(A.a([A.dN(!1,w,w,w,!0,w,w,w,!0,w,w,B.aty,w,w,w,w,new C.dTb(d),!1,w,w,w,w,w,w,w,D.h1Z,w,w,w),A.dN(!1,w,w,w,!0,w,w,w,!0,w,w,B.atw,w,w,w,w,new C.dTc(d),!1,w,w,w,w,w,w,w,D.h94,w,w,w)],x.p),B.l,w,B.e,B.M,0,B.p),!0,!1,B.ag,!0,!0)},
$S:27}
C.dTb.prototype={
$0(){A.a8(this.a,!1).N("camera")
return null},
$S:0}
C.dTc.prototype={
$0(){A.a8(this.a,!1).N("gallery")
return null},
$S:0}
C.dTi.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dTB.prototype={
$0(){return this.b.$1(new C.dTg(this.a))},
$S:0}
C.dTg.prototype={
$0(){return this.a.c=""},
$S:0}
C.dTC.prototype={
$0(){return this.a.$1(new C.dTf())},
$S:0}
C.dTf.prototype={
$0(){},
$S:0}
C.dTr.prototype={
$0(){return this.a.$1(new C.dTe(this.b))},
$S:0}
C.dTe.prototype={
$0(){return B.d.a5(this.a)},
$S:0}
C.dTs.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ajH(u.a,null,null,new C.dTd(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTd.prototype={
$4(d,e,f,g){this.a.$1(new C.dTa(this.b,d))},
$S:444}
C.dTa.prototype={
$0(){var w=this.a
B.d.a5(w)
B.d.u(w,this.b)},
$S:0}
C.dTt.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dTu.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.T(D.fAr)
return}if(w.a.d==null){w.c.K(x.q).f.T(D.fxg)
return}A.a8(w.c,!1).N(!0)},
$S:0}
C.dTY.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:89}
C.dTZ.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.el:B.c,n=A.n(14),m=A.K((p?B.bu:B.bk).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,16,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.BF(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bu:B.bk,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.A_(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.A_(r).length>0?B.bE:B.cW,r,r,r,r,r,r,r,r,12,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bk
t=(q?B.bu:B.bk).j(0.28)
s=x.p
return new A.da(e,!1,A.at(A.aG(!1,B.a3,!0,r,A.p(r,A.x(A.a([p,B.O,v,u,B.aA,A.A(A.a([A.E(A.dX(B.oo,new C.dTW(d),A.dk(r,r,r,r,r,r,r,r,r,w,r,r,B.jW,r,new A.b9(A.n(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.E(A.bI(D.h9w,r,new C.dTX(d),A.bp(B.cW,r,r,r,B.c,r,B.jW,r,new A.b9(A.n(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.h,0,r,r)],s),B.am,r,B.e,B.M,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.m),r,r,r,B.zw,B.HI,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dTW.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dTX.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dTS.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dTT(r),p=r.a.d.a,o=p?B.el:B.c,n=A.n(14),m=A.K((p?B.bu:B.bk).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aS:B.aw,s,s,s,s,s,s,s,s,14,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.BF(l.c),s,s,s,s,s,s,D.fNI,s,s,s)],p),B.l,s,B.e,B.h,0,s,s)
w=A.j3((r.a.d.a?B.bu:B.bk).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a3M,"View receipt",new C.dTL(r,d,l))
u=l.x!=null
t=u?B.pZ:B.rc
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bGE,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dTM(r,d,l)),q.$3$icon$label$onTap(B.Dq,"Edit",new C.dTN(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.ms,"View / download ID",new C.dTO(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bSW,"View / download selfie",new C.dTP(r,d,l)))
if(l.gaIX())p.push(q.$3$icon$label$onTap(Ar.a4W,"View / download signature",new C.dTQ(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bE,B.eq,"Delete",new C.dTR(r,d,l)))
p.push(B.au)
return A.bo(!0,new A.D(V.tu,A.p(s,A.x(p,B.l,s,B.e,B.M,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:27}
C.dTT.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.aw
else w=d
return A.aM(!1,v,!0,new A.D(B.eX,A.A(A.a([A.W(e,w,v,v,v,20),B.bc,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1948}
C.dTL.prototype={
$0(){A.a8(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h6_(w,this.c)},
$S:0}
C.dTM.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.Tr(this.c)},
$S:0}
C.dTN.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.E0(this.c)},
$S:0}
C.dTO.prototype={
$0(){var w,v,u
A.a8(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bIe(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dTP.prototype={
$0(){var w,v,u
A.a8(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bIe(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dTQ.prototype={
$0(){A.a8(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h64(w,this.c)},
$S:0}
C.dTR.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.QD(0,this.c)},
$S:0}
C.dU_.prototype={
$1(d){return d.x==null},
$S:258}
C.dU0.prototype={
$1(d){return d.x!=null},
$S:258}
C.dU1.prototype={
$2(d,e){return d+e.c},
$S:1949}
C.dU2.prototype={
$0(){return this.a.bFo()},
$S:0}
C.dTU.prototype={
$0(){return this.a.ahc(this.b)},
$S:0}
C.fOA.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fOB.prototype={
$0(){return B.d.gH(D.a6d)},
$S:z+77}
C.dj7.prototype={
$0(){var w=this.a
return w.l(new C.dj5(w,this.b))},
$S:0}
C.dj5.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dj6.prototype={
$0(){},
$S:0}
C.dj8.prototype={
$0(){var w=this.a.gc3Z()
A.a8(this.b,!1).N(w)
return null},
$S:0}
C.fR8.prototype={
$1(d){return C.huB(A.a1(d,x.N,x.z))},
$S:z+11}
C.fR9.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fRa.prototype={
$2(d,e){var w=A.c8(d.a,null),v=A.c8(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.h4B.prototype={
$1(d){return d.ak()},
$S:z+12}
C.hdg.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fNG.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bTC.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eF(e,v)?v:null},
$S:1950}
C.h5b.prototype={
$1(d){var w=this
return new C.a0b(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.djN.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.djM(w,d))},
$S:z+80}
C.djM.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djB.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cL(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.djy.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dj9.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dja.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.djC.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dji.prototype={
$1(d){var w=null,v=A.Q(d).ax.a===B.I,u=v?B.el:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bk,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ei(A.a([A.bM(!1,B.du,w,w,!0,w,w,w,new C.djg(d),w,w),A.bI(B.y9,w,new C.djh(d),A.bp(B.nG,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.djg.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.djh.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.djj.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.djz.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.djA.prototype={
$0(){return B.d.gH(D.Av)},
$S:z+14}
C.dje.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzj(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Ut(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.djf.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djk.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_K(v,u,J.ad(w.d),null)},
$S:z+40}
C.djl.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djL.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.aA(s,new C.a_p(r.y,r.gzj(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.djJ(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.bdR(v,e,w,u,t,r.gbW8(),C.hKP(r.y.Q),r.gzj(0),s)
w=t}return A.c9(q,new C.djK(r,e),new A.D(B.a1W,w,s))},
$S:1951}
C.djK.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd3(t).ay){t=this.b
u=x.cy.a(B.d.gd3(u.f.f)).gvv(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.dy()
t=u.a
t.$flags&2&&A.ak(t)
t[11]=0.0013
u.fI(v*3.141592653589793*0.5)
return A.fE(B.a5,A.d2(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.djJ.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aK8(B.qY,B.iL)},
$S:0}
C.djv.prototype={
$0(){var w=this.a
return w.l(new C.dju(w))},
$S:0}
C.dju.prototype={
$0(){return this.a.w=!0},
$S:0}
C.djw.prototype={
$0(){var w=this.a.c
w.toString
A.a8(w,!1).N(null)
return null},
$S:0}
C.djb.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.kF.j(0.5),r=x.p,q=A.a([D.h0v,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cv(p.d)?"Write this book":"Write a new book"
q.push(p.a_p(d,B.eg,w,J.cv(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_p(d,K.arq,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cL(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cy,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.l_.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cy,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.l_.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_p(d,A0.asp,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_p(d,B.oZ,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_p(d,B.oZ,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eG(u,E.CC,A.bo(!0,new A.D(Aq.zt,A.x(q,B.B,u,B.e,B.M,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.Pj,u,B.dc,u,new A.b9(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:47}
C.djx.prototype={
$0(){A.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.djo.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cL(w.d)
return new C.a0d(v,J.cL(w.d),w.r+1,null)},
$S:z+44}
C.djp.prototype={
$1(d){var w=null
return A.p9(!1,A.ei(w,w,w,E.CC,new A.kf(this.a,new C.djn(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:344}
C.djn.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.ac4,B.pi,A.E(A.c(e,w,w,w,w,w,w,B.jN,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:765}
C.djq.prototype={
$0(){return this.a.a=!1},
$S:53}
C.djr.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.djs.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djt.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BM(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.T6(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.djm(s,t))
w=4
return A.b(s.lf(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.djm.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djE.prototype={
$1(d){var w=null
return A.p9(!1,A.ei(w,w,w,E.CC,new A.kf(this.a,new C.djD(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:344}
C.djD.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.ac4,B.pi,A.E(A.c(e,w,w,w,w,w,w,B.jN,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:765}
C.djF.prototype={
$0(){return this.a.a=!1},
$S:53}
C.djG.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.djH.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.djI.prototype={
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
C.djc.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.bmi(B.qY,Ac.OU)},
$S:0}
C.djd.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aK8(B.qY,Ac.OU)},
$S:0}
C.dlz.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dlA.prototype={
$1(d){var w=this.a
return w.l(new C.dly(w))},
$S:9}
C.dly.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dlB.prototype={
$1(d){var w=this.a
return w.l(new C.dlx(w))},
$S:9}
C.dlx.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dlC.prototype={
$1(d){var w=this.a
return w.l(new C.dlw(w))},
$S:9}
C.dlw.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dlD.prototype={
$0(){var w=this.a
return w.l(new C.dlv(w,this.b))},
$S:0}
C.dlv.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dlE.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga3m()
A.a8(this.b,!1).N(new A.bsR(w,v))},
$S:0}
C.dk1.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dk0.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a09(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dk5.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dk4.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bcf(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hD,v,v,v)
return A.ei(A.a([A.bM(!1,B.du,v,v,!0,v,v,v,new C.dk2(d),v,v),A.bI(B.y9,v,new C.dk3(d),A.bp(B.nG,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.CC,w,v,v,v,v,D.h_h,v)},
$S:18}
C.dk2.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dk3.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dk6.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dk7.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a6(s,t,w[u],t))
return A.cb(A.bZ(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bHD,t,t,B.ah)},
$S:348}
C.dk_.prototype={
$0(){return this.a.Rs(0,this.b)},
$S:0}
C.djZ.prototype={
$0(){return this.a.QS(0,this.b)},
$S:0}
C.cRT.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cRU.prototype={
$0(){return B.d.gH(D.Av)},
$S:z+14}
C.cRV.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bS(0,new A.D(d,new A.bP(new A.o(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bm,w,w),w),0,0,0)},
$S:1953}
C.daS.prototype={
$1(d){return this.a.l(new C.daR(this.b,this.c))},
$S:9}
C.daR.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.dbg.prototype={
$1(d){return this.a.l(new C.db3())},
$S:2}
C.db3.prototype={
$0(){},
$S:0}
C.dbh.prototype={
$1(d){return this.a.l(new C.db2())},
$S:2}
C.db2.prototype={
$0(){},
$S:0}
C.dbi.prototype={
$0(){var w=this.a
return w.l(new C.db1(w,this.b))},
$S:0}
C.db1.prototype={
$0(){var w=this.a
return w.d=w.goB().Gz(this.b.a)},
$S:0}
C.dbj.prototype={
$0(){var w=this.a
return w.l(new C.db0(w,this.b))},
$S:0}
C.db0.prototype={
$0(){var w=this.a
return w.d=w.goB().cQw(this.b)},
$S:0}
C.dbk.prototype={
$1(d){return this.a.l(new C.db_())},
$S:2}
C.db_.prototype={
$0(){},
$S:0}
C.dbl.prototype={
$0(){var w=this.a
return w.l(new C.daZ(w,this.b))},
$S:0}
C.daZ.prototype={
$0(){var w=this.a
return w.d=w.goB().cQB(this.b.a)},
$S:0}
C.dbm.prototype={
$1(d){var w=this.a
return w.l(new C.dbb(w,d))},
$S:6}
C.dbb.prototype={
$0(){var w=this.a
return w.d=w.goB().cRv(this.b)},
$S:0}
C.dbn.prototype={
$1(d){var w=this.a
return w.d=w.goB().aH5(d)},
$S:2}
C.dbo.prototype={
$1(d){var w=this.a
return w.d=w.goB().cQE(d)},
$S:2}
C.dbq.prototype={
$1(d){var w=this.a
return w.d=w.goB().cRt(d)},
$S:2}
C.dbr.prototype={
$1(d){var w=this.a
return w.l(new C.dba(w,d))},
$S:9}
C.dba.prototype={
$0(){var w=this.a
return w.d=w.goB().cRk(this.b)},
$S:0}
C.dbs.prototype={
$0(){var w=this.a,v=w.goB(),u=B.a.i(w.gzj(0).a.a),t=B.a.i(w.gaEf().a.a)
u=v.bgY(B.a.i(w.gatH().a.a),t,u)
A.a8(this.b,!1).N(u)
return null},
$S:0}
C.bTM.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bTG.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bTF(w,d))},
$S:11}
C.bTF.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bTP.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bTH.prototype={
$0(){var w=this.a
w.Q=D.b3H
w.aeL(1)
w.r.x=null},
$S:0}
C.bTI.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b3H)return
w=new A.e1()
w.cT(u.as*13+u.a.e)
v=u.r
v.Q=3+w.av(3)
v.z=D.d9L[w.av(6)]
v.as=u.f.a+2.6},
$S:0}
C.bTL.prototype={
$0(){var w=this.a
w.Q=D.aeL
w.aeL(2)
w.r.z=null},
$S:0}
C.bTK.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hUz
t.aeL(3)
w=t.r
w.d=s
w.x="I say: "+t.gCT()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.av(3)
w.z=s?D.dgW[v.av(4)]:D.dDw[v.av(3)]
w.as=t.a+2.8},
$S:0}
C.bTN.prototype={
$0(){var w=this.a
w.Q=D.b3I
w.CW=this.b
w.cy=1
w.aeL(4)
w.r.f=w.f.a+5},
$S:0}
C.bTO.prototype={
$0(){},
$S:0}
C.bTJ.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bTD.prototype={
$0(){return this.a.LC(this.b)},
$S:0}
C.bTE.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bVi.prototype={
$0(){var w=this
return w.a.RM(w.b,0,w.c,w.d)},
$S:0}
C.bVj.prototype={
$0(){var w=this
return w.a.RM(w.b,3,w.c,w.d)},
$S:0}
C.bVk.prototype={
$0(){var w=this
return w.a.RM(w.b,1,w.c,w.d)},
$S:0}
C.bVl.prototype={
$0(){var w=this
return w.a.bVz(w.b,w.c,w.d)},
$S:0}
C.bVm.prototype={
$0(){var w=this
return w.a.RM(w.b,4,w.c,w.d)},
$S:0}
C.bVn.prototype={
$0(){var w=this
return w.a.RM(w.b,2,w.c,w.d)},
$S:0}
C.bVo.prototype={
$0(){var w=this
return w.a.RM(w.b,5,w.c,w.d)},
$S:0}
C.bVp.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:766}
C.bVh.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a7m[d],p=q.a.a7(0,new A.r(0,-q.b*1.2*124)),o=A.h2(r,B.cK,r,3,r,A.d3(r,r,r,r,r,r,r,r,r,D.fEt,e),B.a7,B.ce,r,B.e5,B.cf)
o.nA(130)
w=o.b.a.c
w=p.aI(0,new A.r(0,w.gb8(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.by(A.bY(w,v.gb8(v)+12,u+18),B.ii)
u=this.a
v=t.eI(B.dT)
w=$.T()
s=A.L()
s.r=B.dI.gp(0)
u.aq(v,s)
s=A.L()
s.r=D.qO.gp(0)
u.aq(t,s)
w=new A.aH(w.r,B.aj,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bA())
v=A.L()
v.r=D.qO.gp(0)
u.af(w,v)
o.a4(u,new A.r(t.a+9,t.b+6))},
$S:767}
C.bU2.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bU3.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.anu(d),w.anu(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fBy.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.hd6.prototype={
$2(d,e){if(e!=null)J.c6(this.a.c_(0,d,new C.hd7()),e)},
$S:z+66}
C.hd7.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.hd8.prototype={
$1(d){return d!==this.a},
$S:3}
C.hd9.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.hda.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hd5(this.c,d))},
$S:3}
C.hd5.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.hdb.prototype={
$1(d){return d!==this.a},
$S:3}
C.hdc.prototype={
$1(d){return d!==this.a},
$S:3}
C.hdd.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hd4(this.c,d))},
$S:3}
C.hd4.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fPd.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.h3v.prototype={
$1(d){return d.Q},
$S:z+15}
C.h3w.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fL1.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fS4.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bON.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.hdx.prototype={
$2(d,e){return B.o.aQ(C.hGS(d),C.hGS(e))},
$S:237}
C.hdy.prototype={
$1(d){return d!==this.a},
$S:3}
C.h47.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bMW.prototype={
$0(){var w=this.a
w.ch=!0
w.bar()},
$S:0}
C.bMR.prototype={
$0(){},
$S:0}
C.bMX.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bMP.prototype={
$0(){},
$S:0}
C.bMQ.prototype={
$0(){},
$S:0}
C.bMV.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b4(u,u,u,new C.bey(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.v.j(0.7)
v=A.n(14)
s.push(A.ao(u,A.p(u,A.c(t.dy,u,u,u,u,u,u,D.fMg,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.m),u,u,u,u,B.bT,u,u,u),u,u,14,14,6,u))}return A.aA(B.c_,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bMS(t,e),u,u,u,u,u,u,u,new C.bMT(t,e),u,u,u,u,u,u,u,u,u,new C.bMU(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bMS.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bMU.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bMT.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bMO.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.csT.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.csU.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.csS(w))},
$S:0}
C.csS.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.csV.prototype={
$0(){var w=this,v=w.a
v.gj_()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.csW.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.csX.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.csY.prototype={
$0(){},
$S:0}
C.csZ.prototype={
$0(){var w=this.a
w.z=w.XU(++w.e)
w.Q=A.c2(w.gkR()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.csP.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.csQ.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj_().length,e=i/2,d=new C.csR(i,f,h),a0=g.as,a1=A.a3(a0).k("ba<2>")
a0=A.B(new A.ba(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.c9(new A.hA(a0),new C.csK(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj_().length!==0&&!B.d.q(g.gj_(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.R7(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cN(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new W.Nc(new C.csL(g,u),new C.csM(g,u),new C.csN(g,u),j,j,new A.bf("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fp:B.bf,j,j,j,j,j,j,j,j,13,j,j,B.F,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj_().length!==0&&!B.d.q(g.gj_(),-1)){a0=g.e+1>=g.gkR().length?"See my result":"Next family"
g=A.at(C.uG(a0,g.gqr(g),B.cY,B.jE,D.fL),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.XU(0):s).length))break
if(!B.d.q(g.gj_(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.XU(0)
o=s}else o=s
n=s[u]
n=A.e8(B.z,new C.R7(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.XU(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.rn(new A.bq(0,p,t),new C.csO(),new W.EI(u,j,new C.R7(l.b,k,62,!1,j),new A.l_(0.25,new C.R7(m.b,k,62,!1,j),j),new A.ko(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,W.hKH(),!0,!0,j,j,j,j,j,j,!1,B.j3,j,new A.bf("chip-"+r,a0),w),B.b_,B.j1,j,new A.bf("t"+r+"-"+q,a0),v))}++u}g=A.bZ(B.fV,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:62}
C.csR.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:757}
C.csK.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gj_().length!==0&&!B.d.q(t.gj_(),-1)
return A.b4(p,p,p,new C.be_(q.b,o,v,w,p),B.az)},
$S:58}
C.csM.prototype={
$1(d){return this.a.gj_()[this.b]===-1},
$S:z+30}
C.csN.prototype={
$1(d){return this.a.cUn(this.b,d.a)},
$S:z+31}
C.csL.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj_()[t]!==-1,r=A.n(18),q=e.length!==0?B.cY.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cY:B.jU,B.r,2)
u=s?A.lz(new C.csJ(),A.at(new C.R7(u.gaGx()[u.gj_()[t]].b,u.gaGx()[u.gj_()[t]].a,62,!1,v),v,v,v),B.nA,B.j1,v,v,new A.bq(0.3,1,x.X),x.i):D.bf_
return A.cT(v,u,v,v,B.b_,new A.o(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:1956}
C.csJ.prototype={
$3(d,e,f){return A.e8(B.z,f,e,null,null)},
$S:114}
C.csO.prototype={
$3(d,e,f){return A.dS(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:114}
C.cSX.prototype={
$1(d){return d>=1},
$S:124}
C.cHQ.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkR()[w.e].d.length)w.l(new C.cHP(w))},
$S:11}
C.cHP.prototype={
$0(){return this.a.f++},
$S:0}
C.cHY.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cHZ.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cI_.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cHX(w))},
$S:0}
C.cHX.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cI0.prototype={
$0(){return this.a.f++},
$S:0}
C.cI1.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cI2.prototype={
$0(){},
$S:0}
C.cI3.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a5(0)
w.as=!1
w.ay=0},
$S:0}
C.cHS.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.cHT.prototype={
$3(d,e,f){var w=null
return A.lz(new C.cHR(this.a,e),w,B.b_,B.hx,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:1957}
C.cHR.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cY.j(u.as?0.6:0.15)
t=A.a([new A.aa(0,B.H,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.p(v,A.id(new A.BW(new A.v3(B.v.j(e),B.MN,v,B.Zt),H.bZy(A.b4(v,v,v,new C.aCH(u.gkR()[u.e].c,u.as,v),B.az),new A.EN(w,w,B.Xl)),v),B.aq),B.f,v,v,new A.o(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:1958}
C.cHU.prototype={
$3(d,e,f){return A.d2(A.dS(f,new A.r(0,14*(1-e))),e)},
$S:97}
C.cHV.prototype={
$3(d,e,f){return A.dS(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:114}
C.cHW.prototype={
$0(){return this.a.brF(this.b)},
$S:0}
C.fdM.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.ao0$)
v.ao0$=w
v.qf$.sp(0,w)
v.arV(u)},
$S:7}
C.fo3.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:11}
C.bUO.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bUN())},
$S:0}
C.bUN.prototype={
$0(){},
$S:0}
C.bUL.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bUJ.prototype={
$0(){},
$S:0}
C.bUK.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gNg()
w=s+1>=r.length?3:5
break
case 3:q=C.bIs(p.gaqL(0),0,r.length)
p.l(new C.bUG(p,q))
o=p
w=6
return A.b(C.C7(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.C8(s.d,s.c.a,"school",p.gaqL(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bUH())
w=4
break
case 5:p.l(new C.bUI(p))
p.gqy().Wt(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bUG.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bUH.prototype={
$0(){},
$S:0}
C.bUI.prototype={
$0(){return this.a.x++},
$S:0}
C.bUM.prototype={
$0(){return this.a.LC(this.b)},
$S:0}
C.bUF.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.fdN.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hKV(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.F1
C.T4(q,D.eyB,0,0.2,-0.6,-0.2,null,w,D.exk,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a7(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.T()
p=A.L()
p.r=D.H5.gp(0)
p.c=3
p.d=B.bF
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.fdO.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.T4(this.a,D.exH,0,u,0.7,-0.5,null,null,D.Kq,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.fdP.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.T4(this.a,D.ezo,0,0,0.8,-0.5,null,null,D.Kq,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.fdQ.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.T4(w.b,D.eyv,0,v,-0.8,-0.5,null,null,D.Kq,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.fdR.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.eyz:D.F1
C.T4(p,D.ey_,0,t,0,-0.6,null,v,D.Kq,3,0,s,1.3,u,0,w,0)
q=q.cej(new A.r(222,455),9)
$.T()
w=A.L()
w.r=B.cY.gp(0)
p.af(q,w)},
$S:0}
C.fdS.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:766}
C.bUr.prototype={
$2(d,e){return d+e},
$S:64}
C.bUC.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bUD.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bUE.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj_()[u.b]=s
t.gj_()[u.d]=t.y
w=t.as
v=t.qf$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bUy.prototype={
$1(d){return d},
$S:100}
C.bUx.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qf$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bUz.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bUA.prototype={
$0(){},
$S:0}
C.bUB.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.G2(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cc(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a5(0)},
$S:0}
C.bUt.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.bUu.prototype={
$2(d,e){var w=this.a
w=w.gkR()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:64}
C.bUv.prototype={
$2(d,e){var w=null,v=C.hls(new A.av(A.aT(1/0,e.a,e.b),A.aT(1/0,e.c,e.d))),u=this.a
return A.aA(B.c_,new A.e5(A.b4(w,w,w,new C.ble(u,u.qf$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bUs(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bUs.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj_().length
u=B.o.D(B.i.bc((t.a-s.a)/r/450*v),0,v-1)
w.d4k(w.gj_()[u])}},
$S:23}
C.bUw.prototype={
$1(d){var w=this.a
return w.gkR()[w.f].d[d]},
$S:76}
C.dv0.prototype={
$2(d,e){return 0},
$S:64}
C.bUd.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bUc())},
$S:0}
C.bUc.prototype={
$0(){},
$S:0}
C.bUb.prototype={
$0(){},
$S:0}
C.bU5.prototype={
$0(){},
$S:0}
C.bU6.prototype={
$0(){},
$S:0}
C.bUa.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.BP},
$S:0}
C.bU9.prototype={
$1(d){var w=null,v=this.a.gqy(),u=A.c(d,w,w,w,w,w,w,D.aXK,w,w,w),t=v.gbo3(0)
return A.aA(B.c_,A.x(A.a([u,B.bw,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aXX,w,w,w)],x.p),B.B,w,B.e,B.h,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbu1(v),w,w,w,w,w,w,!1,B.a4)},
$S:129}
C.bU7.prototype={
$0(){return this.a.LC(this.b)},
$S:0}
C.bU8.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bU4.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.e5x.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e5y.prototype={
$1(d){return this.a},
$S:41}
C.e5z.prototype={
$0(){var w=this.a
return w.d=w.gTt().bgr(this.b)},
$S:0}
C.e5v.prototype={
$1(d){return new C.Uu(this.a,null)},
$S:z+32}
C.e5w.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e5u.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hD,w,w,w)
return A.ei(A.a([A.bM(!1,E.aZk,w,w,!0,w,w,w,new C.e5s(d),w,w),A.bM(!1,D.h6X,w,w,!0,w,w,w,new C.e5t(d),w,w)],x.p),w,w,D.fL,v,w,w,w,w,D.fUf,w)},
$S:18}
C.e5s.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e5t.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.e5r.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.T(A.b3(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e5A.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e5B.prototype={
$0(){var w=this.a,v=this.b,u=C.bG8(v,10,w.r,!1)
return w.uF(C.huC(w.a.d,"kahoot",u,w.gb7Y(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e5C.prototype={
$0(){var w=this.a
return w.uF(new C.amX(this.b,w.a.d,w.r,null))},
$S:0}
C.e5D.prototype={
$0(){var w=this.a
return w.uF(new C.al6(this.b,w.a.d,w.r,null))},
$S:0}
C.e5G.prototype={
$0(){var w=this.a
return w.uF(new C.avW(this.b,w.a.d,w.r,null))},
$S:0}
C.e5H.prototype={
$0(){var w=this.a
return w.uF(new C.azU(this.b,w.a.d,w.r,null))},
$S:0}
C.e5I.prototype={
$0(){var w=this.a
return w.uF(new C.an_(this.b,w.a.d,w.r,null))},
$S:0}
C.e5J.prototype={
$0(){var w=this.a
return w.uF(new C.an3(this.b,w.a.d,w.r,null))},
$S:0}
C.e5K.prototype={
$0(){var w=this.a
return w.uF(new C.an5(this.b,w.a.d,w.r,null))},
$S:0}
C.e5L.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d4F()
return v.uF(C.huC(v.a.d,"creator_"+u.a,w,v.gb7Y(),"A game by the family",t,this.c.a))},
$S:0}
C.e5M.prototype={
$0(){return this.a.Pn(this.b)},
$S:0}
C.e5N.prototype={
$0(){return this.a.Yl(0,this.b)},
$S:0}
C.e5E.prototype={
$0(){return this.a.Pn(null)},
$S:0}
C.e5F.prototype={
$0(){return this.a.K(x.q).f.T(D.fxm)},
$S:0}
C.bUp.prototype={
$0(){var w=this.a
w.d=D.b2N
w.z=3},
$S:0}
C.bUq.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aR_()}else w.l(new C.bUo(w))},
$S:11}
C.bUo.prototype={
$0(){return this.a.z--},
$S:0}
C.bUf.prototype={
$0(){var w=this.a
w.d=D.aer
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bUg.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bUe(w))
if(w.as<=0){d.a1(0)
w.b7U(-1)}},
$S:11}
C.bUe.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bUl.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Y1},
$S:0}
C.bUm.prototype={
$0(){return this.a.e++},
$S:0}
C.bUi.prototype={
$0(){var w=this.a
w.d=D.b2O
w.ay=this.b},
$S:0}
C.bUj.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bUn.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:1959}
C.bUk.prototype={
$0(){return this.a.LC(this.b)},
$S:0}
C.bUh.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bTQ.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.az()
s=A.a([new A.au(new A.bd(s,B.b6,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.bd(u,B.b6,B.aP),r))}return s},
$S:1960}
C.bTR.prototype={
$0(){return this.a.gDt().c.push(C.hfb(null,0,20,""))},
$S:0}
C.bU0.prototype={
$1(d){var w=null
return A.bC(w,new A.b6(4,A.n(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dv,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Fz,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:250}
C.bU_.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDt().c,m=this.b,l=n[m],k=o.cht(l),j=B.c.j(0.06),i=A.n(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.LK,p,p,p),B.aY],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.atj,p,p,p,new C.bTV(o,m),p,p,p,p,p,p))
n=J.a2(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.h,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bTW(l),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dq,!0,B.a7,p,B.ao,p,p,p,p),B.O],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aFl[v]
t=D.aF1[v]
s=v+1
f.push(new A.D(B.eH,new A.c1(B.aK,B.e,B.h,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.H(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.aa,new A.bu(1,B.ba,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bTX(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dq,!0,B.a7,p,B.ao,p,p,p,p),p),new AP.PK(v,l.c,new C.bTY(o,l),p,!1,D.lR,p,p,p,p,p,!1,!1,p,I.b3v,p,p,p,p,p,w)],g),p),p))}f.push(D.fZX)
f.push(B.ak)
n=A.a([D.fTj,B.aa],g)
for(r=0;r<3;++r){q=D.ciC[r]
n.push(new A.D(B.f7,A.jN(p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bTZ(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.h,0,p,p))
return A.p(p,A.x(f,B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.m),p,p,p,B.kJ,B.bg,p,p,p)},
$S:159}
C.bTV.prototype={
$0(){var w=this.a
return w.l(new C.bTU(w,this.b))},
$S:0}
C.bTU.prototype={
$0(){return B.d.cJ(this.a.gDt().c,this.b)},
$S:0}
C.bTW.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bTX.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bTY.prototype={
$1(d){return this.a.l(new C.bTT(this.b,d))},
$S:153}
C.bTT.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bTZ.prototype={
$1(d){return this.a.l(new C.bTS(this.b,this.c))},
$S:9}
C.bTS.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7c.prototype={
$0(){var w=this.a
w.wE()
w.a.bw()
w.a.qs()},
$S:0}
C.e7b.prototype={
$0(){var w=this.a
w.wE()
w.a.bw()
w.a.qs()},
$S:0}
C.e7e.prototype={
$0(){var w=this,v=w.b
if(J.cL(v)||J.cv(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e7f.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7g.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e7a.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e7d.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e7i.prototype={
$0(){this.a.PJ()
return null},
$S:0}
C.e7h.prototype={
$0(){return this.a.Fm(this.b)},
$S:0}
C.e6D.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bM(!1,B.du,w,w,!0,w,w,w,new C.e6B(d),w,w),r=A.bp(B.bR,w,w,w,w,w,w,w,w,w,w,w)
return A.ei(A.a([s,A.bI(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e6C(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e6B.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e6C.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.e6E.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cR_(this.b)},
$S:0}
C.e6y.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aWE(w.b,w.c,w.d)},
$S:7}
C.e6_.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e60.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6h.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.HD(t.a.c),$async$$0)
case 2:s=r.nK(q.dM(e,new C.e6f(t)))
if(s!=null&&t.c!=null)t.l(new C.e6g(t,s))
t.a.bw()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e6f.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e6g.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6i.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e6j.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6x.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cRM(C.hL4(w),w)},
$S:0}
C.e6e.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.WQ(u,w,C.aSd(u,w),new C.e6d(v),null)},
$S:z+37}
C.e6d.prototype={
$1(d){return this.bps(d)},
bps(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e6c(s,d))
w=3
return A.b(s.uB(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:549}
C.e6c.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.bgr(this.b)},
$S:0}
C.e6u.prototype={
$1(d){return d.as},
$S:z+1}
C.e6v.prototype={
$1(d){var w=this
return new A.e7(new C.e6t(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.e6t.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.el:B.c,h=A.n(26),g=A.K(B.bR.j(0.5),B.r,1.5),f=A.p(k,D.bXV,B.f,k,k,new A.o(B.bR.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.x(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bu:B.bk,k,k,k,k,k,k,k,k,12.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.B,k,B.e,B.h,0,B.p),1)
f=A.A(A.a([f,B.bc,a0,A.aI(k,k,k,k,A.W(B.cB,j?B.bu:B.bk,k,k,k,k),k,k,k,new C.e6n(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.h,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bR:B.bR.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ax(B.bR,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bR
a0.push(A.aA(k,A.cT(k,A.c(m,k,k,k,k,k,k,new A.H(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b_,new A.o(q,k,new A.bE(n,n,n,n),new A.bb(p,p,p,p),k,k,B.m),B.hl,k,k,k,k,B.D4,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e6o(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bZ(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c9j,new A.D(D.bI3,f,k),new A.D(D.bHV,e,k),new A.D(B.r5,a0,k),new A.D(A0.aox,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bk,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.W(AA.arb,j?B.bu:B.bk,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bHX,A.A(A.a([a0,B.ar,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,k,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.ayD(k,B.bR,k,k,!1,B.y,k,k,k,k,k,k,new C.e6p(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.h,0,k,k),k))}f.push(B.aA)
j=A.n(20)
e=A.a([new A.aa(0,B.H,B.aC.j(0.35),B.hR,12)],x.V)
f.push(A.aA(k,A.p(k,A.A(A.a([D.fTF,B.bc,D.bMl,D.bYA],w),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.cd7,B.m),k,k,k,B.ib,B.bH,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e6q(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.x2,A.A(A.a([A.E(A.dX(B.du,new C.e6r(a1),k),1),B.ar,A.E(A.bI(N.aZL,k,new C.e6s(t,a1),A.bp(B.bR,k,k,k,k,k,B.cn,k,k,k,k,k)),1)],w),B.l,k,B.e,B.h,0,k,k),k))
return A.bo(!0,A.p(k,A.cb(A.x(f,B.B,k,B.e,B.M,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.aq,k,k,new A.o(i,k,g,h,k,k,B.m),k,k,k,B.zk,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:86}
C.e6n.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e6o.prototype={
$0(){return this.b.$1(new C.e6m(this.a,this.c))},
$S:0}
C.e6m.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e6p.prototype={
$1(d){var w=this.a
w.l(new C.e6k(w,d))
this.b.$1(new C.e6l())},
$S:9}
C.e6k.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e6l.prototype={
$0(){},
$S:0}
C.e6q.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(new A.aIR(!0,w))
return null},
$S:0}
C.e6r.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e6s.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(new A.aIR(!1,w))
return null},
$S:0}
C.e6w.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cRA(this.b.b)
w.r.a5(0)},
$S:0}
C.e5O.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.ajS(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hDV(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e5P.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aH2(w)},
$S:0}
C.e6G.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.af6(this.b,w,this.c,null)},
$S:z+39}
C.e6A.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.el:B.c,t=A.n(20),s=A.W(B.kM,B.aV,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bk,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bk,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.M,0,B.p)
return A.ei(A.a([A.bI(D.haM,w,new C.e6z(d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e6z.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e5Q.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e5R.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e5S.prototype={
$1(d){return d.a},
$S:z+8}
C.e5T.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.ig(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aH2(w)},
$S:0}
C.e5X.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.ajS(q)
w=A.U(q).k("X<1>")
q=A.B(new A.X(q,new C.e5V(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hDV(v.e,null,r,v.f,v.r,new C.e5W(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e5W.prototype={
$0(){return this.a.abU(this.b)},
$S:0}
C.e5V.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e5Y.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.U(w).k("O<1,ig>")
w=A.B(new A.O(w,new C.e5U(this.b),v),v.k("aj.E"))
u.d=t.aH2(w)},
$S:0}
C.e5U.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e6F.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e69.prototype={
$1(d){return d.length!==0},
$S:3}
C.e6a.prototype={
$1(d){var w=this
return new A.e7(new C.e68(w.a,w.b,w.c,w.d),null)},
$S:21}
C.e68.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.el:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bk,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.O(o,new C.e64(u,e,o),A.U(o).k("O<1,w>")))
p.push(B.O)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.n(12),B.dz),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.al,v,v,v,v,v,B.mK,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.am,v,B.e,B.M,0,B.p)
t=w.a
return A.ei(A.a([A.bM(!1,B.du,v,v,!0,v,v,v,new C.e65(d),v,v),A.bI(B.LU,v,new C.e66(t,u,o,e),A.bp(B.bR,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fYi,v,new C.e67(t,u,o,d),A.bp(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a6(360,v,p,v),v,v,v,v,r,v)},
$S:209}
C.e64.prototype={
$1(d){var w=null
return A.dN(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c66,w,w,w,new C.e63(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1961}
C.e63.prototype={
$0(){return this.a.$1(new C.e61(this.b,this.c))},
$S:0}
C.e61.prototype={
$0(){return B.d.X(this.a,this.b)},
$S:0}
C.e65.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e66.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e62(w.c,u))
v.bN(0,B.ci)}},
$S:0}
C.e62.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e67.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a8(w.d,!1).N(!0)},
$S:0}
C.e6b.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cSe(this.b,D.vf,C.HB(v,w.a.c))},
$S:0}
C.e6N.prototype={
$1(d){return d.as},
$S:z+1}
C.e6O.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.ji(this.b,w)},
$S:0}
C.e6P.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.iBX(v)
return w.X8(v==null?null:v.a)},
$S:0}
C.e6Q.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.idd(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aT(1/0,e.a,e.b)
s=A.aT(1/0,e.c,e.d)
l.czb(new A.av(u,t),v.gbn9(),new A.av(k,s))}k=A.n(22)
s=this.b.a
r=s?D.d7n:D.d5h
q=A.K(s?B.dv:D.bmU,B.r,1)
p=A.n(22)
o=A.bS(0,A.b4(m,m,m,new C.bhi(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bx(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bS(0,A.vg(new A.R(n,n,n,n),new A.a6(u,t,new C.bif(l.d,v,l.f,w,new C.e6J(l),l.gciF(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bAf(s,new C.e6K(l,e),new C.e6L(l,e),new C.e6M(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a7(B.aW,B.b0,B.x,r,m,m),B.m),m,m,m,U.anz,m,m,m,m)},
$S:174}
C.e6J.prototype={
$1(d){var w=this.a
w.l(new C.e6H(w,d))},
$S:2}
C.e6H.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.X(0,v)
else w.I(0,v)},
$S:0}
C.e6K.prototype={
$0(){var w=this.b
return this.a.bez(1.25,new A.av(A.aT(1/0,w.a,w.b),A.aT(1/0,w.c,w.d)))},
$S:0}
C.e6L.prototype={
$0(){var w=this.b
return this.a.bez(0.8,new A.av(A.aT(1/0,w.a,w.b),A.aT(1/0,w.c,w.d)))},
$S:0}
C.e6M.prototype={
$0(){var w=this,v=w.b
return w.a.aWE(new A.av(A.aT(1/0,v.a,v.b),A.aT(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbn9())},
$S:0}
C.e6R.prototype={
$0(){var w=this.a
return w.l(new C.e6I(w))},
$S:0}
C.e6I.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e5Z.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fM(new A.fB(s.c)),$async$$0)
case 2:t.yK("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dkb.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bm5(u,C.hPO(v.c,u),new C.dka(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dka.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dkc.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bps(d.d,d.c,u.f.q(0,d.a),new C.dk9(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dk9.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fOE.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nK(new A.cM(new A.X(v,new C.fOF(d),w.k("X<1>")),new C.fOG(),w.k("cM<1,m>")))},
$S:z+19}
C.fOF.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fOG.prototype={
$1(d){return d.a},
$S:z+8}
C.fOC.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fOD.prototype={
$1(d){return d.b},
$S:z+8}
C.fOJ.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nK(new A.cM(new A.X(v,new C.fOK(d),w.k("X<1>")),new C.fOL(),w.k("cM<1,m>")))},
$S:z+19}
C.fOK.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fOL.prototype={
$1(d){return d.a},
$S:z+8}
C.fOH.prototype={
$1(d){var w,v=A.ez([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fOI.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dke.prototype={
$0(){return this.a},
$S:z+46}
C.dkv.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:280}
C.dkn.prototype={
$2(d,e){var w=this.a.c_(0,d,new C.dko()),v=J.a2(w)
if(!v.q(w,e))v.I(w,e)},
$S:125}
C.dko.prototype={
$0(){return A.a([],x.s)},
$S:768}
C.dkm.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eF(w,e)
return w===!0},
$S:263}
C.dkf.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dkl.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dkk.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aR(v==null?D.Ek:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aR(v==null?B.Z:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aR(t==null?D.Ek:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:1963}
C.dkg.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dkp.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.I(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aR(u==null?B.Z:u)
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
t=J.aR(t==null?D.Ek:t)
while(t.C()){r=t.gP(t)
if(r.a!==a9&&!B.d.aR(w,new C.dkq(r)))w.push(r)}}B.d.bq(w,new C.dkr(a8))
B.d.b_(w,new C.dks())
q=C.idc(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.f5i],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bsA(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1964}
C.dkq.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dkr.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dks.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.dkt.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a2(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.ba(v,A.a3(v).k("ba<2>")).cD(0,0,B.ot)+88-w.gH(n).a}else u=0
for(w=J.a2(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:707}
C.dku.prototype={
$1(d){return 16+d*156},
$S:155}
C.dkd.prototype={
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
t=J.aR(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.L9(d,new A.r(e+t,w),s,s.length))}},
$S:185}
C.dkh.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aLZ(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:125}
C.dki.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dkj.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:769}
C.dkw.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:769}
C.dkx.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:467}
C.dky.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:194}
C.dkz.prototype={
$1(d){return d>=0.5},
$S:124}
C.ftF.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.hd(A.aM(!1,v,!0,new A.a6(38,38,A.W(d,this.a.c?B.c:B.cu,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w,w)},
$S:1966}
C.f3x.prototype={
$1(d){var w=null,v=A.n(8),u=B.bR.j(0.12),t=A.n(8)
return new A.D(B.nd,A.aM(!1,v,!0,A.p(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fJ2,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.Po,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f3w(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.f3w.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dAM.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dAL.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mL,B.K,w,w)
return A.ei(A.a([A.bM(!1,B.du,w,w,!0,w,w,w,new C.dAJ(d),w,w),A.bM(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.n3,w,w,w,w,w,w,w,w,w,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dAK(d),w,w)],x.p),B.b9,B.D_,w,u,D.bIZ,w,D.bKV,new A.b9(v,B.a1),w,w)},
$S:18}
C.dAJ.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dAK.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dAV.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dAW.prototype={
$1(d){var w=this.a
return w.l(new C.dAU(w,d))},
$S:z+49}
C.dAU.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dAX.prototype={
$1(d){var w=null
return A.qY(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dB_.prototype={
$1(d){var w=this.a
return w.l(new C.dAT(w,d))},
$S:35}
C.dAT.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dAZ.prototype={
$1(d){var w=null
return A.qY(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dB0.prototype={
$1(d){var w=this.a
return w.l(new C.dAS(w,d))},
$S:35}
C.dAS.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dB1.prototype={
$0(){var w=this.a
return w.l(new C.dAR(w))},
$S:0}
C.dAR.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dB2.prototype={
$0(){var w=this.a
return w.l(new C.dAQ(w))},
$S:0}
C.dAQ.prototype={
$0(){return++this.a.at},
$S:0}
C.dB3.prototype={
$0(){var w=this.a
return w.l(new C.dAP(w))},
$S:0}
C.dAP.prototype={
$0(){return--this.a.ax},
$S:0}
C.dB4.prototype={
$0(){var w=this.a
return w.l(new C.dAO(w))},
$S:0}
C.dAO.prototype={
$0(){return++this.a.ax},
$S:0}
C.dB5.prototype={
$1(d){var w=this.a
return w.l(new C.dAN(w,d))},
$S:9}
C.dAN.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dAY.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dB6.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bR.j(0.18)
else w=q.c.a?B.el:B.c
v=A.n(12)
if(p)u=B.bR
else u=(q.c.a?B.en:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bR
else t=q.c.a?B.bu:B.bk
t=A.W(f,t,r,r,r,18)
if(p)s=B.bR
else s=q.c.a?B.bu:B.bk
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cT(r,A.x(A.a([t,B.au,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.h,0,B.p),r,r,B.b_,new A.o(w,r,u,v,r,r,B.m),B.eL,r,r,r,r,B.jW,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dB7(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dB7.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dBg.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.chi.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:96}
C.chp.prototype={
$1(d){return d.ak()},
$S:z+5}
C.chq.prototype={
$2(d,e){var w=J.b8(e,new C.cho(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bv(d,w,x.d2)},
$S:z+53}
C.cho.prototype={
$1(d){return d.ak()},
$S:z+12}
C.chk.prototype={
$1(d){return C.an8(A.a1(d,x.N,x.z))},
$S:z+9}
C.chl.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.chm.prototype={
$1(d){return C.huB(A.a1(d,x.N,x.z))},
$S:z+11}
C.chn.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.chu.prototype={
$1(d){return new A.aJ2(d.f.length,d.a,d.b)},
$S:z+55}
C.chv.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:705}
C.chr.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.chs.prototype={
$1(d){return d.cRc(C.HB(d,this.a))},
$S:z+85}
C.e7_.prototype={
$1(d){return C.uH(d,this.a.a.c)},
$S:z+3}
C.e70.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e74.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e75.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e6X.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2G(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zk("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(M.pO(r.c,r.e),$async$$0)
case 4:s.zk(p)
w=5
return A.b(s.KD(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e6Y.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2G(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zk("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(M.pO(r.c,r.e),$async$$0)
case 4:s.zk(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e6Z.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.WT(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zk("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zk("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zk("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.KD(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ac(j)
o=r.a
if(o.c==null){w=1
break}o.zk(B.a.eq(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e73.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2F(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zk("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a8(r,!1).cb(A.ea(new C.e72(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(M.pO(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e72.prototype={
$1(d){var w=this.b
return new C.a18(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e71.prototype={
$1(d){return D.hOY},
$S:z+58}
C.e77.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e78.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e76(w,d)
return new A.D(B.d7,new C.bij(this.b,d.c,d.a,w,null),null)},
$S:1967}
C.e76.prototype={
$0(){return this.a.Z_(this.b.b)},
$S:0}
C.e6S.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e6T.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e6U.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e6V.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e6W.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e79.prototype={
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
$S:216}
C.dT1.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dT2.prototype={
$0(){return B.d.gH(D.a7L)},
$S:z+60}
C.dT3.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b4(A.at(A.W(this.b.d,B.c.j(0.95),w,w,D.deW,44),w,w,w),w,w,new C.bnd(u,t,v,w),B.az)},
$S:58}
C.h5E.prototype={
$1(d){return A.oV(new C.h5D(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:134}
C.h5D.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.el:B.c,p=A.a([new A.aa(0,B.H,B.v.j(r?0.35:0.08),B.u6,24)],x.V),o=r?B.en:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bR.j(0.18)],x.O)
w=A.p(t,D.c02,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a7(B.a5,B.a9,B.x,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aS:B.aw,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.S,o,new A.D(E.aoB,A.A(A.a([w,B.bc,A.E(A.x(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bu:B.bk,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.h,0,B.p),1)],u),B.l,t,B.e,B.h,0,t,t),t),A.E(A.iK(!0,t,e,B.y,D.fvp,new C.h5C(this.b,s),20,B.ao5,t,B.ah,!1),1)],u),B.l,t,B.e,B.h,0,B.p),B.f,t,t,new A.o(q,t,t,B.ln,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:120}
C.h5C.prototype={
$2(d,e){var w=null,v=D.a7L[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.K(s?B.en:B.bO,B.r,1),q=A.a([new A.aa(0,B.H,B.v.j(s?0.35:0.08),B.eC,8)],x.V),p=A.n(15),o=A.E(new C.a81(v.a,!0,w),1),n=s?B.ka:B.iI,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aS:B.aw,w,w,w,w,w,w,w,w,13,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eI(A.bx(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bu:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.B,w,B.e,B.h,0,B.p),B.f,n,w,w,w,w,w,w,B.iM,w,w,w)],l),B.am,w,B.e,B.h,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h5B(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:79}
C.h5B.prototype={
$0(){A.a8(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cra.prototype={
$0(){return this.a.aif(this.b)},
$S:0}
C.h51.prototype={
$1(d){return D.hJs},
$S:z+61}
C.hcP.prototype={
$1(d){var w=this
return new C.a2V(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.h55.prototype={
$1(d){return new C.a_M(this.a,null)},
$S:z+63}
C.h54.prototype={
$1(d){return D.hKt},
$S:z+64}
C.dbE.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dbF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dbD(w,d))},
$S:35}
C.dbD.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dbG.prototype={
$1(d){return this.a.Lg()},
$S:2}
C.dbH.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dbA.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dbB.prototype={
$1(d){return this.a.Lg()},
$S:2}
C.dbC.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cJv.prototype={
$0(){},
$S:0}
C.cJB.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cJC.prototype={
$0(){return this.a.aRT(-1)},
$S:0}
C.cJD.prototype={
$1(d){return this.a.l(new C.cJA())},
$S:2}
C.cJA.prototype={
$0(){},
$S:0}
C.cJE.prototype={
$0(){return this.a.aRT(1)},
$S:0}
C.cJF.prototype={
$1(d){return this.a.l(new C.cJz())},
$S:2}
C.cJz.prototype={
$0(){},
$S:0}
C.cJG.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.en:B.bO
return A.v8(u,u,B.b5,r,u,new C.cJy(t,d),B.x6,s,w,u,new A.ax(v,1,B.r,-1),B.cl)},
$S:1968}
C.cJy.prototype={
$1(d){var w=this.a
return w.l(new C.cJw(w,this.b))},
$S:9}
C.cJw.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cJH.prototype={
$1(d){return this.a.l(new C.cJx())},
$S:2}
C.cJx.prototype={
$0(){},
$S:0}
C.cJI.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.fta.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a8(this.b,!1).N(w)},
$S:2}
C.ftb.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.ftc.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a8(this.b,!1).N(w)},
$S:0}
C.ft8.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbEv()
w=w.e
s=A.n(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bKU,new A.e5(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bA4(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:58}
C.ft9.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=B.dQ.aA(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.ap(B.aV,B.bR,w)
s.toString
s=A.a([B.b5,s,B.aV],x.O)
return A.aG(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eI(D.eD9,r,new A.o(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.df(-1.2+t,-0.5),new A.df(1.2-t,0.8),B.x,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:137}
C.h3i.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:57}
C.f0H.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f0y.prototype={
$0(){return this.a.e=!0},
$S:0}
C.f0z.prototype={
$0(){return this.a.e=!1},
$S:0}
C.f0F.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.e7(new C.f0E(w,this.b),null)},
$S:21}
C.f0E.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.el:B.c,t=A.n(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eG(w,u,new A.D(B.aov,A.x(A.a([s,B.ak,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bk,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hAL(new C.f0B(r,e),r.a),B.aA,A.A(A.a([A.E(A.dX(B.du,new C.f0C(d),w),1),B.ar,A.E(A.bI(B.Xf,w,new C.f0D(r,d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.h,0,w,w)],q),B.am,w,B.e,B.M,0,B.p),w),w,w,w,w,w,B.dc,w,new A.b9(t,B.a1),w)},
$S:101}
C.f0B.prototype={
$1(d){return this.b.$1(new C.f0A(this.a,d))},
$S:35}
C.f0A.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.f0C.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f0D.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(w)
return null},
$S:0}
C.f0G.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.U7(this.b)},
$S:0}
C.f0t.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bgx(w)},
$S:0}
C.f0x.prototype={
$1(d){return this.bpP(d)},
bpP(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Ms(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.ji(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f0w.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.U(w).k("X<1>")
w=A.B(new A.X(w,new C.f0v(this.b),v),v.k("M.E"))
u.d=t.bgx(w)},
$S:0}
C.f0v.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.f0I.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.ji(this.b,w)},
$S:0}
C.f0J.prototype={
$1(d){return this.a.bIL(d,this.b)},
$S:z+67}
C.f0u.prototype={
$0(){return this.a.abT(this.b)},
$S:0}
C.hcC.prototype={
$1(d){return new C.afr(this.a,this.b,this.c,null)},
$S:z+68}
C.f0L.prototype={
$0(){return this.a.a10(this.b)},
$S:0}
C.f0M.prototype={
$0(){return this.a.Ro(this.b)},
$S:0}
C.f0N.prototype={
$0(){return this.a.Fh(this.b)},
$S:0}
C.f0O.prototype={
$0(){return this.a.a11(this.b)},
$S:0}
C.f0K.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f0o.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f0p.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.f0q.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f0s.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qx(),$async$$0)
case 2:if(t.c!=null)t.l(new C.f0r(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f0r.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.f1a.prototype={
$2(d,e){return d+e.gxR()},
$S:z+71}
C.f16.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f17.prototype={
$0(){return this.a.f=!1},
$S:0}
C.f0S.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.el:B.c,s=A.n(24),r=A.p(v,D.c0x,B.f,v,v,new A.o(B.aB.j(u?0.18:0.08),v,A.K(B.aB.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.aw
u=u?B.en:B.bO
w=x.p
return A.eG(v,t,new A.D(B.x5,A.x(A.a([r,B.aO,q,B.O,p,B.dh,A.A(A.a([A.E(A.dX(B.oo,new C.f0Q(d),A.dk(v,v,v,v,v,v,v,v,v,o,v,v,B.f8,v,new A.b9(A.n(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.ar,A.E(A.bI(D.heH,v,new C.f0R(d),A.bp(B.aB,v,v,v,v,v,B.f8,v,new A.b9(A.n(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.h,0,v,v)],w),B.l,v,B.e,B.M,0,B.p),v),v,v,v,v,v,B.dc,v,new A.b9(s,B.a1),v)},
$S:47}
C.f0Q.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.f0R.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.f10.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.el:B.c,i=A.n(28),h=A.a([new A.aa(0,B.H,B.v.j(k?0.35:0.08),B.h1,28)],x.V),g=k?D.dmK:AI.a72,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.m),m,4,m,m,m,m,m,40),B.aA,D.fov,B.au,new A.bK(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cH,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a7(B.ay,B.aD,B.x,g,m,m),B.m),m,m,m,m,E.aoz,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bk,m,m,m,m,m,m,m,m,11,m,m,B.F,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b9n(B.b2,B.jH,new C.f0Y(v,d),l,"Camera import","Scan QR"),1),B.ar,A.E(v.b9n(B.cE,S.Ab,new C.f0Z(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.h,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bk,m,m,m,m,m,m,m,m,11,m,m,B.F,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.aB.j(k?0.14:0.06)
q=A.n(16)
p=A.K(B.aB.j(0.28),B.r,1)
o=A.p(m,D.c_P,B.f,m,m,new A.o(B.aB.j(0.12),m,m,A.n(12),m,m,B.m),m,m,m,m,B.bT,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aS:B.aw,m,m,m,m,m,m,m,m,m,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bk,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.B,m,B.e,B.h,0,B.p),1)
return A.bo(!0,new A.D(B.x_,A.p(m,A.x(A.a([g,new A.D(B.aow,A.x(A.a([w,B.S,u,B.by,t,B.S,A.aG(!1,B.a3,!0,m,A.aM(!1,s,!0,A.p(m,A.A(A.a([o,B.bc,n,A.W(B.eJ,k?B.bu:B.bk,m,m,m,m)],f),B.l,m,B.e,B.h,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.m),m,m,m,m,B.bH,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.f1_(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.B,m,B.e,B.h,0,B.p),m)],f),B.l,m,B.e,B.M,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:27}
C.f0Y.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.wd("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f0Z.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.wd("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f1_.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.OZ(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f0W.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.el:B.c,m=A.n(24),l=A.a([new A.aa(0,B.H,B.v.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.en:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bu:B.bk
u=A.bx(w,new A.a6(48,48,C.aTB(!0,A.n(12),48,R.Q5,u,v.c,48),q),B.aq)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.BF(v.gxR())
s=x.p
r=this.a
return A.bo(!0,new A.D(B.x_,A.p(q,A.x(A.a([B.S,k,new A.D(D.aot,A.A(A.a([u,B.bc,A.E(A.x(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bu:B.bk,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.B,q,B.e,B.h,0,B.p),1)],s),B.l,q,B.e,B.h,0,q,q),q),B.CS,r.ct9(B.vA,B.aV,new C.f0U(d),p,"QR code or backup file","Transfer project"),r.b6m(!0,B.eq,B.aB,new C.f0V(d),p,"Remove from this device","Delete project"),B.S],s),B.l,q,B.e,B.M,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:27}
C.f0U.prototype={
$0(){A.a8(this.a,!1).N("transfer")
return null},
$S:0}
C.f0V.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
C.f0X.prototype={
$1(d){return this.bpQ(d)},
bpQ(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Ms(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wt(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f1d.prototype={
$0(){var w=this.a
w.a.bw()
w.l(new C.f1c(w))},
$S:0}
C.f1c.prototype={
$0(){return this.a.r++},
$S:0}
C.f1e.prototype={
$0(){var w=this.a
return w.l(new C.f1b(w))},
$S:0}
C.f1b.prototype={
$0(){return this.a.r++},
$S:0}
C.f0P.prototype={
$0(){var w=this.a.c
w.toString
return A.ji(w,null)},
$S:0}
C.f0T.prototype={
$0(){return this.a.cmf(this.b)},
$S:0}
C.f19.prototype={
$0(){var w=this.a
return w.l(new C.f18(w,this.b))},
$S:0}
C.f18.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f13.prototype={
$0(){return this.a.wd("scan")},
$S:0}
C.f14.prototype={
$0(){return this.a.wd("file")},
$S:0}
C.f15.prototype={
$1(d){return this.a.cta(d,this.b)},
$S:z+72}
C.f12.prototype={
$0(){return this.a.Fl(this.b)},
$S:0}
C.f11.prototype={
$0(){return this.a.a1v(this.b,this.c)},
$S:0}
C.cIR.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cIQ.prototype={
$1(d){return d.ak()},
$S:z+74}
C.cIO.prototype={
$1(d){return C.hW4(A.a1(d,x.N,x.z))},
$S:z+75}
C.cIP.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fNw.prototype={
$1(d){return d.y===D.l7},
$S:z+3}
C.hdo.prototype={
$1(d){return C.aSd(d,this.a)},
$S:z+3}
C.fL0.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bUV.prototype={
$1(d){return!d.as},
$S:z+1}
C.bUU.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bUR.prototype={
$1(d){return C.huD(A.a1(d,x.N,x.z))},
$S:z+24}
C.bUS.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bUT.prototype={
$1(d){return J.k(d)},
$S:15}
C.fB6.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fwD.prototype={
$1(d){return C.hk0(A.a1(d,x.N,x.z))},
$S:z+79}
C.fwE.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fwF.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h4Q.prototype={
$1(d){return J.k(d)},
$S:15}
C.h4R.prototype={
$1(d){return d.a},
$S:z+81}
C.h4S.prototype={
$1(d){return d.length!==0},
$S:3}
C.h4T.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h4U.prototype={
$1(d){return d.U7(null).ak()},
$S:z+82}
C.hdm.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fO_.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fRe.prototype={
$1(d){return C.an8(A.a1(d,x.N,x.z))},
$S:z+9}
C.fRf.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fRg.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fRh.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fRi.prototype={
$1(d){return C.uH(d,this.a)},
$S:z+3}
C.h4D.prototype={
$1(d){return C.uH(d,this.a)},
$S:z+3}
C.hdh.prototype={
$1(d){return C.an8(A.a1(d,x.N,x.z))},
$S:z+9}
C.hdi.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.hdj.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fNH.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fNI.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.hds.prototype={
$1(d){return!d.as},
$S:z+1}
C.fNb.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fNc.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fNd.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.hcQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fS5.prototype={
$1(d){return d.Q},
$S:z+15}
C.h4w.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fRb.prototype={
$1(d){return C.an8(A.a1(d,x.N,x.z))},
$S:z+9}
C.fRc.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fRd.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h4r.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fxc.prototype={
$1(d){return d.length!==0},
$S:3}
C.fxd.prototype={
$1(d){return C.huD(A.a1(d,x.N,x.z))},
$S:z+24}
C.fxe.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fxf.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:15}
C.fxg.prototype={
$1(d){return d.length!==0},
$S:3}
C.fxt.prototype={
$2(d,e){return d.eE(new C.fxu(e))},
$S:1969}
C.fxu.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.ck},
$S:1970}
C.fxq.prototype={
$1(d){return C.iid(d,this.a)},
$S:z+84}
C.fxr.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fxs.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fBR.prototype={
$1(d){return d.a},
$S:z+56}
C.fBS.prototype={
$1(d){return d.length!==0},
$S:3}
C.fBT.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fET.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fKf.prototype={
$1(d){return C.hGr(d,C.HB(d,this.a))},
$S:z+5}
C.fKg.prototype={
$1(d){return C.hGs(d,C.HB(d,this.a))},
$S:z+5};(function aliases(){var w=C.aCJ.prototype
w.bxI=w.t
w=C.aAT.prototype
w.bxD=w.t
w=C.aIf.prototype
w.by5=w.t
w=C.aCK.prototype
w.bxJ=w.t
w=C.aCM.prototype
w.bxK=w.t
w=C.aCN.prototype
w.bxL=w.t
w=C.aOr.prototype
w.bAz=w.t
w=C.aQy.prototype
w.bCT=w.t
w=C.aQz.prototype
w.bCU=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aFK.prototype,"gcpZ","cq_",28)
var r
w(r=C.aCI.prototype,"gciL","ciM",65)
v(r,"gaQ3","Ov",0)
v(r,"gcyv","BJ",0)
v(r,"gbQE","Pd",0)
v(r,"gcNd","zl",0)
v(r,"gcs6","a2e",0)
v(r,"gbM_","OV",0)
v(r,"gbR3","Yq",0)
w(r,"gbW8","bW9",78)
v(r,"gbGb","AF",0)
v(C.aCL.prototype,"gcN9","Ge",0)
v(r=C.amY.prototype,"gbu3","bu4",2)
v(r,"gbtW","btX",2)
v(r,"gcOg","cOh",2)
u(r,"gqr","kM",0)
u(r=C.al7.prototype,"gf1","fR",2)
w(r,"gcjK","cjL",27)
u(C.avX.prototype,"gqr","kM",0)
v(r=C.azV.prototype,"gcZV","cZW",2)
u(r,"gqr","kM",0)
u(C.aM4.prototype,"gbu1","bu2",2)
v(C.an6.prototype,"gCf","cOt",2)
u(r=C.an4.prototype,"gcPa","cPb",2)
u(r,"gqr","kM",0)
v(r=C.an0.prototype,"gbsU","bsV",2)
v(r,"gcUl","cUm",2)
u(r=C.an2.prototype,"gf1","fR",2)
u(r,"giA","cNN",2)
v(r=C.amZ.prototype,"gcNC","cND",2)
u(r,"gbrM","jI",2)
v(r=C.aGj.prototype,"gahS","wu",0)
v(r,"gclt","a1n",0)
v(r,"gaUk","IQ",0)
v(r=C.aGg.prototype,"gcJ3","a4n",0)
v(r,"gahS","wu",0)
v(r,"gcwt","a2T",0)
v(r,"gclo","b4y",2)
v(r,"gcmt","a1A",0)
w(r,"gciF","ciG",35)
v(r,"gbQW","IV",0)
v(r,"gcKb","cKc",2)
v(r,"gc8d","a_c",0)
w(r,"gch8","ch9",36)
v(r,"gclc","cld",2)
v(r=C.aEJ.prototype,"gcem","QU",0)
v(r,"gceo","cep",2)
v(r,"gbNu","abv",0)
v(r=C.aGi.prototype,"gbUx","YW",0)
v(r,"gc45","ZB",0)
v(r,"gcD2","a3L",0)
v(r,"gcz5","a3l",0)
v(C.aGh.prototype,"gcyO","ajG",0)
v(C.av8.prototype,"gch6","a0Z",0)
v(C.aBr.prototype,"ga46","Lg",2)
v(C.aBq.prototype,"ga46","Lg",2)
v(C.aA7.prototype,"ga46","Lg",2)
v(r=C.aHR.prototype,"gb5K","RV",0)
v(r,"gbF_","X2",0)
v(r,"gcmg","cmh",2)
w(C.aHQ.prototype,"gci_","ci0",69)
t(C.aHS.prototype,"gaUf",0,0,null,["$1","$0"],["IP","bOO"],70,0,0)
s(C,"hOT","isd",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aE,[C.aqI,C.v5,C.nH,C.IG,C.agD,C.L2,C.v6,C.bVq,C.tq,C.bqK,C.anf,C.aeJ,C.lL,C.bU1,C.avk,C.zS,C.alO,C.N4,C.bc1,C.aaM,C.bjo,C.agK,C.aB8,C.agy,C.aM4,C.L9,C.GT,C.bih,C.aLZ,C.as4,C.dkA,C.md,C.aWz,C.aWy,C.aUA,C.ur,C.rG,C.lY,C.ig,C.lb,C.aJX])
u(A.fQ,[C.fW2,C.fW1,C.fW3,C.h5x,C.fIT,C.fIU,C.fIZ,C.fTL,C.fTK,C.fTJ,C.cae,C.h63,C.h5W,C.h67,C.fNP,C.dTJ,C.dTE,C.dTF,C.dTh,C.dTd,C.dTY,C.dTZ,C.dTS,C.dTT,C.dU_,C.dU0,C.fOA,C.fR8,C.fR9,C.h4B,C.hdg,C.fNG,C.h5b,C.djN,C.dj9,C.dji,C.djz,C.dje,C.djk,C.djb,C.djo,C.djp,C.djn,C.djE,C.djD,C.dlA,C.dlB,C.dlC,C.dk0,C.dk5,C.dk4,C.cRT,C.cRV,C.daS,C.dbg,C.dbh,C.dbk,C.dbm,C.dbn,C.dbo,C.dbq,C.dbr,C.bTM,C.bTG,C.fBy,C.hd8,C.hd9,C.hda,C.hd5,C.hdb,C.hdc,C.hdd,C.hd4,C.fPd,C.h3v,C.fL1,C.fS4,C.bON,C.hdy,C.h47,C.bMX,C.bMS,C.bMU,C.bMT,C.csR,C.csM,C.csN,C.csL,C.csJ,C.csO,C.cSX,C.cHQ,C.cHT,C.cHR,C.cHU,C.cHV,C.fdM,C.fo3,C.bUy,C.bUs,C.bUw,C.bU9,C.e5y,C.e5v,C.e5w,C.e5u,C.e5A,C.bUq,C.bUg,C.bU0,C.bU_,C.bTW,C.bTX,C.bTY,C.bTZ,C.e7d,C.e6D,C.e6y,C.e6_,C.e6f,C.e6i,C.e6e,C.e6d,C.e6u,C.e6v,C.e6p,C.e5O,C.e6G,C.e6A,C.e5Q,C.e5R,C.e5S,C.e5X,C.e5V,C.e5U,C.e69,C.e6a,C.e64,C.e6N,C.e6J,C.dkb,C.dkc,C.fOE,C.fOF,C.fOG,C.fOC,C.fOD,C.fOJ,C.fOK,C.fOL,C.fOH,C.fOI,C.dkv,C.dkl,C.dkg,C.dkq,C.dkr,C.dku,C.dki,C.dkx,C.dky,C.dkz,C.ftF,C.f3x,C.dAL,C.dAV,C.dAW,C.dAX,C.dB_,C.dAZ,C.dB0,C.dB5,C.dB6,C.chp,C.cho,C.chk,C.chl,C.chm,C.chn,C.chu,C.chr,C.chs,C.e7_,C.e72,C.e71,C.e78,C.e79,C.dT1,C.h5E,C.h51,C.hcP,C.h55,C.h54,C.dbF,C.dbG,C.dbB,C.cJD,C.cJF,C.cJG,C.cJy,C.cJH,C.fta,C.h3i,C.f0F,C.f0B,C.f0x,C.f0v,C.f0J,C.hcC,C.f0S,C.f10,C.f0W,C.f0X,C.f15,C.cIQ,C.cIO,C.cIP,C.fNw,C.hdo,C.fL0,C.bUV,C.bUU,C.bUR,C.bUS,C.bUT,C.fwD,C.fwE,C.h4Q,C.h4R,C.h4S,C.h4T,C.h4U,C.hdm,C.fO_,C.fRe,C.fRf,C.fRh,C.fRi,C.h4D,C.hdh,C.hdi,C.hdj,C.fNH,C.fNI,C.hds,C.fNb,C.fNc,C.hcQ,C.fS5,C.h4w,C.fRb,C.fRc,C.h4r,C.fxc,C.fxd,C.fxe,C.fxf,C.fxg,C.fxu,C.fxq,C.fxr,C.fBR,C.fBS,C.fET,C.fKf,C.fKg])
u(A.aw,[C.b1a,C.amW,C.aXR,C.a_p,C.bdR,C.R7,C.a7f,C.tP,C.II,C.bif,C.bm5,C.bAf,C.bps,C.af5,C.bm4,C.af4,C.bm3,C.aEK,C.aL0,C.af6,C.GP,C.big,C.ael,C.bie,C.bij,C.b18,C.av8,C.afr])
u(A.lK,[C.bew,C.bfJ,C.bfA,C.aJR,C.bl6,C.bqJ,C.aXW,C.bey,C.aCH,C.be_,C.buR,C.ble,C.bkE,C.bkL,C.bii,C.bhi,C.bnd,C.bA4])
u(A.hR,[C.h60,C.h61,C.h62,C.h5U,C.h5V,C.h65,C.h66,C.dTV,C.dTH,C.dTK,C.dTo,C.dTp,C.dTq,C.dTn,C.dTv,C.dTm,C.dTw,C.dTx,C.dTl,C.dTy,C.dTk,C.dTz,C.dTj,C.dTA,C.dTb,C.dTc,C.dTi,C.dTB,C.dTg,C.dTC,C.dTf,C.dTr,C.dTe,C.dTs,C.dTa,C.dTt,C.dTu,C.dTW,C.dTX,C.dTL,C.dTM,C.dTN,C.dTO,C.dTP,C.dTQ,C.dTR,C.dU2,C.dTU,C.fOB,C.dj7,C.dj5,C.dj6,C.dj8,C.djM,C.djB,C.djy,C.dja,C.djC,C.djg,C.djh,C.djj,C.djA,C.djf,C.djl,C.djJ,C.djv,C.dju,C.djw,C.djx,C.djq,C.djs,C.djt,C.djm,C.djF,C.djI,C.djc,C.djd,C.dlz,C.dly,C.dlx,C.dlw,C.dlD,C.dlv,C.dlE,C.dk1,C.dk2,C.dk3,C.dk6,C.dk_,C.djZ,C.cRU,C.daR,C.db3,C.db2,C.dbi,C.db1,C.dbj,C.db0,C.db_,C.dbl,C.daZ,C.dbb,C.dba,C.dbs,C.bTF,C.bTP,C.bTH,C.bTI,C.bTL,C.bTK,C.bTN,C.bTO,C.bTJ,C.bTD,C.bTE,C.bVi,C.bVj,C.bVk,C.bVl,C.bVm,C.bVn,C.bVo,C.hd7,C.h3w,C.bMW,C.bMR,C.bMP,C.bMQ,C.bMO,C.csT,C.csU,C.csS,C.csV,C.csX,C.csY,C.csZ,C.csP,C.cHP,C.cHY,C.cHZ,C.cI_,C.cHX,C.cI0,C.cI1,C.cI2,C.cI3,C.cHS,C.cHW,C.bUO,C.bUN,C.bUL,C.bUJ,C.bUK,C.bUG,C.bUH,C.bUI,C.bUM,C.bUF,C.fdN,C.fdO,C.fdP,C.fdQ,C.fdR,C.bUC,C.bUD,C.bUE,C.bUx,C.bUz,C.bUA,C.bUB,C.bUt,C.bUd,C.bUc,C.bUb,C.bU5,C.bU6,C.bUa,C.bU7,C.bU8,C.bU4,C.e5x,C.e5z,C.e5s,C.e5t,C.e5r,C.e5B,C.e5C,C.e5D,C.e5G,C.e5H,C.e5I,C.e5J,C.e5K,C.e5L,C.e5M,C.e5N,C.e5E,C.e5F,C.bUp,C.bUo,C.bUf,C.bUe,C.bUl,C.bUm,C.bUi,C.bUj,C.bUk,C.bUh,C.bTQ,C.bTR,C.bTV,C.bTU,C.bTT,C.bTS,C.e7c,C.e7b,C.e7e,C.e7f,C.e7g,C.e7a,C.e7i,C.e7h,C.e6B,C.e6C,C.e6E,C.e60,C.e6h,C.e6g,C.e6j,C.e6x,C.e6c,C.e6n,C.e6o,C.e6m,C.e6k,C.e6l,C.e6q,C.e6r,C.e6s,C.e6w,C.e5P,C.e6z,C.e5T,C.e5W,C.e5Y,C.e6F,C.e63,C.e61,C.e65,C.e66,C.e62,C.e67,C.e6b,C.e6O,C.e6P,C.e6H,C.e6K,C.e6L,C.e6M,C.e6R,C.e6I,C.e5Z,C.dka,C.dk9,C.dke,C.dko,C.dkf,C.f3w,C.dAM,C.dAJ,C.dAK,C.dAU,C.dAT,C.dAS,C.dB1,C.dAR,C.dB2,C.dAQ,C.dB3,C.dAP,C.dB4,C.dAO,C.dAN,C.dAY,C.dB7,C.dBg,C.e70,C.e74,C.e75,C.e6X,C.e6Y,C.e6Z,C.e73,C.e77,C.e76,C.e6S,C.e6T,C.e6U,C.e6V,C.e6W,C.dT2,C.h5B,C.cra,C.dbE,C.dbD,C.dbH,C.dbA,C.dbC,C.cJv,C.cJB,C.cJC,C.cJA,C.cJE,C.cJz,C.cJw,C.cJx,C.cJI,C.ftb,C.ftc,C.f0H,C.f0y,C.f0z,C.f0A,C.f0C,C.f0D,C.f0G,C.f0t,C.f0w,C.f0I,C.f0u,C.f0L,C.f0M,C.f0N,C.f0O,C.f0K,C.f0o,C.f0p,C.f0q,C.f0s,C.f0r,C.f16,C.f17,C.f0Q,C.f0R,C.f0Y,C.f0Z,C.f1_,C.f0U,C.f0V,C.f1d,C.f1c,C.f1e,C.f1b,C.f0P,C.f0T,C.f19,C.f18,C.f13,C.f14,C.f12,C.f11])
u(A.af,[C.aqV,C.Ut,C.a09,C.a0d,C.a0b,C.a_K,C.amX,C.al6,C.avW,C.azU,C.an5,C.an3,C.an_,C.WQ,C.an1,C.Uu,C.as7,C.as1,C.a0P,C.as5,C.a18,C.a19,C.a81,C.a_M,C.a_L,C.a_g,C.a2V,C.GE,C.aA0,C.av7,C.av1,C.av6,C.Pn])
u(A.ah,[C.aFK,C.bi9,C.aCI,C.biy,C.aCL,C.bfH,C.aCJ,C.aAT,C.aIf,C.azV,C.aCN,C.aCM,C.aCK,C.bnz,C.an2,C.amZ,C.aGj,C.aGg,C.aEJ,C.aGi,C.aGh,C.bnA,C.aOr,C.aBr,C.aBq,C.aA7,C.bA7,C.aQy,C.aQz,C.aHR,C.boY,C.aHQ,C.bBT])
u(A.ie,[C.dTG,C.dTI,C.dTD,C.dU1,C.fRa,C.bTC,C.djL,C.djK,C.djr,C.djG,C.djH,C.dk7,C.bVp,C.bVh,C.bU2,C.bU3,C.hd6,C.hdx,C.bMV,C.csW,C.csQ,C.csK,C.fdS,C.bUr,C.bUu,C.bUv,C.dv0,C.bUn,C.e6t,C.e68,C.e6Q,C.dkn,C.dkm,C.dkk,C.dkp,C.dks,C.dkt,C.dkd,C.dkh,C.dkj,C.dkw,C.chi,C.chq,C.chv,C.dT3,C.h5D,C.h5C,C.ft8,C.ft9,C.f0E,C.f1a,C.cIR,C.fB6,C.fwF,C.fRg,C.fNd,C.fRd,C.fxt,C.fxs,C.fBT])
u(A.kQ,[C.a2q,C.agM,C.a2J,C.a0B,C.adl,C.aMM,C.IH,C.an7,C.cIS,C.cIT])
t(C.amY,C.aCJ)
t(C.al7,C.aAT)
t(C.avX,C.aIf)
t(C.bid,C.aCN)
t(C.an6,C.bid)
t(C.bic,C.aCM)
t(C.an4,C.bic)
t(C.bib,C.aCK)
t(C.an0,C.bib)
t(C.bne,C.aOr)
t(C.bA5,C.aQy)
t(C.bA6,C.aQz)
t(C.aHS,C.bBT)
t(C.bce,A.bc2)
t(C.bA8,A.a7H)
t(C.bcd,C.bA8)
w(C.aCJ,A.cg)
w(C.aAT,A.cg)
w(C.aIf,A.f1)
w(C.aCK,A.cg)
v(C.bib,C.agy)
w(C.aCM,A.cg)
v(C.bic,C.agy)
w(C.aCN,A.cg)
v(C.bid,C.agy)
w(C.aOr,A.f1)
w(C.aQy,A.cg)
w(C.aQz,A.cg)
v(C.bBT,A.eL)
v(C.bA8,A.ju)})()
A.i0(b.typeUniverse,JSON.parse('{"b1a":{"aw":[],"w":[]},"bew":{"aC":[]},"aqV":{"af":[],"w":[]},"aFK":{"ah":["aqV"]},"Ut":{"af":[],"w":[]},"amW":{"aw":[],"w":[]},"aXR":{"aw":[],"w":[]},"bi9":{"ah":["Ut"]},"a09":{"af":[],"w":[]},"a0d":{"af":[],"w":[]},"a0b":{"af":[],"w":[]},"a_K":{"af":[],"w":[]},"aCI":{"ah":["a09"]},"biy":{"ah":["a0d"]},"aCL":{"ah":["a0b"]},"a_p":{"aw":[],"w":[]},"bfJ":{"aC":[]},"bfA":{"aC":[]},"bfH":{"ah":["a_K"]},"aJR":{"aC":[]},"bl6":{"aC":[]},"bdR":{"aw":[],"w":[]},"amX":{"af":[],"w":[]},"amY":{"ah":["amX"]},"bqJ":{"aC":[]},"aXW":{"aC":[]},"al6":{"af":[],"w":[]},"avW":{"af":[],"w":[]},"azU":{"af":[],"w":[]},"al7":{"ah":["al6"]},"bey":{"aC":[]},"R7":{"aw":[],"w":[]},"aCH":{"aC":[]},"avX":{"ah":["avW"]},"be_":{"aC":[]},"azV":{"ah":["azU"]},"an5":{"af":[],"w":[]},"an3":{"af":[],"w":[]},"an_":{"af":[],"w":[]},"an6":{"ah":["an5"]},"buR":{"aC":[]},"an4":{"ah":["an3"]},"ble":{"aC":[]},"an0":{"ah":["an_"]},"bkE":{"aC":[]},"WQ":{"af":[],"w":[]},"an1":{"af":[],"w":[]},"Uu":{"af":[],"w":[]},"a7f":{"aw":[],"w":[]},"bkL":{"aC":[]},"tP":{"aw":[],"w":[]},"II":{"aw":[],"w":[]},"bnz":{"ah":["WQ"]},"an2":{"ah":["an1"]},"amZ":{"ah":["Uu"]},"as7":{"af":[],"w":[]},"as1":{"af":[],"w":[]},"a0P":{"af":[],"w":[]},"af6":{"aw":[],"w":[]},"aGj":{"ah":["as7"]},"aGg":{"ah":["as1"]},"bif":{"aw":[],"w":[]},"bii":{"aC":[]},"bm5":{"aw":[],"w":[]},"bhi":{"aC":[]},"bAf":{"aw":[],"w":[]},"bps":{"aw":[],"w":[]},"aEJ":{"ah":["a0P"]},"af5":{"aw":[],"w":[]},"bm4":{"aw":[],"w":[]},"af4":{"aw":[],"w":[]},"bm3":{"aw":[],"w":[]},"aEK":{"aw":[],"w":[]},"aL0":{"aw":[],"w":[]},"GP":{"aw":[],"w":[]},"as5":{"af":[],"w":[]},"a18":{"af":[],"w":[]},"a19":{"af":[],"w":[]},"aGi":{"ah":["as5"]},"big":{"aw":[],"w":[]},"ael":{"aw":[],"w":[]},"bie":{"aw":[],"w":[]},"bij":{"aw":[],"w":[]},"aGh":{"ah":["a18"]},"bnA":{"ah":["a19"]},"b18":{"aw":[],"w":[]},"a81":{"af":[],"w":[]},"bne":{"ah":["a81"]},"bnd":{"aC":[]},"av8":{"aw":[],"w":[]},"a_M":{"af":[],"w":[]},"a_L":{"af":[],"w":[]},"a_g":{"af":[],"w":[]},"a2V":{"af":[],"w":[]},"aBr":{"ah":["a_M"]},"aBq":{"ah":["a_L"]},"aA7":{"ah":["a_g"]},"bA7":{"ah":["a2V"]},"GE":{"af":[],"w":[]},"aA0":{"af":[],"w":[]},"bA5":{"ah":["GE"]},"bA6":{"ah":["aA0"]},"bA4":{"aC":[]},"av7":{"af":[],"w":[]},"aHR":{"ah":["av7"]},"afr":{"aw":[],"w":[]},"av1":{"af":[],"w":[]},"av6":{"af":[],"w":[]},"boY":{"ah":["av1"]},"aHQ":{"ah":["av6"]},"Pn":{"af":[],"w":[]},"aHS":{"ah":["Pn"],"eL":[]},"bcd":{"ju":[],"fp":[]}}'))
A.DC(b.typeUniverse,JSON.parse('{"agy":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ar
return{e2:w("aUA"),cq:w("mz"),Q:w("rG"),r:w("bl<m,m>"),c5:w("aWy"),dY:w("aWz"),fH:w("N4"),de:w("alO"),dN:w("Nc<F>"),gc:w("EI<F>"),A:w("eN<m?>"),e:w("IG"),B:w("nH"),P:w("ig"),df:w("lL"),k:w("lb"),x:w("ay<~>"),U:w("N<a51>"),V:w("N<aa>"),C:w("N<rG>"),O:w("N<u>"),c:w("N<N4>"),b:w("N<alO>"),ac:w("N<eN<m?>>"),I:w("N<nH>"),u:w("N<ig>"),J:w("N<lL>"),_:w("N<lb>"),cl:w("N<ay<ai<a9<m,@>>>>"),R:w("N<nm>"),eU:w("N<ai<+(G,G)>>"),ez:w("N<a9<m,aE>>"),gE:w("N<a9<m,m>>"),Y:w("N<a9<m,@>>"),fD:w("N<n1>"),bp:w("N<p3>"),g:w("N<r>"),ar:w("N<avk>"),v:w("N<fZ>"),gy:w("N<aaM>"),L:w("N<+(m,m)>"),G:w("N<+(G,G)>"),E:w("N<+(G,~())>"),bd:w("N<+(m,F,P)>"),bF:w("N<+count,id,name(F,m,m)>"),F:w("N<cY>"),s:w("N<m>"),cF:w("N<au>"),aS:w("N<jl>"),dT:w("N<bc1>"),p:w("N<w>"),Z:w("N<fp>"),D:w("N<lY>"),h:w("N<aB8>"),cC:w("N<bjo>"),fp:w("N<L2>"),M:w("N<L9>"),gZ:w("N<aJX>"),gA:w("N<agD>"),e4:w("N<agK>"),dE:w("N<aLZ>"),f7:w("N<P>"),n:w("N<G>"),t:w("N<F>"),dS:w("N<aC?>"),d4:w("N<m?>"),eF:w("cy<ah<af>>"),d:w("ai<nH>"),do:w("ai<ig>"),cg:w("ai<lL>"),ax:w("ai<lb>"),fO:w("ai<a9<m,@>>"),cz:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(F,m,m)>"),dy:w("ai<m>"),er:w("ai<au>"),gk:w("ai<lY>"),j:w("ai<@>"),fK:w("bv<m,m>"),d2:w("bv<m,ai<a9<m,@>>>"),a:w("a9<m,@>"),f:w("a9<@,@>"),gv:w("O<m,IJ>"),cM:w("O<F,m>"),w:w("hW"),g2:w("t0"),bV:w("aqI"),fL:w("cm"),K:w("aE"),dc:w("fZ"),fo:w("PK<F>"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),bn:w("+games,limit(P,F)"),d9:w("+dx,hidden(G,ai<ig>)"),cs:w("+count,id,name(F,m,m)"),N:w("m"),fT:w("iO<ig>"),ec:w("iO<m>"),gW:w("rn<G>"),X:w("bq<G>"),bW:w("dC"),W:w("bf<m>"),b4:w("bf<F>"),cI:w("kf<m>"),av:w("X<zS>"),cc:w("X<m>"),l:w("w"),gF:w("fp"),fA:w("lY"),dO:w("GT"),bw:w("af4<m?>"),cy:w("Lb"),q:w("ky"),y:w("P"),i:w("G"),z:w("@"),S:w("F"),eK:w("ai<lb>?"),m:w("as4?"),cT:w("r?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,F)?"),he:w("+qrPayload,token,usesRemaining(m,m,F)?"),gG:w("+members,trees,viewOnly(F,F,P)?"),az:w("oq?"),T:w("m?"),aD:w("dC?"),o:w("lY?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b7q=new A.bb(B.h2,B.bJ,B.h2,B.bJ)
D.afF=new A.bb(B.h2,B.i6,B.h2,B.i6)
D.b7F=new A.bb(B.jJ,B.bJ,B.bJ,B.bJ)
D.b7J=new A.ax(B.cW,1.4,B.r,-1)
D.b7T=new A.ax(B.ab,1,B.r,-1)
D.agb=new A.aY(140,1/0,0,1/0)
D.b9f=new A.aY(0,1/0,64,1/0)
D.b9j=new A.aY(0,84,0,1/0)
D.agi=new A.aY(130,1/0,0,1/0)
D.aEU=w([B.ml,B.ti,B.c],x.O)
D.ccd=new A.a7(B.ay,B.aD,B.x,D.aEU,null,null)
D.ba4=new A.o(null,null,null,null,null,D.ccd,B.m)
D.dm9=w([B.aV,B.bR],x.O)
D.ceo=new A.a7(B.aW,B.b0,B.x,D.dm9,null,null)
D.bap=new A.o(null,null,null,null,null,D.ceo,B.m)
D.ZB=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fL=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dqn=w([B.dB,D.ZB,D.fL],x.O)
D.cbo=new A.a7(B.aW,B.b0,B.x,D.dqn,null,null)
D.bb9=new A.o(null,null,null,null,null,D.cbo,B.m)
D.fGe=new A.H(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hhd=new A.C("?",null,D.fGe,null,null,null,null,null,null,null,null,null)
D.bf_=new A.cl(B.z,null,null,D.hhd,null)
D.X5=new A.H(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_3=new A.C("\ud83c\udf33",null,D.X5,null,null,null,null,null,null,null,null,null)
D.ah3=new A.cl(B.z,null,null,D.h_3,null)
D.h1K=new A.C("\ud83c\udfc6",null,AK.LB,null,null,null,null,null,null,null,null,null)
D.bfa=new A.cl(B.z,null,null,D.h1K,null)
D.bh0=new A.fr(null,null,null,null,null,E.kF,null,null,null,null)
D.ah4=new A.cl(B.z,null,null,D.bh0,null)
D.l_=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fGN=new A.H(!0,D.l_,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0J=new A.C("No books on the shelf yet.",null,D.fGN,null,null,null,null,null,null,null,null,null)
D.eDa=new A.D(B.o0,D.h0J,null)
D.bfr=new A.cl(B.z,null,null,D.eDa,null)
D.fO1=new A.H(!0,D.fL,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hib=new A.C("\ud83d\ude8c  On the road\u2026",null,D.fO1,null,null,null,null,null,null,null,null,null)
D.eDK=new A.D(B.cr,D.hib,null)
D.bfU=new A.cl(B.z,null,null,D.eDK,null)
D.aZ8=new A.C("\ud83e\uddfa",null,D.X5,null,null,null,null,null,null,null,null,null)
D.bg8=new A.cl(B.z,null,null,D.aZ8,null)
D.h4d=new A.C("\ud83c\udfad",null,D.X5,null,null,null,null,null,null,null,null,null)
D.bgj=new A.cl(B.z,null,null,D.h4d,null)
D.bgm=new A.cl(B.z,null,null,Af.Zn,null)
D.aho=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.ahv=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.biD=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.biI=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.biU=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.biW=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.biY=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bj5=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lQ=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bj9=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bje=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bjg=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bjh=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lR=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bjV=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Ch=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bk3=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bkn=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bkq=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bkw=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bkE=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aia=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bkL=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.ZP=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aid=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bkW=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.ZR=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.blg=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.aip=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.blF=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.blV=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bmk=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bmv=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.GD=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bmU=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bmX=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bn0=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aiS=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bni=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bno=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bnv=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.aiW=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bnE=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bo8=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.boi=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bol=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bor=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ajc=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bp5=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ajB=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bq4=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ajN=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bqu=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.GR=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bqB=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bqL=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bqN=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ajR=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.br4=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.br6=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.br9=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ajZ=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a_A=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bry=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.brV=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bs_=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.aka=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bs6=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a_G=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bst=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bsu=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.H_=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bth=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.btU=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bu_=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bu3=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qO=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bue=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bui=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.buo=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.buq=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.akX=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.al0=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.H5=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a00=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.al9=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bvF=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bvX=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bwp=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bwy=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.alz=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a0c=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bwJ=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bx_=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a0i=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bxg=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bxx=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a0m=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bxC=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.alR=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.alT=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bxV=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.am_=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.byn=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.byr=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.byy=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.byH=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.byQ=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bzr=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bzX=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fVN=new A.C("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bDs=new A.eN(null,D.fVN,B.fj,null,x.A)
D.h44=new A.C("None",null,null,null,null,null,null,null,null,null,null,null)
D.bDu=new A.eN(null,D.h44,B.fj,null,x.A)
D.bE1=new A.bg(38e5)
D.bEL=new A.iI(0,10,0,10)
D.bEU=new A.R(0,1,0,0)
D.bF3=new A.iI(0,4,0,4)
D.bF6=new A.R(0,4,5,0)
D.bFm=new A.R(10,10,14,10)
D.bFx=new A.iI(10,4,10,4)
D.bFG=new A.iI(10,8,10,8)
D.bFH=new A.R(10,8,8,8)
D.bGb=new A.R(12,6,12,2)
D.bGv=new A.R(14,0,14,6)
D.bGz=new A.R(14,10,6,6)
D.bGA=new A.R(14,12,14,0)
D.bGE=new A.R(14,12,14,8)
D.bGH=new A.R(14,12,8,14)
D.bGL=new A.iI(14,14,14,14)
D.bH3=new A.R(14,6,14,40)
D.bH6=new A.R(14,8,14,30)
D.bHu=new A.R(16,2,16,10)
D.bHD=new A.R(16,6,16,30)
D.bHF=new A.R(16,6,16,8)
D.bHV=new A.R(18,10,18,4)
D.bHX=new A.R(18,12,18,0)
D.bI3=new A.R(18,14,12,4)
D.aot=new A.R(18,16,18,8)
D.bIk=new A.R(18,20,18,22)
D.bIq=new A.R(18,30,18,30)
D.bII=new A.R(20,10,12,20)
D.bIL=new A.R(20,11,20,11)
D.bIX=new A.R(20,18,16,18)
D.bIZ=new A.R(20,18,20,6)
D.bJO=new A.R(24,32,24,28)
D.bJP=new A.R(24,36,24,32)
D.bJS=new A.R(26,26,24,14)
D.bK5=new A.R(2,4,2,8)
D.bK9=new A.R(30,0,30,0)
D.bKk=new A.R(38,22,22,22)
D.aoS=new A.R(40,24,24,24)
D.bKm=new A.iI(40,40,40,40)
D.bKo=new A.R(46,30,30,30)
D.bKQ=new A.R(56,40,40,40)
D.bKU=new A.R(1.25,1.25,1.25,1.25)
D.bKV=new A.R(60,0,60,0)
D.bKZ=new A.R(6,14,6,16)
D.bL2=new A.R(6,4,12,0)
D.bL6=new A.R(6,6,10,2)
D.bLd=new A.iI(7,3,7,3)
D.bLK=new A.R(5,1.5,5,1.5)
D.bLV=new A.R(6,2.5,6,2.5)
D.hcl=new A.C("Family Games",null,B.jo,null,null,null,null,null,null,null,null,null)
D.fUn=new A.C("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.WX,null,null,null,null,null,null,null,null,null)
D.cNW=w([D.hcl,D.fUn],x.p)
D.bAW=new A.ft(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.cNW,null)
D.bMl=new A.bu(1,B.ba,D.bAW,null)
D.hgL=new A.C("Signature",null,B.nv,null,null,null,null,null,null,null,null,null)
D.bMo=new A.bu(1,B.ba,D.hgL,null)
D.h8Q=new A.C("MADE BY THE ONE WHO PLANTED THE TREE",null,X.uo,null,null,null,null,null,null,null,null,null)
D.bMW=new A.bu(1,B.ba,D.h8Q,null)
D.hdO=new A.C("Tell the AI what to fix",null,B.dt,null,null,null,null,null,null,null,null,null)
D.bNc=new A.bu(1,B.ba,D.hdO,null)
D.fOO=new A.H(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hfQ=new A.C("Worksheets",null,D.fOO,null,null,null,null,null,null,null,null,null)
D.fP_=new A.H(!0,E.ahU,null,null,null,null,13,B.cH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.heF=new A.C("Track your project spending",null,D.fP_,null,null,null,null,null,null,null,null,null)
D.dcH=w([D.hfQ,B.au,D.heF],x.p)
D.bAz=new A.ft(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.dcH,null)
D.bNi=new A.bu(1,B.ba,D.bAz,null)
D.fJG=new A.H(!0,E.kF,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUX=new A.C("FAMILY LIBRARY",null,D.fJG,null,null,null,null,null,null,null,null,null)
D.bNB=new A.bu(1,B.ba,D.fUX,null)
D.PI=new C.IG("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.x8=new C.IH(0,"male")
D.oR=new C.IH(1,"female")
D.zG=new C.IH(2,"unknown")
D.vf=new C.an7(0,"owner")
D.PJ=new C.an7(1,"editor")
D.l7=new C.an7(2,"viewer")
D.aqQ=new A.a_(61199,"MaterialIcons",!1)
D.bSW=new A.a_(61504,"MaterialIcons",!1)
D.bSX=new A.a_(61505,"MaterialIcons",!1)
D.bSZ=new A.a_(61587,"MaterialIcons",!1)
D.bT5=new A.a_(61890,"MaterialIcons",!1)
D.bTY=new A.a_(63034,"MaterialIcons",!0)
D.bUf=new A.a_(63153,"MaterialIcons",!1)
D.bUN=new A.a_(63429,"MaterialIcons",!1)
D.asY=new A.a_(984520,"MaterialIcons",!1)
D.bTu=new A.a_(62776,"MaterialIcons",!1)
D.bXb=new A.ae(D.bTu,26,B.b5,null,null,null)
D.bRU=new A.a_(57648,"MaterialIcons",!1)
D.bXw=new A.ae(D.bRU,14,B.c,null,null,null)
D.bXO=new A.ae(B.I8,17,null,null,null,null)
D.bXV=new A.ae(B.Qd,null,B.bR,null,null,null)
D.bYk=new A.ae(E.a3Y,null,null,null,null,null)
D.bYn=new A.ae(B.jk,18,E.kF,null,null,null)
D.a3I=new A.a_(62044,"MaterialIcons",!1)
D.bYt=new A.ae(D.a3I,null,B.aV,null,null,null)
D.bYA=new A.ae(At.zT,18,B.c,null,null,null)
D.bZh=new A.ae(B.eg,16,null,null,null,null)
D.bZo=new A.ae(D.a3I,32,B.aV,null,null,null)
D.bZI=new A.ae(E.aqR,18,B.cW,null,null,null)
D.c_P=new A.ae(B.Ij,22,B.aB,null,null,null)
D.c02=new A.ae(B.eg,22,B.b5,null,null,null)
D.c0f=new A.ae(A2.a3N,22,B.c,null,null,null)
D.c0m=new A.ae(B.vp,52,B.c,null,null,null)
D.c0x=new A.ae(B.Ij,30,B.aB,null,null,null)
D.c0T=new A.ae(B.Qm,null,B.c,null,null,null)
D.atH=new A.ae(B.vA,22,B.c,null,null,null)
D.c11=new A.ae(B.eg,17,null,null,null,null)
D.c1p=new A.ae(B.xm,26,B.cW,null,null,null)
D.c2c=new A.ae(B.a4c,16,null,null,null,null)
D.c2Z=new A.ae(B.vp,24,B.c,null,null,null)
D.c33=new A.ae(B.Qb,20,B.tX,null,null,null)
D.c39=new A.ae(B.I6,null,B.bR,null,null,null)
D.c3i=new A.ae(B.jk,18,B.c,null,null,null)
D.c3Z=new A.ae(B.cB,22,B.ab,null,null,null)
D.c4S=new A.ae(B.eq,16,B.ab,null,null,null)
D.c53=new A.ae(D.a3I,20,B.aV,null,null,null)
D.au7=new A.ae(B.hn,20,null,null,null,null)
D.c5D=new A.ae(B.cB,18,D.l_,null,null,null)
D.c5V=new A.ae(B.A2,28,B.c,null,null,null)
D.c66=new A.ae(B.Q1,null,B.fp,null,null,null)
D.c6r=new A.ae(B.A2,24,B.c,null,null,null)
D.c6U=new A.ae(B.vp,null,B.aV,null,null,null)
D.c6V=new A.ae(B.jD,20,B.cW,null,null,null)
D.c7e=new A.ae(B.I8,16,null,null,null,null)
D.c8N=new A.ed(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eU,!0,null,null,null,null)
D.auR=new C.a7f(10,null)
D.c9j=new C.a7f(12,null)
D.c9k=new C.a7f(14,null)
D.duG=w([B.bv,B.aV,B.fz,B.b5],x.O)
D.cau=new A.a7(B.ay,B.aD,B.x,D.duG,null,null)
D.bt3=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bzy=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d8P=w([D.bt3,D.bzy],x.O)
D.caH=new A.a7(B.aW,B.b0,B.x,D.d8P,null,null)
D.doe=w([B.fl,B.h6,B.fz],x.O)
D.caN=new A.a7(B.ay,B.aD,B.x,D.doe,null,null)
D.akL=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bji=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.dbf=w([D.akL,D.bji],x.O)
D.cbp=new A.a7(B.aW,B.b0,B.x,D.dbf,null,null)
D.bn9=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aEa=w([D.bn9,D.akL],x.O)
D.cbJ=new A.a7(B.ay,B.aD,B.x,D.aEa,null,null)
D.ajt=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bpW=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dnh=w([D.ajt,D.bpW],x.O)
D.cco=new A.a7(B.a5,B.a9,B.x,D.dnh,null,null)
D.dCh=w([B.bE,B.nM],x.O)
D.ccq=new A.a7(B.aW,B.b0,B.x,D.dCh,null,null)
D.bsZ=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dDf=w([D.bsZ,D.l_,D.l_,I.Oc],x.O)
D.dG_=w([0,0.07,0.9,1],x.n)
D.ccW=new A.a7(B.a5,B.a9,B.x,D.dDf,D.dG_,null)
D.cd4=new A.a7(B.ay,B.aD,B.x,B.U2,null,null)
D.d6l=w([B.aC,D.lQ],x.O)
D.cd7=new A.a7(B.a5,B.a9,B.x,D.d6l,null,null)
D.dBO=w([B.b5,B.aV,B.bR],x.O)
D.cea=new A.a7(B.ay,B.aD,B.x,D.dBO,null,null)
D.ciC=w([10,20,30],x.t)
D.csE=w([-1,-0.4,0.3,1],x.n)
D.cAc=w([B.bv,B.b5,B.fl],x.O)
D.cAk=w([B.bl,B.aC,B.kE],x.O)
D.cAm=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cB4=w([30,140,262,360],x.n)
D.brf=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cGG=w([D.brf,E.akk],x.O)
D.exP=new A.r(1,2)
D.frx=new A.cY(B.b7,D.exP,3)
D.aB1=w([D.frx],x.F)
D.cOc=w([B.hj,B.cd,B.fy],x.O)
D.cR1=w([B.bP,B.bA,B.bs],x.O)
D.bOr=new C.v5("classic","Classic leather","Gold-edged brown leather",D.aEa,E.kF,E.kF,"\u2766",B.K,!0,!1,!1,!1)
D.bin=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.byd=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.deD=w([D.bin,D.byd],x.O)
D.akn=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bOm=new C.v5("ornate","Ornate gold","Double gold border and flourishes",D.deD,D.akn,D.akn,"\u2726",B.K,!0,!0,!0,!1)
D.bmG=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.btO=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d51=w([D.bmG,D.btO],x.O)
D.bOl=new C.v5("parchment","Parchment","Old paper with dark ink",D.d51,D.H_,L.jg,"\u2767",B.K,!0,!1,!1,!0)
D.ahx=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bwm=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dzQ=w([D.ahx,D.bwm],x.O)
D.bqI=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bvz=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bOo=new C.v5("minimal","Clean paper","Plain and elegant, like a printed book",D.dzQ,D.bqI,D.bvz,"",B.K,!0,!0,!1,!0)
D.bOq=new C.v5("midnight","Midnight","Deep blue with silver stars",K.aEu,B.cC,B.cj,"\u2727",B.K,!0,!0,!1,!1)
D.bOk=new C.v5("emerald","Emerald library","Green cloth, title on the left",A_.aBr,E.kF,B.h8,"\u25c6",B.b8,!0,!1,!1,!1)
D.bwS=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dxI=w([B.ey,D.bwS],x.O)
D.bs5=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.btm=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bOp=new C.v5("rose","Rose vintage","Burgundy with rose-gold lettering",D.dxI,D.bs5,D.btm,"\u2740",B.K,!0,!1,!0,!1)
D.dCR=w([B.cu,F.n6],x.O)
D.bOn=new C.v5("modern","Modern","Dark, bold, left-aligned",D.dCR,B.aH,B.c,"",B.b8,!1,!0,!1,!1)
D.a6d=w([D.bOr,D.bOm,D.bOl,D.bOo,D.bOq,D.bOk,D.bOp,D.bOn],A.ar("N<v5>"))
D.cU4=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dCD=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bOC=new C.lL('What does "Ubuntu" mean?',D.dCD,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d76=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bOF=new C.lL("In Swahili, what do we call a grandmother?",D.d76,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d6Y=w(["Babu","Mama","Baba","Dada"],x.s)
D.bOA=new C.lL("In Swahili, what do we call a grandfather?",D.d6Y,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d8m=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bOE=new C.lL("What is a sister called in Swahili?",D.d8m,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.ddZ=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bOB=new C.lL("What is a brother called in Swahili?",D.ddZ,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d6X=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bOM=new C.lL("Which word means father in Swahili?",D.d6X,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dDR=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bOL=new C.lL('"Umoja ni nguvu" means...',D.dDR,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dAz=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bON=new C.lL('"Haba na haba hujaza kibaba" teaches us...',D.dAz,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.dbo=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bOK=new C.lL('The African saying "It takes a village to raise a child" means...',D.dbo,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dE9=w(["The elders","The market","The river","The drum"],x.s)
D.bOG=new C.lL("Who is the traditional keeper of the family stories?",D.dE9,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cYn=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bOD=new C.lL("Why do families sit round the fire at night?",D.cYn,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dCT=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bOI=new C.lL('What does "Harambee" mean?',D.dCT,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dh8=w(["An elder","A baby","A market","A cow"],x.s)
D.bOH=new C.lL('"Mzee" is a respectful word for...',D.dh8,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dxy=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bOJ=new C.lL('What does "Shikamoo" show?',D.dxy,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aBm=w([D.bOC,D.bOF,D.bOA,D.bOE,D.bOB,D.bOM,D.bOL,D.bON,D.bOK,D.bOG,D.bOD,D.bOI,D.bOH,D.bOJ],x.J)
D.d1R=w([90,360],x.n)
D.d4y=w([B.bR,B.bp],x.O)
D.bsM=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d5h=w([D.ahx,D.bsM],x.O)
D.d63=w([-1,-0.3,0.4,1],x.n)
D.d73=w([0,0.45,0.72,0.92,1],x.n)
D.bmC=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d7n=w([D.bmC,B.bC],x.O)
D.bki=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.am9=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d8_=w([B.dB,D.bki,D.am9],x.O)
D.d98=w([B.bd,B.ju,B.pz],x.O)
D.bnb=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bvq=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bjZ=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d9d=w([D.bnb,D.bvq,D.bjZ],x.O)
D.d9B=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d9L=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hLP=new C.aeJ(78,424,48,44,56)
D.hLN=new C.aeJ(214,396,34,34,42)
D.hLO=new C.aeJ(442,452,56,50,64)
D.aCm=w([D.hLP,D.hLN,D.hLO],A.ar("N<aeJ>"))
D.dal=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bjb=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bp4=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dFW=w([D.ajt,D.bjb,D.bp4],x.O)
D.bOs=new C.v6("leather","Leather",D.dFW,"vintage")
D.did=w([B.dk,B.GP,Ao.a_5],x.O)
D.bOz=new C.v6("midnight","Midnight",D.did,"starry")
D.d99=w([B.es,B.ei,B.lu],x.O)
D.bOy=new C.v6("forest","Forest",D.d99,"story")
D.dId=w([B.et,B.ey,B.kH],x.O)
D.bOv=new C.v6("burgundy","Burgundy",D.dId,"royal")
D.cQz=w([B.aC,B.n1,B.nD],x.O)
D.bOw=new C.v6("royal","Royal",D.cQz,"royal")
D.dbW=w([B.bA,B.cu,F.n6],x.O)
D.bOt=new C.v6("charcoal","Charcoal",D.dbW,"geo")
D.dG4=w([B.c8,B.dY,B.wH],x.O)
D.bOx=new C.v6("sunset","Sunset",D.dG4,"sunset")
D.dGU=w([B.ju,B.yW,B.a_9],x.O)
D.bOu=new C.v6("ocean","Ocean",D.dGU,"band")
D.Av=w([D.bOs,D.bOz,D.bOy,D.bOv,D.bOw,D.bOt,D.bOx,D.bOu],A.ar("N<v6>"))
D.dcu=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.ddc=w([B.an,B.aM,B.a_],x.O)
D.deJ=w([B.ey,B.ei,B.dk,B.iX,B.yY,B.cW,B.kc,B.cS,B.dd],x.O)
D.deK=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fry=new A.cY(B.dI,B.dT,8)
D.deW=w([D.fry],x.F)
D.dg9=w([B.c3,B.dY,B.k8],x.O)
D.bl9=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bpn=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.btJ=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dgr=w([D.bl9,G.akU,D.bpn,D.btJ,D.am9],x.O)
D.dgI=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dgW=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.biz=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.boI=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dhs=w([D.biz,D.aiW,D.boI],x.O)
D.di8=w([B.c3,B.hG],x.O)
D.die=w([G.nF,B.ir,G.ahJ,B.cY],x.O)
D.djV=w([B.cY,G.nF,B.ir,D.lR,B.cY],x.O)
D.dkA=w([B.aQ,B.yU,B.yL],x.O)
D.eVn=new A.y(-0.65,0.6)
D.f7B=new A.y(-0.2,0.95)
D.f8L=new A.y(0.25,0.95)
D.eYX=new A.y(0.7,0.6)
D.f9l=new A.y(1,0.1)
D.dlq=w([AJ.VR,D.eVn,D.f7B,D.f8L,D.eYX,D.f9l],x.G)
D.brz=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.by5=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bm9=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dlx=w([D.brz,D.by5,D.bm9],x.O)
D.dlC=w([B.bM,B.bY,B.dE,B.aQ],x.O)
D.dma=w([B.hY,B.c8,B.uQ],x.O)
D.dmy=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dmK=w([B.fl,B.cW],x.O)
D.bt7=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dnc=w([D.bt7,D.ahv],x.O)
D.dno=w([B.cU,B.fM,B.fX],x.O)
D.dnB=w([B.aH,B.bp,B.dk],x.O)
D.dob=w([B.eE,B.dw,B.ei],x.O)
D.dox=w([B.dW,B.dk,B.GP],x.O)
D.doB=w([B.bt,B.mZ,B.dd],x.O)
D.doS=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bsk=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bqq=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dpd=w([D.bsk,D.aiS,D.bqq],x.O)
D.dq5=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.drg=w([1,0,7,6,3,2],x.t)
D.a7a=w(["leather","linen","plain","stars","rays"],x.s)
D.drr=w([0.5,2,3.6],x.n)
D.ds_=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bWt=new A.a_(983781,"MaterialIcons",!1)
D.aDR=w([B.Qd,B.hP,B.kL,B.id,F.at5,B.Iu,B.rb,D.bWt,K.asJ,B.DK,B.re,B.m0],A.ar("N<a_>"))
D.a7e=w(["double","single","corners","none"],x.s)
D.bOh=new C.zS("Little Seed","\ud83c\udf31",0)
D.bOj=new C.zS("Young Listener","\ud83d\udc42",40)
D.bOi=new C.zS("Storyteller","\ud83e\ude98",120)
D.bOg=new C.zS("Village Pride","\ud83c\udfe1",300)
D.bOe=new C.zS("Keeper of Roots","\ud83c\udf33",700)
D.bOf=new C.zS("Elder of the Fire","\ud83d\udd25",1500)
D.aDT=w([D.bOh,D.bOj,D.bOi,D.bOg,D.bOe,D.bOf],A.ar("N<zS>"))
D.dte=w([B.cZ,B.bk,B.cS],x.O)
D.dtu=w([],x.C)
D.Ek=w([],x.u)
D.aO2=new A.r(225,528)
D.eX4=new A.y(D.aO2,1)
D.eyA=new A.r(350,548)
D.f2A=new A.y(D.eyA,0.95)
D.aNX=new A.r(158,656)
D.f2t=new A.y(D.aNX,1.12)
D.ezn=new A.r(92,544)
D.eSx=new A.y(D.ezn,0.93)
D.eyD=new A.r(398,614)
D.eZk=new A.y(D.eyD,1.04)
D.eyr=new A.r(318,662)
D.eNL=new A.y(D.eyr,1.1)
D.a7m=w([D.eX4,D.f2A,D.f2t,D.eSx,D.eZk,D.eNL],A.ar("N<+(r,G)>"))
D.dvA=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dw6=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dxe=w([B.cY,G.nF,B.ir,D.lR,B.cY,B.ir],x.O)
D.dyH=w([B.at,B.fM,B.iX],x.O)
D.dzo=w([-70,58],x.n)
D.dzq=w([-70,-30,20],x.n)
D.dAw=w([B.bt,B.mZ,B.a0d],x.O)
D.dAO=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dXk=new C.md("construction","Construction","Jobsite & builds",B.rd)
D.dXr=new C.md("house","Home Build","Houses & rooms",B.vr)
D.dXh=new C.md("grocery","Grocery","Store & pantry",B.a4K)
D.dXg=new C.md("calculator","Calculations","Math & estimates",B.Ql)
D.dXp=new C.md("lumber","Materials","Lumber & supplies",B.Ir)
D.dXd=new C.md("kitchen","Kitchen","Remodel & meals",Ab.QH)
D.bWq=new A.a_(983756,"MaterialIcons",!1)
D.dXi=new C.md("landscape","Landscaping","Yard & garden",D.bWq)
D.dXc=new C.md("plumbing","Plumbing","Pipes & water",B.q2)
D.dXs=new C.md("electrical","Electrical","Wiring & power",B.fF)
D.dXa=new C.md("store","Retail Shop","Daily business",B.kn)
D.dXb=new C.md("paint_remodel","Paint & Remodel","Colors & walls",Ab.QC)
D.bVN=new A.a_(983311,"MaterialIcons",!1)
D.dXo=new C.md("roofing","Roofing","Roofs & exteriors",D.bVN)
D.bWD=new A.a_(983986,"MaterialIcons",!1)
D.dX9=new C.md("warehouse","Warehouse","Storage & stock",D.bWD)
D.dXm=new C.md("vehicles","Vehicles","Fleet & transport",B.DH)
D.bTw=new A.a_(62785,"MaterialIcons",!1)
D.dXf=new C.md("farm","Farm","Crops & livestock",D.bTw)
D.dXe=new C.md("restaurant","Restaurant","Food & catering",B.vy)
D.dXl=new C.md("tools","Tools","Workshop gear",B.DD)
D.dXq=new C.md("wallet","Cash & Wallet","Quick spending",B.jD)
D.dXn=new C.md("concrete","Concrete","Foundation work",F.arN)
D.dXj=new C.md("blueprint","Blueprint","Plans & design",AG.ark)
D.a7L=w([D.dXk,D.dXr,D.dXh,D.dXg,D.dXp,D.dXd,D.dXi,D.dXc,D.dXs,D.dXa,D.dXb,D.dXo,D.dX9,D.dXm,D.dXf,D.dXe,D.dXl,D.dXq,D.dXn,D.dXj],A.ar("N<md>"))
D.dBs=w([B.bu,B.bk],x.O)
D.dCi=w([B.iF,B.oA,B.e1],x.O)
D.ajH=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.akG=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bqM=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bi2=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aF1=w([D.ajH,D.akG,D.bqM,D.bi2],x.O)
D.dDw=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7V=w(["top","middle","bottom"],x.s)
D.dF3=w([B.ct,B.bp,B.dk],x.O)
D.aFl=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bbD=new A.aa(0,B.H,B.b7,B.J,14)
D.aFp=w([D.bbD],x.V)
D.bpC=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dFP=w([D.aia,D.a0c,D.bpC],x.O)
D.dFQ=w([B.bf,B.dw,B.ei],x.O)
D.eya=new A.r(24,-8)
D.eyT=new A.r(48,0)
D.ey6=new A.r(24,6)
D.dHH=w([B.J,D.eya,D.eyT,D.ey6],x.g)
D.dI8=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.euC={top:0,middle:1,bottom:2}
D.dLt=new A.bl(D.euC,["Top","Middle","Bottom"],x.r)
D.eu9={double:0,single:1,corners:2,none:3}
D.dLz=new A.bl(D.eu9,["Double line","One line","Corners","None"],x.r)
D.evq={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dNd=new A.bl(D.evq,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dNp=new A.bl(B.ih,[],A.ar("bl<F,+(m,m)>"))
D.eut={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.EA=new A.bl(D.eut,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ar("bl<m,F>"))
D.dRJ=new H.Oa(32,null)
D.dRK=new H.Oa(40,null)
D.dRL=new H.Oa(46,null)
D.aNv=new C.av6(null)
D.ex1=new A.r(0,40)
D.ex2=new A.r(0,412)
D.ex5=new A.r(0,900)
D.exe=new A.r(0,-34)
D.exf=new A.r(0,-46)
D.exh=new A.r(0,-74)
D.exk=new A.r(100,300)
D.exl=new A.r(10,14)
D.exo=new A.r(10,-10)
D.ext=new A.r(10,-46)
D.exu=new A.r(10,-58)
D.exv=new A.r(116,442)
D.exx=new A.r(11,-1)
D.exy=new A.r(11,-10)
D.exz=new A.r(11,-21)
D.aNS=new A.r(11,-60)
D.exG=new A.r(14,-2)
D.exH=new A.r(150,520)
D.aa6=new A.r(150,592)
D.exK=new A.r(15,-15)
D.exL=new A.r(16,-1)
D.exO=new A.r(190,444)
D.exR=new A.r(1,5)
D.exZ=new A.r(21,-78)
D.ey_=new A.r(222,615)
D.Kq=new A.r(225,300)
D.aa8=new A.r(225,574)
D.ey9=new A.r(24,-52)
D.eyb=new A.r(250,210)
D.eym=new A.r(2,-56)
D.aO6=new A.r(300,0)
D.eyn=new A.r(300,440)
D.eyq=new A.r(318,476)
D.eyt=new A.r(324,144)
D.aab=new A.r(332,150)
D.eyv=new A.r(335,585)
D.eyw=new A.r(338,140)
D.eyx=new A.r(340,158)
D.eyz=new A.r(34,-60)
D.F1=new A.r(36,-24)
D.eyB=new A.r(372,470)
D.eyC=new A.r(390,455)
D.eyL=new A.r(42,468)
D.eyM=new A.r(431,510)
D.eyN=new A.r(431,520)
D.eyO=new A.r(45,-92)
D.eyP=new A.r(46,20)
D.eyQ=new A.r(46,-92)
D.eyR=new A.r(46,-94)
D.eyS=new A.r(47,-4)
D.eyU=new A.r(48,-4)
D.ez1=new A.r(4,-26)
D.ez9=new A.r(60,455)
D.ezi=new A.r(8,14)
D.ezm=new A.r(8,-76)
D.ezo=new A.r(95,575)
D.ezp=new A.r(98,-24)
D.ezr=new A.r(9,-2)
D.ezs=new A.r(9,-58)
D.aOf=new A.r(9,-79)
D.ezt=new A.r(9,-9)
D.eA5=new A.r(16.5,8)
D.eA7=new A.r(3.2,0)
D.eA8=new A.r(-16.5,8)
D.eAf=new A.r(16.5,2)
D.eAi=new A.r(-3.2,0)
D.eAq=new A.r(9.5,6)
D.eAt=new A.r(-10,14)
D.eAu=new A.r(-10,-12)
D.eAv=new A.r(-10,-58)
D.eAx=new A.r(-11,-10)
D.eAz=new A.r(-11,-60)
D.eAA=new A.r(-12,-14)
D.eAB=new A.r(-12,-16)
D.eAG=new A.r(-14,-2)
D.eAJ=new A.r(-15,-15)
D.eAK=new A.r(-15,-3)
D.eAM=new A.r(-16,-1)
D.eB1=new A.r(-24,-52)
D.eBa=new A.r(-2,-34)
D.eBb=new A.r(-2,-38)
D.eBd=new A.r(-30,-100)
D.aad=new A.r(-36,-24)
D.eBo=new A.r(-4,-26)
D.eBq=new A.r(-4,-6)
D.eBz=new A.r(-8,-3)
D.eBA=new A.r(-8,-48)
D.eBD=new A.r(-9,-2)
D.eBF=new A.r(-9,-58)
D.eBG=new A.r(-9,-79)
D.eBH=new A.r(-9,-9)
D.eBJ=new A.r(-9.5,6)
D.eBW=new A.r(-16.5,2)
D.h1q=new A.C("Write a new book",null,B.hs,null,B.K,null,null,null,null,null,null,null)
D.eCv=new A.D(B.l5,D.h1q,null)
D.hgj=new A.C("Tap to go on",null,B.w8,null,null,null,null,null,null,null,null,null)
D.eCR=new A.D(B.lx,D.hgj,null)
D.atf=new A.ae(B.ic,18,B.c,null,null,null)
D.fVj=new A.C("Add",null,B.kS,null,null,null,null,null,null,null,null,null)
D.dlS=w([D.atf,B.pj,D.fVj],x.p)
D.foC=new A.c1(B.aK,B.e,B.M,B.l,null,B.p,null,0,D.dlS,null)
D.eCU=new A.D(B.nY,D.foC,null)
D.eCW=new A.D(E.anh,Af.Zn,null)
D.fOJ=new A.H(!0,B.c,null,null,null,null,13.5,B.F,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYB=new A.C("New Project",null,D.fOJ,null,null,null,null,null,null,null,null,null)
D.dqw=w([D.atf,B.aa,D.fYB],x.p)
D.foF=new A.c1(B.aK,B.e,B.M,B.l,null,B.p,null,0,D.dqw,null)
D.eD9=new A.D(B.hy,D.foF,null)
D.h08=new A.C("Choose your header",null,A7.ul,null,null,null,null,null,null,null,null,null)
D.eDu=new A.D(B.ib,D.h08,null)
D.bhg=new A.fr(2.2,null,null,null,null,B.cW,null,null,null,null)
D.fuq=new A.a6(22,22,D.bhg,null)
D.bfm=new A.cl(B.z,null,null,D.fuq,null)
D.eDz=new A.D(B.a1z,D.bfm,null)
D.bGW=new A.R(14,2,14,6)
D.heo=new A.C("The top of your book. Tap a design to see it.",null,Y.um,null,null,null,null,null,null,null,null,null)
D.eDA=new A.D(D.bGW,D.heo,null)
D.h_i=new A.C("\ud83c\udfc6 A new record!",null,B.hh,null,null,null,null,null,null,null,null,null)
D.eDC=new A.D(B.lx,D.h_i,null)
D.eFa=new A.jj(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eFd=new A.jj(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aOS=new A.jj(1,0.9607843137254902,0.48627450980392156,0)
D.Ky=new A.jj(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.B5=new A.jj(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eFj=new A.jj(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hO0=new C.bl6(null)
D.bBI=new A.mT(D.hO0,null,B.az,null,null)
D.aSv=new A.cN(0,0,0,0,null,null,D.bBI,null)
D.fVl=new A.C("\ud83c\udfc5",null,B.acx,null,null,null,null,null,null,null,null,null)
D.eJJ=new A.cN(null,0,-34,null,null,null,D.fVl,null)
D.eSb=new A.y("E","Sit by the fire again")
D.eXW=new A.y("C","Good Learner")
D.f0v=new A.y("D","Still Growing")
D.f5i=new A.y(-42,42)
D.f6I=new A.y("B","Faithful Listener")
D.f8N=new A.y("A","Keeper of the Family")
D.fc0=new A.b0(-17,0.7,0)
D.fcB=new A.b0(-8,0.95,1.3)
D.fdJ=new A.b0(18,0.65,5.2)
D.fdL=new A.b0(0,1.15,2.6)
D.fe5=new A.b0(9,0.9,3.9)
D.fg4=new A.b7([0,0,1,1])
D.aU1=new A.a4(0,0,520,160)
D.flD=new A.a4(10,612,440,618)
D.flE=new A.a4(10,612,440,628)
D.flH=new A.a4(14,-64,34,-12)
D.flK=new A.a4(300,336,350,348)
D.ab7=new A.a4(30,96,420,346)
D.flL=new A.a4(30,-9,46,1)
D.flM=new A.a4(4,2,11,14)
D.flO=new A.a4(-8,-12.5,8,-7)
D.flP=new A.a4(-16.5,-21,16.5,1)
D.flQ=new A.a4(60,342,88,348)
D.VS=new A.a4(66,-66,94,-36)
D.flR=new A.a4(6,8,10,14)
D.flU=new A.a4(95,343,115,348)
D.flV=new A.a4(-6.5,-74,6.5,-58)
D.fm0=new A.a4(-100,-74,100,-12)
D.fm1=new A.a4(-10,8,-6,14)
D.fm2=new A.a4(-11,2,-4,14)
D.fm3=new A.a4(-11,-70,11,-56)
D.fma=new A.a4(-13,-24,13,-4)
D.fmh=new A.a4(-15,-21,15,0)
D.fmk=new A.a4(-16,-21,16,1)
D.fml=new A.a4(-16,-21,16,2)
D.fmo=new A.a4(-16,-26,16,-6)
D.fmw=new A.a4(-230,-26,230,26)
D.fmV=new A.a4(-38,-26,12,-6)
D.fmZ=new A.a4(-3,-70,3,-63)
D.fn_=new A.a4(-44,-22,44,0)
D.fn1=new A.a4(-46,-9,-30,1)
D.aU5=new A.a4(-80,-190,80,20)
D.fn8=new A.a4(-8,-26,40,-6)
D.fn9=new A.a4(-98,-80,92,-75)
D.fna=new A.a4(-9,-15,9,-9)
D.hdV=new A.C("Let the AI write it from your tree",null,B.iS,null,B.K,null,null,null,null,null,null,null)
D.bPm=new A.d6(1,B.cg,D.hdV,null)
D.di7=w([E.a5d,B.aa,D.bPm],x.p)
D.foe=new A.c1(B.aK,B.e,B.M,B.l,null,B.p,null,0,D.di7,null)
D.fUY=new A.C("Save member",null,B.cb,null,null,null,null,null,null,null,null,null)
D.dz7=w([D.au7,B.aa,D.fUY],x.p)
D.fop=new A.c1(B.aK,B.b9,B.h,B.l,null,B.p,null,0,D.dz7,null)
D.c08=new A.ae(B.it,14,B.b5,null,null,null)
D.fIb=new A.H(!0,B.b5,null,null,null,null,12,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZ1=new A.C("Cashier",null,D.fIb,null,null,null,null,null,null,null,null,null)
D.dr5=w([D.c08,B.bb,D.fZ1],x.p)
D.fou=new A.c1(B.aK,B.e,B.M,B.l,null,B.p,null,0,D.dr5,null)
D.fUZ=new A.C("Transfer & settings",null,B.dt,null,null,null,null,null,null,null,null,null)
D.bN2=new A.bu(1,B.ba,D.fUZ,null)
D.d8v=w([D.atH,B.ar,D.bN2],x.p)
D.fov=new A.c1(B.aK,B.e,B.h,B.l,null,B.p,null,0,D.d8v,null)
D.ft5=new A.av(16,40)
D.fta=new A.av(22,64)
D.fth=new A.av(280,88)
D.fu5=new A.a6(30,null,null,null)
D.fU3=new A.C("The teacher is writing\u2026",null,B.Br,null,null,null,null,null,null,null,null,null)
D.bgs=new A.cl(B.z,null,null,D.fU3,null)
D.hHK=new A.bf("w",x.W)
D.fuu=new A.a6(null,56,D.bgs,D.hHK)
D.fvh=new A.hY(5,8,8,1,null)
D.fvp=new A.hY(2,12,12,1.05,null)
D.fYH=new A.C("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fw9=new A.b2(D.fYH,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYX=new A.C("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aWp=new A.b2(D.fYX,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h6t=new A.C("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fwD=new A.b2(D.h6t,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hhm=new A.C("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fwI=new A.b2(D.hhm,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h06=new A.C("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fwP=new A.b2(D.h06,null,null,null,null,null,null,null,null,null,null,null,null,B.fZ,!1,null,null,null,B.t,null)
D.heB=new A.C("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aWu=new A.b2(D.heB,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h04=new A.C("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fxe=new A.b2(D.h04,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVC=new A.C("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fxg=new A.b2(D.fVC,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h3T=new A.C("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fxm=new A.b2(D.h3T,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hi8=new A.C("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fy2=new A.b2(D.hi8,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hcP=new A.C("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fys=new A.b2(D.hcP,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hhq=new A.C("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fyv=new A.b2(D.hhq,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h86=new A.C("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fyx=new A.b2(D.h86,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h22=new A.C("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fyy=new A.b2(D.h22,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h23=new A.C("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fzz=new A.b2(D.h23,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYJ=new A.C("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fzR=new A.b2(D.fYJ,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h_K=new A.C("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fAa=new A.b2(D.h_K,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h7A=new A.C("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fAr=new A.b2(D.h7A,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h2S=new A.C("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fAs=new A.b2(D.h2S,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fNo=new A.H(!0,B.bB,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC0=new A.eE("\u2665",null,null,B.cX,null,null,null,null,null,null,D.fNo)
D.fKw=new A.H(!0,B.aS,null,null,null,null,28,B.P,B.cO,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCg=new A.eE("Today: how well do you know the family?",null,null,B.cX,null,null,null,null,null,null,D.fKw)
D.fCx=new A.H(!0,B.qC,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDJ=new A.H(!0,D.l_,null,null,null,null,13,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE5=new A.H(!0,D.l_,null,null,null,null,12,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE9=new A.H(!0,B.cY,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEi=new A.H(!0,D.fL,null,null,null,null,15,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEt=new A.H(!0,D.fL,null,null,null,null,13,B.F,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEO=new A.ti(!0,B.u8,null,null,null,null,B.dL,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF3=new A.H(!0,B.cY,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF7=new A.H(!0,D.l_,null,null,null,null,18,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF8=new A.H(!0,B.cY,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFd=new A.H(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFg=new A.H(!0,B.cY,null,null,null,null,15,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFM=new A.H(!0,B.b5,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFN=new A.H(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFP=new A.H(!0,B.aS,null,null,null,null,15.5,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGg=new A.H(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXJ=new A.H(!0,B.aR,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXK=new A.H(!0,D.lQ,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGG=new A.H(!0,B.cY,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acC=new A.ti(!0,B.Vo,null,null,null,null,B.dL,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.WL=new A.H(!0,B.cY,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGQ=new A.H(!0,B.a_,null,null,null,null,12.5,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGV=new A.H(!0,D.fL,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHk=new A.H(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIv=new A.H(!0,D.fL,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXT=new A.H(!0,D.fL,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIP=new A.H(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ0=new A.H(!0,D.fL,null,null,null,null,null,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ2=new A.H(!0,null,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ8=new A.H(!0,L.jg,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXX=new A.H(!0,D.fL,null,null,null,null,14.5,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK6=new A.H(!0,D.fL,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKp=new A.H(!0,D.fL,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKr=new A.H(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKt=new A.H(!0,B.cY,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKR=new A.H(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,Ae.Jq,null,null,null)
D.aYa=new A.H(!0,D.fL,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLg=new A.H(!0,B.a_,null,null,null,null,17,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLC=new A.H(!0,B.fp,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM_=new A.H(!0,B.bR,null,null,null,null,8,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM4=new A.H(!0,B.bE,null,null,null,null,11,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMg=new A.H(!0,B.c,null,null,null,null,13.5,B.F,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMj=new A.H(!0,D.fL,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMr=new A.H(!0,D.H_,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMD=new A.H(!0,B.b5,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN1=new A.H(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN8=new A.H(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Eb,null,null,null)
D.fNA=new A.H(!0,B.cY,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNI=new A.H(!0,B.cW,null,null,null,null,13,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNV=new A.H(!0,D.lR,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYx=new A.H(!0,D.fL,null,null,null,null,null,B.F,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.LK=new A.H(!0,B.cY,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYz=new A.H(!0,B.cY,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Eb,null,null,null)
D.fOf=new A.H(!0,B.bR,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOj=new A.H(!0,G.nF,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOH=new A.H(!0,B.b5,null,null,null,null,13,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOZ=new A.H(!0,D.fL,null,null,null,null,15,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPn=new A.H(!0,B.c,null,null,null,null,null,B.F,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPM=new A.H(!0,D.fL,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQi=new A.H(!0,D.fL,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQn=new A.H(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQx=new A.H(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ad8=new A.H(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adb=new A.H(!0,D.lQ,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSh=new A.H(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSB=new A.H(!0,B.aS,null,null,null,null,27,B.P,B.cO,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSI=new A.H(!0,L.jg,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSQ=new A.H(!0,L.jg,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTj=new A.C("Time:",null,B.hD,null,null,null,null,null,null,null,null,null)
D.fTF=new A.C("\ud83c\udfae",null,K.acZ,null,null,null,null,null,null,null,null,null)
D.fTG=new A.C("Themes",null,B.pl,null,null,null,null,null,null,null,null,null)
D.fUb=new A.C("\ud83c\udfb2",null,B.y7,null,null,null,null,null,null,null,null,null)
D.fUf=new A.C("Delete this game?",null,B.iS,null,null,null,null,null,null,null,null,null)
D.fUm=new A.C("Add Item",null,B.cb,null,null,null,null,null,null,null,null,null)
D.fIJ=new A.H(!0,B.a_,null,null,null,null,22,B.F,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUN=new A.C("Debt receipt",null,D.fIJ,null,B.K,null,null,null,null,null,null,null)
D.aYN=new A.H(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV5=new A.C("Person who owes",null,D.aYN,null,null,null,null,null,null,null,null,null)
D.fW5=new A.C("Notes",null,B.acO,null,null,null,null,null,null,null,null,null)
D.fWz=new A.C("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fHD=new A.H(!0,B.c,null,null,null,null,11,B.F,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWB=new A.C("Share",null,D.fHD,null,null,null,null,null,null,null,null,null)
D.fXD=new A.C("Move your family trees",null,I.ad5,null,null,null,null,null,null,null,null,null)
D.fYi=new A.C("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fYW=new A.C("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fZj=new A.C("SAVE",null,D.LK,null,null,null,null,null,null,null,null,null)
D.fZX=new A.C("The round button is the right answer.",null,Y.Bv,null,null,null,null,null,null,null,null,null)
D.h_h=new A.C("Remove this book?",null,B.hh,null,null,null,null,null,null,null,null,null)
D.fOE=new A.H(!0,B.cY,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Eb,null,null,null)
D.h_P=new A.C("Fireside Stories",null,D.fOE,null,null,null,null,null,null,null,null,null)
D.aZh=new A.C("Download",null,B.cb,null,null,null,null,null,null,null,null,null)
D.h0v=new A.C("What should the AI do?",null,B.dt,null,null,null,null,null,null,null,null,null)
D.fHe=new A.H(!0,D.lQ,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0K=new A.C("REPORT CARD",null,D.fHe,null,null,null,null,null,null,null,null,null)
D.h1x=new A.C("Calabash Catch",null,B.X6,null,null,null,null,null,null,null,null,null)
D.h1Z=new A.C("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.h2p=new A.C("\ud83c\udfe1",null,B.Fx,null,null,null,null,null,null,null,null,null)
D.h36=new A.C("Ribbon bookmark",null,B.jN,null,null,null,null,null,null,null,null,null)
D.fQh=new A.H(!0,B.b5,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3B=new A.C("NGMY.ORG",null,D.fQh,null,B.K,null,null,null,null,null,null,null)
D.h4W=new A.C("Scan family tree QR",null,B.cI,null,null,null,null,null,null,null,null,null)
D.fMk=new A.H(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5J=new A.C("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fMk,null,B.K,null,null,null,null,null,null,null)
D.h6X=new A.C("Delete",null,B.WF,null,null,null,null,null,null,null,null,null)
D.h6Y=new A.C("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.h75=new A.C("Thumbnail",null,B.pl,null,null,null,null,null,null,null,null,null)
D.h7F=new A.C("Save the cover",null,B.cI,null,null,null,null,null,null,null,null,null)
D.h7K=new A.C("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.Bz,null,B.K,null,null,null,null,null,null,null)
D.h87=new A.C("Your photos",null,B.pl,null,null,null,null,null,null,null,null,null)
D.h8o=new A.C("Create Project",null,B.cb,null,null,null,null,null,null,null,null,null)
D.h8L=new A.C("\u2b50 stars",null,AO.Fy,null,null,null,null,null,null,null,null,null)
D.h8Z=new A.C("Design your cover",null,A7.ul,null,null,null,null,null,null,null,null,null)
D.h94=new A.C("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.h97=new A.C("PICTURE",null,N.wb,null,null,null,null,null,null,null,null,null)
D.h99=new A.C("\ud83c\udfaf",null,D.X5,null,null,null,null,null,null,null,null,null)
D.h9w=new A.C("Paid",null,B.cb,null,null,null,null,null,null,null,null,null)
D.h9y=new A.C("You can undo it right after.",null,Y.Bv,null,null,null,null,null,null,null,null,null)
D.ha6=new A.C("Print",null,B.w9,null,null,null,null,null,null,null,null,null)
D.haw=new A.C("Amount owed",null,D.aYN,null,null,null,null,null,null,null,null,null)
D.haM=new A.C("Got it",null,B.cb,null,null,null,null,null,null,null,null,null)
D.hbo=new A.C("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.hbr=new A.C("Add to budget",null,B.cb,null,null,null,null,null,null,null,null,null)
D.hbR=new A.C("Debtor signature",null,B.acO,null,null,null,null,null,null,null,null,null)
D.hc1=new A.C("Change icon",null,B.acN,null,null,null,null,null,null,null,null,null)
D.hcQ=new A.C("MADE BY THE SYSTEM, FROM YOUR TREE",null,X.uo,null,null,null,null,null,null,null,null,null)
D.hdh=new A.C("Family tree QR",null,B.cI,null,null,null,null,null,null,null,null,null)
D.hdn=new A.C("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.X4,null,null,null,null,null,null,null,null,null)
D.hdL=new A.C("Download",null,B.w9,null,null,null,null,null,null,null,null,null)
D.hdM=new A.C("The person who planted this tree has not made a game yet.",null,A1.Bx,null,null,null,null,null,null,null,null,null)
D.hdQ=new A.C("Change",null,B.pl,null,null,null,null,null,null,null,null,null)
D.heH=new A.C("Clear all",null,B.cb,null,null,null,null,null,null,null,null,null)
D.heK=new A.C("WHAT SHOULD IT CHANGE?",null,N.wb,null,null,null,null,null,null,null,null,null)
D.hfi=new A.C("COLOUR",null,N.wb,null,null,null,null,null,null,null,null,null)
D.hfx=new A.C("Do it",null,B.cI,null,null,null,null,null,null,null,null,null)
D.hfB=new A.C("Create Tree",null,B.cb,null,null,null,null,null,null,null,null,null)
D.hfL=new A.C("Give me another clue",null,D.LK,null,null,null,null,null,null,null,null,null)
D.hgF=new A.C("Create Family Tree",null,B.fh,null,null,null,null,null,null,null,null,null)
D.hgP=new A.C("THE TEACHER EXPLAINS THESE",null,X.uo,null,null,null,null,null,null,null,null,null)
D.fCw=new A.H(!0,E.kF,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hgV=new A.C("Write the first page myself",null,D.fCw,null,null,null,null,null,null,null,null,null)
D.hht=new A.C("Use this header",null,B.cI,null,null,null,null,null,null,null,null,null)
D.hhA=new A.C("Create Project",null,E.aYt,null,null,null,null,null,null,null,null,null)
D.hJe=new C.adl(1,"header")
D.aed=new C.adl(2,"projects")
D.hJf=new C.adl(3,"cashier")
D.aee=new C.adl(4,"familyTree")
D.hYV=new C.cIS(0,"start")
D.hYW=new C.cIT(0,"start")
D.hJs=new C.a_g(null)
D.hKt=new C.a_L(null)
D.dNm=new A.bl(B.ih,[],A.ar("bl<m,GT>"))
D.dtT=w([],x.dE)
D.dtU=w([],x.M)
D.hL7=new C.bih(D.dNm,D.dtT,D.dtU,0,0,null,null)
D.b2M=new C.a0B(0,"intro")
D.b2N=new C.a0B(1,"countdown")
D.aer=new C.a0B(2,"ask")
D.Y1=new C.a0B(3,"reveal")
D.b2O=new C.a0B(4,"end")
D.hO2=new C.tq(F.H8,D.lR,B.cY,F.mi,5,!1,!1,!1,0,null)
D.hO4=new C.tq(F.H8,B.et,B.cY,B.bO,2,!0,!0,!1,2,B.cY)
D.hO6=new C.tq(B.qQ,B.cW,B.cY,F.mi,2,!0,!1,!1,2,B.at)
D.hO7=new C.tq(F.H8,B.dW,B.cY,F.mi,5,!1,!1,!1,1,null)
D.hOa=new C.tq(F.a0t,D.akG,B.cY,F.mi,4,!0,!1,!0,0,null)
D.b2R=new C.tq(F.a0t,B.dY,B.cY,F.mi,3,!0,!1,!0,2,null)
D.b2S=new C.tq(F.tk,D.lR,B.c,F.mi,0,!1,!1,!0,0,null)
D.b2T=new C.tq(B.qQ,B.aC,B.cY,B.bO,2,!0,!0,!1,2,B.dY)
D.b2U=new C.tq(B.qQ,G.nF,B.ir,F.mi,5,!1,!1,!0,3,null)
D.hOe=new C.tq(B.qQ,B.dY,B.cY,F.mi,0,!0,!1,!1,0,B.aC)
D.b2V=new C.tq(F.H8,B.et,B.cY,B.bO,1,!1,!0,!1,1,null)
D.b2W=new C.tq(F.GF,B.at,B.aC,F.mi,4,!0,!1,!0,2,null)
D.hOg=new C.tq(F.tk,B.at,B.et,F.mi,3,!0,!1,!1,0,null)
D.hOi=new C.tq(B.qQ,B.dW,B.cY,B.bO,1,!1,!0,!1,1,null)
D.hOj=new C.tq(F.GF,D.ajH,B.c,F.mi,5,!1,!1,!0,0,null)
D.hOY=new C.a19(null)
D.hZ3=new C.agM(0,"still")
D.Yo=new C.agM(1,"walk")
D.b3F=new C.agM(2,"pound")
D.b3G=new C.agM(3,"drum")
D.hUy=new C.a2q(0,"greet")
D.b3H=new C.a2q(1,"teach")
D.aeL=new C.a2q(2,"ask")
D.hUz=new C.a2q(3,"feedback")
D.b3I=new C.a2q(4,"end")
D.Yv=new C.a2J(0,"intro")
D.Yw=new C.a2J(1,"asking")
D.BP=new C.a2J(2,"reacting")
D.aeW=new C.a2J(3,"driving")
D.aeX=new C.a2J(4,"arrived")
D.af4=new C.aMM(0,"projects")
D.b47=new C.aMM(1,"cashier")
D.hWE=new C.aMM(2,"familyTree")})()};
(a=>{a["B5kPXWfV0z8fny5k6HptpIqmJhU="]=a.current})($__dart_deferred_initializers__);