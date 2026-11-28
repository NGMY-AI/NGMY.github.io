((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A9,S,Z,Aa,P,A_,T,Ab,M,Ac,L,A0,U,H,E,Ad,V,Ae,A1,Af,Ag,Ah,Ai,Aj,Q,Ak,Al,N,A2,Am,A3,A4,A5,W,A6,An,Ao,Ap,G,Aq,Ar,As,A7,At,Au,Av,Aw,X,O,F,Ax,I,A8,K,Ay,Y,R,C={
bJx(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bJx=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uZ(null,""),$async$bJx)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.Y(y.z)
t=A.nl(b1)
s=A.c4(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dm(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cV(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.T.ar(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.r1(t,a1,B.i9,"book",E.HR),$async$bJx)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.Ss(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ab(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.Y(l!=null&&A.HX(l)?y.k:y.y)
for(j=J.a0(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cF
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a5b(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJx,v)},
ajL(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ajL=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uZ(null,""),$async$ajL)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.Y(y.z)
t=A.nl(b6)
s=x.S
r=A.cD(c1,0,A.dw(4,"count",s),A.T(c1).c)
q=H.a4U(new A.O(r,new C.h1O(),r.$ti.k("O<aj.E,o>")).aJ(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.h1N(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.T.ar(b7,null)+"\nAllowed values: style one of "+B.d.aJ(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ajL)
case 6:l=c5
k=H.Ss(l==null?"":l)
if(k==null)throw A.Y("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.arC(s,D.dRu,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.dm(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.T.ar(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ajL)
case 10:l=c5
k=l==null?null:H.Ss(l)
if(k==null)throw A.Y(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.v(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.v(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.cL(a8,d),a5=J.aL(a2.a),a2=a2.$ti,a7=new A.jB(a5,a2.k("jB<1>")),a2=a2.c;a7.A();){a9=a2.a(a5.gO(a5))
b0=J.a0(a9)
b1=A.aJ(b0.h(a9,"index"))
i=b1==null?null:B.h.L(b1)
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
p=A.ct(new A.ba(h,s),new C.h1P(),s.k("L.E"),p)
p=H.a4U(A.oJ(p,3,A.a3(p).k("L.E")).aJ(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cv<1>")
b4=A.B(new A.cv(h,s),s.k("L.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a5b(s,b9),$async$ajL)
case 13:b5=c5
for(s=J.a0(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.arC(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ajL,v)},
hXy(d,e,f){return A.cf(null,B.v.j(0.65),!1,null,new C.hcD(e,f),d,null,!0,!0,x.g2)},
arC:function arC(d,e,f){this.a=d
this.b=e
this.c=f},
h1O:function h1O(){},
h1N:function h1N(d){this.a=d},
h1P:function h1P(){},
hcD:function hcD(d,e){this.a=d
this.b=e},
bHc(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bHc=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aR(b1,new C.fOQ())){u=null
w=1
break}t=B.d.cE(b1,new C.fOR())
s=$.U()
r=new A.p3(new A.oD())
q=A.vb(r,D.aVz)
p=A.M()
p.r=B.c.gp(0)
q.aE(D.aVz,p)
o=A.M()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.af
o.d=B.bI
o.e=B.dR
n=new C.fOW(t)
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
s=$.U()
p=A.a([],x.v)
a3=new A.aK(s.r,B.ak,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b_(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()}}q.af(a3,o)}else{p=A.a([],x.v)
a3=new A.aK(s.r,B.ak,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b_(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()}}q.af(a3,o)}w=4
return A.b(r.ng().w8(520,160),$async$bHc)
case 4:w=3
return A.b(b3.ht(B.ht),$async$bHc)
case 3:b0=b3
u=b0==null?null:J.eU(B.dN.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHc,v)},
h_f(d){return C.iDR(d)},
iDR(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$h_f=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bnl()
n=d.x!=null&&d.Az(null).length===0
if(d.x!=null)t=n?D.Bm:D.KX
else t=d.gW3()?D.KX:D.aQl
w=3
return A.b(C.bHc(d.ax),$async$h_f)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aqf(s)
r=A.a6X(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aQl}else{p.c=C.xI(q,!0)
p.b=n?D.Bm:D.KX}r.a67(A.hnB(new C.h_h(p,d,new C.h_i(),t,n,o),null,D.bM4,B.wf))
u=r.jE(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h_f,v)},
h6V(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$h6V=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h_f(d),$async$h6V)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aD(s,r,"_")
if(q.length>40)q=B.a.av(q,0,40)
u=Aj.HW(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h6V,v)},
fOQ:function fOQ(){},
fOR:function fOR(){},
fOW:function fOW(d){this.a=d},
h_i:function h_i(){},
h_h:function h_h(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h_g:function h_g(){},
hd6(d,e){var w=0,v=A.j(x.H)
var $async$hd6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.v.j(0.55),!0,null,new C.hda(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$hd6)
case 2:return A.h(null,v)}})
return A.i($async$hd6,v)},
bK_(d,e,f,g){return C.iMb(d,e,f,g)},
iMb(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bK_=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cM.aM(t)}catch(q){r=null}if(r==null||r.length===0){d.M(x.q).f.T(D.fJI)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.hd2(g,r,f),d,null,!0,!0,x.H),$async$bK_)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bK_,v)},
hdb(d,e){var w=0,v=A.j(x.H)
var $async$hdb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.hde(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$hdb)
case 2:return A.h(null,v)}})
return A.i($async$hdb,v)},
b2x:function b2x(d,e){this.c=d
this.a=e},
cc_:function cc_(){},
bg2:function bg2(d,e){this.b=d
this.a=e},
hda:function hda(d,e){this.a=d
this.b=e},
hd7:function hd7(d){this.a=d},
hd8:function hd8(d,e,f){this.a=d
this.b=e
this.c=f},
hd9:function hd9(d,e){this.a=d
this.b=e},
hd2:function hd2(d,e,f){this.a=d
this.b=e
this.c=f},
hd0:function hd0(d){this.a=d},
hd1:function hd1(d,e,f){this.a=d
this.b=e
this.c=f},
hde:function hde(d,e){this.a=d
this.b=e},
hdc:function hdc(d){this.a=d},
hdd:function hdd(d,e,f){this.a=d
this.b=e
this.c=f},
fTU(d,e){var w=0,v=A.j(x.y),u,t
var $async$fTU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a4E(d),$async$fTU)
case 3:t=g
J.mI(t,new C.fTV(e))
u=A.akt(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTU,v)},
fTV:function fTV(d){this.a=d},
arP:function arP(d,e,f){this.c=d
this.d=e
this.a=f},
aGQ:function aGQ(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dXG:function dXG(d,e){this.a=d
this.b=e},
dXr:function dXr(d,e){this.a=d
this.b=e},
dXu:function dXu(d,e,f){this.a=d
this.b=e
this.c=f},
dXt:function dXt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dXs:function dXs(d,e){this.a=d
this.b=e},
dXv:function dXv(d,e){this.a=d
this.b=e},
dXp:function dXp(){},
dXq:function dXq(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dXo:function dXo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dX9:function dX9(d){this.a=d},
dXa:function dXa(d,e,f){this.a=d
this.b=e
this.c=f},
dXb:function dXb(d,e){this.a=d
this.b=e},
dX8:function dX8(d){this.a=d},
dXg:function dXg(d,e){this.a=d
this.b=e},
dX7:function dX7(d){this.a=d},
dXh:function dXh(d,e,f){this.a=d
this.b=e
this.c=f},
dXi:function dXi(d,e,f){this.a=d
this.b=e
this.c=f},
dX6:function dX6(d,e){this.a=d
this.b=e},
dXj:function dXj(d,e,f){this.a=d
this.b=e
this.c=f},
dX5:function dX5(d,e){this.a=d
this.b=e},
dXk:function dXk(d,e){this.a=d
this.b=e},
dX4:function dX4(d){this.a=d},
dXl:function dXl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dX2:function dX2(){},
dWX:function dWX(d){this.a=d},
dWY:function dWY(d){this.a=d},
dX3:function dX3(d,e){this.a=d
this.b=e},
dXm:function dXm(d,e){this.a=d
this.b=e},
dX1:function dX1(d){this.a=d},
dXn:function dXn(d){this.a=d},
dX0:function dX0(){},
dXc:function dXc(d,e){this.a=d
this.b=e},
dX_:function dX_(d){this.a=d},
dXd:function dXd(d,e,f){this.a=d
this.b=e
this.c=f},
dWZ:function dWZ(d,e){this.a=d
this.b=e},
dWW:function dWW(d,e){this.a=d
this.b=e},
dXe:function dXe(d){this.a=d},
dXf:function dXf(d,e,f){this.a=d
this.b=e
this.c=f},
dXJ:function dXJ(){},
dXK:function dXK(d,e){this.a=d
this.b=e},
dXH:function dXH(d){this.a=d},
dXI:function dXI(d){this.a=d},
dXD:function dXD(d,e){this.a=d
this.b=e},
dXE:function dXE(d){this.a=d},
dXw:function dXw(d,e,f){this.a=d
this.b=e
this.c=f},
dXx:function dXx(d,e,f){this.a=d
this.b=e
this.c=f},
dXy:function dXy(d,e,f){this.a=d
this.b=e
this.c=f},
dXz:function dXz(d,e,f){this.a=d
this.b=e
this.c=f},
dXA:function dXA(d,e,f){this.a=d
this.b=e
this.c=f},
dXB:function dXB(d,e,f){this.a=d
this.b=e
this.c=f},
dXC:function dXC(d,e,f){this.a=d
this.b=e
this.c=f},
dXL:function dXL(){},
dXM:function dXM(){},
dXN:function dXN(){},
dXO:function dXO(d){this.a=d},
dXF:function dXF(d,e){this.a=d
this.b=e},
hSQ(d){return B.d.du(D.a6X,new C.fUF(d),new C.fUG())},
vg:function vg(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fUF:function fUF(d){this.a=d},
fUG:function fUG(){},
anP:function anP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aZc:function aZc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
UZ:function UZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjJ:function bjJ(){this.d=$
this.c=this.a=null},
dm4:function dm4(d,e){this.a=d
this.b=e},
dm2:function dm2(d,e){this.a=d
this.b=e},
dm3:function dm3(){},
dm5:function dm5(d,e){this.a=d
this.b=e},
hCb(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bf(J.k(u==null?"":u))
return new C.nR(t,w,v,u==null?new A.W(Date.now(),0,!1):u)},
Mp(d,e){return C.iCs(d,e)},
iCs(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Mp=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$Mp)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.T.aL(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.cL(p,x.f)
o=A.ct(o,new C.fXD(),o.$ti.k("L.E"),x.B)
n=A.a3(o).k("X<L.E>")
o=A.B(new A.X(o,new C.fXE(),n),n.k("L.E"))
B.d.aZ(o,new C.fXF())
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
return A.i($async$Mp,v)},
BV(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BV=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aB(),$async$BV)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.hbF(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.aA("String","ngmy_family_book_v1_"+s+"_"+e,B.T.ar(r,null)),$async$BV)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BV,v)},
aVj(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aVj=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Mp(d,e),$async$aVj)
case 2:u=h
t=J.cK(u)
s=t.bl(u,new C.hkx(f))
if(s===-1)t.cl(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BV(d,e,u),$async$aVj)
case 3:return A.h(null,v)}})
return A.i($async$aVj,v)},
bHG(d,e,f){var w=0,v=A.j(x.H),u
var $async$bHG=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Mp(d,e),$async$bHG)
case 2:u=h
J.mI(u,new C.fTM(f))
w=3
return A.b(C.BV(d,e,u),$async$bHG)
case 3:return A.h(null,v)}})
return A.i($async$bHG,v)},
bHX(d,e){return C.iCr(d,e)},
iCr(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bHX=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bHX)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Qc
w=1
break}p=B.T.aL(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.h.L(k)
if(k==null)k=0
if(D.EX.am(0,o.h(0,"foil")))j=A.cW(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.h.D(i==null?25:i,18,36)
h=B.d.q(D.a8J,o.h(0,"position"))?A.cW(o.h(0,"position")):"middle"
g=B.d.q(D.a82,o.h(0,"frame"))?A.cW(o.h(0,"frame")):"double"
f=B.d.q(D.a7Z,o.h(0,"texture"))?A.cW(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.df5,o.h(0,"header"))?A.cW(o.h(0,"header")):"classic"
o=new C.IY(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Qc
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Qc
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bHX,v)},
TC(d,e,f){return C.iLG(d,e,f)},
iLG(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$TC=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aB(),$async$TC)
case 7:r=h
w=8
return A.b(r.aA("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.T.ar(f.ak(),null)),$async$TC)
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
return A.i($async$TC,v)},
T2(d,e){return C.iCt(d,e)},
iCt(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$T2=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$T2)
case 7:r=g
q=r.nX("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Mp(d,e),$async$T2)
case 8:if(!j.cM(g)){n=B.a.i(d.toLowerCase())
m=J.lM(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aA("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$T2)
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
return A.i($async$T2,v)},
aj4(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aj4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.T2(d,e),$async$aj4)
case 3:s=g
r=J.a0(s)
if(r.gI(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gI(s):"main"
r.K(s,t)
w=5
return A.b(A.aB(),$async$aj4)
case 5:w=4
return A.b(g.aA("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aj4)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aj4,v)},
a5m(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a5m=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.T2(d,e),$async$a5m)
case 2:s=h
J.fO(s,f)
w=3
return A.b(A.aB(),$async$a5m)
case 3:u=h
w=4
return A.b(u.aA("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a5m)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.X(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a5m)
case 5:w=6
return A.b(u.X(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a5m)
case 6:return A.h(null,v)}})
return A.i($async$a5m,v)},
nR:function nR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fXD:function fXD(){},
fXE:function fXE(){},
fXF:function fXF(){},
hbF:function hbF(){},
hkx:function hkx(d){this.a=d},
fTM:function fTM(d){this.a=d},
IY:function IY(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bVm:function bVm(d){this.a=d},
iM_(d,e,f,g,h,i,j){return A.a6(d,!1).ca(A.e4(new C.hcg(j,i,f,e,h,g),!0,null,x.H))},
T_(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$T_=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.T2(h,g),$async$T_)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ab(k)>=6){d.M(x.q).f.T(D.aXZ)
u=!1
w=1
break}w=4
return A.b(C.hXy(d,f,e),$async$T_)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aj4(h,g),$async$T_)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nR(""+(q+n),l,B.a.i(m.b),new A.W(Date.now(),0,!1)))}w=6
return A.b(C.BV(h,r,p),$async$T_)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.TC(h,r,new C.IY("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$T_)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$T_,v)},
hcg:function hcg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a0O:function a0O(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aDL:function aDL(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dmK:function dmK(d){this.a=d},
dmJ:function dmJ(d,e){this.a=d
this.b=e},
dmy:function dmy(d,e){this.a=d
this.b=e},
dmv:function dmv(d,e){this.a=d
this.b=e},
dm6:function dm6(d){this.a=d},
dm7:function dm7(d,e){this.a=d
this.b=e},
dmz:function dmz(d){this.a=d},
dmf:function dmf(d){this.a=d},
dmd:function dmd(d){this.a=d},
dme:function dme(d){this.a=d},
dmg:function dmg(d){this.a=d},
dmw:function dmw(d){this.a=d},
dmx:function dmx(){},
dmb:function dmb(d){this.a=d},
dmc:function dmc(d,e){this.a=d
this.b=e},
dmh:function dmh(d){this.a=d},
dmi:function dmi(d,e){this.a=d
this.b=e},
dmI:function dmI(d){this.a=d},
dmH:function dmH(d,e){this.a=d
this.b=e},
dmG:function dmG(d){this.a=d},
dms:function dms(d){this.a=d},
dmr:function dmr(d){this.a=d},
dmt:function dmt(d){this.a=d},
dm8:function dm8(d,e){this.a=d
this.b=e},
dmu:function dmu(d,e){this.a=d
this.b=e},
dml:function dml(d){this.a=d},
dmm:function dmm(d){this.a=d},
dmk:function dmk(){},
dmn:function dmn(d){this.a=d},
dmo:function dmo(d){this.a=d},
dmp:function dmp(d,e){this.a=d
this.b=e},
dmq:function dmq(d,e,f){this.a=d
this.b=e
this.c=f},
dmj:function dmj(d,e){this.a=d
this.b=e},
dmB:function dmB(d){this.a=d},
dmA:function dmA(){},
dmC:function dmC(d){this.a=d},
dmD:function dmD(d){this.a=d},
dmE:function dmE(d){this.a=d},
dmF:function dmF(d,e){this.a=d
this.b=e},
dm9:function dm9(d){this.a=d},
dma:function dma(d){this.a=d},
a0S:function a0S(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bk7:function bk7(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dow:function dow(d){this.a=d},
dox:function dox(d){this.a=d},
dov:function dov(d){this.a=d},
doy:function doy(d){this.a=d},
dou:function dou(d){this.a=d},
doz:function doz(d){this.a=d},
dot:function dot(d){this.a=d},
doA:function doA(d,e){this.a=d
this.b=e},
dos:function dos(d,e){this.a=d
this.b=e},
doB:function doB(d,e){this.a=d
this.b=e},
a0Q:function a0Q(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ahu:function ahu(d,e,f){this.a=d
this.b=e
this.c=f},
aDO:function aDO(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dmZ:function dmZ(d,e){this.a=d
this.b=e},
dmY:function dmY(d,e){this.a=d
this.b=e},
dn2:function dn2(d){this.a=d},
dn1:function dn1(d,e){this.a=d
this.b=e},
dn_:function dn_(d){this.a=d},
dn0:function dn0(d){this.a=d},
dn3:function dn3(d){this.a=d},
dn4:function dn4(d){this.a=d},
dmX:function dmX(d,e){this.a=d
this.b=e},
dmW:function dmW(d,e){this.a=d
this.b=e},
Lo:function Lo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0_:function a0_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cUb:function cUb(d){this.a=d},
cUc:function cUc(){},
cUd:function cUd(d){this.a=d},
bhh:function bhh(d,e,f){this.b=d
this.c=e
this.a=f},
bh8:function bh8(d,e){this.b=d
this.a=e},
vh:function vh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0l:function a0l(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhf:function bhf(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
dde:function dde(d,e,f){this.a=d
this.b=e
this.c=f},
ddd:function ddd(d,e){this.a=d
this.b=e},
ddD:function ddD(d){this.a=d},
ddq:function ddq(){},
ddE:function ddE(d){this.a=d},
ddp:function ddp(){},
ddF:function ddF(d,e){this.a=d
this.b=e},
ddo:function ddo(d,e){this.a=d
this.b=e},
ddG:function ddG(d,e){this.a=d
this.b=e},
ddn:function ddn(d,e){this.a=d
this.b=e},
ddH:function ddH(d){this.a=d},
ddm:function ddm(){},
ddI:function ddI(d,e){this.a=d
this.b=e},
ddl:function ddl(d,e){this.a=d
this.b=e},
ddJ:function ddJ(d){this.a=d},
ddy:function ddy(d,e){this.a=d
this.b=e},
ddK:function ddK(d){this.a=d},
ddL:function ddL(d){this.a=d},
ddN:function ddN(d){this.a=d},
ddO:function ddO(d){this.a=d},
ddx:function ddx(d,e){this.a=d
this.b=e},
ddP:function ddP(d,e){this.a=d
this.b=e},
aL2:function aL2(d){this.a=d},
bmH:function bmH(d){this.a=d},
bfp:function bfp(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
anQ:function anQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a3b:function a3b(d,e){this.a=d
this.b=e},
anR:function anR(d,e,f,g,h,i){var _=this
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
_.bz$=h
_.ab$=i
_.c=_.a=null},
bVw:function bVw(d){this.a=d},
bVq:function bVq(d){this.a=d},
bVp:function bVp(d,e){this.a=d
this.b=e},
bVz:function bVz(d){this.a=d},
bVr:function bVr(d){this.a=d},
bVs:function bVs(d){this.a=d},
bVv:function bVv(d){this.a=d},
bVu:function bVu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVx:function bVx(d,e){this.a=d
this.b=e},
bVy:function bVy(){},
bVt:function bVt(d){this.a=d},
bVn:function bVn(d,e){this.a=d
this.b=e},
bVo:function bVo(d){this.a=d},
bsm:function bsm(d,e){this.b=d
this.a=e},
aDM:function aDM(){},
iW(d,e){var w
$.U()
w=A.M()
w.b=B.af
w.c=e
w.r=d.gp(0)
w.d=B.bI
w.e=B.dR
return w},
bHe(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bt(j.save())
j.translate(e.a,e.b)
d.o_(0,a0?-f:f,f)
w=A.c1(B.hv,8,36)
v=B.v.j(0.3)
u=$.U()
t=A.M()
t.r=v.gp(0)
d.c4(w,t)
w=a1===D.Z3
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.v,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eJI,new A.m(-4+v,-2),C.iW(q,5))
d.ah(D.eHi,new A.m(4-v,-2),C.iW(q,5))}else{t=A.c1(B.KP,14,40)
p=A.M()
p.r=v.gp(0)
d.c4(t,p)}v=u.r
u=x.v
o=new A.aK(v,B.ak,k,k,A.a([],u))
t=-64-r
o.E(new A.b_(-11,t))
o.E(new A.co(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.co(15,-40,11,t))
o.E(new A.bA())
t=A.M()
t.r=w.gp(0)
d.af(o,t)
u=new A.aK(v,B.ak,k,k,A.a([],u))
u.E(new A.b_(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bA())
v=A.M()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b5p){n=-52+w*14
d.ah(new A.m(10,n-22),new A.m(10,n+44),C.iW(F.H2,3.4))
d.ah(D.eJZ,new A.m(9,n),C.iW(q,4))
d.ah(D.eHJ,new A.m(10,n),C.iW(q,4))}else if(a1===D.b5q){d.ah(D.eIP,new A.m(-8,-26-Math.max(0,w)*6),C.iW(q,4))
d.ah(D.eFL,new A.m(8,-26-Math.max(0,-w)*6),C.iW(q,4))}else{w=s*3
v=-38-r
d.ah(D.eIT,new A.m(-12-w,v),C.iW(q,4))
d.ah(D.aPh,new A.m(12+w,v),C.iW(q,4))}w=A.M()
w.r=q.gp(0)
d.aE(D.fwr,w)
m=new A.m(0,-77-r)
w=A.c1(m,22,19)
v=A.M()
v.r=q.gp(0)
d.c4(w,v)
w=h.y
if(w!=null){v=A.c1(m.a6(0,K.we),15,24)
u=A.M()
u.r=w.gp(0)
d.c4(v,u)
u=m.a6(0,D.eFF)
v=A.M()
v.r=w.gp(0)
d.P(u,4,v)}else{w=A.c1(m.a6(0,B.rS),23,20)
v=h.d
u=A.M()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a6(0,D.eJX),m.a6(0,D.eIN),C.iW(v,2.2))
d.ah(m.a6(0,D.eHI),m.a6(0,D.eFC),C.iW(v,2.2))}if(w===4){w=m.a6(0,D.eK0)
u=A.M()
u.r=v.gp(0)
d.P(w,6,u)
u=m.a6(0,D.eHK)
w=A.M()
w.r=v.gp(0)
d.P(u,6,w)}}w=m.a6(0,D.eIC)
v=A.M()
v.r=B.iv.gp(0)
d.P(w,0.9,v)
v=m.a6(0,D.eIr)
w=A.M()
w.r=B.iv.gp(0)
d.P(v,0.9,w)
if(i){l=m.a6(0,K.aaZ)
w=A.c1(l,21,22)
v=A.M()
v.r=D.lY.gp(0)
d.c4(w,v)
v=A.c1(l.a6(0,K.aPe),5,12)
w=A.M()
w.r=D.bkR.gp(0)
d.c4(v,w)
d.ah(l.a6(0,D.eJT),l.a6(0,K.aPC),C.iW(B.d0,1.4))
d.ah(D.aPh,new A.m(15,-88-r),C.iW(q,3.6))}j.restore()},
hRp(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bt(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.c1(B.dQ,18,96)
u=B.v.j(0.28)
$.U()
t=A.M()
t.r=u.gp(0)
d.c4(v,t)
t=A.c1(B.dQ,11,70)
v=B.v.j(0.2)
u=A.M()
u.r=v.gp(0)
d.c4(t,u)
d.lN(D.aVD,A.M())
C.iqg(d,g,h,i,j)
s=(k==null?D.ab3:k).a-w>=0?1:-1
w=A.M()
w.a=B.Nd
w.san(A.jU(new A.m(s*70,-60),new A.m(-s*70,-60),A.a([D.al8.j(0.5),D.al8.j(0.12),D.bss.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.w,null))
d.aE(D.aVD,w)
r.restore()
r.restore()},
iqg(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.v,0.28)
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
s=A.bx(D.fws,B.uq)
p=$.U()
o=A.M()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bx(D.fwn,B.hV)
s=A.ap(v,B.v,0.18)
s.toString
n=A.M()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bx(D.fwB,B.hV)
o=A.ap(v,B.v,0.1)
o.toString
s=A.M()
s.r=o.gp(0)
a1.aq(n,s)
s=A.M()
s.r=d.gp(0)
a1.c4(D.fwu,s)
s=A.M()
s.r=d.gp(0)
a1.c4(D.fvb,s)
s=a1.c
J.bt(s.save())
s.translate(a3.w,0)
J.bt(s.save())
a1.o_(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aK(p.r,B.ak,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.b_(k,-58))
l.E(new A.co(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.co(m+3,-62,m-2,-58))
l.E(new A.co(0,-70,k,-58))
l.E(new A.bA())
k=A.M()
k.r=v.gp(0)
a1.af(l,k)
J.bt(s.save())
a1.nd(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dmP[j]
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.af
i.c=5
i.r=k.gp(0)
i.d=B.bI
i.e=B.dR
a1.ah(new A.m(-34+u,-64),new A.m(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.n.F(B.n.ao(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.U()
f=new A.ar(B.V,B.R,B.X,B.Y,B.W)
f.r=i.gp(0)
a1.P(new A.m(g,h),3.6,f)
f=new A.ar(B.V,B.R,B.X,B.Y,B.W)
f.r=u.gp(0)
a1.P(new A.m(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.af
i.c=1.6
i.r=k.gp(0)
i.d=B.bI
i.e=B.dR
a1.ah(new A.m(g,-64),new A.m(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.af
i.c=1.6
i.r=k.gp(0)
i.d=B.bI
i.e=B.dR
a1.ah(new A.m(-30,h),new A.m(30,h),i)}break
default:a1.ah(D.eJl,D.eGq,C.iW(a2.c.j(0.9),3))}a1.ah(D.eJU,D.eIV,C.iW(B.v.j(0.18),1.6))
a1.ah(D.eFK,K.aPj,C.iW(B.v.j(0.18),1.6))
u=B.v.j(0.12)
k=$.U()
i=A.M()
i.r=u.gp(0)
a1.aE(D.fv7,i)
s.restore()
i=A.M()
i.r=a0.gp(0)
a1.aE(D.fvl,i)
n=new A.aK(k.r,B.ak,e,e,A.a([],n))
n.E(new A.b_(-9,-66))
n.E(new A.co(0,-57,9,-66))
n.E(new A.co(0,-60,-9,-66))
k=A.M()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fvw,0.1,2.941592653589793,!1,C.iW(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.ab9
n=25*q
k=23*q
i=9*q
C.hMT(a1,new A.m(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.Fp:o
C.hMT(a1,new A.m(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eHa,D.eH6,C.iW(D.am7,4))
a1.ah(D.eH8,D.eH4,C.iW(D.Ht.j(0.7),1.4))
u=A.M()
u.r=B.d0.gp(0)
a1.P(D.eH7,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bt(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jB(0,a3.f)
a1.bW(0,r)
C.iqc(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hMT(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aI(0,e),r=s.gcD(),q=r===0?B.hv:s.eB(0,r),p=B.h.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.m(o,w)
if(o*i<0)v=new A.m(-o,-w)
u=e.a6(0,q.aK(0,n)).a6(0,v.aK(0,m))
t=e.a6(0,q.aK(0,p))
d.ah(e,u,C.iW(j,l))
o=A.ap(j,B.v,0.2)
o.toString
d.ah(e,u,C.iW(o,l*0.35))
d.ah(u,t,C.iW(k,l*0.78))
o=A.ap(k,B.v,0.22)
o.toString
d.ah(u,t,C.iW(o,l*0.22))
$.U()
o=A.M()
o.r=j.gp(0)
d.P(u,l*0.55,o)
o=A.c1(t,l*1.15,l)
w=A.M()
w.r=k.gp(0)
d.c4(o,w)
w=-l
w=t.a6(0,new A.m(i*w*0.45,w*0.1))
o=A.M()
o.r=k.gp(0)
d.P(w,l*0.28,o)},
iqc(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.c1(B.wd,40,38)
$.U()
v=A.M()
v.r=c0.gp(0)
c2.c4(w,v)}if(c1===4){$.U()
w=A.M()
w.r=c0.gp(0)
c2.P(D.eJ2,9.5,w)
w=A.M()
w.r=c0.gp(0)
c2.P(D.eG0,9.5,w)}w=A.c1(D.eKh,10,6)
v=$.U()
u=A.M()
u.r=c8.gp(0)
c2.c4(w,u)
u=A.c1(D.eIz,10,6)
w=A.M()
w.r=c8.gp(0)
c2.c4(u,w)
v=v.r
w=x.v
t=new A.aK(v,B.ak,b9,b9,A.a([],w))
t.E(new A.b_(0,-20))
t.E(new A.i7(13,-20,17,-9,16,2))
t.E(new A.i7(15,13,8,20,0,20))
t.E(new A.i7(-8,20,-15,13,-16,2))
t.E(new A.i7(-17,-9,-13,-20,0,-20))
t.E(new A.bA())
u=A.M()
u.san(A.wF(D.eJK,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.w,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iW(c8.j(0.5),0.8)
c2.cQ(D.fwD,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.fve,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eJ_,K.aPN,s)
c2.ah(D.eFX,D.eFO,s)
c2.cQ(D.fvv,2.2,1.4,!1,s)
c2.cQ(D.fvc,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.r=c0.gp(0)
c2.P(new A.m(p*14.5,-3+o*17.5),4.3,n)}p=A.M()
p.r=c0.gp(0)
c2.cQ(D.fvK,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aK(v,B.ak,b9,b9,A.a([],w))
p.E(new A.b_(-15,-11))
p.E(new A.co(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.co(0,-12,-13,-6))
p.E(new A.bA())
o=A.M()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.eIR,D.eFP,C.iW(G.nR,1.4))
o=A.M()
o.r=c0.gp(0)
c2.P(D.eJ5,3,o)
o=A.M()
o.r=c0.gp(0)
c2.P(D.eG1,3,o)
o=new A.aK(v,B.ak,b9,b9,A.a([],w))
o.E(new A.b_(-13,6))
o.E(new A.co(-12,22,0,26))
o.E(new A.co(12,22,13,6))
o.E(new A.co(8,13,0,12))
o.E(new A.co(-8,13,-13,6))
o.E(new A.bA())
p=A.M()
p.r=B.hZ.gp(0)
c2.af(o,p)
p=new A.aK(v,B.ak,b9,b9,A.a([],w))
p.E(new A.b_(-7,8))
p.E(new A.co(0,6,7,8))
p.E(new A.co(0,10.5,-7,8))
o=A.M()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aK(v,B.ak,b9,b9,A.a([],w))
p.E(new A.b_(-17,-4))
p.E(new A.co(-20,-27,0,-29))
p.E(new A.co(20,-27,17,-4))
p.E(new A.co(0,-14,-17,-4))
p.E(new A.bA())
o=A.M()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.v,0.3)
o.toString
c2.cQ(D.fvR,3.4,2.5,!1,C.iW(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fvD,3.6,2.2,!1,C.iW(o,1.2))
o=new A.aK(v,B.ak,b9,b9,A.a([],w))
o.E(new A.b_(11,-22))
o.E(new A.co(27,-34,25,-19))
o.E(new A.co(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.M()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aK(v,B.ak,b9,b9,A.a([],w))
n.E(new A.b_(11,-22))
n.E(new A.co(24,-12,27,-26))
n.E(new A.co(18,-22,11,-22))
o=A.ap(m,B.v,0.2)
o.toString
p=A.M()
p.r=o.gp(0)
c2.af(n,p)
p=A.M()
p.r=c3.c.gp(0)
c2.P(D.eFQ,3,p)
break
case 3:p=A.M()
p.r=c0.gp(0)
c2.cQ(D.fvO,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.af
o.c=0.9
o.r=p.gp(0)
o.d=B.bI
o.e=B.dR
c2.ah(new A.m(r*3.6,-19+Math.abs(r)*0.8),new A.m(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aFQ[l]
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.af
o.c=4.5
o.r=c0.gp(0)
o.d=B.bI
o.e=B.dR
c2.ah(new A.m(k,0),new A.m(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.r=p.gp(0)
c2.P(new A.m(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.M()
p.r=c0.gp(0)
c2.cQ(D.fvN,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.aaZ,K.aaY,C.iW(p,1))
break
default:p=A.M()
p.r=c0.gp(0)
c2.cQ(D.fvf,3.267256359733385,2.8902652413026098,!0,p)}i=B.h.D(c4.b,0,1)*0.4+0.1
p=A.c1(D.eK3,5,8)
o=D.ail.j(i)
n=A.M()
n.r=o.gp(0)
c2.c4(p,n)
n=A.c1(D.eIK,5,8)
p=D.ail.j(i)
o=A.M()
o.r=p.gp(0)
c2.c4(n,o)
h=c4.e*2.4
o=new A.aK(v,B.ak,b9,b9,A.a([],w))
o.E(new A.b_(h-0.6,-2))
o.E(new A.co(h-3.4,6,h-2.6,7.4))
o.E(new A.co(h,8.8,h+2.6,7.4))
c2.af(o,C.iW(c8.j(0.75),1.1))
o=A.M()
o.r=c8.gp(0)
c2.P(new A.m(h-1.5,7.2),0.7,o)
o=A.M()
o.r=c8.gp(0)
c2.P(new A.m(h+1.5,7.2),0.7,o)
g=B.h.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.hu[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.c1(new A.m(a5,-3),a3,7)
a6=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a6.r=B.c.j(0.96).gp(0)
c2.c4(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bt(d.save())
a6=A.a([],w)
a4=new A.aK(v,B.ak,b9,b9,a6)
a6.push(new A.jP(A.c1(new A.m(a5,-3),a3,7)))
a4.ac()
a3=a4.e
if(a3==null)a3=a4.e=new A.EH(a4.gln().a.snapshot())
d.clipPath(a3.a,$.n0(),!0)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=D.boN.gp(0)
c2.P(new A.m(a7,a8),2.1,a3)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=B.v.gp(0)
c2.P(new A.m(a7,a8),1.05,a3)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=B.c.gp(0)
c2.P(new A.m(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a0g:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a9.b=B.af
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bI
a9.e=B.dR
a3=p?0.8:0
c2.cQ(A.c1(new A.m(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dW
else{b1=A.ap(c0,B.v,0.2)
b1.toString}b2=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b2.b=B.af
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bI
b2.e=B.dR
c2.ah(new A.m(a5-a4,b0-a6+0.4),new A.m(a5+a4,b0-0.6-a3),b2)}b3=B.h.D(c4.a,0,1)
if(o)b4=D.bzd
else{u=A.ap(c8,D.bsu,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.h.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aK(v,B.ak,b9,b9,A.a([],w))
w=-b6
b8.E(new A.b_(w,11.5))
b8.E(new A.co(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.co(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bA())
v=A.M()
v.r=D.brR.gp(0)
c2.af(b8,v)
J.bt(d.save())
c2.nd(0,b8)
v=B.c.j(0.95)
u=A.M()
u.r=v.gp(0)
c2.aE(new A.a5(w,11,w+b6*2,13.2),u)
u=A.c1(new A.m(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.M()
w.r=D.bzi.gp(0)
c2.c4(u,w)
d.restore()
c2.af(b8,C.iW(b4,1.1))}else{u=new A.aK(v,B.ak,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.b_(-5.2,p))
u.E(new A.co(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iW(b4,1.5))
if(b5>0.6){w=new A.aK(v,B.ak,b9,b9,A.a([],w))
w.E(new A.b_(-4.6,11.8))
w.E(new A.co(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.co(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.M()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fvu,-1.2,2.2,!1,C.iW(c8.j(0.5),0.8))
c2.cQ(D.fvh,2.141592653589793,2.2,!1,C.iW(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.M()
w.r=c1.gp(0)
c2.P(D.eIs,1.7,w)
w=A.M()
w.r=c1.gp(0)
c2.P(D.eIp,1.7,w)}},
iw7(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.U(),f=new A.p3(new A.oD()),e=A.vb(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.M()
a2.san(A.jU(B.J,new A.m(0,a0*0.46),D.djb,D.d9p,B.w,h))
e.aE(new A.a5(0,0,0+d,0+a0),a2)
a2=e.c
J.bt(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bW(0,a1)
w=new A.e7()
w.cV(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.P(new A.m(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bt(a2.save())
a2.translate(200,120)
e.jB(0,-0.5)
d=A.M()
a0=x.O
d.san(A.wF(B.J,230,A.a([D.bnp,B.L],a0),h,B.w,h,h,0))
e.c4(D.fvZ,d)
a2.restore()
d=A.M()
d.san(A.wF(D.ab6,58,A.a([D.bqR,B.L],a0),h,B.w,h,h,0))
e.P(D.ab6,58,d)
d=A.M()
d.r=D.bm7.gp(0)
e.P(D.ab6,24,d)
d=A.M()
d.r=D.a0H.gp(0)
e.P(D.eGK,5,d)
d=A.M()
d.r=D.a0H.gp(0)
e.P(D.eGO,3.4,d)
d=A.M()
d.r=D.a0H.gp(0)
e.P(D.eGN,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aK(g.r,B.ak,h,h,u)
u.push(new A.b_(-60,420))
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
g=[D.bkF,D.bmG,D.bsO][s]
u=$.U()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cDd[l]
k=384+B.n.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.b=B.af
u.c=2.4
u.r=D.a12.gp(0)
u.d=B.bI
u.e=B.dR
e.ah(new A.m(o,k),new A.m(g,d),u)
g=A.c1(new A.m(g,k-27),11,46)
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=D.a12.gp(0)
e.c4(g,u)
d=A.c1(new A.m(o-12,d),8,24)
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=D.a12.gp(0)
e.c4(d,u)}for(v=0;v<9;++v){g=B.n.F(v,3)
d=B.n.F(v,4)
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=D.bma.j(0.8).gp(0)
e.P(new A.m(20+v*52+g*7,400+d*5),1.2,u)}g=A.M()
g.san(A.jU(D.eFj,D.eFm,D.dbJ,B.xT,B.w,h))
e.aE(new A.a5(-200,412,650,1300),g)
j=new A.e7()
j.cV(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.c1(new A.m(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.he()?B.c:B.v
d=new A.ar(B.V,B.R,B.X,B.Y,B.W)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c4(u,d)}J.bt(a2.save())
a2.translate(225,590)
e.o_(0,1,0.34)
g=A.M()
g.san(A.wF(B.J,250,A.a([D.btO,D.bn0,D.bvJ],a0),A.a([0,0.8,1],x.n),B.w,h,h,0))
e.P(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.akP,D.blF,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.U()
a0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a0.b=B.af
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bI
a0.e=B.dR
e.ah(new A.m(o+i*2,k),new A.m(o+i*5,g+Math.abs(i)*3),a0)}}C.ioi(e)
for(l=0;l<3;++l)C.irQ(e,D.aDA[l])
C.irE(e,D.eGE)
for(o=118;o<190;o+=11){g=B.n.F(o,3)
d=B.n.F(o,4)
$.U()
a0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a0.b=B.af
a0.c=2.4
a0.r=D.a0Z.gp(0)
a0.d=B.bI
a0.e=B.dR
e.ah(new A.m(o,452+g),new A.m(o+1,436+d),a0)}e.ah(D.eFM,D.eG4,C.iW(D.bmo,1.6))
a2.restore()
return f.ng()},
ioi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.U().r,g=x.v,f=new A.aK(h,B.ak,i,i,A.a([],g))
f.E(new A.b_(358,462))
f.E(new A.i7(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.i7(416,382,432,422,428,462))
f.E(new A.bA())
w=A.M()
w.san(A.jU(new A.m(354,0),new A.m(430,0),D.dJM,B.md,B.w,i))
d.af(f,w)
v=new A.e7()
v.cV(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.v.j(0.18)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.b=B.af
p.c=1.1
p.r=q.gp(0)
p.d=B.bI
p.e=B.dR
d.ah(new A.m(t,s),new A.m(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.doq[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aK(h,B.ak,i,i,l)
l.push(new A.b_(r,336))
k.ac()
r=new A.co(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.aj(p)
k.ac()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.b=B.af
r.c=8
r.r=D.aj7.gp(0)
r.d=B.bI
r.e=B.dR
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=A.ap(D.bmg,D.bsM,v.ai()).j(0.92).gp(0)
d.P(new A.m(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.b=B.af
r.c=1.2
r.r=D.a0Z.gp(0)
r.d=B.bI
r.e=B.dR
d.ah(new A.m(w,q+8),new A.m(w,q+22),r)
q=A.c1(new A.m(w,q+28),13,7)
w=new A.ar(B.V,B.R,B.X,B.Y,B.W)
w.r=D.bua.gp(0)
d.c4(q,w)}},
irQ(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.c1(new A.m(a5,a6+2),a9,a7*2.8),b1=B.v.j(0.3),b2=$.U(),b3=A.M()
b3.r=b1.gp(0)
b4.c4(b0,b3)
b2=b2.r
b3=x.v
w=new A.aK(b2,B.ak,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.b_(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.co(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bA())
u=A.M()
u.san(A.jU(new A.m(b0,0),new A.m(v,0),D.dox,B.md,B.w,a4))
b4.af(w,u)
t=new A.e7()
t.cV(B.n.S(a5*7))
v=b4.c
J.bt(v.save())
b4.nd(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.v.j(0.14)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.b=B.af
n.c=1
n.r=o.gp(0)
n.d=B.bI
n.e=B.dR
b4.ah(new A.m(r,q),new A.m(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.akL.j(0.75)
n=A.M()
n.r=o.gp(0)
b4.aE(new A.a5(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.h.ba(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aK(b2,B.ak,a4,a4,j)
j.push(new A.b_(k,o))
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
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=D.lY.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aK(b2,B.ak,a4,a4,u)
b2=a6-8
f.E(new A.b_(b0,b2))
for(p/=6,l=0;l<=B.h.ba(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.aj(n)
f.ac()}b4.af(f,C.iW(D.akL.j(0.7),1.6))
v.restore()
b0=$.U().r
b2=new A.aK(b0,B.ak,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.b_(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.co(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bA())
m=A.M()
m.r=D.akX.gp(0)
b4.af(b2,m)
m=A.M()
m.r=D.akX.gp(0)
b4.P(new A.m(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aK(b0,B.ak,a4,a4,A.a([],b3))
e.E(new A.b_(o,j))
n=b1-m*0.55
e.E(new A.co(a5-a9,n,a5,u))
e.E(new A.co(a5+a9,n,p,j))
e.E(new A.co(a5,b1+a7*0.34,o,j))
e.E(new A.bA())
b1=A.M()
n=a7*1.4
b1.san(A.jU(new A.m(a5-n,0),new A.m(a5+n,0),D.dso,B.md,B.w,a4))
b4.af(e,b1)
J.bt(v.save())
b4.nd(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.he()?B.v:D.blO).j(0.16)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.af
i.c=0.9
i.r=n.gp(0)
i.d=B.bI
i.e=B.dR
b4.ah(new A.m(a5+(p-0.5)*3,u),new A.m(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aK(b0,B.ak,a4,a4,b1)
n=a0+2
b1.push(new A.b_(a5-a1,n))
p.ac()
n=new A.co(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.aj(b1)
p.ac()
b1=B.v.j(0.22)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.b=B.af
n.c=1.2
n.r=b1.gp(0)
n.d=B.bI
n.e=B.dR
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ar(B.V,B.R,B.X,B.Y,B.W)
v.b=B.af
v.c=1.1
v.r=D.btf.gp(0)
v.d=B.bI
v.e=B.dR
b4.ah(new A.m(a2,a3),new A.m(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aK(b0,B.ak,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.b_(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bA())
b0=A.M()
b0.r=D.bph.gp(0)
b4.af(a9,b0)},
irE(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aFN[s]
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.b=B.af
q.c=3
q.r=D.a0Z.gp(0)
q.d=B.bI
q.e=B.dR
d.ah(new A.m(r,u),new A.m(r,t),q)}u=A.c1(e.a6(0,K.aPd),24,36)
t=$.U()
r=A.M()
r.r=D.byp.gp(0)
d.c4(u,r)
t=new A.aK(t.r,B.ak,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.b_(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.co(w,v-24,r,u))
t.E(new A.bA())
u=A.M()
u.r=D.ajQ.gp(0)
d.af(t,u)},
iqY(d){switch(B.n.F(d,8)){case 0:return D.b4C
case 1:return D.b4A
case 2:return D.b4z
case 3:return D.b4y
case 4:return D.b4B
case 5:return D.b4D
case 6:return D.hYn
default:return D.hYm}},
TA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bsn()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.ab9:j
w.as=k==null?D.Fp:k
C.hRp(d,e,p,C.iqY(m),w,s,m,l)},
hSW(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bXa:function bXa(){var _=this
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
tB:function tB(d,e,f,g,h,i,j,k,l,m){var _=this
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
bsn:function bsn(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
ao8:function ao8(){this.b=this.a=null},
aZh:function aZh(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bX2:function bX2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX3:function bX3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX4:function bX4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX5:function bX5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX6:function bX6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX7:function bX7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX8:function bX8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX9:function bX9(){},
bX1:function bX1(d){this.a=d},
ahD:function ahD(d,e){this.a=d
this.b=e},
afx:function afx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NM(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bVM(s)
s.bFB(d)
return s},
Hz(d,e,f,g,h,i,j){var w,v=A.T(g).k("X<1>")
v=A.d9(new A.X(g,new C.fHq(f),v),v.k("L.E"))
w=A.B(v,A.a3(v).k("cl.E"))
B.d.e_(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cD(w,0,A.dw(3,"count",x.S),A.T(w).c))
B.d.e_(v,d)
return new C.lT(e,v,B.d.c8(v,f),h,i,"tree",j)},
iNK(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.hkn(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jw(c4,c0)
t=A.B(c4,A.a3(c4).k("cl.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jw(c4,c0)
r=A.B(c4,A.a3(c4).k("cl.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jw(c4,c0)
q=A.B(c4,A.a3(c4).k("cl.E"))
for(c4=w.length,v=A.T(t).k("X<1>"),s=v.k("L.E"),p=A.T(w).k("X<1>"),o=p.k("L.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.d()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.xn)g="father"
else g=h===D.p4?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.X(t,new C.hkp(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Hz(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.X(w,new C.hkq(i,m),p),o)
B.d.e_(d,c6)
c2.$2(b4,new C.lT("True or false: "+h+" is the "+g+" of "+l+".",A5.TU,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lT("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",A5.TU,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Ha(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.B(new A.X(t,new C.hkr(l,a0,c5),v),s)
e=a1.c
if(e===D.xn)e="son"
else e=e===D.p4?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Hz(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eC([h+1,h+2,Math.max(0,h-1)],n)
a5.X(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.m7(a5,a5.r,f.k("m7<1>")),e.c=a5.e,f=f.c;e.A();){a3=e.d
a4.push(A.v(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Hz(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("ib<1>"),a3=new A.ib(a0,1,b3,a2),a3.mC(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gI(0),a2.k("bQ<aj.E>")),a2=a2.k("aj.E");a3.A();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Hz(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.atV(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.X(t,new C.hks(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.Hz(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.d()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.d()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.B(new A.X(t,new C.hkt(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.xn
if(e)a2=b7
else a2=f===D.p4?b8:b9
if(e)f=b7
else f=f===D.p4?b8:b9
c2.$2("grand",C.Hz(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aQ4(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.B(new A.X(t,new C.hku(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Hz(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cWk)
h=l+" was born in "+k
c2.$2("place",C.Hz(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.dcR)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Hz(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Hz(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cH(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jc(b1,b3,b3)
c2.$2("year",C.Hz(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bHT(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.NM(d),l=new A.e7()
l.cV(f)
w=C.iNK(m,l,g)
for(v=new A.ds(w,w.r,w.e);v.A();)J.hAe(v.d,l)
v=A.a3(w).k("cv<1>")
u=A.B(new A.cv(w,v),v.k("L.E"))
B.d.e_(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aR(u,new C.fVi(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.I)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ab(p)>n.a){p=w.h(0,q)
p.toString
p=s.K(0,J.t(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.t(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.B(D.aCC,x.df)
B.d.e_(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hRw(o,l))}}else if(!g&&v>3){o=C.hRw(D.aCC[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hRw(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.e_(w,e)
return new C.lT(d.a,w,B.d.c8(w,v),d.d,d.e,d.f,d.r)},
hX7(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.NM(a2),a1=new A.e7()
a1.cV(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Ha(q).length>=2)u.push(q)}B.d.e_(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Ha(n)
l=A.T(m)
k=new A.ib(m,0,5,l.k("ib<1>"))
k.mC(m,0,5,l.c)
j=k.d9(0)
if(new A.O(j,new C.haz(),A.T(j).k("O<1,F>")).fJ(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aV3(a0,j[i]))
w.push(new C.awl("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.bU(e.c0(0,a0.ap1(q),new C.haA()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cv<1>")
d=A.B(new A.cv(e,t),t.k("L.E"))
B.d.fl(d)
v=A.a([],v)
for(u=A.cD(d,0,A.dw(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bQ(u,u.gI(0),t.k("bQ<aj.E>")),t=t.k("aj.E");u.A();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cK(s)
m.e_(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aV3(a0,v[r]))
w.push(new C.awl("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aTq(d){return B.d.aqu(D.aF7,new C.fR7(d))},
iCX(d){return A.nU(new A.X(D.aF7,new C.fYz(d),x.av))},
bWA(d){return C.i62(d)},
i62(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bWA=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bWA)
case 7:r=f
q=B.a.i(d)
q=A.ew(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bWA,v)},
Ce(d,e){return C.i6_(d,e)},
i6_(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$Ce=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$Ce)
case 7:r=g
p=B.a.i(d)
o=A.ew(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aA("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$Ce)
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
return A.i($async$Ce,v)},
bWz(d,e,f){return C.i60(d,e,f)},
i60(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bWz=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bWz)
case 7:r=h
q=B.a.i(d)
q=A.ew(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bWz,v)},
Cf(d,e,f,g){return C.i61(d,e,f,g)},
i61(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$Cf=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$Cf)
case 7:r=i
p=B.a.i(d)
o=A.ew(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aA("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$Cf)
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
return A.i($async$Cf,v)},
bKd(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
hmu(d,e,f,g){return new C.amG(g,d==null?A.a(["","","",""],x.s):d,e,f)},
i43(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aL(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.bK)
while(u.A())w.push(J.k(u.gO(u)))
u=x.N
w=A.cD(w,0,A.dw(4,"count",x.S),u).d9(0)
B.d.u(w,A.c4(Math.max(0,4-(v.b(d.h(0,"a"))?J.ab(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.h.L(v)
v=B.n.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.h.L(u)
return C.hmu(w,v,B.n.D(u==null?20:u,5,60),t)},
hBp(d){var w,v,u,t,s,r,q=J.a0(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aL(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.bK)
u=x.f
t=x.N
s=x.z
while(q.A()){r=q.gO(q)
if(u.b(r))v.push(C.i43(A.a1(r,t,s)))}return new C.Nu(p,w,v)},
hvi(d){var w,v=A.a([],x.c)
for(w=J.aL(d.z);w.A();)v.push(C.hBp(w.gO(w)))
return v},
aV3(d,e){var w=e.c===D.p4
if(d.ap1(e)===0&&d.Ha(e).length!==0)return w?0:1
if(d.Ha(e).length!==0||d.atV(e)!=null)return w?2:3
return w?4:5},
hYd(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.NM(a4),a3=new A.e7()
a3.cV(a5)
w=A.a([],x.dT)
v=a2.b
u=A.B(v,x.P)
B.d.e_(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.I)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("L.E"),q=0;q<u.length;u.length===v||(0,A.I)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.d()
j=i.h(0,k)}h=a2.Ha(m)
g=a2.atV(m)
f=a2.aQ4(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cH(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.xn)k="father"
else k=k===D.p4?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.xn)k="father"
else k=k===D.p4?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e_(l,a3)
B.d.aZ(l,new C.hkO())
d=B.a.i(m.b)
a0=A.B(new A.X(s,new C.hkP(d),o),n)
B.d.e_(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.ib(a0,0,3,i.k("ib<1>"))
a1.mC(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e_(k,a3)
a1=C.aV3(a2,m)
i=new A.ib(l,0,4,p)
i.mC(l,0,4,r)
w.push(new C.bdz(d,a1,i.d9(0),k))
if(w.length>=5)break}return w},
hOC(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.Y(d,"My ")?1:0},
hXi(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.NM(a4),a3=new A.e7()
a3.cV(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Ha(q).length>=2)u.push(q)}B.d.e_(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Ha(l)
j=A.T(k)
i=new A.ib(k,0,4,j.k("ib<1>"))
i.mC(k,0,4,j.c)
h=i.d9(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aR(h,new C.hbb(q))&&q.d!==j)i.push(q)}B.d.e_(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.ib(i,0,k,m)
j.mC(i,0,k,n)
f=j.d9(0)
j=B.a.i(l.b)
k=C.aV3(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aV3(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aV3(a2,f[g]))
w.push(new C.abB(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lT:function lT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bVM:function bVM(d){this.b=d
this.c=$},
bVN:function bVN(){},
bVO:function bVO(d){this.a=d},
fHq:function fHq(d){this.a=d},
hkn:function hkn(d){this.a=d},
hko:function hko(){},
hkp:function hkp(d){this.a=d},
hkq:function hkq(d,e){this.a=d
this.b=e},
hkr:function hkr(d,e,f){this.a=d
this.b=e
this.c=f},
hkm:function hkm(d,e){this.a=d
this.b=e},
hks:function hks(d){this.a=d},
hkt:function hkt(d){this.a=d},
hku:function hku(d,e,f){this.a=d
this.b=e
this.c=f},
hkl:function hkl(d,e){this.a=d
this.b=e},
fVi:function fVi(d,e){this.a=d
this.b=e},
awl:function awl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
haz:function haz(){},
haA:function haA(){},
A2:function A2(d,e,f){this.a=d
this.b=e
this.c=f},
fR7:function fR7(d){this.a=d},
fYz:function fYz(d){this.a=d},
amG:function amG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQy:function bQy(){},
Nu:function Nu(d,e,f){this.a=d
this.b=e
this.c=f},
bdz:function bdz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
hkO:function hkO(){},
hkP:function hkP(d){this.a=d},
abB:function abB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hbb:function hbb(d){this.a=d},
bkZ:function bkZ(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
ahB:function ahB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
alY:function alY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alZ:function alZ(d,e,f,g,h){var _=this
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
_.bz$=g
_.ab$=h
_.c=_.a=null},
bOG:function bOG(d){this.a=d},
bOB:function bOB(){},
bOH:function bOH(){},
bOz:function bOz(){},
bOA:function bOA(){},
bOF:function bOF(d){this.a=d},
bOC:function bOC(d,e){this.a=d
this.b=e},
bOE:function bOE(d,e){this.a=d
this.b=e},
bOD:function bOD(d,e){this.a=d
this.b=e},
bOy:function bOy(d){this.a=d},
bg4:function bg4(d,e){this.b=d
this.a=e},
RE:function RE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDK:function aDK(d,e,f){this.b=d
this.c=e
this.a=f},
aC6:function aC6(d,e,f){this.a=d
this.b=e
this.c=f},
awW:function awW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
awX:function awX(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.dv$=e
_.bd$=f
_.c=_.a=null},
cuU:function cuU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cuV:function cuV(d){this.a=d},
cuT:function cuT(d){this.a=d},
cuW:function cuW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cuX:function cuX(){},
cuY:function cuY(d,e){this.a=d
this.b=e},
cuZ:function cuZ(){},
cv_:function cv_(d){this.a=d},
cuQ:function cuQ(d){this.a=d},
cuR:function cuR(d,e){this.a=d
this.b=e},
cuS:function cuS(d,e,f){this.a=d
this.b=e
this.c=f},
cuL:function cuL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cuN:function cuN(d,e){this.a=d
this.b=e},
cuO:function cuO(d,e){this.a=d
this.b=e},
cuM:function cuM(d,e){this.a=d
this.b=e},
cuK:function cuK(){},
cuP:function cuP(){},
bfy:function bfy(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cVf:function cVf(){},
aAS:function aAS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAT:function aAT(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cJQ:function cJQ(d){this.a=d},
cJP:function cJP(d){this.a=d},
cJY:function cJY(d,e){this.a=d
this.b=e},
cJZ:function cJZ(d,e){this.a=d
this.b=e},
cK_:function cK_(d){this.a=d},
cJX:function cJX(d){this.a=d},
cK0:function cK0(d){this.a=d},
cK1:function cK1(d,e){this.a=d
this.b=e},
cK2:function cK2(){},
cK3:function cK3(d){this.a=d},
cJS:function cJS(d){this.a=d},
cJT:function cJT(d,e){this.a=d
this.b=e},
cJR:function cJR(d,e){this.a=d
this.b=e},
cJU:function cJU(){},
cJV:function cJV(){},
cJW:function cJW(d,e){this.a=d
this.b=e},
aBR:function aBR(){},
aJn:function aJn(){},
hsR(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.buM((w-450*u)/2,(v-900*u)/2,u)},
ahp:function ahp(){},
fj7:function fj7(d){this.a=d},
aNh:function aNh(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
ftw:function ftw(d){this.a=d},
anZ:function anZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ao_:function ao_(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qy$=f
_.Nf$=g
_.apz$=h
_.bz$=i
_.ab$=j
_.c=_.a=null},
bWy:function bWy(d){this.a=d},
bWx:function bWx(){},
bWv:function bWv(d){this.a=d},
bWt:function bWt(){},
bWu:function bWu(d){this.a=d},
bWq:function bWq(d,e){this.a=d
this.b=e},
bWr:function bWr(){},
bWs:function bWs(d){this.a=d},
bWw:function bWw(d,e){this.a=d
this.b=e},
bWp:function bWp(d){this.a=d},
bwv:function bwv(d,e){this.b=d
this.a=e},
fj8:function fj8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fj9:function fj9(d,e,f){this.a=d
this.b=e
this.c=f},
fja:function fja(d,e,f){this.a=d
this.b=e
this.c=f},
fjb:function fjb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjc:function fjc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fjd:function fjd(){},
anX:function anX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anY:function anY(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qy$=f
_.Nf$=g
_.apz$=h
_.bz$=i
_.ab$=j
_.c=_.a=null},
bWb:function bWb(){},
bWm:function bWm(d,e){this.a=d
this.b=e},
bWn:function bWn(d){this.a=d},
bWo:function bWo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWi:function bWi(){},
bWh:function bWh(d,e){this.a=d
this.b=e},
bWj:function bWj(d,e){this.a=d
this.b=e},
bWk:function bWk(){},
bWl:function bWl(d){this.a=d},
bWd:function bWd(d){this.a=d},
bWe:function bWe(d){this.a=d},
bWf:function bWf(d){this.a=d},
bWc:function bWc(d,e){this.a=d
this.b=e},
bWg:function bWg(d){this.a=d},
bmP:function bmP(d,e){this.b=d
this.a=e},
dyy:function dyy(){},
a3u:function a3u(d,e){this.a=d
this.b=e},
anT:function anT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anU:function anU(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qy$=e
_.Nf$=f
_.apz$=g
_.bz$=h
_.ab$=i
_.c=_.a=null},
bVY:function bVY(d){this.a=d},
bVX:function bVX(){},
bVW:function bVW(){},
bVQ:function bVQ(){},
bVR:function bVR(){},
bVV:function bVV(d,e,f){this.a=d
this.b=e
this.c=f},
bVU:function bVU(d){this.a=d},
bVS:function bVS(d,e){this.a=d
this.b=e},
bVT:function bVT(d){this.a=d},
bme:function bme(d,e){this.b=d
this.a=e},
aDN:function aDN(){},
bjL:function bjL(){},
aDP:function aDP(){},
bjM:function bjM(){},
aDQ:function aDQ(){},
bjN:function bjN(){},
uQ(d,e,f,g,h){var w,v,u=null,t=A.n(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.hH,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.V(g,h,u,u,u,20),B.aa],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.q(u,A.A(v,B.l,u,B.e,B.P,0,u,u),B.f,u,u,new A.p(f,u,u,t,s,u,B.m),u,u,u,u,B.PR,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hCc(d,e,f,g,h,i,j){return new C.anV(i,h,d,j,e,f,g,null)},
a84:function a84(d,e){this.c=d
this.a=e},
bml:function bml(d){this.a=d},
u1:function u1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVP:function bVP(d){this.a=d},
J_:function J_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Xk:function Xk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bpb:function bpb(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e9i:function e9i(d,e){this.a=d
this.b=e},
e9j:function e9j(d){this.a=d},
e9k:function e9k(d,e){this.a=d
this.b=e},
e9g:function e9g(d){this.a=d},
e9h:function e9h(d){this.a=d},
e9f:function e9f(d){this.a=d},
e9d:function e9d(d){this.a=d},
e9e:function e9e(d){this.a=d},
e9c:function e9c(d,e){this.a=d
this.b=e},
e9l:function e9l(d){this.a=d},
e9m:function e9m(d,e){this.a=d
this.b=e},
e9n:function e9n(d,e){this.a=d
this.b=e},
e9o:function e9o(d,e){this.a=d
this.b=e},
e9r:function e9r(d,e){this.a=d
this.b=e},
e9s:function e9s(d,e){this.a=d
this.b=e},
e9t:function e9t(d,e){this.a=d
this.b=e},
e9u:function e9u(d,e){this.a=d
this.b=e},
e9v:function e9v(d,e){this.a=d
this.b=e},
e9w:function e9w(d,e,f){this.a=d
this.b=e
this.c=f},
e9x:function e9x(d,e){this.a=d
this.b=e},
e9y:function e9y(d,e){this.a=d
this.b=e},
e9p:function e9p(d){this.a=d},
e9q:function e9q(d){this.a=d},
a1g:function a1g(d,e){this.a=d
this.b=e},
anV:function anV(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
anW:function anW(d){var _=this
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
bW9:function bW9(d){this.a=d},
bWa:function bWa(d){this.a=d},
bW8:function bW8(d){this.a=d},
bW_:function bW_(d){this.a=d},
bW0:function bW0(d){this.a=d},
bVZ:function bVZ(d){this.a=d},
bW5:function bW5(d,e,f){this.a=d
this.b=e
this.c=f},
bW6:function bW6(d){this.a=d},
bW2:function bW2(d,e){this.a=d
this.b=e},
bW3:function bW3(d,e,f){this.a=d
this.b=e
this.c=f},
bW7:function bW7(){},
bW4:function bW4(d,e){this.a=d
this.b=e},
bW1:function bW1(d){this.a=d},
V_:function V_(d,e){this.c=d
this.a=e},
anS:function anS(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bVA:function bVA(d){this.a=d},
bVB:function bVB(d){this.a=d},
bVL:function bVL(){},
bVK:function bVK(d,e,f){this.a=d
this.b=e
this.c=f},
bVF:function bVF(d,e){this.a=d
this.b=e},
bVE:function bVE(d,e){this.a=d
this.b=e},
bVG:function bVG(d){this.a=d},
bVH:function bVH(d,e){this.a=d
this.b=e},
bVI:function bVI(d,e){this.a=d
this.b=e},
bVD:function bVD(d,e){this.a=d
this.b=e},
bVJ:function bVJ(d,e,f){this.a=d
this.b=e
this.c=f},
bVC:function bVC(d,e){this.a=d
this.b=e},
iBp(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.akJ(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.W(Date.now(),0,!1))
s=new C.fUJ(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("X<1>"),q=q.k("cQ<1,o>"),o=q.k("L.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zU)m.push(l===D.xn?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cH(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cH(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jc(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jc(h,a2,a2)-A.jc(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.B(new A.cQ(new A.X(a4,new C.fUH(u,f),p),new C.fUI(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aJ(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aJ(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.av(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
iBq(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.akJ(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fUO(v,e)
q=new C.fUM(v)
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
d=A.d9(new A.ba(p,d),d.k("L.E"))
n=A.B(d,A.a3(d).k("cl.E"))
B.d.fl(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eu(l,new C.fUN(p,m));k.A();t=f){j=l.gO(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aJ(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
ilz(d,e,f,g){var w,v,u=C.iBr(d,e)
if(u<=0||f.length<=u)return new A.ah3(!1,D.EI,f)
if(g.q(0,e.a))return new A.ah3(!1,D.EI,f)
w=A.T(f).c
v=A.cD(f,0,A.dw(u,"count",x.S),w).d9(0)
return new A.ah3(!0,A.cD(f,u,null,w).d9(0),v)},
ilA(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.akJ(d3),d2=d1.length
if(d2===0)return D.hVn
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c0(0,t.a,new C.dnb(t))}s=new C.dns(v)
d2=x.dy
r=A.S(w,d2)
q=new C.dnk(r)
for(p=new A.ds(v,v.r,v.e);p.A();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dnj(r)
l=A.S(w,x.do)
for(p=new A.ds(v,v.r,v.e);p.A();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.bU(l.c0(0,k,new C.dnc()),o)}h=new C.dni(s)
g=new C.dnh(l,r)
p=v.$ti.k("ba<2>")
o=p.k("X<L.E>")
f=A.B(new A.X(new A.ba(v,p),new C.dnd(h),o),o.k("L.E"))
e=f.length===0?new A.ba(v,p).gH(0):B.d.gH(f)
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
a9=new C.dnq(new C.dnm(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.ds(v,v.r,v.e),j=a2.gaow(a2);o.A();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eC([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.K(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nU(J.dM(i==null?B.M:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.dO)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.dna(a2,new C.dnr(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.ds(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.A();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cv<1>")
d2=A.B(new A.cv(b4,d2),d2.k("L.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.H7(o,new A.m(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Lw(c5.a,new A.m(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cv<1>")
d2=A.B(new A.cv(b6,d2),d2.k("L.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bP(0,new C.dne(c6,b4))
for(d2=new A.cj(a4,a4.$ti.k("cj<1,2>")).gae(0),w=x.g;d2.A();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aL(c7.b);j.A();){i=j.gO(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.m(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eu(j,new C.dnf(c8));i.A();)o.push(j.gO(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.dng())
c6.push(new C.aNb(new A.m(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bjR(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hSi(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cH(d)
return w==null?null:w.b[1]},
hLw(d,e,f,g,h,i,j,k,l,m,n){return new C.a1w(k,f,j,e,l,n,m,d,g,h,i,null)},
aFQ(d,e,f,g,h,i,j){return new C.bnG(i,d,e,f,j,h,g,null)},
at5:function at5(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aHp:function aHp(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
eaY:function eaY(d){this.a=d},
eaX:function eaX(d){this.a=d},
eb_:function eb_(d,e){this.a=d
this.b=e},
eb0:function eb0(d,e){this.a=d
this.b=e},
eb1:function eb1(d){this.a=d},
eaW:function eaW(d,e){this.a=d
this.b=e},
eaZ:function eaZ(d){this.a=d},
eb3:function eb3(d){this.a=d},
eb2:function eb2(d,e){this.a=d
this.b=e},
at_:function at_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aHm:function aHm(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
eao:function eao(d){this.a=d},
eam:function eam(d){this.a=d},
ean:function ean(d){this.a=d},
eap:function eap(d,e){this.a=d
this.b=e},
eaj:function eaj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9L:function e9L(d){this.a=d},
e9M:function e9M(d,e){this.a=d
this.b=e},
ea2:function ea2(d){this.a=d},
ea0:function ea0(d){this.a=d},
ea1:function ea1(d,e){this.a=d
this.b=e},
ea3:function ea3(d){this.a=d},
ea4:function ea4(d,e){this.a=d
this.b=e},
eai:function eai(d,e){this.a=d
this.b=e},
ea_:function ea_(d){this.a=d},
e9Z:function e9Z(d){this.a=d},
e9Y:function e9Y(d,e){this.a=d
this.b=e},
eaf:function eaf(){},
eag:function eag(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eae:function eae(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ea8:function ea8(d){this.a=d},
ea9:function ea9(d,e,f){this.a=d
this.b=e
this.c=f},
ea7:function ea7(d,e){this.a=d
this.b=e},
eaa:function eaa(d,e){this.a=d
this.b=e},
ea5:function ea5(d,e){this.a=d
this.b=e},
ea6:function ea6(){},
eab:function eab(d,e){this.a=d
this.b=e},
eac:function eac(d){this.a=d},
ead:function ead(d,e){this.a=d
this.b=e},
eah:function eah(d,e){this.a=d
this.b=e},
e9z:function e9z(d,e){this.a=d
this.b=e},
e9A:function e9A(d,e){this.a=d
this.b=e},
ear:function ear(d,e,f){this.a=d
this.b=e
this.c=f},
eal:function eal(d,e,f){this.a=d
this.b=e
this.c=f},
eak:function eak(d){this.a=d},
e9B:function e9B(d){this.a=d},
e9C:function e9C(d){this.a=d},
e9D:function e9D(){},
e9E:function e9E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9I:function e9I(d,e){this.a=d
this.b=e},
e9H:function e9H(d,e){this.a=d
this.b=e},
e9G:function e9G(d){this.a=d},
e9J:function e9J(d,e){this.a=d
this.b=e},
e9F:function e9F(d){this.a=d},
eaq:function eaq(d){this.a=d},
e9V:function e9V(){},
e9W:function e9W(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9U:function e9U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9Q:function e9Q(d,e,f){this.a=d
this.b=e
this.c=f},
e9P:function e9P(d,e,f){this.a=d
this.b=e
this.c=f},
e9N:function e9N(d,e){this.a=d
this.b=e},
e9R:function e9R(d){this.a=d},
e9S:function e9S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9O:function e9O(d,e){this.a=d
this.b=e},
e9T:function e9T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9X:function e9X(d,e){this.a=d
this.b=e},
eay:function eay(){},
eaz:function eaz(d,e){this.a=d
this.b=e},
eaA:function eaA(d){this.a=d},
eaB:function eaB(d,e){this.a=d
this.b=e},
eau:function eau(d){this.a=d},
eas:function eas(d,e){this.a=d
this.b=e},
eav:function eav(d,e){this.a=d
this.b=e},
eaw:function eaw(d,e){this.a=d
this.b=e},
eax:function eax(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eaC:function eaC(d){this.a=d},
eat:function eat(d){this.a=d},
e9K:function e9K(d){this.a=d},
bjP:function bjP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dn8:function dn8(d){this.a=d},
dn7:function dn7(d,e){this.a=d
this.b=e},
dn9:function dn9(d){this.a=d},
dn6:function dn6(d,e){this.a=d
this.b=e},
fUJ:function fUJ(d,e){this.a=d
this.b=e},
fUK:function fUK(d){this.a=d},
fUL:function fUL(){},
fUH:function fUH(d,e){this.a=d
this.b=e},
fUI:function fUI(){},
fUO:function fUO(d,e){this.a=d
this.b=e},
fUP:function fUP(d){this.a=d},
fUQ:function fUQ(){},
fUM:function fUM(d){this.a=d},
fUN:function fUN(d,e){this.a=d
this.b=e},
Lw:function Lw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
H7:function H7(d,e){this.a=d
this.b=e},
bjR:function bjR(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dnb:function dnb(d){this.a=d},
dns:function dns(d){this.a=d},
dnk:function dnk(d){this.a=d},
dnl:function dnl(){},
dnj:function dnj(d){this.a=d},
dnc:function dnc(){},
dni:function dni(d){this.a=d},
dnh:function dnh(d,e){this.a=d
this.b=e},
dnd:function dnd(d){this.a=d},
dnm:function dnm(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dnn:function dnn(d){this.a=d},
dno:function dno(d){this.a=d},
dnp:function dnp(){},
dnq:function dnq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dnr:function dnr(){},
dna:function dna(d,e,f,g,h,i,j,k,l,m){var _=this
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
dne:function dne(d,e){this.a=d
this.b=e},
dnf:function dnf(d){this.a=d},
dng:function dng(){},
aNb:function aNb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bjS:function bjS(d,e){this.b=d
this.a=e},
dnt:function dnt(){},
dnu:function dnu(d){this.a=d},
dnv:function dnv(d){this.a=d},
dnw:function dnw(){},
bnH:function bnH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biS:function biS(d,e){this.b=d
this.a=e},
bBV:function bBV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fzi:function fzi(d){this.a=d},
br5:function br5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f8P:function f8P(d){this.a=d},
f8O:function f8O(d,e){this.a=d
this.b=e},
a1w:function a1w(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aFO:function aFO(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dEk:function dEk(d,e){this.a=d
this.b=e},
dEj:function dEj(d){this.a=d},
dEh:function dEh(d){this.a=d},
dEi:function dEi(d){this.a=d},
dEt:function dEt(d){this.a=d},
dEu:function dEu(d){this.a=d},
dEs:function dEs(d,e){this.a=d
this.b=e},
dEv:function dEv(){},
dEy:function dEy(d){this.a=d},
dEr:function dEr(d,e){this.a=d
this.b=e},
dEx:function dEx(){},
dEz:function dEz(d){this.a=d},
dEq:function dEq(d,e){this.a=d
this.b=e},
dEA:function dEA(d){this.a=d},
dEp:function dEp(d){this.a=d},
dEB:function dEB(d){this.a=d},
dEo:function dEo(d){this.a=d},
dEC:function dEC(d){this.a=d},
dEn:function dEn(d){this.a=d},
dED:function dED(d){this.a=d},
dEm:function dEm(d){this.a=d},
dEE:function dEE(d){this.a=d},
dEl:function dEl(d,e){this.a=d
this.b=e},
dEw:function dEw(d){this.a=d},
afU:function afU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bnG:function bnG(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
afT:function afT(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bnF:function bnF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dEF:function dEF(d){this.a=d},
dEG:function dEG(d,e){this.a=d
this.b=e},
aFP:function aFP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aMd:function aMd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afV:function afV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dEP:function dEP(d){this.a=d},
H3:function H3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hGg(d){var w=d.cS,v=x.N
return w.j7(w,new C.cj9(),v,v)},
icK(d){var w=d.bv
if(w>=0)return w
return 5},
hGi(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hGg(d).h(0,v)
if(w==null||w.length===0)return null
return A.bf(w)},
hGh(d,e){var w=C.hGi(d,e)
if(w!=null&&w.cb(new A.W(Date.now(),0,!1)))return!0
return!1},
icL(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.hGg(d),w,w)
u=C.hGi(d,e)
t=u!=null&&u.cb(new A.W(Date.now(),0,!1))?u:new A.W(Date.now(),0,!1)
v.n(0,s,t.bN(A.dy(30,0,0,0,0,0).a).aa().ag())
d.cS=v},
b46(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b46=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.m1(t,B.KI),$async$b46)
case 3:if(l){u=!0
w=1
break}u=A.lB(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.KI,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b46,v)},
cj9:function cj9(){},
icI(){var w,v=$.oh(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hq(u)},
JX(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$JX=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$JX)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f9("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$JX)
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
return A.i($async$JX,v)},
a9O(d){return C.icJ(d)},
icJ(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a9O=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$a9O)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i4("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.d_,null),$async$a9O)
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
return A.i($async$a9O,v)},
cj8(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cj8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.JX(),$async$cj8)
case 3:t=m.im(f),t=t.gae(t),s=x.f
case 4:if(!t.A()){w=5
break}r=t.gO(t)
q=r.b
if(s.b(q)){p=J.a0(q)
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
return A.i($async$cj8,v)},
P7(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$P7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cj8(d),$async$P7)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.JX(),$async$P7)
case 6:s=f
r=J.a0(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dD(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a9O(s),$async$P7)
case 9:case 8:u=t
w=1
break
case 5:n=C.icI()
w=10
return A.b(C.JX(),$async$P7)
case 10:s=f
J.aM(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a9O(s),$async$P7)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$P7,v)},
b45(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b45=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.JX(),$async$b45)
case 3:t=f
for(s=J.dx(t),r=s.gdW(t),r=r.d9(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.X(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a9O(t),$async$b45)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b45,v)},
a9P(d,e,f){var w=0,v=A.j(x.H),u
var $async$a9P=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.at4(d,e),$async$a9P)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.P7(d),$async$a9P)
case 7:w=4
break
case 5:w=8
return A.b(C.b45(d),$async$a9P)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a9P,v)},
asZ(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$asZ=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.at4(f,e),$async$asZ)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.ce(),$async$asZ)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.JX(),$async$asZ)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a0(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asZ,v)},
b44(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b44=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.ce(),$async$b44)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.JX(),$async$b44)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a0(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b44,v)},
icM(){var w,v=$.oh(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hq(u)},
at1(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$at1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$at1)
case 3:if(!g){u=null
w=1
break}t=C.icM()
w=4
return A.b(A.Xl(),$async$at1)
case 4:s=g
r=B.e5.aM(B.T.ar(d.fb(),null))
r=B.cS.gcq().aM(r)
q=e?999:2
J.aM(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a9Q(s),$async$at1)
case 5:p=e?999:2
u=new A.a2I("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$at1,v)},
at0(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$at0=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Xl(),$async$at0)
case 3:p=a0
o=J.a0(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a0(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.h.L(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b44(J.k(l==null?"":l),j),$async$at0)
case 4:if(!a0)$.an.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ab(t)===0){u=null
w=1
break}s=null
try{r=B.cd.cG(0,B.cM.aM(t))
s=C.hGj(r)}catch(f){q=A.ad(f)
$.an.$1("[family tree qr stash] decode: "+A.v(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.X(p,g)
else{m=x.N
l=x.z
l=A.dD(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a9Q(p),$async$at0)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$at0,v)},
hGj(d){var w,v,u,t,s=null
try{w=B.T.aL(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.icO(A.a1(w,x.N,x.z))
return u}catch(t){v=A.ad(t)
$.an.$1("[family tree sync] parse: "+A.v(v))
return s}},
hoC(d){var w=0,v=A.j(x.m),u,t,s
var $async$hoC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.Y(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.at0(t[1])
w=1
break}u=null
w=1
break}u=C.hGj(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hoC,v)},
icO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.cL(v,x.f)
u=A.ct(u,new C.cjb(),u.$ti.k("L.E"),x.k)
t=A.a3(u).k("X<L.E>")
s=A.B(new A.X(u,new C.cjc(),t),t.k("L.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bf(J.k(u==null?"":u))
if(r==null)r=new A.W(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.im(p),t=t.gae(t),o=x.B;t.A();){n=t.gO(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.cL(l,u)
n=A.ct(n,new C.cjd(),n.$ti.k("L.E"),o)
k=A.a3(n).k("X<L.E>")
j=A.B(new A.X(n,new C.cje(),k),k.k("L.E"))
if(j.length!==0)q.n(0,m,j)}return new C.at2(h,w,s,r,q)},
at4(d,e){var w=0,v=A.j(x.y),u,t
var $async$at4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(R.OY(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.BL(d),$async$at4)
case 3:u=t.cM(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$at4,v)},
cjk(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cjk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.BL(d),$async$cjk)
case 3:t=s.b8(f,new C.cjl(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.aZ(t,new C.cjm())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cjk,v)},
Xm(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Xm=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.at4(e,d),$async$Xm)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.P7(e),$async$Xm)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.BL(e),$async$Xm)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dM(r,new C.cji(g))
r=A.B(t,t.$ti.k("L.E"))}t=J.a0(r)
if(t.gau(r)){u=null
w=1
break}t=t.dT(r,new C.cjj(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Mp(e,o),$async$Xm)
case 14:n=i
if(J.cM(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.at2(s,B.a.i(e.toLowerCase()),r,new A.W(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Xm,v)},
b49(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b49=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Xm(d,e,f,g),$async$b49)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aD(t,s,"_")
r=q.a
u=A.HN(A.Lr(q.fb(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b49,v)},
b48(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b48=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Xm(d,e,f,g),$async$b48)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.at1(r,f),$async$b48)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aKa(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b48,v)},
Xn(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Xn=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hoC(a0),$async$Xn)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.Y(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.asZ(g.a,d,e,f,s,r),$async$Xn)
case 6:if(!a2){if(r)throw A.Y(A.be("This backup expired or the sender's tree is no longer available."))
throw A.Y(A.be("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bHx(e,j),$async$Xn)
case 12:case 11:w=13
return A.b(C.akr(e,j,s),$async$Xn)
case 13:h=n.h(0,i)
w=h!=null&&J.cM(h)?14:15
break
case 14:w=16
return A.b(C.BV(e,i,h),$async$Xn)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.buS(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Xn,v)},
at2:function at2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cjg:function cjg(){},
cjh:function cjh(){},
cjf:function cjf(){},
cjb:function cjb(){},
cjc:function cjc(){},
cjd:function cjd(){},
cje:function cje(){},
cjl:function cjl(){},
cjm:function cjm(){},
cji:function cji(d){this.a=d},
cjj:function cjj(d){this.a=d},
hyi(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fc(null,x.H)
return A.hf(d,new C.at3(w,e,g,i,f,h,null),!0,null,x.H)},
dn5(d,e,f,g,h,i,j,k){return new C.bjO(i,e,k,j,g,f,h,d,null)},
at3:function at3(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aHo:function aHo(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
eaL:function eaL(d){this.a=d},
eaM:function eaM(d,e,f){this.a=d
this.b=e
this.c=f},
eaQ:function eaQ(d,e){this.a=d
this.b=e},
eaR:function eaR(d){this.a=d},
eaI:function eaI(d){this.a=d},
eaJ:function eaJ(d,e){this.a=d
this.b=e},
eaK:function eaK(d,e){this.a=d
this.b=e},
eaP:function eaP(d){this.a=d},
eaO:function eaO(d,e){this.a=d
this.b=e},
eaN:function eaN(){},
eaT:function eaT(d){this.a=d},
eaU:function eaU(d,e){this.a=d
this.b=e},
eaS:function eaS(d,e){this.a=d
this.b=e},
dnx:function dnx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bjQ:function bjQ(d,e,f){this.d=d
this.e=e
this.a=f},
af8:function af8(d,e,f){this.c=d
this.d=e
this.a=f},
bjO:function bjO(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bjT:function bjT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a1Q:function a1Q(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aHn:function aHn(){var _=this
_.d=!1
_.c=_.a=_.e=null},
eaD:function eaD(d,e){this.a=d
this.b=e},
eaE:function eaE(d){this.a=d},
eaF:function eaF(d){this.a=d},
eaG:function eaG(d){this.a=d},
eaH:function eaH(d){this.a=d},
a1R:function a1R(d){this.a=d},
bpc:function bpc(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
eaV:function eaV(d,e){this.a=d
this.b=e},
b2w(d,e){return new C.b2v(d,e,null)},
b2v:function b2v(d,e,f){this.c=d
this.d=e
this.a=f},
iDX(d){if(!(d!=null&&B.a.Y(d,"ngmy:thumb:")))return null
return B.a.aV(d,11)},
iMa(d){return A.bX(B.L,null,new C.hcK(new C.uC(A.R(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hIn(d,e){return new C.awa(e,d,null)},
aUY(d,e,f,g,h,i,j){var w=C.iDX(i)
if(w!=null)return A.bv(e,new A.a4(j,f,new C.a8R(w,!0,null),null),B.ap)
return A.aUh(e,B.c1,f,g,h,i,j)},
mq:function mq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a8R:function a8R(d,e,f){this.c=d
this.d=e
this.a=f},
boQ:function boQ(d,e){var _=this
_.e=_.d=$
_.dv$=d
_.bd$=e
_.c=_.a=null},
dWN:function dWN(d){this.a=d},
dWO:function dWO(){},
dWP:function dWP(d,e){this.a=d
this.b=e},
boP:function boP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
hcK:function hcK(d){this.a=d},
hcJ:function hcJ(d,e){this.a=d
this.b=e},
hcI:function hcI(d,e){this.a=d
this.b=e},
hcH:function hcH(d,e){this.a=d
this.b=e},
awa:function awa(d,e,f){this.c=d
this.d=e
this.a=f},
ctb:function ctb(d,e){this.a=d
this.b=e},
aPE:function aPE(){},
iLV(d){var w=null
return A.cf(w,w,!0,w,new C.hc6(),d,w,!0,!0,x.e2)},
iNf(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.hk5(h,g,f,e),d,w,!0,!0,x.N)},
iLX(d,e){var w=null
return A.cf(w,w,!0,w,new C.hca(e),d,w,!0,!0,x.dY)},
iLW(d){var w=null
return A.cf(w,w,!0,w,new C.hc9(),d,w,!0,!0,x.c5)},
aXW:function aXW(d,e){this.a=d
this.b=e},
aXV:function aXV(d){this.a=d},
aVZ:function aVZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hc6:function hc6(){},
hk5:function hk5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hca:function hca(d){this.a=d},
hc9:function hc9(){},
a0q:function a0q(d,e){this.c=d
this.a=e},
aCt:function aCt(){var _=this
_.d=$
_.c=_.a=_.e=null},
deB:function deB(d){this.a=d},
deC:function deC(d){this.a=d},
deA:function deA(d,e){this.a=d
this.b=e},
deD:function deD(d){this.a=d},
deE:function deE(d){this.a=d},
a0p:function a0p(d){this.a=d},
aCs:function aCs(){this.d=$
this.c=this.a=null},
dex:function dex(d){this.a=d},
dey:function dey(d){this.a=d},
dez:function dez(d){this.a=d},
a_Q:function a_Q(d){this.a=d},
aB4:function aB4(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cLv:function cLv(){},
cLB:function cLB(d){this.a=d},
cLC:function cLC(d){this.a=d},
cLD:function cLD(d){this.a=d},
cLA:function cLA(){},
cLE:function cLE(d){this.a=d},
cLF:function cLF(d){this.a=d},
cLz:function cLz(){},
cLG:function cLG(d,e){this.a=d
this.b=e},
cLy:function cLy(d,e){this.a=d
this.b=e},
cLw:function cLw(d,e){this.a=d
this.b=e},
cLH:function cLH(d){this.a=d},
cLx:function cLx(){},
cLI:function cLI(d){this.a=d},
a3H:function a3H(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bBN:function bBN(){this.d=$
this.c=this.a=null},
fyO:function fyO(d,e){this.a=d
this.b=e},
fyP:function fyP(d){this.a=d},
fyQ:function fyQ(d,e){this.a=d
this.b=e},
ae9:function ae9(d,e){this.a=d
this.b=e},
GT:function GT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bBL:function bBL(d,e){var _=this
_.d=$
_.bz$=d
_.ab$=e
_.c=_.a=null},
fyM:function fyM(d,e){this.a=d
this.b=e},
aAY:function aAY(d,e){this.c=d
this.a=e},
bBM:function bBM(d,e){var _=this
_.d=$
_.bz$=d
_.ab$=e
_.c=_.a=null},
fyN:function fyN(d){this.a=d},
bBK:function bBK(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aRL:function aRL(){},
aRM:function aRM(){},
bJE(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.h.ba(u),s=B.n.D(B.h.S((u-t)*100),0,99),r=d<0?"-":"",q=A.of(B.n.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.ham(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cX(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cX(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cX(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b1(B.n.v(s),2,"0")
n.push(A.cX(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.GK(A.cX(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aUA(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aUA=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.ig().lh(85,1280,B.f5),$async$aUA)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fF(),$async$aUA)
case 8:r=e
if(J.ab(r)===0){u=null
w=1
break}q=C.hIm()
w=9
return A.b(C.cta(q,r),$async$aUA)
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
return A.i($async$aUA,v)},
aUW(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aUW=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.Y(g,"ngmy:ws-thumb:")
if(i){u=C.ct7(g)
w=1
break}if(!B.a.Y(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cM.aM(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.HO(p,!0,null,o).d4(0,B.fR),$async$aUW)
case 9:n=a1
w=10
return A.b(n.ll(),$async$aUW)
case 10:m=a1
w=11
return A.b(m.b.ht(B.ht),$async$aUW)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eU(B.dN.gaS(l))
k="data:image/png;base64,"+B.cS.gcq().aM(i)
if(J.ab(k)<=r){u=k
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
return A.i($async$aUW,v)},
ham:function ham(){},
uC:function uC(d){this.a=d},
aw9:function aw9(d,e,f){this.c=d
this.d=e
this.a=f},
aIY:function aIY(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
f5Z:function f5Z(d,e){this.a=d
this.b=e},
f5Q:function f5Q(d){this.a=d},
f5R:function f5R(d){this.a=d},
f5X:function f5X(d,e){this.a=d
this.b=e},
f5W:function f5W(d,e){this.a=d
this.b=e},
f5T:function f5T(d,e){this.a=d
this.b=e},
f5S:function f5S(d,e){this.a=d
this.b=e},
f5U:function f5U(d){this.a=d},
f5V:function f5V(d,e){this.a=d
this.b=e},
f5Y:function f5Y(d,e){this.a=d
this.b=e},
f5L:function f5L(d,e){this.a=d
this.b=e},
f5P:function f5P(d){this.a=d},
f5O:function f5O(d,e){this.a=d
this.b=e},
f5N:function f5N(d){this.a=d},
f6_:function f6_(d,e){this.a=d
this.b=e},
f60:function f60(d,e){this.a=d
this.b=e},
f5M:function f5M(d,e){this.a=d
this.b=e},
hWI(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.X(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.W(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
han(d,e,f){var w=0,v=A.j(x.N),u
var $async$han=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.T.ar(C.hWI(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$han,v)},
bJG(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bJG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.han(!0,d,e),$async$bJG)
case 4:w=3
return A.b(r.aw7(g,d,e.a),$async$bJG)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.e5.aM(B.T.ar(C.hWI(d,e,null),null))
u="NGMY_WS:"+B.l3.gcq().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJG,v)},
hMZ(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hxU(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ab(s)===0)return!1
if(J.de(s,"NGMYWSSYNC2|"))return!0
if(J.de(s,"NGMY_WS:"))return!0
if(J.ex(s,t))return!0
if(J.de(s,"{"))try{w=B.T.aL(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iJO(d){var w,v,u,t=C.hMZ(d)
if(t==null)return null
if(C.hxU(t))return t
w=B.a.c8(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aV(t,w))
if(C.hxU(v))return v}u=B.a.c8(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aV(t,u))
if(C.hxU(v))return v}return null},
hxT(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ab(q)===0)return r
if(J.de(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.de(q,"NGMY_WS:")){v=B.cd.cG(0,B.cM.aM(J.no(q,8)))
w=t.a(B.T.aL(0,v,r))}else w=t.a(B.T.aL(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hrn(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bJF(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bJF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.Y(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.aw6(t[1]),$async$bJF)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hxT(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hxT(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJF,v)},
hxS(d){var w=B.n.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.m6(w,v,d.c,d.d,new A.W(Date.now(),0,!1))},
bJ8(){var w=0,v=A.j(x.o),u,t
var $async$bJ8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HY(),$async$bJ8)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hxT(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJ8,v)},
hXX(d,e,f,g){return A.bX(B.L,null,new C.hjT(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
hjT:function hjT(d,e,f){this.a=d
this.b=e
this.c=f},
agf:function agf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f62:function f62(d,e){this.a=d
this.b=e},
f63:function f63(d,e){this.a=d
this.b=e},
f64:function f64(d,e){this.a=d
this.b=e},
f65:function f65(d,e){this.a=d
this.b=e},
f61:function f61(d){this.a=d},
aw3:function aw3(d,e,f){this.c=d
this.d=e
this.a=f},
bqB:function bqB(){var _=this
_.c=_.a=_.e=_.d=null},
f5G:function f5G(d,e){this.a=d
this.b=e},
f5H:function f5H(d){this.a=d},
f5I:function f5I(d){this.a=d},
aw8:function aw8(d){this.a=d},
aIX:function aIX(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
f5K:function f5K(d){this.a=d},
f5J:function f5J(d){this.a=d},
ige(d,e,f,g,h){return new C.PU(h,g,d,e,f,null)},
aNZ:function aNZ(d,e){this.a=d
this.b=e},
PU:function PU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIZ:function aIZ(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
f6s:function f6s(){},
f6o:function f6o(d,e){this.a=d
this.b=e},
f6p:function f6p(d){this.a=d},
f69:function f69(d){this.a=d},
f67:function f67(d){this.a=d},
f68:function f68(d){this.a=d},
f6i:function f6i(d,e){this.a=d
this.b=e},
f6f:function f6f(d,e){this.a=d
this.b=e},
f6g:function f6g(d,e){this.a=d
this.b=e},
f6h:function f6h(d,e,f){this.a=d
this.b=e
this.c=f},
f6d:function f6d(d,e,f){this.a=d
this.b=e
this.c=f},
f6b:function f6b(d){this.a=d},
f6c:function f6c(d){this.a=d},
f6e:function f6e(d){this.a=d},
f6v:function f6v(d){this.a=d},
f6u:function f6u(d){this.a=d},
f6w:function f6w(d){this.a=d},
f6t:function f6t(d){this.a=d},
f66:function f66(d){this.a=d},
f6a:function f6a(d,e){this.a=d
this.b=e},
f6r:function f6r(d,e){this.a=d
this.b=e},
f6q:function f6q(d,e){this.a=d
this.b=e},
f6l:function f6l(d){this.a=d},
f6m:function f6m(d){this.a=d},
f6n:function f6n(d,e){this.a=d
this.b=e},
f6k:function f6k(d,e){this.a=d
this.b=e},
f6j:function f6j(d,e,f){this.a=d
this.b=e
this.c=f},
bDz:function bDz(){},
Bz(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aD(v,w,"_")},
aiT(d,e,f){return C.ix4(d,e,f)},
ix4(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aiT=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aA("String",e,f),$async$aiT)
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
return A.i($async$aiT,v)},
aiS(d,e){return C.ix3(d,e)},
ix3(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aiS=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.X(0,e),$async$aiS)
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
return A.i($async$aiS,v)},
ivS(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.V2(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bGq(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bGq=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b7r(q),$async$bGq)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aUW(q,!1),$async$bGq)
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
return A.i($async$bGq,v)},
i3k(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rR(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rR(p,J.k(u==null?"":u),1,o,q)},
hrn(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.cL(s,x.f)
w=A.ct(w,new C.cKO(),w.$ti.k("L.E"),x.Q)
v=A.a3(w).k("X<L.E>")
r=A.B(new A.X(w,new C.cKP(),v),v.k("L.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bf(J.k(t==null?"":t))
return new C.m6(w,v,u,r,t==null?new A.W(Date.now(),0,!1):t)},
iBl(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.xn
case"female":case"f":return D.p4
default:return D.zU}},
hSR(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hCd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.iBl(v==null?j:J.k(v))
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
m=m==null?j:B.h.L(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aJ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.h.L(k)
return new C.ie(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
iBn(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Qd
case"viewer":return D.lf
default:return D.vt}},
iBo(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
HP(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aTw(d,e){return B.a.i(e.toLowerCase())===C.HP(d,e)&&d.y!==D.lf},
uR(d,e){var w,v=d.y
if(v===D.lf)return!1
w=B.a.i(e.toLowerCase())
if(w===C.HP(d,e))return!0
if(v===D.Qd)return!0
v=d.e
return new A.O(v,A.hy_(),A.T(v).k("O<1,o>")).q(0,w)},
iAI(d){return J.dM(d,new C.fTC()).gI(0)},
hkE(d){var w=0,v=A.j(x.y),u,t
var $async$hkE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.BL(d),$async$hkE)
case 3:u=t.rM(f,new C.hkF(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hkE,v)},
bHx(d,e){var w=0,v=A.j(x.H),u,t
var $async$bHx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BL(d),$async$bHx)
case 3:t=g
if(J.rM(t,new C.fR6(e))){w=1
break}if(C.iAI(t)>=2)throw A.Y(A.be("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bHx,v)},
ao1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.cL(h,x.f)
w=A.ct(w,new C.bWB(),w.$ti.k("L.E"),x.P)
v=A.a3(w).k("X<L.E>")
g=A.B(new A.X(w,new C.bWC(),v),v.k("L.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bWD(),x.N)
t=A.B(w,w.$ti.k("aj.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bf(J.k(q==null?"":q))
if(q==null)q=new A.W(Date.now(),0,!1)
p=A.aJ(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.h.L(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.iBn(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aL(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.bK)
l=x.f
k=x.N
j=x.z
while(f.A()){i=f.gO(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.lj(w,v,s,!r,t,g,q,p,o,n,m)},
hT5(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aD(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.av(v,0,8)},
E7(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$E7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Tz(d),$async$E7)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aB(),$async$E7)
case 4:t=f
w=5
return A.b(t.a9i(0),$async$E7)
case 5:w=6
return A.b(C.fGX(t,l),$async$E7)
case 6:s=f
if(J.cM(s)){u=s
w=1
break}r=B.a.ga_(B.a.i(l.toLowerCase()))
q=t.a
p=J.a0(q)
o=A.aW(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hNF(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pA(l,n),$async$E7)
case 11:u=n
w=1
break
case 10:case 8:m=A.aW(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.ga_(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hNF(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pA(l,n),$async$E7)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$E7,v)},
fGX(d,e){return C.it2(d,e)},
it2(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fGX=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a0(a3)
a5=A.aW(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bz(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.T.aL(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aL(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.A()){w=8
break}o=f.gO(f)
n=B.a.i(J.k(o))
if(J.ab(n)===0){w=7
break}m=A.aW(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bz(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.T.aL(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hrn(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aW(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bz(a9)+"_"+n))
i=C.ivS(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.Y(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b7r(h),$async$fGX)
case 17:g=b1
if(g!=null){i=i.V2(g)
p=!0}case 16:J.bU(q,i)
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
case 8:J.TJ(q,new C.fGY())
if(p&&J.ab(q)!==0)C.pA(a9,q)
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
return A.i($async$fGX,v)},
bI0(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bI0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Tz(d),$async$bI0)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.E7(r),$async$bI0)
case 4:t=p.aL(g)
case 5:if(!t.A()){w=6
break}s=t.gO(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bI0,v)},
hNF(d){var w,v,u,t
try{w=B.T.aL(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.cL(w,x.f)
v=A.ct(v,new C.fCm(),v.$ti.k("L.E"),x.fA)
u=A.a3(v).k("X<L.E>")
v=A.B(new A.X(v,new C.fCn(),u),u.k("L.E"))
B.d.aZ(v,new C.fCo())
return v}catch(t){v=A.a([],x.D)
return v}},
pA(d,e){return C.iLK(d,e)},
iLK(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pA=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Tz(b2),$async$pA)
case 3:a8=b5
if(J.ab(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aB(),$async$pA)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bz(a8)
p=A.aW(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.T.aL(0,p,null)),new C.hbV(),a2).fJ(0)
a2=J.b8(b3,new C.hbW(),a2).c1(0,new C.hbX())
n=A.d9(a2,a2.$ti.k("L.E"))
a2=o,a2=A.e9(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.A()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.ex(n,m)?17:18
break
case 17:a5=C.Bz(a8)
l=A.aW(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.ab8(l),$async$pA)
case 19:t=21
a5=C.Bz(a8)
k=A.aW(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.T.aL(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.ab8(a5==null?null:J.k(a5)),$async$pA)
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
return A.b(C.aiS(r,"ngmy_worksheet_item_v3_"+C.Bz(a8)+"_"+m),$async$pA)
case 29:w=30
return A.b(C.aiS(r,"ngmy_worksheet_thumb_v3_"+C.Bz(a8)+"_"+m),$async$pA)
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
case 31:if(!a3.A()){w=32
break}i=a3.gO(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bGq(h),$async$pA)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aiT(r,"ngmy_worksheet_thumb_v3_"+C.Bz(a8)+"_"+a4,f),$async$pA)
case 40:g=i.V2(f)
w=38
break
case 39:$.an.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aiS(r,"ngmy_worksheet_thumb_v3_"+C.Bz(a8)+"_"+a4),$async$pA)
case 41:g=i.V2(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aiS(r,"ngmy_worksheet_thumb_v3_"+C.Bz(a8)+"_"+a4),$async$pA)
case 42:case 34:a4=i.a
w=43
return A.b(C.aiT(r,"ngmy_worksheet_item_v3_"+C.Bz(a8)+"_"+a4,B.T.ar(g.ak(),null)),$async$pA)
case 43:e=b5
if(!e){$.an.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.bU(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aiT(r,"ngmy_worksheets_index_v3_"+C.Bz(a8),B.T.ar(q,null)),$async$pA)
case 44:d=b5
if(!d){$.an.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eZ(b3,new C.hbY(q))
a4=a3.$ti.k("cQ<1,a9<o,@>>")
a7=A.B(new A.cQ(a3,new C.hbZ(),a4),a4.k("L.E"))
a0=a7
w=45
return A.b(C.aiT(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.ga_(B.a.i(a8.toLowerCase()))),B.T.ar(a0,null)),$async$pA)
case 45:w=46
return A.b(J.i2p(r),$async$pA)
case 46:if(a2.gcp(b3)&&J.ab(q)===0){u=!1
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
return A.i($async$pA,v)},
MT(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$MT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.E7(d),$async$MT)
case 3:t=g
s=J.cK(t)
r=s.bl(t,new C.hkD(e))
if(r===-1)s.cl(t,0,e)
else s.n(t,r,e)
u=C.pA(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$MT,v)},
bHM(d,e){var w=0,v=A.j(x.H),u
var $async$bHM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.E7(d),$async$bHM)
case 2:u=g
J.mI(u,new C.fU5(e))
w=3
return A.b(C.pA(d,u),$async$bHM)
case 3:return A.h(null,v)}})
return A.i($async$bHM,v)},
HR(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$HR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$HR)
case 3:l=f
k=A.a([],x._)
j=B.a.ga_(B.a.i(d.toLowerCase()))
i=A.aW(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.T.aL(0,i,null)
if(x.j.b(t)){j=J.cL(t,x.f)
j=A.ct(j,new C.fXJ(),j.$ti.k("L.E"),x.k)
s=A.a3(j).k("X<L.E>")
r=A.B(new A.X(j,new C.fXK(),s),s.k("L.E"))
B.d.aZ(r,new C.fXL())
k=r}}catch(h){}w=4
return A.b(C.fDf(d),$async$HR)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.its(k,p,d)
j=A.T(o)
s=j.k("O<1,a9<o,@>>")
s=A.B(new A.O(o,new C.fXM(),s),s.k("aj.E"))
n=B.T.ar(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.SG(d,o),$async$HR)
case 7:case 6:j=j.k("X<1>")
m=A.B(new A.X(o,new C.fXN(d),j),j.k("L.E"))
if(m.length!==0)C.aTh(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$HR,v)},
hbG(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$hbG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SG(d,e),$async$hbG)
case 3:t=J.dM(e,new C.hbH(d))
s=A.B(t,t.$ti.k("L.E"))
if(s.length===0){u=!0
w=1
break}u=C.aTh(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hbG,v)},
a5q(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a5q=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aB(),$async$a5q)
case 2:n=g
m=B.a.ga_(B.a.i(d.toLowerCase()))
l=A.aW(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.T.aL(0,l,null)
if(x.j.b(u)){m=J.cL(u,x.f)
m=A.ct(m,new C.hky(),m.$ti.k("L.E"),x.k)
t=A.a3(m).k("X<L.E>")
s=A.B(new A.X(m,new C.hkz(),t),t.k("L.E"))
o=s}}catch(k){}q=J.nM(o,new C.hkA(e))
if(B.a.i(e.x).length===0&&C.uR(e,d)){m=B.a.i(d.toLowerCase())
p=e.aJ8(e.y===D.lf?D.lf:D.vt,m)}else p=e
if(q===-1)J.lu(o,0,p)
else J.aM(o,q,p)
w=3
return A.b(C.SG(d,o),$async$a5q)
case 3:w=C.uR(p,d)?4:5
break
case 4:w=6
return A.b(C.aTg(C.HP(p,d),p),$async$a5q)
case 6:if(!g)$.an.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a5q,v)},
aTu(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aTu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.HR(d),$async$aTu)
case 2:u=g
t=J.cK(u)
s=A.nU(t.eZ(u,new C.fTN(e)))
t.bs(u,new C.fTO(e))
w=3
return A.b(C.SG(d,u),$async$aTu)
case 3:w=s!=null&&C.aTw(s,d)?4:5
break
case 4:w=6
return A.b(C.fCq(e),$async$aTu)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aTu,v)},
akJ(d){var w=d.f,v=A.T(w).k("X<1>")
w=A.B(new A.X(w,new C.hkJ(),v),v.k("L.E"))
return w},
hv6(d,e){var w,v=d.f,u=A.nU(new A.X(v,new C.fTh(e),A.T(v).k("X<1>")))
v=C.akJ(d)
w=A.T(v).k("X<1>")
v=A.B(new A.X(v,new C.fTi(e,u),w),w.k("L.E"))
B.d.aZ(v,new C.fTj())
return v},
iBr(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hY0(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bl(C.hv6(d,u),new C.hk6(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
iCY(d,e){var w
if(e==null||e.length===0)return 1
w=C.hv6(d,e)
if(w.length===0)return 1
return new A.O(w,new C.fYA(),A.T(w).k("O<1,F>")).eJ(0,B.wO)+1},
iLD(d){var w,v=C.akJ(d)
if(v.length===0)return null
w=new A.X(v,new C.hbA(),A.T(v).k("X<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
iBm(d){return A.J(["id",d.a,"name",d.b,"gender",C.hSR(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
iCT(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
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
n=n!==D.zU?n:q.c
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
d=q.aJ3(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cW0(a1,w,a3.d,a2.y,s,a0,v)},
BL(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$BL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$BL)
case 3:q=f
p=B.a.ga_(B.a.i(d.toLowerCase()))
o=A.aW(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.T.aL(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.cL(t,x.f)
p=A.ct(p,new C.fXG(),p.$ti.k("L.E"),x.k)
s=A.a3(p).k("X<L.E>")
p=A.B(new A.X(p,new C.fXH(),s),s.k("L.E"))
B.d.aZ(p,new C.fXI())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$BL,v)},
akr(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$akr=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.vt:D.lf
a7=C.HP(b2,b3)
w=2
return A.b(C.BL(b1),$async$akr)
case 2:a8=b5
a9=J.cK(a8)
b0=a9.bl(a8,new C.hbv(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bHx(b1,b2),$async$akr)
case 5:case 4:if(b0===-1){u=b2.aJ8(a6,a7)
a9.cl(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.zU?i:l.c
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
s.n(0,m,l.aJ3(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("ba<2>")
s=A.B(new A.ba(s,k),k.k("L.E"))
k=a5?D.vt:D.lf
u=t.cW2(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.SG(b1,a8),$async$akr)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aTg(B.a.i(b3.toLowerCase()),u),$async$akr)
case 9:case 8:return A.h(null,v)}})
return A.i($async$akr,v)},
hOa(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.W(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("O<1,a9<o,@>>"),k=A.B(new A.O(m,C.hX4(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hOb(d,e){var w=new A.W(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("O<1,a9<o,@>>")
u=A.B(new A.O(u,C.hX4(),t),t.k("aj.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
iqL(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a0(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ao1(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.O(j,A.hy_(),A.T(j).k("O<1,o>")).c1(0,new C.fD1())
t=A.B(j,j.$ti.k("L.E"))
if(u===v)s=D.vt
else s=B.d.q(t,u)?D.Qd:D.lf
return w.aJ8(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ao1(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.cL(q,h)
h=A.ct(h,new C.fD2(),h.$ti.k("L.E"),x.P)
p=A.a3(h).k("X<L.E>")
o=A.B(new A.X(h,new C.fD3(),p),p.k("L.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fD4(),x.N).c1(0,new C.fD5())
t=A.B(h,h.$ti.k("L.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.vt
else s=B.d.q(t,u)?D.Qd:D.lf
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bf(J.k(l==null?"":l))
if(l==null)l=new A.W(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.h.L(j)
if(j==null)j=0
return new C.lj(h,r,p,!m,t,o,l,j,v,s,B.co)},
fDf(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fDf=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ab(a0)===0){u=null
w=1
break}t=4
r=new C.fDj()
h=x.N
g=x.z
w=7
return A.b(A.hd(A.a([A.mc("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.mc("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.mc("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fDf)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.S(h,g)
h=A.B(p,g)
l=h
J.fw(l,o)
J.fw(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ab(j)!==0)J.aM(m,j,k)}l=m
h=A.a3(l).k("ba<2>")
h=A.ct(new A.ba(l,h),new C.fDg(a0),h.k("L.E"),x.k)
l=A.a3(h).k("X<L.E>")
l=A.B(new A.X(h,new C.fDh(),l),l.k("L.E"))
B.d.aZ(l,new C.fDi())
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
return A.i($async$fDf,v)},
its(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a0(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dT(e,new C.fHJ(),v).c1(0,new C.fHK())
t=A.d9(u,u.$ti.k("L.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.HP(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.lf){m=q.e
m=!new A.O(m,A.hy_(),A.T(m).k("O<1,o>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.A();){v=j.gO(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.iCT(l,v)
o=C.HP(k,w)
p=v.d
s.n(0,u,o===w?k.bj_(p,D.vt):k.bj_(p,v.y))}j=s.$ti.k("ba<2>")
j=A.B(new A.ba(s,j),j.k("L.E"))
B.d.aZ(j,new C.fHL())
return j},
SG(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$SG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aB(),$async$SG)
case 2:u=g
t=B.a.ga_(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fKJ(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.aA("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.T.ar(s,null)),$async$SG)
case 3:return A.h(null,v)}})
return A.i($async$SG,v)},
aTg(d,e){return C.iz3(d,e)},
iz3(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aTg=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mF("family_trees",A.a([C.hOa(e,d)],p),null,B.d_),$async$aTg)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mF("family_trees",A.a([C.hOb(e,d)],p),null,B.d_),$async$aTg)
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
return A.i($async$aTg,v)},
aTh(d,e){return C.iz4(d,e)},
iz4(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aTh=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("O<1,a9<o,@>>")
m=n.k("aj.E")
l=A.B(new A.O(e,new C.fQh(d),n),m)
r=l
w=7
return A.b(A.mF("family_trees",r,null,B.d_),$async$aTh)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.O(e,new C.fQi(d),n),m)
p=k
w=8
return A.b(A.mF("family_trees",p,null,B.d_),$async$aTh)
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
return A.i($async$aTh,v)},
fCq(d){return C.ipU(d)},
ipU(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fCq=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.T6("family_trees",A.J(["id",d],x.N,x.z),null,B.d_),$async$fCq)
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
return A.i($async$fCq,v)},
rR:function rR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
m6:function m6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cKR:function cKR(){},
cKQ:function cKQ(){},
cKO:function cKO(){},
cKP:function cKP(){},
IZ:function IZ(d,e){this.a=d
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
ao0:function ao0(d,e){this.a=d
this.b=e},
fTC:function fTC(){},
hkF:function hkF(d){this.a=d},
fR6:function fR6(d){this.a=d},
lj:function lj(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bWF:function bWF(){},
bWE:function bWE(){},
bWB:function bWB(){},
bWC:function bWC(){},
bWD:function bWD(){},
fGY:function fGY(){},
fCm:function fCm(){},
fCn:function fCn(){},
fCo:function fCo(){},
hbV:function hbV(){},
hbW:function hbW(){},
hbX:function hbX(){},
hbY:function hbY(d){this.a=d},
hbZ:function hbZ(){},
hkD:function hkD(d){this.a=d},
fU5:function fU5(d){this.a=d},
fXJ:function fXJ(){},
fXK:function fXK(){},
fXL:function fXL(){},
fXM:function fXM(){},
fXN:function fXN(d){this.a=d},
hbH:function hbH(d){this.a=d},
hky:function hky(){},
hkz:function hkz(){},
hkA:function hkA(d){this.a=d},
fTN:function fTN(d){this.a=d},
fTO:function fTO(d){this.a=d},
hkJ:function hkJ(){},
fTh:function fTh(d){this.a=d},
fTi:function fTi(d,e){this.a=d
this.b=e},
fTj:function fTj(){},
hk6:function hk6(d){this.a=d},
fYA:function fYA(){},
hbA:function hbA(){},
fXG:function fXG(){},
fXH:function fXH(){},
fXI:function fXI(){},
hbv:function hbv(d){this.a=d},
fD1:function fD1(){},
fD2:function fD2(){},
fD3:function fD3(){},
fD4:function fD4(){},
fD5:function fD5(){},
fDj:function fDj(){},
fDk:function fDk(d){this.a=d},
fDg:function fDg(d){this.a=d},
fDh:function fDh(){},
fDi:function fDi(){},
fHJ:function fHJ(){},
fHK:function fHK(){},
fHL:function fHL(){},
fKJ:function fKJ(){},
fQh:function fQh(d){this.a=d},
fQi:function fQi(d){this.a=d},
cKS:function cKS(d,e){this.a=d
this.b=e},
cKT:function cKT(d,e){this.a=d
this.b=e},
aL8:function aL8(d,e,f){this.a=d
this.b=e
this.c=f},
bdN:function bdN(){this.b=this.a=0},
bdM:function bdM(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bBO:function bBO(){},
xI(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gci()+"/"+w.gcC()+"/"+w.gcm()
if(!e)return v
return v+" "+B.a.b1(B.n.v(w.gnN()),2,"0")+":"+B.a.b1(B.n.v(w.gHS()),2,"0")},
iAe(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.bt(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.c1(new A.m(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.v.j(0.22)
$.U()
u=A.M()
u.r=v.gp(0)
a5.c4(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=F.hu[l]*a7*0.075
j=k-w
j=A.bx(new A.a5(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.r=B.dl.gp(0)
a5.aq(j,i)
k-=q
k=A.bx(new A.a5(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bx(new A.a5(w,u,s,u+t),new A.aP(q,q))
q=A.M()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bx(new A.a5(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.M()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.m(v*0.15,s)
f=new A.m(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a6(0,new A.m(s,a7*0.17)),O.aiR(F.tC,t))
s=g.a6(0,new A.m(s,a7*0.18))
q=A.M()
q.r=F.tC.gp(0)
a5.P(s,r,q)
e=-2.5+b3*0.5
d=f.a6(0,new A.m(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,O.aiR(F.tC,t))
w=A.M()
w.r=F.tC.gp(0)
a5.P(d,r,w)
v*=0.7
a0=new A.m(0,v)
a1=a7*0.22
if(b1===1){w=a0.a6(0,new A.m(0,-a1*0.12))
u=A.M()
u.r=F.mq.gp(0)
a5.P(w,a1*1.18,u)}w=A.M()
w.r=F.tC.gp(0)
a5.P(a0,a1,w)
if(b1===0){w=A.c0(a0,a1)
u=A.M()
u.r=F.mq.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.c0(a0,a1)
u=A.M()
u.r=F.mq.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=F.hu[l]
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=F.mq.gp(0)
a5.P(new A.m(0+a2*a1*1.05,w),u,t)}}a3=B.h.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=F.hu[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.b=B.af
k.c=1.6
k.r=B.br.gp(0)
k.d=B.bI
a5.ah(new A.m(m+q,p),new A.m(m+o,p),k)}else{k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=B.c.gp(0)
a5.P(new A.m(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=B.v.gp(0)
a5.P(new A.m(m+k*a1*0.06,p),r,j)}m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.i0.j(0.5).gp(0)
a5.P(new A.m(0+n*0.62,w),u,m)}a5.cQ(A.c1(a0.a6(0,new A.m(0,a1*0.5)).aI(0,new A.m(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,O.aiR(B.br,1.8))
a4.restore()},
igb(){var w,v=$.oh(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hq(u)},
aw4(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aw4=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$aw4)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f9("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$aw4)
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
return A.i($async$aw4,v)},
aw5(d){return C.igc(d)},
igc(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aw5=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$aw5)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i4("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.d_,null),$async$aw5)
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
return A.i($async$aw5,v)},
aw7(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aw7=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$aw7)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.igb()
w=4
return A.b(C.aw4(),$async$aw7)
case 4:r=h
q=B.a.i(e)
p=B.e5.aM(t)
J.aM(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cS.gcq().aM(p),"usesRemaining",25,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.aw5(r),$async$aw7)
case 5:u=new A.a2I("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aw7,v)},
aw6(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aw6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.ce(),$async$aw6)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aw4(),$async$aw6)
case 4:q=f
p=J.a0(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a0(o)
m=A.aJ(n.h(o,"usesRemaining"))
l=m==null?null:B.h.L(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ab(t)===0){u=null
w=1
break}s=null
try{s=B.cd.cG(0,B.cM.aM(t))}catch(h){r=A.ad(h)
$.an.$1("[worksheet qr stash] decode: "+A.v(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.X(q,i)
else{n=x.N
m=x.z
m=A.dD(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.aw5(q),$async$aw6)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aw6,v)},
hIm(){var w=new A.W(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cX.aw(999999)},
igd(d){var w,v,u,t,s,r,q
try{w=A.zy(d)
if(w==null)return d
v=w
if(J.MZ(v)>960||J.MY(v)>960){s=v
r=J.MZ(v)>=J.MY(v)?960:null
v=A.Mm(s,J.MY(v)>J.MZ(v)?960:null,B.J9,r)}s=v
u=A.Jl(82).Ae(s,B.rH)
if(J.ab(u)===0)return d
s=new Uint8Array(A.cd(u))
return s}catch(q){t=A.ad(q)
$.an.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
cta(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cta=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.igd(e)
$.ct6.n(0,s,t)
u=C.bJI(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cta,v)},
b7r(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b7r=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.de(l,"data:image")){u=null
w=1
break}t=4
r=J.ex(l,",")?B.d.gal(J.mg(l,",")):l
q=B.cM.aM(r)
if(J.ab(q)===0){u=null
w=1
break}p=C.hIm()
w=7
return A.b(C.cta(p,q),$async$b7r)
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
return A.i($async$b7r,v)},
ct7(d){var w=0,v=A.j(x.T),u,t,s
var $async$ct7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.Y(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.ct9(s),$async$ct7)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcq().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ct7,v)},
ab8(d){var w=0,v=A.j(x.H),u,t
var $async$ab8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hWJ(d)
if(t==null){w=1
break}$.ct6.X(0,t)
w=3
return A.b(C.bJH(t),$async$ab8)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ab8,v)},
bJI(d,e){return C.iJR(d,e)},
iJR(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bJI=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aS2
w=7
return A.b(n==null?$.aS2=A.htR():n,$async$bJI)
case 7:r=g
q=new Uint8Array(A.cd(e))
p=J.mJ(r,"thumbs","readwrite")
B.iY.mx(J.mH(p,"thumbs"),q,l)
w=8
return A.b(J.oZ(p),$async$bJI)
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
return A.i($async$bJI,v)},
bJH(d){return C.iJP(d)},
iJP(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bJH=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aS2
w=7
return A.b(o==null?$.aS2=A.htR():o,$async$bJH)
case 7:r=f
q=J.mJ(r,"thumbs","readwrite")
B.iY.Hq(J.mH(q,"thumbs"),m)
w=8
return A.b(J.oZ(q),$async$bJH)
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
return A.i($async$bJH,v)}},D
J=c[1]
A=c[0]
B=c[2]
A9=c[86]
S=c[296]
Z=c[113]
Aa=c[295]
P=c[300]
A_=c[207]
T=c[66]
Ab=c[118]
M=c[69]
Ac=c[272]
L=c[244]
A0=c[121]
U=c[157]
H=c[41]
E=c[260]
Ad=c[275]
V=c[140]
Ae=c[171]
A1=c[116]
Af=c[106]
Ag=c[108]
Ah=c[72]
Ai=c[271]
Aj=c[50]
Q=c[270]
Ak=c[294]
Al=c[240]
N=c[98]
A2=c[94]
Am=c[214]
A3=c[167]
A4=c[218]
A5=c[256]
W=c[301]
A6=c[299]
An=c[163]
Ao=c[297]
Ap=c[87]
G=c[298]
Aq=c[170]
Ar=c[156]
As=c[302]
A7=c[248]
At=c[40]
Au=c[200]
Av=c[115]
Aw=c[236]
X=c[287]
O=c[49]
F=c[132]
Ax=c[39]
I=c[139]
A8=c[120]
K=c[176]
Ay=c[122]
Y=c[83]
R=c[38]
C=a.updateHolder(c[7],C)
D=c[293]
C.arC.prototype={}
C.b2x.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bnl(),f=h.x!=null&&h.Az(i).length===0
if(h.x!=null)w=f?B.b8:B.bD
else w=h.gW3()?B.bD:B.ef
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.K(D.bub,B.r,1)
s=x.p
r=A.q(i,A.w(A.a([A.q(i,D.fy0,B.f,i,i,new A.p(B.b8.j(0.12),i,i,A.n(999),i,i,B.m),i,i,i,i,B.hr,i,i,i),B.S,D.h3v,B.at,A.c(C.xI(new A.W(Date.now(),0,!1),!0),i,i,i,i,i,i,D.h_2,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,D.bbO,i,i,i,i,B.PO,i,i,i)
q=A.n(16)
p=A.K(B.bo,B.r,1)
o=A.K(B.b8.j(0.28),B.r,1)
n=A.hwh(h.d)
o=A.q(B.z,C.b2w(A.h08(h.e,n),30),B.f,i,i,new A.p(B.mt,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fUW,B.K,i,i)
m=A.n(14)
l=A.K(B.bo,B.r,1)
q=A.q(i,A.w(A.a([o,B.N,n,B.bs,D.h3O,B.ae,A.q(i,A.w(A.a([D.hkm,B.bs,A.c(A.BO(h.c),i,i,i,i,i,i,D.fPm,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,l,m,i,i,B.m),i,i,i,i,B.fc,i,i,1/0)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aT,i,p,q,i,i,B.m),i,i,i,i,B.a2y,i,i,i)
p=A.n(16)
m=A.K(B.bo,B.r,1)
l=j.aWj("Original due",C.xI(h.r,!1))
n=j.aWj("Current due",C.xI(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.S,A.q(i,A.w(A.a([l,B.N,n,B.S,A.q(i,A.c(h.gaQf(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.p(o,i,i,k,i,i,B.m),i,i,i,i,B.xe,i,i,1/0),B.S,j.cpX(),B.N,j.cc0(g,f)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.K(B.bo,B.r,1)
B.d.u(p,A.a([B.S,A.q(i,A.w(A.a([D.h4P,B.at,A.c(q,i,i,i,i,i,i,D.fU4,i,i,i)],s),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aT,i,n,o,i,i,B.m),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaKK()){q=A.n(14)
o=A.K(B.cG,B.r,1.6)
B.d.u(p,A.a([B.S,A.q(i,A.w(A.a([D.hlH,B.N,A.bv(A.n(12),A.en(new A.a4(1/0,88,A.b5(i,i,i,new A.Ye(h.ax,B.a_,D.fCO,!0,3.5,i),B.aA),i),B.c,!0),B.ap)],s),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,o,q,i,i,B.m),i,i,i,i,B.Dk,i,i,i)],s))}p.push(B.az)
p.push(D.hdp)
return A.q(i,A.w(A.a([r,new A.C(B.a2A,A.w(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.P,0,B.p),B.ap,i,i,new A.p(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aWj(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.ae5,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fQs,w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
cpX(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.acC(B.ef,u,"Not paid yet")
w=t.Az(null).length
v=w===0?B.b8:B.bD
return this.acC(v,u,C.xI(t.x,!0))},
cc0(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.acC(B.b8,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.acC(B.b8,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.ae5,u,u,u)
v=A.T(d).k("O<1,hy>")
v=A.B(new A.O(d,new C.cc_(),v),v.k("aj.E"))
return A.w(A.a([w,B.aj,A.bV(B.bF,v,B.bp,u,6,6)],x.p),B.B,u,B.e,B.i,0,B.p)},
acC(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.ae5,w,w,w),1),new A.cZ(1,B.c6,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dL,w,w),w)],x.p),B.B,w,B.e,B.i,0,w,w)}}
C.bg2.prototype={
a5(d,e){new A.Ye(this.b,B.a_,e,!0,3.5,null).a5(d,e)},
aD(d){return d.b!==this.b}}
C.arP.prototype={
R(){return new C.aGQ(A.a([],x.bp))},
ge8(){return this.c}}
C.aGQ.prototype={
Z(){this.a4()
this.Kt()},
Kt(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Kt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a4E(t.a.c),$async$Kt)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dXG(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Kt,v)},
aYl(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aT,s=A.l(v,v,u?B.bu:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bu:B.bl).j(0.22)
w=A.n(10)
return A.bB(v,new A.b6(4,r,new A.ax(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b6(4,w,new A.ax((this.a.d.a?B.bu:B.bl).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.n(10),D.b9u),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aYk(d){return this.aYl(d,null)},
Rw(d){return this.ctJ(d)},
ctJ(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rw=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.J8:B.f5
w=7
return A.b(new A.ig().DL(72,900,900,n),$async$Rw)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fF(),$async$Rw)
case 8:p=f
n=B.cS.gcq().aM(p)
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
if(n!=null)n.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("Could not pick photo: "+A.v(o),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Rw,v)},
b6N(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aT,o=A.n(10),n=A.K((q?B.bu:B.bl).j(0.18),B.r,1)
if(d)q=B.cZ
else q=s.a.d.a?B.bu:B.bl
q=A.V(e,q,r,r,r,18)
w=A.c(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aT:B.ay,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cZ
else u=s.a.d.a?B.bu:B.bl
t=x.p
u=A.E(A.w(A.a([w,A.c(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.B,r,B.e,B.i,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cZ,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cp)
q=A.a([q,B.aa,u,A.bG(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.V(B.cE,s.a.d.a?B.bu:B.bl,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cp))
return A.q(r,A.A(q,B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(p,r,n,o,r,r,B.m),r,r,r,B.jF,D.bHo,r,r,r)},
EG(d){return this.bHL(d)},
bHK(){return this.EG(null)},
bHL(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$EG=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ay()
r=new A.au(new A.bd(a4,B.bb,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.h.b8(a4)
p=a5.c
a4=a4===q?B.n.v(B.h.L(p)):B.h.a1(p,2)}o=new A.au(new A.bd(a4,B.bb,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.bd(a4,B.bb,B.aP),s)
if(a3){a4=new A.W(Date.now(),0,!1).bN(6048e8)
m=A.c3(a4.gcm(),a4.gci(),a4.gcC(),0,0,0,0,0)}else{a4=a5.f
m=A.c3(a4.gcm(),a4.gci(),a4.gcC(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bs(a4,!0,x.cT)
i=a3?null:A.hwh(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xZ?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hT(B.v.j(0.55),!0,"Dismiss",a4,new C.dXp(),new C.dXq(a2,t,a5,r,new C.dXr(a2,t),o,n,j),B.eM,!0,x.y),$async$EG)
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
break}if(f.length===0||e<=0){t.c.M(x.q).f.T(D.fJo)
w=1
break}a0=a2.d
if(a0==null){t.c.M(x.q).f.T(D.fI2)
w=1
break}a1=A.h08(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xZ?"male":"female"
w=7
return A.b(A.akI(a3,A.hEU(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$EG)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xZ?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a7(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c3(a3.gcm(),a3.gci(),a3.gcC(),0,0,0,0,0)
a4=a5.f
if(!a3.B(0,A.c3(a4.gcm(),a4.gci(),a4.gcC(),0,0,0,0,0)))a5.cYo(a2.a)
w=8
return A.b(A.akI(t.a.c,a5),$async$EG)
case 8:case 5:w=9
return A.b(t.Kt(),$async$EG)
case 9:case 1:return A.h(u,v)}})
return A.i($async$EG,v)},
aZ_(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cZ.j(0.14)
else w=this.a.d.a?B.a_:B.aT
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cZ
else s=(this.a.d.a?B.bu:B.bl).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b2w(d,18)
if(g)q=B.cZ
else q=this.a.d.a?B.aT:B.ay
return A.aE(!1,B.a3,!0,v,A.aN(!1,u,!0,A.q(p,A.A(A.a([r,B.b6,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.ba,B.i,0,p,p),B.f,p,p,new A.p(p,p,s,t,p,p,B.m),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Uj(d){return this.cM6(d)},
cM6(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Uj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hT(B.v.j(0.55),!0,"Dismiss",s,new C.dXJ(),new C.dXK(t,d),B.hg,!0,x.y),$async$Uj)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.W(s,0,!1)
case 4:w=7
return A.b(A.akI(t.a.c,d),$async$Uj)
case 7:w=8
return A.b(t.Kt(),$async$Uj)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Uj,v)},
Rv(d,e){return this.bSX(0,e)},
bSX(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lJ(s,"Cancel","Delete",e.b+" \xb7 "+A.BO(e.c)+" will be removed from this device.","Delete this debt?"),$async$Rv)
case 3:if(!g){w=1
break}w=4
return A.b(C.fTU(t.a.c,e.a),$async$Rv)
case 4:w=5
return A.b(t.Kt(),$async$Rv)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Rv,v)},
aiH(d){return this.cnd(d)},
cnd(d){var w=0,v=A.j(x.H),u=this,t
var $async$aiH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bX(B.L,null,new C.dXD(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aiH)
case 2:return A.h(null,v)}})
return A.i($async$aiH,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eLY
w=J.dM(m.d,new C.dXL())
v=A.B(w,w.$ti.k("L.E"))
w=J.dM(m.d,new C.dXM())
u=A.B(w,w.$ti.k("L.E"))
t=B.d.cI(v,0,new C.dXN())
w=A.n(18)
s=m.a.d.a
r=s?D.cIQ:D.aGb
q=A.K(s?B.cZ.j(0.35):B.cZ.j(0.18),B.r,1)
s=A.q(l,D.c9_,B.f,l,l,new A.p(B.cZ.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.ar,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aT:B.ay,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aE(!1,B.a3,!0,A.n(12),A.aN(!1,A.n(12),!0,D.eLg,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dXO(m),l,l,l,l,l,l,l),B.f,B.cZ,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.i,0,l,l)
o=A.E(m.cI3("Open",""+v.length),1)
n=v.length===0?"$0.00":A.BO(t)
r=A.a([A.q(l,A.w(A.a([s,B.ae,A.A(A.a([o,B.aa,A.E(m.bd1(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.B,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(l,l,q,w,l,new A.a7(B.ax,B.aC,B.w,r,l,l),B.m),l,l,l,l,B.aoH,l,l,l),B.az],p)
if(J.ch(m.d)){w=m.a.d.a
s=w?B.eo:B.c
q=A.n(18)
o=A.K((w?B.bu:B.bl).j(0.12),B.r,1)
n=A.q(l,D.c3v,B.f,l,l,new A.p(B.cZ.j(0.12),l,l,A.n(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aT:B.ay,l,l,l,l,l,l,l,l,15,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.q(l,A.w(A.a([n,B.ae,w,B.at,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bl,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(s,l,o,q,l,l,B.m),l,l,l,l,D.bK9,l,l,1/0))}else{w=m.gcsW()
s=A.B(new A.O(v,w,A.T(v).k("O<1,x>")),x.l)
if(u.length!==0){q=A.a([B.aj,new A.C(D.bLO,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bl,l,l,l,l,l,l,l,l,12,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.O(u,w,A.T(u).k("O<1,x>")))
B.d.u(s,q)}B.d.u(r,s)}return A.w(r,B.al,l,B.e,B.i,0,B.p)},
bd1(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.v.j(0.22):B.c.j(0.85),s=A.n(14),r=A.K((v.a.d.a?B.bu:B.bl).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bu:B.bl,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cZ
else w=v.a.d.a?B.aT:B.ay
return A.q(u,A.w(A.a([q,B.bs,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.B,u,B.e,B.i,0,B.p),B.f,u,u,new A.p(t,u,r,s,u,u,B.m),u,u,u,u,B.eq,u,u,u)},
cI3(d,e){return this.bd1(!1,d,e)},
csX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.Az(j).length,h=d.bmC()
if(d.x!=null){w=d.Az(j).length
v=w===0?B.cZ:B.bD}else if(d.gW3())v=B.bD
else{if(h)w=B.cZ
else w=k.a.d.a?B.bu:B.bl
v=w}if(d.x!=null){w=d.Az(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xI(u,!1)}else{u.toString
t="Paid "+C.xI(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xI(w,!1)+" \xb7 "+i+" missed":"Due "+C.xI(w,!1)}w=k.a.d.a?B.eo:B.c
u=A.n(18)
if(d.gW3()&&d.x==null)s=B.bD.j(0.35)
else s=(k.a.d.a?B.bu:B.bl).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.v.j(0.04),B.cO,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bt:B.mt
o=A.K(d.gW3()&&d.x==null?B.bD.j(0.45):B.cZ.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hwh(d.d)
o=A.q(B.z,A.d3(C.b2w(A.h08(d.e,m),24),n),B.f,j,j,new A.p(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aT:B.ay
m=x.p
n=A.a([new A.cZ(1,B.c6,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaKK())B.d.u(n,A.a([B.dU,A.V(B.QG,B.cZ.j(0.8),j,j,j,14)],m))
p=A.E(A.w(A.a([A.A(n,B.l,j,B.e,B.i,0,j,j),B.cR,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.B,j,B.e,B.i,0,B.p),1)
n=A.BO(d.c)
l=k.a.d.a?B.aT:B.ay
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.q(j,A.aE(!1,B.a3,!0,j,A.aN(!1,q,!0,new A.C(Ak.aot,A.A(A.a([o,B.bd,p,B.aa,A.w(A.a([n,B.bs,A.V(B.eO,(k.a.d.a?B.bu:B.bl).j(0.5),j,j,j,18)],m),B.ds,j,B.e,B.i,0,B.p)],m),B.l,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dXF(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.p(w,j,s,u,r,j,B.m),j,j,j,B.d2,j,j,j,j)}}
C.vg.prototype={}
C.anP.prototype={
C(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.aU
u=v?B.B:B.l
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.v.j(0.45),B.cC,16)],x.V)
o=x.p
n=A.a([],o)
m=B.v.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.q(a0,A.V(B.cE,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.p(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.i5,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.c(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aCg,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.Dz,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.d8(B.dn,m,B.f,A.A(l,B.l,a0,B.e,B.P,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(B.aod,A.c(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cN:B.bm,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.C(B.fF,A.w(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.fDB)
a2=A.a([A.A(n,B.l,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.C(B.vk,A.q(a0,a0,B.f,a0,a0,new A.p(a0,a0,a0,a0,a0,new A.a7(B.a5,B.a9,B.w,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.m),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.lF,A.w(a2,B.l,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hP,a0,a0,a0,a0)}return A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,q,s,p,new A.a7(B.ax,B.aC,B.w,a1.d,a0,a0),B.m),a0,a0,a0,D.bHT,a0,a0,a0,a0)}}
C.aZc.prototype={
C(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.q(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.aU?B.aU:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.c(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bm:B.cN,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.i,0,q,q),B.cR,n],m)
if(p.z)o.push(new A.C(B.rm,n,q))
return new A.C(B.d2,A.w(o,B.l,q,B.e,B.P,0,B.p),q)}}
C.UZ.prototype={
R(){return new C.bjJ()}}
C.bjJ.prototype={
gc6w(){var w=this.d
return w===$?this.d=this.a.c:w},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aH(d,n,x.w).w,l=x.p,k=A.a([D.eLT,D.eLZ],l)
for(w=0;w<8;++w){v=D.a6X[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.IX:B.An
q=t===s
r=A.V(r,q?B.eQ:B.bX,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.b6,A.c(v.b,n,n,n,n,n,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aa,new A.bu(1,B.b9,A.c(v.c,n,1,B.a2,n,n,n,B.wq,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ax(B.eQ,2,B.r,-1)
s=new A.p(n,n,new A.bE(p,p,p,p),new A.bc(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.aA(n,new A.C(B.f4,A.w(A.a([new A.C(B.mB,new A.bZ(B.aJ,B.e,B.i,B.l,n,B.p,n,0,r,n),n),A.q(n,new A.dp(!0,new C.anP(v,q.d,q.e,new C.dm3(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.B,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dm4(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.C(D.bIg,A.bI(D.hrr,n,new C.dm5(o,d),A.bp(B.b4,n,n,n,n,B.pu,n,n,new A.bb(A.n(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cO(new A.aY(0,1/0,0,m.a.b*0.9),A.ck(k,n,n,D.bMH,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nR.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bjb(d,e,f){return new C.nR(this.a,e,d,f)}}
C.IY.prototype={
xE(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.IY(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aIV(d){var w=null
return this.xE(w,w,w,w,w,d,w,w,w,w,w,w)},
cTW(d){var w=null
return this.xE(w,w,w,w,d,w,w,w,w,w,w,w)},
bj9(d,e,f){var w=null
return this.xE(d,w,w,w,w,w,w,w,e,w,f,w)},
cUA(d){var w=null
return this.xE(w,w,w,w,w,w,d,w,w,w,w,w)},
cUJ(d){var w=null
return this.xE(w,w,w,w,w,w,w,w,w,d,w,w)},
cTU(d){var w=null
return this.xE(w,w,w,d,w,w,w,w,w,w,w,w)},
cUL(d){var w=null
return this.xE(w,w,w,w,w,w,w,w,w,w,w,d)},
cTR(d){var w=null
return this.xE(w,w,d,w,w,w,w,w,w,w,w,w)},
cTM(d){var w=null
return this.xE(w,d,w,w,w,w,w,w,w,w,w,w)},
Hf(d){var w=null
return this.xE(w,w,w,w,w,w,w,d,w,w,w,w)},
cUU(d,e,f,g,h,i,j,k,l,m,n){return this.xE(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cRo(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bVm(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.h.L(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cW(d.h(0,n))).length!==0?B.a.i(A.cW(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cW(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.EX.geF(D.EX))
s=i==null?o:B.h.D(i,18,36)
r=l.$2("position",D.a8J)
q=l.$2("frame",D.a82)
l=l.$2("texture",D.a7Z)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cW(d.h(0,"author"))):o
return this.cUU(p,u,t,q,r,A.qX(d.h(0,"ribbon"))?A.DQ(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a0O.prototype={
R(){return new C.aDL(A.a([],x.I),D.Qc)},
ge8(){return this.c}}
C.aDL.prototype={
Z(){var w,v=this
v.a4()
v.f=A.AH(0,1)
w=$.ay()
v.z=new A.au(B.aw,w)
v.Q=new A.au(B.aw,w)
v.lq()
w=v.a
C.bHX(w.c,w.d).bB(new C.dmK(v),x.fL)},
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
lq(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mp(s.c,s.d),$async$lq)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.dmy(t,r))
t.aAc()
case 1:return A.h(u,v)}})
return A.i($async$lq,v)},
gawJ(){var w,v=this
if(!J.ch(v.d)){w=v.r
w=w<0||w>=J.ab(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
aAc(){var w,v,u=this.gawJ(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb_(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb_(0,w==null?"":w)},
clw(d){this.l(new C.dmv(this,d))
this.aAc()},
Pi(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Pi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nR(B.n.v(1000*Date.now()),"Untitled page","",new A.W(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aVj(r.c,r.d,s),$async$Pi)
case 3:w=4
return A.b(t.lq(),$async$Pi)
case 4:if(t.c==null||J.ch(t.d)){w=1
break}q=J.nM(t.d,new C.dm6(s))
p=q>=0?q:J.ab(t.d)-1
t.l(new C.dm7(t,p))
t.aAc()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.CM(p+1,B.cn,B.lc),$async$Pi)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Pi,v)},
Cn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Cn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.d()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.d()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gawJ()
s=s==null?null:s.a
if(s==null)s=B.n.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aVj(o.c,o.d,new C.nR(s,r,q,new A.W(p,0,!1))),$async$Cn)
case 3:w=4
return A.b(t.lq(),$async$Cn)
case 4:if(t.c==null){w=1
break}t.l(new C.dmz(t))
case 1:return A.h(u,v)}})
return A.i($async$Cn,v)},
Q0(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Q0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gawJ()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dmf(r),s,null,!0,!0,x.y),$async$Q0)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bHG(s.c,s.d,r.a),$async$Q0)
case 4:t.l(new C.dmg(t))
w=5
return A.b(t.lq(),$async$Q0)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.W6(B.n.D(t.r+1,0,J.ab(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Q0,v)},
zU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Cn(),$async$zU)
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
return A.b(C.T_(s,r.r,o,p,q),$async$zU)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hXy(s,r.x,r.r),$async$zU)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Mp(s.c,s.d),$async$zU)
case 10:l=e
for(s=n.d,r=J.cK(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.K(l,new C.nR(""+(m+k),q,B.a.i(j.b),new A.W(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BV(r.c,r.d,l),$async$zU)
case 11:w=12
return A.b(t.lq(),$async$zU)
case 12:r=t.c
if(r==null){w=1
break}r.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zU,v)},
a3u(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a3u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Cn(),$async$a3u)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzS(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.du(D.AN,new C.dmw(t),new C.dmx())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.ne("Our Family",o,"",""))
for(o=J.aL(t.d);o.A();){n=o.gO(o)
p.push(new H.ne(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hyf(o,new H.tc(s,r,"",p,new H.vy(q.d,null,null,null,null,"","","")),null),$async$a3u)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a3u,v)},
PI(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$PI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Cn(),$async$PI)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bX(D.ajm,null,new C.dmb(t),s,!0,!0,!0,I.aca,!1,!1,x.N),$async$PI)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cTW(r)
t.l(new C.dmc(t,q))
s=t.a
w=7
return A.b(C.TC(s.c,s.d,q),$async$PI)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PI,v)},
Zs(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bX(D.ajm,null,new C.dmh(t),r,!0,!0,!0,I.aca,!1,!1,x.e),$async$Zs)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.dmi(t,s))
r=t.a
w=4
return A.b(C.TC(r.c,r.d,s),$async$Zs)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.CM(0,B.ed,B.nm)
case 1:return A.h(u,v)}})
return A.i($async$Zs,v)},
bYG(d){var w=d.bU(),v=B.a.b1(B.n.v(w.gci()),2,"0"),u=B.a.b1(B.n.v(w.gcC()),2,"0")
return""+w.gcm()+"-"+v+"-"+u},
gzS(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
C(d){var w,v,u,t,s,r=this,q=null,p=r.c5K()
if(r.e)w=D.ai1
else if(J.ch(r.d)){w=r.y
v=r.gzS(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fOG,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a4(q,330,new A.C(X.apV,new C.a0_(w,v,0,q),q),q),B.by,t,B.aj,A.c(u,q,q,q,q,q,q,A.l(q,q,D.l8.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.q(q,D.fxL,B.f,q,q,new A.p(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.e1.j(0.45),B.J,18)],x.V),E.xO,B.m),q,q,q,q,B.PR,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcQq(),q,q,q,q,q,q,!1,B.a4))
w.push(B.S)
w.push(A.hA(D.c_q,D.hqT,r.gaRX(),q))
B.d.u(u,w)}w=A.at(A.cb(A.w(u,B.l,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ab(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.l8.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.e9:B.yS
u=A.w(A.a([new A.C(D.bJo,w,q),A.E(A.Kn(v,new C.dmI(r),J.ab(r.d)+1,q,r.gclv(),u,B.aJ),1),r.bKK()],x.p),B.l,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c6(q,D.a0g,new A.am(B.a0,q,B.b7,B.t,A.a([D.aTZ,A.bm(!0,A.w(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c5K(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cM(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Lo(B.eb,"AI",h.gbIx(),!0))
if(h.a.f)f.push(new C.Lo(B.ma,"Cover",h.gbTw(),!1))
if(h.a.f)f.push(new C.Lo(B.xF,"Header",h.gbOm(),!1))
if(J.cM(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Lo(B.vJ,"Print",h.gcv4(),!1))
if(h.a.f&&J.cM(h.d)&&h.r>=0){v=h.w
u=v?B.h3:B.jn
t=v?"Save":"Edit"
f.push(new C.Lo(u,t,v?h.gcBu():new C.dms(h),!1))}if(h.a.f)f.push(new C.Lo(B.ii,"Add page",h.gaRX(),!1))
v=C.hSQ(h.y.Q)
u=h.gzS(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ab(h.d)
r=J.ab(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dVP
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(E.kI.j(0.5),1,B.r,-1)
j=A.q(g,A.V(l.a,D.l8,g,g,g,17),B.f,g,g,new A.p(g,g,new A.bE(i,i,i,i),new A.bc(k,k,k,k),g,new A.a7(B.a5,B.a9,B.w,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.l8.j(0.85)
p.push(new A.bu(1,B.b9,A.aA(B.c0,A.w(A.a([k,B.bs,A.c(l.b,g,1,g,g,g,g,new A.G(!0,j,g,g,g,g,9.5,B.C,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.anP(v,u,t+" \xb7 "+s+" "+r,new C.dmt(h),A.A(p,B.l,g,B.e,B.i,0,g,g),g)},
Bf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Cn(),$async$Bf)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aL(t.d);r.A();){q=r.gO(r)
s.push(q.b+" "+q.c)}p=H.a4U(B.d.aJ(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dm8(t,p),s,null,!0,!0,x.N),$async$Bf)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zU(),$async$Bf)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Ff(),$async$Bf)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.GT("Swahili (Kiswahili)",!0),$async$Bf)
case 18:w=16
break
case 17:w=19
return A.b(t.cMM(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Bf)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Bf,v)},
a0v(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.K(E.kI.j(0.3),B.r,1),r=x.p
return new A.C(B.cA,A.aN(!1,v,!0,A.q(w,A.A(A.a([A.q(w,A.V(e,B.c,w,w,w,21),B.f,w,w,new A.p(w,w,w,w,w,E.xO,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.w(A.a([A.c(f,w,w,w,w,w,w,A2.M3,w,w,w),A.c(g,w,w,w,w,w,w,B.BJ,w,w,w)],r),B.B,w,B.e,B.i,0,B.p),1)],r),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.p(u,w,s,t,w,w,B.m),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dmu(d,h),w,w,w,w,w,w,w),w)},
Ff(){return this.bY8()},
bY8(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Ff=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dml(r),a7,null,!0,!0,x.ei),$async$Ff)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eP("Working on it\u2026",$.ay())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.dmm(o),a7,null,!0,!0,x.H).fH(new C.dmn(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.bU(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ak()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.AN[a1]
J.bU(j,i.a)}w=8
return A.b(C.ajL(a0,a7,new C.dmo(o),d,l,e,j),$async$Ff)
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
if(l!=null&&a6.a)A.a6(l,!0).e3()
l=o
l.six($.ay())
J.aVP(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.M(x.q).f
j=n
l.T(A.b2(null,null,null,null,null,B.t,null,A.c(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcp(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ab(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bjb(m.b.h(0,a4).b,a7,new A.W(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BV(j.c,j.d,l),$async$Ff)
case 11:w=12
return A.b(r.lq(),$async$Ff)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.AN[a1].a)
a5=l.cRo(j,12,a7)
l=r.a
w=15
return A.b(C.TC(l.c,l.d,a5),$async$Ff)
case 15:if(r.c!=null)r.l(new C.dmp(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.CM(0,B.ed,B.nm)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.M(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.cEH("Undo",new C.dmq(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ep,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ff,v)},
GT(d,e){return this.cMN(d,e)},
cMM(d){return this.GT(d,!1)},
cMN(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$GT=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eP("Starting\u2026",$.ay())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.dmB(a0),k,null,!0,!0,x.H).fH(new C.dmC(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.bU(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a5b(m,new C.dmD(a0)),$async$GT)
case 10:w=8
break
case 9:w=11
return A.b(C.bJx(new C.dmE(a0),m,a2),$async$GT)
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
if(o!=null&&f.a)A.a6(o,!0).e3()
o=a0
o.six($.ay())
J.aVP(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.M(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ab(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bjb(J.t(p,g).b,j.a,new A.W(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BV(k.c,k.d,o),$async$GT)
case 12:w=13
return A.b(r.lq(),$async$GT)
case 13:o=r.c
if(o==null){w=1
break}o=o.M(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.Y(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.cEH("Undo",new C.dmF(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$GT,v)},
bKK(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dm9(v):u
r=A.aI(u,u,u,u,A.V(D.bVT,s?D.l8:B.aS,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cM(v.d)&&!v.w&&v.r>=0)s=A.hA(A.V(B.xr,B.HD,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.HD,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbT6(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.l8.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ab(v.d)?new C.dma(v):u
return A.bm(!0,new A.C(D.bJb,A.A(A.a([r,s,A.aI(u,u,u,u,A.V(B.eO,t<J.ab(v.d)?D.l8:B.aS,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a0S.prototype={
R(){return new C.bk7(new A.au(B.aw,$.ay()))}}
C.bk7.prototype={
ga4E(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.ay()
w.W$=0
this.a3()},
gbWI(){switch(this.ga4E()){case"cover":var w=D.dho
break
case"book":w=D.dc6
break
default:w=D.dM6
break}return w},
C(d){var w,v,u,t,s,r,q=this,p=null,o=A.n(26),n=E.kI.j(0.5),m=x.p,l=A.A(A.a([D.dVQ,B.ar,D.bOX,A.aI(p,p,p,p,B.lK,p,p,p,new C.dow(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.iB(p,p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dox(q),q.ga4E()==="page",p,p,p,p))
if(q.a.d)k.push(A.iB(p,p,p,p,D.hle,p,new C.doy(q),q.ga4E()==="book",p,p,p,p))
k.push(A.iB(p,p,p,p,D.h7I,p,new C.doz(q),q.ga4E()==="cover",p,p,p,p))
k=A.bV(B.bF,k,B.bp,p,6,8)
j=B.c.j(0.07)
j=A.aO(p,B.M,!1,p,!0,B.t,p,A.aQ(),q.d,p,p,p,p,p,2,A.bB(p,new A.b6(4,A.n(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.jQ,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.dr,!0,B.a8,p,B.an,p,p,p,p)
w=A.a([],m)
for(v=q.gbWI(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,Af.M0,p,p,p)
w.push(A.lN(p,B.c.j(0.08),p,r,B.hJ,new C.doA(q,s),p,p,p,p))}return A.eF(p,E.CU,A.cb(A.w(A.a([l,B.S,D.hoG,B.aj,k,B.ae,j,B.N,A.bV(B.bF,w,B.bp,p,6,6),B.az,A.dg(D.c_n,p,D.hpt,new C.doB(q,d),A.bp(B.b4,p,p,p,p,B.pu,p,p,new A.bb(A.n(16),B.a1),p,p,p)),B.at,D.hjm],m),B.B,p,B.e,B.P,0,B.p),B.t,p,B.y,p,p,B.f7,p,p,B.ah),p,p,p,B.PP,p,B.db,p,new A.bb(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a0Q.prototype={
R(){return new C.aDO(A.a([],x.gA))},
ge8(){return this.c}}
C.ahu.prototype={}
C.aDO.prototype={
Z(){this.a4()
this.lq()},
lq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.T2(p.c,p.d),$async$lq)
case 3:o=e
n=A.a([],x.gA)
p=J.aL(o)
case 4:if(!p.A()){w=5
break}s=p.gO(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bHX(r.c,q),$async$lq)
case 6:j=e
i=J
w=7
return A.b(C.Mp(t.a.c,q),$async$lq)
case 7:m.push(new l.ahu(k,j,i.ab(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.dmZ(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lq,v)},
bel(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Sl(d,e){return this.cna(0,e)},
cna(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Sl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ca(A.e4(new C.dmY(u,e),!0,null,x.y)),$async$Sl)
case 2:t=g
w=3
return A.b(u.lq(),$async$Sl)
case 3:if(t===!0&&u.c!=null)u.c.M(x.q).f.T(D.aY3)
return A.h(null,v)}})
return A.i($async$Sl,v)},
GV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$GV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.M(x.q).f.T(D.aXZ)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aj4(s.c,s.d),$async$GV)
case 5:q=e
w=6
return A.b(t.lq(),$async$GV)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Sl(0,B.d.f9(t.d,new C.dn2(q))),$async$GV)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.T_(p,s.f,r,n,o),$async$GV)
case 10:m=e
w=11
return A.b(t.lq(),$async$GV)
case 11:if(m&&t.c!=null)t.c.M(x.q).f.T(D.aY3)
case 1:return A.h(u,v)}})
return A.i($async$GV,v)},
RK(d,e){return this.cz8(0,e)},
cz8(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$RK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dn1(t,e),s,null,!0,!0,x.y),$async$RK)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a5m(s.c,s.d,e.a),$async$RK)
case 4:w=5
return A.b(t.lq(),$async$RK)
case 5:case 1:return A.h(u,v)}})
return A.i($async$RK,v)},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bKN(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.K(E.kI.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fD(0.7142857142857143,A.q(n,A.w(A.a([D.dVR,B.ae,D.eKR,B.at,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.l8.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.ba,B.i,0,B.p),B.f,n,n,new A.p(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcQm(),n,n,n,n,n,n,!1,B.a4))}w=A.n(22)
v=A.K(E.kI.j(0.85),B.r,1.6)
s=A.aA(n,A.q(n,D.c7K,B.f,n,n,new A.p(B.v.j(0.3),n,A.K(E.kI.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dn3(d),n,n,n,n,n,n,!1,B.a4)
r=A.n(14)
q=B.v.j(0.3)
p=A.K(E.kI.j(0.5),B.r,1)
w=A.q(n,A.A(A.a([s,B.bd,D.bPk,A.q(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fNE,n,n,n),B.f,n,n,new A.p(q,n,p,r,n,n,B.m),n,n,n,n,B.hr,n,n,n)],l),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.p(n,n,v,w,n,D.cdP,B.m),n,n,n,Aa.PC,D.bH3,n,n,n)
if(o.e)k=D.ai1
else k=k.length===0?D.bhb:A.cg(new C.dn4(k))
return A.c6(n,D.a0g,new A.am(B.a0,n,B.b7,B.t,A.a([D.aTZ,A.bm(!0,A.w(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bKN(d){var w,v,u=this,t=null,s=u.bel(d),r=d.c,q=x.p,p=A.a([A.bT(0,new A.d8(B.dE,B.z,B.f,new A.a4(300,420,new C.a0_(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aA(t,A.q(t,D.c6Z,B.f,t,t,new A.p(B.v.j(0.55),t,A.K(B.aS,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dmW(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fNg,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.w(A.a([new A.fD(0.7142857142857143,new A.am(B.a0,t,B.ac,B.t,p,t),t),B.N,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.l8.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dmX(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.Lo.prototype={}
C.a0_.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.du(D.AN,new C.cUb(m),new C.cUc()),j=m.c,i=D.EX.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mN:B.ba
v=new C.cUd(h)
i=A.a([new A.ac(0,B.G,B.v.j(0.6),D.eHz,28)],x.V)
u=x.p
t=A.a([A.bT(0,A.b5(l,l,l,new C.bhh(j.x,h,l),B.aA),0,0,0),A.ao(0,A.q(l,l,B.f,l,l,new A.p(l,l,l,l,l,new A.a7(B.a5,B.a9,B.w,A.a([B.v.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cS(8,40+s*46,l,l,l,l,A.q(l,l,B.f,l,l,new A.p(h.j(0.7),l,l,new A.bc(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.apW,8,0.85,2.2),v.$4(D.bM6,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.apW,8,0.85,2.4))
else if(r==="corners")t.push(A.bT(0,new A.C(D.bM2,A.b5(l,l,l,new C.bh8(h,l),B.aA),l),0,0,0))
r=A.V(D.aF5[B.n.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.c(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aCg,l,l),B.K,l,l)
p=A.q(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.az,q,B.ae,p,B.ae,A.c(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cN,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aN,A.c(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.C,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bT(0,new A.C(D.bMz,A.w(o,B.l,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b5(l,l,l,new C.aL2(l),D.fCH),l,l,l,46,0,l))
return A.q(l,A.bv(D.agz,new A.am(B.a0,l,B.ac,B.t,t,l),B.ap),B.f,l,l,new A.p(l,l,l,D.agz,i,new A.a7(B.ax,B.aC,B.w,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bhh.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e7()
g.cV(11)
switch(this.b){case"plain":return
case"linen":$.U()
w=A.M()
w.r=B.v.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.m(0,t),new A.m(u,t),w)
$.U()
s=A.M()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.m(r,0),new A.m(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.U()
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.P(new A.m(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.U()
l=A.a([],n)
j=new A.aK(m.r,B.ak,null,null,l)
l.push(new A.b_(v,q))
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
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.U()
w=A.M()
w.r=B.v.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.P(new A.m(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.U()
h=A.M()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.P(new A.m(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aD(d){return d.b!==this.b||!d.c.B(0,this.c)}}
C.bh8.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.U(),j=A.M(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.af
j.c=2.4
j.d=B.bI
for(w=e.a,v=e.b,v=[D.fpj,new A.b3([w,0,-1,1]),new A.b3([0,v,1,-1]),new A.b3([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aK(k,B.ak,null,null,s)
s.push(new A.b_(r+p*34,q))
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
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=i.j(0.9).gp(0)
d.P(new A.m(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.B(0,this.b)}}
C.vh.prototype={}
C.a0l.prototype={
R(){return new C.bhf()}}
C.bhf.prototype={
goV(){var w=this.d
return w===$?this.d=this.a.c:w},
gzS(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.bd(w.b,B.bb,B.aP),$.ay())}return v},
gaG_(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.bd(w.c,B.bb,B.aP),$.ay())}return v},
gavi(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.bd(w.y,B.bb,B.aP),$.ay())}return v},
t(){var w=this,v=w.gzS(0),u=v.V$=$.ay()
v.W$=0
v=w.gaG_()
v.V$=u
v.W$=0
v=w.gavi()
v.V$=u
v.W$=0
w.a3()},
avV(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.iB(s,s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.dde(this,f,u),e===u,s,s,s,s))}return A.bV(B.bF,r,B.bp,s,6,8)},
aBJ(d){var w=null,v=B.c.j(0.07)
return A.bB(w,new A.b6(4,A.n(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.mi,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
C(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goV(),a0=f.gzS(0),a1=a0.a.a,a2=f.gaG_(),a3=a2.a.a,a4=f.gavi(),a5=d.bj9(a4.a.a,a3,a1)
a1=x.w
a3=A.aH(a6,e,a1).w
a1=A.aH(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a4(190,260,new A.d8(B.dE,B.z,B.f,new A.a4(270,370,new C.a0_(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aO(e,B.M,!1,e,!0,B.t,e,A.aQ(),a0,e,e,e,e,e,2,f.aBJ("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.ddD(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.dr,!0,B.a8,e,B.an,e,e,e,e)
a2=A.aO(e,B.M,!1,e,!0,B.t,e,A.aQ(),a2,e,e,e,e,e,2,f.aBJ("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.ddE(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.dr,!0,B.a8,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.AN[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aS
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.q(e,e,B.f,e,e,new A.p(e,e,new A.bE(o,o,o,o),e,e,new A.a7(B.ax,B.aC,B.w,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aE
v.push(A.aA(e,A.w(A.a([p,B.cR,A.c(t.b,e,e,e,e,e,e,new A.G(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.ddF(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bV(B.bF,v,B.bp,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b4.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.eQ:B.L,2,B.r,-1)
q.push(A.aA(e,A.q(e,A.V(D.aF5[n],B.c,e,e,e,24),B.f,e,e,new A.p(p,e,new A.bE(o,o,o,o),new A.bc(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.ddG(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bV(B.bF,q,B.bp,e,8,8)
a4=A.aO(e,B.M,!1,e,!0,B.t,e,A.aQ(),a4,e,e,e,e,e,2,f.aBJ("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.ddH(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.dr,!0,B.a8,e,B.an,e,e,e,e)
p=A.c("LETTERING COLOUR",e,e,e,e,e,e,N.wt,e,e,e)
m=A.a([],w)
for(l=D.EX.gdW(D.EX),l=l.gae(l);l.A();){k=l.gO(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eQ:B.aS
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.q(e,e,B.f,e,e,new A.p(j,e,new A.bE(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aE
m.push(A.aA(e,A.w(A.a([j,B.bs,A.c(i,e,e,e,e,e,e,new A.G(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.ddI(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bV(B.bF,m,B.bp,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,N.wt,e,e,e)
k=f.goV()
return new A.C(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cO(new A.aY(0,1/0,0,a1.a.b*0.92),A.ck(A.a([D.hiN,B.ae,d,B.aN,a0,B.S,a2,B.az,D.hpe,B.N,v,B.az,D.hiW,B.N,q,B.az,a4,B.az,p,B.N,m,B.az,l,A.kT(e,9,e,""+B.h.S(f.goV().f),36,18,e,new C.ddJ(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,N.wt,e,e,e),B.aj,f.avV(D.a8J,f.goV().r,new C.ddK(f),D.dPw),B.ae,A.c("BORDER",e,e,e,e,e,e,N.wt,e,e,e),B.aj,f.avV(D.a82,f.goV().w,new C.ddL(f),D.dPC),B.ae,A.c("COVER MATERIAL",e,e,e,e,e,e,N.wt,e,e,e),B.aj,f.avV(D.a7Z,f.goV().x,new C.ddN(f),D.dRi),B.aj,A.ji(e,B.b4,e,B.ag,e,new C.ddO(f),e,e,e,D.hcV,f.goV().z),B.by,A.bI(D.hhs,e,new C.ddP(f,a6),A.bp(B.b4,e,e,e,e,B.pu,e,e,new A.bb(A.n(16),B.a1),e,e,e))],w),e,e,S.apn,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aL2.prototype={
a5(d,e){var w,v,u,t=new A.aK($.U().r,B.ak,null,null,A.a([],x.v))
t.E(new A.b_(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bA())
u=A.M()
u.san(D.cew.az(0,new A.a5(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.bmH.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.U()
w=A.M()
w.san(D.cdw.az(0,new A.a5(0,0,a2,a3)))
a4.aE(new A.a5(0,0,a2,a3),w)
v=B.h.cB(a1/112)
u=new A.e7()
u.cV(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.dhn[u.aw(9)]
j=u.aw(14)
J.bt(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a5(n,j,n+m,j+l)
h=A.bx(i,B.hI)
g=new A.ar(B.V,B.R,B.X,B.Y,B.W)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.v,0.45)
e.toString
g.san(new A.a7(B.a5,B.a9,B.w,A.a([f,k,e],w),d,d).az(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.V,B.R,B.X,B.Y,B.W)
e.r=E.kI.j(0.55).gp(0)
a4.aE(new A.a5(g,j,h,j+2),e)
e=new A.ar(B.V,B.R,B.X,B.Y,B.W)
e.r=E.kI.j(0.4).gp(0)
a4.aE(new A.a5(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.san(D.ccO.az(0,new A.a5(0,r,a2,q)))
a4.aE(new A.a5(0,r,a2,q),p)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.v.j(0.5).gp(0)
p.y=B.le
a4.aE(new A.a5(0,q,a2,q+14),p)}t=A.M()
t.r=D.bl1.j(0.72).gp(0)
a4.aE(new A.a5(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.M()
a3.san(new A.bW(B.z,0.5,B.w,d,0,A.a([D.btC.j(0.22),B.L],w),d,d).az(0,A.c0(new A.m(t,a1),a0)))
a4.P(new A.m(t,a1),a0,a3)},
aD(d){return!1}}
C.bfp.prototype={
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aD(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cS(14,w*2,v*2.2,v*2,o,o,new A.bP(new A.p(A.ap(D.l8,D.byX,w/4),o,new A.bE(B.a1,new A.ax(B.v.j(0.12),1,B.r,-1),B.a1,B.a1),B.Nf,o,o,B.m),B.bn,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.v.j(0.35),B.aPu,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.q(o,o,B.f,o,o,new A.p(E.kI.j(0.6),o,o,new A.bc(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.q(o,A.w(t,B.l,o,B.rL,B.i,0,B.p),B.f,o,o,new A.p(o,o,o,D.b9b,u,D.ceu,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.v.j(0.4),B.dv,18)],v)
t=A.ao(o,A.b5(o,o,o,new C.aL2(o),D.fCC),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aZc(p.y,r,L.jj,o))
r=n.d
q=p.x
if(p.f)n=A.w(A.a([A.aO(o,B.M,!1,o,!0,B.t,o,A.aQ(),p.r,o,o,o,o,o,2,A.bB(o,B.f_,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.jj.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.h1y,!0,B.a8,o,B.an,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.jj.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aO(o,B.M,!1,o,!0,B.t,o,A.aQ(),p.w,o,o,o,o,o,2,A.bB(o,B.f_,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.jj.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.am,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.fSN,!0,B.a8,B.BF,B.an,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.h1q,o,o,o),B.at,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.jj.j(0.5),o,o,o,o,o,o,o,o,11,B.cN,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.A(A.a([A.E(A.q(o,o,B.f,D.Hn.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fF,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.Hn.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.q(o,o,B.f,D.Hn.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.i,0,o,o),B.az],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.jj.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.GK(A.cX(A.a([A.cX(o,o,o,o,o,o,o,o,o,D.fW6,B.a.av(k,0,1)),A.cX(o,o,o,o,o,o,o,o,o,o,B.a.aV(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.jj.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cb(A.w(n,B.B,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.C(B.hq,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.jj.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.q(o,A.bv(B.Nf,new A.am(B.a0,o,B.ac,B.t,A.a([t,new A.C(D.bLA,A.w(s,B.al,o,B.e,B.i,0,B.p),o),A.ao(0,new A.bP(new A.p(o,o,o,o,o,new A.a7(B.a5,B.a9,B.w,A.a([B.v.j(0.16),B.L],x.O),o,o),B.m),B.bn,o,o),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.p(o,o,o,B.Nf,v,D.cf0,B.m),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.am(B.a0,o,B.ac,B.t,l,o)}}
C.anQ.prototype={
R(){return new C.anR(new A.eP(0,$.ay()),new C.bXa(),new C.ao8(),D.i3C,null,null)},
gd8(){return this.d}}
C.a3b.prototype={
a9(){return"_Step."+this.b}}
C.anR.prototype={
gDy(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHT(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghm(d){var w,v=this,u=v.e
if(u===$){w=C.NM(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gVn(){var w=this.ghm(0)
return w.gAc()==null?"Babu":B.a.i(w.gAc().b)},
Z(){var w,v=this
v.a4()
w=v.ghm(0).gAc()
w=w==null?null:w.c
v.r.b=w===D.p4
w=v.qr(new C.bVw(v))
w.fY(0)
v.x!==$&&A.aU()
v.x=w
v.a4A("Come closer, my children. I am "+v.gVn()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bA3()},
a4A(d){var w=this,v=w.y
if(v!=null)v.a2(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.d5(E.a2_,new C.bVq(w))},
bwp(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a2(0)
v.l(new C.bVz(v))},
ag9(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bwh(){return this.bdT()},
bdT(){var w=this,v=w.gDy()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bVr(w))
w.a4A(u)
v=w.z
if(v!=null)v.a2(0)
w.z=A.cE(B.o4,new C.bVs(w))},
cRv(){var w=this
w.l(new C.bVv(w))
w.a4A(w.gDy()[w.as].a)},
Mt(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.afF)return
w=p.gDy()
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
t.r=s.a+1.5}q=new A.e7()
q.cV(v*7+d)
p.l(new C.bVu(p,d,u,q))
p.a4A(u?D.dz4[q.aw(4)]+" "+w[p.as].d:D.dvf[q.aw(3)]+" "+w[p.as].d)},
kU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gDy()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bKd(t.at,t.ay,p)
t.l(new C.bVx(t,s))
t.a4A(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Ce(t.a.d,s),$async$kU)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.Cf(r.d,r.c.a,"fire",t.at*10),$async$kU)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bVy())
w=1
break
case 4:++t.as
t.bdT()
case 1:return A.h(u,v)}})
return A.i($async$kU,v)},
C(d){var w=this,v=null,u=w.f,t=x.p
return A.c6(v,D.a_h,new A.am(B.a0,v,B.ac,B.t,A.a([A.bT(0,new A.ea(A.b5(v,v,v,new C.aZh(u,w.r,w.w,u),B.aA),v),0,0,0),A.bm(!0,A.w(A.a([w.cgR(0),B.aX,w.bVT()],t),B.l,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cgR(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,B.RL,s,s,s,new C.bVt(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gDy().length;++w){v=t.as
if(w<v||t.Q===D.b5s)v=B.d0
else v=w===v?B.c:B.aS
u=new A.aP(4,4)
p.push(A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,D.bGO,s,s,s,22))}p=A.E(A.w(A.a([D.h9C,A.A(p,B.l,s,B.e,B.i,0,s,s)],q),B.B,s,B.e,B.i,0,B.p),1)
v=A.n(14)
u=A.K(B.fP,B.r,1)
return new A.C(D.bML,A.A(A.a([r,p,A.q(s,A.c("\ud83d\udd25 "+B.h.S(t.cy*100)+"%",s,s,s,s,s,s,B.j_,s,s,s),B.f,s,s,new A.p(B.bc,s,u,v,s,s,B.m),s,s,s,s,B.hr,s,s,s)],q),B.l,s,B.e,B.i,0,s,s),s)},
bVT(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghm(0).gAc()
if(h==null)w=1
else w=h.c===D.p4?0:1
v=j.dx
u=j.db
t=D.r5.j(0.96)
s=A.n(22)
r=A.K(B.d0,B.r,3)
q=A.b5(i,i,i,new C.bsm(w,i),B.aA)
p=A.c(j.Q===D.afF?j.gVn()+" asks":"Elder "+j.gVn(),i,i,i,i,i,i,D.aZl,i,i,i)
o=j.db
o=B.a.av(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c0,A.A(A.a([new A.a4(62,62,q,i),B.ar,A.E(A.w(A.a([p,B.bs,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aZz,i,i,i)],n),B.B,i,B.e,B.i,0,B.p),1)],n),B.B,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbwo(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.aca("Sit down by the fire",j.gbwg()),i,i,i)
break
case 1:v=A.at(j.aca("Ask me, Elder",j.gcRu()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gDy()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ax(D.lY,2.5,B.r,-1)
v.push(A.aA(i,A.q(i,A.c(u[m],i,i,i,i,i,i,D.aZv,B.K,i,i),B.f,i,D.ahf,new A.p(D.amS,i,new A.bE(l,l,l,l),new A.bc(q,q,q,q),i,i,B.m),i,i,i,i,B.xg,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bVn(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bV(B.bF,v,B.bp,i,8,8)
break
case 3:v=j.fr
u=v?B.ko:Ao.at1
u=A.V(u,v?B.eu:D.lY,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.eu:D.lY,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gDy().length?"Finish":"Next story"
v=A.A(A.a([u,B.aa,q,j.aca(v,j.gqK(j))],n),B.l,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gDy().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aZO,i,i,i)],n)
u=j.cx
if(u>0){u=C.aTq(u)
q=C.aTq(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.ae8,i,i,i))}v.push(B.N)
v.push(j.aca("Back to the games",new C.bVo(j)))
v=A.w(v,B.l,i,B.e,B.i,0,B.p)
break
default:v=i}return A.q(i,A.w(A.a([o,B.S,v],n),B.B,i,B.e,B.P,0,B.p),B.f,i,i,new A.p(t,i,r,s,D.aGH,i,B.m),i,i,i,B.zy,B.bg,i,i,i)},
aca(d,e){var w=null,v=A.n(16),u=A.K(B.d0,B.r,2)
return A.aA(w,A.q(w,A.c(d,w,w,w,w,w,w,A2.M3,w,w,w),B.f,w,w,new A.p(D.lY,w,u,v,w,w,B.m),w,w,w,w,D.bKu,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bsm.prototype={
a5(d,e){O.hy0(d,e.er(B.J),e.gdl()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aDM.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b9()
this.b7()
this.bF()}}
C.bXa.prototype={}
C.tB.prototype={}
C.bsn.prototype={}
C.ao8.prototype={
NP(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.iw7(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aZh.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.Dg(l.d.NP(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bt(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bW(0,u)
l.cGG(d,j)
l.bUr(d,j)
l.cPc(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bt(t.save())
t.translate(225,580)
d.o_(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.U()
q=A.M()
p=x.O
o=x.n
q.san(A.wF(B.J,r,A.a([D.bxC.j(0.55*s),F.OS.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.w,k,k,0))
d.P(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bX2(l,d,j,i)),new A.y(540,new C.bX3(l,d,j,i)),new A.y(546,new C.bX4(l,d,j,i)),new A.y(574,new C.bX5(l,d,j,i)),new A.y(612,new C.bX6(l,d,j,i)),new A.y(650,new C.bX7(l,d,j,i)),new A.y(656,new C.bX8(l,d,j,i))],x.E)
B.d.aZ(n,new C.bX9())
for(m=0;m<7;++m)n[m].b.$0()
l.bL5(d,j,i)
l.bY6(d,j)
t.restore()
$.U()
t=A.M()
t.san(A.wF(new A.m(w/2,v*0.6),e.gaqE()*0.75,A.a([B.L,D.bkV],p),A.a([0.55,1],o),B.w,k,k,0))
d.aE(new A.a5(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cGG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e7()
h.cV(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=t.gp(0)
d.P(new A.m(v*450,20+u*300),0.8+s*1.1,r)}q=B.h.F(e,17)/1.2
if(q<1){p=new A.m(60+q*220,70+q*90)
d.ah(p,p.aI(0,D.eH5),C.iW(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.h.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.U()
k=A.a([],t)
l=new A.aK(l.r,B.ak,null,null,k)
m=r+m*4
k.push(new A.b_(s-6,m))
l.ac()
j=r-3
r=new A.co(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.aj(i)
l.ac()
s=new A.co(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.aj(r)
l.ac()
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.b=B.af
s.c=1.6
s.r=D.bnG.gp(0)
s.d=B.bI
s.e=B.dR
d.af(l,s)}},
bUr(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aDA[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.c1(new A.m(p,m),n*0.74,q*0.5)
k=Ae.zk.j(v)
$.U()
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=k.gp(0)
d.c4(l,j)
q=A.c1(new A.m(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.wT.j(u).gp(0)
d.c4(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.h.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.r=D.aka.j(0.16*(1-h)).gp(0)
d.P(new A.m(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cPc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bHe(d,D.eH1,0.9,e,D.hYu,!1,!1,D.b5p,1,!1)
w=$.U().r
v=x.v
u=new A.aK(w,B.ak,g,g,A.a([],v))
u.E(new A.b_(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bA())
t=A.M()
t.r=D.am7.gp(0)
d.af(u,t)
C.bHe(d,D.eH3,0.95,e,D.hYi,!1,!1,D.b5q,1,!0)
t=new A.aK(w,B.ak,g,g,A.a([],v))
t.E(new A.b_(417,510))
t.E(new A.co(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.co(431,553,421,548))
t.E(new A.bA())
u=A.M()
u.r=F.H2.gp(0)
d.af(t,u)
u=A.c1(D.eH2,8,28)
t=A.M()
t.r=D.bA2.gp(0)
d.c4(u,t)
C.bHe(d,new A.m(-30+B.h.F(e/26,1)*510,492),0.82,e,D.hYw,!0,!1,D.Z3,1,!1)
t=B.h.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c4(A.c1(new A.m(s+q*16,r-6),16,11),C.iW(D.alZ,1.8))
u=q<0
C.bHe(d,new A.m(s-q*6,r),0.62,e,D.hYz,!1,u,D.Z3,2.2,!1)
C.bHe(d,new A.m(s-q*32,r+4),0.58,e+1,D.hYq,!1,u,D.Z3,2.2,!1)
this.c_S(d,D.eGH,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.n.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.c1(new A.m(o,n),8,11)
k=p===1
j=k?D.alV:D.amy
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.r=j.gp(0)
d.c4(l,i)
l=k?D.alV:D.amy
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=l.gp(0)
d.P(new A.m(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.b=B.af
k.c=1
k.r=B.as.gp(0)
k.d=B.bI
k.e=B.dR
d.ah(new A.m(o+7.5,n+(-2+m)),new A.m(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.b=B.af
k.c=1
k.r=B.as.gp(0)
k.d=B.bI
k.e=B.dR
d.ah(new A.m(o,n+4),new A.m(o,n+8),k)}h=e<f.f
u=A.c1(D.ab1,15+Math.sin(e*2)*0.8,40)
t=A.M()
t.r=D.aky.gp(0)
d.c4(u,t)
u=A.c1(D.ab1.a6(0,new A.m(-14,h?-9:-2)),12,15)
t=A.M()
t.r=D.bpU.gp(0)
d.c4(u,t)
t=new A.aK(w,B.ak,g,g,A.a([],v))
t.E(new A.b_(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bA())
u=A.M()
u.r=D.bq5.gp(0)
d.af(t,u)
u=D.ab1.a6(0,new A.m(-17,h?-9:-2))
t=A.M()
t.r=B.iv.gp(0)
d.P(u,1.1,t)
v=new A.aK(w,B.ak,g,g,A.a([],v))
v.E(new A.b_(168,590))
w=Math.sin(e*8)
v.E(new A.co(180,588+w*(h?6:0),178,595))
d.af(v,C.iW(D.aky,3.5))},
c_S(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a6(0,new A.m(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.b=B.af
m.c=2
m.r=D.a_v.gp(0)
m.d=B.bI
m.e=B.dR
d.ah(new A.m(u+o,s),new A.m(u+(o+n*1.5),q),m)}w=A.c1(k,17,32)
v=$.U()
r=A.M()
r.r=D.H0.gp(0)
d.c4(w,r)
r=A.c1(k.a6(0,D.eG7),7,26)
w=A.ap(D.H0,B.v,0.12)
w.toString
q=A.M()
q.r=w.gp(0)
d.c4(r,q)
v=new A.aK(v.r,B.ak,null,null,A.a([],x.v))
v.E(new A.b_(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bA())
s=A.M()
s.r=D.H0.gp(0)
d.af(v,s)
s=A.c1(k.a6(0,new A.m(24,-7+l)),9,12)
v=A.M()
v.r=D.H0.gp(0)
d.c4(s,v)
v=-11+l
d.ah(k.a6(0,new A.m(22,v)),k.a6(0,new A.m(21,-17+l)),C.iW(D.a_v,1.6))
d.ah(k.a6(0,new A.m(26,v)),k.a6(0,new A.m(28,-16+l)),C.iW(D.a_v,1.6))
v=k.a6(0,new A.m(26,-8+l))
s=A.M()
s.r=B.v.gp(0)
d.P(v,0.9,s)
d.ah(k.a6(0,new A.m(26,-3+l)),k.a6(0,new A.m(26,1+l)),C.iW(D.bsR,1.4))
d.ah(k.a6(0,D.eJ3),k.a6(0,new A.m(-19,-7+Math.sin(f*7)*2)),C.iW(D.H0,2.4))},
bY4(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.c1(new A.m(225+u*36,574+(t*13+6)),8,11)
$.U()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.byF.gp(0)
a6.c4(u,t)}}u=A.c1(D.ab3.a6(0,B.cC),17,52)
$.U()
t=A.M()
t.r=D.bkt.gp(0)
a6.c4(u,t)
t=A.c1(D.ab3.a6(0,B.cC),12,44)
u=D.bo6.j(0.6+0.3*Math.sin(a7*6))
s=A.M()
s.r=u.gp(0)
a6.c4(t,s)
for(r=0;r<3;++r){v=D.duE[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.af
o.c=7
o.r=D.He.gp(0)
o.d=B.bI
o.e=B.dR
a6.ah(new A.m(u+t*24,579+s*4),new A.m(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Cx.j(0.6)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.b=B.af
n.c=2
n.r=t.gp(0)
n.d=B.bI
n.e=B.dR
a6.ah(new A.m(u+o*24,579+(p*4-2)),new A.m(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.fld,D.flO,D.fmY,D.fni,D.fmW]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bvV,D.bsd,D.by4][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.U()
f=A.a([],q)
a2=new A.aK(g.r,B.ak,null,null,f)
f.push(new A.b_(a0-a1,578))
a2.ac()
g=a0+d*0.6
a3=new A.i7(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.aj(a4)
a2.ac()
g=new A.i7(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.aj(a3)
a2.ac()
g=new A.bA()
f.push(g)
f=a2.f
if(f!=null)g.aj(f)
a2.ac()
g=new A.ar(B.V,B.R,B.X,B.Y,B.W)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.h.F(a7*(0.35+B.n.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.n.F(w,3)
p=G.amw.j((1-a5)*0.9)
$.U()
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.r=p.gp(0)
a6.P(new A.m(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.h.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.aka.j(0.1*(1-a5))
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=q.gp(0)
a6.P(new A.m(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bY6(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.h.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.n.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bAd.j(0.18*p)
$.U()
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.r=o.gp(0)
d.P(new A.m(r,q),5,n)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.r=D.btH.j(0.9*p).gp(0)
d.P(new A.m(r,q),1.4,n)}},
ca6(d,e){switch(d){case 0:return e.b?D.hYk:D.b4C
case 1:return e.b?D.hYy:D.b4A
case 2:return D.b4z
case 3:return D.b4y
case 4:return D.b4B
default:return D.b4D}},
aGe(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
SE(d,e,f,g){var w,v=this,u=D.a8a[e],t=v.ca6(e,g),s=new C.bsn(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a8a[e],l=e===0
m=B.h.D(((l?D.aPm:D.aPs).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.ab9
s.as=D.Fp
if(l){s.a=o?v.aGe(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.m(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.m(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.Fp
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.eGf
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.eHD
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
s.Q=D.eK_
s.as=D.aPF}if(e===2&&g.x!=null&&f<g.y){s.a=v.aGe(f,5)
s.b=0.4
s.as=new A.m(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aGe(f,e*3)
s.b=0.5
s.c=0.4}}C.hRp(d,u.a,u.b*1.2,t,s,f,e,null)},
bL5(d,e,f){var w=new C.bX1(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd6(d){return this.c}}
C.ahD.prototype={
a9(){return"_Stand."+this.b}}
C.afx.prototype={}
C.lT.prototype={}
C.bVM.prototype={
bFB(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aU()
this.c=s},
Ha(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bVN())
return r},
atV(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aQ4(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
ap1(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gAc(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.aZ(w,new C.bVO(this))
return B.d.gH(w)}}
C.awl.prototype={}
C.A2.prototype={}
C.amG.prototype={
gD5(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.X(w,new C.bQy(),A.T(w).k("X<1>")).gI(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Nu.prototype={
garY(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gD5(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d8b(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.garY(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lT(B.a.i(s.a),p,B.d.c8(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bdz.prototype={}
C.abB.prototype={}
C.bkZ.prototype={}
C.ahB.prototype={}
C.alY.prototype={
R(){return new C.alZ(B.bG,A.a([],x.cC),A.a([],x.e4),null,null)},
gd8(){return this.d}}
C.alZ.prototype={
gO6(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHT(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbee(){var w,v=this,u=v.e
if(u===$){w=v.qr(v.gcmz())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Z(){this.a4()
this.gbee().fY(0)},
t(){this.gbee().t()
this.bzZ()},
fY(d){this.l(new C.bOG(this))},
cmA(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fS(0,v)
if(w.c!=null)w.l(new C.bOB())},
bcx(){var w,v,u,t=this,s=t.r
B.d.a7(s)
w=t.gO6()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bkZ(u,(u+0.5)/v,w[t.x].b[u]))},
fS(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bs(w,new C.bOH())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.ccZ()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gO6()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.h.S((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.avu(v,0.8,B.d0)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.avu(m.cy,0.8,G.nR)
m.b1K("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.avu(q,0.88,D.lY)
p=m.gO6()[m.x]
n=p.c
if(u===n){m.b1K("The right gourd fell! It was "+p.b[n]+".")
return}}}},
avu(d,e,f){var w,v,u,t=new A.e7()
t.cV(B.h.S(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.ahB(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b1K(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.RL()}},
ccZ(){var w=this
if(w.x+1>=w.gO6().length){w.RL()
return}++w.x
w.bcx()},
RL(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$RL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gO6().length
r=C.bKd(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bOz())
w=2
return A.b(C.Ce(u.a.d,r),$async$RL)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.Cf(t.d,t.c.a,"catch",u.z),$async$RL)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bOA())
return A.h(null,v)}})
return A.i($async$RL,v)},
C(d){var w,v=this,u=null
if(v.CW)w=v.cgS()
else w=v.ch?v.cgT():A.at(new A.C(B.eA,A.w(A.a([D.b_N,B.N,D.hbk,B.S,D.hhx,B.ee,C.uQ("Play",v.gf6(v),B.d0,B.fT,D.fO)],x.p),B.l,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.u1("Calabash Catch",w,B.fh,u)},
cgT(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hS:B.IG
p.push(A.V(u,v?B.aD:B.bX,r,r,r,22))}p.push(B.aX)
v=s.x
u=s.gO6()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aZk,r,r,r))
p.push(B.bd)
v=A.n(14)
p.push(A.q(r,A.c(""+s.z,r,r,r,r,r,r,B.j_,r,r,r),B.f,r,r,new A.p(B.bz,r,r,v,r,r,B.m),r,r,r,r,A0.Dl,r,r,r))
p=A.A(p,B.l,r,B.e,B.i,0,r,r)
v=A.n(18)
t=A.K(B.d0,B.r,3)
return A.w(A.a([new A.C(D.bIb,p,r),A.q(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fVZ,B.K,r,r),B.f,r,r,new A.p(D.r5,r,t,v,r,r,B.m),r,r,r,B.ez,B.bg,r,r,1/0),B.aj,A.E(A.cg(new C.bOF(s)),1)],q),B.l,r,B.e,B.i,0,B.p)},
cgS(){var w=this,v=null,u=A.at(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qH,v,v,v),v,v,v),t=A.at(A.c(""+w.Q+" of "+w.gO6().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Xo,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.ck(A.a([D.bhU,u,t,B.aN,new C.J_(s,r,w.cx,v),B.aN,A.at(C.uQ("Back to the games",new C.bOy(w),B.d0,B.k1,D.fO),v,v,v)],x.p),v,v,B.ad,v,v,B.ah,!1)}}
C.bg4.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.U(),a3=A.M()
a3.san(A.jU(B.J,new A.m(0,a0),D.das,G.aDR,B.w,e))
a4.aE(new A.a5(0,0,a1,0+a0),a3)
a3=A.M()
a3.r=G.OW.gp(0)
a4.P(new A.m(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aK(a2.r,B.ak,e,e,w)
a2=a0*0.7
v.E(new A.b_(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.aj(s)
v.ac()}v.E(new A.aq(d,a0))
v.E(new A.aq(0,a0))
a2=$.U()
w=A.M()
w.r=D.bp4.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aK(a2.r,B.ak,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.b_(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.co(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.co(r+14,t,r+26,w))
a2.E(new A.bA())
w=A.M()
w.r=D.aja.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cuK[q]
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.aja.gp(0)
s.c=7
s.d=B.bI
a4.ah(new A.m(r,a2),new A.m(r+p*46,w),s)
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.ais.gp(0)
a4.P(new A.m(r+p*50,t),18,s)}a2=a0*0.88
w=A.M()
w.r=D.bq2.gp(0)
a4.aE(new A.a5(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.akP.gp(0)
t.c=2
a4.ah(new A.m(w,a1),new A.m(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.c1(new A.m(u,s),12,54)
$.U()
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=D.lY.j(0.6).gp(0)
a4.c4(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bt(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.ajU.gp(0)
a4.P(D.eFv,14,m)
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.buZ.gp(0)
m.c=4
m.d=B.bI
a4.ah(D.eFw,D.eGD,m)
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.san(new A.anB(D.eIO,46,D.dkj,B.vT,B.w,e,e,0))
a4.P(B.J,34,m)
m=A.c1(D.eIU,8,12)
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=B.c.j(0.35).gp(0)
a4.c4(m,l)
k=new A.iU(new A.eH(n.c,e,e,B.cW,e,e,e,e,e,e,D.fTK),B.K,B.ca,new A.k3(1),e,e,3,e,B.cb,e,B.cK)
k.nO(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bx(A.c1(B.cO,m.gb4(m)+8,l),B.h6)
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=D.r5.gp(0)
a4.aq(j,l)
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=D.lY.gp(0)
l.b=B.af
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a5(a4,new A.m(-m/2,4-l.gb4(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.iAe(a4,new A.m(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.e1,(w+1)/2)
h=A.c1(new A.m(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aK($.U().r,B.ak,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.b_(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.co(h.gbD().a,s+8,w+8,s))
a3.E(new A.bA())
m=A.M()
m.r=D.a0l.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.Cx.gp(0)
m.c=1.4
a4.ah(new A.m(t,a2),new A.m(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.M()
s.r=G.nR.gp(0)
a4.aE(new A.a5(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.M()
s.r=D.bpa.gp(0)
a4.c4(new A.a5(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=g.e.j(B.h.D(s,0,1)).gp(0)
a4.P(new A.m(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.h1(e,B.cK,e,e,e,A.cX(e,e,e,e,e,e,e,e,e,A.l(e,e,B.d0.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Ey,e,e),"+"+a2),B.a8,B.ca,e,B.e6,B.cb)
k.eL()
k.a5(a4,new A.m(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.RE.prototype={
C(d){var w=this,v=null,u=w.e,t=A.b5(v,v,v,new C.aDK(w.c,w.f,v),B.aA),s=A.n(10),r=A.K(B.bH,B.r,1.4)
return new A.a4(u+22,v,A.w(A.a([new A.a4(u,u,t,v),B.cR,A.q(v,A.c(w.d,v,1,B.a2,v,v,v,D.fM4,v,v,v),B.f,v,v,new A.p(B.c,v,r,s,v,v,B.m),v,v,v,v,B.np,v,v,v)],x.p),B.l,v,B.e,B.P,0,B.p),v)},
ga0(d){return this.e}}
C.aDK.prototype={
a5(d,e){var w=e.er(B.J),v=e.gdl(),u=this.c?0.8:0
return O.hy0(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aC6.prototype={}
C.awW.prototype={
R(){return new C.awX(A.S(x.S,x.cq),null,null)},
gd8(){return this.d}}
C.awX.prototype={
gkZ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hXi(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaIl(){var w=this.z
return w===$?this.z=this.YW(0):w},
gjb(){var w,v=this.Q
if(v===$){w=this.gkZ()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c4(w,-1,!1,x.S)}return v},
YW(d){var w,v,u,t,s=this.gkZ()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aC6(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aC6(v[t],u[t],-1))
v=new A.e7()
v.cV(this.a.e*31+d)
B.d.e_(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.ds(w,w.r,w.e);w.A();){v=w.d
v.r.t()
v.r=null
u=v.eX$
u.b=!1
B.d.a7(u.a)
u=u.gp5()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.e2$.a.a7(0)
v.r_()}this.bAr()},
cXG(d,e){var w,v,u,t,s,r=this
if(d>=r.gjb().length||r.gjb()[d]!==-1||B.d.q(r.gjb(),e))return
w=r.gaIl()[e]
v=r.gkZ()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.cuU(r,e,w,v))
A.cE(B.m5,new C.cuV(r))
return}++r.r
u=A.br(null,B.hC,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.cuW(r,d,e,w,v))
u.cv(0)},
kU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkZ()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cI(n,0,new C.cuX())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.cuY(t,r))
w=5
return A.b(C.Ce(t.a.d,r),$async$kU)
case 5:t.x=f
o=t.a
w=6
return A.b(C.Cf(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kU)
case 6:t.ch=f
if(t.c!=null)t.l(new C.cuZ())
w=1
break
case 4:for(o=t.as,n=new A.ds(o,o.r,o.e);n.A();){q=n.d
q.r.t()
q.r=null
p=q.eX$
p.b=!1
B.d.a7(p.a)
p=p.gp5()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.e2$.a.a7(0)
q.r_()}o.a7(0)
t.l(new C.cv_(t))
case 1:return A.h(u,v)}})
return A.i($async$kU,v)},
C(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qH,p,p,p),p,p,p)
v=r.f
v=A.at(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Xo,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.u1(q,A.ck(A.a([D.ai0,w,v,B.aN,new C.J_(u,t,r.ch,p),B.aN,A.at(C.uQ("Back to the games",new C.cuQ(d),B.d0,B.k1,D.fO),p,p,p)],x.p),p,p,B.ad,p,p,B.ah,!1),B.fh,p)}w=r.gkZ()
v=r.e
s=w[v]
return new C.u1(q,new A.C(B.tN,A.w(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aZf,B.K,p,p),A.E(A.cg(new C.cuR(r,s)),1)],x.p),B.l,p,B.e,B.i,0,B.p),p),B.fh,p)}}
C.bfy.prototype={
a5(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.X(b2,new C.cVf(),A.T(b2).k("X<1>")).gI(0),b4=a9.b,b5=b4.a6(0,B.KN)
$.U()
w=A.M()
w.r=D.lZ.j(0.18+0.1*b3).gp(0)
b6.P(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a6(0,D.eFi)
u=A.M()
u.r=B.r6.j(0.5).gp(0)
u.c=10
u.d=B.bI
b6.ah(new A.m(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.ed.aB(0,B.h.D(b2[p],0,1))
l=$.U().r
k=A.a([],s)
j=new A.aK(l,B.ak,b0,b0,k)
k.push(new A.b_(u,b4))
j.ac()
o=new A.co((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.aj(n)
j.ac()
if(m<1)for(o=new A.aK(l,j.b,j.c,b0,A.bs(k,!0,r)),n=A.a([],q),i=new A.vf(o,!1,n);i.A();){h=i.c
if(h===0||i.f)A.bi(A.k_(b1));--h
g=new A.Cc(i,h)
f=0
for(;;){i.jY()
e=n[h].b
e===$&&A.d()
if(!(f<e.a.length()))break
i.jY()
e=n[h].b
e===$&&A.d()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.U()
a1=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a1.r=B.aS.gp(0)
a1.b=B.af
a1.c=3
b6.af(new A.aK(l,d,b0,new A.b3([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aK(l,j.b,j.c,b0,A.bs(k,!0,r)),n=A.a([],q),k=new A.vf(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.A();){a0=k.c
if(a0===0||k.f)A.bi(A.k_(b1));--a0
k.jY()
a1=n[a0].b
a1===$&&A.d()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.U()
a4=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a4.r=D.Ht.gp(0)
a4.b=B.af
a4.c=h
a4.d=B.bI
b6.af(new A.aK(l,a2,b0,new A.b3([new A.Cc(k,a0),0,a1*m,!0]),a3),a4)
k.jY()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jY()
a5=n[a0].Xl(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.c1(new A.m(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=B.bf.gp(0)
b6.c4(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iU(D.fLy,B.a8,B.ca,new A.k3(1),b0,b0,b0,b0,B.cb,b0,B.cK)
a8.eL()
a8.a5(b6,new A.m(w*(0.15+p*0.14),b2-B.n.F(p,3)*14))}},
aD(d){return!0}}
C.aAS.prototype={
R(){return new C.aAT(A.aR(x.S))},
gd8(){return this.d}}
C.aAT.prototype={
gkZ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hYd(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Z(){this.a4()
this.bcG()},
t(){var w=this.ch
if(w!=null)w.a2(0)
this.a3()},
bcG(){var w=this.ch
if(w!=null)w.a2(0)
this.ch=A.d5(B.tI,new C.cJQ(this))},
bu0(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkZ()[v.e]
if(w.e[d]===w.b)v.l(new C.cJY(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cJZ(v,d))
A.cE(B.j6,new C.cK_(v))}},
d2f(){var w=this
if(!w.as&&w.f<w.gkZ()[w.e].d.length)w.l(new C.cK0(w))},
kU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkZ()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a2(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.l(new C.cK1(t,s))
w=5
return A.b(C.Ce(t.a.d,s),$async$kU)
case 5:t.y=f
q=t.a
w=6
return A.b(C.Cf(q.d,q.c.a,"who",t.r),$async$kU)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cK2())
w=1
break
case 4:t.l(new C.cK3(t))
t.bcG()
case 1:return A.h(u,v)}})
return A.i($async$kU,v)},
C(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.c(""+a0.w+" of "+a0.gkZ().length+" guessed",a2,a2,a2,a2,a2,a2,B.qH,a2,a2,a2),a2,a2,a2)
v=A.at(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Xo,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.u1(a1,A.ck(A.a([D.bi6,w,v,B.aN,new C.J_(u,t,a0.ax,a2),B.aN,A.at(C.uQ("Back to the games",new C.cJS(a3),B.d0,B.k1,D.fO),a2,a2,a2)],x.p),a2,a2,B.ad,a2,a2,B.ah,!1),B.fh,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkZ()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.M9,B.K,a2,a2),B.S,A.at(A.l6(new C.cJT(a0,r),a2,B.b0,B.hC,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.az],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ax(B.d0,2,B.r,-1)
k=o+1
w.push(new A.rz(new A.bq(0,1,u),new C.cJU(),A.q(a2,new A.bZ(B.aJ,B.e,B.i,B.l,a2,B.p,a2,0,A.a([new A.r4(A.c(""+k,a2,a2,a2,a2,a2,a2,B.oB,a2,a2,a2),D.lY,a2,12,a2),B.ar,new A.bu(1,B.b9,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fYC,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.p(D.r5,a2,new A.bE(l,l,l,l),new A.bc(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cA,B.bg,a2,a2,a2),B.b0,B.j6,a2,new A.b9("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bG(!1,D.hpI,a2,a2,!0,a2,a2,a2,a0.gd2e(),a2,a2),a2,a2,a2))
w.push(B.N)
if(a0.as){u=D.lZ.j(0.2)
q=A.n(16)
p=A.K(D.lZ,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fU,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.q(a2,A.w(A.a([m,B.S,C.uQ(v,a0.gqK(a0),B.d0,B.jI,D.fO)],t),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.p(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bE,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dA:B.d0.j(0.2)
g=new A.aP(16,16)
l=new A.ax(n.q(0,o)?B.fs:B.d0,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bX:B.c
d=n.q(0,o)?B.yc:a2
t.push(new A.rz(new A.bq(0,i,u),new C.cJV(),A.aA(a2,A.q(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.G(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.ah7,new A.p(h,a2,new A.bE(l,l,l,l),new A.bc(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jG,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cJW(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b0,B.my,a2,new A.b9("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bV(B.fM,t,B.bp,a2,10,10))}return new C.u1(a1,A.ck(w,a2,a2,B.aoT,a2,a2,B.ah,!1),B.fh,a2)}}
C.aBR.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b9()
this.b7()
this.bF()}}
C.aJn.prototype={
b0(){this.b9()
this.b7()
this.dV()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdQ())
w.bd$=null
w.a3()}}
C.ahp.prototype={
att(d){},
au_(){var w=this,v=w.qr(new C.fj7(w))
v.fY(0)
w.Nf$!==$&&A.aU()
w.Nf$=v}}
C.aNh.prototype={
gbqk(d){var w=this.c
return B.a.av(w,0,Math.min(this.d,w.length))},
Xt(d){var w=this,v=w.b
if(v!=null)v.a2(0)
w.c=d
w.d=0
w.b=A.d5(E.a2_,new C.ftw(w))},
bwn(d){var w=this,v=w.b
if(v!=null)v.a2(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a2(0)}}
C.anZ.prototype={
R(){return new C.ao_(new C.ao8(),A.a([],x.t),new A.eP(0,$.ay()),$,0,null,null)},
gd8(){return this.d}}
C.ao_.prototype={
gO4(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHT(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghm(d){var w,v=this,u=v.e
if(u===$){w=C.NM(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqR(){var w=this.r
return w===$?this.r=new C.aNh(new C.bWy(this)):w},
gasj(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gO4()[v].c)u.push(1)
return u.length},
gbpz(){var w=this.ghm(0)
return w.gAc()==null?"Elder":B.a.i(w.gAc().b)},
Z(){this.a4()
this.au_()},
t(){var w,v=this
v.gqR().t()
v.f.t()
w=v.Nf$
w===$&&A.d()
w.t()
w=v.qy$
w.V$=$.ay()
w.W$=0
v.bA6()},
cRH(){var w=this
w.l(new C.bWv(w))
w.gqR().Xt(w.gO4()[w.x].a)},
Mt(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqR()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qy$.a
v.ax=u
v.ay=u+1
v.l(new C.bWt())
A.cE(B.hC,new C.bWu(v))},
btX(){var w=this.gasj(0)/this.gO4().length*100
if(w>=90)return D.fhT
if(w>=75)return D.ffA
if(w>=60)return D.f5z
if(w>=45)return D.f9d
return D.f_K},
C(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.czC()
w=A.bT(0,new A.ea(A.b5(m,m,m,new C.bwv(n,n.qy$),B.aA),m),0,0,0)
if(!n.Q){v=D.r5.j(0.96)
u=A.n(20)
t=A.K(B.d0,B.r,3)
u=A.q(m,A.w(A.a([A.c("Elder "+n.gbpz()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.b_c,B.K,m,m),B.S,C.uQ("Start the test",n.gCV(),B.d0,B.jn,D.fO)],x.p),B.l,m,B.e,B.P,0,B.p),B.f,m,m,new A.p(v,m,t,u,m,m,B.m),m,m,m,m,B.bE,m,m,m)
v=u}else{v=n.x
u=n.gO4()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.b_e,m,m,m)
if(n.Q){t=n.gqR()
t=t.d<t.c.length}else t=!1
if(t)u=D.fE1
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ax(D.Cx,4,B.r,-1)
s.push(A.aA(m,A.q(m,A.c(q[r],m,m,m,m,m,m,D.fPp,B.K,m,m),B.f,m,D.ah7,new A.p(D.bl_,m,new A.bE(o,o,o,o),new A.bc(p,p,p,p),m,m,B.m),m,m,m,m,B.PI,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bWw(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bV(B.fM,s,B.bp,new A.b9("o"+t,x.W),8,8)}u=A.w(A.a([v,B.aj,A.p1(u,B.nl,A.qh(),B.b0,B.b0,A.Ml())],x.p),B.l,m,B.e,B.P,0,B.p)
v=u}return new C.u1("Village School",new A.am(B.a0,m,B.ac,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fh,m)},
czC(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.btX(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gO4()[v].c)g.push(v)
u=A.n(22)
t=A.K(B.d0,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fU2,B.K,i,i)
r=A.c("Signed by Elder "+j.gbpz(),i,i,i,i,i,i,D.fSE,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fXY,i,i,i),D.eSa],q)
o=A.c(h.b,i,i,i,i,i,i,D.fZY,i,i,i)
n=j.gasj(0)
m=j.gO4()
u=A.q(i,A.w(A.a([D.hax,B.at,s,r,B.S,new A.am(B.z,i,B.ac,B.t,p,i),o,B.aj,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.ae8,i,i,i),B.N,D.aw3],q),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(D.r5,i,t,u,i,i,B.m),i,i,i,i,B.f7,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.az,new C.J_(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aN,D.hqN,B.N],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ax(B.bz,1,B.r,-1)
p=m[v]
u.push(A.q(i,A.w(A.a([A.c(p.a,i,i,i,i,i,i,B.h8,i,i,i),B.at,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fVh,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fXz,i,i,i)],q),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.dA,i,new A.bE(k,k,k,k),new A.bc(r,r,r,r),i,i,B.m),i,i,i,B.cA,B.bg,i,i,i))}B.d.u(s,u)}s.push(B.az)
s.push(A.at(C.uQ("Back to the games",new C.bWp(j),B.d0,B.k1,D.fO),i,i,i))
return new C.u1("Village School",A.ck(s,i,i,B.bR,i,i,B.ah,!1),B.fh,i)}}
C.bwv.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qy$.a
a0.Dg(e.f.NP(a1))
w=C.hsR(a1)
v=a0.c
J.bt(v.save())
v.translate(w.a,w.b)
a0.bW(0,w.c)
if(e.Q){u=e.gqR()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d49[s]-6
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=D.He.gp(0)
a0.aE(new A.a5(u,340,u+12,450),r)}u=A.bx(D.ac3.ct(10),B.im)
$.U()
r=A.M()
r.r=D.Cx.gp(0)
a0.aq(u,r)
r=A.bx(D.ac3,B.iF)
u=A.M()
u.san(A.jU(new A.m(30,96),new A.m(420,346),D.dqh,f,B.w,f))
a0.aq(r,u)
q=new A.e7()
q.cV(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.c1(new A.m(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=B.c.j(0.025).gp(0)
a0.c4(o,r)}u=A.M()
u.r=I.alF.gp(0)
a0.aE(new A.a5(30,354,420,362),u)
u=A.M()
u.r=B.aT.gp(0)
a0.aE(D.fvg,u)
u=A.M()
u.r=B.bO.gp(0)
a0.aE(D.fvk,u)
u=A.bx(D.fva,B.hw)
r=A.M()
r.r=D.a0l.gp(0)
a0.aq(u,r)
n=B.h.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqR().gbqk(0)
m=A.h1(f,B.cK,f,7,f,A.cX(f,f,f,f,f,f,f,f,f,D.h1j,u+(t?"|":"")),B.a8,B.ca,f,B.e6,B.cb)
m.nO(346)
J.bt(v.save())
u=A.hU(D.ac3)
r=$.lK()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hU(new A.a5(30+390*n,96,420,346)),r[1],!0)
m.a5(a0,new A.m(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bx(new A.a5(u,r,u+40,r+90),B.h6)
u=A.M()
u.r=D.bB7.gp(0)
a0.aq(r,u)}}else{m=A.h1(f,B.cK,f,f,f,D.fLO,B.K,B.ca,f,B.e6,B.cb)
m.nO(340)
m.a5(a0,new A.m(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.h.F(u+p/8,1)
o=B.n.F(e.gqR().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.P(new A.m(70+o+k*6,166+l*70),1.6,j)}u=e.ghm(0).gAc()
i=(u==null?f:u.c)===D.p4?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.fj8(d,a0,i,t,h,D.eGs)),new A.y(520,new C.fj9(a0,d,t)),new A.y(575,new C.fja(a0,d,t)),new A.y(585,new C.fjb(this,a0,d,t)),new A.y(615,new C.fjc(this,t,a0,d,h))],x.E)
B.d.aZ(g,new C.fjd())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cgU(d,e){var w,v,u,t,s,r,q,p=$.U(),o=A.a([],x.v),n=new A.aK(p.r,B.ak,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.b_(r,q)
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
C.anX.prototype={
R(){return new C.anY(new C.ao8(),A.S(x.S,x.i),new A.eP(0,$.ay()),$,0,null,null)},
gd8(){return this.d}}
C.anY.prototype={
gkZ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hX7(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gjb(){var w=this.z
return w===$?this.z=this.GJ(0):w},
gaOE(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.GJ(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.c8(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.GJ(0):r).length);++v}s.Q=w
r=w}return r},
GJ(d){var w,v,u,t,s=this.gkZ()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e3(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e7()
u.cV(this.a.e+d*7)
B.d.e_(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eJ(u,new C.bWb())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a4()
this.au_()},
t(){var w,v=this
v.e.t()
w=v.Nf$
w===$&&A.d()
w.t()
w=v.qy$
w.V$=$.ay()
w.W$=0
v.bA5()},
att(d){var w,v,u,t,s,r=this,q=r.gjb().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.c8(u===$?r.z=r.GJ(0):u,v)
s=r.gaOE()
s[v]=s[v]+(450*(t+0.5)/q-r.gaOE()[v])*Math.min(1,w)}},
d7I(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gjb().length)return
w=v.y
if(w===-1){v.l(new C.bWm(v,d))
return}if(w===d){v.l(new C.bWn(v))
return}v.l(new C.bWo(v,B.d.c8(v.gjb(),v.y),d,B.d.c8(v.gjb(),d)))},
cSp(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.GJ(0):u).length))break
t=s.gkZ()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.GJ(0):u)[v]]===v);++v}s.l(new C.bWh(s,B.d.cE(w,new C.bWi())))},
kU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkZ().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bWj(t,s))
w=5
return A.b(C.Ce(t.a.d,s),$async$kU)
case 5:t.x=f
q=t.a
w=6
return A.b(C.Cf(q.d,q.c.a,"lineup",t.r*10),$async$kU)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bWk())
w=1
break
case 4:t.l(new C.bWl(t))
case 1:return A.h(u,v)}})
return A.i($async$kU,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.c(""+l.r+" of "+l.gkZ().length+" lines right",k,k,k,k,k,k,B.qH,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.u1("Line Up",A.ck(A.a([D.ai0,w,B.aN,new C.J_(v,u,l.ch,k),B.aN,A.at(C.uQ("Back to the games",new C.bWd(d),B.d0,B.k1,D.fO),k,k,k)],x.p),k,k,B.ad,k,k,B.ah,!1),B.fh,k)}w=A.a([],x.t)
for(t=0;v=l.gkZ(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bWe(l))
u=A.bT(0,A.cg(new C.bWf(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.b_e,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.w(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fUv,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fWO,B.K,k,k)],q),B.l,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.v.j(0.7)
o=A.n(16)
n=l.ax
m=A.K(n?D.lZ:G.nR,B.r,2)
r.push(A.q(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.O(w,new C.bWg(l),x.cM).aJ(0,", then ")+".",k,k,k,k,k,k,D.fZ0,k,k,k),B.f,k,k,new A.p(p,k,m,o,k,k,B.m),k,k,k,B.d2,B.bg,k,k,1/0))}if(!l.at)r.push(C.uQ("That is my line!",l.gcSo(l),B.d0,B.h3,D.fO))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uQ(w,l.gqK(l),B.d0,B.jI,D.fO))}return new C.u1("Line Up",new A.am(B.a0,k,B.ac,B.t,A.a([u,s,A.ao(12,A.w(r,B.l,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.fh,k)}}
C.bmP.prototype={
a5(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qy$.a
c7.Dg(c5.e.NP(c8))
w=C.hsR(c8)
v=c7.c
J.bt(v.save())
v.translate(w.a,w.b)
c7.bW(0,w.c)
u=c5.gjb().length
t=$.U().r
s=x.v
r=new A.aK(t,B.ak,c4,c4,A.a([],s))
r.E(new A.b_(10,470))
r.E(new A.co(225,500,440,470))
q=A.M()
q.r=D.a0l.gp(0)
q.b=B.af
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aK(t,B.ak,c4,c4,l)
l.push(new A.b_(o,n))
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
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=[B.d0,G.nR,D.lZ,B.aH][B.n.F(p,4)].gp(0)
c7.af(k,m)}this.b4y(c7,"OLDEST",D.eHq,B.d0)
this.b4y(c7,"YOUNGEST",D.eGT,B.bf)
t=A.bx(D.fv4,B.h6)
s=A.M()
s.r=D.He.gp(0)
c7.aq(t,s)
s=A.bx(D.fv3,B.iF)
t=A.M()
t.r=D.Cx.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.aZ(t,new C.dyy())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.c8(a1===$?c5.z=c5.GJ(0):a1,f)
o=c5.gaOE()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gkZ()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gkZ()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.U()
a9=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a9.r=B.d0.j(0.22+0.1*Math.sin(e)).gp(0)
c7.P(new A.m(o,520),54,a9)}a9=D.dus[B.n.F(b0,6)]
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
else b9=a3?D.eJx:c4
if(b1)c0=new A.m(3+b2*8,-56)
else if(h&&a7)c0=D.aPF
else c0=a3?new A.m(30,-104+Math.sin(e)*5):c4
C.TA(c7,new A.m(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.KQ,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iU(new A.eH(a8,c4,c4,B.cW,c4,c4,c4,c4,c4,c4,D.fS8),B.a8,B.ca,new A.k3(1),"\u2026",c4,1,c4,B.cb,c4,B.cK)
c1.nO(q)
c2=A.bx(A.c1(new A.m(o,650),24,c1.b.c+16),B.h6)
$.U()
a8=new A.ar(B.V,B.R,B.X,B.Y,B.W)
if(a6)a9=B.iQ
else a9=a7?B.tB:D.r5
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.V,B.R,B.X,B.Y,B.W)
if(a6)a9=D.lZ
else a9=a7?G.nR:D.lY
a8.r=a9.gp(0)
a8.b=B.af
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a5(c7,new A.m(o-a9/2,650-a8.gb4(a8)/2))
c3=new A.iU(new A.eH(""+(a2+1),c4,c4,B.cW,c4,c4,c4,c4,c4,c4,D.fSs),B.a8,B.ca,new A.k3(1),c4,c4,c4,c4,B.cb,c4,B.cK)
c3.eL()
c3.a5(c7,new A.m(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.h.F(p*53+Math.sin(c5+p)*20,450)
q=B.h.F(t+p*37,420)
J.bt(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.c1(B.J,4,8)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=[B.d0,G.nR,D.lZ,B.aH,B.c][B.n.F(p,5)].gp(0)
c7.aE(q,m)
v.restore()}v.restore()},
b4y(d,e,f,g){var w,v,u=null,t=A.h1(u,B.cK,u,u,u,A.cX(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Ey,u,u),e),B.a8,B.ca,u,B.e6,B.cb)
t.eL()
w=t.b
v=w.c
w=w.a.c
t.a5(d,f.aI(0,new A.m(v/2,w.gb4(w)/2)))},
aD(d){return!1}}
C.a3u.prototype={
a9(){return"_Trip."+this.b}}
C.anT.prototype={
R(){return new C.anU(D.Za,new A.eP(0,$.ay()),$,0,null,null)},
gd8(){return this.d}}
C.anU.prototype={
gEt(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHT(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghm(d){var w,v=this,u=v.e
if(u===$){w=C.NM(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqR(){var w=this.f
return w===$?this.f=new C.aNh(new C.bVY(this)):w},
gVn(){var w=this.ghm(0)
return w.gAc()==null?"Grandma":B.a.i(w.gAc().b)},
Z(){this.a4()
this.au_()},
t(){var w,v=this
v.gqR().t()
w=v.Nf$
w===$&&A.d()
w.t()
w=v.qy$
w.V$=$.ay()
w.W$=0
v.bA4()},
att(d){var w,v,u,t=this
if(t.r!==D.afQ)return
w=B.dS.aB(0,B.h.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gEt()
if(v+1>=u.length){t.r=D.afR
t.Yr()}else{++t.w
t.ay=!1
t.r=D.Zb
t.gqR().Xt(u[t.w].a)}if(t.c!=null)t.l(new C.bVW())}},
Yr(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Yr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqR().Xt("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gEt().length
r=C.bKd(t,u.z,s)
u.as=r
w=2
return A.b(C.Ce(u.a.d,r),$async$Yr)
case 2:u.at=e
s=u.a
w=3
return A.b(C.Cf(s.d,s.c.a,"journey",u.x*10),$async$Yr)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bVQ())
return A.h(null,v)}})
return A.i($async$Yr,v)},
bvf(){this.aXv()},
aXv(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.afQ
if(w.c!=null)w.l(new C.bVR())},
Mt(d){var w,v,u,t,s=this
if(s.r!==D.Zb)return
w=s.gEt()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bVV(s,d,v))
u=s.gqR()
t=s.w
u.Xt(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cXF(){if(this.r!==D.C5)return
this.aXv()},
C(d){var w,v,u,t=this,s=null,r=A.bT(0,new A.ea(A.b5(s,s,s,new C.bme(t,t.qy$),B.aA),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gEt().length;++w){v=t.w
if(w<v||t.r===D.afR)v=B.d0
else v=w===v?B.c:B.aS
u=new A.aP(4,4)
p.push(new A.bu(1,B.b9,A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,B.xl,s,s,s,s),s))}p.push(B.b6)
p.push(D.hcd)
return new C.u1("Safari Journey",new A.am(B.a0,s,B.ac,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ao(10,t.cr4(),s,s,10,10,s,s)],q),s),B.fh,s)},
cr4(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bVU(o),l=D.r5.j(0.96),k=A.n(22),j=A.K(B.d0,B.r,3)
switch(o.r.a){case 0:w=A.w(A.a([A.c("A long drive to the village of Elder "+o.gVn()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.b_c,B.K,n,n),B.S,C.uQ("Start the journey",o.gbve(),B.d0,D.bWb,D.fO)],x.p),B.l,n,B.e,B.P,0,B.p)
break
case 3:w=D.bhE
break
case 1:w=o.w
v=o.gEt()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ax(D.lY,2.5,B.r,-1)
t.push(A.aA(n,A.q(n,A.c(r[s],n,n,n,n,n,n,D.aZv,B.K,n,n),B.f,n,D.ahf,new A.p(D.amS,n,new A.bE(p,p,p,p),new A.bc(q,q,q,q),n,n,B.m),n,n,n,n,B.xg,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bVS(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.w(A.a([w,B.N,A.bV(B.bF,t,B.bp,n,8,8)],u),B.B,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gEt().length?"Drive home":"Drive on"
v=A.w(A.a([w,B.N,new A.bK(B.a9,n,n,C.uQ(v,o.gcXE(),B.d0,B.jI,D.fO),n)],x.p),B.B,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gVn()),B.N,A.c(""+o.x+" of "+o.gEt().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aZO,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aTq(v)
u=C.aTq(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.ae8,n,n,n))}w.push(B.N)
w.push(A.at(C.uQ("Back to the games",new C.bVT(o),B.d0,B.k1,D.fO),n,n,n))
w=A.w(w,B.B,n,B.e,B.P,0,B.p)
break
default:w=n}return A.q(n,w,B.f,n,n,new A.p(l,n,j,k,D.aGH,n,B.m),n,n,n,n,B.bg,n,n,n)}}
C.bme.prototype={
a5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qy$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gEt(),d0=B.h.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.afQ,d2=c7*0.5
c8=A.ap(D.bmv,D.bxl,d0)
c8.toString
w=A.ap(D.a_x,G.akp,d0)
w.toString
v=A.ap(B.v0,D.bvF,d0)
v.toString
$.U()
u=A.M()
t=x.O
u.san(A.jU(B.J,new A.m(0,d2),A.a([c8,w,v],t),G.a6z,B.w,c3))
d3.aE(new A.a5(0,0,0+c6,0+c7),u)
s=new A.m(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.M()
u.san(A.wF(s,60,A.a([D.bw4,B.L],t),c3,B.w,c3,c3,0))
d3.P(s,60,u)
u=A.M()
u.r=B.a_K.gp(0)
d3.P(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.h.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.n.F(r,3)*22
for(o=0;o<4;++o){n=D.dLF[o]
$.U()
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=B.c.j(0.75).gp(0)
d3.P(new A.m(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.U()
j=A.a([],m)
i=new A.aK(k.r,B.ak,c3,c3,j)
j.push(new A.b_(0,v))
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
$.U()
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=A.ap(l===0?D.bl2:D.bAv,D.bqb,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cgV(d3,new A.m(B.h.F(B.h.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.U()
w=A.M()
v=A.ap(D.alZ,D.Ht,d0)
v.toString
w.san(A.jU(new A.m(0,d2),new A.m(0,c7),A.a([v,D.bw6],t),c3,B.w,c3))
d3.aE(new A.a5(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.M()
w.r=D.bpq.gp(0)
d3.aE(new A.a5(0,a0,c6,a1),w)
w=A.M()
w.r=D.bA6.gp(0)
d3.aE(new A.a5(0,a0-3,c6,a0),w)
for(q=-B.h.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=I.O8.gp(0)
d3.aE(new A.a5(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.U()
b2=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b2.r=D.bkH.gp(0)
d3.aE(new A.a5(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aK(b1.r,B.ak,c3,c3,b2)
b2.push(new A.b_(a9-36,t))
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
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.byd.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b1.r=D.fO.gp(0)
d3.aE(new A.a5(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.He.gp(0)
d3.aE(new A.a5(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bx(new A.a5(b0,a4,b0+60,a5),B.jM)
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.bBD.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.Cx.gp(0)
b0.b=B.af
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iU(new A.eH(b6,c3,c3,B.cW,c3,c3,c3,c3,c3,c3,D.fQx),B.a8,B.ca,new A.k3(1),c3,c3,c3,c3,B.cb,c3,B.cK)
b7.eL()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a5(d3,new A.m(b4-b1/2,a2-b0.gb4(b0)/2))
if(a7)b8=c4.r===D.afR
else if(r===c4.w){b0=c4.r
b0=b0===D.Zb||b0===D.C5
b8=b0}else b8=!1
if(a7){b0=c4.ghm(0).gAc()
b9=(b0==null?c3:b0.c)===D.p4?1:0}else b9=[0,3,6,7,2,1,4,5][B.n.F(r,8)]
b0=c4.gqR()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.C5
b0=c0?C.hSW(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Zb?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.m(40,-110+Math.sin(g)*10)
else a7=c0?new A.m(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.TA(d3,new A.m(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.m(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bMt(d3,new A.m(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.h.F(w+r/7,1)
$.U()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.bzB.j(0.5*(1-c2)).gp(0)
d3.P(new A.m(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Za)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.h.F(w+r/5,1)
t=Math.sin(r+c8)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.P(new A.m(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.C5&&c4.ax){b7=A.h1(c3,B.cK,c3,c3,c3,A.cX(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.d0,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A6.JJ,c3,c3),"BEEP BEEP!"),B.a8,B.ca,c3,B.e6,B.cb)
b7.eL()
b7.a5(d3,new A.m(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cgV(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.bvz,D.boJ,g)
o.toString
if(f){w=new A.aK($.U().r,B.ak,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.b_(v-16,u))
t=u-36
s=u-56
w.E(new A.co(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.co(v+9,t,v+16,u))
w.E(new A.bA())
t=A.M()
t.r=D.a0T.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d8o[r]
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=D.a0T.gp(0)
p.c=4
p.d=B.bI
d.ah(new A.m(w,t),new A.m(v+q*24,s),p)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=o.gp(0)
d.P(new A.m(v+q*26,u),10,p)}}else{w=e.a6(0,D.eJu)
$.U()
v=A.M()
v.r=D.bkJ.gp(0)
v.c=4
d.ah(e,w,v)
v=A.c1(e.a6(0,D.eJv),16,60)
w=A.M()
w.r=o.gp(0)
d.c4(v,w)}},
bMt(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Za?0.045:0,a1=a2.c
J.bt(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jB(0,a0)
for(w=0;w<2;++w){v=D.dD0[w]
u=d.ay&&d.r!==D.Za&&v>0
J.bt(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.U()
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.bAm.gp(0)
a2.P(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.bsj.gp(0)
a2.P(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=B.bl.gp(0)
q.c=2
a2.ah(B.J,new A.m(s*9,t*9),q)}a1.restore()}p=A.rn(D.fvt,B.h6,B.h6,B.ib,B.hV)
$.U()
t=A.M()
t.san(A.jU(D.eFy,B.aaX,D.drK,G.a6z,B.w,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.dl6[B.n.F(o,4)].gp(0)
a2.aE(new A.a5(t,-26,t+10,-19),s)}n=d.r===D.C5&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a5(s,-66,q,-36)
J.bt(a1.save())
a1.clipRRect(A.nn(A.bx(l,B.pr)),$.n0(),!0)
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=D.a_x.gp(0)
a2.aE(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.C5?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.TA(a2,new A.m(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aPw,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bx(l,B.pr)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.r=D.amU.gp(0)
i.b=B.af
i.c=2
a2.aq(j,i)}d=A.bx(D.Wu,B.pr)
t=A.M()
t.r=D.a_x.gp(0)
a2.aq(d,t)
J.bt(a1.save())
a1.clipRRect(A.nn(A.bx(D.Wu,B.pr)),$.n0(),!0)
C.TA(a2,new A.m(D.Wu.gbD().a,-10),0,0,0.7,-0.1,f,f,D.aPw,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bx(D.Wu,B.pr)
d=A.M()
d.r=D.amU.gp(0)
d.b=B.af
d.c=2
a2.aq(t,d)
d=A.M()
d.r=Aq.CY.gp(0)
a2.P(D.eHG,4,d)
d=A.M()
d.r=D.He.gp(0)
a2.aE(D.fwC,d)
for(w=0;w<3;++w){v=D.dD2[w]
d=A.bx(new A.a5(v,-96,v+28,-79),B.jM)
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.Ht.gp(0)
a2.aq(d,t)}a1.restore()},
aD(d){return!1}}
C.aDN.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b9()
this.b7()
this.bF()}}
C.bjL.prototype={}
C.aDP.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b9()
this.b7()
this.bF()}}
C.bjM.prototype={}
C.aDQ.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b9()
this.b7()
this.bF()}}
C.bjN.prototype={}
C.a84.prototype={
C(d){var w=null
return new A.a4(1/0,this.c,A.b5(w,w,w,new C.bml(w),B.aA),w)}}
C.bml.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dAO[B.n.F(n,6)]
k=$.U()
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=l.gp(0)
d.aE(new A.a5(m,0,m+v,u),j)
if(B.n.F(n,3)===0){j=A.a([],o)
i=new A.aK(k.r,B.ak,null,null,j)
k=m+r
j.push(new A.b_(k,f))
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
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.u1.prototype={
C(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,B.RL,w,w,w,new C.bVP(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fNI,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c6(w,D.a_h,A.q(w,A.bm(!0,A.w(A.a([D.cbr,new A.C(D.bMP,A.A(u,B.l,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.bcT,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.J_.prototype={
C(d){var w=null,v=this.d,u=C.aTq(v),t=C.iCX(v),s=B.c.j(0.08),r=A.n(18),q=A.K(B.d0.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fQi,w,w,w)],x.p)
if(this.e)p.push(D.eM0)
p.push(B.aj)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h8,w,w,w))
if(t!=null)p.push(new A.C(B.rn,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.BJ,w,w,w),w))
return A.q(w,A.w(p,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(s,w,q,r,w,w,B.m),w,w,w,w,B.bE,w,w,w)}}
C.Xk.prototype={
R(){return new C.bpb(A.S(x.N,x.S),B.n.F(Date.now(),1e5))},
d3G(d){return this.f.$1(d)},
ge8(){return this.d}}
C.bpb.prototype={
gUm(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a4()
this.QS()},
QS(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$QS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bWA(u.a.d),$async$QS)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dpB[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bWz(p,(o===$?u.d=q.c:o).a,r),$async$QS)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e9i(u,n))
return A.h(null,v)}})
return A.i($async$QS,v)},
v4(d){return this.cue(d)},
cue(d){var w=0,v=A.j(x.H),u=this,t
var $async$v4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).ca(A.e4(new C.e9j(d),!1,null,x.H)),$async$v4)
case 2:u.r=B.n.F(Date.now(),1e5)
if(u.c!=null)u.QS()
return A.h(null,v)}})
return A.i($async$v4,v)},
gba1(){var w,v,u,t=C.NM(this.gUm()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a4t(d){return this.cBz(d)},
cBz(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a4t=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d3G(r),$async$a4t)
case 2:if(u.c!=null)u.l(new C.e9k(u,r))
return A.h(null,v)}})
return A.i($async$a4t,v)},
Qa(d){return this.bVp(d)},
bVp(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Qa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hvi(t.gUm())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Nu("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).ca(A.e4(new C.e9g(q),!1,null,r)),$async$Qa)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bl(j,new C.e9h(p))
o=s.length
B.d.cl(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a4t(A.cD(s,0,A.dw(2,"count",x.S),r).d9(0)),$async$Qa)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Qa,v)},
Zn(d,e){return this.bSY(0,e)},
bSY(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Zn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cf(null,null,!0,null,new C.e9f(e),o,null,!0,!0,x.y),$async$Zn)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hvi(u.gUm()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a4t(o),$async$Zn)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Zn,v)},
aci(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e9c(this,j):h
o=o?0.55:1
w=A.ap(g,B.v,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.n(20)
u=A.K(B.aS,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cC,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.Xj,p,p,p),B.aX],s)
q=A.n(10)
r.push(A.q(p,A.c(i,p,p,p,p,p,p,D.fOC,p,p,p),B.f,p,p,new A.p(B.i2,p,p,q,p,p,B.m),p,p,p,p,B.zN,p,p,p))
return A.aA(p,A.d3(A.q(p,A.w(A.a([A.A(r,B.l,p,B.e,B.i,0,p,p),B.aX,A.c(e,p,2,p,p,p,p,D.fWH,p,p,p),B.cR,A.c(f,p,3,B.a2,p,p,p,D.fPn,p,p,p)],s),B.B,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(p,p,u,v,t,new A.a7(B.ax,B.aC,B.w,w,p,p),B.m),p,p,p,p,B.zD,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
YR(d,e,f,g,h,i){return this.aci(d,e,f,g,h,i,null)},
C(a2){var w,v,u,t,s=this,r=null,q=C.NM(s.gUm()),p=s.gUm(),o=C.aTq(s.e),n=C.hvi(p),m=s.a.e&&J.ab(p.z)<2,l=new C.e9l(s),k=C.hX7(p,1).length,j=C.hXi(p,1).length,i=C.hYd(p,1).length,h=B.c.j(0.07),g=A.n(20),f=A.K(B.d0.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,K.adW,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fU6,r,r,r),a0=q.b.length,a1=x.p
g=A.q(r,A.A(A.a([e,B.bd,A.E(A.w(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.XB,r,r,r)],a1),B.B,r,B.e,B.i,0,B.p),1),A.w(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qH,r,r,r),D.hiz],a1),B.l,r,B.e,B.i,0,B.p)],a1),B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(h,r,f,g,r,r,B.m),r,r,r,r,B.bE,r,r,r)
f=s.YR("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aB,new C.e9m(s,p),l.$1("kahoot"))
h=s.YR("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lY,new C.e9n(s,p),l.$1("fire"))
a0=s.YR("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.vd,new C.e9o(s,p),l.$1("catch"))
j=j!==0?new C.e9r(s,p):r
j=s.aci("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.i_,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e9s(s,p):r
i=s.aci("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lX,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.YR("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.ex,new C.e9t(s,p),l.$1("journey"))
k=k!==0?new C.e9u(s,p):r
k=A.a([g,B.aN,D.hmK,B.N,A.lk(0.98,A.a([f,h,a0,j,i,e,s.aci("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.eu,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.YR("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.de,new C.e9v(s,p),l.$1("school"))],a1),2,12,12,r,B.e9,!0),B.df,A.A(A.a([D.bOF,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fOH,r,r,r)],a1),B.l,r,B.e,B.i,0,r,r),B.N],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ax(B.aS,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.h2U,B.bd,new A.bu(1,B.b9,A.w(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hm,r,r,r),A.c(""+v.garY(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.BJ,r,r,r)],a1),B.B,r,B.e,B.i,0,B.p),r)],a1)
if(v.garY(0).length>=2){f=D.lZ.j(0.2)
t=new A.ax(D.lZ,1,B.r,-1)
g.push(A.aA(r,A.q(r,A.V(B.fT,D.lZ,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e9w(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.d0.j(0.2)
t=new A.ax(B.d0,1,B.r,-1)
f=A.aA(r,A.q(r,A.V(B.jn,B.d0,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e9x(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fs.j(0.2)
t=new A.ax(B.fs,1,B.r,-1)
B.d.u(g,A.a([B.b6,f,B.b6,A.aA(r,A.q(r,A.V(B.es,B.fs,r,r,r,20),B.f,r,r,new A.p(e,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e9y(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.q(r,new A.bZ(B.aJ,B.e,B.i,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.p(i,r,new A.bE(u,u,u,u),new A.bc(h,h,h,h),r,r,B.m),r,r,r,B.d2,B.bg,r,r,r))}if(s.a.e){j=m?new C.e9p(s):new C.e9q(a2)
i=A.n(18)
h=A.K(m?B.d0:B.aS,B.r,2)
g=m?B.d0.j(0.12):B.dA
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.q(r,A.at(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.d0:B.aE,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.p(g,r,h,i,r,r,B.m),r,r,r,r,B.Px,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.hnI)
k.push(B.az)
k.push(D.aw3)
return new C.u1("Family Games \xb7 "+p.b,A.ck(k,r,r,D.bIO,r,r,B.ah,!1),B.fh,r)}}
C.a1g.prototype={
a9(){return"_KPhase."+this.b}}
C.anV.prototype={
R(){return new C.anW(D.b4t)},
gd8(){return this.e}}
C.anW.prototype={
t(){var w=this.at
if(w!=null)w.a2(0)
w=this.ax
if(w!=null)w.a2(0)
this.a3()},
fY(d){var w,v=this
v.l(new C.bW9(v))
w=v.at
if(w!=null)w.a2(0)
v.at=A.d5(B.fr,new C.bWa(v))},
aST(){var w=this,v=w.ax
if(v!=null)v.a2(0)
w.l(new C.bW_(w))
v=w.at
if(v!=null)v.a2(0)
w.at=A.d5(B.fq,new C.bW0(w))},
Mt(d){var w
if(this.d!==D.afl)return
w=this.at
if(w!=null)w.a2(0)
this.b9Y(d)},
b9Y(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.h.S(500+500*B.h.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bW5(u,v,d))
u=v.ax
if(u!=null)u.a2(0)
v.ax=A.cE(B.tI,v.giM(v))},
cR_(d){var w=this
if(w.d!==D.YH)return
if(w.e+1>=w.a.w.length)w.a_a()
else{w.l(new C.bW6(w))
w.aST()}},
a_a(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$a_a=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a2(0)
p=u.x
t=u.a.w.length
s=C.bKd(p,u.w,t)
u.l(new C.bW2(u,s))
w=2
return A.b(C.Ce(u.a.e,s),$async$a_a)
case 2:r=e
t=u.a
w=3
return A.b(C.Cf(t.e,t.f,t.r,u.f),$async$a_a)
case 3:q=e
if(u.c!=null)u.l(new C.bW3(u,r,q))
return A.h(null,v)}})
return A.i($async$a_a,v)},
cRQ(){var w,v,u,t,s=this,r=s.a,q=new A.e7()
q.cV(r.w.length*31+B.a.ga_(r.f))
w=s.a.w.length*900
v=A.a([new A.aV("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.e_(r,q)
for(r=A.cD(r,0,A.dw(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bQ(r,r.gI(0),u.k("bQ<aj.E>")),u=u.k("aj.E");r.A();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.aV(t,B.h.S(w*(0.35+q.ai()*0.5)),!1))}B.d.aZ(v,new C.bW7())
return v},
C(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b4t===r){w=A.a([D.hiY,B.S,A.c(s,t,t,t,t,t,t,B.XJ,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fOP,t,t,t))
w.push(B.az)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.BN,B.K,t,t))
w.push(B.ee)
w.push(C.uQ("Play",u.gf6(u),B.d0,B.fT,D.fO))
w=A.at(new A.C(B.eA,A.w(w,B.l,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.b4u===r){w=A.at(A.c(""+u.z,t,t,t,t,t,t,D.fXe,t,t,t),t,t,t)
break A}if(D.afl===r||D.YH===r){w=u.cwS()
break A}if(D.b4v===r){w=u.cgW()
break A}w=t}return new C.u1(s,w,B.fh,t)},
cwS(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.YH,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aZk,j,j,j),B.aX],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.M9,j,j,j))
g.push(B.ar)
f=A.n(14)
g.push(A.q(j,A.c(""+k.f,j,j,j,j,j,j,B.j_,j,j,j),B.f,j,j,new A.p(B.bz,j,j,f,j,j,B.m),j,j,j,j,A0.Dl,j,j,j))
g=A.A(g,B.l,j,B.e,B.i,0,j,j)
f=A.n(6)
w=i?0:B.h.D(k.as/k.a.w[k.e].r,0,1)
f=A.bv(f,A.jK(B.bz,j,k.as<5?B.fs:B.d0,9,j,w,j),B.ap)
w=A.n(22)
v=A.K(B.d0,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.w(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.lZ:G.nR,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.N,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fNR,B.K,j,j)],h),B.l,j,B.e,B.P,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fZq,B.K,j,j)
w=A.E(A.q(j,A.at(u,j,j,j),B.f,j,j,new A.p(D.r5,j,v,w,j,j,B.m),j,j,j,j,B.f7,j,j,1/0),3)
v=A.a([],h)
for(u=k.giM(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bW4(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.n.F(t,4)
n=D.aGj[o]
m=new A.aP(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aGD[o],j,j,j,j,j,j,D.fPS,j,j,j),B.ar,new A.bu(1,B.b9,A.c(r[t],j,3,B.a2,j,j,j,D.fOM,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.aut)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c2Y)
v.push(A.aA(j,new A.TR(A.q(j,new A.bZ(B.aJ,B.e,B.i,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.p(n,j,new A.bE(l,l,l,l),new A.bc(m,m,m,m),W.aEF,j,B.m),j,j,j,j,B.ez,j,j,j),p,B.b0,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.aj,f,B.ae,w,B.ae,A.E(A.lk(1.45,v,2,10,10,j,B.e9,!1),4)],h)
if(i)h.push(D.eLd)
return new A.C(B.a2A,A.w(h,B.l,j,B.e,B.i,0,B.p),j)},
cgW(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cRQ(),m=x.p,l=A.a([D.bgV,A.at(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qH,o,o,o),o,o,o),A.at(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Xo,o,o,o),o,o,o),B.aN],m)
for(w=0;w<n.length;++w){v=n[w].c?B.d0.j(0.25):B.dA
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.d0:B.bz,1,B.r,-1)
q=A.c(w<3?D.ds1[w]:""+(w+1),o,o,o,o,o,o,B.mh,o,o,o)
s=s?B.u:B.O
l.push(A.q(o,new A.bZ(B.aJ,B.e,B.i,B.l,o,B.p,o,0,A.a([new A.a4(34,o,q,o),new A.bu(1,B.b9,A.c(t.a,o,o,o,o,o,o,new A.G(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.j_,o,o,o)],m),o),B.f,o,o,new A.p(v,o,new A.bE(r,r,r,r),new A.bc(u,u,u,u),o,o,B.m),o,o,o,B.cA,B.f3,o,o,o))}l.push(B.S)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.J_(m,v,p.CW,o))
l.push(B.aN)
l.push(A.at(C.uQ("Back to the games",new C.bW1(p),B.d0,B.k1,D.fO),o,o,o))
return A.ck(l,o,o,B.f7,o,o,B.ah,!1)}}
C.V_.prototype={
R(){return new C.anS(A.S(x.de,x.er))}}
C.anS.prototype={
gE8(){var w,v=this,u=v.d
if(u===$){w=C.hBp(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gma(d){var w,v,u=this,t=u.e
if(t===$){w=u.gE8().b
v=$.ay()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.bd(w,B.bb,B.aP),v)}return t},
ckd(d){return this.f.c0(0,d,new C.bVA(d))},
Z(){this.a4()
var w=this.gE8().c
if(w.length===0)w.push(C.hmu(null,0,20,""))},
t(){var w,v,u=this.gma(0)
u.V$=$.ay()
u.W$=0
for(u=this.f,u=new A.ds(u,u.r,u.e);u.A();)for(w=J.aL(u.d);w.A();){v=w.gO(w)
v.V$=$.ay()
v.W$=0}this.a3()},
cQQ(){if(this.gE8().c.length>=12)return
this.l(new C.bVB(this))},
jE(d){var w,v,u=this,t=u.gE8()
t.b=B.a.i(u.gma(0).a.a)
w=t.garY(0)
if(t.b.length===0||w.length<2){u.c.M(x.q).f.T(D.fGM)
return}v=t.c
B.d.a7(v)
B.d.u(v,w)
v=u.c
v.toString
A.a6(v,!1).N(t)},
C(d){var w,v,u=this,t=null,s=new C.bVL(),r=x.p,q=A.a([A.bG(!1,D.h85,t,t,!0,t,t,t,u.gbu7(u),t,t)],r),p=A.a([D.hnj,B.ae,A.aO(t,B.M,!1,t,!0,B.t,t,A.aQ(),u.gma(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.am,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ad,t,t,t,t,t,t,t,t,t,t,t,B.h8,!0,B.a8,t,B.an,t,t,t,t),B.az],r)
for(w=0;v=u.gE8().c.length,w<v;++w)B.d.u(p,A.a([new A.fo(new C.bVK(u,w,s),t)],r))
if(v<12)p.push(A.at(C.uQ("\uff0b Add a question",u.gcQP(),B.aS,t,B.c),t,t,t))
return new C.u1("Make your game",A.ck(p,t,t,D.bIL,t,t,B.ah,!1),q,t)}}
C.at5.prototype={
R(){return new C.aHp(A.a([],x._))},
bx(){return this.r.$0()},
qL(){return this.w.$0()},
ge8(){return this.c}}
C.aHp.prototype={
Z(){var w,v
this.a4()
this.x8()
w=this.a
v=w.c
if(v.length!==0)C.a9P(v,w.e,w.d.w)},
wX(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hyi(r,t.e,!1,s.w,new C.eaY(u),null,s),$async$wX)
case 2:w=3
return A.b(u.x8(),$async$wX)
case 3:return A.h(null,v)}})
return A.i($async$wX,v)},
a2A(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hyi(r,t.e,!0,s.w,new C.eaX(u),null,s),$async$a2A)
case 2:w=3
return A.b(u.x8(),$async$a2A)
case 3:return A.h(null,v)}})
return A.i($async$a2A,v)},
x8(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$x8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BL(q.a.c),$async$x8)
case 7:p=e
if(q.c!=null)n=q.e||J.cM(p)
else n=!1
if(n)q.l(new C.eb_(q,p))
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
return A.b(C.HR(q.a.c).d4(0,B.rh),$async$x8)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.eb0(q,o))
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
if(q.c!=null&&q.e)q.l(new C.eb1(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$x8,v)},
Qw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Qw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.M(s).f.T(D.fGm)
w=3
return A.b(C.HR(t.a.c),$async$Qw)
case 3:r=e
w=4
return A.b(C.hbG(t.a.c,r),$async$Qw)
case 4:q=e
w=5
return A.b(C.HR(t.a.c),$async$Qw)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.eaW(t,p))
o=t.c.M(s).f
s=A.c(q?"Family trees synced \u2014 "+J.ab(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dT:B.d9,null,B.t,null,s,null,B.lD,null,null,null,null,null,null,null,null,null,null))
t.a.qL()
case 1:return A.h(u,v)}})
return A.i($async$Qw,v)},
JC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iLW(l),$async$JC)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.icK(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b46(q,p.e,l,"Each family tree costs $"+B.h.a1(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$JC)
case 4:if(!e||t.c==null){w=1
break}l=B.n.v(1000*Date.now())
p=C.hT5(r)
o=Date.now()
n=t.a.c
m=new C.lj(l,r.toUpperCase(),p,!0,B.M,D.EI,new A.W(o,0,!1),0,n,D.vt,B.co)
w=5
return A.b(C.a5q(n,m),$async$JC)
case 5:w=6
return A.b(t.x8(),$async$JC)
case 6:t.a.bx()
t.a.qL()
if(t.c==null){w=1
break}t.G2(m)
case 1:return A.h(u,v)}})
return A.i($async$JC,v)},
G2(d){return this.cpl(d)},
cpl(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$G2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.BL(u.a.c),$async$G2)
case 2:n=l.nU(k.dM(f,new C.eaZ(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hf(m,new C.at_(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$G2)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a5q(u.a.c,o),$async$G2)
case 6:case 5:w=7
return A.b(u.x8(),$async$G2)
case 7:u.a.qL()
return A.h(null,v)}})
return A.i($async$G2,v)},
C(d){var w,v,u,t,s,r=this,q=null,p=A.R(d).ax.a===B.I,o=new C.uC(p)
if(r.e)return A.at(A.nq(q,p?B.bu:B.bl,q,q,q,q,q,q,q,q),q,q,q)
if(J.ch(r.d)){w=p?B.eo:B.c
v=A.n(15)
u=A.aE(!1,B.a3,!0,q,A.aN(!1,q,!0,A.q(q,D.c0s,B.f,q,q,new A.p(B.aZ.j(0.12),q,A.K(B.aZ,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cz,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcol(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aT:B.ay,q,q,q,q,q,q,q,q,18,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.GT(A.q(q,A.w(A.a([u,B.aN,t,B.N,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bl,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.ee,A.bI(D.hqD,q,r.gaWe(),A.bp(B.bW,q,q,q,q,q,B.a2Z,q,new A.bb(A.n(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.i,0,B.p),B.f,q,q,new A.p(w,q,q,v,q,q,B.m),q,q,q,q,D.bLx,q,q,1/0),15,B.ag,1.05,D.af9,q)}w=J.ab(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aT:B.ay,q,q,q,q,q,q,q,q,16,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aX],v)
if(J.cM(r.d))w.push(A.aI(q,q,q,q,A.V(B.Aw,B.aZ,q,q,q,q),q,q,q,new C.eb3(r),q,q,q,q,"Sync family trees with database",q))
if(J.cM(r.d))w.push(A.aI(q,q,q,q,A.V(B.As,B.aZ,q,q,q,q),q,q,q,r.gajp(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dg(E.avr,q,D.h5j,r.gaWe(),A.bp(B.bW,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ab(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ae)
u.push(new C.GT(r.cMT(J.t(r.d,s),o),14,B.ag,1,D.af9,q))
B.d.u(w,u)}return A.w(A.a([p,B.az,A.w(w,B.l,q,B.e,B.i,0,B.p)],v),B.B,q,B.e,B.i,0,B.p)},
cMT(d,e){var w=null,v=e.a,u=v?B.eo:B.c,t=A.n(14),s=A.K((v?B.ew:B.bP).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.v.j(v?0.35:0.08),B.eJ,10)],x.V),q=A.n(14),p=A.q(w,D.c_w,B.f,w,w,new A.p(B.aZ.j(0.15),w,w,A.n(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aT:B.ay,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gasY(),m=d.d?"":" \xb7 Public",l=d.y===D.lf?" \xb7 View only":"",k=x.p
l=A.E(A.w(A.a([o,B.bs,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.B,w,B.e,B.i,0,B.p),1)
return A.q(w,A.aE(!1,B.a3,!0,w,A.aN(!1,q,!0,new A.C(B.bE,A.A(A.a([p,B.bd,l,A.V(B.Qp,v?B.bu:B.bl,w,w,w,w)],k),B.l,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eb2(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.p(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.at_.prototype={
R(){return new C.aHm(A.a([],x._),A.aR(x.N),A.bcX())},
bx(){return this.r.$0()},
ge8(){return this.c}}
C.aHm.prototype={
Z(){var w,v,u=this
u.a4()
u.d=u.a.w
u.afQ()
w=u.a
v=w.c
if(v.length!==0)C.a9P(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.ay()
w.W$=0
this.a3()},
a5G(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a5G=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.zg("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.eao(r),s,null,!0,!0,x.y),$async$a5G)
case 3:if(e!==!0||t.c==null){w=1
break}t.Ll()
t.l(new C.eap(t,r))
w=4
return A.b(t.v0(),$async$a5G)
case 4:t.a.bx()
t.zg(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a5G,v)},
cCb(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aS.U$.push(new C.eaj(w,f,d,e))},
aYB(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dB()
u.el(w,v,0,1)
u.kf(q,q,1,1)
this.w.sp(0,u)},
bgI(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eV(new Float64Array(16))
q.eg(r)
w=q.Ed()
v=B.h.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dB()
t.el(r,u,0,1)
t.kf(v,v,1,1)
t.el(-r,-u,0,1)
t.j8(0,q)
s.sp(0,t)},
afQ(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$afQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.BL(u.a.c),$async$afQ)
case 2:t=s.nU(r.dM(e,new C.e9L(u)))
if(t!=null&&u.c!=null)u.l(new C.e9M(u,t))
return A.h(null,v)}})
return A.i($async$afQ,v)},
zg(d){var w=null,v=this.c
if(v==null)return
v.M(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
wX(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.d()
w=2
return A.b(C.hyi(o,t,!1,r,new C.ea2(u),q.a,s),$async$wX)
case 2:n=A
m=J
w=3
return A.b(C.HR(u.a.c),$async$wX)
case 3:p=n.nU(m.dM(e,new C.ea3(u)))
if(p!=null&&u.c!=null)u.l(new C.ea4(u,p))
return A.h(null,v)}})
return A.i($async$wX,v)},
Ll(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cO(w,0)},
v0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$v0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a5q(t,s),$async$v0)
case 2:return A.h(null,v)}})
return A.i($async$v0,v)},
a49(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a49=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uR(q,t.a.c)){t.zg("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iNf(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a49)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Ll()
t.l(new C.eai(t,r))
w=4
return A.b(t.v0(),$async$a49)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a49,v)},
b6C(){var w=this.c
w.toString
A.a6(w,!1).ca(A.e4(new C.ea_(this),!1,null,x.H))},
a2Q(){return this.cpn()},
cpn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a2Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.d()
if(!C.uR(m,t.a.c)){t.zg("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.R(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.X(s,new C.eaf(),A.T(s).k("X<1>")).gI(0)
s=A.eC([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("cl.E"))
B.d.fl(p)
s=t.c
s.toString
w=3
return A.b(A.bX(B.L,null,new C.eag(n,t,new C.uC(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a2Q)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Ll()
t.l(new C.eah(t,o))
w=6
return A.b(t.v0(),$async$a2Q)
case 6:case 5:if(o.a&&t.c!=null)t.b6C()
case 1:return A.h(u,v)}})
return A.i($async$a2Q,v)},
Y9(d){return this.bHI(d)},
bHI(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uR(r,t.a.c)){t.zg("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e9z(t,d),r,null,!0,!0,x.P),$async$Y9)
case 3:s=f
if(s==null){w=1
break}t.Ll()
t.l(new C.e9A(t,s))
w=4
return A.b(t.v0(),$async$Y9)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y9,v)},
a6_(d){return this.cPa(d)},
cPa(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a6_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.R(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.ear(u,d,new C.uC(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a6_)
case 2:return A.h(null,v)}})
return A.i($async$a6_,v)},
clq(d){var w=this,v=w.d
v===$&&A.d()
if(C.uR(v,w.a.c))w.Qb(d)
else w.a6_(d)},
alV(d,e){return this.cGg(d,e)},
cGg(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$alV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.R(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.eal(new C.uC(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$alV)
case 3:case 1:return A.h(u,v)}})
return A.i($async$alV,v)},
JH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$JH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.lf?3:5
break
case 3:w=6
return A.b(C.hkE(t.a.c),$async$JH)
case 6:s=e
o=t.a
r=C.hGh(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.alV(!s,!r),$async$JH)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aTw(o,t.a.c)){t.zg("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lJ(o,"Cancel","Remove",q.y===D.lf?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$JH)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aTu(t.a.c,t.d.a),$async$JH)
case 11:t.a.bx()
o=t.c
if(o==null){w=1
break}A.j8(o,null)
case 1:return A.h(u,v)}})
return A.i($async$JH,v)},
adg(d){return this.bTe(d)},
bTe(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$adg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uR(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aR(s,new C.e9B(p))){o=A.T(s)
p.a=A.nU(new A.cQ(new A.X(s,new C.e9C(d),o.k("X<1>")),new C.e9D(),o.k("cQ<1,o>")))}q=p.a
if(q==null)q=d.d
t.Ll()
t.l(new C.e9E(t,s,d,q))
w=3
return A.b(t.v0(),$async$adg)
case 3:t.zg(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$adg,v)},
Qb(d){return this.bVt(d)},
bVt(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Qb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uR(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a6_(d),$async$Qb)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.e9I(t,d),r,null,!0,!0,x.P),$async$Qb)
case 6:s=f
if(s==null){w=1
break}t.Ll()
t.l(new C.e9J(t,s))
w=7
return A.b(t.v0(),$async$Qb)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Qb,v)},
cNl(){var w=this,v=w.d
v===$&&A.d()
if(!C.uR(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.eaq(w))
w.v0()},
a0i(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aTw(n,t.a.c)){t.zg("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.R(n)
s=$.ay()
r=new A.au(B.aw,s)
q=t.d.e
p=A.bs(new A.O(q,t.gcjU(),A.T(q).k("O<1,o>")).c1(0,new C.e9V()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e9W(t,new C.uC(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a0i)
case 3:o=e
r.V$=s
r.W$=0
if(o!==!0||t.c==null){w=1
break}t.Ll()
t.l(new C.e9X(t,p))
w=4
return A.b(t.v0(),$async$a0i)
case 4:t.zg("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a0i,v)},
cjV(d){return B.a.i(d.toLowerCase())},
co2(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uR(v,w)
t=r.d
s=C.iBq(t)
C.iM_(q,t.b,u,C.iBp(r.d),s,v.a,w)},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.R(d).ax.a===B.I,m=new C.uC(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.X(l,new C.eay(),A.T(l).k("X<1>")).gI(0)
l=n?B.c7:B.hZ
v=A.V(B.a48,n?B.bu:B.bl,o,o,o,18)
u=x.p
v=A.a([new A.C(Z.Dm,A.aN(!1,o,!0,new A.C(B.hD,A.A(A.a([v,B.b6,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bl,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.eaz(p,d),o,o,o,o,o,o,o),o),new A.C(B.ob,p.c5L(m),o)],u)
if(p.d.y===D.lf){t=B.ud.j(0.15)
s=A.n(12)
r=A.K(B.ud.j(0.45),B.r,1)
q=C.HP(p.d,p.a.c)
v.push(new A.C(B.zG,A.q(o,A.A(A.a([D.c59,B.ar,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aT:B.ay,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(t,o,r,s,o,o,B.m),o,o,o,o,B.hs,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aT:B.ay,o,o,o,o,o,o,o,o,15,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aX],u)
if(C.uR(p.d,p.a.c)&&p.e.length!==0)u.push(new C.H3("Undo",B.qe,p.gcNk(),m,o,o))
u.push(new C.H3("Family Book",E.as6,p.gco1(),m,B.v2,o))
u.push(new C.H3("Family games",B.oj,p.gcod(),m,B.aB,o))
if(C.uR(p.d,p.a.c))u.push(new C.H3("Display settings",B.Ed,p.gcpm(),m,B.b8,o))
u.push(new C.H3("Sync",B.As,p.gajp(),m,o,o))
t=p.d
if(t.y===D.lf||C.aTw(t,p.a.c)){t=p.d.y===D.lf?"Remove shared tree":"Delete tree"
u.push(new C.H3(t,B.es,p.gbTo(),m,B.fs,o))}if(C.uR(p.d,p.a.c))u.push(new C.H3("Add member",B.xz,new C.eaA(p),m,B.bW,o))
v.push(new A.C(S.aoV,A.A(u,B.l,o,B.e,B.i,0,o,o),o))
if(p.d.gasY()===0){u=A.at(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cg(new C.eaB(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.V(n?B.a4c:B.Qq,o,o,o,o,o)
v.push(A.at(A.hA(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.eaC(p),o),o,o,o))}return A.c6(o,l,A.bm(!0,A.w(v,B.B,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c5L(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.hb.j(0.35),B.dv,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.V(B.Aj,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aE(!1,B.a3,!0,m,A.aN(!1,m,!0,A.q(m,D.c8w,B.f,m,m,new A.p(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cz,!0,m,m,m,m,m,m,m,m,m,m,m,n.gajp(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fQZ,m,m,m)
r=r.gasY()
p=n.d.gasY()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.w(A.a([q,B.bs,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.B,m,B.e,B.i,0,B.p),1)],o)
if(C.uR(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c5o,m,m,m,n.gczr(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.j9:B.ns
r=r?"Private":"Public"
r=A.E(n.azx(q,"Privacy",r,n.a.d.w?n.gcMa():m),1)
q=A.E(n.azx(B.xE,"Tree code",n.d.c,new C.e9K(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ae,A.A(A.a([r,B.aa,q,B.aa,A.E(n.azx(D.bWH,"Collaborators",p,n.gcaP()),1)],o),B.l,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.lf){s=B.c.j(0.15)
B.d.u(p,A.a([B.N,A.aE(!1,B.a3,!0,A.n(999),A.aN(!1,A.n(999),!0,new A.C(B.h0,A.A(A.a([A.V(B.ok,B.c,m,m,m,14),B.dU,A.c("View only",m,m,m,m,m,m,B.adA,m,m,m)],o),B.l,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.q(m,A.bv(u,new A.am(B.a0,m,B.ac,B.t,A.a([t,new A.C(B.I0,A.w(p,B.B,m,B.e,B.i,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.p(m,m,m,w,v,D.ccU,B.m),m,m,m,m,m,m,m,1/0)},
azx(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aE(!1,B.a3,!0,A.n(14),A.aN(!1,A.n(14),!0,new A.C(K.aqi,A.w(A.a([A.V(d,B.c,w,w,w,18),B.at,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rY,A.c(f,w,1,B.a2,w,w,w,Ar.yf,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bjP.prototype={
C(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bL
w=s.d
v=s.e
u=A.a([A.b5(t,t,t,new C.bjS(s,t),new A.aw(w,v))],x.p)
r=r.gdW(r)
B.d.u(u,r.dT(r,new C.dn8(this),x.l))
r=s.c
B.d.u(u,new A.O(r,new C.dn9(this),A.T(r).k("O<1,x>")))
return new A.C(B.vo,new A.a4(w,v,new A.am(B.a0,t,B.ac,B.f,u,t),t),t)}}
C.Lw.prototype={}
C.H7.prototype={}
C.bjR.prototype={
gbpl(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aNb.prototype={}
C.bjS.prototype={
bV4(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.U()
v=A.M()
v.r=B.bH.j(0.75).gp(0)
v.c=2
v.d=B.bI
d.ah(new A.m(n,w),new A.m(m,w),v)
u=(n+m)/2
t=new A.aK(q.r,B.ak,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b_(u,q))
s=w-1.1
r=w-8.8
t.E(new A.i7(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.i7(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bA())
q=A.M()
q.r=B.c.gp(0)
d.P(new A.m(u,w),9,q)
q=A.M()
q.r=B.bH.gp(0)
d.af(t,q)},
bV1(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.dnt())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aR(a0,new C.dnu(f))
t=new A.O(a0,new C.dnv(f),A.T(a0).k("O<1,H>")).c1(0,new C.dnw()).cI(0,1/0,B.pI)
w=f.a
d.ah(f,new A.m(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.m(o,v),p,e)
continue}l=J.me(n)
k=Math.min(10,m/2)
m=$.U()
j=A.a([],r)
i=new A.aK(m.r,B.ak,null,null,j)
j.push(new A.b_(w,v-k))
i.ac()
m=l*k
h=new A.co(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ac()
m=new A.co(o,v,o,v+k)
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
$.U()
w=A.M()
w.r=B.bW.j(0.75).gp(0)
w.c=2.2
w.b=B.af
w.d=B.bI
w.e=B.dR
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bV1(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bV4(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.bnH.prototype={
gcgY(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aGW
switch(w.c.a){case 0:return D.d6S
case 1:return D.dl0
case 2:return D.dFc}},
gch0(){var w=this.c,v=C.hSi(w.w),u=C.hSi(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
C(d){var w,v,u,t=this,s=null,r=A.R(d).ax.a===B.I,q=t.gcgY(),p=t.c,o=A.bIM(p.f),n=t.gch0(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cO,10)],m),k=r?B.ay:B.c,j=A.K(r?B.ay:B.c,B.r,2)
if(o!=null)w=A.u5(B.z,s,B.cr,B.c1,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.q(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(s,s,s,s,s,new A.a7(B.a5,B.a9,B.w,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.q(s,A.q(s,A.id(w,B.ap),B.f,s,s,new A.p(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.p(s,s,s,s,l,new A.a7(B.ax,B.aC,B.w,q,s,s),B.a6),s,56,s,s,B.DD,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.K(r?B.ay:B.c,B.r,1.5)
l.push(A.ao(s,A.q(s,A.c(""+k,s,s,s,s,s,s,D.h0Z,s,s,s),B.f,s,s,new A.p(B.ci,s,w,j,s,s,B.m),s,s,s,s,D.bNt,s,s,s),s,s,s,-6,-4,s))}k=r?B.cx:B.c
j=A.n(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.v.j(r?0.3:0.06),B.dQ,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cx,s,s,s,s,s,s,s,s,u,s,s,B.C,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bl,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a4(84,112,A.w(A.a([new A.am(B.a0,s,B.ac,B.f,l,s),B.at,A.q(s,A.w(p,B.l,s,B.e,B.P,0,B.p),B.f,s,D.bb2,new A.p(k,s,w,j,m,s,B.m),s,s,s,s,D.bNE,s,s,s)],v),B.l,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.biS.prototype={
a5(d,e){var w,v,u,t,s
$.U()
w=A.M()
v=this.b
u=v?B.c:D.boh
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.P(new A.m(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.bBV.prototype={
C(d){var w=this,v=null,u=new C.fzi(w),t=w.c,s=t?B.cx:B.c,r=A.n(12),q=u.$3(B.ii,"Zoom in",w.d),p=A.q(v,v,B.f,t?B.bz:B.fw,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xB,"Zoom out",w.e)
return A.aE(!1,B.a3,!0,r,A.w(A.a([q,p,o,A.q(v,v,B.f,t?B.bz:B.fw,v,v,v,1,v,v,v,v,v,22),u.$3(B.asO,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dJ,v,v,v,B.ai)}}
C.br5.prototype={
C(d){var w=this,v=null,u=B.bW.j(0.15),t=A.K(B.bW,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.q(v,A.w(A.a([A.V(s?B.a4c:B.Qq,B.bW,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fXU,v,v,v)],r),B.l,v,B.ba,B.i,0,B.p),B.f,v,v,new A.p(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.aj,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fVF,B.K,v,v)],r)
if(s){t=A.a([B.aj],r)
s=w.d
B.d.u(t,new A.O(s,new C.f8P(w),A.T(s).k("O<1,x>")))
B.d.u(u,t)}return new A.a4(84,v,A.w(u,B.l,v,B.e,B.i,0,B.p),v)}}
C.a1w.prototype={
R(){return new C.aFO()},
bx(){return this.Q.$0()},
ge8(){return this.w}}
C.aFO.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a4()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ay()
r.d!==$&&A.aU()
r.d=new A.au(new A.bd(t,B.bb,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aU()
r.e=new A.au(new A.bd(t,B.bb,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aU()
r.f=new A.au(new A.bd(t,B.bb,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aU()
r.r=new A.au(new A.bd(t,B.bb,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aU()
r.w=new A.au(new A.bd(t,B.bb,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aU()
r.x=new A.au(new A.bd(t,B.bb,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zU:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.iCY(w.r,w.f)
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
RM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$RM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hGh(p.y,p.w)
w=3
return A.b(A.m1(t.a.w,B.KI),$async$RM)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b46(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$RM)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.icL(p.y,p.w)
t.a.bx()
case 5:w=7
return A.b(A.Ea(78,800),$async$RM)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dEk(t,q))
case 1:return A.h(u,v)}})
return A.i($async$RM,v)},
ch_(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.d()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.ie(B.n.v(1000*Date.now()),w,D.zU,null,null,null,"","","","","",1,!1,0)
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
s=v.aJ3(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).N(s)},
acQ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$acQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dEj(r),s,null,!0,!0,x.y),$async$acQ)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$acQ,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.R(d).ax.a===B.I,i=new C.uC(j),h=l.a.e,g=A.T(h).k("X<1>"),f=A.B(new A.X(h,new C.dEt(l),g),g.k("L.E"))
h=j?B.eo:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bLS,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aT:B.ay,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.fJ(A.aN(!1,k,!0,new A.C(B.m7,A.V(B.es,B.pV,k,k,k,17),k),B.cz,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbPT(),k,k,k,k,k,k,k),k,"Delete member",k,k,k),k,k,k,0,k,k))
u=j?B.kg:B.iO
t=A.bIM(l.as)
if(l.as==null)s=A.V(B.q5,j?B.bu:B.bl,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.am(B.a0,k,B.ac,B.t,A.a([A.hr(u,t,s,k,42),A.ao(0,A.hr(B.bW,k,D.bZy,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcgX(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aFQ(t,"Full name",B.mD,1,1,i,B.mT)
u=l.y
u===$&&A.d()
u=A.w(A.a([t,B.S,new C.bnF(i,u,new C.dEu(l),k)],v),B.l,k,B.e,B.i,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.C,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bF8],q)
o=l.a.e
B.d.u(p,new A.O(o,new C.dEv(),A.T(o).k("O<1,eS<o?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.C,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bFa],q)
B.d.u(q,new A.O(f,new C.dEx(),A.T(f).k("O<1,eS<o?>>")))
o=A.w(A.a([t,B.aj,new C.afT(i,r,"Who is their parent?",p,new C.dEy(l),k,o),B.az,n,B.aj,new C.afT(i,m,"Who is their spouse / partner?",q,new C.dEz(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.d()
q=C.aFQ(q,"Birth date",D.arW,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aFQ(m,"Birth place",B.a4v,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aFQ(n,"Date of death (if deceased)",D.au6,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aFQ(p,"Occupation",A8.Ry,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.am(B.z,k,B.ac,B.t,w,k),B.az,s,B.by,new C.afU(i,"Identity",u,k),B.ae,new C.afU(i,"Family links",o,k),B.ae,new C.afU(i,"Life details",A.w(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aFQ(r,"Notes",B.lh,5,3,i,k)],v),B.l,k,B.e,B.i,0,B.p),k),B.ae,new C.aFP(i,"Child order",l.cpD(l.at),new C.dEA(l),new C.dEB(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hv6(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dEC(l):k
B.d.u(r,A.a([B.S,new C.aFP(i,"Visible in tree",u,w,new C.dED(l),k)],v))}r.push(B.S)
w=j?B.kg:B.iO
u=A.n(14)
t=A.K(j?B.ew:B.bP,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aT:B.ay,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.q(k,A.ji(k,B.bW,k,B.ag,k,new C.dEE(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.p(w,k,t,u,k,k,B.m),k,k,k,k,B.aoy,k,k,k))
r.push(B.by)
w=j?B.aT:B.ay
j=j?B.ew:B.bP
r.push(A.A(A.a([A.E(A.dV(B.oC,new C.dEw(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.bb(A.n(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.E(A.bI(D.fxX,k,l.gcgZ(),A.bp(B.aZ,k,k,0,B.c,k,B.cq,k,new A.bb(A.n(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.i,0,k,k))
r.push(B.at)
return A.em(B.fh,k,B.ag,h,new A.a4(420,k,A.cb(A.w(r,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.apv,k,B.aoK,new A.bb(g,B.a1),k,k)},
cpD(d){var w=B.n.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.n.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.afU.prototype={
C(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.C,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.kg:B.iO,s=A.n(16)
return A.w(A.a([new A.C(B.a32,u,w),A.q(w,this.e,B.f,w,w,new A.p(t,w,A.K(v?B.ew:B.bP,B.r,1),s,w,w,B.m),w,w,w,w,B.bg,w,w,1/0)],x.p),B.B,w,B.e,B.i,0,B.p)}}
C.bnG.prototype={
C(d){var w,v=this,u=null,t=v.c.a,s=t?B.eo:B.c,r=A.n(12),q=A.K((t?B.ew:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aT:B.ay,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.q(u,A.aO(u,B.M,!1,u,!0,B.t,u,A.aQ(),v.d,u,u,u,u,u,2,A.bB(u,B.f_,u,B.tO,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bu:B.bl,u,u,u,u,u,u,u,u,u,u,u,B.cD,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bW,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.am,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ad,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a8,u,p,u,u,u,u),B.f,u,u,new A.p(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.afT.prototype={
C(d){var w=this,v=null,u=w.c.a,t=u?B.eo:B.c,s=A.n(12),r=A.K((u?B.ew:B.bP).j(0.85),B.r,1),q=A.V(B.tW,u?B.bu:B.bl,v,v,v,v),p=A.l(v,v,u?B.aT:B.ay,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.eo:B.c
return A.q(v,new A.EY(A.a6Z(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bl,v,v,v,v,v,v,v,v,v,v,v,B.cD,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.p(t,v,r,s,v,v,B.m),v,v,v,v,B.ld,v,v,v)}}
C.bnF.prototype={
C(d){var w=new C.dEF(this)
return A.A(A.a([w.$3(D.xn,"Male",B.Rg),B.aa,w.$3(D.p4,"Female",B.R1),B.aa,w.$3(D.zU,"Other",B.oh)],x.p),B.l,null,B.e,B.i,0,null,null)}}
C.aFP.prototype={
C(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.kg:B.iO,r=A.n(14),q=A.K(t?B.ew:B.bP,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aT:B.ay,v,v,v,v,v,v,v,v,13,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.q(v,A.A(A.a([A.E(A.w(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bl,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.B,v,B.e,B.i,0,B.p),1),new C.aMd(u,B.xB,w.f,v),B.b6,new C.aMd(u,B.ii,w.r,v)],o),B.l,v,B.e,B.i,0,v,v),B.f,v,v,new A.p(s,v,q,r,v,v,B.m),v,v,v,v,B.eq,v,v,v)}}
C.aMd.prototype={
C(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bW.j(0.12)
else w=s.c.a?B.eo:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bW
else t=(s.c.a?B.bu:B.bl).j(0.4)
return A.aE(!1,B.a3,!0,v,A.aN(!1,u,!0,new A.a4(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.afV.prototype={
bZi(d){switch(d.a){case 0:return B.bW
case 1:return B.bH
case 2:return B.cH}},
bZj(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b28(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
BD(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.eo:B.c
u=A.n(12)
t=A.K((w?B.ew:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.V(f,B.bW,p,p,p,18),B.ar],s))
q=A.c(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bl,p,p,p,p,p,p,p,p,9,p,p,B.C,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.w(A.a([q,B.at,A.c(o,p,p,p,p,p,p,A.l(p,p,w?B.aT:B.ay,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.B,p,B.e,B.i,0,B.p),1))
return A.q(p,A.A(r,B.B,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(v,p,t,u,p,p,B.m),p,p,p,B.cA,B.zC,p,p,1/0)},
ahD(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.C,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.kg:B.iO,s=A.n(16),r=A.K(v?B.ew:B.bP,B.r,1)
return A.w(A.a([new A.C(B.a32,u,w),A.q(w,A.w(e,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(t,w,r,s,w,w,B.m),w,w,w,w,B.bS,w,w,1/0)],x.p),B.B,w,B.e,B.i,0,B.p)},
C(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hY0(r,q),o=q.c,n=t.bZi(o),m=A.bIM(q.f),l=t.e.a,k=l?B.eo:B.c,j=A.n(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aT:B.ay,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.lf?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bu:B.bl,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.q(s,A.hr(u,m,m==null?A.V(B.q5,n,s,s,s,48):s,s,52),B.f,s,s,new A.p(s,s,w,s,v,s,B.a6),s,s,s,s,B.eH,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.K(n.j(0.45),B.r,1)
v=A.at(A.q(s,A.c(t.bZj(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(w,s,u,v,s,s,B.m),s,s,s,s,B.lE,s,s,s),s,s,s)
u=x.p
i=A.a([t.BD("Full name",i,B.mD)],u)
if(p>0)i.push(t.BD("Child order","#"+p,B.R7))
r=A.a([h,B.at,r,B.aN,l,B.S,v,B.by,t.ahD("Identity",i),B.ae,t.ahD("Life details",A.a([t.BD("Birth date",q.w,D.arW),t.BD("Birth place",q.x,B.a4v),t.BD("Date of death",q.y,D.au6),t.BD("Occupation",q.z,A8.Ry)],u)),B.ae,t.ahD("Family links",A.a([t.BD("1. Parent",t.b28(q.d),B.Ir),t.BD("2. Spouse",t.b28(q.e),B.IG)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.ae,t.ahD("Notes",A.a([t.BD("Notes",q,B.lh)],u))],u))
r.push(B.by)
r.push(A.bI(B.Mj,s,new C.dEP(d),A.bp(B.aZ,s,s,s,s,s,B.cq,s,new A.bb(A.n(14),B.a1),s,s,s)))
return A.eF(s,k,new A.cO(B.mo,A.cb(A.w(r,B.al,s,B.e,B.P,0,B.p),B.t,s,B.y,s,s,B.xi,s,s,B.ah),s),s,s,s,B.I3,s,B.db,s,new A.bb(j,B.a1),s)}}
C.H3.prototype={
C(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bl
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.tR,A.fJ(A.aE(!1,B.a3,!0,A.n(8),A.aN(!1,A.n(8),!0,new A.a4(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u,u),u)}}
C.at2.prototype={
fb(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.T(w).k("O<1,a9<o,@>>")
w=A.B(new A.O(w,new C.cjg(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j7(w,new C.cjh(),t,x.fO))
return s}}
C.at3.prototype={
R(){return new C.aHo(A.a([],x.bF))},
gd8(){return this.c}}
C.aHo.prototype={
Z(){this.a4()
this.Ls()},
Ls(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ls=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cjk(t.a.c),$async$Ls)
case 3:r=e
w=4
return A.b(C.BL(t.a.c),$async$Ls)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rM(q,new C.eaL(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.eaM(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Ls,v)},
zT(d){var w=null,v=this.c
if(v==null)return
v.M(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
Mk(d,e){return this.cPU(d,e)},
cPU(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Mk=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.eaQ(q,e))
t=3
w=6
return A.b(d.$0(),$async$Mk)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.eaR(q))
$.eZ.mY()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Mk,v)},
ZY(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pZ(r,s.c,s.e),$async$ZY)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Mk(new C.eaI(t),"Preparing download\u2026"),$async$ZY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZY,v)},
a_1(d){return this.bX7(d)},
bX7(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pZ(r,s.c,s.e),$async$a_1)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Mk(new C.eaJ(t,d),"Preparing file\u2026"),$async$a_1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_1,v)},
ajM(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ajM=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.y9.cr().NZ(B.Ur,B.vu,!0),$async$ajM)
case 7:r=e
o=r
q=o==null?null:J.ez(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
o=A.k1(o,0,null)
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
case 6:u=A.HY()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ajM,v)},
a_F(d){return this.c6G(d)},
c6G(d){var w=0,v=A.j(x.H),u=this
var $async$a_F=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Mk(new C.eaK(u,d),"Restoring family trees\u2026"),$async$a_F)
case 2:return A.h(null,v)}})
return A.i($async$a_F,v)},
a_E(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_E=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ajM(),$async$a_E)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.a_F(s),$async$a_E)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_E,v)},
a53(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a53=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pZ(r,s.c,s.e),$async$a53)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Mk(new C.eaP(t),"Creating QR code\u2026"),$async$a53)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a53,v)},
a4D(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.E8()){t.zT("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ca(A.e4(new C.eaN(),!0,null,x.N)),$async$a4D)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.a_F(r),$async$a4D)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a4D,v)},
C(d){var w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===B.I,n=o?B.CJ:B.hZ,m=o?D.an0:B.aT,l=o?B.aM:B.bP,k=o?B.aT:B.ay,j=new C.dnx(n,m,l,k,o?B.bQ:B.bl)
l=A.aI(p,p,p,p,A.V(B.eI,k,p,p,p,20),p,p,p,new C.eaT(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eR(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dn5(!0,B.jJ,B.aH,B.aH,q.r?p:q.gcG4(),j,s,"Show restore QR"),1),B.ar],u))}s=q.e
r=q.r?p:q.gcC5()
t.push(A.E(C.dn5(!s,B.jK,B.b4,B.bj,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dn5(!1,B.hR,B.aZ,B.bW,q.r?p:q.gbX0(),j,"Photos & books included","Download all trees"),1),B.ar],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dn5(!1,Q.At,B.as,B.aQ,q.r?p:q.gc6D(),j,s,"Upload backup file"),1))
l=A.a([new C.bjQ(v,l,p),B.lq,new C.af8(j,"QR restore",p),B.S,t,B.df,new C.af8(j,"Backup files",p),B.S,A.A(r,B.l,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ab(q.d)>1&&q.a.f==null){v=A.a([B.lq,new C.af8(j,"One tree",p),B.S],u)
B.d.u(v,J.b8(q.d,new C.eaU(q,j),x.l))
B.d.u(l,v)}l=A.a([A.ck(l,p,p,Av.a2V,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.K(B.aZ.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.v.j(o?0.3:0.1),B.dv,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.q(p,A.A(A.a([Aw.aXF,B.bd,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(m,p,t,v,s,p,B.m),p,p,p,p,A1.Du,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.am(B.a0,p,B.ac,B.t,l,p),p,!1,!1,p,p)}}
C.dnx.prototype={}
C.bjQ.prototype={
C(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aZ.j(0.32),B.kx,28)],x.V)
t=A.ao(p,A.V(B.vN,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.q(p,new A.am(B.a0,p,B.ac,B.t,A.a([t,new A.C(B.ad,A.A(A.a([A.q(p,D.c80,B.f,p,p,new A.p(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.pv,A.E(A.w(A.a([D.h6m,B.N,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.B,p,B.e,B.i,0,B.p),1)],q),B.B,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.p(p,p,p,v,u,D.cgh,B.m),p,p,p,p,p,p,p,p)}}
C.af8.prototype={
C(d){var w=null
return A.A(A.a([A.q(w,w,B.f,w,w,new A.p(B.aZ,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3),B.aa,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.bjO.prototype={
C(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aH.j(0.1),B.cO,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aE(!1,B.a3,!0,q,A.aN(!1,o,!0,A.eK(A.d3(new A.C(E.a2x,A.w(A.a([A.q(q,A.V(r.d,t,q,q,q,22),B.f,q,q,new A.p(v,q,s,u,q,q,B.m),q,q,q,q,B.vr,q,q,q),B.ae,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bs,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cD,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.B,q,B.e,B.i,0,B.p),q),w),q,new A.p(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bjT.prototype={
C(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aZ.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aE(!1,B.a3,!0,v,A.aN(!1,u,!0,A.eK(new A.C(B.f3,A.A(A.a([A.q(v,D.c7a,B.f,v,v,new A.p(q,v,A.K(B.aZ.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.vr,v,v,v),B.bd,A.E(A.w(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.B,v,B.e,B.i,0,B.p),1),A.V(B.hR,o,v,v,v,20)],n),B.l,v,B.e,B.i,0,v,v),v),v,new A.p(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a1Q.prototype={
R(){return new C.aHn()},
gd8(){return this.c}}
C.aHn.prototype={
Z(){this.a4()
this.acn()},
acn(){var w=0,v=A.j(x.H),u=this,t
var $async$acn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(R.b6N(u.a.c,B.Fm),$async$acn)
case 2:t=e
if(u.c!=null)u.l(new C.eaD(u,t))
return A.h(null,v)}})
return A.i($async$acn,v)},
alc(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$alc=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.eaE(q))
t=4
p=R.hI6(q.a.d,B.Fm)
if(p==null){n=A.be("Could not read this QR code.")
throw A.Y(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(R.avp(n.e,m,l,B.Fm,p,n.f),$async$alc)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.eaF(q))
q.c.M(x.q).f.T(D.fHA)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ad(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(B.a.eu(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.l(new C.eaG(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$alc,v)},
C(d){var w,v,u,t,s,r=this,q=null,p=A.R(d).ax.a===B.I,o=p?B.o_:B.nj,n=p?B.j1:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eR(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.hnd,q,q,q,1,q,!0)
w=A.n(24)
v=A.K(B.aZ.j(0.35),B.r,1)
u=A.qA(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aZ,q,q,q,q,q,q,q,q,q,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.q(q,A.w(A.a([B.N,u,B.by,t,B.N,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ao,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.ba,B.i,0,B.p),B.f,q,q,new A.p(n,q,v,w,q,q,B.m),q,q,q,q,B.ad,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bx,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcBN()
if(u)u=B.LI
else u=A.V(r.e===!0?B.h3:Ab.a4o,q,q,q,q,q)
w=A.a([w,B.ae,v,B.ae,new A.a4(1/0,q,A.eo(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cg,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aZ,q,B.hx,q,q,q,new A.ax(B.aZ.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.hq,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aE:B.ao,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.S)
w.push(new A.a4(1/0,q,A.bI(Ah.BQ,q,new C.eaH(d),A.bp(B.aZ,q,q,q,q,B.hx,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.C(B.ad,A.w(w,B.l,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a1R.prototype={
R(){return new C.bpc(A.Aj(B.zr,B.oJ,B.vU))}}
C.bpc.prototype={
t(){this.d.t()
this.a3()},
C(d){var w=null
return A.c6(A.eR(w,w,w,!0,!0,B.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.heI,w,w,w,1,w,!0),B.v,A.Ai(this.d,B.c1,new C.eaV(this,d)),w,!1,!1,w,w)}}
C.b2v.prototype={
C(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.TT,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.mq.prototype={}
C.a8R.prototype={
R(){return new C.boQ(null,null)}}
C.boQ.prototype={
Z(){var w=this,v=null
w.a4()
w.d=A.br(v,B.tI,v,1,v,w)
w.e=A.br(v,B.o3,v,1,v,w)
w.a.toString
w.d.cT(0)
w.e.cT(0)},
bA(d){var w,v,u=this
u.bK(d)
u.a.toString
w=u.d
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cT(0)
w=u.e
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cT(0)},
t(){var w=this.d
w===$&&A.d()
w.t()
w=this.e
w===$&&A.d()
w.t()
this.bCV()},
C(d){var w,v,u=this,t=B.d.du(D.a8z,new C.dWN(u),new C.dWO())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cHr(A.ca(new A.hD(A.a([w,v],x.dS)),new C.dWP(u,t),null),!0)}}
C.boP.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b72(d,e)
break
case"house":p.mE(d,e,D.dqG)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdl()
$.U()
t=A.M()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.P(new A.m(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mK(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Cu(d,e,12)
p.zs(d,e,B.lA,5,14)
break
case"grocery":p.cqo(d,e)
break
case"calculator":p.cq5(d,e)
break
case"lumber":p.cqw(d,e)
break
case"kitchen":p.cqr(d,e)
break
case"landscape":p.mE(d,e,D.drh)
s=new A.aK($.U().r,B.ak,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.b_(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.co(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.co(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bA())
w=A.M()
w.r=B.eu.j(0.85).gp(0)
d.af(s,w)
p.Cu(d,e,8)
p.zs(d,e,B.iQ,4,18)
break
case"plumbing":p.cqG(d,e)
break
case"electrical":p.mE(d,e,D.dEc)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.U()
u=A.M()
u.r=B.c.j(q*0.12).gp(0)
d.aE(new A.a5(0,0,0+e.a,0+e.b),u)
p.mK(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mK(d,e,B.oX.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Cu(d,e,10)
break
case"store":p.cqQ(d,e)
break
case"paint_remodel":p.cqB(d,e)
break
case"roofing":p.cqI(d,e)
break
case"warehouse":p.cqX(d,e)
break
case"vehicles":p.cqV(d,e)
break
case"farm":p.cqi(d,e)
break
case"restaurant":p.cqH(d,e)
break
case"tools":p.cqT(d,e)
break
case"wallet":p.cqW(d,e)
break
case"concrete":p.cqb(d,e)
break
case"blueprint":p.cq3(d,e)
break
default:p.b72(d,e)}},
mE(d,e,f){var w,v=new A.a5(0,0,0+e.a,0+e.b)
$.U()
w=A.M()
w.san(new A.a7(B.ax,B.aC,B.w,f,null,null).az(0,v))
d.aE(v,w)},
mK(d,e,f,g,h){var w,v,u,t=new A.m(e.a/2,e.b/2),s=e.gdl()/2-h
$.U()
w=A.M()
w.b=B.af
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.c0(t,s),u,u+0.1439896632895322-u,!1,w)}},
zs(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdl()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.P(new A.m(q+t*o,p+s*o),3.5,r)}},
Cu(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.h.F(t*0.17,0.9)
q=B.h.F(t*0.23,0.85)
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.P(new A.m(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b72(d,e){var w,v=this
v.mE(d,e,D.dCi)
w=v.c
v.mK(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mK(d,e,B.bO.j(0.45),-w*3.141592653589793*1.4,22)
v.bUY(d,e,B.i1,w)
v.zs(d,e,B.c.j(0.7),6,8)},
bUY(d,e,f,g){var w,v,u,t,s,r
$.U()
w=A.M()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aE(new A.a5(16,r,t,r+3),w)}},
cqo(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mE(d,e,D.cCj)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.n.F(t,3)
q=Math.sin(s)
p=B.n.ao(t,3)
o=Math.cos(s*0.8)
n=B.n.F(t,2)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.doD[B.n.F(t,4)].j(0.85).gp(0)
d.P(new A.m(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mK(d,e,B.c.j(0.35),w,16)
l.zs(d,e,B.iQ,5,12)},
cq5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mE(d,e,D.cCr)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdl()
$.U()
q=A.M()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.P(new A.m(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h1(h,B.cK,h,h,h,h,B.a8,B.ca,h,B.e6,B.cb)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dti[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.n.F(o,2)
p.sb_(0,new A.eH(r,h,h,B.cW,h,h,h,h,h,h,new A.G(!0,q,h,h,h,h,14+m*4,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a5(d,new A.m(t*(0.08+B.n.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.n.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cCu[o]
l=B.l6.j(0.28+0.3*Math.sin(n))
k=B.n.F(o,2)
p.sb_(0,new A.eH(m,h,h,B.cW,h,h,h,h,h,h,new A.G(!0,l,h,h,h,h,12+k*3,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a5(d,new A.m(t*(0.55+B.n.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.n.ao(o,3)*0.38)+Math.sin(n)*6))}i.mK(d,e,B.c.j(0.35),w*1.5,14)
i.mK(d,e,B.eQ.j(0.55),-v*3.141592653589793*2,8)
i.mK(d,e,B.oR.j(0.4),r*2.8,22)
i.zs(d,e,B.pQ,8,10)
i.Cu(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.h.F(w+o*0.22,0.9)
$.U()
v=new A.ar(B.V,B.R,B.X,B.Y,B.W)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.m(12,j),new A.m(t,j),v)}},
cqw(d,e){var w,v,u,t,s,r,q,p,o=this
o.mE(d,e,W.aDX)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bx(new A.a5(20,r,u,r+10),B.hw)
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=A.ap(B.hd,B.nP,(s+1)/2).gp(0)
d.aq(q,p)}o.mK(d,e,B.hd.j(0.35),w,15)
o.Cu(d,e,8)},
cqr(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mE(d,e,D.dpb)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.h.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.h.F(s*0.13,0.7)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.P(new A.m(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mK(d,e,B.bO.j(0.4),-w*3.141592653589793*2.2,11)
l.zs(d,e,B.qU,4,14)},
cqG(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mE(d,e,D.dbD)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.h.F(s,0.12)
$.U()
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.af
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.P(new A.m(w,u),q*(0.12+r*0.14+p),o)}n.zs(d,e,B.pU,6,12)
n.mK(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cqQ(d,e){var w,v,u,t,s,r,q,p=this
p.mE(d,e,D.cQp)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bx(new A.a5(r,14,r+u,22),B.jM)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.fB,B.bO,(s+1)/2).gp(0)
d.aq(r,q)}p.mK(d,e,B.c.j(0.3),w,16)
p.Cu(d,e,8)
p.zs(d,e,B.wY,5,13)},
cqB(d,e){var w,v,u,t,s,r,q
this.mE(d,e,D.diU)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.h.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bx(new A.a5(r,q,r+8,q+(18+s*22)),B.iF)
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=[B.iL,B.dH,B.bO,B.ek][t].j(0.85).gp(0)
d.aq(q,r)}this.mK(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cqI(d,e){var w,v,u,t,s,r,q
this.mE(d,e,D.dfQ)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.h.F(v+t*0.12,0.75))
r=B.n.F(t,4)*0.22
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.m(u*(0.1+r),s),new A.m(u*(0.18+r),s+10),q)}this.zs(d,e,B.cG,7,11)},
cqX(d,e){var w,v,u,t,s,r,q,p
this.mE(d,e,D.cTg)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bx(new A.a5(q,p,q+(t-s*8),p+16),B.hw)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.cG,B.aT,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mK(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cqV(d,e){var w,v,u,t,s,r,q
this.mE(d,e,D.dJ_)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.h.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.n.F(t,2)*0.08)
r=A.bx(new A.a5(s,r,s+28,r+8),B.hw)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.Cu(d,e,6)},
cqi(d,e){var w,v,u,t,s,r,q,p
this.mE(d,e,D.dny)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.U()
s=A.M()
s.r=B.oX.j(0.75).gp(0)
d.P(new A.m(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.i_.j(0.85).gp(0)
p.c=3
d.ah(new A.m(q,v),new A.m(q+s*6,t),p)}this.mK(d,e,B.oX.j(0.35),w,14)},
cqH(d,e){var w,v,u,t,s,r,q=this
q.mE(d,e,D.dqt)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.c1(new A.m(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=B.c.j(0.22).gp(0)
d.c4(s,r)}q.zs(d,e,B.qU,5,16)
q.Cu(d,e,7)},
cqT(d,e){var w,v,u,t,s,r,q,p,o=this
o.mE(d,e,D.dG5)
w=o.c
v=w*3.141592653589793
o.mK(d,e,B.nP.j(0.55),v*3,10)
o.mK(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.nP.j(0.8).gp(0)
d.P(new A.m(v+r*34,u+q*22),4,p)}},
cqW(d,e){var w,v,u,t,s,r,q,p,o=this
o.mE(d,e,D.dJN)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bx(new A.a5(q,p,q+36,p+22),B.jM)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.iQ,B.oX,r).gp(0)
d.aq(p,q)}o.Cu(d,e,9)
o.mK(d,e,B.c.j(0.4),w*2.2,12)},
cqb(d,e){var w,v,u,t,s,r,q,p
this.mE(d,e,D.dwz)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.c0(new A.m(v,u),34)
$.U()
s=A.M()
s.b=B.af
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cQ(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.bP.j(0.85).gp(0)
d.P(new A.m(v+t*34,u+s*34),3,p)}},
cq3(d,e){var w,v,u,t,s,r,q
this.mE(d,e,D.drG)
$.U()
w=A.M()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.m(t,0),new A.m(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.m(0,s),new A.m(v,s),w)
r=this.c
q=u*B.h.F(r*0.85,1)
$.U()
u=A.M()
u.r=B.dH.j(0.45).gp(0)
d.aE(new A.a5(0,q,0+v,q+6),u)
this.mK(d,e,B.lA.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.awa.prototype={
a29(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a29=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aUA(),$async$a29)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.ab8(s),$async$a29)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a29,v)},
ajN(d){return this.cti(d)},
cti(d){var w=0,v=A.j(x.H),u=this,t
var $async$ajN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iMa(d),$async$ajN)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ajN,v)},
C(d){var w,v,u=null,t=A.R(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.kg:B.iO
w=x.p
v=A.a([C.aUY(!0,B.t7,1/0,B.q8,u,s,1/0)],w)
if(!r)v.push(new A.bP(new A.p(u,u,u,u,u,new A.a7(B.aY,B.b2,B.w,A.a([B.L,B.v.j(0.35)],x.O),u,u),B.m),B.bn,new A.bK(B.aY,u,u,new A.C(B.tK,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aEW,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.dg(D.c0k,u,D.h2o,new C.ctb(this,d),A.bp(B.aZ,u,u,u,B.c,u,B.jE,u,u,u,u,B.cp)),1),B.aa,A.E(A.eo(D.c9l,u,D.hhW,this.gcjS(),A.dj(u,u,B.v.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jE,u,u,D.b9F,u,u,u,B.cp)),1)],w),B.l,u,B.e,B.i,0,u,u),u,u,8,8,u,u))
return new A.fD(1.7777777777777777,A.aE(!1,B.a3,!0,B.t7,new A.am(B.a0,u,B.b7,B.t,v,u),B.ap,t,0,u,u,u,u,u,B.ai),u)}}
C.aPE.prototype={
b0(){this.b9()
this.b7()
this.dV()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdQ())
w.bd$=null
w.a3()}}
C.aXW.prototype={}
C.aXV.prototype={}
C.aVZ.prototype={}
C.a0q.prototype={
R(){return new C.aCt()}}
C.aCt.prototype={
Z(){var w,v,u=this
u.a4()
u.a.toString
w=new A.bd("",B.bb,B.aP)
v=$.ay()
u.d!==$&&A.aU()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a3()},
M7(){var w,v,u=this,t=u.d
t===$&&A.d()
w=B.a.i(t.a.a)
if(w.length===0){u.c.M(x.q).f.T(D.fI5)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).N(new C.aXW(w,v))},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.R(d).ax.a===B.I,l=m?B.eo:B.c,k=A.n(20),j=A.q(n,D.c8Z,B.f,n,n,new A.p(B.aZ.j(0.15),n,n,A.n(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aT:B.ay,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.w(A.a([i,B.bs,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bl,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.B,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bd,i,A.aI(n,n,n,n,A.V(B.cE,m?B.bu:B.bl,n,n,n,n),n,n,n,new C.deB(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.i,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bl,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bl,n,n,n,n,n,n,n,n,11,n,n,B.cD,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hIn(new C.deC(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aT:B.ay,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.kg:B.iO
r=A.n(12)
q=A.n(12)
p=m?B.ew:B.bP
t=A.aO(n,B.M,!0,n,!0,B.t,n,A.aQ(),u,n,n,n,n,n,2,A.bB(n,new A.b6(4,r,B.dz),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.am,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.deD(o),n,!1,n,n,!1,n,!0,n,B.ad,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a8,n,A_.LR,n,n,n,n)
u=m?B.aT:B.ay
m=m?B.ew:B.bP
return A.eF(n,l,new A.cO(B.mo,A.cb(A.w(A.a([j,B.aN,i,B.at,w,B.N,v,B.aN,t,B.by,A.A(A.a([A.E(A.dV(B.dy,new C.deE(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.cq,n,new A.bb(A.n(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.ar,A.E(A.bI(D.hic,n,o.ga5o(),A.bp(B.aZ,n,n,n,B.c,n,B.cq,n,new A.bb(A.n(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.i,0,n,n)],h),B.B,n,B.e,B.P,0,B.p),B.t,n,B.y,n,n,B.Dx,n,n,B.ah),n),n,n,n,B.Dy,n,B.db,n,new A.bb(k,B.a1),n)}}
C.a0p.prototype={
R(){return new C.aCs()}}
C.aCs.prototype={
Z(){this.a4()
var w=$.ay()
this.d!==$&&A.aU()
this.d=new A.au(B.aw,w)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a3()},
M7(){var w,v=this.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0){this.c.M(x.q).f.T(D.fFH)
return}v=this.c
v.toString
A.a6(v,!1).N(new C.aXV(w))},
C(d){var w,v,u,t,s,r,q=null,p=A.R(d).ax.a===B.I,o=p?B.eo:B.c,n=A.n(20),m=A.q(q,D.c5f,B.f,q,q,new A.p(B.bW.j(0.15),q,q,A.n(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aT:B.ay,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.w(A.a([l,B.bs,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bl,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.B,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bd,l,A.aI(q,q,q,q,A.V(B.cE,p?B.bu:B.bl,q,q,q,q),q,q,q,new C.dex(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.i,0,q,q)
l=B.aZ.j(p?0.12:0.08)
w=A.n(12)
v=A.K(B.aZ.j(0.25),B.r,1)
u=A.V(B.arH,B.aZ.j(0.9),q,q,q,18)
l=A.q(q,A.A(A.a([u,B.ar,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aT:B.ay,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.i,0,q,q),B.f,q,q,new A.p(l,q,v,w,q,q,B.m),q,q,q,q,B.bE,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aT:B.ay,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.kg:B.iO
t=A.n(12)
s=A.n(12)
r=p?B.ew:B.bP
v=A.aO(q,B.M,!0,q,!0,B.t,q,A.aQ(),w,q,q,q,q,q,2,A.bB(q,new A.b6(4,t,B.dz),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.am,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.dey(this),q,!1,q,q,!1,q,!0,q,B.ad,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a8,q,B.lr,q,q,q,q)
w=p?B.aT:B.ay
p=p?B.ew:B.bP
return A.eF(q,o,new A.cO(B.mo,A.cb(A.w(A.a([m,B.aN,l,B.az,v,B.by,A.A(A.a([A.E(A.dV(B.dy,new C.dez(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.cq,q,new A.bb(A.n(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.ar,A.E(A.bI(D.hpx,q,this.ga5o(),A.bp(B.bW,q,q,q,B.c,q,B.cq,q,new A.bb(A.n(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.i,0,q,q)],k),B.B,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.Dx,q,q,B.ah),q),q,q,q,B.Dy,q,B.db,q,new A.bb(n,B.a1),q)}}
C.a_Q.prototype={
R(){return new C.aB4()}}
C.aB4.prototype={
Z(){var w,v=this
v.a4()
w=$.ay()
v.d!==$&&A.aU()
v.d=new A.au(B.aw,w)
v.e!==$&&A.aU()
v.e=new A.au(new A.bd("1",B.bb,B.aP),w)
v.f!==$&&A.aU()
v.f=new A.au(B.aw,w)
v.r!==$&&A.aU()
v.r=new A.au(B.aw,w)},
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
gLn(){var w,v=this.e
v===$&&A.d()
w=A.cA(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gamX(){var w=this.f
w===$&&A.d()
w=A.cA(B.a.i(w.a.a))
return w==null?0:w},
gb9T(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aTM(d){var w,v=B.h.D(this.gLn()+d,0.25,999999),u=B.h.b8(v),t=this.e
t===$&&A.d()
if(v===u)u=B.n.v(B.h.L(v))
else{u=B.h.a1(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aD(u,w,"")}t.sb_(0,u)
this.l(new C.cLv())},
aCy(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aZ,w,w,w,20):w,u=d.a,t=u?B.kg:B.iO,s=A.n(14),r=A.n(14)
u=u?B.ew:B.bP
return A.bB(w,new A.b6(4,s,B.dz),w,B.bE,w,w,w,w,!0,new A.b6(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.n(14),B.agF),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cjT(d,e,f){return this.aCy(d,e,f,null)},
M7(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.gamX()<=0){s.c.M(x.q).f.T(D.fK_)
return}r=s.c
r.toString
v=s.gLn()
u=s.gamX()
t=s.gb9T()
A.a6(r,!1).N(new C.aVZ(w,v,u,t))},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.R(d).ax.a===B.I,m=new C.uC(n),l=n?B.eo:B.c,k=A.n(24),j=x.O,i=A.a([B.aZ.j(0.22),B.bW.j(0.14)],j),h=A.n(14)
i=A.q(o,D.bZc,B.f,o,o,new A.p(o,o,A.K(B.aZ.j(0.35),B.r,1),h,o,new A.a7(B.a5,B.a9,B.w,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aT:B.ay,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.w(A.a([h,B.bs,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.cD,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bd,h,A.aI(o,o,o,o,A.V(B.cE,n?B.bu:B.bl,o,o,o,o),o,o,o,new C.cLB(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aT:B.ay,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aO(o,B.M,!0,o,!0,B.t,o,A.aQ(),h,o,o,o,o,o,2,p.aCy(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Re),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a8,o,A_.LR,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.C,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.kg:B.iO
t=A.n(14)
s=A.K(n?B.ew:B.bP,B.r,1)
r=A.aI(o,o,o,o,A.V(B.xB,n?B.aT:B.ay,o,o,o,20),o,o,o,new C.cLC(p),o,o,o,o,o,B.cp)
q=p.e
q===$&&A.d()
q=A.aO(o,B.M,!1,o,!0,B.t,o,A.aQ(),q,o,o,o,o,o,2,D.caU,B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,B.ej,o,o,o,1,o,o,!1,"\u2022",o,new C.cLD(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aT:B.ay,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.an,o,o,o,o)
u=A.q(o,A.A(A.a([r,new A.a4(52,o,q,o),A.aI(o,o,o,o,A.V(B.ii,n?B.aT:B.ay,o,o,o,20),o,o,o,new C.cLE(p),o,o,o,o,o,B.cp)],w),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.p(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aT:B.ay,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.ar,A.E(A.aO(o,B.M,!1,o,!0,B.t,o,A.aQ(),t,o,o,o,o,o,2,p.aCy(m,"Amount","0.00",B.hE),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,B.ej,o,o,o,1,o,o,!1,"\u2022",o,new C.cLF(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a8,o,B.an,o,o,o,o),1)],w),B.B,o,B.e,B.i,0,o,o)
t=x.gv
u=A.B(new A.O(D.djv,new C.cLG(p,m),t),t.k("aj.E"))
i=A.a([i,B.by,v,B.az,h,B.N,s,B.ae,A.bV(B.bF,u,B.bp,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aT:B.ay,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.S,A.aO(o,B.M,!1,o,!0,B.t,o,A.aQ(),h,o,o,o,o,o,2,p.cjT(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cLH(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a8,o,B.lr,o,o,o,o)],w))}i.push(B.aN)
h=B.aZ.j(n?0.18:0.1)
j=A.a([h,B.bW.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.K(B.aZ.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bl,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gLn()===B.h.b8(p.gLn())?B.h.L(p.gLn()):p.gLn()
s=p.gb9T()
r=A.BO(p.gamX())
i.push(A.q(o,A.A(A.a([A.E(A.w(A.a([u,B.at,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.i,0,B.p),1),C.bJE(p.gLn()*p.gamX(),B.b8,!1,B.u)],w),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(o,o,v,h,o,new A.a7(B.a5,B.a9,B.w,j,o,o),B.m),o,o,o,o,B.jG,o,o,o))
i.push(B.by)
j=A.n(14)
h=n?B.ew:B.bP
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.cq,o,new A.bb(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dV(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aT:B.ay,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cLI(d),h),1),B.ar,A.E(A.dg(D.avi,o,D.hlh,p.ga5o(),A.bp(B.aZ,o,o,0,B.c,o,B.cq,o,new A.bb(A.n(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.i,0,o,o))
return A.eF(o,l,new A.cO(B.Nj,A.cb(A.w(i,B.al,o,B.e,B.P,0,B.p),B.t,o,B.y,o,o,Al.tP,o,o,B.ah),o),o,o,o,B.PL,o,B.db,o,new A.bb(k,B.a1),o)}}
C.a3H.prototype={
R(){return new C.bBN()}}
C.bBN.prototype={
Z(){var w,v,u=this
u.a4()
w=u.a.e
v=$.ay()
u.d!==$&&A.aU()
u.d=new A.au(new A.bd(w,B.bb,B.aP),v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a3()},
C(d){var w,v,u,t=this,s=null,r=A.R(d).ax.a===B.I,q=r?B.eo:B.c,p=A.n(20),o=t.a.c
o=A.c(o,s,s,s,s,s,s,A.l(s,s,r?B.aT:B.ay,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.d()
v=A.l(s,s,r?B.aT:B.ay,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.kg:B.iO
v=A.aO(s,B.M,!0,s,!0,B.t,s,A.aQ(),w,s,s,s,s,s,2,A.bB(s,new A.b6(4,A.n(12),B.dz),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fyO(t,d),s,!1,s,s,!1,s,!0,s,B.ad,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a8,s,B.an,s,s,s,s)
u=A.E(A.dV(B.dy,new C.fyP(d),s),1)
r=A.bp(B.bW,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eF(s,q,new A.C(B.Dx,A.w(A.a([o,B.az,v,B.aN,A.A(A.a([u,B.ar,A.E(A.bI(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fyQ(t,d),r),1)],w),B.l,s,B.e,B.i,0,s,s)],w),B.l,s,B.e,B.P,0,B.p),s),s,s,s,s,s,B.db,s,new A.bb(p,B.a1),s)}}
C.ae9.prototype={
a9(){return"WorksheetFrameStyle."+this.b}}
C.GT.prototype={
R(){return new C.bBL(null,null)}}
C.bBL.prototype={
Z(){var w,v=this
v.a4()
w=A.br(null,D.bFI,null,1,null,v)
w.cT(0)
v.d!==$&&A.aU()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bFe()},
gbGR(){switch(this.a.r.a){case 1:return A.a([B.aZ,B.bW,B.b8],x.O)
case 2:return A.a([B.bv,B.aZ,B.b8],x.O)
case 3:return A.a([B.aH,B.ci,B.jV],x.O)
case 4:return A.a([B.fN,B.bW,B.fC],x.O)
case 0:return A.a([B.aZ,B.bW,B.b8],x.O)}},
C(d){var w=A.R(d),v=this.d
v===$&&A.d()
return new A.ea(A.ca(v,new C.fyM(this,new C.uC(w.ax.a===B.I)),null),null)}}
C.aAY.prototype={
R(){return new C.bBM(null,null)}}
C.bBM.prototype={
Z(){var w,v=this
v.a4()
w=A.br(null,B.o5,null,1,null,v)
w.cT(0)
v.d!==$&&A.aU()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bFf()},
C(d){var w=this.d
w===$&&A.d()
return A.ca(w,new C.fyN(this),null)}}
C.bBK.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a5(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aK($.U().r,B.ak,null,null,A.a([],x.v))
u.E(new A.ju(v))
w=A.M()
w.b=B.af
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aq(v,w)
w=A.M()
w.b=B.af
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.A_(u)
t=A.a([],x.U)
w=new A.vf(w,!1,t)
for(o=p.b,s=-o*0.85;w.A();){r=w.c
if(r===0||w.f)A.bi(A.k_(y.B));--r
q=new A.Cc(w,r)
w.jY()
r=t[r].b
r===$&&A.d()
r=r.a.length()
p.aXs(d,q,r,o,0,0.2,4.2,0.92)
p.aXs(d,q,r,s,0.52,0.11,3.2,0.58)}},
aXs(d,e,f,g,h,i,j,k){var w,v,u,t=B.h.F(g+h,1)*f,s=A.i5E(e.a.a,e,t,t+f*i,!0),r=A.ajj(s.gln().a.getBounds())
$.U()
w=A.M()
w.b=B.af
w.c=j
w.d=B.bI
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a7(B.a5,B.a9,B.w,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.JC,null).az(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aRL.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b9()
this.b7()
this.bF()}}
C.aRM.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b9()
this.b7()
this.bF()}}
C.uC.prototype={}
C.aw9.prototype={
R(){return new C.aIY()},
ge8(){return this.c}}
C.aIY.prototype={
Z(){var w=this
w.a4()
w.d=w.a.d
w.akD()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.MT(w,v)
this.a3()},
akD(){var w=0,v=A.j(x.H),u=this,t,s
var $async$akD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bI0(t.c,t.d.a),$async$akD)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.f5Z(u,s))
return A.h(null,v)}})
return A.i($async$akD,v)},
Sg(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Sg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.f5Q(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.MT(t,s),$async$Sg)
case 2:if(u.c!=null)u.l(new C.f5R(u))
return A.h(null,v)}})
return A.i($async$Sg,v)},
SN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$SN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.R(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.f5X(t,new C.uC(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$SN)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.ab8(q),$async$SN)
case 6:case 5:t.l(new C.f5Y(t,r))
w=7
return A.b(t.Sg(),$async$SN)
case 7:case 1:return A.h(u,v)}})
return A.i($async$SN,v)},
Y3(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iLV(r),$async$Y3)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.f5L(t,new C.rR(B.n.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Sg(),$async$Y3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y3,v)},
cpb(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hXX(t,new C.f5P(u),w,v)},
aee(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.q(w,w,B.f,w,w,new A.p(w,w,new A.bE(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b9q,w,w,B.m),w,22,w,w,w,w,w,22)},
adf(d){return this.bTb(d)},
bTb(d){var w=0,v=A.j(x.H),u=this
var $async$adf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.f5O(u,d))
w=2
return A.b(u.Sg(),$async$adf)
case 2:return A.h(null,v)}})
return A.i($async$adf,v)},
C(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.R(a2).ax.a===B.I,e=f?B.c7:B.hZ,d=A.n(8),a0=A.V(Y.a49,f?B.bu:B.bl,g,g,g,16),a1=x.p
a0=A.aN(!1,d,!0,new A.C(B.Ia,A.A(A.a([a0,B.b6,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bl,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.f6_(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.Y(d,"ngmy:thumb:"))d=new A.am(B.a0,g,B.b7,B.t,A.a([A.bv(A.n(22),C.aUY(!0,A.n(22),1/0,B.q8,g,d,1/0),B.ap),A.ao(10,A.dg(D.c36,g,D.hnM,h.gb7O(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.h1,g,new A.bb(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aZ.j(f?0.5:0.38),B.eS,22),new A.ac(-4,B.G,B.bW.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.q(g,A.q(g,A.bv(s,new A.am(B.a0,g,B.b7,B.t,A.a([C.aUY(!0,A.n(16),1/0,B.QC,g,r.c,1/0),new A.bP(new A.p(g,g,g,g,g,new A.a7(B.aY,B.b2,B.w,A.a([B.c.j(0.06),B.L,B.v.j(0.22)],x.O),g,g),B.m),B.bn,g,g),A.ao(g,h.aee(!0),g,g,8,g,8,g),A.ao(g,A.cIa(h.aee(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cIa(h.aee(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cIa(h.aee(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dg(D.bZQ,g,D.hgT,h.gb7O(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.h1,g,new A.bb(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.p(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.p(g,g,g,d,v,D.ccB,B.m),g,g,g,g,B.m7,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aT:B.ay,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.bko,B.oP,B.hB],u):A.a([B.b8,B.aZ,B.bW],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aZ.j(f?0.45:0.35),B.eS,24)],t)
r=A.n(22)
p=A.ao(g,A.V(B.jH,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.q(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.p(o,g,m,n,g,g,B.m),g,g,g,g,B.hr,g,g,g)],a1),B.l,g,B.e,B.i,0,g,g),B.az,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.aj,C.bJE(h.d.gyq(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.N,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cD,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.w(n,B.B,g,B.e,B.i,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.K(B.hp.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aH.j(0.28),B.cO,14)],t)
j=B.aH.j(0.22)
i=A.n(10)
u=A.q(g,A.bv(r,new A.am(B.a0,g,B.ac,B.t,A.a([p,new A.C(D.bKG,A.A(A.a([o,B.ar,A.aE(!1,B.a3,!0,g,A.aN(!1,n,!0,A.eK(new A.C(B.xg,A.w(A.a([A.q(g,D.auR,B.f,g,g,new A.p(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.ct,g,g,g),B.h7,D.h5l],a1),B.l,g,B.e,B.P,0,B.p),g),g,new A.p(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcpa(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.i,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.p(g,g,g,v,s,new A.a7(B.ax,B.aC,B.w,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fD(1.7777777777777777,d,g),B.aN,w,B.N,u,B.by,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aT:B.ay,g,g,g,g,g,g,g,g,16,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.aX,A.dg(A9.a5X,g,D.h34,h.gbHl(),A.bp(B.aZ,g,g,g,B.c,g,B.hs,g,new A.bb(A.n(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.i,0,g,g),B.ae],a1)
w=h.d.d
if(w.length===0){w=f?B.eo:B.c
v=A.n(14)
u=A.K(f?B.ew:B.bP,B.r,1)
t=A.V(B.a4y,f?B.bu:B.bl,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aT:B.ay,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.q(g,A.w(A.a([t,B.S,s,B.aj,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bl,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.p(w,g,u,v,g,g,B.m),g,g,g,g,B.q2,g,g,1/0))}else B.d.u(d,new A.O(w,new C.f60(h,new C.uC(f)),A.T(w).k("O<1,x>")))
if(h.e)d.push(new A.C(B.zw,A.at(A.nq(g,f?B.bu:B.bl,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bm(!0,A.w(A.a([new A.C(Z.Dm,a0,g),A.E(A.cb(A.w(d,B.B,g,B.e,B.i,0,B.p),B.t,g,B.y,g,g,E.zJ,g,g,B.ah),1)],a1),B.B,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bL6(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.eo:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.v.j(r?0.35:0.08),B.cO,12)],x.V),n=A.n(16),m=A.q(u,u,B.f,u,u,D.bc8,u,u,u,u,u,u,u,5),l=B.aZ.j(r?0.22:0.12),k=A.n(12)
l=A.q(u,A.V(s?B.iy:B.h5,B.b8,u,u,u,20),B.f,u,u,new A.p(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bL
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aT:B.ay,u,u,u,u,u,u,u,u,15,u,u,B.C,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd5Q()
v=A.BO(d.d)
B.d.u(t,A.a([B.at,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bu:B.bl,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.w(t,B.B,u,B.ba,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aZ.j(0.14),B.bW.j(0.1)],x.O)
w=A.n(12)
k=A.q(u,C.bJE(d.c*d.d,B.b8,!1,B.u),B.f,u,u,new A.p(u,u,u,w,u,new A.a7(B.a5,B.a9,B.w,k,u,u),B.m),u,u,u,u,B.h1,u,u,u)
w=x.p
return A.q(u,A.bv(n,new A.Fk(A.A(A.a([m,A.E(new A.C(B.aoq,A.A(A.a([l,B.bd,t,B.aa,k,A.aI(u,u,u,u,A.V(B.cE,(r?B.bu:B.bl).j(0.75),u,u,u,20),u,u,u,new C.f5M(this,d),u,u,u,u,u,B.cp)],w),B.l,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.ap),B.f,u,D.baZ,new A.p(q,u,u,p,o,u,B.m),u,u,u,B.d2,u,u,u,u)}}
C.agf.prototype={
FX(d){return this.bUA(d)},
bUA(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$FX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(M.pZ(d,o,!1),$async$FX)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
w=4
return A.b(A.bN(B.De,null,x.H),$async$FX)
case 4:s=t.d
w=5
return A.b(C.han(!0,o,s),$async$FX)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.HN(r,"ngmy_project_"+A.aD(s.b,q,"_"),!1),$async$FX)
case 6:p=f
w=7
return A.b(M.pY(o,!1),$async$FX)
case 7:if(d.e==null){w=1
break}d.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$FX,v)},
a2b(d){return this.cG5(d)},
cG5(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a2b=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(M.pZ(d,s,!1),$async$a2b)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
A.hf(d,new C.aw3(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(M.pY(s,!1),$async$a2b)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2b,v)},
Sh(d){return this.cC_(d)},
cC_(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Sh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(A.hf(d,D.aOW,!0,"NgmyWorksheetProjectScan",x.N),$async$Sh)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bJF(s),$async$Sh)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.M(x.q).f.T(D.fJ6)
w=1
break}q=C.hxS(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dT(p,x.H),$async$Sh)
case 5:if(d.e==null){w=1
break}d.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Sh,v)},
a2c(d){return this.cOH(d)},
cOH(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2c=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(C.bJ8(),$async$a2c)
case 3:s=f
if(s==null){w=1
break}r=C.hxS(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dT(q,x.H),$async$a2c)
case 4:if(d.e==null){w=1
break}d.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a2c,v)},
C(d){var w=this,v=null,u=A.R(d).ax.a===B.I,t=new C.uC(u),s=w.d.d.length,r=u?B.eo:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.v.j(u?0.35:0.08),B.kx,36)],x.V),o=x.p
return A.bm(!0,new A.C(B.xf,A.q(v,A.w(A.a([w.cEF(d,t,s),new A.C(D.bK4,A.w(A.a([w.b5M(t,"QR restore"),B.S,A.A(A.a([w.b5L(t,!0,B.jJ,B.aH,B.aH,new C.f62(w,d),"Show to scan","QR code"),B.ar,w.aCz(t,B.jK,B.b4,B.bj,new C.f63(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.i,0,v,v),B.df,w.b5M(t,"Backup files"),B.S,A.A(A.a([w.aCz(t,B.hR,B.aZ,B.bW,new C.f64(w,d),"Full copy","Backup file"),B.ar,w.aCz(t,Q.At,B.as,B.aQ,new C.f65(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.i,0,v,v)],o),B.B,v,B.e,B.i,0,B.p),v)],o),B.l,v,B.e,B.P,0,B.p),B.ap,v,v,new A.p(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cEF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fo,B.cZ,B.hb],k):A.a([B.b8,B.aZ,B.bW],k)
w=A.ao(l,A.V(B.vN,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.q(l,l,B.f,l,l,new A.p(B.c.j(0.35),l,l,A.n(4),l,l,B.m),l,4,l,B.kN,l,l,l,36),l,l,l)
u=A.n(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.v.j(0.2),B.cO,12)],x.V)
r=this.d
s=A.q(l,C.aUY(!0,A.n(13),64,D.bUO,l,r.c,64),B.ap,l,l,new A.p(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.C,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,I.ae3,l,l,l)
r=C.bJE(r.gyq(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.q(l,new A.am(B.a0,l,B.ac,B.t,A.a([w,new A.C(D.bKr,A.w(A.a([v,A.A(A.a([s,B.eD,A.E(A.w(A.a([u,B.at,t,B.N,A.A(A.a([r,B.aa,A.q(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.p(q,l,o,p,l,l,B.m),l,l,l,l,B.f8,l,l,l)],m),B.l,l,B.e,B.i,0,l,l)],m),B.B,l,B.e,B.i,0,B.p),1),A.aI(l,l,l,l,A.V(B.cE,B.c.j(0.85),l,l,l,l),l,l,l,new C.f61(d),l,l,l,A.nu(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aXu,l,l,l,l),l,l)],m),B.B,l,B.e,B.i,0,l,l)],m),B.l,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.p(l,l,l,l,l,new A.a7(B.ax,B.aC,B.w,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b5M(d,e){var w=null,v=A.q(w,w,B.f,w,w,new A.p(B.aZ,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bu:B.bl,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
b5L(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.an0:B.aT
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.ew:B.bP
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aH.j(0.12),B.cO,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.K(h.j(0.35),B.r,1)
t=A.q(r,A.V(f,h,r,r,r,22),B.f,r,r,new A.p(u,r,s,t,r,r,B.m),r,r,r,r,B.vr,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aT:B.ay,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aE(!1,B.a3,!0,r,A.aN(!1,q,!0,A.eK(new A.C(E.a2x,A.w(A.a([t,B.ae,u,B.bs,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bu:B.bl,r,r,r,r,r,r,r,r,11,r,r,B.cD,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.i,0,B.p),r),r,new A.p(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aCz(d,e,f,g,h,i,j){return this.b5L(d,!1,e,f,g,h,i,j)}}
C.aw3.prototype={
R(){return new C.bqB()}}
C.bqB.prototype={
Z(){this.a4()
this.aiu()},
aiu(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aiu=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bJG(p.c,p.d),$async$aiu)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.f5G(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.f5H(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiu,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.R(d).ax.a===B.I,f=g?B.CJ:B.hZ,e=i.d
e=e==null?h:B.a.Y(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.V(B.eI,g?B.ab:B.ao,h,h,h,18),h,h,h,new C.f5I(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.uy],u),B.l,h,B.e,B.i,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.fo,B.cZ,B.hb],s):A.a([B.b8,B.aZ,B.bW],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aZ.j(g?0.4:0.3),B.eS,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dw,B.K,h,h)
p=C.bJE(p.gyq(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.q(h,A.w(A.a([o,B.aj,A.A(A.a([p,B.aa,A.q(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.p(n,h,h,m,h,h,B.m),h,h,h,h,B.f8,h,h,h)],u),B.l,h,B.ba,B.i,0,h,h)],u),B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(h,h,h,t,q,new A.a7(B.ax,B.aC,B.w,s,h,h),B.m),h,h,h,h,E.a2U,h,h,1/0)
t=g?D.bvZ:B.c
q=A.n(24)
p=A.K(w?B.aH.j(0.4):B.aZ.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.v.j(g?0.25:0.06),B.dv,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.Xi,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eLi)
else{m=A.n(20)
l=A.K(B.bo,B.r,1)
o.push(A.q(h,A.qA(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.p(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bR,h,h,h))}}o.push(B.aN)
n=w?B.aH:B.aZ
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.K((w?B.aH:B.aZ).j(0.35),B.r,1)
k=w?B.QV:B.Rx
k=A.V(k,w?B.aH:B.aZ,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.q(h,A.A(A.a([k,B.ar,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.ao,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.p(n,h,l,m,h,h,B.m),h,h,h,h,B.hs,h,h,h))
return A.c6(h,f,A.bm(!0,A.w(A.a([new A.C(Ai.PY,e,h),A.E(A.cb(A.w(A.a([s,B.aN,A.q(h,A.w(o,B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(t,h,p,q,r,h,B.m),h,h,h,h,B.vq,h,h,1/0)],u),B.l,h,B.e,B.i,0,B.p),B.t,h,B.y,h,h,E.apH,h,h,B.ah),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.aw8.prototype={
R(){return new C.aIX(A.Aj(B.Pe,B.oJ,B.vU))}}
C.aIX.prototype={
t(){this.d.t()
this.a3()},
aRI(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j8(w,d)},
ckL(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.iJO(t)
if(s!=null){this.aRI(s)
return}r=C.hMZ(t)
if(r!=null)q=A.cV(r,p,0)
else q=!1
if(q){this.aRI(B.a.i(B.a.aV(r,B.a.c8(r,p))))
return}}},
C(d){var w,v,u=this,t=null,s=x.p,r=A.eR(A.a([A.aI(t,t,t,t,A.V(u.f?B.rz:Ac.R3,t,t,t,t,t),t,t,t,new C.f5K(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.CJ,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.hgL,t,t,t,1,t,!0),q=A.Ai(u.d,B.c1,u.gckK()),p=A.n(28)
p=A.at(A.q(t,t,B.f,t,t,new A.p(t,t,A.K(B.aZ,B.r,3),p,A.a([new A.ac(2,B.G,B.aZ.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.v.j(0.72)
v=A.n(16)
return A.c6(r,B.v,new A.am(B.a0,t,B.b7,B.t,A.a([q,p,A.ao(32,A.q(t,D.hfv,B.f,t,t,new A.p(w,t,A.K(B.aZ.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jG,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aNZ.prototype={
a9(){return"_WorksheetTab."+this.b}}
C.PU.prototype={
R(){return new C.aIZ(D.afZ,A.a([],x.D))},
bx(){return this.r.$0()},
ge8(){return this.c}}
C.aIZ.prototype={
gcMo(){return J.bKO(this.e,0,new C.f6s())},
Z(){this.a4()
$.aS.dG$.push(this)
this.wW()},
t(){$.aS.hS(this)
this.a3()},
jj(d){if(d===B.fY)this.wW()},
wW(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.E7(q.a.c).d4(0,B.jD),$async$wW)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.f6o(q,p))
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
if(q.c!=null&&q.f)q.l(new C.f6p(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wW,v)},
JB(d){return this.bRe(d)},
bRd(){return this.JB(null)},
bRe(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iLX(l,d),$async$JB)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.n.v(1000*Date.now())
r=s.a
q=s.b
p=new C.m6(l,r,q,D.dwR,new A.W(Date.now(),0,!1))
w=4
return A.b(C.MT(t.a.c,p),$async$JB)
case 4:o=f
w=5
return A.b(t.wW(),$async$JB)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.M(x.q).f.T(D.fGa)
w=1
break}n=J.aL(t.e)
for(;;){if(!n.A()){m=p
break}m=n.gO(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.M(q).f.T(D.fI_)
else n.M(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.G0(m)
case 1:return A.h(u,v)}})
return A.i($async$JB,v)},
G0(d){return this.coW(d)},
coW(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$G0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hf(s,new C.aw9(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$G0)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.MT(u.a.c,t),$async$G0)
case 5:case 4:w=6
return A.b(u.wW(),$async$G0)
case 6:return A.h(null,v)}})
return A.i($async$G0,v)},
wG(d){return this.c6I(d)},
c6I(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bJ8(),$async$wG)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hf(r,D.aOW,!0,"NgmyWorksheetProjectScan",x.N),$async$wG)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bJF(q),$async$wG)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.M(x.q).f
r.T(A.b2(null,null,null,null,null,B.t,null,A.c(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hxS(s)
w=15
return A.b(C.MT(t.a.c,p),$async$wG)
case 15:o=f
w=16
return A.b(t.wW(),$async$wG)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.M(x.q).f.T(D.fI4)
w=1
break}r.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.G0(p)
case 1:return A.h(u,v)}})
return A.i($async$wG,v)},
PM(d){return this.bPQ(d)},
bPQ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$PM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.f69(d),s,null,!0,!0,x.y),$async$PM)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pA(t.a.c,A.a([],x.D)),$async$PM)
case 6:w=7
return A.b(t.wW(),$async$PM)
case 7:s=t.c
if(s==null){w=1
break}s.M(x.q).f.T(D.fGf)
case 4:case 1:return A.h(u,v)}})
return A.i($async$PM,v)},
cp9(d){var w=this.c
w.toString
A.bX(B.L,null,new C.f6i(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
bbs(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.kg
else w=B.c
v=A.n(16)
u=A.K(p?B.ew:B.bP,B.r,1)
t=d.j(0.14)
s=A.n(12)
s=A.q(r,A.V(e,d,r,r,r,22),B.f,r,r,new A.p(t,r,r,s,r,r,B.m),r,r,r,r,B.bS,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aT:B.ay,r,r,r,r,r,r,r,r,14,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aE(!1,B.a3,!0,r,A.aN(!1,q,!0,A.q(r,A.w(A.a([s,B.ae,t,B.bs,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bu:B.bl,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.i,0,B.p),B.f,r,r,new A.p(w,r,u,v,r,r,B.m),r,r,r,r,B.tO,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a2K(d,e){return this.coX(d,e)},
coX(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2K=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bX(B.L,null,new C.f6d(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a2K)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hXX(r,new C.f6e(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.PO(d,e),$async$a2K)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2K,v)},
b8q(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.q(u,A.V(e,f,u,u,u,22),B.f,u,u,new A.p(t,u,u,s,u,u,B.m),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aD
else t=h.a?B.aT:B.ay
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.w(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bu:B.bl,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.i,0,B.p),1)
return A.aE(!1,B.a3,!0,u,A.aN(!1,u,!0,new A.C(A1.Du,A.A(A.a([s,B.bd,t,A.V(B.eO,w?B.bu:B.bl,u,u,u,u)],v),B.l,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
cw6(d,e,f,g,h,i){return this.b8q(!1,d,e,f,g,h,i)},
PO(d,e){return this.bQ_(d,e)},
bQ_(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$PO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lJ(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$PO)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bHM(t.a.c,d.a),$async$PO)
case 6:w=7
return A.b(t.wW(),$async$PO)
case 7:r=t.c
if(r==null){w=1
break}r.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$PO,v)},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.R(d).ax.a===B.I,m=new C.uC(n),l=n?B.c7:B.hZ
if(p.f)n=D.bi7
else{w=A.aH(d,B.dM,x.w).w
v=p.bKc(m)
u=p.c5M(m)
t=p.gbHd()
if(n)s=B.kg
else s=B.c
r=A.n(13)
q=x.p
t=A.a([v,B.ae,u,B.aN,new C.GT(A.q(o,A.A(A.a([p.aGc(P.QA,"Projects",m,D.afZ),p.aGc(B.vy,"Cashier",m,D.b5S),p.aGc(B.Ir,"Family Tree",m,D.i5I)],q),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.eH,0.95,t,o),B.by],q)
v=p.d
if(v===D.afZ){v=J.ab(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aT:B.ay,o,o,o,o,o,o,o,o,16,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aX,new C.aAY(p.gaW9(),o)],q),B.l,o,B.e,B.i,0,o,o),B.az,p.cw8(m)],q))}else{n=p.a
if(v===D.b5S)t.push(new C.arP(n.c,m,o))
else{v=p.r
t.push(new C.at5(n.c,n.d,n.e,n.f,new C.f6v(p),new C.f6w(p),new A.b9(v,x.b4)))}}n=A.cb(A.w(t,B.B,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,new A.Q(20,w.r.b+8,20,32),o,o,B.ah)}return A.c6(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bKc(d){var w=null,v=A.n(8),u=d.a,t=A.V(Y.a49,u?B.bu:B.bl,w,w,w,16)
return A.aN(!1,v,!0,new A.C(B.k_,A.A(A.a([t,B.b6,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bu:B.bl,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f66(this),w,w,w,w,w,w,w)},
gbHd(){switch(this.d.a){case 0:return D.af8
case 1:return D.hTu
case 2:return D.af9}},
c5M(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aZ.j(0.35),B.cC,16)],x.V),t=x.p,s=A.A(A.a([A.q(w,D.c53,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,44,w,w,w,w,w,44),B.bd,D.bP2,A.aE(!1,B.a3,!0,w,A.aN(!1,A.n(12),!0,A.q(w,D.c2l,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f6a(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.B,w,B.e,B.i,0,w,w),r=B.b8.j(0.55),q=A.n(12)
return new C.GT(A.q(w,A.w(A.a([new A.C(B.I2,s,w),A.q(w,A.w(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.c(A.BO(this.gcMo()),w,w,w,w,w,w,D.h_c,w,w,w)],t),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(r,w,w,q,w,w,B.m),w,w,w,B.tN,B.jG,w,w,1/0)],t),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(B.aZ,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hTt,w)},
aGc(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aZ:B.L,q=A.n(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aZ.j(0.42),B.cO,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bl
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bl
return A.E(A.aE(!1,B.a3,!0,u,A.aN(!1,s,!0,A.cY(u,A.A(A.a([w,B.dU,new A.cZ(1,B.c6,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.ba,B.i,0,u,u),u,u,B.cn,new A.p(r,u,p,q,o,u,B.m),B.iw,u,u,u,u,B.Ib,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f6r(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
cw8(d){var w,v,u,t,s,r,q=this,p=null
if(J.ch(q.e)){w=d.a
v=w?B.eo:B.c
u=A.n(15)
t=A.q(p,D.c2s,B.f,p,p,new A.p(p,p,p,p,A.a([new A.ac(2,B.G,B.aZ.j(0.5),B.eS,28)],x.V),D.cf9,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aT:B.ay,p,p,p,p,p,p,p,p,18,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.GT(A.q(p,A.w(A.a([t,B.df,s,B.N,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bl,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.ee,A.A(A.a([A.E(q.aXO(B.jK,"Scan QR",new C.f6l(q),d),1),B.ar,A.E(q.aXO(Q.At,"Upload file",new C.f6m(q),d),1)],r),B.l,p,B.e,B.i,0,p,p),B.az,A.bI(D.hry,p,q.gaW9(),A.bp(B.aZ,p,p,p,B.c,B.hx,p,p,new A.bb(A.n(12),B.a1),p,p,p))],r),B.l,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bLw,1.05,D.af8,p)}w=J.b8(q.e,new C.f6n(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.GT(A.w(w,B.l,p,B.e,B.i,0,B.p),16,B.bS,1,D.af8,p)},
aXO(d,e,f,g){var w=null,v=B.aZ.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.K(B.aZ.j(0.45),B.r,1)
return A.aE(!1,B.a3,!0,u,A.aN(!1,t,!0,A.q(w,A.w(A.a([A.V(d,B.b8,w,w,w,26),B.N,A.c(e,w,w,w,w,w,w,D.fYl,B.K,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),B.f,w,w,new A.p(w,w,r,s,w,w,B.m),w,w,w,w,Ay.a2j,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
cw7(d,e){var w,v,u=null,t=e.a,s=t?B.eo:B.c,r=A.n(14),q=A.K(t?B.ew:B.bP,B.r,1),p=A.a([new A.ac(0,B.G,B.v.j(t?0.35:0.08),B.eJ,10)],x.V),o=A.n(14),n=t?B.bu:B.bl
n=A.bv(B.Zu,new A.fD(1.7777777777777777,C.aUY(!0,B.ft,1/0,P.QA,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.w(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aT:B.ay,u,u,u,u,u,u,u,u,15,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.c(""+d.d.length+" budget items \xb7 "+A.BO(d.gyq()),u,u,u,u,u,u,D.fWi,u,u,u)],w),B.B,u,B.e,B.i,0,B.p),1)
return A.q(u,A.aE(!1,B.a3,!0,u,A.aN(!1,o,!0,A.w(A.a([n,new A.C(B.bE,A.A(A.a([v,A.aI(u,u,u,u,A.V(Ap.a5e,t?B.bu:B.bl,u,u,u,u),u,u,u,new C.f6j(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.i,0,u,u),u)],w),B.B,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f6k(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.p(s,u,q,r,p,u,B.m),u,u,u,B.dX,u,u,u,1/0)}}
C.bDz.prototype={}
C.rR.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd5Q(){var w,v,u,t,s=this.c
if(s===B.h.b8(s))w=B.n.v(B.h.L(s))
else{v=B.h.a1(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aD(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.m6.prototype={
gyq(){return B.d.cI(this.d,0,new C.cKR())},
ak(){var w=this,v=w.d,u=A.T(v).k("O<1,a9<o,@>>")
v=A.B(new A.O(v,new C.cKQ(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bj0(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.m6(w.a,w.b,v,u,w.e)},
biI(d){return this.bj0(d,null)},
V2(d){return this.bj0(null,d)}}
C.IZ.prototype={
a9(){return"FamilyGender."+this.b}}
C.ie.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hSR(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aJ3(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.ie(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ao0.prototype={
a9(){return"FamilyTreeAccessRole."+this.b}}
C.lj.prototype={
gasY(){var w=this.f
return new A.X(w,new C.bWF(),A.T(w).k("X<1>")).gI(0)},
ak(){var w=this,v=w.f,u=A.T(v).k("O<1,a9<o,@>>")
v=A.B(new A.O(v,new C.bWE(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.iBo(w.y),"games",w.z],x.N,x.z)},
xG(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.lj(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bj_(d,e){var w=null
return this.xG(w,w,w,d,e,w,w,w,w)},
cW0(d,e,f,g,h,i,j){return this.xG(d,e,null,f,g,h,i,j,null)},
aJ8(d,e){var w=null
return this.xG(w,w,w,w,d,w,w,e,w)},
cW2(d,e,f,g,h,i,j,k){return this.xG(d,e,null,f,g,h,i,j,k)},
cUs(d){var w=null
return this.xG(w,w,w,w,w,w,w,d,w)},
cUR(d){var w=null
return this.xG(w,w,w,w,w,w,w,w,d)},
biC(d){var w=null
return this.xG(w,w,d,w,w,w,w,w,w)},
aIR(d){var w=null
return this.xG(w,w,w,w,w,d,w,w,w)},
cVx(d,e,f){var w=null
return this.xG(w,d,w,w,e,w,w,f,w)},
cUf(d){var w=null
return this.xG(w,w,w,d,w,w,w,w,w)},
cV2(d,e){var w=null
return this.xG(d,w,w,w,w,w,e,w,w)}}
C.cKS.prototype={
a9(){return"WrapAlignment."+this.b}}
C.cKT.prototype={
a9(){return"WrapCrossAlignment."+this.b}}
C.aL8.prototype={}
C.bdN.prototype={
aj(d){this.a=d.a
this.b=d.b},
d3(d){var w=new C.bdN()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b7(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bdM.prototype={
gxx(){return!0},
gHD(){return this.z.b<this.b.length},
aZt(d){switch(0){case 0:return d.a.c}},
aZ9(d){switch(0){case 0:return d.a.d}},
c_c(d,e){switch(0){case 0:return new A.i1(d,e)}},
bZA(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hr(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.jg(0,0,B.n.D(0,b5.a,b5.b),B.n.D(0,b5.c,b5.d))
return}w=A.II(b4)
switch(0){case 0:v=b5.b
u=new A.lg(0,v,0,1/0)
t=w===B.X9
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fA(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hr(b4,u,!0)
f=b1.aZt(g)
f.toString
e=b1.aZ9(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aL8(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aL8(k,j,i))}d=s.length
switch(0){case 0:q=b5.cJ(new A.i1(m,l))
a0=q.a
a1=q.b
b1.a=new A.jg(0,0,a0,a1)
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
for(q=B.d.fA(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aZt(g)
e=b1.aZ9(g)
e.toString
a9=b1.bZA(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.c_c(a6,a3+a9)
b0=g.a
g.a=new A.jg(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h5(d){var w,v,u,t,s,r=this
r.lQ(d)
w=d.b
w.iI()
v=A.dB()
u=r.a
v.el(u.a,u.b,0,1)
w.pO(0,v)
for(u=r.z,u=B.d.dm(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].h5(d)
w.nT(0)},
Ia(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iI(){return this.z}}
C.bBO.prototype={}
var z=a.updateTypes(["az<~>()","P(ie)","~()","P(lj)","P(nR)","a9<o,@>(lj)","F(lj,lj)","F(ie,ie)","o(ie)","lj(a9<@,@>)","P(m6)","nR(a9<@,@>)","a9<o,@>(nR)","P(vh)","vh()","F(ie)","ah<ie>()","P(A2)","a1w(Z)","o?(ie)","eS<o?>(ie)","az<~>(m6)","P(rR)","a9<o,@>(ie)","ie(a9<@,@>)","F(m6,m6)","P(ahB)","~(bh)","x(pc)","F(F,abB)","P(r6<F>)","~(r6<F>)","V_(Z)","P(Nu)","P(vg)","~(ie)","o(o)","Xk(Z)","UZ(Z)","afV(Z)","a0l(Z)","ie(ie)","cS(bw<o,H7>)","cS(Lw)","a0S(Z)","F?(ie)","ie()","P(Lw)","C(ie)","~(IZ)","a0O(Z)","x(IZ,o,a_)","P(ahu)","bw<o,ah<a9<o,@>>>(o,ah<nR>)","a0Q(Z)","+count,id,name(F,o,o)(lj)","o(lj)","a1Q(Z)","a1R(Z)","P(mq)","mq()","a_Q(Z)","a3H(Z)","a0q(Z)","a0p(Z)","~(F)","~(o,lT?)","x(rR)","agf(Z)","~(lP)","az<~>([o?])","H(H,m6)","x(m6)","H(H,rR)","a9<o,@>(rR)","rR(a9<@,@>)","ah<lT>()","vg()","o(W)","m6(a9<@,@>)","cr(IY)","o(m6)","a9<o,@>(m6)","F(nR,nR)","lj(a9<o,@>)","lj(lj)"])
C.h1O.prototype={
$1(d){return d.a+" "+d.b},
$S:126}
C.h1N.prototype={
bsu(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.r1(s,d,B.i9,"book",E.HR),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.Y(r!=null&&A.HX(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bsu(d)},
$S:251}
C.h1P.prototype={
$1(d){return d.b},
$S:126}
C.hcD.prototype={
$1(d){var w=null
return A.eF(w,B.L,new H.Rk(this.a,this.b,w),w,w,0,B.a2z,w,B.db,w,w,w)},
$S:46}
C.fOQ.prototype={
$1(d){return d!=null},
$S:244}
C.fOR.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:244}
C.fOW.prototype={
$1(d){if(this.a)return new A.m(d.a*520,d.b*160)
return d},
$S:138}
C.h_i.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.ff(d,w,w,w,A.ho(w,B.uo,w,w,w,w,w,w,w,B.dK,w,w,10.5,w,B.eN,w,!0,w,w,w,w),w),u=f?B.eN:B.vv
return new A.oB(D.bGL,A.aco(A.a([new A.h7(130,w,v),new A.A0(1,B.Il,A.ff(e,w,w,w,A.ho(w,g==null?D.eNK:g,w,w,w,w,w,w,w,B.dK,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.zo,B.mf))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2027}
C.h_h.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.wu(999)
f=A.y1(A.mk(h,A.ff("Cashier",h,h,h,A.ho(h,D.Bm,h,h,h,h,h,h,h,B.dK,h,h,10,h,B.eN,h,!0,h,h,h,h),h),h,new A.lh(D.eNA,h,f,B.ip,h),h,h,D.bHe,h))
w=A.y1(A.ff("Debt receipt",h,h,h,A.ho(h,h,h,h,h,h,h,h,h,B.dK,h,h,22,h,B.eN,h,!0,h,h,h,h),h))
v=A.y1(A.ff(C.xI(new A.W(Date.now(),0,!1),!0),h,h,h,D.adx,h))
u=A.wu(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.ff(s,h,h,h,A.ho(h,h,h,h,h,h,h,h,h,B.dK,h,h,14,h,B.eN,h,!0,h,h,h,h),h)
r=A.ff("Person who owes",h,h,h,D.adx,h)
q=A.wu(10)
p=x.Z
u=A.mk(h,A.zT(A.a([s,new A.h7(h,2,h),r,new A.h7(h,10,h),A.mk(h,A.zT(A.a([A.ff("Amount owed",h,h,h,D.adx,h),new A.h7(h,2,h),A.ff(A.BO(t.c),h,h,h,A.ho(h,D.Bm,h,h,h,h,h,h,h,B.dK,h,h,20,h,B.eN,h,!0,h,h,h,h),h)],p),B.tE,B.mf),h,new A.lh(B.qu,h,q,B.ip,h),h,h,D.bGq,1/0)],p),B.tE,B.mf),h,new A.lh(E.aQm,h,u,B.ip,h),h,h,D.bIr,1/0)
q=new A.ok(D.eNE,0.9,B.lw)
r=A.wu(12)
s=i.c
o=s.$2("Original due",C.xI(t.r,!1))
n=s.$2("Current due",C.xI(t.f,!1))
m=i.d
l=new A.ok(m,1.1,B.lw)
k=A.wu(8)
j=i.a
k=A.a([o,n,new A.h7(h,6,h),A.mk(h,A.y1(A.ff(t.gaQf(),h,h,h,A.ho(h,m,h,h,h,h,h,h,h,B.dK,h,h,11,h,B.eN,h,!0,0.5,h,h,h),h)),h,new A.lh(h,new A.qq(l,l,l,l),k,B.ip,h),h,h,D.bHn,1/0),new A.h7(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Bm))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Bm))
else{n=A.ff("Missed days ("+n+")",h,h,h,A.ho(h,B.uo,h,h,h,h,h,h,h,B.dK,h,h,10.5,h,B.eN,h,!0,h,h,h,h),h)
m=A.T(o).k("O<1,Uz>")
o=A.B(new A.O(o,new C.h_g(),m),m.k("aj.E"))
B.d.u(k,A.a([new A.h7(h,4,h),n,new A.h7(h,6,h),new C.bdM(5,5,new C.bdN(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h7(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h7(h,8,h),w,new A.h7(h,3,h),v,new A.h7(h,16,h),u,new A.h7(h,10,h),A.mk(h,A.zT(k,B.zo,B.mf),h,new A.lh(h,new A.qq(q,q,q,q),r,B.ip,h),h,h,B.aou,1/0)],p)
w=j.a
if(w!=null){v=new A.ok(B.KW,1,B.lw)
B.d.u(f,A.a([new A.h7(h,16,h),A.ff("Debtor signature",h,h,h,A.ho(h,B.uo,h,h,h,h,h,h,h,B.dK,h,h,10,h,B.eN,h,!0,h,h,h,h),h),new A.h7(h,6,h),A.mk(h,new A.Jg(w,B.ZG,h,h),h,new A.lh(h,new A.qq(v,v,v,v),A.wu(6),B.ip,h),82,h,B.PV,1/0)],p))}f.push(new A.h7(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.ff(w,h,h,h,D.fOm,h))
f.push(new A.h7(h,18,h))
f.push(A.y1(A.ff("NGMY.ORG",h,h,h,A.ho(h,D.Bm,h,h,h,h,h,h,h,B.dK,h,h,14,h,B.eN,h,!0,1.8,h,h,h),h)))
return f},
$S:363}
C.h_g.prototype={
$1(d){var w=null,v=new A.ok(D.KX,0.7,B.lw),u=A.wu(999)
return A.mk(w,A.ff(C.xI(d,!1),w,w,w,A.ho(w,D.KX,w,w,w,w,w,w,w,B.dK,w,w,9.5,w,B.eN,w,!0,w,w,w,w),w),w,new A.lh(w,new A.qq(v,v,v,v),u,B.ip,w),w,w,D.bMX,w)},
$S:2028}
C.cc_.prototype={
$1(d){var w=null,v=B.bD.j(0.08),u=A.n(999),t=A.K(B.bD.j(0.28),B.r,1)
return A.q(w,A.c(C.xI(d,!1),w,w,w,w,w,w,D.fVK,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.m),w,w,w,w,B.f4,w,w,w)},
$S:2029}
C.hda.prototype={
$1(d){var w=null,v=A.aH(d,B.bZ,x.w).w,u=A.n(26),t=A.aI(w,w,w,w,E.av9,w,w,w,new C.hd7(d),w,w,w,w,w,B.cp),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eF(w,B.L,new A.cO(new A.aY(0,380,0,v.a.b*0.9),A.aE(!1,B.a3,!0,u,new A.C(B.a2k,A.w(A.a([new A.bK(B.a9,w,w,t,w),new A.cZ(1,B.c6,A.cb(A.w(A.a([new A.ea(new C.b2x(r,w),s),B.S,A.A(A.a([A.E(A.eo(B.AB,w,D.hnH,new C.hd8(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fc,w,new A.bb(A.n(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.E(A.dg(B.a5O,w,D.hjW,new C.hd9(r,d),A.bp(B.b8,w,w,w,B.c,w,B.fc,w,new A.bb(A.n(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.i,0,w,w)],p),B.l,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.P,0,B.p),w),B.f,B.ay,0,w,w,w,w,w,B.ai),w),w,w,0,B.a2N,w,B.db,w,w,w)},
$S:46}
C.hd7.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.hd8.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aS.bo$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lK(2.5),$async$$0)
case 4:w=3
return A.b(e.ht(B.ht),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eU(B.dN.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aD(q,p,"_")
if(o.length>32)o=B.a.av(o,0,32)
w=5
return A.b(A.rK(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.hd9.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.h6V(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.M(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.hd2.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eF(w,B.ay,A.w(A.a([new A.C(D.bIf,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.nH,w,w,w),1),A.aI(w,w,w,w,B.lK,w,w,w,new C.hd0(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),w),new A.cZ(1,B.c6,new A.C(B.ez,A.bv(A.n(14),A.ha(t,B.z,w,w,B.cr,B.dE,!1,w,!1,w,w),B.ap),w),w),new A.C(B.PA,new A.a4(1/0,w,A.dg(B.on,w,D.b_W,new C.hd1(t,this.c,d),A.bp(B.b8,w,w,w,B.c,w,w,w,new A.bb(A.n(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.P,0,B.p),w,w,w,B.PM,w,B.db,w,new A.bb(v,B.a1),w)},
$S:46}
C.hd0.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.hd1.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rK(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.hde.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eF(w,B.ay,new A.C(D.bIn,A.w(A.a([A.A(A.a([D.bO7,A.aI(w,w,w,w,B.lK,w,w,w,new C.hdc(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),B.N,new A.ea(A.bv(A.n(14),A.q(w,A.b5(w,w,w,new C.bg2(s.ax,w),B.aA),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ae,new A.a4(1/0,w,A.dg(B.on,w,D.b_W,new C.hdd(t,s,d),A.bp(B.b8,w,w,w,B.c,w,w,w,new A.bb(A.n(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.db,w,new A.bb(v,B.a1),w)},
$S:46}
C.hdc.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.hdd.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aS.bo$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lK(2.5),$async$$0)
case 4:w=3
return A.b(e.ht(B.ht),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aD(r,q,"_")
if(p.length>32)p=B.a.av(p,0,32)
r=J.eU(B.dN.gaS(s))
w=5
return A.b(A.rK(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fTV.prototype={
$1(d){return d.a===this.a},
$S:268}
C.dXG.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dXr.prototype={
brG(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.eo:B.c
s=u.a
w=2
return A.b(A.bX(t,null,new C.dXu(s,q,e),p,!0,!0,!1,B.Lg,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dXv(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.brG(d,e)},
$S:2030}
C.dXu.prototype={
$1(d){var w,v=null,u=this.c===B.xZ,t=u?D.dEv:D.dzF
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aT:B.ay,v,v,v,v,v,v,v,v,15,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.C(B.ap3,A.w(A.a([u,B.at,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bu:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae,A.ip(!0,v,v,B.y,D.fEO,new C.dXt(this.a,w,t,d),t.length,v,B.e9,B.ah,!0)],x.p),B.al,v,B.e,B.P,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:28}
C.dXt.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cZ.j(0.14)
else w=t.b.a.d.a?B.a_:B.aT
v=A.n(14)
if(q)u=B.cZ
else u=(t.b.a.d.a?B.bu:B.bl).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aN(!1,p,!0,A.q(B.z,C.b2w(r,26),B.f,s,s,new A.p(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dXs(t.d,r),s,s,s,s,s,s,s)},
$S:172}
C.dXs.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dXv.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dXp.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:90}
C.dXq.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cN(B.cn,e,v)
return new A.dc(e,!1,A.iz(B.z,A.at(A.aE(!1,B.a3,!0,v,new A.ec(new C.dXo(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bj(t,new A.bq(0.96,1,u),u.k("bj<bS.T>"))),v)},
$S:34}
C.dXo.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aH(d,B.bZ,x.w).w,i=l.b,h=i.a.d.a,g=h?B.eo:B.c,f=A.n(14),e=A.K((h?B.bu:B.bl).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aT:B.ay,k,k,k,k,k,k,k,k,16,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.A(A.a([w,A.aN(!1,v,!0,new A.C(B.eH,A.V(B.cE,i.a.d.a?B.bu:B.bl,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dX9(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aT:B.ay,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aYk("Name")
r=l.a
q=r.d==null?k:new C.dXa(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bt:B.mt
n=A.K(B.cZ.j(0.35),B.r,1)
m=r.d
t=A.aO(k,B.M,h,k,!0,B.t,k,A.aQ(),w,k,k,k,k,k,2,s.aJ_(new A.C(B.eW,A.aN(!1,p,!0,A.q(B.z,C.b2w(m==null?"\ud83d\udc64":A.h08(r.e,m),18),B.f,k,k,new A.p(o,k,n,k,k,k,B.a6),k,34,k,B.ct,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.am,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a8,k,B.lr,k,B.adm,k,k)
v=A.a([v,B.ae,t,B.N,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bl,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.aj,A.A(A.a([A.E(i.aZ_("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dXb(r,a0),r.d===B.xZ),1),B.aa,A.E(i.aZ_("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dXg(r,a0),r.d===B.a9M),1)],u),B.l,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.N,new A.bK(B.a5,k,k,A.hA(D.c4h,D.hlU,new C.dXh(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cZ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cp)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aT:B.ay,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.vk(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aO(k,B.M,!1,k,!0,B.t,k,A.aQ(),l.f,k,k,k,k,k,2,i.aYl("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.am,k,k,s,k,k,B.ej,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a8,k,B.an,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.a_:B.aT
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.K((t?B.bu:B.bl).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xI(r.a,!1)
v.push(A.aE(!1,B.a3,!0,q,A.aN(!1,p,!0,A.q(k,A.A(A.a([A.E(A.w(A.a([t,B.bs,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aT:B.ay,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.B,k,B.e,B.i,0,B.p),1),D.c0M],u),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,n,o,k,k,B.m),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dXi(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.N,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aT:B.ay,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aO(k,B.M,!1,k,!0,B.t,k,A.aQ(),l.r,k,k,k,k,k,2,i.aYk("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.am,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a8,k,B.an,k,k,k,k))
v.push(B.ae)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aT:B.ay,k,k,k,k,k,k,k,k,12.5,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b6N(r.b.length!==0,B.mD,new C.dXj(r,i,a0),new C.dXk(r,a0),"Upload from gallery","ID photo"))
v.push(i.b6N(r.c.length!==0,D.bUL,new C.dXl(r,i,d,a0),new C.dXm(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new At.aag("Signature (optional)",t,new C.dXn(a0),new C.dXc(a0,t),new C.dXd(d,t,a0),k))
v.push(B.az)
i=i.a.d.a
t=i?B.bu:B.bl
s=(i?B.bu:B.bl).j(0.28)
s=A.E(A.dV(E.b_P,new C.dXe(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.rl,k,new A.bb(A.n(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cZ,k,k,k,B.c,k,B.rl,k,new A.bb(A.n(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.aa,A.E(A.bI(A.c(h?"Save":"Update",k,k,k,k,k,k,B.wr,k,k,k),k,new C.dXf(r,w,d),t),1)],u),B.l,k,B.e,B.i,0,k,k))
return A.q(k,A.cb(A.w(v,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.p(g,k,e,f,k,k,B.m),k,k,k,B.rp,B.jG,k,k,360)},
$S:177}
C.dX9.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dXa.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dXb.prototype={
$0(){return this.b.$1(new C.dX8(this.a))},
$S:0}
C.dX8.prototype={
$0(){var w=this.a
w.d=B.xZ
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dXg.prototype={
$0(){return this.b.$1(new C.dX7(this.a))},
$S:0}
C.dX7.prototype={
$0(){var w=this.a
w.d=B.a9M
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dXh.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dXi.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wp(null,u.b,A.c3(2020,1,1,0,0,0,0,0),null,s,A.c3(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dX6(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dX6.prototype={
$0(){var w=this.b
return this.a.a=A.c3(w.gcm(),w.gci(),w.gcC(),0,0,0,0,0)},
$S:0}
C.dXj.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Rw(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dX5(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dX5.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dXk.prototype={
$0(){return this.b.$1(new C.dX4(this.a))},
$S:0}
C.dX4.prototype={
$0(){return this.a.b=""},
$S:0}
C.dXl.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.eo:B.c
w=3
return A.b(A.bX(q,null,new C.dX2(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Rw(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dX3(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dX2.prototype={
$1(d){var w=null
return A.bm(!0,A.w(A.a([A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.auH,w,w,w,w,new C.dWX(d),!1,w,w,w,w,w,w,w,D.hbM,w,w,w),A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.auF,w,w,w,w,new C.dWY(d),!1,w,w,w,w,w,w,w,D.hiT,w,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),!0,!1,B.ag,!0,!0)},
$S:28}
C.dWX.prototype={
$0(){A.a6(this.a,!1).N("camera")
return null},
$S:0}
C.dWY.prototype={
$0(){A.a6(this.a,!1).N("gallery")
return null},
$S:0}
C.dX3.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dXm.prototype={
$0(){return this.b.$1(new C.dX1(this.a))},
$S:0}
C.dX1.prototype={
$0(){return this.a.c=""},
$S:0}
C.dXn.prototype={
$0(){return this.a.$1(new C.dX0())},
$S:0}
C.dX0.prototype={
$0(){},
$S:0}
C.dXc.prototype={
$0(){return this.a.$1(new C.dX_(this.b))},
$S:0}
C.dX_.prototype={
$0(){return B.d.a7(this.a)},
$S:0}
C.dXd.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aky(u.a,null,null,new C.dWZ(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dWZ.prototype={
$4(d,e,f,g){this.a.$1(new C.dWW(this.b,d))},
$S:453}
C.dWW.prototype={
$0(){var w=this.a
B.d.a7(w)
B.d.u(w,this.b)},
$S:0}
C.dXe.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dXf.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.M(x.q).f.T(D.fJZ)
return}if(w.a.d==null){w.c.M(x.q).f.T(D.fGO)
return}A.a6(w.c,!1).N(!0)},
$S:0}
C.dXJ.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:90}
C.dXK.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.eo:B.c,n=A.n(14),m=A.K((p?B.bu:B.bl).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aT:B.ay,r,r,r,r,r,r,r,r,16,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.BO(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bu:B.bl,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.Az(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.Az(r).length>0?B.bD:B.cZ,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bl
t=(q?B.bu:B.bl).j(0.28)
s=x.p
return new A.dc(e,!1,A.at(A.aE(!1,B.a3,!0,r,A.q(r,A.w(A.a([p,B.N,v,u,B.az,A.A(A.a([A.E(A.dV(B.oC,new C.dXH(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.jE,r,new A.bb(A.n(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.E(A.bI(D.hjk,r,new C.dXI(d),A.bp(B.cZ,r,r,r,B.c,r,B.jE,r,new A.bb(A.n(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.P,0,B.p),B.f,r,r,new A.p(o,r,m,n,r,r,B.m),r,r,r,B.zK,B.I2,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dXH.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dXI.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dXD.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dXE(r),p=r.a.d.a,o=p?B.eo:B.c,n=A.n(14),m=A.K((p?B.bu:B.bl).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aT:B.ay,s,s,s,s,s,s,s,s,14,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.BO(l.c),s,s,s,s,s,s,D.fXm,s,s,s)],p),B.l,s,B.e,B.i,0,s,s)
w=A.jd((r.a.d.a?B.bu:B.bl).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a4y,"View receipt",new C.dXw(r,d,l))
u=l.x!=null
t=u?B.qe:B.rw
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bIk,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dXx(r,d,l)),q.$3$icon$label$onTap(B.DO,"Edit",new C.dXy(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mD,"View / download ID",new C.dXz(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bUK,"View / download selfie",new C.dXA(r,d,l)))
if(l.gaKK())p.push(q.$3$icon$label$onTap(B.a5E,"View / download signature",new C.dXB(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bD,B.es,"Delete",new C.dXC(r,d,l)))
p.push(B.at)
return A.bm(!0,new A.C(B.tN,A.q(s,A.w(p,B.l,s,B.e,B.P,0,B.p),B.f,s,s,new A.p(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:28}
C.dXE.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aT:B.ay
else w=d
return A.aN(!1,v,!0,new A.C(B.f3,A.A(A.a([A.V(e,w,v,v,v,20),B.bd,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2031}
C.dXw.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.hd6(w,this.c)},
$S:0}
C.dXx.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.Uj(this.c)},
$S:0}
C.dXy.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.EG(this.c)},
$S:0}
C.dXz.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bK_(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dXA.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bK_(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dXB.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.hdb(w,this.c)},
$S:0}
C.dXC.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.Rv(0,this.c)},
$S:0}
C.dXL.prototype={
$1(d){return d.x==null},
$S:268}
C.dXM.prototype={
$1(d){return d.x!=null},
$S:268}
C.dXN.prototype={
$2(d,e){return d+e.c},
$S:2032}
C.dXO.prototype={
$0(){return this.a.bHK()},
$S:0}
C.dXF.prototype={
$0(){return this.a.aiH(this.b)},
$S:0}
C.fUF.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fUG.prototype={
$0(){return B.d.gH(D.a6X)},
$S:z+77}
C.dm4.prototype={
$0(){var w=this.a
return w.l(new C.dm2(w,this.b))},
$S:0}
C.dm2.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dm3.prototype={
$0(){},
$S:0}
C.dm5.prototype={
$0(){var w=this.a.gc6w()
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.fXD.prototype={
$1(d){return C.hCb(A.a1(d,x.N,x.z))},
$S:z+11}
C.fXE.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fXF.prototype={
$2(d,e){var w=A.c9(d.a,null),v=A.c9(e.a,null)
if(w!=null&&v!=null)return B.n.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.hbF.prototype={
$1(d){return d.ak()},
$S:z+12}
C.hkx.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fTM.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bVm.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.ex(e,v)?v:null},
$S:2033}
C.hcg.prototype={
$1(d){var w=this
return new C.a0Q(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dmK.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dmJ(w,d))},
$S:z+80}
C.dmJ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmy.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cM(u)?v.r>=J.ab(v.d):w)v.r=J.ab(v.d)-1},
$S:0}
C.dmv.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dm6.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dm7.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dmz.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dmf.prototype={
$1(d){var w=null,v=A.R(d).ax.a===B.I,u=v?B.eo:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aT:B.ay,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bl,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.em(A.a([A.bG(!1,B.dy,w,w,!0,w,w,w,new C.dmd(d),w,w),A.bI(B.yr,w,new C.dme(d),A.bp(B.nS,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:17}
C.dmd.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dme.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dmg.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.n.D(w.r-1,-1,999)},
$S:0}
C.dmw.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dmx.prototype={
$0(){return B.d.gH(D.AN)},
$S:z+14}
C.dmb.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzS(0),t=J.ab(w.d)
w=J.ab(w.d)===1?"page":"pages"
return new C.UZ(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dmc.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmh.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a0l(v,u,J.ab(w.d),null)},
$S:z+40}
C.dmi.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmI.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.aA(s,new C.a0_(r.y,r.gzS(0),J.ab(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dmG(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ab(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.bfp(v,e,w,u,t,r.gbYF(),C.hSQ(r.y.Q),r.gzS(0),s)
w=t}return A.ca(q,new C.dmH(r,e),new A.C(B.a2E,w,s))},
$S:2034}
C.dmH.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd2(t).ay){t=this.b
u=x.cy.a(B.d.gd2(u.f.f)).gvX(0)
w=t-(u==null?t:u)}else w=0
v=B.h.D(w,-1,0)
u=A.dB()
t=u.a
t.$flags&2&&A.ak(t)
t[11]=0.0013
u.fP(v*3.141592653589793*0.5)
return A.fK(B.a5,A.d3(e,B.h.D(1+v*0.5,0,1)),null,u,!0)},
$S:47}
C.dmG.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aLX(B.rf,B.iS)},
$S:0}
C.dms.prototype={
$0(){var w=this.a
return w.l(new C.dmr(w))},
$S:0}
C.dmr.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dmt.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).N(null)
return null},
$S:0}
C.dm8.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.kI.j(0.5),r=x.p,q=A.a([D.hai,B.ae],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ch(p.d)?"Write this book":"Write a new book"
q.push(p.a0v(d,B.eb,w,J.ch(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a0v(d,K.asy,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cM(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cA,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.l8.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cA,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.l8.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a0v(d,X.atz,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a0v(d,B.pb,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a0v(d,B.pb,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eF(u,E.CU,A.bm(!0,new A.C(B.xh,A.w(q,B.B,u,B.e,B.P,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.PP,u,B.db,u,new A.bb(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:46}
C.dmu.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dml.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cM(w.d)
return new C.a0S(v,J.cM(w.d),w.r+1,null)},
$S:z+44}
C.dmm.prototype={
$1(d){var w=null
return A.pi(!1,A.em(w,w,w,E.CU,new A.km(this.a,new C.dmk(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:295}
C.dmk.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.ad0,B.pv,A.E(A.c(e,w,w,w,w,w,w,B.jP,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:679}
C.dmn.prototype={
$0(){return this.a.a=!1},
$S:53}
C.dmo.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:190}
C.dmp.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmq.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BV(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.TC(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.dmj(s,t))
w=4
return A.b(s.lq(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dmj.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmB.prototype={
$1(d){var w=null
return A.pi(!1,A.em(w,w,w,E.CU,new A.km(this.a,new C.dmA(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:295}
C.dmA.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.ad0,B.pv,A.E(A.c(e,w,w,w,w,w,w,B.jP,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:679}
C.dmC.prototype={
$0(){return this.a.a=!1},
$S:53}
C.dmD.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:190}
C.dmE.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:190}
C.dmF.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BV(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lq(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dm9.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.bou(B.rf,A4.Po)},
$S:0}
C.dma.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aLX(B.rf,A4.Po)},
$S:0}
C.dow.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dox.prototype={
$1(d){var w=this.a
return w.l(new C.dov(w))},
$S:8}
C.dov.prototype={
$0(){return this.a.e="page"},
$S:0}
C.doy.prototype={
$1(d){var w=this.a
return w.l(new C.dou(w))},
$S:8}
C.dou.prototype={
$0(){return this.a.e="book"},
$S:0}
C.doz.prototype={
$1(d){var w=this.a
return w.l(new C.dot(w))},
$S:8}
C.dot.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.doA.prototype={
$0(){var w=this.a
return w.l(new C.dos(w,this.b))},
$S:0}
C.dos.prototype={
$0(){var w=this.b
this.a.d.sb_(0,w)
return w},
$S:0}
C.doB.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga4E()
A.a6(this.b,!1).N(new A.buw(w,v))},
$S:0}
C.dmZ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dmY.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a0O(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dn2.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dn1.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bel(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hJ,v,v,v)
return A.em(A.a([A.bG(!1,B.dy,v,v,!0,v,v,v,new C.dn_(d),v,v),A.bI(B.yr,v,new C.dn0(d),A.bp(B.nS,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.CU,w,v,v,v,v,D.h93,v)},
$S:17}
C.dn_.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dn0.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dn3.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dn4.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a4(s,t,w[u],t))
return A.cb(A.bV(B.bF,r,B.bp,t,18,14),B.t,t,B.y,t,t,D.bJm,t,t,B.ah)},
$S:288}
C.dmX.prototype={
$0(){return this.a.Sl(0,this.b)},
$S:0}
C.dmW.prototype={
$0(){return this.a.RK(0,this.b)},
$S:0}
C.cUb.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cUc.prototype={
$0(){return B.d.gH(D.AN)},
$S:z+14}
C.cUd.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bT(0,new A.C(d,new A.bP(new A.p(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bn,w,w),w),0,0,0)},
$S:2036}
C.dde.prototype={
$1(d){return this.a.l(new C.ddd(this.b,this.c))},
$S:8}
C.ddd.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ddD.prototype={
$1(d){return this.a.l(new C.ddq())},
$S:2}
C.ddq.prototype={
$0(){},
$S:0}
C.ddE.prototype={
$1(d){return this.a.l(new C.ddp())},
$S:2}
C.ddp.prototype={
$0(){},
$S:0}
C.ddF.prototype={
$0(){var w=this.a
return w.l(new C.ddo(w,this.b))},
$S:0}
C.ddo.prototype={
$0(){var w=this.a
return w.d=w.goV().Hf(this.b.a)},
$S:0}
C.ddG.prototype={
$0(){var w=this.a
return w.l(new C.ddn(w,this.b))},
$S:0}
C.ddn.prototype={
$0(){var w=this.a
return w.d=w.goV().cTM(this.b)},
$S:0}
C.ddH.prototype={
$1(d){return this.a.l(new C.ddm())},
$S:2}
C.ddm.prototype={
$0(){},
$S:0}
C.ddI.prototype={
$0(){var w=this.a
return w.l(new C.ddl(w,this.b))},
$S:0}
C.ddl.prototype={
$0(){var w=this.a
return w.d=w.goV().cTR(this.b.a)},
$S:0}
C.ddJ.prototype={
$1(d){var w=this.a
return w.l(new C.ddy(w,d))},
$S:6}
C.ddy.prototype={
$0(){var w=this.a
return w.d=w.goV().cUL(this.b)},
$S:0}
C.ddK.prototype={
$1(d){var w=this.a
return w.d=w.goV().aIV(d)},
$S:2}
C.ddL.prototype={
$1(d){var w=this.a
return w.d=w.goV().cTU(d)},
$S:2}
C.ddN.prototype={
$1(d){var w=this.a
return w.d=w.goV().cUJ(d)},
$S:2}
C.ddO.prototype={
$1(d){var w=this.a
return w.l(new C.ddx(w,d))},
$S:8}
C.ddx.prototype={
$0(){var w=this.a
return w.d=w.goV().cUA(this.b)},
$S:0}
C.ddP.prototype={
$0(){var w=this.a,v=w.goV(),u=B.a.i(w.gzS(0).a.a),t=B.a.i(w.gaG_().a.a)
u=v.bj9(B.a.i(w.gavi().a.a),t,u)
A.a6(this.b,!1).N(u)
return null},
$S:0}
C.bVw.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bVq.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bVp(w,d))},
$S:10}
C.bVp.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a2(0)}},
$S:0}
C.bVz.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bVr.prototype={
$0(){var w=this.a
w.Q=D.b5r
w.ag9(1)
w.r.x=null},
$S:0}
C.bVs.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b5r)return
w=new A.e7()
w.cV(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.dcg[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bVv.prototype={
$0(){var w=this.a
w.Q=D.afF
w.ag9(2)
w.r.z=null},
$S:0}
C.bVu.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.i3D
t.ag9(3)
w=t.r
w.d=s
w.x="I say: "+t.gDy()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.djM[v.aw(4)]:D.dHn[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bVx.prototype={
$0(){var w=this.a
w.Q=D.b5s
w.CW=this.b
w.cy=1
w.ag9(4)
w.r.f=w.f.a+5},
$S:0}
C.bVy.prototype={
$0(){},
$S:0}
C.bVt.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).i2()},
$S:0}
C.bVn.prototype={
$0(){return this.a.Mt(this.b)},
$S:0}
C.bVo.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).i2()},
$S:0}
C.bX2.prototype={
$0(){var w=this
return w.a.SE(w.b,0,w.c,w.d)},
$S:0}
C.bX3.prototype={
$0(){var w=this
return w.a.SE(w.b,3,w.c,w.d)},
$S:0}
C.bX4.prototype={
$0(){var w=this
return w.a.SE(w.b,1,w.c,w.d)},
$S:0}
C.bX5.prototype={
$0(){var w=this
return w.a.bY4(w.b,w.c,w.d)},
$S:0}
C.bX6.prototype={
$0(){var w=this
return w.a.SE(w.b,4,w.c,w.d)},
$S:0}
C.bX7.prototype={
$0(){var w=this
return w.a.SE(w.b,2,w.c,w.d)},
$S:0}
C.bX8.prototype={
$0(){var w=this
return w.a.SE(w.b,5,w.c,w.d)},
$S:0}
C.bX9.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:661}
C.bX1.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a8a[d],p=q.a.a6(0,new A.m(0,-q.b*1.2*124)),o=A.h1(r,B.cK,r,3,r,A.cX(r,r,r,r,r,r,r,r,r,D.fO1,e),B.a8,B.ca,r,B.e6,B.cb)
o.nO(130)
w=o.b.a.c
w=p.aI(0,new A.m(0,w.gb4(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bx(A.c1(w,v.gb4(v)+12,u+18),B.im)
u=this.a
v=t.eN(B.dQ)
w=$.U()
s=A.M()
s.r=B.dJ.gp(0)
u.aq(v,s)
s=A.M()
s.r=D.r5.gp(0)
u.aq(t,s)
w=new A.aK(w.r,B.ak,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.b_(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bA())
v=A.M()
v.r=D.r5.gp(0)
u.af(w,v)
o.a5(u,new A.m(t.a+9,t.b+6))},
$S:658}
C.bVN.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.bVO.prototype={
$2(d,e){var w=this.a,v=B.n.aQ(w.ap1(d),w.ap1(e))
if(v!==0)return v
return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.fHq.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.hkn.prototype={
$2(d,e){if(e!=null)J.bU(this.a.c0(0,d,new C.hko()),e)},
$S:z+66}
C.hko.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.hkp.prototype={
$1(d){return d!==this.a},
$S:3}
C.hkq.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.hkr.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hkm(this.c,d))},
$S:3}
C.hkm.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.hks.prototype={
$1(d){return d!==this.a},
$S:3}
C.hkt.prototype={
$1(d){return d!==this.a},
$S:3}
C.hku.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hkl(this.c,d))},
$S:3}
C.hkl.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fVi.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ab(w)>this.a.a},
$S:3}
C.haz.prototype={
$1(d){return d.Q},
$S:z+15}
C.haA.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fR7.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fYz.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bQy.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.hkO.prototype={
$2(d,e){return B.n.aQ(C.hOC(d),C.hOC(e))},
$S:214}
C.hkP.prototype={
$1(d){return d!==this.a},
$S:3}
C.hbb.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bOG.prototype={
$0(){var w=this.a
w.ch=!0
w.bcx()},
$S:0}
C.bOB.prototype={
$0(){},
$S:0}
C.bOH.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bOz.prototype={
$0(){},
$S:0}
C.bOA.prototype={
$0(){},
$S:0}
C.bOF.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bT(0,A.b5(u,u,u,new C.bg4(t,u),B.aA),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.v.j(0.7)
v=A.n(14)
s.push(A.ao(u,A.q(u,A.c(t.dy,u,u,u,u,u,u,D.fVW,B.K,u,u),B.f,u,u,new A.p(w,u,u,v,u,u,B.m),u,u,u,u,B.bS,u,u,u),u,u,14,14,6,u))}return A.aA(B.c0,new A.am(B.a0,u,B.ac,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bOC(t,e),u,u,u,u,u,u,u,new C.bOD(t,e),u,u,u,u,u,u,u,u,u,new C.bOE(t,e),u,u,u,u,!1,B.a4)},
$S:35}
C.bOC.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bOE.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:24}
C.bOD.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bOy.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).i2()},
$S:0}
C.cuU.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cuV.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cuT(w))},
$S:0}
C.cuT.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cuW.prototype={
$0(){var w=this,v=w.a
v.gjb()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cuX.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cuY.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cuZ.prototype={
$0(){},
$S:0}
C.cv_.prototype={
$0(){var w=this.a
w.z=w.YW(++w.e)
w.Q=A.c4(w.gkZ()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cuQ.prototype={
$0(){return A.a6(this.a,!1).i2()},
$S:0}
C.cuR.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gjb().length,e=i/2,d=new C.cuS(i,f,h),a0=g.as,a1=A.a3(a0).k("ba<2>")
a0=A.B(new A.ba(a0,a1),a1.k("L.E"))
a0=A.bT(0,A.ca(new A.hD(a0),new C.cuL(g,new A.m(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gjb().length!==0&&!B.d.q(g.gjb(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.RE(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cS(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new T.ND(new C.cuM(g,u),new C.cuN(g,u),new C.cuO(g,u),j,j,new A.b9("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fs:B.bf,j,j,j,j,j,j,j,j,13,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gjb().length!==0&&!B.d.q(g.gjb(),-1)){a0=g.e+1>=g.gkZ().length?"See my result":"Next family"
g=A.at(C.uQ(a0,g.gqK(g),B.d0,B.jI,D.fO),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.YW(0):s).length))break
if(!B.d.q(g.gjb(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.YW(0)
o=s}else o=s
n=s[u]
n=A.e0(B.z,new C.RE(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.YW(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.rz(new A.bq(0,p,t),new C.cuP(),new T.EX(u,j,new C.RE(l.b,k,62,!1,j),new A.l3(0.25,new C.RE(m.b,k,62,!1,j),j),new A.kf(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,T.hSI(),!0,!0,j,j,j,j,j,j,!1,B.j7,j,new A.b9("chip-"+r,a0),w),B.b0,B.j6,j,new A.b9("t"+r+"-"+q,a0),v))}++u}g=A.bV(B.fM,a1,B.bp,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.am(B.a0,j,B.ac,B.t,e,j)},
$S:63}
C.cuS.prototype={
$1(d){return new A.m(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:733}
C.cuL.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gjb().length!==0&&!B.d.q(t.gjb(),-1)
return A.b5(p,p,p,new C.bfy(q.b,o,v,w,p),B.aA)},
$S:54}
C.cuN.prototype={
$1(d){return this.a.gjb()[this.b]===-1},
$S:z+30}
C.cuO.prototype={
$1(d){return this.a.cXG(this.b,d.a)},
$S:z+31}
C.cuM.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gjb()[t]!==-1,r=A.n(18),q=e.length!==0?B.d0.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.d0:B.jY,B.r,2)
u=s?A.l6(new C.cuK(),A.at(new C.RE(u.gaIl()[u.gjb()[t]].b,u.gaIl()[u.gjb()[t]].a,62,!1,v),v,v,v),B.n3,B.j6,v,v,new A.bq(0.3,1,x.X),x.i):D.bgK
return A.cY(v,u,v,v,B.b0,new A.p(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:2039}
C.cuK.prototype={
$3(d,e,f){return A.e0(B.z,f,e,null,null)},
$S:111}
C.cuP.prototype={
$3(d,e,f){return A.dQ(f,new A.m(Math.sin(e*24)*8*(1-e),0))},
$S:111}
C.cVf.prototype={
$1(d){return d>=1},
$S:124}
C.cJQ.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkZ()[w.e].d.length)w.l(new C.cJP(w))},
$S:10}
C.cJP.prototype={
$0(){return this.a.f++},
$S:0}
C.cJY.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cJZ.prototype={
$0(){var w=this.a,v=this.b
w.z.K(0,v)
w.Q=v},
$S:0}
C.cK_.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cJX(w))},
$S:0}
C.cJX.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cK0.prototype={
$0(){return this.a.f++},
$S:0}
C.cK1.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cK2.prototype={
$0(){},
$S:0}
C.cK3.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a7(0)
w.as=!1
w.ay=0},
$S:0}
C.cJS.prototype={
$0(){return A.a6(this.a,!1).i2()},
$S:0}
C.cJT.prototype={
$3(d,e,f){var w=null
return A.l6(new C.cJR(this.a,e),w,B.b0,B.hC,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:2040}
C.cJR.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.d0.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.q(v,A.id(new A.C4(new A.ve(B.v.j(e),B.Nd,v,B.a_8),H.c0i(A.b5(v,v,v,new C.aDK(u.gkZ()[u.e].c,u.as,v),B.aA),new A.F1(w,w,B.Y_)),v),B.ap),B.f,v,v,new A.p(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2041}
C.cJU.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,14*(1-e))),e)},
$S:95}
C.cJV.prototype={
$3(d,e,f){return A.dQ(f,new A.m(Math.sin(e*22)*8*(1-e),0))},
$S:111}
C.cJW.prototype={
$0(){return this.a.bu0(this.b)},
$S:0}
C.fj7.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.apz$)
v.apz$=w
v.qy$.sp(0,w)
v.att(u)},
$S:7}
C.ftw.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a2(0)
w.a.$0()},
$S:10}
C.bWy.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bWx())},
$S:0}
C.bWx.prototype={
$0(){},
$S:0}
C.bWv.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bWt.prototype={
$0(){},
$S:0}
C.bWu.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gO4()
w=s+1>=r.length?3:5
break
case 3:q=C.bKd(p.gasj(0),0,r.length)
p.l(new C.bWq(p,q))
o=p
w=6
return A.b(C.Ce(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.Cf(s.d,s.c.a,"school",p.gasj(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bWr())
w=4
break
case 5:p.l(new C.bWs(p))
p.gqR().Xt(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bWq.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bWr.prototype={
$0(){},
$S:0}
C.bWs.prototype={
$0(){return this.a.x++},
$S:0}
C.bWw.prototype={
$0(){return this.a.Mt(this.b)},
$S:0}
C.bWp.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).i2()},
$S:0}
C.fj8.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.m(t,s),q=v.b,p=v.d,o=p?C.hSW(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.Fp
C.TA(q,D.eGS,0,0.2,-0.6,-0.2,null,w,D.eFB,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a6(0,new A.m(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.U()
p=A.M()
p.r=D.Ht.gp(0)
p.c=3
p.d=B.bI
q.ah(new A.m(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.fj9.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.TA(this.a,D.eFY,0,u,0.7,-0.5,null,null,D.KQ,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.fja.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.TA(this.a,D.eHF,0,0,0.8,-0.5,null,null,D.KQ,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.fjb.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.TA(w.b,D.eGM,0,v,-0.8,-0.5,null,null,D.KQ,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.fjc.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.m(34,-122+Math.sin(w*5)*5)
else v=v?D.eGQ:D.Fp
C.TA(p,D.eGg,0,t,0,-0.6,null,v,D.KQ,3,0,s,1.3,u,0,w,0)
q=q.cgU(new A.m(222,455),9)
$.U()
w=A.M()
w.r=B.d0.gp(0)
p.af(q,w)},
$S:0}
C.fjd.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:661}
C.bWb.prototype={
$2(d,e){return d+e},
$S:61}
C.bWm.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bWn.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bWo.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gjb()[u.b]=s
t.gjb()[u.d]=t.y
w=t.as
v=t.qy$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bWi.prototype={
$1(d){return d},
$S:97}
C.bWh.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qy$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bWj.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bWk.prototype={
$0(){},
$S:0}
C.bWl.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.GJ(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.c8(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a7(0)},
$S:0}
C.bWd.prototype={
$0(){return A.a6(this.a,!1).i2()},
$S:0}
C.bWe.prototype={
$2(d,e){var w=this.a
w=w.gkZ()[w.f].e
return B.n.aQ(w[d],w[e])},
$S:61}
C.bWf.prototype={
$2(d,e){var w=null,v=C.hsR(new A.aw(A.aT(1/0,e.a,e.b),A.aT(1/0,e.c,e.d))),u=this.a
return A.aA(B.c0,new A.ea(A.b5(w,w,w,new C.bmP(u,u.qy$),B.aA),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bWc(u,v),w,w,w,w,!1,B.a4)},
$S:35}
C.bWc.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gjb().length
u=B.n.D(B.h.ba((t.a-s.a)/r/450*v),0,v-1)
w.d7I(w.gjb()[u])}},
$S:24}
C.bWg.prototype={
$1(d){var w=this.a
return w.gkZ()[w.f].d[d]},
$S:80}
C.dyy.prototype={
$2(d,e){return 0},
$S:61}
C.bVY.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bVX())},
$S:0}
C.bVX.prototype={
$0(){},
$S:0}
C.bVW.prototype={
$0(){},
$S:0}
C.bVQ.prototype={
$0(){},
$S:0}
C.bVR.prototype={
$0(){},
$S:0}
C.bVV.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.C5},
$S:0}
C.bVU.prototype={
$1(d){var w=null,v=this.a.gqR(),u=A.c(d,w,w,w,w,w,w,D.aZl,w,w,w),t=v.gbqk(0)
return A.aA(B.c0,A.w(A.a([u,B.bs,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aZz,w,w,w)],x.p),B.B,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbwm(v),w,w,w,w,w,w,!1,B.a4)},
$S:121}
C.bVS.prototype={
$0(){return this.a.Mt(this.b)},
$S:0}
C.bVT.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).i2()},
$S:0}
C.bVP.prototype={
$0(){return A.a6(this.a,!1).i2()},
$S:0}
C.e9i.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e9j.prototype={
$1(d){return this.a},
$S:42}
C.e9k.prototype={
$0(){var w=this.a
return w.d=w.gUm().biC(this.b)},
$S:0}
C.e9g.prototype={
$1(d){return new C.V_(this.a,null)},
$S:z+32}
C.e9h.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e9f.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hJ,w,w,w)
return A.em(A.a([A.bG(!1,E.b_Z,w,w,!0,w,w,w,new C.e9d(d),w,w),A.bG(!1,D.hgK,w,w,!0,w,w,w,new C.e9e(d),w,w)],x.p),w,w,D.fO,v,w,w,w,w,D.h2Y,w)},
$S:17}
C.e9d.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e9e.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e9c.prototype={
$0(){var w=null,v=this.a.c.M(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e9l.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e9m.prototype={
$0(){var w=this.a,v=this.b,u=C.bHT(v,10,w.r,!1)
return w.v4(C.hCc(w.a.d,"kahoot",u,w.gba1(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e9n.prototype={
$0(){var w=this.a
return w.v4(new C.anQ(this.b,w.a.d,w.r,null))},
$S:0}
C.e9o.prototype={
$0(){var w=this.a
return w.v4(new C.alY(this.b,w.a.d,w.r,null))},
$S:0}
C.e9r.prototype={
$0(){var w=this.a
return w.v4(new C.awW(this.b,w.a.d,w.r,null))},
$S:0}
C.e9s.prototype={
$0(){var w=this.a
return w.v4(new C.aAS(this.b,w.a.d,w.r,null))},
$S:0}
C.e9t.prototype={
$0(){var w=this.a
return w.v4(new C.anT(this.b,w.a.d,w.r,null))},
$S:0}
C.e9u.prototype={
$0(){var w=this.a
return w.v4(new C.anX(this.b,w.a.d,w.r,null))},
$S:0}
C.e9v.prototype={
$0(){var w=this.a
return w.v4(new C.anZ(this.b,w.a.d,w.r,null))},
$S:0}
C.e9w.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d8b()
return v.v4(C.hCc(v.a.d,"creator_"+u.a,w,v.gba1(),"A game by the family",t,this.c.a))},
$S:0}
C.e9x.prototype={
$0(){return this.a.Qa(this.b)},
$S:0}
C.e9y.prototype={
$0(){return this.a.Zn(0,this.b)},
$S:0}
C.e9p.prototype={
$0(){return this.a.Qa(null)},
$S:0}
C.e9q.prototype={
$0(){return this.a.M(x.q).f.T(D.fGU)},
$S:0}
C.bW9.prototype={
$0(){var w=this.a
w.d=D.b4u
w.z=3},
$S:0}
C.bWa.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a2(0)
w.aST()}else w.l(new C.bW8(w))},
$S:10}
C.bW8.prototype={
$0(){return this.a.z--},
$S:0}
C.bW_.prototype={
$0(){var w=this.a
w.d=D.afl
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bW0.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bVZ(w))
if(w.as<=0){d.a2(0)
w.b9Y(-1)}},
$S:10}
C.bVZ.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bW5.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.YH},
$S:0}
C.bW6.prototype={
$0(){return this.a.e++},
$S:0}
C.bW2.prototype={
$0(){var w=this.a
w.d=D.b4v
w.ay=this.b},
$S:0}
C.bW3.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bW7.prototype={
$2(d,e){return B.n.aQ(e.b,d.b)},
$S:2042}
C.bW4.prototype={
$0(){return this.a.Mt(this.b)},
$S:0}
C.bW1.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).i2()},
$S:0}
C.bVA.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ay()
s=A.a([new A.au(new A.bd(s,B.bb,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.bd(u,B.bb,B.aP),r))}return s},
$S:2043}
C.bVB.prototype={
$0(){return this.a.gE8().c.push(C.hmu(null,0,20,""))},
$S:0}
C.bVL.prototype={
$1(d){var w=null
return A.bB(w,new A.b6(4,A.n(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dA,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.FW,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:262}
C.bVK.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gE8().c,m=this.b,l=n[m],k=o.ckd(l),j=B.c.j(0.06),i=A.n(18),h=A.K(B.aS,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.M9,p,p,p),B.aX],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.aus,p,p,p,new C.bVF(o,m),p,p,p,p,p,p))
n=J.a0(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.i,0,p,p),A.aO(p,B.M,!1,p,!0,B.t,p,A.aQ(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bVG(l),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.dr,!0,B.a8,p,B.an,p,p,p,p),B.N],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aGD[v]
t=D.aGj[v]
s=v+1
f.push(new A.C(B.ey,new A.bZ(B.aJ,B.e,B.i,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.G(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.aa,new A.bu(1,B.b9,A.aO(p,B.M,!1,p,!0,B.t,p,A.aQ(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bVH(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.dr,!0,B.a8,p,B.an,p,p,p,p),p),new Ax.Qf(v,l.c,new C.bVI(o,l),p,!1,D.lZ,p,p,p,p,p,!1,!1,p,I.b5f,p,p,p,p,p,w)],g),p),p))}f.push(D.h8J)
f.push(B.aj)
n=A.a([D.h21,B.aa],g)
for(r=0;r<3;++r){q=D.ckH[r]
n.push(new A.C(B.eW,A.iB(p,p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bVJ(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.i,0,p,p))
return A.q(p,A.w(f,B.B,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(j,p,h,i,p,p,B.m),p,p,p,B.kN,B.bg,p,p,p)},
$S:156}
C.bVF.prototype={
$0(){var w=this.a
return w.l(new C.bVE(w,this.b))},
$S:0}
C.bVE.prototype={
$0(){return B.d.cO(this.a.gE8().c,this.b)},
$S:0}
C.bVG.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bVH.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bVI.prototype={
$1(d){return this.a.l(new C.bVD(this.b,d))},
$S:155}
C.bVD.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bVJ.prototype={
$1(d){return this.a.l(new C.bVC(this.b,this.c))},
$S:8}
C.bVC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eaY.prototype={
$0(){var w=this.a
w.x8()
w.a.bx()
w.a.qL()},
$S:0}
C.eaX.prototype={
$0(){var w=this.a
w.x8()
w.a.bx()
w.a.qL()},
$S:0}
C.eb_.prototype={
$0(){var w=this,v=w.b
if(J.cM(v)||J.ch(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.eb0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eb1.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eaW.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.eaZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.eb3.prototype={
$0(){this.a.Qw()
return null},
$S:0}
C.eb2.prototype={
$0(){return this.a.G2(this.b)},
$S:0}
C.eao.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bG(!1,B.dy,w,w,!0,w,w,w,new C.eam(d),w,w),r=A.bp(B.bW,w,w,w,w,w,w,w,w,w,w,w)
return A.em(A.a([s,A.bI(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.ean(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:17}
C.eam.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.ean.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eap.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cUf(this.b)},
$S:0}
C.eaj.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aYB(w.b,w.c,w.d)},
$S:7}
C.e9L.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e9M.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ea2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.HR(t.a.c),$async$$0)
case 2:s=r.nU(q.dM(e,new C.ea0(t)))
if(s!=null&&t.c!=null)t.l(new C.ea1(t,s))
t.a.bx()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ea0.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.ea1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ea3.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.ea4.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eai.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cV2(C.hT5(w),w)},
$S:0}
C.ea_.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.Xk(u,w,C.aTw(u,w),new C.e9Z(v),null)},
$S:z+37}
C.e9Z.prototype={
$1(d){return this.brN(d)},
brN(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e9Y(s,d))
w=3
return A.b(s.v0(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:799}
C.e9Y.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.biC(this.b)},
$S:0}
C.eaf.prototype={
$1(d){return d.as},
$S:z+1}
C.eag.prototype={
$1(d){var w=this
return new A.ec(new C.eae(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.eae.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.eo:B.c,h=A.n(26),g=A.K(B.bW.j(0.5),B.r,1.5),f=A.q(k,D.bZX,B.f,k,k,new A.p(B.bW.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aT:B.ay,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.w(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bu:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.B,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bd,a0,A.aI(k,k,k,k,A.V(B.cE,j?B.bu:B.bl,k,k,k,k),k,k,k,new C.ea8(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.i,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bW:B.bW.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ax(B.bW,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bW
a0.push(A.aA(k,A.cY(k,A.c(m,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b0,new A.p(q,k,new A.bE(n,n,n,n),new A.bc(p,p,p,p),k,k,B.m),B.hg,k,k,k,k,B.Dq,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.ea9(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bV(B.bF,a0,B.bp,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.cbq,new A.C(D.bJN,f,k),new A.C(D.bJE,e,k),new A.C(B.rp,a0,k),new A.C(X.apA,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.V(Am.ask,j?B.bu:B.bl,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.C(D.bJG,A.A(A.a([a0,B.ar,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aT:B.ay,k,k,k,k,k,k,k,k,k,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.azC(k,B.bW,k,k,!1,B.y,k,k,k,k,k,k,new C.eaa(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.i,0,k,k),k))}f.push(B.az)
j=A.n(20)
e=A.a([new A.ac(0,B.G,B.aB.j(0.35),B.hH,12)],x.V)
f.push(A.aA(k,A.q(k,A.A(A.a([D.h2n,B.bd,D.bO4,D.c_D],w),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,k,j,e,D.cfc,B.m),k,k,k,B.ih,B.bE,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.eab(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.C(B.xi,A.A(A.a([A.E(A.dV(B.dy,new C.eac(a1),k),1),B.ar,A.E(A.bI(N.b0q,k,new C.ead(t,a1),A.bp(B.bW,k,k,k,k,k,B.cq,k,k,k,k,k)),1)],w),B.l,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.q(k,A.cb(A.w(f,B.B,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.ap,k,k,new A.p(i,k,g,h,k,k,B.m),k,k,k,B.zy,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:88}
C.ea8.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.ea9.prototype={
$0(){return this.b.$1(new C.ea7(this.a,this.c))},
$S:0}
C.ea7.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eaa.prototype={
$1(d){var w=this.a
w.l(new C.ea5(w,d))
this.b.$1(new C.ea6())},
$S:8}
C.ea5.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ea6.prototype={
$0(){},
$S:0}
C.eab.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aK_(!0,w))
return null},
$S:0}
C.eac.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.ead.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aK_(!1,w))
return null},
$S:0}
C.eah.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cUR(this.b.b)
w.r.a7(0)},
$S:0}
C.e9z.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.akJ(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hLw(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e9A.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aIR(w)},
$S:0}
C.ear.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.afV(this.b,w,this.c,null)},
$S:z+39}
C.eal.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.eo:B.c,t=A.n(20),s=A.V(B.kT,B.aZ,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aT:B.ay,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bl,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.ae,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.w(p,B.l,w,B.e,B.P,0,B.p)
return A.em(A.a([A.bI(D.hkC,w,new C.eak(d),A.bp(B.aZ,w,w,w,w,w,w,w,w,w,w,w))],o),B.ba,w,u,v,w,s,w,new A.bb(t,B.a1),r,w)},
$S:17}
C.eak.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e9B.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e9C.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e9D.prototype={
$1(d){return d.a},
$S:z+8}
C.e9E.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.ie(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aIR(w)},
$S:0}
C.e9I.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.akJ(q)
w=A.T(q).k("X<1>")
q=A.B(new A.X(q,new C.e9G(r),w),w.k("L.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hLw(v.e,null,r,v.f,v.r,new C.e9H(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e9H.prototype={
$0(){return this.a.adg(this.b)},
$S:0}
C.e9G.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e9J.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.T(w).k("O<1,ie>")
w=A.B(new A.O(w,new C.e9F(this.b),v),v.k("aj.E"))
u.d=t.aIR(w)},
$S:0}
C.e9F.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.eaq.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e9V.prototype={
$1(d){return d.length!==0},
$S:3}
C.e9W.prototype={
$1(d){var w=this
return new A.ec(new C.e9U(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e9U.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.eo:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aT:B.ay,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.O(o,new C.e9Q(u,e,o),A.T(o).k("O<1,x>")))
p.push(B.N)
u=w.d
p.push(A.aO(v,B.M,!1,v,!0,B.t,v,A.aQ(),u,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.n(12),B.dz),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.am,v,v,v,v,v,B.mU,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a8,v,B.an,v,v,v,v))
p=A.w(p,B.al,v,B.e,B.P,0,B.p)
t=w.a
return A.em(A.a([A.bG(!1,B.dy,v,v,!0,v,v,v,new C.e9R(d),v,v),A.bI(B.Ml,v,new C.e9S(t,u,o,e),A.bp(B.bW,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.h71,v,new C.e9T(t,u,o,d),A.bp(B.aZ,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a4(360,v,p,v),v,v,v,v,r,v)},
$S:227}
C.e9Q.prototype={
$1(d){var w=null
return A.dP(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aT:B.ay,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c8c,w,w,w,new C.e9P(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2044}
C.e9P.prototype={
$0(){return this.a.$1(new C.e9N(this.b,this.c))},
$S:0}
C.e9N.prototype={
$0(){return B.d.X(this.a,this.b)},
$S:0}
C.e9R.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e9S.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e9O(w.c,u))
v.bM(0,B.ck)}},
$S:0}
C.e9O.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e9T.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).N(!0)},
$S:0}
C.e9X.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cVx(this.b,D.vt,C.HP(v,w.a.c))},
$S:0}
C.eay.prototype={
$1(d){return d.as},
$S:z+1}
C.eaz.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j8(this.b,w)},
$S:0}
C.eaA.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.iLD(v)
return w.Y9(v==null?null:v.a)},
$S:0}
C.eaB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.ilA(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcp(k)){k=A.aT(1/0,e.a,e.b)
s=A.aT(1/0,e.c,e.d)
l.cCb(new A.aw(u,t),v.gbpl(),new A.aw(k,s))}k=A.n(22)
s=this.b.a
r=s?D.d9M:D.d7C
q=A.K(s?B.dA:D.boG,B.r,1)
p=A.n(22)
o=A.bT(0,A.b5(m,m,m,new C.biS(s,m),B.aA),0,0,0)
n=Math.max(e.b,e.d)
return A.q(m,A.bv(p,new A.am(B.a0,m,B.ac,B.t,A.a([o,A.bT(0,A.u8(new A.Q(n,n,n,n),new A.a4(u,t,new C.bjP(l.d,v,l.f,w,new C.eau(l),l.gclp(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bBV(s,new C.eav(l,e),new C.eaw(l,e),new C.eax(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.p(m,m,q,k,m,new A.a7(B.aY,B.b2,B.w,r,m,m),B.m),m,m,m,S.aoz,m,m,m,m)},
$S:180}
C.eau.prototype={
$1(d){var w=this.a
w.l(new C.eas(w,d))},
$S:2}
C.eas.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.X(0,v)
else w.K(0,v)},
$S:0}
C.eav.prototype={
$0(){var w=this.b
return this.a.bgI(1.25,new A.aw(A.aT(1/0,w.a,w.b),A.aT(1/0,w.c,w.d)))},
$S:0}
C.eaw.prototype={
$0(){var w=this.b
return this.a.bgI(0.8,new A.aw(A.aT(1/0,w.a,w.b),A.aT(1/0,w.c,w.d)))},
$S:0}
C.eax.prototype={
$0(){var w=this,v=w.b
return w.a.aYB(new A.aw(A.aT(1/0,v.a,v.b),A.aT(1/0,v.c,v.d)),new A.aw(w.c,w.d),w.e.gbpl())},
$S:0}
C.eaC.prototype={
$0(){var w=this.a
return w.l(new C.eat(w))},
$S:0}
C.eat.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e9K.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fS(new A.fG(s.c)),$async$$0)
case 2:t.zg("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dn8.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bnH(u,C.hY0(v.c,u),new C.dn7(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dn7.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dn9.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.br5(d.d,d.c,u.f.q(0,d.a),new C.dn6(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dn6.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fUJ.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.nU(new A.cQ(new A.X(v,new C.fUK(d),w.k("X<1>")),new C.fUL(),w.k("cQ<1,o>")))},
$S:z+19}
C.fUK.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fUL.prototype={
$1(d){return d.a},
$S:z+8}
C.fUH.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fUI.prototype={
$1(d){return d.b},
$S:z+8}
C.fUO.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.nU(new A.cQ(new A.X(v,new C.fUP(d),w.k("X<1>")),new C.fUQ(),w.k("cQ<1,o>")))},
$S:z+19}
C.fUP.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fUQ.prototype={
$1(d){return d.a},
$S:z+8}
C.fUM.prototype={
$1(d){var w,v=A.eC([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.K(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fUN.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dnb.prototype={
$0(){return this.a},
$S:z+46}
C.dns.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:254}
C.dnk.prototype={
$2(d,e){var w=this.a.c0(0,d,new C.dnl()),v=J.a0(w)
if(!v.q(w,e))v.K(w,e)},
$S:120}
C.dnl.prototype={
$0(){return A.a([],x.s)},
$S:652}
C.dnj.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.ex(w,e)
return w===!0},
$S:253}
C.dnc.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dni.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dnh.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.K(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aL(v==null?D.EI:v)
u=1
while(v.A())u+=s.$2(v.gO(v).a,e)
v=s.b.h(0,d)
v=J.aL(v==null?B.M:v)
while(v.A()){t=v.gO(v)
if(e.q(0,t))continue
e.K(0,t)
t=w.h(0,t)
t=J.aL(t==null?D.EI:t)
while(t.A())u+=s.$2(t.gO(t).a,e)}return u},
$S:2046}
C.dnd.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dnm.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.K(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aL(u==null?B.M:u)
t=v.d
for(;;){if(!u.A()){s=null
break}A:{s=u.gO(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.K(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.u(w,r)
if(u){t=t.h(0,s)
t=J.aL(t==null?D.EI:t)
while(t.A()){r=t.gO(t)
if(r.a!==a9&&!B.d.aR(w,new C.dnn(r)))w.push(r)}}B.d.bs(w,new C.dno(a8))
B.d.aZ(w,new C.dnp())
q=C.ilz(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.fe9],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bue(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2047}
C.dnn.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dno.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dnp.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.dnq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a0(n),v=o.c,u=-1/0,t=0;t<w.gI(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.ba(v,A.a3(v).k("ba<2>")).cI(0,0,B.oH)+88-w.gH(n).a}else u=0
for(w=J.a0(n),v=o.c,t=0;t<w.gI(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:775}
C.dnr.prototype={
$1(d){return 16+d*156},
$S:154}
C.dna.prototype={
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
t.n(0,d,new C.H7(r,new A.m(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.H7(s,new A.m(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.H7(s,new A.m(e,v)))}t=o.r.h(0,d)
t=J.aL(t==null?B.M:t)
s=o.w
while(t.A()){r=t.gO(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Lw(d,new A.m(e+t,w),s,s.length))}},
$S:190}
C.dne.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aNb(new A.m(v.a,v.b+28),new A.m(w.a,w.b+28),!0,null))},
$S:120}
C.dnf.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dng.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:551}
C.dnt.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:551}
C.dnu.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:475}
C.dnv.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:165}
C.dnw.prototype={
$1(d){return d>=0.5},
$S:124}
C.fzi.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.fJ(A.aN(!1,v,!0,new A.a4(38,38,A.V(d,this.a.c?B.c:B.cx,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w,w)},
$S:2049}
C.f8P.prototype={
$1(d){var w=null,v=A.n(8),u=B.bW.j(0.12),t=A.n(8)
return new A.C(B.kO,A.aN(!1,v,!0,A.q(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fSG,B.K,w,w),B.f,w,w,new A.p(u,w,w,t,w,w,B.m),w,w,w,w,B.PU,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f8O(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.f8O.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dEk.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dEj.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mW,B.K,w,w)
return A.em(A.a([A.bG(!1,B.dy,w,w,!0,w,w,w,new C.dEh(d),w,w),A.bG(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.nf,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dEi(d),w,w)],x.p),B.ba,B.Dj,w,u,D.bKI,w,D.bMD,new A.bb(v,B.a1),w,w)},
$S:17}
C.dEh.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dEi.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dEt.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dEu.prototype={
$1(d){var w=this.a
return w.l(new C.dEs(w,d))},
$S:z+49}
C.dEs.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dEv.prototype={
$1(d){var w=null
return A.r7(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dEy.prototype={
$1(d){var w=this.a
return w.l(new C.dEr(w,d))},
$S:36}
C.dEr.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dEx.prototype={
$1(d){var w=null
return A.r7(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dEz.prototype={
$1(d){var w=this.a
return w.l(new C.dEq(w,d))},
$S:36}
C.dEq.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dEA.prototype={
$0(){var w=this.a
return w.l(new C.dEp(w))},
$S:0}
C.dEp.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dEB.prototype={
$0(){var w=this.a
return w.l(new C.dEo(w))},
$S:0}
C.dEo.prototype={
$0(){return++this.a.at},
$S:0}
C.dEC.prototype={
$0(){var w=this.a
return w.l(new C.dEn(w))},
$S:0}
C.dEn.prototype={
$0(){return--this.a.ax},
$S:0}
C.dED.prototype={
$0(){var w=this.a
return w.l(new C.dEm(w))},
$S:0}
C.dEm.prototype={
$0(){return++this.a.ax},
$S:0}
C.dEE.prototype={
$1(d){var w=this.a
return w.l(new C.dEl(w,d))},
$S:8}
C.dEl.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dEw.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dEF.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bW.j(0.18)
else w=q.c.a?B.eo:B.c
v=A.n(12)
if(p)u=B.bW
else u=(q.c.a?B.ew:B.bP).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bW
else t=q.c.a?B.bu:B.bl
t=A.V(f,t,r,r,r,18)
if(p)s=B.bW
else s=q.c.a?B.bu:B.bl
return A.E(A.aE(!1,B.a3,!0,r,A.aN(!1,o,!0,A.cY(r,A.w(A.a([t,B.at,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.i,0,B.p),r,r,B.b0,new A.p(w,r,u,v,r,r,B.m),B.eM,r,r,r,r,B.jE,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dEG(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dEG.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dEP.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cj9.prototype={
$2(d,e){return new A.bw(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:100}
C.cjg.prototype={
$1(d){return d.ak()},
$S:z+5}
C.cjh.prototype={
$2(d,e){var w=J.b8(e,new C.cjf(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bw(d,w,x.d2)},
$S:z+53}
C.cjf.prototype={
$1(d){return d.ak()},
$S:z+12}
C.cjb.prototype={
$1(d){return C.ao1(A.a1(d,x.N,x.z))},
$S:z+9}
C.cjc.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cjd.prototype={
$1(d){return C.hCb(A.a1(d,x.N,x.z))},
$S:z+11}
C.cje.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cjl.prototype={
$1(d){return new A.aKc(d.f.length,d.a,d.b)},
$S:z+55}
C.cjm.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:589}
C.cji.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cjj.prototype={
$1(d){return d.cUs(C.HP(d,this.a))},
$S:z+85}
C.eaL.prototype={
$1(d){return C.uR(d,this.a.a.c)},
$S:z+3}
C.eaM.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.eaQ.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.eaR.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.eaI.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b49(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zT("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(M.pY(r.c,r.e),$async$$0)
case 4:s.zT(p)
w=5
return A.b(s.Ls(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.eaJ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b49(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zT("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(M.pY(r.c,r.e),$async$$0)
case 4:s.zT(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.eaK.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Xn(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zT("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zT("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zT("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Ls(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ad(j)
o=r.a
if(o.c==null){w=1
break}o.zT(B.a.eu(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.eaP.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b48(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zT("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ca(A.e4(new C.eaO(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(M.pY(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.eaO.prototype={
$1(d){var w=this.b
return new C.a1Q(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.eaN.prototype={
$1(d){return D.hZe},
$S:z+58}
C.eaT.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eaU.prototype={
$1(d){var w=this.a
w=w.r?null:new C.eaS(w,d)
return new A.C(B.d2,new C.bjT(this.b,d.c,d.a,w,null),null)},
$S:2050}
C.eaS.prototype={
$0(){return this.a.a_1(this.b.b)},
$S:0}
C.eaD.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eaE.prototype={
$0(){return this.a.d=!0},
$S:0}
C.eaF.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eaG.prototype={
$0(){return this.a.d=!1},
$S:0}
C.eaH.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eaV.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.Y(s,"NGMYFTSYNC2"))t=!A.cV(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).N(s)
return}},
$S:218}
C.dWN.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dWO.prototype={
$0(){return B.d.gH(D.a8z)},
$S:z+60}
C.dWP.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b5(A.at(A.V(this.b.d,B.c.j(0.95),w,w,D.dhA,44),w,w,w),w,w,new C.boP(u,t,v,w),B.aA)},
$S:54}
C.hcK.prototype={
$1(d){return A.on(new C.hcJ(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:129}
C.hcJ.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.eo:B.c,p=A.a([new A.ac(0,B.G,B.v.j(r?0.35:0.08),B.um,24)],x.V),o=r?B.ew:B.bP
o=A.q(t,t,B.f,t,t,new A.p(o,t,t,A.n(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aZ.j(0.25),B.bW.j(0.18)],x.O)
w=A.q(t,D.c28,B.f,t,t,new A.p(t,t,t,A.n(12),t,new A.a7(B.a5,B.a9,B.w,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aT:B.ay,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.q(t,A.w(A.a([B.S,o,new A.C(E.apE,A.A(A.a([w,B.bd,A.E(A.w(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bu:B.bl,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.i,0,B.p),1)],u),B.l,t,B.e,B.i,0,t,t),t),A.E(A.ip(!0,t,e,B.y,D.fEW,new C.hcI(this.b,s),20,B.ap8,t,B.ah,!1),1)],u),B.l,t,B.e,B.i,0,B.p),B.f,t,t,new A.p(q,t,t,B.lv,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:117}
C.hcI.prototype={
$2(d,e){var w=null,v=D.a8z[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.K(s?B.ew:B.bP,B.r,1),q=A.a([new A.ac(0,B.G,B.v.j(s?0.35:0.08),B.eJ,8)],x.V),p=A.n(15),o=A.E(new C.a8R(v.a,!0,w),1),n=s?B.kg:B.iO,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aT:B.ay,w,w,w,w,w,w,w,w,13,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aE(!1,B.a3,!0,w,A.aN(!1,u,!0,A.eK(A.bv(p,A.w(A.a([o,A.q(w,A.w(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bu:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.B,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.iT,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.ap),w,new A.p(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.hcH(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:79}
C.hcH.prototype={
$0(){A.a6(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.ctb.prototype={
$0(){return this.a.ajN(this.b)},
$S:0}
C.hc6.prototype={
$1(d){return D.hTH},
$S:z+61}
C.hk5.prototype={
$1(d){var w=this
return new C.a3H(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.hca.prototype={
$1(d){return new C.a0q(this.a,null)},
$S:z+63}
C.hc9.prototype={
$1(d){return D.hUJ},
$S:z+64}
C.deB.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.deC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.deA(w,d))},
$S:36}
C.deA.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.deD.prototype={
$1(d){return this.a.M7()},
$S:2}
C.deE.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dex.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dey.prototype={
$1(d){return this.a.M7()},
$S:2}
C.dez.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cLv.prototype={
$0(){},
$S:0}
C.cLB.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cLC.prototype={
$0(){return this.a.aTM(-1)},
$S:0}
C.cLD.prototype={
$1(d){return this.a.l(new C.cLA())},
$S:2}
C.cLA.prototype={
$0(){},
$S:0}
C.cLE.prototype={
$0(){return this.a.aTM(1)},
$S:0}
C.cLF.prototype={
$1(d){return this.a.l(new C.cLz())},
$S:2}
C.cLz.prototype={
$0(){},
$S:0}
C.cLG.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aZ.j(0.2)
if(s)v=B.aZ
else v=this.b.a?B.ew:B.bP
return A.vj(u,u,B.b8,r,u,new C.cLy(t,d),B.xl,s,w,u,new A.ax(v,1,B.r,-1),B.cp)},
$S:2051}
C.cLy.prototype={
$1(d){var w=this.a
return w.l(new C.cLw(w,this.b))},
$S:8}
C.cLw.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cLH.prototype={
$1(d){return this.a.l(new C.cLx())},
$S:2}
C.cLx.prototype={
$0(){},
$S:0}
C.cLI.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fyO.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).N(w)},
$S:2}
C.fyP.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fyQ.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).N(w)},
$S:0}
C.fyM.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbGR()
w=w.e
s=A.n(B.n.D(v-1,0,v))
return A.b5(new A.C(D.bMC,new A.ea(A.q(r,q.a.c,B.f,r,r,new A.p(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bBK(p,v,this.b.a,u,t,r),r,r,B.aA)},
$S:54}
C.fyN.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=B.dS.aB(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.ap(B.aZ,B.bW,w)
s.toString
s=A.a([B.b8,s,B.aZ],x.O)
return A.aE(!1,B.a3,!0,p,A.aN(!1,v,!0,A.eK(D.eLx,r,new A.p(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.dl(-1.2+t,-0.5),new A.dl(1.2-t,0.8),B.w,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:142}
C.ham.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:58}
C.f5Z.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f5Q.prototype={
$0(){return this.a.e=!0},
$S:0}
C.f5R.prototype={
$0(){return this.a.e=!1},
$S:0}
C.f5X.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.ec(new C.f5W(w,this.b),null)},
$S:20}
C.f5W.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.eo:B.c,t=A.n(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aT:B.ay,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eF(w,u,new A.C(B.apx,A.w(A.a([s,B.aj,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bl,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ae,C.hIn(new C.f5T(r,e),r.a),B.az,A.A(A.a([A.E(A.dV(B.dy,new C.f5U(d),w),1),B.ar,A.E(A.bI(B.XU,w,new C.f5V(r,d),A.bp(B.aZ,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.db,w,new A.bb(t,B.a1),w)},
$S:103}
C.f5T.prototype={
$1(d){return this.b.$1(new C.f5S(this.a,d))},
$S:36}
C.f5S.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.f5U.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.f5V.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.f5Y.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.V2(this.b)},
$S:0}
C.f5L.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.biI(w)},
$S:0}
C.f5P.prototype={
$1(d){return this.bsa(d)},
bsa(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.MT(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j8(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f5O.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.T(w).k("X<1>")
w=A.B(new A.X(w,new C.f5N(this.b),v),v.k("L.E"))
u.d=t.biI(w)},
$S:0}
C.f5N.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.f6_.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j8(this.b,w)},
$S:0}
C.f60.prototype={
$1(d){return this.a.bL6(d,this.b)},
$S:z+67}
C.f5M.prototype={
$0(){return this.a.adf(this.b)},
$S:0}
C.hjT.prototype={
$1(d){return new C.agf(this.a,this.b,this.c,null)},
$S:z+68}
C.f62.prototype={
$0(){return this.a.a2b(this.b)},
$S:0}
C.f63.prototype={
$0(){return this.a.Sh(this.b)},
$S:0}
C.f64.prototype={
$0(){return this.a.FX(this.b)},
$S:0}
C.f65.prototype={
$0(){return this.a.a2c(this.b)},
$S:0}
C.f61.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.f5G.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f5H.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.f5I.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.f5K.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qQ(),$async$$0)
case 2:if(t.c!=null)t.l(new C.f5J(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f5J.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.f6s.prototype={
$2(d,e){return d+e.gyq()},
$S:z+71}
C.f6o.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f6p.prototype={
$0(){return this.a.f=!1},
$S:0}
C.f69.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.eo:B.c,s=A.n(24),r=A.q(v,D.c2C,B.f,v,v,new A.p(B.aD.j(u?0.18:0.08),v,A.K(B.aD.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aT:B.ay,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aT:B.ay
u=u?B.ew:B.bP
w=x.p
return A.eF(v,t,new A.C(B.xk,A.w(A.a([r,B.aN,q,B.N,p,B.df,A.A(A.a([A.E(A.dV(B.oC,new C.f67(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fc,v,new A.bb(A.n(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.ar,A.E(A.bI(D.hoD,v,new C.f68(d),A.bp(B.aD,v,v,v,v,v,B.fc,v,new A.bb(A.n(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.i,0,v,v)],w),B.l,v,B.e,B.P,0,B.p),v),v,v,v,v,v,B.db,v,new A.bb(s,B.a1),v)},
$S:46}
C.f67.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.f68.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.f6i.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.eo:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.v.j(k?0.35:0.08),B.fy,28)],x.V),g=k?D.dpO:Au.a7Q,f=x.p
g=A.q(m,A.w(A.a([A.q(m,m,B.f,m,m,new A.p(B.c.j(0.45),m,m,A.n(99),m,m,B.m),m,4,m,m,m,m,m,40),B.az,D.fy1,B.at,new A.bK(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cD,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.p(m,m,m,m,m,new A.a7(B.ax,B.aC,B.w,g,m,m),B.m),m,m,m,m,E.apC,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.C,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.bbs(B.b4,B.jK,new C.f6f(v,d),l,"Camera import","Scan QR"),1),B.ar,A.E(v.bbs(B.cJ,Q.At,new C.f6g(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.i,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.C,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.aD.j(k?0.14:0.06)
q=A.n(16)
p=A.K(B.aD.j(0.28),B.r,1)
o=A.q(m,D.c1U,B.f,m,m,new A.p(B.aD.j(0.12),m,m,A.n(12),m,m,B.m),m,m,m,m,B.bS,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aT:B.ay,m,m,m,m,m,m,m,m,m,m,m,B.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.w(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bl,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.B,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.C(B.xf,A.q(m,A.w(A.a([g,new A.C(B.apy,A.w(A.a([w,B.S,u,B.by,t,B.S,A.aE(!1,B.a3,!0,m,A.aN(!1,s,!0,A.q(m,A.A(A.a([o,B.bd,n,A.V(B.eO,k?B.bu:B.bl,m,m,m,m)],f),B.l,m,B.e,B.i,0,m,m),B.f,m,m,new A.p(r,m,p,q,m,m,B.m),m,m,m,m,B.bE,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.f6h(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.B,m,B.e,B.i,0,B.p),m)],f),B.l,m,B.e,B.P,0,B.p),B.ap,m,m,new A.p(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:28}
C.f6f.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.wG("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f6g.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.wG("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f6h.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.PM(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f6d.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.eo:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.v.j(o?0.35:0.08),B.eS,24)],x.V),k=o?B.ew:B.bP
k=A.q(q,q,B.f,q,q,new A.p(k,q,q,A.n(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bu:B.bl
u=A.bv(w,new A.a4(48,48,C.aUY(!0,A.n(12),48,P.QA,u,v.c,48),q),B.ap)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aT:B.ay,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.BO(v.gyq())
s=x.p
r=this.a
return A.bm(!0,new A.C(B.xf,A.q(q,A.w(A.a([B.S,k,new A.C(D.apv,A.A(A.a([u,B.bd,A.E(A.w(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bu:B.bl,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.B,q,B.e,B.i,0,B.p),1)],s),B.l,q,B.e,B.i,0,q,q),q),B.D9,r.cw6(B.vN,B.aZ,new C.f6b(d),p,"QR code or backup file","Transfer project"),r.b8q(!0,B.es,B.aD,new C.f6c(d),p,"Remove from this device","Delete project"),B.S],s),B.l,q,B.e,B.P,0,B.p),B.f,q,q,new A.p(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:28}
C.f6b.prototype={
$0(){A.a6(this.a,!1).N("transfer")
return null},
$S:0}
C.f6c.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
C.f6e.prototype={
$1(d){return this.bsb(d)},
bsb(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.MT(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wW(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f6v.prototype={
$0(){var w=this.a
w.a.bx()
w.l(new C.f6u(w))},
$S:0}
C.f6u.prototype={
$0(){return this.a.r++},
$S:0}
C.f6w.prototype={
$0(){var w=this.a
return w.l(new C.f6t(w))},
$S:0}
C.f6t.prototype={
$0(){return this.a.r++},
$S:0}
C.f66.prototype={
$0(){var w=this.a.c
w.toString
return A.j8(w,null)},
$S:0}
C.f6a.prototype={
$0(){return this.a.cp9(this.b)},
$S:0}
C.f6r.prototype={
$0(){var w=this.a
return w.l(new C.f6q(w,this.b))},
$S:0}
C.f6q.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f6l.prototype={
$0(){return this.a.wG("scan")},
$S:0}
C.f6m.prototype={
$0(){return this.a.wG("file")},
$S:0}
C.f6n.prototype={
$1(d){return this.a.cw7(d,this.b)},
$S:z+72}
C.f6k.prototype={
$0(){return this.a.G0(this.b)},
$S:0}
C.f6j.prototype={
$0(){return this.a.a2K(this.b,this.c)},
$S:0}
C.cKR.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cKQ.prototype={
$1(d){return d.ak()},
$S:z+74}
C.cKO.prototype={
$1(d){return C.i3k(A.a1(d,x.N,x.z))},
$S:z+75}
C.cKP.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fTC.prototype={
$1(d){return d.y===D.lf},
$S:z+3}
C.hkF.prototype={
$1(d){return C.aTw(d,this.a)},
$S:z+3}
C.fR6.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bWF.prototype={
$1(d){return!d.as},
$S:z+1}
C.bWE.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bWB.prototype={
$1(d){return C.hCd(A.a1(d,x.N,x.z))},
$S:z+24}
C.bWC.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bWD.prototype={
$1(d){return J.k(d)},
$S:15}
C.fGY.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fCm.prototype={
$1(d){return C.hrn(A.a1(d,x.N,x.z))},
$S:z+79}
C.fCn.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fCo.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.hbV.prototype={
$1(d){return J.k(d)},
$S:15}
C.hbW.prototype={
$1(d){return d.a},
$S:z+81}
C.hbX.prototype={
$1(d){return d.length!==0},
$S:3}
C.hbY.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.hbZ.prototype={
$1(d){return d.V2(null).ak()},
$S:z+82}
C.hkD.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fU5.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fXJ.prototype={
$1(d){return C.ao1(A.a1(d,x.N,x.z))},
$S:z+9}
C.fXK.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fXL.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fXM.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fXN.prototype={
$1(d){return C.uR(d,this.a)},
$S:z+3}
C.hbH.prototype={
$1(d){return C.uR(d,this.a)},
$S:z+3}
C.hky.prototype={
$1(d){return C.ao1(A.a1(d,x.N,x.z))},
$S:z+9}
C.hkz.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.hkA.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fTN.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fTO.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.hkJ.prototype={
$1(d){return!d.as},
$S:z+1}
C.fTh.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fTi.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fTj.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.hk6.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fYA.prototype={
$1(d){return d.Q},
$S:z+15}
C.hbA.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fXG.prototype={
$1(d){return C.ao1(A.a1(d,x.N,x.z))},
$S:z+9}
C.fXH.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fXI.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.hbv.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fD1.prototype={
$1(d){return d.length!==0},
$S:3}
C.fD2.prototype={
$1(d){return C.hCd(A.a1(d,x.N,x.z))},
$S:z+24}
C.fD3.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fD4.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:15}
C.fD5.prototype={
$1(d){return d.length!==0},
$S:3}
C.fDj.prototype={
$2(d,e){return d.eH(new C.fDk(e))},
$S:2052}
C.fDk.prototype={
$1(d){$.an.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.co},
$S:2053}
C.fDg.prototype={
$1(d){return C.iqL(d,this.a)},
$S:z+84}
C.fDh.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fDi.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fHJ.prototype={
$1(d){return d.a},
$S:z+56}
C.fHK.prototype={
$1(d){return d.length!==0},
$S:3}
C.fHL.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fKJ.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fQh.prototype={
$1(d){return C.hOa(d,C.HP(d,this.a))},
$S:z+5}
C.fQi.prototype={
$1(d){return C.hOb(d,C.HP(d,this.a))},
$S:z+5};(function aliases(){var w=C.aDM.prototype
w.bA3=w.t
w=C.aBR.prototype
w.bzZ=w.t
w=C.aJn.prototype
w.bAr=w.t
w=C.aDN.prototype
w.bA4=w.t
w=C.aDP.prototype
w.bA5=w.t
w=C.aDQ.prototype
w.bA6=w.t
w=C.aPE.prototype
w.bCV=w.t
w=C.aRL.prototype
w.bFe=w.t
w=C.aRM.prototype
w.bFf=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aGQ.prototype,"gcsW","csX",28)
var r
w(r=C.aDL.prototype,"gclv","clw",65)
v(r,"gaRX","Pi",0)
v(r,"gcBu","Cn",0)
v(r,"gbT6","Q0",0)
v(r,"gcQq","zU",0)
v(r,"gcv4","a3u",0)
v(r,"gbOm","PI",0)
v(r,"gbTw","Zs",0)
w(r,"gbYF","bYG",78)
v(r,"gbIx","Bf",0)
v(C.aDO.prototype,"gcQm","GV",0)
v(r=C.anR.prototype,"gbwo","bwp",2)
v(r,"gbwg","bwh",2)
v(r,"gcRu","cRv",2)
u(r,"gqK","kU",0)
u(r=C.alZ.prototype,"gf6","fY",2)
w(r,"gcmz","cmA",27)
u(C.awX.prototype,"gqK","kU",0)
v(r=C.aAT.prototype,"gd2e","d2f",2)
u(r,"gqK","kU",0)
u(C.aNh.prototype,"gbwm","bwn",2)
v(C.ao_.prototype,"gCV","cRH",2)
u(r=C.anY.prototype,"gcSo","cSp",2)
u(r,"gqK","kU",0)
v(r=C.anU.prototype,"gbve","bvf",2)
v(r,"gcXE","cXF",2)
u(r=C.anW.prototype,"gf6","fY",2)
u(r,"giM","cR_",2)
v(r=C.anS.prototype,"gcQP","cQQ",2)
u(r,"gbu7","jE",2)
v(r=C.aHp.prototype,"gajp","wX",0)
v(r,"gcol","a2A",0)
v(r,"gaWe","JC",0)
v(r=C.aHm.prototype,"gcMa","a5G",0)
v(r,"gajp","wX",0)
v(r,"gczr","a49",0)
v(r,"gcod","b6C",2)
v(r,"gcpm","a2Q",0)
w(r,"gclp","clq",35)
v(r,"gbTo","JH",0)
v(r,"gcNk","cNl",2)
v(r,"gcaP","a0i",0)
w(r,"gcjU","cjV",36)
v(r,"gco1","co2",2)
v(r=C.aFO.prototype,"gcgX","RM",0)
v(r,"gcgZ","ch_",2)
v(r,"gbPT","acQ",0)
v(r=C.aHo.prototype,"gbX0","ZY",0)
v(r,"gc6D","a_E",0)
v(r,"gcG4","a53",0)
v(r,"gcC5","a4D",0)
v(C.aHn.prototype,"gcBN","alc",0)
v(C.awa.prototype,"gcjS","a29",0)
v(C.aCt.prototype,"ga5o","M7",2)
v(C.aCs.prototype,"ga5o","M7",2)
v(C.aB4.prototype,"ga5o","M7",2)
v(r=C.aIY.prototype,"gb7O","SN",0)
v(r,"gbHl","Y3",0)
v(r,"gcpa","cpb",2)
w(C.aIX.prototype,"gckK","ckL",69)
t(C.aIZ.prototype,"gaW9",0,0,null,["$1","$0"],["JB","bRd"],70,0,0)
s(C,"hX4","iBm",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aG,[C.arC,C.vg,C.nR,C.IY,C.ahu,C.Lo,C.vh,C.bXa,C.tB,C.bsn,C.ao8,C.afx,C.lT,C.bVM,C.awl,C.A2,C.amG,C.Nu,C.bdz,C.abB,C.bkZ,C.ahB,C.aC6,C.ahp,C.aNh,C.Lw,C.H7,C.bjR,C.aNb,C.at2,C.dnx,C.mq,C.aXW,C.aXV,C.aVZ,C.uC,C.rR,C.m6,C.ie,C.lj,C.aL8])
u(A.hs,[C.h1O,C.h1N,C.h1P,C.hcD,C.fOQ,C.fOR,C.fOW,C.h_i,C.h_h,C.h_g,C.cc_,C.hda,C.hd2,C.hde,C.fTV,C.dXu,C.dXp,C.dXq,C.dX2,C.dWZ,C.dXJ,C.dXK,C.dXD,C.dXE,C.dXL,C.dXM,C.fUF,C.fXD,C.fXE,C.hbF,C.hkx,C.fTM,C.hcg,C.dmK,C.dm6,C.dmf,C.dmw,C.dmb,C.dmh,C.dm8,C.dml,C.dmm,C.dmk,C.dmB,C.dmA,C.dox,C.doy,C.doz,C.dmY,C.dn2,C.dn1,C.cUb,C.cUd,C.dde,C.ddD,C.ddE,C.ddH,C.ddJ,C.ddK,C.ddL,C.ddN,C.ddO,C.bVw,C.bVq,C.fHq,C.hkp,C.hkq,C.hkr,C.hkm,C.hks,C.hkt,C.hku,C.hkl,C.fVi,C.haz,C.fR7,C.fYz,C.bQy,C.hkP,C.hbb,C.bOH,C.bOC,C.bOE,C.bOD,C.cuS,C.cuN,C.cuO,C.cuM,C.cuK,C.cuP,C.cVf,C.cJQ,C.cJT,C.cJR,C.cJU,C.cJV,C.fj7,C.ftw,C.bWi,C.bWc,C.bWg,C.bVU,C.e9j,C.e9g,C.e9h,C.e9f,C.e9l,C.bWa,C.bW0,C.bVL,C.bVK,C.bVG,C.bVH,C.bVI,C.bVJ,C.eaZ,C.eao,C.eaj,C.e9L,C.ea0,C.ea3,C.ea_,C.e9Z,C.eaf,C.eag,C.eaa,C.e9z,C.ear,C.eal,C.e9B,C.e9C,C.e9D,C.e9I,C.e9G,C.e9F,C.e9V,C.e9W,C.e9Q,C.eay,C.eau,C.dn8,C.dn9,C.fUJ,C.fUK,C.fUL,C.fUH,C.fUI,C.fUO,C.fUP,C.fUQ,C.fUM,C.fUN,C.dns,C.dni,C.dnd,C.dnn,C.dno,C.dnr,C.dnf,C.dnu,C.dnv,C.dnw,C.fzi,C.f8P,C.dEj,C.dEt,C.dEu,C.dEv,C.dEy,C.dEx,C.dEz,C.dEE,C.dEF,C.cjg,C.cjf,C.cjb,C.cjc,C.cjd,C.cje,C.cjl,C.cji,C.cjj,C.eaL,C.eaO,C.eaN,C.eaU,C.eaV,C.dWN,C.hcK,C.hc6,C.hk5,C.hca,C.hc9,C.deC,C.deD,C.dey,C.cLD,C.cLF,C.cLG,C.cLy,C.cLH,C.fyO,C.ham,C.f5X,C.f5T,C.f5P,C.f5N,C.f60,C.hjT,C.f69,C.f6i,C.f6d,C.f6e,C.f6n,C.cKQ,C.cKO,C.cKP,C.fTC,C.hkF,C.fR6,C.bWF,C.bWE,C.bWB,C.bWC,C.bWD,C.fCm,C.fCn,C.hbV,C.hbW,C.hbX,C.hbY,C.hbZ,C.hkD,C.fU5,C.fXJ,C.fXK,C.fXM,C.fXN,C.hbH,C.hky,C.hkz,C.hkA,C.fTN,C.fTO,C.hkJ,C.fTh,C.fTi,C.hk6,C.fYA,C.hbA,C.fXG,C.fXH,C.hbv,C.fD1,C.fD2,C.fD3,C.fD4,C.fD5,C.fDk,C.fDg,C.fDh,C.fHJ,C.fHK,C.fKJ,C.fQh,C.fQi])
u(A.av,[C.b2x,C.anP,C.aZc,C.a0_,C.bfp,C.RE,C.a84,C.u1,C.J_,C.bjP,C.bnH,C.bBV,C.br5,C.afU,C.bnG,C.afT,C.bnF,C.aFP,C.aMd,C.afV,C.H3,C.bjQ,C.af8,C.bjO,C.bjT,C.b2v,C.awa,C.agf])
u(A.ml,[C.bg2,C.bhh,C.bh8,C.aL2,C.bmH,C.bsm,C.aZh,C.bg4,C.aDK,C.bfy,C.bwv,C.bmP,C.bme,C.bml,C.bjS,C.biS,C.boP,C.bBK])
u(A.j0,[C.hd7,C.hd8,C.hd9,C.hd0,C.hd1,C.hdc,C.hdd,C.dXG,C.dXs,C.dXv,C.dX9,C.dXa,C.dXb,C.dX8,C.dXg,C.dX7,C.dXh,C.dXi,C.dX6,C.dXj,C.dX5,C.dXk,C.dX4,C.dXl,C.dWX,C.dWY,C.dX3,C.dXm,C.dX1,C.dXn,C.dX0,C.dXc,C.dX_,C.dXd,C.dWW,C.dXe,C.dXf,C.dXH,C.dXI,C.dXw,C.dXx,C.dXy,C.dXz,C.dXA,C.dXB,C.dXC,C.dXO,C.dXF,C.fUG,C.dm4,C.dm2,C.dm3,C.dm5,C.dmJ,C.dmy,C.dmv,C.dm7,C.dmz,C.dmd,C.dme,C.dmg,C.dmx,C.dmc,C.dmi,C.dmG,C.dms,C.dmr,C.dmt,C.dmu,C.dmn,C.dmp,C.dmq,C.dmj,C.dmC,C.dmF,C.dm9,C.dma,C.dow,C.dov,C.dou,C.dot,C.doA,C.dos,C.doB,C.dmZ,C.dn_,C.dn0,C.dn3,C.dmX,C.dmW,C.cUc,C.ddd,C.ddq,C.ddp,C.ddF,C.ddo,C.ddG,C.ddn,C.ddm,C.ddI,C.ddl,C.ddy,C.ddx,C.ddP,C.bVp,C.bVz,C.bVr,C.bVs,C.bVv,C.bVu,C.bVx,C.bVy,C.bVt,C.bVn,C.bVo,C.bX2,C.bX3,C.bX4,C.bX5,C.bX6,C.bX7,C.bX8,C.hko,C.haA,C.bOG,C.bOB,C.bOz,C.bOA,C.bOy,C.cuU,C.cuV,C.cuT,C.cuW,C.cuY,C.cuZ,C.cv_,C.cuQ,C.cJP,C.cJY,C.cJZ,C.cK_,C.cJX,C.cK0,C.cK1,C.cK2,C.cK3,C.cJS,C.cJW,C.bWy,C.bWx,C.bWv,C.bWt,C.bWu,C.bWq,C.bWr,C.bWs,C.bWw,C.bWp,C.fj8,C.fj9,C.fja,C.fjb,C.fjc,C.bWm,C.bWn,C.bWo,C.bWh,C.bWj,C.bWk,C.bWl,C.bWd,C.bVY,C.bVX,C.bVW,C.bVQ,C.bVR,C.bVV,C.bVS,C.bVT,C.bVP,C.e9i,C.e9k,C.e9d,C.e9e,C.e9c,C.e9m,C.e9n,C.e9o,C.e9r,C.e9s,C.e9t,C.e9u,C.e9v,C.e9w,C.e9x,C.e9y,C.e9p,C.e9q,C.bW9,C.bW8,C.bW_,C.bVZ,C.bW5,C.bW6,C.bW2,C.bW3,C.bW4,C.bW1,C.bVA,C.bVB,C.bVF,C.bVE,C.bVD,C.bVC,C.eaY,C.eaX,C.eb_,C.eb0,C.eb1,C.eaW,C.eb3,C.eb2,C.eam,C.ean,C.eap,C.e9M,C.ea2,C.ea1,C.ea4,C.eai,C.e9Y,C.ea8,C.ea9,C.ea7,C.ea5,C.ea6,C.eab,C.eac,C.ead,C.eah,C.e9A,C.eak,C.e9E,C.e9H,C.e9J,C.eaq,C.e9P,C.e9N,C.e9R,C.e9S,C.e9O,C.e9T,C.e9X,C.eaz,C.eaA,C.eas,C.eav,C.eaw,C.eax,C.eaC,C.eat,C.e9K,C.dn7,C.dn6,C.dnb,C.dnl,C.dnc,C.f8O,C.dEk,C.dEh,C.dEi,C.dEs,C.dEr,C.dEq,C.dEA,C.dEp,C.dEB,C.dEo,C.dEC,C.dEn,C.dED,C.dEm,C.dEl,C.dEw,C.dEG,C.dEP,C.eaM,C.eaQ,C.eaR,C.eaI,C.eaJ,C.eaK,C.eaP,C.eaT,C.eaS,C.eaD,C.eaE,C.eaF,C.eaG,C.eaH,C.dWO,C.hcH,C.ctb,C.deB,C.deA,C.deE,C.dex,C.dez,C.cLv,C.cLB,C.cLC,C.cLA,C.cLE,C.cLz,C.cLw,C.cLx,C.cLI,C.fyP,C.fyQ,C.f5Z,C.f5Q,C.f5R,C.f5S,C.f5U,C.f5V,C.f5Y,C.f5L,C.f5O,C.f6_,C.f5M,C.f62,C.f63,C.f64,C.f65,C.f61,C.f5G,C.f5H,C.f5I,C.f5K,C.f5J,C.f6o,C.f6p,C.f67,C.f68,C.f6f,C.f6g,C.f6h,C.f6b,C.f6c,C.f6v,C.f6u,C.f6w,C.f6t,C.f66,C.f6a,C.f6r,C.f6q,C.f6l,C.f6m,C.f6k,C.f6j])
u(A.af,[C.arP,C.UZ,C.a0O,C.a0S,C.a0Q,C.a0l,C.anQ,C.alY,C.awW,C.aAS,C.anZ,C.anX,C.anT,C.Xk,C.anV,C.V_,C.at5,C.at_,C.a1w,C.at3,C.a1Q,C.a1R,C.a8R,C.a0q,C.a0p,C.a_Q,C.a3H,C.GT,C.aAY,C.aw9,C.aw3,C.aw8,C.PU])
u(A.ai,[C.aGQ,C.bjJ,C.aDL,C.bk7,C.aDO,C.bhf,C.aDM,C.aBR,C.aJn,C.aAT,C.aDQ,C.aDP,C.aDN,C.bpb,C.anW,C.anS,C.aHp,C.aHm,C.aFO,C.aHo,C.aHn,C.bpc,C.aPE,C.aCt,C.aCs,C.aB4,C.bBN,C.aRL,C.aRM,C.aIY,C.bqB,C.aIX,C.bDz])
u(A.j1,[C.dXr,C.dXt,C.dXo,C.dXN,C.fXF,C.bVm,C.dmI,C.dmH,C.dmo,C.dmD,C.dmE,C.dn4,C.bX9,C.bX1,C.bVN,C.bVO,C.hkn,C.hkO,C.bOF,C.cuX,C.cuR,C.cuL,C.fjd,C.bWb,C.bWe,C.bWf,C.dyy,C.bW7,C.eae,C.e9U,C.eaB,C.dnk,C.dnj,C.dnh,C.dnm,C.dnp,C.dnq,C.dna,C.dne,C.dng,C.dnt,C.cj9,C.cjh,C.cjm,C.dWP,C.hcJ,C.hcI,C.fyM,C.fyN,C.f5W,C.f6s,C.cKR,C.fGY,C.fCo,C.fXL,C.fTj,C.fXI,C.fDj,C.fDi,C.fHL])
u(A.lo,[C.a3b,C.ahD,C.a3u,C.a1g,C.ae9,C.aNZ,C.IZ,C.ao0,C.cKS,C.cKT])
t(C.anR,C.aDM)
t(C.alZ,C.aBR)
t(C.awX,C.aJn)
t(C.bjN,C.aDQ)
t(C.ao_,C.bjN)
t(C.bjM,C.aDP)
t(C.anY,C.bjM)
t(C.bjL,C.aDN)
t(C.anU,C.bjL)
t(C.boQ,C.aPE)
t(C.bBL,C.aRL)
t(C.bBM,C.aRM)
t(C.aIZ,C.bDz)
t(C.bdN,A.bdA)
t(C.bBO,A.a8v)
t(C.bdM,C.bBO)
w(C.aDM,A.cm)
w(C.aBR,A.cm)
w(C.aJn,A.f_)
w(C.aDN,A.cm)
v(C.bjL,C.ahp)
w(C.aDP,A.cm)
v(C.bjM,C.ahp)
w(C.aDQ,A.cm)
v(C.bjN,C.ahp)
w(C.aPE,A.f_)
w(C.aRL,A.cm)
w(C.aRM,A.cm)
v(C.bDz,A.eI)
v(C.bBO,A.jA)})()
A.jj(b.typeUniverse,JSON.parse('{"b2x":{"av":[],"x":[]},"bg2":{"aC":[]},"arP":{"af":[],"x":[]},"aGQ":{"ai":["arP"]},"UZ":{"af":[],"x":[]},"anP":{"av":[],"x":[]},"aZc":{"av":[],"x":[]},"bjJ":{"ai":["UZ"]},"a0O":{"af":[],"x":[]},"a0S":{"af":[],"x":[]},"a0Q":{"af":[],"x":[]},"a0l":{"af":[],"x":[]},"aDL":{"ai":["a0O"]},"bk7":{"ai":["a0S"]},"aDO":{"ai":["a0Q"]},"a0_":{"av":[],"x":[]},"bhh":{"aC":[]},"bh8":{"aC":[]},"bhf":{"ai":["a0l"]},"aL2":{"aC":[]},"bmH":{"aC":[]},"bfp":{"av":[],"x":[]},"anQ":{"af":[],"x":[]},"anR":{"ai":["anQ"]},"bsm":{"aC":[]},"aZh":{"aC":[]},"alY":{"af":[],"x":[]},"awW":{"af":[],"x":[]},"aAS":{"af":[],"x":[]},"alZ":{"ai":["alY"]},"bg4":{"aC":[]},"RE":{"av":[],"x":[]},"aDK":{"aC":[]},"awX":{"ai":["awW"]},"bfy":{"aC":[]},"aAT":{"ai":["aAS"]},"anZ":{"af":[],"x":[]},"anX":{"af":[],"x":[]},"anT":{"af":[],"x":[]},"ao_":{"ai":["anZ"]},"bwv":{"aC":[]},"anY":{"ai":["anX"]},"bmP":{"aC":[]},"anU":{"ai":["anT"]},"bme":{"aC":[]},"Xk":{"af":[],"x":[]},"anV":{"af":[],"x":[]},"V_":{"af":[],"x":[]},"a84":{"av":[],"x":[]},"bml":{"aC":[]},"u1":{"av":[],"x":[]},"J_":{"av":[],"x":[]},"bpb":{"ai":["Xk"]},"anW":{"ai":["anV"]},"anS":{"ai":["V_"]},"at5":{"af":[],"x":[]},"at_":{"af":[],"x":[]},"a1w":{"af":[],"x":[]},"afV":{"av":[],"x":[]},"aHp":{"ai":["at5"]},"aHm":{"ai":["at_"]},"bjP":{"av":[],"x":[]},"bjS":{"aC":[]},"bnH":{"av":[],"x":[]},"biS":{"aC":[]},"bBV":{"av":[],"x":[]},"br5":{"av":[],"x":[]},"aFO":{"ai":["a1w"]},"afU":{"av":[],"x":[]},"bnG":{"av":[],"x":[]},"afT":{"av":[],"x":[]},"bnF":{"av":[],"x":[]},"aFP":{"av":[],"x":[]},"aMd":{"av":[],"x":[]},"H3":{"av":[],"x":[]},"at3":{"af":[],"x":[]},"a1Q":{"af":[],"x":[]},"a1R":{"af":[],"x":[]},"aHo":{"ai":["at3"]},"bjQ":{"av":[],"x":[]},"af8":{"av":[],"x":[]},"bjO":{"av":[],"x":[]},"bjT":{"av":[],"x":[]},"aHn":{"ai":["a1Q"]},"bpc":{"ai":["a1R"]},"b2v":{"av":[],"x":[]},"a8R":{"af":[],"x":[]},"boQ":{"ai":["a8R"]},"boP":{"aC":[]},"awa":{"av":[],"x":[]},"a0q":{"af":[],"x":[]},"a0p":{"af":[],"x":[]},"a_Q":{"af":[],"x":[]},"a3H":{"af":[],"x":[]},"aCt":{"ai":["a0q"]},"aCs":{"ai":["a0p"]},"aB4":{"ai":["a_Q"]},"bBN":{"ai":["a3H"]},"GT":{"af":[],"x":[]},"aAY":{"af":[],"x":[]},"bBL":{"ai":["GT"]},"bBM":{"ai":["aAY"]},"bBK":{"aC":[]},"aw9":{"af":[],"x":[]},"aIY":{"ai":["aw9"]},"agf":{"av":[],"x":[]},"aw3":{"af":[],"x":[]},"aw8":{"af":[],"x":[]},"bqB":{"ai":["aw3"]},"aIX":{"ai":["aw8"]},"PU":{"af":[],"x":[]},"aIZ":{"ai":["PU"],"eI":[]},"bdM":{"jA":[],"fs":[]}}'))
A.Sc(b.typeUniverse,JSON.parse('{"ahp":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aVZ"),cq:w("mK"),Q:w("rR"),r:w("bl<o,o>"),c5:w("aXV"),dY:w("aXW"),fH:w("Nu"),de:w("amG"),dN:w("ND<F>"),gc:w("EX<F>"),A:w("eS<o?>"),e:w("IY"),B:w("nR"),P:w("ie"),df:w("lT"),k:w("lj"),x:w("az<~>"),U:w("N<a5R>"),V:w("N<ac>"),C:w("N<rR>"),O:w("N<u>"),c:w("N<Nu>"),b:w("N<amG>"),ac:w("N<eS<o?>>"),I:w("N<nR>"),u:w("N<ie>"),J:w("N<lT>"),_:w("N<lj>"),cl:w("N<az<ah<a9<o,@>>>>"),R:w("N<mO>"),eU:w("N<ah<+(H,H)>>"),ez:w("N<a9<o,aG>>"),gE:w("N<a9<o,o>>"),Y:w("N<a9<o,@>>"),fD:w("N<ne>"),bp:w("N<pc>"),g:w("N<m>"),ar:w("N<awl>"),v:w("N<h6>"),gy:w("N<abB>"),L:w("N<+(o,o)>"),G:w("N<+(H,H)>"),E:w("N<+(H,~())>"),bd:w("N<+(o,F,P)>"),bF:w("N<+count,id,name(F,o,o)>"),F:w("N<d4>"),s:w("N<o>"),cF:w("N<au>"),aS:w("N<jr>"),dT:w("N<bdz>"),p:w("N<x>"),Z:w("N<fs>"),D:w("N<m6>"),h:w("N<aC6>"),cC:w("N<bkZ>"),fp:w("N<Lo>"),M:w("N<Lw>"),gZ:w("N<aL8>"),gA:w("N<ahu>"),e4:w("N<ahB>"),dE:w("N<aNb>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<F>"),dS:w("N<aC?>"),d4:w("N<o?>"),eF:w("cB<ai<af>>"),d:w("ah<nR>"),do:w("ah<ie>"),cg:w("ah<lT>"),ax:w("ah<lj>"),fO:w("ah<a9<o,@>>"),cz:w("ah<+(o,o)>"),bC:w("ah<+count,id,name(F,o,o)>"),dy:w("ah<o>"),er:w("ah<au>"),gk:w("ah<m6>"),j:w("ah<@>"),fK:w("bw<o,o>"),d2:w("bw<o,ah<a9<o,@>>>"),a:w("a9<o,@>"),f:w("a9<@,@>"),gv:w("O<o,J0>"),cM:w("O<F,o>"),w:w("it"),g2:w("tc"),bV:w("arC"),fL:w("cr"),K:w("aG"),dc:w("h6"),fo:w("Qf<F>"),fz:w("+(o,o)"),ei:w("+scope,text(o,o)"),bn:w("+games,limit(P,F)"),d9:w("+dx,hidden(H,ah<ie>)"),cs:w("+count,id,name(F,o,o)"),N:w("o"),fT:w("ib<ie>"),ec:w("ib<o>"),gW:w("rz<H>"),X:w("bq<H>"),bW:w("dG"),W:w("b9<o>"),b4:w("b9<F>"),cI:w("km<o>"),av:w("X<A2>"),cc:w("X<o>"),l:w("x"),gF:w("fs"),fA:w("m6"),dO:w("H7"),bw:w("afT<o?>"),cy:w("Ly"),q:w("l7"),y:w("P"),i:w("H"),z:w("@"),S:w("F"),eK:w("ah<lj>?"),m:w("at2?"),cT:w("m?"),h5:w("+(o,o)?"),eo:w("+code,qrPayload,usesRemaining(o,o,F)?"),he:w("+qrPayload,token,usesRemaining(o,o,F)?"),gG:w("+members,trees,viewOnly(F,F,P)?"),az:w("oF?"),T:w("o?"),aD:w("dG?"),o:w("m6?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b9b=new A.bc(B.h6,B.bJ,B.h6,B.bJ)
D.agz=new A.bc(B.h6,B.ib,B.h6,B.ib)
D.b9q=new A.bc(B.jM,B.bJ,B.bJ,B.bJ)
D.b9u=new A.ax(B.cZ,1.4,B.r,-1)
D.b9F=new A.ax(B.ab,1,B.r,-1)
D.ah7=new A.aY(140,1/0,0,1/0)
D.baZ=new A.aY(0,1/0,64,1/0)
D.bb2=new A.aY(0,84,0,1/0)
D.ahf=new A.aY(130,1/0,0,1/0)
D.aGb=w([B.mt,B.tA,B.c],x.O)
D.cej=new A.a7(B.ax,B.aC,B.w,D.aGb,null,null)
D.bbO=new A.p(null,null,null,null,null,D.cej,B.m)
D.dpa=w([B.aZ,B.bW],x.O)
D.cgv=new A.a7(B.aY,B.b2,B.w,D.dpa,null,null)
D.bc8=new A.p(null,null,null,null,null,D.cgv,B.m)
D.a_h=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fO=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dtA=w([B.dD,D.a_h,D.fO],x.O)
D.cdv=new A.a7(B.aY,B.b2,B.w,D.dtA,null,null)
D.bcT=new A.p(null,null,null,null,null,D.cdv,B.m)
D.fPQ=new A.G(!0,B.bX,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hrb=new A.D("?",null,D.fPQ,null,null,null,null,null,null,null,null,null)
D.bgK=new A.cq(B.z,null,null,D.hrb,null)
D.XI=new A.G(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8Q=new A.D("\ud83c\udf33",null,D.XI,null,null,null,null,null,null,null,null,null)
D.ai0=new A.cq(B.z,null,null,D.h8Q,null)
D.hbx=new A.D("\ud83c\udfc6",null,B.M1,null,null,null,null,null,null,null,null,null)
D.bgV=new A.cq(B.z,null,null,D.hbx,null)
D.biL=new A.fp(null,null,null,null,null,E.kI,null,null,null,null)
D.ai1=new A.cq(B.z,null,null,D.biL,null)
D.l8=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fQp=new A.G(!0,D.l8,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.haw=new A.D("No books on the shelf yet.",null,D.fQp,null,null,null,null,null,null,null,null,null)
D.eLy=new A.C(B.oc,D.haw,null)
D.bhb=new A.cq(B.z,null,null,D.eLy,null)
D.fXG=new A.G(!0,D.fO,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hs9=new A.D("\ud83d\ude8c  On the road\u2026",null,D.fXG,null,null,null,null,null,null,null,null,null)
D.eM8=new A.C(B.ct,D.hs9,null)
D.bhE=new A.cq(B.z,null,null,D.eM8,null)
D.b_N=new A.D("\ud83e\uddfa",null,D.XI,null,null,null,null,null,null,null,null,null)
D.bhU=new A.cq(B.z,null,null,D.b_N,null)
D.he0=new A.D("\ud83c\udfad",null,D.XI,null,null,null,null,null,null,null,null,null)
D.bi6=new A.cq(B.z,null,null,D.he0,null)
D.bi7=new A.cq(B.z,null,null,A7.a_2,null)
D.ail=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.ais=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bko=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bkt=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bkF=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bkH=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bkJ=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bkR=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lY=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bkV=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bl_=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bl1=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bl2=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lZ=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.blF=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Cx=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.blO=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bm7=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bma=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bmg=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bmo=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aj7=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bmv=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.a_v=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aja=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bmG=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.a_x=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bn0=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ajm=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bnp=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bnG=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bo6=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.boh=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.H0=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.boG=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.boJ=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.boN=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.ajQ=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bp4=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bpa=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bph=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ajU=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bpq=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bpU=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bq2=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bq5=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bqb=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.aka=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bqR=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aky=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.brR=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.akL=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bsd=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.He=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bsj=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bss=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bsu=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.akP=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bsM=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bsO=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bsR=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.akX=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a0g=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.btf=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.btC=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.btH=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.al8=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.btO=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a0l=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bua=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bub=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Hn=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.buZ=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bvz=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bvF=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bvJ=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.r5=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bvV=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bvZ=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bw4=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bw6=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.alV=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.alZ=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Ht=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a0H=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.am7=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bxl=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bxC=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.by4=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.byd=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.amy=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a0T=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.byp=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.byF=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a0Z=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.byX=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bzd=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a12=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bzi=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.amS=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.amU=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bzB=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.an0=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bA2=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bA6=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bAd=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bAm=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bAv=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bB7=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bBD=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.h4w=new A.D("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bF8=new A.eS(null,D.h4w,B.fm,null,x.A)
D.hdS=new A.D("None",null,null,null,null,null,null,null,null,null,null,null)
D.bFa=new A.eS(null,D.hdS,B.fm,null,x.A)
D.bFI=new A.bh(38e5)
D.bGq=new A.iP(0,10,0,10)
D.bGL=new A.iP(0,4,0,4)
D.bGO=new A.Q(0,4,5,0)
D.bH3=new A.Q(10,10,14,10)
D.bHe=new A.iP(10,4,10,4)
D.bHn=new A.iP(10,8,10,8)
D.bHo=new A.Q(10,8,8,8)
D.bHT=new A.Q(12,6,12,2)
D.bIb=new A.Q(14,0,14,6)
D.bIf=new A.Q(14,10,6,6)
D.bIg=new A.Q(14,12,14,0)
D.bIk=new A.Q(14,12,14,8)
D.bIn=new A.Q(14,12,8,14)
D.bIr=new A.iP(14,14,14,14)
D.bIL=new A.Q(14,6,14,40)
D.bIO=new A.Q(14,8,14,30)
D.bJb=new A.Q(16,2,16,10)
D.bJm=new A.Q(16,6,16,30)
D.bJo=new A.Q(16,6,16,8)
D.bJE=new A.Q(18,10,18,4)
D.bJG=new A.Q(18,12,18,0)
D.bJN=new A.Q(18,14,12,4)
D.apv=new A.Q(18,16,18,8)
D.bK4=new A.Q(18,20,18,22)
D.bK9=new A.Q(18,30,18,30)
D.bKr=new A.Q(20,10,12,20)
D.bKu=new A.Q(20,11,20,11)
D.bKG=new A.Q(20,18,16,18)
D.bKI=new A.Q(20,18,20,6)
D.bLw=new A.Q(24,32,24,28)
D.bLx=new A.Q(24,36,24,32)
D.bLA=new A.Q(26,26,24,14)
D.bLO=new A.Q(2,4,2,8)
D.bLS=new A.Q(30,0,30,0)
D.bM2=new A.Q(38,22,22,22)
D.apW=new A.Q(40,24,24,24)
D.bM4=new A.iP(40,40,40,40)
D.bM6=new A.Q(46,30,30,30)
D.bMz=new A.Q(56,40,40,40)
D.bMC=new A.Q(1.25,1.25,1.25,1.25)
D.bMD=new A.Q(60,0,60,0)
D.bMH=new A.Q(6,14,6,16)
D.bML=new A.Q(6,4,12,0)
D.bMP=new A.Q(6,6,10,2)
D.bMX=new A.iP(7,3,7,3)
D.bNt=new A.Q(5,1.5,5,1.5)
D.bNE=new A.Q(6,2.5,6,2.5)
D.hme=new A.D("Family Games",null,B.js,null,null,null,null,null,null,null,null,null)
D.h35=new A.D("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.XB,null,null,null,null,null,null,null,null,null)
D.cQ7=w([D.hme,D.h35],x.p)
D.bCC=new A.fv(B.ah,B.e,B.i,B.B,null,B.p,null,0,D.cQ7,null)
D.bO4=new A.bu(1,B.b9,D.bCC,null)
D.hqJ=new A.D("Signature",null,B.nH,null,null,null,null,null,null,null,null,null)
D.bO7=new A.bu(1,B.b9,D.hqJ,null)
D.hiE=new A.D("MADE BY THE ONE WHO PLANTED THE TREE",null,U.uE,null,null,null,null,null,null,null,null,null)
D.bOF=new A.bu(1,B.b9,D.hiE,null)
D.hnK=new A.D("Tell the AI what to fix",null,B.dw,null,null,null,null,null,null,null,null,null)
D.bOX=new A.bu(1,B.b9,D.hnK,null)
D.hpN=new A.D("Worksheets",null,B.b_i,null,null,null,null,null,null,null,null,null)
D.fYD=new A.G(!0,E.aiR,null,null,null,null,13,B.cD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hoB=new A.D("Track your project spending",null,D.fYD,null,null,null,null,null,null,null,null,null)
D.dfk=w([D.hpN,B.at,D.hoB],x.p)
D.bCf=new A.fv(B.ah,B.e,B.i,B.B,null,B.p,null,0,D.dfk,null)
D.bP2=new A.bu(1,B.b9,D.bCf,null)
D.fTj=new A.G(!0,E.kI,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3F=new A.D("FAMILY LIBRARY",null,D.fTj,null,null,null,null,null,null,null,null,null)
D.bPk=new A.bu(1,B.b9,D.h3F,null)
D.Qc=new C.IY("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.xn=new C.IZ(0,"male")
D.p4=new C.IZ(1,"female")
D.zU=new C.IZ(2,"unknown")
D.vt=new C.ao0(0,"owner")
D.Qd=new C.ao0(1,"editor")
D.lf=new C.ao0(2,"viewer")
D.arW=new A.a_(61199,"MaterialIcons",!1)
D.bUK=new A.a_(61504,"MaterialIcons",!1)
D.bUL=new A.a_(61505,"MaterialIcons",!1)
D.bUO=new A.a_(61587,"MaterialIcons",!1)
D.bVT=new A.a_(63034,"MaterialIcons",!0)
D.bWb=new A.a_(63153,"MaterialIcons",!1)
D.bWH=new A.a_(63429,"MaterialIcons",!1)
D.au6=new A.a_(984520,"MaterialIcons",!1)
D.bVp=new A.a_(62776,"MaterialIcons",!1)
D.bZc=new A.ae(D.bVp,26,B.b8,null,null,null)
D.bTD=new A.a_(57648,"MaterialIcons",!1)
D.bZy=new A.ae(D.bTD,14,B.c,null,null,null)
D.bZQ=new A.ae(B.Is,17,null,null,null,null)
D.bZX=new A.ae(B.QK,null,B.bW,null,null,null)
D.c_n=new A.ae(E.a4K,null,null,null,null,null)
D.c_q=new A.ae(B.jn,18,E.kI,null,null,null)
D.a4u=new A.a_(62044,"MaterialIcons",!1)
D.c_w=new A.ae(D.a4u,null,B.aZ,null,null,null)
D.c_D=new A.ae(B.A6,18,B.c,null,null,null)
D.c0k=new A.ae(B.eb,16,null,null,null,null)
D.c0s=new A.ae(D.a4u,32,B.aZ,null,null,null)
D.c0M=new A.ae(E.arX,18,B.cZ,null,null,null)
D.c1U=new A.ae(B.ID,22,B.aD,null,null,null)
D.c28=new A.ae(B.eb,22,B.b8,null,null,null)
D.c2l=new A.ae(Y.a4z,22,B.c,null,null,null)
D.c2s=new A.ae(B.vC,52,B.c,null,null,null)
D.c2C=new A.ae(B.ID,30,B.aD,null,null,null)
D.c2Y=new A.ae(B.IA,null,B.c,null,null,null)
D.auR=new A.ae(B.vN,22,B.c,null,null,null)
D.c36=new A.ae(B.eb,17,null,null,null,null)
D.c3v=new A.ae(B.xz,26,B.cZ,null,null,null)
D.c4h=new A.ae(B.a4X,16,null,null,null,null)
D.c53=new A.ae(B.vC,24,B.c,null,null,null)
D.c59=new A.ae(B.QI,20,B.ud,null,null,null)
D.c5f=new A.ae(B.Ir,null,B.bW,null,null,null)
D.c5o=new A.ae(B.jn,18,B.c,null,null,null)
D.c6Z=new A.ae(B.es,16,B.ab,null,null,null)
D.c7a=new A.ae(D.a4u,20,B.aZ,null,null,null)
D.avi=new A.ae(B.h3,20,null,null,null,null)
D.c7K=new A.ae(B.cE,18,D.l8,null,null,null)
D.c80=new A.ae(B.Aj,28,B.c,null,null,null)
D.c8c=new A.ae(B.Qw,null,B.fs,null,null,null)
D.c8w=new A.ae(B.Aj,24,B.c,null,null,null)
D.c8Z=new A.ae(B.vC,null,B.aZ,null,null,null)
D.c9_=new A.ae(B.jH,20,B.cZ,null,null,null)
D.c9l=new A.ae(B.Is,16,null,null,null,null)
D.caU=new A.ee(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.f_,!0,null,null,null,null)
D.aw3=new C.a84(10,null)
D.cbq=new C.a84(12,null)
D.cbr=new C.a84(14,null)
D.dy8=w([B.bv,B.aZ,B.fC,B.b8],x.O)
D.ccB=new A.a7(B.ax,B.aC,B.w,D.dy8,null,null)
D.buL=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bBe=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.dbj=w([D.buL,D.bBe],x.O)
D.ccO=new A.a7(B.aY,B.b2,B.w,D.dbj,null,null)
D.drk=w([B.fo,B.hb,B.fC],x.O)
D.ccU=new A.a7(B.ax,B.aC,B.w,D.drk,null,null)
D.alK=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bl3=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.ddN=w([D.alK,D.bl3],x.O)
D.cdw=new A.a7(B.aY,B.b2,B.w,D.ddN,null,null)
D.boW=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aFr=w([D.boW,D.alK],x.O)
D.cdP=new A.a7(B.ax,B.aC,B.w,D.aFr,null,null)
D.akq=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.brI=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dqm=w([D.akq,D.brI],x.O)
D.ceu=new A.a7(B.a5,B.a9,B.w,D.dqm,null,null)
D.dG4=w([B.bD,B.nY],x.O)
D.cew=new A.a7(B.aY,B.b2,B.w,D.dG4,null,null)
D.buG=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dH5=w([D.buG,D.l8,D.l8,I.OG],x.O)
D.dJY=w([0,0.07,0.9,1],x.n)
D.cf0=new A.a7(B.a5,B.a9,B.w,D.dH5,D.dJY,null)
D.cf9=new A.a7(B.ax,B.aC,B.w,B.UG,null,null)
D.d8G=w([B.aB,D.lY],x.O)
D.cfc=new A.a7(B.a5,B.a9,B.w,D.d8G,null,null)
D.dFB=w([B.b8,B.aZ,B.bW],x.O)
D.cgh=new A.a7(B.ax,B.aC,B.w,D.dFB,null,null)
D.ckH=w([10,20,30],x.t)
D.cuK=w([-1,-0.4,0.3,1],x.n)
D.cCj=w([B.bv,B.b8,B.fo],x.O)
D.cCr=w([B.bj,B.aB,B.kH],x.O)
D.cCu=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cDd=w([30,140,262,360],x.n)
D.bsX=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cIQ=w([D.bsX,E.ali],x.O)
D.eG5=new A.m(1,2)
D.fB4=new A.d4(B.bc,D.eG5,3)
D.aCg=w([D.fB4],x.F)
D.cQp=w([B.ho,B.ci,B.fB],x.O)
D.cTg=w([B.bQ,B.bx,B.bt],x.O)
D.bQa=new C.vg("classic","Classic leather","Gold-edged brown leather",D.aFr,E.kI,E.kI,"\u2766",B.K,!0,!1,!1,!1)
D.bk8=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bzU=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dhg=w([D.bk8,D.bzU],x.O)
D.all=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bQ5=new C.vg("ornate","Ornate gold","Double gold border and flourishes",D.dhg,D.all,D.all,"\u2726",B.K,!0,!0,!0,!1)
D.bos=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bvt=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d7m=w([D.bos,D.bvt],x.O)
D.bQ4=new C.vg("parchment","Parchment","Old paper with dark ink",D.d7m,D.Hn,L.jj,"\u2767",B.K,!0,!1,!1,!0)
D.aiu=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.by1=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dDs=w([D.aiu,D.by1],x.O)
D.bsp=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bxf=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bQ7=new C.vg("minimal","Clean paper","Plain and elegant, like a printed book",D.dDs,D.bsp,D.bxf,"",B.K,!0,!0,!1,!0)
D.bQ9=new C.vg("midnight","Midnight","Deep blue with silver stars",K.aFL,B.cG,B.cm,"\u2727",B.K,!0,!0,!1,!1)
D.bQ3=new C.vg("emerald","Emerald library","Green cloth, title on the left",W.aCH,E.kI,B.hd,"\u25c6",B.aU,!0,!1,!1,!1)
D.byy=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dBk=w([B.eF,D.byy],x.O)
D.btN=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bv3=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bQ8=new C.vg("rose","Rose vintage","Burgundy with rose-gold lettering",D.dBk,D.btN,D.bv3,"\u2740",B.K,!0,!1,!0,!1)
D.dGH=w([B.cx,F.nk],x.O)
D.bQ6=new C.vg("modern","Modern","Dark, bold, left-aligned",D.dGH,B.aH,B.c,"",B.aU,!1,!0,!1,!1)
D.a6X=w([D.bQa,D.bQ5,D.bQ4,D.bQ7,D.bQ9,D.bQ3,D.bQ8,D.bQ6],A.as("N<vg>"))
D.cWk=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dGt=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bQl=new C.lT('What does "Ubuntu" mean?',D.dGt,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d9t=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bQo=new C.lT("In Swahili, what do we call a grandmother?",D.d9t,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d9j=w(["Babu","Mama","Baba","Dada"],x.s)
D.bQj=new C.lT("In Swahili, what do we call a grandfather?",D.d9j,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.daP=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bQn=new C.lT("What is a sister called in Swahili?",D.daP,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.dgD=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bQk=new C.lT("What is a brother called in Swahili?",D.dgD,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d9i=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bQv=new C.lT("Which word means father in Swahili?",D.d9i,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dHK=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bQu=new C.lT('"Umoja ni nguvu" means...',D.dHK,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dEf=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bQw=new C.lT('"Haba na haba hujaza kibaba" teaches us...',D.dEf,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.ddX=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bQt=new C.lT('The African saying "It takes a village to raise a child" means...',D.ddX,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dI2=w(["The elders","The market","The river","The drum"],x.s)
D.bQp=new C.lT("Who is the traditional keeper of the family stories?",D.dI2,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.d_F=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bQm=new C.lT("Why do families sit round the fire at night?",D.d_F,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dGJ=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bQr=new C.lT('What does "Harambee" mean?',D.dGJ,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dk_=w(["An elder","A baby","A market","A cow"],x.s)
D.bQq=new C.lT('"Mzee" is a respectful word for...',D.dk_,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dB9=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bQs=new C.lT('What does "Shikamoo" show?',D.dB9,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aCC=w([D.bQl,D.bQo,D.bQj,D.bQn,D.bQk,D.bQv,D.bQu,D.bQw,D.bQt,D.bQp,D.bQm,D.bQr,D.bQq,D.bQs],x.J)
D.d49=w([90,360],x.n)
D.d6S=w([B.bW,B.bq],x.O)
D.but=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d7C=w([D.aiu,D.but],x.O)
D.d8o=w([-1,-0.3,0.4,1],x.n)
D.d9p=w([0,0.45,0.72,0.92,1],x.n)
D.boo=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d9M=w([D.boo,B.bA],x.O)
D.bm2=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.ana=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.das=w([B.dD,D.bm2,D.ana],x.O)
D.dbD=w([B.be,B.fA,B.pO],x.O)
D.boY=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bx7=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.blJ=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.dbJ=w([D.boY,D.bx7,D.blJ],x.O)
D.dc6=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.dcg=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hW4=new C.afx(78,424,48,44,56)
D.hW2=new C.afx(214,396,34,34,42)
D.hW3=new C.afx(442,452,56,50,64)
D.aDA=w([D.hW4,D.hW2,D.hW3],A.as("N<afx>"))
D.dcR=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bkX=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bqQ=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dJU=w([D.akq,D.bkX,D.bqQ],x.O)
D.bQb=new C.vh("leather","Leather",D.dJU,"vintage")
D.dl5=w([B.dl,B.Hc,Ad.a_M],x.O)
D.bQi=new C.vh("midnight","Midnight",D.dl5,"starry")
D.dbE=w([B.eu,B.el,B.lB],x.O)
D.bQh=new C.vh("forest","Forest",D.dbE,"story")
D.dMd=w([B.ev,B.eF,B.kK],x.O)
D.bQe=new C.vh("burgundy","Burgundy",D.dMd,"royal")
D.cSM=w([B.aB,B.nd,B.nO],x.O)
D.bQf=new C.vh("royal","Royal",D.cSM,"royal")
D.dew=w([B.bx,B.cx,F.nk],x.O)
D.bQc=new C.vh("charcoal","Charcoal",D.dew,"geo")
D.dK2=w([B.cj,B.e1,B.wZ],x.O)
D.bQg=new C.vh("sunset","Sunset",D.dK2,"sunset")
D.dKQ=w([B.fA,B.zc,B.a_Q],x.O)
D.bQd=new C.vh("ocean","Ocean",D.dKQ,"band")
D.AN=w([D.bQb,D.bQi,D.bQh,D.bQe,D.bQf,D.bQc,D.bQg,D.bQd],A.as("N<vh>"))
D.df5=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.dfQ=w([B.ao,B.aM,B.a_],x.O)
D.dhn=w([B.eF,B.el,B.dl,B.j3,B.ze,B.cZ,B.ki,B.cU,B.de],x.O)
D.dho=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fB5=new A.d4(B.dJ,B.dQ,8)
D.dhA=w([D.fB5],x.F)
D.diU=w([B.c8,B.e1,B.ke],x.O)
D.bmU=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.br8=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bvo=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.djb=w([D.bmU,G.alS,D.br8,D.bvo,D.ana],x.O)
D.djv=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.djM=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bkk=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bqs=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dkj=w([D.bkk,D.ajU,D.bqs],x.O)
D.dl0=w([B.c8,B.hM],x.O)
D.dl6=w([G.nR,B.iv,G.aiG,B.d0],x.O)
D.dmP=w([B.d0,G.nR,B.iv,D.lZ,B.d0],x.O)
D.dny=w([B.aQ,B.CP,B.z2],x.O)
D.f30=new A.y(-0.65,0.6)
D.fgy=new A.y(-0.2,0.95)
D.fhR=new A.y(0.25,0.95)
D.f6B=new A.y(0.7,0.6)
D.fis=new A.y(1,0.1)
D.doq=w([An.Wt,D.f30,D.fgy,D.fhR,D.f6B,D.fis],x.G)
D.btg=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bzM=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bnW=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dox=w([D.btg,D.bzM,D.bnW],x.O)
D.doD=w([B.bO,B.c3,B.dH,B.aQ],x.O)
D.dpb=w([B.i0,B.cj,B.v3],x.O)
D.dpB=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dpO=w([B.fo,B.cZ],x.O)
D.buP=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dqh=w([D.buP,D.ais],x.O)
D.dqt=w([B.cY,B.fP,B.h_],x.O)
D.dqG=w([B.aH,B.bq,B.dl],x.O)
D.drh=w([B.ek,B.dq,B.el],x.O)
D.drG=w([B.dV,B.dl,B.Hc],x.O)
D.drK=w([B.bw,B.na,B.de],x.O)
D.ds1=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bu1=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bs9=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dso=w([D.bu1,D.ajQ,D.bs9],x.O)
D.dti=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dus=w([1,0,7,6,3,2],x.t)
D.a7Z=w(["leather","linen","plain","stars","rays"],x.s)
D.duE=w([0.5,2,3.6],x.n)
D.dvf=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bYq=new A.a_(983781,"MaterialIcons",!1)
D.aF5=w([B.QK,B.hS,B.kS,B.ij,F.aue,B.IP,B.rt,D.bYq,K.atS,B.E7,B.ry,B.m8],A.as("N<a_>"))
D.a82=w(["double","single","corners","none"],x.s)
D.bQ0=new C.A2("Little Seed","\ud83c\udf31",0)
D.bQ2=new C.A2("Young Listener","\ud83d\udc42",40)
D.bQ1=new C.A2("Storyteller","\ud83e\ude98",120)
D.bQ_=new C.A2("Village Pride","\ud83c\udfe1",300)
D.bPY=new C.A2("Keeper of Roots","\ud83c\udf33",700)
D.bPZ=new C.A2("Elder of the Fire","\ud83d\udd25",1500)
D.aF7=w([D.bQ0,D.bQ2,D.bQ1,D.bQ_,D.bPY,D.bPZ],A.as("N<A2>"))
D.dwz=w([B.d1,B.bl,B.cU],x.O)
D.dwR=w([],x.C)
D.EI=w([],x.u)
D.aPs=new A.m(225,528)
D.f4I=new A.y(D.aPs,1)
D.eGR=new A.m(350,548)
D.fbo=new A.y(D.eGR,0.95)
D.aPm=new A.m(158,656)
D.fbh=new A.y(D.aPm,1.12)
D.eHE=new A.m(92,544)
D.f06=new A.y(D.eHE,0.93)
D.eGU=new A.m(398,614)
D.f6Z=new A.y(D.eGU,1.04)
D.eGI=new A.m(318,662)
D.eWg=new A.y(D.eGI,1.1)
D.a8a=w([D.f4I,D.fbo,D.fbh,D.f06,D.f6Z,D.eWg],A.as("N<+(m,H)>"))
D.dz4=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dzF=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dAO=w([B.d0,G.nR,B.iv,D.lZ,B.d0,B.iv],x.O)
D.dCi=w([B.as,B.fP,B.j3],x.O)
D.dD0=w([-70,58],x.n)
D.dD2=w([-70,-30,20],x.n)
D.dEc=w([B.bw,B.na,B.a0U],x.O)
D.dEv=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.e0q=new C.mq("construction","Construction","Jobsite & builds",B.rx)
D.e0x=new C.mq("house","Home Build","Houses & rooms",B.vE)
D.e0n=new C.mq("grocery","Grocery","Store & pantry",B.a5r)
D.e0m=new C.mq("calculator","Calculations","Math & estimates",B.QR)
D.e0v=new C.mq("lumber","Materials","Lumber & supplies",B.IM)
D.e0j=new C.mq("kitchen","Kitchen","Remodel & meals",A3.Rd)
D.bYn=new A.a_(983756,"MaterialIcons",!1)
D.e0o=new C.mq("landscape","Landscaping","Yard & garden",D.bYn)
D.e0i=new C.mq("plumbing","Plumbing","Pipes & water",B.qh)
D.e0y=new C.mq("electrical","Electrical","Wiring & power",B.fS)
D.e0g=new C.mq("store","Retail Shop","Daily business",B.kq)
D.e0h=new C.mq("paint_remodel","Paint & Remodel","Colors & walls",A3.R8)
D.bXI=new A.a_(983311,"MaterialIcons",!1)
D.e0u=new C.mq("roofing","Roofing","Roofs & exteriors",D.bXI)
D.bYA=new A.a_(983986,"MaterialIcons",!1)
D.e0f=new C.mq("warehouse","Warehouse","Storage & stock",D.bYA)
D.e0s=new C.mq("vehicles","Vehicles","Fleet & transport",B.E3)
D.bVr=new A.a_(62785,"MaterialIcons",!1)
D.e0l=new C.mq("farm","Farm","Crops & livestock",D.bVr)
D.e0k=new C.mq("restaurant","Restaurant","Food & catering",B.vL)
D.e0r=new C.mq("tools","Tools","Workshop gear",B.E_)
D.e0w=new C.mq("wallet","Cash & Wallet","Quick spending",B.jH)
D.e0t=new C.mq("concrete","Concrete","Foundation work",F.asW)
D.e0p=new C.mq("blueprint","Blueprint","Plans & design",As.ast)
D.a8z=w([D.e0q,D.e0x,D.e0n,D.e0m,D.e0v,D.e0j,D.e0o,D.e0i,D.e0y,D.e0g,D.e0h,D.e0u,D.e0f,D.e0s,D.e0l,D.e0k,D.e0r,D.e0w,D.e0t,D.e0p],A.as("N<mq>"))
D.dFc=w([B.bu,B.bl],x.O)
D.dG5=w([B.iK,B.oN,B.e7],x.O)
D.akE=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.alE=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bst=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bjP=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aGj=w([D.akE,D.alE,D.bst,D.bjP],x.O)
D.dHn=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a8J=w(["top","middle","bottom"],x.s)
D.dJ_=w([B.cw,B.bq,B.dl],x.O)
D.aGD=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bdm=new A.ac(0,B.G,B.bc,B.J,14)
D.aGH=w([D.bdm],x.V)
D.brn=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dJM=w([D.aj7,D.a0T,D.brn],x.O)
D.dJN=w([B.bf,B.dq,B.el],x.O)
D.eGr=new A.m(24,-8)
D.eH9=new A.m(48,0)
D.eGn=new A.m(24,6)
D.dLF=w([B.J,D.eGr,D.eH9,D.eGn],x.g)
D.dM6=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eCP={top:0,middle:1,bottom:2}
D.dPw=new A.bl(D.eCP,["Top","Middle","Bottom"],x.r)
D.eCk={double:0,single:1,corners:2,none:3}
D.dPC=new A.bl(D.eCk,["Double line","One line","Corners","None"],x.r)
D.eDD={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dRi=new A.bl(D.eDD,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dRu=new A.bl(B.il,[],A.as("bl<F,+(o,o)>"))
D.eCF={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.EX=new A.bl(D.eCF,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bl<o,F>"))
D.dVP=new H.OC(32,null)
D.dVQ=new H.OC(40,null)
D.dVR=new H.OC(46,null)
D.aOW=new C.aw8(null)
D.eFi=new A.m(0,40)
D.eFj=new A.m(0,412)
D.eFm=new A.m(0,900)
D.eFv=new A.m(0,-34)
D.eFw=new A.m(0,-46)
D.eFy=new A.m(0,-74)
D.eFB=new A.m(100,300)
D.eFC=new A.m(10,14)
D.eFF=new A.m(10,-10)
D.eFK=new A.m(10,-46)
D.eFL=new A.m(10,-58)
D.eFM=new A.m(116,442)
D.eFO=new A.m(11,-1)
D.eFP=new A.m(11,-10)
D.eFQ=new A.m(11,-21)
D.aPh=new A.m(11,-60)
D.eFX=new A.m(14,-2)
D.eFY=new A.m(150,520)
D.ab1=new A.m(150,592)
D.eG0=new A.m(15,-15)
D.eG1=new A.m(16,-1)
D.eG4=new A.m(190,444)
D.eG7=new A.m(1,5)
D.eGf=new A.m(21,-78)
D.eGg=new A.m(222,615)
D.KQ=new A.m(225,300)
D.ab3=new A.m(225,574)
D.eGq=new A.m(24,-52)
D.eGs=new A.m(250,210)
D.eGD=new A.m(2,-56)
D.aPw=new A.m(300,0)
D.eGE=new A.m(300,440)
D.eGH=new A.m(318,476)
D.eGK=new A.m(324,144)
D.ab6=new A.m(332,150)
D.eGM=new A.m(335,585)
D.eGN=new A.m(338,140)
D.eGO=new A.m(340,158)
D.eGQ=new A.m(34,-60)
D.Fp=new A.m(36,-24)
D.eGS=new A.m(372,470)
D.eGT=new A.m(390,455)
D.eH1=new A.m(42,468)
D.eH2=new A.m(431,510)
D.eH3=new A.m(431,520)
D.eH4=new A.m(45,-92)
D.eH5=new A.m(46,20)
D.eH6=new A.m(46,-92)
D.eH7=new A.m(46,-94)
D.eH8=new A.m(47,-4)
D.eHa=new A.m(48,-4)
D.eHi=new A.m(4,-26)
D.eHq=new A.m(60,455)
D.eHz=new A.m(8,14)
D.eHD=new A.m(8,-76)
D.eHF=new A.m(95,575)
D.eHG=new A.m(98,-24)
D.eHI=new A.m(9,-2)
D.eHJ=new A.m(9,-58)
D.aPF=new A.m(9,-79)
D.eHK=new A.m(9,-9)
D.eIp=new A.m(16.5,8)
D.eIr=new A.m(3.2,0)
D.eIs=new A.m(-16.5,8)
D.eIz=new A.m(16.5,2)
D.eIC=new A.m(-3.2,0)
D.eIK=new A.m(9.5,6)
D.eIN=new A.m(-10,14)
D.eIO=new A.m(-10,-12)
D.eIP=new A.m(-10,-58)
D.eIR=new A.m(-11,-10)
D.eIT=new A.m(-11,-60)
D.eIU=new A.m(-12,-14)
D.eIV=new A.m(-12,-16)
D.eJ_=new A.m(-14,-2)
D.eJ2=new A.m(-15,-15)
D.eJ3=new A.m(-15,-3)
D.eJ5=new A.m(-16,-1)
D.eJl=new A.m(-24,-52)
D.eJu=new A.m(-2,-34)
D.eJv=new A.m(-2,-38)
D.eJx=new A.m(-30,-100)
D.ab9=new A.m(-36,-24)
D.eJI=new A.m(-4,-26)
D.eJK=new A.m(-4,-6)
D.eJT=new A.m(-8,-3)
D.eJU=new A.m(-8,-48)
D.eJX=new A.m(-9,-2)
D.eJZ=new A.m(-9,-58)
D.eK_=new A.m(-9,-79)
D.eK0=new A.m(-9,-9)
D.eK3=new A.m(-9.5,6)
D.eKh=new A.m(-16.5,2)
D.hbd=new A.D("Write a new book",null,B.hm,null,B.K,null,null,null,null,null,null,null)
D.eKR=new A.C(B.ld,D.hbd,null)
D.hqh=new A.D("Tap to go on",null,B.wp,null,null,null,null,null,null,null,null,null)
D.eLd=new A.C(B.kQ,D.hqh,null)
D.auo=new A.ae(B.ii,18,B.c,null,null,null)
D.h42=new A.D("Add",null,B.l_,null,null,null,null,null,null,null,null,null)
D.doS=w([D.auo,B.pw,D.h42],x.p)
D.fy8=new A.bZ(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.doS,null)
D.eLg=new A.C(B.oa,D.fy8,null)
D.eLi=new A.C(E.aoh,A7.a_2,null)
D.fYn=new A.G(!0,B.c,null,null,null,null,13.5,B.C,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7n=new A.D("New Project",null,D.fYn,null,null,null,null,null,null,null,null,null)
D.dtK=w([D.auo,B.aa,D.h7n],x.p)
D.fyb=new A.bZ(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.dtK,null)
D.eLx=new A.C(B.hs,D.fyb,null)
D.h9W=new A.D("Choose your header",null,B.uB,null,null,null,null,null,null,null,null,null)
D.eLT=new A.C(B.ih,D.h9W,null)
D.bj0=new A.fp(2.2,null,null,null,null,B.cZ,null,null,null,null)
D.fDX=new A.a4(22,22,D.bj0,null)
D.bh6=new A.cq(B.z,null,null,D.fDX,null)
D.eLY=new A.C(B.a2g,D.bh6,null)
D.bIC=new A.Q(14,2,14,6)
D.hok=new A.D("The top of your book. Tap a design to see it.",null,V.uC,null,null,null,null,null,null,null,null,null)
D.eLZ=new A.C(D.bIC,D.hok,null)
D.h94=new A.D("\ud83c\udfc6 A new record!",null,B.h8,null,null,null,null,null,null,null,null,null)
D.eM0=new A.C(B.kQ,D.h94,null)
D.eNA=new A.jf(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eNE=new A.jf(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aQl=new A.jf(1,0.9607843137254902,0.48627450980392156,0)
D.KX=new A.jf(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Bm=new A.jf(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eNK=new A.jf(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hYg=new C.bmH(null)
D.bDo=new A.n4(D.hYg,null,B.aA,null,null)
D.aTZ=new A.cS(0,0,0,0,null,null,D.bDo,null)
D.h44=new A.D("\ud83c\udfc5",null,B.ads,null,null,null,null,null,null,null,null,null)
D.eSa=new A.cS(null,0,-34,null,null,null,D.h44,null)
D.f_K=new A.y("E","Sit by the fire again")
D.f5z=new A.y("C","Good Learner")
D.f9d=new A.y("D","Still Growing")
D.fe9=new A.y(-42,42)
D.ffA=new A.y("B","Faithful Listener")
D.fhT=new A.y("A","Keeper of the Family")
D.fld=new A.aV(-17,0.7,0)
D.flO=new A.aV(-8,0.95,1.3)
D.fmW=new A.aV(18,0.65,5.2)
D.fmY=new A.aV(0,1.15,2.6)
D.fni=new A.aV(9,0.9,3.9)
D.fpj=new A.b3([0,0,1,1])
D.aVz=new A.a5(0,0,520,160)
D.fv3=new A.a5(10,612,440,618)
D.fv4=new A.a5(10,612,440,628)
D.fv7=new A.a5(14,-64,34,-12)
D.fva=new A.a5(300,336,350,348)
D.ac3=new A.a5(30,96,420,346)
D.fvb=new A.a5(30,-9,46,1)
D.fvc=new A.a5(4,2,11,14)
D.fve=new A.a5(-8,-12.5,8,-7)
D.fvf=new A.a5(-16.5,-21,16.5,1)
D.fvg=new A.a5(60,342,88,348)
D.Wu=new A.a5(66,-66,94,-36)
D.fvh=new A.a5(6,8,10,14)
D.fvk=new A.a5(95,343,115,348)
D.fvl=new A.a5(-6.5,-74,6.5,-58)
D.fvt=new A.a5(-100,-74,100,-12)
D.fvu=new A.a5(-10,8,-6,14)
D.fvv=new A.a5(-11,2,-4,14)
D.fvw=new A.a5(-11,-70,11,-56)
D.fvD=new A.a5(-13,-24,13,-4)
D.fvK=new A.a5(-15,-21,15,0)
D.fvN=new A.a5(-16,-21,16,1)
D.fvO=new A.a5(-16,-21,16,2)
D.fvR=new A.a5(-16,-26,16,-6)
D.fvZ=new A.a5(-230,-26,230,26)
D.fwn=new A.a5(-38,-26,12,-6)
D.fwr=new A.a5(-3,-70,3,-63)
D.fws=new A.a5(-44,-22,44,0)
D.fwu=new A.a5(-46,-9,-30,1)
D.aVD=new A.a5(-80,-190,80,20)
D.fwB=new A.a5(-8,-26,40,-6)
D.fwC=new A.a5(-98,-80,92,-75)
D.fwD=new A.a5(-9,-15,9,-9)
D.hnR=new A.D("Let the AI write it from your tree",null,B.j_,null,B.K,null,null,null,null,null,null,null)
D.bR5=new A.cZ(1,B.c6,D.hnR,null)
D.dl_=w([E.RF,B.aa,D.bR5],x.p)
D.fxL=new A.bZ(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.dl_,null)
D.h3G=new A.D("Save member",null,B.cg,null,null,null,null,null,null,null,null,null)
D.dCK=w([D.avi,B.aa,D.h3G],x.p)
D.fxX=new A.bZ(B.aJ,B.ba,B.i,B.l,null,B.p,null,0,D.dCK,null)
D.c2e=new A.ae(B.iy,14,B.b8,null,null,null)
D.fRP=new A.G(!0,B.b8,null,null,null,null,12,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7O=new A.D("Cashier",null,D.fRP,null,null,null,null,null,null,null,null,null)
D.duh=w([D.c2e,B.b6,D.h7O],x.p)
D.fy0=new A.bZ(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.duh,null)
D.h3H=new A.D("Transfer & settings",null,B.dw,null,null,null,null,null,null,null,null,null)
D.bOM=new A.bu(1,B.b9,D.h3H,null)
D.daZ=w([D.auR,B.ar,D.bOM],x.p)
D.fy1=new A.bZ(B.aJ,B.e,B.i,B.l,null,B.p,null,0,D.daZ,null)
D.fCC=new A.aw(16,40)
D.fCH=new A.aw(22,64)
D.fCO=new A.aw(280,88)
D.fDB=new A.a4(30,null,null,null)
D.h2M=new A.D("The teacher is writing\u2026",null,B.ye,null,null,null,null,null,null,null,null,null)
D.bid=new A.cq(B.z,null,null,D.h2M,null)
D.hRZ=new A.b9("w",x.W)
D.fE1=new A.a4(null,56,D.bid,D.hRZ)
D.fEO=new A.hG(5,8,8,1,null)
D.fEW=new A.hG(2,12,12,1.05,null)
D.h7t=new A.D("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fFH=new A.b4(D.h7t,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h7J=new A.D("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aXZ=new A.b4(D.h7J,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hgg=new A.D("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fGa=new A.b4(D.hgg,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hrk=new A.D("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fGf=new A.b4(D.hrk,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h9U=new A.D("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fGm=new A.b4(D.h9U,null,null,null,null,null,null,null,null,null,null,null,null,B.fR,!1,null,null,null,B.t,null)
D.hox=new A.D("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aY3=new A.b4(D.hox,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h9S=new A.D("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fGM=new A.b4(D.h9S,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h4l=new A.D("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fGO=new A.b4(D.h4l,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hdG=new A.D("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fGU=new A.b4(D.hdG,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hs6=new A.D("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fHA=new A.b4(D.hs6,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hmJ=new A.D("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fI_=new A.b4(D.hmJ,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hro=new A.D("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fI2=new A.b4(D.hro,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hhV=new A.D("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fI4=new A.b4(D.hhV,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hbQ=new A.D("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fI5=new A.b4(D.hbQ,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hbR=new A.D("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fJ6=new A.b4(D.hbR,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h7v=new A.D("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fJo=new A.b4(D.h7v,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h9x=new A.D("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fJI=new A.b4(D.h9x,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hhn=new A.D("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fJZ=new A.b4(D.hhn,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hcG=new A.D("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fK_=new A.b4(D.hcG,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fX3=new A.G(!0,B.bH,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLy=new A.eH("\u2665",null,null,B.cW,null,null,null,null,null,null,D.fX3)
D.fU9=new A.G(!0,B.aT,null,null,null,null,28,B.O,B.cN,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLO=new A.eH("Today: how well do you know the family?",null,null,B.cW,null,null,null,null,null,null,D.fU9)
D.fM4=new A.G(!0,B.qT,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNg=new A.G(!0,D.l8,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNE=new A.G(!0,D.l8,null,null,null,null,12,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNI=new A.G(!0,B.d0,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNR=new A.G(!0,D.fO,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO1=new A.G(!0,D.fO,null,null,null,null,13,B.C,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOm=new A.ts(!0,B.uo,null,null,null,null,B.dK,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOC=new A.G(!0,B.d0,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOG=new A.G(!0,D.l8,null,null,null,null,18,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOH=new A.G(!0,B.d0,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOM=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOP=new A.G(!0,B.d0,null,null,null,null,15,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPm=new A.G(!0,B.b8,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPn=new A.G(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPp=new A.G(!0,B.aT,null,null,null,null,15.5,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPS=new A.G(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZk=new A.G(!0,B.aR,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZl=new A.G(!0,D.lY,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQi=new A.G(!0,B.d0,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adx=new A.ts(!0,B.W0,null,null,null,null,B.dK,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Xo=new A.G(!0,B.d0,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQs=new A.G(!0,B.a_,null,null,null,null,12.5,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQx=new A.G(!0,D.fO,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQZ=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS8=new A.G(!0,D.fO,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZv=new A.G(!0,D.fO,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSs=new A.G(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSE=new A.G(!0,D.fO,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSG=new A.G(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSN=new A.G(!0,L.jj,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZz=new A.G(!0,D.fO,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTK=new A.G(!0,D.fO,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU2=new A.G(!0,D.fO,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU4=new A.G(!0,B.a_,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU6=new A.G(!0,B.d0,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUv=new A.G(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A6.JJ,null,null,null)
D.aZO=new A.G(!0,D.fO,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUW=new A.G(!0,B.a_,null,null,null,null,17,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVh=new A.G(!0,B.fs,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVF=new A.G(!0,B.bW,null,null,null,null,8,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVK=new A.G(!0,B.bD,null,null,null,null,11,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVW=new A.G(!0,B.c,null,null,null,null,13.5,B.C,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVZ=new A.G(!0,D.fO,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW6=new A.G(!0,D.Hn,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWi=new A.G(!0,B.b8,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWH=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWO=new A.G(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ey,null,null,null)
D.fXe=new A.G(!0,B.d0,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXm=new A.G(!0,B.cZ,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXz=new A.G(!0,D.lZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_c=new A.G(!0,D.fO,null,null,null,null,null,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.M9=new A.G(!0,B.d0,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_e=new A.G(!0,B.d0,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ey,null,null,null)
D.fXU=new A.G(!0,B.bW,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXY=new A.G(!0,G.nR,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYl=new A.G(!0,B.b8,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYC=new A.G(!0,D.fO,null,null,null,null,15,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZ0=new A.G(!0,B.c,null,null,null,null,null,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZq=new A.G(!0,D.fO,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZY=new A.G(!0,D.fO,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_2=new A.G(!0,B.ao,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_c=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ae5=new A.G(!0,B.ao,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ae8=new A.G(!0,D.lY,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0Z=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1j=new A.G(!0,B.aT,null,null,null,null,27,B.O,B.cN,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1q=new A.G(!0,L.jj,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1y=new A.G(!0,L.jj,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h21=new A.D("Time:",null,B.hJ,null,null,null,null,null,null,null,null,null)
D.h2n=new A.D("\ud83c\udfae",null,K.adW,null,null,null,null,null,null,null,null,null)
D.h2o=new A.D("Themes",null,B.pz,null,null,null,null,null,null,null,null,null)
D.h2U=new A.D("\ud83c\udfb2",null,B.yo,null,null,null,null,null,null,null,null,null)
D.h2Y=new A.D("Delete this game?",null,B.j_,null,null,null,null,null,null,null,null,null)
D.h34=new A.D("Add Item",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fSm=new A.G(!0,B.a_,null,null,null,null,22,B.C,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3v=new A.D("Debt receipt",null,D.fSm,null,B.K,null,null,null,null,null,null,null)
D.b_r=new A.G(!0,B.ao,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3O=new A.D("Person who owes",null,D.b_r,null,null,null,null,null,null,null,null,null)
D.h4P=new A.D("Notes",null,B.adJ,null,null,null,null,null,null,null,null,null)
D.h5j=new A.D("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fRh=new A.G(!0,B.c,null,null,null,null,11,B.C,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5l=new A.D("Share",null,D.fRh,null,null,null,null,null,null,null,null,null)
D.h6m=new A.D("Move your family trees",null,I.ae3,null,null,null,null,null,null,null,null,null)
D.h71=new A.D("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.h7I=new A.D("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.h85=new A.D("SAVE",null,D.M9,null,null,null,null,null,null,null,null,null)
D.h8J=new A.D("The round button is the right answer.",null,V.yj,null,null,null,null,null,null,null,null,null)
D.h93=new A.D("Remove this book?",null,B.h8,null,null,null,null,null,null,null,null,null)
D.fYi=new A.G(!0,B.d0,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ey,null,null,null)
D.h9C=new A.D("Fireside Stories",null,D.fYi,null,null,null,null,null,null,null,null,null)
D.b_W=new A.D("Download",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hai=new A.D("What should the AI do?",null,B.dw,null,null,null,null,null,null,null,null,null)
D.fQS=new A.G(!0,D.lY,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hax=new A.D("REPORT CARD",null,D.fQS,null,null,null,null,null,null,null,null,null)
D.hbk=new A.D("Calabash Catch",null,B.XJ,null,null,null,null,null,null,null,null,null)
D.hbM=new A.D("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.hcd=new A.D("\ud83c\udfe1",null,B.FU,null,null,null,null,null,null,null,null,null)
D.hcV=new A.D("Ribbon bookmark",null,B.jP,null,null,null,null,null,null,null,null,null)
D.fZX=new A.G(!0,B.b8,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hdp=new A.D("NGMY.ORG",null,D.fZX,null,B.K,null,null,null,null,null,null,null)
D.heI=new A.D("Scan family tree QR",null,B.cL,null,null,null,null,null,null,null,null,null)
D.fW_=new A.G(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hfv=new A.D("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fW_,null,B.K,null,null,null,null,null,null,null)
D.hgK=new A.D("Delete",null,B.Xi,null,null,null,null,null,null,null,null,null)
D.hgL=new A.D("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.hgT=new A.D("Thumbnail",null,B.pz,null,null,null,null,null,null,null,null,null)
D.hhs=new A.D("Save the cover",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hhx=new A.D("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.BN,null,B.K,null,null,null,null,null,null,null)
D.hhW=new A.D("Your photos",null,B.pz,null,null,null,null,null,null,null,null,null)
D.hic=new A.D("Create Project",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hiz=new A.D("\u2b50 stars",null,B.FV,null,null,null,null,null,null,null,null,null)
D.hiN=new A.D("Design your cover",null,B.uB,null,null,null,null,null,null,null,null,null)
D.hiT=new A.D("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.hiW=new A.D("PICTURE",null,N.wt,null,null,null,null,null,null,null,null,null)
D.hiY=new A.D("\ud83c\udfaf",null,D.XI,null,null,null,null,null,null,null,null,null)
D.hjk=new A.D("Paid",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hjm=new A.D("You can undo it right after.",null,V.yj,null,null,null,null,null,null,null,null,null)
D.hjW=new A.D("Print",null,B.wr,null,null,null,null,null,null,null,null,null)
D.hkm=new A.D("Amount owed",null,D.b_r,null,null,null,null,null,null,null,null,null)
D.hkC=new A.D("Got it",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hle=new A.D("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.hlh=new A.D("Add to budget",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hlH=new A.D("Debtor signature",null,B.adJ,null,null,null,null,null,null,null,null,null)
D.hlU=new A.D("Change icon",null,B.adI,null,null,null,null,null,null,null,null,null)
D.hmK=new A.D("MADE BY THE SYSTEM, FROM YOUR TREE",null,U.uE,null,null,null,null,null,null,null,null,null)
D.hnd=new A.D("Family tree QR",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hnj=new A.D("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.XH,null,null,null,null,null,null,null,null,null)
D.hnH=new A.D("Download",null,B.wr,null,null,null,null,null,null,null,null,null)
D.hnI=new A.D("The person who planted this tree has not made a game yet.",null,Ag.yn,null,null,null,null,null,null,null,null,null)
D.hnM=new A.D("Change",null,B.pz,null,null,null,null,null,null,null,null,null)
D.hoD=new A.D("Clear all",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hoG=new A.D("WHAT SHOULD IT CHANGE?",null,N.wt,null,null,null,null,null,null,null,null,null)
D.hpe=new A.D("COLOUR",null,N.wt,null,null,null,null,null,null,null,null,null)
D.hpt=new A.D("Do it",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hpx=new A.D("Create Tree",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hpI=new A.D("Give me another clue",null,D.M9,null,null,null,null,null,null,null,null,null)
D.hqD=new A.D("Create Family Tree",null,B.fk,null,null,null,null,null,null,null,null,null)
D.hqN=new A.D("THE TEACHER EXPLAINS THESE",null,U.uE,null,null,null,null,null,null,null,null,null)
D.fM3=new A.G(!0,E.kI,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hqT=new A.D("Write the first page myself",null,D.fM3,null,null,null,null,null,null,null,null,null)
D.hrr=new A.D("Use this header",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hry=new A.D("Create Project",null,E.b_6,null,null,null,null,null,null,null,null,null)
D.hTt=new C.ae9(1,"header")
D.af8=new C.ae9(2,"projects")
D.hTu=new C.ae9(3,"cashier")
D.af9=new C.ae9(4,"familyTree")
D.i82=new C.cKS(0,"start")
D.i83=new C.cKT(0,"start")
D.hTH=new C.a_Q(null)
D.hUJ=new C.a0p(null)
D.dRr=new A.bl(B.il,[],A.as("bl<o,H7>"))
D.dwI=w([],x.dE)
D.dwJ=w([],x.M)
D.hVn=new C.bjR(D.dRr,D.dwI,D.dwJ,0,0,null,null)
D.b4t=new C.a1g(0,"intro")
D.b4u=new C.a1g(1,"countdown")
D.afl=new C.a1g(2,"ask")
D.YH=new C.a1g(3,"reveal")
D.b4v=new C.a1g(4,"end")
D.hYi=new C.tB(F.Hw,D.lZ,B.d0,F.mq,5,!1,!1,!1,0,null)
D.hYk=new C.tB(F.Hw,B.ev,B.d0,B.bP,2,!0,!0,!1,2,B.d0)
D.hYm=new C.tB(B.r6,B.cZ,B.d0,F.mq,2,!0,!1,!1,2,B.as)
D.hYn=new C.tB(F.Hw,B.dV,B.d0,F.mq,5,!1,!1,!1,1,null)
D.hYq=new C.tB(F.a19,D.alE,B.d0,F.mq,4,!0,!1,!0,0,null)
D.b4y=new C.tB(F.a19,B.e1,B.d0,F.mq,3,!0,!1,!0,2,null)
D.b4z=new C.tB(F.tC,D.lZ,B.c,F.mq,0,!1,!1,!0,0,null)
D.b4A=new C.tB(B.r6,B.aB,B.d0,B.bP,2,!0,!0,!1,2,B.e1)
D.b4B=new C.tB(B.r6,G.nR,B.iv,F.mq,5,!1,!1,!0,3,null)
D.hYu=new C.tB(B.r6,B.e1,B.d0,F.mq,0,!0,!1,!1,0,B.aB)
D.b4C=new C.tB(F.Hw,B.ev,B.d0,B.bP,1,!1,!0,!1,1,null)
D.b4D=new C.tB(F.H2,B.as,B.aB,F.mq,4,!0,!1,!0,2,null)
D.hYw=new C.tB(F.tC,B.as,B.ev,F.mq,3,!0,!1,!1,0,null)
D.hYy=new C.tB(B.r6,B.dV,B.d0,B.bP,1,!1,!0,!1,1,null)
D.hYz=new C.tB(F.H2,D.akE,B.c,F.mq,5,!1,!1,!0,0,null)
D.hZe=new C.a1R(null)
D.i8b=new C.ahD(0,"still")
D.Z3=new C.ahD(1,"walk")
D.b5p=new C.ahD(2,"pound")
D.b5q=new C.ahD(3,"drum")
D.i3C=new C.a3b(0,"greet")
D.b5r=new C.a3b(1,"teach")
D.afF=new C.a3b(2,"ask")
D.i3D=new C.a3b(3,"feedback")
D.b5s=new C.a3b(4,"end")
D.Za=new C.a3u(0,"intro")
D.Zb=new C.a3u(1,"asking")
D.C5=new C.a3u(2,"reacting")
D.afQ=new C.a3u(3,"driving")
D.afR=new C.a3u(4,"arrived")
D.afZ=new C.aNZ(0,"projects")
D.b5S=new C.aNZ(1,"cashier")
D.i5I=new C.aNZ(2,"familyTree")})()};
(a=>{a["q+SBm/XrJdXxjlnOy3P40gewfEw="]=a.current})($__dart_deferred_initializers__);