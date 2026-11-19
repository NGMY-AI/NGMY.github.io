((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,X,Y,Q,Z,M,K,A_,A0,N,A1,O,L,E,A2,G,H,P,C={
bGJ(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bGJ=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vV(null,""),$async$bGJ)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nl(b1)
s=A.c0(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.du(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cR(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.W.av(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rj(t,a1,B.i1,"book",B.H5),$async$bGJ)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=A.RI(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.M4(l)?y.k:y.y)
for(j=J.a8(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cE
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=A.a3Z(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGJ,v)},
aip(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aip=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vV(null,""),$async$aip)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nl(b6)
s=x.S
r=A.cT(c1,0,A.dA(4,"count",s),A.U(c1).c)
q=A.a3K(new A.N(r,new C.fR9(),r.$ti.k("N<ak.E,q>")).aN(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fR8(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.W.av(b7,null)+"\nAllowed values: style one of "+B.d.aN(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aip)
case 6:l=c5
k=A.RI(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aqb(s,D.dJg,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.du(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.W.av(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aip)
case 10:l=c5
k=l==null?null:A.RI(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.dd(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kN(a5,a2.k("kN<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
b0=J.a8(a9)
b1=A.aI(b0.h(a9,"index"))
i=b1==null?null:B.h.M(b1)
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
p=A.cF(new A.b8(h,s),new C.fRa(),s.k("M.E"),p)
p=A.a3K(A.pM(p,3,A.a3(p).k("M.E")).aN(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cr<1>")
b4=A.B(new A.cr(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(A.a3Z(s,b9),$async$aip)
case 13:b5=c5
for(s=J.a8(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aqb(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aip,v)},
hJE(d,e,f){return A.cg(null,B.w.j(0.65),!1,null,new C.h0c(e,f),d,null,!0,!0,x.g2)},
aqb:function aqb(d,e,f){this.a=d
this.b=e
this.c=f},
fR9:function fR9(){},
fR8:function fR8(d){this.a=d},
fRa:function fRa(){},
h0c:function h0c(d,e){this.a=d
this.b=e},
bEu(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bEu=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aU(b1,new C.fEb())){u=null
w=1
break}t=B.d.cE(b1,new C.fEc())
s=$.S()
r=new A.q5(new A.pH())
q=A.zp(r,D.aT8)
p=A.L()
p.r=B.c.gp(0)
q.aF(D.aT8,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.aa
o.d=B.bG
o.e=B.dQ
n=new C.fEh(t)
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
s=$.S()
p=A.a([],x.v)
a3=new A.aG(s.r,B.aj,null,null,p)
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
a3=new A.aG(s.r,B.aj,null,null,p)
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
return A.b(r.o9().xL(520,160),$async$bEu)
case 4:w=3
return A.b(b3.hj(B.hf),$async$bEu)
case 3:b0=b3
u=b0==null?null:J.eQ(B.dF.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEu,v)},
fOP(d){return C.iol(d)},
iol(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fOP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bko()
n=d.x!=null&&d.zR(null).length===0
if(d.x!=null)t=n?D.AI:D.K8
else t=d.gUV()?D.K8:D.aO0
w=3
return A.b(C.bEu(d.ax),$async$fOP)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aoO(s)
r=A.a5J(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aO0}else{p.c=C.xm(q,!0)
p.b=n?D.AI:D.K8}r.a4v(A.haW(new C.fOR(p,d,new C.fOS(),t,n,o),null,D.bJ5,B.xr))
u=r.jH(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fOP,v)},
fVJ(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fVJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fOP(d),$async$fVJ)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aA(q,0,40)
u=A.Hx(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fVJ,v)},
fEb:function fEb(){},
fEc:function fEc(){},
fEh:function fEh(d){this.a=d},
fOS:function fOS(){},
fOR:function fOR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fOQ:function fOQ(){},
h0F(d,e){var w=0,v=A.j(x.H)
var $async$h0F=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.w.j(0.55),!0,null,new C.h0J(new A.cy(null,x.eF),e),d,null,!0,!0,x.H),$async$h0F)
case 2:return A.h(null,v)}})
return A.i($async$h0F,v)},
bHa(d,e,f,g){return C.iw0(d,e,f,g)},
iw0(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bHa=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cH.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.T(D.fuT)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.h0B(g,r,f),d,null,!0,!0,x.H),$async$bHa)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bHa,v)},
h0K(d,e){var w=0,v=A.j(x.H)
var $async$h0K=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.h0N(new A.cy(null,x.eF),e),d,null,!0,!0,x.H),$async$h0K)
case 2:return A.h(null,v)}})
return A.i($async$h0K,v)},
b0A:function b0A(d,e){this.c=d
this.a=e},
c97:function c97(){},
bdM:function bdM(d,e){this.b=d
this.a=e},
h0J:function h0J(d,e){this.a=d
this.b=e},
h0G:function h0G(d){this.a=d},
h0H:function h0H(d,e,f){this.a=d
this.b=e
this.c=f},
h0I:function h0I(d,e){this.a=d
this.b=e},
h0B:function h0B(d,e,f){this.a=d
this.b=e
this.c=f},
h0z:function h0z(d){this.a=d},
h0A:function h0A(d,e,f){this.a=d
this.b=e
this.c=f},
h0N:function h0N(d,e){this.a=d
this.b=e},
h0L:function h0L(d){this.a=d},
h0M:function h0M(d,e,f){this.a=d
this.b=e
this.c=f},
fJ5(d,e){var w=0,v=A.j(x.y),u,t
var $async$fJ5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3u(d),$async$fJ5)
case 3:t=g
J.no(t,new C.fJ6(e))
u=A.aj2(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJ5,v)},
fJ6:function fJ6(d){this.a=d},
aqo:function aqo(d,e,f){this.c=d
this.d=e
this.a=f},
aFe:function aFe(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dRX:function dRX(d,e){this.a=d
this.b=e},
dRI:function dRI(d,e){this.a=d
this.b=e},
dRL:function dRL(d,e,f){this.a=d
this.b=e
this.c=f},
dRK:function dRK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRJ:function dRJ(d,e){this.a=d
this.b=e},
dRM:function dRM(d,e){this.a=d
this.b=e},
dRG:function dRG(){},
dRH:function dRH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dRF:function dRF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dRq:function dRq(d){this.a=d},
dRr:function dRr(d,e,f){this.a=d
this.b=e
this.c=f},
dRs:function dRs(d,e){this.a=d
this.b=e},
dRp:function dRp(d){this.a=d},
dRx:function dRx(d,e){this.a=d
this.b=e},
dRo:function dRo(d){this.a=d},
dRy:function dRy(d,e,f){this.a=d
this.b=e
this.c=f},
dRz:function dRz(d,e,f){this.a=d
this.b=e
this.c=f},
dRn:function dRn(d,e){this.a=d
this.b=e},
dRA:function dRA(d,e,f){this.a=d
this.b=e
this.c=f},
dRm:function dRm(d,e){this.a=d
this.b=e},
dRB:function dRB(d,e){this.a=d
this.b=e},
dRl:function dRl(d){this.a=d},
dRC:function dRC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRj:function dRj(){},
dRd:function dRd(d){this.a=d},
dRe:function dRe(d){this.a=d},
dRk:function dRk(d,e){this.a=d
this.b=e},
dRD:function dRD(d,e){this.a=d
this.b=e},
dRi:function dRi(d){this.a=d},
dRE:function dRE(d){this.a=d},
dRh:function dRh(){},
dRt:function dRt(d,e){this.a=d
this.b=e},
dRg:function dRg(d){this.a=d},
dRu:function dRu(d,e,f){this.a=d
this.b=e
this.c=f},
dRf:function dRf(d,e){this.a=d
this.b=e},
dRc:function dRc(d,e){this.a=d
this.b=e},
dRv:function dRv(d){this.a=d},
dRw:function dRw(d,e,f){this.a=d
this.b=e
this.c=f},
dS_:function dS_(){},
dS0:function dS0(d,e){this.a=d
this.b=e},
dRY:function dRY(d){this.a=d},
dRZ:function dRZ(d){this.a=d},
dRU:function dRU(d,e){this.a=d
this.b=e},
dRV:function dRV(d){this.a=d},
dRN:function dRN(d,e,f){this.a=d
this.b=e
this.c=f},
dRO:function dRO(d,e,f){this.a=d
this.b=e
this.c=f},
dRP:function dRP(d,e,f){this.a=d
this.b=e
this.c=f},
dRQ:function dRQ(d,e,f){this.a=d
this.b=e
this.c=f},
dRR:function dRR(d,e,f){this.a=d
this.b=e
this.c=f},
dRS:function dRS(d,e,f){this.a=d
this.b=e
this.c=f},
dRT:function dRT(d,e,f){this.a=d
this.b=e
this.c=f},
dS1:function dS1(){},
dS2:function dS2(){},
dS3:function dS3(){},
dS4:function dS4(d){this.a=d},
dRW:function dRW(d,e){this.a=d
this.b=e},
hF7(d){return B.d.dM(D.a5G,new C.fJS(d),new C.fJT())},
uS:function uS(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fJS:function fJS(d){this.a=d},
fJT:function fJT(){},
amo:function amo(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aXi:function aXi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ue:function Ue(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bho:function bho(){this.d=$
this.c=this.a=null},
dhD:function dhD(d,e){this.a=d
this.b=e},
dhB:function dhB(d,e){this.a=d
this.b=e},
dhC:function dhC(){},
dhE:function dhE(d,e){this.a=d
this.b=e},
hpa(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.nu(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LQ(d,e){return C.in0(d,e)},
in0(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LQ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$LQ)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.W.aP(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.dd(p,x.f)
o=A.cF(o,new C.fMo(),o.$ti.k("M.E"),x.B)
n=A.a3(o).k("Y<M.E>")
o=A.B(new A.Y(o,new C.fMp(),n),n.k("M.E"))
B.d.b0(o,new C.fMq())
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
Bu(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bu=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Bu)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b9(f,new C.h_g(),x.a)
r=A.B(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aC("String","ngmy_family_book_v1_"+s+"_"+e,B.W.av(r,null)),$async$Bu)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bu,v)},
aTp(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aTp=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LQ(d,e),$async$aTp)
case 2:u=h
t=J.cE(u)
s=t.bk(u,new C.h7V(f))
if(s===-1)t.ca(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bu(d,e,u),$async$aTp)
case 3:return A.h(null,v)}})
return A.i($async$aTp,v)},
bEY(d,e,f){var w=0,v=A.j(x.H),u
var $async$bEY=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LQ(d,e),$async$bEY)
case 2:u=h
J.no(u,new C.fIY(f))
w=3
return A.b(C.Bu(d,e,u),$async$bEY)
case 3:return A.h(null,v)}})
return A.i($async$bEY,v)},
bFb(d,e){return C.in_(d,e)},
in_(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bFb=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bFb)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Pa
w=1
break}p=B.W.aP(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aI(o.h(0,"emblem"))
k=k==null?null:B.h.M(k)
if(k==null)k=0
if(D.Ef.am(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aI(o.h(0,"titleSize"))
if(i==null)i=null
i=B.h.D(i==null?25:i,18,36)
h=B.d.q(D.a7p,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.q(D.a6J,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.q(D.a6F,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d9T,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Iv(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Pa
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Pa
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bFb,v)},
SR(d,e,f){return C.ivw(d,e,f)},
ivw(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$SR=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$SR)
case 7:r=h
w=8
return A.b(r.aC("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.W.av(f.aj(),null)),$async$SR)
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
return A.i($async$SR,v)},
Sj(d,e){return C.in1(d,e)},
in1(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sj=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Sj)
case 7:r=g
q=r.rC("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LQ(d,e),$async$Sj)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lJ(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Sj)
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
return A.i($async$Sj,v)},
ahJ(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sj(d,e),$async$ahJ)
case 3:s=g
r=J.a8(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.az(),$async$ahJ)
case 5:w=4
return A.b(g.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahJ)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahJ,v)},
a4a(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a4a=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sj(d,e),$async$a4a)
case 2:s=h
J.h6(s,f)
w=3
return A.b(A.az(),$async$a4a)
case 3:u=h
w=4
return A.b(u.aC("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a4a)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4a)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4a)
case 6:return A.h(null,v)}})
return A.i($async$a4a,v)},
nu:function nu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fMo:function fMo(){},
fMp:function fMp(){},
fMq:function fMq(){},
h_g:function h_g(){},
h7V:function h7V(d){this.a=d},
fIY:function fIY(d){this.a=d},
Iv:function Iv(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bSs:function bSs(d){this.a=d},
ivQ(d,e,f,g,h,i,j){return A.a6(d,!1).ce(A.ee(new C.h_R(j,i,f,e,h,g),!0,null,x.H))},
Se(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Se=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sj(h,g),$async$Se)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.T(D.aVw)
u=!1
w=1
break}w=4
return A.b(C.hJE(d,f,e),$async$Se)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahJ(h,g),$async$Se)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nu(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.Bu(h,r,p),$async$Se)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.SR(h,r,new C.Iv("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Se)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Se,v)},
h_R:function h_R(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_R:function a_R(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCc:function aCc(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dii:function dii(d){this.a=d},
dih:function dih(d,e){this.a=d
this.b=e},
di6:function di6(d,e){this.a=d
this.b=e},
di3:function di3(d,e){this.a=d
this.b=e},
dhF:function dhF(d){this.a=d},
dhG:function dhG(d,e){this.a=d
this.b=e},
di7:function di7(d){this.a=d},
dhO:function dhO(d){this.a=d},
dhM:function dhM(d){this.a=d},
dhN:function dhN(d){this.a=d},
dhP:function dhP(d){this.a=d},
di4:function di4(d){this.a=d},
di5:function di5(){},
dhK:function dhK(d){this.a=d},
dhL:function dhL(d,e){this.a=d
this.b=e},
dhQ:function dhQ(d){this.a=d},
dhR:function dhR(d,e){this.a=d
this.b=e},
dig:function dig(d){this.a=d},
dif:function dif(d,e){this.a=d
this.b=e},
die:function die(d){this.a=d},
di0:function di0(d){this.a=d},
di_:function di_(d){this.a=d},
di1:function di1(d){this.a=d},
dhH:function dhH(d,e){this.a=d
this.b=e},
di2:function di2(d,e){this.a=d
this.b=e},
dhU:function dhU(d){this.a=d},
dhV:function dhV(d){this.a=d},
dhT:function dhT(){},
dhW:function dhW(d){this.a=d},
dhX:function dhX(d){this.a=d},
dhY:function dhY(d,e){this.a=d
this.b=e},
dhZ:function dhZ(d,e,f){this.a=d
this.b=e
this.c=f},
dhS:function dhS(d,e){this.a=d
this.b=e},
di9:function di9(d){this.a=d},
di8:function di8(){},
dia:function dia(d){this.a=d},
dib:function dib(d){this.a=d},
dic:function dic(d){this.a=d},
did:function did(d,e){this.a=d
this.b=e},
dhI:function dhI(d){this.a=d},
dhJ:function dhJ(d){this.a=d},
a_V:function a_V(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhN:function bhN(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dk4:function dk4(d){this.a=d},
dk5:function dk5(d){this.a=d},
dk3:function dk3(d){this.a=d},
dk6:function dk6(d){this.a=d},
dk2:function dk2(d){this.a=d},
dk7:function dk7(d){this.a=d},
dk1:function dk1(d){this.a=d},
dk8:function dk8(d,e){this.a=d
this.b=e},
dk0:function dk0(d,e){this.a=d
this.b=e},
dk9:function dk9(d,e){this.a=d
this.b=e},
a_T:function a_T(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aga:function aga(d,e,f){this.a=d
this.b=e
this.c=f},
aCf:function aCf(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dix:function dix(d,e){this.a=d
this.b=e},
diw:function diw(d,e){this.a=d
this.b=e},
diB:function diB(d){this.a=d},
diA:function diA(d,e){this.a=d
this.b=e},
diy:function diy(d){this.a=d},
diz:function diz(d){this.a=d},
diC:function diC(d){this.a=d},
diD:function diD(d){this.a=d},
div:function div(d,e){this.a=d
this.b=e},
diu:function diu(d,e){this.a=d
this.b=e},
KT:function KT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_7:function a_7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cQE:function cQE(d){this.a=d},
cQF:function cQF(){},
cQG:function cQG(d){this.a=d},
beZ:function beZ(d,e,f){this.b=d
this.c=e
this.a=f},
beQ:function beQ(d,e){this.b=d
this.a=e},
uT:function uT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_r:function a_r(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beX:function beX(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d9p:function d9p(d,e,f){this.a=d
this.b=e
this.c=f},
d9o:function d9o(d,e){this.a=d
this.b=e},
d9O:function d9O(d){this.a=d},
d9B:function d9B(){},
d9P:function d9P(d){this.a=d},
d9A:function d9A(){},
d9Q:function d9Q(d,e){this.a=d
this.b=e},
d9z:function d9z(d,e){this.a=d
this.b=e},
d9R:function d9R(d,e){this.a=d
this.b=e},
d9y:function d9y(d,e){this.a=d
this.b=e},
d9S:function d9S(d){this.a=d},
d9x:function d9x(){},
d9T:function d9T(d,e){this.a=d
this.b=e},
d9w:function d9w(d,e){this.a=d
this.b=e},
d9U:function d9U(d){this.a=d},
d9J:function d9J(d,e){this.a=d
this.b=e},
d9V:function d9V(d){this.a=d},
d9W:function d9W(d){this.a=d},
d9Y:function d9Y(d){this.a=d},
d9Z:function d9Z(d){this.a=d},
d9I:function d9I(d,e){this.a=d
this.b=e},
da_:function da_(d,e){this.a=d
this.b=e},
aJk:function aJk(d){this.a=d},
bkk:function bkk(d){this.a=d},
bd8:function bd8(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
amp:function amp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a26:function a26(d,e){this.a=d
this.b=e},
amq:function amq(d,e,f,g,h,i){var _=this
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
bSC:function bSC(d){this.a=d},
bSw:function bSw(d){this.a=d},
bSv:function bSv(d,e){this.a=d
this.b=e},
bSF:function bSF(d){this.a=d},
bSx:function bSx(d){this.a=d},
bSy:function bSy(d){this.a=d},
bSB:function bSB(d){this.a=d},
bSA:function bSA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSD:function bSD(d,e){this.a=d
this.b=e},
bSE:function bSE(){},
bSz:function bSz(d){this.a=d},
bSt:function bSt(d,e){this.a=d
this.b=e},
bSu:function bSu(d){this.a=d},
bpW:function bpW(d,e){this.b=d
this.a=e},
aCd:function aCd(){},
iF(d,e){var w
$.S()
w=A.L()
w.b=B.aa
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dQ
return w},
bEw(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bs(j.save())
j.translate(e.a,e.b)
d.oq(0,a0?-f:f,f)
w=A.bX(B.hs,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.L()
t.r=v.gp(0)
d.c1(w,t)
w=a1===D.XK
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.exe,new A.r(-4+v,-2),C.iF(q,5))
d.ah(D.euO,new A.r(4-v,-2),C.iF(q,5))}else{t=A.bX(B.K_,14,40)
p=A.L()
p.r=v.gp(0)
d.c1(t,p)}v=u.r
u=x.v
o=new A.aG(v,B.aj,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.ce(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.ce(15,-40,11,t))
o.E(new A.bx())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aG(v,B.aj,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bx())
v=A.L()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b2u){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iF(E.Gh,3.4))
d.ah(D.exw,new A.r(9,n),C.iF(q,4))
d.ah(D.evd,new A.r(10,n),C.iF(q,4))}else if(a1===D.b2v){d.ah(D.ewj,new A.r(-8,-26-Math.max(0,w)*6),C.iF(q,4))
d.ah(D.etg,new A.r(8,-26-Math.max(0,-w)*6),C.iF(q,4))}else{w=s*3
v=-38-r
d.ah(D.ewo,new A.r(-12-w,v),C.iF(q,4))
d.ah(D.aN2,new A.r(12+w,v),C.iF(q,4))}w=A.L()
w.r=q.gp(0)
d.aF(D.fhJ,w)
m=new A.r(0,-77-r)
w=A.bX(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c1(w,v)
w=h.y
if(w!=null){v=A.bX(m.a5(0,H.vI),15,24)
u=A.L()
u.r=w.gp(0)
d.c1(v,u)
u=m.a5(0,D.eta)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bX(m.a5(0,B.tK),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a5(0,D.exu),m.a5(0,D.ewh),C.iF(v,2.2))
d.ah(m.a5(0,D.evc),m.a5(0,D.et7),C.iF(v,2.2))}if(w===4){w=m.a5(0,D.exy)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a5(0,D.eve)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a5(0,D.ew5)
v=A.L()
v.r=B.ic.gp(0)
d.O(w,0.9,v)
v=m.a5(0,D.evU)
w=A.L()
w.r=B.ic.gp(0)
d.O(v,0.9,w)
if(i){l=m.a5(0,H.a9x)
w=A.bX(l,21,22)
v=A.L()
v.r=D.lG.gp(0)
d.c1(w,v)
v=A.bX(l.a5(0,H.aN_),5,12)
w=A.L()
w.r=D.bhY.gp(0)
d.c1(v,w)
d.ah(l.a5(0,D.exq),l.a5(0,H.aNn),C.iF(B.cV,1.4))
d.ah(D.aN2,new A.r(15,-88-r),C.iF(q,3.6))}j.restore()},
hDL(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bs(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bX(B.dM,18,96)
u=B.w.j(0.28)
$.S()
t=A.L()
t.r=u.gp(0)
d.c1(v,t)
t=A.bX(B.dM,11,70)
v=B.w.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c1(t,u)
d.lB(D.aTc,A.L())
C.ibA(d,g,h,i,j)
s=(k==null?D.a9C:k).a-w>=0?1:-1
w=A.L()
w.a=B.Mk
w.san(A.jz(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.ajy.j(0.5),D.ajy.j(0.12),D.bpy.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aF(D.aTc,w)
r.restore()
r.restore()},
ibA(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.w,0.28)
a0.toString
w=A.ap(d,B.c,0.16)
w.toString
v=a2.b
u=A.ap(v,B.w,0.32)
u.toString
t=Math.sin(a4*1.9+a5)*0.8
s=a2.w
r=s?1.06:1
q=s?0.86:1
s=A.by(D.fhK,B.tP)
p=$.S()
o=A.L()
o.r=u.gp(0)
a1.ar(s,o)
o=A.by(D.fhF,B.hU)
s=A.ap(v,B.w,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.ar(o,n)
n=A.by(D.fhT,B.hU)
o=A.ap(v,B.w,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.ar(n,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fhM,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fgv,s)
s=a1.c
J.bs(s.save())
s.translate(a3.w,0)
J.bs(s.save())
a1.oq(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aG(p.r,B.aj,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.ce(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.ce(m+3,-62,m-2,-58))
l.E(new A.ce(0,-70,k,-58))
l.E(new A.bx())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.bs(s.save())
a1.mz(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dgS[j]
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.aq(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.S()
f=new A.ar(B.S,B.Q,B.V,B.X,B.U)
f.r=i.gp(0)
a1.O(new A.r(g,h),3.6,f)
f=new A.ar(B.S,B.Q,B.V,B.X,B.U)
f.r=u.gp(0)
a1.O(new A.r(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dQ
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.ewU,D.etW,C.iF(a2.c.j(0.9),3))}a1.ah(D.exr,D.ewq,C.iF(B.w.j(0.18),1.6))
a1.ah(D.etf,H.aN4,C.iF(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.L()
i.r=u.gp(0)
a1.aF(D.fgr,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aF(D.fgF,i)
n=new A.aG(k.r,B.aj,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.ce(0,-57,9,-66))
n.E(new A.ce(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fgO,0.1,2.941592653589793,!1,C.iF(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a9H
n=25*q
k=23*q
i=9*q
C.hzL(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.EH:o
C.hzL(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.euG,D.euC,C.iF(D.akv,4))
a1.ah(D.euE,D.euA,C.iF(D.GG.j(0.7),1.4))
u=A.L()
u.r=B.cV.gp(0)
a1.O(D.euD,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bs(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jq(0,a3.f)
a1.bV(0,r)
C.ibv(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hzL(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcJ(),q=r===0?B.hs:s.eV(0,r),p=B.h.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a5(0,q.aM(0,n)).a5(0,v.aM(0,m))
t=e.a5(0,q.aM(0,p))
d.ah(e,u,C.iF(j,l))
o=A.ap(j,B.w,0.2)
o.toString
d.ah(e,u,C.iF(o,l*0.35))
d.ah(u,t,C.iF(k,l*0.78))
o=A.ap(k,B.w,0.22)
o.toString
d.ah(u,t,C.iF(o,l*0.22))
$.S()
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.bX(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c1(o,w)
w=-l
w=t.a5(0,new A.r(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
ibv(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bX(B.vH,40,38)
$.S()
v=A.L()
v.r=c0.gp(0)
c2.c1(w,v)}if(c1===4){$.S()
w=A.L()
w.r=c0.gp(0)
c2.O(D.ewA,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.etw,9.5,w)}w=A.bX(D.exN,10,6)
v=$.S()
u=A.L()
u.r=c8.gp(0)
c2.c1(w,u)
u=A.bX(D.ew2,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c1(u,w)
v=v.r
w=x.v
t=new A.aG(v,B.aj,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.kp(13,-20,17,-9,16,2))
t.E(new A.kp(15,13,8,20,0,20))
t.E(new A.kp(-8,20,-15,13,-16,2))
t.E(new A.kp(-17,-9,-13,-20,0,-20))
t.E(new A.bx())
u=A.L()
u.san(A.wd(D.exg,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iF(c8.j(0.5),0.8)
c2.cQ(D.fhV,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.fgy,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.ewx,D.ewl,s)
c2.ah(D.ets,D.etj,s)
c2.cQ(D.fgN,2.2,1.4,!1,s)
c2.cQ(D.fgw,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fh0,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aG(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.ce(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.ce(0,-12,-13,-6))
p.E(new A.bx())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.ewm,D.etk,C.iF(F.nq,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.ewD,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.etx,3,o)
o=new A.aG(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.ce(-12,22,0,26))
o.E(new A.ce(12,22,13,6))
o.E(new A.ce(8,13,0,12))
o.E(new A.ce(-8,13,-13,6))
o.E(new A.bx())
p=A.L()
p.r=B.hY.gp(0)
c2.af(o,p)
p=new A.aG(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.ce(0,6,7,8))
p.E(new A.ce(0,10.5,-7,8))
o=A.L()
o.r=B.bO.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aG(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.ce(-20,-27,0,-29))
p.E(new A.ce(20,-27,17,-4))
p.E(new A.ce(0,-14,-17,-4))
p.E(new A.bx())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.w,0.3)
o.toString
c2.cQ(D.fh7,3.4,2.5,!1,C.iF(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fgV,3.6,2.2,!1,C.iF(o,1.2))
o=new A.aG(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.ce(27,-34,25,-19))
o.E(new A.ce(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aG(v,B.aj,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.ce(24,-12,27,-26))
n.E(new A.ce(18,-22,11,-22))
o=A.ap(m,B.w,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.O(D.etl,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fh4,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dQ
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=G.aDJ[l]
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=4.5
o.r=c0.gp(0)
o.d=B.bG
o.e=B.dQ
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fh3,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(H.a9x,H.a9w,C.iF(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fgz,3.267256359733385,2.8902652413026098,!0,p)}i=B.h.D(c4.b,0,1)*0.4+0.1
p=A.bX(D.exA,5,8)
o=D.agL.j(i)
n=A.L()
n.r=o.gp(0)
c2.c1(p,n)
n=A.bX(D.ewd,5,8)
p=D.agL.j(i)
o=A.L()
o.r=p.gp(0)
c2.c1(n,o)
h=c4.e*2.4
o=new A.aG(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.ce(h-3.4,6,h-2.6,7.4))
o.E(new A.ce(h,8.8,h+2.6,7.4))
c2.af(o,C.iF(c8.j(0.75),1.1))
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h-1.5,7.2),0.7,o)
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h+1.5,7.2),0.7,o)
g=B.h.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=E.fP[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bX(new A.r(a5,-3),a3,7)
a6=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a6.r=B.c.j(0.96).gp(0)
c2.c1(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bs(d.save())
a6=A.a([],w)
a4=new A.aG(v,B.aj,b9,b9,a6)
a6.push(new A.jt(A.bX(new A.r(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.Eb(a4.glg().a.snapshot())
d.clipPath(a3.a,$.mA(),!0)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=D.blT.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.w.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.ZZ:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a9.b=B.aa
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bG
a9.e=B.dQ
a3=p?0.8:0
c2.cQ(A.bX(new A.r(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dY
else{b1=A.ap(c0,B.w,0.2)
b1.toString}b2=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b2.b=B.aa
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bG
b2.e=B.dQ
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.h.D(c4.a,0,1)
if(o)b4=D.bwi
else{u=A.ap(c8,D.bpA,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.h.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aG(v,B.aj,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.ce(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.ce(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bx())
v=A.L()
v.r=D.boS.gp(0)
c2.af(b8,v)
J.bs(d.save())
c2.mz(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aF(new A.a4(w,11,w+b6*2,13.2),u)
u=A.bX(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bwn.gp(0)
c2.c1(u,w)
d.restore()
c2.af(b8,C.iF(b4,1.1))}else{u=new A.aG(v,B.aj,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.ce(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iF(b4,1.5))
if(b5>0.6){w=new A.aG(v,B.aj,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.ce(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.ce(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fgM,-1.2,2.2,!1,C.iF(c8.j(0.5),0.8))
c2.cQ(D.fgB,2.141592653589793,2.2,!1,C.iF(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.evW,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.evS,1.7,w)}},
ih_(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.S(),f=new A.q5(new A.pH()),e=A.zp(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jz(B.J,new A.r(0,a0*0.46),D.ddB,D.d4M,B.x,h))
e.aF(new A.a4(0,0,0+d,0+a0),a2)
a2=e.c
J.bs(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e_()
w.cU(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bs(a2.save())
a2.translate(200,120)
e.jq(0,-0.5)
d=A.L()
a0=x.O
d.san(A.wd(B.J,230,A.a([D.bkx,B.L],a0),h,B.x,h,h,0))
e.c1(D.fhh,d)
a2.restore()
d=A.L()
d.san(A.wd(D.a9F,58,A.a([D.bnU,B.L],a0),h,B.x,h,h,0))
e.O(D.a9F,58,d)
d=A.L()
d.r=D.bjf.gp(0)
e.O(D.a9F,24,d)
d=A.L()
d.r=D.a_q.gp(0)
e.O(D.euf,5,d)
d=A.L()
d.r=D.a_q.gp(0)
e.O(D.euj,3.4,d)
d=A.L()
d.r=D.a_q.gp(0)
e.O(D.eui,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aG(g.r,B.aj,h,h,u)
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
g=new A.bx()
u.push(g)
u=r.f
if(u!=null)g.ak(u)
r.ab()
g=[D.bhM,D.bjO,D.bpU][s]
u=$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.czi[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.b=B.aa
u.c=2.4
u.r=D.a_N.gp(0)
u.d=B.bG
u.e=B.dQ
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bX(new A.r(g,k-27),11,46)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.a_N.gp(0)
e.c1(g,u)
d=A.bX(new A.r(o-12,d),8,24)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.a_N.gp(0)
e.c1(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=D.bji.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jz(D.esO,D.esR,D.d6O,B.xg,B.x,h))
e.aF(new A.a4(-200,412,650,1300),g)
j=new A.e_()
j.cU(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bX(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h4()?B.c:B.w
d=new A.ar(B.S,B.Q,B.V,B.X,B.U)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c1(u,d)}J.bs(a2.save())
a2.translate(225,590)
e.oq(0,1,0.34)
g=A.L()
g.san(A.wd(B.J,250,A.a([D.bqS,D.bk8,D.bsR],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.ajd,D.biN,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.S()
a0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a0.b=B.aa
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dQ
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.i9L(e)
for(l=0;l<3;++l)C.icX(e,D.aBw[l])
C.icM(e,D.eu9)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.S()
a0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a0.b=B.aa
a0.c=2.4
a0.r=D.a_I.gp(0)
a0.d=B.bG
a0.e=B.dQ
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.eth,D.etB,C.iF(D.bjw,1.6))
a2.restore()
return f.o9()},
i9L(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S().r,g=x.v,f=new A.aG(h,B.aj,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.kp(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.kp(416,382,432,422,428,462))
f.E(new A.bx())
w=A.L()
w.san(A.jz(new A.r(354,0),new A.r(430,0),D.dBV,B.mq,B.x,i))
d.af(f,w)
v=new A.e_()
v.cU(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.b=B.aa
p.c=1.1
p.r=q.gp(0)
p.d=B.bG
p.e=B.dQ
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dih[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aG(h,B.aj,i,i,l)
l.push(new A.aZ(r,336))
k.ab()
r=new A.ce(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.ak(p)
k.ab()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.b=B.aa
r.c=8
r.r=D.ahx.gp(0)
r.d=B.bG
r.e=B.dQ
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=A.ap(D.bjo,D.bpS,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.b=B.aa
r.c=1.2
r.r=D.a_I.gp(0)
r.d=B.bG
r.e=B.dQ
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bX(new A.r(w,q+28),13,7)
w=new A.ar(B.S,B.Q,B.V,B.X,B.U)
w.r=D.bre.gp(0)
d.c1(q,w)}},
icX(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bX(new A.r(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.S(),b3=A.L()
b3.r=b1.gp(0)
b4.c1(b0,b3)
b2=b2.r
b3=x.v
w=new A.aG(b2,B.aj,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.ce(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bx())
u=A.L()
u.san(A.jz(new A.r(b0,0),new A.r(v,0),D.din,B.mq,B.x,a4))
b4.af(w,u)
t=new A.e_()
t.cU(B.o.U(a5*7))
v=b4.c
J.bs(v.save())
b4.mz(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.w.j(0.14)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.b=B.aa
n.c=1
n.r=o.gp(0)
n.d=B.bG
n.e=B.dQ
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.aj9.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aF(new A.a4(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.h.bh(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aG(b2,B.aj,a4,a4,j)
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
h=new A.bx()
j.push(h)
j=i.f
if(j!=null)h.ak(j)
i.ab()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=D.lG.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aG(b2,B.aj,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.h.bh(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.af(f,C.iF(D.aj9.j(0.7),1.6))
v.restore()
b0=$.S().r
b2=new A.aG(b0,B.aj,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.aZ(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.ce(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bx())
m=A.L()
m.r=D.ajl.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.ajl.gp(0)
b4.O(new A.r(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aG(b0,B.aj,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.ce(a5-a9,n,a5,u))
e.E(new A.ce(a5+a9,n,p,j))
e.E(new A.ce(a5,b1+a7*0.34,o,j))
e.E(new A.bx())
b1=A.L()
n=a7*1.4
b1.san(A.jz(new A.r(a5-n,0),new A.r(a5+n,0),D.dlY,B.mq,B.x,a4))
b4.af(e,b1)
J.bs(v.save())
b4.mz(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h4()?B.w:D.biW).j(0.16)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.b=B.aa
i.c=0.9
i.r=n.gp(0)
i.d=B.bG
i.e=B.dQ
b4.ah(new A.r(a5+(p-0.5)*3,u),new A.r(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aG(b0,B.aj,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ab()
n=new A.ce(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.ak(b1)
p.ab()
b1=B.w.j(0.22)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.b=B.aa
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
v=new A.ar(B.S,B.Q,B.V,B.X,B.U)
v.b=B.aa
v.c=1.1
v.r=D.bqk.gp(0)
v.d=B.bG
v.e=B.dQ
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aG(b0,B.aj,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bx())
b0=A.L()
b0.r=D.bmm.gp(0)
b4.af(a9,b0)},
icM(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+G.aDG[s]
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.b=B.aa
q.c=3
q.r=D.a_I.gp(0)
q.d=B.bG
q.e=B.dQ
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bX(e.a5(0,H.aMZ),24,36)
t=$.S()
r=A.L()
r.r=D.bvu.gp(0)
d.c1(u,r)
t=new A.aG(t.r,B.aj,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.ce(w,v-24,r,u))
t.E(new A.bx())
u=A.L()
u.r=D.aie.gp(0)
d.af(t,u)},
ic8(d){switch(B.o.F(d,8)){case 0:return D.b22
case 1:return D.b20
case 2:return D.b2_
case 3:return D.b1Z
case 4:return D.b21
case 5:return D.b23
case 6:return D.hI3
default:return D.hI2}},
SP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bpX()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a9H:j
w.as=k==null?D.EH:k
C.hDL(d,e,p,C.ic8(m),w,s,m,l)},
hFd(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bUg:function bUg(){var _=this
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
td:function td(d,e,f,g,h,i,j,k,l,m){var _=this
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
bpX:function bpX(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amI:function amI(){this.b=this.a=null},
aXn:function aXn(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bU8:function bU8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU9:function bU9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUa:function bUa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUb:function bUb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUc:function bUc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUd:function bUd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUe:function bUe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUf:function bUf(){},
bU7:function bU7(d){this.a=d},
agj:function agj(d,e){this.a=d
this.b=e},
aeg:function aeg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Nb(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bSS(s)
s.bCr(d)
return s},
H5(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d0(new A.Y(g,new C.fwX(f),v),v.k("M.E"))
w=A.B(v,A.a3(v).k("ci.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cT(w,0,A.dA(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.lt(e,v,B.d.cm(v,f),h,i,"tree",j)},
ixs(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h7M(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jA(c4,c0)
t=A.B(c4,A.a3(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jA(c4,c0)
r=A.B(c4,A.a3(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jA(c4,c0)
q=A.B(c4,A.a3(c4).k("ci.E"))
for(c4=w.length,v=A.U(t).k("Y<1>"),s=v.k("M.E"),p=A.U(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wN)g="father"
else g=h===D.oB?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.Y(t,new C.h7O(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H5(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.Y(w,new C.h7P(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lt("True or false: "+h+" is the "+g+" of "+l+".",D.aCy,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lt("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aCy,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Gi(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.B(new A.Y(t,new C.h7Q(l,a0,c5),v),s)
e=a1.c
if(e===D.wN)e="son"
else e=e===D.oB?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H5(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ew([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mt(a5,a5.r,f.k("mt<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.H5(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iC<1>"),a3=new A.iC(a0,1,b3,a2),a3.nc(a0,1,b3,e.c),a3=new A.bR(a3,a3.gJ(0),a2.k("bR<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H5(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.arW(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.Y(t,new C.h7R(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.H5(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.B(new A.Y(t,new C.h7S(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wN
if(e)a2=b7
else a2=f===D.oB?b8:b9
if(e)f=b7
else f=f===D.oB?b8:b9
c2.$2("grand",C.H5(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aND(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.B(new A.Y(t,new C.h7T(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H5(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cS8)
h=l+" was born in "+k
c2.$2("place",C.H5(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.d7T)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H5(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H5(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.j_(b1,b3,b3)
c2.$2("year",C.H5(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bF7(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Nb(d),l=new A.e_()
l.cU(f)
w=C.ixs(m,l,g)
for(v=new A.dn(w,w.r,w.e);v.C();)J.hnf(v.d,l)
v=A.a3(w).k("cr<1>")
u=A.B(new A.cr(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aU(u,new C.fKu(n,w))))break
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
if(v<e){v=A.B(D.aAy,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hDS(o,l))}}else if(!g&&v>3){o=C.hDS(D.aAy[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hDS(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.e0(w,e)
return new C.lt(d.a,w,B.d.cm(w,v),d.d,d.e,d.f,d.r)},
hJd(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Nb(a2),a1=new A.e_()
a1.cU(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Gi(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Gi(n)
l=A.U(m)
k=new A.iC(m,0,5,l.k("iC<1>"))
k.nc(m,0,5,l.c)
j=k.dq(0)
if(new A.N(j,new C.fZa(),A.U(j).k("N<1,H>")).fL(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aTa(a0,j[i]))
w.push(new C.auP("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c4(e.c_(0,a0.an2(q),new C.fZb()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cr<1>")
d=A.B(new A.cr(e,t),t.k("M.E"))
B.d.ff(d)
v=A.a([],v)
for(u=A.cT(d,0,A.dA(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bR(u,u.gJ(0),t.k("bR<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cE(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aTa(a0,v[r]))
w.push(new C.auP("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aRB(d){return B.d.aow(D.aD3,new C.fGi(d))},
int(d){return A.nx(new A.Y(D.aD3,new C.fNk(d),x.av))},
bTG(d){return C.hSV(d)},
hSV(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bTG=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bTG)
case 7:r=f
q=B.a.i(d)
q=A.eq(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bTG,v)},
BR(d,e){return C.hSS(d,e)},
hSS(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BR)
case 7:r=g
p=B.a.i(d)
o=A.eq(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aC("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BR)
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
return A.i($async$BR,v)},
bTF(d,e,f){return C.hST(d,e,f)},
hST(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bTF=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bTF)
case 7:r=h
q=B.a.i(d)
q=A.eq(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bTF,v)},
BS(d,e,f,g){return C.hSU(d,e,f,g)},
hSU(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BS=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BS)
case 7:r=i
p=B.a.i(d)
o=A.eq(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aC("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BS)
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
return A.i($async$BS,v)},
bHo(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h9P(d,e,f,g){return new C.alg(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hQZ(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cu)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cT(w,0,A.dA(4,"count",x.S),u).dq(0)
B.d.u(w,A.c0(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aI(d.h(0,"c"))
v=v==null?null:B.h.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aI(d.h(0,"s"))
u=u==null?null:B.h.M(u)
return C.h9P(w,v,B.o.D(u==null?20:u,5,60),t)},
hoo(d){var w,v,u,t,s,r,q=J.a8(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aT(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cu)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gP(q)
if(u.b(r))v.push(C.hQZ(A.a1(r,t,s)))}return new C.MW(p,w,v)},
hio(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hoo(w.gP(w)))
return v},
aTa(d,e){var w=e.c===D.oB
if(d.an2(e)===0&&d.Gi(e).length!==0)return w?0:1
if(d.Gi(e).length!==0||d.arW(e)!=null)return w?2:3
return w?4:5},
hKi(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nb(a4),a3=new A.e_()
a3.cU(a5)
w=A.a([],x.dT)
v=a2.b
u=A.B(v,x.P)
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
j=i.h(0,k)}h=a2.Gi(m)
g=a2.arW(m)
f=a2.aND(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.wN)k="father"
else k=k===D.oB?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wN)k="father"
else k=k===D.oB?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.b0(l,new C.h8b())
d=B.a.i(m.b)
a0=A.B(new A.Y(s,new C.h8c(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iC(a0,0,3,i.k("iC<1>"))
a1.nc(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e0(k,a3)
a1=C.aTa(a2,m)
i=new A.iC(l,0,4,p)
i.nc(l,0,4,r)
w.push(new C.bbm(d,a1,i.dq(0),k))
if(w.length>=5)break}return w},
hBi(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.Y(d,"My ")?1:0},
hJo(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nb(a4),a3=new A.e_()
a3.cU(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Gi(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Gi(l)
j=A.U(k)
i=new A.iC(k,0,4,j.k("iC<1>"))
i.nc(k,0,4,j.c)
h=i.dq(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aU(h,new C.fZN(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iC(i,0,k,m)
j.nc(i,0,k,n)
f=j.dq(0)
j=B.a.i(l.b)
k=C.aTa(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aTa(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aTa(a2,f[g]))
w.push(new C.aak(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lt:function lt(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bSS:function bSS(d){this.b=d
this.c=$},
bST:function bST(){},
bSU:function bSU(d){this.a=d},
fwX:function fwX(d){this.a=d},
h7M:function h7M(d){this.a=d},
h7N:function h7N(){},
h7O:function h7O(d){this.a=d},
h7P:function h7P(d,e){this.a=d
this.b=e},
h7Q:function h7Q(d,e,f){this.a=d
this.b=e
this.c=f},
h7L:function h7L(d,e){this.a=d
this.b=e},
h7R:function h7R(d){this.a=d},
h7S:function h7S(d){this.a=d},
h7T:function h7T(d,e,f){this.a=d
this.b=e
this.c=f},
h7K:function h7K(d,e){this.a=d
this.b=e},
fKu:function fKu(d,e){this.a=d
this.b=e},
auP:function auP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fZa:function fZa(){},
fZb:function fZb(){},
zz:function zz(d,e,f){this.a=d
this.b=e
this.c=f},
fGi:function fGi(d){this.a=d},
fNk:function fNk(d){this.a=d},
alg:function alg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bNG:function bNG(){},
MW:function MW(d,e,f){this.a=d
this.b=e
this.c=f},
bbm:function bbm(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h8b:function h8b(){},
h8c:function h8c(d){this.a=d},
aak:function aak(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fZN:function fZN(d){this.a=d},
biD:function biD(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
agh:function agh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
akz:function akz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akA:function akA(d,e,f,g,h){var _=this
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
bLP:function bLP(d){this.a=d},
bLK:function bLK(){},
bLQ:function bLQ(){},
bLI:function bLI(){},
bLJ:function bLJ(){},
bLO:function bLO(d){this.a=d},
bLL:function bLL(d,e){this.a=d
this.b=e},
bLN:function bLN(d,e){this.a=d
this.b=e},
bLM:function bLM(d,e){this.a=d
this.b=e},
bLH:function bLH(d){this.a=d},
bdO:function bdO(d,e){this.b=d
this.a=e},
QV:function QV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCb:function aCb(d,e,f){this.b=d
this.c=e
this.a=f},
aAE:function aAE(d,e,f){this.a=d
this.b=e
this.c=f},
avs:function avs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
avt:function avt(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cO$=e
_.b9$=f
_.c=_.a=null},
crA:function crA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crB:function crB(d){this.a=d},
crz:function crz(d){this.a=d},
crC:function crC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
crD:function crD(){},
crE:function crE(d,e){this.a=d
this.b=e},
crF:function crF(){},
crG:function crG(d){this.a=d},
crw:function crw(d){this.a=d},
crx:function crx(d,e){this.a=d
this.b=e},
cry:function cry(d,e,f){this.a=d
this.b=e
this.c=f},
crr:function crr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crt:function crt(d,e){this.a=d
this.b=e},
cru:function cru(d,e){this.a=d
this.b=e},
crs:function crs(d,e){this.a=d
this.b=e},
crq:function crq(){},
crv:function crv(){},
bdh:function bdh(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cRI:function cRI(){},
azp:function azp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azq:function azq(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cGz:function cGz(d){this.a=d},
cGy:function cGy(d){this.a=d},
cGH:function cGH(d,e){this.a=d
this.b=e},
cGI:function cGI(d,e){this.a=d
this.b=e},
cGJ:function cGJ(d){this.a=d},
cGG:function cGG(d){this.a=d},
cGK:function cGK(d){this.a=d},
cGL:function cGL(d,e){this.a=d
this.b=e},
cGM:function cGM(){},
cGN:function cGN(d){this.a=d},
cGB:function cGB(d){this.a=d},
cGC:function cGC(d,e){this.a=d
this.b=e},
cGA:function cGA(d,e){this.a=d
this.b=e},
cGD:function cGD(){},
cGE:function cGE(){},
cGF:function cGF(d,e){this.a=d
this.b=e},
aAo:function aAo(){},
aHH:function aHH(){},
hg0(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bsh((w-450*u)/2,(v-900*u)/2,u)},
ag5:function ag5(){},
f9p:function f9p(d){this.a=d},
aLx:function aLx(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fjz:function fjz(d){this.a=d},
amy:function amy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amz:function amz(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qf$=f
_.Ma$=g
_.anz$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bTE:function bTE(d){this.a=d},
bTD:function bTD(){},
bTB:function bTB(d){this.a=d},
bTz:function bTz(){},
bTA:function bTA(d){this.a=d},
bTw:function bTw(d,e){this.a=d
this.b=e},
bTx:function bTx(){},
bTy:function bTy(d){this.a=d},
bTC:function bTC(d,e){this.a=d
this.b=e},
bTv:function bTv(d){this.a=d},
bu0:function bu0(d,e){this.b=d
this.a=e},
f9q:function f9q(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f9r:function f9r(d,e,f){this.a=d
this.b=e
this.c=f},
f9s:function f9s(d,e,f){this.a=d
this.b=e
this.c=f},
f9t:function f9t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9u:function f9u(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f9v:function f9v(){},
amw:function amw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amx:function amx(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qf$=f
_.Ma$=g
_.anz$=h
_.bw$=i
_.a9$=j
_.c=_.a=null},
bTh:function bTh(){},
bTs:function bTs(d,e){this.a=d
this.b=e},
bTt:function bTt(d){this.a=d},
bTu:function bTu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTo:function bTo(){},
bTn:function bTn(d,e){this.a=d
this.b=e},
bTp:function bTp(d,e){this.a=d
this.b=e},
bTq:function bTq(){},
bTr:function bTr(d){this.a=d},
bTj:function bTj(d){this.a=d},
bTk:function bTk(d){this.a=d},
bTl:function bTl(d){this.a=d},
bTi:function bTi(d,e){this.a=d
this.b=e},
bTm:function bTm(d){this.a=d},
bks:function bks(d,e){this.b=d
this.a=e},
dte:function dte(){},
a2p:function a2p(d,e){this.a=d
this.b=e},
ams:function ams(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amt:function amt(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qf$=e
_.Ma$=f
_.anz$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
bT3:function bT3(d){this.a=d},
bT2:function bT2(){},
bT1:function bT1(){},
bSW:function bSW(){},
bSX:function bSX(){},
bT0:function bT0(d,e,f){this.a=d
this.b=e
this.c=f},
bT_:function bT_(d){this.a=d},
bSY:function bSY(d,e){this.a=d
this.b=e},
bSZ:function bSZ(d){this.a=d},
bjT:function bjT(d,e){this.b=d
this.a=e},
aCe:function aCe(){},
bhq:function bhq(){},
aCg:function aCg(){},
bhr:function bhr(){},
aCh:function aCh(){},
bhs:function bhs(){},
uw(d,e,f,g,h){var w,v,u=null,t=A.l(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.i3,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.X(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.m(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.ay(u,A.o(u,A.A(v,B.l,u,B.e,B.N,0,u,u),B.f,u,u,new A.n(f,u,u,t,s,u,B.n),u,u,u,u,B.OO,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hpb(d,e,f,g,h,i,j){return new C.amu(i,h,d,j,e,f,g,null)},
a6R:function a6R(d,e){this.c=d
this.a=e},
bk_:function bk_(d){this.a=d},
tD:function tD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bSV:function bSV(d){this.a=d},
Ix:function Ix(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
WA:function WA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmN:function bmN(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e3A:function e3A(d,e){this.a=d
this.b=e},
e3B:function e3B(d){this.a=d},
e3C:function e3C(d,e){this.a=d
this.b=e},
e3y:function e3y(d){this.a=d},
e3z:function e3z(d){this.a=d},
e3x:function e3x(d){this.a=d},
e3v:function e3v(d){this.a=d},
e3w:function e3w(d){this.a=d},
e3u:function e3u(d,e){this.a=d
this.b=e},
e3D:function e3D(d){this.a=d},
e3E:function e3E(d,e){this.a=d
this.b=e},
e3F:function e3F(d,e){this.a=d
this.b=e},
e3G:function e3G(d,e){this.a=d
this.b=e},
e3J:function e3J(d,e){this.a=d
this.b=e},
e3K:function e3K(d,e){this.a=d
this.b=e},
e3L:function e3L(d,e){this.a=d
this.b=e},
e3M:function e3M(d,e){this.a=d
this.b=e},
e3N:function e3N(d,e){this.a=d
this.b=e},
e3O:function e3O(d,e,f){this.a=d
this.b=e
this.c=f},
e3P:function e3P(d,e){this.a=d
this.b=e},
e3Q:function e3Q(d,e){this.a=d
this.b=e},
e3H:function e3H(d){this.a=d},
e3I:function e3I(d){this.a=d},
a0i:function a0i(d,e){this.a=d
this.b=e},
amu:function amu(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amv:function amv(d){var _=this
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
bTf:function bTf(d){this.a=d},
bTg:function bTg(d){this.a=d},
bTe:function bTe(d){this.a=d},
bT5:function bT5(d){this.a=d},
bT6:function bT6(d){this.a=d},
bT4:function bT4(d){this.a=d},
bTb:function bTb(d,e,f){this.a=d
this.b=e
this.c=f},
bTc:function bTc(d){this.a=d},
bT8:function bT8(d,e){this.a=d
this.b=e},
bT9:function bT9(d,e,f){this.a=d
this.b=e
this.c=f},
bTd:function bTd(){},
bTa:function bTa(d,e){this.a=d
this.b=e},
bT7:function bT7(d){this.a=d},
Uf:function Uf(d,e){this.c=d
this.a=e},
amr:function amr(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bSG:function bSG(d){this.a=d},
bSH:function bSH(d){this.a=d},
bSR:function bSR(){},
bSQ:function bSQ(d,e,f){this.a=d
this.b=e
this.c=f},
bSL:function bSL(d,e){this.a=d
this.b=e},
bSK:function bSK(d,e){this.a=d
this.b=e},
bSM:function bSM(d){this.a=d},
bSN:function bSN(d,e){this.a=d
this.b=e},
bSO:function bSO(d,e){this.a=d
this.b=e},
bSJ:function bSJ(d,e){this.a=d
this.b=e},
bSP:function bSP(d,e,f){this.a=d
this.b=e
this.c=f},
bSI:function bSI(d,e){this.a=d
this.b=e},
ilZ(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aji(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.V(Date.now(),0,!1))
s=new C.fJW(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,q>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zg)m.push(l===D.wN?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cF(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cF(k)
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
m.push("child of "+l+k)}a0=A.B(new A.cM(new A.Y(a4,new C.fJU(u,f),p),new C.fJV(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aN(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aN(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aA(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
im_(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aji(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fK0(v,e)
q=new C.fJZ(v)
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
n=A.B(d,A.a3(d).k("ci.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eL(l,new C.fK_(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aN(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i7a(d,e,f,g){var w,v,u=C.im0(d,e)
if(u<=0||f.length<=u)return new A.afK(!1,D.E_,f)
if(g.q(0,e.a))return new A.afK(!1,D.E_,f)
w=A.U(f).c
v=A.cT(f,0,A.dA(u,"count",x.S),w).dq(0)
return new A.afK(!0,A.cT(f,u,null,w).dq(0),v)},
i7b(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aji(d3),d2=d1.length
if(d2===0)return D.hFf
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c_(0,t.a,new C.diK(t))}s=new C.dj0(v)
d2=x.dy
r=A.T(w,d2)
q=new C.diT(r)
for(p=new A.dn(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.diS(r)
l=A.T(w,x.do)
for(p=new A.dn(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c4(l.c_(0,k,new C.diL()),o)}h=new C.diR(s)
g=new C.diQ(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.B(new A.Y(new A.b8(v,p),new C.diM(h),o),o.k("M.E"))
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
a9=new C.diZ(new C.diV(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dn(v,v.r,v.e),j=a2.gamy(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ew([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nx(J.dH(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.dO)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.diJ(a2,new C.dj_(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dn(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
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
b4.n(0,b8,new C.GF(o,new A.r(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.L_(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cr<1>")
d2=A.B(new A.cr(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.diN(c6,b4))
for(d2=new A.cb(a4,a4.$ti.k("cb<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eL(j,new C.diO(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b0(o,new C.diP())
c6.push(new C.aLs(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bhw(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hEz(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
hys(d,e,f,g,h,i,j,k,l,m,n){return new C.a0v(k,f,j,e,l,n,m,d,g,h,i,null)},
aEf(d,e,f,g,h,i,j){return new C.bli(i,d,e,f,j,h,g,null)},
arC:function arC(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFO:function aFO(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e5f:function e5f(d){this.a=d},
e5e:function e5e(d){this.a=d},
e5h:function e5h(d,e){this.a=d
this.b=e},
e5i:function e5i(d,e){this.a=d
this.b=e},
e5j:function e5j(d){this.a=d},
e5d:function e5d(d,e){this.a=d
this.b=e},
e5g:function e5g(d){this.a=d},
e5l:function e5l(d){this.a=d},
e5k:function e5k(d,e){this.a=d
this.b=e},
arw:function arw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFL:function aFL(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e4G:function e4G(d){this.a=d},
e4E:function e4E(d){this.a=d},
e4F:function e4F(d){this.a=d},
e4H:function e4H(d,e){this.a=d
this.b=e},
e4B:function e4B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e42:function e42(d){this.a=d},
e43:function e43(d,e){this.a=d
this.b=e},
e4k:function e4k(d){this.a=d},
e4i:function e4i(d){this.a=d},
e4j:function e4j(d,e){this.a=d
this.b=e},
e4l:function e4l(d){this.a=d},
e4m:function e4m(d,e){this.a=d
this.b=e},
e4A:function e4A(d,e){this.a=d
this.b=e},
e4h:function e4h(d){this.a=d},
e4g:function e4g(d){this.a=d},
e4f:function e4f(d,e){this.a=d
this.b=e},
e4x:function e4x(){},
e4y:function e4y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4w:function e4w(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4q:function e4q(d){this.a=d},
e4r:function e4r(d,e,f){this.a=d
this.b=e
this.c=f},
e4p:function e4p(d,e){this.a=d
this.b=e},
e4s:function e4s(d,e){this.a=d
this.b=e},
e4n:function e4n(d,e){this.a=d
this.b=e},
e4o:function e4o(){},
e4t:function e4t(d,e){this.a=d
this.b=e},
e4u:function e4u(d){this.a=d},
e4v:function e4v(d,e){this.a=d
this.b=e},
e4z:function e4z(d,e){this.a=d
this.b=e},
e3R:function e3R(d,e){this.a=d
this.b=e},
e3S:function e3S(d,e){this.a=d
this.b=e},
e4J:function e4J(d,e,f){this.a=d
this.b=e
this.c=f},
e4D:function e4D(d,e,f){this.a=d
this.b=e
this.c=f},
e4C:function e4C(d){this.a=d},
e3T:function e3T(d){this.a=d},
e3U:function e3U(d){this.a=d},
e3V:function e3V(){},
e3W:function e3W(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4_:function e4_(d,e){this.a=d
this.b=e},
e3Z:function e3Z(d,e){this.a=d
this.b=e},
e3Y:function e3Y(d){this.a=d},
e40:function e40(d,e){this.a=d
this.b=e},
e3X:function e3X(d){this.a=d},
e4I:function e4I(d){this.a=d},
e4c:function e4c(){},
e4d:function e4d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4b:function e4b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e47:function e47(d,e,f){this.a=d
this.b=e
this.c=f},
e46:function e46(d,e,f){this.a=d
this.b=e
this.c=f},
e44:function e44(d,e){this.a=d
this.b=e},
e48:function e48(d){this.a=d},
e49:function e49(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e45:function e45(d,e){this.a=d
this.b=e},
e4a:function e4a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4e:function e4e(d,e){this.a=d
this.b=e},
e4Q:function e4Q(){},
e4R:function e4R(d,e){this.a=d
this.b=e},
e4S:function e4S(d){this.a=d},
e4T:function e4T(d,e){this.a=d
this.b=e},
e4M:function e4M(d){this.a=d},
e4K:function e4K(d,e){this.a=d
this.b=e},
e4N:function e4N(d,e){this.a=d
this.b=e},
e4O:function e4O(d,e){this.a=d
this.b=e},
e4P:function e4P(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4U:function e4U(d){this.a=d},
e4L:function e4L(d){this.a=d},
e41:function e41(d){this.a=d},
bhu:function bhu(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
diH:function diH(d){this.a=d},
diG:function diG(d,e){this.a=d
this.b=e},
diI:function diI(d){this.a=d},
diF:function diF(d,e){this.a=d
this.b=e},
fJW:function fJW(d,e){this.a=d
this.b=e},
fJX:function fJX(d){this.a=d},
fJY:function fJY(){},
fJU:function fJU(d,e){this.a=d
this.b=e},
fJV:function fJV(){},
fK0:function fK0(d,e){this.a=d
this.b=e},
fK1:function fK1(d){this.a=d},
fK2:function fK2(){},
fJZ:function fJZ(d){this.a=d},
fK_:function fK_(d,e){this.a=d
this.b=e},
L_:function L_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GF:function GF(d,e){this.a=d
this.b=e},
bhw:function bhw(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
diK:function diK(d){this.a=d},
dj0:function dj0(d){this.a=d},
diT:function diT(d){this.a=d},
diU:function diU(){},
diS:function diS(d){this.a=d},
diL:function diL(){},
diR:function diR(d){this.a=d},
diQ:function diQ(d,e){this.a=d
this.b=e},
diM:function diM(d){this.a=d},
diV:function diV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
diW:function diW(d){this.a=d},
diX:function diX(d){this.a=d},
diY:function diY(){},
diZ:function diZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dj_:function dj_(){},
diJ:function diJ(d,e,f,g,h,i,j,k,l,m){var _=this
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
diN:function diN(d,e){this.a=d
this.b=e},
diO:function diO(d){this.a=d},
diP:function diP(){},
aLs:function aLs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bhx:function bhx(d,e){this.b=d
this.a=e},
dj1:function dj1(){},
dj2:function dj2(d){this.a=d},
dj3:function dj3(d){this.a=d},
dj4:function dj4(){},
blj:function blj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgy:function bgy(d,e){this.b=d
this.a=e},
bzo:function bzo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fpa:function fpa(d){this.a=d},
boF:function boF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f_b:function f_b(d){this.a=d},
f_a:function f_a(d,e){this.a=d
this.b=e},
a0v:function a0v(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aEd:function aEd(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dyY:function dyY(d,e){this.a=d
this.b=e},
dyX:function dyX(d){this.a=d},
dyV:function dyV(d){this.a=d},
dyW:function dyW(d){this.a=d},
dz6:function dz6(d){this.a=d},
dz7:function dz7(d){this.a=d},
dz5:function dz5(d,e){this.a=d
this.b=e},
dz8:function dz8(){},
dzb:function dzb(d){this.a=d},
dz4:function dz4(d,e){this.a=d
this.b=e},
dza:function dza(){},
dzc:function dzc(d){this.a=d},
dz3:function dz3(d,e){this.a=d
this.b=e},
dzd:function dzd(d){this.a=d},
dz2:function dz2(d){this.a=d},
dze:function dze(d){this.a=d},
dz1:function dz1(d){this.a=d},
dzf:function dzf(d){this.a=d},
dz0:function dz0(d){this.a=d},
dzg:function dzg(d){this.a=d},
dz_:function dz_(d){this.a=d},
dzh:function dzh(d){this.a=d},
dyZ:function dyZ(d,e){this.a=d
this.b=e},
dz9:function dz9(d){this.a=d},
aeD:function aeD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bli:function bli(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aeC:function aeC(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
blh:function blh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dzi:function dzi(d){this.a=d},
dzj:function dzj(d,e){this.a=d
this.b=e},
aEe:function aEe(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKu:function aKu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeE:function aeE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dzs:function dzs(d){this.a=d},
GB:function GB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
htf(d){var w=d.V,v=x.N
return w.jp(w,new C.cgb(),v,v)},
hZx(d){var w=d.bI
if(w>=0)return w
return 5},
hth(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.htf(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
htg(d,e){var w=C.hth(d,e)
if(w!=null&&w.cb(new A.V(Date.now(),0,!1)))return!0
return!1},
hZy(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.htf(d),w,w)
u=C.hth(d,e)
t=u!=null&&u.cb(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dx(30,0,0,0,0,0).a).aa().ag())
d.V=v},
b22(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b22=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lz(t,B.JU),$async$b22)
case 3:if(l){u=!0
w=1
break}u=A.lf(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.JU,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b22,v)},
cgb:function cgb(){},
hZv(){var w,v=$.ow(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hg(u)},
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
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
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
a8z(d){return C.hZw(d)},
hZw(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8z=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$a8z)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hQ("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cQ,null),$async$a8z)
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
return A.i($async$a8z,v)},
cga(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cga=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Ju(),$async$cga)
case 3:t=m.i9(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gP(t)
q=r.b
if(s.b(q)){p=J.a8(q)
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
return A.i($async$cga,v)},
Ot(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Ot=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cga(d),$async$Ot)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Ju(),$async$Ot)
case 6:s=f
r=J.a8(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dK(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a8z(s),$async$Ot)
case 9:case 8:u=t
w=1
break
case 5:n=C.hZv()
w=10
return A.b(C.Ju(),$async$Ot)
case 10:s=f
J.aK(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8z(s),$async$Ot)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ot,v)},
b21(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b21=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Ju(),$async$b21)
case 3:t=f
for(s=J.dq(t),r=s.gdQ(t),r=r.dq(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8z(t),$async$b21)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b21,v)},
a8A(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8A=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.arB(d,e),$async$a8A)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Ot(d),$async$a8A)
case 7:w=4
break
case 5:w=8
return A.b(C.b21(d),$async$a8A)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8A,v)},
arv(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$arv=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.arB(f,e),$async$arv)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c9(),$async$arv)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Ju(),$async$arv)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a8(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arv,v)},
b20(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b20=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c9(),$async$b20)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Ju(),$async$b20)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a8(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b20,v)},
hZz(){var w,v=$.ow(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hg(u)},
ary(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$ary=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$ary)
case 3:if(!g){u=null
w=1
break}t=C.hZz()
w=4
return A.b(A.WB(),$async$ary)
case 4:s=g
r=B.dV.aK(B.W.av(d.f2(),null))
r=B.cK.gco().aK(r)
q=e?999:2
J.aK(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8B(s),$async$ary)
case 5:p=e?999:2
u=new A.a1F("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ary,v)},
arx(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$arx=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.WB(),$async$arx)
case 3:p=a0
o=J.a8(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a8(n)
l=A.aI(m.h(n,"usesRemaining"))
k=l==null?null:B.h.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b20(J.k(l==null?"":l),j),$async$arx)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cb.cD(0,B.cH.aK(t))
s=C.hti(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dK(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a8B(p),$async$arx)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arx,v)},
hti(d){var w,v,u,t,s=null
try{w=B.W.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hZB(A.a1(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
hbZ(d){var w=0,v=A.j(x.m),u,t,s
var $async$hbZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.Y(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.arx(t[1])
w=1
break}u=null
w=1
break}u=C.hti(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hbZ,v)},
hZB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.dd(v,x.f)
u=A.cF(u,new C.cgd(),u.$ti.k("M.E"),x.k)
t=A.a3(u).k("Y<M.E>")
s=A.B(new A.Y(u,new C.cge(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bj(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.i9(p),t=t.gae(t),o=x.B;t.C();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.dd(l,u)
n=A.cF(n,new C.cgf(),n.$ti.k("M.E"),o)
k=A.a3(n).k("Y<M.E>")
j=A.B(new A.Y(n,new C.cgg(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.arz(h,w,s,r,q)},
arB(d,e){var w=0,v=A.j(x.y),u,t
var $async$arB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Ok(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bj(d),$async$arB)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arB,v)},
cgm(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cgm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bj(d),$async$cgm)
case 3:t=s.b9(f,new C.cgn(),x.cs)
t=A.B(t,t.$ti.k("ak.E"))
B.d.b0(t,new C.cgo())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgm,v)},
WC(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$WC=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.arB(e,d),$async$WC)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Ot(e),$async$WC)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bj(e),$async$WC)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.cgk(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a8(r)
if(t.gau(r)){u=null
w=1
break}t=t.dO(r,new C.cgl(e),x.k)
r=A.B(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LQ(e,o),$async$WC)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.arz(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WC,v)},
b25(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b25=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WC(d,e,f,g),$async$b25)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hl(A.KW(q.f2(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b25,v)},
b24(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b24=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WC(d,e,f,g),$async$b24)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.ary(r,f),$async$b24)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aIu(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b24,v)},
WD(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WD=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hbZ(a0),$async$WD)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.Y(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.arv(g.a,d,e,f,s,r),$async$WD)
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
return A.b(C.bEP(e,j),$async$WD)
case 12:case 11:w=13
return A.b(C.aj0(e,j,s),$async$WD)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.Bu(e,i,h),$async$WD)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bsn(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WD,v)},
arz:function arz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cgi:function cgi(){},
cgj:function cgj(){},
cgh:function cgh(){},
cgd:function cgd(){},
cge:function cge(){},
cgf:function cgf(){},
cgg:function cgg(){},
cgn:function cgn(){},
cgo:function cgo(){},
cgk:function cgk(d){this.a=d},
cgl:function cgl(d){this.a=d},
hla(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hE(d,new C.arA(w,e,g,i,f,h,null),!0,null,x.H)},
diE(d,e,f,g,h,i,j,k){return new C.bht(i,e,k,j,g,f,h,d,null)},
arA:function arA(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFN:function aFN(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e52:function e52(d){this.a=d},
e53:function e53(d,e,f){this.a=d
this.b=e
this.c=f},
e57:function e57(d,e){this.a=d
this.b=e},
e58:function e58(d){this.a=d},
e5_:function e5_(d){this.a=d},
e50:function e50(d,e){this.a=d
this.b=e},
e51:function e51(d,e){this.a=d
this.b=e},
e56:function e56(d){this.a=d},
e55:function e55(d,e){this.a=d
this.b=e},
e54:function e54(){},
e5a:function e5a(d){this.a=d},
e5b:function e5b(d,e){this.a=d
this.b=e},
e59:function e59(d,e){this.a=d
this.b=e},
dj5:function dj5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bhv:function bhv(d,e,f){this.d=d
this.e=e
this.a=f},
adT:function adT(d,e,f){this.c=d
this.d=e
this.a=f},
bht:function bht(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bhy:function bhy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0P:function a0P(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFM:function aFM(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e4V:function e4V(d,e){this.a=d
this.b=e},
e4W:function e4W(d){this.a=d},
e4X:function e4X(d){this.a=d},
e4Y:function e4Y(d){this.a=d},
e4Z:function e4Z(d){this.a=d},
a0Q:function a0Q(d){this.a=d},
bmO:function bmO(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e5c:function e5c(d,e){this.a=d
this.b=e},
b0z(d,e){return new C.b0y(d,e,null)},
b0y:function b0y(d,e,f){this.c=d
this.d=e
this.a=f},
ioq(d){if(!(d!=null&&B.a.Y(d,"ngmy:thumb:")))return null
return B.a.b_(d,11)},
iw_(d){return A.bU(B.L,null,new C.h0j(new C.ui(A.O(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hvh(d,e){return new C.auD(e,d,null)},
aT3(d,e,f,g,h,i,j){var w=C.ioq(i)
if(w!=null)return A.bv(e,new A.a5(j,f,new C.a7C(w,!0,null),null),B.aq)
return A.aSo(e,B.bY,f,g,h,i,j)},
lX:function lX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7C:function a7C(d,e,f){this.c=d
this.d=e
this.a=f},
bms:function bms(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b9$=e
_.c=_.a=null},
dR4:function dR4(d){this.a=d},
dR5:function dR5(){},
dR6:function dR6(d,e){this.a=d
this.b=e},
bmr:function bmr(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h0j:function h0j(d){this.a=d},
h0i:function h0i(d,e){this.a=d
this.b=e},
h0h:function h0h(d,e){this.a=d
this.b=e},
h0g:function h0g(d,e){this.a=d
this.b=e},
auD:function auD(d,e,f){this.c=d
this.d=e
this.a=f},
cpS:function cpS(d,e){this.a=d
this.b=e},
aNU:function aNU(){},
ivL(d){var w=null
return A.cg(w,w,!0,w,new C.h_H(),d,w,!0,!0,x.e2)},
iwZ(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.h7u(h,g,f,e),d,w,!0,!0,x.N)},
ivN(d,e){var w=null
return A.cg(w,w,!0,w,new C.h_L(e),d,w,!0,!0,x.dY)},
ivM(d){var w=null
return A.cg(w,w,!0,w,new C.h_K(),d,w,!0,!0,x.c5)},
aW_:function aW_(d,e){this.a=d
this.b=e},
aVZ:function aVZ(d){this.a=d},
aU1:function aU1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_H:function h_H(){},
h7u:function h7u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h_L:function h_L(d){this.a=d},
h_K:function h_K(){},
a_t:function a_t(d,e){this.c=d
this.a=e},
aAX:function aAX(){var _=this
_.d=$
_.c=_.a=_.e=null},
dab:function dab(d){this.a=d},
dac:function dac(d){this.a=d},
daa:function daa(d,e){this.a=d
this.b=e},
dad:function dad(d){this.a=d},
dae:function dae(d){this.a=d},
a_s:function a_s(d){this.a=d},
aAW:function aAW(){this.d=$
this.c=this.a=null},
da7:function da7(d){this.a=d},
da8:function da8(d){this.a=d},
da9:function da9(d){this.a=d},
ZZ:function ZZ(d){this.a=d},
azC:function azC(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cIg:function cIg(){},
cIm:function cIm(d){this.a=d},
cIn:function cIn(d){this.a=d},
cIo:function cIo(d){this.a=d},
cIl:function cIl(){},
cIp:function cIp(d){this.a=d},
cIq:function cIq(d){this.a=d},
cIk:function cIk(){},
cIr:function cIr(d,e){this.a=d
this.b=e},
cIj:function cIj(d,e){this.a=d
this.b=e},
cIh:function cIh(d,e){this.a=d
this.b=e},
cIs:function cIs(d){this.a=d},
cIi:function cIi(){},
cIt:function cIt(d){this.a=d},
a2B:function a2B(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bzg:function bzg(){this.d=$
this.c=this.a=null},
foG:function foG(d,e){this.a=d
this.b=e},
foH:function foH(d){this.a=d},
foI:function foI(d,e){this.a=d
this.b=e},
acV:function acV(d,e){this.a=d
this.b=e},
Gp:function Gp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bze:function bze(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
foE:function foE(d,e){this.a=d
this.b=e},
azv:function azv(d,e){this.c=d
this.a=e},
bzf:function bzf(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
foF:function foF(d){this.a=d},
bzd:function bzd(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aQ1:function aQ1(){},
aQ2:function aQ2(){},
bGQ(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.h.bh(u),s=B.o.D(B.h.U((u-t)*100),0,99),r=d<0?"-":"",q=A.ou(B.o.v(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fYY(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b1(B.o.v(s),2,"0")
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.m(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Zm(A.cS(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aSG(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aSG=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i5().la(85,1280,B.eR),$async$aSG)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fq(),$async$aSG)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hvg()
w=9
return A.b(C.cpR(q,r),$async$aSG)
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
return A.i($async$aSG,v)},
aT1(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aT1=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.Y(g,"ngmy:ws-thumb:")
if(i){u=C.cpO(g)
w=1
break}if(!B.a.Y(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cH.aK(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hm(p,!0,null,o).dg(0,B.h2),$async$aT1)
case 9:n=a1
w=10
return A.b(n.le(),$async$aT1)
case 10:m=a1
w=11
return A.b(m.b.hj(B.hf),$async$aT1)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eQ(B.dF.gaS(l))
k="data:image/png;base64,"+B.cK.gco().aK(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.h.U(o*0.72)
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
return A.i($async$aT1,v)},
fYY:function fYY(){},
ui:function ui(d){this.a=d},
auC:function auC(d,e,f){this.c=d
this.d=e
this.a=f},
aHi:function aHi(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eXl:function eXl(d,e){this.a=d
this.b=e},
eXc:function eXc(d){this.a=d},
eXd:function eXd(d){this.a=d},
eXj:function eXj(d,e){this.a=d
this.b=e},
eXi:function eXi(d,e){this.a=d
this.b=e},
eXf:function eXf(d,e){this.a=d
this.b=e},
eXe:function eXe(d,e){this.a=d
this.b=e},
eXg:function eXg(d){this.a=d},
eXh:function eXh(d,e){this.a=d
this.b=e},
eXk:function eXk(d,e){this.a=d
this.b=e},
eX7:function eX7(d,e){this.a=d
this.b=e},
eXb:function eXb(d){this.a=d},
eXa:function eXa(d,e){this.a=d
this.b=e},
eX9:function eX9(d){this.a=d},
eXm:function eXm(d,e){this.a=d
this.b=e},
eXn:function eXn(d,e){this.a=d
this.b=e},
eX8:function eX8(d,e){this.a=d
this.b=e},
hIQ(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fYZ(d,e,f){var w=0,v=A.j(x.N),u
var $async$fYZ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.W.av(C.hIQ(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fYZ,v)},
bGS(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bGS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fYZ(!0,d,e),$async$bGS)
case 4:w=3
return A.b(r.auA(g,d,e.a),$async$bGS)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dV.aK(B.W.av(C.hIQ(d,e,null),null))
u="NGMY_WS:"+B.kM.gco().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGS,v)},
hzR(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hkK(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d3(s,"NGMYWSSYNC2|"))return!0
if(J.d3(s,"NGMY_WS:"))return!0
if(J.eC(s,t))return!0
if(J.d3(s,"{"))try{w=B.W.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
itN(d){var w,v,u,t=C.hzR(d)
if(t==null)return null
if(C.hkK(t))return t
w=B.a.cm(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b_(t,w))
if(C.hkK(v))return v}u=B.a.cm(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b_(t,u))
if(C.hkK(v))return v}return null},
hkJ(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d3(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d3(q,"NGMY_WS:")){v=B.cb.cD(0,B.cH.aK(J.mY(q,8)))
w=t.a(B.W.aP(0,v,r))}else w=t.a(B.W.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.heD(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bGR(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bGR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.Y(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.auz(t[1]),$async$bGR)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hkJ(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hkJ(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGR,v)},
hkI(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lD(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bGl(){var w=0,v=A.j(x.o),u,t
var $async$bGl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hy(),$async$bGl)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hkJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGl,v)},
hK1(d,e,f,g){return A.bU(B.L,null,new C.h7h(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h7h:function h7h(d,e,f){this.a=d
this.b=e
this.c=f},
aeZ:function aeZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eXp:function eXp(d,e){this.a=d
this.b=e},
eXq:function eXq(d,e){this.a=d
this.b=e},
eXr:function eXr(d,e){this.a=d
this.b=e},
eXs:function eXs(d,e){this.a=d
this.b=e},
eXo:function eXo(d){this.a=d},
auw:function auw(d,e,f){this.c=d
this.d=e
this.a=f},
boa:function boa(){var _=this
_.c=_.a=_.e=_.d=null},
eX2:function eX2(d,e){this.a=d
this.b=e},
eX3:function eX3(d){this.a=d},
eX4:function eX4(d){this.a=d},
auB:function auB(d){this.a=d},
aHh:function aHh(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eX6:function eX6(d){this.a=d},
eX5:function eX5(d){this.a=d},
i1S(d,e,f,g,h){return new C.P8(h,g,d,e,f,null)},
aMe:function aMe(d,e){this.a=d
this.b=e},
P8:function P8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHj:function aHj(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eXP:function eXP(){},
eXL:function eXL(d,e){this.a=d
this.b=e},
eXM:function eXM(d){this.a=d},
eXw:function eXw(d){this.a=d},
eXu:function eXu(d){this.a=d},
eXv:function eXv(d){this.a=d},
eXF:function eXF(d,e){this.a=d
this.b=e},
eXC:function eXC(d,e){this.a=d
this.b=e},
eXD:function eXD(d,e){this.a=d
this.b=e},
eXE:function eXE(d,e,f){this.a=d
this.b=e
this.c=f},
eXA:function eXA(d,e,f){this.a=d
this.b=e
this.c=f},
eXy:function eXy(d){this.a=d},
eXz:function eXz(d){this.a=d},
eXB:function eXB(d){this.a=d},
eXS:function eXS(d){this.a=d},
eXR:function eXR(d){this.a=d},
eXT:function eXT(d){this.a=d},
eXQ:function eXQ(d){this.a=d},
eXt:function eXt(d){this.a=d},
eXx:function eXx(d,e){this.a=d
this.b=e},
eXO:function eXO(d,e){this.a=d
this.b=e},
eXN:function eXN(d,e){this.a=d
this.b=e},
eXI:function eXI(d){this.a=d},
eXJ:function eXJ(d){this.a=d},
eXK:function eXK(d,e){this.a=d
this.b=e},
eXH:function eXH(d,e){this.a=d
this.b=e},
eXG:function eXG(d,e,f){this.a=d
this.b=e
this.c=f},
bB1:function bB1(){},
B6(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahx(d,e,f){return C.ihW(d,e,f)},
ihW(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahx=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aC("String",e,f),$async$ahx)
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
return A.i($async$ahx,v)},
ahw(d,e){return C.ihV(d,e)},
ihV(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahw=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ahw)
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
return A.i($async$ahw,v)},
igL(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.TT(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bDM(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bDM=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b5i(q),$async$bDM)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aT1(q,!1),$async$bDM)
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
return A.i($async$bDM,v)},
hQe(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aI(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aI(d.h(0,"quantity"))
if(w==null)w=null
v=A.aI(d.h(0,"unitPrice"))
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
heD(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.dd(s,x.f)
w=A.cF(w,new C.cHx(),w.$ti.k("M.E"),x.Q)
v=A.a3(w).k("Y<M.E>")
r=A.B(new A.Y(w,new C.cHy(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lD(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ilV(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wN
case"female":case"f":return D.oB
default:return D.zg}},
hF8(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hpc(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ilV(v==null?j:J.k(v))
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
m=A.aI(d.h(0,"birthOrder"))
m=m==null?j:B.h.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aI(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.h.M(k)
return new C.i4(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ilX(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Pb
case"viewer":return D.kZ
default:return D.uT}},
ilY(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hn(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aRI(d,e){return B.a.i(e.toLowerCase())===C.Hn(d,e)&&d.y!==D.kZ},
ux(d,e){var w,v=d.y
if(v===D.kZ)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hn(d,e))return!0
if(v===D.Pb)return!0
v=d.e
return new A.N(v,A.hkQ(),A.U(v).k("N<1,q>")).q(0,w)},
ilh(d){return J.dH(d,new C.fIO()).gJ(0)},
h81(d){var w=0,v=A.j(x.y),u,t
var $async$h81=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bj(d),$async$h81)
case 3:u=t.rn(f,new C.h82(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h81,v)},
bEP(d,e){var w=0,v=A.j(x.H),u,t
var $async$bEP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bj(d),$async$bEP)
case 3:t=g
if(J.rn(t,new C.fGh(e))){w=1
break}if(C.ilh(t)>=2)throw A.W(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bEP,v)},
amB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.dd(h,x.f)
w=A.cF(w,new C.bTH(),w.$ti.k("M.E"),x.P)
v=A.a3(w).k("Y<M.E>")
g=A.B(new A.Y(w,new C.bTI(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b9(u,new C.bTJ(),x.N)
t=A.B(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bj(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aI(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.h.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ilX(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cu)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.kZ(w,v,s,!r,t,g,q,p,o,n,m)},
hFn(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aA(v,0,8)},
DD(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SO(d),$async$DD)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$DD)
case 4:t=f
w=5
return A.b(t.a7C(0),$async$DD)
case 5:w=6
return A.b(C.fwx(t,l),$async$DD)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hAs(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pa(l,n),$async$DD)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hAs(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pa(l,n),$async$DD)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DD,v)},
fwx(d,e){return C.ie5(d,e)},
ie5(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fwx=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a8(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.B6(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.W.aP(0,a5,null)
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
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.B6(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.W.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.heD(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.B6(a9)+"_"+n))
i=C.igL(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.Y(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b5i(h),$async$fwx)
case 17:g=b1
if(g!=null){i=i.TT(g)
p=!0}case 16:J.c4(q,i)
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
case 8:J.SX(q,new C.fwy())
if(p&&J.ad(q)!==0)C.pa(a9,q)
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
return A.i($async$fwx,v)},
bFf(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bFf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SO(d),$async$bFf)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DD(r),$async$bFf)
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
return A.i($async$bFf,v)},
hAs(d){var w,v,u,t
try{w=B.W.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.dd(w,x.f)
v=A.cF(v,new C.fs7(),v.$ti.k("M.E"),x.fA)
u=A.a3(v).k("Y<M.E>")
v=A.B(new A.Y(v,new C.fs8(),u),u.k("M.E"))
B.d.b0(v,new C.fs9())
return v}catch(t){v=A.a([],x.D)
return v}},
pa(d,e){return C.ivA(d,e)},
ivA(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pa=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SO(b2),$async$pa)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$pa)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.B6(a8)
p=A.aV(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b9(x.j.a(B.W.aP(0,p,null)),new C.h_v(),a2).fL(0)
a2=J.b9(b3,new C.h_w(),a2).c0(0,new C.h_x())
n=A.d0(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eC(n,m)?17:18
break
case 17:a5=C.B6(a8)
l=A.aV(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9V(l),$async$pa)
case 19:t=21
a5=C.B6(a8)
k=A.aV(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.W.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.a9V(a5==null?null:J.k(a5)),$async$pa)
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
return A.b(C.ahw(r,"ngmy_worksheet_item_v3_"+C.B6(a8)+"_"+m),$async$pa)
case 29:w=30
return A.b(C.ahw(r,"ngmy_worksheet_thumb_v3_"+C.B6(a8)+"_"+m),$async$pa)
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
case 14:case 10:a2=J.cE(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gP(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bDM(h),$async$pa)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahx(r,"ngmy_worksheet_thumb_v3_"+C.B6(a8)+"_"+a4,f),$async$pa)
case 40:g=i.TT(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahw(r,"ngmy_worksheet_thumb_v3_"+C.B6(a8)+"_"+a4),$async$pa)
case 41:g=i.TT(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahw(r,"ngmy_worksheet_thumb_v3_"+C.B6(a8)+"_"+a4),$async$pa)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahx(r,"ngmy_worksheet_item_v3_"+C.B6(a8)+"_"+a4,B.W.av(g.aj(),null)),$async$pa)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c4(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahx(r,"ngmy_worksheets_index_v3_"+C.B6(a8),B.W.av(q,null)),$async$pa)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eO(b3,new C.h_y(q))
a4=a3.$ti.k("cM<1,aa<q,@>>")
a7=A.B(new A.cM(a3,new C.h_z(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahx(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.W.av(a0,null)),$async$pa)
case 45:w=46
return A.b(J.hPj(r),$async$pa)
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
return A.i($async$pa,v)},
Mi(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Mi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DD(d),$async$Mi)
case 3:t=g
s=J.cE(t)
r=s.bk(t,new C.h80(e))
if(r===-1)s.ca(t,0,e)
else s.n(t,r,e)
u=C.pa(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mi,v)},
bF1(d,e){var w=0,v=A.j(x.H),u
var $async$bF1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DD(d),$async$bF1)
case 2:u=g
J.no(u,new C.fJh(e))
w=3
return A.b(C.pa(d,u),$async$bF1)
case 3:return A.h(null,v)}})
return A.i($async$bF1,v)},
Hp(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Hp)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.W.aP(0,i,null)
if(x.j.b(t)){j=J.dd(t,x.f)
j=A.cF(j,new C.fMu(),j.$ti.k("M.E"),x.k)
s=A.a3(j).k("Y<M.E>")
r=A.B(new A.Y(j,new C.fMv(),s),s.k("M.E"))
B.d.b0(r,new C.fMw())
k=r}}catch(h){}w=4
return A.b(C.fsR(d),$async$Hp)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.iet(k,p,d)
j=A.U(o)
s=j.k("N<1,aa<q,@>>")
s=A.B(new A.N(o,new C.fMx(),s),s.k("ak.E"))
n=B.W.av(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RW(d,o),$async$Hp)
case 7:case 6:j=j.k("Y<1>")
m=A.B(new A.Y(o,new C.fMy(d),j),j.k("M.E"))
if(m.length!==0)C.aRs(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hp,v)},
h_h(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h_h=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RW(d,e),$async$h_h)
case 3:t=J.dH(e,new C.h_i(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aRs(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h_h,v)},
a4g(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a4g=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a4g)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.W.aP(0,l,null)
if(x.j.b(u)){m=J.dd(u,x.f)
m=A.cF(m,new C.h7W(),m.$ti.k("M.E"),x.k)
t=A.a3(m).k("Y<M.E>")
s=A.B(new A.Y(m,new C.h7X(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oA(o,new C.h7Y(e))
if(B.a.i(e.x).length===0&&C.ux(e,d)){m=B.a.i(d.toLowerCase())
p=e.aGH(e.y===D.kZ?D.kZ:D.uT,m)}else p=e
if(q===-1)J.mX(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RW(d,o),$async$a4g)
case 3:w=C.ux(p,d)?4:5
break
case 4:w=6
return A.b(C.aRr(C.Hn(p,d),p),$async$a4g)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a4g,v)},
aRE(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aRE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hp(d),$async$aRE)
case 2:u=g
t=J.cE(u)
s=A.nx(t.eO(u,new C.fIZ(e)))
t.bq(u,new C.fJ_(e))
w=3
return A.b(C.RW(d,u),$async$aRE)
case 3:w=s!=null&&C.aRI(s,d)?4:5
break
case 4:w=6
return A.b(C.fsb(e),$async$aRE)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aRE,v)},
aji(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.B(new A.Y(w,new C.h86(),v),v.k("M.E"))
return w},
hic(d,e){var w,v=d.f,u=A.nx(new A.Y(v,new C.fIs(e),A.U(v).k("Y<1>")))
v=C.aji(d)
w=A.U(v).k("Y<1>")
v=A.B(new A.Y(v,new C.fIt(e,u),w),w.k("M.E"))
B.d.b0(v,new C.fIu())
return v},
im0(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hK5(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bk(C.hic(d,u),new C.h7v(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
inu(d,e){var w
if(e==null||e.length===0)return 1
w=C.hic(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fNl(),A.U(w).k("N<1,H>")).f0(0,B.yc)+1},
ivt(d){var w,v=C.aji(d)
if(v.length===0)return null
w=new A.Y(v,new C.h_b(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ilW(d){return A.J(["id",d.a,"name",d.b,"gender",C.hF8(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
inp(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.zg?n:q.c
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
d=q.aGC(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cR_(a1,w,a3.d,a2.y,s,a0,v)},
Bj(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Bj)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aV(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.W.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.dd(t,x.f)
p=A.cF(p,new C.fMr(),p.$ti.k("M.E"),x.k)
s=A.a3(p).k("Y<M.E>")
p=A.B(new A.Y(p,new C.fMs(),s),s.k("M.E"))
B.d.b0(p,new C.fMt())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bj,v)},
aj0(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aj0=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uT:D.kZ
a7=C.Hn(b2,b3)
w=2
return A.b(C.Bj(b1),$async$aj0)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bk(a8,new C.h_6(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bEP(b1,b2),$async$aj0)
case 5:case 4:if(b0===-1){u=b2.aGH(a6,a7)
a9.ca(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.zg?i:l.c
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
s.n(0,m,l.aGC(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b8<2>")
s=A.B(new A.b8(s,k),k.k("M.E"))
k=a5?D.uT:D.kZ
u=t.cR1(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RW(b1,a8),$async$aj0)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aRr(B.a.i(b3.toLowerCase()),u),$async$aj0)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aj0,v)},
hAS(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,aa<q,@>>"),k=A.B(new A.N(m,C.hJa(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hAT(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,aa<q,@>>")
u=A.B(new A.N(u,C.hJa(),t),t.k("ak.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
ic_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.amB(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hkQ(),A.U(j).k("N<1,q>")).c0(0,new C.fsE())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.uT
else s=B.d.q(t,u)?D.Pb:D.kZ
return w.aGH(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.amB(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.dd(q,h)
h=A.cF(h,new C.fsF(),h.$ti.k("M.E"),x.P)
p=A.a3(h).k("Y<M.E>")
o=A.B(new A.Y(h,new C.fsG(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b9(n,new C.fsH(),x.N).c0(0,new C.fsI())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uT
else s=B.d.q(t,u)?D.Pb:D.kZ
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bj(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aI(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.h.M(j)
if(j==null)j=0
return new C.kZ(h,r,p,!m,t,o,l,j,v,s,B.cf)},
fsR(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fsR=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fsV()
h=x.N
g=x.z
w=7
return A.b(A.ib(A.a([A.lI("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.lI("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.lI("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fsR)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.T(h,g)
h=A.B(p,g)
l=h
J.h0(l,o)
J.h0(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a3(l).k("b8<2>")
h=A.cF(new A.b8(l,h),new C.fsS(a0),h.k("M.E"),x.k)
l=A.a3(h).k("Y<M.E>")
l=A.B(new A.Y(h,new C.fsT(),l),l.k("M.E"))
B.d.b0(l,new C.fsU())
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
return A.i($async$fsR,v)},
iet(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dO(e,new C.fxf(),v).c0(0,new C.fxg())
t=A.d0(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hn(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kZ){m=q.e
m=!new A.N(m,A.hkQ(),A.U(m).k("N<1,q>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.inp(l,v)
o=C.Hn(k,w)
p=v.d
s.n(0,u,o===w?k.bg4(p,D.uT):k.bg4(p,v.y))}j=s.$ti.k("b8<2>")
j=A.B(new A.b8(s,j),j.k("M.E"))
B.d.b0(j,new C.fxh())
return j},
RW(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$RW)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b9(e,new C.fAf(),x.a)
s=A.B(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aC("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.W.av(s,null)),$async$RW)
case 3:return A.h(null,v)}})
return A.i($async$RW,v)},
aRr(d,e){return C.ijJ(d,e)},
ijJ(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aRr=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mc("family_trees",A.a([C.hAS(e,d)],p),null,B.cQ),$async$aRr)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mc("family_trees",A.a([C.hAT(e,d)],p),null,B.cQ),$async$aRr)
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
return A.i($async$aRr,v)},
aRs(d,e){return C.ijK(d,e)},
ijK(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aRs=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,aa<q,@>>")
m=n.k("ak.E")
l=A.B(new A.N(e,new C.fFw(d),n),m)
r=l
w=7
return A.b(A.mc("family_trees",r,null,B.cQ),$async$aRs)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.N(e,new C.fFx(d),n),m)
p=k
w=8
return A.b(A.mc("family_trees",p,null,B.cQ),$async$aRs)
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
return A.i($async$aRs,v)},
fsb(d){return C.ibf(d)},
ibf(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fsb=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Sn("family_trees",A.J(["id",d],x.N,x.z),null,B.cQ),$async$fsb)
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
return A.i($async$fsb,v)},
rs:function rs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lD:function lD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cHA:function cHA(){},
cHz:function cHz(){},
cHx:function cHx(){},
cHy:function cHy(){},
Iw:function Iw(d,e){this.a=d
this.b=e},
i4:function i4(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
amA:function amA(d,e){this.a=d
this.b=e},
fIO:function fIO(){},
h82:function h82(d){this.a=d},
fGh:function fGh(d){this.a=d},
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
bTL:function bTL(){},
bTK:function bTK(){},
bTH:function bTH(){},
bTI:function bTI(){},
bTJ:function bTJ(){},
fwy:function fwy(){},
fs7:function fs7(){},
fs8:function fs8(){},
fs9:function fs9(){},
h_v:function h_v(){},
h_w:function h_w(){},
h_x:function h_x(){},
h_y:function h_y(d){this.a=d},
h_z:function h_z(){},
h80:function h80(d){this.a=d},
fJh:function fJh(d){this.a=d},
fMu:function fMu(){},
fMv:function fMv(){},
fMw:function fMw(){},
fMx:function fMx(){},
fMy:function fMy(d){this.a=d},
h_i:function h_i(d){this.a=d},
h7W:function h7W(){},
h7X:function h7X(){},
h7Y:function h7Y(d){this.a=d},
fIZ:function fIZ(d){this.a=d},
fJ_:function fJ_(d){this.a=d},
h86:function h86(){},
fIs:function fIs(d){this.a=d},
fIt:function fIt(d,e){this.a=d
this.b=e},
fIu:function fIu(){},
h7v:function h7v(d){this.a=d},
fNl:function fNl(){},
h_b:function h_b(){},
fMr:function fMr(){},
fMs:function fMs(){},
fMt:function fMt(){},
h_6:function h_6(d){this.a=d},
fsE:function fsE(){},
fsF:function fsF(){},
fsG:function fsG(){},
fsH:function fsH(){},
fsI:function fsI(){},
fsV:function fsV(){},
fsW:function fsW(d){this.a=d},
fsS:function fsS(d){this.a=d},
fsT:function fsT(){},
fsU:function fsU(){},
fxf:function fxf(){},
fxg:function fxg(){},
fxh:function fxh(){},
fAf:function fAf(){},
fFw:function fFw(d){this.a=d},
fFx:function fFx(d){this.a=d},
cHB:function cHB(d,e){this.a=d
this.b=e},
cHC:function cHC(d,e){this.a=d
this.b=e},
aJq:function aJq(d,e,f){this.a=d
this.b=e
this.c=f},
bbA:function bbA(){this.b=this.a=0},
bbz:function bbz(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bzh:function bzh(){},
xm(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gci()+"/"+w.gcz()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b1(B.o.v(w.gnA()),2,"0")+":"+B.a.b1(B.o.v(w.gGX()),2,"0")},
ikO(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.bs(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.bX(new A.r(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.w.j(0.22)
$.S()
u=A.L()
u.r=v.gp(0)
a5.c1(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=E.fP[l]*a7*0.075
j=k-w
j=A.by(new A.a4(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=B.dh.gp(0)
a5.ar(j,i)
k-=q
k=A.by(new A.a4(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=B.c.gp(0)
a5.ar(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.by(new A.a4(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.ar(h,q)
q=v*0.27
t=a7*0.02
t=A.by(new A.a4(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.ar(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a5(0,new A.r(s,a7*0.17)),L.ahv(E.rX,t))
s=g.a5(0,new A.r(s,a7*0.18))
q=A.L()
q.r=E.rX.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a5(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,L.ahv(E.rX,t))
w=A.L()
w.r=E.rX.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a5(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=E.m8.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=E.rX.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bW(a0,a1)
u=A.L()
u.r=E.m8.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bW(a0,a1)
u=A.L()
u.r=E.m8.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=E.fP[l]
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=E.m8.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.h.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=E.fP[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.b=B.aa
k.c=1.6
k.r=B.bq.gp(0)
k.d=B.bG
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=B.w.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.hM.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bX(a0.a5(0,new A.r(0,a1*0.5)).aJ(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,L.ahv(B.bq,1.8))
a4.restore()},
i1P(){var w,v=$.ow(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hg(u)},
aux(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aux=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$aux)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$aux)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
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
return A.i($async$aux,v)},
auy(d){return C.i1Q(d)},
i1Q(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$auy=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$auy)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hQ("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cQ,null),$async$auy)
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
return A.i($async$auy,v)},
auA(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$auA=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$auA)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i1P()
w=4
return A.b(C.aux(),$async$auA)
case 4:r=h
q=B.a.i(e)
p=B.dV.aK(t)
J.aK(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cK.gco().aK(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.auy(r),$async$auA)
case 5:u=new A.a1F("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auA,v)},
auz(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$auz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c9(),$async$auz)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aux(),$async$auz)
case 4:q=f
p=J.a8(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a8(o)
m=A.aI(n.h(o,"usesRemaining"))
l=m==null?null:B.h.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cb.cD(0,B.cH.aK(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dK(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.auy(q),$async$auz)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auz,v)},
hvg(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cT.aw(999999)},
i1R(d){var w,v,u,t,s,r,q
try{w=A.Hk(d)
if(w==null)return d
v=w
if(J.Mo(v)>960||J.Mn(v)>960){s=v
r=J.Mo(v)>=J.Mn(v)?960:null
v=A.a3l(s,J.Mn(v)>J.Mo(v)?960:null,B.Iq,r)}s=v
u=A.UX(82).GE(s,B.vg)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cd(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cpR(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cpR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i1R(e)
$.cpN.n(0,s,t)
u=C.bGU(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cpR,v)},
b5i(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b5i=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d3(l,"data:image")){u=null
w=1
break}t=4
r=J.eC(l,",")?B.d.gal(J.lM(l,",")):l
q=B.cH.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hvg()
w=7
return A.b(C.cpR(p,q),$async$b5i)
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
return A.i($async$b5i,v)},
cpO(d){var w=0,v=A.j(x.T),u,t,s
var $async$cpO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.Y(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.cpQ(s),$async$cpO)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cK.gco().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cpO,v)},
a9V(d){var w=0,v=A.j(x.H),u,t
var $async$a9V=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hIR(d)
if(t==null){w=1
break}$.cpN.W(0,t)
w=3
return A.b(C.bGT(t),$async$a9V)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9V,v)},
bGU(d,e){return C.itQ(d,e)},
itQ(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bGU=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aQg
w=7
return A.b(n==null?$.aQg=A.hh1():n,$async$bGU)
case 7:r=g
q=new Uint8Array(A.cd(e))
p=J.mh(r,"thumbs","readwrite")
B.iE.mj(J.mg(p,"thumbs"),q,l)
w=8
return A.b(J.oz(p),$async$bGU)
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
return A.i($async$bGU,v)},
bGT(d){return C.itO(d)},
itO(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bGT=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aQg
w=7
return A.b(o==null?$.aQg=A.hh1():o,$async$bGT)
case 7:r=f
q=J.mh(r,"thumbs","readwrite")
B.iE.Gv(J.mg(q,"thumbs"),m)
w=8
return A.b(J.oz(q),$async$bGT)
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
return A.i($async$bGT,v)}},D,R,A3,A4,A5,I,S,A6,T,U,V,A7,W,A8,F
J=c[1]
A=c[0]
B=c[2]
X=c[78]
Y=c[72]
Q=c[123]
Z=c[28]
M=c[71]
K=c[111]
A_=c[118]
A0=c[74]
N=c[139]
A1=c[88]
O=c[130]
L=c[31]
E=c[57]
A2=c[27]
G=c[64]
H=c[82]
P=c[44]
C=a.updateHolder(c[5],C)
D=c[134]
R=c[114]
A3=c[135]
A4=c[109]
A5=c[117]
I=c[54]
S=c[51]
A6=c[97]
T=c[77]
U=c[98]
V=c[113]
A7=c[136]
W=c[138]
A8=c[45]
F=c[137]
C.aqb.prototype={}
C.b0A.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bko(),f=h.x!=null&&h.zR(i).length===0
if(h.x!=null)w=f?B.b2:B.bD
else w=h.gUV()?B.bD:B.e3
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.l(22)
t=A.K(D.brf,B.r,1)
s=x.p
r=A.o(i,A.x(A.a([A.o(i,D.fjc,B.f,i,i,new A.n(B.b2.j(0.12),i,i,A.l(999),i,i,B.n),i,i,i,i,B.hm,i,i,i),B.T,D.fPj,B.ax,A.d(C.xm(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fKV,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,D.b8U,i,i,i,i,B.OK,i,i,i)
q=A.l(16)
p=A.K(B.bm,B.r,1)
o=A.K(B.b2.j(0.28),B.r,1)
n=A.hjj(h.d)
o=A.o(B.z,C.b0z(A.fPH(h.e,n),30),B.f,i,i,new A.n(B.mb,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fFR,B.K,i,i)
m=A.l(14)
l=A.K(B.bm,B.r,1)
q=A.o(i,A.x(A.a([o,B.P,n,B.bF,D.fPC,B.af,A.o(i,A.x(A.a([D.h4R,B.bF,A.d(A.Bl(h.c),i,i,i,i,i,i,D.fAs,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fi,i,i,1/0)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.aS,i,p,q,i,i,B.n),i,i,i,i,K.an4,i,i,i)
p=A.l(16)
m=A.K(B.bm,B.r,1)
l=j.aTP("Original due",C.xm(h.r,!1))
n=j.aTP("Current due",C.xm(h.f,!1))
o=w.j(0.1)
k=A.l(12)
p=A.a([q,B.T,A.o(i,A.x(A.a([l,B.P,n,B.T,A.o(i,A.d(h.gaNO(),i,i,i,i,i,i,A.m(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.n(o,i,i,k,i,i,B.n),i,i,i,i,B.CB,i,i,1/0),B.T,j.clI(),B.P,j.c8g(g,f)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.l(14)
n=A.K(B.bm,B.r,1)
B.d.u(p,A.a([B.T,A.o(i,A.x(A.a([D.fQA,B.ax,A.d(q,i,i,i,i,i,i,D.fF3,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.aS,i,n,o,i,i,B.n),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaIn()){q=A.l(14)
o=A.K(B.cA,B.r,1.6)
B.d.u(p,A.a([B.T,A.o(i,A.x(A.a([D.h69,B.P,A.bv(A.l(12),A.eb(new A.a5(1/0,88,A.b5(i,i,i,new A.Xq(h.ax,B.a_,D.fnY,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.c,i,o,q,i,i,B.n),i,i,i,i,B.CD,i,i,i)],s))}p.push(B.aB)
p.push(D.fYZ)
return A.o(i,A.x(A.a([r,new A.D(B.a1g,A.x(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.N,0,B.p),B.aq,i,i,new A.n(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTP(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.acx,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fBv,w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
clI(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aaS(B.e3,u,"Not paid yet")
w=t.zR(null).length
v=w===0?B.b2:B.bD
return this.aaS(v,u,C.xm(t.x,!0))},
c8g(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aaS(B.b2,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aaS(B.b2,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.acx,u,u,u)
v=A.U(d).k("N<1,h8>")
v=A.B(new A.N(d,new C.c97(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.c_(B.bI,v,B.br,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aaS(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.acx,w,w,w),1),new A.df(1,B.cl,A.d(f,w,w,w,w,w,w,A.m(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e2,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bdM.prototype={
a4(d,e){new A.Xq(this.b,B.a_,e,!0,3.5,null).a4(d,e)},
aE(d){return d.b!==this.b}}
C.aqo.prototype={
S(){return new C.aFe(A.a([],x.bp))},
ge3(){return this.c}}
C.aFe.prototype={
Z(){this.a3()
this.Jv()},
Jv(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3u(t.a.c),$async$Jv)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dRX(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jv,v)},
aVN(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.m(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.l(10)
u=(this.a.d.a?B.bu:B.bj).j(0.22)
w=A.l(10)
return A.bA(v,new A.b6(4,r,new A.ax(u,1,B.r,-1)),v,B.bl,v,v,v,v,!0,new A.b6(4,w,new A.ax((this.a.d.a?B.bu:B.bj).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.l(10),D.b6x),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVM(d){return this.aVN(d,null)},
Qo(d){return this.cpo(d)},
cpo(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qo=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Ip:B.eR
w=7
return A.b(new A.i5().CX(72,900,900,n),$async$Qo)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fq(),$async$Qo)
case 8:p=f
n=B.cK.gco().aK(p)
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
if(n!=null)n.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Qo,v)},
b42(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.l(10),n=A.K((q?B.bu:B.bj).j(0.18),B.r,1)
if(d)q=B.cW
else q=s.a.d.a?B.bu:B.bj
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.m(r,r,s.a.d.a?B.aS:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cW
else u=s.a.d.a?B.bu:B.bj
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.m(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fr(r,r,r,r,r,r,r,r,r,r,r,B.cW,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ch)
q=A.a([q,B.ae,u,A.bP(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cB,s.a.d.a?B.bu:B.bj,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ch))
return A.o(r,A.A(q,B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.n(p,r,n,o,r,r,B.n),r,r,r,B.jK,D.bEr,r,r,r)},
DP(d){return this.bEA(d)},
bEz(){return this.DP(null)},
bEA(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DP=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.at(new A.bb(a4,B.b7,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.h.fK(a4)
p=a5.c
a4=a4===q?B.o.v(B.h.M(p)):B.h.ad(p,2)}o=new A.at(new A.bb(a4,B.b7,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.at(new A.bb(a4,B.b7,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c1(a4.gcl(),a4.gci(),a4.gcz(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcl(),a4.gci(),a4.gcz(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.br(a4,!0,x.cT)
i=a3?null:A.hjj(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xm?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",a4,new C.dRG(),new C.dRH(a2,t,a5,r,new C.dRI(a2,t),o,n,j),B.eH,!0,x.y),$async$DP)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cW(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.V$=s
r.R$=0
o.V$=s
o.R$=0
n.V$=s
n.R$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.K(x.q).f.T(D.fuz)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.T(D.ftd)
w=1
break}a1=A.fPH(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xm?"male":"female"
w=7
return A.b(A.ajh(a3,A.hrT(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DP)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xm?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c1(a3.gcl(),a3.gci(),a3.gcz(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcl(),a4.gci(),a4.gcz(),0,0,0,0,0)))a5.cTn(a2.a)
w=8
return A.b(A.ajh(t.a.c,a5),$async$DP)
case 8:case 5:w=9
return A.b(t.Jv(),$async$DP)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DP,v)},
aWs(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cW.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.l(12)
u=A.l(12)
t=A.l(12)
if(g)s=B.cW
else s=(this.a.d.a?B.bu:B.bj).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b0z(d,18)
if(g)q=B.cW
else q=this.a.d.a?B.aS:B.av
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,A.o(p,A.A(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.m(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.b9,B.i,0,p,p),B.f,p,p,new A.n(p,p,s,t,p,p,B.n),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Tb(d){return this.cHl(d)},
cHl(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Tb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",s,new C.dS_(),new C.dS0(t,d),B.hb,!0,x.y),$async$Tb)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.ajh(t.a.c,d),$async$Tb)
case 7:w=8
return A.b(t.Jv(),$async$Tb)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Tb,v)},
Qn(d,e){return this.bPw(0,e)},
bPw(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ln(s,"Cancel","Delete",e.b+" \xb7 "+A.Bl(e.c)+" will be removed from this device.","Delete this debt?"),$async$Qn)
case 3:if(!g){w=1
break}w=4
return A.b(C.fJ5(t.a.c,e.a),$async$Qn)
case 4:w=5
return A.b(t.Jv(),$async$Qn)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qn,v)},
agK(d){return this.cj8(d)},
cj8(d){var w=0,v=A.j(x.H),u=this,t
var $async$agK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dRU(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agK)
case 2:return A.h(null,v)}})
return A.i($async$agK,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ezp
w=J.dH(m.d,new C.dS1())
v=A.B(w,w.$ti.k("M.E"))
w=J.dH(m.d,new C.dS2())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cB(v,0,new C.dS3())
w=A.l(18)
s=m.a.d.a
r=s?D.cER:D.aE4
q=A.K(s?B.cW.j(0.35):B.cW.j(0.18),B.r,1)
s=A.o(l,D.c5q,B.f,l,l,new A.n(B.cW.j(m.a.d.a?0.28:0.14),l,l,A.l(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a3,!0,A.l(12),A.aM(!1,A.l(12),!0,D.eyL,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dS4(m),l,l,l,l,l,l,l),B.f,B.cW,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.i,0,l,l)
o=A.E(m.cDn("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bl(t)
r=A.a([A.o(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.bae(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.n(l,l,q,w,l,new A.a7(B.ay,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.an1,l,l,l),B.aB],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.ef:B.c
q=A.l(18)
o=A.K((w?B.bu:B.bj).j(0.12),B.r,1)
n=A.o(l,D.c00,B.f,l,l,new A.n(B.cW.j(0.12),l,l,A.l(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.aS:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.o(l,A.x(A.a([n,B.af,w,B.ax,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bj,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.i,0,B.p),B.f,l,l,new A.n(s,l,o,q,l,l,B.n),l,l,l,l,D.bH8,l,l,1/0))}else{w=m.gcoE()
s=A.B(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bIP,A.d("Paid",l,l,l,l,l,l,A.m(l,l,m.a.d.a?B.bu:B.bj,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.al,l,B.e,B.i,0,B.p)},
bae(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.l(14),r=A.K((v.a.d.a?B.bu:B.bj).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.m(u,u,v.a.d.a?B.bu:B.bj,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cW
else w=v.a.d.a?B.aS:B.av
return A.o(u,A.x(A.a([q,B.bF,A.d(f,u,1,B.a2,u,u,u,A.m(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.n(t,u,r,s,u,u,B.n),u,u,u,u,B.ez,u,u,u)},
cDn(d,e){return this.bae(!1,d,e)},
coF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zR(j).length,h=d.bjE()
if(d.x!=null){w=d.zR(j).length
v=w===0?B.cW:B.bD}else if(d.gUV())v=B.bD
else{if(h)w=B.cW
else w=k.a.d.a?B.bu:B.bj
v=w}if(d.x!=null){w=d.zR(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xm(u,!1)}else{u.toString
t="Paid "+C.xm(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xm(w,!1)+" \xb7 "+i+" missed":"Due "+C.xm(w,!1)}w=k.a.d.a?B.ef:B.c
u=A.l(18)
if(d.gUV()&&d.x==null)s=B.bD.j(0.35)
else s=(k.a.d.a?B.bu:B.bj).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cM,12)],x.V)
q=A.l(18)
p=k.a.d.a?B.bs:B.mb
o=A.K(d.gUV()&&d.x==null?B.bD.j(0.45):B.cW.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hjj(d.d)
o=A.o(B.z,A.d1(C.b0z(A.fPH(d.e,m),24),n),B.f,j,j,new A.n(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.av
m=x.p
n=A.a([new A.df(1,B.cl,A.d(p,j,1,B.a2,j,j,j,A.m(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaIn())B.d.u(n,A.a([B.e7,A.X(B.PC,B.cW.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.i,0,j,j),B.cS,A.d(t,j,1,B.a2,j,j,j,A.m(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.Bl(d.c)
l=k.a.d.a?B.aS:B.av
n=A.d(n,j,j,j,j,j,j,A.m(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.o(j,A.aF(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(A3.amQ,A.A(A.a([o,B.bc,p,B.ae,A.x(A.a([n,B.bF,A.X(B.eI,(k.a.d.a?B.bu:B.bj).j(0.5),j,j,j,18)],m),B.dO,j,B.e,B.i,0,B.p)],m),B.l,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dRW(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.n(w,j,s,u,r,j,B.n),j,j,j,B.da,j,j,j,j)}}
C.uS.prototype={}
C.amo.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.b6
u=v?B.E:B.l
t=a1.as
s=A.l(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cz,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.ay(a0,A.o(a0,A.X(B.cB,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.n(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iS,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.m(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aAd,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Hr,A.d(k,a0,a0,a0,a0,a0,a0,A.m(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.dv(B.dJ,m,B.f,A.A(l,B.l,a0,B.e,B.N,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bDD,A.d(v,a0,1,B.a2,a0,a0,a0,A.m(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cL:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fv,A.x(a2,u,a0,B.e,B.N,0,B.p),a0),1))
n.push(D.foN)
a2=A.a([A.A(n,B.l,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.wD,A.o(a0,a0,B.f,a0,a0,new A.n(a0,a0,a0,a0,a0,new A.a7(B.a5,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lR,A.x(a2,B.l,a0,B.e,B.N,0,B.p),a0)
if(a1.z){a2=A.l(t?9:19)
e=A.o(a0,e,B.f,a0,a0,new A.n(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hA,a0,a0,a0,a0)}return A.o(a0,e,B.f,a0,a0,new A.n(a0,a0,q,s,p,new A.a7(B.ay,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bEX,a0,a0,a0,a0)}}
C.aXi.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.o(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.b6?B.b6:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.m(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cL,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.m(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.i,0,q,q),B.cS,n],m)
if(p.z)o.push(new A.D(B.uK,n,q))
return new A.D(B.da,A.x(o,B.l,q,B.e,B.N,0,B.p),q)}}
C.Ue.prototype={
S(){return new C.bho()}}
C.bho.prototype={
gc31(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aE(d,n,x.w).w,l=x.p,k=A.a([D.ezk,D.ezq],l)
for(w=0;w<8;++w){v=D.a5G[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Id:B.zH
q=t===s
r=A.X(r,q?B.ey:B.bV,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bn,A.d(v.b,n,n,n,n,n,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.bz(1,B.bd,A.d(v.c,n,1,B.a2,n,n,n,B.B5,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ax(B.ey,2,B.r,-1)
s=new A.n(n,n,new A.bH(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.ay(n,new A.D(B.eQ,A.x(A.a([new A.D(B.n2,new A.c8(B.aM,B.e,B.i,B.l,n,B.p,n,0,r,n),n),A.o(n,new A.ds(!0,new C.amo(v,q.d,q.e,new C.dhC(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dhD(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bFj,A.bJ(D.hbH,n,new C.dhE(o,d),A.bp(B.b8,n,n,n,n,B.p3,n,n,new A.ba(A.l(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cN(new A.aY(0,1/0,0,m.a.b*0.9),A.cv(k,n,n,D.bJI,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nu.prototype={
aj(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bgg(d,e,f){return new C.nu(this.a,e,d,f)}}
C.Iv.prototype={
x6(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Iv(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aGv(d){var w=null
return this.x6(w,w,w,w,w,d,w,w,w,w,w,w)},
cOZ(d){var w=null
return this.x6(w,w,w,w,d,w,w,w,w,w,w,w)},
bge(d,e,f){var w=null
return this.x6(d,w,w,w,w,w,w,w,e,w,f,w)},
cPD(d){var w=null
return this.x6(w,w,w,w,w,w,d,w,w,w,w,w)},
cPM(d){var w=null
return this.x6(w,w,w,w,w,w,w,w,w,d,w,w)},
cOX(d){var w=null
return this.x6(w,w,w,d,w,w,w,w,w,w,w,w)},
cPO(d){var w=null
return this.x6(w,w,w,w,w,w,w,w,w,w,w,d)},
cOU(d){var w=null
return this.x6(w,w,d,w,w,w,w,w,w,w,w,w)},
cOP(d){var w=null
return this.x6(w,d,w,w,w,w,w,w,w,w,w,w)},
Gn(d){var w=null
return this.x6(w,w,w,w,w,w,w,d,w,w,w,w)},
cPW(d,e,f,g,h,i,j,k,l,m,n){return this.x6(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cMt(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bSs(d),k=A.aI(d.h(0,"emblem")),j=k==null?o:B.h.M(k),i=A.aI(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Ef.gew(D.Ef))
s=i==null?o:B.h.D(i,18,36)
r=l.$2("position",D.a7p)
q=l.$2("frame",D.a6J)
l=l.$2("texture",D.a6F)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cPW(p,u,t,q,r,A.rh(d.h(0,"ribbon"))?A.GZ(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_R.prototype={
S(){return new C.aCc(A.a([],x.I),D.Pa)},
ge3(){return this.c}}
C.aCc.prototype={
Z(){var w,v=this
v.a3()
v.f=A.Ae(0,1)
w=$.aw()
v.z=new A.at(B.aw,w)
v.Q=new A.at(B.aw,w)
v.lj()
w=v.a
C.bFb(w.c,w.d).bG(new C.dii(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
u=v.z
u===$&&A.c()
w=$.aw()
u.V$=w
u.R$=0
u=v.Q
u===$&&A.c()
u.V$=w
u.R$=0
v.a2()},
lj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LQ(s.c,s.d),$async$lj)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.di6(t,r))
t.aya()
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
gauJ(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
aya(){var w,v,u=this.gauJ(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb4(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb4(0,w==null?"":w)},
chx(d){this.m(new C.di3(this,d))
this.aya()},
Oe(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Oe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nu(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aTp(r.c,r.d,s),$async$Oe)
case 3:w=4
return A.b(t.lj(),$async$Oe)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.oA(t.d,new C.dhF(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dhG(t,p))
t.aya()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BV(p+1,B.ck,B.kV),$async$Oe)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Oe,v)},
Bz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gauJ()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aTp(o.c,o.d,new C.nu(s,r,q,new A.V(p,0,!1))),$async$Bz)
case 3:w=4
return A.b(t.lj(),$async$Bz)
case 4:if(t.c==null){w=1
break}t.m(new C.di7(t))
case 1:return A.h(u,v)}})
return A.i($async$Bz,v)},
OW(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gauJ()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dhO(r),s,null,!0,!0,x.y),$async$OW)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bEY(s.c,s.d,r.a),$async$OW)
case 4:t.m(new C.dhP(t))
w=5
return A.b(t.lj(),$async$OW)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UY(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OW,v)},
zd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bz(),$async$zd)
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
return A.b(C.Se(s,r.r,o,p,q),$async$zd)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hJE(s,r.x,r.r),$async$zd)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LQ(s.c,s.d),$async$zd)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nu(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bu(r.c,r.d,l),$async$zd)
case 11:w=12
return A.b(t.lj(),$async$zd)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zd,v)},
a1W(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1W=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bz(),$async$a1W)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzb(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.A6,new C.di4(t),new C.di5())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new A.o3("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gP(o)
p.push(new A.o3(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(A.hl6(o,new A.tP(s,r,"",p,new A.v7(q.d,null,null,null,null,"","","")),null),$async$a1W)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1W,v)},
OE(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$OE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bz(),$async$OE)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.ahM,null,new C.dhK(t),s,!0,!0,!0,G.aaH,!1,!1,x.N),$async$OE)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cOZ(r)
t.m(new C.dhL(t,q))
s=t.a
w=7
return A.b(C.SR(s.c,s.d,q),$async$OE)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OE,v)},
Ye(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ye=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.ahM,null,new C.dhQ(t),r,!0,!0,!0,G.aaH,!1,!1,x.e),$async$Ye)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dhR(t,s))
r=t.a
w=4
return A.b(C.SR(r.c,r.d,s),$async$Ye)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BV(0,B.e6,B.n0)
case 1:return A.h(u,v)}})
return A.i($async$Ye,v)},
bVc(d){var w=d.bU(),v=B.a.b1(B.o.v(w.gci()),2,"0"),u=B.a.b1(B.o.v(w.gcz()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gzb(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c2f()
if(r.e)w=D.agr
else if(J.ct(r.d)){w=r.y
v=r.gzb(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fzO,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(O.ao8,new C.a_7(w,v,0,q),q),q),B.bx,t,B.am,A.d(u,q,q,q,q,q,q,A.m(q,q,D.kQ.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.ay(q,A.o(q,D.fiZ,B.f,q,q,new A.n(q,q,q,A.l(18),A.a([new A.ac(0,B.G,B.dN.j(0.45),B.J,18)],x.V),B.xd,B.n),q,q,q,q,B.OO,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcLu(),q,q,q,q,q,q,!1,B.a4))
w.push(B.T)
w.push(A.ht(D.bX4,D.hb9,r.gaPu(),q))
B.d.u(u,w)}w=A.as(A.ca(A.x(u,B.l,q,B.e,B.N,0,B.p),B.t,q,B.y,q,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.m(q,q,D.kQ.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.e0:B.BH
u=A.x(A.a([new A.D(D.bGo,w,q),A.E(A.JU(v,new C.dig(r),J.ad(r.d)+1,q,r.gchw(),u,B.aM),1),r.bHu()],x.p),B.l,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c5(q,D.ZZ,new A.an(B.a0,q,B.b1,B.t,A.a([D.aRE,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c2f(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KT(B.e9,"AI",h.gbFm(),!0))
if(h.a.f)f.push(new C.KT(B.lT,"Cover",h.gbQ5(),!1))
if(h.a.f)f.push(new C.KT(B.x5,"Header",h.gbL2(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KT(B.va,"Print",h.gcqI(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hd:B.jb
t=v?"Save":"Edit"
f.push(new C.KT(u,t,v?h.gcx2():new C.di0(h),!1))}if(h.a.f)f.push(new C.KT(B.i_,"Add page",h.gaPu(),!1))
v=C.hF7(h.y.Q)
u=h.gzb(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dNy
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(B.kw.j(0.5),1,B.r,-1)
j=A.o(g,A.X(l.a,D.kQ,g,g,g,17),B.f,g,g,new A.n(g,g,new A.bH(i,i,i,i),new A.be(k,k,k,k),g,new A.a7(B.a5,B.a9,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kQ.j(0.85)
p.push(new A.bz(1,B.bd,A.ay(B.c_,A.x(A.a([k,B.bF,A.d(l.b,g,1,g,g,g,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.N,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.amo(v,u,t+" \xb7 "+s+" "+r,new C.di1(h),A.A(p,B.l,g,B.e,B.i,0,g,g),g)},
Aw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Aw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bz(),$async$Aw)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=A.a3K(B.d.aN(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.dhH(t,p),s,null,!0,!0,x.N),$async$Aw)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zd(),$async$Aw)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Eo(),$async$Aw)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.G0("Swahili (Kiswahili)",!0),$async$Aw)
case 18:w=16
break
case 17:w=19
return A.b(t.cHY(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Aw)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Aw,v)},
a_d(d,e,f,g,h){var w=null,v=A.l(16),u=B.c.j(0.07),t=A.l(16),s=A.K(B.kw.j(0.3),B.r,1),r=x.p
return new A.D(B.cw,A.aM(!1,v,!0,A.o(w,A.A(A.a([A.o(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.n(w,w,w,w,w,B.xd,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,S.La,w,w,w),A.d(g,w,w,w,w,w,w,B.Fa,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.n(u,w,s,t,w,w,B.n),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.di2(d,h),w,w,w,w,w,w,w),w)},
Eo(){return this.bUG()},
bUG(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Eo=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dhU(r),a7,null,!0,!0,x.ei),$async$Eo)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eF("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.dhV(o),a7,null,!0,!0,x.H).fv(new C.dhW(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.c4(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.aj()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.A6[a1]
J.c4(j,i.a)}w=8
return A.b(C.aip(a0,a7,new C.dhX(o),d,l,e,j),$async$Eo)
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
if(l!=null&&a6.a)A.a6(l,!0).eb()
l=o
l.sii($.aw())
J.aTS(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.K(x.q).f
j=n
l.T(A.b2(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcn(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bgg(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bu(j.c,j.d,l),$async$Eo)
case 11:w=12
return A.b(r.lj(),$async$Eo)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.A6[a1].a)
a5=l.cMt(j,12,a7)
l=r.a
w=15
return A.b(C.SR(l.c,l.d,a5),$async$Eo)
case 15:if(r.c!=null)r.m(new C.dhY(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BV(0,B.e6,B.n0)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.cBn("Undo",new C.dhZ(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eo,v)},
G0(d,e){return this.cHZ(d,e)},
cHY(d){return this.G0(d,!1)},
cHZ(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$G0=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eF("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.di9(a0),k,null,!0,!0,x.H).fv(new C.dia(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c4(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(A.a3Z(m,new C.dib(a0)),$async$G0)
case 10:w=8
break
case 9:w=11
return A.b(C.bGJ(new C.dic(a0),m,a2),$async$G0)
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
if(o!=null&&f.a)A.a6(o,!0).eb()
o=a0
o.sii($.aw())
J.aTS(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bgg(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bu(k.c,k.d,o),$async$G0)
case 12:w=13
return A.b(r.lj(),$async$G0)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.Y(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.cBn("Undo",new C.did(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$G0,v)},
bHu(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dhI(v):u
r=A.aH(u,u,u,u,A.X(D.bSI,s?D.kQ:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.ht(A.X(B.wS,B.GR,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.m(u,u,B.GR,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbPG(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.m(u,u,D.kQ.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dhJ(v):u
return A.bm(!0,new A.D(D.bGd,A.A(A.a([r,s,A.aH(u,u,u,u,A.X(B.eI,t<J.ad(v.d)?D.kQ:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_V.prototype={
S(){return new C.bhN(new A.at(B.aw,$.aw()))}}
C.bhN.prototype={
ga32(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.aw()
w.R$=0
this.a2()},
gbTh(){switch(this.ga32()){case"cover":var w=D.dc_
break
case"book":w=D.d78
break
default:w=D.dE3
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.l(26),n=B.kw.j(0.5),m=x.p,l=A.A(A.a([D.dNz,B.as,D.bLW,A.aH(p,p,p,p,B.lt,p,p,p,new C.dk4(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jw(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dk5(q),q.ga32()==="page",p,p,p,p))
if(q.a.d)k.push(A.jw(p,p,p,D.h5H,p,new C.dk6(q),q.ga32()==="book",p,p,p,p))
k.push(A.jw(p,p,p,D.fTl,p,new C.dk7(q),q.ga32()==="cover",p,p,p,p))
k=A.c_(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bA(p,new A.b6(4,A.l(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kq,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbTh(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.L7,p,p,p)
w.push(A.mZ(p,B.c.j(0.08),r,B.ht,new C.dk8(q,s),p,p,p,p))}return A.eI(p,B.Cf,A.ca(A.x(A.a([l,B.T,D.h90,B.am,k,B.af,j,B.P,A.c_(B.bI,w,B.br,p,6,6),B.aB,A.de(D.bX1,p,D.h9N,new C.dk9(q,d),A.bp(B.b8,p,p,p,p,B.p3,p,p,new A.ba(A.l(16),B.a1),p,p,p)),B.ax,D.h3T],m),B.E,p,B.e,B.N,0,B.p),B.t,p,B.y,p,p,B.fu,p,p,B.ah),p,p,p,B.OL,p,B.d7,p,new A.ba(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a_T.prototype={
S(){return new C.aCf(A.a([],x.gA))},
ge3(){return this.c}}
C.aga.prototype={}
C.aCf.prototype={
Z(){this.a3()
this.lj()},
lj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sj(p.c,p.d),$async$lj)
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
return A.b(C.bFb(r.c,q),$async$lj)
case 6:j=e
i=J
w=7
return A.b(C.LQ(t.a.c,q),$async$lj)
case 7:m.push(new l.aga(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dix(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lj,v)},
bbv(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Rb(d,e){return this.cj5(0,e)},
cj5(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ce(A.ee(new C.diw(u,e),!0,null,x.y)),$async$Rb)
case 2:t=g
w=3
return A.b(u.lj(),$async$Rb)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.T(D.aVB)
return A.h(null,v)}})
return A.i($async$Rb,v)},
G2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$G2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.T(D.aVw)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahJ(s.c,s.d),$async$G2)
case 5:q=e
w=6
return A.b(t.lj(),$async$G2)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Rb(0,B.d.fb(t.d,new C.diB(q))),$async$G2)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Se(p,s.f,r,n,o),$async$G2)
case 10:m=e
w=11
return A.b(t.lj(),$async$G2)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.T(D.aVB)
case 1:return A.h(u,v)}})
return A.i($async$G2,v)},
QC(d,e){return this.cuK(0,e)},
cuK(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.diA(t,e),s,null,!0,!0,x.y),$async$QC)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a4a(s.c,s.d,e.a),$async$QC)
case 4:w=5
return A.b(t.lj(),$async$QC)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QC,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bHx(w[u]))
if(m){t=6-o.d.length
w=A.l(18)
v=B.c.j(0.05)
s=A.K(B.kw.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.ay(n,new A.fG(0.7142857142857143,A.o(n,A.x(A.a([D.dNA,B.af,D.eym,B.ax,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.m(n,n,D.kQ.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.b9,B.i,0,B.p),B.f,n,n,new A.n(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcLq(),n,n,n,n,n,n,!1,B.a4))}w=A.l(22)
v=A.K(B.kw.j(0.85),B.r,1.6)
s=A.ay(n,A.o(n,D.c49,B.f,n,n,new A.n(B.w.j(0.3),n,A.K(B.kw.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.diC(d),n,n,n,n,n,n,!1,B.a4)
r=A.l(14)
q=B.w.j(0.3)
p=A.K(B.kw.j(0.5),B.r,1)
w=A.o(n,A.A(A.a([s,B.bc,D.bMk,A.o(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fyO,n,n,n),B.f,n,n,new A.n(q,n,p,r,n,n,B.n),n,n,n,n,B.hm,n,n,n)],l),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.n(n,n,v,w,n,D.cab,B.n),n,n,n,B.Ox,D.bE6,n,n,n)
if(o.e)k=D.agr
else k=k.length===0?D.beh:A.cj(new C.diD(k))
return A.c5(n,D.ZZ,new A.an(B.a0,n,B.b1,B.t,A.a([D.aRE,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bHx(d){var w,v,u=this,t=null,s=u.bbv(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.dv(B.dC,B.z,B.f,new A.a5(300,420,new C.a_7(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.ay(t,A.o(t,D.c3r,B.f,t,t,new A.n(B.w.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.diu(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.fyr,t,t,t)
v=r===1?"page":"pages"
return A.ay(t,A.x(A.a([new A.fG(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.m(t,t,D.kQ.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.div(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KT.prototype={}
C.a_7.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.A6,new C.cQE(m),new C.cQF()),j=m.c,i=D.Ef.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mu:B.b9
v=new C.cQG(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.ev3,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b5(l,l,l,new C.beZ(j.x,h,l),B.az),0,0,0),A.ao(0,A.o(l,l,B.f,l,l,new A.n(l,l,l,l,l,new A.a7(B.a5,B.a9,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.o(l,l,B.f,l,l,new A.n(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.ao9,8,0.85,2.2),v.$4(D.bJ7,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ao9,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bJ3,A.b5(l,l,l,new C.beQ(h,l),B.az),l),0,0,0))
r=A.X(D.aD1[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.m(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aAd,l,l),B.K,l,l)
p=A.o(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.m(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cL,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.m(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bJz,A.x(o,B.l,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b5(l,l,l,new C.aJk(l),D.fnR),l,l,l,46,0,l))
return A.o(l,A.bv(D.af3,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.n(l,l,l,D.af3,i,new A.a7(B.ay,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.beZ.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e_()
g.cU(11)
switch(this.b){case"plain":return
case"linen":$.S()
w=A.L()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.r(0,t),new A.r(u,t),w)
$.S()
s=A.L()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.r(r,0),new A.r(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.S()
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.O(new A.r(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.S()
l=A.a([],n)
j=new A.aG(m.r,B.aj,null,null,l)
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
m=new A.bx()
l.push(m)
l=j.f
if(l!=null)m.ak(l)
j.ab()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.S()
w=A.L()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.S()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aE(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.beQ.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.S(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.aa
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.faR,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aG(k,B.aj,null,null,s)
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
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=i.j(0.9).gp(0)
d.O(new A.r(r+p*9,q+o*9),3,s)}},
aE(d){return!d.b.A(0,this.b)}}
C.uT.prototype={}
C.a_r.prototype={
S(){return new C.beX()}}
C.beX.prototype={
goy(){var w=this.d
return w===$?this.d=this.a.c:w},
gzb(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.at(new A.bb(w.b,B.b7,B.aP),$.aw())}return v},
gaDG(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.at(new A.bb(w.c,B.b7,B.aP),$.aw())}return v},
gatg(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.at(new A.bb(w.y,B.b7,B.aP),$.aw())}return v},
t(){var w=this,v=w.gzb(0),u=v.V$=$.aw()
v.R$=0
v=w.gaDG()
v.V$=u
v.R$=0
v=w.gatg()
v.V$=u
v.R$=0
w.a2()},
atU(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jw(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d9p(this,f,u),e===u,s,s,s,s))}return A.c_(B.bI,r,B.br,s,6,8)},
azF(d){var w=null,v=B.c.j(0.07)
return A.bA(w,new A.b6(4,A.l(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lY,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goy(),a0=f.gzb(0),a1=a0.a.a,a2=f.gaDG(),a3=a2.a.a,a4=f.gatg(),a5=d.bge(a4.a.a,a3,a1)
a1=x.w
a3=A.aE(a6,e,a1).w
a1=A.aE(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,new A.dv(B.dC,B.z,B.f,new A.a5(270,370,new C.a_7(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.azF("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d9O(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.azF("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d9P(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.A6[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.o(e,e,B.f,e,e,new A.n(e,e,new A.bH(o,o,o,o),e,e,new A.a7(B.ay,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aE
v.push(A.ay(e,A.x(A.a([p,B.cS,A.d(t.b,e,e,e,e,e,e,new A.G(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d9Q(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.c_(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b8.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.ey:B.L,2,B.r,-1)
q.push(A.ay(e,A.o(e,A.X(D.aD1[n],B.c,e,e,e,24),B.f,e,e,new A.n(p,e,new A.bH(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d9R(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.c_(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.azF("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d9S(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,I.vU,e,e,e)
m=A.a([],w)
for(l=D.Ef.gdQ(D.Ef),l=l.gae(l);l.C();){k=l.gP(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ey:B.aT
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.o(e,e,B.f,e,e,new A.n(j,e,new A.bH(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aE
m.push(A.ay(e,A.x(A.a([j,B.bF,A.d(i,e,e,e,e,e,e,new A.G(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d9T(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.c_(B.bI,m,B.br,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,I.vU,e,e,e)
k=f.goy()
return new A.D(new A.P(0,0,0,a3.f.d),A.bm(!0,new A.cN(new A.aY(0,1/0,0,a1.a.b*0.92),A.cv(A.a([D.h3j,B.af,d,B.aO,a0,B.T,a2,B.aB,D.h9y,B.P,v,B.aB,D.h3s,B.P,q,B.aB,a4,B.aB,p,B.P,m,B.aB,l,A.l0(e,9,""+B.h.U(f.goy().f),36,18,new C.d9U(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,I.vU,e,e,e),B.am,f.atU(D.a7p,f.goy().r,new C.d9V(f),D.dHj),B.af,A.d("BORDER",e,e,e,e,e,e,I.vU,e,e,e),B.am,f.atU(D.a6J,f.goy().w,new C.d9W(f),D.dHp),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,I.vU,e,e,e),B.am,f.atU(D.a6F,f.goy().x,new C.d9Y(f),D.dJ4),B.am,A.iV(e,B.b8,e,B.ag,e,new C.d9Z(f),e,e,e,D.fYu,f.goy().z),B.bx,A.bJ(D.h20,e,new C.da_(f,a6),A.bp(B.b8,e,e,e,e,B.p3,e,e,new A.ba(A.l(16),B.a1),e,e,e))],w),e,e,B.anE,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aJk.prototype={
a4(d,e){var w,v,u,t=new A.aG($.S().r,B.aj,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bx())
u=A.L()
u.san(D.caT.aD(0,new A.a4(0,0,0+w,0+v)))
d.af(t,u)},
aE(d){return!1}}
C.bkk.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.S()
w=A.L()
w.san(D.c9T.aD(0,new A.a4(0,0,a2,a3)))
a4.aF(new A.a4(0,0,a2,a3),w)
v=B.h.cC(a1/112)
u=new A.e_()
u.cU(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.dbZ[u.aw(9)]
j=u.aw(14)
J.bs(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a4(n,j,n+m,j+l)
h=A.by(i,B.hG)
g=new A.ar(B.S,B.Q,B.V,B.X,B.U)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.w,0.45)
e.toString
g.san(new A.a7(B.a5,B.a9,B.x,A.a([f,k,e],w),d,d).aD(0,i))
a4.ar(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.S,B.Q,B.V,B.X,B.U)
e.r=B.kw.j(0.55).gp(0)
a4.aF(new A.a4(g,j,h,j+2),e)
e=new A.ar(B.S,B.Q,B.V,B.X,B.U)
e.r=B.kw.j(0.4).gp(0)
a4.aF(new A.a4(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.san(D.c9b.aD(0,new A.a4(0,r,a2,q)))
a4.aF(new A.a4(0,r,a2,q),p)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.w.j(0.5).gp(0)
p.y=B.kY
a4.aF(new A.a4(0,q,a2,q+14),p)}t=A.L()
t.r=D.bi8.j(0.72).gp(0)
a4.aF(new A.a4(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bT(B.z,0.5,B.x,d,0,A.a([D.bqG.j(0.22),B.L],w),d,d).aD(0,A.bW(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aE(d){return!1}}
C.bd8.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.bN(new A.n(A.ap(D.kQ,D.bw1,w/4),o,new A.bH(B.a1,new A.ax(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.Mm,o,o,B.n),B.bk,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aNf,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.o(o,o,B.f,o,o,new A.n(B.kw.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.o(o,A.x(t,B.l,o,B.r0,B.i,0,B.p),B.f,o,o,new A.n(o,o,o,D.b6e,u,D.caR,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dp,18)],v)
t=A.ao(o,A.b5(o,o,o,new C.aJk(o),D.fnM),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aXi(p.y,r,B.j6,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bA(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,B.j6.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fNm,!0,B.a7,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,B.j6.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bA(o,B.eN,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,B.j6.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fDN,!0,B.a7,B.B0,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fNe,o,o,o),B.ax,A.d(q.$1(r),o,o,o,o,o,o,A.m(o,o,B.j6.j(0.5),o,o,o,o,o,o,o,o,11,B.cL,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.E(A.o(o,o,B.f,D.GA.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fv,A.d("\u2766",o,o,o,o,o,o,A.m(o,o,D.GA.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.o(o,o,B.f,D.GA.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.i,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.m(o,o,B.j6.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Zm(A.cS(A.a([A.cS(o,o,o,o,o,o,o,o,o,D.fH1,B.a.aA(k,0,1)),A.cS(o,o,o,o,o,o,o,o,o,o,B.a.b_(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.m(o,o,B.j6.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ca(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.ig,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.m(o,o,B.j6.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.o(o,A.bv(B.Mm,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bIA,A.x(s,B.al,o,B.e,B.i,0,B.p),o),A.ao(0,new A.bN(new A.n(o,o,o,o,o,new A.a7(B.a5,B.a9,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bk,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.n(o,o,o,B.Mm,v,D.cbo,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.amp.prototype={
S(){return new C.amq(new A.eF(0,$.aw()),new C.bUg(),new C.amI(),D.hMr,null,null)},
gd1(){return this.d}}
C.a26.prototype={
a7(){return"_Step."+this.b}}
C.amq.prototype={
gCI(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bF7(w.c,6,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.Nb(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gUe(){var w=this.ghd(0)
return w.gzv()==null?"Babu":B.a.i(w.gzv().b)},
Z(){var w,v=this
v.a3()
w=v.ghd(0).gzv()
w=w==null?null:w.c
v.r.b=w===D.oB
w=v.q7(new C.bSC(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a3_("Come closer, my children. I am "+v.gUe()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.c()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.V$=$.aw()
v.R$=0
w.bwU()},
a3_(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dh(B.a0J,new C.bSw(w))},
btg(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bSF(v))},
aej(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bt8(){return this.bb2()},
bb2(){var w=this,v=w.gCI()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bSx(w))
w.a3_(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cz(B.mf,new C.bSy(w))},
cMA(){var w=this
w.m(new C.bSB(w))
w.a3_(w.gCI()[w.as].a)},
Lj(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.ae9)return
w=p.gCI()
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
t.r=s.a+1.5}q=new A.e_()
q.cU(v*7+d)
p.m(new C.bSA(p,d,u,q))
p.a3_(u?D.ds4[q.aw(4)]+" "+w[p.as].d:D.doB[q.aw(3)]+" "+w[p.as].d)},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCI()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bHo(t.at,t.ay,p)
t.m(new C.bSD(t,s))
t.a3_(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BR(t.a.d,s),$async$kO)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BS(r.d,r.c.a,"fire",t.at*10),$async$kO)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bSE())
w=1
break
case 4:++t.as
t.bb2()
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.YX,new A.an(B.a0,v,B.ad,B.t,A.a([A.bS(0,new A.e6(A.b5(v,v,v,new C.aXn(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.cd6(0),B.b4,w.bSr()],t),B.l,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cd6(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.Qx,s,s,s,new C.bSz(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCI().length;++w){v=t.as
if(w<v||t.Q===D.b2x)v=B.cV
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.o(s,s,B.f,s,s,new A.n(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bDR,s,s,s,22))}p=A.E(A.x(A.a([D.fVd,A.A(p,B.l,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.l(14)
u=A.K(B.fL,B.r,1)
return new A.D(D.bJM,A.A(A.a([r,p,A.o(s,A.d("\ud83d\udd25 "+B.h.U(t.cy*100)+"%",s,s,s,s,s,s,B.iH,s,s,s),B.f,s,s,new A.n(B.b5,s,u,v,s,s,B.n),s,s,s,s,B.hm,s,s,s)],q),B.l,s,B.e,B.i,0,s,s),s)},
bSr(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghd(0).gzv()
if(h==null)w=1
else w=h.c===D.oB?0:1
v=j.dx
u=j.db
t=D.qq.j(0.96)
s=A.l(22)
r=A.K(B.cV,B.r,3)
q=A.b5(i,i,i,new C.bpW(w,i),B.az)
p=A.d(j.Q===D.ae9?j.gUe()+" asks":"Elder "+j.gUe(),i,i,i,i,i,i,D.aWQ,i,i,i)
o=j.db
o=B.a.aA(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.ay(B.c_,A.A(A.a([new A.a5(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bF,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aX3,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbtf(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aaq("Sit down by the fire",j.gbt7()),i,i,i)
break
case 1:v=A.as(j.aaq("Ask me, Elder",j.gcMz()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCI()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ax(D.lG,2.5,B.r,-1)
v.push(A.ay(i,A.o(i,A.d(u[m],i,i,i,i,i,i,D.aX_,B.K,i,i),B.f,i,D.afG,new A.n(D.alb,i,new A.bH(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,M.wF,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bSt(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.c_(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kc:A7.ar8
u=A.X(u,v?B.ep:D.lG,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.m(i,i,v?B.ep:D.lG,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCI().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.aaq(v,j.gqs(j))],n),B.l,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCI().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aXh,i,i,i)],n)
u=j.cx
if(u>0){u=C.aRB(u)
q=C.aRB(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.acA,i,i,i))}v.push(B.P)
v.push(j.aaq("Back to the games",new C.bSu(j)))
v=A.x(v,B.l,i,B.e,B.i,0,B.p)
break
default:v=i}return A.o(i,A.x(A.a([o,B.T,v],n),B.E,i,B.e,B.N,0,B.p),B.f,i,i,new A.n(t,i,r,s,D.aEA,i,B.n),i,i,i,B.yW,B.bl,i,i,i)},
aaq(d,e){var w=null,v=A.l(16),u=A.K(B.cV,B.r,2)
return A.ay(w,A.o(w,A.d(d,w,w,w,w,w,w,S.La,w,w,w),B.f,w,w,new A.n(D.lG,w,u,v,w,w,B.n),w,w,w,w,D.bHt,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bpW.prototype={
a4(d,e){L.hkR(d,e.ek(B.J),e.gdk()*0.45,this.b,0,0.4)},
aE(d){return d.b!==this.b}}
C.aCd.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bUg.prototype={}
C.td.prototype={}
C.bpX.prototype={}
C.amI.prototype={
MM(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ih_(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aXn.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.GC(l.d.MM(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bs(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cC0(d,j)
l.bR_(d,j)
l.cKl(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bs(t.save())
t.translate(225,580)
d.oq(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.S()
q=A.L()
p=x.O
o=x.n
q.san(A.wd(B.J,r,A.a([D.buK.j(0.55*s),E.NO.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bU8(l,d,j,i)),new A.y(540,new C.bU9(l,d,j,i)),new A.y(546,new C.bUa(l,d,j,i)),new A.y(574,new C.bUb(l,d,j,i)),new A.y(612,new C.bUc(l,d,j,i)),new A.y(650,new C.bUd(l,d,j,i)),new A.y(656,new C.bUe(l,d,j,i))],x.E)
B.d.b0(n,new C.bUf())
for(m=0;m<7;++m)n[m].b.$0()
l.bHQ(d,j,i)
l.bUE(d,j)
t.restore()
$.S()
t=A.L()
t.san(A.wd(new A.r(w/2,v*0.6),e.gaoF()*0.75,A.a([B.L,D.bi1],p),A.a([0.55,1],o),B.x,k,k,0))
d.aF(new A.a4(0,0,0+w,0+v),t)},
aE(d){return d.c!==this.c||d.d!==this.d},
cC0(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e_()
h.cU(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.h.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.euB),C.iF(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.h.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.S()
k=A.a([],t)
l=new A.aG(l.r,B.aj,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ab()
j=r-3
r=new A.ce(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.ak(i)
l.ab()
s=new A.ce(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.ak(r)
l.ab()
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.b=B.aa
s.c=1.6
s.r=D.bkN.gp(0)
s.d=B.bG
s.e=B.dQ
d.af(l,s)}},
bR_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aBw[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bX(new A.r(p,m),n*0.74,q*0.5)
k=B.yH.j(v)
$.S()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=k.gp(0)
d.c1(l,j)
q=A.bX(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.wj.j(u).gp(0)
d.c1(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.h.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.r=D.aiy.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cKl(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bEw(d,D.eux,0.9,e,D.hI5,!1,!1,D.b2u,1,!1)
w=$.S().r
v=x.v
u=new A.aG(w,B.aj,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bx())
t=A.L()
t.r=D.akv.gp(0)
d.af(u,t)
C.bEw(d,D.euz,0.95,e,D.hI0,!1,!1,D.b2v,1,!0)
t=new A.aG(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.ce(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.ce(431,553,421,548))
t.E(new A.bx())
u=A.L()
u.r=E.Gh.gp(0)
d.af(t,u)
u=A.bX(D.euy,8,28)
t=A.L()
t.r=D.bx7.gp(0)
d.c1(u,t)
C.bEw(d,new A.r(-30+B.h.F(e/26,1)*510,492),0.82,e,D.hI6,!0,!1,D.XK,1,!1)
t=B.h.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c1(A.bX(new A.r(s+q*16,r-6),16,11),C.iF(D.akm,1.8))
u=q<0
C.bEw(d,new A.r(s-q*6,r),0.62,e,D.hI8,!1,u,D.XK,2.2,!1)
C.bEw(d,new A.r(s-q*32,r+4),0.58,e+1,D.hI4,!1,u,D.XK,2.2,!1)
this.bXn(d,D.euc,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bX(new A.r(o,n),8,11)
k=p===1
j=k?D.aki:D.akU
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=j.gp(0)
d.c1(l,i)
l=k?D.aki:D.akU
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.b=B.aa
k.c=1
k.r=B.at.gp(0)
k.d=B.bG
k.e=B.dQ
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.b=B.aa
k.c=1
k.r=B.at.gp(0)
k.d=B.bG
k.e=B.dQ
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bX(D.a9A,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.aiY.gp(0)
d.c1(u,t)
u=A.bX(D.a9A.a5(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bmZ.gp(0)
d.c1(u,t)
t=new A.aG(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bx())
u=A.L()
u.r=D.bna.gp(0)
d.af(t,u)
u=D.a9A.a5(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.ic.gp(0)
d.O(u,1.1,t)
v=new A.aG(w,B.aj,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.ce(180,588+w*(h?6:0),178,595))
d.af(v,C.iF(D.aiY,3.5))},
bXn(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a5(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.b=B.aa
m.c=2
m.r=D.Za.gp(0)
m.d=B.bG
m.e=B.dQ
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bX(k,17,32)
v=$.S()
r=A.L()
r.r=D.Gf.gp(0)
d.c1(w,r)
r=A.bX(k.a5(0,D.etE),7,26)
w=A.ap(D.Gf,B.w,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c1(r,q)
v=new A.aG(v.r,B.aj,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bx())
s=A.L()
s.r=D.Gf.gp(0)
d.af(v,s)
s=A.bX(k.a5(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.Gf.gp(0)
d.c1(s,v)
v=-11+l
d.ah(k.a5(0,new A.r(22,v)),k.a5(0,new A.r(21,-17+l)),C.iF(D.Za,1.6))
d.ah(k.a5(0,new A.r(26,v)),k.a5(0,new A.r(28,-16+l)),C.iF(D.Za,1.6))
v=k.a5(0,new A.r(26,-8+l))
s=A.L()
s.r=B.w.gp(0)
d.O(v,0.9,s)
d.ah(k.a5(0,new A.r(26,-3+l)),k.a5(0,new A.r(26,1+l)),C.iF(D.bpX,1.4))
d.ah(k.a5(0,D.ewB),k.a5(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iF(D.Gf,2.4))},
bUC(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bX(new A.r(225+u*36,574+(t*13+6)),8,11)
$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.bvL.gp(0)
a6.c1(u,t)}}u=A.bX(D.a9C.a5(0,B.cz),17,52)
$.S()
t=A.L()
t.r=D.bhA.gp(0)
a6.c1(u,t)
t=A.bX(D.a9C.a5(0,B.cz),12,44)
u=D.blc.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c1(t,s)
for(r=0;r<3;++r){v=D.do2[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=7
o.r=D.Gs.gp(0)
o.d=B.bG
o.e=B.dQ
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.BU.j(0.6)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.b=B.aa
n.c=2
n.r=t.gp(0)
n.d=B.bG
n.e=B.dQ
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f6X,D.f7v,D.f8B,D.f8W,D.f8z]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bt1,D.bph,D.bvb][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.S()
f=A.a([],q)
a2=new A.aG(g.r,B.aj,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ab()
g=a0+d*0.6
a3=new A.kp(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.ak(a4)
a2.ab()
g=new A.kp(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.ak(a3)
a2.ab()
g=new A.bx()
f.push(g)
f=a2.f
if(f!=null)g.ak(f)
a2.ab()
g=new A.ar(B.S,B.Q,B.V,B.X,B.U)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.h.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=F.akS.j((1-a5)*0.9)
$.S()
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.h.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.aiy.j(0.1*(1-a5))
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bUE(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.h.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bxi.j(0.18*p)
$.S()
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.S,B.Q,B.V,B.X,B.U)
n.r=D.bqL.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c6q(d,e){switch(d){case 0:return e.b?D.hI1:D.b22
case 1:return e.b?D.hI7:D.b20
case 2:return D.b2_
case 3:return D.b1Z
case 4:return D.b21
default:return D.b23}},
aDU(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Rv(d,e,f,g){var w,v=this,u=D.a6R[e],t=v.c6q(e,g),s=new C.bpX(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a6R[e],l=e===0
m=B.h.D(((l?D.aN7:D.aNd).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a9H
s.as=D.EH
if(l){s.a=o?v.aDU(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.r(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.r(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.EH
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.etM
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.ev7
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
s.Q=D.exx
s.as=D.aNq}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDU(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDU(f,e*3)
s.b=0.5
s.c=0.4}}C.hDL(d,u.a,u.b*1.2,t,s,f,e,null)},
bHQ(d,e,f){var w=new C.bU7(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd2(d){return this.c}}
C.agj.prototype={
a7(){return"_Stand."+this.b}}
C.aeg.prototype={}
C.lt.prototype={}
C.bSS.prototype={
bCr(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
Gi(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b0(r,new C.bST())
return r},
arW(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aND(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
an2(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gzv(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b0(w,new C.bSU(this))
return B.d.gH(w)}}
C.auP.prototype={}
C.zz.prototype={}
C.alg.prototype={
gCe(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bNG(),A.U(w).k("Y<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MW.prototype={
gapY(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCe(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d2R(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapY(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lt(B.a.i(s.a),p,B.d.cm(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bbm.prototype={}
C.aak.prototype={}
C.biD.prototype={}
C.agh.prototype={}
C.akz.prototype={
S(){return new C.akA(B.bC,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.akA.prototype={
gN2(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bF7(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gbbo(){var w,v=this,u=v.e
if(u===$){w=v.q7(v.gcd8())
v.e!==$&&A.bE()
v.e=w
u=w}return u},
Z(){this.a3()
this.gbbo().fX(0)},
t(){this.gbbo().t()
this.bwP()},
fX(d){this.m(new C.bLP(this))},
cd9(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fG(0,v)
if(w.c!=null)w.m(new C.bLK())},
b9K(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gN2()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.biD(u,(u+0.5)/v,w[t.x].b[u]))},
fG(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bLQ())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c9g()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gN2()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.h.U((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.ats(v,0.8,B.cV)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.ats(m.cy,0.8,F.nq)
m.b_c("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.ats(q,0.88,D.lG)
p=m.gN2()[m.x]
n=p.c
if(u===n){m.b_c("The right gourd fell! It was "+p.b[n]+".")
return}}}},
ats(d,e,f){var w,v,u,t=new A.e_()
t.cU(B.h.U(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agh(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b_c(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.QD()}},
c9g(){var w=this
if(w.x+1>=w.gN2().length){w.QD()
return}++w.x
w.b9K()},
QD(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$QD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gN2().length
r=C.bHo(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bLI())
w=2
return A.b(C.BR(u.a.d,r),$async$QD)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BS(t.d,t.c.a,"catch",u.z),$async$QD)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bLJ())
return A.h(null,v)}})
return A.i($async$QD,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cd7()
else w=v.ch?v.cda():A.as(new A.D(B.eA,A.x(A.a([D.aYf,B.P,D.fWV,B.T,D.h25,B.e4,C.uw("Play",v.geX(v),B.cV,B.he,D.fC)],x.p),B.l,u,B.e,B.N,0,B.p),u),u,u,u)
return new C.tD("Calabash Catch",w,B.f8,u)},
cda(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hE:B.HX
p.push(A.X(u,v?B.aA:B.bV,r,r,r,22))}p.push(B.b4)
v=s.x
u=s.gN2()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aWP,r,r,r))
p.push(B.bc)
v=A.l(14)
p.push(A.o(r,A.d(""+s.z,r,r,r,r,r,r,B.iH,r,r,r),B.f,r,r,new A.n(B.bw,r,r,v,r,r,B.n),r,r,r,r,B.CE,r,r,r))
p=A.A(p,B.l,r,B.e,B.i,0,r,r)
v=A.l(18)
t=A.K(B.cV,B.r,3)
return A.x(A.a([new A.D(D.bFe,p,r),A.o(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fGU,B.K,r,r),B.f,r,r,new A.n(D.qq,r,t,v,r,r,B.n),r,r,r,B.f3,B.bl,r,r,1/0),B.am,A.E(A.cj(new C.bLO(s)),1)],q),B.l,r,B.e,B.i,0,B.p)},
cd7(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.q2,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gN2().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.W6,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cv(A.a([D.beZ,u,t,B.aO,new C.Ix(s,r,w.cx,v),B.aO,A.as(C.uw("Back to the games",new C.bLH(w),B.cV,B.kb,D.fC),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bdO.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.S(),a3=A.L()
a3.san(A.jz(B.J,new A.r(0,a0),D.d5G,F.aBN,B.x,e))
a4.aF(new A.a4(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=F.NS.gp(0)
a4.O(new A.r(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aG(a2.r,B.aj,e,e,w)
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
w.r=D.bm9.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aG(a2.r,B.aj,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.ce(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.ce(r+14,t,r+26,w))
a2.E(new A.bx())
w=A.L()
w.r=D.ahA.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cqV[q]
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.ahA.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.agS.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bn7.gp(0)
a4.aF(new A.a4(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.ajd.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bX(new A.r(u,s),12,54)
$.S()
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=D.lG.j(0.6).gp(0)
a4.c1(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bs(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.aii.gp(0)
a4.O(D.et0,14,m)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.bs3.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.et1,D.eu8,m)
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.san(new A.am9(D.ewi,46,D.dev,B.vm,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bX(D.ewp,8,12)
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=B.c.j(0.35).gp(0)
a4.c1(m,l)
k=new A.iD(new A.ev(n.c,e,e,B.cN,e,e,e,e,e,e,D.fEJ),B.K,B.c1,new A.ji(1),e,e,3,e,B.c2,e,B.cx)
k.nC(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.by(A.bX(B.cM,m.gba(m)+8,l),B.fR)
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=D.qq.gp(0)
a4.ar(j,l)
l=new A.ar(B.S,B.Q,B.V,B.X,B.U)
l.r=D.lG.gp(0)
l.b=B.aa
l.c=1.5
a4.ar(j,l)
l=k.b
m=l.c
l=l.a.c
k.a4(a4,new A.r(-m/2,4-l.gba(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.ikO(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dN,(w+1)/2)
h=A.bX(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aG($.S().r,B.aj,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.ce(h.gbE().a,s+8,w+8,s))
a3.E(new A.bx())
m=A.L()
m.r=D.a_4.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.BU.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=F.nq.gp(0)
a4.aF(new A.a4(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bmf.gp(0)
a4.c1(new A.a4(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=g.e.j(B.h.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fD(e,B.cx,e,e,e,A.cS(e,e,e,e,e,e,e,e,e,A.m(e,e,B.cV.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,G.DS,e,e),"+"+a2),B.a7,B.c1,e,B.dK,B.c2)
k.ep()
k.a4(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aE(d){return!0}}
C.QV.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b5(v,v,v,new C.aCb(w.c,w.f,v),B.az),s=A.l(10),r=A.K(B.bE,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cS,A.o(v,A.d(w.d,v,1,B.a2,v,v,v,D.fxf,v,v,v),B.f,v,v,new A.n(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n3,v,v,v)],x.p),B.l,v,B.e,B.N,0,B.p),v)},
ga_(d){return this.e}}
C.aCb.prototype={
a4(d,e){var w=e.ek(B.J),v=e.gdk(),u=this.c?0.8:0
return L.hkR(d,w,v*0.44,this.b,0,u)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aAE.prototype={}
C.avs.prototype={
S(){return new C.avt(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.avt.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hJo(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gaFY(){var w=this.z
return w===$?this.z=this.XI(0):w},
gj2(){var w,v=this.Q
if(v===$){w=this.gkT()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c0(w,-1,!1,x.S)}return v},
XI(d){var w,v,u,t,s=this.gkT()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aAE(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aAE(v[t],u[t],-1))
v=new A.e_()
v.cU(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dn(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eN$
u.b=!1
B.d.a8(u.a)
u=u.goF()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qJ()}this.bxh()},
cSG(d,e){var w,v,u,t,s,r=this
if(d>=r.gj2().length||r.gj2()[d]!==-1||B.d.q(r.gj2(),e))return
w=r.gaFY()[e]
v=r.gkT()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.crA(r,e,w,v))
A.cz(B.lM,new C.crB(r))
return}++r.r
u=A.bo(null,B.hy,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.crC(r,d,e,w,v))
u.cs(0)},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkT()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cB(n,0,new C.crD())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.crE(t,r))
w=5
return A.b(C.BR(t.a.d,r),$async$kO)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BS(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kO)
case 6:t.ch=f
if(t.c!=null)t.m(new C.crF())
w=1
break
case 4:for(o=t.as,n=new A.dn(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a8(p.a)
p=p.goF()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qJ()}o.a8(0)
t.m(new C.crG(t))
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.q2,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.W6,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tD(q,A.cv(A.a([D.agq,w,v,B.aO,new C.Ix(u,t,r.ch,p),B.aO,A.as(C.uw("Back to the games",new C.crw(d),B.cV,B.kb,D.fC),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f8,p)}w=r.gkT()
v=r.e
s=w[v]
return new C.tD(q,new A.D(B.t7,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,B.aWK,B.K,p,p),A.E(A.cj(new C.crx(r,s)),1)],x.p),B.l,p,B.e,B.i,0,B.p),p),B.f8,p)}}
C.bdh.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cRI(),A.U(b2).k("Y<1>")).gJ(0),b4=a9.b,b5=b4.a5(0,B.JZ)
$.S()
w=A.L()
w.r=D.lH.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a5(0,D.esN)
u=A.L()
u.r=B.qs.j(0.5).gp(0)
u.c=10
u.d=B.bG
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.e6.az(0,B.h.D(b2[p],0,1))
l=$.S().r
k=A.a([],s)
j=new A.aG(l,B.aj,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ab()
o=new A.ce((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ak(n)
j.ab()
if(m<1)for(o=new A.aG(l,j.b,j.c,b0,A.br(k,!0,r)),n=A.a([],q),i=new A.uR(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bi(A.jH(b1));--h
g=new A.BO(i,h)
f=0
for(;;){i.jP()
e=n[h].b
e===$&&A.c()
if(!(f<e.a.length()))break
i.jP()
e=n[h].b
e===$&&A.c()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.S()
a1=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a1.r=B.aT.gp(0)
a1.b=B.aa
a1.c=3
b6.af(new A.aG(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aG(l,j.b,j.c,b0,A.br(k,!0,r)),n=A.a([],q),k=new A.uR(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jH(b1));--a0
k.jP()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.S()
a4=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a4.r=D.GG.gp(0)
a4.b=B.aa
a4.c=h
a4.d=B.bG
b6.af(new A.aG(l,a2,b0,new A.b7([new A.BO(k,a0),0,a1*m,!0]),a3),a4)
k.jP()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.jP()
a5=n[a0].W8(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bX(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a3.r=B.be.gp(0)
b6.c1(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iD(D.fwJ,B.a7,B.c1,new A.ji(1),b0,b0,b0,b0,B.c2,b0,B.cx)
a8.ep()
a8.a4(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aE(d){return!0}}
C.azp.prototype={
S(){return new C.azq(A.aR(x.S))},
gd1(){return this.d}}
C.azq.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hKi(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
Z(){this.a3()
this.b9T()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
b9T(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.dh(B.t2,new C.cGz(this))},
bqR(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkT()[v.e]
if(w.e[d]===w.b)v.m(new C.cGH(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cGI(v,d))
A.cz(B.iR,new C.cGJ(v))}},
cY9(){var w=this
if(!w.as&&w.f<w.gkT()[w.e].d.length)w.m(new C.cGK(w))},
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
t.m(new C.cGL(t,s))
w=5
return A.b(C.BR(t.a.d,s),$async$kO)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BS(q.d,q.c.a,"who",t.r),$async$kO)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cGM())
w=1
break
case 4:t.m(new C.cGN(t))
t.b9T()
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkT().length+" guessed",a2,a2,a2,a2,a2,a2,B.q2,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.W6,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tD(a1,A.cv(A.a([D.bf9,w,v,B.aO,new C.Ix(u,t,a0.ax,a2),B.aO,A.as(C.uw("Back to the games",new C.cGB(a3),B.cV,B.kb,D.fC),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f8,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkT()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.Lg,B.K,a2,a2),B.T,A.as(A.lC(new C.cGC(a0,r),a2,B.b0,B.hy,a2,a2,new A.bt(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ax(B.cV,2,B.r,-1)
k=o+1
w.push(new A.r9(new A.bt(0,1,u),new C.cGD(),A.o(a2,new A.c8(B.aM,B.e,B.i,B.l,a2,B.p,a2,0,A.a([new A.qI(A.d(""+k,a2,a2,a2,a2,a2,a2,B.o7,a2,a2,a2),D.lG,a2,12,a2),B.as,new A.bz(1,B.bd,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fJy,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.n(D.qq,a2,new A.bH(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cw,B.bl,a2,a2,a2),B.b0,B.iR,a2,new A.bl("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bP(!1,D.ha_,a2,a2,!0,a2,a2,a2,a0.gcY8(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lH.j(0.2)
q=A.l(16)
p=A.K(D.lH,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fS,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.o(a2,A.x(A.a([m,B.T,C.uw(v,a0.gqs(a0),B.cV,B.jt,D.fC)],t),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.n(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bH,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dq:B.cV.j(0.2)
g=new A.aP(16,16)
l=new A.ax(n.q(0,o)?B.fj:B.cV,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.xC:a2
t.push(new A.r9(new A.bt(0,i,u),new C.cGE(),A.ay(a2,A.o(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.G(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.afz,new A.n(h,a2,new A.bH(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jr,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cGF(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b0,B.mg,a2,new A.bl("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.c_(B.fU,t,B.br,a2,10,10))}return new C.tD(a1,A.cv(w,a2,a2,B.and,a2,a2,B.ah,!1),B.f8,a2)}}
C.aAo.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.aHH.prototype={
aX(){this.b8()
this.b6()
this.dJ()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.ag5.prototype={
aru(d){},
as_(){var w=this,v=w.q7(new C.f9p(w))
v.fX(0)
w.Ma$!==$&&A.aQ()
w.Ma$=v}}
C.aLx.prototype={
gbni(d){var w=this.c
return B.a.aA(w,0,Math.min(this.d,w.length))},
Wg(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.dh(B.a0J,new C.fjz(w))},
bte(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.amy.prototype={
S(){return new C.amz(new C.amI(),A.a([],x.t),new A.eF(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.amz.prototype={
gN0(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bF7(w.c,10,w.e,!0)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.Nb(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqA(){var w=this.r
return w===$?this.r=new C.aLx(new C.bTE(this)):w},
gaqj(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gN0()[v].c)u.push(1)
return u.length},
gbmC(){var w=this.ghd(0)
return w.gzv()==null?"Elder":B.a.i(w.gzv().b)},
Z(){this.a3()
this.as_()},
t(){var w,v=this
v.gqA().t()
v.f.t()
w=v.Ma$
w===$&&A.c()
w.t()
w=v.qf$
w.V$=$.aw()
w.R$=0
v.bwX()},
cMM(){var w=this
w.m(new C.bTB(w))
w.gqA().Wg(w.gN0()[w.x].a)},
Lj(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqA()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qf$.a
v.ax=u
v.ay=u+1
v.m(new C.bTz())
A.cz(B.hy,new C.bTA(v))},
bqN(){var w=this.gaqj(0)/this.gN0().length*100
if(w>=90)return D.f3O
if(w>=75)return D.f1O
if(w>=60)return D.eTr
if(w>=45)return D.eWR
return D.eNR},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cvd()
w=A.bS(0,new A.e6(A.b5(m,m,m,new C.bu0(n,n.qf$),B.az),m),0,0,0)
if(!n.Q){v=D.qq.j(0.96)
u=A.l(20)
t=A.K(B.cV,B.r,3)
u=A.o(m,A.x(A.a([A.d("Elder "+n.gbmC()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aXE,B.K,m,m),B.T,C.uw("Start the test",n.gC4(),B.cV,B.jb,D.fC)],x.p),B.l,m,B.e,B.N,0,B.p),B.f,m,m,new A.n(v,m,t,u,m,m,B.n),m,m,m,m,B.bH,m,m,m)
v=u}else{v=n.x
u=n.gN0()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aXG,m,m,m)
if(n.Q){t=n.gqA()
t=t.d<t.c.length}else t=!1
if(t)u=D.fpc
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ax(D.BU,4,B.r,-1)
s.push(A.ay(m,A.o(m,A.d(q[r],m,m,m,m,m,m,D.fAv,B.K,m,m),B.f,m,D.afz,new A.n(D.bi6,m,new A.bH(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.OE,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bTC(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.c_(B.fU,s,B.br,new A.bl("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oC(u,B.n_,A.pX(),B.b0,B.b0,A.LN())],x.p),B.l,m,B.e,B.N,0,B.p)
v=u}return new C.tD("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.f8,m)},
cvd(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bqN(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gN0()[v].c)g.push(v)
u=A.l(22)
t=A.K(B.cV,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fF1,B.K,i,i)
r=A.d("Signed by Elder "+j.gbmC(),i,i,i,i,i,i,D.fDF,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fIT,i,i,i),D.eFz],q)
o=A.d(h.b,i,i,i,i,i,i,D.fKQ,i,i,i)
n=j.gaqj(0)
m=j.gN0()
u=A.o(i,A.x(A.a([D.fW8,B.ax,s,r,B.T,new A.an(B.z,i,B.ad,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.acA,i,i,i),B.P,D.au4],q),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(D.qq,i,t,u,i,i,B.n),i,i,i,i,B.fu,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.Ix(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.hb3,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ax(B.bw,1,B.r,-1)
p=m[v]
u.push(A.o(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.h7,i,i,i),B.ax,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fGc,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fIu,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.n(B.dq,i,new A.bH(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cw,B.bl,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.as(C.uw("Back to the games",new C.bTv(j),B.cV,B.kb,D.fC),i,i,i))
return new C.tD("Village School",A.cv(s,i,i,B.bT,i,i,B.ah,!1),B.f8,i)}}
C.bu0.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qf$.a
a0.GC(e.f.MM(a1))
w=C.hg0(a1)
v=a0.c
J.bs(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqA()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d_P[s]-6
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=D.Gs.gp(0)
a0.aF(new A.a4(u,340,u+12,450),r)}u=A.by(D.aaA.cr(10),B.i4)
$.S()
r=A.L()
r.r=D.BU.gp(0)
a0.ar(u,r)
r=A.by(D.aaA,B.ir)
u=A.L()
u.san(A.jz(new A.r(30,96),new A.r(420,346),D.djZ,f,B.x,f))
a0.ar(r,u)
q=new A.e_()
q.cU(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bX(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=B.c.j(0.025).gp(0)
a0.c1(o,r)}u=A.L()
u.r=G.ak2.gp(0)
a0.aF(new A.a4(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aF(D.fgA,u)
u=A.L()
u.r=B.bL.gp(0)
a0.aF(D.fgE,u)
u=A.by(D.fgu,B.iF)
r=A.L()
r.r=D.a_4.gp(0)
a0.ar(u,r)
n=B.h.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqA().gbni(0)
m=A.fD(f,B.cx,f,7,f,A.cS(f,f,f,f,f,f,f,f,f,D.fN7,u+(t?"|":"")),B.a7,B.c1,f,B.dK,B.c2)
m.nC(346)
J.bs(v.save())
u=A.i2(D.aaA)
r=$.mf()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.i2(new A.a4(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.by(new A.a4(u,r,u+40,r+90),B.fR)
u=A.L()
u.r=D.bya.gp(0)
a0.ar(r,u)}}else{m=A.fD(f,B.cx,f,f,f,D.fwZ,B.K,B.c1,f,B.dK,B.c2)
m.nC(340)
m.a4(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.h.F(u+p/8,1)
o=B.o.F(e.gqA().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghd(0).gzv()
i=(u==null?f:u.c)===D.oB?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f9q(d,a0,i,t,h,D.etY)),new A.y(520,new C.f9r(a0,d,t)),new A.y(575,new C.f9s(a0,d,t)),new A.y(585,new C.f9t(this,a0,d,t)),new A.y(615,new C.f9u(this,t,a0,d,h))],x.E)
B.d.b0(g,new C.f9v())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cdb(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aG(p.r,B.aj,null,null,o)
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
n.ab()}}n.E(new A.bx())
return n},
aE(d){return!1}}
C.amw.prototype={
S(){return new C.amx(new C.amI(),A.T(x.S,x.i),new A.eF(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.amx.prototype={
gkT(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hJd(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gj2(){var w=this.z
return w===$?this.z=this.FR(0):w},
gaMd(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FR(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cm(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FR(0):r).length);++v}s.Q=w
r=w}return r},
FR(d){var w,v,u,t,s=this.gkT()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e4(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e_()
u.cU(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f0(u,new C.bTh())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a3()
this.as_()},
t(){var w,v=this
v.e.t()
w=v.Ma$
w===$&&A.c()
w.t()
w=v.qf$
w.V$=$.aw()
w.R$=0
v.bwW()},
aru(d){var w,v,u,t,s,r=this,q=r.gj2().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cm(u===$?r.z=r.FR(0):u,v)
s=r.gaMd()
s[v]=s[v]+(450*(t+0.5)/q-r.gaMd()[v])*Math.min(1,w)}},
d2w(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj2().length)return
w=v.y
if(w===-1){v.m(new C.bTs(v,d))
return}if(w===d){v.m(new C.bTt(v))
return}v.m(new C.bTu(v,B.d.cm(v.gj2(),v.y),d,B.d.cm(v.gj2(),d)))},
cNt(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FR(0):u).length))break
t=s.gkT()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FR(0):u)[v]]===v);++v}s.m(new C.bTn(s,B.d.cE(w,new C.bTo())))},
kO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkT().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bTp(t,s))
w=5
return A.b(C.BR(t.a.d,s),$async$kO)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BS(q.d,q.c.a,"lineup",t.r*10),$async$kO)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bTq())
w=1
break
case 4:t.m(new C.bTr(t))
case 1:return A.h(u,v)}})
return A.i($async$kO,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkT().length+" lines right",k,k,k,k,k,k,B.q2,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tD("Line Up",A.cv(A.a([D.agq,w,B.aO,new C.Ix(v,u,l.ch,k),B.aO,A.as(C.uw("Back to the games",new C.bTj(d),B.cV,B.kb,D.fC),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f8,k)}w=A.a([],x.t)
for(t=0;v=l.gkT(),t<v[l.f].d.length;++t)w.push(t)
B.d.b0(w,new C.bTk(l))
u=A.bS(0,A.cj(new C.bTl(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aXG,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fFt,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fHJ,B.K,k,k)],q),B.l,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.l(16)
n=l.ax
m=A.K(n?D.lH:F.nq,B.r,2)
r.push(A.o(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bTm(l),x.cM).aN(0,", then ")+".",k,k,k,k,k,k,D.fJW,k,k,k),B.f,k,k,new A.n(p,k,m,o,k,k,B.n),k,k,k,B.da,B.bl,k,k,1/0))}if(!l.at)r.push(C.uw("That is my line!",l.gcNs(l),B.cV,B.hd,D.fC))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uw(w,l.gqs(l),B.cV,B.jt,D.fC))}return new C.tD("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.N,0,B.p),k,k,12,12,k,k)],q),k),B.f8,k)}}
C.bks.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qf$.a
c7.GC(c5.e.MM(c8))
w=C.hg0(c8)
v=c7.c
J.bs(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj2().length
t=$.S().r
s=x.v
r=new A.aG(t,B.aj,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.ce(225,500,440,470))
q=A.L()
q.r=D.a_4.gp(0)
q.b=B.aa
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aG(t,B.aj,c4,c4,l)
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
m=new A.bx()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=[B.cV,F.nq,D.lH,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b1W(c7,"OLDEST",D.euW,B.cV)
this.b1W(c7,"YOUNGEST",D.euo,B.be)
t=A.by(D.fgo,B.fR)
s=A.L()
s.r=D.Gs.gp(0)
c7.ar(t,s)
s=A.by(D.fgn,B.ir)
t=A.L()
t.r=D.BU.gp(0)
c7.ar(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b0(t,new C.dte())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cm(a1===$?c5.z=c5.FR(0):a1,f)
o=c5.gaMd()[f]
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
a9=new A.ar(B.S,B.Q,B.V,B.X,B.U)
a9.r=B.cV.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.dnQ[B.o.F(b0,6)]
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
else b9=a3?D.ex3:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aNq
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.SP(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.K0,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iD(new A.ev(a8,c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fD9),B.a7,B.c1,new A.ji(1),"\u2026",c4,1,c4,B.c2,c4,B.cx)
c1.nC(q)
c2=A.by(A.bX(new A.r(o,650),24,c1.b.c+16),B.fR)
$.S()
a8=new A.ar(B.S,B.Q,B.V,B.X,B.U)
if(a6)a9=B.iz
else a9=a7?B.rW:D.qq
a8.r=a9.gp(0)
c7.ar(c2,a8)
a8=new A.ar(B.S,B.Q,B.V,B.X,B.U)
if(a6)a9=D.lH
else a9=a7?F.nq:D.lG
a8.r=a9.gp(0)
a8.b=B.aa
a8.c=2
c7.ar(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.r(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iD(new A.ev(""+(a2+1),c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fDt),B.a7,B.c1,new A.ji(1),c4,c4,c4,c4,B.c2,c4,B.cx)
c3.ep()
c3.a4(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.h.F(p*53+Math.sin(c5+p)*20,450)
q=B.h.F(t+p*37,420)
J.bs(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bX(B.J,4,8)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=[B.cV,F.nq,D.lH,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aF(q,m)
v.restore()}v.restore()},
b1W(d,e,f,g){var w,v,u=null,t=A.fD(u,B.cx,u,u,u,A.cS(u,u,u,u,u,u,u,u,u,A.m(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,G.DS,u,u),e),B.a7,B.c1,u,B.dK,B.c2)
t.ep()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aJ(0,new A.r(v/2,w.gba(w)/2)))},
aE(d){return!1}}
C.a2p.prototype={
a7(){return"_Trip."+this.b}}
C.ams.prototype={
S(){return new C.amt(D.XQ,new A.eF(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.amt.prototype={
gDC(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bF7(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghd(d){var w,v=this,u=v.e
if(u===$){w=C.Nb(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqA(){var w=this.f
return w===$?this.f=new C.aLx(new C.bT3(this)):w},
gUe(){var w=this.ghd(0)
return w.gzv()==null?"Grandma":B.a.i(w.gzv().b)},
Z(){this.a3()
this.as_()},
t(){var w,v=this
v.gqA().t()
w=v.Ma$
w===$&&A.c()
w.t()
w=v.qf$
w.V$=$.aw()
w.R$=0
v.bwV()},
aru(d){var w,v,u,t=this
if(t.r!==D.ael)return
w=B.dI.az(0,B.h.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDC()
if(v+1>=u.length){t.r=D.aem
t.Xd()}else{++t.w
t.ay=!1
t.r=D.XR
t.gqA().Wg(u[t.w].a)}if(t.c!=null)t.m(new C.bT1())}},
Xd(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Xd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqA().Wg("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDC().length
r=C.bHo(t,u.z,s)
u.as=r
w=2
return A.b(C.BR(u.a.d,r),$async$Xd)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BS(s.d,s.c.a,"journey",u.x*10),$async$Xd)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bSW())
return A.h(null,v)}})
return A.i($async$Xd,v)},
bs6(){this.aUX()},
aUX(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.ael
if(w.c!=null)w.m(new C.bSX())},
Lj(d){var w,v,u,t,s=this
if(s.r!==D.XR)return
w=s.gDC()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bT0(s,d,v))
u=s.gqA()
t=s.w
u.Wg(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cSF(){if(this.r!==D.Br)return
this.aUX()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.e6(A.b5(s,s,s,new C.bjT(t,t.qf$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDC().length;++w){v=t.w
if(w<v||t.r===D.aem)v=B.cV
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.bz(1,B.bd,A.o(s,s,B.f,s,s,new A.n(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wL,s,s,s,s),s))}p.push(B.bn)
p.push(D.fXN)
return new C.tD("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ao(10,t.cmQ(),s,s,10,10,s,s)],q),s),B.f8,s)},
cmQ(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bT_(o),l=D.qq.j(0.96),k=A.l(22),j=A.K(B.cV,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gUe()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aXE,B.K,n,n),B.T,C.uw("Start the journey",o.gbs5(),B.cV,D.bT_,D.fC)],x.p),B.l,n,B.e,B.N,0,B.p)
break
case 3:w=D.beK
break
case 1:w=o.w
v=o.gDC()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ax(D.lG,2.5,B.r,-1)
t.push(A.ay(n,A.o(n,A.d(r[s],n,n,n,n,n,n,D.aX_,B.K,n,n),B.f,n,D.afG,new A.n(D.alb,n,new A.bH(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,M.wF,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bSY(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.P,A.c_(B.bI,t,B.br,n,8,8)],u),B.E,n,B.e,B.N,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDC().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bK(B.a9,n,n,C.uw(v,o.gcSE(),B.cV,B.jt,D.fC),n)],x.p),B.E,n,B.e,B.N,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUe()),B.P,A.d(""+o.x+" of "+o.gDC().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aXh,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aRB(v)
u=C.aRB(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.acA,n,n,n))}w.push(B.P)
w.push(A.as(C.uw("Back to the games",new C.bSZ(o),B.cV,B.kb,D.fC),n,n,n))
w=A.x(w,B.E,n,B.e,B.N,0,B.p)
break
default:w=n}return A.o(n,w,B.f,n,n,new A.n(l,n,j,k,D.aEA,n,B.n),n,n,n,n,B.bl,n,n,n)}}
C.bjT.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qf$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDC(),d0=B.h.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.ael,d2=c7*0.5
c8=A.ap(D.bjD,D.bur,d0)
c8.toString
w=A.ap(D.Zc,F.aiP,d0)
w.toString
v=A.ap(B.ur,D.bsN,d0)
v.toString
$.S()
u=A.L()
t=x.O
u.san(A.jz(B.J,new A.r(0,d2),A.a([c8,w,v],t),F.a5j,B.x,c3))
d3.aF(new A.a4(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.wd(s,60,A.a([D.btb,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.Zq.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.h.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dDE[o]
$.S()
u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.r(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.S()
j=A.a([],m)
i=new A.aG(k.r,B.aj,c3,c3,j)
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
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=A.ap(l===0?D.bi9:D.bxA,D.bng,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cdc(d3,new A.r(B.h.F(B.h.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.S()
w=A.L()
v=A.ap(D.akm,D.GG,d0)
v.toString
w.san(A.jz(new A.r(0,d2),new A.r(0,c7),A.a([v,D.btd],t),c3,B.x,c3))
d3.aF(new A.a4(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bmv.gp(0)
d3.aF(new A.a4(0,a0,c6,a1),w)
w=A.L()
w.r=D.bxb.gp(0)
d3.aF(new A.a4(0,a0-3,c6,a0),w)
for(q=-B.h.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.S,B.Q,B.V,B.X,B.U)
u.r=G.Nc.gp(0)
d3.aF(new A.a4(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.S()
b2=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b2.r=D.bhO.gp(0)
d3.aF(new A.a4(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aG(b1.r,B.aj,c3,c3,b2)
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
b0=new A.bx()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.ak(b2)
b1.ab()
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.bvk.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b1.r=D.fC.gp(0)
d3.aF(new A.a4(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.Gs.gp(0)
d3.aF(new A.a4(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.by(new A.a4(b0,a4,b0+60,a5),B.jy)
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.byG.gp(0)
d3.ar(b5,b0)
b0=new A.ar(B.S,B.Q,B.V,B.X,B.U)
b0.r=D.BU.gp(0)
b0.b=B.aa
b0.c=2
d3.ar(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iD(new A.ev(b6,c3,c3,B.cN,c3,c3,c3,c3,c3,c3,D.fBA),B.a7,B.c1,new A.ji(1),c3,c3,c3,c3,B.c2,c3,B.cx)
b7.ep()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.r(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.aem
else if(r===c4.w){b0=c4.r
b0=b0===D.XR||b0===D.Br
b8=b0}else b8=!1
if(a7){b0=c4.ghd(0).gzv()
b9=(b0==null?c3:b0.c)===D.oB?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqA()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.Br
b0=c0?C.hFd(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.XR?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SP(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bJd(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.h.F(w+r/7,1)
$.S()
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.bwG.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.XQ)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.h.F(w+r/5,1)
t=Math.sin(r+c8)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.Br&&c4.ax){b7=A.fD(c3,B.cx,c3,c3,c3,A.cS(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.m(c3,c3,B.cV,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,W.J_,c3,c3),"BEEP BEEP!"),B.a7,B.c1,c3,B.dK,B.c2)
b7.ep()
b7.a4(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cdc(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.bsH,D.blP,g)
o.toString
if(f){w=new A.aG($.S().r,B.aj,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.ce(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.ce(v+9,t,v+16,u))
w.E(new A.bx())
t=A.L()
t.r=D.a_C.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d3R[r]
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=D.a_C.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a5(0,D.ex0)
$.S()
v=A.L()
v.r=D.bhQ.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bX(e.a5(0,D.ex1),16,60)
w=A.L()
w.r=o.gp(0)
d.c1(v,w)}},
bJd(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.XQ?0.045:0,a1=a2.c
J.bs(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jq(0,a0)
for(w=0;w<2;++w){v=D.dvJ[w]
u=d.ay&&d.r!==D.XQ&&v>0
J.bs(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.bxr.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.bpo.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.bj.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.u3(D.fgL,B.fR,B.fR,B.iq,B.hU)
$.S()
t=A.L()
t.san(A.jz(D.et3,B.a9v,D.dll,F.a5j,B.x,f))
a2.ar(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.S,B.Q,B.V,B.X,B.U)
s.r=D.dfe[B.o.F(o,4)].gp(0)
a2.aF(new A.a4(t,-26,t+10,-19),s)}n=d.r===D.Br&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a4(s,-66,q,-36)
J.bs(a1.save())
a1.clipRRect(A.mW(A.by(l,B.o_)),$.mA(),!0)
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=D.Zc.gp(0)
a2.aF(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.Br?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SP(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aNh,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.by(l,B.o_)
i=new A.ar(B.S,B.Q,B.V,B.X,B.U)
i.r=D.ald.gp(0)
i.b=B.aa
i.c=2
a2.ar(j,i)}d=A.by(D.Vc,B.o_)
t=A.L()
t.r=D.Zc.gp(0)
a2.ar(d,t)
J.bs(a1.save())
a1.clipRRect(A.mW(A.by(D.Vc,B.o_)),$.mA(),!0)
C.SP(a2,new A.r(D.Vc.gbE().a,-10),0,0,0.7,-0.1,f,f,D.aNh,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.by(D.Vc,B.o_)
d=A.L()
d.r=D.ald.gp(0)
d.b=B.aa
d.c=2
a2.ar(t,d)
d=A.L()
d.r=X.Cj.gp(0)
a2.O(D.eva,4,d)
d=A.L()
d.r=D.Gs.gp(0)
a2.aF(D.fhU,d)
for(w=0;w<3;++w){v=D.dvL[w]
d=A.by(new A.a4(v,-96,v+28,-79),B.jy)
t=new A.ar(B.S,B.Q,B.V,B.X,B.U)
t.r=D.GG.gp(0)
a2.ar(d,t)}a1.restore()},
aE(d){return!1}}
C.aCe.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bhq.prototype={}
C.aCg.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bhr.prototype={}
C.aCh.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.bhs.prototype={}
C.a6R.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b5(w,w,w,new C.bk_(w),B.az),w)}}
C.bk_.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dtC[B.o.F(n,6)]
k=$.S()
j=new A.ar(B.S,B.Q,B.V,B.X,B.U)
j.r=l.gp(0)
d.aF(new A.a4(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aG(k.r,B.aj,null,null,j)
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
k=new A.bx()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new A.ar(B.S,B.Q,B.V,B.X,B.U)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aE(d){return!1}}
C.tD.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.Qx,w,w,w,new C.bSV(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fyS,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c5(w,D.YX,A.o(w,A.bm(!0,A.x(A.a([D.c7P,new A.D(D.bJQ,A.A(u,B.l,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.ba_,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Ix.prototype={
B(d){var w=null,v=this.d,u=C.aRB(v),t=C.int(v),s=B.c.j(0.08),r=A.l(18),q=A.K(B.cV.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fBl,w,w,w)],x.p)
if(this.e)p.push(D.ezs)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h7,w,w,w))
if(t!=null)p.push(new A.D(B.uL,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Fa,w,w,w),w))
return A.o(w,A.x(p,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.n(s,w,q,r,w,w,B.n),w,w,w,w,B.bH,w,w,w)}}
C.WA.prototype={
S(){return new C.bmN(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cZy(d){return this.f.$1(d)},
ge3(){return this.d}}
C.bmN.prototype={
gTd(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a3()
this.PN()},
PN(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$PN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bTG(u.a.d),$async$PN)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.djm[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bTF(p,(o===$?u.d=q.c:o).a,r),$async$PN)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e3A(u,n))
return A.h(null,v)}})
return A.i($async$PN,v)},
uF(d){return this.cpT(d)},
cpT(d){var w=0,v=A.j(x.H),u=this,t
var $async$uF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).ce(A.ee(new C.e3B(d),!1,null,x.H)),$async$uF)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.PN()
return A.h(null,v)}})
return A.i($async$uF,v)},
gb7h(){var w,v,u,t=C.Nb(this.gTd()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2T(d){return this.cx7(d)},
cx7(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2T=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cZy(r),$async$a2T)
case 2:if(u.c!=null)u.m(new C.e3C(u,r))
return A.h(null,v)}})
return A.i($async$a2T,v)},
P5(d){return this.bRY(d)},
bRY(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$P5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hio(t.gTd())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MW("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).ce(A.ee(new C.e3y(q),!1,null,r)),$async$P5)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bk(j,new C.e3z(p))
o=s.length
B.d.ca(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2T(A.cT(s,0,A.dA(2,"count",x.S),r).dq(0)),$async$P5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$P5,v)},
Y9(d,e){return this.bPx(0,e)},
bPx(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Y9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e3x(e),o,null,!0,!0,x.y),$async$Y9)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hio(u.gTd()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2T(o),$async$Y9)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Y9,v)},
aay(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e3u(this,j):h
o=o?0.55:1
w=A.ap(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.l(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.W1,p,p,p),B.b4],s)
q=A.l(10)
r.push(A.o(p,A.d(i,p,p,p,p,p,p,D.fzL,p,p,p),B.f,p,p,new A.n(B.hO,p,p,q,p,p,B.n),p,p,p,p,B.z9,p,p,p))
return A.ay(p,A.d1(A.o(p,A.x(A.a([A.A(r,B.l,p,B.e,B.i,0,p,p),B.b4,A.d(e,p,2,p,p,p,p,D.fHC,p,p,p),B.cS,A.d(f,p,3,B.a2,p,p,p,D.fAt,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.n(p,p,u,v,t,new A.a7(B.ay,B.aC,B.x,w,p,p),B.n),p,p,p,p,B.z0,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
XD(d,e,f,g,h,i){return this.aay(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Nb(s.gTd()),p=s.gTd(),o=C.aRB(s.e),n=C.hio(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e3D(s),k=C.hJd(p,1).length,j=C.hJo(p,1).length,i=C.hKi(p,1).length,h=B.c.j(0.07),g=A.l(20),f=A.K(B.cV.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,H.aco,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fF5,r,r,r),a0=q.b.length,a1=x.p
g=A.o(r,A.A(A.a([e,B.bc,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.Wj,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.q2,r,r,r),D.h35],a1),B.l,r,B.e,B.i,0,B.p)],a1),B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.n(h,r,f,g,r,r,B.n),r,r,r,r,B.bH,r,r,r)
f=s.XD("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.e3E(s,p),l.$1("kahoot"))
h=s.XD("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lG,new C.e3F(s,p),l.$1("fire"))
a0=s.XD("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wt,new C.e3G(s,p),l.$1("catch"))
j=j!==0?new C.e3J(s,p):r
j=s.aay("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hL,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e3K(s,p):r
i=s.aay("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lF,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.XD("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.fn,new C.e3L(s,p),l.$1("journey"))
k=k!==0?new C.e3M(s,p):r
k=A.a([g,B.aO,D.h77,B.P,A.l_(0.98,A.a([f,h,a0,j,i,e,s.aay("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ep,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.XD("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d6,new C.e3N(s,p),l.$1("school"))],a1),2,12,12,r,B.e0,!0),B.db,A.A(A.a([D.bLF,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fzP,r,r,r)],a1),B.l,r,B.e,B.i,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ax(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fOI,B.bc,new A.bz(1,B.bd,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hh,r,r,r),A.d(""+v.gapY(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.Fa,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gapY(0).length>=2){f=D.lH.j(0.2)
t=new A.ax(D.lH,1,B.r,-1)
g.push(A.ay(r,A.o(r,A.X(B.he,D.lH,r,r,r,20),B.f,r,r,new A.n(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e3O(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cV.j(0.2)
t=new A.ax(B.cV,1,B.r,-1)
f=A.ay(r,A.o(r,A.X(B.jb,B.cV,r,r,r,20),B.f,r,r,new A.n(f,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e3P(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fj.j(0.2)
t=new A.ax(B.fj,1,B.r,-1)
B.d.u(g,A.a([B.bn,f,B.bn,A.ay(r,A.o(r,A.X(B.ej,B.fj,r,r,r,20),B.f,r,r,new A.n(e,r,new A.bH(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e3Q(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.o(r,new A.c8(B.aM,B.e,B.i,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.n(i,r,new A.bH(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.da,B.bl,r,r,r))}if(s.a.e){j=m?new C.e3H(s):new C.e3I(a2)
i=A.l(18)
h=A.K(m?B.cV:B.aT,B.r,2)
g=m?B.cV.j(0.12):B.dq
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.ay(r,A.o(r,A.as(A.d(f,r,r,r,r,r,r,A.m(r,r,m?B.cV:B.aE,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.n(g,r,h,i,r,r,B.n),r,r,r,r,B.Os,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.h83)
k.push(B.aB)
k.push(D.au4)
return new C.tD("Family Games \xb7 "+p.b,A.cv(k,r,r,D.bFQ,r,r,B.ah,!1),B.f8,r)}}
C.a0i.prototype={
a7(){return"_KPhase."+this.b}}
C.amu.prototype={
S(){return new C.amv(D.b1U)},
gd1(){return this.e}}
C.amv.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fX(d){var w,v=this
v.m(new C.bTf(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.dh(B.fM,new C.bTg(v))},
aQr(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bT5(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.dh(B.fh,new C.bT6(w))},
Lj(d){var w
if(this.d!==D.adQ)return
w=this.at
if(w!=null)w.a1(0)
this.b7d(d)},
b7d(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.h.U(500+500*B.h.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bTb(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cz(B.t2,v.giC(v))},
cM5(d){var w=this
if(w.d!==D.Xn)return
if(w.e+1>=w.a.w.length)w.YW()
else{w.m(new C.bTc(w))
w.aQr()}},
YW(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$YW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bHo(p,u.w,t)
u.m(new C.bT8(u,s))
w=2
return A.b(C.BR(u.a.e,s),$async$YW)
case 2:r=e
t=u.a
w=3
return A.b(C.BS(t.e,t.f,t.r,u.f),$async$YW)
case 3:q=e
if(u.c!=null)u.m(new C.bT9(u,r,q))
return A.h(null,v)}})
return A.i($async$YW,v)},
cMV(){var w,v,u,t,s=this,r=s.a,q=new A.e_()
q.cU(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b3("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cT(r,0,A.dA(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bR(r,r.gJ(0),u.k("bR<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b3(t,B.h.U(w*(0.35+q.ai()*0.5)),!1))}B.d.b0(v,new C.bTd())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b1U===r){w=A.a([D.h3u,B.T,A.d(s,t,t,t,t,t,t,B.Wt,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fzX,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.Bb,B.K,t,t))
w.push(B.e4)
w.push(C.uw("Play",u.geX(u),B.cV,B.he,D.fC))
w=A.as(new A.D(B.eA,A.x(w,B.l,t,B.e,B.N,0,B.p),t),t,t,t)
break A}if(D.b1V===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fI9,t,t,t),t,t,t)
break A}if(D.adQ===r||D.Xn===r){w=u.csv()
break A}if(D.b1W===r){w=u.cdd()
break A}w=t}return new C.tD(s,w,B.f8,t)},
csv(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Xn,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aWP,j,j,j),B.b4],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.Lg,j,j,j))
g.push(B.as)
f=A.l(14)
g.push(A.o(j,A.d(""+k.f,j,j,j,j,j,j,B.iH,j,j,j),B.f,j,j,new A.n(B.bw,j,j,f,j,j,B.n),j,j,j,j,B.CE,j,j,j))
g=A.A(g,B.l,j,B.e,B.i,0,j,j)
f=A.l(6)
w=i?0:B.h.D(k.as/k.a.w[k.e].r,0,1)
f=A.bv(f,A.kt(B.bw,j,k.as<5?B.fj:B.cV,9,j,w,j),B.aq)
w=A.l(22)
v=A.K(B.cV,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.m(j,j,e?D.lH:F.nq,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fz0,B.K,j,j)],h),B.l,j,B.e,B.N,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fKk,B.K,j,j)
w=A.E(A.o(j,A.as(u,j,j,j),B.f,j,j,new A.n(D.qq,j,v,w,j,j,B.n),j,j,j,j,B.fu,j,j,1/0),3)
v=A.a([],h)
for(u=k.giC(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bTa(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aEc[o]
m=new A.aP(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aEw[o],j,j,j,j,j,j,D.fAW,j,j,j),B.as,new A.bz(1,B.bd,A.d(r[t],j,3,B.a2,j,j,j,D.fzU,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(B.asy)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c_u)
v.push(A.ay(j,new A.T4(A.o(j,new A.c8(B.aM,B.e,B.i,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.n(n,j,new A.bH(l,l,l,l),new A.be(m,m,m,m),N.aCA,j,B.n),j,j,j,j,B.f3,j,j,j),p,B.b0,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.af,w,B.af,A.E(A.l_(1.45,v,2,10,10,j,B.e0,!1),4)],h)
if(i)h.push(D.eyI)
return new A.D(B.a1g,A.x(h,B.l,j,B.e,B.i,0,B.p),j)},
cdd(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cMV(),m=x.p,l=A.a([D.be0,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.q2,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.W6,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cV.j(0.25):B.dq
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.cV:B.bw,1,B.r,-1)
q=A.d(w<3?D.dlC[w]:""+(w+1),o,o,o,o,o,o,B.mD,o,o,o)
s=s?B.u:B.O
l.push(A.o(o,new A.c8(B.aM,B.e,B.i,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bz(1,B.bd,A.d(t.a,o,o,o,o,o,o,new A.G(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iH,o,o,o)],m),o),B.f,o,o,new A.n(v,o,new A.bH(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cw,B.eX,o,o,o))}l.push(B.T)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Ix(m,v,p.CW,o))
l.push(B.aO)
l.push(A.as(C.uw("Back to the games",new C.bT7(p),B.cV,B.kb,D.fC),o,o,o))
return A.cv(l,o,o,B.fu,o,o,B.ah,!1)}}
C.Uf.prototype={
S(){return new C.amr(A.T(x.de,x.er))}}
C.amr.prototype={
gDh(){var w,v=this,u=v.d
if(u===$){w=C.hoo(v.a.c.aj())
v.d!==$&&A.bE()
v.d=w
u=w}return u},
glW(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDh().b
v=$.aw()
u.e!==$&&A.bE()
t=u.e=new A.at(new A.bb(w,B.b7,B.aP),v)}return t},
cge(d){return this.f.c_(0,d,new C.bSG(d))},
Z(){this.a3()
var w=this.gDh().c
if(w.length===0)w.push(C.h9P(null,0,20,""))},
t(){var w,v,u=this.glW(0)
u.V$=$.aw()
u.R$=0
for(u=this.f,u=new A.dn(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gP(w)
v.V$=$.aw()
v.R$=0}this.a2()},
cLW(){if(this.gDh().c.length>=12)return
this.m(new C.bSH(this))},
jH(d){var w,v,u=this,t=u.gDh()
t.b=B.a.i(u.glW(0).a.a)
w=t.gapY(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.T(D.frX)
return}v=t.c
B.d.a8(v)
B.d.u(v,w)
v=u.c
v.toString
A.a6(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bSR(),r=x.p,q=A.a([A.bP(!1,D.fTJ,t,t,!0,t,t,t,u.gbqY(u),t,t)],r),p=A.a([D.h7F,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glW(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.h7,!0,B.a7,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gDh().c.length,w<v;++w)B.d.u(p,A.a([new A.fh(new C.bSQ(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uw("\uff0b Add a question",u.gcLV(),B.aT,t,B.c),t,t,t))
return new C.tD("Make your game",A.cv(p,t,t,D.bFN,t,t,B.ah,!1),q,t)}}
C.arC.prototype={
S(){return new C.aFO(A.a([],x._))},
bv(){return this.r.$0()},
qt(){return this.w.$0()},
ge3(){return this.c}}
C.aFO.prototype={
Z(){var w,v
this.a3()
this.wC()
w=this.a
v=w.c
if(v.length!==0)C.a8A(v,w.e,w.d.w)},
ws(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ws=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hla(r,t.e,!1,s.w,new C.e5f(u),null,s),$async$ws)
case 2:w=3
return A.b(u.wC(),$async$ws)
case 3:return A.h(null,v)}})
return A.i($async$ws,v)},
a16(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a16=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hla(r,t.e,!0,s.w,new C.e5e(u),null,s),$async$a16)
case 2:w=3
return A.b(u.wC(),$async$a16)
case 3:return A.h(null,v)}})
return A.i($async$a16,v)},
wC(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wC=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bj(q.a.c),$async$wC)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.e5h(q,p))
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
return A.b(C.Hp(q.a.c).dg(0,B.qC),$async$wC)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e5i(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e5j(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wC,v)},
Pr(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Pr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.T(D.frx)
w=3
return A.b(C.Hp(t.a.c),$async$Pr)
case 3:r=e
w=4
return A.b(C.h_h(t.a.c,r),$async$Pr)
case 4:q=e
w=5
return A.b(C.Hp(t.a.c),$async$Pr)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e5d(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dL:B.d3,null,B.t,null,s,null,B.lL,null,null,null,null,null,null,null,null,null,null))
t.a.qt()
case 1:return A.h(u,v)}})
return A.i($async$Pr,v)},
IF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ivM(l),$async$IF)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hZx(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b22(q,p.e,l,"Each family tree costs $"+B.h.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IF)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hFn(r)
o=Date.now()
n=t.a.c
m=new C.kZ(l,r.toUpperCase(),p,!0,B.Z,D.E_,new A.V(o,0,!1),0,n,D.uT,B.cf)
w=5
return A.b(C.a4g(n,m),$async$IF)
case 5:w=6
return A.b(t.wC(),$async$IF)
case 6:t.a.bv()
t.a.qt()
if(t.c==null){w=1
break}t.Fa(m)
case 1:return A.h(u,v)}})
return A.i($async$IF,v)},
Fa(d){return this.cl9(d)},
cl9(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Fa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bj(u.a.c),$async$Fa)
case 2:n=l.nx(k.dH(f,new C.e5g(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.arw(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Fa)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a4g(u.a.c,o),$async$Fa)
case 6:case 5:w=7
return A.b(u.wC(),$async$Fa)
case 7:u.a.qt()
return A.h(null,v)}})
return A.i($async$Fa,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=new C.ui(p)
if(r.e)return A.as(A.n0(q,p?B.bu:B.bj,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.ef:B.c
v=A.l(15)
u=A.aF(!1,B.a3,!0,q,A.aM(!1,q,!0,A.o(q,D.bY5,B.f,q,q,new A.n(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cU,!0,q,q,q,q,q,q,q,q,q,q,q,r.gckd(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gp(A.o(q,A.x(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bj,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e4,A.bJ(D.haU,q,r.gaTK(),A.bp(B.bQ,q,q,q,q,q,B.a1E,q,new A.ba(A.l(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.i,0,B.p),B.f,q,q,new A.n(w,q,q,v,q,q,B.n),q,q,q,q,D.bIx,q,q,1/0),15,B.ag,1.05,D.adD,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b4],v)
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.zQ,B.aV,q,q,q,q),q,q,q,new C.e5l(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aH(q,q,q,q,A.X(B.zM,B.aV,q,q,q,q),q,q,q,r.gahp(),q,q,q,q,"Transfer / backup file",q))
w.push(A.de(B.att,q,D.fR0,r.gaTK(),A.bp(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gp(r.cI4(J.t(r.d,s),o),14,B.ag,1,D.adD,q))
B.d.u(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cI4(d,e){var w=null,v=e.a,u=v?B.ef:B.c,t=A.l(14),s=A.K((v?B.eh:B.bO).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.et,10)],x.V),q=A.l(14),p=A.o(w,D.bXa,B.f,w,w,new A.n(B.aV.j(0.15),w,w,A.l(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqY(),m=d.d?"":" \xb7 Public",l=d.y===D.kZ?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bF,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.o(w,A.aF(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bH,A.A(A.a([p,B.bc,l,A.X(B.Pn,v?B.bu:B.bj,w,w,w,w)],k),B.l,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e5k(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.n(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.arw.prototype={
S(){return new C.aFL(A.a([],x._),A.aR(x.N),A.baL())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aFL.prototype={
Z(){var w,v,u=this
u.a3()
u.d=u.a.w
u.ae0()
w=u.a
v=w.c
if(v.length!==0)C.a8A(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.aw()
w.R$=0
this.a2()},
a42(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a42=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yE("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e4G(r),s,null,!0,!0,x.y),$async$a42)
case 3:if(e!==!0||t.c==null){w=1
break}t.Kg()
t.m(new C.e4H(t,r))
w=4
return A.b(t.uB(),$async$a42)
case 4:t.a.bv()
t.yE(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a42,v)},
cxH(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.e4B(w,f,d,e))},
aW2(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.ec(w,v,0,1)
u.k7(q,q,1,1)
this.w.sp(0,u)},
bdS(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eM(new Float64Array(16))
q.e6(r)
w=q.Dm()
v=B.h.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.ec(r,u,0,1)
t.k7(v,v,1,1)
t.ec(-r,-u,0,1)
t.iZ(0,q)
s.sp(0,t)},
ae0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ae0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bj(u.a.c),$async$ae0)
case 2:t=s.nx(r.dH(e,new C.e42(u)))
if(t!=null&&u.c!=null)u.m(new C.e43(u,t))
return A.h(null,v)}})
return A.i($async$ae0,v)},
yE(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
ws(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$ws=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hla(o,t,!1,r,new C.e4k(u),q.a,s),$async$ws)
case 2:n=A
m=J
w=3
return A.b(C.Hp(u.a.c),$async$ws)
case 3:p=n.nx(m.dH(e,new C.e4l(u)))
if(p!=null&&u.c!=null)u.m(new C.e4m(u,p))
return A.h(null,v)}})
return A.i($async$ws,v)},
Kg(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cH(w,0)},
uB(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a4g(t,s),$async$uB)
case 2:return A.h(null,v)}})
return A.i($async$uB,v)},
a2A(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.ux(q,t.a.c)){t.yE("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iwZ(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2A)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Kg()
t.m(new C.e4A(t,r))
w=4
return A.b(t.uB(),$async$a2A)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2A,v)},
b3T(){var w=this.c
w.toString
A.a6(w,!1).ce(A.ee(new C.e4h(this),!1,null,x.H))},
a1j(){return this.clb()},
clb(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.ux(m,t.a.c)){t.yE("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.O(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e4x(),A.U(s).k("Y<1>")).gJ(0)
s=A.ew([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("ci.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e4y(n,t,new C.ui(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1j)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Kg()
t.m(new C.e4z(t,o))
w=6
return A.b(t.uB(),$async$a1j)
case 6:case 5:if(o.a&&t.c!=null)t.b3T()
case 1:return A.h(u,v)}})
return A.i($async$a1j,v)},
WX(d){return this.bEx(d)},
bEx(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.ux(r,t.a.c)){t.yE("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e3R(t,d),r,null,!0,!0,x.P),$async$WX)
case 3:s=f
if(s==null){w=1
break}t.Kg()
t.m(new C.e3S(t,s))
w=4
return A.b(t.uB(),$async$WX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WX,v)},
a4n(d){return this.cKj(d)},
cKj(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4n=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.O(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e4J(u,d,new C.ui(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4n)
case 2:return A.h(null,v)}})
return A.i($async$a4n,v)},
chr(d){var w=this,v=w.d
v===$&&A.c()
if(C.ux(v,w.a.c))w.P6(d)
else w.a4n(d)},
ajV(d,e){return this.cBF(d,e)},
cBF(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.O(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e4D(new C.ui(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ajV)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajV,v)},
IK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kZ?3:5
break
case 3:w=6
return A.b(C.h81(t.a.c),$async$IK)
case 6:s=e
o=t.a
r=C.htg(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajV(!s,!r),$async$IK)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aRI(o,t.a.c)){t.yE("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.ln(o,"Cancel","Remove",q.y===D.kZ?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IK)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aRE(t.a.c,t.d.a),$async$IK)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j3(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IK,v)},
abu(d){return this.bPO(d)},
bPO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$abu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.ux(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aU(s,new C.e3T(p))){o=A.U(s)
p.a=A.nx(new A.cM(new A.Y(s,new C.e3U(d),o.k("Y<1>")),new C.e3V(),o.k("cM<1,q>")))}q=p.a
if(q==null)q=d.d
t.Kg()
t.m(new C.e3W(t,s,d,q))
w=3
return A.b(t.uB(),$async$abu)
case 3:t.yE(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$abu,v)},
P6(d){return this.bS1(d)},
bS1(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.ux(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4n(d),$async$P6)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e4_(t,d),r,null,!0,!0,x.P),$async$P6)
case 6:s=f
if(s==null){w=1
break}t.Kg()
t.m(new C.e40(t,s))
w=7
return A.b(t.uB(),$async$P6)
case 7:case 1:return A.h(u,v)}})
return A.i($async$P6,v)},
cIu(){var w=this,v=w.d
v===$&&A.c()
if(!C.ux(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e4I(w))
w.uB()},
a_0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aRI(n,t.a.c)){t.yE("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.O(n)
s=$.aw()
r=new A.at(B.aw,s)
q=t.d.e
p=A.br(new A.N(q,t.gcfV(),A.U(q).k("N<1,q>")).c0(0,new C.e4c()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e4d(t,new C.ui(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_0)
case 3:o=e
r.V$=s
r.R$=0
if(o!==!0||t.c==null){w=1
break}t.Kg()
t.m(new C.e4e(t,p))
w=4
return A.b(t.uB(),$async$a_0)
case 4:t.yE("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_0,v)},
cfW(d){return B.a.i(d.toLowerCase())},
cjY(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.ux(v,w)
t=r.d
s=C.im_(t)
C.ivQ(q,t.b,u,C.ilZ(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.ui(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e4Q(),A.U(l).k("Y<1>")).gJ(0)
l=n?B.c6:B.hY
v=A.X(B.a2O,n?B.bu:B.bj,o,o,o,18)
u=x.p
v=A.a([new A.D(B.CF,A.aM(!1,o,!0,new A.D(B.hz,A.A(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.N,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e4R(p,d),o,o,o,o,o,o,o),o),new A.D(B.nJ,p.c2g(m),o)],u)
if(p.d.y===D.kZ){t=B.tB.j(0.15)
s=A.l(12)
r=A.K(B.tB.j(0.45),B.r,1)
q=C.Hn(p.d,p.a.c)
v.push(new A.D(B.z3,A.o(o,A.A(A.a([D.c1E,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.n(t,o,r,s,o,o,B.n),o,o,o,o,B.hP,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b4],u)
if(C.ux(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GB("Undo",B.pD,p.gcIt(),m,o,o))
u.push(new C.GB("Family Book",D.bRP,p.gcjX(),m,B.us,o))
u.push(new C.GB("Family games",B.nP,p.gck8(),m,B.aD,o))
if(C.ux(p.d,p.a.c))u.push(new C.GB("Display settings",B.Dx,p.gcla(),m,B.b2,o))
u.push(new C.GB("Sync",B.zM,p.gahp(),m,o,o))
t=p.d
if(t.y===D.kZ||C.aRI(t,p.a.c)){t=p.d.y===D.kZ?"Remove shared tree":"Delete tree"
u.push(new C.GB(t,B.ej,p.gbPY(),m,B.fj,o))}if(C.ux(p.d,p.a.c))u.push(new C.GB("Add member",B.x_,new C.e4S(p),m,B.bQ,o))
v.push(new A.D(B.ane,A.A(u,B.l,o,B.e,B.i,0,o,o),o))
if(p.d.gaqY()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cj(new C.e4T(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.a2S:V.Po,o,o,o,o,o)
v.push(A.as(A.ht(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e4U(p),o),o,o,o))}return A.c5(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c2g(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.l(22)
v=A.a([new A.ac(0,B.G,B.fX.j(0.35),B.dp,18)],x.V)
u=A.l(22)
t=A.ao(-26,A.X(B.zD,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a3,!0,m,A.aM(!1,m,!0,A.o(m,D.c4Y,B.f,m,m,new A.n(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cU,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahp(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fBZ,m,m,m)
r=r.gaqY()
p=n.d.gaqY()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bF,A.d(""+r+" "+p,m,m,m,m,m,m,A.m(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.ux(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.c1S,m,m,m,n.gcv2(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jL:B.n5
r=r?"Private":"Public"
r=A.E(n.axw(q,"Privacy",r,n.a.d.w?n.gcHp():m),1)
q=A.E(n.axw(B.x4,"Tree code",n.d.c,new C.e41(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.axw(D.bTx,"Collaborators",p,n.gc76()),1)],o),B.l,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kZ){s=B.c.j(0.15)
B.d.u(p,A.a([B.P,A.aF(!1,B.a3,!0,A.l(999),A.aM(!1,A.l(999),!0,new A.D(B.hn,A.A(A.a([A.X(B.nQ,B.c,m,m,m,14),B.e7,A.d("View only",m,m,m,m,m,m,B.aWU,m,m,m)],o),B.l,m,B.e,B.N,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.o(m,A.bv(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.Hg,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.n(m,m,m,w,v,D.c9h,B.n),m,m,m,m,m,m,m,1/0)},
axw(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a3,!0,A.l(14),A.aM(!1,A.l(14),!0,new A.D(H.aot,A.x(A.a([A.X(d,B.c,w,w,w,18),B.ax,A.d(e,w,1,B.a2,w,w,w,A.m(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rg,A.d(f,w,1,B.a2,w,w,w,Y.xE,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bhu.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bM
w=s.d
v=s.e
u=A.a([A.b5(t,t,t,new C.bhx(s,t),new A.au(w,v))],x.p)
r=r.gdQ(r)
B.d.u(u,r.dO(r,new C.diH(this),x.l))
r=s.c
B.d.u(u,new A.N(r,new C.diI(this),A.U(r).k("N<1,v>")))
return new A.D(B.uP,new A.a5(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.L_.prototype={}
C.GF.prototype={}
C.bhw.prototype={
gbmo(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aLs.prototype={}
C.bhx.prototype={
bRD(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.L()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aG(q.r,B.aj,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.kp(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.kp(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bx())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bE.gp(0)
d.af(t,q)},
bRA(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b0(a0,new C.dj1())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aU(a0,new C.dj2(f))
t=new A.N(a0,new C.dj3(f),A.U(a0).k("N<1,F>")).c0(0,new C.dj4()).cB(0,1/0,B.rw)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.lK(n)
k=Math.min(10,m/2)
m=$.S()
j=A.a([],r)
i=new A.aG(m.r,B.aj,null,null,j)
j.push(new A.aZ(w,v-k))
i.ab()
m=l*k
h=new A.ce(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
m=new A.ce(o,v,o,v+k)
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
a4(d,e){var w,v,u,t,s,r
$.S()
w=A.L()
w.r=B.bQ.j(0.75).gp(0)
w.c=2.2
w.b=B.aa
w.d=B.bG
w.e=B.dQ
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bRA(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bRD(d,w,r.a,r.b)}},
aE(d){return d.b!==this.b}}
C.blj.prototype={
gcdf(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aEN
switch(w.c.a){case 0:return D.d2v
case 1:return D.df8
case 2:return D.dxE}},
gcdi(){var w=this.c,v=C.hEz(w.w),u=C.hEz(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=t.gcdf(),p=t.c,o=A.bG0(p.f),n=t.gcdi(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cM,10)],m),k=r?B.av:B.c,j=A.K(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tH(B.z,s,B.cn,B.bY,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.o(B.z,A.d(v,s,s,s,s,s,s,A.m(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.n(s,s,s,s,s,new A.a7(B.a5,B.a9,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.o(s,A.o(s,A.i3(w,B.aq),B.f,s,s,new A.n(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.n(s,s,s,s,l,new A.a7(B.ay,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.CU,s,s,56)],v)
k=t.d
if(k>0){j=A.l(10)
w=A.K(r?B.av:B.c,B.r,1.5)
l.push(A.ao(s,A.o(s,A.d(""+k,s,s,s,s,s,s,D.fMO,s,s,s),B.f,s,s,new A.n(B.cj,s,w,j,s,s,B.n),s,s,s,s,D.bKt,s,s,s),s,s,s,-6,-4,s))}k=r?B.ct:B.c
j=A.l(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dM,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.m(s,s,r?B.c:B.ct,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.m(s,s,r?B.aR:B.bj,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.ay(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.ax,A.o(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,D.b88,new A.n(k,s,w,j,m,s,B.n),s,s,s,s,D.bKE,s,s,s)],v),B.l,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bgy.prototype={
a4(d,e){var w,v,u,t,s
$.S()
w=A.L()
v=this.b
u=v?B.c:D.bln
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aE(d){return d.b!==this.b}}
C.bzo.prototype={
B(d){var w=this,v=null,u=new C.fpa(w),t=w.c,s=t?B.ct:B.c,r=A.l(12),q=u.$3(B.i_,"Zoom in",w.d),p=A.o(v,v,B.f,t?B.bw:B.fr,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.x1,"Zoom out",w.e)
return A.aF(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.o(v,v,B.f,t?B.bw:B.fr,v,v,v,1,v,v,v,v,v,22),u.$3(B.aqW,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.N,0,B.p),B.f,s,4,v,B.dB,v,v,v,B.ai)}}
C.boF.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.K(B.bQ,B.r,2),s=w.e,r=x.p
t=A.ay(v,A.o(v,A.x(A.a([A.X(s?K.a2S:V.Po,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fIP,v,v,v)],r),B.l,v,B.b9,B.i,0,B.p),B.f,v,v,new A.n(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fGA,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.u(t,new A.N(s,new C.f_b(w),A.U(s).k("N<1,v>")))
B.d.u(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.i,0,B.p),v)}}
C.a0v.prototype={
S(){return new C.aEd()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aEd.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a3()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aQ()
r.d=new A.at(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.at(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.at(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.at(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.at(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.at(new A.bb(t,B.b7,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zg:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.inu(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.V$=$.aw()
u.R$=0
u=v.e
u===$&&A.c()
u.V$=w
u.R$=0
u=v.f
u===$&&A.c()
u.V$=w
u.R$=0
u=v.r
u===$&&A.c()
u.V$=w
u.R$=0
u=v.w
u===$&&A.c()
u.V$=w
u.R$=0
u=v.x
u===$&&A.c()
u.V$=w
u.R$=0
v.a2()},
QE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$QE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.htg(p.y,p.w)
w=3
return A.b(A.lz(t.a.w,B.JU),$async$QE)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b22(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$QE)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hZy(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(A.DH(78,800),$async$QE)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dyY(t,q))
case 1:return A.h(u,v)}})
return A.i($async$QE,v)},
cdh(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i4(B.o.v(1000*Date.now()),w,D.zg,null,null,null,"","","","","",1,!1,0)
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
s=v.aGC(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).N(s)},
ab5(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ab5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dyX(r),s,null,!0,!0,x.y),$async$ab5)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$ab5,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===B.I,i=new C.ui(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.B(new A.Y(h,new C.dz6(l),g),g.k("M.E"))
h=j?B.ef:B.c
g=A.l(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bIT,A.d(w,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hd(A.aM(!1,k,!0,new A.D(B.lQ,A.X(B.ej,B.pq,k,k,k,17),k),B.cU,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbMx(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jZ:B.iO
t=A.bG0(l.as)
if(l.as==null)s=A.X(B.px,j?B.bu:B.bj,k,k,k,40)
else s=k
s=A.as(A.ay(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hg(u,t,s,k,42),A.ao(0,A.hg(B.bQ,k,D.bWe,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcde(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aEf(t,"Full name",B.mj,1,1,i,B.mB)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.T,new C.blh(i,u,new C.dz7(l),k)],v),B.l,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bCc],q)
o=l.a.e
B.d.u(p,new A.N(o,new C.dz8(),A.U(o).k("N<1,eS<q?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bCe],q)
B.d.u(q,new A.N(f,new C.dza(),A.U(f).k("N<1,eS<q?>>")))
o=A.x(A.a([t,B.am,new C.aeC(i,r,"Who is their parent?",p,new C.dzb(l),k,o),B.aB,n,B.am,new C.aeC(i,m,"Who is their spouse / partner?",q,new C.dzc(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aEf(q,"Birth date",D.aq6,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aEf(m,"Birth place",B.a37,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aEf(n,"Date of death (if deceased)",D.asb,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aEf(p,"Occupation",B.Qn,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.z,k,B.ad,B.t,w,k),B.aB,s,B.bx,new C.aeD(i,"Identity",u,k),B.af,new C.aeD(i,"Family links",o,k),B.af,new C.aeD(i,"Life details",A.x(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.aEf(r,"Notes",B.l0,5,3,i,k)],v),B.l,k,B.e,B.i,0,B.p),k),B.af,new C.aEe(i,"Child order",l.clp(l.at),new C.dzd(l),new C.dze(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hic(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dzf(l):k
B.d.u(r,A.a([B.T,new C.aEe(i,"Visible in tree",u,w,new C.dzg(l),k)],v))}r.push(B.T)
w=j?B.jZ:B.iO
u=A.l(14)
t=A.K(j?B.eh:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.o(k,A.iV(k,B.bQ,k,B.ag,k,new C.dzh(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.n(w,k,t,u,k,k,B.n),k,k,k,k,K.amU,k,k,k))
r.push(B.bx)
w=j?B.aS:B.av
j=j?B.eh:B.bO
r.push(A.A(A.a([A.E(A.dV(B.o8,new C.dz9(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.co,k,new A.ba(A.l(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bJ(D.fj8,k,l.gcdg(),A.bp(B.aV,k,k,0,B.c,k,B.co,k,new A.ba(A.l(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.i,0,k,k))
r.push(B.ax)
return A.em(B.f8,k,B.ag,h,new A.a5(420,k,A.ca(A.x(r,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.anM,k,B.an5,new A.ba(g,B.a1),k,k)},
clp(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aeD.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jZ:B.iO,s=A.l(16)
return A.x(A.a([new A.D(B.a1I,u,w),A.o(w,this.e,B.f,w,w,new A.n(t,w,A.K(v?B.eh:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bl,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bli.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ef:B.c,r=A.l(12),q=A.K((t?B.eh:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.o(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bA(u,B.eN,u,B.t8,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.m(u,u,t?B.bu:B.bj,u,u,u,u,u,u,u,u,u,u,u,B.cD,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.n(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aeC.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ef:B.c,s=A.l(12),r=A.K((u?B.eh:B.bO).j(0.85),B.r,1),q=A.X(B.tj,u?B.bu:B.bj,v,v,v,v),p=A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ef:B.c
return A.o(v,new A.Er(A.a5M(v,o,A.d(w.f,v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,v,v,v,B.cD,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.n(t,v,r,s,v,v,B.n),v,v,v,v,B.kX,v,v,v)}}
C.blh.prototype={
B(d){var w=new C.dzi(this)
return A.A(A.a([w.$3(D.wN,"Male",B.Q8),B.ae,w.$3(D.oB,"Female",B.PV),B.ae,w.$3(D.zg,"Other",B.nN)],x.p),B.l,null,B.e,B.i,0,null,null)}}
C.aEe.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jZ:B.iO,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.o(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aKu(u,B.x1,w.f,v),B.bn,new C.aKu(u,B.i_,w.r,v)],o),B.l,v,B.e,B.i,0,v,v),B.f,v,v,new A.n(s,v,q,r,v,v,B.n),v,v,v,v,B.ez,v,v,v)}}
C.aKu.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.ef:B.c
v=A.l(10)
u=A.l(10)
if(p)t=B.bQ
else t=(s.c.a?B.bu:B.bj).j(0.4)
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.aeE.prototype={
bVP(d){switch(d.a){case 0:return B.bQ
case 1:return B.bE
case 2:return B.cC}},
bVQ(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_A(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AT(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ef:B.c
u=A.l(12)
t=A.K((w?B.eh:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.X(f,B.bQ,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bj,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.ax,A.d(o,p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.o(p,A.A(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.n(v,p,t,u,p,p,B.n),p,p,p,B.cw,B.z_,p,p,1/0)},
afL(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jZ:B.iO,s=A.l(16),r=A.K(v?B.eh:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a1I,u,w),A.o(w,A.x(e,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.n(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hK5(r,q),o=q.c,n=t.bVP(o),m=A.bG0(q.f),l=t.e.a,k=l?B.ef:B.c,j=A.l(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.m(s,s,l?B.aS:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kZ?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.m(s,s,l?B.bu:B.bj,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.o(s,A.hg(u,m,m==null?A.X(B.px,n,s,s,s,48):s,s,52),B.f,s,s,new A.n(s,s,w,s,v,s,B.a6),s,s,s,s,B.eC,s,s,s),s,s,s)
w=n.j(0.14)
v=A.l(20)
u=A.K(n.j(0.45),B.r,1)
v=A.as(A.o(s,A.d(t.bVQ(o),s,s,s,s,s,s,A.m(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.n(w,s,u,v,s,s,B.n),s,s,s,s,B.lO,s,s,s),s,s,s)
u=x.p
i=A.a([t.AT("Full name",i,B.mj)],u)
if(p>0)i.push(t.AT("Child order","#"+p,B.Q0))
r=A.a([h,B.ax,r,B.aO,l,B.T,v,B.bx,t.afL("Identity",i),B.af,t.afL("Life details",A.a([t.AT("Birth date",q.w,D.aq6),t.AT("Birth place",q.x,B.a37),t.AT("Date of death",q.y,D.asb),t.AT("Occupation",q.z,B.Qn)],u)),B.af,t.afL("Family links",A.a([t.AT("1. Parent",t.b_A(q.d),B.HH),t.AT("2. Spouse",t.b_A(q.e),B.HX)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.afL("Notes",A.a([t.AT("Notes",q,B.l0)],u))],u))
r.push(B.bx)
r.push(A.bJ(B.Lp,s,new C.dzs(d),A.bp(B.aV,s,s,s,s,s,B.co,s,new A.ba(A.l(14),B.a1),s,s,s)))
return A.eI(s,k,new A.cN(B.m4,A.ca(A.x(r,B.al,s,B.e,B.N,0,B.p),B.t,s,B.y,s,s,B.wH,s,s,B.ah),s),s,s,s,B.Hj,s,B.d7,s,new A.ba(j,B.a1),s)}}
C.GB.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bj
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uR,A.hd(A.aF(!1,B.a3,!0,A.l(8),A.aM(!1,A.l(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.arz.prototype={
f2(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,aa<q,@>>")
w=A.B(new A.N(w,new C.cgi(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jp(w,new C.cgj(),t,x.fO))
return s}}
C.arA.prototype={
S(){return new C.aFN(A.a([],x.bF))},
gd1(){return this.c}}
C.aFN.prototype={
Z(){this.a3()
this.Kn()},
Kn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Kn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cgm(t.a.c),$async$Kn)
case 3:r=e
w=4
return A.b(C.Bj(t.a.c),$async$Kn)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rn(q,new C.e52(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e53(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Kn,v)},
zc(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
Lb(d,e){return this.cL_(d,e)},
cL_(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Lb=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e57(q,e))
t=3
w=6
return A.b(d.$0(),$async$Lb)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e58(q))
$.eX.mK()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Lb,v)},
YK(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pD(r,s.c,s.e),$async$YK)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lb(new C.e5_(t),"Preparing download\u2026"),$async$YK)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YK,v)},
YO(d){return this.bTH(d)},
bTH(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pD(r,s.c,s.e),$async$YO)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Lb(new C.e50(t,d),"Preparing file\u2026"),$async$YO)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YO,v)},
ahM(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahM=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xP.cq().MW(B.T8,B.uU,!0),$async$ahM)
case 7:r=e
o=r
q=o==null?null:J.fm(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jJ(o,0,null)
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
case 6:u=A.Hy()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahM,v)},
Zr(d){return this.c3b(d)},
c3b(d){var w=0,v=A.j(x.H),u=this
var $async$Zr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Lb(new C.e51(u,d),"Restoring family trees\u2026"),$async$Zr)
case 2:return A.h(null,v)}})
return A.i($async$Zr,v)},
Zq(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahM(),$async$Zq)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Zr(s),$async$Zq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zq,v)},
a3q(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pD(r,s.c,s.e),$async$a3q)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lb(new C.e56(t),"Creating QR code\u2026"),$async$a3q)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3q,v)},
a31(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a31=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DE()){t.zc("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ce(A.ee(new C.e54(),!0,null,x.N)),$async$a31)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Zr(r),$async$a31)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a31,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===B.I,n=o?B.C4:B.hY,m=o?D.alj:B.aS,l=o?B.aL:B.bO,k=o?B.aS:B.av,j=new C.dj5(n,m,l,k,o?B.bP:B.bj)
l=A.aH(p,p,p,p,A.X(B.eK,k,p,p,p,20),p,p,p,new C.e5a(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eR(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.diE(!0,B.ju,B.aH,B.aH,q.r?p:q.gcBt(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gcxC()
t.push(A.E(C.diE(!s,B.jv,B.b8,B.bh,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.diE(!1,B.hD,B.aV,B.bQ,q.r?p:q.gbTA(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.diE(!1,B.zN,B.at,B.aQ,q.r?p:q.gc38(),j,s,"Upload backup file"),1))
l=A.a([new C.bhv(v,l,p),B.lb,new C.adT(j,"QR restore",p),B.T,t,B.db,new C.adT(j,"Backup files",p),B.T,A.A(r,B.l,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.lb,new C.adT(j,"One tree",p),B.T],u)
B.d.u(v,J.b9(q.d,new C.e5b(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cv(l,p,p,B.a1A,p,p,B.ah,!1)],u)
if(q.r){v=A.l(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dp,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.o(p,A.A(A.a([K.aVe,B.bc,A.E(A.d(r,p,p,p,p,p,p,A.m(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.n(m,p,t,v,s,p,B.n),p,p,p,p,B.CM,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dj5.prototype={}
C.bhv.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.l(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.kF,28)],x.V)
t=A.ao(p,A.X(B.ve,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.l(18)
q=x.p
return A.o(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.o(p,D.c4r,B.f,p,p,new A.n(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.p4,A.E(A.x(A.a([D.fS3,B.P,A.d(w,p,p,p,p,p,p,A.m(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.n(p,p,p,v,u,D.ccC,B.n),p,p,p,p,p,p,p,p)}}
C.adT.prototype={
B(d){var w=null
return A.A(A.a([A.o(w,w,B.f,w,w,new A.n(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.m(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.bht.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.l(18),n=A.l(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aH.j(0.1),B.cM,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.l(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aF(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eE(A.d1(new A.D(B.a1e,A.x(A.a([A.o(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.n(v,q,s,u,q,q,B.n),q,q,q,q,B.tc,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.m(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bF,A.d(r.f,q,q,q,q,q,q,A.m(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cD,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.n(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bhy.prototype={
B(d){var w=this,v=null,u=A.l(18),t=A.l(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.l(12),o=s.e,n=x.p
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eE(new A.D(B.eX,A.A(A.a([A.o(v,D.c3D,B.f,v,v,new A.n(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.tc,v,v,v),B.bc,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.m(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.m(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hD,o,v,v,v,20)],n),B.l,v,B.e,B.i,0,v,v),v),v,new A.n(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a0P.prototype={
S(){return new C.aFM()},
gd1(){return this.c}}
C.aFM.prototype={
Z(){this.a3()
this.aaD()},
aaD(){var w=0,v=A.j(x.H),u=this,t
var $async$aaD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b4H(u.a.c,B.EE),$async$aaD)
case 2:t=e
if(u.c!=null)u.m(new C.e4V(u,t))
return A.h(null,v)}})
return A.i($async$aaD,v)},
ajd(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ajd=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e4W(q))
t=4
p=A.hv1(q.a.d,B.EE)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.atS(n.e,m,l,B.EE,p,n.f),$async$ajd)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e4X(q))
q.c.K(x.q).f.T(D.fsL)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(B.a.el(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e4Y(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ajd,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=p?B.nz:B.qr,n=p?B.iJ:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eR(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.h7z,q,q,q,1,q,!0)
w=A.l(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qh(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.m(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.o(q,A.x(A.a([B.P,u,B.bx,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.m(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.b9,B.i,0,B.p),B.f,q,q,new A.n(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.m(q,q,p?B.ab:B.by,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcxl()
if(u)u=B.KQ
else u=A.X(r.e===!0?B.hd:B.aq5,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.ep(u,q,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aV,q,B.hg,q,q,q,new A.ax(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.ig,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.m(q,q,p?B.aE:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.T)
w.push(new A.a5(1/0,q,A.bJ(B.Bc,q,new C.e4Z(d),A.bp(B.aV,q,q,q,q,B.hg,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.ac,A.x(w,B.l,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a0Q.prototype={
S(){return new C.bmO(A.zS(B.yO,B.oe,B.vn))}}
C.bmO.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c5(A.eR(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h_h,w,w,w,1,w,!0),B.w,A.zR(this.d,B.bY,new C.e5c(this,d)),w,!1,!1,w,w)}}
C.b0y.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.m(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.SD,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lX.prototype={}
C.a7C.prototype={
S(){return new C.bms(null,null)}}
C.bms.prototype={
Z(){var w=this,v=null
w.a3()
w.d=A.bo(v,B.t2,v,1,v,w)
w.e=A.bo(v,B.nD,v,1,v,w)
w.a.toString
w.d.cK(0)
w.e.cK(0)},
bz(d){var w,v,u=this
u.bK(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)},
t(){var w=this.d
w===$&&A.c()
w.t()
w=this.e
w===$&&A.c()
w.t()
this.bzL()},
B(d){var w,v,u=this,t=B.d.dM(D.a7f,new C.dR4(u),new C.dR5())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cE9(A.c6(new A.he(A.a([w,v],x.dS)),new C.dR6(u,t),null),!0)}}
C.bmr.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b4j(d,e)
break
case"house":p.mo(d,e,D.dkm)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdk()
$.S()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mu(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BG(d,e,12)
p.yO(d,e,B.lk,5,14)
break
case"grocery":p.cm9(d,e)
break
case"calculator":p.clR(d,e)
break
case"lumber":p.cmh(d,e)
break
case"kitchen":p.cmc(d,e)
break
case"landscape":p.mo(d,e,D.dkY)
s=new A.aG($.S().r,B.aj,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.ce(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.ce(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bx())
w=A.L()
w.r=B.ep.j(0.85).gp(0)
d.af(s,w)
p.BG(d,e,8)
p.yO(d,e,B.iz,4,18)
break
case"plumbing":p.cmr(d,e)
break
case"electrical":p.mo(d,e,D.dwP)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aF(new A.a4(0,0,0+e.a,0+e.b),u)
p.mu(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mu(d,e,B.or.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BG(d,e,10)
break
case"store":p.cmB(d,e)
break
case"paint_remodel":p.cml(d,e)
break
case"roofing":p.cmt(d,e)
break
case"warehouse":p.cmI(d,e)
break
case"vehicles":p.cmG(d,e)
break
case"farm":p.cm3(d,e)
break
case"restaurant":p.cms(d,e)
break
case"tools":p.cmE(d,e)
break
case"wallet":p.cmH(d,e)
break
case"concrete":p.clX(d,e)
break
case"blueprint":p.clP(d,e)
break
default:p.b4j(d,e)}},
mo(d,e,f){var w,v=new A.a4(0,0,0+e.a,0+e.b)
$.S()
w=A.L()
w.san(new A.a7(B.ay,B.aC,B.x,f,null,null).aD(0,v))
d.aF(v,w)},
mu(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdk()/2-h
$.S()
w=A.L()
w.b=B.aa
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.bW(t,s),u,u+0.1439896632895322-u,!1,w)}},
yO(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdk()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BG(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.h.F(t*0.17,0.9)
q=B.h.F(t*0.23,0.85)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b4j(d,e){var w,v=this
v.mo(d,e,D.dv3)
w=v.c
v.mu(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mu(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bRw(d,e,B.hN,w)
v.yO(d,e,B.c.j(0.7),6,8)},
bRw(d,e,f,g){var w,v,u,t,s,r
$.S()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aF(new A.a4(16,r,t,r+3),w)}},
cm9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mo(d,e,D.cyq)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.aq(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=D.dis[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mu(d,e,B.c.j(0.35),w,16)
l.yO(d,e,B.iz,5,12)},
clR(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mo(d,e,D.cyy)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdk()
$.S()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.O(new A.r(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fD(h,B.cx,h,h,h,h,B.a7,B.c1,h,B.dK,B.c2)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dmN[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb4(0,new A.ev(r,h,h,B.cN,h,h,h,h,h,h,new A.G(!0,q,h,h,h,h,14+m*4,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.ep()
p.a4(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.aq(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cyA[o]
l=B.kO.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb4(0,new A.ev(m,h,h,B.cN,h,h,h,h,h,h,new A.G(!0,l,h,h,h,h,12+k*3,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.ep()
p.a4(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.aq(o,3)*0.38)+Math.sin(n)*6))}i.mu(d,e,B.c.j(0.35),w*1.5,14)
i.mu(d,e,B.ey.j(0.55),-v*3.141592653589793*2,8)
i.mu(d,e,B.on.j(0.4),r*2.8,22)
i.yO(d,e,B.pl,8,10)
i.BG(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.h.F(w+o*0.22,0.9)
$.S()
v=new A.ar(B.S,B.Q,B.V,B.X,B.U)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
cmh(d,e){var w,v,u,t,s,r,q,p,o=this
o.mo(d,e,N.aBT)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.by(new A.a4(20,r,u,r+10),B.iF)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=A.ap(B.fZ,B.oh,(s+1)/2).gp(0)
d.ar(q,p)}o.mu(d,e,B.fZ.j(0.35),w,15)
o.BG(d,e,8)},
cmc(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mo(d,e,D.diY)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.h.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.h.F(s*0.13,0.7)
$.S()
m=new A.ar(B.S,B.Q,B.V,B.X,B.U)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mu(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
l.yO(d,e,B.qg,4,14)},
cmr(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mo(d,e,D.d6J)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.h.F(s,0.12)
$.S()
o=new A.ar(B.S,B.Q,B.V,B.X,B.U)
o.b=B.aa
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yO(d,e,B.pp,6,12)
n.mu(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cmB(d,e){var w,v,u,t,s,r,q,p=this
p.mo(d,e,D.cMl)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.by(new A.a4(r,14,r+u,22),B.jy)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.fB,B.bL,(s+1)/2).gp(0)
d.ar(r,q)}p.mu(d,e,B.c.j(0.3),w,16)
p.BG(d,e,8)
p.yO(d,e,B.wn,5,13)},
cml(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.ddi)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.h.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.by(new A.a4(r,q,r+8,q+(18+s*22)),B.ir)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=[B.ix,B.dy,B.bL,B.ew][t].j(0.85).gp(0)
d.ar(q,r)}this.mu(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cmt(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.daz)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.h.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yO(d,e,B.cA,7,11)},
cmI(d,e){var w,v,u,t,s,r,q,p
this.mo(d,e,D.cP7)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.by(new A.a4(q,p,q+(t-s*8),p+16),B.iF)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.cA,B.aS,(Math.sin(r)+1)/2).gp(0)
d.ar(p,q)}this.mu(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cmG(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.dBb)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.h.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.by(new A.a4(s,r,s+28,r+8),B.iF)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.ar(r,q)}this.BG(d,e,6)},
cm3(d,e){var w,v,u,t,s,r,q,p
this.mo(d,e,D.dhu)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.L()
s.r=B.or.j(0.75).gp(0)
d.O(new A.r(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.hL.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.mu(d,e,B.or.j(0.35),w,14)},
cms(d,e){var w,v,u,t,s,r,q=this
q.mo(d,e,D.dka)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bX(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.S()
r=new A.ar(B.S,B.Q,B.V,B.X,B.U)
r.r=B.c.j(0.22).gp(0)
d.c1(s,r)}q.yO(d,e,B.qg,5,16)
q.BG(d,e,7)},
cmE(d,e){var w,v,u,t,s,r,q,p,o=this
o.mo(d,e,D.dyt)
w=o.c
v=w*3.141592653589793
o.mu(d,e,B.oh.j(0.55),v*3,10)
o.mu(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.oh.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
cmH(d,e){var w,v,u,t,s,r,q,p,o=this
o.mo(d,e,D.dBW)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.by(new A.a4(q,p,q+36,p+22),B.jy)
$.S()
q=new A.ar(B.S,B.Q,B.V,B.X,B.U)
q.r=A.ap(B.iz,B.or,r).gp(0)
d.ar(p,q)}o.BG(d,e,9)
o.mu(d,e,B.c.j(0.4),w*2.2,12)},
clX(d,e){var w,v,u,t,s,r,q,p
this.mo(d,e,D.dpM)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bW(new A.r(v,u),34)
$.S()
s=A.L()
s.b=B.aa
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cQ(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.S,B.Q,B.V,B.X,B.U)
p.r=B.bO.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
clP(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.dlh)
$.S()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.r(t,0),new A.r(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.r(0,s),new A.r(v,s),w)
r=this.c
q=u*B.h.F(r*0.85,1)
$.S()
u=A.L()
u.r=B.dy.j(0.45).gp(0)
d.aF(new A.a4(0,q,0+v,q+6),u)
this.mu(d,e,B.lk.j(0.45),-r*3.141592653589793*2,11)},
aE(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.auD.prototype={
a0I(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0I=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aSG(),$async$a0I)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9V(s),$async$a0I)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0I,v)},
ahN(d){return this.cp0(d)},
cp0(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iw_(d),$async$ahN)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahN,v)},
B(d){var w,v,u=null,t=A.O(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.jZ:B.iO
w=x.p
v=A.a([C.aT3(!0,B.rt,1/0,B.qN,u,s,1/0)],w)
if(!r)v.push(new A.bN(new A.n(u,u,u,u,u,new A.a7(B.aY,B.b3,B.x,A.a([B.L,B.w.j(0.35)],x.O),u,u),B.n),B.bk,new A.bK(B.aY,u,u,new A.D(B.t5,A.d("Pick a theme or your own photo",u,u,u,u,u,u,A.m(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aCS,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.de(D.bXZ,u,D.fOc,new C.cpS(this,d),A.bp(B.aV,u,u,u,B.c,u,B.k6,u,u,u,u,B.ch)),1),B.ae,A.E(A.ep(D.c5K,u,D.h2t,this.gcfT(),A.dj(u,u,B.w.j(0.35),u,u,u,u,u,u,B.c,u,u,B.k6,u,u,D.b6H,u,u,u,B.ch)),1)],w),B.l,u,B.e,B.i,0,u,u),u,u,8,8,u,u))
return new A.fG(1.7777777777777777,A.aF(!1,B.a3,!0,B.rt,new A.an(B.a0,u,B.b1,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.ai),u)}}
C.aNU.prototype={
aX(){this.b8()
this.b6()
this.dJ()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.aW_.prototype={}
C.aVZ.prototype={}
C.aU1.prototype={}
C.a_t.prototype={
S(){return new C.aAX()}}
C.aAX.prototype={
Z(){var w,v,u=this
u.a3()
u.a.toString
w=new A.bb("",B.b7,B.aP)
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.at(w,v)},
t(){var w=this.d
w===$&&A.c()
w.V$=$.aw()
w.R$=0
this.a2()},
L0(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.T(D.ftg)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).N(new C.aW_(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.O(d).ax.a===B.I,l=m?B.ef:B.c,k=A.l(20),j=A.o(n,D.c5p,B.f,n,n,new A.n(B.aV.j(0.15),n,n,A.l(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bF,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bc,i,A.aH(n,n,n,n,A.X(B.cB,m?B.bu:B.bj,n,n,n,n),n,n,n,new C.dab(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.m(n,n,m?B.bu:B.bj,n,n,n,n,n,n,n,n,11,n,n,B.cD,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hvh(new C.dac(o),o.e)
u=o.d
u===$&&A.c()
t=A.m(n,n,m?B.aS:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jZ:B.iO
r=A.l(12)
q=A.l(12)
p=m?B.eh:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bA(n,new A.b6(4,r,B.du),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.dad(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,B.KZ,n,n,n,n)
u=m?B.aS:B.av
m=m?B.eh:B.bO
return A.eI(n,l,new A.cN(B.m4,A.ca(A.x(A.a([j,B.aO,i,B.ax,w,B.P,v,B.aO,t,B.bx,A.A(A.a([A.E(A.dV(B.ds,new C.dae(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.co,n,new A.ba(A.l(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bJ(D.h2J,n,o.ga3M(),A.bp(B.aV,n,n,n,B.c,n,B.co,n,new A.ba(A.l(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.N,0,B.p),B.t,n,B.y,n,n,B.CO,n,n,B.ah),n),n,n,n,R.CP,n,B.d7,n,new A.ba(k,B.a1),n)}}
C.a_s.prototype={
S(){return new C.aAW()}}
C.aAW.prototype={
Z(){this.a3()
var w=$.aw()
this.d!==$&&A.aQ()
this.d=new A.at(B.aw,w)},
t(){var w=this.d
w===$&&A.c()
w.V$=$.aw()
w.R$=0
this.a2()},
L0(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.T(D.fqS)
return}v=this.c
v.toString
A.a6(v,!1).N(new C.aVZ(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.O(d).ax.a===B.I,o=p?B.ef:B.c,n=A.l(20),m=A.o(q,D.c1J,B.f,q,q,new A.n(B.bQ.j(0.15),q,q,A.l(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bF,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.m(q,q,p?B.bu:B.bj,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bc,l,A.aH(q,q,q,q,A.X(B.cB,p?B.bu:B.bj,q,q,q,q),q,q,q,new C.da7(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.i,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.l(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.X(B.apS,B.aV.j(0.9),q,q,q,18)
l=A.o(q,A.A(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.i,0,q,q),B.f,q,q,new A.n(l,q,v,w,q,q,B.n),q,q,q,q,B.bH,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.m(q,q,p?B.aS:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jZ:B.iO
t=A.l(12)
s=A.l(12)
r=p?B.eh:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bA(q,new A.b6(4,t,B.du),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.da8(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.lc,q,q,q,q)
w=p?B.aS:B.av
p=p?B.eh:B.bO
return A.eI(q,o,new A.cN(B.m4,A.ca(A.x(A.a([m,B.aO,l,B.aB,v,B.bx,A.A(A.a([A.E(A.dV(B.ds,new C.da9(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.co,q,new A.ba(A.l(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bJ(D.h9Q,q,this.ga3M(),A.bp(B.bQ,q,q,q,B.c,q,B.co,q,new A.ba(A.l(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.N,0,B.p),B.t,q,B.y,q,q,B.CO,q,q,B.ah),q),q,q,q,R.CP,q,B.d7,q,new A.ba(n,B.a1),q)}}
C.ZZ.prototype={
S(){return new C.azC()}}
C.azC.prototype={
Z(){var w,v=this
v.a3()
w=$.aw()
v.d!==$&&A.aQ()
v.d=new A.at(B.aw,w)
v.e!==$&&A.aQ()
v.e=new A.at(new A.bb("1",B.b7,B.aP),w)
v.f!==$&&A.aQ()
v.f=new A.at(B.aw,w)
v.r!==$&&A.aQ()
v.r=new A.at(B.aw,w)},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.V$=$.aw()
u.R$=0
u=v.e
u===$&&A.c()
u.V$=w
u.R$=0
u=v.f
u===$&&A.c()
u.V$=w
u.R$=0
u=v.r
u===$&&A.c()
u.V$=w
u.R$=0
v.a2()},
gKi(){var w,v=this.e
v===$&&A.c()
w=A.cW(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakY(){var w=this.f
w===$&&A.c()
w=A.cW(B.a.i(w.a.a))
return w==null?0:w},
gb78(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aRj(d){var w,v=B.h.D(this.gKi()+d,0.25,999999),u=B.h.fK(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.v(B.h.M(v))
else{u=B.h.ad(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb4(0,u)
this.m(new C.cIg())},
aAh(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jZ:B.iO,s=A.l(14),r=A.l(14)
u=u?B.eh:B.bO
return A.bA(w,new A.b6(4,s,B.du),w,B.bH,w,w,w,w,!0,new A.b6(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.l(14),B.af9),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cfU(d,e,f){return this.aAh(d,e,f,null)},
L0(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakY()<=0){s.c.K(x.q).f.T(D.fva)
return}r=s.c
r.toString
v=s.gKi()
u=s.gakY()
t=s.gb78()
A.a6(r,!1).N(new C.aU1(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.ui(n),l=n?B.ef:B.c,k=A.l(24),j=x.O,i=A.a([B.aV.j(0.22),B.bQ.j(0.14)],j),h=A.l(14)
i=A.o(o,D.bVV,B.f,o,o,new A.n(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a7(B.a5,B.a9,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bF,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.cD,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bc,h,A.aH(o,o,o,o,A.X(B.cB,n?B.bu:B.bj,o,o,o,o),o,o,o,new C.cIm(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aAh(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Q6),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.KZ,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jZ:B.iO
t=A.l(14)
s=A.K(n?B.eh:B.bO,B.r,1)
r=A.aH(o,o,o,o,A.X(B.x1,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cIn(p),o,o,o,o,o,B.ch)
q=p.e
q===$&&A.c()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c7i,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.eb,o,o,o,1,o,o,!1,"\u2022",o,new C.cIo(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.o(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aH(o,o,o,o,A.X(B.i_,n?B.aS:B.av,o,o,o,20),o,o,o,new C.cIp(p),o,o,o,o,o,B.ch)],w),B.l,o,B.e,B.N,0,o,o),B.f,o,o,new A.n(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.as,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aAh(m,"Amount","0.00",B.hC),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.eb,o,o,o,1,o,o,!1,"\u2022",o,new C.cIq(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.B(new A.N(D.ddS,new C.cIr(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aB,h,B.P,s,B.af,A.c_(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.T,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.cfU(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cIs(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.lc,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.l(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKi()===B.h.fK(p.gKi())?B.h.M(p.gKi()):p.gKi()
s=p.gb78()
r=A.Bl(p.gakY())
i.push(A.o(o,A.A(A.a([A.E(A.x(A.a([u,B.ax,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.m(o,o,n?B.bu:B.bj,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bGQ(p.gKi()*p.gakY(),B.b2,!1,B.u)],w),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.n(o,o,v,h,o,new A.a7(B.a5,B.a9,B.x,j,o,o),B.n),o,o,o,o,B.jr,o,o,o))
i.push(B.bx)
j=A.l(14)
h=n?B.eh:B.bO
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.co,o,new A.ba(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dV(A.d("Cancel",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cIt(d),h),1),B.as,A.E(A.de(D.atl,o,D.h5K,p.ga3M(),A.bp(B.aV,o,o,0,B.c,o,B.co,o,new A.ba(A.l(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.i,0,o,o))
return A.eI(o,l,new A.cN(B.Mp,A.ca(A.x(i,B.al,o,B.e,B.N,0,B.p),B.t,o,B.y,o,o,A5.ta,o,o,B.ah),o),o,o,o,B.OH,o,B.d7,o,new A.ba(k,B.a1),o)}}
C.a2B.prototype={
S(){return new C.bzg()}}
C.bzg.prototype={
Z(){var w,v,u=this
u.a3()
w=u.a.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.at(new A.bb(w,B.b7,B.aP),v)},
t(){var w=this.d
w===$&&A.c()
w.V$=$.aw()
w.R$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=r?B.ef:B.c,p=A.l(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.m(s,s,r?B.aS:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.m(s,s,r?B.aS:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jZ:B.iO
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bA(s,new A.b6(4,A.l(12),B.du),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.foG(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dV(B.ds,new C.foH(d),s),1)
r=A.bp(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eI(s,q,new A.D(B.CO,A.x(A.a([o,B.aB,v,B.aO,A.A(A.a([u,B.as,A.E(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.foI(t,d),r),1)],w),B.l,s,B.e,B.i,0,s,s)],w),B.l,s,B.e,B.N,0,B.p),s),s,s,s,s,s,B.d7,s,new A.ba(p,B.a1),s)}}
C.acV.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gp.prototype={
S(){return new C.bze(null,null)}}
C.bze.prototype={
Z(){var w,v=this
v.a3()
w=A.bo(null,D.bCL,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bC5()},
gbDH(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bQ,B.b2],x.O)
case 2:return A.a([B.bv,B.aV,B.b2],x.O)
case 3:return A.a([B.aH,B.cj,B.jG],x.O)
case 4:return A.a([B.fK,B.bQ,B.fq],x.O)
case 0:return A.a([B.aV,B.bQ,B.b2],x.O)}},
B(d){var w=A.O(d),v=this.d
v===$&&A.c()
return new A.e6(A.c6(v,new C.foE(this,new C.ui(w.ax.a===B.I)),null),null)}}
C.azv.prototype={
S(){return new C.bzf(null,null)}}
C.bzf.prototype={
Z(){var w,v=this
v.a3()
w=A.bo(null,B.nE,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bC6()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.foF(this),null)}}
C.bzd.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.by(new A.a4(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aG($.S().r,B.aj,null,null,A.a([],x.v))
u.E(new A.j9(v))
w=A.L()
w.b=B.aa
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.ar(v,w)
w=A.L()
w.b=B.aa
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.BN(u)
t=A.a([],x.U)
w=new A.uR(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jH(y.B));--r
q=new A.BO(w,r)
w.jP()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUU(d,q,r,o,0,0.2,4.2,0.92)
p.aUU(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUU(d,e,f,g,h,i,j,k){var w,v,u,t=B.h.F(g+h,1)*f,s=A.hSy(e.a.a,e,t,t+f*i,!0),r=A.ahZ(s.glg().a.getBounds())
$.S()
w=A.L()
w.b=B.aa
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a7(B.a5,B.a9,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.IT,null).aD(0,r))
d.af(s,w)},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.aQ1.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.aQ2.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b8()
this.b6()
this.bD()}}
C.ui.prototype={}
C.auC.prototype={
S(){return new C.aHi()},
ge3(){return this.c}}
C.aHi.prototype={
Z(){var w=this
w.a3()
w.d=w.a.d
w.aiE()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Mi(w,v)
this.a2()},
aiE(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aiE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bFf(t.c,t.d.a),$async$aiE)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eXl(u,s))
return A.h(null,v)}})
return A.i($async$aiE,v)},
R5(){var w=0,v=A.j(x.H),u=this,t,s
var $async$R5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eXc(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Mi(t,s),$async$R5)
case 2:if(u.c!=null)u.m(new C.eXd(u))
return A.h(null,v)}})
return A.i($async$R5,v)},
RE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.O(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eXj(t,new C.ui(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$RE)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9V(q),$async$RE)
case 6:case 5:t.m(new C.eXk(t,r))
w=7
return A.b(t.R5(),$async$RE)
case 7:case 1:return A.h(u,v)}})
return A.i($async$RE,v)},
WR(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ivL(r),$async$WR)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eX7(t,new C.rs(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.R5(),$async$WR)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WR,v)},
cl_(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hK1(t,new C.eXb(u),w,v)},
acr(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.o(w,w,B.f,w,w,new A.n(w,w,new A.bH(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b6t,w,w,B.n),w,22,w,w,w,w,w,22)},
abt(d){return this.bPL(d)},
bPL(d){var w=0,v=A.j(x.H),u=this
var $async$abt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eXa(u,d))
w=2
return A.b(u.R5(),$async$abt)
case 2:return A.h(null,v)}})
return A.i($async$abt,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.O(a2).ax.a===B.I,e=f?B.c6:B.hY,d=A.l(8),a0=A.X(P.a2P,f?B.bu:B.bj,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.Hp,A.A(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bj,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.N,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eXm(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.Y(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b1,B.t,A.a([A.bv(A.l(22),C.aT3(!0,A.l(22),1/0,B.qN,g,d,1/0),B.aq),A.ao(10,A.de(D.c_D,g,D.h87,h.gb53(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.ho,g,new A.ba(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.l(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eS,22),new A.ac(-4,B.G,B.bQ.j(0.2),B.J,32)],w)
u=A.l(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.l(16)
r=h.d
v=A.o(g,A.o(g,A.bv(s,new A.an(B.a0,g,B.b1,B.t,A.a([C.aT3(!0,A.l(16),1/0,B.Pz,g,r.c,1/0),new A.bN(new A.n(g,g,g,g,g,new A.a7(B.aY,B.b3,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bk,g,g),A.ao(g,h.acr(!0),g,g,8,g,8,g),A.ao(g,A.cEU(h.acr(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cEU(h.acr(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cEU(h.acr(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.de(D.bWw,g,D.h1r,h.gb53(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.ho,g,new A.ba(A.l(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.n(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.n(g,g,g,d,v,D.c9_,B.n),g,g,g,g,B.lQ,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.l(22)
u=x.O
u=f?A.a([D.bhv,B.ol,B.hl],u):A.a([B.b2,B.aV,B.bQ],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eS,24)],t)
r=A.l(22)
p=A.ao(g,A.X(B.js,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.l(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.o(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.m(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.n(o,g,m,n,g,g,B.n),g,g,g,g,B.hm,g,g,g)],a1),B.l,g,B.e,B.i,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.m(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bGQ(h.d.gxN(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.m(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cD,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.l(14)
m=A.l(14)
l=B.c.j(0.12)
k=A.K(B.ha.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aH.j(0.28),B.cM,14)],t)
j=B.aH.j(0.22)
i=A.l(10)
u=A.o(g,A.bv(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bHF,A.A(A.a([o,B.as,A.aF(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eE(new A.D(M.wF,A.x(A.a([A.o(g,D.asV,B.f,g,g,new A.n(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cq,g,g,g),B.fE,D.fR2],a1),B.l,g,B.e,B.N,0,B.p),g),g,new A.n(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gckZ(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.i,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.n(g,g,g,v,s,new A.a7(B.ay,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bx,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b4,A.de(B.a4G,g,D.fOT,h.gbEa(),A.bp(B.aV,g,g,g,B.c,g,B.hP,g,new A.ba(A.l(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.i,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ef:B.c
v=A.l(14)
u=A.K(f?B.eh:B.bO,B.r,1)
t=A.X(B.a3a,f?B.bu:B.bj,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.m(g,g,f?B.aS:B.av,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.o(g,A.x(A.a([t,B.T,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.m(g,g,f?B.bu:B.bj,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.n(w,g,u,v,g,g,B.n),g,g,g,g,B.qJ,g,g,1/0))}else B.d.u(d,new A.N(w,new C.eXn(h,new C.ui(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.yU,A.as(A.n0(g,f?B.bu:B.bj,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bm(!0,A.x(A.a([new A.D(B.CF,a0,g),A.E(A.ca(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,g,B.z6,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bHR(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ef:B.c,p=A.l(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cM,12)],x.V),n=A.l(16),m=A.o(u,u,B.f,u,u,D.b9e,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.l(12)
l=A.o(u,A.X(s?B.ii:B.h4,B.b2,u,u,u,20),B.f,u,u,new A.n(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bM
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.m(u,u,r?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd0F()
v=A.Bl(d.d)
B.d.u(t,A.a([B.ax,A.d(w+" "+v,u,u,u,u,u,u,A.m(u,u,r?B.bu:B.bj,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b9,B.N,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bQ.j(0.1)],x.O)
w=A.l(12)
k=A.o(u,C.bGQ(d.c*d.d,B.b2,!1,B.u),B.f,u,u,new A.n(u,u,u,w,u,new A.a7(B.a5,B.a9,B.x,k,u,u),B.n),u,u,u,u,B.ho,u,u,u)
w=x.p
return A.o(u,A.bv(n,new A.EQ(A.A(A.a([m,A.E(new A.D(B.amN,A.A(A.a([l,B.bc,t,B.ae,k,A.aH(u,u,u,u,A.X(B.cB,(r?B.bu:B.bj).j(0.75),u,u,u,20),u,u,u,new C.eX8(this,d),u,u,u,u,u,B.ch)],w),B.l,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.aq),B.f,u,D.b84,new A.n(q,u,u,p,o,u,B.n),u,u,u,B.da,u,u,u,u)}}
C.aeZ.prototype={
F4(d){return this.bR8(d)},
bR8(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$F4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pD(d,o,!1),$async$F4)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
w=4
return A.b(A.bO(A4.Cz,null,x.H),$async$F4)
case 4:s=t.d
w=5
return A.b(C.fYZ(!0,o,s),$async$F4)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hl(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$F4)
case 6:p=f
w=7
return A.b(A.pC(o,!1),$async$F4)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$F4,v)},
a0K(d){return this.cBu(d)},
cBu(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pD(d,s,!1),$async$a0K)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
A.hE(d,new C.auw(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pC(s,!1),$async$a0K)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0K,v)},
R6(d){return this.cxx(d)},
cxx(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$R6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(A.hE(d,D.aMF,!0,"NgmyWorksheetProjectScan",x.N),$async$R6)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bGR(s),$async$R6)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.T(D.fuh)
w=1
break}q=C.hkI(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dL(p,x.H),$async$R6)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$R6,v)},
a0L(d){return this.cJQ(d)},
cJQ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0L=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(C.bGl(),$async$a0L)
case 3:s=f
if(s==null){w=1
break}r=C.hkI(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dL(q,x.H),$async$a0L)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0L,v)},
B(d){var w=this,v=null,u=A.O(d).ax.a===B.I,t=new C.ui(u),s=w.d.d.length,r=u?B.ef:B.c,q=A.l(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kF,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wE,A.o(v,A.x(A.a([w.cA3(d,t,s),new A.D(D.bH2,A.x(A.a([w.b83(t,"QR restore"),B.T,A.A(A.a([w.b32(t,!0,B.ju,B.aH,B.aH,new C.eXp(w,d),"Show to scan","QR code"),B.as,w.aAi(t,B.jv,B.b8,B.bh,new C.eXq(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.i,0,v,v),B.db,w.b83(t,"Backup files"),B.T,A.A(A.a([w.aAi(t,B.hD,B.aV,B.bQ,new C.eXr(w,d),"Full copy","Backup file"),B.as,w.aAi(t,B.zN,B.at,B.aQ,new C.eXs(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.l,v,B.e,B.N,0,B.p),B.aq,v,v,new A.n(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cA3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.ff,B.cW,B.fX],k):A.a([B.b2,B.aV,B.bQ],k)
w=A.ao(l,A.X(B.ve,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.o(l,l,B.f,l,l,new A.n(B.c.j(0.35),l,l,A.l(4),l,l,B.n),l,4,l,B.kA,l,l,l,36),l,l,l)
u=A.l(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cM,12)],x.V)
r=this.d
s=A.o(l,C.aT3(!0,A.l(13),64,D.bRI,l,r.c,64),B.aq,l,l,new A.n(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.m(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,G.acu,l,l,l)
r=C.bGQ(r.gxN(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.l(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.o(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bHq,A.x(A.a([v,A.A(A.a([s,B.eu,A.E(A.x(A.a([u,B.ax,t,B.P,A.A(A.a([r,B.ae,A.o(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.m(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.n(q,l,o,p,l,l,B.n),l,l,l,l,B.fN,l,l,l)],m),B.l,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aH(l,l,l,l,A.X(B.cB,B.c.j(0.85),l,l,l,l),l,l,l,new C.eXo(d),l,l,l,A.n4(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,B.aV1,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.l,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.n(l,l,l,l,l,new A.a7(B.ay,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b83(d,e){var w=null,v=A.o(w,w,B.f,w,w,new A.n(B.aV,w,w,A.l(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.m(w,w,d.a?B.bu:B.bj,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
b32(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.l(18),p=A.l(18),o=d.a,n=o?D.alj:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eh:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aH.j(0.12),B.cM,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.l(12)
s=A.K(h.j(0.35),B.r,1)
t=A.o(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.n(u,r,s,t,r,r,B.n),r,r,r,r,B.tc,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.m(r,r,o?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eE(new A.D(B.a1e,A.x(A.a([t,B.af,u,B.bF,A.d(j,r,r,r,r,r,r,A.m(r,r,o?B.bu:B.bj,r,r,r,r,r,r,r,r,11,r,r,B.cD,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.n(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aAi(d,e,f,g,h,i,j){return this.b32(d,!1,e,f,g,h,i,j)}}
C.auw.prototype={
S(){return new C.boa()}}
C.boa.prototype={
Z(){this.a3()
this.agx()},
agx(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$agx=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bGS(p.c,p.d),$async$agx)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eX2(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eX3(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agx,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.O(d).ax.a===B.I,f=g?B.C4:B.hY,e=i.d
e=e==null?h:B.a.Y(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eK,g?B.ab:B.an,h,h,h,18),h,h,h,new C.eX4(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.m(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.tW],u),B.l,h,B.e,B.i,0,h,h)
t=A.l(24)
s=x.O
s=g?A.a([B.ff,B.cW,B.fX],s):A.a([B.b2,B.aV,B.bQ],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eS,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dl,B.K,h,h)
p=C.bGQ(p.gxN(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.l(20)
l=v===1?"item":"items"
s=A.o(h,A.x(A.a([o,B.am,A.A(A.a([p,B.ae,A.o(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.m(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.n(n,h,h,m,h,h,B.n),h,h,h,h,B.fN,h,h,h)],u),B.l,h,B.b9,B.i,0,h,h)],u),B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.n(h,h,h,t,q,new A.a7(B.ay,B.aC,B.x,s,h,h),B.n),h,h,h,h,B.a1z,h,h,1/0)
t=g?D.bt5:B.c
q=A.l(24)
p=A.K(w?B.aH.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dp,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.W0,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eyM)
else{m=A.l(20)
l=A.K(B.bm,B.r,1)
o.push(A.o(h,A.qh(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.n(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bT,h,h,h))}}o.push(B.aO)
n=w?B.aH:B.aV
n=n.j(g?0.15:0.1)
m=A.l(12)
l=A.K((w?B.aH:B.aV).j(0.35),B.r,1)
k=w?B.PP:B.Qm
k=A.X(k,w?B.aH:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.o(h,A.A(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.m(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.n(n,h,l,m,h,h,B.n),h,h,h,h,B.hP,h,h,h))
return A.c5(h,f,A.bm(!0,A.x(A.a([new A.D(B.OV,e,h),A.E(A.ca(A.x(A.a([s,B.aO,A.o(h,A.x(o,B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.n(t,h,p,q,r,h,B.n),h,h,h,h,B.uQ,h,h,1/0)],u),B.l,h,B.e,B.i,0,B.p),B.t,h,B.y,h,h,B.anX,h,h,B.ah),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.auB.prototype={
S(){return new C.aHh(A.zS(B.Oa,B.oe,B.vn))}}
C.aHh.prototype={
t(){this.d.t()
this.a2()},
aPg(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j3(w,d)},
cgM(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.itN(t)
if(s!=null){this.aPg(s)
return}r=C.hzR(t)
if(r!=null)q=A.cR(r,p,0)
else q=!1
if(q){this.aPg(B.a.i(B.a.b_(r,B.a.cm(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eR(A.a([A.aH(t,t,t,t,A.X(u.f?B.v1:B.PX,t,t,t,t,t),t,t,t,new C.eX6(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.C4,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.h1j,t,t,t,1,t,!0),q=A.zR(u.d,B.bY,u.gcgL()),p=A.l(28)
p=A.as(A.o(t,t,B.f,t,t,new A.n(t,t,A.K(B.aV,B.r,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.l(16)
return A.c5(r,B.w,new A.an(B.a0,t,B.b1,B.t,A.a([q,p,A.ao(32,A.o(t,D.h04,B.f,t,t,new A.n(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jr,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aMe.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.P8.prototype={
S(){return new C.aHj(D.aeu,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aHj.prototype={
gcHD(){return J.bI_(this.e,0,new C.eXP())},
Z(){this.a3()
$.aU.bZ$.push(this)
this.wr()},
t(){$.aU.hZ(this)
this.a2()},
jn(d){if(d===B.fW)this.wr()},
wr(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wr=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DD(q.a.c).dg(0,B.k5),$async$wr)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eXL(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eXM(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wr,v)},
IE(d){return this.bNS(d)},
bNR(){return this.IE(null)},
bNS(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ivN(l,d),$async$IE)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lD(l,r,q,D.dq1,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Mi(t.a.c,p),$async$IE)
case 4:o=f
w=5
return A.b(t.wr(),$async$IE)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.T(D.frl)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.T(D.fta)
else n.K(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F9(m)
case 1:return A.h(u,v)}})
return A.i($async$IE,v)},
F9(d){return this.ckL(d)},
ckL(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.auC(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F9)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mi(u.a.c,t),$async$F9)
case 5:case 4:w=6
return A.b(u.wr(),$async$F9)
case 6:return A.h(null,v)}})
return A.i($async$F9,v)},
wc(d){return this.c3d(d)},
c3d(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bGl(),$async$wc)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aMF,!0,"NgmyWorksheetProjectScan",x.N),$async$wc)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bGR(q),$async$wc)
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
r.T(A.b2(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hkI(s)
w=15
return A.b(C.Mi(t.a.c,p),$async$wc)
case 15:o=f
w=16
return A.b(t.wr(),$async$wc)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.T(D.ftf)
w=1
break}r.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.F9(p)
case 1:return A.h(u,v)}})
return A.i($async$wc,v)},
OI(d){return this.bMu(d)},
bMu(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$OI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eXw(d),s,null,!0,!0,x.y),$async$OI)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pa(t.a.c,A.a([],x.D)),$async$OI)
case 6:w=7
return A.b(t.wr(),$async$OI)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(D.frq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OI,v)},
ckY(d){var w=this.c
w.toString
A.bU(B.L,null,new C.eXF(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b8G(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.l(16),p=g.a
if(p)w=B.jZ
else w=B.c
v=A.l(16)
u=A.K(p?B.eh:B.bO,B.r,1)
t=d.j(0.14)
s=A.l(12)
s=A.o(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.n(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.m(r,r,p?B.aS:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a3,!0,r,A.aM(!1,q,!0,A.o(r,A.x(A.a([s,B.af,t,B.bF,A.d(h,r,r,r,r,r,r,A.m(r,r,p?B.bu:B.bj,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.n(w,r,u,v,r,r,B.n),r,r,r,r,B.t8,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a1e(d,e){return this.ckM(d,e)},
ckM(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1e=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.eXA(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a1e)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hK1(r,new C.eXB(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.OK(d,e),$async$a1e)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1e,v)},
b5G(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.l(12)
s=A.o(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.n(t,u,u,s,u,u,B.n),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aA
else t=h.a?B.aS:B.av
t=A.d(j,u,u,u,u,u,u,A.m(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.m(u,u,w?B.bu:B.bj,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aF(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(B.CM,A.A(A.a([s,B.bc,t,A.X(B.eI,w?B.bu:B.bj,u,u,u,u)],v),B.l,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
crK(d,e,f,g,h,i){return this.b5G(!1,d,e,f,g,h,i)},
OK(d,e){return this.bME(d,e)},
bME(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.ln(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$OK)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bF1(t.a.c,d.a),$async$OK)
case 6:w=7
return A.b(t.wr(),$async$OK)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$OK,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.ui(n),l=n?B.c6:B.hY
if(p.f)n=D.bfc
else{w=A.aE(d,B.dD,x.w).w
v=p.bGY(m)
u=p.c2h(m)
t=p.gbE3()
if(n)s=B.jZ
else s=B.c
r=A.l(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.Gp(A.o(o,A.A(A.a([p.aDS(B.Py,"Projects",m,D.aeu),p.aDS(B.uW,"Cashier",m,D.b2X),p.aDS(B.HH,"Family Tree",m,D.hOx)],q),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.n(s,o,o,r,o,o,B.n),o,o,o,o,o,o,o,o),14,B.eC,0.95,t,o),B.bx],q)
v=p.d
if(v===D.aeu){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.d("Projects ("+v+")",o,o,o,o,o,o,A.m(o,o,n?B.aS:B.av,o,o,o,o,o,o,o,o,16,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b4,new C.azv(p.gaTF(),o)],q),B.l,o,B.e,B.i,0,o,o),B.aB,p.crM(m)],q))}else{n=p.a
if(v===D.b2X)t.push(new C.aqo(n.c,m,o))
else{v=p.r
t.push(new C.arC(n.c,n.d,n.e,n.f,new C.eXS(p),new C.eXT(p),new A.bl(v,x.b4)))}}n=A.ca(A.x(t,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,new A.P(20,w.r.b+8,20,32),o,o,B.ah)}return A.c5(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bGY(d){var w=null,v=A.l(8),u=d.a,t=A.X(P.a2P,u?B.bu:B.bj,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.kB,A.A(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.m(w,w,u?B.bu:B.bj,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.N,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXt(this),w,w,w,w,w,w,w)},
gbE3(){switch(this.d.a){case 0:return D.adC
case 1:return D.hDn
case 2:return D.adD}},
c2h(d){var w=null,v=A.l(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.o(w,D.c1z,B.f,w,w,new A.n(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bc,D.bM1,A.aF(!1,B.a3,!0,w,A.aM(!1,A.l(12),!0,A.o(w,D.bZU,B.f,w,w,new A.n(B.c.j(0.22),w,w,A.l(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXx(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.E,w,B.e,B.i,0,w,w),r=B.b2.j(0.55),q=A.l(12)
return new C.Gp(A.o(w,A.x(A.a([new A.D(B.Hi,s,w),A.o(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.m(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ax,A.d(A.Bl(this.gcHD()),w,w,w,w,w,w,D.fL4,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.n(r,w,w,q,w,w,B.n),w,w,w,B.t7,B.jr,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.n(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hDm,w)},
aDS(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.l(12),r=t?B.aV:B.L,q=A.l(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cM,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bj
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bj
return A.E(A.aF(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cU(u,A.A(A.a([w,B.e7,new A.df(1,B.cl,A.d(e,u,1,B.a2,u,u,u,A.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.b9,B.i,0,u,u),u,u,B.ck,new A.n(r,u,p,q,o,u,B.n),B.iQ,u,u,u,u,B.Hq,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eXO(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
crM(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.ef:B.c
u=A.l(15)
t=A.o(p,D.c_0,B.f,p,p,new A.n(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eS,28)],x.V),D.cbx,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.m(p,p,w?B.aS:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gp(A.o(p,A.x(A.a([t,B.db,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.m(p,p,w?B.bu:B.bj,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e4,A.A(A.a([A.E(q.aVf(B.jv,"Scan QR",new C.eXI(q),d),1),B.as,A.E(q.aVf(B.zN,"Upload file",new C.eXJ(q),d),1)],r),B.l,p,B.e,B.i,0,p,p),B.aB,A.bJ(D.hbO,p,q.gaTF(),A.bp(B.aV,p,p,p,B.c,B.hg,p,p,new A.ba(A.l(12),B.a1),p,p,p))],r),B.l,p,B.e,B.i,0,B.p),B.f,p,p,new A.n(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bIw,1.05,D.adC,p)}w=J.b9(q.e,new C.eXK(q,d),x.l)
w=A.B(w,w.$ti.k("ak.E"))
return new C.Gp(A.x(w,B.l,p,B.e,B.i,0,B.p),16,B.bS,1,D.adC,p)},
aVf(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.l(12),t=A.l(12),s=A.l(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aF(!1,B.a3,!0,u,A.aM(!1,t,!0,A.o(w,A.x(A.a([A.X(d,B.b2,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.fJg,B.K,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),B.f,w,w,new A.n(w,w,r,s,w,w,B.n),w,w,w,w,B.a12,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
crL(d,e){var w,v,u=null,t=e.a,s=t?B.ef:B.c,r=A.l(14),q=A.K(t?B.eh:B.bO,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.et,10)],x.V),o=A.l(14),n=t?B.bu:B.bj
n=A.bv(B.Y8,new A.fG(1.7777777777777777,C.aT3(!0,B.fk,1/0,B.Py,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.m(u,u,t?B.aS:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.ax,A.d(""+d.d.length+" budget items \xb7 "+A.Bl(d.gxN()),u,u,u,u,u,u,D.fHd,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.o(u,A.aF(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bH,A.A(A.a([v,A.aH(u,u,u,u,A.X(A8.a3U,t?B.bu:B.bj,u,u,u,u),u,u,u,new C.eXG(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eXH(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.n(s,u,q,r,p,u,B.n),u,u,u,B.el,u,u,u,1/0)}}
C.bB1.prototype={}
C.rs.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd0F(){var w,v,u,t,s=this.c
if(s===B.h.fK(s))w=B.o.v(B.h.M(s))
else{v=B.h.ad(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lD.prototype={
gxN(){return B.d.cB(this.d,0,new C.cHA())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,aa<q,@>>")
v=A.B(new A.N(v,new C.cHz(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bg5(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lD(w.a,w.b,v,u,w.e)},
bfO(d){return this.bg5(d,null)},
TT(d){return this.bg5(null,d)}}
C.Iw.prototype={
a7(){return"FamilyGender."+this.b}}
C.i4.prototype={
aj(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hF8(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aGC(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i4(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.amA.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kZ.prototype={
gaqY(){var w=this.f
return new A.Y(w,new C.bTL(),A.U(w).k("Y<1>")).gJ(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,aa<q,@>>")
v=A.B(new A.N(v,new C.bTK(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ilY(w.y),"games",w.z],x.N,x.z)},
x8(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kZ(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bg4(d,e){var w=null
return this.x8(w,w,w,d,e,w,w,w,w)},
cR_(d,e,f,g,h,i,j){return this.x8(d,e,null,f,g,h,i,j,null)},
aGH(d,e){var w=null
return this.x8(w,w,w,w,d,w,w,e,w)},
cR1(d,e,f,g,h,i,j,k){return this.x8(d,e,null,f,g,h,i,j,k)},
cPv(d){var w=null
return this.x8(w,w,w,w,w,w,w,d,w)},
cPT(d){var w=null
return this.x8(w,w,w,w,w,w,w,w,d)},
bfI(d){var w=null
return this.x8(w,w,d,w,w,w,w,w,w)},
aGs(d){var w=null
return this.x8(w,w,w,w,w,d,w,w,w)},
cQx(d,e,f){var w=null
return this.x8(w,d,w,w,e,w,w,f,w)},
cPi(d){var w=null
return this.x8(w,w,w,d,w,w,w,w,w)},
cQ4(d,e){var w=null
return this.x8(d,w,w,w,w,w,e,w,w)}}
C.cHB.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cHC.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aJq.prototype={}
C.bbA.prototype={
ak(d){this.a=d.a
this.b=d.b},
cZ(d){var w=new C.bbA()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b4(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bbz.prototype={
gwZ(){return!0},
gGJ(){return this.z.b<this.b.length},
aWW(d){switch(0){case 0:return d.a.c}},
aWC(d){switch(0){case 0:return d.a.d}},
bWJ(d,e){switch(0){case 0:return new A.hY(d,e)}},
bW6(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hh(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iT(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.If(b4)
switch(0){case 0:v=b5.b
u=new A.kW(0,v,0,1/0)
t=w===B.VT
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fN(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hh(b4,u,!0)
f=b1.aWW(g)
f.toString
e=b1.aWC(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJq(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJq(k,j,i))}d=s.length
switch(0){case 0:q=b5.cA(new A.hY(m,l))
a0=q.a
a1=q.b
b1.a=new A.iT(0,0,a0,a1)
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
for(q=B.d.fN(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aWW(g)
e=b1.aWC(g)
e.toString
a9=b1.bW6(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bWJ(a6,a3+a9)
b0=g.a
g.a=new A.iT(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fV(d){var w,v,u,t,s,r=this
r.lE(d)
w=d.b
w.iy()
v=A.dr()
u=r.a
v.ec(u.a,u.b,0,1)
w.pv(0,v)
for(u=r.z,u=B.d.du(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fV(d)
w.nG(0)},
Hf(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iy(){return this.z}}
C.bzh.prototype={}
var z=a.updateTypes(["aA<~>()","Q(i4)","~()","Q(kZ)","Q(nu)","aa<q,@>(kZ)","H(kZ,kZ)","H(i4,i4)","q(i4)","kZ(aa<@,@>)","Q(lD)","nu(aa<@,@>)","aa<q,@>(nu)","Q(uT)","uT()","H(i4)","ai<i4>()","Q(zz)","a0v(Z)","q?(i4)","eS<q?>(i4)","aA<~>(lD)","Q(rs)","aa<q,@>(i4)","i4(aa<@,@>)","H(lD,lD)","~(bf)","v(oO)","Q(agh)","H(H,aak)","Uf(Z)","Q(MW)","Q(uS)","~(i4)","q(q)","WA(Z)","Ue(Z)","aeE(Z)","a_r(Z)","i4(i4)","cK(bC<q,GF>)","cK(L_)","a_V(Z)","H?(i4)","i4()","Q(L_)","D(i4)","~(Iw)","a_R(Z)","v(Iw,q,a_)","Q(aga)","bC<q,ai<aa<q,@>>>(q,ai<nu>)","a_T(Z)","+count,id,name(H,q,q)(kZ)","kZ(kZ)","q(kZ)","a0Q(Z)","Q(lX)","lX()","ZZ(Z)","a2B(Z)","a_t(Z)","a_s(Z)","~(H)","~(q,lt?)","v(rs)","aeZ(Z)","~(nR)","aA<~>([q?])","F(F,lD)","v(lD)","F(F,rs)","aa<q,@>(rs)","rs(aa<@,@>)","ai<lt>()","uS()","q(V)","lD(aa<@,@>)","cw(Iv)","q(lD)","aa<q,@>(lD)","H(nu,nu)","kZ(aa<q,@>)","a0P(Z)"])
C.fR9.prototype={
$1(d){return d.a+" "+d.b},
$S:131}
C.fR8.prototype={
bpn(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rj(s,d,B.i1,"book",B.H5),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.M4(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bpn(d)},
$S:275}
C.fRa.prototype={
$1(d){return d.b},
$S:131}
C.h0c.prototype={
$1(d){var w=null
return A.eI(w,B.L,new A.QC(this.a,this.b,w),w,w,0,B.a1f,w,B.d7,w,w,w)},
$S:48}
C.fEb.prototype={
$1(d){return d!=null},
$S:213}
C.fEc.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:213}
C.fEh.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:181}
C.fOS.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fe(d,w,w,w,A.hi(w,B.tN,w,w,w,w,w,w,w,B.dE,w,w,10.5,w,B.eD,w,!0,w,w,w,w),w),u=f?B.eD:B.wO
return new A.oc(D.bDO,A.aba(A.a([new A.h_(130,w,v),new A.zy(1,B.HA,A.fe(e,w,w,w,A.hi(w,g==null?D.eB9:g,w,w,w,w,w,w,w,B.dE,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yL,B.lW))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2201}
C.fOR.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w1(999)
f=A.xG(A.lS(h,A.fe("Cashier",h,h,h,A.hi(h,D.AI,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eD,h,!0,h,h,h,h),h),h,new A.kX(D.eB0,h,f,B.i6,h),h,h,D.bEh,h))
w=A.xG(A.fe("Debt receipt",h,h,h,A.hi(h,h,h,h,h,h,h,h,h,B.dE,h,h,22,h,B.eD,h,!0,h,h,h,h),h))
v=A.xG(A.fe(C.xm(new A.V(Date.now(),0,!1),!0),h,h,h,D.ac2,h))
u=A.w1(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fe(s,h,h,h,A.hi(h,h,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eD,h,!0,h,h,h,h),h)
r=A.fe("Person who owes",h,h,h,D.ac2,h)
q=A.w1(10)
p=x.Z
u=A.lS(h,A.zq(A.a([s,new A.h_(h,2,h),r,new A.h_(h,10,h),A.lS(h,A.zq(A.a([A.fe("Amount owed",h,h,h,D.ac2,h),new A.h_(h,2,h),A.fe(A.Bl(t.c),h,h,h,A.hi(h,D.AI,h,h,h,h,h,h,h,B.dE,h,h,20,h,B.eD,h,!0,h,h,h,h),h)],p),B.rZ,B.lW),h,new A.kX(B.pR,h,q,B.i6,h),h,h,D.bDu,1/0)],p),B.rZ,B.lW),h,new A.kX(B.aO1,h,u,B.i6,h),h,h,D.bFu,1/0)
q=new A.nT(D.eB3,0.9,B.lg)
r=A.w1(12)
s=i.c
o=s.$2("Original due",C.xm(t.r,!1))
n=s.$2("Current due",C.xm(t.f,!1))
m=i.d
l=new A.nT(m,1.1,B.lg)
k=A.w1(8)
j=i.a
k=A.a([o,n,new A.h_(h,6,h),A.lS(h,A.xG(A.fe(t.gaNO(),h,h,h,A.hi(h,m,h,h,h,h,h,h,h,B.dE,h,h,11,h,B.eD,h,!0,0.5,h,h,h),h)),h,new A.kX(h,new A.q4(l,l,l,l),k,B.i6,h),h,h,D.bEq,1/0),new A.h_(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.AI))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.AI))
else{n=A.fe("Missed days ("+n+")",h,h,h,A.hi(h,B.tN,h,h,h,h,h,h,h,B.dE,h,h,10.5,h,B.eD,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,TO>")
o=A.B(new A.N(o,new C.fOQ(),m),m.k("ak.E"))
B.d.u(k,A.a([new A.h_(h,4,h),n,new A.h_(h,6,h),new C.bbz(5,5,new C.bbA(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h_(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h_(h,8,h),w,new A.h_(h,3,h),v,new A.h_(h,16,h),u,new A.h_(h,10,h),A.lS(h,A.zq(k,B.yL,B.lW),h,new A.kX(h,new A.q4(q,q,q,q),r,B.i6,h),h,h,B.amR,1/0)],p)
w=j.a
if(w!=null){v=new A.nT(B.K7,1,B.lg)
B.d.u(f,A.a([new A.h_(h,16,h),A.fe("Debtor signature",h,h,h,A.hi(h,B.tN,h,h,h,h,h,h,h,B.dE,h,h,10,h,B.eD,h,!0,h,h,h,h),h),new A.h_(h,6,h),A.lS(h,new A.IP(w,B.Yl,h,h),h,new A.kX(h,new A.q4(v,v,v,v),A.w1(6),B.i6,h),82,h,B.OS,1/0)],p))}f.push(new A.h_(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fe(w,h,h,h,D.fzv,h))
f.push(new A.h_(h,18,h))
f.push(A.xG(A.fe("NGMY.ORG",h,h,h,A.hi(h,D.AI,h,h,h,h,h,h,h,B.dE,h,h,14,h,B.eD,h,!0,1.8,h,h,h),h)))
return f},
$S:373}
C.fOQ.prototype={
$1(d){var w=null,v=new A.nT(D.K8,0.7,B.lg),u=A.w1(999)
return A.lS(w,A.fe(C.xm(d,!1),w,w,w,A.hi(w,D.K8,w,w,w,w,w,w,w,B.dE,w,w,9.5,w,B.eD,w,!0,w,w,w,w),w),w,new A.kX(w,new A.q4(v,v,v,v),u,B.i6,w),w,w,D.bJX,w)},
$S:2202}
C.c97.prototype={
$1(d){var w=null,v=B.bD.j(0.08),u=A.l(999),t=A.K(B.bD.j(0.28),B.r,1)
return A.o(w,A.d(C.xm(d,!1),w,w,w,w,w,w,D.fGF,w,w,w),B.f,w,w,new A.n(v,w,t,u,w,w,B.n),w,w,w,w,B.eQ,w,w,w)},
$S:2203}
C.h0J.prototype={
$1(d){var w=null,v=A.aE(d,B.bX,x.w).w,u=A.l(26),t=A.aH(w,w,w,w,D.c2y,w,w,w,new C.h0G(d),w,w,w,w,w,B.ch),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eI(w,B.L,new A.cN(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a3,!0,u,new A.D(B.a13,A.x(A.a([new A.bK(B.a9,w,w,t,w),new A.df(1,B.cl,A.ca(A.x(A.a([new A.e6(new C.b0A(r,w),s),B.T,A.A(A.a([A.E(A.ep(B.zV,w,D.h82,new C.h0H(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fi,w,new A.ba(A.l(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.de(B.a4w,w,D.h4r,new C.h0I(r,d),A.bp(B.b2,w,w,w,B.c,w,B.fi,w,new A.ba(A.l(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.i,0,w,w)],p),B.l,w,B.e,B.N,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.N,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.ai),w),w,w,0,A_.a1r,w,B.d7,w,w,w)},
$S:48}
C.h0G.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h0H.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ap$.x.h(0,t.a)
m=m==null?null:m.gbf()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lX(2.5),$async$$0)
case 4:w=3
return A.b(e.hj(B.hf),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eQ(B.dF.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aA(o,0,32)
w=5
return A.b(A.rm(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h0I.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fVJ(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h0B.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.b
return A.eI(w,B.av,A.x(A.a([new A.D(D.bFi,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nf,w,w,w),1),A.aH(w,w,w,w,B.lt,w,w,w,new C.h0z(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),w),new A.df(1,B.cl,new A.D(B.f3,A.bv(A.l(14),A.fX(t,B.z,w,w,B.cn,B.dC,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Ov,new A.a5(1/0,w,A.de(B.oP,w,D.aYo,new C.h0A(t,this.c,d),A.bp(B.b2,w,w,w,B.c,w,w,w,new A.ba(A.l(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.N,0,B.p),w,w,w,B.OI,w,B.d7,w,new A.ba(v,B.a1),w)},
$S:48}
C.h0z.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h0A.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rm(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h0N.prototype={
$1(d){var w=null,v=A.l(20),u=x.p,t=this.a,s=this.b
return A.eI(w,B.av,new A.D(D.bFq,A.x(A.a([A.A(A.a([D.bL7,A.aH(w,w,w,w,B.lt,w,w,w,new C.h0L(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),B.P,new A.e6(A.bv(A.l(14),A.o(w,A.b5(w,w,w,new C.bdM(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.de(B.oP,w,D.aYo,new C.h0M(t,s,d),A.bp(B.b2,w,w,w,B.c,w,w,w,new A.ba(A.l(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d7,w,new A.ba(v,B.a1),w)},
$S:48}
C.h0L.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h0M.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ap$.x.h(0,t.a)
n=n==null?null:n.gbf()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lX(2.5),$async$$0)
case 4:w=3
return A.b(e.hj(B.hf),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aA(p,0,32)
r=J.eQ(B.dF.gaS(s))
w=5
return A.b(A.rm(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fJ6.prototype={
$1(d){return d.a===this.a},
$S:267}
C.dRX.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dRI.prototype={
boB(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ef:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dRL(s,q,e),p,!0,!0,!1,B.Kq,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dRM(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.boB(d,e)},
$S:2204}
C.dRL.prototype={
$1(d){var w,v=null,u=this.c===B.xm,t=u?D.dx6:D.dsy
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.aS:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(K.ann,A.x(A.a([u,B.ax,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.m(v,v,w.a.d.a?B.bu:B.bj,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iz(!0,v,v,B.y,D.fq_,new C.dRK(this.a,w,t,d),t.length,v,B.e0,B.ah,!0)],x.p),B.al,v,B.e,B.N,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:26}
C.dRK.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.l(14)
if(q)w=B.cW.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.l(14)
if(q)u=B.cW
else u=(t.b.a.d.a?B.bu:B.bj).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.o(B.z,C.b0z(r,26),B.f,s,s,new A.n(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dRJ(t.d,r),s,s,s,s,s,s,s)},
$S:196}
C.dRJ.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dRM.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dRG.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:91}
C.dRH.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cG(B.ck,e,v)
return new A.d4(e,!1,A.ir(B.z,A.as(A.aF(!1,B.a3,!0,v,new A.e0(new C.dRF(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bh(t,new A.bt(0.96,1,u),u.k("bh<bQ.T>"))),v)},
$S:34}
C.dRF.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aE(d,B.bX,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ef:B.c,f=A.l(14),e=A.K((h?B.bu:B.bj).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.l(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.eC,A.X(B.cB,i.a.d.a?B.bu:B.bj,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dRq(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.i,0,k,k)
w=l.d
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVM("Name")
r=l.a
q=r.d==null?k:new C.dRr(r,l.e,a0)
p=A.l(20)
o=i.a.d.a?B.bs:B.mb
n=A.K(B.cW.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bfY(new A.D(B.f2,A.aM(!1,p,!0,A.o(B.z,C.b0z(m==null?"\ud83d\udc64":A.fPH(r.e,m),18),B.f,k,k,new A.n(o,k,n,k,k,k,B.a6),k,34,k,B.cq,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.lc,k,B.abS,k,k)
v=A.a([v,B.af,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aWs("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dRs(r,a0),r.d===B.xm),1),B.ae,A.E(i.aWs("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dRx(r,a0),r.d===B.a8q),1)],u),B.l,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.P,new A.bK(B.a5,k,k,A.ht(D.c0N,D.h6j,new C.dRy(r,l.e,a0),A.fr(k,k,k,k,k,k,k,k,k,k,k,B.cW,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ch)),k)],u))
v.push(B.T)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uW(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aVN("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.eb,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.l(10)
p=A.l(10)
o=A.l(10)
n=A.K((t?B.bu:B.bj).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xm(r.a,!1)
v.push(A.aF(!1,B.a3,!0,q,A.aM(!1,p,!0,A.o(k,A.A(A.a([A.E(A.x(A.a([t,B.bF,A.d(m,k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bYo],u),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.n(k,k,n,o,k,k,B.n),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dRz(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aVM("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.aS:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.m(k,k,i.a.d.a?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b42(r.b.length!==0,B.mj,new C.dRA(r,i,a0),new C.dRB(r,a0),"Upload from gallery","ID photo"))
v.push(i.b42(r.c.length!==0,D.bRG,new C.dRC(r,i,d,a0),new C.dRD(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Z.a9_("Signature (optional)",t,new C.dRE(a0),new C.dRt(a0,t),new C.dRu(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bj
s=(i?B.bu:B.bj).j(0.28)
s=A.E(A.dV(B.aYh,new C.dRv(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.qH,k,new A.ba(A.l(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cW,k,k,k,B.c,k,B.qH,k,new A.ba(A.l(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vS,k,k,k),k,new C.dRw(r,w,d),t),1)],u),B.l,k,B.e,B.i,0,k,k))
return A.o(k,A.ca(A.x(v,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.n(g,k,e,f,k,k,B.n),k,k,k,B.t9,B.jr,k,k,360)},
$S:168}
C.dRq.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dRr.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dRs.prototype={
$0(){return this.b.$1(new C.dRp(this.a))},
$S:0}
C.dRp.prototype={
$0(){var w=this.a
w.d=B.xm
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dRx.prototype={
$0(){return this.b.$1(new C.dRo(this.a))},
$S:0}
C.dRo.prototype={
$0(){var w=this.a
w.d=B.a8q
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dRy.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dRz.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xr(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dRn(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRn.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcl(),w.gci(),w.gcz(),0,0,0,0,0)},
$S:0}
C.dRA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Qo(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dRm(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRm.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dRB.prototype={
$0(){return this.b.$1(new C.dRl(this.a))},
$S:0}
C.dRl.prototype={
$0(){return this.a.b=""},
$S:0}
C.dRC.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ef:B.c
w=3
return A.b(A.bU(q,null,new C.dRj(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Qo(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dRk(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRj.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dI(!1,w,w,w,!0,w,w,w,!0,w,w,B.asM,w,w,w,w,new C.dRd(d),!1,w,w,w,w,w,w,w,D.fXm,w,w,w),A.dI(!1,w,w,w,!0,w,w,w,!0,w,w,B.asK,w,w,w,w,new C.dRe(d),!1,w,w,w,w,w,w,w,D.h3p,w,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),!0,!1,B.ag,!0,!0)},
$S:26}
C.dRd.prototype={
$0(){A.a6(this.a,!1).N("camera")
return null},
$S:0}
C.dRe.prototype={
$0(){A.a6(this.a,!1).N("gallery")
return null},
$S:0}
C.dRk.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dRD.prototype={
$0(){return this.b.$1(new C.dRi(this.a))},
$S:0}
C.dRi.prototype={
$0(){return this.a.c=""},
$S:0}
C.dRE.prototype={
$0(){return this.a.$1(new C.dRh())},
$S:0}
C.dRh.prototype={
$0(){},
$S:0}
C.dRt.prototype={
$0(){return this.a.$1(new C.dRg(this.b))},
$S:0}
C.dRg.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dRu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aj7(u.a,null,null,new C.dRf(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRf.prototype={
$4(d,e,f,g){this.a.$1(new C.dRc(this.b,d))},
$S:489}
C.dRc.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.u(w,this.b)},
$S:0}
C.dRv.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dRw.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.T(D.fv9)
return}if(w.a.d==null){w.c.K(x.q).f.T(D.frZ)
return}A.a6(w.c,!1).N(!0)},
$S:0}
C.dS_.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:91}
C.dS0.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.K((p?B.bu:B.bj).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.aS:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bl(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.m(r,r,q.a.d.a?B.bu:B.bj,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zR(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.m(r,r,w.zR(r).length>0?B.bD:B.cW,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bj
t=(q?B.bu:B.bj).j(0.28)
s=x.p
return new A.d4(e,!1,A.as(A.aF(!1,B.a3,!0,r,A.o(r,A.x(A.a([p,B.P,v,u,B.aB,A.A(A.a([A.E(A.dV(B.o8,new C.dRY(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.k6,r,new A.ba(A.l(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bJ(D.h3R,r,new C.dRZ(d),A.bp(B.cW,r,r,r,B.c,r,B.k6,r,new A.ba(A.l(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.N,0,B.p),B.f,r,r,new A.n(o,r,m,n,r,r,B.n),r,r,r,B.CQ,B.Hi,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dRY.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dRZ.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dRU.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dRV(r),p=r.a.d.a,o=p?B.ef:B.c,n=A.l(14),m=A.K((p?B.bu:B.bj).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.m(s,s,r.a.d.a?B.aS:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bl(l.c),s,s,s,s,s,s,D.fIh,s,s,s)],p),B.l,s,B.e,B.i,0,s,s)
w=A.iQ((r.a.d.a?B.bu:B.bj).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a3a,"View receipt",new C.dRN(r,d,l))
u=l.x!=null
t=u?B.pD:B.qQ
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bFn,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dRO(r,d,l)),q.$3$icon$label$onTap(B.D4,"Edit",new C.dRP(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mj,"View / download ID",new C.dRQ(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bRF,"View / download selfie",new C.dRR(r,d,l)))
if(l.gaIn())p.push(q.$3$icon$label$onTap(B.a4m,"View / download signature",new C.dRS(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bD,B.ej,"Delete",new C.dRT(r,d,l)))
p.push(B.ax)
return A.bm(!0,new A.D(B.t7,A.o(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,s,new A.n(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:26}
C.dRV.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.av
else w=d
return A.aM(!1,v,!0,new A.D(B.eX,A.A(A.a([A.X(e,w,v,v,v,20),B.bc,A.d(f,v,v,v,v,v,v,A.m(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2205}
C.dRN.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h0F(w,this.c)},
$S:0}
C.dRO.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.Tb(this.c)},
$S:0}
C.dRP.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.DP(this.c)},
$S:0}
C.dRQ.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bHa(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dRR.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bHa(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dRS.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h0K(w,this.c)},
$S:0}
C.dRT.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.Qn(0,this.c)},
$S:0}
C.dS1.prototype={
$1(d){return d.x==null},
$S:267}
C.dS2.prototype={
$1(d){return d.x!=null},
$S:267}
C.dS3.prototype={
$2(d,e){return d+e.c},
$S:2206}
C.dS4.prototype={
$0(){return this.a.bEz()},
$S:0}
C.dRW.prototype={
$0(){return this.a.agK(this.b)},
$S:0}
C.fJS.prototype={
$1(d){return d.a===this.a},
$S:z+32}
C.fJT.prototype={
$0(){return B.d.gH(D.a5G)},
$S:z+75}
C.dhD.prototype={
$0(){var w=this.a
return w.m(new C.dhB(w,this.b))},
$S:0}
C.dhB.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dhC.prototype={
$0(){},
$S:0}
C.dhE.prototype={
$0(){var w=this.a.gc31()
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.fMo.prototype={
$1(d){return C.hpa(A.a1(d,x.N,x.z))},
$S:z+11}
C.fMp.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fMq.prototype={
$2(d,e){var w=A.cc(d.a,null),v=A.cc(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+81}
C.h_g.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h7V.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fIY.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bSs.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eC(e,v)?v:null},
$S:2207}
C.h_R.prototype={
$1(d){var w=this
return new C.a_T(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+52}
C.dii.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dih(w,d))},
$S:z+78}
C.dih.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.di6.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.di3.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dhF.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dhG.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.di7.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dhO.prototype={
$1(d){var w=null,v=A.O(d).ax.a===B.I,u=v?B.ef:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.em(A.a([A.bP(!1,B.ds,w,w,!0,w,w,w,new C.dhM(d),w,w),A.bJ(B.xM,w,new C.dhN(d),A.bp(B.nr,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dhM.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dhN.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dhP.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.di4.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.di5.prototype={
$0(){return B.d.gH(D.A6)},
$S:z+14}
C.dhK.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzb(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Ue(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+36}
C.dhL.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhQ.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_r(v,u,J.ad(w.d),null)},
$S:z+38}
C.dhR.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dig.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.ay(s,new C.a_7(r.y,r.gzb(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.die(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bd8(v,e,w,u,t,r.gbVb(),C.hF7(r.y.Q),r.gzb(0),s)
w=t}return A.c6(q,new C.dif(r,e),new A.D(B.a1k,w,s))},
$S:2208}
C.dif.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd7(t).ay){t=this.b
u=x.cy.a(B.d.gd7(u.f.f)).gvv(0)
w=t-(u==null?t:u)}else w=0
v=B.h.D(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fE(v*3.141592653589793*0.5)
return A.fz(B.a5,A.d1(e,B.h.D(1+v*0.5,0,1)),null,u,!0)},
$S:44}
C.die.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJz(B.qz,B.iB)},
$S:0}
C.di0.prototype={
$0(){var w=this.a
return w.m(new C.di_(w))},
$S:0}
C.di_.prototype={
$0(){return this.a.w=!0},
$S:0}
C.di1.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).N(null)
return null},
$S:0}
C.dhH.prototype={
$1(d){var w,v,u=null,t=A.l(26),s=B.kw.j(0.5),r=x.p,q=A.a([D.fVU,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.a_d(d,B.e9,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_d(d,H.aqI,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cw,A.d("Your book is in English.",u,u,u,u,u,u,A.m(u,u,D.kQ.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cw,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.m(u,u,D.kQ.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_d(d,O.arF,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_d(d,B.oM,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_d(d,B.oM,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eI(u,B.Cf,A.bm(!0,new A.D(B.z4,A.x(q,B.E,u,B.e,B.N,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.OL,u,B.d7,u,new A.ba(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:48}
C.di2.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dhU.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a_V(v,J.cJ(w.d),w.r+1,null)},
$S:z+42}
C.dhV.prototype={
$1(d){var w=null
return A.oS(!1,A.em(w,w,w,B.Cf,new A.kj(this.a,new C.dhT(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:325}
C.dhT.prototype={
$3(d,e,f){var w=null
return A.A(A.a([B.abw,B.p4,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:577}
C.dhW.prototype={
$0(){return this.a.a=!1},
$S:52}
C.dhX.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:195}
C.dhY.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dhZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bu(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.SR(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dhS(s,t))
w=4
return A.b(s.lj(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dhS.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.di9.prototype={
$1(d){var w=null
return A.oS(!1,A.em(w,w,w,B.Cf,new A.kj(this.a,new C.di8(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:325}
C.di8.prototype={
$3(d,e,f){var w=null
return A.A(A.a([B.abw,B.p4,A.E(A.d(e,w,w,w,w,w,w,B.jC,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:577}
C.dia.prototype={
$0(){return this.a.a=!1},
$S:52}
C.dib.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:195}
C.dic.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:195}
C.did.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Bu(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lj(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dhI.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.blx(B.qz,U.Oj)},
$S:0}
C.dhJ.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJz(B.qz,U.Oj)},
$S:0}
C.dk4.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dk5.prototype={
$1(d){var w=this.a
return w.m(new C.dk3(w))},
$S:9}
C.dk3.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dk6.prototype={
$1(d){var w=this.a
return w.m(new C.dk2(w))},
$S:9}
C.dk2.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dk7.prototype={
$1(d){var w=this.a
return w.m(new C.dk1(w))},
$S:9}
C.dk1.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dk8.prototype={
$0(){var w=this.a
return w.m(new C.dk0(w,this.b))},
$S:0}
C.dk0.prototype={
$0(){var w=this.b
this.a.d.sb4(0,w)
return w},
$S:0}
C.dk9.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga32()
A.a6(this.b,!1).N(new A.bs1(w,v))},
$S:0}
C.dix.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.diw.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_R(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+48}
C.diB.prototype={
$1(d){return d.a===this.a},
$S:z+50}
C.diA.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bbv(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.ht,v,v,v)
return A.em(A.a([A.bP(!1,B.ds,v,v,!0,v,v,v,new C.diy(d),v,v),A.bJ(B.xM,v,new C.diz(d),A.bp(B.nr,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,B.Cf,w,v,v,v,v,D.fUG,v)},
$S:18}
C.diy.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.diz.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.diC.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.diD.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.ca(A.c_(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bGm,t,t,B.ah)},
$S:309}
C.div.prototype={
$0(){return this.a.Rb(0,this.b)},
$S:0}
C.diu.prototype={
$0(){return this.a.QC(0,this.b)},
$S:0}
C.cQE.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cQF.prototype={
$0(){return B.d.gH(D.A6)},
$S:z+14}
C.cQG.prototype={
$4(d,e,f,g){var w=null,v=A.l(e)
return A.bS(0,new A.D(d,new A.bN(new A.n(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.n),B.bk,w,w),w),0,0,0)},
$S:2210}
C.d9p.prototype={
$1(d){return this.a.m(new C.d9o(this.b,this.c))},
$S:9}
C.d9o.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d9O.prototype={
$1(d){return this.a.m(new C.d9B())},
$S:2}
C.d9B.prototype={
$0(){},
$S:0}
C.d9P.prototype={
$1(d){return this.a.m(new C.d9A())},
$S:2}
C.d9A.prototype={
$0(){},
$S:0}
C.d9Q.prototype={
$0(){var w=this.a
return w.m(new C.d9z(w,this.b))},
$S:0}
C.d9z.prototype={
$0(){var w=this.a
return w.d=w.goy().Gn(this.b.a)},
$S:0}
C.d9R.prototype={
$0(){var w=this.a
return w.m(new C.d9y(w,this.b))},
$S:0}
C.d9y.prototype={
$0(){var w=this.a
return w.d=w.goy().cOP(this.b)},
$S:0}
C.d9S.prototype={
$1(d){return this.a.m(new C.d9x())},
$S:2}
C.d9x.prototype={
$0(){},
$S:0}
C.d9T.prototype={
$0(){var w=this.a
return w.m(new C.d9w(w,this.b))},
$S:0}
C.d9w.prototype={
$0(){var w=this.a
return w.d=w.goy().cOU(this.b.a)},
$S:0}
C.d9U.prototype={
$1(d){var w=this.a
return w.m(new C.d9J(w,d))},
$S:6}
C.d9J.prototype={
$0(){var w=this.a
return w.d=w.goy().cPO(this.b)},
$S:0}
C.d9V.prototype={
$1(d){var w=this.a
return w.d=w.goy().aGv(d)},
$S:2}
C.d9W.prototype={
$1(d){var w=this.a
return w.d=w.goy().cOX(d)},
$S:2}
C.d9Y.prototype={
$1(d){var w=this.a
return w.d=w.goy().cPM(d)},
$S:2}
C.d9Z.prototype={
$1(d){var w=this.a
return w.m(new C.d9I(w,d))},
$S:9}
C.d9I.prototype={
$0(){var w=this.a
return w.d=w.goy().cPD(this.b)},
$S:0}
C.da_.prototype={
$0(){var w=this.a,v=w.goy(),u=B.a.i(w.gzb(0).a.a),t=B.a.i(w.gaDG().a.a)
u=v.bge(B.a.i(w.gatg().a.a),t,u)
A.a6(this.b,!1).N(u)
return null},
$S:0}
C.bSC.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bSw.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bSv(w,d))},
$S:12}
C.bSv.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bSF.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bSx.prototype={
$0(){var w=this.a
w.Q=D.b2w
w.aej(1)
w.r.x=null},
$S:0}
C.bSy.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b2w)return
w=new A.e_()
w.cU(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d7j[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bSB.prototype={
$0(){var w=this.a
w.Q=D.ae9
w.aej(2)
w.r.z=null},
$S:0}
C.bSA.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hMs
t.aej(3)
w=t.r
w.d=s
w.x="I say: "+t.gCI()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.de2[v.aw(4)]:D.dzG[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bSD.prototype={
$0(){var w=this.a
w.Q=D.b2x
w.CW=this.b
w.cy=1
w.aej(4)
w.r.f=w.f.a+5},
$S:0}
C.bSE.prototype={
$0(){},
$S:0}
C.bSz.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSt.prototype={
$0(){return this.a.Lj(this.b)},
$S:0}
C.bSu.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bU8.prototype={
$0(){var w=this
return w.a.Rv(w.b,0,w.c,w.d)},
$S:0}
C.bU9.prototype={
$0(){var w=this
return w.a.Rv(w.b,3,w.c,w.d)},
$S:0}
C.bUa.prototype={
$0(){var w=this
return w.a.Rv(w.b,1,w.c,w.d)},
$S:0}
C.bUb.prototype={
$0(){var w=this
return w.a.bUC(w.b,w.c,w.d)},
$S:0}
C.bUc.prototype={
$0(){var w=this
return w.a.Rv(w.b,4,w.c,w.d)},
$S:0}
C.bUd.prototype={
$0(){var w=this
return w.a.Rv(w.b,2,w.c,w.d)},
$S:0}
C.bUe.prototype={
$0(){var w=this
return w.a.Rv(w.b,5,w.c,w.d)},
$S:0}
C.bUf.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:560}
C.bU7.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a6R[d],p=q.a.a5(0,new A.r(0,-q.b*1.2*124)),o=A.fD(r,B.cx,r,3,r,A.cS(r,r,r,r,r,r,r,r,r,D.fzb,e),B.a7,B.c1,r,B.dK,B.c2)
o.nC(130)
w=o.b.a.c
w=p.aJ(0,new A.r(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.by(A.bX(w,v.gba(v)+12,u+18),B.i4)
u=this.a
v=t.eD(B.dM)
w=$.S()
s=A.L()
s.r=B.dB.gp(0)
u.ar(v,s)
s=A.L()
s.r=D.qq.gp(0)
u.ar(t,s)
w=new A.aG(w.r,B.aj,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bx())
v=A.L()
v.r=D.qq.gp(0)
u.af(w,v)
o.a4(u,new A.r(t.a+9,t.b+6))},
$S:829}
C.bST.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bSU.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.an2(d),w.an2(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fwX.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h7M.prototype={
$2(d,e){if(e!=null)J.c4(this.a.c_(0,d,new C.h7N()),e)},
$S:z+64}
C.h7N.prototype={
$0(){return A.a([],x.J)},
$S:z+74}
C.h7O.prototype={
$1(d){return d!==this.a},
$S:3}
C.h7P.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h7Q.prototype={
$1(d){return d!==this.a&&!B.d.aU(this.b,new C.h7L(this.c,d))},
$S:3}
C.h7L.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h7R.prototype={
$1(d){return d!==this.a},
$S:3}
C.h7S.prototype={
$1(d){return d!==this.a},
$S:3}
C.h7T.prototype={
$1(d){return d!==this.a&&!B.d.aU(this.b,new C.h7K(this.c,d))},
$S:3}
C.h7K.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fKu.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fZa.prototype={
$1(d){return d.Q},
$S:z+15}
C.fZb.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fGi.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fNk.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bNG.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h8b.prototype={
$2(d,e){return B.o.aQ(C.hBi(d),C.hBi(e))},
$S:237}
C.h8c.prototype={
$1(d){return d!==this.a},
$S:3}
C.fZN.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bLP.prototype={
$0(){var w=this.a
w.ch=!0
w.b9K()},
$S:0}
C.bLK.prototype={
$0(){},
$S:0}
C.bLQ.prototype={
$1(d){return d.f<=0},
$S:z+28}
C.bLI.prototype={
$0(){},
$S:0}
C.bLJ.prototype={
$0(){},
$S:0}
C.bLO.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b5(u,u,u,new C.bdO(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.l(14)
s.push(A.ao(u,A.o(u,A.d(t.dy,u,u,u,u,u,u,D.fGR,B.K,u,u),B.f,u,u,new A.n(w,u,u,v,u,u,B.n),u,u,u,u,B.bS,u,u,u),u,u,14,14,6,u))}return A.ay(B.c_,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bLL(t,e),u,u,u,u,u,u,u,new C.bLM(t,e),u,u,u,u,u,u,u,u,u,new C.bLN(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bLL.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLN.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bLM.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bLH.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.crA.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.crB.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.crz(w))},
$S:0}
C.crz.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.crC.prototype={
$0(){var w=this,v=w.a
v.gj2()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.crD.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.crE.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.crF.prototype={
$0(){},
$S:0}
C.crG.prototype={
$0(){var w=this.a
w.z=w.XI(++w.e)
w.Q=A.c0(w.gkT()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.crw.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.crx.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj2().length,e=i/2,d=new C.cry(i,f,h),a0=g.as,a1=A.a3(a0).k("b8<2>")
a0=A.B(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.c6(new A.he(a0),new C.crr(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj2().length!==0&&!B.d.q(g.gj2(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.QV(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cK(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new A.N3(new C.crs(g,u),new C.crt(g,u),new C.cru(g,u),j,j,new A.bl("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.d(a1,j,j,j,j,j,j,A.m(j,j,B.a.q(a1,"not a child")?B.fj:B.be,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj2().length!==0&&!B.d.q(g.gj2(),-1)){a0=g.e+1>=g.gkT().length?"See my result":"Next family"
g=A.as(C.uw(a0,g.gqs(g),B.cV,B.jt,D.fC),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.XI(0):s).length))break
if(!B.d.q(g.gj2(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.XI(0)
o=s}else o=s
n=s[u]
n=A.e1(B.z,new C.QV(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.XI(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r9(new A.bt(0,p,t),new C.crv(),new A.Eq(u,j,new C.QV(l.b,k,62,!1,j),new A.kK(0.25,new C.QV(m.b,k,62,!1,j),j),new A.kd(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,A.hF_(),!0,!0,j,j,j,j,j,j,!1,B.iT,j,new A.bl("chip-"+r,a0),w),B.b0,B.iR,j,new A.bl("t"+r+"-"+q,a0),v))}++u}g=A.c_(B.fU,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:65}
C.cry.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:599}
C.crr.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj2().length!==0&&!B.d.q(t.gj2(),-1)
return A.b5(p,p,p,new C.bdh(q.b,o,v,w,p),B.az)},
$S:58}
C.crt.prototype={
$1(d){return this.a.gj2()[this.b]===-1},
$S:2213}
C.cru.prototype={
$1(d){return this.a.cSG(this.b,d.a)},
$S:2214}
C.crs.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj2()[t]!==-1,r=A.l(18),q=e.length!==0?B.cV.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cV:B.k0,B.r,2)
u=s?A.lC(new C.crq(),A.as(new C.QV(u.gaFY()[u.gj2()[t]].b,u.gaFY()[u.gj2()[t]].a,62,!1,v),v,v,v),B.nl,B.iR,v,v,new A.bt(0.3,1,x.X),x.i):D.bdQ
return A.cU(v,u,v,v,B.b0,new A.n(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:2215}
C.crq.prototype={
$3(d,e,f){return A.e1(B.z,f,e,null,null)},
$S:118}
C.crv.prototype={
$3(d,e,f){return A.dO(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:118}
C.cRI.prototype={
$1(d){return d>=1},
$S:119}
C.cGz.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkT()[w.e].d.length)w.m(new C.cGy(w))},
$S:12}
C.cGy.prototype={
$0(){return this.a.f++},
$S:0}
C.cGH.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cGI.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cGJ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cGG(w))},
$S:0}
C.cGG.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cGK.prototype={
$0(){return this.a.f++},
$S:0}
C.cGL.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cGM.prototype={
$0(){},
$S:0}
C.cGN.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cGB.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.cGC.prototype={
$3(d,e,f){var w=null
return A.lC(new C.cGA(this.a,e),w,B.b0,B.hy,w,w,new A.bt(w,this.b,x.X),x.i)},
$S:2216}
C.cGA.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cV.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.o(v,A.i3(new A.BE(new A.uQ(B.w.j(e),B.Mk,v,B.YO),A.bYp(A.b5(v,v,v,new C.aCb(u.gkT()[u.e].c,u.as,v),B.az),new A.Ev(w,w,B.WH)),v),B.aq),B.f,v,v,new A.n(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2217}
C.cGD.prototype={
$3(d,e,f){return A.d1(A.dO(f,new A.r(0,14*(1-e))),e)},
$S:107}
C.cGE.prototype={
$3(d,e,f){return A.dO(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:118}
C.cGF.prototype={
$0(){return this.a.bqR(this.b)},
$S:0}
C.f9p.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.anz$)
v.anz$=w
v.qf$.sp(0,w)
v.aru(u)},
$S:7}
C.fjz.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:12}
C.bTE.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bTD())},
$S:0}
C.bTD.prototype={
$0(){},
$S:0}
C.bTB.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bTz.prototype={
$0(){},
$S:0}
C.bTA.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gN0()
w=s+1>=r.length?3:5
break
case 3:q=C.bHo(p.gaqj(0),0,r.length)
p.m(new C.bTw(p,q))
o=p
w=6
return A.b(C.BR(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BS(s.d,s.c.a,"school",p.gaqj(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bTx())
w=4
break
case 5:p.m(new C.bTy(p))
p.gqA().Wg(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bTw.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bTx.prototype={
$0(){},
$S:0}
C.bTy.prototype={
$0(){return this.a.x++},
$S:0}
C.bTC.prototype={
$0(){return this.a.Lj(this.b)},
$S:0}
C.bTv.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.f9q.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hFd(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.EH
C.SP(q,D.eun,0,0.2,-0.6,-0.2,null,w,D.et6,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a5(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.L()
p.r=D.GG.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f9r.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SP(this.a,D.ett,0,u,0.7,-0.5,null,null,D.K0,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f9s.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SP(this.a,D.ev9,0,0,0.8,-0.5,null,null,D.K0,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f9t.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SP(w.b,D.euh,0,v,-0.8,-0.5,null,null,D.K0,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f9u.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.eul:D.EH
C.SP(p,D.etN,0,t,0,-0.6,null,v,D.K0,3,0,s,1.3,u,0,w,0)
q=q.cdb(new A.r(222,455),9)
$.S()
w=A.L()
w.r=B.cV.gp(0)
p.af(q,w)},
$S:0}
C.f9v.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:560}
C.bTh.prototype={
$2(d,e){return d+e},
$S:68}
C.bTs.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bTt.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bTu.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj2()[u.b]=s
t.gj2()[u.d]=t.y
w=t.as
v=t.qf$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bTo.prototype={
$1(d){return d},
$S:105}
C.bTn.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qf$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bTp.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bTq.prototype={
$0(){},
$S:0}
C.bTr.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FR(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cm(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a8(0)},
$S:0}
C.bTj.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.bTk.prototype={
$2(d,e){var w=this.a
w=w.gkT()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:68}
C.bTl.prototype={
$2(d,e){var w=null,v=C.hg0(new A.au(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.ay(B.c_,new A.e6(A.b5(w,w,w,new C.bks(u,u.qf$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bTi(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bTi.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj2().length
u=B.o.D(B.h.bh((t.a-s.a)/r/450*v),0,v-1)
w.d2w(w.gj2()[u])}},
$S:23}
C.bTm.prototype={
$1(d){var w=this.a
return w.gkT()[w.f].d[d]},
$S:79}
C.dte.prototype={
$2(d,e){return 0},
$S:68}
C.bT3.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bT2())},
$S:0}
C.bT2.prototype={
$0(){},
$S:0}
C.bT1.prototype={
$0(){},
$S:0}
C.bSW.prototype={
$0(){},
$S:0}
C.bSX.prototype={
$0(){},
$S:0}
C.bT0.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.Br},
$S:0}
C.bT_.prototype={
$1(d){var w=null,v=this.a.gqA(),u=A.d(d,w,w,w,w,w,w,D.aWQ,w,w,w),t=v.gbni(0)
return A.ay(B.c_,A.x(A.a([u,B.bF,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aX3,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbtd(v),w,w,w,w,w,w,!1,B.a4)},
$S:151}
C.bSY.prototype={
$0(){return this.a.Lj(this.b)},
$S:0}
C.bSZ.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSV.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.e3A.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e3B.prototype={
$1(d){return this.a},
$S:39}
C.e3C.prototype={
$0(){var w=this.a
return w.d=w.gTd().bfI(this.b)},
$S:0}
C.e3y.prototype={
$1(d){return new C.Uf(this.a,null)},
$S:z+30}
C.e3z.prototype={
$1(d){return d.a===this.a.a},
$S:z+31}
C.e3x.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.ht,w,w,w)
return A.em(A.a([A.bP(!1,B.aYr,w,w,!0,w,w,w,new C.e3v(d),w,w),A.bP(!1,D.h1i,w,w,!0,w,w,w,new C.e3w(d),w,w)],x.p),w,w,D.fC,v,w,w,w,w,D.fOM,w)},
$S:18}
C.e3v.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e3w.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e3u.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e3D.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:13}
C.e3E.prototype={
$0(){var w=this.a,v=this.b,u=C.bF7(v,10,w.r,!1)
return w.uF(C.hpb(w.a.d,"kahoot",u,w.gb7h(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e3F.prototype={
$0(){var w=this.a
return w.uF(new C.amp(this.b,w.a.d,w.r,null))},
$S:0}
C.e3G.prototype={
$0(){var w=this.a
return w.uF(new C.akz(this.b,w.a.d,w.r,null))},
$S:0}
C.e3J.prototype={
$0(){var w=this.a
return w.uF(new C.avs(this.b,w.a.d,w.r,null))},
$S:0}
C.e3K.prototype={
$0(){var w=this.a
return w.uF(new C.azp(this.b,w.a.d,w.r,null))},
$S:0}
C.e3L.prototype={
$0(){var w=this.a
return w.uF(new C.ams(this.b,w.a.d,w.r,null))},
$S:0}
C.e3M.prototype={
$0(){var w=this.a
return w.uF(new C.amw(this.b,w.a.d,w.r,null))},
$S:0}
C.e3N.prototype={
$0(){var w=this.a
return w.uF(new C.amy(this.b,w.a.d,w.r,null))},
$S:0}
C.e3O.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d2R()
return v.uF(C.hpb(v.a.d,"creator_"+u.a,w,v.gb7h(),"A game by the family",t,this.c.a))},
$S:0}
C.e3P.prototype={
$0(){return this.a.P5(this.b)},
$S:0}
C.e3Q.prototype={
$0(){return this.a.Y9(0,this.b)},
$S:0}
C.e3H.prototype={
$0(){return this.a.P5(null)},
$S:0}
C.e3I.prototype={
$0(){return this.a.K(x.q).f.T(D.fs4)},
$S:0}
C.bTf.prototype={
$0(){var w=this.a
w.d=D.b1V
w.z=3},
$S:0}
C.bTg.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aQr()}else w.m(new C.bTe(w))},
$S:12}
C.bTe.prototype={
$0(){return this.a.z--},
$S:0}
C.bT5.prototype={
$0(){var w=this.a
w.d=D.adQ
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bT6.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bT4(w))
if(w.as<=0){d.a1(0)
w.b7d(-1)}},
$S:12}
C.bT4.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bTb.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Xn},
$S:0}
C.bTc.prototype={
$0(){return this.a.e++},
$S:0}
C.bT8.prototype={
$0(){var w=this.a
w.d=D.b1W
w.ay=this.b},
$S:0}
C.bT9.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bTd.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:2218}
C.bTa.prototype={
$0(){return this.a.Lj(this.b)},
$S:0}
C.bT7.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSG.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.at(new A.bb(s,B.b7,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.at(new A.bb(u,B.b7,B.aP),r))}return s},
$S:2219}
C.bSH.prototype={
$0(){return this.a.gDh().c.push(C.h9P(null,0,20,""))},
$S:0}
C.bSR.prototype={
$1(d){var w=null
return A.bA(w,new A.b6(4,A.l(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dq,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Fd,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:256}
C.bSQ.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDh().c,m=this.b,l=n[m],k=o.cge(l),j=B.c.j(0.06),i=A.l(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.Lg,p,p,p),B.b4],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.asx,p,p,p,new C.bSL(o,m),p,p,p,p,p,p))
n=J.a8(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.i,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bSM(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aEw[v]
t=D.aEc[v]
s=v+1
f.push(new A.D(B.eP,new A.c8(B.aM,B.e,B.i,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.G(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.bz(1,B.bd,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bSN(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p),p),new A2.Pw(v,l.c,new C.bSO(o,l),p,!1,D.lH,p,p,p,p,p,!1,!1,p,G.b2k,p,p,p,p,p,w)],g),p),p))}f.push(D.fUl)
f.push(B.am)
n=A.a([D.fNQ,B.ae],g)
for(r=0;r<3;++r){q=D.cgX[r]
n.push(new A.D(B.f2,A.jw(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bSP(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.i,0,p,p))
return A.o(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.n(j,p,h,i,p,p,B.n),p,p,p,B.kA,B.bl,p,p,p)},
$S:166}
C.bSL.prototype={
$0(){var w=this.a
return w.m(new C.bSK(w,this.b))},
$S:0}
C.bSK.prototype={
$0(){return B.d.cH(this.a.gDh().c,this.b)},
$S:0}
C.bSM.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bSN.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bSO.prototype={
$1(d){return this.a.m(new C.bSJ(this.b,d))},
$S:158}
C.bSJ.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bSP.prototype={
$1(d){return this.a.m(new C.bSI(this.b,this.c))},
$S:9}
C.bSI.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5f.prototype={
$0(){var w=this.a
w.wC()
w.a.bv()
w.a.qt()},
$S:0}
C.e5e.prototype={
$0(){var w=this.a
w.wC()
w.a.bv()
w.a.qt()},
$S:0}
C.e5h.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e5i.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5j.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e5d.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e5g.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e5l.prototype={
$0(){this.a.Pr()
return null},
$S:0}
C.e5k.prototype={
$0(){return this.a.Fa(this.b)},
$S:0}
C.e4G.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bP(!1,B.ds,w,w,!0,w,w,w,new C.e4E(d),w,w),r=A.bp(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.em(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e4F(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e4E.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e4F.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e4H.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cPi(this.b)},
$S:0}
C.e4B.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aW2(w.b,w.c,w.d)},
$S:7}
C.e42.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e43.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4k.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hp(t.a.c),$async$$0)
case 2:s=r.nx(q.dH(e,new C.e4i(t)))
if(s!=null&&t.c!=null)t.m(new C.e4j(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e4i.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e4j.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4l.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e4m.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4A.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cQ4(C.hFn(w),w)},
$S:0}
C.e4h.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.WA(u,w,C.aRI(u,w),new C.e4g(v),null)},
$S:z+35}
C.e4g.prototype={
$1(d){return this.boI(d)},
boI(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e4f(s,d))
w=3
return A.b(s.uB(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:830}
C.e4f.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bfI(this.b)},
$S:0}
C.e4x.prototype={
$1(d){return d.as},
$S:z+1}
C.e4y.prototype={
$1(d){var w=this
return new A.e0(new C.e4w(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.e4w.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ef:B.c,h=A.l(26),g=A.K(B.bQ.j(0.5),B.r,1.5),f=A.o(k,D.bWC,B.f,k,k,new A.n(B.bQ.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bc,a0,A.aH(k,k,k,k,A.X(B.cB,j?B.bu:B.bj,k,k,k,k),k,k,k,new C.e4q(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ax(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.ay(k,A.cU(k,A.d(m,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b0,new A.n(q,k,new A.bH(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.hb,k,k,k,k,B.CH,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e4r(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.c_(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c7O,new A.D(D.bGM,f,k),new A.D(D.bGD,e,k),new A.D(B.t9,a0,k),new A.D(O.anQ,A.d(v,k,k,k,k,k,k,A.m(k,k,j?B.bu:B.bj,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(A6.aqs,j?B.bu:B.bj,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bGF,A.A(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.m(k,k,j?B.aS:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.ay7(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e4s(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.i,0,k,k),k))}f.push(B.aB)
j=A.l(20)
e=A.a([new A.ac(0,B.G,B.aD.j(0.35),B.i3,12)],x.V)
f.push(A.ay(k,A.o(k,A.A(A.a([D.fOb,B.bc,D.bL4,D.bXh],w),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.n(k,k,k,j,e,D.cbA,B.n),k,k,k,B.hZ,B.bH,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e4t(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.wH,A.A(A.a([A.E(A.dV(B.ds,new C.e4u(a1),k),1),B.as,A.E(A.bJ(I.aYS,k,new C.e4v(t,a1),A.bp(B.bQ,k,k,k,k,k,B.co,k,k,k,k,k)),1)],w),B.l,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.o(k,A.ca(A.x(f,B.E,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.aq,k,k,new A.n(i,k,g,h,k,k,B.n),k,k,k,B.yW,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:92}
C.e4q.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4r.prototype={
$0(){return this.b.$1(new C.e4p(this.a,this.c))},
$S:0}
C.e4p.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e4s.prototype={
$1(d){var w=this.a
w.m(new C.e4n(w,d))
this.b.$1(new C.e4o())},
$S:9}
C.e4n.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e4o.prototype={
$0(){},
$S:0}
C.e4t.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aIk(!0,w))
return null},
$S:0}
C.e4u.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4v.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aIk(!1,w))
return null},
$S:0}
C.e4z.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cPT(this.b.b)
w.r.a8(0)},
$S:0}
C.e3R.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aji(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hys(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e3S.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aGs(w)},
$S:0}
C.e4J.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aeE(this.b,w,this.c,null)},
$S:z+37}
C.e4D.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ef:B.c,t=A.l(20),s=A.X(B.l_,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.N,0,B.p)
return A.em(A.a([A.bJ(D.h55,w,new C.e4C(d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.ba(t,B.a1),r,w)},
$S:18}
C.e4C.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e3T.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e3U.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e3V.prototype={
$1(d){return d.a},
$S:z+8}
C.e3W.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i4(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aGs(w)},
$S:0}
C.e4_.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aji(q)
w=A.U(q).k("Y<1>")
q=A.B(new A.Y(q,new C.e3Y(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hys(v.e,null,r,v.f,v.r,new C.e3Z(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e3Z.prototype={
$0(){return this.a.abu(this.b)},
$S:0}
C.e3Y.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e40.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,i4>")
w=A.B(new A.N(w,new C.e3X(this.b),v),v.k("ak.E"))
u.d=t.aGs(w)},
$S:0}
C.e3X.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+39}
C.e4I.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e4c.prototype={
$1(d){return d.length!==0},
$S:3}
C.e4d.prototype={
$1(d){var w=this
return new A.e0(new C.e4b(w.a,w.b,w.c,w.d),null)},
$S:21}
C.e4b.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ef:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.m(v,v,t?B.aS:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.m(v,v,t?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.N(o,new C.e47(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.P)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(12),B.du),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mC,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.N,0,B.p)
t=w.a
return A.em(A.a([A.bP(!1,B.ds,v,v,!0,v,v,v,new C.e48(d),v,v),A.bJ(B.Lr,v,new C.e49(t,u,o,e),A.bp(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fSI,v,new C.e4a(t,u,o,d),A.bp(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:245}
C.e47.prototype={
$1(d){var w=null
return A.dI(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.m(w,w,this.a.a?B.aS:B.av,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.c4D,w,w,w,new C.e46(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2220}
C.e46.prototype={
$0(){return this.a.$1(new C.e44(this.b,this.c))},
$S:0}
C.e44.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e48.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e49.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e45(w.c,u))
v.bP(0,B.cg)}},
$S:0}
C.e45.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e4a.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).N(!0)},
$S:0}
C.e4e.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cQx(this.b,D.uT,C.Hn(v,w.a.c))},
$S:0}
C.e4Q.prototype={
$1(d){return d.as},
$S:z+1}
C.e4R.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j3(this.b,w)},
$S:0}
C.e4S.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.ivt(v)
return w.WX(v==null?null:v.a)},
$S:0}
C.e4T.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i7b(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cxH(new A.au(u,t),v.gbmo(),new A.au(k,s))}k=A.l(22)
s=this.b.a
r=s?D.d54:D.d39
q=A.K(s?B.dq:D.blM,B.r,1)
p=A.l(22)
o=A.bS(0,A.b5(m,m,m,new C.bgy(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.o(m,A.bv(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bS(0,A.v1(new A.P(n,n,n,n),new A.a5(u,t,new C.bhu(l.d,v,l.f,w,new C.e4M(l),l.gchq(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bzo(s,new C.e4N(l,e),new C.e4O(l,e),new C.e4P(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.n(m,m,q,k,m,new A.a7(B.aY,B.b3,B.x,r,m,m),B.n),m,m,m,B.amV,m,m,m,m)},
$S:179}
C.e4M.prototype={
$1(d){var w=this.a
w.m(new C.e4K(w,d))},
$S:2}
C.e4K.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e4N.prototype={
$0(){var w=this.b
return this.a.bdS(1.25,new A.au(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e4O.prototype={
$0(){var w=this.b
return this.a.bdS(0.8,new A.au(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e4P.prototype={
$0(){var w=this,v=w.b
return w.a.aW2(new A.au(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.au(w.c,w.d),w.e.gbmo())},
$S:0}
C.e4U.prototype={
$0(){var w=this.a
return w.m(new C.e4L(w))},
$S:0}
C.e4L.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e41.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fH(new A.fx(s.c)),$async$$0)
case 2:t.yE("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.diH.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.blj(u,C.hK5(v.c,u),new C.diG(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+40}
C.diG.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.diI.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.boF(d.d,d.c,u.f.q(0,d.a),new C.diF(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+41}
C.diF.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fJW.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nx(new A.cM(new A.Y(v,new C.fJX(d),w.k("Y<1>")),new C.fJY(),w.k("cM<1,q>")))},
$S:z+19}
C.fJX.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fJY.prototype={
$1(d){return d.a},
$S:z+8}
C.fJU.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fJV.prototype={
$1(d){return d.b},
$S:z+8}
C.fK0.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nx(new A.cM(new A.Y(v,new C.fK1(d),w.k("Y<1>")),new C.fK2(),w.k("cM<1,q>")))},
$S:z+19}
C.fK1.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fK2.prototype={
$1(d){return d.a},
$S:z+8}
C.fJZ.prototype={
$1(d){var w,v=A.ew([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+43}
C.fK_.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.diK.prototype={
$0(){return this.a},
$S:z+44}
C.dj0.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:221}
C.diT.prototype={
$2(d,e){var w=this.a.c_(0,d,new C.diU()),v=J.a8(w)
if(!v.q(w,e))v.I(w,e)},
$S:126}
C.diU.prototype={
$0(){return A.a([],x.s)},
$S:792}
C.diS.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eC(w,e)
return w===!0},
$S:277}
C.diL.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.diR.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.diQ.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.E_:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.E_:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:2222}
C.diM.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.diV.prototype={
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
t=J.aT(t==null?D.E_:t)
while(t.C()){r=t.gP(t)
if(r.a!==a9&&!B.d.aU(w,new C.diW(r)))w.push(r)}}B.d.bq(w,new C.diX(a8))
B.d.b0(w,new C.diY())
q=C.i7a(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.f0r],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.brM(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2223}
C.diW.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.diX.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.diY.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.diZ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a8(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a3(v).k("b8<2>")).cB(0,0,B.qb)+88-w.gH(n).a}else u=0
for(w=J.a8(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:627}
C.dj_.prototype={
$1(d){return 16+d*156},
$S:182}
C.diJ.prototype={
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
t.n(0,d,new C.GF(r,new A.r(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GF(s,new A.r(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GF(s,new A.r(e,v)))}t=o.r.h(0,d)
t=J.aT(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.L_(d,new A.r(e+t,w),s,s.length))}},
$S:195}
C.diN.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aLs(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:126}
C.diO.prototype={
$1(d){return d.a===this.a},
$S:z+45}
C.diP.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:721}
C.dj1.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:721}
C.dj2.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:401}
C.dj3.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:188}
C.dj4.prototype={
$1(d){return d>=0.5},
$S:119}
C.fpa.prototype={
$3(d,e,f){var w=null,v=A.l(10)
return A.hd(A.aM(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.ct,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:2225}
C.f_b.prototype={
$1(d){var w=null,v=A.l(8),u=B.bQ.j(0.12),t=A.l(8)
return new A.D(B.nF,A.aM(!1,v,!0,A.o(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fDH,B.K,w,w),B.f,w,w,new A.n(u,w,w,t,w,w,B.n),w,w,w,w,B.OR,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f_a(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+46}
C.f_a.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dyY.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dyX.prototype={
$1(d){var w=null,v=A.l(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.o6,B.K,w,w)
return A.em(A.a([A.bP(!1,B.ds,w,w,!0,w,w,w,new C.dyV(d),w,w),A.bP(!1,A.d("Delete",w,w,w,w,w,w,A.m(w,w,B.mU,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dyW(d),w,w)],x.p),B.b9,B.CC,w,u,D.bHH,w,D.bJE,new A.ba(v,B.a1),w,w)},
$S:18}
C.dyV.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dyW.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dz6.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dz7.prototype={
$1(d){var w=this.a
return w.m(new C.dz5(w,d))},
$S:z+47}
C.dz5.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dz8.prototype={
$1(d){var w=null
return A.qL(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dzb.prototype={
$1(d){var w=this.a
return w.m(new C.dz4(w,d))},
$S:35}
C.dz4.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dza.prototype={
$1(d){var w=null
return A.qL(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dzc.prototype={
$1(d){var w=this.a
return w.m(new C.dz3(w,d))},
$S:35}
C.dz3.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dzd.prototype={
$0(){var w=this.a
return w.m(new C.dz2(w))},
$S:0}
C.dz2.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dze.prototype={
$0(){var w=this.a
return w.m(new C.dz1(w))},
$S:0}
C.dz1.prototype={
$0(){return++this.a.at},
$S:0}
C.dzf.prototype={
$0(){var w=this.a
return w.m(new C.dz0(w))},
$S:0}
C.dz0.prototype={
$0(){return--this.a.ax},
$S:0}
C.dzg.prototype={
$0(){var w=this.a
return w.m(new C.dz_(w))},
$S:0}
C.dz_.prototype={
$0(){return++this.a.ax},
$S:0}
C.dzh.prototype={
$1(d){var w=this.a
return w.m(new C.dyZ(w,d))},
$S:9}
C.dyZ.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dz9.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dzi.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.l(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.ef:B.c
v=A.l(12)
if(p)u=B.bQ
else u=(q.c.a?B.eh:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bu:B.bj
t=A.X(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bu:B.bj
return A.E(A.aF(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cU(r,A.x(A.a([t,B.ax,A.d(e,r,r,r,r,r,r,A.m(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.i,0,B.p),r,r,B.b0,new A.n(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.k6,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dzj(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+49}
C.dzj.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dzs.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cgb.prototype={
$2(d,e){return new A.bC(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:104}
C.cgi.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cgj.prototype={
$2(d,e){var w=J.b9(e,new C.cgh(),x.a)
w=A.B(w,w.$ti.k("ak.E"))
return new A.bC(d,w,x.d2)},
$S:z+51}
C.cgh.prototype={
$1(d){return d.aj()},
$S:z+12}
C.cgd.prototype={
$1(d){return C.amB(A.a1(d,x.N,x.z))},
$S:z+9}
C.cge.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cgf.prototype={
$1(d){return C.hpa(A.a1(d,x.N,x.z))},
$S:z+11}
C.cgg.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cgn.prototype={
$1(d){return new A.aIw(d.f.length,d.a,d.b)},
$S:z+53}
C.cgo.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:729}
C.cgk.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cgl.prototype={
$1(d){return d.cPv(C.Hn(d,this.a))},
$S:z+54}
C.e52.prototype={
$1(d){return C.ux(d,this.a.a.c)},
$S:z+3}
C.e53.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e57.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e58.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e5_.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b25(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zc("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pC(r.c,r.e),$async$$0)
case 4:s.zc(p)
w=5
return A.b(s.Kn(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e50.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b25(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zc("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pC(r.c,r.e),$async$$0)
case 4:s.zc(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e51.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.WD(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zc("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zc("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zc("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Kn(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.zc(B.a.el(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e56.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b24(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zc("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ce(A.ee(new C.e55(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pC(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e55.prototype={
$1(d){var w=this.b
return new C.a0P(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+83}
C.e54.prototype={
$1(d){return D.hIM},
$S:z+56}
C.e5a.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e5b.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e59(w,d)
return new A.D(B.da,new C.bhy(this.b,d.c,d.a,w,null),null)},
$S:2226}
C.e59.prototype={
$0(){return this.a.YO(this.b.b)},
$S:0}
C.e4V.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e4W.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e4X.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e4Y.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e4Z.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e5c.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.Y(s,"NGMYFTSYNC2"))t=!A.cR(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).N(s)
return}},
$S:155}
C.dR4.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+57}
C.dR5.prototype={
$0(){return B.d.gH(D.a7f)},
$S:z+58}
C.dR6.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b5(A.as(A.X(this.b.d,B.c.j(0.95),w,w,D.dc9,44),w,w,w),w,w,new C.bmr(u,t,v,w),B.az)},
$S:58}
C.h0j.prototype={
$1(d){return A.pl(new C.h0i(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:146}
C.h0i.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ef:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.tL,24)],x.V),o=r?B.eh:B.bO
o=A.o(t,t,B.f,t,t,new A.n(o,t,t,A.l(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bQ.j(0.18)],x.O)
w=A.o(t,D.bZH,B.f,t,t,new A.n(t,t,t,A.l(12),t,new A.a7(B.a5,B.a9,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.m(t,t,r?B.aS:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.o(t,A.x(A.a([B.T,o,new A.D(B.anU,A.A(A.a([w,B.bc,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.m(t,t,r?B.bu:B.bj,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.l,t,B.e,B.i,0,t,t),t),A.E(A.iz(!0,t,e,B.y,D.fq7,new C.h0h(this.b,s),20,B.anr,t,B.ah,!1),1)],u),B.l,t,B.e,B.i,0,B.p),B.f,t,t,new A.n(q,t,t,B.lf,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:122}
C.h0h.prototype={
$2(d,e){var w=null,v=D.a7f[e],u=A.l(16),t=A.l(16),s=this.b.a,r=A.K(s?B.eh:B.bO,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.et,8)],x.V),p=A.l(15),o=A.E(new C.a7C(v.a,!0,w),1),n=s?B.jZ:B.iO,m=A.d(v.b,w,1,B.a2,w,w,w,A.m(w,w,s?B.aS:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eE(A.bv(p,A.x(A.a([o,A.o(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.m(w,w,s?B.bu:B.bj,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.k7,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.aq),w,new A.n(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h0g(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:82}
C.h0g.prototype={
$0(){A.a6(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cpS.prototype={
$0(){return this.a.ahN(this.b)},
$S:0}
C.h_H.prototype={
$1(d){return D.hDA},
$S:z+59}
C.h7u.prototype={
$1(d){var w=this
return new C.a2B(w.a,w.b,w.c,w.d,null)},
$S:z+60}
C.h_L.prototype={
$1(d){return new C.a_t(this.a,null)},
$S:z+61}
C.h_K.prototype={
$1(d){return D.hEB},
$S:z+62}
C.dab.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dac.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.daa(w,d))},
$S:35}
C.daa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dad.prototype={
$1(d){return this.a.L0()},
$S:2}
C.dae.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.da7.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.da8.prototype={
$1(d){return this.a.L0()},
$S:2}
C.da9.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cIg.prototype={
$0(){},
$S:0}
C.cIm.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cIn.prototype={
$0(){return this.a.aRj(-1)},
$S:0}
C.cIo.prototype={
$1(d){return this.a.m(new C.cIl())},
$S:2}
C.cIl.prototype={
$0(){},
$S:0}
C.cIp.prototype={
$0(){return this.a.aRj(1)},
$S:0}
C.cIq.prototype={
$1(d){return this.a.m(new C.cIk())},
$S:2}
C.cIk.prototype={
$0(){},
$S:0}
C.cIr.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.m(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.eh:B.bO
return A.uV(u,u,B.b2,r,u,new C.cIj(t,d),B.wL,s,w,u,new A.ax(v,1,B.r,-1),B.ch)},
$S:2227}
C.cIj.prototype={
$1(d){var w=this.a
return w.m(new C.cIh(w,this.b))},
$S:9}
C.cIh.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cIs.prototype={
$1(d){return this.a.m(new C.cIi())},
$S:2}
C.cIi.prototype={
$0(){},
$S:0}
C.cIt.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.foG.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).N(w)},
$S:2}
C.foH.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.foI.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).N(w)},
$S:0}
C.foE.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbDH()
w=w.e
s=A.l(B.o.D(v-1,0,v))
return A.b5(new A.D(D.bJD,new A.e6(A.o(r,q.a.c,B.f,r,r,new A.n(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bzd(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:58}
C.foF.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dI.az(0,p)
p=A.l(12)
q=q.a.c
v=A.l(12)
u=A.l(12)
t=w*2.4
s=A.ap(B.aV,B.bQ,w)
s.toString
s=A.a([B.b2,s,B.aV],x.O)
return A.aF(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eE(D.ez_,r,new A.n(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.d7(-1.2+t,-0.5),new A.d7(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:143}
C.fYY.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:64}
C.eXl.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eXc.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eXd.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eXj.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eXi(w,this.b),null)},
$S:21}
C.eXi.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ef:B.c,t=A.l(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.m(w,w,v?B.aS:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eI(w,u,new A.D(B.anO,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.m(w,w,v?B.bu:B.bj,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hvh(new C.eXf(r,e),r.a),B.aB,A.A(A.a([A.E(A.dV(B.ds,new C.eXg(d),w),1),B.as,A.E(A.bJ(B.WB,w,new C.eXh(r,d),A.bp(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d7,w,new A.ba(t,B.a1),w)},
$S:108}
C.eXf.prototype={
$1(d){return this.b.$1(new C.eXe(this.a,d))},
$S:35}
C.eXe.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eXg.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eXh.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.eXk.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.TT(this.b)},
$S:0}
C.eX7.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bfO(w)},
$S:0}
C.eXb.prototype={
$1(d){return this.bp4(d)},
bp4(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mi(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j3(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eXa.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.B(new A.Y(w,new C.eX9(this.b),v),v.k("M.E"))
u.d=t.bfO(w)},
$S:0}
C.eX9.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eXm.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j3(this.b,w)},
$S:0}
C.eXn.prototype={
$1(d){return this.a.bHR(d,this.b)},
$S:z+65}
C.eX8.prototype={
$0(){return this.a.abt(this.b)},
$S:0}
C.h7h.prototype={
$1(d){return new C.aeZ(this.a,this.b,this.c,null)},
$S:z+66}
C.eXp.prototype={
$0(){return this.a.a0K(this.b)},
$S:0}
C.eXq.prototype={
$0(){return this.a.R6(this.b)},
$S:0}
C.eXr.prototype={
$0(){return this.a.F4(this.b)},
$S:0}
C.eXs.prototype={
$0(){return this.a.a0L(this.b)},
$S:0}
C.eXo.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eX2.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eX3.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eX4.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eX6.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qz(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eX5(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eX5.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eXP.prototype={
$2(d,e){return d+e.gxN()},
$S:z+69}
C.eXL.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eXM.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eXw.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ef:B.c,s=A.l(24),r=A.o(v,D.c_a,B.f,v,v,new A.n(B.aA.j(u?0.18:0.08),v,A.K(B.aA.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.m(v,v,u?B.aS:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.m(v,v,u?B.bu:B.bj,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.av
u=u?B.eh:B.bO
w=x.p
return A.eI(v,t,new A.D(B.wK,A.x(A.a([r,B.aO,q,B.P,p,B.db,A.A(A.a([A.E(A.dV(B.o8,new C.eXu(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fi,v,new A.ba(A.l(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bJ(D.h8Y,v,new C.eXv(d),A.bp(B.aA,v,v,v,v,v,B.fi,v,new A.ba(A.l(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.i,0,v,v)],w),B.l,v,B.e,B.N,0,B.p),v),v,v,v,v,v,B.d7,v,new A.ba(s,B.a1),v)},
$S:48}
C.eXu.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eXv.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eXF.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ef:B.c,i=A.l(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fQ,28)],x.V),g=k?D.djx:B.a6y,f=x.p
g=A.o(m,A.x(A.a([A.o(m,m,B.f,m,m,new A.n(B.c.j(0.45),m,m,A.l(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.fjd,B.ax,new A.bK(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.m(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cD,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.n(m,m,m,m,m,new A.a7(B.ay,B.aC,B.x,g,m,m),B.n),m,m,m,m,B.anS,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b8G(B.b8,B.jv,new C.eXC(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b8G(B.cF,B.zN,new C.eXD(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.l(16)
r=B.aA.j(k?0.14:0.06)
q=A.l(16)
p=A.K(B.aA.j(0.28),B.r,1)
o=A.o(m,D.bZu,B.f,m,m,new A.n(B.aA.j(0.12),m,m,A.l(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.m(m,m,k?B.aS:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.m(m,m,k?B.bu:B.bj,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.D(B.wE,A.o(m,A.x(A.a([g,new A.D(B.anP,A.x(A.a([w,B.T,u,B.bx,t,B.T,A.aF(!1,B.a3,!0,m,A.aM(!1,s,!0,A.o(m,A.A(A.a([o,B.bc,n,A.X(B.eI,k?B.bu:B.bj,m,m,m,m)],f),B.l,m,B.e,B.i,0,m,m),B.f,m,m,new A.n(r,m,p,q,m,m,B.n),m,m,m,m,B.bH,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eXE(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.l,m,B.e,B.N,0,B.p),B.aq,m,m,new A.n(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:26}
C.eXC.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.wc("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eXD.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.wc("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eXE.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.OI(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eXA.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ef:B.c,m=A.l(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eS,24)],x.V),k=o?B.eh:B.bO
k=A.o(q,q,B.f,q,q,new A.n(k,q,q,A.l(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.l(12)
v=this.c
u=o?B.bu:B.bj
u=A.bv(w,new A.a5(48,48,C.aT3(!0,A.l(12),48,B.Py,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.m(q,q,o?B.aS:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bl(v.gxN())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wE,A.o(q,A.x(A.a([B.T,k,new A.D(D.anM,A.A(A.a([u,B.bc,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.m(q,q,o?B.bu:B.bj,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.l,q,B.e,B.i,0,q,q),q),B.Cu,r.crK(B.ve,B.aV,new C.eXy(d),p,"QR code or backup file","Transfer project"),r.b5G(!0,B.ej,B.aA,new C.eXz(d),p,"Remove from this device","Delete project"),B.T],s),B.l,q,B.e,B.N,0,B.p),B.f,q,q,new A.n(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:26}
C.eXy.prototype={
$0(){A.a6(this.a,!1).N("transfer")
return null},
$S:0}
C.eXz.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
C.eXB.prototype={
$1(d){return this.bp5(d)},
bp5(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mi(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wr(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eXS.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eXR(w))},
$S:0}
C.eXR.prototype={
$0(){return this.a.r++},
$S:0}
C.eXT.prototype={
$0(){var w=this.a
return w.m(new C.eXQ(w))},
$S:0}
C.eXQ.prototype={
$0(){return this.a.r++},
$S:0}
C.eXt.prototype={
$0(){var w=this.a.c
w.toString
return A.j3(w,null)},
$S:0}
C.eXx.prototype={
$0(){return this.a.ckY(this.b)},
$S:0}
C.eXO.prototype={
$0(){var w=this.a
return w.m(new C.eXN(w,this.b))},
$S:0}
C.eXN.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eXI.prototype={
$0(){return this.a.wc("scan")},
$S:0}
C.eXJ.prototype={
$0(){return this.a.wc("file")},
$S:0}
C.eXK.prototype={
$1(d){return this.a.crL(d,this.b)},
$S:z+70}
C.eXH.prototype={
$0(){return this.a.F9(this.b)},
$S:0}
C.eXG.prototype={
$0(){return this.a.a1e(this.b,this.c)},
$S:0}
C.cHA.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+71}
C.cHz.prototype={
$1(d){return d.aj()},
$S:z+72}
C.cHx.prototype={
$1(d){return C.hQe(A.a1(d,x.N,x.z))},
$S:z+73}
C.cHy.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fIO.prototype={
$1(d){return d.y===D.kZ},
$S:z+3}
C.h82.prototype={
$1(d){return C.aRI(d,this.a)},
$S:z+3}
C.fGh.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bTL.prototype={
$1(d){return!d.as},
$S:z+1}
C.bTK.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bTH.prototype={
$1(d){return C.hpc(A.a1(d,x.N,x.z))},
$S:z+24}
C.bTI.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bTJ.prototype={
$1(d){return J.k(d)},
$S:16}
C.fwy.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fs7.prototype={
$1(d){return C.heD(A.a1(d,x.N,x.z))},
$S:z+77}
C.fs8.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fs9.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h_v.prototype={
$1(d){return J.k(d)},
$S:16}
C.h_w.prototype={
$1(d){return d.a},
$S:z+79}
C.h_x.prototype={
$1(d){return d.length!==0},
$S:3}
C.h_y.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h_z.prototype={
$1(d){return d.TT(null).aj()},
$S:z+80}
C.h80.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fJh.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fMu.prototype={
$1(d){return C.amB(A.a1(d,x.N,x.z))},
$S:z+9}
C.fMv.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fMw.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fMx.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fMy.prototype={
$1(d){return C.ux(d,this.a)},
$S:z+3}
C.h_i.prototype={
$1(d){return C.ux(d,this.a)},
$S:z+3}
C.h7W.prototype={
$1(d){return C.amB(A.a1(d,x.N,x.z))},
$S:z+9}
C.h7X.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h7Y.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fIZ.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fJ_.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h86.prototype={
$1(d){return!d.as},
$S:z+1}
C.fIs.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fIt.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fIu.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.h7v.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fNl.prototype={
$1(d){return d.Q},
$S:z+15}
C.h_b.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fMr.prototype={
$1(d){return C.amB(A.a1(d,x.N,x.z))},
$S:z+9}
C.fMs.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fMt.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h_6.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fsE.prototype={
$1(d){return d.length!==0},
$S:3}
C.fsF.prototype={
$1(d){return C.hpc(A.a1(d,x.N,x.z))},
$S:z+24}
C.fsG.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fsH.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:16}
C.fsI.prototype={
$1(d){return d.length!==0},
$S:3}
C.fsV.prototype={
$2(d,e){return d.eF(new C.fsW(e))},
$S:2228}
C.fsW.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cf},
$S:2229}
C.fsS.prototype={
$1(d){return C.ic_(d,this.a)},
$S:z+82}
C.fsT.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fsU.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fxf.prototype={
$1(d){return d.a},
$S:z+55}
C.fxg.prototype={
$1(d){return d.length!==0},
$S:3}
C.fxh.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fAf.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fFw.prototype={
$1(d){return C.hAS(d,C.Hn(d,this.a))},
$S:z+5}
C.fFx.prototype={
$1(d){return C.hAT(d,C.Hn(d,this.a))},
$S:z+5};(function aliases(){var w=C.aCd.prototype
w.bwU=w.t
w=C.aAo.prototype
w.bwP=w.t
w=C.aHH.prototype
w.bxh=w.t
w=C.aCe.prototype
w.bwV=w.t
w=C.aCg.prototype
w.bwW=w.t
w=C.aCh.prototype
w.bwX=w.t
w=C.aNU.prototype
w.bzL=w.t
w=C.aQ1.prototype
w.bC5=w.t
w=C.aQ2.prototype
w.bC6=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aFe.prototype,"gcoE","coF",27)
var r
w(r=C.aCc.prototype,"gchw","chx",63)
v(r,"gaPu","Oe",0)
v(r,"gcx2","Bz",0)
v(r,"gbPG","OW",0)
v(r,"gcLu","zd",0)
v(r,"gcqI","a1W",0)
v(r,"gbL2","OE",0)
v(r,"gbQ5","Ye",0)
w(r,"gbVb","bVc",76)
v(r,"gbFm","Aw",0)
v(C.aCf.prototype,"gcLq","G2",0)
v(r=C.amq.prototype,"gbtf","btg",2)
v(r,"gbt7","bt8",2)
v(r,"gcMz","cMA",2)
u(r,"gqs","kO",0)
u(r=C.akA.prototype,"geX","fX",2)
w(r,"gcd8","cd9",26)
u(C.avt.prototype,"gqs","kO",0)
v(r=C.azq.prototype,"gcY8","cY9",2)
u(r,"gqs","kO",0)
u(C.aLx.prototype,"gbtd","bte",2)
v(C.amz.prototype,"gC4","cMM",2)
u(r=C.amx.prototype,"gcNs","cNt",2)
u(r,"gqs","kO",0)
v(r=C.amt.prototype,"gbs5","bs6",2)
v(r,"gcSE","cSF",2)
u(r=C.amv.prototype,"geX","fX",2)
u(r,"giC","cM5",2)
v(r=C.amr.prototype,"gcLV","cLW",2)
u(r,"gbqY","jH",2)
v(r=C.aFO.prototype,"gahp","ws",0)
v(r,"gckd","a16",0)
v(r,"gaTK","IF",0)
v(r=C.aFL.prototype,"gcHp","a42",0)
v(r,"gahp","ws",0)
v(r,"gcv2","a2A",0)
v(r,"gck8","b3T",2)
v(r,"gcla","a1j",0)
w(r,"gchq","chr",33)
v(r,"gbPY","IK",0)
v(r,"gcIt","cIu",2)
v(r,"gc76","a_0",0)
w(r,"gcfV","cfW",34)
v(r,"gcjX","cjY",2)
v(r=C.aEd.prototype,"gcde","QE",0)
v(r,"gcdg","cdh",2)
v(r,"gbMx","ab5",0)
v(r=C.aFN.prototype,"gbTA","YK",0)
v(r,"gc38","Zq",0)
v(r,"gcBt","a3q",0)
v(r,"gcxC","a31",0)
v(C.aFM.prototype,"gcxl","ajd",0)
v(C.auD.prototype,"gcfT","a0I",0)
v(C.aAX.prototype,"ga3M","L0",2)
v(C.aAW.prototype,"ga3M","L0",2)
v(C.azC.prototype,"ga3M","L0",2)
v(r=C.aHi.prototype,"gb53","RE",0)
v(r,"gbEa","WR",0)
v(r,"gckZ","cl_",2)
w(C.aHh.prototype,"gcgL","cgM",67)
t(C.aHj.prototype,"gaTF",0,0,null,["$1","$0"],["IE","bNR"],68,0,0)
s(C,"hJa","ilW",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aJ,[C.aqb,C.uS,C.nu,C.Iv,C.aga,C.KT,C.uT,C.bUg,C.td,C.bpX,C.amI,C.aeg,C.lt,C.bSS,C.auP,C.zz,C.alg,C.MW,C.bbm,C.aak,C.biD,C.agh,C.aAE,C.ag5,C.aLx,C.L_,C.GF,C.bhw,C.aLs,C.arz,C.dj5,C.lX,C.aW_,C.aVZ,C.aU1,C.ui,C.rs,C.lD,C.i4,C.kZ,C.aJq])
u(A.k8,[C.fR9,C.fR8,C.fRa,C.h0c,C.fEb,C.fEc,C.fEh,C.fOS,C.fOR,C.fOQ,C.c97,C.h0J,C.h0B,C.h0N,C.fJ6,C.dRL,C.dRG,C.dRH,C.dRj,C.dRf,C.dS_,C.dS0,C.dRU,C.dRV,C.dS1,C.dS2,C.fJS,C.fMo,C.fMp,C.h_g,C.h7V,C.fIY,C.h_R,C.dii,C.dhF,C.dhO,C.di4,C.dhK,C.dhQ,C.dhH,C.dhU,C.dhV,C.dhT,C.di9,C.di8,C.dk5,C.dk6,C.dk7,C.diw,C.diB,C.diA,C.cQE,C.cQG,C.d9p,C.d9O,C.d9P,C.d9S,C.d9U,C.d9V,C.d9W,C.d9Y,C.d9Z,C.bSC,C.bSw,C.fwX,C.h7O,C.h7P,C.h7Q,C.h7L,C.h7R,C.h7S,C.h7T,C.h7K,C.fKu,C.fZa,C.fGi,C.fNk,C.bNG,C.h8c,C.fZN,C.bLQ,C.bLL,C.bLN,C.bLM,C.cry,C.crt,C.cru,C.crs,C.crq,C.crv,C.cRI,C.cGz,C.cGC,C.cGA,C.cGD,C.cGE,C.f9p,C.fjz,C.bTo,C.bTi,C.bTm,C.bT_,C.e3B,C.e3y,C.e3z,C.e3x,C.e3D,C.bTg,C.bT6,C.bSR,C.bSQ,C.bSM,C.bSN,C.bSO,C.bSP,C.e5g,C.e4G,C.e4B,C.e42,C.e4i,C.e4l,C.e4h,C.e4g,C.e4x,C.e4y,C.e4s,C.e3R,C.e4J,C.e4D,C.e3T,C.e3U,C.e3V,C.e4_,C.e3Y,C.e3X,C.e4c,C.e4d,C.e47,C.e4Q,C.e4M,C.diH,C.diI,C.fJW,C.fJX,C.fJY,C.fJU,C.fJV,C.fK0,C.fK1,C.fK2,C.fJZ,C.fK_,C.dj0,C.diR,C.diM,C.diW,C.diX,C.dj_,C.diO,C.dj2,C.dj3,C.dj4,C.fpa,C.f_b,C.dyX,C.dz6,C.dz7,C.dz8,C.dzb,C.dza,C.dzc,C.dzh,C.dzi,C.cgi,C.cgh,C.cgd,C.cge,C.cgf,C.cgg,C.cgn,C.cgk,C.cgl,C.e52,C.e55,C.e54,C.e5b,C.e5c,C.dR4,C.h0j,C.h_H,C.h7u,C.h_L,C.h_K,C.dac,C.dad,C.da8,C.cIo,C.cIq,C.cIr,C.cIj,C.cIs,C.foG,C.fYY,C.eXj,C.eXf,C.eXb,C.eX9,C.eXn,C.h7h,C.eXw,C.eXF,C.eXA,C.eXB,C.eXK,C.cHz,C.cHx,C.cHy,C.fIO,C.h82,C.fGh,C.bTL,C.bTK,C.bTH,C.bTI,C.bTJ,C.fs7,C.fs8,C.h_v,C.h_w,C.h_x,C.h_y,C.h_z,C.h80,C.fJh,C.fMu,C.fMv,C.fMx,C.fMy,C.h_i,C.h7W,C.h7X,C.h7Y,C.fIZ,C.fJ_,C.h86,C.fIs,C.fIt,C.h7v,C.fNl,C.h_b,C.fMr,C.fMs,C.h_6,C.fsE,C.fsF,C.fsG,C.fsH,C.fsI,C.fsW,C.fsS,C.fsT,C.fxf,C.fxg,C.fAf,C.fFw,C.fFx])
u(A.av,[C.b0A,C.amo,C.aXi,C.a_7,C.bd8,C.QV,C.a6R,C.tD,C.Ix,C.bhu,C.blj,C.bzo,C.boF,C.aeD,C.bli,C.aeC,C.blh,C.aEe,C.aKu,C.aeE,C.GB,C.bhv,C.adT,C.bht,C.bhy,C.b0y,C.auD,C.aeZ])
u(A.oE,[C.bdM,C.beZ,C.beQ,C.aJk,C.bkk,C.bpW,C.aXn,C.bdO,C.aCb,C.bdh,C.bu0,C.bks,C.bjT,C.bk_,C.bhx,C.bgy,C.bmr,C.bzd])
u(A.lR,[C.h0G,C.h0H,C.h0I,C.h0z,C.h0A,C.h0L,C.h0M,C.dRX,C.dRJ,C.dRM,C.dRq,C.dRr,C.dRs,C.dRp,C.dRx,C.dRo,C.dRy,C.dRz,C.dRn,C.dRA,C.dRm,C.dRB,C.dRl,C.dRC,C.dRd,C.dRe,C.dRk,C.dRD,C.dRi,C.dRE,C.dRh,C.dRt,C.dRg,C.dRu,C.dRc,C.dRv,C.dRw,C.dRY,C.dRZ,C.dRN,C.dRO,C.dRP,C.dRQ,C.dRR,C.dRS,C.dRT,C.dS4,C.dRW,C.fJT,C.dhD,C.dhB,C.dhC,C.dhE,C.dih,C.di6,C.di3,C.dhG,C.di7,C.dhM,C.dhN,C.dhP,C.di5,C.dhL,C.dhR,C.die,C.di0,C.di_,C.di1,C.di2,C.dhW,C.dhY,C.dhZ,C.dhS,C.dia,C.did,C.dhI,C.dhJ,C.dk4,C.dk3,C.dk2,C.dk1,C.dk8,C.dk0,C.dk9,C.dix,C.diy,C.diz,C.diC,C.div,C.diu,C.cQF,C.d9o,C.d9B,C.d9A,C.d9Q,C.d9z,C.d9R,C.d9y,C.d9x,C.d9T,C.d9w,C.d9J,C.d9I,C.da_,C.bSv,C.bSF,C.bSx,C.bSy,C.bSB,C.bSA,C.bSD,C.bSE,C.bSz,C.bSt,C.bSu,C.bU8,C.bU9,C.bUa,C.bUb,C.bUc,C.bUd,C.bUe,C.h7N,C.fZb,C.bLP,C.bLK,C.bLI,C.bLJ,C.bLH,C.crA,C.crB,C.crz,C.crC,C.crE,C.crF,C.crG,C.crw,C.cGy,C.cGH,C.cGI,C.cGJ,C.cGG,C.cGK,C.cGL,C.cGM,C.cGN,C.cGB,C.cGF,C.bTE,C.bTD,C.bTB,C.bTz,C.bTA,C.bTw,C.bTx,C.bTy,C.bTC,C.bTv,C.f9q,C.f9r,C.f9s,C.f9t,C.f9u,C.bTs,C.bTt,C.bTu,C.bTn,C.bTp,C.bTq,C.bTr,C.bTj,C.bT3,C.bT2,C.bT1,C.bSW,C.bSX,C.bT0,C.bSY,C.bSZ,C.bSV,C.e3A,C.e3C,C.e3v,C.e3w,C.e3u,C.e3E,C.e3F,C.e3G,C.e3J,C.e3K,C.e3L,C.e3M,C.e3N,C.e3O,C.e3P,C.e3Q,C.e3H,C.e3I,C.bTf,C.bTe,C.bT5,C.bT4,C.bTb,C.bTc,C.bT8,C.bT9,C.bTa,C.bT7,C.bSG,C.bSH,C.bSL,C.bSK,C.bSJ,C.bSI,C.e5f,C.e5e,C.e5h,C.e5i,C.e5j,C.e5d,C.e5l,C.e5k,C.e4E,C.e4F,C.e4H,C.e43,C.e4k,C.e4j,C.e4m,C.e4A,C.e4f,C.e4q,C.e4r,C.e4p,C.e4n,C.e4o,C.e4t,C.e4u,C.e4v,C.e4z,C.e3S,C.e4C,C.e3W,C.e3Z,C.e40,C.e4I,C.e46,C.e44,C.e48,C.e49,C.e45,C.e4a,C.e4e,C.e4R,C.e4S,C.e4K,C.e4N,C.e4O,C.e4P,C.e4U,C.e4L,C.e41,C.diG,C.diF,C.diK,C.diU,C.diL,C.f_a,C.dyY,C.dyV,C.dyW,C.dz5,C.dz4,C.dz3,C.dzd,C.dz2,C.dze,C.dz1,C.dzf,C.dz0,C.dzg,C.dz_,C.dyZ,C.dz9,C.dzj,C.dzs,C.e53,C.e57,C.e58,C.e5_,C.e50,C.e51,C.e56,C.e5a,C.e59,C.e4V,C.e4W,C.e4X,C.e4Y,C.e4Z,C.dR5,C.h0g,C.cpS,C.dab,C.daa,C.dae,C.da7,C.da9,C.cIg,C.cIm,C.cIn,C.cIl,C.cIp,C.cIk,C.cIh,C.cIi,C.cIt,C.foH,C.foI,C.eXl,C.eXc,C.eXd,C.eXe,C.eXg,C.eXh,C.eXk,C.eX7,C.eXa,C.eXm,C.eX8,C.eXp,C.eXq,C.eXr,C.eXs,C.eXo,C.eX2,C.eX3,C.eX4,C.eX6,C.eX5,C.eXL,C.eXM,C.eXu,C.eXv,C.eXC,C.eXD,C.eXE,C.eXy,C.eXz,C.eXS,C.eXR,C.eXT,C.eXQ,C.eXt,C.eXx,C.eXO,C.eXN,C.eXI,C.eXJ,C.eXH,C.eXG])
u(A.ag,[C.aqo,C.Ue,C.a_R,C.a_V,C.a_T,C.a_r,C.amp,C.akz,C.avs,C.azp,C.amy,C.amw,C.ams,C.WA,C.amu,C.Uf,C.arC,C.arw,C.a0v,C.arA,C.a0P,C.a0Q,C.a7C,C.a_t,C.a_s,C.ZZ,C.a2B,C.Gp,C.azv,C.auC,C.auw,C.auB,C.P8])
u(A.ah,[C.aFe,C.bho,C.aCc,C.bhN,C.aCf,C.beX,C.aCd,C.aAo,C.aHH,C.azq,C.aCh,C.aCg,C.aCe,C.bmN,C.amv,C.amr,C.aFO,C.aFL,C.aEd,C.aFN,C.aFM,C.bmO,C.aNU,C.aAX,C.aAW,C.azC,C.bzg,C.aQ1,C.aQ2,C.aHi,C.boa,C.aHh,C.bB1])
u(A.lr,[C.dRI,C.dRK,C.dRF,C.dS3,C.fMq,C.bSs,C.dig,C.dif,C.dhX,C.dib,C.dic,C.diD,C.bUf,C.bU7,C.bST,C.bSU,C.h7M,C.h8b,C.bLO,C.crD,C.crx,C.crr,C.f9v,C.bTh,C.bTk,C.bTl,C.dte,C.bTd,C.e4w,C.e4b,C.e4T,C.diT,C.diS,C.diQ,C.diV,C.diY,C.diZ,C.diJ,C.diN,C.diP,C.dj1,C.cgb,C.cgj,C.cgo,C.dR6,C.h0i,C.h0h,C.foE,C.foF,C.eXi,C.eXP,C.cHA,C.fwy,C.fs9,C.fMw,C.fIu,C.fMt,C.fsV,C.fsU,C.fxh])
u(A.ol,[C.a26,C.agj,C.a2p,C.a0i,C.acV,C.aMe,C.Iw,C.amA,C.cHB,C.cHC])
t(C.amq,C.aCd)
t(C.akA,C.aAo)
t(C.avt,C.aHH)
t(C.bhs,C.aCh)
t(C.amz,C.bhs)
t(C.bhr,C.aCg)
t(C.amx,C.bhr)
t(C.bhq,C.aCe)
t(C.amt,C.bhq)
t(C.bms,C.aNU)
t(C.bze,C.aQ1)
t(C.bzf,C.aQ2)
t(C.aHj,C.bB1)
t(C.bbA,A.bbn)
t(C.bzh,A.ap3)
t(C.bbz,C.bzh)
w(C.aCd,A.cf)
w(C.aAo,A.cf)
w(C.aHH,A.eO)
w(C.aCe,A.cf)
v(C.bhq,C.ag5)
w(C.aCg,A.cf)
v(C.bhr,C.ag5)
w(C.aCh,A.cf)
v(C.bhs,C.ag5)
w(C.aNU,A.eO)
w(C.aQ1,A.cf)
w(C.aQ2,A.cf)
v(C.bB1,A.eG)
v(C.bzh,A.jh)})()
A.ng(b.typeUniverse,JSON.parse('{"b0A":{"av":[],"v":[]},"bdM":{"aB":[]},"aqo":{"ag":[],"v":[]},"aFe":{"ah":["aqo"]},"Ue":{"ag":[],"v":[]},"amo":{"av":[],"v":[]},"aXi":{"av":[],"v":[]},"bho":{"ah":["Ue"]},"a_R":{"ag":[],"v":[]},"a_V":{"ag":[],"v":[]},"a_T":{"ag":[],"v":[]},"a_r":{"ag":[],"v":[]},"aCc":{"ah":["a_R"]},"bhN":{"ah":["a_V"]},"aCf":{"ah":["a_T"]},"a_7":{"av":[],"v":[]},"beZ":{"aB":[]},"beQ":{"aB":[]},"beX":{"ah":["a_r"]},"aJk":{"aB":[]},"bkk":{"aB":[]},"bd8":{"av":[],"v":[]},"amp":{"ag":[],"v":[]},"amq":{"ah":["amp"]},"bpW":{"aB":[]},"aXn":{"aB":[]},"akz":{"ag":[],"v":[]},"avs":{"ag":[],"v":[]},"azp":{"ag":[],"v":[]},"akA":{"ah":["akz"]},"bdO":{"aB":[]},"QV":{"av":[],"v":[]},"aCb":{"aB":[]},"avt":{"ah":["avs"]},"bdh":{"aB":[]},"azq":{"ah":["azp"]},"amy":{"ag":[],"v":[]},"amw":{"ag":[],"v":[]},"ams":{"ag":[],"v":[]},"amz":{"ah":["amy"]},"bu0":{"aB":[]},"amx":{"ah":["amw"]},"bks":{"aB":[]},"amt":{"ah":["ams"]},"bjT":{"aB":[]},"WA":{"ag":[],"v":[]},"amu":{"ag":[],"v":[]},"Uf":{"ag":[],"v":[]},"a6R":{"av":[],"v":[]},"bk_":{"aB":[]},"tD":{"av":[],"v":[]},"Ix":{"av":[],"v":[]},"bmN":{"ah":["WA"]},"amv":{"ah":["amu"]},"amr":{"ah":["Uf"]},"arC":{"ag":[],"v":[]},"arw":{"ag":[],"v":[]},"a0v":{"ag":[],"v":[]},"aeE":{"av":[],"v":[]},"aFO":{"ah":["arC"]},"aFL":{"ah":["arw"]},"bhu":{"av":[],"v":[]},"bhx":{"aB":[]},"blj":{"av":[],"v":[]},"bgy":{"aB":[]},"bzo":{"av":[],"v":[]},"boF":{"av":[],"v":[]},"aEd":{"ah":["a0v"]},"aeD":{"av":[],"v":[]},"bli":{"av":[],"v":[]},"aeC":{"av":[],"v":[]},"blh":{"av":[],"v":[]},"aEe":{"av":[],"v":[]},"aKu":{"av":[],"v":[]},"GB":{"av":[],"v":[]},"arA":{"ag":[],"v":[]},"a0P":{"ag":[],"v":[]},"a0Q":{"ag":[],"v":[]},"aFN":{"ah":["arA"]},"bhv":{"av":[],"v":[]},"adT":{"av":[],"v":[]},"bht":{"av":[],"v":[]},"bhy":{"av":[],"v":[]},"aFM":{"ah":["a0P"]},"bmO":{"ah":["a0Q"]},"b0y":{"av":[],"v":[]},"a7C":{"ag":[],"v":[]},"bms":{"ah":["a7C"]},"bmr":{"aB":[]},"auD":{"av":[],"v":[]},"a_t":{"ag":[],"v":[]},"a_s":{"ag":[],"v":[]},"ZZ":{"ag":[],"v":[]},"a2B":{"ag":[],"v":[]},"aAX":{"ah":["a_t"]},"aAW":{"ah":["a_s"]},"azC":{"ah":["ZZ"]},"bzg":{"ah":["a2B"]},"Gp":{"ag":[],"v":[]},"azv":{"ag":[],"v":[]},"bze":{"ah":["Gp"]},"bzf":{"ah":["azv"]},"bzd":{"aB":[]},"auC":{"ag":[],"v":[]},"aHi":{"ah":["auC"]},"aeZ":{"av":[],"v":[]},"auw":{"ag":[],"v":[]},"auB":{"ag":[],"v":[]},"boa":{"ah":["auw"]},"aHh":{"ah":["auB"]},"P8":{"ag":[],"v":[]},"aHj":{"ah":["P8"],"eG":[]},"bbz":{"jh":[],"fp":[]}}'))
A.Rs(b.typeUniverse,JSON.parse('{"ag5":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aC
return{e2:w("aU1"),cq:w("mi"),Q:w("rs"),r:w("bq<q,q>"),c5:w("aVZ"),dY:w("aW_"),fH:w("MW"),de:w("alg"),dN:w("N3<H>"),gc:w("Eq<H>"),A:w("eS<q?>"),e:w("Iv"),B:w("nu"),P:w("i4"),df:w("lt"),k:w("kZ"),x:w("aA<~>"),U:w("R<akc>"),V:w("R<ac>"),C:w("R<rs>"),O:w("R<u>"),c:w("R<MW>"),b:w("R<alg>"),ac:w("R<eS<q?>>"),I:w("R<nu>"),u:w("R<i4>"),J:w("R<lt>"),_:w("R<kZ>"),cl:w("R<aA<ai<aa<q,@>>>>"),R:w("R<o1>"),eU:w("R<ai<+(F,F)>>"),ez:w("R<aa<q,aJ>>"),gE:w("R<aa<q,q>>"),Y:w("R<aa<q,@>>"),fD:w("R<o3>"),bp:w("R<oO>"),g:w("R<r>"),ar:w("R<auP>"),v:w("R<hl>"),gy:w("R<aak>"),L:w("R<+(q,q)>"),G:w("R<+(F,F)>"),E:w("R<+(F,~())>"),bd:w("R<+(q,H,Q)>"),bF:w("R<+count,id,name(H,q,q)>"),F:w("R<cX>"),s:w("R<q>"),cF:w("R<at>"),aS:w("R<jL>"),dT:w("R<bbm>"),p:w("R<v>"),Z:w("R<fp>"),D:w("R<lD>"),h:w("R<aAE>"),cC:w("R<biD>"),fp:w("R<KT>"),M:w("R<L_>"),gZ:w("R<aJq>"),gA:w("R<aga>"),e4:w("R<agh>"),dE:w("R<aLs>"),f7:w("R<Q>"),n:w("R<F>"),t:w("R<H>"),dS:w("R<aB?>"),d4:w("R<q?>"),eF:w("cy<ah<ag>>"),d:w("ai<nu>"),do:w("ai<i4>"),cg:w("ai<lt>"),ax:w("ai<kZ>"),fO:w("ai<aa<q,@>>"),cz:w("ai<+(q,q)>"),bC:w("ai<+count,id,name(H,q,q)>"),dy:w("ai<q>"),er:w("ai<at>"),gk:w("ai<lD>"),j:w("ai<@>"),fK:w("bC<q,q>"),d2:w("bC<q,ai<aa<q,@>>>"),a:w("aa<q,@>"),f:w("aa<@,@>"),gv:w("N<q,Iy>"),cM:w("N<H,q>"),w:w("jY"),g2:w("tP"),bV:w("aqb"),fL:w("cw"),K:w("aJ"),dc:w("hl"),fo:w("Pw<H>"),fz:w("+(q,q)"),ei:w("+scope,text(q,q)"),bn:w("+games,limit(Q,H)"),d9:w("+dx,hidden(F,ai<i4>)"),cs:w("+count,id,name(H,q,q)"),N:w("q"),fT:w("iC<i4>"),ec:w("iC<q>"),gW:w("r9<F>"),X:w("bt<F>"),bW:w("e2"),W:w("bl<q>"),b4:w("bl<H>"),cI:w("kj<q>"),av:w("Y<zz>"),cc:w("Y<q>"),l:w("v"),gF:w("fp"),fA:w("lD"),dO:w("GF"),bw:w("aeC<q?>"),cy:w("L1"),q:w("nI"),y:w("Q"),i:w("F"),z:w("@"),S:w("H"),eK:w("ai<kZ>?"),m:w("arz?"),cT:w("r?"),h5:w("+(q,q)?"),eo:w("+code,qrPayload,usesRemaining(q,q,H)?"),he:w("+qrPayload,token,usesRemaining(q,q,H)?"),gG:w("+members,trees,viewOnly(H,H,Q)?"),az:w("r_?"),T:w("q?"),aD:w("e2?"),o:w("lD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6e=new A.be(B.fR,B.bJ,B.fR,B.bJ)
D.af3=new A.be(B.fR,B.iq,B.fR,B.iq)
D.b6t=new A.be(B.jy,B.bJ,B.bJ,B.bJ)
D.b6x=new A.ax(B.cW,1.4,B.r,-1)
D.b6H=new A.ax(B.ab,1,B.r,-1)
D.afz=new A.aY(140,1/0,0,1/0)
D.b84=new A.aY(0,1/0,64,1/0)
D.b88=new A.aY(0,84,0,1/0)
D.afG=new A.aY(130,1/0,0,1/0)
D.aE4=w([B.mb,B.rV,B.c],x.O)
D.caF=new A.a7(B.ay,B.aC,B.x,D.aE4,null,null)
D.b8U=new A.n(null,null,null,null,null,D.caF,B.n)
D.diX=w([B.aV,B.bQ],x.O)
D.ccP=new A.a7(B.aY,B.b3,B.x,D.diX,null,null)
D.b9e=new A.n(null,null,null,null,null,D.ccP,B.n)
D.YX=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fC=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dn2=w([B.dA,D.YX,D.fC],x.O)
D.c9S=new A.a7(B.aY,B.b3,B.x,D.dn2,null,null)
D.ba_=new A.n(null,null,null,null,null,D.c9S,B.n)
D.fAU=new A.G(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbs=new A.C("?",null,D.fAU,null,null,null,null,null,null,null,null,null)
D.bdQ=new A.ck(B.z,null,null,D.hbs,null)
D.Ws=new A.G(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUs=new A.C("\ud83c\udf33",null,D.Ws,null,null,null,null,null,null,null,null,null)
D.agq=new A.ck(B.z,null,null,D.fUs,null)
D.fX7=new A.C("\ud83c\udfc6",null,A1.L8,null,null,null,null,null,null,null,null,null)
D.be0=new A.ck(B.z,null,null,D.fX7,null)
D.bfS=new A.fi(null,null,null,null,null,B.kw,null,null,null,null)
D.agr=new A.ck(B.z,null,null,D.bfS,null)
D.kQ=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fBs=new A.G(!0,D.kQ,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW7=new A.C("No books on the shelf yet.",null,D.fBs,null,null,null,null,null,null,null,null,null)
D.ez0=new A.D(B.nL,D.fW7,null)
D.beh=new A.ck(B.z,null,null,D.ez0,null)
D.fIB=new A.G(!0,D.fC,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcn=new A.C("\ud83d\ude8c  On the road\u2026",null,D.fIB,null,null,null,null,null,null,null,null,null)
D.ezA=new A.D(B.cq,D.hcn,null)
D.beK=new A.ck(B.z,null,null,D.ezA,null)
D.aYf=new A.C("\ud83e\uddfa",null,D.Ws,null,null,null,null,null,null,null,null,null)
D.beZ=new A.ck(B.z,null,null,D.aYf,null)
D.fZA=new A.C("\ud83c\udfad",null,D.Ws,null,null,null,null,null,null,null,null,null)
D.bf9=new A.ck(B.z,null,null,D.fZA,null)
D.bfc=new A.ck(B.z,null,null,Q.YI,null)
D.agL=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.agS=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bhv=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bhA=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bhM=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bhO=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bhQ=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bhY=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lG=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bi1=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bi6=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bi8=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bi9=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lH=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.biN=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.BU=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.biW=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bjf=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bji=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bjo=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bjw=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.ahx=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bjD=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Za=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.ahA=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bjO=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Zc=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bk8=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ahM=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bkx=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bkN=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.blc=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bln=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.Gf=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.blM=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.blP=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.blT=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aie=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bm9=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bmf=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bmm=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.aii=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bmv=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bmZ=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bn7=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bna=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bng=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.aiy=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bnU=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aiY=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.boS=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.aj9=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bph=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Gs=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bpo=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bpy=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bpA=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ajd=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bpS=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bpU=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bpX=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ajl=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.ZZ=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bqk=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bqG=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bqL=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ajy=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bqS=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a_4=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bre=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.brf=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.GA=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bs3=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bsH=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bsN=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bsR=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qq=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bt1=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bt5=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.btb=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.btd=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.aki=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.akm=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.GG=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a_q=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.akv=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bur=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.buK=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bvb=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bvk=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.akU=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a_C=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bvu=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bvL=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a_I=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bw1=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bwi=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a_N=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bwn=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.alb=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ald=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bwG=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.alj=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bx7=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bxb=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bxi=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bxr=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bxA=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bya=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.byG=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fQh=new A.C("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bCc=new A.eS(null,D.fQh,B.fd,null,x.A)
D.fZr=new A.C("None",null,null,null,null,null,null,null,null,null,null,null)
D.bCe=new A.eS(null,D.fZr,B.fd,null,x.A)
D.bCL=new A.bf(38e5)
D.bDu=new A.ix(0,10,0,10)
D.bDD=new A.P(0,1,0,0)
D.bDO=new A.ix(0,4,0,4)
D.bDR=new A.P(0,4,5,0)
D.bE6=new A.P(10,10,14,10)
D.bEh=new A.ix(10,4,10,4)
D.bEq=new A.ix(10,8,10,8)
D.bEr=new A.P(10,8,8,8)
D.bEX=new A.P(12,6,12,2)
D.bFe=new A.P(14,0,14,6)
D.bFi=new A.P(14,10,6,6)
D.bFj=new A.P(14,12,14,0)
D.bFn=new A.P(14,12,14,8)
D.bFq=new A.P(14,12,8,14)
D.bFu=new A.ix(14,14,14,14)
D.bFN=new A.P(14,6,14,40)
D.bFQ=new A.P(14,8,14,30)
D.bGd=new A.P(16,2,16,10)
D.bGm=new A.P(16,6,16,30)
D.bGo=new A.P(16,6,16,8)
D.bGD=new A.P(18,10,18,4)
D.bGF=new A.P(18,12,18,0)
D.bGM=new A.P(18,14,12,4)
D.anM=new A.P(18,16,18,8)
D.bH2=new A.P(18,20,18,22)
D.bH8=new A.P(18,30,18,30)
D.bHq=new A.P(20,10,12,20)
D.bHt=new A.P(20,11,20,11)
D.bHF=new A.P(20,18,16,18)
D.bHH=new A.P(20,18,20,6)
D.bIw=new A.P(24,32,24,28)
D.bIx=new A.P(24,36,24,32)
D.bIA=new A.P(26,26,24,14)
D.bIP=new A.P(2,4,2,8)
D.bIT=new A.P(30,0,30,0)
D.bJ3=new A.P(38,22,22,22)
D.ao9=new A.P(40,24,24,24)
D.bJ5=new A.ix(40,40,40,40)
D.bJ7=new A.P(46,30,30,30)
D.bJz=new A.P(56,40,40,40)
D.bJD=new A.P(1.25,1.25,1.25,1.25)
D.bJE=new A.P(60,0,60,0)
D.bJI=new A.P(6,14,6,16)
D.bJM=new A.P(6,4,12,0)
D.bJQ=new A.P(6,6,10,2)
D.bJX=new A.ix(7,3,7,3)
D.bKt=new A.P(5,1.5,5,1.5)
D.bKE=new A.P(6,2.5,6,2.5)
D.h6D=new A.C("Family Games",null,B.jR,null,null,null,null,null,null,null,null,null)
D.fOU=new A.C("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.Wj,null,null,null,null,null,null,null,null,null)
D.cM3=w([D.h6D,D.fOU],x.p)
D.bzG=new A.fo(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cM3,null)
D.bL4=new A.bz(1,B.bd,D.bzG,null)
D.hb_=new A.C("Signature",null,B.nf,null,null,null,null,null,null,null,null,null)
D.bL7=new A.bz(1,B.bd,D.hb_,null)
D.h3a=new A.C("MADE BY THE ONE WHO PLANTED THE TREE",null,B.u2,null,null,null,null,null,null,null,null,null)
D.bLF=new A.bz(1,B.bd,D.h3a,null)
D.h85=new A.C("Tell the AI what to fix",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bLW=new A.bz(1,B.bd,D.h85,null)
D.fJn=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ha4=new A.C("Worksheets",null,D.fJn,null,null,null,null,null,null,null,null,null)
D.fJz=new A.G(!0,B.ahg,null,null,null,null,13,B.cD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8W=new A.C("Track your project spending",null,D.fJz,null,null,null,null,null,null,null,null,null)
D.da3=w([D.ha4,B.ax,D.h8W],x.p)
D.bzj=new A.fo(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.da3,null)
D.bM1=new A.bz(1,B.bd,D.bzj,null)
D.fEi=new A.G(!0,B.kw,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPt=new A.C("FAMILY LIBRARY",null,D.fEi,null,null,null,null,null,null,null,null,null)
D.bMk=new A.bz(1,B.bd,D.fPt,null)
D.Pa=new C.Iv("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wN=new C.Iw(0,"male")
D.oB=new C.Iw(1,"female")
D.zg=new C.Iw(2,"unknown")
D.uT=new C.amA(0,"owner")
D.Pb=new C.amA(1,"editor")
D.kZ=new C.amA(2,"viewer")
D.aq6=new A.a_(61199,"MaterialIcons",!1)
D.bRF=new A.a_(61504,"MaterialIcons",!1)
D.bRG=new A.a_(61505,"MaterialIcons",!1)
D.bRI=new A.a_(61587,"MaterialIcons",!1)
D.bRP=new A.a_(61890,"MaterialIcons",!1)
D.bSI=new A.a_(63034,"MaterialIcons",!0)
D.bT_=new A.a_(63153,"MaterialIcons",!1)
D.bTx=new A.a_(63429,"MaterialIcons",!1)
D.asb=new A.a_(984520,"MaterialIcons",!1)
D.bSd=new A.a_(62776,"MaterialIcons",!1)
D.bVV=new A.ae(D.bSd,26,B.b2,null,null,null)
D.bQD=new A.a_(57648,"MaterialIcons",!1)
D.bWe=new A.ae(D.bQD,14,B.c,null,null,null)
D.bWw=new A.ae(B.HJ,17,null,null,null,null)
D.bWC=new A.ae(B.PG,null,B.bQ,null,null,null)
D.bX1=new A.ae(B.a3m,null,null,null,null,null)
D.bX4=new A.ae(B.jb,18,B.kw,null,null,null)
D.a36=new A.a_(62044,"MaterialIcons",!1)
D.bXa=new A.ae(D.a36,null,B.aV,null,null,null)
D.bXh=new A.ae(B.zt,18,B.c,null,null,null)
D.bXZ=new A.ae(B.e9,16,null,null,null,null)
D.bY5=new A.ae(D.a36,32,B.aV,null,null,null)
D.bYo=new A.ae(B.aq7,18,B.cW,null,null,null)
D.bZu=new A.ae(B.HU,22,B.aA,null,null,null)
D.bZH=new A.ae(B.e9,22,B.b2,null,null,null)
D.bZU=new A.ae(P.a3b,22,B.c,null,null,null)
D.c_0=new A.ae(B.v2,52,B.c,null,null,null)
D.c_a=new A.ae(B.HU,30,B.aA,null,null,null)
D.c_u=new A.ae(B.a3q,null,B.c,null,null,null)
D.asV=new A.ae(B.ve,22,B.c,null,null,null)
D.c_D=new A.ae(B.e9,17,null,null,null,null)
D.c00=new A.ae(B.x_,26,B.cW,null,null,null)
D.c0N=new A.ae(B.a3C,16,null,null,null,null)
D.c1z=new A.ae(B.v2,24,B.c,null,null,null)
D.c1E=new A.ae(B.PE,20,B.tB,null,null,null)
D.c1J=new A.ae(B.HH,null,B.bQ,null,null,null)
D.c1S=new A.ae(B.jb,18,B.c,null,null,null)
D.c2y=new A.ae(B.cB,22,B.ab,null,null,null)
D.c3r=new A.ae(B.ej,16,B.ab,null,null,null)
D.c3D=new A.ae(D.a36,20,B.aV,null,null,null)
D.atl=new A.ae(B.hd,20,null,null,null,null)
D.c49=new A.ae(B.cB,18,D.kQ,null,null,null)
D.c4r=new A.ae(B.zD,28,B.c,null,null,null)
D.c4D=new A.ae(B.Pu,null,B.fj,null,null,null)
D.c4Y=new A.ae(B.zD,24,B.c,null,null,null)
D.c5p=new A.ae(B.v2,null,B.aV,null,null,null)
D.c5q=new A.ae(B.js,20,B.cW,null,null,null)
D.c5K=new A.ae(B.HJ,16,null,null,null,null)
D.c7i=new A.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eN,!0,null,null,null,null)
D.au4=new C.a6R(10,null)
D.c7O=new C.a6R(12,null)
D.c7P=new C.a6R(14,null)
D.drc=w([B.bv,B.aV,B.fq,B.b2],x.O)
D.c9_=new A.a7(B.ay,B.aC,B.x,D.drc,null,null)
D.brP=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.byh=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d6s=w([D.brP,D.byh],x.O)
D.c9b=new A.a7(B.aY,B.b3,B.x,D.d6s,null,null)
D.dl0=w([B.ff,B.fX,B.fq],x.O)
D.c9h=new A.a7(B.ay,B.aC,B.x,D.dl0,null,null)
D.ak6=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bia=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d8H=w([D.ak6,D.bia],x.O)
D.c9T=new A.a7(B.aY,B.b3,B.x,D.d8H,null,null)
D.bm1=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aDl=w([D.bm1,D.ak6],x.O)
D.cab=new A.a7(B.ay,B.aC,B.x,D.aDl,null,null)
D.aiQ=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.boJ=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dk3=w([D.aiQ,D.boJ],x.O)
D.caR=new A.a7(B.a5,B.a9,B.x,D.dk3,null,null)
D.dys=w([B.bD,B.nx],x.O)
D.caT=new A.a7(B.aY,B.b3,B.x,D.dys,null,null)
D.brK=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dzp=w([D.brK,D.kQ,D.kQ,G.NF],x.O)
D.dC5=w([0,0.07,0.9,1],x.n)
D.cbo=new A.a7(B.a5,B.a9,B.x,D.dzp,D.dC5,null)
D.cbx=new A.a7(B.ay,B.aC,B.x,B.Tm,null,null)
D.d47=w([B.aD,D.lG],x.O)
D.cbA=new A.a7(B.a5,B.a9,B.x,D.d47,null,null)
D.dy_=w([B.b2,B.aV,B.bQ],x.O)
D.ccC=new A.a7(B.ay,B.aC,B.x,D.dy_,null,null)
D.cgX=w([10,20,30],x.t)
D.cqV=w([-1,-0.4,0.3,1],x.n)
D.cyq=w([B.bv,B.b2,B.ff],x.O)
D.cyy=w([B.bh,B.aD,B.kv],x.O)
D.cyA=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.czi=w([30,140,262,360],x.n)
D.bq2=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cER=w([D.bq2,B.ajH],x.O)
D.etC=new A.r(1,2)
D.fmd=new A.cX(B.b5,D.etC,3)
D.aAd=w([D.fmd],x.F)
D.cMl=w([B.h9,B.cj,B.fB],x.O)
D.cP7=w([B.bP,B.by,B.bs],x.O)
D.bNa=new C.uS("classic","Classic leather","Gold-edged brown leather",D.aDl,B.kw,B.kw,"\u2766",B.K,!0,!1,!1,!1)
D.bhf=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bwY=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dbU=w([D.bhf,D.bwY],x.O)
D.ajK=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bN5=new C.uS("ornate","Ornate gold","Double gold border and flourishes",D.dbU,D.ajK,D.ajK,"\u2726",B.K,!0,!0,!0,!1)
D.bly=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bsB=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d2Y=w([D.bly,D.bsB],x.O)
D.bN4=new C.uS("parchment","Parchment","Old paper with dark ink",D.d2Y,D.GA,B.j6,"\u2767",B.K,!0,!1,!1,!0)
D.agU=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bv8=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dw7=w([D.agU,D.bv8],x.O)
D.bpv=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bul=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bN7=new C.uS("minimal","Clean paper","Plain and elegant, like a printed book",D.dw7,D.bpv,D.bul,"",B.K,!0,!0,!1,!0)
D.bN9=new C.uS("midnight","Midnight","Deep blue with silver stars",H.aDE,B.cA,B.ci,"\u2727",B.K,!0,!0,!1,!1)
D.bN3=new C.uS("emerald","Emerald library","Green cloth, title on the left",N.aAD,B.kw,B.fZ,"\u25c6",B.b6,!0,!1,!1,!1)
D.bvD=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.du5=w([B.eq,D.bvD],x.O)
D.bqR=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bs8=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bN8=new C.uS("rose","Rose vintage","Burgundy with rose-gold lettering",D.du5,D.bqR,D.bs8,"\u2740",B.K,!0,!1,!0,!1)
D.dz0=w([B.ct,E.mX],x.O)
D.bN6=new C.uS("modern","Modern","Dark, bold, left-aligned",D.dz0,B.aH,B.c,"",B.b6,!1,!0,!1,!1)
D.a5G=w([D.bNa,D.bN5,D.bN4,D.bN7,D.bN9,D.bN3,D.bN8,D.bN6],A.aC("R<uS>"))
D.cS8=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dyO=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bNl=new C.lt('What does "Ubuntu" mean?',D.dyO,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d4Q=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bNo=new C.lt("In Swahili, what do we call a grandmother?",D.d4Q,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d4H=w(["Babu","Mama","Baba","Dada"],x.s)
D.bNj=new C.lt("In Swahili, what do we call a grandfather?",D.d4H,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d62=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bNn=new C.lt("What is a sister called in Swahili?",D.d62,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.dbj=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bNk=new C.lt("What is a brother called in Swahili?",D.dbj,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d4G=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bNv=new C.lt("Which word means father in Swahili?",D.d4G,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dA_=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bNu=new C.lt('"Umoja ni nguvu" means...',D.dA_,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dwS=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bNw=new C.lt('"Haba na haba hujaza kibaba" teaches us...',D.dwS,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d8Q=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bNt=new C.lt('The African saying "It takes a village to raise a child" means...',D.d8Q,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dAj=w(["The elders","The market","The river","The drum"],x.s)
D.bNp=new C.lt("Who is the traditional keeper of the family stories?",D.dAj,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cWo=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bNm=new C.lt("Why do families sit round the fire at night?",D.cWo,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dz2=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bNr=new C.lt('What does "Harambee" mean?',D.dz2,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dec=w(["An elder","A baby","A market","A cow"],x.s)
D.bNq=new C.lt('"Mzee" is a respectful word for...',D.dec,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dtW=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bNs=new C.lt('What does "Shikamoo" show?',D.dtW,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aAy=w([D.bNl,D.bNo,D.bNj,D.bNn,D.bNk,D.bNv,D.bNu,D.bNw,D.bNt,D.bNp,D.bNm,D.bNr,D.bNq,D.bNs],x.J)
D.d_P=w([90,360],x.n)
D.d2v=w([B.bQ,B.bp],x.O)
D.brx=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d39=w([D.agU,D.brx],x.O)
D.d3R=w([-1,-0.3,0.4,1],x.n)
D.d4M=w([0,0.45,0.72,0.92,1],x.n)
D.blu=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d54=w([D.blu,B.bA],x.O)
D.bja=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.alt=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d5G=w([B.dA,D.bja,D.alt],x.O)
D.d6J=w([B.ba,B.jl,B.pj],x.O)
D.bm2=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.buc=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.biR=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d6O=w([D.bm2,D.buc,D.biR],x.O)
D.d78=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d7j=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hFX=new C.aeg(78,424,48,44,56)
D.hFV=new C.aeg(214,396,34,34,42)
D.hFW=new C.aeg(442,452,56,50,64)
D.aBw=w([D.hFX,D.hFV,D.hFW],A.aC("R<aeg>"))
D.d7T=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bi3=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bnT=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dC1=w([D.aiQ,D.bi3,D.bnT],x.O)
D.bNb=new C.uT("leather","Leather",D.dC1,"vintage")
D.dfd=w([B.dh,B.Gq,B.Zs],x.O)
D.bNi=new C.uT("midnight","Midnight",D.dfd,"starry")
D.d6K=w([B.ep,B.ec,B.ll],x.O)
D.bNh=new C.uT("forest","Forest",D.d6K,"story")
D.dE7=w([B.er,B.eq,B.ky],x.O)
D.bNe=new C.uT("burgundy","Burgundy",D.dE7,"royal")
D.cOG=w([B.aD,B.mR,B.no],x.O)
D.bNf=new C.uT("royal","Royal",D.cOG,"royal")
D.d9m=w([B.by,B.ct,E.mX],x.O)
D.bNc=new C.uT("charcoal","Charcoal",D.d9m,"geo")
D.dCa=w([B.c9,B.dN,B.yw],x.O)
D.bNg=new C.uT("sunset","Sunset",D.dCa,"sunset")
D.dCV=w([B.jl,B.yz,B.Zw],x.O)
D.bNd=new C.uT("ocean","Ocean",D.dCV,"band")
D.A6=w([D.bNb,D.bNi,D.bNh,D.bNe,D.bNf,D.bNc,D.bNg,D.bNd],A.aC("R<uT>"))
D.d9T=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.daz=w([B.an,B.aL,B.a_],x.O)
D.dbZ=w([B.eq,B.ec,B.dh,B.iL,B.yB,B.cW,B.k1,B.cR,B.d6],x.O)
D.dc_=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fme=new A.cX(B.dB,B.dM,8)
D.dc9=w([D.fme],x.F)
D.ddi=w([B.c4,B.dN,B.jX],x.O)
D.bk1=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bob=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bsw=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.ddB=w([D.bk1,F.akf,D.bob,D.bsw,D.alt],x.O)
D.ddS=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.de2=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bhr=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bnx=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dev=w([D.bhr,D.aii,D.bnx],x.O)
D.df8=w([B.c4,B.hK],x.O)
D.dfe=w([F.nq,B.ic,F.ah5,B.cV],x.O)
D.dgS=w([B.cV,F.nq,B.ic,D.lH,B.cV],x.O)
D.dhu=w([B.aQ,B.yx,B.yn],x.O)
D.aCy=w(["True","False"],x.s)
D.eQX=new A.y(-0.65,0.6)
D.f2F=new A.y(-0.2,0.95)
D.f3M=new A.y(0.25,0.95)
D.eUr=new A.y(0.7,0.6)
D.f4l=new A.y(1,0.1)
D.dih=w([A0.Vb,D.eQX,D.f2F,D.f3M,D.eUr,D.f4l],x.G)
D.bql=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bwQ=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bl1=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.din=w([D.bql,D.bwQ,D.bl1],x.O)
D.dis=w([B.bL,B.bZ,B.dy,B.aQ],x.O)
D.diY=w([B.hM,B.c9,B.ut],x.O)
D.djm=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.djx=w([B.ff,B.cW],x.O)
D.brT=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.djZ=w([D.brT,D.agS],x.O)
D.dka=w([B.cP,B.fL,B.h_],x.O)
D.dkm=w([B.aH,B.bp,B.dh],x.O)
D.dkY=w([B.ew,B.dn,B.ec],x.O)
D.dlh=w([B.dX,B.dh,B.Gq],x.O)
D.dll=w([B.bt,B.mO,B.d6],x.O)
D.dlC=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.br5=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bpd=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dlY=w([D.br5,D.aie,D.bpd],x.O)
D.dmN=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dnQ=w([1,0,7,6,3,2],x.t)
D.a6F=w(["leather","linen","plain","stars","rays"],x.s)
D.do2=w([0.5,2,3.6],x.n)
D.doB=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bVd=new A.a_(983781,"MaterialIcons",!1)
D.aD1=w([B.PG,B.hE,B.kC,B.i0,E.asj,B.I5,B.qP,D.bVd,H.arX,B.Dp,B.qS,B.ml],A.aC("R<a_>"))
D.a6J=w(["double","single","corners","none"],x.s)
D.bN0=new C.zz("Little Seed","\ud83c\udf31",0)
D.bN2=new C.zz("Young Listener","\ud83d\udc42",40)
D.bN1=new C.zz("Storyteller","\ud83e\ude98",120)
D.bN_=new C.zz("Village Pride","\ud83c\udfe1",300)
D.bMY=new C.zz("Keeper of Roots","\ud83c\udf33",700)
D.bMZ=new C.zz("Elder of the Fire","\ud83d\udd25",1500)
D.aD3=w([D.bN0,D.bN2,D.bN1,D.bN_,D.bMY,D.bMZ],A.aC("R<zz>"))
D.dpM=w([B.d_,B.bj,B.cR],x.O)
D.dq1=w([],x.C)
D.E_=w([],x.u)
D.aNd=new A.r(225,528)
D.eSD=new A.y(D.aNd,1)
D.eum=new A.r(350,548)
D.eYT=new A.y(D.eum,0.95)
D.aN7=new A.r(158,656)
D.eYM=new A.y(D.aN7,1.12)
D.ev8=new A.r(92,544)
D.eOc=new A.y(D.ev8,0.93)
D.eup=new A.r(398,614)
D.eUO=new A.y(D.eup,1.04)
D.eud=new A.r(318,662)
D.eJx=new A.y(D.eud,1.1)
D.a6R=w([D.eSD,D.eYT,D.eYM,D.eOc,D.eUO,D.eJx],A.aC("R<+(r,F)>"))
D.ds4=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dsy=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dtC=w([B.cV,F.nq,B.ic,D.lH,B.cV,B.ic],x.O)
D.dv3=w([B.at,B.fL,B.iL],x.O)
D.dvJ=w([-70,58],x.n)
D.dvL=w([-70,-30,20],x.n)
D.dwP=w([B.bt,B.mO,B.a_D],x.O)
D.dx6=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dT9=new C.lX("construction","Construction","Jobsite & builds",B.qR)
D.dTg=new C.lX("house","Home Build","Houses & rooms",B.v4)
D.dT6=new C.lX("grocery","Grocery","Store & pantry",B.a4a)
D.dT5=new C.lX("calculator","Calculations","Math & estimates",B.PM)
D.dTe=new C.lX("lumber","Materials","Lumber & supplies",B.I2)
D.dT2=new C.lX("kitchen","Kitchen","Remodel & meals",T.Q5)
D.bVb=new A.a_(983756,"MaterialIcons",!1)
D.dT7=new C.lX("landscape","Landscaping","Yard & garden",D.bVb)
D.dT1=new C.lX("plumbing","Plumbing","Pipes & water",B.pG)
D.dTh=new C.lX("electrical","Electrical","Wiring & power",B.hp)
D.dT_=new C.lX("store","Retail Shop","Daily business",B.kf)
D.dT0=new C.lX("paint_remodel","Paint & Remodel","Colors & walls",T.Q1)
D.bUy=new A.a_(983311,"MaterialIcons",!1)
D.dTd=new C.lX("roofing","Roofing","Roofs & exteriors",D.bUy)
D.bVm=new A.a_(983986,"MaterialIcons",!1)
D.dSZ=new C.lX("warehouse","Warehouse","Storage & stock",D.bVm)
D.dTb=new C.lX("vehicles","Vehicles","Fleet & transport",B.Dl)
D.bSf=new A.a_(62785,"MaterialIcons",!1)
D.dT4=new C.lX("farm","Farm","Crops & livestock",D.bSf)
D.dT3=new C.lX("restaurant","Restaurant","Food & catering",B.vc)
D.dTa=new C.lX("tools","Tools","Workshop gear",B.Dh)
D.dTf=new C.lX("wallet","Cash & Wallet","Quick spending",B.js)
D.dTc=new C.lX("concrete","Concrete","Foundation work",E.ar3)
D.dT8=new C.lX("blueprint","Blueprint","Plans & design",B.aqB)
D.a7f=w([D.dT9,D.dTg,D.dT6,D.dT5,D.dTe,D.dT2,D.dT7,D.dT1,D.dTh,D.dT_,D.dT0,D.dTd,D.dSZ,D.dTb,D.dT4,D.dT3,D.dTa,D.dTf,D.dTc,D.dT8],A.aC("R<lX>"))
D.dxE=w([B.bu,B.bj],x.O)
D.dyt=w([B.iw,B.oj,B.dW],x.O)
D.aj3=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ak1=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bpz=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bgV=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aEc=w([D.aj3,D.ak1,D.bpz,D.bgV],x.O)
D.dzG=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7p=w(["top","middle","bottom"],x.s)
D.dBb=w([B.cs,B.bp,B.dh],x.O)
D.aEw=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bat=new A.ac(0,B.G,B.b5,B.J,14)
D.aEA=w([D.bat],x.V)
D.bop=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dBV=w([D.ahx,D.a_C,D.bop],x.O)
D.dBW=w([B.be,B.dn,B.ec],x.O)
D.etX=new A.r(24,-8)
D.euF=new A.r(48,0)
D.etT=new A.r(24,6)
D.dDE=w([B.J,D.etX,D.euF,D.etT],x.g)
D.dE3=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eqp={top:0,middle:1,bottom:2}
D.dHj=new A.bq(D.eqp,["Top","Middle","Bottom"],x.r)
D.eq_={double:0,single:1,corners:2,none:3}
D.dHp=new A.bq(D.eq_,["Double line","One line","Corners","None"],x.r)
D.erd={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dJ4=new A.bq(D.erd,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dJg=new A.bq(B.i2,[],A.aC("bq<H,+(q,q)>"))
D.eqh={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Ef=new A.bq(D.eqh,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aC("bq<q,H>"))
D.dNy=new A.NZ(32,null)
D.dNz=new A.NZ(40,null)
D.dNA=new A.NZ(46,null)
D.aMF=new C.auB(null)
D.esN=new A.r(0,40)
D.esO=new A.r(0,412)
D.esR=new A.r(0,900)
D.et0=new A.r(0,-34)
D.et1=new A.r(0,-46)
D.et3=new A.r(0,-74)
D.et6=new A.r(100,300)
D.et7=new A.r(10,14)
D.eta=new A.r(10,-10)
D.etf=new A.r(10,-46)
D.etg=new A.r(10,-58)
D.eth=new A.r(116,442)
D.etj=new A.r(11,-1)
D.etk=new A.r(11,-10)
D.etl=new A.r(11,-21)
D.aN2=new A.r(11,-60)
D.ets=new A.r(14,-2)
D.ett=new A.r(150,520)
D.a9A=new A.r(150,592)
D.etw=new A.r(15,-15)
D.etx=new A.r(16,-1)
D.etB=new A.r(190,444)
D.etE=new A.r(1,5)
D.etM=new A.r(21,-78)
D.etN=new A.r(222,615)
D.K0=new A.r(225,300)
D.a9C=new A.r(225,574)
D.etW=new A.r(24,-52)
D.etY=new A.r(250,210)
D.eu8=new A.r(2,-56)
D.aNh=new A.r(300,0)
D.eu9=new A.r(300,440)
D.euc=new A.r(318,476)
D.euf=new A.r(324,144)
D.a9F=new A.r(332,150)
D.euh=new A.r(335,585)
D.eui=new A.r(338,140)
D.euj=new A.r(340,158)
D.eul=new A.r(34,-60)
D.EH=new A.r(36,-24)
D.eun=new A.r(372,470)
D.euo=new A.r(390,455)
D.eux=new A.r(42,468)
D.euy=new A.r(431,510)
D.euz=new A.r(431,520)
D.euA=new A.r(45,-92)
D.euB=new A.r(46,20)
D.euC=new A.r(46,-92)
D.euD=new A.r(46,-94)
D.euE=new A.r(47,-4)
D.euG=new A.r(48,-4)
D.euO=new A.r(4,-26)
D.euW=new A.r(60,455)
D.ev3=new A.r(8,14)
D.ev7=new A.r(8,-76)
D.ev9=new A.r(95,575)
D.eva=new A.r(98,-24)
D.evc=new A.r(9,-2)
D.evd=new A.r(9,-58)
D.aNq=new A.r(9,-79)
D.eve=new A.r(9,-9)
D.evS=new A.r(16.5,8)
D.evU=new A.r(3.2,0)
D.evW=new A.r(-16.5,8)
D.ew2=new A.r(16.5,2)
D.ew5=new A.r(-3.2,0)
D.ewd=new A.r(9.5,6)
D.ewh=new A.r(-10,14)
D.ewi=new A.r(-10,-12)
D.ewj=new A.r(-10,-58)
D.ewl=new A.r(-11,-1)
D.ewm=new A.r(-11,-10)
D.ewo=new A.r(-11,-60)
D.ewp=new A.r(-12,-14)
D.ewq=new A.r(-12,-16)
D.ewx=new A.r(-14,-2)
D.ewA=new A.r(-15,-15)
D.ewB=new A.r(-15,-3)
D.ewD=new A.r(-16,-1)
D.ewU=new A.r(-24,-52)
D.ex0=new A.r(-2,-34)
D.ex1=new A.r(-2,-38)
D.ex3=new A.r(-30,-100)
D.a9H=new A.r(-36,-24)
D.exe=new A.r(-4,-26)
D.exg=new A.r(-4,-6)
D.exq=new A.r(-8,-3)
D.exr=new A.r(-8,-48)
D.exu=new A.r(-9,-2)
D.exw=new A.r(-9,-58)
D.exx=new A.r(-9,-79)
D.exy=new A.r(-9,-9)
D.exA=new A.r(-9.5,6)
D.exN=new A.r(-16.5,2)
D.fWO=new A.C("Write a new book",null,B.hh,null,B.K,null,null,null,null,null,null,null)
D.eym=new A.D(B.kX,D.fWO,null)
D.hay=new A.C("Tap to go on",null,B.vR,null,null,null,null,null,null,null,null,null)
D.eyI=new A.D(B.ln,D.hay,null)
D.ast=new A.ae(B.i_,18,B.c,null,null,null)
D.fPO=new A.C("Add",null,B.kI,null,null,null,null,null,null,null,null,null)
D.diG=w([D.ast,B.rd,D.fPO],x.p)
D.fjk=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.diG,null)
D.eyL=new A.D(B.nI,D.fjk,null)
D.eyM=new A.D(B.amC,Q.YI,null)
D.fJi=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT0=new A.C("New Project",null,D.fJi,null,null,null,null,null,null,null,null,null)
D.dna=w([D.ast,B.ae,D.fT0],x.p)
D.fjn=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dna,null)
D.ez_=new A.D(B.hP,D.fjn,null)
D.fVx=new A.C("Choose your header",null,B.u_,null,null,null,null,null,null,null,null,null)
D.ezk=new A.D(B.hZ,D.fVx,null)
D.bg7=new A.fi(2.2,null,null,null,null,B.cW,null,null,null,null)
D.fp7=new A.a5(22,22,D.bg7,null)
D.bec=new A.ck(B.z,null,null,D.fp7,null)
D.ezp=new A.D(B.a1_,D.bec,null)
D.bFF=new A.P(14,2,14,6)
D.h8F=new A.C("The top of your book. Tap a design to see it.",null,B.u0,null,null,null,null,null,null,null,null,null)
D.ezq=new A.D(D.bFF,D.h8F,null)
D.fUH=new A.C("\ud83c\udfc6 A new record!",null,B.h7,null,null,null,null,null,null,null,null,null)
D.ezs=new A.D(B.ln,D.fUH,null)
D.eB0=new A.jf(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eB3=new A.jf(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aO0=new A.jf(1,0.9607843137254902,0.48627450980392156,0)
D.K8=new A.jf(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.AI=new A.jf(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eB9=new A.jf(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hHZ=new C.bkk(null)
D.bAs=new A.mC(D.hHZ,null,B.az,null,null)
D.aRE=new A.cK(0,0,0,0,null,null,D.bAs,null)
D.fPQ=new A.C("\ud83c\udfc5",null,B.abY,null,null,null,null,null,null,null,null,null)
D.eFz=new A.cK(null,0,-34,null,null,null,D.fPQ,null)
D.eNR=new A.y("E","Sit by the fire again")
D.eTr=new A.y("C","Good Learner")
D.eWR=new A.y("D","Still Growing")
D.f0r=new A.y(-42,42)
D.f1O=new A.y("B","Faithful Listener")
D.f3O=new A.y("A","Keeper of the Family")
D.f6X=new A.b3(-17,0.7,0)
D.f7v=new A.b3(-8,0.95,1.3)
D.f8z=new A.b3(18,0.65,5.2)
D.f8B=new A.b3(0,1.15,2.6)
D.f8W=new A.b3(9,0.9,3.9)
D.faR=new A.b7([0,0,1,1])
D.aT8=new A.a4(0,0,520,160)
D.fgn=new A.a4(10,612,440,618)
D.fgo=new A.a4(10,612,440,628)
D.fgr=new A.a4(14,-64,34,-12)
D.fgu=new A.a4(300,336,350,348)
D.aaA=new A.a4(30,96,420,346)
D.fgv=new A.a4(30,-9,46,1)
D.fgw=new A.a4(4,2,11,14)
D.fgy=new A.a4(-8,-12.5,8,-7)
D.fgz=new A.a4(-16.5,-21,16.5,1)
D.fgA=new A.a4(60,342,88,348)
D.Vc=new A.a4(66,-66,94,-36)
D.fgB=new A.a4(6,8,10,14)
D.fgE=new A.a4(95,343,115,348)
D.fgF=new A.a4(-6.5,-74,6.5,-58)
D.fgL=new A.a4(-100,-74,100,-12)
D.fgM=new A.a4(-10,8,-6,14)
D.fgN=new A.a4(-11,2,-4,14)
D.fgO=new A.a4(-11,-70,11,-56)
D.fgV=new A.a4(-13,-24,13,-4)
D.fh0=new A.a4(-15,-21,15,0)
D.fh3=new A.a4(-16,-21,16,1)
D.fh4=new A.a4(-16,-21,16,2)
D.fh7=new A.a4(-16,-26,16,-6)
D.fhh=new A.a4(-230,-26,230,26)
D.fhF=new A.a4(-38,-26,12,-6)
D.fhJ=new A.a4(-3,-70,3,-63)
D.fhK=new A.a4(-44,-22,44,0)
D.fhM=new A.a4(-46,-9,-30,1)
D.aTc=new A.a4(-80,-190,80,20)
D.fhT=new A.a4(-8,-26,40,-6)
D.fhU=new A.a4(-98,-80,92,-75)
D.fhV=new A.a4(-9,-15,9,-9)
D.h8c=new A.C("Let the AI write it from your tree",null,B.iH,null,B.K,null,null,null,null,null,null,null)
D.bO5=new A.df(1,B.cl,D.h8c,null)
D.df7=w([B.a4E,B.ae,D.bO5],x.p)
D.fiZ=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.df7,null)
D.fPu=new A.C("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.dvt=w([D.atl,B.ae,D.fPu],x.p)
D.fj8=new A.c8(B.aM,B.b9,B.i,B.l,null,B.p,null,0,D.dvt,null)
D.bZN=new A.ae(B.ii,14,B.b2,null,null,null)
D.fCP=new A.G(!0,B.b2,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTr=new A.C("Cashier",null,D.fCP,null,null,null,null,null,null,null,null,null)
D.dnH=w([D.bZN,B.bn,D.fTr],x.p)
D.fjc=new A.c8(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dnH,null)
D.fPv=new A.C("Transfer & settings",null,B.dl,null,null,null,null,null,null,null,null,null)
D.bLM=new A.bz(1,B.bd,D.fPv,null)
D.d6b=w([D.asV,B.as,D.bLM],x.p)
D.fjd=new A.c8(B.aM,B.e,B.i,B.l,null,B.p,null,0,D.d6b,null)
D.fnM=new A.au(16,40)
D.fnR=new A.au(22,64)
D.fnY=new A.au(280,88)
D.foN=new A.a5(30,null,null,null)
D.fOA=new A.C("The teacher is writing\u2026",null,B.B3,null,null,null,null,null,null,null,null,null)
D.bfj=new A.ck(B.z,null,null,D.fOA,null)
D.hBT=new A.bl("w",x.W)
D.fpc=new A.a5(null,56,D.bfj,D.hBT)
D.fq_=new A.hN(5,8,8,1,null)
D.fq7=new A.hN(2,12,12,1.05,null)
D.fT6=new A.C("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fqS=new A.b0(D.fT6,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fTm=new A.C("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aVw=new A.b0(D.fTm,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h0P=new A.C("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.frl=new A.b0(D.h0P,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hbA=new A.C("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.frq=new A.b0(D.hbA,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVv=new A.C("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.frx=new A.b0(D.fVv,null,null,null,null,null,null,null,null,null,null,null,null,B.h2,!1,null,null,null,B.t,null)
D.h8S=new A.C("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aVB=new A.b0(D.h8S,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVt=new A.C("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.frX=new A.b0(D.fVt,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQ6=new A.C("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.frZ=new A.b0(D.fQ6,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fZf=new A.C("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fs4=new A.b0(D.fZf,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hck=new A.C("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fsL=new A.b0(D.hck,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h76=new A.C("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fta=new A.b0(D.h76,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hbE=new A.C("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ftd=new A.b0(D.hbE,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h2s=new A.C("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ftf=new A.b0(D.h2s,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fXq=new A.C("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.ftg=new A.b0(D.fXq,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fXr=new A.C("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fuh=new A.b0(D.fXr,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fT8=new A.C("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fuz=new A.b0(D.fT8,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fV8=new A.C("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fuT=new A.b0(D.fV8,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h1W=new A.C("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fv9=new A.b0(D.h1W,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYf=new A.C("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fva=new A.b0(D.fYf,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fHZ=new A.G(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwJ=new A.ev("\u2665",null,null,B.cN,null,null,null,null,null,null,D.fHZ)
D.fF8=new A.G(!0,B.aS,null,null,null,null,28,B.O,B.cL,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwZ=new A.ev("Today: how well do you know the family?",null,null,B.cN,null,null,null,null,null,null,D.fF8)
D.fxf=new A.G(!0,B.qf,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyr=new A.G(!0,D.kQ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyO=new A.G(!0,D.kQ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyS=new A.G(!0,B.cV,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz0=new A.G(!0,D.fC,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzb=new A.G(!0,D.fC,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzv=new A.t5(!0,B.tN,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzL=new A.G(!0,B.cV,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzO=new A.G(!0,D.kQ,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzP=new A.G(!0,B.cV,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzU=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzX=new A.G(!0,B.cV,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAs=new A.G(!0,B.b2,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAt=new A.G(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAv=new A.G(!0,B.aS,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAW=new A.G(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWP=new A.G(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWQ=new A.G(!0,D.lG,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBl=new A.G(!0,B.cV,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ac2=new A.t5(!0,B.UI,null,null,null,null,B.dE,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.W6=new A.G(!0,B.cV,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBv=new A.G(!0,B.a_,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBA=new A.G(!0,D.fC,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBZ=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD9=new A.G(!0,D.fC,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aX_=new A.G(!0,D.fC,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDt=new A.G(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDF=new A.G(!0,D.fC,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDH=new A.G(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDN=new A.G(!0,B.j6,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aX3=new A.G(!0,D.fC,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEJ=new A.G(!0,D.fC,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF1=new A.G(!0,D.fC,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF3=new A.G(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF5=new A.G(!0,B.cV,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFt=new A.G(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,W.J_,null,null,null)
D.aXh=new A.G(!0,D.fC,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFR=new A.G(!0,B.a_,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGc=new A.G(!0,B.fj,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGA=new A.G(!0,B.bQ,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGF=new A.G(!0,B.bD,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGR=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGU=new A.G(!0,D.fC,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH1=new A.G(!0,D.GA,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHd=new A.G(!0,B.b2,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHC=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHJ=new A.G(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,G.DS,null,null,null)
D.fI9=new A.G(!0,B.cV,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIh=new A.G(!0,B.cW,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIu=new A.G(!0,D.lH,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXE=new A.G(!0,D.fC,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Lg=new A.G(!0,B.cV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXG=new A.G(!0,B.cV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,G.DS,null,null,null)
D.fIP=new A.G(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIT=new A.G(!0,F.nq,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJg=new A.G(!0,B.b2,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJy=new A.G(!0,D.fC,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJW=new A.G(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKk=new A.G(!0,D.fC,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKQ=new A.G(!0,D.fC,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKV=new A.G(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL4=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acx=new A.G(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acA=new A.G(!0,D.lG,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMO=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN7=new A.G(!0,B.aS,null,null,null,null,27,B.O,B.cL,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNe=new A.G(!0,B.j6,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNm=new A.G(!0,B.j6,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNQ=new A.C("Time:",null,B.ht,null,null,null,null,null,null,null,null,null)
D.fOb=new A.C("\ud83c\udfae",null,H.aco,null,null,null,null,null,null,null,null,null)
D.fOc=new A.C("Themes",null,B.pX,null,null,null,null,null,null,null,null,null)
D.fOI=new A.C("\ud83c\udfb2",null,B.xK,null,null,null,null,null,null,null,null,null)
D.fOM=new A.C("Delete this game?",null,B.iH,null,null,null,null,null,null,null,null,null)
D.fOT=new A.C("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fDn=new A.G(!0,B.a_,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPj=new A.C("Debt receipt",null,D.fDn,null,B.K,null,null,null,null,null,null,null)
D.aXV=new A.G(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPC=new A.C("Person who owes",null,D.aXV,null,null,null,null,null,null,null,null,null)
D.fQA=new A.C("Notes",null,B.acc,null,null,null,null,null,null,null,null,null)
D.fR0=new A.C("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fCg=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR2=new A.C("Share",null,D.fCg,null,null,null,null,null,null,null,null,null)
D.fS3=new A.C("Move your family trees",null,G.acu,null,null,null,null,null,null,null,null,null)
D.fSI=new A.C("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fTl=new A.C("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fTJ=new A.C("SAVE",null,D.Lg,null,null,null,null,null,null,null,null,null)
D.fUl=new A.C("The round button is the right answer.",null,B.B7,null,null,null,null,null,null,null,null,null)
D.fUG=new A.C("Remove this book?",null,B.h7,null,null,null,null,null,null,null,null,null)
D.fJd=new A.G(!0,B.cV,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,G.DS,null,null,null)
D.fVd=new A.C("Fireside Stories",null,D.fJd,null,null,null,null,null,null,null,null,null)
D.aYo=new A.C("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fVU=new A.C("What should the AI do?",null,B.dl,null,null,null,null,null,null,null,null,null)
D.fBU=new A.G(!0,D.lG,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW8=new A.C("REPORT CARD",null,D.fBU,null,null,null,null,null,null,null,null,null)
D.fWV=new A.C("Calabash Catch",null,B.Wt,null,null,null,null,null,null,null,null,null)
D.fXm=new A.C("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fXN=new A.C("\ud83c\udfe1",null,B.Fc,null,null,null,null,null,null,null,null,null)
D.fYu=new A.C("Ribbon bookmark",null,B.jC,null,null,null,null,null,null,null,null,null)
D.fKP=new A.G(!0,B.b2,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYZ=new A.C("NGMY.ORG",null,D.fKP,null,B.K,null,null,null,null,null,null,null)
D.h_h=new A.C("Scan family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.fGV=new A.G(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h04=new A.C("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fGV,null,B.K,null,null,null,null,null,null,null)
D.h1i=new A.C("Delete",null,B.W0,null,null,null,null,null,null,null,null,null)
D.h1j=new A.C("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.h1r=new A.C("Thumbnail",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h20=new A.C("Save the cover",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h25=new A.C("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.Bb,null,B.K,null,null,null,null,null,null,null)
D.h2t=new A.C("Your photos",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h2J=new A.C("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h35=new A.C("\u2b50 stars",null,B.We,null,null,null,null,null,null,null,null,null)
D.h3j=new A.C("Design your cover",null,B.u_,null,null,null,null,null,null,null,null,null)
D.h3p=new A.C("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.h3s=new A.C("PICTURE",null,I.vU,null,null,null,null,null,null,null,null,null)
D.h3u=new A.C("\ud83c\udfaf",null,D.Ws,null,null,null,null,null,null,null,null,null)
D.h3R=new A.C("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h3T=new A.C("You can undo it right after.",null,B.B7,null,null,null,null,null,null,null,null,null)
D.h4r=new A.C("Print",null,B.vS,null,null,null,null,null,null,null,null,null)
D.h4R=new A.C("Amount owed",null,D.aXV,null,null,null,null,null,null,null,null,null)
D.h55=new A.C("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h5H=new A.C("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.h5K=new A.C("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h69=new A.C("Debtor signature",null,B.acc,null,null,null,null,null,null,null,null,null)
D.h6j=new A.C("Change icon",null,B.acb,null,null,null,null,null,null,null,null,null)
D.h77=new A.C("MADE BY THE SYSTEM, FROM YOUR TREE",null,B.u2,null,null,null,null,null,null,null,null,null)
D.h7z=new A.C("Family tree QR",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h7F=new A.C("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Wr,null,null,null,null,null,null,null,null,null)
D.h82=new A.C("Download",null,B.vS,null,null,null,null,null,null,null,null,null)
D.h83=new A.C("The person who planted this tree has not made a game yet.",null,B.B9,null,null,null,null,null,null,null,null,null)
D.h87=new A.C("Change",null,B.pX,null,null,null,null,null,null,null,null,null)
D.h8Y=new A.C("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.h90=new A.C("WHAT SHOULD IT CHANGE?",null,I.vU,null,null,null,null,null,null,null,null,null)
D.h9y=new A.C("COLOUR",null,I.vU,null,null,null,null,null,null,null,null,null)
D.h9N=new A.C("Do it",null,B.cG,null,null,null,null,null,null,null,null,null)
D.h9Q=new A.C("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.ha_=new A.C("Give me another clue",null,D.Lg,null,null,null,null,null,null,null,null,null)
D.haU=new A.C("Create Family Tree",null,B.fb,null,null,null,null,null,null,null,null,null)
D.hb3=new A.C("THE TEACHER EXPLAINS THESE",null,B.u2,null,null,null,null,null,null,null,null,null)
D.fxe=new A.G(!0,B.kw,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hb9=new A.C("Write the first page myself",null,D.fxe,null,null,null,null,null,null,null,null,null)
D.hbH=new A.C("Use this header",null,B.cG,null,null,null,null,null,null,null,null,null)
D.hbO=new A.C("Create Project",null,B.aXA,null,null,null,null,null,null,null,null,null)
D.hDm=new C.acV(1,"header")
D.adC=new C.acV(2,"projects")
D.hDn=new C.acV(3,"cashier")
D.adD=new C.acV(4,"familyTree")
D.hQR=new C.cHB(0,"start")
D.hQS=new C.cHC(0,"start")
D.hDA=new C.ZZ(null)
D.hEB=new C.a_s(null)
D.dJd=new A.bq(B.i2,[],A.aC("bq<q,GF>"))
D.dqq=w([],x.dE)
D.dqr=w([],x.M)
D.hFf=new C.bhw(D.dJd,D.dqq,D.dqr,0,0,null,null)
D.b1U=new C.a0i(0,"intro")
D.b1V=new C.a0i(1,"countdown")
D.adQ=new C.a0i(2,"ask")
D.Xn=new C.a0i(3,"reveal")
D.b1W=new C.a0i(4,"end")
D.hI0=new C.td(E.GJ,D.lH,B.cV,E.m8,5,!1,!1,!1,0,null)
D.hI1=new C.td(E.GJ,B.er,B.cV,B.bO,2,!0,!0,!1,2,B.cV)
D.hI2=new C.td(B.qs,B.cW,B.cV,E.m8,2,!0,!1,!1,2,B.at)
D.hI3=new C.td(E.GJ,B.dX,B.cV,E.m8,5,!1,!1,!1,1,null)
D.hI4=new C.td(E.a_U,D.ak1,B.cV,E.m8,4,!0,!1,!0,0,null)
D.b1Z=new C.td(E.a_U,B.dN,B.cV,E.m8,3,!0,!1,!0,2,null)
D.b2_=new C.td(E.rX,D.lH,B.c,E.m8,0,!1,!1,!0,0,null)
D.b20=new C.td(B.qs,B.aD,B.cV,B.bO,2,!0,!0,!1,2,B.dN)
D.b21=new C.td(B.qs,F.nq,B.ic,E.m8,5,!1,!1,!0,3,null)
D.hI5=new C.td(B.qs,B.dN,B.cV,E.m8,0,!0,!1,!1,0,B.aD)
D.b22=new C.td(E.GJ,B.er,B.cV,B.bO,1,!1,!0,!1,1,null)
D.b23=new C.td(E.Gh,B.at,B.aD,E.m8,4,!0,!1,!0,2,null)
D.hI6=new C.td(E.rX,B.at,B.er,E.m8,3,!0,!1,!1,0,null)
D.hI7=new C.td(B.qs,B.dX,B.cV,B.bO,1,!1,!0,!1,1,null)
D.hI8=new C.td(E.Gh,D.aj3,B.c,E.m8,5,!1,!1,!0,0,null)
D.hIM=new C.a0Q(null)
D.hR_=new C.agj(0,"still")
D.XK=new C.agj(1,"walk")
D.b2u=new C.agj(2,"pound")
D.b2v=new C.agj(3,"drum")
D.hMr=new C.a26(0,"greet")
D.b2w=new C.a26(1,"teach")
D.ae9=new C.a26(2,"ask")
D.hMs=new C.a26(3,"feedback")
D.b2x=new C.a26(4,"end")
D.XQ=new C.a2p(0,"intro")
D.XR=new C.a2p(1,"asking")
D.Br=new C.a2p(2,"reacting")
D.ael=new C.a2p(3,"driving")
D.aem=new C.a2p(4,"arrived")
D.aeu=new C.aMe(0,"projects")
D.b2X=new C.aMe(1,"cashier")
D.hOx=new C.aMe(2,"familyTree")})()};
(a=>{a["EcLKuqqPdt5KjVjNhwGcdm8N5xs="]=a.current})($__dart_deferred_initializers__);