((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,T,U,H,M,I,V,E,K,C={
bHi(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bHi=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.w1(null,""),$async$bHi)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.X(y.z)
t=A.nq(b1)
s=A.c1(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.ds(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cV(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.X.av(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.ro(t,a1,B.ic,"book",B.Hn),$async$bHi)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=A.RQ(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.X(l!=null&&A.Mc(l)?y.k:y.y)
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cG
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=A.a4e(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHi,v)},
aiH(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aiH=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.w1(null,""),$async$aiH)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.X(y.z)
t=A.nq(b6)
s=x.S
r=A.cT(c1,0,A.dx(4,"count",s),A.T(c1).c)
q=A.a4_(new A.N(r,new C.fTT(),r.$ti.k("N<ak.E,p>")).aM(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fTS(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.av(b7,null)+"\nAllowed values: style one of "+B.d.aM(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aiH)
case 6:l=c5
k=A.RQ(l==null?"":l)
if(k==null)throw A.X("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.aqs(s,D.dKW,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.X("There is no page to change.")
h=A.S(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.ds(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.X.av(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aiH)
case 10:l=c5
k=l==null?null:A.RQ(l)
if(k==null)throw A.X(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.v(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.v(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.cY(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kR(a5,a2.k("kR<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
b0=J.a6(a9)
b1=A.aI(b0.h(a9,"index"))
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
case 9:if(h.a!==0){s=h.$ti.k("b8<2>")
p=A.cD(new A.b8(h,s),new C.fTU(),s.k("M.E"),p)
p=A.a4_(A.pP(p,3,A.a4(p).k("M.E")).aM(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cs<1>")
b4=A.B(new A.cs(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(A.a4e(s,b9),$async$aiH)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aqs(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aiH,v)},
hMD(d,e,f){return A.cg(null,B.v.j(0.65),!1,null,new C.h35(e,f),d,null,!0,!0,x.g2)},
aqs:function aqs(d,e,f){this.a=d
this.b=e
this.c=f},
fTT:function fTT(){},
fTS:function fTS(d){this.a=d},
fTU:function fTU(){},
h35:function h35(d,e){this.a=d
this.b=e},
bEZ(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bEZ=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aS(b1,new C.fGU())){u=null
w=1
break}t=B.d.cw(b1,new C.fGV())
s=$.R()
r=new A.po(new A.oU())
q=A.wb(r,D.aTV)
p=A.L()
p.r=B.c.gp(0)
q.aE(D.aTV,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.ab
o.d=B.bG
o.e=B.dO
n=new C.fH_(t)
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
s=$.R()
p=A.a([],x.v)
a3=new A.aG(s.r,B.aj,null,null,p)
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
a3=new A.aG(s.r,B.aj,null,null,p)
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
return A.b(r.nw().vJ(520,160),$async$bEZ)
case 4:w=3
return A.b(b3.hk(B.hn),$async$bEZ)
case 3:b0=b3
u=b0==null?null:J.eQ(B.dK.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEZ,v)},
fRy(d){return C.irn(d)},
irn(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fRy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bkY()
n=d.x!=null&&d.zV(null).length===0
if(d.x!=null)t=n?D.B0:D.Kr
else t=d.gV3()?D.Kr:D.aOL
w=3
return A.b(C.bEZ(d.ax),$async$fRy)
case 3:s=f
p.a=null
if(s!=null)p.a=A.ap4(s)
r=A.a5Y(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aOL}else{p.c=C.xu(q,!0)
p.b=n?D.B0:D.Kr}r.a4N(A.hdQ(new C.fRA(p,d,new C.fRB(),t,n,o),null,D.bJV,B.xL))
u=r.jG(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fRy,v)},
fYu(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fYu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fRy(d),$async$fYu)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.az(q,0,40)
u=A.HH(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fYu,v)},
fGU:function fGU(){},
fGV:function fGV(){},
fH_:function fH_(d){this.a=d},
fRB:function fRB(){},
fRA:function fRA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fRz:function fRz(){},
h3y(d,e){var w=0,v=A.j(x.H)
var $async$h3y=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,B.v.j(0.55),!0,null,new C.h3C(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$h3y)
case 2:return A.h(null,v)}})
return A.i($async$h3y,v)},
bHL(d,e,f,g){return C.iz8(d,e,f,g)},
iz8(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bHL=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cE.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.U(D.fxB)
w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.h3u(g,r,f),d,null,!0,!0,x.H),$async$bHL)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bHL,v)},
h3D(d,e){var w=0,v=A.j(x.H)
var $async$h3D=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cg(null,null,!0,null,new C.h3G(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$h3D)
case 2:return A.h(null,v)}})
return A.i($async$h3D,v)},
b0U:function b0U(d,e){this.c=d
this.a=e},
c9K:function c9K(){},
bec:function bec(d,e){this.b=d
this.a=e},
h3C:function h3C(d,e){this.a=d
this.b=e},
h3z:function h3z(d){this.a=d},
h3A:function h3A(d,e,f){this.a=d
this.b=e
this.c=f},
h3B:function h3B(d,e){this.a=d
this.b=e},
h3u:function h3u(d,e,f){this.a=d
this.b=e
this.c=f},
h3s:function h3s(d){this.a=d},
h3t:function h3t(d,e,f){this.a=d
this.b=e
this.c=f},
h3G:function h3G(d,e){this.a=d
this.b=e},
h3E:function h3E(d){this.a=d},
h3F:function h3F(d,e,f){this.a=d
this.b=e
this.c=f},
fLO(d,e){var w=0,v=A.j(x.y),u,t
var $async$fLO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3K(d),$async$fLO)
case 3:t=g
J.n1(t,new C.fLP(e))
u=A.ajl(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fLO,v)},
fLP:function fLP(d){this.a=d},
aqF:function aqF(d,e,f){this.c=d
this.d=e
this.a=f},
aFu:function aFu(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dSX:function dSX(d,e){this.a=d
this.b=e},
dSI:function dSI(d,e){this.a=d
this.b=e},
dSL:function dSL(d,e,f){this.a=d
this.b=e
this.c=f},
dSK:function dSK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSJ:function dSJ(d,e){this.a=d
this.b=e},
dSM:function dSM(d,e){this.a=d
this.b=e},
dSG:function dSG(){},
dSH:function dSH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dSF:function dSF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dSq:function dSq(d){this.a=d},
dSr:function dSr(d,e,f){this.a=d
this.b=e
this.c=f},
dSs:function dSs(d,e){this.a=d
this.b=e},
dSp:function dSp(d){this.a=d},
dSx:function dSx(d,e){this.a=d
this.b=e},
dSo:function dSo(d){this.a=d},
dSy:function dSy(d,e,f){this.a=d
this.b=e
this.c=f},
dSz:function dSz(d,e,f){this.a=d
this.b=e
this.c=f},
dSn:function dSn(d,e){this.a=d
this.b=e},
dSA:function dSA(d,e,f){this.a=d
this.b=e
this.c=f},
dSm:function dSm(d,e){this.a=d
this.b=e},
dSB:function dSB(d,e){this.a=d
this.b=e},
dSl:function dSl(d){this.a=d},
dSC:function dSC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSj:function dSj(){},
dSd:function dSd(d){this.a=d},
dSe:function dSe(d){this.a=d},
dSk:function dSk(d,e){this.a=d
this.b=e},
dSD:function dSD(d,e){this.a=d
this.b=e},
dSi:function dSi(d){this.a=d},
dSE:function dSE(d){this.a=d},
dSh:function dSh(){},
dSt:function dSt(d,e){this.a=d
this.b=e},
dSg:function dSg(d){this.a=d},
dSu:function dSu(d,e,f){this.a=d
this.b=e
this.c=f},
dSf:function dSf(d,e){this.a=d
this.b=e},
dSc:function dSc(d,e){this.a=d
this.b=e},
dSv:function dSv(d){this.a=d},
dSw:function dSw(d,e,f){this.a=d
this.b=e
this.c=f},
dT_:function dT_(){},
dT0:function dT0(d,e){this.a=d
this.b=e},
dSY:function dSY(d){this.a=d},
dSZ:function dSZ(d){this.a=d},
dSU:function dSU(d,e){this.a=d
this.b=e},
dSV:function dSV(d){this.a=d},
dSN:function dSN(d,e,f){this.a=d
this.b=e
this.c=f},
dSO:function dSO(d,e,f){this.a=d
this.b=e
this.c=f},
dSP:function dSP(d,e,f){this.a=d
this.b=e
this.c=f},
dSQ:function dSQ(d,e,f){this.a=d
this.b=e
this.c=f},
dSR:function dSR(d,e,f){this.a=d
this.b=e
this.c=f},
dSS:function dSS(d,e,f){this.a=d
this.b=e
this.c=f},
dST:function dST(d,e,f){this.a=d
this.b=e
this.c=f},
dT1:function dT1(){},
dT2:function dT2(){},
dT3:function dT3(){},
dT4:function dT4(d){this.a=d},
dSW:function dSW(d,e){this.a=d
this.b=e},
hI8(d){return B.d.dA(D.a6a,new C.fMA(d),new C.fMB())},
uX:function uX(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fMA:function fMA(d){this.a=d},
fMB:function fMB(){},
amG:function amG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aXC:function aXC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Un:function Un(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhP:function bhP(){this.d=$
this.c=this.a=null},
dix:function dix(d,e){this.a=d
this.b=e},
div:function div(d,e){this.a=d
this.b=e},
diw:function diw(){},
diy:function diy(d,e){this.a=d
this.b=e},
hs4(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bh(J.k(u==null?"":u))
return new C.nx(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LY(d,e){return C.iq3(d,e)},
iq3(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LY=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$LY)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.X.aP(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.cY(p,x.f)
o=A.cD(o,new C.fP7(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.B(new A.Y(o,new C.fP8(),n),n.k("M.E"))
B.d.b_(o,new C.fP9())
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
return A.i($async$LY,v)},
BF(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BF=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$BF)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.ba(f,new C.h29(),x.a)
r=A.B(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aF("String","ngmy_family_book_v1_"+s+"_"+e,B.X.av(r,null)),$async$BF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BF,v)},
aTK(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aTK=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LY(d,e),$async$aTK)
case 2:u=h
t=J.cG(u)
s=t.bk(u,new C.haP(f))
if(s===-1)t.ca(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BF(d,e,u),$async$aTK)
case 3:return A.h(null,v)}})
return A.i($async$aTK,v)},
bFu(d,e,f){var w=0,v=A.j(x.H),u
var $async$bFu=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LY(d,e),$async$bFu)
case 2:u=h
J.n1(u,new C.fLG(f))
w=3
return A.b(C.BF(d,e,u),$async$bFu)
case 3:return A.h(null,v)}})
return A.i($async$bFu,v)},
bFK(d,e){return C.iq2(d,e)},
iq2(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bFK=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bFK)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Py
w=1
break}p=B.X.aP(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aI(o.h(0,"emblem"))
k=k==null?null:B.i.M(k)
if(k==null)k=0
if(D.Ev.am(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aI(o.h(0,"titleSize"))
if(i==null)i=null
i=B.i.D(i==null?25:i,18,36)
h=B.d.q(D.a7T,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.q(D.a7c,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.q(D.a78,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.dbh,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.IE(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Py
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Py
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bFK,v)},
T_(d,e,f){return C.iyE(d,e,f)},
iyE(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$T_=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$T_)
case 7:r=h
w=8
return A.b(r.aF("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.X.av(f.ak(),null)),$async$T_)
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
return A.i($async$T_,v)},
Sq(d,e){return C.iq4(d,e)},
iq4(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sq=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Sq)
case 7:r=g
q=r.qI("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LY(d,e),$async$Sq)
case 8:if(!j.cK(g)){n=B.a.i(d.toLowerCase())
m=J.lr(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aF("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Sq)
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
return A.i($async$Sq,v)},
ai0(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ai0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sq(d,e),$async$ai0)
case 3:s=g
r=J.a6(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.az(),$async$ai0)
case 5:w=4
return A.b(g.aF("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ai0)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ai0,v)},
a4q(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a4q=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sq(d,e),$async$a4q)
case 2:s=h
J.fP(s,f)
w=3
return A.b(A.az(),$async$a4q)
case 3:u=h
w=4
return A.b(u.aF("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a4q)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4q)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4q)
case 6:return A.h(null,v)}})
return A.i($async$a4q,v)},
nx:function nx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fP7:function fP7(){},
fP8:function fP8(){},
fP9:function fP9(){},
h29:function h29(){},
haP:function haP(d){this.a=d},
fLG:function fLG(d){this.a=d},
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
bT7:function bT7(d){this.a=d},
iyY(d,e,f,g,h,i,j){return A.a8(d,!1).cb(A.e9(new C.h2K(j,i,f,e,h,g),!0,null,x.H))},
Sm(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Sm=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sq(h,g),$async$Sm)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.U(D.aWi)
u=!1
w=1
break}w=4
return A.b(C.hMD(d,f,e),$async$Sm)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ai0(h,g),$async$Sm)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nx(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.BF(h,r,p),$async$Sm)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.T_(h,r,new C.IE("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Sm)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Sm,v)},
h2K:function h2K(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a02:function a02(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCs:function aCs(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
djc:function djc(d){this.a=d},
djb:function djb(d,e){this.a=d
this.b=e},
dj0:function dj0(d,e){this.a=d
this.b=e},
diY:function diY(d,e){this.a=d
this.b=e},
diz:function diz(d){this.a=d},
diA:function diA(d,e){this.a=d
this.b=e},
dj1:function dj1(d){this.a=d},
diI:function diI(d){this.a=d},
diG:function diG(d){this.a=d},
diH:function diH(d){this.a=d},
diJ:function diJ(d){this.a=d},
diZ:function diZ(d){this.a=d},
dj_:function dj_(){},
diE:function diE(d){this.a=d},
diF:function diF(d,e){this.a=d
this.b=e},
diK:function diK(d){this.a=d},
diL:function diL(d,e){this.a=d
this.b=e},
dja:function dja(d){this.a=d},
dj9:function dj9(d,e){this.a=d
this.b=e},
dj8:function dj8(d){this.a=d},
diV:function diV(d){this.a=d},
diU:function diU(d){this.a=d},
diW:function diW(d){this.a=d},
diB:function diB(d,e){this.a=d
this.b=e},
diX:function diX(d,e){this.a=d
this.b=e},
diO:function diO(d){this.a=d},
diP:function diP(d){this.a=d},
diN:function diN(){},
diQ:function diQ(d){this.a=d},
diR:function diR(d){this.a=d},
diS:function diS(d,e){this.a=d
this.b=e},
diT:function diT(d,e,f){this.a=d
this.b=e
this.c=f},
diM:function diM(d,e){this.a=d
this.b=e},
dj3:function dj3(d){this.a=d},
dj2:function dj2(){},
dj4:function dj4(d){this.a=d},
dj5:function dj5(d){this.a=d},
dj6:function dj6(d){this.a=d},
dj7:function dj7(d,e){this.a=d
this.b=e},
diC:function diC(d){this.a=d},
diD:function diD(d){this.a=d},
a06:function a06(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bid:function bid(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dkZ:function dkZ(d){this.a=d},
dl_:function dl_(d){this.a=d},
dkY:function dkY(d){this.a=d},
dl0:function dl0(d){this.a=d},
dkX:function dkX(d){this.a=d},
dl1:function dl1(d){this.a=d},
dkW:function dkW(d){this.a=d},
dl2:function dl2(d,e){this.a=d
this.b=e},
dkV:function dkV(d,e){this.a=d
this.b=e},
dl3:function dl3(d,e){this.a=d
this.b=e},
a04:function a04(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ags:function ags(d,e,f){this.a=d
this.b=e
this.c=f},
aCv:function aCv(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
djr:function djr(d,e){this.a=d
this.b=e},
djq:function djq(d,e){this.a=d
this.b=e},
djv:function djv(d){this.a=d},
dju:function dju(d,e){this.a=d
this.b=e},
djs:function djs(d){this.a=d},
djt:function djt(d){this.a=d},
djw:function djw(d){this.a=d},
djx:function djx(d){this.a=d},
djp:function djp(d,e){this.a=d
this.b=e},
djo:function djo(d,e){this.a=d
this.b=e},
L0:function L0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_i:function a_i(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cRk:function cRk(d){this.a=d},
cRl:function cRl(){},
cRm:function cRm(d){this.a=d},
bfp:function bfp(d,e,f){this.b=d
this.c=e
this.a=f},
bfg:function bfg(d,e){this.b=d
this.a=e},
uY:function uY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_D:function a_D(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfn:function bfn(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
daj:function daj(d,e,f){this.a=d
this.b=e
this.c=f},
dai:function dai(d,e){this.a=d
this.b=e},
daI:function daI(d){this.a=d},
dav:function dav(){},
daJ:function daJ(d){this.a=d},
dau:function dau(){},
daK:function daK(d,e){this.a=d
this.b=e},
dat:function dat(d,e){this.a=d
this.b=e},
daL:function daL(d,e){this.a=d
this.b=e},
das:function das(d,e){this.a=d
this.b=e},
daM:function daM(d){this.a=d},
dar:function dar(){},
daN:function daN(d,e){this.a=d
this.b=e},
daq:function daq(d,e){this.a=d
this.b=e},
daO:function daO(d){this.a=d},
daD:function daD(d,e){this.a=d
this.b=e},
daP:function daP(d){this.a=d},
daQ:function daQ(d){this.a=d},
daS:function daS(d){this.a=d},
daT:function daT(d){this.a=d},
daC:function daC(d,e){this.a=d
this.b=e},
daU:function daU(d,e){this.a=d
this.b=e},
aJD:function aJD(d){this.a=d},
bkM:function bkM(d){this.a=d},
bdx:function bdx(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
amH:function amH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a2k:function a2k(d,e){this.a=d
this.b=e},
amI:function amI(d,e,f,g,h,i){var _=this
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
_.bu$=h
_.a9$=i
_.c=_.a=null},
bTh:function bTh(d){this.a=d},
bTb:function bTb(d){this.a=d},
bTa:function bTa(d,e){this.a=d
this.b=e},
bTk:function bTk(d){this.a=d},
bTc:function bTc(d){this.a=d},
bTd:function bTd(d){this.a=d},
bTg:function bTg(d){this.a=d},
bTf:function bTf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTi:function bTi(d,e){this.a=d
this.b=e},
bTj:function bTj(){},
bTe:function bTe(d){this.a=d},
bT8:function bT8(d,e){this.a=d
this.b=e},
bT9:function bT9(d){this.a=d},
bqn:function bqn(d,e){this.b=d
this.a=e},
aCt:function aCt(){},
iH(d,e){var w
$.R()
w=A.L()
w.b=B.ab
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dO
return w},
bF0(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.br(j.save())
j.translate(e.a,e.b)
d.nM(0,a0?-f:f,f)
w=A.bY(B.hA,8,36)
v=B.v.j(0.3)
u=$.R()
t=A.L()
t.r=v.gp(0)
d.c1(w,t)
w=a1===D.Ye
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.v,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eyU,new A.r(-4+v,-2),C.iH(q,5))
d.ah(D.ewx,new A.r(4-v,-2),C.iH(q,5))}else{t=A.bY(B.Ki,14,40)
p=A.L()
p.r=v.gp(0)
d.c1(t,p)}v=u.r
u=x.v
o=new A.aG(v,B.aj,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.ch(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.ch(15,-40,11,t))
o.E(new A.by())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aG(v,B.aj,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.by())
v=A.L()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b3e){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iH(B.Gz,3.4))
d.ah(D.eza,new A.r(9,n),C.iH(q,4))
d.ah(D.ewY,new A.r(10,n),C.iH(q,4))}else if(a1===D.b3f){d.ah(D.ey0,new A.r(-8,-26-Math.max(0,w)*6),C.iH(q,4))
d.ah(D.ev_,new A.r(8,-26-Math.max(0,-w)*6),C.iH(q,4))}else{w=s*3
v=-38-r
d.ah(D.ey4,new A.r(-12-w,v),C.iH(q,4))
d.ah(D.aNL,new A.r(12+w,v),C.iH(q,4))}w=A.L()
w.r=q.gp(0)
d.aE(D.fkp,w)
m=new A.r(0,-77-r)
w=A.bY(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c1(w,v)
w=h.y
if(w!=null){v=A.bY(m.a5(0,B.vV),15,24)
u=A.L()
u.r=w.gp(0)
d.c1(v,u)
u=m.a5(0,D.euU)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bY(m.a5(0,B.u_),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a5(0,D.ez8),m.a5(0,D.exZ),C.iH(v,2.2))
d.ah(m.a5(0,D.ewX),m.a5(0,D.euR),C.iH(v,2.2))}if(w===4){w=m.a5(0,D.ezc)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a5(0,D.ewZ)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a5(0,D.exO)
v=A.L()
v.r=B.ip.gp(0)
d.O(w,0.9,v)
v=m.a5(0,D.exD)
w=A.L()
w.r=B.ip.gp(0)
d.O(v,0.9,w)
if(i){l=m.a5(0,B.aa1)
w=A.bY(l,21,22)
v=A.L()
v.r=D.lP.gp(0)
d.c1(w,v)
v=A.bY(l.a5(0,B.aNI),5,12)
w=A.L()
w.r=D.biD.gp(0)
d.c1(v,w)
d.ah(l.a5(0,D.ez4),l.a5(0,B.aO5),C.iH(B.cW,1.4))
d.ah(D.aNL,new A.r(15,-88-r),C.iH(q,3.6))}j.restore()},
hGN(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.br(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bY(B.dQ,18,96)
u=B.v.j(0.28)
$.R()
t=A.L()
t.r=u.gp(0)
d.c1(v,t)
t=A.bY(B.dQ,11,70)
v=B.v.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c1(t,u)
d.lB(D.aTZ,A.L())
C.ieA(d,g,h,i,j)
s=(k==null?D.aa6:k).a-w>=0?1:-1
w=A.L()
w.a=B.ME
w.san(A.jD(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.ak5.j(0.5),D.ak5.j(0.12),D.bqi.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aE(D.aTZ,w)
r.restore()
r.restore()},
ieA(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.v,0.28)
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
s=A.bu(D.fkq,B.u4)
p=$.R()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bu(D.fkl,B.hS)
s=A.ap(v,B.v,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bu(D.fkz,B.hS)
o=A.ap(v,B.v,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fks,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fjb,s)
s=a1.c
J.br(s.save())
s.translate(a3.w,0)
J.br(s.save())
a1.nM(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aG(p.r,B.aj,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.ch(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.ch(m+3,-62,m-2,-58))
l.E(new A.ch(0,-70,k,-58))
l.E(new A.by())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.br(s.save())
a1.mz(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dik[j]
i=new A.ar(B.T,B.Q,B.V,B.W,B.U)
i.b=B.ab
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dO
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ar(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.R()
f=new A.ar(B.T,B.Q,B.V,B.W,B.U)
f.r=i.gp(0)
a1.O(new A.r(g,h),3.6,f)
f=new A.ar(B.T,B.Q,B.V,B.W,B.U)
f.r=u.gp(0)
a1.O(new A.r(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.T,B.Q,B.V,B.W,B.U)
i.b=B.ab
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dO
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.T,B.Q,B.V,B.W,B.U)
i.b=B.ab
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dO
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.eyx,D.evF,C.iH(a2.c.j(0.9),3))}a1.ah(D.ez5,D.ey6,C.iH(B.v.j(0.18),1.6))
a1.ah(D.euZ,B.aNN,C.iH(B.v.j(0.18),1.6))
u=B.v.j(0.12)
k=$.R()
i=A.L()
i.r=u.gp(0)
a1.aE(D.fj7,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aE(D.fjl,i)
n=new A.aG(k.r,B.aj,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.ch(0,-57,9,-66))
n.E(new A.ch(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fju,0.1,2.941592653589793,!1,C.iH(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.aab
n=25*q
k=23*q
i=9*q
C.hCH(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.EX:o
C.hCH(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.ewp,D.ewl,C.iH(D.al4,4))
a1.ah(D.ewn,D.ewj,C.iH(D.H_.j(0.7),1.4))
u=A.L()
u.r=B.cW.gp(0)
a1.O(D.ewm,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.br(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jq(0,a3.f)
a1.bV(0,r)
C.iev(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hCH(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcJ(),q=r===0?B.hA:s.eW(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a5(0,q.aN(0,n)).a5(0,v.aN(0,m))
t=e.a5(0,q.aN(0,p))
d.ah(e,u,C.iH(j,l))
o=A.ap(j,B.v,0.2)
o.toString
d.ah(e,u,C.iH(o,l*0.35))
d.ah(u,t,C.iH(k,l*0.78))
o=A.ap(k,B.v,0.22)
o.toString
d.ah(u,t,C.iH(o,l*0.22))
$.R()
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.bY(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c1(o,w)
w=-l
w=t.a5(0,new A.r(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
iev(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bY(B.vU,40,38)
$.R()
v=A.L()
v.r=c0.gp(0)
c2.c1(w,v)}if(c1===4){$.R()
w=A.L()
w.r=c0.gp(0)
c2.O(D.eye,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.evf,9.5,w)}w=A.bY(D.ezr,10,6)
v=$.R()
u=A.L()
u.r=c8.gp(0)
c2.c1(w,u)
u=A.bY(D.exL,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c1(u,w)
v=v.r
w=x.v
t=new A.aG(v,B.aj,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.hY(13,-20,17,-9,16,2))
t.E(new A.hY(15,13,8,20,0,20))
t.E(new A.hY(-8,20,-15,13,-16,2))
t.E(new A.hY(-17,-9,-13,-20,0,-20))
t.E(new A.by())
u=A.L()
u.san(A.wm(D.eyW,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iH(c8.j(0.5),0.8)
c2.cQ(D.fkB,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.fje,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eyb,B.aOe,s)
c2.ah(D.evb,D.ev2,s)
c2.cQ(D.fjt,2.2,1.4,!1,s)
c2.cQ(D.fjc,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.T,B.Q,B.V,B.W,B.U)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fjI,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aG(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.ch(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.ch(0,-12,-13,-6))
p.E(new A.by())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.ey2,D.ev3,C.iH(B.nC,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.eyh,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.evg,3,o)
o=new A.aG(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.ch(-12,22,0,26))
o.E(new A.ch(12,22,13,6))
o.E(new A.ch(8,13,0,12))
o.E(new A.ch(-8,13,-13,6))
o.E(new A.by())
p=A.L()
p.r=B.hW.gp(0)
c2.af(o,p)
p=new A.aG(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.ch(0,6,7,8))
p.E(new A.ch(0,10.5,-7,8))
o=A.L()
o.r=B.bO.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aG(v,B.aj,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.ch(-20,-27,0,-29))
p.E(new A.ch(20,-27,17,-4))
p.E(new A.ch(0,-14,-17,-4))
p.E(new A.by())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.v,0.3)
o.toString
c2.cQ(D.fjP,3.4,2.5,!1,C.iH(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fjB,3.6,2.2,!1,C.iH(o,1.2))
o=new A.aG(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.ch(27,-34,25,-19))
o.E(new A.ch(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aG(v,B.aj,b9,b9,A.a([],w))
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
c2.O(D.ev4,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fjM,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.T,B.Q,B.V,B.W,B.U)
o.b=B.ab
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dO
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=E.aEs[l]
o=new A.ar(B.T,B.Q,B.V,B.W,B.U)
o.b=B.ab
o.c=4.5
o.r=c0.gp(0)
o.d=B.bG
o.e=B.dO
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.T,B.Q,B.V,B.W,B.U)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fjL,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(B.aa1,B.aa0,C.iH(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fjf,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bY(D.eze,5,8)
o=D.ahj.j(i)
n=A.L()
n.r=o.gp(0)
c2.c1(p,n)
n=A.bY(D.exW,5,8)
p=D.ahj.j(i)
o=A.L()
o.r=p.gp(0)
c2.c1(n,o)
h=c4.e*2.4
o=new A.aG(v,B.aj,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.ch(h-3.4,6,h-2.6,7.4))
o.E(new A.ch(h,8.8,h+2.6,7.4))
c2.af(o,C.iH(c8.j(0.75),1.1))
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
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=B.ho[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bY(new A.r(a5,-3),a3,7)
a6=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a6.r=B.c.j(0.96).gp(0)
c2.c1(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.br(d.save())
a6=A.a([],w)
a4=new A.aG(v,B.aj,b9,b9,a6)
a6.push(new A.jx(A.bY(new A.r(a5,-3),a3,7)))
a4.ac()
a3=a4.e
if(a3==null)a3=a4.e=new A.En(a4.gle().a.snapshot())
d.clipPath(a3.a,$.mD(),!0)
a3=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a3.r=D.bmy.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a3.r=B.v.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a_r:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a9.b=B.ab
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bG
a9.e=B.dO
a3=p?0.8:0
c2.cQ(A.bY(new A.r(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dR
else{b1=A.ap(c0,B.v,0.2)
b1.toString}b2=new A.ar(B.T,B.Q,B.V,B.W,B.U)
b2.b=B.ab
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bG
b2.e=B.dO
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.bx3
else{u=A.ap(c8,D.bqk,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.i.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aG(v,B.aj,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.ch(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.ch(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.by())
v=A.L()
v.r=D.bpC.gp(0)
c2.af(b8,v)
J.br(d.save())
c2.mz(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aE(new A.a2(w,11,w+b6*2,13.2),u)
u=A.bY(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bx8.gp(0)
c2.c1(u,w)
d.restore()
c2.af(b8,C.iH(b4,1.1))}else{u=new A.aG(v,B.aj,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.ch(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iH(b4,1.5))
if(b5>0.6){w=new A.aG(v,B.aj,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.ch(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.ch(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fjs,-1.2,2.2,!1,C.iH(c8.j(0.5),0.8))
c2.cQ(D.fjh,2.141592653589793,2.2,!1,C.iH(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.exE,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.exB,1.7,w)}},
ik0(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.R(),f=new A.po(new A.oU()),e=A.wb(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jD(B.J,new A.r(0,a0*0.46),D.df1,D.d68,B.x,h))
e.aE(new A.a2(0,0,0+d,0+a0),a2)
a2=e.c
J.br(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e_()
w.cU(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.T,B.Q,B.V,B.W,B.U)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.br(a2.save())
a2.translate(200,120)
e.jq(0,-0.5)
d=A.L()
a0=x.O
d.san(A.wm(B.J,230,A.a([D.blc,B.L],a0),h,B.x,h,h,0))
e.c1(D.fjX,d)
a2.restore()
d=A.L()
d.san(A.wm(D.aa9,58,A.a([D.boD,B.L],a0),h,B.x,h,h,0))
e.O(D.aa9,58,d)
d=A.L()
d.r=D.bjV.gp(0)
e.O(D.aa9,24,d)
d=A.L()
d.r=D.a_T.gp(0)
e.O(D.evZ,5,d)
d=A.L()
d.r=D.a_T.gp(0)
e.O(D.ew2,3.4,d)
d=A.L()
d.r=D.a_T.gp(0)
e.O(D.ew1,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aG(g.r,B.aj,h,h,u)
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
g=new A.by()
u.push(g)
u=r.f
if(u!=null)g.aj(u)
r.ac()
g=[D.bir,D.bkt,D.bqE][s]
u=$.R()
t=new A.ar(B.T,B.Q,B.V,B.W,B.U)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cAu[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.T,B.Q,B.V,B.W,B.U)
u.b=B.ab
u.c=2.4
u.r=D.a0g.gp(0)
u.d=B.bG
u.e=B.dO
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bY(new A.r(g,k-27),11,46)
u=new A.ar(B.T,B.Q,B.V,B.W,B.U)
u.r=D.a0g.gp(0)
e.c1(g,u)
d=A.bY(new A.r(o-12,d),8,24)
u=new A.ar(B.T,B.Q,B.V,B.W,B.U)
u.r=D.a0g.gp(0)
e.c1(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.T,B.Q,B.V,B.W,B.U)
u.r=D.bjY.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jD(D.euy,D.euB,D.d8a,B.xz,B.x,h))
e.aE(new A.a2(-200,412,650,1300),g)
j=new A.e_()
j.cU(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bY(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h5()?B.c:B.v
d=new A.ar(B.T,B.Q,B.V,B.W,B.U)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c1(u,d)}J.br(a2.save())
a2.translate(225,590)
e.nM(0,1,0.34)
g=A.L()
g.san(A.wm(B.J,250,A.a([D.brE,D.bkO,D.btB],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.ajM,D.bjs,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.R()
a0=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a0.b=B.ab
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dO
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.icL(e)
for(l=0;l<3;++l)C.ifZ(e,D.aCe[l])
C.ifO(e,D.evT)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.R()
a0=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a0.b=B.ab
a0.c=2.4
a0.r=D.a0b.gp(0)
a0.d=B.bG
a0.e=B.dO
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.ev0,D.evj,C.iH(D.bkb,1.6))
a2.restore()
return f.nw()},
icL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.R().r,g=x.v,f=new A.aG(h,B.aj,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.hY(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.hY(416,382,432,422,428,462))
f.E(new A.by())
w=A.L()
w.san(A.jD(new A.r(354,0),new A.r(430,0),D.dDw,B.my,B.x,i))
d.af(f,w)
v=new A.e_()
v.cU(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.v.j(0.18)
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.b=B.ab
p.c=1.1
p.r=q.gp(0)
p.d=B.bG
p.e=B.dO
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.djL[o]
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
k.ac()
r=new A.ch(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.aj(p)
k.ac()
r=new A.ar(B.T,B.Q,B.V,B.W,B.U)
r.b=B.ab
r.c=8
r.r=D.ai5.gp(0)
r.d=B.bG
r.e=B.dO
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.T,B.Q,B.V,B.W,B.U)
l.r=A.ap(D.bk3,D.bqC,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.T,B.Q,B.V,B.W,B.U)
r.b=B.ab
r.c=1.2
r.r=D.a0b.gp(0)
r.d=B.bG
r.e=B.dO
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bY(new A.r(w,q+28),13,7)
w=new A.ar(B.T,B.Q,B.V,B.W,B.U)
w.r=D.bs0.gp(0)
d.c1(q,w)}},
ifZ(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bY(new A.r(a5,a6+2),a9,a7*2.8),b1=B.v.j(0.3),b2=$.R(),b3=A.L()
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
w.E(new A.ch(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.by())
u=A.L()
u.san(A.jD(new A.r(b0,0),new A.r(v,0),D.djR,B.my,B.x,a4))
b4.af(w,u)
t=new A.e_()
t.cU(B.o.T(a5*7))
v=b4.c
J.br(v.save())
b4.mz(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.v.j(0.14)
n=new A.ar(B.T,B.Q,B.V,B.W,B.U)
n.b=B.ab
n.c=1
n.r=o.gp(0)
n.d=B.bG
n.e=B.dO
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ajI.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aE(new A.a2(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.i.be(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aG(b2,B.aj,a4,a4,j)
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
h=new A.by()
j.push(h)
j=i.f
if(j!=null)h.aj(j)
i.ac()
j=new A.ar(B.T,B.Q,B.V,B.W,B.U)
j.r=D.lP.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aG(b2,B.aj,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.i.be(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.aj(n)
f.ac()}b4.af(f,C.iH(D.ajI.j(0.7),1.6))
v.restore()
b0=$.R().r
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
b2.E(new A.ch(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.by())
m=A.L()
m.r=D.ajU.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.ajU.gp(0)
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
e.E(new A.ch(a5-a9,n,a5,u))
e.E(new A.ch(a5+a9,n,p,j))
e.E(new A.ch(a5,b1+a7*0.34,o,j))
e.E(new A.by())
b1=A.L()
n=a7*1.4
b1.san(A.jD(new A.r(a5-n,0),new A.r(a5+n,0),D.dnp,B.my,B.x,a4))
b4.af(e,b1)
J.br(v.save())
b4.mz(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h5()?B.v:D.bjB).j(0.16)
i=new A.ar(B.T,B.Q,B.V,B.W,B.U)
i.b=B.ab
i.c=0.9
i.r=n.gp(0)
i.d=B.bG
i.e=B.dO
b4.ah(new A.r(a5+(p-0.5)*3,u),new A.r(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aG(b0,B.aj,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ac()
n=new A.ch(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.aj(b1)
p.ac()
b1=B.v.j(0.22)
n=new A.ar(B.T,B.Q,B.V,B.W,B.U)
n.b=B.ab
n.c=1.2
n.r=b1.gp(0)
n.d=B.bG
n.e=B.dO
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ar(B.T,B.Q,B.V,B.W,B.U)
v.b=B.ab
v.c=1.1
v.r=D.br5.gp(0)
v.d=B.bG
v.e=B.dO
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aG(b0,B.aj,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.by())
b0=A.L()
b0.r=D.bn2.gp(0)
b4.af(a9,b0)},
ifO(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+E.aEp[s]
$.R()
q=new A.ar(B.T,B.Q,B.V,B.W,B.U)
q.b=B.ab
q.c=3
q.r=D.a0b.gp(0)
q.d=B.bG
q.e=B.dO
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bY(e.a5(0,B.aNH),24,36)
t=$.R()
r=A.L()
r.r=D.bwf.gp(0)
d.c1(u,r)
t=new A.aG(t.r,B.aj,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.ch(w,v-24,r,u))
t.E(new A.by())
u=A.L()
u.r=D.aiN.gp(0)
d.af(t,u)},
ifa(d){switch(B.o.F(d,8)){case 0:return D.b2N
case 1:return D.b2L
case 2:return D.b2K
case 3:return D.b2J
case 4:return D.b2M
case 5:return D.b2O
case 6:return D.hLi
default:return D.hLh}},
SY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bqo()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.aab:j
w.as=k==null?D.EX:k
C.hGN(d,e,p,C.ifa(m),w,s,m,l)},
hIe(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bUW:function bUW(){var _=this
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
bqo:function bqo(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
an_:function an_(){this.b=this.a=null},
aXH:function aXH(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bUO:function bUO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUP:function bUP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUQ:function bUQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUR:function bUR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUS:function bUS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUT:function bUT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUU:function bUU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUV:function bUV(){},
bUN:function bUN(d){this.a=d},
agB:function agB(d,e){this.a=d
this.b=e},
aey:function aey(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Nj(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bTx(s)
s.bD2(d)
return s},
Hh(d,e,f,g,h,i,j){var w,v=A.T(g).k("Y<1>")
v=A.cZ(new A.Y(g,new C.fzB(f),v),v.k("M.E"))
w=A.B(v,A.a4(v).k("ci.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cT(w,0,A.dx(3,"count",x.S),A.T(w).c))
B.d.e0(v,d)
return new C.lw(e,v,B.d.cd(v,f),h,i,"tree",j)},
iAB(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.haF(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.js(c4,c0)
t=A.B(c4,A.a4(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.js(c4,c0)
r=A.B(c4,A.a4(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.js(c4,c0)
q=A.B(c4,A.a4(c4).k("ci.E"))
for(c4=w.length,v=A.T(t).k("Y<1>"),s=v.k("M.E"),p=A.T(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.d()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.x3)g="father"
else g=h===D.oO?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.Y(t,new C.haH(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Hh(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.Y(w,new C.haI(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lw("True or false: "+h+" is the "+g+" of "+l+".",M.a6Z,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lw("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",M.a6Z,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Go(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.B(new A.Y(t,new C.haJ(l,a0,c5),v),s)
e=a1.c
if(e===D.x3)e="son"
else e=e===D.oO?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Hh(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ew([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mw(a5,a5.r,f.k("mw<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.v(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Hh(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("iF<1>"),a3=new A.iF(a0,1,b3,a2),a3.nb(a0,1,b3,e.c),a3=new A.bR(a3,a3.gJ(0),a2.k("bR<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Hh(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.asg(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.Y(t,new C.haK(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.Hh(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.d()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.d()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.B(new A.Y(t,new C.haL(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.x3
if(e)a2=b7
else a2=f===D.oO?b8:b9
if(e)f=b7
else f=f===D.oO?b8:b9
c2.$2("grand",C.Hh(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aO0(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.B(new A.Y(t,new C.haM(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Hh(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cTo)
h=l+" was born in "+k
c2.$2("place",C.Hh(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.d9e)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Hh(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Hh(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.j2(b1,b3,b3)
c2.$2("year",C.Hh(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bFG(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Nj(d),l=new A.e_()
l.cU(f)
w=C.iAB(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hq8(v.d,l)
v=A.a4(w).k("cs<1>")
u=A.B(new A.cs(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aQ(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aS(u,new C.fNd(n,w))))break
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
if(v<e){v=A.B(D.aBf,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hGU(o,l))}}else if(!g&&v>3){o=C.hGU(D.aBf[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hGU(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.e0(w,e)
return new C.lw(d.a,w,B.d.cd(w,v),d.d,d.e,d.f,d.r)},
hMc(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Nj(a2),a1=new A.e_()
a1.cU(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Go(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Go(n)
l=A.T(m)
k=new A.iF(m,0,5,l.k("iF<1>"))
k.nb(m,0,5,l.c)
j=k.dq(0)
if(new A.N(j,new C.h13(),A.T(j).k("N<1,H>")).fG(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aTu(a0,j[i]))
w.push(new C.av6("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c6(e.c_(0,a0.ano(q),new C.h14()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cs<1>")
d=A.B(new A.cs(e,t),t.k("M.E"))
B.d.ff(d)
v=A.a([],v)
for(u=A.cT(d,0,A.dx(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bR(u,u.gJ(0),t.k("bR<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cG(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aTu(a0,v[r]))
w.push(new C.av6("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aRZ(d){return B.d.aoS(D.aDM,new C.fJ1(d))},
iqv(d){return A.nA(new A.Y(D.aDM,new C.fQ3(d),x.av))},
bUl(d){return C.hVU(d)},
hVU(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bUl=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bUl)
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
return A.i($async$bUl,v)},
C0(d,e){return C.hVR(d,e)},
hVR(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$C0=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$C0)
case 7:r=g
p=B.a.i(d)
o=A.eq(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aF("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$C0)
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
return A.i($async$C0,v)},
bUk(d,e,f){return C.hVS(d,e,f)},
hVS(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bUk=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bUk)
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
return A.i($async$bUk,v)},
C1(d,e,f,g){return C.hVT(d,e,f,g)},
hVT(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$C1=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$C1)
case 7:r=i
p=B.a.i(d)
o=A.eq(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aF("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$C1)
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
return A.i($async$C1,v)},
bHZ(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
hcJ(d,e,f,g){return new C.aly(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hTY(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cg)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cT(w,0,A.dx(4,"count",x.S),u).dq(0)
B.d.u(w,A.c1(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aI(d.h(0,"c"))
v=v==null?null:B.i.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aI(d.h(0,"s"))
u=u==null?null:B.i.M(u)
return C.hcJ(w,v,B.o.D(u==null?20:u,5,60),t)},
hrh(d){var w,v,u,t,s,r,q=J.a6(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aT(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cg)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gP(q)
if(u.b(r))v.push(C.hTY(A.a1(r,t,s)))}return new C.N3(p,w,v)},
hlh(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hrh(w.gP(w)))
return v},
aTu(d,e){var w=e.c===D.oO
if(d.ano(e)===0&&d.Go(e).length!==0)return w?0:1
if(d.Go(e).length!==0||d.asg(e)!=null)return w?2:3
return w?4:5},
hNh(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nj(a4),a3=new A.e_()
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
i===$&&A.d()
j=i.h(0,k)}h=a2.Go(m)
g=a2.asg(m)
f=a2.aO0(m)
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
if(k===D.x3)k="father"
else k=k===D.oO?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.x3)k="father"
else k=k===D.oO?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.b_(l,new C.hb5())
d=B.a.i(m.b)
a0=A.B(new A.Y(s,new C.hb6(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.iF(a0,0,3,i.k("iF<1>"))
a1.nb(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e0(k,a3)
a1=C.aTu(a2,m)
i=new A.iF(l,0,4,p)
i.nb(l,0,4,r)
w.push(new C.bbK(d,a1,i.dq(0),k))
if(w.length>=5)break}return w},
hEf(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.X(d,"My ")?1:0},
hMn(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nj(a4),a3=new A.e_()
a3.cU(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Go(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Go(l)
j=A.T(k)
i=new A.iF(k,0,4,j.k("iF<1>"))
i.nb(k,0,4,j.c)
h=i.dq(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aS(h,new C.h1G(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iF(i,0,k,m)
j.nb(i,0,k,n)
f=j.dq(0)
j=B.a.i(l.b)
k=C.aTu(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aTu(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aTu(a2,f[g]))
w.push(new C.aaA(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lw:function lw(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bTx:function bTx(d){this.b=d
this.c=$},
bTy:function bTy(){},
bTz:function bTz(d){this.a=d},
fzB:function fzB(d){this.a=d},
haF:function haF(d){this.a=d},
haG:function haG(){},
haH:function haH(d){this.a=d},
haI:function haI(d,e){this.a=d
this.b=e},
haJ:function haJ(d,e,f){this.a=d
this.b=e
this.c=f},
haE:function haE(d,e){this.a=d
this.b=e},
haK:function haK(d){this.a=d},
haL:function haL(d){this.a=d},
haM:function haM(d,e,f){this.a=d
this.b=e
this.c=f},
haD:function haD(d,e){this.a=d
this.b=e},
fNd:function fNd(d,e){this.a=d
this.b=e},
av6:function av6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h13:function h13(){},
h14:function h14(){},
zK:function zK(d,e,f){this.a=d
this.b=e
this.c=f},
fJ1:function fJ1(d){this.a=d},
fQ3:function fQ3(d){this.a=d},
aly:function aly(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bOj:function bOj(){},
N3:function N3(d,e,f){this.a=d
this.b=e
this.c=f},
bbK:function bbK(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
hb5:function hb5(){},
hb6:function hb6(d){this.a=d},
aaA:function aaA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h1G:function h1G(d){this.a=d},
bj3:function bj3(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
agz:function agz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
akR:function akR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akS:function akS(d,e,f,g,h){var _=this
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
_.bu$=g
_.a9$=h
_.c=_.a=null},
bMs:function bMs(d){this.a=d},
bMn:function bMn(){},
bMt:function bMt(){},
bMl:function bMl(){},
bMm:function bMm(){},
bMr:function bMr(d){this.a=d},
bMo:function bMo(d,e){this.a=d
this.b=e},
bMq:function bMq(d,e){this.a=d
this.b=e},
bMp:function bMp(d,e){this.a=d
this.b=e},
bMk:function bMk(d){this.a=d},
bee:function bee(d,e){this.b=d
this.a=e},
R3:function R3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCr:function aCr(d,e,f){this.b=d
this.c=e
this.a=f},
aAU:function aAU(d,e,f){this.a=d
this.b=e
this.c=f},
avK:function avK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
avL:function avL(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cO$=e
_.ba$=f
_.c=_.a=null},
csi:function csi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csj:function csj(d){this.a=d},
csh:function csh(d){this.a=d},
csk:function csk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
csl:function csl(){},
csm:function csm(d,e){this.a=d
this.b=e},
csn:function csn(){},
cso:function cso(d){this.a=d},
cse:function cse(d){this.a=d},
csf:function csf(d,e){this.a=d
this.b=e},
csg:function csg(d,e,f){this.a=d
this.b=e
this.c=f},
cs9:function cs9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csb:function csb(d,e){this.a=d
this.b=e},
csc:function csc(d,e){this.a=d
this.b=e},
csa:function csa(d,e){this.a=d
this.b=e},
cs8:function cs8(){},
csd:function csd(){},
bdG:function bdG(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cSo:function cSo(){},
azG:function azG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azH:function azH(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cHf:function cHf(d){this.a=d},
cHe:function cHe(d){this.a=d},
cHn:function cHn(d,e){this.a=d
this.b=e},
cHo:function cHo(d,e){this.a=d
this.b=e},
cHp:function cHp(d){this.a=d},
cHm:function cHm(d){this.a=d},
cHq:function cHq(d){this.a=d},
cHr:function cHr(d,e){this.a=d
this.b=e},
cHs:function cHs(){},
cHt:function cHt(d){this.a=d},
cHh:function cHh(d){this.a=d},
cHi:function cHi(d,e){this.a=d
this.b=e},
cHg:function cHg(d,e){this.a=d
this.b=e},
cHj:function cHj(){},
cHk:function cHk(){},
cHl:function cHl(d,e){this.a=d
this.b=e},
aAE:function aAE(){},
aI_:function aI_(){},
hiV(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bsL((w-450*u)/2,(v-900*u)/2,u)},
agn:function agn(){},
fbT:function fbT(d){this.a=d},
aLR:function aLR(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fm8:function fm8(d){this.a=d},
amQ:function amQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amR:function amR(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qh$=f
_.Mk$=g
_.anV$=h
_.bu$=i
_.a9$=j
_.c=_.a=null},
bUj:function bUj(d){this.a=d},
bUi:function bUi(){},
bUg:function bUg(d){this.a=d},
bUe:function bUe(){},
bUf:function bUf(d){this.a=d},
bUb:function bUb(d,e){this.a=d
this.b=e},
bUc:function bUc(){},
bUd:function bUd(d){this.a=d},
bUh:function bUh(d,e){this.a=d
this.b=e},
bUa:function bUa(d){this.a=d},
buu:function buu(d,e){this.b=d
this.a=e},
fbU:function fbU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fbV:function fbV(d,e,f){this.a=d
this.b=e
this.c=f},
fbW:function fbW(d,e,f){this.a=d
this.b=e
this.c=f},
fbX:function fbX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fbY:function fbY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fbZ:function fbZ(){},
amO:function amO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amP:function amP(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qh$=f
_.Mk$=g
_.anV$=h
_.bu$=i
_.a9$=j
_.c=_.a=null},
bTX:function bTX(){},
bU7:function bU7(d,e){this.a=d
this.b=e},
bU8:function bU8(d){this.a=d},
bU9:function bU9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bU3:function bU3(){},
bU2:function bU2(d,e){this.a=d
this.b=e},
bU4:function bU4(d,e){this.a=d
this.b=e},
bU5:function bU5(){},
bU6:function bU6(d){this.a=d},
bTZ:function bTZ(d){this.a=d},
bU_:function bU_(d){this.a=d},
bU0:function bU0(d){this.a=d},
bTY:function bTY(d,e){this.a=d
this.b=e},
bU1:function bU1(d){this.a=d},
bkU:function bkU(d,e){this.b=d
this.a=e},
due:function due(){},
a2D:function a2D(d,e){this.a=d
this.b=e},
amK:function amK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amL:function amL(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qh$=e
_.Mk$=f
_.anV$=g
_.bu$=h
_.a9$=i
_.c=_.a=null},
bTJ:function bTJ(d){this.a=d},
bTI:function bTI(){},
bTH:function bTH(){},
bTB:function bTB(){},
bTC:function bTC(){},
bTG:function bTG(d,e,f){this.a=d
this.b=e
this.c=f},
bTF:function bTF(d){this.a=d},
bTD:function bTD(d,e){this.a=d
this.b=e},
bTE:function bTE(d){this.a=d},
bkj:function bkj(d,e){this.b=d
this.a=e},
aCu:function aCu(){},
bhR:function bhR(){},
aCw:function aCw(){},
bhS:function bhS(){},
aCx:function aCx(){},
bhT:function bhT(){},
uB(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.ab(0,B.H,f.j(0.4),B.hR,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.W(g,h,u,u,u,20),B.aa],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.ay(u,A.o(u,A.A(v,B.l,u,B.e,B.M,0,u,u),B.f,u,u,new A.n(f,u,u,t,s,u,B.m),u,u,u,u,B.Pb,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hs5(d,e,f,g,h,i,j){return new C.amM(i,h,d,j,e,f,g,null)},
a76:function a76(d,e){this.c=d
this.a=e},
bkq:function bkq(d){this.a=d},
tI:function tI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bTA:function bTA(d){this.a=d},
IG:function IG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
WK:function WK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bne:function bne(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e4y:function e4y(d,e){this.a=d
this.b=e},
e4z:function e4z(d){this.a=d},
e4A:function e4A(d,e){this.a=d
this.b=e},
e4w:function e4w(d){this.a=d},
e4x:function e4x(d){this.a=d},
e4v:function e4v(d){this.a=d},
e4t:function e4t(d){this.a=d},
e4u:function e4u(d){this.a=d},
e4s:function e4s(d,e){this.a=d
this.b=e},
e4B:function e4B(d){this.a=d},
e4C:function e4C(d,e){this.a=d
this.b=e},
e4D:function e4D(d,e){this.a=d
this.b=e},
e4E:function e4E(d,e){this.a=d
this.b=e},
e4H:function e4H(d,e){this.a=d
this.b=e},
e4I:function e4I(d,e){this.a=d
this.b=e},
e4J:function e4J(d,e){this.a=d
this.b=e},
e4K:function e4K(d,e){this.a=d
this.b=e},
e4L:function e4L(d,e){this.a=d
this.b=e},
e4M:function e4M(d,e,f){this.a=d
this.b=e
this.c=f},
e4N:function e4N(d,e){this.a=d
this.b=e},
e4O:function e4O(d,e){this.a=d
this.b=e},
e4F:function e4F(d){this.a=d},
e4G:function e4G(d){this.a=d},
a0u:function a0u(d,e){this.a=d
this.b=e},
amM:function amM(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amN:function amN(d){var _=this
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
bTV:function bTV(d){this.a=d},
bTW:function bTW(d){this.a=d},
bTU:function bTU(d){this.a=d},
bTL:function bTL(d){this.a=d},
bTM:function bTM(d){this.a=d},
bTK:function bTK(d){this.a=d},
bTR:function bTR(d,e,f){this.a=d
this.b=e
this.c=f},
bTS:function bTS(d){this.a=d},
bTO:function bTO(d,e){this.a=d
this.b=e},
bTP:function bTP(d,e,f){this.a=d
this.b=e
this.c=f},
bTT:function bTT(){},
bTQ:function bTQ(d,e){this.a=d
this.b=e},
bTN:function bTN(d){this.a=d},
Uo:function Uo(d,e){this.c=d
this.a=e},
amJ:function amJ(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bTl:function bTl(d){this.a=d},
bTm:function bTm(d){this.a=d},
bTw:function bTw(){},
bTv:function bTv(d,e,f){this.a=d
this.b=e
this.c=f},
bTq:function bTq(d,e){this.a=d
this.b=e},
bTp:function bTp(d,e){this.a=d
this.b=e},
bTr:function bTr(d){this.a=d},
bTs:function bTs(d,e){this.a=d
this.b=e},
bTt:function bTt(d,e){this.a=d
this.b=e},
bTo:function bTo(d,e){this.a=d
this.b=e},
bTu:function bTu(d,e,f){this.a=d
this.b=e
this.c=f},
bTn:function bTn(d,e){this.a=d
this.b=e},
ip0(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ajB(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.V(Date.now(),0,!1))
s=new C.fME(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("Y<1>"),q=q.k("cL<1,p>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zB)m.push(l===D.x3?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.j2(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.j2(h,a2,a2)-A.j2(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.B(new A.cL(new A.Y(a4,new C.fMC(u,f),p),new C.fMD(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aM(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aM(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.az(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ip1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ajB(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fMJ(v,e)
q=new C.fMH(v)
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
p.n(0,s.a,d)}}d=p.$ti.k("b8<2>")
d=A.cZ(new A.b8(p,d),d.k("M.E"))
n=A.B(d,A.a4(d).k("ci.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eL(l,new C.fMI(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aM(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
ia9(d,e,f,g){var w,v,u=C.ip2(d,e)
if(u<=0||f.length<=u)return new A.ag1(!1,D.Ef,f)
if(g.q(0,e.a))return new A.ag1(!1,D.Ef,f)
w=A.T(f).c
v=A.cT(f,0,A.dx(u,"count",x.S),w).dq(0)
return new A.ag1(!0,A.cT(f,u,null,w).dq(0),v)},
iaa(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ajB(d3),d2=d1.length
if(d2===0)return D.hIi
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c_(0,t.a,new C.djE(t))}s=new C.djV(v)
d2=x.dy
r=A.S(w,d2)
q=new C.djN(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.djM(r)
l=A.S(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c6(l.c_(0,k,new C.djF()),o)}h=new C.djL(s)
g=new C.djK(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.B(new A.Y(new A.b8(v,p),new C.djG(h),o),o.k("M.E"))
e=f.length===0?new A.b8(v,p).gH(0):B.d.gH(f)
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
a9=new C.djT(new C.djP(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gamU(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ew([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nA(J.dI(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.dO)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.djD(a2,new C.djU(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=b4.$ti.k("cs<1>")
d2=A.B(new A.cs(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GR(o,new A.r(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.L7(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cs<1>")
d2=A.B(new A.cs(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bP(0,new C.djH(c6,b4))
for(d2=new A.cd(a4,a4.$ti.k("cd<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eL(j,new C.djI(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b_(o,new C.djJ())
c6.push(new C.aLM(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bhX(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hHB(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
hBn(d,e,f,g,h,i,j,k,l,m,n){return new C.a0I(k,f,j,e,l,n,m,d,g,h,i,null)},
aEv(d,e,f,g,h,i,j){return new C.blK(i,d,e,f,j,h,g,null)},
arU:function arU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aG3:function aG3(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e6d:function e6d(d){this.a=d},
e6c:function e6c(d){this.a=d},
e6f:function e6f(d,e){this.a=d
this.b=e},
e6g:function e6g(d,e){this.a=d
this.b=e},
e6h:function e6h(d){this.a=d},
e6b:function e6b(d,e){this.a=d
this.b=e},
e6e:function e6e(d){this.a=d},
e6j:function e6j(d){this.a=d},
e6i:function e6i(d,e){this.a=d
this.b=e},
arO:function arO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aG0:function aG0(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e5E:function e5E(d){this.a=d},
e5C:function e5C(d){this.a=d},
e5D:function e5D(d){this.a=d},
e5F:function e5F(d,e){this.a=d
this.b=e},
e5z:function e5z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e50:function e50(d){this.a=d},
e51:function e51(d,e){this.a=d
this.b=e},
e5i:function e5i(d){this.a=d},
e5g:function e5g(d){this.a=d},
e5h:function e5h(d,e){this.a=d
this.b=e},
e5j:function e5j(d){this.a=d},
e5k:function e5k(d,e){this.a=d
this.b=e},
e5y:function e5y(d,e){this.a=d
this.b=e},
e5f:function e5f(d){this.a=d},
e5e:function e5e(d){this.a=d},
e5d:function e5d(d,e){this.a=d
this.b=e},
e5v:function e5v(){},
e5w:function e5w(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e5u:function e5u(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e5o:function e5o(d){this.a=d},
e5p:function e5p(d,e,f){this.a=d
this.b=e
this.c=f},
e5n:function e5n(d,e){this.a=d
this.b=e},
e5q:function e5q(d,e){this.a=d
this.b=e},
e5l:function e5l(d,e){this.a=d
this.b=e},
e5m:function e5m(){},
e5r:function e5r(d,e){this.a=d
this.b=e},
e5s:function e5s(d){this.a=d},
e5t:function e5t(d,e){this.a=d
this.b=e},
e5x:function e5x(d,e){this.a=d
this.b=e},
e4P:function e4P(d,e){this.a=d
this.b=e},
e4Q:function e4Q(d,e){this.a=d
this.b=e},
e5H:function e5H(d,e,f){this.a=d
this.b=e
this.c=f},
e5B:function e5B(d,e,f){this.a=d
this.b=e
this.c=f},
e5A:function e5A(d){this.a=d},
e4R:function e4R(d){this.a=d},
e4S:function e4S(d){this.a=d},
e4T:function e4T(){},
e4U:function e4U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4Y:function e4Y(d,e){this.a=d
this.b=e},
e4X:function e4X(d,e){this.a=d
this.b=e},
e4W:function e4W(d){this.a=d},
e4Z:function e4Z(d,e){this.a=d
this.b=e},
e4V:function e4V(d){this.a=d},
e5G:function e5G(d){this.a=d},
e5a:function e5a(){},
e5b:function e5b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e59:function e59(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e55:function e55(d,e,f){this.a=d
this.b=e
this.c=f},
e54:function e54(d,e,f){this.a=d
this.b=e
this.c=f},
e52:function e52(d,e){this.a=d
this.b=e},
e56:function e56(d){this.a=d},
e57:function e57(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e53:function e53(d,e){this.a=d
this.b=e},
e58:function e58(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5c:function e5c(d,e){this.a=d
this.b=e},
e5O:function e5O(){},
e5P:function e5P(d,e){this.a=d
this.b=e},
e5Q:function e5Q(d){this.a=d},
e5R:function e5R(d,e){this.a=d
this.b=e},
e5K:function e5K(d){this.a=d},
e5I:function e5I(d,e){this.a=d
this.b=e},
e5L:function e5L(d,e){this.a=d
this.b=e},
e5M:function e5M(d,e){this.a=d
this.b=e},
e5N:function e5N(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e5S:function e5S(d){this.a=d},
e5J:function e5J(d){this.a=d},
e5_:function e5_(d){this.a=d},
bhV:function bhV(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
djB:function djB(d){this.a=d},
djA:function djA(d,e){this.a=d
this.b=e},
djC:function djC(d){this.a=d},
djz:function djz(d,e){this.a=d
this.b=e},
fME:function fME(d,e){this.a=d
this.b=e},
fMF:function fMF(d){this.a=d},
fMG:function fMG(){},
fMC:function fMC(d,e){this.a=d
this.b=e},
fMD:function fMD(){},
fMJ:function fMJ(d,e){this.a=d
this.b=e},
fMK:function fMK(d){this.a=d},
fML:function fML(){},
fMH:function fMH(d){this.a=d},
fMI:function fMI(d,e){this.a=d
this.b=e},
L7:function L7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GR:function GR(d,e){this.a=d
this.b=e},
bhX:function bhX(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
djE:function djE(d){this.a=d},
djV:function djV(d){this.a=d},
djN:function djN(d){this.a=d},
djO:function djO(){},
djM:function djM(d){this.a=d},
djF:function djF(){},
djL:function djL(d){this.a=d},
djK:function djK(d,e){this.a=d
this.b=e},
djG:function djG(d){this.a=d},
djP:function djP(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
djQ:function djQ(d){this.a=d},
djR:function djR(d){this.a=d},
djS:function djS(){},
djT:function djT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
djU:function djU(){},
djD:function djD(d,e,f,g,h,i,j,k,l,m){var _=this
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
djH:function djH(d,e){this.a=d
this.b=e},
djI:function djI(d){this.a=d},
djJ:function djJ(){},
aLM:function aLM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bhY:function bhY(d,e){this.b=d
this.a=e},
djW:function djW(){},
djX:function djX(d){this.a=d},
djY:function djY(d){this.a=d},
djZ:function djZ(){},
blL:function blL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgZ:function bgZ(d,e){this.b=d
this.a=e},
bzS:function bzS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
frK:function frK(d){this.a=d},
bp6:function bp6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f1E:function f1E(d){this.a=d},
f1D:function f1D(d,e){this.a=d
this.b=e},
a0I:function a0I(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aEt:function aEt(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dzY:function dzY(d,e){this.a=d
this.b=e},
dzX:function dzX(d){this.a=d},
dzV:function dzV(d){this.a=d},
dzW:function dzW(d){this.a=d},
dA6:function dA6(d){this.a=d},
dA7:function dA7(d){this.a=d},
dA5:function dA5(d,e){this.a=d
this.b=e},
dA8:function dA8(){},
dAb:function dAb(d){this.a=d},
dA4:function dA4(d,e){this.a=d
this.b=e},
dAa:function dAa(){},
dAc:function dAc(d){this.a=d},
dA3:function dA3(d,e){this.a=d
this.b=e},
dAd:function dAd(d){this.a=d},
dA2:function dA2(d){this.a=d},
dAe:function dAe(d){this.a=d},
dA1:function dA1(d){this.a=d},
dAf:function dAf(d){this.a=d},
dA0:function dA0(d){this.a=d},
dAg:function dAg(d){this.a=d},
dA_:function dA_(d){this.a=d},
dAh:function dAh(d){this.a=d},
dzZ:function dzZ(d,e){this.a=d
this.b=e},
dA9:function dA9(d){this.a=d},
aeV:function aeV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blK:function blK(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aeU:function aeU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
blJ:function blJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dAi:function dAi(d){this.a=d},
dAj:function dAj(d,e){this.a=d
this.b=e},
aEu:function aEu(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKO:function aKO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeW:function aeW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dAs:function dAs(d){this.a=d},
GN:function GN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hw9(d){var w=d.V,v=x.N
return w.jp(w,new C.cgO(),v,v)},
i1v(d){var w=d.bH
if(w>=0)return w
return 5},
hwb(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hw9(d).h(0,v)
if(w==null||w.length===0)return null
return A.bh(w)},
hwa(d,e){var w=C.hwb(d,e)
if(w!=null&&w.cc(new A.V(Date.now(),0,!1)))return!0
return!1},
i1w(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.hw9(d),w,w)
u=C.hwb(d,e)
t=u!=null&&u.cc(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bQ(A.du(30,0,0,0,0,0).a).ab().ag())
d.V=v},
b2m(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b2m=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lC(t,B.Kc),$async$b2m)
case 3:if(l){u=!0
w=1
break}u=A.li(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Kc,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2m,v)},
cgO:function cgO(){},
i1t(){var w,v=$.oz(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hh(u)},
JB(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$JB=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cb(),$async$JB)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$JB)
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
return A.i($async$JB,v)},
a8P(d){return C.i1u(d)},
i1u(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8P=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cb(),$async$a8P)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hT("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.z),!1,!1,B.cS,null),$async$a8P)
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
return A.i($async$a8P,v)},
cgN(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cgN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.JB(),$async$cgN)
case 3:t=m.ic(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gP(t)
q=r.b
if(s.b(q)){p=J.a6(q)
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
return A.i($async$cgN,v)},
OB(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$OB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cgN(d),$async$OB)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.JB(),$async$OB)
case 6:s=f
r=J.a6(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dG(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).ab().ag())
r.n(s,t,o)
w=9
return A.b(C.a8P(s),$async$OB)
case 9:case 8:u=t
w=1
break
case 5:n=C.i1t()
w=10
return A.b(C.JB(),$async$OB)
case 10:s=f
J.aJ(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.K))
w=11
return A.b(C.a8P(s),$async$OB)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$OB,v)},
b2l(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b2l=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.JB(),$async$b2l)
case 3:t=f
for(s=J.ds(t),r=s.gdM(t),r=r.dq(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8P(t),$async$b2l)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b2l,v)},
a8Q(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8Q=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.arT(d,e),$async$a8Q)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.OB(d),$async$a8Q)
case 7:w=4
break
case 5:w=8
return A.b(C.b2l(d),$async$a8Q)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8Q,v)},
arN(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$arN=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.arT(f,e),$async$arN)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.cb(),$async$arN)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.JB(),$async$arN)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a6(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arN,v)},
b2k(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b2k=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.cb(),$async$b2k)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.JB(),$async$b2k)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a6(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2k,v)},
i1x(){var w,v=$.oz(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hh(u)},
arQ(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$arQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.cb(),$async$arQ)
case 3:if(!g){u=null
w=1
break}t=C.i1x()
w=4
return A.b(A.WL(),$async$arQ)
case 4:s=g
r=B.dY.aK(B.X.av(d.f1(),null))
r=B.cM.gco().aK(r)
q=e?999:2
J.aJ(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.K))
w=5
return A.b(A.a8R(s),$async$arQ)
case 5:p=e?999:2
u=new A.a1T("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arQ,v)},
arP(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$arP=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.WL(),$async$arP)
case 3:p=a0
o=J.a6(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a6(n)
l=A.aI(m.h(n,"usesRemaining"))
k=l==null?null:B.i.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b2k(J.k(l==null?"":l),j),$async$arP)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cc.cE(0,B.cE.aK(t))
s=C.hwc(r)}catch(f){q=A.ac(f)
$.am.$1("[family tree qr stash] decode: "+A.v(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dG(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().ag())
o.n(p,g,l)}w=5
return A.b(A.a8R(p),$async$arP)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arP,v)},
hwc(d){var w,v,u,t,s=null
try{w=B.X.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.i1z(A.a1(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.am.$1("[family tree sync] parse: "+A.v(v))
return s}},
heS(d){var w=0,v=A.j(x.m),u,t,s
var $async$heS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.X(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.arP(t[1])
w=1
break}u=null
w=1
break}u=C.hwc(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$heS,v)},
i1z(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.cY(v,x.f)
u=A.cD(u,new C.cgQ(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.B(new A.Y(u,new C.cgR(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bh(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.ic(p),t=t.gae(t),o=x.B;t.C();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.cY(l,u)
n=A.cD(n,new C.cgS(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.B(new A.Y(n,new C.cgT(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.arR(h,w,s,r,q)},
arT(d,e){var w=0,v=A.j(x.y),u,t
var $async$arT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Ot(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bu(d),$async$arT)
case 3:u=t.cK(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arT,v)},
cgZ(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cgZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bu(d),$async$cgZ)
case 3:t=s.ba(f,new C.ch_(),x.cs)
t=A.B(t,t.$ti.k("ak.E"))
B.d.b_(t,new C.ch0())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgZ,v)},
WM(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$WM=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.arT(e,d),$async$WM)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.OB(e),$async$WM)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bu(e),$async$WM)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.cgX(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a6(r)
if(t.gau(r)){u=null
w=1
break}t=t.dP(r,new C.cgY(e),x.k)
r=A.B(t,t.$ti.k("ak.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LY(e,o),$async$WM)
case 14:n=i
if(J.cK(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.arR(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WM,v)},
b2p(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b2p=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WM(d,e,f,g),$async$b2p)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hw(A.L3(q.f1(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2p,v)},
b2o(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b2o=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WM(d,e,f,g),$async$b2o)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.arQ(r,f),$async$b2o)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aIN(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2o,v)},
WN(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WN=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.heS(a0),$async$WN)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.X(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.arN(g.a,d,e,f,s,r),$async$WN)
case 6:if(!a2){if(r)throw A.X(A.bc("This backup expired or the sender's tree is no longer available."))
throw A.X(A.bc("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bFk(e,j),$async$WN)
case 12:case 11:w=13
return A.b(C.ajj(e,j,s),$async$WN)
case 13:h=n.h(0,i)
w=h!=null&&J.cK(h)?14:15
break
case 14:w=16
return A.b(C.BF(e,i,h),$async$WN)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bsR(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WN,v)},
arR:function arR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cgV:function cgV(){},
cgW:function cgW(){},
cgU:function cgU(){},
cgQ:function cgQ(){},
cgR:function cgR(){},
cgS:function cgS(){},
cgT:function cgT(){},
ch_:function ch_(){},
ch0:function ch0(){},
cgX:function cgX(d){this.a=d},
cgY:function cgY(d){this.a=d},
ho6(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hG(d,new C.arS(w,e,g,i,f,h,null),!0,null,x.H)},
djy(d,e,f,g,h,i,j,k){return new C.bhU(i,e,k,j,g,f,h,d,null)},
arS:function arS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aG2:function aG2(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e60:function e60(d){this.a=d},
e61:function e61(d,e,f){this.a=d
this.b=e
this.c=f},
e65:function e65(d,e){this.a=d
this.b=e},
e66:function e66(d){this.a=d},
e5Y:function e5Y(d){this.a=d},
e5Z:function e5Z(d,e){this.a=d
this.b=e},
e6_:function e6_(d,e){this.a=d
this.b=e},
e64:function e64(d){this.a=d},
e63:function e63(d,e){this.a=d
this.b=e},
e62:function e62(){},
e68:function e68(d){this.a=d},
e69:function e69(d,e){this.a=d
this.b=e},
e67:function e67(d,e){this.a=d
this.b=e},
dk_:function dk_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bhW:function bhW(d,e,f){this.d=d
this.e=e
this.a=f},
aea:function aea(d,e,f){this.c=d
this.d=e
this.a=f},
bhU:function bhU(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bhZ:function bhZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a11:function a11(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aG1:function aG1(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e5T:function e5T(d,e){this.a=d
this.b=e},
e5U:function e5U(d){this.a=d},
e5V:function e5V(d){this.a=d},
e5W:function e5W(d){this.a=d},
e5X:function e5X(d){this.a=d},
a12:function a12(d){this.a=d},
bnf:function bnf(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e6a:function e6a(d,e){this.a=d
this.b=e},
b0T(d,e){return new C.b0S(d,e,null)},
b0S:function b0S(d,e,f){this.c=d
this.d=e
this.a=f},
irs(d){if(!(d!=null&&B.a.X(d,"ngmy:thumb:")))return null
return B.a.aY(d,11)},
iz7(d){return A.bU(B.L,null,new C.h3c(new C.um(A.O(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hyc(d,e){return new C.auV(e,d,null)},
aTo(d,e,f,g,h,i,j){var w=C.irs(i)
if(w!=null)return A.bv(e,new A.a5(j,f,new C.a7S(w,!0,null),null),B.aq)
return A.aSJ(e,B.bZ,f,g,h,i,j)},
lY:function lY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7S:function a7S(d,e,f){this.c=d
this.d=e
this.a=f},
bmU:function bmU(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
dS4:function dS4(d){this.a=d},
dS5:function dS5(){},
dS6:function dS6(d,e){this.a=d
this.b=e},
bmT:function bmT(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h3c:function h3c(d){this.a=d},
h3b:function h3b(d,e){this.a=d
this.b=e},
h3a:function h3a(d,e){this.a=d
this.b=e},
h39:function h39(d,e){this.a=d
this.b=e},
auV:function auV(d,e,f){this.c=d
this.d=e
this.a=f},
cqA:function cqA(d,e){this.a=d
this.b=e},
aOd:function aOd(){},
iyT(d){var w=null
return A.cg(w,w,!0,w,new C.h2A(),d,w,!0,!0,x.e2)},
iA6(d,e,f,g,h){var w=null
return A.cg(w,w,!0,w,new C.han(h,g,f,e),d,w,!0,!0,x.N)},
iyV(d,e){var w=null
return A.cg(w,w,!0,w,new C.h2E(e),d,w,!0,!0,x.dY)},
iyU(d){var w=null
return A.cg(w,w,!0,w,new C.h2D(),d,w,!0,!0,x.c5)},
aWl:function aWl(d,e){this.a=d
this.b=e},
aWk:function aWk(d){this.a=d},
aUm:function aUm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h2A:function h2A(){},
han:function han(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h2E:function h2E(d){this.a=d},
h2D:function h2D(){},
a_F:function a_F(d,e){this.c=d
this.a=e},
aBc:function aBc(){var _=this
_.d=$
_.c=_.a=_.e=null},
db5:function db5(d){this.a=d},
db6:function db6(d){this.a=d},
db4:function db4(d,e){this.a=d
this.b=e},
db7:function db7(d){this.a=d},
db8:function db8(d){this.a=d},
a_E:function a_E(d){this.a=d},
aBb:function aBb(){this.d=$
this.c=this.a=null},
db1:function db1(d){this.a=d},
db2:function db2(d){this.a=d},
db3:function db3(d){this.a=d},
a_9:function a_9(d){this.a=d},
azT:function azT(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cIX:function cIX(){},
cJ2:function cJ2(d){this.a=d},
cJ3:function cJ3(d){this.a=d},
cJ4:function cJ4(d){this.a=d},
cJ1:function cJ1(){},
cJ5:function cJ5(d){this.a=d},
cJ6:function cJ6(d){this.a=d},
cJ0:function cJ0(){},
cJ7:function cJ7(d,e){this.a=d
this.b=e},
cJ_:function cJ_(d,e){this.a=d
this.b=e},
cIY:function cIY(d,e){this.a=d
this.b=e},
cJ8:function cJ8(d){this.a=d},
cIZ:function cIZ(){},
cJ9:function cJ9(d){this.a=d},
a2Q:function a2Q(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bzK:function bzK(){this.d=$
this.c=this.a=null},
frf:function frf(d,e){this.a=d
this.b=e},
frg:function frg(d){this.a=d},
frh:function frh(d,e){this.a=d
this.b=e},
ada:function ada(d,e){this.a=d
this.b=e},
GB:function GB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bzI:function bzI(d,e){var _=this
_.d=$
_.bu$=d
_.a9$=e
_.c=_.a=null},
frd:function frd(d,e){this.a=d
this.b=e},
azM:function azM(d,e){this.c=d
this.a=e},
bzJ:function bzJ(d,e){var _=this
_.d=$
_.bu$=d
_.a9$=e
_.c=_.a=null},
fre:function fre(d){this.a=d},
bzH:function bzH(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aQm:function aQm(){},
aQn:function aQn(){},
bHp(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.be(u),s=B.o.D(B.i.T((u-t)*100),0,99),r=d<0?"-":"",q=A.nT(B.o.v(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.h0R(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cR(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cR(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cR(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b1(B.o.v(s),2,"0")
n.push(A.cR(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Zx(A.cR(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aT0(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aT0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i8().l8(85,1280,B.eY),$async$aT0)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fs(),$async$aT0)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hyb()
w=9
return A.b(C.cqz(q,r),$async$aT0)
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
return A.i($async$aT0,v)},
aTm(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aTm=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.X(g,"ngmy:ws-thumb:")
if(i){u=C.cqw(g)
w=1
break}if(!B.a.X(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cE.aK(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hx(p,!0,null,o).dc(0,B.fX),$async$aTm)
case 9:n=a1
w=10
return A.b(n.lc(),$async$aTm)
case 10:m=a1
w=11
return A.b(m.b.hk(B.hn),$async$aTm)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eQ(B.dK.gaU(l))
k="data:image/png;base64,"+B.cM.gco().aK(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.i.T(o*0.72)
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
return A.i($async$aTm,v)},
h0R:function h0R(){},
um:function um(d){this.a=d},
auU:function auU(d,e,f){this.c=d
this.d=e
this.a=f},
aHB:function aHB(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eZO:function eZO(d,e){this.a=d
this.b=e},
eZF:function eZF(d){this.a=d},
eZG:function eZG(d){this.a=d},
eZM:function eZM(d,e){this.a=d
this.b=e},
eZL:function eZL(d,e){this.a=d
this.b=e},
eZI:function eZI(d,e){this.a=d
this.b=e},
eZH:function eZH(d,e){this.a=d
this.b=e},
eZJ:function eZJ(d){this.a=d},
eZK:function eZK(d,e){this.a=d
this.b=e},
eZN:function eZN(d,e){this.a=d
this.b=e},
eZA:function eZA(d,e){this.a=d
this.b=e},
eZE:function eZE(d){this.a=d},
eZD:function eZD(d,e){this.a=d
this.b=e},
eZC:function eZC(d){this.a=d},
eZP:function eZP(d,e){this.a=d
this.b=e},
eZQ:function eZQ(d,e){this.a=d
this.b=e},
eZB:function eZB(d,e){this.a=d
this.b=e},
hLQ(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).ab().ag(),"project",v],x.N,x.z)},
h0S(d,e,f){var w=0,v=A.j(x.N),u
var $async$h0S=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.av(C.hLQ(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h0S,v)},
bHr(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bHr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.h0S(!0,d,e),$async$bHr)
case 4:w=3
return A.b(r.auS(g,d,e.a),$async$bHr)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dY.aK(B.X.av(C.hLQ(d,e,null),null))
u="NGMY_WS:"+B.kS.gco().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHr,v)},
hCN(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hnG(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d5(s,"NGMYWSSYNC2|"))return!0
if(J.d5(s,"NGMY_WS:"))return!0
if(J.eC(s,t))return!0
if(J.d5(s,"{"))try{w=B.X.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iwT(d){var w,v,u,t=C.hCN(d)
if(t==null)return null
if(C.hnG(t))return t
w=B.a.cd(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aY(t,w))
if(C.hnG(v))return v}u=B.a.cd(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aY(t,u))
if(C.hnG(v))return v}return null},
hnF(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d5(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d5(q,"NGMY_WS:")){v=B.cc.cE(0,B.cE.aK(J.n2(q,8)))
w=t.a(B.X.aP(0,v,r))}else w=t.a(B.X.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hhw(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bHq(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bHq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.X(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.auR(t[1]),$async$bHq)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hnF(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hnF(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHq,v)},
hnE(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lI(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bGU(){var w=0,v=A.j(x.o),u,t
var $async$bGU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HI(),$async$bGU)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hnF(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGU,v)},
hN0(d,e,f,g){return A.bU(B.L,null,new C.haa(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
haa:function haa(d,e,f){this.a=d
this.b=e
this.c=f},
afg:function afg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eZS:function eZS(d,e){this.a=d
this.b=e},
eZT:function eZT(d,e){this.a=d
this.b=e},
eZU:function eZU(d,e){this.a=d
this.b=e},
eZV:function eZV(d,e){this.a=d
this.b=e},
eZR:function eZR(d){this.a=d},
auO:function auO(d,e,f){this.c=d
this.d=e
this.a=f},
boC:function boC(){var _=this
_.c=_.a=_.e=_.d=null},
eZv:function eZv(d,e){this.a=d
this.b=e},
eZw:function eZw(d){this.a=d},
eZx:function eZx(d){this.a=d},
auT:function auT(d){this.a=d},
aHA:function aHA(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eZz:function eZz(d){this.a=d},
eZy:function eZy(d){this.a=d},
i4R(d,e,f,g,h){return new C.Pg(h,g,d,e,f,null)},
aMy:function aMy(d,e){this.a=d
this.b=e},
Pg:function Pg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHC:function aHC(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
f_h:function f_h(){},
f_d:function f_d(d,e){this.a=d
this.b=e},
f_e:function f_e(d){this.a=d},
eZZ:function eZZ(d){this.a=d},
eZX:function eZX(d){this.a=d},
eZY:function eZY(d){this.a=d},
f_7:function f_7(d,e){this.a=d
this.b=e},
f_4:function f_4(d,e){this.a=d
this.b=e},
f_5:function f_5(d,e){this.a=d
this.b=e},
f_6:function f_6(d,e,f){this.a=d
this.b=e
this.c=f},
f_2:function f_2(d,e,f){this.a=d
this.b=e
this.c=f},
f_0:function f_0(d){this.a=d},
f_1:function f_1(d){this.a=d},
f_3:function f_3(d){this.a=d},
f_k:function f_k(d){this.a=d},
f_j:function f_j(d){this.a=d},
f_l:function f_l(d){this.a=d},
f_i:function f_i(d){this.a=d},
eZW:function eZW(d){this.a=d},
f__:function f__(d,e){this.a=d
this.b=e},
f_g:function f_g(d,e){this.a=d
this.b=e},
f_f:function f_f(d,e){this.a=d
this.b=e},
f_a:function f_a(d){this.a=d},
f_b:function f_b(d){this.a=d},
f_c:function f_c(d,e){this.a=d
this.b=e},
f_9:function f_9(d,e){this.a=d
this.b=e},
f_8:function f_8(d,e,f){this.a=d
this.b=e
this.c=f},
bBv:function bBv(){},
Bh(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahP(d,e,f){return C.ikX(d,e,f)},
ikX(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahP=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aF("String",e,f),$async$ahP)
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
return A.i($async$ahP,v)},
ahO(d,e){return C.ikW(d,e)},
ikW(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahO=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ahO)
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
return A.i($async$ahO,v)},
ijM(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.U2(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bEf(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bEf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
if(q.length===0){u=null
w=1
break}t=B.a.X(q,"ngmy:thumb:")
if(!t)t=B.a.X(q,"ngmy:ws-thumb:")
else t=!0
if(t){u=q
w=1
break}w=B.a.X(q,"data:image")?3:4
break
case 3:w=5
return A.b(C.b5E(q),$async$bEf)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aTm(q,!1),$async$bEf)
case 6:r=f
if(r!=null&&B.a.X(r,"data:image")&&r.length<=12e4){u=r
w=1
break}u=null
w=1
break
case 4:u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEf,v)},
hTd(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aI(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rx(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rx(p,J.k(u==null?"":u),1,o,q)},
hhw(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.cY(s,x.f)
w=A.cD(w,new C.cId(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.B(new A.Y(w,new C.cIe(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bh(J.k(t==null?"":t))
return new C.lI(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ioX(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.x3
case"female":case"f":return D.oO
default:return D.zB}},
hI9(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hs6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ioX(v==null?j:J.k(v))
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
m=m==null?j:B.i.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aI(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.i.M(k)
return new C.i7(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ioZ(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Pz
case"viewer":return D.l5
default:return D.v8}},
ip_(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hy(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aS3(d,e){return B.a.i(e.toLowerCase())===C.Hy(d,e)&&d.y!==D.l5},
uC(d,e){var w,v=d.y
if(v===D.l5)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hy(d,e))return!0
if(v===D.Pz)return!0
v=d.e
return new A.N(v,A.hnM(),A.T(v).k("N<1,p>")).q(0,w)},
ioj(d){return J.dI(d,new C.fLw()).gJ(0)},
haW(d){var w=0,v=A.j(x.y),u,t
var $async$haW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bu(d),$async$haW)
case 3:u=t.rs(f,new C.haX(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$haW,v)},
bFk(d,e){var w=0,v=A.j(x.H),u,t
var $async$bFk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bu(d),$async$bFk)
case 3:t=g
if(J.rs(t,new C.fJ0(e))){w=1
break}if(C.ioj(t)>=2)throw A.X(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bFk,v)},
amT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.cY(h,x.f)
w=A.cD(w,new C.bUm(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.B(new A.Y(w,new C.bUn(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.ba(u,new C.bUo(),x.N)
t=A.B(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
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
p=A.aI(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.i.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ioZ(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cg)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.l1(w,v,s,!r,t,g,q,p,o,n,m)},
hIo(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.az(v,0,8)},
DP(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SX(d),$async$DP)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$DP)
case 4:t=f
w=5
return A.b(t.a7U(0),$async$DP)
case 5:w=6
return A.b(C.fz9(t,l),$async$DP)
case 6:s=f
if(J.cK(s)){u=s
w=1
break}r=B.a.gY(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aW(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hDp(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pf(l,n),$async$DP)
case 11:u=n
w=1
break
case 10:case 8:m=A.aW(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gY(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hDp(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pf(l,n),$async$DP)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DP,v)},
fz9(d,e){return C.ih7(d,e)},
ih7(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fz9=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aW(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bh(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.X.aP(0,a5,null)
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
break}m=A.aW(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bh(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.X.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hhw(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aW(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bh(a9)+"_"+n))
i=C.ijM(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.X(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b5E(h),$async$fz9)
case 17:g=b1
if(g!=null){i=i.U2(g)
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
case 8:J.T5(q,new C.fza())
if(p&&J.ad(q)!==0)C.pf(a9,q)
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
return A.i($async$fz9,v)},
bFO(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bFO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.SX(d),$async$bFO)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DP(r),$async$bFO)
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
return A.i($async$bFO,v)},
hDp(d){var w,v,u,t
try{w=B.X.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.cY(w,x.f)
v=A.cD(v,new C.fuI(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.B(new A.Y(v,new C.fuJ(),u),u.k("M.E"))
B.d.b_(v,new C.fuK())
return v}catch(t){v=A.a([],x.D)
return v}},
pf(d,e){return C.iyI(d,e)},
iyI(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pf=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.SX(b2),$async$pf)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$pf)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bh(a8)
p=A.aW(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.ba(x.j.a(B.X.aP(0,p,null)),new C.h2o(),a2).fG(0)
a2=J.ba(b3,new C.h2p(),a2).c0(0,new C.h2q())
n=A.cZ(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eC(n,m)?17:18
break
case 17:a5=C.Bh(a8)
l=A.aW(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.aaa(l),$async$pf)
case 19:t=21
a5=C.Bh(a8)
k=A.aW(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.X.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.aaa(a5==null?null:J.k(a5)),$async$pf)
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
return A.b(C.ahO(r,"ngmy_worksheet_item_v3_"+C.Bh(a8)+"_"+m),$async$pf)
case 29:w=30
return A.b(C.ahO(r,"ngmy_worksheet_thumb_v3_"+C.Bh(a8)+"_"+m),$async$pf)
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
case 14:case 10:a2=J.cG(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gP(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bEf(h),$async$pf)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahP(r,"ngmy_worksheet_thumb_v3_"+C.Bh(a8)+"_"+a4,f),$async$pf)
case 40:g=i.U2(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahO(r,"ngmy_worksheet_thumb_v3_"+C.Bh(a8)+"_"+a4),$async$pf)
case 41:g=i.U2(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahO(r,"ngmy_worksheet_thumb_v3_"+C.Bh(a8)+"_"+a4),$async$pf)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahP(r,"ngmy_worksheet_item_v3_"+C.Bh(a8)+"_"+a4,B.X.av(g.ak(),null)),$async$pf)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.c6(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahP(r,"ngmy_worksheets_index_v3_"+C.Bh(a8),B.X.av(q,null)),$async$pf)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eO(b3,new C.h2r(q))
a4=a3.$ti.k("cL<1,aa<p,@>>")
a7=A.B(new A.cL(a3,new C.h2s(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahP(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gY(B.a.i(a8.toLowerCase()))),B.X.av(a0,null)),$async$pf)
case 45:w=46
return A.b(J.hSi(r),$async$pf)
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
return A.i($async$pf,v)},
Mq(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Mq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DP(d),$async$Mq)
case 3:t=g
s=J.cG(t)
r=s.bk(t,new C.haV(e))
if(r===-1)s.ca(t,0,e)
else s.n(t,r,e)
u=C.pf(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mq,v)},
bFA(d,e){var w=0,v=A.j(x.H),u
var $async$bFA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DP(d),$async$bFA)
case 2:u=g
J.n1(u,new C.fM_(e))
w=3
return A.b(C.pf(d,u),$async$bFA)
case 3:return A.h(null,v)}})
return A.i($async$bFA,v)},
HA(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$HA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$HA)
case 3:l=f
k=A.a([],x._)
j=B.a.gY(B.a.i(d.toLowerCase()))
i=A.aW(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.X.aP(0,i,null)
if(x.j.b(t)){j=J.cY(t,x.f)
j=A.cD(j,new C.fPd(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.B(new A.Y(j,new C.fPe(),s),s.k("M.E"))
B.d.b_(r,new C.fPf())
k=r}}catch(h){}w=4
return A.b(C.fvt(d),$async$HA)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.ihu(k,p,d)
j=A.T(o)
s=j.k("N<1,aa<p,@>>")
s=A.B(new A.N(o,new C.fPg(),s),s.k("ak.E"))
n=B.X.av(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.S3(d,o),$async$HA)
case 7:case 6:j=j.k("Y<1>")
m=A.B(new A.Y(o,new C.fPh(d),j),j.k("M.E"))
if(m.length!==0)C.aRQ(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$HA,v)},
h2a(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h2a=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S3(d,e),$async$h2a)
case 3:t=J.dI(e,new C.h2b(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aRQ(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h2a,v)},
a4v(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a4v=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a4v)
case 2:n=g
m=B.a.gY(B.a.i(d.toLowerCase()))
l=A.aW(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aP(0,l,null)
if(x.j.b(u)){m=J.cY(u,x.f)
m=A.cD(m,new C.haQ(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.B(new A.Y(m,new C.haR(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oD(o,new C.haS(e))
if(B.a.i(e.x).length===0&&C.uC(e,d)){m=B.a.i(d.toLowerCase())
p=e.aH5(e.y===D.l5?D.l5:D.v8,m)}else p=e
if(q===-1)J.n0(o,0,p)
else J.aJ(o,q,p)
w=3
return A.b(C.S3(d,o),$async$a4v)
case 3:w=C.uC(p,d)?4:5
break
case 4:w=6
return A.b(C.aRP(C.Hy(p,d),p),$async$a4v)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a4v,v)},
aS1(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aS1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.HA(d),$async$aS1)
case 2:u=g
t=J.cG(u)
s=A.nA(t.eO(u,new C.fLH(e)))
t.bq(u,new C.fLI(e))
w=3
return A.b(C.S3(d,u),$async$aS1)
case 3:w=s!=null&&C.aS3(s,d)?4:5
break
case 4:w=6
return A.b(C.fuM(e),$async$aS1)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aS1,v)},
ajB(d){var w=d.f,v=A.T(w).k("Y<1>")
w=A.B(new A.Y(w,new C.hb0(),v),v.k("M.E"))
return w},
hl5(d,e){var w,v=d.f,u=A.nA(new A.Y(v,new C.fLb(e),A.T(v).k("Y<1>")))
v=C.ajB(d)
w=A.T(v).k("Y<1>")
v=A.B(new A.Y(v,new C.fLc(e,u),w),w.k("M.E"))
B.d.b_(v,new C.fLd())
return v},
ip2(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hN4(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bk(C.hl5(d,u),new C.hao(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
iqw(d,e){var w
if(e==null||e.length===0)return 1
w=C.hl5(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fQ4(),A.T(w).k("N<1,H>")).eD(0,B.yw)+1},
iyB(d){var w,v=C.ajB(d)
if(v.length===0)return null
w=new A.Y(v,new C.h24(),A.T(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ioY(d){return A.J(["id",d.a,"name",d.b,"gender",C.hI9(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
iqr(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
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
n=n!==D.zB?n:q.c
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
d=q.aH0(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cSi(a1,w,a3.d,a2.y,s,a0,v)},
Bu(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Bu)
case 3:q=f
p=B.a.gY(B.a.i(d.toLowerCase()))
o=A.aW(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.X.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.cY(t,x.f)
p=A.cD(p,new C.fPa(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.B(new A.Y(p,new C.fPb(),s),s.k("M.E"))
B.d.b_(p,new C.fPc())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bu,v)},
ajj(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ajj=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.v8:D.l5
a7=C.Hy(b2,b3)
w=2
return A.b(C.Bu(b1),$async$ajj)
case 2:a8=b5
a9=J.cG(a8)
b0=a9.bk(a8,new C.h2_(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bFk(b1,b2),$async$ajj)
case 5:case 4:if(b0===-1){u=b2.aH5(a6,a7)
a9.ca(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.zB?i:l.c
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
s.n(0,m,l.aH0(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b8<2>")
s=A.B(new A.b8(s,k),k.k("M.E"))
k=a5?D.v8:D.l5
u=t.cSk(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.S3(b1,a8),$async$ajj)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aRP(B.a.i(b3.toLowerCase()),u),$async$ajj)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ajj,v)},
hDP(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).ab().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,aa<p,@>>"),k=A.B(new A.N(m,C.hM9(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.ab().ag(),"updatedAt",o],r,x.K),"createdAt",s.ab().ag(),"updatedAt",o],r,x.z)},
hDQ(d,e){var w=new A.V(Date.now(),0,!1).ab().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,aa<p,@>>")
u=A.B(new A.N(u,C.hM9(),t),t.k("ak.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.ab().ag(),"updatedAt",w],x.N,x.z)},
if1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.amT(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hnM(),A.T(j).k("N<1,p>")).c0(0,new C.fvg())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.v8
else s=B.d.q(t,u)?D.Pz:D.l5
return w.aH5(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.amT(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.cY(q,h)
h=A.cD(h,new C.fvh(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.B(new A.Y(h,new C.fvi(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.ba(n,new C.fvj(),x.N).c0(0,new C.fvk())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.v8
else s=B.d.q(t,u)?D.Pz:D.l5
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
j=A.aI(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.i.M(j)
if(j==null)j=0
return new C.l1(h,r,p,!m,t,o,l,j,v,s,B.ck)},
fvt(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fvt=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fvx()
h=x.N
g=x.z
w=7
return A.b(A.ie(A.a([A.lM("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.lM("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.lM("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fvt)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.S(h,g)
h=A.B(p,g)
l=h
J.h3(l,o)
J.h3(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aJ(m,j,k)}l=m
h=A.a4(l).k("b8<2>")
h=A.cD(new A.b8(l,h),new C.fvu(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.B(new A.Y(h,new C.fvv(),l),l.k("M.E"))
B.d.b_(l,new C.fvw())
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
return A.i($async$fvt,v)},
ihu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dP(e,new C.fzU(),v).c0(0,new C.fzV())
t=A.cZ(u,u.$ti.k("M.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hy(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.l5){m=q.e
m=!new A.N(m,A.hnM(),A.T(m).k("N<1,p>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.iqr(l,v)
o=C.Hy(k,w)
p=v.d
s.n(0,u,o===w?k.bgD(p,D.v8):k.bgD(p,v.y))}j=s.$ti.k("b8<2>")
j=A.B(new A.b8(s,j),j.k("M.E"))
B.d.b_(j,new C.fzW())
return j},
S3(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$S3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$S3)
case 2:u=g
t=B.a.gY(B.a.i(d.toLowerCase()))
s=J.ba(e,new C.fCV(),x.a)
s=A.B(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aF("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.av(s,null)),$async$S3)
case 3:return A.h(null,v)}})
return A.i($async$S3,v)},
aRP(d,e){return C.imL(d,e)},
imL(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aRP=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mf("family_trees",A.a([C.hDP(e,d)],p),null,B.cS),$async$aRP)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mf("family_trees",A.a([C.hDQ(e,d)],p),null,B.cS),$async$aRP)
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
return A.i($async$aRP,v)},
aRQ(d,e){return C.imM(d,e)},
imM(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aRQ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,aa<p,@>>")
m=n.k("ak.E")
l=A.B(new A.N(e,new C.fIf(d),n),m)
r=l
w=7
return A.b(A.mf("family_trees",r,null,B.cS),$async$aRQ)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.N(e,new C.fIg(d),n),m)
p=k
w=8
return A.b(A.mf("family_trees",p,null,B.cS),$async$aRQ)
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
return A.i($async$aRQ,v)},
fuM(d){return C.ief(d)},
ief(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fuM=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Su("family_trees",A.J(["id",d],x.N,x.z),null,B.cS),$async$fuM)
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
return A.i($async$fuM,v)},
rx:function rx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lI:function lI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cIg:function cIg(){},
cIf:function cIf(){},
cId:function cId(){},
cIe:function cIe(){},
IF:function IF(d,e){this.a=d
this.b=e},
i7:function i7(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
amS:function amS(d,e){this.a=d
this.b=e},
fLw:function fLw(){},
haX:function haX(d){this.a=d},
fJ0:function fJ0(d){this.a=d},
l1:function l1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bUq:function bUq(){},
bUp:function bUp(){},
bUm:function bUm(){},
bUn:function bUn(){},
bUo:function bUo(){},
fza:function fza(){},
fuI:function fuI(){},
fuJ:function fuJ(){},
fuK:function fuK(){},
h2o:function h2o(){},
h2p:function h2p(){},
h2q:function h2q(){},
h2r:function h2r(d){this.a=d},
h2s:function h2s(){},
haV:function haV(d){this.a=d},
fM_:function fM_(d){this.a=d},
fPd:function fPd(){},
fPe:function fPe(){},
fPf:function fPf(){},
fPg:function fPg(){},
fPh:function fPh(d){this.a=d},
h2b:function h2b(d){this.a=d},
haQ:function haQ(){},
haR:function haR(){},
haS:function haS(d){this.a=d},
fLH:function fLH(d){this.a=d},
fLI:function fLI(d){this.a=d},
hb0:function hb0(){},
fLb:function fLb(d){this.a=d},
fLc:function fLc(d,e){this.a=d
this.b=e},
fLd:function fLd(){},
hao:function hao(d){this.a=d},
fQ4:function fQ4(){},
h24:function h24(){},
fPa:function fPa(){},
fPb:function fPb(){},
fPc:function fPc(){},
h2_:function h2_(d){this.a=d},
fvg:function fvg(){},
fvh:function fvh(){},
fvi:function fvi(){},
fvj:function fvj(){},
fvk:function fvk(){},
fvx:function fvx(){},
fvy:function fvy(d){this.a=d},
fvu:function fvu(d){this.a=d},
fvv:function fvv(){},
fvw:function fvw(){},
fzU:function fzU(){},
fzV:function fzV(){},
fzW:function fzW(){},
fCV:function fCV(){},
fIf:function fIf(d){this.a=d},
fIg:function fIg(d){this.a=d},
cIh:function cIh(d,e){this.a=d
this.b=e},
cIi:function cIi(d,e){this.a=d
this.b=e},
aJJ:function aJJ(d,e,f){this.a=d
this.b=e
this.c=f},
bbY:function bbY(){this.b=this.a=0},
bbX:function bbX(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bzL:function bzL(){},
xu(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcg()+"/"+w.gcv()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.b1(B.o.v(w.gnB()),2,"0")+":"+B.a.b1(B.o.v(w.gH1()),2,"0")},
inQ(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.br(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.bY(new A.r(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.v.j(0.22)
$.R()
u=A.L()
u.r=v.gp(0)
a5.c1(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=B.ho[l]*a7*0.075
j=k-w
j=A.bu(new A.a2(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.T,B.Q,B.V,B.W,B.U)
i.r=B.dg.gp(0)
a5.aq(j,i)
k-=q
k=A.bu(new A.a2(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.T,B.Q,B.V,B.W,B.U)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bu(new A.a2(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bu(new A.a2(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a5(0,new A.r(s,a7*0.17)),A.ahN(B.td,t))
s=g.a5(0,new A.r(s,a7*0.18))
q=A.L()
q.r=B.td.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a5(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,A.ahN(B.td,t))
w=A.L()
w.r=B.td.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a5(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=B.mi.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=B.td.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bX(a0,a1)
u=A.L()
u.r=B.mi.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bX(a0,a1)
u=A.L()
u.r=B.mi.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=B.ho[l]
t=new A.ar(B.T,B.Q,B.V,B.W,B.U)
t.r=B.mi.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.i.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=B.ho[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.T,B.Q,B.V,B.W,B.U)
k.b=B.ab
k.c=1.6
k.r=B.bq.gp(0)
k.d=B.bG
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.ar(B.T,B.Q,B.V,B.W,B.U)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.T,B.Q,B.V,B.W,B.U)
j.r=B.v.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=B.hY.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bY(a0.a5(0,new A.r(0,a1*0.5)).aJ(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,A.ahN(B.bq,1.8))
a4.restore()},
i4O(){var w,v=$.oz(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hh(u)},
auP(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$auP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cb(),$async$auP)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$auP)
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
return A.i($async$auP,v)},
auQ(d){return C.i4P(d)},
i4P(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$auQ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cb(),$async$auQ)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hT("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.z),!1,!1,B.cS,null),$async$auQ)
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
return A.i($async$auQ,v)},
auS(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$auS=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.cb(),$async$auS)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i4O()
w=4
return A.b(C.auP(),$async$auS)
case 4:r=h
q=B.a.i(e)
p=B.dY.aK(t)
J.aJ(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cM.gco().aK(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],x.N,x.K))
w=5
return A.b(C.auQ(r),$async$auS)
case 5:u=new A.a1T("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auS,v)},
auR(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$auR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.cb(),$async$auR)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.auP(),$async$auR)
case 4:q=f
p=J.a6(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a6(o)
m=A.aI(n.h(o,"usesRemaining"))
l=m==null?null:B.i.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cc.cE(0,B.cE.aK(t))}catch(h){r=A.ac(h)
$.am.$1("[worksheet qr stash] decode: "+A.v(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dG(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().ag())
p.n(q,i,m)}w=5
return A.b(C.auQ(q),$async$auR)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auR,v)},
hyb(){var w=new A.V(Date.now(),0,!1).ab()
return"wst_"+(1000*w.a+w.b)+"_"+B.cV.aw(999999)},
i4Q(d){var w,v,u,t,s,r,q
try{w=A.Bs(d)
if(w==null)return d
v=w
if(J.Mw(v)>960||J.Mv(v)>960){s=v
r=J.Mw(v)>=J.Mv(v)?960:null
v=A.So(s,J.Mv(v)>J.Mw(v)?960:null,B.IK,r)}s=v
u=A.J0(82).zA(s,B.rg)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ca(u))
return s}catch(q){t=A.ac(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
cqz(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cqz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i4Q(e)
$.cqv.n(0,s,t)
u=C.bHt(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cqz,v)},
b5E(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b5E=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d5(l,"data:image")){u=null
w=1
break}t=4
r=J.eC(l,",")?B.d.gal(J.lP(l,",")):l
q=B.cE.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hyb()
w=7
return A.b(C.cqz(p,q),$async$b5E)
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
return A.i($async$b5E,v)},
cqw(d){var w=0,v=A.j(x.T),u,t,s
var $async$cqw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.X(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.cqy(s),$async$cqw)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cM.gco().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cqw,v)},
aaa(d){var w=0,v=A.j(x.H),u,t
var $async$aaa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hLR(d)
if(t==null){w=1
break}$.cqv.W(0,t)
w=3
return A.b(C.bHs(t),$async$aaa)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aaa,v)},
bHt(d,e){return C.iwW(d,e)},
iwW(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bHt=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aQC
w=7
return A.b(n==null?$.aQC=A.hjW():n,$async$bHt)
case 7:r=g
q=new Uint8Array(A.ca(e))
p=J.mk(r,"thumbs","readwrite")
B.iN.mj(J.mj(p,"thumbs"),q,l)
w=8
return A.b(J.oC(p),$async$bHt)
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
return A.i($async$bHt,v)},
bHs(d){return C.iwU(d)},
iwU(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bHs=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aQC
w=7
return A.b(o==null?$.aQC=A.hjW():o,$async$bHs)
case 7:r=f
q=J.mk(r,"thumbs","readwrite")
B.iN.GB(J.mj(q,"thumbs"),m)
w=8
return A.b(J.oC(q),$async$bHs)
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
return A.i($async$bHs,v)}},D,N,W,X,Y,F,Z,O,P,Q,A_,R,A0,S,A1,L,G
J=c[1]
A=c[0]
B=c[2]
T=c[89]
U=c[60]
H=c[112]
M=c[98]
I=c[104]
V=c[24]
E=c[52]
K=c[39]
C=a.updateHolder(c[4],C)
D=c[108]
N=c[85]
W=c[109]
X=c[79]
Y=c[88]
F=c[47]
Z=c[69]
O=c[61]
P=c[70]
Q=c[84]
A_=c[110]
R=c[111]
A0=c[40]
S=c[94]
A1=c[25]
L=c[58]
G=c[81]
C.aqs.prototype={}
C.b0U.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bkY(),f=h.x!=null&&h.zV(i).length===0
if(h.x!=null)w=f?B.b5:B.bE
else w=h.gV3()?B.bE:B.eb
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.K(D.bs1,B.r,1)
s=x.p
r=A.o(i,A.x(A.a([A.o(i,D.flU,B.f,i,i,new A.n(B.b5.j(0.12),i,i,A.m(999),i,i,B.m),i,i,i,i,B.hj,i,i,i),B.S,D.fS8,B.au,A.c(C.xu(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fNI,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,D.b9C,i,i,i,i,B.P7,i,i,i)
q=A.m(16)
p=A.K(B.bn,B.r,1)
o=A.K(B.b5.j(0.28),B.r,1)
n=A.hmc(h.d)
o=A.o(B.z,C.b0T(A.fSq(h.e,n),30),B.f,i,i,new A.n(B.ml,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fIE,B.K,i,i)
m=A.m(14)
l=A.K(B.bn,B.r,1)
q=A.o(i,A.x(A.a([o,B.P,n,B.bC,D.fSr,B.af,A.o(i,A.x(A.a([D.h7M,B.bC,A.c(A.Bw(h.c),i,i,i,i,i,i,D.fDb,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.c,i,l,m,i,i,B.m),i,i,i,i,B.f7,i,i,1/0)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.aS,i,p,q,i,i,B.m),i,i,i,i,G.anF,i,i,i)
p=A.m(16)
m=A.K(B.bn,B.r,1)
l=j.aUf("Original due",C.xu(h.r,!1))
n=j.aUf("Current due",C.xu(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.o(i,A.x(A.a([l,B.P,n,B.S,A.o(i,A.c(h.gaOb(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.n(o,i,i,k,i,i,B.m),i,i,i,i,B.wT,i,i,1/0),B.S,j.cmL(),B.P,j.c98(g,f)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.K(B.bn,B.r,1)
B.d.u(p,A.a([B.S,A.o(i,A.x(A.a([D.fTr,B.au,A.c(q,i,i,i,i,i,i,D.fHP,i,i,i)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.aS,i,n,o,i,i,B.m),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaIM()){q=A.m(14)
o=A.K(B.cB,B.r,1.6)
B.d.u(p,A.a([B.S,A.o(i,A.x(A.a([D.h95,B.P,A.bv(A.m(12),A.ec(new A.a5(1/0,88,A.b4(i,i,i,new A.XB(h.ax,B.a_,D.fqI,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.c,i,o,q,i,i,B.m),i,i,i,i,B.CV,i,i,i)],s))}p.push(B.aA)
p.push(D.h0S)
return A.o(i,A.x(A.a([r,new A.D(B.a1L,A.x(p,B.am,i,B.e,B.h,0,B.p),i)],s),B.am,i,B.e,B.M,0,B.p),B.aq,i,i,new A.n(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aUf(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.ad4,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fEe,w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
cmL(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.abc(B.eb,u,"Not paid yet")
w=t.zV(null).length
v=w===0?B.b5:B.bE
return this.abc(v,u,C.xu(t.x,!0))},
c98(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.abc(B.b5,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.abc(B.b5,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.ad4,u,u,u)
v=A.T(d).k("N<1,h9>")
v=A.B(new A.N(d,new C.c9K(),v),v.k("ak.E"))
return A.x(A.a([w,B.al,A.bZ(B.bI,v,B.br,u,6,6)],x.p),B.B,u,B.e,B.h,0,B.p)},
abc(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.ad4,w,w,w),1),new A.d1(1,B.cf,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e5,w,w),w)],x.p),B.B,w,B.e,B.h,0,w,w)}}
C.bec.prototype={
a2(d,e){new A.XB(this.b,B.a_,e,!0,3.5,null).a2(d,e)},
aD(d){return d.b!==this.b}}
C.aqF.prototype={
S(){return new C.aFu(A.a([],x.bp))},
ge3(){return this.c}}
C.aFu.prototype={
Z(){this.a4()
this.JA()},
JA(){var w=0,v=A.j(x.H),u,t=this,s
var $async$JA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3K(t.a.c),$async$JA)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dSX(t,s))
case 1:return A.h(u,v)}})
return A.i($async$JA,v)},
aWd(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.l(v,v,u?B.bu:B.bi,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bu:B.bi).j(0.22)
w=A.m(10)
return A.bA(v,new A.b6(4,r,new A.av(u,1,B.r,-1)),v,B.bl,v,v,v,v,!0,new A.b6(4,w,new A.av((this.a.d.a?B.bu:B.bi).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.m(10),D.b7g),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aWc(d){return this.aWd(d,null)},
Qx(d){return this.cqt(d)},
cqt(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qx=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.IJ:B.eY
w=7
return A.b(new A.i8().D1(72,900,900,n),$async$Qx)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fs(),$async$Qx)
case 8:p=f
n=B.cM.gco().aK(p)
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
if(n!=null)n.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c("Could not pick photo: "+A.v(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Qx,v)},
b4y(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.m(10),n=A.K((q?B.bu:B.bi).j(0.18),B.r,1)
if(d)q=B.cU
else q=s.a.d.a?B.bu:B.bi
q=A.W(e,q,r,r,r,18)
w=A.c(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cU
else u=s.a.d.a?B.bu:B.bi
t=x.p
u=A.E(A.x(A.a([w,A.c(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.B,r,B.e,B.h,0,B.p),1)
v=A.fs(r,r,r,r,r,r,r,r,r,r,r,B.cU,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cl)
q=A.a([q,B.aa,u,A.bO(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.W(B.cA,s.a.d.a?B.bu:B.bi,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cl))
return A.o(r,A.A(q,B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.n(p,r,n,o,r,r,B.m),r,r,r,B.jg,D.bFe,r,r,r)},
DV(d){return this.bFc(d)},
bFb(){return this.DV(null)},
bFc(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DV=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.at(new A.bd(a4,B.b8,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.i.fM(a4)
p=a5.c
a4=a4===q?B.o.v(B.i.M(p)):B.i.aa(p,2)}o=new A.at(new A.bd(a4,B.b8,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.at(new A.bd(a4,B.b8,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bQ(6048e8)
m=A.c0(a4.gck(),a4.gcg(),a4.gcv(),0,0,0,0,0)}else{a4=a5.f
m=A.c0(a4.gck(),a4.gcg(),a4.gcv(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bs(a4,!0,x.cT)
i=a3?null:A.hmc(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xG?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hU(B.v.j(0.55),!0,"Dismiss",a4,new C.dSG(),new C.dSH(a2,t,a5,r,new C.dSI(a2,t),o,n,j),B.eI,!0,x.y),$async$DV)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cF(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.V$=s
r.R$=0
o.V$=s
o.R$=0
n.V$=s
n.R$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.U(D.fxh)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.U(D.fvW)
w=1
break}a1=A.fSq(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xG?"male":"female"
w=7
return A.b(A.ajA(a3,A.huN(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DV)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xG?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c0(a3.gck(),a3.gcg(),a3.gcv(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gck(),a4.gcg(),a4.gcv(),0,0,0,0,0)))a5.cUF(a2.a)
w=8
return A.b(A.ajA(t.a.c,a5),$async$DV)
case 8:case 5:w=9
return A.b(t.JA(),$async$DV)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DV,v)},
aWT(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cU.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cU
else s=(this.a.d.a?B.bu:B.bi).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b0T(d,18)
if(g)q=B.cU
else q=this.a.d.a?B.aS:B.aw
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,A.o(p,A.A(A.a([r,B.bj,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.b9,B.h,0,p,p),B.f,p,p,new A.n(p,p,s,t,p,p,B.m),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Tm(d){return this.cIC(d)},
cIC(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Tm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hU(B.v.j(0.55),!0,"Dismiss",s,new C.dT_(),new C.dT0(t,d),B.hi,!0,x.y),$async$Tm)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.ajA(t.a.c,d),$async$Tm)
case 7:w=8
return A.b(t.JA(),$async$Tm)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Tm,v)},
Qw(d,e){return this.bQf(0,e)},
bQf(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lp(s,"Cancel","Delete",e.b+" \xb7 "+A.Bw(e.c)+" will be removed from this device.","Delete this debt?"),$async$Qw)
case 3:if(!g){w=1
break}w=4
return A.b(C.fLO(t.a.c,e.a),$async$Qw)
case 4:w=5
return A.b(t.JA(),$async$Qw)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qw,v)},
ah5(d){return this.ck8(d)},
ck8(d){var w=0,v=A.j(x.H),u=this,t
var $async$ah5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dSU(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ah5)
case 2:return A.h(null,v)}})
return A.i($async$ah5,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eB4
w=J.dI(m.d,new C.dT1())
v=A.B(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dT2())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cC(v,0,new C.dT3())
w=A.m(18)
s=m.a.d.a
r=s?D.cG5:D.aEN
q=A.K(s?B.cU.j(0.35):B.cU.j(0.18),B.r,1)
s=A.o(l,D.c6s,B.f,l,l,new A.n(B.cU.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.ar,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a3,!0,A.m(12),A.aM(!1,A.m(12),!0,D.eAp,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dT4(m),l,l,l,l,l,l,l),B.f,B.cU,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.h,0,l,l)
o=A.E(m.cED("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bw(t)
r=A.a([A.o(l,A.x(A.a([s,B.af,A.A(A.a([o,B.aa,A.E(m.baM(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.h,0,l,l)],p),B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.n(l,l,q,w,l,new A.a7(B.ay,B.aC,B.x,r,l,l),B.m),l,l,l,l,B.anC,l,l,l),B.aA],p)
if(J.cu(m.d)){w=m.a.d.a
s=w?B.ek:B.c
q=A.m(18)
o=A.K((w?B.bu:B.bi).j(0.12),B.r,1)
n=A.o(l,D.c1_,B.f,l,l,new A.n(B.cU.j(0.12),l,l,A.m(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,15,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.o(l,A.x(A.a([n,B.af,w,B.au,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bi,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.h,0,B.p),B.f,l,l,new A.n(s,l,o,q,l,l,B.m),l,l,l,l,D.bHY,l,l,1/0))}else{w=m.gcpH()
s=A.B(new A.N(v,w,A.T(v).k("N<1,w>")),x.l)
if(u.length!==0){q=A.a([B.al,new A.D(D.bJE,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bi,l,l,l,l,l,l,l,l,12,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.N(u,w,A.T(u).k("N<1,w>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.am,l,B.e,B.h,0,B.p)},
baM(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.v.j(0.22):B.c.j(0.85),s=A.m(14),r=A.K((v.a.d.a?B.bu:B.bi).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bu:B.bi,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cU
else w=v.a.d.a?B.aS:B.aw
return A.o(u,A.x(A.a([q,B.bC,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.B,u,B.e,B.h,0,B.p),B.f,u,u,new A.n(t,u,r,s,u,u,B.m),u,u,u,u,B.ey,u,u,u)},
cED(d,e){return this.baM(!1,d,e)},
cpI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zV(j).length,h=d.bkd()
if(d.x!=null){w=d.zV(j).length
v=w===0?B.cU:B.bE}else if(d.gV3())v=B.bE
else{if(h)w=B.cU
else w=k.a.d.a?B.bu:B.bi
v=w}if(d.x!=null){w=d.zV(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xu(u,!1)}else{u.toString
t="Paid "+C.xu(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xu(w,!1)+" \xb7 "+i+" missed":"Due "+C.xu(w,!1)}w=k.a.d.a?B.ek:B.c
u=A.m(18)
if(d.gV3()&&d.x==null)s=B.bE.j(0.35)
else s=(k.a.d.a?B.bu:B.bi).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.H,B.v.j(0.04),B.cO,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bs:B.ml
o=A.K(d.gV3()&&d.x==null?B.bE.j(0.45):B.cU.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hmc(d.d)
o=A.o(B.z,A.d2(C.b0T(A.fSq(d.e,m),24),n),B.f,j,j,new A.n(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.aw
m=x.p
n=A.a([new A.d1(1,B.cf,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.F,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaIM())B.d.u(n,A.a([B.e4,A.W(B.Q_,B.cU.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.h,0,j,j),B.cT,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.B,j,B.e,B.h,0,B.p),1)
n=A.Bw(d.c)
l=k.a.d.a?B.aS:B.aw
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.o(j,A.aF(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(W.anq,A.A(A.a([o,B.bb,p,B.aa,A.x(A.a([n,B.bC,A.W(B.eL,(k.a.d.a?B.bu:B.bi).j(0.5),j,j,j,18)],m),B.dI,j,B.e,B.h,0,B.p)],m),B.l,j,B.e,B.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dSW(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.n(w,j,s,u,r,j,B.m),j,j,j,B.d4,j,j,j,j)}}
C.uX.prototype={}
C.amG.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.b7
u=v?B.B:B.l
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.ab(0,B.H,B.v.j(0.45),B.cz,16)],x.V)
o=x.p
n=A.a([],o)
m=B.v.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.ay(a0,A.o(a0,A.W(B.cA,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.n(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iZ,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.c(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aAV,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.HM,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.dk(B.dv,m,B.f,A.A(l,B.l,a0,B.e,B.M,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bEq,A.c(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cL:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fB,A.x(a2,u,a0,B.e,B.M,0,B.p),a0),1))
n.push(D.frw)
a2=A.a([A.A(n,B.l,a0,B.e,B.h,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.wS,A.o(a0,a0,B.f,a0,a0,new A.n(a0,a0,a0,a0,a0,new A.a7(B.a5,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.m),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.m0,A.x(a2,B.l,a0,B.e,B.M,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.o(a0,e,B.f,a0,a0,new A.n(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hL,a0,a0,a0,a0)}return A.o(a0,e,B.f,a0,a0,new A.n(a0,a0,q,s,p,new A.a7(B.ay,B.aC,B.x,a1.d,a0,a0),B.m),a0,a0,a0,D.bFI,a0,a0,a0,a0)}}
C.aXC.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.o(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.b7?B.b7:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.c(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cL,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.h,0,q,q),B.cT,n],m)
if(p.z)o.push(new A.D(B.v_,n,q))
return new A.D(B.d4,A.x(o,B.l,q,B.e,B.M,0,B.p),q)}}
C.Un.prototype={
S(){return new C.bhP()}}
C.bhP.prototype={
gc3K(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aE(d,n,x.w).w,l=x.p,k=A.a([D.eB_,D.eB5],l)
for(w=0;w<8;++w){v=D.a6a[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Ix:B.A1
q=t===s
r=A.W(r,q?B.eE:B.bV,n,n,n,17)
q=q?B.c:B.ac
r=A.a([r,B.bj,A.c(v.b,n,n,n,n,n,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aa,new A.bx(1,B.ba,A.c(v.c,n,1,B.a2,n,n,n,B.Bo,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.av(B.eE,2,B.r,-1)
s=new A.n(n,n,new A.bE(p,p,p,p),new A.bb(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.ay(n,new A.D(B.eR,A.x(A.a([new A.D(B.nb,new A.c3(B.aL,B.e,B.h,B.l,n,B.p,n,0,r,n),n),A.o(n,new A.dp(!0,new C.amG(v,q.d,q.e,new C.diw(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.B,n,B.e,B.h,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dix(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bG6,A.bJ(D.heH,n,new C.diy(o,d),A.bn(B.b2,n,n,n,n,B.pf,n,n,new A.b9(A.m(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cO(new A.aY(0,1/0,0,m.a.b*0.9),A.cn(k,n,n,D.bKA,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nx.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.ab().ag()],x.N,x.z)},
bgP(d,e,f){return new C.nx(this.a,e,d,f)}}
C.IE.prototype={
x8(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.IE(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aGU(d){var w=null
return this.x8(w,w,w,w,w,d,w,w,w,w,w,w)},
cQh(d){var w=null
return this.x8(w,w,w,w,d,w,w,w,w,w,w,w)},
bgN(d,e,f){var w=null
return this.x8(d,w,w,w,w,w,w,w,e,w,f,w)},
cQW(d){var w=null
return this.x8(w,w,w,w,w,w,d,w,w,w,w,w)},
cR4(d){var w=null
return this.x8(w,w,w,w,w,w,w,w,w,d,w,w)},
cQf(d){var w=null
return this.x8(w,w,w,d,w,w,w,w,w,w,w,w)},
cR6(d){var w=null
return this.x8(w,w,w,w,w,w,w,w,w,w,w,d)},
cQc(d){var w=null
return this.x8(w,w,d,w,w,w,w,w,w,w,w,w)},
cQ7(d){var w=null
return this.x8(w,d,w,w,w,w,w,w,w,w,w,w)},
Gt(d){var w=null
return this.x8(w,w,w,w,w,w,w,d,w,w,w,w)},
cRe(d,e,f,g,h,i,j,k,l,m,n){return this.x8(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cNM(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bT7(d),k=A.aI(d.h(0,"emblem")),j=k==null?o:B.i.M(k),i=A.aI(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Ev.gew(D.Ev))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a7T)
q=l.$2("frame",D.a7c)
l=l.$2("texture",D.a78)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cRe(p,u,t,q,r,A.rm(d.h(0,"ribbon"))?A.Ha(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a02.prototype={
S(){return new C.aCs(A.a([],x.I),D.Py)},
ge3(){return this.c}}
C.aCs.prototype={
Z(){var w,v=this
v.a4()
v.f=A.Ao(0,1)
w=$.ax()
v.z=new A.at(B.ax,w)
v.Q=new A.at(B.ax,w)
v.lh()
w=v.a
C.bFK(w.c,w.d).bF(new C.djc(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.d()
u.t()
u=v.z
u===$&&A.d()
w=$.ax()
u.V$=w
u.R$=0
u=v.Q
u===$&&A.d()
u.V$=w
u.R$=0
v.a3()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LY(s.c,s.d),$async$lh)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.dj0(t,r))
t.ayx()
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
gav4(){var w,v=this
if(!J.cu(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
ayx(){var w,v,u=this.gav4(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb2(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb2(0,w==null?"":w)},
cix(d){this.l(new C.diY(this,d))
this.ayx()},
Oo(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Oo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nx(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aTK(r.c,r.d,s),$async$Oo)
case 3:w=4
return A.b(t.lh(),$async$Oo)
case 4:if(t.c==null||J.cu(t.d)){w=1
break}q=J.oD(t.d,new C.diz(s))
p=q>=0?q:J.ad(t.d)-1
t.l(new C.diA(t,p))
t.ayx()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.C_(p+1,B.cn,B.l2),$async$Oo)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Oo,v)},
BE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$BE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.d()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.d()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gav4()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aTK(o.c,o.d,new C.nx(s,r,q,new A.V(p,0,!1))),$async$BE)
case 3:w=4
return A.b(t.lh(),$async$BE)
case 4:if(t.c==null){w=1
break}t.l(new C.dj1(t))
case 1:return A.h(u,v)}})
return A.i($async$BE,v)},
P6(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gav4()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.diI(r),s,null,!0,!0,x.y),$async$P6)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bFu(s.c,s.d,r.a),$async$P6)
case 4:t.l(new C.diJ(t))
w=5
return A.b(t.lh(),$async$P6)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.V6(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$P6,v)},
zg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BE(),$async$zg)
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
return A.b(C.Sm(s,r.r,o,p,q),$async$zg)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a8(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hMD(s,r.x,r.r),$async$zg)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LY(s.c,s.d),$async$zg)
case 10:l=e
for(s=n.d,r=J.cG(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nx(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BF(r.c,r.d,l),$async$zg)
case 11:w=12
return A.b(t.lh(),$async$zg)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zg,v)},
a2c(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a2c=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BE(),$async$a2c)
case 5:case 4:if(t.c==null){w=1
break}s=t.gze(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dA(D.Aq,new C.diZ(t),new C.dj_())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new A.o8("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gP(o)
p.push(new A.o8(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(A.ho2(o,new A.tT(s,r,"",p,new A.vd(q.d,null,null,null,null,"","","")),null),$async$a2c)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a2c,v)},
OO(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$OO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BE(),$async$OO)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.aik,null,new C.diE(t),s,!0,!0,!0,E.abc,!1,!1,x.N),$async$OO)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cQh(r)
t.l(new C.diF(t,q))
s=t.a
w=7
return A.b(C.T_(s.c,s.d,q),$async$OO)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OO,v)},
Yn(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.aik,null,new C.diK(t),r,!0,!0,!0,E.abc,!1,!1,x.e),$async$Yn)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.diL(t,s))
r=t.a
w=4
return A.b(C.T_(r.c,r.d,s),$async$Yn)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.C_(0,B.e7,B.n8)
case 1:return A.h(u,v)}})
return A.i($async$Yn,v)},
bVV(d){var w=d.bU(),v=B.a.b1(B.o.v(w.gcg()),2,"0"),u=B.a.b1(B.o.v(w.gcv()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gze(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c2Y()
if(r.e)w=D.ah_
else if(J.cu(r.d)){w=r.y
v=r.gze(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fCx,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(I.aoM,new C.a_i(w,v,0,q),q),q),B.bx,t,B.al,A.c(u,q,q,q,q,q,q,A.l(q,q,D.kW.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.ay(q,A.o(q,D.flF,B.f,q,q,new A.n(q,q,q,A.m(18),A.a([new A.ab(0,B.H,B.dV.j(0.45),B.J,18)],x.V),B.xw,B.m),q,q,q,q,B.Pb,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcMO(),q,q,q,q,q,q,!1,B.a4))
w.push(B.S)
w.push(A.hq(D.bXZ,D.he8,r.gaPT(),q))
B.d.u(u,w)}w=A.as(A.c9(A.x(u,B.l,q,B.e,B.M,0,B.p),B.t,q,B.y,q,q,B.eF,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.kW.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.e3:B.C_
u=A.x(A.a([new A.D(D.bHc,w,q),A.E(A.K0(v,new C.dja(r),J.ad(r.d)+1,q,r.gciw(),u,B.aL),1),r.bI9()],x.p),B.l,q,B.e,B.h,0,B.p)
w=u}v=x.p
return A.c5(q,D.a_r,new A.an(B.a0,q,B.b4,B.t,A.a([D.aSo,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c2Y(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cK(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.L0(B.ee,"AI",h.gbFZ(),!0))
if(h.a.f)f.push(new C.L0(B.m3,"Cover",h.gbQP(),!1))
if(h.a.f)f.push(new C.L0(B.xo,"Header",h.gbLL(),!1))
if(J.cK(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.L0(B.vp,"Print",h.gcrP(),!1))
if(h.a.f&&J.cK(h.d)&&h.r>=0){v=h.w
u=v?B.hm:B.jj
t=v?"Save":"Edit"
f.push(new C.L0(u,t,v?h.gcyc():new C.diV(h),!1))}if(h.a.f)f.push(new C.L0(B.ia,"Add page",h.gaPT(),!1))
v=C.hI8(h.y.Q)
u=h.gze(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dPe
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.av(B.kC.j(0.5),1,B.r,-1)
j=A.o(g,A.W(l.a,D.kW,g,g,g,17),B.f,g,g,new A.n(g,g,new A.bE(i,i,i,i),new A.bb(k,k,k,k),g,new A.a7(B.a5,B.a9,B.x,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.kW.j(0.85)
p.push(new A.bx(1,B.ba,A.ay(B.c1,A.x(A.a([k,B.bC,A.c(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.F,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.M,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.amG(v,u,t+" \xb7 "+s+" "+r,new C.diW(h),A.A(p,B.l,g,B.e,B.h,0,g,g),g)},
AA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BE(),$async$AA)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=A.a4_(B.d.aM(s," "))
s=t.c
s.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.diB(t,p),s,null,!0,!0,x.N),$async$AA)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zg(),$async$AA)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Eu(),$async$AA)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.G5("Swahili (Kiswahili)",!0),$async$AA)
case 18:w=16
break
case 17:w=19
return A.b(t.cJf(o==="sw"?"Swahili (Kiswahili)":"English"),$async$AA)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$AA,v)},
a_n(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.K(B.kC.j(0.3),B.r,1),r=x.p
return new A.D(B.cy,A.aM(!1,v,!0,A.o(w,A.A(A.a([A.o(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.n(w,w,w,w,w,B.xw,B.a6),w,42,w,w,w,w,w,42),B.bb,A.E(A.x(A.a([A.c(f,w,w,w,w,w,w,B.Lw,w,w,w),A.c(g,w,w,w,w,w,w,B.Fq,w,w,w)],r),B.B,w,B.e,B.h,0,B.p),1)],r),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.n(u,w,s,t,w,w,B.m),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.diX(d,h),w,w,w,w,w,w,w),w)},
Eu(){return this.bVo()},
bVo(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Eu=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.diO(r),a7,null,!0,!0,x.ei),$async$Eu)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eF("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.cg(null,null,!1,null,new C.diP(o),a7,null,!0,!0,x.H).fw(new C.diQ(a6))
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
for(a1=0;a1<8;++a1){i=D.Aq[a1]
J.c6(j,i.a)}w=8
return A.b(C.aiH(a0,a7,new C.diR(o),d,l,e,j),$async$Eu)
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
l.sij($.ax())
J.aUc(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.U(A.b2(null,null,null,null,null,B.t,null,A.c(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcn(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bgP(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BF(j.c,j.d,l),$async$Eu)
case 11:w=12
return A.b(r.lh(),$async$Eu)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.Aq[a1].a)
a5=l.cNM(j,12,a7)
l=r.a
w=15
return A.b(C.T_(l.c,l.d,a5),$async$Eu)
case 15:if(r.c!=null)r.l(new C.diS(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.C_(0,B.e7,B.n8)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b2(a3?A.cC4("Undo",new C.diT(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.en,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eu,v)},
G5(d,e){return this.cJg(d,e)},
cJf(d){return this.G5(d,!1)},
cJg(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$G5=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eF("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.cg(null,null,!1,null,new C.dj3(a0),k,null,!0,!0,x.H).fw(new C.dj4(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c6(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(A.a4e(m,new C.dj5(a0)),$async$G5)
case 10:w=8
break
case 9:w=11
return A.b(C.bHi(new C.dj6(a0),m,a2),$async$G5)
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
o.sij($.ax())
J.aUc(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.U(A.b2(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bgP(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BF(k.c,k.d,o),$async$G5)
case 12:w=13
return A.b(r.lh(),$async$G5)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.X(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(A.cC4("Undo",new C.dj7(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$G5,v)},
bI9(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.diC(v):u
r=A.aH(u,u,u,u,A.W(D.bTA,s?D.kW:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cK(v.d)&&!v.w&&v.r>=0)s=A.hq(A.W(B.x8,B.H9,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.H9,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbQp(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.kW.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.diD(v):u
return A.bm(!0,new A.D(D.bH0,A.A(A.a([r,s,A.aH(u,u,u,u,A.W(B.eL,t<J.ad(v.d)?D.kW:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.h,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a06.prototype={
S(){return new C.bid(new A.at(B.ax,$.ax()))}}
C.bid.prototype={
ga3k(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.a3()},
gbU_(){switch(this.ga3k()){case"cover":var w=D.ddn
break
case"book":w=D.d8v
break
default:w=D.dFJ
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.m(26),n=B.kC.j(0.5),m=x.p,l=A.A(A.a([D.dPf,B.ar,D.bMO,A.aH(p,p,p,p,B.lB,p,p,p,new C.dkZ(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.h,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jA(p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dl_(q),q.ga3k()==="page",p,p,p,p))
if(q.a.d)k.push(A.jA(p,p,p,D.h8D,p,new C.dl0(q),q.ga3k()==="book",p,p,p,p))
k.push(A.jA(p,p,p,D.fWd,p,new C.dl1(q),q.ga3k()==="cover",p,p,p,p))
k=A.bZ(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bA(p,new A.b6(4,A.m(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kw,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dl,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbU_(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,B.Lt,p,p,p)
w.push(A.mE(p,B.c.j(0.08),r,B.hC,new C.dl2(q,s),p,p,p,p))}return A.eI(p,B.Cx,A.c9(A.x(A.a([l,B.S,D.hbY,B.al,k,B.af,j,B.P,A.bZ(B.bI,w,B.br,p,6,6),B.aA,A.d8(D.bXW,p,D.hcL,new C.dl3(q,d),A.bn(B.b2,p,p,p,p,B.pf,p,p,new A.b9(A.m(16),B.a1),p,p,p)),B.au,D.h6O],m),B.B,p,B.e,B.M,0,B.p),B.t,p,B.y,p,p,B.fc,p,p,B.ah),p,p,p,B.P8,p,B.d9,p,new A.b9(o,new A.av(n,1.4,B.r,-1)),p)}}
C.a04.prototype={
S(){return new C.aCv(A.a([],x.gA))},
ge3(){return this.c}}
C.ags.prototype={}
C.aCv.prototype={
Z(){this.a4()
this.lh()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sq(p.c,p.d),$async$lh)
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
return A.b(C.bFK(r.c,q),$async$lh)
case 6:j=e
i=J
w=7
return A.b(C.LY(t.a.c,q),$async$lh)
case 7:m.push(new l.ags(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.djr(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
bc4(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Rl(d,e){return this.ck5(0,e)},
ck5(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a8(s,!1).cb(A.e9(new C.djq(u,e),!0,null,x.y)),$async$Rl)
case 2:t=g
w=3
return A.b(u.lh(),$async$Rl)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.U(D.aWn)
return A.h(null,v)}})
return A.i($async$Rl,v)},
G7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$G7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.U(D.aWi)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ai0(s.c,s.d),$async$G7)
case 5:q=e
w=6
return A.b(t.lh(),$async$G7)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Rl(0,B.d.fb(t.d,new C.djv(q))),$async$G7)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Sm(p,s.f,r,n,o),$async$G7)
case 10:m=e
w=11
return A.b(t.lh(),$async$G7)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.U(D.aWn)
case 1:return A.h(u,v)}})
return A.i($async$G7,v)},
QL(d,e){return this.cvT(0,e)},
cvT(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dju(t,e),s,null,!0,!0,x.y),$async$QL)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a4q(s.c,s.d,e.a),$async$QL)
case 4:w=5
return A.b(t.lh(),$async$QL)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QL,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bIc(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.K(B.kC.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.ay(n,new A.fI(0.7142857142857143,A.o(n,A.x(A.a([D.dPg,B.af,D.eA0,B.au,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kW.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.b9,B.h,0,B.p),B.f,n,n,new A.n(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcMK(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.K(B.kC.j(0.85),B.r,1.6)
s=A.ay(n,A.o(n,D.c5b,B.f,n,n,new A.n(B.v.j(0.3),n,A.K(B.kC.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.djw(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.v.j(0.3)
p=A.K(B.kC.j(0.5),B.r,1)
w=A.o(n,A.A(A.a([s,B.bb,D.bNc,A.o(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fBw,n,n,n),B.f,n,n,new A.n(q,n,p,r,n,n,B.m),n,n,n,n,B.hj,n,n,n)],l),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.n(n,n,v,w,n,D.cbg,B.m),n,n,n,B.OW,D.bEU,n,n,n)
if(o.e)k=D.ah_
else k=k.length===0?D.beZ:A.ce(new C.djx(k))
return A.c5(n,D.a_r,new A.an(B.a0,n,B.b4,B.t,A.a([D.aSo,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bIc(d){var w,v,u=this,t=null,s=u.bc4(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.dk(B.dE,B.z,B.f,new A.a5(300,420,new C.a_i(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.ay(t,A.o(t,D.c4s,B.f,t,t,new A.n(B.v.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.djo(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fB9,t,t,t)
v=r===1?"page":"pages"
return A.ay(t,A.x(A.a([new A.fI(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.P,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kW.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.h,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.djp(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.L0.prototype={}
C.a_i.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dA(D.Aq,new C.cRk(m),new C.cRl()),j=m.c,i=D.Ev.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mC:B.b9
v=new C.cRm(h)
i=A.a([new A.ab(0,B.H,B.v.j(0.6),D.ewO,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b4(l,l,l,new C.bfp(j.x,h,l),B.az),0,0,0),A.ao(0,A.o(l,l,B.f,l,l,new A.n(l,l,l,l,l,new A.a7(B.a5,B.a9,B.x,A.a([B.v.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cM(8,40+s*46,l,l,l,l,A.o(l,l,B.f,l,l,new A.n(h.j(0.7),l,l,new A.bb(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.aoN,8,0.85,2.2),v.$4(D.bJX,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aoN,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bJT,A.b4(l,l,l,new C.bfg(h,l),B.az),l),0,0,0))
r=A.W(D.aDK[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.c(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aAV,l,l),B.K,l,l)
p=A.o(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.af,p,B.af,A.c(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cL,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.c(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.F,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bKq,A.x(o,B.l,l,w,B.h,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aJD(l),D.fqB),l,l,l,46,0,l))
return A.o(l,A.bv(D.afA,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.n(l,l,l,D.afA,i,new A.a7(B.ay,B.aC,B.x,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bfp.prototype={
a2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e_()
g.cU(11)
switch(this.b){case"plain":return
case"linen":$.R()
w=A.L()
w.r=B.v.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.r(0,t),new A.r(u,t),w)
$.R()
s=A.L()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.r(r,0),new A.r(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.R()
l=new A.ar(B.T,B.Q,B.V,B.W,B.U)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.O(new A.r(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.R()
l=A.a([],n)
j=new A.aG(m.r,B.aj,null,null,l)
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
m=new A.by()
l.push(m)
l=j.f
if(l!=null)m.aj(l)
j.ac()
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.R()
w=A.L()
w.r=B.v.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.R()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bfg.prototype={
a2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.R(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.ab
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.fdx,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aG(k,B.aj,null,null,s)
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
s=new A.ar(B.T,B.Q,B.V,B.W,B.U)
s.r=i.j(0.9).gp(0)
d.O(new A.r(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.A(0,this.b)}}
C.uY.prototype={}
C.a_D.prototype={
S(){return new C.bfn()}}
C.bfn.prototype={
goC(){var w=this.d
return w===$?this.d=this.a.c:w},
gze(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.at(new A.bd(w.b,B.b8,B.aP),$.ax())}return v},
gaE4(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.at(new A.bd(w.c,B.b8,B.aP),$.ax())}return v},
gatB(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.at(new A.bd(w.y,B.b8,B.aP),$.ax())}return v},
t(){var w=this,v=w.gze(0),u=v.V$=$.ax()
v.R$=0
v=w.gaE4()
v.V$=u
v.R$=0
v=w.gatB()
v.V$=u
v.R$=0
w.a3()},
aue(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jA(s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.daj(this,f,u),e===u,s,s,s,s))}return A.bZ(B.bI,r,B.br,s,6,8)},
aA1(d){var w=null,v=B.c.j(0.07)
return A.bA(w,new A.b6(4,A.m(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.m9,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goC(),a0=f.gze(0),a1=a0.a.a,a2=f.gaE4(),a3=a2.a.a,a4=f.gatB(),a5=d.bgN(a4.a.a,a3,a1)
a1=x.w
a3=A.aE(a6,e,a1).w
a1=A.aE(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,new A.dk(B.dE,B.z,B.f,new A.a5(270,370,new C.a_i(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.aA1("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.daI(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.aA1("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.daJ(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.Aq[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.av(p,q?3:1,B.r,-1)
p=A.o(e,e,B.f,e,e,new A.n(e,e,new A.bE(o,o,o,o),e,e,new A.a7(B.ay,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aF
v.push(A.ay(e,A.x(A.a([p,B.cT,A.c(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.M,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.daK(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bZ(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b2.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.av((s===$?f.d=f.a.c:s).d===n?B.eE:B.L,2,B.r,-1)
q.push(A.ay(e,A.o(e,A.W(D.aDK[n],B.c,e,e,e,24),B.f,e,e,new A.n(p,e,new A.bE(o,o,o,o),new A.bb(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.daL(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bZ(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.aA1("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.daM(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a7,e,B.ao,e,e,e,e)
p=A.c("LETTERING COLOUR",e,e,e,e,e,e,F.w6,e,e,e)
m=A.a([],w)
for(l=D.Ev.gdM(D.Ev),l=l.gae(l);l.C();){k=l.gP(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eE:B.aT
g=r.e===i
o=new A.av(h,g?3:1,B.r,-1)
j=A.o(e,e,B.f,e,e,new A.n(j,e,new A.bE(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aF
m.push(A.ay(e,A.x(A.a([j,B.bC,A.c(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.M,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.daN(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bZ(B.bI,m,B.br,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,F.w6,e,e,e)
k=f.goC()
return new A.D(new A.P(0,0,0,a3.f.d),A.bm(!0,new A.cO(new A.aY(0,1/0,0,a1.a.b*0.92),A.cn(A.a([D.h6e,B.af,d,B.aO,a0,B.S,a2,B.aA,D.hcw,B.P,v,B.aA,D.h6n,B.P,q,B.aA,a4,B.aA,p,B.P,m,B.aA,l,A.l3(e,9,""+B.i.T(f.goC().f),36,18,new C.daO(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,F.w6,e,e,e),B.al,f.aue(D.a7T,f.goC().r,new C.daP(f),D.dJ_),B.af,A.c("BORDER",e,e,e,e,e,e,F.w6,e,e,e),B.al,f.aue(D.a7c,f.goC().w,new C.daQ(f),D.dJ5),B.af,A.c("COVER MATERIAL",e,e,e,e,e,e,F.w6,e,e,e),B.al,f.aue(D.a78,f.goC().x,new C.daS(f),D.dKK),B.al,A.iY(e,B.b2,e,B.ag,e,new C.daT(f),e,e,e,D.h0n,f.goC().z),B.bx,A.bJ(D.h4W,e,new C.daU(f,a6),A.bn(B.b2,e,e,e,e,B.pf,e,e,new A.b9(A.m(16),B.a1),e,e,e))],w),e,e,B.aoh,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aJD.prototype={
a2(d,e){var w,v,u,t=new A.aG($.R().r,B.aj,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.by())
u=A.L()
u.san(D.cbZ.aA(0,new A.a2(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.bkM.prototype={
a2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.R()
w=A.L()
w.san(D.caX.aA(0,new A.a2(0,0,a2,a3)))
a4.aE(new A.a2(0,0,a2,a3),w)
v=B.i.cD(a1/112)
u=new A.e_()
u.cU(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.ddm[u.aw(9)]
j=u.aw(14)
J.br(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a2(n,j,n+m,j+l)
h=A.bu(i,B.hB)
g=new A.ar(B.T,B.Q,B.V,B.W,B.U)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.v,0.45)
e.toString
g.san(new A.a7(B.a5,B.a9,B.x,A.a([f,k,e],w),d,d).aA(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.T,B.Q,B.V,B.W,B.U)
e.r=B.kC.j(0.55).gp(0)
a4.aE(new A.a2(g,j,h,j+2),e)
e=new A.ar(B.T,B.Q,B.V,B.W,B.U)
e.r=B.kC.j(0.4).gp(0)
a4.aE(new A.a2(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.san(D.caf.aA(0,new A.a2(0,r,a2,q)))
a4.aE(new A.a2(0,r,a2,q),p)
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=B.v.j(0.5).gp(0)
p.y=B.l4
a4.aE(new A.a2(0,q,a2,q+14),p)}t=A.L()
t.r=D.biO.j(0.72).gp(0)
a4.aE(new A.a2(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bT(B.z,0.5,B.x,d,0,A.a([D.brs.j(0.22),B.L],w),d,d).aA(0,A.bX(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aD(d){return!1}}
C.bdx.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cM(14,w*2,v*2.2,v*2,o,o,new A.bP(new A.n(A.ap(D.kW,D.bwN,w/4),o,new A.bE(B.a1,new A.av(B.v.j(0.12),1,B.r,-1),B.a1,B.a1),B.MG,o,o,B.m),B.bm,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.H,B.v.j(0.35),B.aNY,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.o(o,o,B.f,o,o,new A.n(B.kC.j(0.6),o,o,new A.bb(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.o(o,A.x(t,B.l,o,B.rk,B.h,0,B.p),B.f,o,o,new A.n(o,o,o,D.b6Y,u,D.cbX,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.H,B.v.j(0.4),B.dm,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aJD(o),D.fqw),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aXC(p.y,r,B.je,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bA(o,B.eU,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,B.je.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fQb,!0,B.a7,o,B.ao,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,B.je.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bA(o,B.eU,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,B.je.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fGw,!0,B.a7,B.Bj,B.ao,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.fQ3,o,o,o),B.au,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,B.je.j(0.5),o,o,o,o,o,o,o,o,11,B.cL,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.E(A.o(o,o,B.f,D.GU.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fB,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.GU.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.o(o,o,B.f,D.GU.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.h,0,o,o),B.aA],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,B.je.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Zx(A.cR(A.a([A.cR(o,o,o,o,o,o,o,o,o,D.fJP,B.a.az(k,0,1)),A.cR(o,o,o,o,o,o,o,o,o,o,B.a.aY(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,B.je.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.c9(A.x(n,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hw,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,B.je.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.o(o,A.bv(B.MG,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bJp,A.x(s,B.am,o,B.e,B.h,0,B.p),o),A.ao(0,new A.bP(new A.n(o,o,o,o,o,new A.a7(B.a5,B.a9,B.x,A.a([B.v.j(0.16),B.L],x.O),o,o),B.m),B.bm,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.n(o,o,o,B.MG,v,D.ccu,B.m),o,o,o,o,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.amH.prototype={
S(){return new C.amI(new A.eF(0,$.ax()),new C.bUW(),new C.an_(),D.hQ6,null,null)},
gd3(){return this.d}}
C.a2k.prototype={
a7(){return"_Step."+this.b}}
C.amI.prototype={
gCN(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFG(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Nj(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gUn(){var w=this.ghe(0)
return w.gzy()==null?"Babu":B.a.i(w.gzy().b)},
Z(){var w,v=this
v.a4()
w=v.ghe(0).gzy()
w=w==null?null:w.c
v.r.b=w===D.oO
w=v.qa(new C.bTh(v))
w.fY(0)
v.x!==$&&A.aR()
v.x=w
v.a3g("Come closer, my children. I am "+v.gUn()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.d()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.V$=$.ax()
v.R$=0
w.bxu()},
a3g(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.de(B.a1c,new C.bTb(w))},
btR(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.l(new C.bTk(v))},
aeG(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
btJ(){return this.bbB()},
bbB(){var w=this,v=w.gCN()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bTc(w))
w.a3g(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.mo,new C.bTd(w))},
cNT(){var w=this
w.l(new C.bTg(w))
w.a3g(w.gCN()[w.as].a)},
Lt(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aeG)return
w=p.gCN()
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
p.l(new C.bTf(p,d,u,q))
p.a3g(u?D.dty[q.aw(4)]+" "+w[p.as].d:D.dq2[q.aw(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCN()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bHZ(t.at,t.ay,p)
t.l(new C.bTi(t,s))
t.a3g(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.C0(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.C1(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bTj())
w=1
break
case 4:++t.as
t.bbB()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.Zr,new A.an(B.a0,v,B.ad,B.t,A.a([A.bS(0,new A.e6(A.b4(v,v,v,new C.aXH(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.ce0(0),B.aY,w.bTa()],t),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
ce0(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.QX,s,s,s,new C.bTe(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCN().length;++w){v=t.as
if(w<v||t.Q===D.b3h)v=B.cW
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.o(s,s,B.f,s,s,new A.n(v,s,s,new A.bb(u,u,u,u),s,s,B.m),s,7,s,D.bEE,s,s,s,22))}p=A.E(A.x(A.a([D.fY6,A.A(p,B.l,s,B.e,B.h,0,s,s)],q),B.B,s,B.e,B.h,0,B.p),1)
v=A.m(14)
u=A.K(B.fJ,B.r,1)
return new A.D(D.bKE,A.A(A.a([r,p,A.o(s,A.c("\ud83d\udd25 "+B.i.T(t.cy*100)+"%",s,s,s,s,s,s,B.iP,s,s,s),B.f,s,s,new A.n(B.b6,s,u,v,s,s,B.m),s,s,s,s,B.hj,s,s,s)],q),B.l,s,B.e,B.h,0,s,s),s)},
bTa(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghe(0).gzy()
if(h==null)w=1
else w=h.c===D.oO?0:1
v=j.dx
u=j.db
t=D.qF.j(0.96)
s=A.m(22)
r=A.K(B.cW,B.r,3)
q=A.b4(i,i,i,new C.bqn(w,i),B.az)
p=A.c(j.Q===D.aeG?j.gUn()+" asks":"Elder "+j.gUn(),i,i,i,i,i,i,D.aXC,i,i,i)
o=j.db
o=B.a.az(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.ay(B.c1,A.A(A.a([new A.a5(62,62,q,i),B.ar,A.E(A.x(A.a([p,B.bC,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aXP,i,i,i)],n),B.B,i,B.e,B.h,0,B.p),1)],n),B.B,i,B.e,B.h,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbtQ(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aaL("Sit down by the fire",j.gbtI()),i,i,i)
break
case 1:v=A.as(j.aaL("Ask me, Elder",j.gcNS()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCN()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.av(D.lP,2.5,B.r,-1)
v.push(A.ay(i,A.o(i,A.c(u[m],i,i,i,i,i,i,D.aXL,B.K,i,i),B.f,i,D.agd,new A.n(D.alM,i,new A.bE(l,l,l,l),new A.bb(q,q,q,q),i,i,B.m),i,i,i,i,L.wW,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bT8(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bZ(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kj:A_.arM
u=A.W(u,v?B.eq:D.lP,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.eq:D.lP,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCN().length?"Finish":"Next story"
v=A.A(A.a([u,B.aa,q,j.aaL(v,j.gqt(j))],n),B.l,i,B.e,B.h,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gCN().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aY2,i,i,i)],n)
u=j.cx
if(u>0){u=C.aRZ(u)
q=C.aRZ(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.ad7,i,i,i))}v.push(B.P)
v.push(j.aaL("Back to the games",new C.bT9(j)))
v=A.x(v,B.l,i,B.e,B.h,0,B.p)
break
default:v=i}return A.o(i,A.x(A.a([o,B.S,v],n),B.B,i,B.e,B.M,0,B.p),B.f,i,i,new A.n(t,i,r,s,D.aFi,i,B.m),i,i,i,B.zg,B.bl,i,i,i)},
aaL(d,e){var w=null,v=A.m(16),u=A.K(B.cW,B.r,2)
return A.ay(w,A.o(w,A.c(d,w,w,w,w,w,w,B.Lw,w,w,w),B.f,w,w,new A.n(D.lP,w,u,v,w,w,B.m),w,w,w,w,D.bIi,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bqn.prototype={
a2(d,e){A.hnN(d,e.ek(B.J),e.gdj()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aCt.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.bUW.prototype={}
C.ti.prototype={}
C.bqo.prototype={}
C.an_.prototype={
MW(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ik0(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aXH.prototype={
a2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.GI(l.d.MW(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.br(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cDf(d,j)
l.bRJ(d,j)
l.cLE(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.br(t.save())
t.translate(225,580)
d.nM(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.R()
q=A.L()
p=x.O
o=x.n
q.san(A.wm(B.J,r,A.a([D.bvt.j(0.55*s),B.Oc.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bUO(l,d,j,i)),new A.y(540,new C.bUP(l,d,j,i)),new A.y(546,new C.bUQ(l,d,j,i)),new A.y(574,new C.bUR(l,d,j,i)),new A.y(612,new C.bUS(l,d,j,i)),new A.y(650,new C.bUT(l,d,j,i)),new A.y(656,new C.bUU(l,d,j,i))],x.E)
B.d.b_(n,new C.bUV())
for(m=0;m<7;++m)n[m].b.$0()
l.bIv(d,j,i)
l.bVm(d,j)
t.restore()
$.R()
t=A.L()
t.san(A.wm(new A.r(w/2,v*0.6),e.gap0()*0.75,A.a([B.L,D.biH],p),A.a([0.55,1],o),B.x,k,k,0))
d.aE(new A.a2(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cDf(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e_()
h.cU(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.R()
r=new A.ar(B.T,B.Q,B.V,B.W,B.U)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.i.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.ewk),C.iH(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.R()
k=A.a([],t)
l=new A.aG(l.r,B.aj,null,null,k)
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
s=new A.ar(B.T,B.Q,B.V,B.W,B.U)
s.b=B.ab
s.c=1.6
s.r=D.bls.gp(0)
s.d=B.bG
s.e=B.dO
d.af(l,s)}},
bRJ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aCe[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bY(new A.r(p,m),n*0.74,q*0.5)
k=B.z1.j(v)
$.R()
j=new A.ar(B.T,B.Q,B.V,B.W,B.U)
j.r=k.gp(0)
d.c1(l,j)
q=A.bY(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=B.ww.j(u).gp(0)
d.c1(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.T,B.Q,B.V,B.W,B.U)
o.r=D.aj7.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cLE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bF0(d,D.ewg,0.9,e,D.hLp,!1,!1,D.b3e,1,!1)
w=$.R().r
v=x.v
u=new A.aG(w,B.aj,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.by())
t=A.L()
t.r=D.al4.gp(0)
d.af(u,t)
C.bF0(d,D.ewi,0.95,e,D.hLd,!1,!1,D.b3f,1,!0)
t=new A.aG(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.ch(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.ch(431,553,421,548))
t.E(new A.by())
u=A.L()
u.r=B.Gz.gp(0)
d.af(t,u)
u=A.bY(D.ewh,8,28)
t=A.L()
t.r=D.bxU.gp(0)
d.c1(u,t)
C.bF0(d,new A.r(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hLr,!0,!1,D.Ye,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c1(A.bY(new A.r(s+q*16,r-6),16,11),C.iH(D.akW,1.8))
u=q<0
C.bF0(d,new A.r(s-q*6,r),0.62,e,D.hLu,!1,u,D.Ye,2.2,!1)
C.bF0(d,new A.r(s-q*32,r+4),0.58,e+1,D.hLl,!1,u,D.Ye,2.2,!1)
this.bY5(d,D.evW,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bY(new A.r(o,n),8,11)
k=p===1
j=k?D.akS:D.alu
i=new A.ar(B.T,B.Q,B.V,B.W,B.U)
i.r=j.gp(0)
d.c1(l,i)
l=k?D.akS:D.alu
k=new A.ar(B.T,B.Q,B.V,B.W,B.U)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.T,B.Q,B.V,B.W,B.U)
k.b=B.ab
k.c=1
k.r=B.at.gp(0)
k.d=B.bG
k.e=B.dO
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.T,B.Q,B.V,B.W,B.U)
k.b=B.ab
k.c=1
k.r=B.at.gp(0)
k.d=B.bG
k.e=B.dO
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bY(D.aa4,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.ajw.gp(0)
d.c1(u,t)
u=A.bY(D.aa4.a5(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bnG.gp(0)
d.c1(u,t)
t=new A.aG(w,B.aj,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.by())
u=A.L()
u.r=D.bnT.gp(0)
d.af(t,u)
u=D.aa4.a5(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.ip.gp(0)
d.O(u,1.1,t)
v=new A.aG(w,B.aj,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.ch(180,588+w*(h?6:0),178,595))
d.af(v,C.iH(D.ajw,3.5))},
bY5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a5(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.R()
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.b=B.ab
m.c=2
m.r=D.ZF.gp(0)
m.d=B.bG
m.e=B.dO
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bY(k,17,32)
v=$.R()
r=A.L()
r.r=D.Gx.gp(0)
d.c1(w,r)
r=A.bY(k.a5(0,D.evm),7,26)
w=A.ap(D.Gx,B.v,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c1(r,q)
v=new A.aG(v.r,B.aj,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.by())
s=A.L()
s.r=D.Gx.gp(0)
d.af(v,s)
s=A.bY(k.a5(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.Gx.gp(0)
d.c1(s,v)
v=-11+l
d.ah(k.a5(0,new A.r(22,v)),k.a5(0,new A.r(21,-17+l)),C.iH(D.ZF,1.6))
d.ah(k.a5(0,new A.r(26,v)),k.a5(0,new A.r(28,-16+l)),C.iH(D.ZF,1.6))
v=k.a5(0,new A.r(26,-8+l))
s=A.L()
s.r=B.v.gp(0)
d.O(v,0.9,s)
d.ah(k.a5(0,new A.r(26,-3+l)),k.a5(0,new A.r(26,1+l)),C.iH(D.bqH,1.4))
d.ah(k.a5(0,D.eyf),k.a5(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iH(D.Gx,2.4))},
bVk(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bY(new A.r(225+u*36,574+(t*13+6)),8,11)
$.R()
t=new A.ar(B.T,B.Q,B.V,B.W,B.U)
t.r=D.bww.gp(0)
a6.c1(u,t)}}u=A.bY(D.aa6.a5(0,B.cz),17,52)
$.R()
t=A.L()
t.r=D.bif.gp(0)
a6.c1(u,t)
t=A.bY(D.aa6.a5(0,B.cz),12,44)
u=D.blS.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c1(t,s)
for(r=0;r<3;++r){v=D.dpu[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.T,B.Q,B.V,B.W,B.U)
o.b=B.ab
o.c=7
o.r=D.GL.gp(0)
o.d=B.bG
o.e=B.dO
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Cc.j(0.6)
n=new A.ar(B.T,B.Q,B.V,B.W,B.U)
n.b=B.ab
n.c=2
n.r=t.gp(0)
n.d=B.bG
n.e=B.dO
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f9w,D.fa5,D.fbe,D.fbz,D.fbc]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.btM,D.bq1,D.bvW][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.R()
f=A.a([],q)
a2=new A.aG(g.r,B.aj,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ac()
g=a0+d*0.6
a3=new A.hY(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.aj(a4)
a2.ac()
g=new A.hY(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.aj(a3)
a2.ac()
g=new A.by()
f.push(g)
f=a2.f
if(f!=null)g.aj(f)
a2.ac()
g=new A.ar(B.T,B.Q,B.V,B.W,B.U)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.i.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=B.als.j((1-a5)*0.9)
$.R()
o=new A.ar(B.T,B.Q,B.V,B.W,B.U)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.i.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.aj7.j(0.1*(1-a5))
$.R()
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bVm(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.by4.j(0.18*p)
$.R()
n=new A.ar(B.T,B.Q,B.V,B.W,B.U)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.T,B.Q,B.V,B.W,B.U)
n.r=D.brx.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c7f(d,e){switch(d){case 0:return e.b?D.hLf:D.b2N
case 1:return e.b?D.hLt:D.b2L
case 2:return D.b2K
case 3:return D.b2J
case 4:return D.b2M
default:return D.b2O}},
aEi(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
RE(d,e,f,g){var w,v=this,u=D.a7k[e],t=v.c7f(e,g),s=new C.bqo(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a7k[e],l=e===0
m=B.i.D(((l?D.aNQ:D.aNW).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.aab
s.as=D.EX
if(l){s.a=o?v.aEi(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.r(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.r(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.EX
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.evu
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.ewS
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
s.Q=D.ezb
s.as=D.aO8}if(e===2&&g.x!=null&&f<g.y){s.a=v.aEi(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aEi(f,e*3)
s.b=0.5
s.c=0.4}}C.hGN(d,u.a,u.b*1.2,t,s,f,e,null)},
bIv(d,e,f){var w=new C.bUN(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd4(d){return this.c}}
C.agB.prototype={
a7(){return"_Stand."+this.b}}
C.aey.prototype={}
C.lw.prototype={}
C.bTx.prototype={
bD2(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aR()
this.c=s},
Go(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bTy())
return r},
asg(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aO0(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
ano(d){var w,v,u=A.aQ(x.N),t=d,s=0
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
gzy(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b_(w,new C.bTz(this))
return B.d.gH(w)}}
C.av6.prototype={}
C.zK.prototype={}
C.aly.prototype={
gCj(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bOj(),A.T(w).k("Y<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.N3.prototype={
gaqj(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCj(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d4b(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaqj(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lw(B.a.i(s.a),p,B.d.cd(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bbK.prototype={}
C.aaA.prototype={}
C.bj3.prototype={}
C.agz.prototype={}
C.akR.prototype={
S(){return new C.akS(B.bF,A.a([],x.cC),A.a([],x.e4),null,null)},
gd3(){return this.d}}
C.akS.prototype={
gNc(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFG(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbbX(){var w,v=this,u=v.e
if(u===$){w=v.qa(v.gce2())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Z(){this.a4()
this.gbbX().fY(0)},
t(){this.gbbX().t()
this.bxp()},
fY(d){this.l(new C.bMs(this))},
ce3(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fI(0,v)
if(w.c!=null)w.l(new C.bMn())},
bah(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gNc()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bj3(u,(u+0.5)/v,w[t.x].b[u]))},
fI(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bMt())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.ca8()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gNc()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.i.T((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.atN(v,0.8,B.cW)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.atN(m.cy,0.8,B.nC)
m.b_B("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.atN(q,0.88,D.lP)
p=m.gNc()[m.x]
n=p.c
if(u===n){m.b_B("The right gourd fell! It was "+p.b[n]+".")
return}}}},
atN(d,e,f){var w,v,u,t=new A.e_()
t.cU(B.i.T(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agz(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b_B(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.QM()}},
ca8(){var w=this
if(w.x+1>=w.gNc().length){w.QM()
return}++w.x
w.bah()},
QM(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$QM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gNc().length
r=C.bHZ(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bMl())
w=2
return A.b(C.C0(u.a.d,r),$async$QM)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.C1(t.d,t.c.a,"catch",u.z),$async$QM)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bMm())
return A.h(null,v)}})
return A.i($async$QM,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.ce1()
else w=v.ch?v.ce4():A.as(new A.D(B.eF,A.x(A.a([D.aZ_,B.P,D.fZO,B.S,D.h50,B.e9,C.uB("Play",v.geY(v),B.cW,B.fZ,D.fI)],x.p),B.l,u,B.e,B.M,0,B.p),u),u,u,u)
return new C.tI("Calabash Catch",w,B.fe,u)},
ce4(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hP:B.Ig
p.push(A.W(u,v?B.aB:B.bV,r,r,r,22))}p.push(B.aY)
v=s.x
u=s.gNc()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aXB,r,r,r))
p.push(B.bb)
v=A.m(14)
p.push(A.o(r,A.c(""+s.z,r,r,r,r,r,r,B.iP,r,r,r),B.f,r,r,new A.n(B.bw,r,r,v,r,r,B.m),r,r,r,r,B.CW,r,r,r))
p=A.A(p,B.l,r,B.e,B.h,0,r,r)
v=A.m(18)
t=A.K(B.cW,B.r,3)
return A.x(A.a([new A.D(D.bG1,p,r),A.o(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fJH,B.K,r,r),B.f,r,r,new A.n(D.qF,r,t,v,r,r,B.m),r,r,r,B.f8,B.bl,r,r,1/0),B.al,A.E(A.ce(new C.bMr(s)),1)],q),B.l,r,B.e,B.h,0,B.p)},
ce1(){var w=this,v=null,u=A.as(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qf,v,v,v),v,v,v),t=A.as(A.c(""+w.Q+" of "+w.gNc().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Wx,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cn(A.a([D.bfG,u,t,B.aO,new C.IG(s,r,w.cx,v),B.aO,A.as(C.uB("Back to the games",new C.bMk(w),B.cW,B.ki,D.fI),v,v,v)],x.p),v,v,B.ae,v,v,B.ah,!1)}}
C.bee.prototype={
a2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.R(),a3=A.L()
a3.san(A.jD(B.J,new A.r(0,a0),D.d71,B.aCv,B.x,e))
a4.aE(new A.a2(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=B.Og.gp(0)
a4.O(new A.r(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aG(a2.r,B.aj,e,e,w)
a2=a0*0.7
v.E(new A.aZ(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.aj(s)
v.ac()}v.E(new A.aq(d,a0))
v.E(new A.aq(0,a0))
a2=$.R()
w=A.L()
w.r=D.bmQ.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aG(a2.r,B.aj,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.ch(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.ch(r+14,t,r+26,w))
a2.E(new A.by())
w=A.L()
w.r=D.ai8.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cs6[q]
s=new A.ar(B.T,B.Q,B.V,B.W,B.U)
s.r=D.ai8.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.T,B.Q,B.V,B.W,B.U)
s.r=D.ahq.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bnQ.gp(0)
a4.aE(new A.a2(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.T,B.Q,B.V,B.W,B.U)
t.r=D.ajM.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bY(new A.r(u,s),12,54)
$.R()
l=new A.ar(B.T,B.Q,B.V,B.W,B.U)
l.r=D.lP.j(0.6).gp(0)
a4.c1(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.br(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.R()
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=D.aiR.gp(0)
a4.O(D.euK,14,m)
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=D.bsP.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.euL,D.evS,m)
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.san(new A.amr(D.ey_,46,D.dfX,B.vz,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bY(D.ey5,8,12)
l=new A.ar(B.T,B.Q,B.V,B.W,B.U)
l.r=B.c.j(0.35).gp(0)
a4.c1(m,l)
k=new A.jQ(new A.es(n.c,e,e,B.cN,e,e,e,e,e,e,D.fHu),B.K,B.bW,new A.jl(1),e,e,3,e,B.bX,e,B.cw)
k.nD(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bu(A.bY(B.cO,m.gb9(m)+8,l),B.h1)
l=new A.ar(B.T,B.Q,B.V,B.W,B.U)
l.r=D.qF.gp(0)
a4.aq(j,l)
l=new A.ar(B.T,B.Q,B.V,B.W,B.U)
l.r=D.lP.gp(0)
l.b=B.ab
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a2(a4,new A.r(-m/2,4-l.gb9(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.inQ(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dV,(w+1)/2)
h=A.bY(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aG($.R().r,B.aj,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.ch(h.gbD().a,s+8,w+8,s))
a3.E(new A.by())
m=A.L()
m.r=D.a_y.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=D.Cc.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=B.nC.gp(0)
a4.aE(new A.a2(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bmW.gp(0)
a4.c1(new A.a2(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.ft(e,B.cw,e,e,e,A.cR(e,e,e,e,e,e,e,e,e,A.l(e,e,B.cW.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,E.E7,e,e),"+"+a2),B.a7,B.bW,e,B.dF,B.bX)
k.e5()
k.a2(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.R3.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aCr(w.c,w.f,v),B.az),s=A.m(10),r=A.K(B.bA,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cT,A.o(v,A.c(w.d,v,1,B.a2,v,v,v,D.fzY,v,v,v),B.f,v,v,new A.n(B.c,v,r,s,v,v,B.m),v,v,v,v,B.nc,v,v,v)],x.p),B.l,v,B.e,B.M,0,B.p),v)},
ga_(d){return this.e}}
C.aCr.prototype={
a2(d,e){var w=e.ek(B.J),v=e.gdj(),u=this.c?0.8:0
return A.hnN(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aAU.prototype={}
C.avK.prototype={
S(){return new C.avL(A.S(x.S,x.cq),null,null)},
gd3(){return this.d}}
C.avL.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hMn(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaGm(){var w=this.z
return w===$?this.z=this.XR(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c1(w,-1,!1,x.S)}return v},
XR(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aAU(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aAU(v[t],u[t],-1))
v=new A.e_()
v.cU(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eN$
u.b=!1
B.d.a8(u.a)
u=u.goJ()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qL()}this.bxS()},
cTY(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaGm()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.csi(r,e,w,v))
A.cy(B.lW,new C.csj(r))
return}++r.r
u=A.bp(null,B.hJ,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.csk(r,d,e,w,v))
u.cs(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cC(n,0,new C.csl())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.csm(t,r))
w=5
return A.b(C.C0(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.C1(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.l(new C.csn())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a8(p.a)
p=p.goJ()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qL()}o.a8(0)
t.l(new C.cso(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qf,p,p,p),p,p,p)
v=r.f
v=A.as(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Wx,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tI(q,A.cn(A.a([D.agZ,w,v,B.aO,new C.IG(u,t,r.ch,p),B.aO,A.as(C.uB("Back to the games",new C.cse(d),B.cW,B.ki,D.fI),p,p,p)],x.p),p,p,B.ae,p,p,B.ah,!1),B.fe,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tI(q,new A.D(B.tn,A.x(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,B.aXw,B.K,p,p),A.E(A.ce(new C.csf(r,s)),1)],x.p),B.l,p,B.e,B.h,0,B.p),p),B.fe,p)}}
C.bdG.prototype={
a2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cSo(),A.T(b2).k("Y<1>")).gJ(0),b4=a9.b,b5=b4.a5(0,B.Kh)
$.R()
w=A.L()
w.r=D.lR.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a5(0,D.eux)
u=A.L()
u.r=B.qH.j(0.5).gp(0)
u.c=10
u.d=B.bG
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.e7.aB(0,B.i.D(b2[p],0,1))
l=$.R().r
k=A.a([],s)
j=new A.aG(l,B.aj,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ac()
o=new A.ch((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.aj(n)
j.ac()
if(m<1)for(o=new A.aG(l,j.b,j.c,b0,A.bs(k,!0,r)),n=A.a([],q),i=new A.uW(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bj(A.jL(b1));--h
g=new A.BY(i,h)
f=0
for(;;){i.jO()
e=n[h].b
e===$&&A.d()
if(!(f<e.a.length()))break
i.jO()
e=n[h].b
e===$&&A.d()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.R()
a1=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a1.r=B.aT.gp(0)
a1.b=B.ab
a1.c=3
b6.af(new A.aG(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aG(l,j.b,j.c,b0,A.bs(k,!0,r)),n=A.a([],q),k=new A.uW(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bj(A.jL(b1));--a0
k.jO()
a1=n[a0].b
a1===$&&A.d()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.R()
a4=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a4.r=D.H_.gp(0)
a4.b=B.ab
a4.c=h
a4.d=B.bG
b6.af(new A.aG(l,a2,b0,new A.b7([new A.BY(k,a0),0,a1*m,!0]),a3),a4)
k.jO()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jO()
a5=n[a0].Wh(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bY(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a3.r=B.be.gp(0)
b6.c1(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.jQ(D.fzr,B.a7,B.bW,new A.jl(1),b0,b0,b0,b0,B.bX,b0,B.cw)
a8.e5()
a8.a2(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aD(d){return!0}}
C.azG.prototype={
S(){return new C.azH(A.aQ(x.S))},
gd3(){return this.d}}
C.azH.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hNh(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Z(){this.a4()
this.baq()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a3()},
baq(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.de(B.tj,new C.cHf(this))},
brr(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.l(new C.cHn(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cHo(v,d))
A.cy(B.iY,new C.cHp(v))}},
cZt(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.l(new C.cHq(w))},
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
t.l(new C.cHr(t,s))
w=5
return A.b(C.C0(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.C1(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cHs())
w=1
break
case 4:t.l(new C.cHt(t))
t.baq()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.c(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.qf,a2,a2,a2),a2,a2,a2)
v=A.as(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Wx,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tI(a1,A.cn(A.a([D.bfR,w,v,B.aO,new C.IG(u,t,a0.ax,a2),B.aO,A.as(C.uB("Back to the games",new C.cHh(a3),B.cW,B.ki,D.fI),a2,a2,a2)],x.p),a2,a2,B.ae,a2,a2,B.ah,!1),B.fe,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.LC,B.K,a2,a2),B.S,A.as(A.lH(new C.cHi(a0,r),a2,B.b_,B.hJ,a2,a2,new A.bt(a2,s,u),x.i),a2,a2,a2),B.aA],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.av(B.cW,2,B.r,-1)
k=o+1
w.push(new A.re(new A.bt(0,1,u),new C.cHj(),A.o(a2,new A.c3(B.aL,B.e,B.h,B.l,a2,B.p,a2,0,A.a([new A.qN(A.c(""+k,a2,a2,a2,a2,a2,a2,B.oj,a2,a2,a2),D.lP,a2,12,a2),B.ar,new A.bx(1,B.ba,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fMl,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.n(D.qF,a2,new A.bE(l,l,l,l),new A.bb(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cy,B.bl,a2,a2,a2),B.b_,B.iY,a2,new A.bl("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bO(!1,D.hcZ,a2,a2,!0,a2,a2,a2,a0.gcZs(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lR.j(0.2)
q=A.m(16)
p=A.K(D.lR,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fN,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.o(a2,A.x(A.a([m,B.S,C.uB(v,a0.gqt(a0),B.cW,B.jA,D.fI)],t),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.n(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bH,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dq:B.cW.j(0.2)
g=new A.aP(16,16)
l=new A.av(n.q(0,o)?B.fo:B.cW,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.xW:a2
t.push(new A.re(new A.bt(0,i,u),new C.cHk(),A.ay(a2,A.o(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.ag6,new A.n(h,a2,new A.bE(l,l,l,l),new A.bb(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jy,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cHl(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b_,B.mp,a2,new A.bl("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bZ(B.fS,t,B.br,a2,10,10))}return new C.tI(a1,A.cn(w,a2,a2,B.anP,a2,a2,B.ah,!1),B.fe,a2)}}
C.aAE.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.aI_.prototype={
aX(){this.b7()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a3()}}
C.agn.prototype={
arP(d){},
ask(){var w=this,v=w.qa(new C.fbT(w))
v.fY(0)
w.Mk$!==$&&A.aR()
w.Mk$=v}}
C.aLR.prototype={
gbnS(d){var w=this.c
return B.a.az(w,0,Math.min(this.d,w.length))},
Wp(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.de(B.a1c,new C.fm8(w))},
btP(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.amQ.prototype={
S(){return new C.amR(new C.an_(),A.a([],x.t),new A.eF(0,$.ax()),$,0,null,null)},
gd3(){return this.d}}
C.amR.prototype={
gNa(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFG(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Nj(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqB(){var w=this.r
return w===$?this.r=new C.aLR(new C.bUj(this)):w},
gaqF(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gNa()[v].c)u.push(1)
return u.length},
gbnb(){var w=this.ghe(0)
return w.gzy()==null?"Elder":B.a.i(w.gzy().b)},
Z(){this.a4()
this.ask()},
t(){var w,v=this
v.gqB().t()
v.f.t()
w=v.Mk$
w===$&&A.d()
w.t()
w=v.qh$
w.V$=$.ax()
w.R$=0
v.bxx()},
cO4(){var w=this
w.l(new C.bUg(w))
w.gqB().Wp(w.gNa()[w.x].a)},
Lt(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqB()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qh$.a
v.ax=u
v.ay=u+1
v.l(new C.bUe())
A.cy(B.hJ,new C.bUf(v))},
brn(){var w=this.gaqF(0)/this.gNa().length*100
if(w>=90)return D.f6i
if(w>=75)return D.f4e
if(w>=60)return D.eVs
if(w>=45)return D.eZ1
return D.ePI},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cwm()
w=A.bS(0,new A.e6(A.b4(m,m,m,new C.buu(n,n.qh$),B.az),m),0,0,0)
if(!n.Q){v=D.qF.j(0.96)
u=A.m(20)
t=A.K(B.cW,B.r,3)
u=A.o(m,A.x(A.a([A.c("Elder "+n.gbnb()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aYp,B.K,m,m),B.S,C.uB("Start the test",n.gC9(),B.cW,B.jj,D.fI)],x.p),B.l,m,B.e,B.M,0,B.p),B.f,m,m,new A.n(v,m,t,u,m,m,B.m),m,m,m,m,B.bH,m,m,m)
v=u}else{v=n.x
u=n.gNa()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aYr,m,m,m)
if(n.Q){t=n.gqB()
t=t.d<t.c.length}else t=!1
if(t)u=D.frV
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.av(D.Cc,4,B.r,-1)
s.push(A.ay(m,A.o(m,A.c(q[r],m,m,m,m,m,m,D.fDe,B.K,m,m),B.f,m,D.ag6,new A.n(D.biM,m,new A.bE(o,o,o,o),new A.bb(p,p,p,p),m,m,B.m),m,m,m,m,B.P1,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bUh(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bZ(B.fS,s,B.br,new A.bl("o"+t,x.W),8,8)}u=A.x(A.a([v,B.al,A.oF(u,B.n7,A.pZ(),B.b_,B.b_,A.LV())],x.p),B.l,m,B.e,B.M,0,B.p)
v=u}return new C.tI("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fe,m)},
cwm(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.brn(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gNa()[v].c)g.push(v)
u=A.m(22)
t=A.K(B.cW,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fHN,B.K,i,i)
r=A.c("Signed by Elder "+j.gbnb(),i,i,i,i,i,i,D.fGo,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fLG,i,i,i),D.eHe],q)
o=A.c(h.b,i,i,i,i,i,i,D.fND,i,i,i)
n=j.gaqF(0)
m=j.gNa()
u=A.o(i,A.x(A.a([D.fZ1,B.au,s,r,B.S,new A.an(B.z,i,B.ad,B.t,p,i),o,B.al,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.ad7,i,i,i),B.P,D.auL],q),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(D.qF,i,t,u,i,i,B.m),i,i,i,i,B.fc,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aA,new C.IG(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.he2,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.av(B.bw,1,B.r,-1)
p=m[v]
u.push(A.o(i,A.x(A.a([A.c(p.a,i,i,i,i,i,i,B.he,i,i,i),B.au,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fJ_,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fLh,i,i,i)],q),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.dq,i,new A.bE(k,k,k,k),new A.bb(r,r,r,r),i,i,B.m),i,i,i,B.cy,B.bl,i,i,i))}B.d.u(s,u)}s.push(B.aA)
s.push(A.as(C.uB("Back to the games",new C.bUa(j),B.cW,B.ki,D.fI),i,i,i))
return new C.tI("Village School",A.cn(s,i,i,B.bR,i,i,B.ah,!1),B.fe,i)}}
C.buu.prototype={
a2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qh$.a
a0.GI(e.f.MW(a1))
w=C.hiV(a1)
v=a0.c
J.br(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqB()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d15[s]-6
$.R()
r=new A.ar(B.T,B.Q,B.V,B.W,B.U)
r.r=D.GL.gp(0)
a0.aE(new A.a2(u,340,u+12,450),r)}u=A.bu(D.ab5.cr(10),B.ig)
$.R()
r=A.L()
r.r=D.Cc.gp(0)
a0.aq(u,r)
r=A.bu(D.ab5,B.iy)
u=A.L()
u.san(A.jD(new A.r(30,96),new A.r(420,346),D.dlr,f,B.x,f))
a0.aq(r,u)
q=new A.e_()
q.cU(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bY(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.T,B.Q,B.V,B.W,B.U)
r.r=B.c.j(0.025).gp(0)
a0.c1(o,r)}u=A.L()
u.r=E.akC.gp(0)
a0.aE(new A.a2(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aE(D.fjg,u)
u=A.L()
u.r=B.bM.gp(0)
a0.aE(D.fjk,u)
u=A.bu(D.fja,B.hp)
r=A.L()
r.r=D.a_y.gp(0)
a0.aq(u,r)
n=B.i.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqB().gbnS(0)
m=A.ft(f,B.cw,f,7,f,A.cR(f,f,f,f,f,f,f,f,f,D.fPX,u+(t?"|":"")),B.a7,B.bW,f,B.dF,B.bX)
m.nD(346)
J.br(v.save())
u=A.i5(D.ab5)
r=$.mi()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.i5(new A.a2(30+390*n,96,420,346)),r[1],!0)
m.a2(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bu(new A.a2(u,r,u+40,r+90),B.h1)
u=A.L()
u.r=D.byY.gp(0)
a0.aq(r,u)}}else{m=A.ft(f,B.cw,f,f,f,D.fzH,B.K,B.bW,f,B.dF,B.bX)
m.nD(340)
m.a2(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqB().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.T,B.Q,B.V,B.W,B.U)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghe(0).gzy()
i=(u==null?f:u.c)===D.oO?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.fbU(d,a0,i,t,h,D.evH)),new A.y(520,new C.fbV(a0,d,t)),new A.y(575,new C.fbW(a0,d,t)),new A.y(585,new C.fbX(this,a0,d,t)),new A.y(615,new C.fbY(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.fbZ())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
ce5(d,e){var w,v,u,t,s,r,q,p=$.R(),o=A.a([],x.v),n=new A.aG(p.r,B.aj,null,null,o)
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
n.ac()}}n.E(new A.by())
return n},
aD(d){return!1}}
C.amO.prototype={
S(){return new C.amP(new C.an_(),A.S(x.S,x.i),new A.eF(0,$.ax()),$,0,null,null)},
gd3(){return this.d}}
C.amP.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hMc(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.FW(0):w},
gaMC(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FW(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cd(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FW(0):r).length);++v}s.Q=w
r=w}return r},
FW(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e4(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e_()
u.cU(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eD(u,new C.bTX())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a4()
this.ask()},
t(){var w,v=this
v.e.t()
w=v.Mk$
w===$&&A.d()
w.t()
w=v.qh$
w.V$=$.ax()
w.R$=0
v.bxw()},
arP(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cd(u===$?r.z=r.FW(0):u,v)
s=r.gaMC()
s[v]=s[v]+(450*(t+0.5)/q-r.gaMC()[v])*Math.min(1,w)}},
d3R(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.l(new C.bU7(v,d))
return}if(w===d){v.l(new C.bU8(v))
return}v.l(new C.bU9(v,B.d.cd(v.gj1(),v.y),d,B.d.cd(v.gj1(),d)))},
cON(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FW(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FW(0):u)[v]]===v);++v}s.l(new C.bU2(s,B.d.cw(w,new C.bU3())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bU4(t,s))
w=5
return A.b(C.C0(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.C1(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bU5())
w=1
break
case 4:t.l(new C.bU6(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.c(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.qf,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tI("Line Up",A.cn(A.a([D.agZ,w,B.aO,new C.IG(v,u,l.ch,k),B.aO,A.as(C.uB("Back to the games",new C.bTZ(d),B.cW,B.ki,D.fI),k,k,k)],x.p),k,k,B.ae,k,k,B.ah,!1),B.fe,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bU_(l))
u=A.bS(0,A.ce(new C.bU0(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aYr,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fIe,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fKw,B.K,k,k)],q),B.l,k,B.e,B.h,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.v.j(0.7)
o=A.m(16)
n=l.ax
m=A.K(n?D.lR:B.nC,B.r,2)
r.push(A.o(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bU1(l),x.cM).aM(0,", then ")+".",k,k,k,k,k,k,D.fMJ,k,k,k),B.f,k,k,new A.n(p,k,m,o,k,k,B.m),k,k,k,B.d4,B.bl,k,k,1/0))}if(!l.at)r.push(C.uB("That is my line!",l.gcOM(l),B.cW,B.hm,D.fI))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uB(w,l.gqt(l),B.cW,B.jA,D.fI))}return new C.tI("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.M,0,B.p),k,k,12,12,k,k)],q),k),B.fe,k)}}
C.bkU.prototype={
a2(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qh$.a
c7.GI(c5.e.MW(c8))
w=C.hiV(c8)
v=c7.c
J.br(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj1().length
t=$.R().r
s=x.v
r=new A.aG(t,B.aj,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.ch(225,500,440,470))
q=A.L()
q.r=D.a_y.gp(0)
q.b=B.ab
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aG(t,B.aj,c4,c4,l)
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
m=new A.by()
l.push(m)
l=k.f
if(l!=null)m.aj(l)
k.ac()
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=[B.cW,B.nC,D.lR,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b2m(c7,"OLDEST",D.ewF,B.cW)
this.b2m(c7,"YOUNGEST",D.ew7,B.be)
t=A.bu(D.fj4,B.h1)
s=A.L()
s.r=D.GL.gp(0)
c7.aq(t,s)
s=A.bu(D.fj3,B.iy)
t=A.L()
t.r=D.Cc.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.due())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.cd(a1===$?c5.z=c5.FW(0):a1,f)
o=c5.gaMC()[f]
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
if(a3){$.R()
a9=new A.ar(B.T,B.Q,B.V,B.W,B.U)
a9.r=B.cW.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.dpj[B.o.F(b0,6)]
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
else b9=a3?D.eyJ:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aO8
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.SY(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Kj,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.jQ(new A.es(a8,c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fFT),B.a7,B.bW,new A.jl(1),"\u2026",c4,1,c4,B.bX,c4,B.cw)
c1.nD(q)
c2=A.bu(A.bY(new A.r(o,650),24,c1.b.c+16),B.h1)
$.R()
a8=new A.ar(B.T,B.Q,B.V,B.W,B.U)
if(a6)a9=B.iH
else a9=a7?B.tc:D.qF
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.T,B.Q,B.V,B.W,B.U)
if(a6)a9=D.lR
else a9=a7?B.nC:D.lP
a8.r=a9.gp(0)
a8.b=B.ab
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a2(c7,new A.r(o-a9/2,650-a8.gb9(a8)/2))
c3=new A.jQ(new A.es(""+(a2+1),c4,c4,B.cN,c4,c4,c4,c4,c4,c4,D.fGc),B.a7,B.bW,new A.jl(1),c4,c4,c4,c4,B.bX,c4,B.cw)
c3.e5()
c3.a2(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.br(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bY(B.J,4,8)
$.R()
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=[B.cW,B.nC,D.lR,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aE(q,m)
v.restore()}v.restore()},
b2m(d,e,f,g){var w,v,u=null,t=A.ft(u,B.cw,u,u,u,A.cR(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,E.E7,u,u),e),B.a7,B.bW,u,B.dF,B.bX)
t.e5()
w=t.b
v=w.c
w=w.a.c
t.a2(d,f.aJ(0,new A.r(v/2,w.gb9(w)/2)))},
aD(d){return!1}}
C.a2D.prototype={
a7(){return"_Trip."+this.b}}
C.amK.prototype={
S(){return new C.amL(D.Yl,new A.eF(0,$.ax()),$,0,null,null)},
gd3(){return this.d}}
C.amL.prototype={
gDI(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFG(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Nj(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqB(){var w=this.f
return w===$?this.f=new C.aLR(new C.bTJ(this)):w},
gUn(){var w=this.ghe(0)
return w.gzy()==null?"Grandma":B.a.i(w.gzy().b)},
Z(){this.a4()
this.ask()},
t(){var w,v=this
v.gqB().t()
w=v.Mk$
w===$&&A.d()
w.t()
w=v.qh$
w.V$=$.ax()
w.R$=0
v.bxv()},
arP(d){var w,v,u,t=this
if(t.r!==D.aeR)return
w=B.dN.aB(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDI()
if(v+1>=u.length){t.r=D.aeS
t.Xm()}else{++t.w
t.ay=!1
t.r=D.Ym
t.gqB().Wp(u[t.w].a)}if(t.c!=null)t.l(new C.bTH())}},
Xm(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Xm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqB().Wp("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDI().length
r=C.bHZ(t,u.z,s)
u.as=r
w=2
return A.b(C.C0(u.a.d,r),$async$Xm)
case 2:u.at=e
s=u.a
w=3
return A.b(C.C1(s.d,s.c.a,"journey",u.x*10),$async$Xm)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bTB())
return A.h(null,v)}})
return A.i($async$Xm,v)},
bsH(){this.aVn()},
aVn(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.aeR
if(w.c!=null)w.l(new C.bTC())},
Lt(d){var w,v,u,t,s=this
if(s.r!==D.Ym)return
w=s.gDI()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bTG(s,d,v))
u=s.gqB()
t=s.w
u.Wp(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cTX(){if(this.r!==D.BK)return
this.aVn()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.e6(A.b4(s,s,s,new C.bkj(t,t.qh$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDI().length;++w){v=t.w
if(w<v||t.r===D.aeS)v=B.cW
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.bx(1,B.ba,A.o(s,s,B.f,s,s,new A.n(v,s,s,new A.bb(u,u,u,u),s,s,B.m),s,7,s,B.x1,s,s,s,s),s))}p.push(B.bj)
p.push(D.h_G)
return new C.tI("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.h,0,s,s),s,s,12,12,2,s),A.ao(10,t.cnT(),s,s,10,10,s,s)],q),s),B.fe,s)},
cnT(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bTF(o),l=D.qF.j(0.96),k=A.m(22),j=A.K(B.cW,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.c("A long drive to the village of Elder "+o.gUn()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aYp,B.K,n,n),B.S,C.uB("Start the journey",o.gbsG(),B.cW,D.bTS,D.fI)],x.p),B.l,n,B.e,B.M,0,B.p)
break
case 3:w=D.bfr
break
case 1:w=o.w
v=o.gDI()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.av(D.lP,2.5,B.r,-1)
t.push(A.ay(n,A.o(n,A.c(r[s],n,n,n,n,n,n,D.aXL,B.K,n,n),B.f,n,D.agd,new A.n(D.alM,n,new A.bE(p,p,p,p),new A.bb(q,q,q,q),n,n,B.m),n,n,n,n,L.wW,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bTD(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.P,A.bZ(B.bI,t,B.br,n,8,8)],u),B.B,n,B.e,B.M,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDI().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bK(B.a9,n,n,C.uB(v,o.gcTW(),B.cW,B.jA,D.fI),n)],x.p),B.B,n,B.e,B.M,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUn()),B.P,A.c(""+o.x+" of "+o.gDI().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aY2,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aRZ(v)
u=C.aRZ(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.ad7,n,n,n))}w.push(B.P)
w.push(A.as(C.uB("Back to the games",new C.bTE(o),B.cW,B.ki,D.fI),n,n,n))
w=A.x(w,B.B,n,B.e,B.M,0,B.p)
break
default:w=n}return A.o(n,w,B.f,n,n,new A.n(l,n,j,k,D.aFi,n,B.m),n,n,n,n,B.bl,n,n,n)}}
C.bkj.prototype={
a2(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qh$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDI(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.aeR,d2=c7*0.5
c8=A.ap(D.bki,D.bvb,d0)
c8.toString
w=A.ap(D.ZH,B.ajn,d0)
w.toString
v=A.ap(B.uG,D.btx,d0)
v.toString
$.R()
u=A.L()
t=x.O
u.san(A.jD(B.J,new A.r(0,d2),A.a([c8,w,v],t),B.a5O,B.x,c3))
d3.aE(new A.a2(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.wm(s,60,A.a([D.btW,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.ZU.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dFi[o]
$.R()
u=new A.ar(B.T,B.Q,B.V,B.W,B.U)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.r(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.R()
j=A.a([],m)
i=new A.aG(k.r,B.aj,c3,c3,j)
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
$.R()
k=new A.ar(B.T,B.Q,B.V,B.W,B.U)
k.r=A.ap(l===0?D.biP:D.bym,D.bnZ,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.ce6(d3,new A.r(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.R()
w=A.L()
v=A.ap(D.akW,D.H_,d0)
v.toString
w.san(A.jD(new A.r(0,d2),new A.r(0,c7),A.a([v,D.btY],t),c3,B.x,c3))
d3.aE(new A.a2(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bnb.gp(0)
d3.aE(new A.a2(0,a0,c6,a1),w)
w=A.L()
w.r=D.bxY.gp(0)
d3.aE(new A.a2(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.T,B.Q,B.V,B.W,B.U)
u.r=E.Nx.gp(0)
d3.aE(new A.a2(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.R()
b2=new A.ar(B.T,B.Q,B.V,B.W,B.U)
b2.r=D.bit.gp(0)
d3.aE(new A.a2(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aG(b1.r,B.aj,c3,c3,b2)
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
b0=new A.by()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.aj(b2)
b1.ac()
b0=new A.ar(B.T,B.Q,B.V,B.W,B.U)
b0.r=D.bw4.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.T,B.Q,B.V,B.W,B.U)
b1.r=D.fI.gp(0)
d3.aE(new A.a2(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.T,B.Q,B.V,B.W,B.U)
b0.r=D.GL.gp(0)
d3.aE(new A.a2(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bu(new A.a2(b0,a4,b0+60,a5),B.jE)
b0=new A.ar(B.T,B.Q,B.V,B.W,B.U)
b0.r=D.bzt.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.T,B.Q,B.V,B.W,B.U)
b0.r=D.Cc.gp(0)
b0.b=B.ab
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.jQ(new A.es(b6,c3,c3,B.cN,c3,c3,c3,c3,c3,c3,D.fEj),B.a7,B.bW,new A.jl(1),c3,c3,c3,c3,B.bX,c3,B.cw)
b7.e5()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a2(d3,new A.r(b4-b1/2,a2-b0.gb9(b0)/2))
if(a7)b8=c4.r===D.aeS
else if(r===c4.w){b0=c4.r
b0=b0===D.Ym||b0===D.BK
b8=b0}else b8=!1
if(a7){b0=c4.ghe(0).gzy()
b9=(b0==null?c3:b0.c)===D.oO?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqB()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.BK
b0=c0?C.hIe(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Ym?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SY(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bJT(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.R()
t=new A.ar(B.T,B.Q,B.V,B.W,B.U)
t.r=D.bxr.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Yl)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.R()
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.BK&&c4.ax){b7=A.ft(c3,B.cw,c3,c3,c3,A.cR(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.cW,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,R.Jj,c3,c3),"BEEP BEEP!"),B.a7,B.bW,c3,B.dF,B.bX)
b7.e5()
b7.a2(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
ce6(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.btr,D.bmu,g)
o.toString
if(f){w=new A.aG($.R().r,B.aj,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.ch(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.ch(v+9,t,v+16,u))
w.E(new A.by())
t=A.L()
t.r=D.a04.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d5c[r]
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=D.a04.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a5(0,D.eyG)
$.R()
v=A.L()
v.r=D.biv.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bY(e.a5(0,D.eyH),16,60)
w=A.L()
w.r=o.gp(0)
d.c1(v,w)}},
bJT(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Yl?0.045:0,a1=a2.c
J.br(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jq(0,a0)
for(w=0;w<2;++w){v=D.dxh[w]
u=d.ay&&d.r!==D.Yl&&v>0
J.br(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.R()
s=new A.ar(B.T,B.Q,B.V,B.W,B.U)
s.r=D.byd.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.T,B.Q,B.V,B.W,B.U)
s.r=D.bq8.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.T,B.Q,B.V,B.W,B.U)
q.r=B.bi.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.r3(D.fjr,B.h1,B.h1,B.i5,B.hS)
$.R()
t=A.L()
t.san(A.jD(D.euN,B.aa_,D.dmO,B.a5O,B.x,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.T,B.Q,B.V,B.W,B.U)
s.r=D.dgI[B.o.F(o,4)].gp(0)
a2.aE(new A.a2(t,-26,t+10,-19),s)}n=d.r===D.BK&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a2(s,-66,q,-36)
J.br(a1.save())
a1.clipRRect(A.n_(A.bu(l,B.q4)),$.mD(),!0)
k=new A.ar(B.T,B.Q,B.V,B.W,B.U)
k.r=D.ZH.gp(0)
a2.aE(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.BK?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SY(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aO_,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bu(l,B.q4)
i=new A.ar(B.T,B.Q,B.V,B.W,B.U)
i.r=D.alO.gp(0)
i.b=B.ab
i.c=2
a2.aq(j,i)}d=A.bu(D.VE,B.q4)
t=A.L()
t.r=D.ZH.gp(0)
a2.aq(d,t)
J.br(a1.save())
a1.clipRRect(A.n_(A.bu(D.VE,B.q4)),$.mD(),!0)
C.SY(a2,new A.r(D.VE.gbD().a,-10),0,0,0.7,-0.1,f,f,D.aO_,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bu(D.VE,B.q4)
d=A.L()
d.r=D.alO.gp(0)
d.b=B.ab
d.c=2
a2.aq(t,d)
d=A.L()
d.r=B.CB.gp(0)
a2.O(D.ewV,4,d)
d=A.L()
d.r=D.GL.gp(0)
a2.aE(D.fkA,d)
for(w=0;w<3;++w){v=D.dxj[w]
d=A.bu(new A.a2(v,-96,v+28,-79),B.jE)
t=new A.ar(B.T,B.Q,B.V,B.W,B.U)
t.r=D.H_.gp(0)
a2.aq(d,t)}a1.restore()},
aD(d){return!1}}
C.aCu.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.bhR.prototype={}
C.aCw.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.bhS.prototype={}
C.aCx.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.bhT.prototype={}
C.a76.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.bkq(w),B.az),w)}}
C.bkq.prototype={
a2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dv9[B.o.F(n,6)]
k=$.R()
j=new A.ar(B.T,B.Q,B.V,B.W,B.U)
j.r=l.gp(0)
d.aE(new A.a2(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aG(k.r,B.aj,null,null,j)
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
k=new A.by()
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.ac()
k=new A.ar(B.T,B.Q,B.V,B.W,B.U)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.tI.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.QX,w,w,w,new C.bTA(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fBA,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c5(w,D.Zr,A.o(w,A.bm(!0,A.x(A.a([D.c8S,new A.D(D.bKI,A.A(u,B.l,w,B.e,B.h,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.baH,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.IG.prototype={
B(d){var w=null,v=this.d,u=C.aRZ(v),t=C.iqv(v),s=B.c.j(0.08),r=A.m(18),q=A.K(B.cW.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fE4,w,w,w)],x.p)
if(this.e)p.push(D.eB7)
p.push(B.al)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.he,w,w,w))
if(t!=null)p.push(new A.D(B.v0,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Fq,w,w,w),w))
return A.o(w,A.x(p,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(s,w,q,r,w,w,B.m),w,w,w,w,B.bH,w,w,w)}}
C.WK.prototype={
S(){return new C.bne(A.S(x.N,x.S),B.o.F(Date.now(),1e5))},
d_T(d){return this.f.$1(d)},
ge3(){return this.d}}
C.bne.prototype={
gTo(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a4()
this.PX()},
PX(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$PX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bUl(u.a.d),$async$PX)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dkQ[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bUk(p,(o===$?u.d=q.c:o).a,r),$async$PX)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e4y(u,n))
return A.h(null,v)}})
return A.i($async$PX,v)},
uH(d){return this.cqZ(d)},
cqZ(d){var w=0,v=A.j(x.H),u=this,t
var $async$uH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a8(t,!1).cb(A.e9(new C.e4z(d),!1,null,x.H)),$async$uH)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.PX()
return A.h(null,v)}})
return A.i($async$uH,v)},
gb7N(){var w,v,u,t=C.Nj(this.gTo()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a39(d){return this.cyh(d)},
cyh(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a39=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d_T(r),$async$a39)
case 2:if(u.c!=null)u.l(new C.e4A(u,r))
return A.h(null,v)}})
return A.i($async$a39,v)},
Pg(d){return this.bSH(d)},
bSH(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Pg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hlh(t.gTo())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.N3("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a8(s,!1).cb(A.e9(new C.e4w(q),!1,null,r)),$async$Pg)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bk(j,new C.e4x(p))
o=s.length
B.d.ca(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a39(A.cT(s,0,A.dx(2,"count",x.S),r).dq(0)),$async$Pg)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pg,v)},
Yi(d,e){return this.bQg(0,e)},
bQg(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Yi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cg(null,null,!0,null,new C.e4v(e),o,null,!0,!0,x.y),$async$Yi)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hlh(u.gTo()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a39(o),$async$Yi)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Yi,v)},
aaT(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e4s(this,j):h
o=o?0.55:1
w=A.ap(g,B.v,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ab(0,B.H,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.Ws,p,p,p),B.aY],s)
q=A.m(10)
r.push(A.o(p,A.c(i,p,p,p,p,p,p,D.fCt,p,p,p),B.f,p,p,new A.n(B.i_,p,p,q,p,p,B.m),p,p,p,p,B.zu,p,p,p))
return A.ay(p,A.d2(A.o(p,A.x(A.a([A.A(r,B.l,p,B.e,B.h,0,p,p),B.aY,A.c(e,p,2,p,p,p,p,D.fKp,p,p,p),B.cT,A.c(f,p,3,B.a2,p,p,p,D.fDc,p,p,p)],s),B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.n(p,p,u,v,t,new A.a7(B.ay,B.aC,B.x,w,p,p),B.m),p,p,p,p,B.wU,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
XM(d,e,f,g,h,i){return this.aaT(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Nj(s.gTo()),p=s.gTo(),o=C.aRZ(s.e),n=C.hlh(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e4B(s),k=C.hMc(p,1).length,j=C.hMn(p,1).length,i=C.hNh(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.K(B.cW.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,B.acV,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fHR,r,r,r),a0=q.b.length,a1=x.p
g=A.o(r,A.A(A.a([e,B.bb,A.E(A.x(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.WM,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),1),A.x(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qf,r,r,r),D.h60],a1),B.l,r,B.e,B.h,0,B.p)],a1),B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.n(h,r,f,g,r,r,B.m),r,r,r,r,B.bH,r,r,r)
f=s.XM("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.e4C(s,p),l.$1("kahoot"))
h=s.XM("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lP,new C.e4D(s,p),l.$1("fire"))
a0=s.XM("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wI,new C.e4E(s,p),l.$1("catch"))
j=j!==0?new C.e4H(s,p):r
j=s.aaT("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hX,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e4I(s,p):r
i=s.aaT("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lO,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.XM("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.ft,new C.e4J(s,p),l.$1("journey"))
k=k!==0?new C.e4K(s,p):r
k=A.a([g,B.aO,D.ha3,B.P,A.l2(0.98,A.a([f,h,a0,j,i,e,s.aaT("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.eq,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.XM("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d8,new C.e4L(s,p),l.$1("school"))],a1),2,12,12,r,B.e3,!0),B.dc,A.A(A.a([D.bMx,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fCy,r,r,r)],a1),B.l,r,B.e,B.h,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.av(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fRx,B.bb,new A.bx(1,B.ba,A.x(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hr,r,r,r),A.c(""+v.gaqj(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.Fq,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),r)],a1)
if(v.gaqj(0).length>=2){f=D.lR.j(0.2)
t=new A.av(D.lR,1,B.r,-1)
g.push(A.ay(r,A.o(r,A.W(B.fZ,D.lR,r,r,r,20),B.f,r,r,new A.n(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e4M(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cW.j(0.2)
t=new A.av(B.cW,1,B.r,-1)
f=A.ay(r,A.o(r,A.W(B.jj,B.cW,r,r,r,20),B.f,r,r,new A.n(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e4N(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fo.j(0.2)
t=new A.av(B.fo,1,B.r,-1)
B.d.u(g,A.a([B.bj,f,B.bj,A.ay(r,A.o(r,A.W(B.eo,B.fo,r,r,r,20),B.f,r,r,new A.n(e,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e4O(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.o(r,new A.c3(B.aL,B.e,B.h,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.n(i,r,new A.bE(u,u,u,u),new A.bb(h,h,h,h),r,r,B.m),r,r,r,B.d4,B.bl,r,r,r))}if(s.a.e){j=m?new C.e4F(s):new C.e4G(a2)
i=A.m(18)
h=A.K(m?B.cW:B.aT,B.r,2)
g=m?B.cW.j(0.12):B.dq
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.ay(r,A.o(r,A.as(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.cW:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.n(g,r,h,i,r,r,B.m),r,r,r,r,B.OS,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.hb_)
k.push(B.aA)
k.push(D.auL)
return new C.tI("Family Games \xb7 "+p.b,A.cn(k,r,r,D.bGD,r,r,B.ah,!1),B.fe,r)}}
C.a0u.prototype={
a7(){return"_KPhase."+this.b}}
C.amM.prototype={
S(){return new C.amN(D.b2E)},
gd3(){return this.e}}
C.amN.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a3()},
fY(d){var w,v=this
v.l(new C.bTV(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.de(B.fW,new C.bTW(v))},
aQQ(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.l(new C.bTL(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.de(B.fn,new C.bTM(w))},
Lt(d){var w
if(this.d!==D.aem)return
w=this.at
if(w!=null)w.a1(0)
this.b7J(d)},
b7J(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.T(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bTR(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.tj,v.giC(v))},
cNo(d){var w=this
if(w.d!==D.XS)return
if(w.e+1>=w.a.w.length)w.Z4()
else{w.l(new C.bTS(w))
w.aQQ()}},
Z4(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Z4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bHZ(p,u.w,t)
u.l(new C.bTO(u,s))
w=2
return A.b(C.C0(u.a.e,s),$async$Z4)
case 2:r=e
t=u.a
w=3
return A.b(C.C1(t.e,t.f,t.r,u.f),$async$Z4)
case 3:q=e
if(u.c!=null)u.l(new C.bTP(u,r,q))
return A.h(null,v)}})
return A.i($async$Z4,v)},
cOd(){var w,v,u,t,s=this,r=s.a,q=new A.e_()
q.cU(r.w.length*31+B.a.gY(r.f))
w=s.a.w.length*900
v=A.a([new A.b3("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cT(r,0,A.dx(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bR(r,r.gJ(0),u.k("bR<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b3(t,B.i.T(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bTT())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b2E===r){w=A.a([D.h6p,B.S,A.c(s,t,t,t,t,t,t,B.WW,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fCG,t,t,t))
w.push(B.aA)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.Bu,B.K,t,t))
w.push(B.e9)
w.push(C.uB("Play",u.geY(u),B.cW,B.fZ,D.fI))
w=A.as(new A.D(B.eF,A.x(w,B.l,t,B.e,B.M,0,B.p),t),t,t,t)
break A}if(D.b2F===r){w=A.as(A.c(""+u.z,t,t,t,t,t,t,D.fKX,t,t,t),t,t,t)
break A}if(D.aem===r||D.XS===r){w=u.ctD()
break A}if(D.b2G===r){w=u.ce7()
break A}w=t}return new C.tI(s,w,B.fe,t)},
ctD(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.XS,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aXB,j,j,j),B.aY],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.LC,j,j,j))
g.push(B.ar)
f=A.m(14)
g.push(A.o(j,A.c(""+k.f,j,j,j,j,j,j,B.iP,j,j,j),B.f,j,j,new A.n(B.bw,j,j,f,j,j,B.m),j,j,j,j,B.CW,j,j,j))
g=A.A(g,B.l,j,B.e,B.h,0,j,j)
f=A.m(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.bv(f,A.jE(B.bw,j,k.as<5?B.fo:B.cW,9,j,w,j),B.aq)
w=A.m(22)
v=A.K(B.cW,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.lR:B.nC,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fBJ,B.K,j,j)],h),B.l,j,B.e,B.M,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fN7,B.K,j,j)
w=A.E(A.o(j,A.as(u,j,j,j),B.f,j,j,new A.n(D.qF,j,v,w,j,j,B.m),j,j,j,j,B.fc,j,j,1/0),3)
v=A.a([],h)
for(u=k.giC(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bTQ(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aEV[o]
m=new A.aP(16,16)
l=new A.av(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aFe[o],j,j,j,j,j,j,D.fDF,j,j,j),B.ar,new A.bx(1,B.ba,A.c(r[t],j,3,B.a2,j,j,j,D.fCD,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(B.ate)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c0t)
v.push(A.ay(j,new A.Td(A.o(j,new A.c3(B.aL,B.e,B.h,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.n(n,j,new A.bE(l,l,l,l),new A.bb(m,m,m,m),H.aDi,j,B.m),j,j,j,j,B.f8,j,j,j),p,B.b_,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.al,f,B.af,w,B.af,A.E(A.l2(1.45,v,2,10,10,j,B.e3,!1),4)],h)
if(i)h.push(D.eAm)
return new A.D(B.a1L,A.x(h,B.l,j,B.e,B.h,0,B.p),j)},
ce7(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cOd(),m=x.p,l=A.a([D.beI,A.as(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qf,o,o,o),o,o,o),A.as(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Wx,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cW.j(0.25):B.dq
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.av(s?B.cW:B.bw,1,B.r,-1)
q=A.c(w<3?D.dn4[w]:""+(w+1),o,o,o,o,o,o,B.m8,o,o,o)
s=s?B.u:B.O
l.push(A.o(o,new A.c3(B.aL,B.e,B.h,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bx(1,B.ba,A.c(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.iP,o,o,o)],m),o),B.f,o,o,new A.n(v,o,new A.bE(r,r,r,r),new A.bb(u,u,u,u),o,o,B.m),o,o,o,B.cy,B.eX,o,o,o))}l.push(B.S)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.IG(m,v,p.CW,o))
l.push(B.aO)
l.push(A.as(C.uB("Back to the games",new C.bTN(p),B.cW,B.ki,D.fI),o,o,o))
return A.cn(l,o,o,B.fc,o,o,B.ah,!1)}}
C.Uo.prototype={
S(){return new C.amJ(A.S(x.de,x.er))}}
C.amJ.prototype={
gDn(){var w,v=this,u=v.d
if(u===$){w=C.hrh(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
glX(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDn().b
v=$.ax()
u.e!==$&&A.bF()
t=u.e=new A.at(new A.bd(w,B.b8,B.aP),v)}return t},
che(d){return this.f.c_(0,d,new C.bTl(d))},
Z(){this.a4()
var w=this.gDn().c
if(w.length===0)w.push(C.hcJ(null,0,20,""))},
t(){var w,v,u=this.glX(0)
u.V$=$.ax()
u.R$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gP(w)
v.V$=$.ax()
v.R$=0}this.a3()},
cNe(){if(this.gDn().c.length>=12)return
this.l(new C.bTm(this))},
jG(d){var w,v,u=this,t=u.gDn()
t.b=B.a.i(u.glX(0).a.a)
w=t.gaqj(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.U(D.fuF)
return}v=t.c
B.d.a8(v)
B.d.u(v,w)
v=u.c
v.toString
A.a8(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bTw(),r=x.p,q=A.a([A.bO(!1,D.fWB,t,t,!0,t,t,t,u.gbry(u),t,t)],r),p=A.a([D.haB,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glX(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ae,t,t,t,t,t,t,t,t,t,t,t,B.he,!0,B.a7,t,B.ao,t,t,t,t),B.aA],r)
for(w=0;v=u.gDn().c.length,w<v;++w)B.d.u(p,A.a([new A.fi(new C.bTv(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uB("\uff0b Add a question",u.gcNd(),B.aT,t,B.c),t,t,t))
return new C.tI("Make your game",A.cn(p,t,t,D.bGA,t,t,B.ah,!1),q,t)}}
C.arU.prototype={
S(){return new C.aG3(A.a([],x._))},
bv(){return this.r.$0()},
qu(){return this.w.$0()},
ge3(){return this.c}}
C.aG3.prototype={
Z(){var w,v
this.a4()
this.wE()
w=this.a
v=w.c
if(v.length!==0)C.a8Q(v,w.e,w.d.w)},
wu(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.ho6(r,t.e,!1,s.w,new C.e6d(u),null,s),$async$wu)
case 2:w=3
return A.b(u.wE(),$async$wu)
case 3:return A.h(null,v)}})
return A.i($async$wu,v)},
a1l(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1l=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.ho6(r,t.e,!0,s.w,new C.e6c(u),null,s),$async$a1l)
case 2:w=3
return A.b(u.wE(),$async$a1l)
case 3:return A.h(null,v)}})
return A.i($async$a1l,v)},
wE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bu(q.a.c),$async$wE)
case 7:p=e
if(q.c!=null)n=q.e||J.cK(p)
else n=!1
if(n)q.l(new C.e6f(q,p))
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
return A.b(C.HA(q.a.c).dc(0,B.qS),$async$wE)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.e6g(q,o))
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
if(q.c!=null&&q.e)q.l(new C.e6h(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wE,v)},
PC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$PC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.U(D.fuf)
w=3
return A.b(C.HA(t.a.c),$async$PC)
case 3:r=e
w=4
return A.b(C.h2a(t.a.c,r),$async$PC)
case 4:q=e
w=5
return A.b(C.HA(t.a.c),$async$PC)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.e6b(t,p))
o=t.c.L(s).f
s=A.c(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(null,null,null,q?B.dP:B.d3,null,B.t,null,s,null,B.lv,null,null,null,null,null,null,null,null,null,null))
t.a.qu()
case 1:return A.h(u,v)}})
return A.i($async$PC,v)},
IJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iyU(l),$async$IJ)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.i1v(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b2m(q,p.e,l,"Each family tree costs $"+B.i.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IJ)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hIo(r)
o=Date.now()
n=t.a.c
m=new C.l1(l,r.toUpperCase(),p,!0,B.Z,D.Ef,new A.V(o,0,!1),0,n,D.v8,B.ck)
w=5
return A.b(C.a4v(n,m),$async$IJ)
case 5:w=6
return A.b(t.wE(),$async$IJ)
case 6:t.a.bv()
t.a.qu()
if(t.c==null){w=1
break}t.Ff(m)
case 1:return A.h(u,v)}})
return A.i($async$IJ,v)},
Ff(d){return this.cmb(d)},
cmb(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Ff=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bu(u.a.c),$async$Ff)
case 2:n=l.nA(k.dI(f,new C.e6e(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hG(m,new C.arO(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Ff)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a4v(u.a.c,o),$async$Ff)
case 6:case 5:w=7
return A.b(u.wE(),$async$Ff)
case 7:u.a.qu()
return A.h(null,v)}})
return A.i($async$Ff,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=new C.um(p)
if(r.e)return A.as(A.n4(q,p?B.bu:B.bi,q,q,q,q,q,q,q,q),q,q,q)
if(J.cu(r.d)){w=p?B.ek:B.c
v=A.m(15)
u=A.aF(!1,B.a3,!0,q,A.aM(!1,q,!0,A.o(q,D.bZ_,B.f,q,q,new A.n(B.aU.j(0.12),q,A.K(B.aU,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cK,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcld(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.GB(A.o(q,A.x(A.a([u,B.aO,t,B.P,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bi,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e9,A.bJ(D.hdT,q,r.gaU9(),A.bn(B.bQ,q,q,q,q,q,B.a28,q,new A.b9(A.m(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.h,0,B.p),B.f,q,q,new A.n(w,q,q,v,q,q,B.m),q,q,q,q,D.bJm,q,q,1/0),15,B.ag,1.05,D.ae9,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aY],v)
if(J.cK(r.d))w.push(A.aH(q,q,q,q,A.W(B.A9,B.aU,q,q,q,q),q,q,q,new C.e6j(r),q,q,q,q,"Sync family trees with database",q))
if(J.cK(r.d))w.push(A.aH(q,q,q,q,A.W(B.A5,B.aU,q,q,q,q),q,q,q,r.gahL(),q,q,q,q,"Transfer / backup file",q))
w.push(A.d8(B.au9,q,D.fTT,r.gaU9(),A.bn(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.h,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.GB(r.cJm(J.t(r.d,s),o),14,B.ag,1,D.ae9,q))
B.d.u(w,u)}return A.x(A.a([p,B.aA,A.x(w,B.l,q,B.e,B.h,0,B.p)],v),B.B,q,B.e,B.h,0,B.p)},
cJm(d,e){var w=null,v=e.a,u=v?B.ek:B.c,t=A.m(14),s=A.K((v?B.em:B.bO).j(0.55),B.r,1),r=A.a([new A.ab(0,B.H,B.v.j(v?0.35:0.08),B.eA,10)],x.V),q=A.m(14),p=A.o(w,D.bY4,B.f,w,w,new A.n(B.aU.j(0.15),w,w,A.m(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.garj(),m=d.d?"":" \xb7 Public",l=d.y===D.l5?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bC,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bi,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.B,w,B.e,B.h,0,B.p),1)
return A.o(w,A.aF(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bH,A.A(A.a([p,B.bb,l,A.W(B.PL,v?B.bu:B.bi,w,w,w,w)],k),B.l,w,B.e,B.h,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e6i(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.n(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.arO.prototype={
S(){return new C.aG0(A.a([],x._),A.aQ(x.N),A.bb8())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aG0.prototype={
Z(){var w,v,u=this
u.a4()
u.d=u.a.w
u.aem()
w=u.a
v=w.c
if(v.length!==0)C.a8Q(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.ax()
w.R$=0
this.a3()},
a4k(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yF("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e5E(r),s,null,!0,!0,x.y),$async$a4k)
case 3:if(e!==!0||t.c==null){w=1
break}t.Ko()
t.l(new C.e5F(t,r))
w=4
return A.b(t.uD(),$async$a4k)
case 4:t.a.bv()
t.yF(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a4k,v)},
cyT(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.e5z(w,f,d,e))},
aWt(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dt()
u.ed(w,v,0,1)
u.k7(q,q,1,1)
this.w.sp(0,u)},
beo(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eM(new Float64Array(16))
q.e8(r)
w=q.Ds()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dt()
t.ed(r,u,0,1)
t.k7(v,v,1,1)
t.ed(-r,-u,0,1)
t.iZ(0,q)
s.sp(0,t)},
aem(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aem=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bu(u.a.c),$async$aem)
case 2:t=s.nA(r.dI(e,new C.e50(u)))
if(t!=null&&u.c!=null)u.l(new C.e51(u,t))
return A.h(null,v)}})
return A.i($async$aem,v)},
yF(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
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
return A.b(C.ho6(o,t,!1,r,new C.e5i(u),q.a,s),$async$wu)
case 2:n=A
m=J
w=3
return A.b(C.HA(u.a.c),$async$wu)
case 3:p=n.nA(m.dI(e,new C.e5j(u)))
if(p!=null&&u.c!=null)u.l(new C.e5k(u,p))
return A.h(null,v)}})
return A.i($async$wu,v)},
Ko(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cH(w,0)},
uD(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a4v(t,s),$async$uD)
case 2:return A.h(null,v)}})
return A.i($async$uD,v)},
a2R(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uC(q,t.a.c)){t.yF("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iA6(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2R)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Ko()
t.l(new C.e5y(t,r))
w=4
return A.b(t.uD(),$async$a2R)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2R,v)},
b4o(){var w=this.c
w.toString
A.a8(w,!1).cb(A.e9(new C.e5f(this),!1,null,x.H))},
a1y(){return this.cmd()},
cmd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.d()
if(!C.uC(m,t.a.c)){t.yF("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.O(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e5v(),A.T(s).k("Y<1>")).gJ(0)
s=A.ew([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("ci.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e5w(n,t,new C.um(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1y)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Ko()
t.l(new C.e5x(t,o))
w=6
return A.b(t.uD(),$async$a1y)
case 6:case 5:if(o.a&&t.c!=null)t.b4o()
case 1:return A.h(u,v)}})
return A.i($async$a1y,v)},
X5(d){return this.bF9(d)},
bF9(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uC(r,t.a.c)){t.yF("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e4P(t,d),r,null,!0,!0,x.P),$async$X5)
case 3:s=f
if(s==null){w=1
break}t.Ko()
t.l(new C.e4Q(t,s))
w=4
return A.b(t.uD(),$async$X5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X5,v)},
a4F(d){return this.cLC(d)},
cLC(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4F=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.O(s)
t=u.c
t.toString
w=2
return A.b(A.cg(null,null,!0,null,new C.e5H(u,d,new C.um(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4F)
case 2:return A.h(null,v)}})
return A.i($async$a4F,v)},
cir(d){var w=this,v=w.d
v===$&&A.d()
if(C.uC(v,w.a.c))w.Ph(d)
else w.a4F(d)},
akg(d,e){return this.cCT(d,e)},
cCT(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$akg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.O(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cg(null,null,!0,null,new C.e5B(new C.um(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$akg)
case 3:case 1:return A.h(u,v)}})
return A.i($async$akg,v)},
IO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.l5?3:5
break
case 3:w=6
return A.b(C.haW(t.a.c),$async$IO)
case 6:s=e
o=t.a
r=C.hwa(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.akg(!s,!r),$async$IO)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aS3(o,t.a.c)){t.yF("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lp(o,"Cancel","Remove",q.y===D.l5?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IO)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aS1(t.a.c,t.d.a),$async$IO)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j6(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IO,v)},
abP(d){return this.bQx(d)},
bQx(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$abP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uC(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aS(s,new C.e4R(p))){o=A.T(s)
p.a=A.nA(new A.cL(new A.Y(s,new C.e4S(d),o.k("Y<1>")),new C.e4T(),o.k("cL<1,p>")))}q=p.a
if(q==null)q=d.d
t.Ko()
t.l(new C.e4U(t,s,d,q))
w=3
return A.b(t.uD(),$async$abP)
case 3:t.yF(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$abP,v)},
Ph(d){return this.bSL(d)},
bSL(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ph=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uC(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4F(d),$async$Ph)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cg(null,null,!0,null,new C.e4Y(t,d),r,null,!0,!0,x.P),$async$Ph)
case 6:s=f
if(s==null){w=1
break}t.Ko()
t.l(new C.e4Z(t,s))
w=7
return A.b(t.uD(),$async$Ph)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ph,v)},
cJN(){var w=this,v=w.d
v===$&&A.d()
if(!C.uC(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.e5G(w))
w.uD()},
a_9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aS3(n,t.a.c)){t.yF("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.O(n)
s=$.ax()
r=new A.at(B.ax,s)
q=t.d.e
p=A.bs(new A.N(q,t.gcgU(),A.T(q).k("N<1,p>")).c0(0,new C.e5a()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.e5b(t,new C.um(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_9)
case 3:o=e
r.V$=s
r.R$=0
if(o!==!0||t.c==null){w=1
break}t.Ko()
t.l(new C.e5c(t,p))
w=4
return A.b(t.uD(),$async$a_9)
case 4:t.yF("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_9,v)},
cgV(d){return B.a.i(d.toLowerCase())},
ckY(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uC(v,w)
t=r.d
s=C.ip1(t)
C.iyY(q,t.b,u,C.ip0(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.um(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.Y(l,new C.e5O(),A.T(l).k("Y<1>")).gJ(0)
l=n?B.c6:B.hW
v=A.W(B.a3i,n?B.bu:B.bi,o,o,o,18)
u=x.p
v=A.a([new A.D(B.CX,A.aM(!1,o,!0,new A.D(B.hK,A.A(A.a([v,B.bj,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bi,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.M,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e5P(p,d),o,o,o,o,o,o,o),o),new A.D(B.nU,p.c2Z(m),o)],u)
if(p.d.y===D.l5){t=B.tR.j(0.15)
s=A.m(12)
r=A.K(B.tR.j(0.45),B.r,1)
q=C.Hy(p.d,p.a.c)
v.push(new A.D(B.zn,A.o(o,A.A(A.a([D.c2E,B.ar,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.n(t,o,r,s,o,o,B.m),o,o,o,o,B.hx,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,15,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY],u)
if(C.uC(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GN("Undo",B.pO,p.gcJM(),m,o,o))
u.push(new C.GN("Family Book",D.bSH,p.gckX(),m,B.uH,o))
u.push(new C.GN("Family games",B.o2,p.gcl8(),m,B.aD,o))
if(C.uC(p.d,p.a.c))u.push(new C.GN("Display settings",B.DN,p.gcmc(),m,B.b5,o))
u.push(new C.GN("Sync",B.A5,p.gahL(),m,o,o))
t=p.d
if(t.y===D.l5||C.aS3(t,p.a.c)){t=p.d.y===D.l5?"Remove shared tree":"Delete tree"
u.push(new C.GN(t,B.eo,p.gbQH(),m,B.fo,o))}if(C.uC(p.d,p.a.c))u.push(new C.GN("Add member",B.xh,new C.e5Q(p),m,B.bQ,o))
v.push(new A.D(B.anQ,A.A(u,B.l,o,B.e,B.h,0,o,o),o))
if(p.d.garj()===0){u=A.as(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bi,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.ce(new C.e5R(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.W(n?G.a3m:Q.PM,o,o,o,o,o)
v.push(A.as(A.hq(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e5S(p),o),o,o,o))}return A.c5(o,l,A.bm(!0,A.x(v,B.B,o,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c2Z(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.m(22)
v=A.a([new A.ab(0,B.H,B.h6.j(0.35),B.dm,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.W(B.zY,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a3,!0,m,A.aM(!1,m,!0,A.o(m,D.c6_,B.f,m,m,new A.n(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cK,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahL(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fEI,m,m,m)
r=r.garj()
p=n.d.garj()===1?"member":"members"
o=x.p
p=A.a([s,B.bb,A.E(A.x(A.a([q,B.bC,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.B,m,B.e,B.h,0,B.p),1)],o)
if(C.uC(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.c2T,m,m,m,n.gcwb(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.h,0,m,m)
r=n.d.d
q=r?B.jR:B.ne
r=r?"Private":"Public"
r=A.E(n.axS(q,"Privacy",r,n.a.d.w?n.gcIG():m),1)
q=A.E(n.axS(B.xn,"Tree code",n.d.c,new C.e5_(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.aa,q,B.aa,A.E(n.axS(D.bUo,"Collaborators",p,n.gc7X()),1)],o),B.l,m,B.e,B.h,0,m,m)],o)
if(n.d.y===D.l5){s=B.c.j(0.15)
B.d.u(p,A.a([B.P,A.aF(!1,B.a3,!0,A.m(999),A.aM(!1,A.m(999),!0,new A.D(B.fL,A.A(A.a([A.W(B.o3,B.c,m,m,m,14),B.e4,A.c("View only",m,m,m,m,m,m,B.acD,m,m,m)],o),B.l,m,B.e,B.M,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.o(m,A.bv(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.HB,A.x(p,B.B,m,B.e,B.h,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.n(m,m,m,w,v,D.cal,B.m),m,m,m,m,m,m,m,1/0)},
axS(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a3,!0,A.m(14),A.aM(!1,A.m(14),!0,new A.D(B.ap6,A.x(A.a([A.W(d,B.c,w,w,w,18),B.au,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rz,A.c(f,w,1,B.a2,w,w,w,B.xY,w,w,w)],x.p),B.l,w,B.e,B.h,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bhV.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bL
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bhY(s,t),new A.au(w,v))],x.p)
r=r.gdM(r)
B.d.u(u,r.dP(r,new C.djB(this),x.l))
r=s.c
B.d.u(u,new A.N(r,new C.djC(this),A.T(r).k("N<1,w>")))
return new A.D(B.v4,new A.a5(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.L7.prototype={}
C.GR.prototype={}
C.bhX.prototype={
gbmY(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aLM.prototype={}
C.bhY.prototype={
bSm(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.R()
v=A.L()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aG(q.r,B.aj,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.hY(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.hY(u+4.95,r,u+9.9,s,u,q))
t.E(new A.by())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bA.gp(0)
d.af(t,q)},
bSj(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.djW())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aS(a0,new C.djX(f))
t=new A.N(a0,new C.djY(f),A.T(a0).k("N<1,G>")).c0(0,new C.djZ()).cC(0,1/0,B.pp)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.lN(n)
k=Math.min(10,m/2)
m=$.R()
j=A.a([],r)
i=new A.aG(m.r,B.aj,null,null,j)
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
a2(d,e){var w,v,u,t,s,r
$.R()
w=A.L()
w.r=B.bQ.j(0.75).gp(0)
w.c=2.2
w.b=B.ab
w.d=B.bG
w.e=B.dO
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bSj(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bSm(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.blL.prototype={
gce9(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aFv
switch(w.c.a){case 0:return D.d3M
case 1:return D.dgC
case 2:return D.dze}},
gcec(){var w=this.c,v=C.hHB(w.w),u=C.hHB(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=t.gce9(),p=t.c,o=A.bGz(p.f),n=t.gcec(),m=x.V,l=A.a([new A.ab(0,B.H,B.d.gal(q).j(0.35),B.cO,10)],m),k=r?B.aw:B.c,j=A.K(r?B.aw:B.c,B.r,2)
if(o!=null)w=A.tL(B.z,s,B.cp,B.bZ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.o(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.n(s,s,s,s,s,new A.a7(B.a5,B.a9,B.x,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.o(s,A.o(s,A.i6(w,B.aq),B.f,s,s,new A.n(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.n(s,s,s,s,l,new A.a7(B.ay,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Da,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.K(r?B.aw:B.c,B.r,1.5)
l.push(A.ao(s,A.o(s,A.c(""+k,s,s,s,s,s,s,D.fPC,s,s,s),B.f,s,s,new A.n(B.cd,s,w,j,s,s,B.m),s,s,s,s,D.bLl,s,s,s),s,s,s,-6,-4,s))}k=r?B.cu:B.c
j=A.m(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.H,B.v.j(r?0.3:0.06),B.dQ,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cu,s,s,s,s,s,s,s,s,u,s,s,B.F,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bi,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.ay(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.au,A.o(s,A.x(p,B.l,s,B.e,B.M,0,B.p),B.f,s,D.b8R,new A.n(k,s,w,j,m,s,B.m),s,s,s,s,D.bLw,s,s,s)],v),B.l,s,B.e,B.h,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bgZ.prototype={
a2(d,e){var w,v,u,t,s
$.R()
w=A.L()
v=this.b
u=v?B.c:D.bm2
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.bzS.prototype={
B(d){var w=this,v=null,u=new C.frK(w),t=w.c,s=t?B.cu:B.c,r=A.m(12),q=u.$3(B.ia,"Zoom in",w.d),p=A.o(v,v,B.f,t?B.bw:B.fy,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xj,"Zoom out",w.e)
return A.aF(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.o(v,v,B.f,t?B.bw:B.fy,v,v,v,1,v,v,v,v,v,22),u.$3(B.arz,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.M,0,B.p),B.f,s,4,v,B.dG,v,v,v,B.ai)}}
C.bp6.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.K(B.bQ,B.r,2),s=w.e,r=x.p
t=A.ay(v,A.o(v,A.x(A.a([A.W(s?G.a3m:Q.PM,B.bQ,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fLC,v,v,v)],r),B.l,v,B.b9,B.h,0,B.p),B.f,v,v,new A.n(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.al,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fJn,B.K,v,v)],r)
if(s){t=A.a([B.al],r)
s=w.d
B.d.u(t,new A.N(s,new C.f1E(w),A.T(s).k("N<1,w>")))
B.d.u(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.h,0,B.p),v)}}
C.a0I.prototype={
S(){return new C.aEt()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aEt.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a4()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
r.d!==$&&A.aR()
r.d=new A.at(new A.bd(t,B.b8,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aR()
r.e=new A.at(new A.bd(t,B.b8,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aR()
r.f=new A.at(new A.bd(t,B.b8,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aR()
r.r=new A.at(new A.bd(t,B.b8,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aR()
r.w=new A.at(new A.bd(t,B.b8,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aR()
r.x=new A.at(new A.bd(t,B.b8,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zB:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.iqw(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.d()
w=u.V$=$.ax()
u.R$=0
u=v.e
u===$&&A.d()
u.V$=w
u.R$=0
u=v.f
u===$&&A.d()
u.V$=w
u.R$=0
u=v.r
u===$&&A.d()
u.V$=w
u.R$=0
u=v.w
u===$&&A.d()
u.V$=w
u.R$=0
u=v.x
u===$&&A.d()
u.V$=w
u.R$=0
v.a3()},
QN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$QN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hwa(p.y,p.w)
w=3
return A.b(A.lC(t.a.w,B.Kc),$async$QN)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b2m(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$QN)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.i1w(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(A.DT(78,800),$async$QN)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dzY(t,q))
case 1:return A.h(u,v)}})
return A.i($async$QN,v)},
ceb(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.d()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i7(B.o.v(1000*Date.now()),w,D.zB,null,null,null,"","","","","",1,!1,0)
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
s=v.aH0(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a8(k,!1).N(s)},
abq(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$abq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.dzX(r),s,null,!0,!0,x.y),$async$abq)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a8(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$abq,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===B.I,i=new C.um(j),h=l.a.e,g=A.T(h).k("Y<1>"),f=A.B(new A.Y(h,new C.dA6(l),g),g.k("M.E"))
h=j?B.ek:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bJI,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.he(A.aM(!1,k,!0,new A.D(B.m_,A.W(B.eo,B.pC,k,k,k,17),k),B.cK,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbNf(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.k5:B.iG
t=A.bGz(l.as)
if(l.as==null)s=A.W(B.pJ,j?B.bu:B.bi,k,k,k,40)
else s=k
s=A.as(A.ay(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hi(u,t,s,k,42),A.ao(0,A.hi(B.bQ,k,D.bX7,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gce8(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aEv(t,"Full name",B.ms,1,1,i,B.mJ)
u=l.y
u===$&&A.d()
u=A.x(A.a([t,B.S,new C.blJ(i,u,new C.dA7(l),k)],v),B.l,k,B.e,B.h,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bi,k,k,k,k,k,k,k,k,11,k,k,B.F,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bCZ],q)
o=l.a.e
B.d.u(p,new A.N(o,new C.dA8(),A.T(o).k("N<1,eS<p?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bi,k,k,k,k,k,k,k,k,11,k,k,B.F,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bD0],q)
B.d.u(q,new A.N(f,new C.dAa(),A.T(f).k("N<1,eS<p?>>")))
o=A.x(A.a([t,B.al,new C.aeU(i,r,"Who is their parent?",p,new C.dAb(l),k,o),B.aA,n,B.al,new C.aeU(i,m,"Who is their spouse / partner?",q,new C.dAc(l),k,o)],v),B.am,k,B.e,B.h,0,B.p)
q=l.f
q===$&&A.d()
q=C.aEv(q,"Birth date",D.aqK,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aEv(m,"Birth place",B.a3C,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aEv(n,"Date of death (if deceased)",D.asS,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aEv(p,"Occupation",B.QM,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.an(B.z,k,B.ad,B.t,w,k),B.aA,s,B.bx,new C.aeV(i,"Identity",u,k),B.af,new C.aeV(i,"Family links",o,k),B.af,new C.aeV(i,"Life details",A.x(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aEv(r,"Notes",B.l8,5,3,i,k)],v),B.l,k,B.e,B.h,0,B.p),k),B.af,new C.aEu(i,"Child order",l.cms(l.at),new C.dAd(l),new C.dAe(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hl5(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dAf(l):k
B.d.u(r,A.a([B.S,new C.aEu(i,"Visible in tree",u,w,new C.dAg(l),k)],v))}r.push(B.S)
w=j?B.k5:B.iG
u=A.m(14)
t=A.K(j?B.em:B.bO,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.o(k,A.iY(k,B.bQ,k,B.ag,k,new C.dAh(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bi,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.n(w,k,t,u,k,k,B.m),k,k,k,k,G.anu,k,k,k))
r.push(B.bx)
w=j?B.aS:B.aw
j=j?B.em:B.bO
r.push(A.A(A.a([A.E(A.dU(B.ok,new C.dA9(d),A.dg(k,k,k,k,k,k,k,k,k,w,k,k,B.cm,k,new A.b9(A.m(14),B.a1),new A.av(j,1,B.r,-1),k,k,k,k)),1),B.bb,A.E(A.bJ(D.flQ,k,l.gcea(),A.bn(B.aU,k,k,0,B.c,k,B.cm,k,new A.b9(A.m(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.h,0,k,k))
r.push(B.au)
return A.ek(B.fe,k,B.ag,h,new A.a5(420,k,A.c9(A.x(r,B.am,k,B.e,B.M,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.aop,k,B.anG,new A.b9(g,B.a1),k,k)},
cms(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aeV.prototype={
B(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bi,w,w,w,w,w,w,w,w,10,w,w,B.F,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.k5:B.iG,s=A.m(16)
return A.x(A.a([new A.D(B.a2c,u,w),A.o(w,this.e,B.f,w,w,new A.n(t,w,A.K(v?B.em:B.bO,B.r,1),s,w,w,B.m),w,w,w,w,B.bl,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)}}
C.blK.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ek:B.c,r=A.m(12),q=A.K((t?B.em:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.o(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bA(u,B.eU,u,B.to,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bu:B.bi,u,u,u,u,u,u,u,u,u,u,u,B.cF,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ae,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.n(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.aeU.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ek:B.c,s=A.m(12),r=A.K((u?B.em:B.bO).j(0.85),B.r,1),q=A.W(B.ty,u?B.bu:B.bi,v,v,v,v),p=A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ek:B.c
return A.o(v,new A.EE(A.a60(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bi,v,v,v,v,v,v,v,v,v,v,v,B.cF,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.n(t,v,r,s,v,v,B.m),v,v,v,v,B.l3,v,v,v)}}
C.blJ.prototype={
B(d){var w=new C.dAi(this)
return A.A(A.a([w.$3(D.x3,"Male",B.Qw),B.aa,w.$3(D.oO,"Female",B.Qj),B.aa,w.$3(D.zB,"Other",B.o_)],x.p),B.l,null,B.e,B.h,0,null,null)}}
C.aEu.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.k5:B.iG,r=A.m(14),q=A.K(t?B.em:B.bO,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,13,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.o(v,A.A(A.a([A.E(A.x(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bi,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.B,v,B.e,B.h,0,B.p),1),new C.aKO(u,B.xj,w.f,v),B.bj,new C.aKO(u,B.ia,w.r,v)],o),B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.n(s,v,q,r,v,v,B.m),v,v,v,v,B.ey,v,v,v)}}
C.aKO.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.ek:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bQ
else t=(s.c.a?B.bu:B.bi).j(0.4)
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a5(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.aeW.prototype={
bWx(d){switch(d.a){case 0:return B.bQ
case 1:return B.bA
case 2:return B.cC}},
bWy(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_Z(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AX(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ek:B.c
u=A.m(12)
t=A.K((w?B.em:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.W(f,B.bQ,p,p,p,18),B.ar],s))
q=A.c(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bi,p,p,p,p,p,p,p,p,9,p,p,B.F,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.c(o,p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.B,p,B.e,B.h,0,B.p),1))
return A.o(p,A.A(r,B.B,p,B.e,B.h,0,p,p),B.f,p,p,new A.n(v,p,t,u,p,p,B.m),p,p,p,B.cy,B.zk,p,p,1/0)},
ag6(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bi,w,w,w,w,w,w,w,w,10,w,w,B.F,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.k5:B.iG,s=A.m(16),r=A.K(v?B.em:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a2c,u,w),A.o(w,A.x(e,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(t,w,r,s,w,w,B.m),w,w,w,w,B.bT,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hN4(r,q),o=q.c,n=t.bWx(o),m=A.bGz(q.f),l=t.e.a,k=l?B.ek:B.c,j=A.m(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.l5?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bu:B.bi,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ab(0,B.H,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.o(s,A.hi(u,m,m==null?A.W(B.pJ,n,s,s,s,48):s,s,52),B.f,s,s,new A.n(s,s,w,s,v,s,B.a6),s,s,s,s,B.ez,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.K(n.j(0.45),B.r,1)
v=A.as(A.o(s,A.c(t.bWy(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.n(w,s,u,v,s,s,B.m),s,s,s,s,B.lY,s,s,s),s,s,s)
u=x.p
i=A.a([t.AX("Full name",i,B.ms)],u)
if(p>0)i.push(t.AX("Child order","#"+p,B.Qp))
r=A.a([h,B.au,r,B.aO,l,B.S,v,B.bx,t.ag6("Identity",i),B.af,t.ag6("Life details",A.a([t.AX("Birth date",q.w,D.aqK),t.AX("Birth place",q.x,B.a3C),t.AX("Date of death",q.y,D.asS),t.AX("Occupation",q.z,B.QM)],u)),B.af,t.ag6("Family links",A.a([t.AX("1. Parent",t.b_Z(q.d),B.I0),t.AX("2. Spouse",t.b_Z(q.e),B.Ig)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.ag6("Notes",A.a([t.AX("Notes",q,B.l8)],u))],u))
r.push(B.bx)
r.push(A.bJ(B.LJ,s,new C.dAs(d),A.bn(B.aU,s,s,s,s,s,B.cm,s,new A.b9(A.m(14),B.a1),s,s,s)))
return A.eI(s,k,new A.cO(B.mg,A.c9(A.x(r,B.am,s,B.e,B.M,0,B.p),B.t,s,B.y,s,s,B.wY,s,s,B.ah),s),s,s,s,B.HE,s,B.d9,s,new A.b9(j,B.a1),s)}}
C.GN.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bi
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.v6,A.he(A.aF(!1,B.a3,!0,A.m(8),A.aM(!1,A.m(8),!0,new A.a5(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.arR.prototype={
f1(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.ab().ag())
w=u.c
v=A.T(w).k("N<1,aa<p,@>>")
w=A.B(new A.N(w,new C.cgV(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jp(w,new C.cgW(),t,x.fO))
return s}}
C.arS.prototype={
S(){return new C.aG2(A.a([],x.bF))},
gd3(){return this.c}}
C.aG2.prototype={
Z(){this.a4()
this.Kv()},
Kv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Kv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cgZ(t.a.c),$async$Kv)
case 3:r=e
w=4
return A.b(C.Bu(t.a.c),$async$Kv)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rs(q,new C.e60(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.e61(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Kv,v)},
zf(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
Lk(d,e){return this.cMj(d,e)},
cMj(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Lk=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.e65(q,e))
t=3
w=6
return A.b(d.$0(),$async$Lk)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.e66(q))
$.eX.mK()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Lk,v)},
YT(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pH(r,s.c,s.e),$async$YT)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lk(new C.e5Y(t),"Preparing download\u2026"),$async$YT)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YT,v)},
YX(d){return this.bUp(d)},
bUp(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pH(r,s.c,s.e),$async$YX)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Lk(new C.e5Z(t,d),"Preparing file\u2026"),$async$YX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YX,v)},
ai7(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ai7=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xX.cq().N5(B.TA,B.v9,!0),$async$ai7)
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
o=A.jN(o,0,null)
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
return A.i($async$ai7,v)},
Zz(d){return this.c3U(d)},
c3U(d){var w=0,v=A.j(x.H),u=this
var $async$Zz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Lk(new C.e6_(u,d),"Restoring family trees\u2026"),$async$Zz)
case 2:return A.h(null,v)}})
return A.i($async$Zz,v)},
Zy(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ai7(),$async$Zy)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Zz(s),$async$Zy)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zy,v)},
a3I(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3I=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pH(r,s.c,s.e),$async$a3I)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lk(new C.e64(t),"Creating QR code\u2026"),$async$a3I)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3I,v)},
a3j(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DQ()){t.zf("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a8(s,!1).cb(A.e9(new C.e62(),!0,null,x.N)),$async$a3j)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Zz(r),$async$a3j)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a3j,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===B.I,n=o?B.Cn:B.hW,m=o?D.alV:B.aS,l=o?B.aM:B.bO,k=o?B.aS:B.aw,j=new C.dk_(n,m,l,k,o?B.bP:B.bi)
l=A.aH(p,p,p,p,A.W(B.eG,k,p,p,p,20),p,p,p,new C.e68(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eR(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.djy(!0,B.jB,B.aH,B.aH,q.r?p:q.gcCH(),j,s,"Show restore QR"),1),B.ar],u))}s=q.e
r=q.r?p:q.gcyN()
t.push(A.E(C.djy(!s,B.jC,B.b2,B.bk,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.h,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.djy(!1,B.hO,B.aU,B.bQ,q.r?p:q.gbUi(),j,"Photos & books included","Download all trees"),1),B.ar],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.djy(!1,B.A6,B.at,B.aQ,q.r?p:q.gc3R(),j,s,"Upload backup file"),1))
l=A.a([new C.bhW(v,l,p),B.lj,new C.aea(j,"QR restore",p),B.S,t,B.dc,new C.aea(j,"Backup files",p),B.S,A.A(r,B.l,p,B.e,B.h,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.lj,new C.aea(j,"One tree",p),B.S],u)
B.d.u(v,J.ba(q.d,new C.e69(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cn(l,p,p,B.a24,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.K(B.aU.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.H,B.v.j(o?0.3:0.1),B.dm,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.o(p,A.A(A.a([G.aW0,B.bb,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.n(m,p,t,v,s,p,B.m),p,p,p,p,B.D2,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dk_.prototype={}
C.bhW.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ab(0,B.H,B.aU.j(0.32),B.kL,28)],x.V)
t=A.ao(p,A.W(B.vt,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.o(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ae,A.A(A.a([A.o(p,D.c5t,B.f,p,p,new A.n(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.pg,A.E(A.x(A.a([D.fUW,B.P,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.B,p,B.e,B.h,0,B.p),1)],q),B.B,p,B.e,B.h,0,p,p),p)],q),p),B.f,p,p,new A.n(p,p,p,v,u,D.cdJ,B.m),p,p,p,p,p,p,p,p)}}
C.aea.prototype={
B(d){var w=null
return A.A(A.a([A.o(w,w,B.f,w,w,new A.n(B.aU,w,w,A.m(2),w,w,B.m),w,14,w,w,w,w,w,3),B.aa,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)}}
C.bhU.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.H,B.aH.j(0.1),B.cO,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aF(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eE(A.d2(new A.D(B.a1J,A.x(A.a([A.o(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.n(v,q,s,u,q,q,B.m),q,q,q,q,B.ts,q,q,q),B.af,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bC,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cF,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.B,q,B.e,B.h,0,B.p),q),w),q,new A.n(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bhZ.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aU.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eE(new A.D(B.eX,A.A(A.a([A.o(v,D.c4E,B.f,v,v,new A.n(q,v,A.K(B.aU.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.ts,v,v,v),B.bb,A.E(A.x(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.B,v,B.e,B.h,0,B.p),1),A.W(B.hO,o,v,v,v,20)],n),B.l,v,B.e,B.h,0,v,v),v),v,new A.n(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a11.prototype={
S(){return new C.aG1()},
gd3(){return this.c}}
C.aG1.prototype={
Z(){this.a4()
this.aaY()},
aaY(){var w=0,v=A.j(x.H),u=this,t
var $async$aaY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b51(u.a.c,B.EU),$async$aaY)
case 2:t=e
if(u.c!=null)u.l(new C.e5T(u,t))
return A.h(null,v)}})
return A.i($async$aaY,v)},
ajz(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ajz=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.e5U(q))
t=4
p=A.hxX(q.a.d,B.EU)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.X(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.au9(n.e,m,l,B.EU,p,n.f),$async$ajz)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.e5V(q))
q.c.L(x.q).f.U(D.fvt)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ac(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c(B.a.el(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.l(new C.e5W(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ajz,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=p?B.nL:B.qG,n=p?B.iR:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eR(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.hav,q,q,q,1,q,!0)
w=A.m(24)
v=A.K(B.aU.j(0.35),B.r,1)
u=A.qk(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aU,q,q,q,q,q,q,q,q,q,q,q,B.F,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.o(q,A.x(A.a([B.P,u,B.bx,t,B.P,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.b9,B.h,0,B.p),B.f,q,q,new A.n(n,q,v,w,q,q,B.m),q,q,q,q,B.ae,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ac:B.bz,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcyv()
if(u)u=B.La
else u=A.W(r.e===!0?B.hm:B.aqJ,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.em(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cb,q,q,q),t,A.dg(q,q,q,q,q,q,q,q,q,B.aU,q,B.hq,q,q,q,new A.av(B.aU.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hw,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.S)
w.push(new A.a5(1/0,q,A.bJ(B.Bv,q,new C.e5X(d),A.bn(B.aU,q,q,q,q,B.hq,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.ae,A.x(w,B.l,q,B.e,B.h,0,B.p),q),q,!1,!1,q,q)}}
C.a12.prototype={
S(){return new C.bnf(A.A2(B.z8,B.or,B.vA))}}
C.bnf.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return A.c5(A.eR(w,w,w,!0,!0,B.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h2c,w,w,w,1,w,!0),B.v,A.A1(this.d,B.bZ,new C.e6a(this,d)),w,!1,!1,w,w)}}
C.b0S.prototype={
B(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.T3,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lY.prototype={}
C.a7S.prototype={
S(){return new C.bmU(null,null)}}
C.bmU.prototype={
Z(){var w=this,v=null
w.a4()
w.d=A.bp(v,B.tj,v,1,v,w)
w.e=A.bp(v,B.nP,v,1,v,w)
w.a.toString
w.d.cK(0)
w.e.cK(0)},
by(d){var w,v,u=this
u.bJ(d)
u.a.toString
w=u.d
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)
w=u.e
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)},
t(){var w=this.d
w===$&&A.d()
w.t()
w=this.e
w===$&&A.d()
w.t()
this.bAl()},
B(d){var w,v,u=this,t=B.d.dA(D.a7J,new C.dS4(u),new C.dS5())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cEQ(A.c7(new A.hf(A.a([w,v],x.dS)),new C.dS6(u,t),null),!0)}}
C.bmT.prototype={
a2(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b4P(d,e)
break
case"house":p.mp(d,e,D.dlP)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdj()
$.R()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mv(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BL(d,e,12)
p.yQ(d,e,B.ls,5,14)
break
case"grocery":p.cnc(d,e)
break
case"calculator":p.cmU(d,e)
break
case"lumber":p.cnk(d,e)
break
case"kitchen":p.cnf(d,e)
break
case"landscape":p.mp(d,e,D.dmo)
s=new A.aG($.R().r,B.aj,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.ch(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.ch(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.by())
w=A.L()
w.r=B.eq.j(0.85).gp(0)
d.af(s,w)
p.BL(d,e,8)
p.yQ(d,e,B.iH,4,18)
break
case"plumbing":p.cnu(d,e)
break
case"electrical":p.mp(d,e,D.dyo)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.R()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aE(new A.a2(0,0,0+e.a,0+e.b),u)
p.mv(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mv(d,e,B.oE.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BL(d,e,10)
break
case"store":p.cnE(d,e)
break
case"paint_remodel":p.cnp(d,e)
break
case"roofing":p.cnw(d,e)
break
case"warehouse":p.cnL(d,e)
break
case"vehicles":p.cnJ(d,e)
break
case"farm":p.cn6(d,e)
break
case"restaurant":p.cnv(d,e)
break
case"tools":p.cnH(d,e)
break
case"wallet":p.cnK(d,e)
break
case"concrete":p.cn_(d,e)
break
case"blueprint":p.cmS(d,e)
break
default:p.b4P(d,e)}},
mp(d,e,f){var w,v=new A.a2(0,0,0+e.a,0+e.b)
$.R()
w=A.L()
w.san(new A.a7(B.ay,B.aC,B.x,f,null,null).aA(0,v))
d.aE(v,w)},
mv(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdj()/2-h
$.R()
w=A.L()
w.b=B.ab
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.bX(t,s),u,u+0.1439896632895322-u,!1,w)}},
yQ(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdj()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.R()
r=new A.ar(B.T,B.Q,B.V,B.W,B.U)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BL(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.R()
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b4P(d,e){var w,v=this
v.mp(d,e,D.dwA)
w=v.c
v.mv(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mv(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bSf(d,e,B.hZ,w)
v.yQ(d,e,B.c.j(0.7),6,8)},
bSf(d,e,f,g){var w,v,u,t,s,r
$.R()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aE(new A.a2(16,r,t,r+3),w)}},
cnc(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mp(d,e,D.czC)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ar(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.R()
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=D.djW[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mv(d,e,B.c.j(0.35),w,16)
l.yQ(d,e,B.iH,5,12)},
cmU(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mp(d,e,D.czK)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdj()
$.R()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.O(new A.r(t/2,s/2),r*(0.18+u*0.08),q)
p=A.ft(h,B.cw,h,h,h,h,B.a7,B.bW,h,B.dF,B.bX)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dof[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb2(0,new A.es(r,h,h,B.cN,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.F,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a2(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ar(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.czM[o]
l=B.kU.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb2(0,new A.es(m,h,h,B.cN,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.F,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a2(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ar(o,3)*0.38)+Math.sin(n)*6))}i.mv(d,e,B.c.j(0.35),w*1.5,14)
i.mv(d,e,B.eE.j(0.55),-v*3.141592653589793*2,8)
i.mv(d,e,B.oA.j(0.4),r*2.8,22)
i.yQ(d,e,B.px,8,10)
i.BL(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.R()
v=new A.ar(B.T,B.Q,B.V,B.W,B.U)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
cnk(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,H.aCB)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bu(new A.a2(20,r,u,r+10),B.hp)
$.R()
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=A.ap(B.h8,B.ou,(s+1)/2).gp(0)
d.aq(q,p)}o.mv(d,e,B.h8.j(0.35),w,15)
o.BL(d,e,8)},
cnf(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mp(d,e,D.dks)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.R()
m=new A.ar(B.T,B.Q,B.V,B.W,B.U)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mv(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
l.yQ(d,e,B.qs,4,14)},
cnu(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mp(d,e,D.d85)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.R()
o=new A.ar(B.T,B.Q,B.V,B.W,B.U)
o.b=B.ab
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yQ(d,e,B.pB,6,12)
n.mv(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cnE(d,e){var w,v,u,t,s,r,q,p=this
p.mp(d,e,D.cNA)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bu(new A.a2(r,14,r+u,22),B.jE)
$.R()
q=new A.ar(B.T,B.Q,B.V,B.W,B.U)
q.r=A.ap(B.fw,B.bM,(s+1)/2).gp(0)
d.aq(r,q)}p.mv(d,e,B.c.j(0.3),w,16)
p.BL(d,e,8)
p.yQ(d,e,B.wC,5,13)},
cnp(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.deK)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bu(new A.a2(r,q,r+8,q+(18+s*22)),B.iy)
$.R()
r=new A.ar(B.T,B.Q,B.V,B.W,B.U)
r.r=[B.iE,B.dC,B.bM,B.eC][t].j(0.85).gp(0)
d.aq(q,r)}this.mv(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cnw(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dbZ)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.R()
q=new A.ar(B.T,B.Q,B.V,B.W,B.U)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yQ(d,e,B.cB,7,11)},
cnL(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.cQm)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bu(new A.a2(q,p,q+(t-s*8),p+16),B.hp)
$.R()
q=new A.ar(B.T,B.Q,B.V,B.W,B.U)
q.r=A.ap(B.cB,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mv(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cnJ(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dCO)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bu(new A.a2(s,r,s+28,r+8),B.hp)
$.R()
q=new A.ar(B.T,B.Q,B.V,B.W,B.U)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.BL(d,e,6)},
cn6(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.diZ)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.R()
s=A.L()
s.r=B.oE.j(0.75).gp(0)
d.O(new A.r(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=B.hX.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.mv(d,e,B.oE.j(0.35),w,14)},
cnv(d,e){var w,v,u,t,s,r,q=this
q.mp(d,e,D.dlD)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bY(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.R()
r=new A.ar(B.T,B.Q,B.V,B.W,B.U)
r.r=B.c.j(0.22).gp(0)
d.c1(s,r)}q.yQ(d,e,B.qs,5,16)
q.BL(d,e,7)},
cnH(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,D.dA3)
w=o.c
v=w*3.141592653589793
o.mv(d,e,B.ou.j(0.55),v*3,10)
o.mv(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.R()
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=B.ou.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
cnK(d,e){var w,v,u,t,s,r,q,p,o=this
o.mp(d,e,D.dDx)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bu(new A.a2(q,p,q+36,p+22),B.jE)
$.R()
q=new A.ar(B.T,B.Q,B.V,B.W,B.U)
q.r=A.ap(B.iH,B.oE,r).gp(0)
d.aq(p,q)}o.BL(d,e,9)
o.mv(d,e,B.c.j(0.4),w*2.2,12)},
cn_(d,e){var w,v,u,t,s,r,q,p
this.mp(d,e,D.drf)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bX(new A.r(v,u),34)
$.R()
s=A.L()
s.b=B.ab
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cQ(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.T,B.Q,B.V,B.W,B.U)
p.r=B.bO.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
cmS(d,e){var w,v,u,t,s,r,q
this.mp(d,e,D.dmK)
$.R()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.r(t,0),new A.r(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.r(0,s),new A.r(v,s),w)
r=this.c
q=u*B.i.F(r*0.85,1)
$.R()
u=A.L()
u.r=B.dC.j(0.45).gp(0)
d.aE(new A.a2(0,q,0+v,q+6),u)
this.mv(d,e,B.ls.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.auV.prototype={
a0X(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aT0(),$async$a0X)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.aaa(s),$async$a0X)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0X,v)},
ai8(d){return this.cq3(d)},
cq3(d){var w=0,v=A.j(x.H),u=this,t
var $async$ai8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iz7(d),$async$ai8)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ai8,v)},
B(d){var w,v,u=null,t=A.O(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.k5:B.iG
w=x.p
v=A.a([C.aTo(!0,B.rM,1/0,B.r3,u,s,1/0)],w)
if(!r)v.push(new A.bP(new A.n(u,u,u,u,u,new A.a7(B.aX,B.b1,B.x,A.a([B.L,B.v.j(0.35)],x.O),u,u),B.m),B.bm,new A.bK(B.aX,u,u,new A.D(B.tl,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aDA,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.d8(D.bYT,u,D.fR1,new C.cqA(this,d),A.bn(B.aU,u,u,u,B.c,u,B.jQ,u,u,u,u,B.cl)),1),B.aa,A.E(A.em(D.c6M,u,D.h5o,this.gcgS(),A.dg(u,u,B.v.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jQ,u,u,D.b7q,u,u,u,B.cl)),1)],w),B.l,u,B.e,B.h,0,u,u),u,u,8,8,u,u))
return new A.fI(1.7777777777777777,A.aF(!1,B.a3,!0,B.rM,new A.an(B.a0,u,B.b4,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.ai),u)}}
C.aOd.prototype={
aX(){this.b7()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a3()}}
C.aWl.prototype={}
C.aWk.prototype={}
C.aUm.prototype={}
C.a_F.prototype={
S(){return new C.aBc()}}
C.aBc.prototype={
Z(){var w,v,u=this
u.a4()
u.a.toString
w=new A.bd("",B.b8,B.aP)
v=$.ax()
u.d!==$&&A.aR()
u.d=new A.at(w,v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ax()
w.R$=0
this.a3()},
L8(){var w,v,u=this,t=u.d
t===$&&A.d()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.U(D.fvZ)
return}t=u.c
t.toString
v=u.e
A.a8(t,!1).N(new C.aWl(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.O(d).ax.a===B.I,l=m?B.ek:B.c,k=A.m(20),j=A.o(n,D.c6r,B.f,n,n,new A.n(B.aU.j(0.15),n,n,A.m(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bC,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bi,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.B,n,B.e,B.h,0,B.p),1)
j=A.A(A.a([j,B.bb,i,A.aH(n,n,n,n,A.W(B.cA,m?B.bu:B.bi,n,n,n,n),n,n,n,new C.db5(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.h,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bi,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bi,n,n,n,n,n,n,n,n,11,n,n,B.cF,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hyc(new C.db6(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.k5:B.iG
r=A.m(12)
q=A.m(12)
p=m?B.em:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bA(n,new A.b6(4,r,B.du),n,n,n,n,n,n,!0,new A.b6(4,q,new A.av(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.db7(o),n,!1,n,n,!1,n,!0,n,B.ae,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,B.Lj,n,n,n,n)
u=m?B.aS:B.aw
m=m?B.em:B.bO
return A.eI(n,l,new A.cO(B.mg,A.c9(A.x(A.a([j,B.aO,i,B.au,w,B.P,v,B.aO,t,B.bx,A.A(A.a([A.E(A.dU(B.dp,new C.db8(d),A.dg(n,n,n,n,n,n,n,n,n,u,n,n,B.cm,n,new A.b9(A.m(12),B.a1),new A.av(m,1,B.r,-1),n,n,n,n)),1),B.ar,A.E(A.bJ(D.h5E,n,o.ga43(),A.bn(B.aU,n,n,n,B.c,n,B.cm,n,new A.b9(A.m(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.h,0,n,n)],h),B.B,n,B.e,B.M,0,B.p),B.t,n,B.y,n,n,B.D4,n,n,B.ah),n),n,n,n,N.D5,n,B.d9,n,new A.b9(k,B.a1),n)}}
C.a_E.prototype={
S(){return new C.aBb()}}
C.aBb.prototype={
Z(){this.a4()
var w=$.ax()
this.d!==$&&A.aR()
this.d=new A.at(B.ax,w)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ax()
w.R$=0
this.a3()},
L8(){var w,v=this.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.U(D.ftA)
return}v=this.c
v.toString
A.a8(v,!1).N(new C.aWk(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.O(d).ax.a===B.I,o=p?B.ek:B.c,n=A.m(20),m=A.o(q,D.c2K,B.f,q,q,new A.n(B.bQ.j(0.15),q,q,A.m(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bC,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bi,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.B,q,B.e,B.h,0,B.p),1)
m=A.A(A.a([m,B.bb,l,A.aH(q,q,q,q,A.W(B.cA,p?B.bu:B.bi,q,q,q,q),q,q,q,new C.db1(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.h,0,q,q)
l=B.aU.j(p?0.12:0.08)
w=A.m(12)
v=A.K(B.aU.j(0.25),B.r,1)
u=A.W(B.aqv,B.aU.j(0.9),q,q,q,18)
l=A.o(q,A.A(A.a([u,B.ar,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.h,0,q,q),B.f,q,q,new A.n(l,q,v,w,q,q,B.m),q,q,q,q,B.bH,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.k5:B.iG
t=A.m(12)
s=A.m(12)
r=p?B.em:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bA(q,new A.b6(4,t,B.du),q,q,q,q,q,q,!0,new A.b6(4,s,new A.av(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.db2(this),q,!1,q,q,!1,q,!0,q,B.ae,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.lk,q,q,q,q)
w=p?B.aS:B.aw
p=p?B.em:B.bO
return A.eI(q,o,new A.cO(B.mg,A.c9(A.x(A.a([m,B.aO,l,B.aA,v,B.bx,A.A(A.a([A.E(A.dU(B.dp,new C.db3(d),A.dg(q,q,q,q,q,q,q,q,q,w,q,q,B.cm,q,new A.b9(A.m(12),B.a1),new A.av(p,1,B.r,-1),q,q,q,q)),1),B.ar,A.E(A.bJ(D.hcP,q,this.ga43(),A.bn(B.bQ,q,q,q,B.c,q,B.cm,q,new A.b9(A.m(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.h,0,q,q)],k),B.B,q,B.e,B.M,0,B.p),B.t,q,B.y,q,q,B.D4,q,q,B.ah),q),q,q,q,N.D5,q,B.d9,q,new A.b9(n,B.a1),q)}}
C.a_9.prototype={
S(){return new C.azT()}}
C.azT.prototype={
Z(){var w,v=this
v.a4()
w=$.ax()
v.d!==$&&A.aR()
v.d=new A.at(B.ax,w)
v.e!==$&&A.aR()
v.e=new A.at(new A.bd("1",B.b8,B.aP),w)
v.f!==$&&A.aR()
v.f=new A.at(B.ax,w)
v.r!==$&&A.aR()
v.r=new A.at(B.ax,w)},
t(){var w,v=this,u=v.d
u===$&&A.d()
w=u.V$=$.ax()
u.R$=0
u=v.e
u===$&&A.d()
u.V$=w
u.R$=0
u=v.f
u===$&&A.d()
u.V$=w
u.R$=0
u=v.r
u===$&&A.d()
u.V$=w
u.R$=0
v.a3()},
gKq(){var w,v=this.e
v===$&&A.d()
w=A.cF(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
galj(){var w=this.f
w===$&&A.d()
w=A.cF(B.a.i(w.a.a))
return w==null?0:w},
gb7E(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aRI(d){var w,v=B.i.D(this.gKq()+d,0.25,999999),u=B.i.fM(v),t=this.e
t===$&&A.d()
if(v===u)u=B.o.v(B.i.M(v))
else{u=B.i.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb2(0,u)
this.l(new C.cIX())},
aAH(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aU,w,w,w,20):w,u=d.a,t=u?B.k5:B.iG,s=A.m(14),r=A.m(14)
u=u?B.em:B.bO
return A.bA(w,new A.b6(4,s,B.du),w,B.bH,w,w,w,w,!0,new A.b6(4,r,new A.av(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.m(14),B.afG),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cgT(d,e,f){return this.aAH(d,e,f,null)},
L8(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.galj()<=0){s.c.L(x.q).f.U(D.fxT)
return}r=s.c
r.toString
v=s.gKq()
u=s.galj()
t=s.gb7E()
A.a8(r,!1).N(new C.aUm(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.um(n),l=n?B.ek:B.c,k=A.m(24),j=x.O,i=A.a([B.aU.j(0.22),B.bQ.j(0.14)],j),h=A.m(14)
i=A.o(o,D.bWN,B.f,o,o,new A.n(o,o,A.K(B.aU.j(0.35),B.r,1),h,o,new A.a7(B.a5,B.a9,B.x,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bC,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bi,o,o,o,o,o,o,o,o,12,o,o,B.cF,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1)
i=A.A(A.a([i,B.bb,h,A.aH(o,o,o,o,A.W(B.cA,n?B.bu:B.bi,o,o,o,o),o,o,o,new C.cJ2(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.h,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aAH(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Qv),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.Lj,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bi,o,o,o,o,o,o,o,o,12,o,o,B.F,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.k5:B.iG
t=A.m(14)
s=A.K(n?B.em:B.bO,B.r,1)
r=A.aH(o,o,o,o,A.W(B.xj,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cJ3(p),o,o,o,o,o,B.cl)
q=p.e
q===$&&A.d()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c8k,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ef,o,o,o,1,o,o,!1,"\u2022",o,new C.cJ4(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.o(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aH(o,o,o,o,A.W(B.ia,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cJ5(p),o,o,o,o,o,B.cl)],w),B.l,o,B.e,B.M,0,o,o),B.f,o,o,new A.n(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.ar,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aAH(m,"Amount","0.00",B.hN),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ef,o,o,o,1,o,o,!1,"\u2022",o,new C.cJ6(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.B,o,B.e,B.h,0,o,o)
t=x.gv
u=A.B(new A.N(D.dfi,new C.cJ7(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aA,h,B.P,s,B.af,A.bZ(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.S,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.cgT(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cJ8(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.lk,o,o,o,o)],w))}i.push(B.aO)
h=B.aU.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.K(B.aU.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bi,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKq()===B.i.fM(p.gKq())?B.i.M(p.gKq()):p.gKq()
s=p.gb7E()
r=A.Bw(p.galj())
i.push(A.o(o,A.A(A.a([A.E(A.x(A.a([u,B.au,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bi,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1),C.bHp(p.gKq()*p.galj(),B.b5,!1,B.u)],w),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.n(o,o,v,h,o,new A.a7(B.a5,B.a9,B.x,j,o,o),B.m),o,o,o,o,B.jy,o,o,o))
i.push(B.bx)
j=A.m(14)
h=n?B.em:B.bO
h=A.dg(o,o,o,o,o,o,o,o,o,o,o,o,B.cm,o,new A.b9(j,B.a1),new A.av(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dU(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cJ9(d),h),1),B.ar,A.E(A.d8(D.au1,o,D.h8G,p.ga43(),A.bn(B.aU,o,o,0,B.c,o,B.cm,o,new A.b9(A.m(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.h,0,o,o))
return A.eI(o,l,new A.cO(B.MJ,A.c9(A.x(i,B.am,o,B.e,B.M,0,B.p),B.t,o,B.y,o,o,Y.tq,o,o,B.ah),o),o,o,o,B.P4,o,B.d9,o,new A.b9(k,B.a1),o)}}
C.a2Q.prototype={
S(){return new C.bzK()}}
C.bzK.prototype={
Z(){var w,v,u=this
u.a4()
w=u.a.e
v=$.ax()
u.d!==$&&A.aR()
u.d=new A.at(new A.bd(w,B.b8,B.aP),v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ax()
w.R$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=r?B.ek:B.c,p=A.m(20),o=t.a.c
o=A.c(o,s,s,s,s,s,s,A.l(s,s,r?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.d()
v=A.l(s,s,r?B.aS:B.aw,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.k5:B.iG
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bA(s,new A.b6(4,A.m(12),B.du),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.frf(t,d),s,!1,s,s,!1,s,!0,s,B.ae,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dU(B.dp,new C.frg(d),s),1)
r=A.bn(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eI(s,q,new A.D(B.D4,A.x(A.a([o,B.aA,v,B.aO,A.A(A.a([u,B.ar,A.E(A.bJ(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.frh(t,d),r),1)],w),B.l,s,B.e,B.h,0,s,s)],w),B.l,s,B.e,B.M,0,B.p),s),s,s,s,s,s,B.d9,s,new A.b9(p,B.a1),s)}}
C.ada.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.GB.prototype={
S(){return new C.bzI(null,null)}}
C.bzI.prototype={
Z(){var w,v=this
v.a4()
w=A.bp(null,D.bDx,null,1,null,v)
w.cK(0)
v.d!==$&&A.aR()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bCH()},
gbEi(){switch(this.a.r.a){case 1:return A.a([B.aU,B.bQ,B.b5],x.O)
case 2:return A.a([B.bv,B.aU,B.b5],x.O)
case 3:return A.a([B.aH,B.cd,B.jM],x.O)
case 4:return A.a([B.fV,B.bQ,B.fx],x.O)
case 0:return A.a([B.aU,B.bQ,B.b5],x.O)}},
B(d){var w=A.O(d),v=this.d
v===$&&A.d()
return new A.e6(A.c7(v,new C.frd(this,new C.um(w.ax.a===B.I)),null),null)}}
C.azM.prototype={
S(){return new C.bzJ(null,null)}}
C.bzJ.prototype={
Z(){var w,v=this
v.a4()
w=A.bp(null,B.nQ,null,1,null,v)
w.cK(0)
v.d!==$&&A.aR()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bCI()},
B(d){var w=this.d
w===$&&A.d()
return A.c7(w,new C.fre(this),null)}}
C.bzH.prototype={
a2(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bu(new A.a2(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aG($.R().r,B.aj,null,null,A.a([],x.v))
u.E(new A.jc(v))
w=A.L()
w.b=B.ab
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aq(v,w)
w=A.L()
w.b=B.ab
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.zI(u)
t=A.a([],x.U)
w=new A.uW(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bj(A.jL(y.B));--r
q=new A.BY(w,r)
w.jO()
r=t[r].b
r===$&&A.d()
r=r.a.length()
p.aVk(d,q,r,o,0,0.2,4.2,0.92)
p.aVk(d,q,r,s,0.52,0.11,3.2,0.58)}},
aVk(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.hVx(e.a.a,e,t,t+f*i,!0),r=A.aig(s.gle().a.getBounds())
$.R()
w=A.L()
w.b=B.ab
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a7(B.a5,B.a9,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Jc,null).aA(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aQm.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.aQn.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aX(){this.b7()
this.b5()
this.bC()}}
C.um.prototype={}
C.auU.prototype={
S(){return new C.aHB()},
ge3(){return this.c}}
C.aHB.prototype={
Z(){var w=this
w.a4()
w.d=w.a.d
w.aj_()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.Mq(w,v)
this.a3()},
aj_(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aj_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bFO(t.c,t.d.a),$async$aj_)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.eZO(u,s))
return A.h(null,v)}})
return A.i($async$aj_,v)},
Rg(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.eZF(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.Mq(t,s),$async$Rg)
case 2:if(u.c!=null)u.l(new C.eZG(u))
return A.h(null,v)}})
return A.i($async$Rg,v)},
RO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.O(p)
s=t.c
s.toString
w=3
return A.b(A.cg(null,null,!0,null,new C.eZM(t,new C.um(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$RO)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.aaa(q),$async$RO)
case 6:case 5:t.l(new C.eZN(t,r))
w=7
return A.b(t.Rg(),$async$RO)
case 7:case 1:return A.h(u,v)}})
return A.i($async$RO,v)},
X_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iyT(r),$async$X_)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.eZA(t,new C.rx(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Rg(),$async$X_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X_,v)},
cm1(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hN0(t,new C.eZE(u),w,v)},
acM(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.o(w,w,B.f,w,w,new A.n(w,w,new A.bE(new A.av(v,2.5,B.r,-1),B.a1,B.a1,new A.av(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b7c,w,w,B.m),w,22,w,w,w,w,w,22)},
abO(d){return this.bQu(d)},
bQu(d){var w=0,v=A.j(x.H),u=this
var $async$abO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.eZD(u,d))
w=2
return A.b(u.Rg(),$async$abO)
case 2:return A.h(null,v)}})
return A.i($async$abO,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.O(a2).ax.a===B.I,e=f?B.c6:B.hW,d=A.m(8),a0=A.W(K.a3j,f?B.bu:B.bi,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.HK,A.A(A.a([a0,B.bj,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bi,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.M,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eZP(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.X(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b4,B.t,A.a([A.bv(A.m(22),C.aTo(!0,A.m(22),1/0,B.r3,g,d,1/0),B.aq),A.ao(10,A.d8(D.c0C,g,D.hb3,h.gb5z(),A.bn(B.v.j(0.45),g,g,g,B.c,g,B.hk,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ab(0,B.H,B.aU.j(f?0.5:0.38),B.eT,22),new A.ab(-4,B.H,B.bQ.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.H,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.o(g,A.o(g,A.bv(s,new A.an(B.a0,g,B.b4,B.t,A.a([C.aTo(!0,A.m(16),1/0,B.PX,g,r.c,1/0),new A.bP(new A.n(g,g,g,g,g,new A.a7(B.aX,B.b1,B.x,A.a([B.c.j(0.06),B.L,B.v.j(0.22)],x.O),g,g),B.m),B.bm,g,g),A.ao(g,h.acM(!0),g,g,8,g,8,g),A.ao(g,A.cFA(h.acM(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cFA(h.acM(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cFA(h.acM(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.d8(D.bXp,g,D.h4m,h.gb5z(),A.bn(B.v.j(0.45),g,g,g,B.c,g,B.hk,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.n(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.n(g,g,g,d,v,D.ca1,B.m),g,g,g,g,B.m_,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bia,B.oy,B.hv],u):A.a([B.b5,B.aU,B.bQ],u)
t=x.V
s=A.a([new A.ab(0,B.H,B.aU.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.W(B.jz,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.o(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.F,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.n(o,g,m,n,g,g,B.m),g,g,g,g,B.hj,g,g,g)],a1),B.l,g,B.e,B.h,0,g,g),B.aA,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.F,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.al,C.bHp(h.d.gxO(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.P,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cF,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.B,g,B.e,B.h,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.K(B.hh.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.H,B.aH.j(0.28),B.cO,14)],t)
j=B.aH.j(0.22)
i=A.m(10)
u=A.o(g,A.bv(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bIu,A.A(A.a([o,B.ar,A.aF(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eE(new A.D(L.wW,A.x(A.a([A.o(g,D.atB,B.f,g,g,new A.n(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.cr,g,g,g),B.fM,D.fTV],a1),B.l,g,B.e,B.M,0,B.p),g),g,new A.n(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcm0(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.h,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.n(g,g,g,v,s,new A.a7(B.ay,B.aC,B.x,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fI(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bx,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,16,g,g,B.F,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.aY,A.d8(B.a5c,g,D.fRI,h.gbEN(),A.bn(B.aU,g,g,g,B.c,g,B.hx,g,new A.b9(A.m(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.h,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ek:B.c
v=A.m(14)
u=A.K(f?B.em:B.bO,B.r,1)
t=A.W(B.a3F,f?B.bu:B.bi,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.o(g,A.x(A.a([t,B.S,s,B.al,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bi,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.h,0,B.p),B.f,g,g,new A.n(w,g,u,v,g,g,B.m),g,g,g,g,B.qZ,g,g,1/0))}else B.d.u(d,new A.N(w,new C.eZQ(h,new C.um(f)),A.T(w).k("N<1,w>")))
if(h.e)d.push(new A.D(B.ze,A.as(A.n4(g,f?B.bu:B.bi,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bm(!0,A.x(A.a([new A.D(B.CX,a0,g),A.E(A.c9(A.x(d,B.B,g,B.e,B.h,0,B.p),B.t,g,B.y,g,g,B.zr,g,g,B.ah),1)],a1),B.B,g,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bIw(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ek:B.c,p=A.m(16),o=A.a([new A.ab(0,B.H,B.v.j(r?0.35:0.08),B.cO,12)],x.V),n=A.m(16),m=A.o(u,u,B.f,u,u,D.b9X,u,u,u,u,u,u,u,5),l=B.aU.j(r?0.22:0.12),k=A.m(12)
l=A.o(u,A.W(s?B.is:B.h_,B.b5,u,u,u,20),B.f,u,u,new A.n(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bL
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.F,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd2_()
v=A.Bw(d.d)
B.d.u(t,A.a([B.au,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bu:B.bi,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.B,u,B.b9,B.M,0,B.p)}t=A.E(t,1)
k=A.a([B.aU.j(0.14),B.bQ.j(0.1)],x.O)
w=A.m(12)
k=A.o(u,C.bHp(d.c*d.d,B.b5,!1,B.u),B.f,u,u,new A.n(u,u,u,w,u,new A.a7(B.a5,B.a9,B.x,k,u,u),B.m),u,u,u,u,B.hk,u,u,u)
w=x.p
return A.o(u,A.bv(n,new A.F2(A.A(A.a([m,A.E(new A.D(B.ann,A.A(A.a([l,B.bb,t,B.aa,k,A.aH(u,u,u,u,A.W(B.cA,(r?B.bu:B.bi).j(0.75),u,u,u,20),u,u,u,new C.eZB(this,d),u,u,u,u,u,B.cl)],w),B.l,u,B.e,B.h,0,u,u),u),1)],w),B.am,u,B.e,B.h,0,u,u),u),B.aq),B.f,u,D.b8N,new A.n(q,u,u,p,o,u,B.m),u,u,u,B.d4,u,u,u,u)}}
C.afg.prototype={
Fa(d){return this.bRS(d)},
bRS(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Fa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pH(d,o,!1),$async$Fa)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).N(null)
w=4
return A.b(A.bN(X.CS,null,x.H),$async$Fa)
case 4:s=t.d
w=5
return A.b(C.h0S(!0,o,s),$async$Fa)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hw(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$Fa)
case 6:p=f
w=7
return A.b(A.pG(o,!1),$async$Fa)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Fa,v)},
a0Z(d){return this.cCI(d)},
cCI(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0Z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pH(d,s,!1),$async$a0Z)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).N(null)
A.hG(d,new C.auO(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pG(s,!1),$async$a0Z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0Z,v)},
Rh(d){return this.cyH(d)},
cyH(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).N(null)
w=3
return A.b(A.hG(d,D.aNo,!0,"NgmyWorksheetProjectScan",x.N),$async$Rh)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bHq(s),$async$Rh)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.U(D.fx_)
w=1
break}q=C.hnE(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dL(p,x.H),$async$Rh)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Rh,v)},
a1_(d){return this.cL8(d)},
cL8(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).N(null)
w=3
return A.b(C.bGU(),$async$a1_)
case 3:s=f
if(s==null){w=1
break}r=C.hnE(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dL(q,x.H),$async$a1_)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1_,v)},
B(d){var w=this,v=null,u=A.O(d).ax.a===B.I,t=new C.um(u),s=w.d.d.length,r=u?B.ek:B.c,q=A.m(28),p=A.a([new A.ab(0,B.H,B.v.j(u?0.35:0.08),B.kL,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wV,A.o(v,A.x(A.a([w.cBh(d,t,s),new A.D(D.bHS,A.x(A.a([w.b8A(t,"QR restore"),B.S,A.A(A.a([w.b3y(t,!0,B.jB,B.aH,B.aH,new C.eZS(w,d),"Show to scan","QR code"),B.ar,w.aAI(t,B.jC,B.b2,B.bk,new C.eZT(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.h,0,v,v),B.dc,w.b8A(t,"Backup files"),B.S,A.A(A.a([w.aAI(t,B.hO,B.aU,B.bQ,new C.eZU(w,d),"Full copy","Backup file"),B.ar,w.aAI(t,B.A6,B.at,B.aQ,new C.eZV(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.h,0,v,v)],o),B.B,v,B.e,B.h,0,B.p),v)],o),B.l,v,B.e,B.M,0,B.p),B.aq,v,v,new A.n(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cBh(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fl,B.cU,B.h6],k):A.a([B.b5,B.aU,B.bQ],k)
w=A.ao(l,A.W(B.vt,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.o(l,l,B.f,l,l,new A.n(B.c.j(0.35),l,l,A.m(4),l,l,B.m),l,4,l,B.kG,l,l,l,36),l,l,l)
u=A.m(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.H,B.v.j(0.2),B.cO,12)],x.V)
r=this.d
s=A.o(l,C.aTo(!0,A.m(13),64,D.bSA,l,r.c,64),B.aq,l,l,new A.n(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.F,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,E.ad1,l,l,l)
r=C.bHp(r.gxO(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.o(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bIf,A.x(A.a([v,A.A(A.a([s,B.eu,A.E(A.x(A.a([u,B.au,t,B.P,A.A(A.a([r,B.aa,A.o(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.n(q,l,o,p,l,l,B.m),l,l,l,l,B.fC,l,l,l)],m),B.l,l,B.e,B.h,0,l,l)],m),B.B,l,B.e,B.h,0,B.p),1),A.aH(l,l,l,l,A.W(B.cA,B.c.j(0.85),l,l,l,l),l,l,l,new C.eZR(d),l,l,l,A.n9(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,B.aVP,l,l,l,l),l,l)],m),B.B,l,B.e,B.h,0,l,l)],m),B.l,l,B.e,B.h,0,B.p),l)],m),l),B.f,l,l,new A.n(l,l,l,l,l,new A.a7(B.ay,B.aC,B.x,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b8A(d,e){var w=null,v=A.o(w,w,B.f,w,w,new A.n(B.aU,w,w,A.m(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bu:B.bi,w,w,w,w,w,w,w,w,11,w,w,B.F,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
b3y(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.alV:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.em:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.H,B.aH.j(0.12),B.cO,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.K(h.j(0.35),B.r,1)
t=A.o(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.n(u,r,s,t,r,r,B.m),r,r,r,r,B.ts,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eE(new A.D(B.a1J,A.x(A.a([t,B.af,u,B.bC,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bu:B.bi,r,r,r,r,r,r,r,r,11,r,r,B.cF,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),r),r,new A.n(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aAI(d,e,f,g,h,i,j){return this.b3y(d,!1,e,f,g,h,i,j)}}
C.auO.prototype={
S(){return new C.boC()}}
C.boC.prototype={
Z(){this.a4()
this.agT()},
agT(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$agT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bHr(p.c,p.d),$async$agT)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.eZv(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.eZw(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agT,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.O(d).ax.a===B.I,f=g?B.Cn:B.hW,e=i.d
e=e==null?h:B.a.X(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.W(B.eG,g?B.ac:B.an,h,h,h,18),h,h,h,new C.eZx(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.ub],u),B.l,h,B.e,B.h,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.fl,B.cU,B.h6],s):A.a([B.b5,B.aU,B.bQ],s)
r=x.V
q=A.a([new A.ab(0,B.H,B.aU.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dn,B.K,h,h)
p=C.bHp(p.gxO(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.o(h,A.x(A.a([o,B.al,A.A(A.a([p,B.aa,A.o(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.F,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.n(n,h,h,m,h,h,B.m),h,h,h,h,B.fC,h,h,h)],u),B.l,h,B.b9,B.h,0,h,h)],u),B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.n(h,h,h,t,q,new A.a7(B.ay,B.aC,B.x,s,h,h),B.m),h,h,h,h,B.a23,h,h,1/0)
t=g?D.btQ:B.c
q=A.m(24)
p=A.K(w?B.aH.j(0.4):B.aU.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.H,B.v.j(g?0.25:0.06),B.dm,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.Wr,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eAr)
else{m=A.m(20)
l=A.K(B.bn,B.r,1)
o.push(A.o(h,A.qk(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.n(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bR,h,h,h))}}o.push(B.aO)
n=w?B.aH:B.aU
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.K((w?B.aH:B.aU).j(0.35),B.r,1)
k=w?B.Qd:B.QL
k=A.W(k,w?B.aH:B.aU,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.o(h,A.A(A.a([k,B.ar,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ac:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.n(n,h,l,m,h,h,B.m),h,h,h,h,B.hx,h,h,h))
return A.c5(h,f,A.bm(!0,A.x(A.a([new A.D(B.Pi,e,h),A.E(A.c9(A.x(A.a([s,B.aO,A.o(h,A.x(o,B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.n(t,h,p,q,r,h,B.m),h,h,h,h,B.v5,h,h,1/0)],u),B.l,h,B.e,B.h,0,B.p),B.t,h,B.y,h,h,B.aoA,h,h,B.ah),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.auT.prototype={
S(){return new C.aHA(A.A2(B.Oz,B.or,B.vA))}}
C.aHA.prototype={
t(){this.d.t()
this.a3()},
aPF(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j6(w,d)},
chM(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.iwT(t)
if(s!=null){this.aPF(s)
return}r=C.hCN(t)
if(r!=null)q=A.cV(r,p,0)
else q=!1
if(q){this.aPF(B.a.i(B.a.aY(r,B.a.cd(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eR(A.a([A.aH(t,t,t,t,A.W(u.f?B.vh:B.Ql,t,t,t,t,t),t,t,t,new C.eZz(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Cn,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.h4e,t,t,t,1,t,!0),q=A.A1(u.d,B.bZ,u.gchL()),p=A.m(28)
p=A.as(A.o(t,t,B.f,t,t,new A.n(t,t,A.K(B.aU,B.r,3),p,A.a([new A.ab(2,B.H,B.aU.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.v.j(0.72)
v=A.m(16)
return A.c5(r,B.v,new A.an(B.a0,t,B.b4,B.t,A.a([q,p,A.ao(32,A.o(t,D.h3_,B.f,t,t,new A.n(w,t,A.K(B.aU.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jy,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aMy.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.Pg.prototype={
S(){return new C.aHC(D.af_,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aHC.prototype={
gcIU(){return J.bIA(this.e,0,new C.f_h())},
Z(){this.a4()
$.aU.bZ$.push(this)
this.wt()},
t(){$.aU.hZ(this)
this.a3()},
jn(d){if(d===B.h5)this.wt()},
wt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DP(q.a.c).dc(0,B.kc),$async$wt)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.f_d(q,p))
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
if(q.c!=null&&q.f)q.l(new C.f_e(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wt,v)},
II(d){return this.bOA(d)},
bOz(){return this.II(null)},
bOA(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$II=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iyV(l,d),$async$II)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lI(l,r,q,D.drv,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Mq(t.a.c,p),$async$II)
case 4:o=f
w=5
return A.b(t.wt(),$async$II)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.U(D.fu3)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.U(D.fvT)
else n.L(q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fe(m)
case 1:return A.h(u,v)}})
return A.i($async$II,v)},
Fe(d){return this.clN(d)},
clN(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Fe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hG(s,new C.auU(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$Fe)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mq(u.a.c,t),$async$Fe)
case 5:case 4:w=6
return A.b(u.wt(),$async$Fe)
case 6:return A.h(null,v)}})
return A.i($async$Fe,v)},
we(d){return this.c3W(d)},
c3W(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$we=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bGU(),$async$we)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hG(r,D.aNo,!0,"NgmyWorksheetProjectScan",x.N),$async$we)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bHq(q),$async$we)
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
r.U(A.b2(null,null,null,null,null,B.t,null,A.c(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hnE(s)
w=15
return A.b(C.Mq(t.a.c,p),$async$we)
case 15:o=f
w=16
return A.b(t.wt(),$async$we)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.U(D.fvY)
w=1
break}r.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fe(p)
case 1:return A.h(u,v)}})
return A.i($async$we,v)},
OS(d){return this.bNc(d)},
bNc(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$OS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cg(null,null,!0,null,new C.eZZ(d),s,null,!0,!0,x.y),$async$OS)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pf(t.a.c,A.a([],x.D)),$async$OS)
case 6:w=7
return A.b(t.wt(),$async$OS)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fu8)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OS,v)},
cm_(d){var w=this.c
w.toString
A.bU(B.L,null,new C.f_7(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b9d(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.k5
else w=B.c
v=A.m(16)
u=A.K(p?B.em:B.bO,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.o(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.n(t,r,r,s,r,r,B.m),r,r,r,r,B.bT,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a3,!0,r,A.aM(!1,q,!0,A.o(r,A.x(A.a([s,B.af,t,B.bC,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bu:B.bi,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),B.f,r,r,new A.n(w,r,u,v,r,r,B.m),r,r,r,r,B.to,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a1t(d,e){return this.clO(d,e)},
clO(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1t=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.f_2(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a1t)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hN0(r,new C.f_3(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.OU(d,e),$async$a1t)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1t,v)},
b6b(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.o(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.n(t,u,u,s,u,u,B.m),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aB
else t=h.a?B.aS:B.aw
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bu:B.bi,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
return A.aF(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(B.D2,A.A(A.a([s,B.bb,t,A.W(B.eL,w?B.bu:B.bi,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
csS(d,e,f,g,h,i){return this.b6b(!1,d,e,f,g,h,i)},
OU(d,e){return this.bNm(d,e)},
bNm(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lp(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$OU)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bFA(t.a.c,d.a),$async$OU)
case 6:w=7
return A.b(t.wt(),$async$OU)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$OU,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.um(n),l=n?B.c6:B.hW
if(p.f)n=D.bfU
else{w=A.aE(d,B.dH,x.w).w
v=p.bHC(m)
u=p.c3_(m)
t=p.gbEF()
if(n)s=B.k5
else s=B.c
r=A.m(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.GB(A.o(o,A.A(A.a([p.aEg(B.PW,"Projects",m,D.af_),p.aEg(B.vb,"Cashier",m,D.b3H),p.aEg(B.I0,"Family Tree",m,D.hSc)],q),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.n(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.ez,0.95,t,o),B.bx],q)
v=p.d
if(v===D.af_){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY,new C.azM(p.gaU4(),o)],q),B.l,o,B.e,B.h,0,o,o),B.aA,p.csU(m)],q))}else{n=p.a
if(v===D.b3H)t.push(new C.aqF(n.c,m,o))
else{v=p.r
t.push(new C.arU(n.c,n.d,n.e,n.f,new C.f_k(p),new C.f_l(p),new A.bl(v,x.b4)))}}n=A.c9(A.x(t,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,new A.P(20,w.r.b+8,20,32),o,o,B.ah)}return A.c5(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bHC(d){var w=null,v=A.m(8),u=d.a,t=A.W(K.a3j,u?B.bu:B.bi,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.kd,A.A(A.a([t,B.bj,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bu:B.bi,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.M,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eZW(this),w,w,w,w,w,w,w)},
gbEF(){switch(this.d.a){case 0:return D.ae8
case 1:return D.hGq
case 2:return D.ae9}},
c3_(d){var w=null,v=A.m(15),u=A.a([new A.ab(0,B.H,B.aU.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.o(w,D.c2z,B.f,w,w,new A.n(B.c.j(0.22),w,w,A.m(12),w,w,B.m),w,44,w,w,w,w,w,44),B.bb,D.bMU,A.aF(!1,B.a3,!0,w,A.aM(!1,A.m(12),!0,A.o(w,D.c_R,B.f,w,w,new A.n(B.c.j(0.22),w,w,A.m(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f__(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.B,w,B.e,B.h,0,w,w),r=B.b5.j(0.55),q=A.m(12)
return new C.GB(A.o(w,A.x(A.a([new A.D(B.HD,s,w),A.o(w,A.x(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.c(A.Bw(this.gcIU()),w,w,w,w,w,w,D.fNS,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(r,w,w,q,w,w,B.m),w,w,w,B.tn,B.jy,w,w,1/0)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(B.aU,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hGp,w)},
aEg(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aU:B.L,q=A.m(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ab(0.5,B.H,B.aU.j(0.42),B.cO,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bi
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bi
return A.E(A.aF(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cU(u,A.A(A.a([w,B.e4,new A.d1(1,B.cf,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.b9,B.h,0,u,u),u,u,B.cn,new A.n(r,u,p,q,o,u,B.m),B.iX,u,u,u,u,B.HL,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f_g(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
csU(d){var w,v,u,t,s,r,q=this,p=null
if(J.cu(q.e)){w=d.a
v=w?B.ek:B.c
u=A.m(15)
t=A.o(p,D.c_Y,B.f,p,p,new A.n(p,p,p,p,A.a([new A.ab(2,B.H,B.aU.j(0.5),B.eT,28)],x.V),D.ccD,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,18,p,p,B.F,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.GB(A.o(p,A.x(A.a([t,B.dc,s,B.P,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bi,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e9,A.A(A.a([A.E(q.aVG(B.jC,"Scan QR",new C.f_a(q),d),1),B.ar,A.E(q.aVG(B.A6,"Upload file",new C.f_b(q),d),1)],r),B.l,p,B.e,B.h,0,p,p),B.aA,A.bJ(D.heO,p,q.gaU4(),A.bn(B.aU,p,p,p,B.c,B.hq,p,p,new A.b9(A.m(12),B.a1),p,p,p))],r),B.l,p,B.e,B.h,0,B.p),B.f,p,p,new A.n(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bJl,1.05,D.ae8,p)}w=J.ba(q.e,new C.f_c(q,d),x.l)
w=A.B(w,w.$ti.k("ak.E"))
return new C.GB(A.x(w,B.l,p,B.e,B.h,0,B.p),16,B.bT,1,D.ae8,p)},
aVG(d,e,f,g){var w=null,v=B.aU.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.K(B.aU.j(0.45),B.r,1)
return A.aF(!1,B.a3,!0,u,A.aM(!1,t,!0,A.o(w,A.x(A.a([A.W(d,B.b5,w,w,w,26),B.P,A.c(e,w,w,w,w,w,w,D.fM3,B.K,w,w)],x.p),B.l,w,B.e,B.M,0,B.p),B.f,w,w,new A.n(w,w,r,s,w,w,B.m),w,w,w,w,B.a1w,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
csT(d,e){var w,v,u=null,t=e.a,s=t?B.ek:B.c,r=A.m(14),q=A.K(t?B.em:B.bO,B.r,1),p=A.a([new A.ab(0,B.H,B.v.j(t?0.35:0.08),B.eA,10)],x.V),o=A.m(14),n=t?B.bu:B.bi
n=A.bv(B.YE,new A.fI(1.7777777777777777,C.aTo(!0,B.fp,1/0,B.PW,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.c(""+d.d.length+" budget items \xb7 "+A.Bw(d.gxO()),u,u,u,u,u,u,D.fK0,u,u,u)],w),B.B,u,B.e,B.h,0,B.p),1)
return A.o(u,A.aF(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bH,A.A(A.a([v,A.aH(u,u,u,u,A.W(A0.a4q,t?B.bu:B.bi,u,u,u,u),u,u,u,new C.f_8(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.h,0,u,u),u)],w),B.B,u,B.e,B.h,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f_9(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.n(s,u,q,r,p,u,B.m),u,u,u,B.ec,u,u,u,1/0)}}
C.bBv.prototype={}
C.rx.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd2_(){var w,v,u,t,s=this.c
if(s===B.i.fM(s))w=B.o.v(B.i.M(s))
else{v=B.i.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lI.prototype={
gxO(){return B.d.cC(this.d,0,new C.cIg())},
ak(){var w=this,v=w.d,u=A.T(v).k("N<1,aa<p,@>>")
v=A.B(new A.N(v,new C.cIf(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bgE(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lI(w.a,w.b,v,u,w.e)},
bgm(d){return this.bgE(d,null)},
U2(d){return this.bgE(null,d)}}
C.IF.prototype={
a7(){return"FamilyGender."+this.b}}
C.i7.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hI9(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aH0(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i7(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.amS.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.l1.prototype={
garj(){var w=this.f
return new A.Y(w,new C.bUq(),A.T(w).k("Y<1>")).gJ(0)},
ak(){var w=this,v=w.f,u=A.T(v).k("N<1,aa<p,@>>")
v=A.B(new A.N(v,new C.bUp(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ip_(w.y),"games",w.z],x.N,x.z)},
xa(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.l1(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bgD(d,e){var w=null
return this.xa(w,w,w,d,e,w,w,w,w)},
cSi(d,e,f,g,h,i,j){return this.xa(d,e,null,f,g,h,i,j,null)},
aH5(d,e){var w=null
return this.xa(w,w,w,w,d,w,w,e,w)},
cSk(d,e,f,g,h,i,j,k){return this.xa(d,e,null,f,g,h,i,j,k)},
cQO(d){var w=null
return this.xa(w,w,w,w,w,w,w,d,w)},
cRb(d){var w=null
return this.xa(w,w,w,w,w,w,w,w,d)},
bgg(d){var w=null
return this.xa(w,w,d,w,w,w,w,w,w)},
aGR(d){var w=null
return this.xa(w,w,w,w,w,d,w,w,w)},
cRQ(d,e,f){var w=null
return this.xa(w,d,w,w,e,w,w,f,w)},
cQB(d){var w=null
return this.xa(w,w,w,d,w,w,w,w,w)},
cRn(d,e){var w=null
return this.xa(d,w,w,w,w,w,e,w,w)}}
C.cIh.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cIi.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aJJ.prototype={}
C.bbY.prototype={
aj(d){this.a=d.a
this.b=d.b},
d_(d){var w=new C.bbY()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b5(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bbX.prototype={
gx0(){return!0},
gGO(){return this.z.b<this.b.length},
aXm(d){switch(0){case 0:return d.a.c}},
aX2(d){switch(0){case 0:return d.a.d}},
bXr(d,e){switch(0){case 0:return new A.i1(d,e)}},
bWP(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hi(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iW(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Io(b4)
switch(0){case 0:v=b5.b
u=new A.kZ(0,v,0,1/0)
t=w===B.Wj
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fC(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hi(b4,u,!0)
f=b1.aXm(g)
f.toString
e=b1.aX2(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJJ(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJJ(k,j,i))}d=s.length
switch(0){case 0:q=b5.cB(new A.i1(m,l))
a0=q.a
a1=q.b
b1.a=new A.iW(0,0,a0,a1)
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
for(q=B.d.fC(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aXm(g)
e=b1.aX2(g)
e.toString
a9=b1.bWP(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bXr(a6,a3+a9)
b0=g.a
g.a=new A.iW(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fW(d){var w,v,u,t,s,r=this
r.lE(d)
w=d.b
w.iy()
v=A.dt()
u=r.a
v.ed(u.a,u.b,0,1)
w.px(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fW(d)
w.nH(0)},
Hk(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iy(){return this.z}}
C.bzL.prototype={}
var z=a.updateTypes(["aA<~>()","Q(i7)","~()","Q(l1)","Q(nx)","aa<p,@>(l1)","H(l1,l1)","H(i7,i7)","p(i7)","l1(aa<@,@>)","Q(lI)","nx(aa<@,@>)","aa<p,@>(nx)","Q(uY)","uY()","H(i7)","ai<i7>()","Q(zK)","a0I(Z)","p?(i7)","eS<p?>(i7)","aA<~>(lI)","Q(rx)","aa<p,@>(i7)","i7(aa<@,@>)","H(lI,lI)","~(bf)","w(oQ)","Q(agz)","H(H,aaA)","Uo(Z)","Q(N3)","Q(uX)","~(i7)","p(p)","WK(Z)","Un(Z)","aeW(Z)","a_D(Z)","i7(i7)","cM(bB<p,GR>)","cM(L7)","a06(Z)","H?(i7)","i7()","Q(L7)","D(i7)","~(IF)","a02(Z)","w(IF,p,a_)","Q(ags)","bB<p,ai<aa<p,@>>>(p,ai<nx>)","a04(Z)","+count,id,name(H,p,p)(l1)","l1(l1)","p(l1)","a12(Z)","Q(lY)","lY()","a_9(Z)","a2Q(Z)","a_F(Z)","a_E(Z)","~(H)","~(p,lw?)","w(rx)","afg(Z)","~(nW)","aA<~>([p?])","G(G,lI)","w(lI)","G(G,rx)","aa<p,@>(rx)","rx(aa<@,@>)","ai<lw>()","uX()","p(V)","lI(aa<@,@>)","cw(IE)","p(lI)","aa<p,@>(lI)","H(nx,nx)","l1(aa<p,@>)","a11(Z)"])
C.fTT.prototype={
$1(d){return d.a+" "+d.b},
$S:135}
C.fTS.prototype={
bpX(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.ro(s,d,B.ic,"book",B.Hn),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.X(r!=null&&A.Mc(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bpX(d)},
$S:292}
C.fTU.prototype={
$1(d){return d.b},
$S:135}
C.h35.prototype={
$1(d){var w=null
return A.eI(w,B.L,new A.QL(this.a,this.b,w),w,w,0,B.a1K,w,B.d9,w,w,w)},
$S:49}
C.fGU.prototype={
$1(d){return d!=null},
$S:255}
C.fGV.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:255}
C.fH_.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:182}
C.fRB.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.ff(d,w,w,w,A.hk(w,B.u2,w,w,w,w,w,w,w,B.dJ,w,w,10.5,w,B.eK,w,!0,w,w,w,w),w),u=f?B.eK:B.x4
return new A.oh(D.bEB,A.abp(A.a([new A.h1(130,w,v),new A.zJ(1,B.HV,A.ff(e,w,w,w,A.hk(w,g==null?D.eCP:g,w,w,w,w,w,w,w,B.dJ,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.z5,B.m6))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2278}
C.fRA.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w9(999)
f=A.xO(A.lT(h,A.ff("Cashier",h,h,h,A.hk(h,D.B0,h,h,h,h,h,h,h,B.dJ,h,h,10,h,B.eK,h,!0,h,h,h,h),h),h,new A.l_(D.eCG,h,f,B.ii,h),h,h,D.bF4,h))
w=A.xO(A.ff("Debt receipt",h,h,h,A.hk(h,h,h,h,h,h,h,h,h,B.dJ,h,h,22,h,B.eK,h,!0,h,h,h,h),h))
v=A.xO(A.ff(C.xu(new A.V(Date.now(),0,!1),!0),h,h,h,D.acA,h))
u=A.w9(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.ff(s,h,h,h,A.hk(h,h,h,h,h,h,h,h,h,B.dJ,h,h,14,h,B.eK,h,!0,h,h,h,h),h)
r=A.ff("Person who owes",h,h,h,D.acA,h)
q=A.w9(10)
p=x.Z
u=A.lT(h,A.zA(A.a([s,new A.h1(h,2,h),r,new A.h1(h,10,h),A.lT(h,A.zA(A.a([A.ff("Amount owed",h,h,h,D.acA,h),new A.h1(h,2,h),A.ff(A.Bw(t.c),h,h,h,A.hk(h,D.B0,h,h,h,h,h,h,h,B.dJ,h,h,20,h,B.eK,h,!0,h,h,h,h),h)],p),B.tf,B.m6),h,new A.l_(B.q1,h,q,B.ii,h),h,h,D.bEh,1/0)],p),B.tf,B.m6),h,new A.l_(B.aOM,h,u,B.ii,h),h,h,D.bGh,1/0)
q=new A.nY(D.eCJ,0.9,B.lo)
r=A.w9(12)
s=i.c
o=s.$2("Original due",C.xu(t.r,!1))
n=s.$2("Current due",C.xu(t.f,!1))
m=i.d
l=new A.nY(m,1.1,B.lo)
k=A.w9(8)
j=i.a
k=A.a([o,n,new A.h1(h,6,h),A.lT(h,A.xO(A.ff(t.gaOb(),h,h,h,A.hk(h,m,h,h,h,h,h,h,h,B.dJ,h,h,11,h,B.eK,h,!0,0.5,h,h,h),h)),h,new A.l_(h,new A.q6(l,l,l,l),k,B.ii,h),h,h,D.bFd,1/0),new A.h1(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.B0))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.B0))
else{n=A.ff("Missed days ("+n+")",h,h,h,A.hk(h,B.u2,h,h,h,h,h,h,h,B.dJ,h,h,10.5,h,B.eK,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,TX>")
o=A.B(new A.N(o,new C.fRz(),m),m.k("ak.E"))
B.d.u(k,A.a([new A.h1(h,4,h),n,new A.h1(h,6,h),new C.bbX(5,5,new C.bbY(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h1(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h1(h,8,h),w,new A.h1(h,3,h),v,new A.h1(h,16,h),u,new A.h1(h,10,h),A.lT(h,A.zA(k,B.z5,B.m6),h,new A.l_(h,new A.q6(q,q,q,q),r,B.ii,h),h,h,B.anr,1/0)],p)
w=j.a
if(w!=null){v=new A.nY(B.Kq,1,B.lo)
B.d.u(f,A.a([new A.h1(h,16,h),A.ff("Debtor signature",h,h,h,A.hk(h,B.u2,h,h,h,h,h,h,h,B.dJ,h,h,10,h,B.eK,h,!0,h,h,h,h),h),new A.h1(h,6,h),A.lT(h,new A.IW(w,B.YR,h,h),h,new A.l_(h,new A.q6(v,v,v,v),A.w9(6),B.ii,h),82,h,B.Pf,1/0)],p))}f.push(new A.h1(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.ff(w,h,h,h,D.fCd,h))
f.push(new A.h1(h,18,h))
f.push(A.xO(A.ff("NGMY.ORG",h,h,h,A.hk(h,D.B0,h,h,h,h,h,h,h,B.dJ,h,h,14,h,B.eK,h,!0,1.8,h,h,h),h)))
return f},
$S:458}
C.fRz.prototype={
$1(d){var w=null,v=new A.nY(D.Kr,0.7,B.lo),u=A.w9(999)
return A.lT(w,A.ff(C.xu(d,!1),w,w,w,A.hk(w,D.Kr,w,w,w,w,w,w,w,B.dJ,w,w,9.5,w,B.eK,w,!0,w,w,w,w),w),w,new A.l_(w,new A.q6(v,v,v,v),u,B.ii,w),w,w,D.bKP,w)},
$S:2279}
C.c9K.prototype={
$1(d){var w=null,v=B.bE.j(0.08),u=A.m(999),t=A.K(B.bE.j(0.28),B.r,1)
return A.o(w,A.c(C.xu(d,!1),w,w,w,w,w,w,D.fJs,w,w,w),B.f,w,w,new A.n(v,w,t,u,w,w,B.m),w,w,w,w,B.eR,w,w,w)},
$S:2280}
C.h3C.prototype={
$1(d){var w=null,v=A.aE(d,B.bY,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.c3z,w,w,w,new C.h3z(d),w,w,w,w,w,B.cl),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eI(w,B.L,new A.cO(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a3,!0,u,new A.D(B.a1x,A.x(A.a([new A.bK(B.a9,w,w,t,w),new A.d1(1,B.cf,A.c9(A.x(A.a([new A.e6(new C.b0U(r,w),s),B.S,A.A(A.a([A.E(A.em(B.Ae,w,D.haZ,new C.h3A(s,r,d),A.dg(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f7,w,new A.b9(A.m(14),B.a1),new A.av(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.E(A.d8(B.a52,w,D.h7m,new C.h3B(r,d),A.bn(B.b5,w,w,w,B.c,w,B.f7,w,new A.b9(A.m(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.h,0,w,w)],p),B.l,w,B.e,B.M,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.M,0,B.p),w),B.f,B.aw,0,w,w,w,w,w,B.ai),w),w,w,0,T.a1W,w,B.d9,w,w,w)},
$S:49}
C.h3z.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h3A.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ap$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lx(2.5),$async$$0)
case 4:w=3
return A.b(e.hk(B.hn),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eQ(B.dK.gaU(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.az(o,0,32)
w=5
return A.b(A.rr(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h3B.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fYu(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.U(A.b2(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h3u.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eI(w,B.aw,A.x(A.a([new A.D(D.bG5,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.ns,w,w,w),1),A.aH(w,w,w,w,B.lB,w,w,w,new C.h3s(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),w),new A.d1(1,B.cf,new A.D(B.f8,A.bv(A.m(14),A.fZ(t,B.z,w,w,B.cp,B.dE,!1,w,!1,w,w),B.aq),w),w),new A.D(B.OU,new A.a5(1/0,w,A.d8(B.o5,w,D.aZ8,new C.h3t(t,this.c,d),A.bn(B.b5,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.M,0,B.p),w,w,w,B.P5,w,B.d9,w,new A.b9(v,B.a1),w)},
$S:49}
C.h3s.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h3t.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rr(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h3G.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eI(w,B.aw,new A.D(D.bGd,A.x(A.a([A.A(A.a([D.bM_,A.aH(w,w,w,w,B.lB,w,w,w,new C.h3E(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),B.P,new A.e6(A.bv(A.m(14),A.o(w,A.b4(w,w,w,new C.bec(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.d8(B.o5,w,D.aZ8,new C.h3F(t,s,d),A.bn(B.b5,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.M,0,B.p),w),w,w,w,w,w,B.d9,w,new A.b9(v,B.a1),w)},
$S:49}
C.h3E.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h3F.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ap$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lx(2.5),$async$$0)
case 4:w=3
return A.b(e.hk(B.hn),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.az(p,0,32)
r=J.eQ(B.dK.gaU(s))
w=5
return A.b(A.rr(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fLP.prototype={
$1(d){return d.a===this.a},
$S:259}
C.dSX.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dSI.prototype={
bp9(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ek:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dSL(s,q,e),p,!0,!0,!1,B.KK,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dSM(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bp9(d,e)},
$S:2281}
C.dSL.prototype={
$1(d){var w,v=null,u=this.c===B.xG,t=u?D.dyG:D.du3
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aS:B.aw,v,v,v,v,v,v,v,v,15,v,v,B.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(G.anZ,A.x(A.a([u,B.au,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bu:B.bi,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iC(!0,v,v,B.y,D.fsI,new C.dSK(this.a,w,t,d),t.length,v,B.e3,B.ah,!0)],x.p),B.am,v,B.e,B.M,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:27}
C.dSK.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cU.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.m(14)
if(q)u=B.cU
else u=(t.b.a.d.a?B.bu:B.bi).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.o(B.z,C.b0T(r,26),B.f,s,s,new A.n(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dSJ(t.d,r),s,s,s,s,s,s,s)},
$S:202}
C.dSJ.prototype={
$0(){A.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.dSM.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dSG.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:92}
C.dSH.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cH(B.cn,e,v)
return new A.d6(e,!1,A.iu(B.z,A.as(A.aF(!1,B.a3,!0,v,new A.e0(new C.dSF(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bi(t,new A.bt(0.96,1,u),u.k("bi<bQ.T>"))),v)},
$S:34}
C.dSF.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aE(d,B.bY,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ek:B.c,f=A.m(14),e=A.K((h?B.bu:B.bi).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,16,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.ez,A.W(B.cA,i.a.d.a?B.bu:B.bi,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dSq(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.h,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aWc("Name")
r=l.a
q=r.d==null?k:new C.dSr(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bs:B.ml
n=A.K(B.cU.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bgw(new A.D(B.f6,A.aM(!1,p,!0,A.o(B.z,C.b0T(m==null?"\ud83d\udc64":A.fSq(r.e,m),18),B.f,k,k,new A.n(o,k,n,k,k,k,B.a6),k,34,k,B.cr,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.lk,k,B.acp,k,k)
v=A.a([v,B.af,t,B.P,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bi,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.al,A.A(A.a([A.E(i.aWT("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dSs(r,a0),r.d===B.xG),1),B.aa,A.E(i.aWT("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dSx(r,a0),r.d===B.a8V),1)],u),B.l,k,B.e,B.h,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.P,new A.bK(B.a5,k,k,A.hq(D.c1N,D.h9f,new C.dSy(r,l.e,a0),A.fs(k,k,k,k,k,k,k,k,k,k,k,B.cU,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cl)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.v0(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aWd("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.ef,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.K((t?B.bu:B.bi).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bi,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xu(r.a,!1)
v.push(A.aF(!1,B.a3,!0,q,A.aM(!1,p,!0,A.o(k,A.A(A.a([A.E(A.x(A.a([t,B.bC,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.B,k,B.e,B.h,0,B.p),1),D.bZj],u),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.n(k,k,n,o,k,k,B.m),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dSz(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.P,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bi,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aWc("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,12.5,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bi,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b4y(r.b.length!==0,B.ms,new C.dSA(r,i,a0),new C.dSB(r,a0),"Upload from gallery","ID photo"))
v.push(i.b4y(r.c.length!==0,D.bSy,new C.dSC(r,i,d,a0),new C.dSD(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new A1.a9f("Signature (optional)",t,new C.dSE(a0),new C.dSt(a0,t),new C.dSu(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bu:B.bi
s=(i?B.bu:B.bi).j(0.28)
s=A.E(A.dU(B.aZ1,new C.dSv(d),A.dg(k,k,k,k,k,k,k,k,k,t,k,k,B.qX,k,new A.b9(A.m(10),B.a1),new A.av(s,1,B.r,-1),k,k,k,k)),1)
t=A.bn(B.cU,k,k,k,B.c,k,B.qX,k,new A.b9(A.m(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.aa,A.E(A.bJ(A.c(h?"Save":"Update",k,k,k,k,k,k,B.w4,k,k,k),k,new C.dSw(r,w,d),t),1)],u),B.l,k,B.e,B.h,0,k,k))
return A.o(k,A.c9(A.x(v,B.am,k,B.e,B.M,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.n(g,k,e,f,k,k,B.m),k,k,k,B.tp,B.jy,k,k,360)},
$S:173}
C.dSq.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dSr.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dSs.prototype={
$0(){return this.b.$1(new C.dSp(this.a))},
$S:0}
C.dSp.prototype={
$0(){var w=this.a
w.d=B.xG
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dSx.prototype={
$0(){return this.b.$1(new C.dSo(this.a))},
$S:0}
C.dSo.prototype={
$0(){var w=this.a
w.d=B.a8V
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dSy.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dSz.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.w3(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dSn(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSn.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gck(),w.gcg(),w.gcv(),0,0,0,0,0)},
$S:0}
C.dSA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Qx(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dSm(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSm.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dSB.prototype={
$0(){return this.b.$1(new C.dSl(this.a))},
$S:0}
C.dSl.prototype={
$0(){return this.a.b=""},
$S:0}
C.dSC.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ek:B.c
w=3
return A.b(A.bU(q,null,new C.dSj(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Qx(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dSk(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSj.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.ats,w,w,w,w,new C.dSd(d),!1,w,w,w,w,w,w,w,D.h_f,w,w,w),A.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.atq,w,w,w,w,new C.dSe(d),!1,w,w,w,w,w,w,w,D.h6k,w,w,w)],x.p),B.l,w,B.e,B.M,0,B.p),!0,!1,B.ag,!0,!0)},
$S:27}
C.dSd.prototype={
$0(){A.a8(this.a,!1).N("camera")
return null},
$S:0}
C.dSe.prototype={
$0(){A.a8(this.a,!1).N("gallery")
return null},
$S:0}
C.dSk.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dSD.prototype={
$0(){return this.b.$1(new C.dSi(this.a))},
$S:0}
C.dSi.prototype={
$0(){return this.a.c=""},
$S:0}
C.dSE.prototype={
$0(){return this.a.$1(new C.dSh())},
$S:0}
C.dSh.prototype={
$0(){},
$S:0}
C.dSt.prototype={
$0(){return this.a.$1(new C.dSg(this.b))},
$S:0}
C.dSg.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dSu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ajq(u.a,null,null,new C.dSf(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSf.prototype={
$4(d,e,f,g){this.a.$1(new C.dSc(this.b,d))},
$S:491}
C.dSc.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.u(w,this.b)},
$S:0}
C.dSv.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dSw.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.U(D.fxS)
return}if(w.a.d==null){w.c.L(x.q).f.U(D.fuH)
return}A.a8(w.c,!1).N(!0)},
$S:0}
C.dT_.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:92}
C.dT0.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ek:B.c,n=A.m(14),m=A.K((p?B.bu:B.bi).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,16,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bw(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bu:B.bi,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zV(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zV(r).length>0?B.bE:B.cU,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bi
t=(q?B.bu:B.bi).j(0.28)
s=x.p
return new A.d6(e,!1,A.as(A.aF(!1,B.a3,!0,r,A.o(r,A.x(A.a([p,B.P,v,u,B.aA,A.A(A.a([A.E(A.dU(B.ok,new C.dSY(d),A.dg(r,r,r,r,r,r,r,r,r,w,r,r,B.jQ,r,new A.b9(A.m(10),B.a1),new A.av(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.E(A.bJ(D.h6M,r,new C.dSZ(d),A.bn(B.cU,r,r,r,B.c,r,B.jQ,r,new A.b9(A.m(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.h,0,r,r)],s),B.am,r,B.e,B.M,0,B.p),B.f,r,r,new A.n(o,r,m,n,r,r,B.m),r,r,r,B.D6,B.HD,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dSY.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dSZ.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dSU.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dSV(r),p=r.a.d.a,o=p?B.ek:B.c,n=A.m(14),m=A.K((p?B.bu:B.bi).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aS:B.aw,s,s,s,s,s,s,s,s,14,s,s,B.F,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.Bw(l.c),s,s,s,s,s,s,D.fL4,s,s,s)],p),B.l,s,B.e,B.h,0,s,s)
w=A.iU((r.a.d.a?B.bu:B.bi).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a3F,"View receipt",new C.dSN(r,d,l))
u=l.x!=null
t=u?B.pO:B.r7
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bGa,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dSO(r,d,l)),q.$3$icon$label$onTap(B.Dl,"Edit",new C.dSP(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.ms,"View / download ID",new C.dSQ(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bSx,"View / download selfie",new C.dSR(r,d,l)))
if(l.gaIM())p.push(q.$3$icon$label$onTap(B.a4T,"View / download signature",new C.dSS(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bE,B.eo,"Delete",new C.dST(r,d,l)))
p.push(B.au)
return A.bm(!0,new A.D(B.tn,A.o(s,A.x(p,B.l,s,B.e,B.M,0,B.p),B.f,s,s,new A.n(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:27}
C.dSV.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.aw
else w=d
return A.aM(!1,v,!0,new A.D(B.eX,A.A(A.a([A.W(e,w,v,v,v,20),B.bb,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2282}
C.dSN.prototype={
$0(){A.a8(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h3y(w,this.c)},
$S:0}
C.dSO.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.Tm(this.c)},
$S:0}
C.dSP.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.DV(this.c)},
$S:0}
C.dSQ.prototype={
$0(){var w,v,u
A.a8(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bHL(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dSR.prototype={
$0(){var w,v,u
A.a8(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bHL(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dSS.prototype={
$0(){A.a8(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h3D(w,this.c)},
$S:0}
C.dST.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.Qw(0,this.c)},
$S:0}
C.dT1.prototype={
$1(d){return d.x==null},
$S:259}
C.dT2.prototype={
$1(d){return d.x!=null},
$S:259}
C.dT3.prototype={
$2(d,e){return d+e.c},
$S:2283}
C.dT4.prototype={
$0(){return this.a.bFb()},
$S:0}
C.dSW.prototype={
$0(){return this.a.ah5(this.b)},
$S:0}
C.fMA.prototype={
$1(d){return d.a===this.a},
$S:z+32}
C.fMB.prototype={
$0(){return B.d.gH(D.a6a)},
$S:z+75}
C.dix.prototype={
$0(){var w=this.a
return w.l(new C.div(w,this.b))},
$S:0}
C.div.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.diw.prototype={
$0(){},
$S:0}
C.diy.prototype={
$0(){var w=this.a.gc3K()
A.a8(this.b,!1).N(w)
return null},
$S:0}
C.fP7.prototype={
$1(d){return C.hs4(A.a1(d,x.N,x.z))},
$S:z+11}
C.fP8.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fP9.prototype={
$2(d,e){var w=A.cc(d.a,null),v=A.cc(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+81}
C.h29.prototype={
$1(d){return d.ak()},
$S:z+12}
C.haP.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fLG.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bT7.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eC(e,v)?v:null},
$S:2284}
C.h2K.prototype={
$1(d){var w=this
return new C.a04(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+52}
C.djc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.djb(w,d))},
$S:z+78}
C.djb.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dj0.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cK(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.diY.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.diz.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.diA.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dj1.prototype={
$0(){return this.a.w=!1},
$S:0}
C.diI.prototype={
$1(d){var w=null,v=A.O(d).ax.a===B.I,u=v?B.ek:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bi,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bO(!1,B.dp,w,w,!0,w,w,w,new C.diG(d),w,w),A.bJ(B.y5,w,new C.diH(d),A.bn(B.nD,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.diG.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.diH.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.diJ.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.diZ.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dj_.prototype={
$0(){return B.d.gH(D.Aq)},
$S:z+14}
C.diE.prototype={
$1(d){var w=this.a,v=w.y,u=w.gze(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Un(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+36}
C.diF.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.diK.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_D(v,u,J.ad(w.d),null)},
$S:z+38}
C.diL.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dja.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.ay(s,new C.a_i(r.y,r.gze(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dj8(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.bdx(v,e,w,u,t,r.gbVU(),C.hI8(r.y.Q),r.gze(0),s)
w=t}return A.c7(q,new C.dj9(r,e),new A.D(B.a1P,w,s))},
$S:2285}
C.dj9.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd1(t).ay){t=this.b
u=x.cy.a(B.d.gd1(u.f.f)).gvw(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.dt()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fF(v*3.141592653589793*0.5)
return A.fB(B.a5,A.d2(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.dj8.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aJY(B.qP,B.iJ)},
$S:0}
C.diV.prototype={
$0(){var w=this.a
return w.l(new C.diU(w))},
$S:0}
C.diU.prototype={
$0(){return this.a.w=!0},
$S:0}
C.diW.prototype={
$0(){var w=this.a.c
w.toString
A.a8(w,!1).N(null)
return null},
$S:0}
C.diB.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=B.kC.j(0.5),r=x.p,q=A.a([D.fYN,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cu(p.d)?"Write this book":"Write a new book"
q.push(p.a_n(d,B.ee,w,J.cu(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_n(d,B.arj,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cK(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cy,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kW.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cy,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kW.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_n(d,I.asj,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_n(d,B.oY,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_n(d,B.oY,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eI(u,B.Cx,A.bm(!0,new A.D(B.zp,A.x(q,B.B,u,B.e,B.M,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.P8,u,B.d9,u,new A.b9(t,new A.av(s,1.4,B.r,-1)),u)},
$S:49}
C.diX.prototype={
$0(){A.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.diO.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cK(w.d)
return new C.a06(v,J.cK(w.d),w.r+1,null)},
$S:z+42}
C.diP.prototype={
$1(d){var w=null
return A.oV(!1,A.ek(w,w,w,B.Cx,new A.km(this.a,new C.diN(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:351}
C.diN.prototype={
$3(d,e,f){var w=null
return A.A(A.a([B.ac2,B.pg,A.E(A.c(e,w,w,w,w,w,w,B.jI,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:826}
C.diQ.prototype={
$0(){return this.a.a=!1},
$S:54}
C.diR.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:188}
C.diS.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.diT.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BF(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.T_(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.diM(s,t))
w=4
return A.b(s.lh(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.diM.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dj3.prototype={
$1(d){var w=null
return A.oV(!1,A.ek(w,w,w,B.Cx,new A.km(this.a,new C.dj2(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:351}
C.dj2.prototype={
$3(d,e,f){var w=null
return A.A(A.a([B.ac2,B.pg,A.E(A.c(e,w,w,w,w,w,w,B.jI,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:826}
C.dj4.prototype={
$0(){return this.a.a=!1},
$S:54}
C.dj5.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:188}
C.dj6.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:188}
C.dj7.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BF(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lh(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.diC.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.bm6(B.qP,P.OJ)},
$S:0}
C.diD.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aJY(B.qP,P.OJ)},
$S:0}
C.dkZ.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dl_.prototype={
$1(d){var w=this.a
return w.l(new C.dkY(w))},
$S:9}
C.dkY.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dl0.prototype={
$1(d){var w=this.a
return w.l(new C.dkX(w))},
$S:9}
C.dkX.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dl1.prototype={
$1(d){var w=this.a
return w.l(new C.dkW(w))},
$S:9}
C.dkW.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dl2.prototype={
$0(){var w=this.a
return w.l(new C.dkV(w,this.b))},
$S:0}
C.dkV.prototype={
$0(){var w=this.b
this.a.d.sb2(0,w)
return w},
$S:0}
C.dl3.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga3k()
A.a8(this.b,!1).N(new A.bsu(w,v))},
$S:0}
C.djr.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.djq.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a02(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+48}
C.djv.prototype={
$1(d){return d.a===this.a},
$S:z+50}
C.dju.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bc4(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hC,v,v,v)
return A.ek(A.a([A.bO(!1,B.dp,v,v,!0,v,v,v,new C.djs(d),v,v),A.bJ(B.y5,v,new C.djt(d),A.bn(B.nD,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,B.Cx,w,v,v,v,v,D.fXz,v)},
$S:18}
C.djs.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.djt.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.djw.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.djx.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.c9(A.bZ(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bHa,t,t,B.ah)},
$S:344}
C.djp.prototype={
$0(){return this.a.Rl(0,this.b)},
$S:0}
C.djo.prototype={
$0(){return this.a.QL(0,this.b)},
$S:0}
C.cRk.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cRl.prototype={
$0(){return B.d.gH(D.Aq)},
$S:z+14}
C.cRm.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bS(0,new A.D(d,new A.bP(new A.n(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bm,w,w),w),0,0,0)},
$S:2287}
C.daj.prototype={
$1(d){return this.a.l(new C.dai(this.b,this.c))},
$S:9}
C.dai.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.daI.prototype={
$1(d){return this.a.l(new C.dav())},
$S:2}
C.dav.prototype={
$0(){},
$S:0}
C.daJ.prototype={
$1(d){return this.a.l(new C.dau())},
$S:2}
C.dau.prototype={
$0(){},
$S:0}
C.daK.prototype={
$0(){var w=this.a
return w.l(new C.dat(w,this.b))},
$S:0}
C.dat.prototype={
$0(){var w=this.a
return w.d=w.goC().Gt(this.b.a)},
$S:0}
C.daL.prototype={
$0(){var w=this.a
return w.l(new C.das(w,this.b))},
$S:0}
C.das.prototype={
$0(){var w=this.a
return w.d=w.goC().cQ7(this.b)},
$S:0}
C.daM.prototype={
$1(d){return this.a.l(new C.dar())},
$S:2}
C.dar.prototype={
$0(){},
$S:0}
C.daN.prototype={
$0(){var w=this.a
return w.l(new C.daq(w,this.b))},
$S:0}
C.daq.prototype={
$0(){var w=this.a
return w.d=w.goC().cQc(this.b.a)},
$S:0}
C.daO.prototype={
$1(d){var w=this.a
return w.l(new C.daD(w,d))},
$S:6}
C.daD.prototype={
$0(){var w=this.a
return w.d=w.goC().cR6(this.b)},
$S:0}
C.daP.prototype={
$1(d){var w=this.a
return w.d=w.goC().aGU(d)},
$S:2}
C.daQ.prototype={
$1(d){var w=this.a
return w.d=w.goC().cQf(d)},
$S:2}
C.daS.prototype={
$1(d){var w=this.a
return w.d=w.goC().cR4(d)},
$S:2}
C.daT.prototype={
$1(d){var w=this.a
return w.l(new C.daC(w,d))},
$S:9}
C.daC.prototype={
$0(){var w=this.a
return w.d=w.goC().cQW(this.b)},
$S:0}
C.daU.prototype={
$0(){var w=this.a,v=w.goC(),u=B.a.i(w.gze(0).a.a),t=B.a.i(w.gaE4().a.a)
u=v.bgN(B.a.i(w.gatB().a.a),t,u)
A.a8(this.b,!1).N(u)
return null},
$S:0}
C.bTh.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bTb.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bTa(w,d))},
$S:12}
C.bTa.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bTk.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bTc.prototype={
$0(){var w=this.a
w.Q=D.b3g
w.aeG(1)
w.r.x=null},
$S:0}
C.bTd.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b3g)return
w=new A.e_()
w.cU(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d8F[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bTg.prototype={
$0(){var w=this.a
w.Q=D.aeG
w.aeG(2)
w.r.z=null},
$S:0}
C.bTf.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hQ7
t.aeG(3)
w=t.r
w.d=s
w.x="I say: "+t.gCN()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.dft[v.aw(4)]:D.dBh[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bTi.prototype={
$0(){var w=this.a
w.Q=D.b3h
w.CW=this.b
w.cy=1
w.aeG(4)
w.r.f=w.f.a+5},
$S:0}
C.bTj.prototype={
$0(){},
$S:0}
C.bTe.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bT8.prototype={
$0(){return this.a.Lt(this.b)},
$S:0}
C.bT9.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bUO.prototype={
$0(){var w=this
return w.a.RE(w.b,0,w.c,w.d)},
$S:0}
C.bUP.prototype={
$0(){var w=this
return w.a.RE(w.b,3,w.c,w.d)},
$S:0}
C.bUQ.prototype={
$0(){var w=this
return w.a.RE(w.b,1,w.c,w.d)},
$S:0}
C.bUR.prototype={
$0(){var w=this
return w.a.bVk(w.b,w.c,w.d)},
$S:0}
C.bUS.prototype={
$0(){var w=this
return w.a.RE(w.b,4,w.c,w.d)},
$S:0}
C.bUT.prototype={
$0(){var w=this
return w.a.RE(w.b,2,w.c,w.d)},
$S:0}
C.bUU.prototype={
$0(){var w=this
return w.a.RE(w.b,5,w.c,w.d)},
$S:0}
C.bUV.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:827}
C.bUN.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a7k[d],p=q.a.a5(0,new A.r(0,-q.b*1.2*124)),o=A.ft(r,B.cw,r,3,r,A.cR(r,r,r,r,r,r,r,r,r,D.fBU,e),B.a7,B.bW,r,B.dF,B.bX)
o.nD(130)
w=o.b.a.c
w=p.aJ(0,new A.r(0,w.gb9(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bu(A.bY(w,v.gb9(v)+12,u+18),B.ig)
u=this.a
v=t.eE(B.dQ)
w=$.R()
s=A.L()
s.r=B.dG.gp(0)
u.aq(v,s)
s=A.L()
s.r=D.qF.gp(0)
u.aq(t,s)
w=new A.aG(w.r,B.aj,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.by())
v=A.L()
v.r=D.qF.gp(0)
u.af(w,v)
o.a2(u,new A.r(t.a+9,t.b+6))},
$S:695}
C.bTy.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bTz.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.ano(d),w.ano(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fzB.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.haF.prototype={
$2(d,e){if(e!=null)J.c6(this.a.c_(0,d,new C.haG()),e)},
$S:z+64}
C.haG.prototype={
$0(){return A.a([],x.J)},
$S:z+74}
C.haH.prototype={
$1(d){return d!==this.a},
$S:3}
C.haI.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.haJ.prototype={
$1(d){return d!==this.a&&!B.d.aS(this.b,new C.haE(this.c,d))},
$S:3}
C.haE.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.haK.prototype={
$1(d){return d!==this.a},
$S:3}
C.haL.prototype={
$1(d){return d!==this.a},
$S:3}
C.haM.prototype={
$1(d){return d!==this.a&&!B.d.aS(this.b,new C.haD(this.c,d))},
$S:3}
C.haD.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fNd.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.h13.prototype={
$1(d){return d.Q},
$S:z+15}
C.h14.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fJ1.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fQ3.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bOj.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.hb5.prototype={
$2(d,e){return B.o.aQ(C.hEf(d),C.hEf(e))},
$S:220}
C.hb6.prototype={
$1(d){return d!==this.a},
$S:3}
C.h1G.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bMs.prototype={
$0(){var w=this.a
w.ch=!0
w.bah()},
$S:0}
C.bMn.prototype={
$0(){},
$S:0}
C.bMt.prototype={
$1(d){return d.f<=0},
$S:z+28}
C.bMl.prototype={
$0(){},
$S:0}
C.bMm.prototype={
$0(){},
$S:0}
C.bMr.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b4(u,u,u,new C.bee(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.v.j(0.7)
v=A.m(14)
s.push(A.ao(u,A.o(u,A.c(t.dy,u,u,u,u,u,u,D.fJE,B.K,u,u),B.f,u,u,new A.n(w,u,u,v,u,u,B.m),u,u,u,u,B.bT,u,u,u),u,u,14,14,6,u))}return A.ay(B.c1,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bMo(t,e),u,u,u,u,u,u,u,new C.bMp(t,e),u,u,u,u,u,u,u,u,u,new C.bMq(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bMo.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bMq.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bMp.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bMk.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.csi.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.csj.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.csh(w))},
$S:0}
C.csh.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.csk.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.csl.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.csm.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.csn.prototype={
$0(){},
$S:0}
C.cso.prototype={
$0(){var w=this.a
w.z=w.XR(++w.e)
w.Q=A.c1(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cse.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.csf.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.csg(i,f,h),a0=g.as,a1=A.a4(a0).k("b8<2>")
a0=A.B(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.c7(new A.hf(a0),new C.cs9(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.R3(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cM(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new A.Nb(new C.csa(g,u),new C.csb(g,u),new C.csc(g,u),j,j,new A.bl("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fo:B.be,j,j,j,j,j,j,j,j,13,j,j,B.F,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.as(C.uB(a0,g.gqt(g),B.cW,B.jA,D.fI),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.XR(0):s).length))break
if(!B.d.q(g.gj1(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.XR(0)
o=s}else o=s
n=s[u]
n=A.e1(B.z,new C.R3(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.XR(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.re(new A.bt(0,p,t),new C.csd(),new A.ED(u,j,new C.R3(l.b,k,62,!1,j),new A.kO(0.25,new C.R3(m.b,k,62,!1,j),j),new A.kg(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,A.hI0(),!0,!0,j,j,j,j,j,j,!1,B.j_,j,new A.bl("chip-"+r,a0),w),B.b_,B.iY,j,new A.bl("t"+r+"-"+q,a0),v))}++u}g=A.bZ(B.fS,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:68}
C.csg.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:821}
C.cs9.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b4(p,p,p,new C.bdG(q.b,o,v,w,p),B.az)},
$S:59}
C.csb.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:2289}
C.csc.prototype={
$1(d){return this.a.cTY(this.b,d.a)},
$S:2290}
C.csa.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.m(18),q=e.length!==0?B.cW.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cW:B.k7,B.r,2)
u=s?A.lH(new C.cs8(),A.as(new C.R3(u.gaGm()[u.gj1()[t]].b,u.gaGm()[u.gj1()[t]].a,62,!1,v),v,v,v),B.nx,B.iY,v,v,new A.bt(0.3,1,x.X),x.i):D.bex
return A.cU(v,u,v,v,B.b_,new A.n(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:2291}
C.cs8.prototype={
$3(d,e,f){return A.e1(B.z,f,e,null,null)},
$S:115}
C.csd.prototype={
$3(d,e,f){return A.dO(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:115}
C.cSo.prototype={
$1(d){return d>=1},
$S:121}
C.cHf.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.l(new C.cHe(w))},
$S:12}
C.cHe.prototype={
$0(){return this.a.f++},
$S:0}
C.cHn.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cHo.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cHp.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cHm(w))},
$S:0}
C.cHm.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cHq.prototype={
$0(){return this.a.f++},
$S:0}
C.cHr.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cHs.prototype={
$0(){},
$S:0}
C.cHt.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cHh.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.cHi.prototype={
$3(d,e,f){var w=null
return A.lH(new C.cHg(this.a,e),w,B.b_,B.hJ,w,w,new A.bt(w,this.b,x.X),x.i)},
$S:2292}
C.cHg.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cW.j(u.as?0.6:0.15)
t=A.a([new A.ab(0,B.H,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.o(v,A.i6(new A.BP(new A.uV(B.v.j(e),B.ME,v,B.Zj),A.bZ2(A.b4(v,v,v,new C.aCr(u.gkS()[u.e].c,u.as,v),B.az),new A.EI(w,w,B.Xb)),v),B.aq),B.f,v,v,new A.n(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2293}
C.cHj.prototype={
$3(d,e,f){return A.d2(A.dO(f,new A.r(0,14*(1-e))),e)},
$S:108}
C.cHk.prototype={
$3(d,e,f){return A.dO(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:115}
C.cHl.prototype={
$0(){return this.a.brr(this.b)},
$S:0}
C.fbT.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.anV$)
v.anV$=w
v.qh$.sp(0,w)
v.arP(u)},
$S:7}
C.fm8.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:12}
C.bUj.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bUi())},
$S:0}
C.bUi.prototype={
$0(){},
$S:0}
C.bUg.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bUe.prototype={
$0(){},
$S:0}
C.bUf.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gNa()
w=s+1>=r.length?3:5
break
case 3:q=C.bHZ(p.gaqF(0),0,r.length)
p.l(new C.bUb(p,q))
o=p
w=6
return A.b(C.C0(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.C1(s.d,s.c.a,"school",p.gaqF(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bUc())
w=4
break
case 5:p.l(new C.bUd(p))
p.gqB().Wp(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bUb.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bUc.prototype={
$0(){},
$S:0}
C.bUd.prototype={
$0(){return this.a.x++},
$S:0}
C.bUh.prototype={
$0(){return this.a.Lt(this.b)},
$S:0}
C.bUa.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.fbU.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hIe(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.EX
C.SY(q,D.ew6,0,0.2,-0.6,-0.2,null,w,D.euQ,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a5(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.R()
p=A.L()
p.r=D.H_.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.fbV.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SY(this.a,D.evc,0,u,0.7,-0.5,null,null,D.Kj,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.fbW.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SY(this.a,D.ewU,0,0,0.8,-0.5,null,null,D.Kj,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.fbX.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SY(w.b,D.ew0,0,v,-0.8,-0.5,null,null,D.Kj,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.fbY.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.ew4:D.EX
C.SY(p,D.evv,0,t,0,-0.6,null,v,D.Kj,3,0,s,1.3,u,0,w,0)
q=q.ce5(new A.r(222,455),9)
$.R()
w=A.L()
w.r=B.cW.gp(0)
p.af(q,w)},
$S:0}
C.fbZ.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:827}
C.bTX.prototype={
$2(d,e){return d+e},
$S:70}
C.bU7.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bU8.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bU9.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.qh$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bU3.prototype={
$1(d){return d},
$S:105}
C.bU2.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qh$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bU4.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bU5.prototype={
$0(){},
$S:0}
C.bU6.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FW(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cd(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a8(0)},
$S:0}
C.bTZ.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.bU_.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:70}
C.bU0.prototype={
$2(d,e){var w=null,v=C.hiV(new A.au(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.ay(B.c1,new A.e6(A.b4(w,w,w,new C.bkU(u,u.qh$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bTY(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bTY.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.D(B.i.be((t.a-s.a)/r/450*v),0,v-1)
w.d3R(w.gj1()[u])}},
$S:23}
C.bU1.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:80}
C.due.prototype={
$2(d,e){return 0},
$S:70}
C.bTJ.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bTI())},
$S:0}
C.bTI.prototype={
$0(){},
$S:0}
C.bTH.prototype={
$0(){},
$S:0}
C.bTB.prototype={
$0(){},
$S:0}
C.bTC.prototype={
$0(){},
$S:0}
C.bTG.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.BK},
$S:0}
C.bTF.prototype={
$1(d){var w=null,v=this.a.gqB(),u=A.c(d,w,w,w,w,w,w,D.aXC,w,w,w),t=v.gbnS(0)
return A.ay(B.c1,A.x(A.a([u,B.bC,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aXP,w,w,w)],x.p),B.B,w,B.e,B.h,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbtO(v),w,w,w,w,w,w,!1,B.a4)},
$S:137}
C.bTD.prototype={
$0(){return this.a.Lt(this.b)},
$S:0}
C.bTE.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bTA.prototype={
$0(){return A.a8(this.a,!1).hY()},
$S:0}
C.e4y.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e4z.prototype={
$1(d){return this.a},
$S:39}
C.e4A.prototype={
$0(){var w=this.a
return w.d=w.gTo().bgg(this.b)},
$S:0}
C.e4w.prototype={
$1(d){return new C.Uo(this.a,null)},
$S:z+30}
C.e4x.prototype={
$1(d){return d.a===this.a.a},
$S:z+31}
C.e4v.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hC,w,w,w)
return A.ek(A.a([A.bO(!1,B.aZb,w,w,!0,w,w,w,new C.e4t(d),w,w),A.bO(!1,D.h4d,w,w,!0,w,w,w,new C.e4u(d),w,w)],x.p),w,w,D.fI,v,w,w,w,w,D.fRB,w)},
$S:18}
C.e4t.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e4u.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.e4s.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.U(A.b2(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e4B.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e4C.prototype={
$0(){var w=this.a,v=this.b,u=C.bFG(v,10,w.r,!1)
return w.uH(C.hs5(w.a.d,"kahoot",u,w.gb7N(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e4D.prototype={
$0(){var w=this.a
return w.uH(new C.amH(this.b,w.a.d,w.r,null))},
$S:0}
C.e4E.prototype={
$0(){var w=this.a
return w.uH(new C.akR(this.b,w.a.d,w.r,null))},
$S:0}
C.e4H.prototype={
$0(){var w=this.a
return w.uH(new C.avK(this.b,w.a.d,w.r,null))},
$S:0}
C.e4I.prototype={
$0(){var w=this.a
return w.uH(new C.azG(this.b,w.a.d,w.r,null))},
$S:0}
C.e4J.prototype={
$0(){var w=this.a
return w.uH(new C.amK(this.b,w.a.d,w.r,null))},
$S:0}
C.e4K.prototype={
$0(){var w=this.a
return w.uH(new C.amO(this.b,w.a.d,w.r,null))},
$S:0}
C.e4L.prototype={
$0(){var w=this.a
return w.uH(new C.amQ(this.b,w.a.d,w.r,null))},
$S:0}
C.e4M.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d4b()
return v.uH(C.hs5(v.a.d,"creator_"+u.a,w,v.gb7N(),"A game by the family",t,this.c.a))},
$S:0}
C.e4N.prototype={
$0(){return this.a.Pg(this.b)},
$S:0}
C.e4O.prototype={
$0(){return this.a.Yi(0,this.b)},
$S:0}
C.e4F.prototype={
$0(){return this.a.Pg(null)},
$S:0}
C.e4G.prototype={
$0(){return this.a.L(x.q).f.U(D.fuN)},
$S:0}
C.bTV.prototype={
$0(){var w=this.a
w.d=D.b2F
w.z=3},
$S:0}
C.bTW.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aQQ()}else w.l(new C.bTU(w))},
$S:12}
C.bTU.prototype={
$0(){return this.a.z--},
$S:0}
C.bTL.prototype={
$0(){var w=this.a
w.d=D.aem
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bTM.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bTK(w))
if(w.as<=0){d.a1(0)
w.b7J(-1)}},
$S:12}
C.bTK.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bTR.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.XS},
$S:0}
C.bTS.prototype={
$0(){return this.a.e++},
$S:0}
C.bTO.prototype={
$0(){var w=this.a
w.d=D.b2G
w.ay=this.b},
$S:0}
C.bTP.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bTT.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:2294}
C.bTQ.prototype={
$0(){return this.a.Lt(this.b)},
$S:0}
C.bTN.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hY()},
$S:0}
C.bTl.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.at(new A.bd(s,B.b8,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.at(new A.bd(u,B.b8,B.aP),r))}return s},
$S:2295}
C.bTm.prototype={
$0(){return this.a.gDn().c.push(C.hcJ(null,0,20,""))},
$S:0}
C.bTw.prototype={
$1(d){var w=null
return A.bA(w,new A.b6(4,A.m(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dq,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Ft,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:295}
C.bTv.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDn().c,m=this.b,l=n[m],k=o.che(l),j=B.c.j(0.06),i=A.m(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.LC,p,p,p),B.aY],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.atd,p,p,p,new C.bTq(o,m),p,p,p,p,p,p))
n=J.a6(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.h,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bTr(l),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dl,!0,B.a7,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aFe[v]
t=D.aEV[v]
s=v+1
f.push(new A.D(B.eJ,new A.c3(B.aL,B.e,B.h,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.aa,new A.bx(1,B.ba,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bTs(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dl,!0,B.a7,p,B.ao,p,p,p,p),p),new V.PE(v,l.c,new C.bTt(o,l),p,!1,D.lR,p,p,p,p,p,!1,!1,p,E.b34,p,p,p,p,p,w)],g),p),p))}f.push(D.fXe)
f.push(B.al)
n=A.a([D.fQF,B.aa],g)
for(r=0;r<3;++r){q=D.ci7[r]
n.push(new A.D(B.f6,A.jA(p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bTu(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.h,0,p,p))
return A.o(p,A.x(f,B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.n(j,p,h,i,p,p,B.m),p,p,p,B.kG,B.bl,p,p,p)},
$S:165}
C.bTq.prototype={
$0(){var w=this.a
return w.l(new C.bTp(w,this.b))},
$S:0}
C.bTp.prototype={
$0(){return B.d.cH(this.a.gDn().c,this.b)},
$S:0}
C.bTr.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bTs.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bTt.prototype={
$1(d){return this.a.l(new C.bTo(this.b,d))},
$S:162}
C.bTo.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bTu.prototype={
$1(d){return this.a.l(new C.bTn(this.b,this.c))},
$S:9}
C.bTn.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6d.prototype={
$0(){var w=this.a
w.wE()
w.a.bv()
w.a.qu()},
$S:0}
C.e6c.prototype={
$0(){var w=this.a
w.wE()
w.a.bv()
w.a.qu()},
$S:0}
C.e6f.prototype={
$0(){var w=this,v=w.b
if(J.cK(v)||J.cu(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e6g.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e6h.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e6b.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e6e.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e6j.prototype={
$0(){this.a.PC()
return null},
$S:0}
C.e6i.prototype={
$0(){return this.a.Ff(this.b)},
$S:0}
C.e5E.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bO(!1,B.dp,w,w,!0,w,w,w,new C.e5C(d),w,w),r=A.bn(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bJ(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e5D(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e5C.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e5D.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.e5F.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cQB(this.b)},
$S:0}
C.e5z.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aWt(w.b,w.c,w.d)},
$S:7}
C.e50.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e51.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5i.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.HA(t.a.c),$async$$0)
case 2:s=r.nA(q.dI(e,new C.e5g(t)))
if(s!=null&&t.c!=null)t.l(new C.e5h(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e5g.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e5h.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5j.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e5k.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5y.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cRn(C.hIo(w),w)},
$S:0}
C.e5f.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.WK(u,w,C.aS3(u,w),new C.e5e(v),null)},
$S:z+35}
C.e5e.prototype={
$1(d){return this.bpg(d)},
bpg(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e5d(s,d))
w=3
return A.b(s.uD(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:856}
C.e5d.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.bgg(this.b)},
$S:0}
C.e5v.prototype={
$1(d){return d.as},
$S:z+1}
C.e5w.prototype={
$1(d){var w=this
return new A.e0(new C.e5u(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.e5u.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ek:B.c,h=A.m(26),g=A.K(B.bQ.j(0.5),B.r,1.5),f=A.o(k,D.bXw,B.f,k,k,new A.n(B.bQ.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.x(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bu:B.bi,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.B,k,B.e,B.h,0,B.p),1)
f=A.A(A.a([f,B.bb,a0,A.aH(k,k,k,k,A.W(B.cA,j?B.bu:B.bi,k,k,k,k),k,k,k,new C.e5o(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.h,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bi,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.av(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.ay(k,A.cU(k,A.c(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b_,new A.n(q,k,new A.bE(n,n,n,n),new A.bb(p,p,p,p),k,k,B.m),B.hi,k,k,k,k,B.CZ,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e5p(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bZ(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c8R,new A.D(D.bHB,f,k),new A.D(D.bHs,e,k),new A.D(B.tp,a0,k),new A.D(I.aot,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bi,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.W(Z.ar5,j?B.bu:B.bi,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bHu,A.A(A.a([a0,B.ar,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,k,k,k,B.F,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.ayp(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e5q(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.h,0,k,k),k))}f.push(B.aA)
j=A.m(20)
e=A.a([new A.ab(0,B.H,B.aD.j(0.35),B.hR,12)],x.V)
f.push(A.ay(k,A.o(k,A.A(A.a([D.fR0,B.bb,D.bLX,D.bYb],w),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.n(k,k,k,j,e,D.ccG,B.m),k,k,k,B.i9,B.bH,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e5r(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.wY,A.A(A.a([A.E(A.dU(B.dp,new C.e5s(a1),k),1),B.ar,A.E(A.bJ(F.aZC,k,new C.e5t(t,a1),A.bn(B.bQ,k,k,k,k,k,B.cm,k,k,k,k,k)),1)],w),B.l,k,B.e,B.h,0,k,k),k))
return A.bm(!0,A.o(k,A.c9(A.x(f,B.B,k,B.e,B.M,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.aq,k,k,new A.n(i,k,g,h,k,k,B.m),k,k,k,B.zg,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:93}
C.e5o.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e5p.prototype={
$0(){return this.b.$1(new C.e5n(this.a,this.c))},
$S:0}
C.e5n.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e5q.prototype={
$1(d){var w=this.a
w.l(new C.e5l(w,d))
this.b.$1(new C.e5m())},
$S:9}
C.e5l.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e5m.prototype={
$0(){},
$S:0}
C.e5r.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(new A.aID(!0,w))
return null},
$S:0}
C.e5s.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e5t.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(new A.aID(!1,w))
return null},
$S:0}
C.e5x.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cRb(this.b.b)
w.r.a8(0)},
$S:0}
C.e4P.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.ajB(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hBn(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e4Q.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aGR(w)},
$S:0}
C.e5H.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.aeW(this.b,w,this.c,null)},
$S:z+37}
C.e5B.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ek:B.c,t=A.m(20),s=A.W(B.l6,B.aU,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bi,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bi,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.M,0,B.p)
return A.ek(A.a([A.bJ(D.h81,w,new C.e5A(d),A.bn(B.aU,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e5A.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e4R.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e4S.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e4T.prototype={
$1(d){return d.a},
$S:z+8}
C.e4U.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i7(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aGR(w)},
$S:0}
C.e4Y.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.ajB(q)
w=A.T(q).k("Y<1>")
q=A.B(new A.Y(q,new C.e4W(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hBn(v.e,null,r,v.f,v.r,new C.e4X(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e4X.prototype={
$0(){return this.a.abP(this.b)},
$S:0}
C.e4W.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e4Z.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.T(w).k("N<1,i7>")
w=A.B(new A.N(w,new C.e4V(this.b),v),v.k("ak.E"))
u.d=t.aGR(w)},
$S:0}
C.e4V.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+39}
C.e5G.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e5a.prototype={
$1(d){return d.length!==0},
$S:3}
C.e5b.prototype={
$1(d){var w=this
return new A.e0(new C.e59(w.a,w.b,w.c,w.d),null)},
$S:21}
C.e59.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ek:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bi,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bi,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.N(o,new C.e55(u,e,o),A.T(o).k("N<1,w>")))
p.push(B.P)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.m(12),B.du),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mK,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.am,v,B.e,B.M,0,B.p)
t=w.a
return A.ek(A.a([A.bO(!1,B.dp,v,v,!0,v,v,v,new C.e56(d),v,v),A.bJ(B.LL,v,new C.e57(t,u,o,e),A.bn(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fVA,v,new C.e58(t,u,o,d),A.bn(B.aU,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:237}
C.e55.prototype={
$1(d){var w=null
return A.dJ(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.c5F,w,w,w,new C.e54(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2296}
C.e54.prototype={
$0(){return this.a.$1(new C.e52(this.b,this.c))},
$S:0}
C.e52.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e56.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e57.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e53(w.c,u))
v.bN(0,B.ci)}},
$S:0}
C.e53.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e58.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a8(w.d,!1).N(!0)},
$S:0}
C.e5c.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cRQ(this.b,D.v8,C.Hy(v,w.a.c))},
$S:0}
C.e5O.prototype={
$1(d){return d.as},
$S:z+1}
C.e5P.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j6(this.b,w)},
$S:0}
C.e5Q.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.iyB(v)
return w.X5(v==null?null:v.a)},
$S:0}
C.e5R.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.iaa(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cyT(new A.au(u,t),v.gbmY(),new A.au(k,s))}k=A.m(22)
s=this.b.a
r=s?D.d6q:D.d4t
q=A.K(s?B.dq:D.bmr,B.r,1)
p=A.m(22)
o=A.bS(0,A.b4(m,m,m,new C.bgZ(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.o(m,A.bv(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bS(0,A.v7(new A.P(n,n,n,n),new A.a5(u,t,new C.bhV(l.d,v,l.f,w,new C.e5K(l),l.gciq(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bzS(s,new C.e5L(l,e),new C.e5M(l,e),new C.e5N(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.n(m,m,q,k,m,new A.a7(B.aX,B.b1,B.x,r,m,m),B.m),m,m,m,B.anv,m,m,m,m)},
$S:183}
C.e5K.prototype={
$1(d){var w=this.a
w.l(new C.e5I(w,d))},
$S:2}
C.e5I.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e5L.prototype={
$0(){var w=this.b
return this.a.beo(1.25,new A.au(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e5M.prototype={
$0(){var w=this.b
return this.a.beo(0.8,new A.au(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e5N.prototype={
$0(){var w=this,v=w.b
return w.a.aWt(new A.au(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.au(w.c,w.d),w.e.gbmY())},
$S:0}
C.e5S.prototype={
$0(){var w=this.a
return w.l(new C.e5J(w))},
$S:0}
C.e5J.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e5_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fJ(new A.fz(s.c)),$async$$0)
case 2:t.yF("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.djB.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.blL(u,C.hN4(v.c,u),new C.djA(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+40}
C.djA.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.djC.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bp6(d.d,d.c,u.f.q(0,d.a),new C.djz(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+41}
C.djz.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fME.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.nA(new A.cL(new A.Y(v,new C.fMF(d),w.k("Y<1>")),new C.fMG(),w.k("cL<1,p>")))},
$S:z+19}
C.fMF.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fMG.prototype={
$1(d){return d.a},
$S:z+8}
C.fMC.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fMD.prototype={
$1(d){return d.b},
$S:z+8}
C.fMJ.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.nA(new A.cL(new A.Y(v,new C.fMK(d),w.k("Y<1>")),new C.fML(),w.k("cL<1,p>")))},
$S:z+19}
C.fMK.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fML.prototype={
$1(d){return d.a},
$S:z+8}
C.fMH.prototype={
$1(d){var w,v=A.ew([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+43}
C.fMI.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.djE.prototype={
$0(){return this.a},
$S:z+44}
C.djV.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:219}
C.djN.prototype={
$2(d,e){var w=this.a.c_(0,d,new C.djO()),v=J.a6(w)
if(!v.q(w,e))v.I(w,e)},
$S:128}
C.djO.prototype={
$0(){return A.a([],x.s)},
$S:828}
C.djM.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eC(w,e)
return w===!0},
$S:279}
C.djF.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.djL.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.djK.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.Ef:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.Ef:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:2298}
C.djG.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.djP.prototype={
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
t=J.aT(t==null?D.Ef:t)
while(t.C()){r=t.gP(t)
if(r.a!==a9&&!B.d.aS(w,new C.djQ(r)))w.push(r)}}B.d.bq(w,new C.djR(a8))
B.d.b_(w,new C.djS())
q=C.ia9(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.f2P],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bsd(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2299}
C.djQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.djR.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.djS.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.djT.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a4(v).k("b8<2>")).cC(0,0,B.op)+88-w.gH(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:751}
C.djU.prototype={
$1(d){return 16+d*156},
$S:168}
C.djD.prototype={
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
t.n(0,d,new C.GR(r,new A.r(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GR(s,new A.r(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GR(s,new A.r(e,v)))}t=o.r.h(0,d)
t=J.aT(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.L7(d,new A.r(e+t,w),s,s.length))}},
$S:188}
C.djH.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aLM(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:128}
C.djI.prototype={
$1(d){return d.a===this.a},
$S:z+45}
C.djJ.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:832}
C.djW.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:832}
C.djX.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:414}
C.djY.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:209}
C.djZ.prototype={
$1(d){return d>=0.5},
$S:121}
C.frK.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.he(A.aM(!1,v,!0,new A.a5(38,38,A.W(d,this.a.c?B.c:B.cu,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:2301}
C.f1E.prototype={
$1(d){var w=null,v=A.m(8),u=B.bQ.j(0.12),t=A.m(8)
return new A.D(B.na,A.aM(!1,v,!0,A.o(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fGq,B.K,w,w),B.f,w,w,new A.n(u,w,w,t,w,w,B.m),w,w,w,w,B.Pe,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f1D(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+46}
C.f1D.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dzY.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dzX.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nq,B.K,w,w)
return A.ek(A.a([A.bO(!1,B.dp,w,w,!0,w,w,w,new C.dzV(d),w,w),A.bO(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.n1,w,w,w,w,w,w,w,w,w,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dzW(d),w,w)],x.p),B.b9,B.CU,w,u,D.bIw,w,D.bKv,new A.b9(v,B.a1),w,w)},
$S:18}
C.dzV.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dzW.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dA6.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dA7.prototype={
$1(d){var w=this.a
return w.l(new C.dA5(w,d))},
$S:z+47}
C.dA5.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dA8.prototype={
$1(d){var w=null
return A.qQ(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dAb.prototype={
$1(d){var w=this.a
return w.l(new C.dA4(w,d))},
$S:37}
C.dA4.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dAa.prototype={
$1(d){var w=null
return A.qQ(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dAc.prototype={
$1(d){var w=this.a
return w.l(new C.dA3(w,d))},
$S:37}
C.dA3.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dAd.prototype={
$0(){var w=this.a
return w.l(new C.dA2(w))},
$S:0}
C.dA2.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dAe.prototype={
$0(){var w=this.a
return w.l(new C.dA1(w))},
$S:0}
C.dA1.prototype={
$0(){return++this.a.at},
$S:0}
C.dAf.prototype={
$0(){var w=this.a
return w.l(new C.dA0(w))},
$S:0}
C.dA0.prototype={
$0(){return--this.a.ax},
$S:0}
C.dAg.prototype={
$0(){var w=this.a
return w.l(new C.dA_(w))},
$S:0}
C.dA_.prototype={
$0(){return++this.a.ax},
$S:0}
C.dAh.prototype={
$1(d){var w=this.a
return w.l(new C.dzZ(w,d))},
$S:9}
C.dzZ.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dA9.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dAi.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.ek:B.c
v=A.m(12)
if(p)u=B.bQ
else u=(q.c.a?B.em:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bu:B.bi
t=A.W(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bu:B.bi
return A.E(A.aF(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cU(r,A.x(A.a([t,B.au,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.h,0,B.p),r,r,B.b_,new A.n(w,r,u,v,r,r,B.m),B.eI,r,r,r,r,B.jQ,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dAj(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+49}
C.dAj.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dAs.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cgO.prototype={
$2(d,e){return new A.bB(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:106}
C.cgV.prototype={
$1(d){return d.ak()},
$S:z+5}
C.cgW.prototype={
$2(d,e){var w=J.ba(e,new C.cgU(),x.a)
w=A.B(w,w.$ti.k("ak.E"))
return new A.bB(d,w,x.d2)},
$S:z+51}
C.cgU.prototype={
$1(d){return d.ak()},
$S:z+12}
C.cgQ.prototype={
$1(d){return C.amT(A.a1(d,x.N,x.z))},
$S:z+9}
C.cgR.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cgS.prototype={
$1(d){return C.hs4(A.a1(d,x.N,x.z))},
$S:z+11}
C.cgT.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.ch_.prototype={
$1(d){return new A.aIP(d.f.length,d.a,d.b)},
$S:z+53}
C.ch0.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:523}
C.cgX.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cgY.prototype={
$1(d){return d.cQO(C.Hy(d,this.a))},
$S:z+54}
C.e60.prototype={
$1(d){return C.uC(d,this.a.a.c)},
$S:z+3}
C.e61.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e65.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e66.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e5Y.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2p(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zf("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pG(r.c,r.e),$async$$0)
case 4:s.zf(p)
w=5
return A.b(s.Kv(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e5Z.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2p(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zf("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pG(r.c,r.e),$async$$0)
case 4:s.zf(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e6_.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.WN(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zf("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zf("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zf("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Kv(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ac(j)
o=r.a
if(o.c==null){w=1
break}o.zf(B.a.el(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e64.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2o(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zf("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a8(r,!1).cb(A.e9(new C.e63(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pG(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e63.prototype={
$1(d){var w=this.b
return new C.a11(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+83}
C.e62.prototype={
$1(d){return D.hM8},
$S:z+56}
C.e68.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e69.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e67(w,d)
return new A.D(B.d4,new C.bhZ(this.b,d.c,d.a,w,null),null)},
$S:2302}
C.e67.prototype={
$0(){return this.a.YX(this.b.b)},
$S:0}
C.e5T.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e5U.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e5V.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e5W.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e5X.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e6a.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.X(s,"NGMYFTSYNC2"))t=!A.cV(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a8(this.b,!1).N(s)
return}},
$S:159}
C.dS4.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+57}
C.dS5.prototype={
$0(){return B.d.gH(D.a7J)},
$S:z+58}
C.dS6.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b4(A.as(A.W(this.b.d,B.c.j(0.95),w,w,D.ddy,44),w,w,w),w,w,new C.bmT(u,t,v,w),B.az)},
$S:59}
C.h3c.prototype={
$1(d){return A.oH(new C.h3b(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:130}
C.h3b.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ek:B.c,p=A.a([new A.ab(0,B.H,B.v.j(r?0.35:0.08),B.u0,24)],x.V),o=r?B.em:B.bO
o=A.o(t,t,B.f,t,t,new A.n(o,t,t,A.m(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aU.j(0.25),B.bQ.j(0.18)],x.O)
w=A.o(t,D.c_E,B.f,t,t,new A.n(t,t,t,A.m(12),t,new A.a7(B.a5,B.a9,B.x,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aS:B.aw,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.o(t,A.x(A.a([B.S,o,new A.D(B.aox,A.A(A.a([w,B.bb,A.E(A.x(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bu:B.bi,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.h,0,B.p),1)],u),B.l,t,B.e,B.h,0,t,t),t),A.E(A.iC(!0,t,e,B.y,D.fsQ,new C.h3a(this.b,s),20,B.ao2,t,B.ah,!1),1)],u),B.l,t,B.e,B.h,0,B.p),B.f,t,t,new A.n(q,t,t,B.ln,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:123}
C.h3a.prototype={
$2(d,e){var w=null,v=D.a7J[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.K(s?B.em:B.bO,B.r,1),q=A.a([new A.ab(0,B.H,B.v.j(s?0.35:0.08),B.eA,8)],x.V),p=A.m(15),o=A.E(new C.a7S(v.a,!0,w),1),n=s?B.k5:B.iG,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aS:B.aw,w,w,w,w,w,w,w,w,13,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eE(A.bv(p,A.x(A.a([o,A.o(w,A.x(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bu:B.bi,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.B,w,B.e,B.h,0,B.p),B.f,n,w,w,w,w,w,w,B.ke,w,w,w)],l),B.am,w,B.e,B.h,0,B.p),B.aq),w,new A.n(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h39(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:84}
C.h39.prototype={
$0(){A.a8(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cqA.prototype={
$0(){return this.a.ai8(this.b)},
$S:0}
C.h2A.prototype={
$1(d){return D.hGD},
$S:z+59}
C.han.prototype={
$1(d){var w=this
return new C.a2Q(w.a,w.b,w.c,w.d,null)},
$S:z+60}
C.h2E.prototype={
$1(d){return new C.a_F(this.a,null)},
$S:z+61}
C.h2D.prototype={
$1(d){return D.hHE},
$S:z+62}
C.db5.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.db6.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.db4(w,d))},
$S:37}
C.db4.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.db7.prototype={
$1(d){return this.a.L8()},
$S:2}
C.db8.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.db1.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.db2.prototype={
$1(d){return this.a.L8()},
$S:2}
C.db3.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cIX.prototype={
$0(){},
$S:0}
C.cJ2.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cJ3.prototype={
$0(){return this.a.aRI(-1)},
$S:0}
C.cJ4.prototype={
$1(d){return this.a.l(new C.cJ1())},
$S:2}
C.cJ1.prototype={
$0(){},
$S:0}
C.cJ5.prototype={
$0(){return this.a.aRI(1)},
$S:0}
C.cJ6.prototype={
$1(d){return this.a.l(new C.cJ0())},
$S:2}
C.cJ0.prototype={
$0(){},
$S:0}
C.cJ7.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aU.j(0.2)
if(s)v=B.aU
else v=this.b.a?B.em:B.bO
return A.v_(u,u,B.b5,r,u,new C.cJ_(t,d),B.x1,s,w,u,new A.av(v,1,B.r,-1),B.cl)},
$S:2303}
C.cJ_.prototype={
$1(d){var w=this.a
return w.l(new C.cIY(w,this.b))},
$S:9}
C.cIY.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cJ8.prototype={
$1(d){return this.a.l(new C.cIZ())},
$S:2}
C.cIZ.prototype={
$0(){},
$S:0}
C.cJ9.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.frf.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a8(this.b,!1).N(w)},
$S:2}
C.frg.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.frh.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a8(this.b,!1).N(w)},
$S:0}
C.frd.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbEi()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bKu,new A.e6(A.o(r,q.a.c,B.f,r,r,new A.n(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bzH(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:59}
C.fre.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=B.dN.aB(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ap(B.aU,B.bQ,w)
s.toString
s=A.a([B.b5,s,B.aU],x.O)
return A.aF(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eE(D.eAF,r,new A.n(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.df(-1.2+t,-0.5),new A.df(1.2-t,0.8),B.x,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:143}
C.h0R.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:63}
C.eZO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eZF.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eZG.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eZM.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.e0(new C.eZL(w,this.b),null)},
$S:21}
C.eZL.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ek:B.c,t=A.m(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eI(w,u,new A.D(B.aor,A.x(A.a([s,B.al,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bi,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hyc(new C.eZI(r,e),r.a),B.aA,A.A(A.a([A.E(A.dU(B.dp,new C.eZJ(d),w),1),B.ar,A.E(A.bJ(B.X5,w,new C.eZK(r,d),A.bn(B.aU,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.h,0,w,w)],q),B.am,w,B.e,B.M,0,B.p),w),w,w,w,w,w,B.d9,w,new A.b9(t,B.a1),w)},
$S:110}
C.eZI.prototype={
$1(d){return this.b.$1(new C.eZH(this.a,d))},
$S:37}
C.eZH.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eZJ.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.eZK.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(w)
return null},
$S:0}
C.eZN.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.U2(this.b)},
$S:0}
C.eZA.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bgm(w)},
$S:0}
C.eZE.prototype={
$1(d){return this.bpD(d)},
bpD(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mq(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j6(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eZD.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.T(w).k("Y<1>")
w=A.B(new A.Y(w,new C.eZC(this.b),v),v.k("M.E"))
u.d=t.bgm(w)},
$S:0}
C.eZC.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eZP.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j6(this.b,w)},
$S:0}
C.eZQ.prototype={
$1(d){return this.a.bIw(d,this.b)},
$S:z+65}
C.eZB.prototype={
$0(){return this.a.abO(this.b)},
$S:0}
C.haa.prototype={
$1(d){return new C.afg(this.a,this.b,this.c,null)},
$S:z+66}
C.eZS.prototype={
$0(){return this.a.a0Z(this.b)},
$S:0}
C.eZT.prototype={
$0(){return this.a.Rh(this.b)},
$S:0}
C.eZU.prototype={
$0(){return this.a.Fa(this.b)},
$S:0}
C.eZV.prototype={
$0(){return this.a.a1_(this.b)},
$S:0}
C.eZR.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.eZv.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eZw.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eZx.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.eZz.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qA(),$async$$0)
case 2:if(t.c!=null)t.l(new C.eZy(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eZy.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.f_h.prototype={
$2(d,e){return d+e.gxO()},
$S:z+69}
C.f_d.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f_e.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eZZ.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ek:B.c,s=A.m(24),r=A.o(v,D.c08,B.f,v,v,new A.n(B.aB.j(u?0.18:0.08),v,A.K(B.aB.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bi,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.aw
u=u?B.em:B.bO
w=x.p
return A.eI(v,t,new A.D(B.x0,A.x(A.a([r,B.aO,q,B.P,p,B.dc,A.A(A.a([A.E(A.dU(B.ok,new C.eZX(d),A.dg(v,v,v,v,v,v,v,v,v,o,v,v,B.f7,v,new A.b9(A.m(14),B.a1),new A.av(u,1,B.r,-1),v,v,v,v)),1),B.ar,A.E(A.bJ(D.hbV,v,new C.eZY(d),A.bn(B.aB,v,v,v,v,v,B.f7,v,new A.b9(A.m(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.h,0,v,v)],w),B.l,v,B.e,B.M,0,B.p),v),v,v,v,v,v,B.d9,v,new A.b9(s,B.a1),v)},
$S:49}
C.eZX.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.eZY.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.f_7.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ek:B.c,i=A.m(28),h=A.a([new A.ab(0,B.H,B.v.j(k?0.35:0.08),B.h0,28)],x.V),g=k?D.dl0:B.a71,f=x.p
g=A.o(m,A.x(A.a([A.o(m,m,B.f,m,m,new A.n(B.c.j(0.45),m,m,A.m(99),m,m,B.m),m,4,m,m,m,m,m,40),B.aA,D.flV,B.au,new A.bK(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cF,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.n(m,m,m,m,m,new A.a7(B.ay,B.aC,B.x,g,m,m),B.m),m,m,m,m,B.aov,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bi,m,m,m,m,m,m,m,m,11,m,m,B.F,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b9d(B.b2,B.jC,new C.f_4(v,d),l,"Camera import","Scan QR"),1),B.ar,A.E(v.b9d(B.cD,B.A6,new C.f_5(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.h,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bi,m,m,m,m,m,m,m,m,11,m,m,B.F,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aB.j(k?0.14:0.06)
q=A.m(16)
p=A.K(B.aB.j(0.28),B.r,1)
o=A.o(m,D.c_q,B.f,m,m,new A.n(B.aB.j(0.12),m,m,A.m(12),m,m,B.m),m,m,m,m,B.bT,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aS:B.aw,m,m,m,m,m,m,m,m,m,m,m,B.F,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bi,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.B,m,B.e,B.h,0,B.p),1)
return A.bm(!0,new A.D(B.wV,A.o(m,A.x(A.a([g,new A.D(B.aos,A.x(A.a([w,B.S,u,B.bx,t,B.S,A.aF(!1,B.a3,!0,m,A.aM(!1,s,!0,A.o(m,A.A(A.a([o,B.bb,n,A.W(B.eL,k?B.bu:B.bi,m,m,m,m)],f),B.l,m,B.e,B.h,0,m,m),B.f,m,m,new A.n(r,m,p,q,m,m,B.m),m,m,m,m,B.bH,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.f_6(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.B,m,B.e,B.h,0,B.p),m)],f),B.l,m,B.e,B.M,0,B.p),B.aq,m,m,new A.n(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:27}
C.f_4.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.we("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f_5.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.we("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f_6.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.OS(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f_2.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ek:B.c,m=A.m(24),l=A.a([new A.ab(0,B.H,B.v.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.em:B.bO
k=A.o(q,q,B.f,q,q,new A.n(k,q,q,A.m(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bu:B.bi
u=A.bv(w,new A.a5(48,48,C.aTo(!0,A.m(12),48,B.PW,u,v.c,48),q),B.aq)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bw(v.gxO())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wV,A.o(q,A.x(A.a([B.S,k,new A.D(D.aop,A.A(A.a([u,B.bb,A.E(A.x(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bu:B.bi,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.B,q,B.e,B.h,0,B.p),1)],s),B.l,q,B.e,B.h,0,q,q),q),B.CN,r.csS(B.vt,B.aU,new C.f_0(d),p,"QR code or backup file","Transfer project"),r.b6b(!0,B.eo,B.aB,new C.f_1(d),p,"Remove from this device","Delete project"),B.S],s),B.l,q,B.e,B.M,0,B.p),B.f,q,q,new A.n(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:27}
C.f_0.prototype={
$0(){A.a8(this.a,!1).N("transfer")
return null},
$S:0}
C.f_1.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
C.f_3.prototype={
$1(d){return this.bpE(d)},
bpE(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mq(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wt(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f_k.prototype={
$0(){var w=this.a
w.a.bv()
w.l(new C.f_j(w))},
$S:0}
C.f_j.prototype={
$0(){return this.a.r++},
$S:0}
C.f_l.prototype={
$0(){var w=this.a
return w.l(new C.f_i(w))},
$S:0}
C.f_i.prototype={
$0(){return this.a.r++},
$S:0}
C.eZW.prototype={
$0(){var w=this.a.c
w.toString
return A.j6(w,null)},
$S:0}
C.f__.prototype={
$0(){return this.a.cm_(this.b)},
$S:0}
C.f_g.prototype={
$0(){var w=this.a
return w.l(new C.f_f(w,this.b))},
$S:0}
C.f_f.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f_a.prototype={
$0(){return this.a.we("scan")},
$S:0}
C.f_b.prototype={
$0(){return this.a.we("file")},
$S:0}
C.f_c.prototype={
$1(d){return this.a.csT(d,this.b)},
$S:z+70}
C.f_9.prototype={
$0(){return this.a.Fe(this.b)},
$S:0}
C.f_8.prototype={
$0(){return this.a.a1t(this.b,this.c)},
$S:0}
C.cIg.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+71}
C.cIf.prototype={
$1(d){return d.ak()},
$S:z+72}
C.cId.prototype={
$1(d){return C.hTd(A.a1(d,x.N,x.z))},
$S:z+73}
C.cIe.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fLw.prototype={
$1(d){return d.y===D.l5},
$S:z+3}
C.haX.prototype={
$1(d){return C.aS3(d,this.a)},
$S:z+3}
C.fJ0.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bUq.prototype={
$1(d){return!d.as},
$S:z+1}
C.bUp.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bUm.prototype={
$1(d){return C.hs6(A.a1(d,x.N,x.z))},
$S:z+24}
C.bUn.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bUo.prototype={
$1(d){return J.k(d)},
$S:16}
C.fza.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fuI.prototype={
$1(d){return C.hhw(A.a1(d,x.N,x.z))},
$S:z+77}
C.fuJ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fuK.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h2o.prototype={
$1(d){return J.k(d)},
$S:16}
C.h2p.prototype={
$1(d){return d.a},
$S:z+79}
C.h2q.prototype={
$1(d){return d.length!==0},
$S:3}
C.h2r.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h2s.prototype={
$1(d){return d.U2(null).ak()},
$S:z+80}
C.haV.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fM_.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fPd.prototype={
$1(d){return C.amT(A.a1(d,x.N,x.z))},
$S:z+9}
C.fPe.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fPf.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fPg.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fPh.prototype={
$1(d){return C.uC(d,this.a)},
$S:z+3}
C.h2b.prototype={
$1(d){return C.uC(d,this.a)},
$S:z+3}
C.haQ.prototype={
$1(d){return C.amT(A.a1(d,x.N,x.z))},
$S:z+9}
C.haR.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.haS.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fLH.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fLI.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.hb0.prototype={
$1(d){return!d.as},
$S:z+1}
C.fLb.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fLc.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fLd.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.hao.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fQ4.prototype={
$1(d){return d.Q},
$S:z+15}
C.h24.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fPa.prototype={
$1(d){return C.amT(A.a1(d,x.N,x.z))},
$S:z+9}
C.fPb.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fPc.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h2_.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fvg.prototype={
$1(d){return d.length!==0},
$S:3}
C.fvh.prototype={
$1(d){return C.hs6(A.a1(d,x.N,x.z))},
$S:z+24}
C.fvi.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fvj.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:16}
C.fvk.prototype={
$1(d){return d.length!==0},
$S:3}
C.fvx.prototype={
$2(d,e){return d.eG(new C.fvy(e))},
$S:2304}
C.fvy.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.ck},
$S:2305}
C.fvu.prototype={
$1(d){return C.if1(d,this.a)},
$S:z+82}
C.fvv.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fvw.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fzU.prototype={
$1(d){return d.a},
$S:z+55}
C.fzV.prototype={
$1(d){return d.length!==0},
$S:3}
C.fzW.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fCV.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fIf.prototype={
$1(d){return C.hDP(d,C.Hy(d,this.a))},
$S:z+5}
C.fIg.prototype={
$1(d){return C.hDQ(d,C.Hy(d,this.a))},
$S:z+5};(function aliases(){var w=C.aCt.prototype
w.bxu=w.t
w=C.aAE.prototype
w.bxp=w.t
w=C.aI_.prototype
w.bxS=w.t
w=C.aCu.prototype
w.bxv=w.t
w=C.aCw.prototype
w.bxw=w.t
w=C.aCx.prototype
w.bxx=w.t
w=C.aOd.prototype
w.bAl=w.t
w=C.aQm.prototype
w.bCH=w.t
w=C.aQn.prototype
w.bCI=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aFu.prototype,"gcpH","cpI",27)
var r
w(r=C.aCs.prototype,"gciw","cix",63)
v(r,"gaPT","Oo",0)
v(r,"gcyc","BE",0)
v(r,"gbQp","P6",0)
v(r,"gcMO","zg",0)
v(r,"gcrP","a2c",0)
v(r,"gbLL","OO",0)
v(r,"gbQP","Yn",0)
w(r,"gbVU","bVV",76)
v(r,"gbFZ","AA",0)
v(C.aCv.prototype,"gcMK","G7",0)
v(r=C.amI.prototype,"gbtQ","btR",2)
v(r,"gbtI","btJ",2)
v(r,"gcNS","cNT",2)
u(r,"gqt","kN",0)
u(r=C.akS.prototype,"geY","fY",2)
w(r,"gce2","ce3",26)
u(C.avL.prototype,"gqt","kN",0)
v(r=C.azH.prototype,"gcZs","cZt",2)
u(r,"gqt","kN",0)
u(C.aLR.prototype,"gbtO","btP",2)
v(C.amR.prototype,"gC9","cO4",2)
u(r=C.amP.prototype,"gcOM","cON",2)
u(r,"gqt","kN",0)
v(r=C.amL.prototype,"gbsG","bsH",2)
v(r,"gcTW","cTX",2)
u(r=C.amN.prototype,"geY","fY",2)
u(r,"giC","cNo",2)
v(r=C.amJ.prototype,"gcNd","cNe",2)
u(r,"gbry","jG",2)
v(r=C.aG3.prototype,"gahL","wu",0)
v(r,"gcld","a1l",0)
v(r,"gaU9","IJ",0)
v(r=C.aG0.prototype,"gcIG","a4k",0)
v(r,"gahL","wu",0)
v(r,"gcwb","a2R",0)
v(r,"gcl8","b4o",2)
v(r,"gcmc","a1y",0)
w(r,"gciq","cir",33)
v(r,"gbQH","IO",0)
v(r,"gcJM","cJN",2)
v(r,"gc7X","a_9",0)
w(r,"gcgU","cgV",34)
v(r,"gckX","ckY",2)
v(r=C.aEt.prototype,"gce8","QN",0)
v(r,"gcea","ceb",2)
v(r,"gbNf","abq",0)
v(r=C.aG2.prototype,"gbUi","YT",0)
v(r,"gc3R","Zy",0)
v(r,"gcCH","a3I",0)
v(r,"gcyN","a3j",0)
v(C.aG1.prototype,"gcyv","ajz",0)
v(C.auV.prototype,"gcgS","a0X",0)
v(C.aBc.prototype,"ga43","L8",2)
v(C.aBb.prototype,"ga43","L8",2)
v(C.azT.prototype,"ga43","L8",2)
v(r=C.aHB.prototype,"gb5z","RO",0)
v(r,"gbEN","X_",0)
v(r,"gcm0","cm1",2)
w(C.aHA.prototype,"gchL","chM",67)
t(C.aHC.prototype,"gaU4",0,0,null,["$1","$0"],["II","bOz"],68,0,0)
s(C,"hM9","ioY",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aK,[C.aqs,C.uX,C.nx,C.IE,C.ags,C.L0,C.uY,C.bUW,C.ti,C.bqo,C.an_,C.aey,C.lw,C.bTx,C.av6,C.zK,C.aly,C.N3,C.bbK,C.aaA,C.bj3,C.agz,C.aAU,C.agn,C.aLR,C.L7,C.GR,C.bhX,C.aLM,C.arR,C.dk_,C.lY,C.aWl,C.aWk,C.aUm,C.um,C.rx,C.lI,C.i7,C.l1,C.aJJ])
u(A.ks,[C.fTT,C.fTS,C.fTU,C.h35,C.fGU,C.fGV,C.fH_,C.fRB,C.fRA,C.fRz,C.c9K,C.h3C,C.h3u,C.h3G,C.fLP,C.dSL,C.dSG,C.dSH,C.dSj,C.dSf,C.dT_,C.dT0,C.dSU,C.dSV,C.dT1,C.dT2,C.fMA,C.fP7,C.fP8,C.h29,C.haP,C.fLG,C.h2K,C.djc,C.diz,C.diI,C.diZ,C.diE,C.diK,C.diB,C.diO,C.diP,C.diN,C.dj3,C.dj2,C.dl_,C.dl0,C.dl1,C.djq,C.djv,C.dju,C.cRk,C.cRm,C.daj,C.daI,C.daJ,C.daM,C.daO,C.daP,C.daQ,C.daS,C.daT,C.bTh,C.bTb,C.fzB,C.haH,C.haI,C.haJ,C.haE,C.haK,C.haL,C.haM,C.haD,C.fNd,C.h13,C.fJ1,C.fQ3,C.bOj,C.hb6,C.h1G,C.bMt,C.bMo,C.bMq,C.bMp,C.csg,C.csb,C.csc,C.csa,C.cs8,C.csd,C.cSo,C.cHf,C.cHi,C.cHg,C.cHj,C.cHk,C.fbT,C.fm8,C.bU3,C.bTY,C.bU1,C.bTF,C.e4z,C.e4w,C.e4x,C.e4v,C.e4B,C.bTW,C.bTM,C.bTw,C.bTv,C.bTr,C.bTs,C.bTt,C.bTu,C.e6e,C.e5E,C.e5z,C.e50,C.e5g,C.e5j,C.e5f,C.e5e,C.e5v,C.e5w,C.e5q,C.e4P,C.e5H,C.e5B,C.e4R,C.e4S,C.e4T,C.e4Y,C.e4W,C.e4V,C.e5a,C.e5b,C.e55,C.e5O,C.e5K,C.djB,C.djC,C.fME,C.fMF,C.fMG,C.fMC,C.fMD,C.fMJ,C.fMK,C.fML,C.fMH,C.fMI,C.djV,C.djL,C.djG,C.djQ,C.djR,C.djU,C.djI,C.djX,C.djY,C.djZ,C.frK,C.f1E,C.dzX,C.dA6,C.dA7,C.dA8,C.dAb,C.dAa,C.dAc,C.dAh,C.dAi,C.cgV,C.cgU,C.cgQ,C.cgR,C.cgS,C.cgT,C.ch_,C.cgX,C.cgY,C.e60,C.e63,C.e62,C.e69,C.e6a,C.dS4,C.h3c,C.h2A,C.han,C.h2E,C.h2D,C.db6,C.db7,C.db2,C.cJ4,C.cJ6,C.cJ7,C.cJ_,C.cJ8,C.frf,C.h0R,C.eZM,C.eZI,C.eZE,C.eZC,C.eZQ,C.haa,C.eZZ,C.f_7,C.f_2,C.f_3,C.f_c,C.cIf,C.cId,C.cIe,C.fLw,C.haX,C.fJ0,C.bUq,C.bUp,C.bUm,C.bUn,C.bUo,C.fuI,C.fuJ,C.h2o,C.h2p,C.h2q,C.h2r,C.h2s,C.haV,C.fM_,C.fPd,C.fPe,C.fPg,C.fPh,C.h2b,C.haQ,C.haR,C.haS,C.fLH,C.fLI,C.hb0,C.fLb,C.fLc,C.hao,C.fQ4,C.h24,C.fPa,C.fPb,C.h2_,C.fvg,C.fvh,C.fvi,C.fvj,C.fvk,C.fvy,C.fvu,C.fvv,C.fzU,C.fzV,C.fCV,C.fIf,C.fIg])
u(A.aw,[C.b0U,C.amG,C.aXC,C.a_i,C.bdx,C.R3,C.a76,C.tI,C.IG,C.bhV,C.blL,C.bzS,C.bp6,C.aeV,C.blK,C.aeU,C.blJ,C.aEu,C.aKO,C.aeW,C.GN,C.bhW,C.aea,C.bhU,C.bhZ,C.b0S,C.auV,C.afg])
u(A.qc,[C.bec,C.bfp,C.bfg,C.aJD,C.bkM,C.bqn,C.aXH,C.bee,C.aCr,C.bdG,C.buu,C.bkU,C.bkj,C.bkq,C.bhY,C.bgZ,C.bmT,C.bzH])
u(A.mG,[C.h3z,C.h3A,C.h3B,C.h3s,C.h3t,C.h3E,C.h3F,C.dSX,C.dSJ,C.dSM,C.dSq,C.dSr,C.dSs,C.dSp,C.dSx,C.dSo,C.dSy,C.dSz,C.dSn,C.dSA,C.dSm,C.dSB,C.dSl,C.dSC,C.dSd,C.dSe,C.dSk,C.dSD,C.dSi,C.dSE,C.dSh,C.dSt,C.dSg,C.dSu,C.dSc,C.dSv,C.dSw,C.dSY,C.dSZ,C.dSN,C.dSO,C.dSP,C.dSQ,C.dSR,C.dSS,C.dST,C.dT4,C.dSW,C.fMB,C.dix,C.div,C.diw,C.diy,C.djb,C.dj0,C.diY,C.diA,C.dj1,C.diG,C.diH,C.diJ,C.dj_,C.diF,C.diL,C.dj8,C.diV,C.diU,C.diW,C.diX,C.diQ,C.diS,C.diT,C.diM,C.dj4,C.dj7,C.diC,C.diD,C.dkZ,C.dkY,C.dkX,C.dkW,C.dl2,C.dkV,C.dl3,C.djr,C.djs,C.djt,C.djw,C.djp,C.djo,C.cRl,C.dai,C.dav,C.dau,C.daK,C.dat,C.daL,C.das,C.dar,C.daN,C.daq,C.daD,C.daC,C.daU,C.bTa,C.bTk,C.bTc,C.bTd,C.bTg,C.bTf,C.bTi,C.bTj,C.bTe,C.bT8,C.bT9,C.bUO,C.bUP,C.bUQ,C.bUR,C.bUS,C.bUT,C.bUU,C.haG,C.h14,C.bMs,C.bMn,C.bMl,C.bMm,C.bMk,C.csi,C.csj,C.csh,C.csk,C.csm,C.csn,C.cso,C.cse,C.cHe,C.cHn,C.cHo,C.cHp,C.cHm,C.cHq,C.cHr,C.cHs,C.cHt,C.cHh,C.cHl,C.bUj,C.bUi,C.bUg,C.bUe,C.bUf,C.bUb,C.bUc,C.bUd,C.bUh,C.bUa,C.fbU,C.fbV,C.fbW,C.fbX,C.fbY,C.bU7,C.bU8,C.bU9,C.bU2,C.bU4,C.bU5,C.bU6,C.bTZ,C.bTJ,C.bTI,C.bTH,C.bTB,C.bTC,C.bTG,C.bTD,C.bTE,C.bTA,C.e4y,C.e4A,C.e4t,C.e4u,C.e4s,C.e4C,C.e4D,C.e4E,C.e4H,C.e4I,C.e4J,C.e4K,C.e4L,C.e4M,C.e4N,C.e4O,C.e4F,C.e4G,C.bTV,C.bTU,C.bTL,C.bTK,C.bTR,C.bTS,C.bTO,C.bTP,C.bTQ,C.bTN,C.bTl,C.bTm,C.bTq,C.bTp,C.bTo,C.bTn,C.e6d,C.e6c,C.e6f,C.e6g,C.e6h,C.e6b,C.e6j,C.e6i,C.e5C,C.e5D,C.e5F,C.e51,C.e5i,C.e5h,C.e5k,C.e5y,C.e5d,C.e5o,C.e5p,C.e5n,C.e5l,C.e5m,C.e5r,C.e5s,C.e5t,C.e5x,C.e4Q,C.e5A,C.e4U,C.e4X,C.e4Z,C.e5G,C.e54,C.e52,C.e56,C.e57,C.e53,C.e58,C.e5c,C.e5P,C.e5Q,C.e5I,C.e5L,C.e5M,C.e5N,C.e5S,C.e5J,C.e5_,C.djA,C.djz,C.djE,C.djO,C.djF,C.f1D,C.dzY,C.dzV,C.dzW,C.dA5,C.dA4,C.dA3,C.dAd,C.dA2,C.dAe,C.dA1,C.dAf,C.dA0,C.dAg,C.dA_,C.dzZ,C.dA9,C.dAj,C.dAs,C.e61,C.e65,C.e66,C.e5Y,C.e5Z,C.e6_,C.e64,C.e68,C.e67,C.e5T,C.e5U,C.e5V,C.e5W,C.e5X,C.dS5,C.h39,C.cqA,C.db5,C.db4,C.db8,C.db1,C.db3,C.cIX,C.cJ2,C.cJ3,C.cJ1,C.cJ5,C.cJ0,C.cIY,C.cIZ,C.cJ9,C.frg,C.frh,C.eZO,C.eZF,C.eZG,C.eZH,C.eZJ,C.eZK,C.eZN,C.eZA,C.eZD,C.eZP,C.eZB,C.eZS,C.eZT,C.eZU,C.eZV,C.eZR,C.eZv,C.eZw,C.eZx,C.eZz,C.eZy,C.f_d,C.f_e,C.eZX,C.eZY,C.f_4,C.f_5,C.f_6,C.f_0,C.f_1,C.f_k,C.f_j,C.f_l,C.f_i,C.eZW,C.f__,C.f_g,C.f_f,C.f_a,C.f_b,C.f_9,C.f_8])
u(A.ag,[C.aqF,C.Un,C.a02,C.a06,C.a04,C.a_D,C.amH,C.akR,C.avK,C.azG,C.amQ,C.amO,C.amK,C.WK,C.amM,C.Uo,C.arU,C.arO,C.a0I,C.arS,C.a11,C.a12,C.a7S,C.a_F,C.a_E,C.a_9,C.a2Q,C.GB,C.azM,C.auU,C.auO,C.auT,C.Pg])
u(A.ah,[C.aFu,C.bhP,C.aCs,C.bid,C.aCv,C.bfn,C.aCt,C.aAE,C.aI_,C.azH,C.aCx,C.aCw,C.aCu,C.bne,C.amN,C.amJ,C.aG3,C.aG0,C.aEt,C.aG2,C.aG1,C.bnf,C.aOd,C.aBc,C.aBb,C.azT,C.bzK,C.aQm,C.aQn,C.aHB,C.boC,C.aHA,C.bBv])
u(A.mm,[C.dSI,C.dSK,C.dSF,C.dT3,C.fP9,C.bT7,C.dja,C.dj9,C.diR,C.dj5,C.dj6,C.djx,C.bUV,C.bUN,C.bTy,C.bTz,C.haF,C.hb5,C.bMr,C.csl,C.csf,C.cs9,C.fbZ,C.bTX,C.bU_,C.bU0,C.due,C.bTT,C.e5u,C.e59,C.e5R,C.djN,C.djM,C.djK,C.djP,C.djS,C.djT,C.djD,C.djH,C.djJ,C.djW,C.cgO,C.cgW,C.ch0,C.dS6,C.h3b,C.h3a,C.frd,C.fre,C.eZL,C.f_h,C.cIg,C.fza,C.fuK,C.fPf,C.fLd,C.fPc,C.fvx,C.fvw,C.fzW])
u(A.qB,[C.a2k,C.agB,C.a2D,C.a0u,C.ada,C.aMy,C.IF,C.amS,C.cIh,C.cIi])
t(C.amI,C.aCt)
t(C.akS,C.aAE)
t(C.avL,C.aI_)
t(C.bhT,C.aCx)
t(C.amR,C.bhT)
t(C.bhS,C.aCw)
t(C.amP,C.bhS)
t(C.bhR,C.aCu)
t(C.amL,C.bhR)
t(C.bmU,C.aOd)
t(C.bzI,C.aQm)
t(C.bzJ,C.aQn)
t(C.aHC,C.bBv)
t(C.bbY,A.bbL)
t(C.bzL,A.apk)
t(C.bbX,C.bzL)
w(C.aCt,A.cf)
w(C.aAE,A.cf)
w(C.aI_,A.eO)
w(C.aCu,A.cf)
v(C.bhR,C.agn)
w(C.aCw,A.cf)
v(C.bhS,C.agn)
w(C.aCx,A.cf)
v(C.bhT,C.agn)
w(C.aOd,A.eO)
w(C.aQm,A.cf)
w(C.aQn,A.cf)
v(C.bBv,A.eG)
v(C.bzL,A.jk)})()
A.nN(b.typeUniverse,JSON.parse('{"b0U":{"aw":[],"w":[]},"bec":{"aB":[]},"aqF":{"ag":[],"w":[]},"aFu":{"ah":["aqF"]},"Un":{"ag":[],"w":[]},"amG":{"aw":[],"w":[]},"aXC":{"aw":[],"w":[]},"bhP":{"ah":["Un"]},"a02":{"ag":[],"w":[]},"a06":{"ag":[],"w":[]},"a04":{"ag":[],"w":[]},"a_D":{"ag":[],"w":[]},"aCs":{"ah":["a02"]},"bid":{"ah":["a06"]},"aCv":{"ah":["a04"]},"a_i":{"aw":[],"w":[]},"bfp":{"aB":[]},"bfg":{"aB":[]},"bfn":{"ah":["a_D"]},"aJD":{"aB":[]},"bkM":{"aB":[]},"bdx":{"aw":[],"w":[]},"amH":{"ag":[],"w":[]},"amI":{"ah":["amH"]},"bqn":{"aB":[]},"aXH":{"aB":[]},"akR":{"ag":[],"w":[]},"avK":{"ag":[],"w":[]},"azG":{"ag":[],"w":[]},"akS":{"ah":["akR"]},"bee":{"aB":[]},"R3":{"aw":[],"w":[]},"aCr":{"aB":[]},"avL":{"ah":["avK"]},"bdG":{"aB":[]},"azH":{"ah":["azG"]},"amQ":{"ag":[],"w":[]},"amO":{"ag":[],"w":[]},"amK":{"ag":[],"w":[]},"amR":{"ah":["amQ"]},"buu":{"aB":[]},"amP":{"ah":["amO"]},"bkU":{"aB":[]},"amL":{"ah":["amK"]},"bkj":{"aB":[]},"WK":{"ag":[],"w":[]},"amM":{"ag":[],"w":[]},"Uo":{"ag":[],"w":[]},"a76":{"aw":[],"w":[]},"bkq":{"aB":[]},"tI":{"aw":[],"w":[]},"IG":{"aw":[],"w":[]},"bne":{"ah":["WK"]},"amN":{"ah":["amM"]},"amJ":{"ah":["Uo"]},"arU":{"ag":[],"w":[]},"arO":{"ag":[],"w":[]},"a0I":{"ag":[],"w":[]},"aeW":{"aw":[],"w":[]},"aG3":{"ah":["arU"]},"aG0":{"ah":["arO"]},"bhV":{"aw":[],"w":[]},"bhY":{"aB":[]},"blL":{"aw":[],"w":[]},"bgZ":{"aB":[]},"bzS":{"aw":[],"w":[]},"bp6":{"aw":[],"w":[]},"aEt":{"ah":["a0I"]},"aeV":{"aw":[],"w":[]},"blK":{"aw":[],"w":[]},"aeU":{"aw":[],"w":[]},"blJ":{"aw":[],"w":[]},"aEu":{"aw":[],"w":[]},"aKO":{"aw":[],"w":[]},"GN":{"aw":[],"w":[]},"arS":{"ag":[],"w":[]},"a11":{"ag":[],"w":[]},"a12":{"ag":[],"w":[]},"aG2":{"ah":["arS"]},"bhW":{"aw":[],"w":[]},"aea":{"aw":[],"w":[]},"bhU":{"aw":[],"w":[]},"bhZ":{"aw":[],"w":[]},"aG1":{"ah":["a11"]},"bnf":{"ah":["a12"]},"b0S":{"aw":[],"w":[]},"a7S":{"ag":[],"w":[]},"bmU":{"ah":["a7S"]},"bmT":{"aB":[]},"auV":{"aw":[],"w":[]},"a_F":{"ag":[],"w":[]},"a_E":{"ag":[],"w":[]},"a_9":{"ag":[],"w":[]},"a2Q":{"ag":[],"w":[]},"aBc":{"ah":["a_F"]},"aBb":{"ah":["a_E"]},"azT":{"ah":["a_9"]},"bzK":{"ah":["a2Q"]},"GB":{"ag":[],"w":[]},"azM":{"ag":[],"w":[]},"bzI":{"ah":["GB"]},"bzJ":{"ah":["azM"]},"bzH":{"aB":[]},"auU":{"ag":[],"w":[]},"aHB":{"ah":["auU"]},"afg":{"aw":[],"w":[]},"auO":{"ag":[],"w":[]},"auT":{"ag":[],"w":[]},"boC":{"ah":["auO"]},"aHA":{"ah":["auT"]},"Pg":{"ag":[],"w":[]},"aHC":{"ah":["Pg"],"eG":[]},"bbX":{"jk":[],"fq":[]}}'))
A.a2E(b.typeUniverse,JSON.parse('{"agn":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aD
return{e2:w("aUm"),cq:w("ml"),Q:w("rx"),r:w("bq<p,p>"),c5:w("aWk"),dY:w("aWl"),fH:w("N3"),de:w("aly"),dN:w("Nb<H>"),gc:w("ED<H>"),A:w("eS<p?>"),e:w("IE"),B:w("nx"),P:w("i7"),df:w("lw"),k:w("l1"),x:w("aA<~>"),U:w("U<aV6>"),V:w("U<ab>"),C:w("U<rx>"),O:w("U<u>"),c:w("U<N3>"),b:w("U<aly>"),ac:w("U<eS<p?>>"),I:w("U<nx>"),u:w("U<i7>"),J:w("U<lw>"),_:w("U<l1>"),cl:w("U<aA<ai<aa<p,@>>>>"),R:w("U<o6>"),eU:w("U<ai<+(G,G)>>"),ez:w("U<aa<p,aK>>"),gE:w("U<aa<p,p>>"),Y:w("U<aa<p,@>>"),fD:w("U<o8>"),bp:w("U<oQ>"),g:w("U<r>"),ar:w("U<av6>"),v:w("U<hP>"),gy:w("U<aaA>"),L:w("U<+(p,p)>"),G:w("U<+(G,G)>"),E:w("U<+(G,~())>"),bd:w("U<+(p,H,Q)>"),bF:w("U<+count,id,name(H,p,p)>"),F:w("U<da>"),s:w("U<p>"),cF:w("U<at>"),aS:w("U<jP>"),dT:w("U<bbK>"),p:w("U<w>"),Z:w("U<fq>"),D:w("U<lI>"),h:w("U<aAU>"),cC:w("U<bj3>"),fp:w("U<L0>"),M:w("U<L7>"),gZ:w("U<aJJ>"),gA:w("U<ags>"),e4:w("U<agz>"),dE:w("U<aLM>"),f7:w("U<Q>"),n:w("U<G>"),t:w("U<H>"),dS:w("U<aB?>"),d4:w("U<p?>"),eF:w("cB<ah<ag>>"),d:w("ai<nx>"),do:w("ai<i7>"),cg:w("ai<lw>"),ax:w("ai<l1>"),fO:w("ai<aa<p,@>>"),cz:w("ai<+(p,p)>"),bC:w("ai<+count,id,name(H,p,p)>"),dy:w("ai<p>"),er:w("ai<at>"),gk:w("ai<lI>"),j:w("ai<@>"),fK:w("bB<p,p>"),d2:w("bB<p,ai<aa<p,@>>>"),a:w("aa<p,@>"),f:w("aa<@,@>"),gv:w("N<p,IH>"),cM:w("N<H,p>"),w:w("kK"),g2:w("tT"),bV:w("aqs"),fL:w("cw"),K:w("aK"),dc:w("hP"),fo:w("PE<H>"),fz:w("+(p,p)"),ei:w("+scope,text(p,p)"),bn:w("+games,limit(Q,H)"),d9:w("+dx,hidden(G,ai<i7>)"),cs:w("+count,id,name(H,p,p)"),N:w("p"),fT:w("iF<i7>"),ec:w("iF<p>"),gW:w("re<G>"),X:w("bt<G>"),bW:w("e2"),W:w("bl<p>"),b4:w("bl<H>"),cI:w("km<p>"),av:w("Y<zK>"),cc:w("Y<p>"),l:w("w"),gF:w("fq"),fA:w("lI"),dO:w("GR"),bw:w("aeU<p?>"),cy:w("L9"),q:w("p9"),y:w("Q"),i:w("G"),z:w("@"),S:w("H"),eK:w("ai<l1>?"),m:w("arR?"),cT:w("r?"),h5:w("+(p,p)?"),eo:w("+code,qrPayload,usesRemaining(p,p,H)?"),he:w("+qrPayload,token,usesRemaining(p,p,H)?"),gG:w("+members,trees,viewOnly(H,H,Q)?"),az:w("qr?"),T:w("p?"),aD:w("e2?"),o:w("lI?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6Y=new A.bb(B.h1,B.bJ,B.h1,B.bJ)
D.afA=new A.bb(B.h1,B.i5,B.h1,B.i5)
D.b7c=new A.bb(B.jE,B.bJ,B.bJ,B.bJ)
D.b7g=new A.av(B.cU,1.4,B.r,-1)
D.b7q=new A.av(B.ac,1,B.r,-1)
D.ag6=new A.aY(140,1/0,0,1/0)
D.b8N=new A.aY(0,1/0,64,1/0)
D.b8R=new A.aY(0,84,0,1/0)
D.agd=new A.aY(130,1/0,0,1/0)
D.aEN=w([B.ml,B.tb,B.c],x.O)
D.cbL=new A.a7(B.ay,B.aC,B.x,D.aEN,null,null)
D.b9C=new A.n(null,null,null,null,null,D.cbL,B.m)
D.dkr=w([B.aU,B.bQ],x.O)
D.cdX=new A.a7(B.aX,B.b1,B.x,D.dkr,null,null)
D.b9X=new A.n(null,null,null,null,null,D.cdX,B.m)
D.Zr=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fI=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dov=w([B.dx,D.Zr,D.fI],x.O)
D.caW=new A.a7(B.aX,B.b1,B.x,D.dov,null,null)
D.baH=new A.n(null,null,null,null,null,D.caW,B.m)
D.fDD=new A.F(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.her=new A.C("?",null,D.fDD,null,null,null,null,null,null,null,null,null)
D.bex=new A.cl(B.z,null,null,D.her,null)
D.WV=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXl=new A.C("\ud83c\udf33",null,D.WV,null,null,null,null,null,null,null,null,null)
D.agZ=new A.cl(B.z,null,null,D.fXl,null)
D.h_0=new A.C("\ud83c\udfc6",null,B.Lu,null,null,null,null,null,null,null,null,null)
D.beI=new A.cl(B.z,null,null,D.h_0,null)
D.bgy=new A.fn(null,null,null,null,null,B.kC,null,null,null,null)
D.ah_=new A.cl(B.z,null,null,D.bgy,null)
D.kW=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fEb=new A.F(!0,D.kW,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZ0=new A.C("No books on the shelf yet.",null,D.fEb,null,null,null,null,null,null,null,null,null)
D.eAG=new A.D(B.nW,D.fZ0,null)
D.beZ=new A.cl(B.z,null,null,D.eAG,null)
D.fLo=new A.F(!0,D.fI,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hfo=new A.C("\ud83d\ude8c  On the road\u2026",null,D.fLo,null,null,null,null,null,null,null,null,null)
D.eBf=new A.D(B.cr,D.hfo,null)
D.bfr=new A.cl(B.z,null,null,D.eBf,null)
D.aZ_=new A.C("\ud83e\uddfa",null,D.WV,null,null,null,null,null,null,null,null,null)
D.bfG=new A.cl(B.z,null,null,D.aZ_,null)
D.h1u=new A.C("\ud83c\udfad",null,D.WV,null,null,null,null,null,null,null,null,null)
D.bfR=new A.cl(B.z,null,null,D.h1u,null)
D.bfU=new A.cl(B.z,null,null,S.Zd,null)
D.ahj=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.ahq=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bia=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bif=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bir=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bit=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.biv=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.biD=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lP=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.biH=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.biM=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.biO=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.biP=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lR=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bjs=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Cc=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bjB=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bjV=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bjY=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bk3=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bkb=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.ai5=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bki=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.ZF=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.ai8=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bkt=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.ZH=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bkO=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.aik=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.blc=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bls=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.blS=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bm2=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.Gx=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bmr=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bmu=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bmy=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aiN=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bmQ=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bmW=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bn2=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.aiR=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bnb=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bnG=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bnQ=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bnT=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bnZ=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.aj7=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.boD=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ajw=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bpC=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ajI=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bq1=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.GL=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bq8=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bqi=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bqk=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ajM=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bqC=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bqE=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bqH=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ajU=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a_r=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.br5=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.brs=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.brx=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ak5=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.brE=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a_y=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bs0=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bs1=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.GU=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bsP=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.btr=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.btx=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.btB=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qF=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.btM=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.btQ=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.btW=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.btY=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.akS=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.akW=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.H_=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a_T=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.al4=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bvb=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bvt=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bvW=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bw4=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.alu=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a04=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bwf=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bww=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a0b=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bwN=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bx3=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a0g=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bx8=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.alM=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.alO=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bxr=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.alV=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bxU=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bxY=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.by4=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.byd=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bym=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.byY=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bzt=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fT8=new A.C("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bCZ=new A.eS(null,D.fT8,B.fj,null,x.A)
D.h1l=new A.C("None",null,null,null,null,null,null,null,null,null,null,null)
D.bD0=new A.eS(null,D.h1l,B.fj,null,x.A)
D.bDx=new A.bf(38e5)
D.bEh=new A.iA(0,10,0,10)
D.bEq=new A.P(0,1,0,0)
D.bEB=new A.iA(0,4,0,4)
D.bEE=new A.P(0,4,5,0)
D.bEU=new A.P(10,10,14,10)
D.bF4=new A.iA(10,4,10,4)
D.bFd=new A.iA(10,8,10,8)
D.bFe=new A.P(10,8,8,8)
D.bFI=new A.P(12,6,12,2)
D.bG1=new A.P(14,0,14,6)
D.bG5=new A.P(14,10,6,6)
D.bG6=new A.P(14,12,14,0)
D.bGa=new A.P(14,12,14,8)
D.bGd=new A.P(14,12,8,14)
D.bGh=new A.iA(14,14,14,14)
D.bGA=new A.P(14,6,14,40)
D.bGD=new A.P(14,8,14,30)
D.bH0=new A.P(16,2,16,10)
D.bHa=new A.P(16,6,16,30)
D.bHc=new A.P(16,6,16,8)
D.bHs=new A.P(18,10,18,4)
D.bHu=new A.P(18,12,18,0)
D.bHB=new A.P(18,14,12,4)
D.aop=new A.P(18,16,18,8)
D.bHS=new A.P(18,20,18,22)
D.bHY=new A.P(18,30,18,30)
D.bIf=new A.P(20,10,12,20)
D.bIi=new A.P(20,11,20,11)
D.bIu=new A.P(20,18,16,18)
D.bIw=new A.P(20,18,20,6)
D.bJl=new A.P(24,32,24,28)
D.bJm=new A.P(24,36,24,32)
D.bJp=new A.P(26,26,24,14)
D.bJE=new A.P(2,4,2,8)
D.bJI=new A.P(30,0,30,0)
D.bJT=new A.P(38,22,22,22)
D.aoN=new A.P(40,24,24,24)
D.bJV=new A.iA(40,40,40,40)
D.bJX=new A.P(46,30,30,30)
D.bKq=new A.P(56,40,40,40)
D.bKu=new A.P(1.25,1.25,1.25,1.25)
D.bKv=new A.P(60,0,60,0)
D.bKA=new A.P(6,14,6,16)
D.bKE=new A.P(6,4,12,0)
D.bKI=new A.P(6,6,10,2)
D.bKP=new A.iA(7,3,7,3)
D.bLl=new A.P(5,1.5,5,1.5)
D.bLw=new A.P(6,2.5,6,2.5)
D.h9z=new A.C("Family Games",null,B.jY,null,null,null,null,null,null,null,null,null)
D.fRJ=new A.C("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.WM,null,null,null,null,null,null,null,null,null)
D.cNj=w([D.h9z,D.fRJ],x.p)
D.bAs=new A.fp(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.cNj,null)
D.bLX=new A.bx(1,B.ba,D.bAs,null)
D.hdZ=new A.C("Signature",null,B.ns,null,null,null,null,null,null,null,null,null)
D.bM_=new A.bx(1,B.ba,D.hdZ,null)
D.h65=new A.C("MADE BY THE ONE WHO PLANTED THE TREE",null,B.ui,null,null,null,null,null,null,null,null,null)
D.bMx=new A.bx(1,B.ba,D.h65,null)
D.hb1=new A.C("Tell the AI what to fix",null,B.dn,null,null,null,null,null,null,null,null,null)
D.bMO=new A.bx(1,B.ba,D.hb1,null)
D.fMa=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hd3=new A.C("Worksheets",null,D.fMa,null,null,null,null,null,null,null,null,null)
D.fMm=new A.F(!0,B.ahP,null,null,null,null,13,B.cF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbT=new A.C("Track your project spending",null,D.fMm,null,null,null,null,null,null,null,null,null)
D.dbu=w([D.hd3,B.au,D.hbT],x.p)
D.bA5=new A.fp(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.dbu,null)
D.bMU=new A.bx(1,B.ba,D.bA5,null)
D.fH3=new A.F(!0,B.kC,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSi=new A.C("FAMILY LIBRARY",null,D.fH3,null,null,null,null,null,null,null,null,null)
D.bNc=new A.bx(1,B.ba,D.fSi,null)
D.Py=new C.IE("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.x3=new C.IF(0,"male")
D.oO=new C.IF(1,"female")
D.zB=new C.IF(2,"unknown")
D.v8=new C.amS(0,"owner")
D.Pz=new C.amS(1,"editor")
D.l5=new C.amS(2,"viewer")
D.aqK=new A.a_(61199,"MaterialIcons",!1)
D.bSx=new A.a_(61504,"MaterialIcons",!1)
D.bSy=new A.a_(61505,"MaterialIcons",!1)
D.bSA=new A.a_(61587,"MaterialIcons",!1)
D.bSH=new A.a_(61890,"MaterialIcons",!1)
D.bTA=new A.a_(63034,"MaterialIcons",!0)
D.bTS=new A.a_(63153,"MaterialIcons",!1)
D.bUo=new A.a_(63429,"MaterialIcons",!1)
D.asS=new A.a_(984520,"MaterialIcons",!1)
D.bT5=new A.a_(62776,"MaterialIcons",!1)
D.bWN=new A.ae(D.bT5,26,B.b5,null,null,null)
D.bRv=new A.a_(57648,"MaterialIcons",!1)
D.bX7=new A.ae(D.bRv,14,B.c,null,null,null)
D.bXp=new A.ae(B.I2,17,null,null,null,null)
D.bXw=new A.ae(B.Q3,null,B.bQ,null,null,null)
D.bXW=new A.ae(B.a3S,null,null,null,null,null)
D.bXZ=new A.ae(B.jj,18,B.kC,null,null,null)
D.a3B=new A.a_(62044,"MaterialIcons",!1)
D.bY4=new A.ae(D.a3B,null,B.aU,null,null,null)
D.bYb=new A.ae(B.zO,18,B.c,null,null,null)
D.bYT=new A.ae(B.ee,16,null,null,null,null)
D.bZ_=new A.ae(D.a3B,32,B.aU,null,null,null)
D.bZj=new A.ae(B.aqL,18,B.cU,null,null,null)
D.c_q=new A.ae(B.Id,22,B.aB,null,null,null)
D.c_E=new A.ae(B.ee,22,B.b5,null,null,null)
D.c_R=new A.ae(K.a3G,22,B.c,null,null,null)
D.c_Y=new A.ae(B.vi,52,B.c,null,null,null)
D.c08=new A.ae(B.Id,30,B.aB,null,null,null)
D.c0t=new A.ae(B.Qa,null,B.c,null,null,null)
D.atB=new A.ae(B.vt,22,B.c,null,null,null)
D.c0C=new A.ae(B.ee,17,null,null,null,null)
D.c1_=new A.ae(B.xh,26,B.cU,null,null,null)
D.c1N=new A.ae(B.a47,16,null,null,null,null)
D.c2z=new A.ae(B.vi,24,B.c,null,null,null)
D.c2E=new A.ae(B.Q1,20,B.tR,null,null,null)
D.c2K=new A.ae(B.I0,null,B.bQ,null,null,null)
D.c2T=new A.ae(B.jj,18,B.c,null,null,null)
D.c3z=new A.ae(B.cA,22,B.ac,null,null,null)
D.c4s=new A.ae(B.eo,16,B.ac,null,null,null)
D.c4E=new A.ae(D.a3B,20,B.aU,null,null,null)
D.au1=new A.ae(B.hm,20,null,null,null,null)
D.c5b=new A.ae(B.cA,18,D.kW,null,null,null)
D.c5t=new A.ae(B.zY,28,B.c,null,null,null)
D.c5F=new A.ae(B.PS,null,B.fo,null,null,null)
D.c6_=new A.ae(B.zY,24,B.c,null,null,null)
D.c6r=new A.ae(B.vi,null,B.aU,null,null,null)
D.c6s=new A.ae(B.jz,20,B.cU,null,null,null)
D.c6M=new A.ae(B.I2,16,null,null,null,null)
D.c8k=new A.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eU,!0,null,null,null,null)
D.auL=new C.a76(10,null)
D.c8R=new C.a76(12,null)
D.c8S=new C.a76(14,null)
D.dsG=w([B.bv,B.aU,B.fx,B.b5],x.O)
D.ca1=new A.a7(B.ay,B.aC,B.x,D.dsG,null,null)
D.bsB=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bz4=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d7N=w([D.bsB,D.bz4],x.O)
D.caf=new A.a7(B.aX,B.b1,B.x,D.d7N,null,null)
D.dmr=w([B.fl,B.h6,B.fx],x.O)
D.cal=new A.a7(B.ay,B.aC,B.x,D.dmr,null,null)
D.akG=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.biQ=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.da4=w([D.akG,D.biQ],x.O)
D.caX=new A.a7(B.aX,B.b1,B.x,D.da4,null,null)
D.bmH=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aE3=w([D.bmH,D.akG],x.O)
D.cbg=new A.a7(B.ay,B.aC,B.x,D.aE3,null,null)
D.ajo=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bpt=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dlw=w([D.ajo,D.bpt],x.O)
D.cbX=new A.a7(B.a5,B.a9,B.x,D.dlw,null,null)
D.dA2=w([B.bE,B.nJ],x.O)
D.cbZ=new A.a7(B.aX,B.b1,B.x,D.dA2,null,null)
D.bsw=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dB0=w([D.bsw,D.kW,D.kW,E.O1],x.O)
D.dDH=w([0,0.07,0.9,1],x.n)
D.ccu=new A.a7(B.a5,B.a9,B.x,D.dB0,D.dDH,null)
D.ccD=new A.a7(B.ay,B.aC,B.x,B.TP,null,null)
D.d5u=w([B.aD,D.lP],x.O)
D.ccG=new A.a7(B.a5,B.a9,B.x,D.d5u,null,null)
D.dzA=w([B.b5,B.aU,B.bQ],x.O)
D.cdJ=new A.a7(B.ay,B.aC,B.x,D.dzA,null,null)
D.ci7=w([10,20,30],x.t)
D.cs6=w([-1,-0.4,0.3,1],x.n)
D.czC=w([B.bv,B.b5,B.fl],x.O)
D.czK=w([B.bk,B.aD,B.kB],x.O)
D.czM=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cAu=w([30,140,262,360],x.n)
D.bqN=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cG5=w([D.bqN,B.akf],x.O)
D.evk=new A.r(1,2)
D.foY=new A.da(B.b6,D.evk,3)
D.aAV=w([D.foY],x.F)
D.cNA=w([B.hg,B.cd,B.fw],x.O)
D.cQm=w([B.bP,B.bz,B.bs],x.O)
D.bO2=new C.uX("classic","Classic leather","Gold-edged brown leather",D.aE3,B.kC,B.kC,"\u2766",B.K,!0,!1,!1,!1)
D.bhV=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bxK=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.ddh=w([D.bhV,D.bxK],x.O)
D.aki=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bNY=new C.uX("ornate","Ornate gold","Double gold border and flourishes",D.ddh,D.aki,D.aki,"\u2726",B.K,!0,!0,!0,!1)
D.bmd=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.btl=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d4f=w([D.bmd,D.btl],x.O)
D.bNX=new C.uX("parchment","Parchment","Old paper with dark ink",D.d4f,D.GU,B.je,"\u2767",B.K,!0,!1,!1,!0)
D.ahs=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bvT=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dxI=w([D.ahs,D.bvT],x.O)
D.bqf=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bv5=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bO_=new C.uX("minimal","Clean paper","Plain and elegant, like a printed book",D.dxI,D.bqf,D.bv5,"",B.K,!0,!0,!1,!0)
D.bO1=new C.uX("midnight","Midnight","Deep blue with silver stars",B.aEn,B.cB,B.cj,"\u2727",B.K,!0,!0,!1,!1)
D.bNW=new C.uX("emerald","Emerald library","Green cloth, title on the left",H.aBk,B.kC,B.h8,"\u25c6",B.b7,!0,!1,!1,!1)
D.bwo=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dvD=w([B.ew,D.bwo],x.O)
D.brD=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bsU=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bO0=new C.uX("rose","Rose vintage","Burgundy with rose-gold lettering",D.dvD,D.brD,D.bsU,"\u2740",B.K,!0,!1,!0,!1)
D.dAC=w([B.cu,B.n4],x.O)
D.bNZ=new C.uX("modern","Modern","Dark, bold, left-aligned",D.dAC,B.aH,B.c,"",B.b7,!1,!0,!1,!1)
D.a6a=w([D.bO2,D.bNY,D.bNX,D.bO_,D.bO1,D.bNW,D.bO0,D.bNZ],A.aD("U<uX>"))
D.cTo=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dAp=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bOd=new C.lw('What does "Ubuntu" mean?',D.dAp,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d6b=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bOg=new C.lw("In Swahili, what do we call a grandmother?",D.d6b,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d62=w(["Babu","Mama","Baba","Dada"],x.s)
D.bOb=new C.lw("In Swahili, what do we call a grandfather?",D.d62,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d7o=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bOf=new C.lw("What is a sister called in Swahili?",D.d7o,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.dcJ=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bOc=new C.lw("What is a brother called in Swahili?",D.dcJ,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d61=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bOn=new C.lw("Which word means father in Swahili?",D.d61,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dBC=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bOm=new C.lw('"Umoja ni nguvu" means...',D.dBC,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dyr=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bOo=new C.lw('"Haba na haba hujaza kibaba" teaches us...',D.dyr,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.dad=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bOl=new C.lw('The African saying "It takes a village to raise a child" means...',D.dad,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dBV=w(["The elders","The market","The river","The drum"],x.s)
D.bOh=new C.lw("Who is the traditional keeper of the family stories?",D.dBV,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cXG=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bOe=new C.lw("Why do families sit round the fire at night?",D.cXG,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dAE=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bOj=new C.lw('What does "Harambee" mean?',D.dAE,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dfE=w(["An elder","A baby","A market","A cow"],x.s)
D.bOi=new C.lw('"Mzee" is a respectful word for...',D.dfE,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dvt=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bOk=new C.lw('What does "Shikamoo" show?',D.dvt,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aBf=w([D.bOd,D.bOg,D.bOb,D.bOf,D.bOc,D.bOn,D.bOm,D.bOo,D.bOl,D.bOh,D.bOe,D.bOj,D.bOi,D.bOk],x.J)
D.d15=w([90,360],x.n)
D.d3M=w([B.bQ,B.bp],x.O)
D.bsj=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d4t=w([D.ahs,D.bsj],x.O)
D.d5c=w([-1,-0.3,0.4,1],x.n)
D.d68=w([0,0.45,0.72,0.92,1],x.n)
D.bm9=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d6q=w([D.bm9,B.bB],x.O)
D.bjQ=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.am4=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d71=w([B.dx,D.bjQ,D.am4],x.O)
D.d85=w([B.bc,B.js,B.pv],x.O)
D.bmJ=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.buX=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bjw=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d8a=w([D.bmJ,D.buX,D.bjw],x.O)
D.d8v=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d8F=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hJ_=new C.aey(78,424,48,44,56)
D.hIY=new C.aey(214,396,34,34,42)
D.hIZ=new C.aey(442,452,56,50,64)
D.aCe=w([D.hJ_,D.hIY,D.hIZ],A.aD("U<aey>"))
D.d9e=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.biJ=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.boC=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dDD=w([D.ajo,D.biJ,D.boC],x.O)
D.bO3=new C.uY("leather","Leather",D.dDD,"vintage")
D.dgH=w([B.dg,B.GJ,B.ZW],x.O)
D.bOa=new C.uY("midnight","Midnight",D.dgH,"starry")
D.d86=w([B.eq,B.eg,B.lt],x.O)
D.bO9=new C.uY("forest","Forest",D.d86,"story")
D.dFO=w([B.er,B.ew,B.kE],x.O)
D.bO6=new C.uY("burgundy","Burgundy",D.dFO,"royal")
D.cPV=w([B.aD,B.n_,B.nA],x.O)
D.bO7=new C.uY("royal","Royal",D.cPV,"royal")
D.daK=w([B.bz,B.cu,B.n4],x.O)
D.bO4=new C.uY("charcoal","Charcoal",D.daK,"geo")
D.dDM=w([B.c9,B.dV,B.wD],x.O)
D.bO8=new C.uY("sunset","Sunset",D.dDM,"sunset")
D.dEy=w([B.js,B.yU,B.a__],x.O)
D.bO5=new C.uY("ocean","Ocean",D.dEy,"band")
D.Aq=w([D.bO3,D.bOa,D.bO9,D.bO6,D.bO7,D.bO4,D.bO8,D.bO5],A.aD("U<uY>"))
D.dbh=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.dbZ=w([B.an,B.aM,B.a_],x.O)
D.ddm=w([B.ew,B.eg,B.dg,B.iT,B.yW,B.cU,B.k8,B.cQ,B.d8],x.O)
D.ddn=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.foZ=new A.da(B.dG,B.dQ,8)
D.ddy=w([D.foZ],x.F)
D.deK=w([B.c4,B.dV,B.k3],x.O)
D.bkH=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.boV=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.btg=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.df1=w([D.bkH,B.akP,D.boV,D.btg,D.am4],x.O)
D.dfi=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dft=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bi6=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bof=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dfX=w([D.bi6,D.aiR,D.bof],x.O)
D.dgC=w([B.c4,B.hF],x.O)
D.dgI=w([B.nC,B.ip,B.ahE,B.cW],x.O)
D.dik=w([B.cW,B.nC,B.ip,D.lR,B.cW],x.O)
D.diZ=w([B.aQ,B.yS,B.yI],x.O)
D.eSU=new A.y(-0.65,0.6)
D.f56=new A.y(-0.2,0.95)
D.f6g=new A.y(0.25,0.95)
D.eWt=new A.y(0.7,0.6)
D.f6R=new A.y(1,0.1)
D.djL=w([U.VD,D.eSU,D.f56,D.f6g,D.eWt,D.f6R],x.G)
D.br6=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bxC=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.blH=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.djR=w([D.br6,D.bxC,D.blH],x.O)
D.djW=w([B.bM,B.c_,B.dC,B.aQ],x.O)
D.dks=w([B.hY,B.c9,B.uI],x.O)
D.dkQ=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dl0=w([B.fl,B.cU],x.O)
D.bsF=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dlr=w([D.bsF,D.ahq],x.O)
D.dlD=w([B.cR,B.fJ,B.fU],x.O)
D.dlP=w([B.aH,B.bp,B.dg],x.O)
D.dmo=w([B.eC,B.dr,B.eg],x.O)
D.dmK=w([B.dT,B.dg,B.GJ],x.O)
D.dmO=w([B.bt,B.mX,B.d8],x.O)
D.dn4=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.brS=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bpY=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dnp=w([D.brS,D.aiN,D.bpY],x.O)
D.dof=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dpj=w([1,0,7,6,3,2],x.t)
D.a78=w(["leather","linen","plain","stars","rays"],x.s)
D.dpu=w([0.5,2,3.6],x.n)
D.dq2=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bW4=new A.a_(983781,"MaterialIcons",!1)
D.aDK=w([B.Q3,B.hP,B.kI,B.ib,B.at_,B.Io,B.r6,D.bW4,B.asD,B.DG,B.r9,B.m1],A.aD("U<a_>"))
D.a7c=w(["double","single","corners","none"],x.s)
D.bNT=new C.zK("Little Seed","\ud83c\udf31",0)
D.bNV=new C.zK("Young Listener","\ud83d\udc42",40)
D.bNU=new C.zK("Storyteller","\ud83e\ude98",120)
D.bNS=new C.zK("Village Pride","\ud83c\udfe1",300)
D.bNQ=new C.zK("Keeper of Roots","\ud83c\udf33",700)
D.bNR=new C.zK("Elder of the Fire","\ud83d\udd25",1500)
D.aDM=w([D.bNT,D.bNV,D.bNU,D.bNS,D.bNQ,D.bNR],A.aD("U<zK>"))
D.drf=w([B.cX,B.bi,B.cQ],x.O)
D.drv=w([],x.C)
D.Ef=w([],x.u)
D.aNW=new A.r(225,528)
D.eUA=new A.y(D.aNW,1)
D.ew5=new A.r(350,548)
D.f07=new A.y(D.ew5,0.95)
D.aNQ=new A.r(158,656)
D.f00=new A.y(D.aNQ,1.12)
D.ewT=new A.r(92,544)
D.eQ3=new A.y(D.ewT,0.93)
D.ew8=new A.r(398,614)
D.eWR=new A.y(D.ew8,1.04)
D.evX=new A.r(318,662)
D.eLg=new A.y(D.evX,1.1)
D.a7k=w([D.eUA,D.f07,D.f00,D.eQ3,D.eWR,D.eLg],A.aD("U<+(r,G)>"))
D.dty=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.du3=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dv9=w([B.cW,B.nC,B.ip,D.lR,B.cW,B.ip],x.O)
D.dwA=w([B.at,B.fJ,B.iT],x.O)
D.dxh=w([-70,58],x.n)
D.dxj=w([-70,-30,20],x.n)
D.dyo=w([B.bt,B.mX,B.a05],x.O)
D.dyG=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dUQ=new C.lY("construction","Construction","Jobsite & builds",B.r8)
D.dUX=new C.lY("house","Home Build","Houses & rooms",B.vk)
D.dUN=new C.lY("grocery","Grocery","Store & pantry",B.a4G)
D.dUM=new C.lY("calculator","Calculations","Math & estimates",B.Q9)
D.dUV=new C.lY("lumber","Materials","Lumber & supplies",B.Il)
D.dUJ=new C.lY("kitchen","Kitchen","Remodel & meals",O.Qu)
D.bW1=new A.a_(983756,"MaterialIcons",!1)
D.dUO=new C.lY("landscape","Landscaping","Yard & garden",D.bW1)
D.dUI=new C.lY("plumbing","Plumbing","Pipes & water",B.pR)
D.dUY=new C.lY("electrical","Electrical","Wiring & power",B.hl)
D.dUG=new C.lY("store","Retail Shop","Daily business",B.kl)
D.dUH=new C.lY("paint_remodel","Paint & Remodel","Colors & walls",O.Qq)
D.bVo=new A.a_(983311,"MaterialIcons",!1)
D.dUU=new C.lY("roofing","Roofing","Roofs & exteriors",D.bVo)
D.bWe=new A.a_(983986,"MaterialIcons",!1)
D.dUF=new C.lY("warehouse","Warehouse","Storage & stock",D.bWe)
D.dUS=new C.lY("vehicles","Vehicles","Fleet & transport",B.DC)
D.bT7=new A.a_(62785,"MaterialIcons",!1)
D.dUL=new C.lY("farm","Farm","Crops & livestock",D.bT7)
D.dUK=new C.lY("restaurant","Restaurant","Food & catering",B.vr)
D.dUR=new C.lY("tools","Tools","Workshop gear",B.Dy)
D.dUW=new C.lY("wallet","Cash & Wallet","Quick spending",B.jz)
D.dUT=new C.lY("concrete","Concrete","Foundation work",B.arH)
D.dUP=new C.lY("blueprint","Blueprint","Plans & design",B.are)
D.a7J=w([D.dUQ,D.dUX,D.dUN,D.dUM,D.dUV,D.dUJ,D.dUO,D.dUI,D.dUY,D.dUG,D.dUH,D.dUU,D.dUF,D.dUS,D.dUL,D.dUK,D.dUR,D.dUW,D.dUT,D.dUP],A.aD("U<lY>"))
D.dze=w([B.bu,B.bi],x.O)
D.dA3=w([B.iD,B.ow,B.dZ],x.O)
D.ajC=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.akB=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bqj=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bhA=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aEV=w([D.ajC,D.akB,D.bqj,D.bhA],x.O)
D.dBh=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7T=w(["top","middle","bottom"],x.s)
D.dCO=w([B.ct,B.bp,B.dg],x.O)
D.aFe=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bba=new A.ab(0,B.H,B.b6,B.J,14)
D.aFi=w([D.bba],x.V)
D.bp9=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dDw=w([D.ai5,D.a04,D.bp9],x.O)
D.dDx=w([B.be,B.dr,B.eg],x.O)
D.evG=new A.r(24,-8)
D.ewo=new A.r(48,0)
D.evC=new A.r(24,6)
D.dFi=w([B.J,D.evG,D.ewo,D.evC],x.g)
D.dFJ=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.es6={top:0,middle:1,bottom:2}
D.dJ_=new A.bq(D.es6,["Top","Middle","Bottom"],x.r)
D.erG={double:0,single:1,corners:2,none:3}
D.dJ5=new A.bq(D.erG,["Double line","One line","Corners","None"],x.r)
D.esV={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dKK=new A.bq(D.esV,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dKW=new A.bq(B.ie,[],A.aD("bq<H,+(p,p)>"))
D.erY={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Ev=new A.bq(D.erY,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aD("bq<p,H>"))
D.dPe=new A.O7(32,null)
D.dPf=new A.O7(40,null)
D.dPg=new A.O7(46,null)
D.aNo=new C.auT(null)
D.eux=new A.r(0,40)
D.euy=new A.r(0,412)
D.euB=new A.r(0,900)
D.euK=new A.r(0,-34)
D.euL=new A.r(0,-46)
D.euN=new A.r(0,-74)
D.euQ=new A.r(100,300)
D.euR=new A.r(10,14)
D.euU=new A.r(10,-10)
D.euZ=new A.r(10,-46)
D.ev_=new A.r(10,-58)
D.ev0=new A.r(116,442)
D.ev2=new A.r(11,-1)
D.ev3=new A.r(11,-10)
D.ev4=new A.r(11,-21)
D.aNL=new A.r(11,-60)
D.evb=new A.r(14,-2)
D.evc=new A.r(150,520)
D.aa4=new A.r(150,592)
D.evf=new A.r(15,-15)
D.evg=new A.r(16,-1)
D.evj=new A.r(190,444)
D.evm=new A.r(1,5)
D.evu=new A.r(21,-78)
D.evv=new A.r(222,615)
D.Kj=new A.r(225,300)
D.aa6=new A.r(225,574)
D.evF=new A.r(24,-52)
D.evH=new A.r(250,210)
D.evS=new A.r(2,-56)
D.aO_=new A.r(300,0)
D.evT=new A.r(300,440)
D.evW=new A.r(318,476)
D.evZ=new A.r(324,144)
D.aa9=new A.r(332,150)
D.ew0=new A.r(335,585)
D.ew1=new A.r(338,140)
D.ew2=new A.r(340,158)
D.ew4=new A.r(34,-60)
D.EX=new A.r(36,-24)
D.ew6=new A.r(372,470)
D.ew7=new A.r(390,455)
D.ewg=new A.r(42,468)
D.ewh=new A.r(431,510)
D.ewi=new A.r(431,520)
D.ewj=new A.r(45,-92)
D.ewk=new A.r(46,20)
D.ewl=new A.r(46,-92)
D.ewm=new A.r(46,-94)
D.ewn=new A.r(47,-4)
D.ewp=new A.r(48,-4)
D.ewx=new A.r(4,-26)
D.ewF=new A.r(60,455)
D.ewO=new A.r(8,14)
D.ewS=new A.r(8,-76)
D.ewU=new A.r(95,575)
D.ewV=new A.r(98,-24)
D.ewX=new A.r(9,-2)
D.ewY=new A.r(9,-58)
D.aO8=new A.r(9,-79)
D.ewZ=new A.r(9,-9)
D.exB=new A.r(16.5,8)
D.exD=new A.r(3.2,0)
D.exE=new A.r(-16.5,8)
D.exL=new A.r(16.5,2)
D.exO=new A.r(-3.2,0)
D.exW=new A.r(9.5,6)
D.exZ=new A.r(-10,14)
D.ey_=new A.r(-10,-12)
D.ey0=new A.r(-10,-58)
D.ey2=new A.r(-11,-10)
D.ey4=new A.r(-11,-60)
D.ey5=new A.r(-12,-14)
D.ey6=new A.r(-12,-16)
D.eyb=new A.r(-14,-2)
D.eye=new A.r(-15,-15)
D.eyf=new A.r(-15,-3)
D.eyh=new A.r(-16,-1)
D.eyx=new A.r(-24,-52)
D.eyG=new A.r(-2,-34)
D.eyH=new A.r(-2,-38)
D.eyJ=new A.r(-30,-100)
D.aab=new A.r(-36,-24)
D.eyU=new A.r(-4,-26)
D.eyW=new A.r(-4,-6)
D.ez4=new A.r(-8,-3)
D.ez5=new A.r(-8,-48)
D.ez8=new A.r(-9,-2)
D.eza=new A.r(-9,-58)
D.ezb=new A.r(-9,-79)
D.ezc=new A.r(-9,-9)
D.eze=new A.r(-9.5,6)
D.ezr=new A.r(-16.5,2)
D.fZH=new A.C("Write a new book",null,B.hr,null,B.K,null,null,null,null,null,null,null)
D.eA0=new A.D(B.l3,D.fZH,null)
D.hdx=new A.C("Tap to go on",null,B.w3,null,null,null,null,null,null,null,null,null)
D.eAm=new A.D(B.lw,D.hdx,null)
D.at9=new A.ae(B.ia,18,B.c,null,null,null)
D.fSF=new A.C("Add",null,B.kO,null,null,null,null,null,null,null,null,null)
D.dk9=w([D.at9,B.rw,D.fSF],x.p)
D.fm1=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,D.dk9,null)
D.eAp=new A.D(B.nT,D.fm1,null)
D.eAr=new A.D(B.anc,S.Zd,null)
D.fM5=new A.F(!0,B.c,null,null,null,null,13.5,B.F,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVT=new A.C("New Project",null,D.fM5,null,null,null,null,null,null,null,null,null)
D.doD=w([D.at9,B.aa,D.fVT],x.p)
D.fm4=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,D.doD,null)
D.eAF=new A.D(B.hx,D.fm4,null)
D.fYq=new A.C("Choose your header",null,B.uf,null,null,null,null,null,null,null,null,null)
D.eB_=new A.D(B.i9,D.fYq,null)
D.bgO=new A.fn(2.2,null,null,null,null,B.cU,null,null,null,null)
D.frR=new A.a5(22,22,D.bgO,null)
D.beU=new A.cl(B.z,null,null,D.frR,null)
D.eB4=new A.D(B.a1s,D.beU,null)
D.bGs=new A.P(14,2,14,6)
D.hbC=new A.C("The top of your book. Tap a design to see it.",null,B.ug,null,null,null,null,null,null,null,null,null)
D.eB5=new A.D(D.bGs,D.hbC,null)
D.fXA=new A.C("\ud83c\udfc6 A new record!",null,B.he,null,null,null,null,null,null,null,null,null)
D.eB7=new A.D(B.lw,D.fXA,null)
D.eCG=new A.ji(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eCJ=new A.ji(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aOL=new A.ji(1,0.9607843137254902,0.48627450980392156,0)
D.Kr=new A.ji(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.B0=new A.ji(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eCP=new A.ji(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hLb=new C.bkM(null)
D.bBe=new A.mH(D.hLb,null,B.az,null,null)
D.aSo=new A.cM(0,0,0,0,null,null,D.bBe,null)
D.fSH=new A.C("\ud83c\udfc5",null,B.acv,null,null,null,null,null,null,null,null,null)
D.eHe=new A.cM(null,0,-34,null,null,null,D.fSH,null)
D.ePI=new A.y("E","Sit by the fire again")
D.eVs=new A.y("C","Good Learner")
D.eZ1=new A.y("D","Still Growing")
D.f2P=new A.y(-42,42)
D.f4e=new A.y("B","Faithful Listener")
D.f6i=new A.y("A","Keeper of the Family")
D.f9w=new A.b3(-17,0.7,0)
D.fa5=new A.b3(-8,0.95,1.3)
D.fbc=new A.b3(18,0.65,5.2)
D.fbe=new A.b3(0,1.15,2.6)
D.fbz=new A.b3(9,0.9,3.9)
D.fdx=new A.b7([0,0,1,1])
D.aTV=new A.a2(0,0,520,160)
D.fj3=new A.a2(10,612,440,618)
D.fj4=new A.a2(10,612,440,628)
D.fj7=new A.a2(14,-64,34,-12)
D.fja=new A.a2(300,336,350,348)
D.ab5=new A.a2(30,96,420,346)
D.fjb=new A.a2(30,-9,46,1)
D.fjc=new A.a2(4,2,11,14)
D.fje=new A.a2(-8,-12.5,8,-7)
D.fjf=new A.a2(-16.5,-21,16.5,1)
D.fjg=new A.a2(60,342,88,348)
D.VE=new A.a2(66,-66,94,-36)
D.fjh=new A.a2(6,8,10,14)
D.fjk=new A.a2(95,343,115,348)
D.fjl=new A.a2(-6.5,-74,6.5,-58)
D.fjr=new A.a2(-100,-74,100,-12)
D.fjs=new A.a2(-10,8,-6,14)
D.fjt=new A.a2(-11,2,-4,14)
D.fju=new A.a2(-11,-70,11,-56)
D.fjB=new A.a2(-13,-24,13,-4)
D.fjI=new A.a2(-15,-21,15,0)
D.fjL=new A.a2(-16,-21,16,1)
D.fjM=new A.a2(-16,-21,16,2)
D.fjP=new A.a2(-16,-26,16,-6)
D.fjX=new A.a2(-230,-26,230,26)
D.fkl=new A.a2(-38,-26,12,-6)
D.fkp=new A.a2(-3,-70,3,-63)
D.fkq=new A.a2(-44,-22,44,0)
D.fks=new A.a2(-46,-9,-30,1)
D.aTZ=new A.a2(-80,-190,80,20)
D.fkz=new A.a2(-8,-26,40,-6)
D.fkA=new A.a2(-98,-80,92,-75)
D.fkB=new A.a2(-9,-15,9,-9)
D.hb8=new A.C("Let the AI write it from your tree",null,B.iP,null,B.K,null,null,null,null,null,null,null)
D.bOY=new A.d1(1,B.cf,D.hb8,null)
D.dgB=w([B.a5a,B.aa,D.bOY],x.p)
D.flF=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,D.dgB,null)
D.fSj=new A.C("Save member",null,B.cb,null,null,null,null,null,null,null,null,null)
D.dx0=w([D.au1,B.aa,D.fSj],x.p)
D.flQ=new A.c3(B.aL,B.b9,B.h,B.l,null,B.p,null,0,D.dx0,null)
D.c_K=new A.ae(B.is,14,B.b5,null,null,null)
D.fFy=new A.F(!0,B.b5,null,null,null,null,12,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWj=new A.C("Cashier",null,D.fFy,null,null,null,null,null,null,null,null,null)
D.dpa=w([D.c_K,B.bj,D.fWj],x.p)
D.flU=new A.c3(B.aL,B.e,B.M,B.l,null,B.p,null,0,D.dpa,null)
D.fSk=new A.C("Transfer & settings",null,B.dn,null,null,null,null,null,null,null,null,null)
D.bME=new A.bx(1,B.ba,D.fSk,null)
D.d7x=w([D.atB,B.ar,D.bME],x.p)
D.flV=new A.c3(B.aL,B.e,B.h,B.l,null,B.p,null,0,D.d7x,null)
D.fqw=new A.au(16,40)
D.fqB=new A.au(22,64)
D.fqI=new A.au(280,88)
D.frw=new A.a5(30,null,null,null)
D.fRp=new A.C("The teacher is writing\u2026",null,B.Bm,null,null,null,null,null,null,null,null,null)
D.bg_=new A.cl(B.z,null,null,D.fRp,null)
D.hEW=new A.bl("w",x.W)
D.frV=new A.a5(null,56,D.bg_,D.hEW)
D.fsI=new A.hQ(5,8,8,1,null)
D.fsQ=new A.hQ(2,12,12,1.05,null)
D.fVZ=new A.C("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.ftA=new A.b0(D.fVZ,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fWe=new A.C("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aWi=new A.b0(D.fWe,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h3K=new A.C("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new A.b0(D.h3K,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.heA=new A.C("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fu8=new A.b0(D.heA,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYo=new A.C("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fuf=new A.b0(D.fYo,null,null,null,null,null,null,null,null,null,null,null,null,B.fX,!1,null,null,null,B.t,null)
D.hbP=new A.C("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aWn=new A.b0(D.hbP,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYm=new A.C("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fuF=new A.b0(D.fYm,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fSY=new A.C("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fuH=new A.b0(D.fSY,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h19=new A.C("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fuN=new A.b0(D.h19,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hfl=new A.C("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fvt=new A.b0(D.hfl,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.ha2=new A.C("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fvT=new A.b0(D.ha2,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.heE=new A.C("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fvW=new A.b0(D.heE,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h5n=new A.C("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fvY=new A.b0(D.h5n,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h_j=new A.C("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fvZ=new A.b0(D.h_j,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h_k=new A.C("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fx_=new A.b0(D.h_k,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fW0=new A.C("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fxh=new A.b0(D.fW0,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fY1=new A.C("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fxB=new A.b0(D.fY1,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h4R=new A.C("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fxS=new A.b0(D.h4R,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h08=new A.C("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fxT=new A.b0(D.h08,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fKM=new A.F(!0,B.bA,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzr=new A.es("\u2665",null,null,B.cN,null,null,null,null,null,null,D.fKM)
D.fHU=new A.F(!0,B.aS,null,null,null,null,28,B.O,B.cL,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzH=new A.es("Today: how well do you know the family?",null,null,B.cN,null,null,null,null,null,null,D.fHU)
D.fzY=new A.F(!0,B.qr,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB9=new A.F(!0,D.kW,null,null,null,null,13,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBw=new A.F(!0,D.kW,null,null,null,null,12,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBA=new A.F(!0,B.cW,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBJ=new A.F(!0,D.fI,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBU=new A.F(!0,D.fI,null,null,null,null,13,B.F,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCd=new A.ta(!0,B.u2,null,null,null,null,B.dJ,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCt=new A.F(!0,B.cW,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCx=new A.F(!0,D.kW,null,null,null,null,18,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCy=new A.F(!0,B.cW,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCD=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCG=new A.F(!0,B.cW,null,null,null,null,15,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDb=new A.F(!0,B.b5,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDc=new A.F(!0,B.ac,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDe=new A.F(!0,B.aS,null,null,null,null,15.5,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDF=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXB=new A.F(!0,B.aR,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXC=new A.F(!0,D.lP,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE4=new A.F(!0,B.cW,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acA=new A.ta(!0,B.Va,null,null,null,null,B.dJ,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Wx=new A.F(!0,B.cW,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEe=new A.F(!0,B.a_,null,null,null,null,12.5,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEj=new A.F(!0,D.fI,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEI=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFT=new A.F(!0,D.fI,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXL=new A.F(!0,D.fI,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGc=new A.F(!0,B.ac,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGo=new A.F(!0,D.fI,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGq=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGw=new A.F(!0,B.je,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXP=new A.F(!0,D.fI,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHu=new A.F(!0,D.fI,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHN=new A.F(!0,D.fI,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHP=new A.F(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHR=new A.F(!0,B.cW,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIe=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,R.Jj,null,null,null)
D.aY2=new A.F(!0,D.fI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIE=new A.F(!0,B.a_,null,null,null,null,17,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ_=new A.F(!0,B.fo,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJn=new A.F(!0,B.bQ,null,null,null,null,8,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJs=new A.F(!0,B.bE,null,null,null,null,11,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJE=new A.F(!0,B.c,null,null,null,null,13.5,B.F,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJH=new A.F(!0,D.fI,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJP=new A.F(!0,D.GU,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK0=new A.F(!0,B.b5,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKp=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKw=new A.F(!0,B.ac,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.E7,null,null,null)
D.fKX=new A.F(!0,B.cW,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL4=new A.F(!0,B.cU,null,null,null,null,13,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLh=new A.F(!0,D.lR,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYp=new A.F(!0,D.fI,null,null,null,null,null,B.F,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.LC=new A.F(!0,B.cW,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYr=new A.F(!0,B.cW,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.E7,null,null,null)
D.fLC=new A.F(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLG=new A.F(!0,B.nC,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM3=new A.F(!0,B.b5,null,null,null,null,13,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMl=new A.F(!0,D.fI,null,null,null,null,15,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMJ=new A.F(!0,B.c,null,null,null,null,null,B.F,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN7=new A.F(!0,D.fI,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fND=new A.F(!0,D.fI,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNI=new A.F(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNS=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ad4=new A.F(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ad7=new A.F(!0,D.lP,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPC=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPX=new A.F(!0,B.aS,null,null,null,null,27,B.O,B.cL,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ3=new A.F(!0,B.je,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQb=new A.F(!0,B.je,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQF=new A.C("Time:",null,B.hC,null,null,null,null,null,null,null,null,null)
D.fR0=new A.C("\ud83c\udfae",null,B.acV,null,null,null,null,null,null,null,null,null)
D.fR1=new A.C("Themes",null,B.q9,null,null,null,null,null,null,null,null,null)
D.fRx=new A.C("\ud83c\udfb2",null,B.y3,null,null,null,null,null,null,null,null,null)
D.fRB=new A.C("Delete this game?",null,B.iP,null,null,null,null,null,null,null,null,null)
D.fRI=new A.C("Add Item",null,B.cb,null,null,null,null,null,null,null,null,null)
D.fG6=new A.F(!0,B.a_,null,null,null,null,22,B.F,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS8=new A.C("Debt receipt",null,D.fG6,null,B.K,null,null,null,null,null,null,null)
D.aYF=new A.F(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSr=new A.C("Person who owes",null,D.aYF,null,null,null,null,null,null,null,null,null)
D.fTr=new A.C("Notes",null,B.acL,null,null,null,null,null,null,null,null,null)
D.fTT=new A.C("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fF_=new A.F(!0,B.c,null,null,null,null,11,B.F,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTV=new A.C("Share",null,D.fF_,null,null,null,null,null,null,null,null,null)
D.fUW=new A.C("Move your family trees",null,E.ad1,null,null,null,null,null,null,null,null,null)
D.fVA=new A.C("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fWd=new A.C("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fWB=new A.C("SAVE",null,D.LC,null,null,null,null,null,null,null,null,null)
D.fXe=new A.C("The round button is the right answer.",null,B.Bq,null,null,null,null,null,null,null,null,null)
D.fXz=new A.C("Remove this book?",null,B.he,null,null,null,null,null,null,null,null,null)
D.fM0=new A.F(!0,B.cW,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.E7,null,null,null)
D.fY6=new A.C("Fireside Stories",null,D.fM0,null,null,null,null,null,null,null,null,null)
D.aZ8=new A.C("Download",null,B.cb,null,null,null,null,null,null,null,null,null)
D.fYN=new A.C("What should the AI do?",null,B.dn,null,null,null,null,null,null,null,null,null)
D.fED=new A.F(!0,D.lP,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZ1=new A.C("REPORT CARD",null,D.fED,null,null,null,null,null,null,null,null,null)
D.fZO=new A.C("Calabash Catch",null,B.WW,null,null,null,null,null,null,null,null,null)
D.h_f=new A.C("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.h_G=new A.C("\ud83c\udfe1",null,B.Fs,null,null,null,null,null,null,null,null,null)
D.h0n=new A.C("Ribbon bookmark",null,B.jI,null,null,null,null,null,null,null,null,null)
D.fNC=new A.F(!0,B.b5,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0S=new A.C("NGMY.ORG",null,D.fNC,null,B.K,null,null,null,null,null,null,null)
D.h2c=new A.C("Scan family tree QR",null,B.cH,null,null,null,null,null,null,null,null,null)
D.fJI=new A.F(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3_=new A.C("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fJI,null,B.K,null,null,null,null,null,null,null)
D.h4d=new A.C("Delete",null,B.Wr,null,null,null,null,null,null,null,null,null)
D.h4e=new A.C("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.h4m=new A.C("Thumbnail",null,B.q9,null,null,null,null,null,null,null,null,null)
D.h4W=new A.C("Save the cover",null,B.cH,null,null,null,null,null,null,null,null,null)
D.h50=new A.C("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.Bu,null,B.K,null,null,null,null,null,null,null)
D.h5o=new A.C("Your photos",null,B.q9,null,null,null,null,null,null,null,null,null)
D.h5E=new A.C("Create Project",null,B.cb,null,null,null,null,null,null,null,null,null)
D.h60=new A.C("\u2b50 stars",null,B.WH,null,null,null,null,null,null,null,null,null)
D.h6e=new A.C("Design your cover",null,B.uf,null,null,null,null,null,null,null,null,null)
D.h6k=new A.C("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.h6n=new A.C("PICTURE",null,F.w6,null,null,null,null,null,null,null,null,null)
D.h6p=new A.C("\ud83c\udfaf",null,D.WV,null,null,null,null,null,null,null,null,null)
D.h6M=new A.C("Paid",null,B.cb,null,null,null,null,null,null,null,null,null)
D.h6O=new A.C("You can undo it right after.",null,B.Bq,null,null,null,null,null,null,null,null,null)
D.h7m=new A.C("Print",null,B.w4,null,null,null,null,null,null,null,null,null)
D.h7M=new A.C("Amount owed",null,D.aYF,null,null,null,null,null,null,null,null,null)
D.h81=new A.C("Got it",null,B.cb,null,null,null,null,null,null,null,null,null)
D.h8D=new A.C("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.h8G=new A.C("Add to budget",null,B.cb,null,null,null,null,null,null,null,null,null)
D.h95=new A.C("Debtor signature",null,B.acL,null,null,null,null,null,null,null,null,null)
D.h9f=new A.C("Change icon",null,B.acK,null,null,null,null,null,null,null,null,null)
D.ha3=new A.C("MADE BY THE SYSTEM, FROM YOUR TREE",null,B.ui,null,null,null,null,null,null,null,null,null)
D.hav=new A.C("Family tree QR",null,B.cH,null,null,null,null,null,null,null,null,null)
D.haB=new A.C("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.WU,null,null,null,null,null,null,null,null,null)
D.haZ=new A.C("Download",null,B.w4,null,null,null,null,null,null,null,null,null)
D.hb_=new A.C("The person who planted this tree has not made a game yet.",null,B.Bs,null,null,null,null,null,null,null,null,null)
D.hb3=new A.C("Change",null,B.q9,null,null,null,null,null,null,null,null,null)
D.hbV=new A.C("Clear all",null,B.cb,null,null,null,null,null,null,null,null,null)
D.hbY=new A.C("WHAT SHOULD IT CHANGE?",null,F.w6,null,null,null,null,null,null,null,null,null)
D.hcw=new A.C("COLOUR",null,F.w6,null,null,null,null,null,null,null,null,null)
D.hcL=new A.C("Do it",null,B.cH,null,null,null,null,null,null,null,null,null)
D.hcP=new A.C("Create Tree",null,B.cb,null,null,null,null,null,null,null,null,null)
D.hcZ=new A.C("Give me another clue",null,D.LC,null,null,null,null,null,null,null,null,null)
D.hdT=new A.C("Create Family Tree",null,B.fh,null,null,null,null,null,null,null,null,null)
D.he2=new A.C("THE TEACHER EXPLAINS THESE",null,B.ui,null,null,null,null,null,null,null,null,null)
D.fzX=new A.F(!0,B.kC,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.he8=new A.C("Write the first page myself",null,D.fzX,null,null,null,null,null,null,null,null,null)
D.heH=new A.C("Use this header",null,B.cH,null,null,null,null,null,null,null,null,null)
D.heO=new A.C("Create Project",null,B.aYl,null,null,null,null,null,null,null,null,null)
D.hGp=new C.ada(1,"header")
D.ae8=new C.ada(2,"projects")
D.hGq=new C.ada(3,"cashier")
D.ae9=new C.ada(4,"familyTree")
D.hUt=new C.cIh(0,"start")
D.hUu=new C.cIi(0,"start")
D.hGD=new C.a_9(null)
D.hHE=new C.a_E(null)
D.dKT=new A.bq(B.ie,[],A.aD("bq<p,GR>"))
D.drU=w([],x.dE)
D.drV=w([],x.M)
D.hIi=new C.bhX(D.dKT,D.drU,D.drV,0,0,null,null)
D.b2E=new C.a0u(0,"intro")
D.b2F=new C.a0u(1,"countdown")
D.aem=new C.a0u(2,"ask")
D.XS=new C.a0u(3,"reveal")
D.b2G=new C.a0u(4,"end")
D.hLd=new C.ti(B.H2,D.lR,B.cW,B.mi,5,!1,!1,!1,0,null)
D.hLf=new C.ti(B.H2,B.er,B.cW,B.bO,2,!0,!0,!1,2,B.cW)
D.hLh=new C.ti(B.qH,B.cU,B.cW,B.mi,2,!0,!1,!1,2,B.at)
D.hLi=new C.ti(B.H2,B.dT,B.cW,B.mi,5,!1,!1,!1,1,null)
D.hLl=new C.ti(B.a0n,D.akB,B.cW,B.mi,4,!0,!1,!0,0,null)
D.b2J=new C.ti(B.a0n,B.dV,B.cW,B.mi,3,!0,!1,!0,2,null)
D.b2K=new C.ti(B.td,D.lR,B.c,B.mi,0,!1,!1,!0,0,null)
D.b2L=new C.ti(B.qH,B.aD,B.cW,B.bO,2,!0,!0,!1,2,B.dV)
D.b2M=new C.ti(B.qH,B.nC,B.ip,B.mi,5,!1,!1,!0,3,null)
D.hLp=new C.ti(B.qH,B.dV,B.cW,B.mi,0,!0,!1,!1,0,B.aD)
D.b2N=new C.ti(B.H2,B.er,B.cW,B.bO,1,!1,!0,!1,1,null)
D.b2O=new C.ti(B.Gz,B.at,B.aD,B.mi,4,!0,!1,!0,2,null)
D.hLr=new C.ti(B.td,B.at,B.er,B.mi,3,!0,!1,!1,0,null)
D.hLt=new C.ti(B.qH,B.dT,B.cW,B.bO,1,!1,!0,!1,1,null)
D.hLu=new C.ti(B.Gz,D.ajC,B.c,B.mi,5,!1,!1,!0,0,null)
D.hM8=new C.a12(null)
D.hUC=new C.agB(0,"still")
D.Ye=new C.agB(1,"walk")
D.b3e=new C.agB(2,"pound")
D.b3f=new C.agB(3,"drum")
D.hQ6=new C.a2k(0,"greet")
D.b3g=new C.a2k(1,"teach")
D.aeG=new C.a2k(2,"ask")
D.hQ7=new C.a2k(3,"feedback")
D.b3h=new C.a2k(4,"end")
D.Yl=new C.a2D(0,"intro")
D.Ym=new C.a2D(1,"asking")
D.BK=new C.a2D(2,"reacting")
D.aeR=new C.a2D(3,"driving")
D.aeS=new C.a2D(4,"arrived")
D.af_=new C.aMy(0,"projects")
D.b3H=new C.aMy(1,"cashier")
D.hSc=new C.aMy(2,"familyTree")})()};
(a=>{a["jbxH/BtQakmkLBxSAt8plXZDzwo="]=a.current})($__dart_deferred_initializers__);