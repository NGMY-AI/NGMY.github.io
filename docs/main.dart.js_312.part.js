((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,S,A2,G,F,E,O,A3,A4,A5,T,U,A6,A7,M,A8,H,A9,Aa,V,W,X,Ab,Ac,Y,Ad,Ae,Z,Af,Ag,Ah,K,Ai,A_,A0,P,Aj,L,Q,C={
bBg(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bBg=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v4(null,""),$async$bBg)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.U(y.j)
t=A.mZ(b1)
s=A.c2(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dn(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.dr(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.L)(h),++d){a0=h[d]
f.push(A.F(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.R.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qF(t,a1,B.hl,E.ER),$async$bBg)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.PJ(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.U(l!=null&&A.Kr(l)?y.l:y.i)
for(j=J.a8(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cA
g=a8.h(0,"title")
a9=B.a.i(A.t(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.t(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.y(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1u(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBg,v)},
afV(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$afV=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v4(null,""),$async$afV)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.U(y.j)
t=A.mZ(b6)
s=x.S
r=A.dc(c1,0,A.dJ(4,"count",s),A.T(c1).c)
q=F.a1h(new A.K(r,new C.fu5(),r.$ti.k("K<aj.E,n>")).aI(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fu4(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aI(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$afV)
case 6:l=c5
k=F.PJ(l==null?"":l)
if(k==null)throw A.U("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.an5(s,D.dii,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.U("There is no page to change.")
h=A.V(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dn(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.L)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.F(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.R.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$afV)
case 10:l=c5
k=l==null?null:F.PJ(l)
if(k==null)throw A.U(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d8(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.kU(a5,a2.k("kU<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gU(a5))
b0=J.a8(a9)
b1=A.aN(b0.h(a9,"index"))
i=b1==null?null:B.k.O(b1)
if(i==null||!B.d.t(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.t(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.t(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.y(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bc<2>")
p=A.cD(new A.bc(h,s),new C.fu6(),s.k("J.E"),p)
p=F.a1h(A.p4(p,3,A.a4(p).k("J.E")).aI(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cz<1>")
b4=A.B(new A.cz(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1u(s,b9),$async$afV)
case 13:b5=c5
for(s=J.a8(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.an5(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afV,v)},
hi5(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fDb(e,f),d,null,!0,!0,x.g2)},
an5:function an5(d,e,f){this.a=d
this.b=e
this.c=f},
fu5:function fu5(){},
fu4:function fu4(d){this.a=d},
fu6:function fu6(){},
fDb:function fDb(d,e){this.a=d
this.b=e},
bz5(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bz5=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b8(b1,new C.fjm())){u=null
w=1
break}t=B.d.d9(b1,new C.fjn())
s=$.X()
r=new A.rT()
q=A.GC(r,D.aKZ)
p=A.M()
p.r=B.c.gp(0)
q.aY(D.aKZ,p)
o=A.M()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fz
n=new C.fjs(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.k.D(k-m,1,1e4)
d=B.k.D(j-l,1,1e4)
a0=B.k.D(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.X()
p=A.a([],x.v)
a3=new A.aQ(s.r,B.ap,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b5(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aO(a3,o)}else{p=A.a([],x.v)
a3=new A.aQ(s.r,B.ap,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b5(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aO(a3,o)}w=4
return A.b(r.qh().z0(520,160),$async$bz5)
case 4:w=3
return A.b(b3.hp(B.fW),$async$bz5)
case 3:b0=b3
u=b0==null?null:J.fa(B.dH.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bz5,v)},
frM(d){return C.hWk(d)},
hWk(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$frM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bel()
n=d.x!=null&&d.yH(null).length===0
if(d.x!=null)t=n?D.yZ:D.HR
else t=d.gT1()?D.HR:D.aG2
w=3
return A.b(C.bz5(d.ax),$async$frM)
case 3:s=f
p.a=null
if(s!=null)p.a=A.alO(s)
r=A.a3o(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aG2}else{p.c=C.wq(q,!0)
p.b=n?D.yZ:D.HR}r.a2c(A.fNa(new C.frO(p,d,new C.frP(),t,n,o),null,D.bsM,B.vV))
u=r.jV(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$frM,v)},
fyp(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fyp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.frM(d),$async$fyp)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aJ(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A7.G6(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fyp,v)},
fjm:function fjm(){},
fjn:function fjn(){},
fjs:function fjs(d){this.a=d},
frP:function frP(){},
frO:function frO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
frN:function frN(){},
fDD(d,e){var w=0,v=A.j(x.H)
var $async$fDD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fDH(new A.cq(null,x.J),e),d,null,!0,!0,x.H),$async$fDD)
case 2:return A.h(null,v)}})
return A.i($async$fDD,v)},
bBK(d,e,f,g){return C.i2I(d,e,f,g)},
i2I(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bBK=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cD.aJ(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.R(D.ePY)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fDz(g,r,f),d,null,!0,!0,x.H),$async$bBK)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bBK,v)},
fDI(d,e){var w=0,v=A.j(x.H)
var $async$fDI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fDL(new A.cq(null,x.J),e),d,null,!0,!0,x.H),$async$fDI)
case 2:return A.h(null,v)}})
return A.i($async$fDI,v)},
aX5:function aX5(d,e){this.c=d
this.a=e},
c_Q:function c_Q(){},
b97:function b97(d,e){this.b=d
this.a=e},
fDH:function fDH(d,e){this.a=d
this.b=e},
fDE:function fDE(d){this.a=d},
fDF:function fDF(d,e,f){this.a=d
this.b=e
this.c=f},
fDG:function fDG(d,e){this.a=d
this.b=e},
fDz:function fDz(d,e,f){this.a=d
this.b=e
this.c=f},
fDx:function fDx(d){this.a=d},
fDy:function fDy(d,e,f){this.a=d
this.b=e
this.c=f},
fDL:function fDL(d,e){this.a=d
this.b=e},
fDJ:function fDJ(d){this.a=d},
fDK:function fDK(d,e,f){this.a=d
this.b=e
this.c=f},
fmQ(d,e){var w=0,v=A.j(x.y),u,t
var $async$fmQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a12(d),$async$fmQ)
case 3:t=g
J.nj(t,new C.fmR(e))
u=A.agy(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fmQ,v)},
fmR:function fmR(d){this.a=d},
anc:function anc(d,e,f){this.c=d
this.d=e
this.a=f},
aBq:function aBq(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dDl:function dDl(d,e){this.a=d
this.b=e},
dD6:function dD6(d,e){this.a=d
this.b=e},
dD9:function dD9(d,e,f){this.a=d
this.b=e
this.c=f},
dD8:function dD8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dD7:function dD7(d,e){this.a=d
this.b=e},
dDa:function dDa(d,e){this.a=d
this.b=e},
dD4:function dD4(){},
dD5:function dD5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dD3:function dD3(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dCP:function dCP(d){this.a=d},
dCQ:function dCQ(d,e,f){this.a=d
this.b=e
this.c=f},
dCR:function dCR(d,e){this.a=d
this.b=e},
dCO:function dCO(d){this.a=d},
dCW:function dCW(d,e){this.a=d
this.b=e},
dCN:function dCN(d){this.a=d},
dCX:function dCX(d,e,f){this.a=d
this.b=e
this.c=f},
dCY:function dCY(d,e,f){this.a=d
this.b=e
this.c=f},
dCM:function dCM(d,e){this.a=d
this.b=e},
dCZ:function dCZ(d,e,f){this.a=d
this.b=e
this.c=f},
dCL:function dCL(d,e){this.a=d
this.b=e},
dD_:function dD_(d,e){this.a=d
this.b=e},
dCK:function dCK(d){this.a=d},
dD0:function dD0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dCI:function dCI(){},
dCC:function dCC(d){this.a=d},
dCD:function dCD(d){this.a=d},
dCJ:function dCJ(d,e){this.a=d
this.b=e},
dD1:function dD1(d,e){this.a=d
this.b=e},
dCH:function dCH(d){this.a=d},
dD2:function dD2(d){this.a=d},
dCG:function dCG(){},
dCS:function dCS(d,e){this.a=d
this.b=e},
dCF:function dCF(d){this.a=d},
dCT:function dCT(d,e,f){this.a=d
this.b=e
this.c=f},
dCE:function dCE(d,e){this.a=d
this.b=e},
dCB:function dCB(d,e){this.a=d
this.b=e},
dCU:function dCU(d){this.a=d},
dCV:function dCV(d,e,f){this.a=d
this.b=e
this.c=f},
dDo:function dDo(){},
dDp:function dDp(d,e){this.a=d
this.b=e},
dDm:function dDm(d){this.a=d},
dDn:function dDn(d){this.a=d},
dDi:function dDi(d,e){this.a=d
this.b=e},
dDj:function dDj(d){this.a=d},
dDb:function dDb(d,e,f){this.a=d
this.b=e
this.c=f},
dDc:function dDc(d,e,f){this.a=d
this.b=e
this.c=f},
dDd:function dDd(d,e,f){this.a=d
this.b=e
this.c=f},
dDe:function dDe(d,e,f){this.a=d
this.b=e
this.c=f},
dDf:function dDf(d,e,f){this.a=d
this.b=e
this.c=f},
dDg:function dDg(d,e,f){this.a=d
this.b=e
this.c=f},
dDh:function dDh(d,e,f){this.a=d
this.b=e
this.c=f},
dDq:function dDq(){},
dDr:function dDr(){},
dDs:function dDs(){},
dDt:function dDt(d){this.a=d},
dDk:function dDk(d,e){this.a=d
this.b=e},
hei(d){return B.d.dM(D.a0W,new C.fnl(d),new C.fnm())},
u0:function u0(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fnl:function fnl(d){this.a=d},
fnm:function fnm(){},
ajx:function ajx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aSV:function aSV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RX:function RX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcH:function bcH(){this.d=$
this.c=this.a=null},
d3d:function d3d(d,e){this.a=d
this.b=e},
d3b:function d3b(d,e){this.a=d
this.b=e},
d3c:function d3c(){},
d3e:function d3e(d,e){this.a=d
this.b=e},
h_b(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.n4(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
Kc(d,e){return C.hUY(d,e)},
hUY(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Kc=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Kc)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.R.aH(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d8(p,x.f)
o=A.cD(o,new C.fpn(),o.$ti.k("J.E"),x.B)
n=A.a4(o).k("a2<J.E>")
o=A.B(new A.a2(o,new C.fpo(),n),n.k("J.E"))
B.d.b_(o,new C.fpp())
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
return A.i($async$Kc,v)},
Aq(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Aq=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Aq)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fCh(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.ar("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$Aq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Aq,v)},
aP6(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aP6=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Kc(d,e),$async$aP6)
case 2:u=h
t=J.cE(u)
s=t.ba(u,new C.fKl(f))
if(s===-1)t.cj(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Aq(d,e,u),$async$aP6)
case 3:return A.h(null,v)}})
return A.i($async$aP6,v)},
bzy(d,e,f){var w=0,v=A.j(x.H),u
var $async$bzy=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Kc(d,e),$async$bzy)
case 2:u=h
J.nj(u,new C.fmI(f))
w=3
return A.b(C.Aq(d,e,u),$async$bzy)
case 3:return A.h(null,v)}})
return A.i($async$bzy,v)},
bzN(d,e){return C.hUX(d,e)},
hUX(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bzN=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bzN)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.M7
w=1
break}p=B.R.aH(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aN(o.h(0,"emblem"))
k=k==null?null:B.k.O(k)
if(k==null)k=0
if(D.C1.ah(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aN(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a2t,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.t(D.a1V,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.t(D.a1Q,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.t(D.cOS,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.H2(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.M7
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.M7
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bzN,v)},
QN(d,e,f){return C.i2e(d,e,f)},
i2e(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$QN=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$QN)
case 7:r=h
w=8
return A.b(r.ar("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.ae(),null)),$async$QN)
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
return A.i($async$QN,v)},
Qh(d,e){return C.hUZ(d,e)},
hUZ(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Qh=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Qh)
case 7:r=g
q=r.rU("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Kc(d,e),$async$Qh)
case 8:if(!j.cx(g)){n=B.a.i(d.toLowerCase())
m=J.ll(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Qh)
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
return A.i($async$Qh,v)},
afd(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$afd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qh(d,e),$async$afd)
case 3:s=g
r=J.a8(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.L(s,t)
w=5
return A.b(A.az(),$async$afd)
case 5:w=4
return A.b(g.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$afd)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afd,v)},
a1H(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a1H=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Qh(d,e),$async$a1H)
case 2:s=h
J.hC(s,f)
w=3
return A.b(A.az(),$async$a1H)
case 3:u=h
w=4
return A.b(u.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a1H)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1H)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1H)
case 6:return A.h(null,v)}})
return A.i($async$a1H,v)},
n4:function n4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpn:function fpn(){},
fpo:function fpo(){},
fpp:function fpp(){},
fCh:function fCh(){},
fKl:function fKl(d){this.a=d},
fmI:function fmI(d){this.a=d},
H2:function H2(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bLV:function bLV(d){this.a=d},
i2x(d,e,f,g,h,i,j){return A.a5(d,!1).c6(A.e6(new C.fCQ(j,i,f,e,h,g),!0,null,x.H))},
Qd(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Qd=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qh(h,g),$async$Qd)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.I(x.q).f.R(D.aN0)
u=!1
w=1
break}w=4
return A.b(C.hi5(d,f,e),$async$Qd)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.afd(h,g),$async$Qd)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.n4(""+(q+n),l,B.a.i(m.b),new A.S(Date.now(),0,!1)))}w=6
return A.b(C.Aq(h,r,p),$async$Qd)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.QN(h,r,new C.H2("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Qd)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Qd,v)},
fCQ:function fCQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Yv:function Yv(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayt:function ayt(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d3T:function d3T(d){this.a=d},
d3S:function d3S(d,e){this.a=d
this.b=e},
d3H:function d3H(d,e){this.a=d
this.b=e},
d3E:function d3E(d,e){this.a=d
this.b=e},
d3f:function d3f(d){this.a=d},
d3g:function d3g(d,e){this.a=d
this.b=e},
d3I:function d3I(d){this.a=d},
d3o:function d3o(d){this.a=d},
d3m:function d3m(d){this.a=d},
d3n:function d3n(d){this.a=d},
d3p:function d3p(d){this.a=d},
d3F:function d3F(d){this.a=d},
d3G:function d3G(){},
d3k:function d3k(d){this.a=d},
d3l:function d3l(d,e){this.a=d
this.b=e},
d3q:function d3q(d){this.a=d},
d3r:function d3r(d,e){this.a=d
this.b=e},
d3R:function d3R(d){this.a=d},
d3Q:function d3Q(d,e){this.a=d
this.b=e},
d3P:function d3P(d){this.a=d},
d3B:function d3B(d){this.a=d},
d3A:function d3A(d){this.a=d},
d3C:function d3C(d){this.a=d},
d3h:function d3h(d,e){this.a=d
this.b=e},
d3D:function d3D(d,e){this.a=d
this.b=e},
d3u:function d3u(d){this.a=d},
d3v:function d3v(d){this.a=d},
d3t:function d3t(){},
d3w:function d3w(d){this.a=d},
d3x:function d3x(d){this.a=d},
d3y:function d3y(d,e){this.a=d
this.b=e},
d3z:function d3z(d,e,f){this.a=d
this.b=e
this.c=f},
d3s:function d3s(d,e){this.a=d
this.b=e},
d3K:function d3K(d){this.a=d},
d3J:function d3J(){},
d3L:function d3L(d){this.a=d},
d3M:function d3M(d){this.a=d},
d3N:function d3N(d){this.a=d},
d3O:function d3O(d,e){this.a=d
this.b=e},
d3i:function d3i(d){this.a=d},
d3j:function d3j(d){this.a=d},
Yz:function Yz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bd1:function bd1(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d5D:function d5D(d){this.a=d},
d5E:function d5E(d){this.a=d},
d5C:function d5C(d){this.a=d},
d5F:function d5F(d){this.a=d},
d5B:function d5B(d){this.a=d},
d5G:function d5G(d){this.a=d},
d5A:function d5A(d){this.a=d},
d5H:function d5H(d,e){this.a=d
this.b=e},
d5z:function d5z(d,e){this.a=d
this.b=e},
d5I:function d5I(d,e){this.a=d
this.b=e},
Yx:function Yx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
adI:function adI(d,e,f){this.a=d
this.b=e
this.c=f},
ayu:function ayu(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d47:function d47(d,e){this.a=d
this.b=e},
d46:function d46(d,e){this.a=d
this.b=e},
d4b:function d4b(d){this.a=d},
d4a:function d4a(d,e){this.a=d
this.b=e},
d48:function d48(d){this.a=d},
d49:function d49(d){this.a=d},
d4c:function d4c(d){this.a=d},
d4d:function d4d(d){this.a=d},
d45:function d45(d,e){this.a=d
this.b=e},
d44:function d44(d,e){this.a=d
this.b=e},
Jk:function Jk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XO:function XO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cDa:function cDa(d){this.a=d},
cDb:function cDb(){},
cDc:function cDc(d){this.a=d},
bai:function bai(d,e,f){this.b=d
this.c=e
this.a=f},
ba9:function ba9(d,e){this.b=d
this.a=e},
u1:function u1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y5:function Y5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bag:function bag(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cWC:function cWC(d,e,f){this.a=d
this.b=e
this.c=f},
cWB:function cWB(d,e){this.a=d
this.b=e},
cX0:function cX0(d){this.a=d},
cWO:function cWO(){},
cX1:function cX1(d){this.a=d},
cWN:function cWN(){},
cX2:function cX2(d,e){this.a=d
this.b=e},
cWM:function cWM(d,e){this.a=d
this.b=e},
cX3:function cX3(d,e){this.a=d
this.b=e},
cWL:function cWL(d,e){this.a=d
this.b=e},
cX4:function cX4(d){this.a=d},
cWK:function cWK(){},
cX5:function cX5(d,e){this.a=d
this.b=e},
cWJ:function cWJ(d,e){this.a=d
this.b=e},
cX6:function cX6(d){this.a=d},
cWW:function cWW(d,e){this.a=d
this.b=e},
cX7:function cX7(d){this.a=d},
cX8:function cX8(d){this.a=d},
cXa:function cXa(d){this.a=d},
cXb:function cXb(d){this.a=d},
cWV:function cWV(d,e){this.a=d
this.b=e},
cXc:function cXc(d,e){this.a=d
this.b=e},
aFt:function aFt(d){this.a=d},
bfu:function bfu(d){this.a=d},
b8w:function b8w(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hTW(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.agK(a6),a5=a4.length
if(a5===0)return""
w=A.V(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.by(new A.S(Date.now(),0,!1))
s=new C.fnp(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a2<1>"),q=q.k("cQ<1,n>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xA)m.push(l===D.YW?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cD(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cD(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jV(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jV(h,a2,a2)-A.jV(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.ah(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.B(new A.cQ(new A.a2(a4,new C.fnn(u,f),p),new C.fno(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aI(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aI(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hTX(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.agK(a0),d=e.length
if(d===0)return""
w=x.N
v=A.V(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fnu(v,e)
q=new C.fns(v)
p=A.V(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.L)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.L)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.L)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.ah(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.ah(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.da(new A.bc(p,d),d.k("J.E"))
n=A.B(d,A.a4(d).k("cm.E"))
B.d.fh(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.fm(l,new C.fnt(p,m));k.C();t=f){j=l.gU(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ah(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aI(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hFG(d,e,f,g){var w,v,u=C.hTY(d,e)
if(u<=0||f.length<=u)return new A.adi(!1,D.BR,f)
if(g.t(0,e.a))return new A.adi(!1,D.BR,f)
w=A.T(f).c
v=A.dc(f,0,A.dJ(u,"count",x.S),w).dF(0)
return new A.adi(!0,A.dc(f,u,null,w).dF(0),v)},
hFH(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.agK(d3),d2=d1.length
if(d2===0)return D.fKn
w=x.N
v=A.V(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.ck(0,t.a,new C.d4k(t))}s=new C.d4B(v)
d2=x.h
r=A.V(w,d2)
q=new C.d4t(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d4s(r)
l=A.V(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cf(l.ck(0,k,new C.d4l()),o)}h=new C.d4r(s)
g=new C.d4q(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a2<J.E>")
f=A.B(new A.a2(new A.bc(v,p),new C.d4m(h),o),o.k("J.E"))
e=f.length===0?new A.bc(v,p).gK(0):B.d.gK(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.L)(f),++u){t=f[u]
a0=g.$2(t.a,A.aX(w))
if(a0>d){d=a0
e=t}}a1=A.aX(w)
p=x.S
a2=A.V(w,p)
a3=A.V(w,w)
a4=A.V(w,d2)
d2=x.gR
a5=A.V(w,d2)
a6=A.V(w,x.d9)
a7=A.V(w,d2)
a8=A.a([],x.s)
a9=new C.d4z(new C.d4v(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.V(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gajv(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.ev([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.L(0,i))break}if(h.$1(b0)&&a2.ah(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.r2(J.dH(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.V(w,x.cc)
b5=A.a([],x.M)
b6=A.V(w,d2)
b7=new C.d4j(a2,new C.d4A(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.L)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dt(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cz<1>")
d2=A.B(new A.cz(b4,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.Ff(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Js(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cz<1>")
d2=A.B(new A.cz(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bI(0,new C.d4n(c6,b4))
for(d2=new A.cJ(a4,a4.$ti.k("cJ<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gU(j)
if(b6.ah(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.fm(j,new C.d4o(c8));i.C();)o.push(j.gU(0).b)
if(o.length===0)continue
B.d.b_(o,new C.d4p())
c6.push(new C.aHy(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bcM(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hdQ(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cD(d)
return w==null?null:w.b[1]},
h8b(d,e,f,g,h,i,j,k,l,m,n){return new C.Z8(k,f,j,e,l,n,m,d,g,h,i,null)},
aAr(d,e,f,g,h,i,j){return new C.bgq(i,d,e,f,j,h,g,null)},
aoi:function aoi(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aC0:function aC0(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dRm:function dRm(d){this.a=d},
dRl:function dRl(d){this.a=d},
dRo:function dRo(d,e){this.a=d
this.b=e},
dRp:function dRp(d,e){this.a=d
this.b=e},
dRq:function dRq(d){this.a=d},
dRk:function dRk(d,e){this.a=d
this.b=e},
dRn:function dRn(d){this.a=d},
dRs:function dRs(d){this.a=d},
dRr:function dRr(d,e){this.a=d
this.b=e},
aoc:function aoc(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBY:function aBY(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dQN:function dQN(d){this.a=d},
dQL:function dQL(d){this.a=d},
dQM:function dQM(d){this.a=d},
dQO:function dQO(d,e){this.a=d
this.b=e},
dQI:function dQI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQg:function dQg(d){this.a=d},
dQh:function dQh(d,e){this.a=d
this.b=e},
dQv:function dQv(d){this.a=d},
dQt:function dQt(d){this.a=d},
dQu:function dQu(d,e){this.a=d
this.b=e},
dQw:function dQw(d){this.a=d},
dQx:function dQx(d,e){this.a=d
this.b=e},
dQH:function dQH(d,e){this.a=d
this.b=e},
dQF:function dQF(d,e){this.a=d
this.b=e},
dQE:function dQE(d,e){this.a=d
this.b=e},
dQA:function dQA(d,e){this.a=d
this.b=e},
dQz:function dQz(d){this.a=d},
dQB:function dQB(d,e){this.a=d
this.b=e},
dQy:function dQy(d){this.a=d},
dQC:function dQC(d){this.a=d},
dQD:function dQD(d){this.a=d},
dQG:function dQG(d,e){this.a=d
this.b=e},
dQ4:function dQ4(d,e){this.a=d
this.b=e},
dQ5:function dQ5(d,e){this.a=d
this.b=e},
dQQ:function dQQ(d,e,f){this.a=d
this.b=e
this.c=f},
dQK:function dQK(d,e,f){this.a=d
this.b=e
this.c=f},
dQJ:function dQJ(d){this.a=d},
dQ6:function dQ6(d){this.a=d},
dQ7:function dQ7(d){this.a=d},
dQ8:function dQ8(){},
dQ9:function dQ9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQd:function dQd(d,e){this.a=d
this.b=e},
dQc:function dQc(d,e){this.a=d
this.b=e},
dQb:function dQb(d){this.a=d},
dQe:function dQe(d,e){this.a=d
this.b=e},
dQa:function dQa(d){this.a=d},
dQP:function dQP(d){this.a=d},
dQq:function dQq(){},
dQr:function dQr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQp:function dQp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQl:function dQl(d,e,f){this.a=d
this.b=e
this.c=f},
dQk:function dQk(d,e,f){this.a=d
this.b=e
this.c=f},
dQi:function dQi(d,e){this.a=d
this.b=e},
dQm:function dQm(d){this.a=d},
dQn:function dQn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQj:function dQj(d,e){this.a=d
this.b=e},
dQo:function dQo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQs:function dQs(d,e){this.a=d
this.b=e},
dQX:function dQX(){},
dQY:function dQY(d,e){this.a=d
this.b=e},
dQZ:function dQZ(d){this.a=d},
dR_:function dR_(d,e){this.a=d
this.b=e},
dQT:function dQT(d){this.a=d},
dQR:function dQR(d,e){this.a=d
this.b=e},
dQU:function dQU(d,e){this.a=d
this.b=e},
dQV:function dQV(d,e){this.a=d
this.b=e},
dQW:function dQW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dR0:function dR0(d){this.a=d},
dQS:function dQS(d){this.a=d},
dQf:function dQf(d){this.a=d},
bcK:function bcK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d4h:function d4h(d){this.a=d},
d4g:function d4g(d,e){this.a=d
this.b=e},
d4i:function d4i(d){this.a=d},
d4f:function d4f(d,e){this.a=d
this.b=e},
fnp:function fnp(d,e){this.a=d
this.b=e},
fnq:function fnq(d){this.a=d},
fnr:function fnr(){},
fnn:function fnn(d,e){this.a=d
this.b=e},
fno:function fno(){},
fnu:function fnu(d,e){this.a=d
this.b=e},
fnv:function fnv(d){this.a=d},
fnw:function fnw(){},
fns:function fns(d){this.a=d},
fnt:function fnt(d,e){this.a=d
this.b=e},
Js:function Js(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ff:function Ff(d,e){this.a=d
this.b=e},
bcM:function bcM(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d4k:function d4k(d){this.a=d},
d4B:function d4B(d){this.a=d},
d4t:function d4t(d){this.a=d},
d4u:function d4u(){},
d4s:function d4s(d){this.a=d},
d4l:function d4l(){},
d4r:function d4r(d){this.a=d},
d4q:function d4q(d,e){this.a=d
this.b=e},
d4m:function d4m(d){this.a=d},
d4v:function d4v(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d4w:function d4w(d){this.a=d},
d4x:function d4x(d){this.a=d},
d4y:function d4y(){},
d4z:function d4z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d4A:function d4A(){},
d4j:function d4j(d,e,f,g,h,i,j,k,l,m){var _=this
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
d4n:function d4n(d,e){this.a=d
this.b=e},
d4o:function d4o(d){this.a=d},
d4p:function d4p(){},
aHy:function aHy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcN:function bcN(d,e){this.b=d
this.a=e},
d4C:function d4C(){},
d4D:function d4D(d){this.a=d},
d4E:function d4E(d){this.a=d},
d4F:function d4F(){},
bgr:function bgr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbR:function bbR(d,e){this.b=d
this.a=e},
bu1:function bu1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f5S:function f5S(d){this.a=d},
bjN:function bjN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eI9:function eI9(d){this.a=d},
eI8:function eI8(d,e){this.a=d
this.b=e},
Z8:function Z8(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aAp:function aAp(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dks:function dks(d,e){this.a=d
this.b=e},
dkr:function dkr(d){this.a=d},
dkp:function dkp(d){this.a=d},
dkq:function dkq(d){this.a=d},
dkB:function dkB(d){this.a=d},
dkC:function dkC(d){this.a=d},
dkA:function dkA(d,e){this.a=d
this.b=e},
dkD:function dkD(){},
dkG:function dkG(d){this.a=d},
dkz:function dkz(d,e){this.a=d
this.b=e},
dkF:function dkF(){},
dkH:function dkH(d){this.a=d},
dky:function dky(d,e){this.a=d
this.b=e},
dkI:function dkI(d){this.a=d},
dkx:function dkx(d){this.a=d},
dkJ:function dkJ(d){this.a=d},
dkw:function dkw(d){this.a=d},
dkK:function dkK(d){this.a=d},
dkv:function dkv(d){this.a=d},
dkL:function dkL(d){this.a=d},
dku:function dku(d){this.a=d},
dkM:function dkM(d){this.a=d},
dkt:function dkt(d,e){this.a=d
this.b=e},
dkE:function dkE(d){this.a=d},
aca:function aca(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgq:function bgq(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ac9:function ac9(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bgp:function bgp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dkN:function dkN(d){this.a=d},
dkO:function dkO(d,e){this.a=d
this.b=e},
aAq:function aAq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGB:function aGB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
acb:function acb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dkX:function dkX(d){this.a=d},
Jf:function Jf(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h34(d){var w=d.S,v=x.N
return w.iV(w,new C.c6n(),v,v)},
hxe(d){var w=d.bC
if(w>=0)return w
return 5},
h36(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h34(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h35(d,e){var w=C.h36(d,e)
if(w!=null&&w.cc(new A.S(Date.now(),0,!1)))return!0
return!1},
hxf(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.h34(d),w,w)
u=C.h36(d,e)
t=u!=null&&u.cc(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bP(A.dC(30,0,0,0,0,0).a).a6().ac())
d.S=v},
aYv(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aYv=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.la(t,B.HE),$async$aYv)
case 3:if(l){u=!0
w=1
break}u=A.kO(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.HE,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYv,v)},
c6n:function c6n(){},
hxc(){var w,v=$.pi(),u=J.e2(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"FT"+B.d.fW(u)},
HW(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$HW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$HW)
case 3:if(!e){u=A.V(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f1("ngmy_family_tree_backup_codes_v1",null,!1,B.bG),$async$HW)
case 8:r=e
if(r==null){u=A.V(x.N,x.z)
w=1
break}q=J.q(r,"codes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a9(m)
$.am.$1("[family tree sync codes] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.V(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$HW,v)},
a6h(d){return C.hxd(d)},
hxd(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6h=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$a6h)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hB("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cG,null),$async$a6h)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a9(p)
$.am.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a6h,v)},
c6m(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c6m=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.HW(),$async$c6m)
case 3:t=m.js(f),t=t.gaf(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gU(t)
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
return A.i($async$c6m,v)},
MP(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$MP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c6m(d),$async$MP)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.HW(),$async$MP)
case 6:s=f
r=J.a8(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dT(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
r.n(s,t,o)
w=9
return A.b(C.a6h(s),$async$MP)
case 9:case 8:u=t
w=1
break
case 5:n=C.hxc()
w=10
return A.b(C.HW(),$async$MP)
case 10:s=f
J.aG(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=11
return A.b(C.a6h(s),$async$MP)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$MP,v)},
aYu(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aYu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.HW(),$async$aYu)
case 3:t=f
for(s=J.dj(t),r=s.gdL(t),r=r.dF(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6h(t),$async$aYu)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aYu,v)},
a6i(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6i=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aoh(d,e),$async$a6i)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.MP(d),$async$a6i)
case 7:w=4
break
case 5:w=8
return A.b(C.aYu(d),$async$a6i)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6i,v)},
aob(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aob=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aoh(f,e),$async$aob)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c1(),$async$aob)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.HW(),$async$aob)
case 7:q=o.q(k,t)
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
return A.i($async$aob,v)},
aYt(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aYt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c1(),$async$aYt)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.HW(),$async$aYt)
case 4:t=q.q(g,r)
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
return A.i($async$aYt,v)},
hxg(){var w,v=$.pi(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"FT"+B.d.fW(u)},
aoe(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aoe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$aoe)
case 3:if(!g){u=null
w=1
break}t=C.hxg()
w=4
return A.b(A.Ug(),$async$aoe)
case 4:s=g
r=B.dJ.aJ(B.R.ao(d.eK(),null))
r=B.cS.gcv().aJ(r)
q=e?999:2
J.aG(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(A.a6j(s),$async$aoe)
case 5:p=e?999:2
u=new A.a_i("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoe,v)},
aod(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aod=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Ug(),$async$aod)
case 3:p=a0
o=J.a8(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a8(n)
l=A.aN(m.h(n,"usesRemaining"))
k=l==null?null:B.k.O(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aYt(J.k(l==null?"":l),j),$async$aod)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c4.ca(0,B.cD.aJ(t))
s=C.h37(r)}catch(f){q=A.a9(f)
$.am.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dT(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=5
return A.b(A.a6j(p),$async$aod)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aod,v)},
h37(d){var w,v,u,t,s=null
try{w=B.R.aH(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hxi(A.a1(w,x.N,x.z))
return u}catch(t){v=A.a9(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fOd(d){var w=0,v=A.j(x.m),u,t,s
var $async$fOd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aod(t[1])
w=1
break}u=null
w=1
break}u=C.h37(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fOd,v)},
hxi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d8(v,x.f)
u=A.cD(u,new C.c6p(),u.$ti.k("J.E"),x.k)
t=A.a4(u).k("a2<J.E>")
s=A.B(new A.a2(u,new C.c6q(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.V(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.js(p),t=t.gaf(t),o=x.B;t.C();){n=t.gU(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d8(l,u)
n=A.cD(n,new C.c6r(),n.$ti.k("J.E"),o)
k=A.a4(n).k("a2<J.E>")
j=A.B(new A.a2(n,new C.c6s(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aof(h,w,s,r,q)},
aoh(d,e){var w=0,v=A.j(x.y),u,t
var $async$aoh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.MG(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Af(d),$async$aoh)
case 3:u=t.cx(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoh,v)},
c6y(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c6y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Af(d),$async$c6y)
case 3:t=s.b6(f,new C.c6z(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b_(t,new C.c6A())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c6y,v)},
Uh(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Uh=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aoh(e,d),$async$Uh)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.MP(e),$async$Uh)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Af(e),$async$Uh)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c6w(g))
r=A.B(t,t.$ti.k("J.E"))}t=J.a8(r)
if(t.gam(r)){u=null
w=1
break}t=t.dt(r,new C.c6x(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.V(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Kc(e,o),$async$Uh)
case 14:n=i
if(J.cx(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aof(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Uh,v)},
aYy(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aYy=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Uh(d,e,f,g),$async$aYy)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gK(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aJ(t,s,"_")
r=q.a
u=A.FX(A.Jo(q.eK(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYy,v)},
aYx(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aYx=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Uh(d,e,f,g),$async$aYx)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aoe(r,f),$async$aYx)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aEC(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYx,v)},
Ui(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ui=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fOd(a0),$async$Ui)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aob(g.a,d,e,f,s,r),$async$Ui)
case 6:if(!a2){if(r)throw A.U(A.bd("This backup expired or the sender's tree is no longer available."))
throw A.U(A.bd("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bzo(e,j),$async$Ui)
case 12:case 11:w=13
return A.b(C.agw(e,j,s),$async$Ui)
case 13:h=n.h(0,i)
w=h!=null&&J.cx(h)?14:15
break
case 14:w=16
return A.b(C.Aq(e,i,h),$async$Ui)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bni(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ui,v)},
aof:function aof(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c6u:function c6u(){},
c6v:function c6v(){},
c6t:function c6t(){},
c6p:function c6p(){},
c6q:function c6q(){},
c6r:function c6r(){},
c6s:function c6s(){},
c6z:function c6z(){},
c6A:function c6A(){},
c6w:function c6w(d){this.a=d},
c6x:function c6x(d){this.a=d},
fWt(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fb(null,x.H)
return A.hv(d,new C.aog(w,e,g,i,f,h,null),!0,null,x.H)},
d4e(d,e,f,g,h,i,j,k){return new C.bcJ(i,e,k,j,g,f,h,d,null)},
aog:function aog(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aC_:function aC_(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dR9:function dR9(d){this.a=d},
dRa:function dRa(d,e,f){this.a=d
this.b=e
this.c=f},
dRe:function dRe(d,e){this.a=d
this.b=e},
dRf:function dRf(d){this.a=d},
dR6:function dR6(d){this.a=d},
dR7:function dR7(d,e){this.a=d
this.b=e},
dR8:function dR8(d,e){this.a=d
this.b=e},
dRd:function dRd(d){this.a=d},
dRc:function dRc(d,e){this.a=d
this.b=e},
dRb:function dRb(){},
dRh:function dRh(d){this.a=d},
dRi:function dRi(d,e){this.a=d
this.b=e},
dRg:function dRg(d,e){this.a=d
this.b=e},
d4G:function d4G(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcL:function bcL(d,e,f){this.d=d
this.e=e
this.a=f},
abs:function abs(d,e,f){this.c=d
this.d=e
this.a=f},
bcJ:function bcJ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bcO:function bcO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Zt:function Zt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBZ:function aBZ(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dR1:function dR1(d,e){this.a=d
this.b=e},
dR2:function dR2(d){this.a=d},
dR3:function dR3(d){this.a=d},
dR4:function dR4(d){this.a=d},
dR5:function dR5(d){this.a=d},
Zu:function Zu(d){this.a=d},
bhU:function bhU(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dRj:function dRj(d,e){this.a=d
this.b=e},
aX4(d,e){return new C.aX3(d,e,null)},
aX3:function aX3(d,e,f){this.c=d
this.d=e
this.a=f},
hWp(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b0(d,11)},
i2H(d){return A.bV(B.K,null,new C.fDi(new C.tx(A.O(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
h4Z(d,e){return new C.arb(e,d,null)},
aON(d,e,f,g,h,i,j){var w=C.hWp(i)
if(w!=null)return A.bv(e,new A.a6(j,f,new C.a5k(w,!0,null),null),B.aq)
return I.aO8(e,B.bQ,f,g,h,i,j)},
lu:function lu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5k:function a5k(d,e,f){this.c=d
this.d=e
this.a=f},
bhA:function bhA(d,e){var _=this
_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
dCt:function dCt(d){this.a=d},
dCu:function dCu(){},
dCv:function dCv(d,e){this.a=d
this.b=e},
bhz:function bhz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fDi:function fDi(d){this.a=d},
fDh:function fDh(d,e){this.a=d
this.b=e},
fDg:function fDg(d,e){this.a=d
this.b=e},
fDf:function fDf(d,e){this.a=d
this.b=e},
arb:function arb(d,e,f){this.c=d
this.d=e
this.a=f},
ce1:function ce1(d,e){this.a=d
this.b=e},
aJU:function aJU(){},
i2s(d){var w=null
return A.ca(w,w,!0,w,new C.fCF(),d,w,!0,!0,x.e2)},
i3C(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fK7(h,g,f,e),d,w,!0,!0,x.N)},
i2u(d,e){var w=null
return A.ca(w,w,!0,w,new C.fCK(e),d,w,!0,!0,x.dY)},
i2t(d){var w=null
return A.ca(w,w,!0,w,new C.fCJ(),d,w,!0,!0,x.c5)},
aRG:function aRG(d,e){this.a=d
this.b=e},
aRF:function aRF(d){this.a=d},
aPK:function aPK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCF:function fCF(){},
fK7:function fK7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCK:function fCK(d){this.a=d},
fCJ:function fCJ(){},
Y7:function Y7(d,e){this.c=d
this.a=e},
axf:function axf(){var _=this
_.d=$
_.c=_.a=_.e=null},
cXo:function cXo(d){this.a=d},
cXp:function cXp(d){this.a=d},
cXn:function cXn(d,e){this.a=d
this.b=e},
cXq:function cXq(d){this.a=d},
cXr:function cXr(d){this.a=d},
Y6:function Y6(d){this.a=d},
axe:function axe(){this.d=$
this.c=this.a=null},
cXk:function cXk(d){this.a=d},
cXl:function cXl(d){this.a=d},
cXm:function cXm(d){this.a=d},
XF:function XF(d){this.a=d},
avZ:function avZ(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cuY:function cuY(){},
cv3:function cv3(d){this.a=d},
cv4:function cv4(d){this.a=d},
cv5:function cv5(d){this.a=d},
cv2:function cv2(){},
cv6:function cv6(d){this.a=d},
cv7:function cv7(d){this.a=d},
cv1:function cv1(){},
cv8:function cv8(d,e){this.a=d
this.b=e},
cv0:function cv0(d,e){this.a=d
this.b=e},
cuZ:function cuZ(d,e){this.a=d
this.b=e},
cv9:function cv9(d){this.a=d},
cv_:function cv_(){},
cva:function cva(d){this.a=d},
a0b:function a0b(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
btU:function btU(){this.d=$
this.c=this.a=null},
f5k:function f5k(d,e){this.a=d
this.b=e},
f5l:function f5l(d){this.a=d},
f5m:function f5m(d,e){this.a=d
this.b=e},
aav:function aav(d,e){this.a=d
this.b=e},
F3:function F3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
btS:function btS(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f5i:function f5i(d,e){this.a=d
this.b=e},
avS:function avS(d,e){this.c=d
this.a=e},
btT:function btT(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f5j:function f5j(d){this.a=d},
btR:function btR(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aM2:function aM2(){},
aM3:function aM3(){},
bBl(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bw(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oy(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fBq(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.X3(A.dq(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aOp(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aOp=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hW().l1(85,1280,B.eG),$async$aOp)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.ff(),$async$aOp)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.h4Y()
w=9
return A.b(C.ce0(q,r),$async$aOp)
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
o=A.a9(l)
$.am.$1("[worksheets] pick photo failed: "+A.t(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aOp,v)},
aOL(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aOL=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cdY(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gal(g.split(",")):g
p=B.cD.aJ(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.X().L0(p,!0,null,i).cM(0,B.fG),$async$aOL)
case 9:n=a1
w=10
return A.b(n.mf(),$async$aOL)
case 10:m=a1
w=11
return A.b(J.aPv(m).hp(B.fW),$async$aOL)
case 11:l=a1
J.aPv(m).q()
if(l==null){w=8
break}i=J.fa(B.dH.gaP(l))
k="data:image/png;base64,"+B.cS.gcv().aJ(i)
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
j=A.a9(f)
$.am.$1("[worksheets] thumbnail shrink failed: "+A.t(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aOL,v)},
fBq:function fBq(){},
tx:function tx(d){this.a=d},
ara:function ara(d,e,f){this.c=d
this.d=e
this.a=f},
aDv:function aDv(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eFj:function eFj(d,e){this.a=d
this.b=e},
eFa:function eFa(d){this.a=d},
eFb:function eFb(d){this.a=d},
eFh:function eFh(d,e){this.a=d
this.b=e},
eFg:function eFg(d,e){this.a=d
this.b=e},
eFd:function eFd(d,e){this.a=d
this.b=e},
eFc:function eFc(d,e){this.a=d
this.b=e},
eFe:function eFe(d){this.a=d},
eFf:function eFf(d,e){this.a=d
this.b=e},
eFi:function eFi(d,e){this.a=d
this.b=e},
eF5:function eF5(d,e){this.a=d
this.b=e},
eF9:function eF9(d){this.a=d},
eF8:function eF8(d,e){this.a=d
this.b=e},
eF7:function eF7(d){this.a=d},
eFk:function eFk(d,e){this.a=d
this.b=e},
eFl:function eFl(d,e){this.a=d
this.b=e},
eF6:function eF6(d,e){this.a=d
this.b=e},
hhC(d,e,f){var w="thumbnailPath",v=e.ae()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a6().ac(),"project",v],x.N,x.z)},
fBr(d,e,f){var w=0,v=A.j(x.N),u
var $async$fBr=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hhC(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fBr,v)},
bBn(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bBn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fBr(!0,d,e),$async$bBn)
case 4:w=3
return A.b(r.ar8(g,d,e.a),$async$bBn)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dJ.aJ(B.R.ao(C.hhC(d,e,null),null))
u="NGMY_WS:"+B.k7.gcv().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBn,v)},
h9x(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fW9(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.cZ(s,"NGMYWSSYNC2|"))return!0
if(J.cZ(s,"NGMY_WS:"))return!0
if(J.eZ(s,t))return!0
if(J.cZ(s,"{"))try{w=B.R.aH(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i0s(d){var w,v,u,t=C.h9x(d)
if(t==null)return null
if(C.fW9(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b0(t,w))
if(C.fW9(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b0(t,u))
if(C.fW9(v))return v}return null},
fW8(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.cZ(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cZ(q,"NGMY_WS:")){v=B.c4.ca(0,B.cD.aJ(J.mz(q,8)))
w=t.a(B.R.aH(0,v,r))}else w=t.a(B.R.aH(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fQM(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bBm(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bBm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.ar7(t[1]),$async$bBm)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fW8(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fW8(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBm,v)},
fW7(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.ld(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bAU(){var w=0,v=A.j(x.o),u,t
var $async$bAU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.G7(),$async$bAU)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fW8(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAU,v)},
hit(d,e,f,g){return A.bV(B.K,null,new C.fK_(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fK_:function fK_(d,e,f){this.a=d
this.b=e
this.c=f},
acw:function acw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eFn:function eFn(d,e){this.a=d
this.b=e},
eFo:function eFo(d,e){this.a=d
this.b=e},
eFp:function eFp(d,e){this.a=d
this.b=e},
eFq:function eFq(d,e){this.a=d
this.b=e},
eFm:function eFm(d){this.a=d},
ar4:function ar4(d,e,f){this.c=d
this.d=e
this.a=f},
bjg:function bjg(){var _=this
_.c=_.a=_.e=_.d=null},
eF0:function eF0(d,e){this.a=d
this.b=e},
eF1:function eF1(d){this.a=d},
eF2:function eF2(d){this.a=d},
ar9:function ar9(d){this.a=d},
aDu:function aDu(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eF4:function eF4(d){this.a=d},
eF3:function eF3(d){this.a=d},
hAv(d,e,f,g,h){return new C.Nr(h,g,d,e,f,null)},
aIf:function aIf(d,e){this.a=d
this.b=e},
Nr:function Nr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDw:function aDw(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eFN:function eFN(){},
eFJ:function eFJ(d,e){this.a=d
this.b=e},
eFK:function eFK(d){this.a=d},
eFu:function eFu(d){this.a=d},
eFs:function eFs(d){this.a=d},
eFt:function eFt(d){this.a=d},
eFD:function eFD(d,e){this.a=d
this.b=e},
eFA:function eFA(d,e){this.a=d
this.b=e},
eFB:function eFB(d,e){this.a=d
this.b=e},
eFC:function eFC(d,e,f){this.a=d
this.b=e
this.c=f},
eFy:function eFy(d,e,f){this.a=d
this.b=e
this.c=f},
eFw:function eFw(d){this.a=d},
eFx:function eFx(d){this.a=d},
eFz:function eFz(d){this.a=d},
eFQ:function eFQ(d){this.a=d},
eFP:function eFP(d){this.a=d},
eFR:function eFR(d){this.a=d},
eFO:function eFO(d){this.a=d},
eFr:function eFr(d){this.a=d},
eFv:function eFv(d,e){this.a=d
this.b=e},
eFM:function eFM(d,e){this.a=d
this.b=e},
eFL:function eFL(d,e){this.a=d
this.b=e},
eFG:function eFG(d){this.a=d},
eFH:function eFH(d){this.a=d},
eFI:function eFI(d,e){this.a=d
this.b=e},
eFF:function eFF(d,e){this.a=d
this.b=e},
eFE:function eFE(d,e,f){this.a=d
this.b=e
this.c=f},
bvF:function bvF(){},
A6(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aJ(v,w,"_")},
aeX(d,e,f){return C.hQ1(d,e,f)},
hQ1(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aeX=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ar("String",e,f),$async$aeX)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a9(o)
$.am.$1("[worksheets] setString failed for "+e+": "+A.t(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeX,v)},
aeW(d,e){return C.hQ0(d,e)},
hQ0(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aeW=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$aeW)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.a9(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$aeW,v)},
hON(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.S2(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
byo(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$byo=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b0K(q),$async$byo)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aOL(q,!1),$async$byo)
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
return A.i($async$byo,v)},
hok(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aN(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aN(d.h(0,"quantity"))
if(w==null)w=null
v=A.aN(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.qN(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qN(p,J.k(u==null?"":u),1,o,q)},
fQM(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d8(s,x.f)
w=A.cD(w,new C.cul(),w.$ti.k("J.E"),x.Q)
v=A.a4(w).k("a2<J.E>")
r=A.B(new A.a2(w,new C.cum(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.ld(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
hTS(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.YW
case"female":case"f":return D.aie
default:return D.xA}},
hej(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h_c(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hTS(v==null?j:J.k(v))
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
m=A.aN(d.h(0,"birthOrder"))
m=m==null?j:B.k.O(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aN(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.O(k)
return new C.hV(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hTU(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.M8
case"viewer":return D.ki
default:return D.tA}},
hTV(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
FY(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bzF(d,e){return B.a.i(e.toLowerCase())===C.FY(d,e)&&d.y!==D.ki},
tI(d,e){var w,v=d.y
if(v===D.ki)return!1
w=B.a.i(e.toLowerCase())
if(w===C.FY(d,e))return!0
if(v===D.M8)return!0
v=d.e
return new A.K(v,A.fWd(),A.T(v).k("K<1,n>")).t(0,w)},
hTk(d){return J.dH(d,new C.fmA()).gM(0)},
fKs(d){var w=0,v=A.j(x.y),u,t
var $async$fKs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Af(d),$async$fKs)
case 3:u=t.qJ(f,new C.fKt(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fKs,v)},
bzo(d,e){var w=0,v=A.j(x.H),u,t
var $async$bzo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Af(d),$async$bzo)
case 3:t=g
if(J.qJ(t,new C.fl6(e))){w=1
break}if(C.hTk(t)>=2)throw A.U(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bzo,v)},
ajz(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d8(n,x.f)
w=A.cD(w,new C.bLW(),w.$ti.k("J.E"),x.P)
v=A.a4(w).k("a2<J.E>")
m=A.B(new A.a2(w,new C.bLX(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bLY(),x.N)
t=A.B(l,l.$ti.k("aj.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.z(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bi(J.k(r==null?"":r))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.aN(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.O(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kx(l,w,v,!s,t,m,r,q,p,C.hTU(o==null?null:J.k(o)))},
hes(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
Cr(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$Cr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.QL(d),$async$Cr)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Cr)
case 4:t=f
w=5
return A.b(t.a5b(0),$async$Cr)
case 5:w=6
return A.b(C.fcS(t,l),$async$Cr)
case 6:s=f
if(J.cx(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.ha6(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.ox(l,n),$async$Cr)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.ha6(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.ox(l,n),$async$Cr)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Cr,v)},
fcS(d,e){return C.hMi(d,e)},
hMi(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fcS=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a8(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.A6(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.R.aH(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aW(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gU(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.A6(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aH(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fQM(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.A6(a9)+"_"+n))
i=C.hON(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b0K(h),$async$fcS)
case 17:g=b1
if(g!=null){i=i.S2(g)
p=!0}case 16:J.cf(q,i)
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
case 8:J.QV(q,new C.fcT())
if(p&&J.ad(q)!==0)C.ox(a9,q)
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
return A.i($async$fcS,v)},
bzQ(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bzQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.QL(d),$async$bzQ)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Cr(r),$async$bzQ)
case 4:t=p.aW(g)
case 5:if(!t.C()){w=6
break}s=t.gU(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzQ,v)},
ha6(d){var w,v,u,t
try{w=B.R.aH(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d8(w,x.f)
v=A.cD(v,new C.f8A(),v.$ti.k("J.E"),x.i)
u=A.a4(v).k("a2<J.E>")
v=A.B(new A.a2(v,new C.f8B(),u),u.k("J.E"))
B.d.b_(v,new C.f8C())
return v}catch(t){v=A.a([],x.D)
return v}},
ox(d,e){return C.i2i(d,e)},
i2i(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$ox=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.QL(b2),$async$ox)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$ox)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.A6(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aH(0,p,null)),new C.fCw(),a2).fI(0)
a2=J.b6(b3,new C.fCx(),a2).c_(0,new C.fCy())
n=A.da(a2,a2.$ti.k("J.E"))
a2=o,a2=A.eb(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eZ(n,m)?17:18
break
case 17:a5=C.A6(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a7z(l),$async$ox)
case 19:t=21
a5=C.A6(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aH(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a7z(a5==null?null:J.k(a5)),$async$ox)
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
return A.b(C.aeW(r,"ngmy_worksheet_item_v3_"+C.A6(a8)+"_"+m),$async$ox)
case 29:w=30
return A.b(C.aeW(r,"ngmy_worksheet_thumb_v3_"+C.A6(a8)+"_"+m),$async$ox)
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
break}i=a3.gU(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.byo(h),$async$ox)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aeX(r,"ngmy_worksheet_thumb_v3_"+C.A6(a8)+"_"+a4,f),$async$ox)
case 40:g=i.S2(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aeW(r,"ngmy_worksheet_thumb_v3_"+C.A6(a8)+"_"+a4),$async$ox)
case 41:g=i.S2(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aeW(r,"ngmy_worksheet_thumb_v3_"+C.A6(a8)+"_"+a4),$async$ox)
case 42:case 34:a4=i.a
w=43
return A.b(C.aeX(r,"ngmy_worksheet_item_v3_"+C.A6(a8)+"_"+a4,B.R.ao(g.ae(),null)),$async$ox)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.cf(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aeX(r,"ngmy_worksheets_index_v3_"+C.A6(a8),B.R.ao(q,null)),$async$ox)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eJ(b3,new C.fCz(q))
a4=a3.$ti.k("cQ<1,a3<n,@>>")
a7=A.B(new A.cQ(a3,new C.fCA(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.aeX(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$ox)
case 45:w=46
return A.b(J.hnr(r),$async$ox)
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
a1=A.a9(b1)
$.am.$1("[worksheets] saveWorksheetProjects error: "+A.t(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ox,v)},
KE(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$KE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Cr(d),$async$KE)
case 3:t=g
s=J.cE(t)
r=s.ba(t,new C.fKr(e))
if(r===-1)s.cj(t,0,e)
else s.n(t,r,e)
u=C.ox(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$KE,v)},
bzC(d,e){var w=0,v=A.j(x.H),u
var $async$bzC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Cr(d),$async$bzC)
case 2:u=g
J.nj(u,new C.fn1(e))
w=3
return A.b(C.ox(d,u),$async$bzC)
case 3:return A.h(null,v)}})
return A.i($async$bzC,v)},
G_(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$G_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$G_)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aH(0,i,null)
if(x.j.b(t)){j=J.d8(t,x.f)
j=A.cD(j,new C.fpt(),j.$ti.k("J.E"),x.k)
s=A.a4(j).k("a2<J.E>")
r=A.B(new A.a2(j,new C.fpu(),s),s.k("J.E"))
B.d.b_(r,new C.fpv())
k=r}}catch(h){}w=4
return A.b(C.f9k(d),$async$G_)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hMF(k,p,d)
j=A.T(o)
s=j.k("K<1,a3<n,@>>")
s=A.B(new A.K(o,new C.fpw(),s),s.k("aj.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.PX(d,o),$async$G_)
case 7:case 6:j=j.k("a2<1>")
m=A.B(new A.a2(o,new C.fpx(d),j),j.k("J.E"))
if(m.length!==0)C.aNk(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$G_,v)},
fCi(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fCi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.PX(d,e),$async$fCi)
case 3:t=J.dH(e,new C.fCj(d))
s=A.B(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aNk(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fCi,v)},
a1O(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a1O=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a1O)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aH(0,l,null)
if(x.j.b(u)){m=J.d8(u,x.f)
m=A.cD(m,new C.fKm(),m.$ti.k("J.E"),x.k)
t=A.a4(m).k("a2<J.E>")
s=A.B(new A.a2(m,new C.fKn(),t),t.k("J.E"))
o=s}}catch(k){}q=J.q4(o,new C.fKo(e))
if(B.a.i(e.x).length===0&&C.tI(e,d)){m=B.a.i(d.toLowerCase())
p=e.aCy(e.y===D.ki?D.ki:D.tA,m)}else p=e
if(q===-1)J.pm(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.PX(d,o),$async$a1O)
case 3:w=C.tI(p,d)?4:5
break
case 4:w=6
return A.b(C.aNj(C.FY(p,d),p),$async$a1O)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a1O,v)},
aNu(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aNu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.G_(d),$async$aNu)
case 2:u=g
t=J.cE(u)
s=A.r2(t.eJ(u,new C.fmJ(e)))
t.bm(u,new C.fmK(e))
w=3
return A.b(C.PX(d,u),$async$aNu)
case 3:w=s!=null&&C.bzF(s,d)?4:5
break
case 4:w=6
return A.b(C.f8E(e),$async$aNu)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aNu,v)},
agK(d){var w=d.f,v=A.T(w).k("a2<1>")
w=A.B(new A.a2(w,new C.fKx(),v),v.k("J.E"))
return w},
fTT(d,e){var w,v=d.f,u=A.r2(new A.a2(v,new C.fmj(e),A.T(v).k("a2<1>")))
v=C.agK(d)
w=A.T(v).k("a2<1>")
v=A.B(new A.a2(v,new C.fmk(e,u),w),w.k("J.E"))
B.d.b_(v,new C.fml())
return v},
hTY(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hiw(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.ba(C.fTT(d,u),new C.fK8(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hVu(d,e){var w
if(e==null||e.length===0)return 1
w=C.fTT(d,e)
if(w.length===0)return 1
return new A.K(w,new C.fqf(),A.T(w).k("K<1,H>")).fF(0,B.zR)+1},
i2b(d){var w,v=C.agK(d)
if(v.length===0)return null
w=new A.a2(v,new C.fCf(),A.T(v).k("a2<1>"))
if(!w.gam(0))return w.gK(0)
return B.d.gK(v)},
hTT(d){return A.F(["id",d.a,"name",d.b,"gender",C.hej(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hVp(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.V(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aX(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.L)(a0),++u){q=a0[u]
p=q.a
r.L(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.xA?n:q.c
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
d=q.aCt(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cFY(a1,w,a3.d,a2.y,s,a0,v)},
Af(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$Af=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Af)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.R.aH(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d8(t,x.f)
p=A.cD(p,new C.fpq(),p.$ti.k("J.E"),x.k)
s=A.a4(p).k("a2<J.E>")
p=A.B(new A.a2(p,new C.fpr(),s),s.k("J.E"))
B.d.b_(p,new C.fps())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Af,v)},
agw(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$agw=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tA:D.ki
a7=C.FY(b2,b3)
w=2
return A.b(C.Af(b1),$async$agw)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.ba(a8,new C.fCb(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bzo(b1,b2),$async$agw)
case 5:case 4:if(b0===-1){u=b2.aCy(a6,a7)
a9.cj(a8,0,u)}else{t=a9.h(a8,b0)
s=A.V(x.N,x.P)
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
i=i!==D.xA?i:l.c
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
s.n(0,m,l.aCt(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.B(new A.bc(s,k),k.k("J.E"))
k=a5?D.tA:D.ki
u=t.yg(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.PX(b1,a8),$async$agw)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aNj(B.a.i(b3.toLowerCase()),u),$async$agw)
case 9:case 8:return A.h(null,v)}})
return A.i($async$agw,v)},
hau(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a6().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("K<1,a3<n,@>>"),k=A.B(new A.K(m,C.hhK(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a6().ac(),"updatedAt",o],r,x.K),"createdAt",s.a6().ac(),"updatedAt",o],r,x.z)},
hav(d,e){var w=new A.S(Date.now(),0,!1).a6().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("K<1,a3<n,@>>")
u=A.B(new A.K(u,C.hhK(),t),t.k("aj.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a6().ac(),"updatedAt",w],x.N,x.z)},
hKi(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ajz(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.K(j,A.fWd(),A.T(j).k("K<1,n>")).c_(0,new C.f97())
t=A.B(j,j.$ti.k("J.E"))
if(u===v)s=D.tA
else s=B.d.t(t,u)?D.M8:D.ki
return w.aCy(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ajz(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d8(q,h)
h=A.cD(h,new C.f98(),h.$ti.k("J.E"),x.P)
p=A.a4(h).k("a2<J.E>")
o=A.B(new A.a2(h,new C.f99(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.f9a(),x.N).c_(0,new C.f9b())
t=A.B(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tA
else s=B.d.t(t,u)?D.M8:D.ki
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.S(Date.now(),0,!1)
j=A.aN(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.O(j)
if(j==null)j=0
return new C.kx(h,r,p,!m,t,o,l,j,v,s)},
f9k(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$f9k=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.f9o()
h=x.N
g=x.z
w=7
return A.b(A.iJ(A.a([A.lk("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bG),r.$2(A.lk("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bG),"collaborator"),r.$2(A.lk("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bG),"public")],x.cl),x.U),$async$f9k)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.V(h,g)
h=A.B(p,g)
l=h
J.h_(l,o)
J.h_(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.L)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aG(m,j,k)}l=m
h=A.a4(l).k("bc<2>")
h=A.cD(new A.bc(l,h),new C.f9l(a0),h.k("J.E"),x.k)
l=A.a4(h).k("a2<J.E>")
l=A.B(new A.a2(h,new C.f9m(),l),l.k("J.E"))
B.d.b_(l,new C.f9n())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.a9(a1)
d=J.k(i)
l=B.a.t(d,"Could not find the table 'public.family_trees'")||B.a.t(d,'relation "public.family_trees" does not exist')
h=$.am
if(l)h.$1("[family_trees] table missing \u2014 run supabase/family_trees_table.sql")
else h.$1("[family_trees] fetch error: "+A.t(i))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$f9k,v)},
hMF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.fdx(),v).c_(0,new C.fdy())
t=A.da(u,u.$ti.k("J.E"))
s=A.V(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.FY(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.ki){m=q.e
m=!new A.K(m,A.fWd(),A.T(m).k("K<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gU(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hVp(l,v)
o=C.FY(k,w)
p=v.d
s.n(0,u,o===w?k.ba_(p,D.tA):k.ba_(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("J.E"))
B.d.b_(j,new C.fdz())
return j},
PX(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$PX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$PX)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.ffE(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.ar("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$PX)
case 3:return A.h(null,v)}})
return A.i($async$PX,v)},
aNj(d,e){return C.hRJ(d,e)},
hRJ(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aNj=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lK("family_trees",A.a([C.hau(e,d)],p),null,B.cG),$async$aNj)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lK("family_trees",A.a([C.hav(e,d)],p),null,B.cG),$async$aNj)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.a9(n)
$.am.$1("[family_trees] upsert error: "+A.t(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aNj,v)},
aNk(d,e){return C.hRK(d,e)},
hRK(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aNk=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("K<1,a3<n,@>>")
m=n.k("aj.E")
l=A.B(new A.K(e,new C.fkq(d),n),m)
r=l
w=7
return A.b(A.lK("family_trees",r,null,B.cG),$async$aNk)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.K(e,new C.fkr(d),n),m)
p=k
w=8
return A.b(A.lK("family_trees",p,null,B.cG),$async$aNk)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.a9(i)
$.am.$1("[family_trees] bulk upsert error: "+A.t(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aNk,v)},
f8E(d){return C.hJE(d)},
hJE(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$f8E=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Ql("family_trees",A.F(["id",d],x.N,x.z),null,B.cG),$async$f8E)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.a9(p)
$.am.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$f8E,v)},
qN:function qN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ld:function ld(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cuo:function cuo(){},
cun:function cun(){},
cul:function cul(){},
cum:function cum(){},
H3:function H3(d,e){this.a=d
this.b=e},
hV:function hV(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ajy:function ajy(d,e){this.a=d
this.b=e},
fmA:function fmA(){},
fKt:function fKt(d){this.a=d},
fl6:function fl6(d){this.a=d},
kx:function kx(d,e,f,g,h,i,j,k,l,m){var _=this
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
bM_:function bM_(){},
bLZ:function bLZ(){},
bLW:function bLW(){},
bLX:function bLX(){},
bLY:function bLY(){},
fcT:function fcT(){},
f8A:function f8A(){},
f8B:function f8B(){},
f8C:function f8C(){},
fCw:function fCw(){},
fCx:function fCx(){},
fCy:function fCy(){},
fCz:function fCz(d){this.a=d},
fCA:function fCA(){},
fKr:function fKr(d){this.a=d},
fn1:function fn1(d){this.a=d},
fpt:function fpt(){},
fpu:function fpu(){},
fpv:function fpv(){},
fpw:function fpw(){},
fpx:function fpx(d){this.a=d},
fCj:function fCj(d){this.a=d},
fKm:function fKm(){},
fKn:function fKn(){},
fKo:function fKo(d){this.a=d},
fmJ:function fmJ(d){this.a=d},
fmK:function fmK(d){this.a=d},
fKx:function fKx(){},
fmj:function fmj(d){this.a=d},
fmk:function fmk(d,e){this.a=d
this.b=e},
fml:function fml(){},
fK8:function fK8(d){this.a=d},
fqf:function fqf(){},
fCf:function fCf(){},
fpq:function fpq(){},
fpr:function fpr(){},
fps:function fps(){},
fCb:function fCb(d){this.a=d},
f97:function f97(){},
f98:function f98(){},
f99:function f99(){},
f9a:function f9a(){},
f9b:function f9b(){},
f9o:function f9o(){},
f9p:function f9p(d){this.a=d},
f9l:function f9l(d){this.a=d},
f9m:function f9m(){},
f9n:function f9n(){},
fdx:function fdx(){},
fdy:function fdy(){},
fdz:function fdz(){},
ffE:function ffE(){},
fkq:function fkq(d){this.a=d},
fkr:function fkr(d){this.a=d},
cuq:function cuq(d,e){this.a=d
this.b=e},
cur:function cur(d,e){this.a=d
this.b=e},
aFy:function aFy(d,e,f){this.a=d
this.b=e
this.c=f},
b6Z:function b6Z(){this.b=this.a=0},
b6Y:function b6Y(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
btV:function btV(){},
wq(d,e){var w,v
if(d==null)return""
w=d.bS()
v=""+w.gce()+"/"+w.gct()+"/"+w.gci()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gn1()),2,"0")+":"+B.a.aT(B.o.u(w.gFK()),2,"0")},
hAs(){var w,v=$.pi(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"WS"+B.d.fW(u)},
ar5(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$ar5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$ar5)
case 3:if(!e){u=A.V(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f1("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bG),$async$ar5)
case 8:r=e
if(r==null){u=A.V(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a9(m)
$.am.$1("[worksheet qr stash] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.V(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ar5,v)},
ar6(d){return C.hAt(d)},
hAt(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$ar6=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$ar6)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hB("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,B.cG,null),$async$ar6)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a9(p)
$.am.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ar6,v)},
ar8(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$ar8=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$ar8)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hAs()
w=4
return A.b(C.ar5(),$async$ar8)
case 4:r=h
q=B.a.i(e)
p=B.dJ.aJ(t)
J.aG(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cS.gcv().aJ(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],x.N,x.K))
w=5
return A.b(C.ar6(r),$async$ar8)
case 5:u=new A.a_i("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ar8,v)},
ar7(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ar7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c1(),$async$ar7)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.ar5(),$async$ar7)
case 4:q=f
p=J.a8(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a8(o)
m=A.aN(n.h(o,"usesRemaining"))
l=m==null?null:B.k.O(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.c4.ca(0,B.cD.aJ(t))}catch(h){r=A.a9(h)
$.am.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dT(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
p.n(q,i,m)}w=5
return A.b(C.ar6(q),$async$ar7)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ar7,v)},
h4Y(){var w=new A.S(Date.now(),0,!1).a6()
return"wst_"+(1000*w.a+w.b)+"_"+B.cI.aA(999999)},
hAu(d){var w,v,u,t,s,r,q
try{w=A.afl(d)
if(w==null)return d
v=w
if(J.KK(v)>960||J.KJ(v)>960){s=v
r=J.KK(v)>=J.KJ(v)?960:null
v=A.afk(s,J.KJ(v)>J.KK(v)?960:null,B.Nt,r)}s=v
u=A.akX(82).So(s,B.yl)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cr(u))
return s}catch(q){t=A.a9(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
ce0(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$ce0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hAu(e)
$.cdX.n(0,s,t)
u=C.bBp(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ce0,v)},
b0K(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b0K=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cZ(l,"data:image")){u=null
w=1
break}t=4
r=J.eZ(l,",")?B.d.gal(J.lm(l,",")):l
q=B.cD.aJ(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.h4Y()
w=7
return A.b(C.ce0(p,q),$async$b0K)
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
n=A.a9(k)
$.am.$1("[worksheet-thumb] persistDataUrl failed: "+A.t(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b0K,v)},
cdY(d){var w=0,v=A.j(x.T),u,t,s
var $async$cdY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.ce_(s),$async$cdY)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcv().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdY,v)},
a7z(d){var w=0,v=A.j(x.H),u,t
var $async$a7z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hhD(d)
if(t==null){w=1
break}$.cdX.W(0,t)
w=3
return A.b(C.bBo(t),$async$a7z)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a7z,v)},
bBp(d,e){return C.i0v(d,e)},
i0v(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bBp=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aMf
w=7
return A.b(n==null?$.aMf=I.fST():n,$async$bBp)
case 7:r=g
q=new Uint8Array(A.cr(e))
p=J.mA(r,"thumbs","readwrite")
B.iC.m9(J.my(p,"thumbs"),q,l)
w=8
return A.b(J.pl(p),$async$bBp)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a9(k)
$.am.$1("[worksheet-thumb idb put] "+A.t(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bBp,v)},
bBo(d){return C.i0t(d)},
i0t(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bBo=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aMf
w=7
return A.b(o==null?$.aMf=I.fST():o,$async$bBo)
case 7:r=f
q=J.mA(r,"thumbs","readwrite")
B.iC.Fg(J.my(q,"thumbs"),m)
w=8
return A.b(J.pl(q),$async$bBo)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.a9(l)
$.am.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bBo,v)}},D,Ak,Al,R,Am,An,I
J=c[1]
A=c[0]
B=c[2]
A1=c[77]
N=c[231]
S=c[146]
A2=c[215]
G=c[196]
F=c[31]
E=c[206]
O=c[96]
A3=c[217]
A4=c[137]
A5=c[184]
T=c[111]
U=c[101]
A6=c[214]
A7=c[37]
M=c[213]
A8=c[80]
H=c[87]
A9=c[153]
Aa=c[108]
V=c[156]
W=c[227]
X=c[185]
Ab=c[176]
Ac=c[188]
Y=c[183]
Ad=c[65]
Ae=c[71]
Z=c[200]
Af=c[232]
Ag=c[30]
Ah=c[102]
K=c[178]
Ai=c[189]
A_=c[230]
A0=c[223]
P=c[103]
Aj=c[112]
L=c[130]
Q=c[69]
C=a.updateHolder(c[6],C)
D=c[226]
Ak=c[70]
Al=c[194]
R=c[229]
Am=c[228]
An=c[56]
I=c[54]
C.an5.prototype={}
C.aX5.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bel(),f=h.x!=null&&h.yH(i).length===0
if(h.x!=null)w=f?B.aZ:B.bI
else w=h.gT1()?B.bI:B.dT
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bd3,B.q,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eFA,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h5,i,i,i),B.S,D.f7B,B.at,A.d(C.wq(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.f3y,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aYK,i,i,i,i,B.XW,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.fUO(h.d)
o=A.p(B.A,C.aX4(A.fsD(h.e,n),30),B.f,i,i,new A.o(B.lD,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.f__,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.v(A.a([o,B.P,n,B.bA,D.f7S,B.ac,A.p(i,A.v(A.a([D.fmW,B.bA,A.d(A.Ah(h.c),i,i,i,i,i,i,D.eV4,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eZ,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,p,q,i,i,B.n),i,i,i,i,K.agk,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.q,1)
l=j.aP8("Original due",C.wq(h.r,!1))
n=j.aP8("Current due",C.wq(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.P,n,B.S,A.p(i,A.d(h.gaJl(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.AF,i,i,1/0),B.S,j.cc3(),B.P,j.c_N(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.f8O,B.at,A.d(q,i,i,i,i,i,i,D.eZi,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaEa()){q=A.m(14)
o=A.I(B.cp,B.q,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fod,B.P,A.bv(A.m(12),A.ej(new A.a6(1/0,88,A.b3(i,i,i,new A.V9(h.ax,B.M,D.eJj,!0,3.5,i),B.au),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.EX,i,i,i)],s))}p.push(B.aA)
p.push(D.fgA)
return A.p(i,A.v(A.a([r,new A.C(B.agn,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aP8(d,e){var w=null
return A.A(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a7a,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eW3,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cc3(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a8l(B.dT,u,"Not paid yet")
w=t.yH(null).length
v=w===0?B.aZ:B.bI
return this.a8l(v,u,C.wq(t.x,!0))},
c_N(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a8l(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a8l(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a7a,u,u,u)
v=A.T(d).k("K<1,hh>")
v=A.B(new A.K(d,new C.c_Q(),v),v.k("aj.E"))
return A.v(A.a([w,B.an,A.c_(B.bB,v,B.bs,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a8l(d,e,f){var w=null
return A.A(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a7a,w,w,w),1),new A.dm(1,B.ci,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dL,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b97.prototype={
a5(d,e){new A.V9(this.b,B.M,e,!0,3.5,null).a5(d,e)},
aq(d){return d.b!==this.b}}
C.anc.prototype={
T(){return new C.aBq(A.a([],x.bp))},
gdX(){return this.c}}
C.aBq.prototype={
a_(){this.a1()
this.Ia()},
Ia(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ia=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a12(t.a.c),$async$Ia)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dDl(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Ia,v)},
aR0(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aQ,s=A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bn).j(0.22)
w=A.m(10)
return A.br(v,new A.b4(4,r,new A.aA(u,1,B.q,-1)),v,B.bk,v,v,v,v,!0,new A.b4(4,w,new A.aA((this.a.d.a?B.bq:B.bn).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aWm),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aR_(d){return this.aR0(d,null)},
OI(d){return this.cfC(d)},
cfC(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OI=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Gc:B.eG
w=7
return A.b(new A.hW().BI(72,900,900,n),$async$OI)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.ff(),$async$OI)
case 8:p=f
n=B.cS.gcv().aJ(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.a9(l)
n=r.c
if(n!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$OI,v)},
aZq(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aQ,o=A.m(10),n=A.I((q?B.bq:B.bn).j(0.18),B.q,1)
if(d)q=B.cZ
else q=s.a.d.a?B.bq:B.bn
q=A.W(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aQ:B.aB,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cZ
else u=s.a.d.a?B.bq:B.bn
t=x.p
u=A.D(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fv(r,r,r,r,r,r,r,r,r,r,r,B.cZ,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c7)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.W(B.cy,s.a.d.a?B.bq:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c7))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kh,D.bor,r,r,r)},
CF(d){return this.bxq(d)},
bxp(){return this.CF(null)},
bxq(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CF=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.ar(new A.bb(a4,B.b3,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jR(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.O(p)):B.k.aa(p,2)}o=new A.ar(new A.bb(a4,B.b3,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ar(new A.bb(a4,B.b3,B.aN),s)
if(a3){a4=new A.S(Date.now(),0,!1).bP(6048e8)
m=A.c0(a4.gci(),a4.gce(),a4.gct(),0,0,0,0,0)}else{a4=a5.f
m=A.c0(a4.gci(),a4.gce(),a4.gct(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bl(a4,!0,x.cT)
i=a3?null:A.fUO(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.vO?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",a4,new C.dD4(),new C.dD5(a2,t,a5,r,new C.dD6(a2,t),o,n,j),B.eE,!0,x.y),$async$CF)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d4(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.S$=s
r.P$=0
o.S$=s
o.P$=0
n.S$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.I(x.q).f.R(D.ePF)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.R(D.eOk)
w=1
break}a1=A.fsD(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.vO?"male":"female"
w=7
return A.b(A.agJ(a3,A.h1I(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$CF)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.vO?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a9(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c0(a3.gci(),a3.gce(),a3.gct(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gci(),a4.gce(),a4.gct(),0,0,0,0,0)))a5.cI5(a2.a)
w=8
return A.b(A.agJ(t.a.c,a5),$async$CF)
case 8:case 5:w=9
return A.b(t.Ia(),$async$CF)
case 9:case 1:return A.h(u,v)}})
return A.i($async$CF,v)},
aRC(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cZ.j(0.14)
else w=this.a.d.a?B.M:B.aQ
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cZ
else s=(this.a.d.a?B.bq:B.bn).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aX4(d,18)
if(g)q=B.cZ
else q=this.a.d.a?B.aQ:B.aB
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.p(p,A.A(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.bb,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ag)},
Ro(d){return this.cwW(d)},
cwW(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ro=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hR(B.w.j(0.55),!0,"Dismiss",s,new C.dDo(),new C.dDp(t,d),B.hX,!0,x.y),$async$Ro)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.agJ(t.a.c,d),$async$Ro)
case 7:w=8
return A.b(t.Ia(),$async$Ro)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Ro,v)},
Nn(d,e){return this.bI7(0,e)},
bI7(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kY(s,"Cancel","Delete",e.b+" \xb7 "+A.Ah(e.c)+" will be removed from this device.","Delete this debt?"),$async$Nn)
case 3:if(!g){w=1
break}w=4
return A.b(C.fmQ(t.a.c,e.a),$async$Nn)
case 4:w=5
return A.b(t.Ia(),$async$Nn)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Nn,v)},
adN(d){return this.c9w(d)},
c9w(d){var w=0,v=A.j(x.H),u=this,t
var $async$adN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bV(B.K,null,new C.dDi(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$adN)
case 2:return A.h(null,v)}})
return A.i($async$adN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e3r
w=J.dH(m.d,new C.dDq())
v=A.B(w,w.$ti.k("J.E"))
w=J.dH(m.d,new C.dDr())
u=A.B(w,w.$ti.k("J.E"))
t=B.d.cI(v,0,new C.dDs())
w=A.m(18)
s=m.a.d.a
r=s?D.ckQ:D.awy
q=A.I(s?B.cZ.j(0.35):B.cZ.j(0.18),B.q,1)
s=A.p(l,D.bND,B.f,l,l,new A.o(B.cZ.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.av,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.aB,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.m(12),A.aK(!1,A.m(12),!0,D.e2Q,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dDt(m),l,l,l,l,l,l,l),B.f,B.cZ,0,l,l,l,l,l,B.ag)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.ct9("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Ah(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.A(A.a([o,B.ab,A.D(m.b4p(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a7(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.agh,l,l,l),B.aA],p)
if(J.ck(m.d)){w=m.a.d.a
s=w?B.dX:B.c
q=A.m(18)
o=A.I((w?B.bq:B.bn).j(0.12),B.q,1)
n=A.p(l,D.bIC,B.f,l,l,new A.o(B.cZ.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.aB,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bqR,l,l,1/0))}else{w=m.gceV()
s=A.B(new A.K(v,w,A.T(v).k("K<1,r>")),x.l)
if(u.length!==0){q=A.a([B.an,new A.C(D.bsv,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.K(u,w,A.T(u).k("K<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b4p(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bq:B.bn).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cZ
else w=v.a.d.a?B.aQ:B.aB
return A.p(u,A.v(A.a([q,B.bA,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eh,u,u,u)},
ct9(d,e){return this.b4p(!1,d,e)},
ceW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yH(j).length,h=d.bdx()
if(d.x!=null){w=d.yH(j).length
v=w===0?B.cZ:B.bI}else if(d.gT1())v=B.bI
else{if(h)w=B.cZ
else w=k.a.d.a?B.bq:B.bn
v=w}if(d.x!=null){w=d.yH(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wq(u,!1)}else{u.toString
t="Paid "+C.wq(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wq(w,!1)+" \xb7 "+i+" missed":"Due "+C.wq(w,!1)}w=k.a.d.a?B.dX:B.c
u=A.m(18)
if(d.gT1()&&d.x==null)s=B.bI.j(0.35)
else s=(k.a.d.a?B.bq:B.bn).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bm:B.lD
o=A.I(d.gT1()&&d.x==null?B.bI.j(0.45):B.cZ.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.fUO(d.d)
o=A.p(B.A,A.db(C.aX4(A.fsD(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.aB
m=x.p
n=A.a([new A.dm(1,B.ci,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaEa())B.d.v(n,A.a([B.eb,A.W(B.Mz,B.cZ.j(0.8),j,j,j,14)],m))
p=A.D(A.v(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.cX,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.Ah(d.c)
l=k.a.d.a?B.aQ:B.aB
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aK(!1,q,!0,new A.C(W.ag1,A.A(A.a([o,B.bf,p,B.ab,A.v(A.a([n,B.bA,A.W(B.ex,(k.a.d.a?B.bq:B.bn).j(0.5),j,j,j,18)],m),B.dF,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dDk(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ag),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.dc,j,j,j,j)}}
C.u0.prototype={}
C.ajx.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bg
u=v?B.F:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.I(q,B.q,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cv,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.q,1)
n.push(A.aE(a0,A.p(a0,A.W(B.cy,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a8))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.jc,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.at5,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.Fd,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f2(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eg)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bnF,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cC:B.bl,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fo,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eK3)
a2=A.a([A.A(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.v7,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a7(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.l9,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.h7,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a7(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.boR,a0,a0,a0,a0)}}
C.aSV.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bg?B.bg:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.D(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bl:B.cC,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.m,q,B.e,B.j,0,q,q),B.cX,n],m)
if(p.z)o.push(new A.C(B.v4,n,q))
return new A.C(B.dc,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.RX.prototype={
T(){return new C.bcH()}}
C.bcH.prototype={
gbVU(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e3m,D.e3s],l)
for(w=0;w<8;++w){v=D.a0W[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.FX:B.Bo
q=t===s
r=A.W(r,q?B.ez:B.c_,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.x(v.b,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bD(1,B.bi,new A.x(v.c,n,A1.CW,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aV(24,24)
p=new A.aA(B.ez,2,B.q,-1)
s=new A.o(n,n,new A.bP(p,p,p,p),new A.bp(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.C(B.eF,A.v(A.a([new A.C(B.mh,new A.cl(B.aO,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.Du(!0,new C.ajx(v,q.d,q.e,new C.d3c(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d3d(o,v),n,n,n,n,n,n,!1,B.a8))}k.push(new A.C(D.bp9,A.bJ(D.ftr,new C.d3e(o,d),A.bk(B.b5,n,n,n,n,B.o6,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bm(!0,new A.cU(new A.aY(0,1/0,0,m.a.b*0.9),A.cB(k,n,D.btn,n,n,B.ah,!0),n),!0,!1,B.af,!0,!0)}}
C.n4.prototype={
ae(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a6().ac()],x.N,x.z)},
bab(d,e,f){return new C.n4(this.a,e,d,f)}}
C.H2.prototype={
w2(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.H2(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aCn(d){var w=null
return this.w2(w,w,w,w,w,d,w,w,w,w,w,w)},
cDW(d){var w=null
return this.w2(w,w,w,w,d,w,w,w,w,w,w,w)},
ba9(d,e,f){var w=null
return this.w2(d,w,w,w,w,w,w,w,e,w,f,w)},
cEA(d){var w=null
return this.w2(w,w,w,w,w,w,d,w,w,w,w,w)},
cEJ(d){var w=null
return this.w2(w,w,w,w,w,w,w,w,w,d,w,w)},
cDU(d){var w=null
return this.w2(w,w,w,d,w,w,w,w,w,w,w,w)},
cEL(d){var w=null
return this.w2(w,w,w,w,w,w,w,w,w,w,w,d)},
cDR(d){var w=null
return this.w2(w,w,d,w,w,w,w,w,w,w,w,w)},
cDM(d){var w=null
return this.w2(w,d,w,w,w,w,w,w,w,w,w,w)},
F9(d){var w=null
return this.w2(w,w,w,w,w,w,w,d,w,w,w,w)},
cET(d,e,f,g,h,i,j,k,l,m,n){return this.w2(d,e,f,g,null,h,i,j,k,l,m,n)},
ae(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cBG(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bLV(d),k=A.aN(d.h(0,"emblem")),j=k==null?o:B.k.O(k),i=A.aN(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.C1.geh(D.C1))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a2t)
q=l.$2("frame",D.a1V)
l=l.$2("texture",D.a1Q)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cET(p,u,t,q,r,A.qD(d.h(0,"ribbon"))?A.Fz(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Yv.prototype={
T(){return new C.ayt(A.a([],x.I),D.M7)},
gdX(){return this.c}}
C.ayt.prototype={
a_(){var w,v=this
v.a1()
v.f=A.z9(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.kP()
w=v.a
C.bzN(w.c,w.d).bz(new C.d3T(v),x.fL)},
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
v.a2()},
kP(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Kc(s.c,s.d),$async$kP)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d3H(t,r))
t.auj()
case 1:return A.h(u,v)}})
return A.i($async$kP,v)},
gaqV(){var w,v=this
if(!J.ck(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
auj(){var w,v,u=this.gaqV(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
c7X(d){this.m(new C.d3E(this,d))
this.auj()},
MJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$MJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.n4(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aP6(r.c,r.d,s),$async$MJ)
case 3:w=4
return A.b(t.kP(),$async$MJ)
case 4:if(t.c==null||J.ck(t.d)){w=1
break}q=J.q4(t.d,new C.d3f(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d3g(t,p))
t.auj()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.AL(p+1,B.cr,B.kG),$async$MJ)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$MJ,v)},
Ar(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ar=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaqV()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aP6(o.c,o.d,new C.n4(s,r,q,new A.S(p,0,!1))),$async$Ar)
case 3:w=4
return A.b(t.kP(),$async$Ar)
case 4:if(t.c==null){w=1
break}t.m(new C.d3I(t))
case 1:return A.h(u,v)}})
return A.i($async$Ar,v)},
No(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$No=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaqV()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d3o(r),s,null,!0,!0,x.y),$async$No)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bzy(s.c,s.d,r.a),$async$No)
case 4:t.m(new C.d3p(t))
w=5
return A.b(t.kP(),$async$No)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.T4(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$No,v)},
xY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ar(),$async$xY)
case 5:case 4:if(t.c==null){w=1
break}w=J.cx(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.Qd(s,r.r,o,p,q),$async$xY)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hi5(s,r.x,r.r),$async$xY)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Kc(s.c,s.d),$async$xY)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.L(l,new C.n4(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Aq(r.c,r.d,l),$async$xY)
case 11:w=12
return A.b(t.kP(),$async$xY)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xY,v)},
a_D(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ar(),$async$a_D)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxW(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.ys,new C.d3F(t),new C.d3G())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.ml("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gU(o)
p.push(new F.ml(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fWq(o,new F.r6(s,r,"",p,new F.uk(q.d,null,null,null,null,"","","")),null),$async$a_D)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a_D,v)},
N6(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$N6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ar(),$async$N6)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bV(D.abL,null,new C.d3k(t),s,!0,!0,!0,D.aLb,!1,!1,x.N),$async$N6)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cDW(r)
t.m(new C.d3l(t,q))
s=t.a
w=7
return A.b(C.QN(s.c,s.d,q),$async$N6)
case 7:case 1:return A.h(u,v)}})
return A.i($async$N6,v)},
Wd(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(D.abL,null,new C.d3q(t),r,!0,!0,!0,D.aLb,!1,!1,x.e),$async$Wd)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d3r(t,s))
r=t.a
w=4
return A.b(C.QN(r.c,r.d,s),$async$Wd)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.AL(0,B.dV,B.ou)
case 1:return A.h(u,v)}})
return A.i($async$Wd,v)},
bNe(d){var w=d.bS(),v=B.a.aT(B.o.u(w.gce()),2,"0"),u=B.a.aT(B.o.u(w.gct()),2,"0")
return""+w.gci()+"-"+v+"-"+u},
gxW(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bV9()
if(r.e)w=D.aaC
else if(J.ck(r.d)){w=r.y
v=r.gxW(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eUx,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a6(q,330,new A.C(A0.ahi,new C.XO(w,v,0,q),q),q),B.bw,t,B.an,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kb.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bw],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eFq,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dO.j(0.45),B.J,18)],x.V),E.vD,B.n),q,q,q,q,B.Y5,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcAO(),q,q,q,q,q,q,!1,B.a8))
w.push(B.S)
w.push(A.hc(D.bEU,D.fsV,r.gaL4(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.ew,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kb.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dQ:B.zP
u=A.v(A.a([new A.C(D.bqa,w,q),A.D(A.Il(v,new C.d3R(r),J.ad(r.d)+1,q,r.gc7W(),u,B.aO),1),r.bAi()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c8(q,D.ad1,new A.an(B.W,q,B.b_,B.r,A.a([D.aJH,A.bm(!0,A.v(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bV9(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cx(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Jk(B.dW,"AI",h.gbyd(),!0))
if(h.a.f)f.push(new C.Jk(B.n9,"Cover",h.gbIH(),!1))
if(h.a.f)f.push(new C.Jk(B.y5,"Header",h.gbDJ(),!1))
if(J.cx(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Jk(B.tO,"Print",h.gcgW(),!1))
if(h.a.f&&J.cx(h.d)&&h.r>=0){v=h.w
u=v?B.hy:B.jg
t=v?"Save":"Edit"
f.push(new C.Jk(u,t,v?h.gcn1():new C.d3B(h),!1))}if(h.a.f)f.push(new C.Jk(B.hx,"Add page",h.gaL4(),!1))
v=C.hei(h.y.Q)
u=h.gxW(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dkC
else{k=new A.aV(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.aA(E.jL.j(0.5),1,B.q,-1)
j=A.p(g,A.W(l.a,D.kb,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bP(i,i,i,i),new A.bp(k,k,k,k),g,new A.a7(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kb.j(0.85)
p.push(new A.bD(1,B.bi,A.aE(B.c5,A.v(A.a([k,B.bA,new A.x(l.b,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a8),g))}return new C.ajx(v,u,t+" \xb7 "+s+" "+r,new C.d3C(h),A.A(p,B.m,g,B.e,B.j,0,g,g),g)},
zu(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ar(),$async$zu)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gU(r)
s.push(q.b+" "+q.c)}p=F.a1h(B.d.aI(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d3h(t,p),s,null,!0,!0,x.N),$async$zu)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xY(),$async$zu)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.De(),$async$zu)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.EP("Swahili (Kiswahili)",!0),$async$zu)
case 18:w=16
break
case 17:w=19
return A.b(t.cxz(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zu)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zu,v)},
Y5(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jL.j(0.3),B.q,1),r=x.p
return new A.C(B.cH,A.aK(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vD,B.a6),w,42,w,w,w,w,w,42),B.bf,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,A8.SS,w,w,w),A.d(g,w,w,w,w,w,w,O.SL,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d3D(d,h),w,w,w,w,w,w,w),w)},
De(){return this.bMJ()},
bMJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$De=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d3u(r),a7,null,!0,!0,x.ei),$async$De)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eN("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d3v(o),a7,null,!0,!0,x.H).fb(new C.d3w(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.cf(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ae()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.ys[a1]
J.cf(j,i.a)}w=8
return A.b(C.afV(a0,a7,new C.d3x(o),d,l,e,j),$async$De)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.a9(a8)
n=A.t(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a5(l,!0).eI()
l=o
l.shS($.aw())
J.aPy(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.R(A.b2(null,null,null,null,null,B.r,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcn(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ah(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.bab(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Aq(j.c,j.d,l),$async$De)
case 11:w=12
return A.b(r.kP(),$async$De)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.ys[a1].a)
a5=l.cBG(j,12,a7)
l=r.a
w=15
return A.b(C.QN(l.c,l.d,a5),$async$De)
case 15:if(r.c!=null)r.m(new C.d3y(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.AL(0,B.dV,B.ou)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.R(A.b2(a3?A.cp0("Undo",new C.d3z(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$De,v)},
EP(d,e){return this.cxA(d,e)},
cxz(d){return this.EP(d,!1)},
cxA(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$EP=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eN("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d3K(a0),k,null,!0,!0,x.H).fb(new C.d3L(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.cf(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1u(m,new C.d3M(a0)),$async$EP)
case 10:w=8
break
case 9:w=11
return A.b(C.bBg(new C.d3N(a0),m,a2),$async$EP)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.a9(a1)
q=A.t(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a5(o,!0).eI()
o=a0
o.shS($.aw())
J.aPy(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.R(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bab(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Aq(k.c,k.d,o),$async$EP)
case 12:w=13
return A.b(r.kP(),$async$EP)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(A.cp0("Undo",new C.d3O(r,d),null),null,null,null,null,B.r,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EP,v)},
bAi(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d3i(v):u
r=A.aH(u,u,u,u,A.W(D.bAD,s?D.kb:B.b2,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cx(v.d)&&!v.w&&v.r>=0)s=A.hc(A.W(B.vj,B.EB,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.EB,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbIg(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kb.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d3j(v):u
return A.bm(!0,new A.C(D.bpZ,A.A(A.a([r,s,A.aH(u,u,u,u,A.W(B.ex,t<J.ad(v.d)?D.kb:B.b2,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.Yz.prototype={
T(){return new C.bd1(new A.ar(B.as,$.aw()))}}
C.bd1.prototype={
ga0L(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
gbLv(){var w,v=this.ga0L()
A:{if("cover"===v){w=D.cQD
break A}if("book"===v){w=D.cMz
break A}w=D.dds
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jL.j(0.5),n=x.p,m=A.A(A.a([D.dkD,B.av,D.bvk,A.aH(q,q,q,q,B.lg,q,q,q,new C.d5D(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jI(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d5E(r),r.ga0L()==="page",q,q,q,q))
if(r.a.d)l.push(A.jI(q,q,q,D.fnJ,q,new C.d5F(r),r.ga0L()==="book",q,q,q,q))
l.push(A.jI(q,q,q,D.fbn,q,new C.d5G(r),r.ga0L()==="cover",q,q,q,q))
l=A.c_(B.bB,l,B.bs,6,8)
k=B.c.j(0.07)
k=A.aL(q,B.T,!1,q,!0,B.r,q,A.aM(),r.d,q,q,q,q,q,2,A.br(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kw,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dl,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbLv(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mB(q,B.c.j(0.08),new A.x(s,q,B.IA,q,q,q,q,q,q,q,q,q),B.hB,new C.d5H(r,s),q,q,q,q))}return A.eG(q,E.Ak,A.cd(A.v(A.a([m,B.S,D.fqT,B.an,l,B.ac,k,B.P,A.c_(B.bB,w,B.bs,6,6),B.aA,A.dp(D.bER,D.frE,new C.d5I(r,d),A.bk(B.b5,q,q,q,q,B.o6,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.at,D.fm4],n),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.fy,q,q,B.ah),q,q,q,D.ah1,B.d0,q,new A.b7(p,new A.aA(o,1.4,B.q,-1)),q)}}
C.Yx.prototype={
T(){return new C.ayu(A.a([],x.Y))},
gdX(){return this.c}}
C.adI.prototype={}
C.ayu.prototype={
a_(){this.a1()
this.kP()},
kP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Qh(p.c,p.d),$async$kP)
case 3:o=e
n=A.a([],x.Y)
p=J.aW(o)
case 4:if(!p.C()){w=5
break}s=p.gU(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bzN(r.c,q),$async$kP)
case 6:j=e
i=J
w=7
return A.b(C.Kc(t.a.c,q),$async$kP)
case 7:m.push(new l.adI(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d47(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kP,v)},
b5y(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Pp(d,e){return this.c9u(0,e)},
c9u(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).c6(A.e6(new C.d46(u,e),!0,null,x.y)),$async$Pp)
case 2:t=g
w=3
return A.b(u.kP(),$async$Pp)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.R(D.aN4)
return A.h(null,v)}})
return A.i($async$Pp,v)},
ES(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$ES=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.R(D.aN0)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.afd(s.c,s.d),$async$ES)
case 5:q=e
w=6
return A.b(t.kP(),$async$ES)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Pp(0,B.d.iC(t.d,new C.d4b(q))),$async$ES)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Qd(p,s.f,r,n,o),$async$ES)
case 10:m=e
w=11
return A.b(t.kP(),$async$ES)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.R(D.aN4)
case 1:return A.h(u,v)}})
return A.i($async$ES,v)},
OU(d,e){return this.ckL(0,e)},
ckL(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$OU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d4a(t,e),s,null,!0,!0,x.y),$async$OU)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a1H(s.c,s.d,e.a),$async$OU)
case 4:w=5
return A.b(t.kP(),$async$OU)
case 5:case 1:return A.h(u,v)}})
return A.i($async$OU,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bAl(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jL.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fG(0.7142857142857143,A.p(n,A.v(A.a([D.dkE,B.ac,D.e2w,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kb.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.bb,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcAK(),n,n,n,n,n,n,!1,B.a8))}w=A.m(22)
v=A.I(E.jL.j(0.85),B.q,1.6)
s=A.aE(n,A.p(n,D.bMs,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jL.j(0.6),B.q,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d4c(d),n,n,n,n,n,n,!1,B.a8)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jL.j(0.5),B.q,1)
w=A.p(n,A.A(A.a([s,B.bf,D.bvG,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eTD,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h5,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bRX,B.n),n,n,n,Am.LA,D.bo6,n,n,n)
if(o.e)k=D.aaC
else k=k.length===0?D.b2J:A.cn(new C.d4d(k))
return A.c8(n,D.ad1,new A.an(B.W,n,B.b_,B.r,A.a([D.aJH,A.bm(!0,A.v(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bAl(d){var w,v,u=this,t=null,s=u.b5y(d),r=d.c,q=x.p,p=A.a([A.bY(0,A.f2(B.A,new A.a6(300,420,new C.XO(d.b,s,r,t),t),B.f,B.dt),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bLM,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b2,B.q,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d44(u,d),t,t,t,t,t,t,!1,B.a8),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eTd,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fG(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kb.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d45(u,d),t,t,t,t,t,t,!1,B.a8)}}
C.Jk.prototype={}
C.XO.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.ys,new C.cDa(m),new C.cDb()),j=m.c,i=D.C1.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lR:B.bb
v=new C.cDc(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e_Q,28)],x.V)
u=x.p
t=A.a([A.bY(0,A.b3(l,l,l,new C.bai(j.x,h,l),B.au),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aV(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bp(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ahj,8,0.85,2.2),v.$4(D.bsO,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ahj,8,0.85,2.4))
else if(r==="corners")t.push(A.bY(0,new A.C(D.bsK,A.b3(l,l,l,new C.ba9(h,l),B.au),l),0,0,0))
r=A.W(D.avH[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.at5,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cC,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aP,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bY(0,new A.C(D.btf,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aFt(l),D.eJc),l,l,l,46,0,l))
return A.p(l,A.bv(D.a9j,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.a9j,i,new A.a7(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bai.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eP()
f.dG(11)
switch(this.b){case"plain":return
case"linen":$.X()
w=A.M()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.H()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.X()
q=A.M()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.H()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.aj()
l=f.aj()
k=f.aj()
$.X()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=t.j(0.25+f.aj()*0.5).gp(0)
r=j.H()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.X()
j=A.a([],l)
h=new A.aQ(k.r,B.ap,null,null,j)
j.push(new A.b5(v,t))
k=i-0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bF())
k=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.H()
k=h.gbJ().a.snapshot()
o.drawPath((h.e=new A.cF(k)).a,r)
r.delete()}break
default:$.X()
w=A.M()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=w.H()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.X()
g=A.M()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=g.H()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
aq(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.ba9.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.X(),k=A.M(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.eAx,new A.cL([w,0,-1,1]),new A.cL([0,v,1,-1]),new A.cL([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aQ(l,B.ap,null,null,s)
s.push(new A.b5(r+p*34,q))
s.push(new A.ap(r,q))
s.push(new A.ap(r,q+o*34))
m=k.H()
s=n.gbJ().a.snapshot()
w.drawPath((n.e=new A.cF(s)).a,m)
m.delete()
s=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
aq(d){return!d.b.A(0,this.b)}}
C.u1.prototype={}
C.Y5.prototype={
T(){return new C.bag()}}
C.bag.prototype={
gnQ(){var w=this.d
return w===$?this.d=this.a.c:w},
gxW(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bb(w.b,B.b3,B.aN),$.aw())}return v},
gazD(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bb(w.c,B.b3,B.aN),$.aw())}return v},
gapv(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bb(w.y,B.b3,B.aN),$.aw())}return v},
q(){var w=this,v=w.gxW(0),u=v.S$=$.aw()
v.P$=0
v=w.gazD()
v.S$=u
v.P$=0
v=w.gapv()
v.S$=u
v.P$=0
w.a2()},
aq6(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jI(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cWC(this,f,u),e===u,s,s,s,s))}return A.c_(B.bB,r,B.bs,6,8)},
avM(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lp,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnQ(),a0=f.gxW(0),a1=a0.a.a,a2=f.gazD(),a3=a2.a.a,a4=f.gapv(),a5=d.ba9(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a6(190,260,A.f2(B.A,new A.a6(270,370,new C.XO(a5,d,f.a.e,e),e),B.f,B.dt),e),e,e,e)
a0=A.aL(e,B.T,!1,e,!0,B.r,e,A.aM(),a0,e,e,e,e,e,2,f.avM("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cX0(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aL(e,B.T,!1,e,!0,B.r,e,A.aM(),a2,e,e,e,e,e,2,f.avM("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cX1(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a5,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.ys[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b2
q=r.a===q
o=new A.aA(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bP(o,o,o,o),e,e,new A.a7(B.ax,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.az
v.push(A.aE(e,A.v(A.a([p,B.cX,new A.x(t.b,e,new A.G(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cX2(f,t),e,e,e,e,e,e,!1,B.a8))}v=A.c_(B.bB,v,B.bs,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b5.j(0.35):B.c.j(0.07)
m=new A.aV(14,14)
s=f.d
o=new A.aA((s===$?f.d=f.a.c:s).d===n?B.ez:B.K,2,B.q,-1)
q.push(A.aE(e,A.p(e,A.W(D.avH[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bP(o,o,o,o),new A.bp(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cX3(f,n),e,e,e,e,e,e,!1,B.a8))}q=A.c_(B.bB,q,B.bs,8,8)
a4=A.aL(e,B.T,!1,e,!0,B.r,e,A.aM(),a4,e,e,e,e,e,2,f.avM("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cX4(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dl,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mC,e,e,e)
m=A.a([],w)
for(l=D.C1.gdL(D.C1),l=l.gaf(l);l.C();){k=l.gU(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ez:B.b2
g=r.e===i
o=new A.aA(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bP(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.az
m.push(A.aE(e,A.v(A.a([j,B.bA,new A.x(i,e,new A.G(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cX5(f,k),e,e,e,e,e,e,!1,B.a8))}m=A.c_(B.bB,m,B.bs,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mC,e,e,e)
k=f.gnQ()
return new A.C(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cU(new A.aY(0,1/0,0,a1.a.b*0.92),A.cB(A.a([D.fly,B.ac,d,B.aP,a0,B.S,a2,B.aA,D.frs,B.P,v,B.aA,D.flH,B.P,q,B.aA,a4,B.aA,p,B.P,m,B.aA,l,A.kT(e,9,""+B.k.V(f.gnQ().f),36,18,new C.cX6(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mC,e,e,e),B.an,f.aq6(D.a2t,f.gnQ().r,new C.cX7(f),D.dgE),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mC,e,e,e),B.an,f.aq6(D.a1V,f.gnQ().w,new C.cX8(f),D.dgJ),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mC,e,e,e),B.an,f.aq6(D.a1Q,f.gnQ().x,new C.cXa(f),D.di6),B.an,A.iD(e,B.b5,e,B.af,e,new C.cXb(f),e,e,e,D.fg6,f.gnQ().z),B.bw,A.bJ(D.fkq,new C.cXc(f,a6),A.bk(B.b5,e,e,e,e,B.o6,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,R.agR,e,e,B.ah,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aFt.prototype={
a5(d,e){var w,v,u,t=new A.aQ($.X().r,B.ap,null,null,A.a([],x.v))
t.E(new A.b5(0,0))
w=e.a
t.E(new A.ap(w,0))
v=e.b
t.E(new A.ap(w,v))
t.E(new A.ap(w/2,v-12))
t.E(new A.ap(0,v))
t.E(new A.bF())
u=A.M()
u.sau(D.bSA.aw(0,new A.aa(0,0,0+w,0+v)))
d.aO(t,u)},
aq(d){return!1}}
C.bfu.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.X()
w=A.M()
w.sau(D.bRD.aw(0,new A.aa(0,0,a3,a4)))
a5.aY(new A.aa(0,0,a3,a4),w)
v=B.k.dw(a2/112)
u=new A.eP()
u.dG(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cQC[u.aA(9)]
j=u.aA(14)
J.bz(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.aa(n,j,n+m,j+l)
h=A.bA(i,B.hc)
g=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.sau(new A.a7(B.a3,B.a7,B.x,A.a([f,k,e],t),a0,a0).aw(0,i))
d=g.H()
w.drawRRect(A.ep(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
e.r=E.jL.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c4(new A.aa(h,j,g,j+2)),d)
d.delete()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jL.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c4(new A.aa(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aA(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.sau(D.bR0.aw(0,new A.aa(0,r,a3,q)))
d=p.H()
w.drawRect(A.c4(new A.aa(0,r,a3,q)),d)
d.delete()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jk
d=p.H()
w.drawRect(A.c4(new A.aa(0,q,a3,q+14)),d)
d.delete()}w=A.M()
w.r=D.b63.j(0.72).gp(0)
a5.aY(new A.aa(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.M()
a4.sau(new A.bR(B.A,0.5,B.x,a0,0,A.a([D.bcF.j(0.22),B.K],t),a0,a0).aw(0,A.bU(new A.u(w,a2),a1)))
a5.ai(new A.u(w,a2),a1,a4)},
aq(d){return!1}}
C.b8w.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aJ(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.kJ(new A.o(A.aq(D.kb,D.bgW,w/4),o,new A.bP(B.Y,new A.aA(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.JH,o,o,B.n),B.bd,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aFk,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aV(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jL.j(0.6),o,o,new A.bp(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.pT,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aW6,u,D.bSy,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dk,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aFt(o),D.eJ7),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aSV(p.y,r,G.ir,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aL(o,B.T,!1,o,!0,B.r,o,A.aM(),p.r,o,o,o,o,o,2,A.br(o,B.ey,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ir.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f5R,!0,B.a5,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ir.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.D(A.aL(o,B.T,!1,o,!0,B.r,o,A.aM(),p.w,o,o,o,o,o,2,A.br(o,B.ey,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ir.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.eY3,!0,B.a5,B.ze,B.am,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.f5K,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ir.j(0.5),o,o,o,o,o,o,o,o,11,B.cC,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.D(A.p(o,o,B.f,D.Eo.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fo,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Eo.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.f,D.Eo.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.ir.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.X3(A.dq(A.a([A.dq(o,o,o,o,o,o,o,o,o,D.f08,B.a.ap(k,0,1)),A.dq(o,o,o,o,o,o,o,o,o,o,B.a.b0(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.ir.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ah)}s.push(A.D(n,1))
s.push(new A.C(B.ia,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.ir.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.A(A.a([u,A.D(A.p(o,A.bv(B.JH,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.C(D.bsh,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.bZ(o,new A.o(o,o,o,o,o,new A.a7(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bd),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.JH,v,D.bT4,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.aoi.prototype={
T(){return new C.aC0(A.a([],x._))},
bp(){return this.r.$0()},
pw(){return this.w.$0()},
gdX(){return this.c}}
C.aC0.prototype={
a_(){var w,v
this.a1()
this.vz()
w=this.a
v=w.c
if(v.length!==0)C.a6i(v,w.e,w.d.w)},
vo(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fWt(r,t.e,!1,s.w,new C.dRm(u),null,s),$async$vo)
case 2:w=3
return A.b(u.vz(),$async$vo)
case 3:return A.h(null,v)}})
return A.i($async$vo,v)},
ZN(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ZN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fWt(r,t.e,!0,s.w,new C.dRl(u),null,s),$async$ZN)
case 2:w=3
return A.b(u.vz(),$async$ZN)
case 3:return A.h(null,v)}})
return A.i($async$ZN,v)},
vz(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vz=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Af(q.a.c),$async$vz)
case 7:p=e
if(q.c!=null)n=q.e||J.cx(p)
else n=!1
if(n)q.m(new C.dRo(q,p))
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
return A.b(C.G_(q.a.c).cM(0,B.px),$async$vz)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dRp(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dRq(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vz,v)},
NT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$NT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.R(D.eMK)
w=3
return A.b(C.G_(t.a.c),$async$NT)
case 3:r=e
w=4
return A.b(C.fCi(t.a.c,r),$async$NT)
case 4:q=e
w=5
return A.b(C.G_(t.a.c),$async$NT)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dRk(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(null,null,null,q?B.dw:B.cR,null,B.r,null,s,null,B.md,null,null,null,null,null,null,null,null,null,null))
t.a.pw()
case 1:return A.h(u,v)}})
return A.i($async$NT,v)},
Hq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i2t(l),$async$Hq)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hxe(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aYv(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Hq)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hes(r)
o=Date.now()
n=t.a.c
m=new C.kx(l,r.toUpperCase(),p,!0,B.T,D.BR,new A.S(o,0,!1),0,n,D.tA)
w=5
return A.b(C.a1O(n,m),$async$Hq)
case 5:w=6
return A.b(t.vz(),$async$Hq)
case 6:t.a.bp()
t.a.pw()
if(t.c==null){w=1
break}t.E1(m)
case 1:return A.h(u,v)}})
return A.i($async$Hq,v)},
E1(d){return this.cbw(d)},
cbw(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$E1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Af(u.a.c),$async$E1)
case 2:n=l.r2(k.dH(f,new C.dRn(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hv(m,new C.aoc(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$E1)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a1O(u.a.c,o),$async$E1)
case 6:case 5:w=7
return A.b(u.vz(),$async$E1)
case 7:u.a.pw()
return A.h(null,v)}})
return A.i($async$E1,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=new C.tx(p)
if(r.e)return A.av(A.mD(q,p?B.bq:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.ck(r.d)){w=p?B.dX:B.c
v=A.m(15)
u=A.aF(!1,B.a1,!0,q,A.aK(!1,q,!0,A.p(q,D.bFW,B.f,q,q,new A.o(B.aU.j(0.12),q,A.I(B.aU,B.q,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcaA(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.F3(A.p(q,A.v(A.a([u,B.aP,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e1,A.bJ(D.fsF,r.gaP4(),A.bk(B.bU,q,q,q,q,q,Al.Y8,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bsd,q,q,1/0),15,B.af,1.05,D.a8_,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b4],v)
if(J.cx(r.d))w.push(A.aH(q,q,q,q,A.W(B.yc,B.aU,q,q,q,q),q,q,q,new C.dRs(r),q,q,q,q,"Sync family trees with database",q))
if(J.cx(r.d))w.push(A.aH(q,q,q,q,A.W(B.y3,B.aU,q,q,q,q),q,q,q,r.gaes(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dp(E.amr,D.f9d,r.gaP4(),A.bk(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.F3(r.cxE(J.q(r.d,s),o),14,B.af,1,D.a8_,q))
B.d.v(w,u)}return A.v(A.a([p,B.aA,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cxE(d,e){var w=null,v=e.a,u=v?B.dX:B.c,t=A.m(14),s=A.I((v?B.dZ:B.bR).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ej,10)],x.V),q=A.m(14),p=A.p(w,D.bF_,B.f,w,w,new A.o(B.aU.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.ganp(),m=d.d?"":" \xb7 Public",l=d.y===D.ki?" \xb7 View only":"",k=x.p
l=A.D(A.v(A.a([o,B.bA,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aK(!1,q,!0,new A.C(B.bC,A.A(A.a([p,B.bf,l,A.W(B.Mj,v?B.bq:B.bn,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dRr(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aoc.prototype={
T(){return new C.aBY(A.a([],x._),A.aX(x.N),A.b69())},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aBY.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.abn()
w=u.a
v=w.c
if(v.length!==0)C.a6i(v,w.e,w.d.w)},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.a2()},
a1I(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1I=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xq("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dQN(r),s,null,!0,!0,x.y),$async$a1I)
case 3:if(e!==!0||t.c==null){w=1
break}t.IV()
t.m(new C.dQO(t,r))
w=4
return A.b(t.vq(),$async$a1I)
case 4:t.a.bp()
t.xq(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a1I,v)},
cnG(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aT.x1$.push(new C.dQI(w,f,d,e))},
aRf(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dl()
u.e2(w,v,0,1)
u.jA(q,q,1,1)
this.w.sp(0,u)},
b7N(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eH(new Float64Array(16))
q.dY(r)
w=q.Cc()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dl()
t.e2(r,u,0,1)
t.jA(v,v,1,1)
t.e2(-r,-u,0,1)
t.is(0,q)
s.sp(0,t)},
abn(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Af(u.a.c),$async$abn)
case 2:t=s.r2(r.dH(e,new C.dQg(u)))
if(t!=null&&u.c!=null)u.m(new C.dQh(u,t))
return A.h(null,v)}})
return A.i($async$abn,v)},
xq(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vo(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fWt(o,t,!1,r,new C.dQv(u),q.a,s),$async$vo)
case 2:n=A
m=J
w=3
return A.b(C.G_(u.a.c),$async$vo)
case 3:p=n.r2(m.dH(e,new C.dQw(u)))
if(p!=null&&u.c!=null)u.m(new C.dQx(u,p))
return A.h(null,v)}})
return A.i($async$vo,v)},
IV(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cA(w,0)},
vq(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a1O(t,s),$async$vq)
case 2:return A.h(null,v)}})
return A.i($async$vq,v)},
a0i(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tI(q,t.a.c)){t.xq("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i3C(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0i)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.IV()
t.m(new C.dQH(t,r))
w=4
return A.b(t.vq(),$async$a0i)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0i,v)},
a_0(){return this.cby()},
cby(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tI(q,t.a.c)){t.xq("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.O(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dQF(r,new C.tx(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_0)
case 3:if(e!==!0||t.c==null){w=1
break}t.IV()
t.m(new C.dQG(r,t))
w=4
return A.b(t.vq(),$async$a_0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_0,v)},
V3(d){return this.bxn(d)},
bxn(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$V3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tI(r,t.a.c)){t.xq("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dQ4(t,d),r,null,!0,!0,x.P),$async$V3)
case 3:s=f
if(s==null){w=1
break}t.IV()
t.m(new C.dQ5(t,s))
w=4
return A.b(t.vq(),$async$V3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$V3,v)},
a23(d){return this.czL(d)},
czL(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a23=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.O(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dQQ(u,d,new C.tx(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a23)
case 2:return A.h(null,v)}})
return A.i($async$a23,v)},
c7R(d){var w=this,v=w.d
v===$&&A.c()
if(C.tI(v,w.a.c))w.Ny(d)
else w.a23(d)},
agV(d,e){return this.crw(d,e)},
crw(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$agV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.O(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dQK(new C.tx(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$agV)
case 3:case 1:return A.h(u,v)}})
return A.i($async$agV,v)},
Hv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Hv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.ki?3:5
break
case 3:w=6
return A.b(C.fKs(t.a.c),$async$Hv)
case 6:s=e
o=t.a
r=C.h35(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.agV(!s,!r),$async$Hv)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bzF(o,t.a.c)){t.xq("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kY(o,"Cancel","Remove",q.y===D.ki?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Hv)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aNu(t.a.c,t.d.a),$async$Hv)
case 11:t.a.bp()
o=t.c
if(o==null){w=1
break}A.iL(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Hv,v)},
a8Y(d){return this.bIo(d)},
bIo(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a8Y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tI(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b8(s,new C.dQ6(p))){o=A.T(s)
p.a=A.r2(new A.cQ(new A.a2(s,new C.dQ7(d),o.k("a2<1>")),new C.dQ8(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.IV()
t.m(new C.dQ9(t,s,d,q))
w=3
return A.b(t.vq(),$async$a8Y)
case 3:t.xq(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a8Y,v)},
Ny(d){return this.bKs(d)},
bKs(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ny=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tI(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a23(d),$async$Ny)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dQd(t,d),r,null,!0,!0,x.P),$async$Ny)
case 6:s=f
if(s==null){w=1
break}t.IV()
t.m(new C.dQe(t,s))
w=7
return A.b(t.vq(),$async$Ny)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ny,v)},
cy_(){var w=this,v=w.d
v===$&&A.c()
if(!C.tI(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dQP(w))
w.vq()},
XS(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$XS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bzF(n,t.a.c)){t.xq("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.O(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bl(new A.K(q,t.gc6m(),A.T(q).k("K<1,n>")).c_(0,new C.dQq()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dQr(t,new C.tx(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$XS)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.IV()
t.m(new C.dQs(t,p))
w=4
return A.b(t.vq(),$async$XS)
case 4:t.xq("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$XS,v)},
c6n(d){return B.a.i(d.toLowerCase())},
cal(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tI(v,w)
t=r.d
s=C.hTX(t)
C.i2x(q,t.b,u,C.hTW(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.tx(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a2(l,new C.dQX(),A.T(l).k("a2<1>")).gM(0)
l=n?B.bX:B.iL
v=A.W(B.Zj,n?B.bq:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.C(B.AJ,A.aK(!1,o,!0,new A.C(B.hI,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dQY(p,d),o,o,o,o,o,o,o),o),new A.C(B.n4,p.bVa(m),o)],u)
if(p.d.y===D.ki){t=B.rc.j(0.15)
s=A.m(12)
r=A.I(B.rc.j(0.45),B.q,1)
q=C.FY(p.d,p.a.c)
v.push(new A.C(B.xn,A.p(o,A.A(A.a([D.bK9,B.av,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iR,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b4],u)
if(C.tI(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Jf("Undo",B.r0,p.gcxZ(),m,o,o))
u.push(new C.Jf("Family Book",D.bzK,p.gcak(),m,B.t1,o))
if(C.tI(p.d,p.a.c))u.push(new C.Jf("Display settings",B.Bt,p.gcbx(),m,B.aZ,o))
u.push(new C.Jf("Sync",B.y3,p.gaes(),m,o,o))
t=p.d
if(t.y===D.ki||C.bzF(t,p.a.c)){t=p.d.y===D.ki?"Remove shared tree":"Delete tree"
u.push(new C.Jf(t,B.e4,p.gbIy(),m,B.fY,o))}if(C.tI(p.d,p.a.c))u.push(new C.Jf("Add member",B.vu,new C.dQZ(p),m,B.bU,o))
v.push(new A.C(R.agu,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.ganp()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cn(new C.dR_(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.W(n?K.Zn:Y.Mk,o,o,o,o,o)
v.push(A.av(A.hc(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dR0(p),o),o,o,o))}return A.c8(o,l,A.bm(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bVa(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fu.j(0.35),B.dk,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.W(B.xW,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aK(!1,m,!0,A.p(m,D.bNb,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaes(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eWs,m,m,m)
r=r.ganp()
p=n.d.ganp()===1?"member":"members"
o=x.p
p=A.a([s,B.bf,A.D(A.v(A.a([q,B.bA,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tI(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bKl,m,m,m,n.gcl5(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jh:B.ml
r=r?"Private":"Public"
r=A.D(n.atI(q,"Privacy",r,n.a.d.w?n.gcx_():m),1)
q=A.D(n.atI(B.y4,"Tree code",n.d.c,new C.dQf(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.ab,q,B.ab,A.D(n.atI(D.bBs,"Collaborators",p,n.gbZC()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.ki){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aF(!1,B.a1,!0,A.m(999),A.aK(!1,A.m(999),!0,new A.C(B.fH,A.A(A.a([A.W(B.oE,B.c,m,m,m,14),B.eb,A.d("View only",m,m,m,m,m,m,B.aOf,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ag)],o))}return A.p(m,A.bv(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.C(B.F0,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bR4,B.n),m,m,m,m,m,m,m,1/0)},
atI(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.m(14),A.aK(!1,A.m(14),!0,new A.C(L.ahC,A.v(A.a([A.W(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uq,A.d(f,w,1,B.a2,w,w,w,P.zi,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)}}
C.bcK.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bcN(s,t),new A.at(w,v))],x.p)
r=r.gdL(r)
B.d.v(u,r.dt(r,new C.d4h(this),x.l))
r=s.c
B.d.v(u,new A.K(r,new C.d4i(this),A.T(r).k("K<1,r>")))
return new A.C(B.tw,new A.a6(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.Js.prototype={}
C.Ff.prototype={}
C.bcM.prototype={
gbgg(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aHy.prototype={}
C.bcN.prototype={
bKa(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.X()
v=A.M()
v.r=B.bz.j(0.75).gp(0)
v.c=2
v.d=B.bO
d.bA(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aQ(q.r,B.ap,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.E(new A.pr(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.pr(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bF())
q=A.M()
q.r=B.c.gp(0)
d.ai(new A.u(u,w),9,q)
q=A.M()
q.r=B.bz.gp(0)
d.aO(t,q)},
bK8(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.d4C())
w=f.b
v=w+(B.d.gK(a0).b-w)/2
u=B.d.b8(a0,new C.d4D(f))
t=new A.K(a0,new C.d4E(f),A.T(a0).k("K<1,N>")).c_(0,new C.d4F()).cI(0,1/0,B.wB)
w=f.a
d.bA(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lO(m)
i=Math.min(10,l/2)
l=$.X()
h=A.a([],q)
g=new A.aQ(l.r,B.ap,null,null,h)
h.push(new A.b5(w,v-i))
l=j*i
h.push(new A.cS(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.cS(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.H()
n=g.gbJ().a.snapshot()
r.drawPath((g.e=new A.cF(n)).a,k)
k.delete()}},
a5(d,e){var w,v,u,t,s,r,q,p,o
$.X()
w=A.M()
w.r=B.bU.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bO
w.e=B.fz
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bK8(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bKa(d,w,q.a,q.b)}},
aq(d){return d.b!==this.b}}
C.bgr.prototype={
gc4b(){var w=this.c
if(B.a.i(w.y).length!==0)return D.ddr
switch(w.c.a){case 0:return D.cIy
case 1:return D.cTo
case 2:return D.d80}},
gc4e(){var w=this.c,v=C.hdQ(w.w),u=C.hdQ(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=t.gc4b(),p=t.c,o=I.bAz(p.f),n=t.gc4e(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.aB:B.c,j=A.I(r?B.aB:B.c,B.q,2)
if(o!=null)w=A.rY(B.A,s,B.co,B.bQ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gK(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a7(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hS(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a7(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Fg,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.aB:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.f5m,s,s,s),B.f,s,s,new A.o(B.c8,s,w,j,s,s,B.n),s,s,s,s,D.bu4,s,s,s),s,s,s,-6,-4,s))}k=r?B.cE:B.c
j=A.m(8)
w=A.I(B.d.gK(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dC,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cE,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a4,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a6(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aY_,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.buf,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a8)}}
C.bbR.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.X()
w=A.M()
v=this.b
u=v?B.c:D.b8F
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
aq(d){return d.b!==this.b}}
C.bu1.prototype={
B(d){var w=this,v=null,u=new C.f5S(w),t=w.c,s=t?B.cE:B.c,r=A.m(12),q=u.$3(B.hx,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.f8,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.y0,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.f8,v,v,v,1,v,v,v,v,v,22),u.$3(B.ajX,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dn,v,v,v,B.ag)}}
C.bjN.prototype={
B(d){var w=this,v=null,u=B.bU.j(0.15),t=A.I(B.bU,B.q,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.W(s?K.Zn:Y.Mk,B.bU,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.f1J,v,v,v)],r),B.m,v,B.bb,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a8)
u=A.a([t,B.an,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.f_J,B.L,v,v)],r)
if(s){t=A.a([B.an],r)
s=w.d
B.d.v(t,new A.K(s,new C.eI9(w),A.T(s).k("K<1,r>")))
B.d.v(u,t)}return new A.a6(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Z8.prototype={
T(){return new C.aAp()},
bp(){return this.Q.$0()},
gdX(){return this.w}}
C.aAp.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aO()
r.d=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aO()
r.e=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aO()
r.f=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aO()
r.r=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aO()
r.w=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aO()
r.x=new A.ar(new A.bb(t,B.b3,B.aN),s)
t=u?q:v.c
r.y=t==null?D.xA:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hVu(w.r,w.f)
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
v.a2()},
OV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$OV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h35(p.y,p.w)
w=3
return A.b(A.la(t.a.w,B.HE),$async$OV)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aYv(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$OV)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hxf(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(An.G8(78,800),$async$OV)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dks(t,q))
case 1:return A.h(u,v)}})
return A.i($async$OV,v)},
c4d(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hV(B.o.u(1000*Date.now()),w,D.xA,null,null,null,"","","","","",1,!1,0)
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
s=v.aCt(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a5(k,!1).N(s)},
a8z(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a8z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dkr(r),s,null,!0,!0,x.y),$async$a8z)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a8z,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===B.I,i=new C.tx(j),h=l.a.e,g=A.T(h).k("a2<1>"),f=A.B(new A.a2(h,new C.dkB(l),g),g.k("J.E"))
h=j?B.dX:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bsz,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.aB,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hp(A.aK(!1,k,!0,new A.C(B.lJ,A.W(B.e4,B.or,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbFe(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jt:B.iO
t=I.bAz(l.as)
if(l.as==null)s=A.W(B.ow,j?B.bq:B.bn,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.aa,B.r,A.a([A.hq(u,t,s,k,42),A.ao(0,A.hq(B.bU,k,D.bE4,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc4a(),k,k,k,k,k,k,!1,B.a8),k,k,k)
t=l.d
t===$&&A.c()
t=C.aAr(t,"Full name",B.mi,1,1,i,B.lX)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bgp(i,u,new C.dkC(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bmb],q)
o=l.a.e
B.d.v(p,new A.K(o,new C.dkD(),A.T(o).k("K<1,eQ<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bmd],q)
B.d.v(q,new A.K(f,new C.dkF(),A.T(f).k("K<1,eQ<n?>>")))
o=A.v(A.a([t,B.an,new C.ac9(i,r,"Who is their parent?",p,new C.dkG(l),k,o),B.aA,n,B.an,new C.ac9(i,m,"Who is their spouse / partner?",q,new C.dkH(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aAr(q,"Birth date",D.aj0,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aAr(m,"Birth place",B.ZC,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aAr(n,"Date of death (if deceased)",D.alh,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aAr(p,"Occupation",B.a_G,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aA,s,B.bw,new C.aca(i,"Identity",u,k),B.ac,new C.aca(i,"Family links",o,k),B.ac,new C.aca(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aAr(r,"Notes",B.kL,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aAq(i,"Child order",l.cbL(l.at),new C.dkI(l),new C.dkJ(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fTT(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dkK(l):k
B.d.v(r,A.a([B.S,new C.aAq(i,"Visible in tree",u,w,new C.dkL(l),k)],v))}r.push(B.S)
w=j?B.jt:B.iO
u=A.m(14)
t=A.I(j?B.dZ:B.bR,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iD(k,B.bU,k,B.af,k,new C.dkM(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.ag5,k,k,k))
r.push(B.bw)
w=j?B.aQ:B.aB
j=j?B.dZ:B.bR
r.push(A.A(A.a([A.D(A.dU(B.nq,new C.dkE(d),A.de(k,k,k,k,k,k,k,k,k,w,k,k,B.cf,k,new A.b7(A.m(14),B.Y),new A.aA(j,1,B.q,-1),k,k,k,k)),1),B.bf,A.D(A.bJ(D.eFy,l.gc4c(),A.bk(B.aU,k,k,0,B.c,k,B.cf,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.ei(B.ha,k,B.af,h,new A.a6(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),k),D.agY,k,B.agl,new A.b7(g,B.Y),k,k)},
cbL(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aca.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jt:B.iO,s=A.m(16)
return A.v(A.a([new A.C(D.ahm,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dZ:B.bR,B.q,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bgq.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dX:B.c,r=A.m(12),q=A.I((t?B.dZ:B.bR).j(0.85),B.q,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aQ:B.aB,u,u,u,u,u,u,u,u,14,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aL(u,B.T,!1,u,!0,B.r,u,A.aM(),v.d,u,u,u,u,u,2,A.br(u,B.ey,u,B.v9,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cu,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.ac9.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dX:B.c,s=A.m(12),r=A.I((u?B.dZ:B.bR).j(0.85),B.q,1),q=A.W(B.qV,u?B.bq:B.bn,v,v,v,v),p=A.l(v,v,u?B.aQ:B.aB,v,v,v,v,v,v,v,v,14,v,v,B.a4,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dX:B.c
return A.p(v,new A.Db(A.a3r(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cu,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.l7,v,v,v)}}
C.bgp.prototype={
B(d){var w=new C.dkN(this)
return A.A(A.a([w.$3(D.YW,"Male",B.N5),B.ab,w.$3(D.aie,"Female",B.MR),B.ab,w.$3(D.xA,"Other",B.na)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aAq.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jt:B.iO,r=A.m(14),q=A.I(t?B.dZ:B.bR,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.aB,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.D(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aGB(u,B.y0,w.f,v),B.bp,new C.aGB(u,B.hx,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eh,v,v,v)}}
C.aGB.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bU.j(0.12)
else w=s.c.a?B.dX:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bU
else t=(s.c.a?B.bq:B.bn).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,new A.a6(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ag)}}
C.acb.prototype={
bNO(d){switch(d.a){case 0:return B.bU
case 1:return B.bz
case 2:return B.cU}},
bNP(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aVs(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zP(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dX:B.c
u=A.m(12)
t=A.I((w?B.dZ:B.bR).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.W(f,B.bU,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.v(A.a([q,B.at,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.aB,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cH,B.xk,p,p,1/0)},
acX(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jt:B.iO,s=A.m(16),r=A.I(v?B.dZ:B.bR,B.q,1)
return A.v(A.a([new A.C(D.ahm,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hiw(r,q),o=q.c,n=t.bNO(o),m=I.bAz(q.f),l=t.e.a,k=l?B.dX:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.aB,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.ki?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.hq(u,m,m==null?A.W(B.ow,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.en,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bNP(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mg,s,s,s),s,s,s)
u=x.p
i=A.a([t.zP("Full name",i,B.mi)],u)
if(p>0)i.push(t.zP("Child order","#"+p,B.MY))
r=A.a([h,B.at,r,B.aP,l,B.S,v,B.bw,t.acX("Identity",i),B.ac,t.acX("Life details",A.a([t.zP("Birth date",q.w,D.aj0),t.zP("Birth place",q.x,B.ZC),t.zP("Date of death",q.y,D.alh),t.zP("Occupation",q.z,B.a_G)],u)),B.ac,t.acX("Family links",A.a([t.zP("1. Parent",t.aVs(q.d),B.Fu),t.zP("2. Spouse",t.aVs(q.e),B.MQ)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.acX("Notes",A.a([t.zP("Notes",q,B.kL)],u))],u))
r.push(B.bw)
r.push(A.bJ(B.IQ,new C.dkX(d),A.bk(B.aU,s,s,s,s,s,B.cf,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eG(s,k,new A.cU(B.lw,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.r,s,B.y,s,B.xp,s,s,B.ah),s),s,s,s,B.F3,B.d0,s,new A.b7(j,B.Y),s)}}
C.Jf.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bq:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.xs,A.hp(A.aF(!1,B.a1,!0,A.m(8),A.aK(!1,A.m(8),!0,new A.a6(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ag),u,v.c,u,u),u)}}
C.aof.prototype={
eK(){var w,v,u=this,t=x.N,s=A.V(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a6().ac())
w=u.c
v=A.T(w).k("K<1,a3<n,@>>")
w=A.B(new A.K(w,new C.c6u(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iV(w,new C.c6v(),t,x.U))
return s}}
C.aog.prototype={
T(){return new C.aC_(A.a([],x.bF))},
gdc(){return this.c}}
C.aC_.prototype={
a_(){this.a1()
this.J1()},
J1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$J1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c6y(t.a.c),$async$J1)
case 3:r=e
w=4
return A.b(C.Af(t.a.c),$async$J1)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qJ(q,new C.dR9(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dRa(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$J1,v)},
xX(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
JK(d,e){return this.cAk(d,e)},
cAk(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$JK=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dRe(q,e))
t=3
w=6
return A.b(d.$0(),$async$JK)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dRf(q))
$.eS.mh()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JK,v)},
WI(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oX(r,s.c,s.e),$async$WI)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JK(new C.dR6(t),"Preparing download\u2026"),$async$WI)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WI,v)},
WM(d){return this.bLS(d)},
bLS(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oX(r,s.c,s.e),$async$WM)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.JK(new C.dR7(t,d),"Preparing file\u2026"),$async$WM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WM,v)},
aeP(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aeP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wP.c5().Lu(B.PW,B.tB,!0),$async$aeP)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gam(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jm(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.a9(m)
$.am.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.G7()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeP,v)},
Xm(d){return this.bW3(d)},
bW3(d){var w=0,v=A.j(x.H),u=this
var $async$Xm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.JK(new C.dR8(u,d),"Restoring family trees\u2026"),$async$Xm)
case 2:return A.h(null,v)}})
return A.i($async$Xm,v)},
Xl(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aeP(),$async$Xl)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Xm(s),$async$Xl)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xl,v)},
a18(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a18=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oX(r,s.c,s.e),$async$a18)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JK(new C.dRd(t),"Creating QR code\u2026"),$async$a18)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a18,v)},
a0K(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0K=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Cs()){t.xX("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).c6(A.e6(new C.dRb(),!0,null,x.N)),$async$a0K)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Xm(r),$async$a0K)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0K,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===B.I,n=o?B.A9:B.iL,m=o?D.aeE:B.aQ,l=o?B.aK:B.bR,k=o?B.aQ:B.aB,j=new C.d4G(n,m,l,k,o?B.bJ:B.bn)
l=A.aH(p,p,p,p,A.W(B.eA,k,p,p,p,20),p,p,p,new C.dRh(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eF(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d4e(!0,B.jj,B.aV,B.aV,q.r?p:q.gcrk(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gcnB()
t.push(A.D(C.d4e(!s,B.iU,B.b5,B.by,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d4e(!1,B.hz,B.aU,B.bU,q.r?p:q.gbLL(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d4e(!1,M.y7,B.aH,B.aM,q.r?p:q.gbW0(),j,s,"Upload backup file"),1))
l=A.a([new C.bcL(v,l,p),B.kt,new C.abs(j,"QR restore",p),B.S,t,B.d5,new C.abs(j,"Backup files",p),B.S,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kt,new C.abs(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dRi(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cB(l,p,B.Y4,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aU.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dk,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.A(A.a([K.aMJ,B.bf,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.AQ,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c8(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d4G.prototype={}
C.bcL.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aU.j(0.32),B.k0,28)],x.V)
t=A.ao(p,A.W(B.tS,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.C(B.a9,A.A(A.a([A.p(p,D.bMK,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.o7,A.D(A.v(A.a([D.fab,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bUe,B.n),p,p,p,p,p,p,p,p)}}
C.abs.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aU,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bcJ.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aV.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aV.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aF(!1,B.a1,!0,q,A.aK(!1,o,!0,A.ez(A.db(new A.C(E.XK,A.v(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qP,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bA,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cu,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)}}
C.bcO.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aU.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.ez(new A.C(B.eP,A.A(A.a([A.p(v,D.bLY,B.f,v,v,new A.o(q,v,A.I(B.aU.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.qP,v,v,v),B.bf,A.D(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.W(B.hz,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.Zt.prototype={
T(){return new C.aBZ()},
gdc(){return this.c}}
C.aBZ.prototype={
a_(){this.a1()
this.a85()},
a85(){var w=0,v=A.j(x.H),u=this,t
var $async$a85=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b08(u.a.c,B.Cr),$async$a85)
case 2:t=e
if(u.c!=null)u.m(new C.dR1(u,t))
return A.h(null,v)}})
return A.i($async$a85,v)},
agb(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$agb=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dR2(q))
t=4
p=A.h4J(q.a.d,B.Cr)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.U(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aqu(n.e,m,l,B.Cr,p,n.f),$async$agb)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dR3(q))
q.c.I(x.q).f.R(D.eNT)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a9(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.e9(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dR4(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agb,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=p?B.j6:B.pp,n=p?B.i6:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eF(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fpw,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aU.j(0.35),B.q,1)
u=A.pC(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aU,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.v(A.a([B.P,u,B.bw,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.bb,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcnj()
if(u)u=B.Ir
else u=A.W(r.e===!0?B.hy:B.aj_,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a6(1/0,q,A.eB(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cc,q,q,q),t,A.de(q,q,q,q,q,q,q,q,q,B.aU,q,B.fM,q,q,q,new A.aA(B.aU.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.ia,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.az:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a6(1/0,q,A.bJ(B.zm,new C.dR5(d),A.bk(B.aU,q,q,q,q,B.fM,q,q,q,q,q,q)),q))
return A.c8(m,o,new A.C(B.a9,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Zu.prototype={
T(){return new C.bhU(A.yO(B.xa,B.nx,B.tX))}}
C.bhU.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c8(A.eF(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fhP,w,w,w,1,w,!0),B.w,A.yN(this.d,B.bQ,new C.dRj(this,d)),w,!1,!1,w,w)}}
C.aX3.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Pp,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lu.prototype={}
C.a5k.prototype={
T(){return new C.bhA(null,null)}}
C.bhA.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tp,v,1,v,w)
w.e=A.bj(v,B.pw,v,1,v,w)
w.a.toString
w.d.cH(0)
w.e.cH(0)},
br(d){var w,v,u=this
u.bE(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cH(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cH(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.bsN()},
B(d){var w,v,u=this,t=B.d.dM(D.a2l,new C.dCt(u),new C.dCu())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.crK(A.c6(new A.h3(A.a([w,v],x.dS)),new C.dCv(u,t),null),!0)}}
C.bhz.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aZH(d,e)
break
case"house":p.lV(d,e,D.cXO)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gee()
$.X()
t=A.M()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ai(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m_(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Ay(d,e,12)
p.xA(d,e,B.l1,5,14)
break
case"grocery":p.ccu(d,e)
break
case"calculator":p.ccb(d,e)
break
case"lumber":p.ccC(d,e)
break
case"kitchen":p.ccx(d,e)
break
case"landscape":p.lV(d,e,D.cYj)
s=new A.aQ($.X().r,B.ap,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cS(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cS(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.ap(t,w))
s.E(new A.ap(0,w))
s.E(new A.bF())
w=A.M()
w.r=B.ff.j(0.85).gp(0)
d.aO(s,w)
p.Ay(d,e,8)
p.xA(d,e,B.iQ,4,18)
break
case"plumbing":p.ccL(d,e)
break
case"electrical":p.lV(d,e,D.d7k)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.X()
u=A.M()
u.r=B.c.j(q*0.12).gp(0)
d.aY(new A.aa(0,0,0+e.a,0+e.b),u)
p.m_(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m_(d,e,B.lB.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Ay(d,e,10)
break
case"store":p.ccU(d,e)
break
case"paint_remodel":p.ccG(d,e)
break
case"roofing":p.ccN(d,e)
break
case"warehouse":p.cd0(d,e)
break
case"vehicles":p.ccZ(d,e)
break
case"farm":p.cco(d,e)
break
case"restaurant":p.ccM(d,e)
break
case"tools":p.ccX(d,e)
break
case"wallet":p.cd_(d,e)
break
case"concrete":p.cch(d,e)
break
case"blueprint":p.cc9(d,e)
break
default:p.aZH(d,e)}},
lV(d,e,f){var w,v=new A.aa(0,0,0+e.a,0+e.b)
$.X()
w=A.M()
w.sau(new A.a7(B.ax,B.aC,B.x,f,null,null).aw(0,v))
d.aY(v,w)},
m_(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.gee()/2-h
$.X()
w=A.M()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bU(q,p)
r=w.H()
v.drawArc.apply(v,[A.c4(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
xA(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gee()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
Ay(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aZH(d,e){var w,v=this
v.lV(d,e,D.d64)
w=v.c
v.m_(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m_(d,e,B.bK.j(0.45),-w*3.141592653589793*1.4,22)
v.bK4(d,e,B.hU,w)
v.xA(d,e,B.c.j(0.7),6,8)},
bK4(d,e,f,g){var w,v,u,t,s,r,q,p
$.X()
w=A.M()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c4(new A.aa(16,q,t,q+3)),p)
p.delete()}},
ccu(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lV(d,e,D.ceD)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.X()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cWa[B.o.F(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m_(d,e,B.c.j(0.35),w,16)
j.xA(d,e,B.iQ,5,12)},
ccb(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lV(d,e,D.ceK)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gee()
$.X()
q=A.M()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ai(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.ii(g,g,g,g,g,B.a5,B.ch,g,B.eq,B.cd)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cZP[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saV(0,new A.eo(r,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eP()
p.a5(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.ceM[o]
l=B.k9.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saV(0,new A.eo(m,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eP()
p.a5(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.m_(d,e,B.c.j(0.35),w*1.5,14)
h.m_(d,e,B.ez.j(0.55),-v*3.141592653589793*2,8)
h.m_(d,e,B.Aa.j(0.4),r*2.8,22)
h.xA(d,e,B.pf,8,10)
h.Ay(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.X()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
ccC(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lV(d,e,A_.auD)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bA(new A.aa(20,q,u,q+10),B.hA)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h1,B.oi,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.ep(p),n)
n.delete()}m.m_(d,e,B.h1.j(0.35),w,15)
m.Ay(d,e,8)},
ccx(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lV(d,e,D.cWF)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.X()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.H()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.m_(d,e,B.bK.j(0.4),-w*3.141592653589793*2.2,11)
j.xA(d,e,B.qv,4,14)},
ccL(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lV(d,e,D.cMc)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.X()
n=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xA(d,e,B.op,6,12)
l.m_(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
ccU(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lV(d,e,D.cs3)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bA(new A.aa(q,14,q+u,22),B.ii)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f6,B.bK,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.ep(q),o)
o.delete()}n.m_(d,e,B.c.j(0.3),w,16)
n.Ay(d,e,8)
n.xA(d,e,B.uQ,5,13)},
ccG(d,e){var w,v,u,t,s,r,q,p,o
this.lV(d,e,D.cRP)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bA(new A.aa(q,p,q+8,p+(18+r*22)),B.hd)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.io,B.dy,B.bK,B.es][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.ep(p),o)
o.delete()}this.m_(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
ccN(d,e){var w,v,u,t,s,r,q,p,o
this.lV(d,e,D.cPo)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xA(d,e,B.cp,7,11)},
cd0(d,e){var w,v,u,t,s,r,q,p,o,n
this.lV(d,e,D.cuH)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bA(new A.aa(p,o,p+(t-r*8),o+16),B.hA)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cp,B.aQ,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.ep(o),n)
n.delete()}this.m_(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
ccZ(d,e){var w,v,u,t,s,r,q,p,o
this.lV(d,e,D.db4)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bA(new A.aa(r,q,r+28,q+8),B.hA)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.ep(q),o)
o.delete()}this.Ay(d,e,6)},
cco(d,e){var w,v,u,t,s,r,q,p,o,n
this.lV(d,e,D.cVj)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.X()
s=A.M()
s.r=B.lB.j(0.75).gp(0)
d.ai(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.hh.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.m_(d,e,B.lB.j(0.35),w,14)},
ccM(d,e){var w,v,u,t,s,r,q,p,o=this
o.lV(d,e,D.cXD)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cu(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c4(r),p)
p.delete()}o.xA(d,e,B.qv,5,16)
o.Ay(d,e,7)},
ccX(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lV(d,e,D.d8J)
w=m.c
v=w*3.141592653589793
m.m_(d,e,B.oi.j(0.55),v*3,10)
m.m_(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.oi.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cd_(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lV(d,e,D.dbB)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bA(new A.aa(p,o,p+36,o+22),B.ii)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iQ,B.lB,q).gp(0)
n=p.H()
s.drawRRect(A.ep(o),n)
n.delete()}m.Ay(d,e,9)
m.m_(d,e,B.c.j(0.4),w*2.2,12)},
cch(d,e){var w,v,u,t,s,r,q,p,o,n
this.lV(d,e,D.d1s)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bU(new A.u(v,u),34)
$.X()
s=A.M()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.f4(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.bR.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cc9(d,e){var w,v,u,t,s,r,q,p
this.lV(d,e,D.cYA)
$.X()
w=A.M()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.H()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.H()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.F(t*0.85,1)
$.X()
u=A.M()
u.r=B.dy.j(0.45).gp(0)
d.aY(new A.aa(0,p,0+v,p+6),u)
this.m_(d,e,B.l1.j(0.45),-t*3.141592653589793*2,11)},
aq(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.arb.prototype={
Zp(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aOp(),$async$Zp)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a7z(s),$async$Zp)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Zp,v)},
aeQ(d){return this.cff(d)},
cff(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i2H(d),$async$aeQ)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aeQ,v)},
B(d){var w,v,u,t=null,s=A.O(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jt:B.iO
w=x.p
v=A.a([C.aON(!0,B.qn,1/0,B.pE,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.bZ(new A.bH(B.b0,t,t,new A.C(B.v2,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.avx,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a7(B.b0,B.b6,B.x,u,t,t),B.n),B.bd))}v.push(A.ao(8,A.A(A.a([A.D(A.dp(D.bFP,D.f6B,new C.ce1(this,d),A.bk(B.aU,t,t,t,B.c,t,B.jx,t,t,t,t,B.c7)),1),B.ab,A.D(A.eB(D.bNX,D.fkQ,this.gc6k(),A.de(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jx,t,t,D.aWw,t,t,t,B.c7)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fG(1.7777777777777777,A.aF(!1,B.a1,!0,B.qn,new A.an(B.W,t,B.b_,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ag),t)}}
C.aJU.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdH())
w.b2$=null
w.a2()}}
C.aRG.prototype={}
C.aRF.prototype={}
C.aPK.prototype={}
C.Y7.prototype={
T(){return new C.axf()}}
C.axf.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b3,B.aN)
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(w,v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
JB(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.R(D.eOn)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).N(new C.aRG(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.O(d).ax.a===B.I,l=m?B.dX:B.c,k=A.m(20),j=A.p(n,D.bNC,B.f,n,n,new A.o(B.aU.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.aB,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.v(A.a([i,B.bA,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bf,i,A.aH(n,n,n,n,A.W(B.cy,m?B.bq:B.bn,n,n,n,n),n,n,n,new C.cXo(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cu,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h4Z(new C.cXp(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.aB,n,n,n,n,n,n,n,n,n,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jt:B.iO
r=A.m(12)
q=A.m(12)
p=m?B.dZ:B.bR
t=A.aL(n,B.T,!0,n,!0,B.r,n,A.aM(),u,n,n,n,n,n,2,A.br(n,new A.b4(4,r,B.dg),n,n,n,n,n,n,!0,new A.b4(4,q,new A.aA(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cXq(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,S.Iv,n,n,n,n)
u=m?B.aQ:B.aB
m=m?B.dZ:B.bR
return A.eG(n,l,new A.cU(B.lw,A.cd(A.v(A.a([j,B.aP,i,B.at,w,B.P,v,B.aP,t,B.bw,A.A(A.a([A.D(A.dU(B.de,new C.cXr(d),A.de(n,n,n,n,n,n,n,n,n,u,n,n,B.cf,n,new A.b7(A.m(12),B.Y),new A.aA(m,1,B.q,-1),n,n,n,n)),1),B.av,A.D(A.bJ(D.fl4,o.ga1s(),A.bk(B.aU,n,n,n,B.c,n,B.cf,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.r,n,B.y,n,B.AR,n,n,B.ah),n),n,n,n,X.AS,B.d0,n,new A.b7(k,B.Y),n)}}
C.Y6.prototype={
T(){return new C.axe()}}
C.axe.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aO()
this.d=new A.ar(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
JB(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.R(D.eM4)
return}v=this.c
v.toString
A.a5(v,!1).N(new C.aRF(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.O(d).ax.a===B.I,o=p?B.dX:B.c,n=A.m(20),m=A.p(q,D.bKe,B.f,q,q,new A.o(B.bU.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.v(A.a([l,B.bA,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bf,l,A.aH(q,q,q,q,A.W(B.cy,p?B.bq:B.bn,q,q,q,q),q,q,q,new C.cXk(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aU.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aU.j(0.25),B.q,1)
u=A.W(B.aiM,B.aU.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.av,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.aB,q,q,q,q,q,q,q,q,q,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jt:B.iO
t=A.m(12)
s=A.m(12)
r=p?B.dZ:B.bR
v=A.aL(q,B.T,!0,q,!0,B.r,q,A.aM(),w,q,q,q,q,q,2,A.br(q,new A.b4(4,t,B.dg),q,q,q,q,q,q,!0,new A.b4(4,s,new A.aA(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cXl(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.ku,q,q,q,q)
w=p?B.aQ:B.aB
p=p?B.dZ:B.bR
return A.eG(q,o,new A.cU(B.lw,A.cd(A.v(A.a([m,B.aP,l,B.aA,v,B.bw,A.A(A.a([A.D(A.dU(B.de,new C.cXm(d),A.de(q,q,q,q,q,q,q,q,q,w,q,q,B.cf,q,new A.b7(A.m(12),B.Y),new A.aA(p,1,B.q,-1),q,q,q,q)),1),B.av,A.D(A.bJ(D.frH,this.ga1s(),A.bk(B.bU,q,q,q,B.c,q,B.cf,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.AR,q,q,B.ah),q),q,q,q,X.AS,B.d0,q,new A.b7(n,B.Y),q)}}
C.XF.prototype={
T(){return new C.avZ()}}
C.avZ.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aO()
v.d=new A.ar(B.as,w)
v.e!==$&&A.aO()
v.e=new A.ar(new A.bb("1",B.b3,B.aN),w)
v.f!==$&&A.aO()
v.f=new A.ar(B.as,w)
v.r!==$&&A.aO()
v.r=new A.ar(B.as,w)},
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
v.a2()},
gIX(){var w,v=this.e
v===$&&A.c()
w=A.d4(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gahZ(){var w=this.f
w===$&&A.c()
w=A.d4(B.a.i(w.a.a))
return w==null?0:w},
gb1w(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aMO(d){var w,v=B.k.D(this.gIX()+d,0.25,999999),u=B.k.jR(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.O(v))
else{u=B.k.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aJ(u,w,"")}t.saV(0,u)
this.m(new C.cuY())},
awm(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aU,w,w,w,20):w,u=d.a,t=u?B.jt:B.iO,s=A.m(14),r=A.m(14)
u=u?B.dZ:B.bR
return A.br(w,new A.b4(4,s,B.dg),w,B.bC,w,w,w,w,!0,new A.b4(4,r,new A.aA(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a9p),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c6l(d,e,f){return this.awm(d,e,f,null)},
JB(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gahZ()<=0){s.c.I(x.q).f.R(D.eQe)
return}r=s.c
r.toString
v=s.gIX()
u=s.gahZ()
t=s.gb1w()
A.a5(r,!1).N(new C.aPK(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.tx(n),l=n?B.dX:B.c,k=A.m(24),j=x.O,i=A.a([B.aU.j(0.22),B.bU.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bDN,B.f,o,o,new A.o(o,o,A.I(B.aU.j(0.35),B.q,1),h,o,new A.a7(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.v(A.a([h,B.bA,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cu,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bf,h,A.aH(o,o,o,o,A.W(B.cy,n?B.bq:B.bn,o,o,o,o),o,o,o,new C.cv3(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aL(o,B.T,!0,o,!0,B.r,o,A.aM(),h,o,o,o,o,o,2,p.awm(m,"Item name (optional)","Lumber, paint, labor\u2026",B.N3),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,S.Iv,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jt:B.iO
t=A.m(14)
s=A.I(n?B.dZ:B.bR,B.q,1)
r=A.aH(o,o,o,o,A.W(B.y0,n?B.aQ:B.aB,o,o,o,20),o,o,o,new C.cv4(p),o,o,o,o,o,B.c7)
q=p.e
q===$&&A.c()
q=A.aL(o,B.T,!1,o,!0,B.r,o,A.aM(),q,o,o,o,o,o,2,D.bPt,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cv5(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a6(52,o,q,o),A.aH(o,o,o,o,A.W(B.hx,n?B.aQ:B.aB,o,o,o,20),o,o,o,new C.cv6(p),o,o,o,o,o,B.c7)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.av,A.D(A.aL(o,B.T,!1,o,!0,B.r,o,A.aM(),t,o,o,o,o,o,2,p.awm(m,"Amount","0.00",B.hY),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cv7(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.K(D.cSg,new C.cv8(p,m),t),t.k("aj.E"))
i=A.a([i,B.bw,v,B.aA,h,B.P,s,B.ac,A.c_(B.bB,u,B.bs,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aL(o,B.T,!1,o,!0,B.r,o,A.aM(),h,o,o,o,o,o,2,p.c6l(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cv9(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.ku,o,o,o,o)],w))}i.push(B.aP)
h=B.aU.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aU.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gIX()===B.k.jR(p.gIX())?B.k.O(p.gIX()):p.gIX()
s=p.gb1w()
r=A.Ah(p.gahZ())
i.push(A.p(o,A.A(A.a([A.D(A.v(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bBl(p.gIX()*p.gahZ(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a7(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.jd,o,o,o))
i.push(B.bw)
j=A.m(14)
h=n?B.dZ:B.bR
h=A.de(o,o,o,o,o,o,o,o,o,o,o,o,B.cf,o,new A.b7(j,B.Y),new A.aA(h,1,B.q,-1),o,o,o,o)
i.push(A.A(A.a([A.D(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.aB,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cva(d),h),1),B.av,A.D(A.dp(D.amk,D.fnM,p.ga1s(),A.bk(B.aU,o,o,0,B.c,o,B.cf,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eG(o,l,new A.cU(W.a9M,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.r,o,B.y,o,Ac.qO,o,o,B.ah),o),o,o,o,B.LK,B.d0,o,new A.b7(k,B.Y),o)}}
C.a0b.prototype={
T(){return new C.btU()}}
C.btU.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(new A.bb(w,B.b3,B.aN),v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=r?B.dX:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aQ:B.aB,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aQ:B.aB,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jt:B.iO
v=A.aL(s,B.T,!0,s,!0,B.r,s,A.aM(),w,s,s,s,s,s,2,A.br(s,new A.b4(4,A.m(12),B.dg),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f5k(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.D(A.dU(B.de,new C.f5l(d),s),1)
r=A.bk(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eG(s,q,new A.C(B.AR,A.v(A.a([o,B.aA,v,B.aP,A.A(A.a([u,B.av,A.D(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f5m(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d0,s,new A.b7(p,B.Y),s)}}
C.aav.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.F3.prototype={
T(){return new C.btS(null,null)}}
C.btS.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bmL,null,1,null,v)
w.cH(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bv7()},
gbwy(){switch(this.a.r.a){case 1:return A.a([B.aU,B.bU,B.aZ],x.O)
case 2:return A.a([B.bt,B.aU,B.aZ],x.O)
case 3:return A.a([B.aV,B.c8,B.jM],x.O)
case 4:return A.a([B.hv,B.bU,B.f7],x.O)
case 0:return A.a([B.aU,B.bU,B.aZ],x.O)}},
B(d){var w=A.O(d),v=this.d
v===$&&A.c()
return new A.es(A.c6(v,new C.f5i(this,new C.tx(w.ax.a===B.I)),null),null)}}
C.avS.prototype={
T(){return new C.btT(null,null)}}
C.btT.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.n_,null,1,null,v)
w.cH(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bv8()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f5j(this),null)}}
C.btR.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bA(new A.aa(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aV(w,w))
u=new A.aQ($.X().r,B.ap,null,null,A.a([],x.v))
u.E(new A.iT(v))
w=A.M()
w.b=B.ae
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aD(v,w)
w=A.M()
w.b=B.ae
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aO(u,w)
w=A.wN(u)
t=A.a([],x.f5)
w=new A.vj(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jR('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.GV(w,r)
w.jj()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aQ8(d,q,r,o,0,0.2,4.2,0.92)
p.aQ8(d,q,r,s,0.52,0.11,3.2,0.58)}},
aQ8(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hqu(e.a.a,e,t,t+f*i,!0),r=A.bzI(s.gbJ().a.getBounds())
$.X()
w=A.M()
w.b=B.ae
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.sau(new A.a7(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.GH,null).aw(0,r))
d.aO(s,w)},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aM2.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.aM3.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.tx.prototype={}
C.ara.prototype={
T(){return new C.aDv()},
gdX(){return this.c}}
C.aDv.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.afG()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.KE(w,v)
this.a2()},
afG(){var w=0,v=A.j(x.H),u=this,t,s
var $async$afG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bzQ(t.c,t.d.a),$async$afG)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eFj(u,s))
return A.h(null,v)}})
return A.i($async$afG,v)},
Pk(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eFa(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.KE(t,s),$async$Pk)
case 2:if(u.c!=null)u.m(new C.eFb(u))
return A.h(null,v)}})
return A.i($async$Pk,v)},
PQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.O(p)
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.eFh(t,new C.tx(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$PQ)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a7z(q),$async$PQ)
case 6:case 5:t.m(new C.eFi(t,r))
w=7
return A.b(t.Pk(),$async$PQ)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PQ,v)},
UY(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i2s(r),$async$UY)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eF5(t,new C.qN(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Pk(),$async$UY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$UY,v)},
cbm(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hit(t,new C.eF9(u),w,v)},
a9R(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bP(new A.aA(v,2.5,B.q,-1),B.Y,B.Y,new A.aA(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aWi,w,w,B.n),w,22,w,w,w,w,w,22)},
a8X(d){return this.bIl(d)},
bIl(d){var w=0,v=A.j(x.H),u=this
var $async$a8X=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eF8(u,d))
w=2
return A.b(u.Pk(),$async$a8X)
case 2:return A.h(null,v)}})
return A.i($async$a8X,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.O(a2).ax.a===B.I,e=f?B.bX:B.iL,d=A.m(8),a0=A.W(Q.Zk,f?B.bq:B.bn,g,g,g,16),a1=x.p
a0=A.aK(!1,d,!0,new A.C(B.Fa,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a4,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eFk(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b_,B.r,A.a([A.bv(A.m(22),C.aON(!0,A.m(22),1/0,B.pE,g,d,1/0),B.aq),A.ao(10,A.dp(D.bIj,D.fq_,h.gb_t(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aU.j(f?0.5:0.38),B.eT,22),new A.ac(-4,B.G,B.bU.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bv(s,new A.an(B.W,g,B.b_,B.r,A.a([C.aON(!0,A.m(16),1/0,B.Mv,g,r.c,1/0),A.bZ(g,new A.o(g,g,g,g,g,new A.a7(B.b0,B.b6,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bd),A.ao(g,h.a9R(!0),g,g,8,g,8,g),A.ao(g,A.csu(h.a9R(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.csu(h.a9R(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.csu(h.a9R(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dp(D.bEl,D.fjR,h.gb_t(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bQQ,B.n),g,g,g,g,B.lJ,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aB,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b5B,B.nD,B.h3],u):A.a([B.aZ,B.aU,B.bU],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aU.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.W(B.jz,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h5,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.an,C.bBl(h.d.gwC(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cu,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.hi.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aV.j(0.28),B.cJ,14)],t)
j=B.aV.j(0.22)
i=A.m(10)
u=A.p(g,A.bv(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.C(D.brm,A.A(A.a([o,B.av,A.aF(!1,B.a1,!0,g,A.aK(!1,n,!0,A.ez(new A.C(Ah.AL,A.v(A.a([A.p(g,D.alU,B.f,g,g,new A.o(j,g,A.I(B.aV.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.ck,g,g,g),B.fZ,D.f9h],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcbl(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ag)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a7(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aP,w,B.P,u,B.bw,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aB,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b4,A.dp(Ak.a01,D.f7d,h.gbx0(),A.bk(B.aU,g,g,g,B.c,g,B.iR,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dX:B.c
v=A.m(14)
u=A.I(f?B.dZ:B.bR,B.q,1)
t=A.W(B.ZF,f?B.bq:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.aB,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.an,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.tz,g,g,1/0))}else B.d.v(d,new A.K(w,new C.eFl(h,new C.tx(f)),A.T(w).k("K<1,r>")))
if(h.e)d.push(new A.C(B.AE,A.av(A.mD(g,f?B.bq:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c8(g,e,A.bm(!0,A.v(A.a([new A.C(B.AJ,a0,g),A.D(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xq,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bAC(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dX:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aZ3,u,u,u,u,u,u,u,5),l=B.aU.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.W(s?B.hK:B.h9,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcQb()
v=A.Ah(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.bb,B.Q,0,B.p)}t=A.D(t,1)
k=A.a([B.aU.j(0.14),B.bU.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bBl(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a7(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h6,u,u,u)
w=x.p
return A.p(u,A.bv(n,new A.Dz(A.A(A.a([m,A.D(new A.C(B.afZ,A.A(A.a([l,B.bf,t,B.ab,k,A.aH(u,u,u,u,A.W(B.cy,(r?B.bq:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eF6(this,d),u,u,u,u,u,B.c7)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aXW,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.dc,u,u,u,u)}}
C.acw.prototype={
DX(d){return this.bJH(d)},
bJH(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$DX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oX(d,o,!1),$async$DX)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).N(null)
w=4
return A.b(A.bN(Ab.AC,null,x.H),$async$DX)
case 4:s=t.d
w=5
return A.b(C.fBr(!0,o,s),$async$DX)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.FX(r,"ngmy_project_"+A.aJ(s.b,q,"_"),!1),$async$DX)
case 6:p=f
w=7
return A.b(A.oW(o,!1),$async$DX)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$DX,v)},
Zq(d){return this.crl(d)},
crl(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oX(d,s,!1),$async$Zq)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).N(null)
A.hv(d,new C.ar4(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oW(s,!1),$async$Zq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zq,v)},
Pl(d){return this.cnw(d)},
cnw(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Pl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).N(null)
w=3
return A.b(A.hv(d,D.aEP,!0,"NgmyWorksheetProjectScan",x.N),$async$Pl)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bBm(s),$async$Pl)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.R(D.ePn)
w=1
break}q=C.fW7(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$Pl)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Pl,v)},
Zr(d){return this.czg(d)},
czg(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Zr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).N(null)
w=3
return A.b(C.bAU(),$async$Zr)
case 3:s=f
if(s==null){w=1
break}r=C.fW7(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$Zr)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Zr,v)},
B(d){var w=this,v=null,u=A.O(d).ax.a===B.I,t=new C.tx(u),s=w.d.d.length,r=u?B.dX:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.k0,36)],x.V),o=x.p
return A.bm(!0,new A.C(B.va,A.p(v,A.v(A.a([w.cpX(d,t,s),new A.C(D.bqL,A.v(A.a([w.b2q(t,"QR restore"),B.S,A.A(A.a([w.aYr(t,!0,B.jj,B.aV,B.aV,new C.eFn(w,d),"Show to scan","QR code"),B.av,w.awn(t,B.iU,B.b5,B.by,new C.eFo(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b2q(t,"Backup files"),B.S,A.A(A.a([w.awn(t,B.hz,B.aU,B.bU,new C.eFp(w,d),"Full copy","Backup file"),B.av,w.awn(t,M.y7,B.aH,B.aM,new C.eFq(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cpX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eX,B.cZ,B.fu],k):A.a([B.aZ,B.aU,B.bU],k)
w=A.ao(l,A.W(B.tS,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kH,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aON(!0,A.m(13),64,D.bzE,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aPe,l,l,l)
r=C.bBl(r.gwC(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.C(D.br8,A.v(A.a([v,A.A(A.a([s,B.eB,A.D(A.v(A.a([u,B.at,t,B.P,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fJ,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.W(B.cy,B.c.j(0.85),l,l,l,l),l,l,l,new C.eFm(d),l,l,l,A.nr(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aMy,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b2q(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aU,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aYr(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.aeE:B.aQ
if(e)w=B.aV.j(o?0.45:0.35)
else{w=o?B.dZ:B.bR
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aV.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qP,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.ez(new A.C(E.XK,A.v(A.a([t,B.ac,u,B.bA,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cu,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
awn(d,e,f,g,h,i,j){return this.aYr(d,!1,e,f,g,h,i,j)}}
C.ar4.prototype={
T(){return new C.bjg()}}
C.bjg.prototype={
a_(){this.a1()
this.adA()},
adA(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$adA=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bBn(p.c,p.d),$async$adA)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eF0(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eF1(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adA,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.O(d).ax.a===B.I,f=g?B.A9:B.iL,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.W(B.eA,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eF2(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zb],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eX,B.cZ,B.fu],s):A.a([B.aZ,B.aU,B.bU],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aU.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.du,B.L,h,h)
p=C.bBl(p.gwC(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.an,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fJ,h,h,h)],u),B.m,h,B.bb,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a7(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Y3,h,h,1/0)
t=g?D.beC:B.c
q=A.m(24)
p=A.I(w?B.aV.j(0.4):B.aU.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dk,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a6B,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e2R)
else{m=A.m(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pC(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bW,h,h,h))}}o.push(B.aP)
n=w?B.aV:B.aU
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aV:B.aU).j(0.35),B.q,1)
k=w?B.MN:B.Ni
k=A.W(k,w?B.aV:B.aU,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.av,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a4,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iR,h,h,h))
return A.c8(h,f,A.bm(!0,A.v(A.a([new A.C(A6.LX,e,h),A.D(A.cd(A.v(A.a([s,B.aP,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.ty,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.ah7,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.ar9.prototype={
T(){return new C.aDu(A.yO(B.Lc,B.nx,B.tX))}}
C.aDu.prototype={
q(){this.d.q()
this.a2()},
aKQ(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iL(w,d)},
c7b(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i0s(t)
if(s!=null){this.aKQ(s)
return}r=C.h9x(t)
if(r!=null)q=A.dr(r,p,0)
else q=!1
if(q){this.aKQ(B.a.i(B.a.b0(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eF(A.a([A.aH(t,t,t,t,A.W(u.f?B.qW:A2.MT,t,t,t,t,t),t,t,t,new C.eF4(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.A9,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fjK,t,t,t,1,t,!0),q=A.yN(u.d,B.bQ,u.gc7a()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aU,B.q,3),p,A.a([new A.ac(2,B.G,B.aU.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c8(r,B.w,new A.an(B.W,t,B.b_,B.r,A.a([q,p,A.ao(32,A.p(t,D.fiy,B.f,t,t,new A.o(w,t,A.I(B.aU.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jd,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aIf.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.Nr.prototype={
T(){return new C.aDw(D.a8H,A.a([],x.D))},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aDw.prototype={
gcxf(){return J.bCw(this.e,0,new C.eFN())},
a_(){this.a1()
$.aT.c2$.push(this)
this.vn()},
q(){$.aT.hE(this)
this.a2()},
iS(d){if(d===B.fs)this.vn()},
vn(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Cr(q.a.c).cM(0,B.jS),$async$vn)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eFJ(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eFK(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vn,v)},
Hp(d){return this.bGw(d)},
bGv(){return this.Hp(null)},
bGw(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i2u(l,d),$async$Hp)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.ld(l,r,q,D.d1F,new A.S(Date.now(),0,!1))
w=4
return A.b(C.KE(t.a.c,p),$async$Hp)
case 4:o=f
w=5
return A.b(t.vn(),$async$Hp)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.R(D.eMy)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gU(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.R(D.eOh)
else n.I(q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.E0(m)
case 1:return A.h(u,v)}})
return A.i($async$Hp,v)},
E0(d){return this.cb7(d)},
cb7(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$E0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hv(s,new C.ara(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$E0)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.KE(u.a.c,t),$async$E0)
case 5:case 4:w=6
return A.b(u.vn(),$async$E0)
case 6:return A.h(null,v)}})
return A.i($async$E0,v)},
va(d){return this.bW5(d)},
bW5(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$va=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bAU(),$async$va)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hv(r,D.aEP,!0,"NgmyWorksheetProjectScan",x.N),$async$va)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bBm(q),$async$va)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.I(x.q).f
r.R(A.b2(null,null,null,null,null,B.r,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.fW7(s)
w=15
return A.b(C.KE(t.a.c,p),$async$va)
case 15:o=f
w=16
return A.b(t.vn(),$async$va)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.R(D.eOm)
w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.E0(p)
case 1:return A.h(u,v)}})
return A.i($async$va,v)},
Na(d){return this.bFb(d)},
bFb(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Na=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eFu(d),s,null,!0,!0,x.y),$async$Na)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.ox(t.a.c,A.a([],x.D)),$async$Na)
case 6:w=7
return A.b(t.vn(),$async$Na)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eMD)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Na,v)},
cbk(d){var w=this.c
w.toString
A.bV(B.K,null,new C.eFD(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b31(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jt
else w=B.c
v=A.m(16)
u=A.I(p?B.dZ:B.bR,B.q,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.aB,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bA,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.v9,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
ZW(d,e){return this.cb8(d,e)},
cb8(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(B.K,null,new C.eFy(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$ZW)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hit(r,new C.eFz(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Nc(d,e),$async$ZW)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$ZW,v)},
b04(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bS,u,u,u)
if(d)t=B.ay
else t=h.a?B.aQ:B.aB
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bq:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,u,!0,new A.C(B.AQ,A.A(A.a([s,B.bf,t,A.W(B.ex,w?B.bq:B.bn,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
chY(d,e,f,g,h,i){return this.b04(!1,d,e,f,g,h,i)},
Nc(d,e){return this.bFl(d,e)},
bFl(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kY(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Nc)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bzC(t.a.c,d.a),$async$Nc)
case 6:w=7
return A.b(t.vn(),$async$Nc)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nc,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===B.I,n=new C.tx(o),m=o?B.bX:B.iL
if(q.f)o=D.b3C
else{w=q.bzP(n)
v=q.bVb(n)
u=q.gbwV()
if(o)t=B.jt
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aP,new C.F3(A.p(p,A.A(A.a([q.azP(N.Mu,"Projects",n,D.a8H),q.azP(B.vl,"Cashier",n,D.aTL),q.azP(B.Fu,"Family Tree",n,D.fRQ)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.en,0.95,u,p),B.bw],r)
w=q.d
if(w===D.a8H){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.aB,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b4,new C.avS(q.gaOZ(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aA,q.ci_(n)],r))}else{o=q.a
if(w===D.aTL)u.push(new C.anc(o.c,n,p))
else{w=q.r
u.push(new C.aoi(o.c,o.d,o.e,o.f,new C.eFQ(q),new C.eFR(q),new A.cw(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ad.LQ,p,p,B.ah)}return A.c8(p,m,A.bm(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bzP(d){var w=null,v=A.m(8),u=d.a,t=A.W(Q.Zk,u?B.bq:B.bn,w,w,w,16)
return A.aK(!1,v,!0,new A.C(B.kI,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFr(this),w,w,w,w,w,w,w)},
gbwV(){switch(this.d.a){case 0:return D.a7Z
case 1:return D.fIB
case 2:return D.a8_}},
bVb(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aU.j(0.35),B.cv,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bK4,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bf,D.bvp,A.aF(!1,B.a1,!0,w,A.aK(!1,A.m(12),!0,A.p(w,D.bHD,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFv(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.F3(A.p(w,A.v(A.a([new A.C(O.LI,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.Ah(this.gcxf()),w,w,w,w,w,w,D.f3G,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.v8,B.jd,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aU,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.fIA,w)},
azP(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aU:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aU.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bn
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bn
return A.D(A.aF(!1,B.a1,!0,u,A.aK(!1,s,!0,A.dg(u,A.A(A.a([w,B.eb,new A.dm(1,B.ci,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.bb,B.j,0,u,u),u,u,B.cr,new A.o(r,u,p,q,o,u,B.n),B.iv,u,u,u,B.LT,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eFM(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),1)},
ci_(d){var w,v,u,t,s,r,q=this,p=null
if(J.ck(q.e)){w=d.a
v=w?B.dX:B.c
u=A.m(15)
t=A.p(p,D.bHI,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aU.j(0.5),B.eT,28)],x.V),D.bTf,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.aB,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.F3(A.p(p,A.v(A.a([t,B.d5,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e1,A.A(A.a([A.D(q.aQt(B.iU,"Scan QR",new C.eFG(q),d),1),B.av,A.D(q.aQt(M.y7,"Upload file",new C.eFH(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aA,A.bJ(D.ftx,q.gaOZ(),A.bk(B.aU,p,p,p,B.c,B.fM,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bsc,1.05,D.a7Z,p)}w=J.b6(q.e,new C.eFI(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.F3(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bS,1,D.a7Z,p)},
aQt(d,e,f,g){var w=null,v=B.aU.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aU.j(0.45),B.q,1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(w,A.v(A.a([A.W(d,B.aZ,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.f27,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.afR,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)},
chZ(d,e){var w,v,u=null,t=e.a,s=t?B.dX:B.c,r=A.m(14),q=A.I(t?B.dZ:B.bR,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ej,10)],x.V),o=A.m(14),n=t?B.bq:B.bn
n=A.bv(B.Uz,new A.fG(1.7777777777777777,C.aON(!0,B.ft,1/0,N.Mu,n,d.c,1/0),u),B.aq)
w=x.p
v=A.D(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.aB,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.Ah(d.gwC()),u,u,u,u,u,u,D.f0h,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aK(!1,o,!0,A.v(A.a([n,new A.C(B.bC,A.A(A.a([v,A.aH(u,u,u,u,A.W(Ae.N6,t?B.bq:B.bn,u,u,u,u),u,u,u,new C.eFE(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eFF(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.bvF.prototype={}
C.qN.prototype={
ae(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcQb(){var w,v,u,t,s=this.c
if(s===B.k.jR(s))w=B.o.u(B.k.O(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aJ(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.ld.prototype={
gwC(){return B.d.cI(this.d,0,new C.cuo())},
ae(){var w=this,v=w.d,u=A.T(v).k("K<1,a3<n,@>>")
v=A.B(new A.K(v,new C.cun(),u),u.k("aj.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
ba0(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.ld(w.a,w.b,v,u,w.e)},
b9I(d){return this.ba0(d,null)},
S2(d){return this.ba0(null,d)}}
C.H3.prototype={
a4(){return"FamilyGender."+this.b}}
C.hV.prototype={
ae(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hej(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aCt(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hV(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ajy.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.kx.prototype={
ganp(){var w=this.f
return new A.a2(w,new C.bM_(),A.T(w).k("a2<1>")).gM(0)},
ae(){var w=this,v=w.f,u=A.T(v).k("K<1,a3<n,@>>")
v=A.B(new A.K(v,new C.bLZ(),u),u.k("aj.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hTV(w.y)],x.N,x.z)},
yg(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kx(w.a,v,u,t,s,r,w.r,q,p,o)},
ba_(d,e){var w=null
return this.yg(w,w,d,e,w,w,w,w)},
cFY(d,e,f,g,h,i,j){return this.yg(d,e,f,g,h,i,j,null)},
aCy(d,e){var w=null
return this.yg(w,w,w,d,w,w,e,w)},
cEs(d){var w=null
return this.yg(w,w,w,w,w,w,d,w)},
cEQ(d){var w=null
return this.yg(w,w,w,w,w,w,w,d)},
aCk(d){var w=null
return this.yg(w,w,w,w,d,w,w,w)},
cFu(d,e,f){var w=null
return this.yg(w,d,w,e,w,w,f,w)},
cEf(d){var w=null
return this.yg(w,w,d,w,w,w,w,w)},
cF2(d,e){var w=null
return this.yg(d,w,w,w,w,e,w,w)}}
C.cuq.prototype={
a4(){return"WrapAlignment."+this.b}}
C.cur.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aFy.prototype={}
C.b6Z.prototype={
bx(d){this.a=d.a
this.b=d.b},
dr(d){var w=new C.b6Z()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b6Y.prototype={
gvX(){return!0},
gFt(){return this.z.b<this.b.length},
aS4(d){switch(0){case 0:return d.a.c}},
aRM(d){switch(0){case 0:return d.a.d}},
bOH(d,e){switch(0){case 0:return new A.hH(d,e)}},
bO5(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h_(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iB(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.GO(b4)
switch(0){case 0:v=b5.b
u=new A.ku(0,v,0,1/0)
t=w===B.Sz
break}s=A.a([],x.gZ)
r=A.V(x.cM,x.S)
for(b3=b1.z,q=B.d.fJ(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.h_(b4,u,!0)
f=b1.aS4(g)
f.toString
e=b1.aRM(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFy(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFy(k,j,i))}d=s.length
switch(0){case 0:q=b5.cu(new A.hH(m,l))
a0=q.a
a1=q.b
b1.a=new A.iB(0,0,a0,a1)
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
for(q=B.d.fJ(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.L)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aS4(g)
e=b1.aRM(g)
e.toString
a9=b1.bO5(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bOH(a6,a3+a9)
b0=g.a
g.a=new A.iB(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fX(d){var w,v,u,t,s,r=this
r.lb(d)
w=d.b
w.i0()
v=A.dl()
u=r.a
v.e2(u.a,u.b,0,1)
w.oE(0,v)
for(u=r.z,u=B.d.dn(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].fX(d)
w.n6(0)},
FZ(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i0(){return this.z}}
C.btV.prototype={}
var z=a.updateTypes(["ay<~>()","R(hV)","R(kx)","~()","R(n4)","a3<n,@>(kx)","H(kx,kx)","n(hV)","kx(a3<@,@>)","R(ld)","R(u1)","n4(a3<@,@>)","u1()","H(ld,ld)","hV(a3<@,@>)","a3<n,@>(hV)","R(qN)","ay<~>(ld)","eQ<n?>(hV)","H(hV,hV)","n?(hV)","a3<n,@>(n4)","Z8(Y)","n(n)","acb(Y)","r(o8)","H(n4,n4)","hV(hV)","cK(bu<n,Ff>)","cK(Js)","~(hV)","H?(hV)","hV()","ai<hV>()","R(u0)","R(Js)","C(hV)","~(H3)","R(adI)","r(H3,n,a0)","Yx(Y)","bu<n,ai<a3<n,@>>>(n,ai<n4>)","~(H)","+count,id,name(H,n,n)(kx)","kx(kx)","Zt(Y)","Zu(Y)","R(lu)","lu()","n(kx)","a0b(Y)","Y7(Y)","Y6(Y)","Yv(Y)","Yz(Y)","r(qN)","acw(Y)","~(lS)","ay<~>([n?])","N(N,ld)","r(ld)","N(N,qN)","a3<n,@>(qN)","qN(a3<@,@>)","Y5(Y)","RX(Y)","co(H2)","ld(a3<@,@>)","u0()","n(ld)","a3<n,@>(ld)","n(S)","H(hV)","kx(a3<n,@>)","XF(Y)"])
C.fu5.prototype={
$1(d){return d.a+" "+d.b},
$S:125}
C.fu4.prototype={
bj3(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qF(s,d,B.hl,E.ER),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.U(r!=null&&A.Kr(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bj3(d)},
$S:336}
C.fu6.prototype={
$1(d){return d.b},
$S:125}
C.fDb.prototype={
$1(d){var w=null
return A.eG(w,B.K,new F.OL(this.a,this.b,w),w,w,0,B.XL,B.d0,w,w,w)},
$S:46}
C.fjm.prototype={
$1(d){return d!=null},
$S:208}
C.fjn.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:208}
C.fjs.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:161}
C.frP.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f8(d,w,w,w,A.h2(w,B.rl,w,w,w,w,w,w,w,B.dr,w,w,10.5,w,B.ei,w,!0,w,w,w,w),w),u=f?B.ei:B.vg
return new A.nC(D.bnP,A.a8O(A.a([new A.fO(130,w,v),new A.yw(1,B.Fn,A.f8(e,w,w,w,A.h2(w,g==null?D.e58:g,w,w,w,w,w,w,w,B.dr,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.x6,B.li))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1898}
C.frO.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vb(999)
f=A.wG(A.lp(h,A.f8("Cashier",h,h,h,A.h2(h,D.yZ,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ei,h,!0,h,h,h,h),h),h,new A.kv(D.e5_,h,f,B.hC,h),h,h,D.boi,h))
w=A.wG(A.f8("Debt receipt",h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.dr,h,h,22,h,B.ei,h,!0,h,h,h,h),h))
v=A.wG(A.f8(C.wq(new A.S(Date.now(),0,!1),!0),h,h,h,D.a6H,h))
u=A.vb(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f8(s,h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ei,h,!0,h,h,h,h),h)
r=A.f8("Person who owes",h,h,h,D.a6H,h)
q=A.vb(10)
p=x.C
u=A.lp(h,A.yr(A.a([s,new A.fO(h,2,h),r,new A.fO(h,10,h),A.lp(h,A.yr(A.a([A.f8("Amount owed",h,h,h,D.a6H,h),new A.fO(h,2,h),A.f8(A.Ah(t.c),h,h,h,A.h2(h,D.yZ,h,h,h,h,h,h,h,B.dr,h,h,20,h,B.ei,h,!0,h,h,h,h),h)],p),B.qI,B.li),h,new A.kv(B.oS,h,q,B.hC,h),h,h,D.bnv,1/0)],p),B.qI,B.li),h,new A.kv(E.aG3,h,u,B.hC,h),h,h,D.bpk,1/0)
q=new A.nl(D.e52,0.9,B.kA)
r=A.vb(12)
s=i.c
o=s.$2("Original due",C.wq(t.r,!1))
n=s.$2("Current due",C.wq(t.f,!1))
m=i.d
l=new A.nl(m,1.1,B.kA)
k=A.vb(8)
j=i.a
k=A.a([o,n,new A.fO(h,6,h),A.lp(h,A.wG(A.f8(t.gaJl(),h,h,h,A.h2(h,m,h,h,h,h,h,h,h,B.dr,h,h,11,h,B.ei,h,!0,0.5,h,h,h),h)),h,new A.kv(h,new A.pn(l,l,l,l),k,B.hC,h),h,h,D.boq,1/0),new A.fO(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.yZ))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.yZ))
else{n=A.f8("Missed days ("+n+")",h,h,h,A.h2(h,B.rl,h,h,h,h,h,h,h,B.dr,h,h,10.5,h,B.ei,h,!0,h,h,h,h),h)
m=A.T(o).k("K<1,Rw>")
o=A.B(new A.K(o,new C.frN(),m),m.k("aj.E"))
B.d.v(k,A.a([new A.fO(h,4,h),n,new A.fO(h,6,h),new C.b6Y(5,5,new C.b6Z(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fO(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fO(h,8,h),w,new A.fO(h,3,h),v,new A.fO(h,16,h),u,new A.fO(h,10,h),A.lp(h,A.yr(k,B.x6,B.li),h,new A.kv(h,new A.pn(q,q,q,q),r,B.hC,h),h,h,B.ag2,1/0)],p)
w=j.a
if(w!=null){v=new A.nl(B.HQ,1,B.kA)
B.d.v(f,A.a([new A.fO(h,16,h),A.f8("Debtor signature",h,h,h,A.h2(h,B.rl,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ei,h,!0,h,h,h,h),h),new A.fO(h,6,h),A.lp(h,new A.Hj(w,B.UJ,h,h),h,new A.kv(h,new A.pn(v,v,v,v),A.vb(6),B.hC,h),82,h,B.LV,1/0)],p))}f.push(new A.fO(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f8(w,h,h,h,D.eUg,h))
f.push(new A.fO(h,18,h))
f.push(A.wG(A.f8("NGMY.ORG",h,h,h,A.h2(h,D.yZ,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ei,h,!0,1.8,h,h,h),h)))
return f},
$S:441}
C.frN.prototype={
$1(d){var w=null,v=new A.nl(D.HR,0.7,B.kA),u=A.vb(999)
return A.lp(w,A.f8(C.wq(d,!1),w,w,w,A.h2(w,D.HR,w,w,w,w,w,w,w,B.dr,w,w,9.5,w,B.ei,w,!0,w,w,w,w),w),w,new A.kv(w,new A.pn(v,v,v,v),u,B.hC,w),w,w,D.btz,w)},
$S:1899}
C.c_Q.prototype={
$1(d){var w=null,v=B.bI.j(0.08),u=A.m(999),t=A.I(B.bI.j(0.28),B.q,1)
return A.p(w,A.d(C.wq(d,!1),w,w,w,w,w,w,D.f_N,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eF,w,w,w)},
$S:1900}
C.fDH.prototype={
$1(d){var w=null,v=A.aI(d,B.bT,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bKX,w,w,w,new C.fDE(d),w,w,w,w,w,B.c7),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eG(w,B.K,new A.cU(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.C(B.XB,A.v(A.a([new A.bH(B.a7,w,w,t,w),new A.dm(1,B.ci,A.cd(A.v(A.a([new A.es(new C.aX5(r,w),s),B.S,A.A(A.a([A.D(A.eB(B.yi,D.fpW,new C.fDF(s,r,d),A.de(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eZ,w,new A.b7(A.m(14),B.Y),new A.aA(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.D(A.dp(B.a_S,D.fmA,new C.fDG(r,d),A.bk(B.aZ,w,w,w,B.c,w,B.eZ,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.r,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aB,0,w,w,w,w,w,B.ag),w),w,w,0,Ai.XX,B.d0,w,w,w)},
$S:46}
C.fDE.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fDF.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aT.ak$.x.h(0,t.a)
m=m==null?null:m.gb7()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lR(2.5),$async$$0)
case 4:w=3
return A.b(e.hp(B.fW),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.fa(B.dH.gaP(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aJ(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.rH(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fDG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fyp(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.R(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fDz.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eG(w,B.aB,A.v(A.a([new A.C(D.bp8,A.A(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.np,w,w,w),1),A.aH(w,w,w,w,B.lg,w,w,w,new C.fDx(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dm(1,B.ci,new A.C(B.fT,A.bv(A.m(14),A.fL(t,B.A,w,w,B.co,B.dt,!1,w,!1,w,w),B.aq),w),w),new A.C(B.Ly,new A.a6(1/0,w,A.dp(B.oH,D.aPE,new C.fDy(t,this.c,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.LL,B.d0,w,new A.b7(v,B.Y),w)},
$S:46}
C.fDx.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fDy.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rH(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fDL.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eG(w,B.aB,new A.C(D.bpg,A.v(A.a([A.A(A.a([D.buA,A.aH(w,w,w,w,B.lg,w,w,w,new C.fDJ(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.es(A.bv(A.m(14),A.p(w,A.b3(w,w,w,new C.b97(s.ax,w),B.au),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a6(1/0,w,A.dp(B.oH,D.aPE,new C.fDK(t,s,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(v,B.Y),w)},
$S:46}
C.fDJ.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fDK.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aT.ak$.x.h(0,t.a)
n=n==null?null:n.gb7()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lR(2.5),$async$$0)
case 4:w=3
return A.b(e.hp(B.fW),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aJ(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.fa(B.dH.gaP(s))
w=5
return A.b(A.rH(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fmR.prototype={
$1(d){return d.a===this.a},
$S:263}
C.dDl.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dD6.prototype={
bih(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dX:B.c
s=u.a
w=2
return A.b(A.bV(t,null,new C.dD9(s,q,e),p,!0,!0,!1,B.I5,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dDa(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bih(d,e)},
$S:1901}
C.dD9.prototype={
$1(d){var w,v=null,u=this.c===B.vO,t=u?D.d7x:D.d3R
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.aB,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.C(K.agC,A.v(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ic(!0,v,v,B.y,L.aMQ,new C.dD8(this.a,w,t,d),t.length,v,B.dQ,B.ah,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:28}
C.dD8.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cZ.j(0.14)
else w=t.b.a.d.a?B.M:B.aQ
v=A.m(14)
if(q)u=B.cZ
else u=(t.b.a.d.a?B.bq:B.bn).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aK(!1,p,!0,A.p(B.A,C.aX4(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dD7(t.d,r),s,s,s,s,s,s,s)},
$S:179}
C.dD7.prototype={
$0(){A.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.dDa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dD4.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:90}
C.dD5.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cI(B.cr,e,v)
return new A.cX(e,!1,A.ih(B.A,A.av(A.aF(!1,B.a1,!0,v,new A.e_(new C.dD3(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ag),v,v,v),v,new A.bf(t,new A.bn(0.96,1,u),u.k("bf<bI.T>"))),v)},
$S:31}
C.dD3.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bT,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dX:B.c,f=A.m(14),e=A.I((h?B.bq:B.bn).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aK(!1,v,!0,new A.C(B.en,A.W(B.cy,i.a.d.a?B.bq:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dCP(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aR_("Name")
r=l.a
q=r.d==null?k:new C.dCQ(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bm:B.lD
n=A.I(B.cZ.j(0.35),B.q,1)
m=r.d
t=A.aL(k,B.T,h,k,!0,B.r,k,A.aM(),w,k,k,k,k,k,2,s.b9T(new A.C(B.fx,A.aK(!1,p,!0,A.p(B.A,C.aX4(m==null?"\ud83d\udc64":A.fsD(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ck,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ku,k,B.a6s,k,k)
v=A.a([v,B.ac,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.an,A.A(A.a([A.D(i.aRC("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dCR(r,a0),r.d===B.vO),1),B.ab,A.D(i.aRC("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dCW(r,a0),r.d===B.a3q),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bH(B.a3,k,k,A.hc(D.bJl,D.fol,new C.dCX(r,l.e,a0),A.fv(k,k,k,k,k,k,k,k,k,k,k,B.cZ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c7)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.u4(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aL(k,B.T,!1,k,!0,B.r,k,A.aM(),l.f,k,k,k,k,k,2,i.aR0("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dU,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aQ
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bq:B.bn).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wq(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(k,A.A(A.a([A.D(A.v(A.a([t,B.bA,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bGd],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dCY(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ag))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aL(k,B.T,!1,k,!0,B.r,k,A.aM(),l.r,k,k,k,k,k,2,i.aR_("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.aB,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aZq(r.b.length!==0,B.mi,new C.dCZ(r,i,a0),new C.dD_(r,a0),"Upload from gallery","ID photo"))
v.push(i.aZq(r.c.length!==0,D.bzC,new C.dD0(r,i,d,a0),new C.dD1(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ag.a6G("Signature (optional)",t,new C.dD2(a0),new C.dCS(a0,t),new C.dCT(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bq:B.bn
s=(i?B.bq:B.bn).j(0.28)
s=A.D(A.dU(E.aPx,new C.dCU(d),A.de(k,k,k,k,k,k,k,k,k,t,k,k,B.v3,k,new A.b7(A.m(10),B.Y),new A.aA(s,1,B.q,-1),k,k,k,k)),1)
t=A.bk(B.cZ,k,k,k,B.c,k,B.v3,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.A(A.a([s,B.ab,A.D(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.ut,k,k,k),new C.dCV(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vc,B.jd,k,k,360)},
$S:193}
C.dCP.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dCQ.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dCR.prototype={
$0(){return this.b.$1(new C.dCO(this.a))},
$S:0}
C.dCO.prototype={
$0(){var w=this.a
w.d=B.vO
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dCW.prototype={
$0(){return this.b.$1(new C.dCN(this.a))},
$S:0}
C.dCN.prototype={
$0(){var w=this.a
w.d=B.a3q
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dCX.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dCY.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wu(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dCM(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dCM.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gci(),w.gce(),w.gct(),0,0,0,0,0)},
$S:0}
C.dCZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.OI(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dCL(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dCL.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dD_.prototype={
$0(){return this.b.$1(new C.dCK(this.a))},
$S:0}
C.dCK.prototype={
$0(){return this.a.b=""},
$S:0}
C.dD0.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dX:B.c
w=3
return A.b(A.bV(q,null,new C.dCI(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.OI(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dCJ(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dCI.prototype={
$1(d){var w=null
return A.bm(!0,A.v(A.a([A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.alL,w,w,w,w,new C.dCC(d),!1,w,w,w,w,w,w,w,D.ff0,w,w,w),A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.alJ,w,w,w,w,new C.dCD(d),!1,w,w,w,w,w,w,w,D.flE,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.af,!0,!0)},
$S:28}
C.dCC.prototype={
$0(){A.a5(this.a,!1).N("camera")
return null},
$S:0}
C.dCD.prototype={
$0(){A.a5(this.a,!1).N("gallery")
return null},
$S:0}
C.dCJ.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dD1.prototype={
$0(){return this.b.$1(new C.dCH(this.a))},
$S:0}
C.dCH.prototype={
$0(){return this.a.c=""},
$S:0}
C.dD2.prototype={
$0(){return this.a.$1(new C.dCG())},
$S:0}
C.dCG.prototype={
$0(){},
$S:0}
C.dCS.prototype={
$0(){return this.a.$1(new C.dCF(this.b))},
$S:0}
C.dCF.prototype={
$0(){return B.d.a9(this.a)},
$S:0}
C.dCT.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.agD(u.a,null,null,new C.dCE(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dCE.prototype={
$4(d,e,f,g){this.a.$1(new C.dCB(this.b,d))},
$S:472}
C.dCB.prototype={
$0(){var w=this.a
B.d.a9(w)
B.d.v(w,this.b)},
$S:0}
C.dCU.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dCV.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.R(D.eQd)
return}if(w.a.d==null){w.c.I(x.q).f.R(D.eN9)
return}A.a5(w.c,!1).N(!0)},
$S:0}
C.dDo.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:90}
C.dDp.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.bq:B.bn).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aQ:B.aB,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Ah(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yH(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yH(r).length>0?B.bI:B.cZ,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bn
t=(q?B.bq:B.bn).j(0.28)
s=x.p
return new A.cX(e,!1,A.av(A.aF(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.P,v,u,B.aA,A.A(A.a([A.D(A.dU(B.nq,new C.dDm(d),A.de(r,r,r,r,r,r,r,r,r,w,r,r,B.jx,r,new A.b7(A.m(10),B.Y),new A.aA(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.D(A.bJ(D.fm2,new C.dDn(d),A.bk(B.cZ,r,r,r,B.c,r,B.jx,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.AT,O.LI,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ag),r,r,r),r)},
$S:31}
C.dDm.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dDn.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dDi.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dDj(r),p=r.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.bq:B.bn).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.aB,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Ah(l.c),s,s,s,s,s,s,D.f1f,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.ix((r.a.d.a?B.bq:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.ZF,"View receipt",new C.dDb(r,d,l))
u=l.x!=null
t=u?B.r0:B.pG
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bpd,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dDc(r,d,l)),q.$3$icon$label$onTap(B.B9,"Edit",new C.dDd(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mi,"View / download ID",new C.dDe(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bzB,"View / download selfie",new C.dDf(r,d,l)))
if(l.gaEa())p.push(q.$3$icon$label$onTap(A5.a_J,"View / download signature",new C.dDg(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bI,B.e4,"Delete",new C.dDh(r,d,l)))
p.push(B.at)
return A.bm(!0,new A.C(B.v8,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:28}
C.dDj.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.aB
else w=d
return A.aK(!1,v,!0,new A.C(B.eP,A.A(A.a([A.W(e,w,v,v,v,20),B.bf,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1902}
C.dDb.prototype={
$0(){A.a5(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fDD(w,this.c)},
$S:0}
C.dDc.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.Ro(this.c)},
$S:0}
C.dDd.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.CF(this.c)},
$S:0}
C.dDe.prototype={
$0(){var w,v,u
A.a5(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBK(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dDf.prototype={
$0(){var w,v,u
A.a5(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBK(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dDg.prototype={
$0(){A.a5(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fDI(w,this.c)},
$S:0}
C.dDh.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.Nn(0,this.c)},
$S:0}
C.dDq.prototype={
$1(d){return d.x==null},
$S:263}
C.dDr.prototype={
$1(d){return d.x!=null},
$S:263}
C.dDs.prototype={
$2(d,e){return d+e.c},
$S:1903}
C.dDt.prototype={
$0(){return this.a.bxp()},
$S:0}
C.dDk.prototype={
$0(){return this.a.adN(this.b)},
$S:0}
C.fnl.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fnm.prototype={
$0(){return B.d.gK(D.a0W)},
$S:z+68}
C.d3d.prototype={
$0(){var w=this.a
return w.m(new C.d3b(w,this.b))},
$S:0}
C.d3b.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d3c.prototype={
$0(){},
$S:0}
C.d3e.prototype={
$0(){var w=this.a.gbVU()
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.fpn.prototype={
$1(d){return C.h_b(A.a1(d,x.N,x.z))},
$S:z+11}
C.fpo.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fpp.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fCh.prototype={
$1(d){return d.ae()},
$S:z+21}
C.fKl.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fmI.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bLV.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eZ(e,v)?v:null},
$S:1904}
C.fCQ.prototype={
$1(d){var w=this
return new C.Yx(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d3T.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d3S(w,d))},
$S:z+66}
C.d3S.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3H.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cx(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d3E.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d3f.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d3g.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d3I.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d3o.prototype={
$1(d){var w=null,v=A.O(d).ax.a===B.I,u=v?B.dX:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ei(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.d3m(d),w,w),A.bJ(B.w8,new C.d3n(d),A.bk(B.mN,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d3m.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.d3n.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.d3p.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d3F.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d3G.prototype={
$0(){return B.d.gK(D.ys)},
$S:z+12}
C.d3k.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxW(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.RX(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d3l.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3q.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Y5(v,u,J.ad(w.d),null)},
$S:z+64}
C.d3r.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3R.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.XO(r.y,r.gxW(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d3P(r),s,s,s,s,s,s,!1,B.a8)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b8w(v,e,w,u,t,r.gbNd(),C.hei(r.y.Q),r.gxW(0),s)
w=t}return A.c6(q,new C.d3Q(r,e),new A.C(B.XQ,w,s))},
$S:1905}
C.d3Q.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcZ(t).ay){t=this.b
u=x.cy.a(B.d.gcZ(u.f.f)).gut(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dl()
t=u.a
t.$flags&2&&A.ak(t)
t[11]=0.0013
u.fv(v*3.141592653589793*0.5)
return A.fs(B.a3,A.db(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d3P.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFe(B.pv,B.iw)},
$S:0}
C.d3B.prototype={
$0(){var w=this.a
return w.m(new C.d3A(w))},
$S:0}
C.d3A.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d3C.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).N(null)
return null},
$S:0}
C.d3h.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jL.j(0.5),r=x.p,q=A.a([D.fdF,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ck(p.d)?"Write this book":"Write a new book"
q.push(p.Y5(d,B.dW,w,J.ck(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Y5(d,L.ajA,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cx(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cH,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kb.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cH,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kb.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Y5(d,A0.akL,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Y5(d,B.pN,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Y5(d,B.pN,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eG(u,E.Ak,A.bm(!0,new A.C(A4.AO,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.ah1,B.d0,u,new A.b7(t,new A.aA(s,1.4,B.q,-1)),u)},
$S:46}
C.d3D.prototype={
$0(){A.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.d3u.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cx(w.d)
return new C.Yz(v,J.cx(w.d),w.r+1,null)},
$S:z+54}
C.d3v.prototype={
$1(d){var w=null
return A.oe(!1,A.ei(w,w,w,E.Ak,new A.kb(this.a,new C.d3t(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:273}
C.d3t.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a68,B.o7,A.D(A.d(e,w,w,w,w,w,w,B.iF,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:737}
C.d3w.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d3x.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:198}
C.d3y.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3z.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Aq(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.QN(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d3s(s,t))
w=4
return A.b(s.kP(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3s.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3K.prototype={
$1(d){var w=null
return A.oe(!1,A.ei(w,w,w,E.Ak,new A.kb(this.a,new C.d3J(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:273}
C.d3J.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a68,B.o7,A.D(A.d(e,w,w,w,w,w,w,B.iF,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:737}
C.d3L.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d3M.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:198}
C.d3N.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:198}
C.d3O.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Aq(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kP(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3i.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bfp(B.pv,V.Ll)},
$S:0}
C.d3j.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFe(B.pv,V.Ll)},
$S:0}
C.d5D.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.d5E.prototype={
$1(d){var w=this.a
return w.m(new C.d5C(w))},
$S:9}
C.d5C.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d5F.prototype={
$1(d){var w=this.a
return w.m(new C.d5B(w))},
$S:9}
C.d5B.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d5G.prototype={
$1(d){var w=this.a
return w.m(new C.d5A(w))},
$S:9}
C.d5A.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d5H.prototype={
$0(){var w=this.a
return w.m(new C.d5z(w,this.b))},
$S:0}
C.d5z.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d5I.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga0L()
A.a5(this.b,!1).N(new A.bn_(w,v))},
$S:0}
C.d47.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d46.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Yv(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d4b.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d4a.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b5y(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hB,v,v,v)
return A.ei(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.d48(d),v,v),A.bJ(B.w8,new C.d49(d),A.bk(B.mN,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Ak,w,v,v,v,v,D.fcz,v)},
$S:19}
C.d48.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.d49.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.d4c.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.d4d.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a6(s,t,w[u],t))
return A.cd(A.c_(B.bB,r,B.bs,18,14),B.r,t,B.y,t,D.bq8,t,t,B.ah)},
$S:297}
C.d45.prototype={
$0(){return this.a.Pp(0,this.b)},
$S:0}
C.d44.prototype={
$0(){return this.a.OU(0,this.b)},
$S:0}
C.cDa.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cDb.prototype={
$0(){return B.d.gK(D.ys)},
$S:z+12}
C.cDc.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bY(0,new A.C(d,A.bZ(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.bd),w),0,0,0)},
$S:1907}
C.cWC.prototype={
$1(d){return this.a.m(new C.cWB(this.b,this.c))},
$S:9}
C.cWB.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cX0.prototype={
$1(d){return this.a.m(new C.cWO())},
$S:2}
C.cWO.prototype={
$0(){},
$S:0}
C.cX1.prototype={
$1(d){return this.a.m(new C.cWN())},
$S:2}
C.cWN.prototype={
$0(){},
$S:0}
C.cX2.prototype={
$0(){var w=this.a
return w.m(new C.cWM(w,this.b))},
$S:0}
C.cWM.prototype={
$0(){var w=this.a
return w.d=w.gnQ().F9(this.b.a)},
$S:0}
C.cX3.prototype={
$0(){var w=this.a
return w.m(new C.cWL(w,this.b))},
$S:0}
C.cWL.prototype={
$0(){var w=this.a
return w.d=w.gnQ().cDM(this.b)},
$S:0}
C.cX4.prototype={
$1(d){return this.a.m(new C.cWK())},
$S:2}
C.cWK.prototype={
$0(){},
$S:0}
C.cX5.prototype={
$0(){var w=this.a
return w.m(new C.cWJ(w,this.b))},
$S:0}
C.cWJ.prototype={
$0(){var w=this.a
return w.d=w.gnQ().cDR(this.b.a)},
$S:0}
C.cX6.prototype={
$1(d){var w=this.a
return w.m(new C.cWW(w,d))},
$S:6}
C.cWW.prototype={
$0(){var w=this.a
return w.d=w.gnQ().cEL(this.b)},
$S:0}
C.cX7.prototype={
$1(d){var w=this.a
return w.d=w.gnQ().aCn(d)},
$S:2}
C.cX8.prototype={
$1(d){var w=this.a
return w.d=w.gnQ().cDU(d)},
$S:2}
C.cXa.prototype={
$1(d){var w=this.a
return w.d=w.gnQ().cEJ(d)},
$S:2}
C.cXb.prototype={
$1(d){var w=this.a
return w.m(new C.cWV(w,d))},
$S:9}
C.cWV.prototype={
$0(){var w=this.a
return w.d=w.gnQ().cEA(this.b)},
$S:0}
C.cXc.prototype={
$0(){var w=this.a,v=w.gnQ(),u=B.a.i(w.gxW(0).a.a),t=B.a.i(w.gazD().a.a)
u=v.ba9(B.a.i(w.gapv().a.a),t,u)
A.a5(this.b,!1).N(u)
return null},
$S:0}
C.dRm.prototype={
$0(){var w=this.a
w.vz()
w.a.bp()
w.a.pw()},
$S:0}
C.dRl.prototype={
$0(){var w=this.a
w.vz()
w.a.bp()
w.a.pw()},
$S:0}
C.dRo.prototype={
$0(){var w=this,v=w.b
if(J.cx(v)||J.ck(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dRp.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dRq.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dRk.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dRn.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dRs.prototype={
$0(){this.a.NT()
return null},
$S:0}
C.dRr.prototype={
$0(){return this.a.E1(this.b)},
$S:0}
C.dQN.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.de,w,w,!0,w,w,new C.dQL(d),w,w),r=A.bk(B.bU,w,w,w,w,w,w,w,w,w,w,w)
return A.ei(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dQM(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dQL.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dQM.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dQO.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cEf(this.b)},
$S:0}
C.dQI.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aRf(w.b,w.c,w.d)},
$S:8}
C.dQg.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dQh.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dQv.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.G_(t.a.c),$async$$0)
case 2:s=r.r2(q.dH(e,new C.dQt(t)))
if(s!=null&&t.c!=null)t.m(new C.dQu(t,s))
t.a.bp()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQt.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dQu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dQw.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dQx.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dQH.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cF2(C.hes(w),w)},
$S:0}
C.dQF.prototype={
$1(d){return new A.e_(new C.dQE(this.a,this.b),null)},
$S:20}
C.dQE.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dX:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.alo,v,v,v,p>0?new C.dQA(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aP,A.A(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.alY,v,v,v,new C.dQB(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.ei(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dQC(d),v,v),A.bJ(B.p3,new C.dQD(d),A.bk(B.bU,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:169}
C.dQA.prototype={
$0(){return this.b.$1(new C.dQz(this.a))},
$S:0}
C.dQz.prototype={
$0(){return--this.a.a},
$S:0}
C.dQB.prototype={
$0(){return this.b.$1(new C.dQy(this.a))},
$S:0}
C.dQy.prototype={
$0(){return++this.a.a},
$S:0}
C.dQC.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dQD.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dQG.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cEQ(this.a.a)
w.r.a9(0)},
$S:0}
C.dQ4.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.agK(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.h8b(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dQ5.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aCk(w)},
$S:0}
C.dQQ.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.acb(this.b,w,this.c,null)},
$S:z+24}
C.dQK.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dX:B.c,t=A.m(20),s=A.W(B.lc,B.aU,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.ei(A.a([A.bJ(D.fn9,new C.dQJ(d),A.bk(B.aU,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:19}
C.dQJ.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dQ6.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dQ7.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dQ8.prototype={
$1(d){return d.a},
$S:z+7}
C.dQ9.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hV(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aCk(w)},
$S:0}
C.dQd.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.agK(q)
w=A.T(q).k("a2<1>")
q=A.B(new A.a2(q,new C.dQb(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.h8b(v.e,null,r,v.f,v.r,new C.dQc(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dQc.prototype={
$0(){return this.a.a8Y(this.b)},
$S:0}
C.dQb.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dQe.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("K<1,hV>")
w=A.B(new A.K(w,new C.dQa(this.b),v),v.k("aj.E"))
u.d=t.aCk(w)},
$S:0}
C.dQa.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dQP.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dQq.prototype={
$1(d){return d.length!==0},
$S:3}
C.dQr.prototype={
$1(d){var w=this
return new A.e_(new C.dQp(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dQp.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dX:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.aB,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.K(o,new C.dQl(u,e,o),A.T(o).k("K<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aL(v,B.T,!1,v,!0,B.r,v,A.aM(),u,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(12),B.dg),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.lY,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.ei(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dQm(d),v,v),A.bJ(B.IS,new C.dQn(t,u,o,e),A.bk(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.faM,new C.dQo(t,u,o,d),A.bk(B.aU,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a6(360,v,p,v),v,v,v,v,r,v)},
$S:169}
C.dQl.prototype={
$1(d){var w=null
return A.dN(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.aB,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bMS,w,w,w,new C.dQk(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1908}
C.dQk.prototype={
$0(){return this.a.$1(new C.dQi(this.b,this.c))},
$S:0}
C.dQi.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dQm.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dQn.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dQj(w.c,u))
v.bN(0,B.c3)}},
$S:0}
C.dQj.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dQo.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).N(!0)},
$S:0}
C.dQs.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cFu(this.b,D.tA,C.FY(v,w.a.c))},
$S:0}
C.dQX.prototype={
$1(d){return d.as},
$S:z+1}
C.dQY.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iL(this.b,w)},
$S:0}
C.dQZ.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i2b(v)
return w.V3(v==null?null:v.a)},
$S:0}
C.dR_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hFH(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aP(1/0,e.a,e.b)
s=A.aP(1/0,e.c,e.d)
l.cnG(new A.at(u,t),v.gbgg(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cKL:D.cJd
q=A.I(s?B.dp:D.b8W,B.q,1)
p=A.m(22)
o=A.bY(0,A.b3(m,m,m,new C.bbR(s,m),B.au),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bv(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bY(0,A.ud(new A.Q(n,n,n,n),new A.a6(u,t,new C.bcK(l.d,v,l.f,w,new C.dQT(l),l.gc7Q(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bu1(s,new C.dQU(l,e),new C.dQV(l,e),new C.dQW(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a7(B.b0,B.b6,B.x,r,m,m),B.n),m,m,m,R.ag6,m,m,m,m)},
$S:221}
C.dQT.prototype={
$1(d){var w=this.a
w.m(new C.dQR(w,d))},
$S:2}
C.dQR.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.L(0,v)},
$S:0}
C.dQU.prototype={
$0(){var w=this.b
return this.a.b7N(1.25,new A.at(A.aP(1/0,w.a,w.b),A.aP(1/0,w.c,w.d)))},
$S:0}
C.dQV.prototype={
$0(){var w=this.b
return this.a.b7N(0.8,new A.at(A.aP(1/0,w.a,w.b),A.aP(1/0,w.c,w.d)))},
$S:0}
C.dQW.prototype={
$0(){var w=this,v=w.b
return w.a.aRf(new A.at(A.aP(1/0,v.a,v.b),A.aP(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbgg())},
$S:0}
C.dR0.prototype={
$0(){var w=this.a
return w.m(new C.dQS(w))},
$S:0}
C.dQS.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dQf.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fB(s.c)),$async$$0)
case 2:t.xq("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d4h.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bgr(u,C.hiw(v.c,u),new C.d4g(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d4g.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d4i.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bjN(d.d,d.c,u.f.t(0,d.a),new C.d4f(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d4f.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fnp.prototype={
$1(d){var w,v=d.e
if(this.a.ah(0,v))return v
v=this.b
w=A.T(v)
return A.r2(new A.cQ(new A.a2(v,new C.fnq(d),w.k("a2<1>")),new C.fnr(),w.k("cQ<1,n>")))},
$S:z+20}
C.fnq.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fnr.prototype={
$1(d){return d.a},
$S:z+7}
C.fnn.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fno.prototype={
$1(d){return d.b},
$S:z+7}
C.fnu.prototype={
$1(d){var w,v=d.e
if(this.a.ah(0,v))return v
v=this.b
w=A.T(v)
return A.r2(new A.cQ(new A.a2(v,new C.fnv(d),w.k("a2<1>")),new C.fnw(),w.k("cQ<1,n>")))},
$S:z+20}
C.fnv.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fnw.prototype={
$1(d){return d.a},
$S:z+7}
C.fns.prototype={
$1(d){var w,v=A.ev([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ah(0,w)&&v.L(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fnt.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d4k.prototype={
$0(){return this.a},
$S:z+32}
C.d4B.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ah(0,d)},
$S:245}
C.d4t.prototype={
$2(d,e){var w=this.a.ck(0,d,new C.d4u()),v=J.a8(w)
if(!v.t(w,e))v.L(w,e)},
$S:116}
C.d4u.prototype={
$0(){return A.a([],x.s)},
$S:738}
C.d4s.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eZ(w,e)
return w===!0},
$S:279}
C.d4l.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d4r.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d4q.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.L(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.BR:v)
u=1
while(v.C())u+=s.$2(v.gU(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.T:v)
while(v.C()){t=v.gU(v)
if(e.t(0,t))continue
e.L(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.BR:t)
while(t.C())u+=s.$2(t.gU(t).a,e)}return u},
$S:1910}
C.d4m.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d4v.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.L(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aW(u==null?B.T:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gU(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.L(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aW(t==null?D.BR:t)
while(t.C()){r=t.gU(t)
if(r.a!==a9&&!B.d.b8(w,new C.d4w(r)))w.push(r)}}B.d.bm(w,new C.d4x(a8))
B.d.b_(w,new C.d4y())
q=C.hFG(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.esd],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.L)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.y(-p,p)],x.G)
a8=x.F
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.L)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gK(k)+B.d.gal(k))/2
a1=A.a([new A.y(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bmK(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1911}
C.d4w.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d4x.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d4y.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d4z.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a8(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a4(v).k("bc<2>")).cI(0,0,B.qp)+88-w.gK(n).a}else u=0
for(w=J.a8(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:653}
C.d4A.prototype={
$1(d){return 16+d*156},
$S:244}
C.d4j.prototype={
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
t.n(0,d,new C.Ff(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Ff(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Ff(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gU(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Js(d,new A.u(e+t,w),s,s.length))}},
$S:198}
C.d4n.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aHy(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:116}
C.d4o.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d4p.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:739}
C.d4C.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:739}
C.d4D.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:439}
C.d4E.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:176}
C.d4F.prototype={
$1(d){return d>=0.5},
$S:117}
C.f5S.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hp(A.aK(!1,v,!0,new A.a6(38,38,A.W(d,this.a.c?B.c:B.cE,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1913}
C.eI9.prototype={
$1(d){var w=null,v=A.m(8),u=B.bU.j(0.12),t=A.m(8)
return new A.C(B.n2,A.aK(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eY_,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.LU,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eI8(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eI8.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dks.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dkr.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nn,B.L,w,w)
return A.ei(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dkp(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.m9,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dkq(d),w,w)],x.p),B.bb,B.AH,w,u,D.bro,w,D.btk,new A.b7(v,B.Y),w,w)},
$S:19}
C.dkp.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dkq.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dkB.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dkC.prototype={
$1(d){var w=this.a
return w.m(new C.dkA(w,d))},
$S:z+37}
C.dkA.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dkD.prototype={
$1(d){var w=null
return A.q8(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dkG.prototype={
$1(d){var w=this.a
return w.m(new C.dkz(w,d))},
$S:33}
C.dkz.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dkF.prototype={
$1(d){var w=null
return A.q8(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dkH.prototype={
$1(d){var w=this.a
return w.m(new C.dky(w,d))},
$S:33}
C.dky.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dkI.prototype={
$0(){var w=this.a
return w.m(new C.dkx(w))},
$S:0}
C.dkx.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dkJ.prototype={
$0(){var w=this.a
return w.m(new C.dkw(w))},
$S:0}
C.dkw.prototype={
$0(){return++this.a.at},
$S:0}
C.dkK.prototype={
$0(){var w=this.a
return w.m(new C.dkv(w))},
$S:0}
C.dkv.prototype={
$0(){return--this.a.ax},
$S:0}
C.dkL.prototype={
$0(){var w=this.a
return w.m(new C.dku(w))},
$S:0}
C.dku.prototype={
$0(){return++this.a.ax},
$S:0}
C.dkM.prototype={
$1(d){var w=this.a
return w.m(new C.dkt(w,d))},
$S:9}
C.dkt.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dkE.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dkN.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bU.j(0.18)
else w=q.c.a?B.dX:B.c
v=A.m(12)
if(p)u=B.bU
else u=(q.c.a?B.dZ:B.bR).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bU
else t=q.c.a?B.bq:B.bn
t=A.W(f,t,r,r,r,18)
if(p)s=B.bU
else s=q.c.a?B.bq:B.bn
return A.D(A.aF(!1,B.a1,!0,r,A.aK(!1,o,!0,A.dg(r,A.v(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jx,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dkO(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
$S:z+39}
C.dkO.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dkX.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.c6n.prototype={
$2(d,e){return new A.bu(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:94}
C.c6u.prototype={
$1(d){return d.ae()},
$S:z+5}
C.c6v.prototype={
$2(d,e){var w=J.b6(e,new C.c6t(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bu(d,w,x.d2)},
$S:z+41}
C.c6t.prototype={
$1(d){return d.ae()},
$S:z+21}
C.c6p.prototype={
$1(d){return C.ajz(A.a1(d,x.N,x.z))},
$S:z+8}
C.c6q.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c6r.prototype={
$1(d){return C.h_b(A.a1(d,x.N,x.z))},
$S:z+11}
C.c6s.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c6z.prototype={
$1(d){return new A.aEE(d.f.length,d.a,d.b)},
$S:z+43}
C.c6A.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:564}
C.c6w.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c6x.prototype={
$1(d){return d.cEs(C.FY(d,this.a))},
$S:z+44}
C.dR9.prototype={
$1(d){return C.tI(d,this.a.a.c)},
$S:z+2}
C.dRa.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dRe.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dRf.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dR6.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYy(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xX("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oW(r.c,r.e),$async$$0)
case 4:s.xX(p)
w=5
return A.b(s.J1(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dR7.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYy(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xX("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oW(r.c,r.e),$async$$0)
case 4:s.xX(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dR8.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Ui(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xX("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xX("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xX("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.J1(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a9(j)
o=r.a
if(o.c==null){w=1
break}o.xX(B.a.e9(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dRd.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYx(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xX("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).c6(A.e6(new C.dRc(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oW(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRc.prototype={
$1(d){var w=this.b
return new C.Zt(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dRb.prototype={
$1(d){return D.fMC},
$S:z+46}
C.dRh.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dRi.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dRg(w,d)
return new A.C(B.dc,new C.bcO(this.b,d.c,d.a,w,null),null)},
$S:1914}
C.dRg.prototype={
$0(){return this.a.WM(this.b.b)},
$S:0}
C.dR1.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dR2.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dR3.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dR4.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dR5.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dRj.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.dr(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a5(this.b,!1).N(s)
return}},
$S:177}
C.dCt.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dCu.prototype={
$0(){return B.d.gK(D.a2l)},
$S:z+48}
C.dCv.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.W(this.b.d,B.c.j(0.95),w,w,D.cQM,44),w,w,w),w,w,new C.bhz(u,t,v,w),B.au)},
$S:70}
C.fDi.prototype={
$1(d){return A.oH(new C.fDh(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:130}
C.fDh.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dX:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rk,24)],x.V),o=r?B.dZ:B.bR
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aU.j(0.25),B.bU.j(0.18)],x.O)
w=A.p(t,D.bHs,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a7(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.aB,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.C(E.ah5,A.A(A.a([w,B.bf,A.D(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ic(!0,t,e,B.y,D.eLm,new C.fDg(this.b,s),20,B.agG,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kz,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:109}
C.fDg.prototype={
$2(d,e){var w=null,v=D.a2l[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dZ:B.bR,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ej,8)],x.V),p=A.m(15),o=A.D(new C.a5k(v.a,!0,w),1),n=s?B.jt:B.iO,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.aB,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aK(!1,u,!0,A.ez(A.bv(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bq:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.l8,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fDf(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:78}
C.fDf.prototype={
$0(){A.a5(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.ce1.prototype={
$0(){return this.a.aeQ(this.b)},
$S:0}
C.fCF.prototype={
$1(d){return D.fIS},
$S:z+74}
C.fK7.prototype={
$1(d){var w=this
return new C.a0b(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fCK.prototype={
$1(d){return new C.Y7(this.a,null)},
$S:z+51}
C.fCJ.prototype={
$1(d){return D.fJR},
$S:z+52}
C.cXo.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cXp.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cXn(w,d))},
$S:33}
C.cXn.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cXq.prototype={
$1(d){return this.a.JB()},
$S:2}
C.cXr.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cXk.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cXl.prototype={
$1(d){return this.a.JB()},
$S:2}
C.cXm.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cuY.prototype={
$0(){},
$S:0}
C.cv3.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cv4.prototype={
$0(){return this.a.aMO(-1)},
$S:0}
C.cv5.prototype={
$1(d){return this.a.m(new C.cv2())},
$S:2}
C.cv2.prototype={
$0(){},
$S:0}
C.cv6.prototype={
$0(){return this.a.aMO(1)},
$S:0}
C.cv7.prototype={
$1(d){return this.a.m(new C.cv1())},
$S:2}
C.cv1.prototype={
$0(){},
$S:0}
C.cv8.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aU.j(0.2)
if(s)v=B.aU
else v=this.b.a?B.dZ:B.bR
return A.u3(u,u,B.aZ,r,u,new C.cv0(t,d),B.AU,s,w,u,new A.aA(v,1,B.q,-1),B.c7)},
$S:1915}
C.cv0.prototype={
$1(d){var w=this.a
return w.m(new C.cuZ(w,this.b))},
$S:9}
C.cuZ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cv9.prototype={
$1(d){return this.a.m(new C.cv_())},
$S:2}
C.cv_.prototype={
$0(){},
$S:0}
C.cva.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.f5k.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).N(w)},
$S:2}
C.f5l.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.f5m.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).N(w)},
$S:0}
C.f5i.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbwy()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.C(D.btj,new A.es(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.btR(p,v,this.b.a,u,t,r),r,r,B.au)},
$S:70}
C.f5j.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dB.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aU,B.bU,w)
s.toString
s=A.a([B.aZ,s,B.aU],x.O)
return A.aF(!1,B.a1,!0,p,A.aK(!1,v,!0,A.ez(D.e31,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a7(new A.d9(-1.2+t,-0.5),new A.d9(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
$S:136}
C.fBq.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.eFj.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eFa.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eFb.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eFh.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e_(new C.eFg(w,this.b),null)},
$S:20}
C.eFg.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dX:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.aB,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eG(w,u,new A.C(B.ah_,A.v(A.a([s,B.an,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h4Z(new C.eFd(r,e),r.a),B.aA,A.A(A.a([A.D(A.dU(B.de,new C.eFe(d),w),1),B.av,A.D(A.bJ(B.Ti,new C.eFf(r,d),A.bk(B.aU,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(t,B.Y),w)},
$S:98}
C.eFd.prototype={
$1(d){return this.b.$1(new C.eFc(this.a,d))},
$S:33}
C.eFc.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eFe.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eFf.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.eFi.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.S2(this.b)},
$S:0}
C.eF5.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.b9I(w)},
$S:0}
C.eF9.prototype={
$1(d){return this.biK(d)},
biK(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KE(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iL(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eF8.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a2<1>")
w=A.B(new A.a2(w,new C.eF7(this.b),v),v.k("J.E"))
u.d=t.b9I(w)},
$S:0}
C.eF7.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eFk.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iL(this.b,w)},
$S:0}
C.eFl.prototype={
$1(d){return this.a.bAC(d,this.b)},
$S:z+55}
C.eF6.prototype={
$0(){return this.a.a8X(this.b)},
$S:0}
C.fK_.prototype={
$1(d){return new C.acw(this.a,this.b,this.c,null)},
$S:z+56}
C.eFn.prototype={
$0(){return this.a.Zq(this.b)},
$S:0}
C.eFo.prototype={
$0(){return this.a.Pl(this.b)},
$S:0}
C.eFp.prototype={
$0(){return this.a.DX(this.b)},
$S:0}
C.eFq.prototype={
$0(){return this.a.Zr(this.b)},
$S:0}
C.eFm.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eF0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eF1.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eF2.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eF4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pC(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eF3(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eF3.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eFN.prototype={
$2(d,e){return d+e.gwC()},
$S:z+59}
C.eFJ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eFK.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eFu.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dX:B.c,s=A.m(24),r=A.p(v,D.bHS,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.I(B.ay.j(0.28),B.q,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.aB,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aQ:B.aB
u=u?B.dZ:B.bR
w=x.p
return A.eG(v,t,new A.C(B.xr,A.v(A.a([r,B.aP,q,B.P,p,B.d5,A.A(A.a([A.D(A.dU(B.nq,new C.eFs(d),A.de(v,v,v,v,v,v,v,v,v,o,v,v,B.eZ,v,new A.b7(A.m(14),B.Y),new A.aA(u,1,B.q,-1),v,v,v,v)),1),B.av,A.D(A.bJ(D.fqQ,new C.eFt(d),A.bk(B.ay,v,v,v,v,v,B.eZ,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d0,v,new A.b7(s,B.Y),v)},
$S:46}
C.eFs.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.eFt.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.eFD.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dX:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fL,28)],x.V),g=k?D.cX7:B.a1K,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.eFB,B.at,new A.bH(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cu,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a7(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.ah2,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.D(v.b31(B.b5,B.iU,new C.eFA(v,d),l,"Camera import","Scan QR"),1),B.av,A.D(v.b31(B.cx,M.y7,new C.eFB(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ay.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.ay.j(0.28),B.q,1)
o=A.p(m,D.bHg,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.aB,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.C(B.va,A.p(m,A.v(A.a([g,new A.C(B.ah0,A.v(A.a([w,B.S,u,B.bw,t,B.S,A.aF(!1,B.a1,!0,m,A.aK(!1,s,!0,A.p(m,A.A(A.a([o,B.bf,n,A.W(B.ex,k?B.bq:B.bn,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eFC(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:28}
C.eFA.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.va("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eFB.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.va("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eFC.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.Na(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eFy.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dX:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.dZ:B.bR
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bq:B.bn
u=A.bv(w,new A.a6(48,48,C.aON(!0,A.m(12),48,N.Mu,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aQ:B.aB,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Ah(v.gwC())
s=x.p
r=this.a
return A.bm(!0,new A.C(B.va,A.p(q,A.v(A.a([B.S,k,new A.C(D.agY,A.A(A.a([u,B.bf,A.D(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.Ay,r.chY(B.tS,B.aU,new C.eFw(d),p,"QR code or backup file","Transfer project"),r.b04(!0,B.e4,B.ay,new C.eFx(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:28}
C.eFw.prototype={
$0(){A.a5(this.a,!1).N("transfer")
return null},
$S:0}
C.eFx.prototype={
$0(){A.a5(this.a,!1).N("delete")
return null},
$S:0}
C.eFz.prototype={
$1(d){return this.biL(d)},
biL(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.KE(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vn(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eFQ.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eFP(w))},
$S:0}
C.eFP.prototype={
$0(){return this.a.r++},
$S:0}
C.eFR.prototype={
$0(){var w=this.a
return w.m(new C.eFO(w))},
$S:0}
C.eFO.prototype={
$0(){return this.a.r++},
$S:0}
C.eFr.prototype={
$0(){var w=this.a.c
w.toString
return A.iL(w,null)},
$S:0}
C.eFv.prototype={
$0(){return this.a.cbk(this.b)},
$S:0}
C.eFM.prototype={
$0(){var w=this.a
return w.m(new C.eFL(w,this.b))},
$S:0}
C.eFL.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eFG.prototype={
$0(){return this.a.va("scan")},
$S:0}
C.eFH.prototype={
$0(){return this.a.va("file")},
$S:0}
C.eFI.prototype={
$1(d){return this.a.chZ(d,this.b)},
$S:z+60}
C.eFF.prototype={
$0(){return this.a.E0(this.b)},
$S:0}
C.eFE.prototype={
$0(){return this.a.ZW(this.b,this.c)},
$S:0}
C.cuo.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cun.prototype={
$1(d){return d.ae()},
$S:z+62}
C.cul.prototype={
$1(d){return C.hok(A.a1(d,x.N,x.z))},
$S:z+63}
C.cum.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fmA.prototype={
$1(d){return d.y===D.ki},
$S:z+2}
C.fKt.prototype={
$1(d){return C.bzF(d,this.a)},
$S:z+2}
C.fl6.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bM_.prototype={
$1(d){return!d.as},
$S:z+1}
C.bLZ.prototype={
$1(d){return d.ae()},
$S:z+15}
C.bLW.prototype={
$1(d){return C.h_c(A.a1(d,x.N,x.z))},
$S:z+14}
C.bLX.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bLY.prototype={
$1(d){return J.k(d)},
$S:17}
C.fcT.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.f8A.prototype={
$1(d){return C.fQM(A.a1(d,x.N,x.z))},
$S:z+67}
C.f8B.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.f8C.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fCw.prototype={
$1(d){return J.k(d)},
$S:17}
C.fCx.prototype={
$1(d){return d.a},
$S:z+69}
C.fCy.prototype={
$1(d){return d.length!==0},
$S:3}
C.fCz.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fCA.prototype={
$1(d){return d.S2(null).ae()},
$S:z+70}
C.fKr.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fn1.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fpt.prototype={
$1(d){return C.ajz(A.a1(d,x.N,x.z))},
$S:z+8}
C.fpu.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fpv.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fpw.prototype={
$1(d){return d.ae()},
$S:z+5}
C.fpx.prototype={
$1(d){return C.tI(d,this.a)},
$S:z+2}
C.fCj.prototype={
$1(d){return C.tI(d,this.a)},
$S:z+2}
C.fKm.prototype={
$1(d){return C.ajz(A.a1(d,x.N,x.z))},
$S:z+8}
C.fKn.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fKo.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fmJ.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fmK.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fKx.prototype={
$1(d){return!d.as},
$S:z+1}
C.fmj.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fmk.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fml.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fK8.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fqf.prototype={
$1(d){return d.Q},
$S:z+72}
C.fCf.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fpq.prototype={
$1(d){return C.ajz(A.a1(d,x.N,x.z))},
$S:z+8}
C.fpr.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fps.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fCb.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f97.prototype={
$1(d){return d.length!==0},
$S:3}
C.f98.prototype={
$1(d){return C.h_c(A.a1(d,x.N,x.z))},
$S:z+14}
C.f99.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.f9a.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.f9b.prototype={
$1(d){return d.length!==0},
$S:3}
C.f9o.prototype={
$2(d,e){return d.eU(new C.f9p(e))},
$S:1916}
C.f9p.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1917}
C.f9l.prototype={
$1(d){return C.hKi(d,this.a)},
$S:z+73}
C.f9m.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.f9n.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fdx.prototype={
$1(d){return d.a},
$S:z+49}
C.fdy.prototype={
$1(d){return d.length!==0},
$S:3}
C.fdz.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.ffE.prototype={
$1(d){return d.ae()},
$S:z+5}
C.fkq.prototype={
$1(d){return C.hau(d,C.FY(d,this.a))},
$S:z+5}
C.fkr.prototype={
$1(d){return C.hav(d,C.FY(d,this.a))},
$S:z+5};(function aliases(){var w=C.aJU.prototype
w.bsN=w.q
w=C.aM2.prototype
w.bv7=w.q
w=C.aM3.prototype
w.bv8=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aBq.prototype,"gceV","ceW",25)
var s
w(s=C.ayt.prototype,"gc7W","c7X",42)
v(s,"gaL4","MJ",0)
v(s,"gcn1","Ar",0)
v(s,"gbIg","No",0)
v(s,"gcAO","xY",0)
v(s,"gcgW","a_D",0)
v(s,"gbDJ","N6",0)
v(s,"gbIH","Wd",0)
w(s,"gbNd","bNe",71)
v(s,"gbyd","zu",0)
v(C.ayu.prototype,"gcAK","ES",0)
v(s=C.aC0.prototype,"gaes","vo",0)
v(s,"gcaA","ZN",0)
v(s,"gaP4","Hq",0)
v(s=C.aBY.prototype,"gcx_","a1I",0)
v(s,"gaes","vo",0)
v(s,"gcl5","a0i",0)
v(s,"gcbx","a_0",0)
w(s,"gc7Q","c7R",30)
v(s,"gbIy","Hv",0)
v(s,"gcxZ","cy_",3)
v(s,"gbZC","XS",0)
w(s,"gc6m","c6n",23)
v(s,"gcak","cal",3)
v(s=C.aAp.prototype,"gc4a","OV",0)
v(s,"gc4c","c4d",3)
v(s,"gbFe","a8z",0)
v(s=C.aC_.prototype,"gbLL","WI",0)
v(s,"gbW0","Xl",0)
v(s,"gcrk","a18",0)
v(s,"gcnB","a0K",0)
v(C.aBZ.prototype,"gcnj","agb",0)
v(C.arb.prototype,"gc6k","Zp",0)
v(C.axf.prototype,"ga1s","JB",3)
v(C.axe.prototype,"ga1s","JB",3)
v(C.avZ.prototype,"ga1s","JB",3)
v(s=C.aDv.prototype,"gb_t","PQ",0)
v(s,"gbx0","UY",0)
v(s,"gcbl","cbm",3)
w(C.aDu.prototype,"gc7a","c7b",57)
u(C.aDw.prototype,"gaOZ",0,0,null,["$1","$0"],["Hp","bGv"],58,0,0)
t(C,"hhK","hTT",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.an5,C.u0,C.n4,C.H2,C.adI,C.Jk,C.u1,C.Js,C.Ff,C.bcM,C.aHy,C.aof,C.d4G,C.lu,C.aRG,C.aRF,C.aPK,C.tx,C.qN,C.ld,C.hV,C.kx,C.aFy])
u(A.hT,[C.fu5,C.fu4,C.fu6,C.fDb,C.fjm,C.fjn,C.fjs,C.frP,C.frO,C.frN,C.c_Q,C.fDH,C.fDz,C.fDL,C.fmR,C.dD9,C.dD4,C.dD5,C.dCI,C.dCE,C.dDo,C.dDp,C.dDi,C.dDj,C.dDq,C.dDr,C.fnl,C.fpn,C.fpo,C.fCh,C.fKl,C.fmI,C.fCQ,C.d3T,C.d3f,C.d3o,C.d3F,C.d3k,C.d3q,C.d3h,C.d3u,C.d3v,C.d3t,C.d3K,C.d3J,C.d5E,C.d5F,C.d5G,C.d46,C.d4b,C.d4a,C.cDa,C.cDc,C.cWC,C.cX0,C.cX1,C.cX4,C.cX6,C.cX7,C.cX8,C.cXa,C.cXb,C.dRn,C.dQN,C.dQI,C.dQg,C.dQt,C.dQw,C.dQF,C.dQ4,C.dQQ,C.dQK,C.dQ6,C.dQ7,C.dQ8,C.dQd,C.dQb,C.dQa,C.dQq,C.dQr,C.dQl,C.dQX,C.dQT,C.d4h,C.d4i,C.fnp,C.fnq,C.fnr,C.fnn,C.fno,C.fnu,C.fnv,C.fnw,C.fns,C.fnt,C.d4B,C.d4r,C.d4m,C.d4w,C.d4x,C.d4A,C.d4o,C.d4D,C.d4E,C.d4F,C.f5S,C.eI9,C.dkr,C.dkB,C.dkC,C.dkD,C.dkG,C.dkF,C.dkH,C.dkM,C.dkN,C.c6u,C.c6t,C.c6p,C.c6q,C.c6r,C.c6s,C.c6z,C.c6w,C.c6x,C.dR9,C.dRc,C.dRb,C.dRi,C.dRj,C.dCt,C.fDi,C.fCF,C.fK7,C.fCK,C.fCJ,C.cXp,C.cXq,C.cXl,C.cv5,C.cv7,C.cv8,C.cv0,C.cv9,C.f5k,C.fBq,C.eFh,C.eFd,C.eF9,C.eF7,C.eFl,C.fK_,C.eFu,C.eFD,C.eFy,C.eFz,C.eFI,C.cun,C.cul,C.cum,C.fmA,C.fKt,C.fl6,C.bM_,C.bLZ,C.bLW,C.bLX,C.bLY,C.f8A,C.f8B,C.fCw,C.fCx,C.fCy,C.fCz,C.fCA,C.fKr,C.fn1,C.fpt,C.fpu,C.fpw,C.fpx,C.fCj,C.fKm,C.fKn,C.fKo,C.fmJ,C.fmK,C.fKx,C.fmj,C.fmk,C.fK8,C.fqf,C.fCf,C.fpq,C.fpr,C.fCb,C.f97,C.f98,C.f99,C.f9a,C.f9b,C.f9p,C.f9l,C.f9m,C.fdx,C.fdy,C.ffE,C.fkq,C.fkr])
u(A.au,[C.aX5,C.ajx,C.aSV,C.XO,C.b8w,C.bcK,C.bgr,C.bu1,C.bjN,C.aca,C.bgq,C.ac9,C.bgp,C.aAq,C.aGB,C.acb,C.Jf,C.bcL,C.abs,C.bcJ,C.bcO,C.aX3,C.arb,C.acw])
u(A.mG,[C.b97,C.bai,C.ba9,C.aFt,C.bfu,C.bcN,C.bbR,C.bhz,C.btR])
u(A.j3,[C.fDE,C.fDF,C.fDG,C.fDx,C.fDy,C.fDJ,C.fDK,C.dDl,C.dD7,C.dDa,C.dCP,C.dCQ,C.dCR,C.dCO,C.dCW,C.dCN,C.dCX,C.dCY,C.dCM,C.dCZ,C.dCL,C.dD_,C.dCK,C.dD0,C.dCC,C.dCD,C.dCJ,C.dD1,C.dCH,C.dD2,C.dCG,C.dCS,C.dCF,C.dCT,C.dCB,C.dCU,C.dCV,C.dDm,C.dDn,C.dDb,C.dDc,C.dDd,C.dDe,C.dDf,C.dDg,C.dDh,C.dDt,C.dDk,C.fnm,C.d3d,C.d3b,C.d3c,C.d3e,C.d3S,C.d3H,C.d3E,C.d3g,C.d3I,C.d3m,C.d3n,C.d3p,C.d3G,C.d3l,C.d3r,C.d3P,C.d3B,C.d3A,C.d3C,C.d3D,C.d3w,C.d3y,C.d3z,C.d3s,C.d3L,C.d3O,C.d3i,C.d3j,C.d5D,C.d5C,C.d5B,C.d5A,C.d5H,C.d5z,C.d5I,C.d47,C.d48,C.d49,C.d4c,C.d45,C.d44,C.cDb,C.cWB,C.cWO,C.cWN,C.cX2,C.cWM,C.cX3,C.cWL,C.cWK,C.cX5,C.cWJ,C.cWW,C.cWV,C.cXc,C.dRm,C.dRl,C.dRo,C.dRp,C.dRq,C.dRk,C.dRs,C.dRr,C.dQL,C.dQM,C.dQO,C.dQh,C.dQv,C.dQu,C.dQx,C.dQH,C.dQA,C.dQz,C.dQB,C.dQy,C.dQC,C.dQD,C.dQG,C.dQ5,C.dQJ,C.dQ9,C.dQc,C.dQe,C.dQP,C.dQk,C.dQi,C.dQm,C.dQn,C.dQj,C.dQo,C.dQs,C.dQY,C.dQZ,C.dQR,C.dQU,C.dQV,C.dQW,C.dR0,C.dQS,C.dQf,C.d4g,C.d4f,C.d4k,C.d4u,C.d4l,C.eI8,C.dks,C.dkp,C.dkq,C.dkA,C.dkz,C.dky,C.dkI,C.dkx,C.dkJ,C.dkw,C.dkK,C.dkv,C.dkL,C.dku,C.dkt,C.dkE,C.dkO,C.dkX,C.dRa,C.dRe,C.dRf,C.dR6,C.dR7,C.dR8,C.dRd,C.dRh,C.dRg,C.dR1,C.dR2,C.dR3,C.dR4,C.dR5,C.dCu,C.fDf,C.ce1,C.cXo,C.cXn,C.cXr,C.cXk,C.cXm,C.cuY,C.cv3,C.cv4,C.cv2,C.cv6,C.cv1,C.cuZ,C.cv_,C.cva,C.f5l,C.f5m,C.eFj,C.eFa,C.eFb,C.eFc,C.eFe,C.eFf,C.eFi,C.eF5,C.eF8,C.eFk,C.eF6,C.eFn,C.eFo,C.eFp,C.eFq,C.eFm,C.eF0,C.eF1,C.eF2,C.eF4,C.eF3,C.eFJ,C.eFK,C.eFs,C.eFt,C.eFA,C.eFB,C.eFC,C.eFw,C.eFx,C.eFQ,C.eFP,C.eFR,C.eFO,C.eFr,C.eFv,C.eFM,C.eFL,C.eFG,C.eFH,C.eFF,C.eFE])
u(A.ag,[C.anc,C.RX,C.Yv,C.Yz,C.Yx,C.Y5,C.aoi,C.aoc,C.Z8,C.aog,C.Zt,C.Zu,C.a5k,C.Y7,C.Y6,C.XF,C.a0b,C.F3,C.avS,C.ara,C.ar4,C.ar9,C.Nr])
u(A.ah,[C.aBq,C.bcH,C.ayt,C.bd1,C.ayu,C.bag,C.aC0,C.aBY,C.aAp,C.aC_,C.aBZ,C.bhU,C.aJU,C.axf,C.axe,C.avZ,C.btU,C.aM2,C.aM3,C.aDv,C.bjg,C.aDu,C.bvF])
u(A.ke,[C.dD6,C.dD8,C.dD3,C.dDs,C.fpp,C.bLV,C.d3R,C.d3Q,C.d3x,C.d3M,C.d3N,C.d4d,C.dQE,C.dQp,C.dR_,C.d4t,C.d4s,C.d4q,C.d4v,C.d4y,C.d4z,C.d4j,C.d4n,C.d4p,C.d4C,C.c6n,C.c6v,C.c6A,C.dCv,C.fDh,C.fDg,C.f5i,C.f5j,C.eFg,C.eFN,C.cuo,C.fcT,C.f8C,C.fpv,C.fml,C.fps,C.f9o,C.f9n,C.fdz])
t(C.bhA,C.aJU)
u(A.m3,[C.aav,C.aIf,C.H3,C.ajy,C.cuq,C.cur])
t(C.btS,C.aM2)
t(C.btT,C.aM3)
t(C.aDw,C.bvF)
t(C.b6Z,A.b6O)
t(C.btV,A.a5_)
t(C.b6Y,C.btV)
w(C.aJU,A.eT)
w(C.aM2,A.c9)
w(C.aM3,A.c9)
v(C.bvF,A.ew)
v(C.btV,A.iZ)})()
A.jT(b.typeUniverse,JSON.parse('{"aX5":{"au":[],"r":[]},"b97":{"aB":[]},"anc":{"ag":[],"r":[]},"aBq":{"ah":["anc"]},"RX":{"ag":[],"r":[]},"ajx":{"au":[],"r":[]},"aSV":{"au":[],"r":[]},"bcH":{"ah":["RX"]},"Yv":{"ag":[],"r":[]},"Yz":{"ag":[],"r":[]},"Yx":{"ag":[],"r":[]},"Y5":{"ag":[],"r":[]},"ayt":{"ah":["Yv"]},"bd1":{"ah":["Yz"]},"ayu":{"ah":["Yx"]},"XO":{"au":[],"r":[]},"bai":{"aB":[]},"ba9":{"aB":[]},"bag":{"ah":["Y5"]},"aFt":{"aB":[]},"bfu":{"aB":[]},"b8w":{"au":[],"r":[]},"aoi":{"ag":[],"r":[]},"aoc":{"ag":[],"r":[]},"Z8":{"ag":[],"r":[]},"acb":{"au":[],"r":[]},"aC0":{"ah":["aoi"]},"aBY":{"ah":["aoc"]},"bcK":{"au":[],"r":[]},"bcN":{"aB":[]},"bgr":{"au":[],"r":[]},"bbR":{"aB":[]},"bu1":{"au":[],"r":[]},"bjN":{"au":[],"r":[]},"aAp":{"ah":["Z8"]},"aca":{"au":[],"r":[]},"bgq":{"au":[],"r":[]},"ac9":{"au":[],"r":[]},"bgp":{"au":[],"r":[]},"aAq":{"au":[],"r":[]},"aGB":{"au":[],"r":[]},"Jf":{"au":[],"r":[]},"aog":{"ag":[],"r":[]},"Zt":{"ag":[],"r":[]},"Zu":{"ag":[],"r":[]},"aC_":{"ah":["aog"]},"bcL":{"au":[],"r":[]},"abs":{"au":[],"r":[]},"bcJ":{"au":[],"r":[]},"bcO":{"au":[],"r":[]},"aBZ":{"ah":["Zt"]},"bhU":{"ah":["Zu"]},"aX3":{"au":[],"r":[]},"a5k":{"ag":[],"r":[]},"bhA":{"ah":["a5k"]},"bhz":{"aB":[]},"arb":{"au":[],"r":[]},"Y7":{"ag":[],"r":[]},"Y6":{"ag":[],"r":[]},"XF":{"ag":[],"r":[]},"a0b":{"ag":[],"r":[]},"axf":{"ah":["Y7"]},"axe":{"ah":["Y6"]},"avZ":{"ah":["XF"]},"btU":{"ah":["a0b"]},"F3":{"ag":[],"r":[]},"avS":{"ag":[],"r":[]},"btS":{"ah":["F3"]},"btT":{"ah":["avS"]},"btR":{"aB":[]},"ara":{"ag":[],"r":[]},"aDv":{"ah":["ara"]},"acw":{"au":[],"r":[]},"ar4":{"ag":[],"r":[]},"ar9":{"ag":[],"r":[]},"bjg":{"ah":["ar4"]},"aDu":{"ah":["ar9"]},"Nr":{"ag":[],"r":[]},"aDw":{"ah":["Nr"],"ew":[]},"b6Y":{"iZ":[],"fe":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aPK"),Q:w("qN"),n:w("bq<n,n>"),c5:w("aRF"),dY:w("aRG"),d:w("eQ<n?>"),e:w("H2"),B:w("n4"),P:w("hV"),k:w("kx"),x:w("ay<~>"),f5:w("P<a2b>"),V:w("P<ac>"),t:w("P<qN>"),O:w("P<w>"),ac:w("P<eQ<n?>>"),I:w("P<n4>"),u:w("P<hV>"),_:w("P<kx>"),cl:w("P<ay<ai<a3<n,@>>>>"),R:w("P<n6>"),cq:w("P<ai<+(N,N)>>"),ez:w("P<a3<n,aC>>"),gE:w("P<a3<n,n>>"),c7:w("P<a3<n,@>>"),fD:w("P<ml>"),bp:w("P<o8>"),g:w("P<u>"),v:w("P<hn>"),L:w("P<+(n,n)>"),G:w("P<+(N,N)>"),bF:w("P<+count,id,name(H,n,n)>"),A:w("P<cP>"),s:w("P<n>"),aS:w("P<iO>"),p:w("P<r>"),C:w("P<fe>"),D:w("P<ld>"),fp:w("P<Jk>"),M:w("P<Js>"),gZ:w("P<aFy>"),Y:w("P<adI>"),E:w("P<aHy>"),F:w("P<N>"),dC:w("P<H>"),dS:w("P<aB?>"),d4:w("P<n?>"),J:w("cq<ah<ag>>"),b:w("ai<n4>"),do:w("ai<hV>"),r:w("ai<kx>"),U:w("ai<a3<n,@>>"),gk:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),h:w("ai<n>"),c:w("ai<ld>"),j:w("ai<@>"),fK:w("bu<n,n>"),d2:w("bu<n,ai<a3<n,@>>>"),a:w("a3<n,@>"),f:w("a3<@,@>"),gv:w("K<n,H4>"),w:w("iz"),g2:w("r6"),bV:w("an5"),fL:w("co"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(N,ai<hV>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bn<N>"),gc:w("dD"),b4:w("cw<H>"),W:w("kb<n>"),l:w("r"),cM:w("fe"),i:w("ld"),cc:w("Ff"),bw:w("ac9<n?>"),cy:w("Ju"),q:w("mU"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),eK:w("ai<kx>?"),m:w("aof?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),X:w("+qrPayload,token,usesRemaining(n,n,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("pL?"),T:w("n?"),aD:w("dD?"),o:w("ld?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aW6=new A.bp(B.he,B.bE,B.he,B.bE)
D.a9j=new A.bp(B.he,B.k2,B.he,B.k2)
D.aWi=new A.bp(B.ii,B.bE,B.bE,B.bE)
D.aWm=new A.aA(B.cZ,1.4,B.q,-1)
D.aWw=new A.aA(B.ad,1,B.q,-1)
D.aXW=new A.aY(0,1/0,64,1/0)
D.aY_=new A.aY(0,84,0,1/0)
D.awy=w([B.lD,B.qG,B.c],x.O)
D.bSn=new A.a7(B.ax,B.aC,B.x,D.awy,null,null)
D.aYK=new A.o(null,null,null,null,null,D.bSn,B.n)
D.cWE=w([B.aU,B.bU],x.O)
D.bUs=new A.a7(B.b0,B.b6,B.x,D.cWE,null,null)
D.aZ3=new A.o(null,null,null,null,null,D.bUs,B.n)
D.b4b=new A.fi(null,null,null,null,null,E.jL,null,null,null,null)
D.aaC=new A.cp(B.A,null,null,D.b4b,null)
D.kb=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eW0=new A.G(!0,D.kb,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdS=new A.x("No books on the shelf yet.",null,D.eW0,null,null,null,null,null,null,null,null,null)
D.e32=new A.C(B.nR,D.fdS,null)
D.b2J=new A.cp(B.A,null,null,D.e32,null)
D.b3C=new A.cp(B.A,null,null,Z.V5,null)
D.b5B=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b63=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.abL=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b8F=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b8W=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.ad1=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bcF=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bd3=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.Eo=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.beC=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bgW=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.aeE=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.f8w=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bmb=new A.eQ(null,D.f8w,B.f1,null,x.d)
D.fh2=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bmd=new A.eQ(null,D.fh2,B.f1,null,x.d)
D.bmL=new A.b9(38e5)
D.bnv=new A.i9(0,10,0,10)
D.bnF=new A.Q(0,1,0,0)
D.bnP=new A.i9(0,4,0,4)
D.bo6=new A.Q(10,10,14,10)
D.boi=new A.i9(10,4,10,4)
D.boq=new A.i9(10,8,10,8)
D.bor=new A.Q(10,8,8,8)
D.boR=new A.Q(12,6,12,2)
D.bp8=new A.Q(14,10,6,6)
D.bp9=new A.Q(14,12,14,0)
D.bpd=new A.Q(14,12,14,8)
D.bpg=new A.Q(14,12,8,14)
D.bpk=new A.i9(14,14,14,14)
D.bpZ=new A.Q(16,2,16,10)
D.bq8=new A.Q(16,6,16,30)
D.bqa=new A.Q(16,6,16,8)
D.agY=new A.Q(18,16,18,8)
D.bqL=new A.Q(18,20,18,22)
D.ah1=new A.Q(18,24,18,24)
D.bqR=new A.Q(18,30,18,30)
D.br8=new A.Q(20,10,12,20)
D.brm=new A.Q(20,18,16,18)
D.bro=new A.Q(20,18,20,6)
D.bsc=new A.Q(24,32,24,28)
D.bsd=new A.Q(24,36,24,32)
D.bsh=new A.Q(26,26,24,14)
D.bsv=new A.Q(2,4,2,8)
D.bsz=new A.Q(30,0,30,0)
D.bsK=new A.Q(38,22,22,22)
D.ahj=new A.Q(40,24,24,24)
D.bsM=new A.i9(40,40,40,40)
D.bsO=new A.Q(46,30,30,30)
D.ahm=new A.Q(4,0,0,8)
D.btf=new A.Q(56,40,40,40)
D.btj=new A.Q(1.25,1.25,1.25,1.25)
D.btk=new A.Q(60,0,60,0)
D.btn=new A.Q(6,14,6,16)
D.btz=new A.i9(7,3,7,3)
D.bu4=new A.Q(5,1.5,5,1.5)
D.buf=new A.Q(6,2.5,6,2.5)
D.fsL=new A.x("Signature",null,B.np,null,null,null,null,null,null,null,null,null)
D.buA=new A.bD(1,B.bi,D.fsL,null)
D.fpY=new A.x("Tell the AI what to fix",null,B.du,null,null,null,null,null,null,null,null,null)
D.bvk=new A.bD(1,B.bi,D.fpY,null)
D.f2e=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frT=new A.x("Worksheets",null,D.f2e,null,null,null,null,null,null,null,null,null)
D.f2m=new A.G(!0,E.abj,null,null,null,null,13,B.cu,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqO=new A.x("Track your project spending",null,D.f2m,null,null,null,null,null,null,null,null,null)
D.cOY=w([D.frT,B.at,D.fqO],x.p)
D.bjK=new A.fq(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cOY,null)
D.bvp=new A.bD(1,B.bi,D.bjK,null)
D.eYy=new A.G(!0,E.jL,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7K=new A.x("FAMILY LIBRARY",null,D.eYy,null,null,null,null,null,null,null,null,null)
D.bvG=new A.bD(1,B.bi,D.f7K,null)
D.M7=new C.H2("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.YW=new C.H3(0,"male")
D.aie=new C.H3(1,"female")
D.xA=new C.H3(2,"unknown")
D.tA=new C.ajy(0,"owner")
D.M8=new C.ajy(1,"editor")
D.ki=new C.ajy(2,"viewer")
D.aj0=new A.a0(61199,"MaterialIcons",!1)
D.bzB=new A.a0(61504,"MaterialIcons",!1)
D.bzC=new A.a0(61505,"MaterialIcons",!1)
D.bzE=new A.a0(61587,"MaterialIcons",!1)
D.bzK=new A.a0(61890,"MaterialIcons",!1)
D.bAD=new A.a0(63034,"MaterialIcons",!0)
D.bBs=new A.a0(63429,"MaterialIcons",!1)
D.alh=new A.a0(984520,"MaterialIcons",!1)
D.bA9=new A.a0(62776,"MaterialIcons",!1)
D.bDN=new A.ae(D.bA9,26,B.aZ,null,null,null)
D.byA=new A.a0(57648,"MaterialIcons",!1)
D.bE4=new A.ae(D.byA,14,B.c,null,null,null)
D.bEl=new A.ae(B.Fw,17,null,null,null,null)
D.bER=new A.ae(E.ZP,null,null,null,null,null)
D.bEU=new A.ae(B.jg,18,E.jL,null,null,null)
D.ZB=new A.a0(62044,"MaterialIcons",!1)
D.bF_=new A.ae(D.ZB,null,B.aU,null,null,null)
D.bFP=new A.ae(B.dW,16,null,null,null,null)
D.bFW=new A.ae(D.ZB,32,B.aU,null,null,null)
D.bGd=new A.ae(E.aj1,18,B.cZ,null,null,null)
D.bHg=new A.ae(B.FG,22,B.ay,null,null,null)
D.bHs=new A.ae(B.dW,22,B.aZ,null,null,null)
D.bHD=new A.ae(Q.ZG,22,B.c,null,null,null)
D.bHI=new A.ae(B.tJ,52,B.c,null,null,null)
D.bHS=new A.ae(B.FG,30,B.ay,null,null,null)
D.alU=new A.ae(B.tS,22,B.c,null,null,null)
D.bIj=new A.ae(B.dW,17,null,null,null,null)
D.bIC=new A.ae(B.vu,26,B.cZ,null,null,null)
D.bJl=new A.ae(B.a_0,16,null,null,null,null)
D.bK4=new A.ae(B.tJ,24,B.c,null,null,null)
D.bK9=new A.ae(B.MA,20,B.rc,null,null,null)
D.bKe=new A.ae(B.Fu,null,B.bU,null,null,null)
D.bKl=new A.ae(B.jg,18,B.c,null,null,null)
D.bKX=new A.ae(B.cy,22,B.ad,null,null,null)
D.bLM=new A.ae(B.e4,16,B.ad,null,null,null)
D.bLY=new A.ae(D.ZB,20,B.aU,null,null,null)
D.amk=new A.ae(B.hy,20,null,null,null,null)
D.bMs=new A.ae(B.cy,18,D.kb,null,null,null)
D.bMK=new A.ae(B.xW,28,B.c,null,null,null)
D.bMS=new A.ae(B.Mq,null,B.fY,null,null,null)
D.bNb=new A.ae(B.xW,24,B.c,null,null,null)
D.bNC=new A.ae(B.tJ,null,B.aU,null,null,null)
D.bND=new A.ae(B.jz,20,B.cZ,null,null,null)
D.bNX=new A.ae(B.Fw,16,null,null,null,null)
D.bPt=new A.e1(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ey,!0,null,null,null,null)
D.d2I=w([B.bt,B.aU,B.f7,B.aZ],x.O)
D.bQQ=new A.a7(B.ax,B.aC,B.x,D.d2I,null,null)
D.bdA=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.biO=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cLZ=w([D.bdA,D.biO],x.O)
D.bR0=new A.a7(B.b0,B.b6,B.x,D.cLZ,null,null)
D.cYm=w([B.eX,B.fu,B.f7],x.O)
D.bR4=new A.a7(B.ax,B.aC,B.x,D.cYm,null,null)
D.adC=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b64=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cNT=w([D.adC,D.b64],x.O)
D.bRD=new A.a7(B.b0,B.b6,B.x,D.cNT,null,null)
D.b96=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.avX=w([D.b96,D.adC],x.O)
D.bRX=new A.a7(B.ax,B.aC,B.x,D.avX,null,null)
D.acA=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bb9=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cXy=w([D.acA,D.bb9],x.O)
D.bSy=new A.a7(B.a3,B.a7,B.x,D.cXy,null,null)
D.d8I=w([B.bI,B.mS],x.O)
D.bSA=new A.a7(B.b0,B.b6,B.x,D.d8I,null,null)
D.bdw=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.d9z=w([D.bdw,D.kb,D.kb,Aj.Wq],x.O)
D.dbK=w([0,0.07,0.9,1],x.F)
D.bT4=new A.a7(B.a3,B.a7,B.x,D.d9z,D.dbK,null)
D.bTf=new A.a7(B.ax,B.aC,B.x,B.Q5,null,null)
D.d8j=w([B.aZ,B.aU,B.bU],x.O)
D.bUe=new A.a7(B.ax,B.aC,B.x,D.d8j,null,null)
D.ceD=w([B.bt,B.aZ,B.eX],x.O)
D.ceK=w([B.by,B.aE,B.jr],x.O)
D.ceM=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bcb=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.ckQ=w([D.bcb,E.adk],x.O)
D.dZT=new A.u(1,2)
D.eHK=new A.cP(B.aX,D.dZT,3)
D.at5=w([D.eHK],x.A)
D.cs3=w([B.h0,B.c8,B.f6],x.O)
D.cuH=w([B.bJ,B.bv,B.bm],x.O)
D.bw8=new C.u0("classic","Classic leather","Gold-edged brown leather",D.avX,E.jL,E.jL,"\u2766",B.L,!0,!1,!1,!1)
D.b5o=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bhM=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cQx=w([D.b5o,D.bhM],x.O)
D.adn=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bw3=new C.u0("ornate","Ornate gold","Double gold border and flourishes",D.cQx,D.adn,D.adn,"\u2726",B.L,!0,!0,!0,!1)
D.b8N=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.beg=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cJ1=w([D.b8N,D.beg],x.O)
D.bw2=new C.u0("parchment","Parchment","Old paper with dark ink",D.cJ1,D.Eo,G.ir,"\u2767",B.L,!0,!1,!1,!0)
D.ab1=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bgf=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d6K=w([D.ab1,D.bgf],x.O)
D.bbM=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bfD=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bw5=new C.u0("minimal","Clean paper","Plain and elegant, like a printed book",D.d6K,D.bbM,D.bfD,"",B.L,!0,!0,!1,!0)
D.bw7=new C.u0("midnight","Midnight","Deep blue with silver stars",L.awf,B.cp,B.bM,"\u2727",B.L,!0,!0,!1,!1)
D.bw1=new C.u0("emerald","Emerald library","Green cloth, title on the left",A_.atu,E.jL,B.h1,"\u25c6",B.bg,!0,!1,!1,!1)
D.bgD=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d5b=w([B.er,D.bgD],x.O)
D.bcN=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bdT=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bw6=new C.u0("rose","Rose vintage","Burgundy with rose-gold lettering",D.d5b,D.bcN,D.bdT,"\u2740",B.L,!0,!1,!0,!1)
D.d9c=w([B.cE,P.mU],x.O)
D.bw4=new C.u0("modern","Modern","Dark, bold, left-aligned",D.d9c,B.aV,B.c,"",B.bg,!1,!0,!1,!1)
D.a0W=w([D.bw8,D.bw3,D.bw2,D.bw5,D.bw7,D.bw1,D.bw6,D.bw4],A.ax("P<u0>"))
D.cIy=w([B.bU,B.bj],x.O)
D.bdm=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cJd=w([D.ab1,D.bdm],x.O)
D.b8K=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cKL=w([D.b8K,B.db],x.O)
D.cMc=w([B.b7,B.iK,B.oj],x.O)
D.cMz=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b60=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.baw=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.dbG=w([D.acA,D.b60,D.baw],x.O)
D.bw9=new C.u1("leather","Leather",D.dbG,"vintage")
D.cTs=w([B.dq,B.Ks,A3.VB],x.O)
D.bwg=new C.u1("midnight","Midnight",D.cTs,"starry")
D.cMd=w([B.ff,B.e9,B.l3],x.O)
D.bwf=new C.u1("forest","Forest",D.cMd,"story")
D.ddw=w([B.eM,B.er,B.kc],x.O)
D.bwc=new C.u1("burgundy","Burgundy",D.ddw,"royal")
D.cuh=w([B.aE,B.pi,B.ny],x.O)
D.bwd=new C.u1("royal","Royal",D.cuh,"royal")
D.cOu=w([B.bv,B.cE,P.mU],x.O)
D.bwa=new C.u1("charcoal","Charcoal",D.cOu,"geo")
D.dbO=w([B.cb,B.dO,B.wU],x.O)
D.bwe=new C.u1("sunset","Sunset",D.dbO,"sunset")
D.dcr=w([B.iK,B.Ep,B.VF],x.O)
D.bwb=new C.u1("ocean","Ocean",D.dcr,"band")
D.ys=w([D.bw9,D.bwg,D.bwf,D.bwc,D.bwd,D.bwa,D.bwe,D.bwb],A.ax("P<u1>"))
D.cOS=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cPo=w([B.ak,B.aK,B.M],x.O)
D.cQC=w([B.er,B.e9,B.dq,B.fv,B.wX,B.cZ,B.jO,B.eu,B.d9],x.O)
D.cQD=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eHL=new A.cP(B.dn,B.dC,8)
D.cQM=w([D.eHL],x.A)
D.cRP=w([B.bV,B.dO,B.kF],x.O)
D.cSg=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cTo=w([B.bV,B.hg],x.O)
D.cVj=w([B.aM,B.Ag,B.wM],x.O)
D.cWa=w([B.bK,B.cj,B.dy,B.aM],x.O)
D.cWF=w([B.j4,B.cb,B.t2],x.O)
D.cX7=w([B.eX,B.cZ],x.O)
D.cXD=w([B.ct,B.fC,B.hu],x.O)
D.cXO=w([B.aV,B.bj,B.dq],x.O)
D.cYj=w([B.es,B.d_,B.e9],x.O)
D.cYA=w([B.dS,B.dq,B.Ks],x.O)
D.cZP=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a1Q=w(["leather","linen","plain","stars","rays"],x.s)
D.bDt=new A.a0(985219,"MaterialIcons",!1)
D.bD1=new A.a0(983781,"MaterialIcons",!1)
D.avH=w([B.ajq,B.hZ,B.lK,B.i_,D.bDt,B.FQ,B.pF,D.bD1,L.al4,B.xY,B.pH,B.mk],A.ax("P<a0>"))
D.a1V=w(["double","single","corners","none"],x.s)
D.d1s=w([B.dz,B.bn,B.eu],x.O)
D.d1F=w([],x.t)
D.BR=w([],x.u)
D.d3R=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d64=w([B.aH,B.fC,B.fv],x.O)
D.d7k=w([B.cn,B.ol,B.WA],x.O)
D.d7x=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dq2=new C.lu("construction","Construction","Jobsite & builds",B.xN)
D.dq9=new C.lu("house","Home Build","Houses & rooms",B.vp)
D.dq_=new C.lu("grocery","Grocery","Store & pantry",B.a_x)
D.dpZ=new C.lu("calculator","Calculations","Math & estimates",B.ML)
D.dq7=new C.lu("lumber","Materials","Lumber & supplies",B.N1)
D.dpW=new C.lu("kitchen","Kitchen","Remodel & meals",A9.ake)
D.bCZ=new A.a0(983756,"MaterialIcons",!1)
D.dq0=new C.lu("landscape","Landscaping","Yard & garden",D.bCZ)
D.dpV=new C.lu("plumbing","Plumbing","Pipes & water",B.pQ)
D.dqa=new C.lu("electrical","Electrical","Wiring & power",B.h8)
D.dpT=new C.lu("store","Retail Shop","Daily business",B.kM)
D.dpU=new C.lu("paint_remodel","Paint & Remodel","Colors & walls",Aa.a_6)
D.bCo=new A.a0(983311,"MaterialIcons",!1)
D.dq6=new C.lu("roofing","Roofing","Roofs & exteriors",D.bCo)
D.bDb=new A.a0(983986,"MaterialIcons",!1)
D.dpS=new C.lu("warehouse","Warehouse","Storage & stock",D.bDb)
D.dq4=new C.lu("vehicles","Vehicles","Fleet & transport",B.FR)
D.bAb=new A.a0(62785,"MaterialIcons",!1)
D.dpY=new C.lu("farm","Farm","Crops & livestock",D.bAb)
D.dpX=new C.lu("restaurant","Restaurant","Food & catering",B.tQ)
D.dq3=new C.lu("tools","Tools","Workshop gear",B.FN)
D.dq8=new C.lu("wallet","Cash & Wallet","Quick spending",B.jz)
D.bBn=new A.a0(63395,"MaterialIcons",!1)
D.dq5=new C.lu("concrete","Concrete","Foundation work",D.bBn)
D.dq1=new C.lu("blueprint","Blueprint","Plans & design",Af.ajw)
D.a2l=w([D.dq2,D.dq9,D.dq_,D.dpZ,D.dq7,D.dpW,D.dq0,D.dpV,D.dqa,D.dpT,D.dpU,D.dq6,D.dpS,D.dq4,D.dpY,D.dpX,D.dq3,D.dq8,D.dq5,D.dq1],A.ax("P<lu>"))
D.d80=w([B.bq,B.bn],x.O)
D.d8J=w([B.i5,B.nC,B.dE],x.O)
D.a2t=w(["top","middle","bottom"],x.s)
D.db4=w([B.cs,B.bj,B.dq],x.O)
D.dbB=w([B.b8,B.d_,B.e9],x.O)
D.ddr=w([B.bJ,B.ak],x.O)
D.dds=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dXA={top:0,middle:1,bottom:2}
D.dgE=new A.bq(D.dXA,["Top","Middle","Bottom"],x.n)
D.dXe={double:0,single:1,corners:2,none:3}
D.dgJ=new A.bq(D.dXe,["Double line","One line","Corners","None"],x.n)
D.dYl={leather:0,linen:1,plain:2,stars:3,rays:4}
D.di6=new A.bq(D.dYl,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dii=new A.bq(B.ie,[],A.ax("bq<H,+(n,n)>"))
D.dXs={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.C1=new A.bq(D.dXs,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bq<n,H>"))
D.dkC=new F.Mk(32,null)
D.dkD=new F.Mk(40,null)
D.dkE=new F.Mk(46,null)
D.aEP=new C.ar9(null)
D.e_Q=new A.u(8,14)
D.feu=new A.x("Write a new book",null,B.i3,null,B.L,null,null,null,null,null,null,null)
D.e2w=new A.C(B.l7,D.feu,null)
D.alv=new A.ae(B.hx,18,B.c,null,null,null)
D.f84=new A.x("Add",null,B.mB,null,null,null,null,null,null,null,null,null)
D.cWp=w([D.alv,B.q6,D.f84],x.p)
D.eFI=new A.cl(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cWp,null)
D.e2Q=new A.C(B.nQ,D.eFI,null)
D.e2R=new A.C(E.afN,Z.V5,null)
D.f29=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb3=new A.x("New Project",null,D.f29,null,null,null,null,null,null,null,null,null)
D.d_a=w([D.alv,B.ab,D.fb3],x.p)
D.eFL=new A.cl(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d_a,null)
D.e31=new A.C(B.iR,D.eFL,null)
D.fdj=new A.x("Choose your header",null,U.rx,null,null,null,null,null,null,null,null,null)
D.e3m=new A.C(B.hJ,D.fdj,null)
D.b4q=new A.fi(2.2,null,null,null,null,B.cZ,null,null,null,null)
D.eKo=new A.a6(22,22,D.b4q,null)
D.b2F=new A.cp(B.A,null,null,D.eKo,null)
D.e3r=new A.C(B.Xv,D.b2F,null)
D.bpt=new A.Q(14,2,14,6)
D.fqx=new A.x("The top of your book. Tap a design to see it.",null,T.SN,null,null,null,null,null,null,null,null,null)
D.e3s=new A.C(D.bpt,D.fqx,null)
D.e5_=new A.iM(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e52=new A.iM(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aG2=new A.iM(1,0.9607843137254902,0.48627450980392156,0)
D.HR=new A.iM(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.yZ=new A.iM(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e58=new A.iM(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fLY=new C.bfu(null)
D.bkD=new A.mc(D.fLY,null,B.au,null,null)
D.aJH=new A.cK(0,0,0,0,null,null,D.bkD,null)
D.esd=new A.y(-42,42)
D.eAx=new A.cL([0,0,1,1])
D.aKZ=new A.aa(0,0,520,160)
D.aLb=new A.b7(B.rL,B.Y)
D.fq5=new A.x("Let the AI write it from your tree",null,B.kv,null,B.L,null,null,null,null,null,null,null)
D.bwN=new A.dm(1,B.ci,D.fq5,null)
D.cTn=w([E.a0_,B.ab,D.bwN],x.p)
D.eFq=new A.cl(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cTn,null)
D.f7L=new A.x("Save member",null,B.cc,null,null,null,null,null,null,null,null,null)
D.d6l=w([D.amk,B.ab,D.f7L],x.p)
D.eFy=new A.cl(B.aO,B.bb,B.j,B.m,null,B.p,null,0,D.d6l,null)
D.bHx=new A.ae(B.hK,14,B.aZ,null,null,null)
D.eXe=new A.G(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbt=new A.x("Cashier",null,D.eXe,null,null,null,null,null,null,null,null,null)
D.d_G=w([D.bHx,B.bp,D.fbt],x.p)
D.eFA=new A.cl(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d_G,null)
D.f7M=new A.x("Transfer & settings",null,B.du,null,null,null,null,null,null,null,null,null)
D.bvb=new A.bD(1,B.bi,D.f7M,null)
D.cLI=w([D.alU,B.av,D.bvb],x.p)
D.eFB=new A.cl(B.aO,B.e,B.j,B.m,null,B.p,null,0,D.cLI,null)
D.eJ7=new A.at(16,40)
D.eJc=new A.at(22,64)
D.eJj=new A.at(280,88)
D.eK3=new A.a6(30,null,null,null)
D.eLm=new A.hJ(2,12,12,1.05,null)
D.fb9=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eM4=new A.b1(D.fb9,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fbo=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aN0=new A.b1(D.fbo,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fji=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eMy=new A.b1(D.fji,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ftk=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eMD=new A.b1(D.ftk,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fdh=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eMK=new A.b1(D.fdh,null,null,null,null,null,null,null,null,null,null,null,null,B.fG,!1,null,null,null,B.r,null)
D.fqK=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aN4=new A.b1(D.fqK,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.f8l=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eN9=new A.b1(D.f8l,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fu_=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eNT=new A.b1(D.fu_,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fp3=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eOh=new A.b1(D.fp3,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fto=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eOk=new A.b1(D.fto,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fkP=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eOm=new A.b1(D.fkP,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ff4=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eOn=new A.b1(D.ff4,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ff5=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ePn=new A.b1(D.ff5,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fbb=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.ePF=new A.b1(D.fbb,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fcZ=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.ePY=new A.b1(D.fcZ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fkk=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eQd=new A.b1(D.fkk,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ffS=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eQe=new A.b1(D.ffS,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.eTd=new A.G(!0,D.kb,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTD=new A.G(!0,D.kb,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUg=new A.rp(!0,B.rl,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUx=new A.G(!0,D.kb,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eV4=new A.G(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6H=new A.rp(!0,B.Rr,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eW3=new A.G(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWs=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY_=new A.G(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY3=new A.G(!0,G.ir,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZi=new A.G(!0,B.M,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f__=new A.G(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_J=new A.G(!0,B.bU,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_N=new A.G(!0,B.bI,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f08=new A.G(!0,D.Eo,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0h=new A.G(!0,B.aZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1f=new A.G(!0,B.cZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1J=new A.G(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f27=new A.G(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3y=new A.G(!0,B.ak,null,null,null,null,11.5,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3G=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPe=new A.G(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7a=new A.G(!0,B.ak,null,null,null,null,12,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5m=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5K=new A.G(!0,G.ir,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5R=new A.G(!0,G.ir,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6B=new A.x("Themes",null,B.oY,null,null,null,null,null,null,null,null,null)
D.f7d=new A.x("Add Item",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eXJ=new A.G(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7B=new A.x("Debt receipt",null,D.eXJ,null,B.L,null,null,null,null,null,null,null)
D.aP9=new A.G(!0,B.ak,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7S=new A.x("Person who owes",null,D.aP9,null,null,null,null,null,null,null,null,null)
D.f8O=new A.x("Notes",null,B.a6O,null,null,null,null,null,null,null,null,null)
D.f9d=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eWK=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9h=new A.x("Share",null,D.eWK,null,null,null,null,null,null,null,null,null)
D.fab=new A.x("Move your family trees",null,D.aPe,null,null,null,null,null,null,null,null,null)
D.faM=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fbn=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fcz=new A.x("Remove this book?",null,B.ho,null,null,null,null,null,null,null,null,null)
D.aPE=new A.x("Download",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fdF=new A.x("What should the AI do?",null,B.du,null,null,null,null,null,null,null,null,null)
D.ff0=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fg6=new A.x("Ribbon bookmark",null,B.iF,null,null,null,null,null,null,null,null,null)
D.f3s=new A.G(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgA=new A.x("NGMY.ORG",null,D.f3s,null,B.L,null,null,null,null,null,null,null)
D.fhP=new A.x("Scan family tree QR",null,B.cw,null,null,null,null,null,null,null,null,null)
D.f00=new A.G(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiy=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.f00,null,B.L,null,null,null,null,null,null,null)
D.fjK=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fjR=new A.x("Thumbnail",null,B.oY,null,null,null,null,null,null,null,null,null)
D.fkq=new A.x("Save the cover",null,B.cw,null,null,null,null,null,null,null,null,null)
D.fkQ=new A.x("Your photos",null,B.oY,null,null,null,null,null,null,null,null,null)
D.fl4=new A.x("Create Project",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fly=new A.x("Design your cover",null,U.rx,null,null,null,null,null,null,null,null,null)
D.flE=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.flH=new A.x("PICTURE",null,H.mC,null,null,null,null,null,null,null,null,null)
D.fm2=new A.x("Paid",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fm4=new A.x("You can undo it right after.",null,T.SW,null,null,null,null,null,null,null,null,null)
D.fmA=new A.x("Print",null,B.ut,null,null,null,null,null,null,null,null,null)
D.fmW=new A.x("Amount owed",null,D.aP9,null,null,null,null,null,null,null,null,null)
D.fn9=new A.x("Got it",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fnJ=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fnM=new A.x("Add to budget",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fod=new A.x("Debtor signature",null,B.a6O,null,null,null,null,null,null,null,null,null)
D.fol=new A.x("Change icon",null,E.aOs,null,null,null,null,null,null,null,null,null)
D.fpw=new A.x("Family tree QR",null,B.cw,null,null,null,null,null,null,null,null,null)
D.fpW=new A.x("Download",null,B.ut,null,null,null,null,null,null,null,null,null)
D.fq_=new A.x("Change",null,B.oY,null,null,null,null,null,null,null,null,null)
D.fqQ=new A.x("Clear all",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fqT=new A.x("WHAT SHOULD IT CHANGE?",null,H.mC,null,null,null,null,null,null,null,null,null)
D.frs=new A.x("COLOUR",null,H.mC,null,null,null,null,null,null,null,null,null)
D.frE=new A.x("Do it",null,B.cw,null,null,null,null,null,null,null,null,null)
D.frH=new A.x("Create Tree",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fsF=new A.x("Create Family Tree",null,B.eV,null,null,null,null,null,null,null,null,null)
D.eSb=new A.G(!0,E.jL,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsV=new A.x("Write the first page myself",null,D.eSb,null,null,null,null,null,null,null,null,null)
D.ftr=new A.x("Use this header",null,B.cw,null,null,null,null,null,null,null,null,null)
D.ftx=new A.x("Create Project",null,E.aOT,null,null,null,null,null,null,null,null,null)
D.fIA=new C.aav(1,"header")
D.a7Z=new C.aav(2,"projects")
D.fIB=new C.aav(3,"cashier")
D.a8_=new C.aav(4,"familyTree")
D.fTT=new C.cuq(0,"start")
D.fTU=new C.cur(0,"start")
D.fIS=new C.XF(null)
D.fJR=new C.Y6(null)
D.dif=new A.bq(B.ie,[],A.ax("bq<n,Ff>"))
D.d21=w([],x.E)
D.d22=w([],x.M)
D.fKn=new C.bcM(D.dif,D.d21,D.d22,0,0,null,null)
D.fMC=new C.Zu(null)
D.a8H=new C.aIf(0,"projects")
D.aTL=new C.aIf(1,"cashier")
D.fRQ=new C.aIf(2,"familyTree")})()};
(a=>{a["EqJUNS8u214JBWqCmnz1quVvOg8="]=a.current})($__dart_deferred_initializers__);