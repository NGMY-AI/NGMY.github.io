((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,P,A_,S,A9,I,H,E,T,Q,O,Aa,Ab,A0,Ac,Ad,R,L,A1,A2,Ae,A3,A4,A5,Af,Ag,A6,Ah,Ai,A7,Aj,A8,Ak,Al,U,N,Am,An,Ao,V,Ap,W,X,G,Aq,K,F,Y,C={
bDT(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bDT=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vv(null,""),$async$bDT)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nc(b1)
s=A.c3(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.ds(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cT(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.M)(h),++d){a0=h[d]
f.push(A.G(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.X.ap(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.r1(t,a1,B.hN,"book",E.FT),$async$bDT)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.QQ(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.Lm(l)?y.k:y.y)
for(j=J.a5(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cA
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=H.a2J(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDT,v)},
ahe(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ahe=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vv(null,""),$async$ahe)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nc(b6)
s=x.S
r=A.d0(c1,0,A.dA(4,"count",s),A.T(c1).c)
q=H.a2w(new A.N(r,new C.fFi(),r.$ti.k("N<ak.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fFh(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.ap(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ahe)
case 6:l=c5
k=H.QQ(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aoI(s,D.dyf,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.ds(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.M)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.G(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.X.ap(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ahe)
case 10:l=c5
k=l==null?null:H.QQ(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.dc(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.l7(a5,a2.k("l7<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a5(a9)
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
case 9:if(h.a!==0){s=h.$ti.k("bc<2>")
p=A.cF(new A.bc(h,s),new C.fFj(),s.k("L.E"),p)
p=H.a2w(A.pn(p,3,A.a6(p).k("L.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cv<1>")
b4=A.C(new A.cv(h,s),s.k("L.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.M)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a2J(s,b9),$async$ahe)
case 13:b5=c5
for(s=J.a5(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aoI(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahe,v)},
hv5(d,e,f){return A.ci(null,B.w.j(0.65),!1,null,new C.fOM(e,f),d,null,!0,!0,x.g2)},
aoI:function aoI(d,e,f){this.a=d
this.b=e
this.c=f},
fFi:function fFi(){},
fFh:function fFh(d){this.a=d},
fFj:function fFj(){},
fOM:function fOM(d,e){this.a=d
this.b=e},
bBI(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bBI=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b3(b1,new C.fto())){u=null
w=1
break}t=B.d.d5(b1,new C.ftp())
s=$.S()
r=new A.oX()
q=A.z4(r,D.aP3)
p=A.I()
p.r=B.c.gp(0)
q.aP(D.aP3,p)
o=A.I()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.aa
o.d=B.bE
o.e=B.dT
n=new C.ftu(t)
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
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.M)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aX(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aG(a3,o)}else{p=A.a([],x.v)
a3=new A.aF(s.r,B.ag,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.M)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aX(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aG(a3,o)}w=4
return A.b(r.ne().x8(520,160),$async$bBI)
case 4:w=3
return A.b(b3.hr(B.h8),$async$bBI)
case 3:b0=b3
u=b0==null?null:J.eR(B.dH.gaR(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBI,v)},
fCZ(d){return C.i91(d)},
i91(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fCZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bhi()
n=d.x!=null&&d.zc(null).length===0
if(d.x!=null)t=n?D.zR:D.J4
else t=d.gU5()?D.J4:D.aK_
w=3
return A.b(C.bBI(d.ax),$async$fCZ)
case 3:s=f
p.a=null
if(s!=null)p.a=A.anq(s)
r=A.a4E(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aK_}else{p.c=C.wX(q,!0)
p.b=n?D.zR:D.J4}r.a3v(A.fZc(new C.fD0(p,d,new C.fD1(),t,n,o),null,D.bC7,B.wG))
u=r.jx(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fCZ,v)},
fJD(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fJD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fCZ(d),$async$fJD)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aq(q,0,40)
u=Ad.GV(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJD,v)},
fto:function fto(){},
ftp:function ftp(){},
ftu:function ftu(d){this.a=d},
fD1:function fD1(){},
fD0:function fD0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fD_:function fD_(){},
fPe(d,e){var w=0,v=A.j(x.H)
var $async$fPe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ci(null,B.w.j(0.55),!0,null,new C.fPi(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$fPe)
case 2:return A.h(null,v)}})
return A.i($async$fPe,v)},
bEl(d,e,f,g){return C.igC(d,e,f,g)},
igC(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bEl=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gak(e.split(",")):e
r=B.cF.aM(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.U(D.fbj)
w=1
break}w=3
return A.b(A.ci(null,null,!0,null,new C.fPa(g,r,f),d,null,!0,!0,x.H),$async$bEl)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bEl,v)},
fPj(d,e){var w=0,v=A.j(x.H)
var $async$fPj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ci(null,null,!0,null,new C.fPm(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$fPj)
case 2:return A.h(null,v)}})
return A.i($async$fPj,v)},
aZn:function aZn(d,e){this.c=d
this.a=e},
c5L:function c5L(){},
bbC:function bbC(d,e){this.b=d
this.a=e},
fPi:function fPi(d,e){this.a=d
this.b=e},
fPf:function fPf(d){this.a=d},
fPg:function fPg(d,e,f){this.a=d
this.b=e
this.c=f},
fPh:function fPh(d,e){this.a=d
this.b=e},
fPa:function fPa(d,e,f){this.a=d
this.b=e
this.c=f},
fP8:function fP8(d){this.a=d},
fP9:function fP9(d,e,f){this.a=d
this.b=e
this.c=f},
fPm:function fPm(d,e){this.a=d
this.b=e},
fPk:function fPk(d){this.a=d},
fPl:function fPl(d,e,f){this.a=d
this.b=e
this.c=f},
fxG(d,e){var w=0,v=A.j(x.y),u,t
var $async$fxG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2h(d),$async$fxG)
case 3:t=g
J.nz(t,new C.fxH(e))
u=A.ahT(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fxG,v)},
fxH:function fxH(d){this.a=d},
aoU:function aoU(d,e,f){this.c=d
this.d=e
this.a=f},
aDs:function aDs(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dLt:function dLt(d,e){this.a=d
this.b=e},
dLe:function dLe(d,e){this.a=d
this.b=e},
dLh:function dLh(d,e,f){this.a=d
this.b=e
this.c=f},
dLg:function dLg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLf:function dLf(d,e){this.a=d
this.b=e},
dLi:function dLi(d,e){this.a=d
this.b=e},
dLc:function dLc(){},
dLd:function dLd(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dLb:function dLb(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dKX:function dKX(d){this.a=d},
dKY:function dKY(d,e,f){this.a=d
this.b=e
this.c=f},
dKZ:function dKZ(d,e){this.a=d
this.b=e},
dKW:function dKW(d){this.a=d},
dL3:function dL3(d,e){this.a=d
this.b=e},
dKV:function dKV(d){this.a=d},
dL4:function dL4(d,e,f){this.a=d
this.b=e
this.c=f},
dL5:function dL5(d,e,f){this.a=d
this.b=e
this.c=f},
dKU:function dKU(d,e){this.a=d
this.b=e},
dL6:function dL6(d,e,f){this.a=d
this.b=e
this.c=f},
dKT:function dKT(d,e){this.a=d
this.b=e},
dL7:function dL7(d,e){this.a=d
this.b=e},
dKS:function dKS(d){this.a=d},
dL8:function dL8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKQ:function dKQ(){},
dKK:function dKK(d){this.a=d},
dKL:function dKL(d){this.a=d},
dKR:function dKR(d,e){this.a=d
this.b=e},
dL9:function dL9(d,e){this.a=d
this.b=e},
dKP:function dKP(d){this.a=d},
dLa:function dLa(d){this.a=d},
dKO:function dKO(){},
dL_:function dL_(d,e){this.a=d
this.b=e},
dKN:function dKN(d){this.a=d},
dL0:function dL0(d,e,f){this.a=d
this.b=e
this.c=f},
dKM:function dKM(d,e){this.a=d
this.b=e},
dKJ:function dKJ(d,e){this.a=d
this.b=e},
dL1:function dL1(d){this.a=d},
dL2:function dL2(d,e,f){this.a=d
this.b=e
this.c=f},
dLw:function dLw(){},
dLx:function dLx(d,e){this.a=d
this.b=e},
dLu:function dLu(d){this.a=d},
dLv:function dLv(d){this.a=d},
dLq:function dLq(d,e){this.a=d
this.b=e},
dLr:function dLr(d){this.a=d},
dLj:function dLj(d,e,f){this.a=d
this.b=e
this.c=f},
dLk:function dLk(d,e,f){this.a=d
this.b=e
this.c=f},
dLl:function dLl(d,e,f){this.a=d
this.b=e
this.c=f},
dLm:function dLm(d,e,f){this.a=d
this.b=e
this.c=f},
dLn:function dLn(d,e,f){this.a=d
this.b=e
this.c=f},
dLo:function dLo(d,e,f){this.a=d
this.b=e
this.c=f},
dLp:function dLp(d,e,f){this.a=d
this.b=e
this.c=f},
dLy:function dLy(){},
dLz:function dLz(){},
dLA:function dLA(){},
dLB:function dLB(d){this.a=d},
dLs:function dLs(d,e){this.a=d
this.b=e},
hr8(d){return B.d.dK(D.a3x,new C.fyk(d),new C.fyl())},
us:function us(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fyk:function fyk(d){this.a=d},
fyl:function fyl(){},
akY:function akY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aV7:function aV7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
T6:function T6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfe:function bfe(){this.d=$
this.c=this.a=null},
dbC:function dbC(d,e){this.a=d
this.b=e},
dbA:function dbA(d,e){this.a=d
this.b=e},
dbB:function dbB(){},
dbD:function dbD(d,e){this.a=d
this.b=e},
hbI(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.nk(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
L8(d,e){return C.i7E(d,e)},
i7E(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$L8=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$L8)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.r(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.X.aN(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.dc(p,x.f)
o=A.cF(o,new C.fAB(),o.$ti.k("L.E"),x.B)
n=A.a6(o).k("Z<L.E>")
o=A.C(new A.Z(o,new C.fAC(),n),n.k("L.E"))
B.d.aY(o,new C.fAD())
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
return A.i($async$L8,v)},
B6(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$B6=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$B6)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fNS(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.ar("String","ngmy_family_book_v1_"+s+"_"+e,B.X.ap(r,null)),$async$B6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$B6,v)},
aRc(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aRc=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.L8(d,e),$async$aRc)
case 2:u=h
t=J.cD(u)
s=t.bg(u,new C.fWd(f))
if(s===-1)t.c6(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.B6(d,e,u),$async$aRc)
case 3:return A.h(null,v)}})
return A.i($async$aRc,v)},
bCb(d,e,f){var w=0,v=A.j(x.H),u
var $async$bCb=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.L8(d,e),$async$bCb)
case 2:u=h
J.nz(u,new C.fxy(f))
w=3
return A.b(C.B6(d,e,u),$async$bCb)
case 3:return A.h(null,v)}})
return A.i($async$bCb,v)},
bCp(d,e){return C.i7D(d,e)},
i7D(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bCp=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bCp)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.r(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.NM
w=1
break}p=B.X.aN(0,q,null)
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
if(D.D6.aj(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.E(i==null?25:i,18,36)
h=B.d.t(D.a57,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.t(D.a4v,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.t(D.a4r,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.d0I,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.HU(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.NM
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.NM
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bCp,v)},
RV(d,e,f){return C.ig8(d,e,f)},
ig8(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$RV=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$RV)
case 7:r=h
w=8
return A.b(r.ar("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.X.ap(f.ag(),null)),$async$RV)
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
return A.i($async$RV,v)},
Rn(d,e){return C.i7F(d,e)},
i7F(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Rn=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Rn)
case 7:r=g
q=r.tw("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.L8(d,e),$async$Rn)
case 8:if(!j.cL(g)){n=B.a.i(d.toLowerCase())
m=J.lA(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Rn)
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
return A.i($async$Rn,v)},
agy(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$agy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rn(d,e),$async$agy)
case 3:s=g
r=J.a5(s)
if(r.gL(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gL(s):"main"
r.M(s,t)
w=5
return A.b(A.az(),$async$agy)
case 5:w=4
return A.b(g.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$agy)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agy,v)},
a2V(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2V=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Rn(d,e),$async$a2V)
case 2:s=h
J.hz(s,f)
w=3
return A.b(A.az(),$async$a2V)
case 3:u=h
w=4
return A.b(u.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2V)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2V)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2V)
case 6:return A.h(null,v)}})
return A.i($async$a2V,v)},
nk:function nk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAB:function fAB(){},
fAC:function fAC(){},
fAD:function fAD(){},
fNS:function fNS(){},
fWd:function fWd(d){this.a=d},
fxy:function fxy(d){this.a=d},
HU:function HU(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bPe:function bPe(d){this.a=d},
igr(d,e,f,g,h,i,j){return A.a4(d,!1).cc(A.dX(new C.fOq(j,i,f,e,h,g),!0,null,x.H))},
Rk(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Rk=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rn(h,g),$async$Rk)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.U(D.aR9)
u=!1
w=1
break}w=4
return A.b(C.hv5(d,f,e),$async$Rk)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.agy(h,g),$async$Rk)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nk(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.B6(h,r,p),$async$Rk)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.RV(h,r,new C.HU("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Rk)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Rk,v)},
fOq:function fOq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ZF:function ZF(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAs:function aAs(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dch:function dch(d){this.a=d},
dcg:function dcg(d,e){this.a=d
this.b=e},
dc5:function dc5(d,e){this.a=d
this.b=e},
dc2:function dc2(d,e){this.a=d
this.b=e},
dbE:function dbE(d){this.a=d},
dbF:function dbF(d,e){this.a=d
this.b=e},
dc6:function dc6(d){this.a=d},
dbN:function dbN(d){this.a=d},
dbL:function dbL(d){this.a=d},
dbM:function dbM(d){this.a=d},
dbO:function dbO(d){this.a=d},
dc3:function dc3(d){this.a=d},
dc4:function dc4(){},
dbJ:function dbJ(d){this.a=d},
dbK:function dbK(d,e){this.a=d
this.b=e},
dbP:function dbP(d){this.a=d},
dbQ:function dbQ(d,e){this.a=d
this.b=e},
dcf:function dcf(d){this.a=d},
dce:function dce(d,e){this.a=d
this.b=e},
dcd:function dcd(d){this.a=d},
dc_:function dc_(d){this.a=d},
dbZ:function dbZ(d){this.a=d},
dc0:function dc0(d){this.a=d},
dbG:function dbG(d,e){this.a=d
this.b=e},
dc1:function dc1(d,e){this.a=d
this.b=e},
dbT:function dbT(d){this.a=d},
dbU:function dbU(d){this.a=d},
dbS:function dbS(){},
dbV:function dbV(d){this.a=d},
dbW:function dbW(d){this.a=d},
dbX:function dbX(d,e){this.a=d
this.b=e},
dbY:function dbY(d,e,f){this.a=d
this.b=e
this.c=f},
dbR:function dbR(d,e){this.a=d
this.b=e},
dc8:function dc8(d){this.a=d},
dc7:function dc7(){},
dc9:function dc9(d){this.a=d},
dca:function dca(d){this.a=d},
dcb:function dcb(d){this.a=d},
dcc:function dcc(d,e){this.a=d
this.b=e},
dbH:function dbH(d){this.a=d},
dbI:function dbI(d){this.a=d},
ZJ:function ZJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfC:function bfC(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
de1:function de1(d){this.a=d},
de2:function de2(d){this.a=d},
de0:function de0(d){this.a=d},
de3:function de3(d){this.a=d},
de_:function de_(d){this.a=d},
de4:function de4(d){this.a=d},
ddZ:function ddZ(d){this.a=d},
de5:function de5(d,e){this.a=d
this.b=e},
ddY:function ddY(d,e){this.a=d
this.b=e},
de6:function de6(d,e){this.a=d
this.b=e},
ZH:function ZH(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aeV:function aeV(d,e,f){this.a=d
this.b=e
this.c=f},
aAv:function aAv(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dcw:function dcw(d,e){this.a=d
this.b=e},
dcv:function dcv(d,e){this.a=d
this.b=e},
dcA:function dcA(d){this.a=d},
dcz:function dcz(d,e){this.a=d
this.b=e},
dcx:function dcx(d){this.a=d},
dcy:function dcy(d){this.a=d},
dcB:function dcB(d){this.a=d},
dcC:function dcC(d){this.a=d},
dcu:function dcu(d,e){this.a=d
this.b=e},
dct:function dct(d,e){this.a=d
this.b=e},
Ke:function Ke(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YX:function YX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cKM:function cKM(d){this.a=d},
cKN:function cKN(){},
cKO:function cKO(d){this.a=d},
bcQ:function bcQ(d,e,f){this.b=d
this.c=e
this.a=f},
bcH:function bcH(d,e){this.b=d
this.a=e},
ut:function ut(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zf:function Zf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcO:function bcO(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d3B:function d3B(d,e,f){this.a=d
this.b=e
this.c=f},
d3A:function d3A(d,e){this.a=d
this.b=e},
d4_:function d4_(d){this.a=d},
d3N:function d3N(){},
d40:function d40(d){this.a=d},
d3M:function d3M(){},
d41:function d41(d,e){this.a=d
this.b=e},
d3L:function d3L(d,e){this.a=d
this.b=e},
d42:function d42(d,e){this.a=d
this.b=e},
d3K:function d3K(d,e){this.a=d
this.b=e},
d43:function d43(d){this.a=d},
d3J:function d3J(){},
d44:function d44(d,e){this.a=d
this.b=e},
d3I:function d3I(d,e){this.a=d
this.b=e},
d45:function d45(d){this.a=d},
d3V:function d3V(d,e){this.a=d
this.b=e},
d46:function d46(d){this.a=d},
d47:function d47(d){this.a=d},
d49:function d49(d){this.a=d},
d4a:function d4a(d){this.a=d},
d3U:function d3U(d,e){this.a=d
this.b=e},
d4b:function d4b(d,e){this.a=d
this.b=e},
aHu:function aHu(d){this.a=d},
bi7:function bi7(d){this.a=d},
baZ:function baZ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
akZ:function akZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a0X:function a0X(d,e){this.a=d
this.b=e},
al_:function al_(d,e,f,g,h,i){var _=this
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
_.aa$=i
_.c=_.a=null},
bPo:function bPo(d){this.a=d},
bPi:function bPi(d){this.a=d},
bPh:function bPh(d,e){this.a=d
this.b=e},
bPr:function bPr(d){this.a=d},
bPj:function bPj(d){this.a=d},
bPk:function bPk(d){this.a=d},
bPn:function bPn(d){this.a=d},
bPm:function bPm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPp:function bPp(d,e){this.a=d
this.b=e},
bPq:function bPq(){},
bPl:function bPl(d){this.a=d},
bPf:function bPf(d,e){this.a=d
this.b=e},
bPg:function bPg(d){this.a=d},
bnv:function bnv(d,e){this.b=d
this.a=e},
aAt:function aAt(){},
it(d,e){var w
$.S()
w=A.I()
w.b=B.aa
w.c=e
w.r=d.gp(0)
w.d=B.bE
w.e=B.dT
return w},
bBK(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.a
J.bm(j.save())
j.translate(e.a,e.b)
d.p0(0,a0?-f:f,f)
w=A.bJ(B.i6,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.I()
t.r=v.gp(0)
d.dO(w,t)
w=a1===D.Wa
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.bo(D.ej7,new A.t(-4+v,-2),C.it(q,5))
d.bo(D.egI,new A.t(4-v,-2),C.it(q,5))}else{t=A.bJ(B.IV,14,40)
p=A.I()
p.r=v.gp(0)
d.dO(t,p)}v=u.r
u=x.v
o=new A.aF(v,B.ag,k,k,A.a([],u))
t=-64-r
o.D(new A.aX(-11,t))
o.D(new A.c4(-15,-40,-14,a3?-12:-18))
o.D(new A.aq(14,a3?-12:-18))
o.D(new A.c4(15,-40,11,t))
o.D(new A.bs())
t=A.I()
t.r=w.gp(0)
d.aG(o,t)
u=new A.aF(v,B.ag,k,k,A.a([],u))
u.D(new A.aX(-12,-50-r))
v=-46-r
u.D(new A.aq(12,v))
u.D(new A.aq(12.5,-42-r))
u.D(new A.aq(-12.5,v))
u.D(new A.bs())
v=A.I()
v.r=h.c.gp(0)
d.aG(u,v)
A:{if(D.abo===a1){w=Math.sin(g*3.4)
break A}if(D.abp===a1){w=Math.sin(g*7.5)
break A}w=s
break A}if(a1===D.abo){n=-52+w*14
d.bo(new A.t(10,n-22),new A.t(10,n+44),C.it(G.F7,3.4))
d.bo(D.ejo,new A.t(9,n),C.it(q,4))
d.bo(D.eh7,new A.t(10,n),C.it(q,4))}else if(a1===D.abp){d.bo(D.eid,new A.t(-8,-26-Math.max(0,w)*6),C.it(q,4))
d.bo(D.efb,new A.t(8,-26-Math.max(0,-w)*6),C.it(q,4))}else{w=s*3
v=-38-r
d.bo(D.eih,new A.t(-12-w,v),C.it(q,4))
d.bo(D.aJ2,new A.t(12+w,v),C.it(q,4))}w=A.I()
w.r=q.gp(0)
d.aP(D.eZR,w)
m=new A.t(0,-77-r)
w=A.bJ(m,22,19)
v=A.I()
v.r=q.gp(0)
d.dO(w,v)
w=h.y
if(w!=null){v=A.bJ(m.a8(0,F.uV),15,24)
u=A.I()
u.r=w.gp(0)
d.dO(v,u)
u=m.a8(0,D.ef6)
v=A.I()
v.r=w.gp(0)
d.ad(u,4,v)}else{w=A.bJ(m.a8(0,B.rT),23,20)
v=h.d
u=A.I()
u.r=v.gp(0)
d.e3(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.bo(m.a8(0,D.ejm),m.a8(0,D.eib),C.it(v,2.2))
d.bo(m.a8(0,D.eh6),m.a8(0,D.ef3),C.it(v,2.2))}if(w===4){w=m.a8(0,D.ejq)
u=A.I()
u.r=v.gp(0)
d.ad(w,6,u)
u=m.a8(0,D.eh8)
w=A.I()
w.r=v.gp(0)
d.ad(u,6,w)}}w=m.a8(0,D.ehZ)
v=A.I()
v.r=B.hW.gp(0)
d.ad(w,0.9,v)
v=m.a8(0,D.ehN)
w=A.I()
w.r=B.hW.gp(0)
d.ad(v,0.9,w)
if(i){l=m.a8(0,F.a7_)
w=A.bJ(l,21,22)
v=A.I()
v.r=D.lr.gp(0)
d.dO(w,v)
v=A.bJ(l.a8(0,F.aJ_),5,12)
w=A.I()
w.r=D.bcd.gp(0)
d.dO(v,w)
d.bo(l.a8(0,D.eji),l.a8(0,F.aJm),C.it(B.cI,1.4))
d.bo(D.aJ2,new A.t(15,-88-r),C.it(q,3.6))}j.restore()},
hpR(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.a
J.bm(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.bJ(B.dB,18,96)
u=B.w.j(0.28)
$.S()
t=A.I()
t.r=u.gp(0)
d.dO(v,t)
t=A.bJ(B.dB,11,70)
v=B.w.j(0.2)
u=A.I()
u.r=v.gp(0)
d.dO(t,u)
d.ln(D.aP7,A.I())
C.hXb(d,g,h,i,j)
s=(k==null?D.a74:k).a-w>=0?1:-1
w=A.I()
w.a=B.L6
w.sam(A.jo(new A.t(s*70,-60),new A.t(-s*70,-60),A.a([D.agu.j(0.5),D.agu.j(0.12),D.bjp.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aP(D.aP7,w)
r.restore()
r.restore()},
hXb(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.a,a1=A.ar(a0,B.w,0.28)
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
s=A.bt(D.eZS,B.rX)
p=$.S()
o=A.I()
o.r=u.gp(0)
a2.az(s,o)
o=A.bt(D.eZN,B.i7)
s=A.ar(v,B.w,0.18)
s.toString
n=A.I()
n.r=s.gp(0)
a2.az(o,n)
n=A.bt(D.f_0,B.i7)
o=A.ar(v,B.w,0.1)
o.toString
s=A.I()
s.r=o.gp(0)
a2.az(n,s)
s=A.I()
s.r=a0.gp(0)
a2.dO(D.eZU,s)
s=A.I()
s.r=a0.gp(0)
a2.dO(D.eYD,s)
s=a2.a
J.bm(s.save())
s.translate(a4.w,0)
J.bm(s.save())
a2.p0(0,q,q*(1+t*0.012))
o=a3.f
m=o&&!a3.r?25:28
n=x.v
l=new A.aF(p.r,B.ag,d,d,A.a([],n))
p=-m
k=p+2
l.D(new A.aX(k,-58))
l.D(new A.c4(p-3,-62,p,-52))
l.D(new A.aq(p+4,-14))
l.D(new A.aq(m-4,-14))
l.D(new A.aq(m,-52))
l.D(new A.c4(m+3,-62,m-2,-58))
l.D(new A.c4(0,-70,k,-58))
l.D(new A.bs())
k=A.I()
k.r=v.gp(0)
a2.aG(l,k)
J.bm(s.save())
a2.mE(0,l)
switch(a3.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.d7i[j]
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.b=B.aa
i.c=5
i.r=k.gp(0)
i.d=B.bE
i.e=B.dT
h=i.G()
s.drawLine.apply(s,[-34+u,-64,14+u,-14,h])
h.delete()}break
case 2:for(k=a3.c,g=-56;g<-14;g+=11)for(f=-26+B.o.F(B.o.ao(g,11),2)*6;f<28;f+=12){i=k.j(0.85)
$.S()
e=new A.ap(B.R,B.N,B.U,B.V,B.S)
e.r=i.gp(0)
h=e.G()
s.drawCircle(f,g,3.6,h)
h.delete()
e=new A.ap(B.R,B.N,B.U,B.V,B.S)
e.r=u.gp(0)
h=e.G()
s.drawCircle(f,g,1.6,h)
h.delete()}break
case 3:for(u=a3.c,f=-28;f<30;f+=8){k=u.j(0.7)
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bE
i.e=B.dT
h=i.G()
s.drawLine.apply(s,[f,-64,f,-14,h])
h.delete()}for(g=-60;g<-14;g+=8){k=u.j(0.7)
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bE
i.e=B.dT
h=i.G()
s.drawLine.apply(s,[-30,g,30,g,h])
h.delete()}break
default:a2.bo(D.eiN,D.efP,C.it(a3.c.j(0.9),3))}a2.bo(D.ejj,D.eij,C.it(B.w.j(0.18),1.6))
a2.bo(D.efa,F.aJ4,C.it(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.I()
i.r=u.gp(0)
a2.aP(D.eYz,i)
s.restore()
i=A.I()
i.r=a1.gp(0)
a2.aP(D.eYN,i)
n=new A.aF(k.r,B.ag,d,d,A.a([],n))
n.D(new A.aX(-9,-66))
n.D(new A.c4(0,-57,9,-66))
n.D(new A.c4(0,-60,-9,-66))
k=A.I()
k.r=a0.gp(0)
a2.aG(n,k)
if(a3.e!==1)u=a3.r&&!o
else u=!0
if(u)a2.e3(D.eYW,0.1,2.941592653589793,!1,C.it(a3.c,2.2))
s.restore()
u=-56*q
o=a4.Q
if(o==null)o=D.a78
n=25*q
k=23*q
i=9*q
C.hm6(a2,new A.t(p*q+2,u),o,n,k,-1,v,a0,i)
o=a4.as
p=o==null?D.Dz:o
C.hm6(a2,new A.t(m*q-2,u),p,n,k,1,v,a0,i)
if(a4.at){a2.bo(D.egA,D.egw,C.it(D.ahl,4))
a2.bo(D.egy,D.egu,C.it(D.Fw.j(0.7),1.4))
u=A.I()
u.r=B.cI.gp(0)
a2.ad(D.egx,5,u)}s.restore()
u=a4.w
p=a4.e
o=a4.r
J.bm(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a2.ie(0,a4.f)
a2.bW(0,r)
C.hX8(a2,a3,a4,a5,a6,a0,a1,w)
s.restore()},
hm6(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aF(0,e),r=s.gcH(),q=r===0?B.i6:s.eT(0,r),p=B.k.E(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.t(o,w)
if(o*i<0)v=new A.t(-o,-w)
u=e.a8(0,q.aI(0,n)).a8(0,v.aI(0,m))
t=e.a8(0,q.aI(0,p))
d.bo(e,u,C.it(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.bo(e,u,C.it(o,l*0.35))
d.bo(u,t,C.it(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.bo(u,t,C.it(o,l*0.22))
$.S()
o=A.I()
o.r=j.gp(0)
d.ad(u,l*0.55,o)
o=A.bJ(t,l*1.15,l)
w=A.I()
w.r=k.gp(0)
d.dO(o,w)
w=-l
w=t.a8(0,new A.t(i*w*0.45,w*0.1))
o=A.I()
o.r=k.gp(0)
d.ad(w,l*0.28,o)},
hX8(c3,c4,c5,c6,c7,c8,c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1=c4.d,c2=c4.e
if(c2===3||c2===4){w=A.bJ(B.uU,40,38)
$.S()
v=A.I()
v.r=c1.gp(0)
c3.dO(w,v)}if(c2===4){$.S()
w=A.I()
w.r=c1.gp(0)
c3.ad(D.eit,9.5,w)
w=A.I()
w.r=c1.gp(0)
c3.ad(D.efp,9.5,w)}w=A.bJ(D.ejG,10,6)
v=$.S()
u=A.I()
u.r=c9.gp(0)
c3.dO(w,u)
u=A.bJ(D.ehW,10,6)
w=A.I()
w.r=c9.gp(0)
c3.dO(u,w)
v=v.r
w=x.v
t=new A.aF(v,B.ag,c0,c0,A.a([],w))
t.D(new A.aX(0,-20))
t.D(new A.kX(13,-20,17,-9,16,2))
t.D(new A.kX(15,13,8,20,0,20))
t.D(new A.kX(-8,20,-15,13,-16,2))
t.D(new A.kX(-17,-9,-13,-20,0,-20))
t.D(new A.bs())
u=A.I()
u.sam(A.tn(D.ej9,28,A.a([d0,c8,c9],x.O),A.a([0,0.55,1],x.n),B.x,c0,c0,0))
c3.aG(t,u)
u=c4.r
if(u){s=C.it(c9.j(0.5),0.8)
c3.e3(D.f_2,3.455751918948773,2.5132741228718345,!1,s)
c3.e3(D.eYG,3.455751918948773,2.5132741228718345,!1,s)
c3.bo(D.eiq,D.eie,s)
c3.bo(D.efl,D.efd,s)
c3.e3(D.eYV,2.2,1.4,!1,s)
c3.e3(D.eYE,-0.4,1.4,!1,s)}switch(c2){case 0:for(r=c3.a,q=0;q<16;++q){p=3.141592653589793*(1.02+0.96*q/15)
o=Math.cos(p)
n=Math.sin(p)
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=c1.gp(0)
l=m.G()
r.drawCircle(o*14.5,-3+n*17.5,4.3,l)
l.delete()}r=A.I()
r.r=c1.gp(0)
c3.e3(D.eZ8,3.141592653589793,3.141592653589793,!0,r)
break
case 1:r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aX(-15,-11))
r.D(new A.c4(0,-30,15,-11))
r.D(new A.aq(13,-6))
r.D(new A.c4(0,-12,-13,-6))
r.D(new A.bs())
o=A.I()
o.r=c4.c.gp(0)
c3.aG(r,o)
c3.bo(D.eif,D.efe,C.it(F.n6,1.4))
o=A.I()
o.r=c1.gp(0)
c3.ad(D.eiw,3,o)
o=A.I()
o.r=c1.gp(0)
c3.ad(D.efq,3,o)
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aX(-13,6))
o.D(new A.c4(-12,22,0,26))
o.D(new A.c4(12,22,13,6))
o.D(new A.c4(8,13,0,12))
o.D(new A.c4(-8,13,-13,6))
o.D(new A.bs())
r=A.I()
r.r=B.iu.gp(0)
c3.aG(o,r)
r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aX(-7,8))
r.D(new A.c4(0,6,7,8))
r.D(new A.c4(0,10.5,-7,8))
o=A.I()
o.r=B.bO.gp(0)
c3.aG(r,o)
break
case 2:k=c4.y
if(k==null)k=c4.b
r=new A.aF(v,B.ag,c0,c0,A.a([],w))
r.D(new A.aX(-17,-4))
r.D(new A.c4(-20,-27,0,-29))
r.D(new A.c4(20,-27,17,-4))
r.D(new A.c4(0,-14,-17,-4))
r.D(new A.bs())
o=A.I()
o.r=k.gp(0)
c3.aG(r,o)
o=A.ar(k,B.w,0.3)
o.toString
c3.e3(D.eZf,3.4,2.5,!1,C.it(o,1.4))
o=A.ar(k,B.c,0.3)
o.toString
c3.e3(D.eZ2,3.6,2.2,!1,C.it(o,1.2))
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aX(11,-22))
o.D(new A.c4(27,-34,25,-19))
o.D(new A.c4(18,-18,11,-22))
r=A.ar(k,B.c,0.1)
r.toString
n=A.I()
n.r=r.gp(0)
c3.aG(o,n)
n=new A.aF(v,B.ag,c0,c0,A.a([],w))
n.D(new A.aX(11,-22))
n.D(new A.c4(24,-12,27,-26))
n.D(new A.c4(18,-22,11,-22))
o=A.ar(k,B.w,0.2)
o.toString
r=A.I()
r.r=o.gp(0)
c3.aG(n,r)
r=A.I()
r.r=c4.c.gp(0)
c3.ad(D.eff,3,r)
break
case 3:r=A.I()
r.r=c1.gp(0)
c3.e3(D.eZc,3.204424506661589,3.015928947446201,!0,r)
for(r=c3.a,q=-3;q<=3;++q){o=A.ar(c1,B.c,0.18)
o.toString
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.aa
n.c=0.9
n.r=o.gp(0)
n.d=B.bE
n.e=B.dT
l=n.G()
r.drawLine.apply(r,[q*3.6,-19+Math.abs(q)*0.8,q*4.6,-4,l])
l.delete()}for(o=c4.c,j=0;j<2;++j){i=D.dl8[j]
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.aa
n.c=4.5
n.r=c1.gp(0)
n.d=B.bE
n.e=B.dT
l=n.G()
r.drawLine.apply(r,[i,0,i*1.12,22,l])
l.delete()
for(h=0;h<3;++h){n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.r=o.gp(0)
l=n.G()
r.drawCircle(i*(1+h*0.04),7+h*6.5,1.8,l)
l.delete()}}break
case 4:r=A.I()
r.r=c1.gp(0)
c3.e3(D.eZb,3.204424506661589,3.015928947446201,!0,r)
r=A.ar(c1,B.c,0.25)
r.toString
c3.bo(F.a7_,F.a6Z,C.it(r,1))
break
default:r=A.I()
r.r=c1.gp(0)
c3.e3(D.eYH,3.267256359733385,2.8902652413026098,!0,r)}g=B.k.E(c5.b,0,1)*0.4+0.1
r=A.bJ(D.ejs,5,8)
o=D.adZ.j(g)
n=A.I()
n.r=o.gp(0)
c3.dO(r,n)
n=A.bJ(D.ei7,5,8)
r=D.adZ.j(g)
o=A.I()
o.r=r.gp(0)
c3.dO(n,o)
f=c5.e*2.4
o=new A.aF(v,B.ag,c0,c0,A.a([],w))
o.D(new A.aX(f-0.6,-2))
o.D(new A.c4(f-3.4,6,f-2.6,7.4))
o.D(new A.c4(f,8.8,f+2.6,7.4))
c3.aG(o,C.it(c9.j(0.75),1.1))
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
for(r=c3.a,o=d<0.15,n=c4.f,m=d>0.12,a0=2.5*d,a1=a0*2,a2=a0*2.2,j=0;j<2;++j){a3=G.hx[j]
a4=c5.e
a5=a3>0?0.7:1
a6=a3*6.4+a4*2*a5
if(m){a4=Math.max(0.6,a1)
a5=A.bJ(new A.t(a6,-3),a4,7)
a7=new A.ap(B.R,B.N,B.U,B.V,B.S)
a7.r=B.c.j(0.96).gp(0)
l=a7.G()
r.drawOval(A.bF(a5),l)
l.delete()
a8=a6+c5.y*1.5
a9=-3+c5.z*0.7
J.bm(r.save())
a5=A.a([],w)
a7=new A.aF(v,B.ag,c0,c0,a5)
a5.push(new A.jE(A.bJ(new A.t(a6,-3),a4,7)))
a4=a7.gbw().a.snapshot()
a4=a7.e=new A.cl(a4)
r.clipPath(a4.a,$.ny(),!0)
a4=new A.ap(B.R,B.N,B.U,B.V,B.S)
a4.r=D.bfU.gp(0)
l=a4.G()
r.drawCircle(a8,a9,2.1,l)
l.delete()
a4=new A.ap(B.R,B.N,B.U,B.V,B.S)
a4.r=B.w.gp(0)
l=a4.G()
r.drawCircle(a8,a9,1.05,l)
l.delete()
a4=new A.ap(B.R,B.N,B.U,B.V,B.S)
a4.r=B.c.gp(0)
l=a4.G()
r.drawCircle(a8-0.7,a9-0.7,0.55,l)
l.delete()
r.restore()}a4=n?D.Y6:c9.j(0.9)
a5=n?1.5:1.1
b0=new A.ap(B.R,B.N,B.U,B.V,B.S)
b0.b=B.aa
b0.c=a5
b0.r=a4.gp(0)
b0.d=B.bE
b0.e=B.dT
a4=o?0.8:0
a4=A.bJ(new A.t(a6,-3+a4),Math.max(1.2,a2),7.3500000000000005)
l=b0.G()
r.drawArc.apply(r,[A.bF(a4),189,162,!1,l])
l.delete()
a4=c5.c
b1=-9.2-a4*2.2
a5=a3*3.6
a7=a4<0?-a4*1.6:0
a4=a4>0?a4*0.6:0
if(u)b2=B.e4
else{b2=A.ar(c1,B.w,0.2)
b2.toString}b3=new A.ap(B.R,B.N,B.U,B.V,B.S)
b3.b=B.aa
b3.c=1.7
b3.r=b2.gp(0)
b3.d=B.bE
b3.e=B.dT
l=b3.G()
r.drawLine.apply(r,[a6-a5,b1-a7+0.4,a6+a5,b1-0.6-a4,l])
l.delete()}b4=B.k.E(c5.a,0,1)
if(n)b5=D.bpC
else{u=A.ar(c9,D.bjr,0.6)
u.toString
b5=u}b6=c5.b
if(b4>0.06){b7=5+B.k.E(b6,0,1)*2.2
b8=1.2+b4*6.5
b9=new A.aF(v,B.ag,c0,c0,A.a([],w))
w=-b7
b9.D(new A.aX(w,11.5))
b9.D(new A.c4(0,11.5+b8*0.2-c5.b*1.5,b7,11.5))
b9.D(new A.c4(0,11.5+b8*1.5+c5.b*1.5,w,11.5))
b9.D(new A.bs())
v=A.I()
v.r=D.biM.gp(0)
c3.aG(b9,v)
J.bm(r.save())
c3.mE(0,b9)
v=B.c.j(0.95)
u=A.I()
u.r=v.gp(0)
c3.aP(new A.a3(w,11,w+b7*2,13.2),u)
u=A.bJ(new A.t(0,11.5+b8*1.1),b8*0.9,b7*1.4)
w=A.I()
w.r=D.bpH.gp(0)
c3.dO(u,w)
r.restore()
c3.aG(b9,C.it(b5,1.1))}else{u=new A.aF(v,B.ag,c0,c0,A.a([],w))
r=11.5-b6*0.8
u.D(new A.aX(-5.2,r))
u.D(new A.c4(0,13.1+b6*2.8,5.2,r))
c3.aG(u,C.it(b5,1.5))
if(b6>0.6){w=new A.aF(v,B.ag,c0,c0,A.a([],w))
w.D(new A.aX(-4.6,11.8))
w.D(new A.c4(0,15.1+b6*1.4,4.6,11.8))
w.D(new A.c4(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.I()
u.r=v.gp(0)
c3.aG(w,u)}}if(c5.b>0.2){c3.e3(D.eYU,-1.2,2.2,!1,C.it(c9.j(0.5),0.8))
c3.e3(D.eYJ,2.141592653589793,2.2,!1,C.it(c9.j(0.5),0.8))}if(n&&c2!==2){c2=c4.c
w=A.I()
w.r=c2.gp(0)
c3.ad(D.ehP,1.7,w)
w=A.I()
w.r=c2.gp(0)
c3.ad(D.ehL,1.7,w)}},
i1z(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S(),e=new A.oX(),d=A.z4(e,g),a0=a4.a,a1=a4.b,a2=Math.min(a0/450,a1/900),a3=A.I()
a3.sam(A.jo(B.I,new A.t(0,a1*0.46),D.d46,D.cWT,B.x,g))
d.aP(new A.a3(0,0,0+a0,0+a1),a3)
a3=d.a
J.bm(a3.save())
a3.translate((a0-450*a2)/2,(a1-900*a2)/2)
d.bW(0,a2)
w=new A.e9()
w.d3(8)
for(v=0;v<120;++v){a0=w.ah()
a1=w.ah()
u=w.ah()
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=B.c.j(0.2+w.ah()*0.5).gp(0)
s=t.G()
a3.drawCircle(a0*450*1.4-90,a1*330-40,0.5+u*0.9,s)
s.delete()}J.bm(a3.save())
a3.translate(200,120)
d.ie(0,-0.5)
a0=A.I()
a1=x.O
a0.sam(A.tn(B.I,230,A.a([D.beH,B.K],a1),g,B.x,g,g,0))
d.dO(D.eZp,a0)
a3.restore()
a0=A.I()
a0.sam(A.tn(D.a77,58,A.a([D.bhS,B.K],a1),g,B.x,g,g,0))
d.ad(D.a77,58,a0)
a0=A.I()
a0.r=D.bdp.gp(0)
d.ad(D.a77,24,a0)
a0=A.I()
a0.r=D.Yu.gp(0)
d.ad(D.eg9,5,a0)
a0=A.I()
a0.r=D.Yu.gp(0)
d.ad(D.egd,3.4,a0)
a0=A.I()
a0.r=D.Yu.gp(0)
d.ad(D.egc,2.4,a0)
for(a0=x.v,r=0;r<3;++r,f=u){u=A.a([],a0)
q=new A.aF(f.r,B.ag,g,g,u)
u.push(new A.aX(-60,420))
for(f=372+r*12,t=60+r*20,p=r*2,o=14-r*3,n=-60;n<=510;n+=8){m=new A.aq(n,f+Math.sin(n/t+p)*o+Math.sin(n/23+r)*3)
u.push(m)
l=q.f
if(l!=null)m.by(l)
m=q.e
if(m!=null)m.a.delete()
q.e=null}f=new A.aq(510,470)
u.push(f)
t=q.f
if(t!=null)f.by(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.aq(-60,470)
u.push(f)
t=q.f
if(t!=null)f.by(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.bs()
u.push(f)
u=q.f
if(u!=null)f.by(u)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=[D.bc2,D.bdZ,D.bjK][r]
u=$.S()
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=f.gp(0)
s=t.G()
f=q.e
a3.drawPath((f==null?q.e=new A.cl(q.gbw().a.snapshot()):f).a,s)
s.delete()}for(k=0;k<4;++k){n=D.cr1[k]
j=384+B.o.F(n,11)
f=n-2
a0=j-24
u=new A.ap(B.R,B.N,B.U,B.V,B.S)
u.b=B.aa
u.c=2.4
u.r=D.YL.gp(0)
u.d=B.bE
u.e=B.dT
s=u.G()
a3.drawLine.apply(a3,[n,j,f,a0,s])
s.delete()
f=A.bJ(new A.t(f,j-27),11,46)
u=new A.ap(B.R,B.N,B.U,B.V,B.S)
u.r=D.YL.gp(0)
s=u.G()
a3.drawOval(A.bF(f),s)
s.delete()
a0=A.bJ(new A.t(n-12,a0),8,24)
f=new A.ap(B.R,B.N,B.U,B.V,B.S)
f.r=D.YL.gp(0)
s=f.G()
a3.drawOval(A.bF(a0),s)
s.delete()}for(v=0;v<9;++v){f=B.o.F(v,3)
a0=B.o.F(v,4)
u=new A.ap(B.R,B.N,B.U,B.V,B.S)
u.r=D.bds.j(0.8).gp(0)
s=u.G()
a3.drawCircle(20+v*52+f*7,400+a0*5,1.2,s)
s.delete()}f=A.I()
f.sam(A.jo(D.eeN,D.eeP,D.cYN,B.HW,B.x,g))
d.aP(new A.a3(-200,412,650,1300),f)
i=new A.e9()
i.d3(21)
for(v=0;v<260;++v){f=i.ah()
j=420+i.ah()*480
a0=i.ah()
u=j/900+0.4
u=A.bJ(new A.t(f*450,j),1+i.ah()*2*u,1.5+a0*4*u)
f=i.hh()?B.c:B.w
a0=new A.ap(B.R,B.N,B.U,B.V,B.S)
a0.r=f.j(0.06+i.ah()*0.06).gp(0)
s=a0.G()
a3.drawOval(A.bF(u),s)
s.delete()}J.bm(a3.save())
a3.translate(225,590)
d.p0(0,1,0.34)
f=A.I()
f.sam(A.tn(B.I,250,A.a([D.bkC,D.bek,D.bms],a1),A.a([0,0.8,1],x.n),B.x,g,g,0))
d.ad(B.I,250,f)
a3.restore()
for(v=0;v<40;++v){n=i.ah()*450
j=640+i.ah()*260
f=i.ah()
a0=A.ar(D.agb,D.bcX,i.ah())
a0.toString
for(f=j-(6+f*10),h=-1;h<=1;++h){$.S()
a1=new A.ap(B.R,B.N,B.U,B.V,B.S)
a1.b=B.aa
a1.c=1.3
a1.r=a0.gp(0)
a1.d=B.bE
a1.e=B.dT
s=a1.G()
a3.drawLine.apply(a3,[n+h*2,j,n+h*5,f+Math.abs(h)*3,s])
s.delete()}}C.hVt(d)
for(k=0;k<3;++k)C.hYD(d,D.axP[k])
C.hYs(d,D.eg3)
for(n=118;n<190;n+=11){f=B.o.F(n,3)
a0=B.o.F(n,4)
$.S()
a1=new A.ap(B.R,B.N,B.U,B.V,B.S)
a1.b=B.aa
a1.c=2.4
a1.r=D.YH.gp(0)
a1.d=B.bE
a1.e=B.dT
s=a1.G()
a3.drawLine.apply(a3,[n,452+f,n+1,436+a0,s])
s.delete()}d.bo(D.efc,D.efu,C.it(D.bdG,1.6))
a3.restore()
return e.ne()},
hVt(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S().r,e=x.v,d=new A.aF(f,B.ag,g,g,A.a([],e))
d.D(new A.aX(358,462))
d.D(new A.kX(354,422,370,382,374,332))
d.D(new A.aq(410,332))
d.D(new A.kX(416,382,432,422,428,462))
d.D(new A.bs())
w=A.I()
w.sam(A.jo(new A.t(354,0),new A.t(430,0),D.dra,Q.zh,B.x,g))
a0.aG(d,w)
v=new A.e9()
v.d3(4)
for(w=a0.a,u=0;u<30;++u){t=364+v.ah()*56
s=462-v.ah()*126
r=v.ah()
q=v.ah()
p=B.w.j(0.18)
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.b=B.aa
o.c=1.1
o.r=p.gp(0)
o.d=B.bE
o.e=B.dT
n=o.G()
w.drawLine.apply(w,[t,s,t+r*3-1.5,s+8+q*12,n])
n.delete()}for(m=0;m<6;++m){l=D.d8D[m]
r=l.a
q=392+r*12
p=-l.b
o=q+r*52
k=336+(p*46-8)
r=o+r*42
p=k+(p*34+4)
j=A.a([],e)
i=new A.aF(f,B.ag,g,g,j)
j.push(new A.aX(q,336))
j.push(new A.c4(o,k,r,p))
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.b=B.aa
q.c=8
q.r=D.aeF.gp(0)
q.d=B.bE
q.e=B.dT
n=q.G()
q=i.gbw().a.snapshot()
w.drawPath((i.e=new A.cl(q)).a,n)
n.delete()
for(h=0;h<6;++h){q=v.ah()
o=v.ah()
k=v.ah()
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=A.ar(D.bdy,D.bjJ,v.ah()).j(0.92).gp(0)
n=j.G()
w.drawCircle(r+(q*36-18),p+(o*18-14),8+k*7,n)
n.delete()}r+=0
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.b=B.aa
q.c=1.2
q.r=D.YH.gp(0)
q.d=B.bE
q.e=B.dT
n=q.G()
w.drawLine.apply(w,[r,p+8,r,p+22,n])
n.delete()
p=A.bJ(new A.t(r,p+28),13,7)
r=new A.ap(B.R,B.N,B.U,B.V,B.S)
r.r=D.bkU.gp(0)
n=r.G()
w.drawOval(A.bF(p),n)
n.delete()}},
hYD(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b4.a,a5=b4.b,a6=b4.c,a7=b4.d,a8=a6*0.5,a9=A.bJ(new A.t(a4,a5+2),a8,a6*2.8),b0=B.w.j(0.3),b1=$.S(),b2=A.I()
b2.r=b0.gp(0)
b3.dO(a9,b2)
b1=b1.r
b2=x.v
w=new A.aF(b1,B.ag,a3,a3,A.a([],b2))
a9=a4-a6
b0=a5-a7
w.D(new A.aX(a9,b0))
w.D(new A.aq(a9,a5))
v=a4+a6
w.D(new A.c4(a4,a5+a6*0.22,v,a5))
w.D(new A.aq(v,b0))
w.D(new A.bs())
u=A.I()
u.sam(A.jo(new A.t(a9,0),new A.t(v,0),D.d8J,Q.zh,B.x,a3))
b3.aG(w,u)
t=new A.e9()
t.d3(B.o.V(a4*7))
v=b3.a
J.bm(v.save())
b3.mE(0,w)
for(s=0;s<40;++s){r=a9+t.ah()*a6*2
q=b0+t.ah()*a7
u=t.ah()
p=t.ah()
o=B.w.j(0.14)
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.aa
n.c=1
n.r=o.gp(0)
n.d=B.bE
n.e=B.dT
m=n.G()
v.drawLine.apply(v,[r,q,r+4+u*5,q+p*2-1,m])
m.delete()}u=b0+5
p=a6*2
o=D.ag7.j(0.75)
n=A.I()
n.r=o.gp(0)
b3.aP(new A.a3(a9,u,a9+p,u+7),n)
for(u=a6/5,o=b0+12,n=b0+20,l=a9+2,k=0;k<B.k.bh(u);++k){j=l+k*10
i=A.a([],b2)
h=new A.aF(b1,B.ag,a3,a3,i)
i.push(new A.aX(j,o))
i.push(new A.aq(j+5,n))
i.push(new A.aq(j+10,o))
i.push(new A.bs())
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.r=D.lr.j(0.85).gp(0)
m=i.G()
i=h.gbw().a.snapshot()
v.drawPath((h.e=new A.cl(i)).a,m)
m.delete()}u=A.a([],b2)
g=new A.aF(b1,B.ag,a3,a3,u)
b1=a5-8
g.D(new A.aX(a9,b1))
for(p/=6,k=0;k<=B.k.bh(p);++k){o=(k&1)===0?0:-5
o=new A.aq(a9+k*6,b1+o)
u.push(o)
n=g.f
if(n!=null)o.by(n)
o=g.e
if(o!=null)o.a.delete()
g.e=null}b3.aG(g,C.it(D.ag7.j(0.7),1.6))
v.restore()
a9=$.S().r
b1=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
u=a6*0.1
p=a4+u
o=a6*0.28
n=p-o
l=a5+1
b1.D(new A.aX(n,l))
i=a5-a7*0.55
b1.D(new A.aq(n,i))
o=p+o
b1.D(new A.c4(p,a5-a7*0.82,o,i))
b1.D(new A.aq(o,l))
b1.D(new A.bs())
l=A.I()
l.r=D.agi.gp(0)
b3.aG(b1,l)
l=A.I()
l.r=D.agi.gp(0)
b3.ad(new A.t(a4-a6*0.62,a5-a7*0.5),u,l)
l=b4.e
u=b0-l
b1=a6*1.38
o=a4-b1
i=b0+4
p=a4+b1
f=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
f.D(new A.aX(o,i))
n=b0-l*0.55
f.D(new A.c4(a4-a8,n,a4,u))
f.D(new A.c4(a4+a8,n,p,i))
f.D(new A.c4(a4,b0+a6*0.34,o,i))
f.D(new A.bs())
b0=A.I()
n=a6*1.4
b0.sam(A.jo(new A.t(a4-n,0),new A.t(a4+n,0),D.dc8,Q.zh,B.x,a3))
b3.aG(f,b0)
J.bm(v.save())
b3.mE(0,f)
for(a8=p-o,s=0;s<70;++s){e=s/69
b0=Math.sin(e*3.141592653589793)
p=t.ah()
n=(t.hh()?B.w:D.bd5).j(0.16)
h=new A.ap(B.R,B.N,B.U,B.V,B.S)
h.b=B.aa
h.c=0.9
h.r=n.gp(0)
h.d=B.bE
h.e=B.dT
m=h.G()
v.drawLine.apply(v,[a4+(p-0.5)*3,u,o+a8*e,i+b0*a6*0.3,m])
m.delete()}for(k=1;k<5;++k){d=u+l*k/4.6
a0=b1*k/4.6
b0=A.a([],b2)
p=new A.aF(a9,B.ag,a3,a3,b0)
n=d+2
b0.push(new A.aX(a4-a0,n))
b0.push(new A.c4(a4,d+7+k*1.5,a4+a0,n))
b0=B.w.j(0.22)
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.aa
n.c=1.2
n.r=b0.gp(0)
n.d=B.bE
n.e=B.dT
m=n.G()
b0=p.gbw().a.snapshot()
v.drawPath((p.e=new A.cl(b0)).a,m)
m.delete()}v.restore()
for(s=0;s<46;++s){e=s/45
a1=o+a8*e
a2=i+Math.sin(e*3.141592653589793)*a6*0.3
b0=t.ah()
b1=t.ah()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.b=B.aa
p.c=1.1
p.r=D.bk5.gp(0)
p.d=B.bE
p.e=B.dT
m=p.G()
v.drawLine.apply(v,[a1,a2,a1+(b0-0.5)*2,a2+3+b1*4,m])
m.delete()}a8=new A.aF(a9,B.ag,a3,a3,A.a([],b2))
a9=u+4
a8.D(new A.aX(a4-2.5,a9))
a8.D(new A.aq(a4,u-7))
a8.D(new A.aq(a4+2.5,a9))
a8.D(new A.bs())
a9=A.I()
a9.r=D.bgp.gp(0)
b3.aG(a8,a9)},
hYs(d,e){var w,v,u,t,s,r,q,p,o
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=d.a,r=0;r<2;++r){q=w+D.dl5[r]
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.b=B.aa
p.c=3
p.r=D.YH.gp(0)
p.d=B.bE
p.e=B.dT
o=p.G()
s.drawLine.apply(s,[q,u,q,t,o])
o.delete()}u=A.bJ(e.a8(0,F.aIZ),24,36)
t=$.S()
s=A.I()
s.r=D.boS.gp(0)
d.dO(u,s)
t=new A.aF(t.r,B.ag,null,null,A.a([],x.v))
s=w-24
u=v-30
t.D(new A.aX(s,u))
t.D(new A.aq(w,v-54))
t.D(new A.aq(w+24,u))
t.D(new A.c4(w,v-24,s,u))
t.D(new A.bs())
u=A.I()
u.r=D.afg.gp(0)
d.aG(t,u)},
hXN(d){switch(B.o.F(d,8)){case 0:return D.aY4
case 1:return D.aY2
case 2:return D.aY1
case 3:return D.aY0
case 4:return D.aY3
case 5:return D.aY5
case 6:return D.hjw
default:return D.hjv}},
RS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bnw()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a78:j
w.as=k==null?D.Dz:k
C.hpR(d,e,p,C.hXN(m),w,s,m,l)},
hrd(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bR2:function bR2(){var _=this
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
rX:function rX(d,e,f,g,h,i,j,k,l,m){var _=this
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
bnw:function bnw(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
alh:function alh(){this.b=this.a=null},
aVc:function aVc(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bQV:function bQV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQW:function bQW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQX:function bQX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQY:function bQY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQZ:function bQZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bR_:function bR_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bR0:function bR0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bR1:function bR1(){},
bQU:function bQU(d){this.a=d},
af3:function af3(d,e){this.a=d
this.b=e},
ad2:function ad2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Mr(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bPE(s)
s.bz1(d)
return s},
Gu(d,e,f,g,h,i,j){var w,v=A.T(g).k("Z<1>")
v=A.df(new A.Z(g,new C.fmn(f),v),v.k("L.E"))
w=A.C(v,A.a6(v).k("ct.E"))
B.d.dZ(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.d0(w,0,A.dA(3,"count",x.S),A.T(w).c))
B.d.dZ(v,d)
return new C.lh(e,v,B.d.cu(v,f),h,i,"tree",j)},
ii_(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.U(c0,x.cg),c2=new C.fW4(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.k3(c4,c0)
t=A.C(c4,A.a6(c4).k("ct.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.k3(c4,c0)
r=A.C(c4,A.a6(c4).k("ct.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.k3(c4,c0)
q=A.C(c4,A.a6(c4).k("ct.E"))
for(c4=w.length,v=A.T(t).k("Z<1>"),s=v.k("L.E"),p=A.T(w).k("Z<1>"),o=p.k("L.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.M)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.w0)g="father"
else g=h===D.oe?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Z(t,new C.fW6(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Gu(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Z(w,new C.fW7(i,m),p),o)
B.d.dZ(d,c6)
c2.$2(b4,new C.lh("True or false: "+h+" is the "+g+" of "+l+".",D.ayQ,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lh("True or false: "+B.a.i(B.d.gI(d).b)+" is the "+g+" of "+l+".",D.ayQ,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.FO(m)
h=a0.length
if(h!==0){a1=a0[c6.au(h)]
h=B.a.i(a1.b)
f=A.C(new A.Z(t,new C.fW8(l,a0,c5),v),s)
e=a1.c
if(e===D.w0)e="son"
else e=e===D.oe?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Gu(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eC([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.ml(a5,a5.r,f.k("ml<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Gu(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gI(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("jx<1>"),a3=new A.jx(a0,1,b3,a2),a3.pe(a0,1,b3,e.c),a3=new A.bR(a3,a3.gL(0),a2.k("bR<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Gu(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gI(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gI(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.aqb(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Z(t,new C.fW9(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.Gu(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Z(t,new C.fWa(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.w0
if(e)a2=b7
else a2=f===D.oe?b8:b9
if(e)f=b7
else f=f===D.oe?b8:b9
c2.$2("grand",C.Gu(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aLi(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.au(k)].b)
j=A.C(new A.Z(t,new C.fWb(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Gu(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cJB)
h=l+" was born in "+k
c2.$2("place",C.Gu(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.cZO)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Gu(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.M)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Gu(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cB(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jW(b1,b3,b3)
c2.$2("year",C.Gu(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bCl(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Mr(d),l=new A.e9()
l.d3(f)
w=C.ii_(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.h9S(v.d,l)
v=A.a6(w).k("cv<1>")
u=A.C(new A.cv(w,v),v.k("L.E"))
B.d.dZ(u,l)
t=A.a([],x.J)
s=A.aY(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.b3(u,new C.fyS(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.M)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.M(0,J.r(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.r(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.awS,x.df)
B.d.dZ(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.M)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hpY(o,l))}}else if(!g&&v>3){o=C.hpY(D.awS[l.au(14)],l)
t[t.length-1-l.au(3)]=o}return t},
hpY(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.dZ(w,e)
return new C.lh(d.a,w,B.d.cu(w,v),d.d,d.e,d.f,d.r)},
huE(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Mr(a2),a1=new A.e9()
a1.d3(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
if(a0.FO(q).length>=2)u.push(q)}B.d.dZ(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.M)(u),++r){n=u[r]
m=a0.FO(n)
l=A.T(m)
k=new A.jx(m,0,5,l.k("jx<1>"))
k.pe(m,0,5,l.c)
j=k.dm(0)
if(new A.N(j,new C.fMU(),A.T(j).k("N<1,H>")).fH(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.M)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.M)(j),++i)g.push(C.aQY(a0,j[i]))
w.push(new C.at6("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.U(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
J.cc(e.c3(0,a0.alF(q),new C.fMV()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cv<1>")
d=A.C(new A.cv(e,t),t.k("L.E"))
B.d.fd(d)
v=A.a([],v)
for(u=A.d0(d,0,A.dA(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bR(u,u.gL(0),t.k("bR<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cD(s)
m.dZ(s,a1)
v.push(m.gI(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.M)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.M)(v),++r)s.push(C.aQY(a0,v[r]))
w.push(new C.at6("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aPr(d){return B.d.an2(D.azk,new C.fvj(d))},
i8a(d){return A.pQ(new A.Z(D.azk,new C.fBu(d),x.av))},
bQs(d){return C.hDY(d)},
hDY(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bQs=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bQs)
case 7:r=f
q=B.a.i(d)
q=A.eA(J.r(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bQs,v)},
Bq(d,e){return C.hDV(d,e)},
hDV(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$Bq=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Bq)
case 7:r=g
p=B.a.i(d)
o=A.eA(J.r(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.ar("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$Bq)
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
return A.i($async$Bq,v)},
bQr(d,e,f){return C.hDW(d,e,f)},
hDW(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bQr=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bQr)
case 7:r=h
q=B.a.i(d)
q=A.eA(J.r(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bQr,v)},
Br(d,e,f,g){return C.hDX(d,e,f,g)},
hDX(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$Br=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Br)
case 7:r=i
p=B.a.i(d)
o=A.eA(J.r(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.ar("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$Br)
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
return A.i($async$Br,v)},
bEC(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
fY5(d,e,f,g){return new C.ajX(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hC3(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aW(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cv)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.d0(w,0,A.dA(4,"count",x.S),u).dm(0)
B.d.v(w,A.c3(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.k.N(v)
v=B.o.E(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.k.N(u)
return C.fY5(w,v,B.o.E(u==null?20:u,5,60),t)},
haV(d){var w,v,u,t,s,r,q=J.a5(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aW(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cv)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gR(q)
if(u.b(r))v.push(C.hC3(A.a2(r,t,s)))}return new C.Mc(p,w,v)},
h5l(d){var w,v=A.a([],x.c)
for(w=J.aW(d.z);w.C();)v.push(C.haV(w.gR(w)))
return v},
aQY(d,e){var w=e.c===D.oe
if(d.alF(e)===0&&d.FO(e).length!==0)return w?0:1
if(d.FO(e).length!==0||d.aqb(e)!=null)return w?2:3
return w?4:5},
hvK(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Mr(a4),a3=new A.e9()
a3.d3(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.dZ(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.M)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("L.E"),q=0;q<u.length;u.length===v||(0,A.M)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.FO(m)
g=a2.aqb(m)
f=a2.aLi(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cB(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.w0)k="father"
else k=k===D.oe?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gI(h).b)+".")}if(j!=null){k=j.c
if(k===D.w0)k="father"
else k=k===D.oe?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.dZ(l,a3)
B.d.aY(l,new C.fWu())
d=B.a.i(m.b)
a0=A.C(new A.Z(s,new C.fWv(d),o),n)
B.d.dZ(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.jx(a0,0,3,i.k("jx<1>"))
a1.pe(a0,0,3,i.c)
B.d.v(k,a1)
B.d.dZ(k,a3)
a1=C.aQY(a2,m)
i=new A.jx(l,0,4,p)
i.pe(l,0,4,r)
w.push(new C.b9e(d,a1,i.dm(0),k))
if(w.length>=5)break}return w},
hny(d){return B.a.t(d,"married to")||B.a.t(d," of ")||B.a.a0(d,"My ")?1:0},
huQ(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Mr(a4),a3=new A.e9()
a3.d3(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
if(a2.FO(q).length>=2)u.push(q)}B.d.dZ(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.M)(u),++r){l=u[r]
k=a2.FO(l)
j=A.T(k)
i=new A.jx(k,0,4,j.k("jx<1>"))
i.pe(k,0,4,j.c)
h=i.dm(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.M)(t),++g){q=t[g]
if(q.a!==j&&!B.d.b3(h,new C.fNp(q))&&q.d!==j)i.push(q)}B.d.dZ(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.jx(i,0,k,m)
j.pe(i,0,k,n)
f=j.dm(0)
j=B.a.i(l.b)
k=C.aQY(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.M)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.M)(h),++g)e.push(C.aQY(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.M)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.M)(f),++g)a0.push(C.aQY(a2,f[g]))
w.push(new C.a9c(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lh:function lh(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bPE:function bPE(d){this.b=d
this.c=$},
bPF:function bPF(){},
bPG:function bPG(d){this.a=d},
fmn:function fmn(d){this.a=d},
fW4:function fW4(d){this.a=d},
fW5:function fW5(){},
fW6:function fW6(d){this.a=d},
fW7:function fW7(d,e){this.a=d
this.b=e},
fW8:function fW8(d,e,f){this.a=d
this.b=e
this.c=f},
fW3:function fW3(d,e){this.a=d
this.b=e},
fW9:function fW9(d){this.a=d},
fWa:function fWa(d){this.a=d},
fWb:function fWb(d,e,f){this.a=d
this.b=e
this.c=f},
fW2:function fW2(d,e){this.a=d
this.b=e},
fyS:function fyS(d,e){this.a=d
this.b=e},
at6:function at6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fMU:function fMU(){},
fMV:function fMV(){},
zc:function zc(d,e,f){this.a=d
this.b=e
this.c=f},
fvj:function fvj(d){this.a=d},
fBu:function fBu(d){this.a=d},
ajX:function ajX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bKE:function bKE(){},
Mc:function Mc(d,e,f){this.a=d
this.b=e
this.c=f},
b9e:function b9e(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
fWu:function fWu(){},
fWv:function fWv(d){this.a=d},
a9c:function a9c(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fNp:function fNp(d){this.a=d},
bgs:function bgs(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
af1:function af1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ajb:function ajb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ajc:function ajc(d,e,f,g,h){var _=this
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
_.aa$=h
_.c=_.a=null},
bIS:function bIS(d){this.a=d},
bIN:function bIN(){},
bIT:function bIT(){},
bIL:function bIL(){},
bIM:function bIM(){},
bIR:function bIR(d){this.a=d},
bIO:function bIO(d,e){this.a=d
this.b=e},
bIQ:function bIQ(d,e){this.a=d
this.b=e},
bIP:function bIP(d,e){this.a=d
this.b=e},
bIK:function bIK(d){this.a=d},
bbD:function bbD(d,e){this.b=d
this.a=e},
Q4:function Q4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAr:function aAr(d,e,f){this.b=d
this.c=e
this.a=f},
ayS:function ayS(d,e,f){this.a=d
this.b=e
this.c=f},
atG:function atG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
atH:function atH(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cO$=e
_.b5$=f
_.c=_.a=null},
cms:function cms(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cmt:function cmt(d){this.a=d},
cmr:function cmr(d){this.a=d},
cmu:function cmu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cmv:function cmv(){},
cmw:function cmw(d,e){this.a=d
this.b=e},
cmx:function cmx(){},
cmy:function cmy(d){this.a=d},
cmo:function cmo(d){this.a=d},
cmp:function cmp(d,e){this.a=d
this.b=e},
cmq:function cmq(d,e,f){this.a=d
this.b=e
this.c=f},
cmj:function cmj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cml:function cml(d,e){this.a=d
this.b=e},
cmm:function cmm(d,e){this.a=d
this.b=e},
cmk:function cmk(d,e){this.a=d
this.b=e},
cmi:function cmi(){},
cmn:function cmn(){},
bb7:function bb7(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cLQ:function cLQ(){},
axB:function axB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
axC:function axC(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cBn:function cBn(d){this.a=d},
cBm:function cBm(d){this.a=d},
cBv:function cBv(d,e){this.a=d
this.b=e},
cBw:function cBw(d,e){this.a=d
this.b=e},
cBx:function cBx(d){this.a=d},
cBu:function cBu(d){this.a=d},
cBy:function cBy(d){this.a=d},
cBz:function cBz(d,e){this.a=d
this.b=e},
cBA:function cBA(){},
cBB:function cBB(d){this.a=d},
cBp:function cBp(d){this.a=d},
cBq:function cBq(d,e){this.a=d
this.b=e},
cBo:function cBo(d,e){this.a=d
this.b=e},
cBr:function cBr(){},
cBs:function cBs(){},
cBt:function cBt(d,e){this.a=d
this.b=e},
ayC:function ayC(){},
aFS:function aFS(){},
h3e(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bpO((w-450*u)/2,(v-900*u)/2,u)},
aeQ:function aeQ(){},
f_f:function f_f(d){this.a=d},
aJF:function aJF(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
f9j:function f9j(d){this.a=d},
al7:function al7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
al8:function al8(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.pU$=f
_.LD$=g
_.amb$=h
_.bz$=i
_.aa$=j
_.c=_.a=null},
bQq:function bQq(d){this.a=d},
bQp:function bQp(){},
bQn:function bQn(d){this.a=d},
bQl:function bQl(){},
bQm:function bQm(d){this.a=d},
bQi:function bQi(d,e){this.a=d
this.b=e},
bQj:function bQj(){},
bQk:function bQk(d){this.a=d},
bQo:function bQo(d,e){this.a=d
this.b=e},
bQh:function bQh(d){this.a=d},
brt:function brt(d,e){this.b=d
this.a=e},
f_g:function f_g(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f_h:function f_h(d,e,f){this.a=d
this.b=e
this.c=f},
f_i:function f_i(d,e,f){this.a=d
this.b=e
this.c=f},
f_j:function f_j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f_k:function f_k(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f_l:function f_l(){},
al5:function al5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
al6:function al6(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.pU$=f
_.LD$=g
_.amb$=h
_.bz$=i
_.aa$=j
_.c=_.a=null},
bQ3:function bQ3(){},
bQe:function bQe(d,e){this.a=d
this.b=e},
bQf:function bQf(d){this.a=d},
bQg:function bQg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQa:function bQa(){},
bQ9:function bQ9(d,e){this.a=d
this.b=e},
bQb:function bQb(d,e){this.a=d
this.b=e},
bQc:function bQc(){},
bQd:function bQd(d){this.a=d},
bQ5:function bQ5(d){this.a=d},
bQ6:function bQ6(d){this.a=d},
bQ7:function bQ7(d){this.a=d},
bQ4:function bQ4(d,e){this.a=d
this.b=e},
bQ8:function bQ8(d){this.a=d},
bif:function bif(d,e){this.b=d
this.a=e},
dn9:function dn9(){},
a1f:function a1f(d,e){this.a=d
this.b=e},
al1:function al1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
al2:function al2(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.pU$=e
_.LD$=f
_.amb$=g
_.bz$=h
_.aa$=i
_.c=_.a=null},
bPQ:function bPQ(d){this.a=d},
bPP:function bPP(){},
bPO:function bPO(){},
bPI:function bPI(){},
bPJ:function bPJ(){},
bPN:function bPN(d,e,f){this.a=d
this.b=e
this.c=f},
bPM:function bPM(d){this.a=d},
bPK:function bPK(d,e){this.a=d
this.b=e},
bPL:function bPL(d){this.a=d},
bhG:function bhG(d,e){this.b=d
this.a=e},
aAu:function aAu(){},
bfg:function bfg(){},
aAw:function aAw(){},
bfh:function bfh(){},
aAx:function aAx(){},
bfi:function bfi(){},
ub(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j0,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ac],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aB(u,A.p(u,A.B(v,B.m,u,B.e,B.Q,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.Nv,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hbJ(d,e,f,g,h,i,j){return new C.al3(i,h,d,j,e,f,g,null)},
a5H:function a5H(d,e){this.c=d
this.a=e},
bhO:function bhO(d){this.a=d},
tl:function tl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bPH:function bPH(d){this.a=d},
HW:function HW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Vt:function Vt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bks:function bks(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
dXj:function dXj(d,e){this.a=d
this.b=e},
dXk:function dXk(d){this.a=d},
dXl:function dXl(d,e){this.a=d
this.b=e},
dXh:function dXh(d){this.a=d},
dXi:function dXi(d){this.a=d},
dXg:function dXg(d){this.a=d},
dXe:function dXe(d){this.a=d},
dXf:function dXf(d){this.a=d},
dXd:function dXd(d,e){this.a=d
this.b=e},
dXm:function dXm(d){this.a=d},
dXn:function dXn(d,e){this.a=d
this.b=e},
dXo:function dXo(d,e){this.a=d
this.b=e},
dXp:function dXp(d,e){this.a=d
this.b=e},
dXs:function dXs(d,e){this.a=d
this.b=e},
dXt:function dXt(d,e){this.a=d
this.b=e},
dXu:function dXu(d,e){this.a=d
this.b=e},
dXv:function dXv(d,e){this.a=d
this.b=e},
dXw:function dXw(d,e){this.a=d
this.b=e},
dXx:function dXx(d,e,f){this.a=d
this.b=e
this.c=f},
dXy:function dXy(d,e){this.a=d
this.b=e},
dXz:function dXz(d,e){this.a=d
this.b=e},
dXq:function dXq(d){this.a=d},
dXr:function dXr(d){this.a=d},
a_6:function a_6(d,e){this.a=d
this.b=e},
al3:function al3(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
al4:function al4(d){var _=this
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
bQ1:function bQ1(d){this.a=d},
bQ2:function bQ2(d){this.a=d},
bQ0:function bQ0(d){this.a=d},
bPS:function bPS(d){this.a=d},
bPT:function bPT(d){this.a=d},
bPR:function bPR(d){this.a=d},
bPY:function bPY(d,e,f){this.a=d
this.b=e
this.c=f},
bPZ:function bPZ(d){this.a=d},
bPV:function bPV(d,e){this.a=d
this.b=e},
bPW:function bPW(d,e,f){this.a=d
this.b=e
this.c=f},
bQ_:function bQ_(){},
bPX:function bPX(d,e){this.a=d
this.b=e},
bPU:function bPU(d){this.a=d},
T7:function T7(d,e){this.c=d
this.a=e},
al0:function al0(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bPs:function bPs(d){this.a=d},
bPt:function bPt(d){this.a=d},
bPD:function bPD(){},
bPC:function bPC(d,e,f){this.a=d
this.b=e
this.c=f},
bPx:function bPx(d,e){this.a=d
this.b=e},
bPw:function bPw(d,e){this.a=d
this.b=e},
bPy:function bPy(d){this.a=d},
bPz:function bPz(d,e){this.a=d
this.b=e},
bPA:function bPA(d,e){this.a=d
this.b=e},
bPv:function bPv(d,e){this.a=d
this.b=e},
bPB:function bPB(d,e,f){this.a=d
this.b=e
this.c=f},
bPu:function bPu(d,e){this.a=d
this.b=e},
i6C(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ai5(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.M)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fyo(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("Z<1>"),q=q.k("cQ<1,n>"),o=q.k("L.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.M)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.ys)m.push(l===D.w0?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cB(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cB(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jW(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jW(h,a2,a2)-A.jW(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cQ(new A.Z(a4,new C.fym(u,f),p),new C.fyn(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aq(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i6D(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ai5(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.M)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fyt(v,e)
q=new C.fyr(v)
p=A.U(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.M)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.M)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.M)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.aj(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.aj(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.df(new A.bc(p,d),d.k("L.E"))
n=A.C(d,A.a6(d).k("ct.E"))
B.d.fd(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.M)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.f5(l,new C.fys(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.aj(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hSW(d,e,f,g){var w,v,u=C.i6E(d,e)
if(u<=0||f.length<=u)return new A.aeu(!1,D.CV,f)
if(g.t(0,e.a))return new A.aeu(!1,D.CV,f)
w=A.T(f).c
v=A.d0(f,0,A.dA(u,"count",x.S),w).dm(0)
return new A.aeu(!0,A.d0(f,u,null,w).dm(0),v)},
hSX(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ai5(d3),d2=d1.length
if(d2===0)return D.hgR
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.M)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dcJ(t))}s=new C.dd_(v)
d2=x.dy
r=A.U(w,d2)
q=new C.dcS(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dcR(r)
l=A.U(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cc(l.c3(0,k,new C.dcK()),o)}h=new C.dcQ(s)
g=new C.dcP(l,r)
p=v.$ti.k("bc<2>")
o=p.k("Z<L.E>")
f=A.C(new A.Z(new A.bc(v,p),new C.dcL(h),o),o.k("L.E"))
e=f.length===0?new A.bc(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.M)(f),++u){t=f[u]
a0=g.$2(t.a,A.aY(w))
if(a0>d){d=a0
e=t}}a1=A.aY(w)
p=x.S
a2=A.U(w,p)
a3=A.U(w,w)
a4=A.U(w,d2)
d2=x.i
a5=A.U(w,d2)
a6=A.U(w,x.d9)
a7=A.U(w,d2)
a8=A.a([],x.s)
a9=new C.dcY(new C.dcU(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gal7(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eC([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.M(0,i))break}if(h.$1(b0)&&a2.aj(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.pQ(J.dH(i==null?B.Y:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.dO)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.dcI(a2,new C.dcZ(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.M)(a8),++u){b8=a8[u]
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
d2=b4.$ti.k("cv<1>")
d2=A.C(new A.cv(b4,d2),d2.k("L.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.M)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.G3(o,new A.t(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Km(c5.a,new A.t(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cv<1>")
d2=A.C(new A.cv(b6,d2),d2.k("L.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.M)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bQ(0,new C.dcM(c6,b4))
for(d2=new A.cH(a4,a4.$ti.k("cH<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gR(j)
if(b6.aj(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.t(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.f5(j,new C.dcN(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aY(o,new C.dcO())
c6.push(new C.aJB(new A.t(c9,b4.h(0,c8).b.b+112),B.I,!1,o))}return new C.bfm(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hqC(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cB(d)
return w==null?null:w.b[1]},
hkP(d,e,f,g,h,i,j,k,l,m,n){return new C.a_j(k,f,j,e,l,n,m,d,g,h,i,null)},
aCt(d,e,f,g,h,i,j){return new C.bj2(i,d,e,f,j,h,g,null)},
aq1:function aq1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aE0:function aE0(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dYZ:function dYZ(d){this.a=d},
dYY:function dYY(d){this.a=d},
dZ0:function dZ0(d,e){this.a=d
this.b=e},
dZ1:function dZ1(d,e){this.a=d
this.b=e},
dZ2:function dZ2(d){this.a=d},
dYX:function dYX(d,e){this.a=d
this.b=e},
dZ_:function dZ_(d){this.a=d},
dZ4:function dZ4(d){this.a=d},
dZ3:function dZ3(d,e){this.a=d
this.b=e},
apW:function apW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDY:function aDY(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dYp:function dYp(d){this.a=d},
dYn:function dYn(d){this.a=d},
dYo:function dYo(d){this.a=d},
dYq:function dYq(d,e){this.a=d
this.b=e},
dYk:function dYk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dXM:function dXM(d){this.a=d},
dXN:function dXN(d,e){this.a=d
this.b=e},
dY3:function dY3(d){this.a=d},
dY1:function dY1(d){this.a=d},
dY2:function dY2(d,e){this.a=d
this.b=e},
dY4:function dY4(d){this.a=d},
dY5:function dY5(d,e){this.a=d
this.b=e},
dYj:function dYj(d,e){this.a=d
this.b=e},
dY0:function dY0(d){this.a=d},
dY_:function dY_(d){this.a=d},
dXZ:function dXZ(d,e){this.a=d
this.b=e},
dYg:function dYg(){},
dYh:function dYh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dYf:function dYf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dY9:function dY9(d){this.a=d},
dYa:function dYa(d,e,f){this.a=d
this.b=e
this.c=f},
dY8:function dY8(d,e){this.a=d
this.b=e},
dYb:function dYb(d,e){this.a=d
this.b=e},
dY6:function dY6(d,e){this.a=d
this.b=e},
dY7:function dY7(){},
dYc:function dYc(d,e){this.a=d
this.b=e},
dYd:function dYd(d){this.a=d},
dYe:function dYe(d,e){this.a=d
this.b=e},
dYi:function dYi(d,e){this.a=d
this.b=e},
dXA:function dXA(d,e){this.a=d
this.b=e},
dXB:function dXB(d,e){this.a=d
this.b=e},
dYs:function dYs(d,e,f){this.a=d
this.b=e
this.c=f},
dYm:function dYm(d,e,f){this.a=d
this.b=e
this.c=f},
dYl:function dYl(d){this.a=d},
dXC:function dXC(d){this.a=d},
dXD:function dXD(d){this.a=d},
dXE:function dXE(){},
dXF:function dXF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dXJ:function dXJ(d,e){this.a=d
this.b=e},
dXI:function dXI(d,e){this.a=d
this.b=e},
dXH:function dXH(d){this.a=d},
dXK:function dXK(d,e){this.a=d
this.b=e},
dXG:function dXG(d){this.a=d},
dYr:function dYr(d){this.a=d},
dXW:function dXW(){},
dXX:function dXX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dXV:function dXV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dXR:function dXR(d,e,f){this.a=d
this.b=e
this.c=f},
dXQ:function dXQ(d,e,f){this.a=d
this.b=e
this.c=f},
dXO:function dXO(d,e){this.a=d
this.b=e},
dXS:function dXS(d){this.a=d},
dXT:function dXT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dXP:function dXP(d,e){this.a=d
this.b=e},
dXU:function dXU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dXY:function dXY(d,e){this.a=d
this.b=e},
dYz:function dYz(){},
dYA:function dYA(d,e){this.a=d
this.b=e},
dYB:function dYB(d){this.a=d},
dYC:function dYC(d,e){this.a=d
this.b=e},
dYv:function dYv(d){this.a=d},
dYt:function dYt(d,e){this.a=d
this.b=e},
dYw:function dYw(d,e){this.a=d
this.b=e},
dYx:function dYx(d,e){this.a=d
this.b=e},
dYy:function dYy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dYD:function dYD(d){this.a=d},
dYu:function dYu(d){this.a=d},
dXL:function dXL(d){this.a=d},
bfk:function bfk(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dcG:function dcG(d){this.a=d},
dcF:function dcF(d,e){this.a=d
this.b=e},
dcH:function dcH(d){this.a=d},
dcE:function dcE(d,e){this.a=d
this.b=e},
fyo:function fyo(d,e){this.a=d
this.b=e},
fyp:function fyp(d){this.a=d},
fyq:function fyq(){},
fym:function fym(d,e){this.a=d
this.b=e},
fyn:function fyn(){},
fyt:function fyt(d,e){this.a=d
this.b=e},
fyu:function fyu(d){this.a=d},
fyv:function fyv(){},
fyr:function fyr(d){this.a=d},
fys:function fys(d,e){this.a=d
this.b=e},
Km:function Km(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
G3:function G3(d,e){this.a=d
this.b=e},
bfm:function bfm(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dcJ:function dcJ(d){this.a=d},
dd_:function dd_(d){this.a=d},
dcS:function dcS(d){this.a=d},
dcT:function dcT(){},
dcR:function dcR(d){this.a=d},
dcK:function dcK(){},
dcQ:function dcQ(d){this.a=d},
dcP:function dcP(d,e){this.a=d
this.b=e},
dcL:function dcL(d){this.a=d},
dcU:function dcU(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dcV:function dcV(d){this.a=d},
dcW:function dcW(d){this.a=d},
dcX:function dcX(){},
dcY:function dcY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dcZ:function dcZ(){},
dcI:function dcI(d,e,f,g,h,i,j,k,l,m){var _=this
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
dcM:function dcM(d,e){this.a=d
this.b=e},
dcN:function dcN(d){this.a=d},
dcO:function dcO(){},
aJB:function aJB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bfn:function bfn(d,e){this.b=d
this.a=e},
dd0:function dd0(){},
dd1:function dd1(d){this.a=d},
dd2:function dd2(d){this.a=d},
dd3:function dd3(){},
bj3:function bj3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bep:function bep(d,e){this.b=d
this.a=e},
bwN:function bwN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ff2:function ff2(d){this.a=d},
bmg:function bmg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eQm:function eQm(d){this.a=d},
eQl:function eQl(d,e){this.a=d
this.b=e},
a_j:function a_j(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aCr:function aCr(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dsP:function dsP(d,e){this.a=d
this.b=e},
dsO:function dsO(d){this.a=d},
dsM:function dsM(d){this.a=d},
dsN:function dsN(d){this.a=d},
dsY:function dsY(d){this.a=d},
dsZ:function dsZ(d){this.a=d},
dsX:function dsX(d,e){this.a=d
this.b=e},
dt_:function dt_(){},
dt2:function dt2(d){this.a=d},
dsW:function dsW(d,e){this.a=d
this.b=e},
dt1:function dt1(){},
dt3:function dt3(d){this.a=d},
dsV:function dsV(d,e){this.a=d
this.b=e},
dt4:function dt4(d){this.a=d},
dsU:function dsU(d){this.a=d},
dt5:function dt5(d){this.a=d},
dsT:function dsT(d){this.a=d},
dt6:function dt6(d){this.a=d},
dsS:function dsS(d){this.a=d},
dt7:function dt7(d){this.a=d},
dsR:function dsR(d){this.a=d},
dt8:function dt8(d){this.a=d},
dsQ:function dsQ(d,e){this.a=d
this.b=e},
dt0:function dt0(d){this.a=d},
ado:function ado(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bj2:function bj2(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
adn:function adn(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bj1:function bj1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dt9:function dt9(d){this.a=d},
dta:function dta(d,e){this.a=d
this.b=e},
aCs:function aCs(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aID:function aID(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
adp:function adp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dtj:function dtj(d){this.a=d},
G_:function G_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hfH(d){var w=d.S,v=x.N
return w.jg(w,new C.cci(),v,v)},
hKs(d){var w=d.bB
if(w>=0)return w
return 5},
hfJ(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hfH(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
hfI(d,e){var w=C.hfJ(d,e)
if(w!=null&&w.ce(new A.V(Date.now(),0,!1)))return!0
return!1},
hKt(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hfH(d),w,w)
u=C.hfJ(d,e)
t=u!=null&&u.ce(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dE(30,0,0,0,0,0).a).a7().ae())
d.S=v},
b_P(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b_P=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lq(t,B.IP),$async$b_P)
case 3:if(l){u=!0
w=1
break}u=A.l2(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.IP,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_P,v)},
cci:function cci(){},
hKq(){var w,v=$.pE(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.au(32)]
return"FT"+B.d.hx(u)},
IP(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$IP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$IP)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_family_tree_backup_codes_v1",null,!1,B.bK),$async$IP)
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
return A.i($async$IP,v)},
a7q(d){return C.hKr(d)},
hKr(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a7q=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a7q)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hI("ngmy_family_tree_backup_codes_v1",A.G(["codes",d,"savedAt",new A.V(Date.now(),0,!1).a7().ae()],x.N,x.z),!1,!1,B.cG,null),$async$a7q)
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
return A.i($async$a7q,v)},
cch(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cch=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.IP(),$async$cch)
case 3:t=m.jZ(f),t=t.gaf(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gR(t)
q=r.b
if(s.b(q)){p=J.a5(q)
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
return A.i($async$cch,v)},
NL(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$NL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cch(d),$async$NL)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.IP(),$async$NL)
case 6:s=f
r=J.a5(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dR(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).a7().ae())
r.n(s,t,o)
w=9
return A.b(C.a7q(s),$async$NL)
case 9:case 8:u=t
w=1
break
case 5:n=C.hKq()
w=10
return A.b(C.IP(),$async$NL)
case 10:s=f
J.aI(s,n,A.G(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a7().ae(),"updatedAt",new A.V(Date.now(),0,!1).a7().ae()],x.N,x.K))
w=11
return A.b(C.a7q(s),$async$NL)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$NL,v)},
b_O(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b_O=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.IP(),$async$b_O)
case 3:t=f
for(s=J.dn(t),r=s.gdV(t),r=r.dm(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.M)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.r(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a7q(t),$async$b_O)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b_O,v)},
a7r(d,e,f){var w=0,v=A.j(x.H),u
var $async$a7r=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aq0(d,e),$async$a7r)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.NL(d),$async$a7r)
case 7:w=4
break
case 5:w=8
return A.b(C.b_O(d),$async$a7r)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a7r,v)},
apV(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$apV=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aq0(f,e),$async$apV)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c8(),$async$apV)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.IP(),$async$apV)
case 7:q=o.r(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a5(q)
if(!J.A(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apV,v)},
b_N(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b_N=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b_N)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.IP(),$async$b_N)
case 4:t=q.r(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a5(t)
if(!J.A(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_N,v)},
hKu(){var w,v=$.pE(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.au(32)]
return"FT"+B.d.hx(u)},
apY(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$apY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$apY)
case 3:if(!g){u=null
w=1
break}t=C.hKu()
w=4
return A.b(A.Vu(),$async$apY)
case 4:s=g
r=B.dN.aM(B.X.ap(d.eZ(),null))
r=B.cJ.gct().aM(r)
q=e?999:2
J.aI(s,t,A.G(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],x.N,x.K))
w=5
return A.b(A.a7s(s),$async$apY)
case 5:p=e?999:2
u=new A.a0v("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apY,v)},
apX(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$apX=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Vu(),$async$apX)
case 3:p=a0
o=J.a5(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a5(n)
l=A.aK(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b_N(J.k(l==null?"":l),j),$async$apX)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cf.cA(0,B.cF.aM(t))
s=C.hfK(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dR(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a7().ae())
o.n(p,g,l)}w=5
return A.b(A.a7s(p),$async$apX)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apX,v)},
hfK(d){var w,v,u,t,s=null
try{w=B.X.aN(0,d,s)
if(!x.f.b(w))return s
u=J.r(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hKw(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h_g(d){var w=0,v=A.j(x.m),u,t,s
var $async$h_g=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.apX(t[1])
w=1
break}u=null
w=1
break}u=C.hfK(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h_g,v)},
hKw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.dc(v,x.f)
u=A.cF(u,new C.cck(),u.$ti.k("L.E"),x.k)
t=A.a6(u).k("Z<L.E>")
s=A.C(new A.Z(u,new C.ccl(),t),t.k("L.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.U(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jZ(p),t=t.gaf(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.dc(l,u)
n=A.cF(n,new C.ccm(),n.$ti.k("L.E"),o)
k=A.a6(n).k("Z<L.E>")
j=A.C(new A.Z(n,new C.ccn(),k),k.k("L.E"))
if(j.length!==0)q.n(0,m,j)}return new C.apZ(h,w,s,r,q)},
aq0(d,e){var w=0,v=A.j(x.y),u,t
var $async$aq0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.NC(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.AW(d),$async$aq0)
case 3:u=t.cL(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aq0,v)},
cct(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cct=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.AW(d),$async$cct)
case 3:t=s.b6(f,new C.ccu(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aY(t,new C.ccv())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cct,v)},
Vv(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Vv=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aq0(e,d),$async$Vv)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.NL(e),$async$Vv)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.AW(e),$async$Vv)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.ccr(g))
r=A.C(t,t.$ti.k("L.E"))}t=J.a5(r)
if(t.gan(r)){u=null
w=1
break}t=t.dF(r,new C.ccs(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.L8(e,o),$async$Vv)
case 14:n=i
if(J.cL(n))q.n(0,o,n)
case 12:r.length===t||(0,A.M)(r),++p
w=11
break
case 13:u=new C.apZ(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Vv,v)},
b_S(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b_S=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Vv(d,e,f,g),$async$b_S)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.GK(A.Ki(q.eZ(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_S,v)},
b_R(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b_R=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Vv(d,e,f,g),$async$b_R)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.apY(r,f),$async$b_R)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aGD(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_R,v)},
Vw(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Vw=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h_g(a0),$async$Vw)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.apV(g.a,d,e,f,s,r),$async$Vw)
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
return A.b(C.bC1(e,j),$async$Vw)
case 12:case 11:w=13
return A.b(C.ahR(e,j,s),$async$Vw)
case 13:h=n.h(0,i)
w=h!=null&&J.cL(h)?14:15
break
case 14:w=16
return A.b(C.B6(e,i,h),$async$Vw)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.M)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bpU(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Vw,v)},
apZ:function apZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ccp:function ccp(){},
ccq:function ccq(){},
cco:function cco(){},
cck:function cck(){},
ccl:function ccl(){},
ccm:function ccm(){},
ccn:function ccn(){},
ccu:function ccu(){},
ccv:function ccv(){},
ccr:function ccr(d){this.a=d},
ccs:function ccs(d){this.a=d},
h7R(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hE(d,new C.aq_(w,e,g,i,f,h,null),!0,null,x.H)},
dcD(d,e,f,g,h,i,j,k){return new C.bfj(i,e,k,j,g,f,h,d,null)},
aq_:function aq_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aE_:function aE_(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dYM:function dYM(d){this.a=d},
dYN:function dYN(d,e,f){this.a=d
this.b=e
this.c=f},
dYR:function dYR(d,e){this.a=d
this.b=e},
dYS:function dYS(d){this.a=d},
dYJ:function dYJ(d){this.a=d},
dYK:function dYK(d,e){this.a=d
this.b=e},
dYL:function dYL(d,e){this.a=d
this.b=e},
dYQ:function dYQ(d){this.a=d},
dYP:function dYP(d,e){this.a=d
this.b=e},
dYO:function dYO(){},
dYU:function dYU(d){this.a=d},
dYV:function dYV(d,e){this.a=d
this.b=e},
dYT:function dYT(d,e){this.a=d
this.b=e},
dd4:function dd4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bfl:function bfl(d,e,f){this.d=d
this.e=e
this.a=f},
acF:function acF(d,e,f){this.c=d
this.d=e
this.a=f},
bfj:function bfj(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bfo:function bfo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_E:function a_E(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDZ:function aDZ(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dYE:function dYE(d,e){this.a=d
this.b=e},
dYF:function dYF(d){this.a=d},
dYG:function dYG(d){this.a=d},
dYH:function dYH(d){this.a=d},
dYI:function dYI(d){this.a=d},
a_F:function a_F(d){this.a=d},
bkt:function bkt(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dYW:function dYW(d,e){this.a=d
this.b=e},
aZm(d,e){return new C.aZl(d,e,null)},
aZl:function aZl(d,e,f){this.c=d
this.d=e
this.a=f},
i96(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b7(d,11)},
igB(d){return A.bU(B.K,null,new C.fOT(new C.tZ(A.P(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hhE(d,e){return new C.asV(e,d,null)},
aQS(d,e,f,g,h,i,j){var w=C.i96(i)
if(w!=null)return A.bx(e,new A.a7(j,f,new C.a6w(w,!0,null),null),B.ap)
return M.aQd(e,B.bV,f,g,h,i,j)},
lL:function lL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6w:function a6w(d,e,f){this.c=d
this.d=e
this.a=f},
bka:function bka(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b5$=e
_.c=_.a=null},
dKB:function dKB(d){this.a=d},
dKC:function dKC(){},
dKD:function dKD(d,e){this.a=d
this.b=e},
bk9:function bk9(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fOT:function fOT(d){this.a=d},
fOS:function fOS(d,e){this.a=d
this.b=e},
fOR:function fOR(d,e){this.a=d
this.b=e},
fOQ:function fOQ(d,e){this.a=d
this.b=e},
asV:function asV(d,e,f){this.c=d
this.d=e
this.a=f},
ckO:function ckO(d,e){this.a=d
this.b=e},
aM0:function aM0(){},
igm(d){var w=null
return A.ci(w,w,!0,w,new C.fOf(),d,w,!0,!0,x.e2)},
ihx(d,e,f,g,h){var w=null
return A.ci(w,w,!0,w,new C.fVL(h,g,f,e),d,w,!0,!0,x.N)},
igo(d,e){var w=null
return A.ci(w,w,!0,w,new C.fOk(e),d,w,!0,!0,x.dY)},
ign(d){var w=null
return A.ci(w,w,!0,w,new C.fOj(),d,w,!0,!0,x.c5)},
aTS:function aTS(d,e){this.a=d
this.b=e},
aTR:function aTR(d){this.a=d},
aRQ:function aRQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fOf:function fOf(){},
fVL:function fVL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fOk:function fOk(d){this.a=d},
fOj:function fOj(){},
Zh:function Zh(d,e){this.c=d
this.a=e},
azc:function azc(){var _=this
_.d=$
_.c=_.a=_.e=null},
d4n:function d4n(d){this.a=d},
d4o:function d4o(d){this.a=d},
d4m:function d4m(d,e){this.a=d
this.b=e},
d4p:function d4p(d){this.a=d},
d4q:function d4q(d){this.a=d},
Zg:function Zg(d){this.a=d},
azb:function azb(){this.d=$
this.c=this.a=null},
d4j:function d4j(d){this.a=d},
d4k:function d4k(d){this.a=d},
d4l:function d4l(d){this.a=d},
YO:function YO(d){this.a=d},
axQ:function axQ(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cCy:function cCy(){},
cCE:function cCE(d){this.a=d},
cCF:function cCF(d){this.a=d},
cCG:function cCG(d){this.a=d},
cCD:function cCD(){},
cCH:function cCH(d){this.a=d},
cCI:function cCI(d){this.a=d},
cCC:function cCC(){},
cCJ:function cCJ(d,e){this.a=d
this.b=e},
cCB:function cCB(d,e){this.a=d
this.b=e},
cCz:function cCz(d,e){this.a=d
this.b=e},
cCK:function cCK(d){this.a=d},
cCA:function cCA(){},
cCL:function cCL(d){this.a=d},
a1r:function a1r(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bwD:function bwD(){this.d=$
this.c=this.a=null},
fem:function fem(d,e){this.a=d
this.b=e},
fen:function fen(d){this.a=d},
feo:function feo(d,e){this.a=d
this.b=e},
abK:function abK(d,e){this.a=d
this.b=e},
FP:function FP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bwB:function bwB(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
fek:function fek(d,e){this.a=d
this.b=e},
axJ:function axJ(d,e){this.c=d
this.a=e},
bwC:function bwC(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
fel:function fel(d){this.a=d},
bwA:function bwA(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aO1:function aO1(){},
aO2:function aO2(){},
bDZ(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bh(u),s=B.o.E(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oP(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fMH(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aU(B.o.u(s),2,"0")
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Yb(A.cS(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aQt(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aQt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hV().l_(85,1280,B.eK),$async$aQt)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fk(),$async$aQt)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hhD()
w=9
return A.b(C.ckN(q,r),$async$aQt)
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
return A.i($async$aQt,v)},
aQQ(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aQQ=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.ckK(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gak(g.split(",")):g
p=B.cF.aM(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.S().LV(p,!0,null,i).da(0,B.fX),$async$aQQ)
case 9:n=a1
w=10
return A.b(n.lK(),$async$aQQ)
case 10:m=a1
w=11
return A.b(J.a37(m).hr(B.h8),$async$aQQ)
case 11:l=a1
J.a37(m).q()
if(l==null){w=8
break}i=J.eR(B.dH.gaR(l))
k="data:image/png;base64,"+B.cJ.gct().aM(i)
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
return A.i($async$aQQ,v)},
fMH:function fMH(){},
tZ:function tZ(d){this.a=d},
asU:function asU(d,e,f){this.c=d
this.d=e
this.a=f},
aFr:function aFr(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eNu:function eNu(d,e){this.a=d
this.b=e},
eNl:function eNl(d){this.a=d},
eNm:function eNm(d){this.a=d},
eNs:function eNs(d,e){this.a=d
this.b=e},
eNr:function eNr(d,e){this.a=d
this.b=e},
eNo:function eNo(d,e){this.a=d
this.b=e},
eNn:function eNn(d,e){this.a=d
this.b=e},
eNp:function eNp(d){this.a=d},
eNq:function eNq(d,e){this.a=d
this.b=e},
eNt:function eNt(d,e){this.a=d
this.b=e},
eNg:function eNg(d,e){this.a=d
this.b=e},
eNk:function eNk(d){this.a=d},
eNj:function eNj(d,e){this.a=d
this.b=e},
eNi:function eNi(d){this.a=d},
eNv:function eNv(d,e){this.a=d
this.b=e},
eNw:function eNw(d,e){this.a=d
this.b=e},
eNh:function eNh(d,e){this.a=d
this.b=e},
hus(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.G(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).a7().ae(),"project",v],x.N,x.z)},
fMI(d,e,f){var w=0,v=A.j(x.N),u
var $async$fMI=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.ap(C.hus(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fMI,v)},
bE0(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bE0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fMI(!0,d,e),$async$bE0)
case 4:w=3
return A.b(r.asS(g,d,e.a),$async$bE0)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dN.aM(B.X.ap(C.hus(d,e,null),null))
u="NGMY_WS:"+B.kv.gct().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bE0,v)},
hmc(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h7w(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d3(s,"NGMYWSSYNC2|"))return!0
if(J.d3(s,"NGMY_WS:"))return!0
if(J.f0(s,t))return!0
if(J.d3(s,"{"))try{w=B.X.aN(0,s,null)
if(x.f.b(w)){v=J.r(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iee(d){var w,v,u,t=C.hmc(d)
if(t==null)return null
if(C.h7w(t))return t
w=B.a.cu(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b7(t,w))
if(C.h7w(v))return v}u=B.a.cu(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b7(t,u))
if(C.h7w(v))return v}return null},
h7v(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d3(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d3(q,"NGMY_WS:")){v=B.cf.cA(0,B.cF.aM(J.nf(q,8)))
w=t.a(B.X.aN(0,v,r))}else w=t.a(B.X.aN(0,q,r))
t=J.r(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.r(w,"project")
if(!x.f.b(u))return r
t=C.h1W(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bE_(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bE_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.asR(t[1]),$async$bE_)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h7v(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h7v(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bE_,v)},
h7u(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lt(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bDw(){var w=0,v=A.j(x.o),u,t
var $async$bDw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.GW(),$async$bDw)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h7v(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDw,v)},
hvt(d,e,f,g){return A.bU(B.K,null,new C.fVB(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fVB:function fVB(d,e,f){this.a=d
this.b=e
this.c=f},
adK:function adK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eNy:function eNy(d,e){this.a=d
this.b=e},
eNz:function eNz(d,e){this.a=d
this.b=e},
eNA:function eNA(d,e){this.a=d
this.b=e},
eNB:function eNB(d,e){this.a=d
this.b=e},
eNx:function eNx(d){this.a=d},
asO:function asO(d,e,f){this.c=d
this.d=e
this.a=f},
blM:function blM(){var _=this
_.c=_.a=_.e=_.d=null},
eNb:function eNb(d,e){this.a=d
this.b=e},
eNc:function eNc(d){this.a=d},
eNd:function eNd(d){this.a=d},
asT:function asT(d){this.a=d},
aFq:function aFq(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eNf:function eNf(d){this.a=d},
eNe:function eNe(d){this.a=d},
hNJ(d,e,f,g,h){return new C.Op(h,g,d,e,f,null)},
aKn:function aKn(d,e){this.a=d
this.b=e},
Op:function Op(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFs:function aFs(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eNY:function eNY(){},
eNU:function eNU(d,e){this.a=d
this.b=e},
eNV:function eNV(d){this.a=d},
eNF:function eNF(d){this.a=d},
eND:function eND(d){this.a=d},
eNE:function eNE(d){this.a=d},
eNO:function eNO(d,e){this.a=d
this.b=e},
eNL:function eNL(d,e){this.a=d
this.b=e},
eNM:function eNM(d,e){this.a=d
this.b=e},
eNN:function eNN(d,e,f){this.a=d
this.b=e
this.c=f},
eNJ:function eNJ(d,e,f){this.a=d
this.b=e
this.c=f},
eNH:function eNH(d){this.a=d},
eNI:function eNI(d){this.a=d},
eNK:function eNK(d){this.a=d},
eO0:function eO0(d){this.a=d},
eO_:function eO_(d){this.a=d},
eO1:function eO1(d){this.a=d},
eNZ:function eNZ(d){this.a=d},
eNC:function eNC(d){this.a=d},
eNG:function eNG(d,e){this.a=d
this.b=e},
eNX:function eNX(d,e){this.a=d
this.b=e},
eNW:function eNW(d,e){this.a=d
this.b=e},
eNR:function eNR(d){this.a=d},
eNS:function eNS(d){this.a=d},
eNT:function eNT(d,e){this.a=d
this.b=e},
eNQ:function eNQ(d,e){this.a=d
this.b=e},
eNP:function eNP(d,e,f){this.a=d
this.b=e
this.c=f},
byj:function byj(){},
AL(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
agg(d,e,f){return C.i2z(d,e,f)},
i2z(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$agg=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ar("String",e,f),$async$agg)
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
return A.i($async$agg,v)},
agf(d,e){return C.i2y(d,e)},
i2y(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$agf=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$agf)
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
return A.i($async$agf,v)},
i1j(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.T4(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bB0(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bB0=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b34(q),$async$bB0)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aQQ(q,!1),$async$bB0)
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
return A.i($async$bB0,v)},
hBo(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.r9(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.r9(p,J.k(u==null?"":u),1,o,q)},
h1W(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.dc(s,x.f)
w=A.cF(w,new C.cBV(),w.$ti.k("L.E"),x.Q)
v=A.a6(w).k("Z<L.E>")
r=A.C(new A.Z(w,new C.cBW(),v),v.k("L.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lt(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
i6y(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.w0
case"female":case"f":return D.oe
default:return D.ys}},
hr9(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hbK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i6y(v==null?j:J.k(v))
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
return new C.hU(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
i6A(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.NN
case"viewer":return D.kG
default:return D.u7}},
i6B(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
GL(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aPA(d,e){return B.a.i(e.toLowerCase())===C.GL(d,e)&&d.y!==D.kG},
uc(d,e){var w,v=d.y
if(v===D.kG)return!1
w=B.a.i(e.toLowerCase())
if(w===C.GL(d,e))return!0
if(v===D.NN)return!0
v=d.e
return new A.N(v,A.h7B(),A.T(v).k("N<1,n>")).t(0,w)},
i60(d){return J.dH(d,new C.fxo()).gL(0)},
fWk(d){var w=0,v=A.j(x.y),u,t
var $async$fWk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.AW(d),$async$fWk)
case 3:u=t.r4(f,new C.fWl(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fWk,v)},
bC1(d,e){var w=0,v=A.j(x.H),u,t
var $async$bC1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.AW(d),$async$bC1)
case 3:t=g
if(J.r4(t,new C.fvi(e))){w=1
break}if(C.i60(t)>=2)throw A.W(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bC1,v)},
ala(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.dc(h,x.f)
w=A.cF(w,new C.bQt(),w.$ti.k("L.E"),x.P)
v=A.a6(w).k("Z<L.E>")
g=A.C(new A.Z(w,new C.bQu(),v),v.k("L.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b6(u,new C.bQv(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.A(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bi(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aK(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.k.N(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.i6A(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aW(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cv)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kM(w,v,s,!r,t,g,q,p,o,n,m)},
hrj(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aq(v,0,8)},
D8(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$D8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.RR(d),$async$D8)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$D8)
case 4:t=f
w=5
return A.b(t.a6C(0),$async$D8)
case 5:w=6
return A.b(C.flZ(t,l),$async$D8)
case 6:s=f
if(J.cL(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a5(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hmN(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oO(l,n),$async$D8)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hmN(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oO(l,n),$async$D8)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$D8,v)},
flZ(d,e){return C.hZL(d,e)},
hZL(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$flZ=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a5(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AL(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.X.aN(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aW(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gR(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AL(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.X.aN(0,m,null)
if(!a0.b(l)){w=7
break}k=C.h1W(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AL(a9)+"_"+n))
i=C.i1j(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b34(h),$async$flZ)
case 17:g=b1
if(g!=null){i=i.T4(g)
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
case 8:J.S2(q,new C.fm_())
if(p&&J.ad(q)!==0)C.oO(a9,q)
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
return A.i($async$flZ,v)},
bCs(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bCs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.RR(d),$async$bCs)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.D8(r),$async$bCs)
case 4:t=p.aW(g)
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
return A.i($async$bCs,v)},
hmN(d){var w,v,u,t
try{w=B.X.aN(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.dc(w,x.f)
v=A.cF(v,new C.fhQ(),v.$ti.k("L.E"),x.fA)
u=A.a6(v).k("Z<L.E>")
v=A.C(new A.Z(v,new C.fhR(),u),u.k("L.E"))
B.d.aY(v,new C.fhS())
return v}catch(t){v=A.a([],x.D)
return v}},
oO(d,e){return C.igc(d,e)},
igc(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oO=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.RR(b2),$async$oO)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oO)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AL(a8)
p=A.aU(J.r(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.X.aN(0,p,null)),new C.fO6(),a2).fH(0)
a2=J.b6(b3,new C.fO7(),a2).c0(0,new C.fO8())
n=A.df(a2,a2.$ti.k("L.E"))
a2=o,a2=A.eo(a2,a2.r,A.a6(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f0(n,m)?17:18
break
case 17:a5=C.AL(a8)
l=A.aU(J.r(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8K(l),$async$oO)
case 19:t=21
a5=C.AL(a8)
k=A.aU(J.r(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.X.aN(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.r(j,"thumbnailPath")
w=28
return A.b(C.a8K(a5==null?null:J.k(a5)),$async$oO)
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
return A.b(C.agf(r,"ngmy_worksheet_item_v3_"+C.AL(a8)+"_"+m),$async$oO)
case 29:w=30
return A.b(C.agf(r,"ngmy_worksheet_thumb_v3_"+C.AL(a8)+"_"+m),$async$oO)
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
case 14:case 10:a2=J.cD(b3),a3=a2.gaf(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gR(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bB0(h),$async$oO)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.agg(r,"ngmy_worksheet_thumb_v3_"+C.AL(a8)+"_"+a4,f),$async$oO)
case 40:g=i.T4(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.agf(r,"ngmy_worksheet_thumb_v3_"+C.AL(a8)+"_"+a4),$async$oO)
case 41:g=i.T4(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.agf(r,"ngmy_worksheet_thumb_v3_"+C.AL(a8)+"_"+a4),$async$oO)
case 42:case 34:a4=i.a
w=43
return A.b(C.agg(r,"ngmy_worksheet_item_v3_"+C.AL(a8)+"_"+a4,B.X.ap(g.ag(),null)),$async$oO)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.cc(q,i.a)
w=31
break
case 32:w=44
return A.b(C.agg(r,"ngmy_worksheets_index_v3_"+C.AL(a8),B.X.ap(q,null)),$async$oO)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eY(b3,new C.fO9(q))
a4=a3.$ti.k("cQ<1,a8<n,@>>")
a7=A.C(new A.cQ(a3,new C.fOa(),a4),a4.k("L.E"))
a0=a7
w=45
return A.b(C.agg(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.X.ap(a0,null)),$async$oO)
case 45:w=46
return A.b(J.hAu(r),$async$oO)
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
return A.i($async$oO,v)},
Ly(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Ly=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.D8(d),$async$Ly)
case 3:t=g
s=J.cD(t)
r=s.bg(t,new C.fWj(e))
if(r===-1)s.c6(t,0,e)
else s.n(t,r,e)
u=C.oO(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ly,v)},
bCf(d,e){var w=0,v=A.j(x.H),u
var $async$bCf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.D8(d),$async$bCf)
case 2:u=g
J.nz(u,new C.fxS(e))
w=3
return A.b(C.oO(d,u),$async$bCf)
case 3:return A.h(null,v)}})
return A.i($async$bCf,v)},
GN(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$GN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$GN)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.r(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.X.aN(0,i,null)
if(x.j.b(t)){j=J.dc(t,x.f)
j=A.cF(j,new C.fAH(),j.$ti.k("L.E"),x.k)
s=A.a6(j).k("Z<L.E>")
r=A.C(new A.Z(j,new C.fAI(),s),s.k("L.E"))
B.d.aY(r,new C.fAJ())
k=r}}catch(h){}w=4
return A.b(C.fiA(d),$async$GN)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.i_7(k,p,d)
j=A.T(o)
s=j.k("N<1,a8<n,@>>")
s=A.C(new A.N(o,new C.fAK(),s),s.k("ak.E"))
n=B.X.ap(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.R3(d,o),$async$GN)
case 7:case 6:j=j.k("Z<1>")
m=A.C(new A.Z(o,new C.fAL(d),j),j.k("L.E"))
if(m.length!==0)C.aPk(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$GN,v)},
fNT(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fNT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.R3(d,e),$async$fNT)
case 3:t=J.dH(e,new C.fNU(d))
s=A.C(t,t.$ti.k("L.E"))
if(s.length===0){u=!0
w=1
break}u=C.aPk(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fNT,v)},
a30(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a30=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a30)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.r(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aN(0,l,null)
if(x.j.b(u)){m=J.dc(u,x.f)
m=A.cF(m,new C.fWe(),m.$ti.k("L.E"),x.k)
t=A.a6(m).k("Z<L.E>")
s=A.C(new A.Z(m,new C.fWf(),t),t.k("L.E"))
o=s}}catch(k){}q=J.qr(o,new C.fWg(e))
if(B.a.i(e.x).length===0&&C.uc(e,d)){m=B.a.i(d.toLowerCase())
p=e.aED(e.y===D.kG?D.kG:D.u7,m)}else p=e
if(q===-1)J.pH(o,0,p)
else J.aI(o,q,p)
w=3
return A.b(C.R3(d,o),$async$a30)
case 3:w=C.uc(p,d)?4:5
break
case 4:w=6
return A.b(C.aPj(C.GL(p,d),p),$async$a30)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a30,v)},
aPw(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aPw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.GN(d),$async$aPw)
case 2:u=g
t=J.cD(u)
s=A.pQ(t.eY(u,new C.fxz(e)))
t.bs(u,new C.fxA(e))
w=3
return A.b(C.R3(d,u),$async$aPw)
case 3:w=s!=null&&C.aPA(s,d)?4:5
break
case 4:w=6
return A.b(C.fhU(e),$async$aPw)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aPw,v)},
ai5(d){var w=d.f,v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.fWp(),v),v.k("L.E"))
return w},
h59(d,e){var w,v=d.f,u=A.pQ(new A.Z(v,new C.fx3(e),A.T(v).k("Z<1>")))
v=C.ai5(d)
w=A.T(v).k("Z<1>")
v=A.C(new A.Z(v,new C.fx4(e,u),w),w.k("L.E"))
B.d.aY(v,new C.fx5())
return v},
i6E(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hvx(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.h59(d,u),new C.fVM(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i8b(d,e){var w
if(e==null||e.length===0)return 1
w=C.h59(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fBv(),A.T(w).k("N<1,H>")).fb(0,B.AO)+1},
ig5(d){var w,v=C.ai5(d)
if(v.length===0)return null
w=new A.Z(v,new C.fNN(),A.T(v).k("Z<1>"))
if(!w.gan(0))return w.gI(0)
return B.d.gI(v)},
i6z(d){return A.G(["id",d.a,"name",d.b,"gender",C.hr9(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i86(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aY(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.M)(a0),++u){q=a0[u]
p=q.a
r.M(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.ys?n:q.c
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
d=q.aEy(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.M)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cLQ(a1,w,a3.d,a2.y,s,a0,v)},
AW(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$AW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$AW)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.r(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.X.aN(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.dc(t,x.f)
p=A.cF(p,new C.fAE(),p.$ti.k("L.E"),x.k)
s=A.a6(p).k("Z<L.E>")
p=A.C(new A.Z(p,new C.fAF(),s),s.k("L.E"))
B.d.aY(p,new C.fAG())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$AW,v)},
ahR(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahR=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.u7:D.kG
a7=C.GL(b2,b3)
w=2
return A.b(C.AW(b1),$async$ahR)
case 2:a8=b5
a9=J.cD(a8)
b0=a9.bg(a8,new C.fNI(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bC1(b1,b2),$async$ahR)
case 5:case 4:if(b0===-1){u=b2.aED(a6,a7)
a9.c6(a8,0,u)}else{t=a9.h(a8,b0)
s=A.U(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.M)(r),++p){o=r[p]
s.n(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.M)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.n(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.ys?i:l.c
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
s.n(0,m,l.aEy(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("L.E"))
k=a5?D.u7:D.kG
u=t.cLS(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.R3(b1,a8),$async$ahR)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aPj(B.a.i(b3.toLowerCase()),u),$async$ahR)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahR,v)},
hnb(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).a7().ae(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,a8<n,@>>"),k=A.C(new A.N(m,C.huB(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.G(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.G(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a7().ae(),"updatedAt",o],r,x.K),"createdAt",s.a7().ae(),"updatedAt",o],r,x.z)},
hnc(d,e){var w=new A.V(Date.now(),0,!1).a7().ae(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,a8<n,@>>")
u=A.C(new A.N(u,C.huB(),t),t.k("ak.E"))
return A.G(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a7().ae(),"updatedAt",w],x.N,x.z)},
hXD(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a5(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ala(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.h7B(),A.T(j).k("N<1,n>")).c0(0,new C.fin())
t=A.C(j,j.$ti.k("L.E"))
if(u===v)s=D.u7
else s=B.d.t(t,u)?D.NN:D.kG
return w.aED(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ala(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.dc(q,h)
h=A.cF(h,new C.fio(),h.$ti.k("L.E"),x.P)
p=A.a6(h).k("Z<L.E>")
o=A.C(new A.Z(h,new C.fip(),p),p.k("L.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fiq(),x.N).c0(0,new C.fir())
t=A.C(h,h.$ti.k("L.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.u7
else s=B.d.t(t,u)?D.NN:D.kG
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.A(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aK(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kM(h,r,p,!m,t,o,l,j,v,s,B.ca)},
fiA(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fiA=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fiE()
h=x.N
g=x.z
w=7
return A.b(A.iP(A.a([A.lz("family_trees","*",null,A.G(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bK),r.$2(A.lz("family_trees","*",A.G(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bK),"collaborator"),r.$2(A.lz("family_trees","*",null,A.G(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bK),"public")],x.cl),x.fO),$async$fiA)
case 7:q=a4
p=J.r(q,0)
o=J.r(q,1)
n=J.r(q,2)
g=x.a
m=A.U(h,g)
h=A.C(p,g)
l=h
J.h6(l,o)
J.h6(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.M)(l),++f){k=l[f]
g=J.r(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aI(m,j,k)}l=m
h=A.a6(l).k("bc<2>")
h=A.cF(new A.bc(l,h),new C.fiB(a0),h.k("L.E"),x.k)
l=A.a6(h).k("Z<L.E>")
l=A.C(new A.Z(h,new C.fiC(),l),l.k("L.E"))
B.d.aY(l,new C.fiD())
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
return A.i($async$fiA,v)},
i_7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a5(e)
if(j.gan(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dF(e,new C.fmG(),v).c0(0,new C.fmH())
t=A.df(u,u.$ti.k("L.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.M)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.GL(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kG){m=q.e
m=!new A.N(m,A.h7B(),A.T(m).k("N<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i86(l,v)
o=C.GL(k,w)
p=v.d
s.n(0,u,o===w?k.bcY(p,D.u7):k.bcY(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("L.E"))
B.d.aY(j,new C.fmI())
return j},
R3(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$R3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$R3)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fpq(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.ar("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.ap(s,null)),$async$R3)
case 3:return A.h(null,v)}})
return A.i($async$R3,v)},
aPj(d,e){return C.i4m(d,e)},
i4m(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aPj=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m3("family_trees",A.a([C.hnb(e,d)],p),null,B.cG),$async$aPj)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m3("family_trees",A.a([C.hnc(e,d)],p),null,B.cG),$async$aPj)
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
return A.i($async$aPj,v)},
aPk(d,e){return C.i4n(d,e)},
i4n(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aPk=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,a8<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fuC(d),n),m)
r=l
w=7
return A.b(A.m3("family_trees",r,null,B.cG),$async$aPk)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fuD(d),n),m)
p=k
w=8
return A.b(A.m3("family_trees",p,null,B.cG),$async$aPk)
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
return A.i($async$aPk,v)},
fhU(d){return C.hWW(d)},
hWW(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fhU=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Rr("family_trees",A.G(["id",d],x.N,x.z),null,B.cG),$async$fhU)
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
return A.i($async$fhU,v)},
r9:function r9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lt:function lt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cBY:function cBY(){},
cBX:function cBX(){},
cBV:function cBV(){},
cBW:function cBW(){},
HV:function HV(d,e){this.a=d
this.b=e},
hU:function hU(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
al9:function al9(d,e){this.a=d
this.b=e},
fxo:function fxo(){},
fWl:function fWl(d){this.a=d},
fvi:function fvi(d){this.a=d},
kM:function kM(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bQx:function bQx(){},
bQw:function bQw(){},
bQt:function bQt(){},
bQu:function bQu(){},
bQv:function bQv(){},
fm_:function fm_(){},
fhQ:function fhQ(){},
fhR:function fhR(){},
fhS:function fhS(){},
fO6:function fO6(){},
fO7:function fO7(){},
fO8:function fO8(){},
fO9:function fO9(d){this.a=d},
fOa:function fOa(){},
fWj:function fWj(d){this.a=d},
fxS:function fxS(d){this.a=d},
fAH:function fAH(){},
fAI:function fAI(){},
fAJ:function fAJ(){},
fAK:function fAK(){},
fAL:function fAL(d){this.a=d},
fNU:function fNU(d){this.a=d},
fWe:function fWe(){},
fWf:function fWf(){},
fWg:function fWg(d){this.a=d},
fxz:function fxz(d){this.a=d},
fxA:function fxA(d){this.a=d},
fWp:function fWp(){},
fx3:function fx3(d){this.a=d},
fx4:function fx4(d,e){this.a=d
this.b=e},
fx5:function fx5(){},
fVM:function fVM(d){this.a=d},
fBv:function fBv(){},
fNN:function fNN(){},
fAE:function fAE(){},
fAF:function fAF(){},
fAG:function fAG(){},
fNI:function fNI(d){this.a=d},
fin:function fin(){},
fio:function fio(){},
fip:function fip(){},
fiq:function fiq(){},
fir:function fir(){},
fiE:function fiE(){},
fiF:function fiF(d){this.a=d},
fiB:function fiB(d){this.a=d},
fiC:function fiC(){},
fiD:function fiD(){},
fmG:function fmG(){},
fmH:function fmH(){},
fmI:function fmI(){},
fpq:function fpq(){},
fuC:function fuC(d){this.a=d},
fuD:function fuD(d){this.a=d},
cBZ:function cBZ(d,e){this.a=d
this.b=e},
cC_:function cC_(d,e){this.a=d
this.b=e},
aHz:function aHz(d,e,f){this.a=d
this.b=e
this.c=f},
b9r:function b9r(){this.b=this.a=0},
b9q:function b9q(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bwE:function bwE(){},
wX(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcg()+"/"+w.gcw()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.aU(B.o.u(w.gnk()),2,"0")+":"+B.a.aU(B.o.u(w.gGt()),2,"0")},
hNG(){var w,v=$.pE(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.au(32)]
return"WS"+B.d.hx(u)},
asP(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$asP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$asP)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bK),$async$asP)
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
return A.i($async$asP,v)},
asQ(d){return C.hNH(d)},
hNH(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$asQ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$asQ)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hI("ngmy_worksheet_project_qr_stashes_v1",A.G(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).a7().ae()],x.N,x.z),!1,!1,B.cG,null),$async$asQ)
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
return A.i($async$asQ,v)},
asS(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$asS=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$asS)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hNG()
w=4
return A.b(C.asP(),$async$asS)
case 4:r=h
q=B.a.i(e)
p=B.dN.aM(t)
J.aI(r,s,A.G(["ownerEmail",q,"projectId",f,"payload",B.cJ.gct().aM(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],x.N,x.K))
w=5
return A.b(C.asQ(r),$async$asS)
case 5:u=new A.a0v("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asS,v)},
asR(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$asR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c8(),$async$asR)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.asP(),$async$asR)
case 4:q=f
p=J.a5(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a5(o)
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
try{s=B.cf.cA(0,B.cF.aM(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dR(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a7().ae())
p.n(q,i,m)}w=5
return A.b(C.asQ(q),$async$asR)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asR,v)},
hhD(){var w=new A.V(Date.now(),0,!1).a7()
return"wst_"+(1000*w.a+w.b)+"_"+B.cZ.au(999999)},
hNI(d){var w,v,u,t,s,r,q
try{w=A.agG(d)
if(w==null)return d
v=w
if(J.LD(v)>960||J.LC(v)>960){s=v
r=J.LD(v)>=J.LC(v)?960:null
v=A.agF(s,J.LC(v)>J.LD(v)?960:null,B.P1,r)}s=v
u=A.amy(82).Ts(s,B.z7)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ck(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
ckN(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$ckN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hNI(e)
$.ckJ.n(0,s,t)
u=C.bE2(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ckN,v)},
b34(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b34=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d3(l,"data:image")){u=null
w=1
break}t=4
r=J.f0(l,",")?B.d.gak(J.lC(l,",")):l
q=B.cF.aM(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hhD()
w=7
return A.b(C.ckN(p,q),$async$b34)
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
return A.i($async$b34,v)},
ckK(d){var w=0,v=A.j(x.T),u,t,s
var $async$ckK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(M.ckM(s),$async$ckK)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cJ.gct().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ckK,v)},
a8K(d){var w=0,v=A.j(x.H),u,t
var $async$a8K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=M.hut(d)
if(t==null){w=1
break}$.ckJ.W(0,t)
w=3
return A.b(C.bE1(t),$async$a8K)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8K,v)},
bE2(d,e){return C.ieh(d,e)},
ieh(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bE2=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aOe
w=7
return A.b(n==null?$.aOe=M.h46():n,$async$bE2)
case 7:r=g
q=new Uint8Array(A.ck(e))
p=J.mP(r,"thumbs","readwrite")
B.j_.mm(J.mO(p,"thumbs"),q,l)
w=8
return A.b(J.pG(p),$async$bE2)
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
return A.i($async$bE2,v)},
bE1(d){return C.ief(d)},
ief(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bE1=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aOe
w=7
return A.b(o==null?$.aOe=M.h46():o,$async$bE1)
case 7:r=f
q=J.mP(r,"thumbs","readwrite")
B.j_.G0(J.mO(q,"thumbs"),m)
w=8
return A.b(J.pG(q),$async$bE1)
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
return A.i($async$bE1,v)}},D,Ar,As,Z,At,Au,M
J=c[1]
A=c[0]
B=c[2]
P=c[240]
A_=c[155]
S=c[57]
A9=c[223]
I=c[204]
H=c[33]
E=c[214]
T=c[115]
Q=c[150]
O=c[103]
Aa=c[112]
Ab=c[191]
A0=c[113]
Ac=c[222]
Ad=c[40]
R=c[221]
L=c[88]
A1=c[84]
A2=c[161]
Ae=c[123]
A3=c[164]
A4=c[235]
A5=c[192]
Af=c[183]
Ag=c[195]
A6=c[190]
Ah=c[238]
Ai=c[70]
A7=c[239]
Aj=c[76]
A8=c[208]
Ak=c[242]
Al=c[32]
U=c[114]
N=c[185]
Am=c[196]
An=c[119]
Ao=c[146]
V=c[241]
Ap=c[127]
W=c[231]
X=c[39]
G=c[94]
Aq=c[31]
K=c[102]
F=c[129]
Y=c[74]
C=a.updateHolder(c[7],C)
D=c[234]
Ar=c[75]
As=c[202]
Z=c[237]
At=c[236]
Au=c[61]
M=c[58]
C.aoI.prototype={}
C.aZn.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bhi(),f=h.x!=null&&h.zc(i).length===0
if(h.x!=null)w=f?B.b_:B.by
else w=h.gU5()?B.by:B.dY
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.J(D.bkV,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.f0i,B.f,i,i,new A.o(B.b_.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h4,i,i,i),B.W,D.fve,B.au,A.d(C.wX(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fqX,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,D.b3v,i,i,i,i,B.a_j,i,i,i)
q=A.m(16)
p=A.J(B.aL,B.r,1)
o=A.J(B.b_.j(0.28),B.r,1)
n=A.h69(h.d)
o=A.p(B.A,C.aZm(A.fDQ(h.e,n),30),B.f,i,i,new A.o(B.lZ,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fm4,B.L,i,i)
m=A.m(14)
l=A.J(B.aL,B.r,1)
q=A.p(i,A.x(A.a([o,B.O,n,B.bD,D.fvw,B.ae,A.p(i,A.x(A.a([D.fLr,B.bD,A.d(A.AY(h.c),i,i,i,i,i,i,D.fgP,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fd,i,i,1/0)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,N.ajS,i,i,i)
p=A.m(16)
m=A.J(B.aL,B.r,1)
l=j.aRl("Original due",C.wX(h.r,!1))
n=j.aRl("Current due",C.wX(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.W,A.p(i,A.x(A.a([l,B.O,n,B.W,A.p(i,A.d(h.gaLt(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.BF,i,i,1/0),B.W,j.ch4(),B.O,j.c4k(g,f)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bf,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.J(B.aL,B.r,1)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fwu,B.au,A.d(q,i,i,i,i,i,i,D.flj,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bf,i,i,1/0)],s))}if(h.gaGe()){q=A.m(14)
o=A.J(B.cr,B.r,1.6)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fMM,B.O,A.bx(A.m(12),A.ec(new A.a7(1/0,88,A.b4(i,i,i,new A.Wg(h.ax,B.M,D.f4w,!0,3.5,i),B.ax),i),B.c,!0),B.ap)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.FZ,i,i,i)],s))}p.push(B.aA)
p.push(D.fEH)
return A.p(i,A.x(A.a([r,new A.D(B.a_7,A.x(p,B.ak,i,B.e,B.i,0,B.p),i)],s),B.ak,i,B.e,B.Q,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aRl(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a9R,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fhU,w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
ch4(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a9P(B.dY,u,"Not paid yet")
w=t.zc(null).length
v=w===0?B.b_:B.by
return this.a9P(v,u,C.wX(t.x,!0))},
c4k(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a9P(B.b_,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a9P(B.b_,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a9R,u,u,u)
v=A.T(d).k("N<1,h0>")
v=A.C(new A.N(d,new C.c5L(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bW(B.bC,v,B.bq,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
a9P(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a9R,w,w,w),1),new A.ds(1,B.cn,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dV,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bbC.prototype={
a3(d,e){new A.Wg(this.b,B.M,e,!0,3.5,null).a3(d,e)},
aw(d){return d.b!==this.b}}
C.aoU.prototype={
T(){return new C.aDs(A.a([],x.bp))},
ge1(){return this.c}}
C.aDs.prototype={
Z(){this.a2()
this.IY()},
IY(){var w=0,v=A.j(x.H),u,t=this,s
var $async$IY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2h(t.a.c),$async$IY)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dLt(t,s))
case 1:return A.h(u,v)}})
return A.i($async$IY,v)},
aTi(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.bs:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bs:B.bm).j(0.22)
w=A.m(10)
return A.br(v,new A.b5(4,r,new A.ay(u,1,B.r,-1)),v,B.bf,v,v,v,v,!0,new A.b5(4,w,new A.ay((this.a.d.a?B.bs:B.bm).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b5(4,A.m(10),D.b18),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aTh(d){return this.aTi(d,null)},
PJ(d){return this.ckH(d)},
ckH(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PJ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Hl:B.eK
w=7
return A.b(new A.hV().Cg(72,900,900,n),$async$PJ)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fk(),$async$PJ)
case 8:p=f
n=B.cJ.gct().aM(p)
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
return A.i($async$PJ,v)},
b17(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.J((q?B.bs:B.bm).j(0.18),B.r,1)
if(d)q=B.cO
else q=s.a.d.a?B.bs:B.bm
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cO
else u=s.a.d.a?B.bs:B.bm
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fy(r,r,r,r,r,r,r,r,r,r,r,B.cO,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cd)
q=A.a([q,B.ac,u,A.bN(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cz,s.a.d.a?B.bs:B.bm,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cd))
return A.p(r,A.B(q,B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jy,D.bxC,r,r,r)},
Dh(d){return this.bB6(d)},
bB5(){return this.Dh(null)},
bB6(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dh=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.as(new A.bb(a4,B.b3,B.aO),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.j3(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ac(p,2)}o=new A.as(new A.bb(a4,B.b3,B.aO),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.as(new A.bb(a4,B.b3,B.aO),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c5(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)}else{a4=a5.f
m=A.c5(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bq(a4,!0,x.cT)
i=a3?null:A.h69(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wB?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i0(B.w.j(0.55),!0,"Dismiss",a4,new C.dLc(),new C.dLd(a2,t,a5,r,new C.dLe(a2,t),o,n,j),B.eN,!0,x.y),$async$Dh)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cY(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.S$=s
r.P$=0
o.S$=s
o.P$=0
n.S$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.K(x.q).f.U(D.fb_)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.U(D.f9F)
w=1
break}a1=A.fDQ(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wB?"male":"female"
w=7
return A.b(A.ai4(a3,A.hek(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Dh)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wB?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a9(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c5(a3.gck(),a3.gcg(),a3.gcw(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c5(a4.gck(),a4.gcg(),a4.gcw(),0,0,0,0,0)))a5.cO4(a2.a)
w=8
return A.b(A.ai4(t.a.c,a5),$async$Dh)
case 8:case 5:w=9
return A.b(t.IY(),$async$Dh)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Dh,v)},
aTW(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cO.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cO
else s=(this.a.d.a?B.bs:B.bm).j(0.2)
s=A.J(s,B.r,g?1.5:1)
r=C.aZm(d,18)
if(g)q=B.cO
else q=this.a.d.a?B.aP:B.av
return A.aG(!1,B.a2,!0,v,A.aO(!1,u,!0,A.p(p,A.B(A.a([r,B.bo,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b8,B.i,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Sq(d){return this.cCq(d)},
cCq(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Sq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i0(B.w.j(0.55),!0,"Dismiss",s,new C.dLw(),new C.dLx(t,d),B.hq,!0,x.y),$async$Sq)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.ai4(t.a.c,d),$async$Sq)
case 7:w=8
return A.b(t.IY(),$async$Sq)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Sq,v)},
PI(d,e){return this.bLW(0,e)},
bLW(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lc(s,"Cancel","Delete",e.b+" \xb7 "+A.AY(e.c)+" will be removed from this device.","Delete this debt?"),$async$PI)
case 3:if(!g){w=1
break}w=4
return A.b(C.fxG(t.a.c,e.a),$async$PI)
case 4:w=5
return A.b(t.IY(),$async$PI)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PI,v)},
aft(d){return this.cev(d)},
cev(d){var w=0,v=A.j(x.H),u=this,t
var $async$aft=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.K,null,new C.dLq(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aft)
case 2:return A.h(null,v)}})
return A.i($async$aft,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ele
w=J.dH(m.d,new C.dLy())
v=A.C(w,w.$ti.k("L.E"))
w=J.dH(m.d,new C.dLz())
u=A.C(w,w.$ti.k("L.E"))
t=B.d.cI(v,0,new C.dLA())
w=A.m(18)
s=m.a.d.a
r=s?D.cwz:D.aAk
q=A.J(s?B.cO.j(0.35):B.cO.j(0.18),B.r,1)
s=A.p(l,D.bYv,B.f,l,l,new A.o(B.cO.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.at,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a2,!0,A.m(12),A.aO(!1,A.m(12),!0,D.ekC,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dLB(m),l,l,l,l,l,l,l),B.f,B.cO,0,l,l,l,l,l,B.ai)],p),B.m,l,B.e,B.i,0,l,l)
o=A.E(m.cyB("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AY(t)
r=A.a([A.p(l,A.x(A.a([s,B.ae,A.B(A.a([o,B.ac,A.E(m.b7d(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.ay,B.aE,B.x,r,l,l),B.n),l,l,l,l,B.ajP,l,l,l),B.aA],p)
if(J.cs(m.d)){w=m.a.d.a
s=w?B.e3:B.c
q=A.m(18)
o=A.J((w?B.bs:B.bm).j(0.12),B.r,1)
n=A.p(l,D.bTi,B.f,l,l,new A.o(B.cO.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.x(A.a([n,B.ae,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bm,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bAa,l,l,1/0))}else{w=m.gcjY()
s=A.C(new A.N(v,w,A.T(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bBR,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bm,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.T(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.ak,l,B.e,B.i,0,B.p)},
b7d(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.J((v.a.d.a?B.bs:B.bm).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bs:B.bm,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cO
else w=v.a.d.a?B.aP:B.av
return A.p(u,A.x(A.a([q,B.bD,A.d(f,u,1,B.a1,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eA,u,u,u)},
cyB(d,e){return this.b7d(!1,d,e)},
cjZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zc(j).length,h=d.bgw()
if(d.x!=null){w=d.zc(j).length
v=w===0?B.cO:B.by}else if(d.gU5())v=B.by
else{if(h)w=B.cO
else w=k.a.d.a?B.bs:B.bm
v=w}if(d.x!=null){w=d.zc(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wX(u,!1)}else{u.toString
t="Paid "+C.wX(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wX(w,!1)+" \xb7 "+i+" missed":"Due "+C.wX(w,!1)}w=k.a.d.a?B.e3:B.c
u=A.m(18)
if(d.gU5()&&d.x==null)s=B.by.j(0.35)
else s=(k.a.d.a?B.bs:B.bm).j(0.12)
s=A.J(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cH,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bn:B.lZ
o=A.J(d.gU5()&&d.x==null?B.by.j(0.45):B.cO.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.h69(d.d)
o=A.p(B.A,A.d9(C.aZm(A.fDQ(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.av
m=x.p
n=A.a([new A.ds(1,B.cn,A.d(p,j,1,B.a1,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaGe())B.d.v(n,A.a([B.em,A.X(B.Oe,B.cO.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.i,0,j,j),B.cL,A.d(t,j,1,B.a1,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.AY(d.c)
l=k.a.d.a?B.aP:B.av
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a2,!0,j,A.aO(!1,q,!0,new A.D(A4.ajB,A.B(A.a([o,B.bd,p,B.ac,A.x(A.a([n,B.bD,A.X(B.eE,(k.a.d.a?B.bs:B.bm).j(0.5),j,j,j,18)],m),B.dG,j,B.e,B.i,0,B.p)],m),B.m,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dLs(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d3,j,j,j,j)}}
C.us.prototype={}
C.akY.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bi
u=v?B.E:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.J(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cx,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.J(r.j(0.6),B.r,1)
n.push(A.aB(a0,A.p(a0,A.X(B.cz,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iA,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.awy,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Gf,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eN(m,A.B(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.e2)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bwP,A.d(v,a0,1,B.a1,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bp,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fC,A.x(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.f5j)
a2=A.a([A.B(n,B.m,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vR,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a5,B.a8,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lB,A.x(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.J(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hh,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.ay,B.aE,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.by2,a0,a0,a0,a0)}}
C.aV7.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bi?B.bi:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a1,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bp:B.cD,q,B.P,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.i,0,q,q),B.cL,n],m)
if(p.z)o.push(new A.D(B.u_,n,q))
return new A.D(B.d3,A.x(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.T6.prototype={
T(){return new C.bfe()}}
C.bfe.prototype={
gc_i(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aJ(d,n,x.w).w,l=x.p,k=A.a([D.el9,D.elf],l)
for(w=0;w<8;++w){v=D.a3x[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.H4:B.Ck
q=t===s
r=A.X(r,q?B.eG:B.bY,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bo,new A.y(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ac,new A.bA(1,B.bc,new A.y(v.c,n,B.Ac,n,n,n,n,B.a1,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aQ(24,24)
p=new A.ay(B.eG,2,B.r,-1)
s=new A.o(n,n,new A.bK(p,p,p,p),new A.bj(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aB(n,new A.D(B.eI,A.x(A.a([new A.D(B.mH,new A.cd(B.aM,B.e,B.i,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.Eb(!0,new C.akY(v,q.d,q.e,new C.dbB(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dbC(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.byo,A.bH(D.fSi,n,new C.dbD(o,d),A.bo(B.b5,n,n,n,n,B.oA,n,n,new A.b7(A.m(16),B.a0),n,n,n)),n))
return A.bl(!0,new A.cU(new A.aZ(0,1/0,0,m.a.b*0.9),A.cr(k,n,D.bCI,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.nk.prototype={
ag(){var w=this
return A.G(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a7().ae()],x.N,x.z)},
bd9(d,e,f){return new C.nk(this.a,e,d,f)}}
C.HU.prototype={
wv(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.HU(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aEs(d){var w=null
return this.wv(w,w,w,w,w,d,w,w,w,w,w,w)},
cJO(d){var w=null
return this.wv(w,w,w,w,d,w,w,w,w,w,w,w)},
bd7(d,e,f){var w=null
return this.wv(d,w,w,w,w,w,w,w,e,w,f,w)},
cKs(d){var w=null
return this.wv(w,w,w,w,w,w,d,w,w,w,w,w)},
cKB(d){var w=null
return this.wv(w,w,w,w,w,w,w,w,w,d,w,w)},
cJM(d){var w=null
return this.wv(w,w,w,d,w,w,w,w,w,w,w,w)},
cKD(d){var w=null
return this.wv(w,w,w,w,w,w,w,w,w,w,w,d)},
cJJ(d){var w=null
return this.wv(w,w,d,w,w,w,w,w,w,w,w,w)},
cJE(d){var w=null
return this.wv(w,d,w,w,w,w,w,w,w,w,w,w)},
FT(d){var w=null
return this.wv(w,w,w,w,w,w,w,d,w,w,w,w)},
cKL(d,e,f,g,h,i,j,k,l,m,n){return this.wv(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.G(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cHl(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bPe(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.D6.gev(D.D6))
s=i==null?o:B.k.E(i,18,36)
r=l.$2("position",D.a57)
q=l.$2("frame",D.a4v)
l=l.$2("texture",D.a4r)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cKL(p,u,t,q,r,A.qZ(d.h(0,"ribbon"))?A.Gn(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.ZF.prototype={
T(){return new C.aAs(A.a([],x.I),D.NM)},
ge1(){return this.c}}
C.aAs.prototype={
Z(){var w,v=this
v.a2()
v.f=A.zR(0,1)
w=$.aw()
v.z=new A.as(B.as,w)
v.Q=new A.as(B.as,w)
v.l7()
w=v.a
C.bCp(w.c,w.d).bM(new C.dch(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.aw()
u.S$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.S$=w
u.P$=0
v.a1()},
l7(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$l7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.L8(s.c,s.d),$async$l7)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dc5(t,r))
t.awi()
case 1:return A.h(u,v)}})
return A.i($async$l7,v)},
gasT(){var w,v=this
if(!J.cs(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.r(v.d,v.r)},
awi(){var w,v,u=this.gasT(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saX(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saX(0,w==null?"":w)},
ccW(d){this.m(new C.dc2(this,d))
this.awi()},
NF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nk(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aRc(r.c,r.d,s),$async$NF)
case 3:w=4
return A.b(t.l7(),$async$NF)
case 4:if(t.c==null||J.cs(t.d)){w=1
break}q=J.qr(t.d,new C.dbE(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dbF(t,p))
t.awi()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Bd(p+1,B.cu,B.kD),$async$NF)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NF,v)},
AU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gasT()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aRc(o.c,o.d,new C.nk(s,r,q,new A.V(p,0,!1))),$async$AU)
case 3:w=4
return A.b(t.l7(),$async$AU)
case 4:if(t.c==null){w=1
break}t.m(new C.dc6(t))
case 1:return A.h(u,v)}})
return A.i($async$AU,v)},
Oj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Oj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gasT()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ci(null,null,!0,null,new C.dbN(r),s,null,!0,!0,x.y),$async$Oj)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bCb(s.c,s.d,r.a),$async$Oj)
case 4:t.m(new C.dbO(t))
w=5
return A.b(t.l7(),$async$Oj)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.U8(B.o.E(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Oj,v)},
yz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AU(),$async$yz)
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
return A.b(C.Rk(s,r.r,o,p,q),$async$yz)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a4(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hv5(s,r.x,r.r),$async$yz)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.L8(s.c,s.d),$async$yz)
case 10:l=e
for(s=n.d,r=J.cD(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.M(l,new C.nk(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.B6(r.c,r.d,l),$async$yz)
case 11:w=12
return A.b(t.l7(),$async$yz)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yz,v)},
a0T(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0T=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AU(),$async$a0T)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyx(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dK(D.zg,new C.dc3(t),new C.dc4())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mC("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gR(o)
p.push(new H.mC(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.h7N(o,new H.rt(s,r,"",p,new H.uK(q.d,null,null,null,null,"","","")),null),$async$a0T)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a0T,v)},
O2(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$O2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AU(),$async$O2)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.aeT,null,new C.dbJ(t),s,!0,!0,!0,K.a88,!1,!1,x.N),$async$O2)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cJO(r)
t.m(new C.dbK(t,q))
s=t.a
w=7
return A.b(C.RV(s.c,s.d,q),$async$O2)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O2,v)},
Xo(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.aeT,null,new C.dbP(t),r,!0,!0,!0,K.a88,!1,!1,x.e),$async$Xo)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dbQ(t,s))
r=t.a
w=4
return A.b(C.RV(r.c,r.d,s),$async$Xo)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.Bd(0,B.dU,B.nl)
case 1:return A.h(u,v)}})
return A.i($async$Xo,v)},
bRr(d){var w=d.bU(),v=B.a.aU(B.o.u(w.gcg()),2,"0"),u=B.a.aU(B.o.u(w.gcw()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gyx(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bZw()
if(r.e)w=D.adE
else if(J.cs(r.d)){w=r.y
v=r.gyx(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fgb,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(W.akR,new C.YX(w,v,0,q),q),q),B.bv,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kz.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bv],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aB(q,A.p(q,D.f05,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dF.j(0.45),B.I,18)],x.V),E.wr,B.n),q,q,q,q,B.Nv,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcGp(),q,q,q,q,q,q,!1,B.a4))
w.push(B.W)
w.push(A.hr(D.bPu,D.fRJ,r.gaNc(),q))
B.d.v(u,w)}w=A.at(A.ce(A.x(u,B.m,q,B.e,B.Q,0,B.p),B.t,q,B.y,q,B.eu,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kz.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.P,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dR:B.AM
u=A.x(A.a([new A.D(D.bzq,w,q),A.E(A.Jf(v,new C.dcf(r),J.ad(r.d)+1,q,r.gccV(),u,B.aM),1),r.bE_()],x.p),B.m,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c7(q,D.Y6,new A.an(B.a_,q,B.b1,B.t,A.a([D.aND,A.bl(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bZw(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cL(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Ke(B.e5,"AI",h.gbBT(),!0))
if(h.a.f)f.push(new C.Ke(B.ns,"Cover",h.gbMv(),!1))
if(h.a.f)f.push(new C.Ke(B.yW,"Header",h.gbHw(),!1))
if(J.cL(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Ke(B.uo,"Print",h.gcm_(),!1))
if(h.a.f&&J.cL(h.d)&&h.r>=0){v=h.w
u=v?B.hu:B.iW
t=v?"Save":"Edit"
f.push(new C.Ke(u,t,v?h.gcsg():new C.dc_(h),!1))}if(h.a.f)f.push(new C.Ke(B.hL,"Add page",h.gaNc(),!1))
v=C.hr8(h.y.Q)
u=h.gyx(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.M)(f),++m){l=f[m]
if(l.d)k=D.dAM
else{k=new A.aQ(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.ka.j(0.5),1,B.r,-1)
j=A.p(g,A.X(l.a,D.kz,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bK(i,i,i,i),new A.bj(k,k,k,k),g,new A.a9(B.a5,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kz.j(0.85)
p.push(new A.bA(1,B.bc,A.aB(B.c8,A.x(A.a([k,B.bD,new A.y(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.akY(v,u,t+" \xb7 "+s+" "+r,new C.dc0(h),A.B(p,B.m,g,B.e,B.i,0,g,g),g)},
zX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AU(),$async$zX)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a2w(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.ci(null,null,!0,null,new C.dbG(t,p),s,null,!0,!0,x.N),$async$zX)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yz(),$async$zX)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DU(),$async$zX)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fu("Swahili (Kiswahili)",!0),$async$zX)
case 18:w=16
break
case 17:w=19
return A.b(t.cD1(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zX)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zX,v)},
Zi(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.J(E.ka.j(0.3),B.r,1),r=x.p
return new A.D(B.ct,A.aO(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.wr,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A1.JY,w,w,w),A.d(g,w,w,w,w,w,w,B.Ad,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.m,w,B.e,B.i,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bf,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dc1(d,h),w,w,w,w,w,w,w),w)},
DU(){return this.bQW()},
bQW(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DU=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ci(null,null,!0,null,new C.dbT(r),a7,null,!0,!0,x.ei),$async$DU)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.ez("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ci(null,null,!1,null,new C.dbU(o),a7,null,!0,!0,x.H).fo(new C.dbV(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.M)(d),++a1){k=d[a1]
J.cc(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ag()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zg[a1]
J.cc(j,i.a)}w=8
return A.b(C.ahe(a0,a7,new C.dbW(o),d,l,e,j),$async$DU)
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
if(l!=null&&a6.a)A.a4(l,!0).eM()
l=o
l.si3($.aw())
J.aRE(l,0)
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
a7=j.bd9(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.r(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.B6(j.c,j.d,l),$async$DU)
case 11:w=12
return A.b(r.l7(),$async$DU)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zg[a1].a)
a5=l.cHl(j,12,a7)
l=r.a
w=15
return A.b(C.RV(l.c,l.d,a5),$async$DU)
case 15:if(r.c!=null)r.m(new C.dbX(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.Bd(0,B.dU,B.nl)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.cwa("Undo",new C.dbY(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.eo,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DU,v)},
Fu(d,e){return this.cD2(d,e)},
cD1(d){return this.Fu(d,!1)},
cD2(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fu=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.ez("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ci(null,null,!1,null,new C.dc8(a0),k,null,!0,!0,x.H).fo(new C.dc9(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.M)(k),++i){n=k[i]
J.cc(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a2J(m,new C.dca(a0)),$async$Fu)
case 10:w=8
break
case 9:w=11
return A.b(C.bDT(new C.dcb(a0),m,a2),$async$Fu)
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
if(o!=null&&f.a)A.a4(o,!0).eM()
o=a0
o.si3($.aw())
J.aRE(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.U(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.r(d,g)
j=J.r(p,g)
o.push(k.bd9(J.r(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.B6(k.c,k.d,o),$async$Fu)
case 12:w=13
return A.b(r.l7(),$async$Fu)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.cwa("Undo",new C.dcc(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fu,v)},
bE_(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dbH(v):u
r=A.aH(u,u,u,u,A.X(D.bLb,s?D.kz:B.aZ,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cL(v.d)&&!v.w&&v.r>=0)s=A.hr(A.X(B.w6,B.FE,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.FE,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbM5(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kz.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dbI(v):u
return A.bl(!0,new A.D(D.bze,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.eE,t<J.ad(v.d)?D.kz:B.aZ,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.i,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.ZJ.prototype={
T(){return new C.bfC(new A.as(B.as,$.aw()))}}
C.bfC.prototype={
ga21(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a1()},
gbPA(){var w,v=this.ga21()
A:{if("cover"===v){w=D.d2E
break A}if("book"===v){w=D.cZ5
break A}w=D.dtf
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.ka.j(0.5),n=x.p,m=A.B(A.a([D.dAN,B.at,D.bEP,A.aH(q,q,q,q,B.ld,q,q,q,new C.de1(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.i,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j0(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.de2(r),r.ga21()==="page",q,q,q,q))
if(r.a.d)l.push(A.j0(q,q,q,D.fMh,q,new C.de3(r),r.ga21()==="book",q,q,q,q))
l.push(A.j0(q,q,q,D.fz7,q,new C.de4(r),r.ga21()==="cover",q,q,q,q))
l=A.bW(B.bC,l,B.bq,q,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.Y,!1,q,!0,B.t,q,A.aN(),r.d,q,q,q,q,q,2,A.br(q,new A.b5(4,A.m(16),B.a0),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kr,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.df,!0,B.a3,q,B.ao,q,q,q,q)
w=A.a([],n)
for(v=r.gbPA(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mQ(q,B.c.j(0.08),new A.y(s,q,B.JV,q,q,q,q,q,q,q,q,q),B.hl,new C.de5(r,s),q,q,q,q))}return A.eS(q,E.Bi,A.ce(A.x(A.a([m,B.W,D.fPB,B.am,l,B.ae,k,B.O,A.bW(B.bC,w,B.bq,q,6,6),B.aA,A.dl(D.bPr,D.fQn,new C.de6(r,d),A.bo(B.b5,q,q,q,q,B.oA,q,q,new A.b7(A.m(16),B.a0),q,q,q)),B.au,D.fKv],n),B.E,q,B.e,B.Q,0,B.p),B.t,q,B.y,q,B.fk,q,q,B.ah),q,q,q,D.aky,B.d8,q,new A.b7(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.ZH.prototype={
T(){return new C.aAv(A.a([],x.gA))},
ge1(){return this.c}}
C.aeV.prototype={}
C.aAv.prototype={
Z(){this.a2()
this.l7()},
l7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$l7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Rn(p.c,p.d),$async$l7)
case 3:o=e
n=A.a([],x.gA)
p=J.aW(o)
case 4:if(!p.C()){w=5
break}s=p.gR(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bCp(r.c,q),$async$l7)
case 6:j=e
i=J
w=7
return A.b(C.L8(t.a.c,q),$async$l7)
case 7:m.push(new l.aeV(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dcw(t,n))
case 1:return A.h(u,v)}})
return A.i($async$l7,v)},
b8v(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Qq(d,e){return this.cet(0,e)},
cet(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a4(s,!1).cc(A.dX(new C.dcv(u,e),!0,null,x.y)),$async$Qq)
case 2:t=g
w=3
return A.b(u.l7(),$async$Qq)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.U(D.aRd)
return A.h(null,v)}})
return A.i($async$Qq,v)},
Fx(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.U(D.aR9)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.agy(s.c,s.d),$async$Fx)
case 5:q=e
w=6
return A.b(t.l7(),$async$Fx)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Qq(0,B.d.fW(t.d,new C.dcA(q))),$async$Fx)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Rk(p,s.f,r,n,o),$async$Fx)
case 10:m=e
w=11
return A.b(t.l7(),$async$Fx)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.U(D.aRd)
case 1:return A.h(u,v)}})
return A.i($async$Fx,v)},
PU(d,e){return this.cpZ(0,e)},
cpZ(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ci(null,null,!0,null,new C.dcz(t,e),s,null,!0,!0,x.y),$async$PU)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2V(s.c,s.d,e.a),$async$PU)
case 4:w=5
return A.b(t.l7(),$async$PU)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PU,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)k.push(o.bE2(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.J(E.ka.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aB(n,new A.fD(0.7142857142857143,A.p(n,A.x(A.a([D.dAO,B.ae,D.ekf,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kz.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b8,B.i,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcGl(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.J(E.ka.j(0.85),B.r,1.6)
s=A.aB(n,A.p(n,D.bXg,B.f,n,n,new A.o(B.w.j(0.3),n,A.J(E.ka.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dcB(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.w.j(0.3)
p=A.J(E.ka.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.bd,D.bFc,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.ffb,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h4,n,n,n)],l),B.m,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c2c,B.n),n,n,n,At.Nf,D.bxh,n,n,n)
if(o.e)k=D.adE
else k=k.length===0?D.b8E:A.cz(new C.dcC(k))
return A.c7(n,D.Y6,new A.an(B.a_,n,B.b1,B.t,A.a([D.aND,A.bl(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bE2(d){var w,v,u=this,t=null,s=u.b8v(d),r=d.c,q=x.p,p=A.a([A.bT(0,A.eN(B.A,new A.a7(300,420,new C.YX(d.b,s,r,t),t),B.f,B.dw),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aB(t,A.p(t,D.bWA,B.f,t,t,new A.o(B.w.j(0.55),t,A.J(B.aZ,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dct(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a1,t,t,t,D.feM,t,t,t)
v=r===1?"page":"pages"
return A.aB(t,A.x(A.a([new A.fD(0.7142857142857143,new A.an(B.a_,t,B.ab,B.t,p,t),t),B.O,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kz.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dcu(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.Ke.prototype={}
C.YX.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dK(D.zg,new C.cKM(m),new C.cKN()),j=m.c,i=D.D6.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mP:B.b8
v=new C.cKO(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.egY,28)],x.V)
u=x.p
t=A.a([A.bT(0,A.b4(l,l,l,new C.bcQ(j.x,h,l),B.ax),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aQ(3,3)
t.push(new A.cN(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bj(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.akS,8,0.85,2.2),v.$4(D.bC9,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.akS,8,0.85,2.4))
else if(r==="corners")t.push(A.bT(0,new A.D(D.bC5,A.b4(l,l,l,new C.bcH(h,l),B.ax),l),0,0,0))
r=A.X(D.azi[B.o.E(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a1,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.awy,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ae,p,B.ae,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aN,A.d(r,l,2,B.a1,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bT(0,new A.D(D.bCA,A.x(o,B.m,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aHu(l),D.f4p),l,l,l,46,0,l))
return A.p(l,A.bx(D.acg,new A.an(B.a_,l,B.ab,B.t,t,l),B.ap),B.f,l,l,new A.o(l,l,l,D.acg,i,new A.a9(B.ay,B.aE,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bcQ.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.e9()
f.d3(11)
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
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.ah()
l=f.ah()
k=f.ah()
$.S()
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=t.j(0.25+f.ah()*0.5).gp(0)
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
j.push(new A.aX(v,t))
k=i-0.04
j.push(new A.aq(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.aq(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bs())
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.G()
k=h.gbw().a.snapshot()
o.drawPath((h.e=new A.cl(k)).a,r)
r.delete()}break
default:$.S()
w=A.I()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.ah()
m=f.ah()
l=f.ah()
r=w.G()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.S()
g=A.I()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.ah()
m=f.ah()
l=f.ah()
r=g.G()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
aw(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bcH.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.S(),k=A.I(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.aa
k.c=2.4
k.d=B.bE
for(w=e.a,v=e.b,v=[D.eVF,new A.cw([w,0,-1,1]),new A.cw([0,v,1,-1]),new A.cw([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aF(l,B.ag,null,null,s)
s.push(new A.aX(r+p*34,q))
s.push(new A.aq(r,q))
s.push(new A.aq(r,q+o*34))
m=k.G()
s=n.gbw().a.snapshot()
w.drawPath((n.e=new A.cl(s)).a,m)
m.delete()
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=j.j(0.9).gp(0)
m=s.G()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
aw(d){return!d.b.A(0,this.b)}}
C.ut.prototype={}
C.Zf.prototype={
T(){return new C.bcO()}}
C.bcO.prototype={
gob(){var w=this.d
return w===$?this.d=this.a.c:w},
gyx(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.bb(w.b,B.b3,B.aO),$.aw())}return v},
gaBB(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.bb(w.c,B.b3,B.aO),$.aw())}return v},
garr(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.bb(w.y,B.b3,B.aO),$.aw())}return v},
q(){var w=this,v=w.gyx(0),u=v.S$=$.aw()
v.P$=0
v=w.gaBB()
v.S$=u
v.P$=0
v=w.garr()
v.S$=u
v.P$=0
w.a1()},
as4(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j0(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.d3B(this,f,u),e===u,s,s,s,s))}return A.bW(B.bC,r,B.bq,s,6,8)},
axJ(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b5(4,A.m(14),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lN,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gob(),a0=f.gyx(0),a1=a0.a.a,a2=f.gaBB(),a3=a2.a.a,a4=f.garr(),a5=d.bd7(a4.a.a,a3,a1)
a1=x.w
a3=A.aJ(a6,e,a1).w
a1=A.aJ(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a7(190,260,A.eN(B.A,new A.a7(270,370,new C.YX(a5,d,f.a.e,e),e),B.f,B.dw),e),e,e,e)
a0=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a0,e,e,e,e,e,2,f.axJ("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4_(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a3,e,B.ao,e,e,e,e)
a2=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a2,e,e,e,e,e,2,f.axJ("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d40(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a3,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zg[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aZ
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bK(o,o,o,o),e,e,new A.a9(B.ay,B.aE,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aB
v.push(A.aB(e,A.x(A.a([p,B.cL,new A.y(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d41(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bW(B.bC,v,B.bq,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b5.j(0.35):B.c.j(0.07)
m=new A.aQ(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eG:B.K,2,B.r,-1)
q.push(A.aB(e,A.p(e,A.X(D.azi[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bK(o,o,o,o),new A.bj(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d42(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bW(B.bC,q,B.bq,e,8,8)
a4=A.aM(e,B.Y,!1,e,!0,B.t,e,A.aN(),a4,e,e,e,e,e,2,f.axJ("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d43(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.df,!0,B.a3,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,L.vf,e,e,e)
m=A.a([],w)
for(l=D.D6.gdV(D.D6),l=l.gaf(l);l.C();){k=l.gR(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eG:B.aZ
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bK(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aB
m.push(A.aB(e,A.x(A.a([j,B.bD,new A.y(i,e,new A.F(!0,h,e,e,e,e,10,B.P,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d44(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bW(B.bC,m,B.bq,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,L.vf,e,e,e)
k=f.gob()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bl(!0,new A.cU(new A.aZ(0,1/0,0,a1.a.b*0.92),A.cr(A.a([D.fJY,B.ae,d,B.aN,a0,B.W,a2,B.aA,D.fQ9,B.O,v,B.aA,D.fK6,B.O,q,B.aA,a4,B.aA,p,B.O,m,B.aA,l,A.kO(e,9,""+B.k.V(f.gob().f),36,18,new C.d45(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,L.vf,e,e,e),B.am,f.as4(D.a57,f.gob().r,new C.d46(f),D.dwu),B.ae,A.d("BORDER",e,e,e,e,e,e,L.vf,e,e,e),B.am,f.as4(D.a4v,f.gob().w,new C.d47(f),D.dwA),B.ae,A.d("COVER MATERIAL",e,e,e,e,e,e,L.vf,e,e,e),B.am,f.as4(D.a4r,f.gob().x,new C.d49(f),D.dy2),B.am,A.iI(e,B.b5,e,B.af,e,new C.d4a(f),e,e,e,D.fEd,f.gob().z),B.bv,A.bH(D.fIG,e,new C.d4b(f,a6),A.bo(B.b5,e,e,e,e,B.oA,e,e,new A.b7(A.m(16),B.a0),e,e,e))],w),e,Z.ako,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aHu.prototype={
a3(d,e){var w,v,u,t=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
t.D(new A.aX(0,0))
w=e.a
t.D(new A.aq(w,0))
v=e.b
t.D(new A.aq(w,v))
t.D(new A.aq(w/2,v-12))
t.D(new A.aq(0,v))
t.D(new A.bs())
u=A.I()
u.sam(D.c2T.aB(0,new A.a3(0,0,0+w,0+v)))
d.aG(t,u)},
aw(d){return!1}}
C.bi7.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.S()
w=A.I()
w.sam(D.c1T.aB(0,new A.a3(0,0,a3,a4)))
a5.aP(new A.a3(0,0,a3,a4),w)
v=B.k.dg(a2/112)
u=new A.e9()
u.d3(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ah()*20
l=56+u.ah()*40
k=D.d2D[u.au(9)]
j=u.au(14)
J.bm(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a3(n,j,n+m,j+l)
h=A.bt(i,B.hk)
g=new A.ap(B.R,B.N,B.U,B.V,B.S)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sam(new A.a9(B.a5,B.a8,B.x,A.a([f,k,e],t),a0,a0).aB(0,i))
d=g.G()
w.drawRRect(A.el(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ap(B.R,B.N,B.U,B.V,B.S)
e.r=E.ka.j(0.55).gp(0)
d=e.G()
w.drawRect(A.bF(new A.a3(h,j,g,j+2)),d)
d.delete()
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=E.ka.j(0.4).gp(0)
d=j.G()
w.drawRect(A.bF(new A.a3(h,q,g,p)),d)
d.delete()
w.restore()
j=u.au(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.sam(D.c1f.aB(0,new A.a3(0,r,a3,q)))
d=p.G()
w.drawRect(A.bF(new A.a3(0,r,a3,q)),d)
d.delete()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=B.w.j(0.5).gp(0)
p.z=B.lJ
d=p.G()
w.drawRect(A.bF(new A.a3(0,q,a3,q+14)),d)
d.delete()}w=A.I()
w.r=D.bcm.j(0.72).gp(0)
a5.aP(new A.a3(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.I()
a4.sam(new A.c1(B.A,0.5,B.x,a0,0,A.a([D.bkr.j(0.22),B.K],t),a0,a0).aB(0,A.bX(new A.t(w,a2),a1)))
a5.ad(new A.t(w,a2),a1,a4)},
aw(d){return!1}}
C.baZ.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cN(14,w*2,v*2.2,v*2,o,o,new A.kY(new A.o(A.ar(D.kz,D.bpl,w/4),o,new A.bK(B.a0,new A.ay(B.w.j(0.12),1,B.r,-1),B.a0,B.a0),B.L8,o,o,B.n),B.bg,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aJe,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aQ(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.ka.j(0.6),o,o,new A.bj(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qu,B.i,0,B.p),B.f,o,o,new A.o(o,o,o,D.b0S,u,D.c2R,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dq,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aHu(o),D.f4k),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aV7(p.y,r,I.iP,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),p.r,o,o,o,o,o,2,A.br(o,B.eF,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,I.iP.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.ftj,!0,B.a3,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,I.iP.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.W,A.E(A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),p.w,o,o,o,o,o,2,A.br(o,B.eF,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,I.iP.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fk3,!0,B.a3,B.A6,B.ao,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.ftb,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,I.iP.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.O,A.B(A.a([A.E(A.p(o,o,B.f,D.Fr.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fC,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Fr.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Fr.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.i,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,I.iP.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Yb(A.cS(A.a([A.cS(o,o,o,o,o,o,o,o,o,D.fnd,B.a.aq(k,0,1)),A.cS(o,o,o,o,o,o,o,o,o,o,B.a.b7(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,I.iP.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ce(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hY,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,I.iP.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bx(B.L8,new A.an(B.a_,o,B.ab,B.t,A.a([t,new A.D(D.bBC,A.x(s,B.ak,o,B.e,B.i,0,B.p),o),A.ao(0,A.c2(o,new A.o(o,o,o,o,o,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bg),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.o(o,o,o,B.L8,v,D.c3o,B.n),o,o,o,o,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,o,o))
return new A.an(B.a_,o,B.ab,B.t,l,o)}}
C.akZ.prototype={
T(){return new C.al_(new A.ez(0,$.aw()),new C.bR2(),new C.alh(),D.hnr,null,null)},
gcZ(){return this.d}}
C.a0X.prototype={
a5(){return"_Step."+this.b}}
C.al_.prototype={
gC2(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bCl(w.c,6,w.e,!1)
u.d!==$&&A.bG()
u.d=v
t=v}return t},
gh4(d){var w,v=this,u=v.e
if(u===$){w=C.Mr(v.a.c)
v.e!==$&&A.bG()
v.e=w
u=w}return u},
gTr(){var w=this.gh4(0)
return w.gyR()==null?"Babu":B.a.i(w.gyR().b)},
Z(){var w,v=this
v.a2()
w=v.gh4(0).gyR()
w=w==null?null:w.c
v.r.b=w===D.oe
w=v.qO(new C.bPo(v))
w.h2(0)
v.x!==$&&A.aP()
v.x=w
v.a1Z("Come closer, my children. I am "+v.gTr()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
q(){var w=this,v=w.x
v===$&&A.c()
v.q()
v=w.y
if(v!=null)v.a4(0)
v=w.z
if(v!=null)v.a4(0)
w.w.q()
v=w.f
v.S$=$.aw()
v.P$=0
w.btF()},
a1Z(d){var w=this,v=w.y
if(v!=null)v.a4(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dg(D.aj0,new C.bPi(w))},
bq6(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a4(0)
v.m(new C.bPr(v))},
ade(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bq_(){return this.b81()},
b81(){var w=this,v=w.gC2()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bPj(w))
w.a1Z(u)
v=w.z
if(v!=null)v.a4(0)
w.z=A.cK(B.m0,new C.bPk(w))},
cHs(){var w=this
w.m(new C.bPn(w))
w.a1Z(w.gC2()[w.as].a)},
KG(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.abq)return
w=p.gC2()
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
t.r=s.a+1.5}q=new A.e9()
q.d3(v*7+d)
p.m(new C.bPm(p,d,u,q))
p.a1Z(u?D.dhV[q.au(4)]+" "+w[p.as].d:D.deB[q.au(3)]+" "+w[p.as].d)},
li(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$li=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gC2()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bEC(t.at,t.ay,p)
t.m(new C.bPp(t,s))
t.a1Z(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Bq(t.a.d,s),$async$li)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.Br(r.d,r.c.a,"fire",t.at*10),$async$li)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bPq())
w=1
break
case 4:++t.as
t.b81()
case 1:return A.h(u,v)}})
return A.i($async$li,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c7(v,D.Xe,new A.an(B.a_,v,B.ab,B.t,A.a([A.bT(0,new A.ex(A.b4(v,v,v,new C.aVc(u,w.r,w.w,u),B.ax),v),0,0,0),A.bl(!0,A.x(A.a([w.c8V(0),B.b0,w.bOO()],t),B.m,v,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],t),v),v,!1,!1,v,v)},
c8V(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.OZ,s,s,s,new C.bPl(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gC2().length;++w){v=t.as
if(w<v||t.Q===D.aYw)v=B.cI
else v=w===v?B.c:B.aZ
u=new A.aQ(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bj(u,u,u,u),s,s,B.n),s,7,s,D.bx1,s,s,s,22))}p=A.E(A.x(A.a([D.fB_,A.B(p,B.m,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.m(14)
u=A.J(B.fr,B.r,1)
return new A.D(D.bCM,A.B(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.k.V(t.cy*100)+"%",s,s,s,s,s,s,B.iK,s,s,s),B.f,s,s,new A.o(B.aT,s,u,v,s,s,B.n),s,s,s,s,B.h4,s,s,s)],q),B.m,s,B.e,B.i,0,s,s),s)},
bOO(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gh4(0).gyR()
if(h==null)w=1
else w=h.c===D.oe?0:1
v=j.dx
u=j.db
t=D.pY.j(0.96)
s=A.m(22)
r=A.J(B.cI,B.r,3)
q=A.b4(i,i,i,new C.bnv(w,i),B.ax)
p=A.d(j.Q===D.abq?j.gTr()+" asks":"Elder "+j.gTr(),i,i,i,i,i,i,D.aSo,i,i,i)
o=j.db
o=B.a.aq(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aB(B.c8,A.B(A.a([new A.a7(62,62,q,i),B.at,A.E(A.x(A.a([p,B.bD,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aSE,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbq5(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.a9o("Sit down by the fire",j.gbpZ()),i,i,i)
break
case 1:v=A.at(j.a9o("Ask me, Elder",j.gcHr()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gC2()[j.as].b,m<u.length;++m){q=new A.aQ(14,14)
l=new A.ay(D.lr,2.5,B.r,-1)
v.push(A.aB(i,A.p(i,new A.y(u[m],i,D.aSA,i,B.L,i,i,i,i,i,i,i),B.f,i,D.acS,new A.o(D.ai0,i,new A.bK(l,l,l,l),new A.bj(q,q,q,q),i,i,B.n),i,i,i,i,U.vU,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bPf(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bW(B.bC,v,B.bq,i,8,8)
break
case 3:v=j.fr
u=v?B.l7:Ah.anF
u=A.X(u,v?B.ei:D.lr,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.ei:D.lr,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gC2().length?"Finish":"Next story"
v=A.B(A.a([u,B.ac,q,j.a9o(v,j.gq4(j))],n),B.m,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gC2().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aSU,i,i,i)],n)
u=j.cx
if(u>0){u=C.aPr(u)
q=C.aPr(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.a9T,i,i,i))}v.push(B.O)
v.push(j.a9o("Back to the games",new C.bPg(j)))
v=A.x(v,B.m,i,B.e,B.i,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.W,v],n),B.E,i,B.e,B.Q,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aAI,i,B.n),i,i,i,B.y7,B.bf,i,i,i)},
a9o(d,e){var w=null,v=A.m(16),u=A.J(B.cI,B.r,2)
return A.aB(w,A.p(w,A.d(d,w,w,w,w,w,w,A1.JY,w,w,w),B.f,w,w,new A.o(D.lr,w,u,v,w,w,B.n),w,w,w,w,D.bAv,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bnv.prototype={
a3(d,e){X.fN1(d,e.ei(B.I),e.gdC()*0.45,this.b,0,0.4)},
aw(d){return d.b!==this.b}}
C.aAt.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.bR2.prototype={}
C.rX.prototype={}
C.bnw.prototype={}
C.alh.prototype={
Md(d){var w,v=this
if(v.a==null||!J.A(v.b,d)){w=v.a
if(w!=null)w.q()
v.a=C.i1z(d)
v.b=d}w=v.a
w.toString
return w},
q(){var w=this.a
return w==null?null:w.q()}}
C.aVc.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.b.a,k=n.c,j=d.a,i=n.d.Md(e).b
i===$&&A.c()
i=i.a
i===$&&A.c()
i=i.a
i.toString
j.drawPicture(i)
i=e.a
w=e.b
v=Math.min(i/450,w/900)
J.bm(j.save())
j.translate((i-450*v)/2,(w-900*v)/2)
d.bW(0,v)
n.cxg(d,l)
n.bNp(d,l)
n.cFj(d,l,k)
u=0.8+0.2*Math.sin(l*8)*Math.sin(l*3.7)+k.w*0.4
J.bm(j.save())
j.translate(225,580)
d.p0(0,1,0.42)
t=240*(0.6+0.5*k.w)
$.S()
s=A.I()
r=x.O
q=x.n
s.sam(A.tn(B.I,t,A.a([D.boc.j(0.55*u),G.Mx.j(0.2*u),B.K],r),A.a([0,0.5,1],q),B.x,m,m,0))
d.ad(B.I,t,s)
j.restore()
p=A.a([new A.z(528,new C.bQV(n,d,l,k)),new A.z(540,new C.bQW(n,d,l,k)),new A.z(546,new C.bQX(n,d,l,k)),new A.z(574,new C.bQY(n,d,l,k)),new A.z(612,new C.bQZ(n,d,l,k)),new A.z(650,new C.bR_(n,d,l,k)),new A.z(656,new C.bR0(n,d,l,k))],x.E)
B.d.aY(p,new C.bR1())
for(o=0;o<7;++o)p[o].b.$0()
n.bEl(d,l,k)
n.bQU(d,l)
j.restore()
$.S()
j=A.I()
j.sam(A.tn(new A.t(i/2,w*0.6),e.ganb()*0.75,A.a([B.K,D.bcg],r),A.a([0.55,1],q),B.x,m,m,0))
d.aP(new A.a3(0,0,0+i,0+w),j)},
aw(d){return d.c!==this.c||d.d!==this.d},
cxg(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e9()
g.d3(3)
for(w=d.a,v=0;v<36;++v){u=g.ah()
t=g.ah()
s=Math.sin(e*(1.5+g.ah()*2)+v)
r=g.ah()
s=B.c.j(0.25+0.7*(0.5+0.5*s))
$.S()
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.r=s.gp(0)
p=q.G()
w.drawCircle(u*450,20+t*300,0.8+r*1.1,p)
p.delete()}o=B.k.F(e,17)/1.2
if(o<1){n=new A.t(60+o*220,70+o*90)
d.bo(n,n.aF(0,D.egv),C.it(B.c.j((1-o)*0.9),1.6))}for(u=e*0.035,t=e*9,s=x.v,m=0;m<3;++m){l=B.k.F(u+m*0.05,1)
r=-20+l*500
q=120+Math.sin(l*9+m)*14+m*12
k=Math.sin(t+m*2)
j=$.S()
i=A.a([],s)
j=new A.aF(j.r,B.ag,null,null,i)
k=q+k*4
i.push(new A.aX(r-6,k))
h=q-3
i.push(new A.c4(r-2,h,r,q))
i.push(new A.c4(r+2,h,r+6,k))
r=new A.ap(B.R,B.N,B.U,B.V,B.S)
r.b=B.aa
r.c=1.6
r.r=D.beX.gp(0)
r.d=B.bE
r.e=B.dT
p=r.G()
r=j.gbw().a.snapshot()
w.drawPath((j.e=new A.cl(r)).a,p)
p.delete()}},
bNp(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=0.75+0.25*Math.sin(a0*9)*Math.sin(a0*5.3)
for(w=a0*0.12,v=d.a,u=0.78*e,t=0.7*e,s=0;s<3;++s){r=D.axP[s]
q=r.a
p=r.c
o=q+p*0.1
n=r.b
m=r.d
l=n-m*0.38
k=A.bJ(new A.t(o,l),m*0.74,p*0.5)
j=O.Mq.j(u)
$.S()
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.r=j.gp(0)
h=i.G()
v.drawOval(A.bF(k),h)
h.delete()
p=A.bJ(new A.t(o+0,l+m*0.1),m*0.4,p*0.28)
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.r=O.xz.j(t).gp(0)
h=l.G()
v.drawOval(A.bF(p),h)
h.delete()
for(p=q*0.01,m=n-m-r.e*0.9,g=0;g<5;++g){f=B.k.F(w+g/5+p,1)
o=Math.sin(f*6+g)
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.r=D.afy.j(0.16*(1-f)).gp(0)
h=n.G()
v.drawCircle(q+o*6+f*18,m-f*70,4+f*12,h)
h.delete()}}},
cFj(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
C.bBK(d,D.egr,0.9,a0,D.hjy,!1,!1,D.abo,1,!1)
w=$.S().r
v=x.v
u=new A.aF(w,B.ag,e,e,A.a([],v))
u.D(new A.aX(52,470))
u.D(new A.aq(50,486))
u.D(new A.aq(66,486))
u.D(new A.aq(64,470))
u.D(new A.bs())
t=A.I()
t.r=D.ahl.gp(0)
d.aG(u,t)
C.bBK(d,D.egt,0.95,a0,D.hjt,!1,!1,D.abp,1,!0)
t=new A.aF(w,B.ag,e,e,A.a([],v))
t.D(new A.aX(417,510))
t.D(new A.c4(431,532,445,510))
t.D(new A.aq(441,548))
t.D(new A.c4(431,553,421,548))
t.D(new A.bs())
u=A.I()
u.r=G.F7.gp(0)
d.aG(t,u)
u=A.bJ(D.egs,8,28)
t=A.I()
t.r=D.bqr.gp(0)
d.dO(u,t)
C.bBK(d,new A.t(-30+B.k.F(a0/26,1)*510,492),0.82,a0,D.hjz,!0,!1,D.Wa,1,!1)
t=B.k.F(a0/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.dO(A.bJ(new A.t(s+q*16,r-6),16,11),C.it(D.ahd,1.8))
u=q<0
C.bBK(d,new A.t(s-q*6,r),0.62,a0,D.hjB,!1,u,D.Wa,2.2,!1)
C.bBK(d,new A.t(s-q*32,r+4),0.58,a0+1,D.hjx,!1,u,D.Wa,2.2,!1)
this.bTz(d,D.eg6,a0)
for(u=d.a,t=a0*0.5,p=a0*4,o=0;o<3;++o){n=88+o*17+Math.sin(t+o)*6
m=520+B.o.F(o,2)*6
l=Math.max(0,Math.sin(p+o*2))*4
k=A.bJ(new A.t(n,m),8,11)
j=o===1
i=j?D.ah9:D.ahJ
h=new A.ap(B.R,B.N,B.U,B.V,B.S)
h.r=i.gp(0)
g=h.G()
u.drawOval(A.bF(k),g)
g.delete()
k=j?D.ah9:D.ahJ
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=k.gp(0)
g=j.G()
u.drawCircle(n+5,m+(-3+l),2.6,g)
g.delete()
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.b=B.aa
j.c=1
j.r=B.aC.gp(0)
j.d=B.bE
j.e=B.dT
g=j.G()
u.drawLine.apply(u,[n+7.5,m+(-2+l),n+10,m+(-1.5+l),g])
g.delete()
n+=-1
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.b=B.aa
j.c=1
j.r=B.aC.gp(0)
j.d=B.bE
j.e=B.dT
g=j.G()
u.drawLine.apply(u,[n,m+4,n,m+8,g])
g.delete()}f=a0<a1.f
u=A.bJ(D.a72,15+Math.sin(a0*2)*0.8,40)
t=A.I()
t.r=D.afV.gp(0)
d.dO(u,t)
u=A.bJ(D.a72.a8(0,new A.t(-14,f?-9:-2)),12,15)
t=A.I()
t.r=D.bh0.gp(0)
d.dO(u,t)
t=new A.aF(w,B.ag,e,e,A.a([],v))
t.D(new A.aX(130,592-(f?16:6)))
t.D(new A.aq(134,592-(f?22:9)))
t.D(new A.aq(138,592-(f?16:6)))
t.D(new A.bs())
u=A.I()
u.r=D.bha.gp(0)
d.aG(t,u)
u=D.a72.a8(0,new A.t(-17,f?-9:-2))
t=A.I()
t.r=B.hW.gp(0)
d.ad(u,1.1,t)
v=new A.aF(w,B.ag,e,e,A.a([],v))
v.D(new A.aX(168,590))
w=Math.sin(a0*8)
v.D(new A.c4(180,588+w*(f?6:0),178,595))
d.aG(v,C.it(D.afV,3.5))},
bTz(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=Math.max(0,Math.sin(f*0.6))*9,j=e.a8(0,new A.t(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=j.a,u=j.b,t=u+3,s=f*2,r=u+16,q=d.a,p=0;p<4;++p){o=w[p]
n=Math.sin(s+o)
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.b=B.aa
m.c=2
m.r=D.Xp.gp(0)
m.d=B.bE
m.e=B.dT
l=m.G()
q.drawLine.apply(q,[v+o,t,v+(o+n*1.5),r,l])
l.delete()}w=A.bJ(j,17,32)
s=$.S()
r=A.I()
r.r=D.F5.gp(0)
d.dO(w,r)
r=A.bJ(j.a8(0,D.efx),7,26)
w=A.ar(D.F5,B.w,0.12)
w.toString
q=A.I()
q.r=w.gp(0)
d.dO(r,q)
s=new A.aF(s.r,B.ag,null,null,A.a([],x.v))
s.D(new A.aX(v+13,u-3))
s.D(new A.aq(v+22,u-8+k))
s.D(new A.aq(v+20,u+k-0.5))
s.D(new A.aq(v+12,t))
s.D(new A.bs())
t=A.I()
t.r=D.F5.gp(0)
d.aG(s,t)
t=A.bJ(j.a8(0,new A.t(24,-7+k)),9,12)
s=A.I()
s.r=D.F5.gp(0)
d.dO(t,s)
s=-11+k
d.bo(j.a8(0,new A.t(22,s)),j.a8(0,new A.t(21,-17+k)),C.it(D.Xp,1.6))
d.bo(j.a8(0,new A.t(26,s)),j.a8(0,new A.t(28,-16+k)),C.it(D.Xp,1.6))
s=j.a8(0,new A.t(26,-8+k))
t=A.I()
t.r=B.w.gp(0)
d.ad(s,0.9,t)
d.bo(j.a8(0,new A.t(26,-3+k)),j.a8(0,new A.t(26,1+k)),C.it(D.bjN,1.4))
d.bo(j.a8(0,D.eiu),j.a8(0,new A.t(-19,-7+Math.sin(f*7)*2)),C.it(D.F5,2.4))},
bQS(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=a5.a,v=0;v<14;++v){u=v*3.141592653589793*2/14
t=Math.cos(u)
s=Math.sin(u)
if(Math.sin(u)<0){t=A.bJ(new A.t(225+t*36,574+(s*13+6)),8,11)
$.S()
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=D.bp7.gp(0)
r=s.G()
w.drawOval(A.bF(t),r)
r.delete()}}t=A.bJ(D.a74.a8(0,B.cx),17,52)
$.S()
s=A.I()
s.r=D.bbS.gp(0)
a5.dO(t,s)
s=A.bJ(D.a74.a8(0,B.cx),12,44)
t=D.bfk.j(0.6+0.3*Math.sin(a6*6))
q=A.I()
q.r=t.gp(0)
a5.dO(s,q)
for(p=0;p<3;++p){u=D.de5[p]
t=225+Math.cos(u)*3
s=Math.cos(u)
q=Math.sin(u)
o=Math.cos(u)
n=Math.sin(u)
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.b=B.aa
m.c=7
m.r=D.Fk.gp(0)
m.d=B.bE
m.e=B.dT
r=m.G()
w.drawLine.apply(w,[t+s*24,579+q*4,t-o*24,579-n*4,r])
r.delete()
n=Math.cos(u)
o=Math.sin(u)
q=Math.cos(u)
s=Math.sin(u)
m=D.B0.j(0.6)
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.b=B.aa
l.c=2
l.r=m.gp(0)
l.d=B.bE
l.e=B.dT
r=l.G()
w.drawLine.apply(w,[t+n*24,579+(o*4-2),t-q*24,579-(s*4+2),r])
r.delete()}k=46+80*a7.w
j=[D.eSz,D.eT0,D.eTT,D.eU9,D.eTR]
for(t=a6*8,s=a6*15,q=a6*3.3,o=x.v,i=0;i<3;++i){h=[1,0.72,0.42][i]
g=[D.bmC,D.bj9,D.boB][i]
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
e.push(new A.aX(a1-a2,578))
l=a1+a0*0.6
e.push(new A.kX(a1-a2*1.1,578-d*0.45,l-a2*0.2,578-d*0.7,a1+a0,578-d))
e.push(new A.kX(l+a2*0.3,578-d*0.65,a1+a2*1.15,578-d*0.4,a1+a2,578))
e.push(new A.bs())
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.r=g.j(n?0.9:0.95).gp(0)
r=l.G()
l=a3.gbw().a.snapshot()
w.drawPath((a3.e=new A.cl(l)).a,r)
r.delete()}}for(t=a6*1.5,v=0;v<22;++v){a4=B.k.F(a6*(0.35+B.o.F(v,5)*0.06)+v/22,1)
s=Math.sin(v*1.9+t)
q=a7.w
o=B.o.F(v,3)
n=F.ahG.j((1-a4)*0.9)
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=n.gp(0)
r=m.G()
w.drawCircle(225+s*(10+a4*26),564-a4*(110+80*q),1.2+o*0.6,r)
r.delete()}for(t=a6*0.1,s=574-k,v=0;v<6;++v){a4=B.k.F(t+v/6,1)
q=Math.sin(a4*5+v)
o=D.afy.j(0.1*(1-a4))
$.S()
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.r=o.gp(0)
r=n.G()
w.drawCircle(225+q*16+a4*12,s-a4*120,7+a4*20,r)
r.delete()}},
bQU(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=d.a,r=0;r<16;++r){q=B.k.F(r*83+Math.sin(w+r)*40+v,450)
p=420+B.o.F(r*37,300)+Math.sin(u+r*2)*26
o=Math.max(0,Math.sin(t+r*1.7))
n=D.bqz.j(0.18*o)
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=n.gp(0)
l=m.G()
s.drawCircle(q,p,5,l)
l.delete()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=D.bkw.j(0.9*o).gp(0)
l=m.G()
s.drawCircle(q,p,1.4,l)
l.delete()}},
c2u(d,e){switch(d){case 0:return e.b?D.hju:D.aY4
case 1:return e.b?D.hjA:D.aY2
case 2:return D.aY1
case 3:return D.aY0
case 4:return D.aY3
default:return D.aY5}},
aBP(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
QJ(d,e,f,g){var w,v=this,u=D.a4D[e],t=v.c2u(e,g),s=new C.bnw(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a4D[e],l=e===0
m=B.k.E(((l?D.aJ7:D.aJc).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a78
s.as=D.Dz
if(l){s.a=o?v.aBP(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.t(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.t(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.Dz
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.efF
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.eh1
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
s.Q=D.ejp
s.as=D.aJp}if(e===2&&g.x!=null&&f<g.y){s.a=v.aBP(f,5)
s.b=0.4
s.as=new A.t(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aBP(f,e*3)
s.b=0.5
s.c=0.4}}C.hpR(d,u.a,u.b*1.2,t,s,f,e,null)},
bEl(d,e,f){var w=new C.bQU(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gdc(d){return this.c}}
C.af3.prototype={
a5(){return"_Stand."+this.b}}
C.ad2.prototype={}
C.lh.prototype={}
C.bPE.prototype={
bz1(d){var w,v,u,t,s=A.U(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aP()
this.c=s},
FO(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aY(r,new C.bPF())
return r},
aqb(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aLi(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.M)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
alF(d){var w,v,u=A.aY(x.N),t=d,s=0
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
gyR(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aY(w,new C.bPG(this))
return B.d.gI(w)}}
C.at6.prototype={}
C.zc.prototype={}
C.ajX.prototype={
gaE7(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Z(w,new C.bKE(),A.T(w).k("Z<1>")).gL(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ag(){var w=this
return A.G(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Mc.prototype={
gaol(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
if(t.gaE7(0))s.push(t)}return s},
ag(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.M)(w),++s){r=w[s]
p.push(A.G(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.G(["id",this.a,"title",q,"qs",p],u,t)},
cYj(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaol(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.M)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lh(B.a.i(s.a),p,B.d.cu(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.b9e.prototype={}
C.a9c.prototype={}
C.bgs.prototype={}
C.af1.prototype={}
C.ajb.prototype={
T(){return new C.ajc(B.bF,A.a([],x.cC),A.a([],x.e4),null,null)},
gcZ(){return this.d}}
C.ajc.prototype={
gMv(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bCl(w.c,8,w.e,!1)
u.d!==$&&A.bG()
u.d=v
t=v}return t},
gb8n(){var w,v=this,u=v.e
if(u===$){w=v.qO(v.gc8X())
v.e!==$&&A.bG()
v.e=w
u=w}return u},
Z(){this.a2()
this.gb8n().h2(0)},
q(){this.gb8n().q()
this.btA()},
h2(d){this.m(new C.bIS(this))},
c8Y(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.ft(0,v)
if(w.c!=null)w.m(new C.bIN())},
b6L(){var w,v,u,t=this,s=t.r
B.d.a9(s)
w=t.gMv()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bgs(u,(u+0.5)/v,w[t.x].b[u]))},
ft(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bs(w,new C.bIT())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c5j()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMv()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.k.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.arD(v,0.8,B.cI)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.arD(m.cy,0.8,F.n6)
m.aXz("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.arD(q,0.88,D.lr)
p=m.gMv()[m.x]
n=p.c
if(u===n){m.aXz("The right gourd fell! It was "+p.b[n]+".")
return}}}},
arD(d,e,f){var w,v,u,t=new A.e9()
t.d3(B.k.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ah()*3.141592653589793*2
w.push(new C.af1(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aXz(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.PV()}},
c5j(){var w=this
if(w.x+1>=w.gMv().length){w.PV()
return}++w.x
w.b6L()},
PV(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$PV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMv().length
r=C.bEC(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bIL())
w=2
return A.b(C.Bq(u.a.d,r),$async$PV)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.Br(t.d,t.c.a,"catch",u.z),$async$PV)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bIM())
return A.h(null,v)}})
return A.i($async$PV,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.c8W()
else w=v.ch?v.c8Z():A.at(new A.D(B.eu,A.x(A.a([D.aTP,B.O,D.fCD,B.W,D.fIL,B.dS,C.ub("Play",v.geW(v),B.cI,B.i1,D.fq)],x.p),B.m,u,B.e,B.Q,0,B.p),u),u,u,u)
return new C.tl("Calabash Catch",w,B.fu,u)},
c8Z(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.i_:B.GN
p.push(A.X(u,v?B.aw:B.bY,r,r,r,22))}p.push(B.b0)
v=s.x
u=s.gMv()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aSm,r,r,r))
p.push(B.bd)
v=A.m(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.iK,r,r,r),B.f,r,r,new A.o(B.bz,r,r,v,r,r,B.n),r,r,r,r,B.G_,r,r,r))
p=A.B(p,B.m,r,B.e,B.i,0,r,r)
v=A.m(18)
t=A.J(B.cI,B.r,3)
return A.x(A.a([new A.D(D.byi,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fn5,B.L,r,r),B.f,r,r,new A.o(D.pY,r,t,v,r,r,B.n),r,r,r,B.fj,B.bf,r,r,1/0),B.am,A.E(A.cz(new C.bIR(s)),1)],q),B.m,r,B.e,B.i,0,B.p)},
c8W(){var w=this,v=null,u=A.at(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pz,v,v,v),v,v,v),t=A.at(A.d(""+w.Q+" of "+w.gMv().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.UA,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cr(A.a([D.b9l,u,t,B.aN,new C.HW(s,r,w.cx,v),B.aN,A.at(C.ub("Back to the games",new C.bIK(w),B.cI,B.l6,D.fq),v,v,v)],x.p),v,B.a9,v,v,B.ah,!1)}}
C.bbD.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a6.a,a1=a6.b,a2=0+a0,a3=$.S(),a4=A.I()
a4.sam(A.jo(B.I,new A.t(0,a1),D.cXK,F.ay6,B.x,d))
a5.aP(new A.a3(0,0,a2,0+a1),a4)
a4=A.I()
a4.r=F.MA.gp(0)
a5.ad(new A.t(a0*0.82,a1*0.16),22,a4)
a4=x.v
w=A.a([],a4)
v=new A.aF(a3.r,B.ag,d,d,w)
a3=a1*0.7
v.D(new A.aX(0,a3))
for(u=0;u<=a0;u+=6){t=new A.aq(u,a3+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.by(s)
t=v.e
if(t!=null)t.a.delete()
v.e=null}v.D(new A.aq(a0,a1))
v.D(new A.aq(0,a1))
a3=$.S()
w=A.I()
w.r=D.bge.gp(0)
a5.aG(v,w)
r=a0*0.12
a3=new A.aF(a3.r,B.ag,d,d,A.a([],a4))
w=a1*0.86
a3.D(new A.aX(r-26,w))
t=a1*0.5
s=a1*0.34
a3.D(new A.c4(r-14,t,r-10,s))
a3.D(new A.aq(r+10,s))
a3.D(new A.c4(r+14,t,r+26,w))
a3.D(new A.bs())
w=A.I()
w.r=D.aeI.gp(0)
a5.aG(a3,w)
for(a3=a1*0.36,w=a1*0.24,t=a5.a,s=a1*0.22,q=0;q<4;++q){p=D.ciH[q]
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.aeI.gp(0)
o.c=7
o.d=B.bE
n=o.G()
t.drawLine.apply(t,[r,a3,r+p*46,w,n])
n.delete()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.ae4.gp(0)
n=o.G()
t.drawCircle(r+p*50,s,18,n)
n.delete()}a3=a1*0.88
w=A.I()
w.r=D.bh8.gp(0)
a5.aP(new A.a3(0,a3,a2,a3+a1*0.12),w)
for(a2=a1*0.9,a3=a2-8,m=0;m<18;++m){w=a0*m/17
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=D.agb.gp(0)
s.c=2
n=s.G()
t.drawLine.apply(t,[w,a2,w+3,a3,n])
n.delete()}for(a2=this.b,a3=a2.r,w=a3.length,s=a1*0.89,q=0;q<a3.length;a3.length===w||(0,A.M)(a3),++q){l=a3[q]
if(l.e)continue
o=l.a
u=(l.b+Math.sin(a2.dx*1.7+o)*0.012)*a0
k=l.d
if(l.f){o=A.bJ(new A.t(u,s),12,54)
$.S()
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=D.lr.j(0.6).gp(0)
n=k.G()
t.drawOval(A.bF(o),n)
n.delete()
continue}o=Math.sin(a2.dx*2+o)
J.bm(t.save())
t.translate(u,k*a1)
t.rotate(o*0.1*180/3.141592653589793,0,0)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.afj.gp(0)
n=o.G()
t.drawCircle(0,-34,14,n)
n.delete()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.blG.gp(0)
o.c=4
o.d=B.bE
n=o.G()
t.drawLine.apply(t,[0,-46,2,-56,n])
n.delete()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.sam(A.tn(D.eic,46,D.d5_,B.CT,B.x,d,d,0))
n=o.G()
t.drawCircle(0,0,34,n)
n.delete()
o=A.bJ(D.eii,8,12)
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=B.c.j(0.35).gp(0)
n=k.G()
t.drawOval(A.bF(o),n)
n.delete()
j=new A.jR(new A.eu(l.c,d,d,B.cQ,d,d,d,d,d,d,D.fkZ),B.L,B.bZ,new A.jA(1),d,d,3,d,B.bW,d)
j.nY(62)
o=j.b
k=Math.max(40,o.c+10)
o=o.a.c
i=A.bt(A.bJ(B.cH,o.gbb(o)+8,k),B.fE)
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=D.pY.gp(0)
n=k.G()
t.drawRRect(A.el(i),n)
n.delete()
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=D.lr.gp(0)
k.b=B.aa
k.c=1.5
n=k.G()
t.drawRRect(A.el(i),n)
n.delete()
k=j.b
o=k.c
k=k.a.c
j.a3(a5,new A.t(-o/2,4-k.gbb(k)/2))
t.restore()}h=a2.cy*a0
a3=a2.dx
w=Math.sin(a3*4)
X.AT(a5,new A.t(h,a1*0.93),a1*0.3,a3,!0,Math.abs(a2.db-a2.cy)*40*Math.abs(Math.sin(a2.dx*18)),2,B.dF,G.mB,!1,(w+1)/2)
g=A.bJ(new A.t(h,a1*0.8),a1*0.07,a0*0.24)
a4=new A.aF($.S().r,B.ag,d,d,A.a([],a4))
w=g.a
a3=g.b
a4.D(new A.aX(w,a3))
s=g.c
a4.D(new A.aq(s,a3))
o=g.d
a4.D(new A.aq(s-8,o))
a4.D(new A.c4(g.gbK().a,o+8,w+8,o))
a4.D(new A.bs())
k=A.I()
k.r=D.Yb.gp(0)
a5.aG(a4,k)
for(a4=s-w,m=1;m<6;++m){s=w+a4*m/6
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=D.B0.gp(0)
k.c=1.4
n=k.G()
t.drawLine.apply(t,[s,a3,s+(m-3)*2,o,n])
n.delete()}s=a3+(o-a3)*0.35
o=A.I()
o.r=F.n6.gp(0)
a5.aP(new A.a3(w,s,w+a4,s+5),o)
w-=2
a3-=4
o=A.I()
o.r=D.bgj.gp(0)
a5.dO(new A.a3(w,a3,w+(a4+4),a3+8),o)
for(a3=a2.w,a4=a3.length,q=0;q<a3.length;a3.length===a4||(0,A.M)(a3),++q){f=a3[q]
w=f.a
s=f.b
o=f.f
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=f.e.j(B.k.E(o,0,1)).gp(0)
n=k.G()
t.drawCircle(w*a0,s*a1,3*o+1,n)
n.delete()}e=a2.dx-a2.go
if(e>=0&&e<1.2){a3=a2.fy
j=A.fu(d,d,d,d,A.cS(d,d,d,d,d,d,d,d,d,A.l(d,d,B.cI.j(1-e/1.2),d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,K.CN,d,d),"+"+a3),B.a3,B.bZ,d,B.dA,B.bW)
j.el()
j.a3(a5,new A.t(a2.id*a0-j.b.c/2,a1*0.72-e*60))}},
aw(d){return!0}}
C.Q4.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aAr(w.c,w.f,v),B.ax),s=A.m(10),r=A.J(B.bA,B.r,1.4)
return new A.a7(u+22,v,A.x(A.a([new A.a7(u,u,t,v),B.cL,A.p(v,A.d(w.d,v,1,B.a1,v,v,v,D.fdI,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.mI,v,v,v)],x.p),B.m,v,B.e,B.Q,0,B.p),v)},
gY(d){return this.e}}
C.aAr.prototype={
a3(d,e){var w=e.ei(B.I),v=e.gdC(),u=this.c?0.8:0
return X.fN1(d,w,v*0.44,this.b,0,u)},
aw(d){return d.b!==this.b||d.c!==this.c}}
C.ayS.prototype={}
C.atG.prototype={
T(){return new C.atH(A.U(x.S,x.cq),null,null)},
gcZ(){return this.d}}
C.atH.prototype={
gkI(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.huQ(w.c,w.e)
u.d!==$&&A.bG()
u.d=v
t=v}return t},
gaDV(){var w=this.z
return w===$?this.z=this.WS(0):w},
giT(){var w,v=this.Q
if(v===$){w=this.gkI()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c3(w,-1,!1,x.S)}return v},
WS(d){var w,v,u,t,s=this.gkI()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.ayS(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.ayS(v[t],u[t],-1))
v=new A.e9()
v.d3(this.a.e*31+d)
B.d.dZ(s,v)
return s},
q(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.q()
v.r=null
u=v.eJ$
u.b=!1
B.d.a9(u.a)
u=u.goh()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dS$.a.a9(0)
v.ql()}this.bu2()},
cNs(d,e){var w,v,u,t,s,r=this
if(d>=r.giT().length||r.giT()[d]!==-1||B.d.t(r.giT(),e))return
w=r.gaDV()[e]
v=r.gkI()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cms(r,e,w,v))
A.cK(B.ly,new C.cmt(r))
return}++r.r
u=A.bn(null,B.hr,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.q()
t.n(0,d,u)
r.m(new C.cmu(r,d,e,w,v))
u.cp(0)},
li(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$li=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkI()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cI(n,0,new C.cmv())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cmw(t,r))
w=5
return A.b(C.Bq(t.a.d,r),$async$li)
case 5:t.x=f
o=t.a
w=6
return A.b(C.Br(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$li)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cmx())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.q()
q.r=null
p=q.eJ$
p.b=!1
B.d.a9(p.a)
p=p.goh()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dS$.a.a9(0)
q.ql()}o.a9(0)
t.m(new C.cmy(t))
case 1:return A.h(u,v)}})
return A.i($async$li,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pz,p,p,p),p,p,p)
v=r.f
v=A.at(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.UA,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tl(q,A.cr(A.a([D.adC,w,v,B.aN,new C.HW(u,t,r.ch,p),B.aN,A.at(C.ub("Back to the games",new C.cmo(d),B.cI,B.l6,D.fq),p,p,p)],x.p),p,B.a9,p,p,B.ah,!1),B.fu,p)}w=r.gkI()
v=r.e
s=w[v]
return new C.tl(q,new A.D(B.u2,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aSh,B.L,p,p),A.E(A.cz(new C.cmp(r,s)),1)],x.p),B.m,p,B.e,B.i,0,B.p),p),B.fu,p)}}
C.bb7.prototype={
a3(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=y.B,b3=b0.d,b4=new A.Z(b3,new C.cLQ(),A.T(b3).k("Z<1>")).gL(0),b5=b0.b,b6=b5.a8(0,B.IU)
$.S()
w=A.I()
w.r=D.ls.j(0.18+0.1*b4).gp(0)
b7.ad(b6,70+b4*10,w)
w=b8.a
b6=b8.b
v=b5.a8(0,D.eeM)
u=A.I()
u.r=B.o6.j(0.5).gp(0)
u.c=10
u.d=B.bE
b7.bo(new A.t(w/2,b6*0.98),v,u)
for(v=b0.c,u=b5.a,b5=b5.b,t=b5+90,s=x.v,b5+=46,r=x.dc,q=x.U,p=b7.a,o=0;o<v.length;++o){n=v[o]
m=n.a+0
l=B.dU.av(0,B.k.E(b3[o],0,1))
k=$.S().r
j=A.a([],s)
i=new A.aF(k,B.ag,b1,b1,j)
j.push(new A.aX(u,b5))
j.push(new A.c4((u+m)/2,t,m,n.b+-46))
if(l<1)for(n=new A.aF(k,B.ag,b1,b1,A.bq(j,!0,r)),m=A.a([],q),h=new A.tk(n,!1,m);h.C();){g=h.c
if(g===0||h.f)A.b8(A.ju(b2));--g
f=new A.Bo(h,g)
e=0
for(;;){h.ik()
d=m[g].b
d===$&&A.c()
if(!(e<d.a.length()))break
h.ik()
d=m[g].b
d===$&&A.c()
d=Math.min(d.a.length(),e+7)
d=new A.aF(k,n.b,b1,new A.cw([f,e,d,!0]),A.a([],s))
$.S()
a0=new A.ap(B.R,B.N,B.U,B.V,B.S)
a0.r=B.aZ.gp(0)
a0.b=B.aa
a0.c=3
a1=a0.G()
a0=d.gbw().a.snapshot()
p.drawPath((d.e=new A.cl(a0)).a,a1)
a1.delete()
e+=14}}if(l>0)for(n=new A.aF(k,i.b,i.c,b1,A.bq(j,!0,r)),m=A.a([],q),j=new A.tk(n,!1,m),h=l>0.4,g=9-3*l,d=11*l,a0=6*l;j.C();){a2=j.c
if(a2===0||j.f)A.b8(A.ju(b2));--a2
j.ik()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
a3=new A.aF(k,n.b,b1,new A.cw([new A.Bo(j,a2),0,a3*l,!0]),A.a([],s))
$.S()
a4=new A.ap(B.R,B.N,B.U,B.V,B.S)
a4.r=D.Fw.gp(0)
a4.b=B.aa
a4.c=g
a4.d=B.bE
a1=a4.G()
a4=a3.gbw().a.snapshot()
p.drawPath((a3.e=new A.cl(a4)).a,a1)
a1.delete()
j.ik()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
j.ik()
a5=m[a2].Ha(a3*l)
if(h)for(a2=a5.a,a3=a2.a,a2=a2.b,a6=0;a6<4;++a6){a7=a6*1.6+o
a4=A.bJ(new A.t(a3+Math.cos(a7)*14,a2+Math.sin(a7)*10),a0,d)
a8=new A.ap(B.R,B.N,B.U,B.V,B.S)
a8.r=B.bj.gp(0)
a1=a8.G()
p.drawOval(A.bF(a4),a1)
a1.delete()}}}if(b0.e)for(b3=b6*0.3,o=0;o<6;++o){a9=new A.jR(D.fdc,B.a3,B.bZ,new A.jA(1),b1,b1,b1,b1,B.bW,b1)
a9.el()
a9.a3(b7,new A.t(w*(0.15+o*0.14),b3-B.o.F(o,3)*14))}},
aw(d){return!0}}
C.axB.prototype={
T(){return new C.axC(A.aY(x.S))},
gcZ(){return this.d}}
C.axC.prototype={
gkI(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hvK(w.c,w.e)
u.d!==$&&A.bG()
u.d=v
t=v}return t},
Z(){this.a2()
this.b6U()},
q(){var w=this.ch
if(w!=null)w.a4(0)
this.a1()},
b6U(){var w=this.ch
if(w!=null)w.a4(0)
this.ch=A.dg(B.rj,new C.cBn(this))},
bnM(d){var w,v=this
if(v.as||v.z.t(0,d))return
w=v.gkI()[v.e]
if(w.e[d]===w.b)v.m(new C.cBv(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cBw(v,d))
A.cK(B.iU,new C.cBx(v))}},
cST(){var w=this
if(!w.as&&w.f<w.gkI()[w.e].d.length)w.m(new C.cBy(w))},
li(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$li=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkI()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a4(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.cBz(t,s))
w=5
return A.b(C.Bq(t.a.d,s),$async$li)
case 5:t.y=f
q=t.a
w=6
return A.b(C.Br(q.d,q.c.a,"who",t.r),$async$li)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cBA())
w=1
break
case 4:t.m(new C.cBB(t))
t.b6U()
case 1:return A.h(u,v)}})
return A.i($async$li,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.d(""+a0.w+" of "+a0.gkI().length+" guessed",a2,a2,a2,a2,a2,a2,B.pz,a2,a2,a2),a2,a2,a2)
v=A.at(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.UA,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tl(a1,A.cr(A.a([D.b9y,w,v,B.aN,new C.HW(u,t,a0.ax,a2),B.aN,A.at(C.ub("Back to the games",new C.cBp(a3),B.cI,B.l6,D.fq),a2,a2,a2)],x.p),a2,B.a9,a2,a2,B.ah,!1),B.fu,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkI()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.K5,B.L,a2,a2),B.W,A.at(A.ls(new C.cBq(a0,r),a2,B.b6,B.hr,a2,a2,new A.bp(a2,s,u),x.i),a2,a2,a2),B.aA],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aQ(16,16)
l=new A.ay(B.cI,2,B.r,-1)
k=o+1
w.push(new A.qR(new A.bp(0,1,u),new C.cBr(),A.p(a2,new A.cd(B.aM,B.e,B.i,B.m,a2,B.p,a2,0,A.a([new A.qt(new A.y(""+k,a2,B.nI,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.lr,a2,12,a2),B.at,new A.bA(1,B.bc,new A.y(v[n].d[o],a2,D.fpG,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.pY,a2,new A.bK(l,l,l,l),new A.bj(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.ct,B.bf,a2,a2,a2),B.b6,B.iU,a2,new A.c0("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bN(!1,D.fQz,a2,a2,!0,a2,a2,a0.gcSS(),a2,a2),a2,a2,a2))
w.push(B.O)
if(a0.as){u=D.ls.j(0.2)
q=A.m(16)
p=A.J(D.ls,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fv,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.W,C.ub(v,a0.gq4(a0),B.cI,B.jS,D.fq)],t),B.m,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bB,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.t(0,o)?B.ds:B.cI.j(0.2)
g=new A.aQ(16,16)
l=new A.ay(n.t(0,o)?B.f7:B.cI,2,B.r,-1)
f=v[a0.e].e[o]
e=n.t(0,o)?B.bY:B.c
d=n.t(0,o)?B.wP:a2
t.push(new A.qR(new A.bp(0,i,u),new C.cBs(),A.aB(a2,A.p(a2,new A.y(f,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),a2,B.L,a2,a2,a2,a2,a2,a2,a2),B.f,a2,D.acL,new A.o(h,a2,new A.bK(l,l,l,l),new A.bj(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jd,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cBt(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b6,B.mD,a2,new A.c0("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bW(B.fH,t,B.bq,a2,10,10))}return new C.tl(a1,A.cr(w,a2,B.ak0,a2,a2,B.ah,!1),B.fu,a2)}}
C.ayC.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.aFS.prototype={
aW(){this.b6()
this.b4()
this.dH()},
q(){var w=this,v=w.b5$
if(v!=null)v.a6(0,w.gdD())
w.b5$=null
w.a1()}}
C.aeQ.prototype={
apO(d){},
aqf(){var w=this,v=w.qO(new C.f_f(w))
v.h2(0)
w.LD$!==$&&A.aP()
w.LD$=v}}
C.aJF.prototype={
gbke(d){var w=this.c
return B.a.aq(w,0,Math.min(this.d,w.length))},
Vq(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.c=d
w.d=0
w.b=A.dg(D.aj0,new C.f9j(w))},
bq4(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.d=w.c.length
w.a.$0()},
q(){var w=this.b
return w==null?null:w.a4(0)}}
C.al7.prototype={
T(){return new C.al8(new C.alh(),A.a([],x.t),new A.ez(0,$.aw()),$,0,null,null)},
gcZ(){return this.d}}
C.al8.prototype={
gMt(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bCl(w.c,10,w.e,!0)
u.d!==$&&A.bG()
u.d=v
t=v}return t},
gh4(d){var w,v=this,u=v.e
if(u===$){w=C.Mr(v.a.c)
v.e!==$&&A.bG()
v.e=w
u=w}return u},
gqc(){var w=this.r
return w===$?this.r=new C.aJF(new C.bQq(this)):w},
gaoD(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMt()[v].c)u.push(1)
return u.length},
gbjv(){var w=this.gh4(0)
return w.gyR()==null?"Elder":B.a.i(w.gyR().b)},
Z(){this.a2()
this.aqf()},
q(){var w,v=this
v.gqc().q()
v.f.q()
w=v.LD$
w===$&&A.c()
w.q()
w=v.pU$
w.S$=$.aw()
w.P$=0
v.btI()},
cHC(){var w=this
w.m(new C.bQn(w))
w.gqc().Vq(w.gMt()[w.x].a)},
KG(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqc()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.pU$.a
v.ax=u
v.ay=u+1
v.m(new C.bQl())
A.cK(B.hr,new C.bQm(v))},
bnK(){var w=this.gaoD(0)/this.gMt().length*100
if(w>=90)return D.ePD
if(w>=75)return D.eNJ
if(w>=60)return D.eEz
if(w>=45)return D.eHW
return D.ez0},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cqs()
w=A.bT(0,new A.ex(A.b4(m,m,m,new C.brt(n,n.pU$),B.ax),m),0,0,0)
if(!n.Q){v=D.pY.j(0.96)
u=A.m(20)
t=A.J(B.cI,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gbjv()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aTd,B.L,m,m),B.W,C.ub("Start the test",n.gBn(),B.cI,B.iW,D.fq)],x.p),B.m,m,B.e,B.Q,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bB,m,m,m)
v=u}else{v=n.x
u=n.gMt()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aTf,m,m,m)
if(n.Q){t=n.gqc()
t=t.d<t.c.length}else t=!1
if(t)u=D.f5J
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aQ(10,10)
o=new A.ay(D.B0,4,B.r,-1)
s.push(A.aB(m,A.p(m,new A.y(q[r],m,D.fgS,m,B.L,m,m,m,m,m,m,m),B.f,m,D.acL,new A.o(D.bcl,m,new A.bK(o,o,o,o),new A.bj(p,p,p,p),m,m,B.n),m,m,m,m,B.Nm,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bQo(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bW(B.fH,s,B.bq,new A.c0("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oU(u,B.mC,A.qm(),B.b6,B.b6,A.L4())],x.p),B.m,m,B.e,B.Q,0,B.p)
v=u}return new C.tl("Village School",new A.an(B.a_,m,B.ab,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fu,m)},
cqs(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bnK(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMt()[v].c)g.push(v)
u=A.m(22)
t=A.J(B.cI,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.flh,B.L,i,i)
r=A.d("Signed by Elder "+j.gbjv(),i,i,i,i,i,i,D.fjX,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fp1,i,i,i),D.er0],q)
o=A.d(h.b,i,i,i,i,i,i,D.fqR,i,i,i)
n=j.gaoD(0)
m=j.gMt()
u=A.p(i,A.x(A.a([D.fBW,B.au,s,r,B.W,new A.an(B.A,i,B.ab,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.a9T,i,i,i),B.O,D.aqs],q),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(D.pY,i,t,u,i,i,B.n),i,i,i,i,B.fk,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aA,new C.HW(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aN,D.fRD,B.O],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.M)(g),++l){v=g[l]
r=new A.aQ(14,14)
k=new A.ay(B.bz,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([new A.y(p.a,i,B.fS,i,i,i,i,i,i,i,i,i),B.au,new A.y("You said: "+p.b[w[v]],i,D.fmq,i,i,i,i,i,i,i,i,i),new A.y(p.d,i,D.foE,i,i,i,i,i,i,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.ds,i,new A.bK(k,k,k,k),new A.bj(r,r,r,r),i,i,B.n),i,i,i,B.ct,B.bf,i,i,i))}B.d.v(s,u)}s.push(B.aA)
s.push(A.at(C.ub("Back to the games",new C.bQh(j),B.cI,B.l6,D.fq),i,i,i))
return new C.tl("Village School",A.cr(s,i,B.bQ,i,i,B.ah,!1),B.fu,i)}}
C.brt.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.pU$.a,d=a1.a,a0=f.f.Md(a2).b
a0===$&&A.c()
a0=a0.a
a0===$&&A.c()
a0=a0.a
a0.toString
d.drawPicture(a0)
w=C.h3e(a2)
J.bm(d.save())
d.translate(w.a,w.b)
a1.bW(0,w.c)
if(f.Q){a0=f.gqc()
v=a0.d<a0.c.length}else v=!1
for(u=0;u<2;++u){a0=D.cS3[u]-6
$.S()
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=D.Fk.gp(0)
s=t.G()
d.drawRect(A.bF(new A.a3(a0,340,a0+12,450)),s)
s.delete()}a0=A.bt(D.a81.cq(10),B.hP)
$.S()
t=A.I()
t.r=D.B0.gp(0)
a1.az(a0,t)
t=A.bt(D.a81,B.hA)
a0=A.I()
a0.sam(A.jo(new A.t(30,96),new A.t(420,346),D.dae,g,B.x,g))
a1.az(t,a0)
r=new A.e9()
r.d3(2)
for(q=0;q<18;++q){a0=r.ah()
t=r.ah()
p=r.ah()
p=A.bJ(new A.t(30+a0*390,96+t*250),8+r.ah()*14,30+p*60)
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=B.c.j(0.025).gp(0)
s=t.G()
d.drawOval(A.bF(p),s)
s.delete()}a0=A.I()
a0.r=K.agW.gp(0)
a1.aP(new A.a3(30,354,420,362),a0)
a0=A.I()
a0.r=B.aP.gp(0)
a1.aP(D.eYI,a0)
a0=A.I()
a0.r=B.bL.gp(0)
a1.aP(D.eYM,a0)
a0=A.bt(D.eYC,B.hz)
t=A.I()
t.r=D.Yb.gp(0)
a1.az(a0,t)
o=B.k.E((e-f.ax)/0.7,0,1)
if(f.Q){a0=f.gqc().gbke(0)
n=A.fu(g,g,7,g,A.cS(g,g,g,g,g,g,g,g,g,D.ft3,a0+(v?"|":"")),B.a3,B.bZ,g,B.dA,B.bW)
n.nY(346)
J.bm(d.save())
a0=A.bF(D.a81)
t=$.ms()
d.clipRect(a0,t[1],!0)
a0=o<1
if(a0&&f.w.length>f.x)d.clipRect(A.bF(new A.a3(30+390*o,96,420,346)),t[1],!0)
n.a3(a1,new A.t(52,118))
d.restore()
if(o>0&&a0){a0=30+390*o-20
t=126+40*Math.sin(o*9)
t=A.bt(new A.a3(a0,t,a0+40,t+90),B.fE)
a0=A.I()
a0.r=D.brn.gp(0)
a1.az(t,a0)}}else{n=A.fu(g,g,g,g,D.fds,B.L,B.bZ,g,B.dA,B.bW)
n.nY(340)
n.a3(a1,new A.t(55,176))}if(v)for(a0=e*1.2,t=e*3,q=0;q<8;++q){m=B.k.F(a0+q/8,1)
p=B.o.F(f.gqc().d*9,310)
l=Math.sin(q+t)
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=B.c.j(0.7*(1-m)).gp(0)
s=k.G()
d.drawCircle(70+p+l*6,166+m*70,1.6,s)
s.delete()}a0=f.gh4(0).gyR()
j=(a0==null?g:a0.c)===D.oe?1:0
i=e<f.ay
h=A.a([new A.z(470,new C.f_g(e,a1,j,v,i,D.efR)),new A.z(520,new C.f_h(a1,e,v)),new A.z(575,new C.f_i(a1,e,v)),new A.z(585,new C.f_j(this,a1,e,v)),new A.z(615,new C.f_k(this,v,a1,e,i))],x.E)
B.d.aY(h,new C.f_l())
for(u=0;u<5;++u)h[u].b.$0()
d.restore()},
c9_(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aF(p.r,B.ag,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aX(r,q)
o.push(r)
q=n.f
if(q!=null)r.by(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.by(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new A.bs())
return n},
aw(d){return!1}}
C.al5.prototype={
T(){return new C.al6(new C.alh(),A.U(x.S,x.i),new A.ez(0,$.aw()),$,0,null,null)},
gcZ(){return this.d}}
C.al6.prototype={
gkI(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.huE(w.c,w.e)
u.d!==$&&A.bG()
u.d=v
t=v}return t},
giT(){var w=this.z
return w===$?this.z=this.Fk(0):w},
gaJU(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.Fk(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cu(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.Fk(0):r).length);++v}s.Q=w
r=w}return r},
Fk(d){var w,v,u,t,s=this.gkI()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e4(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e9()
u.d3(this.a.e+d*7)
B.d.dZ(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.fb(u,new C.bQ3())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a2()
this.aqf()},
q(){var w,v=this
v.e.q()
w=v.LD$
w===$&&A.c()
w.q()
w=v.pU$
w.S$=$.aw()
w.P$=0
v.btH()},
apO(d){var w,v,u,t,s,r=this,q=r.giT().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cu(u===$?r.z=r.Fk(0):u,v)
s=r.gaJU()
s[v]=s[v]+(450*(t+0.5)/q-r.gaJU()[v])*Math.min(1,w)}},
cY_(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.giT().length)return
w=v.y
if(w===-1){v.m(new C.bQe(v,d))
return}if(w===d){v.m(new C.bQf(v))
return}v.m(new C.bQg(v,B.d.cu(v.giT(),v.y),d,B.d.cu(v.giT(),d)))},
cIh(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.Fk(0):u).length))break
t=s.gkI()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.Fk(0):u)[v]]===v);++v}s.m(new C.bQ9(s,B.d.d5(w,new C.bQa())))},
li(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$li=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkI().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bQb(t,s))
w=5
return A.b(C.Bq(t.a.d,s),$async$li)
case 5:t.x=f
q=t.a
w=6
return A.b(C.Br(q.d,q.c.a,"lineup",t.r*10),$async$li)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bQc())
w=1
break
case 4:t.m(new C.bQd(t))
case 1:return A.h(u,v)}})
return A.i($async$li,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.d(""+l.r+" of "+l.gkI().length+" lines right",k,k,k,k,k,k,B.pz,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tl("Line Up",A.cr(A.a([D.adC,w,B.aN,new C.HW(v,u,l.ch,k),B.aN,A.at(C.ub("Back to the games",new C.bQ5(d),B.cI,B.l6,D.fq),k,k,k)],x.p),k,B.a9,k,k,B.ah,!1),B.fu,k)}w=A.a([],x.t)
for(t=0;v=l.gkI(),t<v[l.f].d.length;++t)w.push(t)
B.d.aY(w,new C.bQ6(l))
u=A.bT(0,A.cz(new C.bQ7(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aTf,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.flH,B.L,k,k),A.d(s.b,k,k,k,k,k,k,D.fnS,B.L,k,k)],q),B.m,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.m(16)
n=l.ax
m=A.J(n?D.ls:F.n6,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bQ8(l),x.cM).aH(0,", then ")+".",k,k,k,k,k,k,D.fq1,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d3,B.bf,k,k,1/0))}if(!l.at)r.push(C.ub("That is my line!",l.gcIg(l),B.cI,B.hu,D.fq))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.ub(w,l.gq4(l),B.cI,B.jS,D.fq))}return new C.tl("Line Up",new A.an(B.a_,k,B.ab,B.t,A.a([u,s,A.ao(12,A.x(r,B.m,k,B.e,B.Q,0,B.p),k,k,12,12,k,k)],q),k),B.fu,k)}}
C.bif.prototype={
a3(c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.pU$.a,c6=c8.a,c7=c4.e.Md(c9).b
c7===$&&A.c()
c7=c7.a
c7===$&&A.c()
c7=c7.a
c7.toString
c6.drawPicture(c7)
w=C.h3e(c9)
J.bm(c6.save())
c6.translate(w.a,w.b)
c8.bW(0,w.c)
v=c4.giT().length
c7=$.S().r
u=x.v
t=new A.aF(c7,B.ag,c3,c3,A.a([],u))
t.D(new A.aX(10,470))
t.D(new A.c4(225,500,440,470))
s=A.I()
s.r=D.Yb.gp(0)
s.b=B.aa
s.c=4
c8.aG(t,s)
for(s=c5*3,r=0;r<12;++r){q=30+r*36
p=470+30*Math.sin(3.141592653589793*(q-10)/430)*0.95
o=Math.sin(s+r)
n=A.a([],u)
m=new A.aF(c7,B.ag,c3,c3,n)
n.push(new A.aX(q,p))
n.push(new A.aq(q+16,p+6+o*3))
n.push(new A.aq(q,p+20))
n.push(new A.bs())
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=[B.cI,F.n6,D.ls,B.aQ][B.o.F(r,4)].gp(0)
l=o.G()
o=m.gbw().a.snapshot()
c6.drawPath((m.e=new A.cl(o)).a,l)
l.delete()}this.b_4(c8,"OLDEST",D.egR,B.cI)
this.b_4(c8,"YOUNGEST",D.egi,B.bj)
c7=A.bt(D.eYw,B.fE)
u=A.I()
u.r=D.Fk.gp(0)
c8.az(c7,u)
u=A.bt(D.eYv,B.hA)
c7=A.I()
c7.r=D.B0.gp(0)
c8.az(u,c7)
k=c5<c4.CW
j=c5<c4.cx
i=v>=5?0.92:1.12
c7=A.a([],x.t)
for(h=0;h<v;++h)c7.push(h)
B.d.aY(c7,new C.dn9())
for(u=c7.length,s=440/v-8,o=c5*10,n=!k,m=c4.as,g=c5*9,f=c5*8,e=c5*12,d=0;d<c7.length;c7.length===u||(0,A.M)(c7),++d){h=c7[d]
a0=c4.z
a1=B.d.cu(a0===$?c4.z=c4.Fk(0):a0,h)
q=c4.gaJU()[h]
a2=c4.y===h
a3=a2?Math.abs(Math.sin(g))*10:0
a4=m.h(0,h)
if(a4!=null&&c5<a4)a3+=Math.sin((1-(a4-c5)/0.5)*3.141592653589793)*14
a5=c4.at&&c4.gkI()[c4.f].e[h]===a1
a6=c4.at&&!c4.ax&&!a5
a7=c4.gkI()
a8=a7[c4.f].c
a9=a8.length>h?a8[h]:h
if(n)b0=c4.at&&a5
else b0=!0
b1=Math.max(0,Math.sin(o+h))
if(a2){$.S()
a8=new A.ap(B.R,B.N,B.U,B.V,B.S)
a8.r=B.cI.j(0.22+0.1*Math.sin(f)).gp(0)
l=a8.G()
c6.drawCircle(q,520,54,l)
l.delete()}a8=D.ddU[B.o.F(a9,6)]
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
else b8=a2?D.eiX:c3
if(b0)b9=new A.t(3+b1*8,-56)
else if(j&&a6)b9=D.aJp
else b9=a2?new A.t(30,-104+Math.sin(f)*5):c3
C.RS(c8,new A.t(q,612),b7,b4,(225-q)/225*0.5,-0.3,b8,b9,D.IW,a8,b3,0,i,b2,b5,c5,b6)
a7=a7[c4.f].d[h]
c0=new A.jR(new A.eu(a7,c3,c3,B.cQ,c3,c3,c3,c3,c3,c3,D.fjt),B.a3,B.bZ,new A.jA(1),"\u2026",c3,1,c3,B.bW,c3)
c0.nY(s)
c1=A.bt(A.bJ(new A.t(q,650),24,c0.b.c+16),B.fE)
$.S()
a7=new A.ap(B.R,B.N,B.U,B.V,B.S)
if(a5)a8=B.iw
else a8=a6?B.re:D.pY
a7.r=a8.gp(0)
l=a7.G()
c6.drawRRect(A.el(c1),l)
l.delete()
a7=new A.ap(B.R,B.N,B.U,B.V,B.S)
if(a5)a8=D.ls
else a8=a6?F.n6:D.lr
a7.r=a8.gp(0)
a7.b=B.aa
a7.c=2
l=a7.G()
c6.drawRRect(A.el(c1),l)
l.delete()
a7=c0.b
a8=a7.c
a7=a7.a.c
c0.a3(c8,new A.t(q-a8/2,650-a7.gbb(a7)/2))
c2=new A.jR(new A.eu(""+(a1+1),c3,c3,B.cQ,c3,c3,c3,c3,c3,c3,D.fjM),B.a3,B.bZ,new A.jA(1),c3,c3,c3,c3,B.bW,c3)
c2.el()
c2.a3(c8,new A.t(q-c2.b.c/2,668))}if(k)for(c4=c5*2,c7=c5*120,u=c5*4,r=0;r<26;++r){q=B.k.F(r*53+Math.sin(c4+r)*20,450)
s=B.k.F(c7+r*37,420)
J.bm(c6.save())
c6.translate(q,140+s)
c6.rotate((u+r)*180/3.141592653589793,0,0)
s=A.bJ(B.I,4,8)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=[B.cI,F.n6,D.ls,B.aQ,B.c][B.o.F(r,5)].gp(0)
l=o.G()
c6.drawRect(A.bF(s),l)
l.delete()
c6.restore()}c6.restore()},
b_4(d,e,f,g){var w,v,u=null,t=A.fu(u,u,u,u,A.cS(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,K.CN,u,u),e),B.a3,B.bZ,u,B.dA,B.bW)
t.el()
w=t.b
v=w.c
w=w.a.c
t.a3(d,f.aF(0,new A.t(v/2,w.gbb(w)/2)))},
aw(d){return!1}}
C.a1f.prototype={
a5(){return"_Trip."+this.b}}
C.al1.prototype={
T(){return new C.al2(D.Wf,new A.ez(0,$.aw()),$,0,null,null)},
gcZ(){return this.d}}
C.al2.prototype={
gD3(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bCl(w.c,8,w.e,!1)
u.d!==$&&A.bG()
u.d=v
t=v}return t},
gh4(d){var w,v=this,u=v.e
if(u===$){w=C.Mr(v.a.c)
v.e!==$&&A.bG()
v.e=w
u=w}return u},
gqc(){var w=this.f
return w===$?this.f=new C.aJF(new C.bPQ(this)):w},
gTr(){var w=this.gh4(0)
return w.gyR()==null?"Grandma":B.a.i(w.gyR().b)},
Z(){this.a2()
this.aqf()},
q(){var w,v=this
v.gqc().q()
w=v.LD$
w===$&&A.c()
w.q()
w=v.pU$
w.S$=$.aw()
w.P$=0
v.btG()},
apO(d){var w,v,u,t=this
if(t.r!==D.abA)return
w=B.dx.av(0,B.k.E((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gD3()
if(v+1>=u.length){t.r=D.abB
t.Wn()}else{++t.w
t.ay=!1
t.r=D.Wg
t.gqc().Vq(u[t.w].a)}if(t.c!=null)t.m(new C.bPO())}},
Wn(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Wn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqc().Vq("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gD3().length
r=C.bEC(t,u.z,s)
u.as=r
w=2
return A.b(C.Bq(u.a.d,r),$async$Wn)
case 2:u.at=e
s=u.a
w=3
return A.b(C.Br(s.d,s.c.a,"journey",u.x*10),$async$Wn)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bPI())
return A.h(null,v)}})
return A.i($async$Wn,v)},
boZ(){this.aSs()},
aSs(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.abA
if(w.c!=null)w.m(new C.bPJ())},
KG(d){var w,v,u,t,s=this
if(s.r!==D.Wg)return
w=s.gD3()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bPN(s,d,v))
u=s.gqc()
t=s.w
u.Vq(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cNr(){if(this.r!==D.Ay)return
this.aSs()},
B(d){var w,v,u,t=this,s=null,r=A.bT(0,new A.ex(A.b4(s,s,s,new C.bhG(t,t.pU$),B.ax),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gD3().length;++w){v=t.w
if(w<v||t.r===D.abB)v=B.cI
else v=w===v?B.c:B.aZ
u=new A.aQ(4,4)
p.push(new A.bA(1,B.bc,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bj(u,u,u,u),s,s,B.n),s,7,s,B.yj,s,s,s,s),s))}p.push(B.bo)
p.push(D.fDw)
return new C.tl("Safari Journey",new A.an(B.a_,s,B.ab,B.t,A.a([r,A.ao(s,A.B(p,B.m,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ao(10,t.ci9(),s,s,10,10,s,s)],q),s),B.fu,s)},
ci9(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bPM(o),l=D.pY.j(0.96),k=A.m(22),j=A.J(B.cI,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTr()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aTd,B.L,n,n),B.W,C.ub("Start the journey",o.gboY(),B.cI,D.bLt,D.fq)],x.p),B.m,n,B.e,B.Q,0,B.p)
break
case 3:w=D.b95
break
case 1:w=o.w
v=o.gD3()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aQ(14,14)
p=new A.ay(D.lr,2.5,B.r,-1)
t.push(A.aB(n,A.p(n,new A.y(r[s],n,D.aSA,n,B.L,n,n,n,n,n,n,n),B.f,n,D.acS,new A.o(D.ai0,n,new A.bK(p,p,p,p),new A.bj(q,q,q,q),n,n,B.n),n,n,n,n,U.vU,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bPK(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.O,A.bW(B.bC,t,B.bq,n,8,8)],u),B.E,n,B.e,B.Q,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gD3().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.O,new A.bM(B.a8,n,n,C.ub(v,o.gcNq(),B.cI,B.jS,D.fq),n)],x.p),B.E,n,B.e,B.Q,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTr()),B.O,A.d(""+o.x+" of "+o.gD3().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aSU,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aPr(v)
u=C.aPr(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.a9T,n,n,n))}w.push(B.O)
w.push(A.at(C.ub("Back to the games",new C.bPL(o),B.cI,B.l6,D.fq),n,n,n))
w=A.x(w,B.E,n,B.e,B.Q,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aAI,n,B.n),n,n,n,n,B.bf,n,n,n)}}
C.bhG.prototype={
a3(d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=this.b,c7=c6.pU$.a,c8=d6.a,c9=d6.b,d0=c6.CW,d1=c6.gD3(),d2=B.k.E(d0/(520*(d1.length+1)),0,1),d3=c6.r===D.abA,d4=c9*0.5
d0=A.ar(D.bdM,D.bnU,d2)
d0.toString
w=A.ar(D.Xr,F.afO,d2)
w.toString
v=A.ar(B.tB,D.bmo,d2)
v.toString
$.S()
u=A.I()
t=x.O
u.sam(A.jo(B.I,new A.t(0,d4),A.a([d0,w,v],t),F.a3b,B.x,c5))
d5.aP(new A.a3(0,0,0+c8,0+c9),u)
s=new A.t(c8*(0.15+0.7*d2),d4*(0.28+0.45*d2*d2))
u=A.I()
u.sam(A.tn(s,60,A.a([D.bmL,B.K],t),c5,B.x,c5,c5,0))
d5.ad(s,60,u)
u=A.I()
u.r=B.XD.gp(0)
d5.ad(s,22,u)
for(d0=d5.a,w=c7*4,v=c8+240,u=c9*0.06,r=0;r<5;++r){q=B.k.F(r*190-c6.CW*0.06-w,v)-120
p=u+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dsR[o]
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=B.c.j(0.75).gp(0)
l=m.G()
d0.drawCircle(q+n.a,p+n.b,18,l)
l.delete()}}for(v=d2*0.7,u=d4+4,m=d4-16,k=x.v,j=0;j<2;++j){i=$.S()
h=A.a([],k)
g=new A.aF(i.r,B.ag,c5,c5,h)
h.push(new A.aX(0,u))
for(i=m-j*12,f=0.12+j*0.1,e=70+j*30,d=14-j*3,q=0;q<=c8;q+=6){a0=new A.aq(q,i+Math.sin((q+c6.CW*f)/e)*d)
h.push(a0)
a1=g.f
if(a1!=null)a0.by(a1)
a0=g.e
if(a0!=null)a0.a.delete()
g.e=null}i=new A.aq(c8,u)
h.push(i)
h=g.f
if(h!=null)i.by(h)
i=g.e
if(i!=null)i.a.delete()
g.e=null
$.S()
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.r=A.ar(j===0?D.bcn:D.bqN,D.bhf,v).gp(0)
l=i.G()
i=g.e
d0.drawPath((i==null?g.e=new A.cl(g.gbw().a.snapshot()):i).a,l)
l.delete()}for(v=d4+2,r=0;r<8;++r)this.c90(d5,new A.t(B.k.F(B.k.F(r*300-c6.CW*0.5,2400)+2400,2400)-150,v),(r&1)===0,d2)
$.S()
v=A.I()
u=A.ar(D.ahd,D.Fw,d2)
u.toString
v.sam(A.jo(new A.t(0,d4),new A.t(0,c9),A.a([u,D.bmN],t),c5,B.x,c5))
d5.aP(new A.a3(0,d4,c8,c9),v)
a2=c9*0.56
a3=c9*0.66
v=A.I()
v.r=D.bgx.gp(0)
d5.aP(new A.a3(0,a2,c8,a3),v)
v=A.I()
v.r=D.bqt.gp(0)
d5.aP(new A.a3(0,a2-3,c8,a2),v)
for(q=-B.k.F(c6.CW,70),v=(a2+a3)/2-2,u=v+4;q<c8;q+=70){t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=K.LW.gp(0)
l=t.G()
d0.drawRect(A.bF(new A.a3(q,v,q+36,u)),l)
l.delete()}for(v=a2-6,u=v-36,t=u+36,m=v-34,i=c8*0.62,h=c8+160,f=c7*3,e=c7*6,d=v+40,a0=v-20,a1=a0+20,a4=v-56,a5=a4+56,a6=v-66,a7=a6+20,a8=v-72,r=0;a9=d1.length,r<=a9;r=b0){b0=r+1
q=i+b0*520-c6.CW
if(q<-160||q>h)continue
a9=r===a9
b1=q+40
b2=b1-26
b3=$.S()
b4=new A.ap(B.R,B.N,B.U,B.V,B.S)
b4.r=D.bc4.gp(0)
l=b4.G()
d0.drawRect(A.bF(new A.a3(b2,u,b2+52,t)),l)
l.delete()
b2=A.a([],k)
b3=new A.aF(b3.r,B.ag,c5,c5,b2)
b2.push(new A.aX(b1-36,m))
b2.push(new A.aq(b1,a8))
b2.push(new A.aq(b1+36,m))
b2.push(new A.bs())
b2=new A.ap(B.R,B.N,B.U,B.V,B.S)
b2.r=D.boK.gp(0)
l=b2.G()
b2=b3.gbw().a.snapshot()
d0.drawPath((b3.e=new A.cl(b2)).a,l)
l.delete()
b2=b1-6
b3=new A.ap(B.R,B.N,B.U,B.V,B.S)
b3.r=D.fq.gp(0)
l=b3.G()
d0.drawRect(A.bF(new A.a3(b2,a0,b2+12,a1)),l)
l.delete()
b5=q-36
b2=b5-2
b3=new A.ap(B.R,B.N,B.U,B.V,B.S)
b3.r=D.Fk.gp(0)
l=b3.G()
d0.drawRect(A.bF(new A.a3(b2,a4,b2+4,a5)),l)
l.delete()
b2=b5-30
b6=A.bt(new A.a3(b2,a6,b2+60,a7),B.i8)
b2=new A.ap(B.R,B.N,B.U,B.V,B.S)
b2.r=D.brR.gp(0)
l=b2.G()
d0.drawRRect(A.el(b6),l)
l.delete()
b2=new A.ap(B.R,B.N,B.U,B.V,B.S)
b2.r=D.B0.gp(0)
b2.b=B.aa
b2.c=2
l=b2.G()
d0.drawRRect(A.el(b6),l)
l.delete()
b7=a9?"HOME":"STOP "+b0
b8=new A.jR(new A.eu(b7,c5,c5,B.cQ,c5,c5,c5,c5,c5,c5,D.fhY),B.a3,B.bZ,new A.jA(1),c5,c5,c5,c5,B.bW,c5)
b8.el()
b2=b8.b
b3=b2.c
b2=b2.a.c
b8.a3(d5,new A.t(b5-b3/2,a4-b2.gbb(b2)/2))
if(a9)b9=c6.r===D.abB
else if(r===c6.w){b2=c6.r
b2=b2===D.Wg||b2===D.Ay
b9=b2}else b9=!1
if(a9){b2=c6.gh4(0).gyR()
c0=(b2==null?c5:b2.c)===D.oe?1:0}else c0=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b2=c6.gqc()
c1=b2.d<b2.c.length&&b9
c2=b9&&c6.r===D.Ay
b2=c1?C.hrd(c7,r):0
if(c2)b3=c6.ax?1:-0.3
else b3=a9&&b9?1:0.4
b4=b9&&c6.r===D.Wg?0.4:0
c3=c2&&c6.ax?0.5:0
if(a9&&b9)a9=new A.t(40,-110+Math.sin(e)*10)
else a9=c1?new A.t(44+Math.sin(f)*8,-66+Math.sin(w)*10):c5
C.RS(d5,new A.t(q+4,d),0,b4,-0.8,-0.2,c5,a9,new A.t(q-200,v),c0,b2,0,0.85,b3,c3,c7+r,-0.3)}d1=c8*0.28
this.bFJ(d5,new A.t(d1,a3-6),c7,d3,d6)
if(d3)for(v=c7*1.6,u=d1-90,t=a3-10,r=0;r<7;++r){c4=B.k.F(v+r/7,1)
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=D.bpZ.j(0.5*(1-c4)).gp(0)
l=m.G()
d0.drawCircle(u-c4*70,t-c4*18,6+c4*16,l)
l.delete()}if(c6.ay&&c6.r!==D.Wf)for(v=c7*1.2,u=d1+62,t=a3-40,r=0;r<5;++r){c4=B.k.F(v+r/5,1)
m=Math.sin(r+w)
$.S()
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=B.c.j(0.5*(1-c4)).gp(0)
l=k.G()
d0.drawCircle(u+m*5,t-c4*50,4+c4*10,l)
l.delete()}if(c6.r===D.Ay&&c6.ax){b8=A.fu(c5,c5,c5,c5,A.cS(c5,c5,c5,c5,c5,c5,c5,c5,c5,A.l(c5,c5,B.cI,c5,c5,c5,c5,c5,c5,c5,c5,24,c5,c5,B.u,c5,c5,!0,c5,c5,c5,c5,c5,A7.HS,c5,c5),"BEEP BEEP!"),B.a3,B.bZ,c5,B.dA,B.bW)
b8.el()
b8.a3(d5,new A.t(d1-b8.b.c/2+40,a2-96-Math.abs(Math.sin(c7*9))*6))}},
c90(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=A.ar(D.bmi,D.bfQ,g)
m.toString
if(f){w=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
v=e.a
u=e.b
w.D(new A.aX(v-16,u))
t=u-36
s=u-56
w.D(new A.c4(v-9,t,v-7,s))
w.D(new A.aq(v+7,s))
w.D(new A.c4(v+9,t,v+16,u))
w.D(new A.bs())
t=A.I()
t.r=D.YE.gp(0)
d.aG(w,t)
for(w=v+0,t=u+-54,s=u+-72,r=d.a,u+=-76,q=0;q<4;++q){p=D.cW2[q]
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.YE.gp(0)
o.c=4
o.d=B.bE
n=o.G()
r.drawLine.apply(r,[w,t,v+p*24,s,n])
n.delete()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=m.gp(0)
n=o.G()
r.drawCircle(v+p*26,u,10,n)
n.delete()}}else{w=e.a8(0,D.eiU)
$.S()
v=A.I()
v.r=D.bc6.gp(0)
v.c=4
d.bo(e,w,v)
v=A.bJ(e.a8(0,D.eiV),16,60)
w=A.I()
w.r=m.gp(0)
d.dO(v,w)}},
bFJ(a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6?Math.sin(a5*22)*1.6:Math.sin(a5*2)*0.4,a0=this.b,a1=a0.ay&&a0.r!==D.Wf?0.045:0,a2=a3.a
J.bm(a2.save())
a2.translate(a4.a,a4.b+d)
a3.ie(0,a1)
for(w=0;w<2;++w){v=D.dlp[w]
u=a0.ay&&a0.r!==D.Wf&&v>0
J.bm(a2.save())
a2.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=D.bqF.gp(0)
r=s.G()
a2.drawCircle(0,0,t,r)
r.delete()
a2.rotate(a0.CW/18*180/3.141592653589793,0,0)
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=D.bjf.gp(0)
r=t.G()
a2.drawCircle(0,0,9,r)
r.delete()
for(q=0;q<4;++q){t=q*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=B.bm.gp(0)
p.c=2
r=p.G()
a2.drawLine.apply(a2,[0,0,s*9,t*9,r])
r.delete()}a2.restore()}o=A.wh(D.eYT,B.fE,B.fE,B.ip,B.i7)
$.S()
t=A.I()
t.sam(A.jo(D.ef_,B.a6Y,D.dbz,F.a3b,B.x,e))
a3.az(o,t)
for(n=0;n<20;++n){t=-100+n*10
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=D.d5K[B.o.F(n,4)].gp(0)
r=s.G()
a2.drawRect(A.bF(new A.a3(t,-26,t+10,-19)),r)
r.delete()}m=a0.r===D.Ay&&a0.ax
l=[2,3,4,5]
for(t=a5*10,n=0;n<4;++n){s=-88+n*38
p=s+32
k=new A.a3(s,-66,p,-36)
J.bm(a2.save())
a2.clipRRect(A.el(A.bt(k,B.mU)),$.ny(),!0)
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=D.Xr.gp(0)
r=j.G()
a2.drawRect(A.bF(k),r)
r.delete()
j=l[n]
i=m?1:0.35
h=m?0.5:0
g=a0.ay&&a0.r===D.Ay?1:0
f=m?Math.max(0,Math.sin(t+n))*6:0
C.RS(a3,new A.t(s+(p-s)/2,-10),f,g,0.5,-0.2,e,e,D.aJg,j,h,0,0.4,i,0,a5,0)
a2.restore()
i=A.bt(k,B.mU)
h=new A.ap(B.R,B.N,B.U,B.V,B.S)
h.r=D.ai2.gp(0)
h.b=B.aa
h.c=2
r=h.G()
a2.drawRRect(A.el(i),r)
r.delete()}a0=A.bt(D.Tw,B.mU)
t=A.I()
t.r=D.Xr.gp(0)
a3.az(a0,t)
J.bm(a2.save())
a2.clipRRect(A.el(A.bt(D.Tw,B.mU)),$.ny(),!0)
C.RS(a3,new A.t(D.Tw.gbK().a,-10),0,0,0.7,-0.1,e,e,D.aJg,6,0,0,0.4,0.5,0,a5,0)
a2.restore()
t=A.bt(D.Tw,B.mU)
a0=A.I()
a0.r=D.ai2.gp(0)
a0.b=B.aa
a0.c=2
a3.az(t,a0)
a0=A.I()
a0.r=Ap.Fx.gp(0)
a3.ad(D.eh4,4,a0)
a0=A.I()
a0.r=D.Fk.gp(0)
a3.aP(D.f_1,a0)
for(w=0;w<3;++w){v=D.dlr[w]
a0=A.bt(new A.a3(v,-96,v+28,-79),B.i8)
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=D.Fw.gp(0)
r=t.G()
a2.drawRRect(A.el(a0),r)
r.delete()}a2.restore()},
aw(d){return!1}}
C.aAu.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.bfg.prototype={}
C.aAw.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.bfh.prototype={}
C.aAx.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.bfi.prototype={}
C.a5H.prototype={
B(d){var w=null
return new A.a7(1/0,this.c,A.b4(w,w,w,new C.bhO(w),B.ax),w)}}
C.bhO.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=d.a,s=e*0.15,r=f/2,q=e/2,p=f*0.8,o=e*0.85,n=x.v,f*=0.2,m=0,l=0;l<w;l+=e){k=D.djo[B.o.F(m,6)]
j=$.S()
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.r=k.gp(0)
h=i.G()
t.drawRect(A.bF(new A.a3(l,0,l+v,u)),h)
h.delete()
if(B.o.F(m,3)===0){i=A.a([],n)
g=new A.aF(j.r,B.ag,null,null,i)
j=l+q
i.push(new A.aX(j,f))
i.push(new A.aq(l+o,r))
i.push(new A.aq(j,p))
i.push(new A.aq(l+s,r))
i.push(new A.bs())
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=B.c.j(0.85).gp(0)
h=j.G()
j=g.gbw().a.snapshot()
t.drawPath((g.e=new A.cl(j)).a,h)
h.delete()}++m}},
aw(d){return!1}}
C.tl.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.OZ,w,w,w,new C.bPH(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a1,w,w,w,D.fff,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c7(w,D.Xe,A.p(w,A.bl(!0,A.x(A.a([D.c_U,new A.D(D.bCQ,A.B(u,B.m,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),B.f,w,w,D.b4A,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.HW.prototype={
B(d){var w=null,v=this.d,u=C.aPr(v),t=C.i8a(v),s=B.c.j(0.08),r=A.m(18),q=A.J(B.cI.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fhJ,w,w,w)],x.p)
if(this.e)p.push(D.elg)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fS,w,w,w))
if(t!=null)p.push(new A.D(B.u0,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Ad,w,w,w),w))
return A.p(w,A.x(p,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bB,w,w,w)}}
C.Vt.prototype={
T(){return new C.bks(A.U(x.N,x.S),B.o.F(Date.now(),1e5))},
cUf(d){return this.f.$1(d)},
ge1(){return this.d}}
C.bks.prototype={
gSr(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a2()
this.Pa()},
Pa(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bQs(u.a.d),$async$Pa)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.d9E[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bQr(p,(o===$?u.d=q.c:o).a,r),$async$Pa)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.dXj(u,n))
return A.h(null,v)}})
return A.i($async$Pa,v)},
u7(d){return this.cla(d)},
cla(d){var w=0,v=A.j(x.H),u=this,t
var $async$u7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a4(t,!1).cc(A.dX(new C.dXk(d),!1,null,x.H)),$async$u7)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pa()
return A.h(null,v)}})
return A.i($async$u7,v)},
gb4k(){var w,v,u,t=C.Mr(this.gSr()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)s.push(B.a.i(w[u].b))
return s},
a1S(d){return this.csl(d)},
csl(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1S=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.M)(d),++s)r.push(d[s].ag())
w=2
return A.b(u.a.cUf(r),$async$a1S)
case 2:if(u.c!=null)u.m(new C.dXl(u,r))
return A.h(null,v)}})
return A.i($async$a1S,v)},
Ot(d){return this.bOk(d)},
bOk(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Ot=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.h5l(t.gSr())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Mc("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a4(s,!1).cc(A.dX(new C.dXh(q),!1,null,r)),$async$Ot)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.M)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bg(j,new C.dXi(p))
o=s.length
B.d.c6(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a1S(A.d0(s,0,A.dA(2,"count",x.S),r).dm(0)),$async$Ot)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ot,v)},
Xj(d,e){return this.bLX(0,e)},
bLX(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Xj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.ci(null,null,!0,null,new C.dXg(e),o,null,!0,!0,x.y),$async$Xj)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.h5l(u.gSr()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a1S(o),$async$Xj)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Xj,v)},
a9w(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.dXd(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.J(B.aZ,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cx,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.Uu,p,p,p),B.b0],s)
q=A.m(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fg8,p,p,p),B.f,p,p,new A.o(B.ii,p,p,q,p,p,B.n),p,p,p,p,B.BS,p,p,p))
return A.aB(p,A.d9(A.p(p,A.x(A.a([A.B(r,B.m,p,B.e,B.i,0,p,p),B.b0,A.d(e,p,2,p,p,p,p,D.fnM,p,p,p),B.cL,A.d(f,p,3,B.a1,p,p,p,D.fgQ,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a9(B.ay,B.aE,B.x,w,p,p),B.n),p,p,p,p,B.yb,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
WN(d,e,f,g,h,i){return this.a9w(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Mr(s.gSr()),p=s.gSr(),o=C.aPr(s.e),n=C.h5l(p),m=s.a.e&&J.ad(p.z)<2,l=new C.dXm(s),k=C.huE(p,1).length,j=C.huQ(p,1).length,i=C.hvK(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.J(B.cI.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,F.a9J,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.flk,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.B(A.a([e,B.bd,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,F.a9G,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pz,r,r,r),D.fJK],a1),B.m,r,B.e,B.i,0,B.p)],a1),B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bB,r,r,r)
f=s.WN("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.dXn(s,p),l.$1("kahoot"))
h=s.WN("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lr,new C.dXo(s,p),l.$1("fire"))
a0=s.WN("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.Bn,new C.dXp(s,p),l.$1("catch"))
j=j!==0?new C.dXs(s,p):r
j=s.a9w("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hc,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.dXt(s,p):r
i=s.a9w("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.kY,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.WN("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eW,new C.dXu(s,p),l.$1("journey"))
k=k!==0?new C.dXv(s,p):r
k=A.a([g,B.aN,D.fNJ,B.O,A.kN(0.98,A.a([f,h,a0,j,i,e,s.a9w("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ei,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.WN("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d1,new C.dXw(s,p),l.$1("school"))],a1),2,12,12,r,B.dR,!0),B.d4,A.B(A.a([D.bEy,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fgc,r,r,r)],a1),B.m,r,B.e,B.i,0,r,r),B.O],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.M)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aQ(18,18)
u=new A.ay(B.aZ,1,B.r,-1)
g=B.a.i(v.b)
if(g.length===0)g="Untitled game"
g=A.a([D.fuE,B.bd,new A.bA(1,B.bc,A.x(A.a([new A.y(g,r,B.hD,r,r,r,r,B.a1,r,1,r,r),new A.y(""+v.gaol(0).length+" questions \xb7 Kahoot style",r,B.Ad,r,r,r,r,r,r,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gaol(0).length>=2){f=D.ls.j(0.2)
t=new A.ay(D.ls,1,B.r,-1)
g.push(A.aB(r,A.p(r,A.X(B.i1,D.ls,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bK(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dXx(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cI.j(0.2)
t=new A.ay(B.cI,1,B.r,-1)
f=A.aB(r,A.p(r,A.X(B.iW,B.cI,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bK(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dXy(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.f7.j(0.2)
t=new A.ay(B.f7,1,B.r,-1)
B.d.v(g,A.a([B.bo,f,B.bo,A.aB(r,A.p(r,A.X(B.e9,B.f7,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bK(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dXz(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.cd(B.aM,B.e,B.i,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bK(u,u,u,u),new A.bj(h,h,h,h),r,r,B.n),r,r,r,B.d3,B.bf,r,r,r))}if(s.a.e){j=m?new C.dXq(s):new C.dXr(a2)
i=A.m(18)
h=A.J(m?B.cI:B.aZ,B.r,2)
g=m?B.cI.j(0.12):B.ds
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aB(r,A.p(r,A.at(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cI:B.aB,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.N9,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.fOF)
k.push(B.aA)
k.push(D.aqs)
return new C.tl("Family Games \xb7 "+p.b,A.cr(k,r,D.byS,r,r,B.ah,!1),B.fu,r)}}
C.a_6.prototype={
a5(){return"_KPhase."+this.b}}
C.al3.prototype={
T(){return new C.al4(D.aXW)},
gcZ(){return this.e}}
C.al4.prototype={
q(){var w=this.at
if(w!=null)w.a4(0)
w=this.ax
if(w!=null)w.a4(0)
this.a1()},
h2(d){var w,v=this
v.m(new C.bQ1(v))
w=v.at
if(w!=null)w.a4(0)
v.at=A.dg(B.fA,new C.bQ2(v))},
aO6(){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new C.bPS(w))
v=w.at
if(v!=null)v.a4(0)
w.at=A.dg(B.fi,new C.bPT(w))},
KG(d){var w
if(this.d!==D.ab4)return
w=this.at
if(w!=null)w.a4(0)
this.b4g(d)},
b4g(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.k.V(500+500*B.k.E(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bPY(u,v,d))
u=v.ax
if(u!=null)u.a4(0)
v.ax=A.cK(B.rj,v.gkv(v))},
cGZ(d){var w=this
if(w.d!==D.VO)return
if(w.e+1>=w.a.w.length)w.Y3()
else{w.m(new C.bPZ(w))
w.aO6()}},
Y3(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Y3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a4(0)
p=u.x
t=u.a.w.length
s=C.bEC(p,u.w,t)
u.m(new C.bPV(u,s))
w=2
return A.b(C.Bq(u.a.e,s),$async$Y3)
case 2:r=e
t=u.a
w=3
return A.b(C.Br(t.e,t.f,t.r,u.f),$async$Y3)
case 3:q=e
if(u.c!=null)u.m(new C.bPW(u,r,q))
return A.h(null,v)}})
return A.i($async$Y3,v)},
cHK(){var w,v,u,t,s=this,r=s.a,q=new A.e9()
q.d3(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.bk("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.dZ(r,q)
for(r=A.d0(r,0,A.dA(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bR(r,r.gL(0),u.k("bR<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.bk(t,B.k.V(w*(0.35+q.ah()*0.5)),!1))}B.d.aY(v,new C.bQ_())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.aXW===r){w=A.a([D.fK8,B.W,A.d(s,t,t,t,t,t,t,B.K9,B.L,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fgk,t,t,t))
w.push(B.aA)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.wW,B.L,t,t))
w.push(B.dS)
w.push(C.ub("Play",u.geW(u),B.cI,B.i1,D.fq))
w=A.at(new A.D(B.eu,A.x(w,B.m,t,B.e,B.Q,0,B.p),t),t,t,t)
break A}if(D.aXX===r){w=A.at(A.d(""+u.z,t,t,t,t,t,t,D.foh,t,t,t),t,t,t)
break A}if(D.ab4===r||D.VO===r){w=u.cnM()
break A}if(D.aXY===r){w=u.c91()
break A}w=t}return new C.tl(s,w,B.fu,t)},
cnM(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.VO,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aSm,j,j,j),B.b0],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.K5,j,j,j))
g.push(B.at)
f=A.m(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iK,j,j,j),B.f,j,j,new A.o(B.bz,j,j,f,j,j,B.n),j,j,j,j,B.G_,j,j,j))
g=A.B(g,B.m,j,B.e,B.i,0,j,j)
f=A.m(6)
w=i?0:B.k.E(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.ll(B.bz,j,k.as<5?B.f7:B.cI,9,j,w,j),B.ap)
w=A.m(22)
v=A.J(B.cI,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.ls:F.n6,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.O,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.ffo,B.L,j,j)],h),B.m,j,B.e,B.Q,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fqo,B.L,j,j)
w=A.E(A.p(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.pY,j,v,w,j,j,B.n),j,j,j,j,B.fk,j,j,1/0),3)
v=A.a([],h)
for(u=k.gkv(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bPX(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aAr[o]
m=new A.aQ(16,16)
l=new A.ay(i&&t===s.c?B.c:B.K,4,B.r,-1)
r=A.a([new A.y(D.aAF[o],j,D.fhk,j,j,j,j,j,j,j,j,j),B.at,new A.bA(1,B.bc,new A.y(r[t],j,D.fgh,j,j,j,j,B.a1,j,3,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.ap0)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bSO)
v.push(A.aB(j,new A.S9(A.p(j,new A.cd(B.aM,B.e,B.i,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bK(l,l,l,l),new A.bj(m,m,m,m),V.ayT,j,B.n),j,j,j,j,B.fj,j,j,j),p,B.b6,B.a2,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.ae,w,B.ae,A.E(A.kN(1.45,v,2,10,10,j,B.dR,!1),4)],h)
if(i)h.push(D.ekz)
return new A.D(B.a_7,A.x(h,B.m,j,B.e,B.i,0,B.p),j)},
c91(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cHK(),m=x.p,l=A.a([D.b8p,A.at(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pz,o,o,o),o,o,o),A.at(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.UA,o,o,o),o,o,o),B.aN],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cI.j(0.25):B.ds
u=new A.aQ(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cI:B.bz,1,B.r,-1)
q=w<3?D.dbQ[w]:""+(w+1)
s=s?B.u:B.P
l.push(A.p(o,new A.cd(B.aM,B.e,B.i,B.m,o,B.p,o,0,A.a([new A.a7(34,o,new A.y(q,o,B.mZ,o,o,o,o,o,o,o,o,o),o),new A.bA(1,B.bc,new A.y(t.a,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new A.y(""+t.b,o,B.iK,o,o,o,o,o,o,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bK(r,r,r,r),new A.bj(u,u,u,u),o,o,B.n),o,o,o,B.ct,B.eR,o,o,o))}l.push(B.W)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.HW(m,v,p.CW,o))
l.push(B.aN)
l.push(A.at(C.ub("Back to the games",new C.bPU(p),B.cI,B.l6,D.fq),o,o,o))
return A.cr(l,o,B.fk,o,o,B.ah,!1)}}
C.T7.prototype={
T(){return new C.al0(A.U(x.de,x.er))}}
C.al0.prototype={
gCH(){var w,v=this,u=v.d
if(u===$){w=C.haV(v.a.c.ag())
v.d!==$&&A.bG()
v.d=w
u=w}return u},
gl0(d){var w,v,u=this,t=u.e
if(t===$){w=u.gCH().b
v=$.aw()
u.e!==$&&A.bG()
t=u.e=new A.as(new A.bb(w,B.b3,B.aO),v)}return t},
cbD(d){return this.f.c3(0,d,new C.bPs(d))},
Z(){this.a2()
var w=this.gCH().c
if(w.length===0)w.push(C.fY5(null,0,20,""))},
q(){var w,v,u=this.gl0(0)
u.S$=$.aw()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aW(u.d);w.C();){v=w.gR(w)
v.S$=$.aw()
v.P$=0}this.a1()},
cGP(){if(this.gCH().c.length>=12)return
this.m(new C.bPt(this))},
jx(d){var w,v,u=this,t=u.gCH()
t.b=B.a.i(u.gl0(0).a.a)
w=t.gaol(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.U(D.f8q)
return}v=t.c
B.d.a9(v)
B.d.v(v,w)
v=u.c
v.toString
A.a4(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bPD(),r=x.p,q=A.a([A.bN(!1,D.fzv,t,t,!0,t,t,u.gbnS(u),t,t)],r),p=A.a([D.fOg,B.ae,A.aM(t,B.Y,!1,t,!0,B.t,t,A.aN(),u.gl0(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.aj,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.a9,t,t,t,t,t,t,t,t,t,t,t,B.fS,!0,B.a3,t,B.ao,t,t,t,t),B.aA],r)
for(w=0;v=u.gCH().c.length,w<v;++w)B.d.v(p,A.a([new A.fe(new C.bPC(u,w,s),t)],r))
if(v<12)p.push(A.at(C.ub("\uff0b Add a question",u.gcGO(),B.aZ,t,B.c),t,t,t))
return new C.tl("Make your game",A.cr(p,t,D.byP,t,t,B.ah,!1),q,t)}}
C.aq1.prototype={
T(){return new C.aE0(A.a([],x._))},
bu(){return this.r.$0()},
q5(){return this.w.$0()},
ge1(){return this.c}}
C.aE0.prototype={
Z(){var w,v
this.a2()
this.w3()
w=this.a
v=w.c
if(v.length!==0)C.a7r(v,w.e,w.d.w)},
vU(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h7R(r,t.e,!1,s.w,new C.dYZ(u),null,s),$async$vU)
case 2:w=3
return A.b(u.w3(),$async$vU)
case 3:return A.h(null,v)}})
return A.i($async$vU,v)},
a02(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a02=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h7R(r,t.e,!0,s.w,new C.dYY(u),null,s),$async$a02)
case 2:w=3
return A.b(u.w3(),$async$a02)
case 3:return A.h(null,v)}})
return A.i($async$a02,v)},
w3(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$w3=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.AW(q.a.c),$async$w3)
case 7:p=e
if(q.c!=null)n=q.e||J.cL(p)
else n=!1
if(n)q.m(new C.dZ0(q,p))
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
return A.b(C.GN(q.a.c).da(0,B.q6),$async$w3)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dZ1(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dZ2(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$w3,v)},
OP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$OP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.U(D.f80)
w=3
return A.b(C.GN(t.a.c),$async$OP)
case 3:r=e
w=4
return A.b(C.fNT(t.a.c,r),$async$OP)
case 4:q=e
w=5
return A.b(C.GN(t.a.c),$async$OP)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dYX(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dD:B.cV,null,B.t,null,s,null,B.mF,null,null,null,null,null,null,null,null,null,null))
t.a.q5()
case 1:return A.h(u,v)}})
return A.i($async$OP,v)},
Ia(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ia=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ign(l),$async$Ia)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hKs(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b_P(q,p.e,l,"Each family tree costs $"+B.k.ac(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Ia)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hrj(r)
o=Date.now()
n=t.a.c
m=new C.kM(l,r.toUpperCase(),p,!0,B.Y,D.CV,new A.V(o,0,!1),0,n,D.u7,B.ca)
w=5
return A.b(C.a30(n,m),$async$Ia)
case 5:w=6
return A.b(t.w3(),$async$Ia)
case 6:t.a.bu()
t.a.q5()
if(t.c==null){w=1
break}t.EG(m)
case 1:return A.h(u,v)}})
return A.i($async$Ia,v)},
EG(d){return this.cgw(d)},
cgw(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$EG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.AW(u.a.c),$async$EG)
case 2:n=l.pQ(k.dH(f,new C.dZ_(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.apW(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$EG)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a30(u.a.c,o),$async$EG)
case 6:case 5:w=7
return A.b(u.w3(),$async$EG)
case 7:u.a.q5()
return A.h(null,v)}})
return A.i($async$EG,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.J,o=new C.tZ(p)
if(r.e)return A.at(A.mS(q,p?B.bs:B.bm,q,q,q,q,q,q,q,q),q,q,q)
if(J.cs(r.d)){w=p?B.e3:B.c
v=A.m(15)
u=A.aG(!1,B.a2,!0,q,A.aO(!1,q,!0,A.p(q,D.bQv,B.f,q,q,new A.o(B.aW.j(0.12),q,A.J(B.aW,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cM,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcfA(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ai)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.FP(A.p(q,A.x(A.a([u,B.aN,t,B.O,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bm,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dS,A.bH(D.fRt,q,r.gaRh(),A.bo(B.bP,q,q,q,q,q,As.a_w,q,new A.b7(A.m(12),B.a0),q,q,q))],x.p),B.m,q,B.e,B.i,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bBy,q,q,1/0),15,B.af,1.05,D.aaR,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b0],v)
if(J.cL(r.d))w.push(A.aH(q,q,q,q,A.X(B.z_,B.aW,q,q,q,q),q,q,q,new C.dZ4(r),q,q,q,q,"Sync family trees with database",q))
if(J.cL(r.d))w.push(A.aH(q,q,q,q,A.X(B.yU,B.aW,q,q,q,q),q,q,q,r.gag8(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dl(E.apU,D.fwV,r.gaRh(),A.bo(B.bP,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ae)
u.push(new C.FP(r.cD7(J.r(r.d,s),o),14,B.af,1,D.aaR,q))
B.d.v(w,u)}return A.x(A.a([p,B.aA,A.x(w,B.m,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cD7(d,e){var w=null,v=e.a,u=v?B.e3:B.c,t=A.m(14),s=A.J((v?B.e8:B.bO).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ep,10)],x.V),q=A.m(14),p=A.p(w,D.bPz,B.f,w,w,new A.o(B.aW.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gape(),m=d.d?"":" \xb7 Public",l=d.y===D.kG?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bD,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.p(w,A.aG(!1,B.a2,!0,w,A.aO(!1,q,!0,new A.D(B.bB,A.B(A.a([p,B.bd,l,A.X(B.NZ,v?B.bs:B.bm,w,w,w,w)],k),B.m,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dZ3(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.apW.prototype={
T(){return new C.aDY(A.a([],x._),A.aY(x.N),A.b8y())},
bu(){return this.r.$0()},
ge1(){return this.c}}
C.aDY.prototype={
Z(){var w,v,u=this
u.a2()
u.d=u.a.w
u.acV()
w=u.a
v=w.c
if(v.length!==0)C.a7r(v,w.e,w.d.w)},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.a1()},
a31(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a31=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xZ("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ci(null,null,!0,null,new C.dYp(r),s,null,!0,!0,x.y),$async$a31)
case 3:if(e!==!0||t.c==null){w=1
break}t.JH()
t.m(new C.dYq(t,r))
w=4
return A.b(t.u3(),$async$a31)
case 4:t.a.bu()
t.xZ(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a31,v)},
csX(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aV.x1$.push(new C.dYk(w,f,d,e))},
aTx(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.ef(w,v,0,1)
u.jV(q,q,1,1)
this.w.sp(0,u)},
baO(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eK(new Float64Array(16))
q.e6(r)
w=q.CM()
v=B.k.E(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.ef(r,u,0,1)
t.jV(v,v,1,1)
t.ef(-r,-u,0,1)
t.iO(0,q)
s.sp(0,t)},
acV(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.AW(u.a.c),$async$acV)
case 2:t=s.pQ(r.dH(e,new C.dXM(u)))
if(t!=null&&u.c!=null)u.m(new C.dXN(u,t))
return A.h(null,v)}})
return A.i($async$acV,v)},
xZ(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
vU(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h7R(o,t,!1,r,new C.dY3(u),q.a,s),$async$vU)
case 2:n=A
m=J
w=3
return A.b(C.GN(u.a.c),$async$vU)
case 3:p=n.pQ(m.dH(e,new C.dY4(u)))
if(p!=null&&u.c!=null)u.m(new C.dY5(u,p))
return A.h(null,v)}})
return A.i($async$vU,v)},
JH(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cE(w,0)},
u3(){var w=0,v=A.j(x.H),u=this,t,s
var $async$u3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a30(t,s),$async$u3)
case 2:return A.h(null,v)}})
return A.i($async$u3,v)},
a1x(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1x=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uc(q,t.a.c)){t.xZ("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ihx(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a1x)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.JH()
t.m(new C.dYj(t,r))
w=4
return A.b(t.u3(),$async$a1x)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1x,v)},
b0Y(){var w=this.c
w.toString
A.a4(w,!1).cc(A.dX(new C.dY0(this),!1,null,x.H))},
a0g(){return this.cgy()},
cgy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uc(m,t.a.c)){t.xZ("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Z(s,new C.dYg(),A.T(s).k("Z<1>")).gL(0)
s=A.eC([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("ct.E"))
B.d.fd(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.K,null,new C.dYh(n,t,new C.tZ(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0g)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.JH()
t.m(new C.dYi(t,o))
w=6
return A.b(t.u3(),$async$a0g)
case 6:case 5:if(o.a&&t.c!=null)t.b0Y()
case 1:return A.h(u,v)}})
return A.i($async$a0g,v)},
Wa(d){return this.bB3(d)},
bB3(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uc(r,t.a.c)){t.xZ("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ci(null,null,!0,null,new C.dXA(t,d),r,null,!0,!0,x.P),$async$Wa)
case 3:s=f
if(s==null){w=1
break}t.JH()
t.m(new C.dXB(t,s))
w=4
return A.b(t.u3(),$async$Wa)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wa,v)},
a3n(d){return this.cFh(d)},
cFh(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3n=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ci(null,null,!0,null,new C.dYs(u,d,new C.tZ(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3n)
case 2:return A.h(null,v)}})
return A.i($async$a3n,v)},
ccQ(d){var w=this,v=w.d
v===$&&A.c()
if(C.uc(v,w.a.c))w.Ou(d)
else w.a3n(d)},
aiB(d,e){return this.cwV(d,e)},
cwV(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aiB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ci(null,null,!0,null,new C.dYm(new C.tZ(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$aiB)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aiB,v)},
If(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$If=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kG?3:5
break
case 3:w=6
return A.b(C.fWk(t.a.c),$async$If)
case 6:s=e
o=t.a
r=C.hfI(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aiB(!s,!r),$async$If)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aPA(o,t.a.c)){t.xZ("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lc(o,"Cancel","Remove",q.y===D.kG?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$If)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aPw(t.a.c,t.d.a),$async$If)
case 11:t.a.bu()
o=t.c
if(o==null){w=1
break}A.iR(o,null)
case 1:return A.h(u,v)}})
return A.i($async$If,v)},
aar(d){return this.bMd(d)},
bMd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aar=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uc(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b3(s,new C.dXC(p))){o=A.T(s)
p.a=A.pQ(new A.cQ(new A.Z(s,new C.dXD(d),o.k("Z<1>")),new C.dXE(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.JH()
t.m(new C.dXF(t,s,d,q))
w=3
return A.b(t.u3(),$async$aar)
case 3:t.xZ(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aar,v)},
Ou(d){return this.bOo(d)},
bOo(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ou=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uc(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3n(d),$async$Ou)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ci(null,null,!0,null,new C.dXJ(t,d),r,null,!0,!0,x.P),$async$Ou)
case 6:s=f
if(s==null){w=1
break}t.JH()
t.m(new C.dXK(t,s))
w=7
return A.b(t.u3(),$async$Ou)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ou,v)},
cDw(){var w=this,v=w.d
v===$&&A.c()
if(!C.uc(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dYr(w))
w.u3()},
Z4(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Z4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aPA(n,t.a.c)){t.xZ("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.as(B.as,s)
q=t.d.e
p=A.bq(new A.N(q,t.gcbj(),A.T(q).k("N<1,n>")).c0(0,new C.dXW()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ci(null,null,!0,null,new C.dXX(t,new C.tZ(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$Z4)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.JH()
t.m(new C.dXY(t,p))
w=4
return A.b(t.u3(),$async$Z4)
case 4:t.xZ("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Z4,v)},
cbk(d){return B.a.i(d.toLowerCase())},
cfk(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uc(v,w)
t=r.d
s=C.i6D(t)
C.igr(q,t.b,u,C.i6C(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.J,m=new C.tZ(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Z(l,new C.dYz(),A.T(l).k("Z<1>")).gL(0)
l=n?B.c0:B.iu
v=A.X(B.a0H,n?B.bs:B.bm,o,o,o,18)
u=x.p
v=A.a([new A.D(B.BI,A.aO(!1,o,!0,new A.D(B.hs,A.B(A.a([v,B.bo,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dYA(p,d),o,o,o,o,o,o,o),o),new A.D(B.np,p.bZx(m),o)],u)
if(p.d.y===D.kG){t=B.rL.j(0.15)
s=A.m(12)
r=A.J(B.rL.j(0.45),B.r,1)
q=C.GL(p.d,p.a.c)
v.push(new A.D(B.ye,A.p(o,A.B(A.a([D.bUT,B.at,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iB,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b0],u)
if(C.uc(p.d,p.a.c)&&p.e.length!==0)u.push(new C.G_("Undo",B.rz,p.gcDv(),m,o,o))
u.push(new C.G_("Family Book",D.bKi,p.gcfj(),m,B.tC,o))
u.push(new C.G_("Family games",B.ok,p.gcfv(),m,B.aD,o))
if(C.uc(p.d,p.a.c))u.push(new C.G_("Display settings",B.Cr,p.gcgx(),m,B.b_,o))
u.push(new C.G_("Sync",B.yU,p.gag8(),m,o,o))
t=p.d
if(t.y===D.kG||C.aPA(t,p.a.c)){t=p.d.y===D.kG?"Remove shared tree":"Delete tree"
u.push(new C.G_(t,B.e9,p.gbMn(),m,B.f7,o))}if(C.uc(p.d,p.a.c))u.push(new C.G_("Add member",B.wh,new C.dYB(p),m,B.bP,o))
v.push(new A.D(Z.ak1,A.B(u,B.m,o,B.e,B.i,0,o,o),o))
if(p.d.gape()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cz(new C.dYC(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?N.a0L:A6.O_,o,o,o,o,o)
v.push(A.at(A.hr(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dYD(p),o),o,o,o))}return A.c7(o,l,A.bl(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bZx(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fL.j(0.35),B.dq,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.X(B.yO,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a2,!0,m,A.aO(!1,m,!0,A.p(m,D.bY2,B.f,m,m,new A.o(B.c.j(0.16),m,A.J(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cM,!0,m,m,m,m,m,m,m,m,m,m,m,n.gag8(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ai)
r=n.d
q=A.d(r.b,m,1,B.a1,m,m,m,D.fil,m,m,m)
r=r.gape()
p=n.d.gape()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.x(A.a([q,B.bD,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.uc(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bV5,m,m,m,n.gcqh(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jT:B.nu
r=r?"Private":"Public"
r=A.E(n.avG(q,"Privacy",r,n.a.d.w?n.gcCu():m),1)
q=A.E(n.avG(B.yV,"Tree code",n.d.c,new C.dXL(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ae,A.B(A.a([r,B.ac,q,B.ac,A.E(n.avG(D.bM0,"Collaborators",p,n.gc39()),1)],o),B.m,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kG){s=B.c.j(0.15)
B.d.v(p,A.a([B.O,A.aG(!1,B.a2,!0,A.m(999),A.aO(!1,A.m(999),!0,new A.D(B.h5,A.B(A.a([A.X(B.pb,B.c,m,m,m,14),B.em,A.d("View only",m,m,m,m,m,m,B.aSs,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.bx(u,new A.an(B.a_,m,B.ab,B.t,A.a([t,new A.D(B.G2,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.o(m,m,m,w,v,D.c1k,B.n),m,m,m,m,m,m,m,1/0)},
avG(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a2,!0,A.m(14),A.aO(!1,A.m(14),!0,new A.D(F.ala,A.x(A.a([A.X(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a1,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.v8,A.d(f,w,1,B.a1,w,w,w,G.Aa,w,w,w)],x.p),B.m,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bfk.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gan(r)&&s.c.length===0)return B.bJ
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bfn(s,t),new A.au(w,v))],x.p)
r=r.gdV(r)
B.d.v(u,r.dF(r,new C.dcG(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.dcH(this),A.T(r).k("N<1,v>")))
return new A.D(B.u4,new A.a7(w,v,new A.an(B.a_,t,B.ab,B.f,u,t),t),t)}}
C.Km.prototype={}
C.G3.prototype={}
C.bfm.prototype={
gbji(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aJB.prototype={}
C.bfn.prototype={
bO1(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.I()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bE
d.bo(new A.t(n,w),new A.t(m,w),v)
u=(n+m)/2
t=new A.aF(q.r,B.ag,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.aX(u,q))
s=w-1.1
r=w-8.8
t.D(new A.kX(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.kX(u+4.95,r,u+9.9,s,u,q))
t.D(new A.bs())
q=A.I()
q.r=B.c.gp(0)
d.ad(new A.t(u,w),9,q)
q=A.I()
q.r=B.bA.gp(0)
d.aG(t,q)},
bO_(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aY(a0,new C.dd0())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b3(a0,new C.dd1(f))
t=new A.N(a0,new C.dd2(f),A.T(a0).k("N<1,K>")).c0(0,new C.dd3()).cI(0,1/0,B.vw)
w=f.a
d.bo(f,new A.t(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.M)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.G()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.mN(m)
i=Math.min(10,l/2)
l=$.S()
h=A.a([],q)
g=new A.aF(l.r,B.ag,null,null,h)
h.push(new A.aX(w,v-i))
l=j*i
h.push(new A.c4(w,v,w+l,v))
h.push(new A.aq(n-l,v))
h.push(new A.c4(n,v,n,v+i))
h.push(new A.aq(n,o.b))
k=e.G()
n=g.gbw().a.snapshot()
r.drawPath((g.e=new A.cl(n)).a,k)
k.delete()}},
a3(d,e){var w,v,u,t,s,r,q,p,o
$.S()
w=A.I()
w.r=B.bP.j(0.75).gp(0)
w.c=2.2
w.b=B.aa
w.d=B.bE
w.e=B.dT
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.M)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bO_(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.G()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.M)(v),++s){q=v[s]
if(q.c)this.bO1(d,w,q.a,q.b)}},
aw(d){return d.b!==this.b}}
C.bj3.prototype={
gc93(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aAU
switch(w.c.a){case 0:return D.cUK
case 1:return D.d5E
case 2:return D.dnb}},
gc96(){var w=this.c,v=C.hqC(w.w),u=C.hqC(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.J,q=t.gc93(),p=t.c,o=M.bDb(p.f),n=t.gc96(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gak(q).j(0.35),B.cH,10)],m),k=r?B.av:B.c,j=A.J(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tp(B.A,s,B.cg,B.bV,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gak(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gak(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a5,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hT(w,B.ap),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.ay,B.aE,B.x,q,s,s),B.a6),s,56,s,s,B.Gi,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.J(r?B.av:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fsM,s,s,s),B.f,s,s,new A.o(B.cc,s,w,j,s,s,B.n),s,s,s,s,D.bDt,s,s,s),s,s,s,-6,-4,s))}k=r?B.cp:B.c
j=A.m(8)
w=A.J(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dB,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cp,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bm,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aB(s,new A.a7(84,112,A.x(A.a([new A.an(B.a_,s,B.ab,B.f,l,s),B.au,A.p(s,A.x(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.b2L,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bDE,s,s,s)],v),B.m,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bep.prototype={
a3(d,e){var w,v,u,t,s,r,q
$.S()
w=A.I()
v=this.b
u=v?B.c:D.bft
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.G()
t.drawCircle(r,s,1,q)
q.delete()}},
aw(d){return d.b!==this.b}}
C.bwN.prototype={
B(d){var w=this,v=null,u=new C.ff2(w),t=w.c,s=t?B.cp:B.c,r=A.m(12),q=u.$3(B.hL,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bz:B.fb,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yS,"Zoom out",w.e)
return A.aG(!1,B.a2,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bz:B.fb,v,v,v,1,v,v,v,v,v,22),u.$3(B.ant,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dm,v,v,v,B.ai)}}
C.bmg.prototype={
B(d){var w=this,v=null,u=B.bP.j(0.15),t=A.J(B.bP,B.r,2),s=w.e,r=x.p
t=A.aB(v,A.p(v,A.x(A.a([A.X(s?N.a0L:A6.O_,B.bP,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.foY,v,v,v)],r),B.m,v,B.b8,B.i,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fmN,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eQm(w),A.T(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a7(84,v,A.x(u,B.m,v,B.e,B.i,0,B.p),v)}}
C.a_j.prototype={
T(){return new C.aCr()},
bu(){return this.Q.$0()},
ge1(){return this.w}}
C.aCr.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a2()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aP()
r.d=new A.as(new A.bb(t,B.b3,B.aO),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.as(new A.bb(t,B.b3,B.aO),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.as(new A.bb(t,B.b3,B.aO),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.as(new A.bb(t,B.b3,B.aO),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.as(new A.bb(t,B.b3,B.aO),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.as(new A.bb(t,B.b3,B.aO),s)
t=u?q:v.c
r.y=t==null?D.ys:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i8b(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.S$=$.aw()
u.P$=0
u=v.e
u===$&&A.c()
u.S$=w
u.P$=0
u=v.f
u===$&&A.c()
u.S$=w
u.P$=0
u=v.r
u===$&&A.c()
u.S$=w
u.P$=0
u=v.w
u===$&&A.c()
u.S$=w
u.P$=0
u=v.x
u===$&&A.c()
u.S$=w
u.P$=0
v.a1()},
PW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hfI(p.y,p.w)
w=3
return A.b(A.lq(t.a.w,B.IP),$async$PW)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b_P(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$PW)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hKt(p.y,p.w)
t.a.bu()
case 5:w=7
return A.b(Au.GX(78,800),$async$PW)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dsP(t,q))
case 1:return A.h(u,v)}})
return A.i($async$PW,v)},
c95(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hU(B.o.u(1000*Date.now()),w,D.ys,null,null,null,"","","","","",1,!1,0)
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
s=v.aEy(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a4(k,!1).O(s)},
aa2(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aa2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ci(null,null,!0,null,new C.dsO(r),s,null,!0,!0,x.y),$async$aa2)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a4(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aa2,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.J,i=new C.tZ(j),h=l.a.e,g=A.T(h).k("Z<1>"),f=A.C(new A.Z(h,new C.dsY(l),g),g.k("L.E"))
h=j?B.e3:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bBV,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hc(A.aO(!1,k,!0,new A.D(B.m4,A.X(B.e9,B.oZ,k,k,k,17),k),B.cM,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbJ0(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jJ:B.ja
t=M.bDb(l.as)
if(l.as==null)s=A.X(B.p3,j?B.bs:B.bm,k,k,k,40)
else s=k
s=A.at(A.aB(k,new A.an(B.a_,k,B.ab,B.t,A.a([A.h7(u,t,s,k,42),A.ao(0,A.h7(B.bP,k,D.bOD,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc92(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aCt(t,"Full name",B.mJ,1,1,i,B.mj)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.W,new C.bj1(i,u,new C.dsZ(l),k)],v),B.m,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bvm],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dt_(),A.T(o).k("N<1,eI<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bvo],q)
B.d.v(q,new A.N(f,new C.dt1(),A.T(f).k("N<1,eI<n?>>")))
o=A.x(A.a([t,B.am,new C.adn(i,r,"Who is their parent?",p,new C.dt2(l),k,o),B.aA,n,B.am,new C.adn(i,m,"Who is their spouse / partner?",q,new C.dt3(l),k,o)],v),B.ak,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aCt(q,"Birth date",D.amA,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aCt(m,"Birth place",B.a1_,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aCt(n,"Date of death (if deceased)",D.aoJ,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aCt(p,"Occupation",B.a2a,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ab,B.t,w,k),B.aA,s,B.bv,new C.ado(i,"Identity",u,k),B.ae,new C.ado(i,"Family links",o,k),B.ae,new C.ado(i,"Life details",A.x(A.a([q,B.W,m,B.W,n,B.W,p,B.W,C.aCt(r,"Notes",B.l9,5,3,i,k)],v),B.m,k,B.e,B.i,0,B.p),k),B.ae,new C.aCs(i,"Child order",l.cgM(l.at),new C.dt4(l),new C.dt5(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h59(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dt6(l):k
B.d.v(r,A.a([B.W,new C.aCs(i,"Visible in tree",u,w,new C.dt7(l),k)],v))}r.push(B.W)
w=j?B.jJ:B.ja
u=A.m(14)
t=A.J(j?B.e8:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iI(k,B.bP,k,B.af,k,new C.dt8(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,N.ajF,k,k,k))
r.push(B.bv)
w=j?B.aP:B.av
j=j?B.e8:B.bO
r.push(A.B(A.a([A.E(A.dI(B.nJ,new C.dt0(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.ck,k,new A.b7(A.m(14),B.a0),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.E(A.bH(D.f0f,k,l.gc94(),A.bo(B.aW,k,k,0,B.c,k,B.ck,k,new A.b7(A.m(14),B.a0),k,k,k)),2)],v),B.m,k,B.e,B.i,0,k,k))
r.push(B.au)
return A.en(B.fu,k,B.af,h,new A.a7(420,k,A.ce(A.x(r,B.ak,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.aku,k,B.ajT,new A.b7(g,B.a0),k,k)},
cgM(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.ado.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jJ:B.ja,s=A.m(16)
return A.x(A.a([new A.D(D.akV,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.J(v?B.e8:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bf,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bj2.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e3:B.c,r=A.m(12),q=A.J((t?B.e8:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.Y,!1,u,!0,B.t,u,A.aN(),v.d,u,u,u,u,u,2,A.br(u,B.eF,u,B.vS,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bs:B.bm,u,u,u,u,u,u,u,u,u,u,u,B.cy,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bP,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a3,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.adn.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e3:B.c,s=A.m(12),r=A.J((u?B.e8:B.bO).j(0.85),B.r,1),q=A.X(B.rt,u?B.bs:B.bm,v,v,v,v),p=A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e3:B.c
return A.p(v,new A.DS(A.SY(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bm,v,v,v,v,v,v,v,v,v,v,v,B.cy,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.l3,v,v,v)}}
C.bj1.prototype={
B(d){var w=new C.dt9(this)
return A.B(A.a([w.$3(D.w0,"Male",B.OC),B.ac,w.$3(D.oe,"Female",B.Or),B.ac,w.$3(D.ys,"Other",B.nt)],x.p),B.m,null,B.e,B.i,0,null,null)}}
C.aCs.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jJ:B.ja,r=A.m(14),q=A.J(t?B.e8:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bm,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aID(u,B.yS,w.f,v),B.bo,new C.aID(u,B.hL,w.r,v)],o),B.m,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eA,v,v,v)}}
C.aID.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bP.j(0.12)
else w=s.c.a?B.e3:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bP
else t=(s.c.a?B.bs:B.bm).j(0.4)
return A.aG(!1,B.a2,!0,v,A.aO(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.adp.prototype={
bS2(d){switch(d.a){case 0:return B.bP
case 1:return B.bA
case 2:return B.cX}},
bS3(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aXY(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Ai(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e3:B.c
u=A.m(12)
t=A.J((w?B.e8:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bP,p,p,p,18),B.at],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bm,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,14,p,p,B.P,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.p(p,A.B(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.ct,B.ya,p,p,1/0)},
aeA(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jJ:B.ja,s=A.m(16),r=A.J(v?B.e8:B.bO,B.r,1)
return A.x(A.a([new A.D(D.akV,u,w),A.p(w,A.x(e,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hvx(r,q),o=q.c,n=t.bS2(o),m=M.bDb(q.f),l=t.e.a,k=l?B.e3:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kG?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bs:B.bm,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.J(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.I,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.h7(u,m,m==null?A.X(B.p3,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eB,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.J(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.d(t.bS3(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mG,s,s,s),s,s,s)
u=x.p
i=A.a([t.Ai("Full name",i,B.mJ)],u)
if(p>0)i.push(t.Ai("Child order","#"+p,B.Ox))
r=A.a([h,B.au,r,B.aN,l,B.W,v,B.bv,t.aeA("Identity",i),B.ae,t.aeA("Life details",A.a([t.Ai("Birth date",q.w,D.amA),t.Ai("Birth place",q.x,B.a1_),t.Ai("Date of death",q.y,D.aoJ),t.Ai("Occupation",q.z,B.a2a)],u)),B.ae,t.aeA("Family links",A.a([t.Ai("1. Parent",t.aXY(q.d),B.Gw),t.Ai("2. Spouse",t.aXY(q.e),B.GN)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ae,t.aeA("Notes",A.a([t.Ai("Notes",q,B.l9)],u))],u))
r.push(B.bv)
r.push(A.bH(B.Ke,s,new C.dtj(d),A.bo(B.aW,s,s,s,s,s,B.ck,s,new A.b7(A.m(14),B.a0),s,s,s)))
return A.eS(s,k,new A.cU(B.lU,A.ce(A.x(r,B.ak,s,B.e,B.Q,0,B.p),B.t,s,B.y,s,B.vW,s,s,B.ah),s),s,s,s,B.G5,B.d8,s,new A.b7(j,B.a0),s)}}
C.G_.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bs:B.bm
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.vZ,A.hc(A.aG(!1,B.a2,!0,A.m(8),A.aO(!1,A.m(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u),u)}}
C.apZ.prototype={
eZ(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a7().ae())
w=u.c
v=A.T(w).k("N<1,a8<n,@>>")
w=A.C(new A.N(w,new C.ccp(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jg(w,new C.ccq(),t,x.fO))
return s}}
C.aq_.prototype={
T(){return new C.aE_(A.a([],x.bF))},
gcZ(){return this.c}}
C.aE_.prototype={
Z(){this.a2()
this.JO()},
JO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$JO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cct(t.a.c),$async$JO)
case 3:r=e
w=4
return A.b(C.AW(t.a.c),$async$JO)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.r4(q,new C.dYM(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dYN(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$JO,v)},
yy(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
Ky(d,e){return this.cFW(d,e)},
cFW(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Ky=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dYR(q,e))
t=3
w=6
return A.b(d.$0(),$async$Ky)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dYS(q))
$.eW.ms()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ky,v)},
XS(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pf(r,s.c,s.e),$async$XS)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Ky(new C.dYJ(t),"Preparing download\u2026"),$async$XS)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XS,v)},
XW(d){return this.bPZ(d)},
bPZ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pf(r,s.c,s.e),$async$XW)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Ky(new C.dYK(t,d),"Preparing file\u2026"),$async$XW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XW,v)},
agv(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$agv=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xq.ca().Mo(B.Ru,B.u8,!0),$async$agv)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gan(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jw(o,0,null)
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
case 6:u=A.GW()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agv,v)},
Yy(d){return this.c_s(d)},
c_s(d){var w=0,v=A.j(x.H),u=this
var $async$Yy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Ky(new C.dYL(u,d),"Restoring family trees\u2026"),$async$Yy)
case 2:return A.h(null,v)}})
return A.i($async$Yy,v)},
Yx(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Yx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.agv(),$async$Yx)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Yy(s),$async$Yx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yx,v)},
a2p(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pf(r,s.c,s.e),$async$a2p)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Ky(new C.dYQ(t),"Creating QR code\u2026"),$async$a2p)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2p,v)},
a20(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a20=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.D9()){t.yy("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a4(s,!1).cc(A.dX(new C.dYO(),!0,null,x.N)),$async$a20)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Yy(r),$async$a20)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a20,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.J,n=o?B.B7:B.iu,m=o?D.ai7:B.aP,l=o?B.aJ:B.bO,k=o?B.aP:B.av,j=new C.dd4(n,m,l,k,o?B.bM:B.bm)
l=A.aH(p,p,p,p,A.X(B.eJ,k,p,p,p,20),p,p,p,new C.dYU(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eH(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.dcD(!0,B.jC,B.aQ,B.aQ,q.r?p:q.gcwJ(),j,s,"Show restore QR"),1),B.at],u))}s=q.e
r=q.r?p:q.gcsS()
t.push(A.E(C.dcD(!s,B.jf,B.b5,B.bw,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.dcD(!1,B.hM,B.aW,B.bP,q.r?p:q.gbPS(),j,"Photos & books included","Download all trees"),1),B.at],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dcD(!1,R.yX,B.aC,B.aU,q.r?p:q.gc_p(),j,s,"Upload backup file"),1))
l=A.a([new C.bfl(v,l,p),B.kQ,new C.acF(j,"QR restore",p),B.W,t,B.d4,new C.acF(j,"Backup files",p),B.W,A.B(r,B.m,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kQ,new C.acF(j,"One tree",p),B.W],u)
B.d.v(v,J.b6(q.d,new C.dYV(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cr(l,p,B.a_t,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.J(B.aW.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dq,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bl(!0,A.p(p,A.B(A.a([N.aQU,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.BO,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c7(w,n,new A.an(B.a_,p,B.ab,B.t,l,p),p,!1,!1,p,p)}}
C.dd4.prototype={}
C.bfl.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aW.j(0.32),B.ko,28)],x.V)
t=A.ao(p,A.X(B.ur,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.a_,p,B.ab,B.t,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bXy,B.f,p,p,new A.o(s,p,A.J(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oB,A.E(A.x(A.a([D.fxU,B.O,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c4y,B.n),p,p,p,p,p,p,p,p)}}
C.acF.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ac,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)}}
C.bfj.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aQ.j(0.4):m.c
k=A.J(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aQ.j(0.1),B.cH,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.J(t.j(0.35),B.r,1)
return A.aG(!1,B.a2,!0,q,A.aO(!1,o,!0,A.eJ(A.d9(new A.D(E.a_5,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rq,q,q,q),B.ae,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bD,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cy,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ai)}}
C.bfo.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.J(s.c,B.r,1),q=B.aW.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aG(!1,B.a2,!0,v,A.aO(!1,u,!0,A.eJ(new A.D(B.eR,A.B(A.a([A.p(v,D.bWM,B.f,v,v,new A.o(q,v,A.J(B.aW.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rq,v,v,v),B.bd,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hM,o,v,v,v,20)],n),B.m,v,B.e,B.i,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ai)}}
C.a_E.prototype={
T(){return new C.aDZ()},
gcZ(){return this.c}}
C.aDZ.prototype={
Z(){this.a2()
this.a9A()},
a9A(){var w=0,v=A.j(x.H),u=this,t
var $async$a9A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b2t(u.a.c,B.Dw),$async$a9A)
case 2:t=e
if(u.c!=null)u.m(new C.dYE(u,t))
return A.h(null,v)}})
return A.i($async$a9A,v)},
ahS(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ahS=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dYF(q))
t=4
p=A.hho(q.a.d,B.Dw)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.asb(n.e,m,l,B.Dw,p,n.f),$async$ahS)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dYG(q))
q.c.K(x.q).f.U(D.f9d)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.ea(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dYH(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahS,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.J,o=p?B.js:B.pZ,n=p?B.it:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eH(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fOa,q,q,q,1,q,!0)
w=A.m(24)
v=A.J(B.aW.j(0.35),B.r,1)
u=A.pX(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aW,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.O,u,B.bv,t,B.O,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.al,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b8,B.i,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.br,q,q,q,q,q,q,q,q,q,q,q,B.P,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcsA()
if(u)u=B.JI
else u=A.X(r.e===!0?B.hu:B.amz,q,q,q,q,q)
w=A.a([w,B.ae,v,B.ae,new A.a7(1/0,q,A.et(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ch,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aW,q,B.h_,q,q,q,new A.ay(B.aW.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hY,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aB:B.al,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.W)
w.push(new A.a7(1/0,q,A.bH(B.Aj,q,new C.dYI(d),A.bo(B.aW,q,q,q,q,B.h_,q,q,q,q,q,q)),q))
return A.c7(m,o,new A.D(B.a9,A.x(w,B.m,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a_F.prototype={
T(){return new C.bkt(A.zv(B.xZ,B.nP,B.uA))}}
C.bkt.prototype={
q(){this.d.q()
this.a1()},
B(d){var w=null
return A.c7(A.eH(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fG0,w,w,w,1,w,!0),B.w,A.zu(this.d,B.bV,new C.dYW(this,d)),w,!1,!1,w,w)}}
C.aZl.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.QZ,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lL.prototype={}
C.a6w.prototype={
T(){return new C.bka(null,null)}}
C.bka.prototype={
Z(){var w=this,v=null
w.a2()
w.d=A.bn(v,B.rj,v,1,v,w)
w.e=A.bn(v,B.q5,v,1,v,w)
w.a.toString
w.d.cM(0)
w.e.cM(0)},
bx(d){var w,v,u=this
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
this.bwv()},
B(d){var w,v,u=this,t=B.d.dK(D.a4Y,new C.dKB(u),new C.dKC())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cyZ(A.ca(new A.h5(A.a([w,v],x.dS)),new C.dKD(u,t),null),!0)}}
C.bk9.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b1o(d,e)
break
case"house":p.m6(d,e,D.daA)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdC()
$.S()
t=A.I()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ad(new A.t(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mb(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.B0(d,e,12)
p.ya(d,e,B.l_,5,14)
break
case"grocery":p.chv(d,e)
break
case"calculator":p.chc(d,e)
break
case"lumber":p.chD(d,e)
break
case"kitchen":p.chy(d,e)
break
case"landscape":p.m6(d,e,D.dba)
s=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.aX(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.c4(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.c4(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.aq(t,w))
s.D(new A.aq(0,w))
s.D(new A.bs())
w=A.I()
w.r=B.ei.j(0.85).gp(0)
d.aG(s,w)
p.B0(d,e,8)
p.ya(d,e,B.iw,4,18)
break
case"plumbing":p.chM(d,e)
break
case"electrical":p.m6(d,e,D.dmr)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.I()
u.r=B.c.j(q*0.12).gp(0)
d.aP(new A.a3(0,0,0+e.a,0+e.b),u)
p.mb(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mb(d,e,B.lX.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.B0(d,e,10)
break
case"store":p.chW(d,e)
break
case"paint_remodel":p.chH(d,e)
break
case"roofing":p.chO(d,e)
break
case"warehouse":p.ci2(d,e)
break
case"vehicles":p.ci0(d,e)
break
case"farm":p.chp(d,e)
break
case"restaurant":p.chN(d,e)
break
case"tools":p.chZ(d,e)
break
case"wallet":p.ci1(d,e)
break
case"concrete":p.chi(d,e)
break
case"blueprint":p.cha(d,e)
break
default:p.b1o(d,e)}},
m6(d,e,f){var w,v=new A.a3(0,0,0+e.a,0+e.b)
$.S()
w=A.I()
w.sam(new A.a9(B.ay,B.aE,B.x,f,null,null).aB(0,v))
d.aP(v,w)},
mb(d,e,f,g,h){var w,v,u,t,s,r,q=new A.t(e.a/2,e.b/2),p=e.gdC()/2-h
$.S()
w=A.I()
w.b=B.aa
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bX(q,p)
r=w.G()
v.drawArc.apply(v,[A.bF(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
ya(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdC()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.S()
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.G()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
B0(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.G()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b1o(d,e){var w,v=this
v.m6(d,e,D.dkO)
w=v.c
v.mb(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mb(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bNW(d,e,B.hT,w)
v.ya(d,e,B.c.j(0.7),6,8)},
bNW(d,e,f,g){var w,v,u,t,s,r,q,p
$.S()
w=A.I()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.G()
s.drawRect(A.bF(new A.a3(16,q,t,q+3)),p)
p.delete()}},
chv(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m6(d,e,D.cqb)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.ao(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.S()
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.r=D.d8N[B.o.F(s,4)].j(0.85).gp(0)
k=l.G()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.mb(d,e,B.c.j(0.35),w,16)
j.ya(d,e,B.iw,5,12)},
chc(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m6(d,e,D.cqj)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdC()
$.S()
q=A.I()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ad(new A.t(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fu(g,g,g,g,g,B.a3,B.bZ,g,B.dA,B.bW)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dcS[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saX(0,new A.eu(r,g,g,B.cQ,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.el()
p.a3(d,new A.t(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cql[o]
l=B.kx.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saX(0,new A.eu(m,g,g,B.cQ,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.el()
p.a3(d,new A.t(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ao(o,3)*0.38)+Math.sin(n)*6))}h.mb(d,e,B.c.j(0.35),w*1.5,14)
h.mb(d,e,B.eG.j(0.55),-v*3.141592653589793*2,8)
h.mb(d,e,B.xJ.j(0.4),r*2.8,22)
h.ya(d,e,B.pN,8,10)
h.B0(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.S()
r=new A.ap(B.R,B.N,B.U,B.V,B.S)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.G()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
chD(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,V.aya)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bt(new A.a3(20,q,u,q+10),B.hz)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=A.ar(B.fU,B.oT,(r+1)/2).gp(0)
n=o.G()
t.drawRRect(A.el(p),n)
n.delete()}m.mb(d,e,B.fU.j(0.35),w,15)
m.B0(d,e,8)},
chy(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m6(d,e,D.d9h)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.S()
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.G()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.mb(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
j.ya(d,e,B.pK,4,14)},
chM(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m6(d,e,D.cYI)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.S()
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.aa
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.G()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.ya(d,e,B.oY,6,12)
l.mb(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
chW(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m6(d,e,D.cDV)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bt(new A.a3(q,14,q+u,22),B.i8)
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=A.ar(B.fa,B.bL,(r+1)/2).gp(0)
o=p.G()
t.drawRRect(A.el(q),o)
o.delete()}n.mb(d,e,B.c.j(0.3),w,16)
n.B0(d,e,8)
n.ya(d,e,B.vB,5,13)},
chH(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.d3S)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bt(new A.a3(q,p,q+8,p+(18+r*22)),B.hA)
$.S()
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.r=[B.id,B.dt,B.bL,B.es][s].j(0.85).gp(0)
o=q.G()
t.drawRRect(A.el(p),o)
o.delete()}this.mb(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
chO(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.d1h)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.G()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.ya(d,e,B.cr,7,11)},
ci2(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.cGE)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bt(new A.a3(p,o,p+(t-r*8),o+16),B.hz)
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=A.ar(B.cr,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.G()
s.drawRRect(A.el(o),n)
n.delete()}this.mb(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
ci0(d,e){var w,v,u,t,s,r,q,p,o
this.m6(d,e,D.dqx)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bt(new A.a3(r,q,r+28,q+8),B.hz)
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.G()
t.drawRRect(A.el(q),o)
o.delete()}this.B0(d,e,6)},
chp(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.d7S)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.I()
s.r=B.lX.j(0.75).gp(0)
d.ad(new A.t(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=B.hc.j(0.85).gp(0)
o.c=3
n=o.G()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.mb(d,e,B.lX.j(0.35),w,14)},
chN(d,e){var w,v,u,t,s,r,q,p,o=this
o.m6(d,e,D.dap)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.bJ(new A.t(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.S()
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.r=B.c.j(0.22).gp(0)
p=q.G()
t.drawOval(A.bF(r),p)
p.delete()}o.ya(d,e,B.pK,5,16)
o.B0(d,e,7)},
chZ(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,D.dnX)
w=m.c
v=w*3.141592653589793
m.mb(d,e,B.oT.j(0.55),v*3,10)
m.mb(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=B.oT.j(0.8).gp(0)
n=o.G()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
ci1(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m6(d,e,D.drb)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bt(new A.a3(p,o,p+36,o+22),B.i8)
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=A.ar(B.iw,B.lX,q).gp(0)
n=p.G()
s.drawRRect(A.el(o),n)
n.delete()}m.B0(d,e,9)
m.mb(d,e,B.c.j(0.4),w*2.2,12)},
chi(d,e){var w,v,u,t,s,r,q,p,o,n
this.m6(d,e,D.dfI)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bX(new A.t(v,u),34)
$.S()
s=A.I()
s.b=B.aa
s.c=5
s.r=B.c.j(0.45).gp(0)
d.e3(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=B.bO.j(0.85).gp(0)
n=o.G()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cha(d,e){var w,v,u,t,s,r,q,p
this.m6(d,e,D.dbv)
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
u.r=B.dt.j(0.45).gp(0)
d.aP(new A.a3(0,p,0+v,p+6),u)
this.mb(d,e,B.l_.j(0.45),-t*3.141592653589793*2,11)},
aw(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.asV.prototype={
a_F(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_F=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aQt(),$async$a_F)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8K(s),$async$a_F)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_F,v)},
agw(d){return this.ckj(d)},
ckj(d){var w=0,v=A.j(x.H),u=this,t
var $async$agw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.igB(d),$async$agw)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$agw,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jJ:B.ja
w=x.p
v=A.a([C.aQS(!0,B.qV,1/0,B.qh,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c2(new A.bM(B.b4,t,t,new A.D(B.vP,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.P,t,t,!0,t,t,t,t,t,B.az8,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b4,B.b7,B.x,u,t,t),B.n),B.bg))}v.push(A.ao(8,A.B(A.a([A.E(A.dl(D.bQo,D.fu9,new C.ckO(this,d),A.bo(B.aW,t,t,t,B.c,t,B.jP,t,t,t,t,B.cd)),1),B.ac,A.E(A.et(D.bYP,D.fJ8,this.gcbh(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jP,t,t,D.b1i,t,t,t,B.cd)),1)],w),B.m,t,B.e,B.i,0,t,t),t,t,8,8,t,t))
return new A.fD(1.7777777777777777,A.aG(!1,B.a2,!0,B.qV,new A.an(B.a_,t,B.b1,B.t,v,t),B.ap,s,0,t,t,t,t,t,B.ai),t)}}
C.aM0.prototype={
aW(){this.b6()
this.b4()
this.dH()},
q(){var w=this,v=w.b5$
if(v!=null)v.a6(0,w.gdD())
w.b5$=null
w.a1()}}
C.aTS.prototype={}
C.aTR.prototype={}
C.aRQ.prototype={}
C.Zh.prototype={
T(){return new C.azc()}}
C.azc.prototype={
Z(){var w,v,u=this
u.a2()
u.a.toString
w=new A.bb("",B.b3,B.aO)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(w,v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a1()},
Ko(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.U(D.f9I)
return}t=u.c
t.toString
v=u.e
A.a4(t,!1).O(new C.aTS(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.J,l=m?B.e3:B.c,k=A.m(20),j=A.p(n,D.bYu,B.f,n,n,new A.o(B.aW.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bD,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bm,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.B(A.a([j,B.bd,i,A.aH(n,n,n,n,A.X(B.cz,m?B.bs:B.bm,n,n,n,n),n,n,n,new C.d4n(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bm,n,n,n,n,n,n,n,n,12,n,n,B.P,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bm,n,n,n,n,n,n,n,n,11,n,n,B.cy,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hhE(new C.d4o(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jJ:B.ja
r=A.m(12)
q=A.m(12)
p=m?B.e8:B.bO
t=A.aM(n,B.Y,!0,n,!0,B.t,n,A.aN(),u,n,n,n,n,n,2,A.br(n,new A.b5(4,r,B.dk),n,n,n,n,n,n,!0,new A.b5(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d4p(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a3,n,A_.JP,n,n,n,n)
u=m?B.aP:B.av
m=m?B.e8:B.bO
return A.eS(n,l,new A.cU(B.lU,A.ce(A.x(A.a([j,B.aN,i,B.au,w,B.O,v,B.aN,t,B.bv,A.B(A.a([A.E(A.dI(B.di,new C.d4q(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.ck,n,new A.b7(A.m(12),B.a0),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.at,A.E(A.bH(D.fJn,n,o.ga2L(),A.bo(B.aW,n,n,n,B.c,n,B.ck,n,new A.b7(A.m(12),B.a0),n,n,n)),1)],h),B.m,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.Q,0,B.p),B.t,n,B.y,n,B.BP,n,n,B.ah),n),n,n,n,A5.BQ,B.d8,n,new A.b7(k,B.a0),n)}}
C.Zg.prototype={
T(){return new C.azb()}}
C.azb.prototype={
Z(){this.a2()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.as(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a1()},
Ko(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.U(D.f7l)
return}v=this.c
v.toString
A.a4(v,!1).O(new C.aTR(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.J,o=p?B.e3:B.c,n=A.m(20),m=A.p(q,D.bUY,B.f,q,q,new A.o(B.bP.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bD,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bm,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.B(A.a([m,B.bd,l,A.aH(q,q,q,q,A.X(B.cz,p?B.bs:B.bm,q,q,q,q),q,q,q,new C.d4j(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.i,0,q,q)
l=B.aW.j(p?0.12:0.08)
w=A.m(12)
v=A.J(B.aW.j(0.25),B.r,1)
u=A.X(B.aml,B.aW.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.at,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.i,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jJ:B.ja
t=A.m(12)
s=A.m(12)
r=p?B.e8:B.bO
v=A.aM(q,B.Y,!0,q,!0,B.t,q,A.aN(),w,q,q,q,q,q,2,A.br(q,new A.b5(4,t,B.dk),q,q,q,q,q,q,!0,new A.b5(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d4k(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a3,q,B.kR,q,q,q,q)
w=p?B.aP:B.av
p=p?B.e8:B.bO
return A.eS(q,o,new A.cU(B.lU,A.ce(A.x(A.a([m,B.aN,l,B.aA,v,B.bv,A.B(A.a([A.E(A.dI(B.di,new C.d4l(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.ck,q,new A.b7(A.m(12),B.a0),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.at,A.E(A.bH(D.fQq,q,this.ga2L(),A.bo(B.bP,q,q,q,B.c,q,B.ck,q,new A.b7(A.m(12),B.a0),q,q,q)),1)],k),B.m,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.Q,0,B.p),B.t,q,B.y,q,B.BP,q,q,B.ah),q),q,q,q,A5.BQ,B.d8,q,new A.b7(n,B.a0),q)}}
C.YO.prototype={
T(){return new C.axQ()}}
C.axQ.prototype={
Z(){var w,v=this
v.a2()
w=$.aw()
v.d!==$&&A.aP()
v.d=new A.as(B.as,w)
v.e!==$&&A.aP()
v.e=new A.as(new A.bb("1",B.b3,B.aO),w)
v.f!==$&&A.aP()
v.f=new A.as(B.as,w)
v.r!==$&&A.aP()
v.r=new A.as(B.as,w)},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.S$=$.aw()
u.P$=0
u=v.e
u===$&&A.c()
u.S$=w
u.P$=0
u=v.f
u===$&&A.c()
u.S$=w
u.P$=0
u=v.r
u===$&&A.c()
u.S$=w
u.P$=0
v.a1()},
gJJ(){var w,v=this.e
v===$&&A.c()
w=A.cY(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gajF(){var w=this.f
w===$&&A.c()
w=A.cY(B.a.i(w.a.a))
return w==null?0:w},
gb4b(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aOY(d){var w,v=B.k.E(this.gJJ()+d,0.25,999999),u=B.k.j3(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ac(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.saX(0,u)
this.m(new C.cCy())},
ayj(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aW,w,w,w,20):w,u=d.a,t=u?B.jJ:B.ja,s=A.m(14),r=A.m(14)
u=u?B.e8:B.bO
return A.br(w,new A.b5(4,s,B.dk),w,B.bB,w,w,w,w,!0,new A.b5(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b5(4,A.m(14),B.acm),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cbi(d,e,f){return this.ayj(d,e,f,null)},
Ko(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gajF()<=0){s.c.K(x.q).f.U(D.fbA)
return}r=s.c
r.toString
v=s.gJJ()
u=s.gajF()
t=s.gb4b()
A.a4(r,!1).O(new C.aRQ(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.J,m=new C.tZ(n),l=n?B.e3:B.c,k=A.m(24),j=x.O,i=A.a([B.aW.j(0.22),B.bP.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bOi,B.f,o,o,new A.o(o,o,A.J(B.aW.j(0.35),B.r,1),h,o,new A.a9(B.a5,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bD,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.cy,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.B(A.a([i,B.bd,h,A.aH(o,o,o,o,A.X(B.cz,n?B.bs:B.bm,o,o,o,o),o,o,o,new C.cCE(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Y,!0,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.ayj(m,"Item name (optional)","Lumber, paint, labor\u2026",B.OB),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a3,o,A_.JP,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jJ:B.ja
t=A.m(14)
s=A.J(n?B.e8:B.bO,B.r,1)
r=A.aH(o,o,o,o,A.X(B.yS,n?B.aP:B.av,o,o,o,20),o,o,o,new C.cCF(p),o,o,o,o,o,B.cd)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),q,o,o,o,o,o,2,D.c_n,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cCG(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.ao,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hL,n?B.aP:B.av,o,o,o,20),o,o,o,new C.cCH(p),o,o,o,o,o,B.cd)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.at,A.E(A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),t,o,o,o,o,o,2,p.ayj(m,"Amount","0.00",B.hZ),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cCI(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a3,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.d4m,new C.cCJ(p,m),t),t.k("ak.E"))
i=A.a([i,B.bv,v,B.aA,h,B.O,s,B.ae,A.bW(B.bC,u,B.bq,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.W,A.aM(o,B.Y,!1,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.cbi(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cCK(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a3,o,B.kR,o,o,o,o)],w))}i.push(B.aN)
h=B.aW.j(n?0.18:0.1)
j=A.a([h,B.bP.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.J(B.aW.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,11,o,o,B.P,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJJ()===B.k.j3(p.gJJ())?B.k.N(p.gJJ()):p.gJJ()
s=p.gb4b()
r=A.AY(p.gajF())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.au,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bDZ(p.gJJ()*p.gajF(),B.b_,!1,B.u)],w),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a5,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jd,o,o,o))
i.push(B.bv)
j=A.m(14)
h=n?B.e8:B.bO
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.ck,o,new A.b7(j,B.a0),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dI(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cCL(d),h),1),B.at,A.E(A.dl(D.apN,D.fMk,p.ga2L(),A.bo(B.aW,o,o,0,B.c,o,B.ck,o,new A.b7(A.m(14),B.a0),o,o,o)),2)],w),B.m,o,B.e,B.i,0,o,o))
return A.eS(o,l,new A.cU(A4.acM,A.ce(A.x(i,B.ak,o,B.e,B.Q,0,B.p),B.t,o,B.y,o,Ag.rp,o,o,B.ah),o),o,o,o,B.Np,B.d8,o,new A.b7(k,B.a0),o)}}
C.a1r.prototype={
T(){return new C.bwD()}}
C.bwD.prototype={
Z(){var w,v,u=this
u.a2()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,B.b3,B.aO),v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a1()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.J,q=r?B.e3:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jJ:B.ja
v=A.aM(s,B.Y,!0,s,!0,B.t,s,A.aN(),w,s,s,s,s,s,2,A.br(s,new A.b5(4,A.m(12),B.dk),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fem(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a3,s,B.ao,s,s,s,s)
u=A.E(A.dI(B.di,new C.fen(d),s),1)
r=A.bo(B.bP,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eS(s,q,new A.D(B.BP,A.x(A.a([o,B.aA,v,B.aN,A.B(A.a([u,B.at,A.E(A.bH(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.feo(t,d),r),1)],w),B.m,s,B.e,B.i,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d8,s,new A.b7(p,B.a0),s)}}
C.abK.prototype={
a5(){return"WorksheetFrameStyle."+this.b}}
C.FP.prototype={
T(){return new C.bwB(null,null)}}
C.bwB.prototype={
Z(){var w,v=this
v.a2()
w=A.bn(null,D.bvW,null,1,null,v)
w.cM(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.byJ()},
gbAe(){switch(this.a.r.a){case 1:return A.a([B.aW,B.bP,B.b_],x.O)
case 2:return A.a([B.bt,B.aW,B.b_],x.O)
case 3:return A.a([B.aQ,B.cc,B.kb],x.O)
case 4:return A.a([B.iQ,B.bP,B.ff],x.O)
case 0:return A.a([B.aW,B.bP,B.b_],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ex(A.ca(v,new C.fek(this,new C.tZ(w.ax.a===B.J)),null),null)}}
C.axJ.prototype={
T(){return new C.bwC(null,null)}}
C.bwC.prototype={
Z(){var w,v=this
v.a2()
w=A.bn(null,B.nj,null,1,null,v)
w.cM(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.byK()},
B(d){var w=this.d
w===$&&A.c()
return A.ca(w,new C.fel(this),null)}}
C.bwA.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bt(new A.a3(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aQ(w,w))
u=new A.aF($.S().r,B.ag,null,null,A.a([],x.v))
u.D(new A.iN(v))
w=A.I()
w.b=B.aa
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.az(v,w)
w=A.I()
w.b=B.aa
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aG(u,w)
w=A.xo(u)
t=A.a([],x.U)
w=new A.tk(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.ju(y.B));--r
q=new A.Bo(w,r)
w.ik()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aSp(d,q,r,o,0,0.2,4.2,0.92)
p.aSp(d,q,r,s,0.52,0.11,3.2,0.58)}},
aSp(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hDB(e.a.a,e,t,t+f*i,!0),r=A.bCk(s.gbw().a.getBounds())
$.S()
w=A.I()
w.b=B.aa
w.c=j
w.d=B.bE
w.f=!0
v=this.f
u=k*this.e
w.sam(new A.a9(B.a5,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.HO,null).aB(0,r))
d.aG(s,w)},
aw(d){return d.b!==this.b||d.d!==this.d}}
C.aO1.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.aO2.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.tZ.prototype={}
C.asU.prototype={
T(){return new C.aFr()},
ge1(){return this.c}}
C.aFr.prototype={
Z(){var w=this
w.a2()
w.d=w.a.d
w.ahl()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Ly(w,v)
this.a1()},
ahl(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ahl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bCs(t.c,t.d.a),$async$ahl)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eNu(u,s))
return A.h(null,v)}})
return A.i($async$ahl,v)},
Ql(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ql=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eNl(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Ly(t,s),$async$Ql)
case 2:if(u.c!=null)u.m(new C.eNm(u))
return A.h(null,v)}})
return A.i($async$Ql,v)},
QS(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.ci(null,null,!0,null,new C.eNs(t,new C.tZ(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$QS)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8K(q),$async$QS)
case 6:case 5:t.m(new C.eNt(t,r))
w=7
return A.b(t.Ql(),$async$QS)
case 7:case 1:return A.h(u,v)}})
return A.i($async$QS,v)},
W4(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$W4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.igm(r),$async$W4)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eNg(t,new C.r9(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Ql(),$async$W4)
case 4:case 1:return A.h(u,v)}})
return A.i($async$W4,v)},
cgm(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hvt(t,new C.eNk(u),w,v)},
abm(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bK(new A.ay(v,2.5,B.r,-1),B.a0,B.a0,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b14,w,w,B.n),w,22,w,w,w,w,w,22)},
aaq(d){return this.bMa(d)},
bMa(d){var w=0,v=A.j(x.H),u=this
var $async$aaq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eNj(u,d))
w=2
return A.b(u.Ql(),$async$aaq)
case 2:return A.h(null,v)}})
return A.i($async$aaq,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.J,e=f?B.c0:B.iu,d=A.m(8),a0=A.X(Y.a0I,f?B.bs:B.bm,g,g,g,16),a1=x.p
a0=A.aO(!1,d,!0,new A.D(B.Gc,A.B(A.a([a0,B.bo,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bm,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eNv(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a_,g,B.b1,B.t,A.a([A.bx(A.m(22),C.aQS(!0,A.m(22),1/0,B.qh,g,d,1/0),B.ap),A.ao(10,A.dl(D.bSX,D.fOJ,h.gb28(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.hg,g,new A.b7(A.m(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aW.j(f?0.5:0.38),B.f_,22),new A.ac(-4,B.G,B.bP.j(0.2),B.I,32)],w)
u=A.m(17)
t=A.J(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.I,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bx(s,new A.an(B.a_,g,B.b1,B.t,A.a([C.aQS(!0,A.m(16),1/0,B.Oa,g,r.c,1/0),A.c2(g,new A.o(g,g,g,g,g,new A.a9(B.b4,B.b7,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bg),A.ao(g,h.abm(!0),g,g,8,g,8,g),A.ao(g,A.czJ(h.abm(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.czJ(h.abm(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.czJ(h.abm(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dl(D.bOU,D.fI4,h.gb28(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.hg,g,new A.b7(A.m(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c14,B.n),g,g,g,g,B.m4,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bbN,B.nY,B.h3],u):A.a([B.b_,B.aW,B.bP],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aW.j(f?0.45:0.35),B.f_,24)],t)
r=A.m(22)
p=A.ao(g,A.X(B.jR,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.J(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h4,g,g,g)],a1),B.m,g,B.e,B.i,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bDZ(h.d.gxa(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.O,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cy,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.J(B.he.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aQ.j(0.28),B.cH,14)],t)
j=B.aQ.j(0.22)
i=A.m(10)
u=A.p(g,A.bx(r,new A.an(B.a_,g,B.ab,B.t,A.a([p,new A.D(D.bAG,A.B(A.a([o,B.at,A.aG(!1,B.a2,!0,g,A.aO(!1,n,!0,A.eJ(new A.D(U.vU,A.x(A.a([A.p(g,D.apn,B.f,g,g,new A.o(j,g,A.J(B.aQ.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cm,g,g,g),B.fQ,D.fwY],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcgl(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ai)],a1),B.m,g,B.e,B.i,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.ay,B.aE,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fD(1.7777777777777777,d,g),B.aN,w,B.O,u,B.bv,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b0,A.dl(Ar.a2x,D.fuP,h.gbAH(),A.bo(B.aW,g,g,g,B.c,g,B.iB,g,new A.b7(A.m(12),B.a0),g,g,g))],a1),B.m,g,B.e,B.i,0,g,g),B.ae],a1)
w=h.d.d
if(w.length===0){w=f?B.e3:B.c
v=A.m(14)
u=A.J(f?B.e8:B.bO,B.r,1)
t=A.X(B.a12,f?B.bs:B.bm,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,g,g,g,B.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.W,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bm,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.i,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qd,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eNw(h,new C.tZ(f)),A.T(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.BE,A.at(A.mS(g,f?B.bs:B.bm,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c7(g,e,A.bl(!0,A.x(A.a([new A.D(B.BI,a0,g),A.E(A.ce(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yh,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bEm(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e3:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cH,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.b3Q,u,u,u,u,u,u,u,5),l=B.aW.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.i0:B.hi,B.b_,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bJ
else{k=x.p
t=A.a([A.d(t,u,2,B.a1,u,u,u,A.l(u,u,r?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcWk()
v=A.AY(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bs:B.bm,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b8,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aW.j(0.14),B.bP.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bDZ(d.c*d.d,B.b_,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a5,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.hg,u,u,u)
w=x.p
return A.p(u,A.bx(n,new A.Eh(A.B(A.a([m,A.E(new A.D(B.ajy,A.B(A.a([l,B.bd,t,B.ac,k,A.aH(u,u,u,u,A.X(B.cz,(r?B.bs:B.bm).j(0.75),u,u,u,20),u,u,u,new C.eNh(this,d),u,u,u,u,u,B.cd)],w),B.m,u,B.e,B.i,0,u,u),u),1)],w),B.ak,u,B.e,B.i,0,u,u),u),B.ap),B.f,u,D.b2H,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d3,u,u,u,u)}}
C.adK.prototype={
EB(d){return this.bNy(d)},
bNy(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pf(d,o,!1),$async$EB)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
w=4
return A.b(A.bP(Af.BC,null,x.H),$async$EB)
case 4:s=t.d
w=5
return A.b(C.fMI(!0,o,s),$async$EB)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.GK(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EB)
case 6:p=f
w=7
return A.b(A.pe(o,!1),$async$EB)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EB,v)},
a_H(d){return this.cwK(d)},
cwK(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_H=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pf(d,s,!1),$async$a_H)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
A.hE(d,new C.asO(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pe(s,!1),$async$a_H)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_H,v)},
Qm(d){return this.csN(d)},
csN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(A.hE(d,D.aIG,!0,"NgmyWorksheetProjectScan",x.N),$async$Qm)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bE_(s),$async$Qm)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.U(D.faI)
w=1
break}q=C.h7u(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dU(p,x.H),$async$Qm)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Qm,v)},
a_I(d){return this.cEO(d)},
cEO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_I=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(C.bDw(),$async$a_I)
case 3:s=f
if(s==null){w=1
break}r=C.h7u(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dU(q,x.H),$async$a_I)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_I,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.J,t=new C.tZ(u),s=w.d.d.length,r=u?B.e3:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.ko,36)],x.V),o=x.p
return A.bl(!0,new A.D(B.vT,A.p(v,A.x(A.a([w.cvj(d,t,s),new A.D(D.bA4,A.x(A.a([w.b57(t,"QR restore"),B.W,A.B(A.a([w.b06(t,!0,B.jC,B.aQ,B.aQ,new C.eNy(w,d),"Show to scan","QR code"),B.at,w.ayk(t,B.jf,B.b5,B.bw,new C.eNz(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.i,0,v,v),B.d4,w.b57(t,"Backup files"),B.W,A.B(A.a([w.ayk(t,B.hM,B.aW,B.bP,new C.eNA(w,d),"Full copy","Backup file"),B.at,w.ayk(t,R.yX,B.aC,B.aU,new C.eNB(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cvj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f5,B.cO,B.fL],k):A.a([B.b_,B.aW,B.bP],k)
w=A.ao(l,A.X(B.ur,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kE,l,l,l,36),l,l,l)
u=A.m(14)
t=A.J(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cH,12)],x.V)
r=this.d
s=A.p(l,C.aQS(!0,A.m(13),64,D.bKb,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a1,l,l,l,D.aTw,l,l,l)
r=C.bDZ(r.gxa(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.J(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a_,l,B.ab,B.t,A.a([w,new A.D(D.bAs,A.x(A.a([v,A.B(A.a([s,B.er,A.E(A.x(A.a([u,B.au,t,B.O,A.B(A.a([r,B.ac,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fO,l,l,l)],m),B.m,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aH(l,l,l,l,A.X(B.cz,B.c.j(0.85),l,l,l,l),l,l,l,new C.eNx(d),l,l,l,A.nI(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aQJ,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.m,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.ay,B.aE,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b57(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ac,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bs:B.bm,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
b06(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.ai7:B.aP
if(e)w=B.aQ.j(o?0.45:0.35)
else{w=o?B.e8:B.bO
w=w.j(o?0.8:1)}w=A.J(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aQ.j(0.12),B.cH,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.J(h.j(0.35),B.r,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rq,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a2,!0,r,A.aO(!1,q,!0,A.eJ(new A.D(E.a_5,A.x(A.a([t,B.ae,u,B.bD,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bs:B.bm,r,r,r,r,r,r,r,r,11,r,r,B.cy,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ai),1)},
ayk(d,e,f,g,h,i,j){return this.b06(d,!1,e,f,g,h,i,j)}}
C.asO.prototype={
T(){return new C.blM()}}
C.blM.prototype={
Z(){this.a2()
this.afg()},
afg(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$afg=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bE0(p.c,p.d),$async$afg)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eNb(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eNc(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afg,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.J,f=g?B.B7:B.iu,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eJ,g?B.ad:B.al,h,h,h,18),h,h,h,new C.eNd(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.A4],u),B.m,h,B.e,B.i,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.f5,B.cO,B.fL],s):A.a([B.b_,B.aW,B.bP],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aW.j(g?0.4:0.3),B.f_,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dd,B.L,h,h)
p=C.bDZ(p.gxa(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ac,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fO,h,h,h)],u),B.m,h,B.b8,B.i,0,h,h)],u),B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.ay,B.aE,B.x,s,h,h),B.n),h,h,h,h,E.a_s,h,h,1/0)
t=g?D.bmG:B.c
q=A.m(24)
p=A.J(w?B.aQ.j(0.4):B.aW.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dq,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.Us,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.ekD)
else{m=A.m(20)
l=A.J(B.aL,B.r,1)
o.push(A.p(h,A.pX(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aN)
n=w?B.aQ:B.aW
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.J((w?B.aQ:B.aW).j(0.35),B.r,1)
k=w?B.On:B.OQ
k=A.X(k,w?B.aQ:B.aW,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.at,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.al,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.i,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iB,h,h,h))
return A.c7(h,f,A.bl(!0,A.x(A.a([new A.D(Ac.NB,e,h),A.E(A.ce(A.x(A.a([s,B.aN,A.p(h,A.x(o,B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.u6,h,h,1/0)],u),B.m,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.akG,h,h,B.ah),1)],u),B.m,h,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.asT.prototype={
T(){return new C.aFq(A.zv(B.MR,B.nP,B.uA))}}
C.aFq.prototype={
q(){this.d.q()
this.a1()},
aMY(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iR(w,d)},
cca(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
s=C.iee(t)
if(s!=null){this.aMY(s)
return}r=C.hmc(t)
if(r!=null)q=A.cT(r,p,0)
else q=!1
if(q){this.aMY(B.a.i(B.a.b7(r,B.a.cu(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eH(A.a([A.aH(t,t,t,t,A.X(u.f?B.uh:A9.Ot,t,t,t,t,t),t,t,t,new C.eNf(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.B7,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fHZ,t,t,t,1,t,!0),q=A.zu(u.d,B.bV,u.gcc9()),p=A.m(28)
p=A.at(A.p(t,t,B.f,t,t,new A.o(t,t,A.J(B.aW,B.r,3),p,A.a([new A.ac(2,B.G,B.aW.j(0.35),B.I,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c7(r,B.w,new A.an(B.a_,t,B.b1,B.t,A.a([q,p,A.ao(32,A.p(t,D.fGL,B.f,t,t,new A.o(w,t,A.J(B.aW.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jd,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aKn.prototype={
a5(){return"_WorksheetTab."+this.b}}
C.Op.prototype={
T(){return new C.aFs(D.abE,A.a([],x.D))},
bu(){return this.r.$0()},
ge1(){return this.c}}
C.aFs.prototype={
gcCG(){return J.bF9(this.e,0,new C.eNY())},
Z(){this.a2()
$.aV.bZ$.push(this)
this.vT()},
q(){$.aV.hO(this)
this.a1()},
jd(d){if(d===B.fJ)this.vT()},
vT(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.D8(q.a.c).da(0,B.kg),$async$vT)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eNU(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eNV(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vT,v)},
I9(d){return this.bKi(d)},
bKh(){return this.I9(null)},
bKi(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$I9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.igo(l,d),$async$I9)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lt(l,r,q,D.dfW,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Ly(t.a.c,p),$async$I9)
case 4:o=f
w=5
return A.b(t.vT(),$async$I9)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.U(D.f7P)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.U(D.f9C)
else n.K(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EF(m)
case 1:return A.h(u,v)}})
return A.i($async$I9,v)},
EF(d){return this.cg7(d)},
cg7(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$EF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.asU(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$EF)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Ly(u.a.c,t),$async$EF)
case 5:case 4:w=6
return A.b(u.vT(),$async$EF)
case 6:return A.h(null,v)}})
return A.i($async$EF,v)},
vF(d){return this.c_u(d)},
c_u(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bDw(),$async$vF)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aIG,!0,"NgmyWorksheetProjectScan",x.N),$async$vF)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bE_(q),$async$vF)
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
break}p=C.h7u(s)
w=15
return A.b(C.Ly(t.a.c,p),$async$vF)
case 15:o=f
w=16
return A.b(t.vT(),$async$vF)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.U(D.f9H)
w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EF(p)
case 1:return A.h(u,v)}})
return A.i($async$vF,v)},
O6(d){return this.bIY(d)},
bIY(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$O6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ci(null,null,!0,null,new C.eNF(d),s,null,!0,!0,x.y),$async$O6)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oO(t.a.c,A.a([],x.D)),$async$O6)
case 6:w=7
return A.b(t.vT(),$async$O6)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.f7U)
case 4:case 1:return A.h(u,v)}})
return A.i($async$O6,v)},
cgk(d){var w=this.c
w.toString
A.bU(B.K,null,new C.eNO(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b5J(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jJ
else w=B.c
v=A.m(16)
u=A.J(p?B.e8:B.bO,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a2,!0,r,A.aO(!1,q,!0,A.p(r,A.x(A.a([s,B.ae,t,B.bD,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bs:B.bm,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vS,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ai)},
a0b(d,e){return this.cg8(d,e)},
cg8(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0b=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.K,null,new C.eNJ(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0b)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hvt(r,new C.eNK(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.O8(d,e),$async$a0b)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0b,v)},
b2K(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aw
else t=h.a?B.aP:B.av
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bs:B.bm,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aG(!1,B.a2,!0,u,A.aO(!1,u,!0,new A.D(B.BO,A.B(A.a([s,B.bd,t,A.X(B.eE,w?B.bs:B.bm,u,u,u,u)],v),B.m,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ai)},
cn2(d,e,f,g,h,i){return this.b2K(!1,d,e,f,g,h,i)},
O8(d,e){return this.bJ7(d,e)},
bJ7(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lc(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$O8)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bCf(t.a.c,d.a),$async$O8)
case 6:w=7
return A.b(t.vT(),$async$O8)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$O8,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.J,n=new C.tZ(o),m=o?B.c0:B.iu
if(q.f)o=D.b9B
else{w=q.bDu(n)
v=q.bZy(n)
u=q.gbAB()
if(o)t=B.jJ
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ae,v,B.aN,new C.FP(A.p(p,A.B(A.a([q.aBN(P.O9,"Projects",n,D.abE),q.aBN(B.w8,"Cashier",n,D.aYU),q.aBN(B.Gw,"Family Tree",n,D.hpu)],r),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.eB,0.95,u,p),B.bv],r)
w=q.d
if(w===D.abE){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.av,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b0,new C.axJ(q.gaRb(),p)],r),B.m,p,B.e,B.i,0,p,p),B.aA,q.cn4(n)],r))}else{o=q.a
if(w===D.aYU)u.push(new C.aoU(o.c,n,p))
else{w=q.r
u.push(new C.aq1(o.c,o.d,o.e,o.f,new C.eO0(q),new C.eO1(q),new A.c0(w,x.b4)))}}o=A.ce(A.x(u,B.E,p,B.e,B.i,0,B.p),B.t,p,B.y,p,Ai.Nu,p,p,B.ah)}return A.c7(p,m,A.bl(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bDu(d){var w=null,v=A.m(8),u=d.a,t=A.X(Y.a0I,u?B.bs:B.bm,w,w,w,16)
return A.aO(!1,v,!0,new A.D(B.kF,A.B(A.a([t,B.bo,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bs:B.bm,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eNC(this),w,w,w,w,w,w,w)},
gbAB(){switch(this.d.a){case 0:return D.aaQ
case 1:return D.heX
case 2:return D.aaR}},
bZy(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aW.j(0.35),B.cx,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bUO,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bEV,A.aG(!1,B.a2,!0,w,A.aO(!1,A.m(12),!0,A.p(w,D.bSf,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eNG(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ai)],t),B.E,w,B.e,B.i,0,w,w),r=B.b_.j(0.55),q=A.m(12)
return new C.FP(A.p(w,A.x(A.a([new A.D(E.a_b,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.AY(this.gcCG()),w,w,w,w,w,w,D.fr5,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.u2,B.jd,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(B.aW,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.heW,w)},
aBN(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aW:B.K,q=A.m(12),p=t?A.J(B.c.j(0.55),B.r,2):A.J(B.K,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aW.j(0.42),B.cH,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bs:B.bm
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bs:B.bm
return A.E(A.aG(!1,B.a2,!0,u,A.aO(!1,s,!0,A.dd(u,A.B(A.a([w,B.em,new A.ds(1,B.cn,A.d(e,u,1,B.a1,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b8,B.i,0,u,u),u,u,B.cu,new A.o(r,u,p,q,o,u,B.n),B.iy,u,u,u,B.Gd,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eNX(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ai),1)},
cn4(d){var w,v,u,t,s,r,q=this,p=null
if(J.cs(q.e)){w=d.a
v=w?B.e3:B.c
u=A.m(15)
t=A.p(p,D.bSl,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aW.j(0.5),B.f_,28)],x.V),D.c3y,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.FP(A.p(p,A.x(A.a([t,B.d4,s,B.O,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bm,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dS,A.B(A.a([A.E(q.aSL(B.jf,"Scan QR",new C.eNR(q),d),1),B.at,A.E(q.aSL(R.yX,"Upload file",new C.eNS(q),d),1)],r),B.m,p,B.e,B.i,0,p,p),B.aA,A.bH(D.fSp,p,q.gaRb(),A.bo(B.aW,p,p,p,B.c,B.h_,p,p,new A.b7(A.m(12),B.a0),p,p,p))],r),B.m,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bBx,1.05,D.aaQ,p)}w=J.b6(q.e,new C.eNT(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.FP(A.x(w,B.m,p,B.e,B.i,0,B.p),16,B.bT,1,D.aaQ,p)},
aSL(d,e,f,g){var w=null,v=B.aW.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.J(B.aW.j(0.45),B.r,1)
return A.aG(!1,B.a2,!0,u,A.aO(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.b_,w,w,w,26),B.O,A.d(e,w,w,w,w,w,w,D.fpp,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ajr,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
cn3(d,e){var w,v,u=null,t=e.a,s=t?B.e3:B.c,r=A.m(14),q=A.J(t?B.e8:B.bO,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ep,10)],x.V),o=A.m(14),n=t?B.bs:B.bm
n=A.bx(B.Wx,new A.fD(1.7777777777777777,C.aQS(!0,B.fK,1/0,P.O9,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.AY(d.gxa()),u,u,u,u,u,u,D.fnm,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.p(u,A.aG(!1,B.a2,!0,u,A.aO(!1,o,!0,A.x(A.a([n,new A.D(B.bB,A.B(A.a([v,A.aH(u,u,u,u,A.X(Aj.a1N,t?B.bs:B.bm,u,u,u,u),u,u,u,new C.eNP(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eNQ(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.ec,u,u,u,1/0)}}
C.byj.prototype={}
C.r9.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.G(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcWk(){var w,v,u,t,s=this.c
if(s===B.k.j3(s))w=B.o.u(B.k.N(s))
else{v=B.k.ac(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lt.prototype={
gxa(){return B.d.cI(this.d,0,new C.cBY())},
ag(){var w=this,v=w.d,u=A.T(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.cBX(),u),u.k("ak.E"))
return A.G(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ae()],x.N,x.z)},
bcZ(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lt(w.a,w.b,v,u,w.e)},
bcG(d){return this.bcZ(d,null)},
T4(d){return this.bcZ(null,d)}}
C.HV.prototype={
a5(){return"FamilyGender."+this.b}}
C.hU.prototype={
ag(){var w=this
return A.G(["id",w.a,"name",w.b,"gender",C.hr9(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aEy(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hU(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.al9.prototype={
a5(){return"FamilyTreeAccessRole."+this.b}}
C.kM.prototype={
gape(){var w=this.f
return new A.Z(w,new C.bQx(),A.T(w).k("Z<1>")).gL(0)},
ag(){var w=this,v=w.f,u=A.T(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.bQw(),u),u.k("ak.E"))
return A.G(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ae(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i6B(w.y),"games",w.z],x.N,x.z)},
wx(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kM(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bcY(d,e){var w=null
return this.wx(w,w,w,d,e,w,w,w,w)},
cLQ(d,e,f,g,h,i,j){return this.wx(d,e,null,f,g,h,i,j,null)},
aED(d,e){var w=null
return this.wx(w,w,w,w,d,w,w,e,w)},
cLS(d,e,f,g,h,i,j,k){return this.wx(d,e,null,f,g,h,i,j,k)},
cKk(d){var w=null
return this.wx(w,w,w,w,w,w,w,d,w)},
cKI(d){var w=null
return this.wx(w,w,w,w,w,w,w,w,d)},
bcA(d){var w=null
return this.wx(w,w,d,w,w,w,w,w,w)},
aEp(d){var w=null
return this.wx(w,w,w,w,w,d,w,w,w)},
cLm(d,e,f){var w=null
return this.wx(w,d,w,w,e,w,w,f,w)},
cK7(d){var w=null
return this.wx(w,w,w,d,w,w,w,w,w)},
cKV(d,e){var w=null
return this.wx(d,w,w,w,w,w,e,w,w)}}
C.cBZ.prototype={
a5(){return"WrapAlignment."+this.b}}
C.cC_.prototype={
a5(){return"WrapCrossAlignment."+this.b}}
C.aHz.prototype={}
C.b9r.prototype={
by(d){this.a=d.a
this.b=d.b},
cW(d){var w=new C.b9r()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b0(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b9q.prototype={
gwp(){return!0},
gGe(){return this.z.b<this.b.length},
aUo(d){switch(0){case 0:return d.a.c}},
aU5(d){switch(0){case 0:return d.a.d}},
bSX(d,e){switch(0){case 0:return new A.hP(d,e)}},
bSk(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h7(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iH(0,0,B.o.E(0,b5.a,b5.b),B.o.E(0,b5.c,b5.d))
return}w=A.HG(b4)
switch(0){case 0:v=b5.b
u=new A.kJ(0,v,0,1/0)
t=w===B.Uj
break}s=A.a([],x.gZ)
r=A.U(x.gF,x.S)
for(b3=b1.z,q=B.d.fJ(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.M)(q),++h){g=q[h]
g.h7(b4,u,!0)
f=b1.aUo(g)
f.toString
e=b1.aU5(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHz(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aHz(k,j,i))}d=s.length
switch(0){case 0:q=b5.cz(new A.hP(m,l))
a0=q.a
a1=q.b
b1.a=new A.iH(0,0,a0,a1)
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
for(q=B.d.fJ(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.M)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aUo(g)
e=b1.aU5(g)
e.toString
a9=b1.bSk(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bSX(a6,a3+a9)
b0=g.a
g.a=new A.iH(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h1(d){var w,v,u,t,s,r=this
r.lq(d)
w=d.b
w.ig()
v=A.dr()
u=r.a
v.ef(u.a,u.b,0,1)
w.p7(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.M)(u),++s)u[s].h1(d)
w.np(0)},
GI(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ig(){return this.z}}
C.bwE.prototype={}
var z=a.updateTypes(["aA<~>()","R(hU)","~()","R(kM)","R(nk)","a8<n,@>(kM)","H(kM,kM)","H(hU,hU)","n(hU)","kM(a8<@,@>)","R(lt)","nk(a8<@,@>)","a8<n,@>(nk)","R(ut)","ut()","H(hU)","ai<hU>()","R(zc)","a_j(Y)","n?(hU)","eI<n?>(hU)","aA<~>(lt)","R(r9)","a8<n,@>(hU)","hU(a8<@,@>)","H(lt,lt)","R(af1)","~(b9)","v(op)","H(H,a9c)","R(qv<H>)","~(qv<H>)","T7(Y)","R(Mc)","R(us)","~(hU)","n(n)","Vt(Y)","T6(Y)","adp(Y)","Zf(Y)","hU(hU)","cN(bz<n,G3>)","cN(Km)","ZJ(Y)","H?(hU)","hU()","R(Km)","D(hU)","~(HV)","ZF(Y)","v(HV,n,a0)","R(aeV)","bz<n,ai<a8<n,@>>>(n,ai<nk>)","ZH(Y)","+count,id,name(H,n,n)(kM)","n(kM)","a_E(Y)","a_F(Y)","R(lL)","lL()","YO(Y)","a1r(Y)","Zh(Y)","Zg(Y)","~(H)","~(n,lh?)","v(r9)","adK(Y)","~(m9)","aA<~>([n?])","K(K,lt)","v(lt)","K(K,r9)","a8<n,@>(r9)","r9(a8<@,@>)","ai<lh>()","us()","n(V)","lt(a8<@,@>)","cu(HU)","n(lt)","a8<n,@>(lt)","H(nk,nk)","kM(a8<n,@>)","kM(kM)"])
C.fFi.prototype={
$1(d){return d.a+" "+d.b},
$S:126}
C.fFh.prototype={
bmh(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.r1(s,d,B.hN,"book",E.FT),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.Lm(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bmh(d)},
$S:282}
C.fFj.prototype={
$1(d){return d.b},
$S:126}
C.fOM.prototype={
$1(d){var w=null
return A.eS(w,B.K,new H.PO(this.a,this.b,w),w,w,0,B.a_6,B.d8,w,w,w)},
$S:48}
C.fto.prototype={
$1(d){return d!=null},
$S:204}
C.ftp.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:204}
C.ftu.prototype={
$1(d){if(this.a)return new A.t(d.a*520,d.b*160)
return d},
$S:157}
C.fD1.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.hb(w,B.rV,w,w,w,w,w,w,w,B.dy,w,w,10.5,w,B.ev,w,!0,w,w,w,w),w),u=f?B.ev:B.w1
return new A.nU(D.bwZ,A.aa_(A.a([new A.fT(130,w,v),new A.zb(1,B.Gp,A.fc(e,w,w,w,A.hb(w,g==null?D.emZ:g,w,w,w,w,w,w,w,B.dy,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.xV,B.lI))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1930}
C.fD0.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vE(999)
f=A.xf(A.lG(h,A.fc("Cashier",h,h,h,A.hb(h,D.zR,h,h,h,h,h,h,h,B.dy,h,h,10,h,B.ev,h,!0,h,h,h,h),h),h,new A.kK(D.emQ,h,f,B.hQ,h),h,h,D.bxt,h))
w=A.xf(A.fc("Debt receipt",h,h,h,A.hb(h,h,h,h,h,h,h,h,h,B.dy,h,h,22,h,B.ev,h,!0,h,h,h,h),h))
v=A.xf(A.fc(C.wX(new A.V(Date.now(),0,!1),!0),h,h,h,D.a9p,h))
u=A.vE(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.hb(h,h,h,h,h,h,h,h,h,B.dy,h,h,14,h,B.ev,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.a9p,h)
q=A.vE(10)
p=x.Z
u=A.lG(h,A.z5(A.a([s,new A.fT(h,2,h),r,new A.fT(h,10,h),A.lG(h,A.z5(A.a([A.fc("Amount owed",h,h,h,D.a9p,h),new A.fT(h,2,h),A.fc(A.AY(t.c),h,h,h,A.hb(h,D.zR,h,h,h,h,h,h,h,B.dy,h,h,20,h,B.ev,h,!0,h,h,h,h),h)],p),B.rg,B.lI),h,new A.kK(B.pn,h,q,B.hQ,h),h,h,D.bwG,1/0)],p),B.rg,B.lI),h,new A.kK(E.aK0,h,u,B.hQ,h),h,h,D.byz,1/0)
q=new A.nB(D.emT,0.9,B.kV)
r=A.vE(12)
s=i.c
o=s.$2("Original due",C.wX(t.r,!1))
n=s.$2("Current due",C.wX(t.f,!1))
m=i.d
l=new A.nB(m,1.1,B.kV)
k=A.vE(8)
j=i.a
k=A.a([o,n,new A.fT(h,6,h),A.lG(h,A.xf(A.fc(t.gaLt(),h,h,h,A.hb(h,m,h,h,h,h,h,h,h,B.dy,h,h,11,h,B.ev,h,!0,0.5,h,h,h),h)),h,new A.kK(h,new A.pI(l,l,l,l),k,B.hQ,h),h,h,D.bxB,1/0),new A.fT(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zR))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zR))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.hb(h,B.rV,h,h,h,h,h,h,h,B.dy,h,h,10.5,h,B.ev,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,SF>")
o=A.C(new A.N(o,new C.fD_(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fT(h,4,h),n,new A.fT(h,6,h),new C.b9q(5,5,new C.b9r(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fT(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fT(h,8,h),w,new A.fT(h,3,h),v,new A.fT(h,16,h),u,new A.fT(h,10,h),A.lG(h,A.z5(k,B.xV,B.lI),h,new A.kK(h,new A.pI(q,q,q,q),r,B.hQ,h),h,h,B.ajC,1/0)],p)
w=j.a
if(w!=null){v=new A.nB(B.J3,1,B.kV)
B.d.v(f,A.a([new A.fT(h,16,h),A.fc("Debtor signature",h,h,h,A.hb(h,B.rV,h,h,h,h,h,h,h,B.dy,h,h,10,h,B.ev,h,!0,h,h,h,h),h),new A.fT(h,6,h),A.lG(h,new A.Ic(w,B.WH,h,h),h,new A.kK(h,new A.pI(v,v,v,v),A.vE(6),B.hQ,h),82,h,B.Nz,1/0)],p))}f.push(new A.fT(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.ffT,h))
f.push(new A.fT(h,18,h))
f.push(A.xf(A.fc("NGMY.ORG",h,h,h,A.hb(h,D.zR,h,h,h,h,h,h,h,B.dy,h,h,14,h,B.ev,h,!0,1.8,h,h,h),h)))
return f},
$S:360}
C.fD_.prototype={
$1(d){var w=null,v=new A.nB(D.J4,0.7,B.kV),u=A.vE(999)
return A.lG(w,A.fc(C.wX(d,!1),w,w,w,A.hb(w,D.J4,w,w,w,w,w,w,w,B.dy,w,w,9.5,w,B.ev,w,!0,w,w,w,w),w),w,new A.kK(w,new A.pI(v,v,v,v),u,B.hQ,w),w,w,D.bCX,w)},
$S:1931}
C.c5L.prototype={
$1(d){var w=null,v=B.by.j(0.08),u=A.m(999),t=A.J(B.by.j(0.28),B.r,1)
return A.p(w,A.d(C.wX(d,!1),w,w,w,w,w,w,D.fmR,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eI,w,w,w)},
$S:1932}
C.fPi.prototype={
$1(d){var w=null,v=A.aJ(d,B.bX,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bVK,w,w,w,new C.fPf(d),w,w,w,w,w,B.cd),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eS(w,B.K,new A.cU(new A.aZ(0,380,0,v.a.b*0.9),A.aG(!1,B.a2,!0,u,new A.D(B.ZW,A.x(A.a([new A.bM(B.a8,w,w,t,w),new A.ds(1,B.cn,A.ce(A.x(A.a([new A.ex(new C.aZn(r,w),s),B.W,A.B(A.a([A.E(A.et(B.z4,D.fOE,new C.fPg(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fd,w,new A.b7(A.m(14),B.a0),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ac,A.E(A.dl(B.a2n,D.fL2,new C.fPh(r,d),A.bo(B.b_,w,w,w,B.c,w,B.fd,w,new A.b7(A.m(14),B.a0),w,w,w)),1)],p),B.m,w,B.e,B.i,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.ai),w),w,w,0,Am.a_k,B.d8,w,w,w)},
$S:48}
C.fPf.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fPg.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aV.al$.x.h(0,t.a)
m=m==null?null:m.gbd()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m4(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.h8),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eR(B.dH.gaR(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aq(o,0,32)
w=5
return A.b(A.t4(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fPh.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fJD(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fPa.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eS(w,B.av,A.x(A.a([new A.D(D.byn,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.n_,w,w,w),1),A.aH(w,w,w,w,B.ld,w,w,w,new C.fP8(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),w),new A.ds(1,B.cn,new A.D(B.fj,A.bx(A.m(14),A.fQ(t,B.A,w,w,B.cg,B.dw,!1,w,!1,w,w),B.ap),w),w),new A.D(B.Nd,new A.a7(1/0,w,A.dl(B.om,D.aTY,new C.fP9(t,this.c,d),A.bo(B.b_,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.a0),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.Nq,B.d8,w,new A.b7(v,B.a0),w)},
$S:48}
C.fP8.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fP9.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.t4(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fPm.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eS(w,B.av,new A.D(D.byv,A.x(A.a([A.B(A.a([D.bE_,A.aH(w,w,w,w,B.ld,w,w,w,new C.fPk(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),B.O,new A.ex(A.bx(A.m(14),A.p(w,A.b4(w,w,w,new C.bbC(s.ax,w),B.ax),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ae,new A.a7(1/0,w,A.dl(B.om,D.aTY,new C.fPl(t,s,d),A.bo(B.b_,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.a0),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d8,w,new A.b7(v,B.a0),w)},
$S:48}
C.fPk.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fPl.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aV.al$.x.h(0,t.a)
n=n==null?null:n.gbd()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m4(2.5),$async$$0)
case 4:w=3
return A.b(e.hr(B.h8),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aq(p,0,32)
r=J.eR(B.dH.gaR(s))
w=5
return A.b(A.t4(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fxH.prototype={
$1(d){return d.a===this.a},
$S:258}
C.dLt.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dLe.prototype={
blv(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e3:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dLh(s,q,e),p,!0,!0,!1,B.Jk,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dLi(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.blv(d,e)},
$S:1933}
C.dLh.prototype={
$1(d){var w,v=null,u=this.c===B.wB,t=u?D.dmH:D.dil
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bl(!0,new A.D(N.ak9,A.x(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bs:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae,A.iy(!0,v,v,B.y,D.f6v,new C.dLg(this.a,w,t,d),t.length,v,B.dR,B.ah,!0)],x.p),B.ak,v,B.e,B.Q,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:25}
C.dLg.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cO.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cO
else u=(t.b.a.d.a?B.bs:B.bm).j(0.16)
u=A.J(u,B.r,q?1.6:1)
return A.aO(!1,p,!0,A.p(B.A,C.aZm(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dLf(t.d,r),s,s,s,s,s,s,s)},
$S:190}
C.dLf.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.dLi.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dLc.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:93}
C.dLd.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cJ(B.cu,e,v)
return new A.d2(e,!1,A.ir(B.A,A.at(A.aG(!1,B.a2,!0,v,new A.dZ(new C.dLb(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bf(t,new A.bp(0.96,1,u),u.k("bf<bO.T>"))),v)},
$S:32}
C.dLb.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aJ(d,B.bX,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e3:B.c,f=A.m(14),e=A.J((h?B.bs:B.bm).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aO(!1,v,!0,new A.D(B.eB,A.X(B.cz,i.a.d.a?B.bs:B.bm,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dKX(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aTh("Name")
r=l.a
q=r.d==null?k:new C.dKY(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bn:B.lZ
n=A.J(B.cO.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Y,h,k,!0,B.t,k,A.aN(),w,k,k,k,k,k,2,s.bcR(new A.D(B.fB,A.aO(!1,p,!0,A.p(B.A,C.aZm(m==null?"\ud83d\udc64":A.fDQ(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cm,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a3,k,B.kR,k,B.a9e,k,k)
v=A.a([v,B.ae,t,B.O,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bm,k,k,k,k,k,k,k,k,11.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aTW("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dKZ(r,a0),r.d===B.wB),1),B.ac,A.E(i.aTW("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dL3(r,a0),r.d===B.a63),1)],u),B.m,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.O,new A.bM(B.a5,k,k,A.hr(D.bU2,D.fMV,new C.dL4(r,l.e,a0),A.fy(k,k,k,k,k,k,k,k,k,k,k,B.cO,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cd)),k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uw(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Y,!1,k,!0,B.t,k,A.aN(),l.f,k,k,k,k,k,2,i.aTi("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.e1,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a3,k,B.ao,k,k,k,k))
v.push(B.W)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.J((t?B.bs:B.bm).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wX(r.a,!1)
v.push(A.aG(!1,B.a2,!0,q,A.aO(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bD,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bQO],u),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bf,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dL5(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.v(v,A.a([B.O,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Y,!1,k,!0,B.t,k,A.aN(),l.r,k,k,k,k,k,2,i.aTh("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a3,k,B.ao,k,k,k,k))
v.push(B.ae)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b17(r.b.length!==0,B.mJ,new C.dL6(r,i,a0),new C.dL7(r,a0),"Upload from gallery","ID photo"))
v.push(i.b17(r.c.length!==0,D.bK9,new C.dL8(r,i,d,a0),new C.dL9(r,a0),"Camera or gallery","Selfie"))
v.push(B.O)
t=l.w
v.push(new Al.a7P("Signature (optional)",t,new C.dLa(a0),new C.dL_(a0,t),new C.dL0(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bs:B.bm
s=(i?B.bs:B.bm).j(0.28)
s=A.E(A.dI(E.aTR,new C.dL1(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.tZ,k,new A.b7(A.m(10),B.a0),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cO,k,k,k,B.c,k,B.tZ,k,new A.b7(A.m(10),B.a0),k,k,k)
v.push(A.B(A.a([s,B.ac,A.E(A.bH(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vc,k,k,k),k,new C.dL2(r,w,d),t),1)],u),B.m,k,B.e,B.i,0,k,k))
return A.p(k,A.ce(A.x(v,B.ak,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aZ(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.ro,B.jd,k,k,360)},
$S:156}
C.dKX.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dKY.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dKZ.prototype={
$0(){return this.b.$1(new C.dKW(this.a))},
$S:0}
C.dKW.prototype={
$0(){var w=this.a
w.d=B.wB
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dL3.prototype={
$0(){return this.b.$1(new C.dKV(this.a))},
$S:0}
C.dKV.prototype={
$0(){var w=this.a
w.d=B.a63
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dL4.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dL5.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.x0(null,u.b,A.c5(2020,1,1,0,0,0,0,0),null,s,A.c5(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dKU(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKU.prototype={
$0(){var w=this.b
return this.a.a=A.c5(w.gck(),w.gcg(),w.gcw(),0,0,0,0,0)},
$S:0}
C.dL6.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.PJ(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dKT(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKT.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dL7.prototype={
$0(){return this.b.$1(new C.dKS(this.a))},
$S:0}
C.dKS.prototype={
$0(){return this.a.b=""},
$S:0}
C.dL8.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e3:B.c
w=3
return A.b(A.bU(q,null,new C.dKQ(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.PJ(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dKR(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKQ.prototype={
$1(d){var w=null
return A.bl(!0,A.x(A.a([A.dF(!1,w,w,w,!0,w,w,w,!0,w,w,B.ape,w,w,w,w,new C.dKK(d),!1,w,w,w,w,w,w,w,D.fD5,w,w,w),A.dF(!1,w,w,w,!0,w,w,w,!0,w,w,B.apc,w,w,w,w,new C.dKL(d),!1,w,w,w,w,w,w,w,D.fK3,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.af,!0,!0)},
$S:25}
C.dKK.prototype={
$0(){A.a4(this.a,!1).O("camera")
return null},
$S:0}
C.dKL.prototype={
$0(){A.a4(this.a,!1).O("gallery")
return null},
$S:0}
C.dKR.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dL9.prototype={
$0(){return this.b.$1(new C.dKP(this.a))},
$S:0}
C.dKP.prototype={
$0(){return this.a.c=""},
$S:0}
C.dLa.prototype={
$0(){return this.a.$1(new C.dKO())},
$S:0}
C.dKO.prototype={
$0(){},
$S:0}
C.dL_.prototype={
$0(){return this.a.$1(new C.dKN(this.b))},
$S:0}
C.dKN.prototype={
$0(){return B.d.a9(this.a)},
$S:0}
C.dL0.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahY(u.a,null,null,new C.dKM(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKM.prototype={
$4(d,e,f,g){this.a.$1(new C.dKJ(this.b,d))},
$S:442}
C.dKJ.prototype={
$0(){var w=this.a
B.d.a9(w)
B.d.v(w,this.b)},
$S:0}
C.dL1.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dL2.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.U(D.fbz)
return}if(w.a.d==null){w.c.K(x.q).f.U(D.f8s)
return}A.a4(w.c,!1).O(!0)},
$S:0}
C.dLw.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:93}
C.dLx.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e3:B.c,n=A.m(14),m=A.J((p?B.bs:B.bm).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AY(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bs:B.bm,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zc(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zc(r).length>0?B.by:B.cO,r,r,r,r,r,r,r,r,12,r,r,B.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bs:B.bm
t=(q?B.bs:B.bm).j(0.28)
s=x.p
return new A.d2(e,!1,A.at(A.aG(!1,B.a2,!0,r,A.p(r,A.x(A.a([p,B.O,v,u,B.aA,A.B(A.a([A.E(A.dI(B.nJ,new C.dLu(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.jP,r,new A.b7(A.m(10),B.a0),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ac,A.E(A.bH(D.fKt,r,new C.dLv(d),A.bo(B.cO,r,r,r,B.c,r,B.jP,r,new A.b7(A.m(10),B.a0),r,r,r)),1)],s),B.m,r,B.e,B.i,0,r,r)],s),B.ak,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.BR,E.a_b,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:32}
C.dLu.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dLv.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dLq.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dLr(r),p=r.a.d.a,o=p?B.e3:B.c,n=A.m(14),m=A.J((p?B.bs:B.bm).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a1,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AY(l.c),s,s,s,s,s,s,D.foq,s,s,s)],p),B.m,s,B.e,B.i,0,s,s)
w=A.iD((r.a.d.a?B.bs:B.bm).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a12,"View receipt",new C.dLj(r,d,l))
u=l.x!=null
t=u?B.rz:B.qj
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bys,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dLk(r,d,l)),q.$3$icon$label$onTap(B.C2,"Edit",new C.dLl(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mJ,"View / download ID",new C.dLm(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bK8,"View / download selfie",new C.dLn(r,d,l)))
if(l.gaGe())p.push(q.$3$icon$label$onTap(Ab.a2d,"View / download signature",new C.dLo(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.by,B.e9,"Delete",new C.dLp(r,d,l)))
p.push(B.au)
return A.bl(!0,new A.D(B.u2,A.p(s,A.x(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:25}
C.dLr.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.av
else w=d
return A.aO(!1,v,!0,new A.D(B.eR,A.B(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1934}
C.dLj.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fPe(w,this.c)},
$S:0}
C.dLk.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.Sq(this.c)},
$S:0}
C.dLl.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.Dh(this.c)},
$S:0}
C.dLm.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bEl(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dLn.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bEl(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dLo.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fPj(w,this.c)},
$S:0}
C.dLp.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.PI(0,this.c)},
$S:0}
C.dLy.prototype={
$1(d){return d.x==null},
$S:258}
C.dLz.prototype={
$1(d){return d.x!=null},
$S:258}
C.dLA.prototype={
$2(d,e){return d+e.c},
$S:1935}
C.dLB.prototype={
$0(){return this.a.bB5()},
$S:0}
C.dLs.prototype={
$0(){return this.a.aft(this.b)},
$S:0}
C.fyk.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fyl.prototype={
$0(){return B.d.gI(D.a3x)},
$S:z+77}
C.dbC.prototype={
$0(){var w=this.a
return w.m(new C.dbA(w,this.b))},
$S:0}
C.dbA.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dbB.prototype={
$0(){},
$S:0}
C.dbD.prototype={
$0(){var w=this.a.gc_i()
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.fAB.prototype={
$1(d){return C.hbI(A.a2(d,x.N,x.z))},
$S:z+11}
C.fAC.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fAD.prototype={
$2(d,e){var w=A.cb(d.a,null),v=A.cb(e.a,null)
if(w!=null&&v!=null)return B.o.aK(w,v)
return d.d.aK(0,e.d)},
$S:z+83}
C.fNS.prototype={
$1(d){return d.ag()},
$S:z+12}
C.fWd.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fxy.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bPe.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f0(e,v)?v:null},
$S:1936}
C.fOq.prototype={
$1(d){var w=this
return new C.ZH(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dch.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dcg(w,d))},
$S:z+80}
C.dcg.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dc5.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cL(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dc2.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dbE.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dbF.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dc6.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dbN.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.J,u=v?B.e3:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.en(A.a([A.bN(!1,B.di,w,w,!0,w,w,new C.dbL(d),w,w),A.bH(B.wY,w,new C.dbM(d),A.bo(B.n8,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dbL.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dbM.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dbO.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.E(w.r-1,-1,999)},
$S:0}
C.dc3.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dc4.prototype={
$0(){return B.d.gI(D.zg)},
$S:z+14}
C.dbJ.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyx(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.T6(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dbK.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dbP.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Zf(v,u,J.ad(w.d),null)},
$S:z+40}
C.dbQ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcf.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aB(s,new C.YX(r.y,r.gyx(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dcd(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.r(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.baZ(v,e,w,u,t,r.gbRq(),C.hr8(r.y.Q),r.gyx(0),s)
w=t}return A.ca(q,new C.dce(r,e),new A.D(B.a_c,w,s))},
$S:1937}
C.dce.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd1(t).ay){t=this.b
u=x.cy.a(B.d.gd1(u.f.f)).gv0(0)
w=t-(u==null?t:u)}else w=0
v=B.k.E(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fG(v*3.141592653589793*0.5)
return A.fv(B.a5,A.d9(e,B.k.E(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.dcd.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHk(B.q3,B.iT)},
$S:0}
C.dc_.prototype={
$0(){var w=this.a
return w.m(new C.dbZ(w))},
$S:0}
C.dbZ.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dc0.prototype={
$0(){var w=this.a.c
w.toString
A.a4(w,!1).O(null)
return null},
$S:0}
C.dbG.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.ka.j(0.5),r=x.p,q=A.a([D.fBG,B.ae],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cs(p.d)?"Write this book":"Write a new book"
q.push(p.Zi(d,B.e5,w,J.cs(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Zi(d,F.an8,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cL(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.ct,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kz.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.ct,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kz.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Zi(d,W.aod,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Zi(d,B.qo,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Zi(d,B.qo,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eS(u,E.Bi,A.bl(!0,new A.D(Aa.yf,A.x(q,B.E,u,B.e,B.Q,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.aky,B.d8,u,new A.b7(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:48}
C.dc1.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.dbT.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cL(w.d)
return new C.ZJ(v,J.cL(w.d),w.r+1,null)},
$S:z+44}
C.dbU.prototype={
$1(d){var w=null
return A.ow(!1,A.en(w,w,w,E.Bi,new A.jS(this.a,new C.dbS(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:314}
C.dbS.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a8U,B.oB,A.E(A.d(e,w,w,w,w,w,w,B.jl,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:748}
C.dbV.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dbW.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:184}
C.dbX.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dbY.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.B6(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.RV(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dbR(s,t))
w=4
return A.b(s.l7(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dbR.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dc8.prototype={
$1(d){var w=null
return A.ow(!1,A.en(w,w,w,E.Bi,new A.jS(this.a,new C.dc7(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:314}
C.dc7.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a8U,B.oB,A.E(A.d(e,w,w,w,w,w,w,B.jl,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:748}
C.dc9.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dca.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:184}
C.dcb.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:184}
C.dcc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.B6(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.l7(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dbH.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bip(B.q3,A3.N_)},
$S:0}
C.dbI.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHk(B.q3,A3.N_)},
$S:0}
C.de1.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.de2.prototype={
$1(d){var w=this.a
return w.m(new C.de0(w))},
$S:8}
C.de0.prototype={
$0(){return this.a.e="page"},
$S:0}
C.de3.prototype={
$1(d){var w=this.a
return w.m(new C.de_(w))},
$S:8}
C.de_.prototype={
$0(){return this.a.e="book"},
$S:0}
C.de4.prototype={
$1(d){var w=this.a
return w.m(new C.ddZ(w))},
$S:8}
C.ddZ.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.de5.prototype={
$0(){var w=this.a
return w.m(new C.ddY(w,this.b))},
$S:0}
C.ddY.prototype={
$0(){var w=this.b
this.a.d.saX(0,w)
return w},
$S:0}
C.de6.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga21()
A.a4(this.b,!1).O(new A.bpA(w,v))},
$S:0}
C.dcw.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dcv.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.ZF(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dcA.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dcz.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b8v(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hl,v,v,v)
return A.en(A.a([A.bN(!1,B.di,v,v,!0,v,v,new C.dcx(d),v,v),A.bH(B.wY,v,new C.dcy(d),A.bo(B.n8,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Bi,w,v,v,v,v,D.fAs,v)},
$S:18}
C.dcx.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dcy.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dcB.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dcC.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.ce(A.bW(B.bC,r,B.bq,t,18,14),B.t,t,B.y,t,D.bzo,t,t,B.ah)},
$S:285}
C.dcu.prototype={
$0(){return this.a.Qq(0,this.b)},
$S:0}
C.dct.prototype={
$0(){return this.a.PU(0,this.b)},
$S:0}
C.cKM.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cKN.prototype={
$0(){return B.d.gI(D.zg)},
$S:z+14}
C.cKO.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bT(0,new A.D(d,A.c2(w,new A.o(w,w,A.J(this.a.j(f),B.r,g),v,w,w,B.n),B.bg),w),0,0,0)},
$S:1939}
C.d3B.prototype={
$1(d){return this.a.m(new C.d3A(this.b,this.c))},
$S:8}
C.d3A.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d4_.prototype={
$1(d){return this.a.m(new C.d3N())},
$S:2}
C.d3N.prototype={
$0(){},
$S:0}
C.d40.prototype={
$1(d){return this.a.m(new C.d3M())},
$S:2}
C.d3M.prototype={
$0(){},
$S:0}
C.d41.prototype={
$0(){var w=this.a
return w.m(new C.d3L(w,this.b))},
$S:0}
C.d3L.prototype={
$0(){var w=this.a
return w.d=w.gob().FT(this.b.a)},
$S:0}
C.d42.prototype={
$0(){var w=this.a
return w.m(new C.d3K(w,this.b))},
$S:0}
C.d3K.prototype={
$0(){var w=this.a
return w.d=w.gob().cJE(this.b)},
$S:0}
C.d43.prototype={
$1(d){return this.a.m(new C.d3J())},
$S:2}
C.d3J.prototype={
$0(){},
$S:0}
C.d44.prototype={
$0(){var w=this.a
return w.m(new C.d3I(w,this.b))},
$S:0}
C.d3I.prototype={
$0(){var w=this.a
return w.d=w.gob().cJJ(this.b.a)},
$S:0}
C.d45.prototype={
$1(d){var w=this.a
return w.m(new C.d3V(w,d))},
$S:6}
C.d3V.prototype={
$0(){var w=this.a
return w.d=w.gob().cKD(this.b)},
$S:0}
C.d46.prototype={
$1(d){var w=this.a
return w.d=w.gob().aEs(d)},
$S:2}
C.d47.prototype={
$1(d){var w=this.a
return w.d=w.gob().cJM(d)},
$S:2}
C.d49.prototype={
$1(d){var w=this.a
return w.d=w.gob().cKB(d)},
$S:2}
C.d4a.prototype={
$1(d){var w=this.a
return w.m(new C.d3U(w,d))},
$S:8}
C.d3U.prototype={
$0(){var w=this.a
return w.d=w.gob().cKs(this.b)},
$S:0}
C.d4b.prototype={
$0(){var w=this.a,v=w.gob(),u=B.a.i(w.gyx(0).a.a),t=B.a.i(w.gaBB().a.a)
u=v.bd7(B.a.i(w.garr().a.a),t,u)
A.a4(this.b,!1).O(u)
return null},
$S:0}
C.bPo.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:9}
C.bPi.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bPh(w,d))},
$S:11}
C.bPh.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a4(0)}},
$S:0}
C.bPr.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bPj.prototype={
$0(){var w=this.a
w.Q=D.aYv
w.ade(1)
w.r.x=null},
$S:0}
C.bPk.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.aYv)return
w=new A.e9()
w.d3(u.as*13+u.a.e)
v=u.r
v.Q=3+w.au(3)
v.z=D.cZf[w.au(6)]
v.as=u.f.a+2.6},
$S:0}
C.bPn.prototype={
$0(){var w=this.a
w.Q=D.abq
w.ade(2)
w.r.z=null},
$S:0}
C.bPm.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hns
t.ade(3)
w=t.r
w.d=s
w.x="I say: "+t.gC2()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.au(3)
w.z=s?D.d4y[v.au(4)]:D.dp7[v.au(3)]
w.as=t.a+2.8},
$S:0}
C.bPp.prototype={
$0(){var w=this.a
w.Q=D.aYw
w.CW=this.b
w.cy=1
w.ade(4)
w.r.f=w.f.a+5},
$S:0}
C.bPq.prototype={
$0(){},
$S:0}
C.bPl.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ic()},
$S:0}
C.bPf.prototype={
$0(){return this.a.KG(this.b)},
$S:0}
C.bPg.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ic()},
$S:0}
C.bQV.prototype={
$0(){var w=this
return w.a.QJ(w.b,0,w.c,w.d)},
$S:0}
C.bQW.prototype={
$0(){var w=this
return w.a.QJ(w.b,3,w.c,w.d)},
$S:0}
C.bQX.prototype={
$0(){var w=this
return w.a.QJ(w.b,1,w.c,w.d)},
$S:0}
C.bQY.prototype={
$0(){var w=this
return w.a.bQS(w.b,w.c,w.d)},
$S:0}
C.bQZ.prototype={
$0(){var w=this
return w.a.QJ(w.b,4,w.c,w.d)},
$S:0}
C.bR_.prototype={
$0(){var w=this
return w.a.QJ(w.b,2,w.c,w.d)},
$S:0}
C.bR0.prototype={
$0(){var w=this
return w.a.QJ(w.b,5,w.c,w.d)},
$S:0}
C.bR1.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:749}
C.bQU.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a4D[d],p=q.a.a8(0,new A.t(0,-q.b*1.2*124)),o=A.fu(r,r,3,r,A.cS(r,r,r,r,r,r,r,r,r,D.ffz,e),B.a3,B.bZ,r,B.dA,B.bW)
o.nY(130)
w=o.b.a.c
w=p.aF(0,new A.t(0,w.gbb(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bt(A.bJ(w,v.gbb(v)+12,u+18),B.hP)
u=this.a
v=t.eV(B.dB)
w=$.S()
s=A.I()
s.r=B.dm.gp(0)
u.az(v,s)
s=A.I()
s.r=D.pY.gp(0)
u.az(t,s)
w=new A.aF(w.r,B.ag,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.D(new A.aX(s-5,v))
w.D(new A.aq(s+1,p.b+1))
w.D(new A.aq(s+6,v))
w.D(new A.bs())
v=A.I()
v.r=D.pY.gp(0)
u.aG(w,v)
o.a3(u,new A.t(t.a+9,t.b+6))},
$S:750}
C.bPF.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.bPG.prototype={
$2(d,e){var w=this.a,v=B.o.aK(w.alF(d),w.alF(e))
if(v!==0)return v
return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.fmn.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.fW4.prototype={
$2(d,e){if(e!=null)J.cc(this.a.c3(0,d,new C.fW5()),e)},
$S:z+66}
C.fW5.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.fW6.prototype={
$1(d){return d!==this.a},
$S:3}
C.fW7.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.fW8.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.fW3(this.c,d))},
$S:3}
C.fW3.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fW9.prototype={
$1(d){return d!==this.a},
$S:3}
C.fWa.prototype={
$1(d){return d!==this.a},
$S:3}
C.fWb.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.fW2(this.c,d))},
$S:3}
C.fW2.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fyS.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fMU.prototype={
$1(d){return d.Q},
$S:z+15}
C.fMV.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fvj.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fBu.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bKE.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.fWu.prototype={
$2(d,e){return B.o.aK(C.hny(d),C.hny(e))},
$S:226}
C.fWv.prototype={
$1(d){return d!==this.a},
$S:3}
C.fNp.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bIS.prototype={
$0(){var w=this.a
w.ch=!0
w.b6L()},
$S:0}
C.bIN.prototype={
$0(){},
$S:0}
C.bIT.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bIL.prototype={
$0(){},
$S:0}
C.bIM.prototype={
$0(){},
$S:0}
C.bIR.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bT(0,A.b4(u,u,u,new C.bbD(t,u),B.ax),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.m(14)
s.push(A.ao(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fn2,B.L,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bT,u,u,u),u,u,14,14,6,u))}return A.aB(B.c8,new A.an(B.a_,u,B.ab,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bIO(t,e),u,u,u,u,u,u,u,new C.bIP(t,e),u,u,u,u,u,u,u,u,u,new C.bIQ(t,e),u,u,u,u,!1,B.a4)},
$S:37}
C.bIO.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:21}
C.bIQ.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bIP.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:21}
C.bIK.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ic()},
$S:0}
C.cms.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cmt.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cmr(w))},
$S:0}
C.cmr.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cmu.prototype={
$0(){var w=this,v=w.a
v.giT()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cmv.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cmw.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cmx.prototype={
$0(){},
$S:0}
C.cmy.prototype={
$0(){var w=this.a
w.z=w.WS(++w.e)
w.Q=A.c3(w.gkI()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cmo.prototype={
$0(){return A.a4(this.a,!1).ic()},
$S:0}
C.cmp.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.giT().length,e=i/2,d=new C.cmq(i,f,h),a0=g.as,a1=A.a6(a0).k("bc<2>")
a0=A.C(new A.bc(a0,a1),a1.k("L.E"))
a0=A.bT(0,A.ca(new A.h5(a0),new C.cmj(g,new A.t(e,56),f,d),j),0,0,0)
a1=this.b
w=g.giT().length!==0&&!B.d.t(g.giT(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.Q4(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cN(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.Mj(new C.cmk(g,u),new C.cml(g,u),new C.cmm(g,u),j,j,new A.c0("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.t(a1,"not a child")?B.f7:B.bj,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.L,j,j),j,j,0,0,h*0.76-6,j))
if(g.giT().length!==0&&!B.d.t(g.giT(),-1)){a0=g.e+1>=g.gkI().length?"See my result":"Next family"
g=A.at(C.ub(a0,g.gq4(g),B.cI,B.jS,D.fq),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.WS(0):s).length))break
if(!B.d.t(g.giT(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.WS(0)
o=s}else o=s
n=s[u]
n=A.ed(B.A,new C.Q4(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.WS(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.qR(new A.bp(0,p,t),new C.cmn(),new S.DR(u,j,new C.Q4(l.b,k,62,!1,j),new A.kz(0.25,new C.Q4(m.b,k,62,!1,j),j),new A.jM(n,B.ai,!1,0,B.K,j,j,j,j,!0,B.f,B.a2,j,j),B.I,S.hr3(),!0,!0,j,j,j,j,j,j,!1,B.jA,j,new A.c0("chip-"+r,a0),w),B.b6,B.iU,j,new A.c0("t"+r+"-"+q,a0),v))}++u}g=A.bW(B.fH,a1,B.bq,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a_,j,B.ab,B.t,e,j)},
$S:66}
C.cmq.prototype={
$1(d){return new A.t(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:741}
C.cmj.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.giT().length!==0&&!B.d.t(t.giT(),-1)
return A.b4(p,p,p,new C.bb7(q.b,o,v,w,p),B.ax)},
$S:63}
C.cml.prototype={
$1(d){return this.a.giT()[this.b]===-1},
$S:z+30}
C.cmm.prototype={
$1(d){return this.a.cNs(this.b,d.a)},
$S:z+31}
C.cmk.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.giT()[t]!==-1,r=A.m(18),q=e.length!==0?B.cI.j(0.3):B.K
if(s)w=v
else w=A.J(e.length!==0?B.cI:B.jM,B.r,2)
u=s?A.ls(new C.cmi(),A.at(new C.Q4(u.gaDV()[u.giT()[t]].b,u.gaDV()[u.giT()[t]].a,62,!1,v),v,v,v),B.lp,B.iU,v,v,new A.bp(0.3,1,x.X),x.i):D.b8f
return A.dd(v,u,v,v,B.b6,new A.o(q,v,w,r,v,v,B.n),B.a2,v,100,v,v,v,v,88)},
$S:1942}
C.cmi.prototype={
$3(d,e,f){return A.ed(B.A,f,e,null,null)},
$S:110}
C.cmn.prototype={
$3(d,e,f){return A.dP(f,new A.t(Math.sin(e*24)*8*(1-e),0))},
$S:110}
C.cLQ.prototype={
$1(d){return d>=1},
$S:115}
C.cBn.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkI()[w.e].d.length)w.m(new C.cBm(w))},
$S:11}
C.cBm.prototype={
$0(){return this.a.f++},
$S:0}
C.cBv.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cBw.prototype={
$0(){var w=this.a,v=this.b
w.z.M(0,v)
w.Q=v},
$S:0}
C.cBx.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cBu(w))},
$S:0}
C.cBu.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cBy.prototype={
$0(){return this.a.f++},
$S:0}
C.cBz.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cBA.prototype={
$0(){},
$S:0}
C.cBB.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a9(0)
w.as=!1
w.ay=0},
$S:0}
C.cBp.prototype={
$0(){return A.a4(this.a,!1).ic()},
$S:0}
C.cBq.prototype={
$3(d,e,f){var w=null
return A.ls(new C.cBo(this.a,e),w,B.b6,B.hr,w,w,new A.bp(w,this.b,x.X),x.i)},
$S:1943}
C.cBo.prototype={
$3(d,e,f){var w,v,u=null,t=this.a,s=B.cI.j(t.as?0.6:0.15)
s=A.a([new A.ac(0,B.G,s,B.I,t.as?40:18)],x.V)
w=B.w.j(e)
v=this.b
v=A.TF(v,v,B.Vc)
return A.p(u,A.hT(new A.Bg(new A.xn(w,B.L6,u,B.Xa),H.bV8(A.b4(u,u,u,new C.aAr(t.gkI()[t.e].c,t.as,u),B.ax),v),u),B.ap),B.f,u,u,new A.o(u,u,u,u,s,u,B.a6),u,190,u,u,u,u,u,190)},
$S:1944}
C.cBr.prototype={
$3(d,e,f){return A.d9(A.dP(f,new A.t(0,14*(1-e))),e)},
$S:100}
C.cBs.prototype={
$3(d,e,f){return A.dP(f,new A.t(Math.sin(e*22)*8*(1-e),0))},
$S:110}
C.cBt.prototype={
$0(){return this.a.bnM(this.b)},
$S:0}
C.f_f.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.amb$)
v.amb$=w
v.pU$.sp(0,w)
v.apO(u)},
$S:9}
C.f9j.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a4(0)
w.a.$0()},
$S:11}
C.bQq.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bQp())},
$S:0}
C.bQp.prototype={
$0(){},
$S:0}
C.bQn.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bQl.prototype={
$0(){},
$S:0}
C.bQm.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMt()
w=s+1>=r.length?3:5
break
case 3:q=C.bEC(p.gaoD(0),0,r.length)
p.m(new C.bQi(p,q))
o=p
w=6
return A.b(C.Bq(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.Br(s.d,s.c.a,"school",p.gaoD(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bQj())
w=4
break
case 5:p.m(new C.bQk(p))
p.gqc().Vq(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bQi.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bQj.prototype={
$0(){},
$S:0}
C.bQk.prototype={
$0(){return this.a.x++},
$S:0}
C.bQo.prototype={
$0(){return this.a.KG(this.b)},
$S:0}
C.bQh.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ic()},
$S:0}
C.f_g.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.t(t,s),q=v.b,p=v.d,o=p?C.hrd(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.Dz
C.RS(q,D.egh,0,0.2,-0.6,-0.2,null,w,D.ef2,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a8(0,new A.t(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.I()
p.r=D.Fw.gp(0)
p.c=3
p.d=B.bE
q.bo(new A.t(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f_h.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.RS(this.a,D.efm,0,u,0.7,-0.5,null,null,D.IW,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f_i.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.RS(this.a,D.eh3,0,0,0.8,-0.5,null,null,D.IW,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f_j.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.RS(w.b,D.egb,0,v,-0.8,-0.5,null,null,D.IW,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f_k.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.t(34,-122+Math.sin(w*5)*5)
else v=v?D.egf:D.Dz
C.RS(p,D.efG,0,t,0,-0.6,null,v,D.IW,3,0,s,1.3,u,0,w,0)
q=q.c9_(new A.t(222,455),9)
$.S()
w=A.I()
w.r=B.cI.gp(0)
p.aG(q,w)},
$S:0}
C.f_l.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:749}
C.bQ3.prototype={
$2(d,e){return d+e},
$S:70}
C.bQe.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bQf.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bQg.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.giT()[u.b]=s
t.giT()[u.d]=t.y
w=t.as
v=t.pU$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bQa.prototype={
$1(d){return d},
$S:119}
C.bQ9.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.pU$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bQb.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bQc.prototype={
$0(){},
$S:0}
C.bQd.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.Fk(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cu(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a9(0)},
$S:0}
C.bQ5.prototype={
$0(){return A.a4(this.a,!1).ic()},
$S:0}
C.bQ6.prototype={
$2(d,e){var w=this.a
w=w.gkI()[w.f].e
return B.o.aK(w[d],w[e])},
$S:70}
C.bQ7.prototype={
$2(d,e){var w=null,v=C.h3e(new A.au(A.aR(1/0,e.a,e.b),A.aR(1/0,e.c,e.d))),u=this.a
return A.aB(B.c8,new A.ex(A.b4(w,w,w,new C.bif(u,u.pU$),B.ax),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bQ4(u,v),w,w,w,w,!1,B.a4)},
$S:37}
C.bQ4.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.giT().length
u=B.o.E(B.k.bh((t.a-s.a)/r/450*v),0,v-1)
w.cY_(w.giT()[u])}},
$S:23}
C.bQ8.prototype={
$1(d){var w=this.a
return w.gkI()[w.f].d[d]},
$S:78}
C.dn9.prototype={
$2(d,e){return 0},
$S:70}
C.bPQ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bPP())},
$S:0}
C.bPP.prototype={
$0(){},
$S:0}
C.bPO.prototype={
$0(){},
$S:0}
C.bPI.prototype={
$0(){},
$S:0}
C.bPJ.prototype={
$0(){},
$S:0}
C.bPN.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.Ay},
$S:0}
C.bPM.prototype={
$1(d){var w=null,v=this.a.gqc(),u=A.d(d,w,w,w,w,w,w,D.aSo,w,w,w),t=v.gbke(0)
return A.aB(B.c8,A.x(A.a([u,B.bD,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aSE,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbq3(v),w,w,w,w,w,w,!1,B.a4)},
$S:139}
C.bPK.prototype={
$0(){return this.a.KG(this.b)},
$S:0}
C.bPL.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ic()},
$S:0}
C.bPH.prototype={
$0(){return A.a4(this.a,!1).ic()},
$S:0}
C.dXj.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dXk.prototype={
$1(d){return this.a},
$S:39}
C.dXl.prototype={
$0(){var w=this.a
return w.d=w.gSr().bcA(this.b)},
$S:0}
C.dXh.prototype={
$1(d){return new C.T7(this.a,null)},
$S:z+32}
C.dXi.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.dXg.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hl,w,w,w)
return A.en(A.a([A.bN(!1,E.aU0,w,w,!0,w,w,new C.dXe(d),w,w),A.bN(!1,D.fHY,w,w,!0,w,w,new C.dXf(d),w,w)],x.p),w,w,D.fq,v,w,w,w,w,D.fuI,w)},
$S:18}
C.dXe.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dXf.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dXd.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dXm.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.dXn.prototype={
$0(){var w=this.a,v=this.b,u=C.bCl(v,10,w.r,!1)
return w.u7(C.hbJ(w.a.d,"kahoot",u,w.gb4k(),v.b,"Family Kahoot",v.a))},
$S:0}
C.dXo.prototype={
$0(){var w=this.a
return w.u7(new C.akZ(this.b,w.a.d,w.r,null))},
$S:0}
C.dXp.prototype={
$0(){var w=this.a
return w.u7(new C.ajb(this.b,w.a.d,w.r,null))},
$S:0}
C.dXs.prototype={
$0(){var w=this.a
return w.u7(new C.atG(this.b,w.a.d,w.r,null))},
$S:0}
C.dXt.prototype={
$0(){var w=this.a
return w.u7(new C.axB(this.b,w.a.d,w.r,null))},
$S:0}
C.dXu.prototype={
$0(){var w=this.a
return w.u7(new C.al1(this.b,w.a.d,w.r,null))},
$S:0}
C.dXv.prototype={
$0(){var w=this.a
return w.u7(new C.al5(this.b,w.a.d,w.r,null))},
$S:0}
C.dXw.prototype={
$0(){var w=this.a
return w.u7(new C.al7(this.b,w.a.d,w.r,null))},
$S:0}
C.dXx.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.cYj()
return v.u7(C.hbJ(v.a.d,"creator_"+u.a,w,v.gb4k(),"A game by the family",t,this.c.a))},
$S:0}
C.dXy.prototype={
$0(){return this.a.Ot(this.b)},
$S:0}
C.dXz.prototype={
$0(){return this.a.Xj(0,this.b)},
$S:0}
C.dXq.prototype={
$0(){return this.a.Ot(null)},
$S:0}
C.dXr.prototype={
$0(){return this.a.K(x.q).f.U(D.f8y)},
$S:0}
C.bQ1.prototype={
$0(){var w=this.a
w.d=D.aXX
w.z=3},
$S:0}
C.bQ2.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a4(0)
w.aO6()}else w.m(new C.bQ0(w))},
$S:11}
C.bQ0.prototype={
$0(){return this.a.z--},
$S:0}
C.bPS.prototype={
$0(){var w=this.a
w.d=D.ab4
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bPT.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bPR(w))
if(w.as<=0){d.a4(0)
w.b4g(-1)}},
$S:11}
C.bPR.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bPY.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.VO},
$S:0}
C.bPZ.prototype={
$0(){return this.a.e++},
$S:0}
C.bPV.prototype={
$0(){var w=this.a
w.d=D.aXY
w.ay=this.b},
$S:0}
C.bPW.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bQ_.prototype={
$2(d,e){return B.o.aK(e.b,d.b)},
$S:1945}
C.bPX.prototype={
$0(){return this.a.KG(this.b)},
$S:0}
C.bPU.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ic()},
$S:0}
C.bPs.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.as(new A.bb(s,B.b3,B.aO),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.M)(t),++v){u=t[v]
s.push(new A.as(new A.bb(u,B.b3,B.aO),r))}return s},
$S:1946}
C.bPt.prototype={
$0(){return this.a.gCH().c.push(C.fY5(null,0,20,""))},
$S:0}
C.bPD.prototype={
$1(d){var w=null
return A.br(w,new A.b5(4,A.m(12),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.ds,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.UJ,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:249}
C.bPC.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gCH().c,m=this.b,l=n[m],k=o.cbD(l),j=B.c.j(0.06),i=A.m(18),h=A.J(B.aZ,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.K5,p,p,p),B.b0],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.ap_,p,p,p,new C.bPx(o,m),p,p,p,p,p,p))
n=J.a5(k)
m=this.c
f=A.a([A.B(f,B.m,p,B.e,B.i,0,p,p),A.aM(p,B.Y,!1,p,!0,B.t,p,A.aN(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bPy(l),p,p,p,!1,p,p,!1,p,!0,p,B.a9,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a3,p,B.ao,p,p,p,p),B.O],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aAF[v]
t=D.aAr[v]
s=v+1
f.push(new A.D(B.eH,new A.cd(B.aM,B.e,B.i,B.m,p,B.p,p,0,A.a([new A.y(u,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p),B.ac,new A.bA(1,B.bc,A.aM(p,B.Y,!1,p,!0,B.t,p,A.aN(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bPz(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.a9,p,p,p,p,p,p,p,p,p,p,p,B.df,!0,B.a3,p,B.ao,p,p,p,p),p),new Aq.OM(v,l.c,new C.bPA(o,l),p,!1,D.ls,p,p,p,p,p,!1,!1,p,K.aYl,p,p,p,p,p,w)],g),p),p))}f.push(D.fA7)
f.push(B.am)
n=A.a([D.ftN,B.ac],g)
for(r=0;r<3;++r){q=D.c8M[r]
n.push(new A.D(B.fB,A.j0(p,p,p,new A.y(""+q+"s",p,p,p,p,p,p,p,p,p,p,p),p,new C.bPB(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.B(n,B.m,p,B.e,B.i,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kE,B.bf,p,p,p)},
$S:160}
C.bPx.prototype={
$0(){var w=this.a
return w.m(new C.bPw(w,this.b))},
$S:0}
C.bPw.prototype={
$0(){return B.d.cE(this.a.gCH().c,this.b)},
$S:0}
C.bPy.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bPz.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bPA.prototype={
$1(d){return this.a.m(new C.bPv(this.b,d))},
$S:187}
C.bPv.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bPB.prototype={
$1(d){return this.a.m(new C.bPu(this.b,this.c))},
$S:8}
C.bPu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dYZ.prototype={
$0(){var w=this.a
w.w3()
w.a.bu()
w.a.q5()},
$S:0}
C.dYY.prototype={
$0(){var w=this.a
w.w3()
w.a.bu()
w.a.q5()},
$S:0}
C.dZ0.prototype={
$0(){var w=this,v=w.b
if(J.cL(v)||J.cs(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dZ1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZ2.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dYX.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dZ_.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.dZ4.prototype={
$0(){this.a.OP()
return null},
$S:0}
C.dZ3.prototype={
$0(){return this.a.EG(this.b)},
$S:0}
C.dYp.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bN(!1,B.di,w,w,!0,w,w,new C.dYn(d),w,w),r=A.bo(B.bP,w,w,w,w,w,w,w,w,w,w,w)
return A.en(A.a([s,A.bH(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.dYo(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.dYn.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dYo.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dYq.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cK7(this.b)},
$S:0}
C.dYk.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aTx(w.b,w.c,w.d)},
$S:9}
C.dXM.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.dXN.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dY3.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.GN(t.a.c),$async$$0)
case 2:s=r.pQ(q.dH(e,new C.dY1(t)))
if(s!=null&&t.c!=null)t.m(new C.dY2(t,s))
t.a.bu()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dY1.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dY2.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dY4.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dY5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dYj.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cKV(C.hrj(w),w)},
$S:0}
C.dY0.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Vt(u,w,C.aPA(u,w),new C.dY_(v),null)},
$S:z+37}
C.dY_.prototype={
$1(d){return this.blC(d)},
blC(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.dXZ(s,d))
w=3
return A.b(s.u3(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:542}
C.dXZ.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bcA(this.b)},
$S:0}
C.dYg.prototype={
$1(d){return d.as},
$S:z+1}
C.dYh.prototype={
$1(d){var w=this
return new A.dZ(new C.dYf(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.dYf.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e3:B.c,h=A.m(26),g=A.J(B.bP.j(0.5),B.r,1.5),f=A.p(k,D.bP_,B.f,k,k,new A.o(B.bP.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a1,k,k,k,A.l(k,k,j?B.bs:B.bm,k,k,k,k,k,k,k,k,12.5,k,k,B.P,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.B(A.a([f,B.bd,a0,A.aH(k,k,k,k,A.X(B.cz,j?B.bs:B.bm,k,k,k,k),k,k,k,new C.dY9(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.M)(v),++s){r=v[s]
q=t.a===r?B.bP:B.bP.j(0.1)
p=new A.aQ(20,20)
o=t.a===r
n=new A.ay(B.bP,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bP
a0.push(A.aB(k,A.dd(k,new A.y(m,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k),k,k,B.b6,new A.o(q,k,new A.bK(n,n,n,n),new A.bj(p,p,p,p),k,k,B.n),B.hq,k,k,k,B.BK,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dYa(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bW(B.bC,a0,B.bq,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c_T,new A.D(D.bzO,f,k),new A.D(D.bzF,e,k),new A.D(B.ro,a0,k),new A.D(W.akz,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bm,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(A2.amW,j?B.bs:B.bm,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bzH,A.B(A.a([a0,B.at,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.Y7(k,B.bP,k,k,!1,B.y,k,k,k,k,k,k,new C.dYb(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.i,0,k,k),k))}f.push(B.aA)
j=A.m(20)
e=A.a([new A.ac(0,B.G,B.aD.j(0.35),B.j0,12)],x.V)
f.push(A.aB(k,A.p(k,A.B(A.a([D.fu8,B.bd,D.bDW,D.bPG],w),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c3B,B.n),k,k,k,B.hJ,B.bB,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dYc(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.vW,A.B(A.a([A.E(A.dI(B.di,new C.dYd(a1),k),1),B.at,A.E(A.bH(L.aUq,k,new C.dYe(t,a1),A.bo(B.bP,k,k,k,k,k,B.ck,k,k,k,k,k)),1)],w),B.m,k,B.e,B.i,0,k,k),k))
return A.bl(!0,A.p(k,A.ce(A.x(f,B.E,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.ap,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.y7,k,k,k,k),!0,!1,B.af,!0,!0)},
$S:87}
C.dY9.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dYa.prototype={
$0(){return this.b.$1(new C.dY8(this.a,this.c))},
$S:0}
C.dY8.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.dYb.prototype={
$1(d){var w=this.a
w.m(new C.dY6(w,d))
this.b.$1(new C.dY7())},
$S:8}
C.dY6.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dY7.prototype={
$0(){},
$S:0}
C.dYc.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(new A.aGt(!0,w))
return null},
$S:0}
C.dYd.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dYe.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(new A.aGt(!1,w))
return null},
$S:0}
C.dYi.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cKI(this.b.b)
w.r.a9(0)},
$S:0}
C.dXA.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ai5(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hkP(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.dXB.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aEp(w)},
$S:0}
C.dYs.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.adp(this.b,w,this.c,null)},
$S:z+39}
C.dYm.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e3:B.c,t=A.m(20),s=A.X(B.lD,B.aW,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ae,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.x(p,B.m,w,B.e,B.Q,0,B.p)
return A.en(A.a([A.bH(D.fLG,w,new C.dYl(d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w))],o),B.b8,w,u,v,w,s,w,new A.b7(t,B.a0),r,w)},
$S:18}
C.dYl.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dXC.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dXD.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dXE.prototype={
$1(d){return d.a},
$S:z+8}
C.dXF.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.M)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hU(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aEp(w)},
$S:0}
C.dXJ.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ai5(q)
w=A.T(q).k("Z<1>")
q=A.C(new A.Z(q,new C.dXH(r),w),w.k("L.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hkP(v.e,null,r,v.f,v.r,new C.dXI(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.dXI.prototype={
$0(){return this.a.aar(this.b)},
$S:0}
C.dXH.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dXK.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("N<1,hU>")
w=A.C(new A.N(w,new C.dXG(this.b),v),v.k("ak.E"))
u.d=t.aEp(w)},
$S:0}
C.dXG.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.dYr.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dXW.prototype={
$1(d){return d.length!==0},
$S:3}
C.dXX.prototype={
$1(d){var w=this
return new A.dZ(new C.dXV(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dXV.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e3:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.dXR(u,e,o),A.T(o).k("N<1,v>")))
p.push(B.O)
u=w.d
p.push(A.aM(v,B.Y,!1,v,!0,B.t,v,A.aN(),u,v,v,v,v,v,2,A.br(v,new A.b5(4,A.m(12),B.dk),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.mk,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a3,v,B.ao,v,v,v,v))
p=A.x(p,B.ak,v,B.e,B.Q,0,B.p)
t=w.a
return A.en(A.a([A.bN(!1,B.di,v,v,!0,v,v,new C.dXS(d),v,v),A.bH(B.Kg,v,new C.dXT(t,u,o,e),A.bo(B.bP,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.fyw,v,new C.dXU(t,u,o,d),A.bo(B.aW,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:176}
C.dXR.prototype={
$1(d){var w=null
return A.dF(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bXJ,w,w,w,new C.dXQ(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1947}
C.dXQ.prototype={
$0(){return this.a.$1(new C.dXO(this.b,this.c))},
$S:0}
C.dXO.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dXS.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dXT.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dXP(w.c,u))
v.bO(0,B.c9)}},
$S:0}
C.dXP.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dXU.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a4(w.d,!1).O(!0)},
$S:0}
C.dXY.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cLm(this.b,D.u7,C.GL(v,w.a.c))},
$S:0}
C.dYz.prototype={
$1(d){return d.as},
$S:z+1}
C.dYA.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iR(this.b,w)},
$S:0}
C.dYB.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.ig5(v)
return w.Wa(v==null?null:v.a)},
$S:0}
C.dYC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hSX(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aR(1/0,e.a,e.b)
s=A.aR(1/0,e.c,e.d)
l.csX(new A.au(u,t),v.gbji(),new A.au(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cXb:D.cVo
q=A.J(s?B.ds:D.bfO,B.r,1)
p=A.m(22)
o=A.bT(0,A.b4(m,m,m,new C.bep(s,m),B.ax),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bx(p,new A.an(B.a_,m,B.ab,B.t,A.a([o,A.bT(0,A.uF(new A.Q(n,n,n,n),new A.a7(u,t,new C.bfk(l.d,v,l.f,w,new C.dYv(l),l.gccP(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bwN(s,new C.dYw(l,e),new C.dYx(l,e),new C.dYy(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b4,B.b7,B.x,r,m,m),B.n),m,m,m,Z.ajG,m,m,m,m)},
$S:232}
C.dYv.prototype={
$1(d){var w=this.a
w.m(new C.dYt(w,d))},
$S:2}
C.dYt.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.M(0,v)},
$S:0}
C.dYw.prototype={
$0(){var w=this.b
return this.a.baO(1.25,new A.au(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dYx.prototype={
$0(){var w=this.b
return this.a.baO(0.8,new A.au(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dYy.prototype={
$0(){var w=this,v=w.b
return w.a.aTx(new A.au(A.aR(1/0,v.a,v.b),A.aR(1/0,v.c,v.d)),new A.au(w.c,w.d),w.e.gbji())},
$S:0}
C.dYD.prototype={
$0(){var w=this.a
return w.m(new C.dYu(w))},
$S:0}
C.dYu.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dXL.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fH(new A.fB(s.c)),$async$$0)
case 2:t.xZ("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dcG.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bj3(u,C.hvx(v.c,u),new C.dcF(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dcF.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dcH.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bmg(d.d,d.c,u.f.t(0,d.a),new C.dcE(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dcE.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fyo.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.pQ(new A.cQ(new A.Z(v,new C.fyp(d),w.k("Z<1>")),new C.fyq(),w.k("cQ<1,n>")))},
$S:z+19}
C.fyp.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fyq.prototype={
$1(d){return d.a},
$S:z+8}
C.fym.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fyn.prototype={
$1(d){return d.b},
$S:z+8}
C.fyt.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.pQ(new A.cQ(new A.Z(v,new C.fyu(d),w.k("Z<1>")),new C.fyv(),w.k("cQ<1,n>")))},
$S:z+19}
C.fyu.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fyv.prototype={
$1(d){return d.a},
$S:z+8}
C.fyr.prototype={
$1(d){var w,v=A.eC([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.aj(0,w)&&v.M(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fys.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dcJ.prototype={
$0(){return this.a},
$S:z+46}
C.dd_.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.aj(0,d)},
$S:241}
C.dcS.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.dcT()),v=J.a5(w)
if(!v.t(w,e))v.M(w,e)},
$S:112}
C.dcT.prototype={
$0(){return A.a([],x.s)},
$S:751}
C.dcR.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f0(w,e)
return w===!0},
$S:292}
C.dcK.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dcQ.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dcP.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.M(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.CV:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.Y:v)
while(v.C()){t=v.gR(v)
if(e.t(0,t))continue
e.M(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.CV:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1949}
C.dcL.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dcU.prototype={
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
break}A:{s=u.gR(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.M(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aW(t==null?D.CV:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.b3(w,new C.dcV(r)))w.push(r)}}B.d.bs(w,new C.dcW(a8))
B.d.aY(w,new C.dcX())
q=C.hSW(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.M)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eMo],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.M)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.z(-p,p)],x.G)
a8=x.n
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.M)(n),++m){i=n[m]
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
else a8.n(0,a9,new A.bpk(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1950}
C.dcV.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dcW.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.dcX.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.dcY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a5(n),v=o.c,u=-1/0,t=0;t<w.gL(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a6(v).k("bc<2>")).cI(0,0,B.pG)+88-w.gI(n).a}else u=0
for(w=J.a5(n),v=o.c,t=0;t<w.gL(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:697}
C.dcZ.prototype={
$1(d){return 16+d*156},
$S:251}
C.dcI.prototype={
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
t.n(0,d,new C.G3(r,new A.t(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.G3(s,new A.t(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.G3(s,new A.t(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.Y:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Km(d,new A.t(e+t,w),s,s.length))}},
$S:184}
C.dcM.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aJB(new A.t(v.a,v.b+28),new A.t(w.a,w.b+28),!0,null))},
$S:112}
C.dcN.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dcO.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:752}
C.dd0.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:752}
C.dd1.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:464}
C.dd2.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:188}
C.dd3.prototype={
$1(d){return d>=0.5},
$S:115}
C.ff2.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hc(A.aO(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.cp,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1952}
C.eQm.prototype={
$1(d){var w=null,v=A.m(8),u=B.bP.j(0.12),t=A.m(8)
return new A.D(B.nm,A.aO(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fjZ,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Ny,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eQl(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eQl.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dsP.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dsO.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nG,B.L,w,w)
return A.en(A.a([A.bN(!1,B.di,w,w,!0,w,w,new C.dsM(d),w,w),A.bN(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mx,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dsN(d),w,w)],x.p),B.b8,B.BH,w,u,D.bAI,w,D.bCF,new A.b7(v,B.a0),w,w)},
$S:18}
C.dsM.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dsN.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dsY.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dsZ.prototype={
$1(d){var w=this.a
return w.m(new C.dsX(w,d))},
$S:z+49}
C.dsX.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dt_.prototype={
$1(d){var w=null
return A.qw(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dt2.prototype={
$1(d){var w=this.a
return w.m(new C.dsW(w,d))},
$S:35}
C.dsW.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dt1.prototype={
$1(d){var w=null
return A.qw(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dt3.prototype={
$1(d){var w=this.a
return w.m(new C.dsV(w,d))},
$S:35}
C.dsV.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dt4.prototype={
$0(){var w=this.a
return w.m(new C.dsU(w))},
$S:0}
C.dsU.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dt5.prototype={
$0(){var w=this.a
return w.m(new C.dsT(w))},
$S:0}
C.dsT.prototype={
$0(){return++this.a.at},
$S:0}
C.dt6.prototype={
$0(){var w=this.a
return w.m(new C.dsS(w))},
$S:0}
C.dsS.prototype={
$0(){return--this.a.ax},
$S:0}
C.dt7.prototype={
$0(){var w=this.a
return w.m(new C.dsR(w))},
$S:0}
C.dsR.prototype={
$0(){return++this.a.ax},
$S:0}
C.dt8.prototype={
$1(d){var w=this.a
return w.m(new C.dsQ(w,d))},
$S:8}
C.dsQ.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dt0.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dt9.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bP.j(0.18)
else w=q.c.a?B.e3:B.c
v=A.m(12)
if(p)u=B.bP
else u=(q.c.a?B.e8:B.bO).j(0.85)
u=A.J(u,B.r,p?1.5:1)
if(p)t=B.bP
else t=q.c.a?B.bs:B.bm
t=A.X(f,t,r,r,r,18)
if(p)s=B.bP
else s=q.c.a?B.bs:B.bm
return A.E(A.aG(!1,B.a2,!0,r,A.aO(!1,o,!0,A.dd(r,A.x(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.i,0,B.p),r,r,B.b6,new A.o(w,r,u,v,r,r,B.n),B.eN,r,r,r,B.jP,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dta(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dta.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dtj.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cci.prototype={
$2(d,e){return new A.bz(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:98}
C.ccp.prototype={
$1(d){return d.ag()},
$S:z+5}
C.ccq.prototype={
$2(d,e){var w=J.b6(e,new C.cco(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bz(d,w,x.d2)},
$S:z+53}
C.cco.prototype={
$1(d){return d.ag()},
$S:z+12}
C.cck.prototype={
$1(d){return C.ala(A.a2(d,x.N,x.z))},
$S:z+9}
C.ccl.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.ccm.prototype={
$1(d){return C.hbI(A.a2(d,x.N,x.z))},
$S:z+11}
C.ccn.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.ccu.prototype={
$1(d){return new A.aGF(d.f.length,d.a,d.b)},
$S:z+55}
C.ccv.prototype={
$2(d,e){return B.a.aK(d.c,e.c)},
$S:644}
C.ccr.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.ccs.prototype={
$1(d){return d.cKk(C.GL(d,this.a))},
$S:z+85}
C.dYM.prototype={
$1(d){return C.uc(d,this.a.a.c)},
$S:z+3}
C.dYN.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dYR.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dYS.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dYJ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_S(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yy("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pe(r.c,r.e),$async$$0)
case 4:s.yy(p)
w=5
return A.b(s.JO(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dYK.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_S(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yy("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pe(r.c,r.e),$async$$0)
case 4:s.yy(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dYL.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Vw(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yy("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yy("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yy("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.JO(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yy(B.a.ea(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dYQ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_R(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yy("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a4(r,!1).cc(A.dX(new C.dYP(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pe(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dYP.prototype={
$1(d){var w=this.b
return new C.a_E(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.dYO.prototype={
$1(d){return D.hke},
$S:z+58}
C.dYU.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dYV.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dYT(w,d)
return new A.D(B.d3,new C.bfo(this.b,d.c,d.a,w,null),null)},
$S:1953}
C.dYT.prototype={
$0(){return this.a.XW(this.b.b)},
$S:0}
C.dYE.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dYF.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dYG.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dYH.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dYI.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dYW.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cT(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a4(this.b,!1).O(s)
return}},
$S:189}
C.dKB.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dKC.prototype={
$0(){return B.d.gI(D.a4Y)},
$S:z+60}
C.dKD.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.at(A.X(this.b.d,B.c.j(0.95),w,w,D.d2O,44),w,w,w),w,w,new C.bk9(u,t,v,w),B.ax)},
$S:63}
C.fOT.prototype={
$1(d){return A.p_(new C.fOS(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:143}
C.fOS.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e3:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rU,24)],x.V),o=r?B.e8:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aW.j(0.25),B.bP.j(0.18)],x.O)
w=A.p(t,D.bS3,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a9(B.a5,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.W,o,new A.D(E.akE,A.B(A.a([w,B.bd,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bs:B.bm,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.m,t,B.e,B.i,0,t,t),t),A.E(A.iy(!0,t,e,B.y,D.f6D,new C.fOR(this.b,s),20,B.akd,t,B.ah,!1),1)],u),B.m,t,B.e,B.i,0,B.p),B.f,t,t,new A.o(q,t,t,B.kU,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:117}
C.fOR.prototype={
$2(d,e){var w=null,v=D.a4Y[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.J(s?B.e8:B.bO,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ep,8)],x.V),p=A.m(15),o=A.E(new C.a6w(v.a,!0,w),1),n=s?B.jJ:B.ja,m=A.d(v.b,w,1,B.a1,w,w,w,A.l(w,w,s?B.aP:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a2,!0,w,A.aO(!1,u,!0,A.eJ(A.bx(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a1,w,w,w,A.l(w,w,s?B.bs:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.l5,w,w,w)],l),B.ak,w,B.e,B.i,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fOQ(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ai)},
$S:79}
C.fOQ.prototype={
$0(){A.a4(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.ckO.prototype={
$0(){return this.a.agw(this.b)},
$S:0}
C.fOf.prototype={
$1(d){return D.hfk},
$S:z+61}
C.fVL.prototype={
$1(d){var w=this
return new C.a1r(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fOk.prototype={
$1(d){return new C.Zh(this.a,null)},
$S:z+63}
C.fOj.prototype={
$1(d){return D.hgk},
$S:z+64}
C.d4n.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d4o.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d4m(w,d))},
$S:35}
C.d4m.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d4p.prototype={
$1(d){return this.a.Ko()},
$S:2}
C.d4q.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d4j.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d4k.prototype={
$1(d){return this.a.Ko()},
$S:2}
C.d4l.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cCy.prototype={
$0(){},
$S:0}
C.cCE.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cCF.prototype={
$0(){return this.a.aOY(-1)},
$S:0}
C.cCG.prototype={
$1(d){return this.a.m(new C.cCD())},
$S:2}
C.cCD.prototype={
$0(){},
$S:0}
C.cCH.prototype={
$0(){return this.a.aOY(1)},
$S:0}
C.cCI.prototype={
$1(d){return this.a.m(new C.cCC())},
$S:2}
C.cCC.prototype={
$0(){},
$S:0}
C.cCJ.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aW.j(0.2)
if(s)v=B.aW
else v=this.b.a?B.e8:B.bO
return A.uv(u,u,B.b_,r,u,new C.cCB(t,d),B.yj,s,w,u,new A.ay(v,1,B.r,-1),B.cd)},
$S:1954}
C.cCB.prototype={
$1(d){var w=this.a
return w.m(new C.cCz(w,this.b))},
$S:8}
C.cCz.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cCK.prototype={
$1(d){return this.a.m(new C.cCA())},
$S:2}
C.cCA.prototype={
$0(){},
$S:0}
C.cCL.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fem.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a4(this.b,!1).O(w)},
$S:2}
C.fen.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.feo.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a4(this.b,!1).O(w)},
$S:0}
C.fek.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbAe()
w=w.e
s=A.m(B.o.E(v-1,0,v))
return A.b4(new A.D(D.bCE,new A.ex(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bwA(p,v,this.b.a,u,t,r),r,r,B.ax)},
$S:63}
C.fel.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dx.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ar(B.aW,B.bP,w)
s.toString
s=A.a([B.b_,s,B.aW],x.O)
return A.aG(!1,B.a2,!0,p,A.aO(!1,v,!0,A.eJ(D.ekP,r,new A.o(r,r,A.J(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.dh(-1.2+t,-0.5),new A.dh(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ai)},
$S:137}
C.fMH.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:73}
C.eNu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eNl.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eNm.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eNs.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.dZ(new C.eNr(w,this.b),null)},
$S:20}
C.eNr.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e3:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eS(w,u,new A.D(B.akw,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ae,C.hhE(new C.eNo(r,e),r.a),B.aA,A.B(A.a([A.E(A.dI(B.di,new C.eNp(d),w),1),B.at,A.E(A.bH(B.V5,w,new C.eNq(r,d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.i,0,w,w)],q),B.ak,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d8,w,new A.b7(t,B.a0),w)},
$S:101}
C.eNo.prototype={
$1(d){return this.b.$1(new C.eNn(this.a,d))},
$S:35}
C.eNn.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eNp.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eNq.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.eNt.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.T4(this.b)},
$S:0}
C.eNg.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bcG(w)},
$S:0}
C.eNk.prototype={
$1(d){return this.blZ(d)},
blZ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Ly(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iR(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eNj.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.eNi(this.b),v),v.k("L.E"))
u.d=t.bcG(w)},
$S:0}
C.eNi.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eNv.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iR(this.b,w)},
$S:0}
C.eNw.prototype={
$1(d){return this.a.bEm(d,this.b)},
$S:z+67}
C.eNh.prototype={
$0(){return this.a.aaq(this.b)},
$S:0}
C.fVB.prototype={
$1(d){return new C.adK(this.a,this.b,this.c,null)},
$S:z+68}
C.eNy.prototype={
$0(){return this.a.a_H(this.b)},
$S:0}
C.eNz.prototype={
$0(){return this.a.Qm(this.b)},
$S:0}
C.eNA.prototype={
$0(){return this.a.EB(this.b)},
$S:0}
C.eNB.prototype={
$0(){return this.a.a_I(this.b)},
$S:0}
C.eNx.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eNb.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eNc.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eNd.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eNf.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qb(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eNe(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eNe.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eNY.prototype={
$2(d,e){return d+e.gxa()},
$S:z+71}
C.eNU.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eNV.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eNF.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e3:B.c,s=A.m(24),r=A.p(v,D.bSv,B.f,v,v,new A.o(B.aw.j(u?0.18:0.08),v,A.J(B.aw.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.av
u=u?B.e8:B.bO
w=x.p
return A.eS(v,t,new A.D(B.yi,A.x(A.a([r,B.aN,q,B.O,p,B.d4,A.B(A.a([A.E(A.dI(B.nJ,new C.eND(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fd,v,new A.b7(A.m(14),B.a0),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.at,A.E(A.bH(D.fPy,v,new C.eNE(d),A.bo(B.aw,v,v,v,v,v,B.fd,v,new A.b7(A.m(14),B.a0),v,v,v)),1)],w),B.m,v,B.e,B.i,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d8,v,new A.b7(s,B.a0),v)},
$S:48}
C.eND.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.eNE.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eNO.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e3:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fZ,28)],x.V),g=k?D.d9P:B.a4k,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.f0j,B.au,new A.bM(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cy,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.i,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.ay,B.aE,B.x,g,m,m),B.n),m,m,m,m,E.akB,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b5J(B.b5,B.jf,new C.eNL(v,d),l,"Camera import","Scan QR"),1),B.at,A.E(v.b5J(B.cw,R.yX,new C.eNM(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aw.j(k?0.14:0.06)
q=A.m(16)
p=A.J(B.aw.j(0.28),B.r,1)
o=A.p(m,D.bRS,B.f,m,m,new A.o(B.aw.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bm,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bl(!0,new A.D(B.vT,A.p(m,A.x(A.a([g,new A.D(B.akx,A.x(A.a([w,B.W,u,B.bv,t,B.W,A.aG(!1,B.a2,!0,m,A.aO(!1,s,!0,A.p(m,A.B(A.a([o,B.bd,n,A.X(B.eE,k?B.bs:B.bm,m,m,m,m)],f),B.m,m,B.e,B.i,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eNN(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ai)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:25}
C.eNL.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vF("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eNM.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vF("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eNN.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.O6(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eNJ.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e3:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.f_,24)],x.V),k=o?B.e8:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bs:B.bm
u=A.bx(w,new A.a7(48,48,C.aQS(!0,A.m(12),48,P.O9,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.a1,q,q,q,A.l(q,q,o?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AY(v.gxa())
s=x.p
r=this.a
return A.bl(!0,new A.D(B.vT,A.p(q,A.x(A.a([B.W,k,new A.D(D.aku,A.B(A.a([u,B.bd,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bs:B.bm,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.m,q,B.e,B.i,0,q,q),q),B.Bx,r.cn2(B.ur,B.aW,new C.eNH(d),p,"QR code or backup file","Transfer project"),r.b2K(!0,B.e9,B.aw,new C.eNI(d),p,"Remove from this device","Delete project"),B.W],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:25}
C.eNH.prototype={
$0(){A.a4(this.a,!1).O("transfer")
return null},
$S:0}
C.eNI.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
C.eNK.prototype={
$1(d){return this.bm_(d)},
bm_(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Ly(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vT(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eO0.prototype={
$0(){var w=this.a
w.a.bu()
w.m(new C.eO_(w))},
$S:0}
C.eO_.prototype={
$0(){return this.a.r++},
$S:0}
C.eO1.prototype={
$0(){var w=this.a
return w.m(new C.eNZ(w))},
$S:0}
C.eNZ.prototype={
$0(){return this.a.r++},
$S:0}
C.eNC.prototype={
$0(){var w=this.a.c
w.toString
return A.iR(w,null)},
$S:0}
C.eNG.prototype={
$0(){return this.a.cgk(this.b)},
$S:0}
C.eNX.prototype={
$0(){var w=this.a
return w.m(new C.eNW(w,this.b))},
$S:0}
C.eNW.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eNR.prototype={
$0(){return this.a.vF("scan")},
$S:0}
C.eNS.prototype={
$0(){return this.a.vF("file")},
$S:0}
C.eNT.prototype={
$1(d){return this.a.cn3(d,this.b)},
$S:z+72}
C.eNQ.prototype={
$0(){return this.a.EF(this.b)},
$S:0}
C.eNP.prototype={
$0(){return this.a.a0b(this.b,this.c)},
$S:0}
C.cBY.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cBX.prototype={
$1(d){return d.ag()},
$S:z+74}
C.cBV.prototype={
$1(d){return C.hBo(A.a2(d,x.N,x.z))},
$S:z+75}
C.cBW.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fxo.prototype={
$1(d){return d.y===D.kG},
$S:z+3}
C.fWl.prototype={
$1(d){return C.aPA(d,this.a)},
$S:z+3}
C.fvi.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bQx.prototype={
$1(d){return!d.as},
$S:z+1}
C.bQw.prototype={
$1(d){return d.ag()},
$S:z+23}
C.bQt.prototype={
$1(d){return C.hbK(A.a2(d,x.N,x.z))},
$S:z+24}
C.bQu.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bQv.prototype={
$1(d){return J.k(d)},
$S:17}
C.fm_.prototype={
$2(d,e){return e.e.aK(0,d.e)},
$S:z+25}
C.fhQ.prototype={
$1(d){return C.h1W(A.a2(d,x.N,x.z))},
$S:z+79}
C.fhR.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fhS.prototype={
$2(d,e){return e.e.aK(0,d.e)},
$S:z+25}
C.fO6.prototype={
$1(d){return J.k(d)},
$S:17}
C.fO7.prototype={
$1(d){return d.a},
$S:z+81}
C.fO8.prototype={
$1(d){return d.length!==0},
$S:3}
C.fO9.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+10}
C.fOa.prototype={
$1(d){return d.T4(null).ag()},
$S:z+82}
C.fWj.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fxS.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fAH.prototype={
$1(d){return C.ala(A.a2(d,x.N,x.z))},
$S:z+9}
C.fAI.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fAJ.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fAK.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fAL.prototype={
$1(d){return C.uc(d,this.a)},
$S:z+3}
C.fNU.prototype={
$1(d){return C.uc(d,this.a)},
$S:z+3}
C.fWe.prototype={
$1(d){return C.ala(A.a2(d,x.N,x.z))},
$S:z+9}
C.fWf.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fWg.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fxz.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fxA.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fWp.prototype={
$1(d){return!d.as},
$S:z+1}
C.fx3.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fx4.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fx5.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.fVM.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fBv.prototype={
$1(d){return d.Q},
$S:z+15}
C.fNN.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fAE.prototype={
$1(d){return C.ala(A.a2(d,x.N,x.z))},
$S:z+9}
C.fAF.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fAG.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fNI.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fin.prototype={
$1(d){return d.length!==0},
$S:3}
C.fio.prototype={
$1(d){return C.hbK(A.a2(d,x.N,x.z))},
$S:z+24}
C.fip.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fiq.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fir.prototype={
$1(d){return d.length!==0},
$S:3}
C.fiE.prototype={
$2(d,e){return d.eP(new C.fiF(e))},
$S:1955}
C.fiF.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.ca},
$S:1956}
C.fiB.prototype={
$1(d){return C.hXD(d,this.a)},
$S:z+84}
C.fiC.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fiD.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fmG.prototype={
$1(d){return d.a},
$S:z+56}
C.fmH.prototype={
$1(d){return d.length!==0},
$S:3}
C.fmI.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fpq.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fuC.prototype={
$1(d){return C.hnb(d,C.GL(d,this.a))},
$S:z+5}
C.fuD.prototype={
$1(d){return C.hnc(d,C.GL(d,this.a))},
$S:z+5};(function aliases(){var w=C.aAt.prototype
w.btF=w.q
w=C.ayC.prototype
w.btA=w.q
w=C.aFS.prototype
w.bu2=w.q
w=C.aAu.prototype
w.btG=w.q
w=C.aAw.prototype
w.btH=w.q
w=C.aAx.prototype
w.btI=w.q
w=C.aM0.prototype
w.bwv=w.q
w=C.aO1.prototype
w.byJ=w.q
w=C.aO2.prototype
w.byK=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aDs.prototype,"gcjY","cjZ",28)
var r
w(r=C.aAs.prototype,"gccV","ccW",65)
v(r,"gaNc","NF",0)
v(r,"gcsg","AU",0)
v(r,"gbM5","Oj",0)
v(r,"gcGp","yz",0)
v(r,"gcm_","a0T",0)
v(r,"gbHw","O2",0)
v(r,"gbMv","Xo",0)
w(r,"gbRq","bRr",78)
v(r,"gbBT","zX",0)
v(C.aAv.prototype,"gcGl","Fx",0)
v(r=C.al_.prototype,"gbq5","bq6",2)
v(r,"gbpZ","bq_",2)
v(r,"gcHr","cHs",2)
u(r,"gq4","li",0)
u(r=C.ajc.prototype,"geW","h2",2)
w(r,"gc8X","c8Y",27)
u(C.atH.prototype,"gq4","li",0)
v(r=C.axC.prototype,"gcSS","cST",2)
u(r,"gq4","li",0)
u(C.aJF.prototype,"gbq3","bq4",2)
v(C.al8.prototype,"gBn","cHC",2)
u(r=C.al6.prototype,"gcIg","cIh",2)
u(r,"gq4","li",0)
v(r=C.al2.prototype,"gboY","boZ",2)
v(r,"gcNq","cNr",2)
u(r=C.al4.prototype,"geW","h2",2)
u(r,"gkv","cGZ",2)
v(r=C.al0.prototype,"gcGO","cGP",2)
u(r,"gbnS","jx",2)
v(r=C.aE0.prototype,"gag8","vU",0)
v(r,"gcfA","a02",0)
v(r,"gaRh","Ia",0)
v(r=C.aDY.prototype,"gcCu","a31",0)
v(r,"gag8","vU",0)
v(r,"gcqh","a1x",0)
v(r,"gcfv","b0Y",2)
v(r,"gcgx","a0g",0)
w(r,"gccP","ccQ",35)
v(r,"gbMn","If",0)
v(r,"gcDv","cDw",2)
v(r,"gc39","Z4",0)
w(r,"gcbj","cbk",36)
v(r,"gcfj","cfk",2)
v(r=C.aCr.prototype,"gc92","PW",0)
v(r,"gc94","c95",2)
v(r,"gbJ0","aa2",0)
v(r=C.aE_.prototype,"gbPS","XS",0)
v(r,"gc_p","Yx",0)
v(r,"gcwJ","a2p",0)
v(r,"gcsS","a20",0)
v(C.aDZ.prototype,"gcsA","ahS",0)
v(C.asV.prototype,"gcbh","a_F",0)
v(C.azc.prototype,"ga2L","Ko",2)
v(C.azb.prototype,"ga2L","Ko",2)
v(C.axQ.prototype,"ga2L","Ko",2)
v(r=C.aFr.prototype,"gb28","QS",0)
v(r,"gbAH","W4",0)
v(r,"gcgl","cgm",2)
w(C.aFq.prototype,"gcc9","cca",69)
t(C.aFs.prototype,"gaRb",0,0,null,["$1","$0"],["I9","bKh"],70,0,0)
s(C,"huB","i6z",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.aoI,C.us,C.nk,C.HU,C.aeV,C.Ke,C.ut,C.bR2,C.rX,C.bnw,C.alh,C.ad2,C.lh,C.bPE,C.at6,C.zc,C.ajX,C.Mc,C.b9e,C.a9c,C.bgs,C.af1,C.ayS,C.aeQ,C.aJF,C.Km,C.G3,C.bfm,C.aJB,C.apZ,C.dd4,C.lL,C.aTS,C.aTR,C.aRQ,C.tZ,C.r9,C.lt,C.hU,C.kM,C.aHz])
u(A.hL,[C.fFi,C.fFh,C.fFj,C.fOM,C.fto,C.ftp,C.ftu,C.fD1,C.fD0,C.fD_,C.c5L,C.fPi,C.fPa,C.fPm,C.fxH,C.dLh,C.dLc,C.dLd,C.dKQ,C.dKM,C.dLw,C.dLx,C.dLq,C.dLr,C.dLy,C.dLz,C.fyk,C.fAB,C.fAC,C.fNS,C.fWd,C.fxy,C.fOq,C.dch,C.dbE,C.dbN,C.dc3,C.dbJ,C.dbP,C.dbG,C.dbT,C.dbU,C.dbS,C.dc8,C.dc7,C.de2,C.de3,C.de4,C.dcv,C.dcA,C.dcz,C.cKM,C.cKO,C.d3B,C.d4_,C.d40,C.d43,C.d45,C.d46,C.d47,C.d49,C.d4a,C.bPo,C.bPi,C.fmn,C.fW6,C.fW7,C.fW8,C.fW3,C.fW9,C.fWa,C.fWb,C.fW2,C.fyS,C.fMU,C.fvj,C.fBu,C.bKE,C.fWv,C.fNp,C.bIT,C.bIO,C.bIQ,C.bIP,C.cmq,C.cml,C.cmm,C.cmk,C.cmi,C.cmn,C.cLQ,C.cBn,C.cBq,C.cBo,C.cBr,C.cBs,C.f_f,C.f9j,C.bQa,C.bQ4,C.bQ8,C.bPM,C.dXk,C.dXh,C.dXi,C.dXg,C.dXm,C.bQ2,C.bPT,C.bPD,C.bPC,C.bPy,C.bPz,C.bPA,C.bPB,C.dZ_,C.dYp,C.dYk,C.dXM,C.dY1,C.dY4,C.dY0,C.dY_,C.dYg,C.dYh,C.dYb,C.dXA,C.dYs,C.dYm,C.dXC,C.dXD,C.dXE,C.dXJ,C.dXH,C.dXG,C.dXW,C.dXX,C.dXR,C.dYz,C.dYv,C.dcG,C.dcH,C.fyo,C.fyp,C.fyq,C.fym,C.fyn,C.fyt,C.fyu,C.fyv,C.fyr,C.fys,C.dd_,C.dcQ,C.dcL,C.dcV,C.dcW,C.dcZ,C.dcN,C.dd1,C.dd2,C.dd3,C.ff2,C.eQm,C.dsO,C.dsY,C.dsZ,C.dt_,C.dt2,C.dt1,C.dt3,C.dt8,C.dt9,C.ccp,C.cco,C.cck,C.ccl,C.ccm,C.ccn,C.ccu,C.ccr,C.ccs,C.dYM,C.dYP,C.dYO,C.dYV,C.dYW,C.dKB,C.fOT,C.fOf,C.fVL,C.fOk,C.fOj,C.d4o,C.d4p,C.d4k,C.cCG,C.cCI,C.cCJ,C.cCB,C.cCK,C.fem,C.fMH,C.eNs,C.eNo,C.eNk,C.eNi,C.eNw,C.fVB,C.eNF,C.eNO,C.eNJ,C.eNK,C.eNT,C.cBX,C.cBV,C.cBW,C.fxo,C.fWl,C.fvi,C.bQx,C.bQw,C.bQt,C.bQu,C.bQv,C.fhQ,C.fhR,C.fO6,C.fO7,C.fO8,C.fO9,C.fOa,C.fWj,C.fxS,C.fAH,C.fAI,C.fAK,C.fAL,C.fNU,C.fWe,C.fWf,C.fWg,C.fxz,C.fxA,C.fWp,C.fx3,C.fx4,C.fVM,C.fBv,C.fNN,C.fAE,C.fAF,C.fNI,C.fin,C.fio,C.fip,C.fiq,C.fir,C.fiF,C.fiB,C.fiC,C.fmG,C.fmH,C.fpq,C.fuC,C.fuD])
u(A.ax,[C.aZn,C.akY,C.aV7,C.YX,C.baZ,C.Q4,C.a5H,C.tl,C.HW,C.bfk,C.bj3,C.bwN,C.bmg,C.ado,C.bj2,C.adn,C.bj1,C.aCs,C.aID,C.adp,C.G_,C.bfl,C.acF,C.bfj,C.bfo,C.aZl,C.asV,C.adK])
u(A.mV,[C.bbC,C.bcQ,C.bcH,C.aHu,C.bi7,C.bnv,C.aVc,C.bbD,C.aAr,C.bb7,C.brt,C.bif,C.bhG,C.bhO,C.bfn,C.bep,C.bk9,C.bwA])
u(A.jc,[C.fPf,C.fPg,C.fPh,C.fP8,C.fP9,C.fPk,C.fPl,C.dLt,C.dLf,C.dLi,C.dKX,C.dKY,C.dKZ,C.dKW,C.dL3,C.dKV,C.dL4,C.dL5,C.dKU,C.dL6,C.dKT,C.dL7,C.dKS,C.dL8,C.dKK,C.dKL,C.dKR,C.dL9,C.dKP,C.dLa,C.dKO,C.dL_,C.dKN,C.dL0,C.dKJ,C.dL1,C.dL2,C.dLu,C.dLv,C.dLj,C.dLk,C.dLl,C.dLm,C.dLn,C.dLo,C.dLp,C.dLB,C.dLs,C.fyl,C.dbC,C.dbA,C.dbB,C.dbD,C.dcg,C.dc5,C.dc2,C.dbF,C.dc6,C.dbL,C.dbM,C.dbO,C.dc4,C.dbK,C.dbQ,C.dcd,C.dc_,C.dbZ,C.dc0,C.dc1,C.dbV,C.dbX,C.dbY,C.dbR,C.dc9,C.dcc,C.dbH,C.dbI,C.de1,C.de0,C.de_,C.ddZ,C.de5,C.ddY,C.de6,C.dcw,C.dcx,C.dcy,C.dcB,C.dcu,C.dct,C.cKN,C.d3A,C.d3N,C.d3M,C.d41,C.d3L,C.d42,C.d3K,C.d3J,C.d44,C.d3I,C.d3V,C.d3U,C.d4b,C.bPh,C.bPr,C.bPj,C.bPk,C.bPn,C.bPm,C.bPp,C.bPq,C.bPl,C.bPf,C.bPg,C.bQV,C.bQW,C.bQX,C.bQY,C.bQZ,C.bR_,C.bR0,C.fW5,C.fMV,C.bIS,C.bIN,C.bIL,C.bIM,C.bIK,C.cms,C.cmt,C.cmr,C.cmu,C.cmw,C.cmx,C.cmy,C.cmo,C.cBm,C.cBv,C.cBw,C.cBx,C.cBu,C.cBy,C.cBz,C.cBA,C.cBB,C.cBp,C.cBt,C.bQq,C.bQp,C.bQn,C.bQl,C.bQm,C.bQi,C.bQj,C.bQk,C.bQo,C.bQh,C.f_g,C.f_h,C.f_i,C.f_j,C.f_k,C.bQe,C.bQf,C.bQg,C.bQ9,C.bQb,C.bQc,C.bQd,C.bQ5,C.bPQ,C.bPP,C.bPO,C.bPI,C.bPJ,C.bPN,C.bPK,C.bPL,C.bPH,C.dXj,C.dXl,C.dXe,C.dXf,C.dXd,C.dXn,C.dXo,C.dXp,C.dXs,C.dXt,C.dXu,C.dXv,C.dXw,C.dXx,C.dXy,C.dXz,C.dXq,C.dXr,C.bQ1,C.bQ0,C.bPS,C.bPR,C.bPY,C.bPZ,C.bPV,C.bPW,C.bPX,C.bPU,C.bPs,C.bPt,C.bPx,C.bPw,C.bPv,C.bPu,C.dYZ,C.dYY,C.dZ0,C.dZ1,C.dZ2,C.dYX,C.dZ4,C.dZ3,C.dYn,C.dYo,C.dYq,C.dXN,C.dY3,C.dY2,C.dY5,C.dYj,C.dXZ,C.dY9,C.dYa,C.dY8,C.dY6,C.dY7,C.dYc,C.dYd,C.dYe,C.dYi,C.dXB,C.dYl,C.dXF,C.dXI,C.dXK,C.dYr,C.dXQ,C.dXO,C.dXS,C.dXT,C.dXP,C.dXU,C.dXY,C.dYA,C.dYB,C.dYt,C.dYw,C.dYx,C.dYy,C.dYD,C.dYu,C.dXL,C.dcF,C.dcE,C.dcJ,C.dcT,C.dcK,C.eQl,C.dsP,C.dsM,C.dsN,C.dsX,C.dsW,C.dsV,C.dt4,C.dsU,C.dt5,C.dsT,C.dt6,C.dsS,C.dt7,C.dsR,C.dsQ,C.dt0,C.dta,C.dtj,C.dYN,C.dYR,C.dYS,C.dYJ,C.dYK,C.dYL,C.dYQ,C.dYU,C.dYT,C.dYE,C.dYF,C.dYG,C.dYH,C.dYI,C.dKC,C.fOQ,C.ckO,C.d4n,C.d4m,C.d4q,C.d4j,C.d4l,C.cCy,C.cCE,C.cCF,C.cCD,C.cCH,C.cCC,C.cCz,C.cCA,C.cCL,C.fen,C.feo,C.eNu,C.eNl,C.eNm,C.eNn,C.eNp,C.eNq,C.eNt,C.eNg,C.eNj,C.eNv,C.eNh,C.eNy,C.eNz,C.eNA,C.eNB,C.eNx,C.eNb,C.eNc,C.eNd,C.eNf,C.eNe,C.eNU,C.eNV,C.eND,C.eNE,C.eNL,C.eNM,C.eNN,C.eNH,C.eNI,C.eO0,C.eO_,C.eO1,C.eNZ,C.eNC,C.eNG,C.eNX,C.eNW,C.eNR,C.eNS,C.eNQ,C.eNP])
u(A.ag,[C.aoU,C.T6,C.ZF,C.ZJ,C.ZH,C.Zf,C.akZ,C.ajb,C.atG,C.axB,C.al7,C.al5,C.al1,C.Vt,C.al3,C.T7,C.aq1,C.apW,C.a_j,C.aq_,C.a_E,C.a_F,C.a6w,C.Zh,C.Zg,C.YO,C.a1r,C.FP,C.axJ,C.asU,C.asO,C.asT,C.Op])
u(A.ah,[C.aDs,C.bfe,C.aAs,C.bfC,C.aAv,C.bcO,C.aAt,C.ayC,C.aFS,C.axC,C.aAx,C.aAw,C.aAu,C.bks,C.al4,C.al0,C.aE0,C.aDY,C.aCr,C.aE_,C.aDZ,C.bkt,C.aM0,C.azc,C.azb,C.axQ,C.bwD,C.aO1,C.aO2,C.aFr,C.blM,C.aFq,C.byj])
u(A.ke,[C.dLe,C.dLg,C.dLb,C.dLA,C.fAD,C.bPe,C.dcf,C.dce,C.dbW,C.dca,C.dcb,C.dcC,C.bR1,C.bQU,C.bPF,C.bPG,C.fW4,C.fWu,C.bIR,C.cmv,C.cmp,C.cmj,C.f_l,C.bQ3,C.bQ6,C.bQ7,C.dn9,C.bQ_,C.dYf,C.dXV,C.dYC,C.dcS,C.dcR,C.dcP,C.dcU,C.dcX,C.dcY,C.dcI,C.dcM,C.dcO,C.dd0,C.cci,C.ccq,C.ccv,C.dKD,C.fOS,C.fOR,C.fek,C.fel,C.eNr,C.eNY,C.cBY,C.fm_,C.fhS,C.fAJ,C.fx5,C.fAG,C.fiE,C.fiD,C.fmI])
u(A.lZ,[C.a0X,C.af3,C.a1f,C.a_6,C.abK,C.aKn,C.HV,C.al9,C.cBZ,C.cC_])
t(C.al_,C.aAt)
t(C.ajc,C.ayC)
t(C.atH,C.aFS)
t(C.bfi,C.aAx)
t(C.al8,C.bfi)
t(C.bfh,C.aAw)
t(C.al6,C.bfh)
t(C.bfg,C.aAu)
t(C.al2,C.bfg)
t(C.bka,C.aM0)
t(C.bwB,C.aO1)
t(C.bwC,C.aO2)
t(C.aFs,C.byj)
t(C.b9r,A.b9f)
t(C.bwE,A.a6b)
t(C.b9q,C.bwE)
w(C.aAt,A.cp)
w(C.ayC,A.cp)
w(C.aFS,A.eP)
w(C.aAu,A.cp)
v(C.bfg,C.aeQ)
w(C.aAw,A.cp)
v(C.bfh,C.aeQ)
w(C.aAx,A.cp)
v(C.bfi,C.aeQ)
w(C.aM0,A.eP)
w(C.aO1,A.cp)
w(C.aO2,A.cp)
v(C.byj,A.eD)
v(C.bwE,A.j6)})()
A.jk(b.typeUniverse,JSON.parse('{"aZn":{"ax":[],"v":[]},"bbC":{"aC":[]},"aoU":{"ag":[],"v":[]},"aDs":{"ah":["aoU"]},"T6":{"ag":[],"v":[]},"akY":{"ax":[],"v":[]},"aV7":{"ax":[],"v":[]},"bfe":{"ah":["T6"]},"ZF":{"ag":[],"v":[]},"ZJ":{"ag":[],"v":[]},"ZH":{"ag":[],"v":[]},"Zf":{"ag":[],"v":[]},"aAs":{"ah":["ZF"]},"bfC":{"ah":["ZJ"]},"aAv":{"ah":["ZH"]},"YX":{"ax":[],"v":[]},"bcQ":{"aC":[]},"bcH":{"aC":[]},"bcO":{"ah":["Zf"]},"aHu":{"aC":[]},"bi7":{"aC":[]},"baZ":{"ax":[],"v":[]},"akZ":{"ag":[],"v":[]},"al_":{"ah":["akZ"]},"bnv":{"aC":[]},"aVc":{"aC":[]},"ajb":{"ag":[],"v":[]},"atG":{"ag":[],"v":[]},"axB":{"ag":[],"v":[]},"ajc":{"ah":["ajb"]},"bbD":{"aC":[]},"Q4":{"ax":[],"v":[]},"aAr":{"aC":[]},"atH":{"ah":["atG"]},"bb7":{"aC":[]},"axC":{"ah":["axB"]},"al7":{"ag":[],"v":[]},"al5":{"ag":[],"v":[]},"al1":{"ag":[],"v":[]},"al8":{"ah":["al7"]},"brt":{"aC":[]},"al6":{"ah":["al5"]},"bif":{"aC":[]},"al2":{"ah":["al1"]},"bhG":{"aC":[]},"Vt":{"ag":[],"v":[]},"al3":{"ag":[],"v":[]},"T7":{"ag":[],"v":[]},"a5H":{"ax":[],"v":[]},"bhO":{"aC":[]},"tl":{"ax":[],"v":[]},"HW":{"ax":[],"v":[]},"bks":{"ah":["Vt"]},"al4":{"ah":["al3"]},"al0":{"ah":["T7"]},"aq1":{"ag":[],"v":[]},"apW":{"ag":[],"v":[]},"a_j":{"ag":[],"v":[]},"adp":{"ax":[],"v":[]},"aE0":{"ah":["aq1"]},"aDY":{"ah":["apW"]},"bfk":{"ax":[],"v":[]},"bfn":{"aC":[]},"bj3":{"ax":[],"v":[]},"bep":{"aC":[]},"bwN":{"ax":[],"v":[]},"bmg":{"ax":[],"v":[]},"aCr":{"ah":["a_j"]},"ado":{"ax":[],"v":[]},"bj2":{"ax":[],"v":[]},"adn":{"ax":[],"v":[]},"bj1":{"ax":[],"v":[]},"aCs":{"ax":[],"v":[]},"aID":{"ax":[],"v":[]},"G_":{"ax":[],"v":[]},"aq_":{"ag":[],"v":[]},"a_E":{"ag":[],"v":[]},"a_F":{"ag":[],"v":[]},"aE_":{"ah":["aq_"]},"bfl":{"ax":[],"v":[]},"acF":{"ax":[],"v":[]},"bfj":{"ax":[],"v":[]},"bfo":{"ax":[],"v":[]},"aDZ":{"ah":["a_E"]},"bkt":{"ah":["a_F"]},"aZl":{"ax":[],"v":[]},"a6w":{"ag":[],"v":[]},"bka":{"ah":["a6w"]},"bk9":{"aC":[]},"asV":{"ax":[],"v":[]},"Zh":{"ag":[],"v":[]},"Zg":{"ag":[],"v":[]},"YO":{"ag":[],"v":[]},"a1r":{"ag":[],"v":[]},"azc":{"ah":["Zh"]},"azb":{"ah":["Zg"]},"axQ":{"ah":["YO"]},"bwD":{"ah":["a1r"]},"FP":{"ag":[],"v":[]},"axJ":{"ag":[],"v":[]},"bwB":{"ah":["FP"]},"bwC":{"ah":["axJ"]},"bwA":{"aC":[]},"asU":{"ag":[],"v":[]},"aFr":{"ah":["asU"]},"adK":{"ax":[],"v":[]},"asO":{"ag":[],"v":[]},"asT":{"ag":[],"v":[]},"blM":{"ah":["asO"]},"aFq":{"ah":["asT"]},"Op":{"ag":[],"v":[]},"aFs":{"ah":["Op"],"eD":[]},"b9q":{"j6":[],"fh":[]}}'))
A.CR(b.typeUniverse,JSON.parse('{"aeQ":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.av
return{e2:w("aRQ"),cq:w("m7"),Q:w("r9"),r:w("bw<n,n>"),c5:w("aTR"),dY:w("aTS"),fH:w("Mc"),de:w("ajX"),dN:w("Mj<H>"),gc:w("DR<H>"),A:w("eI<n?>"),e:w("HU"),B:w("nk"),P:w("hU"),df:w("lh"),k:w("kM"),x:w("aA<~>"),U:w("O<a3n>"),V:w("O<ac>"),C:w("O<r9>"),O:w("O<u>"),c:w("O<Mc>"),b:w("O<ajX>"),ac:w("O<eI<n?>>"),I:w("O<nk>"),u:w("O<hU>"),J:w("O<lh>"),_:w("O<kM>"),cl:w("O<aA<ai<a8<n,@>>>>"),R:w("O<nm>"),eU:w("O<ai<+(K,K)>>"),ez:w("O<a8<n,aD>>"),gE:w("O<a8<n,n>>"),Y:w("O<a8<n,@>>"),fD:w("O<mC>"),bp:w("O<op>"),g:w("O<t>"),ar:w("O<at6>"),v:w("O<h9>"),gy:w("O<a9c>"),L:w("O<+(n,n)>"),G:w("O<+(K,K)>"),E:w("O<+(K,~())>"),bd:w("O<+(n,H,R)>"),bF:w("O<+count,id,name(H,n,n)>"),F:w("O<cX>"),s:w("O<n>"),cF:w("O<as>"),aS:w("O<iU>"),dT:w("O<b9e>"),p:w("O<v>"),Z:w("O<fh>"),D:w("O<lt>"),h:w("O<ayS>"),cC:w("O<bgs>"),fp:w("O<Ke>"),M:w("O<Km>"),gZ:w("O<aHz>"),gA:w("O<aeV>"),e4:w("O<af1>"),dE:w("O<aJB>"),f7:w("O<R>"),n:w("O<K>"),t:w("O<H>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cB<ah<ag>>"),d:w("ai<nk>"),do:w("ai<hU>"),cg:w("ai<lh>"),ax:w("ai<kM>"),fO:w("ai<a8<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),dy:w("ai<n>"),er:w("ai<as>"),gk:w("ai<lt>"),j:w("ai<@>"),fK:w("bz<n,n>"),d2:w("bz<n,ai<a8<n,@>>>"),a:w("a8<n,@>"),f:w("a8<@,@>"),gv:w("N<n,HX>"),cM:w("N<H,n>"),w:w("iF"),g2:w("rt"),bV:w("aoI"),fL:w("cu"),K:w("aD"),dc:w("h9"),fo:w("OM<H>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(R,H)"),d9:w("+dx,hidden(K,ai<hU>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),fT:w("jx<hU>"),ec:w("jx<n>"),gW:w("qR<K>"),X:w("bp<K>"),bW:w("dK"),W:w("c0<n>"),b4:w("c0<H>"),cI:w("jS<n>"),av:w("Z<zc>"),cc:w("Z<n>"),l:w("v"),gF:w("fh"),fA:w("lt"),dO:w("G3"),bw:w("adn<n?>"),cy:w("Ko"),q:w("n7"),y:w("R"),i:w("K"),z:w("@"),S:w("H"),eK:w("ai<kM>?"),m:w("apZ?"),cT:w("t?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),he:w("+qrPayload,token,usesRemaining(n,n,H)?"),gG:w("+members,trees,viewOnly(H,H,R)?"),az:w("q5?"),T:w("n?"),aD:w("dK?"),o:w("lt?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b0S=new A.bj(B.fE,B.bI,B.fE,B.bI)
D.acg=new A.bj(B.fE,B.ip,B.fE,B.ip)
D.b14=new A.bj(B.i8,B.bI,B.bI,B.bI)
D.b18=new A.ay(B.cO,1.4,B.r,-1)
D.b1i=new A.ay(B.ad,1,B.r,-1)
D.acL=new A.aZ(140,1/0,0,1/0)
D.b2H=new A.aZ(0,1/0,64,1/0)
D.b2L=new A.aZ(0,84,0,1/0)
D.acS=new A.aZ(130,1/0,0,1/0)
D.aAk=w([B.lZ,B.rd,B.c],x.O)
D.c2G=new A.a9(B.ay,B.aE,B.x,D.aAk,null,null)
D.b3v=new A.o(null,null,null,null,null,D.c2G,B.n)
D.d9g=w([B.aW,B.bP],x.O)
D.c4N=new A.a9(B.b4,B.b7,B.x,D.d9g,null,null)
D.b3Q=new A.o(null,null,null,null,null,D.c4N,B.n)
D.Xe=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fq=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dd6=w([B.du,D.Xe,D.fq],x.O)
D.c1S=new A.a9(B.b4,B.b7,B.x,D.dd6,null,null)
D.b4A=new A.o(null,null,null,null,null,D.c1S,B.n)
D.fhh=new A.F(!0,B.bY,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS3=new A.y("?",null,D.fhh,null,null,null,null,null,null,null,null,null)
D.b8f=new A.cg(B.A,null,null,D.fS3,null)
D.UX=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAe=new A.y("\ud83c\udf33",null,D.UX,null,null,null,null,null,null,null,null,null)
D.adC=new A.cg(B.A,null,null,D.fAe,null)
D.fCQ=new A.y("\ud83c\udfc6",null,Ao.JW,null,null,null,null,null,null,null,null,null)
D.b8p=new A.cg(B.A,null,null,D.fCQ,null)
D.baf=new A.fj(null,null,null,null,null,E.ka,null,null,null,null)
D.adE=new A.cg(B.A,null,null,D.baf,null)
D.kz=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fhQ=new A.F(!0,D.kz,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBV=new A.y("No books on the shelf yet.",null,D.fhQ,null,null,null,null,null,null,null,null,null)
D.ekQ=new A.D(B.oc,D.fBV,null)
D.b8E=new A.cg(B.A,null,null,D.ekQ,null)
D.foK=new A.F(!0,D.fq,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSY=new A.y("\ud83d\ude8c  On the road\u2026",null,D.foK,null,null,null,null,null,null,null,null,null)
D.elp=new A.D(B.cm,D.fSY,null)
D.b95=new A.cg(B.A,null,null,D.elp,null)
D.aTP=new A.y("\ud83e\uddfa",null,D.UX,null,null,null,null,null,null,null,null,null)
D.b9l=new A.cg(B.A,null,null,D.aTP,null)
D.fFj=new A.y("\ud83c\udfad",null,D.UX,null,null,null,null,null,null,null,null,null)
D.b9y=new A.cg(B.A,null,null,D.fFj,null)
D.b9B=new A.cg(B.A,null,null,A8.X4,null)
D.adZ=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.ae4=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bbN=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bbS=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bc2=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bc4=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bc6=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bcd=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lr=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bcg=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bcl=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bcm=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bcn=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.ls=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bcX=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.B0=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bd5=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bdp=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bds=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bdy=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bdG=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aeF=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bdM=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Xp=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aeI=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bdZ=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Xr=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bek=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.aeT=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.beH=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.beX=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bfk=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bft=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.F5=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bfO=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bfQ=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bfU=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.afg=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bge=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bgj=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bgp=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.afj=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bgx=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bh0=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bh8=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bha=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bhf=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.afy=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bhS=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.afV=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.biM=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ag7=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bj9=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Fk=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bjf=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bjp=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bjr=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.agb=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bjJ=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bjK=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bjN=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.agi=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Y6=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bk5=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bkr=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bkw=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.agu=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bkC=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Yb=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bkU=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bkV=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Fr=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.blG=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bmi=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bmo=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bms=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.pY=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bmC=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bmG=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bmL=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bmN=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.ah9=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.ahd=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Fw=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.Yu=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.ahl=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bnU=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.boc=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.boB=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.boK=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ahJ=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.YE=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.boS=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bp7=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.YH=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bpl=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bpC=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.YL=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bpH=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ai0=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ai2=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bpZ=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.ai7=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bqr=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bqt=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bqz=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bqF=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bqN=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.brn=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.brR=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fwc=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bvm=new A.eI(null,D.fwc,B.f3,null,x.A)
D.fFa=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bvo=new A.eI(null,D.fFa,B.f3,null,x.A)
D.aj0=new A.b9(3e4)
D.bvW=new A.b9(38e5)
D.bwG=new A.ii(0,10,0,10)
D.bwP=new A.Q(0,1,0,0)
D.bwZ=new A.ii(0,4,0,4)
D.bx1=new A.Q(0,4,5,0)
D.bxh=new A.Q(10,10,14,10)
D.bxt=new A.ii(10,4,10,4)
D.bxB=new A.ii(10,8,10,8)
D.bxC=new A.Q(10,8,8,8)
D.by2=new A.Q(12,6,12,2)
D.byi=new A.Q(14,0,14,6)
D.byn=new A.Q(14,10,6,6)
D.byo=new A.Q(14,12,14,0)
D.bys=new A.Q(14,12,14,8)
D.byv=new A.Q(14,12,8,14)
D.byz=new A.ii(14,14,14,14)
D.byP=new A.Q(14,6,14,40)
D.byS=new A.Q(14,8,14,30)
D.bze=new A.Q(16,2,16,10)
D.bzo=new A.Q(16,6,16,30)
D.bzq=new A.Q(16,6,16,8)
D.bzF=new A.Q(18,10,18,4)
D.bzH=new A.Q(18,12,18,0)
D.bzO=new A.Q(18,14,12,4)
D.aku=new A.Q(18,16,18,8)
D.bA4=new A.Q(18,20,18,22)
D.aky=new A.Q(18,24,18,24)
D.bAa=new A.Q(18,30,18,30)
D.bAs=new A.Q(20,10,12,20)
D.bAv=new A.Q(20,11,20,11)
D.bAG=new A.Q(20,18,16,18)
D.bAI=new A.Q(20,18,20,6)
D.bBx=new A.Q(24,32,24,28)
D.bBy=new A.Q(24,36,24,32)
D.bBC=new A.Q(26,26,24,14)
D.bBR=new A.Q(2,4,2,8)
D.bBV=new A.Q(30,0,30,0)
D.bC5=new A.Q(38,22,22,22)
D.akS=new A.Q(40,24,24,24)
D.bC7=new A.ii(40,40,40,40)
D.bC9=new A.Q(46,30,30,30)
D.akV=new A.Q(4,0,0,8)
D.bCA=new A.Q(56,40,40,40)
D.bCE=new A.Q(1.25,1.25,1.25,1.25)
D.bCF=new A.Q(60,0,60,0)
D.bCI=new A.Q(6,14,6,16)
D.bCM=new A.Q(6,4,12,0)
D.bCQ=new A.Q(6,6,10,2)
D.bCX=new A.ii(7,3,7,3)
D.bDt=new A.Q(5,1.5,5,1.5)
D.bDE=new A.Q(6,2.5,6,2.5)
D.fNd=new A.y("Family Games",null,B.k4,null,null,null,null,null,null,null,null,null)
D.fuQ=new A.y("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,F.a9G,null,null,null,null,null,null,null,null,null)
D.cDE=w([D.fNd,D.fuQ],x.p)
D.bsU=new A.fi(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cDE,null)
D.bDW=new A.bA(1,B.bc,D.bsU,null)
D.fRz=new A.y("Signature",null,B.n_,null,null,null,null,null,null,null,null,null)
D.bE_=new A.bA(1,B.bc,D.fRz,null)
D.fJP=new A.y("MADE BY THE ONE WHO PLANTED THE TREE",null,T.t8,null,null,null,null,null,null,null,null,null)
D.bEy=new A.bA(1,B.bc,D.fJP,null)
D.fOH=new A.y("Tell the AI what to fix",null,B.dd,null,null,null,null,null,null,null,null,null)
D.bEP=new A.bA(1,B.bc,D.fOH,null)
D.fpw=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQE=new A.y("Worksheets",null,D.fpw,null,null,null,null,null,null,null,null,null)
D.fpH=new A.F(!0,E.aeq,null,null,null,null,13,B.cy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPw=new A.y("Track your project spending",null,D.fpH,null,null,null,null,null,null,null,null,null)
D.d0R=w([D.fQE,B.au,D.fPw],x.p)
D.bsw=new A.fi(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.d0R,null)
D.bEV=new A.bA(1,B.bc,D.bsw,null)
D.fky=new A.F(!0,E.ka,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvn=new A.y("FAMILY LIBRARY",null,D.fky,null,null,null,null,null,null,null,null,null)
D.bFc=new A.bA(1,B.bc,D.fvn,null)
D.NM=new C.HU("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.w0=new C.HV(0,"male")
D.oe=new C.HV(1,"female")
D.ys=new C.HV(2,"unknown")
D.u7=new C.al9(0,"owner")
D.NN=new C.al9(1,"editor")
D.kG=new C.al9(2,"viewer")
D.amA=new A.a0(61199,"MaterialIcons",!1)
D.bK8=new A.a0(61504,"MaterialIcons",!1)
D.bK9=new A.a0(61505,"MaterialIcons",!1)
D.bKb=new A.a0(61587,"MaterialIcons",!1)
D.bKi=new A.a0(61890,"MaterialIcons",!1)
D.bLb=new A.a0(63034,"MaterialIcons",!0)
D.bLt=new A.a0(63153,"MaterialIcons",!1)
D.bM0=new A.a0(63429,"MaterialIcons",!1)
D.aoJ=new A.a0(984520,"MaterialIcons",!1)
D.bKH=new A.a0(62776,"MaterialIcons",!1)
D.bOi=new A.ae(D.bKH,26,B.b_,null,null,null)
D.bJ6=new A.a0(57648,"MaterialIcons",!1)
D.bOD=new A.ae(D.bJ6,14,B.c,null,null,null)
D.bOU=new A.ae(B.Gy,17,null,null,null,null)
D.bP_=new A.ae(B.a19,null,B.bP,null,null,null)
D.bPr=new A.ae(E.a1f,null,null,null,null,null)
D.bPu=new A.ae(B.iW,18,E.ka,null,null,null)
D.a0Z=new A.a0(62044,"MaterialIcons",!1)
D.bPz=new A.ae(D.a0Z,null,B.aW,null,null,null)
D.bPG=new A.ae(B.yF,18,B.c,null,null,null)
D.bQo=new A.ae(B.e5,16,null,null,null,null)
D.bQv=new A.ae(D.a0Z,32,B.aW,null,null,null)
D.bQO=new A.ae(E.amB,18,B.cO,null,null,null)
D.bRS=new A.ae(B.GL,22,B.aw,null,null,null)
D.bS3=new A.ae(B.e5,22,B.b_,null,null,null)
D.bSf=new A.ae(Y.a13,22,B.c,null,null,null)
D.bSl=new A.ae(B.ui,52,B.c,null,null,null)
D.bSv=new A.ae(B.GL,30,B.aw,null,null,null)
D.bSO=new A.ae(B.a1l,null,B.c,null,null,null)
D.apn=new A.ae(B.ur,22,B.c,null,null,null)
D.bSX=new A.ae(B.e5,17,null,null,null,null)
D.bTi=new A.ae(B.wh,26,B.cO,null,null,null)
D.bU2=new A.ae(B.a1t,16,null,null,null,null)
D.bUO=new A.ae(B.ui,24,B.c,null,null,null)
D.bUT=new A.ae(B.Of,20,B.rL,null,null,null)
D.bUY=new A.ae(B.Gw,null,B.bP,null,null,null)
D.bV5=new A.ae(B.iW,18,B.c,null,null,null)
D.bVK=new A.ae(B.cz,22,B.ad,null,null,null)
D.bWA=new A.ae(B.e9,16,B.ad,null,null,null)
D.bWM=new A.ae(D.a0Z,20,B.aW,null,null,null)
D.apN=new A.ae(B.hu,20,null,null,null,null)
D.bXg=new A.ae(B.cz,18,D.kz,null,null,null)
D.bXy=new A.ae(B.yO,28,B.c,null,null,null)
D.bXJ=new A.ae(B.O5,null,B.f7,null,null,null)
D.bY2=new A.ae(B.yO,24,B.c,null,null,null)
D.bYu=new A.ae(B.ui,null,B.aW,null,null,null)
D.bYv=new A.ae(B.jR,20,B.cO,null,null,null)
D.bYP=new A.ae(B.Gy,16,null,null,null,null)
D.c_n=new A.e3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jP,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eF,!0,null,null,null,null)
D.aqs=new C.a5H(10,null)
D.c_T=new C.a5H(12,null)
D.c_U=new C.a5H(14,null)
D.dh2=w([B.bt,B.aW,B.ff,B.b_],x.O)
D.c14=new A.a9(B.ay,B.aE,B.x,D.dh2,null,null)
D.bls=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.brt=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.cYs=w([D.bls,D.brt],x.O)
D.c1f=new A.a9(B.b4,B.b7,B.x,D.cYs,null,null)
D.dbd=w([B.f5,B.fL,B.ff],x.O)
D.c1k=new A.a9(B.ay,B.aE,B.x,D.dbd,null,null)
D.agZ=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bco=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d_B=w([D.agZ,D.bco],x.O)
D.c1T=new A.a9(B.b4,B.b7,B.x,D.d_B,null,null)
D.bg3=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.azD=w([D.bg3,D.agZ],x.O)
D.c2c=new A.a9(B.ay,B.aE,B.x,D.azD,null,null)
D.afQ=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.biD=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.daj=w([D.afQ,D.biD],x.O)
D.c2R=new A.a9(B.a5,B.a8,B.x,D.daj,null,null)
D.dnW=w([B.by,B.nc],x.O)
D.c2T=new A.a9(B.b4,B.b7,B.x,D.dnW,null,null)
D.bln=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.doS=w([D.bln,D.kz,D.kz,K.Yt],x.O)
D.drl=w([0,0.07,0.9,1],x.n)
D.c3o=new A.a9(B.a5,B.a8,B.x,D.doS,D.drl,null)
D.c3y=new A.a9(B.ay,B.aE,B.x,B.RG,null,null)
D.cWj=w([B.aD,D.lr],x.O)
D.c3B=new A.a9(B.a5,B.a8,B.x,D.cWj,null,null)
D.dnv=w([B.b_,B.aW,B.bP],x.O)
D.c4y=new A.a9(B.ay,B.aE,B.x,D.dnv,null,null)
D.c8M=w([10,20,30],x.t)
D.ciH=w([-1,-0.4,0.3,1],x.n)
D.cqb=w([B.bt,B.b_,B.f5],x.O)
D.cqj=w([B.bw,B.aD,B.jp],x.O)
D.cql=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cr1=w([30,140,262,360],x.n)
D.bjT=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cwz=w([D.bjT,E.agE],x.O)
D.efv=new A.t(1,2)
D.f2M=new A.cX(B.aT,D.efv,3)
D.awy=w([D.f2M],x.F)
D.cDV=w([B.hb,B.cc,B.fa],x.O)
D.cGE=w([B.bM,B.br,B.bn],x.O)
D.bFL=new C.us("classic","Classic leather","Gold-edged brown leather",D.azD,E.ka,E.ka,"\u2766",B.L,!0,!1,!1,!1)
D.bbx=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bqh=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d2y=w([D.bbx,D.bqh],x.O)
D.agI=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bFG=new C.us("ornate","Ornate gold","Double gold border and flourishes",D.d2y,D.agI,D.agI,"\u2726",B.L,!0,!0,!0,!1)
D.bfC=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bmd=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.cVc=w([D.bfC,D.bmd],x.O)
D.bFF=new C.us("parchment","Parchment","Old paper with dark ink",D.cVc,D.Fr,I.iP,"\u2767",B.L,!0,!1,!1,!0)
D.ae6=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.box=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dlL=w([D.ae6,D.box],x.O)
D.bjm=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bnP=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bFI=new C.us("minimal","Clean paper","Plain and elegant, like a printed book",D.dlL,D.bjm,D.bnP,"",B.L,!0,!0,!1,!0)
D.bFK=new C.us("midnight","Midnight","Deep blue with silver stars",F.azW,B.cr,B.bN,"\u2727",B.L,!0,!0,!1,!1)
D.bFE=new C.us("emerald","Emerald library","Green cloth, title on the left",V.awW,E.ka,B.fU,"\u25c6",B.bi,!0,!1,!1,!1)
D.bp_=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.djQ=w([B.ej,D.bp_],x.O)
D.bkB=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.blN=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bFJ=new C.us("rose","Rose vintage","Burgundy with rose-gold lettering",D.djQ,D.bkB,D.blN,"\u2740",B.L,!0,!1,!0,!1)
D.dot=w([B.cp,G.nd],x.O)
D.bFH=new C.us("modern","Modern","Dark, bold, left-aligned",D.dot,B.aQ,B.c,"",B.bi,!1,!0,!1,!1)
D.a3x=w([D.bFL,D.bFG,D.bFF,D.bFI,D.bFK,D.bFE,D.bFJ,D.bFH],A.av("O<us>"))
D.cJB=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dog=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bFW=new C.lh('What does "Ubuntu" mean?',D.dog,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.cWY=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bFZ=new C.lh("In Swahili, what do we call a grandmother?",D.cWY,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.cWO=w(["Babu","Mama","Baba","Dada"],x.s)
D.bFU=new C.lh("In Swahili, what do we call a grandfather?",D.cWO,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.cY2=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bFY=new C.lh("What is a sister called in Swahili?",D.cY2,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d1Z=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bFV=new C.lh("What is a brother called in Swahili?",D.d1Z,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.cWN=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bG5=new C.lh("Which word means father in Swahili?",D.cWN,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dpn=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bG4=new C.lh('"Umoja ni nguvu" means...',D.dpn,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dmt=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bG6=new C.lh('"Haba na haba hujaza kibaba" teaches us...',D.dmt,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d_J=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bG3=new C.lh('The African saying "It takes a village to raise a child" means...',D.d_J,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dpH=w(["The elders","The market","The river","The drum"],x.s)
D.bG_=new C.lh("Who is the traditional keeper of the family stories?",D.dpH,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cNL=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bFX=new C.lh("Why do families sit round the fire at night?",D.cNL,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dov=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bG1=new C.lh('What does "Harambee" mean?',D.dov,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d4I=w(["An elder","A baby","A market","A cow"],x.s)
D.bG0=new C.lh('"Mzee" is a respectful word for...',D.d4I,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.djH=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bG2=new C.lh('What does "Shikamoo" show?',D.djH,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.awS=w([D.bFW,D.bFZ,D.bFU,D.bFY,D.bFV,D.bG5,D.bG4,D.bG6,D.bG3,D.bG_,D.bFX,D.bG1,D.bG0,D.bG2],x.J)
D.cS3=w([90,360],x.n)
D.cUK=w([B.bP,B.bk],x.O)
D.blc=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.cVo=w([D.ae6,D.blc],x.O)
D.cW2=w([-1,-0.3,0.4,1],x.n)
D.cWT=w([0,0.45,0.72,0.92,1],x.n)
D.bfy=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.cXb=w([D.bfy,B.de],x.O)
D.bdk=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.aih=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.cXK=w([B.du,D.bdk,D.aih],x.O)
D.cYI=w([B.b9,B.j7,B.oU],x.O)
D.bg5=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bnG=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bd0=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.cYN=w([D.bg5,D.bnG,D.bd0],x.O)
D.cZ5=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.cZf=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hhC=new C.ad2(78,424,48,44,56)
D.hhA=new C.ad2(214,396,34,34,42)
D.hhB=new C.ad2(442,452,56,50,64)
D.axP=w([D.hhC,D.hhA,D.hhB],A.av("O<ad2>"))
D.cZO=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bci=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bhR=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.drh=w([D.afQ,D.bci,D.bhR],x.O)
D.bFM=new C.ut("leather","Leather",D.drh,"vintage")
D.d5J=w([B.d7,B.M0,Q.XF],x.O)
D.bFT=new C.ut("midnight","Midnight",D.d5J,"starry")
D.cYJ=w([B.ei,B.e_,B.l1],x.O)
D.bFS=new C.ut("forest","Forest",D.cYJ,"story")
D.dtj=w([B.ek,B.ej,B.jL],x.O)
D.bFP=new C.ut("burgundy","Burgundy",D.dtj,"royal")
D.cGc=w([B.aD,B.oW,B.nQ],x.O)
D.bFQ=new C.ut("royal","Royal",D.cGc,"royal")
D.d0e=w([B.br,B.cp,G.nd],x.O)
D.bFN=new C.ut("charcoal","Charcoal",D.d0e,"geo")
D.drq=w([B.cb,B.dF,B.xL],x.O)
D.bFR=new C.ut("sunset","Sunset",D.drq,"sunset")
D.ds6=w([B.j7,B.Fs,B.XI],x.O)
D.bFO=new C.ut("ocean","Ocean",D.ds6,"band")
D.zg=w([D.bFM,D.bFT,D.bFS,D.bFP,D.bFQ,D.bFN,D.bFR,D.bFO],A.av("O<ut>"))
D.d0I=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d1h=w([B.al,B.aJ,B.M],x.O)
D.d2D=w([B.ej,B.e_,B.d7,B.h2,B.xO,B.cO,B.kd,B.e7,B.d1],x.O)
D.d2E=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.f2N=new A.cX(B.dm,B.dB,8)
D.d2O=w([D.f2N],x.F)
D.d3S=w([B.c5,B.dF,B.k9],x.O)
D.bed=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bi8=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bm8=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d46=w([D.bed,F.ah6,D.bi8,D.bm8,D.aih],x.O)
D.d4m=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d4y=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bbI=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bhv=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.d5_=w([D.bbI,D.afj,D.bhv],x.O)
D.d5E=w([B.c5,B.ho],x.O)
D.d5K=w([F.n6,B.hW,F.aeh,B.cI],x.O)
D.d7i=w([B.cI,F.n6,B.hW,D.ls,B.cI],x.O)
D.d7S=w([B.aU,B.vE,B.xA],x.O)
D.ayQ=w(["True","False"],x.s)
D.eC6=new A.z(-0.65,0.6)
D.eOw=new A.z(-0.2,0.95)
D.ePB=new A.z(0.25,0.95)
D.eFy=new A.z(0.7,0.6)
D.eQ9=new A.z(1,0.1)
D.d8D=w([An.Tv,D.eC6,D.eOw,D.ePB,D.eFy,D.eQ9],x.G)
D.bk6=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bq9=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bfb=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.d8J=w([D.bk6,D.bq9,D.bfb],x.O)
D.d8N=w([B.bL,B.cs,B.dt,B.aU],x.O)
D.d9h=w([B.ig,B.cb,B.tD],x.O)
D.d9E=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.d9P=w([B.f5,B.cO],x.O)
D.blw=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dae=w([D.blw,D.ae4],x.O)
D.dap=w([B.cR,B.fr,B.hI],x.O)
D.daA=w([B.aQ,B.bk,B.d7],x.O)
D.dba=w([B.es,B.cU,B.e_],x.O)
D.dbv=w([B.dI,B.d7,B.M0],x.O)
D.dbz=w([B.bG,B.mu,B.d1],x.O)
D.dbQ=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bkM=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bj5=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dc8=w([D.bkM,D.afg,D.bj5],x.O)
D.dcS=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.ddU=w([1,0,7,6,3,2],x.t)
D.a4r=w(["leather","linen","plain","stars","rays"],x.s)
D.de5=w([0.5,2,3.6],x.n)
D.deB=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bNZ=new A.a0(985219,"MaterialIcons",!1)
D.bNw=new A.a0(983781,"MaterialIcons",!1)
D.azi=w([B.a19,B.i_,B.m6,B.il,D.bNZ,B.GX,B.qi,D.bNw,F.aow,B.Cj,B.qk,B.mK],A.av("O<a0>"))
D.a4v=w(["double","single","corners","none"],x.s)
D.bFB=new C.zc("Little Seed","\ud83c\udf31",0)
D.bFD=new C.zc("Young Listener","\ud83d\udc42",40)
D.bFC=new C.zc("Storyteller","\ud83e\ude98",120)
D.bFA=new C.zc("Village Pride","\ud83c\udfe1",300)
D.bFy=new C.zc("Keeper of Roots","\ud83c\udf33",700)
D.bFz=new C.zc("Elder of the Fire","\ud83d\udd25",1500)
D.azk=w([D.bFB,D.bFD,D.bFC,D.bFA,D.bFy,D.bFz],A.av("O<zc>"))
D.dfI=w([B.dv,B.bm,B.e7],x.O)
D.dfW=w([],x.C)
D.CV=w([],x.u)
D.aJc=new A.t(225,528)
D.eDM=new A.z(D.aJc,1)
D.egg=new A.t(350,548)
D.eJW=new A.z(D.egg,0.95)
D.aJ7=new A.t(158,656)
D.eJQ=new A.z(D.aJ7,1.12)
D.eh2=new A.t(92,544)
D.ezl=new A.z(D.eh2,0.93)
D.egj=new A.t(398,614)
D.eFV=new A.z(D.egj,1.04)
D.eg7=new A.t(318,662)
D.euP=new A.z(D.eg7,1.1)
D.a4D=w([D.eDM,D.eJW,D.eJQ,D.ezl,D.eFV,D.euP],A.av("O<+(t,K)>"))
D.dhV=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dil=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.djo=w([B.cI,F.n6,B.hW,D.ls,B.cI,B.hW],x.O)
D.dkO=w([B.aC,B.fr,B.h2],x.O)
D.dl5=w([-12,12],x.n)
D.dl8=w([-17,17],x.n)
D.dlp=w([-70,58],x.n)
D.dlr=w([-70,-30,20],x.n)
D.dmr=w([B.bG,B.mu,B.YF],x.O)
D.dmH=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dGc=new C.lL("construction","Construction","Jobsite & builds",B.yI)
D.dGj=new C.lL("house","Home Build","Houses & rooms",B.wc)
D.dG9=new C.lL("grocery","Grocery","Store & pantry",B.a21)
D.dG8=new C.lL("calculator","Calculations","Math & estimates",B.GE)
D.dGh=new C.lL("lumber","Materials","Lumber & supplies",B.OA)
D.dG5=new C.lL("kitchen","Kitchen","Remodel & meals",A2.anK)
D.bNu=new A.a0(983756,"MaterialIcons",!1)
D.dGa=new C.lL("landscape","Landscaping","Yard & garden",D.bNu)
D.dG4=new C.lL("plumbing","Plumbing","Pipes & water",B.qr)
D.dGk=new C.lL("electrical","Electrical","Wiring & power",B.ht)
D.dG2=new C.lL("store","Retail Shop","Daily business",B.la)
D.dG3=new C.lL("paint_remodel","Paint & Remodel","Colors & walls",Ae.a1z)
D.bMX=new A.a0(983311,"MaterialIcons",!1)
D.dGg=new C.lL("roofing","Roofing","Roofs & exteriors",D.bMX)
D.bNG=new A.a0(983986,"MaterialIcons",!1)
D.dG1=new C.lL("warehouse","Warehouse","Storage & stock",D.bNG)
D.dGe=new C.lL("vehicles","Vehicles","Fleet & transport",B.GY)
D.bKJ=new A.a0(62785,"MaterialIcons",!1)
D.dG7=new C.lL("farm","Farm","Crops & livestock",D.bKJ)
D.dG6=new C.lL("restaurant","Restaurant","Food & catering",B.wk)
D.dGd=new C.lL("tools","Tools","Workshop gear",B.GT)
D.dGi=new C.lL("wallet","Cash & Wallet","Quick spending",B.jR)
D.bLW=new A.a0(63395,"MaterialIcons",!1)
D.dGf=new C.lL("concrete","Concrete","Foundation work",D.bLW)
D.dGb=new C.lL("blueprint","Blueprint","Plans & design",Ak.an3)
D.a4Y=w([D.dGc,D.dGj,D.dG9,D.dG8,D.dGh,D.dG5,D.dGa,D.dG4,D.dGk,D.dG2,D.dG3,D.dGg,D.dG1,D.dGe,D.dG7,D.dG6,D.dGd,D.dGi,D.dGf,D.dGb],A.av("O<lL>"))
D.dnb=w([B.bs,B.bm],x.O)
D.dnX=w([B.is,B.nX,B.dO],x.O)
D.ag1=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.agV=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bjq=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bbf=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aAr=w([D.ag1,D.agV,D.bjq,D.bbf],x.O)
D.dp7=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a57=w(["top","middle","bottom"],x.s)
D.dqx=w([B.co,B.bk,B.d7],x.O)
D.aAF=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b52=new A.ac(0,B.G,B.aT,B.I,14)
D.aAI=w([D.b52],x.V)
D.bim=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dra=w([D.aeF,D.YE,D.bim],x.O)
D.drb=w([B.bj,B.cU,B.e_],x.O)
D.efQ=new A.t(24,-8)
D.egz=new A.t(48,0)
D.efM=new A.t(24,6)
D.dsR=w([B.I,D.efQ,D.egz,D.efM],x.g)
D.dtf=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.ecE={top:0,middle:1,bottom:2}
D.dwu=new A.bw(D.ecE,["Top","Middle","Bottom"],x.r)
D.eci={double:0,single:1,corners:2,none:3}
D.dwA=new A.bw(D.eci,["Double line","One line","Corners","None"],x.r)
D.edm={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dy2=new A.bw(D.edm,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dyf=new A.bw(B.hO,[],A.av("bw<H,+(n,n)>"))
D.ecx={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.D6=new A.bw(D.ecx,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.av("bw<n,H>"))
D.dAM=new H.Ng(32,null)
D.dAN=new H.Ng(40,null)
D.dAO=new H.Ng(46,null)
D.aIG=new C.asT(null)
D.eeM=new A.t(0,40)
D.eeN=new A.t(0,412)
D.eeP=new A.t(0,900)
D.ef_=new A.t(0,-74)
D.ef2=new A.t(100,300)
D.ef3=new A.t(10,14)
D.ef6=new A.t(10,-10)
D.efa=new A.t(10,-46)
D.efb=new A.t(10,-58)
D.efc=new A.t(116,442)
D.efd=new A.t(11,-1)
D.efe=new A.t(11,-10)
D.eff=new A.t(11,-21)
D.aJ2=new A.t(11,-60)
D.efl=new A.t(14,-2)
D.efm=new A.t(150,520)
D.a72=new A.t(150,592)
D.efp=new A.t(15,-15)
D.efq=new A.t(16,-1)
D.efu=new A.t(190,444)
D.efx=new A.t(1,5)
D.efF=new A.t(21,-78)
D.efG=new A.t(222,615)
D.IW=new A.t(225,300)
D.a74=new A.t(225,574)
D.efP=new A.t(24,-52)
D.efR=new A.t(250,210)
D.aJg=new A.t(300,0)
D.eg3=new A.t(300,440)
D.eg6=new A.t(318,476)
D.eg9=new A.t(324,144)
D.a77=new A.t(332,150)
D.egb=new A.t(335,585)
D.egc=new A.t(338,140)
D.egd=new A.t(340,158)
D.egf=new A.t(34,-60)
D.Dz=new A.t(36,-24)
D.egh=new A.t(372,470)
D.egi=new A.t(390,455)
D.egr=new A.t(42,468)
D.egs=new A.t(431,510)
D.egt=new A.t(431,520)
D.egu=new A.t(45,-92)
D.egv=new A.t(46,20)
D.egw=new A.t(46,-92)
D.egx=new A.t(46,-94)
D.egy=new A.t(47,-4)
D.egA=new A.t(48,-4)
D.egI=new A.t(4,-26)
D.egR=new A.t(60,455)
D.egY=new A.t(8,14)
D.eh1=new A.t(8,-76)
D.eh3=new A.t(95,575)
D.eh4=new A.t(98,-24)
D.eh6=new A.t(9,-2)
D.eh7=new A.t(9,-58)
D.aJp=new A.t(9,-79)
D.eh8=new A.t(9,-9)
D.ehL=new A.t(16.5,8)
D.ehN=new A.t(3.2,0)
D.ehP=new A.t(-16.5,8)
D.ehW=new A.t(16.5,2)
D.ehZ=new A.t(-3.2,0)
D.ei7=new A.t(9.5,6)
D.eib=new A.t(-10,14)
D.eic=new A.t(-10,-12)
D.eid=new A.t(-10,-58)
D.eie=new A.t(-11,-1)
D.eif=new A.t(-11,-10)
D.eih=new A.t(-11,-60)
D.eii=new A.t(-12,-14)
D.eij=new A.t(-12,-16)
D.eiq=new A.t(-14,-2)
D.eit=new A.t(-15,-15)
D.eiu=new A.t(-15,-3)
D.eiw=new A.t(-16,-1)
D.eiN=new A.t(-24,-52)
D.eiU=new A.t(-2,-34)
D.eiV=new A.t(-2,-38)
D.eiX=new A.t(-30,-100)
D.a78=new A.t(-36,-24)
D.ej7=new A.t(-4,-26)
D.ej9=new A.t(-4,-6)
D.eji=new A.t(-8,-3)
D.ejj=new A.t(-8,-48)
D.ejm=new A.t(-9,-2)
D.ejo=new A.t(-9,-58)
D.ejp=new A.t(-9,-79)
D.ejq=new A.t(-9,-9)
D.ejs=new A.t(-9.5,6)
D.ejG=new A.t(-16.5,2)
D.fCx=new A.y("Write a new book",null,B.hD,null,B.L,null,null,null,null,null,null,null)
D.ekf=new A.D(B.l3,D.fCx,null)
D.fR7=new A.y("Tap to go on",null,B.va,null,null,null,null,null,null,null,null,null)
D.ekz=new A.D(B.l2,D.fR7,null)
D.aoW=new A.ae(B.hL,18,B.c,null,null,null)
D.fvK=new A.y("Add",null,B.lO,null,null,null,null,null,null,null,null,null)
D.d90=w([D.aoW,B.qG,D.fvK],x.p)
D.f0q=new A.cd(B.aM,B.e,B.Q,B.m,null,B.p,null,0,D.d90,null)
D.ekC=new A.D(B.no,D.f0q,null)
D.ekD=new A.D(E.ajn,A8.X4,null)
D.fpr=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyO=new A.y("New Project",null,D.fpr,null,null,null,null,null,null,null,null,null)
D.dde=w([D.aoW,B.ac,D.fyO],x.p)
D.f0t=new A.cd(B.aM,B.e,B.Q,B.m,null,B.p,null,0,D.dde,null)
D.ekP=new A.D(B.iB,D.f0t,null)
D.fBk=new A.y("Choose your header",null,A0.t6,null,null,null,null,null,null,null,null,null)
D.el9=new A.D(B.hJ,D.fBk,null)
D.bau=new A.fj(2.2,null,null,null,null,B.cO,null,null,null,null)
D.f5D=new A.a7(22,22,D.bau,null)
D.b8A=new A.cg(B.A,null,null,D.f5D,null)
D.ele=new A.D(B.ZS,D.b8A,null)
D.byJ=new A.Q(14,2,14,6)
D.fPf=new A.y("The top of your book. Tap a design to see it.",null,O.vb,null,null,null,null,null,null,null,null,null)
D.elf=new A.D(D.byJ,D.fPf,null)
D.fAt=new A.y("\ud83c\udfc6 A new record!",null,B.fS,null,null,null,null,null,null,null,null,null)
D.elg=new A.D(B.l2,D.fAt,null)
D.emQ=new A.iS(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.emT=new A.iS(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aK_=new A.iS(1,0.9607843137254902,0.48627450980392156,0)
D.J4=new A.iS(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zR=new A.iS(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.emZ=new A.iS(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hjr=new C.bi7(null)
D.btG=new A.mu(D.hjr,null,B.ax,null,null)
D.aND=new A.cN(0,0,0,0,null,null,D.btG,null)
D.fvM=new A.y("\ud83c\udfc5",null,B.a9k,null,null,null,null,null,null,null,null,null)
D.er0=new A.cN(null,0,-34,null,null,null,D.fvM,null)
D.ez0=new A.z("E","Sit by the fire again")
D.eEz=new A.z("C","Good Learner")
D.eHW=new A.z("D","Still Growing")
D.eMo=new A.z(-42,42)
D.eNJ=new A.z("B","Faithful Listener")
D.ePD=new A.z("A","Keeper of the Family")
D.eSz=new A.bk(-17,0.7,0)
D.eT0=new A.bk(-8,0.95,1.3)
D.eTR=new A.bk(18,0.65,5.2)
D.eTT=new A.bk(0,1.15,2.6)
D.eU9=new A.bk(9,0.9,3.9)
D.eVF=new A.cw([0,0,1,1])
D.aP3=new A.a3(0,0,520,160)
D.eYv=new A.a3(10,612,440,618)
D.eYw=new A.a3(10,612,440,628)
D.eYz=new A.a3(14,-64,34,-12)
D.eYC=new A.a3(300,336,350,348)
D.a81=new A.a3(30,96,420,346)
D.eYD=new A.a3(30,-9,46,1)
D.eYE=new A.a3(4,2,11,14)
D.eYG=new A.a3(-8,-12.5,8,-7)
D.eYH=new A.a3(-16.5,-21,16.5,1)
D.eYI=new A.a3(60,342,88,348)
D.Tw=new A.a3(66,-66,94,-36)
D.eYJ=new A.a3(6,8,10,14)
D.eYM=new A.a3(95,343,115,348)
D.eYN=new A.a3(-6.5,-74,6.5,-58)
D.eYT=new A.a3(-100,-74,100,-12)
D.eYU=new A.a3(-10,8,-6,14)
D.eYV=new A.a3(-11,2,-4,14)
D.eYW=new A.a3(-11,-70,11,-56)
D.eZ2=new A.a3(-13,-24,13,-4)
D.eZ8=new A.a3(-15,-21,15,0)
D.eZb=new A.a3(-16,-21,16,1)
D.eZc=new A.a3(-16,-21,16,2)
D.eZf=new A.a3(-16,-26,16,-6)
D.eZp=new A.a3(-230,-26,230,26)
D.eZN=new A.a3(-38,-26,12,-6)
D.eZR=new A.a3(-3,-70,3,-63)
D.eZS=new A.a3(-44,-22,44,0)
D.eZU=new A.a3(-46,-9,-30,1)
D.aP7=new A.a3(-80,-190,80,20)
D.f_0=new A.a3(-8,-26,40,-6)
D.f_1=new A.a3(-98,-80,92,-75)
D.f_2=new A.a3(-9,-15,9,-9)
D.fOO=new A.y("Let the AI write it from your tree",null,B.iK,null,B.L,null,null,null,null,null,null,null)
D.bGD=new A.ds(1,B.cn,D.fOO,null)
D.d5D=w([E.a2v,B.ac,D.bGD],x.p)
D.f05=new A.cd(B.aM,B.e,B.Q,B.m,null,B.p,null,0,D.d5D,null)
D.fvo=new A.y("Save member",null,B.ch,null,null,null,null,null,null,null,null,null)
D.dla=w([D.apN,B.ac,D.fvo],x.p)
D.f0f=new A.cd(B.aM,B.b8,B.i,B.m,null,B.p,null,0,D.dla,null)
D.bS8=new A.ae(B.i0,14,B.b_,null,null,null)
D.fj8=new A.F(!0,B.b_,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzd=new A.y("Cashier",null,D.fj8,null,null,null,null,null,null,null,null,null)
D.ddL=w([D.bS8,B.bo,D.fzd],x.p)
D.f0i=new A.cd(B.aM,B.e,B.Q,B.m,null,B.p,null,0,D.ddL,null)
D.fvp=new A.y("Transfer & settings",null,B.dd,null,null,null,null,null,null,null,null,null)
D.bEF=new A.bA(1,B.bc,D.fvp,null)
D.cYb=w([D.apn,B.at,D.bEF],x.p)
D.f0j=new A.cd(B.aM,B.e,B.i,B.m,null,B.p,null,0,D.cYb,null)
D.f4k=new A.au(16,40)
D.f4p=new A.au(22,64)
D.f4w=new A.au(280,88)
D.f5j=new A.a7(30,null,null,null)
D.fuw=new A.y("The teacher is writing\u2026",null,B.A9,null,null,null,null,null,null,null,null,null)
D.b9I=new A.cg(B.A,null,null,D.fuw,null)
D.hdJ=new A.c0("w",x.W)
D.f5J=new A.a7(null,56,D.b9I,D.hdJ)
D.f6v=new A.hR(5,8,8,1,null)
D.f6D=new A.hR(2,12,12,1.05,null)
D.fyU=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.f7l=new A.b2(D.fyU,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fz8=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aR9=new A.b2(D.fz8,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fHv=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f7P=new A.b2(D.fHv,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fSb=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.f7U=new A.b2(D.fSb,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fBi=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.f80=new A.b2(D.fBi,null,null,null,null,null,null,null,null,null,null,null,null,B.fX,!1,null,null,null,B.t,null)
D.fPs=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aRd=new A.b2(D.fPs,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fBg=new A.y("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.f8q=new A.b2(D.fBg,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fw1=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f8s=new A.b2(D.fw1,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fEZ=new A.y("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.f8y=new A.b2(D.fEZ,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fSV=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.f9d=new A.b2(D.fSV,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fNH=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.f9C=new A.b2(D.fNH,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fSf=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f9F=new A.b2(D.fSf,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fJ7=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f9H=new A.b2(D.fJ7,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fD9=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.f9I=new A.b2(D.fD9,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fDa=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.faI=new A.b2(D.fDa,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fyW=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fb_=new A.b2(D.fyW,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fAV=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fbj=new A.b2(D.fAV,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fIA=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fbz=new A.b2(D.fIA,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fDZ=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fbA=new A.b2(D.fDZ,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fo6=new A.F(!0,B.bA,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdc=new A.eu("\u2665",null,null,B.cQ,null,null,null,null,null,null,D.fo6)
D.fln=new A.F(!0,B.aP,null,null,null,null,28,B.P,B.cD,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fds=new A.eu("Today: how well do you know the family?",null,null,B.cQ,null,null,null,null,null,null,D.fln)
D.fdI=new A.F(!0,B.r1,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feM=new A.F(!0,D.kz,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffb=new A.F(!0,D.kz,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fff=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffo=new A.F(!0,D.fq,null,null,null,null,15,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffz=new A.F(!0,D.fq,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffT=new A.rO(!0,B.rV,null,null,null,null,B.dy,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg8=new A.F(!0,B.cI,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgb=new A.F(!0,D.kz,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgc=new A.F(!0,B.cI,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgh=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgk=new A.F(!0,B.cI,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgP=new A.F(!0,B.b_,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgQ=new A.F(!0,B.ad,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgS=new A.F(!0,B.aP,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhk=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSm=new A.F(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSo=new A.F(!0,D.lr,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhJ=new A.F(!0,B.cI,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9p=new A.rO(!0,B.T1,null,null,null,null,B.dy,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.UA=new A.F(!0,B.cI,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhU=new A.F(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhY=new A.F(!0,D.fq,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fil=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjt=new A.F(!0,D.fq,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSA=new A.F(!0,D.fq,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjM=new A.F(!0,B.ad,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjX=new A.F(!0,D.fq,null,null,null,null,null,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjZ=new A.F(!0,null,null,null,null,null,8,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk3=new A.F(!0,I.iP,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSE=new A.F(!0,D.fq,null,null,null,null,14.5,B.P,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkZ=new A.F(!0,D.fq,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flh=new A.F(!0,D.fq,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flj=new A.F(!0,B.M,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flk=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flH=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A7.HS,null,null,null)
D.aSU=new A.F(!0,D.fq,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm4=new A.F(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmq=new A.F(!0,B.f7,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmN=new A.F(!0,B.bP,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmR=new A.F(!0,B.by,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn2=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn5=new A.F(!0,D.fq,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnd=new A.F(!0,D.Fr,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnm=new A.F(!0,B.b_,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnM=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnS=new A.F(!0,B.ad,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.CN,null,null,null)
D.foh=new A.F(!0,B.cI,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foq=new A.F(!0,B.cO,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foE=new A.F(!0,D.ls,null,null,null,null,13,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTd=new A.F(!0,D.fq,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.K5=new A.F(!0,B.cI,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTf=new A.F(!0,B.cI,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.CN,null,null,null)
D.foY=new A.F(!0,B.bP,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp1=new A.F(!0,F.n6,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpp=new A.F(!0,B.b_,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpG=new A.F(!0,D.fq,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq1=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqo=new A.F(!0,D.fq,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqR=new A.F(!0,D.fq,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqX=new A.F(!0,B.al,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr5=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTw=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9R=new A.F(!0,B.al,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9T=new A.F(!0,D.lr,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsM=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft3=new A.F(!0,B.aP,null,null,null,null,27,B.P,B.cD,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftb=new A.F(!0,I.iP,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftj=new A.F(!0,I.iP,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftN=new A.y("Time:",null,B.hl,null,null,null,null,null,null,null,null,null)
D.fu8=new A.y("\ud83c\udfae",null,F.a9J,null,null,null,null,null,null,null,null,null)
D.fu9=new A.y("Themes",null,B.pu,null,null,null,null,null,null,null,null,null)
D.fuE=new A.y("\ud83c\udfb2",null,B.wU,null,null,null,null,null,null,null,null,null)
D.fuI=new A.y("Delete this game?",null,B.iK,null,null,null,null,null,null,null,null,null)
D.fuP=new A.y("Add Item",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fjH=new A.F(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fve=new A.y("Debt receipt",null,D.fjH,null,B.L,null,null,null,null,null,null,null)
D.aTs=new A.F(!0,B.al,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvw=new A.y("Person who owes",null,D.aTs,null,null,null,null,null,null,null,null,null)
D.fwu=new A.y("Notes",null,B.a9x,null,null,null,null,null,null,null,null,null)
D.fwV=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fiC=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwY=new A.y("Share",null,D.fiC,null,null,null,null,null,null,null,null,null)
D.fxU=new A.y("Move your family trees",null,D.aTw,null,null,null,null,null,null,null,null,null)
D.fyw=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fz7=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fzv=new A.y("SAVE",null,D.K5,null,null,null,null,null,null,null,null,null)
D.fA7=new A.y("The round button is the right answer.",null,O.E2,null,null,null,null,null,null,null,null,null)
D.fAs=new A.y("Remove this book?",null,B.fS,null,null,null,null,null,null,null,null,null)
D.fpm=new A.F(!0,B.cI,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.CN,null,null,null)
D.fB_=new A.y("Fireside Stories",null,D.fpm,null,null,null,null,null,null,null,null,null)
D.aTY=new A.y("Download",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fBG=new A.y("What should the AI do?",null,B.dd,null,null,null,null,null,null,null,null,null)
D.fih=new A.F(!0,D.lr,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBW=new A.y("REPORT CARD",null,D.fih,null,null,null,null,null,null,null,null,null)
D.fCD=new A.y("Calabash Catch",null,B.K9,null,null,null,null,null,null,null,null,null)
D.fD5=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fDw=new A.y("\ud83c\udfe1",null,B.E1,null,null,null,null,null,null,null,null,null)
D.fEd=new A.y("Ribbon bookmark",null,B.jl,null,null,null,null,null,null,null,null,null)
D.fqQ=new A.F(!0,B.b_,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEH=new A.y("NGMY.ORG",null,D.fqQ,null,B.L,null,null,null,null,null,null,null)
D.fG0=new A.y("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fn6=new A.F(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGL=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fn6,null,B.L,null,null,null,null,null,null,null)
D.fHY=new A.y("Delete",null,B.Us,null,null,null,null,null,null,null,null,null)
D.fHZ=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fI4=new A.y("Thumbnail",null,B.pu,null,null,null,null,null,null,null,null,null)
D.fIG=new A.y("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fIL=new A.y("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.wW,null,B.L,null,null,null,null,null,null,null)
D.fJ8=new A.y("Your photos",null,B.pu,null,null,null,null,null,null,null,null,null)
D.fJn=new A.y("Create Project",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fJK=new A.y("\u2b50 stars",null,B.UH,null,null,null,null,null,null,null,null,null)
D.fJY=new A.y("Design your cover",null,A0.t6,null,null,null,null,null,null,null,null,null)
D.fK3=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fK6=new A.y("PICTURE",null,L.vf,null,null,null,null,null,null,null,null,null)
D.fK8=new A.y("\ud83c\udfaf",null,D.UX,null,null,null,null,null,null,null,null,null)
D.fKt=new A.y("Paid",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fKv=new A.y("You can undo it right after.",null,O.E2,null,null,null,null,null,null,null,null,null)
D.fL2=new A.y("Print",null,B.vc,null,null,null,null,null,null,null,null,null)
D.fLr=new A.y("Amount owed",null,D.aTs,null,null,null,null,null,null,null,null,null)
D.fLG=new A.y("Got it",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fMh=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fMk=new A.y("Add to budget",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fMM=new A.y("Debtor signature",null,B.a9x,null,null,null,null,null,null,null,null,null)
D.fMV=new A.y("Change icon",null,E.aSH,null,null,null,null,null,null,null,null,null)
D.fNJ=new A.y("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.t8,null,null,null,null,null,null,null,null,null)
D.fOa=new A.y("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fOg=new A.y("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.UW,null,null,null,null,null,null,null,null,null)
D.fOE=new A.y("Download",null,B.vc,null,null,null,null,null,null,null,null,null)
D.fOF=new A.y("The person who planted this tree has not made a game yet.",null,B.vg,null,null,null,null,null,null,null,null,null)
D.fOJ=new A.y("Change",null,B.pu,null,null,null,null,null,null,null,null,null)
D.fPy=new A.y("Clear all",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fPB=new A.y("WHAT SHOULD IT CHANGE?",null,L.vf,null,null,null,null,null,null,null,null,null)
D.fQ9=new A.y("COLOUR",null,L.vf,null,null,null,null,null,null,null,null,null)
D.fQn=new A.y("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fQq=new A.y("Create Tree",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fQz=new A.y("Give me another clue",null,D.K5,null,null,null,null,null,null,null,null,null)
D.fRt=new A.y("Create Family Tree",null,B.f1,null,null,null,null,null,null,null,null,null)
D.fRD=new A.y("THE TEACHER EXPLAINS THESE",null,T.t8,null,null,null,null,null,null,null,null,null)
D.fdH=new A.F(!0,E.ka,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRJ=new A.y("Write the first page myself",null,D.fdH,null,null,null,null,null,null,null,null,null)
D.fSi=new A.y("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fSp=new A.y("Create Project",null,E.aTa,null,null,null,null,null,null,null,null,null)
D.heW=new C.abK(1,"header")
D.aaQ=new C.abK(2,"projects")
D.heX=new C.abK(3,"cashier")
D.aaR=new C.abK(4,"familyTree")
D.hrQ=new C.cBZ(0,"start")
D.hrR=new C.cC_(0,"start")
D.hfk=new C.YO(null)
D.hgk=new C.Zg(null)
D.dyc=new A.bw(B.hO,[],A.av("bw<n,G3>"))
D.dgj=w([],x.dE)
D.dgk=w([],x.M)
D.hgR=new C.bfm(D.dyc,D.dgj,D.dgk,0,0,null,null)
D.aXW=new C.a_6(0,"intro")
D.aXX=new C.a_6(1,"countdown")
D.ab4=new C.a_6(2,"ask")
D.VO=new C.a_6(3,"reveal")
D.aXY=new C.a_6(4,"end")
D.hjt=new C.rX(G.Fz,D.ls,B.cI,G.lt,5,!1,!1,!1,0,null)
D.hju=new C.rX(G.Fz,B.ek,B.cI,B.bO,2,!0,!0,!1,2,B.cI)
D.hjv=new C.rX(B.o6,B.cO,B.cI,G.lt,2,!0,!1,!1,2,B.aC)
D.hjw=new C.rX(G.Fz,B.dI,B.cI,G.lt,5,!1,!1,!1,1,null)
D.hjx=new C.rX(G.YR,D.agV,B.cI,G.lt,4,!0,!1,!0,0,null)
D.aY0=new C.rX(G.YR,B.dF,B.cI,G.lt,3,!0,!1,!0,2,null)
D.aY1=new C.rX(G.mB,D.ls,B.c,G.lt,0,!1,!1,!0,0,null)
D.aY2=new C.rX(B.o6,B.aD,B.cI,B.bO,2,!0,!0,!1,2,B.dF)
D.aY3=new C.rX(B.o6,F.n6,B.hW,G.lt,5,!1,!1,!0,3,null)
D.hjy=new C.rX(B.o6,B.dF,B.cI,G.lt,0,!0,!1,!1,0,B.aD)
D.aY4=new C.rX(G.Fz,B.ek,B.cI,B.bO,1,!1,!0,!1,1,null)
D.aY5=new C.rX(G.F7,B.aC,B.aD,G.lt,4,!0,!1,!0,2,null)
D.hjz=new C.rX(G.mB,B.aC,B.ek,G.lt,3,!0,!1,!1,0,null)
D.hjA=new C.rX(B.o6,B.dI,B.cI,B.bO,1,!1,!0,!1,1,null)
D.hjB=new C.rX(G.F7,D.ag1,B.c,G.lt,5,!1,!1,!0,0,null)
D.hke=new C.a_F(null)
D.hrZ=new C.af3(0,"still")
D.Wa=new C.af3(1,"walk")
D.abo=new C.af3(2,"pound")
D.abp=new C.af3(3,"drum")
D.hnr=new C.a0X(0,"greet")
D.aYv=new C.a0X(1,"teach")
D.abq=new C.a0X(2,"ask")
D.hns=new C.a0X(3,"feedback")
D.aYw=new C.a0X(4,"end")
D.Wf=new C.a1f(0,"intro")
D.Wg=new C.a1f(1,"asking")
D.Ay=new C.a1f(2,"reacting")
D.abA=new C.a1f(3,"driving")
D.abB=new C.a1f(4,"arrived")
D.abE=new C.aKn(0,"projects")
D.aYU=new C.aKn(1,"cashier")
D.hpu=new C.aKn(2,"familyTree")})()};
(a=>{a["zD5o8SdBaFsSvgIBhcaRhY7SFes="]=a.current})($__dart_deferred_initializers__);