((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,N,R,A0,G,F,E,A1,A2,A3,A4,S,T,A5,A6,M,A7,H,A8,A9,U,V,W,Aa,Ab,X,Ac,Ad,Ae,Y,Af,Ag,K,Ah,Z,A_,O,Ai,L,P,C={
bB1(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bB1=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v2(null,""),$async$bB1)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.U(y.j)
t=A.mY(b1)
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
f.push(A.E(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.R.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qC(t,a1,B.hj,E.ED),$async$bB1)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.PC(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ac(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.U(l!=null&&A.Km(l)?y.l:y.i)
for(j=J.a8(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cz
g=a8.h(0,"title")
a9=B.a.i(A.t(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.t(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.z(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1m(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bB1,v)},
afI(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$afI=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v2(null,""),$async$afI)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.U(y.j)
t=A.mY(b6)
s=x.S
r=A.dc(c1,0,A.dJ(4,"count",s),A.T(c1).c)
q=F.a19(new A.J(r,new C.fsG(),r.$ti.k("J<ai.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fsF(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$afI)
case 6:l=c5
k=F.PC(l==null?"":l)
if(k==null)throw A.U("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.amS(s,D.dgp,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a2.push(A.E(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.R.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$afI)
case 10:l=c5
k=l==null?null:F.PC(l)
if(k==null)throw A.U(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d7(a8,d),a5=J.aX(a2.a),a2=a2.$ti,a7=new A.kS(a5,a2.k("kS<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gU(a5))
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
h.n(0,i,new A.z(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bc<2>")
p=A.cD(new A.bc(h,s),new C.fsH(),s.k("H.E"),p)
p=F.a19(A.p2(p,3,A.a3(p).k("H.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cz<1>")
b4=A.B(new A.cz(h,s),s.k("H.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1m(s,b9),$async$afI)
case 13:b5=c5
for(s=J.a8(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.amS(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afI,v)},
hgu(d,e,f){return A.c9(null,B.w.j(0.65),!1,null,new C.fBM(e,f),d,null,!0,!0,x.g2)},
amS:function amS(d,e,f){this.a=d
this.b=e
this.c=f},
fsG:function fsG(){},
fsF:function fsF(d){this.a=d},
fsH:function fsH(){},
fBM:function fBM(d,e){this.a=d
this.b=e},
byS(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$byS=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b8(b1,new C.fi1())){u=null
w=1
break}t=B.d.d9(b1,new C.fi2())
s=$.X()
r=new A.rQ()
q=A.Gw(r,D.aKq)
p=A.M()
p.r=B.c.gp(0)
q.aY(D.aKq,p)
o=A.M()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fz
n=new C.fi7(t)
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
return A.b(r.qg().z_(520,160),$async$byS)
case 4:w=3
return A.b(b3.hm(B.fS),$async$byS)
case 3:b0=b3
u=b0==null?null:J.fa(B.dG.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byS,v)},
fqm(d){return C.hUH(d)},
hUH(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fqm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bdM()
n=d.x!=null&&d.yG(null).length===0
if(d.x!=null)t=n?D.yR:D.HF
else t=d.gSU()?D.HF:D.aFw
w=3
return A.b(C.byS(d.ax),$async$fqm)
case 3:s=f
p.a=null
if(s!=null)p.a=A.alB(s)
r=A.a3g(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aFw}else{p.c=C.wo(q,!0)
p.b=n?D.yR:D.HF}r.a1Y(A.fLG(new C.fqo(p,d,new C.fqp(),t,n,o),null,D.brM,B.vM))
u=r.jQ(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fqm,v)},
fx_(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fx_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fqm(d),$async$fx_)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aJ(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A6.FZ(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fx_,v)},
fi1:function fi1(){},
fi2:function fi2(){},
fi7:function fi7(d){this.a=d},
fqp:function fqp(){},
fqo:function fqo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fqn:function fqn(){},
fCd(d,e){var w=0,v=A.j(x.H)
var $async$fCd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.c9(null,B.w.j(0.55),!0,null,new C.fCh(new A.cp(null,x.J),e),d,null,!0,!0,x.H),$async$fCd)
case 2:return A.h(null,v)}})
return A.i($async$fCd,v)},
bBv(d,e,f,g){return C.i14(d,e,f,g)},
i14(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bBv=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cB.aI(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.R(D.eNh)
w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.fC9(g,r,f),d,null,!0,!0,x.H),$async$bBv)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bBv,v)},
fCi(d,e){var w=0,v=A.j(x.H)
var $async$fCi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.c9(null,null,!0,null,new C.fCl(new A.cp(null,x.J),e),d,null,!0,!0,x.H),$async$fCi)
case 2:return A.h(null,v)}})
return A.i($async$fCi,v)},
aWU:function aWU(d,e){this.c=d
this.a=e},
c_o:function c_o(){},
b8W:function b8W(d,e){this.b=d
this.a=e},
fCh:function fCh(d,e){this.a=d
this.b=e},
fCe:function fCe(d){this.a=d},
fCf:function fCf(d,e,f){this.a=d
this.b=e
this.c=f},
fCg:function fCg(d,e){this.a=d
this.b=e},
fC9:function fC9(d,e,f){this.a=d
this.b=e
this.c=f},
fC7:function fC7(d){this.a=d},
fC8:function fC8(d,e,f){this.a=d
this.b=e
this.c=f},
fCl:function fCl(d,e){this.a=d
this.b=e},
fCj:function fCj(d){this.a=d},
fCk:function fCk(d,e,f){this.a=d
this.b=e
this.c=f},
fls(d,e){var w=0,v=A.j(x.y),u,t
var $async$fls=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0V(d),$async$fls)
case 3:t=g
J.nh(t,new C.flt(e))
u=A.agl(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fls,v)},
flt:function flt(d){this.a=d},
amZ:function amZ(d,e,f){this.c=d
this.d=e
this.a=f},
aBd:function aBd(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dCS:function dCS(d,e){this.a=d
this.b=e},
dCD:function dCD(d,e){this.a=d
this.b=e},
dCG:function dCG(d,e,f){this.a=d
this.b=e
this.c=f},
dCF:function dCF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dCE:function dCE(d,e){this.a=d
this.b=e},
dCH:function dCH(d,e){this.a=d
this.b=e},
dCB:function dCB(){},
dCC:function dCC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dCA:function dCA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dCl:function dCl(d){this.a=d},
dCm:function dCm(d,e,f){this.a=d
this.b=e
this.c=f},
dCn:function dCn(d,e){this.a=d
this.b=e},
dCk:function dCk(d){this.a=d},
dCs:function dCs(d,e){this.a=d
this.b=e},
dCj:function dCj(d){this.a=d},
dCt:function dCt(d,e,f){this.a=d
this.b=e
this.c=f},
dCu:function dCu(d,e,f){this.a=d
this.b=e
this.c=f},
dCi:function dCi(d,e){this.a=d
this.b=e},
dCv:function dCv(d,e,f){this.a=d
this.b=e
this.c=f},
dCh:function dCh(d,e){this.a=d
this.b=e},
dCw:function dCw(d,e){this.a=d
this.b=e},
dCg:function dCg(d){this.a=d},
dCx:function dCx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dCe:function dCe(){},
dC8:function dC8(d){this.a=d},
dC9:function dC9(d){this.a=d},
dCf:function dCf(d,e){this.a=d
this.b=e},
dCy:function dCy(d,e){this.a=d
this.b=e},
dCd:function dCd(d){this.a=d},
dCz:function dCz(d){this.a=d},
dCc:function dCc(){},
dCo:function dCo(d,e){this.a=d
this.b=e},
dCb:function dCb(d){this.a=d},
dCp:function dCp(d,e,f){this.a=d
this.b=e
this.c=f},
dCa:function dCa(d,e){this.a=d
this.b=e},
dC7:function dC7(d,e){this.a=d
this.b=e},
dCq:function dCq(d){this.a=d},
dCr:function dCr(d,e,f){this.a=d
this.b=e
this.c=f},
dCV:function dCV(){},
dCW:function dCW(d,e){this.a=d
this.b=e},
dCT:function dCT(d){this.a=d},
dCU:function dCU(d){this.a=d},
dCP:function dCP(d,e){this.a=d
this.b=e},
dCQ:function dCQ(d){this.a=d},
dCI:function dCI(d,e,f){this.a=d
this.b=e
this.c=f},
dCJ:function dCJ(d,e,f){this.a=d
this.b=e
this.c=f},
dCK:function dCK(d,e,f){this.a=d
this.b=e
this.c=f},
dCL:function dCL(d,e,f){this.a=d
this.b=e
this.c=f},
dCM:function dCM(d,e,f){this.a=d
this.b=e
this.c=f},
dCN:function dCN(d,e,f){this.a=d
this.b=e
this.c=f},
dCO:function dCO(d,e,f){this.a=d
this.b=e
this.c=f},
dCX:function dCX(){},
dCY:function dCY(){},
dCZ:function dCZ(){},
dD_:function dD_(d){this.a=d},
dCR:function dCR(d,e){this.a=d
this.b=e},
hcH(d){return B.d.dM(D.a0M,new C.flY(d),new C.flZ())},
tX:function tX(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
flY:function flY(d){this.a=d},
flZ:function flZ(){},
ajk:function ajk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aSH:function aSH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RQ:function RQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcu:function bcu(){this.d=$
this.c=this.a=null},
d2K:function d2K(d,e){this.a=d
this.b=e},
d2I:function d2I(d,e){this.a=d
this.b=e},
d2J:function d2J(){},
d2L:function d2L(d,e){this.a=d
this.b=e},
fYE(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.n3(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
K7(d,e){return C.hTk(d,e)},
hTk(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$K7=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$K7)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.R.aG(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d7(p,x.f)
o=A.cD(o,new C.fnX(),o.$ti.k("H.E"),x.B)
n=A.a3(o).k("a2<H.E>")
o=A.B(new A.a2(o,new C.fnY(),n),n.k("H.E"))
B.d.b1(o,new C.fnZ())
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
return A.i($async$K7,v)},
Ao(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Ao=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$Ao)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fAS(),x.a)
r=A.B(r,r.$ti.k("ai.E"))
w=4
return A.b(t.ar("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$Ao)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ao,v)},
aOU(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aOU=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.K7(d,e),$async$aOU)
case 2:u=h
t=J.cE(u)
s=t.bc(u,new C.fIW(f))
if(s===-1)t.cn(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Ao(d,e,u),$async$aOU)
case 3:return A.h(null,v)}})
return A.i($async$aOU,v)},
bzj(d,e,f){var w=0,v=A.j(x.H),u
var $async$bzj=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.K7(d,e),$async$bzj)
case 2:u=h
J.nh(u,new C.flk(f))
w=3
return A.b(C.Ao(d,e,u),$async$bzj)
case 3:return A.h(null,v)}})
return A.i($async$bzj,v)},
bzy(d,e){return C.hTj(d,e)},
hTj(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bzy=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bzy)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.LX
w=1
break}p=B.R.aG(0,q,null)
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
if(D.BS.ag(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aN(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a2f,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.t(D.a1J,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.t(D.a1E,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.y(o.h(0,"ribbon"),!1)
o=B.d.t(D.cNh,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.GX(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.LX
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.LX
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bzy,v)},
QG(d,e,f){return C.i0B(d,e,f)},
i0B(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$QG=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$QG)
case 7:r=h
w=8
return A.b(r.ar("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.ad(),null)),$async$QG)
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
return A.i($async$QG,v)},
Qa(d,e){return C.hTl(d,e)},
hTl(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Qa=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$Qa)
case 7:r=g
q=r.rR("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.K7(d,e),$async$Qa)
case 8:if(!j.cx(g)){n=B.a.i(d.toLowerCase())
m=J.lk(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Qa)
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
return A.i($async$Qa,v)},
af0(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$af0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qa(d,e),$async$af0)
case 3:s=g
r=J.a8(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.J(s,t)
w=5
return A.b(A.aA(),$async$af0)
case 5:w=4
return A.b(g.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$af0)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$af0,v)},
a1z(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a1z=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Qa(d,e),$async$a1z)
case 2:s=h
J.hJ(s,f)
w=3
return A.b(A.aA(),$async$a1z)
case 3:u=h
w=4
return A.b(u.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a1z)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1z)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1z)
case 6:return A.h(null,v)}})
return A.i($async$a1z,v)},
n3:function n3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fnX:function fnX(){},
fnY:function fnY(){},
fnZ:function fnZ(){},
fAS:function fAS(){},
fIW:function fIW(d){this.a=d},
flk:function flk(d){this.a=d},
GX:function GX(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bLv:function bLv(d){this.a=d},
i0U(d,e,f,g,h,i,j){return A.a5(d,!1).ce(A.ej(new C.fBq(j,i,f,e,h,g),!0,null,x.H))},
Q6(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Q6=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qa(h,g),$async$Q6)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ac(k)>=6){d.I(x.q).f.R(D.aMs)
u=!1
w=1
break}w=4
return A.b(C.hgu(d,f,e),$async$Q6)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.af0(h,g),$async$Q6)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.n3(""+(q+n),l,B.a.i(m.b),new A.S(Date.now(),0,!1)))}w=6
return A.b(C.Ao(h,r,p),$async$Q6)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.QG(h,r,new C.GX("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Q6)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Q6,v)},
fBq:function fBq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Yn:function Yn(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayg:function ayg(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d3p:function d3p(d){this.a=d},
d3o:function d3o(d,e){this.a=d
this.b=e},
d3d:function d3d(d,e){this.a=d
this.b=e},
d3a:function d3a(d,e){this.a=d
this.b=e},
d2M:function d2M(d){this.a=d},
d2N:function d2N(d,e){this.a=d
this.b=e},
d3e:function d3e(d){this.a=d},
d2V:function d2V(d){this.a=d},
d2T:function d2T(d){this.a=d},
d2U:function d2U(d){this.a=d},
d2W:function d2W(d){this.a=d},
d3b:function d3b(d){this.a=d},
d3c:function d3c(){},
d2R:function d2R(d){this.a=d},
d2S:function d2S(d,e){this.a=d
this.b=e},
d2X:function d2X(d){this.a=d},
d2Y:function d2Y(d,e){this.a=d
this.b=e},
d3n:function d3n(d){this.a=d},
d3m:function d3m(d,e){this.a=d
this.b=e},
d3l:function d3l(d){this.a=d},
d37:function d37(d){this.a=d},
d36:function d36(d){this.a=d},
d38:function d38(d){this.a=d},
d2O:function d2O(d,e){this.a=d
this.b=e},
d39:function d39(d,e){this.a=d
this.b=e},
d30:function d30(d){this.a=d},
d31:function d31(d){this.a=d},
d3_:function d3_(){},
d32:function d32(d){this.a=d},
d33:function d33(d){this.a=d},
d34:function d34(d,e){this.a=d
this.b=e},
d35:function d35(d,e,f){this.a=d
this.b=e
this.c=f},
d2Z:function d2Z(d,e){this.a=d
this.b=e},
d3g:function d3g(d){this.a=d},
d3f:function d3f(){},
d3h:function d3h(d){this.a=d},
d3i:function d3i(d){this.a=d},
d3j:function d3j(d){this.a=d},
d3k:function d3k(d,e){this.a=d
this.b=e},
d2P:function d2P(d){this.a=d},
d2Q:function d2Q(d){this.a=d},
Yr:function Yr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcP:function bcP(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d59:function d59(d){this.a=d},
d5a:function d5a(d){this.a=d},
d58:function d58(d){this.a=d},
d5b:function d5b(d){this.a=d},
d57:function d57(d){this.a=d},
d5c:function d5c(d){this.a=d},
d56:function d56(d){this.a=d},
d5d:function d5d(d,e){this.a=d
this.b=e},
d55:function d55(d,e){this.a=d
this.b=e},
d5e:function d5e(d,e){this.a=d
this.b=e},
Yp:function Yp(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
adv:function adv(d,e,f){this.a=d
this.b=e
this.c=f},
ayh:function ayh(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d3E:function d3E(d,e){this.a=d
this.b=e},
d3D:function d3D(d,e){this.a=d
this.b=e},
d3I:function d3I(d){this.a=d},
d3H:function d3H(d,e){this.a=d
this.b=e},
d3F:function d3F(d){this.a=d},
d3G:function d3G(d){this.a=d},
d3J:function d3J(d){this.a=d},
d3K:function d3K(d){this.a=d},
d3C:function d3C(d,e){this.a=d
this.b=e},
d3B:function d3B(d,e){this.a=d
this.b=e},
Jf:function Jf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XG:function XG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cCH:function cCH(d){this.a=d},
cCI:function cCI(){},
cCJ:function cCJ(d){this.a=d},
ba6:function ba6(d,e,f){this.b=d
this.c=e
this.a=f},
b9Y:function b9Y(d,e){this.b=d
this.a=e},
tY:function tY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XY:function XY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ba4:function ba4(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cW8:function cW8(d,e,f){this.a=d
this.b=e
this.c=f},
cW7:function cW7(d,e){this.a=d
this.b=e},
cWx:function cWx(d){this.a=d},
cWk:function cWk(){},
cWy:function cWy(d){this.a=d},
cWj:function cWj(){},
cWz:function cWz(d,e){this.a=d
this.b=e},
cWi:function cWi(d,e){this.a=d
this.b=e},
cWA:function cWA(d,e){this.a=d
this.b=e},
cWh:function cWh(d,e){this.a=d
this.b=e},
cWB:function cWB(d){this.a=d},
cWg:function cWg(){},
cWC:function cWC(d,e){this.a=d
this.b=e},
cWf:function cWf(d,e){this.a=d
this.b=e},
cWD:function cWD(d){this.a=d},
cWs:function cWs(d,e){this.a=d
this.b=e},
cWE:function cWE(d){this.a=d},
cWF:function cWF(d){this.a=d},
cWH:function cWH(d){this.a=d},
cWI:function cWI(d){this.a=d},
cWr:function cWr(d,e){this.a=d
this.b=e},
cWJ:function cWJ(d,e){this.a=d
this.b=e},
aFg:function aFg(d){this.a=d},
bfh:function bfh(d){this.a=d},
b8k:function b8k(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hSi(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.agx(a6),a5=a4.length
if(a5===0)return""
w=A.V(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.by(new A.S(Date.now(),0,!1))
s=new C.fm1(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a2<1>"),q=q.k("cQ<1,n>"),o=q.k("H.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xs)m.push(l===D.YM?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cC(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cC(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jT(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jT(h,a2,a2)-A.jT(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.ag(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.B(new A.cQ(new A.a2(a4,new C.fm_(u,f),p),new C.fm0(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hSj(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.agx(a0),d=e.length
if(d===0)return""
w=x.N
v=A.V(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fm6(v,e)
q=new C.fm4(v)
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
if(d!=null&&v.ag(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.ag(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.d9(new A.bc(p,d),d.k("H.E"))
n=A.B(d,A.a3(d).k("cl.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gah(e),k=new A.fG(l,new C.fm5(p,m));k.C();t=f){j=l.gU(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ag(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hE1(d,e,f,g){var w,v,u=C.hSk(d,e)
if(u<=0||f.length<=u)return new A.ad5(!1,D.BH,f)
if(g.t(0,e.a))return new A.ad5(!1,D.BH,f)
w=A.T(f).c
v=A.dc(f,0,A.dJ(u,"count",x.S),w).dF(0)
return new A.ad5(!0,A.dc(f,u,null,w).dF(0),v)},
hE2(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.agx(d3),d2=d1.length
if(d2===0)return D.fFQ
w=x.N
v=A.V(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.ci(0,t.a,new C.d3R(t))}s=new C.d47(v)
d2=x.h
r=A.V(w,d2)
q=new C.d4_(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d3Z(r)
l=A.V(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cf(l.ci(0,k,new C.d3S()),o)}h=new C.d3Y(s)
g=new C.d3X(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a2<H.E>")
f=A.B(new A.a2(new A.bc(v,p),new C.d3T(h),o),o.k("H.E"))
e=f.length===0?new A.bc(v,p).gL(0):B.d.gL(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.L)(f),++u){t=f[u]
a0=g.$2(t.a,A.aW(w))
if(a0>d){d=a0
e=t}}a1=A.aW(w)
p=x.S
a2=A.V(w,p)
a3=A.V(w,w)
a4=A.V(w,d2)
d2=x.gR
a5=A.V(w,d2)
a6=A.V(w,x.d9)
a7=A.V(w,d2)
a8=A.a([],x.s)
a9=new C.d45(new C.d41(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.V(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gajd(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eu([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.J(0,i))break}if(h.$1(b0)&&a2.ag(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.r_(J.dH(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.V(w,x.cc)
b5=A.a([],x.M)
b6=A.V(w,d2)
b7=new C.d3Q(a2,new C.d46(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=A.B(new A.cz(b4,d2),d2.k("H.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.F7(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Jn(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cz<1>")
d2=A.B(new A.cz(b6,d2),d2.k("H.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bH(0,new C.d3U(c6,b4))
for(d2=new A.cJ(a4,a4.$ti.k("cJ<1,2>")).gah(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aX(c7.b);j.C();){i=j.gU(j)
if(b6.ag(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gah(b5),i=new A.fG(j,new C.d3V(c8));i.C();)o.push(j.gU(0).b)
if(o.length===0)continue
B.d.b1(o,new C.d3W())
c6.push(new C.aHl(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bcz(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hce(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(d)
return w==null?null:w.b[1]},
h6D(d,e,f,g,h,i,j,k,l,m,n){return new C.Z0(k,f,j,e,l,n,m,d,g,h,i,null)},
aAe(d,e,f,g,h,i,j){return new C.bgd(i,d,e,f,j,h,g,null)},
ao4:function ao4(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBO:function aBO(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dQt:function dQt(d){this.a=d},
dQs:function dQs(d){this.a=d},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQw:function dQw(d,e){this.a=d
this.b=e},
dQx:function dQx(d){this.a=d},
dQr:function dQr(d,e){this.a=d
this.b=e},
dQu:function dQu(d){this.a=d},
dQz:function dQz(d){this.a=d},
dQy:function dQy(d,e){this.a=d
this.b=e},
anZ:function anZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBL:function aBL(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dPU:function dPU(d){this.a=d},
dPS:function dPS(d){this.a=d},
dPT:function dPT(d){this.a=d},
dPV:function dPV(d,e){this.a=d
this.b=e},
dPP:function dPP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPn:function dPn(d){this.a=d},
dPo:function dPo(d,e){this.a=d
this.b=e},
dPC:function dPC(d){this.a=d},
dPA:function dPA(d){this.a=d},
dPB:function dPB(d,e){this.a=d
this.b=e},
dPD:function dPD(d){this.a=d},
dPE:function dPE(d,e){this.a=d
this.b=e},
dPO:function dPO(d,e){this.a=d
this.b=e},
dPM:function dPM(d,e){this.a=d
this.b=e},
dPL:function dPL(d,e){this.a=d
this.b=e},
dPH:function dPH(d,e){this.a=d
this.b=e},
dPG:function dPG(d){this.a=d},
dPI:function dPI(d,e){this.a=d
this.b=e},
dPF:function dPF(d){this.a=d},
dPJ:function dPJ(d){this.a=d},
dPK:function dPK(d){this.a=d},
dPN:function dPN(d,e){this.a=d
this.b=e},
dPb:function dPb(d,e){this.a=d
this.b=e},
dPc:function dPc(d,e){this.a=d
this.b=e},
dPX:function dPX(d,e,f){this.a=d
this.b=e
this.c=f},
dPR:function dPR(d,e,f){this.a=d
this.b=e
this.c=f},
dPQ:function dPQ(d){this.a=d},
dPd:function dPd(d){this.a=d},
dPe:function dPe(d){this.a=d},
dPf:function dPf(){},
dPg:function dPg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPk:function dPk(d,e){this.a=d
this.b=e},
dPj:function dPj(d,e){this.a=d
this.b=e},
dPi:function dPi(d){this.a=d},
dPl:function dPl(d,e){this.a=d
this.b=e},
dPh:function dPh(d){this.a=d},
dPW:function dPW(d){this.a=d},
dPx:function dPx(){},
dPy:function dPy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPw:function dPw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPs:function dPs(d,e,f){this.a=d
this.b=e
this.c=f},
dPr:function dPr(d,e,f){this.a=d
this.b=e
this.c=f},
dPp:function dPp(d,e){this.a=d
this.b=e},
dPt:function dPt(d){this.a=d},
dPu:function dPu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPq:function dPq(d,e){this.a=d
this.b=e},
dPv:function dPv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPz:function dPz(d,e){this.a=d
this.b=e},
dQ3:function dQ3(){},
dQ4:function dQ4(d,e){this.a=d
this.b=e},
dQ5:function dQ5(d){this.a=d},
dQ6:function dQ6(d,e){this.a=d
this.b=e},
dQ_:function dQ_(d){this.a=d},
dPY:function dPY(d,e){this.a=d
this.b=e},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dQ2:function dQ2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dQ7:function dQ7(d){this.a=d},
dPZ:function dPZ(d){this.a=d},
dPm:function dPm(d){this.a=d},
bcx:function bcx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d3O:function d3O(d){this.a=d},
d3N:function d3N(d,e){this.a=d
this.b=e},
d3P:function d3P(d){this.a=d},
d3M:function d3M(d,e){this.a=d
this.b=e},
fm1:function fm1(d,e){this.a=d
this.b=e},
fm2:function fm2(d){this.a=d},
fm3:function fm3(){},
fm_:function fm_(d,e){this.a=d
this.b=e},
fm0:function fm0(){},
fm6:function fm6(d,e){this.a=d
this.b=e},
fm7:function fm7(d){this.a=d},
fm8:function fm8(){},
fm4:function fm4(d){this.a=d},
fm5:function fm5(d,e){this.a=d
this.b=e},
Jn:function Jn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
F7:function F7(d,e){this.a=d
this.b=e},
bcz:function bcz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d3R:function d3R(d){this.a=d},
d47:function d47(d){this.a=d},
d4_:function d4_(d){this.a=d},
d40:function d40(){},
d3Z:function d3Z(d){this.a=d},
d3S:function d3S(){},
d3Y:function d3Y(d){this.a=d},
d3X:function d3X(d,e){this.a=d
this.b=e},
d3T:function d3T(d){this.a=d},
d41:function d41(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d42:function d42(d){this.a=d},
d43:function d43(d){this.a=d},
d44:function d44(){},
d45:function d45(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d46:function d46(){},
d3Q:function d3Q(d,e,f,g,h,i,j,k,l,m){var _=this
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
d3U:function d3U(d,e){this.a=d
this.b=e},
d3V:function d3V(d){this.a=d},
d3W:function d3W(){},
aHl:function aHl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcA:function bcA(d,e){this.b=d
this.a=e},
d48:function d48(){},
d49:function d49(d){this.a=d},
d4a:function d4a(d){this.a=d},
d4b:function d4b(){},
bge:function bge(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbF:function bbF(d,e){this.b=d
this.a=e},
btO:function btO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f4B:function f4B(d){this.a=d},
bjz:function bjz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eGV:function eGV(d){this.a=d},
eGU:function eGU(d,e){this.a=d
this.b=e},
Z0:function Z0(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aAc:function aAc(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
djZ:function djZ(d,e){this.a=d
this.b=e},
djY:function djY(d){this.a=d},
djW:function djW(d){this.a=d},
djX:function djX(d){this.a=d},
dk7:function dk7(d){this.a=d},
dk8:function dk8(d){this.a=d},
dk6:function dk6(d,e){this.a=d
this.b=e},
dk9:function dk9(){},
dkc:function dkc(d){this.a=d},
dk5:function dk5(d,e){this.a=d
this.b=e},
dkb:function dkb(){},
dkd:function dkd(d){this.a=d},
dk4:function dk4(d,e){this.a=d
this.b=e},
dke:function dke(d){this.a=d},
dk3:function dk3(d){this.a=d},
dkf:function dkf(d){this.a=d},
dk2:function dk2(d){this.a=d},
dkg:function dkg(d){this.a=d},
dk1:function dk1(d){this.a=d},
dkh:function dkh(d){this.a=d},
dk0:function dk0(d){this.a=d},
dki:function dki(d){this.a=d},
dk_:function dk_(d,e){this.a=d
this.b=e},
dka:function dka(d){this.a=d},
abY:function abY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgd:function bgd(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
abX:function abX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bgc:function bgc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dkj:function dkj(d){this.a=d},
dkk:function dkk(d,e){this.a=d
this.b=e},
aAd:function aAd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGo:function aGo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abZ:function abZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dkt:function dkt(d){this.a=d},
Ja:function Ja(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h1y(d){var w=d.S,v=x.N
return w.iR(w,new C.c5W(),v,v)},
hvA(d){var w=d.bC
if(w>=0)return w
return 5},
h1A(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h1y(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h1z(d,e){var w=C.h1A(d,e)
if(w!=null&&w.ca(new A.S(Date.now(),0,!1)))return!0
return!1},
hvB(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.h1y(d),w,w)
u=C.h1A(d,e)
t=u!=null&&u.ca(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bN(A.dB(30,0,0,0,0,0).a).a5().ac())
d.S=v},
aYj(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aYj=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.l9(t,B.Hs),$async$aYj)
case 3:if(l){u=!0
w=1
break}u=A.kL(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Hs,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYj,v)},
c5W:function c5W(){},
hvy(){var w,v=$.pg(),u=J.e1(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fU(u)},
HP(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$HP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$HP)
case 3:if(!e){u=A.V(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f0("ngmy_family_tree_backup_codes_v1",null,!1,B.bG),$async$HP)
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
return A.i($async$HP,v)},
a68(d){return C.hvz(d)},
hvz(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a68=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$a68)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hA("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cF,null),$async$a68)
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
return A.i($async$a68,v)},
c5V(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c5V=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.HP(),$async$c5V)
case 3:t=m.jq(f),t=t.gah(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gU(t)
q=r.b
if(s.b(q)){p=J.a8(q)
o=p.h(q,"email")
p=B.a.i(J.k(o==null?"":o).toLowerCase())===n&&J.y(p.h(q,"active"),!0)}else p=!1
if(p){u=r.a
w=1
break}w=4
break
case 5:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c5V,v)},
MJ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$MJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c5V(d),$async$MJ)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.HP(),$async$MJ)
case 6:s=f
r=J.a8(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dW(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.S(Date.now(),0,!1).a5().ac())
r.n(s,t,o)
w=9
return A.b(C.a68(s),$async$MJ)
case 9:case 8:u=t
w=1
break
case 5:n=C.hvy()
w=10
return A.b(C.HP(),$async$MJ)
case 10:s=f
J.aG(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=11
return A.b(C.a68(s),$async$MJ)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$MJ,v)},
aYi(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aYi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.HP(),$async$aYi)
case 3:t=f
for(s=J.dj(t),r=s.gdL(t),r=r.dF(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a68(t),$async$aYi)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aYi,v)},
a69(d,e,f){var w=0,v=A.j(x.H),u
var $async$a69=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.ao3(d,e),$async$a69)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.MJ(d),$async$a69)
case 7:w=4
break
case 5:w=8
return A.b(C.aYi(d),$async$a69)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a69,v)},
anY(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$anY=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.ao3(f,e),$async$anY)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c1(),$async$anY)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.HP(),$async$anY)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a8(q)
if(!J.y(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anY,v)},
aYh(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aYh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c1(),$async$aYh)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.HP(),$async$aYh)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a8(t)
if(!J.y(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYh,v)},
hvC(){var w,v=$.pg(),u=J.e1(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fU(u)},
ao0(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$ao0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$ao0)
case 3:if(!g){u=null
w=1
break}t=C.hvC()
w=4
return A.b(A.U8(),$async$ao0)
case 4:s=g
r=B.dI.aI(B.R.ao(d.eJ(),null))
r=B.cS.gcu().aI(r)
q=e?999:2
J.aG(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(A.a6a(s),$async$ao0)
case 5:p=e?999:2
u=new A.a_a("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ao0,v)},
ao_(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ao_=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.U8(),$async$ao_)
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
return A.b(C.aYh(J.k(l==null?"":l),j),$async$ao_)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ac(t)===0){u=null
w=1
break}s=null
try{r=B.c4.c8(0,B.cB.aI(t))
s=C.h1B(r)}catch(f){q=A.a9(f)
$.am.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dW(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a5().ac())
o.n(p,g,l)}w=5
return A.b(A.a6a(p),$async$ao_)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ao_,v)},
h1B(d){var w,v,u,t,s=null
try{w=B.R.aG(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hvE(A.a1(w,x.N,x.z))
return u}catch(t){v=A.a9(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fMJ(d){var w=0,v=A.j(x.m),u,t,s
var $async$fMJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.ao_(t[1])
w=1
break}u=null
w=1
break}u=C.h1B(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fMJ,v)},
hvE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d7(v,x.f)
u=A.cD(u,new C.c5Y(),u.$ti.k("H.E"),x.k)
t=A.a3(u).k("a2<H.E>")
s=A.B(new A.a2(u,new C.c5Z(),t),t.k("H.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.V(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jq(p),t=t.gah(t),o=x.B;t.C();){n=t.gU(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d7(l,u)
n=A.cD(n,new C.c6_(),n.$ti.k("H.E"),o)
k=A.a3(n).k("a2<H.E>")
j=A.B(new A.a2(n,new C.c60(),k),k.k("H.E"))
if(j.length!==0)q.n(0,m,j)}return new C.ao1(h,w,s,r,q)},
ao3(d,e){var w=0,v=A.j(x.y),u,t
var $async$ao3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.MA(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Ad(d),$async$ao3)
case 3:u=t.cx(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ao3,v)},
c66(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c66=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Ad(d),$async$c66)
case 3:t=s.b6(f,new C.c67(),x.cs)
t=A.B(t,t.$ti.k("ai.E"))
B.d.b1(t,new C.c68())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c66,v)},
U9(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$U9=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.ao3(e,d),$async$U9)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.MJ(e),$async$U9)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Ad(e),$async$U9)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c64(g))
r=A.B(t,t.$ti.k("H.E"))}t=J.a8(r)
if(t.gam(r)){u=null
w=1
break}t=t.dt(r,new C.c65(e),x.k)
r=A.B(t,t.$ti.k("ai.E"))
q=A.V(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.K7(e,o),$async$U9)
case 14:n=i
if(J.cx(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.ao1(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$U9,v)},
aYm(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aYm=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.U9(d,e,f,g),$async$aYm)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gL(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aJ(t,s,"_")
r=q.a
u=A.FP(A.Jj(q.eJ(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYm,v)},
aYl(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aYl=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.U9(d,e,f,g),$async$aYl)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.ao0(r,f),$async$aYl)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aEp(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYl,v)},
Ua(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ua=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fMJ(a0),$async$Ua)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.anY(g.a,d,e,f,s,r),$async$Ua)
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
return A.b(C.bz9(e,j),$async$Ua)
case 12:case 11:w=13
return A.b(C.agj(e,j,s),$async$Ua)
case 13:h=n.h(0,i)
w=h!=null&&J.cx(h)?14:15
break
case 14:w=16
return A.b(C.Ao(e,i,h),$async$Ua)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bn4(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ua,v)},
ao1:function ao1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c62:function c62(){},
c63:function c63(){},
c61:function c61(){},
c5Y:function c5Y(){},
c5Z:function c5Z(){},
c6_:function c6_(){},
c60:function c60(){},
c67:function c67(){},
c68:function c68(){},
c64:function c64(d){this.a=d},
c65:function c65(d){this.a=d},
fUX(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fe(null,x.H)
return A.hu(d,new C.ao2(w,e,g,i,f,h,null),!0,null,x.H)},
d3L(d,e,f,g,h,i,j,k){return new C.bcw(i,e,k,j,g,f,h,d,null)},
ao2:function ao2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBN:function aBN(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dQg:function dQg(d){this.a=d},
dQh:function dQh(d,e,f){this.a=d
this.b=e
this.c=f},
dQl:function dQl(d,e){this.a=d
this.b=e},
dQm:function dQm(d){this.a=d},
dQd:function dQd(d){this.a=d},
dQe:function dQe(d,e){this.a=d
this.b=e},
dQf:function dQf(d,e){this.a=d
this.b=e},
dQk:function dQk(d){this.a=d},
dQj:function dQj(d,e){this.a=d
this.b=e},
dQi:function dQi(){},
dQo:function dQo(d){this.a=d},
dQp:function dQp(d,e){this.a=d
this.b=e},
dQn:function dQn(d,e){this.a=d
this.b=e},
d4c:function d4c(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcy:function bcy(d,e,f){this.d=d
this.e=e
this.a=f},
abf:function abf(d,e,f){this.c=d
this.d=e
this.a=f},
bcw:function bcw(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bcB:function bcB(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Zl:function Zl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBM:function aBM(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dQ8:function dQ8(d,e){this.a=d
this.b=e},
dQ9:function dQ9(d){this.a=d},
dQa:function dQa(d){this.a=d},
dQb:function dQb(d){this.a=d},
dQc:function dQc(d){this.a=d},
Zm:function Zm(d){this.a=d},
bhG:function bhG(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dQq:function dQq(d,e){this.a=d
this.b=e},
aWT(d,e){return new C.aWS(d,e,null)},
aWS:function aWS(d,e,f){this.c=d
this.d=e
this.a=f},
hUM(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b_(d,11)},
i13(d){return A.bW(B.K,null,new C.fBT(new C.tt(A.N(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
h3s(d,e){return new C.aqZ(e,d,null)},
aOA(d,e,f,g,h,i,j){var w=C.hUM(i)
if(w!=null)return A.bv(e,new A.a6(j,f,new C.a5b(w,!0,null),null),B.aq)
return I.aNW(e,B.bQ,f,g,h,i,j)},
lt:function lt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5b:function a5b(d,e,f){this.c=d
this.d=e
this.a=f},
bhn:function bhn(d,e){var _=this
_.e=_.d=$
_.cS$=d
_.b2$=e
_.c=_.a=null},
dC_:function dC_(d){this.a=d},
dC0:function dC0(){},
dC1:function dC1(d,e){this.a=d
this.b=e},
bhm:function bhm(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fBT:function fBT(d){this.a=d},
fBS:function fBS(d,e){this.a=d
this.b=e},
fBR:function fBR(d,e){this.a=d
this.b=e},
fBQ:function fBQ(d,e){this.a=d
this.b=e},
aqZ:function aqZ(d,e,f){this.c=d
this.d=e
this.a=f},
cdA:function cdA(d,e){this.a=d
this.b=e},
aJH:function aJH(){},
i0P(d){var w=null
return A.c9(w,w,!0,w,new C.fBf(),d,w,!0,!0,x.e2)},
i1Z(d,e,f,g,h){var w=null
return A.c9(w,w,!0,w,new C.fII(h,g,f,e),d,w,!0,!0,x.N)},
i0R(d,e){var w=null
return A.c9(w,w,!0,w,new C.fBk(e),d,w,!0,!0,x.dY)},
i0Q(d){var w=null
return A.c9(w,w,!0,w,new C.fBj(),d,w,!0,!0,x.c5)},
aRs:function aRs(d,e){this.a=d
this.b=e},
aRr:function aRr(d){this.a=d},
aPx:function aPx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBf:function fBf(){},
fII:function fII(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBk:function fBk(d){this.a=d},
fBj:function fBj(){},
Y_:function Y_(d,e){this.c=d
this.a=e},
ax2:function ax2(){var _=this
_.d=$
_.c=_.a=_.e=null},
cWV:function cWV(d){this.a=d},
cWW:function cWW(d){this.a=d},
cWU:function cWU(d,e){this.a=d
this.b=e},
cWX:function cWX(d){this.a=d},
cWY:function cWY(d){this.a=d},
XZ:function XZ(d){this.a=d},
ax1:function ax1(){this.d=$
this.c=this.a=null},
cWR:function cWR(d){this.a=d},
cWS:function cWS(d){this.a=d},
cWT:function cWT(d){this.a=d},
Xx:function Xx(d){this.a=d},
avM:function avM(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cuu:function cuu(){},
cuA:function cuA(d){this.a=d},
cuB:function cuB(d){this.a=d},
cuC:function cuC(d){this.a=d},
cuz:function cuz(){},
cuD:function cuD(d){this.a=d},
cuE:function cuE(d){this.a=d},
cuy:function cuy(){},
cuF:function cuF(d,e){this.a=d
this.b=e},
cux:function cux(d,e){this.a=d
this.b=e},
cuv:function cuv(d,e){this.a=d
this.b=e},
cuG:function cuG(d){this.a=d},
cuw:function cuw(){},
cuH:function cuH(d){this.a=d},
a03:function a03(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
btG:function btG(){this.d=$
this.c=this.a=null},
f43:function f43(d,e){this.a=d
this.b=e},
f44:function f44(d){this.a=d},
f45:function f45(d,e){this.a=d
this.b=e},
aaj:function aaj(d,e){this.a=d
this.b=e},
EV:function EV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
btE:function btE(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f41:function f41(d,e){this.a=d
this.b=e},
avF:function avF(d,e){this.c=d
this.a=e},
btF:function btF(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f42:function f42(d){this.a=d},
btD:function btD(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aLQ:function aLQ(){},
aLR:function aLR(){},
bB6(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bw(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.ou(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fA0(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.WW(A.dq(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aOc(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aOc=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hV().kW(85,1280,B.eG),$async$aOc)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fd(),$async$aOc)
case 8:r=e
if(J.ac(r)===0){u=null
w=1
break}q=C.h3r()
w=9
return A.b(C.cdz(q,r),$async$aOc)
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
return A.i($async$aOc,v)},
aOy(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aOy=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cdw(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gal(g.split(",")):g
p=B.cB.aI(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.X().KW(p,!0,null,i).cM(0,B.fP),$async$aOy)
case 9:n=a1
w=10
return A.b(n.ma(),$async$aOy)
case 10:m=a1
w=11
return A.b(J.aPi(m).hm(B.fS),$async$aOy)
case 11:l=a1
J.aPi(m).q()
if(l==null){w=8
break}i=J.fa(B.dG.gaP(l))
k="data:image/png;base64,"+B.cS.gcu().aI(i)
if(J.ac(k)<=r){u=k
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
return A.i($async$aOy,v)},
fA0:function fA0(){},
tt:function tt(d){this.a=d},
aqY:function aqY(d,e,f){this.c=d
this.d=e
this.a=f},
aDi:function aDi(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eE4:function eE4(d,e){this.a=d
this.b=e},
eDW:function eDW(d){this.a=d},
eDX:function eDX(d){this.a=d},
eE2:function eE2(d,e){this.a=d
this.b=e},
eE1:function eE1(d,e){this.a=d
this.b=e},
eDZ:function eDZ(d,e){this.a=d
this.b=e},
eDY:function eDY(d,e){this.a=d
this.b=e},
eE_:function eE_(d){this.a=d},
eE0:function eE0(d,e){this.a=d
this.b=e},
eE3:function eE3(d,e){this.a=d
this.b=e},
eDR:function eDR(d,e){this.a=d
this.b=e},
eDV:function eDV(d){this.a=d},
eDU:function eDU(d,e){this.a=d
this.b=e},
eDT:function eDT(d){this.a=d},
eE5:function eE5(d,e){this.a=d
this.b=e},
eE6:function eE6(d,e){this.a=d
this.b=e},
eDS:function eDS(d,e){this.a=d
this.b=e},
hg0(d,e,f){var w="thumbnailPath",v=e.ad()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a5().ac(),"project",v],x.N,x.z)},
fA1(d,e,f){var w=0,v=A.j(x.N),u
var $async$fA1=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hg0(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fA1,v)},
bB8(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bB8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fA1(!0,d,e),$async$bB8)
case 4:w=3
return A.b(r.aqW(g,d,e.a),$async$bB8)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dI.aI(B.R.ao(C.hg0(d,e,null),null))
u="NGMY_WS:"+B.k3.gcu().aI(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bB8,v)},
h7Y(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fUE(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ac(s)===0)return!1
if(J.cZ(s,"NGMYWSSYNC2|"))return!0
if(J.cZ(s,"NGMY_WS:"))return!0
if(J.eY(s,t))return!0
if(J.cZ(s,"{"))try{w=B.R.aG(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hZP(d){var w,v,u,t=C.h7Y(d)
if(t==null)return null
if(C.fUE(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b_(t,w))
if(C.fUE(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b_(t,u))
if(C.fUE(v))return v}return null},
fUD(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ac(q)===0)return r
if(J.cZ(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cZ(q,"NGMY_WS:")){v=B.c4.c8(0,B.cB.aI(J.mx(q,8)))
w=t.a(B.R.aG(0,v,r))}else w=t.a(B.R.aG(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fPh(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bB7(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bB7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.aqV(t[1]),$async$bB7)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fUD(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fUD(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bB7,v)},
fUC(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lc(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bAF(){var w=0,v=A.j(x.o),u,t
var $async$bAF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.G_(),$async$bAF)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fUD(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAF,v)},
hgS(d,e,f,g){return A.bW(B.K,null,new C.fIA(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fIA:function fIA(d,e,f){this.a=d
this.b=e
this.c=f},
acj:function acj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eE8:function eE8(d,e){this.a=d
this.b=e},
eE9:function eE9(d,e){this.a=d
this.b=e},
eEa:function eEa(d,e){this.a=d
this.b=e},
eEb:function eEb(d,e){this.a=d
this.b=e},
eE7:function eE7(d){this.a=d},
aqS:function aqS(d,e,f){this.c=d
this.d=e
this.a=f},
bj2:function bj2(){var _=this
_.c=_.a=_.e=_.d=null},
eDM:function eDM(d,e){this.a=d
this.b=e},
eDN:function eDN(d){this.a=d},
eDO:function eDO(d){this.a=d},
aqX:function aqX(d){this.a=d},
aDh:function aDh(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eDQ:function eDQ(d){this.a=d},
eDP:function eDP(d){this.a=d},
hyR(d,e,f,g,h){return new C.Nk(h,g,d,e,f,null)},
aI2:function aI2(d,e){this.a=d
this.b=e},
Nk:function Nk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDj:function aDj(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eEy:function eEy(){},
eEu:function eEu(d,e){this.a=d
this.b=e},
eEv:function eEv(d){this.a=d},
eEf:function eEf(d){this.a=d},
eEd:function eEd(d){this.a=d},
eEe:function eEe(d){this.a=d},
eEo:function eEo(d,e){this.a=d
this.b=e},
eEl:function eEl(d,e){this.a=d
this.b=e},
eEm:function eEm(d,e){this.a=d
this.b=e},
eEn:function eEn(d,e,f){this.a=d
this.b=e
this.c=f},
eEj:function eEj(d,e,f){this.a=d
this.b=e
this.c=f},
eEh:function eEh(d){this.a=d},
eEi:function eEi(d){this.a=d},
eEk:function eEk(d){this.a=d},
eEB:function eEB(d){this.a=d},
eEA:function eEA(d){this.a=d},
eEC:function eEC(d){this.a=d},
eEz:function eEz(d){this.a=d},
eEc:function eEc(d){this.a=d},
eEg:function eEg(d,e){this.a=d
this.b=e},
eEx:function eEx(d,e){this.a=d
this.b=e},
eEw:function eEw(d,e){this.a=d
this.b=e},
eEr:function eEr(d){this.a=d},
eEs:function eEs(d){this.a=d},
eEt:function eEt(d,e){this.a=d
this.b=e},
eEq:function eEq(d,e){this.a=d
this.b=e},
eEp:function eEp(d,e,f){this.a=d
this.b=e
this.c=f},
bvr:function bvr(){},
A4(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aJ(v,w,"_")},
aeK(d,e,f){return C.hOn(d,e,f)},
hOn(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aeK=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ar("String",e,f),$async$aeK)
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
return A.i($async$aeK,v)},
aeJ(d,e){return C.hOm(d,e)},
hOm(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aeJ=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$aeJ)
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
return A.i($async$aeJ,v)},
hN9(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.RV(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bya(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bya=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b0y(q),$async$bya)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aOy(q,!1),$async$bya)
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
return A.i($async$bya,v)},
hmI(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aN(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qK(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qK(p,J.k(u==null?"":u),1,o,q)},
fPh(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d7(s,x.f)
w=A.cD(w,new C.ctT(),w.$ti.k("H.E"),x.Q)
v=A.a3(w).k("a2<H.E>")
r=A.B(new A.a2(w,new C.ctU(),v),v.k("H.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lc(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
hSe(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.YM
case"female":case"f":return D.ahL
default:return D.xs}},
hcI(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fYF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hSe(v==null?j:J.k(v))
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
l=J.y(d.h(0,"hidden"),!0)
k=A.aN(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.O(k)
return new C.hU(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hSg(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.LY
case"viewer":return D.kf
default:return D.tp}},
hSh(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
FQ(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bzq(d,e){return B.a.i(e.toLowerCase())===C.FQ(d,e)&&d.y!==D.kf},
tF(d,e){var w,v=d.y
if(v===D.kf)return!1
w=B.a.i(e.toLowerCase())
if(w===C.FQ(d,e))return!0
if(v===D.LY)return!0
v=d.e
return new A.J(v,A.fUI(),A.T(v).k("J<1,n>")).t(0,w)},
hRH(d){return J.dH(d,new C.flc()).gM(0)},
fJ2(d){var w=0,v=A.j(x.y),u,t
var $async$fJ2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Ad(d),$async$fJ2)
case 3:u=t.qG(f,new C.fJ3(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJ2,v)},
bz9(d,e){var w=0,v=A.j(x.H),u,t
var $async$bz9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ad(d),$async$bz9)
case 3:t=g
if(J.qG(t,new C.fjM(e))){w=1
break}if(C.hRH(t)>=2)throw A.U(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bz9,v)},
ajm(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d7(n,x.f)
w=A.cD(w,new C.bLw(),w.$ti.k("H.E"),x.P)
v=A.a3(w).k("a2<H.E>")
m=A.B(new A.a2(w,new C.bLx(),v),v.k("H.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bLy(),x.N)
t=A.B(l,l.$ti.k("ai.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.y(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bi(J.k(r==null?"":r))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.aN(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.O(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.ku(l,w,v,!s,t,m,r,q,p,C.hSg(o==null?null:J.k(o)))},
hcR(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
Cm(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$Cm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.QE(d),$async$Cm)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$Cm)
case 4:t=f
w=5
return A.b(t.a4X(0),$async$Cm)
case 5:w=6
return A.b(C.fbA(t,l),$async$Cm)
case 6:s=f
if(J.cx(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.h8x(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.ot(l,n),$async$Cm)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.h8x(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.ot(l,n),$async$Cm)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Cm,v)},
fbA(d,e){return C.hKE(d,e)},
hKE(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fbA=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a8(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.A4(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.R.aG(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aX(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gU(f)
n=B.a.i(J.k(o))
if(J.ac(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.A4(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aG(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fPh(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.A4(a9)+"_"+n))
i=C.hN9(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b0y(h),$async$fbA)
case 17:g=b1
if(g!=null){i=i.RV(g)
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
case 8:J.QO(q,new C.fbB())
if(p&&J.ac(q)!==0)C.ot(a9,q)
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
return A.i($async$fbA,v)},
bzB(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bzB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.QE(d),$async$bzB)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Cm(r),$async$bzB)
case 4:t=p.aX(g)
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
return A.i($async$bzB,v)},
h8x(d){var w,v,u,t
try{w=B.R.aG(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d7(w,x.f)
v=A.cD(v,new C.f7i(),v.$ti.k("H.E"),x.i)
u=A.a3(v).k("a2<H.E>")
v=A.B(new A.a2(v,new C.f7j(),u),u.k("H.E"))
B.d.b1(v,new C.f7k())
return v}catch(t){v=A.a([],x.D)
return v}},
ot(d,e){return C.i0F(d,e)},
i0F(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$ot=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.QE(b2),$async$ot)
case 3:a8=b5
if(J.ac(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$ot)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.A4(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aG(0,p,null)),new C.fB6(),a2).fG(0)
a2=J.b6(b3,new C.fB7(),a2).bZ(0,new C.fB8())
n=A.d9(a2,a2.$ti.k("H.E"))
a2=o,a2=A.ea(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eY(n,m)?17:18
break
case 17:a5=C.A4(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a7q(l),$async$ot)
case 19:t=21
a5=C.A4(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aG(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a7q(a5==null?null:J.k(a5)),$async$ot)
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
return A.b(C.aeJ(r,"ngmy_worksheet_item_v3_"+C.A4(a8)+"_"+m),$async$ot)
case 29:w=30
return A.b(C.aeJ(r,"ngmy_worksheet_thumb_v3_"+C.A4(a8)+"_"+m),$async$ot)
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
case 14:case 10:a2=J.cE(b3),a3=a2.gah(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gU(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bya(h),$async$ot)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aeK(r,"ngmy_worksheet_thumb_v3_"+C.A4(a8)+"_"+a4,f),$async$ot)
case 40:g=i.RV(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aeJ(r,"ngmy_worksheet_thumb_v3_"+C.A4(a8)+"_"+a4),$async$ot)
case 41:g=i.RV(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aeJ(r,"ngmy_worksheet_thumb_v3_"+C.A4(a8)+"_"+a4),$async$ot)
case 42:case 34:a4=i.a
w=43
return A.b(C.aeK(r,"ngmy_worksheet_item_v3_"+C.A4(a8)+"_"+a4,B.R.ao(g.ad(),null)),$async$ot)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.cf(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aeK(r,"ngmy_worksheets_index_v3_"+C.A4(a8),B.R.ao(q,null)),$async$ot)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eI(b3,new C.fB9(q))
a4=a3.$ti.k("cQ<1,a4<n,@>>")
a7=A.B(new A.cQ(a3,new C.fBa(),a4),a4.k("H.E"))
a0=a7
w=45
return A.b(C.aeK(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$ot)
case 45:w=46
return A.b(J.hlP(r),$async$ot)
case 46:if(a2.gcl(b3)&&J.ac(q)===0){u=!1
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
return A.i($async$ot,v)},
Kz(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Kz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Cm(d),$async$Kz)
case 3:t=g
s=J.cE(t)
r=s.bc(t,new C.fJ1(e))
if(r===-1)s.cn(t,0,e)
else s.n(t,r,e)
u=C.ot(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Kz,v)},
bzn(d,e){var w=0,v=A.j(x.H),u
var $async$bzn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Cm(d),$async$bzn)
case 2:u=g
J.nh(u,new C.flE(e))
w=3
return A.b(C.ot(d,u),$async$bzn)
case 3:return A.h(null,v)}})
return A.i($async$bzn,v)},
FS(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$FS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$FS)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aG(0,i,null)
if(x.j.b(t)){j=J.d7(t,x.f)
j=A.cD(j,new C.fo2(),j.$ti.k("H.E"),x.k)
s=A.a3(j).k("a2<H.E>")
r=A.B(new A.a2(j,new C.fo3(),s),s.k("H.E"))
B.d.b1(r,new C.fo4())
k=r}}catch(h){}w=4
return A.b(C.f82(d),$async$FS)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hL0(k,p,d)
j=A.T(o)
s=j.k("J<1,a4<n,@>>")
s=A.B(new A.J(o,new C.fo5(),s),s.k("ai.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.PQ(d,o),$async$FS)
case 7:case 6:j=j.k("a2<1>")
m=A.B(new A.a2(o,new C.fo6(d),j),j.k("H.E"))
if(m.length!==0)C.aN7(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$FS,v)},
fAT(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fAT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.PQ(d,e),$async$fAT)
case 3:t=J.dH(e,new C.fAU(d))
s=A.B(t,t.$ti.k("H.E"))
if(s.length===0){u=!0
w=1
break}u=C.aN7(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fAT,v)},
a1G(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a1G=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a1G)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aG(0,l,null)
if(x.j.b(u)){m=J.d7(u,x.f)
m=A.cD(m,new C.fIX(),m.$ti.k("H.E"),x.k)
t=A.a3(m).k("a2<H.E>")
s=A.B(new A.a2(m,new C.fIY(),t),t.k("H.E"))
o=s}}catch(k){}q=J.q1(o,new C.fIZ(e))
if(B.a.i(e.x).length===0&&C.tF(e,d)){m=B.a.i(d.toLowerCase())
p=e.aCb(e.y===D.kf?D.kf:D.tp,m)}else p=e
if(q===-1)J.pk(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.PQ(d,o),$async$a1G)
case 3:w=C.tF(p,d)?4:5
break
case 4:w=6
return A.b(C.aN6(C.FQ(p,d),p),$async$a1G)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a1G,v)},
aNh(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aNh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.FS(d),$async$aNh)
case 2:u=g
t=J.cE(u)
s=A.r_(t.eI(u,new C.fll(e)))
t.bn(u,new C.flm(e))
w=3
return A.b(C.PQ(d,u),$async$aNh)
case 3:w=s!=null&&C.bzq(s,d)?4:5
break
case 4:w=6
return A.b(C.f7m(e),$async$aNh)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aNh,v)},
agx(d){var w=d.f,v=A.T(w).k("a2<1>")
w=A.B(new A.a2(w,new C.fJ7(),v),v.k("H.E"))
return w},
fSn(d,e){var w,v=d.f,u=A.r_(new A.a2(v,new C.fkW(e),A.T(v).k("a2<1>")))
v=C.agx(d)
w=A.T(v).k("a2<1>")
v=A.B(new A.a2(v,new C.fkX(e,u),w),w.k("H.E"))
B.d.b1(v,new C.fkY())
return v},
hSk(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hgV(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bc(C.fSn(d,u),new C.fIJ(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hTR(d,e){var w
if(e==null||e.length===0)return 1
w=C.fSn(d,e)
if(w.length===0)return 1
return new A.J(w,new C.foQ(),A.T(w).k("J<1,G>")).fD(0,B.zH)+1},
i0y(d){var w,v=C.agx(d)
if(v.length===0)return null
w=new A.a2(v,new C.fAQ(),A.T(v).k("a2<1>"))
if(!w.gam(0))return w.gL(0)
return B.d.gL(v)},
hSf(d){return A.E(["id",d.a,"name",d.b,"gender",C.hcI(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hTM(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.V(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aW(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.L)(a0),++u){q=a0[u]
p=q.a
r.J(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.xs?n:q.c
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
d=q.aC6(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cF3(a1,w,a3.d,a2.y,s,a0,v)},
Ad(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$Ad=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Ad)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.R.aG(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d7(t,x.f)
p=A.cD(p,new C.fo_(),p.$ti.k("H.E"),x.k)
s=A.a3(p).k("a2<H.E>")
p=A.B(new A.a2(p,new C.fo0(),s),s.k("H.E"))
B.d.b1(p,new C.fo1())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Ad,v)},
agj(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$agj=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tp:D.kf
a7=C.FQ(b2,b3)
w=2
return A.b(C.Ad(b1),$async$agj)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bc(a8,new C.fAM(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bz9(b1,b2),$async$agj)
case 5:case 4:if(b0===-1){u=b2.aCb(a6,a7)
a9.cn(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.xs?i:l.c
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
s.n(0,m,l.aC6(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.B(new A.bc(s,k),k.k("H.E"))
k=a5?D.tp:D.kf
u=t.yf(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.PQ(b1,a8),$async$agj)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aN6(B.a.i(b3.toLowerCase()),u),$async$agj)
case 9:case 8:return A.h(null,v)}})
return A.i($async$agj,v)},
h8V(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a5().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("J<1,a4<n,@>>"),k=A.B(new A.J(m,C.hg8(),l),l.k("ai.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a5().ac(),"updatedAt",o],r,x.K),"createdAt",s.a5().ac(),"updatedAt",o],r,x.z)},
h8W(d,e){var w=new A.S(Date.now(),0,!1).a5().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("J<1,a4<n,@>>")
u=A.B(new A.J(u,C.hg8(),t),t.k("ai.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a5().ac(),"updatedAt",w],x.N,x.z)},
hID(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ajm(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.J(j,A.fUI(),A.T(j).k("J<1,n>")).bZ(0,new C.f7Q())
t=A.B(j,j.$ti.k("H.E"))
if(u===v)s=D.tp
else s=B.d.t(t,u)?D.LY:D.kf
return w.aCb(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ajm(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d7(q,h)
h=A.cD(h,new C.f7R(),h.$ti.k("H.E"),x.P)
p=A.a3(h).k("a2<H.E>")
o=A.B(new A.a2(h,new C.f7S(),p),p.k("H.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.f7T(),x.N).bZ(0,new C.f7U())
t=A.B(h,h.$ti.k("H.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tp
else s=B.d.t(t,u)?D.LY:D.kf
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.y(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.S(Date.now(),0,!1)
j=A.aN(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.O(j)
if(j==null)j=0
return new C.ku(h,r,p,!m,t,o,l,j,v,s)},
f82(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$f82=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ac(a0)===0){u=null
w=1
break}t=4
r=new C.f86()
h=x.N
g=x.z
w=7
return A.b(A.iI(A.a([A.lj("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bG),r.$2(A.lj("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bG),"collaborator"),r.$2(A.lj("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bG),"public")],x.cl),x.U),$async$f82)
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
if(J.ac(j)!==0)J.aG(m,j,k)}l=m
h=A.a3(l).k("bc<2>")
h=A.cD(new A.bc(l,h),new C.f83(a0),h.k("H.E"),x.k)
l=A.a3(h).k("a2<H.E>")
l=A.B(new A.a2(h,new C.f84(),l),l.k("H.E"))
B.d.b1(l,new C.f85())
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
return A.i($async$f82,v)},
hL0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.fcf(),v).bZ(0,new C.fcg())
t=A.d9(u,u.$ti.k("H.E"))
s=A.V(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.FQ(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kf){m=q.e
m=!new A.J(m,A.fUI(),A.T(m).k("J<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gah(e);j.C();){v=j.gU(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hTM(l,v)
o=C.FQ(k,w)
p=v.d
s.n(0,u,o===w?k.b9s(p,D.tp):k.b9s(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("H.E"))
B.d.b1(j,new C.fch())
return j},
PQ(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$PQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$PQ)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fej(),x.a)
s=A.B(s,s.$ti.k("ai.E"))
w=3
return A.b(u.ar("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$PQ)
case 3:return A.h(null,v)}})
return A.i($async$PQ,v)},
aN6(d,e){return C.hQ5(d,e)},
hQ5(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aN6=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lJ("family_trees",A.a([C.h8V(e,d)],p),null,B.cF),$async$aN6)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lJ("family_trees",A.a([C.h8W(e,d)],p),null,B.cF),$async$aN6)
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
return A.i($async$aN6,v)},
aN7(d,e){return C.hQ6(d,e)},
hQ6(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aN7=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("J<1,a4<n,@>>")
m=n.k("ai.E")
l=A.B(new A.J(e,new C.fj5(d),n),m)
r=l
w=7
return A.b(A.lJ("family_trees",r,null,B.cF),$async$aN7)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.J(e,new C.fj6(d),n),m)
p=k
w=8
return A.b(A.lJ("family_trees",p,null,B.cF),$async$aN7)
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
return A.i($async$aN7,v)},
f7m(d){return C.hHZ(d)},
hHZ(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$f7m=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Qe("family_trees",A.E(["id",d],x.N,x.z),null,B.cF),$async$f7m)
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
return A.i($async$f7m,v)},
qK:function qK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lc:function lc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ctW:function ctW(){},
ctV:function ctV(){},
ctT:function ctT(){},
ctU:function ctU(){},
GY:function GY(d,e){this.a=d
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
ajl:function ajl(d,e){this.a=d
this.b=e},
flc:function flc(){},
fJ3:function fJ3(d){this.a=d},
fjM:function fjM(d){this.a=d},
ku:function ku(d,e,f,g,h,i,j,k,l,m){var _=this
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
bLA:function bLA(){},
bLz:function bLz(){},
bLw:function bLw(){},
bLx:function bLx(){},
bLy:function bLy(){},
fbB:function fbB(){},
f7i:function f7i(){},
f7j:function f7j(){},
f7k:function f7k(){},
fB6:function fB6(){},
fB7:function fB7(){},
fB8:function fB8(){},
fB9:function fB9(d){this.a=d},
fBa:function fBa(){},
fJ1:function fJ1(d){this.a=d},
flE:function flE(d){this.a=d},
fo2:function fo2(){},
fo3:function fo3(){},
fo4:function fo4(){},
fo5:function fo5(){},
fo6:function fo6(d){this.a=d},
fAU:function fAU(d){this.a=d},
fIX:function fIX(){},
fIY:function fIY(){},
fIZ:function fIZ(d){this.a=d},
fll:function fll(d){this.a=d},
flm:function flm(d){this.a=d},
fJ7:function fJ7(){},
fkW:function fkW(d){this.a=d},
fkX:function fkX(d,e){this.a=d
this.b=e},
fkY:function fkY(){},
fIJ:function fIJ(d){this.a=d},
foQ:function foQ(){},
fAQ:function fAQ(){},
fo_:function fo_(){},
fo0:function fo0(){},
fo1:function fo1(){},
fAM:function fAM(d){this.a=d},
f7Q:function f7Q(){},
f7R:function f7R(){},
f7S:function f7S(){},
f7T:function f7T(){},
f7U:function f7U(){},
f86:function f86(){},
f87:function f87(d){this.a=d},
f83:function f83(d){this.a=d},
f84:function f84(){},
f85:function f85(){},
fcf:function fcf(){},
fcg:function fcg(){},
fch:function fch(){},
fej:function fej(){},
fj5:function fj5(d){this.a=d},
fj6:function fj6(d){this.a=d},
ctX:function ctX(d,e){this.a=d
this.b=e},
ctY:function ctY(d,e){this.a=d
this.b=e},
aFl:function aFl(d,e,f){this.a=d
this.b=e
this.c=f},
b6N:function b6N(){this.b=this.a=0},
b6M:function b6M(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
btH:function btH(){},
wo(d,e){var w,v
if(d==null)return""
w=d.bQ()
v=""+w.gcc()+"/"+w.gcs()+"/"+w.gcg()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gn_()),2,"0")+":"+B.a.aT(B.o.u(w.gFI()),2,"0")},
hyO(){var w,v=$.pg(),u=J.e1(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"WS"+B.d.fU(u)},
aqT(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aqT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$aqT)
case 3:if(!e){u=A.V(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f0("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bG),$async$aqT)
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
return A.i($async$aqT,v)},
aqU(d){return C.hyP(d)},
hyP(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aqU=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$aqU)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hA("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cF,null),$async$aqU)
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
return A.i($async$aqU,v)},
aqW(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aqW=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c1(),$async$aqW)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hyO()
w=4
return A.b(C.aqT(),$async$aqW)
case 4:r=h
q=B.a.i(e)
p=B.dI.aI(t)
J.aG(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cS.gcu().aI(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(C.aqU(r),$async$aqW)
case 5:u=new A.a_a("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqW,v)},
aqV(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aqV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c1(),$async$aqV)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aqT(),$async$aqV)
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
if(J.ac(t)===0){u=null
w=1
break}s=null
try{s=B.c4.c8(0,B.cB.aI(t))}catch(h){r=A.a9(h)
$.am.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dW(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a5().ac())
p.n(q,i,m)}w=5
return A.b(C.aqU(q),$async$aqV)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqV,v)},
h3r(){var w=new A.S(Date.now(),0,!1).a5()
return"wst_"+(1000*w.a+w.b)+"_"+B.cI.aB(999999)},
hyQ(d){var w,v,u,t,s,r,q
try{w=A.af8(d)
if(w==null)return d
v=w
if(J.KF(v)>960||J.KE(v)>960){s=v
r=J.KF(v)>=J.KE(v)?960:null
v=A.af7(s,J.KE(v)>J.KF(v)?960:null,B.Ni,r)}s=v
u=A.akK(82).Sg(s,B.yd)
if(J.ac(u)===0)return d
s=new Uint8Array(A.cq(u))
return s}catch(q){t=A.a9(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cdz(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cdz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hyQ(e)
$.cdv.n(0,s,t)
u=C.bBa(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdz,v)},
b0y(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b0y=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cZ(l,"data:image")){u=null
w=1
break}t=4
r=J.eY(l,",")?B.d.gal(J.ll(l,",")):l
q=B.cB.aI(r)
if(J.ac(q)===0){u=null
w=1
break}p=C.h3r()
w=7
return A.b(C.cdz(p,q),$async$b0y)
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
return A.i($async$b0y,v)},
cdw(d){var w=0,v=A.j(x.T),u,t,s
var $async$cdw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cdy(s),$async$cdw)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcu().aI(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdw,v)},
a7q(d){var w=0,v=A.j(x.H),u,t
var $async$a7q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hg1(d)
if(t==null){w=1
break}$.cdv.W(0,t)
w=3
return A.b(C.bB9(t),$async$a7q)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a7q,v)},
bBa(d,e){return C.hZS(d,e)},
hZS(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bBa=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aM2
w=7
return A.b(n==null?$.aM2=I.fRo():n,$async$bBa)
case 7:r=g
q=new Uint8Array(A.cq(e))
p=J.my(r,"thumbs","readwrite")
B.iz.m4(J.mw(p,"thumbs"),q,l)
w=8
return A.b(J.pj(p),$async$bBa)
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
return A.i($async$bBa,v)},
bB9(d){return C.hZQ(d)},
hZQ(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bB9=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aM2
w=7
return A.b(o==null?$.aM2=I.fRo():o,$async$bB9)
case 7:r=f
q=J.my(r,"thumbs","readwrite")
B.iz.Fe(J.mw(q,"thumbs"),m)
w=8
return A.b(J.pj(q),$async$bB9)
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
return A.i($async$bB9,v)}},D,Aj,Ak,Q,Al,Am,I,An
J=c[1]
A=c[0]
B=c[2]
N=c[229]
R=c[144]
A0=c[213]
G=c[194]
F=c[31]
E=c[204]
A1=c[102]
A2=c[215]
A3=c[134]
A4=c[182]
S=c[109]
T=c[104]
A5=c[212]
A6=c[37]
M=c[211]
A7=c[80]
H=c[87]
A8=c[151]
A9=c[106]
U=c[154]
V=c[225]
W=c[183]
Aa=c[174]
Ab=c[186]
X=c[181]
Ac=c[65]
Ad=c[230]
Ae=c[71]
Y=c[198]
Af=c[30]
Ag=c[100]
K=c[176]
Ah=c[187]
Z=c[228]
A_=c[221]
O=c[99]
Ai=c[110]
L=c[128]
P=c[69]
C=a.updateHolder(c[6],C)
D=c[224]
Aj=c[70]
Ak=c[192]
Q=c[227]
Al=c[226]
Am=c[56]
I=c[54]
An=c[77]
C.amS.prototype={}
C.aWU.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bdM(),f=h.x!=null&&h.yG(i).length===0
if(h.x!=null)w=f?B.aZ:B.bL
else w=h.gSU()?B.bL:B.dT
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bcc,B.r,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eCV,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h1,i,i,i),B.S,D.f4P,B.at,A.d(C.wo(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.f0Q,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aXU,i,i,i,i,B.XM,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.r,1)
o=A.I(B.aZ.j(0.28),B.r,1)
n=A.fTi(h.d)
o=A.p(B.A,C.aWT(A.frd(h.e,n),30),B.f,i,i,new A.o(B.lw,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.eXh,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.r,1)
q=A.p(i,A.v(A.a([o,B.P,n,B.bz,D.f55,B.ac,A.p(i,A.v(A.a([D.fk2,B.bz,A.d(A.Af(h.c),i,i,i,i,i,i,D.eSm,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f3,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,K.afS,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.r,1)
l=j.aOI("Original due",C.wo(h.r,!1))
n=j.aOI("Current due",C.wo(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.P,n,B.S,A.p(i,A.d(h.gaIW(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Ax,i,i,1/0),B.S,j.cbi(),B.P,j.c_6(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.r,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.f62,B.at,A.d(q,i,i,i,i,i,i,D.eWA,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaDO()){q=A.m(14)
o=A.I(B.cn,B.r,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.flh,B.P,A.bv(A.m(12),A.ei(new A.a6(1/0,88,A.b3(i,i,i,new A.V1(h.ax,B.M,D.eGE,!0,3.5,i),B.au),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.EK,i,i,i)],s))}p.push(B.az)
p.push(D.fdK)
return A.p(i,A.v(A.a([r,new A.C(B.afV,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aOI(d,e){var w=null
return A.A(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a6X,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eTl,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cbi(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a85(B.dT,u,"Not paid yet")
w=t.yG(null).length
v=w===0?B.aZ:B.bL
return this.a85(v,u,C.wo(t.x,!0))},
c_6(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a85(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a85(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a6X,u,u,u)
v=A.T(d).k("J<1,hh>")
v=A.B(new A.J(d,new C.c_o(),v),v.k("ai.E"))
return A.v(A.a([w,B.ao,A.c_(B.bD,v,B.bt,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a85(d,e,f){var w=null
return A.A(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a6X,w,w,w),1),new A.dm(1,B.ci,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dK,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b8W.prototype={
a6(d,e){new A.V1(this.b,B.M,e,!0,3.5,null).a6(d,e)},
aq(d){return d.b!==this.b}}
C.amZ.prototype={
T(){return new C.aBd(A.a([],x.bp))},
gdX(){return this.c}}
C.aBd.prototype={
a_(){this.a1()
this.I7()},
I7(){var w=0,v=A.j(x.H),u,t=this,s
var $async$I7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0V(t.a.c),$async$I7)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dCS(t,s))
case 1:return A.h(u,v)}})
return A.i($async$I7,v)},
aQz(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.bq:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bo).j(0.22)
w=A.m(10)
return A.br(v,new A.b4(4,r,new A.az(u,1,B.r,-1)),v,B.bk,v,v,v,v,!0,new A.b4(4,w,new A.az((this.a.d.a?B.bq:B.bo).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aVw),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aQy(d){return this.aQz(d,null)},
OC(d){return this.ceR(d)},
ceR(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OC=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.G0:B.eG
w=7
return A.b(new A.hV().BG(72,900,900,n),$async$OC)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fd(),$async$OC)
case 8:p=f
n=B.cS.gcu().aI(p)
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
if(n!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$OC,v)},
aYX(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.I((q?B.bq:B.bo).j(0.18),B.r,1)
if(d)q=B.cY
else q=s.a.d.a?B.bq:B.bo
q=A.W(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.aA,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bq:B.bo
t=x.p
u=A.D(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c7)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.W(B.cx,s.a.d.a?B.bq:B.bo,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c7))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.ke,D.bno,r,r,r)},
CD(d){return this.bwP(d)},
bwO(){return this.CD(null)},
bwP(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CD=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.ar(new A.bb(a4,B.b2,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jM(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.O(p)):B.k.aa(p,2)}o=new A.ar(new A.bb(a4,B.b2,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ar(new A.bb(a4,B.b2,B.aN),s)
if(a3){a4=new A.S(Date.now(),0,!1).bN(6048e8)
m=A.c0(a4.gcg(),a4.gcc(),a4.gcs(),0,0,0,0,0)}else{a4=a5.f
m=A.c0(a4.gcg(),a4.gcc(),a4.gcs(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bl(a4,!0,x.cT)
i=a3?null:A.fTi(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.vF?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hQ(B.w.j(0.55),!0,"Dismiss",a4,new C.dCB(),new C.dCC(a2,t,a5,r,new C.dCD(a2,t),o,n,j),B.eE,!0,x.y),$async$CD)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d3(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.S$=s
r.P$=0
o.S$=s
o.P$=0
n.S$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.I(x.q).f.R(D.eMZ)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.R(D.eLE)
w=1
break}a1=A.frd(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.vF?"male":"female"
w=7
return A.b(A.agw(a3,A.h0b(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$CD)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.vF?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c0(a3.gcg(),a3.gcc(),a3.gcs(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gcg(),a4.gcc(),a4.gcs(),0,0,0,0,0)))a5.cHb(a2.a)
w=8
return A.b(A.agw(t.a.c,a5),$async$CD)
case 8:case 5:w=9
return A.b(t.I7(),$async$CD)
case 9:case 1:return A.h(u,v)}})
return A.i($async$CD,v)},
aRb(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bq:B.bo).j(0.2)
s=A.I(s,B.r,g?1.5:1)
r=C.aWT(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aP:B.aA
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.p(p,A.A(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.ba,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.af)},
Rg(d){return this.cw5(d)},
cw5(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hQ(B.w.j(0.55),!0,"Dismiss",s,new C.dCV(),new C.dCW(t,d),B.hV,!0,x.y),$async$Rg)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.agw(t.a.c,d),$async$Rg)
case 7:w=8
return A.b(t.I7(),$async$Rg)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Rg,v)},
Nh(d,e){return this.bHw(0,e)},
bHw(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kW(s,"Cancel","Delete",e.b+" \xb7 "+A.Af(e.c)+" will be removed from this device.","Delete this debt?"),$async$Nh)
case 3:if(!g){w=1
break}w=4
return A.b(C.fls(t.a.c,e.a),$async$Nh)
case 4:w=5
return A.b(t.I7(),$async$Nh)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Nh,v)},
adw(d){return this.c8M(d)},
c8M(d){var w=0,v=A.j(x.H),u=this,t
var $async$adw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bW(B.K,null,new C.dCP(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$adw)
case 2:return A.h(null,v)}})
return A.i($async$adw,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e1v
w=J.dH(m.d,new C.dCX())
v=A.B(w,w.$ti.k("H.E"))
w=J.dH(m.d,new C.dCY())
u=A.B(w,w.$ti.k("H.E"))
t=B.d.cI(v,0,new C.dCZ())
w=A.m(18)
s=m.a.d.a
r=s?D.cjf:D.aw3
q=A.I(s?B.cY.j(0.35):B.cY.j(0.18),B.r,1)
s=A.p(l,D.bM5,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.aw,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aA,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.m(12),A.aK(!1,A.m(12),!0,D.e0V,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dD_(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.af)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.csj("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Af(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.A(A.a([o,B.ab,A.D(m.b3V(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a7(B.ax,B.aD,B.x,r,l,l),B.n),l,l,l,l,B.afP,l,l,l),B.az],p)
if(J.ck(m.d)){w=m.a.d.a
s=w?B.dX:B.c
q=A.m(18)
o=A.I((w?B.bq:B.bo).j(0.12),B.r,1)
n=A.p(l,D.bH4,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aA,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bo,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bpQ,l,l,1/0))}else{w=m.gce9()
s=A.B(new A.J(v,w,A.T(v).k("J<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ao,new A.C(D.brv,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bo,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.J(u,w,A.T(u).k("J<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b3V(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bq:B.bo).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bo,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aP:B.aA
return A.p(u,A.v(A.a([q,B.bz,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eh,u,u,u)},
csj(d,e){return this.b3V(!1,d,e)},
cea(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yG(j).length,h=d.bcY()
if(d.x!=null){w=d.yG(j).length
v=w===0?B.cY:B.bL}else if(d.gSU())v=B.bL
else{if(h)w=B.cY
else w=k.a.d.a?B.bq:B.bo
v=w}if(d.x!=null){w=d.yG(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wo(u,!1)}else{u.toString
t="Paid "+C.wo(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wo(w,!1)+" \xb7 "+i+" missed":"Due "+C.wo(w,!1)}w=k.a.d.a?B.dX:B.c
u=A.m(18)
if(d.gSU()&&d.x==null)s=B.bL.j(0.35)
else s=(k.a.d.a?B.bq:B.bo).j(0.12)
s=A.I(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ad(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bm:B.lw
o=A.I(d.gSU()&&d.x==null?B.bL.j(0.45):B.cY.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fTi(d.d)
o=A.p(B.A,A.db(C.aWT(A.frd(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.aA
m=x.p
n=A.a([new A.dm(1,B.ci,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaDO())B.d.v(n,A.a([B.ea,A.W(B.Mo,B.cY.j(0.8),j,j,j,14)],m))
p=A.D(A.v(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.d0,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.Af(d.c)
l=k.a.d.a?B.aP:B.aA
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aK(!1,q,!0,new A.C(V.afz,A.A(A.a([o,B.bf,p,B.ab,A.v(A.a([n,B.bz,A.W(B.eo,(k.a.d.a?B.bq:B.bo).j(0.5),j,j,j,18)],m),B.dE,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dCR(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.af),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.db,j,j,j,j)}}
C.tX.prototype={}
C.ajk.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bg
u=v?B.F:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.I(q,B.r,t?1.2:1.6)
p=A.a([new A.ad(0,B.G,B.w.j(0.45),B.cy,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.r,1)
n.push(A.aE(a0,A.p(a0,A.W(B.cx,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a8))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.j6,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.asC,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.F1,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f1(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eg)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bmD,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bl,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fo,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eHo)
a2=A.a([A.A(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.uX,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a7(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.l6,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hg,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a7(B.ax,B.aD,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bnQ,a0,a0,a0,a0)}}
C.aSH.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bg?B.bg:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.D(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bl:B.cD,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.m,q,B.e,B.j,0,q,q),B.d0,n],m)
if(p.z)o.push(new A.C(B.uU,n,q))
return new A.C(B.db,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.RQ.prototype={
T(){return new C.bcu()}}
C.bcu.prototype={
gbVe(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e1q,D.e1w],l)
for(w=0;w<8;++w){v=D.a0M[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.FL:B.Be
q=t===s
r=A.W(r,q?B.ez:B.c_,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.x(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bE(1,B.bi,new A.x(v.c,n,An.CM,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aV(24,24)
p=new A.az(B.ez,2,B.r,-1)
s=new A.o(n,n,new A.bP(p,p,p,p),new A.bp(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.C(B.eF,A.v(A.a([new A.C(B.mb,new A.co(B.aQ,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.Do(!0,new C.ajk(v,q.d,q.e,new C.d2J(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d2K(o,v),n,n,n,n,n,n,!1,B.a8))}k.push(new A.C(D.bo8,A.bJ(D.fqt,new C.d2L(o,d),A.bk(B.b4,n,n,n,n,B.nZ,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bn(!0,new A.cU(new A.aY(0,1/0,0,m.a.b*0.9),A.cB(k,n,D.bsl,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.n3.prototype={
ad(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a5().ac()],x.N,x.z)},
b9E(d,e,f){return new C.n3(this.a,e,d,f)}}
C.GX.prototype={
w1(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.GX(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aC0(d){var w=null
return this.w1(w,w,w,w,w,d,w,w,w,w,w,w)},
cD1(d){var w=null
return this.w1(w,w,w,w,d,w,w,w,w,w,w,w)},
b9C(d,e,f){var w=null
return this.w1(d,w,w,w,w,w,w,w,e,w,f,w)},
cDG(d){var w=null
return this.w1(w,w,w,w,w,w,d,w,w,w,w,w)},
cDP(d){var w=null
return this.w1(w,w,w,w,w,w,w,w,w,d,w,w)},
cD_(d){var w=null
return this.w1(w,w,w,d,w,w,w,w,w,w,w,w)},
cDR(d){var w=null
return this.w1(w,w,w,w,w,w,w,w,w,w,w,d)},
cCX(d){var w=null
return this.w1(w,w,d,w,w,w,w,w,w,w,w,w)},
cCS(d){var w=null
return this.w1(w,d,w,w,w,w,w,w,w,w,w,w)},
F7(d){var w=null
return this.w1(w,w,w,w,w,w,w,d,w,w,w,w)},
cDZ(d,e,f,g,h,i,j,k,l,m,n){return this.w1(d,e,f,g,null,h,i,j,k,l,m,n)},
ad(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cAN(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bLv(d),k=A.aN(d.h(0,"emblem")),j=k==null?o:B.k.O(k),i=A.aN(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.BS.geh(D.BS))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a2f)
q=l.$2("frame",D.a1J)
l=l.$2("texture",D.a1E)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cDZ(p,u,t,q,r,A.tC(d.h(0,"ribbon"))?A.Fr(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Yn.prototype={
T(){return new C.ayg(A.a([],x.I),D.LX)},
gdX(){return this.c}}
C.ayg.prototype={
a_(){var w,v=this
v.a1()
v.f=A.z7(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.kJ()
w=v.a
C.bzy(w.c,w.d).bz(new C.d3p(v),x.fL)},
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
kJ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.K7(s.c,s.d),$async$kJ)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d3d(t,r))
t.au0()
case 1:return A.h(u,v)}})
return A.i($async$kJ,v)},
gaqD(){var w,v=this
if(!J.ck(v.d)){w=v.r
w=w<0||w>=J.ac(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
au0(){var w,v,u=this.gaqD(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
c7c(d){this.m(new C.d3a(this,d))
this.au0()},
MD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$MD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.n3(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aOU(r.c,r.d,s),$async$MD)
case 3:w=4
return A.b(t.kJ(),$async$MD)
case 4:if(t.c==null||J.ck(t.d)){w=1
break}q=J.q1(t.d,new C.d2M(s))
p=q>=0?q:J.ac(t.d)-1
t.m(new C.d2N(t,p))
t.au0()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.AJ(p+1,B.cq,B.kD),$async$MD)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$MD,v)},
Ap(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ap=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaqD()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aOU(o.c,o.d,new C.n3(s,r,q,new A.S(p,0,!1))),$async$Ap)
case 3:w=4
return A.b(t.kJ(),$async$Ap)
case 4:if(t.c==null){w=1
break}t.m(new C.d3e(t))
case 1:return A.h(u,v)}})
return A.i($async$Ap,v)},
Ni(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ni=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaqD()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d2V(r),s,null,!0,!0,x.y),$async$Ni)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bzj(s.c,s.d,r.a),$async$Ni)
case 4:t.m(new C.d2W(t))
w=5
return A.b(t.kJ(),$async$Ni)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.SX(B.o.D(t.r+1,0,J.ac(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Ni,v)},
xX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ap(),$async$xX)
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
return A.b(C.Q6(s,r.r,o,p,q),$async$xX)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hgu(s,r.x,r.r),$async$xX)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.K7(s.c,s.d),$async$xX)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.n3(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Ao(r.c,r.d,l),$async$xX)
case 11:w=12
return A.b(t.kJ(),$async$xX)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xX,v)},
a_p(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ap(),$async$a_p)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxV(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.yk,new C.d3b(t),new C.d3c())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mi("Our Family",o,"",""))
for(o=J.aX(t.d);o.C();){n=o.gU(o)
p.push(new F.mi(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fUU(o,new F.r3(s,r,"",p,new F.ui(q.d,null,null,null,null,"","","")),null),$async$a_p)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a_p,v)},
N0(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$N0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ap(),$async$N0)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bW(D.abs,null,new C.d2R(t),s,!0,!0,!0,D.aKD,!1,!1,x.N),$async$N0)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cD1(r)
t.m(new C.d2S(t,q))
s=t.a
w=7
return A.b(C.QG(s.c,s.d,q),$async$N0)
case 7:case 1:return A.h(u,v)}})
return A.i($async$N0,v)},
W2(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$W2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bW(D.abs,null,new C.d2X(t),r,!0,!0,!0,D.aKD,!1,!1,x.e),$async$W2)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d2Y(t,s))
r=t.a
w=4
return A.b(C.QG(r.c,r.d,s),$async$W2)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.AJ(0,B.dV,B.on)
case 1:return A.h(u,v)}})
return A.i($async$W2,v)},
bMB(d){var w=d.bQ(),v=B.a.aT(B.o.u(w.gcc()),2,"0"),u=B.a.aT(B.o.u(w.gcs()),2,"0")
return""+w.gcg()+"-"+v+"-"+u},
gxV(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bUv()
if(r.e)w=D.aao
else if(J.ck(r.d)){w=r.y
v=r.gxV(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eRQ,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a6(q,330,new A.C(A_.agP,new C.XG(w,v,0,q),q),q),B.bv,t,B.ao,A.d(u,q,q,q,q,q,q,A.l(q,q,D.k7.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bv],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eCL,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ad(0,B.G,B.dO.j(0.45),B.J,18)],x.V),E.vs,B.n),q,q,q,q,B.XW,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gczW(),q,q,q,q,q,q,!1,B.a8))
w.push(B.S)
w.push(A.hc(D.bDm,D.fpY,r.gaKE(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ac(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.k7.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dQ:B.zF
u=A.v(A.a([new A.C(D.bp9,w,q),A.D(A.Ie(v,new C.d3n(r),J.ac(r.d)+1,q,r.gc7b(),u,B.aQ),1),r.bzI()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.cb(q,D.acD,new A.an(B.W,q,B.b_,B.q,A.a([D.aJ9,A.bn(!0,A.v(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
bUv(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cx(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Jf(B.dW,"AI",h.gbxC(),!0))
if(h.a.f)f.push(new C.Jf(B.n_,"Cover",h.gbI5(),!1))
if(h.a.f)f.push(new C.Jf(B.xY,"Header",h.gbD7(),!1))
if(J.cx(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Jf(B.tD,"Print",h.gcga(),!1))
if(h.a.f&&J.cx(h.d)&&h.r>=0){v=h.w
u=v?B.hw:B.j9
t=v?"Save":"Edit"
f.push(new C.Jf(u,t,v?h.gcme():new C.d37(h),!1))}if(h.a.f)f.push(new C.Jf(B.hv,"Add page",h.gaKE(),!1))
v=C.hcH(h.y.Q)
u=h.gxV(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ac(h.d)
r=J.ac(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.diI
else{k=new A.aV(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.az(E.jH.j(0.5),1,B.r,-1)
j=A.p(g,A.W(l.a,D.k7,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bP(i,i,i,i),new A.bp(k,k,k,k),g,new A.a7(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.k7.j(0.85)
p.push(new A.bE(1,B.bi,A.aE(B.c5,A.v(A.a([k,B.bz,new A.x(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a8),g))}return new C.ajk(v,u,t+" \xb7 "+s+" "+r,new C.d38(h),A.A(p,B.m,g,B.e,B.j,0,g,g),g)},
zs(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ap(),$async$zs)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aX(t.d);r.C();){q=r.gU(r)
s.push(q.b+" "+q.c)}p=F.a19(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.c9(null,null,!0,null,new C.d2O(t,p),s,null,!0,!0,x.N),$async$zs)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xX(),$async$zs)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Dc(),$async$zs)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.EN("Swahili (Kiswahili)",!0),$async$zs)
case 18:w=16
break
case 17:w=19
return A.b(t.cwJ(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zs)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zs,v)},
XV(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jH.j(0.3),B.r,1),r=x.p
return new A.C(B.cG,A.aK(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vs,B.a6),w,42,w,w,w,w,w,42),B.bf,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,A7.SD,w,w,w),A.d(g,w,w,w,w,w,w,A1.Sw,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d39(d,h),w,w,w,w,w,w,w),w)},
Dc(){return this.bM5()},
bM5(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Dc=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d30(r),a7,null,!0,!0,x.ei),$async$Dc)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eL("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.c9(null,null,!1,null,new C.d31(o),a7,null,!0,!0,x.H).f9(new C.d32(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.cf(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ad()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.yk[a1]
J.cf(j,i.a)}w=8
return A.b(C.afI(a0,a7,new C.d33(o),d,l,e,j),$async$Dc)
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
if(l!=null&&a6.a)A.a5(l,!0).eH()
l=o
l.shO($.aw())
J.aPl(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.R(A.b2(null,null,null,null,null,B.q,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcl(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ac(p);++a4){if(m.b.ag(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b9E(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Ao(j.c,j.d,l),$async$Dc)
case 11:w=12
return A.b(r.kJ(),$async$Dc)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yk[a1].a)
a5=l.cAN(j,12,a7)
l=r.a
w=15
return A.b(C.QG(l.c,l.d,a5),$async$Dc)
case 15:if(r.c!=null)r.m(new C.d34(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.AJ(0,B.dV,B.on)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.R(A.b2(a3?A.coy("Undo",new C.d35(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Dc,v)},
EN(d,e){return this.cwK(d,e)},
cwJ(d){return this.EN(d,!1)},
cwK(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$EN=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eL("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.c9(null,null,!1,null,new C.d3g(a0),k,null,!0,!0,x.H).f9(new C.d3h(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.cf(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1m(m,new C.d3i(a0)),$async$EN)
case 10:w=8
break
case 9:w=11
return A.b(C.bB1(new C.d3j(a0),m,a2),$async$EN)
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
if(o!=null&&f.a)A.a5(o,!0).eH()
o=a0
o.shO($.aw())
J.aPl(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.R(A.b2(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ac(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b9E(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Ao(k.c,k.d,o),$async$EN)
case 12:w=13
return A.b(r.kJ(),$async$EN)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(A.coy("Undo",new C.d3k(r,d),null),null,null,null,null,B.q,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EN,v)},
bzI(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d2P(v):u
r=A.aH(u,u,u,u,A.W(D.bz4,s?D.k7:B.b5,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cx(v.d)&&!v.w&&v.r>=0)s=A.hc(A.W(B.v7,B.Em,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Em,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbHF(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.k7.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.av(s,u,u,u),1)
w=t<J.ac(v.d)?new C.d2Q(v):u
return A.bn(!0,new A.C(D.boY,A.A(A.a([r,s,A.aH(u,u,u,u,A.W(B.eo,t<J.ac(v.d)?D.k7:B.b5,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.Yr.prototype={
T(){return new C.bcP(new A.ar(B.as,$.aw()))}}
C.bcP.prototype={
ga0x(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
gbKS(){var w,v=this.ga0x()
A:{if("cover"===v){w=D.cP_
break A}if("book"===v){w=D.cL_
break A}w=D.dbA
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jH.j(0.5),n=x.p,m=A.A(A.a([D.diJ,B.aw,D.bug,A.aH(q,q,q,q,B.ld,q,q,q,new C.d59(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jG(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d5a(r),r.ga0x()==="page",q,q,q,q))
if(r.a.d)l.push(A.jG(q,q,q,D.fkP,q,new C.d5b(r),r.ga0x()==="book",q,q,q,q))
l.push(A.jG(q,q,q,D.f8C,q,new C.d5c(r),r.ga0x()==="cover",q,q,q,q))
l=A.c_(B.bD,l,B.bt,6,8)
k=B.c.j(0.07)
k=A.aL(q,B.T,!1,q,!0,B.q,q,A.aM(),r.d,q,q,q,q,q,2,A.br(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kt,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dk,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbKS(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mz(q,B.c.j(0.08),new A.x(s,q,B.Io,q,q,q,q,q,q,q,q,q),B.hz,new C.d5d(r,s),q,q,q,q))}return A.eE(q,E.Ac,A.cd(A.v(A.a([m,B.S,D.fnV,B.ao,l,B.ac,k,B.P,A.c_(B.bD,w,B.bt,6,6),B.az,A.dp(D.bDj,D.foH,new C.d5e(r,d),A.bk(B.b4,q,q,q,q,B.nZ,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.at,D.fjc],n),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.fy,q,q,B.ah),q,q,q,D.agz,B.d_,q,new A.b7(p,new A.az(o,1.4,B.r,-1)),q)}}
C.Yp.prototype={
T(){return new C.ayh(A.a([],x.Y))},
gdX(){return this.c}}
C.adv.prototype={}
C.ayh.prototype={
a_(){this.a1()
this.kJ()},
kJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Qa(p.c,p.d),$async$kJ)
case 3:o=e
n=A.a([],x.Y)
p=J.aX(o)
case 4:if(!p.C()){w=5
break}s=p.gU(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bzy(r.c,q),$async$kJ)
case 6:j=e
i=J
w=7
return A.b(C.K7(t.a.c,q),$async$kJ)
case 7:m.push(new l.adv(k,j,i.ac(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d3E(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kJ,v)},
b53(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Ph(d,e){return this.c8K(0,e)},
c8K(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ph=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).ce(A.ej(new C.d3D(u,e),!0,null,x.y)),$async$Ph)
case 2:t=g
w=3
return A.b(u.kJ(),$async$Ph)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.R(D.aMw)
return A.h(null,v)}})
return A.i($async$Ph,v)},
EQ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$EQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.R(D.aMs)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.af0(s.c,s.d),$async$EQ)
case 5:q=e
w=6
return A.b(t.kJ(),$async$EQ)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Ph(0,B.d.ix(t.d,new C.d3I(q))),$async$EQ)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Q6(p,s.f,r,n,o),$async$EQ)
case 10:m=e
w=11
return A.b(t.kJ(),$async$EQ)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.R(D.aMw)
case 1:return A.h(u,v)}})
return A.i($async$EQ,v)},
OM(d,e){return this.ck_(0,e)},
ck_(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$OM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d3H(t,e),s,null,!0,!0,x.y),$async$OM)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a1z(s.c,s.d,e.a),$async$OM)
case 4:w=5
return A.b(t.kJ(),$async$OM)
case 5:case 1:return A.h(u,v)}})
return A.i($async$OM,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bzL(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jH.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fF(0.7142857142857143,A.p(n,A.v(A.a([D.diK,B.ac,D.e0B,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.k7.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.ba,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gczS(),n,n,n,n,n,n,!1,B.a8))}w=A.m(22)
v=A.I(E.jH.j(0.85),B.r,1.6)
s=A.aE(n,A.p(n,D.bKV,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jH.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d3J(d),n,n,n,n,n,n,!1,B.a8)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jH.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bf,D.buC,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eQX,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h1,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bQp,B.n),n,n,n,Al.Lq,D.bn4,n,n,n)
if(o.e)k=D.aao
else k=k.length===0?D.b1T:A.cm(new C.d3K(k))
return A.cb(n,D.acD,new A.an(B.W,n,B.b_,B.q,A.a([D.aJ9,A.bn(!0,A.v(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bzL(d){var w,v,u=this,t=null,s=u.b53(d),r=d.c,q=x.p,p=A.a([A.bY(0,A.f1(B.A,new A.a6(300,420,new C.XG(d.b,s,r,t),t),B.f,B.dt),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bKe,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b5,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d3B(u,d),t,t,t,t,t,t,!1,B.a8),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eQw,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fF(0.7142857142857143,new A.an(B.W,t,B.aa,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.k7.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d3C(u,d),t,t,t,t,t,t,!1,B.a8)}}
C.Jf.prototype={}
C.XG.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.yk,new C.cCH(m),new C.cCI()),j=m.c,i=D.BS.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lK:B.ba
v=new C.cCJ(h)
i=A.a([new A.ad(0,B.G,B.w.j(0.6),D.dYV,28)],x.V)
u=x.p
t=A.a([A.bY(0,A.b3(l,l,l,new C.ba6(j.x,h,l),B.au),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aV(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bp(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.agQ,8,0.85,2.2),v.$4(D.brO,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.agQ,8,0.85,2.4))
else if(r==="corners")t.push(A.bY(0,new A.C(D.brK,A.b3(l,l,l,new C.b9Y(h,l),B.au),l),0,0,0))
r=A.W(D.avd[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.asC,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.az,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bY(0,new A.C(D.bsd,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aFg(l),D.eGx),l,l,l,46,0,l))
return A.p(l,A.bv(D.a95,new A.an(B.W,l,B.aa,B.q,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.a95,i,new A.a7(B.ax,B.aD,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.ba6.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eT()
f.dI(11)
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
k=h.gbI().a.snapshot()
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
C.b9Y.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.X(),k=A.M(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.ey3,new A.cL([w,0,-1,1]),new A.cL([0,v,1,-1]),new A.cL([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
s=n.gbI().a.snapshot()
w.drawPath((n.e=new A.cF(s)).a,m)
m.delete()
s=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
aq(d){return!d.b.A(0,this.b)}}
C.tY.prototype={}
C.XY.prototype={
T(){return new C.ba4()}}
C.ba4.prototype={
gnO(){var w=this.d
return w===$?this.d=this.a.c:w},
gxV(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bb(w.b,B.b2,B.aN),$.aw())}return v},
gazi(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bb(w.c,B.b2,B.aN),$.aw())}return v},
gapd(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bb(w.y,B.b2,B.aN),$.aw())}return v},
q(){var w=this,v=w.gxV(0),u=v.S$=$.aw()
v.P$=0
v=w.gazi()
v.S$=u
v.P$=0
v=w.gapd()
v.S$=u
v.P$=0
w.a2()},
apP(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jG(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cW8(this,f,u),e===u,s,s,s,s))}return A.c_(B.bD,r,B.bt,6,8)},
avs(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lk,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnO(),a0=f.gxV(0),a1=a0.a.a,a2=f.gazi(),a3=a2.a.a,a4=f.gapd(),a5=d.b9C(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a6(190,260,A.f1(B.A,new A.a6(270,370,new C.XG(a5,d,f.a.e,e),e),B.f,B.dt),e),e,e,e)
a0=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a0,e,e,e,e,e,2,f.avs("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cWx(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a2,e,e,e,e,e,2,f.avs("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cWy(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yk[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b5
q=r.a===q
o=new A.az(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bP(o,o,o,o),e,e,new A.a7(B.ax,B.aD,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.ay
v.push(A.aE(e,A.v(A.a([p,B.d0,new A.x(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cWz(f,t),e,e,e,e,e,e,!1,B.a8))}v=A.c_(B.bD,v,B.bt,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b4.j(0.35):B.c.j(0.07)
m=new A.aV(14,14)
s=f.d
o=new A.az((s===$?f.d=f.a.c:s).d===n?B.ez:B.K,2,B.r,-1)
q.push(A.aE(e,A.p(e,A.W(D.avd[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bP(o,o,o,o),new A.bp(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cWA(f,n),e,e,e,e,e,e,!1,B.a8))}q=A.c_(B.bD,q,B.bt,8,8)
a4=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a4,e,e,e,e,e,2,f.avs("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cWB(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mv,e,e,e)
m=A.a([],w)
for(l=D.BS.gdL(D.BS),l=l.gah(l);l.C();){k=l.gU(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ez:B.b5
g=r.e===i
o=new A.az(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bP(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.ay
m.push(A.aE(e,A.v(A.a([j,B.bz,new A.x(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cWC(f,k),e,e,e,e,e,e,!1,B.a8))}m=A.c_(B.bD,m,B.bt,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mv,e,e,e)
k=f.gnO()
return new A.C(new A.Q(0,0,0,a3.f.d),A.bn(!0,new A.cU(new A.aY(0,1/0,0,a1.a.b*0.92),A.cB(A.a([D.fiG,B.ac,d,B.aO,a0,B.S,a2,B.az,D.fov,B.P,v,B.az,D.fiP,B.P,q,B.az,a4,B.az,p,B.P,m,B.az,l,A.kR(e,9,""+B.k.V(f.gnO().f),36,18,new C.cWD(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mv,e,e,e),B.ao,f.apP(D.a2f,f.gnO().r,new C.cWE(f),D.deL),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mv,e,e,e),B.ao,f.apP(D.a1J,f.gnO().w,new C.cWF(f),D.deQ),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mv,e,e,e),B.ao,f.apP(D.a1E,f.gnO().x,new C.cWH(f),D.dgd),B.ao,A.iC(e,B.b4,e,B.ag,e,new C.cWI(f),e,e,e,D.fdh,f.gnO().z),B.bv,A.bJ(D.fhA,new C.cWJ(f,a6),A.bk(B.b4,e,e,e,e,B.nZ,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,Q.ago,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aFg.prototype={
a6(d,e){var w,v,u,t=new A.aQ($.X().r,B.ap,null,null,A.a([],x.v))
t.E(new A.b5(0,0))
w=e.a
t.E(new A.ap(w,0))
v=e.b
t.E(new A.ap(w,v))
t.E(new A.ap(w/2,v-12))
t.E(new A.ap(0,v))
t.E(new A.bF())
u=A.M()
u.sau(D.bR1.aw(0,new A.aa(0,0,0+w,0+v)))
d.aO(t,u)},
aq(d){return!1}}
C.bfh.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.X()
w=A.M()
w.sau(D.bQ5.aw(0,new A.aa(0,0,a3,a4)))
a5.aY(new A.aa(0,0,a3,a4),w)
v=B.k.dw(a2/112)
u=new A.eT()
u.dI(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cOZ[u.aB(9)]
j=u.aB(14)
J.bA(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.aa(n,j,n+m,j+l)
h=A.bz(i,B.h8)
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
e.r=E.jH.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c4(new A.aa(h,j,g,j+2)),d)
d.delete()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jH.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c4(new A.aa(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aB(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.sau(D.bPt.aw(0,new A.aa(0,r,a3,q)))
d=p.H()
w.drawRect(A.c4(new A.aa(0,r,a3,q)),d)
d.delete()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jd
d=p.H()
w.drawRect(A.c4(new A.aa(0,q,a3,q+14)),d)
d.delete()}w=A.M()
w.r=D.b5c.j(0.72).gp(0)
a5.aY(new A.aa(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.M()
a4.sau(new A.bR(B.A,0.5,B.x,a0,0,A.a([D.bbP.j(0.22),B.K],t),a0,a0).aw(0,A.bU(new A.u(w,a2),a1)))
a5.ai(new A.u(w,a2),a1,a4)},
aq(d){return!1}}
C.b8k.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aJ(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.kG(new A.o(A.aq(D.k7,D.bfY,w/4),o,new A.bP(B.Y,new A.az(B.w.j(0.12),1,B.r,-1),B.Y,B.Y),B.Jx,o,o,B.n),B.bd,o,o),o))}v=x.V
u=A.a([new A.ad(0,B.G,B.w.j(0.35),B.aEO,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aV(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jH.j(0.6),o,o,new A.bp(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.pK,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aVg,u,D.bR_,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ad(0,B.G,B.w.j(0.4),B.dn,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aFg(o),D.eGs),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aSH(p.y,r,G.io,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.r,o,o,o,o,o,2,A.br(o,B.ew,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.io.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f36,!0,B.a5,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.io.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.D(A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.w,o,o,o,o,o,2,A.br(o,B.ew,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.io.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.eVl,!0,B.a5,B.z6,B.am,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.f3_,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.io.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.D(A.p(o,o,B.f,D.E9.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fo,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.E9.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.f,D.E9.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.az],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.io.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.WW(A.dq(A.a([A.dq(o,o,o,o,o,o,o,o,o,D.eYp,B.a.ap(k,0,1)),A.dq(o,o,o,o,o,o,o,o,o,o,B.a.b_(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.io.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.q,o,B.y,o,o,o,o,B.ah)}s.push(A.D(n,1))
s.push(new A.C(B.i7,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.io.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.A(A.a([u,A.D(A.p(o,A.bv(B.Jx,new A.an(B.W,o,B.aa,B.q,A.a([t,new A.C(D.brh,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.bZ(o,new A.o(o,o,o,o,o,new A.a7(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bd),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Jx,v,D.bRv,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.q,l,o)}}
C.ao4.prototype={
T(){return new C.aBO(A.a([],x._))},
bp(){return this.r.$0()},
pw(){return this.w.$0()},
gdX(){return this.c}}
C.aBO.prototype={
a_(){var w,v
this.a1()
this.vy()
w=this.a
v=w.c
if(v.length!==0)C.a69(v,w.e,w.d.w)},
vn(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fUX(r,t.e,!1,s.w,new C.dQt(u),null,s),$async$vn)
case 2:w=3
return A.b(u.vy(),$async$vn)
case 3:return A.h(null,v)}})
return A.i($async$vn,v)},
Zz(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Zz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fUX(r,t.e,!0,s.w,new C.dQs(u),null,s),$async$Zz)
case 2:w=3
return A.b(u.vy(),$async$Zz)
case 3:return A.h(null,v)}})
return A.i($async$Zz,v)},
vy(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Ad(q.a.c),$async$vy)
case 7:p=e
if(q.c!=null)n=q.e||J.cx(p)
else n=!1
if(n)q.m(new C.dQv(q,p))
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
return A.b(C.FS(q.a.c).cM(0,B.pn),$async$vy)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dQw(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dQx(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vy,v)},
NN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$NN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.R(D.eK3)
w=3
return A.b(C.FS(t.a.c),$async$NN)
case 3:r=e
w=4
return A.b(C.fAT(t.a.c,r),$async$NN)
case 4:q=e
w=5
return A.b(C.FS(t.a.c),$async$NN)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dQr(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ac(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(null,null,null,q?B.dw:B.cR,null,B.q,null,s,null,B.m7,null,null,null,null,null,null,null,null,null,null))
t.a.pw()
case 1:return A.h(u,v)}})
return A.i($async$NN,v)},
Hn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i0Q(l),$async$Hn)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hvA(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aYj(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Hn)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hcR(r)
o=Date.now()
n=t.a.c
m=new C.ku(l,r.toUpperCase(),p,!0,B.T,D.BH,new A.S(o,0,!1),0,n,D.tp)
w=5
return A.b(C.a1G(n,m),$async$Hn)
case 5:w=6
return A.b(t.vy(),$async$Hn)
case 6:t.a.bp()
t.a.pw()
if(t.c==null){w=1
break}t.E_(m)
case 1:return A.h(u,v)}})
return A.i($async$Hn,v)},
E_(d){return this.caM(d)},
caM(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$E_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Ad(u.a.c),$async$E_)
case 2:n=l.r_(k.dH(f,new C.dQu(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hu(m,new C.anZ(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$E_)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a1G(u.a.c,o),$async$E_)
case 6:case 5:w=7
return A.b(u.vy(),$async$E_)
case 7:u.a.pw()
return A.h(null,v)}})
return A.i($async$E_,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.N(d).ax.a===B.H,o=new C.tt(p)
if(r.e)return A.av(A.mC(q,p?B.bq:B.bo,q,q,q,q,q,q,q,q),q,q,q)
if(J.ck(r.d)){w=p?B.dX:B.c
v=A.m(15)
u=A.aF(!1,B.a1,!0,q,A.aK(!1,q,!0,A.p(q,D.bEo,B.f,q,q,new A.o(B.aU.j(0.12),q,A.I(B.aU,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc9Q(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.af)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.EV(A.p(q,A.v(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bo,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e0,A.bJ(D.fpI,r.gaOE(),A.bk(B.bT,q,q,q,q,q,Ak.XZ,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.brd,q,q,1/0),15,B.ag,1.05,D.a7M,q)}w=J.ac(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b3],v)
if(J.cx(r.d))w.push(A.aH(q,q,q,q,A.W(B.y4,B.aU,q,q,q,q),q,q,q,new C.dQz(r),q,q,q,q,"Sync family trees with database",q))
if(J.cx(r.d))w.push(A.aH(q,q,q,q,A.W(B.xW,B.aU,q,q,q,q),q,q,q,r.gaeb(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dp(E.alY,D.f6s,r.gaOE(),A.bk(B.bT,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ac(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.EV(r.cwO(J.q(r.d,s),o),14,B.ag,1,D.a7M,q))
B.d.v(w,u)}return A.v(A.a([p,B.az,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cwO(d,e){var w=null,v=e.a,u=v?B.dX:B.c,t=A.m(14),s=A.I((v?B.dZ:B.bW).j(0.55),B.r,1),r=A.a([new A.ad(0,B.G,B.w.j(v?0.35:0.08),B.ej,10)],x.V),q=A.m(14),p=A.p(w,D.bDs,B.f,w,w,new A.o(B.aU.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gan6(),m=d.d?"":" \xb7 Public",l=d.y===D.kf?" \xb7 View only":"",k=x.p
l=A.D(A.v(A.a([o,B.bz,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aK(!1,q,!0,new A.C(B.bB,A.A(A.a([p,B.bf,l,A.W(B.M8,v?B.bq:B.bo,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dQy(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.af),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.anZ.prototype={
T(){return new C.aBL(A.a([],x._),A.aW(x.N),A.b5Z())},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aBL.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.ab6()
w=u.a
v=w.c
if(v.length!==0)C.a69(v,w.e,w.d.w)},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.a2()},
a1t(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xp("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dPU(r),s,null,!0,!0,x.y),$async$a1t)
case 3:if(e!==!0||t.c==null){w=1
break}t.IQ()
t.m(new C.dPV(t,r))
w=4
return A.b(t.vp(),$async$a1t)
case 4:t.a.bp()
t.xp(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a1t,v)},
cmU(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aT.x1$.push(new C.dPP(w,f,d,e))},
aQO(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dl()
u.e2(w,v,0,1)
u.jv(q,q,1,1)
this.w.sp(0,u)},
b7i(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eF(new Float64Array(16))
q.dY(r)
w=q.Ca()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dl()
t.e2(r,u,0,1)
t.jv(v,v,1,1)
t.e2(-r,-u,0,1)
t.io(0,q)
s.sp(0,t)},
ab6(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ab6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Ad(u.a.c),$async$ab6)
case 2:t=s.r_(r.dH(e,new C.dPn(u)))
if(t!=null&&u.c!=null)u.m(new C.dPo(u,t))
return A.h(null,v)}})
return A.i($async$ab6,v)},
xp(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vn(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fUX(o,t,!1,r,new C.dPC(u),q.a,s),$async$vn)
case 2:n=A
m=J
w=3
return A.b(C.FS(u.a.c),$async$vn)
case 3:p=n.r_(m.dH(e,new C.dPD(u)))
if(p!=null&&u.c!=null)u.m(new C.dPE(u,p))
return A.h(null,v)}})
return A.i($async$vn,v)},
IQ(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cz(w,0)},
vp(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a1G(t,s),$async$vp)
case 2:return A.h(null,v)}})
return A.i($async$vp,v)},
a04(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a04=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tF(q,t.a.c)){t.xp("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i1Z(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a04)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.IQ()
t.m(new C.dPO(t,r))
w=4
return A.b(t.vp(),$async$a04)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a04,v)},
ZN(){return this.caO()},
caO(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tF(q,t.a.c)){t.xp("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.N(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dPM(r,new C.tt(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$ZN)
case 3:if(e!==!0||t.c==null){w=1
break}t.IQ()
t.m(new C.dPN(r,t))
w=4
return A.b(t.vp(),$async$ZN)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZN,v)},
UU(d){return this.bwM(d)},
bwM(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tF(r,t.a.c)){t.xp("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dPb(t,d),r,null,!0,!0,x.P),$async$UU)
case 3:s=f
if(s==null){w=1
break}t.IQ()
t.m(new C.dPc(t,s))
w=4
return A.b(t.vp(),$async$UU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$UU,v)},
a1P(d){return this.cyV(d)},
cyV(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a1P=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.N(s)
t=u.c
t.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dPX(u,d,new C.tt(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a1P)
case 2:return A.h(null,v)}})
return A.i($async$a1P,v)},
c76(d){var w=this,v=w.d
v===$&&A.c()
if(C.tF(v,w.a.c))w.Ns(d)
else w.a1P(d)},
agE(d,e){return this.cqJ(d,e)},
cqJ(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$agE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.N(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.dPR(new C.tt(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$agE)
case 3:case 1:return A.h(u,v)}})
return A.i($async$agE,v)},
Hs(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Hs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kf?3:5
break
case 3:w=6
return A.b(C.fJ2(t.a.c),$async$Hs)
case 6:s=e
o=t.a
r=C.h1z(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.agE(!s,!r),$async$Hs)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bzq(o,t.a.c)){t.xp("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kW(o,"Cancel","Remove",q.y===D.kf?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Hs)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aNh(t.a.c,t.d.a),$async$Hs)
case 11:t.a.bp()
o=t.c
if(o==null){w=1
break}A.iK(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Hs,v)},
a8I(d){return this.bHN(d)},
bHN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a8I=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tF(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b8(s,new C.dPd(p))){o=A.T(s)
p.a=A.r_(new A.cQ(new A.a2(s,new C.dPe(d),o.k("a2<1>")),new C.dPf(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.IQ()
t.m(new C.dPg(t,s,d,q))
w=3
return A.b(t.vp(),$async$a8I)
case 3:t.xp(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a8I,v)},
Ns(d){return this.bJP(d)},
bJP(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ns=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tF(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a1P(d),$async$Ns)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.c9(null,null,!0,null,new C.dPk(t,d),r,null,!0,!0,x.P),$async$Ns)
case 6:s=f
if(s==null){w=1
break}t.IQ()
t.m(new C.dPl(t,s))
w=7
return A.b(t.vp(),$async$Ns)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ns,v)},
cx9(){var w=this,v=w.d
v===$&&A.c()
if(!C.tF(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dPW(w))
w.vp()},
XH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$XH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bzq(n,t.a.c)){t.xp("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.N(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bl(new A.J(q,t.gc5C(),A.T(q).k("J<1,n>")).bZ(0,new C.dPx()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dPy(t,new C.tt(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$XH)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.IQ()
t.m(new C.dPz(t,p))
w=4
return A.b(t.vp(),$async$XH)
case 4:t.xp("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$XH,v)},
c5D(d){return B.a.i(d.toLowerCase())},
c9B(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tF(v,w)
t=r.d
s=C.hSj(t)
C.i0U(q,t.b,u,C.hSi(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.N(d).ax.a===B.H,m=new C.tt(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a2(l,new C.dQ3(),A.T(l).k("a2<1>")).gM(0)
l=n?B.bX:B.iH
v=A.W(B.Z9,n?B.bq:B.bo,o,o,o,18)
u=x.p
v=A.a([new A.C(B.AA,A.aK(!1,o,!0,new A.C(B.hG,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dQ4(p,d),o,o,o,o,o,o,o),o),new A.C(B.mV,p.bUw(m),o)],u)
if(p.d.y===D.kf){t=B.r2.j(0.15)
s=A.m(12)
r=A.I(B.r2.j(0.45),B.r,1)
q=C.FQ(p.d,p.a.c)
v.push(new A.C(B.xe,A.p(o,A.A(A.a([D.bIC,B.aw,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iN,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3],u)
if(C.tF(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Ja("Undo",B.qS,p.gcx8(),m,o,o))
u.push(new C.Ja("Family Book",D.byb,p.gc9A(),m,B.rS,o))
if(C.tF(p.d,p.a.c))u.push(new C.Ja("Display settings",B.Bj,p.gcaN(),m,B.aZ,o))
u.push(new C.Ja("Sync",B.xW,p.gaeb(),m,o,o))
t=p.d
if(t.y===D.kf||C.bzq(t,p.a.c)){t=p.d.y===D.kf?"Remove shared tree":"Delete tree"
u.push(new C.Ja(t,B.e4,p.gbHX(),m,B.fU,o))}if(C.tF(p.d,p.a.c))u.push(new C.Ja("Add member",B.vj,new C.dQ5(p),m,B.bT,o))
v.push(new A.C(Q.ag1,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gan6()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cm(new C.dQ6(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.W(n?K.Zd:X.M9,o,o,o,o,o)
v.push(A.av(A.hc(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dQ7(p),o),o,o,o))}return A.cb(o,l,A.bn(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
bUw(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ad(0,B.G,B.fu.j(0.35),B.dn,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.W(B.xO,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aK(!1,m,!0,A.p(m,D.bLE,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaeb(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.af)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eTJ,m,m,m)
r=r.gan6()
p=n.d.gan6()===1?"member":"members"
o=x.p
p=A.a([s,B.bf,A.D(A.v(A.a([q,B.bz,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tF(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bIO,m,m,m,n.gckk(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.ja:B.mf
r=r?"Private":"Public"
r=A.D(n.atp(q,"Privacy",r,n.a.d.w?n.gcw9():m),1)
q=A.D(n.atp(B.xX,"Tree code",n.d.c,new C.dPm(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.ab,q,B.ab,A.D(n.atp(D.bzU,"Collaborators",p,n.gbYW()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kf){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aF(!1,B.a1,!0,A.m(999),A.aK(!1,A.m(999),!0,new A.C(B.fG,A.A(A.a([A.W(B.ox,B.c,m,m,m,14),B.ea,A.d("View only",m,m,m,m,m,m,B.aNH,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.af)],o))}return A.p(m,A.bv(u,new A.an(B.W,m,B.aa,B.q,A.a([t,new A.C(B.EP,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bPx,B.n),m,m,m,m,m,m,m,1/0)},
atp(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.m(14),A.aK(!1,A.m(14),!0,new A.C(L.ah8,A.v(A.a([A.W(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uf,A.d(f,w,1,B.a2,w,w,w,O.za,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.af)}}
C.bcx.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bcA(s,t),new A.at(w,v))],x.p)
r=r.gdL(r)
B.d.v(u,r.dt(r,new C.d3O(this),x.l))
r=s.c
B.d.v(u,new A.J(r,new C.d3P(this),A.T(r).k("J<1,r>")))
return new A.C(B.tl,new A.a6(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.Jn.prototype={}
C.F7.prototype={}
C.bcz.prototype={
gbfG(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aHl.prototype={}
C.bcA.prototype={
bJx(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.X()
v=A.M()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bO
d.bA(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aQ(q.r,B.ap,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.E(new A.pp(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.pp(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bF())
q=A.M()
q.r=B.c.gp(0)
d.ai(new A.u(u,w),9,q)
q=A.M()
q.r=B.bA.gp(0)
d.aO(t,q)},
bJv(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b1(a0,new C.d48())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.b8(a0,new C.d49(f))
t=new A.J(a0,new C.d4a(f),A.T(a0).k("J<1,O>")).bZ(0,new C.d4b()).cI(0,1/0,B.wu)
w=f.a
d.bA(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lN(m)
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
n=g.gbI().a.snapshot()
r.drawPath((g.e=new A.cF(n)).a,k)
k.delete()}},
a6(d,e){var w,v,u,t,s,r,q,p,o
$.X()
w=A.M()
w.r=B.bT.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bO
w.e=B.fz
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bJv(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bJx(d,w,q.a,q.b)}},
aq(d){return d.b!==this.b}}
C.bge.prototype={
gc3s(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dbz
switch(w.c.a){case 0:return D.cGZ
case 1:return D.cRL
case 2:return D.d6a}},
gc3v(){var w=this.c,v=C.hce(w.w),u=C.hce(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.N(d).ax.a===B.H,q=t.gc3s(),p=t.c,o=I.bAk(p.f),n=t.gc3v(),m=x.V,l=A.a([new A.ad(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.aA:B.c,j=A.I(r?B.aA:B.c,B.r,2)
if(o!=null)w=A.rV(B.A,s,B.cm,B.bQ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a7(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hR(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a7(B.ax,B.aD,B.x,q,s,s),B.a6),s,56,s,s,B.F4,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.aA:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.f2C,s,s,s),B.f,s,s,new A.o(B.c8,s,w,j,s,s,B.n),s,s,s,s,D.bt2,s,s,s),s,s,s,-6,-4,s))}k=r?B.cC:B.c
j=A.m(8)
w=A.I(B.d.gL(q).j(0.35),B.r,1)
m=A.a([new A.ad(0,B.G,B.w.j(r?0.3:0.06),B.dB,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cC,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bo,s,s,s,s,s,s,s,s,7.5,s,s,B.a4,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a6(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aX9,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.btd,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a8)}}
C.bbF.prototype={
a6(d,e){var w,v,u,t,s,r,q
$.X()
w=A.M()
v=this.b
u=v?B.c:D.b7O
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
aq(d){return d.b!==this.b}}
C.btO.prototype={
B(d){var w=this,v=null,u=new C.f4B(w),t=w.c,s=t?B.cC:B.c,r=A.m(12),q=u.$3(B.hv,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.f7,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xT,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.f7,v,v,v,1,v,v,v,v,v,22),u.$3(B.ajt,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dm,v,v,v,B.af)}}
C.bjz.prototype={
B(d){var w=this,v=null,u=B.bT.j(0.15),t=A.I(B.bT,B.r,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.W(s?K.Zd:X.M9,B.bT,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.f__,v,v,v)],r),B.m,v,B.ba,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a8)
u=A.a([t,B.ao,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eY_,B.L,v,v)],r)
if(s){t=A.a([B.ao],r)
s=w.d
B.d.v(t,new A.J(s,new C.eGV(w),A.T(s).k("J<1,r>")))
B.d.v(u,t)}return new A.a6(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Z0.prototype={
T(){return new C.aAc()},
bp(){return this.Q.$0()},
gdX(){return this.w}}
C.aAc.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aO()
r.d=new A.ar(new A.bb(t,B.b2,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aO()
r.e=new A.ar(new A.bb(t,B.b2,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aO()
r.f=new A.ar(new A.bb(t,B.b2,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aO()
r.r=new A.ar(new A.bb(t,B.b2,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aO()
r.w=new A.ar(new A.bb(t,B.b2,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aO()
r.x=new A.ar(new A.bb(t,B.b2,B.aN),s)
t=u?q:v.c
r.y=t==null?D.xs:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hTR(w.r,w.f)
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
ON(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ON=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h1z(p.y,p.w)
w=3
return A.b(A.l9(t.a.w,B.Hs),$async$ON)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aYj(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$ON)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hvB(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(Am.G0(78,800),$async$ON)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.djZ(t,q))
case 1:return A.h(u,v)}})
return A.i($async$ON,v)},
c3u(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hU(B.o.u(1000*Date.now()),w,D.xs,null,null,null,"","","","","",1,!1,0)
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
s=v.aC6(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a5(k,!1).N(s)},
a8j(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a8j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.djY(r),s,null,!0,!0,x.y),$async$a8j)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a8j,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.N(d).ax.a===B.H,i=new C.tt(j),h=l.a.e,g=A.T(h).k("a2<1>"),f=A.B(new A.a2(h,new C.dk7(l),g),g.k("H.E"))
h=j?B.dX:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.brz,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aA,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.ho(A.aK(!1,k,!0,new A.C(B.lC,A.W(B.e4,B.ok,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbED(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jn:B.iK
t=I.bAk(l.as)
if(l.as==null)s=A.W(B.oq,j?B.bq:B.bo,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.aa,B.q,A.a([A.hp(u,t,s,k,42),A.ao(0,A.hp(B.bT,k,D.bCx,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc3r(),k,k,k,k,k,k,!1,B.a8),k,k,k)
t=l.d
t===$&&A.c()
t=C.aAe(t,"Full name",B.mc,1,1,i,B.lR)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bgc(i,u,new C.dk8(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bl9],q)
o=l.a.e
B.d.v(p,new A.J(o,new C.dk9(),A.T(o).k("J<1,eO<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.blb],q)
B.d.v(q,new A.J(f,new C.dkb(),A.T(f).k("J<1,eO<n?>>")))
o=A.v(A.a([t,B.ao,new C.abX(i,r,"Who is their parent?",p,new C.dkc(l),k,o),B.az,n,B.ao,new C.abX(i,m,"Who is their spouse / partner?",q,new C.dkd(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aAe(q,"Birth date",D.aix,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aAe(m,"Birth place",B.Zs,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aAe(n,"Date of death (if deceased)",D.akO,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aAe(p,"Occupation",B.a_w,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.q,w,k),B.az,s,B.bv,new C.abY(i,"Identity",u,k),B.ac,new C.abY(i,"Family links",o,k),B.ac,new C.abY(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aAe(r,"Notes",B.kI,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aAd(i,"Child order",l.cb0(l.at),new C.dke(l),new C.dkf(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fSn(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dkg(l):k
B.d.v(r,A.a([B.S,new C.aAd(i,"Visible in tree",u,w,new C.dkh(l),k)],v))}r.push(B.S)
w=j?B.jn:B.iK
u=A.m(14)
t=A.I(j?B.dZ:B.bW,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iC(k,B.bT,k,B.ag,k,new C.dki(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.afD,k,k,k))
r.push(B.bv)
w=j?B.aP:B.aA
j=j?B.dZ:B.bW
r.push(A.A(A.a([A.D(A.dT(B.ng,new C.dka(d),A.de(k,k,k,k,k,k,k,k,k,w,k,k,B.cf,k,new A.b7(A.m(14),B.Y),new A.az(j,1,B.r,-1),k,k,k,k)),1),B.bf,A.D(A.bJ(D.eCT,l.gc3t(),A.bk(B.aU,k,k,0,B.c,k,B.cf,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.eh(B.h6,k,B.ag,h,new A.a6(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.q,k,B.y,k,k,k,k,B.ah),k),D.agv,k,B.afT,new A.b7(g,B.Y),k,k)},
cb0(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.abY.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jn:B.iK,s=A.m(16)
return A.v(A.a([new A.C(D.agT,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dZ:B.bW,B.r,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bgd.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dX:B.c,r=A.m(12),q=A.I((t?B.dZ:B.bW).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aP:B.aA,u,u,u,u,u,u,u,u,14,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aL(u,B.T,!1,u,!0,B.q,u,A.aM(),v.d,u,u,u,u,u,2,A.br(u,B.ew,u,B.uZ,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bo,u,u,u,u,u,u,u,u,u,u,u,B.cs,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bT,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.abX.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dX:B.c,s=A.m(12),r=A.I((u?B.dZ:B.bW).j(0.85),B.r,1),q=A.W(B.qM,u?B.bq:B.bo,v,v,v,v),p=A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,14,v,v,B.a4,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dX:B.c
return A.p(v,new A.D5(A.a3j(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bo,v,v,v,v,v,v,v,v,v,v,v,B.cs,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.l4,v,v,v)}}
C.bgc.prototype={
B(d){var w=new C.dkj(this)
return A.A(A.a([w.$3(D.YM,"Male",B.MV),B.ab,w.$3(D.ahL,"Female",B.MG),B.ab,w.$3(D.xs,"Other",B.n0)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aAd.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jn:B.iK,r=A.m(14),q=A.I(t?B.dZ:B.bW,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aA,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.D(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bo,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aGo(u,B.xT,w.f,v),B.bp,new C.aGo(u,B.hv,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eh,v,v,v)}}
C.aGo.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bT.j(0.12)
else w=s.c.a?B.dX:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bT
else t=(s.c.a?B.bq:B.bo).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,new A.a6(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.af)}}
C.abZ.prototype={
bNa(d){switch(d.a){case 0:return B.bT
case 1:return B.bA
case 2:return B.cU}},
bNb(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aV0(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zN(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dX:B.c
u=A.m(12)
t=A.I((w?B.dZ:B.bW).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.W(f,B.bT,p,p,p,18),B.aw],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bo,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.v(A.a([q,B.at,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aA,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cG,B.xb,p,p,1/0)},
acG(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jn:B.iK,s=A.m(16),r=A.I(v?B.dZ:B.bW,B.r,1)
return A.v(A.a([new A.C(D.agT,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bR,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hgV(r,q),o=q.c,n=t.bNa(o),m=I.bAk(q.f),l=t.e.a,k=l?B.dX:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.aA,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kf?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bo,s,s,s,s,s,s,s,s,12,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.r,3)
v=A.a([new A.ad(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.hp(u,m,m==null?A.W(B.oq,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.en,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.r,1)
v=A.av(A.p(s,A.d(t.bNb(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.ma,s,s,s),s,s,s)
u=x.p
i=A.a([t.zN("Full name",i,B.mc)],u)
if(p>0)i.push(t.zN("Child order","#"+p,B.MN))
r=A.a([h,B.at,r,B.aO,l,B.S,v,B.bv,t.acG("Identity",i),B.ac,t.acG("Life details",A.a([t.zN("Birth date",q.w,D.aix),t.zN("Birth place",q.x,B.Zs),t.zN("Date of death",q.y,D.akO),t.zN("Occupation",q.z,B.a_w)],u)),B.ac,t.acG("Family links",A.a([t.zN("1. Parent",t.aV0(q.d),B.Fi),t.zN("2. Spouse",t.aV0(q.e),B.MF)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.acG("Notes",A.a([t.zN("Notes",q,B.kI)],u))],u))
r.push(B.bv)
r.push(A.bJ(B.IH,new C.dkt(d),A.bk(B.aU,s,s,s,s,s,B.cf,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eE(s,k,new A.cU(B.lq,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.q,s,B.y,s,B.xg,s,s,B.ah),s),s,s,s,B.ES,B.d_,s,new A.b7(j,B.Y),s)}}
C.Ja.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bq:B.bo
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.xk,A.ho(A.aF(!1,B.a1,!0,A.m(8),A.aK(!1,A.m(8),!0,new A.a6(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.af),u,v.c,u,u),u)}}
C.ao1.prototype={
eJ(){var w,v,u=this,t=x.N,s=A.V(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a5().ac())
w=u.c
v=A.T(w).k("J<1,a4<n,@>>")
w=A.B(new A.J(w,new C.c62(),v),v.k("ai.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iR(w,new C.c63(),t,x.U))
return s}}
C.ao2.prototype={
T(){return new C.aBN(A.a([],x.bF))},
gdc(){return this.c}}
C.aBN.prototype={
a_(){this.a1()
this.IX()},
IX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$IX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c66(t.a.c),$async$IX)
case 3:r=e
w=4
return A.b(C.Ad(t.a.c),$async$IX)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qG(q,new C.dQg(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dQh(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$IX,v)},
xW(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
JF(d,e){return this.czs(d,e)},
czs(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$JF=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dQl(q,e))
t=3
w=6
return A.b(d.$0(),$async$JF)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dQm(q))
$.eQ.md()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JF,v)},
Wx(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oV(r,s.c,s.e),$async$Wx)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JF(new C.dQd(t),"Preparing download\u2026"),$async$Wx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wx,v)},
WB(d){return this.bLe(d)},
bLe(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oV(r,s.c,s.e),$async$WB)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.JF(new C.dQe(t,d),"Preparing file\u2026"),$async$WB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WB,v)},
aey(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aey=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wN.c4().Lo(B.PK,B.tq,!0),$async$aey)
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
o=A.jk(o,0,null)
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
case 6:u=A.G_()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aey,v)},
Xb(d){return this.bVo(d)},
bVo(d){var w=0,v=A.j(x.H),u=this
var $async$Xb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.JF(new C.dQf(u,d),"Restoring family trees\u2026"),$async$Xb)
case 2:return A.h(null,v)}})
return A.i($async$Xb,v)},
Xa(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Xa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aey(),$async$Xa)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Xb(s),$async$Xa)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xa,v)},
a0V(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0V=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oV(r,s.c,s.e),$async$a0V)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.JF(new C.dQk(t),"Creating QR code\u2026"),$async$a0V)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0V,v)},
a0w(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0w=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Cn()){t.xW("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).ce(A.ej(new C.dQi(),!0,null,x.N)),$async$a0w)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Xb(r),$async$a0w)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0w,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.N(d).ax.a===B.H,n=o?B.A0:B.iH,m=o?D.aed:B.aP,l=o?B.aK:B.bW,k=o?B.aP:B.aA,j=new C.d4c(n,m,l,k,o?B.bI:B.bo)
l=A.aH(p,p,p,p,A.W(B.eB,k,p,p,p,20),p,p,p,new C.dQo(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eD(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d3L(!0,B.jc,B.aW,B.aW,q.r?p:q.gcqx(),j,s,"Show restore QR"),1),B.aw],u))}s=q.e
r=q.r?p:q.gcmP()
t.push(A.D(C.d3L(!s,B.iP,B.b4,B.by,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d3L(!1,B.hx,B.aU,B.bT,q.r?p:q.gbL7(),j,"Photos & books included","Download all trees"),1),B.aw],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d3L(!1,M.y_,B.aJ,B.aM,q.r?p:q.gbVl(),j,s,"Upload backup file"),1))
l=A.a([new C.bcy(v,l,p),B.kq,new C.abf(j,"QR restore",p),B.S,t,B.d5,new C.abf(j,"Backup files",p),B.S,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ac(q.d)>1&&q.a.f==null){v=A.a([B.kq,new C.abf(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dQp(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cB(l,p,B.XV,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aU.j(0.35),B.r,1)
s=A.a([new A.ad(0,B.G,B.w.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bn(!0,A.p(p,A.A(A.a([K.aMa,B.bf,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.AG,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.cb(w,n,new A.an(B.W,p,B.aa,B.q,l,p),p,!1,!1,p,p)}}
C.d4c.prototype={}
C.bcy.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ad(0,B.G,B.aU.j(0.32),B.jX,28)],x.V)
t=A.ao(p,A.W(B.tH,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.q,A.a([t,new A.C(B.a9,A.A(A.a([A.p(p,D.bLc,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.o_,A.D(A.v(A.a([D.f7q,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bSG,B.n),p,p,p,p,p,p,p,p)}}
C.abf.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aU,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bcw.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aW.j(0.4):m.c
k=A.I(k,B.r,l?1.5:1)
l=l?A.a([new A.ad(0,B.G,B.aW.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.r,1)
return A.aF(!1,B.a1,!0,q,A.aK(!1,o,!0,A.ex(A.db(new A.C(E.Xz,A.v(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qH,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bz,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cs,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.af)}}
C.bcB.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.r,1),q=B.aU.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.ex(new A.C(B.eP,A.A(A.a([A.p(v,D.bKq,B.f,v,v,new A.o(q,v,A.I(B.aU.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qH,v,v,v),B.bf,A.D(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.W(B.hx,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.af)}}
C.Zl.prototype={
T(){return new C.aBM()},
gdc(){return this.c}}
C.aBM.prototype={
a_(){this.a1()
this.a7Q()},
a7Q(){var w=0,v=A.j(x.H),u=this,t
var $async$a7Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b_X(u.a.c,B.Ch),$async$a7Q)
case 2:t=e
if(u.c!=null)u.m(new C.dQ8(u,t))
return A.h(null,v)}})
return A.i($async$a7Q,v)},
afV(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$afV=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dQ9(q))
t=4
p=A.h3c(q.a.d,B.Ch)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.U(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aqh(n.e,m,l,B.Ch,p,n.f),$async$afV)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dQa(q))
q.c.I(x.q).f.R(D.eLc)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a9(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(B.a.e9(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dQb(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afV,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.N(d).ax.a===B.H,o=p?B.j0:B.ph,n=p?B.i3:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eD(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fmy,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aU.j(0.35),B.r,1)
u=A.pz(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aU,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.v(A.a([B.P,u,B.bv,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.ba,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bw,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcmx()
if(u)u=B.If
else u=A.W(r.e===!0?B.hw:B.aiw,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a6(1/0,q,A.ez(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cc,q,q,q),t,A.de(q,q,q,q,q,q,q,q,q,B.aU,q,B.fL,q,q,q,new A.az(B.aU.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.i7,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.ay:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a6(1/0,q,A.bJ(B.ze,new C.dQc(d),A.bk(B.aU,q,q,q,q,B.fL,q,q,q,q,q,q)),q))
return A.cb(m,o,new A.C(B.a9,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Zm.prototype={
T(){return new C.bhG(A.yM(B.x1,B.nn,B.tM))}}
C.bhG.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.cb(A.eD(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.ff_,w,w,w,1,w,!0),B.w,A.yL(this.d,B.bQ,new C.dQq(this,d)),w,!1,!1,w,w)}}
C.aWS.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Pe,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lt.prototype={}
C.a5b.prototype={
T(){return new C.bhn(null,null)}}
C.bhn.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tf,v,1,v,w)
w.e=A.bj(v,B.pm,v,1,v,w)
w.a.toString
w.d.cG(0)
w.e.cG(0)},
br(d){var w,v,u=this
u.bE(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cG(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cG(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.bsc()},
B(d){var w,v,u=this,t=B.d.dM(D.a27,new C.dC_(u),new C.dC0())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.crh(A.c6(new A.h3(A.a([w,v],x.dS)),new C.dC1(u,t),null),!0)}}
C.bhm.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aZd(d,e)
break
case"house":p.lO(d,e,D.cW9)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gee()
$.X()
t=A.M()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ai(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lU(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Aw(d,e,12)
p.xz(d,e,B.kZ,5,14)
break
case"grocery":p.cbJ(d,e)
break
case"calculator":p.cbq(d,e)
break
case"lumber":p.cbR(d,e)
break
case"kitchen":p.cbM(d,e)
break
case"landscape":p.lO(d,e,D.cWF)
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
w.r=B.fm.j(0.85).gp(0)
d.aO(s,w)
p.Aw(d,e,8)
p.xz(d,e,B.iM,4,18)
break
case"plumbing":p.cc_(d,e)
break
case"electrical":p.lO(d,e,D.d5v)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.X()
u=A.M()
u.r=B.c.j(q*0.12).gp(0)
d.aY(new A.aa(0,0,0+e.a,0+e.b),u)
p.lU(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lU(d,e,B.lu.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Aw(d,e,10)
break
case"store":p.cc8(d,e)
break
case"paint_remodel":p.cbV(d,e)
break
case"roofing":p.cc1(d,e)
break
case"warehouse":p.ccf(d,e)
break
case"vehicles":p.ccd(d,e)
break
case"farm":p.cbD(d,e)
break
case"restaurant":p.cc0(d,e)
break
case"tools":p.ccb(d,e)
break
case"wallet":p.cce(d,e)
break
case"concrete":p.cbw(d,e)
break
case"blueprint":p.cbo(d,e)
break
default:p.aZd(d,e)}},
lO(d,e,f){var w,v=new A.aa(0,0,0+e.a,0+e.b)
$.X()
w=A.M()
w.sau(new A.a7(B.ax,B.aD,B.x,f,null,null).aw(0,v))
d.aY(v,w)},
lU(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.gee()/2-h
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
xz(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gee()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
Aw(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aZd(d,e){var w,v=this
v.lO(d,e,D.d4i)
w=v.c
v.lU(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lU(d,e,B.bJ.j(0.45),-w*3.141592653589793*1.4,22)
v.bJr(d,e,B.hS,w)
v.xz(d,e,B.c.j(0.7),6,8)},
bJr(d,e,f,g){var w,v,u,t,s,r,q,p
$.X()
w=A.M()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c4(new A.aa(16,q,t,q+3)),p)
p.delete()}},
cbJ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lO(d,e,D.cd2)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.X()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cUw[B.o.F(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lU(d,e,B.c.j(0.35),w,16)
j.xz(d,e,B.iM,5,12)},
cbq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lO(d,e,D.cd9)
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
p=A.ih(g,g,g,g,g,B.a5,B.ch,g,B.er,B.cd)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cYa[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saV(0,new A.eo(r,g,g,B.cO,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eO()
p.a6(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cdb[o]
l=B.k5.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saV(0,new A.eo(m,g,g,B.cO,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eO()
p.a6(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.lU(d,e,B.c.j(0.35),w*1.5,14)
h.lU(d,e,B.ez.j(0.55),-v*3.141592653589793*2,8)
h.lU(d,e,B.A1.j(0.4),r*2.8,22)
h.xz(d,e,B.p8,8,10)
h.Aw(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.X()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cbR(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lO(d,e,Z.au9)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bz(new A.aa(20,q,u,q+10),B.hy)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.fZ,B.ob,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.ep(p),n)
n.delete()}m.lU(d,e,B.fZ.j(0.35),w,15)
m.Aw(d,e,8)},
cbM(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lO(d,e,D.cV0)
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
k.delete()}j.lU(d,e,B.bJ.j(0.4),-w*3.141592653589793*2.2,11)
j.xz(d,e,B.qm,4,14)},
cc_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lO(d,e,D.cKD)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.X()
n=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xz(d,e,B.oi,6,12)
l.lU(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cc8(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lO(d,e,D.cqt)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bz(new A.aa(q,14,q+u,22),B.ie)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f5,B.bJ,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.ep(q),o)
o.delete()}n.lU(d,e,B.c.j(0.3),w,16)
n.Aw(d,e,8)
n.xz(d,e,B.uE,5,13)},
cbV(d,e){var w,v,u,t,s,r,q,p,o
this.lO(d,e,D.cQc)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bz(new A.aa(q,p,q+8,p+(18+r*22)),B.h9)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.ik,B.dy,B.bJ,B.ey][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.ep(p),o)
o.delete()}this.lU(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cc1(d,e){var w,v,u,t,s,r,q,p,o
this.lO(d,e,D.cNN)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xz(d,e,B.cn,7,11)},
ccf(d,e){var w,v,u,t,s,r,q,p,o,n
this.lO(d,e,D.ct6)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bz(new A.aa(p,o,p+(t-r*8),o+16),B.hy)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cn,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.ep(o),n)
n.delete()}this.lU(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
ccd(d,e){var w,v,u,t,s,r,q,p,o
this.lO(d,e,D.d9c)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bz(new A.aa(r,q,r+28,q+8),B.hy)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.ep(q),o)
o.delete()}this.Aw(d,e,6)},
cbD(d,e){var w,v,u,t,s,r,q,p,o,n
this.lO(d,e,D.cTG)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.X()
s=A.M()
s.r=B.lu.j(0.75).gp(0)
d.ai(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.hd.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lU(d,e,B.lu.j(0.35),w,14)},
cc0(d,e){var w,v,u,t,s,r,q,p,o=this
o.lO(d,e,D.cVZ)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cu(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c4(r),p)
p.delete()}o.xz(d,e,B.qm,5,16)
o.Aw(d,e,7)},
ccb(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lO(d,e,D.d6T)
w=m.c
v=w*3.141592653589793
m.lU(d,e,B.ob.j(0.55),v*3,10)
m.lU(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.ob.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cce(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lO(d,e,D.d9J)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bz(new A.aa(p,o,p+36,o+22),B.ie)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iM,B.lu,q).gp(0)
n=p.H()
s.drawRRect(A.ep(o),n)
n.delete()}m.Aw(d,e,9)
m.lU(d,e,B.c.j(0.4),w*2.2,12)},
cbw(d,e){var w,v,u,t,s,r,q,p,o,n
this.lO(d,e,D.d_N)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bU(new A.u(v,u),34)
$.X()
s=A.M()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.fg(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.bW.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cbo(d,e){var w,v,u,t,s,r,q,p
this.lO(d,e,D.cWW)
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
this.lU(d,e,B.kZ.j(0.45),-t*3.141592653589793*2,11)},
aq(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.aqZ.prototype={
Zb(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aOc(),$async$Zb)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a7q(s),$async$Zb)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Zb,v)},
aez(d){return this.ceu(d)},
ceu(d){var w=0,v=A.j(x.H),u=this,t
var $async$aez=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i13(d),$async$aez)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aez,v)},
B(d){var w,v,u,t=null,s=A.N(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.jn:B.iK
w=x.p
v=A.a([C.aOA(!0,B.qe,1/0,B.pu,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.bZ(new A.bI(B.b1,t,t,new A.C(B.uS,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.av3,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a7(B.b1,B.b6,B.x,u,t,t),B.n),B.bd))}v.push(A.ao(8,A.A(A.a([A.D(A.dp(D.bEh,D.f3R,new C.cdA(this,d),A.bk(B.aU,t,t,t,B.c,t,B.jq,t,t,t,t,B.c7)),1),B.ab,A.D(A.ez(D.bMp,D.fi_,this.gc5A(),A.de(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jq,t,t,D.aVG,t,t,t,B.c7)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fF(1.7777777777777777,A.aF(!1,B.a1,!0,B.qe,new A.an(B.W,t,B.b_,B.q,v,t),B.aq,s,0,t,t,t,t,t,B.af),t)}}
C.aJH.prototype={
aQ(){this.aX()
this.aW()
this.dJ()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdG())
w.b2$=null
w.a2()}}
C.aRs.prototype={}
C.aRr.prototype={}
C.aPx.prototype={}
C.Y_.prototype={
T(){return new C.ax2()}}
C.ax2.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b2,B.aN)
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(w,v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
Jw(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.R(D.eLH)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).N(new C.aRs(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.N(d).ax.a===B.H,l=m?B.dX:B.c,k=A.m(20),j=A.p(n,D.bM4,B.f,n,n,new A.o(B.aU.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.aA,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.v(A.a([i,B.bz,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bo,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bf,i,A.aH(n,n,n,n,A.W(B.cx,m?B.bq:B.bo,n,n,n,n),n,n,n,new C.cWV(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bo,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bo,n,n,n,n,n,n,n,n,11,n,n,B.cs,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h3s(new C.cWW(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.aA,n,n,n,n,n,n,n,n,n,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jn:B.iK
r=A.m(12)
q=A.m(12)
p=m?B.dZ:B.bW
t=A.aL(n,B.T,!0,n,!0,B.q,n,A.aM(),u,n,n,n,n,n,2,A.br(n,new A.b4(4,r,B.df),n,n,n,n,n,n,!0,new A.b4(4,q,new A.az(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cWX(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,R.Ij,n,n,n,n)
u=m?B.aP:B.aA
m=m?B.dZ:B.bW
return A.eE(n,l,new A.cU(B.lq,A.cd(A.v(A.a([j,B.aO,i,B.at,w,B.P,v,B.aO,t,B.bv,A.A(A.a([A.D(A.dT(B.dd,new C.cWY(d),A.de(n,n,n,n,n,n,n,n,n,u,n,n,B.cf,n,new A.b7(A.m(12),B.Y),new A.az(m,1,B.r,-1),n,n,n,n)),1),B.aw,A.D(A.bJ(D.fie,o.ga1d(),A.bk(B.aU,n,n,n,B.c,n,B.cf,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.q,n,B.y,n,B.AH,n,n,B.ah),n),n,n,n,W.AI,B.d_,n,new A.b7(k,B.Y),n)}}
C.XZ.prototype={
T(){return new C.ax1()}}
C.ax1.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aO()
this.d=new A.ar(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
Jw(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.R(D.eJo)
return}v=this.c
v.toString
A.a5(v,!1).N(new C.aRr(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.N(d).ax.a===B.H,o=p?B.dX:B.c,n=A.m(20),m=A.p(q,D.bIH,B.f,q,q,new A.o(B.bT.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.v(A.a([l,B.bz,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bo,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bf,l,A.aH(q,q,q,q,A.W(B.cx,p?B.bq:B.bo,q,q,q,q),q,q,q,new C.cWR(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aU.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aU.j(0.25),B.r,1)
u=A.W(B.aii,B.aU.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.aw,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,q,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jn:B.iK
t=A.m(12)
s=A.m(12)
r=p?B.dZ:B.bW
v=A.aL(q,B.T,!0,q,!0,B.q,q,A.aM(),w,q,q,q,q,q,2,A.br(q,new A.b4(4,t,B.df),q,q,q,q,q,q,!0,new A.b4(4,s,new A.az(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cWS(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.kr,q,q,q,q)
w=p?B.aP:B.aA
p=p?B.dZ:B.bW
return A.eE(q,o,new A.cU(B.lq,A.cd(A.v(A.a([m,B.aO,l,B.az,v,B.bv,A.A(A.a([A.D(A.dT(B.dd,new C.cWT(d),A.de(q,q,q,q,q,q,q,q,q,w,q,q,B.cf,q,new A.b7(A.m(12),B.Y),new A.az(p,1,B.r,-1),q,q,q,q)),1),B.aw,A.D(A.bJ(D.foK,this.ga1d(),A.bk(B.bT,q,q,q,B.c,q,B.cf,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.AH,q,q,B.ah),q),q,q,q,W.AI,B.d_,q,new A.b7(n,B.Y),q)}}
C.Xx.prototype={
T(){return new C.avM()}}
C.avM.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aO()
v.d=new A.ar(B.as,w)
v.e!==$&&A.aO()
v.e=new A.ar(new A.bb("1",B.b2,B.aN),w)
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
gIS(){var w,v=this.e
v===$&&A.c()
w=A.d3(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gahJ(){var w=this.f
w===$&&A.c()
w=A.d3(B.a.i(w.a.a))
return w==null?0:w},
gb11(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aMn(d){var w,v=B.k.D(this.gIS()+d,0.25,999999),u=B.k.jM(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.O(v))
else{u=B.k.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aJ(u,w,"")}t.saV(0,u)
this.m(new C.cuu())},
aw2(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aU,w,w,w,20):w,u=d.a,t=u?B.jn:B.iK,s=A.m(14),r=A.m(14)
u=u?B.dZ:B.bW
return A.br(w,new A.b4(4,s,B.df),w,B.bB,w,w,w,w,!0,new A.b4(4,r,new A.az(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a9b),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c5B(d,e,f){return this.aw2(d,e,f,null)},
Jw(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gahJ()<=0){s.c.I(x.q).f.R(D.eNy)
return}r=s.c
r.toString
v=s.gIS()
u=s.gahJ()
t=s.gb11()
A.a5(r,!1).N(new C.aPx(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.N(d).ax.a===B.H,m=new C.tt(n),l=n?B.dX:B.c,k=A.m(24),j=x.O,i=A.a([B.aU.j(0.22),B.bT.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bCe,B.f,o,o,new A.o(o,o,A.I(B.aU.j(0.35),B.r,1),h,o,new A.a7(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.v(A.a([h,B.bz,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.cs,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bf,h,A.aH(o,o,o,o,A.W(B.cx,n?B.bq:B.bo,o,o,o,o),o,o,o,new C.cuA(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aL(o,B.T,!0,o,!0,B.q,o,A.aM(),h,o,o,o,o,o,2,p.aw2(m,"Item name (optional)","Lumber, paint, labor\u2026",B.MT),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,R.Ij,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jn:B.iK
t=A.m(14)
s=A.I(n?B.dZ:B.bW,B.r,1)
r=A.aH(o,o,o,o,A.W(B.xT,n?B.aP:B.aA,o,o,o,20),o,o,o,new C.cuB(p),o,o,o,o,o,B.c7)
q=p.e
q===$&&A.c()
q=A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),q,o,o,o,o,o,2,D.bNW,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cuC(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a6(52,o,q,o),A.aH(o,o,o,o,A.W(B.hv,n?B.aP:B.aA,o,o,o,20),o,o,o,new C.cuD(p),o,o,o,o,o,B.c7)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.aw,A.D(A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),t,o,o,o,o,o,2,p.aw2(m,"Amount","0.00",B.hW),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dU,o,o,o,1,o,o,!1,"\u2022",o,new C.cuE(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.J(D.cQE,new C.cuF(p,m),t),t.k("ai.E"))
i=A.a([i,B.bv,v,B.az,h,B.P,s,B.ac,A.c_(B.bD,u,B.bt,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),h,o,o,o,o,o,2,p.c5B(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cuG(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.kr,o,o,o,o)],w))}i.push(B.aO)
h=B.aU.j(n?0.18:0.1)
j=A.a([h,B.bT.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aU.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gIS()===B.k.jM(p.gIS())?B.k.O(p.gIS()):p.gIS()
s=p.gb11()
r=A.Af(p.gahJ())
i.push(A.p(o,A.A(A.a([A.D(A.v(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bB6(p.gIS()*p.gahJ(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a7(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.j7,o,o,o))
i.push(B.bv)
j=A.m(14)
h=n?B.dZ:B.bW
h=A.de(o,o,o,o,o,o,o,o,o,o,o,o,B.cf,o,new A.b7(j,B.Y),new A.az(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.D(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cuH(d),h),1),B.aw,A.D(A.dp(D.alR,D.fkS,p.ga1d(),A.bk(B.aU,o,o,0,B.c,o,B.cf,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eE(o,l,new A.cU(V.a9y,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.q,o,B.y,o,Ab.qG,o,o,B.ah),o),o,o,o,B.Lz,B.d_,o,new A.b7(k,B.Y),o)}}
C.a03.prototype={
T(){return new C.btG()}}
C.btG.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(new A.bb(w,B.b2,B.aN),v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.N(d).ax.a===B.H,q=r?B.dX:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.aA,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.aA,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jn:B.iK
v=A.aL(s,B.T,!0,s,!0,B.q,s,A.aM(),w,s,s,s,s,s,2,A.br(s,new A.b4(4,A.m(12),B.df),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f43(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.D(A.dT(B.dd,new C.f44(d),s),1)
r=A.bk(B.bT,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eE(s,q,new A.C(B.AH,A.v(A.a([o,B.az,v,B.aO,A.A(A.a([u,B.aw,A.D(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f45(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d_,s,new A.b7(p,B.Y),s)}}
C.aaj.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.EV.prototype={
T(){return new C.btE(null,null)}}
C.btE.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.blJ,null,1,null,v)
w.cG(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bux()},
gbvX(){switch(this.a.r.a){case 1:return A.a([B.aU,B.bT,B.aZ],x.O)
case 2:return A.a([B.bs,B.aU,B.aZ],x.O)
case 3:return A.a([B.aW,B.c8,B.jI],x.O)
case 4:return A.a([B.ht,B.bT,B.f6],x.O)
case 0:return A.a([B.aU,B.bT,B.aZ],x.O)}},
B(d){var w=A.N(d),v=this.d
v===$&&A.c()
return new A.es(A.c6(v,new C.f41(this,new C.tt(w.ax.a===B.H)),null),null)}}
C.avF.prototype={
T(){return new C.btF(null,null)}}
C.btF.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.mR,null,1,null,v)
w.cG(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.buy()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f42(this),null)}}
C.btD.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bz(new A.aa(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aV(w,w))
u=new A.aQ($.X().r,B.ap,null,null,A.a([],x.v))
u.E(new A.iS(v))
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
w=A.wL(u)
t=A.a([],x.f5)
w=new A.vh(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jP('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.GP(w,r)
w.jg()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aPH(d,q,r,o,0,0.2,4.2,0.92)
p.aPH(d,q,r,s,0.52,0.11,3.2,0.58)}},
aPH(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hoQ(e.a.a,e,t,t+f*i,!0),r=A.bzt(s.gbI().a.getBounds())
$.X()
w=A.M()
w.b=B.ae
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.sau(new A.a7(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Gv,null).aw(0,r))
d.aO(s,w)},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aLQ.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.aLR.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aX()
this.aW()
this.bv()}}
C.tt.prototype={}
C.aqY.prototype={
T(){return new C.aDi()},
gdX(){return this.c}}
C.aDi.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.afp()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Kz(w,v)
this.a2()},
afp(){var w=0,v=A.j(x.H),u=this,t,s
var $async$afp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bzB(t.c,t.d.a),$async$afp)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eE4(u,s))
return A.h(null,v)}})
return A.i($async$afp,v)},
Pc(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Pc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eDW(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Kz(t,s),$async$Pc)
case 2:if(u.c!=null)u.m(new C.eDX(u))
return A.h(null,v)}})
return A.i($async$Pc,v)},
PI(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.N(p)
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.eE2(t,new C.tt(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$PI)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a7q(q),$async$PI)
case 6:case 5:t.m(new C.eE3(t,r))
w=7
return A.b(t.Pc(),$async$PI)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PI,v)},
UO(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i0P(r),$async$UO)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eDR(t,new C.qK(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Pc(),$async$UO)
case 4:case 1:return A.h(u,v)}})
return A.i($async$UO,v)},
caC(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hgS(t,new C.eDV(u),w,v)},
a9B(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bP(new A.az(v,2.5,B.r,-1),B.Y,B.Y,new A.az(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aVs,w,w,B.n),w,22,w,w,w,w,w,22)},
a8H(d){return this.bHK(d)},
bHK(d){var w=0,v=A.j(x.H),u=this
var $async$a8H=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eDU(u,d))
w=2
return A.b(u.Pc(),$async$a8H)
case 2:return A.h(null,v)}})
return A.i($async$a8H,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.N(a2).ax.a===B.H,e=f?B.bX:B.iH,d=A.m(8),a0=A.W(P.Za,f?B.bq:B.bo,g,g,g,16),a1=x.p
a0=A.aK(!1,d,!0,new A.C(B.EZ,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bo,g,g,g,g,g,g,g,g,g,g,g,B.a4,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eE5(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b_,B.q,A.a([A.bv(A.m(22),C.aOA(!0,A.m(22),1/0,B.pu,g,d,1/0),B.aq),A.ao(10,A.dp(D.bGM,D.fn1,h.gb__(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h3,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ad(0,B.G,B.aU.j(f?0.5:0.38),B.eT,22),new A.ad(-4,B.G,B.bT.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ad(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bv(s,new A.an(B.W,g,B.b_,B.q,A.a([C.aOA(!0,A.m(16),1/0,B.Mk,g,r.c,1/0),A.bZ(g,new A.o(g,g,g,g,g,new A.a7(B.b1,B.b6,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bd),A.ao(g,h.a9B(!0),g,g,8,g,8,g),A.ao(g,A.cs1(h.a9B(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cs1(h.a9B(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cs1(h.a9B(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dp(D.bCO,D.fh0,h.gb__(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h3,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bPi,B.n),g,g,g,g,B.lC,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b4K,B.nt,B.h0],u):A.a([B.aZ,B.aU,B.bT],u)
t=x.V
s=A.a([new A.ad(0,B.G,B.aU.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.W(B.ju,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h1,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.az,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ao,C.bB6(h.d.gwC(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cs,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.he.j(0.75),B.r,1.6)
t=A.a([new A.ad(0,B.G,B.aW.j(0.28),B.cJ,14)],t)
j=B.aW.j(0.22)
i=A.m(10)
u=A.p(g,A.bv(r,new A.an(B.W,g,B.aa,B.q,A.a([p,new A.C(D.bql,A.A(A.a([o,B.aw,A.aF(!1,B.a1,!0,g,A.aK(!1,n,!0,A.ex(new A.C(Ag.EL,A.v(A.a([A.p(g,D.alq,B.f,g,g,new A.o(j,g,A.I(B.aW.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cj,g,g,g),B.fV,D.f6w],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcaB(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.af)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a7(B.ax,B.aD,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fF(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bv,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b3,A.dp(Aj.a_S,D.f4s,h.gbwp(),A.bk(B.aU,g,g,g,B.c,g,B.iN,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dX:B.c
v=A.m(14)
u=A.I(f?B.dZ:B.bW,B.r,1)
t=A.W(B.Zv,f?B.bq:B.bo,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.ao,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bo,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.to,g,g,1/0))}else B.d.v(d,new A.J(w,new C.eE6(h,new C.tt(f)),A.T(w).k("J<1,r>")))
if(h.e)d.push(new A.C(B.Aw,A.av(A.mC(g,f?B.bq:B.bo,g,g,g,g,g,g,g,g),g,g,g),g))
return A.cb(g,e,A.bn(!0,A.v(A.a([new A.C(B.AA,a0,g),A.D(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.y,g,E.xi,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bA1(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dX:B.c,p=A.m(16),o=A.a([new A.ad(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aYd,u,u,u,u,u,u,u,5),l=B.aU.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.W(s?B.hI:B.h5,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.aA,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcPe()
v=A.Af(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bo,u,u,u,u,u,u,u,u,12,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.ba,B.Q,0,B.p)}t=A.D(t,1)
k=A.a([B.aU.j(0.14),B.bT.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bB6(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a7(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h3,u,u,u)
w=x.p
return A.p(u,A.bv(n,new A.Dt(A.A(A.a([m,A.D(new A.C(B.afw,A.A(A.a([l,B.bf,t,B.ab,k,A.aH(u,u,u,u,A.W(B.cx,(r?B.bq:B.bo).j(0.75),u,u,u,20),u,u,u,new C.eDS(this,d),u,u,u,u,u,B.c7)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aX5,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.db,u,u,u,u)}}
C.acj.prototype={
DV(d){return this.bJ3(d)},
bJ3(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$DV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oV(d,o,!1),$async$DV)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).N(null)
w=4
return A.b(A.bN(Aa.Au,null,x.H),$async$DV)
case 4:s=t.d
w=5
return A.b(C.fA1(!0,o,s),$async$DV)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.FP(r,"ngmy_project_"+A.aJ(s.b,q,"_"),!1),$async$DV)
case 6:p=f
w=7
return A.b(A.oU(o,!1),$async$DV)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$DV,v)},
Zc(d){return this.cqy(d)},
cqy(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oV(d,s,!1),$async$Zc)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).N(null)
A.hu(d,new C.aqS(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oU(s,!1),$async$Zc)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zc,v)},
Pd(d){return this.cmK(d)},
cmK(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Pd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).N(null)
w=3
return A.b(A.hu(d,D.aEi,!0,"NgmyWorksheetProjectScan",x.N),$async$Pd)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bB7(s),$async$Pd)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.R(D.eMH)
w=1
break}q=C.fUC(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$Pd)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Pd,v)},
Zd(d){return this.cyq(d)},
cyq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Zd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).N(null)
w=3
return A.b(C.bAF(),$async$Zd)
case 3:s=f
if(s==null){w=1
break}r=C.fUC(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$Zd)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Zd,v)},
B(d){var w=this,v=null,u=A.N(d).ax.a===B.H,t=new C.tt(u),s=w.d.d.length,r=u?B.dX:B.c,q=A.m(28),p=A.a([new A.ad(0,B.G,B.w.j(u?0.35:0.08),B.jX,36)],x.V),o=x.p
return A.bn(!0,new A.C(B.v_,A.p(v,A.v(A.a([w.cpa(d,t,s),new A.C(D.bpK,A.v(A.a([w.b1W(t,"QR restore"),B.S,A.A(A.a([w.aXY(t,!0,B.jc,B.aW,B.aW,new C.eE8(w,d),"Show to scan","QR code"),B.aw,w.aw3(t,B.iP,B.b4,B.by,new C.eE9(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b1W(t,"Backup files"),B.S,A.A(A.a([w.aw3(t,B.hx,B.aU,B.bT,new C.eEa(w,d),"Full copy","Backup file"),B.aw,w.aw3(t,M.y_,B.aJ,B.aM,new C.eEb(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cpa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eX,B.cY,B.fu],k):A.a([B.aZ,B.aU,B.bT],k)
w=A.ao(l,A.W(B.tH,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kE,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ad(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aOA(!0,A.m(13),64,D.by5,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aOF,l,l,l)
r=C.bB6(r.gwC(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.q,A.a([w,new A.C(D.bq7,A.v(A.a([v,A.A(A.a([s,B.ev,A.D(A.v(A.a([u,B.at,t,B.P,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fI,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.W(B.cx,B.c.j(0.85),l,l,l,l),l,l,l,new C.eE7(d),l,l,l,A.np(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aM_,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.ax,B.aD,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b1W(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aU,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bo,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aXY(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.aed:B.aP
if(e)w=B.aW.j(o?0.45:0.35)
else{w=o?B.dZ:B.bW
w=w.j(o?0.8:1)}w=A.I(w,B.r,e?1.5:1)
v=e?A.a([new A.ad(0,B.G,B.aW.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.r,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qH,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.aA,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.ex(new A.C(E.Xz,A.v(A.a([t,B.ac,u,B.bz,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bo,r,r,r,r,r,r,r,r,11,r,r,B.cs,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af),1)},
aw3(d,e,f,g,h,i,j){return this.aXY(d,!1,e,f,g,h,i,j)}}
C.aqS.prototype={
T(){return new C.bj2()}}
C.bj2.prototype={
a_(){this.a1()
this.adj()},
adj(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$adj=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bB8(p.c,p.d),$async$adj)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eDM(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eDN(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adj,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.N(d).ax.a===B.H,f=g?B.A0:B.iH,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.W(B.eB,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eDO(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.z3],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eX,B.cY,B.fu],s):A.a([B.aZ,B.aU,B.bT],s)
r=x.V
q=A.a([new A.ad(0,B.G,B.aU.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.du,B.L,h,h)
p=C.bB6(p.gwC(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.ao,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fI,h,h,h)],u),B.m,h,B.ba,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a7(B.ax,B.aD,B.x,s,h,h),B.n),h,h,h,h,E.XU,h,h,1/0)
t=g?D.bdL:B.c
q=A.m(24)
p=A.I(w?B.aW.j(0.4):B.aU.j(0.3),B.r,1)
r=A.a([new A.ad(0,B.G,B.w.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a6n,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e0W)
else{m=A.m(20)
l=A.I(B.aL,B.r,1)
o.push(A.p(h,A.pz(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bU,h,h,h))}}o.push(B.aO)
n=w?B.aW:B.aU
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aW:B.aU).j(0.35),B.r,1)
k=w?B.MC:B.N7
k=A.W(k,w?B.aW:B.aU,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.aw,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a4,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iN,h,h,h))
return A.cb(h,f,A.bn(!0,A.v(A.a([new A.C(A5.LM,e,h),A.D(A.cd(A.v(A.a([s,B.aO,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tn,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.y,h,E.agF,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.aqX.prototype={
T(){return new C.aDh(A.yM(B.L3,B.nn,B.tM))}}
C.aDh.prototype={
q(){this.d.q()
this.a2()},
aKp(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iK(w,d)},
c6r(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.hZP(t)
if(s!=null){this.aKp(s)
return}r=C.h7Y(t)
if(r!=null)q=A.dr(r,p,0)
else q=!1
if(q){this.aKp(B.a.i(B.a.b_(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eD(A.a([A.aH(t,t,t,t,A.W(u.f?B.qN:A0.MI,t,t,t,t,t),t,t,t,new C.eDQ(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.A0,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fgU,t,t,t,1,t,!0),q=A.yL(u.d,B.bQ,u.gc6q()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aU,B.r,3),p,A.a([new A.ad(2,B.G,B.aU.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.cb(r,B.w,new A.an(B.W,t,B.b_,B.q,A.a([q,p,A.ao(32,A.p(t,D.ffJ,B.f,t,t,new A.o(w,t,A.I(B.aU.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.j7,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aI2.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.Nk.prototype={
T(){return new C.aDj(D.a8t,A.a([],x.D))},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aDj.prototype={
gcwp(){return J.bCh(this.e,0,new C.eEy())},
a_(){this.a1()
$.aT.c1$.push(this)
this.vm()},
q(){$.aT.hB(this)
this.a2()},
iO(d){if(d===B.fs)this.vm()},
vm(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vm=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Cm(q.a.c).cM(0,B.jO),$async$vm)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eEu(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eEv(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vm,v)},
Hm(d){return this.bFV(d)},
bFU(){return this.Hm(null)},
bFV(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i0R(l,d),$async$Hm)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lc(l,r,q,D.d0_,new A.S(Date.now(),0,!1))
w=4
return A.b(C.Kz(t.a.c,p),$async$Hm)
case 4:o=f
w=5
return A.b(t.vm(),$async$Hm)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.R(D.eJS)
w=1
break}n=J.aX(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gU(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.R(D.eLB)
else n.I(q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.DZ(m)
case 1:return A.h(u,v)}})
return A.i($async$Hm,v)},
DZ(d){return this.can(d)},
can(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$DZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hu(s,new C.aqY(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$DZ)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Kz(u.a.c,t),$async$DZ)
case 5:case 4:w=6
return A.b(u.vm(),$async$DZ)
case 6:return A.h(null,v)}})
return A.i($async$DZ,v)},
v8(d){return this.bVq(d)},
bVq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$v8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bAF(),$async$v8)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hu(r,D.aEi,!0,"NgmyWorksheetProjectScan",x.N),$async$v8)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bB7(q),$async$v8)
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
r.R(A.b2(null,null,null,null,null,B.q,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.fUC(s)
w=15
return A.b(C.Kz(t.a.c,p),$async$v8)
case 15:o=f
w=16
return A.b(t.vm(),$async$v8)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.R(D.eLG)
w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.DZ(p)
case 1:return A.h(u,v)}})
return A.i($async$v8,v)},
N4(d){return this.bEA(d)},
bEA(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$N4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.c9(null,null,!0,null,new C.eEf(d),s,null,!0,!0,x.y),$async$N4)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.ot(t.a.c,A.a([],x.D)),$async$N4)
case 6:w=7
return A.b(t.vm(),$async$N4)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eJX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$N4,v)},
caA(d){var w=this.c
w.toString
A.bW(B.K,null,new C.eEo(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b2x(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jn
else w=B.c
v=A.m(16)
u=A.I(p?B.dZ:B.bW,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bR,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.aA,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bz,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bo,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.uZ,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af)},
ZI(d,e){return this.cao(d,e)},
cao(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bW(B.K,null,new C.eEj(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$ZI)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hgS(r,new C.eEk(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.N6(d,e),$async$ZI)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$ZI,v)},
b_B(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bR,u,u,u)
if(d)t=B.aB
else t=h.a?B.aP:B.aA
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bq:B.bo,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,u,!0,new A.C(B.AG,A.A(A.a([s,B.bf,t,A.W(B.eo,w?B.bq:B.bo,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af)},
chc(d,e,f,g,h,i){return this.b_B(!1,d,e,f,g,h,i)},
N6(d,e){return this.bEK(d,e)},
bEK(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$N6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kW(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$N6)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bzn(t.a.c,d.a),$async$N6)
case 6:w=7
return A.b(t.vm(),$async$N6)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$N6,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.N(d).ax.a===B.H,n=new C.tt(o),m=o?B.bX:B.iH
if(q.f)o=D.b2L
else{w=q.bzd(n)
v=q.bUx(n)
u=q.gbwj()
if(o)t=B.jn
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aO,new C.EV(A.p(p,A.A(A.a([q.azu(N.Mj,"Projects",n,D.a8t),q.azu(B.v9,"Cashier",n,D.aSV),q.azu(B.Fi,"Family Tree",n,D.fNi)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.en,0.95,u,p),B.bv],r)
w=q.d
if(w===D.a8t){w=J.ac(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.aA,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b3,new C.avF(q.gaOy(),p)],r),B.m,p,B.e,B.j,0,p,p),B.az,q.che(n)],r))}else{o=q.a
if(w===D.aSV)u.push(new C.amZ(o.c,n,p))
else{w=q.r
u.push(new C.ao4(o.c,o.d,o.e,o.f,new C.eEB(q),new C.eEC(q),new A.cw(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.y,p,Ac.LF,p,p,B.ah)}return A.cb(p,m,A.bn(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bzd(d){var w=null,v=A.m(8),u=d.a,t=A.W(P.Za,u?B.bq:B.bo,w,w,w,16)
return A.aK(!1,v,!0,new A.C(B.kF,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bo,w,w,w,w,w,w,w,w,14,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eEc(this),w,w,w,w,w,w,w)},
gbwj(){switch(this.d.a){case 0:return D.a7L
case 1:return D.fE3
case 2:return D.a7M}},
bUx(d){var w=null,v=A.m(15),u=A.a([new A.ad(0,B.G,B.aU.j(0.35),B.cy,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bIx,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bf,D.bul,A.aF(!1,B.a1,!0,w,A.aK(!1,A.m(12),!0,A.p(w,D.bG5,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eEg(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.af)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.EV(A.p(w,A.v(A.a([new A.C(E.XF,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.Af(this.gcwp()),w,w,w,w,w,w,D.f0Y,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.uY,B.j7,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aU,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.fE2,w)},
azu(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aU:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.r,2):A.I(B.K,B.r,2),o=t?A.a([new A.ad(0.5,B.G,B.aU.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bo
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bo
return A.D(A.aF(!1,B.a1,!0,u,A.aK(!1,s,!0,A.dg(u,A.A(A.a([w,B.ea,new A.dm(1,B.ci,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.ba,B.j,0,u,u),u,u,B.cq,new A.o(r,u,p,q,o,u,B.n),B.is,u,u,u,B.LI,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eEx(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af),1)},
che(d){var w,v,u,t,s,r,q=this,p=null
if(J.ck(q.e)){w=d.a
v=w?B.dX:B.c
u=A.m(15)
t=A.p(p,D.bGa,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ad(2,B.G,B.aU.j(0.5),B.eT,28)],x.V),D.bRG,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aA,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.EV(A.p(p,A.v(A.a([t,B.d5,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bo,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e0,A.A(A.a([A.D(q.aQ1(B.iP,"Scan QR",new C.eEr(q),d),1),B.aw,A.D(q.aQ1(M.y_,"Upload file",new C.eEs(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.az,A.bJ(D.fqz,q.gaOy(),A.bk(B.aU,p,p,p,B.c,B.fL,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.brc,1.05,D.a7L,p)}w=J.b6(q.e,new C.eEt(q,d),x.l)
w=A.B(w,w.$ti.k("ai.E"))
return new C.EV(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bR,1,D.a7L,p)},
aQ1(d,e,f,g){var w=null,v=B.aU.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aU.j(0.45),B.r,1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(w,A.v(A.a([A.W(d,B.aZ,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.f_p,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.afq,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.af)},
chd(d,e){var w,v,u=null,t=e.a,s=t?B.dX:B.c,r=A.m(14),q=A.I(t?B.dZ:B.bW,B.r,1),p=A.a([new A.ad(0,B.G,B.w.j(t?0.35:0.08),B.ej,10)],x.V),o=A.m(14),n=t?B.bq:B.bo
n=A.bv(B.Um,new A.fF(1.7777777777777777,C.aOA(!0,B.ft,1/0,N.Mj,n,d.c,1/0),u),B.aq)
w=x.p
v=A.D(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.aA,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.Af(d.gwC()),u,u,u,u,u,u,D.eYy,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aK(!1,o,!0,A.v(A.a([n,new A.C(B.bB,A.A(A.a([v,A.aH(u,u,u,u,A.W(Ae.MW,t?B.bq:B.bo,u,u,u,u),u,u,u,new C.eEp(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eEq(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.bvr.prototype={}
C.qK.prototype={
ad(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcPe(){var w,v,u,t,s=this.c
if(s===B.k.jM(s))w=B.o.u(B.k.O(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aJ(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lc.prototype={
gwC(){return B.d.cI(this.d,0,new C.ctW())},
ad(){var w=this,v=w.d,u=A.T(v).k("J<1,a4<n,@>>")
v=A.B(new A.J(v,new C.ctV(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
b9t(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lc(w.a,w.b,v,u,w.e)},
b9a(d){return this.b9t(d,null)},
RV(d){return this.b9t(null,d)}}
C.GY.prototype={
a4(){return"FamilyGender."+this.b}}
C.hU.prototype={
ad(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.hcI(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aC6(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hU(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ajl.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.ku.prototype={
gan6(){var w=this.f
return new A.a2(w,new C.bLA(),A.T(w).k("a2<1>")).gM(0)},
ad(){var w=this,v=w.f,u=A.T(v).k("J<1,a4<n,@>>")
v=A.B(new A.J(v,new C.bLz(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hSh(w.y)],x.N,x.z)},
yf(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.ku(w.a,v,u,t,s,r,w.r,q,p,o)},
b9s(d,e){var w=null
return this.yf(w,w,d,e,w,w,w,w)},
cF3(d,e,f,g,h,i,j){return this.yf(d,e,f,g,h,i,j,null)},
aCb(d,e){var w=null
return this.yf(w,w,w,d,w,w,e,w)},
cDy(d){var w=null
return this.yf(w,w,w,w,w,w,d,w)},
cDW(d){var w=null
return this.yf(w,w,w,w,w,w,w,d)},
aBY(d){var w=null
return this.yf(w,w,w,w,d,w,w,w)},
cEA(d,e,f){var w=null
return this.yf(w,d,w,e,w,w,f,w)},
cDl(d){var w=null
return this.yf(w,w,d,w,w,w,w,w)},
cE8(d,e){var w=null
return this.yf(d,w,w,w,w,e,w,w)}}
C.ctX.prototype={
a4(){return"WrapAlignment."+this.b}}
C.ctY.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aFl.prototype={}
C.b6N.prototype={
bx(d){this.a=d.a
this.b=d.b},
dr(d){var w=new C.b6N()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b6M.prototype={
gvW(){return!0},
gFr(){return this.z.b<this.b.length},
aRE(d){switch(0){case 0:return d.a.c}},
aRl(d){switch(0){case 0:return d.a.d}},
bO3(d,e){switch(0){case 0:return new A.hF(d,e)}},
bNs(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fY(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iA(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.GI(b4)
switch(0){case 0:v=b5.b
u=new A.kr(0,v,0,1/0)
t=w===B.Sm
break}s=A.a([],x.gZ)
r=A.V(x.cM,x.S)
for(b3=b1.z,q=B.d.fH(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.fY(b4,u,!0)
f=b1.aRE(g)
f.toString
e=b1.aRl(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFl(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFl(k,j,i))}d=s.length
switch(0){case 0:q=b5.ct(new A.hF(m,l))
a0=q.a
a1=q.b
b1.a=new A.iA(0,0,a0,a1)
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
for(q=B.d.fH(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.L)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aRE(g)
e=b1.aRl(g)
e.toString
a9=b1.bNs(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bO3(a6,a3+a9)
b0=g.a
g.a=new A.iA(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fV(d){var w,v,u,t,s,r=this
r.l4(d)
w=d.b
w.hX()
v=A.dl()
u=r.a
v.e2(u.a,u.b,0,1)
w.oE(0,v)
for(u=r.z,u=B.d.dn(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].fV(d)
w.n4(0)},
FX(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hX(){return this.z}}
C.btH.prototype={}
var z=a.updateTypes(["ay<~>()","R(hU)","R(ku)","~()","R(n3)","a4<n,@>(ku)","G(ku,ku)","n(hU)","ku(a4<@,@>)","R(lc)","R(tY)","n3(a4<@,@>)","tY()","G(lc,lc)","hU(a4<@,@>)","a4<n,@>(hU)","R(qK)","ay<~>(lc)","eO<n?>(hU)","G(hU,hU)","n?(hU)","a4<n,@>(n3)","Z0(Y)","n(n)","abZ(Y)","r(o4)","G(n3,n3)","hU(hU)","cK(bu<n,F7>)","cK(Jn)","~(hU)","G?(hU)","hU()","ak<hU>()","R(tX)","R(Jn)","C(hU)","~(GY)","R(adv)","r(GY,n,a0)","Yp(Y)","bu<n,ak<a4<n,@>>>(n,ak<n3>)","~(G)","+count,id,name(G,n,n)(ku)","ku(ku)","Zl(Y)","Zm(Y)","R(lt)","lt()","n(ku)","a03(Y)","Y_(Y)","XZ(Y)","Yn(Y)","Yr(Y)","r(qK)","acj(Y)","~(lQ)","ay<~>([n?])","O(O,lc)","r(lc)","O(O,qK)","a4<n,@>(qK)","qK(a4<@,@>)","XY(Y)","RQ(Y)","cn(GX)","lc(a4<@,@>)","tX()","n(lc)","a4<n,@>(lc)","n(S)","G(hU)","ku(a4<n,@>)","Xx(Y)"])
C.fsG.prototype={
$1(d){return d.a+" "+d.b},
$S:120}
C.fsF.prototype={
biu(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qC(s,d,B.hj,E.ED),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.U(r!=null&&A.Km(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.biu(d)},
$S:287}
C.fsH.prototype={
$1(d){return d.b},
$S:120}
C.fBM.prototype={
$1(d){var w=null
return A.eE(w,B.K,new F.OE(this.a,this.b,w),w,w,0,B.XA,B.d_,w,w,w)},
$S:47}
C.fi1.prototype={
$1(d){return d!=null},
$S:218}
C.fi2.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:218}
C.fi7.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:169}
C.fqp.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f7(d,w,w,w,A.h2(w,B.rb,w,w,w,w,w,w,w,B.dr,w,w,10.5,w,B.ei,w,!0,w,w,w,w),w),u=f?B.ei:B.v4
return new A.nA(D.bmN,A.a8C(A.a([new A.fO(130,w,v),new A.yu(1,B.Fb,A.f7(e,w,w,w,A.h2(w,g==null?D.e3c:g,w,w,w,w,w,w,w,B.dr,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.wY,B.lf))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1892}
C.fqo.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.v9(999)
f=A.wE(A.lo(h,A.f7("Cashier",h,h,h,A.h2(h,D.yR,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ei,h,!0,h,h,h,h),h),h,new A.ks(D.e33,h,f,B.hA,h),h,h,D.bnf,h))
w=A.wE(A.f7("Debt receipt",h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.dr,h,h,22,h,B.ei,h,!0,h,h,h,h),h))
v=A.wE(A.f7(C.wo(new A.S(Date.now(),0,!1),!0),h,h,h,D.a6v,h))
u=A.v9(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f7(s,h,h,h,A.h2(h,h,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ei,h,!0,h,h,h,h),h)
r=A.f7("Person who owes",h,h,h,D.a6v,h)
q=A.v9(10)
p=x.C
u=A.lo(h,A.yp(A.a([s,new A.fO(h,2,h),r,new A.fO(h,10,h),A.lo(h,A.yp(A.a([A.f7("Amount owed",h,h,h,D.a6v,h),new A.fO(h,2,h),A.f7(A.Af(t.c),h,h,h,A.h2(h,D.yR,h,h,h,h,h,h,h,B.dr,h,h,20,h,B.ei,h,!0,h,h,h,h),h)],p),B.qA,B.lf),h,new A.ks(B.oL,h,q,B.hA,h),h,h,D.bmt,1/0)],p),B.qA,B.lf),h,new A.ks(E.aFx,h,u,B.hA,h),h,h,D.boj,1/0)
q=new A.nj(D.e36,0.9,B.kx)
r=A.v9(12)
s=i.c
o=s.$2("Original due",C.wo(t.r,!1))
n=s.$2("Current due",C.wo(t.f,!1))
m=i.d
l=new A.nj(m,1.1,B.kx)
k=A.v9(8)
j=i.a
k=A.a([o,n,new A.fO(h,6,h),A.lo(h,A.wE(A.f7(t.gaIW(),h,h,h,A.h2(h,m,h,h,h,h,h,h,h,B.dr,h,h,11,h,B.ei,h,!0,0.5,h,h,h),h)),h,new A.ks(h,new A.pl(l,l,l,l),k,B.hA,h),h,h,D.bnn,1/0),new A.fO(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.yR))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.yR))
else{n=A.f7("Missed days ("+n+")",h,h,h,A.h2(h,B.rb,h,h,h,h,h,h,h,B.dr,h,h,10.5,h,B.ei,h,!0,h,h,h,h),h)
m=A.T(o).k("J<1,Rp>")
o=A.B(new A.J(o,new C.fqn(),m),m.k("ai.E"))
B.d.v(k,A.a([new A.fO(h,4,h),n,new A.fO(h,6,h),new C.b6M(5,5,new C.b6N(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fO(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fO(h,8,h),w,new A.fO(h,3,h),v,new A.fO(h,16,h),u,new A.fO(h,10,h),A.lo(h,A.yp(k,B.wY,B.lf),h,new A.ks(h,new A.pl(q,q,q,q),r,B.hA,h),h,h,B.afA,1/0)],p)
w=j.a
if(w!=null){v=new A.nj(B.HE,1,B.kx)
B.d.v(f,A.a([new A.fO(h,16,h),A.f7("Debtor signature",h,h,h,A.h2(h,B.rb,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.ei,h,!0,h,h,h,h),h),new A.fO(h,6,h),A.lo(h,new A.Hb(w,B.Uw,h,h),h,new A.ks(h,new A.pl(v,v,v,v),A.v9(6),B.hA,h),82,h,B.LK,1/0)],p))}f.push(new A.fO(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f7(w,h,h,h,D.eRA,h))
f.push(new A.fO(h,18,h))
f.push(A.wE(A.f7("NGMY.ORG",h,h,h,A.h2(h,D.yR,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.ei,h,!0,1.8,h,h,h),h)))
return f},
$S:449}
C.fqn.prototype={
$1(d){var w=null,v=new A.nj(D.HF,0.7,B.kx),u=A.v9(999)
return A.lo(w,A.f7(C.wo(d,!1),w,w,w,A.h2(w,D.HF,w,w,w,w,w,w,w,B.dr,w,w,9.5,w,B.ei,w,!0,w,w,w,w),w),w,new A.ks(w,new A.pl(v,v,v,v),u,B.hA,w),w,w,D.bsx,w)},
$S:1893}
C.c_o.prototype={
$1(d){var w=null,v=B.bL.j(0.08),u=A.m(999),t=A.I(B.bL.j(0.28),B.r,1)
return A.p(w,A.d(C.wo(d,!1),w,w,w,w,w,w,D.eY3,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eF,w,w,w)},
$S:1894}
C.fCh.prototype={
$1(d){var w=null,v=A.aI(d,B.bS,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bJp,w,w,w,new C.fCe(d),w,w,w,w,w,B.c7),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eE(w,B.K,new A.cU(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.C(B.Xp,A.v(A.a([new A.bI(B.a7,w,w,t,w),new A.dm(1,B.ci,A.cd(A.v(A.a([new A.es(new C.aWU(r,w),s),B.S,A.A(A.a([A.D(A.ez(B.ya,D.fmY,new C.fCf(s,r,d),A.de(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f3,w,new A.b7(A.m(14),B.Y),new A.az(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.D(A.dp(B.a_I,D.fjH,new C.fCg(r,d),A.bk(B.aZ,w,w,w,B.c,w,B.f3,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.q,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aA,0,w,w,w,w,w,B.af),w),w,w,0,Ah.XN,B.d_,w,w,w)},
$S:47}
C.fCe.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fCf.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aT.ak$.x.h(0,t.a)
m=m==null?null:m.gb7()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lL(2.5),$async$$0)
case 4:w=3
return A.b(e.hm(B.fS),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.fa(B.dG.gaP(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aJ(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.rE(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fCg.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fx_(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.R(A.b2(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fC9.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eE(w,B.aA,A.v(A.a([new A.C(D.bo7,A.A(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.nf,w,w,w),1),A.aH(w,w,w,w,B.ld,w,w,w,new C.fC7(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dm(1,B.ci,new A.C(B.h2,A.bv(A.m(14),A.fL(t,B.A,w,w,B.cm,B.dt,!1,w,!1,w,w),B.aq),w),w),new A.C(B.Lo,new A.a6(1/0,w,A.dp(B.oA,D.aP4,new C.fC8(t,this.c,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.LA,B.d_,w,new A.b7(v,B.Y),w)},
$S:47}
C.fC7.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fC8.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rE(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fCl.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eE(w,B.aA,new A.C(D.bof,A.v(A.a([A.A(A.a([D.bty,A.aH(w,w,w,w,B.ld,w,w,w,new C.fCj(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.es(A.bv(A.m(14),A.p(w,A.b3(w,w,w,new C.b8W(s.ax,w),B.au),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a6(1/0,w,A.dp(B.oA,D.aP4,new C.fCk(t,s,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d_,w,new A.b7(v,B.Y),w)},
$S:47}
C.fCj.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fCk.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aT.ak$.x.h(0,t.a)
n=n==null?null:n.gb7()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lL(2.5),$async$$0)
case 4:w=3
return A.b(e.hm(B.fS),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aJ(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.fa(B.dG.gaP(s))
w=5
return A.b(A.rE(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.flt.prototype={
$1(d){return d.a===this.a},
$S:256}
C.dCS.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dCD.prototype={
bhH(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dX:B.c
s=u.a
w=2
return A.b(A.bW(t,null,new C.dCG(s,q,e),p,!0,!0,!1,B.HU,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dCH(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bhH(d,e)},
$S:1895}
C.dCG.prototype={
$1(d){var w,v=null,u=this.c===B.vF,t=u?D.d5I:D.d27
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.aA,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bn(!0,new A.C(K.ag9,A.v(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bo,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ib(!0,v,v,B.y,L.aMh,new C.dCF(this.a,w,t,d),t.length,v,B.dQ,B.ah,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:29}
C.dCF.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bq:B.bo).j(0.16)
u=A.I(u,B.r,q?1.6:1)
return A.aK(!1,p,!0,A.p(B.A,C.aWT(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dCE(t.d,r),s,s,s,s,s,s,s)},
$S:198}
C.dCE.prototype={
$0(){A.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.dCH.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dCB.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:96}
C.dCC.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cI(B.cq,e,v)
return new A.cX(e,!1,A.ig(B.A,A.av(A.aF(!1,B.a1,!0,v,new A.e2(new C.dCA(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.af),v,v,v),v,new A.bf(t,new A.bm(0.96,1,u),u.k("bf<bH.T>"))),v)},
$S:30}
C.dCA.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bS,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dX:B.c,f=A.m(14),e=A.I((h?B.bq:B.bo).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aK(!1,v,!0,new A.C(B.en,A.W(B.cx,i.a.d.a?B.bq:B.bo,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dCl(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aQy("Name")
r=l.a
q=r.d==null?k:new C.dCm(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bm:B.lw
n=A.I(B.cY.j(0.35),B.r,1)
m=r.d
t=A.aL(k,B.T,h,k,!0,B.q,k,A.aM(),w,k,k,k,k,k,2,s.b9l(new A.C(B.fx,A.aK(!1,p,!0,A.p(B.A,C.aWT(m==null?"\ud83d\udc64":A.frd(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cj,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.kr,k,B.a6e,k,k)
v=A.a([v,B.ac,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bo,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ao,A.A(A.a([A.D(i.aRb("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dCn(r,a0),r.d===B.vF),1),B.ab,A.D(i.aRb("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dCs(r,a0),r.d===B.a3c),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bI(B.a3,k,k,A.hc(D.bHO,D.flp,new C.dCt(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c7)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.u0(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aL(k,B.T,!1,k,!0,B.q,k,A.aM(),l.f,k,k,k,k,k,2,i.aQz("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dU,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bq:B.bo).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wo(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(k,A.A(A.a([A.D(A.v(A.a([t,B.bz,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bEG],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dCu(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.af))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aL(k,B.T,!1,k,!0,B.q,k,A.aM(),l.r,k,k,k,k,k,2,i.aQy("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aYX(r.b.length!==0,B.mc,new C.dCv(r,i,a0),new C.dCw(r,a0),"Upload from gallery","ID photo"))
v.push(i.aYX(r.c.length!==0,D.by3,new C.dCx(r,i,d,a0),new C.dCy(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Af.a6x("Signature (optional)",t,new C.dCz(a0),new C.dCo(a0,t),new C.dCp(d,t,a0),k))
v.push(B.az)
i=i.a.d.a
t=i?B.bq:B.bo
s=(i?B.bq:B.bo).j(0.28)
s=A.D(A.dT(E.aOY,new C.dCq(d),A.de(k,k,k,k,k,k,k,k,k,t,k,k,B.uT,k,new A.b7(A.m(10),B.Y),new A.az(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cY,k,k,k,B.c,k,B.uT,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.A(A.a([s,B.ab,A.D(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uh,k,k,k),new C.dCr(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.q,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.v1,B.j7,k,k,360)},
$S:199}
C.dCl.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dCm.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dCn.prototype={
$0(){return this.b.$1(new C.dCk(this.a))},
$S:0}
C.dCk.prototype={
$0(){var w=this.a
w.d=B.vF
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dCs.prototype={
$0(){return this.b.$1(new C.dCj(this.a))},
$S:0}
C.dCj.prototype={
$0(){var w=this.a
w.d=B.a3c
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dCt.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dCu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.ws(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dCi(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dCi.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gcg(),w.gcc(),w.gcs(),0,0,0,0,0)},
$S:0}
C.dCv.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.OC(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dCh(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dCh.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dCw.prototype={
$0(){return this.b.$1(new C.dCg(this.a))},
$S:0}
C.dCg.prototype={
$0(){return this.a.b=""},
$S:0}
C.dCx.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dX:B.c
w=3
return A.b(A.bW(q,null,new C.dCe(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.OC(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dCf(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dCe.prototype={
$1(d){var w=null
return A.bn(!0,A.v(A.a([A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.alh,w,w,w,w,new C.dC8(d),!1,w,w,w,w,w,w,w,D.fcd,w,w,w),A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.alf,w,w,w,w,new C.dC9(d),!1,w,w,w,w,w,w,w,D.fiM,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.ag,!0,!0)},
$S:29}
C.dC8.prototype={
$0(){A.a5(this.a,!1).N("camera")
return null},
$S:0}
C.dC9.prototype={
$0(){A.a5(this.a,!1).N("gallery")
return null},
$S:0}
C.dCf.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dCy.prototype={
$0(){return this.b.$1(new C.dCd(this.a))},
$S:0}
C.dCd.prototype={
$0(){return this.a.c=""},
$S:0}
C.dCz.prototype={
$0(){return this.a.$1(new C.dCc())},
$S:0}
C.dCc.prototype={
$0(){},
$S:0}
C.dCo.prototype={
$0(){return this.a.$1(new C.dCb(this.b))},
$S:0}
C.dCb.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dCp.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.agq(u.a,null,null,new C.dCa(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dCa.prototype={
$4(d,e,f,g){this.a.$1(new C.dC7(this.b,d))},
$S:410}
C.dC7.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dCq.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dCr.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.R(D.eNx)
return}if(w.a.d==null){w.c.I(x.q).f.R(D.eKt)
return}A.a5(w.c,!1).N(!0)},
$S:0}
C.dCV.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:96}
C.dCW.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.bq:B.bo).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.aA,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Af(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bo,r,r,r,r,r,r,r,r,13,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yG(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yG(r).length>0?B.bL:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bo
t=(q?B.bq:B.bo).j(0.28)
s=x.p
return new A.cX(e,!1,A.av(A.aF(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.P,v,u,B.az,A.A(A.a([A.D(A.dT(B.ng,new C.dCT(d),A.de(r,r,r,r,r,r,r,r,r,w,r,r,B.jq,r,new A.b7(A.m(10),B.Y),new A.az(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.D(A.bJ(D.fja,new C.dCU(d),A.bk(B.cY,r,r,r,B.c,r,B.jq,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.AJ,E.XF,r,r,300),B.f,B.K,0,r,r,r,r,r,B.af),r,r,r),r)},
$S:30}
C.dCT.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dCU.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dCP.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dCQ(r),p=r.a.d.a,o=p?B.dX:B.c,n=A.m(14),m=A.I((p?B.bq:B.bo).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.aA,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Af(l.c),s,s,s,s,s,s,D.eZw,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iw((r.a.d.a?B.bq:B.bo).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.Zv,"View receipt",new C.dCI(r,d,l))
u=l.x!=null
t=u?B.qS:B.px
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.boc,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dCJ(r,d,l)),q.$3$icon$label$onTap(B.B_,"Edit",new C.dCK(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mc,"View / download ID",new C.dCL(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.by2,"View / download selfie",new C.dCM(r,d,l)))
if(l.gaDO())p.push(q.$3$icon$label$onTap(A4.a_z,"View / download signature",new C.dCN(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bL,B.e4,"Delete",new C.dCO(r,d,l)))
p.push(B.at)
return A.bn(!0,new A.C(B.uY,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:29}
C.dCQ.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.aA
else w=d
return A.aK(!1,v,!0,new A.C(B.eP,A.A(A.a([A.W(e,w,v,v,v,20),B.bf,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1896}
C.dCI.prototype={
$0(){A.a5(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fCd(w,this.c)},
$S:0}
C.dCJ.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.Rg(this.c)},
$S:0}
C.dCK.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.CD(this.c)},
$S:0}
C.dCL.prototype={
$0(){var w,v,u
A.a5(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBv(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dCM.prototype={
$0(){var w,v,u
A.a5(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBv(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dCN.prototype={
$0(){A.a5(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fCi(w,this.c)},
$S:0}
C.dCO.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.Nh(0,this.c)},
$S:0}
C.dCX.prototype={
$1(d){return d.x==null},
$S:256}
C.dCY.prototype={
$1(d){return d.x!=null},
$S:256}
C.dCZ.prototype={
$2(d,e){return d+e.c},
$S:1897}
C.dD_.prototype={
$0(){return this.a.bwO()},
$S:0}
C.dCR.prototype={
$0(){return this.a.adw(this.b)},
$S:0}
C.flY.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.flZ.prototype={
$0(){return B.d.gL(D.a0M)},
$S:z+68}
C.d2K.prototype={
$0(){var w=this.a
return w.m(new C.d2I(w,this.b))},
$S:0}
C.d2I.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d2J.prototype={
$0(){},
$S:0}
C.d2L.prototype={
$0(){var w=this.a.gbVe()
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.fnX.prototype={
$1(d){return C.fYE(A.a1(d,x.N,x.z))},
$S:z+11}
C.fnY.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fnZ.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fAS.prototype={
$1(d){return d.ad()},
$S:z+21}
C.fIW.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.flk.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bLv.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eY(e,v)?v:null},
$S:1898}
C.fBq.prototype={
$1(d){var w=this
return new C.Yp(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d3p.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d3o(w,d))},
$S:z+66}
C.d3o.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3d.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cx(u)?v.r>=J.ac(v.d):w)v.r=J.ac(v.d)-1},
$S:0}
C.d3a.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d2M.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d2N.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d3e.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d2V.prototype={
$1(d){var w=null,v=A.N(d).ax.a===B.H,u=v?B.dX:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.d2T(d),w,w),A.bJ(B.w1,new C.d2U(d),A.bk(B.mF,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d2T.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.d2U.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.d2W.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d3b.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d3c.prototype={
$0(){return B.d.gL(D.yk)},
$S:z+12}
C.d2R.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxV(0),t=J.ac(w.d)
w=J.ac(w.d)===1?"page":"pages"
return new C.RQ(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d2S.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2X.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.XY(v,u,J.ac(w.d),null)},
$S:z+64}
C.d2Y.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3n.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.XG(r.y,r.gxV(0),J.ac(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d3l(r),s,s,s,s,s,s,!1,B.a8)
else{w=e-1
v=J.q(r.d,w)
J.ac(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b8k(v,e,w,u,t,r.gbMA(),C.hcH(r.y.Q),r.gxV(0),s)
w=t}return A.c6(q,new C.d3m(r,e),new A.C(B.XG,w,s))},
$S:1899}
C.d3m.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcZ(t).ay){t=this.b
u=x.cy.a(B.d.gcZ(u.f.f)).gur(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dl()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fu(v*3.141592653589793*0.5)
return A.fr(B.a3,A.db(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d3l.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aES(B.pl,B.it)},
$S:0}
C.d37.prototype={
$0(){var w=this.a
return w.m(new C.d36(w))},
$S:0}
C.d36.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d38.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).N(null)
return null},
$S:0}
C.d2O.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jH.j(0.5),r=x.p,q=A.a([D.faS,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ck(p.d)?"Write this book":"Write a new book"
q.push(p.XV(d,B.dW,w,J.ck(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.XV(d,L.aj6,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cx(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cG,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.k7.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cG,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.k7.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.XV(d,A_.akh,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.XV(d,B.pE,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.XV(d,B.pE,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eE(u,E.Ac,A.bn(!0,new A.C(A3.AE,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.agz,B.d_,u,new A.b7(t,new A.az(s,1.4,B.r,-1)),u)},
$S:47}
C.d39.prototype={
$0(){A.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.d30.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cx(w.d)
return new C.Yr(v,J.cx(w.d),w.r+1,null)},
$S:z+54}
C.d31.prototype={
$1(d){var w=null
return A.oa(!1,A.eh(w,w,w,E.Ac,new A.k9(this.a,new C.d3_(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:331}
C.d3_.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a5V,B.o_,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:735}
C.d32.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d33.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:197}
C.d34.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d35.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Ao(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.QG(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d2Z(s,t))
w=4
return A.b(s.kJ(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d2Z.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d3g.prototype={
$1(d){var w=null
return A.oa(!1,A.eh(w,w,w,E.Ac,new A.k9(this.a,new C.d3f(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:331}
C.d3f.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a5V,B.o_,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:735}
C.d3h.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d3i.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:197}
C.d3j.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:197}
C.d3k.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Ao(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kJ(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d2P.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.beQ(B.pl,U.Lc)},
$S:0}
C.d2Q.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aES(B.pl,U.Lc)},
$S:0}
C.d59.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.d5a.prototype={
$1(d){var w=this.a
return w.m(new C.d58(w))},
$S:9}
C.d58.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d5b.prototype={
$1(d){var w=this.a
return w.m(new C.d57(w))},
$S:9}
C.d57.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d5c.prototype={
$1(d){var w=this.a
return w.m(new C.d56(w))},
$S:9}
C.d56.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d5d.prototype={
$0(){var w=this.a
return w.m(new C.d55(w,this.b))},
$S:0}
C.d55.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d5e.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga0x()
A.a5(this.b,!1).N(new A.bmM(w,v))},
$S:0}
C.d3E.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d3D.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Yn(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d3I.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d3H.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b53(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hz,v,v,v)
return A.eh(A.a([A.bK(!1,B.dd,v,v,!0,v,v,new C.d3F(d),v,v),A.bJ(B.w1,new C.d3G(d),A.bk(B.mF,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Ac,w,v,v,v,v,D.f9N,v)},
$S:19}
C.d3F.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.d3G.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.d3J.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.d3K.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a6(s,t,w[u],t))
return A.cd(A.c_(B.bD,r,B.bt,18,14),B.q,t,B.y,t,D.bp7,t,t,B.ah)},
$S:329}
C.d3C.prototype={
$0(){return this.a.Ph(0,this.b)},
$S:0}
C.d3B.prototype={
$0(){return this.a.OM(0,this.b)},
$S:0}
C.cCH.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cCI.prototype={
$0(){return B.d.gL(D.yk)},
$S:z+12}
C.cCJ.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bY(0,new A.C(d,A.bZ(w,new A.o(w,w,A.I(this.a.j(f),B.r,g),v,w,w,B.n),B.bd),w),0,0,0)},
$S:1901}
C.cW8.prototype={
$1(d){return this.a.m(new C.cW7(this.b,this.c))},
$S:9}
C.cW7.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cWx.prototype={
$1(d){return this.a.m(new C.cWk())},
$S:2}
C.cWk.prototype={
$0(){},
$S:0}
C.cWy.prototype={
$1(d){return this.a.m(new C.cWj())},
$S:2}
C.cWj.prototype={
$0(){},
$S:0}
C.cWz.prototype={
$0(){var w=this.a
return w.m(new C.cWi(w,this.b))},
$S:0}
C.cWi.prototype={
$0(){var w=this.a
return w.d=w.gnO().F7(this.b.a)},
$S:0}
C.cWA.prototype={
$0(){var w=this.a
return w.m(new C.cWh(w,this.b))},
$S:0}
C.cWh.prototype={
$0(){var w=this.a
return w.d=w.gnO().cCS(this.b)},
$S:0}
C.cWB.prototype={
$1(d){return this.a.m(new C.cWg())},
$S:2}
C.cWg.prototype={
$0(){},
$S:0}
C.cWC.prototype={
$0(){var w=this.a
return w.m(new C.cWf(w,this.b))},
$S:0}
C.cWf.prototype={
$0(){var w=this.a
return w.d=w.gnO().cCX(this.b.a)},
$S:0}
C.cWD.prototype={
$1(d){var w=this.a
return w.m(new C.cWs(w,d))},
$S:6}
C.cWs.prototype={
$0(){var w=this.a
return w.d=w.gnO().cDR(this.b)},
$S:0}
C.cWE.prototype={
$1(d){var w=this.a
return w.d=w.gnO().aC0(d)},
$S:2}
C.cWF.prototype={
$1(d){var w=this.a
return w.d=w.gnO().cD_(d)},
$S:2}
C.cWH.prototype={
$1(d){var w=this.a
return w.d=w.gnO().cDP(d)},
$S:2}
C.cWI.prototype={
$1(d){var w=this.a
return w.m(new C.cWr(w,d))},
$S:9}
C.cWr.prototype={
$0(){var w=this.a
return w.d=w.gnO().cDG(this.b)},
$S:0}
C.cWJ.prototype={
$0(){var w=this.a,v=w.gnO(),u=B.a.i(w.gxV(0).a.a),t=B.a.i(w.gazi().a.a)
u=v.b9C(B.a.i(w.gapd().a.a),t,u)
A.a5(this.b,!1).N(u)
return null},
$S:0}
C.dQt.prototype={
$0(){var w=this.a
w.vy()
w.a.bp()
w.a.pw()},
$S:0}
C.dQs.prototype={
$0(){var w=this.a
w.vy()
w.a.bp()
w.a.pw()},
$S:0}
C.dQv.prototype={
$0(){var w=this,v=w.b
if(J.cx(v)||J.ck(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dQw.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dQx.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dQr.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dQu.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dQz.prototype={
$0(){this.a.NN()
return null},
$S:0}
C.dQy.prototype={
$0(){return this.a.E_(this.b)},
$S:0}
C.dPU.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.dd,w,w,!0,w,w,new C.dPS(d),w,w),r=A.bk(B.bT,w,w,w,w,w,w,w,w,w,w,w)
return A.eh(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dPT(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dPS.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dPT.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dPV.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cDl(this.b)},
$S:0}
C.dPP.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aQO(w.b,w.c,w.d)},
$S:8}
C.dPn.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dPo.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPC.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.FS(t.a.c),$async$$0)
case 2:s=r.r_(q.dH(e,new C.dPA(t)))
if(s!=null&&t.c!=null)t.m(new C.dPB(t,s))
t.a.bp()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPA.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dPB.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPD.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dPE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPO.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cE8(C.hcR(w),w)},
$S:0}
C.dPM.prototype={
$1(d){return new A.e2(new C.dPL(this.a,this.b),null)},
$S:20}
C.dPL.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dX:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.akV,v,v,v,p>0?new C.dPH(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aO,A.A(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.alu,v,v,v,new C.dPI(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bK(!1,B.dd,v,v,!0,v,v,new C.dPJ(d),v,v),A.bJ(B.oX,new C.dPK(d),A.bk(B.bT,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:159}
C.dPH.prototype={
$0(){return this.b.$1(new C.dPG(this.a))},
$S:0}
C.dPG.prototype={
$0(){return--this.a.a},
$S:0}
C.dPI.prototype={
$0(){return this.b.$1(new C.dPF(this.a))},
$S:0}
C.dPF.prototype={
$0(){return++this.a.a},
$S:0}
C.dPJ.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dPK.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dPN.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cDW(this.a.a)
w.r.a8(0)},
$S:0}
C.dPb.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.agx(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.h6D(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dPc.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aBY(w)},
$S:0}
C.dPX.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.abZ(this.b,w,this.c,null)},
$S:z+24}
C.dPR.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dX:B.c,t=A.m(20),s=A.W(B.l9,B.aU,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bJ(D.fkf,new C.dPQ(d),A.bk(B.aU,w,w,w,w,w,w,w,w,w,w,w))],o),B.ba,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:19}
C.dPQ.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dPd.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dPe.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dPf.prototype={
$1(d){return d.a},
$S:z+7}
C.dPg.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hU(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aBY(w)},
$S:0}
C.dPk.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.agx(q)
w=A.T(q).k("a2<1>")
q=A.B(new A.a2(q,new C.dPi(r),w),w.k("H.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.h6D(v.e,null,r,v.f,v.r,new C.dPj(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dPj.prototype={
$0(){return this.a.a8I(this.b)},
$S:0}
C.dPi.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dPl.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("J<1,hU>")
w=A.B(new A.J(w,new C.dPh(this.b),v),v.k("ai.E"))
u.d=t.aBY(w)},
$S:0}
C.dPh.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dPW.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dPx.prototype={
$1(d){return d.length!==0},
$S:3}
C.dPy.prototype={
$1(d){var w=this
return new A.e2(new C.dPw(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dPw.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dX:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bo,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.J(o,new C.dPs(u,e,o),A.T(o).k("J<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aL(v,B.T,!1,v,!0,B.q,v,A.aM(),u,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(12),B.df),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.lS,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.eh(A.a([A.bK(!1,B.dd,v,v,!0,v,v,new C.dPt(d),v,v),A.bJ(B.IJ,new C.dPu(t,u,o,e),A.bk(B.bT,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.f80,new C.dPv(t,u,o,d),A.bk(B.aU,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a6(360,v,p,v),v,v,v,v,r,v)},
$S:159}
C.dPs.prototype={
$1(d){var w=null
return A.dN(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bLk,w,w,w,new C.dPr(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1902}
C.dPr.prototype={
$0(){return this.a.$1(new C.dPp(this.b,this.c))},
$S:0}
C.dPp.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dPt.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dPu.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dPq(w.c,u))
v.bM(0,B.c3)}},
$S:0}
C.dPq.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dPv.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).N(!0)},
$S:0}
C.dPz.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cEA(this.b,D.tp,C.FQ(v,w.a.c))},
$S:0}
C.dQ3.prototype={
$1(d){return d.as},
$S:z+1}
C.dQ4.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iK(this.b,w)},
$S:0}
C.dQ5.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i0y(v)
return w.UU(v==null?null:v.a)},
$S:0}
C.dQ6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hE2(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcl(k)){k=A.aP(1/0,e.a,e.b)
s=A.aP(1/0,e.c,e.d)
l.cmU(new A.at(u,t),v.gbfG(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cJb:D.cHE
q=A.I(s?B.dq:D.b84,B.r,1)
p=A.m(22)
o=A.bY(0,A.b3(m,m,m,new C.bbF(s,m),B.au),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bv(p,new A.an(B.W,m,B.aa,B.q,A.a([o,A.bY(0,A.ua(new A.Q(n,n,n,n),new A.a6(u,t,new C.bcx(l.d,v,l.f,w,new C.dQ_(l),l.gc75(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.btO(s,new C.dQ0(l,e),new C.dQ1(l,e),new C.dQ2(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a7(B.b1,B.b6,B.x,r,m,m),B.n),m,m,m,Q.afE,m,m,m,m)},
$S:203}
C.dQ_.prototype={
$1(d){var w=this.a
w.m(new C.dPY(w,d))},
$S:2}
C.dPY.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.dQ0.prototype={
$0(){var w=this.b
return this.a.b7i(1.25,new A.at(A.aP(1/0,w.a,w.b),A.aP(1/0,w.c,w.d)))},
$S:0}
C.dQ1.prototype={
$0(){var w=this.b
return this.a.b7i(0.8,new A.at(A.aP(1/0,w.a,w.b),A.aP(1/0,w.c,w.d)))},
$S:0}
C.dQ2.prototype={
$0(){var w=this,v=w.b
return w.a.aQO(new A.at(A.aP(1/0,v.a,v.b),A.aP(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbfG())},
$S:0}
C.dQ7.prototype={
$0(){var w=this.a
return w.m(new C.dPZ(w))},
$S:0}
C.dPZ.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dPm.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fA(s.c)),$async$$0)
case 2:t.xp("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3O.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bge(u,C.hgV(v.c,u),new C.d3N(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d3N.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d3P.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bjz(d.d,d.c,u.f.t(0,d.a),new C.d3M(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d3M.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fm1.prototype={
$1(d){var w,v=d.e
if(this.a.ag(0,v))return v
v=this.b
w=A.T(v)
return A.r_(new A.cQ(new A.a2(v,new C.fm2(d),w.k("a2<1>")),new C.fm3(),w.k("cQ<1,n>")))},
$S:z+20}
C.fm2.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fm3.prototype={
$1(d){return d.a},
$S:z+7}
C.fm_.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fm0.prototype={
$1(d){return d.b},
$S:z+7}
C.fm6.prototype={
$1(d){var w,v=d.e
if(this.a.ag(0,v))return v
v=this.b
w=A.T(v)
return A.r_(new A.cQ(new A.a2(v,new C.fm7(d),w.k("a2<1>")),new C.fm8(),w.k("cQ<1,n>")))},
$S:z+20}
C.fm7.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fm8.prototype={
$1(d){return d.a},
$S:z+7}
C.fm4.prototype={
$1(d){var w,v=A.eu([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ag(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fm5.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d3R.prototype={
$0(){return this.a},
$S:z+32}
C.d47.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ag(0,d)},
$S:266}
C.d4_.prototype={
$2(d,e){var w=this.a.ci(0,d,new C.d40()),v=J.a8(w)
if(!v.t(w,e))v.J(w,e)},
$S:125}
C.d40.prototype={
$0(){return A.a([],x.s)},
$S:736}
C.d3Z.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eY(w,e)
return w===!0},
$S:305}
C.d3S.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d3Y.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d3X.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aX(v==null?D.BH:v)
u=1
while(v.C())u+=s.$2(v.gU(v).a,e)
v=s.b.h(0,d)
v=J.aX(v==null?B.T:v)
while(v.C()){t=v.gU(v)
if(e.t(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aX(t==null?D.BH:t)
while(t.C())u+=s.$2(t.gU(t).a,e)}return u},
$S:1904}
C.d3T.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d41.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.J(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aX(u==null?B.T:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gU(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.J(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aX(t==null?D.BH:t)
while(t.C()){r=t.gU(t)
if(r.a!==a9&&!B.d.b8(w,new C.d42(r)))w.push(r)}}B.d.bn(w,new C.d43(a8))
B.d.b1(w,new C.d44())
q=C.hE1(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.epU],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.L)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.z(-p,p)],x.G)
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
else j.push(d)}}a0=(B.d.gL(k)+B.d.gal(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bmw(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1905}
C.d42.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d43.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d44.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d45.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a8(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cI(0,0,B.qg)+88-w.gL(n).a}else u=0
for(w=J.a8(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:653}
C.d46.prototype={
$1(d){return 16+d*156},
$S:252}
C.d3Q.prototype={
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
t.n(0,d,new C.F7(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.F7(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.F7(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aX(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gU(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Jn(d,new A.u(e+t,w),s,s.length))}},
$S:197}
C.d3U.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aHl(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:125}
C.d3V.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d3W.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:737}
C.d48.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:737}
C.d49.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:379}
C.d4a.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:179}
C.d4b.prototype={
$1(d){return d>=0.5},
$S:121}
C.f4B.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.ho(A.aK(!1,v,!0,new A.a6(38,38,A.W(d,this.a.c?B.c:B.cC,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1907}
C.eGV.prototype={
$1(d){var w=null,v=A.m(8),u=B.bT.j(0.12),t=A.m(8)
return new A.C(B.nH,A.aK(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eVh,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.LJ,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eGU(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eGU.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.djZ.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.djY.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nd,B.L,w,w)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.djW(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.m3,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.djX(d),w,w)],x.p),B.ba,B.EJ,w,u,D.bqn,w,D.bsi,new A.b7(v,B.Y),w,w)},
$S:19}
C.djW.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.djX.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dk7.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dk8.prototype={
$1(d){var w=this.a
return w.m(new C.dk6(w,d))},
$S:z+37}
C.dk6.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dk9.prototype={
$1(d){var w=null
return A.q5(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dkc.prototype={
$1(d){var w=this.a
return w.m(new C.dk5(w,d))},
$S:32}
C.dk5.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dkb.prototype={
$1(d){var w=null
return A.q5(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dkd.prototype={
$1(d){var w=this.a
return w.m(new C.dk4(w,d))},
$S:32}
C.dk4.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dke.prototype={
$0(){var w=this.a
return w.m(new C.dk3(w))},
$S:0}
C.dk3.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dkf.prototype={
$0(){var w=this.a
return w.m(new C.dk2(w))},
$S:0}
C.dk2.prototype={
$0(){return++this.a.at},
$S:0}
C.dkg.prototype={
$0(){var w=this.a
return w.m(new C.dk1(w))},
$S:0}
C.dk1.prototype={
$0(){return--this.a.ax},
$S:0}
C.dkh.prototype={
$0(){var w=this.a
return w.m(new C.dk0(w))},
$S:0}
C.dk0.prototype={
$0(){return++this.a.ax},
$S:0}
C.dki.prototype={
$1(d){var w=this.a
return w.m(new C.dk_(w,d))},
$S:9}
C.dk_.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dka.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dkj.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bT.j(0.18)
else w=q.c.a?B.dX:B.c
v=A.m(12)
if(p)u=B.bT
else u=(q.c.a?B.dZ:B.bW).j(0.85)
u=A.I(u,B.r,p?1.5:1)
if(p)t=B.bT
else t=q.c.a?B.bq:B.bo
t=A.W(f,t,r,r,r,18)
if(p)s=B.bT
else s=q.c.a?B.bq:B.bo
return A.D(A.aF(!1,B.a1,!0,r,A.aK(!1,o,!0,A.dg(r,A.v(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bb,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jq,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dkk(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af),1)},
$S:z+39}
C.dkk.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dkt.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.c5W.prototype={
$2(d,e){return new A.bu(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:94}
C.c62.prototype={
$1(d){return d.ad()},
$S:z+5}
C.c63.prototype={
$2(d,e){var w=J.b6(e,new C.c61(),x.a)
w=A.B(w,w.$ti.k("ai.E"))
return new A.bu(d,w,x.d2)},
$S:z+41}
C.c61.prototype={
$1(d){return d.ad()},
$S:z+21}
C.c5Y.prototype={
$1(d){return C.ajm(A.a1(d,x.N,x.z))},
$S:z+8}
C.c5Z.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c6_.prototype={
$1(d){return C.fYE(A.a1(d,x.N,x.z))},
$S:z+11}
C.c60.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c67.prototype={
$1(d){return new A.aEr(d.f.length,d.a,d.b)},
$S:z+43}
C.c68.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:564}
C.c64.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c65.prototype={
$1(d){return d.cDy(C.FQ(d,this.a))},
$S:z+44}
C.dQg.prototype={
$1(d){return C.tF(d,this.a.a.c)},
$S:z+2}
C.dQh.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dQl.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dQm.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dQd.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYm(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xW("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oU(r.c,r.e),$async$$0)
case 4:s.xW(p)
w=5
return A.b(s.IX(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQe.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYm(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xW("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oU(r.c,r.e),$async$$0)
case 4:s.xW(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQf.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Ua(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xW("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xW("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xW("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.IX(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a9(j)
o=r.a
if(o.c==null){w=1
break}o.xW(B.a.e9(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dQk.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYl(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xW("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).ce(A.ej(new C.dQj(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oU(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dQj.prototype={
$1(d){var w=this.b
return new C.Zl(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dQi.prototype={
$1(d){return D.fI4},
$S:z+46}
C.dQo.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dQp.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dQn(w,d)
return new A.C(B.db,new C.bcB(this.b,d.c,d.a,w,null),null)},
$S:1908}
C.dQn.prototype={
$0(){return this.a.WB(this.b.b)},
$S:0}
C.dQ8.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dQ9.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dQa.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dQb.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dQc.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dQq.prototype={
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
$S:180}
C.dC_.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dC0.prototype={
$0(){return B.d.gL(D.a27)},
$S:z+48}
C.dC1.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.W(this.b.d,B.c.j(0.95),w,w,D.cPa,44),w,w,w),w,w,new C.bhm(u,t,v,w),B.au)},
$S:67}
C.fBT.prototype={
$1(d){return A.oD(new C.fBS(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:137}
C.fBS.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dX:B.c,p=A.a([new A.ad(0,B.G,B.w.j(r?0.35:0.08),B.ra,24)],x.V),o=r?B.dZ:B.bW
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aU.j(0.25),B.bT.j(0.18)],x.O)
w=A.p(t,D.bFV,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a7(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.aA,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.C(E.agD,A.A(A.a([w,B.bf,A.D(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bo,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ib(!0,t,e,B.y,D.eIG,new C.fBR(this.b,s),20,B.agd,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kw,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:109}
C.fBR.prototype={
$2(d,e){var w=null,v=D.a27[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dZ:B.bW,B.r,1),q=A.a([new A.ad(0,B.G,B.w.j(s?0.35:0.08),B.ej,8)],x.V),p=A.m(15),o=A.D(new C.a5b(v.a,!0,w),1),n=s?B.jn:B.iK,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.aA,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aK(!1,u,!0,A.ex(A.bv(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bq:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.l5,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fBQ(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.af)},
$S:78}
C.fBQ.prototype={
$0(){A.a5(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cdA.prototype={
$0(){return this.a.aez(this.b)},
$S:0}
C.fBf.prototype={
$1(d){return D.fEk},
$S:z+74}
C.fII.prototype={
$1(d){var w=this
return new C.a03(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fBk.prototype={
$1(d){return new C.Y_(this.a,null)},
$S:z+51}
C.fBj.prototype={
$1(d){return D.fFj},
$S:z+52}
C.cWV.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cWW.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cWU(w,d))},
$S:32}
C.cWU.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cWX.prototype={
$1(d){return this.a.Jw()},
$S:2}
C.cWY.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cWR.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cWS.prototype={
$1(d){return this.a.Jw()},
$S:2}
C.cWT.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cuu.prototype={
$0(){},
$S:0}
C.cuA.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cuB.prototype={
$0(){return this.a.aMn(-1)},
$S:0}
C.cuC.prototype={
$1(d){return this.a.m(new C.cuz())},
$S:2}
C.cuz.prototype={
$0(){},
$S:0}
C.cuD.prototype={
$0(){return this.a.aMn(1)},
$S:0}
C.cuE.prototype={
$1(d){return this.a.m(new C.cuy())},
$S:2}
C.cuy.prototype={
$0(){},
$S:0}
C.cuF.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aU.j(0.2)
if(s)v=B.aU
else v=this.b.a?B.dZ:B.bW
return A.u_(u,u,B.aZ,r,u,new C.cux(t,d),B.AK,s,w,u,new A.az(v,1,B.r,-1),B.c7)},
$S:1909}
C.cux.prototype={
$1(d){var w=this.a
return w.m(new C.cuv(w,this.b))},
$S:9}
C.cuv.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cuG.prototype={
$1(d){return this.a.m(new C.cuw())},
$S:2}
C.cuw.prototype={
$0(){},
$S:0}
C.cuH.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.f43.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).N(w)},
$S:2}
C.f44.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.f45.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).N(w)},
$S:0}
C.f41.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbvX()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.C(D.bsh,new A.es(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.btD(p,v,this.b.a,u,t,r),r,r,B.au)},
$S:67}
C.f42.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dA.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aU,B.bT,w)
s.toString
s=A.a([B.aZ,s,B.aU],x.O)
return A.aF(!1,B.a1,!0,p,A.aK(!1,v,!0,A.ex(D.e15,r,new A.o(r,r,A.I(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.d8(-1.2+t,-0.5),new A.d8(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af)},
$S:138}
C.fA0.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.eE4.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eDW.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eDX.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eE2.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e2(new C.eE1(w,this.b),null)},
$S:20}
C.eE1.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dX:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eE(w,u,new A.C(B.agx,A.v(A.a([s,B.ao,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h3s(new C.eDZ(r,e),r.a),B.az,A.A(A.a([A.D(A.dT(B.dd,new C.eE_(d),w),1),B.aw,A.D(A.bJ(B.T3,new C.eE0(r,d),A.bk(B.aU,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d_,w,new A.b7(t,B.Y),w)},
$S:97}
C.eDZ.prototype={
$1(d){return this.b.$1(new C.eDY(this.a,d))},
$S:32}
C.eDY.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eE_.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eE0.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.eE3.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.RV(this.b)},
$S:0}
C.eDR.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.b9a(w)},
$S:0}
C.eDV.prototype={
$1(d){return this.bi9(d)},
bi9(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Kz(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iK(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eDU.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a2<1>")
w=A.B(new A.a2(w,new C.eDT(this.b),v),v.k("H.E"))
u.d=t.b9a(w)},
$S:0}
C.eDT.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eE5.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iK(this.b,w)},
$S:0}
C.eE6.prototype={
$1(d){return this.a.bA1(d,this.b)},
$S:z+55}
C.eDS.prototype={
$0(){return this.a.a8H(this.b)},
$S:0}
C.fIA.prototype={
$1(d){return new C.acj(this.a,this.b,this.c,null)},
$S:z+56}
C.eE8.prototype={
$0(){return this.a.Zc(this.b)},
$S:0}
C.eE9.prototype={
$0(){return this.a.Pd(this.b)},
$S:0}
C.eEa.prototype={
$0(){return this.a.DV(this.b)},
$S:0}
C.eEb.prototype={
$0(){return this.a.Zd(this.b)},
$S:0}
C.eE7.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eDM.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eDN.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eDO.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eDQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pC(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eDP(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eDP.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eEy.prototype={
$2(d,e){return d+e.gwC()},
$S:z+59}
C.eEu.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eEv.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eEf.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dX:B.c,s=A.m(24),r=A.p(v,D.bGk,B.f,v,v,new A.o(B.aB.j(u?0.18:0.08),v,A.I(B.aB.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.aA
u=u?B.dZ:B.bW
w=x.p
return A.eE(v,t,new A.C(B.xj,A.v(A.a([r,B.aO,q,B.P,p,B.d5,A.A(A.a([A.D(A.dT(B.ng,new C.eEd(d),A.de(v,v,v,v,v,v,v,v,v,o,v,v,B.f3,v,new A.b7(A.m(14),B.Y),new A.az(u,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bJ(D.fnS,new C.eEe(d),A.bk(B.aB,v,v,v,v,v,B.f3,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d_,v,new A.b7(s,B.Y),v)},
$S:47}
C.eEd.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.eEe.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.eEo.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dX:B.c,i=A.m(28),h=A.a([new A.ad(0,B.G,B.w.j(k?0.35:0.08),B.fK,28)],x.V),g=k?D.cVt:B.a1y,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.az,D.eCW,B.at,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cs,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a7(B.ax,B.aD,B.x,g,m,m),B.n),m,m,m,m,E.agA,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bo,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.D(v.b2x(B.b4,B.iP,new C.eEl(v,d),l,"Camera import","Scan QR"),1),B.aw,A.D(v.b2x(B.cv,M.y_,new C.eEm(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bo,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aB.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.aB.j(0.28),B.r,1)
o=A.p(m,D.bFJ,B.f,m,m,new A.o(B.aB.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bR,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.aA,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bo,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bn(!0,new A.C(B.v_,A.p(m,A.v(A.a([g,new A.C(B.agy,A.v(A.a([w,B.S,u,B.bv,t,B.S,A.aF(!1,B.a1,!0,m,A.aK(!1,s,!0,A.p(m,A.A(A.a([o,B.bf,n,A.W(B.eo,k?B.bq:B.bo,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eEn(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.af)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:29}
C.eEl.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.v8("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eEm.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.v8("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eEn.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.N4(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eEj.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dX:B.c,m=A.m(24),l=A.a([new A.ad(0,B.G,B.w.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.dZ:B.bW
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bq:B.bo
u=A.bv(w,new A.a6(48,48,C.aOA(!0,A.m(12),48,N.Mj,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.aA,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Af(v.gwC())
s=x.p
r=this.a
return A.bn(!0,new A.C(B.v_,A.p(q,A.v(A.a([B.S,k,new A.C(D.agv,A.A(A.a([u,B.bf,A.D(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bo,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.Aq,r.chc(B.tH,B.aU,new C.eEh(d),p,"QR code or backup file","Transfer project"),r.b_B(!0,B.e4,B.aB,new C.eEi(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:29}
C.eEh.prototype={
$0(){A.a5(this.a,!1).N("transfer")
return null},
$S:0}
C.eEi.prototype={
$0(){A.a5(this.a,!1).N("delete")
return null},
$S:0}
C.eEk.prototype={
$1(d){return this.bia(d)},
bia(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Kz(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vm(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eEB.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eEA(w))},
$S:0}
C.eEA.prototype={
$0(){return this.a.r++},
$S:0}
C.eEC.prototype={
$0(){var w=this.a
return w.m(new C.eEz(w))},
$S:0}
C.eEz.prototype={
$0(){return this.a.r++},
$S:0}
C.eEc.prototype={
$0(){var w=this.a.c
w.toString
return A.iK(w,null)},
$S:0}
C.eEg.prototype={
$0(){return this.a.caA(this.b)},
$S:0}
C.eEx.prototype={
$0(){var w=this.a
return w.m(new C.eEw(w,this.b))},
$S:0}
C.eEw.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eEr.prototype={
$0(){return this.a.v8("scan")},
$S:0}
C.eEs.prototype={
$0(){return this.a.v8("file")},
$S:0}
C.eEt.prototype={
$1(d){return this.a.chd(d,this.b)},
$S:z+60}
C.eEq.prototype={
$0(){return this.a.DZ(this.b)},
$S:0}
C.eEp.prototype={
$0(){return this.a.ZI(this.b,this.c)},
$S:0}
C.ctW.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.ctV.prototype={
$1(d){return d.ad()},
$S:z+62}
C.ctT.prototype={
$1(d){return C.hmI(A.a1(d,x.N,x.z))},
$S:z+63}
C.ctU.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.flc.prototype={
$1(d){return d.y===D.kf},
$S:z+2}
C.fJ3.prototype={
$1(d){return C.bzq(d,this.a)},
$S:z+2}
C.fjM.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bLA.prototype={
$1(d){return!d.as},
$S:z+1}
C.bLz.prototype={
$1(d){return d.ad()},
$S:z+15}
C.bLw.prototype={
$1(d){return C.fYF(A.a1(d,x.N,x.z))},
$S:z+14}
C.bLx.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bLy.prototype={
$1(d){return J.k(d)},
$S:17}
C.fbB.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.f7i.prototype={
$1(d){return C.fPh(A.a1(d,x.N,x.z))},
$S:z+67}
C.f7j.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.f7k.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fB6.prototype={
$1(d){return J.k(d)},
$S:17}
C.fB7.prototype={
$1(d){return d.a},
$S:z+69}
C.fB8.prototype={
$1(d){return d.length!==0},
$S:3}
C.fB9.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fBa.prototype={
$1(d){return d.RV(null).ad()},
$S:z+70}
C.fJ1.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.flE.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fo2.prototype={
$1(d){return C.ajm(A.a1(d,x.N,x.z))},
$S:z+8}
C.fo3.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fo4.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fo5.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fo6.prototype={
$1(d){return C.tF(d,this.a)},
$S:z+2}
C.fAU.prototype={
$1(d){return C.tF(d,this.a)},
$S:z+2}
C.fIX.prototype={
$1(d){return C.ajm(A.a1(d,x.N,x.z))},
$S:z+8}
C.fIY.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fIZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fll.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.flm.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fJ7.prototype={
$1(d){return!d.as},
$S:z+1}
C.fkW.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fkX.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fkY.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fIJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.foQ.prototype={
$1(d){return d.Q},
$S:z+72}
C.fAQ.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fo_.prototype={
$1(d){return C.ajm(A.a1(d,x.N,x.z))},
$S:z+8}
C.fo0.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fo1.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fAM.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f7Q.prototype={
$1(d){return d.length!==0},
$S:3}
C.f7R.prototype={
$1(d){return C.fYF(A.a1(d,x.N,x.z))},
$S:z+14}
C.f7S.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.f7T.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.f7U.prototype={
$1(d){return d.length!==0},
$S:3}
C.f86.prototype={
$2(d,e){return d.eT(new C.f87(e))},
$S:1910}
C.f87.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1911}
C.f83.prototype={
$1(d){return C.hID(d,this.a)},
$S:z+73}
C.f84.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.f85.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fcf.prototype={
$1(d){return d.a},
$S:z+49}
C.fcg.prototype={
$1(d){return d.length!==0},
$S:3}
C.fch.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fej.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fj5.prototype={
$1(d){return C.h8V(d,C.FQ(d,this.a))},
$S:z+5}
C.fj6.prototype={
$1(d){return C.h8W(d,C.FQ(d,this.a))},
$S:z+5};(function aliases(){var w=C.aJH.prototype
w.bsc=w.q
w=C.aLQ.prototype
w.bux=w.q
w=C.aLR.prototype
w.buy=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aBd.prototype,"gce9","cea",25)
var s
w(s=C.ayg.prototype,"gc7b","c7c",42)
v(s,"gaKE","MD",0)
v(s,"gcme","Ap",0)
v(s,"gbHF","Ni",0)
v(s,"gczW","xX",0)
v(s,"gcga","a_p",0)
v(s,"gbD7","N0",0)
v(s,"gbI5","W2",0)
w(s,"gbMA","bMB",71)
v(s,"gbxC","zs",0)
v(C.ayh.prototype,"gczS","EQ",0)
v(s=C.aBO.prototype,"gaeb","vn",0)
v(s,"gc9Q","Zz",0)
v(s,"gaOE","Hn",0)
v(s=C.aBL.prototype,"gcw9","a1t",0)
v(s,"gaeb","vn",0)
v(s,"gckk","a04",0)
v(s,"gcaN","ZN",0)
w(s,"gc75","c76",30)
v(s,"gbHX","Hs",0)
v(s,"gcx8","cx9",3)
v(s,"gbYW","XH",0)
w(s,"gc5C","c5D",23)
v(s,"gc9A","c9B",3)
v(s=C.aAc.prototype,"gc3r","ON",0)
v(s,"gc3t","c3u",3)
v(s,"gbED","a8j",0)
v(s=C.aBN.prototype,"gbL7","Wx",0)
v(s,"gbVl","Xa",0)
v(s,"gcqx","a0V",0)
v(s,"gcmP","a0w",0)
v(C.aBM.prototype,"gcmx","afV",0)
v(C.aqZ.prototype,"gc5A","Zb",0)
v(C.ax2.prototype,"ga1d","Jw",3)
v(C.ax1.prototype,"ga1d","Jw",3)
v(C.avM.prototype,"ga1d","Jw",3)
v(s=C.aDi.prototype,"gb__","PI",0)
v(s,"gbwp","UO",0)
v(s,"gcaB","caC",3)
w(C.aDh.prototype,"gc6q","c6r",57)
u(C.aDj.prototype,"gaOy",0,0,null,["$1","$0"],["Hm","bFU"],58,0,0)
t(C,"hg8","hSf",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.amS,C.tX,C.n3,C.GX,C.adv,C.Jf,C.tY,C.Jn,C.F7,C.bcz,C.aHl,C.ao1,C.d4c,C.lt,C.aRs,C.aRr,C.aPx,C.tt,C.qK,C.lc,C.hU,C.ku,C.aFl])
u(A.hS,[C.fsG,C.fsF,C.fsH,C.fBM,C.fi1,C.fi2,C.fi7,C.fqp,C.fqo,C.fqn,C.c_o,C.fCh,C.fC9,C.fCl,C.flt,C.dCG,C.dCB,C.dCC,C.dCe,C.dCa,C.dCV,C.dCW,C.dCP,C.dCQ,C.dCX,C.dCY,C.flY,C.fnX,C.fnY,C.fAS,C.fIW,C.flk,C.fBq,C.d3p,C.d2M,C.d2V,C.d3b,C.d2R,C.d2X,C.d2O,C.d30,C.d31,C.d3_,C.d3g,C.d3f,C.d5a,C.d5b,C.d5c,C.d3D,C.d3I,C.d3H,C.cCH,C.cCJ,C.cW8,C.cWx,C.cWy,C.cWB,C.cWD,C.cWE,C.cWF,C.cWH,C.cWI,C.dQu,C.dPU,C.dPP,C.dPn,C.dPA,C.dPD,C.dPM,C.dPb,C.dPX,C.dPR,C.dPd,C.dPe,C.dPf,C.dPk,C.dPi,C.dPh,C.dPx,C.dPy,C.dPs,C.dQ3,C.dQ_,C.d3O,C.d3P,C.fm1,C.fm2,C.fm3,C.fm_,C.fm0,C.fm6,C.fm7,C.fm8,C.fm4,C.fm5,C.d47,C.d3Y,C.d3T,C.d42,C.d43,C.d46,C.d3V,C.d49,C.d4a,C.d4b,C.f4B,C.eGV,C.djY,C.dk7,C.dk8,C.dk9,C.dkc,C.dkb,C.dkd,C.dki,C.dkj,C.c62,C.c61,C.c5Y,C.c5Z,C.c6_,C.c60,C.c67,C.c64,C.c65,C.dQg,C.dQj,C.dQi,C.dQp,C.dQq,C.dC_,C.fBT,C.fBf,C.fII,C.fBk,C.fBj,C.cWW,C.cWX,C.cWS,C.cuC,C.cuE,C.cuF,C.cux,C.cuG,C.f43,C.fA0,C.eE2,C.eDZ,C.eDV,C.eDT,C.eE6,C.fIA,C.eEf,C.eEo,C.eEj,C.eEk,C.eEt,C.ctV,C.ctT,C.ctU,C.flc,C.fJ3,C.fjM,C.bLA,C.bLz,C.bLw,C.bLx,C.bLy,C.f7i,C.f7j,C.fB6,C.fB7,C.fB8,C.fB9,C.fBa,C.fJ1,C.flE,C.fo2,C.fo3,C.fo5,C.fo6,C.fAU,C.fIX,C.fIY,C.fIZ,C.fll,C.flm,C.fJ7,C.fkW,C.fkX,C.fIJ,C.foQ,C.fAQ,C.fo_,C.fo0,C.fAM,C.f7Q,C.f7R,C.f7S,C.f7T,C.f7U,C.f87,C.f83,C.f84,C.fcf,C.fcg,C.fej,C.fj5,C.fj6])
u(A.au,[C.aWU,C.ajk,C.aSH,C.XG,C.b8k,C.bcx,C.bge,C.btO,C.bjz,C.abY,C.bgd,C.abX,C.bgc,C.aAd,C.aGo,C.abZ,C.Ja,C.bcy,C.abf,C.bcw,C.bcB,C.aWS,C.aqZ,C.acj])
u(A.mF,[C.b8W,C.ba6,C.b9Y,C.aFg,C.bfh,C.bcA,C.bbF,C.bhm,C.btD])
u(A.j2,[C.fCe,C.fCf,C.fCg,C.fC7,C.fC8,C.fCj,C.fCk,C.dCS,C.dCE,C.dCH,C.dCl,C.dCm,C.dCn,C.dCk,C.dCs,C.dCj,C.dCt,C.dCu,C.dCi,C.dCv,C.dCh,C.dCw,C.dCg,C.dCx,C.dC8,C.dC9,C.dCf,C.dCy,C.dCd,C.dCz,C.dCc,C.dCo,C.dCb,C.dCp,C.dC7,C.dCq,C.dCr,C.dCT,C.dCU,C.dCI,C.dCJ,C.dCK,C.dCL,C.dCM,C.dCN,C.dCO,C.dD_,C.dCR,C.flZ,C.d2K,C.d2I,C.d2J,C.d2L,C.d3o,C.d3d,C.d3a,C.d2N,C.d3e,C.d2T,C.d2U,C.d2W,C.d3c,C.d2S,C.d2Y,C.d3l,C.d37,C.d36,C.d38,C.d39,C.d32,C.d34,C.d35,C.d2Z,C.d3h,C.d3k,C.d2P,C.d2Q,C.d59,C.d58,C.d57,C.d56,C.d5d,C.d55,C.d5e,C.d3E,C.d3F,C.d3G,C.d3J,C.d3C,C.d3B,C.cCI,C.cW7,C.cWk,C.cWj,C.cWz,C.cWi,C.cWA,C.cWh,C.cWg,C.cWC,C.cWf,C.cWs,C.cWr,C.cWJ,C.dQt,C.dQs,C.dQv,C.dQw,C.dQx,C.dQr,C.dQz,C.dQy,C.dPS,C.dPT,C.dPV,C.dPo,C.dPC,C.dPB,C.dPE,C.dPO,C.dPH,C.dPG,C.dPI,C.dPF,C.dPJ,C.dPK,C.dPN,C.dPc,C.dPQ,C.dPg,C.dPj,C.dPl,C.dPW,C.dPr,C.dPp,C.dPt,C.dPu,C.dPq,C.dPv,C.dPz,C.dQ4,C.dQ5,C.dPY,C.dQ0,C.dQ1,C.dQ2,C.dQ7,C.dPZ,C.dPm,C.d3N,C.d3M,C.d3R,C.d40,C.d3S,C.eGU,C.djZ,C.djW,C.djX,C.dk6,C.dk5,C.dk4,C.dke,C.dk3,C.dkf,C.dk2,C.dkg,C.dk1,C.dkh,C.dk0,C.dk_,C.dka,C.dkk,C.dkt,C.dQh,C.dQl,C.dQm,C.dQd,C.dQe,C.dQf,C.dQk,C.dQo,C.dQn,C.dQ8,C.dQ9,C.dQa,C.dQb,C.dQc,C.dC0,C.fBQ,C.cdA,C.cWV,C.cWU,C.cWY,C.cWR,C.cWT,C.cuu,C.cuA,C.cuB,C.cuz,C.cuD,C.cuy,C.cuv,C.cuw,C.cuH,C.f44,C.f45,C.eE4,C.eDW,C.eDX,C.eDY,C.eE_,C.eE0,C.eE3,C.eDR,C.eDU,C.eE5,C.eDS,C.eE8,C.eE9,C.eEa,C.eEb,C.eE7,C.eDM,C.eDN,C.eDO,C.eDQ,C.eDP,C.eEu,C.eEv,C.eEd,C.eEe,C.eEl,C.eEm,C.eEn,C.eEh,C.eEi,C.eEB,C.eEA,C.eEC,C.eEz,C.eEc,C.eEg,C.eEx,C.eEw,C.eEr,C.eEs,C.eEq,C.eEp])
u(A.ag,[C.amZ,C.RQ,C.Yn,C.Yr,C.Yp,C.XY,C.ao4,C.anZ,C.Z0,C.ao2,C.Zl,C.Zm,C.a5b,C.Y_,C.XZ,C.Xx,C.a03,C.EV,C.avF,C.aqY,C.aqS,C.aqX,C.Nk])
u(A.ah,[C.aBd,C.bcu,C.ayg,C.bcP,C.ayh,C.ba4,C.aBO,C.aBL,C.aAc,C.aBN,C.aBM,C.bhG,C.aJH,C.ax2,C.ax1,C.avM,C.btG,C.aLQ,C.aLR,C.aDi,C.bj2,C.aDh,C.bvr])
u(A.kc,[C.dCD,C.dCF,C.dCA,C.dCZ,C.fnZ,C.bLv,C.d3n,C.d3m,C.d33,C.d3i,C.d3j,C.d3K,C.dPL,C.dPw,C.dQ6,C.d4_,C.d3Z,C.d3X,C.d41,C.d44,C.d45,C.d3Q,C.d3U,C.d3W,C.d48,C.c5W,C.c63,C.c68,C.dC1,C.fBS,C.fBR,C.f41,C.f42,C.eE1,C.eEy,C.ctW,C.fbB,C.f7k,C.fo4,C.fkY,C.fo1,C.f86,C.f85,C.fch])
t(C.bhn,C.aJH)
u(A.m0,[C.aaj,C.aI2,C.GY,C.ajl,C.ctX,C.ctY])
t(C.btE,C.aLQ)
t(C.btF,C.aLR)
t(C.aDj,C.bvr)
t(C.b6N,A.b6C)
t(C.btH,A.a4R)
t(C.b6M,C.btH)
w(C.aJH,A.eR)
w(C.aLQ,A.c8)
w(C.aLR,A.c8)
v(C.bvr,A.ev)
v(C.btH,A.iY)})()
A.jR(b.typeUniverse,JSON.parse('{"aWU":{"au":[],"r":[]},"b8W":{"aB":[]},"amZ":{"ag":[],"r":[]},"aBd":{"ah":["amZ"]},"RQ":{"ag":[],"r":[]},"ajk":{"au":[],"r":[]},"aSH":{"au":[],"r":[]},"bcu":{"ah":["RQ"]},"Yn":{"ag":[],"r":[]},"Yr":{"ag":[],"r":[]},"Yp":{"ag":[],"r":[]},"XY":{"ag":[],"r":[]},"ayg":{"ah":["Yn"]},"bcP":{"ah":["Yr"]},"ayh":{"ah":["Yp"]},"XG":{"au":[],"r":[]},"ba6":{"aB":[]},"b9Y":{"aB":[]},"ba4":{"ah":["XY"]},"aFg":{"aB":[]},"bfh":{"aB":[]},"b8k":{"au":[],"r":[]},"ao4":{"ag":[],"r":[]},"anZ":{"ag":[],"r":[]},"Z0":{"ag":[],"r":[]},"abZ":{"au":[],"r":[]},"aBO":{"ah":["ao4"]},"aBL":{"ah":["anZ"]},"bcx":{"au":[],"r":[]},"bcA":{"aB":[]},"bge":{"au":[],"r":[]},"bbF":{"aB":[]},"btO":{"au":[],"r":[]},"bjz":{"au":[],"r":[]},"aAc":{"ah":["Z0"]},"abY":{"au":[],"r":[]},"bgd":{"au":[],"r":[]},"abX":{"au":[],"r":[]},"bgc":{"au":[],"r":[]},"aAd":{"au":[],"r":[]},"aGo":{"au":[],"r":[]},"Ja":{"au":[],"r":[]},"ao2":{"ag":[],"r":[]},"Zl":{"ag":[],"r":[]},"Zm":{"ag":[],"r":[]},"aBN":{"ah":["ao2"]},"bcy":{"au":[],"r":[]},"abf":{"au":[],"r":[]},"bcw":{"au":[],"r":[]},"bcB":{"au":[],"r":[]},"aBM":{"ah":["Zl"]},"bhG":{"ah":["Zm"]},"aWS":{"au":[],"r":[]},"a5b":{"ag":[],"r":[]},"bhn":{"ah":["a5b"]},"bhm":{"aB":[]},"aqZ":{"au":[],"r":[]},"Y_":{"ag":[],"r":[]},"XZ":{"ag":[],"r":[]},"Xx":{"ag":[],"r":[]},"a03":{"ag":[],"r":[]},"ax2":{"ah":["Y_"]},"ax1":{"ah":["XZ"]},"avM":{"ah":["Xx"]},"btG":{"ah":["a03"]},"EV":{"ag":[],"r":[]},"avF":{"ag":[],"r":[]},"btE":{"ah":["EV"]},"btF":{"ah":["avF"]},"btD":{"aB":[]},"aqY":{"ag":[],"r":[]},"aDi":{"ah":["aqY"]},"acj":{"au":[],"r":[]},"aqS":{"ag":[],"r":[]},"aqX":{"ag":[],"r":[]},"bj2":{"ah":["aqS"]},"aDh":{"ah":["aqX"]},"Nk":{"ag":[],"r":[]},"aDj":{"ah":["Nk"],"ev":[]},"b6M":{"iY":[],"fd":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aPx"),Q:w("qK"),n:w("bq<n,n>"),c5:w("aRr"),dY:w("aRs"),d:w("eO<n?>"),e:w("GX"),B:w("n3"),P:w("hU"),k:w("ku"),x:w("ay<~>"),f5:w("P<a23>"),V:w("P<ad>"),t:w("P<qK>"),O:w("P<w>"),ac:w("P<eO<n?>>"),I:w("P<n3>"),u:w("P<hU>"),_:w("P<ku>"),cl:w("P<ay<ak<a4<n,@>>>>"),R:w("P<n5>"),cq:w("P<ak<+(O,O)>>"),ez:w("P<a4<n,aC>>"),gE:w("P<a4<n,n>>"),c7:w("P<a4<n,@>>"),fD:w("P<mi>"),bp:w("P<o4>"),g:w("P<u>"),v:w("P<hm>"),L:w("P<+(n,n)>"),G:w("P<+(O,O)>"),bF:w("P<+count,id,name(G,n,n)>"),A:w("P<cP>"),s:w("P<n>"),aS:w("P<iN>"),p:w("P<r>"),C:w("P<fd>"),D:w("P<lc>"),fp:w("P<Jf>"),M:w("P<Jn>"),gZ:w("P<aFl>"),Y:w("P<adv>"),E:w("P<aHl>"),F:w("P<O>"),dC:w("P<G>"),dS:w("P<aB?>"),d4:w("P<n?>"),J:w("cp<ah<ag>>"),b:w("ak<n3>"),do:w("ak<hU>"),r:w("ak<ku>"),U:w("ak<a4<n,@>>"),gk:w("ak<+(n,n)>"),bC:w("ak<+count,id,name(G,n,n)>"),h:w("ak<n>"),c:w("ak<lc>"),j:w("ak<@>"),fK:w("bu<n,n>"),d2:w("bu<n,ak<a4<n,@>>>"),a:w("a4<n,@>"),f:w("a4<@,@>"),gv:w("J<n,GZ>"),w:w("iy"),g2:w("r3"),bV:w("amS"),fL:w("cn"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(O,ak<hU>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),e7:w("bm<O>"),gc:w("dD"),b4:w("cw<G>"),W:w("k9<n>"),l:w("r"),cM:w("fd"),i:w("lc"),cc:w("F7"),bw:w("abX<n?>"),cy:w("Jp"),q:w("mT"),y:w("R"),gR:w("O"),z:w("@"),S:w("G"),eK:w("ak<ku>?"),m:w("ao1?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),X:w("+qrPayload,token,usesRemaining(n,n,G)?"),gF:w("+members,trees,viewOnly(G,G,R)?"),Z:w("pI?"),T:w("n?"),aD:w("dD?"),o:w("lc?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVg=new A.bp(B.ha,B.bE,B.ha,B.bE)
D.a95=new A.bp(B.ha,B.jZ,B.ha,B.jZ)
D.aVs=new A.bp(B.ie,B.bE,B.bE,B.bE)
D.aVw=new A.az(B.cY,1.4,B.r,-1)
D.aVG=new A.az(B.ad,1,B.r,-1)
D.aX5=new A.aY(0,1/0,64,1/0)
D.aX9=new A.aY(0,84,0,1/0)
D.aw3=w([B.lw,B.qy,B.c],x.O)
D.bQP=new A.a7(B.ax,B.aD,B.x,D.aw3,null,null)
D.aXU=new A.o(null,null,null,null,null,D.bQP,B.n)
D.cV_=w([B.aU,B.bT],x.O)
D.bSU=new A.a7(B.b1,B.b6,B.x,D.cV_,null,null)
D.aYd=new A.o(null,null,null,null,null,D.bSU,B.n)
D.b3j=new A.fh(null,null,null,null,null,E.jH,null,null,null,null)
D.aao=new A.cr(B.A,null,null,D.b3j,null)
D.k7=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eTi=new A.F(!0,D.k7,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb4=new A.x("No books on the shelf yet.",null,D.eTi,null,null,null,null,null,null,null,null,null)
D.e16=new A.C(B.nI,D.fb4,null)
D.b1T=new A.cr(B.A,null,null,D.e16,null)
D.b2L=new A.cr(B.A,null,null,Y.UT,null)
D.b4K=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b5c=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.abs=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b7O=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b84=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.acD=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bbP=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bcc=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.E9=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bdL=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bfY=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.aed=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.f5L=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bl9=new A.eO(null,D.f5L,B.f0,null,x.d)
D.fec=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.blb=new A.eO(null,D.fec,B.f0,null,x.d)
D.blJ=new A.b9(38e5)
D.bmt=new A.i8(0,10,0,10)
D.bmD=new A.Q(0,1,0,0)
D.bmN=new A.i8(0,4,0,4)
D.bn4=new A.Q(10,10,14,10)
D.bnf=new A.i8(10,4,10,4)
D.bnn=new A.i8(10,8,10,8)
D.bno=new A.Q(10,8,8,8)
D.bnQ=new A.Q(12,6,12,2)
D.bo7=new A.Q(14,10,6,6)
D.bo8=new A.Q(14,12,14,0)
D.boc=new A.Q(14,12,14,8)
D.bof=new A.Q(14,12,8,14)
D.boj=new A.i8(14,14,14,14)
D.boY=new A.Q(16,2,16,10)
D.bp7=new A.Q(16,6,16,30)
D.bp9=new A.Q(16,6,16,8)
D.agv=new A.Q(18,16,18,8)
D.bpK=new A.Q(18,20,18,22)
D.agz=new A.Q(18,24,18,24)
D.bpQ=new A.Q(18,30,18,30)
D.bq7=new A.Q(20,10,12,20)
D.bql=new A.Q(20,18,16,18)
D.bqn=new A.Q(20,18,20,6)
D.brc=new A.Q(24,32,24,28)
D.brd=new A.Q(24,36,24,32)
D.brh=new A.Q(26,26,24,14)
D.brv=new A.Q(2,4,2,8)
D.brz=new A.Q(30,0,30,0)
D.brK=new A.Q(38,22,22,22)
D.agQ=new A.Q(40,24,24,24)
D.brM=new A.i8(40,40,40,40)
D.brO=new A.Q(46,30,30,30)
D.agT=new A.Q(4,0,0,8)
D.bsd=new A.Q(56,40,40,40)
D.bsh=new A.Q(1.25,1.25,1.25,1.25)
D.bsi=new A.Q(60,0,60,0)
D.bsl=new A.Q(6,14,6,16)
D.bsx=new A.i8(7,3,7,3)
D.bt2=new A.Q(5,1.5,5,1.5)
D.btd=new A.Q(6,2.5,6,2.5)
D.fpO=new A.x("Signature",null,B.nf,null,null,null,null,null,null,null,null,null)
D.bty=new A.bE(1,B.bi,D.fpO,null)
D.fn_=new A.x("Tell the AI what to fix",null,B.du,null,null,null,null,null,null,null,null,null)
D.bug=new A.bE(1,B.bi,D.fn_,null)
D.f_v=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foW=new A.x("Worksheets",null,D.f_v,null,null,null,null,null,null,null,null,null)
D.f_D=new A.F(!0,E.ab2,null,null,null,null,13,B.cs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnQ=new A.x("Track your project spending",null,D.f_D,null,null,null,null,null,null,null,null,null)
D.cNn=w([D.foW,B.at,D.fnQ],x.p)
D.biH=new A.fl(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cNn,null)
D.bul=new A.bE(1,B.bi,D.biH,null)
D.eVQ=new A.F(!0,E.jH,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4Y=new A.x("FAMILY LIBRARY",null,D.eVQ,null,null,null,null,null,null,null,null,null)
D.buC=new A.bE(1,B.bi,D.f4Y,null)
D.LX=new C.GX("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.YM=new C.GY(0,"male")
D.ahL=new C.GY(1,"female")
D.xs=new C.GY(2,"unknown")
D.tp=new C.ajl(0,"owner")
D.LY=new C.ajl(1,"editor")
D.kf=new C.ajl(2,"viewer")
D.aix=new A.a0(61199,"MaterialIcons",!1)
D.by2=new A.a0(61504,"MaterialIcons",!1)
D.by3=new A.a0(61505,"MaterialIcons",!1)
D.by5=new A.a0(61587,"MaterialIcons",!1)
D.byb=new A.a0(61890,"MaterialIcons",!1)
D.bz4=new A.a0(63034,"MaterialIcons",!0)
D.bzU=new A.a0(63429,"MaterialIcons",!1)
D.akO=new A.a0(984520,"MaterialIcons",!1)
D.byB=new A.a0(62776,"MaterialIcons",!1)
D.bCe=new A.ae(D.byB,26,B.aZ,null,null,null)
D.bx1=new A.a0(57648,"MaterialIcons",!1)
D.bCx=new A.ae(D.bx1,14,B.c,null,null,null)
D.bCO=new A.ae(B.Fk,17,null,null,null,null)
D.bDj=new A.ae(E.ZF,null,null,null,null,null)
D.bDm=new A.ae(B.j9,18,E.jH,null,null,null)
D.Zr=new A.a0(62044,"MaterialIcons",!1)
D.bDs=new A.ae(D.Zr,null,B.aU,null,null,null)
D.bEh=new A.ae(B.dW,16,null,null,null,null)
D.bEo=new A.ae(D.Zr,32,B.aU,null,null,null)
D.bEG=new A.ae(E.aiy,18,B.cY,null,null,null)
D.bFJ=new A.ae(B.Fu,22,B.aB,null,null,null)
D.bFV=new A.ae(B.dW,22,B.aZ,null,null,null)
D.bG5=new A.ae(P.Zw,22,B.c,null,null,null)
D.bGa=new A.ae(B.ty,52,B.c,null,null,null)
D.bGk=new A.ae(B.Fu,30,B.aB,null,null,null)
D.alq=new A.ae(B.tH,22,B.c,null,null,null)
D.bGM=new A.ae(B.dW,17,null,null,null,null)
D.bH4=new A.ae(B.vj,26,B.cY,null,null,null)
D.bHO=new A.ae(B.ZR,16,null,null,null,null)
D.bIx=new A.ae(B.ty,24,B.c,null,null,null)
D.bIC=new A.ae(B.Mp,20,B.r2,null,null,null)
D.bIH=new A.ae(B.Fi,null,B.bT,null,null,null)
D.bIO=new A.ae(B.j9,18,B.c,null,null,null)
D.bJp=new A.ae(B.cx,22,B.ad,null,null,null)
D.bKe=new A.ae(B.e4,16,B.ad,null,null,null)
D.bKq=new A.ae(D.Zr,20,B.aU,null,null,null)
D.alR=new A.ae(B.hw,20,null,null,null,null)
D.bKV=new A.ae(B.cx,18,D.k7,null,null,null)
D.bLc=new A.ae(B.xO,28,B.c,null,null,null)
D.bLk=new A.ae(B.Mf,null,B.fU,null,null,null)
D.bLE=new A.ae(B.xO,24,B.c,null,null,null)
D.bM4=new A.ae(B.ty,null,B.aU,null,null,null)
D.bM5=new A.ae(B.ju,20,B.cY,null,null,null)
D.bMp=new A.ae(B.Fk,16,null,null,null,null)
D.bNW=new A.e0(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ew,!0,null,null,null,null)
D.d10=w([B.bs,B.aU,B.f6,B.aZ],x.O)
D.bPi=new A.a7(B.ax,B.aD,B.x,D.d10,null,null)
D.bcJ=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bhM=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cKp=w([D.bcJ,D.bhM],x.O)
D.bPt=new A.a7(B.b1,B.b6,B.x,D.cKp,null,null)
D.cWI=w([B.eX,B.fu,B.f6],x.O)
D.bPx=new A.a7(B.ax,B.aD,B.x,D.cWI,null,null)
D.add=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b5d=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cMj=w([D.add,D.b5d],x.O)
D.bQ5=new A.a7(B.b1,B.b6,B.x,D.cMj,null,null)
D.b8f=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.avs=w([D.b8f,D.add],x.O)
D.bQp=new A.a7(B.ax,B.aD,B.x,D.avs,null,null)
D.acg=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bag=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cVU=w([D.acg,D.bag],x.O)
D.bR_=new A.a7(B.a3,B.a7,B.x,D.cVU,null,null)
D.d6S=w([B.bL,B.mK],x.O)
D.bR1=new A.a7(B.b1,B.b6,B.x,D.d6S,null,null)
D.bcF=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.d7J=w([D.bcF,D.k7,D.k7,Ai.Wc],x.O)
D.d9S=w([0,0.07,0.9,1],x.F)
D.bRv=new A.a7(B.a3,B.a7,B.x,D.d7J,D.d9S,null)
D.bRG=new A.a7(B.ax,B.aD,B.x,B.PU,null,null)
D.d6t=w([B.aZ,B.aU,B.bT],x.O)
D.bSG=new A.a7(B.ax,B.aD,B.x,D.d6t,null,null)
D.cd2=w([B.bs,B.aZ,B.eX],x.O)
D.cd9=w([B.by,B.aE,B.jl],x.O)
D.cdb=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bbk=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cjf=w([D.bbk,E.acW],x.O)
D.dXY=new A.u(1,2)
D.eF4=new A.cP(B.aX,D.dXY,3)
D.asC=w([D.eF4],x.A)
D.cqt=w([B.fY,B.c8,B.f5],x.O)
D.ct6=w([B.bI,B.bw,B.bm],x.O)
D.bv4=new C.tX("classic","Classic leather","Gold-edged brown leather",D.avs,E.jH,E.jH,"\u2766",B.L,!0,!1,!1,!1)
D.b4x=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bgM=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cOU=w([D.b4x,D.bgM],x.O)
D.acZ=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bv_=new C.tX("ornate","Ornate gold","Double gold border and flourishes",D.cOU,D.acZ,D.acZ,"\u2726",B.L,!0,!0,!0,!1)
D.b7W=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bdp=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cHs=w([D.b7W,D.bdp],x.O)
D.buZ=new C.tX("parchment","Parchment","Old paper with dark ink",D.cHs,D.E9,G.io,"\u2767",B.L,!0,!1,!1,!0)
D.aaM=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bfj=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d4V=w([D.aaM,D.bfj],x.O)
D.baT=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.beJ=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bv1=new C.tX("minimal","Clean paper","Plain and elegant, like a printed book",D.d4V,D.baT,D.beJ,"",B.L,!0,!0,!1,!0)
D.bv3=new C.tX("midnight","Midnight","Deep blue with silver stars",L.avK,B.cn,B.bN,"\u2727",B.L,!0,!0,!1,!1)
D.buY=new C.tX("emerald","Emerald library","Green cloth, title on the left",Z.at0,E.jH,B.fZ,"\u25c6",B.bg,!0,!1,!1,!1)
D.bfG=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d3p=w([B.ex,D.bfG],x.O)
D.bbX=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bd1=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bv2=new C.tX("rose","Rose vintage","Burgundy with rose-gold lettering",D.d3p,D.bbX,D.bd1,"\u2740",B.L,!0,!1,!0,!1)
D.d7m=w([B.cC,O.mL],x.O)
D.bv0=new C.tX("modern","Modern","Dark, bold, left-aligned",D.d7m,B.aW,B.c,"",B.bg,!1,!0,!1,!1)
D.a0M=w([D.bv4,D.bv_,D.buZ,D.bv1,D.bv3,D.buY,D.bv2,D.bv0],A.ax("P<tX>"))
D.cGZ=w([B.bT,B.bj],x.O)
D.bcv=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cHE=w([D.aaM,D.bcv],x.O)
D.b7T=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cJb=w([D.b7T,B.da],x.O)
D.cKD=w([B.b7,B.iG,B.oc],x.O)
D.cL_=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b59=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b9C=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.d9O=w([D.acg,D.b59,D.b9C],x.O)
D.bv5=new C.tY("leather","Leather",D.d9O,"vintage")
D.cRP=w([B.dp,B.Kj,A2.Vo],x.O)
D.bvc=new C.tY("midnight","Midnight",D.cRP,"starry")
D.cKE=w([B.fm,B.ec,B.l0],x.O)
D.bvb=new C.tY("forest","Forest",D.cKE,"story")
D.dbE=w([B.eM,B.ex,B.k8],x.O)
D.bv8=new C.tY("burgundy","Burgundy",D.dbE,"royal")
D.csH=w([B.aE,B.pb,B.no],x.O)
D.bv9=new C.tY("royal","Royal",D.csH,"royal")
D.cMU=w([B.bw,B.cC,O.mL],x.O)
D.bv6=new C.tY("charcoal","Charcoal",D.cMU,"geo")
D.d9W=w([B.cb,B.dO,B.wM],x.O)
D.bva=new C.tY("sunset","Sunset",D.d9W,"sunset")
D.daz=w([B.iG,B.Ea,B.Vs],x.O)
D.bv7=new C.tY("ocean","Ocean",D.daz,"band")
D.yk=w([D.bv5,D.bvc,D.bvb,D.bv8,D.bv9,D.bv6,D.bva,D.bv7],A.ax("P<tY>"))
D.cNh=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cNN=w([B.ak,B.aK,B.M],x.O)
D.cOZ=w([B.ex,B.ec,B.dp,B.fv,B.wP,B.cY,B.jK,B.et,B.dj],x.O)
D.cP_=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eF5=new A.cP(B.dm,B.dB,8)
D.cPa=w([D.eF5],x.A)
D.cQc=w([B.bZ,B.dO,B.kC],x.O)
D.cQE=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cRL=w([B.bZ,B.hc],x.O)
D.cTG=w([B.aM,B.A8,B.wE],x.O)
D.cUw=w([B.bJ,B.cr,B.dy,B.aM],x.O)
D.cV0=w([B.iZ,B.cb,B.rT],x.O)
D.cVt=w([B.eX,B.cY],x.O)
D.cVZ=w([B.cw,B.fC,B.hs],x.O)
D.cW9=w([B.aW,B.bj,B.dp],x.O)
D.cWF=w([B.ey,B.cZ,B.ec],x.O)
D.cWW=w([B.dS,B.dp,B.Kj],x.O)
D.cYa=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a1E=w(["leather","linen","plain","stars","rays"],x.s)
D.bBV=new A.a0(985219,"MaterialIcons",!1)
D.bBt=new A.a0(983781,"MaterialIcons",!1)
D.avd=w([B.aiX,B.hX,B.lD,B.hY,D.bBV,B.FE,B.pw,D.bBt,L.akB,B.xQ,B.py,B.me],A.ax("P<a0>"))
D.a1J=w(["double","single","corners","none"],x.s)
D.d_N=w([B.dL,B.bo,B.et],x.O)
D.d0_=w([],x.t)
D.BH=w([],x.u)
D.d27=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d4i=w([B.aJ,B.fC,B.fv],x.O)
D.d5v=w([B.cp,B.oe,B.Wn],x.O)
D.d5I=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.do8=new C.lt("construction","Construction","Jobsite & builds",B.xF)
D.dof=new C.lt("house","Home Build","Houses & rooms",B.ve)
D.do5=new C.lt("grocery","Grocery","Store & pantry",B.a_n)
D.do4=new C.lt("calculator","Calculations","Math & estimates",B.MA)
D.dod=new C.lt("lumber","Materials","Lumber & supplies",B.MR)
D.do1=new C.lt("kitchen","Kitchen","Remodel & meals",A8.ajL)
D.bBq=new A.a0(983756,"MaterialIcons",!1)
D.do6=new C.lt("landscape","Landscaping","Yard & garden",D.bBq)
D.do0=new C.lt("plumbing","Plumbing","Pipes & water",B.pH)
D.dog=new C.lt("electrical","Electrical","Wiring & power",B.h4)
D.dnZ=new C.lt("store","Retail Shop","Daily business",B.kJ)
D.do_=new C.lt("paint_remodel","Paint & Remodel","Colors & walls",A9.ZX)
D.bAQ=new A.a0(983311,"MaterialIcons",!1)
D.doc=new C.lt("roofing","Roofing","Roofs & exteriors",D.bAQ)
D.bBD=new A.a0(983986,"MaterialIcons",!1)
D.dnY=new C.lt("warehouse","Warehouse","Storage & stock",D.bBD)
D.doa=new C.lt("vehicles","Vehicles","Fleet & transport",B.FF)
D.byD=new A.a0(62785,"MaterialIcons",!1)
D.do3=new C.lt("farm","Farm","Crops & livestock",D.byD)
D.do2=new C.lt("restaurant","Restaurant","Food & catering",B.tF)
D.do9=new C.lt("tools","Tools","Workshop gear",B.FB)
D.doe=new C.lt("wallet","Cash & Wallet","Quick spending",B.ju)
D.bzP=new A.a0(63395,"MaterialIcons",!1)
D.dob=new C.lt("concrete","Concrete","Foundation work",D.bzP)
D.do7=new C.lt("blueprint","Blueprint","Plans & design",Ad.aj2)
D.a27=w([D.do8,D.dof,D.do5,D.do4,D.dod,D.do1,D.do6,D.do0,D.dog,D.dnZ,D.do_,D.doc,D.dnY,D.doa,D.do3,D.do2,D.do9,D.doe,D.dob,D.do7],A.ax("P<lt>"))
D.d6a=w([B.bq,B.bo],x.O)
D.d6T=w([B.i2,B.ns,B.dD],x.O)
D.a2f=w(["top","middle","bottom"],x.s)
D.d9c=w([B.ct,B.bj,B.dp],x.O)
D.d9J=w([B.bc,B.cZ,B.ec],x.O)
D.dbz=w([B.bI,B.ak],x.O)
D.dbA=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dVE={top:0,middle:1,bottom:2}
D.deL=new A.bq(D.dVE,["Top","Middle","Bottom"],x.n)
D.dVj={double:0,single:1,corners:2,none:3}
D.deQ=new A.bq(D.dVj,["Double line","One line","Corners","None"],x.n)
D.dWq={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dgd=new A.bq(D.dWq,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dgp=new A.bq(B.ib,[],A.ax("bq<G,+(n,n)>"))
D.dVw={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.BS=new A.bq(D.dVw,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bq<n,G>"))
D.diI=new F.Me(32,null)
D.diJ=new F.Me(40,null)
D.diK=new F.Me(46,null)
D.aEi=new C.aqX(null)
D.dYV=new A.u(8,14)
D.fbH=new A.x("Write a new book",null,B.jg,null,B.L,null,null,null,null,null,null,null)
D.e0B=new A.C(B.l4,D.fbH,null)
D.al1=new A.ae(B.hv,18,B.c,null,null,null)
D.f5i=new A.x("Add",null,B.mu,null,null,null,null,null,null,null,null,null)
D.cUL=w([D.al1,B.pY,D.f5i],x.p)
D.eD2=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cUL,null)
D.e0V=new A.C(B.oo,D.eD2,null)
D.e0W=new A.C(E.afm,Y.UT,null)
D.f_r=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8i=new A.x("New Project",null,D.f_r,null,null,null,null,null,null,null,null,null)
D.cYw=w([D.al1,B.ab,D.f8i],x.p)
D.eD5=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cYw,null)
D.e15=new A.C(B.iN,D.eD5,null)
D.faw=new A.x("Choose your header",null,T.vW,null,null,null,null,null,null,null,null,null)
D.e1q=new A.C(B.hH,D.faw,null)
D.b3y=new A.fh(2.2,null,null,null,null,B.cY,null,null,null,null)
D.eHI=new A.a6(22,22,D.b3y,null)
D.b1P=new A.cr(B.A,null,null,D.eHI,null)
D.e1v=new A.C(B.Xj,D.b1P,null)
D.bos=new A.Q(14,2,14,6)
D.fnz=new A.x("The top of your book. Tap a design to see it.",null,S.Sy,null,null,null,null,null,null,null,null,null)
D.e1w=new A.C(D.bos,D.fnz,null)
D.e33=new A.iL(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e36=new A.iL(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aFw=new A.iL(1,0.9607843137254902,0.48627450980392156,0)
D.HF=new A.iL(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.yR=new A.iL(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e3c=new A.iL(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fHq=new C.bfh(null)
D.bjB=new A.m8(D.fHq,null,B.au,null,null)
D.aJ9=new A.cK(0,0,0,0,null,null,D.bjB,null)
D.epU=new A.z(-42,42)
D.ey3=new A.cL([0,0,1,1])
D.aKq=new A.aa(0,0,520,160)
D.aKD=new A.b7(B.rA,B.Y)
D.fn7=new A.x("Let the AI write it from your tree",null,B.ks,null,B.L,null,null,null,null,null,null,null)
D.bvJ=new A.dm(1,B.ci,D.fn7,null)
D.cRK=w([E.a_Q,B.ab,D.bvJ],x.p)
D.eCL=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cRK,null)
D.f4Z=new A.x("Save member",null,B.cc,null,null,null,null,null,null,null,null,null)
D.d4y=w([D.alR,B.ab,D.f4Z],x.p)
D.eCT=new A.co(B.aQ,B.ba,B.j,B.m,null,B.p,null,0,D.d4y,null)
D.bG_=new A.ae(B.hI,14,B.aZ,null,null,null)
D.eUv=new A.F(!0,B.aZ,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8I=new A.x("Cashier",null,D.eUv,null,null,null,null,null,null,null,null,null)
D.cZ1=w([D.bG_,B.bp,D.f8I],x.p)
D.eCV=new A.co(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cZ1,null)
D.f5_=new A.x("Transfer & settings",null,B.du,null,null,null,null,null,null,null,null,null)
D.bu7=new A.bE(1,B.bi,D.f5_,null)
D.cK8=w([D.alq,B.aw,D.bu7],x.p)
D.eCW=new A.co(B.aQ,B.e,B.j,B.m,null,B.p,null,0,D.cK8,null)
D.eGs=new A.at(16,40)
D.eGx=new A.at(22,64)
D.eGE=new A.at(280,88)
D.eHo=new A.a6(30,null,null,null)
D.eIG=new A.hH(2,12,12,1.05,null)
D.f8o=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eJo=new A.b1(D.f8o,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f8D=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aMs=new A.b1(D.f8D,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fgs=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eJS=new A.b1(D.fgs,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fqm=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eJX=new A.b1(D.fqm,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fau=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eK3=new A.b1(D.fau,null,null,null,null,null,null,null,null,null,null,null,null,B.fP,!1,null,null,null,B.q,null)
D.fnM=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aMw=new A.b1(D.fnM,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f5A=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eKt=new A.b1(D.f5A,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fr0=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eLc=new A.b1(D.fr0,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fm6=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eLB=new A.b1(D.fm6,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fqq=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eLE=new A.b1(D.fqq,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fhZ=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eLG=new A.b1(D.fhZ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fch=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eLH=new A.b1(D.fch,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fci=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eMH=new A.b1(D.fci,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f8q=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eMZ=new A.b1(D.f8q,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fac=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eNh=new A.b1(D.fac,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fhu=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eNx=new A.b1(D.fhu,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fd2=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eNy=new A.b1(D.fd2,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.eQw=new A.F(!0,D.k7,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQX=new A.F(!0,D.k7,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRA=new A.rm(!0,B.rb,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRQ=new A.F(!0,D.k7,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSm=new A.F(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6v=new A.rm(!0,B.Rf,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTl=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTJ=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVh=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVl=new A.F(!0,G.io,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWA=new A.F(!0,B.M,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXh=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY_=new A.F(!0,B.bT,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY3=new A.F(!0,B.bL,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYp=new A.F(!0,D.E9,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYy=new A.F(!0,B.aZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZw=new A.F(!0,B.cY,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f__=new A.F(!0,B.bT,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_p=new A.F(!0,B.aZ,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0Q=new A.F(!0,B.ak,null,null,null,null,11.5,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0Y=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOF=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6X=new A.F(!0,B.ak,null,null,null,null,12,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2C=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3_=new A.F(!0,G.io,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f36=new A.F(!0,G.io,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3R=new A.x("Themes",null,B.oR,null,null,null,null,null,null,null,null,null)
D.f4s=new A.x("Add Item",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eV0=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4P=new A.x("Debt receipt",null,D.eV0,null,B.L,null,null,null,null,null,null,null)
D.aOA=new A.F(!0,B.ak,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f55=new A.x("Person who owes",null,D.aOA,null,null,null,null,null,null,null,null,null)
D.f62=new A.x("Notes",null,B.a6C,null,null,null,null,null,null,null,null,null)
D.f6s=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eU0=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6w=new A.x("Share",null,D.eU0,null,null,null,null,null,null,null,null,null)
D.f7q=new A.x("Move your family trees",null,D.aOF,null,null,null,null,null,null,null,null,null)
D.f80=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.f8C=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.f9N=new A.x("Remove this book?",null,B.hm,null,null,null,null,null,null,null,null,null)
D.aP4=new A.x("Download",null,B.cc,null,null,null,null,null,null,null,null,null)
D.faS=new A.x("What should the AI do?",null,B.du,null,null,null,null,null,null,null,null,null)
D.fcd=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fdh=new A.x("Ribbon bookmark",null,B.iC,null,null,null,null,null,null,null,null,null)
D.f0K=new A.F(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdK=new A.x("NGMY.ORG",null,D.f0K,null,B.L,null,null,null,null,null,null,null)
D.ff_=new A.x("Scan family tree QR",null,B.cu,null,null,null,null,null,null,null,null,null)
D.eYh=new A.F(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffJ=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eYh,null,B.L,null,null,null,null,null,null,null)
D.fgU=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fh0=new A.x("Thumbnail",null,B.oR,null,null,null,null,null,null,null,null,null)
D.fhA=new A.x("Save the cover",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fi_=new A.x("Your photos",null,B.oR,null,null,null,null,null,null,null,null,null)
D.fie=new A.x("Create Project",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fiG=new A.x("Design your cover",null,T.vW,null,null,null,null,null,null,null,null,null)
D.fiM=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fiP=new A.x("PICTURE",null,H.mv,null,null,null,null,null,null,null,null,null)
D.fja=new A.x("Paid",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fjc=new A.x("You can undo it right after.",null,S.SG,null,null,null,null,null,null,null,null,null)
D.fjH=new A.x("Print",null,B.uh,null,null,null,null,null,null,null,null,null)
D.fk2=new A.x("Amount owed",null,D.aOA,null,null,null,null,null,null,null,null,null)
D.fkf=new A.x("Got it",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fkP=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fkS=new A.x("Add to budget",null,B.cc,null,null,null,null,null,null,null,null,null)
D.flh=new A.x("Debtor signature",null,B.a6C,null,null,null,null,null,null,null,null,null)
D.flp=new A.x("Change icon",null,E.aNT,null,null,null,null,null,null,null,null,null)
D.fmy=new A.x("Family tree QR",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fmY=new A.x("Download",null,B.uh,null,null,null,null,null,null,null,null,null)
D.fn1=new A.x("Change",null,B.oR,null,null,null,null,null,null,null,null,null)
D.fnS=new A.x("Clear all",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fnV=new A.x("WHAT SHOULD IT CHANGE?",null,H.mv,null,null,null,null,null,null,null,null,null)
D.fov=new A.x("COLOUR",null,H.mv,null,null,null,null,null,null,null,null,null)
D.foH=new A.x("Do it",null,B.cu,null,null,null,null,null,null,null,null,null)
D.foK=new A.x("Create Tree",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fpI=new A.x("Create Family Tree",null,B.eV,null,null,null,null,null,null,null,null,null)
D.ePv=new A.F(!0,E.jH,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpY=new A.x("Write the first page myself",null,D.ePv,null,null,null,null,null,null,null,null,null)
D.fqt=new A.x("Use this header",null,B.cu,null,null,null,null,null,null,null,null,null)
D.fqz=new A.x("Create Project",null,E.aOk,null,null,null,null,null,null,null,null,null)
D.fE2=new C.aaj(1,"header")
D.a7L=new C.aaj(2,"projects")
D.fE3=new C.aaj(3,"cashier")
D.a7M=new C.aaj(4,"familyTree")
D.fPl=new C.ctX(0,"start")
D.fPm=new C.ctY(0,"start")
D.fEk=new C.Xx(null)
D.fFj=new C.XZ(null)
D.dgm=new A.bq(B.ib,[],A.ax("bq<n,F7>"))
D.d0l=w([],x.E)
D.d0m=w([],x.M)
D.fFQ=new C.bcz(D.dgm,D.d0l,D.d0m,0,0,null,null)
D.fI4=new C.Zm(null)
D.a8t=new C.aI2(0,"projects")
D.aSV=new C.aI2(1,"cashier")
D.fNi=new C.aI2(2,"familyTree")})()};
(a=>{a["lG0EF/uoD1hu4IH3TpFDfl9diX4="]=a.current})($__dart_deferred_initializers__);